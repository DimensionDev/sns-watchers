;(window.webpackJsonp = window.webpackJsonp || []).push([
  [82, 76],
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
          return w
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
      var f = 'placePicker',
        h = Object.freeze({
          REQUEST: 'rweb/placePicker/SEARCH_REQUEST',
          SUCCESS: 'rweb/placePicker/SEARCH_SUCCESS',
          FAILURE: 'rweb/placePicker/SEARCH_FAILURE',
        }),
        y = Object.freeze({
          initial: { fetchStatus: i.a.NONE },
          lastSearch: { fetchStatus: i.a.NONE },
          lastSelectedPlace: void 0,
        })
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
            g(e),
            (function (e) {
              return e.placePicker.lastSelectedPlace
            })(e),
          )
        },
        C = function (e, t) {
          return function (n, a, r) {
            var i = r.api
            return Object(o.b)(n, { request: i.Places.search, params: e })({
              actionTypes: h,
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
        E = function () {
          return function (e, t, n) {
            n.api
            var a = v(t()),
              r = g(t())
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
        x = function () {
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
        },
        S = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        O = function (e) {
          return { type: S, payload: e }
        }
      s.a.register(
        r()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case h.REQUEST:
              var n = t.meta.resultSet
              return m(m({}, e), {}, r()({}, n, { fetchStatus: i.a.LOADING }))
            case h.FAILURE:
              var a = t.meta.resultSet
              return m(m({}, e), {}, r()({}, a, { fetchStatus: i.a.FAILED }))
            case h.SUCCESS:
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
        f = n.n(m),
        h = n('rHpw'),
        y = n('MWbm')
      function g(e) {
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
          var t = g(n)
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
                  return f.a.createElement(y.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        b = h.a.create(function (e) {
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
        f = n.n(m),
        h = n('3XMw'),
        y = n.n(h),
        g = n('rHpw'),
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
      var w = y.a.e5b0063d,
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
                  return f.a.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.a.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: g.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.a.createElement(b.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
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
        f = n.n(m),
        h = n('AuHH'),
        y = n.n(h),
        g = n('KEM+'),
        v = n.n(g),
        b = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(b),
        w = n('t62R'),
        C = n('piX5'),
        T = n('4r2z'),
        E = n('FG+G'),
        x = n('rHpw'),
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
            a = y()(e)
          if (t) {
            var r = y()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return f()(this, n)
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
      function D(e) {
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
          return Object(S.a)('select', D(D({}, e), {}, { ref: t }))
        }),
        A = function (e) {
          return Object(S.a)('option', e)
        },
        j = 1,
        M = (function (e) {
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
              (a._id = 'SELECTOR_'.concat(j)),
              (a._errorID = ''.concat(a._id, '_ERROR')),
              (a._helperID = ''.concat(a._id, '_HELP')),
              (a._labelID = ''.concat(a._id, '_LABEL')),
              (j += 1),
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
                    f =
                      'ja' === m
                        ? x.a.theme.fontFamilies.japan
                        : O.a.getConstants().isRTL || T.a.isLocaleRTL(m)
                        ? x.a.theme.fontFamilies.rtl
                        : x.a.theme.fontFamilies.normal,
                    h = void 0 === o ? !!a : o,
                    y = new Set()
                  a && y.add(this._errorID), t && y.add(t), i && y.add(this._helperID)
                  var g = y.size ? r()(y).join(' ') : void 0
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
                          h && C.a.invalidBorderColor,
                          p && h && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        k,
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
                          style: [B.select, { fontFamily: f }, n && C.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? _.a.createElement(A, { disabled: !0, style: B.option, value: '' }) : null,
                        c.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            A,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: B.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(E.a, {
                        style: [B.dropdownCaret, p && C.a.validColor, (o || a) && C.a.invalidColor],
                      }),
                    ),
                    i ? this._renderHelperText() : null,
                    h && a ? this._renderErrorText() : null,
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
      v()(M, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (M.propTypes = {})
      var B = x.a.create(function (e) {
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
      t.a = M
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        v = n.n(g),
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
        E = n('v//M'),
        x = n('sIe2'),
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var P = O.a.i9028824,
        D = 'sliceTimeline',
        k = function (e) {
          return e
        },
        A = { viewType: 'timeline' },
        j = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), '_render', function () {
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
                      cacheKey: D,
                      footer: n,
                      identityFunction: k,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : v.a.createElement(x.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: k,
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
                    ? v.a.createElement(E.a, {
                        accessibilityLabel: P,
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
        })(v.a.Component)
      y()(j, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var M = T(j)
      t.a = M
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
        c = n('RH6X'),
        s = n('rziq'),
        l = n('hHEM'),
        u = n('keCP'),
        d = {
          convertEmojiToEntities: l.a.convertEmojiToEntities,
          element: u.a,
          initEditorState: l.a.initEditorState,
          insertTextAtCursor: l.a.insertTextAtCursor,
          updateOverflowStyle: l.a.updateOverflowStyle,
          dismissComposerCommandName: s.a,
          sendTweetCommandName: s.b,
        }
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(e, r()({}, t, { richTextInputContext: d, typeaheadWrapper: c.a }))
        }
      }
    },
    RH6X: function (e, t, n) {
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('ERkP')),
        v = n.n(g),
        b = n('oEoC'),
        _ = n('2dXj'),
        w = n('4bHO'),
        C = n('dzqK'),
        T = n('GZwR'),
        E = n('zpdM')
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var S = (function (e) {
        u()(n, e)
        var t = x(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            y()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
            y()(s()(e), '_genericWrapperRef', v.a.createRef()),
            y()(s()(e), 'render', function () {
              var t = e.props,
                n = t.children,
                a = t.contextText,
                r = t.isInline,
                o = t.isInlineReply,
                i = t.onTypeaheadStateChange,
                c = t.source,
                s = e.state,
                l = s.canShowTypeahead,
                u = s.queryContext,
                d = l && u ? { word: u.word, resultType: u.resultType } : void 0
              return v.a.createElement(
                _.a,
                {
                  contextText: a,
                  isInline: r,
                  isInlineReply: o,
                  onDismiss: e._handleDismiss,
                  onSelectItem: e._handleSelectItem,
                  onTypeaheadStateChange: i,
                  query: d,
                  ref: e._genericWrapperRef,
                  source: c || T.d.Compose,
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
                a = e.state.queryContext
              if (a) {
                var r = Object(w.a)(t, a.resultType)
                n(e._replaceToken(r, a))
              }
              e._setQueryContext(void 0)
            }),
            y()(s()(e), '_handleInputChange', function (t) {
              if (!Object(C.a)(t))
                throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
              var n = e.state.queryContext,
                a = n && n.word,
                r = e._getPlaintextFromCurrentBlock(t),
                o = b.c(e._getCaret(t), r),
                i = o.end,
                c = o.start,
                s = o.word,
                l = b.e(s || '', 'compose')
              if ((null == l ? void 0 : l.q) !== a)
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
                  a = t.endIndex,
                  r = t.startIndex,
                  o = n
                    .getSelection()
                    .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                  i = E.Modifier.replaceText(n.getCurrentContent(), o, e),
                  c = E.EditorState.push(n, i, 'insert-characters'),
                  s = r + e.length,
                  l = c.getSelection().merge({ anchorOffset: s, focusOffset: s })
                return E.EditorState.forceSelection(c, l)
              },
            },
          ]),
          n
        )
      })(v.a.Component)
      t.a = S
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
          return w
        })
      var a = n('KEM+'),
        r = n.n(a),
        o = (n('yH/f'), n('LW0h'), n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('oEOe')),
        i = n('kGix'),
        c = n('Ssj5')
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
      function l(e) {
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
      c.a.register(r()({}, u, g))
      var v = function (e) {
          return e.scheduledTweets.scheduledTweets
        },
        b = function (e) {
          return e.scheduledTweets.fetchStatus
        },
        _ = function () {
          return function (e, t, n) {
            var a = n.api
            return Object(o.b)(e, { request: a.Scheduling.fetchScheduledTweets, params: {} })({
              actionTypes: m,
              context: p,
            }).then(function () {})
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var r = a.api
            return Object(o.b)(t, { request: r.Scheduling.deleteScheduledTweet, params: { scheduled_tweet_id: e } })({
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
          return f
        }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return g
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
        r()({}, l, function () {
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
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, c.default)(e, t)
            .concat((0, i.default)(e))
            .concat((0, o.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, s.default)(n), n
        })
      var r = a(n('EW8Q')),
        o = a(n('yyPN')),
        i = a(n('YXS5')),
        c = a(n('vwfs')),
        s = a(n('c8jd'))
      e.exports = t.default
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
        f = n.n(m),
        h = n('N+ot'),
        y = n.n(h),
        g = n('AuHH'),
        v = n.n(g),
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
        E = n('pXBW'),
        x = n('6/RC'),
        S = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        O = n('v6aA'),
        R = n('+Kfv'),
        I = n('eSoz'),
        P = n('rxPX'),
        D = function (e, t) {
          var n = t.communityId
          return n ? I.c.select(e, n) : void 0
        },
        k = Object(P.a)().propsFromState(function () {
          return { community: D }
        }),
        A = n('MtXG'),
        j = n('t62R'),
        M = n('CKsB'),
        B = n('rHpw'),
        F = n('3XMw'),
        L = n.n(F),
        N = L.a.d58baa7e,
        H = k(
          C.a.memo(function (e) {
            var t = e.clickHandler,
              n = e.community,
              a = e.communityId,
              r = e.selectedCommunityId
            if (!n) return null
            var o,
              i = n.member_count
            return C.a.createElement(M.a, {
              actionSubText:
                ((o = N(i)),
                C.a.createElement(
                  A.a.Group,
                  null,
                  C.a.createElement(
                    A.a,
                    null,
                    C.a.createElement(
                      j.b,
                      { color: 'white' },
                      C.a.createElement(
                        L.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        C.a.createElement(A.a.Value, null, L.a.ibd0106d({ formattedCount: o })),
                        C.a.createElement(A.a.Label, null, L.a.cface2d0({ count: i })),
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
              style: V.menuItem,
            })
          }),
        ),
        V = B.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        z = n('0zXz'),
        U = n('FS1z'),
        W = n('MWbm'),
        K = n('yw4N'),
        q = n('/yvb'),
        G = n('+Eiw'),
        X = n('Zg3A'),
        Y = n('EyD/'),
        Z = L.a.e815fc33,
        Q = L.a.c63602d3,
        J = L.a.baffe39a,
        $ = L.a.aa4209e8,
        ee = L.a.d0748dae,
        te = L.a.abd845fd,
        ne = L.a.d58baa7e,
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
            c = e.isSuperFollowsCreator,
            s = e.onAudienceControlsValueChange,
            l = e.sliceModule,
            u = C.a.useContext(O.a),
            d = a.communityIdValue || void 0,
            p = a.exclusivityControlValue || void 0,
            m = a.trustedFriendsValue || void 0,
            f = u.featureSwitches.isTrue('trusted_friends_tweet_creation_enabled'),
            h = C.a.useCallback(
              function (e) {
                return function () {
                  s(e), r()
                }
              },
              [s, r],
            ),
            y = function (t) {
              t.stopPropagation()
              var n = e.dismiss,
                a = e.history
              return n(), a.push('/i/twittercircle/edit')
            }
          return C.a.createElement(
            W.a,
            { style: ae.root },
            C.a.createElement(
              K.a,
              { style: ae.viewport },
              C.a.createElement(
                C.a.Fragment,
                null,
                C.a.createElement(j.b, { size: 'headline1', style: ae.title, weight: 'bold' }, Z),
                C.a.createElement(
                  R.a,
                  { viewType: 'everyone' },
                  C.a.createElement(M.a, {
                    Icon: X.a,
                    actionText: J,
                    isSelected: !p && !d && !m,
                    onClick: h({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: ae.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                c
                  ? C.a.createElement(M.a, {
                      Icon: Y.a,
                      actionText: $,
                      iconThumbnailColor: 'exclusive',
                      isSelected: !!p,
                      onClick: h({
                        _type: 'super_followers_exclusive',
                        conversationControlsValue: 'super_followers_exclusive',
                        exclusivityControlValue: {},
                      }),
                      selectable: !0,
                      style: ae.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
                f
                  ? C.a.createElement(M.a, {
                      Icon: Y.a,
                      actionSubText:
                        ((t = 5),
                        (n = ne(t)),
                        C.a.createElement(
                          A.a.Group,
                          null,
                          C.a.createElement(
                            A.a,
                            null,
                            C.a.createElement(
                              j.b,
                              { color: 'white' },
                              C.a.createElement(
                                L.a.I18NFormatMessage,
                                { $i18n: 'g8ffaf17' },
                                C.a.createElement(A.a.Value, null, L.a.a5f7b70f({ formattedCount: n })),
                                C.a.createElement(A.a.Label, null, L.a.a7daec1e({ count: t })),
                              ),
                            ),
                            C.a.createElement(q.a, { onPress: y, size: 'xSmall', type: 'primaryText' }, te),
                          ),
                        )),
                      actionText: ee,
                      iconThumbnailColor: 'success',
                      isSelected: !!m,
                      onClick: h({
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
                    W.a,
                    null,
                    C.a.createElement(
                      R.a,
                      { viewType: 'community' },
                      C.a.createElement(j.b, { style: ae.title, weight: 'bold' }, Q),
                      C.a.createElement(U.a, {
                        module: l,
                        noItemsRenderer: z.a,
                        renderer: function (e) {
                          return C.a.createElement(H, {
                            clickHandler: h,
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
        fe = Object(P.a)()
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
        he = n('FG+G'),
        ye = n('Sp5X'),
        ge = n('X00g'),
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
          return y()(this, n)
        }
      }
      var _e = L.a.baffe39a,
        we = L.a.e815fc33,
        Ce = L.a.aa4209e8,
        Te = L.a.d0748dae,
        Ee = C.a.createElement(he.a, null),
        xe = (function (e) {
          f()(n, e)
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
                  history: ye.a,
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
                    f = a && !c,
                    h = _e
                  if ((d && null != c && c.name ? (h = c.name) : p ? (h = Ce) : m && (h = Te), p))
                    e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (d && null != c && c.theme && l) {
                    var y = ge.a.getCommunityUIColorName(c.theme)
                    e = { color: y, borderColor: y, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o || u
                    ? C.a.createElement(
                        R.a,
                        { viewType: 'communities_controls' },
                        C.a.createElement(
                          W.a,
                          { style: Se.container },
                          C.a.createElement(
                            ve.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: f ? 'forceVisible' : 'interactive',
                            },
                            C.a.createElement(
                              q.a,
                              r()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: we,
                                  accessibilityRole: 'button',
                                  icon: Ee,
                                  size: 'xSmall',
                                },
                                e,
                              ),
                              h,
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
      _()(xe, 'contextType', O.a)
      var Se = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        Oe = fe(xe),
        Re = n('ddV6'),
        Ie = n.n(Re),
        Pe = n('PKbs'),
        De = function (e, t) {
          var n = t.selectedCommunityId
          return n ? I.c.select(e, n) : void 0
        },
        ke = Object(P.a)()
          .propsFromState(function () {
            return { community: De }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: I.c.fetchOneIfNeeded,
            }
          }),
        Ae = n('YeIG'),
        je = n('21zW'),
        Me = L.a.gfca5254,
        Be = L.a.f510c8b2,
        Fe = C.a.createElement(j.b, { weight: 'bold' }, Be),
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
        Ne = ke(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          C.a.useEffect(
            function () {
              o && Object(Ae.a)(t) && a(o).catch(n())
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
                    badgeStyle: Le.badgeStyle,
                    headerContainerStyle: Le.rulesHeader,
                    heading: Fe,
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
              f = ge.a.getCommunityUIColorName(m),
              h = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: f, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return C.a.createElement(
              W.a,
              { style: Le.container },
              i ? C.a.createElement(je.a, null) : null,
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
                  q.a,
                  r()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Le.button,
                    },
                    h,
                  ),
                  Me,
                ),
              ),
            )
          }
          return null
        }),
        He = function (e, t) {
          return Object(ue.z)(e, ue.g)
        },
        Ve = Object(P.a)()
          .propsFromState(function () {
            return { shouldShowEducation: He }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(ue.w)(ue.g)
              },
            }
          }),
        ze = n('4zmP'),
        Ue = L.a.g46f363d,
        We = { viewType: 'rule_education' }
      var Ke = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        qe = Ve(function (e) {
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
                  W.a,
                  { style: Ke.container },
                  C.a.createElement(ze.a, { behavioralEventContext: We, onClose: a, text: Ue, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Ge = n('H7Rt'),
        Xe = n('m3Bd'),
        Ye = n.n(Xe),
        Ze = n('yZqq'),
        Qe = function (e, t) {
          return Object(ue.z)(e, ue.q)
        },
        Je = Object(P.a)()
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
        $e = L.a.aa65a449,
        et = { viewType: 'persistent_conversation_controls_education' }
      var tt = B.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        nt = Je(function (e) {
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
                  W.a,
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
          all: { icon: st, label: L.a.i8ea6d4e },
          community: { icon: ut, label: L.a.ec5a4a25 },
          by_invitation: { icon: lt, label: L.a.b4543009 },
          community_members: { icon: dt, label: L.a.i13be5a0 },
          super_followers_exclusive: { icon: st, label: L.a.f8393bda },
          trusted_friends_tweet: { icon: st, label: L.a.c0857ccd },
        }),
        ft =
          (Object.freeze(['community', 'by_invitation']),
          Object(at.a)(function (e) {
            var t = e.analytics,
              n = Ye()(e, ['analytics']),
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
              r !== Ge.a.all && r !== Ge.a.community_members && d(!0)
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
                W.a,
                { style: ht.controlsContainer },
                C.a.createElement(
                  Ze.a,
                  n,
                  C.a.createElement(
                    q.a,
                    { disabled: a, icon: i, onPress: m, ref: p, size: 'xSmall', style: ht.button, type: 'brandText' },
                    c,
                  ),
                ),
              ),
            )
          })),
        ht = B.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        yt = n('krmn'),
        gt = n('cIoY'),
        vt = n('w3n3'),
        bt = n('MLl7'),
        _t = n('1auM'),
        wt = n('07FG'),
        Ct = n('Q8CU'),
        Tt = n('QbaN'),
        Et = n('nV1z'),
        xt = n('VPdC'),
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
        It = L.a.bdbcdd93,
        Pt = L.a.a809609f,
        Dt = C.a.createElement(Et.a, null),
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
            C.a.createElement(xt.a, {
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
              ? C.a.createElement(xt.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !0,
                  accessibilityLabel: Pt,
                  disabled: t.length > 0,
                  hoverLabel: { label: Pt },
                  icon: Dt,
                  multiple: !1,
                  onChange: a,
                  onPress: r,
                  style: Ot.toolBarButton,
                  type: 'brandText',
                })
              : null,
          )
        },
        At = n('p+r5'),
        jt = n('GWvE')
      function Mt(e) {
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
          return y()(this, n)
        }
      }
      var Bt = (function (e) {
        f()(n, e)
        var t = Mt(n)
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
                  W.a,
                  { style: Ft.root },
                  C.a.createElement(At.a, {
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
                  (this.value && !Object(jt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                )
              },
            },
          ]),
          n
        )
      })(C.a.Component)
      _()(Bt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var Ft = B.a.create(function (e) {
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
        Lt = Bt,
        Nt = (n('Blm6'), n('DZ+c'), n('mtvn')),
        Ht = n('6XNv')
      function Vt(e) {
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
          return y()(this, n)
        }
      }
      var zt = (function (e) {
        f()(n, e)
        var t = Vt(n)
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
                    return { label: ''.concat(L.a.ia24dc8c(e)), value: ''.concat(e) }
                  })
                return C.a.createElement(Ht.a, {
                  disabled: s,
                  label: n,
                  onChange: i,
                  options: u,
                  style: [Ut.selector, !a && Ut.rightMargin],
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
      var Ut = B.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Wt = zt,
        Kt = 'addPollChoice',
        qt = 'selectPollDays',
        Gt = 'selectPollHours',
        Xt = 'selectPollMinutes',
        Yt = 'removePollButton'
      function Zt(e) {
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
          return y()(this, n)
        }
      }
      var Qt = L.a.caf8edc4,
        Jt = L.a.g93586be,
        $t = L.a.d073b644,
        en = L.a.a2f0728e,
        tn = (function (e) {
          f()(n, e)
          var t = Zt(n)
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
                    W.a,
                    { style: n },
                    C.a.createElement(j.b, { color: 'normal', style: nn.durationLabel }, t ? Qt : ''),
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
                    W.a,
                    { style: nn.durationControls },
                    C.a.createElement(Wt, {
                      editable: t && n,
                      label: Jt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: qt,
                      value: r,
                    }),
                    C.a.createElement(Wt, {
                      editable: t && n,
                      label: $t,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Gt,
                      value: o,
                    }),
                    C.a.createElement(Wt, {
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
          return y()(this, n)
        }
      }
      var sn = L.a.g589c2e1,
        ln = L.a.a1e6c3a1,
        un = L.a.a739e006,
        dn = L.a.d89a5b92,
        pn = L.a.c2a8118d,
        mn = L.a.a8ede1de,
        fn = L.a.af40a8ef,
        hn = (function (e) {
          f()(n, e)
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
                      W.a,
                      { style: yn.rightColumn },
                      c < 4
                        ? C.a.createElement(q.a, {
                            accessibilityLabel: mn,
                            disabled: !(t && r),
                            hoverLabel: { label: fn },
                            icon: C.a.createElement(rn.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: yn.addButton,
                            testID: Kt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return C.a.createElement(
                    W.a,
                    { style: yn.choicesAndAddButton },
                    C.a.createElement(
                      W.a,
                      { style: yn.choices },
                      C.a.createElement(Lt, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: sn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      C.a.createElement(Lt, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: ln,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      c >= 3
                        ? C.a.createElement(Lt, {
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
                        ? C.a.createElement(Lt, {
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
                    W.a,
                    { style: yn.root },
                    this._renderChoices(),
                    C.a.createElement(an, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: yn.durationPicker,
                    }),
                    C.a.createElement(
                      W.a,
                      { style: yn.removePollButton },
                      C.a.createElement(on.a, { color: 'red500', label: pn, onPress: r, testID: Yt }),
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
        yn = B.a.create(function (e) {
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
        gn = Object(at.a)(hn),
        vn = B.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        bn = L.a.i859676b,
        _n = C.a.createElement(
          L.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          C.a.createElement(
            j.b,
            { link: '/settings/audience_and_tagging', style: vn.link, withInteractiveStyling: !0, withUnderline: !0 },
            L.a.c9a48d3f,
          ),
        )
      function wn() {
        return C.a.createElement(W.a, { style: vn.container }, C.a.createElement(ze.a, { headline: bn, text: _n }))
      }
      var Cn = n('b5s6'),
        Tn = n('rcen'),
        En = n('zmS9'),
        xn = 'addButton',
        Sn = 'addSubtitlesLabel',
        On = 'altTextLabel',
        Rn = 'tagPeopleLabel',
        In = 'attachments',
        Pn = 'createPollButton',
        Dn = 'geoButton',
        kn = 'gifSearchButton',
        An = 'scheduleOption',
        jn = 'taggedUsersLabel',
        Mn = 'tweetTextarea_',
        Bn = 'toolBar',
        Fn = 'scheduledTweetIndicator',
        Ln = n('xM7j'),
        Nn = n('6OUF'),
        Hn = n('tZIO'),
        Vn = n('5mJL'),
        zn = n('DNho'),
        Un = n('jhWN'),
        Wn = n('rFBM'),
        Kn = n('zfvc'),
        qn = n('Ujvi'),
        Gn = n('yTN1'),
        Xn = n('gpVt'),
        Yn = n('hOZg'),
        Zn = n('ll3R'),
        Qn = n('J0mu'),
        Jn = n('EfHu'),
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
          return y()(this, n)
        }
      }
      var ua = (function (e) {
        f()(n, e)
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
                return C.a.createElement(W.a, { style: n }, this._renderImageGroup(t.length))
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
                  C.a.createElement(W.a, { style: da.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
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
                    W.a,
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
                    W.a,
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
                    W.a,
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
                  W.a,
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
                  f = i.onSetMediaPreviewRef,
                  h = l[e],
                  y = null === (n = h.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                  g = null === (a = h.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                  v = !(
                    null === (r = h.mediaMetadata) ||
                    void 0 === r ||
                    null === (o = r.sensitiveMediaWarning) ||
                    void 0 === o ||
                    !o.size
                  ),
                  b = d && c && s,
                  _ = b && v && !!p
                return C.a.createElement(ia.a, {
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
                  style: [da.mediaContainer, t],
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
        fa = n('S1qy'),
        ha = n.n(fa),
        ya = n('cjAp'),
        ga = n.n(ya)
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
          return y()(this, n)
        }
      }
      var ba = L.a.f0afcc0e,
        _a = L.a.ha5e2e79,
        wa = L.a.a3de3b68,
        Ca = L.a.cc2b28fc,
        Ta = L.a.g45af04e,
        Ea = L.a.ee9c4013,
        xa = L.a.af40a8ef,
        Sa = L.a.e68b09b4,
        Oa = L.a.ec10ee02,
        Ra = L.a.h735a98d,
        Ia = L.a.c4ccfbe2,
        Pa = L.a.j499fbcb,
        Da = L.a.b7d8e3f0,
        ka = L.a.d1175c78,
        Aa = L.a.bf4e9d79,
        ja = L.a.e0342f98,
        Ma = L.a.e349147b,
        Ba = L.a.e3a24e4b,
        Fa = L.a.de4669e2,
        La = L.a.d2c7a41c,
        Na = L.a.f7364fa1,
        Ha = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        Va = L.a.ia24dc8c,
        za = C.a.createElement(Yn.a, null),
        Ua = C.a.createElement(rn.a, null),
        Wa = C.a.createElement(Zn.a, null),
        Ka = C.a.createElement(Qn.a, null),
        qa = { viewType: 'schedule_tweet' },
        Ga = { viewType: 'add_poll' },
        Xa = { viewType: 'add_composer' },
        Ya = { viewType: 'tag_location' },
        Za = (function (e) {
          f()(n, e)
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
                    (r.conversationControlsValue !== Ge.a.community_members &&
                      r.conversationControlsValue !== Ge.a.super_followers_exclusive &&
                      r.conversationControlsValue !== Ge.a.trusted_friends_tweet) ||
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
                    i === Ge.a.community_members ||
                    i === Ge.a.super_followers_exclusive ||
                    i === Ge.a.trusted_friends_tweet ||
                    o._isScheduled()
                return c
                  ? C.a.createElement(ft, { disabled: s, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              _()(p()(o), '_renderTaggedLocation', function (e) {
                return C.a.createElement(
                  W.a,
                  { style: Ot.taggedLocationContainer },
                  C.a.createElement(
                    q.a,
                    {
                      icon: C.a.createElement(Jn.a, null),
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
                  f = n.text,
                  h = Object(Xn.b)(f) || (u && !Object(wt.a)(u) && [u]),
                  y = !!d.length || p || !!m,
                  g = o.props.typeaheadWrapper,
                  v = !o._isEmpty()
                return C.a.createElement(
                  W.a,
                  { style: Ot.textInputArea },
                  C.a.createElement(
                    W.a,
                    { style: r ? Ot.inputStyle : Ot.collapsedInputStyle },
                    o._renderAudienceControls(v),
                    C.a.createElement(
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
                      ? C.a.createElement(Xn.a, { index: a, isCardPreviewTombstoned: Object(wt.a)(u), urls: h })
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
                  f = t.onTextInputBlur,
                  h = t.positionCursorAtBeginning,
                  y = t.richTextInputContext,
                  g = o.state.isFocused,
                  v = a.text,
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
                      onBlur: f,
                      onFilesAdded: o._handleFilesAdded,
                      placeholder: o._getPlaceHolderText(),
                      positionCursorAtBeginning: h,
                      positionCursorAtEnd: !h,
                      ref: o._setTextInputRef,
                      styleType: 'selection',
                      testID: ''.concat(Mn).concat(c),
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
                return o.shouldRenderCommunitiesRules ? C.a.createElement(qe, null) : null
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
                return C.a.createElement(En.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: Fn,
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
                return C.a.createElement(yt.a, {
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
                  p = t.conversationControlsValue !== Ge.a.all
                return Boolean(i || !d || (c && '' === s && !a.length) || p || r.length > 0)
              }),
              _()(p()(o), '_renderSchedulingButton', function () {
                return C.a.createElement(q.a, {
                  accessibilityLabel: _a,
                  behavioralEventContext: qa,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: Ra },
                  icon: Ka,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: Ot.toolBarButton,
                  testID: An,
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
                return C.a.createElement(q.a, {
                  accessibilityLabel: Ea,
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
                  W.a,
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
                    ? C.a.createElement(gn, {
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
                      Ln.a,
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
                  f = !c && !i,
                  h = o.context.featureSwitches.isTrue('responsive_web_video_picker')
                return C.a.createElement(
                  W.a,
                  { style: Ot.toolBar, testID: Bn },
                  C.a.createElement(
                    W.a,
                    { style: Ot.toolBarIconsContainer },
                    C.a.createElement(kt, {
                      media: a,
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
                  C.a.createElement(
                    W.a,
                    { style: Ot.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (s && !l) || !e
                      ? null
                      : C.a.createElement(
                          C.a.Fragment,
                          null,
                          C.a.createElement(W.a, { style: Ot.separator }),
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
                var t = Hn.a.replaceCarriageReturns(e.target.value)
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
                return Va(Math.ceil(e / o._userLanguageWeight))
              }),
              _()(p()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  c = e.isSelfThreadReply
                return a ? Fa : n ? Na : i && !c ? La : c || r > 0 ? Ba : Ma
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
                  var t = ga.a[o.props.twitterTextConfigurationVersion]
                  return ha()(e, t)
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
              (o._userLanguageWeight = l && Ha.indexOf(l) > -1 ? 2 : 1),
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
                    W.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [Ot.root, !a && Ot.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    C.a.createElement(
                      Vn.a,
                      {
                        avatarCell: C.a.createElement(
                          C.a.Fragment,
                          null,
                          l
                            ? C.a.createElement(zn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return C.a.createElement(Un.a, {
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
                            : C.a.createElement(W.a, {
                                style: [Ot.conversationLine, !l && Ot.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? Ot.avatarContainerExpanded : Ot.avatarContainer,
                        cellStyle: Ot.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      C.a.createElement(
                        W.a,
                        { onFocus: this._handleEditorFocus, style: Ot.inputArea },
                        C.a.createElement(
                          Wn.a,
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
                              C.a.createElement(W.a, { style: Ot.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      C.a.createElement(
                        W.a,
                        { style: [(d || n) && Ot.controlsContainer, p ? Ot.mobileControlsLayout : Ot.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      C.a.createElement(Kn.b, { show: a && r }, this._renderToolbar(u)),
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
                  return C.a.createElement(q.a, {
                    accessibilityLabel: ba,
                    behavioralEventContext: Ga,
                    disabled: c,
                    hoverLabel: { label: Oa },
                    icon: Wa,
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
                    o = t ? C.a.createElement(Jn.a, null) : C.a.createElement($n.a, null)
                  return C.a.createElement(q.a, {
                    accessibilityLabel: Ia,
                    behavioralEventContext: Ya,
                    disabled: r,
                    hoverLabel: { label: Ia },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: Ot.toolBarButton,
                    testID: Dn,
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
                    W.a,
                    { style: Ot.imageActions },
                    t && t.url && t.provider
                      ? C.a.createElement(
                          W.a,
                          { style: Ot.addImageTextPadding },
                          C.a.createElement(gt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : C.a.createElement(
                          j.b,
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
                          j.b,
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
                    j.b,
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
                    j.b,
                    { color: 'gray700', size: 'subtext2', testID: jn },
                    C.a.createElement(ta.a, { style: Ot.addImageActionIcon }),
                    C.a.createElement(qn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          j.b,
                          { color: 'gray700', size: 'subtext2', testID: On },
                          C.a.createElement(aa.a, { style: Ot.addImageActionIcon }),
                          Da({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : C.a.createElement(
                          j.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: On },
                          C.a.createElement(aa.a, { style: Ot.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : C.a.createElement(
                        j.b,
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
                    j.b,
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
                      accessibilityLabel: this.attachedSubtitles ? ja : void 0,
                      style: Ot.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Aa,
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
                  return C.a.createElement(Gn.a, {
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
                  return C.a.createElement(q.a, {
                    accessibilityLabel: Ta,
                    behavioralEventContext: Xa,
                    disabled: s,
                    hoverLabel: { label: xa },
                    icon: Ua,
                    link: !a || i || s ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: xn,
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
      _()(Za, 'contextType', O.a),
        _()(Za, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var Qa = Object(at.a)(Za),
        Ja = C.a.createElement(j.b, { weight: 'bold' }),
        $a = C.a.createElement(j.b, { color: 'link' }),
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
                  L.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  C.a.cloneElement($a, null, L.a.b50e199a({ userName: er(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  C.a.cloneElement($a, null, L.a.f2e4dd37({ replyUserName: er(t), otherUserName: er(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  C.a.cloneElement(
                    $a,
                    null,
                    L.a.eccfddc3({ userOneName: er(t), userTwoName: er(a), userThreeName: er(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  C.a.cloneElement($a, null, L.a.h758cd22({ userOneName: er(n), userTwoName: er(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  C.a.cloneElement($a, null, L.a.e9f8a0eb({ userName: er(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  C.a.cloneElement($a, null, L.a.df7e9fbc({ replyUserName: er(n), otherUserName: er(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  C.a.cloneElement(
                    $a,
                    null,
                    L.a.b45fa505({ userOneName: er(n), userTwoName: er(r), userThreeName: er(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  C.a.cloneElement($a, null, L.a.a4383815({ userOneName: er(a), userTwoName: er(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  C.a.cloneElement($a, null, L.a.ff792e35({ userName: er(t) })),
                  C.a.cloneElement(Ja, null, L.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  C.a.cloneElement($a, null, L.a.g7d5e985({ replyUserName: er(t), otherUserName: er(n) })),
                  C.a.cloneElement(Ja, null, L.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  C.a.cloneElement(
                    $a,
                    null,
                    L.a.fe5a61e9({ userOneName: er(t), userTwoName: er(a), userThreeName: er(n) }),
                  ),
                  C.a.cloneElement(Ja, null, L.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  L.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  C.a.cloneElement($a, null, L.a.bc9dd514({ userOneName: er(n), userTwoName: er(a), othersCount: t })),
                  C.a.cloneElement(Ja, null, L.a.de5071ba),
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
            f = [l, p, m].map(nr),
            h = Ie()(f, 3),
            y = h[0],
            g = h[1],
            v = h[2],
            b = i.length - 2
          switch (i.length) {
            case 0:
              return Object(tr.a)('Compose reply context should not have 0 recipients'), null
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
            W.a,
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
              W.a,
              { style: lr.replyUsersContainer },
              C.a.createElement(
                Vn.a,
                {
                  avatarCell: s ? C.a.createElement(W.a, { style: lr.conversationLine }) : null,
                  avatarCellStyle: lr.conversationLineContainer,
                  cellStyle: lr.repliesTextContainer,
                  style: lr.grid,
                },
                i
                  ? C.a.createElement(
                      j.b,
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
        fr = n('5oBF'),
        hr = n('JYYi'),
        yr = n('/Rsk'),
        gr = n('qlwE'),
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
      function Er(e) {
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
      var xr = function (e) {
          return e.parentTweetId || (e.isInline ? hr.a.homeTimeline : hr.a.modal)
        },
        Sr = function (e, t) {
          var n = xr(t)
          return oe.l(e, n)
        },
        Or = function (e, t) {
          var n = xr(t)
          return oe.m(e, n)
        },
        Rr = function (e, t) {
          var n = xr(t)
          return oe.k(e, n)
        },
        Ir = function (e, t) {
          var n = Fr(e, t),
            a = Rr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? I.c.select(e, r) : void 0
          return o ? o.name : void 0
        },
        Pr = function (e, t) {
          var n = xr(t)
          return oe.n(e, n)
        },
        Dr = function (e, t) {
          var n = xr(t)
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
        Ar = Object(ce.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          br.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        jr = function (e, t) {
          return t.parentTweetId || Mr(e, t) || Br(e, t)
        },
        Mr = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Br = kr(function (e) {
          return e.inReplyToStatusId
        }),
        Fr = function (e, t) {
          var n = jr(e, t)
          return n ? vr.a.selectHydrated(e, n) : void 0
        },
        Lr = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Nr = kr(function (e) {
          return e.hasArticleNudge
        }),
        Hr = kr(function (e) {
          return e.convoCardData
        }),
        Vr = kr(function (e) {
          return e.externalMedia
        }),
        zr = kr(function (e) {
          return e.externalMediaFiles
        }),
        Ur = kr(function (e) {
          return e.previewTweetId
        }),
        Wr = kr(function (e) {
          return e.defaultText
        }),
        Kr = function (e, t) {
          var n = Wr(e, t),
            a = Object(mr.a)(t.location)
          return (Lr(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        qr = kr(function (e) {
          return e.quotedStatusId
        }),
        Gr = kr(function (e) {
          return e.quotedStatus
        }),
        Xr = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Gr(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = qr(e, t)
              return n ? vr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        Yr = kr(function (e) {
          return e.isSelfThreadReply
        }),
        Zr = kr(function (e) {
          return e.positionCursorAtBeginning
        }),
        Qr = kr(function (e) {
          return e.promotedContent
        }),
        Jr = function () {
          return Object(ce.createSelector)(Sr, Kr, Xr, _r.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return Er(
                Er({}, ((o = e).mediaIds, Ye()(o, ['mediaIds']))),
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
          deletePreviewTweet: fr.c,
          fetchAutotaggedLocationIfNeeded: yr.a,
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
            activeComposerIndex: Dr,
            activeUser: Ar,
            altTextNudgeType: Cr.h,
            audienceControlsValue: Rr,
            composerData: Jr(),
            dataSaverMode: Cr.k,
            excludedRecipients: Or,
            externalMedia: Vr,
            externalMediaFiles: zr,
            geoEnabled: Cr.p,
            hasArticleNudge: Nr,
            inReplyToStatus: Fr,
            inReplyToStatusId: jr,
            isIntentRoute: Lr,
            isSelfThreadReply: Yr,
            isSending: Pr,
            isSuperFollowsCreator: le.l,
            positionCursorAtBeginning: Zr,
            loggedInUser: br.e.selectLoggedInUser,
            prepopulatedText: Kr,
            previewTweetId: Ur,
            promotedContent: Qr,
            scheduledFor: oe.o,
            selectedCommunityName: Ir,
            sendingProgress: oe.p,
            convoCardData: Hr,
            undoTweetSettings: gr.p,
            userLanguage: le.o,
            quotedStatusId: qr,
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
        fo = n('N5qz'),
        ho = 'tweetButton',
        yo = 'tweetButtonInline',
        go = Object(P.a)()
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
              C.a.createElement(W.a, { style: [Co.mainCard, c ? Co.largeScreenCard : Co.smallScreenCard] }, n),
            )
          })
        },
        Eo = L.a.cb7c0987,
        xo = L.a.de3bcf27,
        So = L.a.e710ce75,
        Oo = L.a.h11e5910,
        Ro = L.a.b7ec04f3,
        Io = L.a.i62a03aa,
        Po = B.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        Do = function (e) {
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
            C.a.createElement(j.b, { size: 'title4', style: Po.itemPadding, weight: 'heavy' }, Eo),
            C.a.createElement(j.b, { color: 'gray700', style: Po.itemPadding }, xo),
            C.a.createElement(j.b, { color: 'gray700', style: Po.itemPadding }, So),
            C.a.createElement(
              W.a,
              { style: Po.buttonContainer },
              C.a.createElement(j.b, { size: 'title4', style: Po.itemPadding, weight: 'heavy' }, Oo),
              C.a.createElement(q.a, { onPress: a, style: Po.itemPadding, type: 'brandOutlined' }, Ro),
              C.a.createElement(q.a, { onPress: n, style: Po.itemPadding, type: 'brandOutlined' }, Io),
            ),
          )
        },
        ko = n('cm6r'),
        Ao = B.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        jo = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return C.a.createElement(ko.a, { interactiveStyles: null, onPress: a }, function (e) {
            return C.a.createElement(
              C.a.Fragment,
              null,
              C.a.createElement(q.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Ao.button,
                type: 'primaryOutlined',
              }),
              C.a.createElement(j.b, { color: 'gray700' }, n),
            )
          })
        },
        Mo = n('sjK1'),
        Bo = n('FDY4'),
        Fo = n('tevE'),
        Lo = n('jV+4'),
        No = n('UgB4'),
        Ho = n('TW8A'),
        Vo = n('hiGS'),
        zo = n('WtWS'),
        Uo = n('Lsrn'),
        Wo = n('k/Ka')
      function Ko(e, t) {
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
      function qo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ko(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ko(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Go = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Wo.a)(
          'svg',
          qo(
            qo({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Uo.a.root, e.style], viewBox: '0 0 24 24' },
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
      Go.metadata = { width: 24, height: 24 }
      var Xo = Go,
        Yo = [
          { headlineText: L.a.f3a7a80c, subTextLine1: L.a.ge52d1de, subTextLine2: null },
          { headlineText: L.a.j311bf49, subTextLine1: L.a.ae42ebff, subTextLine2: L.a.aa350ab1 },
          { headlineText: L.a.j18b2956, subTextLine1: L.a.f6bee896, subTextLine2: L.a.dddd0995 },
          { headlineText: L.a.d02a94fa, subTextLine1: L.a.dddd0995, subTextLine2: null },
          { headlineText: L.a.i018b746, subTextLine1: L.a.b8d85df9, subTextLine2: L.a.d5ca11f0 },
        ],
        Zo = L.a.h11e5910,
        Qo = L.a.abd845fd,
        Jo = L.a.bea869b3,
        $o = L.a.d96cf7cd,
        ei = L.a.d3145da8,
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
            m = Yo[(p = p >= 0 && p <= 4 ? p : 0)]
          return C.a.createElement(vo.a, null, function (e) {
            var p,
              f,
              h,
              y = e.windowWidth
            return C.a.createElement(
              To,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: y > B.a.theme.breakpoints.medium,
              },
              C.a.createElement(Xo, { style: [ti.profanityIcon, ti.itemPadding] }),
              C.a.createElement(Fo.a, { size: 'title4', style: ti.itemPadding, weight: 'heavy' }, m.headlineText),
              C.a.createElement(j.b, { color: 'gray700', style: ti.itemPadding }, m.subTextLine1),
              C.a.createElement(j.b, { color: 'gray700', style: ti.itemPadding }, m.subTextLine2),
              C.a.createElement(
                W.a,
                { style: [ti.tweetContainer, ti.itemPadding] },
                C.a.createElement(
                  W.a,
                  { style: ti.tweetContent },
                  C.a.createElement(Lo.a, { name: l, profileImageUrl: u, screenName: d, style: ti.userName }),
                  C.a.createElement(
                    W.a,
                    { style: ti.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Mo.c) r = e.mediaFile.thumbnail
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
                        W.a,
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
                    C.a.createElement(j.b, { style: ti.textStyle }, s),
                  ),
                ),
              ),
              t
                ? C.a.createElement(
                    W.a,
                    { style: ti.thanksContainer },
                    C.a.createElement(zo.a, { style: ti.thanksCheckMark }),
                    C.a.createElement(j.b, { align: 'center', style: ti.itemPadding }, ei),
                  )
                : C.a.createElement(j.b, { align: 'center', onPress: c, style: ti.itemPadding, withUnderline: !0 }, Zo),
              y > B.a.theme.breakpoints.small
                ? C.a.createElement(
                    W.a,
                    { style: ti.buttonContainer },
                    C.a.createElement(q.a, { onPress: o, style: ti.itemPadding, type: 'brandFilled' }, Qo),
                    C.a.createElement(q.a, { onPress: i, style: ti.itemPadding, type: 'brandOutlined' }, Jo),
                    C.a.createElement(q.a, { onPress: a, style: ti.itemPadding, type: 'destructiveText' }, $o),
                  )
                : ((p = C.a.createElement(No.a, { style: { color: B.a.theme.colors.text } })),
                  (f = C.a.createElement(Ho.a, { style: { color: B.a.theme.colors.primary } })),
                  (h = C.a.createElement(Vo.a, { style: { color: B.a.theme.colors.red500 } })),
                  C.a.createElement(
                    W.a,
                    { style: ti.mobileButtonContainer },
                    C.a.createElement(jo, { icon: p, label: Jo, onPress: i }),
                    C.a.createElement(jo, { icon: f, label: Qo, onPress: o }),
                    C.a.createElement(jo, { icon: h, label: $o, onPress: a }),
                  )),
            )
          })
        },
        ai = go(function (e) {
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
            f = m[0],
            h = m[1],
            y = C.a.useState(!1),
            g = Ie()(y, 2),
            v = g[0],
            b = g[1],
            _ = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: a }, element: r, page: o, section: 'dialog' })
            }
          return f
            ? C.a.createElement(Do, {
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
                    h(!0)
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
        fi = n('jTgF')
      function hi(e, t) {
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
      function yi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? hi(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : hi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function gi(e) {
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
          return y()(this, n)
        }
      }
      var vi = L.a.d28215f0,
        bi = L.a.ec909a54,
        _i = L.a.jd53409d,
        wi = {
          singular: L.a.edae65de,
          plural: L.a.a859846a,
          oneOfMultiple: L.a.e90118f5,
          someOfMultiple: L.a.c211dcb1,
        },
        Ci = { singular: L.a.d7c26bfb, plural: L.a.a75e3ccc },
        Ti = L.a.dcb7e3a0,
        Ei = function (e) {
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
        xi = L.a.c1bf53b0,
        Si = L.a.bb8170da,
        Oi = L.a.dad5a4b8,
        Ri = L.a.e65aed64,
        Ii = L.a.bc2ceaf2,
        Pi = L.a.d8222374,
        Di = L.a.j890123a,
        ki = L.a.bb01231c,
        Ai = L.a.d4ab68e2,
        ji = L.a.d8af8a4c,
        Mi = L.a.d09d4c05,
        Bi = L.a.i2209530,
        Fi = L.a.bf9b89e4,
        Li = L.a.f277e949,
        Ni = L.a.b551cd22,
        Hi = L.a.f026a7fa,
        Vi = L.a.a5d4fda0,
        zi = L.a.ib067d6a,
        Ui = x.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Wi = { element: 'alt_text_prompt' },
        Ki = { component: 'article_nudge' },
        qi = { viewType: 'send_tweet' },
        Gi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Xi = (function (e) {
          f()(n, e)
          var t = gi(n)
          function n(e, a) {
            var r, o, c
            s()(this, n),
              (c = t.call(this, e, a)),
              _()(p()(c), '_getParentKey', function () {
                var e = c.props,
                  t = e.isInline
                return e.parentTweetId || (t ? hr.a.homeTimeline : hr.a.modal)
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
                      Ui ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
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
                    ? (c.setState({ showAltTextPrompt: !0 }), void c._scribe(yi(yi({}, Wi), {}, { action: 'show' })))
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
                  confirmButtonLabel: xi({ numOfDescriptions: t }),
                  headline: _i,
                  onCancel: c._handleIgnoreAltTextPrompt,
                  onConfirm: c._handleAcceptAltTextPrompt,
                  onMaskClick: c._handleCancelAltTextPrompt,
                  text: Ei({ numberOfDescriptionsMissing: t, numberOfImages: n }),
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
                  if (Object(fi.d)(n) && n.code === io.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var i = Object(fi.b)(n)
                  if (i) return c.setState({ errorMessage: i }), Promise.resolve()
                  o(yi({}, t || Object(to.a)(void 0, !1)))(n)
                  var s = n instanceof E.a && (null == t ? void 0 : t[n.errors[0].code])
                  c.setState({ errorMessage: { text: s ? s.toast.text : Vi } })
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
                      t({ text: s, action: { label: Li, link: '/compose/tweet/unsent/scheduled' } }),
                        c._scribeTweetSent(n[0], yi(yi({}, e), {}, { id_str: e.scheduled_id_str }), { isScheduled: !0 })
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
                      t({ text: Fi, action: { label: Li, link: '/compose/tweet/unsent/drafts' } }),
                      c._scribeTweetSent(n[0], yi(yi({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
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
                  f = e.selectedCommunityName,
                  h = e.send,
                  y = r.conversationControlsValue,
                  g = r.exclusivityControlValue,
                  v = void 0 === g ? void 0 : g,
                  b = c.isPreview,
                  _ = c.props.composerData.map(function (e) {
                    return c._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(Tt.c)(_[0].scheduledFor)
                if (w) {
                  var C = Object(Tt.b)(w),
                    T = Object(Tt.i)(w),
                    E = Ni({ scheduleDate: C, scheduleTime: T })
                  return n({ text: E, action: { label: Li, link: '' } }), void c._close()
                }
                if (
                  (i.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  c._conversationControlsCreationEnabled)
                )
                  if ('community' === y) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === y) {
                    var x = c._getSingleComposerDataWithLatestText(_[0]).text,
                      O = Object(S.d)(x)
                    a.scribe({
                      action: O ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === y && a.scribe({ action: 'send_my_followers_tweet' })
                var R = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
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
                    var a = e.length > 1 ? Ri : Oi
                    if (R && f) {
                      var r = f,
                        o = e.length
                      a = bi({ numOfTweets: o, communityName: r })
                    }
                    var i = b && c.isReply
                    if (i || !b) {
                      var l = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? Ii : a,
                        action: { label: Li, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
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
                      (Object(fi.d)(e) && e.code === io.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: d }),
                      _.length > 1 && c._scribeThreadSent(_, r, 'thread_send_failure'),
                      r.length &&
                        l.replace({
                          pathname: p.pathname,
                          state: yi(
                            yi({}, Object(ci.a)(p.state || {}, 'quotedStatus')),
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
                  f = { items: [po.a.getTweetItem(t)] },
                  h = e.pollActive && e.pollValid,
                  y = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  g = e.mediaTags.length,
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
                  (c._scribe({ action: ''.concat(m, 'tweet') }, f),
                  i || !e.draftTweetId || e.scheduledTweetId || c._scribe({ action: ''.concat(m, 'draft_tweet') }, f),
                  c.isQuoteTweet &&
                    (c._scribe({ action: 'retweet_with_comment' }, f),
                    r && c._scribe(yi(yi({}, Ki), {}, { element: 'result', action: 'retweet_with_comment' }), f)),
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
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    c.isReply &&
                    !l &&
                    (i
                      ? c._scribe(yi(yi({}, w), {}, { action: 'save' }), { nudge_id: u })
                      : c._scribe(yi(yi({}, w), {}, { action: 'sent' }), { nudge_id: u })),
                  u || i || !c.isReply || l || c._scribe(yi(yi({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var C = t.id_str && po.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  c._scribe({ element: 'remote', action: ''.concat(m, 'gif_tweet') }, { items: C ? [C] : [] })
                  var T = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(y || T) &&
                    c._scribe(
                      { element: 'remote', action: ''.concat(m, 'gif_tweet_with_alt_text') },
                      { event_info: y ? 'user_entered' : 'from_provider', items: C ? [C] : [] },
                    ),
                    g && c._scribe({ action: ''.concat(m, 'gif_tweet_with_tags') }, f)
                } else c._hasGif(e) && (c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet') }, f), y && c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet_with_alt_text') }, f))
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
                  t && c._scribe(yi(yi({}, Ki), {}, { element: 'result', action: 'retweet' }), n)
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
                  n && c._scribe(yi(yi({}, Ki), {}, { element: 'result', action: 'cancel' })),
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
                  (c._scribe(yi(yi({}, Wi), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              _()(p()(c), '_handleIgnoreAltTextPrompt', function () {
                c._scribe(yi(yi({}, Wi), {}, { action: 'declined' })),
                  c.setState({ showAltTextPrompt: !1 }),
                  c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleCancelAltTextPrompt', function () {
                c._scribe(yi(yi({}, Wi), {}, { action: 'cancel' })),
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
                  (c.setState({ textMap: yi(yi({}, n), {}, _()({}, t, e)) }, function () {
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
                return C.a.createElement(oi.a, { progress: t ? Math.max(n, 0.02) : 0, style: Yi.progressBar })
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
                    f = o.removeMediaUpload,
                    h = l[e],
                    y = h.pollActive,
                    g = Object(pi.e)(
                      null === (a = p()(c)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  y ||
                    i(t, { location: pi.d.Tweet, canUploadLongVideo: g }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(h, t)) {
                        var r = h.media.map(function (e) {
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
                      } else s({ text: zi }), f(a)
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
                return 'string' == typeof t[e.key] ? yi(yi({}, e), {}, { text: t[e.key] }) : e
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
                    var u = yi({}, null)
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
                    r.length >= 25 && e.composerData.length < 25 && a({ text: Hi }),
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
                    f = a.history,
                    h = a.inReplyToStatus,
                    y = a.isInline,
                    g = a.isModal,
                    v = a.isSelfThreadReply,
                    b = a.isSending,
                    _ = a.isSuperFollowsCreator,
                    w = a.parentTweetId,
                    T = a.positionCursorAtBeginning,
                    E = a.richTextInputContext,
                    x = a.scheduledFor,
                    S = a.typeaheadWrapper,
                    O = a.userLanguage,
                    R = a.windowWidth,
                    I = this.state,
                    P = I.errorMessage,
                    D = I.focused,
                    k = I.shouldDisableButton,
                    A = I.showAltTextPrompt,
                    j = I.showDiscardTweetConfirmation,
                    M = I.showToxicReplyNudge,
                    B = I.typeaheadActive,
                    F = !g && B,
                    L = y ? 0 : this.props.activeComposerIndex,
                    N = F || y ? [u[L]] : u,
                    H = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    z = y ? W.a : ii.a,
                    U = y ? {} : { onAnimateComplete: g ? void 0 : this._handleAnimateComplete },
                    K = k || !H || V || this.isCommunityTweetFromProtectedUser,
                    G = (y && fo.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    X = (y && fo.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return C.a.createElement(
                    W.a,
                    { ref: this._setRootRef, style: !w && Yi.root },
                    y ? this._renderProgressBar() : null,
                    P &&
                      C.a.createElement(
                        W.a,
                        { style: Yi.inlineCallout },
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
                      W.a,
                      {
                        onFocus: this._handleFocus,
                        style: [Yi.content, w && Yi.contentInlineReply, g && Yi.contentModal],
                      },
                      h ? this._renderReplyContext() : null,
                      l,
                      C.a.createElement(
                        z,
                        U,
                        N.map(function (e, t) {
                          var a = Object(Tt.h)(e.scheduledFor),
                            l = u.indexOf(e),
                            w = p(e, t, N),
                            I =
                              g || y
                                ? C.a.createElement(
                                    q.a,
                                    {
                                      behavioralEventContext: qi,
                                      disabled: K,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: Yi.inlineSendButton,
                                      testID: g ? ho : yo,
                                      type: 'brandFilled',
                                    },
                                    Object(ro.a)({
                                      inReplyToStatus: !!h,
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
                            W.a,
                            { key: e.key },
                            C.a.createElement(
                              Qa,
                              r()(
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
                                  hidePoll: G,
                                  hideScheduling: X,
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
                      j
                        ? this._canSaveDraft
                          ? C.a.createElement(ri.a, {
                              cancelButtonLabel: Ai,
                              confirmButtonLabel: Bi,
                              headline: ji,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Mi,
                            })
                          : C.a.createElement(ri.a, {
                              confirmButtonLabel: Ai,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Di : Pi,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: ki,
                            })
                        : null,
                      A ? this._renderAltTextPrompt() : null,
                      M ? this._renderToxicReplyNudge() : null,
                      C.a.createElement(W.a, { style: b && Yi.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(yi(yi({}, e), {}, { data: t }))
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
                    ? Gi.Quote
                    : this.isThread
                    ? Gi.Thread
                    : this.isReply
                    ? Gi.Reply
                    : Gi.Original
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
      var Yi = B.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: yi({}, B.a.absoluteFillObject),
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
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('+oxZ'), n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        o = n('dWxr'),
        i = n.n(o),
        c = n('rHpw'),
        s = n('aITJ'),
        l = { clipPath: 'circle(0% at center)' },
        u = {
          strategy: function (e, t) {
            for (var n = i()(e.getText()), a = 0; a < n.length; a++)
              n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
          },
          component: function (e) {
            return r.a.createElement('span', { style: { color: c.a.theme.colors.link } }, e.children)
          },
        },
        d = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== w.TWEMOJI_ENTITY_TYPE)
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
                      return r.a.createElement('span', { style: l }, e)
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
        f = n('zpdM'),
        h = function (e, t) {
          for (var n = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              o = r.getText().length
            if (n + o >= t) return { blockKey: r.key, offset: t - n }
            n += o + 1
          }
          return Object.freeze({})
        },
        y = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            o = t.blockKey,
            i = void 0 === o ? r.key : o,
            c = t.offset,
            s = void 0 === c ? r.getText().length : c,
            l = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: i, focusOffset: s, isBackward: !1 }),
            u = f.Modifier.removeInlineStyle(e.getCurrentContent(), l, 'overflow')
          return f.EditorState.push(e, u, 'change-inline-style')
        },
        g = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            o = r.getLastBlock(),
            i = v(r, n, a)
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
              s = f.Modifier.applyInlineStyle(r, c, 'overflow')
            return f.EditorState.push(e, s, 'change-inline-style')
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
                c = i && i.data && i.data.id
              if (void 0 !== c)
                for (var s = n - 1; s >= 0; s--) {
                  var l = r.getEntityAt(s),
                    u = l && e.getEntity(l)
                  if (!u || !u.data || u.data.id !== c) {
                    a = s + 1
                    break
                  }
                }
            }
            return a
          }
        },
        b = 'TWEMOJI',
        _ = 'IMMUTABLE',
        w = (t.a = {
          convertEmojiToEntities: function (e) {
            var t = f.EditorState.set(e, { allowUndo: !1 }),
              n = t.getCurrentContent(),
              a = 0
            return (
              n.getBlocksAsArray().forEach(function (e) {
                m.a.getTwemojiEntities(e.getText()).forEach(function (r) {
                  if (2 === (r.indices && r.indices.length)) {
                    var o = n.createEntity(b, _, { url: r.url || null, id: a })
                    a += 1
                    var i = o.getLastCreatedEntityKey(),
                      c = e.getKey(),
                      s = t
                        .getSelection()
                        .merge({
                          anchorKey: c,
                          anchorOffset: r.indices[0],
                          focusKey: c,
                          focusOffset: r.indices[1],
                          isBackward: !1,
                        })
                    n = f.Modifier.applyEntity(o, s, i)
                  }
                })
              }),
              f.EditorState.set(t, { allowUndo: !0, currentContent: n })
            )
          },
          getRelativeOffset: h,
          initEditorState: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
              t = [u, d, p],
              n = f.EditorState.createWithContent(
                'string' == typeof e ? f.ContentState.createFromText(e) : Object(f.convertFromRaw)(e),
                new f.CompositeDecorator(t),
              )
            return f.EditorState.moveSelectionToEnd(n)
          },
          insertTextAtCursor: function (e, t) {
            var n = e.getCurrentContent(),
              a = e.getSelection(),
              r = f.Modifier.insertText(n, a, t)
            return f.EditorState.push(e, r, 'insert-characters')
          },
          TWEMOJI_ENTITY_TYPE: b,
          updateOverflowStyle: function (e, t) {
            var n,
              a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = e.getSelection(),
              o = f.EditorState.set(e, { allowUndo: !1 }),
              i = e.getCurrentContent().getSelectionBefore(),
              c = e.getCurrentContent().getSelectionAfter(),
              s = e.getCurrentContent(),
              l = s.getBlocksAsArray(),
              u = 'number' == typeof t && t > -1,
              d = u ? h(l, t) : Object.freeze({})
            if ((a && ((o = y(o, d)), (n = !0)), u && ((o = g(o, d)), (n = !0)), n)) {
              var p = (o = f.EditorState.forceSelection(o, r)).getCurrentContent()
              ;(p = (p = p.set('selectionBefore', i)).set('selectionAfter', c)),
                (o = f.EditorState.set(e, { allowUndo: !0, currentContent: p }))
            }
            return o
          },
        })
    },
    keCP: function (e, t, n) {
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = n('97Jx'),
        v = n.n(g),
        b = (n('2G9S'), n('jwue'), n('+oxZ'), n('MvUL'), n('KqXw'), n('SV7d')),
        _ = n('rHpw'),
        w = 'singleline',
        C = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? _.a.theme.colors.gray700 : t,
            a = _.a.theme.spaces.space2
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
              w,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              w,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        T = n('ERkP'),
        E = n.n(T),
        x = n('k/Ka'),
        S = n('PxJJ'),
        O = n('w9LO'),
        R = n('fs1G'),
        I = (n('aWzz'), n('zpdM'))
      function P(e) {
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var D = function (e) {
          return Object(x.a)('div', e)
        },
        k = !1,
        A =
          ((t.a = E.a.forwardRef(function (e, t) {
            var n = b.d()
            return E.a.createElement(
              A,
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
            var t = P(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                y()(s()(e), '_setSelectionToStart', function () {
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
                y()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return I.EditorState.forceSelection(t, t.getSelection())
                }),
                y()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(I.EditorState.moveFocusToEnd(a))
                    : null == r || r(I.EditorState.moveSelectionToEnd(a))
                }),
                y()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = C({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
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
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                y()(s()(e), '_onPastedText', function (t, n, a) {
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
                y()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    o = I.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && o(t) ? r : 27 === t.keyCode ? a : Object(I.getDefaultKeyBinding)(t)
                }),
                y()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                y()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                y()(s()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
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
                      S.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        c = t.blockRendererFn,
                        s = t.editorState,
                        l = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        f = t.onKeyPress,
                        h = t.onKeyUp,
                        g = t.placeholder,
                        v = t.spellCheck,
                        b = t.stripPastedStyles,
                        C = t.style,
                        T = t.testID
                      return E.a.createElement(
                        D,
                        {
                          className: u ? void 0 : w,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), C],
                        },
                        E.a.createElement(I.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: o,
                          ariaMultiline: u,
                          blockRenderMap: i,
                          blockRendererFn: c,
                          customAttrs:
                            ((e = {}),
                            y()(e, O.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            y()(e, 'onKeyPress', f),
                            y()(e, 'onKeyUp', h),
                            e),
                          customStyleMap: j(_.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? l : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: m,
                          placeholder: g,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== v,
                          stripPastedStyles: b,
                          tabIndex: 0,
                          webDriverTestID: T,
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
          })(E.a.Component))
      y()(A, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: R.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        stripPastedStyles: !0,
      }),
        (A.propTypes = {})
      var j = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
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
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return Ze
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('MvUL'), n('KqXw'), n('uFXj'), n('ERkP')),
        v = n.n(g),
        b = n('HPNB'),
        _ = n('h5NW'),
        w = n('m3Bd'),
        C = n.n(w),
        T = (n('vrRf'), n('z84I'), n('5BYb'), n('xVN5')),
        E = n('pidX'),
        x = n('AspN'),
        S = n('XOJV'),
        O = n('G6rE'),
        R = n('xZGM'),
        I = n('0KEI'),
        P = n('hqKg'),
        D = n('oEGd'),
        k = n('rU/Q'),
        A = n('XpKj')
      function j(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var B = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        F = Object(P.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          O.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        L = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        N = B(function (e) {
          return e.inReplyToStatusId
        }),
        H = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        V = B(function (e) {
          return e.defaultText
        }),
        z = B(function (e) {
          return e.quotedStatus
        }),
        U = B(function (e) {
          return e.isSelfThreadReply
        }),
        W = B(function (e) {
          return e.hideUnsentTweetsButton
        }),
        K = B(function (e) {
          return e.headingSubtitle
        }),
        q = B(function (e) {
          return e.headingTitle
        }),
        G = B(function (e) {
          return e.selectedCommunityId
        }),
        X = Object(P.createSelector)(
          function (e) {
            return T.l(e, '')
          },
          function (e, t) {
            var n = V(e, t)
            return Object(E.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : z(e, t)
          },
          x.j,
          H,
          function (e, t, n, a, r) {
            return e.map(function (e, o) {
              return M(
                M({}, ((i = e).cardUrl, i.mediaIds, C()(i, ['cardUrl', 'mediaIds']))),
                {},
                {
                  media: a.filter(function (t) {
                    return e.mediaIds.some(function (e) {
                      return e === t.id
                    })
                  }),
                  quotedStatus: 0 === o ? n : void 0,
                  text: 0 === o && t && !r ? t : e.text,
                },
              )
              var i
            })
          },
        ),
        Y = Object(P.createStructuredSelector)({
          activeUser: F,
          composerData: X,
          draftTweets: k.e,
          inReplyToStatus: function (e, t) {
            var n = L(0, t) || N(e, t)
            return n ? S.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: L,
          isIntentRoute: H,
          isSelfThreadReply: U,
          isSending: function (e) {
            return T.n(e, '')
          },
          scheduledTweets: A.f,
          sendingProgress: T.p,
          composeSemanticCoreId: B(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: W,
          subtitle: K,
          title: q,
          selectedCommunityIdFromLocationState: G,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.z)(e, R.e)
          },
        }),
        Z = {
          createDraftTweetApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(k.d),
          createScheduledTweetApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(A.d),
          fetchScheduledTweets: A.c,
          fetchDraftTweets: k.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.w)(R.e)
          },
          updateAudienceControlsValue: T.u,
        },
        Q = Object(D.g)(Y, Z),
        J = n('RgK2'),
        $ = n.n(J),
        ee = n('jHSc'),
        te = n('lsKC'),
        ne = n('3XMw'),
        ae = n.n(ne),
        re = n('iFPY'),
        oe = n('QbaN'),
        ie = n('v6aA'),
        ce = n('rxPX'),
        se = function (e) {
          return Object(R.z)(e, R.p)
        },
        le = Object(ce.a)()
          .propsFromState(function () {
            return { shouldShowNewsletterCallout: se }
          })
          .propsFromActions(function () {
            return { addFlag: R.w }
          }),
        ue = n('Lsrn'),
        de = n('k/Ka')
      function pe(e, t) {
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
      function me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pe(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var fe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(de.a)(
          'svg',
          me(
            me({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ue.a.root, e.style], viewBox: '0 0 32 32' },
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
      fe.metadata = { width: 32, height: 32 }
      var he = fe,
        ye = n('MWbm'),
        ge = n('4zmP'),
        ve = n('rHpw'),
        be = ae.a.ed33a3b6,
        _e = ae.a.d5bda8b3,
        we = ae.a.i859a9d3,
        Ce = ve.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        Te = le(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = v.a.useContext(ie.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? v.a.createElement(
                ye.a,
                { style: Ce.revueCallout },
                v.a.createElement(ge.a, {
                  Icon: he,
                  action: {
                    label: we,
                    link: 'https://www.getrevue.co?utm_source=twitter-threads&utm_campaign=announcement-callout&utm_content=learn-more',
                  },
                  headline: be,
                  onClose: function () {
                    t(R.p)
                  },
                  text: _e,
                  withCloseButton: !0,
                }),
              )
            : null
        }),
        Ee = n('7nmT'),
        xe = n.n(Ee),
        Se = n('Dtul'),
        Oe = n('zh9S'),
        Re = n('7JQg'),
        Ie = 'tweetButton',
        Pe = n('/yvb'),
        De = n('JYMr'),
        ke = n('cHvH'),
        Ae = n('feu+'),
        je = n('7N4s'),
        Me = n('oQhu'),
        Be = n('3A2y')
      function Fe(e, t) {
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
      function Le(e) {
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
      function Ne(e) {
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var He = ae.a.b8f0483e,
        Ve = ae.a.a133d13e,
        ze = ae.a.a1183237,
        Ue = ae.a.da2663f5,
        We = ae.a.j24c37b2,
        Ke = 'compose',
        qe = { page: Ke },
        Ge = { page: Ke, section: 'reply' },
        Xe = { context: 'compose_intent_logged_in' },
        Ye = { viewType: 'send_tweet' },
        Ze = (function (e) {
          u()(n, e)
          var t = Ne(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              y()(s()(e), 'state', { isValid: !1 }),
              y()(s()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              y()(
                s()(e),
                '_handleAppBarHeight',
                Object(Me.a)(function () {
                  var t = xe.a.findDOMNode(e._appBarRef)
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
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ge : qe
              }),
              y()(s()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? Xe : $.a
              }),
              y()(s()(e), '_renderAppBarRightControl', function () {
                var t = e.state.isValid,
                  n = e.context.isModal,
                  a = e.props,
                  r = a.activeUser,
                  o = a.inReplyToStatus,
                  i = a.isSelfThreadReply,
                  c = a.isSending,
                  s = !t || c || !r
                return n
                  ? void 0
                  : v.a.createElement(
                      Pe.a,
                      {
                        behavioralEventContext: Ye,
                        disabled: s,
                        onPress: e._handleSendTweet,
                        size: 'small',
                        testID: Ie,
                        type: 'brandFilled',
                      },
                      Object(te.a)({
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
                  a = e.props,
                  r = a.isSending,
                  o = a.sendingProgress
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  v.a.createElement(De.a, {
                    progress: r ? Math.max(o, 0.02) : 0,
                    style: [Qe.progressBar, n && Qe.progressBarModal],
                  }),
                  t,
                )
              }),
              y()(s()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  a = t.hideUnsentTweetsButton,
                  r = t.scheduledTweets
                if (!a && (r.length > 0 || n.length > 0))
                  return v.a.createElement(
                    ye.a,
                    { style: Qe.unsentHeadingContainer },
                    v.a.createElement(Pe.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Ve),
                  )
              }),
              y()(s()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Oe.c)(Le(Le({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
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
                    a = e.createScheduledTweetApiErrorHandler,
                    r = e.fetchDraftTweets,
                    o = e.fetchScheduledTweets,
                    i = e.history,
                    c = e.inReplyToStatus,
                    s = e.location,
                    l = e.selectedCommunityIdFromLocationState,
                    u = e.updateAudienceControlsValue
                  ;(this._unlockReload = Se.a.acquire()),
                    i.setModalRouteBreakpoint(i.location),
                    t && (o().catch(a()), r().catch(n())),
                    l &&
                      (u({
                        _type: 'community_members',
                        communityIdValue: l,
                        conversationControlsValue: 'community_members',
                      }),
                      i.replace({ pathname: s.pathname, state: Object(Be.a)(s.state || {}, 'selectedCommunityId') })),
                    null != c && c.exclusivity_info
                      ? u({
                          _type: 'super_followers_exclusive',
                          conversationControlsValue: 'super_followers_exclusive',
                          exclusivityControlValue: {},
                        })
                      : null != c && c.community_id_str
                      ? u({
                          _type: 'community_members',
                          communityIdValue: c.community_id_str,
                          conversationControlsValue: 'community_members',
                        })
                      : null != c &&
                        c.trusted_friends_tweet &&
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
                  return v.a.createElement(
                    Re.b,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    v.a.createElement(ke.a, null, function (t) {
                      var s = t.windowWidth,
                        g = b.a.shouldRenderAsModal(s),
                        w = (h || e.showCommunityAudienceEducation) && g,
                        C = (null == o ? void 0 : o.length) > 1
                      return v.a.createElement(
                        v.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? v.a.createElement(Ae.a, {
                              actionLabel: We,
                              graphicDisplayMode: 'none',
                              headline: ze,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: Ue,
                              withCloseButton: !1,
                            })
                          : null,
                        h && v.a.createElement(re.a, { history: c, location: l }),
                        !w &&
                          v.a.createElement(
                            v.a.Fragment,
                            null,
                            v.a.createElement(
                              ee.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: Ke,
                                documentTitle: He,
                                hideBackButton: !1,
                                history: c,
                                middleControl: e._renderUnsentHeading(),
                                onBackClick: e._handleBackClick,
                                renderHeader: e._renderHeaderWithProgressBar,
                                rightControl: e._renderAppBarRightControl(),
                                subtitle: p,
                                title: m,
                              },
                              v.a.createElement(_.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
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
                            C ? v.a.createElement(Te, null) : null,
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
                  return Object(oe.h)(e[0].scheduledFor)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      y()(Ze, 'contextType', je.b)
      var Qe = ve.a.create(function (e) {
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
      t.default = Q(Ze)
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
        f = n.n(m),
        h = n('KEM+'),
        y = n.n(h),
        g = (n('2G9S'), n('z84I'), n('DfhM'), n('ERkP')),
        v = n.n(g),
        b = n('zfvc'),
        _ = n('RhWx'),
        w = n.n(_),
        C = (n('yH/f'), n('M+/F'), n('zrc3')),
        T = Object.freeze({ in: 'in', out: 'out', static: 'static' })
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
            a = f()(e)
          if (t) {
            var r = f()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var x = (function (e) {
        u()(n, e)
        var t = E(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            y()(s()(e), 'state', {
              isAnimating: !1,
              renderChildren: v.a.Children.toArray(e.props.children).map(function (e) {
                return { status: T.static, child: e }
              }),
            }),
            y()(s()(e), '_handleEachAnimateComplete', function () {
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
      t.a = x
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
        f = function (e) {
          return e
        },
        h = l.a.create(function (e) {
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
          i = void 0 === a ? f : a,
          c = e.warningCount,
          y = n - t,
          g = y >= 0 ? m({ count: i(y) }) : p({ count: i(t - n) }),
          v =
            t >= c
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: l.a.visuallyHidden },
                  g,
                )
              : null,
          b = Object(o.a)(y, n),
          _ = t >= n ? 'red500' : t >= c ? 'yellow500' : 'primary',
          w = r.a.createElement(s.a, {
            color: _,
            progress: b,
            size: t >= c ? 30 : 20,
            style: [h.progressCircle, y <= -10 && h.hide],
          }),
          C = t >= c ? r.a.createElement(u.a, { style: [h.text, y > 0 ? h.gray700 : h.red500] }, i(y)) : null
        return r.a.createElement(
          d.a,
          { style: [h.root, h.center] },
          v,
          w,
          r.a.createElement(d.a, { style: [l.a.absoluteFill, h.center] }, C),
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
        f = n('MWbm'),
        h = n('t62R'),
        y = n('CKsB'),
        g = n('/yvb'),
        v = n('rHpw'),
        b = n('Zg3A'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        w = n.n(_),
        C = n('Lsrn'),
        T = n('k/Ka')
      function E(e, t) {
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
            ? E(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(T.a)(
          'svg',
          x(
            x({}, e),
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
        D = m.a.g2d04222,
        k = m.a.baffe39a,
        A = m.a.af293dc2,
        j = m.a.h1053f7e,
        M = m.a.bf994ab2,
        B = m.a.cf7f7e39,
        F = m.a.cfd2f35d,
        L = v.a.create(function (e) {
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
            p = j
          return (
            l ? (p = M) : s && (p = B),
            u.a.createElement(
              f.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [L.root, r ? L.modal : L.popover],
              },
              u.a.createElement(
                f.a,
                { style: L.title },
                u.a.createElement(h.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, P),
                u.a.createElement(
                  h.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  D,
                ),
              ),
              u.a.createElement(
                f.a,
                null,
                u.a.createElement(y.a, {
                  Icon: b.a,
                  actionText: k,
                  isSelected: d.a.all === i,
                  onClick: c(d.a.all),
                  selectable: !0,
                  style: L.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(y.a, {
                  Icon: O,
                  actionText: A,
                  isSelected: d.a.community === i,
                  onClick: c(d.a.community),
                  selectable: !0,
                  style: L.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(y.a, {
                  Icon: l ? R.a : I.a,
                  actionText: p,
                  isSelected: d.a.by_invitation === i,
                  onClick: c(d.a.by_invitation),
                  selectable: !0,
                  style: L.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? u.a.createElement(
                      g.a,
                      {
                        key: 'button_cancel',
                        onPress: a,
                        size: 'large',
                        style: L.cancelButton,
                        type: 'primaryOutlined',
                      },
                      F,
                    )
                  : null,
              ),
            )
          )
        },
        H = n('OiMc'),
        V = n('efqG')
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
          f = u.a.useCallback(function () {
            return p(!1)
          }, []),
          h = a ? (d ? H.a.VISIBILITY_BEHAVIOR.forceVisible : H.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          y = 'function' == typeof t ? t({ openPopover: m, closePopover: f }) : t
        return u.a.createElement(
          V.a,
          {
            disabled: o,
            onDismiss: f,
            renderContent: function (t, n) {
              e.children, e.controlled
              var a = i()(e, ['children', 'controlled'])
              return u.a.createElement(N, r()({}, a, { dismiss: t, isModal: 'sheet' === n }))
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
