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
        }),
        n.d(t, 'i', function () {
          return O
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
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
        g = Object.freeze({
          initial: { fetchStatus: i.a.NONE },
          lastSearch: { fetchStatus: i.a.NONE },
          lastSelectedPlace: void 0,
        })
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
            return Object(l.l)(t()) && Object(u.c)(t()) === c.b.granted
              ? e(Object(u.b)())
                  .then(function () {
                    return e(x())
                  })
                  .then(function () {
                    return w(t())
                  })
              : Promise.resolve()
          }
        },
        S = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        O = function (e) {
          return { type: S, payload: e }
        }
      s.a.register(
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
                c = t.payload
              return m(m({}, e), {}, r()({}, o, { fetchStatus: i.a.LOADED, results: c }))
            case S:
              var s = t.payload
              return m(m({}, e), {}, { lastSelectedPlace: null != s ? s : void 0 })
            default:
              return e
          }
        }),
      )
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        m = n('ERkP'),
        h = n.n(m),
        f = n('rHpw'),
        g = n('MWbm')
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var v = (function (e) {
          s()(n, e)
          var t = y(n)
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
                  return h.a.createElement(g.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        b = f.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
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
        c = n('SrIh'),
        s = i.a.a5d4fda0,
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
            t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
          return {
            customErrorHandler: function (n) {
              var o = n.context
              return (
                !n instanceof r.a && (n.message = 'Strato error occurred in '.concat(o.id, ': ').concat(o.action)),
                Object(c.a)(n, { extra: { context: o, isStrato: !0 } }),
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
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
        o = n('Y9Ll'),
        i = n.n(o),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('N+ot'),
        u = n.n(l),
        d = n('AuHH'),
        p = n.n(d),
        m = n('ERkP'),
        h = n.n(m),
        f = n('3XMw'),
        g = n.n(f),
        y = n('rHpw'),
        v = n('+/1j'),
        b = n('MWbm')
      function _(e) {
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
            a = p()(e)
          if (t) {
            var r = p()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return u()(this, n)
        }
      }
      var w = g.a.e5b0063d,
        C = 0,
        T = (function (e) {
          s()(n, e)
          var t = _(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(C)), (C += 1), e
          }
          return (
            i()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = w({ title: n })
                  return h.a.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    h.a.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: y.a.visuallyHidden,
                      },
                      n,
                    ),
                    h.a.createElement(b.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.a = T
    },
    '6XNv': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('OZaJ')
      var a = n('RhWx'),
        r = n.n(a),
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
        y = n('KEM+'),
        v = n.n(y),
        b = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(b),
        w = n('t62R'),
        C = n('piX5'),
        T = n('4r2z'),
        x = n('FG+G'),
        E = n('rHpw'),
        S = (n('aWzz'), n('k/Ka')),
        O = n('shC7'),
        R = n('MWbm')
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return h()(this, n)
        }
      }
      function P(e, t) {
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
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var k = _.a.forwardRef(function (e, t) {
          return Object(S.a)('select', A(A({}, e), {}, { ref: t }))
        }),
        D = function (e) {
          return Object(S.a)('option', e)
        },
        M = 1,
        j = (function (e) {
          p()(n, e)
          var t = I(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              v()(u()(a), '_selectRef', _.a.createRef()),
              v()(u()(a), 'state', { isFocused: !1 }),
              v()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  c = o.value
                n && n(c, i - (r ? 1 : 0))
              }),
              v()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              v()(u()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t()
              }),
              (a._id = 'SELECTOR_'.concat(M)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (M += 1),
              a
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
                    a = e.errorText,
                    o = e.hasError,
                    i = e.helperText,
                    c = e.options,
                    s = e.style,
                    l = e.testID,
                    u = e.value,
                    d = e.withEmptyOption,
                    p = this.state.isFocused,
                    m = w.b.getLanguage(),
                    h =
                      'ja' === m
                        ? E.a.theme.fontFamilies.japan
                        : O.a.getConstants().isRTL || T.a.isLocaleRTL(m)
                        ? E.a.theme.fontFamilies.rtl
                        : E.a.theme.fontFamilies.normal,
                    f = void 0 === o ? !!a : o,
                    g = new Set()
                  a && g.add(this._errorID), t && g.add(t), i && g.add(this._helperID)
                  var y = g.size ? r()(g).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      R.a,
                      {
                        style: [
                          C.a.border,
                          B.container,
                          n && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          f && C.a.invalidBorderColor,
                          p && f && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
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
                          style: [B.select, { fontFamily: h }, n && C.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? _.a.createElement(D, { disabled: !0, style: B.option, value: '' }) : null,
                        c.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            D,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: B.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(x.a, {
                        style: [B.dropdownCaret, p && C.a.validColor, (o || a) && C.a.invalidColor],
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
                  return _.a.createElement(
                    w.b,
                    {
                      accessibilityRole: 'label',
                      color: n || t ? 'red500' : r ? 'primary' : 'gray700',
                      nativeID: this._labelID,
                      style: B.label,
                    },
                    a,
                  )
                },
              },
              {
                key: '_renderHelperText',
                value: function () {
                  return _.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'gray700', nativeID: this._helperID, style: B.helperText },
                      this.props.helperText,
                    ),
                  )
                },
              },
              {
                key: '_renderErrorText',
                value: function () {
                  return _.a.createElement(
                    R.a,
                    { accessibilityLiveRegion: 'polite' },
                    _.a.createElement(
                      w.b,
                      { color: 'red500', nativeID: this._errorID, style: B.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      v()(j, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (j.propTypes = {})
      var B = E.a.create(function (e) {
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
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    Drq4: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    FS1z: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('VrFO'),
        r = n.n(a),
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
        y = (n('2G9S'), n('ERkP')),
        v = n.n(y),
        b = n('rxPX'),
        _ = n('0KEI'),
        w = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        C = function (e, t) {
          return t.module.selectItems(e)
        },
        T = Object(b.a)()
          .propsFromState(function (e) {
            return { fetchStatus: w, items: C }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        x = n('v//M'),
        E = n('sIe2'),
        S = n('3XMw'),
        O = n.n(S),
        R = n('TEoO')
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var P = O.a.i9028824,
        A = 'sliceTimeline',
        k = function (e) {
          return e
        },
        D = { viewType: 'timeline' },
        M = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              g()(s()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  o = t.numColumns,
                  i = t.onScrollEnd,
                  c = t.renderer,
                  s = t.withoutHeadroom
                return !a || o < 1
                  ? null
                  : 1 === o
                  ? v.a.createElement(R.a, {
                      cacheKey: A,
                      footer: n,
                      identityFunction: k,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : v.a.createElement(E.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: k,
                      numColumns: o,
                      renderItem: c,
                    })
              }),
              g()(s()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              g()(s()(e), '_handleFetch', function () {
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
                    ? v.a.createElement(x.a, {
                        accessibilityLabel: P,
                        behavioralEventContext: D,
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
        })(v.a.Component)
      g()(M, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var j = T(M)
      t.a = j
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
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('5UID'),
        s = n('3GUV'),
        l = n('iBK2'),
        u = i.a.createElement(s.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, ['accessibilityTitle']),
            a = i.a.createElement(l.b, n)
          return t ? i.a.createElement(c.a, { title: t }, a) : a
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
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
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
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
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
      function s(e) {
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
          return function (e, t) {
            return v()
              .then(function (t) {
                return e({ payload: t, type: f })
              })
              .catch(function (t) {
                return e(h(o.b.denied)), Promise.reject(t)
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
      i.a.register(
        r()({}, l, function () {
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
        C = n.n(w),
        T = n('ye3X'),
        x = n('pXBW'),
        E = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        O = n('v6aA'),
        R = n('+Kfv'),
        I = n('eSoz'),
        P = n('rxPX'),
        A = function (e, t) {
          var n = t.communityId
          return n ? I.c.select(e, n) : void 0
        },
        k = Object(P.a)().propsFromState(function () {
          return { community: A }
        }),
        D = n('MtXG'),
        M = n('t62R'),
        j = n('CKsB'),
        B = n('rHpw'),
        L = n('3XMw'),
        F = n.n(L),
        N = F.a.d58baa7e,
        V = k(
          C.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var o,
              i = n.member_count
            return C.a.createElement(j.a, {
              actionSubText:
                ((o = N(i)),
                C.a.createElement(
                  D.a.Group,
                  null,
                  C.a.createElement(
                    D.a,
                    null,
                    C.a.createElement(
                      M.b,
                      { color: 'white' },
                      C.a.createElement(
                        F.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        C.a.createElement(D.a.Value, null, F.a.ibd0106d({ formattedCount: o })),
                        C.a.createElement(D.a.Label, null, F.a.cface2d0({ count: i })),
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
        z = n('0zXz'),
        W = n('FS1z'),
        U = n('MWbm'),
        G = n('yw4N'),
        K = n('/yvb'),
        q = n('+Eiw'),
        X = n('Zg3A'),
        Z = n('EyD/'),
        Y = F.a.e815fc33,
        J = F.a.c63602d3,
        Q = F.a.baffe39a,
        $ = F.a.aa4209e8,
        ee = F.a.d0748dae,
        te = F.a.abd845fd,
        ne = F.a.d58baa7e,
        ae = B.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: q.a.getBackgroundImage() },
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
            c = e.isSuperFollowsCreator,
            s = e.onAudienceControlsValueChange,
            l = e.sliceModule,
            u = C.a.useContext(O.a),
            d = a.communityIdValue || void 0,
            p = a.exclusivityControlValue || void 0,
            m = a.trustedFriendsValue || void 0,
            h = u.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            f = C.a.useCallback(
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
          return C.a.createElement(
            U.a,
            { style: ae.root },
            C.a.createElement(
              G.a,
              { style: ae.viewport },
              C.a.createElement(
                C.a.Fragment,
                null,
                C.a.createElement(M.b, { size: 'headline1', style: ae.title, weight: 'bold' }, Y),
                C.a.createElement(
                  R.a,
                  { viewType: 'everyone' },
                  C.a.createElement(j.a, {
                    Icon: X.a,
                    actionText: Q,
                    isSelected: !p && !d && !m,
                    onClick: f({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: ae.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                c
                  ? C.a.createElement(j.a, {
                      Icon: Z.a,
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
                  ? C.a.createElement(j.a, {
                      Icon: Z.a,
                      actionSubText:
                        ((t = 5),
                        (n = ne(t)),
                        C.a.createElement(
                          D.a.Group,
                          null,
                          C.a.createElement(
                            D.a,
                            null,
                            C.a.createElement(
                              M.b,
                              { color: 'white' },
                              C.a.createElement(
                                F.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                C.a.createElement(D.a.Value, null, F.a.a5f7b70f({ formattedCount: n })),
                                C.a.createElement(D.a.Label, null, F.a.a7daec1e({ count: t })),
                              ),
                            ),
                            C.a.createElement(K.a, { onPress: g, size: 'xSmall', type: 'primaryText' }, te),
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
              o && l && i
                ? C.a.createElement(
                    U.a,
                    null,
                    C.a.createElement(
                      R.a,
                      { viewType: 'community' },
                      C.a.createElement(M.b, { style: ae.title, weight: 'bold' }, J),
                      C.a.createElement(W.a, {
                        module: l,
                        noItemsRenderer: z.a,
                        renderer: function (e) {
                          return C.a.createElement(V, {
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
        ce = n('hqKg'),
        se = n('li/m'),
        le = n('RqPI'),
        ue = n('xZGM'),
        de = n('0KEI'),
        pe = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? I.c.select(e, n) : void 0
        },
        me = function (e, t) {
          return Object(ue.z)(e, ue.f)
        },
        he = Object(P.a)()
          .propsFromState(function () {
            return {
              communities: I.f,
              educationalVisibilityFlag: me,
              hasMemberships: se.d,
              selectedCommunity: pe,
              sliceModule: Object(ce.createSelector)(le.q, function (e) {
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
        ve = n('efqG')
      function be(e) {
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
      var _e = F.a.baffe39a,
        we = F.a.e815fc33,
        Ce = F.a.aa4209e8,
        Te = F.a.d0748dae,
        xe = C.a.createElement(fe.a, null),
        Ee = (function (e) {
          h()(n, e)
          var t = be(n)
          function n(e, a) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e, a)),
              _()(p()(r), '_renderContent', function (e) {
                var t = r.props,
                  n = t.audienceControlsValue,
                  a = t.hasMemberships,
                  o = t.isC9sParticipationEnabled,
                  i = t.isSuperFollowsCreator,
                  c = t.sliceModule
                return C.a.createElement(re, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
                  history: ge.a,
                  isC9sParticipationEnabled: o,
                  isSuperFollowsCreator: i,
                  onAudienceControlsValueChange: r._handleAudienceControlsValueChange,
                  sliceModule: c,
                })
              }),
              _()(p()(r), '_handleAudienceControlsValueChange', function (e) {
                var t = r.props.updateSingleComposer
                r._handleDismissEducationalVisibilty(),
                  r.props.onAudienceControlsValueChange(e),
                  ['super_followers_exclusive', 'community_members', 'trusted_friends_tweet'].indexOf(e._type) > -1 &&
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
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.audienceControlsValue,
                    a = t.educationalVisibilityFlag,
                    o = t.hasMemberships,
                    i = t.isSuperFollowsCreator,
                    c = t.selectedCommunity,
                    s = this.state.popoverIsOpen,
                    l = this.context.featureSwitches.isTrue('c9s_ui_colors_enabled_rweb'),
                    u = this.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
                    d = n.communityIdValue || !1,
                    p = n.exclusivityControlValue || !1,
                    m = n.trustedFriendsValue || !1,
                    h = a && !c,
                    f = _e
                  if ((d && null != c && c.name ? (f = c.name) : p ? (f = Ce) : m && (f = Te), p))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (d && null != c && c.theme && l) {
                    var g = ye.a.getCommunityUIColorName(c.theme)
                    e = { color: g, borderColor: g, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o || u
                    ? C.a.createElement(
                        R.a,
                        { viewType: 'communities_controls' },
                        C.a.createElement(
                          U.a,
                          { style: Se.container },
                          C.a.createElement(
                            ve.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: h ? 'forceVisible' : 'interactive',
                            },
                            C.a.createElement(
                              K.a,
                              r()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: we,
                                  accessibilityRole: 'button',
                                  icon: xe,
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
        })(C.a.Component)
      _()(Ee, 'contextType', O.a)
      var Se = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Oe = he(Ee),
        Re = n('ddV6'),
        Ie = n.n(Re),
        Pe = n('PKbs'),
        Ae = function (e, t) {
          var n = t.selectedCommunityId
          return n ? I.c.select(e, n) : void 0
        },
        ke = Object(P.a)()
          .propsFromState(function () {
            return { community: Ae }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: I.c.fetchOneIfNeeded,
            }
          }),
        De = n('YeIG'),
        Me = n('21zW'),
        je = F.a.gfca5254,
        Be = F.a.f510c8b2,
        Le = C.a.createElement(M.b, { weight: 'bold' }, Be),
        Fe = B.a.create(function (e) {
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
        Ne = ke(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          C.a.useEffect(
            function () {
              o && Object(De.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var c = C.a.useState(!1),
            s = Ie()(c, 2),
            l = s[0],
            u = s[1],
            d = C.a.useContext(O.a).featureSwitches,
            p = C.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return C.a.createElement(Pe.b, {
                    badgeStyle: Fe.badgeStyle,
                    headerContainerStyle: Fe.rulesHeader,
                    heading: Le,
                    ruleContainerStyle: Fe.ruleContainerStyle,
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
            return C.a.createElement(
              U.a,
              { style: Fe.container },
              i ? C.a.createElement(Me.a, null) : null,
              C.a.createElement(
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
                C.a.createElement(
                  K.a,
                  r()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Fe.button,
                    },
                    f,
                  ),
                  je,
                ),
              ),
            )
          }
          return null
        }),
        Ve = function (e, t) {
          return Object(ue.z)(e, ue.g)
        },
        He = Object(P.a)()
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
        ze = n('4zmP'),
        We = F.a.g46f363d,
        Ue = { viewType: 'rule_education' }
      var Ge = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        Ke = He(function (e) {
          var t = e.addEducationFlag,
            n = e.shouldShowEducation,
            a = function () {
              t()
            }
          return (
            C.a.useEffect(function () {
              return a
            }),
            n
              ? C.a.createElement(
                  U.a,
                  { style: Ge.container },
                  C.a.createElement(ze.a, { behavioralEventContext: Ue, onClose: a, text: We, withCloseButton: !0 }),
                )
              : null
          )
        }),
        qe = n('H7Rt'),
        Xe = n('m3Bd'),
        Ze = n.n(Xe),
        Ye = n('yZqq'),
        Je = function (e, t) {
          return Object(ue.z)(e, ue.q)
        },
        Qe = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: Je }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ue.w)(ue.q)
              },
            }
          }),
        $e = F.a.aa65a449,
        et = { viewType: 'persistent_conversation_controls_education' }
      var tt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        nt = Qe(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = C.a.useContext(O.a).featureSwitches,
            o = C.a.useState(),
            i = Ie()(o, 2),
            c = i[0],
            s = i[1],
            l = function () {
              t()
            }
          return (
            C.a.useEffect(function () {
              return l
            }, []),
            C.a.useEffect(
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
              ? C.a.createElement(
                  U.a,
                  { style: tt.container },
                  C.a.createElement(ze.a, {
                    arrowPositionStart: c,
                    behavioralEventContext: et,
                    onClose: l,
                    text: $e,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        at = n('Irs7'),
        rt = n('DlMI'),
        ot = n('gBde'),
        it = n('gUPl'),
        ct = n('cOhU'),
        st = C.a.createElement(rt.a, null),
        lt = C.a.createElement(ot.a, null),
        ut = C.a.createElement(it.a, null),
        dt = C.a.createElement(ct.a, null),
        pt = 'conversation_control',
        mt = Object.freeze({
          all: { icon: st, label: F.a.i8ea6d4e },
          community: { icon: ut, label: F.a.ec5a4a25 },
          by_invitation: { icon: lt, label: F.a.b4543009 },
          community_members: { icon: dt, label: F.a.i13be5a0 },
          super_followers_exclusive: { icon: st, label: F.a.f8393bda },
          trusted_friends_tweet: { icon: st, label: F.a.c0857ccd },
        }),
        ht =
          (Object.freeze(['community', 'by_invitation']),
          Object(at.a)(function (e) {
            var t = e.analytics,
              n = Ze()(e, ['analytics']),
              a = e.disabled,
              r = e.value,
              o = mt[r],
              i = o.icon,
              c = o.label,
              s = C.a.useState(!1),
              l = Ie()(s, 2),
              u = l[0],
              d = l[1],
              p = C.a.useRef(null)
            C.a.useEffect(function () {
              r !== qe.a.all && r !== qe.a.community_members && d(!0)
            }, [])
            var m = C.a.useCallback(
              function (e) {
                t.scribe({ element: pt, action: 'click' })
              },
              [t],
            )
            return C.a.createElement(
              R.a,
              { viewType: pt },
              u ? C.a.createElement(nt, { buttonRef: p.current }) : null,
              C.a.createElement(
                U.a,
                { style: ft.controlsContainer },
                C.a.createElement(
                  Ye.a,
                  n,
                  C.a.createElement(
                    K.a,
                    { disabled: a, icon: i, onPress: m, ref: p, size: 'xSmall', style: ft.button, type: 'brandText' },
                    c,
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
        bt = n('MLl7'),
        _t = n('1auM'),
        wt = n('07FG'),
        Ct = n('Q8CU'),
        Tt = n('QbaN'),
        xt = n('nV1z'),
        Et = n('VPdC'),
        St = n('WPfJ'),
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
              zIndex: St.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: St.e },
            iconEmojiPicker: { zIndex: St.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: St.a,
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
        Rt = n('aITJ'),
        It = F.a.bdbcdd93,
        Pt = F.a.a809609f,
        At = C.a.createElement(xt.a, null),
        kt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            o = e.videoPickerEnabled,
            i = n || t.length >= 4,
            c = t.length < 3,
            s = o && Rt.b.isIOS() && Rt.b.isSafari()
          return C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(Et.a, {
              acceptGifs: 0 === t.length,
              acceptVideo: 0 === t.length && !s,
              accessibilityLabel: t.length > 0 || s ? It : void 0,
              disabled: i,
              multiple: c,
              onChange: a,
              onPress: r,
              style: [Ot.toolBarButton, Ot.firstToolBarButton],
              type: 'brandText',
            }),
            s
              ? C.a.createElement(Et.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !0,
                  accessibilityLabel: Pt,
                  disabled: t.length > 0,
                  hoverLabel: { label: Pt },
                  icon: At,
                  multiple: !1,
                  onChange: a,
                  onPress: r,
                  style: Ot.toolBarButton,
                  type: 'brandText',
                })
              : null,
          )
        },
        Dt = n('p+r5'),
        Mt = n('GWvE')
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return g()(this, n)
        }
      }
      var Bt = (function (e) {
        h()(n, e)
        var t = jt(n)
        function n() {
          var e
          s()(this, n)
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
                  i = e.onBlur,
                  c = e.onChange
                return C.a.createElement(
                  U.a,
                  { style: Lt.root },
                  C.a.createElement(Dt.a, {
                    autoCapitalize: 'none',
                    autoCorrect: !1,
                    autoFocus: t,
                    defaultValue: n,
                    editable: a,
                    label: r,
                    maxLength: 25,
                    name: o,
                    onBlur: i,
                    onChange: c,
                    ref: this._setInputRef,
                    spellCheck: 'false',
                    style: Lt.formTextInput,
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
                  (this.value && !Object(Mt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                )
              },
            },
          ]),
          n
        )
      })(C.a.Component)
      _()(Bt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Lt = B.a.create(function (e) {
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
        Ft = Bt,
        Nt = (n('Blm6'), n('DZ+c'), n('mtvn')),
        Vt = n('6XNv')
      function Ht(e) {
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
      var zt = (function (e) {
        h()(n, e)
        var t = Ht(n)
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
                  a = e.last,
                  r = e.max,
                  o = e.min,
                  i = e.onChange,
                  c = e.testID,
                  s = !t || o === r,
                  l = e.value.toString(),
                  u = Object(Nt.a)(o, r + 1).map(function (e) {
                    return { label: ''.concat(F.a.ia24dc8c(e)), value: ''.concat(e) }
                  })
                return C.a.createElement(Vt.a, {
                  disabled: s,
                  label: n,
                  onChange: i,
                  options: u,
                  style: [Wt.selector, !a && Wt.rightMargin],
                  testID: c,
                  value: l,
                })
              },
            },
          ]),
          n
        )
      })(C.a.PureComponent)
      _()(zt, 'defaultProps', { last: !1 })
      var Wt = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Ut = zt,
        Gt = 'addPollChoice',
        Kt = 'selectPollDays',
        qt = 'selectPollHours',
        Xt = 'selectPollMinutes',
        Zt = 'removePollButton'
      function Yt(e) {
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
      var Jt = F.a.caf8edc4,
        Qt = F.a.g93586be,
        $t = F.a.d073b644,
        en = F.a.a2f0728e,
        tn = (function (e) {
          h()(n, e)
          var t = Yt(n)
          function n(e, a) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e, a)),
              _()(p()(r), '_handleDaysChange', function (e) {
                var t = r.props.onChange,
                  n = parseInt(e, 10)
                r.setState(function (e) {
                  var a = e.duration,
                    r = a.hours,
                    o = a.minutes,
                    i = 0 === n && 0 === r && 0 === o ? 1 : 7 === n ? 0 : r,
                    c = { days: n, hours: i, minutes: 7 === n ? 0 : 0 === n && 0 === i && o < 5 ? 5 : o }
                  return t && t(c), { duration: c }
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
                  return C.a.createElement(
                    U.a,
                    { style: n },
                    C.a.createElement(M.b, { color: 'normal', style: nn.durationLabel }, t ? Jt : ''),
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
                  return C.a.createElement(
                    U.a,
                    { style: nn.durationControls },
                    C.a.createElement(Ut, {
                      editable: t && n,
                      label: Qt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Kt,
                      value: r,
                    }),
                    C.a.createElement(Ut, {
                      editable: t && n,
                      label: $t,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: qt,
                      value: o,
                    }),
                    C.a.createElement(Ut, {
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
        })(C.a.Component)
      _()(tn, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var nn = B.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        an = tn,
        rn = n('iY63'),
        on = n('jtO7')
      function cn(e) {
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
      var sn = F.a.g589c2e1,
        ln = F.a.a1e6c3a1,
        un = F.a.a739e006,
        dn = F.a.d89a5b92,
        pn = F.a.c2a8118d,
        mn = F.a.a8ede1de,
        hn = F.a.af40a8ef,
        fn = (function (e) {
          h()(n, e)
          var t = cn(n)
          function n(e, a) {
            var r
            s()(this, n),
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
                  c = [i._choice1, i._choice2, i._choice3, i._choice4].filter(Boolean).every(function (e) {
                    return e.isValid
                  })
                o && o.length >= 2 && c ? a() : n(), t && t({ choices: o, duration: r.duration })
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
              }),
              _()(p()(r), '_handleBlur', function () {
                var e = r.props.onBlur
                null == e || e()
              })
            var o = e.initialChoices,
              i = void 0 === o,
              c = (o || []).length,
              l = c > 2 ? c : 2
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
                    c = o.choiceCount,
                    s = C.a.createElement(
                      U.a,
                      { style: gn.rightColumn },
                      c < 4
                        ? C.a.createElement(K.a, {
                            accessibilityLabel: mn,
                            disabled: !(t && r),
                            hoverLabel: { label: hn },
                            icon: C.a.createElement(rn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: gn.addButton,
                            testID: Gt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return C.a.createElement(
                    U.a,
                    { style: gn.choicesAndAddButton },
                    C.a.createElement(
                      U.a,
                      { style: gn.choices },
                      C.a.createElement(Ft, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: sn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      C.a.createElement(Ft, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: ln,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      c >= 3
                        ? C.a.createElement(Ft, {
                            autoFocus: i,
                            defaultValue: a[2],
                            editable: t && r,
                            label: un,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === c
                        ? C.a.createElement(Ft, {
                            autoFocus: i,
                            defaultValue: a[3],
                            editable: t && r,
                            label: dn,
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
                  return C.a.createElement(
                    U.a,
                    { style: gn.root },
                    this._renderChoices(),
                    C.a.createElement(an, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: gn.durationPicker,
                    }),
                    C.a.createElement(
                      U.a,
                      { style: gn.removePollButton },
                      C.a.createElement(on.a, { color: 'red500', label: pn, onPress: r, testID: Zt }),
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
        })(C.a.Component),
        gn = B.a.create(function (e) {
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
        yn = Object(at.a)(fn),
        vn = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        bn = F.a.i859676b,
        _n = C.a.createElement(
          F.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          C.a.createElement(
            M.b,
            { link: '/settings/audience_and_tagging', style: vn.link, withInteractiveStyling: !0, withUnderline: !0 },
            F.a.c9a48d3f,
          ),
        )
      function wn() {
        return C.a.createElement(U.a, { style: vn.container }, C.a.createElement(ze.a, { headline: bn, text: _n }))
      }
      var Cn = n('b5s6'),
        Tn = n('rcen'),
        xn = n('zmS9'),
        En = 'addButton',
        Sn = 'addSubtitlesLabel',
        On = 'altTextLabel',
        Rn = 'tagPeopleLabel',
        In = 'attachments',
        Pn = 'createPollButton',
        An = 'geoButton',
        kn = 'gifSearchButton',
        Dn = 'scheduleOption',
        Mn = 'taggedUsersLabel',
        jn = 'tweetTextarea_',
        Bn = 'toolBar',
        Ln = 'scheduledTweetIndicator',
        Fn = n('xM7j'),
        Nn = n('6OUF'),
        Vn = n('tZIO'),
        Hn = n('5mJL'),
        zn = n('DNho'),
        Wn = n('jhWN'),
        Un = n('rFBM'),
        Gn = n('zfvc'),
        Kn = n('Ujvi'),
        qn = n('yTN1'),
        Xn = n('gpVt'),
        Zn = n('hOZg'),
        Yn = n('ll3R'),
        Jn = n('J0mu'),
        Qn = n('EfHu'),
        $n = n('KrGU'),
        ea = n('boUI'),
        ta = n('6ZHn'),
        na = n('/WPq'),
        aa = n('wpLu'),
        ra = n('pHub'),
        oa = n('8A5z'),
        ia = n('pKoL'),
        ca = n('ZvMt'),
        sa = n('9Xij')
      function la(e) {
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
      var ua = (function (e) {
        h()(n, e)
        var t = la(n)
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
                return C.a.createElement(U.a, { style: n }, this._renderImageGroup(t.length))
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
                    c,
                    s = B.a.theme.aspectRatios.minTimelineImage,
                    l = B.a.theme.aspectRatios.maxTimelineImage
                  o = ca.a.getImageAspectRatio(s, l, {
                    width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                    height: null === (c = e[0].mediaFile) || void 0 === c ? void 0 : c.height,
                  })
                }
                return C.a.createElement(
                  sa.a,
                  { ratio: t ? o : r / a },
                  C.a.createElement(U.a, { style: da.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                )
              },
            },
            {
              key: '_renderGroupOf2',
              value: function () {
                return C.a.createElement(
                  sa.a,
                  { ratio: B.a.theme.aspectRatios.landscape },
                  C.a.createElement(
                    U.a,
                    { style: da.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, da.gutterRight),
                    this._renderMediaAtIndex(1),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf3',
              value: function () {
                return C.a.createElement(
                  sa.a,
                  { ratio: B.a.theme.aspectRatios.landscape },
                  C.a.createElement(
                    U.a,
                    { style: da.mediaPreviewWrapper },
                    this._renderMediaAtIndex(0, da.gutterRight),
                    this._renderColumnWithIndices([1, 2]),
                  ),
                )
              },
            },
            {
              key: '_renderGroupOf4',
              value: function () {
                return C.a.createElement(
                  sa.a,
                  { ratio: B.a.theme.aspectRatios.landscape },
                  C.a.createElement(
                    U.a,
                    { style: da.mediaPreviewWrapper },
                    this._renderColumnWithIndices([0, 2], da.gutterRight),
                    this._renderColumnWithIndices([1, 3]),
                  ),
                )
              },
            },
            {
              key: '_renderColumnWithIndices',
              value: function (e, t) {
                return C.a.createElement(
                  U.a,
                  { style: [da.column, t] },
                  this._renderMediaAtIndex(e[0], da.gutterBottom),
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
                  y = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                  v = !(
                    null === (r = f.mediaMetadata) ||
                    void 0 === r ||
                    null === (o = r.sensitiveMediaWarning) ||
                    void 0 === o ||
                    !o.size
                  ),
                  b = d && c && s,
                  _ = b && v && !!p
                return C.a.createElement(ia.a, {
                  accessibilityLabel: g || y,
                  accessibilityRole: 'group',
                  enableGif: s,
                  key: f.id,
                  mediaItem: f,
                  onClick: u ? u(f.id) : void 0,
                  onEdit: d ? d(f.id) : void 0,
                  onEditSensitiveWarning: p && _ ? p(f.id) : void 0,
                  onRemove: m(f.id),
                  ref: h,
                  style: [da.mediaContainer, t],
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
      })(C.a.Component)
      _()(ua, 'contextType', O.a)
      var da = B.a.create(function (e) {
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
        pa = n('oQhu'),
        ma = n('+d3d'),
        ha = n('S1qy'),
        fa = n.n(ha),
        ga = n('cjAp'),
        ya = n.n(ga)
      function va(e) {
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
      var ba = F.a.f0afcc0e,
        _a = F.a.ha5e2e79,
        wa = F.a.a3de3b68,
        Ca = F.a.cc2b28fc,
        Ta = F.a.g45af04e,
        xa = F.a.ee9c4013,
        Ea = F.a.af40a8ef,
        Sa = F.a.e68b09b4,
        Oa = F.a.ec10ee02,
        Ra = F.a.h735a98d,
        Ia = F.a.c4ccfbe2,
        Pa = F.a.j499fbcb,
        Aa = F.a.b7d8e3f0,
        ka = F.a.d1175c78,
        Da = F.a.bf4e9d79,
        Ma = F.a.e0342f98,
        ja = F.a.e349147b,
        Ba = F.a.e3a24e4b,
        La = F.a.de4669e2,
        Fa = F.a.d2c7a41c,
        Na = F.a.f7364fa1,
        Va = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Ha = F.a.ia24dc8c,
        za = C.a.createElement(Zn.a, null),
        Wa = C.a.createElement(rn.a, null),
        Ua = C.a.createElement(Yn.a, null),
        Ga = C.a.createElement(Jn.a, null),
        Ka = { viewType: 'schedule_tweet' },
        qa = { viewType: 'add_poll' },
        Xa = { viewType: 'add_composer' },
        Za = { viewType: 'tag_location' },
        Ya = (function (e) {
          h()(n, e)
          var t = va(n)
          function n(e, a) {
            var o
            s()(this, n),
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
                Object(pa.a)(function () {
                  return o.context.featureSwitches.isTrue('conversation_controls_limited_replies_creation_enabled')
                }),
              ),
              _()(p()(o), '_shouldRenderControls', function (e, t) {
                var n = o.state.isFocused,
                  a = o.props,
                  r = a.audienceControlsValue,
                  i = a.isActive,
                  c = a.isInline,
                  s = a.isReply
                return (
                  !(
                    'conversation' !== t ||
                    (r.conversationControlsValue !== qe.a.community_members &&
                      r.conversationControlsValue !== qe.a.super_followers_exclusive &&
                      r.conversationControlsValue !== qe.a.trusted_friends_tweet) ||
                    !s
                  ) ||
                  (i && !s && (!c || n || e))
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
                  c = o._shouldRenderControls(e, 'conversation'),
                  s =
                    i === qe.a.community_members ||
                    i === qe.a.super_followers_exclusive ||
                    i === qe.a.trusted_friends_tweet ||
                    o._isScheduled()
                return c
                  ? C.a.createElement(ht, { disabled: s, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              _()(p()(o), '_renderTaggedLocation', function (e) {
                return C.a.createElement(
                  U.a,
                  { style: Ot.taggedLocationContainer },
                  C.a.createElement(
                    K.a,
                    {
                      icon: C.a.createElement(Qn.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: Ot.taggedLocationButton,
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
                  c = e.isInlineReply,
                  s = e.onTypeaheadStateChange,
                  l = e.richTextInputContext,
                  u = n.cardUrl,
                  d = n.media,
                  p = n.pollActive,
                  m = n.quotedStatus,
                  h = n.text,
                  f = Object(Xn.b)(h) || (u && !Object(wt.a)(u) && [u]),
                  g = !!d.length || p || !!m,
                  y = o.props.typeaheadWrapper,
                  v = !o._isEmpty()
                return C.a.createElement(
                  U.a,
                  { style: Ot.textInputArea },
                  C.a.createElement(
                    U.a,
                    { style: r ? Ot.inputStyle : Ot.collapsedInputStyle },
                    o._renderAudienceControls(v),
                    C.a.createElement(
                      y,
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
                      ? C.a.createElement(Xn.a, { index: a, isCardPreviewTombstoned: Object(wt.a)(u), urls: f })
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
                  y = o.state.isFocused,
                  v = a.text,
                  b = 0 === c && p,
                  _ = !!g,
                  w = g || {},
                  T = w.dismissComposerCommandName,
                  x = w.element,
                  E = w.sendTweetCommandName,
                  S = d && !g && !l,
                  O = g
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
                return C.a.createElement(
                  Nn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: wa,
                      autoFocus: n || (s && !u),
                      closeButton:
                        s && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !b
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [Ot.textInputStyle, S && Ot.textInputMobileCollapsed],
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
                      testID: ''.concat(jn).concat(c),
                      useCacheForDOMMeasurements: y,
                      value: v,
                    },
                    O,
                  ),
                )
              }),
              _()(
                p()(o),
                '_getHandleRichTextChange',
                Object(pa.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                p()(o),
                '_getHandlePlainTextChange',
                Object(pa.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(p()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? C.a.createElement(wn, null) : null
              }),
              _()(p()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  c = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled'),
                  s = o.context.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (i || c || s)
                  ? C.a.createElement(Oe, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: r && c,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(p()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? C.a.createElement(Ke, null) : null
              }),
              _()(p()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? C.a.createElement(Ne, { selectedCommunityId: t, showMiddot: !e })
                  : null
              }),
              _()(p()(o), '_calcNumberOfLines', function () {
                var e = o.props,
                  t = e.data,
                  n = e.isActive,
                  a = e.isInline,
                  r = !!e.richTextInputContext,
                  i = t.media,
                  c = t.pollActive,
                  s = t.quotedStatus,
                  l = !!i.length || !!c || !!s
                return (r && (a || l)) || !n ? 1 : 4
              }),
              _()(p()(o), '_renderScheduledTweetLegend', function () {
                var e = o.props.scheduledFor
                return C.a.createElement(xn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Ln,
                })
              }),
              _()(p()(o), '_handlePressScheduledTweetLegend', function () {
                var e = o.props,
                  t = e.analytics,
                  n = e.history,
                  a = e.setActiveParentKey
                n.push('/compose/tweet/schedule'), t.scribe({ element: 'tweet_legend', action: 'click' }), a()
              }),
              _()(p()(o), '_renderEmojiPicker', function () {
                return C.a.createElement(gt.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              _()(
                p()(o),
                '_getEmojiPickerButtonStyles',
                Object(pa.a)(function () {
                  return [Ot.iconEmojiPicker, Ot.toolBarButton]
                }),
              ),
              _()(p()(o), '_isSchedulingDisabled', function () {
                var e = o.props,
                  t = e.audienceControlsValue,
                  n = e.data,
                  a = n.media,
                  r = n.mediaTags,
                  i = n.pollActive,
                  c = n.quotedStatus,
                  s = n.text,
                  l = e.index,
                  u = e.isLast,
                  d = 0 === l && u,
                  p = t.conversationControlsValue !== qe.a.all
                return Boolean(i || !d || (c && '' === s && !a.length) || p || r.length > 0)
              }),
              _()(p()(o), '_renderSchedulingButton', function () {
                return C.a.createElement(K.a, {
                  accessibilityLabel: _a,
                  behavioralEventContext: Ka,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: Ra },
                  icon: Ga,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: Ot.toolBarButton,
                  testID: Dn,
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
                return C.a.createElement(K.a, {
                  accessibilityLabel: xa,
                  hoverLabel: { label: Sa },
                  icon: za,
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
                  c = t.pollChoices,
                  s = t.pollDuration,
                  l = t.quotedStatus
                if (0 === r.length && !i && !l) return null
                var u = o.hasAttachedVideo && (o._videoTrimmerEnabled ? 'trimmer' : 'subtitles')
                return C.a.createElement(
                  U.a,
                  { onClick: o._handleFocus, style: [Ot.attachmentContainer, Ot.tweetAttachmentArea], testID: In },
                  r.length > 0
                    ? C.a.createElement(ua, {
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
                        style: Ot.mediaPreview,
                      })
                    : null,
                  a ? o._renderMediaActions() : null,
                  i
                    ? C.a.createElement(yn, {
                        editable: n,
                        initialChoices: c,
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
                  l ? o._renderQuoteTweet(l) : null,
                )
              }),
              _()(p()(o), '_renderQuoteTweet', function (e) {
                var t = o.props.data.media,
                  n = e.tombstoneInfo
                return n && n.richText
                  ? C.a.createElement(
                      Fn.a,
                      null,
                      C.a.createElement(Tn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : C.a.createElement(Cn.a, {
                      isCondensed: t.length > 0,
                      style: Ot.quoteTweet,
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
                  c = t.isInlineReply,
                  s = t.isReply,
                  l = t.isSelfThreadReply,
                  u = t.richTextInputContext,
                  d = t.setActiveParentKey,
                  p = !!u,
                  m = !c && !r,
                  h = !c && !i,
                  f = o.context.featureSwitches.isTrue('responsive_web_video_picker')
                return C.a.createElement(
                  U.a,
                  { style: Ot.toolBar, testID: Bn },
                  C.a.createElement(
                    U.a,
                    { style: Ot.toolBarIconsContainer },
                    C.a.createElement(kt, {
                      media: a,
                      mediaAttachDisabled: o.mediaAttachDisabled,
                      onFilesAdded: o._handleFilesAdded,
                      setActiveParentKey: d,
                      videoPickerEnabled: f,
                    }),
                    o._renderGifButton(),
                    m ? o._renderPollButton() : null,
                    p ? o._renderEmojiPicker() : null,
                    h ? o._renderSchedulingButton() : null,
                    o._renderGeoButton(),
                  ),
                  C.a.createElement(
                    U.a,
                    { style: Ot.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (s && !l) || !e
                      ? null
                      : C.a.createElement(
                          C.a.Fragment,
                          null,
                          C.a.createElement(U.a, { style: Ot.separator }),
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
                    var c = i ? r + 1 : -1
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
                  var a = t.convertEmojiToEntities(e)
                  o.setState(o._addOverflowStyle(a))
                }
                o._handleTextValueChange(n)
              }),
              _()(p()(o), '_handlePlainTextChange', function (e) {
                var t = Vn.a.replaceCarriageReturns(e.target.value)
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
                a ? n({ text: Ca }) : r(e)
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
                return S.c(t.concat(e))
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
              _()(p()(o), '_handlePollChange', Object(ma.a)(o._updatePoll, 200, { leading: !0, trailing: !0 })),
              _()(p()(o), '_handlePollChoiceBlur', function () {
                o._handlePollChange.flush()
              }),
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
                return Ha(Math.ceil(e / o._userLanguageWeight))
              }),
              _()(p()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  c = e.isSelfThreadReply
                return a ? La : n ? Na : i && !c ? Fa : c || r > 0 ? Ba : ja
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
                Object(pa.a)(function (e) {
                  var t = ya.a[o.props.twitterTextConfigurationVersion]
                  return fa()(e, t)
                }),
              ),
              _()(p()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(Ct.c)(e)
              }),
              _()(p()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(Tt.h)(e)
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
              (o._userLanguageWeight = l && Va.indexOf(l) > -1 ? 2 : 1),
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
                      return e.mediaFile && !(e.mediaFile instanceof _t.a) && e.mediaFile.isVideo
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
                    c = t.loggedInUser,
                    s = t.windowWidth,
                    l = t.withAvatar,
                    u = !this._isEmpty(),
                    d = this._shouldRenderControls(u),
                    p = s < B.a.theme.breakpoints.small
                  return C.a.createElement(
                    U.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Ot.root, !a && Ot.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    C.a.createElement(
                      Hn.a,
                      {
                        avatarCell: C.a.createElement(
                          C.a.Fragment,
                          null,
                          l
                            ? C.a.createElement(zn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return C.a.createElement(Wn.a, {
                                  accessibilityLabel: c ? c.name : void 0,
                                  screenName: c ? c.screen_name : void 0,
                                  size: t,
                                  style: Ot.avatar,
                                  uri: c ? c.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : C.a.createElement(U.a, {
                                style: [Ot.conversationLine, !l && Ot.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? Ot.avatarContainerExpanded : Ot.avatarContainer,
                        cellStyle: Ot.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      C.a.createElement(
                        U.a,
                        { onFocus: this._handleEditorFocus, style: Ot.inputArea },
                        C.a.createElement(
                          Un.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: Ot.dragDrop,
                          },
                          function (t) {
                            return C.a.createElement(
                              C.a.Fragment,
                              null,
                              C.a.createElement(U.a, { style: Ot.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      C.a.createElement(
                        U.a,
                        { style: [(d || n) && Ot.controlsContainer, p ? Ot.mobileControlsLayout : Ot.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      C.a.createElement(Gn.b, { show: a && r }, this._renderToolbar(u)),
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
                    c = a || n.length || !o
                  return C.a.createElement(vt.a, {
                    enabled: !c,
                    gifSearchKeySource: bt.a.Composition,
                    history: r,
                    onPress: i,
                    testID: kn,
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
                    c = !(!(a || n.length || r || i) && o)
                  return C.a.createElement(K.a, {
                    accessibilityLabel: ba,
                    behavioralEventContext: qa,
                    disabled: c,
                    hoverLabel: { label: Oa },
                    icon: Ua,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: Ot.toolBarButton,
                    testID: Pn,
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
                    o = t ? C.a.createElement(Qn.a, null) : C.a.createElement($n.a, null)
                  return C.a.createElement(K.a, {
                    accessibilityLabel: Ia,
                    behavioralEventContext: Za,
                    disabled: r,
                    hoverLabel: { label: Ia },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Ot.toolBarButton,
                    testID: An,
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
                  return C.a.createElement(
                    U.a,
                    { style: Ot.imageActions },
                    t && t.url && t.provider
                      ? C.a.createElement(
                          U.a,
                          { style: Ot.addImageTextPadding },
                          C.a.createElement(yt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : C.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: ka,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [Ot.addImageTextContainer, Ot.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? C.a.createElement(
                          M.b,
                          {
                            accessibilityLabel: Pa({ numberOfImages: n.length }),
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
                  return C.a.createElement(
                    M.b,
                    { color: 'gray700', size: 'subtext2', testID: Rn },
                    C.a.createElement(ea.a, { style: Ot.addImageActionIcon }),
                    ka,
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
                  return C.a.createElement(
                    M.b,
                    { color: 'gray700', size: 'subtext2', testID: Mn },
                    C.a.createElement(ta.a, { style: Ot.addImageActionIcon }),
                    C.a.createElement(Kn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                      ? C.a.createElement(
                          M.b,
                          { color: 'gray700', size: 'subtext2', testID: On },
                          C.a.createElement(aa.a, { style: Ot.addImageActionIcon }),
                          Aa({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : C.a.createElement(
                          M.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: On },
                          C.a.createElement(aa.a, { style: Ot.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : C.a.createElement(
                        M.b,
                        { color: 'gray700', size: 'subtext2', testID: On },
                        C.a.createElement(na.a, { style: Ot.addImageActionIcon }),
                        Pa({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? ra.a : oa.a
                  return C.a.createElement(
                    M.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: Ot.addImageTextContainer,
                      testID: Sn,
                    },
                    C.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Ma : void 0,
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
                    a = ya.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return C.a.createElement(qn.a, {
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
                    c = this._isScheduled(),
                    s = t || i || c || !r || n
                  return C.a.createElement(K.a, {
                    accessibilityLabel: Ta,
                    behavioralEventContext: Xa,
                    disabled: s,
                    hoverLabel: { label: Ea },
                    icon: Wa,
                    link: !a || i || s ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: En,
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
                    c = n.some(function (e) {
                      return e.mediaFile && !(e.mediaFile instanceof _t.a) && e.mediaFile.isVideo
                    })
                  return 4 === o || i || c || a || this.hasExternalMedia || !r
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
                      return e.mediaFile && !(e.mediaFile instanceof _t.a) && e.mediaFile.isVideo
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
        })(C.a.Component)
      _()(Ya, 'contextType', O.a),
        _()(Ya, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Ja = Object(at.a)(Ya),
        Qa = C.a.createElement(M.b, { weight: 'bold' }),
        $a = C.a.createElement(M.b, { color: 'link' }),
        er = function (e) {
          return '@'.concat(e)
        },
        tr = n('SrIh'),
        nr = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        ar = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  C.a.cloneElement($a, null, F.a.b50e199a({ userName: er(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  C.a.cloneElement($a, null, F.a.f2e4dd37({ replyUserName: er(t), otherUserName: er(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  C.a.cloneElement(
                    $a,
                    null,
                    F.a.eccfddc3({ userOneName: er(t), userTwoName: er(a), userThreeName: er(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  C.a.cloneElement($a, null, F.a.h758cd22({ userOneName: er(n), userTwoName: er(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  C.a.cloneElement($a, null, F.a.e9f8a0eb({ userName: er(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  C.a.cloneElement($a, null, F.a.df7e9fbc({ replyUserName: er(n), otherUserName: er(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  C.a.cloneElement(
                    $a,
                    null,
                    F.a.b45fa505({ userOneName: er(n), userTwoName: er(r), userThreeName: er(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  C.a.cloneElement($a, null, F.a.a4383815({ userOneName: er(a), userTwoName: er(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  C.a.cloneElement($a, null, F.a.ff792e35({ userName: er(t) })),
                  C.a.cloneElement(Qa, null, F.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  C.a.cloneElement($a, null, F.a.g7d5e985({ replyUserName: er(t), otherUserName: er(n) })),
                  C.a.cloneElement(Qa, null, F.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  C.a.cloneElement(
                    $a,
                    null,
                    F.a.fe5a61e9({ userOneName: er(t), userTwoName: er(a), userThreeName: er(n) }),
                  ),
                  C.a.cloneElement(Qa, null, F.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  F.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  C.a.cloneElement($a, null, F.a.bc9dd514({ userOneName: er(n), userTwoName: er(a), othersCount: t })),
                  C.a.cloneElement(Qa, null, F.a.de5071ba),
                )
              },
            },
            i = S.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            c = a.retweeted_status || a,
            s = c.exclusivity_info,
            l = c.user,
            u = i.filter(function (e) {
              return e.id_str !== l.id_str
            }),
            d = Ie()(u, 2),
            p = d[0],
            m = d[1],
            h = [l, p, m].map(nr),
            f = Ie()(h, 3),
            g = f[0],
            y = f[1],
            v = f[2],
            b = i.length - 2
          switch (i.length) {
            case 0:
              return Object(tr.a)('Compose reply context should not have 0 recipients'), null
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
                ? o.communityReplyToMany({ communityName: t, userOneName: g, userTwoName: y, othersCount: b })
                : s
                ? o.exclusiveReplyToMany({ userOneName: g, userTwoName: y, othersCount: b })
                : o.replyToMany({ userOneName: g, userTwoName: y, othersCount: b })
          }
        },
        rr = C.a.memo(ar),
        or = n('fs1G'),
        ir = n('BLtI'),
        cr = n('kY28')
      function sr(e) {
        null == e || e.preventDefault()
      }
      var lr = B.a.create(function (e) {
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
        ur = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = e.onPress,
            i = e.shouldDisplayRepliesText,
            c = e.showParentTweet,
            s = void 0 === c || c
          return C.a.createElement(
            U.a,
            null,
            s
              ? C.a.createElement(ir.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: or.a,
                  onAvatarClick: sr,
                  onEntityClick: sr,
                  onMediaClick: sr,
                  onReplyContextClick: sr,
                  replyContext: cr.a.ReplyContextTypes.None,
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
            C.a.createElement(
              U.a,
              { style: lr.replyUsersContainer },
              C.a.createElement(
                Hn.a,
                {
                  avatarCell: s ? C.a.createElement(U.a, { style: lr.conversationLine }) : null,
                  avatarCellStyle: lr.conversationLineContainer,
                  cellStyle: lr.repliesTextContainer,
                  style: lr.grid,
                },
                i
                  ? C.a.createElement(
                      M.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: s && lr.repliesMessage },
                      C.a.createElement(rr, {
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
        dr = n('Tb0w'),
        pr = n('1YZw'),
        mr = n('pidX'),
        hr = n('5oBF'),
        fr = n('JYYi'),
        gr = n('/Rsk'),
        yr = n('qlwE'),
        vr = n('XOJV'),
        br = n('G6rE'),
        _r = n('AspN'),
        wr = n('oEGd'),
        Cr = n('P1r1')
      function Tr(e, t) {
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
      function xr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Tr(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Er = function (e) {
          return e.parentTweetId || (e.isInline ? fr.a.homeTimeline : fr.a.modal)
        },
        Sr = function (e, t) {
          var n = Er(t)
          return oe.l(e, n)
        },
        Or = function (e, t) {
          var n = Er(t)
          return oe.m(e, n)
        },
        Rr = function (e, t) {
          var n = Er(t)
          return oe.k(e, n)
        },
        Ir = function (e, t) {
          var n = Lr(e, t),
            a = Rr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? I.c.select(e, r) : void 0
          return o ? o.name : void 0
        },
        Pr = function (e, t) {
          var n = Er(t)
          return oe.n(e, n)
        },
        Ar = function (e, t) {
          var n = Er(t)
          return oe.j(e, n)
        },
        kr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Dr = Object(ce.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          br.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Mr = function (e, t) {
          return t.parentTweetId || jr(e, t) || Br(e, t)
        },
        jr = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Br = kr(function (e) {
          return e.inReplyToStatusId
        }),
        Lr = function (e, t) {
          var n = Mr(e, t)
          return n ? vr.a.selectHydrated(e, n) : void 0
        },
        Fr = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Nr = kr(function (e) {
          return e.hasArticleNudge
        }),
        Vr = kr(function (e) {
          return e.convoCardData
        }),
        Hr = kr(function (e) {
          return e.externalMedia
        }),
        zr = kr(function (e) {
          return e.externalMediaFiles
        }),
        Wr = kr(function (e) {
          return e.previewTweetId
        }),
        Ur = kr(function (e) {
          return e.defaultText
        }),
        Gr = function (e, t) {
          var n = Ur(e, t),
            a = Object(mr.a)(t.location)
          return (Fr(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Kr = kr(function (e) {
          return e.quotedStatusId
        }),
        qr = kr(function (e) {
          return e.quotedStatus
        }),
        Xr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : qr(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Kr(e, t)
              return n ? vr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Zr = kr(function (e) {
          return e.isSelfThreadReply
        }),
        Yr = kr(function (e) {
          return e.positionCursorAtBeginning
        }),
        Jr = kr(function (e) {
          return e.promotedContent
        }),
        Qr = function () {
          return Object(ce.createSelector)(Sr, Gr, Xr, _r.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return xr(
                xr({}, ((o = e).mediaIds, Ze()(o, ['mediaIds']))),
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
        $r = {
          addComposer: oe.a,
          addToast: pr.b,
          createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: oe.b,
          deletePreviewTweet: hr.c,
          fetchAutotaggedLocationIfNeeded: gr.a,
          fetchTweetIfNeeded: vr.a.fetchOneIfNeeded,
          removeComposer: oe.f,
          resetDraft: oe.g,
          retweet: vr.a.retweet,
          schedule: oe.i,
          draftTweet: oe.e,
          send: oe.r,
          updateActiveComposerIndex: oe.t,
          updateAudienceControlsValue: oe.u,
          updateConvoCardState: dr.b,
          preUploadMedia: _r.e,
          addMedia: _r.b,
          processMultipleMedia: _r.g,
          removeMediaUpload: _r.i,
          updateSingleComposer: oe.x,
          setActiveParentKey: oe.s,
          copyDataFromInlineComposerToModalComposer: oe.c,
          copyDataFromInlineReplyComposerToModalComposer: oe.d,
        },
        eo = Object(wr.e)(function () {
          return Object(ce.createStructuredSelector)({
            activeComposerIndex: Ar,
            activeUser: Dr,
            altTextNudgeType: Cr.h,
            audienceControlsValue: Rr,
            composerData: Qr(),
            dataSaverMode: Cr.k,
            excludedRecipients: Or,
            externalMedia: Hr,
            externalMediaFiles: zr,
            geoEnabled: Cr.p,
            hasArticleNudge: Nr,
            inReplyToStatus: Lr,
            inReplyToStatusId: Mr,
            isIntentRoute: Fr,
            isSelfThreadReply: Zr,
            isSending: Pr,
            isSuperFollowsCreator: le.l,
            positionCursorAtBeginning: Yr,
            loggedInUser: br.e.selectLoggedInUser,
            prepopulatedText: Gr,
            previewTweetId: Wr,
            promotedContent: Jr,
            scheduledFor: oe.o,
            selectedCommunityName: Ir,
            sendingProgress: oe.p,
            convoCardData: Vr,
            undoTweetSettings: yr.p,
            userLanguage: le.o,
            quotedStatusId: Kr,
          })
        }, $r),
        to = n('45mF'),
        no = n('c0ZR'),
        ao = n('W5XZ'),
        ro = n('lsKC'),
        oo = n('Drq4'),
        io = n('I8M8'),
        co = n('7myi'),
        so = n('7nmT'),
        lo = n.n(so),
        uo = n('vbWy'),
        po = n('Rp9C'),
        mo = n('Q5Mu'),
        ho = n('N5qz'),
        fo = 'tweetButton',
        go = 'tweetButtonInline',
        yo = Object(P.a)()
          .propsFromState(function () {
            return { loggedInUser: br.e.selectLoggedInUser }
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
        vo = n('cHvH'),
        bo = n('sgih'),
        _o = n('xKuM'),
        wo = n('5Vk4'),
        Co = B.a.create(function (e) {
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
        To = function (e) {
          var t = e.actionButtonType,
            n = e.children,
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return C.a.createElement(vo.a, null, function (e) {
            var c = e.windowWidth > B.a.theme.breakpoints.small
            return C.a.createElement(
              bo.a,
              { onMaskClick: r, style: Co.sheetStyle, type: o, withMask: !0 },
              i &&
                C.a.createElement(_o.a, {
                  leftControl: C.a.createElement(wo.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              C.a.createElement(U.a, { style: [Co.mainCard, c ? Co.largeScreenCard : Co.smallScreenCard] }, n),
            )
          })
        },
        xo = F.a.cb7c0987,
        Eo = F.a.de3bcf27,
        So = F.a.e710ce75,
        Oo = F.a.h11e5910,
        Ro = F.a.b7ec04f3,
        Io = F.a.i62a03aa,
        Po = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Ao = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return C.a.createElement(
            To,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            C.a.createElement(M.b, { size: 'title4', style: Po.itemPadding, weight: 'heavy' }, xo),
            C.a.createElement(M.b, { color: 'gray700', style: Po.itemPadding }, Eo),
            C.a.createElement(M.b, { color: 'gray700', style: Po.itemPadding }, So),
            C.a.createElement(
              U.a,
              { style: Po.buttonContainer },
              C.a.createElement(M.b, { size: 'title4', style: Po.itemPadding, weight: 'heavy' }, Oo),
              C.a.createElement(K.a, { onPress: a, style: Po.itemPadding, type: 'brandOutlined' }, Ro),
              C.a.createElement(K.a, { onPress: n, style: Po.itemPadding, type: 'brandOutlined' }, Io),
            ),
          )
        },
        ko = n('cm6r'),
        Do = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Mo = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return C.a.createElement(ko.a, { interactiveStyles: null, onPress: a }, function (e) {
            return C.a.createElement(
              C.a.Fragment,
              null,
              C.a.createElement(K.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Do.button,
                type: 'primaryOutlined',
              }),
              C.a.createElement(M.b, { color: 'gray700' }, n),
            )
          })
        },
        jo = n('sjK1'),
        Bo = n('FDY4'),
        Lo = n('tevE'),
        Fo = n('jV+4'),
        No = n('UgB4'),
        Vo = n('TW8A'),
        Ho = n('hiGS'),
        zo = n('WtWS'),
        Wo = n('Lsrn'),
        Uo = n('k/Ka')
      function Go(e, t) {
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
      function Ko(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Go(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Go(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var qo = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Uo.a)(
          'svg',
          Ko(
            Ko({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Wo.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          C.a.createElement(
            'g',
            null,
            C.a.createElement('path', {
              d: 'M17.928 9.026l.095 3.545H19l.1-3.544h-1.172zm.586 5.394c.414 0 .667-.238.667-.623 0-.388-.252-.626-.666-.626-.41 0-.667.24-.667.627 0 .385.257.623.667.623zm-4.57-.11h.813l.278-1.384h.89l.15-.813h-.883l.198-.96h.875l.15-.805h-.864l.268-1.326h-.813l-.27 1.326h-.946l.263-1.326h-.81l-.27 1.326h-.846l-.154.806h.846l-.2.96h-.83l-.15.812h.824l-.278 1.384h.81l.277-1.384h.952l-.28 1.384zm-.578-2.124l.227-1.102h1.055l-.23 1.102h-1.052zm-5.889-.941c.388 0 .634.32.634.835s-.244.835-.636.835c-.385 0-.615-.315-.615-.835-.002-.524.23-.835.617-.835zM7.595 9C5.763 9 4.5 10.245 4.5 12.054c0 1.838 1.25 3.05 3.157 3.05.388 0 .765-.047 1.05-.13v-.598c-.204.073-.603.12-.995.12-1.556 0-2.542-.937-2.542-2.423 0-1.46.985-2.48 2.402-2.48 1.392 0 2.307.865 2.307 2.19 0 .744-.24 1.213-.61 1.213-.222 0-.35-.15-.35-.41v-1.94h-.74v.435h-.065c-.147-.325-.465-.515-.857-.515-.732 0-1.23.604-1.23 1.494 0 .93.505 1.544 1.267 1.544.425 0 .725-.19.88-.56h.065c.08.352.414.57.872.57.886 0 1.44-.728 1.44-1.892C10.55 10.106 9.348 9 7.594 9z',
            }),
          ),
        )
      }
      qo.metadata = { width: 24, height: 24 }
      var Xo = qo,
        Zo = [
          { headlineText: F.a.f3a7a80c, subTextLine1: F.a.ge52d1de, subTextLine2: null },
          { headlineText: F.a.j311bf49, subTextLine1: F.a.ae42ebff, subTextLine2: F.a.aa350ab1 },
          { headlineText: F.a.j18b2956, subTextLine1: F.a.f6bee896, subTextLine2: F.a.dddd0995 },
          { headlineText: F.a.d02a94fa, subTextLine1: F.a.dddd0995, subTextLine2: null },
          { headlineText: F.a.i018b746, subTextLine1: F.a.b8d85df9, subTextLine2: F.a.d5ca11f0 },
        ],
        Yo = F.a.h11e5910,
        Jo = F.a.abd845fd,
        Qo = F.a.bea869b3,
        $o = F.a.d96cf7cd,
        ei = F.a.d3145da8,
        ti = B.a.create(function (e) {
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
        ni = function (e) {
          var t = e.hasSentFeedback,
            n = e.media,
            a = e.onDeleteTweet,
            r = e.onDismiss,
            o = e.onEditTweet,
            i = e.onSendTweet,
            c = e.onWeGotItWrong,
            s = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = C.a.useContext(O.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = Zo[(p = p >= 0 && p <= 4 ? p : 0)]
          return C.a.createElement(vo.a, null, function (e) {
            var p,
              h,
              f,
              g = e.windowWidth
            return C.a.createElement(
              To,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: g > B.a.theme.breakpoints.medium,
              },
              C.a.createElement(Xo, { style: [ti.profanityIcon, ti.itemPadding] }),
              C.a.createElement(Lo.a, { size: 'title4', style: ti.itemPadding, weight: 'heavy' }, m.headlineText),
              C.a.createElement(M.b, { color: 'gray700', style: ti.itemPadding }, m.subTextLine1),
              C.a.createElement(M.b, { color: 'gray700', style: ti.itemPadding }, m.subTextLine2),
              C.a.createElement(
                U.a,
                { style: [ti.tweetContainer, ti.itemPadding] },
                C.a.createElement(
                  U.a,
                  { style: ti.tweetContent },
                  C.a.createElement(Fo.a, { name: l, profileImageUrl: u, screenName: d, style: ti.userName }),
                  C.a.createElement(
                    U.a,
                    { style: ti.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof jo.c) r = e.mediaFile.thumbnail
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
                      return C.a.createElement(
                        U.a,
                        { style: ti.photos },
                        C.a.createElement(Bo.a, {
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
                    C.a.createElement(M.b, { style: ti.textStyle }, s),
                  ),
                ),
              ),
              t
                ? C.a.createElement(
                    U.a,
                    { style: ti.thanksContainer },
                    C.a.createElement(zo.a, { style: ti.thanksCheckMark }),
                    C.a.createElement(M.b, { align: 'center', style: ti.itemPadding }, ei),
                  )
                : C.a.createElement(M.b, { align: 'center', onPress: c, style: ti.itemPadding, withUnderline: !0 }, Yo),
              g > B.a.theme.breakpoints.small
                ? C.a.createElement(
                    U.a,
                    { style: ti.buttonContainer },
                    C.a.createElement(K.a, { onPress: o, style: ti.itemPadding, type: 'brandFilled' }, Jo),
                    C.a.createElement(K.a, { onPress: i, style: ti.itemPadding, type: 'brandOutlined' }, Qo),
                    C.a.createElement(K.a, { onPress: a, style: ti.itemPadding, type: 'destructiveText' }, $o),
                  )
                : ((p = C.a.createElement(No.a, { style: { color: B.a.theme.colors.text } })),
                  (h = C.a.createElement(Vo.a, { style: { color: B.a.theme.colors.primary } })),
                  (f = C.a.createElement(Ho.a, { style: { color: B.a.theme.colors.red500 } })),
                  C.a.createElement(
                    U.a,
                    { style: ti.mobileButtonContainer },
                    C.a.createElement(Mo, { icon: p, label: Qo, onPress: i }),
                    C.a.createElement(Mo, { icon: h, label: Jo, onPress: o }),
                    C.a.createElement(Mo, { icon: f, label: $o, onPress: a }),
                  )),
            )
          })
        },
        ai = yo(function (e) {
          var t = e.analytics,
            n = e.media,
            a = e.nudgeId,
            r = e.onDeleteTweet,
            o = e.onDismiss,
            i = e.onEditTweet,
            c = e.onSendTweet,
            s = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = C.a.useState(!1),
            m = Ie()(p, 2),
            h = m[0],
            f = m[1],
            g = C.a.useState(!1),
            y = Ie()(g, 2),
            v = y[0],
            b = y[1],
            _ = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: a }, element: r, page: o, section: 'dialog' })
            }
          return h
            ? C.a.createElement(Ao, {
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
            : C.a.createElement(ni, {
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
        ri = n('eb3s'),
        oi = n('JYMr'),
        ii = n('sCk0'),
        ci = n('3A2y'),
        si = n('zrOZ'),
        li = n('s1N3'),
        ui = n('4FGy'),
        di = n('mN6z'),
        pi = n('eyty'),
        mi = n('rziq'),
        hi = n('jTgF')
      function fi(e, t) {
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
      function gi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fi(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function yi(e) {
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
      var vi = F.a.d28215f0,
        bi = F.a.ec909a54,
        _i = F.a.jd53409d,
        wi = {
          singular: F.a.edae65de,
          plural: F.a.a859846a,
          oneOfMultiple: F.a.e90118f5,
          someOfMultiple: F.a.c211dcb1,
        },
        Ci = { singular: F.a.d7c26bfb, plural: F.a.a75e3ccc },
        Ti = F.a.dcb7e3a0,
        xi = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = Ci.singular), (t = r ? wi.singular : wi.oneOfMultiple))
              : ((n = Ci.plural), (t = r ? wi.plural : wi.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(Ti)
          )
        },
        Ei = F.a.c1bf53b0,
        Si = F.a.bb8170da,
        Oi = F.a.dad5a4b8,
        Ri = F.a.e65aed64,
        Ii = F.a.bc2ceaf2,
        Pi = F.a.d8222374,
        Ai = F.a.j890123a,
        ki = F.a.bb01231c,
        Di = F.a.d4ab68e2,
        Mi = F.a.d8af8a4c,
        ji = F.a.d09d4c05,
        Bi = F.a.i2209530,
        Li = F.a.bf9b89e4,
        Fi = F.a.f277e949,
        Ni = F.a.b551cd22,
        Vi = F.a.f026a7fa,
        Hi = F.a.a5d4fda0,
        zi = F.a.ib067d6a,
        Wi = E.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Ui = { element: 'alt_text_prompt' },
        Gi = { component: 'article_nudge' },
        Ki = { viewType: 'send_tweet' },
        qi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Xi = (function (e) {
          h()(n, e)
          var t = yi(n)
          function n(e, a) {
            var r, o, c
            s()(this, n),
              (c = t.call(this, e, a)),
              _()(p()(c), '_getParentKey', function () {
                var e = c.props,
                  t = e.isInline
                return e.parentTweetId || (t ? fr.a.homeTimeline : fr.a.modal)
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
                  var a = t[e.key]
                  'string' == typeof a && a !== e.text && c._updateSingleComposer({ text: a }, n)
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
                  a = lo.a.findDOMNode(c._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    o = r.bottom,
                    i = r.top,
                    s = Math.max(i, window.scrollY)
                  if (s < window.pageYOffset || o > window.innerHeight) {
                    var l = n ? s - n() - 14 : s - 14,
                      u = Math.max(l, 0)
                    window.requestAnimationFrame(function () {
                      Wi ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
                    })
                  }
                }
              }),
              _()(p()(c), '_handleFetchTweetIfNeeded', function () {
                var e = c.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchTweetIfNeeded,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.quotedStatus,
                  i = e.quotedStatusId
                !a && r && n(r).catch(t(ao.a)), !o && i && n(i).catch(t(ao.a))
              }),
              _()(p()(c), '_blockHistory', function (e, t) {
                var n = c.props,
                  a = n.audienceControlsValue,
                  r = n.isInline,
                  o = !r && /unsent/.test(e.pathname),
                  i = !r && !/\/compose\/tweet\/?$/.test(e.pathname)
                return c.shouldShowDiscardConfirmation && 'POP' === t && i
                  ? (c.setState({ showDiscardTweetConfirmation: !0 }), !1)
                  : c._canSaveDraft && o && 'PUSH' === t
                  ? c.shouldShowDiscardConfirmation
                    ? (c.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: o }), !1)
                    : (c._resetDraft(), !0)
                  : c.shouldShowBackgroundSendConfirmation && 'POP' === t && i
                  ? (c._cancelAllMediaUploads(), !1)
                  : !('POP' === t && i && c._areComposersEmptyOrUnchanged && !Object(Ct.a)(a)) || (c._resetDraft(), !0)
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
                    ? (c.setState({ showAltTextPrompt: !0 }), void c._scribe(gi(gi({}, Ui), {}, { action: 'show' })))
                    : c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleTweetOrRetweet', function () {
                return c.isRetweet ? c._handleRetweet() : c._handleTweet()
              }),
              _()(p()(c), '_renderReplyContext', function () {
                var e = c.props,
                  t = e.activeUser,
                  n = e.excludedRecipients,
                  a = e.inReplyToStatus,
                  r = e.isInline,
                  o = e.isSelfThreadReply,
                  i = e.selectedCommunityName
                if (a && c._shouldBeExpanded())
                  return C.a.createElement(ur, {
                    communityName: i,
                    excludedRecipients: n,
                    inReplyToStatus: a,
                    key: n.join(),
                    loggedInUserId: t ? t.id_str : void 0,
                    onPress: c._handleViewRecipients,
                    shouldDisplayRepliesText: !o,
                    showParentTweet: !r,
                  })
              }),
              _()(p()(c), '_renderAltTextPrompt', function () {
                var e = c._getAltTextMetadata(),
                  t = e.numberOfDescriptionsMissing,
                  n = e.numberOfImages
                return C.a.createElement(ri.a, {
                  Icon: oo.a,
                  cancelButtonLabel: Si,
                  confirmButtonLabel: Ei({ numOfDescriptions: t }),
                  headline: _i,
                  onCancel: c._handleIgnoreAltTextPrompt,
                  onConfirm: c._handleAcceptAltTextPrompt,
                  onMaskClick: c._handleCancelAltTextPrompt,
                  text: xi({ numberOfDescriptionsMissing: t, numberOfImages: n }),
                })
              }),
              _()(p()(c), '_renderToxicReplyNudge', function () {
                var e = c._getSingleComposerDataWithLatestText(c.props.composerData[0]),
                  t = e.text,
                  n = e.media
                return C.a.createElement(ai, {
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
                  e ? Object(Tt.h)(e) && c._handleScheduleTweet() : c._checkToxicReplyAndSendTweet()
              }),
              _()(p()(c), '_handleTweetError', function (e, t) {
                return function (n) {
                  var a = c.props,
                    r = a.analytics,
                    o = a.createLocalApiErrorHandler
                  if (Object(hi.d)(n) && n.code === io.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var i = Object(hi.b)(n)
                  if (i) return c.setState({ errorMessage: i }), Promise.resolve()
                  o(gi({}, t || Object(to.a)(void 0, !1)))(n)
                  var s = n instanceof x.a && (null == t ? void 0 : t[n.errors[0].code])
                  c.setState({ errorMessage: { text: s ? s.toast.text : Hi } })
                }
              }),
              _()(p()(c), '_handleScheduleTweet', function () {
                var e = c.props,
                  t = e.addToast,
                  n = e.composerData,
                  a = e.excludedRecipients,
                  r = e.inReplyToStatus,
                  o = e.schedule,
                  i = c._getSingleComposerDataWithLatestText(n[0])
                o({ excludedRecipients: a, inReplyToStatus: r, scheduleData: i })
                  .then(function (e) {
                    c.setState({ tweetsSentOrScheduled: !0 })
                    var a = Object(Tt.c)(i.scheduledFor)
                    if (a) {
                      var r = Object(Tt.b)(a),
                        o = Object(Tt.i)(a),
                        s = Ni({ scheduleDate: r, scheduleTime: o })
                      t({ text: s, action: { label: Fi, link: '/compose/tweet/unsent/scheduled' } }),
                        c._scribeTweetSent(n[0], gi(gi({}, e), {}, { id_str: e.scheduled_id_str }), { isScheduled: !0 })
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
                      t({ text: Li, action: { label: Fi, link: '/compose/tweet/unsent/drafts' } }),
                      c._scribeTweetSent(n[0], gi(gi({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      c._updateConvoCardState(),
                      c._close()
                  })
                  .catch(c._handleTweetError('draft_tweet_cancel', mo.a))
              }),
              _()(p()(c), '_checkToxicReply', function () {
                var e = c.props,
                  t = e.checkTweetForNudge,
                  n = e.composerData,
                  a = e.inReplyToStatus,
                  r = e.inReplyToStatusId,
                  o = e.parentTweetId,
                  i = t(
                    c._getSingleComposerDataWithLatestText(n[0]).text,
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
                      l = c.context.featureSwitches.getValueWithoutScribeImpression(
                        'responsive_web_reply_nudge_supported_languages',
                      )
                    if (
                      !l ||
                      !Array.isArray(l) ||
                      !l.includes(
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
                  a = c.state.nudgeId
                if (
                  !(
                    !c._getSingleComposerDataWithLatestText(t[0]).scheduledFor &&
                    c.isReply &&
                    !n &&
                    c.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_reply_nudge_enabled') &&
                    !a
                  )
                )
                  return c._handleSendTweet()
                c._checkToxicReply().then(function (e) {
                  if (!e) return c._handleSendTweet()
                  c.context.featureSwitches.isTrue('responsive_web_reply_nudge_enabled'),
                    c.context.featureSwitches.getArrayValue('responsive_web_reply_nudge_supported_languages'),
                    c._showToxicReplyNudge()
                })
              }),
              _()(p()(c), '_handleSendTweet', function () {
                var e = c.props,
                  t = e.activeUser,
                  n = e.addToast,
                  a = e.analytics,
                  r = e.audienceControlsValue,
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
                  g = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  v = void 0 === y ? void 0 : y,
                  b = c.isPreview,
                  _ = c.props.composerData.map(function (e) {
                    return c._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(Tt.c)(_[0].scheduledFor)
                if (w) {
                  var C = Object(Tt.b)(w),
                    T = Object(Tt.i)(w),
                    x = Ni({ scheduleDate: C, scheduleTime: T })
                  return n({ text: x, action: { label: Fi, link: '' } }), void c._close()
                }
                if (
                  (i.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  c._conversationControlsCreationEnabled)
                )
                  if ('community' === g) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === g) {
                    var E = c._getSingleComposerDataWithLatestText(_[0]).text,
                      O = Object(S.d)(E)
                    a.scribe({
                      action: O ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === g && a.scribe({ action: 'send_my_followers_tweet' })
                var R = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  I = R ? '8.31.'.concat(R) : '',
                  P = o ? (R ? [o, I].join(',') : o) : I
                f({
                  sendData: _,
                  communityIdValue: R,
                  conversationControlsValue: g,
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
                    var a = e.length > 1 ? Ri : Oi
                    if (R && h) {
                      var r = h,
                        o = e.length
                      a = bi({ numOfTweets: o, communityName: r })
                    }
                    var i = b && c.isReply
                    if (i || !b) {
                      var l = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? Ii : a,
                        action: { label: Fi, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
                      })
                    }
                    c.isInlineReply && c.setState({ focused: !1 }), c._updateConvoCardState(), c._close()
                  })
                  .catch(function (e) {
                    var t,
                      n = e.sentTweets,
                      r = void 0 === n ? [] : n,
                      o = Array.isArray(e.errors) && (null === (t = e.errors[0]) || void 0 === t ? void 0 : t.code),
                      i = null == e ? void 0 : e.url,
                      u = null == e ? void 0 : e.status,
                      d = { message: e.type, event_info: o ? ''.concat(o) : void 0, status_code: u, url: i }
                    throw (
                      (r.map(
                        function (e, t) {
                          return c._scribeTweetSent(_[t], e)
                        },
                        { hasArticleNudge: s },
                      ),
                      (Object(hi.d)(e) && e.code === io.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: d }),
                      _.length > 1 && c._scribeThreadSent(_, r, 'thread_send_failure'),
                      r.length &&
                        l.replace({
                          pathname: p.pathname,
                          state: gi(
                            gi({}, Object(ci.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(c._handleTweetError('send_tweet_cancel', mo.a))
              }),
              _()(p()(c), '_setActiveParentKey', function () {
                ;(0, c.props.setActiveParentKey)(c._getParentKey())
              }),
              _()(p()(c), '_scribeTweetSent', function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                  a = n.hasArticleNudge,
                  r = void 0 !== a && a,
                  o = n.isDraftTweet,
                  i = void 0 !== o && o,
                  s = n.isScheduled,
                  l = void 0 !== s && s,
                  u = c.state.nudgeId,
                  d = e.scheduledTweetId ? 'schedule_edit_' : 'schedule_',
                  p = e.draftTweetId ? 'draft_edit_' : 'draft_',
                  m = i ? p : l ? d : 'send_',
                  h = { items: [po.a.getTweetItem(t)] },
                  f = e.pollActive && e.pollValid,
                  g = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  v = Object(si.a)(
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
                    r && c._scribe(gi(gi({}, Gi), {}, { element: 'result', action: 'retweet_with_comment' }), h)),
                  c.isReply && c._scribe({ component: b, action: ''.concat(m, 'reply') }, h),
                  f && c._scribe({ action: ''.concat(m, 'poll_tweet') }, h),
                  c._hasPhoto(e) &&
                    (c._scribe({ action: ''.concat(m, 'photo_tweet') }, h),
                    g && c._scribe({ action: ''.concat(m, 'photo_tweet_with_alt_text') }, h),
                    y && c._scribe({ action: ''.concat(m, 'photo_tweet_with_tags') }, h)),
                  c._hasVideo(e) &&
                    (c._scribe({ action: ''.concat(m, 'video_tweet') }, h),
                    y && c._scribe({ action: ''.concat(m, 'video_tweet_with_tags') }, h)),
                  v.size)
                ) {
                  var _ = c._hasPhoto(e) ? 'photo' : 'video'
                  v.forEach(function (e) {
                    c._scribe({ action: ''.concat(m).concat(_, '_tweet_with_').concat(e, '_warning') }, h)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    c.isReply &&
                    !l &&
                    (i
                      ? c._scribe(gi(gi({}, w), {}, { action: 'save' }), { nudge_id: u })
                      : c._scribe(gi(gi({}, w), {}, { action: 'sent' }), { nudge_id: u })),
                  u || i || !c.isReply || l || c._scribe(gi(gi({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var C = t.id_str && po.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
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
                    y && c._scribe({ action: ''.concat(m, 'gif_tweet_with_tags') }, h)
                } else c._hasGif(e) && (c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet') }, h), g && c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet_with_alt_text') }, h))
              }),
              _()(p()(c), '_scribeThreadSent', function (e, t, n) {
                var a = c.props.inReplyToStatus,
                  r = { items: [po.a.getSendThreadItem(e, t.length, !!a)] }
                c._scribe({ action: n }, r)
              }),
              _()(p()(c), '_scribeRetweet', function (e) {
                var t = c.props.hasArticleNudge,
                  n = { items: [po.a.getTweetItem(e)] }
                c._scribe({ action: 'retweet' }, n),
                  t && c._scribe(gi(gi({}, Gi), {}, { element: 'result', action: 'retweet' }), n)
              }),
              _()(p()(c), '_handleRetweet', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.createLocalApiErrorHandler,
                  a = e.retweet,
                  r = t[0].quotedStatus
                r &&
                  (c._scribeRetweet(r),
                  a(r.id_str, {}).then(function (e) {
                    c.setState({ tweetsSentOrScheduled: !0 }), c._close()
                  }, n(uo.a)))
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
                  a = c._canSaveDraft ? 'draft' : 'send'
                c.setState({ showDiscardTweetConfirmation: !1 }),
                  c._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && c._scribe(gi(gi({}, Gi), {}, { element: 'result', action: 'cancel' })),
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
                  (c._scribe(gi(gi({}, Ui), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              _()(p()(c), '_handleIgnoreAltTextPrompt', function () {
                c._scribe(gi(gi({}, Ui), {}, { action: 'declined' })),
                  c.setState({ showAltTextPrompt: !1 }),
                  c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleCancelAltTextPrompt', function () {
                c._scribe(gi(gi({}, Ui), {}, { action: 'cancel' })),
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
                  a = e.onCloseComposer
                n || c._resetDraft(),
                  c.state.navigatingToOutbox
                    ? c._canSaveDraft
                      ? t.push('/compose/tweet/unsent/drafts')
                      : t.push('/compose/tweet/unsent/scheduled')
                    : a && a()
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
                  a = e.history,
                  r = e.location,
                  o = e.removeComposer
                0 === t &&
                  n[0].quotedStatus &&
                  a.replace({ pathname: r.pathname, state: Object(ci.a)(r.state || {}, 'quotedStatus') }),
                  o(),
                  setTimeout(c._restoreFocusToActiveComposer)
              }),
              _()(p()(c), '_handleViewRecipients', function () {
                var e = c.props,
                  t = e.excludedRecipients,
                  n = e.history,
                  a = e.inReplyToStatus
                c._setActiveParentKey(),
                  n.push({
                    pathname: '/compose/tweet/recipients',
                    state: { excludedRecipients: t, inReplyToStatus: a },
                  })
              }),
              _()(p()(c), '_handleTextChange', function (e, t) {
                var n = c.state.textMap,
                  a = c.props,
                  r = a.activeComposerIndex,
                  o = a.isInline,
                  i = a.setValidity
                if (
                  (c.setState({ textMap: gi(gi({}, n), {}, _()({}, t, e)) }, function () {
                    i && i(c._areComposersValid())
                  }),
                  c.setState({ errorMessage: void 0 }),
                  Rt.b.isIOS())
                ) {
                  var s = o ? 0 : r
                  c._updateSingleComposer({ text: e }, s)
                }
              }),
              _()(
                p()(c),
                '_handleTextOnBlur',
                Object(pa.a)(function (e, t) {
                  return function () {
                    var n = c.state,
                      a = n.textMap,
                      r = n.tweetsSentOrScheduled,
                      o = c.props.composerData,
                      i = a[e],
                      s = o.some(function (t) {
                        return t.key === e
                      })
                    'string' == typeof i && !r && s && c._updateSingleComposer({ text: i }, t)
                  }
                }),
              ),
              _()(p()(c), '_updateAudienceControlsValue', function (e) {
                var t = c.props,
                  n = t.composerData,
                  a = t.updateAudienceControlsValue,
                  r = c.state.errorMessage
                switch (e._type) {
                  case 'conversation_controls':
                    if (!c._conversationControlsCreationEnabled) return
                    break
                  case 'community_members':
                    if (!c._isCommunitiesEnabled) return
                    n[0].pollActive &&
                      (c._updateSingleComposer({ pollActive: !1 }, 0), c.setState({ errorMessage: { text: vi } })),
                      (null == r ? void 0 : r.text) === vi && c.setState({ errorMessage: void 0 })
                }
                a(e, c._getParentKey())
              }),
              _()(p()(c), '_renderProgressBar', function () {
                var e = c.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return C.a.createElement(oi.a, { progress: t ? Math.max(n, 0.02) : 0, style: Zi.progressBar })
              }),
              _()(p()(c), '_updateConvoCardState', function () {
                var e = c.props,
                  t = e.convoCardData,
                  n = e.updateConvoCardState
                if (t) {
                  var a = t.cardId,
                    r = t.nextState
                  r && a && n(a, { cardState: r })
                }
              }),
              _()(p()(c), '_attachExternalMedia', function (e) {
                return function (t) {
                  return Promise.all(
                    t.map(function (e) {
                      return Object(no.a)(e)
                    }),
                  ).then(c._handleAddMediaFiles(e))
                }
              }),
              _()(p()(c), '_handleAddMediaFiles', function (e) {
                return function (t) {
                  var a,
                    r,
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
                    y = Object(pi.e)(
                      null === (a = p()(c)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  g ||
                    i(t, { location: pi.d.Tweet, canUploadLongVideo: y }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        c._updateSingleComposer({ mediaIds: Object(li.a)(r.concat(a)) }, e),
                          m(t, { onFailure: c._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: zi }), h(a)
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
                  a = n.composerData,
                  r = n.removeMediaUpload,
                  o = a[e],
                  i = o.media,
                  s = o.mediaTags,
                  l = (function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
                      n[a - 1] = arguments[a]
                    return Object(ui.a)(e, n)
                  })(
                    i.map(function (e) {
                      return e.id
                    }),
                    t,
                  ),
                  u = l.length > 0 ? s : []
                c._updateSingleComposer({ mediaIds: l, gifMetadata: void 0, mediaTags: u }, e),
                  r(t),
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
                var a = !Object(Ct.c)(c._getSingleComposerDataWithLatestText(t[0]))
                return !n || a
              }),
              _()(p()(c), '_areComposersValid', function () {
                var e = c.props,
                  t = e.audienceControlsValue._type,
                  n = e.composerData,
                  a = n[0].quotedStatus,
                  r = null == a ? void 0 : a.community_id_str,
                  o = 'community_members' === t
                return (
                  (c.isRetweet && !r && !o) ||
                  n.every(function (e) {
                    return Object(Ct.e)(c._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(p()(c), '_areComposersEmptyOrUnchanged', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(Ct.d)(c._getSingleComposerDataWithLatestText(e), n)
                })
              }),
              _()(p()(c), '_getAltTextMetadata', function () {
                var e = c.props.composerData,
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
              _()(p()(c), '_getSingleComposerDataWithLatestText', function (e) {
                var t = c.state.textMap
                return 'string' == typeof t[e.key] ? gi(gi({}, e), {}, { text: t[e.key] }) : e
              })
            var l = !(null === (r = e.location.state) || void 0 === r || !r.focusComposer)
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
              (c._throttledSyncTexts = Object(ma.a)(c._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (c._keyCommandHandlers =
                ((o = {}), _()(o, mi.b, c.handleTweetOrRetweet), _()(o, mi.a, c.handleDismissComposer), o)),
              (c._keyCommandHandlersForActiveTypeahead = _()({}, mi.b, c.handleTweetOrRetweet)),
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
                    a = e.externalMediaFiles,
                    r = e.history,
                    o = e.isInline,
                    i = e.isIntentRoute,
                    c = e.location,
                    s = e.prepopulatedText,
                    l = e.setValidity
                  if (
                    ((this._unblockHistory = this.props.history.block(this._blockHistory)),
                    n.length > 0 && this._attachExternalMedia(0)(n),
                    a.length > 0 && this._handleAddMediaFiles(0)(a),
                    this._handleFetchTweetIfNeeded(),
                    this._handleDeletePreviewTweet(),
                    s || (t && t.cardUrl))
                  ) {
                    var u = gi({}, null)
                    s && (u.text = s), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(s || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !i &&
                    r.replace({
                      query: Object(mr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(ci.a)(Object(mr.b)(c.state || {}), [
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
                    c = n.externalMediaFiles,
                    s = n.onRef,
                    l = n.parentTweetId,
                    u = n.replyPressToggle,
                    d = n.setValidity
                  n.windowWidth !== e.windowWidth && this._throttledSyncTexts(),
                    e.onRef && e.onRef !== s && e.onRef(void 0),
                    s && s !== e.onRef && s(this),
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Vi }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : c.length > 0 && c !== e.externalMediaFiles && this._handleAddMediaFiles(0)(c),
                    d && !Object(di.a)(r, e.composerData) && d && d(this._areComposersValid()),
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
                    c = a.addToast,
                    s = a.audienceControlsValue,
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
                    w = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    x = a.richTextInputContext,
                    E = a.scheduledFor,
                    S = a.typeaheadWrapper,
                    O = a.userLanguage,
                    R = a.windowWidth,
                    I = this.state,
                    P = I.errorMessage,
                    A = I.focused,
                    k = I.shouldDisableButton,
                    D = I.showAltTextPrompt,
                    M = I.showDiscardTweetConfirmation,
                    j = I.showToxicReplyNudge,
                    B = I.typeaheadActive,
                    L = !y && B,
                    F = g ? 0 : this.props.activeComposerIndex,
                    N = L || g ? [u[F]] : u,
                    V = this._areComposersValid(),
                    H = this.hasNonCompliantQuote && this.isRetweet,
                    z = g ? U.a : ii.a,
                    W = g ? {} : { onAnimateComplete: y ? void 0 : this._handleAnimateComplete },
                    G = k || !V || H || this.isCommunityTweetFromProtectedUser,
                    q = (g && ho.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    X = (g && ho.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return C.a.createElement(
                    U.a,
                    { ref: this._setRootRef, style: !w && Zi.root },
                    g ? this._renderProgressBar() : null,
                    P &&
                      C.a.createElement(
                        U.a,
                        { style: Zi.inlineCallout },
                        C.a.createElement(ze.a, {
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
                    C.a.createElement(
                      U.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Zi.content, w && Zi.contentInlineReply, y && Zi.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      l,
                      C.a.createElement(
                        z,
                        W,
                        N.map(function (e, t) {
                          var a = Object(Tt.h)(e.scheduledFor),
                            l = u.indexOf(e),
                            w = p(e, t, N),
                            I =
                              y || g
                                ? C.a.createElement(
                                    K.a,
                                    {
                                      behavioralEventContext: Ki,
                                      disabled: G,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Zi.inlineSendButton,
                                      testID: y ? fo : go,
                                      type: 'brandFilled',
                                    },
                                    Object(ro.a)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!v,
                                      isQuoteTweet: !!n.isQuoteTweet,
                                      isRetweet: !!n.isRetweet,
                                      isScheduled: !!a,
                                      isThread: n.isThread,
                                    }),
                                  )
                                : null,
                            P = n._getSingleComposerDataWithLatestText(e)
                          return C.a.createElement(
                            U.a,
                            { key: e.key },
                            C.a.createElement(
                              Ja,
                              r()(
                                {
                                  addToast: c,
                                  additionalToolbarContent: I,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && A,
                                  data: P,
                                  disableAddTweet: u.length >= 25,
                                  editable: !b && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: m,
                                  hidePoll: q,
                                  hideScheduling: X,
                                  history: h,
                                  index: l,
                                  isActive: l === F && !b,
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
                                  onTextInputBlur: n._handleTextOnBlur(P.key, t),
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
                                  windowWidth: R,
                                },
                                w,
                              ),
                            ),
                          )
                        }),
                      ),
                      M
                        ? this._canSaveDraft
                          ? C.a.createElement(ri.a, {
                              cancelButtonLabel: Di,
                              confirmButtonLabel: Bi,
                              headline: Mi,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: ji,
                            })
                          : C.a.createElement(ri.a, {
                              confirmButtonLabel: Di,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Ai : Pi,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: ki,
                            })
                        : null,
                      D ? this._renderAltTextPrompt() : null,
                      j ? this._renderToxicReplyNudge() : null,
                      C.a.createElement(U.a, { style: b && Zi.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(gi(gi({}, e), {}, { data: t }))
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
                    ? qi.Quote
                    : this.isThread
                    ? qi.Thread
                    : this.isReply
                    ? qi.Reply
                    : qi.Original
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
        })(C.a.Component)
      _()(Xi, 'defaultProps', {
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
        typeaheadWrapper: co.a,
      }),
        _()(Xi, 'contextType', O.a),
        _()(Xi, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(S.c)(n.concat(t))
        })
      var Zi = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: gi({}, B.a.absoluteFillObject),
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
      t.a = Object(at.a)(eo(Xi))
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
        c = r.a.d17df547,
        s = r.a.h735a98d,
        l = function (e) {
          var t = e.inReplyToStatus && !e.isSelfThreadReply
          return e.isScheduled ? s : t ? c : e.isThread ? i : o({ verb: '' })
        }
    },
    nV1z: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('KEM+'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('k/Ka')
      function l(e, t) {
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
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
        c = n('3A2y'),
        s = i.a.b2e94283,
        l = ['title', 'screen_name', 'text', 'url', 'hashtags', 'via']
      t.a = function (e) {
        var t = e.state || {},
          n = e.query || {},
          a = l.map(function (e) {
            return t[e] || n[e]
          }),
          o = r()(a, 6),
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
        y = (n('2G9S'), n('z84I'), n('DfhM'), n('ERkP')),
        v = n.n(y),
        b = n('zfvc'),
        _ = n('RhWx'),
        w = n.n(_),
        C = (n('yH/f'), n('M+/F'), n('zrc3')),
        T = Object.freeze({ in: 'in', out: 'out', static: 'static' })
      function x(e) {
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
      var E = (function (e) {
        u()(n, e)
        var t = x(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            g()(s()(e), 'state', {
              isAnimating: !1,
              renderChildren: v.a.Children.toArray(e.props.children).map(function (e) {
                return { status: T.static, child: e }
              }),
            }),
            g()(s()(e), '_handleEachAnimateComplete', function () {
              var t = e.state.isAnimating,
                n = e.props,
                a = n.children,
                r = n.onAnimateComplete
              t &&
                (r && r(),
                e.setState({
                  renderChildren: v.a.Children.toArray(a).map(function (e) {
                    return { status: T.static, child: e }
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
                    return v.a.createElement(
                      b.a,
                      {
                        animateMount: a !== T.static,
                        key: n.key,
                        onAnimateComplete: e._handleEachAnimateComplete,
                        show: a !== T.out,
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
                                w()(
                                  e.slice(a).map(function (e) {
                                    return { child: e, status: T.out }
                                  }),
                                ),
                              ),
                              'break'
                            )
                          var o = t[n],
                            i = e[a]
                          if (o.key === i.key) r.push({ child: o, status: T.static }), (n += 1)
                          else {
                            var c = Object(C.a)(t, function (e) {
                              return e.key === i.key
                            })
                            c >= 0
                              ? (r.push.apply(
                                  r,
                                  w()(
                                    t.slice(n, c).map(function (e) {
                                      return { child: e, status: T.in }
                                    }),
                                  ).concat([{ child: t[c], status: T.static }]),
                                ),
                                (n = c + 1))
                              : r.push({ child: i, status: T.out })
                          }
                          a += 1
                        };
                      a < e.length && 'break' !== o();

                    );
                    return (
                      n < t.length &&
                        r.push.apply(
                          r,
                          w()(
                            t.slice(n).map(function (e) {
                              return { child: e, status: T.in }
                            }),
                          ),
                        ),
                      r
                    )
                  })(
                    t.renderChildren.map(function (e) {
                      return e.child
                    }),
                    v.a.Children.toArray(e.children),
                  )
                  return {
                    renderChildren: n,
                    isAnimating: !n.every(function (e) {
                      return e.status === T.static
                    }),
                  }
                },
              },
            ],
          ),
          n
        )
      })(v.a.Component)
      t.a = E
    },
    ulNE: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('42ly'),
        o = n('N9G2'),
        i = n('tJVe'),
        c = n('i7Kn'),
        s = n('aoZ+')
      a(
        { target: 'Array', proto: !0 },
        {
          flat: function () {
            var e = arguments.length ? arguments[0] : void 0,
              t = o(this),
              n = i(t.length),
              a = s(t, 0)
            return (a.length = r(a, t, t, n, 0, void 0 === e ? 1 : c(e))), a
          },
        },
      )
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
        c = n('7N4s'),
        s = n('cHvH'),
        l = n('rHpw'),
        u = function (e) {
          var t = e.history,
            n = e.location,
            a = e.parentTweetId,
            l = e.replyPressToggle,
            u = e.richTextInputContext,
            p = e.typeaheadWrapper,
            m = r.a.useContext(c.b).isModal
          return r.a.createElement(s.a, null, function (e) {
            var c = e.windowWidth
            return r.a.createElement(
              i.a,
              { style: d.root },
              r.a.createElement(o.a, {
                history: t,
                isInline: !0,
                isModal: m,
                location: n,
                parentTweetId: a,
                replyPressToggle: l,
                richTextInputContext: u,
                typeaheadWrapper: p,
                windowWidth: c,
              }),
            )
          })
        },
        d = l.a.create(function (e) {
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
        c = n.n(i),
        s = n('k6Ei'),
        l = n('rHpw'),
        u = n('+/1j'),
        d = n('MWbm'),
        p = c.a.c2fc878c,
        m = c.a.db11b27f,
        h = function (e) {
          return e
        },
        f = l.a.create(function (e) {
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
          c = e.warningCount,
          g = n - t,
          y = g >= 0 ? m({ count: i(g) }) : p({ count: i(t - n) }),
          v =
            t >= c
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: l.a.visuallyHidden },
                  y,
                )
              : null,
          b = Object(o.a)(g, n),
          _ = t >= n ? 'red500' : t >= c ? 'yellow500' : 'primary',
          w = r.a.createElement(s.a, {
            color: _,
            progress: b,
            size: t >= c ? 30 : 20,
            style: [f.progressCircle, g <= -10 && f.hide],
          }),
          C = t >= c ? r.a.createElement(u.a, { style: [f.text, g > 0 ? f.gray700 : f.red500] }, i(g)) : null
        return r.a.createElement(
          d.a,
          { style: [f.root, f.center] },
          v,
          w,
          r.a.createElement(d.a, { style: [l.a.absoluteFill, f.center] }, C),
        )
      }
    },
    yZqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ddV6'),
        s = n.n(c),
        l = n('ERkP'),
        u = n.n(l),
        d = (n('5BYb'), n('uFXj'), n('H7Rt')),
        p = n('3XMw'),
        m = n.n(p),
        h = n('MWbm'),
        f = n('t62R'),
        g = n('CKsB'),
        y = n('/yvb'),
        v = n('rHpw'),
        b = n('Zg3A'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        w = n.n(_),
        C = n('Lsrn'),
        T = n('k/Ka')
      function x(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? x(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : x(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(T.a)(
          'svg',
          E(
            E({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [C.a.root, e.style], viewBox: '0 0 24 24' },
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
      S.metadata = { width: 24, height: 24 }
      var O = S,
        R = n('boUI'),
        I = n('EweD'),
        P = m.a.g6185a9e,
        A = m.a.g2d04222,
        k = m.a.baffe39a,
        D = m.a.af293dc2,
        M = m.a.h1053f7e,
        j = m.a.bf994ab2,
        B = m.a.cf7f7e39,
        L = m.a.cfd2f35d,
        F = v.a.create(function (e) {
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
        N = function (e) {
          var t,
            n,
            a = e.dismiss,
            r = e.isModal,
            o = e.midConversationTweet,
            i = e.value,
            c = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            s = !!o,
            l =
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
            p = M
          return (
            l ? (p = j) : s && (p = B),
            u.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [F.root, r ? F.modal : F.popover],
              },
              u.a.createElement(
                h.a,
                { style: F.title },
                u.a.createElement(f.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, P),
                u.a.createElement(
                  f.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  A,
                ),
              ),
              u.a.createElement(
                h.a,
                null,
                u.a.createElement(g.a, {
                  Icon: b.a,
                  actionText: k,
                  isSelected: d.a.all === i,
                  onClick: c(d.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: O,
                  actionText: D,
                  isSelected: d.a.community === i,
                  onClick: c(d.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(g.a, {
                  Icon: l ? R.a : I.a,
                  actionText: p,
                  isSelected: d.a.by_invitation === i,
                  onClick: c(d.a.by_invitation),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? u.a.createElement(
                      y.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: F.cancelButton,
                        type: 'primaryOutlined',
                      },
                      L,
                    )
                  : null,
              ),
            )
          )
        },
        V = n('OiMc'),
        H = n('efqG')
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          a = void 0 !== n && n,
          o = e.disabled,
          c = u.a.useState(!1),
          l = s()(c, 2),
          d = l[0],
          p = l[1],
          m = u.a.useCallback(function () {
            return p(!0)
          }, []),
          h = u.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (d ? V.a.VISIBILITY_BEHAVIOR.forceVisible : V.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          g = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return u.a.createElement(
          H.a,
          {
            disabled: o,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = i()(e, ['children', 'controlled'])
              return u.a.createElement(N, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
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
        r = n.n(a),
        o = n('3XMw'),
        i = n.n(o),
        c = n('J0mu'),
        s = n('t62R'),
        l = n('rHpw'),
        u = n('QbaN'),
        d = i.a.bfb895b1,
        p = l.a.create(function (e) {
          return { icon: { fontSize: e.fontSizes.body, paddingRight: e.spaces.space12, textAlignVertical: 'middle' } }
        })
      t.a = function (e) {
        var t = e.onPress,
          n = e.scheduledFor,
          a = e.testID,
          o = Object(u.c)(n),
          i = !!o && Object(u.h)(n) && !Object(u.g)(o) && !Object(u.f)(o),
          l = Boolean(t)
        return o && i
          ? r.a.createElement(
              s.b,
              { color: 'gray700', onPress: t, size: 'subtext2', testID: a, withInteractiveStyling: l },
              r.a.createElement(c.a, { style: p.icon }),
              d({ date: Object(u.b)(o), time: Object(u.i)(o) }),
            )
          : null
      }
    },
  },
])
//# sourceMappingURL=WIPED
