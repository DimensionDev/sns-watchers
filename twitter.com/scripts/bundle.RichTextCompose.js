;(window.webpackJsonp = window.webpackJsonp || []).push([
  [81, 76],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return g
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
      var f = 'placePicker',
        h = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        y = Object.freeze({ initial: { fetchStatus: i.a.NONE }, lastSearch: { fetchStatus: i.a.NONE } })
      var g = function (e) {
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
        C = function (e) {
          var t,
            n = g(e)
          if (n)
            return null == (t = n)
              ? void 0
              : t.places.find(function (e) {
                  return (null == t ? void 0 : t.autotag_place_id) === e.place.id
                })
        },
        w = function (e, t) {
          return function (n, r, a) {
            var i = a.api
            return Object(o.b)(n, { request: i.Places.search, params: e })({
              actionTypes: h,
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
              w(
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
            var r = v(t()),
              a = g(t())
            if (r === i.a.LOADING || a) return Promise.resolve()
            var o = Object(u.d)(t())
            return o
              ? e(
                  w(
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
        x = function () {
          return function (e, t, n) {
            n.api
            return Object(l.l)(t()) && Object(u.c)(t()) === c.b.granted
              ? e(Object(u.b)())
                  .then(function () {
                    return e(E())
                  })
                  .then(function () {
                    return C(t())
                  })
              : Promise.resolve()
          }
        }
      s.a.register(
        a()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case h.REQUEST:
              var n = t.meta.resultSet
              return m(m({}, e), {}, a()({}, n, { fetchStatus: i.a.LOADING }))
            case h.FAILURE:
              var r = t.meta.resultSet
              return m(m({}, e), {}, a()({}, r, { fetchStatus: i.a.FAILED }))
            case h.SUCCESS:
              var o = t.meta.resultSet,
                c = t.payload
              return m(m({}, e), {}, a()({}, o, { fetchStatus: i.a.LOADED, results: c }))
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
      var r = n('pcjM'),
        a = n('ORQL')
      t.default = Object(a.a)(r.default)
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        m = n('ERkP'),
        f = n('rHpw'),
        h = n('MWbm')
      function y(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var g = (function (e) {
          s()(n, e)
          var t = y(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
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
                  return m.createElement(h.a, { style: v.root })
                },
              },
            ]),
            n
          )
        })(m.Component),
        v = f.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = g
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
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        m = n('ERkP'),
        f = n('3XMw'),
        h = n.n(f),
        y = n('rHpw'),
        g = n('+/1j'),
        v = n('MWbm')
      function b(e) {
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
            r = p()(e)
          if (t) {
            var a = p()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var _ = h.a.e5b0063d,
        C = 0,
        w = (function (e) {
          s()(n, e)
          var t = b(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(C)), (C += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = _({ title: n })
                  return m.createElement(
                    v.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.createElement(
                      g.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.createElement(v.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.Component)
      t.a = w
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
        f = n.n(m),
        h = n('AuHH'),
        y = n.n(h),
        g = n('KEM+'),
        v = n.n(g),
        b = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n('t62R'),
        C = n('piX5'),
        w = n('4r2z'),
        T = n('FG+G'),
        E = n('rHpw'),
        x = (n('aWzz'), n('k/Ka')),
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
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
      var D = b.forwardRef(function (e, t) {
          return Object(x.a)('select', P(P({}, e), {}, { ref: t }))
        }),
        k = function (e) {
          return Object(x.a)('option', e)
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
              v()(u()(r), '_selectRef', b.createRef()),
              v()(u()(r), 'state', { isFocused: !1 }),
              v()(u()(r), '_handleChange', function (e) {
                var t = r.props,
                  n = t.onChange,
                  a = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  c = o.value
                n && n(c, i - (a ? 1 : 0))
              }),
              v()(u()(r), '_handleBlur', function (e) {
                var t = r.props.onBlur
                r.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(r), '_handleFocus', function (e) {
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
                    f =
                      'ja' === m
                        ? E.a.theme.fontFamilies.japan
                        : S.a.getConstants().isRTL || w.a.isLocaleRTL(m)
                        ? E.a.theme.fontFamilies.rtl
                        : E.a.theme.fontFamilies.normal,
                    h = void 0 === o ? !!r : o,
                    y = new Set()
                  r && y.add(this._errorID), t && y.add(t), i && y.add(this._helperID)
                  var g = y.size ? a()(y).join(' ') : void 0
                  return b.createElement(
                    b.Fragment,
                    null,
                    b.createElement(
                      O.a,
                      {
                        style: [
                          C.a.border,
                          M.container,
                          n && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          h && C.a.invalidBorderColor,
                          p && h && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      b.createElement(
                        D,
                        {
                          accessibilityDescribedBy: g,
                          accessibilityInvalid: h,
                          accessibilityLabelledBy: this._labelID,
                          disabled: n,
                          nativeID: this._id,
                          onBlur: this._handleBlur,
                          onChange: this._handleChange,
                          onFocus: this._handleFocus,
                          ref: this._selectRef,
                          style: [M.select, { fontFamily: f }, n && C.a.disabled],
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
                        style: [M.dropdownCaret, p && C.a.validColor, (o || r) && C.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    h && r ? this._renderErrorText() : null,
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
      v()(j, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (j.propTypes = {})
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
    FS1z: function (e, t, n) {
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        v = n('rxPX'),
        b = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        C = function (e, t) {
          return t.module.selectItems(e)
        },
        w = Object(v.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: C }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        T = n('v//M'),
        E = n('sIe2'),
        x = n('3XMw'),
        S = n.n(x),
        O = n('TEoO')
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var I = S.a.i9028824,
        P = 'sliceTimeline',
        D = function (e) {
          return e
        },
        k = { viewType: 'timeline' },
        A = (function (e) {
          u()(n, e)
          var t = R(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  c = t.renderer,
                  s = t.withoutHeadroom
                return !r || o < 1
                  ? null
                  : 1 === o
                  ? g.createElement(O.a, {
                      cacheKey: P,
                      footer: n,
                      identityFunction: D,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : g.createElement(E.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: D,
                      numColumns: o,
                      renderItem: c,
                    })
              }),
              y()(s()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              y()(s()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetch,
                  o = t.fetchIfNeeded
                ;(n ? a : o)().catch(r())
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
                    r = e.retryMessage
                  return n
                    ? g.createElement(T.a, {
                        accessibilityLabel: I,
                        behavioralEventContext: k,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: r,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(A, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var j = w(A)
      t.a = j
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
    ORQL: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('RH6X'),
        c = n('rziq'),
        s = n('hHEM'),
        l = n('keCP'),
        u = {
          convertEmojiToEntities: s.a.convertEmojiToEntities,
          element: l.a,
          initEditorState: s.a.initEditorState,
          insertTextAtCursor: s.a.insertTextAtCursor,
          updateOverflowStyle: s.a.updateOverflowStyle,
          dismissComposerCommandName: c.a,
          sendTweetCommandName: c.b,
        }
      t.a = function (e) {
        return function (t) {
          return o.createElement(e, a()({}, t, { richTextInputContext: u, typeaheadWrapper: i.a }))
        }
      }
    },
    RH6X: function (e, t, n) {
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        v = n('oEoC'),
        b = n('2dXj'),
        _ = n('4bHO'),
        C = n('dzqK'),
        w = n('GZwR'),
        T = n('zpdM')
      function E(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var x = (function (e) {
        u()(n, e)
        var t = E(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            y()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
            y()(s()(e), '_genericWrapperRef', g.createRef()),
            y()(s()(e), 'render', function () {
              var t = e.props,
                n = t.children,
                r = t.contextText,
                a = t.isInline,
                o = t.isInlineReply,
                i = t.onTypeaheadStateChange,
                c = t.source,
                s = e.state,
                l = s.canShowTypeahead,
                u = s.queryContext,
                d = l && u ? { word: u.word, resultType: u.resultType } : void 0
              return g.createElement(
                b.a,
                {
                  contextText: r,
                  isInline: a,
                  isInlineReply: o,
                  onDismiss: e._handleDismiss,
                  onSelectItem: e._handleSelectItem,
                  onTypeaheadStateChange: i,
                  query: d,
                  ref: e._genericWrapperRef,
                  source: c || w.d.Compose,
                },
                n(e._handleInputChange),
              )
            }),
            y()(s()(e), '_getCaret', function (e) {
              return e.getSelection().getStartOffset()
            }),
            y()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
              var t = e.getSelection().anchorKey
              return e.getCurrentContent().getBlockForKey(t).getText()
            }),
            y()(s()(e), '_handleSelectItem', function (t) {
              var n = e.props.onTextUpdated,
                r = e.state.queryContext
              if (r) {
                var a = Object(_.a)(t, r.resultType)
                n(e._replaceToken(a, r))
              }
              e._setQueryContext(void 0)
            }),
            y()(s()(e), '_handleInputChange', function (t) {
              if (!Object(C.a)(t))
                throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
              var n = e.state.queryContext,
                r = n && n.word,
                a = e._getPlaintextFromCurrentBlock(t),
                o = v.c(e._getCaret(t), a),
                i = o.end,
                c = o.start,
                s = o.word,
                l = v.e(s || '', 'compose')
              if ((null == l ? void 0 : l.q) !== r)
                if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === c))
                  e._setQueryContext(void 0)
                else if (l) {
                  var u = l.q,
                    d = l.result_type
                  e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: c, endIndex: i })
                } else e._setQueryContext(void 0)
            }),
            y()(s()(e), '_setQueryContext', function (t) {
              return e.setState({ queryContext: t, canShowTypeahead: !!t })
            }),
            y()(s()(e), '_handleDismiss', function () {
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
                  a = t.startIndex,
                  o = n
                    .getSelection()
                    .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: a, focusOffset: r }),
                  i = T.Modifier.replaceText(n.getCurrentContent(), o, e),
                  c = T.EditorState.push(n, i, 'insert-characters'),
                  s = a + e.length,
                  l = c.getSelection().merge({ anchorOffset: s, focusOffset: s })
                return T.EditorState.forceSelection(c, l)
              },
            },
          ]),
          n
        )
      })(g.Component)
      t.a = x
    },
    RrO2: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var r = n('ORQL'),
        a = n('x8Sc')
      t.default = Object(r.a)(a.default)
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        o = n('ERkP'),
        i = n('5UID'),
        c = n('3GUV'),
        s = n('iBK2'),
        l = o.createElement(c.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.createElement(s.b, n)
          return t ? o.createElement(i.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: l }), (t.a = u)
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
          return f
        }),
        n.d(t, 'f', function () {
          return v
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return C
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
        f = 'DELETE_SCHEDULED_TWEET',
        h = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        y = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function g() {
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
          case h.SUCCESS:
            var n = t.meta
            return n && n.deleteScheduledTweetId
              ? l(l({}, e), {}, { scheduledTweets: y(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(a()({}, u, g))
      var v = function (e) {
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
        C = function (e) {
          return function (t, n, r) {
            var a = r.api
            return Object(o.b)(t, { request: a.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
              actionTypes: h,
              context: f,
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
          return f
        }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return g
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
        f = function (e) {
          return { payload: e, type: m }
        },
        h = 'rweb/geoLocation/SET_POSITION',
        y = function () {
          return function (e, t) {
            return v()
              .then(function (t) {
                return e({ payload: t, type: h })
              })
              .catch(function (t) {
                return e(f(o.b.denied)), Promise.reject(t)
              })
          }
        },
        g = function () {
          return function (e, t) {
            return p(t()) ? Promise.resolve() : e(y())
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
        a()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case m:
              return s(s({}, e), {}, { permissionStatus: t.payload })
            case h:
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
    dWxr: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, c.default)(e, t)
            .concat((0, i.default)(e))
            .concat((0, o.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, a.default)(e))
          if (0 == n.length) return []
          return (0, s.default)(n), n
        })
      var a = r(n('EW8Q')),
        o = r(n('yyPN')),
        i = r(n('YXS5')),
        c = r(n('vwfs')),
        s = r(n('c8jd'))
      e.exports = t.default
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
        f = n.n(m),
        h = n('N+ot'),
        y = n.n(h),
        g = n('AuHH'),
        v = n.n(g),
        b = n('KEM+'),
        _ = n.n(b),
        C =
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
        w = n('ye3X'),
        T = n('pXBW'),
        E = n('6/RC'),
        x = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        S = n('+Kfv'),
        O = n('eSoz'),
        R = n('rxPX'),
        I = function (e, t) {
          var n = t.communityId
          return n ? O.b.select(e, n) : void 0
        },
        P = Object(R.a)().propsFromState(function () {
          return { community: I }
        }),
        D = n('MtXG'),
        k = n('t62R'),
        A = n('CKsB'),
        j = n('rHpw'),
        M = n('3XMw'),
        F = n.n(M),
        B = F.a.d58baa7e,
        L = P(
          C.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              r = e.communityId,
              a = e.selectedCommunityId
            if (!n) return null
            var o,
              i = n.member_count
            return C.createElement(A.a, {
              actionSubText:
                ((o = B(i)),
                C.createElement(
                  D.a.Group,
                  null,
                  C.createElement(
                    D.a,
                    null,
                    C.createElement(
                      k.b,
                      { color: 'white' },
                      C.createElement(
                        F.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        C.createElement(D.a.Value, null, F.a.ibd0106d({ formattedCount: o })),
                        C.createElement(D.a.Label, null, F.a.cface2d0({ count: i })),
                      ),
                    ),
                  ),
                )),
              actionText: n.name,
              isSelected: a === r,
              key: r,
              media: n.media,
              onClick: t({
                _type: 'community_members',
                communityIdValue: r,
                conversationControlsValue: 'community_members',
              }),
              selectable: !0,
              style: N.menuItem,
            })
          }),
        ),
        N = j.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        H = n('FS1z'),
        V = n('MWbm'),
        z = n('yw4N'),
        U = n('+Eiw'),
        W = n('Zg3A'),
        K = n('EyD/'),
        q = F.a.e815fc33,
        G = F.a.c63602d3,
        X = F.a.baffe39a,
        Y = F.a.aa4209e8,
        Z = j.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: U.a.getBackgroundImage() },
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
        Q = function (e) {
          var t = e.audienceControlsValue,
            n = e.dismiss,
            r = e.hasMemberships,
            a = e.isC9sParticipationEnabled,
            o = e.isSuperFollowsCreator,
            i = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            s = t.communityIdValue || void 0,
            l = t.exclusivityControlValue || void 0,
            u = C.useCallback(
              function (e) {
                return function () {
                  i(e), n()
                }
              },
              [i, n],
            )
          return C.createElement(
            V.a,
            { style: Z.root },
            C.createElement(
              z.a,
              { style: Z.viewport },
              C.createElement(
                C.Fragment,
                null,
                C.createElement(k.b, { size: 'headline1', style: Z.title, weight: 'bold' }, q),
                C.createElement(
                  S.a,
                  { viewType: 'everyone' },
                  C.createElement(A.a, {
                    Icon: W.a,
                    actionText: X,
                    isSelected: !l && !s,
                    onClick: u({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: Z.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                o
                  ? C.createElement(A.a, {
                      Icon: K.a,
                      actionText: Y,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!l,
                      onClick: u({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: Z.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              r && c && a
                ? C.createElement(
                    V.a,
                    null,
                    C.createElement(
                      S.a,
                      { viewType: 'community' },
                      C.createElement(k.b, { style: Z.title, weight: 'bold' }, G),
                      C.createElement(H.a, {
                        module: c,
                        noItemsRenderer: function () {
                          return null
                        },
                        renderer: function (e) {
                          return C.createElement(L, {
                            clickHandler: u,
                            communityId: e,
                            dismiss: n,
                            key: e,
                            selectedCommunityId: s,
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
        J = n('xVN5'),
        $ = n('wa7Z'),
        ee = n('hqKg'),
        te = n('li/m'),
        ne = n('RqPI'),
        re = n('xZGM'),
        ae = n('0KEI'),
        oe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? O.b.select(e, n) : void 0
        },
        ie = function (e, t) {
          return Object(re.y)(e, re.f)
        },
        ce = Object(R.a)()
          .propsFromState(function () {
            return {
              communities: O.e,
              educationalVisibilityFlag: ie,
              hasMemberships: te.d,
              selectedCommunity: oe,
              sliceModule: Object(ee.createSelector)(ne.q, function (e) {
                return e ? Object($.a)(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ae.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(re.v)(re.f)
              },
              updateSingleComposer: J.x,
            }
          }),
        se = n('FG+G'),
        le = n('v6aA'),
        ue = n('X00g'),
        de = n('efqG'),
        pe = n('/yvb')
      function me(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var fe = F.a.baffe39a,
        he = F.a.e815fc33,
        ye = F.a.aa4209e8,
        ge = C.createElement(se.a, null),
        ve = (function (e) {
          f()(n, e)
          var t = me(n)
          function n(e, r) {
            var a
            return (
              s()(this, n),
              (a = t.call(this, e, r)),
              _()(p()(a), '_renderContent', function (e) {
                var t = a.props,
                  n = t.audienceControlsValue,
                  r = t.hasMemberships,
                  o = t.isC9sParticipationEnabled,
                  i = t.isSuperFollowsCreator,
                  c = t.sliceModule
                return C.createElement(Q, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: r,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: a._handleAudienceControlsValueChange,
                  sliceModule: c,
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
                    m = u && null != c && c.name ? c.name : d ? ye : fe
                  if (d) e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != c && c.theme && l) {
                    var f = ue.a.getCommunityUIColorName(c.theme)
                    e = { color: f, borderColor: f, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o
                    ? C.createElement(
                        S.a,
                        { viewType: 'communities_controls' },
                        C.createElement(
                          V.a,
                          { style: be.container },
                          C.createElement(
                            de.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: p ? 'forceVisible' : 'interactive',
                            },
                            C.createElement(
                              pe.a,
                              a()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: he,
                                  accessibilityRole: 'button',
                                  icon: ge,
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
        })(C.Component)
      _()(ve, 'contextType', le.a)
      var be = j.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        _e = ce(ve),
        Ce = n('ddV6'),
        we = n.n(Ce),
        Te = n('PKbs'),
        Ee = function (e, t) {
          var n = t.selectedCommunityId
          return n ? O.b.select(e, n) : void 0
        },
        xe = Object(R.a)()
          .propsFromState(function () {
            return { community: Ee }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(ae.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: O.b.fetchOneIfNeeded,
            }
          }),
        Se = n('YeIG'),
        Oe = n('21zW'),
        Re = F.a.gfca5254,
        Ie = F.a.f510c8b2,
        Pe = C.createElement(k.b, { weight: 'bold' }, Ie),
        De = j.a.create(function (e) {
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
        ke = xe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          C.useEffect(
            function () {
              o && Object(Se.a)(t) && r(o).catch(n())
            },
            [t, o, n, r],
          )
          var c = C.useState(!1),
            s = we()(c, 2),
            l = s[0],
            u = s[1],
            d = C.useContext(le.a).featureSwitches,
            p = C.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    r = t.theme
                  return C.createElement(Te.b, {
                    badgeStyle: De.badgeStyle,
                    headerContainerStyle: De.rulesHeader,
                    heading: Pe,
                    ruleContainerStyle: De.ruleContainerStyle,
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
              f = ue.a.getCommunityUIColorName(m),
              h = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: f, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return C.createElement(
              V.a,
              { style: De.container },
              i ? C.createElement(Oe.a, null) : null,
              C.createElement(
                de.a,
                {
                  onDismiss: function () {
                    return u(!1)
                  },
                  onOpen: function () {
                    return u(!0)
                  },
                  renderContent: p,
                },
                C.createElement(
                  pe.a,
                  a()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: De.button,
                    },
                    h,
                  ),
                  Re,
                ),
              ),
            )
          }
          return null
        }),
        Ae = function (e, t) {
          return Object(re.y)(e, re.g)
        },
        je = Object(R.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Ae }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(re.v)(re.g)
              },
            }
          }),
        Me = n('4zmP'),
        Fe = F.a.g46f363d,
        Be = { viewType: 'community_rule_education' }
      var Le = j.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ne = je(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            r = function () {
              t()
            }
          return (
            C.useEffect(function () {
              return r
            }),
            n
              ? C.createElement(
                  V.a,
                  { style: Le.container },
                  C.createElement(Me.a, { behavioralEventContext: Be, onClose: r, text: Fe, withCloseButton: !0 }),
                )
              : null
          )
        }),
        He = n('H7Rt'),
        Ve = n('m3Bd'),
        ze = n.n(Ve),
        Ue = n('yZqq'),
        We = function (e, t) {
          return Object(re.y)(e, re.q)
        },
        Ke = Object(R.a)()
          .propsFromState(function () {
            return { shouldShowEducation: We }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(re.v)(re.q)
              },
            }
          }),
        qe = F.a.aa65a449,
        Ge = { viewType: 'persistent_conversation_controls_education' }
      var Xe = j.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Ye = Ke(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            r = e.shouldShowEducation,
            a = C.useContext(le.a).featureSwitches,
            o = C.useState(),
            i = we()(o, 2),
            c = i[0],
            s = i[1],
            l = function () {
              t()
            }
          return (
            C.useEffect(function () {
              return l
            }, []),
            C.useEffect(
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
              ? C.createElement(
                  V.a,
                  { style: Xe.container },
                  C.createElement(Me.a, {
                    arrowPositionStart: c,
                    behavioralEventContext: Ge,
                    onClose: l,
                    text: qe,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        Ze = n('Irs7'),
        Qe = n('DlMI'),
        Je = n('gBde'),
        $e = n('gUPl'),
        et = n('cOhU'),
        tt = C.createElement(Qe.a, null),
        nt = C.createElement(Je.a, null),
        rt = C.createElement($e.a, null),
        at = C.createElement(et.a, null),
        ot = 'conversation_control',
        it = Object.freeze({
          all: { icon: tt, label: F.a.i8ea6d4e },
          community: { icon: rt, label: F.a.ec5a4a25 },
          by_invitation: { icon: nt, label: F.a.b4543009 },
          community_members: { icon: at, label: F.a.i13be5a0 },
          super_followers_exclusive: { icon: tt, label: F.a.f8393bda },
        }),
        ct =
          (Object.freeze(['community', 'by_invitation']),
          Object(Ze.a)(function (e) {
            var t = e.analytics,
              n = ze()(e, ['analytics']),
              r = e.disabled,
              a = e.value,
              o = it[a],
              i = o.icon,
              c = o.label,
              s = C.useState(!1),
              l = we()(s, 2),
              u = l[0],
              d = l[1],
              p = C.useRef(null)
            C.useEffect(function () {
              a !== He.a.all && a !== He.a.community_members && d(!0)
            }, [])
            var m = C.useCallback(
              function (e) {
                t.scribe({ element: ot, action: 'click' })
              },
              [t],
            )
            return C.createElement(
              S.a,
              { viewType: ot },
              u ? C.createElement(Ye, { buttonRef: p.current }) : null,
              C.createElement(
                V.a,
                { style: st.controlsContainer },
                C.createElement(
                  Ue.a,
                  n,
                  C.createElement(
                    pe.a,
                    { disabled: r, icon: i, onPress: m, ref: p, size: 'xSmall', style: st.button, type: 'brandText' },
                    c,
                  ),
                ),
              ),
            )
          })),
        st = j.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        lt = n('krmn'),
        ut = n('cIoY'),
        dt = n('w3n3'),
        pt = n('MLl7'),
        mt = n('1auM'),
        ft = n('07FG'),
        ht = n('Q8CU'),
        yt = n('QbaN'),
        gt = n('nV1z'),
        vt = n('VPdC'),
        bt = n('WPfJ'),
        _t = j.a.create(function (e) {
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
              zIndex: bt.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: bt.e },
            iconEmojiPicker: { zIndex: bt.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: bt.a,
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
        Ct = n('aITJ'),
        wt = F.a.bdbcdd93,
        Tt = F.a.a809609f,
        Et = C.createElement(gt.a, null),
        xt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            r = e.onFilesAdded,
            a = e.setActiveParentKey,
            o = e.videoPickerEnabled,
            i = n || t.length >= 4,
            c = t.length < 3,
            s = o && Ct.b.isIOS() && Ct.b.isSafari()
          return C.createElement(
            C.Fragment,
            null,
            C.createElement(vt.a, {
              acceptGifs: 0 === t.length,
              acceptVideo: 0 === t.length && !s,
              accessibilityLabel: t.length > 0 || s ? wt : void 0,
              disabled: i,
              multiple: c,
              onChange: r,
              onPress: a,
              style: [_t.toolBarButton, _t.firstToolBarButton],
              type: 'brandText',
            }),
            s
              ? C.createElement(vt.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !0,
                  accessibilityLabel: Tt,
                  disabled: t.length > 0,
                  hoverLabel: { label: Tt },
                  icon: Et,
                  multiple: !1,
                  onChange: r,
                  onPress: a,
                  style: _t.toolBarButton,
                  type: 'brandText',
                })
              : null,
          )
        },
        St = n('p+r5'),
        Ot = n('GWvE')
      function Rt(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var It = (function (e) {
        f()(n, e)
        var t = Rt(n)
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
                return C.createElement(
                  V.a,
                  { style: Pt.root },
                  C.createElement(St.a, {
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
                    style: Pt.formTextInput,
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
                  (this.value && !Object(Ot.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                )
              },
            },
          ]),
          n
        )
      })(C.Component)
      _()(It, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Pt = j.a.create(function (e) {
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
        Dt = It,
        kt = (n('Blm6'), n('DZ+c'), n('mtvn')),
        At = n('6XNv')
      function jt(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var Mt = (function (e) {
        f()(n, e)
        var t = jt(n)
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
                  u = Object(kt.a)(o, a + 1).map(function (e) {
                    return { label: ''.concat(F.a.ia24dc8c(e)), value: ''.concat(e) }
                  })
                return C.createElement(At.a, {
                  disabled: s,
                  label: n,
                  onChange: i,
                  options: u,
                  style: [Ft.selector, !r && Ft.rightMargin],
                  testID: c,
                  value: l,
                })
              },
            },
          ]),
          n
        )
      })(C.PureComponent)
      _()(Mt, 'defaultProps', { last: !1 })
      var Ft = j.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Bt = Mt,
        Lt = 'addPollChoice',
        Nt = 'selectPollDays',
        Ht = 'selectPollHours',
        Vt = 'selectPollMinutes',
        zt = 'removePollButton'
      function Ut(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var Wt = F.a.caf8edc4,
        Kt = F.a.g93586be,
        qt = F.a.d073b644,
        Gt = F.a.a2f0728e,
        Xt = (function (e) {
          f()(n, e)
          var t = Ut(n)
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
                  return C.createElement(
                    V.a,
                    { style: n },
                    C.createElement(k.b, { color: 'normal', style: Yt.durationLabel }, t ? Wt : ''),
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
                  return C.createElement(
                    V.a,
                    { style: Yt.durationControls },
                    C.createElement(Bt, {
                      editable: t && n,
                      label: Kt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Nt,
                      value: a,
                    }),
                    C.createElement(Bt, {
                      editable: t && n,
                      label: qt,
                      max: 7 === a ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Ht,
                      value: o,
                    }),
                    C.createElement(Bt, {
                      editable: t && n,
                      label: Gt,
                      last: !0,
                      max: 7 === a ? 0 : 59,
                      min: 0 === a && 0 === o ? 5 : 0,
                      onChange: this._handleMinutesChange,
                      testID: Vt,
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
        })(C.Component)
      _()(Xt, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Yt = j.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Zt = Xt,
        Qt = n('iY63'),
        Jt = n('jtO7')
      function $t(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var en = F.a.g589c2e1,
        tn = F.a.a1e6c3a1,
        nn = F.a.a739e006,
        rn = F.a.d89a5b92,
        an = F.a.c2a8118d,
        on = F.a.a8ede1de,
        cn = F.a.af40a8ef,
        sn = (function (e) {
          f()(n, e)
          var t = $t(n)
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
                    s = C.createElement(
                      V.a,
                      { style: ln.rightColumn },
                      c < 4
                        ? C.createElement(pe.a, {
                            accessibilityLabel: on,
                            disabled: !(t && a),
                            hoverLabel: { label: cn },
                            icon: C.createElement(Qt.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: ln.addButton,
                            testID: Lt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return C.createElement(
                    V.a,
                    { style: ln.choicesAndAddButton },
                    C.createElement(
                      V.a,
                      { style: ln.choices },
                      C.createElement(Dt, {
                        autoFocus: i,
                        defaultValue: r[0],
                        editable: t && a,
                        label: en,
                        name: 'Choice1',
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      C.createElement(Dt, {
                        defaultValue: r[1],
                        editable: t && a,
                        label: tn,
                        name: 'Choice2',
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      c >= 3
                        ? C.createElement(Dt, {
                            autoFocus: i,
                            defaultValue: r[2],
                            editable: t && a,
                            label: nn,
                            name: 'Choice3',
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === c
                        ? C.createElement(Dt, {
                            autoFocus: i,
                            defaultValue: r[3],
                            editable: t && a,
                            label: rn,
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
                  return C.createElement(
                    V.a,
                    { style: ln.root },
                    this._renderChoices(),
                    C.createElement(Zt, {
                      editable: t,
                      initialDuration: n,
                      isActive: r,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: ln.durationPicker,
                    }),
                    C.createElement(
                      V.a,
                      { style: ln.removePollButton },
                      C.createElement(Jt.a, { color: 'red500', label: an, onPress: a, testID: zt }),
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
        })(C.Component),
        ln = j.a.create(function (e) {
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
        un = Object(Ze.a)(sn),
        dn = j.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        pn = F.a.i859676b,
        mn = C.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          C.createElement(
            k.b,
            { link: '/settings/audience_and_tagging', style: dn.link, withInteractiveStyling: !0, withUnderline: !0 },
            F.a.c9a48d3f,
          ),
        )
      function fn() {
        return C.createElement(V.a, { style: dn.container }, C.createElement(Me.a, { headline: pn, text: mn }))
      }
      var hn = n('b5s6'),
        yn = n('rcen'),
        gn = n('zmS9'),
        vn = 'addButton',
        bn = 'addSubtitlesLabel',
        _n = 'altTextLabel',
        Cn = 'tagPeopleLabel',
        wn = 'attachments',
        Tn = 'createPollButton',
        En = 'geoButton',
        xn = 'gifSearchButton',
        Sn = 'scheduleOption',
        On = 'taggedUsersLabel',
        Rn = 'tweetTextarea_',
        In = 'toolBar',
        Pn = 'scheduledTweetIndicator',
        Dn = n('xM7j'),
        kn = n('6OUF'),
        An = n('tZIO'),
        jn = n('5mJL'),
        Mn = n('DNho'),
        Fn = n('jhWN'),
        Bn = n('rFBM'),
        Ln = n('zfvc'),
        Nn = n('Ujvi'),
        Hn = n('yTN1'),
        Vn = n('gpVt'),
        zn = n('hOZg'),
        Un = n('ll3R'),
        Wn = n('J0mu'),
        Kn = n('EfHu'),
        qn = n('KrGU'),
        Gn = n('boUI'),
        Xn = n('6ZHn'),
        Yn = n('/WPq'),
        Zn = n('wpLu'),
        Qn = n('pHub'),
        Jn = n('8A5z'),
        $n = n('pKoL'),
        er = n('ZvMt'),
        tr = n('9Xij')
      function nr(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var rr = (function (e) {
        f()(n, e)
        var t = nr(n)
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
                return C.createElement(V.a, { style: n }, this._renderImageGroup(t.length))
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
                  o = j.a.theme.aspectRatios.landscape
                if (t) {
                  var i,
                    c,
                    s = this.context.featureSwitches.isTrue('media_minimal_image_crop_enabled'),
                    l = this.context.featureSwitches.getNumberValue('media_minimal_image_crop_minimum_aspect_ratio'),
                    u = this.context.featureSwitches.getNumberValue('media_minimal_image_crop_maximum_aspect_ratio')
                  if (s)
                    o = er.a.getImageAspectRatio(l, u, {
                      width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                      height: null === (c = e[0].mediaFile) || void 0 === c ? void 0 : c.height,
                    })
                }
                return C.createElement(
                  tr.a,
                  { ratio: t ? o : a / r },
                  C.createElement(V.a, { style: ar.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                )
              },
            },
            {
              key: '_renderGroupOf2',
              value: function () {
                return C.createElement(
                  tr.a,
                  { ratio: j.a.theme.aspectRatios.landscape },
                  C.createElement(
                    V.a,
                    { style: ar.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, ar.gutterRight),
                    this._renderMediaAtIndex(1),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf3',
              value: function () {
                return C.createElement(
                  tr.a,
                  { ratio: j.a.theme.aspectRatios.landscape },
                  C.createElement(
                    V.a,
                    { style: ar.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, ar.gutterRight),
                    this._renderColumnWithIndices([1, 2]),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf4',
              value: function () {
                return C.createElement(
                  tr.a,
                  { ratio: j.a.theme.aspectRatios.landscape },
                  C.createElement(
                    V.a,
                    { style: ar.mediaPreviewWrapper },
                    this._renderColumnWithIndices([0, 2], ar.gutterRight),
                    this._renderColumnWithIndices([1, 3]),
                  ),
                )
              },
            },
            {
              key: '_renderColumnWithIndices',
              value: function (e, t) {
                return C.createElement(
                  V.a,
                  { style: [ar.column, t] },
                  this._renderMediaAtIndex(e[0], ar.gutterBottom),
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
                  f = i.onSetMediaPreviewRef,
                  h = l[e],
                  y = null === (n = h.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                  g = null === (r = h.mediaMetadata) || void 0 === r ? void 0 : r.defaultAltText,
                  v = !(
                    null === (a = h.mediaMetadata) ||
                    void 0 === a ||
                    null === (o = a.sensitiveMediaWarning) ||
                    void 0 === o ||
                    !o.size
                  ),
                  b = d && c && s,
                  _ = b && v && !!p
                return C.createElement($n.a, {
                  accessibilityLabel: y || g,
                  accessibilityRole: 'group',
                  enableGif: s,
                  key: h.id,
                  mediaItem: h,
                  onClick: u ? u(h.id) : void 0,
                  onEdit: d ? d(h.id) : void 0,
                  onEditSensitiveWarning: p && _ ? p(h.id) : void 0,
                  onRemove: m(h.id),
                  ref: f,
                  style: [ar.mediaContainer, t],
                  withAltTextLabel: !!y,
                  withCloseButton: c && s,
                  withEditButton: b,
                  withEditSensitiveWarningButton: _,
                })
              },
            },
          ]),
          n
        )
      })(C.Component)
      _()(rr, 'contextType', le.a)
      var ar = j.a.create(function (e) {
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
        or = n('oQhu'),
        ir = n('+d3d'),
        cr = n('S1qy'),
        sr = n.n(cr),
        lr = n('cjAp'),
        ur = n.n(lr)
      function dr(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var pr = F.a.f0afcc0e,
        mr = F.a.ha5e2e79,
        fr = F.a.a3de3b68,
        hr = F.a.cc2b28fc,
        yr = F.a.g45af04e,
        gr = F.a.ee9c4013,
        vr = F.a.af40a8ef,
        br = F.a.e68b09b4,
        _r = F.a.ec10ee02,
        Cr = F.a.h735a98d,
        wr = F.a.c4ccfbe2,
        Tr = F.a.j499fbcb,
        Er = F.a.b7d8e3f0,
        xr = F.a.d1175c78,
        Sr = F.a.bf4e9d79,
        Or = F.a.e0342f98,
        Rr = F.a.e349147b,
        Ir = F.a.e3a24e4b,
        Pr = F.a.de4669e2,
        Dr = F.a.d2c7a41c,
        kr = F.a.f7364fa1,
        Ar = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        jr = F.a.ia24dc8c,
        Mr = C.createElement(zn.a, null),
        Fr = C.createElement(Qt.a, null),
        Br = C.createElement(Un.a, null),
        Lr = C.createElement(Wn.a, null),
        Nr = { viewType: 'schedule_tweet' },
        Hr = { viewType: 'add_poll' },
        Vr = { viewType: 'add_composer' },
        zr = { viewType: 'tag_location' },
        Ur = (function (e) {
          f()(n, e)
          var t = dr(n)
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
                Object(or.a)(function () {
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
                    (a.conversationControlsValue !== He.a.community_members &&
                      a.conversationControlsValue !== He.a.super_followers_exclusive) ||
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
                  s = i === He.a.community_members || i === He.a.super_followers_exclusive || o._isScheduled()
                return c
                  ? C.createElement(ct, { disabled: s, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              _()(p()(o), '_renderTaggedLocation', function (e) {
                return C.createElement(
                  V.a,
                  { style: _t.taggedLocationContainer },
                  C.createElement(
                    pe.a,
                    {
                      icon: C.createElement(Kn.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: _t.taggedLocationButton,
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
                  f = n.text,
                  h = Object(Vn.b)(f) || (u && !Object(ft.a)(u) && [u]),
                  y = !!d.length || p || !!m,
                  g = o.props.typeaheadWrapper,
                  v = !o._isEmpty()
                return C.createElement(
                  V.a,
                  { style: _t.textInputArea },
                  C.createElement(
                    V.a,
                    { style: a ? _t.inputStyle : _t.collapsedInputStyle },
                    o._renderAudienceControls(v),
                    C.createElement(
                      g,
                      {
                        contextText: f,
                        isInline: i,
                        isInlineReply: c,
                        onTextUpdated: l ? o._handleRichTextChange : o._handlePlainTextChange,
                        onTypeaheadStateChange: s,
                      },
                      o._renderFieldTextInput,
                    ),
                    h && !y
                      ? C.createElement(Vn.a, { index: r, isCardPreviewTombstoned: Object(ft.a)(u), urls: h })
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
                  f = t.onTextInputBlur,
                  h = t.positionCursorAtBeginning,
                  y = t.richTextInputContext,
                  g = o.state.isFocused,
                  v = r.text,
                  b = 0 === c && p,
                  _ = !!y,
                  w = y || {},
                  T = w.dismissComposerCommandName,
                  E = w.element,
                  x = w.sendTweetCommandName,
                  S = d && !y && !l,
                  O = y
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
                return C.createElement(
                  kn.a,
                  a()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: fr,
                      autoFocus: n || (s && !u),
                      closeButton:
                        s && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !b
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [_t.textInputStyle, S && _t.textInputMobileCollapsed],
                      keyCommandHandlers: m,
                      maxNumberOfLines: _ ? 30 : 10,
                      multiline: !0,
                      numberOfLines: o._calcNumberOfLines(),
                      onBlur: f,
                      onFilesAdded: o._handleFilesAdded,
                      placeholder: o._getPlaceHolderText(),
                      positionCursorAtBeginning: h,
                      positionCursorAtEnd: !h,
                      ref: o._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Rn).concat(c),
                      useCacheForDOMMeasurements: g,
                      value: v,
                    },
                    O,
                  ),
                )
              }),
              _()(
                p()(o),
                '_getHandleRichTextChange',
                Object(or.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                p()(o),
                '_getHandlePlainTextChange',
                Object(or.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(p()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? C.createElement(fn, null) : null
              }),
              _()(p()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  r = t.index,
                  a = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  c = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === r && (i || c)
                  ? C.createElement(_e, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: a && c,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(p()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? C.createElement(Ne, null) : null
              }),
              _()(p()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? C.createElement(ke, { selectedCommunityId: t, showMiddot: !e })
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
                return C.createElement(gn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Pn,
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
                return C.createElement(lt.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              _()(
                p()(o),
                '_getEmojiPickerButtonStyles',
                Object(or.a)(function () {
                  return [_t.iconEmojiPicker, _t.toolBarButton]
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
                  p = t.conversationControlsValue !== He.a.all
                return Boolean(i || !d || (c && '' === s && !r.length) || p || a.length > 0)
              }),
              _()(p()(o), '_renderSchedulingButton', function () {
                return C.createElement(pe.a, {
                  accessibilityLabel: mr,
                  behavioralEventContext: Nr,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: Cr },
                  icon: Lr,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: _t.toolBarButton,
                  testID: Sn,
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
                return C.createElement(pe.a, {
                  accessibilityLabel: gr,
                  hoverLabel: { label: br },
                  icon: Mr,
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
                return C.createElement(
                  V.a,
                  { onClick: o._handleFocus, style: [_t.attachmentContainer, _t.tweetAttachmentArea], testID: wn },
                  a.length > 0
                    ? C.createElement(rr, {
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
                        style: _t.mediaPreview,
                      })
                    : null,
                  r ? o._renderMediaActions() : null,
                  i
                    ? C.createElement(un, {
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
                  ? C.createElement(
                      Dn.a,
                      null,
                      C.createElement(yn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : C.createElement(hn.a, {
                      isCondensed: t.length > 0,
                      style: _t.quoteTweet,
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
                  f = !c && !i,
                  h = o.context.featureSwitches.isTrue('responsive_web_video_picker')
                return C.createElement(
                  V.a,
                  { style: _t.toolBar, testID: In },
                  C.createElement(
                    V.a,
                    { style: _t.toolBarIconsContainer },
                    C.createElement(xt, {
                      media: r,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: d,
                      videoPickerEnabled: h,
                    }),
                    o._renderGifButton(),
                    m ? o._renderPollButton() : null,
                    p ? o._renderEmojiPicker() : null,
                    f ? o._renderSchedulingButton() : null,
                    o._renderGeoButton(),
                  ),
                  C.createElement(
                    V.a,
                    { style: _t.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (s && !l) || !e
                      ? null
                      : C.createElement(
                          C.Fragment,
                          null,
                          C.createElement(V.a, { style: _t.separator }),
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
                var t = An.a.replaceCarriageReturns(e.target.value)
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
                r ? n({ text: hr }) : a(e)
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
                return x.c(t.concat(e))
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
              _()(p()(o), '_handlePollChange', Object(ir.a)(o._updatePoll, 200, { leading: !0, trailing: !1 })),
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
                return jr(Math.ceil(e / o._userLanguageWeight))
              }),
              _()(p()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  r = t.quotedStatus,
                  a = e.index,
                  i = e.isReply,
                  c = e.isSelfThreadReply
                return r ? Pr : n ? kr : i && !c ? Dr : c || a > 0 ? Ir : Rr
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
                Object(or.a)(function (e) {
                  var t = ur.a[o.props.twitterTextConfigurationVersion]
                  return sr()(e, t)
                }),
              ),
              _()(p()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(ht.c)(e)
              }),
              _()(p()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(yt.h)(e)
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
              (o._userLanguageWeight = l && Ar.indexOf(l) > -1 ? 2 : 1),
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
                      return e.mediaFile && !(e.mediaFile instanceof mt.a) && e.mediaFile.isVideo
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
                    p = s < j.a.theme.breakpoints.small
                  return C.createElement(
                    V.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [_t.root, !r && _t.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    C.createElement(
                      jn.a,
                      {
                        avatarCell: C.createElement(
                          C.Fragment,
                          null,
                          l
                            ? C.createElement(Mn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return C.createElement(Fn.a, {
                                  accessibilityLabel: c ? c.name : void 0,
                                  screenName: c ? c.screen_name : void 0,
                                  size: t,
                                  style: _t.avatar,
                                  uri: c ? c.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : C.createElement(V.a, {
                                style: [_t.conversationLine, !l && _t.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: a ? _t.avatarContainerExpanded : _t.avatarContainer,
                        cellStyle: _t.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      C.createElement(
                        V.a,
                        { onFocus: this._handleEditorFocus, style: _t.inputArea },
                        C.createElement(
                          Bn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: _t.dragDrop,
                          },
                          function (t) {
                            return C.createElement(
                              C.Fragment,
                              null,
                              C.createElement(V.a, { style: _t.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      C.createElement(
                        V.a,
                        { style: [(d || n) && _t.controlsContainer, p ? _t.mobileControlsLayout : _t.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      C.createElement(Ln.b, { show: r && a }, this._renderToolbar(u)),
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
                  return C.createElement(dt.a, {
                    enabled: !c,
                    gifSearchKeySource: pt.a.Composition,
                    history: a,
                    onPress: i,
                    testID: xn,
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
                  return C.createElement(pe.a, {
                    accessibilityLabel: pr,
                    behavioralEventContext: Hr,
                    disabled: c,
                    hoverLabel: { label: _r },
                    icon: Br,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: _t.toolBarButton,
                    testID: Tn,
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
                    o = t ? C.createElement(Kn.a, null) : C.createElement(qn.a, null)
                  return C.createElement(pe.a, {
                    accessibilityLabel: wr,
                    behavioralEventContext: zr,
                    disabled: a,
                    hoverLabel: { label: wr },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: _t.toolBarButton,
                    testID: En,
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
                  return C.createElement(
                    V.a,
                    { style: _t.imageActions },
                    t && t.url && t.provider
                      ? C.createElement(
                          V.a,
                          { style: _t.addImageTextPadding },
                          C.createElement(ut.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : C.createElement(
                          k.b,
                          {
                            accessibilityLabel: xr,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [_t.addImageTextContainer, _t.addImageTextPadding],
                          },
                          r ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || a
                      ? C.createElement(
                          k.b,
                          {
                            accessibilityLabel: Tr({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: _t.addImageTextContainer,
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
                  return C.createElement(
                    k.b,
                    { color: 'gray700', size: 'subtext2', testID: Cn },
                    C.createElement(Gn.a, { style: _t.addImageActionIcon }),
                    xr,
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
                  return C.createElement(
                    k.b,
                    { color: 'gray700', size: 'subtext2', testID: On },
                    C.createElement(Xn.a, { style: _t.addImageActionIcon }),
                    C.createElement(Nn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: r }),
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
                      ? C.createElement(
                          k.b,
                          { color: 'gray700', size: 'subtext2', testID: _n },
                          C.createElement(Zn.a, { style: _t.addImageActionIcon }),
                          Er({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : C.createElement(
                          k.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: _n },
                          C.createElement(Zn.a, { style: _t.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : C.createElement(
                        k.b,
                        { color: 'gray700', size: 'subtext2', testID: _n },
                        C.createElement(Yn.a, { style: _t.addImageActionIcon }),
                        Tr({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Qn.a : Jn.a
                  return C.createElement(
                    k.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: _t.addImageTextContainer,
                      testID: bn,
                    },
                    C.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Or : void 0,
                      style: _t.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Sr,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    r = ur.a[n],
                    a = this._getParsedTweet(t).weightedLength
                  return C.createElement(Hn.a, {
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
                  return C.createElement(pe.a, {
                    accessibilityLabel: yr,
                    behavioralEventContext: Vr,
                    disabled: s,
                    hoverLabel: { label: vr },
                    icon: Fr,
                    link: !r || i || s ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: vn,
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
                      return e.mediaFile && !(e.mediaFile instanceof mt.a) && e.mediaFile.isVideo
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
                      return e.mediaFile && !(e.mediaFile instanceof mt.a) && e.mediaFile.isVideo
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
        })(C.Component)
      _()(Ur, 'contextType', le.a),
        _()(Ur, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Wr = Object(Ze.a)(Ur),
        Kr = C.createElement(k.b, { weight: 'bold' }),
        qr = C.createElement(k.b, { color: 'link' }),
        Gr = function (e) {
          return '@'.concat(e)
        },
        Xr = n('SrIh'),
        Yr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Zr = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            r = e.inReplyToStatus,
            a = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  C.cloneElement(qr, null, F.a.b50e199a({ userName: Gr(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  C.cloneElement(qr, null, F.a.f2e4dd37({ replyUserName: Gr(t), otherUserName: Gr(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  r = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  C.cloneElement(
                    qr,
                    null,
                    F.a.eccfddc3({ userOneName: Gr(t), userTwoName: Gr(r), userThreeName: Gr(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  r = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  C.cloneElement(qr, null, F.a.h758cd22({ userOneName: Gr(n), userTwoName: Gr(r), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  C.cloneElement(qr, null, F.a.e9f8a0eb({ userName: Gr(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  r = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  C.cloneElement(qr, null, F.a.df7e9fbc({ replyUserName: Gr(n), otherUserName: Gr(r) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  r = e.userThreeName,
                  a = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  C.cloneElement(
                    qr,
                    null,
                    F.a.b45fa505({ userOneName: Gr(n), userTwoName: Gr(a), userThreeName: Gr(r) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  r = e.userOneName,
                  a = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  C.cloneElement(qr, null, F.a.a4383815({ userOneName: Gr(r), userTwoName: Gr(a), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  C.cloneElement(qr, null, F.a.ff792e35({ userName: Gr(t) })),
                  C.cloneElement(Kr, null, F.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  C.cloneElement(qr, null, F.a.g7d5e985({ replyUserName: Gr(t), otherUserName: Gr(n) })),
                  C.cloneElement(Kr, null, F.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  r = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  C.cloneElement(
                    qr,
                    null,
                    F.a.fe5a61e9({ userOneName: Gr(t), userTwoName: Gr(r), userThreeName: Gr(n) }),
                  ),
                  C.cloneElement(Kr, null, F.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  r = e.userTwoName
                return C.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  C.cloneElement(qr, null, F.a.bc9dd514({ userOneName: Gr(n), userTwoName: Gr(r), othersCount: t })),
                  C.cloneElement(Kr, null, F.a.de5071ba),
                )
              },
            },
            i = x.a({ inReplyToStatus: r, loggedInUserId: a }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            c = r.retweeted_status || r,
            s = c.exclusivity_info,
            l = c.user,
            u = i.filter(function (e) {
              return e.id_str !== l.id_str
            }),
            d = we()(u, 2),
            p = d[0],
            m = d[1],
            f = [l, p, m].map(Yr),
            h = we()(f, 3),
            y = h[0],
            g = h[1],
            v = h[2],
            b = i.length - 2
          switch (i.length) {
            case 0:
              return Object(Xr.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: y })
                : s
                ? o.exclusiveReplyToOne({ userName: y })
                : o.replyToOne({ userName: y })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: y, userTwoName: g })
                : s
                ? o.exclusiveReplyToTwo({ userOneName: y, userTwoName: g })
                : o.replyToTwo({ userOneName: y, userTwoName: g })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: y, userTwoName: g, userThreeName: v })
                : s
                ? o.exclusiveReplyToThree({ userOneName: y, userTwoName: g, userThreeName: v })
                : o.replyToThree({ userOneName: y, userTwoName: g, userThreeName: v })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: y, userTwoName: g, othersCount: b })
                : s
                ? o.exclusiveReplyToMany({ userOneName: y, userTwoName: g, othersCount: b })
                : o.replyToMany({ userOneName: y, userTwoName: g, othersCount: b })
          }
        },
        Qr = C.memo(Zr),
        Jr = n('fs1G'),
        $r = n('BLtI'),
        ea = n('kY28')
      function ta(e) {
        null == e || e.preventDefault()
      }
      var na = j.a.create(function (e) {
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
        ra = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            r = e.inReplyToStatus,
            a = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            c = e.showParentTweet,
            s = void 0 === c || c
          return C.createElement(
            V.a,
            null,
            s
              ? C.createElement($r.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: Jr.a,
                  onAvatarClick: ta,
                  onEntityClick: ta,
                  onMediaClick: ta,
                  onReplyContextClick: ta,
                  replyContext: ea.a.ReplyContextTypes.None,
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
            C.createElement(
              V.a,
              { style: na.replyUsersContainer },
              C.createElement(
                jn.a,
                {
                  avatarCell: s ? C.createElement(V.a, { style: na.conversationLine }) : null,
                  avatarCellStyle: na.conversationLineContainer,
                  cellStyle: na.repliesTextContainer,
                  style: na.grid,
                },
                i
                  ? C.createElement(
                      k.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: s && na.repliesMessage },
                      C.createElement(Qr, {
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
        aa = n('Tb0w'),
        oa = n('1YZw'),
        ia = n('pidX'),
        ca = n('5oBF'),
        sa = n('JYYi'),
        la = n('/Rsk'),
        ua = n('qlwE'),
        da = n('XOJV'),
        pa = n('G6rE'),
        ma = n('AspN'),
        fa = n('oEGd'),
        ha = n('P1r1')
      function ya(e, t) {
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
      function ga(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ya(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ya(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var va = function (e) {
          return e.parentTweetId || (e.isInline ? sa.a.homeTimeline : sa.a.modal)
        },
        ba = function (e, t) {
          var n = va(t)
          return J.l(e, n)
        },
        _a = function (e, t) {
          var n = va(t)
          return J.m(e, n)
        },
        Ca = function (e, t) {
          var n = va(t)
          return J.k(e, n)
        },
        wa = function (e, t) {
          var n = Pa(e, t),
            r = Ca(e, t).communityIdValue || void 0,
            a = (null == n ? void 0 : n.community_id_str) || r,
            o = a ? O.b.select(e, a) : void 0
          return o ? o.name : void 0
        },
        Ta = function (e, t) {
          var n = va(t)
          return J.n(e, n)
        },
        Ea = function (e, t) {
          var n = va(t)
          return J.j(e, n)
        },
        xa = function (e) {
          return function (t, n) {
            var r = (function (e, t) {
              return t.location.state
            })(0, n)
            return r ? e(r) : void 0
          }
        },
        Sa = Object(ee.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          pa.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Oa = function (e, t) {
          return t.parentTweetId || Ra(e, t) || Ia(e, t)
        },
        Ra = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Ia = xa(function (e) {
          return e.inReplyToStatusId
        }),
        Pa = function (e, t) {
          var n = Oa(e, t)
          return n ? da.a.selectHydrated(e, n) : void 0
        },
        Da = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        ka = xa(function (e) {
          return e.hasArticleNudge
        }),
        Aa = xa(function (e) {
          return e.convoCardData
        }),
        ja = xa(function (e) {
          return e.externalMedia
        }),
        Ma = xa(function (e) {
          return e.externalMediaFiles
        }),
        Fa = xa(function (e) {
          return e.previewTweetId
        }),
        Ba = xa(function (e) {
          return e.defaultText
        }),
        La = function (e, t) {
          var n = Ba(e, t),
            r = Object(ia.a)(t.location)
          return (Da(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            r
            ? r
            : n
        },
        Na = xa(function (e) {
          return e.quotedStatusId
        }),
        Ha = xa(function (e) {
          return e.quotedStatus
        }),
        Va = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Ha(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Na(e, t)
              return n ? da.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        za = xa(function (e) {
          return e.isSelfThreadReply
        }),
        Ua = xa(function (e) {
          return e.positionCursorAtBeginning
        }),
        Wa = xa(function (e) {
          return e.promotedContent
        }),
        Ka = function () {
          return Object(ee.createSelector)(ba, La, Va, ma.j, function (e, t, n, r) {
            return e.map(function (e, a) {
              return ga(
                ga({}, ((o = e).mediaIds, ze()(o, ['mediaIds']))),
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
        qa = {
          addComposer: J.a,
          addToast: oa.b,
          createLocalApiErrorHandler: Object(ae.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: J.b,
          deletePreviewTweet: ca.c,
          fetchAutotaggedLocationIfNeeded: la.a,
          fetchTweetIfNeeded: da.a.fetchOneIfNeeded,
          removeComposer: J.f,
          resetDraft: J.g,
          retweet: da.a.retweet,
          schedule: J.i,
          draftTweet: J.e,
          send: J.r,
          updateActiveComposerIndex: J.t,
          updateAudienceControlsValue: J.u,
          updateConvoCardState: aa.b,
          preUploadMedia: ma.e,
          addMedia: ma.b,
          processMultipleMedia: ma.g,
          removeMediaUpload: ma.i,
          updateSingleComposer: J.x,
          setActiveParentKey: J.s,
          copyDataFromInlineComposerToModalComposer: J.c,
          copyDataFromInlineReplyComposerToModalComposer: J.d,
        },
        Ga = Object(fa.e)(function () {
          return Object(ee.createStructuredSelector)({
            activeComposerIndex: Ea,
            activeUser: Sa,
            altTextNudgeType: ha.h,
            audienceControlsValue: Ca,
            composerData: Ka(),
            dataSaverMode: ha.k,
            excludedRecipients: _a,
            externalMedia: ja,
            externalMediaFiles: Ma,
            geoEnabled: ha.p,
            hasArticleNudge: ka,
            inReplyToStatus: Pa,
            inReplyToStatusId: Oa,
            isIntentRoute: Da,
            isSelfThreadReply: za,
            isSending: Ta,
            isSuperFollowsCreator: ne.l,
            positionCursorAtBeginning: Ua,
            loggedInUser: pa.e.selectLoggedInUser,
            prepopulatedText: La,
            previewTweetId: Fa,
            promotedContent: Wa,
            scheduledFor: J.o,
            selectedCommunityName: wa,
            sendingProgress: J.p,
            convoCardData: Aa,
            undoTweetSettings: ua.p,
            userLanguage: ne.o,
            quotedStatusId: Na,
          })
        }, qa),
        Xa = n('45mF'),
        Ya = n('c0ZR'),
        Za = n('W5XZ'),
        Qa = n('lsKC'),
        Ja = n('Drq4'),
        $a = n('I8M8'),
        eo = n('7myi'),
        to = n('7nmT'),
        no = n.n(to),
        ro = n('vbWy'),
        ao = n('Rp9C'),
        oo = n('Q5Mu'),
        io = n('N5qz'),
        co = 'tweetButton',
        so = 'tweetButtonInline',
        lo = Object(R.a)()
          .propsFromState(function () {
            return { loggedInUser: pa.e.selectLoggedInUser }
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
        uo = n('cHvH'),
        po = n('sgih'),
        mo = n('xKuM'),
        fo = n('5Vk4'),
        ho = j.a.create(function (e) {
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
        yo = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            r = e.onActionButtonClick,
            a = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return C.createElement(uo.a, null, function (e) {
            var c = e.windowWidth > j.a.theme.breakpoints.small
            return C.createElement(
              po.a,
              { onMaskClick: a, style: ho.sheetStyle, type: o, withMask: !0 },
              i &&
                C.createElement(mo.a, {
                  leftControl: C.createElement(fo.a, { backButtonType: t, onClick: r }),
                  position: 'absolute',
                }),
              C.createElement(V.a, { style: [ho.mainCard, c ? ho.largeScreenCard : ho.smallScreenCard] }, n),
            )
          })
        },
        go = F.a.cb7c0987,
        vo = F.a.de3bcf27,
        bo = F.a.e710ce75,
        _o = F.a.h11e5910,
        Co = F.a.b7ec04f3,
        wo = F.a.i62a03aa,
        To = j.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Eo = function (e) {
          var t = e.onBack,
            n = e.onNo,
            r = e.onYes
          return C.createElement(
            yo,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            C.createElement(k.b, { size: 'title4', style: To.itemPadding, weight: 'heavy' }, go),
            C.createElement(k.b, { color: 'gray700', style: To.itemPadding }, vo),
            C.createElement(k.b, { color: 'gray700', style: To.itemPadding }, bo),
            C.createElement(
              V.a,
              { style: To.buttonContainer },
              C.createElement(k.b, { size: 'title4', style: To.itemPadding, weight: 'heavy' }, _o),
              C.createElement(pe.a, { onPress: r, style: To.itemPadding, type: 'brandOutlined' }, Co),
              C.createElement(pe.a, { onPress: n, style: To.itemPadding, type: 'brandOutlined' }, wo),
            ),
          )
        },
        xo = n('cm6r'),
        So = j.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Oo = function (e) {
          var t = e.icon,
            n = e.label,
            r = e.onPress
          return C.createElement(xo.a, { interactiveStyles: null, onPress: r }, function (e) {
            return C.createElement(
              C.Fragment,
              null,
              C.createElement(pe.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: So.button,
                type: 'primaryOutlined',
              }),
              C.createElement(k.b, { color: 'gray700' }, n),
            )
          })
        },
        Ro = n('sjK1'),
        Io = n('FDY4'),
        Po = n('tevE'),
        Do = n('jV+4'),
        ko = n('UgB4'),
        Ao = n('TW8A'),
        jo = n('hiGS'),
        Mo = n('WtWS'),
        Fo = n('Lsrn'),
        Bo = n('k/Ka')
      function Lo(e, t) {
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
      function No(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Lo(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Lo(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ho = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Bo.a)(
          'svg',
          No(
            No({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Fo.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          C.createElement(
            'g',
            null,
            C.createElement('path', {
              d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
            }),
          ),
        )
      }
      Ho.metadata = { width: 24, height: 24 }
      var Vo = Ho,
        zo = [
          { headlineText: F.a.f3a7a80c, subTextLine1: F.a.ge52d1de, subTextLine2: null },
          { headlineText: F.a.j311bf49, subTextLine1: F.a.ae42ebff, subTextLine2: F.a.aa350ab1 },
          { headlineText: F.a.j18b2956, subTextLine1: F.a.f6bee896, subTextLine2: F.a.dddd0995 },
          { headlineText: F.a.d02a94fa, subTextLine1: F.a.dddd0995, subTextLine2: null },
          { headlineText: F.a.i018b746, subTextLine1: F.a.b8d85df9, subTextLine2: F.a.d5ca11f0 },
        ],
        Uo = F.a.h11e5910,
        Wo = F.a.abd845fd,
        Ko = F.a.bea869b3,
        qo = F.a.d96cf7cd,
        Go = F.a.d3145da8,
        Xo = j.a.create(function (e) {
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
            thanksCheckMark: { color: j.a.theme.colors.primary, marginRight: e.spaces.space8 },
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
            r = e.onDeleteTweet,
            a = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            c = e.onWeGotItWrong,
            s = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = C.useContext(le.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = zo[(p = p >= 0 && p <= 4 ? p : 0)]
          return C.createElement(uo.a, null, function (e) {
            var p,
              f,
              h,
              y = e.windowWidth
            return C.createElement(
              yo,
              {
                actionButtonType: 'close',
                onActionButtonClick: a,
                onMaskClick: a,
                sheetType: 'full',
                showActionButton: y > j.a.theme.breakpoints.medium,
              },
              C.createElement(Vo, { style: [Xo.profanityIcon, Xo.itemPadding] }),
              C.createElement(Po.a, { size: 'title4', style: Xo.itemPadding, weight: 'heavy' }, m.headlineText),
              C.createElement(k.b, { color: 'gray700', style: Xo.itemPadding }, m.subTextLine1),
              C.createElement(k.b, { color: 'gray700', style: Xo.itemPadding }, m.subTextLine2),
              C.createElement(
                V.a,
                { style: [Xo.tweetContainer, Xo.itemPadding] },
                C.createElement(
                  V.a,
                  { style: Xo.tweetContent },
                  C.createElement(Do.a, { name: l, profileImageUrl: u, screenName: d, style: Xo.userName }),
                  C.createElement(
                    V.a,
                    { style: Xo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          r,
                          a = ''
                        if (e.externalMediaDetails) a = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Ro.c) a = e.mediaFile.thumbnail
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
                      return C.createElement(
                        V.a,
                        { style: Xo.photos },
                        C.createElement(Io.a, {
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
                    C.createElement(k.b, { style: Xo.textStyle }, s),
                  ),
                ),
              ),
              t
                ? C.createElement(
                    V.a,
                    { style: Xo.thanksContainer },
                    C.createElement(Mo.a, { style: Xo.thanksCheckMark }),
                    C.createElement(k.b, { align: 'center', style: Xo.itemPadding }, Go),
                  )
                : C.createElement(k.b, { align: 'center', onPress: c, style: Xo.itemPadding, withUnderline: !0 }, Uo),
              y > j.a.theme.breakpoints.small
                ? C.createElement(
                    V.a,
                    { style: Xo.buttonContainer },
                    C.createElement(pe.a, { onPress: o, style: Xo.itemPadding, type: 'brandFilled' }, Wo),
                    C.createElement(pe.a, { onPress: i, style: Xo.itemPadding, type: 'brandOutlined' }, Ko),
                    C.createElement(pe.a, { onPress: r, style: Xo.itemPadding, type: 'destructiveText' }, qo),
                  )
                : ((p = C.createElement(ko.a, { style: { color: j.a.theme.colors.text } })),
                  (f = C.createElement(Ao.a, { style: { color: j.a.theme.colors.primary } })),
                  (h = C.createElement(jo.a, { style: { color: j.a.theme.colors.red500 } })),
                  C.createElement(
                    V.a,
                    { style: Xo.mobileButtonContainer },
                    C.createElement(Oo, { icon: p, label: Ko, onPress: i }),
                    C.createElement(Oo, { icon: f, label: Wo, onPress: o }),
                    C.createElement(Oo, { icon: h, label: qo, onPress: r }),
                  )),
            )
          })
        },
        Zo = lo(function (e) {
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
            p = C.useState(!1),
            m = we()(p, 2),
            f = m[0],
            h = m[1],
            y = C.useState(!1),
            g = we()(y, 2),
            v = g[0],
            b = g[1],
            _ = function (e) {
              var n = e.action,
                a = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: r }, element: a, page: o, section: 'dialog' })
            }
          return f
            ? C.createElement(Eo, {
                onBack: function () {
                  _({ action: 'back', element: 'action', page: 'nudge_more_info' }), h(!1)
                },
                onNo: function () {
                  _({ action: 'got_it_wrong_no', element: 'action', page: 'nudge_more_info' }), b(!0), h(!1)
                },
                onYes: function () {
                  _({ action: 'got_it_wrong_yes', element: 'action', page: 'nudge_more_info' }), b(!0), h(!1)
                },
              })
            : C.createElement(Yo, {
                hasSentFeedback: v,
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
                    h(!0)
                },
                tweetText: s,
                userName: l,
                userProfileImageUrl: u,
                userScreenName: d,
              })
        }),
        Qo = n('eb3s'),
        Jo = n('JYMr'),
        $o = n('sCk0'),
        ei = n('3A2y'),
        ti = n('zrOZ'),
        ni = n('s1N3'),
        ri = n('4FGy'),
        ai = n('mN6z'),
        oi = n('eyty'),
        ii = n('rziq'),
        ci = n('jTgF')
      function si(e, t) {
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
      function li(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? si(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : si(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ui(e) {
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return y()(this, n)
        }
      }
      var di = F.a.d28215f0,
        pi = F.a.ec909a54,
        mi = F.a.jd53409d,
        fi = {
          singular: F.a.edae65de,
          plural: F.a.a859846a,
          oneOfMultiple: F.a.e90118f5,
          someOfMultiple: F.a.c211dcb1,
        },
        hi = { singular: F.a.d7c26bfb, plural: F.a.a75e3ccc },
        yi = F.a.dcb7e3a0,
        gi = function (e) {
          var t,
            n,
            r = e.numberOfDescriptionsMissing,
            a = r === e.numberOfImages
          return (
            1 === r
              ? ((n = hi.singular), (t = a ? fi.singular : fi.oneOfMultiple))
              : ((n = hi.plural), (t = a ? fi.plural : fi.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(yi)
          )
        },
        vi = F.a.c1bf53b0,
        bi = F.a.bb8170da,
        _i = F.a.dad5a4b8,
        Ci = F.a.e65aed64,
        wi = F.a.bc2ceaf2,
        Ti = F.a.d8222374,
        Ei = F.a.j890123a,
        xi = F.a.bb01231c,
        Si = F.a.d4ab68e2,
        Oi = F.a.d8af8a4c,
        Ri = F.a.d09d4c05,
        Ii = F.a.i2209530,
        Pi = F.a.bf9b89e4,
        Di = F.a.f277e949,
        ki = F.a.b551cd22,
        Ai = F.a.f026a7fa,
        ji = F.a.a5d4fda0,
        Mi = F.a.ib067d6a,
        Fi = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Bi = { element: 'alt_text_prompt' },
        Li = { component: 'article_nudge' },
        Ni = { viewType: 'send_tweet' },
        Hi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Vi = (function (e) {
          f()(n, e)
          var t = ui(n)
          function n(e, r) {
            var a, o, c
            s()(this, n),
              (c = t.call(this, e, r)),
              _()(p()(c), '_getParentKey', function () {
                var e = c.props,
                  t = e.isInline
                return e.parentTweetId || (t ? sa.a.homeTimeline : sa.a.modal)
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
                  r = no.a.findDOMNode(c._composerRefs[t])
                if (r instanceof window.Element) {
                  var a = r.getBoundingClientRect(),
                    o = a.bottom,
                    i = a.top,
                    s = Math.max(i, window.scrollY)
                  if (s < window.pageYOffset || o > window.innerHeight) {
                    var l = n ? s - n() - 14 : s - 14,
                      u = Math.max(l, 0)
                    window.requestAnimationFrame(function () {
                      Fi ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
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
                !r && a && n(a).catch(t(Za.a)), !o && i && n(i).catch(t(Za.a))
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
                  : !('POP' === t && i && c._areComposersEmptyOrUnchanged && !Object(ht.a)(r)) || (c._resetDraft(), !0)
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
                    ? (c.setState({ showAltTextPrompt: !0 }), void c._scribe(li(li({}, Bi), {}, { action: 'show' })))
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
                  return C.createElement(ra, {
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
                return C.createElement(Qo.a, {
                  Icon: Ja.a,
                  cancelButtonLabel: bi,
                  confirmButtonLabel: vi({ numOfDescriptions: t }),
                  headline: mi,
                  onCancel: c._handleIgnoreAltTextPrompt,
                  onConfirm: c._handleAcceptAltTextPrompt,
                  onMaskClick: c._handleCancelAltTextPrompt,
                  text: gi({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(p()(c), '_renderToxicReplyNudge', function () {
                var e = c._getSingleComposerDataWithLatestText(c.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return C.createElement(Zo, {
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
                  e ? Object(yt.h)(e) && c._handleScheduleTweet() : c._checkToxicReplyAndSendTweet()
              }),
              _()(p()(c), '_handleTweetError', function (e, t) {
                return function (n) {
                  var r = c.props,
                    a = r.analytics,
                    o = r.createLocalApiErrorHandler
                  if (Object(ci.d)(n) && n.code === $a.b.CANCELED) return a.scribeAction(e), Promise.resolve()
                  var i = Object(ci.b)(n)
                  if (i) return c.setState({ errorMessage: i }), Promise.resolve()
                  o(li({}, t || Object(Xa.a)(void 0, !1)))(n)
                  var s = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  c.setState({ errorMessage: { text: s ? s.toast.text : ji } })
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
                    var r = Object(yt.c)(i.scheduledFor)
                    if (r) {
                      var a = Object(yt.b)(r),
                        o = Object(yt.i)(r),
                        s = ki({ scheduleDate: a, scheduleTime: o })
                      t({ text: s, action: { label: Di, link: '/compose/tweet/unsent/scheduled' } }),
                        c._scribeTweetSent(n[0], li(li({}, e), {}, { id_str: e.scheduled_id_str }), { isScheduled: !0 })
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
                      t({ text: Pi, action: { label: Di, link: '/compose/tweet/unsent/drafts' } }),
                      c._scribeTweetSent(n[0], li(li({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      c._updateConvoCardState(),
                      c._close()
                  })
                  .catch(c._handleTweetError('draft_tweet_cancel', oo.a))
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
                  f = e.selectedCommunityName,
                  h = e.send,
                  y = a.conversationControlsValue,
                  g = a.exclusivityControlValue,
                  v = void 0 === g ? void 0 : g,
                  b = c.isPreview,
                  _ = c.props.composerData.map(function (e) {
                    return c._getSingleComposerDataWithLatestText(e)
                  }),
                  C = Object(yt.c)(_[0].scheduledFor)
                if (C) {
                  var w = Object(yt.b)(C),
                    T = Object(yt.i)(C),
                    E = ki({ scheduleDate: w, scheduleTime: T })
                  return n({ text: E, action: { label: Di, link: '' } }), void c._close()
                }
                if (
                  (i.length > 0 && r.scribe({ element: 'mentions', action: 'edited' }),
                  c._conversationControlsCreationEnabled)
                )
                  if ('community' === y) r.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === y) {
                    var S = c._getSingleComposerDataWithLatestText(_[0]).text,
                      O = Object(x.d)(S)
                    r.scribe({
                      action: O ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === y && r.scribe({ action: 'send_my_followers_tweet' })
                var R = (null == u ? void 0 : u.community_id_str) || a.communityIdValue || void 0,
                  I = R ? '8.31.'.concat(R) : '',
                  P = o ? (R ? [o, I].join(',') : o) : I
                h({
                  sendData: _,
                  communityIdValue: R,
                  conversationControlsValue: y,
                  excludedRecipients: i,
                  exclusivityControlValue: v,
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
                    var r = e.length > 1 ? Ci : _i
                    if (R && f) {
                      var a = f,
                        o = e.length
                      r = pi({ numOfTweets: o, communityName: a })
                    }
                    var i = b && c.isReply
                    if (i || !b) {
                      var l = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? wi : r,
                        action: { label: Di, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
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
                      (Object(ci.d)(e) && e.code === $a.b.CANCELED) ||
                        r.scribe({ action: 'send_tweet_failure', data: d }),
                      _.length > 1 && c._scribeThreadSent(_, a, 'thread_send_failure'),
                      a.length &&
                        l.replace({
                          pathname: p.pathname,
                          state: li(
                            li({}, Object(ei.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: a[a.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(c._handleTweetError('send_tweet_cancel', oo.a))
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
                  f = { items: [ao.a.getTweetItem(t)] },
                  h = e.pollActive && e.pollValid,
                  y = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  g = e.mediaTags.length,
                  v = Object(ti.a)(
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
                  (c._scribe({ action: ''.concat(m, 'tweet') }, f),
                  i || !e.draftTweetId || e.scheduledTweetId || c._scribe({ action: ''.concat(m, 'draft_tweet') }, f),
                  c.isQuoteTweet &&
                    (c._scribe({ action: 'retweet_with_comment' }, f),
                    a && c._scribe(li(li({}, Li), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
                  c.isReply && c._scribe({ component: b, action: ''.concat(m, 'reply') }, f),
                  h && c._scribe({ action: ''.concat(m, 'poll_tweet') }, f),
                  c._hasPhoto(e) &&
                    (c._scribe({ action: ''.concat(m, 'photo_tweet') }, f),
                    y && c._scribe({ action: ''.concat(m, 'photo_tweet_with_alt_text') }, f),
                    g && c._scribe({ action: ''.concat(m, 'photo_tweet_with_tags') }, f)),
                  c._hasVideo(e) &&
                    (c._scribe({ action: ''.concat(m, 'video_tweet') }, f),
                    g && c._scribe({ action: ''.concat(m, 'video_tweet_with_tags') }, f)),
                  v.size)
                ) {
                  var _ = c._hasPhoto(e) ? 'photo' : 'video'
                  v.forEach(function (e) {
                    c._scribe({ action: ''.concat(m).concat(_, '_tweet_with_').concat(e, '_warning') }, f)
                  })
                }
                var C = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    c.isReply &&
                    !l &&
                    (i
                      ? c._scribe(li(li({}, C), {}, { action: 'save' }), { nudge_id: u })
                      : c._scribe(li(li({}, C), {}, { action: 'sent' }), { nudge_id: u })),
                  u || i || !c.isReply || l || c._scribe(li(li({}, C), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var w = t.id_str && ao.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  c._scribe({ element: 'remote', action: ''.concat(m, 'gif_tweet') }, { items: w ? [w] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(y || T) &&
                    c._scribe(
                      { element: 'remote', action: ''.concat(m, 'gif_tweet_with_alt_text') },
                      { event_info: y ? 'user_entered' : 'from_provider', items: w ? [w] : [] },
                    ),
                    g && c._scribe({ action: ''.concat(m, 'gif_tweet_with_tags') }, f)
                } else c._hasGif(e) && (c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet') }, f), y && c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet_with_alt_text') }, f))
              }),
              _()(p()(c), '_scribeThreadSent', function (e, t, n) {
                var r = c.props.inReplyToStatus,
                  a = { items: [ao.a.getSendThreadItem(e, t.length, !!r)] }
                c._scribe({ action: n }, a)
              }),
              _()(p()(c), '_scribeRetweet', function (e) {
                var t = c.props.hasArticleNudge,
                  n = { items: [ao.a.getTweetItem(e)] }
                c._scribe({ action: 'retweet' }, n),
                  t && c._scribe(li(li({}, Li), {}, { element: 'result', action: 'retweet' }), n)
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
                  }, n(ro.a)))
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
                  n && c._scribe(li(li({}, Li), {}, { element: 'result', action: 'cancel' })),
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
                  (c._scribe(li(li({}, Bi), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              _()(p()(c), '_handleIgnoreAltTextPrompt', function () {
                c._scribe(li(li({}, Bi), {}, { action: 'declined' })),
                  c.setState({ showAltTextPrompt: !1 }),
                  c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleCancelAltTextPrompt', function () {
                c._scribe(li(li({}, Bi), {}, { action: 'cancel' })),
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
                  r.replace({ pathname: a.pathname, state: Object(ei.a)(a.state || {}, 'quotedStatus') }),
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
                  (c.setState({ textMap: li(li({}, n), {}, _()({}, t, e)) }, function () {
                    i && i(c._areComposersValid())
                  }),
                  c.setState({ errorMessage: void 0 }),
                  Ct.b.isIOS())
                ) {
                  var s = o ? 0 : a
                  c._updateSingleComposer({ text: e }, s)
                }
              }),
              _()(
                p()(c),
                '_handleTextOnBlur',
                Object(or.a)(function (e, t) {
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
                      (c._updateSingleComposer({ pollActive: !1 }, 0), c.setState({ errorMessage: { text: di } })),
                      (null == a ? void 0 : a.text) === di && c.setState({ errorMessage: void 0 })
                }
                r(e, c._getParentKey())
              }),
              _()(p()(c), '_renderProgressBar', function () {
                var e = c.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return C.createElement(Jo.a, { progress: t ? Math.max(n, 0.02) : 0, style: zi.progressBar })
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
                      return Object(Ya.a)(e)
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
                    f = o.removeMediaUpload,
                    h = l[e],
                    y = h.pollActive,
                    g = Object(oi.e)(
                      null === (r = p()(c)) || void 0 === r || null === (a = r.context) || void 0 === a
                        ? void 0
                        : a.userClaims,
                    )
                  y ||
                    i(t, { location: oi.d.Tweet, canUploadLongVideo: g }).then(function (t) {
                      var r = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(h, t)) {
                        var a = h.media.map(function (e) {
                          return e.id
                        })
                        c._updateSingleComposer({ mediaIds: Object(ni.a)(a.concat(r)) }, e),
                          m(t, { onFailure: c._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: Mi }), f(r)
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
                    return Object(ri.a)(e, n)
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
                var r = !Object(ht.c)(c._getSingleComposerDataWithLatestText(t[0]))
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
                    return Object(ht.e)(c._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(p()(c), '_areComposersEmptyOrUnchanged', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(ht.d)(c._getSingleComposerDataWithLatestText(e), n)
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
                return 'string' == typeof t[e.key] ? li(li({}, e), {}, { text: t[e.key] }) : e
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
              (c._throttledSyncTexts = Object(ir.a)(c._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (c._keyCommandHandlers =
                ((o = {}), _()(o, ii.b, c.handleTweetOrRetweet), _()(o, ii.a, c.handleDismissComposer), o)),
              (c._keyCommandHandlersForActiveTypeahead = _()({}, ii.b, c.handleTweetOrRetweet)),
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
                    var u = li({}, null)
                    s && (u.text = s), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(s || (t && t.cardUrl) || n.length > 0 || r.length > 0) &&
                    !i &&
                    a.replace({
                      query: Object(ia.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(ei.a)(Object(ia.b)(c.state || {}), [
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
                    a.length >= 25 && e.composerData.length < 25 && r({ text: Ai }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : c.length > 0 && c !== e.externalMediaFiles && this._handleAddMediaFiles(0)(c),
                    d && !Object(ai.a)(a, e.composerData) && d && d(this._areComposersValid()),
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
                    f = r.history,
                    h = r.inReplyToStatus,
                    y = r.isInline,
                    g = r.isModal,
                    v = r.isSelfThreadReply,
                    b = r.isSending,
                    _ = r.isSuperFollowsCreator,
                    w = r.parentTweetId,
                    T = r.positionCursorAtBeginning,
                    E = r.richTextInputContext,
                    x = r.scheduledFor,
                    S = r.typeaheadWrapper,
                    O = r.userLanguage,
                    R = r.windowWidth,
                    I = this.state,
                    P = I.errorMessage,
                    D = I.focused,
                    k = I.shouldDisableButton,
                    A = I.showAltTextPrompt,
                    j = I.showDiscardTweetConfirmation,
                    M = I.showToxicReplyNudge,
                    F = I.typeaheadActive,
                    B = !g && F,
                    L = y ? 0 : this.props.activeComposerIndex,
                    N = B || y ? [u[L]] : u,
                    H = this._areComposersValid(),
                    z = this.hasNonCompliantQuote && this.isRetweet,
                    U = y ? V.a : $o.a,
                    W = y ? {} : { onAnimateComplete: g ? void 0 : this._handleAnimateComplete },
                    K = k || !H || z || this.isCommunityTweetFromProtectedUser,
                    q = (y && io.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    G = (y && io.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return C.createElement(
                    V.a,
                    { ref: this._setRootRef, style: !w && zi.root },
                    y ? this._renderProgressBar() : null,
                    P &&
                      C.createElement(
                        V.a,
                        { style: zi.inlineCallout },
                        C.createElement(Me.a, {
                          action:
                            null !== (e = P.action) &&
                            void 0 !== e &&
                            e.label &&
                            null !== (t = P.action) &&
                            void 0 !== t &&
                            t.link
                              ? { label: P.action.label, link: P.action.link }
                              : void 0,
                          text: P.text,
                          type: 'danger',
                        }),
                      ),
                    C.createElement(
                      V.a,
                      {
                        onFocus: this._handleFocus,
                        style: [zi.content, w && zi.contentInlineReply, g && zi.contentModal],
                      },
                      h ? this._renderReplyContext() : null,
                      l,
                      C.createElement(
                        U,
                        W,
                        N.map(function (e, t) {
                          var r = Object(yt.h)(e.scheduledFor),
                            l = u.indexOf(e),
                            w = p(e, t, N),
                            I =
                              g || y
                                ? C.createElement(
                                    pe.a,
                                    {
                                      behavioralEventContext: Ni,
                                      disabled: K,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: zi.inlineSendButton,
                                      testID: g ? co : so,
                                      type: 'brandFilled',
                                    },
                                    Object(Qa.a)({
                                      inReplyToStatus: !!h,
                                      isSelfThreadReply: !!v,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!r,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            P = n._getSingleComposerDataWithLatestText(e)
                          return C.createElement(
                            V.a,
                            { key: e.key },
                            C.createElement(
                              Wr,
                              a()(
                                {
                                  addToast: c,
                                  additionalToolbarContent: I,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && D,
                                  data: P,
                                  disableAddTweet: u.length >= 25,
                                  editable: !b && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: m,
                                  hidePoll: q,
                                  hideScheduling: G,
                                  history: f,
                                  index: l,
                                  isActive: l === L && !b,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: y,
                                  isInlineReply: n.isInlineReply,
                                  isLast: y || l === u.length - 1,
                                  isReply: !!h || n.isInlineReply,
                                  isSelfThreadReply: !!v,
                                  isSuperFollowsCreator: _,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: y ? d : i,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(P.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!T,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: E,
                                  scheduledFor: x,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: F,
                                  typeaheadWrapper: S,
                                  updateAudienceControlsValue: n._updateAudienceControlsValue,
                                  updateSingleComposer: n._updateSingleComposer,
                                  userLanguage: O,
                                  windowWidth: R,
                                },
                                w,
                              ),
                            ),
                          )
                        }),
                      ),
                      j
                        ? this._canSaveDraft
                          ? C.createElement(Qo.a, {
                              cancelButtonLabel: Si,
                              confirmButtonLabel: Ii,
                              headline: Oi,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Ri,
                            })
                          : C.createElement(Qo.a, {
                              confirmButtonLabel: Si,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Ei : Ti,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: xi,
                            })
                        : null,
                      A ? this._renderAltTextPrompt() : null,
                      M ? this._renderToxicReplyNudge() : null,
                      C.createElement(V.a, { style: b && zi.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(li(li({}, e), {}, { data: t }))
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
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== w.a.prompt
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
                    ? Hi.Quote
                    : this.isThread
                    ? Hi.Thread
                    : this.isReply
                    ? Hi.Reply
                    : Hi.Original
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
        })(C.Component)
      _()(Vi, 'defaultProps', {
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
        typeaheadWrapper: eo.a,
      }),
        _()(Vi, 'contextType', le.a),
        _()(Vi, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(x.c)(n.concat(t))
        })
      var zi = j.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: li({}, j.a.absoluteFillObject),
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
      t.a = Object(Ze.a)(Ga(Vi))
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var r = n('ERkP'),
        a = n('dWxr'),
        o = n.n(a),
        i = n('rHpw'),
        c = n('aITJ'),
        s = { clipPath: 'circle(0% at center)' },
        l = {
          strategy: function (e, t) {
            for (var n = o()(e.getText()), r = 0; r < n.length; r++)
              n[r].indices && 2 === n[r].indices.length && t(n[r].indices[0], n[r].indices[1])
          },
          component: function (e) {
            return r.createElement('span', { style: { color: i.a.theme.colors.link } }, e.children)
          },
        },
        u = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                r = t && n.getEntity(t)
              return !(!r || r.type !== _.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              o = (a && n.getEntity(a)) || {}
            return !(c.b.isFirefox() && c.b.firefoxVersion() < 49)
              ? r.Children.map(t, function (e) {
                  var t,
                    n = r.Children.map(e, function (e) {
                      return r.createElement('span', { style: s }, e)
                    })[0]
                  return r.cloneElement(
                    r.createElement('span', null),
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
        d = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var r, a, o = t.getText(); (r = e.exec(o)); ) n((a = r.index), a + r[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        },
        p = n('z4Oz'),
        m = n('zpdM'),
        f = function (e, t) {
          for (var n = 0, r = 0; r < e.length; r++) {
            var a = e[r],
              o = a.getText().length
            if (n + o >= t) return { blockKey: a.key, offset: t - n }
            n += o + 1
          }
          return Object.freeze({})
        },
        h = function (e, t) {
          var n = e.getCurrentContent(),
            r = n.getFirstBlock(),
            a = n.getLastBlock(),
            o = t.blockKey,
            i = void 0 === o ? a.key : o,
            c = t.offset,
            s = void 0 === c ? a.getText().length : c,
            l = e
              .getSelection()
              .merge({ anchorKey: r.key, anchorOffset: 0, focusKey: i, focusOffset: s, isBackward: !1 }),
            u = m.Modifier.removeInlineStyle(e.getCurrentContent(), l, 'overflow')
          return m.EditorState.push(e, u, 'change-inline-style')
        },
        y = function (e, t) {
          var n = t.blockKey,
            r = t.offset,
            a = e.getCurrentContent(),
            o = a.getLastBlock(),
            i = g(a, n, r)
          if (n) {
            var c = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: i,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              s = m.Modifier.applyInlineStyle(a, c, 'overflow')
            return m.EditorState.push(e, s, 'change-inline-style')
          }
          return e
        },
        g = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = n,
            a = e.getBlockForKey(t)
          if (a) {
            var o = a.getEntityAt(n)
            if (void 0 !== o) {
              var i = o && e.getEntity(o),
                c = i && i.data && i.data.id
              if (void 0 !== c)
                for (var s = n - 1; s >= 0; s--) {
                  var l = a.getEntityAt(s),
                    u = l && e.getEntity(l)
                  if (!u || !u.data || u.data.id !== c) {
                    r = s + 1
                    break
                  }
                }
            }
            return r
          }
        },
        v = 'TWEMOJI',
        b = 'IMMUTABLE',
        _ = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = m.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              r = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                p.a.getTwemojiEntities(e.getText()).forEach(function (a) {
                  if (2 === (a.indices && a.indices.length)) {
                    var o = n.createEntity(v, b, { url: a.url || null, id: r })
                    r += 1
                    var i = o.getLastCreatedEntityKey(),
                      c = e.getKey(),
                      s = t
                        .getSelection()
                        .merge({
                          anchorKey: c,
                          anchorOffset: a.indices[0],
                          focusKey: c,
                          focusOffset: a.indices[1],
                          isBackward: !1,
                        })
                    n = m.Modifier.applyEntity(o, s, i)
                  }
                })
              }),
              m.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: f,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [l, u, d],
              n = m.EditorState.createWithContent(m.ContentState.createFromText(e), new m.CompositeDecorator(t))
            return m.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              r = e.getSelection(),
              a = m.Modifier.insertText(n, r, t)
            return m.EditorState.push(e, a, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: v,
          updateOverflowStyle: function (e, t) {
            var n,
              r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              a = e.getSelection(),
              o = m.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              c = e.getCurrentContent().getSelectionAfter(),
              s = e.getCurrentContent(),
              l = s.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? f(l, t) : Object.freeze({})
            if ((r && ((o = h(o, d)), (n = !0)), u && ((o = y(o, d)), (n = !0)), n)) {
              var p = (o = m.EditorState.forceSelection(o, a)).getCurrentContent()
              ;(p = (p = p.set('selectionBefore', i)).set('selectionAfter', c)),
                (o = m.EditorState.set(e, { allowUndo: !0, currentContent: p }))
            }
            return o
          },
        })
    },
    keCP: function (e, t, n) {
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = n('97Jx'),
        v = n.n(g),
        b = (n('2G9S'), n('jwue'), n('+oxZ'), n('MvUL'), n('KqXw'), n('SV7d')),
        _ = n('rHpw'),
        C = 'singleline',
        w = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? _.a.theme.colors.gray700 : t,
            r = _.a.theme.spaces.space2
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
        T = n('ERkP'),
        E = n('k/Ka'),
        x = n('PxJJ'),
        S = n('w9LO'),
        O = n('fs1G'),
        R = (n('aWzz'), n('zpdM'))
      function I(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var P = function (e) {
          return Object(E.a)('div', e)
        },
        D = !1,
        k =
          ((t.a = T.forwardRef(function (e, t) {
            var n = b.d()
            return T.createElement(
              k,
              v()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            u()(n, e)
            var t = I(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                y()(s()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return R.EditorState.acceptSelection(
                    t,
                    new R.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                y()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return R.EditorState.forceSelection(t, t.getSelection())
                }),
                y()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    r = t.editorState,
                    a = t.onChange
                  n
                    ? null == a || a(R.EditorState.moveFocusToEnd(r))
                    : null == a || a(R.EditorState.moveSelectionToEnd(r))
                }),
                y()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = w({ placeholderTextColor: t })
                  var r = document.head
                  r && r.insertBefore(n, r.firstChild)
                }),
                y()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                y()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                y()(s()(e), 'value', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                y()(s()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                y()(s()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                y()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                y()(s()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    r = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && r.push(e)
                    }),
                    r.length && (null == n ? void 0 : n(r)) ? 'handled' : 'not-handled'
                  )
                }),
                y()(s()(e), '_onPastedText', function (t, n, r) {
                  var a = e.props,
                    o = a.multiline,
                    i = a.onChange
                  return !o && i
                    ? (i(
                        R.EditorState.push(
                          r,
                          R.Modifier.replaceText(r.getCurrentContent(), r.getSelection(), t.replace(/[\r\n]+/g, ' ')),
                          'insert-characters',
                        ),
                      ),
                      'handled')
                    : 'not-handled'
                }),
                y()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    r = n.dismissComposerCommandName,
                    a = n.sendTweetCommandName,
                    o = R.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && o(t) ? a : 27 === t.keyCode ? r : Object(R.getDefaultKeyBinding)(t)
                }),
                y()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    r = n && n[t]
                  return r ? (r(), 'handled') : 'not-handled'
                }),
                y()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var r = e.props.handleReturn
                  return null == r || r(t, n), 'handled'
                }),
                y()(s()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    r = t.maxNumberOfLines,
                    a = t.multiline,
                    o = t.numberOfLines,
                    i =
                      _.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ]
                  return { minHeight: (a && o ? o : 1) * i, maxHeight: (a && r ? r : 1) * i }
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
                        D || (this._setDraftJsStyle(), (D = !0))
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
                        a = t.ariaControls,
                        o = t.ariaLabel,
                        i = t.editorState,
                        c = t.handleReturn,
                        s = t.multiline,
                        l = t.onChange,
                        u = t.onFocus,
                        d = t.onKeyDown,
                        p = t.onKeyPress,
                        m = t.onKeyUp,
                        f = t.placeholder,
                        h = t.spellCheck,
                        g = t.style,
                        v = t.testID
                      return T.createElement(
                        P,
                        {
                          className: s ? void 0 : C,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), g],
                        },
                        T.createElement(R.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: r,
                          ariaControls: a,
                          ariaLabel: o,
                          ariaMultiline: s,
                          customAttrs:
                            ((e = {}),
                            y()(e, S.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            y()(e, 'onKeyPress', p),
                            y()(e, 'onKeyUp', m),
                            e),
                          customStyleMap: A(_.a.theme),
                          editorState: i,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: s ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: l,
                          onFocus: u,
                          onKeyDown: d,
                          placeholder: f,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== h,
                          stripPastedStyles: !0,
                          tabIndex: 0,
                          webDriverTestID: v,
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
          })(T.Component))
      y()(k, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: O.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (k.propTypes = {})
      var A = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
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
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return Ye
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('MvUL'), n('KqXw'), n('uFXj'), n('ERkP')),
        v = n('HPNB'),
        b = n('h5NW'),
        _ = n('m3Bd'),
        C = n.n(_),
        w = (n('vrRf'), n('z84I'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        E = n('AspN'),
        x = n('XOJV'),
        S = n('G6rE'),
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
                y()(e, t, n[t])
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
        F = Object(I.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          S.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        B = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        L = M(function (e) {
          return e.inReplyToStatusId
        }),
        N = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        H = M(function (e) {
          return e.defaultText
        }),
        V = M(function (e) {
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
        K = M(function (e) {
          return e.headingTitle
        }),
        q = M(function (e) {
          return e.selectedCommunityId
        }),
        G = Object(I.createSelector)(
          function (e) {
            return w.l(e, '')
          },
          function (e, t) {
            var n = H(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : V(e, t)
          },
          E.j,
          N,
          function (e, t, n, r, a) {
            return e.map(function (e, o) {
              return j(
                j({}, ((i = e).cardUrl, i.mediaIds, C()(i, ['cardUrl', 'mediaIds']))),
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
          activeUser: F,
          composerData: G,
          draftTweets: D.e,
          inReplyToStatus: function (e, t) {
            var n = B(0, t) || L(e, t)
            return n ? x.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: B,
          isIntentRoute: N,
          isSelfThreadReply: z,
          isSending: function (e) {
            return w.n(e, '')
          },
          scheduledTweets: k.f,
          sendingProgress: w.p,
          composeSemanticCoreId: M(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: U,
          subtitle: W,
          title: K,
          selectedCommunityIdFromLocationState: q,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(O.y)(e, O.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(D.d),
          createScheduledTweetApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(k.d),
          fetchScheduledTweets: k.c,
          fetchDraftTweets: D.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(O.v)(O.e)
          },
          updateAudienceControlsValue: w.u,
        },
        Z = Object(P.g)(X, Y),
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
                y()(e, t, n[t])
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
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            g.createElement('path', {
              d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
            }),
          ),
        )
      }
      me.metadata = { width: 32, height: 32 }
      var fe = me,
        he = n('MWbm'),
        ye = n('4zmP'),
        ge = n('rHpw'),
        ve = ne.a.ed33a3b6,
        be = ne.a.d5bda8b3,
        _e = ne.a.i859a9d3,
        Ce = ge.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        we = se(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            r = g.useContext(oe.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && r
            ? g.createElement(
                he.a,
                { style: Ce.revueCallout },
                g.createElement(ye.a, {
                  Icon: fe,
                  action: {
                    label: _e,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: ve,
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
        xe = n('Dtul'),
        Se = n('zh9S'),
        Oe = n('7JQg'),
        Re = 'tweetButton',
        Ie = n('/yvb'),
        Pe = n('JYMr'),
        De = n('cHvH'),
        ke = n('feu+'),
        Ae = n('7N4s'),
        je = n('oQhu'),
        Me = n('3A2y')
      function Fe(e, t) {
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
            ? Fe(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Le(e) {
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ne = ne.a.b8f0483e,
        He = ne.a.a133d13e,
        Ve = ne.a.a1183237,
        ze = ne.a.da2663f5,
        Ue = ne.a.j24c37b2,
        We = 'compose',
        Ke = { page: We },
        qe = { page: We, section: 'reply' },
        Ge = { context: 'compose_intent_logged_in' },
        Xe = { viewType: 'send_tweet' },
        Ye = (function (e) {
          u()(n, e)
          var t = Le(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { isValid: !1 }),
              y()(s()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              y()(
                s()(e),
                '_handleAppBarHeight',
                Object(je.a)(function () {
                  var t = Ee.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              y()(s()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              y()(s()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              y()(s()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              y()(s()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              y()(s()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? qe : Ke
              }),
              y()(s()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? Ge : J.a
              }),
              y()(s()(e), '_renderAppBarRightControl', function () {
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
                  : g.createElement(
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
              y()(s()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  r = e.props,
                  a = r.isSending,
                  o = r.sendingProgress
                return g.createElement(
                  g.Fragment,
                  null,
                  g.createElement(Pe.a, {
                    progress: a ? Math.max(o, 0.02) : 0,
                    style: [Ze.progressBar, n && Ze.progressBarModal],
                  }),
                  t,
                )
              }),
              y()(s()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  r = t.hideUnsentTweetsButton,
                  a = t.scheduledTweets
                if (!r && (a.length > 0 || n.length > 0))
                  return g.createElement(
                    he.a,
                    { style: Ze.unsentHeadingContainer },
                    g.createElement(Ie.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, He),
                  )
              }),
              y()(s()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Se.c)(Be(Be({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              y()(s()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              y()(s()(e), '_handleComposeContainerRef', function (t) {
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
                  ;(this._unlockReload = xe.a.acquire()),
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
                    f = t.typeaheadWrapper,
                    h = s && !n,
                    y = this.context.isModal
                  return g.createElement(
                    Oe.b,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    g.createElement(De.a, null, function (t) {
                      var s = t.windowWidth,
                        _ = v.a.shouldRenderAsModal(s),
                        C = (h || e.showCommunityAudienceEducation) && _,
                        w = (null == o ? void 0 : o.length) > 1
                      return g.createElement(
                        g.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? g.createElement(ke.a, {
                              actionLabel: Ue,
                              graphicDisplayMode: 'none',
                              headline: Ve,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: ze,
                              withCloseButton: !1,
                            })
                          : null,
                        h && g.createElement(re.a, { history: c, location: l }),
                        !C &&
                          g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
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
                              g.createElement(b.a, {
                                activeUser: n,
                                composeHeader: r,
                                composeSemanticCoreId: a,
                                customizePropsForSingleComposerItem: i,
                                history: c,
                                isModal: y,
                                location: l,
                                onCloseComposer: e._handleCloseComposer,
                                onHandleAppBarHeight: e._handleAppBarHeight,
                                onRef: e._handleComposeContainerRef,
                                quotedStatus: u,
                                richTextInputContext: d,
                                setValidity: e._setValidity,
                                typeaheadWrapper: f,
                                windowWidth: s,
                              }),
                            ),
                            w ? g.createElement(we, null) : null,
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
        })(g.Component)
      y()(Ye, 'contextType', Ae.b)
      var Ze = ge.a.create(function (e) {
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
      t.default = Z(Ye)
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
          f = [
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
        return f ? ''.concat(f).concat(' ') : void 0
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('z84I'), n('DfhM'), n('ERkP')),
        v = n('zfvc'),
        b = n('RhWx'),
        _ = n.n(b),
        C = (n('yH/f'), n('M+/F'), n('zrc3')),
        w = Object.freeze({ in: 'in', out: 'out', static: 'static' })
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
            r = f()(e)
          if (t) {
            var a = f()(this).constructor
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
            y()(s()(e), 'state', {
              isAnimating: !1,
              renderChildren: g.Children.toArray(e.props.children).map(function (e) {
                return { status: w.static, child: e }
              }),
            }),
            y()(s()(e), '_handleEachAnimateComplete', function () {
              var t = e.state.isAnimating,
                n = e.props,
                r = n.children,
                a = n.onAnimateComplete
              t &&
                (a && a(),
                e.setState({
                  renderChildren: g.Children.toArray(r).map(function (e) {
                    return { status: w.static, child: e }
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
                    return g.createElement(
                      v.a,
                      {
                        animateMount: r !== w.static,
                        key: n.key,
                        onAnimateComplete: e._handleEachAnimateComplete,
                        show: r !== w.out,
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
                                    return { child: e, status: w.out }
                                  }),
                                ),
                              ),
                              'break'
                            )
                          var o = t[n],
                            i = e[r]
                          if (o.key === i.key) a.push({ child: o, status: w.static }), (n += 1)
                          else {
                            var c = Object(C.a)(t, function (e) {
                              return e.key === i.key
                            })
                            c >= 0
                              ? (a.push.apply(
                                  a,
                                  _()(
                                    t.slice(n, c).map(function (e) {
                                      return { child: e, status: w.in }
                                    }),
                                  ).concat([{ child: t[c], status: w.static }]),
                                ),
                                (n = c + 1))
                              : a.push({ child: i, status: w.out })
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
                              return { child: e, status: w.in }
                            }),
                          ),
                        ),
                      a
                    )
                  })(
                    t.renderChildren.map(function (e) {
                      return e.child
                    }),
                    g.Children.toArray(e.children),
                  )
                  return {
                    renderChildren: n,
                    isAnimating: !n.every(function (e) {
                      return e.status === w.static
                    }),
                  }
                },
              },
            ],
          ),
          n
        )
      })(g.Component)
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
    wa7Z: function (e, t, n) {
      'use strict'
      var r = n('wAC9')
      t.a = function (e) {
        return Object(r.a)({
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
          return l
        })
      var r = n('ERkP'),
        a = n('h5NW'),
        o = n('MWbm'),
        i = n('7N4s'),
        c = n('cHvH'),
        s = n('rHpw'),
        l = function (e) {
          var t = e.history,
            n = e.location,
            s = e.parentTweetId,
            l = e.replyPressToggle,
            d = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = r.useContext(i.b).isModal
          return r.createElement(c.a, null, function (e) {
            var i = e.windowWidth
            return r.createElement(
              o.a,
              { style: u.root },
              r.createElement(a.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: n,
                parentTweetId: s,
                replyPressToggle: l,
                richTextInputContext: d,
                typeaheadWrapper: p,
                windowWidth: i,
              }),
            )
          })
        },
        u = s.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, zIndex: 1 } }
        })
      t.default = l
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
        f = s.a.create(function (e) {
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
          h = e.warningCount,
          y = n - t,
          g = y >= 0 ? p({ count: i(y) }) : d({ count: i(t - n) }),
          v =
            t >= h
              ? r.createElement(
                  l.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: s.a.visuallyHidden },
                  g,
                )
              : null,
          b = Object(a.a)(y, n),
          _ = t >= n ? 'red500' : t >= h ? 'yellow500' : 'primary',
          C = r.createElement(c.a, {
            color: _,
            progress: b,
            size: t >= h ? 30 : 20,
            style: [f.progressCircle, y <= -10 && f.hide],
          }),
          w = t >= h ? r.createElement(l.a, { style: [f.text, y > 0 ? f.gray700 : f.red500] }, i(y)) : null
        return r.createElement(
          u.a,
          { style: [f.root, f.center] },
          v,
          C,
          r.createElement(u.a, { style: [s.a.absoluteFill, f.center] }, w),
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
        f = n('t62R'),
        h = n('CKsB'),
        y = n('/yvb'),
        g = n('rHpw'),
        v = n('Zg3A'),
        b = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        _ = n.n(b),
        C = n('Lsrn'),
        w = n('k/Ka')
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
      var x = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(w.a)(
          'svg',
          E(
            E({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [C.a.root, e.style], viewBox: '0 0 24 24' },
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
      x.metadata = { width: 24, height: 24 }
      var S = x,
        O = n('boUI'),
        R = n('EweD'),
        I = p.a.g6185a9e,
        P = p.a.g2d04222,
        D = p.a.baffe39a,
        k = p.a.af293dc2,
        A = p.a.h1053f7e,
        j = p.a.bf994ab2,
        M = p.a.cf7f7e39,
        F = p.a.cfd2f35d,
        B = g.a.create(function (e) {
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
                l.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, I),
                l.createElement(f.b, { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' }, P),
              ),
              l.createElement(
                m.a,
                null,
                l.createElement(h.a, {
                  Icon: v.a,
                  actionText: D,
                  isSelected: u.a.all === i,
                  onClick: c(u.a.all),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                l.createElement(h.a, {
                  Icon: S,
                  actionText: k,
                  isSelected: u.a.community === i,
                  onClick: c(u.a.community),
                  selectable: !0,
                  style: B.menuRow,
                  withIconAsThumbnail: !0,
                }),
                l.createElement(h.a, {
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
                      y.a,
                      {
                        key: 'button_cancel',
                        onPress: r,
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
        H = n('efqG')
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
          f = l.useCallback(function () {
            return p(!1)
          }, []),
          h = r ? (d ? N.a.VISIBILITY_BEHAVIOR.forceVisible : N.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          y = 'function' == typeof t ? t({ openPopover: m, closePopover: f }) : t
        return l.createElement(
          H.a,
          {
            disabled: o,
            onDismiss: f,
            renderContent: function (t, n) {
              e.children, e.controlled
              var r = i()(e, ['children', 'controlled'])
              return l.createElement(L, a()({}, r, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: h,
          },
          y,
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
