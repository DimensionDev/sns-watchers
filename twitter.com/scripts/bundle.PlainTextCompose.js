;(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return v
      }),
        n.d(t, 'e', function () {
          return y
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
        i = n.n(a),
        r = n('yiKp'),
        o = n.n(r),
        l = (n('yH/f'), n('KqXw'), n('LJOr'), n('7x/C'), n('JtPf'), n('oEOe')),
        s = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        d = n('Ssj5'),
        u = n('qlwE'),
        m = n('a/ea'),
        p = n('474o'),
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
      var v = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
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
            v(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        w = function (e, t) {
          return function (n, a, i) {
            var r = i.api
            return Object(l.b)(n, { request: r.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, a) {
            a.api
            var i = Object(m.d)(n())
            return t(
              w(
                {
                  query_type: p.a.tweet_compose_location,
                  lat: null == i ? void 0 : i.coords.latitude,
                  long: null == i ? void 0 : i.coords.longitude,
                  hacc: null == i ? void 0 : i.coords.accuracy,
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
            var a = y(t()),
              i = v(t())
            if (a === s.a.LOADING || i) return Promise.resolve()
            var r = Object(m.d)(t())
            return r
              ? e(
                  w(
                    {
                      lat: r.coords.latitude,
                      long: r.coords.longitude,
                      hacc: r.coords.accuracy,
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
            return Object(u.m)(t()) && Object(m.c)(t()) === c.b.granted
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
      d.a.register(
        i()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return o()(o()({}, e), {}, i()({}, n, { fetchStatus: s.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return o()(o()({}, e), {}, i()({}, a, { fetchStatus: s.a.FAILED }))
            case f.SUCCESS:
              var r = t.meta.resultSet,
                l = t.payload
              return o()(o()({}, e), {}, i()({}, r, { fetchStatus: s.a.LOADED, results: l }))
            case S:
              var c = t.payload
              return o()(o()({}, e), {}, { lastSelectedPlace: null != c ? c : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        d = n.n(c),
        u = n('ERkP'),
        m = n.n(u),
        p = n('rHpw'),
        h = n('MWbm'),
        f = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(h.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        g = p.a.create(function (e) {
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
        i = n('pXBW'),
        r = n('3XMw'),
        o = n.n(r),
        l = n('SrIh'),
        s = o.a.a5d4fda0,
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var r = n.context
              return (
                !n instanceof i.a && (n.message = 'Strato error occurred in '.concat(r.id, ': ').concat(r.action)),
                Object(l.a)(n, { extra: { context: r, isStrato: !0 } }),
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
          return i
        }),
        n.d(t, 'c', function () {
          return r
        })
      n('yH/f')
      var a = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        i = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        r = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        l = n('5Yy7'),
        s = n.n(l),
        c = n('2VqO'),
        d = n.n(c),
        u = n('ERkP'),
        m = n.n(u),
        p = n('3XMw'),
        h = n.n(p),
        f = n('rHpw'),
        g = n('+/1j'),
        v = n('MWbm'),
        y = h.a.e5b0063d,
        _ = 0,
        b = (function (e) {
          s()(n, e)
          var t = d()(n)
          function n() {
            var e
            return i()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(_)), (_ += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = y({ title: n })
                  return m.a.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.a.createElement(
                      g.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: f.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.a.createElement(v.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      t.a = b
    },
    '8A5z': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
              }),
              o.a.createElement('path', {
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
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
              o.a.createElement('path', {
                d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
              }),
              o.a.createElement('path', {
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
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        m = n.n(u),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('ERkP')),
        g = n.n(f),
        v = n('rxPX'),
        y = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        b = function (e, t) {
          return t.module.selectItems(e)
        },
        C = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: b }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(y.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        w = n('v//M'),
        T = n('sIe2'),
        x = n('3XMw'),
        E = n.n(x),
        S = n('TEoO'),
        I = E.a.i9028824,
        R = 'sliceTimeline',
        A = function (e) {
          return e
        },
        k = { viewType: 'timeline' },
        P = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  i = t.noItemsRenderer,
                  r = t.numColumns,
                  o = t.onScrollEnd,
                  l = t.renderer,
                  s = t.withoutHeadroom
                return !a || r < 1
                  ? null
                  : 1 === r
                  ? g.a.createElement(S.a, {
                      cacheKey: R,
                      footer: n,
                      identityFunction: A,
                      items: a,
                      noItemsRenderer: i,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: l,
                      withoutHeadroom: s,
                    })
                  : g.a.createElement(T.a, {
                      ListEmptyComponent: i,
                      data: a,
                      keyExtractor: A,
                      numColumns: r,
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
                  i = t.fetch,
                  r = t.fetchIfNeeded
                ;(n ? i : r)().catch(a())
              }),
              e
            )
          }
          return (
            o()(n, [
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
                        behavioralEventContext: k,
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
      h()(P, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var O = C(P)
      t.a = O
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return i
        })
      n('yH/f')
      var a = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        i = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
        l = n('5UID'),
        s = n('3GUV'),
        c = n('iBK2'),
        d = ['accessibilityTitle'],
        u = o.a.createElement(s.a, null),
        m = function (e) {
          var t = e.accessibilityTitle,
            n = i()(e, d),
            a = o.a.createElement(c.b, n)
          return t ? o.a.createElement(l.a, { title: t }, a) : a
        }
      ;(m.defaultProps = { footer: u }), (t.a = m)
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
    Zg3A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        i = n.n(a),
        r = n('ERkP'),
        o = n.n(r),
        l = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
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
        return u
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
          return v
        })
      var a = n('KEM+'),
        i = n.n(a),
        r = n('yiKp'),
        o = n.n(r),
        l = (n('yH/f'), n('7x/C'), n('JtPf'), n('M6MT')),
        s = n('Ssj5'),
        c = 'geoLocation',
        d = Object.freeze({ permissionStatus: void 0, position: void 0 })
      var u = function (e) {
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
            return y()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(l.b.denied)), Promise.reject(t)
              })
          }
        },
        v = function () {
          return function (e, t) {
            return m(t()) ? Promise.resolve() : e(g())
          }
        },
        y = function () {
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
        i()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case p:
              return o()(o()({}, e), {}, { permissionStatus: t.payload })
            case f:
              return o()(o()({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    h5NW: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        r = n('RhWx'),
        o = n.n(r),
        l = n('yiKp'),
        s = n.n(l),
        c = n('VrFO'),
        d = n.n(c),
        u = n('Y9Ll'),
        m = n.n(u),
        p = n('1Pcy'),
        h = n.n(p),
        f = n('5Yy7'),
        g = n.n(f),
        v = n('2VqO'),
        y = n.n(v),
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
        x = n('pXBW'),
        E = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        I = n('v6aA'),
        R = n('+Kfv'),
        A = n('eSoz'),
        k = n('rxPX'),
        P = function (e, t) {
          var n = t.communityId
          return n ? A.c.select(e, n) : void 0
        },
        O = Object(k.a)().propsFromState(function () {
          return { community: P }
        }),
        M = n('MtXG'),
        D = n('t62R'),
        N = n('CKsB'),
        F = n('rHpw'),
        L = n('3XMw'),
        B = n.n(L),
        V = B.a.d58baa7e,
        j = O(
          w.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              i = e.selectedCommunityId
            if (!n) return null
            var r,
              o = n.member_count
            return w.a.createElement(N.a, {
              actionSubText:
                ((r = V(o)),
                w.a.createElement(
                  M.a.Group,
                  null,
                  w.a.createElement(
                    M.a,
                    null,
                    w.a.createElement(
                      D.b,
                      { color: 'white' },
                      w.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.a.createElement(M.a.Value, null, B.a.ibd0106d({ formattedCount: r })),
                        w.a.createElement(M.a.Label, null, B.a.cface2d0({ count: o })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: i === a,
              key: a,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: a,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: z.menuItem,
            })
          }),
        ),
        z = F.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = n('0zXz'),
        U = n('FS1z'),
        W = n('MWbm'),
        q = n('yw4N'),
        G = n('/yvb'),
        K = n('+Eiw'),
        Y = n('Zg3A'),
        X = n('EyD/'),
        Z = B.a.e815fc33,
        Q = B.a.c63602d3,
        J = B.a.baffe39a,
        $ = B.a.aa4209e8,
        ee = B.a.d0748dae,
        te = B.a.abd845fd,
        ne = { viewType: 'everyone' },
        ae = { viewType: 'community' },
        ie = B.a.d58baa7e,
        re = F.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: K.a.getBackgroundImage() },
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
        oe = function (e) {
          var t,
            n,
            a = e.audienceControlsValue,
            i = e.dismiss,
            r = e.hasMemberships,
            o = e.isC9sParticipationEnabled,
            l = e.isSuperFollowsCreator,
            s = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            d = w.a.useContext(I.a),
            u = a.communityIdValue || void 0,
            m = a.exclusivityControlValue || void 0,
            p = a.trustedFriendsValue || void 0,
            h = d.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            f = w.a.useCallback(
              function (e) {
                return function () {
                  s(e), i()
                }
              },
              [s, i],
            ),
            g = function (t) {
              t.stopPropagation()
              var n = e.dismiss,
                a = e.history
              return n(), a.push('/i/twittercircle/edit')
            }
          return w.a.createElement(
            W.a,
            { style: re.root },
            w.a.createElement(
              q.a,
              { style: re.viewport },
              w.a.createElement(
                w.a.Fragment,
                null,
                w.a.createElement(D.b, { size: 'headline1', style: re.title, weight: 'bold' }, Z),
                w.a.createElement(
                  R.a,
                  { behavioralEventContext: ne },
                  w.a.createElement(N.a, {
                    Icon: Y.a,
                    actionText: J,
                    isSelected: !m && !u && !p,
                    onClick: f({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: re.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                l
                  ? w.a.createElement(N.a, {
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
                      style: re.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                h
                  ? w.a.createElement(N.a, {
                      Icon: X.a,
                      actionSubText:
                        ((t = 5),
                        (n = ie(t)),
                        w.a.createElement(
                          M.a.Group,
                          null,
                          w.a.createElement(
                            M.a,
                            null,
                            w.a.createElement(
                              D.b,
                              { color: 'white' },
                              w.a.createElement(
                                B.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                w.a.createElement(M.a.Value, null, B.a.a5f7b70f({ formattedCount: n })),
                                w.a.createElement(M.a.Label, null, B.a.a7daec1e({ count: t })),
                              ),
                            ),
                            w.a.createElement(G.a, { onPress: g, size: 'xSmall', type: 'primaryText' }, te),
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
                      style: re.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              r && c && o
                ? w.a.createElement(
                    W.a,
                    null,
                    w.a.createElement(
                      R.a,
                      { behavioralEventContext: ae },
                      w.a.createElement(D.b, { style: re.title, weight: 'bold' }, Q),
                      w.a.createElement(U.a, {
                        module: c,
                        noItemsRenderer: H.a,
                        renderer: function (e) {
                          return w.a.createElement(j, {
                            clickHandler: f,
                            communityId: e,
                            dismiss: i,
                            key: e,
                            selectedCommunityId: u,
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
        le = n('xVN5'),
        se = n('wa7Z'),
        ce = n('hqKg'),
        de = n('li/m'),
        ue = n('RqPI'),
        me = n('xZGM'),
        pe = n('0KEI'),
        he = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? A.c.select(e, n) : void 0
        },
        fe = function (e, t) {
          return Object(me.z)(e, me.f)
        },
        ge = Object(k.a)()
          .propsFromState(function () {
            return {
              communities: A.f,
              educationalVisibilityFlag: fe,
              hasMemberships: de.d,
              selectedCommunity: he,
              sliceModule: Object(ce.createSelector)(ue.q, function (e) {
                return e ? Object(se.a)(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(pe.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(me.w)(me.f)
              },
              updateSingleComposer: le.x,
            }
          }),
        ve = n('FG+G'),
        ye = n('Sp5X'),
        _e = n('X00g'),
        be = n('efqG'),
        Ce = B.a.baffe39a,
        we = B.a.e815fc33,
        Te = B.a.aa4209e8,
        xe = B.a.d0748dae,
        Ee = { viewType: 'communities_controls' },
        Se = w.a.createElement(ve.a, null),
        Ie = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            return (
              d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_renderContent', function (e) {
                var t = i.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  r = t.isC9sParticipationEnabled,
                  o = t.isSuperFollowsCreator,
                  l = t.sliceModule
                return w.a.createElement(oe, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: ye.a,
                  isC9sParticipationEnabled: r,
                  isSuperFollowsCreator: o,
                  onAudienceControlsValueChange: i._handleAudienceControlsValueChange,
                  sliceModule: l,
                })
              }),
              b()(h()(i), '_handleAudienceControlsValueChange', function (e) {
                var t = i.props.updateSingleComposer
                i._handleDismissEducationalVisibilty(),
                  i.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              b()(h()(i), '_handleOpen', function () {
                i.setState({ popoverIsOpen: !0 })
              }),
              b()(h()(i), '_handleDismiss', function () {
                i.setState({ popoverIsOpen: !1 }), i._handleDismissEducationalVisibilty()
              }),
              b()(h()(i), '_handleDismissEducationalVisibilty', function () {
                i.props.addEducationFlag()
              }),
              (i.state = { popoverIsOpen: !1 }),
              i
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
                    r = t.hasMemberships,
                    o = t.isSuperFollowsCreator,
                    l = t.selectedCommunity,
                    s = this.state.popoverIsOpen,
                    c = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    d = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    u = n.communityIdValue || !1,
                    m = n.exclusivityControlValue || !1,
                    p = n.trustedFriendsValue || !1,
                    h = a && !l,
                    f = Ce
                  if ((u && null != l && l.name ? (f = l.name) : m ? (f = Te) : p && (f = xe), m))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != l && l.theme && c) {
                    var g = _e.a.getCommunityUIColorName(l.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return o || r || d
                    ? w.a.createElement(
                        R.a,
                        { behavioralEventContext: Ee },
                        w.a.createElement(
                          W.a,
                          { style: Re.container },
                          w.a.createElement(
                            be.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            w.a.createElement(
                              G.a,
                              i()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: we,
                                  accessibilityRole: 'button',
                                  icon: Se,
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
      b()(Ie, 'contextType', I.a)
      var Re = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Ae = ge(Ie),
        ke = n('ddV6'),
        Pe = n.n(ke),
        Oe = n('PKbs'),
        Me = function (e, t) {
          var n = t.selectedCommunityId
          return n ? A.c.select(e, n) : void 0
        },
        De = Object(k.a)()
          .propsFromState(function () {
            return { community: Me }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(pe.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: A.c.fetchOneIfNeeded,
            }
          }),
        Ne = n('YeIG'),
        Fe = n('21zW'),
        Le = B.a.gfca5254,
        Be = B.a.f510c8b2,
        Ve = w.a.createElement(D.b, { weight: 'bold' }, Be),
        je = F.a.create(function (e) {
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
        ze = De(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            r = e.selectedCommunityId,
            o = e.showMiddot
          w.a.useEffect(
            function () {
              r && Object(Ne.a)(t) && a(r).catch(n())
            },
            [t, r, n, a],
          )
          var l = w.a.useState(!1),
            s = Pe()(l, 2),
            c = s[0],
            d = s[1],
            u = w.a.useContext(I.a).featureSwitches,
            m = w.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.a.createElement(Oe.b, {
                    badgeStyle: je.badgeStyle,
                    headerContainerStyle: je.rulesHeader,
                    heading: Ve,
                    ruleContainerStyle: je.ruleContainerStyle,
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
              h = _e.a.getCommunityUIColorName(p),
              f = u.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.a.createElement(
              W.a,
              { style: je.container },
              o ? w.a.createElement(Fe.a, null) : null,
              w.a.createElement(
                be.a,
                {
                  onDismiss: function () {
                    return d(!1)
                  },
                  onOpen: function () {
                    return d(!0)
                  },
                  renderContent: m,
                },
                w.a.createElement(
                  G.a,
                  i()(
                    {
                      accessibilityExpanded: c,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: je.button,
                    },
                    f,
                  ),
                  Le,
                ),
              ),
            )
          }
          return null
        }),
        He = function (e, t) {
          return Object(me.z)(e, me.g)
        },
        Ue = Object(k.a)()
          .propsFromState(function () {
            return { shouldShowEducation: He }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(me.w)(me.g)
              },
            }
          }),
        We = n('4zmP'),
        qe = B.a.g46f363d,
        Ge = { viewType: 'rule_education' }
      var Ke = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ye = Ue(function (e) {
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
                  { style: Ke.container },
                  w.a.createElement(We.a, { behavioralEventContext: Ge, onClose: a, text: qe, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Xe = n('H7Rt'),
        Ze = n('m3Bd'),
        Qe = n.n(Ze),
        Je = n('yZqq'),
        $e = function (e, t) {
          return Object(me.z)(e, me.q)
        },
        et = Object(k.a)()
          .propsFromState(function () {
            return { shouldShowEducation: $e }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(me.w)(me.q)
              },
            }
          }),
        tt = B.a.aa65a449,
        nt = { viewType: 'persistent_conversation_controls_education' }
      var at = F.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        it = et(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            i = w.a.useContext(I.a).featureSwitches,
            r = w.a.useState(),
            o = Pe()(r, 2),
            l = o[0],
            s = o[1],
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
            !0 === i.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.a.createElement(
                  W.a,
                  { style: at.container },
                  w.a.createElement(We.a, {
                    arrowPositionStart: l,
                    behavioralEventContext: nt,
                    onClose: c,
                    text: tt,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        rt = n('Irs7'),
        ot = n('DlMI'),
        lt = n('gBde'),
        st = n('gUPl'),
        ct = n('cOhU'),
        dt = ['analytics'],
        ut = w.a.createElement(ot.a, null),
        mt = w.a.createElement(lt.a, null),
        pt = w.a.createElement(st.a, null),
        ht = w.a.createElement(ct.a, null),
        ft = 'conversation_control',
        gt = { viewType: ft },
        vt = Object.freeze({
          all: { icon: ut, label: B.a.i8ea6d4e },
          community: { icon: pt, label: B.a.ec5a4a25 },
          by_invitation: { icon: mt, label: B.a.b4543009 },
          community_members: { icon: ht, label: B.a.i13be5a0 },
          super_followers_exclusive: { icon: ut, label: B.a.f8393bda },
          trusted_friends_tweet: { icon: ut, label: B.a.c0857ccd },
        }),
        yt =
          (Object.freeze(['community', 'by_invitation']),
          Object(rt.a)(function (e) {
            var t = e.analytics,
              n = Qe()(e, dt),
              a = e.disabled,
              i = e.value,
              r = vt[i],
              o = r.icon,
              l = r.label,
              s = w.a.useState(!1),
              c = Pe()(s, 2),
              d = c[0],
              u = c[1],
              m = w.a.useRef(null)
            w.a.useEffect(function () {
              i !== Xe.a.all && i !== Xe.a.community_members && u(!0)
            }, [])
            var p = w.a.useCallback(
              function (e) {
                t.scribe({ element: ft, action: 'click' })
              },
              [t],
            )
            return w.a.createElement(
              R.a,
              { behavioralEventContext: gt },
              d ? w.a.createElement(it, { buttonRef: m.current }) : null,
              w.a.createElement(
                W.a,
                { style: _t.controlsContainer },
                w.a.createElement(
                  Je.a,
                  n,
                  w.a.createElement(
                    G.a,
                    { disabled: a, icon: o, onPress: p, ref: m, size: 'xSmall', style: _t.button, type: 'brandText' },
                    l,
                  ),
                ),
              ),
            )
          })),
        _t = F.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        bt = n('krmn'),
        Ct = n('cIoY'),
        wt = n('w3n3'),
        Tt = n('MLl7'),
        xt = n('1auM'),
        Et = n('07FG'),
        St = n('Q8CU'),
        It = n('QbaN'),
        Rt = n('VPdC'),
        At = n('WPfJ'),
        kt = F.a.create(function (e) {
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
              zIndex: At.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: At.e },
            iconEmojiPicker: { zIndex: At.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: At.a,
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
        Pt = B.a.bdbcdd93,
        Ot = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            i = e.setActiveParentKey,
            r = n || t.length >= 4,
            o = t.length < 3
          return w.a.createElement(Rt.a, {
            acceptGifs: 0 === t.length,
            acceptVideo: 0 === t.length,
            accessibilityLabel: t.length > 0 ? Pt : void 0,
            disabled: r,
            multiple: o,
            onChange: a,
            onPress: i,
            style: [kt.toolBarButton, kt.firstToolBarButton],
            type: 'brandText',
          })
        },
        Mt = n('p+r5'),
        Dt = n('GWvE'),
        Nt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            var e
            d()(this, n)
            for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
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
                    i = e.label,
                    r = e.name,
                    o = e.onBlur,
                    l = e.onChange
                  return w.a.createElement(
                    W.a,
                    { style: Ft.root },
                    w.a.createElement(Mt.a, {
                      autoCapitalize: 'none',
                      autoCorrect: !1,
                      autoFocus: t,
                      defaultValue: n,
                      editable: a,
                      label: i,
                      maxLength: 25,
                      name: r,
                      onBlur: o,
                      onChange: l,
                      ref: this._setInputRef,
                      spellCheck: 'false',
                      style: Ft.formTextInput,
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
                    (this.value && !Object(Dt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Nt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Ft = F.a.create(function (e) {
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
        Lt = Nt,
        Bt = (n('Blm6'), n('TJCb'), n('DZ+c'), n('mtvn')),
        Vt = n('6XNv'),
        jt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
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
                    i = e.max,
                    r = e.min,
                    o = e.onChange,
                    l = e.testID,
                    s = !t || r === i,
                    c = e.value.toString(),
                    d = Object(Bt.a)(r, i + 1).map(function (e) {
                      return { label: ''.concat(B.a.ia24dc8c(e)), value: ''.concat(e) }
                    })
                  return w.a.createElement(Vt.a, {
                    disabled: s,
                    label: n,
                    onChange: o,
                    options: d,
                    style: [zt.selector, !a && zt.rightMargin],
                    testID: l,
                    value: c,
                  })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(jt, 'defaultProps', { last: !1 })
      var zt = F.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Ht = jt,
        Ut = 'addPollChoice',
        Wt = 'selectPollDays',
        qt = 'selectPollHours',
        Gt = 'selectPollMinutes',
        Kt = 'removePollButton',
        Yt = B.a.caf8edc4,
        Xt = B.a.g93586be,
        Zt = B.a.d073b644,
        Qt = B.a.a2f0728e,
        Jt = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            return (
              d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_handleDaysChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = a.hours,
                    r = a.minutes,
                    o = 0 === n && 0 === i && 0 === r ? 1 : 7 === n ? 0 : i,
                    l = { days: n, hours: o, minutes: 7 === n ? 0 : 0 === n && 0 === o && r < 5 ? 5 : r }
                  return t && t(l), { duration: l }
                })
              }),
              b()(h()(i), '_handleHoursChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = a.days,
                    r = a.minutes,
                    o = { days: i, hours: n, minutes: 0 === i && 0 === n && r < 5 ? 5 : r }
                  return t && t(o), { duration: o }
                })
              }),
              b()(h()(i), '_handleMinutesChange', function (e) {
                var t = i.props.onChange,
                  n = parseInt(e, 10)
                i.setState(function (e) {
                  var a = e.duration,
                    i = { days: a.days, hours: a.hours, minutes: n }
                  return t && t(i), { duration: i }
                })
              }),
              (i.state = { duration: e.initialDuration }),
              i
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
                    w.a.createElement(D.b, { color: 'normal', style: $t.durationLabel }, t ? Yt : ''),
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
                    i = a.days,
                    r = a.hours,
                    o = a.minutes
                  return w.a.createElement(
                    W.a,
                    { style: $t.durationControls },
                    w.a.createElement(Ht, {
                      editable: t && n,
                      label: Xt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Wt,
                      value: i,
                    }),
                    w.a.createElement(Ht, {
                      editable: t && n,
                      label: Zt,
                      max: 7 === i ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: qt,
                      value: r,
                    }),
                    w.a.createElement(Ht, {
                      editable: t && n,
                      label: Qt,
                      last: !0,
                      max: 7 === i ? 0 : 59,
                      min: 0 === i && 0 === r ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Gt,
                      value: o,
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
      b()(Jt, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var $t = F.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        en = Jt,
        tn = n('iY63'),
        nn = n('jtO7'),
        an = B.a.g589c2e1,
        rn = B.a.a1e6c3a1,
        on = B.a.a739e006,
        ln = B.a.d89a5b92,
        sn = B.a.c2a8118d,
        cn = B.a.a8ede1de,
        dn = B.a.af40a8ef,
        un = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i
            d()(this, n),
              (i = t.call(this, e, a)),
              b()(h()(i), '_setChoice1Ref', function (e) {
                i._choice1 = e
              }),
              b()(h()(i), '_setChoice2Ref', function (e) {
                i._choice2 = e
              }),
              b()(h()(i), '_setChoice3Ref', function (e) {
                i._choice3 = e
              }),
              b()(h()(i), '_setChoice4Ref', function (e) {
                i._choice4 = e
              }),
              b()(h()(i), '_setDurationPickerRef', function (e) {
                i._durationPicker = e
              }),
              b()(h()(i), '_handleValidation', function () {
                var e = i.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  r = i.choices,
                  o = h()(i),
                  l = [o._choice1, o._choice2, o._choice3, o._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                r && r.length >= 2 && l ? a() : n(), t && t({ choices: r, duration: i.duration })
              }),
              b()(h()(i), '_handleAdd', function () {
                i.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  i.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              b()(h()(i), '_handleDurationChange', function (e) {
                var t = i.props.onChange
                t && t({ choices: i.choices, duration: e })
              }),
              b()(h()(i), '_handleBlur', function () {
                var e = i.props.onBlur
                null == e || e()
              })
            var r = e.initialChoices,
              o = void 0 === r,
              l = (r || []).length,
              s = l > 2 ? l : 2
            return (i.state = { autoFocus: o, choiceCount: s }), i
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
                    i = e.isActive,
                    r = this.state,
                    o = r.autoFocus,
                    l = r.choiceCount,
                    s = w.a.createElement(
                      W.a,
                      { style: mn.rightColumn },
                      l < 4
                        ? w.a.createElement(G.a, {
                            accessibilityLabel: cn,
                            disabled: !(t && i),
                            hoverLabel: { label: dn },
                            icon: w.a.createElement(tn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: mn.addButton,
                            testID: Ut,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.a.createElement(
                    W.a,
                    { style: mn.choicesAndAddButton },
                    w.a.createElement(
                      W.a,
                      { style: mn.choices },
                      w.a.createElement(Lt, {
                        autoFocus: o,
                        defaultValue: a[0],
                        editable: t && i,
                        label: an,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.a.createElement(Lt, {
                        defaultValue: a[1],
                        editable: t && i,
                        label: rn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      l >= 3
                        ? w.a.createElement(Lt, {
                            autoFocus: o,
                            defaultValue: a[2],
                            editable: t && i,
                            label: on,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === l
                        ? w.a.createElement(Lt, {
                            autoFocus: o,
                            defaultValue: a[3],
                            editable: t && i,
                            label: ln,
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
                    i = e.onRemove
                  return w.a.createElement(
                    W.a,
                    { style: mn.root },
                    this._renderChoices(),
                    w.a.createElement(en, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: mn.durationPicker,
                    }),
                    w.a.createElement(
                      W.a,
                      { style: mn.removePollButton },
                      w.a.createElement(nn.a, { color: 'red500', label: sn, onPress: i, testID: Kt }),
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
        mn = F.a.create(function (e) {
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
        pn = Object(rt.a)(un),
        hn = F.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        fn = B.a.i859676b,
        gn = w.a.createElement(
          B.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.a.createElement(
            D.b,
            { link: '/settings/audience_and_tagging', style: hn.link, withInteractiveStyling: !0, withUnderline: !0 },
            B.a.c9a48d3f,
          ),
        )
      function vn() {
        return w.a.createElement(W.a, { style: hn.container }, w.a.createElement(We.a, { headline: fn, text: gn }))
      }
      var yn = n('b5s6'),
        _n = n('rcen'),
        bn = n('zmS9'),
        Cn = 'addButton',
        wn = 'addSubtitlesLabel',
        Tn = 'altTextLabel',
        xn = 'tagPeopleLabel',
        En = 'attachments',
        Sn = 'createPollButton',
        In = 'geoButton',
        Rn = 'gifSearchButton',
        An = 'scheduleOption',
        kn = 'taggedUsersLabel',
        Pn = 'tweetTextarea_',
        On = 'toolBar',
        Mn = 'scheduledTweetIndicator',
        Dn = n('xM7j'),
        Nn = n('6OUF'),
        Fn = n('tZIO'),
        Ln = n('5mJL'),
        Bn = n('DNho'),
        Vn = n('jhWN'),
        jn = n('rFBM'),
        zn = n('zfvc'),
        Hn = n('Ujvi'),
        Un = n('yTN1'),
        Wn = n('gpVt'),
        qn = n('hOZg'),
        Gn = n('ll3R'),
        Kn = n('J0mu'),
        Yn = n('EfHu'),
        Xn = n('KrGU'),
        Zn = n('boUI'),
        Qn = n('6ZHn'),
        Jn = n('/WPq'),
        $n = n('wpLu'),
        ea = n('pHub'),
        ta = n('8A5z'),
        na = n('pKoL'),
        aa = n('ZvMt'),
        ia = n('9Xij'),
        ra = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n() {
            return d()(this, n), t.apply(this, arguments)
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
                    i = n.width,
                    r = F.a.theme.aspectRatios.landscape
                  if (t) {
                    var o,
                      l,
                      s = F.a.theme.aspectRatios.minTimelineImage,
                      c = F.a.theme.aspectRatios.maxTimelineImage
                    r = aa.a.getImageAspectRatio(s, c, {
                      width: null === (o = e[0].mediaFile) || void 0 === o ? void 0 : o.width,
                      height: null === (l = e[0].mediaFile) || void 0 === l ? void 0 : l.height,
                    })
                  }
                  return w.a.createElement(
                    ia.a,
                    { ratio: t ? r : i / a },
                    w.a.createElement(W.a, { style: oa.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                  )
                },
              },
              {
                key: '_renderGroupOf2',
                value: function () {
                  return w.a.createElement(
                    ia.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: oa.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, oa.gutterRight),
                      this._renderMediaAtIndex(1),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf3',
                value: function () {
                  return w.a.createElement(
                    ia.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: oa.mediaPreviewWrapper },
                      this._renderMediaAtIndex(0, oa.gutterRight),
                      this._renderColumnWithIndices([1, 2]),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupOf4',
                value: function () {
                  return w.a.createElement(
                    ia.a,
                    { ratio: F.a.theme.aspectRatios.landscape },
                    w.a.createElement(
                      W.a,
                      { style: oa.mediaPreviewWrapper },
                      this._renderColumnWithIndices([0, 2], oa.gutterRight),
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
                    { style: [oa.column, t] },
                    this._renderMediaAtIndex(e[0], oa.gutterBottom),
                    this._renderMediaAtIndex(e[1]),
                  )
                },
              },
              {
                key: '_renderMediaAtIndex',
                value: function (e, t) {
                  var n,
                    a,
                    i,
                    r,
                    o = this.props,
                    l = o.editable,
                    s = o.isActive,
                    c = o.media,
                    d = o.onClickMedia,
                    u = o.onEditMedia,
                    m = o.onEditSensitiveWarning,
                    p = o.onRemoveMedia,
                    h = o.onSetMediaPreviewRef,
                    f = c[e],
                    g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                    v = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                    y = !(
                      null === (i = f.mediaMetadata) ||
                      void 0 === i ||
                      null === (r = i.sensitiveMediaWarning) ||
                      void 0 === r ||
                      !r.size
                    ),
                    _ = u && l && s,
                    b = _ && y && !!m
                  return w.a.createElement(na.a, {
                    accessibilityLabel: g || v,
                    accessibilityRole: 'group',
                    enableGif: s,
                    key: f.id,
                    mediaItem: f,
                    onClick: d ? d(f.id) : void 0,
                    onEdit: u ? u(f.id) : void 0,
                    onEditSensitiveWarning: m && b ? m(f.id) : void 0,
                    onRemove: p(f.id),
                    ref: h,
                    style: [oa.mediaContainer, t],
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
      b()(ra, 'contextType', I.a)
      var oa = F.a.create(function (e) {
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
        la = n('oQhu'),
        sa = n('+d3d'),
        ca = n('S1qy'),
        da = n.n(ca),
        ua = n('cjAp'),
        ma = n.n(ua),
        pa = B.a.f0afcc0e,
        ha = B.a.ha5e2e79,
        fa = B.a.a3de3b68,
        ga = B.a.cc2b28fc,
        va = B.a.g45af04e,
        ya = B.a.ee9c4013,
        _a = B.a.af40a8ef,
        ba = B.a.e68b09b4,
        Ca = B.a.ec10ee02,
        wa = B.a.h735a98d,
        Ta = B.a.c4ccfbe2,
        xa = B.a.j499fbcb,
        Ea = B.a.b7d8e3f0,
        Sa = B.a.d1175c78,
        Ia = B.a.bf4e9d79,
        Ra = B.a.e0342f98,
        Aa = B.a.e349147b,
        ka = B.a.e3a24e4b,
        Pa = B.a.de4669e2,
        Oa = B.a.d2c7a41c,
        Ma = B.a.f7364fa1,
        Da = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Na = B.a.ia24dc8c,
        Fa = w.a.createElement(qn.a, null),
        La = w.a.createElement(tn.a, null),
        Ba = w.a.createElement(Gn.a, null),
        Va = w.a.createElement(Kn.a, null),
        ja = { viewType: 'schedule_tweet' },
        za = { viewType: 'add_poll' },
        Ha = { viewType: 'add_composer' },
        Ua = { viewType: 'tag_location' },
        Wa = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var r
            d()(this, n),
              (r = t.call(this, e, a)),
              b()(h()(r), '_handleConversationControlsValueChange', function (e) {
                r._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              b()(h()(r), '_handleAudienceControlsValueChange', function (e) {
                r.props.updateAudienceControlsValue(e)
              }),
              b()(
                h()(r),
                '_triggerConversationControlsImpression',
                Object(la.a)(function () {
                  return r.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              b()(h()(r), '_shouldRenderControls', function (e, t) {
                var n = r.state.isFocused,
                  a = r.props,
                  i = a.audienceControlsValue,
                  o = a.isActive,
                  l = a.isInline,
                  s = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (i.conversationControlsValue !== Xe.a.community_members &&
                      i.conversationControlsValue !== Xe.a.super_followers_exclusive &&
                      i.conversationControlsValue !== Xe.a.trusted_friends_tweet) ||
                    !s
                  ) ||
                  (o && !s && (!l || n || e))
                )
              }),
              b()(h()(r), '_renderConversationControls', function (e) {
                var t = r.state.isFocused,
                  n = r.props,
                  a = n.audienceControlsValue,
                  i = n.isInline
                if (
                  (n.isReply || (!t && i) || r._triggerConversationControlsImpression(),
                  !r._conversationControlsCreationEnabled)
                )
                  return null
                var o = a.conversationControlsValue,
                  l = r._shouldRenderControls(e, 'conversation'),
                  s =
                    o === Xe.a.community_members ||
                    o === Xe.a.super_followers_exclusive ||
                    o === Xe.a.trusted_friends_tweet ||
                    r._isScheduled()
                return l
                  ? w.a.createElement(yt, { disabled: s, onChange: r._handleConversationControlsValueChange, value: o })
                  : null
              }),
              b()(h()(r), '_renderTaggedLocation', function (e) {
                return w.a.createElement(
                  W.a,
                  { style: kt.taggedLocationContainer },
                  w.a.createElement(
                    G.a,
                    {
                      icon: w.a.createElement(Yn.a, null),
                      onPress: r._handleGeoButtonClick,
                      size: 'xSmall',
                      style: kt.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              b()(h()(r), '_renderMainContent', function () {
                var e = r.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  a = e.index,
                  i = e.isExpanded,
                  o = e.isInline,
                  l = e.isInlineReply,
                  s = e.onTypeaheadStateChange,
                  c = e.richTextInputContext,
                  d = n.cardUrl,
                  u = n.media,
                  m = n.pollActive,
                  p = n.quotedStatus,
                  h = n.text,
                  f = Object(Wn.b)(h) || (d && !Object(Et.a)(d) && [d]),
                  g = !!u.length || m || !!p,
                  v = r.props.typeaheadWrapper,
                  y = !r._isEmpty()
                return w.a.createElement(
                  W.a,
                  { style: kt.textInputArea },
                  w.a.createElement(
                    W.a,
                    { style: i ? kt.inputStyle : kt.collapsedInputStyle },
                    r._renderAudienceControls(y),
                    w.a.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: o,
                        isInlineReply: l,
                        onTextUpdated: c ? r._handleRichTextChange : r._handlePlainTextChange,
                        onTypeaheadStateChange: s,
                      },
                      r._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.a.createElement(Wn.a, { index: a, isCardPreviewTombstoned: Object(Et.a)(d), urls: f })
                      : null,
                  ),
                  i ? null : t,
                )
              }),
              b()(h()(r), '_renderFieldTextInput', function (e) {
                var t = r.props,
                  n = t.autoFocus,
                  a = t.data,
                  o = t.editable,
                  l = t.index,
                  s = t.isActive,
                  c = t.isExpanded,
                  d = t.isInline,
                  u = t.isInlineReply,
                  m = t.isLast,
                  p = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  v = r.state.isFocused,
                  y = a.text,
                  _ = 0 === l && m,
                  b = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  x = C.element,
                  E = C.sendTweetCommandName,
                  S = u && !g && !c,
                  I = g
                    ? {
                        onChange: r._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: r.state.editorState,
                          element: x,
                          sendTweetCommandName: E,
                        },
                      }
                    : { onChange: r._getHandlePlainTextChange(e) }
                return w.a.createElement(
                  Nn.a,
                  i()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: fa,
                      autoFocus: n || (s && !d),
                      closeButton:
                        s && (r._deleteNonemptyTweetstormComposerEnabled || r._isEmpty()) && !_
                          ? r._renderCloseButton()
                          : void 0,
                      contentBelow: r._renderTweetAttachment(),
                      editable: o,
                      inputStyle: [kt.textInputStyle, S && kt.textInputMobileCollapsed],
                      keyCommandHandlers: p,
                      maxNumberOfLines: b ? 30 : 10,
                      multiline: !0,
                      numberOfLines: r._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: r._handleFilesAdded,
                      placeholder: r._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: r._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Pn).concat(l),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    I,
                  ),
                )
              }),
              b()(
                h()(r),
                '_getHandleRichTextChange',
                Object(la.a)(function (e) {
                  return function (t) {
                    e(t), r._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                h()(r),
                '_getHandlePlainTextChange',
                Object(la.a)(function (e) {
                  return function (t) {
                    e(t), r._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(h()(r), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = r.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.a.createElement(vn, null) : null
              }),
              b()(h()(r), '_renderAudienceControls', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  i = t.isSuperFollowsCreator,
                  o = r.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  l = r.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  s = r.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return r._shouldRenderControls(e, 'audience') && 0 === a && (o || l || s)
                  ? w.a.createElement(Ae, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: o,
                      isSuperFollowsCreator: i && l,
                      onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              b()(h()(r), '_renderCommunitiesRulesEducation', function () {
                return r.shouldRenderCommunitiesRules ? w.a.createElement(Ye, null) : null
              }),
              b()(h()(r), '_renderCommunitiesRules', function (e) {
                var t = r.props.audienceControlsValue.communityIdValue || void 0
                return r.shouldRenderCommunitiesRules && t
                  ? w.a.createElement(ze, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              b()(h()(r), '_calcNumberOfLines', function () {
                var e = r.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  i = !!e.richTextInputContext,
                  o = t.media,
                  l = t.pollActive,
                  s = t.quotedStatus,
                  c = !!o.length || !!l || !!s
                return (i && (a || c)) || !n ? 1 : 4
              }),
              b()(h()(r), '_renderScheduledTweetLegend', function () {
                var e = r.props.scheduledFor
                return w.a.createElement(bn.a, {
                  onPress: r._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Mn,
                })
              }),
              b()(h()(r), '_handlePressScheduledTweetLegend', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              b()(h()(r), '_renderEmojiPicker', function () {
                return w.a.createElement(bt.a, {
                  onEmojiSelect: r._handleInsertEmoji,
                  size: 'medium',
                  style: r._getEmojiPickerButtonStyles(),
                  textInputRef: r._textInputRef || void 0,
                })
              }),
              b()(
                h()(r),
                '_getEmojiPickerButtonStyles',
                Object(la.a)(function () {
                  return [kt.iconEmojiPicker, kt.toolBarButton]
                }),
              ),
              b()(h()(r), '_isSchedulingDisabled', function () {
                var e = r.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  i = n.mediaTags,
                  o = n.pollActive,
                  l = n.quotedStatus,
                  s = n.text,
                  c = e.index,
                  d = e.isLast,
                  u = 0 === c && d,
                  m = t.conversationControlsValue !== Xe.a.all
                return Boolean(o || !u || (l && '' === s && !a.length) || m || i.length > 0)
              }),
              b()(h()(r), '_renderSchedulingButton', function () {
                return w.a.createElement(G.a, {
                  accessibilityLabel: ha,
                  behavioralEventContext: ja,
                  disabled: r._isSchedulingDisabled(),
                  hoverLabel: { label: wa },
                  icon: Va,
                  onClick: r._handleClickScheduler,
                  size: 'medium',
                  style: kt.toolBarButton,
                  testID: An,
                  type: 'brandText',
                })
              }),
              b()(h()(r), '_handleClickScheduler', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              b()(h()(r), '_renderCloseButton', function () {
                var e = r.props.onRemoveComposer
                return w.a.createElement(G.a, {
                  accessibilityLabel: ya,
                  hoverLabel: { label: ba },
                  icon: Fa,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              b()(h()(r), '_renderTweetAttachment', function () {
                var e = r.props,
                  t = e.data,
                  n = e.editable,
                  a = e.isActive,
                  i = t.media,
                  o = t.pollActive,
                  l = t.pollChoices,
                  s = t.pollDuration,
                  c = t.quotedStatus
                if (0 === i.length && !o && !c) return null
                var d = r.hasAttachedVideo && (r._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.a.createElement(
                  W.a,
                  { onClick: r._handleFocus, style: [kt.attachmentContainer, kt.tweetAttachmentArea], testID: En },
                  i.length > 0
                    ? w.a.createElement(ra, {
                        editable: n,
                        isActive: a,
                        media: i,
                        onClickMedia: r.hasAttachedImage ? r._handleClickMediaDetail('crop') : void 0,
                        onEditMedia: r.hasAttachedImage
                          ? r._handleClickMediaDetail('crop')
                          : d
                          ? r._handleClickMediaDetail(d)
                          : void 0,
                        onEditSensitiveWarning:
                          r.hasAttachedImage || r.hasAttachedVideo
                            ? r._handleClickMediaDetail('sensitive_media')
                            : void 0,
                        onRemoveMedia: r._handleMediaRemoveFactory,
                        onSetMediaPreviewRef: r._handleSetMediaPreviewRef,
                        style: kt.mediaPreview,
                      })
                    : null,
                  a ? r._renderMediaActions() : null,
                  o
                    ? w.a.createElement(pn, {
                        editable: n,
                        initialChoices: l,
                        initialDuration: s,
                        isActive: a,
                        onBlur: r._handlePollChoiceBlur,
                        onChange: r._handlePollChange,
                        onInvalid: r._handlePollInvalid,
                        onRemove: r._handlePollRemove,
                        onValid: r._handlePollValid,
                        ref: r._setPollCreatorRef,
                      })
                    : null,
                  c ? r._renderQuoteTweet(c) : null,
                )
              }),
              b()(h()(r), '_renderQuoteTweet', function (e) {
                var t = r.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.a.createElement(
                      Dn.a,
                      null,
                      w.a.createElement(_n.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.a.createElement(yn.a, {
                      isCondensed: t.length > 0,
                      style: kt.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              b()(h()(r), '_renderToolbar', function (e) {
                var t = r.props,
                  n = t.additionalToolbarContent,
                  a = t.data.media,
                  i = t.hidePoll,
                  o = t.hideScheduling,
                  l = t.isInlineReply,
                  s = t.isReply,
                  c = t.isSelfThreadReply,
                  d = t.richTextInputContext,
                  u = t.setActiveParentKey,
                  m = !!d,
                  p = !l && !i,
                  h = !l && !o
                return w.a.createElement(
                  W.a,
                  { style: kt.toolBar, testID: On },
                  w.a.createElement(
                    W.a,
                    { style: kt.toolBarIconsContainer },
                    w.a.createElement(Ot, {
                      media: a,
                      mediaAttachDisabled: r.mediaAttachDisabled,
                      onFilesAdded: r._handleFilesAdded,
                      setActiveParentKey: u,
                    }),
                    r._renderGifButton(),
                    p ? r._renderPollButton() : null,
                    m ? r._renderEmojiPicker() : null,
                    h ? r._renderSchedulingButton() : null,
                    r._renderGeoButton(),
                  ),
                  w.a.createElement(
                    W.a,
                    { style: kt.toolBarIconsContainer },
                    e ? r._renderCountdownCircle() : null,
                    (s && !c) || !e
                      ? null
                      : w.a.createElement(
                          w.a.Fragment,
                          null,
                          w.a.createElement(W.a, { style: kt.separator }),
                          r._renderAddComposerButton(),
                        ),
                    n,
                  ),
                )
              }),
              b()(h()(r), '_addOverflowStyle', function (e) {
                var t = r.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    a = n.length,
                    i = r._getParsedTweet(n).validRangeEnd,
                    o = i + 1 < a
                  if (r.state.hasOverflowStyle || o) {
                    var l = o ? i + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, l, r.state.hasOverflowStyle),
                      hasOverflowStyle: o,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: o }
                }
              }),
              b()(h()(r), '_handleRichTextChange', function (e) {
                var t = r.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  r.setState(r._addOverflowStyle(a))
                }
                r._handleTextValueChange(n)
              }),
              b()(h()(r), '_handlePlainTextChange', function (e) {
                var t = Fn.a.replaceCarriageReturns(e.target.value)
                r._handleTextValueChange(t)
              }),
              b()(h()(r), '_handleTextValueChange', function (e) {
                var t = r.props,
                  n = t.data,
                  a = n.key,
                  i = n.text,
                  o = t.onTextChange
                i !== e && o(e, a)
              }),
              b()(h()(r), '_handleClickAltTextShortcut', function () {
                r.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              b()(h()(r), '_handleClickSubtitlesShortcut', function () {
                r.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              b()(h()(r), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = r.props,
                      a = n.analytics,
                      i = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (r.hasAttachedImage || r.hasAttachedVideo) &&
                        i.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              b()(h()(r), '_handleFilesAdded', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  i = t.onFilesAdded
                a ? n({ text: ga }) : i(e)
              }),
              b()(h()(r), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  r.props.onRemoveMedia(r.props.index, e)
                }
              }),
              b()(h()(r), '_handleInsertEmoji', function (e) {
                var t = r.state.editorState,
                  n = r.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  r._handleRichTextChange(a)
                }
              }),
              b()(h()(r), '_validateMedia', function (e) {
                var t = r.props.data.media
                return S.c(t.concat(e))
              }),
              b()(h()(r), '_handlePollAdd', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              b()(h()(r), '_handlePollRemove', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'remove_poll', action: 'click' }), a({ pollActive: !1 }, n)
              }),
              b()(h()(r), '_handlePollInvalid', function () {
                var e = r.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                t && a({ pollValid: !1 }, n)
              }),
              b()(h()(r), '_handlePollValid', function () {
                var e = r.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                !t && a({ pollValid: !0 }, n)
              }),
              b()(h()(r), '_updatePoll', function (e) {
                var t = e.choices,
                  n = e.duration,
                  a = r.props,
                  i = a.index
                ;(0, a.updateSingleComposer)({ pollChoices: t, pollDuration: n }, i)
              }),
              b()(h()(r), '_handlePollChange', Object(sa.a)(r._updatePoll, 200, { leading: !0, trailing: !0 })),
              b()(h()(r), '_handlePollChoiceBlur', function () {
                r._handlePollChange.flush()
              }),
              b()(h()(r), '_handleGeoButtonClick', function () {
                var e = r.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              b()(h()(r), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  r.focus()
              }),
              b()(h()(r), '_handleFocus', function () {
                var e = r.props,
                  t = e.index,
                  n = e.isActive,
                  a = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      r._mediaPreviewRef && r._mediaPreviewRef.playVideo()
                    }),
                    a(t))
              }),
              b()(h()(r), '_handleEditorFocus', function () {
                return r.setState({ isFocused: !0 })
              }),
              b()(h()(r), '_formatCountdownNumber', function (e) {
                return Na(Math.ceil(e / r._userLanguageWeight))
              }),
              b()(h()(r), '_getPlaceHolderText', function () {
                var e = r.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  i = e.index,
                  o = e.isReply,
                  l = e.isSelfThreadReply
                return a ? Pa : n ? Ma : o && !l ? Oa : l || i > 0 ? ka : Aa
              }),
              b()(h()(r), '_getNumberOfAltTextEntries', function () {
                return r.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              b()(
                h()(r),
                '_getParsedTweet',
                Object(la.a)(function (e) {
                  var t = ma.a[r.props.twitterTextConfigurationVersion]
                  return da()(e, t)
                }),
              ),
              b()(h()(r), '_isEmpty', function () {
                var e = r.props.data
                return Object(St.c)(e)
              }),
              b()(h()(r), '_isScheduled', function () {
                var e = r.props.data.scheduledFor
                return Object(It.h)(e)
              }),
              b()(h()(r), '_autotagLocationIfNeeded', function () {
                var e = r.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  a = e.index,
                  i = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && i({ taggedLocation: null != e ? e : null }, a)
                })
              }),
              b()(h()(r), '_setPollCreatorRef', function (e) {
                r._pollCreatorRef = e
              }),
              b()(h()(r), '_handleSetMediaPreviewRef', function (e) {
                r._mediaPreviewRef = e
              }),
              b()(h()(r), '_setTextInputRef', function (e) {
                r._textInputRef = e
              })
            var o = e.data.text,
              l = e.richTextInputContext,
              s = e.userLanguage,
              c = (l || {}).initEditorState
            return (
              (r._conversationControlsCreationEnabled =
                !0 ===
                r.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (r._deleteNonemptyTweetstormComposerEnabled = r.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (r._userLanguageWeight = s && Da.indexOf(s) > -1 ? 2 : 1),
              r._autotagLocationIfNeeded(),
              (r.state = { editorState: c ? c(o) : null, hasOverflowStyle: !1, isFocused: !1 }),
              r
            )
          }
          return (
            m()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof xt.a) && e.mediaFile.isVideo
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
                    i = t.isExpanded,
                    r = t.isInline,
                    o = t.isLast,
                    l = t.loggedInUser,
                    s = t.windowWidth,
                    c = t.withAvatar,
                    d = !this._isEmpty(),
                    u = this._shouldRenderControls(d),
                    m = s < F.a.theme.breakpoints.small
                  return w.a.createElement(
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [kt.root, !a && kt.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.a.createElement(
                      Ln.a,
                      {
                        avatarCell: w.a.createElement(
                          w.a.Fragment,
                          null,
                          c
                            ? w.a.createElement(Bn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.a.createElement(Vn.a, {
                                  accessibilityLabel: l ? l.name : void 0,
                                  screenName: l ? l.screen_name : void 0,
                                  size: t,
                                  style: kt.avatar,
                                  uri: l ? l.profile_image_url_https : void 0,
                                  withLink: r,
                                })
                              })
                            : null,
                          o
                            ? null
                            : w.a.createElement(W.a, {
                                style: [kt.conversationLine, !c && kt.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: i ? kt.avatarContainerExpanded : kt.avatarContainer,
                        cellStyle: kt.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: kt.inputArea },
                        w.a.createElement(
                          jn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: kt.dragDrop,
                          },
                          function (t) {
                            return w.a.createElement(
                              w.a.Fragment,
                              null,
                              w.a.createElement(W.a, { style: kt.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.a.createElement(
                        W.a,
                        { style: [(u || n) && kt.controlsContainer, m ? kt.mobileControlsLayout : kt.controlsLayout] },
                        this._renderConversationControls(d),
                        this._renderCommunitiesRules(m),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.a.createElement(zn.b, { show: a && i }, this._renderToolbar(d)),
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
                    i = e.history,
                    r = e.loggedInUser,
                    o = e.setActiveParentKey,
                    l = a || n.length || !r
                  return w.a.createElement(wt.a, {
                    enabled: !l,
                    gifSearchKeySource: Tt.a.Composition,
                    history: i,
                    onPress: o,
                    testID: Rn,
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
                    i = t.quotedStatus,
                    r = e.loggedInUser,
                    o = this._isScheduled(),
                    l = !(!(a || n.length || i || o) && r)
                  return w.a.createElement(G.a, {
                    accessibilityLabel: pa,
                    behavioralEventContext: za,
                    disabled: l,
                    hoverLabel: { label: Ca },
                    icon: Ba,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: kt.toolBarButton,
                    testID: Sn,
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
                    i = !(n && a),
                    r = t ? w.a.createElement(Yn.a, null) : w.a.createElement(Xn.a, null)
                  return w.a.createElement(G.a, {
                    accessibilityLabel: Ta,
                    behavioralEventContext: Ua,
                    disabled: i,
                    hoverLabel: { label: Ta },
                    icon: r,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: kt.toolBarButton,
                    testID: In,
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
                    i =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || i)) return null
                  var r = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.a.createElement(
                    W.a,
                    { style: kt.imageActions },
                    t && t.url && t.provider
                      ? w.a.createElement(
                          W.a,
                          { style: kt.addImageTextPadding },
                          w.a.createElement(Ct.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !r) || this._isScheduled()
                      ? null
                      : w.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: Sa,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [kt.addImageTextContainer, kt.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || i
                      ? w.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: xa({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: kt.addImageTextContainer,
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
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: xn },
                    w.a.createElement(Zn.a, { style: kt.addImageActionIcon }),
                    Sa,
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
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: kn },
                    w.a.createElement(Qn.a, { style: kt.addImageActionIcon }),
                    w.a.createElement(Hn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          D.b,
                          { color: 'gray700', size: 'subtext2', testID: Tn },
                          w.a.createElement($n.a, { style: kt.addImageActionIcon }),
                          Ea({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.a.createElement(
                          D.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: Tn },
                          w.a.createElement($n.a, { style: kt.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.a.createElement(
                        D.b,
                        { color: 'gray700', size: 'subtext2', testID: Tn },
                        w.a.createElement(Jn.a, { style: kt.addImageActionIcon }),
                        xa({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? ea.a : ta.a
                  return w.a.createElement(
                    D.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: kt.addImageTextContainer,
                      testID: wn,
                    },
                    w.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Ra : void 0,
                      style: kt.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Ia,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = ma.a[n],
                    i = this._getParsedTweet(t).weightedLength
                  return w.a.createElement(Un.a, {
                    count: i,
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
                    i = e.loggedInUser,
                    r = e.onAddComposer,
                    o = this._isEmpty(),
                    l = this._isScheduled(),
                    s = t || o || l || !i || n
                  return w.a.createElement(G.a, {
                    accessibilityLabel: va,
                    behavioralEventContext: Ha,
                    disabled: s,
                    hoverLabel: { label: _a },
                    icon: La,
                    link: !a || o || s ? void 0 : '/compose/tweet',
                    onPress: r,
                    size: 'xSmall',
                    testID: Cn,
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
                    i = e.loggedInUser,
                    r = n.length,
                    o = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    l = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof xt.a) && e.mediaFile.isVideo
                    })
                  return 4 === r || o || l || a || this.hasExternalMedia || !i
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
                      return e.mediaFile && !(e.mediaFile instanceof xt.a) && e.mediaFile.isVideo
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
                    i = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(i && a)
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Wa, 'contextType', I.a),
        b()(Wa, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var qa = Object(rt.a)(Wa),
        Ga = w.a.createElement(D.b, { weight: 'bold' }),
        Ka = w.a.createElement(D.b, { color: 'link' }),
        Ya = function (e) {
          return '@'.concat(e)
        },
        Xa = n('SrIh'),
        Za = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Qa = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = {
              replyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.a.cloneElement(Ka, null, B.a.b50e199a({ userName: Ya(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.a.cloneElement(Ka, null, B.a.f2e4dd37({ replyUserName: Ya(t), otherUserName: Ya(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.a.cloneElement(
                    Ka,
                    null,
                    B.a.eccfddc3({ userOneName: Ya(t), userTwoName: Ya(a), userThreeName: Ya(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.a.cloneElement(Ka, null, B.a.h758cd22({ userOneName: Ya(n), userTwoName: Ya(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.a.cloneElement(Ka, null, B.a.e9f8a0eb({ userName: Ya(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.a.cloneElement(Ka, null, B.a.df7e9fbc({ replyUserName: Ya(n), otherUserName: Ya(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  i = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.a.cloneElement(
                    Ka,
                    null,
                    B.a.b45fa505({ userOneName: Ya(n), userTwoName: Ya(i), userThreeName: Ya(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  i = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.a.cloneElement(Ka, null, B.a.a4383815({ userOneName: Ya(a), userTwoName: Ya(i), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.a.cloneElement(Ka, null, B.a.ff792e35({ userName: Ya(t) })),
                  w.a.cloneElement(Ga, null, B.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.a.cloneElement(Ka, null, B.a.g7d5e985({ replyUserName: Ya(t), otherUserName: Ya(n) })),
                  w.a.cloneElement(Ga, null, B.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.a.cloneElement(
                    Ka,
                    null,
                    B.a.fe5a61e9({ userOneName: Ya(t), userTwoName: Ya(a), userThreeName: Ya(n) }),
                  ),
                  w.a.cloneElement(Ga, null, B.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.a.cloneElement(Ka, null, B.a.bc9dd514({ userOneName: Ya(n), userTwoName: Ya(a), othersCount: t })),
                  w.a.cloneElement(Ga, null, B.a.de5071ba),
                )
              },
            },
            o = S.a({ inReplyToStatus: a, loggedInUserId: i }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            l = a.retweeted_status || a,
            s = l.exclusivity_info,
            c = l.user,
            d = o.filter(function (e) {
              return e.id_str !== c.id_str
            }),
            u = Pe()(d, 2),
            m = u[0],
            p = u[1],
            h = [c, m, p].map(Za),
            f = Pe()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            _ = o.length - 2
          switch (o.length) {
            case 0:
              return Object(Xa.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? r.communityReplyToOne({ communityName: t, userName: g })
                : s
                ? r.exclusiveReplyToOne({ userName: g })
                : r.replyToOne({ userName: g })
            case 2:
              return t
                ? r.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : s
                ? r.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : r.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? r.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : s
                ? r.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : r.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? r.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: _ })
                : s
                ? r.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
                : r.replyToMany({ userOneName: g, userTwoName: v, othersCount: _ })
          }
        },
        Ja = w.a.memo(Qa),
        $a = n('fs1G'),
        ei = n('BLtI'),
        ti = n('kY28')
      function ni(e) {
        null == e || e.preventDefault()
      }
      var ai = F.a.create(function (e) {
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
        ii = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            r = e.onPress,
            o = e.shouldDisplayRepliesText,
            l = e.showParentTweet,
            s = void 0 === l || l
          return w.a.createElement(
            W.a,
            null,
            s
              ? w.a.createElement(ei.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: $a.a,
                  onAvatarClick: ni,
                  onEntityClick: ni,
                  onMediaClick: ni,
                  onReplyContextClick: ni,
                  replyContext: ti.a.ReplyContextTypes.None,
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
              { style: ai.replyUsersContainer },
              w.a.createElement(
                Ln.a,
                {
                  avatarCell: s ? w.a.createElement(W.a, { style: ai.conversationLine }) : null,
                  avatarCellStyle: ai.conversationLineContainer,
                  cellStyle: ai.repliesTextContainer,
                  style: ai.grid,
                },
                o
                  ? w.a.createElement(
                      D.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: r, style: s && ai.repliesMessage },
                      w.a.createElement(Ja, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: a,
                        loggedInUserId: i,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        ri = n('Tb0w'),
        oi = n('1YZw'),
        li = n('pidX'),
        si = n('5oBF'),
        ci = n('JYYi'),
        di = n('/Rsk'),
        ui = n('qlwE'),
        mi = n('XOJV'),
        pi = n('G6rE'),
        hi = n('AspN'),
        fi = n('oEGd'),
        gi = n('P1r1'),
        vi = ['mediaIds'],
        yi = function (e) {
          return e.parentTweetId || (e.isInline ? ci.a.homeTimeline : ci.a.modal)
        },
        _i = function (e, t) {
          var n = yi(t)
          return le.l(e, n)
        },
        bi = function (e, t) {
          var n = yi(t)
          return le.m(e, n)
        },
        Ci = function (e, t) {
          var n = yi(t)
          return le.k(e, n)
        },
        wi = function (e, t) {
          var n = ki(e, t),
            a = Ci(e, t).communityIdValue || void 0,
            i = (null == n ? void 0 : n.community_id_str) || a,
            r = i ? A.c.select(e, i) : void 0
          return r ? r.name : void 0
        },
        Ti = function (e, t) {
          var n = yi(t)
          return le.n(e, n)
        },
        xi = function (e, t) {
          var n = yi(t)
          return le.j(e, n)
        },
        Ei = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Si = Object(ce.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          pi.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Ii = function (e, t) {
          return t.parentTweetId || Ri(e, t) || Ai(e, t)
        },
        Ri = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Ai = Ei(function (e) {
          return e.inReplyToStatusId
        }),
        ki = function (e, t) {
          var n = Ii(e, t)
          return n ? mi.a.selectHydrated(e, n) : void 0
        },
        Pi = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Oi = Ei(function (e) {
          return e.hasArticleNudge
        }),
        Mi = Ei(function (e) {
          return e.convoCardData
        }),
        Di = Ei(function (e) {
          return e.externalMedia
        }),
        Ni = Ei(function (e) {
          return e.externalMediaFiles
        }),
        Fi = Ei(function (e) {
          return e.previewTweetId
        }),
        Li = Ei(function (e) {
          return e.defaultText
        }),
        Bi = function (e, t) {
          var n = Li(e, t),
            a = Object(li.a)(t.location)
          return (Pi(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Vi = Ei(function (e) {
          return e.quotedStatusId
        }),
        ji = Ei(function (e) {
          return e.quotedStatus
        }),
        zi = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : ji(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Vi(e, t)
              return n ? mi.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Hi = Ei(function (e) {
          return e.isSelfThreadReply
        }),
        Ui = Ei(function (e) {
          return e.positionCursorAtBeginning
        }),
        Wi = Ei(function (e) {
          return e.promotedContent
        }),
        qi = function () {
          return Object(ce.createSelector)(_i, Bi, zi, hi.j, function (e, t, n, a) {
            return e.map(function (e, i) {
              return s()(
                s()({}, ((r = e).mediaIds, Qe()(r, vi))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === i ? n : void 0,
                  text: 0 === i && t ? t : e.text,
                },
              )
              var r
            })
          })
        },
        Gi = {
          addComposer: le.a,
          addToast: oi.b,
          createLocalApiErrorHandler: Object(pe.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: le.b,
          deletePreviewTweet: si.c,
          fetchAutotaggedLocationIfNeeded: di.a,
          fetchTweetIfNeeded: mi.a.fetchOneIfNeeded,
          removeComposer: le.f,
          resetDraft: le.g,
          retweet: mi.a.retweet,
          schedule: le.i,
          draftTweet: le.e,
          send: le.r,
          updateActiveComposerIndex: le.t,
          updateAudienceControlsValue: le.u,
          updateConvoCardState: ri.b,
          preUploadMedia: hi.e,
          addMedia: hi.b,
          processMultipleMedia: hi.g,
          removeMediaUpload: hi.i,
          updateSingleComposer: le.x,
          setActiveParentKey: le.s,
          copyDataFromInlineComposerToModalComposer: le.c,
          copyDataFromInlineReplyComposerToModalComposer: le.d,
        },
        Ki = Object(fi.e)(function () {
          return Object(ce.createStructuredSelector)({
            activeComposerIndex: xi,
            activeUser: Si,
            altTextNudgeType: gi.h,
            audienceControlsValue: Ci,
            composerData: qi(),
            dataSaverMode: gi.k,
            excludedRecipients: bi,
            externalMedia: Di,
            externalMediaFiles: Ni,
            geoEnabled: gi.p,
            hasArticleNudge: Oi,
            inReplyToStatus: ki,
            inReplyToStatusId: Ii,
            isIntentRoute: Pi,
            isSelfThreadReply: Hi,
            isSending: Ti,
            isSuperFollowsCreator: ue.l,
            positionCursorAtBeginning: Ui,
            loggedInUser: pi.e.selectLoggedInUser,
            prepopulatedText: Bi,
            previewTweetId: Fi,
            promotedContent: Wi,
            scheduledFor: le.o,
            selectedCommunityName: wi,
            sendingProgress: le.p,
            convoCardData: Mi,
            undoTweetSettings: ui.q,
            userLanguage: ue.o,
            quotedStatusId: Vi,
          })
        }, Gi),
        Yi = n('45mF'),
        Xi = n('c0ZR'),
        Zi = n('W5XZ'),
        Qi = n('lsKC'),
        Ji = n('Drq4'),
        $i = n('I8M8'),
        er = n('7myi'),
        tr = n('7nmT'),
        nr = n.n(tr),
        ar = n('vbWy'),
        ir = n('Rp9C'),
        rr = n('Q5Mu'),
        or = n('N5qz'),
        lr = 'tweetButton',
        sr = 'tweetButtonInline',
        cr = Object(k.a)()
          .propsFromState(function () {
            return { loggedInUser: pi.e.selectLoggedInUser }
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
        dr = n('cHvH'),
        ur = n('sgih'),
        mr = n('xKuM'),
        pr = n('5Vk4'),
        hr = F.a.create(function (e) {
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
        fr = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            i = e.onMaskClick,
            r = e.sheetType,
            o = e.showActionButton
          return w.a.createElement(dr.a, null, function (e) {
            var l = e.windowWidth > F.a.theme.breakpoints.small
            return w.a.createElement(
              ur.a,
              { onMaskClick: i, style: hr.sheetStyle, type: r, withMask: !0 },
              o &&
                w.a.createElement(mr.a, {
                  leftControl: w.a.createElement(pr.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.a.createElement(W.a, { style: [hr.mainCard, l ? hr.largeScreenCard : hr.smallScreenCard] }, n),
            )
          })
        },
        gr = B.a.cb7c0987,
        vr = B.a.de3bcf27,
        yr = B.a.e710ce75,
        _r = B.a.h11e5910,
        br = B.a.b7ec04f3,
        Cr = B.a.i62a03aa,
        wr = F.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Tr = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.a.createElement(
            fr,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.a.createElement(D.b, { size: 'title4', style: wr.itemPadding, weight: 'heavy' }, gr),
            w.a.createElement(D.b, { color: 'gray700', style: wr.itemPadding }, vr),
            w.a.createElement(D.b, { color: 'gray700', style: wr.itemPadding }, yr),
            w.a.createElement(
              W.a,
              { style: wr.buttonContainer },
              w.a.createElement(D.b, { size: 'title4', style: wr.itemPadding, weight: 'heavy' }, _r),
              w.a.createElement(G.a, { onPress: a, style: wr.itemPadding, type: 'brandOutlined' }, br),
              w.a.createElement(G.a, { onPress: n, style: wr.itemPadding, type: 'brandOutlined' }, Cr),
            ),
          )
        },
        xr = n('cm6r'),
        Er = F.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Sr = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.a.createElement(xr.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.a.createElement(
              w.a.Fragment,
              null,
              w.a.createElement(G.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Er.button,
                type: 'primaryOutlined',
              }),
              w.a.createElement(D.b, { color: 'gray700' }, n),
            )
          })
        },
        Ir = n('sjK1'),
        Rr = n('FDY4'),
        Ar = n('tevE'),
        kr = n('jV+4'),
        Pr = n('UgB4'),
        Or = n('TW8A'),
        Mr = n('hiGS'),
        Dr = n('WtWS'),
        Nr = n('Lsrn'),
        Fr = n('k/Ka'),
        Lr = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Fr.a)(
            'svg',
            s()(
              s()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Nr.a.root, e.style],
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
      Lr.metadata = { width: 24, height: 24 }
      var Br = Lr,
        Vr = [
          { headlineText: B.a.f3a7a80c, subTextLine1: B.a.ge52d1de, subTextLine2: null },
          { headlineText: B.a.j311bf49, subTextLine1: B.a.ae42ebff, subTextLine2: B.a.aa350ab1 },
          { headlineText: B.a.j18b2956, subTextLine1: B.a.f6bee896, subTextLine2: B.a.dddd0995 },
          { headlineText: B.a.d02a94fa, subTextLine1: B.a.dddd0995, subTextLine2: null },
          { headlineText: B.a.i018b746, subTextLine1: B.a.b8d85df9, subTextLine2: B.a.d5ca11f0 },
        ],
        jr = B.a.h11e5910,
        zr = B.a.abd845fd,
        Hr = B.a.bea869b3,
        Ur = B.a.d96cf7cd,
        Wr = B.a.d3145da8,
        qr = F.a.create(function (e) {
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
            thanksCheckMark: { color: F.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        Gr = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            i = e.onDismiss,
            r = e.onEditTweet,
            o = e.onSendTweet,
            l = e.onWeGotItWrong,
            s = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            m = w.a.useContext(I.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            p = Vr[(m = m >= 0 && m <= 4 ? m : 0)]
          return w.a.createElement(dr.a, null, function (e) {
            var m,
              h,
              f,
              g = e.windowWidth
            return w.a.createElement(
              fr,
              {
                actionButtonType: 'close',
                onActionButtonClick: i,
                onMaskClick: i,
                sheetType: 'full',
                showActionButton: g > F.a.theme.breakpoints.medium,
              },
              w.a.createElement(Br, { style: [qr.profanityIcon, qr.itemPadding] }),
              w.a.createElement(Ar.a, { size: 'title4', style: qr.itemPadding, weight: 'heavy' }, p.headlineText),
              w.a.createElement(D.b, { color: 'gray700', style: qr.itemPadding }, p.subTextLine1),
              w.a.createElement(D.b, { color: 'gray700', style: qr.itemPadding }, p.subTextLine2),
              w.a.createElement(
                W.a,
                { style: [qr.tweetContainer, qr.itemPadding] },
                w.a.createElement(
                  W.a,
                  { style: qr.tweetContent },
                  w.a.createElement(kr.a, { name: c, profileImageUrl: d, screenName: u, style: qr.userName }),
                  w.a.createElement(
                    W.a,
                    { style: qr.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          i = ''
                        if (e.externalMediaDetails) i = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Ir.c) i = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var r
                          i = null === (r = e.mediaFile) || void 0 === r ? void 0 : r.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: i,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (a = e.mediaFile) || void 0 === a ? void 0 : a.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.a.createElement(
                        W.a,
                        { style: qr.photos },
                        w.a.createElement(Rr.a, {
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
                    w.a.createElement(D.b, { style: qr.textStyle }, s),
                  ),
                ),
              ),
              t
                ? w.a.createElement(
                    W.a,
                    { style: qr.thanksContainer },
                    w.a.createElement(Dr.a, { style: qr.thanksCheckMark }),
                    w.a.createElement(D.b, { align: 'center', style: qr.itemPadding }, Wr),
                  )
                : w.a.createElement(D.b, { align: 'center', onPress: l, style: qr.itemPadding, withUnderline: !0 }, jr),
              g > F.a.theme.breakpoints.small
                ? w.a.createElement(
                    W.a,
                    { style: qr.buttonContainer },
                    w.a.createElement(G.a, { onPress: r, style: qr.itemPadding, type: 'brandFilled' }, zr),
                    w.a.createElement(G.a, { onPress: o, style: qr.itemPadding, type: 'brandOutlined' }, Hr),
                    w.a.createElement(G.a, { onPress: a, style: qr.itemPadding, type: 'destructiveText' }, Ur),
                  )
                : ((m = w.a.createElement(Pr.a, { style: { color: F.a.theme.colors.text } })),
                  (h = w.a.createElement(Or.a, { style: { color: F.a.theme.colors.primary } })),
                  (f = w.a.createElement(Mr.a, { style: { color: F.a.theme.colors.red500 } })),
                  w.a.createElement(
                    W.a,
                    { style: qr.mobileButtonContainer },
                    w.a.createElement(Sr, { icon: m, label: Hr, onPress: o }),
                    w.a.createElement(Sr, { icon: h, label: zr, onPress: r }),
                    w.a.createElement(Sr, { icon: f, label: Ur, onPress: a }),
                  )),
            )
          })
        },
        Kr = cr(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            i = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            l = e.onSendTweet,
            s = e.tweetText,
            c = e.userName,
            d = e.userProfileImageUrl,
            u = e.userScreenName,
            m = w.a.useState(!1),
            p = Pe()(m, 2),
            h = p[0],
            f = p[1],
            g = w.a.useState(!1),
            v = Pe()(g, 2),
            y = v[0],
            _ = v[1],
            b = function (e) {
              var n = e.action,
                i = e.element,
                r = e.page,
                o = [{ nudge_id: a }]
              t.scribe({ action: n, data: { items: o }, element: i, page: r, section: 'dialog' })
            }
          return h
            ? w.a.createElement(Tr, {
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
            : w.a.createElement(Gr, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  b({ action: 'cancel', element: 'action', page: 'nudge' }), i()
                },
                onDismiss: function () {
                  b({ action: 'dismiss', element: 'action', page: 'nudge' }), r()
                },
                onEditTweet: function () {
                  b({ action: 'revise', element: 'action', page: 'nudge' }), o()
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
                userProfileImageUrl: d,
                userScreenName: u,
              })
        }),
        Yr = n('aITJ'),
        Xr = n('eb3s'),
        Zr = n('JYMr'),
        Qr = n('sCk0'),
        Jr = n('3A2y'),
        $r = n('zrOZ'),
        eo = n('s1N3'),
        to = n('4FGy'),
        no = n('mN6z'),
        ao = n('eyty'),
        io = n('rziq'),
        ro = n('jTgF'),
        oo = B.a.d28215f0,
        lo = B.a.ec909a54,
        so = B.a.jd53409d,
        co = {
          singular: B.a.edae65de,
          plural: B.a.a859846a,
          oneOfMultiple: B.a.e90118f5,
          someOfMultiple: B.a.c211dcb1,
        },
        uo = { singular: B.a.d7c26bfb, plural: B.a.a75e3ccc },
        mo = B.a.dcb7e3a0,
        po = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            i = a === e.numberOfImages
          return (
            1 === a
              ? ((n = uo.singular), (t = i ? co.singular : co.oneOfMultiple))
              : ((n = uo.plural), (t = i ? co.plural : co.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(mo)
          )
        },
        ho = B.a.c1bf53b0,
        fo = B.a.bb8170da,
        go = B.a.dad5a4b8,
        vo = B.a.e65aed64,
        yo = B.a.bc2ceaf2,
        _o = B.a.d8222374,
        bo = B.a.j890123a,
        Co = B.a.bb01231c,
        wo = B.a.d4ab68e2,
        To = B.a.d8af8a4c,
        xo = B.a.d09d4c05,
        Eo = B.a.i2209530,
        So = B.a.bf9b89e4,
        Io = B.a.f277e949,
        Ro = B.a.b551cd22,
        Ao = B.a.f026a7fa,
        ko = B.a.a5d4fda0,
        Po = B.a.ib067d6a,
        Oo = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Mo = { element: 'alt_text_prompt' },
        Do = { component: 'article_nudge' },
        No = { viewType: 'send_tweet' },
        Fo = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Lo = (function (e) {
          g()(n, e)
          var t = y()(n)
          function n(e, a) {
            var i, r, l
            d()(this, n),
              (l = t.call(this, e, a)),
              b()(h()(l), '_getParentKey', function () {
                var e = l.props,
                  t = e.isInline
                return e.parentTweetId || (t ? ci.a.homeTimeline : ci.a.modal)
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
                  a = nr.a.findDOMNode(l._composerRefs[t])
                if (a instanceof window.Element) {
                  var i = a.getBoundingClientRect(),
                    r = i.bottom,
                    o = i.top,
                    s = Math.max(o, window.scrollY)
                  if (s < window.pageYOffset || r > window.innerHeight) {
                    var c = n ? s - n() - 14 : s - 14,
                      d = Math.max(c, 0)
                    window.requestAnimationFrame(function () {
                      Oo ? window.scrollTo({ top: d, left: 0, behavior: 'smooth' }) : window.scrollTo(0, d)
                    })
                  }
                }
              }),
              b()(h()(l), '_handleFetchTweetIfNeeded', function () {
                var e = l.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  r = e.quotedStatus,
                  o = e.quotedStatusId
                !a && i && n(i).catch(t(Zi.a)), !r && o && n(o).catch(t(Zi.a))
              }),
              b()(h()(l), '_blockHistory', function (e, t) {
                var n = l.props,
                  a = n.audienceControlsValue,
                  i = n.isInline,
                  r = !i && /unsent/.test(e.pathname),
                  o = !i && !/\/compose\/tweet\/?$/.test(e.pathname)
                return l.shouldShowDiscardConfirmation && 'POP' === t && o
                  ? (l.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : l._canSaveDraft && r && 'PUSH' === t
                  ? l.shouldShowDiscardConfirmation
                    ? (l.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: r }), !1)
                    : (l._resetDraft(), !0)
                  : l.shouldShowBackgroundSendConfirmation && 'POP' === t && o
                  ? (l._cancelAllMediaUploads(), !1)
                  : !('POP' === t && o && l._areComposersEmptyOrUnchanged && !Object(St.a)(a)) || (l._resetDraft(), !0)
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
                    ? (l.setState({ showAltTextPrompt: !0 }), void l._scribe(s()(s()({}, Mo), {}, { action: 'show' })))
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
                  i = e.isInline,
                  r = e.isSelfThreadReply,
                  o = e.selectedCommunityName
                if (a && l._shouldBeExpanded())
                  return w.a.createElement(ii, {
                    communityName: o,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: l._handleViewRecipients,
                    shouldDisplayRepliesText: !r,
                    showParentTweet: !i,
                  })
              }),
              b()(h()(l), '_renderAltTextPrompt', function () {
                var e = l._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.a.createElement(Xr.a, {
                  Icon: Ji.a,
                  cancelButtonLabel: fo,
                  confirmButtonLabel: ho({ numOfDescriptions: t }),
                  headline: so,
                  onCancel: l._handleIgnoreAltTextPrompt,
                  onConfirm: l._handleAcceptAltTextPrompt,
                  onMaskClick: l._handleCancelAltTextPrompt,
                  text: po({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              b()(h()(l), '_renderToxicReplyNudge', function () {
                var e = l._getSingleComposerDataWithLatestText(l.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.a.createElement(Kr, {
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
                  e ? Object(It.h)(e) && l._handleScheduleTweet() : l._checkToxicReplyAndSendTweet()
              }),
              b()(h()(l), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = l.props,
                    i = a.analytics,
                    r = a.createLocalApiErrorHandler
                  if (Object(ro.d)(n) && n.code === $i.b.CANCELED) return i.scribeAction(e), Promise.resolve()
                  var o = Object(ro.b)(n)
                  if (o) return l.setState({ errorMessage: o }), Promise.resolve()
                  var c = t || Object(Yi.a)(void 0, !1)
                  r(s()({}, c))(n)
                  var d = n instanceof x.a && (null == t ? void 0 : t[n.errors[0].code])
                  l.setState({ errorMessage: { text: d ? d.toast.text : ko } })
                }
              }),
              b()(h()(l), '_handleScheduleTweet', function () {
                var e = l.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  i = e.inReplyToStatus,
                  r = e.schedule,
                  o = l._getSingleComposerDataWithLatestText(n[0])
                r({ excludedRecipients: a, inReplyToStatus: i, scheduleData: o })
                  .then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(It.c)(o.scheduledFor)
                    if (a) {
                      var i = Object(It.b)(a),
                        r = Object(It.i)(a),
                        c = Ro({ scheduleDate: i, scheduleTime: r })
                      t({ text: c, action: { label: Io, link: '/compose/tweet/unsent/scheduled' } }),
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
                      t({ text: So, action: { label: Io, link: '/compose/tweet/unsent/drafts' } }),
                      l._scribeTweetSent(n[0], s()(s()({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      l._updateConvoCardState(),
                      l._close()
                  })
                  .catch(l._handleTweetError('draft_tweet_cancel', rr.a))
              }),
              b()(h()(l), '_checkToxicReply', function () {
                var e = l.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  i = e.inReplyToStatusId,
                  r = e.parentTweetId,
                  o = t(
                    l._getSingleComposerDataWithLatestText(n[0]).text,
                    r || i,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      a,
                      i,
                      r,
                      o,
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
                    var d =
                        null == e ||
                        null === (a = e.create_nudge) ||
                        void 0 === a ||
                        null === (i = a.nudge) ||
                        void 0 === i ||
                        null === (r = i.nudge_type) ||
                        void 0 === r
                          ? void 0
                          : r.__typename,
                      u =
                        null == e ||
                        null === (o = e.create_nudge) ||
                        void 0 === o ||
                        null === (s = o.nudge) ||
                        void 0 === s
                          ? void 0
                          : s.id
                    return u && l.setState({ nudgeId: u }), !!d
                  }),
                  s = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([o, s])
              }),
              b()(h()(l), '_showToxicReplyNudge', function () {
                l._scribe(
                  { page: 'nudge', section: 'dialog', action: 'impression' },
                  { items: [{ nudge_id: l.state.nudgeId }] },
                ),
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
                  i = e.audienceControlsValue,
                  r = e.composeSemanticCoreId,
                  o = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  d = e.history,
                  u = e.inReplyToStatus,
                  m = e.isSelfThreadReply,
                  p = e.location,
                  h = e.promotedContent,
                  f = e.selectedCommunityName,
                  g = e.send,
                  v = i.conversationControlsValue,
                  y = i.exclusivityControlValue,
                  _ = void 0 === y ? void 0 : y,
                  b = l.isPreview,
                  C = l.props.composerData.map(function (e) {
                    return l._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(It.c)(C[0].scheduledFor)
                if (w) {
                  var T = Object(It.b)(w),
                    x = Object(It.i)(w),
                    E = Ro({ scheduleDate: T, scheduleTime: x })
                  return n({ text: E, action: { label: Io, link: '' } }), void l._close()
                }
                if (
                  (o.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  l._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var I = l._getSingleComposerDataWithLatestText(C[0]).text,
                      R = Object(S.d)(I)
                    a.scribe({
                      action: R ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var A = (null == u ? void 0 : u.community_id_str) || i.communityIdValue || void 0,
                  k = A ? '8.31.'.concat(A) : '',
                  P = r ? (A ? [r, k].join(',') : r) : k
                g({
                  sendData: C,
                  communityIdValue: A,
                  conversationControlsValue: v,
                  excludedRecipients: o,
                  exclusivityControlValue: _,
                  inReplyToStatus: u,
                  isSelfThreadReply: m,
                  promotedContent: h,
                  composeSemanticCoreId: P,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || l.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return l._scribeTweetSent(C[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && l._scribeThreadSent(C, e, 'thread_send_success')
                    var a = e.length > 1 ? vo : go
                    if (A && f) {
                      var i = f,
                        r = e.length
                      a = lo({ numOfTweets: r, communityName: i })
                    }
                    var o = b && l.isReply
                    if (o || !b) {
                      var s = o ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: o ? yo : a,
                        action: { label: Io, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(s || '') },
                      })
                    }
                    l.isInlineReply && l.setState({ focused: !1 }), l._updateConvoCardState(), l._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      i = void 0 === n ? [] : n,
                      r = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      o = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      m = { message: e.type, event_info: r ? ''.concat(r) : void 0, status_code: u, url: o }
                    throw (
                      (i.map(
                        function (e, t) {
                          return l._scribeTweetSent(C[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(ro.d)(e) && e.code === $i.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: m }),
                      C.length > 1 && l._scribeThreadSent(C, i, 'thread_send_failure'),
                      i.length &&
                        d.replace({
                          pathname: p.pathname,
                          state: s()(
                            s()({}, Object(Jr.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: i[i.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(l._handleTweetError('send_tweet_cancel', rr.a))
              }),
              b()(h()(l), '_setActiveParentKey', function () {
                ;(0, l.props.setActiveParentKey)(l._getParentKey())
              }),
              b()(h()(l), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  i = void 0 !== a && a,
                  r = n.isDraftTweet,
                  o = void 0 !== r && r,
                  c = n.isScheduled,
                  d = void 0 !== c && c,
                  u = l.state.nudgeId,
                  m = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  h = o ? p : d ? m : 'send_',
                  f = { items: [ir.a.getTweetItem(t)] },
                  g = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  _ = Object($r.a)(
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
                  o || !e.draftTweetId || e.scheduledTweetId || l._scribe({ action: ''.concat(h, 'draft_tweet') }, f),
                  l.isQuoteTweet &&
                    (l._scribe({ action: 'retweet_with_comment' }, f),
                    i && l._scribe(s()(s()({}, Do), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  l.isReply && l._scribe({ component: b, action: ''.concat(h, 'reply') }, f),
                  g && l._scribe({ action: ''.concat(h, 'poll_tweet') }, f),
                  l._hasPhoto(e) &&
                    (l._scribe({ action: ''.concat(h, 'photo_tweet') }, f),
                    v && l._scribe({ action: ''.concat(h, 'photo_tweet_with_alt_text') }, f),
                    y && l._scribe({ action: ''.concat(h, 'photo_tweet_with_tags') }, f)),
                  l._hasVideo(e) &&
                    (l._scribe({ action: ''.concat(h, 'video_tweet') }, f),
                    y && l._scribe({ action: ''.concat(h, 'video_tweet_with_tags') }, f)),
                  _.size)
                ) {
                  var C = l._hasPhoto(e) ? 'photo' : 'video'
                  _.forEach(function (e) {
                    l._scribe({ action: ''.concat(h).concat(C, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    l.isReply &&
                    !d &&
                    (o
                      ? l._scribe(s()(s()({}, w), {}, { action: 'save' }), { items: [{ nudge_id: u }] })
                      : l._scribe(s()(s()({}, w), {}, { action: 'sent' }), { items: [{ nudge_id: u }] })),
                  u || o || !l.isReply || d || l._scribe(s()(s()({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var T = t.id_str && ir.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  l._scribe({ element: 'remote', action: ''.concat(h, 'gif_tweet') }, { items: T ? [T] : [] })
                  var x = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || x) &&
                    l._scribe(
                      { element: 'remote', action: ''.concat(h, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: T ? [T] : [] },
                    ),
                    y && l._scribe({ action: ''.concat(h, 'gif_tweet_with_tags') }, f)
                } else l._hasGif(e) && (l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet') }, f), v && l._scribe({ element: 'local', action: ''.concat(h, 'gif_tweet_with_alt_text') }, f))
              }),
              b()(h()(l), '_scribeThreadSent', function (e, t, n) {
                var a = l.props.inReplyToStatus,
                  i = { items: [ir.a.getSendThreadItem(e, t.length, !!a)] }
                l._scribe({ action: n }, i)
              }),
              b()(h()(l), '_scribeRetweet', function (e) {
                var t = l.props.hasArticleNudge,
                  n = { items: [ir.a.getTweetItem(e)] }
                l._scribe({ action: 'retweet' }, n),
                  t && l._scribe(s()(s()({}, Do), {}, { element: 'result', action: 'retweet' }), n)
              }),
              b()(h()(l), '_handleRetweet', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  i = t[0].quotedStatus
                i &&
                  (l._scribeRetweet(i),
                  a(i.id_str, {}).then(function (e) {
                    l.setState({ tweetsSentOrScheduled: !0 }), l._close()
                  }, n(ar.a)))
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
                  n && l._scribe(s()(s()({}, Do), {}, { element: 'result', action: 'cancel' })),
                  l.state.nudgeId &&
                    l._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { items: [{ nudge_id: l.state.nudgeId }] },
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
                  (l._scribe(s()(s()({}, Mo), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              b()(h()(l), '_handleIgnoreAltTextPrompt', function () {
                l._scribe(s()(s()({}, Mo), {}, { action: 'declined' })),
                  l.setState({ showAltTextPrompt: !1 }),
                  l._handleTweetOrRetweet()
              }),
              b()(h()(l), '_handleCancelAltTextPrompt', function () {
                l._scribe(s()(s()({}, Mo), {}, { action: 'cancel' })),
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
                  i = e.location,
                  r = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: i.pathname, state: Object(Jr.a)(i.state || {}, 'quotedStatus') }),
                  r(),
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
                  i = a.activeComposerIndex,
                  r = a.isInline,
                  o = a.setValidity
                if (
                  (l.setState({ textMap: s()(s()({}, n), {}, b()({}, t, e)) }, function () {
                    o && o(l._areComposersValid())
                  }),
                  l.setState({ errorMessage: void 0 }),
                  Yr.b.isIOS())
                ) {
                  var c = r ? 0 : i
                  l._updateSingleComposer({ text: e }, c)
                }
              }),
              b()(
                h()(l),
                '_handleTextOnBlur',
                Object(la.a)(function (e, t) {
                  return function () {
                    var n = l.state,
                      a = n.textMap,
                      i = n.tweetsSentOrScheduled,
                      r = l.props.composerData,
                      o = a[e],
                      s = r.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof o && !i && s && l._updateSingleComposer({ text: o }, t)
                  }
                }),
              ),
              b()(h()(l), '_updateAudienceControlsValue', function (e) {
                var t = l.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  i = l.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!l._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!l._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (l._updateSingleComposer({ pollActive: !1 }, 0), l.setState({ errorMessage: { text: oo } })),
                      (null == i ? void 0 : i.text) === oo && l.setState({ errorMessage: void 0 })
                }
                a(e, l._getParentKey())
              }),
              b()(h()(l), '_renderProgressBar', function () {
                var e = l.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.a.createElement(Zr.a, { progress: t ? Math.max(n, 0.02) : 0, style: Bo.progressBar })
              }),
              b()(h()(l), '_updateConvoCardState', function () {
                var e = l.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    i = t.nextState
                  i && a && n(a, { cardState: i })
                }
              }),
              b()(h()(l), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Xi.a)(e)
                    }),
                  ).then(l._handleAddMediaFiles(e))
                }
              }),
              b()(h()(l), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    i,
                    r = l.props,
                    o = r.addMedia,
                    s = r.addToast,
                    c = r.composerData,
                    d = r.dataSaverMode,
                    u = r.preUploadMedia,
                    m = r.processMultipleMedia,
                    p = r.removeMediaUpload,
                    f = c[e],
                    g = f.pollActive,
                    v = Object(ao.e)(
                      null === (a = h()(l)) || void 0 === a || null === (i = a.context) || void 0 === i
                        ? void 0
                        : i.userClaims,
                    )
                  g ||
                    o(t, { location: ao.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var i = f.media.map(function (e) {
                          return e.id
                        })
                        l._updateSingleComposer({ mediaIds: Object(eo.a)(i.concat(a)) }, e),
                          m(t, { onFailure: l._handleMediaRemoveFactory(e) }).then(function (e) {
                            d ||
                              u(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: Po }), p(a)
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
                  i = n.removeMediaUpload,
                  r = a[e],
                  o = r.media,
                  s = r.mediaTags,
                  c = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(to.a)(e, n)
                  })(
                    o.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  d = c.length > 0 ? s : []
                l._updateSingleComposer({ mediaIds: c, gifMetadata: void 0, mediaTags: d }, e),
                  i(t),
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
                var a = !Object(St.c)(l._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              b()(h()(l), '_areComposersValid', function () {
                var e = l.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  i = null == a ? void 0 : a.community_id_str,
                  r = 'community_members' === t
                return (
                  (l.isRetweet && !i && !r) ||
                  n.every(function (e) {
                    return Object(St.e)(l._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              b()(h()(l), '_areComposersEmptyOrUnchanged', function () {
                var e = l.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(St.d)(l._getSingleComposerDataWithLatestText(e), n)
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
                      i = a
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += a.length), (n = t.noDescriptionImageIDs).push.apply(n, o()(i))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              b()(h()(l), '_getSingleComposerDataWithLatestText', function (e) {
                var t = l.state.textMap
                return 'string' == typeof t[e.key] ? s()(s()({}, e), {}, { text: t[e.key] }) : e
              })
            var c = !(null === (i = e.location.state) || void 0 === i || !i.focusComposer)
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
              (l._throttledSyncTexts = Object(sa.a)(l._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (l._keyCommandHandlers =
                ((r = {}), b()(r, io.b, l.handleTweetOrRetweet), b()(r, io.a, l.handleDismissComposer), r)),
              (l._keyCommandHandlersForActiveTypeahead = b()({}, io.b, l.handleTweetOrRetweet)),
              (l._isAltTextNudgeEnabled =
                !0 ===
                l.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (l._isCommunitiesEnabled = l.context.featureSwitches.isTrue('c9s_enabled')),
              l
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
                    i = e.history,
                    r = e.isInline,
                    o = e.isIntentRoute,
                    l = e.location,
                    c = e.prepopulatedText,
                    d = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    c || (t && t.cardUrl))
                  ) {
                    var u = s()({}, null)
                    c && (u.text = c), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(c || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !o &&
                    i.replace({
                      query: Object(li.b)(l.query),
                      search: '',
                      pathname: l.pathname,
                      state: Object(Jr.a)(Object(li.b)(l.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    d && d(this._areComposersValid()),
                    r || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.addToast,
                    i = n.composerData,
                    r = n.copyDataFromInlineReplyComposerToModalComposer,
                    o = n.externalMedia,
                    l = n.externalMediaFiles,
                    s = n.onRef,
                    c = n.parentTweetId,
                    d = n.replyPressToggle,
                    u = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== s && e.onRef(void 0),
                    s && s !== e.onRef && s(this),
                    i.length >= 25 && e.composerData.length < 25 && a({ text: Ao }),
                    o.length > 0 && o !== e.externalMedia
                      ? this._attachExternalMedia(0)(o)
                      : l.length > 0 && l !== e.externalMediaFiles && this._handleAddMediaFiles(0)(l),
                    u && !Object(no.a)(i, e.composerData) && u && u(this._areComposersValid()),
                    d !== e.replyPressToggle && r(c)
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
                    r = a.activeUser,
                    o = a.addComposer,
                    l = a.addToast,
                    s = a.audienceControlsValue,
                    c = a.composeHeader,
                    d = a.composerData,
                    u = a.copyDataFromInlineComposerToModalComposer,
                    m = a.customizePropsForSingleComposerItem,
                    p = a.geoEnabled,
                    h = a.history,
                    f = a.inReplyToStatus,
                    g = a.isInline,
                    v = a.isModal,
                    y = a.isSelfThreadReply,
                    _ = a.isSending,
                    b = a.isSuperFollowsCreator,
                    C = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    x = a.richTextInputContext,
                    E = a.scheduledFor,
                    S = a.typeaheadWrapper,
                    I = a.userLanguage,
                    R = a.windowWidth,
                    A = this.state,
                    k = A.errorMessage,
                    P = A.focused,
                    O = A.shouldDisableButton,
                    M = A.showAltTextPrompt,
                    D = A.showDiscardTweetConfirmation,
                    N = A.showToxicReplyNudge,
                    F = A.typeaheadActive,
                    L = !v && F,
                    B = g ? 0 : this.props.activeComposerIndex,
                    V = L || g ? [d[B]] : d,
                    j = this._areComposersValid(),
                    z = this.hasNonCompliantQuote && this.isRetweet,
                    H = g ? W.a : Qr.a,
                    U = g ? {} : { onAnimateComplete: v ? void 0 : this._handleAnimateComplete },
                    q = O || !j || z || this.isCommunityTweetFromProtectedUser,
                    K = (g && or.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    Y = (g && or.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !C && Bo.root },
                    g ? this._renderProgressBar() : null,
                    k &&
                      w.a.createElement(
                        W.a,
                        { style: Bo.inlineCallout },
                        w.a.createElement(We.a, {
                          action:
                            null !== (e = k.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = k.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: k.action.label, link: k.action.link }
                              : void 0,
                          text: k.text,
                          type: 'danger',
                        }),
                      ),
                    w.a.createElement(
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Bo.content, C && Bo.contentInlineReply, v && Bo.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      c,
                      w.a.createElement(
                        H,
                        U,
                        V.map(function (e, t) {
                          var a = Object(It.h)(e.scheduledFor),
                            c = d.indexOf(e),
                            C = m(e, t, V),
                            A =
                              v || g
                                ? w.a.createElement(
                                    G.a,
                                    {
                                      behavioralEventContext: No,
                                      disabled: q,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Bo.inlineSendButton,
                                      testID: v ? lr : sr,
                                      type: 'brandFilled',
                                    },
                                    Object(Qi.a)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!y,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            k = n._getSingleComposerDataWithLatestText(e)
                          return w.a.createElement(
                            W.a,
                            { key: e.key },
                            w.a.createElement(
                              qa,
                              i()(
                                {
                                  addToast: l,
                                  additionalToolbarContent: A,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && P,
                                  data: k,
                                  disableAddTweet: d.length >= 25,
                                  editable: !_ && !!r,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: p,
                                  hidePoll: K,
                                  hideScheduling: Y,
                                  history: h,
                                  index: c,
                                  isActive: c === B && !_,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: g,
                                  isInlineReply: n.isInlineReply,
                                  isLast: g || c === d.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!y,
                                  isSuperFollowsCreator: b,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: r,
                                  onAddComposer: g ? u : o,
                                  onFilesAdded: n._handleAddMediaFiles(c),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(c),
                                  richTextInputContext: x,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: F,
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
                      D
                        ? this._canSaveDraft
                          ? w.a.createElement(Xr.a, {
                              cancelButtonLabel: wo,
                              confirmButtonLabel: Eo,
                              headline: To,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: xo,
                            })
                          : w.a.createElement(Xr.a, {
                              confirmButtonLabel: wo,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? bo : _o,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Co,
                            })
                        : null,
                      M ? this._renderAltTextPrompt() : null,
                      N ? this._renderToxicReplyNudge() : null,
                      w.a.createElement(W.a, { style: _ && Bo.mask }),
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
                    i = this.state.showDiscardTweetConfirmation,
                    r = this._areComposersEmptyOrUnchanged()
                  return !(n || r || i || a)
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
                    ? Fo.Quote
                    : this.isThread
                    ? Fo.Thread
                    : this.isReply
                    ? Fo.Reply
                    : Fo.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n,
                    a,
                    i = this.props.undoTweetSettings,
                    r =
                      null == this ||
                      null === (e = this.context) ||
                      void 0 === e ||
                      null === (t = e.userClaims) ||
                      void 0 === t
                        ? void 0
                        : t.isTrueAndEnabled('subscriptions_feature_1003'),
                    o =
                      null == this ||
                      null === (n = this.context) ||
                      void 0 === n ||
                      null === (a = n.featureSwitches) ||
                      void 0 === a
                        ? void 0
                        : a.isTrue('subscriptions_undo_quote_tweets_enabled')
                  return (
                    r &&
                    ('original' === this.tweetType ||
                      'reply' === this.tweetType ||
                      ('quote' === this.tweetType && o)) &&
                    (!i || void 0 === i[this.tweetType] || i[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.a.Component)
      b()(Lo, 'defaultProps', {
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
        typeaheadWrapper: er.a,
      }),
        b()(Lo, 'contextType', I.a),
        b()(Lo, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Bo = F.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: s()({}, F.a.absoluteFillObject),
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
      t.a = Object(rt.a)(Ki(Lo))
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('3XMw'),
        i = n.n(a),
        r = i.a.g34f2c63,
        o = i.a.f70a36d0,
        l = i.a.d17df547,
        s = i.a.h735a98d,
        c = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? s : t ? l : e.isThread ? o : r({ verb: '' })
        }
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      })
      var a = n('ddV6'),
        i = n.n(a),
        r =
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
        o = n.n(r),
        l = n('3A2y'),
        s = o.a.b2e94283,
        c = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = c.map(function (e) {
            return t[e] || n[e]
          }),
          r = i()(a, 6),
          o = r[0],
          l = r[1],
          d = r[2],
          u = r[3],
          m = r[4],
          p = r[5],
          h = [
            o,
            l && '@'.concat(l.toString()),
            d,
            u,
            m &&
              m
                .toString()
                .split(',')
                .map(function (e) {
                  return '#'.concat(e)
                })
                .join(' '),
            p && s({ viaScreenName: p }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var d = function (e) {
        return Object(l.a)(e, c)
      }
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return i
        })
      var a = 'send-tweet',
        i = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        i = n.n(a),
        r = n('Y9Ll'),
        o = n.n(r),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        m = n.n(u),
        p = n('KEM+'),
        h = n.n(p),
        f = (n('2G9S'), n('z84I'), n('7x/C'), n('JtPf'), n('DfhM'), n('ERkP')),
        g = n.n(f),
        v = n('zfvc'),
        y = n('RhWx'),
        _ = n.n(y),
        b = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' }),
        w = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
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
                  i = n.onAnimateComplete
                t &&
                  (i && i(),
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
            o()(
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
                        v.a,
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
                          i = [],
                          r = function () {
                            if (n >= t.length)
                              return (
                                i.push.apply(
                                  i,
                                  _()(
                                    e.slice(a).map(function (e) {
                                      return { child: e, status: C.out }
                                    }),
                                  ),
                                ),
                                'break'
                              )
                            var r = t[n],
                              o = e[a]
                            if (r.key === o.key) i.push({ child: r, status: C.static }), (n += 1)
                            else {
                              var l = Object(b.a)(t, function (e) {
                                return e.key === o.key
                              })
                              l >= 0
                                ? (i.push.apply(
                                    i,
                                    _()(
                                      t.slice(n, l).map(function (e) {
                                        return { child: e, status: C.in }
                                      }),
                                    ).concat([{ child: t[l], status: C.static }]),
                                  ),
                                  (n = l + 1))
                                : i.push({ child: o, status: C.out })
                            }
                            a += 1
                          };
                        a < e.length && 'break' !== r();

                      );
                      return (
                        n < t.length &&
                          i.push.apply(
                            i,
                            _()(
                              t.slice(n).map(function (e) {
                                return { child: e, status: C.in }
                              }),
                            ),
                          ),
                        i
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
        i = n('42ly'),
        r = n('N9G2'),
        o = n('BIH/'),
        l = n('lhaq'),
        s = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = r(this),
              n = o(t),
              a = s(t, 0)
            return (a.length = i(a, t, t, n, 0, void 0 === e ? 1 : l(e))), a
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
          return d
        })
      var a = n('ERkP'),
        i = n.n(a),
        r = n('h5NW'),
        o = n('MWbm'),
        l = n('7N4s'),
        s = n('cHvH'),
        c = n('rHpw'),
        d = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            c = e.replyPressToggle,
            d = e.richTextInputContext,
            m = e.typeaheadWrapper,
            p = i.a.useContext(l.b).isModal
          return i.a.createElement(s.a, null, function (e) {
            var l = e.windowWidth
            return i.a.createElement(
              o.a,
              { style: u.root },
              i.a.createElement(r.a, {
                history: t,
                isInline: !0,
                isModal: p,
                location: n,
                parentTweetId: a,
                replyPressToggle: c,
                richTextInputContext: d,
                typeaheadWrapper: m,
                windowWidth: l,
              }),
            )
          })
        },
        u = c.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = d
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        i = n.n(a),
        r = n('WOwf'),
        o = n('3XMw'),
        l = n.n(o),
        s = n('k6Ei'),
        c = n('rHpw'),
        d = n('+/1j'),
        u = n('MWbm'),
        m = l.a.c2fc878c,
        p = l.a.db11b27f,
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
          o = void 0 === a ? h : a,
          l = e.warningCount,
          g = n - t,
          v = g >= 0 ? p({ count: o(g) }) : m({ count: o(t - n) }),
          y =
            t >= l
              ? i.a.createElement(
                  d.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  v,
                )
              : null,
          _ = Object(r.a)(g, n),
          b = t >= n ? 'red500' : t >= l ? 'yellow500' : 'primary',
          C = i.a.createElement(s.a, {
            color: b,
            progress: _,
            size: t >= l ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          w = t >= l ? i.a.createElement(d.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, o(g)) : null
        return i.a.createElement(
          u.a,
          { style: [f.root, f.center] },
          y,
          C,
          i.a.createElement(u.a, { style: [c.a.absoluteFill, f.center] }, w),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        i = n.n(a),
        r = n('m3Bd'),
        o = n.n(r),
        l = n('ddV6'),
        s = n.n(l),
        c = n('ERkP'),
        d = n.n(c),
        u = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        m = n('3XMw'),
        p = n.n(m),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('CKsB'),
        v = n('/yvb'),
        y = n('rHpw'),
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
            d.a.createElement(
              'g',
              null,
              d.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              d.a.createElement('path', {
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
        A = p.a.g2d04222,
        k = p.a.baffe39a,
        P = p.a.af293dc2,
        O = p.a.h1053f7e,
        M = p.a.bf994ab2,
        D = p.a.cf7f7e39,
        N = p.a.cfd2f35d,
        F = y.a.create(function (e) {
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
            i = e.isModal,
            r = e.midConversationTweet,
            o = e.value,
            l = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            s = !!r,
            c =
              s &&
              !(
                null != r &&
                null !== (t = r.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== r.user.id_str
                })
              ),
            m = O
          return (
            c ? (m = M) : s && (m = D),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, i ? F.modal : F.popover],
              },
              d.a.createElement(
                h.a,
                { style: F.title },
                d.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, R),
                d.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  A,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(g.a, {
                  Icon: _.a,
                  actionText: k,
                  isSelected: u.a.all === o,
                  onClick: l(u.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: E,
                  actionText: P,
                  isSelected: u.a.community === o,
                  onClick: l(u.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(g.a, {
                  Icon: c ? S.a : I.a,
                  actionText: m,
                  isSelected: u.a.by_invitation === o,
                  onClick: l(u.a.by_invitation),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      v.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: F.cancelButton,
                        type: 'primaryOutlined',
                      },
                      N,
                    )
                  : null,
              ),
            )
          )
        },
        B = n('OiMc'),
        V = n('efqG'),
        j = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          r = e.disabled,
          l = d.a.useState(!1),
          c = s()(l, 2),
          u = c[0],
          m = c[1],
          p = d.a.useCallback(function () {
            return m(!0)
          }, []),
          h = d.a.useCallback(function () {
            return m(!1)
          }, []),
          f = a ? (u ? B.a.VISIBILITY_BEHAVIOR.forceVisible : B.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: p, closePopover: h }) : t
        return d.a.createElement(
          V.a,
          {
            disabled: r,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = o()(e, j)
              return d.a.createElement(L, i()({}, a, { dismiss: t, isModal: 'sheet' === n }))
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
