;(window.webpackJsonp = window.webpackJsonp || []).push([
  [76],
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
          return x
        }),
        n.d(t, 'a', function () {
          return E
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = (n('yH/f'), n('LJOr'), n('KqXw'), n('JtPf'), n('7x/C'), n('oEOe')),
        i = n('kGix'),
        s = (n('hBpG'), n('M6MT')),
        c = n('Ssj5'),
        l = n('qlwE'),
        u = n('a/ea'),
        d = n('474o')
      function p(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
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
      var y = function (e) {
          return e.placePicker.initial.results
        },
        v = function (e) {
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
            n = y(e)
          if (n)
            return null == (t = n)
              ? void 0
              : t.places.find(function (e) {
                  return (null == t ? void 0 : t.autotag_place_id) === e.place.id
                })
        },
        C = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(o.b)(n, { request: i.Places.search, params: e })({
              actionTypes: f,
              context: 'SEARCH_PLACES_ACTION',
              meta: { resultSet: t },
            })
          }
        },
        T = function (e) {
          return function (t, n, a) {
            a.api
            var r = Object(u.d)(n())
            return t(
              C(
                {
                  query_type: d.a.tweet_compose_location,
                  lat: null == r ? void 0 : r.coords.latitude,
                  long: null == r ? void 0 : r.coords.longitude,
                  hacc: null == r ? void 0 : r.coords.accuracy,
                  search_term: e,
                },
                d.c.lastSearch,
              ),
            )
          }
        },
        x = function () {
          return function (e, t, n) {
            n.api
            var a = v(t()),
              r = y(t())
            if (a === i.a.LOADING || r) return Promise.resolve()
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
        E = function () {
          return function (e, t, n) {
            n.api
            return Object(l.l)(t()) && Object(u.c)(t()) === s.b.granted
              ? e(Object(u.b)())
                  .then(function () {
                    return e(x())
                  })
                  .then(function () {
                    return w(t())
                  })
              : Promise.resolve()
          }
        }
      c.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case f.REQUEST:
              var n = t.meta.resultSet
              return m(m({}, e), {}, r()({}, n, { fetchStatus: i.a.LOADING }))
            case f.FAILURE:
              var a = t.meta.resultSet
              return m(m({}, e), {}, r()({}, a, { fetchStatus: i.a.FAILED }))
            case f.SUCCESS:
              var o = t.meta.resultSet,
                s = t.payload
              return m(m({}, e), {}, r()({}, o, { fetchStatus: i.a.LOADED, results: s }))
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
      var a = n('1YZw'),
        r = n('pXBW'),
        o = n('3XMw'),
        i = n.n(o),
        s = n('SrIh'),
        c = i.a.a5d4fda0,
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
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
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var a = n('RhWx'),
        r = n.n(a),
        o = n('VrFO'),
        i = n.n(o),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('N+ot'),
        h = n.n(m),
        f = n('AuHH'),
        g = n.n(f),
        y = n('KEM+'),
        v = n.n(y),
        b = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n('t62R'),
        w = n('piX5'),
        C = n('4r2z'),
        T = n('FG+G'),
        x = n('rHpw'),
        E = (n('aWzz'), n('k/Ka')),
        S = n('shC7'),
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = b.forwardRef(function (e, t) {
          return Object(E.a)('select', P(P({}, e), {}, { ref: t }))
        }),
        A = function (e) {
          return Object(E.a)('option', e)
        },
        D = 1,
        j = (function (e) {
          p()(n, e)
          var t = R(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_selectRef', b.createRef()),
              v()(u()(a), 'state', { isFocused: !1 }),
              v()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  s = o.value
                n && n(s, i - (r ? 1 : 0))
              }),
              v()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(D)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (D += 1),
              a
            )
          }
          return (
            c()(n, [
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
                    a = e.errorText,
                    o = e.hasError,
                    i = e.helperText,
                    s = e.options,
                    c = e.style,
                    l = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = _.b.getLanguage(),
                    h =
                      'ja' === m
                        ? x.a.theme.fontFamilies.japan
                        : S.a.getConstants().isRTL || C.a.isLocaleRTL(m)
                        ? x.a.theme.fontFamilies.rtl
                        : x.a.theme.fontFamilies.normal,
                    f = void 0 === o ? !!a : o,
                    g = new Set()
                  a && g.add(this._errorID), t && g.add(t), i && g.add(this._helperID)
                  var y = g.size ? r()(g).join(' ') : void 0
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
                          c,
                        ],
                      },
                      this._renderLabel(),
                      b.createElement(
                        k,
                        {
                          accessibilityDescribedBy: y,
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
                        d ? b.createElement(A, { disabled: !0, style: M.option, value: '' }) : null,
                        s.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return b.createElement(
                            A,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: M.option, value: a },
                            n,
                          )
                        }),
                      ),
                      b.createElement(T.a, {
                        style: [M.dropdownCaret, p && w.a.validColor, (o || a) && w.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    f && a ? this._renderErrorText() : null,
                  )
                },
              },
              {
                key: '_renderLabel',
                value: function () {
                  var e = this.props,
                    t = e.errorText,
                    n = e.hasError,
                    a = e.label,
                    r = this.state.isFocused
                  return b.createElement(
                    _.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: M.label,
                    },
                    a,
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
      v()(j, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (j.propTypes = {})
      var M = x.a.create(function (e) {
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
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n('Lsrn'),
        s = n('k/Ka')
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
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
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n('Lsrn'),
        s = n('k/Ka')
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
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
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n('Lsrn'),
        s = n('k/Ka')
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
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
          return y
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = (n('yH/f'), n('JtPf'), n('7x/C'), n('M6MT')),
        i = n('Ssj5')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
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
              ? v()
                  .then(function (t) {
                    return e({ payload: t, type: f })
                  })
                  .catch(function (t) {
                    return e(h(o.b.denied)), Promise.reject(t)
                  })
              : Promise.resolve()
          }
        },
        y = function () {
          return function (e, t, n) {
            n.featureSwitches
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
      i.a.register(
        r()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return c(c({}, e), {}, { permissionStatus: t.payload })
            case f:
              return c(c({}, e), {}, { position: t.payload })
            default:
              return e
          }
        }),
      )
    },
    c0ZR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('JtPf'), n('7x/C')
      var a = function (e) {
        return new Promise(function (t, n) {
          var a = new window.XMLHttpRequest()
          ;(a.responseType = 'blob'),
            (a.onreadystatechange = function () {
              a.readyState === window.XMLHttpRequest.DONE &&
                (200 === a.status ? t(a.response) : n(new Error('Unexpected status code')))
            }),
            (a.onerror = function (e) {
              return n(e)
            }),
            (a.ontimeout = function (e) {
              return n(e)
            }),
            a.open('GET', e, !0),
            a.send()
        })
      }
    },
    h5NW: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('FtHn')
      var a = n('97Jx'),
        r = n.n(a),
        o = n('RhWx'),
        i = n.n(o),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('N+ot'),
        g = n.n(f),
        y = n('AuHH'),
        v = n.n(y),
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
        x = n('6/RC'),
        E = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        S = n('+Kfv'),
        O = n('YeIG'),
        R = n('MWbm'),
        I = n('MtXG'),
        P = n('t62R'),
        k = n('CKsB'),
        A = n('rHpw'),
        D = n('+Eiw'),
        j = n('3XMw'),
        M = n.n(j),
        N = n('Zg3A'),
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var L = M.a.e815fc33,
        V = M.a.c63602d3,
        z = M.a.baffe39a,
        H = M.a.aa4209e8,
        W = M.a.d58baa7e,
        U = (function (e) {
          h()(n, e)
          var t = F(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(p()(e), '_renderCount', function (e) {
                var t = W(e)
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
                    a = n.dismiss
                  ;(0, n.onAudienceControlsValueChange)(t), a()
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
                    a = t.communities,
                    r = t.isC9sParticipationEnabled,
                    o = t.isSuperFollowsCreator,
                    i = n.communityIdValue || void 0,
                    s = n.exclusivityControlValue || void 0
                  return w.createElement(
                    R.a,
                    { style: G.root },
                    w.createElement(
                      R.a,
                      null,
                      w.createElement(P.b, { size: 'headline1', style: G.title, weight: 'bold' }, L),
                      w.createElement(
                        S.a,
                        { viewType: 'everyone' },
                        w.createElement(k.a, {
                          Icon: N.a,
                          actionText: z,
                          isSelected: !s && !i,
                          onClick: this._createClickHandler({
                            _type: 'conversation_controls',
                            conversationControlsValue: 'all',
                          }),
                          selectable: !0,
                          style: G.menuItem,
                          withIconAsThumbnail: !0,
                        }),
                      ),
                      o
                        ? w.createElement(k.a, {
                            Icon: B.a,
                            actionText: H,
                            iconThumbnailColor: 'exclusive',
                            isSelected: !!s,
                            onClick: this._createClickHandler({
                              _type: 'super_followers_exclusive',
                              conversationControlsValue: 'super_followers_exclusive',
                              exclusivityControlValue: {},
                            }),
                            selectable: !0,
                            style: G.menuItem,
                            withIconAsThumbnail: !0,
                          })
                        : null,
                    ),
                    !Object(O.a)(a) && r
                      ? w.createElement(
                          R.a,
                          null,
                          w.createElement(
                            S.a,
                            { viewType: 'community' },
                            w.createElement(P.b, { style: G.title, weight: 'bold' }, V),
                            Object.keys(a).map(function (t) {
                              var n = a[t]
                              return n
                                ? w.createElement(k.a, {
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
                                    style: G.menuItem,
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
        G = A.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: D.a.getBackgroundImage() },
          }
        }),
        K = U,
        q = n('xVN5'),
        X = n('RqPI'),
        Z = n('xZGM'),
        Y = n('eSoz'),
        J = n('rxPX'),
        Q = n('0KEI'),
        $ = n('o3oN'),
        ee = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? Y.b.select(e, n) : void 0
        },
        te = function (e, t) {
          return Object(Z.y)(e, Z.f)
        },
        ne = Object(J.a)()
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
              createLocalApiErrorHandler: Object(Q.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              fetchCommunityMemberships: $.a,
              addEducationFlag: function () {
                return Object(Z.v)(Z.f)
              },
              updateSingleComposer: q.x,
            }
          }),
        ae = n('kGix'),
        re = n('FG+G'),
        oe = n('v6aA'),
        ie = n('X00g'),
        se = n('efqG'),
        ce = n('/yvb')
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var ue = M.a.baffe39a,
        de = M.a.e815fc33,
        pe = M.a.aa4209e8,
        me = w.createElement(re.a, null),
        he = (function (e) {
          h()(n, e)
          var t = le(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              _()(p()(r), '_renderContent', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.communities,
                  o = t.isC9sParticipationEnabled,
                  i = t.isSuperFollowsCreator
                return w.createElement(K, {
                  audienceControlsValue: n,
                  communities: a,
                  dismiss: e,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                })
              }),
              _()(p()(r), '_handleAudienceControlsValueChange', function (e) {
                var t = r.props.updateSingleComposer
                r._handleDismissEducationalVisibilty(),
                  r.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members'].indexOf(e._type) > -1 &&
                    t({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } })
              }),
              _()(p()(r), '_handleOpen', function () {
                r.setState({ popoverIsOpen: !0 })
              }),
              _()(p()(r), '_handleDismiss', function () {
                r.setState({ popoverIsOpen: !1 }), r._handleDismissEducationalVisibilty()
              }),
              _()(p()(r), '_handleDismissEducationalVisibilty', function () {
                r.props.addEducationFlag()
              }),
              (r.state = { popoverIsOpen: !1 }),
              r
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
                    a = e.fetchStatus
                  e.hasMemberships && a === ae.a.NONE && n().catch(t())
                },
              },
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
                    c = this.state.popoverIsOpen,
                    l = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = n.communityIdValue || !1,
                    d = n.exclusivityControlValue || !1,
                    p = a && !s,
                    m = u && null != s && s.name ? s.name : d ? pe : ue
                  if (d) e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != s && s.theme && l) {
                    var h = ie.a.getCommunityUIColorName(s.theme)
                    e = { color: h, borderColor: h, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o
                    ? w.createElement(
                        S.a,
                        { viewType: 'communities_controls' },
                        w.createElement(
                          R.a,
                          { style: fe.container },
                          w.createElement(
                            se.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: p ? 'forceVisible' : 'interactive',
                            },
                            w.createElement(
                              ce.a,
                              r()(
                                {
                                  accessibilityExpanded: c,
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
      var fe = A.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        ge = ne(he),
        ye = n('ddV6'),
        ve = n.n(ye),
        be = n('PKbs'),
        _e = function (e, t) {
          var n = t.selectedCommunityId
          return n ? Y.b.select(e, n) : void 0
        },
        we = Object(J.a)()
          .propsFromState(function () {
            return { community: _e }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Q.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: Y.b.fetchOneIfNeeded,
            }
          }),
        Ce = n('21zW'),
        Te = M.a.gfca5254,
        xe = M.a.f510c8b2,
        Ee = w.createElement(P.b, { weight: 'bold' }, xe),
        Se = A.a.create(function (e) {
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
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          w.useEffect(
            function () {
              o && Object(O.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var s = w.useState(!1),
            c = ve()(s, 2),
            l = c[0],
            u = c[1],
            d = w.useContext(oe.a).featureSwitches,
            p = w.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return w.createElement(be.b, {
                    badgeStyle: Se.badgeStyle,
                    headerContainerStyle: Se.rulesHeader,
                    heading: Ee,
                    ruleContainerStyle: Se.ruleContainerStyle,
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
              h = ie.a.getCommunityUIColorName(m),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return w.createElement(
              R.a,
              { style: Se.container },
              i ? w.createElement(Ce.a, null) : null,
              w.createElement(
                se.a,
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
                  ce.a,
                  r()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Se.button,
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
        Ie = Object(J.a)()
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
        ke = M.a.g46f363d,
        Ae = { viewType: 'community_rule_education' }
      var De = A.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        je = Ie(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            a = function () {
              t()
            }
          return (
            w.useEffect(function () {
              return a
            }),
            n
              ? w.createElement(
                  R.a,
                  { style: De.container },
                  w.createElement(Pe.a, { behavioralEventContext: Ae, onClose: a, text: ke, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Me = n('H7Rt'),
        Ne = n('m3Bd'),
        Be = n.n(Ne),
        Fe = n('yZqq'),
        Le = function (e, t) {
          return Object(Z.y)(e, Z.q)
        },
        Ve = Object(J.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Le }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(Z.v)(Z.q)
              },
            }
          }),
        ze = M.a.aa65a449,
        He = { viewType: 'persistent_conversation_controls_education' }
      var We = A.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Ue = Ve(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = w.useContext(oe.a).featureSwitches,
            o = w.useState(),
            i = ve()(o, 2),
            s = i[0],
            c = i[1],
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
                    a = e.width
                  c(t + a / 2)
                }
              },
              [n],
            ),
            !0 === r.getValueWithoutScribeImpression('conversation_controls_persistence_enabled') && a
              ? w.createElement(
                  R.a,
                  { style: We.container },
                  w.createElement(Pe.a, {
                    arrowPositionStart: s,
                    behavioralEventContext: He,
                    onClose: l,
                    text: ze,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        Ge = n('Irs7'),
        Ke = n('DlMI'),
        qe = n('gBde'),
        Xe = n('gUPl'),
        Ze = n('cOhU'),
        Ye = w.createElement(Ke.a, null),
        Je = w.createElement(qe.a, null),
        Qe = w.createElement(Xe.a, null),
        $e = w.createElement(Ze.a, null),
        et = 'conversation_control',
        tt = Object.freeze({
          all: { icon: Ye, label: M.a.i8ea6d4e },
          community: { icon: Qe, label: M.a.ec5a4a25 },
          by_invitation: { icon: Je, label: M.a.b4543009 },
          community_members: { icon: $e, label: M.a.i13be5a0 },
          super_followers_exclusive: { icon: Ye, label: M.a.f8393bda },
        }),
        nt =
          (Object.freeze(['community', 'by_invitation']),
          Object(Ge.a)(function (e) {
            var t = e.analytics,
              n = Be()(e, ['analytics']),
              a = e.disabled,
              r = e.value,
              o = tt[r],
              i = o.icon,
              s = o.label,
              c = w.useState(!1),
              l = ve()(c, 2),
              u = l[0],
              d = l[1],
              p = w.useRef(null)
            w.useEffect(function () {
              r !== Me.a.all && r !== Me.a.community_members && d(!0)
            }, [])
            var m = w.useCallback(
              function (e) {
                t.scribe({ element: et, action: 'click' })
              },
              [t],
            )
            return w.createElement(
              S.a,
              { viewType: et },
              u ? w.createElement(Ue, { buttonRef: p.current }) : null,
              w.createElement(
                R.a,
                { style: at.controlsContainer },
                w.createElement(
                  Fe.a,
                  n,
                  w.createElement(
                    ce.a,
                    { disabled: a, icon: i, onPress: m, ref: p, size: 'xSmall', style: at.button, type: 'brandText' },
                    s,
                  ),
                ),
              ),
            )
          })),
        at = A.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        rt = n('krmn'),
        ot = n('cIoY'),
        it = n('w3n3'),
        st = n('MLl7'),
        ct = n('1auM'),
        lt = n('07FG'),
        ut = n('Q8CU'),
        dt = n('QbaN'),
        pt = n('nV1z'),
        mt = n('VPdC'),
        ht = n('WPfJ'),
        ft = A.a.create(function (e) {
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
        yt = M.a.bdbcdd93,
        vt = M.a.a809609f,
        bt = w.createElement(pt.a, null),
        _t = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            o = e.videoPickerEnabled,
            i = n || t.length >= 4,
            s = t.length < 3,
            c = o && gt.b.isIOS() && gt.b.isSafari()
          return w.createElement(
            w.Fragment,
            null,
            w.createElement(mt.a, {
              acceptGifs: 0 === t.length,
              acceptVideo: 0 === t.length && !c,
              accessibilityLabel: t.length > 0 || c ? yt : void 0,
              disabled: i,
              multiple: s,
              onChange: a,
              onPress: r,
              style: [ft.toolBarButton, ft.firstToolBarButton],
              type: 'brandText',
            }),
            c
              ? w.createElement(mt.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !0,
                  accessibilityLabel: vt,
                  disabled: t.length > 0,
                  hoverLabel: { label: vt },
                  icon: bt,
                  multiple: !1,
                  onChange: a,
                  onPress: r,
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var xt = (function (e) {
        h()(n, e)
        var t = Tt(n)
        function n() {
          var e
          c()(this, n)
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(r))),
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
                  a = e.editable,
                  r = e.label,
                  o = e.name,
                  i = e.onChange
                return w.createElement(
                  R.a,
                  { style: Et.root },
                  w.createElement(wt.a, {
                    autoCapitalize: 'none',
                    autoCorrect: !1,
                    autoFocus: t,
                    defaultValue: n,
                    editable: a,
                    label: r,
                    maxLength: 25,
                    name: o,
                    onChange: i,
                    ref: this._setInputRef,
                    spellCheck: 'false',
                    style: Et.formTextInput,
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
      _()(xt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Et = A.a.create(function (e) {
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
        St = xt,
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Pt = (function (e) {
        h()(n, e)
        var t = It(n)
        function n() {
          return c()(this, n), t.apply(this, arguments)
        }
        return (
          u()(n, [
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
                  c = !t || o === r,
                  l = e.value.toString(),
                  u = Object(Ot.a)(o, r + 1).map(function (e) {
                    return { label: ''.concat(M.a.ia24dc8c(e)), value: ''.concat(e) }
                  })
                return w.createElement(Rt.a, {
                  disabled: c,
                  label: n,
                  onChange: i,
                  options: u,
                  style: [kt.selector, !a && kt.rightMargin],
                  testID: s,
                  value: l,
                })
              },
            },
          ]),
          n
        )
      })(w.PureComponent)
      _()(Pt, 'defaultProps', { last: !1 })
      var kt = A.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        At = Pt,
        Dt = 'addPollChoice',
        jt = 'selectPollDays',
        Mt = 'selectPollHours',
        Nt = 'selectPollMinutes',
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Lt = M.a.caf8edc4,
        Vt = M.a.g93586be,
        zt = M.a.d073b644,
        Ht = M.a.a2f0728e,
        Wt = (function (e) {
          h()(n, e)
          var t = Ft(n)
          function n(e, a) {
            var r
            return (
              c()(this, n),
              (r = t.call(this, e, a)),
              _()(p()(r), '_handleDaysChange', function (e) {
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
              _()(p()(r), '_handleHoursChange', function (e) {
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
              _()(p()(r), '_handleMinutesChange', function (e) {
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
                    w.createElement(P.b, { color: 'normal', style: Ut.durationLabel }, t ? Lt : ''),
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
                  return w.createElement(
                    R.a,
                    { style: Ut.durationControls },
                    w.createElement(At, {
                      editable: t && n,
                      label: Vt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: jt,
                      value: r,
                    }),
                    w.createElement(At, {
                      editable: t && n,
                      label: zt,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Mt,
                      value: o,
                    }),
                    w.createElement(At, {
                      editable: t && n,
                      label: Ht,
                      last: !0,
                      max: 7 === r ? 0 : 59,
                      min: 0 === r && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Nt,
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
      _()(Wt, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Ut = A.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Gt = Wt,
        Kt = n('iY63'),
        qt = n('jtO7')
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Zt = M.a.g589c2e1,
        Yt = M.a.a1e6c3a1,
        Jt = M.a.a739e006,
        Qt = M.a.d89a5b92,
        $t = M.a.c2a8118d,
        en = M.a.a8ede1de,
        tn = M.a.af40a8ef,
        nn = (function (e) {
          h()(n, e)
          var t = Xt(n)
          function n(e, a) {
            var r
            c()(this, n),
              (r = t.call(this, e, a)),
              _()(p()(r), '_setChoice1Ref', function (e) {
                r._choice1 = e
              }),
              _()(p()(r), '_setChoice2Ref', function (e) {
                r._choice2 = e
              }),
              _()(p()(r), '_setChoice3Ref', function (e) {
                r._choice3 = e
              }),
              _()(p()(r), '_setChoice4Ref', function (e) {
                r._choice4 = e
              }),
              _()(p()(r), '_setDurationPickerRef', function (e) {
                r._durationPicker = e
              }),
              _()(p()(r), '_handleValidation', function () {
                var e = r.props,
                  t = e.onChange,
                  n = e.onInvalid,
                  a = e.onValid,
                  o = r.choices,
                  i = p()(r),
                  s = [i._choice1, i._choice2, i._choice3, i._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && s ? a() : n(), t && t({ choices: o, duration: r.duration })
              }),
              _()(p()(r), '_handleAdd', function () {
                r.props.analytics.scribe({ element: 'add_poll_option', action: 'click' }),
                  r.setState(function (e) {
                    return { autoFocus: !0, choiceCount: e.choiceCount + 1 }
                  })
              }),
              _()(p()(r), '_handleDurationChange', function (e) {
                var t = r.props.onChange
                t && t({ choices: r.choices, duration: e })
              })
            var o = e.initialChoices,
              i = void 0 === o,
              s = (o || []).length,
              l = s > 2 ? s : 2
            return (r.state = { autoFocus: i, choiceCount: l }), r
          }
          return (
            u()(n, [
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
                    c = w.createElement(
                      R.a,
                      { style: an.rightColumn },
                      s < 4
                        ? w.createElement(ce.a, {
                            accessibilityLabel: en,
                            disabled: !(t && r),
                            hoverLabel: { label: tn },
                            icon: w.createElement(Kt.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: an.addButton,
                            testID: Dt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return w.createElement(
                    R.a,
                    { style: an.choicesAndAddButton },
                    w.createElement(
                      R.a,
                      { style: an.choices },
                      w.createElement(St, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: Zt,
                        name: 'Choice1',
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      w.createElement(St, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: Yt,
                        name: 'Choice2',
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      s >= 3
                        ? w.createElement(St, {
                            autoFocus: i,
                            defaultValue: a[2],
                            editable: t && r,
                            label: Jt,
                            name: 'Choice3',
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === s
                        ? w.createElement(St, {
                            autoFocus: i,
                            defaultValue: a[3],
                            editable: t && r,
                            label: Qt,
                            name: 'Choice4',
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice4Ref,
                          })
                        : null,
                    ),
                    c,
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
                  return w.createElement(
                    R.a,
                    { style: an.root },
                    this._renderChoices(),
                    w.createElement(Gt, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: an.durationPicker,
                    }),
                    w.createElement(
                      R.a,
                      { style: an.removePollButton },
                      w.createElement(qt.a, { color: 'red500', label: $t, onPress: r, testID: Bt }),
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
        })(w.Component),
        an = A.a.create(function (e) {
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
        rn = Object(Ge.a)(nn),
        on = A.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        sn = M.a.i859676b,
        cn = w.createElement(
          M.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          w.createElement(
            P.b,
            { link: '/settings/audience_and_tagging', style: on.link, withInteractiveStyling: !0, withUnderline: !0 },
            M.a.c9a48d3f,
          ),
        )
      function ln() {
        return w.createElement(R.a, { style: on.container }, w.createElement(Pe.a, { headline: sn, text: cn }))
      }
      var un = n('b5s6'),
        dn = n('rcen'),
        pn = n('zmS9'),
        mn = 'addButton',
        hn = 'addSubtitlesLabel',
        fn = 'altTextLabel',
        gn = 'tagPeopleLabel',
        yn = 'attachments',
        vn = 'createPollButton',
        bn = 'geoButton',
        _n = 'scheduleOption',
        wn = 'taggedUsersLabel',
        Cn = 'tweetTextarea_',
        Tn = 'toolBar',
        xn = n('xM7j'),
        En = n('6OUF'),
        Sn = n('tZIO'),
        On = n('5mJL'),
        Rn = n('DNho'),
        In = n('jhWN'),
        Pn = n('rFBM'),
        kn = n('zfvc'),
        An = n('Ujvi'),
        Dn = n('yTN1'),
        jn = n('gpVt'),
        Mn = n('hOZg'),
        Nn = n('ll3R'),
        Bn = n('J0mu'),
        Fn = n('EfHu'),
        Ln = n('KrGU'),
        Vn = n('boUI'),
        zn = n('6ZHn'),
        Hn = n('/WPq'),
        Wn = n('wpLu'),
        Un = n('pHub'),
        Gn = n('8A5z'),
        Kn = n('pKoL'),
        qn = n('ZvMt'),
        Xn = n('9Xij')
      function Zn(e) {
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Yn = (function (e) {
        h()(n, e)
        var t = Zn(n)
        function n() {
          return c()(this, n), t.apply(this, arguments)
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
                  a = n.height,
                  r = n.width,
                  o = A.a.theme.aspectRatios.landscape
                if (t) {
                  var i,
                    s,
                    c = this.context.featureSwitches.isTrue('media_minimal_image_crop_enabled'),
                    l = this.context.featureSwitches.getNumberValue('media_minimal_image_crop_minimum_aspect_ratio'),
                    u = this.context.featureSwitches.getNumberValue('media_minimal_image_crop_maximum_aspect_ratio')
                  if (c)
                    o = qn.a.getImageAspectRatio(l, u, {
                      width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                      height: null === (s = e[0].mediaFile) || void 0 === s ? void 0 : s.height,
                    })
                }
                return w.createElement(
                  Xn.a,
                  { ratio: t ? o : r / a },
                  w.createElement(R.a, { style: Jn.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                )
              },
            },
            {
              key: '_renderGroupOf2',
              value: function () {
                return w.createElement(
                  Xn.a,
                  { ratio: A.a.theme.aspectRatios.landscape },
                  w.createElement(
                    R.a,
                    { style: Jn.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, Jn.gutterRight),
                    this._renderMediaAtIndex(1),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf3',
              value: function () {
                return w.createElement(
                  Xn.a,
                  { ratio: A.a.theme.aspectRatios.landscape },
                  w.createElement(
                    R.a,
                    { style: Jn.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, Jn.gutterRight),
                    this._renderColumnWithIndices([1, 2]),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf4',
              value: function () {
                return w.createElement(
                  Xn.a,
                  { ratio: A.a.theme.aspectRatios.landscape },
                  w.createElement(
                    R.a,
                    { style: Jn.mediaPreviewWrapper },
                    this._renderColumnWithIndices([0, 2], Jn.gutterRight),
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
                  { style: [Jn.column, t] },
                  this._renderMediaAtIndex(e[0], Jn.gutterBottom),
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
                  c = i.isActive,
                  l = i.media,
                  u = i.onClickMedia,
                  d = i.onEditMedia,
                  p = i.onEditSensitiveWarning,
                  m = i.onRemoveMedia,
                  h = i.onSetMediaPreviewRef,
                  f = l[e],
                  g = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                  y = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                  v = !(
                    null === (r = f.mediaMetadata) ||
                    void 0 === r ||
                    null === (o = r.sensitiveMediaWarning) ||
                    void 0 === o ||
                    !o.size
                  ),
                  b = d && s && c,
                  _ = b && v && !!p
                return w.createElement(Kn.a, {
                  accessibilityLabel: g || y,
                  accessibilityRole: 'group',
                  enableGif: c,
                  key: f.id,
                  mediaItem: f,
                  onClick: u ? u(f.id) : void 0,
                  onEdit: d ? d(f.id) : void 0,
                  onEditSensitiveWarning: p && _ ? p(f.id) : void 0,
                  onRemove: m(f.id),
                  ref: h,
                  style: [Jn.mediaContainer, t],
                  withAltTextLabel: !!g,
                  withCloseButton: s && c,
                  withEditButton: b,
                  withEditSensitiveWarningButton: _,
                })
              },
            },
          ]),
          n
        )
      })(w.Component)
      _()(Yn, 'contextType', oe.a)
      var Jn = A.a.create(function (e) {
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
        Qn = n('oQhu'),
        $n = n('+d3d'),
        ea = n('S1qy'),
        ta = n.n(ea),
        na = n('cjAp'),
        aa = n.n(na)
      function ra(e) {
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var oa = M.a.f0afcc0e,
        ia = M.a.ha5e2e79,
        sa = M.a.a3de3b68,
        ca = M.a.cc2b28fc,
        la = M.a.g45af04e,
        ua = M.a.ee9c4013,
        da = M.a.af40a8ef,
        pa = M.a.e68b09b4,
        ma = M.a.ec10ee02,
        ha = M.a.h735a98d,
        fa = M.a.c4ccfbe2,
        ga = M.a.j499fbcb,
        ya = M.a.b7d8e3f0,
        va = M.a.d1175c78,
        ba = M.a.bf4e9d79,
        _a = M.a.e0342f98,
        wa = M.a.e349147b,
        Ca = M.a.e3a24e4b,
        Ta = M.a.de4669e2,
        xa = M.a.d2c7a41c,
        Ea = M.a.f7364fa1,
        Sa = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Oa = M.a.ia24dc8c,
        Ra = w.createElement(Mn.a, null),
        Ia = w.createElement(Kt.a, null),
        Pa = w.createElement(Nn.a, null),
        ka = w.createElement(Bn.a, null),
        Aa = { viewType: 'schedule_tweet' },
        Da = { viewType: 'add_poll' },
        ja = { viewType: 'add_composer' },
        Ma = { viewType: 'tag_location' },
        Na = (function (e) {
          h()(n, e)
          var t = ra(n)
          function n(e, a) {
            var o
            c()(this, n),
              (o = t.call(this, e, a)),
              _()(p()(o), '_handleConversationControlsValueChange', function (e) {
                o._handleAudienceControlsValueChange({ _type: 'conversation_controls', conversationControlsValue: e })
              }),
              _()(p()(o), '_handleAudienceControlsValueChange', function (e) {
                o.props.updateAudienceControlsValue(e)
              }),
              _()(
                p()(o),
                '_triggerConversationControlsImpression',
                Object(Qn.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(p()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  a = o.props,
                  r = a.audienceControlsValue,
                  i = a.isActive,
                  s = a.isInline,
                  c = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== Me.a.community_members &&
                      r.conversationControlsValue !== Me.a.super_followers_exclusive) ||
                    !c
                  ) ||
                  (i && !c && (!s || n || e))
                )
              }),
              _()(p()(o), '_renderConversationControls', function (e) {
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
                  c = i === Me.a.community_members || i === Me.a.super_followers_exclusive || o._isScheduled()
                return s
                  ? w.createElement(nt, { disabled: c, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              _()(p()(o), '_renderTaggedLocation', function (e) {
                return w.createElement(
                  R.a,
                  { style: ft.taggedLocationContainer },
                  w.createElement(
                    ce.a,
                    {
                      icon: w.createElement(Fn.a, null),
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
                  a = e.index,
                  r = e.isExpanded,
                  i = e.isInline,
                  s = e.isInlineReply,
                  c = e.onTypeaheadStateChange,
                  l = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(jn.b)(h) || (u && !Object(lt.a)(u) && [u]),
                  g = !!d.length || p || !!m,
                  y = o.props.typeaheadWrapper,
                  v = !o._isEmpty()
                return w.createElement(
                  R.a,
                  { style: ft.textInputArea },
                  w.createElement(
                    R.a,
                    { style: r ? ft.inputStyle : ft.collapsedInputStyle },
                    o._renderAudienceControls(v),
                    w.createElement(
                      y,
                      {
                        contextText: h,
                        isInline: i,
                        isInlineReply: s,
                        onTextUpdated: l ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: c,
                      },
                      o._renderFieldTextInput,
                    ),
                    f && !g
                      ? w.createElement(jn.a, { index: a, isCardPreviewTombstoned: Object(lt.a)(u), urls: f })
                      : null,
                  ),
                  r ? null : t,
                )
              }),
              _()(p()(o), '_renderFieldTextInput', function (e) {
                var t = o.props,
                  n = t.autoFocus,
                  a = t.data,
                  i = t.editable,
                  s = t.index,
                  c = t.isActive,
                  l = t.isExpanded,
                  u = t.isInline,
                  d = t.isInlineReply,
                  p = t.isLast,
                  m = t.keyCommandHandlers,
                  h = t.onTextInputBlur,
                  f = t.positionCursorAtBeginning,
                  g = t.richTextInputContext,
                  y = a.text,
                  v = 0 === s && p,
                  b = !!g,
                  _ = g || {},
                  C = _.dismissComposerCommandName,
                  T = _.element,
                  x = _.sendTweetCommandName,
                  E = d && !g && !l,
                  S = g
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: C,
                          editorState: o.state.editorState,
                          element: T,
                          sendTweetCommandName: x,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return w.createElement(
                  En.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: sa,
                      autoFocus: n || (c && !u),
                      closeButton:
                        c && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !v
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [ft.textInputStyle, E && ft.textInputMobileCollapsed],
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
                      testID: ''.concat(Cn).concat(s),
                      value: y,
                    },
                    S,
                  ),
                )
              }),
              _()(
                p()(o),
                '_getHandleRichTextChange',
                Object(Qn.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                p()(o),
                '_getHandlePlainTextChange',
                Object(Qn.a)(function (e) {
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
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  s = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (i || s)
                  ? w.createElement(ge, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: r && s,
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
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  i = t.media,
                  s = t.pollActive,
                  c = t.quotedStatus,
                  l = !!i.length || !!s || !!c
                return (r && (a || l)) || !n ? 1 : 4
              }),
              _()(p()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return w.createElement(pn.a, { onPress: o._handlePressScheduledTweetLegend, scheduledFor: e })
              }),
              _()(p()(o), '_handlePressScheduledTweetLegend', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              _()(p()(o), '_renderEmojiPicker', function () {
                return w.createElement(rt.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              _()(
                p()(o),
                '_getEmojiPickerButtonStyles',
                Object(Qn.a)(function () {
                  return [ft.iconEmojiPicker, ft.toolBarButton]
                }),
              ),
              _()(p()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  i = n.pollActive,
                  s = n.quotedStatus,
                  c = n.text,
                  l = e.index,
                  u = e.isLast,
                  d = 0 === l && u,
                  p = t.conversationControlsValue !== Me.a.all
                return Boolean(i || !d || (s && '' === c && !a.length) || p || r.length > 0)
              }),
              _()(p()(o), '_renderSchedulingButton', function () {
                return w.createElement(ce.a, {
                  accessibilityLabel: ia,
                  behavioralEventContext: Aa,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: ha },
                  icon: ka,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: ft.toolBarButton,
                  testID: _n,
                  type: 'brandText',
                })
              }),
              _()(p()(o), '_handleClickScheduler', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'schedule_tweet', action: 'click' }), a()
              }),
              _()(p()(o), '_renderCloseButton', function () {
                var e = o.props.onRemoveComposer
                return w.createElement(ce.a, {
                  accessibilityLabel: ua,
                  hoverLabel: { label: pa },
                  icon: Ra,
                  onPress: e,
                  size: 'xSmall',
                  type: 'brandText',
                })
              }),
              _()(p()(o), '_renderTweetAttachment', function () {
                var e = o.props,
                  t = e.data,
                  n = e.editable,
                  a = e.isActive,
                  r = t.media,
                  i = t.pollActive,
                  s = t.pollChoices,
                  c = t.pollDuration,
                  l = t.quotedStatus
                if (0 === r.length && !i && !l) return null
                var u = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return w.createElement(
                  R.a,
                  { onClick: o._handleFocus, style: [ft.attachmentContainer, ft.tweetAttachmentArea], testID: yn },
                  r.length > 0
                    ? w.createElement(Yn, {
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
                        style: ft.mediaPreview,
                      })
                    : null,
                  a ? o._renderMediaActions() : null,
                  i
                    ? w.createElement(rn, {
                        editable: n,
                        initialChoices: s,
                        initialDuration: c,
                        isActive: a,
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
                  a = t.data.media,
                  r = t.hidePoll,
                  i = t.hideScheduling,
                  s = t.isInlineReply,
                  c = t.isReply,
                  l = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  p = !!u,
                  m = !s && !r,
                  h = !s && !i,
                  f = o.context.featureSwitches.isTrue('responsive_web_precise_location_setting_enabled'),
                  g = o.context.featureSwitches.isTrue('responsive_web_video_picker')
                return w.createElement(
                  R.a,
                  { style: ft.toolBar, testID: Tn },
                  w.createElement(
                    R.a,
                    { style: ft.toolBarIconsContainer },
                    w.createElement(_t, {
                      media: a,
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
                    (c && !l) || !e
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
              _()(p()(o), '_handleRichTextChange', function (e) {
                var t = o.props.richTextInputContext,
                  n = e.getCurrentContent().getPlainText()
                if (t) {
                  var a = t.convertEmojiToEntities(e)
                  o.setState(o._addOverflowStyle(a))
                }
                o._handleTextValueChange(n)
              }),
              _()(p()(o), '_handlePlainTextChange', function (e) {
                var t = Sn.a.replaceCarriageReturns(e.target.value)
                o._handleTextValueChange(t)
              }),
              _()(p()(o), '_handleTextValueChange', function (e) {
                var t = o.props,
                  n = t.data,
                  a = n.key,
                  r = n.text,
                  i = t.onTextChange
                r !== e && i(e, a)
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
                      a = n.analytics,
                      r = n.history
                    a.scribe({ element: 'media_detail_button', action: 'click' }),
                      (o.hasAttachedImage || o.hasAttachedVideo) &&
                        r.push('/compose/tweet/media', { mediaId: t, tab: e })
                  }
                }
              }),
              _()(p()(o), '_handleFilesAdded', function (e) {
                var t = o.props,
                  n = t.addToast,
                  a = t.data.pollActive,
                  r = t.onFilesAdded
                a ? n({ text: ca }) : r(e)
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
                  var a = n.insertTextAtCursor(t, e.text)
                  o._handleRichTextChange(a)
                }
              }),
              _()(p()(o), '_validateMedia', function (e) {
                var t = o.props.data.media
                return E.c(t.concat(e))
              }),
              _()(p()(o), '_handlePollAdd', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'add_poll', action: 'click' }), a({ pollActive: !0 }, n)
              }),
              _()(p()(o), '_handlePollRemove', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.index,
                  a = e.updateSingleComposer
                t.scribe({ element: 'remove_poll', action: 'click' }), a({ pollActive: !1 }, n)
              }),
              _()(p()(o), '_handlePollInvalid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                t && a({ pollValid: !1 }, n)
              }),
              _()(p()(o), '_handlePollValid', function () {
                var e = o.props,
                  t = e.data.pollValid,
                  n = e.index,
                  a = e.updateSingleComposer
                !t && a({ pollValid: !0 }, n)
              }),
              _()(p()(o), '_updatePoll', function (e) {
                var t = e.choices,
                  n = e.duration,
                  a = o.props,
                  r = a.index
                ;(0, a.updateSingleComposer)({ pollChoices: t, pollDuration: n }, r)
              }),
              _()(p()(o), '_handlePollChange', Object($n.a)(o._updatePoll, 200, { leading: !0, trailing: !1 })),
              _()(p()(o), '_handleGeoButtonClick', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/place_picker'), t.scribe({ element: 'tag_location', action: 'click' }), a()
              }),
              _()(p()(o), '_handleWrapperClick', function (e) {
                ;(e.target instanceof Element && e.target.closest('[role="button"],a,input,textarea,select')) ||
                  o.focus()
              }),
              _()(p()(o), '_handleFocus', function () {
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
              _()(p()(o), '_handleEditorFocus', function () {
                return o.setState({ isFocused: !0 })
              }),
              _()(p()(o), '_formatCountdownNumber', function (e) {
                return Oa(Math.ceil(e / o._userLanguageWeight))
              }),
              _()(p()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  s = e.isSelfThreadReply
                return a ? Ta : n ? Ea : i && !s ? xa : s || r > 0 ? Ca : wa
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
                Object(Qn.a)(function (e) {
                  var t = aa.a[o.props.twitterTextConfigurationVersion]
                  return ta()(e, t)
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
                  a = e.index,
                  r = e.updateSingleComposer
                n().then(function (e) {
                  void 0 === t && r({ taggedLocation: null != e ? e : null }, a)
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
              s = e.richTextInputContext,
              l = e.userLanguage,
              u = (s || {}).initEditorState
            return (
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._deleteNonemptyTweetstormComposerEnabled = o.context.featureSwitches.isTrue(
                'responsive_web_delete_nonempty_tweetstorm_composer_enabled',
              )),
              (o._userLanguageWeight = l && Sa.indexOf(l) > -1 ? 2 : 1),
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
                      return e.mediaFile && !(e.mediaFile instanceof ct.a) && e.mediaFile.isVideo
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
                    c = t.windowWidth,
                    l = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    p = c < A.a.theme.breakpoints.small
                  return w.createElement(
                    R.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [ft.root, !a && ft.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    w.createElement(
                      On.a,
                      {
                        avatarCell: w.createElement(
                          w.Fragment,
                          null,
                          l
                            ? w.createElement(Rn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return w.createElement(In.a, {
                                  accessibilityLabel: s ? s.name : void 0,
                                  screenName: s ? s.screen_name : void 0,
                                  size: t,
                                  style: ft.avatar,
                                  uri: s ? s.profile_image_url_https : void 0,
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
                        avatarCellStyle: r ? ft.avatarContainerExpanded : ft.avatarContainer,
                        cellStyle: ft.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      w.createElement(
                        R.a,
                        { onFocus: this._handleEditorFocus, style: ft.inputArea },
                        w.createElement(
                          Pn.a,
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
                      w.createElement(kn.b, { show: a && r }, this._renderToolbar(u)),
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
                  return w.createElement(it.a, {
                    enabled: !s,
                    gifSearchKeySource: st.a.Composition,
                    history: r,
                    onPress: i,
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
                  return w.createElement(ce.a, {
                    accessibilityLabel: oa,
                    behavioralEventContext: Da,
                    disabled: s,
                    hoverLabel: { label: ma },
                    icon: Pa,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: ft.toolBarButton,
                    testID: vn,
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
                    o = t ? w.createElement(Fn.a, null) : w.createElement(Ln.a, null)
                  return w.createElement(ce.a, {
                    accessibilityLabel: fa,
                    behavioralEventContext: Ma,
                    disabled: r,
                    hoverLabel: { label: fa },
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
                    a = 0 !== e.mediaTags.length,
                    r =
                      n.some(function (e) {
                        return e.mediaFile && e.mediaFile.isGif
                      }) || this.hasExternalMedia
                  return this.hasAttachedImage || this.hasAttachedVideo || t || r
                    ? w.createElement(
                        R.a,
                        { style: ft.imageActions },
                        t && t.url && t.provider
                          ? w.createElement(
                              R.a,
                              { style: ft.addImageTextPadding },
                              w.createElement(ot.a, { gifUrl: t.url, provider: t.provider }),
                            )
                          : null,
                        this.hasAttachedImage && !this._isScheduled()
                          ? w.createElement(
                              P.b,
                              {
                                accessibilityLabel: va,
                                color: 'gray700',
                                link: '/compose/tweet/tags',
                                style: [ft.addImageTextContainer, ft.addImageTextPadding],
                              },
                              a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                            )
                          : null,
                        this.hasAttachedImage || r
                          ? w.createElement(
                              P.b,
                              {
                                accessibilityLabel: ga({ numberOfImages: n.length }),
                                color: 'gray700',
                                link: {
                                  pathname: '/compose/tweet/media',
                                  state: { mediaId: n[0].id, tab: 'alt_text' },
                                },
                                onPress: this._handleClickAltTextShortcut,
                                style: ft.addImageTextContainer,
                              },
                              this._renderAltTextLabel(),
                            )
                          : null,
                        this.hasAttachedVideo ? this._renderSubtitlesLabel() : null,
                      )
                    : null
                },
              },
              {
                key: '_renderTagPeopleLabel',
                value: function () {
                  return w.createElement(
                    P.b,
                    { color: 'gray700', size: 'subtext2', testID: gn },
                    w.createElement(Vn.a, { style: ft.addImageActionIcon }),
                    va,
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
                  return w.createElement(
                    P.b,
                    { color: 'gray700', size: 'subtext2', testID: wn },
                    w.createElement(zn.a, { style: ft.addImageActionIcon }),
                    w.createElement(An.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          w.createElement(Wn.a, { style: ft.addImageActionIcon }),
                          ya({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : w.createElement(
                          P.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: fn },
                          w.createElement(Wn.a, { style: ft.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : w.createElement(
                        P.b,
                        { color: 'gray700', size: 'subtext2', testID: fn },
                        w.createElement(Hn.a, { style: ft.addImageActionIcon }),
                        ga({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Un.a : Gn.a
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
                      accessibilityLabel: this.attachedSubtitles ? _a : void 0,
                      style: ft.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : ba,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = aa.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return w.createElement(Dn.a, {
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
                    c = t || i || s || !r || n
                  return w.createElement(ce.a, {
                    accessibilityLabel: la,
                    behavioralEventContext: ja,
                    disabled: c,
                    hoverLabel: { label: da },
                    icon: Ia,
                    link: !a || i || c ? void 0 : '/compose/tweet',
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
                    a = t.pollActive,
                    r = e.loggedInUser,
                    o = n.length,
                    i = n.some(function (e) {
                      var t
                      return null === (t = e.mediaFile) || void 0 === t ? void 0 : t.isGif
                    }),
                    s = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof ct.a) && e.mediaFile.isVideo
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
                      return e.mediaFile && !(e.mediaFile instanceof ct.a) && e.mediaFile.isVideo
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
        })(w.Component)
      _()(Na, 'contextType', oe.a),
        _()(Na, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Ba = Object(Ge.a)(Na),
        Fa = w.createElement(P.b, { weight: 'bold' }),
        La = w.createElement(P.b, { color: 'link' }),
        Va = function (e) {
          return '@'.concat(e)
        },
        za = n('SrIh'),
        Ha = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Wa = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  w.cloneElement(La, null, M.a.b50e199a({ userName: Va(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  w.cloneElement(La, null, M.a.f2e4dd37({ replyUserName: Va(t), otherUserName: Va(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  w.cloneElement(
                    La,
                    null,
                    M.a.eccfddc3({ userOneName: Va(t), userTwoName: Va(a), userThreeName: Va(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  w.cloneElement(La, null, M.a.h758cd22({ userOneName: Va(n), userTwoName: Va(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  w.cloneElement(La, null, M.a.e9f8a0eb({ userName: Va(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  w.cloneElement(La, null, M.a.df7e9fbc({ replyUserName: Va(n), otherUserName: Va(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  w.cloneElement(
                    La,
                    null,
                    M.a.b45fa505({ userOneName: Va(n), userTwoName: Va(r), userThreeName: Va(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  w.cloneElement(La, null, M.a.a4383815({ userOneName: Va(a), userTwoName: Va(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  w.cloneElement(La, null, M.a.ff792e35({ userName: Va(t) })),
                  w.cloneElement(Fa, null, M.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  w.cloneElement(La, null, M.a.g7d5e985({ replyUserName: Va(t), otherUserName: Va(n) })),
                  w.cloneElement(Fa, null, M.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  w.cloneElement(
                    La,
                    null,
                    M.a.fe5a61e9({ userOneName: Va(t), userTwoName: Va(a), userThreeName: Va(n) }),
                  ),
                  w.cloneElement(Fa, null, M.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return w.createElement(
                  M.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  w.cloneElement(La, null, M.a.bc9dd514({ userOneName: Va(n), userTwoName: Va(a), othersCount: t })),
                  w.cloneElement(Fa, null, M.a.de5071ba),
                )
              },
            },
            i = E.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            s = a.retweeted_status || a,
            c = s.exclusivity_info,
            l = s.user,
            u = i.filter(function (e) {
              return e.id_str !== l.id_str
            }),
            d = ve()(u, 2),
            p = d[0],
            m = d[1],
            h = [l, p, m].map(Ha),
            f = ve()(h, 3),
            g = f[0],
            y = f[1],
            v = f[2],
            b = i.length - 2
          switch (i.length) {
            case 0:
              return Object(za.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: g })
                : c
                ? o.exclusiveReplyToOne({ userName: g })
                : o.replyToOne({ userName: g })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: g, userTwoName: y })
                : c
                ? o.exclusiveReplyToTwo({ userOneName: g, userTwoName: y })
                : o.replyToTwo({ userOneName: g, userTwoName: y })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: g, userTwoName: y, userThreeName: v })
                : c
                ? o.exclusiveReplyToThree({ userOneName: g, userTwoName: y, userThreeName: v })
                : o.replyToThree({ userOneName: g, userTwoName: y, userThreeName: v })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: y, othersCount: b })
                : c
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: y, othersCount: b })
                : o.replyToMany({ userOneName: g, userTwoName: y, othersCount: b })
          }
        },
        Ua = w.memo(Wa),
        Ga = n('fs1G'),
        Ka = n('BLtI'),
        qa = n('kY28')
      function Xa(e) {
        null == e || e.preventDefault()
      }
      var Za = A.a.create(function (e) {
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
        Ya = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            s = e.showParentTweet,
            c = void 0 === s || s
          return w.createElement(
            R.a,
            null,
            c
              ? w.createElement(Ka.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Ga.a,
                  onAvatarClick: Xa,
                  onEntityClick: Xa,
                  onMediaClick: Xa,
                  onReplyContextClick: Xa,
                  replyContext: qa.a.ReplyContextTypes.None,
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
            w.createElement(
              R.a,
              { style: Za.replyUsersContainer },
              w.createElement(
                On.a,
                {
                  avatarCell: c ? w.createElement(R.a, { style: Za.conversationLine }) : null,
                  avatarCellStyle: Za.conversationLineContainer,
                  cellStyle: Za.repliesTextContainer,
                  style: Za.grid,
                },
                i
                  ? w.createElement(
                      P.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: c && Za.repliesMessage },
                      w.createElement(Ua, {
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
        Ja = n('Tb0w'),
        Qa = n('1YZw'),
        $a = n('pidX'),
        er = n('5oBF'),
        tr = n('JYYi'),
        nr = n('/Rsk'),
        ar = n('qlwE'),
        rr = n('XOJV'),
        or = n('G6rE'),
        ir = n('AspN'),
        sr = n('oEGd'),
        cr = n('hqKg'),
        lr = n('P1r1')
      function ur(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function dr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ur(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ur(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var pr = function (e) {
          return e.parentTweetId || (e.isInline ? tr.a.homeTimeline : tr.a.modal)
        },
        mr = function (e, t) {
          var n = pr(t)
          return q.l(e, n)
        },
        hr = function (e, t) {
          var n = pr(t)
          return q.m(e, n)
        },
        fr = function (e, t) {
          var n = pr(t)
          return q.k(e, n)
        },
        gr = function (e, t) {
          var n = xr(e, t),
            a = fr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? Y.b.select(e, r) : void 0
          return o ? o.name : void 0
        },
        yr = function (e, t) {
          var n = pr(t)
          return q.n(e, n)
        },
        vr = function (e, t) {
          var n = pr(t)
          return q.j(e, n)
        },
        br = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        _r = Object(cr.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          or.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        wr = function (e, t) {
          return t.parentTweetId || Cr(e, t) || Tr(e, t)
        },
        Cr = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Tr = br(function (e) {
          return e.inReplyToStatusId
        }),
        xr = function (e, t) {
          var n = wr(e, t)
          return n ? rr.a.selectHydrated(e, n) : void 0
        },
        Er = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Sr = br(function (e) {
          return e.hasArticleNudge
        }),
        Or = br(function (e) {
          return e.convoCardData
        }),
        Rr = br(function (e) {
          return e.externalMedia
        }),
        Ir = br(function (e) {
          return e.externalMediaFiles
        }),
        Pr = br(function (e) {
          return e.previewTweetId
        }),
        kr = br(function (e) {
          return e.defaultText
        }),
        Ar = function (e, t) {
          var n = kr(e, t),
            a = Object($a.a)(t.location)
          return (Er(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Dr = br(function (e) {
          return e.quotedStatusId
        }),
        jr = br(function (e) {
          return e.quotedStatus
        }),
        Mr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : jr(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Dr(e, t)
              return n ? rr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Nr = br(function (e) {
          return e.isSelfThreadReply
        }),
        Br = br(function (e) {
          return e.positionCursorAtBeginning
        }),
        Fr = br(function (e) {
          return e.promotedContent
        }),
        Lr = function () {
          return Object(cr.createSelector)(mr, Ar, Mr, ir.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return dr(
                dr({}, ((o = e).mediaIds, Be()(o, ['mediaIds']))),
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
        Vr = {
          addComposer: q.a,
          addToast: Qa.b,
          createLocalApiErrorHandler: Object(Q.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: q.b,
          deletePreviewTweet: er.c,
          fetchAutotaggedLocationIfNeeded: nr.a,
          fetchTweetIfNeeded: rr.a.fetchOneIfNeeded,
          removeComposer: q.f,
          resetDraft: q.g,
          retweet: rr.a.retweet,
          schedule: q.i,
          draftTweet: q.e,
          send: q.r,
          updateActiveComposerIndex: q.t,
          updateAudienceControlsValue: q.u,
          updateConvoCardState: Ja.b,
          preUploadMedia: ir.e,
          addMedia: ir.b,
          processMultipleMedia: ir.g,
          removeMediaUpload: ir.i,
          updateSingleComposer: q.x,
          setActiveParentKey: q.s,
          copyDataFromInlineComposerToModalComposer: q.c,
          copyDataFromInlineReplyComposerToModalComposer: q.d,
        },
        zr = Object(sr.e)(function () {
          return Object(cr.createStructuredSelector)({
            activeComposerIndex: vr,
            activeUser: _r,
            altTextNudgeType: lr.h,
            audienceControlsValue: fr,
            composerData: Lr(),
            dataSaverMode: lr.k,
            excludedRecipients: hr,
            externalMedia: Rr,
            externalMediaFiles: Ir,
            geoEnabled: lr.p,
            hasArticleNudge: Sr,
            inReplyToStatus: xr,
            inReplyToStatusId: wr,
            isIntentRoute: Er,
            isSelfThreadReply: Nr,
            isSending: yr,
            isSuperFollowsCreator: X.k,
            positionCursorAtBeginning: Br,
            loggedInUser: or.e.selectLoggedInUser,
            prepopulatedText: Ar,
            previewTweetId: Pr,
            promotedContent: Fr,
            scheduledFor: q.o,
            selectedCommunityName: gr,
            sendingProgress: q.p,
            convoCardData: Or,
            undoTweetSettings: ar.p,
            userLanguage: X.n,
            quotedStatusId: Dr,
          })
        }, Vr),
        Hr = n('45mF'),
        Wr = n('c0ZR'),
        Ur = n('W5XZ'),
        Gr = n('lsKC'),
        Kr = n('Drq4'),
        qr = n('I8M8'),
        Xr = n('eyty'),
        Zr = n('7myi'),
        Yr = n('7nmT'),
        Jr = n.n(Yr),
        Qr = n('vbWy'),
        $r = n('Rp9C'),
        eo = n('Q5Mu'),
        to = n('N5qz'),
        no = 'tweetButton',
        ao = 'tweetButtonInline',
        ro = Object(J.a)()
          .propsFromState(function () {
            return { loggedInUser: or.e.selectLoggedInUser }
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
        oo = n('cHvH'),
        io = n('sgih'),
        so = n('xKuM'),
        co = n('5Vk4'),
        lo = A.a.create(function (e) {
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
        uo = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return w.createElement(oo.a, null, function (e) {
            var s = e.windowWidth > A.a.theme.breakpoints.small
            return w.createElement(
              io.a,
              { onMaskClick: r, style: lo.sheetStyle, type: o, withMask: !0 },
              i &&
                w.createElement(so.a, {
                  leftControl: w.createElement(co.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              w.createElement(R.a, { style: [lo.mainCard, s ? lo.largeScreenCard : lo.smallScreenCard] }, n),
            )
          })
        },
        po = M.a.cb7c0987,
        mo = M.a.de3bcf27,
        ho = M.a.e710ce75,
        fo = M.a.h11e5910,
        go = M.a.b7ec04f3,
        yo = M.a.i62a03aa,
        vo = A.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        bo = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return w.createElement(
            uo,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            w.createElement(P.b, { size: 'title4', style: vo.itemPadding, weight: 'heavy' }, po),
            w.createElement(P.b, { color: 'gray700', style: vo.itemPadding }, mo),
            w.createElement(P.b, { color: 'gray700', style: vo.itemPadding }, ho),
            w.createElement(
              R.a,
              { style: vo.buttonContainer },
              w.createElement(P.b, { size: 'title4', style: vo.itemPadding, weight: 'heavy' }, fo),
              w.createElement(ce.a, { onPress: a, style: vo.itemPadding, type: 'brandOutlined' }, go),
              w.createElement(ce.a, { onPress: n, style: vo.itemPadding, type: 'brandOutlined' }, yo),
            ),
          )
        },
        _o = n('cm6r'),
        wo = A.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Co = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return w.createElement(_o.a, { interactiveStyles: null, onPress: a }, function (e) {
            return w.createElement(
              w.Fragment,
              null,
              w.createElement(ce.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: wo.button,
                type: 'primaryOutlined',
              }),
              w.createElement(P.b, { color: 'gray700' }, n),
            )
          })
        },
        To = n('sjK1'),
        xo = n('FDY4'),
        Eo = n('tevE'),
        So = n('jV+4'),
        Oo = n('UgB4'),
        Ro = n('TW8A'),
        Io = n('hiGS'),
        Po = n('WtWS'),
        ko = n('Lsrn'),
        Ao = n('k/Ka')
      function Do(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function jo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Do(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Do(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Mo = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ao.a)(
          'svg',
          jo(
            jo({}, e),
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
      Mo.metadata = { width: 24, height: 24 }
      var No = Mo,
        Bo = M.a.f3a7a80c,
        Fo = M.a.ge52d1de,
        Lo = M.a.h11e5910,
        Vo = M.a.abd845fd,
        zo = M.a.bea869b3,
        Ho = M.a.d96cf7cd,
        Wo = M.a.d3145da8,
        Uo = A.a.create(function (e) {
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
            thanksCheckMark: { color: A.a.theme.colors.primary, marginRight: e.spaces.space8 },
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
            a = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            s = e.onWeGotItWrong,
            c = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName
          return w.createElement(oo.a, null, function (e) {
            var p,
              m,
              h,
              f = e.windowWidth
            return w.createElement(
              uo,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: f > A.a.theme.breakpoints.medium,
              },
              w.createElement(No, { style: [Uo.profanityIcon, Uo.itemPadding] }),
              w.createElement(Eo.a, { size: 'title4', style: Uo.itemPadding, weight: 'heavy' }, Bo),
              w.createElement(P.b, { color: 'gray700', style: Uo.itemPadding }, Fo),
              w.createElement(
                R.a,
                { style: [Uo.tweetContainer, Uo.itemPadding] },
                w.createElement(
                  R.a,
                  { style: Uo.tweetContent },
                  w.createElement(So.a, { name: l, profileImageUrl: u, screenName: d, style: Uo.userName }),
                  w.createElement(
                    R.a,
                    { style: Uo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof To.c) r = e.mediaFile.thumbnail
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
                      return w.createElement(
                        R.a,
                        { style: Uo.photos },
                        w.createElement(xo.a, {
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
                    w.createElement(P.b, { style: Uo.textStyle }, c),
                  ),
                ),
              ),
              t
                ? w.createElement(
                    R.a,
                    { style: Uo.thanksContainer },
                    w.createElement(Po.a, { style: Uo.thanksCheckMark }),
                    w.createElement(P.b, { align: 'center', style: Uo.itemPadding }, Wo),
                  )
                : w.createElement(P.b, { align: 'center', onPress: s, style: Uo.itemPadding, withUnderline: !0 }, Lo),
              f > A.a.theme.breakpoints.small
                ? w.createElement(
                    R.a,
                    { style: Uo.buttonContainer },
                    w.createElement(ce.a, { onPress: o, style: Uo.itemPadding, type: 'brandFilled' }, Vo),
                    w.createElement(ce.a, { onPress: i, style: Uo.itemPadding, type: 'brandOutlined' }, zo),
                    w.createElement(ce.a, { onPress: a, style: Uo.itemPadding, type: 'destructiveText' }, Ho),
                  )
                : ((p = w.createElement(Oo.a, { style: { color: A.a.theme.colors.text } })),
                  (m = w.createElement(Ro.a, { style: { color: A.a.theme.colors.primary } })),
                  (h = w.createElement(Io.a, { style: { color: A.a.theme.colors.red500 } })),
                  w.createElement(
                    R.a,
                    { style: Uo.mobileButtonContainer },
                    w.createElement(Co, { icon: p, label: zo, onPress: i }),
                    w.createElement(Co, { icon: m, label: Vo, onPress: o }),
                    w.createElement(Co, { icon: h, label: Ho, onPress: a }),
                  )),
            )
          })
        },
        Ko = ro(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            o = e.onDismiss,
            i = e.onEditTweet,
            s = e.onSendTweet,
            c = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = w.useState(!1),
            m = ve()(p, 2),
            h = m[0],
            f = m[1],
            g = w.useState(!1),
            y = ve()(g, 2),
            v = y[0],
            b = y[1],
            _ = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: a }, element: r, page: o, section: 'dialog' })
            }
          return h
            ? w.createElement(bo, {
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
                hasSentFeedback: v,
                media: n,
                onDeleteTweet: function () {
                  _({ action: 'cancel', element: 'action', page: 'nudge' }), r()
                },
                onDismiss: function () {
                  _({ action: 'dismiss', element: 'action', page: 'nudge' }), o()
                },
                onEditTweet: function () {
                  _({ action: 'revise', element: 'action', page: 'nudge' }), i()
                },
                onSendTweet: function () {
                  _({ action: 'send', element: 'action', page: 'nudge' }), s()
                },
                onWeGotItWrong: function () {
                  _({ action: 'more_info', element: 'action', page: 'nudge' }),
                    _({ action: 'impression', page: 'nudge_more_info' }),
                    f(!0)
                },
                tweetText: c,
                userName: l,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        qo = n('eb3s'),
        Xo = n('JYMr'),
        Zo = n('sCk0'),
        Yo = n('3A2y'),
        Jo = n('zrOZ'),
        Qo = n('s1N3'),
        $o = n('4FGy'),
        ei = n('mN6z'),
        ti = n('rziq'),
        ni = n('jTgF')
      function ai(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function ri(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ai(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ai(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function oi(e) {
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var ii = M.a.d28215f0,
        si = M.a.ec909a54,
        ci = M.a.jd53409d,
        li = {
          singular: M.a.edae65de,
          plural: M.a.a859846a,
          oneOfMultiple: M.a.e90118f5,
          someOfMultiple: M.a.c211dcb1,
        },
        ui = { singular: M.a.d7c26bfb, plural: M.a.a75e3ccc },
        di = M.a.dcb7e3a0,
        pi = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = ui.singular), (t = r ? li.singular : li.oneOfMultiple))
              : ((n = ui.plural), (t = r ? li.plural : li.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(di)
          )
        },
        mi = M.a.c1bf53b0,
        hi = M.a.bb8170da,
        fi = M.a.dad5a4b8,
        gi = M.a.e65aed64,
        yi = M.a.bc2ceaf2,
        vi = M.a.d8222374,
        bi = M.a.j890123a,
        _i = M.a.bb01231c,
        wi = M.a.d4ab68e2,
        Ci = M.a.d8af8a4c,
        Ti = M.a.d09d4c05,
        xi = M.a.i2209530,
        Ei = M.a.bf9b89e4,
        Si = M.a.f277e949,
        Oi = M.a.b551cd22,
        Ri = M.a.f026a7fa,
        Ii = M.a.a5d4fda0,
        Pi = M.a.ib067d6a,
        ki = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Ai = { element: 'alt_text_prompt' },
        Di = { component: 'article_nudge' },
        ji = { viewType: 'send_tweet' },
        Mi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Ni = (function (e) {
          h()(n, e)
          var t = oi(n)
          function n(e, a) {
            var r, o
            return (
              c()(this, n),
              (o = t.call(this, e, a)),
              _()(p()(o), '_getParentKey', function () {
                var e = o.props,
                  t = e.isInline
                return e.parentTweetId || (t ? tr.a.homeTimeline : tr.a.modal)
              }),
              _()(p()(o), '_updateSingleComposer', function (e, t) {
                return (0, o.props.updateSingleComposer)({ updates: e, index: t, parentKey: o._getParentKey() })
              }),
              _()(p()(o), '_resetDraft', function () {
                ;(0, o.props.resetDraft)({ parentKey: o._getParentKey(), isPreview: o.isPreview })
              }),
              _()(p()(o), '_fetchAutotaggedLocationIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.fetchAutotaggedLocationIfNeeded)().catch(t())
              }),
              _()(p()(o), '_syncTexts', function () {
                var e = o.props.composerData,
                  t = o.state.textMap
                e.forEach(function (e, n) {
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && o._updateSingleComposer({ text: a }, n)
                })
              }),
              _()(p()(o), '_hasGif', function (e) {
                return (
                  e.gifMetadata ||
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isGif
                  })
                )
              }),
              _()(p()(o), '_hasPhoto', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isImage
                  })
                )
              }),
              _()(p()(o), '_hasVideo', function (e) {
                return (
                  e.media &&
                  e.media.some(function (e) {
                    return e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif
                  })
                )
              }),
              _()(p()(o), '_handleDeletePreviewTweet', function () {
                var e = o.props,
                  t = e.deletePreviewTweet,
                  n = e.previewTweetId
                n && t(n)
              }),
              _()(p()(o), '_handleAnimateComplete', function () {
                var e = o.props,
                  t = e.activeComposerIndex,
                  n = e.onHandleAppBarHeight,
                  a = Jr.a.findDOMNode(o._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    i = r.bottom,
                    s = r.top,
                    c = Math.max(s, window.scrollY)
                  if (c < window.pageYOffset || i > window.innerHeight) {
                    var l = n ? c - n() - 14 : c - 14,
                      u = Math.max(l, 0)
                    window.requestAnimationFrame(function () {
                      ki ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              _()(p()(o), '_handleFetchTweetIfNeeded', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.quotedStatus,
                  s = e.quotedStatusId
                !a && r && n(r).catch(t(Ur.a)), !i && s && n(s).catch(t(Ur.a))
              }),
              _()(p()(o), '_blockHistory', function (e, t) {
                var n = o.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  i = !r && /unsent/.test(e.pathname),
                  s = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return o.shouldShowDiscardConfirmation && 'POP' === t && s
                  ? (o.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : o._canSaveDraft && i && 'PUSH' === t
                  ? o.shouldShowDiscardConfirmation
                    ? (o.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: i }), !1)
                    : (o._resetDraft(), !0)
                  : o.shouldShowBackgroundSendConfirmation && 'POP' === t && s
                  ? (o._cancelAllMediaUploads(), !1)
                  : !('POP' === t && s && o._areComposersEmptyOrUnchanged && !Object(ut.a)(a)) || (o._resetDraft(), !0)
              }),
              _()(p()(o), '_getKeyCommandHandlers', function () {
                return o.state.typeaheadActive ? o._keyCommandHandlersForActiveTypeahead : o._keyCommandHandlers
              }),
              _()(p()(o), 'handleTweetOrRetweet', function () {
                if (
                  (o._scribe({ section: 'composition', element: 'send_tweet', action: 'click' }),
                  o._areComposersValid())
                )
                  return o.shouldShowAltTextPrompt
                    ? (o.setState({ showAltTextPrompt: !0 }), void o._scribe(ri(ri({}, Ai), {}, { action: 'show' })))
                    : o._handleTweetOrRetweet()
              }),
              _()(p()(o), '_handleTweetOrRetweet', function () {
                return o.isRetweet ? o._handleRetweet() : o._handleTweet()
              }),
              _()(p()(o), '_renderReplyContext', function () {
                var e = o.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  i = e.isSelfThreadReply,
                  s = e.selectedCommunityName
                if (a && o._shouldBeExpanded())
                  return w.createElement(Ya, {
                    communityName: s,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: o._handleViewRecipients,
                    shouldDisplayRepliesText: !i,
                    showParentTweet: !r,
                  })
              }),
              _()(p()(o), '_renderAltTextPrompt', function () {
                var e = o._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return w.createElement(qo.a, {
                  Icon: Kr.a,
                  cancelButtonLabel: hi,
                  confirmButtonLabel: mi({ numOfDescriptions: t }),
                  headline: ci,
                  onCancel: o._handleIgnoreAltTextPrompt,
                  onConfirm: o._handleAcceptAltTextPrompt,
                  onMaskClick: o._handleCancelAltTextPrompt,
                  text: pi({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(p()(o), '_renderToxicReplyNudge', function () {
                var e = o._getSingleComposerDataWithLatestText(o.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return w.createElement(Ko, {
                  media: n,
                  nudgeId: o.state.nudgeId,
                  onDeleteTweet: o._handleReplyNudgeDeleteTweet,
                  onDismiss: o._handleReplyNudgeDismiss,
                  onEditTweet: o._handleReplyNudgeEditTweet,
                  onSendTweet: o._handleReplyNudgeSendTweet,
                  tweetText: t,
                })
              }),
              _()(p()(o), '_handleReplyNudgeDeleteTweet', function () {
                o._hideToxicReplyNudge(), o._handleConfirmDiscardTweet()
              }),
              _()(p()(o), '_handleReplyNudgeDismiss', function () {
                o._hideToxicReplyNudge()
              }),
              _()(p()(o), '_handleReplyNudgeEditTweet', function () {
                o._hideToxicReplyNudge()
              }),
              _()(p()(o), '_handleReplyNudgeSendTweet', function () {
                o._hideToxicReplyNudge(), o._handleSendTweet()
              }),
              _()(p()(o), '_setRootRef', function (e) {
                e && (o._root = e)
              }),
              _()(p()(o), '_handleTweet', function () {
                var e = o.props.composerData[0].scheduledFor
                o.setState({ errorMessage: void 0 }),
                  e ? Object(dt.h)(e) && o._handleScheduleTweet() : o._checkToxicReplyAndSendTweet()
              }),
              _()(p()(o), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = o.props,
                    r = a.analytics,
                    i = a.createLocalApiErrorHandler
                  if (Object(ni.d)(n) && n.code === qr.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var s = Object(ni.b)(n)
                  if (s) return o.setState({ errorMessage: s }), Promise.resolve()
                  i(ri({}, t || Object(Hr.a)(void 0, !1)))(n)
                  var c = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  o.setState({ errorMessage: { text: c ? c.toast.text : Ii } })
                }
              }),
              _()(p()(o), '_handleScheduleTweet', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  i = e.schedule,
                  s = o._getSingleComposerDataWithLatestText(n[0])
                i({ excludedRecipients: a, inReplyToStatus: r, scheduleData: s })
                  .then(function (e) {
                    o.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(dt.c)(s.scheduledFor)
                    if (a) {
                      var r = Object(dt.b)(a),
                        i = Object(dt.i)(a),
                        c = Oi({ scheduleDate: r, scheduleTime: i })
                      t({ text: c, action: { label: Si, link: '/compose/tweet/unsent/scheduled' } }),
                        o._scribeTweetSent(n[0], ri(ri({}, e), {}, { id_str: e.scheduled_id_str }), { isScheduled: !0 })
                    }
                    o._updateConvoCardState(), o._close()
                  })
                  .catch(o._handleTweetError('schedule_tweet_cancel'))
              }),
              _()(p()(o), '_handleDraftTweet', function () {
                var e = o.props,
                  t = e.addToast,
                  n = e.composerData
                ;(0, e.draftTweet)({
                  excludedRecipients: e.excludedRecipients,
                  inReplyToStatus: e.inReplyToStatus,
                  draftData: o._getSingleComposerDataWithLatestText(n[0]),
                })
                  .then(function (e) {
                    o.setState({ showDiscardTweetConfirmation: !1 }),
                      t({ text: Ei, action: { label: Si, link: '/compose/tweet/unsent/drafts' } }),
                      o._scribeTweetSent(n[0], ri(ri({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      o._updateConvoCardState(),
                      o._close()
                  })
                  .catch(o._handleTweetError('draft_tweet_cancel', eo.a))
              }),
              _()(p()(o), '_checkToxicReply', function () {
                var e = o.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  i = e.parentTweetId,
                  s = t(
                    o._getSingleComposerDataWithLatestText(n[0]).text,
                    i || r,
                    null == a ? void 0 : a.conversation_id_str,
                  ).then(function (e) {
                    var t,
                      n,
                      a,
                      r,
                      i,
                      s =
                        null == e ||
                        null === (t = e.create_nudge) ||
                        void 0 === t ||
                        null === (n = t.nudge) ||
                        void 0 === n ||
                        null === (a = n.nudge_type) ||
                        void 0 === a
                          ? void 0
                          : a.__typename,
                      c =
                        null == e ||
                        null === (r = e.create_nudge) ||
                        void 0 === r ||
                        null === (i = r.nudge) ||
                        void 0 === i
                          ? void 0
                          : i.id
                    return c && o.setState({ nudgeId: c }), !!s
                  }),
                  c = new Promise(function (e, t) {
                    return setTimeout(e, 1e3, !1)
                  })
                return Promise.race([s, c])
              }),
              _()(p()(o), '_showToxicReplyNudge', function () {
                o._scribe({ page: 'nudge', section: 'dialog', action: 'impression' }, { nudge_id: o.state.nudgeId }),
                  o.setState({ showToxicReplyNudge: !0 })
              }),
              _()(p()(o), '_hideToxicReplyNudge', function () {
                return o.setState({ showToxicReplyNudge: !1 })
              }),
              _()(p()(o), '_checkToxicReplyAndSendTweet', function () {
                var e = o.props,
                  t = e.composerData,
                  n = e.isSelfThreadReply,
                  a = o.state.nudgeId
                if (
                  !(
                    !o._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    o.isReply &&
                    !n &&
                    o.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return o._handleSendTweet()
                o._checkToxicReply().then(function (e) {
                  if (!e) return o._handleSendTweet()
                  o._showToxicReplyNudge()
                })
              }),
              _()(p()(o), '_handleSendTweet', function () {
                var e = o.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
                  i = e.composeSemanticCoreId,
                  s = e.excludedRecipients,
                  c = e.hasArticleNudge,
                  l = e.history,
                  u = e.inReplyToStatus,
                  d = e.isSelfThreadReply,
                  p = e.location,
                  m = e.promotedContent,
                  h = e.selectedCommunityName,
                  f = e.send,
                  g = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  v = void 0 === y ? void 0 : y,
                  b = o.isPreview,
                  _ = o.props.composerData.map(function (e) {
                    return o._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(dt.c)(_[0].scheduledFor)
                if (w) {
                  var C = Object(dt.b)(w),
                    T = Object(dt.i)(w),
                    x = Oi({ scheduleDate: C, scheduleTime: T })
                  return n({ text: x, action: { label: Si, link: '' } }), void o._close()
                }
                if (
                  (s.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  o._conversationControlsCreationEnabled)
                )
                  if ('community' === g) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === g) {
                    var S = o._getSingleComposerDataWithLatestText(_[0]).text,
                      O = Object(E.d)(S)
                    a.scribe({
                      action: O ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === g && a.scribe({ action: 'send_my_followers_tweet' })
                var R = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  I = R ? '8.31.'.concat(R) : '',
                  P = i ? (R ? [i, I].join(',') : i) : I
                f({
                  sendData: _,
                  communityIdValue: R,
                  conversationControlsValue: g,
                  excludedRecipients: s,
                  exclusivityControlValue: v,
                  inReplyToStatus: u,
                  isSelfThreadReply: d,
                  promotedContent: m,
                  composeSemanticCoreId: P,
                  isPreview: b,
                })
                  .then(function (e) {
                    b || o.setState({ tweetsSentOrScheduled: !0 }),
                      e.map(function (e, t) {
                        return o._scribeTweetSent(_[t], e, { hasArticleNudge: c })
                      }),
                      e.length > 1 && o._scribeThreadSent(_, e, 'thread_send_success')
                    var a = e.length > 1 ? gi : fi
                    if (R && h) {
                      var r = h,
                        i = e.length
                      a = si({ numOfTweets: i, communityName: r })
                    }
                    var s = b && o.isReply
                    if (s || !b) {
                      var l = s ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: s ? yi : a,
                        action: { label: Si, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
                      })
                    }
                    o.isInlineReply && o.setState({ focused: !1 }), o._updateConvoCardState(), o._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      i = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      s = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      d = { message: e.type, event_info: i ? ''.concat(i) : void 0, status_code: u, url: s }
                    throw (
                      (r.map(
                        function (e, t) {
                          return o._scribeTweetSent(_[t], e)
                        },
                        { hasArticleNudge: c },
                      ),
                      (Object(ni.d)(e) && e.code === qr.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: d }),
                      _.length > 1 && o._scribeThreadSent(_, r, 'thread_send_failure'),
                      r.length &&
                        l.replace({
                          pathname: p.pathname,
                          state: ri(
                            ri({}, Object(Yo.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(o._handleTweetError('send_tweet_cancel', eo.a))
              }),
              _()(p()(o), '_setActiveParentKey', function () {
                ;(0, o.props.setActiveParentKey)(o._getParentKey())
              }),
              _()(p()(o), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  i = n.isDraftTweet,
                  s = void 0 !== i && i,
                  c = n.isScheduled,
                  l = void 0 !== c && c,
                  u = o.state.nudgeId,
                  d = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  m = s ? p : l ? d : 'send_',
                  h = { items: [$r.a.getTweetItem(t)] },
                  f = e.pollActive && e.pollValid,
                  g = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
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
                  v = o.props.isInline ? 'inline_reply' : 'tweet_box_dialog'
                if (
                  (o._scribe({ action: ''.concat(m, 'tweet') }, h),
                  s || !e.draftTweetId || e.scheduledTweetId || o._scribe({ action: ''.concat(m, 'draft_tweet') }, h),
                  o.isQuoteTweet &&
                    (o._scribe({ action: 'retweet_with_comment' }, h),
                    r && o._scribe(ri(ri({}, Di), {}, { element: 'result', action: 'retweet_with_comment' }), h)),
                  o.isReply && o._scribe({ component: v, action: ''.concat(m, 'reply') }, h),
                  f && o._scribe({ action: ''.concat(m, 'poll_tweet') }, h),
                  o._hasPhoto(e) &&
                    (o._scribe({ action: ''.concat(m, 'photo_tweet') }, h),
                    g && o._scribe({ action: ''.concat(m, 'photo_tweet_with_alt_text') }, h)),
                  o._hasVideo(e) && o._scribe({ action: ''.concat(m, 'video_tweet') }, h),
                  y.size)
                ) {
                  var b = o._hasPhoto(e) ? 'photo' : 'video'
                  y.forEach(function (e) {
                    o._scribe({ action: ''.concat(m).concat(b, '_tweet_with_').concat(e, '_warning') }, h)
                  })
                }
                var _ = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    o.isReply &&
                    !l &&
                    (s
                      ? o._scribe(ri(ri({}, _), {}, { action: 'save' }), { nudge_id: u })
                      : o._scribe(ri(ri({}, _), {}, { action: 'sent' }), { nudge_id: u })),
                  u || s || !o.isReply || l || o._scribe(ri(ri({}, _), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var w = t.id_str && $r.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  o._scribe({ element: 'remote', action: ''.concat(m, 'gif_tweet') }, { items: w ? [w] : [] })
                  var C = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(g || C) &&
                    o._scribe(
                      { element: 'remote', action: ''.concat(m, 'gif_tweet_with_alt_text') },
                      { event_info: g ? 'user_entered' : 'from_provider', items: w ? [w] : [] },
                    )
                } else o._hasGif(e) && (o._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet') }, h), g && o._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet_with_alt_text') }, h))
              }),
              _()(p()(o), '_scribeThreadSent', function (e, t, n) {
                var a = o.props.inReplyToStatus,
                  r = { items: [$r.a.getSendThreadItem(e, t.length, !!a)] }
                o._scribe({ action: n }, r)
              }),
              _()(p()(o), '_scribeRetweet', function (e) {
                var t = o.props.hasArticleNudge,
                  n = { items: [$r.a.getTweetItem(e)] }
                o._scribe({ action: 'retweet' }, n),
                  t && o._scribe(ri(ri({}, Di), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(p()(o), '_handleRetweet', function () {
                var e = o.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (o._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    o.setState({ tweetsSentOrScheduled: !0 }), o._close()
                  }, n(Qr.a)))
              }),
              _()(p()(o), 'handleDismissComposer', function () {
                o.shouldShowDiscardConfirmation
                  ? o.setState({ showDiscardTweetConfirmation: !0 })
                  : o.shouldShowBackgroundSendConfirmation
                  ? o._cancelAllMediaUploads()
                  : o._close()
              }),
              _()(p()(o), '_cancelAllMediaUploads', function () {
                o.props.composerData.forEach(function (e) {
                  return e.media.forEach(function (e) {
                    return e.uploading && e.uploader && e.uploader.cancel()
                  })
                })
              }),
              _()(p()(o), '_handleConfirmDiscardTweet', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.hasArticleNudge,
                  a = o._canSaveDraft ? 'draft' : 'send'
                o.setState({ showDiscardTweetConfirmation: !1 }),
                  o._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && o._scribe(ri(ri({}, Di), {}, { element: 'result', action: 'cancel' })),
                  o.state.nudgeId &&
                    o._scribe(
                      { page: 'nudge', section: 'dialog', element: 'result', action: 'cancel' },
                      { nudge_id: o.state.nudgeId },
                    )
              }),
              _()(p()(o), '_handleCancelDiscardTweet', function () {
                o.setState({ showDiscardTweetConfirmation: !1 }, function () {
                  o._restoreFocusToActiveComposer()
                })
              }),
              _()(p()(o), '_handleAcceptAltTextPrompt', function () {
                o.setState({ showAltTextPrompt: !1 })
                var e = o.props.history,
                  t = o._getAltTextMetadata().noDescriptionImageIDs
                t[0] &&
                  (o._scribe(ri(ri({}, Ai), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              _()(p()(o), '_handleIgnoreAltTextPrompt', function () {
                o._scribe(ri(ri({}, Ai), {}, { action: 'declined' })),
                  o.setState({ showAltTextPrompt: !1 }),
                  o._handleTweetOrRetweet()
              }),
              _()(p()(o), '_handleCancelAltTextPrompt', function () {
                o._scribe(ri(ri({}, Ai), {}, { action: 'cancel' })),
                  o.setState({ showAltTextPrompt: !1 }, function () {
                    o._restoreFocusToActiveComposer()
                  })
              }),
              _()(p()(o), '_restoreFocusToActiveComposer', function () {
                var e = o.props.activeComposerIndex
                void 0 !== e && o._composerRefs[e] && o._composerRefs[e].focus()
              }),
              _()(p()(o), '_close', function () {
                var e = o.props,
                  t = e.history,
                  n = e.isSending,
                  a = e.onCloseComposer
                n || o._resetDraft(),
                  o.state.navigatingToOutbox
                    ? o._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
              }),
              _()(p()(o), '_handleComposerFocus', function (e) {
                o._composerRefs[e]
                  ? o.props.updateActiveComposerIndex(e)
                  : setTimeout(function () {
                      o._restoreFocusToActiveComposer()
                    }, 0)
              }),
              _()(p()(o), '_handleFocus', function () {
                o.state.focused ||
                  (o.isInlineReply && o._scribe({ element: 'inline_reply', action: 'reply' }),
                  o.setState({ focused: !0 }))
              }),
              _()(p()(o), '_handleTypeaheadStateChange', function (e) {
                o.setState({ typeaheadActive: e })
              }),
              _()(p()(o), '_handleRemoveComposer', function () {
                var e = o.props,
                  t = e.activeComposerIndex,
                  n = e.composerData,
                  a = e.history,
                  r = e.location,
                  i = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(Yo.a)(r.state || {}, 'quotedStatus') }),
                  i(),
                  setTimeout(o._restoreFocusToActiveComposer)
              }),
              _()(p()(o), '_handleViewRecipients', function () {
                var e = o.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                o._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              _()(p()(o), '_handleTextChange', function (e, t) {
                var n = o.state.textMap,
                  a = o.props,
                  r = a.activeComposerIndex,
                  i = a.isInline,
                  s = a.setValidity
                if (
                  (o.setState({ textMap: ri(ri({}, n), {}, _()({}, t, e)) }, function () {
                    s && s(o._areComposersValid())
                  }),
                  o.setState({ errorMessage: void 0 }),
                  gt.b.isIOS())
                ) {
                  var c = i ? 0 : r
                  o._updateSingleComposer({ text: e }, c)
                }
              }),
              _()(
                p()(o),
                '_handleTextOnBlur',
                Object(Qn.a)(function (e, t) {
                  return function () {
                    var n = o.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      i = o.props.composerData,
                      s = a[e],
                      c = i.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof s && !r && c && o._updateSingleComposer({ text: s }, t)
                  }
                }),
              ),
              _()(p()(o), '_updateAudienceControlsValue', function (e) {
                var t = o.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = o.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!o._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!o._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (o._updateSingleComposer({ pollActive: !1 }, 0), o.setState({ errorMessage: { text: ii } })),
                      (null == r ? void 0 : r.text) === ii && o.setState({ errorMessage: void 0 })
                }
                a(e, o._getParentKey())
              }),
              _()(p()(o), '_renderProgressBar', function () {
                var e = o.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return w.createElement(Xo.a, { progress: t ? Math.max(n, 0.02) : 0, style: Bi.progressBar })
              }),
              _()(p()(o), '_updateConvoCardState', function () {
                var e = o.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              _()(p()(o), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(Wr.a)(e)
                    }),
                  ).then(o._handleAddMediaFiles(e))
                }
              }),
              _()(p()(o), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
                    i = o.props,
                    s = i.addMedia,
                    c = i.addToast,
                    l = i.composerData,
                    u = i.dataSaverMode,
                    d = i.preUploadMedia,
                    p = i.processMultipleMedia,
                    m = i.removeMediaUpload,
                    h = l[e],
                    f = h.pollActive,
                    g =
                      ((null === (a = o.context) || void 0 === a || null === (r = a.userClaims) || void 0 === r
                        ? void 0
                        : r.isTrueAndEnabled('subscriptions_long_video_upload')) &&
                        gt.b.isDesktopOS()) ||
                      !1
                  f ||
                    s(t, { location: Xr.d.Tweet, canUploadLongVideo: g }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(h, t)) {
                        var r = h.media.map(function (e) {
                          return e.id
                        })
                        o._updateSingleComposer({ mediaIds: Object(Qo.a)(r.concat(a)) }, e),
                          p(t, { onFailure: o._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else c({ text: Pi }), m(a)
                    })
                }
              }),
              _()(p()(o), '_handleMediaRemoveFactory', function (e) {
                return function (t) {
                  return o._handleMediaRemove(e, t)
                }
              }),
              _()(p()(o), '_handleMediaRemove', function (e, t) {
                var n = o.props,
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  i = a[e],
                  s = i.media,
                  c = i.mediaTags,
                  l = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object($o.a)(e, n)
                  })(
                    s.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = l.length > 0 ? c : []
                o._updateSingleComposer({ mediaIds: l, gifMetadata: void 0, mediaTags: u }, e),
                  r(t),
                  o.setState({ errorMessage: void 0 })
              }),
              _()(p()(o), '_setComposerRef', function (e) {
                return function (t) {
                  o._composerRefs[e] = t
                }
              }),
              _()(p()(o), '_shouldBeExpanded', function () {
                var e = o.props,
                  t = e.composerData,
                  n = e.parentTweetId
                if (o.state.focused) return !0
                var a = !Object(ut.c)(o._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              _()(p()(o), '_areComposersValid', function () {
                var e = o.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  i = 'community_members' === t
                return (
                  (o.isRetweet && !r && !i) ||
                  n.every(function (e) {
                    return Object(ut.e)(o._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(p()(o), '_areComposersEmptyOrUnchanged', function () {
                var e = o.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(ut.d)(o._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(p()(o), '_getAltTextMetadata', function () {
                var e = o.props.composerData,
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
              _()(p()(o), '_getSingleComposerDataWithLatestText', function (e) {
                var t = o.state.textMap
                return 'string' == typeof t[e.key] ? ri(ri({}, e), {}, { text: t[e.key] }) : e
              }),
              (o.state = {
                focused: !1,
                showAltTextPrompt: !1,
                showDiscardTweetConfirmation: !1,
                showToxicReplyNudge: !1,
                textMap: {},
                tweetsSentOrScheduled: !1,
                typeaheadActive: !1,
                shouldDisableButton: !1,
              }),
              (o._composerRefs = {}),
              (o._conversationControlsCreationEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression(
                  'conversation_controls_limited_replies_creation_enabled',
                )),
              (o._throttledSyncTexts = Object($n.a)(o._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (o._keyCommandHandlers =
                ((r = {}), _()(r, ti.b, o.handleTweetOrRetweet), _()(r, ti.a, o.handleDismissComposer), r)),
              (o._keyCommandHandlersForActiveTypeahead = _()({}, ti.b, o.handleTweetOrRetweet)),
              (o._isAltTextNudgeEnabled =
                !0 ===
                o.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_alt_text_nudges_enabled')),
              (o._isCommunitiesEnabled = o.context.featureSwitches.isTrue('c9s_enabled')),
              o
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
                    a = e.externalMediaFiles,
                    r = e.history,
                    o = e.isInline,
                    i = e.isIntentRoute,
                    s = e.location,
                    c = e.prepopulatedText,
                    l = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    c || (t && t.cardUrl))
                  ) {
                    var u = ri({}, null)
                    c && (u.text = c), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(c || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !i &&
                    r.replace({
                      query: Object($a.b)(s.query),
                      search: '',
                      pathname: s.pathname,
                      state: Object(Yo.a)(Object($a.b)(s.state || {}), [
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
                    a = n.addToast,
                    r = n.composerData,
                    o = n.copyDataFromInlineReplyComposerToModalComposer,
                    i = n.externalMedia,
                    s = n.externalMediaFiles,
                    c = n.onRef,
                    l = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== c && e.onRef(void 0),
                    c && c !== e.onRef && c(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Ri }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : s.length > 0 && s !== e.externalMediaFiles && this._handleAddMediaFiles(0)(s),
                    d && !Object(ei.a)(r, e.composerData) && d && d(this._areComposersValid()),
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
                    a = this.props,
                    o = a.activeUser,
                    i = a.addComposer,
                    s = a.addToast,
                    c = a.audienceControlsValue,
                    l = a.composeHeader,
                    u = a.composerData,
                    d = a.copyDataFromInlineComposerToModalComposer,
                    p = a.customizePropsForSingleComposerItem,
                    m = a.geoEnabled,
                    h = a.history,
                    f = a.inReplyToStatus,
                    g = a.isInline,
                    y = a.isModal,
                    v = a.isSelfThreadReply,
                    b = a.isSending,
                    _ = a.isSuperFollowsCreator,
                    C = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    x = a.richTextInputContext,
                    E = a.scheduledFor,
                    S = a.typeaheadWrapper,
                    O = a.userLanguage,
                    I = a.windowWidth,
                    P = this.state,
                    k = P.errorMessage,
                    A = P.focused,
                    D = P.shouldDisableButton,
                    j = P.showAltTextPrompt,
                    M = P.showDiscardTweetConfirmation,
                    N = P.showToxicReplyNudge,
                    B = P.typeaheadActive,
                    F = !y && B,
                    L = g ? 0 : this.props.activeComposerIndex,
                    V = F || g ? [u[L]] : u,
                    z = this._areComposersValid(),
                    H = this.hasNonCompliantQuote && this.isRetweet,
                    W = g ? R.a : Zo.a,
                    U = g ? {} : { onAnimateComplete: y ? void 0 : this._handleAnimateComplete },
                    G = D || !z || H || this.isCommunityTweetFromProtectedUser,
                    K = (g && to.a.isOneColumnSquishedLayout(I)) || this.isCommunityTweet,
                    q = (g && to.a.isOneColumnSquishedLayout(I)) || this.isCommunityTweet || this.isExclusiveTweet
                  return w.createElement(
                    R.a,
                    { ref: this._setRootRef, style: !C && Bi.root },
                    g ? this._renderProgressBar() : null,
                    k &&
                      w.createElement(
                        R.a,
                        { style: Bi.inlineCallout },
                        w.createElement(Pe.a, {
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
                    w.createElement(
                      R.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Bi.content, C && Bi.contentInlineReply, y && Bi.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      l,
                      w.createElement(
                        W,
                        U,
                        V.map(function (e, t) {
                          var a = Object(dt.h)(e.scheduledFor),
                            l = u.indexOf(e),
                            C = p(e, t, V),
                            P =
                              y || g
                                ? w.createElement(
                                    ce.a,
                                    {
                                      behavioralEventContext: ji,
                                      disabled: G,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Bi.inlineSendButton,
                                      testID: y ? no : ao,
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
                            k = n._getSingleComposerDataWithLatestText(e)
                          return w.createElement(
                            R.a,
                            { key: e.key },
                            w.createElement(
                              Ba,
                              r()(
                                {
                                  addToast: s,
                                  additionalToolbarContent: P,
                                  audienceControlsValue: c,
                                  autoFocus: n.isInlineReply && A,
                                  data: k,
                                  disableAddTweet: u.length >= 25,
                                  editable: !b && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: m,
                                  hidePoll: K,
                                  hideScheduling: q,
                                  history: h,
                                  index: l,
                                  isActive: l === L && !b,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: g,
                                  isInlineReply: n.isInlineReply,
                                  isLast: g || l === u.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: _,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: g ? d : i,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(k.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: x,
                                  scheduledFor: E,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: B,
                                  typeaheadWrapper: S,
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
                          ? w.createElement(qo.a, {
                              cancelButtonLabel: wi,
                              confirmButtonLabel: xi,
                              headline: Ci,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Ti,
                            })
                          : w.createElement(qo.a, {
                              confirmButtonLabel: wi,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? bi : vi,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: _i,
                            })
                        : null,
                      j ? this._renderAltTextPrompt() : null,
                      N ? this._renderToxicReplyNudge() : null,
                      w.createElement(R.a, { style: b && Bi.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(ri(ri({}, e), {}, { data: t }))
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
                    ? Mi.Quote
                    : this.isThread
                    ? Mi.Thread
                    : this.isReply
                    ? Mi.Reply
                    : Mi.Original
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
      _()(Ni, 'defaultProps', {
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
        typeaheadWrapper: Zr.a,
      }),
        _()(Ni, 'contextType', oe.a),
        _()(Ni, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(E.c)(n.concat(t))
        })
      var Bi = A.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: ri({}, A.a.absoluteFillObject),
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
      t.a = Object(Ge.a)(zr(Ni))
    },
    lsKC: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('3XMw'),
        r = n.n(a),
        o = r.a.g34f2c63,
        i = r.a.f70a36d0,
        s = r.a.d17df547,
        c = r.a.h735a98d,
        l = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? c : t ? s : e.isThread ? i : o({ verb: '' })
        }
    },
    nV1z: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n('Lsrn'),
        s = n('k/Ka')
      function c(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
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
    pidX: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      })
      var a = n('ddV6'),
        r = n.n(a),
        o = (n('z84I'), n('7x/C'), n('DZ+c'), n('7xRU'), n('Ysgh'), n('KqXw'), n('LW0h'), n('2G9S'), n('3XMw')),
        i = n.n(o),
        s = n('3A2y'),
        c = i.a.b2e94283,
        l = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = l.map(function (e) {
            return t[e] || n[e]
          }),
          o = r()(a, 6),
          i = o[0],
          s = o[1],
          u = o[2],
          d = o[3],
          p = o[4],
          m = o[5],
          h = [
            i,
            s && '@'.concat(s.toString()),
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
            m && c({ viaScreenName: m }),
          ]
            .filter(Boolean)
            .join(' ')
        return h ? ''.concat(h).concat(' ') : void 0
      }
      var u = function (e) {
        return Object(s.a)(e, l)
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
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        m = n('AuHH'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        y = (n('2G9S'), n('z84I'), n('DfhM'), n('ERkP')),
        v = n('zfvc'),
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var x = (function (e) {
        u()(n, e)
        var t = T(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(c()(e), 'state', {
              isAnimating: !1,
              renderChildren: y.Children.toArray(e.props.children).map(function (e) {
                return { status: C.static, child: e }
              }),
            }),
            g()(c()(e), '_handleEachAnimateComplete', function () {
              var t = e.state.isAnimating,
                n = e.props,
                a = n.children,
                r = n.onAnimateComplete
              t &&
                (r && r(),
                e.setState({
                  renderChildren: y.Children.toArray(a).map(function (e) {
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
                    return y.createElement(
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
                            var s = Object(w.a)(t, function (e) {
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
                    y.Children.toArray(e.children),
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
      })(y.Component)
      t.a = x
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        o = n('N9G2'),
        i = n('tJVe'),
        s = n('i7Kn'),
        c = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t.length),
              a = c(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : s(e))), a
          },
        },
      )
    },
    x8Sc: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'InlineComposeContainer', function () {
          return l
        })
      var a = n('ERkP'),
        r = n('h5NW'),
        o = n('MWbm'),
        i = n('7N4s'),
        s = n('cHvH'),
        c = n('rHpw'),
        l = function (e) {
          var t = e.history,
            n = e.location,
            c = e.parentTweetId,
            l = e.replyPressToggle,
            d = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = a.useContext(i.a).isModal
          return a.createElement(s.a, null, function (e) {
            var i = e.windowWidth
            return a.createElement(
              o.a,
              { style: u.root },
              a.createElement(r.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: n,
                parentTweetId: c,
                replyPressToggle: l,
                richTextInputContext: d,
                typeaheadWrapper: p,
                windowWidth: i,
              }),
            )
          })
        },
        u = c.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = l
    },
    yTN1: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n('WOwf'),
        o = n('3XMw'),
        i = n.n(o),
        s = n('k6Ei'),
        c = n('rHpw'),
        l = n('+/1j'),
        u = n('MWbm'),
        d = i.a.c2fc878c,
        p = i.a.db11b27f,
        m = function (e) {
          return e
        },
        h = c.a.create(function (e) {
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
          y = g >= 0 ? p({ count: i(g) }) : d({ count: i(t - n) }),
          v =
            t >= f
              ? a.createElement(
                  l.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: c.a.visuallyHidden },
                  y,
                )
              : null,
          b = Object(r.a)(g, n),
          _ = t >= n ? 'red500' : t >= f ? 'yellow500' : 'primary',
          w = a.createElement(s.a, {
            color: _,
            progress: b,
            size: t >= f ? 30 : 20,
            style: [h.progressCircle, g <= -10 && h.hide],
          }),
          C = t >= f ? a.createElement(l.a, { style: [h.text, g > 0 ? h.gray700 : h.red500] }, i(g)) : null
        return a.createElement(
          u.a,
          { style: [h.root, h.center] },
          v,
          w,
          a.createElement(u.a, { style: [c.a.absoluteFill, h.center] }, C),
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
        c = n.n(s),
        l = n('ERkP'),
        u = (n('5BYb'), n('uFXj'), n('H7Rt')),
        d = n('3XMw'),
        p = n.n(d),
        m = n('MWbm'),
        h = n('t62R'),
        f = n('CKsB'),
        g = n('/yvb'),
        y = n('rHpw'),
        v = n('Zg3A'),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        _ = n.n(b),
        w = n('Lsrn'),
        C = n('k/Ka')
      function T(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function x(e) {
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
      var E = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(C.a)(
          'svg',
          x(
            x({}, e),
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
      E.metadata = { width: 24, height: 24 }
      var S = E,
        O = n('boUI'),
        R = n('EweD'),
        I = p.a.g6185a9e,
        P = p.a.g2d04222,
        k = p.a.baffe39a,
        A = p.a.af293dc2,
        D = p.a.h1053f7e,
        j = p.a.bf994ab2,
        M = p.a.cf7f7e39,
        N = p.a.cfd2f35d,
        B = y.a.create(function (e) {
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
            a = e.dismiss,
            r = e.isModal,
            o = e.midConversationTweet,
            i = e.value,
            s = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            c = !!o,
            d =
              c &&
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
            p = D
          return (
            d ? (p = j) : c && (p = M),
            l.createElement(
              m.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [B.root, r ? B.modal : B.popover],
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
                  Icon: v.a,
                  actionText: k,
                  isSelected: u.a.all === i,
                  onClick: s(u.a.all),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                l.createElement(f.a, {
                  Icon: S,
                  actionText: A,
                  isSelected: u.a.community === i,
                  onClick: s(u.a.community),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                l.createElement(f.a, {
                  Icon: d ? O.a : R.a,
                  actionText: p,
                  isSelected: u.a.by_invitation === i,
                  onClick: s(u.a.by_invitation),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? l.createElement(
                      g.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: B.cancelButton,
                        type: 'primaryOutlined',
                      },
                      N,
                    )
                  : null,
              ),
            )
          )
        },
        L = n('OiMc'),
        V = n('efqG')
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          o = e.disabled,
          s = l.useState(!1),
          u = c()(s, 2),
          d = u[0],
          p = u[1],
          m = l.useCallback(function () {
            return p(!0)
          }, []),
          h = l.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (d ? L.a.VISIBILITY_BEHAVIOR.forceVisible : L.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return l.createElement(
          V.a,
          {
            disabled: o,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = i()(e, ['children', 'controlled'])
              return l.createElement(F, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
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
    zmS9: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n('3XMw'),
        o = n.n(r),
        i = n('J0mu'),
        s = n('t62R'),
        c = n('rHpw'),
        l = n('QbaN'),
        u = o.a.bfb895b1,
        d = c.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          r = Object(l.c)(n),
          o = !!r && Object(l.h)(n) && !Object(l.g)(r) && !Object(l.f)(r),
          c = Boolean(t)
        return r && o
          ? a.createElement(
              s.b,
              { color: 'gray700', onPress: t, size: 'subtext2', withInteractiveStyling: c },
              a.createElement(i.a, { style: d.icon }),
              u({ date: Object(l.b)(r), time: Object(l.i)(r) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
