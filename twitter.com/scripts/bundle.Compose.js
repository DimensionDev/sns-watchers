;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
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
          return b
        }),
        n.d(t, 'g', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return w
        }),
        n.d(t, 'c', function () {
          return T
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return S
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('LJOr'), n('KqXw'), n('JtPf'), n('7x/C'), n('oEOe')),
        i = n('kGix'),
        c = (n('hBpG'), n('M6MT')),
        s = n('Ssj5'),
        l = n('qlwE'),
        u = n('a/ea'),
        d = n('474o')
      function p(e, t) {
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
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var h = 'placePicker',
        f = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        g = Object.freeze({ initial: { fetchStatus: i.a.NONE }, lastSearch: { fetchStatus: i.a.NONE } })
      var v = function (e) {
          return e.placePicker.initial.results
        },
        y = function (e) {
          return e.placePicker.initial.fetchStatus
        },
        b = function (e) {
          return e.placePicker.lastSearch.results
        },
        _ = function (e) {
          return e.placePicker.lastSearch.fetchStatus
        },
        w = function (e) {
          var t,
            n = v(e)
          if (n)
            return null == (t = n)
              ? void 0
              : t.places.find(function (e) {
                  return (null == t ? void 0 : t.autotag_place_id) === e.place.id
                })
        },
        C = function (e, t) {
          return function (n, r, a) {
            var i = a.api
            return Object(o.b)(n, { request: i.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, r) {
            r.api
            var a = Object(u.d)(n())
            return t(
              C(
                {
                  query_type: d.a.tweet_compose_location,
                  lat: null == a ? void 0 : a.coords.latitude,
                  long: null == a ? void 0 : a.coords.longitude,
                  hacc: null == a ? void 0 : a.coords.accuracy,
                  search_term: e,
                },
                d.c.lastSearch,
              ),
            )
          }
        },
        E = function () {
          return function (e, t, n) {
            n.api
            var r = y(t()),
              a = v(t())
            if (r === i.a.LOADING || a) return Promise.resolve()
            var o = Object(u.d)(t())
            return o
              ? e(
                  C(
                    {
                      lat: o.coords.latitude,
                      long: o.coords.longitude,
                      hacc: o.coords.accuracy,
                      query_type: d.a.tweet_compose_location,
                      count: 50,
                    },
                    d.c.initial,
                  ),
                )
              : Promise.resolve()
          }
        },
        S = function () {
          return function (e, t, n) {
            n.api
            return Object(l.l)(t()) && Object(u.c)(t()) === c.b.granted
              ? e(Object(u.b)())
                  .then(function () {
                    return e(E())
                  })
                  .then(function () {
                    return w(t())
                  })
              : Promise.resolve()
          }
        }
      s.a.register(
        a()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return m(m({}, e), {}, a()({}, n, { fetchStatus: i.a.LOADING }))
            case f.FAILURE:
              var r = t.meta.resultSet
              return m(m({}, e), {}, a()({}, r, { fetchStatus: i.a.FAILED }))
            case f.SUCCESS:
              var o = t.meta.resultSet,
                c = t.payload
              return m(m({}, e), {}, a()({}, o, { fetchStatus: i.a.LOADED, results: c }))
            default:
              return e
          }
        }),
      )
    },
    '45mF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      n('2G9S')
      var r = n('1YZw'),
        a = n('pXBW'),
        o = n('3XMw'),
        i = n.n(o),
        c = n('SrIh'),
        s = i.a.a5d4fda0,
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof a.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(c.a)(n, { extra: { context: o, isStrato: !0 } }),
                t ? Object(r.b)({ text: e }) : []
              )
            },
          }
        }
    },
    '474o': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return a
        }),
        n.d(t, 'c', function () {
          return o
        })
      n('yH/f')
      var r = Object.freeze({ profile_location: 'profile_location', tweet_compose_location: 'tweet_compose_location' }),
        a = Object.freeze({ foursquare: 'foursquare', yelp: 'yelp' }),
        o = Object.freeze({ initial: 'initial', lastSearch: 'lastSearch' })
    },
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        h = n.n(m),
        f = n('AuHH'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n('t62R'),
        w = n('piX5'),
        C = n('4r2z'),
        T = n('FG+G'),
        E = n('rHpw'),
        S = (n('aWzz'), n('k/Ka')),
        x = n('shC7'),
        O = n('MWbm')
      function R(e) {
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
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      function I(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = b.forwardRef(function (e, t) {
          return Object(S.a)('select', P(P({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(S.a)('option', e)
        },
        A = 1,
        j = (function (e) {
          p()(n, e)
          var t = R(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              y()(u()(r), '_selectRef', b.createRef()),
              y()(u()(r), 'state', { isFocused: !1 }),
              y()(u()(r), '_handleChange', function (e) {
                var t = r.props,
                  n = t.onChange,
                  a = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  c = o.value
                n && n(c, i - (a ? 1 : 0))
              }),
              y()(u()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur
                r.setState({ isFocused: !1 }), t && t()
              }),
              y()(u()(r), '_handleFocus', function (e) {
                var t = r.props.onFocus
                r.setState({ isFocused: !0 }), t && t()
              }),
              (r._id = 'SELECTOR_'.concat(A)),
              (r._errorID = ''.concat(r._id, '_ERROR')),
              (r._helperID = ''.concat(r._id, '_HELP')),
              (r._labelID = ''.concat(r._id, '_LABEL')),
              (A += 1),
              r
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityDescribedBy,
                    n = e.disabled,
                    r = e.errorText,
                    o = e.hasError,
                    i = e.helperText,
                    c = e.options,
                    s = e.style,
                    l = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = _.b.getLanguage(),
                    h =
                      'ja' === m
                        ? E.a.theme.fontFamilies.japan
                        : x.a.getConstants().isRTL || C.a.isLocaleRTL(m)
                        ? E.a.theme.fontFamilies.rtl
                        : E.a.theme.fontFamilies.normal,
                    f = void 0 === o ? !!r : o,
                    g = new Set()
                  r && g.add(this._errorID), t && g.add(t), i && g.add(this._helperID)
                  var v = g.size ? a()(g).join(' ') : void 0
                  return b.createElement(
                    b.Fragment,
                    null,
                    b.createElement(
                      O.a,
                      {
                        style: [
                          w.a.border,
                          M.container,
                          n && w.a.disabled,
                          p && w.a.focusedBorderValid,
                          f && w.a.invalidBorderColor,
                          p && f && w.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      b.createElement(
                        D,
                        {
                          accessibilityDescribedBy: v,
                          accessibilityInvalid: f,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [M.select, { fontFamily: h }, n && w.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? b.createElement(k, { disabled: !0, style: M.option, value: '' }) : null,
                        c.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            r = e.value
                          return b.createElement(
                            k,
                            { disabled: t, key: ''.concat(n, '-').concat(r), style: M.option, value: r },
                            n,
                          )
                        }),
                      ),
                      b.createElement(T.a, {
                        style: [M.dropdownCaret, p && w.a.validColor, (o || r) && w.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    f && r ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    r = e.label,
                    a = this.state.isFocused
                  return b.createElement(
                    _.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : a ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: M.label,
                    },
                    r,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return b.createElement(
                    O.a,
                    { accessibilityLiveRegion: 'polite' },
                    b.createElement(
                      _.b,
                      { color: 'gray700', nativeID: this._helperID, style: M.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return b.createElement(
                    O.a,
                    { accessibilityLiveRegion: 'polite' },
                    b.createElement(
                      _.b,
                      { color: 'red500', nativeID: this._errorID, style: M.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(b.PureComponent)
      y()(j, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (j.propTypes = {})
      var M = E.a.create(function (e) {
        return {
          container: { backgroundColor: e.colors.cellBackground },
          dropdownCaret: {
            color: e.colors.gray700,
            height: ''.concat(1.5, 'em'),
            pointerEvents: 'none',
            position: 'absolute',
            marginTop: '-'.concat(0.75, 'em'),
            top: '50%',
            right: e.spaces.space12,
          },
          label: {
            position: 'absolute',
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space8,
            pointerEvents: 'none',
            lineHeight: e.lineHeights.subtext2,
          },
          option: { backgroundColor: e.colors.navigationBackground },
          select: {
            appearance: 'none',
            backgroundColor: 'transparent',
            borderRadius: e.borderRadii.none,
            borderWidth: e.borderWidths.none,
            color: e.colors.text,
            cursor: 'pointer',
            fontSize: e.fontSizes.headline2,
            lineHeight: e.lineHeights.headline2,
            margin: 0,
            marginTop: e.spaces.space16,
            outlineStyle: 'none',
            padding: 0,
            paddingTop: e.spaces.space12,
            paddingBottom: e.spaces.space8,
            paddingHorizontal: e.spaces.space8,
          },
          helperText: {
            fontSize: e.fontSizes.subtext2,
            paddingHorizontal: e.spaces.space8,
            paddingTop: e.spaces.space2,
          },
        }
      })
      t.a = j
    },
    '8A5z': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
            }),
            o.createElement('path', {
              d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    Drq4: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('circle', { cx: '12', cy: '6.674', r: '1.889' }),
            o.createElement('path', {
              d: 'M9.828 14.817l-1.62 3.342c-.138.41.083.857.495.995s.858-.083.996-.495l1.602-3.176c.28-.557 1.076-.556 1.356 0l1.608 3.195c.138.41.584.632.996.494.412-.138.633-.584.495-.996l-1.62-3.342.032.07-.123-.262c-.483-1.027-.535-2.19-.16-3.24.106-.302.392-.505.712-.505h2.032c.434 0 .786-.353.786-.787 0-.434-.352-.786-.786-.786H7.37c-.435 0-.787.352-.787.786 0 .434.352.786.786.786h1.985c.32 0 .606.2.713.503.374 1.05.323 2.214-.158 3.24l-.125.263',
            }),
            o.createElement('path', {
              d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    JFx8: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 158 20' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 158, height: 20 }), (t.a = u)
    },
    M6MT: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return a
        })
      n('yH/f')
      var r = Object.freeze({ granted: 'granted', denied: 'denied', prompt: 'prompt' }),
        a = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 })
    },
    ODCi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Recipients', function () {
          return N
        })
      var r = n('RhWx'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('vrRf'), n('LW0h'), n('2G9S'), n('ERkP')),
        s = (n('z84I'), n('RqPI')),
        l = n('xVN5'),
        u = n('wpu3'),
        d = n('hqKg'),
        p = n('o52z'),
        m = n('oEGd'),
        h = function (e, t) {
          return t.location.state
        },
        f = function (e, t) {
          var n = h(0, t)
          return n && n.inReplyToStatus
        },
        g = Object(d.createSelector)(f, s.p, function (e, t) {
          return e && t
            ? Object(u.a)({ inReplyToStatus: e, loggedInUserId: t, excludeReplyUser: !0 }).map(function (e) {
                return e.id_str
              })
            : Object(p.a)()
        }),
        v = Object(d.createSelector)(
          g,
          function (e, t) {
            var n = h(0, t)
            return (n && n.excludedRecipients) || Object(p.a)()
          },
          f,
          function (e, t, n) {
            return { recipientIds: e, initialExcludedRecipients: t, inReplyToStatus: n }
          },
        ),
        y = { updateExcludedRecipientsV2: l.v },
        b = Object(m.g)(v, y),
        _ = n('jHSc'),
        w = n('3XMw'),
        C = n.n(w),
        T = n('5FtR'),
        E = n('7JQg'),
        S = n('s1N3'),
        x = n('88ay'),
        O = n('hqDb'),
        R = n('MWbm'),
        I = n('0yYu'),
        P = n('6vad'),
        D = n('XiMS'),
        k = n('t62R'),
        A = n('/yvb'),
        j = C.a.c55eed71,
        M = C.a.b772cd65,
        L = C.a.caca3101,
        B = C.a.c6a6dc2f,
        F = { page: 'compose', section: 'recipients' },
        N = function (e) {
          var t = e.history,
            n = e.inReplyToStatus,
            r = e.initialExcludedRecipients,
            o = e.recipientIds,
            s = e.updateExcludedRecipientsV2,
            l = c.useState(r),
            u = i()(l, 2),
            d = u[0],
            m = u[1]
          if (!n) return c.createElement(T.a, { to: '/compose/tweet' })
          var h = (n.retweeted_status || n).user,
            f = function (e) {
              m(e ? Object(p.a)() : o)
            },
            g = function (e) {
              return function () {
                var t = -1 !== d.indexOf(e)
                m(
                  t
                    ? d.filter(function (t) {
                        return t !== e
                      })
                    : Object(S.a)([].concat(a()(d), [e])),
                )
              }
            },
            v = function () {
              s(d), t.goBack()
            },
            y = function () {
              return o.length > 1 ? c.createElement(D.a, { checked: 0 === d.length, onChange: f }) : null
            },
            b = function (e) {
              var t = e.isBlocking,
                n = e.screenName
              return t ? c.createElement(k.b, { color: 'magenta500', size: 'subtext2' }, B({ screenName: n })) : null
            },
            w = function (e) {
              if (!n) return null
              var t = (n.retweeted_status || n).user,
                r = -1 !== d.indexOf(e),
                a = e === t.id_str,
                o = c.createElement(D.a, { checked: !r, disabled: a, onChange: g(e) })
              return c.createElement(x.b, {
                bottomControl: b,
                cellClickable: !a,
                decoration: o,
                key: e,
                onClick: g(e),
                promotedItemType: 'users',
                userId: e,
                withLink: !1,
              })
            }
          return c.createElement(
            E.b,
            { namespace: F },
            c.createElement(
              _.b,
              {
                backLocation: '/compose/tweet',
                history: t,
                onBackClick: v,
                rightControl: c.createElement(A.a, { onPress: v, size: 'xSmall', type: 'brandFilled' }, M),
                title: j,
              },
              w(h.id_str),
              o.length
                ? c.createElement(
                    R.a,
                    null,
                    c.createElement(I.a, null),
                    c.createElement(P.b, { rightControl: y(), text: L }),
                    c.createElement(O.a, { renderUserCell: w, userIds: o }),
                  )
                : null,
            ),
          )
        }
      t.default = b(N)
    },
    WOwf: function (e, t, n) {
      'use strict'
      function r(e, t) {
        return Math.min(1, 1 - e / t)
      }
      n.d(t, 'a', function () {
        return r
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
          return y
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return w
        })
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('LW0h'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('oEOe')),
        i = n('kGix'),
        c = n('Ssj5')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = 'scheduledTweets',
        d = { fetchStatus: i.a.NONE, scheduledTweets: [] },
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
      function v() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
          t = arguments.length > 1 ? arguments[1] : void 0
        switch (t.type) {
          case m.SUCCESS:
            if (t.payload) return l(l({}, e), {}, { fetchStatus: i.a.LOADED, scheduledTweets: t.payload })
            break
          case m.FAILURE:
            return l(l({}, e), {}, { fetchStatus: i.a.FAILED })
          case m.REQUEST:
            return l(l({}, e), {}, { fetchStatus: i.a.LOADING })
          case f.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? l(l({}, e), {}, { scheduledTweets: g(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(a()({}, u, v))
      var y = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        b = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        _ = function () {
          return function (e, t, n) {
            var r = n.api
            return Object(o.b)(e, { request: r.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        w = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(o.b)(t, { request: a.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: f,
              context: h,
              meta: { deleteScheduledTweetId: e },
            })
          }
        }
    },
    Zg3A: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
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
          return v
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('JtPf'), n('7x/C'), n('M6MT')),
        i = n('Ssj5')
      function c(e, t) {
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
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var l = 'geoLocation',
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
          return function (e, t, n) {
            return n.featureSwitches.isTrue('responsive_web_precise_location_setting_enabled')
              ? y()
                  .then(function (t) {
                    return e({ payload: t, type: f })
                  })
                  .catch(function (t) {
                    return e(h(o.b.denied)), Promise.reject(t)
                  })
              : Promise.resolve()
          }
        },
        v = function () {
          return function (e, t, n) {
            n.featureSwitches
            return p(t()) ? Promise.resolve() : e(g())
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
      i.a.register(
        a()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return s(s({}, e), {}, { permissionStatus: t.payload })
            case f:
              return s(s({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('JtPf'), n('7x/C')
      var r = function (e) {
        return new Promise(function (t, n) {
          var r = new window.XMLHttpRequest()
          ;(r.responseType = 'blob'),
            (r.onreadystatechange = function () {
              r.readyState === window.XMLHttpRequest.DONE &&
                (200 === r.status ? t(r.response) : n(new Error('Unexpected status code')))
            }),
            (r.onerror = function (e) {
              return n(e)
            }),
            (r.ontimeout = function (e) {
              return n(e)
            }),
            r.open('GET', e, !0),
            r.send()
        })
      }
    },
    h5NW: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('RhWx'),
        i = n.n(o),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('N+ot'),
        g = n.n(f),
        v = n('AuHH'),
        y = n.n(v),
        b = n('KEM+'),
        _ = n.n(b),
        w =
          (n('2G9S'),
          n('yH/f'),
          n('jwue'),
          n('+oxZ'),
          n('5BYb'),
          n('7xRU'),
          n('JtPf'),
          n('7x/C'),
          n('jQ3i'),
          n('x4t0'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('z84I'),
          n('MvUL'),
          n('KqXw'),
          n('ulNE'),
          n('LW0h'),
          n('hCOa'),
          n('DfhM'),
          n('hBvt'),
          n('vrRf'),
          n('uFXj'),
          n('ERkP')),
        C = n('ye3X'),
        T = n('pXBW'),
        E = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        x = n('+Kfv'),
        O = n('YeIG'),
        R = n('MWbm'),
        I = n('MtXG'),
        P = n('t62R'),
        D = n('CKsB'),
        k = n('rHpw'),
        A = n('+Eiw'),
        j = n('3XMw'),
        M = n.n(j),
        L = n('Zg3A'),
        B = n('EyD/')
      function F(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var N = M.a.e815fc33,
        V = M.a.c63602d3,
        H = M.a.baffe39a,
        z = M.a.aa4209e8,
        U = M.a.d58baa7e,
        W = (function (e) {
          h()(n, e)
          var t = F(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              _()(p()(e), '_renderCount', function (e) {
                var t = U(e)
                return w.createElement(
                  I.a.Group,
                  null,
                  w.createElement(
                    I.a,
                    null,
                    w.createElement(
                      P.b,
                      { color: 'white' },
                      w.createElement(
                        M.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        w.createElement(I.a.Value, null, M.a.ibd0106d({ formattedCount: t })),
                        w.createElement(I.a.Label, null, M.a.cface2d0({ count: e })),
                      ),
                    ),
                  ),
                )
              }),
              _()(p()(e), '_createClickHandler', function (t) {
                return function () {
                  var n = e.props,
                    r = n.dismiss
                  ;(0, n.onAudienceControlsValueChange)(t), r()
                }
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.audienceControlsValue,
                    r = t.communities,
                    a = t.isC9sParticipationEnabled,
                    o = t.isSuperFollowsCreator,
                    i = n.communityIdValue || void 0,
                    c = n.exclusivityControlValue || void 0
                  return w.createElement(
                    R.a,
                    { style: q.root },
                    w.createElement(
                      R.a,
                      null,
                      w.createElement(P.b, { size: 'headline1', style: q.title, weight: 'bold' }, N),
                      w.createElement(
                        x.a,
                        { viewType: 'everyone' },
                        w.createElement(D.a, {
                          Icon: L.a,
                          actionText: H,
                          isSelected: !c && !i,
                          onClick: this._createClickHandler({
                            _type: 'conversation_controls',
                            conversationControlsValue: 'all',
                          }),
                          selectable: !0,
                          style: q.menuItem,
                          withIconAsThumbnail: !0,
                        }),
                      ),
                      o
                        ? w.createElement(D.a, {
                            Icon: B.a,
                            actionText: z,
                            iconThumbnailColor: 'exclusive',
                            isSelected: !!c,
                            onClick: this._createClickHandler({
                              _type: 'super_followers_exclusive',
                              conversationControlsValue: 'super_followers_exclusive',
                              exclusivityControlValue: {},
                            }),
                            selectable: !0,
                            style: q.menuItem,
                            withIconAsThumbnail: !0,
                          })
                        : null,
                    ),
                    !Object(O.a)(r) && a
                      ? w.createElement(
                          R.a,
                          null,
                          w.createElement(
                            x.a,
                            { viewType: 'community' },
                            w.createElement(P.b, { style: q.title, weight: 'bold' }, V),
                            Object.keys(r).map(function (t) {
                              var n = r[t]
                              return n
                                ? w.createElement(D.a, {
                                    actionSubText: e._renderCount(n.member_count),
                                    actionText: n.name,
                                    isSelected: i === t,
                                    key: t,
                                    media: n.media,
                                    onClick: e._createClickHandler({
                                      _type: 'community_members',
                                      communityIdValue: t,
                                      conversationControlsValue: 'community_members',
                                    }),
                                    selectable: !0,
                                    style: q.menuItem,
                                  })
                                : null
                            }),
                          ),
                        )
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(w.Component),
        q = k.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: A.a.getBackgroundImage() },
          }
        }),
        G = W,
        K = n('xVN5'),
        X = n('RqPI'),
        Z = n('xZGM'),
        Y = n('eSoz'),
        Q = n('rxPX'),
        J = n('0KEI'),
        $ = n('o3oN'),
        ee = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? Y.b.select(e, n) : void 0
        },
        te = function (e, t) {
          return Object(Z.y)(e, Z.f)
        },
        ne = Object(Q.a)()
          .propsFromState(function () {
            return {
              communities: Y.e,
              educationalVisibilityFlag: te,
              fetchStatus: $.d,
              hasMemberships: X.j,
              selectedCommunity: ee,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(J.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              fetchCommunityMemberships: $.a,
              addEducationFlag: function () {
                return Object(Z.v)(Z.f)
              },
              updateSingleComposer: K.x,
            }
          }),
        re = n('kGix'),
        ae = n('FG+G'),
        oe = n('v6aA'),
        ie = n('X00g'),
        ce = n('efqG'),
        se = n('/yvb')
      function le(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var ue = M.a.baffe39a,
        de = M.a.e815fc33,
        pe = M.a.aa4209e8,
        me = w.createElement(ae.a, null),
        he = (function (e) {
          h()(n, e)
          var t = le(n)
          function n(e, r) {
            var a
            return (
              s()(this, n),
              (a = t.call(this, e, r)),
              _()(p()(a), '_renderContent', function (e) {
                var t = a.props,
                  n = t.audienceControlsValue,
                  r = t.communities,
                  o = t.isC9sParticipationEnabled,
                  i = t.isSuperFollowsCreator
                return w.createElement(G, {
                  audienceControlsValue: n,
                  communities: r,
                  dismiss: e,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: a._handleAudienceControlsValueChange,
                })
              }),
              _()(p()(a), '_handleAudienceControlsValueChange', function (e) {
                var t = a.props.updateSingleComposer
                a._handleDismissEducationalVisibilty(),
                  a.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              _()(p()(a), '_handleOpen', function () {
                a.setState({ popoverIsOpen: !0 })
              }),
              _()(p()(a), '_handleDismiss', function () {
                a.setState({ popoverIsOpen: !1 }), a._handleDismissEducationalVisibilty()
              }),
              _()(p()(a), '_handleDismissEducationalVisibilty', function () {
                a.props.addEducationFlag()
              }),
              (a.state = { popoverIsOpen: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchCommunityMemberships,
                    r = e.fetchStatus
                  e.hasMemberships && r === re.a.NONE && n().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    r = t.educationalVisibilityFlag,
                    o = t.hasMemberships,
                    i = t.isSuperFollowsCreator,
                    c = t.selectedCommunity,
                    s = this.state.popoverIsOpen,
                    l = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = n.communityIdValue || !1,
                    d = n.exclusivityControlValue || !1,
                    p = r && !c,
                    m = u && null != c && c.name ? c.name : d ? pe : ue
                  if (d) e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != c && c.theme && l) {
                    var h = ie.a.getCommunityUIColorName(c.theme)
                    e = { color: h, borderColor: h, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o
                    ? w.createElement(
                        x.a,
                        { viewType: 'communities_controls' },
                        w.createElement(
                          R.a,
                          { style: fe.container },
                          w.createElement(
                            ce.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: p ? 'forceVisible' : 'interactive',
                            },
                            w.createElement(
                              se.a,
                              a()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: de,
                                  accessibilityRole: 'button',
                                  icon: me,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              m,
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
        })(w.Component)
      _()(he, 'contextType', oe.a)
      var fe = k.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        ge = ne(he),
        ve = n('ddV6'),
        ye = n.n(ve),
        be = n('PKbs'),
        _e = function (e, t) {
          var n = t.selectedCommunityId
          return n ? Y.b.select(e, n) : void 0
        },
        we = Object(Q.a)()
          .propsFromState(function () {
            return { community: _e }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(J.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: Y.b.fetchOneIfNeeded,
            }
          }),
        Ce = n('21zW'),
        Te = M.a.gfca5254,
        Ee = M.a.f510c8b2,
        Se = w.createElement(P.b, { weight: 'bold' }, Ee),
        xe = k.a.create(function (e) {
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
        Oe = we(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          w.useEffect(
            function () {
              o && Object(O.a)(t) && r(o).catch(n())
            },
            [t, o, n, r],
          )
          var c = w.useState(!1),
            s = ye()(c, 2),
            l = s[0],
            u = s[1],
            d = w.useContext(oe.a).featureSwitches,
            p = w.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    r = t.theme
                  return w.createElement(be.b, {
                    badgeStyle: xe.badgeStyle,
                    headerContainerStyle: xe.rulesHeader,
                    heading: Se,
                    ruleContainerStyle: xe.ruleContainerStyle,
                    rules: n,
                    theme: r,
                  })
                }
                return null
              },
              [t],
            )
          if (null != t && t.rules && t.rules.length > 0) {
            var m = t.theme,
              h = ie.a.getCommunityUIColorName(m),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.createElement(
              R.a,
              { style: xe.container },
              i ? w.createElement(Ce.a, null) : null,
              w.createElement(
                ce.a,
                {
                  onDismiss: function () {
                    return u(!1)
                  },
                  onOpen: function () {
                    return u(!0)
                  },
                  renderContent: p,
                },
                w.createElement(
                  se.a,
                  a()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: xe.button,
                    },
                    f,
                  ),
                  Te,
                ),
              ),
            )
          }
          return null
        }),
        Re = function (e, t) {
          return Object(Z.y)(e, Z.g)
        },
        Ie = Object(Q.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Re }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Z.v)(Z.g)
              },
            }
          }),
        Pe = n('4zmP'),
        De = M.a.g46f363d,
        ke = { viewType: 'community_rule_education' }
      var Ae = k.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        je = Ie(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            r = function () {
              t()
            }
          return (
            w.useEffect(function () {
              return r
            }),
            n
              ? w.createElement(
                  R.a,
                  { style: Ae.container },
                  w.createElement(Pe.a, { behavioralEventContext: ke, onClose: r, text: De, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Me = n('H7Rt'),
        Le = n('m3Bd'),
        Be = n.n(Le),
        Fe = n('yZqq'),
        Ne = function (e, t) {
          return Object(Z.y)(e, Z.q)
        },
        Ve = Object(Q.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Ne }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Z.v)(Z.q)
              },
            }
          }),
        He = M.a.aa65a449,
        ze = { viewType: 'persistent_conversation_controls_education' }
      var Ue = k.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        We = Ve(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            r = e.shouldShowEducation,
            a = w.useContext(oe.a).featureSwitches,
            o = w.useState(),
            i = ye()(o, 2),
            c = i[0],
            s = i[1],
            l = function () {
              t()
            }
          return (
            w.useEffect(function () {
              return l
            }, []),
            w.useEffect(
              function () {
                if (n) {
                  var e = n.getBoundingClientRect(),
                    t = e.left,
                    r = e.width
                  s(t + r / 2)
                }
              },
              [n],
            ),
            !0 === a.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && r
              ? w.createElement(
                  R.a,
                  { style: Ue.container },
                  w.createElement(Pe.a, {
                    arrowPositionStart: c,
                    behavioralEventContext: ze,
                    onClose: l,
                    text: He,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        qe = n('Irs7'),
        Ge = n('DlMI'),
        Ke = n('gBde'),
        Xe = n('gUPl'),
        Ze = n('cOhU'),
        Ye = w.createElement(Ge.a, null),
        Qe = w.createElement(Ke.a, null),
        Je = w.createElement(Xe.a, null),
        $e = w.createElement(Ze.a, null),
        et = 'conversation_control',
        tt = Object.freeze({
          all: { icon: Ye, label: M.a.i8ea6d4e },
          community: { icon: Je, label: M.a.ec5a4a25 },
          by_invitation: { icon: Qe, label: M.a.b4543009 },
          community_members: { icon: $e, label: M.a.i13be5a0 },
          super_followers_exclusive: { icon: Ye, label: M.a.f8393bda },
        }),
        nt =
          (Object.freeze(['community', 'by_invitation']),
          Object(qe.a)(function (e) {
            var t = e.analytics,
              n = Be()(e, ['analytics']),
              r = e.disabled,
              a = e.value,
              o = tt[a],
              i = o.icon,
              c = o.label,
              s = w.useState(!1),
              l = ye()(s, 2),
              u = l[0],
              d = l[1],
              p = w.useRef(null)
            w.useEffect(function () {
              a !== Me.a.all && a !== Me.a.community_members && d(!0)
            }, [])
            var m = w.useCallback(
              function (e) {
                t.scribe({ element: et, action: 'click' })
              },
              [t],
            )
            return w.createElement(
              x.a,
              { viewType: et },
              u ? w.createElement(We, { buttonRef: p.current }) : null,
              w.createElement(
                R.a,
                { style: rt.controlsContainer },
                w.createElement(
                  Fe.a,
                  n,
                  w.createElement(
                    se.a,
                    { disabled: r, icon: i, onPress: m, ref: p, size: 'xSmall', style: rt.button, type: 'brandText' },
                    c,
                  ),
                ),
              ),
            )
          })),
        rt = k.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        at = n('krmn'),
        ot = n('cIoY'),
        it = n('w3n3'),
        ct = n('MLl7'),
        st = n('1auM'),
        lt = n('07FG'),
        ut = n('Q8CU'),
        dt = n('QbaN'),
        pt = n('nV1z'),
        mt = n('VPdC'),
        ht = n('WPfJ'),
        ft = k.a.create(function (e) {
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
              zIndex: ht.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: ht.e },
            iconEmojiPicker: { zIndex: ht.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: ht.a,
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
        gt = n('aITJ'),
        vt = M.a.bdbcdd93,
        yt = M.a.a809609f,
        bt = w.createElement(pt.a, null),
        _t = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            r = e.onFilesAdded,
            a = e.setActiveParentKey,
            o = e.videoPickerEnabled,
            i = n || t.length >= 4,
            c = t.length < 3,
            s = o && gt.b.isIOS() && gt.b.isSafari()
          return w.createElement(
            w.Fragment,
            null,
            w.createElement(mt.a, {
              acceptGifs: 0 === t.length,
              acceptVideo: 0 === t.length && !s,
              accessibilityLabel: t.length > 0 || s ? vt : void 0,
              disabled: i,
              multiple: c,
              onChange: r,
              onPress: a,
              style: [ft.toolBarButton, ft.firstToolBarButton],
              type: 'brandText',
            }),
            s
              ? w.createElement(mt.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !0,
                  accessibilityLabel: yt,
                  disabled: t.length > 0,
                  hoverLabel: { label: yt },
                  icon: bt,
                  multiple: !1,
                  onChange: r,
                  onPress: a,
                  style: ft.toolBarButton,
                  type: 'brandText',
                })
              : null,
          )
        },
        wt = n('p+r5'),
        Ct = n('GWvE')
      function Tt(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Et = (function (e) {
        h()(n, e)
        var t = Tt(n)
        function n() {
          var e
          s()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            _()(p()(e), '_setInputRef', function (t) {
              e._inputRef = t
            }),
            e
          )
        }
        return (
          u()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.autoFocus,
                  n = e.defaultValue,
                  r = e.editable,
                  a = e.label,
                  o = e.name,
                  i = e.onChange
                return w.createElement(
                  R.a,
                  { style: St.root },
                  w.createElement(wt.a, {
                    autoCapitalize: 'none',
                    autoCorrect: !1,
                    autoFocus: t,
                    defaultValue: n,
                    editable: r,
                    label: a,
                    maxLength: 25,
                    name: o,
                    onChange: i,
                    ref: this._setInputRef,
                    spellCheck: 'false',
                    style: St.formTextInput,
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
                  (this.value && !Object(Ct.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                )
              },
            },
          ]),
          n
        )
      })(w.Component)
      _()(Et, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var St = k.a.create(function (e) {
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
        xt = Et,
        Ot = (n('Blm6'), n('DZ+c'), n('mtvn')),
        Rt = n('6XNv')
      function It(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Pt = (function (e) {
        h()(n, e)
        var t = It(n)
        function n() {
          return s()(this, n), t.apply(this, arguments)
        }
        return (
          u()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.editable,
                  n = e.label,
                  r = e.last,
                  a = e.max,
                  o = e.min,
                  i = e.onChange,
                  c = e.testID,
                  s = !t || o === a,
                  l = e.value.toString(),
                  u = Object(Ot.a)(o, a + 1).map(function (e) {
                    return { label: ''.concat(M.a.ia24dc8c(e)), value: ''.concat(e) }
                  })
                return w.createElement(Rt.a, {
                  disabled: s,
                  label: n,
                  onChange: i,
                  options: u,
                  style: [Dt.selector, !r && Dt.rightMargin],
                  testID: c,
                  value: l,
                })
              },
            },
          ]),
          n
        )
      })(w.PureComponent)
      _()(Pt, 'defaultProps', { last: !1 })
      var Dt = k.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        kt = Pt,
        At = 'addPollChoice',
        jt = 'selectPollDays',
        Mt = 'selectPollHours',
        Lt = 'selectPollMinutes',
        Bt = 'removePollButton'
      function Ft(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Nt = M.a.caf8edc4,
        Vt = M.a.g93586be,
        Ht = M.a.d073b644,
        zt = M.a.a2f0728e,
        Ut = (function (e) {
          h()(n, e)
          var t = Ft(n)
          function n(e, r) {
            var a
            return (
              s()(this, n),
              (a = t.call(this, e, r)),
              _()(p()(a), '_handleDaysChange', function (e) {
                var t = a.props.onChange,
                  n = parseInt(e, 10)
                a.setState(function (e) {
                  var r = e.duration,
                    a = r.hours,
                    o = r.minutes,
                    i = 0 === n && 0 === a && 0 === o ? 1 : 7 === n ? 0 : a,
                    c = { days: n, hours: i, minutes: 7 === n ? 0 : 0 === n && 0 === i && o < 5 ? 5 : o }
                  return t && t(c), { duration: c }
                })
              }),
              _()(p()(a), '_handleHoursChange', function (e) {
                var t = a.props.onChange,
                  n = parseInt(e, 10)
                a.setState(function (e) {
                  var r = e.duration,
                    a = r.days,
                    o = r.minutes,
                    i = { days: a, hours: n, minutes: 0 === a && 0 === n && o < 5 ? 5 : o }
                  return t && t(i), { duration: i }
                })
              }),
              _()(p()(a), '_handleMinutesChange', function (e) {
                var t = a.props.onChange,
                  n = parseInt(e, 10)
                a.setState(function (e) {
                  var r = e.duration,
                    a = { days: r.days, hours: r.hours, minutes: n }
                  return t && t(a), { duration: a }
                })
              }),
              (a.state = { duration: e.initialDuration }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isActive,
                    n = e.style
                  return w.createElement(
                    R.a,
                    { style: n },
                    w.createElement(P.b, { color: 'normal', style: Wt.durationLabel }, t ? Nt : ''),
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
                    r = this.state.duration,
                    a = r.days,
                    o = r.hours,
                    i = r.minutes
                  return w.createElement(
                    R.a,
                    { style: Wt.durationControls },
                    w.createElement(kt, {
                      editable: t && n,
                      label: Vt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: jt,
                      value: a,
                    }),
                    w.createElement(kt, {
                      editable: t && n,
                      label: Ht,
                      max: 7 === a ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Mt,
                      value: o,
                    }),
                    w.createElement(kt, {
                      editable: t && n,
                      label: zt,
                      last: !0,
                      max: 7 === a ? 0 : 59,
                      min: 0 === a && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Lt,
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
        })(w.Component)
      _()(Ut, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Wt = k.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        qt = Ut,
        Gt = n('iY63'),
        Kt = n('jtO7')
      function Xt(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Zt = M.a.g589c2e1,
        Yt = M.a.a1e6c3a1,
        Qt = M.a.a739e006,
        Jt = M.a.d89a5b92,
        $t = M.a.c2a8118d,
        en = M.a.a8ede1de,
        tn = M.a.af40a8ef,
        nn = (function (e) {
          h()(n, e)
          var t = Xt(n)
          function n(e, r) {
            var a
            s()(this, n),
              (a = t.call(this, e, r)),
              _()(p()(a), '_setChoice1Ref', function (e) {
                a._choice1 = e
              }),
              _()(p()(a), '_setChoice2Ref', function (e) {
                a._choice2 = e
              }),
              _()(p()(a), '_setChoice3Ref', function (e) {
                a._choice3 = e
              }),
              _()(p()(a), '_setChoice4Ref', function (e) {
                a._choice4 = e
              }),
              _()(p()(a), '_setDurationPickerRef', function (e) {
                a._durationPicker = e
              }),
              _()(p()(a), '_handleValidation', function () {
                var e = a.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  r = e.onValid,
                  o = a.choices,
                  i = p()(a),
                  c = [i._choice1, i._choice2, i._choice3, i._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && c ? r() : n(), t && t({ choices: o, duration: a.duration })
              }),
              _()(p()(a), '_handleAdd', function () {
                a.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  a.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              _()(p()(a), '_handleDurationChange', function (e) {
                var t = a.props.onChange
                t && t({ choices: a.choices, duration: e })
              })
            var o = e.initialChoices,
              i = void 0 === o,
              c = (o || []).length,
              l = c > 2 ? c : 2
            return (a.state = { autoFocus: i, choiceCount: l }), a
          }
          return (
            u()(n, [
              {
                key: '_renderChoices',
                value: function () {
                  var e = this.props,
                    t = e.editable,
                    n = e.initialChoices,
                    r = void 0 === n ? [] : n,
                    a = e.isActive,
                    o = this.state,
                    i = o.autoFocus,
                    c = o.choiceCount,
                    s = w.createElement(
                      R.a,
                      { style: rn.rightColumn },
                      c < 4
                        ? w.createElement(se.a, {
                            accessibilityLabel: en,
                            disabled: !(t && a),
                            hoverLabel: { label: tn },
                            icon: w.createElement(Gt.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: rn.addButton,
                            testID: At,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.createElement(
                    R.a,
                    { style: rn.choicesAndAddButton },
                    w.createElement(
                      R.a,
                      { style: rn.choices },
                      w.createElement(xt, {
                        autoFocus: i,
                        defaultValue: r[0],
                        editable: t && a,
                        label: Zt,
                        name: 'Choice1',
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.createElement(xt, {
                        defaultValue: r[1],
                        editable: t && a,
                        label: Yt,
                        name: 'Choice2',
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      c >= 3
                        ? w.createElement(xt, {
                            autoFocus: i,
                            defaultValue: r[2],
                            editable: t && a,
                            label: Qt,
                            name: 'Choice3',
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === c
                        ? w.createElement(xt, {
                            autoFocus: i,
                            defaultValue: r[3],
                            editable: t && a,
                            label: Jt,
                            name: 'Choice4',
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
                    r = e.isActive,
                    a = e.onRemove
                  return w.createElement(
                    R.a,
                    { style: rn.root },
                    this._renderChoices(),
                    w.createElement(qt, {
                      editable: t,
                      initialDuration: n,
                      isActive: r,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: rn.durationPicker,
                    }),
                    w.createElement(
                      R.a,
                      { style: rn.removePollButton },
                      w.createElement(Kt.a, { color: 'red500', label: $t, onPress: a, testID: Bt }),
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
                    r = this._choice4
                  return [e && e.value, t && t.value, n && n.value, r && r.value].filter(Boolean)
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
        })(w.Component),
        rn = k.a.create(function (e) {
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
        an = Object(qe.a)(nn),
        on = k.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        cn = M.a.i859676b,
        sn = w.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.createElement(
            P.b,
            { link: '/settings/audience_and_tagging', style: on.link, withInteractiveStyling: !0, withUnderline: !0 },
            M.a.c9a48d3f,
          ),
        )
      function ln() {
        return w.createElement(R.a, { style: on.container }, w.createElement(Pe.a, { headline: cn, text: sn }))
      }
      var un = n('b5s6'),
        dn = n('rcen'),
        pn = n('zmS9'),
        mn = 'addButton',
        hn = 'addSubtitlesLabel',
        fn = 'altTextLabel',
        gn = 'tagPeopleLabel',
        vn = 'attachments',
        yn = 'createPollButton',
        bn = 'geoButton',
        _n = 'gifSearchButton',
        wn = 'scheduleOption',
        Cn = 'taggedUsersLabel',
        Tn = 'tweetTextarea_',
        En = 'toolBar',
        Sn = 'scheduledTweetIndicator',
        xn = n('xM7j'),
        On = n('6OUF'),
        Rn = n('tZIO'),
        In = n('5mJL'),
        Pn = n('DNho'),
        Dn = n('jhWN'),
        kn = n('rFBM'),
        An = n('zfvc'),
        jn = n('Ujvi'),
        Mn = n('yTN1'),
        Ln = n('gpVt'),
        Bn = n('hOZg'),
        Fn = n('ll3R'),
        Nn = n('J0mu'),
        Vn = n('EfHu'),
        Hn = n('KrGU'),
        zn = n('boUI'),
        Un = n('6ZHn'),
        Wn = n('/WPq'),
        qn = n('wpLu'),
        Gn = n('pHub'),
        Kn = n('8A5z'),
        Xn = n('pKoL'),
        Zn = n('ZvMt'),
        Yn = n('9Xij')
      function Qn(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Jn = (function (e) {
        h()(n, e)
        var t = Qn(n)
        function n() {
          return s()(this, n), t.apply(this, arguments)
        }
        return (
          u()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.media,
                  n = e.style
                return w.createElement(R.a, { style: n }, this._renderImageGroup(t.length))
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
                  r = n.height,
                  a = n.width,
                  o = k.a.theme.aspectRatios.landscape
                if (t) {
                  var i,
                    c,
                    s = this.context.featureSwitches.isTrue('media_minimal_image_crop_enabled'),
                    l = this.context.featureSwitches.getNumberValue('media_minimal_image_crop_minimum_aspect_ratio'),
                    u = this.context.featureSwitches.getNumberValue('media_minimal_image_crop_maximum_aspect_ratio')
                  if (s)
                    o = Zn.a.getImageAspectRatio(l, u, {
                      width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                      height: null === (c = e[0].mediaFile) || void 0 === c ? void 0 : c.height,
                    })
                }
                return w.createElement(
                  Yn.a,
                  { ratio: t ? o : a / r },
                  w.createElement(R.a, { style: $n.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                )
              },
            },
            {
              key: '_renderGroupOf2',
              value: function () {
                return w.createElement(
                  Yn.a,
                  { ratio: k.a.theme.aspectRatios.landscape },
                  w.createElement(
                    R.a,
                    { style: $n.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, $n.gutterRight),
                    this._renderMediaAtIndex(1),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf3',
              value: function () {
                return w.createElement(
                  Yn.a,
                  { ratio: k.a.theme.aspectRatios.landscape },
                  w.createElement(
                    R.a,
                    { style: $n.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, $n.gutterRight),
                    this._renderColumnWithIndices([1, 2]),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf4',
              value: function () {
                return w.createElement(
                  Yn.a,
                  { ratio: k.a.theme.aspectRatios.landscape },
                  w.createElement(
                    R.a,
                    { style: $n.mediaPreviewWrapper },
                    this._renderColumnWithIndices([0, 2], $n.gutterRight),
                    this._renderColumnWithIndices([1, 3]),
                  ),
                )
              },
            },
            {
              key: '_renderColumnWithIndices',
              value: function (e, t) {
                return w.createElement(
                  R.a,
                  { style: [$n.column, t] },
                  this._renderMediaAtIndex(e[0], $n.gutterBottom),
                  this._renderMediaAtIndex(e[1]),
                )
              },
            },
            {
              key: '_renderMediaAtIndex',
              value: function (e, t) {
                var n,
                  r,
                  a,
                  o,
                  i = this.props,
                  c = i.editable,
                  s = i.isActive,
                  l = i.media,
                  u = i.onClickMedia,
                  d = i.onEditMedia,
                  p = i.onEditSensitiveWarning,
                  m = i.onRemoveMedia,
                  h = i.onSetMediaPreviewRef,
                  f = l[e],
                  g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                  v = null === (r = f.mediaMetadata) || void 0 === r ? void 0 : r.defaultAltText,
                  y = !(
                    null === (a = f.mediaMetadata) ||
                    void 0 === a ||
                    null === (o = a.sensitiveMediaWarning) ||
                    void 0 === o ||
                    !o.size
                  ),
                  b = d && c && s,
                  _ = b && y && !!p
                return w.createElement(Xn.a, {
                  accessibilityLabel: g || v,
                  accessibilityRole: 'group',
                  enableGif: s,
                  key: f.id,
                  mediaItem: f,
                  onClick: u ? u(f.id) : void 0,
                  onEdit: d ? d(f.id) : void 0,
                  onEditSensitiveWarning: p && _ ? p(f.id) : void 0,
                  onRemove: m(f.id),
                  ref: h,
                  style: [$n.mediaContainer, t],
                  withAltTextLabel: !!g,
                  withCloseButton: c && s,
                  withEditButton: b,
                  withEditSensitiveWarningButton: _,
                })
              },
            },
          ]),
          n
        )
      })(w.Component)
      _()(Jn, 'contextType', oe.a)
      var $n = k.a.create(function (e) {
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
        er = n('oQhu'),
        tr = n('+d3d'),
        nr = n('S1qy'),
        rr = n.n(nr),
        ar = n('cjAp'),
        or = n.n(ar)
      function ir(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var cr = M.a.f0afcc0e,
        sr = M.a.ha5e2e79,
        lr = M.a.a3de3b68,
        ur = M.a.cc2b28fc,
        dr = M.a.g45af04e,
        pr = M.a.ee9c4013,
        mr = M.a.af40a8ef,
        hr = M.a.e68b09b4,
        fr = M.a.ec10ee02,
        gr = M.a.h735a98d,
        vr = M.a.c4ccfbe2,
        yr = M.a.j499fbcb,
        br = M.a.b7d8e3f0,
        _r = M.a.d1175c78,
        wr = M.a.bf4e9d79,
        Cr = M.a.e0342f98,
        Tr = M.a.e349147b,
        Er = M.a.e3a24e4b,
        Sr = M.a.de4669e2,
        xr = M.a.d2c7a41c,
        Or = M.a.f7364fa1,
        Rr = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Ir = M.a.ia24dc8c,
        Pr = w.createElement(Bn.a, null),
        Dr = w.createElement(Gt.a, null),
        kr = w.createElement(Fn.a, null),
        Ar = w.createElement(Nn.a, null),
        jr = { viewType: 'schedule_tweet' },
        Mr = { viewType: 'add_poll' },
        Lr = { viewType: 'add_composer' },
        Br = { viewType: 'tag_location' },
        Fr = (function (e) {
          h()(n, e)
          var t = ir(n)
          function n(e, r) {
            var o
            s()(this, n),
              (o = t.call(this, e, r)),
              _()(p()(o), '_handleConversationControlsValueChange', function (e) {
                o._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              _()(p()(o), '_handleAudienceControlsValueChange', function (e) {
                o.props.updateAudienceControlsValue(e)
              }),
              _()(
                p()(o),
                '_triggerConversationControlsImpression',
                Object(er.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(p()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  r = o.props,
                  a = r.audienceControlsValue,
                  i = r.isActive,
                  c = r.isInline,
                  s = r.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (a.conversationControlsValue !== Me.a.community_members &&
                      a.conversationControlsValue !== Me.a.super_followers_exclusive) ||
                    !s
                  ) ||
                  (i && !s && (!c || n || e))
                )
              }),
              _()(p()(o), '_renderConversationControls', function (e) {
                var t = o.state.isFocused,
                  n = o.props,
                  r = n.audienceControlsValue,
                  a = n.isInline
                if (
                  (n.isReply || (!t && a) || o._triggerConversationControlsImpression(),
                  !o._conversationControlsCreationEnabled)
                )
                  return null
                var i = r.conversationControlsValue,
                  c = o._shouldRenderControls(e, 'conversation'),
                  s = i === Me.a.community_members || i === Me.a.super_followers_exclusive || o._isScheduled()
                return c
                  ? w.createElement(nt, { disabled: s, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              _()(p()(o), '_renderTaggedLocation', function (e) {
                return w.createElement(
                  R.a,
                  { style: ft.taggedLocationContainer },
                  w.createElement(
                    se.a,
                    {
                      icon: w.createElement(Vn.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: ft.taggedLocationButton,
                      type: 'brandText',
                    },
                    e.place.full_name,
                  ),
                )
              }),
              _()(p()(o), '_renderMainContent', function () {
                var e = o.props,
                  t = e.additionalToolbarContent,
                  n = e.data,
                  r = e.index,
                  a = e.isExpanded,
                  i = e.isInline,
                  c = e.isInlineReply,
                  s = e.onTypeaheadStateChange,
                  l = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(Ln.b)(h) || (u && !Object(lt.a)(u) && [u]),
                  g = !!d.length || p || !!m,
                  v = o.props.typeaheadWrapper,
                  y = !o._isEmpty()
                return w.createElement(
                  R.a,
                  { style: ft.textInputArea },
                  w.createElement(
                    R.a,
                    { style: a ? ft.inputStyle : ft.collapsedInputStyle },
                    o._renderAudienceControls(y),
                    w.createElement(
                      v,
                      {
                        contextText: h,
                        isInline: i,
                        isInlineReply: c,
                        onTextUpdated: l ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: s,
                      },
                      o._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.createElement(Ln.a, { index: r, isCardPreviewTombstoned: Object(lt.a)(u), urls: f })
                      : null,
                  ),
                  a ? null : t,
                )
              }),
              _()(p()(o), '_renderFieldTextInput', function (e) {
                var t = o.props,
                  n = t.autoFocus,
                  r = t.data,
                  i = t.editable,
                  c = t.index,
                  s = t.isActive,
                  l = t.isExpanded,
                  u = t.isInline,
                  d = t.isInlineReply,
                  p = t.isLast,
                  m = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  v = o.state.isFocused,
                  y = r.text,
                  b = 0 === c && p,
                  _ = !!g,
                  C = g || {},
                  T = C.dismissComposerCommandName,
                  E = C.element,
                  S = C.sendTweetCommandName,
                  x = d && !g && !l,
                  O = g
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: T,
                          editorState: o.state.editorState,
                          element: E,
                          sendTweetCommandName: S,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return w.createElement(
                  On.a,
                  a()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: lr,
                      autoFocus: n || (s && !u),
                      closeButton:
                        s && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !b
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [ft.textInputStyle, x && ft.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: _ ? 30 : 10,
                      multiline: !0,
                      numberOfLines: o._calcNumberOfLines(),
                      onBlur: h,
                      onFilesAdded: o._handleFilesAdded,
                      placeholder: o._getPlaceHolderText(),
                      positionCursorAtBeginning: f,
                      positionCursorAtEnd: !f,
                      ref: o._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Tn).concat(c),
                      useCacheForDOMMeasurements: v,
                      value: y,
                    },
                    O,
                  ),
                )
              }),
              _()(
                p()(o),
                '_getHandleRichTextChange',
                Object(er.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                p()(o),
                '_getHandlePlainTextChange',
                Object(er.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(p()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? w.createElement(ln, null) : null
              }),
              _()(p()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  r = t.index,
                  a = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  c = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === r && (i || c)
                  ? w.createElement(ge, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: a && c,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(p()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? w.createElement(je, null) : null
              }),
              _()(p()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? w.createElement(Oe, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(p()(o), '_calcNumberOfLines', function () {
                var e = o.props,
                  t = e.data,
                  n = e.isActive,
                  r = e.isInline,
                  a = !!e.richTextInputContext,
                  i = t.media,
                  c = t.pollActive,
                  s = t.quotedStatus,
                  l = !!i.length || !!c || !!s
                return (a && (r || l)) || !n ? 1 : 4
              }),
              _()(p()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return w.createElement(pn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Sn,
                })
              }),
              _()(p()(o), '_handlePressScheduledTweetLegend', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  r = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), r()
              }),
              _()(p()(o), '_renderEmojiPicker', function () {
                return w.createElement(at.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              _()(
                p()(o),
                '_getEmojiPickerButtonStyles',
                Object(er.a)(function () {
                  return [ft.iconEmojiPicker, ft.toolBarButton]
                }),
              ),
              _()(p()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  r = n.media,
                  a = n.mediaTags,
                  i = n.pollActive,
                  c = n.quotedStatus,
                  s = n.text,
                  l = e.index,
                  u = e.isLast,
                  d = 0 === l && u,
                  p = t.conversationControlsValue !== Me.a.all
                return Boolean(i || !d || (c && '' === s && !r.length) || p || a.length > 0)
              }),
              _()(p()(o), '_renderSchedulingButton', function () {
                return w.createElement(se.a, {
                  accessibilityLabel: sr,
                  behavioralEventContext: jr,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: gr },
                  icon: Ar,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: ft.toolBarButton,
                  testID: wn,
                  type: 'brandText',
                })
              }),
              _()(p()(o), '_handleClickScheduler', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  r = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), r()
              }),
              _()(p()(o), '_renderCloseButton', function () {
                var e = o.props.onRemoveComposer
                return w.createElement(se.a, {
                  accessibilityLabel: pr,
                  hoverLabel: { label: hr },
                  icon: Pr,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              _()(p()(o), '_renderTweetAttachment', function () {
                var e = o.props,
                  t = e.data,
                  n = e.editable,
                  r = e.isActive,
                  a = t.media,
                  i = t.pollActive,
                  c = t.pollChoices,
                  s = t.pollDuration,
                  l = t.quotedStatus
                if (0 === a.length && !i && !l) return null
                var u = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.createElement(
                  R.a,
                  { onClick: o._handleFocus, style: [ft.attachmentContainer, ft.tweetAttachmentArea], testID: vn },
                  a.length > 0
                    ? w.createElement(Jn, {
                        editable: n,
                        isActive: r,
                        media: a,
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
                        style: ft.mediaPreview,
                      })
                    : null,
                  r ? o._renderMediaActions() : null,
                  i
                    ? w.createElement(an, {
                        editable: n,
                        initialChoices: c,
                        initialDuration: s,
                        isActive: r,
                        onChange: o._handlePollChange,
                        onInvalid: o._handlePollInvalid,
                        onRemove: o._handlePollRemove,
                        onValid: o._handlePollValid,
                        ref: o._setPollCreatorRef,
                      })
                    : null,
                  l ? o._renderQuoteTweet(l) : null,
                )
              }),
              _()(p()(o), '_renderQuoteTweet', function (e) {
                var t = o.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? w.createElement(
                      xn.a,
                      null,
                      w.createElement(dn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : w.createElement(un.a, {
                      isCondensed: t.length > 0,
                      style: ft.quoteTweet,
                      tweetId: e.id_str,
                      withLink: !1,
                      withUserHoverCard: !1,
                    })
              }),
              _()(p()(o), '_renderToolbar', function (e) {
                var t = o.props,
                  n = t.additionalToolbarContent,
                  r = t.data.media,
                  a = t.hidePoll,
                  i = t.hideScheduling,
                  c = t.isInlineReply,
                  s = t.isReply,
                  l = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  p = !!u,
                  m = !c && !a,
                  h = !c && !i,
                  f = o.context.featureSwitches.isTrue('responsive_web_precise_location_setting_enabled'),
                  g = o.context.featureSwitches.isTrue('responsive_web_video_picker')
                return w.createElement(
                  R.a,
                  { style: ft.toolBar, testID: En },
                  w.createElement(
                    R.a,
                    { style: ft.toolBarIconsContainer },
                    w.createElement(_t, {
                      media: r,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: d,
                      videoPickerEnabled: g,
                    }),
                    o._renderGifButton(),
                    m ? o._renderPollButton() : null,
                    p ? o._renderEmojiPicker() : null,
                    h ? o._renderSchedulingButton() : null,
                    f ? o._renderGeoButton() : null,
                  ),
                  w.createElement(
                    R.a,
                    { style: ft.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (s && !l) || !e
                      ? null
                      : w.createElement(
                          w.Fragment,
                          null,
                          w.createElement(R.a, { style: ft.separator }),
                          o._renderAddComposerButton(),
                        ),
                    n,
                  ),
                )
              }),
              _()(p()(o), '_addOverflowStyle', function (e) {
                var t = o.props.richTextInputContext
                if (t) {
                  var n = e.getCurrentContent().getPlainText(),
                    r = n.length,
                    a = o._getParsedTweet(n).validRangeEnd,
                    i = a + 1 < r
                  if (o.state.hasOverflowStyle || i) {
                    var c = i ? a + 1 : -1
                    return {
                      editorState: t.updateOverflowStyle && t.updateOverflowStyle(e, c, o.state.hasOverflowStyle),
                      hasOverflowStyle: i,
                    }
                  }
                  return { editorState: e, hasOverflowStyle: i }
                }
              }),
              _()(p()(o), '_handleRichTextChange', function (e) {
                var t = o.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var r = t.convertEmojiToEntities(e)
                  o.setState(o._addOverflowStyle(r))
                }
                o._handleTextValueChange(n)
              }),
              _()(p()(o), '_handlePlainTextChange', function (e) {
                var t = Rn.a.replaceCarriageReturns(e.target.value)
                o._handleTextValueChange(t)
              }),
              _()(p()(o), '_handleTextValueChange', function (e) {
                var t = o.props,
                  n = t.data,
                  r = n.key,
                  a = n.text,
                  i = t.onTextChange
                a !== e && i(e, r)
              }),
              _()(p()(o), '_handleClickAltTextShortcut', function () {
                o.props.analytics.scribe({ element: 'alt_text_button', action: 'click' })
              }),
              _()(p()(o), '_handleClickSubtitlesShortcut', function () {
                o.props.analytics.scribe({ element: 'subtitles_button', action: 'click' })
              }),
              _()(p()(o), '_handleClickMediaDetail', function (e) {
                return function (t) {
                  return function () {
                    var n = o.props,
                      r = n.analytics,
                      a = n.history
                    r.scribe({ element: 'media_detail_button', action: 'click' }),
                      (o.hasAttachedImage || o.hasAttachedVideo) &&
                        a.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              _()(p()(o), '_handleFilesAdded', function (e) {
                var t = o.props,
                  n = t.addToast,
                  r = t.data.pollActive,
                  a = t.onFilesAdded
                r ? n({ text: ur }) : a(e)
              }),
              _()(p()(o), '_handleMediaRemoveFactory', function (e) {
                return function () {
                  o.props.onRemoveMedia(o.props.index, e)
                }
              }),
              _()(p()(o), '_handleInsertEmoji', function (e) {
                var t = o.state.editorState,
                  n = o.props.richTextInputContext
                if (n && t) {
                  var r = n.insertTextAtCursor(t, e.text)
                  o._handleRichTextChange(r)
                }
              }),
              _()(p()(o), '_validateMedia', function (e) {
                var t = o.props.data.media
                return S.c(t.concat(e))
              }),
              _()(p()(o), '_handlePollAdd', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  r = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), r({ pollActive: !0 }, n)
              }),
              _()(p()(o), '_handlePollRemove', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  r = e.updateSingleComposer
                t.scribe({ element: 'remove_poll', action: 'click' }), r({ pollActive: !1 }, n)
              }),
              _()(p()(o), '_handlePollInvalid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  r = e.updateSingleComposer
                t && r({ pollValid: !1 }, n)
              }),
              _()(p()(o), '_handlePollValid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  r = e.updateSingleComposer
                !t && r({ pollValid: !0 }, n)
              }),
              _()(p()(o), '_updatePoll', function (e) {
                var t = e.choices,
                  n = e.duration,
                  r = o.props,
                  a = r.index
                ;(0, r.updateSingleComposer)({ pollChoices: t, pollDuration: n }, a)
              }),
              _()(p()(o), '_handlePollChange', Object(tr.a)(o._updatePoll, 200, { leading: !0, trailing: !1 })),
              _()(p()(o), '_handleGeoButtonClick', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  r = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), r()
              }),
              _()(p()(o), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  o.focus()
              }),
              _()(p()(o), '_handleFocus', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isActive,
                  r = e.onFocus
                ;(0, e.setActiveParentKey)(),
                  n ||
                    (window.requestAnimationFrame(function () {
                      o._mediaPreviewRef && o._mediaPreviewRef.playVideo()
                    }),
                    r(t))
              }),
              _()(p()(o), '_handleEditorFocus', function () {
                return o.setState({ isFocused: !0 })
              }),
              _()(p()(o), '_formatCountdownNumber', function (e) {
                return Ir(Math.ceil(e / o._userLanguageWeight))
              }),
              _()(p()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  r = t.quotedStatus,
                  a = e.index,
                  i = e.isReply,
                  c = e.isSelfThreadReply
                return r ? Sr : n ? Or : i && !c ? xr : c || a > 0 ? Er : Tr
              }),
              _()(p()(o), '_getNumberOfAltTextEntries', function () {
                return o.props.data.media.reduce(function (e, t) {
                  var n
                  return null !== (n = t.mediaMetadata) && void 0 !== n && n.altText ? e + 1 : e
                }, 0)
              }),
              _()(
                p()(o),
                '_getParsedTweet',
                Object(er.a)(function (e) {
                  var t = or.a[o.props.twitterTextConfigurationVersion]
                  return rr()(e, t)
                }),
              ),
              _()(p()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(ut.c)(e)
              }),
              _()(p()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(dt.h)(e)
              }),
              _()(p()(o), '_autotagLocationIfNeeded', function () {
                var e = o.props,
                  t = e.data.taggedLocation,
                  n = e.fetchAutotaggedLocationIfNeeded,
                  r = e.index,
                  a = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && a({ taggedLocation: null != e ? e : null }, r)
                })
              }),
              _()(p()(o), '_setPollCreatorRef', function (e) {
                o._pollCreatorRef = e
              }),
              _()(p()(o), '_handleSetMediaPreviewRef', function (e) {
                o._mediaPreviewRef = e
              }),
              _()(p()(o), '_setTextInputRef', function (e) {
                o._textInputRef = e
              })
            var i = e.data.text,
              c = e.richTextInputContext,
              l = e.userLanguage,
              u = (c || {}).initEditorState
            return (
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._deleteNonemptyTweetstormComposerEnabled = o.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (o._userLanguageWeight = l && Rr.indexOf(l) > -1 ? 2 : 1),
              o._autotagLocationIfNeeded(),
              (o.state = { editorState: u ? u(i) : null, hasOverflowStyle: !1, isFocused: !1 }),
              o
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  ;(this.hasExternalMedia ||
                    this.props.data.media.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof st.a) && e.mediaFile.isVideo
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
                    r = t.isActive,
                    a = t.isExpanded,
                    o = t.isInline,
                    i = t.isLast,
                    c = t.loggedInUser,
                    s = t.windowWidth,
                    l = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    p = s < k.a.theme.breakpoints.small
                  return w.createElement(
                    R.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [ft.root, !r && ft.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.createElement(
                      In.a,
                      {
                        avatarCell: w.createElement(
                          w.Fragment,
                          null,
                          l
                            ? w.createElement(Pn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.createElement(Dn.a, {
                                  accessibilityLabel: c ? c.name : void 0,
                                  screenName: c ? c.screen_name : void 0,
                                  size: t,
                                  style: ft.avatar,
                                  uri: c ? c.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : w.createElement(R.a, {
                                style: [ft.conversationLine, !l && ft.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: a ? ft.avatarContainerExpanded : ft.avatarContainer,
                        cellStyle: ft.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.createElement(
                        R.a,
                        { onFocus: this._handleEditorFocus, style: ft.inputArea },
                        w.createElement(
                          kn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: ft.dragDrop,
                          },
                          function (t) {
                            return w.createElement(
                              w.Fragment,
                              null,
                              w.createElement(R.a, { style: ft.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      w.createElement(
                        R.a,
                        { style: [(d || n) && ft.controlsContainer, p ? ft.mobileControlsLayout : ft.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      w.createElement(An.b, { show: r && a }, this._renderToolbar(u)),
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
                    r = t.pollActive,
                    a = e.history,
                    o = e.loggedInUser,
                    i = e.setActiveParentKey,
                    c = r || n.length || !o
                  return w.createElement(it.a, {
                    enabled: !c,
                    gifSearchKeySource: ct.a.Composition,
                    history: a,
                    onPress: i,
                    testID: _n,
                  })
                },
              },
              {
                key: '_renderPollButton',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = t.media,
                    r = t.pollActive,
                    a = t.quotedStatus,
                    o = e.loggedInUser,
                    i = this._isScheduled(),
                    c = !(!(r || n.length || a || i) && o)
                  return w.createElement(se.a, {
                    accessibilityLabel: cr,
                    behavioralEventContext: Mr,
                    disabled: c,
                    hoverLabel: { label: fr },
                    icon: kr,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: ft.toolBarButton,
                    testID: yn,
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
                    r = e.loggedInUser,
                    a = !(n && r),
                    o = t ? w.createElement(Vn.a, null) : w.createElement(Hn.a, null)
                  return w.createElement(se.a, {
                    accessibilityLabel: vr,
                    behavioralEventContext: Br,
                    disabled: a,
                    hoverLabel: { label: vr },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: ft.toolBarButton,
                    testID: bn,
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
                    r = 0 !== e.mediaTags.length,
                    a =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  if (!(this.hasAttachedImage || this.hasAttachedVideo || t || a)) return null
                  var o = this.context.featureSwitches.isTrue('rweb_video_tagging_enabled')
                  return w.createElement(
                    R.a,
                    { style: ft.imageActions },
                    t && t.url && t.provider
                      ? w.createElement(
                          R.a,
                          { style: ft.addImageTextPadding },
                          w.createElement(ot.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : w.createElement(
                          P.b,
                          {
                            accessibilityLabel: _r,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [ft.addImageTextContainer, ft.addImageTextPadding],
                          },
                          r ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || a
                      ? w.createElement(
                          P.b,
                          {
                            accessibilityLabel: yr({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: ft.addImageTextContainer,
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
                  return w.createElement(
                    P.b,
                    { color: 'gray700', size: 'subtext2', testID: gn },
                    w.createElement(zn.a, { style: ft.addImageActionIcon }),
                    _r,
                  )
                },
              },
              {
                key: '_renderTaggedUsers',
                value: function () {
                  var e = this.props,
                    t = e.data.mediaTags,
                    n = e.loggedInUser,
                    r = t.map(function (e) {
                      return {
                        name: e.data.name,
                        screen_name: e.data.screen_name,
                        type: e.type,
                        user_id: e.data.id_str,
                      }
                    })
                  return w.createElement(
                    P.b,
                    { color: 'gray700', size: 'subtext2', testID: Cn },
                    w.createElement(Un.a, { style: ft.addImageActionIcon }),
                    w.createElement(jn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: r }),
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
                      ? w.createElement(
                          P.b,
                          { color: 'gray700', size: 'subtext2', testID: fn },
                          w.createElement(qn.a, { style: ft.addImageActionIcon }),
                          br({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.createElement(
                          P.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: fn },
                          w.createElement(qn.a, { style: ft.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.createElement(
                        P.b,
                        { color: 'gray700', size: 'subtext2', testID: fn },
                        w.createElement(Wn.a, { style: ft.addImageActionIcon }),
                        yr({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Gn.a : Kn.a
                  return w.createElement(
                    P.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: ft.addImageTextContainer,
                      testID: hn,
                    },
                    w.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Cr : void 0,
                      style: ft.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : wr,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    r = or.a[n],
                    a = this._getParsedTweet(t).weightedLength
                  return w.createElement(Mn.a, {
                    count: a,
                    formatNumber: this._formatCountdownNumber,
                    maxCount: r.maxWeightedTweetLength,
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
                    r = e.isInline,
                    a = e.loggedInUser,
                    o = e.onAddComposer,
                    i = this._isEmpty(),
                    c = this._isScheduled(),
                    s = t || i || c || !a || n
                  return w.createElement(se.a, {
                    accessibilityLabel: dr,
                    behavioralEventContext: Lr,
                    disabled: s,
                    hoverLabel: { label: mr },
                    icon: Dr,
                    link: !r || i || s ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: mn,
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
                    r = t.pollActive,
                    a = e.loggedInUser,
                    o = n.length,
                    i = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    c = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof st.a) && e.mediaFile.isVideo
                    })
                  return 4 === o || i || c || r || this.hasExternalMedia || !a
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
                      return e.mediaFile && !(e.mediaFile instanceof st.a) && e.mediaFile.isVideo
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
                    r = t && n,
                    a = this._shouldRenderControls(!1, 'conversation')
                  return Boolean(a && r)
                },
              },
            ]),
            n
          )
        })(w.Component)
      _()(Fr, 'contextType', oe.a),
        _()(Fr, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Nr = Object(qe.a)(Fr),
        Vr = w.createElement(P.b, { weight: 'bold' }),
        Hr = w.createElement(P.b, { color: 'link' }),
        zr = function (e) {
          return '@'.concat(e)
        },
        Ur = n('SrIh'),
        Wr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        qr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            r = e.inReplyToStatus,
            a = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.cloneElement(Hr, null, M.a.b50e199a({ userName: zr(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.cloneElement(Hr, null, M.a.f2e4dd37({ replyUserName: zr(t), otherUserName: zr(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.cloneElement(
                    Hr,
                    null,
                    M.a.eccfddc3({ userOneName: zr(t), userTwoName: zr(r), userThreeName: zr(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.cloneElement(Hr, null, M.a.h758cd22({ userOneName: zr(n), userTwoName: zr(r), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.cloneElement(Hr, null, M.a.e9f8a0eb({ userName: zr(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.cloneElement(Hr, null, M.a.df7e9fbc({ replyUserName: zr(n), otherUserName: zr(r) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  r = e.userThreeName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.cloneElement(
                    Hr,
                    null,
                    M.a.b45fa505({ userOneName: zr(n), userTwoName: zr(a), userThreeName: zr(r) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  r = e.userOneName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.cloneElement(Hr, null, M.a.a4383815({ userOneName: zr(r), userTwoName: zr(a), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.cloneElement(Hr, null, M.a.ff792e35({ userName: zr(t) })),
                  w.cloneElement(Vr, null, M.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.cloneElement(Hr, null, M.a.g7d5e985({ replyUserName: zr(t), otherUserName: zr(n) })),
                  w.cloneElement(Vr, null, M.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.cloneElement(
                    Hr,
                    null,
                    M.a.fe5a61e9({ userOneName: zr(t), userTwoName: zr(r), userThreeName: zr(n) }),
                  ),
                  w.cloneElement(Vr, null, M.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.cloneElement(Hr, null, M.a.bc9dd514({ userOneName: zr(n), userTwoName: zr(r), othersCount: t })),
                  w.cloneElement(Vr, null, M.a.de5071ba),
                )
              },
            },
            i = S.a({ inReplyToStatus: r, loggedInUserId: a }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            c = r.retweeted_status || r,
            s = c.exclusivity_info,
            l = c.user,
            u = i.filter(function (e) {
              return e.id_str !== l.id_str
            }),
            d = ye()(u, 2),
            p = d[0],
            m = d[1],
            h = [l, p, m].map(Wr),
            f = ye()(h, 3),
            g = f[0],
            v = f[1],
            y = f[2],
            b = i.length - 2
          switch (i.length) {
            case 0:
              return Object(Ur.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: g })
                : s
                ? o.exclusiveReplyToOne({ userName: g })
                : o.replyToOne({ userName: g })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: v })
                : s
                ? o.exclusiveReplyToTwo({ userOneName: g, userTwoName: v })
                : o.replyToTwo({ userOneName: g, userTwoName: v })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: v, userThreeName: y })
                : s
                ? o.exclusiveReplyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
                : o.replyToThree({ userOneName: g, userTwoName: v, userThreeName: y })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: v, othersCount: b })
                : s
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: v, othersCount: b })
                : o.replyToMany({ userOneName: g, userTwoName: v, othersCount: b })
          }
        },
        Gr = w.memo(qr),
        Kr = n('fs1G'),
        Xr = n('BLtI'),
        Zr = n('kY28')
      function Yr(e) {
        null == e || e.preventDefault()
      }
      var Qr = k.a.create(function (e) {
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
        Jr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            r = e.inReplyToStatus,
            a = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            c = e.showParentTweet,
            s = void 0 === c || c
          return w.createElement(
            R.a,
            null,
            s
              ? w.createElement(Xr.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Kr.a,
                  onAvatarClick: Yr,
                  onEntityClick: Yr,
                  onMediaClick: Yr,
                  onReplyContextClick: Yr,
                  replyContext: Zr.a.ReplyContextTypes.None,
                  tweet: r,
                  withAvatarLink: !1,
                  withCardLinks: !0,
                  withInlineMedia: !1,
                  withQuotedTweetLinks: !0,
                  withSocialContext: !1,
                  withTimestampLink: !1,
                  withUserHoverCard: !1,
                })
              : null,
            w.createElement(
              R.a,
              { style: Qr.replyUsersContainer },
              w.createElement(
                In.a,
                {
                  avatarCell: s ? w.createElement(R.a, { style: Qr.conversationLine }) : null,
                  avatarCellStyle: Qr.conversationLineContainer,
                  cellStyle: Qr.repliesTextContainer,
                  style: Qr.grid,
                },
                i
                  ? w.createElement(
                      P.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: s && Qr.repliesMessage },
                      w.createElement(Gr, {
                        communityName: t,
                        excludedRecipients: n,
                        inReplyToStatus: r,
                        loggedInUserId: a,
                      }),
                    )
                  : null,
              ),
            ),
          )
        },
        $r = n('Tb0w'),
        ea = n('1YZw'),
        ta = n('pidX'),
        na = n('5oBF'),
        ra = n('JYYi'),
        aa = n('/Rsk'),
        oa = n('qlwE'),
        ia = n('XOJV'),
        ca = n('G6rE'),
        sa = n('AspN'),
        la = n('oEGd'),
        ua = n('hqKg'),
        da = n('P1r1')
      function pa(e, t) {
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
      function ma(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pa(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pa(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ha = function (e) {
          return e.parentTweetId || (e.isInline ? ra.a.homeTimeline : ra.a.modal)
        },
        fa = function (e, t) {
          var n = ha(t)
          return K.l(e, n)
        },
        ga = function (e, t) {
          var n = ha(t)
          return K.m(e, n)
        },
        va = function (e, t) {
          var n = ha(t)
          return K.k(e, n)
        },
        ya = function (e, t) {
          var n = xa(e, t),
            r = va(e, t).communityIdValue || void 0,
            a = (null == n ? void 0 : n.community_id_str) || r,
            o = a ? Y.b.select(e, a) : void 0
          return o ? o.name : void 0
        },
        ba = function (e, t) {
          var n = ha(t)
          return K.n(e, n)
        },
        _a = function (e, t) {
          var n = ha(t)
          return K.j(e, n)
        },
        wa = function (e) {
          return function (t, n) {
            var r = (function (e, t) {
              return t.location.state
            })(0, n)
            return r ? e(r) : void 0
          }
        },
        Ca = Object(ua.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          ca.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Ta = function (e, t) {
          return t.parentTweetId || Ea(e, t) || Sa(e, t)
        },
        Ea = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Sa = wa(function (e) {
          return e.inReplyToStatusId
        }),
        xa = function (e, t) {
          var n = Ta(e, t)
          return n ? ia.a.selectHydrated(e, n) : void 0
        },
        Oa = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Ra = wa(function (e) {
          return e.hasArticleNudge
        }),
        Ia = wa(function (e) {
          return e.convoCardData
        }),
        Pa = wa(function (e) {
          return e.externalMedia
        }),
        Da = wa(function (e) {
          return e.externalMediaFiles
        }),
        ka = wa(function (e) {
          return e.previewTweetId
        }),
        Aa = wa(function (e) {
          return e.defaultText
        }),
        ja = function (e, t) {
          var n = Aa(e, t),
            r = Object(ta.a)(t.location)
          return (Oa(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            r
            ? r
            : n
        },
        Ma = wa(function (e) {
          return e.quotedStatusId
        }),
        La = wa(function (e) {
          return e.quotedStatus
        }),
        Ba = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : La(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Ma(e, t)
              return n ? ia.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Fa = wa(function (e) {
          return e.isSelfThreadReply
        }),
        Na = wa(function (e) {
          return e.positionCursorAtBeginning
        }),
        Va = wa(function (e) {
          return e.promotedContent
        }),
        Ha = function () {
          return Object(ua.createSelector)(fa, ja, Ba, sa.j, function (e, t, n, r) {
            return e.map(function (e, a) {
              return ma(
                ma({}, ((o = e).mediaIds, Be()(o, ['mediaIds']))),
                {},
                {
                  media: r.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === a ? n : void 0,
                  text: 0 === a && t ? t : e.text,
                },
              )
              var o
            })
          })
        },
        za = {
          addComposer: K.a,
          addToast: ea.b,
          createLocalApiErrorHandler: Object(J.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: K.b,
          deletePreviewTweet: na.c,
          fetchAutotaggedLocationIfNeeded: aa.a,
          fetchTweetIfNeeded: ia.a.fetchOneIfNeeded,
          removeComposer: K.f,
          resetDraft: K.g,
          retweet: ia.a.retweet,
          schedule: K.i,
          draftTweet: K.e,
          send: K.r,
          updateActiveComposerIndex: K.t,
          updateAudienceControlsValue: K.u,
          updateConvoCardState: $r.b,
          preUploadMedia: sa.e,
          addMedia: sa.b,
          processMultipleMedia: sa.g,
          removeMediaUpload: sa.i,
          updateSingleComposer: K.x,
          setActiveParentKey: K.s,
          copyDataFromInlineComposerToModalComposer: K.c,
          copyDataFromInlineReplyComposerToModalComposer: K.d,
        },
        Ua = Object(la.e)(function () {
          return Object(ua.createStructuredSelector)({
            activeComposerIndex: _a,
            activeUser: Ca,
            altTextNudgeType: da.h,
            audienceControlsValue: va,
            composerData: Ha(),
            dataSaverMode: da.k,
            excludedRecipients: ga,
            externalMedia: Pa,
            externalMediaFiles: Da,
            geoEnabled: da.p,
            hasArticleNudge: Ra,
            inReplyToStatus: xa,
            inReplyToStatusId: Ta,
            isIntentRoute: Oa,
            isSelfThreadReply: Fa,
            isSending: ba,
            isSuperFollowsCreator: X.k,
            positionCursorAtBeginning: Na,
            loggedInUser: ca.e.selectLoggedInUser,
            prepopulatedText: ja,
            previewTweetId: ka,
            promotedContent: Va,
            scheduledFor: K.o,
            selectedCommunityName: ya,
            sendingProgress: K.p,
            convoCardData: Ia,
            undoTweetSettings: oa.p,
            userLanguage: X.n,
            quotedStatusId: Ma,
          })
        }, za),
        Wa = n('45mF'),
        qa = n('c0ZR'),
        Ga = n('W5XZ'),
        Ka = n('lsKC'),
        Xa = n('Drq4'),
        Za = n('I8M8'),
        Ya = n('7myi'),
        Qa = n('7nmT'),
        Ja = n.n(Qa),
        $a = n('vbWy'),
        eo = n('Rp9C'),
        to = n('Q5Mu'),
        no = n('N5qz'),
        ro = 'tweetButton',
        ao = 'tweetButtonInline',
        oo = Object(Q.a)()
          .propsFromState(function () {
            return { loggedInUser: ca.e.selectLoggedInUser }
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
        co = n('sgih'),
        so = n('xKuM'),
        lo = n('5Vk4'),
        uo = k.a.create(function (e) {
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
            r = e.onActionButtonClick,
            a = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return w.createElement(io.a, null, function (e) {
            var c = e.windowWidth > k.a.theme.breakpoints.small
            return w.createElement(
              co.a,
              { onMaskClick: a, style: uo.sheetStyle, type: o, withMask: !0 },
              i &&
                w.createElement(so.a, {
                  leftControl: w.createElement(lo.a, { backButtonType: t, onClick: r }),
                  position: 'absolute',
                }),
              w.createElement(R.a, { style: [uo.mainCard, c ? uo.largeScreenCard : uo.smallScreenCard] }, n),
            )
          })
        },
        mo = M.a.cb7c0987,
        ho = M.a.de3bcf27,
        fo = M.a.e710ce75,
        go = M.a.h11e5910,
        vo = M.a.b7ec04f3,
        yo = M.a.i62a03aa,
        bo = k.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        _o = function (e) {
          var t = e.onBack,
            n = e.onNo,
            r = e.onYes
          return w.createElement(
            po,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.createElement(P.b, { size: 'title4', style: bo.itemPadding, weight: 'heavy' }, mo),
            w.createElement(P.b, { color: 'gray700', style: bo.itemPadding }, ho),
            w.createElement(P.b, { color: 'gray700', style: bo.itemPadding }, fo),
            w.createElement(
              R.a,
              { style: bo.buttonContainer },
              w.createElement(P.b, { size: 'title4', style: bo.itemPadding, weight: 'heavy' }, go),
              w.createElement(se.a, { onPress: r, style: bo.itemPadding, type: 'brandOutlined' }, vo),
              w.createElement(se.a, { onPress: n, style: bo.itemPadding, type: 'brandOutlined' }, yo),
            ),
          )
        },
        wo = n('cm6r'),
        Co = k.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        To = function (e) {
          var t = e.icon,
            n = e.label,
            r = e.onPress
          return w.createElement(wo.a, { interactiveStyles: null, onPress: r }, function (e) {
            return w.createElement(
              w.Fragment,
              null,
              w.createElement(se.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Co.button,
                type: 'primaryOutlined',
              }),
              w.createElement(P.b, { color: 'gray700' }, n),
            )
          })
        },
        Eo = n('sjK1'),
        So = n('FDY4'),
        xo = n('tevE'),
        Oo = n('jV+4'),
        Ro = n('UgB4'),
        Io = n('TW8A'),
        Po = n('hiGS'),
        Do = n('WtWS'),
        ko = n('Lsrn'),
        Ao = n('k/Ka')
      function jo(e, t) {
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
      function Mo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jo(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : jo(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Lo = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ao.a)(
          'svg',
          Mo(
            Mo({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ko.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          w.createElement(
            'g',
            null,
            w.createElement('path', {
              d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
            }),
          ),
        )
      }
      Lo.metadata = { width: 24, height: 24 }
      var Bo = Lo,
        Fo = M.a.f3a7a80c,
        No = M.a.ge52d1de,
        Vo = M.a.h11e5910,
        Ho = M.a.abd845fd,
        zo = M.a.bea869b3,
        Uo = M.a.d96cf7cd,
        Wo = M.a.d3145da8,
        qo = k.a.create(function (e) {
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
            thanksCheckMark: { color: k.a.theme.colors.primary, marginRight: e.spaces.space8 },
            photos: {
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
              marginRight: e.spaces.space12,
              flex: '3 1 0%',
            },
            textStyle: { flex: '8 1 0%' },
          }
        }),
        Go = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            r = e.onDeleteTweet,
            a = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            c = e.onWeGotItWrong,
            s = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName
          return w.createElement(io.a, null, function (e) {
            var p,
              m,
              h,
              f = e.windowWidth
            return w.createElement(
              po,
              {
                actionButtonType: 'close',
                onActionButtonClick: a,
                onMaskClick: a,
                sheetType: 'full',
                showActionButton: f > k.a.theme.breakpoints.medium,
              },
              w.createElement(Bo, { style: [qo.profanityIcon, qo.itemPadding] }),
              w.createElement(xo.a, { size: 'title4', style: qo.itemPadding, weight: 'heavy' }, Fo),
              w.createElement(P.b, { color: 'gray700', style: qo.itemPadding }, No),
              w.createElement(
                R.a,
                { style: [qo.tweetContainer, qo.itemPadding] },
                w.createElement(
                  R.a,
                  { style: qo.tweetContent },
                  w.createElement(Oo.a, { name: l, profileImageUrl: u, screenName: d, style: qo.userName }),
                  w.createElement(
                    R.a,
                    { style: qo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          r,
                          a = ''
                        if (e.externalMediaDetails) a = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Eo.c) a = e.mediaFile.thumbnail
                        else if (null !== (t = e.mediaFile) && void 0 !== t && t.url) {
                          var o
                          a = null === (o = e.mediaFile) || void 0 === o ? void 0 : o.url
                        }
                        return {
                          accessibilityLabel: '',
                          url: a,
                          width: (null === (n = e.mediaFile) || void 0 === n ? void 0 : n.width) || 100,
                          height: (null === (r = e.mediaFile) || void 0 === r ? void 0 : r.height) || 100,
                          expandedUrl: '',
                          shouldShowAltLabel: !1,
                        }
                      })
                      return w.createElement(
                        R.a,
                        { style: qo.photos },
                        w.createElement(So.a, {
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
                    w.createElement(P.b, { style: qo.textStyle }, s),
                  ),
                ),
              ),
              t
                ? w.createElement(
                    R.a,
                    { style: qo.thanksContainer },
                    w.createElement(Do.a, { style: qo.thanksCheckMark }),
                    w.createElement(P.b, { align: 'center', style: qo.itemPadding }, Wo),
                  )
                : w.createElement(P.b, { align: 'center', onPress: c, style: qo.itemPadding, withUnderline: !0 }, Vo),
              f > k.a.theme.breakpoints.small
                ? w.createElement(
                    R.a,
                    { style: qo.buttonContainer },
                    w.createElement(se.a, { onPress: o, style: qo.itemPadding, type: 'brandFilled' }, Ho),
                    w.createElement(se.a, { onPress: i, style: qo.itemPadding, type: 'brandOutlined' }, zo),
                    w.createElement(se.a, { onPress: r, style: qo.itemPadding, type: 'destructiveText' }, Uo),
                  )
                : ((p = w.createElement(Ro.a, { style: { color: k.a.theme.colors.text } })),
                  (m = w.createElement(Io.a, { style: { color: k.a.theme.colors.primary } })),
                  (h = w.createElement(Po.a, { style: { color: k.a.theme.colors.red500 } })),
                  w.createElement(
                    R.a,
                    { style: qo.mobileButtonContainer },
                    w.createElement(To, { icon: p, label: zo, onPress: i }),
                    w.createElement(To, { icon: m, label: Ho, onPress: o }),
                    w.createElement(To, { icon: h, label: Uo, onPress: r }),
                  )),
            )
          })
        },
        Ko = oo(function (e) {
          var t = e.analytics,
            n = e.media,
            r = e.nudgeId,
            a = e.onDeleteTweet,
            o = e.onDismiss,
            i = e.onEditTweet,
            c = e.onSendTweet,
            s = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = w.useState(!1),
            m = ye()(p, 2),
            h = m[0],
            f = m[1],
            g = w.useState(!1),
            v = ye()(g, 2),
            y = v[0],
            b = v[1],
            _ = function (e) {
              var n = e.action,
                a = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: r }, element: a, page: o, section: 'dialog' })
            }
          return h
            ? w.createElement(_o, {
                onBack: function () {
                  _({ action: 'back', element: 'action', page: 'nudge_more_info' }), f(!1)
                },
                onNo: function () {
                  _({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), b(!0), f(!1)
                },
                onYes: function () {
                  _({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), b(!0), f(!1)
                },
              })
            : w.createElement(Go, {
                hasSentFeedback: y,
                media: n,
                onDeleteTweet: function () {
                  _({ action: 'cancel', element: 'action', page: 'nudge' }), a()
                },
                onDismiss: function () {
                  _({ action: 'dismiss', element: 'action', page: 'nudge' }), o()
                },
                onEditTweet: function () {
                  _({ action: 'revise', element: 'action', page: 'nudge' }), i()
                },
                onSendTweet: function () {
                  _({ action: 'send', element: 'action', page: 'nudge' }), c()
                },
                onWeGotItWrong: function () {
                  _({ action: 'more_info', element: 'action', page: 'nudge' }),
                    _({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: s,
                userName: l,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        Xo = n('eb3s'),
        Zo = n('JYMr'),
        Yo = n('sCk0'),
        Qo = n('3A2y'),
        Jo = n('zrOZ'),
        $o = n('s1N3'),
        ei = n('4FGy'),
        ti = n('mN6z'),
        ni = n('eyty'),
        ri = n('rziq'),
        ai = n('jTgF')
      function oi(e, t) {
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
      function ii(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? oi(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ci(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var si = M.a.d28215f0,
        li = M.a.ec909a54,
        ui = M.a.jd53409d,
        di = {
          singular: M.a.edae65de,
          plural: M.a.a859846a,
          oneOfMultiple: M.a.e90118f5,
          someOfMultiple: M.a.c211dcb1,
        },
        pi = { singular: M.a.d7c26bfb, plural: M.a.a75e3ccc },
        mi = M.a.dcb7e3a0,
        hi = function (e) {
          var t,
            n,
            r = e.numberOfDescriptionsMissing,
            a = r === e.numberOfImages
          return (
            1 === r
              ? ((n = pi.singular), (t = a ? di.singular : di.oneOfMultiple))
              : ((n = pi.plural), (t = a ? di.plural : di.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(mi)
          )
        },
        fi = M.a.c1bf53b0,
        gi = M.a.bb8170da,
        vi = M.a.dad5a4b8,
        yi = M.a.e65aed64,
        bi = M.a.bc2ceaf2,
        _i = M.a.d8222374,
        wi = M.a.j890123a,
        Ci = M.a.bb01231c,
        Ti = M.a.d4ab68e2,
        Ei = M.a.d8af8a4c,
        Si = M.a.d09d4c05,
        xi = M.a.i2209530,
        Oi = M.a.bf9b89e4,
        Ri = M.a.f277e949,
        Ii = M.a.b551cd22,
        Pi = M.a.f026a7fa,
        Di = M.a.a5d4fda0,
        ki = M.a.ib067d6a,
        Ai = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        ji = { element: 'alt_text_prompt' },
        Mi = { component: 'article_nudge' },
        Li = { viewType: 'send_tweet' },
        Bi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Fi = (function (e) {
          h()(n, e)
          var t = ci(n)
          function n(e, r) {
            var a, o, c
            s()(this, n),
              (c = t.call(this, e, r)),
              _()(p()(c), '_getParentKey', function () {
                var e = c.props,
                  t = e.isInline
                return e.parentTweetId || (t ? ra.a.homeTimeline : ra.a.modal)
              }),
              _()(p()(c), '_updateSingleComposer', function (e, t) {
                return (0, c.props.updateSingleComposer)({ updates: e, index: t, parentKey: c._getParentKey() })
              }),
              _()(p()(c), '_resetDraft', function () {
                ;(0, c.props.resetDraft)({ parentKey: c._getParentKey(), isPreview: c.isPreview })
              }),
              _()(p()(c), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = c.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              _()(p()(c), '_syncTexts', function () {
                var e = c.props.composerData,
                  t = c.state.textMap
                e.forEach(function (e, n) {
                  var r = t[e.key]
                  'string' == typeof r && r !== e.text && c._updateSingleComposer({ text: r }, n)
                })
              }),
              _()(p()(c), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              _()(p()(c), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              _()(p()(c), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              _()(p()(c), '_handleDeletePreviewTweet', function () {
                var e = c.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              _()(p()(c), '_handleAnimateComplete', function () {
                var e = c.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  r = Ja.a.findDOMNode(c._composerRefs[t])
                if (r instanceof window.Element) {
                  var a = r.getBoundingClientRect(),
                    o = a.bottom,
                    i = a.top,
                    s = Math.max(i, window.scrollY)
                  if (s < window.pageYOffset || o > window.innerHeight) {
                    var l = n ? s - n() - 14 : s - 14,
                      u = Math.max(l, 0)
                    window.requestAnimationFrame(function () {
                      Ai ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              _()(p()(c), '_handleFetchTweetIfNeeded', function () {
                var e = c.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  r = e.inReplyToStatus,
                  a = e.inReplyToStatusId,
                  o = e.quotedStatus,
                  i = e.quotedStatusId
                !r && a && n(a).catch(t(Ga.a)), !o && i && n(i).catch(t(Ga.a))
              }),
              _()(p()(c), '_blockHistory', function (e, t) {
                var n = c.props,
                  r = n.audienceControlsValue,
                  a = n.isInline,
                  o = !a && /unsent/.test(e.pathname),
                  i = !a && !/\/compose\/tweet\/?$/.test(e.pathname)
                return c.shouldShowDiscardConfirmation && 'POP' === t && i
                  ? (c.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : c._canSaveDraft && o && 'PUSH' === t
                  ? c.shouldShowDiscardConfirmation
                    ? (c.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: o }), !1)
                    : (c._resetDraft(), !0)
                  : c.shouldShowBackgroundSendConfirmation && 'POP' === t && i
                  ? (c._cancelAllMediaUploads(), !1)
                  : !('POP' === t && i && c._areComposersEmptyOrUnchanged && !Object(ut.a)(r)) || (c._resetDraft(), !0)
              }),
              _()(p()(c), '_getKeyCommandHandlers', function () {
                return c.state.typeaheadActive ? c._keyCommandHandlersForActiveTypeahead : c._keyCommandHandlers
              }),
              _()(p()(c), 'handleTweetOrRetweet', function () {
                if (
                  (c._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  c._areComposersValid())
                )
                  return c.shouldShowAltTextPrompt
                    ? (c.setState({ showAltTextPrompt: !0 }), void c._scribe(ii(ii({}, ji), {}, { action: 'show' })))
                    : c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleTweetOrRetweet', function () {
                return c.isRetweet ? c._handleRetweet() : c._handleTweet()
              }),
              _()(p()(c), '_renderReplyContext', function () {
                var e = c.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  a = e.isInline,
                  o = e.isSelfThreadReply,
                  i = e.selectedCommunityName
                if (r && c._shouldBeExpanded())
                  return w.createElement(Jr, {
                    communityName: i,
                    excludedRecipients: n,
                    inReplyToStatus: r,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: c._handleViewRecipients,
                    shouldDisplayRepliesText: !o,
                    showParentTweet: !a,
                  })
              }),
              _()(p()(c), '_renderAltTextPrompt', function () {
                var e = c._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.createElement(Xo.a, {
                  Icon: Xa.a,
                  cancelButtonLabel: gi,
                  confirmButtonLabel: fi({ numOfDescriptions: t }),
                  headline: ui,
                  onCancel: c._handleIgnoreAltTextPrompt,
                  onConfirm: c._handleAcceptAltTextPrompt,
                  onMaskClick: c._handleCancelAltTextPrompt,
                  text: hi({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(p()(c), '_renderToxicReplyNudge', function () {
                var e = c._getSingleComposerDataWithLatestText(c.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.createElement(Ko, {
                  media: n,
                  nudgeId: c.state.nudgeId,
                  onDeleteTweet: c._handleReplyNudgeDeleteTweet,
                  onDismiss: c._handleReplyNudgeDismiss,
                  onEditTweet: c._handleReplyNudgeEditTweet,
                  onSendTweet: c._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              _()(p()(c), '_handleReplyNudgeDeleteTweet', function () {
                c._hideToxicReplyNudge(), c._handleConfirmDiscardTweet()
              }),
              _()(p()(c), '_handleReplyNudgeDismiss', function () {
                c._hideToxicReplyNudge()
              }),
              _()(p()(c), '_handleReplyNudgeEditTweet', function () {
                c._hideToxicReplyNudge()
              }),
              _()(p()(c), '_handleReplyNudgeSendTweet', function () {
                c._hideToxicReplyNudge(), c._handleSendTweet()
              }),
              _()(p()(c), '_setRootRef', function (e) {
                e && (c._root = e)
              }),
              _()(p()(c), '_handleTweet', function () {
                var e = c.props.composerData[0].scheduledFor
                c.setState({ errorMessage: void 0 }),
                  e ? Object(dt.h)(e) && c._handleScheduleTweet() : c._checkToxicReplyAndSendTweet()
              }),
              _()(p()(c), '_handleTweetError', function (e, t) {
                return function (n) {
                  var r = c.props,
                    a = r.analytics,
                    o = r.createLocalApiErrorHandler
                  if (Object(ai.d)(n) && n.code === Za.b.CANCELED) return a.scribeAction(e), Promise.resolve()
                  var i = Object(ai.b)(n)
                  if (i) return c.setState({ errorMessage: i }), Promise.resolve()
                  o(ii({}, t || Object(Wa.a)(void 0, !1)))(n)
                  var s = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  c.setState({ errorMessage: { text: s ? s.toast.text : Di } })
                }
              }),
              _()(p()(c), '_handleScheduleTweet', function () {
                var e = c.props,
                  t = e.addToast,
                  n = e.composerData,
                  r = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  o = e.schedule,
                  i = c._getSingleComposerDataWithLatestText(n[0])
                o({ excludedRecipients: r, inReplyToStatus: a, scheduleData: i })
                  .then(function (e) {
                    c.setState({ tweetsSentOrScheduled: !0 })
                    var r = Object(dt.c)(i.scheduledFor)
                    if (r) {
                      var a = Object(dt.b)(r),
                        o = Object(dt.i)(r),
                        s = Ii({ scheduleDate: a, scheduleTime: o })
                      t({ text: s, action: { label: Ri, link: '/compose/tweet/unsent/scheduled' } }),
                        c._scribeTweetSent(n[0], ii(ii({}, e), {}, { id_str: e.scheduled_id_str }), { isScheduled: !0 })
                    }
                    c._updateConvoCardState(), c._close()
                  })
                  .catch(c._handleTweetError('schedule_tweet_cancel'))
              }),
              _()(p()(c), '_handleDraftTweet', function () {
                var e = c.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: c._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    c.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: Oi, action: { label: Ri, link: '/compose/tweet/unsent/drafts' } }),
                      c._scribeTweetSent(n[0], ii(ii({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      c._updateConvoCardState(),
                      c._close()
                  })
                  .catch(c._handleTweetError('draft_tweet_cancel', to.a))
              }),
              _()(p()(c), '_checkToxicReply', function () {
                var e = c.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  r = e.inReplyToStatus,
                  a = e.inReplyToStatusId,
                  o = e.parentTweetId,
                  i = t(
                    c._getSingleComposerDataWithLatestText(n[0]).text,
                    o || a,
                    null == r ? void 0 : r.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i,
                      s,
                      l = c.context.featureSwitches.getArrayValue('responsive_web_reply_nudge_supported_languages')
                    if (
                      !l ||
                      !l.includes(
                        null === (t = e.create_nudge) || void 0 === t || null === (n = t.nudge) || void 0 === n
                          ? void 0
                          : n.proposed_tweet_language,
                      )
                    )
                      return !1
                    var u =
                        null == e ||
                        null === (r = e.create_nudge) ||
                        void 0 === r ||
                        null === (a = r.nudge) ||
                        void 0 === a ||
                        null === (o = a.nudge_type) ||
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
                    return d && c.setState({ nudgeId: d }), !!u
                  }),
                  s = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([i, s])
              }),
              _()(p()(c), '_showToxicReplyNudge', function () {
                c._scribe({ page: 'nudge', section: 'dialog', action: 'impression' }, { nudge_id: c.state.nudgeId }),
                  c.setState({ showToxicReplyNudge: !0 })
              }),
              _()(p()(c), '_hideToxicReplyNudge', function () {
                return c.setState({ showToxicReplyNudge: !1 })
              }),
              _()(p()(c), '_checkToxicReplyAndSendTweet', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  r = c.state.nudgeId
                if (
                  !(
                    !c._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    c.isReply &&
                    !n &&
                    c.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !r
                  )
                )
                  return c._handleSendTweet()
                c._checkToxicReply().then(function (e) {
                  if (!e) return c._handleSendTweet()
                  c._showToxicReplyNudge()
                })
              }),
              _()(p()(c), '_handleSendTweet', function () {
                var e = c.props,
                  t = e.activeUser,
                  n = e.addToast,
                  r = e.analytics,
                  a = e.audienceControlsValue,
                  o = e.composeSemanticCoreId,
                  i = e.excludedRecipients,
                  s = e.hasArticleNudge,
                  l = e.history,
                  u = e.inReplyToStatus,
                  d = e.isSelfThreadReply,
                  p = e.location,
                  m = e.promotedContent,
                  h = e.selectedCommunityName,
                  f = e.send,
                  g = a.conversationControlsValue,
                  v = a.exclusivityControlValue,
                  y = void 0 === v ? void 0 : v,
                  b = c.isPreview,
                  _ = c.props.composerData.map(function (e) {
                    return c._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(dt.c)(_[0].scheduledFor)
                if (w) {
                  var C = Object(dt.b)(w),
                    T = Object(dt.i)(w),
                    E = Ii({ scheduleDate: C, scheduleTime: T })
                  return n({ text: E, action: { label: Ri, link: '' } }), void c._close()
                }
                if (
                  (i.length > 0 && r.scribe({ element: 'mentions', action: 'edited' }),
                  c._conversationControlsCreationEnabled)
                )
                  if ('community' === g) r.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === g) {
                    var x = c._getSingleComposerDataWithLatestText(_[0]).text,
                      O = Object(S.d)(x)
                    r.scribe({
                      action: O ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === g && r.scribe({ action: 'send_my_followers_tweet' })
                var R = (null == u ? void 0 : u.community_id_str) || a.communityIdValue || void 0,
                  I = R ? '8.31.'.concat(R) : '',
                  P = o ? (R ? [o, I].join(',') : o) : I
                f({
                  sendData: _,
                  communityIdValue: R,
                  conversationControlsValue: g,
                  excludedRecipients: i,
                  exclusivityControlValue: y,
                  inReplyToStatus: u,
                  isSelfThreadReply: d,
                  promotedContent: m,
                  composeSemanticCoreId: P,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || c.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return c._scribeTweetSent(_[t], e, { hasArticleNudge: s })
                      }),
                      e.length > 1 && c._scribeThreadSent(_, e, 'thread_send_success')
                    var r = e.length > 1 ? yi : vi
                    if (R && h) {
                      var a = h,
                        o = e.length
                      r = li({ numOfTweets: o, communityName: a })
                    }
                    var i = b && c.isReply
                    if (i || !b) {
                      var l = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? bi : r,
                        action: { label: Ri, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
                      })
                    }
                    c.isInlineReply && c.setState({ focused: !1 }), c._updateConvoCardState(), c._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      a = void 0 === n ? [] : n,
                      o = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      i = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      d = { message: e.type, event_info: o ? ''.concat(o) : void 0, status_code: u, url: i }
                    throw (
                      (a.map(
                        function (e, t) {
                          return c._scribeTweetSent(_[t], e)
                        },
                        { hasArticleNudge: s },
                      ),
                      (Object(ai.d)(e) && e.code === Za.b.CANCELED) ||
                        r.scribe({ action: 'send_tweet_failure', data: d }),
                      _.length > 1 && c._scribeThreadSent(_, a, 'thread_send_failure'),
                      a.length &&
                        l.replace({
                          pathname: p.pathname,
                          state: ii(
                            ii({}, Object(Qo.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: a[a.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(c._handleTweetError('send_tweet_cancel', to.a))
              }),
              _()(p()(c), '_setActiveParentKey', function () {
                ;(0, c.props.setActiveParentKey)(c._getParentKey())
              }),
              _()(p()(c), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  r = n.hasArticleNudge,
                  a = void 0 !== r && r,
                  o = n.isDraftTweet,
                  i = void 0 !== o && o,
                  s = n.isScheduled,
                  l = void 0 !== s && s,
                  u = c.state.nudgeId,
                  d = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  m = i ? p : l ? d : 'send_',
                  h = { items: [eo.a.getTweetItem(t)] },
                  f = e.pollActive && e.pollValid,
                  g = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  v = e.mediaTags.length,
                  y = Object(Jo.a)(
                    e.media
                      .map(function (e) {
                        var t,
                          n = null === (t = e.mediaMetadata) || void 0 === t ? void 0 : t.sensitiveMediaWarning
                        return n ? Array.from(n) : void 0
                      })
                      .filter(Boolean)
                      .flat(),
                  ),
                  b = c.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (c._scribe({ action: ''.concat(m, 'tweet') }, h),
                  i || !e.draftTweetId || e.scheduledTweetId || c._scribe({ action: ''.concat(m, 'draft_tweet') }, h),
                  c.isQuoteTweet &&
                    (c._scribe({ action: 'retweet_with_comment' }, h),
                    a && c._scribe(ii(ii({}, Mi), {}, { element: 'result', action: 'retweet_with_comment' }), h)),
                  c.isReply && c._scribe({ component: b, action: ''.concat(m, 'reply') }, h),
                  f && c._scribe({ action: ''.concat(m, 'poll_tweet') }, h),
                  c._hasPhoto(e) &&
                    (c._scribe({ action: ''.concat(m, 'photo_tweet') }, h),
                    g && c._scribe({ action: ''.concat(m, 'photo_tweet_with_alt_text') }, h),
                    v && c._scribe({ action: ''.concat(m, 'photo_tweet_with_tags') }, h)),
                  c._hasVideo(e) &&
                    (c._scribe({ action: ''.concat(m, 'video_tweet') }, h),
                    v && c._scribe({ action: ''.concat(m, 'video_tweet_with_tags') }, h)),
                  y.size)
                ) {
                  var _ = c._hasPhoto(e) ? 'photo' : 'video'
                  y.forEach(function (e) {
                    c._scribe({ action: ''.concat(m).concat(_, '_tweet_with_').concat(e, '_warning') }, h)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    c.isReply &&
                    !l &&
                    (i
                      ? c._scribe(ii(ii({}, w), {}, { action: 'save' }), { nudge_id: u })
                      : c._scribe(ii(ii({}, w), {}, { action: 'sent' }), { nudge_id: u })),
                  u || i || !c.isReply || l || c._scribe(ii(ii({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var C = t.id_str && eo.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  c._scribe({ element: 'remote', action: ''.concat(m, 'gif_tweet') }, { items: C ? [C] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(g || T) &&
                    c._scribe(
                      { element: 'remote', action: ''.concat(m, 'gif_tweet_with_alt_text') },
                      { event_info: g ? 'user_entered' : 'from_provider', items: C ? [C] : [] },
                    ),
                    v && c._scribe({ action: ''.concat(m, 'gif_tweet_with_tags') }, h)
                } else c._hasGif(e) && (c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet') }, h), g && c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet_with_alt_text') }, h))
              }),
              _()(p()(c), '_scribeThreadSent', function (e, t, n) {
                var r = c.props.inReplyToStatus,
                  a = { items: [eo.a.getSendThreadItem(e, t.length, !!r)] }
                c._scribe({ action: n }, a)
              }),
              _()(p()(c), '_scribeRetweet', function (e) {
                var t = c.props.hasArticleNudge,
                  n = { items: [eo.a.getTweetItem(e)] }
                c._scribe({ action: 'retweet' }, n),
                  t && c._scribe(ii(ii({}, Mi), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(p()(c), '_handleRetweet', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  r = e.retweet,
                  a = t[0].quotedStatus
                a &&
                  (c._scribeRetweet(a),
                  r(a.id_str, {}).then(function (e) {
                    c.setState({ tweetsSentOrScheduled: !0 }), c._close()
                  }, n($a.a)))
              }),
              _()(p()(c), 'handleDismissComposer', function () {
                c.shouldShowDiscardConfirmation
                  ? c.setState({ showDiscardTweetConfirmation: !0 })
                  : c.shouldShowBackgroundSendConfirmation
                  ? c._cancelAllMediaUploads()
                  : c._close()
              }),
              _()(p()(c), '_cancelAllMediaUploads', function () {
                c.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              _()(p()(c), '_handleConfirmDiscardTweet', function () {
                var e = c.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  r = c._canSaveDraft ? 'draft' : 'send'
                c.setState({ showDiscardTweetConfirmation: !1 }),
                  c._close(),
                  t.scribeAction(''.concat(r, '_tweet_discard')),
                  n && c._scribe(ii(ii({}, Mi), {}, { element: 'result', action: 'cancel' })),
                  c.state.nudgeId &&
                    c._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { nudge_id: c.state.nudgeId },
                    )
              }),
              _()(p()(c), '_handleCancelDiscardTweet', function () {
                c.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  c._restoreFocusToActiveComposer()
                })
              }),
              _()(p()(c), '_handleAcceptAltTextPrompt', function () {
                c.setState({ showAltTextPrompt: !1 })
                var e = c.props.history,
                  t = c._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (c._scribe(ii(ii({}, ji), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              _()(p()(c), '_handleIgnoreAltTextPrompt', function () {
                c._scribe(ii(ii({}, ji), {}, { action: 'declined' })),
                  c.setState({ showAltTextPrompt: !1 }),
                  c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleCancelAltTextPrompt', function () {
                c._scribe(ii(ii({}, ji), {}, { action: 'cancel' })),
                  c.setState({ showAltTextPrompt: !1 }, function () {
                    c._restoreFocusToActiveComposer()
                  })
              }),
              _()(p()(c), '_restoreFocusToActiveComposer', function () {
                var e = c.props.activeComposerIndex
                void 0 !== e && c._composerRefs[e] && c._composerRefs[e].focus()
              }),
              _()(p()(c), '_close', function () {
                var e = c.props,
                  t = e.history,
                  n = e.isSending,
                  r = e.onCloseComposer
                n || c._resetDraft(),
                  c.state.navigatingToOutbox
                    ? c._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : r && r()
              }),
              _()(p()(c), '_handleComposerFocus', function (e) {
                c._composerRefs[e]
                  ? c.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      c._restoreFocusToActiveComposer()
                    }, 0)
              }),
              _()(p()(c), '_handleFocus', function () {
                c.state.focused ||
                  (c.isInlineReply && c._scribe({ element: 'inline_reply', action: 'reply' }),
                  c.setState({ focused: !0 }))
              }),
              _()(p()(c), '_handleTypeaheadStateChange', function (e) {
                c.setState({ typeaheadActive: e })
              }),
              _()(p()(c), '_handleRemoveComposer', function () {
                var e = c.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  r = e.history,
                  a = e.location,
                  o = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  r.replace({ pathname: a.pathname, state: Object(Qo.a)(a.state || {}, 'quotedStatus') }),
                  o(),
                  setTimeout(c._restoreFocusToActiveComposer)
              }),
              _()(p()(c), '_handleViewRecipients', function () {
                var e = c.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  r = e.inReplyToStatus
                c._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: r },
                  })
              }),
              _()(p()(c), '_handleTextChange', function (e, t) {
                var n = c.state.textMap,
                  r = c.props,
                  a = r.activeComposerIndex,
                  o = r.isInline,
                  i = r.setValidity
                if (
                  (c.setState({ textMap: ii(ii({}, n), {}, _()({}, t, e)) }, function () {
                    i && i(c._areComposersValid())
                  }),
                  c.setState({ errorMessage: void 0 }),
                  gt.b.isIOS())
                ) {
                  var s = o ? 0 : a
                  c._updateSingleComposer({ text: e }, s)
                }
              }),
              _()(
                p()(c),
                '_handleTextOnBlur',
                Object(er.a)(function (e, t) {
                  return function () {
                    var n = c.state,
                      r = n.textMap,
                      a = n.tweetsSentOrScheduled,
                      o = c.props.composerData,
                      i = r[e],
                      s = o.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof i && !a && s && c._updateSingleComposer({ text: i }, t)
                  }
                }),
              ),
              _()(p()(c), '_updateAudienceControlsValue', function (e) {
                var t = c.props,
                  n = t.composerData,
                  r = t.updateAudienceControlsValue,
                  a = c.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!c._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!c._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (c._updateSingleComposer({ pollActive: !1 }, 0), c.setState({ errorMessage: { text: si } })),
                      (null == a ? void 0 : a.text) === si && c.setState({ errorMessage: void 0 })
                }
                r(e, c._getParentKey())
              }),
              _()(p()(c), '_renderProgressBar', function () {
                var e = c.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.createElement(Zo.a, { progress: t ? Math.max(n, 0.02) : 0, style: Ni.progressBar })
              }),
              _()(p()(c), '_updateConvoCardState', function () {
                var e = c.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var r = t.cardId,
                    a = t.nextState
                  a && r && n(r, { cardState: a })
                }
              }),
              _()(p()(c), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(qa.a)(e)
                    }),
                  ).then(c._handleAddMediaFiles(e))
                }
              }),
              _()(p()(c), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var r,
                    a,
                    o = c.props,
                    i = o.addMedia,
                    s = o.addToast,
                    l = o.composerData,
                    u = o.dataSaverMode,
                    d = o.preUploadMedia,
                    m = o.processMultipleMedia,
                    h = o.removeMediaUpload,
                    f = l[e],
                    g = f.pollActive,
                    v = Object(ni.e)(
                      null === (r = p()(c)) || void 0 === r || null === (a = r.context) || void 0 === a
                        ? void 0
                        : a.userClaims,
                    )
                  g ||
                    i(t, { location: ni.d.Tweet, canUploadLongVideo: v }).then(function (t) {
                      var r = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var a = f.media.map(function (e) {
                          return e.id
                        })
                        c._updateSingleComposer({ mediaIds: Object($o.a)(a.concat(r)) }, e),
                          m(t, { onFailure: c._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: ki }), h(r)
                    })
                }
              }),
              _()(p()(c), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return c._handleMediaRemove(e, t)
                }
              }),
              _()(p()(c), '_handleMediaRemove', function (e, t) {
                var n = c.props,
                  r = n.composerData,
                  a = n.removeMediaUpload,
                  o = r[e],
                  i = o.media,
                  s = o.mediaTags,
                  l = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                      n[r - 1] = arguments[r]
                    return Object(ei.a)(e, n)
                  })(
                    i.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = l.length > 0 ? s : []
                c._updateSingleComposer({ mediaIds: l, gifMetadata: void 0, mediaTags: u }, e),
                  a(t),
                  c.setState({ errorMessage: void 0 })
              }),
              _()(p()(c), '_setComposerRef', function (e) {
                return function (t) {
                  c._composerRefs[e] = t
                }
              }),
              _()(p()(c), '_shouldBeExpanded', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (c.state.focused) return !0
                var r = !Object(ut.c)(c._getSingleComposerDataWithLatestText(t[0]))
                return !n || r
              }),
              _()(p()(c), '_areComposersValid', function () {
                var e = c.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  r = n[0].quotedStatus,
                  a = null == r ? void 0 : r.community_id_str,
                  o = 'community_members' === t
                return (
                  (c.isRetweet && !a && !o) ||
                  n.every(function (e) {
                    return Object(ut.e)(c._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(p()(c), '_areComposersEmptyOrUnchanged', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(ut.d)(c._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(p()(c), '_getAltTextMetadata', function () {
                var e = c.props.composerData,
                  t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] }
                return (
                  e.forEach(function (e) {
                    var n,
                      r = (e.media || []).filter(function (e) {
                        var t = e.mediaFile
                        return (null == t ? void 0 : t.isImage) || (null == t ? void 0 : t.isGif)
                      }),
                      a = r
                        .filter(function (e) {
                          var t = e.mediaMetadata
                          return !(null != t && t.altText)
                        })
                        .map(function (e) {
                          return e.id
                        })
                    ;(t.numberOfImages += r.length), (n = t.noDescriptionImageIDs).push.apply(n, i()(a))
                  }),
                  (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                  t
                )
              }),
              _()(p()(c), '_getSingleComposerDataWithLatestText', function (e) {
                var t = c.state.textMap
                return 'string' == typeof t[e.key] ? ii(ii({}, e), {}, { text: t[e.key] }) : e
              })
            var l = !(null === (a = e.location.state) || void 0 === a || !a.focusComposer)
            return (
              (c.state = {
                focused: l,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (c._composerRefs = {}),
              (c._conversationControlsCreationEnabled =
                !0 ===
                c.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (c._throttledSyncTexts = Object(tr.a)(c._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (c._keyCommandHandlers =
                ((o = {}), _()(o, ri.b, c.handleTweetOrRetweet), _()(o, ri.a, c.handleDismissComposer), o)),
              (c._keyCommandHandlersForActiveTypeahead = _()({}, ri.b, c.handleTweetOrRetweet)),
              (c._isAltTextNudgeEnabled =
                !0 ===
                c.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (c._isCommunitiesEnabled = c.context.featureSwitches.isTrue('c9s_enabled')),
              c
            )
          }
          return (
            u()(n, [
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
                    r = e.externalMediaFiles,
                    a = e.history,
                    o = e.isInline,
                    i = e.isIntentRoute,
                    c = e.location,
                    s = e.prepopulatedText,
                    l = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    r.length > 0 && this._handleAddMediaFiles(0)(r),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    s || (t && t.cardUrl))
                  ) {
                    var u = ii({}, null)
                    s && (u.text = s), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(s || (t && t.cardUrl) || n.length > 0 || r.length > 0) &&
                    !i &&
                    a.replace({
                      query: Object(ta.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(Qo.a)(Object(ta.b)(c.state || {}), [
                        'defaultText',
                        'externalMedia',
                        'externalMediaFiles',
                      ]),
                    }),
                    l && l(this._areComposersValid()),
                    o || this._setActiveParentKey(),
                    this.isInlineReply && this._root && (this._height = this._root.getBoundingClientRect().height)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    r = n.addToast,
                    a = n.composerData,
                    o = n.copyDataFromInlineReplyComposerToModalComposer,
                    i = n.externalMedia,
                    c = n.externalMediaFiles,
                    s = n.onRef,
                    l = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== s && e.onRef(void 0),
                    s && s !== e.onRef && s(this),
                    a.length >= 25 && e.composerData.length < 25 && r({ text: Pi }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : c.length > 0 && c !== e.externalMediaFiles && this._handleAddMediaFiles(0)(c),
                    d && !Object(ti.a)(a, e.composerData) && d && d(this._areComposersValid()),
                    u !== e.replyPressToggle && o(l)
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
                    r = this.props,
                    o = r.activeUser,
                    i = r.addComposer,
                    c = r.addToast,
                    s = r.audienceControlsValue,
                    l = r.composeHeader,
                    u = r.composerData,
                    d = r.copyDataFromInlineComposerToModalComposer,
                    p = r.customizePropsForSingleComposerItem,
                    m = r.geoEnabled,
                    h = r.history,
                    f = r.inReplyToStatus,
                    g = r.isInline,
                    v = r.isModal,
                    y = r.isSelfThreadReply,
                    b = r.isSending,
                    _ = r.isSuperFollowsCreator,
                    C = r.parentTweetId,
                    T = r.positionCursorAtBeginning,
                    E = r.richTextInputContext,
                    S = r.scheduledFor,
                    x = r.typeaheadWrapper,
                    O = r.userLanguage,
                    I = r.windowWidth,
                    P = this.state,
                    D = P.errorMessage,
                    k = P.focused,
                    A = P.shouldDisableButton,
                    j = P.showAltTextPrompt,
                    M = P.showDiscardTweetConfirmation,
                    L = P.showToxicReplyNudge,
                    B = P.typeaheadActive,
                    F = !v && B,
                    N = g ? 0 : this.props.activeComposerIndex,
                    V = F || g ? [u[N]] : u,
                    H = this._areComposersValid(),
                    z = this.hasNonCompliantQuote && this.isRetweet,
                    U = g ? R.a : Yo.a,
                    W = g ? {} : { onAnimateComplete: v ? void 0 : this._handleAnimateComplete },
                    q = A || !H || z || this.isCommunityTweetFromProtectedUser,
                    G = (g && no.a.isOneColumnSquishedLayout(I)) || this.isCommunityTweet,
                    K = (g && no.a.isOneColumnSquishedLayout(I)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.createElement(
                    R.a,
                    { ref: this._setRootRef, style: !C && Ni.root },
                    g ? this._renderProgressBar() : null,
                    D &&
                      w.createElement(
                        R.a,
                        { style: Ni.inlineCallout },
                        w.createElement(Pe.a, {
                          action:
                            null !== (e = D.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = D.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: D.action.label, link: D.action.link }
                              : void 0,
                          text: D.text,
                          type: 'danger',
                        }),
                      ),
                    w.createElement(
                      R.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Ni.content, C && Ni.contentInlineReply, v && Ni.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      l,
                      w.createElement(
                        U,
                        W,
                        V.map(function (e, t) {
                          var r = Object(dt.h)(e.scheduledFor),
                            l = u.indexOf(e),
                            C = p(e, t, V),
                            P =
                              v || g
                                ? w.createElement(
                                    se.a,
                                    {
                                      behavioralEventContext: Li,
                                      disabled: q,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Ni.inlineSendButton,
                                      testID: v ? ro : ao,
                                      type: 'brandFilled',
                                    },
                                    Object(Ka.a)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!y,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!r,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            D = n._getSingleComposerDataWithLatestText(e)
                          return w.createElement(
                            R.a,
                            { key: e.key },
                            w.createElement(
                              Nr,
                              a()(
                                {
                                  addToast: c,
                                  additionalToolbarContent: P,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && k,
                                  data: D,
                                  disableAddTweet: u.length >= 25,
                                  editable: !b && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: m,
                                  hidePoll: G,
                                  hideScheduling: K,
                                  history: h,
                                  index: l,
                                  isActive: l === N && !b,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: g,
                                  isInlineReply: n.isInlineReply,
                                  isLast: g || l === u.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!y,
                                  isSuperFollowsCreator: _,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: g ? d : i,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(D.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: E,
                                  scheduledFor: S,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: B,
                                  typeaheadWrapper: x,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: O,
                                  windowWidth: I,
                                },
                                C,
                              ),
                            ),
                          )
                        }),
                      ),
                      M
                        ? this._canSaveDraft
                          ? w.createElement(Xo.a, {
                              cancelButtonLabel: Ti,
                              confirmButtonLabel: xi,
                              headline: Ei,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Si,
                            })
                          : w.createElement(Xo.a, {
                              confirmButtonLabel: Ti,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? wi : _i,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: Ci,
                            })
                        : null,
                      j ? this._renderAltTextPrompt() : null,
                      L ? this._renderToxicReplyNudge() : null,
                      w.createElement(R.a, { style: b && Ni.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(ii(ii({}, e), {}, { data: t }))
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
                    r = t[0].scheduledTweetId,
                    a = this.state.showDiscardTweetConfirmation,
                    o = this._areComposersEmptyOrUnchanged()
                  return !(n || o || a || r)
                },
              },
              {
                key: 'shouldShowBackgroundSendConfirmation',
                get: function () {
                  var e = this.props,
                    t = e.composerData,
                    n = e.isSending,
                    r = t.some(function (e) {
                      return e.media.some(function (e) {
                        return e.uploading
                      })
                    })
                  return n && r
                },
              },
              {
                key: 'shouldShowAltTextPrompt',
                get: function () {
                  var e = this.props.altTextNudgeType
                  return (
                    !(
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== C.a.prompt
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
                    ? Bi.Quote
                    : this.isThread
                    ? Bi.Thread
                    : this.isReply
                    ? Bi.Reply
                    : Bi.Original
                },
              },
              {
                key: 'isPreview',
                get: function () {
                  var e,
                    t,
                    n = this.props.undoTweetSettings
                  return (
                    (null == this ||
                    null === (e = this.context) ||
                    void 0 === e ||
                    null === (t = e.userClaims) ||
                    void 0 === t
                      ? void 0
                      : t.isTrueAndEnabled('subscriptions_feature_1003')) &&
                    ('original' === this.tweetType || 'reply' === this.tweetType) &&
                    (!n || void 0 === n[this.tweetType] || n[this.tweetType])
                  )
                },
              },
            ]),
            n
          )
        })(w.Component)
      _()(Fi, 'defaultProps', {
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
        typeaheadWrapper: Ya.a,
      }),
        _()(Fi, 'contextType', oe.a),
        _()(Fi, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Ni = k.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: ii({}, k.a.absoluteFillObject),
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
      t.a = Object(qe.a)(Ua(Fi))
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('N+ot'),
        g = n.n(f),
        v = n('AuHH'),
        y = n.n(v),
        b = n('KEM+'),
        _ = n.n(b),
        w = (n('2G9S'), n('ERkP')),
        C = n('k49u'),
        T = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        E = n('kGix'),
        S = n('G6rE'),
        x = n('rxPX'),
        O = n('0KEI'),
        R = function (e, t) {
          return t.userIds
        },
        I = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!S.e.select(e, t)
          })
        },
        P = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var r = S.e.selectFetchStatus(e, n)
            return (t[n] = r === E.a.NONE ? E.a.LOADING : r), t
          }, {})
        },
        D = Object(x.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(T.a)(I, function (e) {
                return e
              }),
              fetchStatus: Object(T.a)(I, P, R, function (e, t, n) {
                for (var r = E.a.LOADED, a = 0; a < n.length; a++) {
                  var o = n[a]
                  if (-1 === e.indexOf(o)) {
                    var i = t[o] || E.a.LOADING
                    r = r === E.a.LOADED ? i : r
                  }
                  if (r === E.a.LOADED) break
                }
                return r
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: S.e.fetchManyIfNeeded,
            }
          }),
        k = n('v//M'),
        A = n('3XMw'),
        j = n.n(A),
        M = n('pQ3Z'),
        L = n.n(M),
        B = (n('z84I'), n('cFuS')),
        F = n('Re5t'),
        N = n('MWbm'),
        V = n('88ay'),
        H = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            r = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return w.createElement(
            N.a,
            null,
            r.map(function (e, r) {
              return n
                ? n(e)
                : w.createElement(V.b, {
                    decoration: V.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: B.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      H.defaultProps = { displayMode: F.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var z = H
      function U(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return g()(this, n)
        }
      }
      var W = j.a.f5b426c2,
        q = { viewType: 'user_list' },
        G = D(
          (function (e) {
            h()(n, e)
            var t = U(n)
            function n() {
              var e
              s()(this, n)
              for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                _()(p()(e), 'state', { allUsersUnavailable: !1 }),
                _()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    r =
                      (t.createLocalApiErrorHandler,
                      t.fetchStatus,
                      t.fetchUsersIfNeeded,
                      t.userIds,
                      i()(t, [
                        'availableUserIds',
                        'createLocalApiErrorHandler',
                        'fetchStatus',
                        'fetchUsersIfNeeded',
                        'userIds',
                      ]))
                  return w.createElement(z, a()({}, r, { userIds: n }))
                }),
                _()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    L()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return w.createElement(k.a, {
                      accessibilityLabel: W,
                      behavioralEventContext: q,
                      fetchStatus: this.state.allUsersUnavailable ? E.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      r = n.availableUserIds,
                      a = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      a(
                        ((e = {}),
                        _()(e, C.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, C.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === r.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(w.Component),
        )
      t.a = G
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r = n('3XMw'),
        a = n.n(r),
        o = a.a.g34f2c63,
        i = a.a.f70a36d0,
        c = a.a.d17df547,
        s = a.a.h735a98d,
        l = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? s : t ? c : e.isThread ? i : o({ verb: '' })
        }
    },
    nV1z: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [i.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.createElement(
            'g',
            null,
            o.createElement('path', {
              d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('VPAj'),
        a = Object(r.a)([])
      Object(r.a)({})
    },
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return Ze
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('MvUL'), n('KqXw'), n('uFXj'), n('ERkP')),
        y = n('HPNB'),
        b = n('h5NW'),
        _ = n('m3Bd'),
        w = n.n(_),
        C = (n('vrRf'), n('z84I'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        E = n('AspN'),
        S = n('XOJV'),
        x = n('G6rE'),
        O = n('xZGM'),
        R = n('0KEI'),
        I = n('hqKg'),
        P = n('oEGd'),
        D = n('rU/Q'),
        k = n('XpKj')
      function A(e, t) {
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
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = function (e) {
          return function (t, n) {
            var r = (function (e, t) {
              return t.location.state
            })(0, n)
            return r ? e(r) : void 0
          }
        },
        L = Object(I.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          x.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        B = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        F = M(function (e) {
          return e.inReplyToStatusId
        }),
        N = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        V = M(function (e) {
          return e.defaultText
        }),
        H = M(function (e) {
          return e.quotedStatus
        }),
        z = M(function (e) {
          return e.isSelfThreadReply
        }),
        U = M(function (e) {
          return e.hideUnsentTweetsButton
        }),
        W = M(function (e) {
          return e.headingSubtitle
        }),
        q = M(function (e) {
          return e.headingTitle
        }),
        G = M(function (e) {
          return e.selectedCommunityId
        }),
        K = Object(I.createSelector)(
          function (e) {
            return C.l(e, '')
          },
          function (e, t) {
            var n = V(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : H(e, t)
          },
          E.j,
          N,
          function (e, t, n, r, a) {
            return e.map(function (e, o) {
              return j(
                j({}, ((i = e).cardUrl, i.mediaIds, w()(i, ['cardUrl', 'mediaIds']))),
                {},
                {
                  media: r.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === o ? n : void 0,
                  text: 0 === o && t && !a ? t : e.text,
                },
              )
              var i
            })
          },
        ),
        X = Object(I.createStructuredSelector)({
          activeUser: L,
          composerData: K,
          draftTweets: D.e,
          inReplyToStatus: function (e, t) {
            var n = B(0, t) || F(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: B,
          isIntentRoute: N,
          isSelfThreadReply: z,
          isSending: function (e) {
            return C.n(e, '')
          },
          scheduledTweets: k.f,
          sendingProgress: C.p,
          composeSemanticCoreId: M(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: U,
          subtitle: W,
          title: q,
          selectedCommunityIdFromLocationState: G,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(O.y)(e, O.e)
          },
        }),
        Z = {
          createDraftTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(D.d),
          createScheduledTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(k.d),
          fetchScheduledTweets: k.c,
          fetchDraftTweets: D.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(O.v)(O.e)
          },
          updateAudienceControlsValue: C.u,
        },
        Y = Object(P.g)(X, Z),
        Q = n('RgK2'),
        J = n.n(Q),
        $ = n('jHSc'),
        ee = n('lsKC'),
        te = n('3XMw'),
        ne = n.n(te),
        re = n('iFPY'),
        ae = n('QbaN'),
        oe = n('v6aA'),
        ie = n('rxPX'),
        ce = function (e) {
          return Object(O.y)(e, O.p)
        },
        se = Object(ie.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: ce }
          })
          .propsFromActions(function () {
            return { addFlag: O.v }
          }),
        le = n('Lsrn'),
        ue = n('k/Ka')
      function de(e, t) {
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
      function pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? de(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : de(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var me = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ue.a)(
          'svg',
          pe(
            pe({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [le.a.root, e.style], viewBox: '0 0 32 32' },
          ),
          v.createElement(
            'g',
            null,
            v.createElement('path', {
              d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            v.createElement('path', {
              d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
            }),
          ),
        )
      }
      me.metadata = { width: 32, height: 32 }
      var he = me,
        fe = n('MWbm'),
        ge = n('4zmP'),
        ve = n('rHpw'),
        ye = ne.a.ed33a3b6,
        be = ne.a.d5bda8b3,
        _e = ne.a.i859a9d3,
        we = ve.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        Ce = se(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            r = v.useContext(oe.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && r
            ? v.createElement(
                fe.a,
                { style: we.revueCallout },
                v.createElement(ge.a, {
                  Icon: he,
                  action: {
                    label: _e,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ye,
                  onClose: function () {
                    t(O.p)
                  },
                  text: be,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        Te = n('7nmT'),
        Ee = n.n(Te),
        Se = n('Dtul'),
        xe = n('zh9S'),
        Oe = n('7JQg'),
        Re = 'tweetButton',
        Ie = n('/yvb'),
        Pe = n('JYMr'),
        De = n('cHvH'),
        ke = n('feu+'),
        Ae = n('7N4s'),
        je = n('oQhu'),
        Me = n('3A2y')
      function Le(e, t) {
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
      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Le(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Le(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Fe(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ne = ne.a.b8f0483e,
        Ve = ne.a.a133d13e,
        He = ne.a.a1183237,
        ze = ne.a.da2663f5,
        Ue = ne.a.j24c37b2,
        We = 'compose',
        qe = { page: We },
        Ge = { page: We, section: 'reply' },
        Ke = { context: 'compose_intent_logged_in' },
        Xe = { viewType: 'send_tweet' },
        Ze = (function (e) {
          u()(n, e)
          var t = Fe(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(s()(e), 'state', { isValid: !1 }),
              g()(s()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              g()(
                s()(e),
                '_handleAppBarHeight',
                Object(je.a)(function () {
                  var t = Ee.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              g()(s()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              g()(s()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              g()(s()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              g()(s()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              g()(s()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ge : qe
              }),
              g()(s()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? Ke : J.a
              }),
              g()(s()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  r = e.props,
                  a = r.activeUser,
                  o = r.inReplyToStatus,
                  i = r.isSelfThreadReply,
                  c = r.isSending,
                  s = !t || c || !a
                return n
                  ? void 0
                  : v.createElement(
                      Ie.a,
                      {
                        behavioralEventContext: Xe,
                        disabled: s,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: Re,
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
              g()(s()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  r = e.props,
                  a = r.isSending,
                  o = r.sendingProgress
                return v.createElement(
                  v.Fragment,
                  null,
                  v.createElement(Pe.a, {
                    progress: a ? Math.max(o, 0.02) : 0,
                    style: [Ye.progressBar, n && Ye.progressBarModal],
                  }),
                  t,
                )
              }),
              g()(s()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  r = t.hideUnsentTweetsButton,
                  a = t.scheduledTweets
                if (!r && (a.length > 0 || n.length > 0))
                  return v.createElement(
                    fe.a,
                    { style: Ye.unsentHeadingContainer },
                    v.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Ve),
                  )
              }),
              g()(s()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(xe.c)(Be(Be({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              g()(s()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              g()(s()(e), '_handleComposeContainerRef', function (t) {
                e._composeContainerRef = t
              }),
              e
            )
          }
          return (
            i()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.activeUser,
                    n = e.createDraftTweetApiErrorHandler,
                    r = e.createScheduledTweetApiErrorHandler,
                    a = e.fetchDraftTweets,
                    o = e.fetchScheduledTweets,
                    i = e.history,
                    c = e.inReplyToStatus,
                    s = e.location,
                    l = e.selectedCommunityIdFromLocationState,
                    u = e.updateAudienceControlsValue
                  ;(this._unlockReload = Se.a.acquire()),
                    i.setModalRouteBreakpoint(i.location),
                    t && (o().catch(r()), a().catch(n())),
                    l &&
                      (u({
                        _type: 'community_members',
                        communityIdValue: l,
                        conversationControlsValue: 'community_members',
                      }),
                      i.replace({ pathname: s.pathname, state: Object(Me.a)(s.state || {}, 'selectedCommunityId') })),
                    null != c && c.exclusivity_info
                      ? u({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != c &&
                        c.community_id_str &&
                        u({
                          _type: 'community_members',
                          communityIdValue: c.community_id_str,
                          conversationControlsValue: 'community_members',
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
                    r = t.composeHeader,
                    a = t.composeSemanticCoreId,
                    o = t.composerData,
                    i = t.customizePropsForSingleComposerItem,
                    c = t.history,
                    s = t.isIntentRoute,
                    l = t.location,
                    u = t.quotedStatus,
                    d = t.richTextInputContext,
                    p = t.subtitle,
                    m = t.title,
                    h = t.typeaheadWrapper,
                    f = s && !n,
                    g = this.context.isModal
                  return v.createElement(
                    Oe.b,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    v.createElement(De.a, null, function (t) {
                      var s = t.windowWidth,
                        _ = y.a.shouldRenderAsModal(s),
                        w = (f || e.showCommunityAudienceEducation) && _,
                        C = (null == o ? void 0 : o.length) > 1
                      return v.createElement(
                        v.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? v.createElement(ke.a, {
                              actionLabel: Ue,
                              graphicDisplayMode: 'none',
                              headline: He,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: ze,
                              withCloseButton: !1,
                            })
                          : null,
                        f && v.createElement(re.a, { history: c, location: l }),
                        !w &&
                          v.createElement(
                            v.Fragment,
                            null,
                            v.createElement(
                              $.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: We,
                                documentTitle: Ne,
                                hideBackButton: !1,
                                history: c,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              v.createElement(b.a, {
                                activeUser: n,
                                composeHeader: r,
                                composeSemanticCoreId: a,
                                customizePropsForSingleComposerItem: i,
                                history: c,
                                isModal: g,
                                location: l,
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
                            C ? v.createElement(Ce, null) : null,
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
                    r = e.shouldShowCommunityAudienceEducation,
                    a = !!((null != t && t.community_id_str) || n)
                  return r && a
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
                  return Object(ae.h)(e[0].scheduledFor)
                },
              },
            ]),
            n
          )
        })(v.Component)
      g()(Ze, 'contextType', Ae.a)
      var Ye = ve.a.create(function (e) {
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
      t.default = Y(Ze)
    },
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      })
      var r = n('ddV6'),
        a = n.n(r),
        o = (n('z84I'), n('7x/C'), n('DZ+c'), n('7xRU'), n('Ysgh'), n('KqXw'), n('LW0h'), n('2G9S'), n('3XMw')),
        i = n.n(o),
        c = n('3A2y'),
        s = i.a.b2e94283,
        l = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          r = l.map(function (e) {
            return t[e] || n[e]
          }),
          o = a()(r, 6),
          i = o[0],
          c = o[1],
          u = o[2],
          d = o[3],
          p = o[4],
          m = o[5],
          h = [
            i,
            c && '@'.concat(c.toString()),
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
        return Object(c.a)(e, l)
      }
    },
    rziq: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return a
        })
      var r = 'send-tweet',
        a = 'dismiss-composer'
    },
    sCk0: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('z84I'), n('DfhM'), n('ERkP')),
        y = n('zfvc'),
        b = n('RhWx'),
        _ = n.n(b),
        w = (n('yH/f'), n('M+/F'), n('zrc3')),
        C = Object.freeze({ in: 'in', out: 'out', static: 'static' })
      function T(e) {
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
            var a = h()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var E = (function (e) {
        u()(n, e)
        var t = T(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(s()(e), 'state', {
              isAnimating: !1,
              renderChildren: v.Children.toArray(e.props.children).map(function (e) {
                return { status: C.static, child: e }
              }),
            }),
            g()(s()(e), '_handleEachAnimateComplete', function () {
              var t = e.state.isAnimating,
                n = e.props,
                r = n.children,
                a = n.onAnimateComplete
              t &&
                (a && a(),
                e.setState({
                  renderChildren: v.Children.toArray(r).map(function (e) {
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
                      r = t.status
                    return v.createElement(
                      y.a,
                      {
                        animateMount: r !== C.static,
                        key: n.key,
                        onAnimateComplete: e._handleEachAnimateComplete,
                        show: r !== C.out,
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
                        r = 0,
                        a = [],
                        o = function () {
                          if (n >= t.length)
                            return (
                              a.push.apply(
                                a,
                                _()(
                                  e.slice(r).map(function (e) {
                                    return { child: e, status: C.out }
                                  }),
                                ),
                              ),
                              'break'
                            )
                          var o = t[n],
                            i = e[r]
                          if (o.key === i.key) a.push({ child: o, status: C.static }), (n += 1)
                          else {
                            var c = Object(w.a)(t, function (e) {
                              return e.key === i.key
                            })
                            c >= 0
                              ? (a.push.apply(
                                  a,
                                  _()(
                                    t.slice(n, c).map(function (e) {
                                      return { child: e, status: C.in }
                                    }),
                                  ).concat([{ child: t[c], status: C.static }]),
                                ),
                                (n = c + 1))
                              : a.push({ child: i, status: C.out })
                          }
                          r += 1
                        };
                      r < e.length && 'break' !== o();

                    );
                    return (
                      n < t.length &&
                        a.push.apply(
                          a,
                          _()(
                            t.slice(n).map(function (e) {
                              return { child: e, status: C.in }
                            }),
                          ),
                        ),
                      a
                    )
                  })(
                    t.renderChildren.map(function (e) {
                      return e.child
                    }),
                    v.Children.toArray(e.children),
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
      })(v.Component)
      t.a = E
    },
    ulNE: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('42ly'),
        o = n('N9G2'),
        i = n('tJVe'),
        c = n('i7Kn'),
        s = n('aoZ+')
      r(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t.length),
              r = s(t, 0)
            return (r.length = a(r, t, t, n, 0, void 0 === e ? 1 : c(e))), r
          },
        },
      )
    },
    vOV5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PlacePickerScreen', function () {
          return ue
        })
      n('OZaJ')
      var r = n('RhWx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        h = n.n(m),
        f = n('AuHH'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('2G9S'), n('LW0h'), n('jQ3i'), n('x4t0'), n('z84I'), n('LJOr'), n('KqXw'), n('ERkP')),
        _ = n('a/ea'),
        w = n('/Rsk'),
        C = n('P1r1'),
        T = n('xVN5'),
        E = n('RqPI'),
        S = n('rxPX'),
        x = n('0KEI'),
        O = Object(S.a)()
          .propsFromState(function () {
            return {
              autotaggedLocation: w.d,
              initialResults: w.f,
              initialFetchStatus: w.e,
              lastSearchResults: w.h,
              lastSearchFetchStatus: w.g,
              position: _.d,
              taggedLocation: T.q,
              userCountry: E.v,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('PLACE_PICKER'),
              loadGeoLocation: _.a,
              fetchInitialPlacesIfNeeded: w.b,
              searchPlaces: w.c,
              updateSettings: C.L,
              updateSingleComposer: T.x,
            }
          })
          .withAnalytics({ page: 'compose', section: 'place_picker' }),
        R = n('kGix'),
        I = n('v//M'),
        P = n('jHSc'),
        D = n('M6MT'),
        k = n('3XMw'),
        A = n.n(k),
        j = n('MWbm'),
        M = n('pjBI'),
        L = n('t62R'),
        B = n('CKsB'),
        F = n('/yvb'),
        N = n('6OUF'),
        V = n('cmUU'),
        H = n('rHpw'),
        z =
          (n('hBpG'),
          (function () {
            function e(t, n, r) {
              i()(this, e), (this.formatter = t), (this.fallbackFormatter = n), (this.fallbackRatio = r)
            }
            return (
              s()(e, [
                {
                  key: 'format',
                  value: function (e) {
                    var t = Math.round(10 * e) / 10
                    return t > 0
                      ? this.formatter({ distance: t })
                      : this.fallbackFormatter({ distance: Math.round(e * this.fallbackRatio) })
                  },
                },
              ]),
              e
            )
          })()),
        U = new z(A.a.b01ed2da, A.a.i83e29e0, 5280),
        W = new z(A.a.d4b7cff7, A.a.b211849e, 1e3),
        q = 1.609344,
        G = ['lr', 'mm', 'uk', 'us'],
        K = n('JFx8'),
        X = n('VwDm'),
        Z = n('EfHu'),
        Y = n('474o')
      function Q(e) {
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
            r = g()(e)
          if (t) {
            var a = g()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var J = A.a.b772cd65,
        $ = A.a.e7c766ee,
        ee = A.a.ab68727a,
        te = A.a.ae4057a2,
        ne = A.a.bf2923a5,
        re = A.a.d963d1b6,
        ae = A.a.a893d601,
        oe = A.a.e68b09b4,
        ie = A.a.be6cc44d,
        ce = A.a.d8ef3232,
        se = A.a.cce30dcc,
        le = A.a.fa9adac1,
        ue = (function (e) {
          p()(n, e)
          var t = Q(n)
          function n(e) {
            var r
            i()(this, n),
              (r = t.call(this, e)),
              y()(u()(r), 'state', {
                activeResultSet: Y.c.initial,
                geoLocationError: void 0,
                query: '',
                selectedLocation: void 0,
                showSearchForButton: !1,
              }),
              y()(u()(r), '_appBarRef', b.createRef()),
              y()(u()(r), '_fetchInitialPlaces', function () {
                var e = r.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInitialPlacesIfNeeded,
                  a = e.taggedLocation
                n()
                  .then(function () {
                    var e = r.props.autotaggedLocation
                    a || r.setState({ selectedLocation: e })
                  })
                  .catch(t())
              }),
              y()(u()(r), '_getActiveResults', function () {
                var e = r.props,
                  t = e.initialResults,
                  n = e.lastSearchResults
                return r.state.activeResultSet === Y.c.initial ? t : n
              }),
              y()(u()(r), '_selectResults', function () {
                var e,
                  t = r.state,
                  n = t.query,
                  o = t.selectedLocation,
                  i = (null === (e = r._getActiveResults()) || void 0 === e ? void 0 : e.places) || []
                return (
                  o &&
                    (i = [o].concat(
                      a()(
                        i.filter(function (e) {
                          return e.place.id !== o.place.id
                        }),
                      ),
                    )),
                  i.filter(function (e) {
                    return e.place.full_name.toLowerCase().includes(n.toLowerCase())
                  })
                )
              }),
              y()(u()(r), '_goBack', function () {
                var e
                null === (e = r._appBarRef.current) || void 0 === e || e.goBack()
              }),
              y()(u()(r), '_setTaggedLocation', function (e) {
                var t = r.props,
                  n = t.updateSettings
                ;(0, t.updateSingleComposer)({ updates: { taggedLocation: e } }), n({ shouldAutoTagLocation: !!e })
              }),
              y()(u()(r), '_handleBack', function () {
                return r._goBack()
              }),
              y()(u()(r), '_handleDone', function () {
                var e = r.state.selectedLocation
                e && r._setTaggedLocation(e), r._goBack()
              }),
              y()(u()(r), '_handleRemove', function () {
                r._setTaggedLocation(null), r._goBack()
              }),
              y()(u()(r), '_handleRetry', function () {
                var e = r.props.searchPlaces,
                  t = r.state,
                  n = t.activeResultSet,
                  a = t.query
                n === Y.c.initial ? r._fetchInitialPlaces() : e(a)
              }),
              y()(u()(r), '_handleLocationDisabledPromptDismiss', function () {
                r.props.history.goBack()
              }),
              y()(u()(r), '_handleChange', function (e) {
                var t = e.currentTarget.value,
                  n = t.length ? r.state.activeResultSet : Y.c.initial
                r.setState({ activeResultSet: n, query: t, showSearchForButton: !!t.length })
              }),
              y()(u()(r), '_handleClear', function () {
                r.setState({ activeResultSet: Y.c.initial, query: '' })
              }),
              y()(u()(r), '_handleSubmit', function () {
                var e = r.state.query,
                  t = r.props.searchPlaces
                e.length && (r.setState({ activeResultSet: Y.c.lastSearch, showSearchForButton: !1 }), t(e))
              }),
              y()(u()(r), '_handlePlaceClick', function (e) {
                return function () {
                  r._setTaggedLocation(e), r._goBack()
                }
              }),
              y()(u()(r), '_renderPlaceSubtext', function (e) {
                var t,
                  n,
                  a,
                  o,
                  i,
                  c,
                  s = r.props,
                  l = s.position,
                  u = s.userCountry,
                  d = e.place,
                  p = d.attributes.street_address,
                  m = d.centroid
                if (p && m && 2 === m.length && l) {
                  var h =
                    ((t = { lat: l.coords.latitude, long: l.coords.longitude }),
                    (n = { lat: m[1], long: m[0] }),
                    (a = t.lat * (Math.PI / 180)),
                    (o = n.lat * (Math.PI / 180)),
                    (i = o - a),
                    (c = (n.long - t.long) * (Math.PI / 180)),
                    7917.6 *
                      Math.asin(
                        Math.sqrt(
                          Math.sin(i / 2) * Math.sin(i / 2) +
                            Math.cos(a) * Math.cos(o) * Math.sin(c / 2) * Math.sin(c / 2),
                        ),
                      ))
                  return b.createElement(
                    M.a,
                    null,
                    b.createElement(L.b, null, p),
                    b.createElement(
                      L.b,
                      null,
                      (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'us'
                        if (
                          G.find(function (e) {
                            return e === t.toLowerCase()
                          })
                        )
                          return U.format(e)
                        var n = e * q
                        return W.format(n)
                      })(h, u),
                    ),
                  )
                }
              }),
              y()(u()(r), '_renderPlace', function (e) {
                var t = r.state.selectedLocation
                return b.createElement(B.a, {
                  actionSubText: r._renderPlaceSubtext(e),
                  actionText: e.place.full_name,
                  isSelected: e.place.id === (null == t ? void 0 : t.place.id),
                  key: e.place.id,
                  onClick: r._handlePlaceClick(e),
                  selectable: !0,
                })
              }),
              y()(u()(r), '_renderPlaces', function (e) {
                return e.length
                  ? e.map(function (e) {
                      return r._renderPlace(e)
                    })
                  : b.createElement(L.b, { align: 'center', style: de.noPlacesText }, re)
              }),
              y()(u()(r), '_renderAttributionIfNeeded', function () {
                var e = r._getActiveResults()
                return null != e && e.attributions.has(Y.b.foursquare)
                  ? b.createElement(K.a, { style: de.foursquareIcon })
                  : null
              }),
              y()(u()(r), '_renderResults', function () {
                var e = r.state,
                  t = e.query,
                  n = e.showSearchForButton,
                  a = r._selectResults()
                return b.createElement(
                  j.a,
                  null,
                  r._renderPlaces(a),
                  n
                    ? b.createElement(B.a, {
                        actionText: le({ query: t }),
                        onClick: r._handleSubmit,
                        textColor: 'primary',
                      })
                    : null,
                  r._renderAttributionIfNeeded(),
                )
              }),
              y()(u()(r), '_renderRightControl', function () {
                return b.createElement(
                  j.a,
                  { style: de.actionButtonContainer },
                  b.createElement(
                    F.a,
                    { onPress: r._handleRemove, size: 'small', style: de.actionButton, type: 'primaryText' },
                    oe,
                  ),
                  b.createElement(
                    F.a,
                    { onPress: r._handleDone, size: 'small', style: de.actionButton, type: 'primaryFilled' },
                    J,
                  ),
                )
              }),
              y()(u()(r), '_renderGeoPicker', function () {
                var e = r.props,
                  t = e.history,
                  n = e.initialFetchStatus,
                  a = e.lastSearchFetchStatus,
                  o = r.state.activeResultSet === Y.c.initial ? n : a
                return b.createElement(
                  P.b,
                  {
                    appBarRef: r._appBarRef,
                    history: t,
                    onBackClick: r._handleBack,
                    rightControl: r._renderRightControl(),
                    title: se,
                    withBottomBorder: !1,
                  },
                  b.createElement(N.a, {
                    Icon: X.a,
                    onChange: r._handleChange,
                    onClear: r._handleClear,
                    onSubmitEditing: r._handleSubmit,
                    placeholder: ie,
                    style: de.search,
                    withClearButton: !0,
                  }),
                  b.createElement(I.a, {
                    fetchStatus: o === R.a.NONE ? R.a.LOADING : o,
                    onRequestRetry: r._handleRetry,
                    render: r._renderResults,
                    retryMessage: ce,
                  }),
                )
              }),
              y()(u()(r), '_renderLocationDisabledPrompt', function () {
                var e = r.state.geoLocationError,
                  t = te,
                  n = ne
                return (
                  e && e.code === D.a.PERMISSION_DENIED && ((t = $), (n = ee)),
                  b.createElement(V.a, {
                    actionLabel: ae,
                    graphic: Z.a,
                    headline: t,
                    onAction: r._handleLocationDisabledPromptDismiss,
                    onClose: r._handleLocationDisabledPromptDismiss,
                    subtext: n,
                  })
                )
              })
            var o = e.autotaggedLocation,
              c = e.initialResults,
              s = e.taggedLocation
            return s ? (r.state.selectedLocation = s) : c && (r.state.selectedLocation = o), r
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  return (0, this.props.loadGeoLocation)().then(this._fetchInitialPlaces, function (t) {
                    return e.setState({ geoLocationError: t })
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.geoLocationError ? this._renderLocationDisabledPrompt() : this._renderGeoPicker()
                },
              },
            ]),
            n
          )
        })(b.Component),
        de = H.a.create(function (e) {
          return {
            search: { marginHorizontal: e.spaces.space16, flexGrow: 0 },
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            noPlacesText: { marginVertical: e.spaces.space16 },
            foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 },
          }
        }),
        pe = O(ue)
      t.default = pe
    },
    yTN1: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('WOwf'),
        o = n('3XMw'),
        i = n.n(o),
        c = n('k6Ei'),
        s = n('rHpw'),
        l = n('+/1j'),
        u = n('MWbm'),
        d = i.a.c2fc878c,
        p = i.a.db11b27f,
        m = function (e) {
          return e
        },
        h = s.a.create(function (e) {
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
          o = e.formatNumber,
          i = void 0 === o ? m : o,
          f = e.warningCount,
          g = n - t,
          v = g >= 0 ? p({ count: i(g) }) : d({ count: i(t - n) }),
          y =
            t >= f
              ? r.createElement(
                  l.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: s.a.visuallyHidden },
                  v,
                )
              : null,
          b = Object(a.a)(g, n),
          _ = t >= n ? 'red500' : t >= f ? 'yellow500' : 'primary',
          w = r.createElement(c.a, {
            color: _,
            progress: b,
            size: t >= f ? 30 : 20,
            style: [h.progressCircle, g <= -10 && h.hide],
          }),
          C = t >= f ? r.createElement(l.a, { style: [h.text, g > 0 ? h.gray700 : h.red500] }, i(g)) : null
        return r.createElement(
          u.a,
          { style: [h.root, h.center] },
          y,
          w,
          r.createElement(u.a, { style: [s.a.absoluteFill, h.center] }, C),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ddV6'),
        s = n.n(c),
        l = n('ERkP'),
        u = (n('5BYb'), n('uFXj'), n('H7Rt')),
        d = n('3XMw'),
        p = n.n(d),
        m = n('MWbm'),
        h = n('t62R'),
        f = n('CKsB'),
        g = n('/yvb'),
        v = n('rHpw'),
        y = n('Zg3A'),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        _ = n.n(b),
        w = n('Lsrn'),
        C = n('k/Ka')
      function T(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(C.a)(
          'svg',
          E(
            E({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [w.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          l.createElement(
            'g',
            null,
            l.createElement('path', {
              d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
            }),
            l.createElement('path', {
              d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
            }),
          ),
        )
      }
      S.metadata = { width: 24, height: 24 }
      var x = S,
        O = n('boUI'),
        R = n('EweD'),
        I = p.a.g6185a9e,
        P = p.a.g2d04222,
        D = p.a.baffe39a,
        k = p.a.af293dc2,
        A = p.a.h1053f7e,
        j = p.a.bf994ab2,
        M = p.a.cf7f7e39,
        L = p.a.cfd2f35d,
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
        F = function (e) {
          var t,
            n,
            r = e.dismiss,
            a = e.isModal,
            o = e.midConversationTweet,
            i = e.value,
            c = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            s = !!o,
            d =
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
            p = A
          return (
            d ? (p = j) : s && (p = M),
            l.createElement(
              m.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [B.root, a ? B.modal : B.popover],
              },
              l.createElement(
                m.a,
                { style: B.title },
                l.createElement(h.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, I),
                l.createElement(h.b, { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' }, P),
              ),
              l.createElement(
                m.a,
                null,
                l.createElement(f.a, {
                  Icon: y.a,
                  actionText: D,
                  isSelected: u.a.all === i,
                  onClick: c(u.a.all),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                l.createElement(f.a, {
                  Icon: x,
                  actionText: k,
                  isSelected: u.a.community === i,
                  onClick: c(u.a.community),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                l.createElement(f.a, {
                  Icon: d ? O.a : R.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === i,
                  onClick: c(u.a.by_invitation),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? l.createElement(
                      g.a,
                      {
                        key: 'button_cancel',
                        onPress: r,
                        size: 'large',
                        style: B.cancelButton,
                        type: 'primaryOutlined',
                      },
                      L,
                    )
                  : null,
              ),
            )
          )
        },
        N = n('OiMc'),
        V = n('efqG')
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          r = void 0 !== n && n,
          o = e.disabled,
          c = l.useState(!1),
          u = s()(c, 2),
          d = u[0],
          p = u[1],
          m = l.useCallback(function () {
            return p(!0)
          }, []),
          h = l.useCallback(function () {
            return p(!1)
          }, []),
          f = r ? (d ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return l.createElement(
          V.a,
          {
            disabled: o,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var r = i()(e, ['children', 'controlled'])
              return l.createElement(F, a()({}, r, { dismiss: t, isModal: 'sheet' === n }))
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
        return r
      })
      n('yH/f')
      var r = Object.freeze({ inline: 'inline', prompt: 'prompt', require: 'require' })
    },
    zmS9: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n('3XMw'),
        o = n.n(a),
        i = n('J0mu'),
        c = n('t62R'),
        s = n('rHpw'),
        l = n('QbaN'),
        u = o.a.bfb895b1,
        d = s.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          a = e.testID,
          o = Object(l.c)(n),
          s = !!o && Object(l.h)(n) && !Object(l.g)(o) && !Object(l.f)(o),
          p = Boolean(t)
        return o && s
          ? r.createElement(
              c.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: p },
              r.createElement(i.a, { style: d.icon }),
              u({ date: Object(l.b)(o), time: Object(l.i)(o) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
