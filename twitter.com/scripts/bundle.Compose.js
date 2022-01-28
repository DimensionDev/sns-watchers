;(window.webpackJsonp = window.webpackJsonp || []).push([
  [42, 7],
  {
    '/Rsk': function (e, t, n) {
      'use strict'
      n.d(t, 'f', function () {
        return y
      }),
        n.d(t, 'e', function () {
          return g
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
          return E
        }),
        n.d(t, 'b', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return S
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
        v = Object.freeze({
          initial: { fetchStatus: i.a.NONE },
          lastSearch: { fetchStatus: i.a.NONE },
          lastSelectedPlace: void 0,
        })
      var y = function (e) {
          return e.placePicker.initial.results
        },
        g = function (e) {
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
        E = function (e) {
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
        T = function () {
          return function (e, t, n) {
            n.api
            var a = g(t()),
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
        S = function () {
          return function (e, t, n) {
            n.api
            return Object(l.l)(t()) && Object(u.c)(t()) === c.b.granted
              ? e(Object(u.b)())
                  .then(function () {
                    return e(T())
                  })
                  .then(function () {
                    return w(t())
                  })
              : Promise.resolve()
          }
        },
        x = 'rweb/placePicker/UPDATE_LAST_SELECTED_PLACE',
        O = function (e) {
          return { type: x, payload: e }
        }
      s.a.register(
        r()({}, h, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
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
            case x:
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
        v = n('MWbm')
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
      var g = (function (e) {
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
                  return h.a.createElement(v.a, { style: b.root })
                },
              },
            ]),
            n
          )
        })(h.a.Component),
        b = f.a.create(function (e) {
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
        v = n.n(f),
        y = n('rHpw'),
        g = n('+/1j'),
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
      var w = v.a.e5b0063d,
        C = 0,
        E = (function (e) {
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
                      g.a,
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
      t.a = E
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
        v = n.n(f),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('7xRU'), n('z84I'), n('2G9S'), n('ERkP')),
        _ = n.n(b),
        w = n('t62R'),
        C = n('piX5'),
        E = n('4r2z'),
        T = n('FG+G'),
        S = n('rHpw'),
        x = (n('aWzz'), n('k/Ka')),
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
            a = v()(e)
          if (t) {
            var r = v()(this).constructor
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var A = _.a.forwardRef(function (e, t) {
          return Object(x.a)('select', k(k({}, e), {}, { ref: t }))
        }),
        D = function (e) {
          return Object(x.a)('option', e)
        },
        j = 1,
        L = (function (e) {
          p()(n, e)
          var t = I(n)
          function n(e) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e)),
              g()(u()(a), '_selectRef', _.a.createRef()),
              g()(u()(a), 'state', { isFocused: !1 }),
              g()(u()(a), '_handleChange', function (e) {
                var t = a.props,
                  n = t.onChange,
                  r = t.withEmptyOption,
                  o = e.target,
                  i = o.selectedIndex,
                  c = o.value
                n && n(c, i - (r ? 1 : 0))
              }),
              g()(u()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur
                a.setState({ isFocused: !1 }), t && t()
              }),
              g()(u()(a), '_handleFocus', function (e) {
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
                    h =
                      'ja' === m
                        ? S.a.theme.fontFamilies.japan
                        : O.a.getConstants().isRTL || E.a.isLocaleRTL(m)
                        ? S.a.theme.fontFamilies.rtl
                        : S.a.theme.fontFamilies.normal,
                    f = void 0 === o ? !!a : o,
                    v = new Set()
                  a && v.add(this._errorID), t && v.add(t), i && v.add(this._helperID)
                  var y = v.size ? r()(v).join(' ') : void 0
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(
                      R.a,
                      {
                        style: [
                          C.a.border,
                          M.container,
                          n && C.a.disabled,
                          p && C.a.focusedBorderValid,
                          f && C.a.invalidBorderColor,
                          p && f && C.a.focusedBorderInvalid,
                          s,
                        ],
                      },
                      this._renderLabel(),
                      _.a.createElement(
                        A,
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
                          style: [M.select, { fontFamily: h }, n && C.a.disabled],
                          testID: l || '',
                          value: u,
                        },
                        d ? _.a.createElement(D, { disabled: !0, style: M.option, value: '' }) : null,
                        c.map(function (e) {
                          var t = e.disabled,
                            n = e.label,
                            a = e.value
                          return _.a.createElement(
                            D,
                            { disabled: t, key: ''.concat(n, '-').concat(a), style: M.option, value: a },
                            n,
                          )
                        }),
                      ),
                      _.a.createElement(T.a, {
                        style: [M.dropdownCaret, p && C.a.validColor, (o || a) && C.a.invalidColor],
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
                      style: M.label,
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
                      { color: 'gray700', nativeID: this._helperID, style: M.helperText },
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
                      { color: 'red500', nativeID: this._errorID, style: M.helperText },
                      this.props.errorText,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      g()(L, 'defaultProps', { disabled: !1, autofocus: !1, withEmptyOption: !1 }), (L.propTypes = {})
      var M = S.a.create(function (e) {
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
      t.a = L
    },
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return te
      }),
        n.d(t, 'e', function () {
          return ne
        }),
        n.d(t, 'f', function () {
          return ae
        }),
        n.d(t, 'd', function () {
          return re
        }),
        n.d(t, 'a', function () {
          return ce
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var a = n('m3Bd'),
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
        v = n.n(f),
        y = n('KEM+'),
        g = n.n(y),
        b = n('97Jx'),
        _ = n.n(b),
        w = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('ERkP')),
        C = n.n(w),
        E = n('6rlp'),
        T = n('zh9S'),
        S = n('G6rE'),
        x = n('rxPX'),
        O = n('0KEI'),
        R = function (e, t) {
          return S.e.select(e, t.userId)
        },
        I = function (e, t) {
          return t.promotedContent
        },
        P = Object(x.a)()
          .propsFromState(function () {
            return { promotedContent: I, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: E.a,
              scribeAction: T.c,
            }
          }),
        k = n('I57f'),
        A = n('vMjK'),
        D = n('MWbm'),
        j = n('IG7M'),
        L = n('rHpw'),
        M = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return C.a.createElement(
            D.a,
            { style: B.decorationWrapper },
            t,
            C.a.createElement(j.a, {
              renderActionMenu: function (e) {
                return C.a.createElement(A.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: B.actionMenu,
            }),
          )
        },
        B = L.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        F = n('uIZp'),
        N = n('mN6z'),
        H = n('caTy'),
        V = n('3IPs'),
        U = n('Rp9C'),
        z = n('X04g'),
        W = n('Re5t'),
        q = n('TnY3'),
        K = n('hxu0'),
        G = n('v6aA'),
        X = n('7JQg'),
        Z = n('IMA+'),
        Y = n('cFuS')
      function Q(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $(e) {
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
          return h()(this, n)
        }
      }
      var ee = function (e) {
        var t = e.user
        return t && t.profile_image_url_https
          ? C.a.createElement(
              oe,
              _()({}, e, {
                avatarUri: t.profile_image_url_https,
                description: t.description,
                entities: t.entities,
                followRequestReceived: t.follow_request_received,
                highlightedLabel: t.highlightedLabel,
                isAutoblocking: t.smart_blocking,
                isBlockedBy: t.blocked_by,
                isBlocking: t.blocking,
                isDeviceFollowing: t.notifications,
                isFollowedBy: t.followed_by,
                isFollowing: t.following,
                isProtected: t.protected,
                isVerified: t.verified,
                name: t.name,
                screenName: t.screen_name,
                translatorType: t.translator_type,
                user: t,
                withheldDescription: t.withheld_description,
                withheldEntities: t.withheld_entities,
              }),
            )
          : null
      }
      ee.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: W.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: Y.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var te = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return C.a.createElement(k.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        ne = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? C.a.createElement(F.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: a })
            : null
        },
        ae = function (e) {
          return C.a.createElement(M, { promotedContent: e.promotedContent, user: e.user }, ne(e))
        },
        re = function (e) {
          return C.a.createElement(j.a, {
            renderActionMenu: function (t) {
              return C.a.createElement(A.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        oe = (function (e) {
          p()(n, e)
          var t = $(n)
          function n() {
            var e
            i()(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Y.b.PROFILE_IMAGE_CLICK)
              }),
              g()(u()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  a = t.onClick,
                  r = t.screenName,
                  o = t.user,
                  i = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  a ? a({ user: o, state: i }) : n.push({ pathname: '/'.concat(r), state: i || void 0 })
              }),
              g()(u()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(Y.b.SCREEN_NAME_CLICK)
              }),
              g()(u()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(z.a.ItemType.USER) && n({ user: { id: r, type: V.a.User } })
              }),
              g()(u()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  o = a.scribeAction,
                  i = a.scribeData,
                  c = a.scribeNamespace,
                  s = a.user,
                  l = a.userId,
                  u =
                    null == i || null === (n = i.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === z.a.ItemType.USER && e.id === l
                        }),
                  d = i.search_details,
                  p = { items: [J(J({}, u), U.a.getUserItem(s, r))], profile_id: l, search_details: d }
                o(J(J({}, c), t), p)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(N.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarDecoration,
                    n = (e.bottomControl, e.cellClickable),
                    a =
                      (e.createLocalApiErrorHandler,
                      e.decoration,
                      e.followRequestReceived,
                      e.hideBlocked,
                      e.history,
                      e.isAutoblocking,
                      e.isBlockedBy,
                      e.isBlocking,
                      e.isDeviceFollowing,
                      e.isFollowing,
                      e.isInSidebar),
                    o =
                      (e.location,
                      e.log,
                      e.onClick,
                      e.promotedItemId,
                      e.saveAsRecentSearch,
                      e.scribeAction,
                      e.scribeData,
                      e.scribeNamespace,
                      e.shouldScribeImpression,
                      e.shouldScribeProfileClick,
                      e.shouldStoreTypeaheadItem,
                      e.socialContext),
                    i = e.user,
                    c = r()(e, [
                      'avatarDecoration',
                      'bottomControl',
                      'cellClickable',
                      'createLocalApiErrorHandler',
                      'decoration',
                      'followRequestReceived',
                      'hideBlocked',
                      'history',
                      'isAutoblocking',
                      'isBlockedBy',
                      'isBlocking',
                      'isDeviceFollowing',
                      'isFollowing',
                      'isInSidebar',
                      'location',
                      'log',
                      'onClick',
                      'promotedItemId',
                      'saveAsRecentSearch',
                      'scribeAction',
                      'scribeData',
                      'scribeNamespace',
                      'shouldScribeImpression',
                      'shouldScribeProfileClick',
                      'shouldStoreTypeaheadItem',
                      'socialContext',
                      'user',
                    ])
                  return this._shouldRender()
                    ? C.a.createElement(
                        Z.a,
                        _()({}, c, {
                          avatarDecoration: t,
                          bottomControl: this._renderBottomControl(),
                          decoration: this._renderDecoration(),
                          highlightedLabel: this._getHighlightedLabel(),
                          isBlocking: i.blocking,
                          onAvatarClick: this._handleAvatarClick,
                          onCellClick: n ? this._handleCellClick : void 0,
                          onScreenNameClick: this._handleScreenNameClick,
                          socialContext: o
                            ? {
                                contextType: o.contextType,
                                text: o.text,
                                link: o.landingUrl ? Object(H.b)(o.landingUrl) : void 0,
                              }
                            : void 0,
                          withDarkerInteractiveBackground: a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    a = n.displayMode,
                    r = n.followRequestReceived,
                    o = n.isAutoblocking,
                    i = n.isBlocking,
                    c = n.isDeviceFollowing,
                    s = n.isFollowing,
                    l = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: o,
                        isBlocking: i,
                        isDeviceFollowing: !!c,
                        isFollowing: !!s,
                        loggedInUserId: t,
                        promotedContent: l,
                        screenName: u,
                        user: d,
                        userId: p,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    n = e.isBlockedBy,
                    a = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || a))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === Y.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.log,
                    r = t.promotedContent,
                    o = t.promotedItemId,
                    i = t.promotedItemType,
                    c = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: o || c,
                      itemType: i,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    a = e.promotedContent,
                    r = e.promotedItemType,
                    o = e.shouldScribeImpression,
                    i = e.userId
                  if (a && r === Y.c.USER) {
                    var c = a.disclosure_type,
                      s = a.impression_id
                    n({
                      disclosureType: c,
                      itemId: i,
                      itemType: Y.c.USER,
                      params: { event: Y.b.IMPRESSION, impression_id: s },
                    }).catch(t())
                  } else o && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      g()(oe, 'contextType', G.a), g()(oe, 'defaultProps', ee.defaultProps)
      var ie = L.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        ce = Object(q.a)(Object(K.a)(P(ee)))
      t.b = Object(X.c)({ element: 'user' })(ce)
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
        v = n.n(f),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        b = n('rxPX'),
        _ = n('0KEI'),
        w = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        C = function (e, t) {
          return t.module.selectItems(e)
        },
        E = Object(b.a)()
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
        T = n('v//M'),
        S = n('sIe2'),
        x = n('3XMw'),
        O = n.n(x),
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
        k = 'sliceTimeline',
        A = function (e) {
          return e
        },
        D = { viewType: 'timeline' },
        j = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), '_render', function () {
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
                  ? g.a.createElement(R.a, {
                      cacheKey: k,
                      footer: n,
                      identityFunction: A,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: i,
                      renderer: c,
                      withoutHeadroom: s,
                    })
                  : g.a.createElement(S.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: A,
                      numColumns: o,
                      renderItem: c,
                    })
              }),
              v()(s()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              v()(s()(e), '_handleFetch', function () {
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
                    ? g.a.createElement(T.a, {
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
        })(g.a.Component)
      v()(j, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var L = E(j)
      t.a = L
    },
    JFx8: function (e, t, n) {
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
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 158 20' },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 158, height: 20 }), (t.a = d)
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
    ODCi: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Recipients', function () {
          return H
        })
      var a = n('RhWx'),
        r = n.n(a),
        o = n('ddV6'),
        i = n.n(o),
        c = (n('vrRf'), n('LW0h'), n('2G9S'), n('ERkP')),
        s = n.n(c),
        l = (n('z84I'), n('RqPI')),
        u = n('xVN5'),
        d = n('wpu3'),
        p = n('hqKg'),
        m = n('o52z'),
        h = n('oEGd'),
        f = function (e, t) {
          return t.location.state
        },
        v = function (e, t) {
          var n = f(0, t)
          return n && n.inReplyToStatus
        },
        y = Object(p.createSelector)(v, l.q, function (e, t) {
          return e && t
            ? Object(d.a)({ inReplyToStatus: e, loggedInUserId: t, excludeReplyUser: !0 }).map(function (e) {
                return e.id_str
              })
            : Object(m.a)()
        }),
        g = Object(p.createSelector)(
          y,
          function (e, t) {
            var n = f(0, t)
            return (n && n.excludedRecipients) || Object(m.a)()
          },
          v,
          function (e, t, n) {
            return { recipientIds: e, initialExcludedRecipients: t, inReplyToStatus: n }
          },
        ),
        b = { updateExcludedRecipientsV2: u.v },
        _ = Object(h.g)(g, b),
        w = n('jHSc'),
        C = n('3XMw'),
        E = n.n(C),
        T = n('5FtR'),
        S = n('7JQg'),
        x = n('s1N3'),
        O = n('88ay'),
        R = n('hqDb'),
        I = n('MWbm'),
        P = n('0yYu'),
        k = n('6vad'),
        A = n('XiMS'),
        D = n('t62R'),
        j = n('/yvb'),
        L = E.a.c55eed71,
        M = E.a.b772cd65,
        B = E.a.caca3101,
        F = E.a.c6a6dc2f,
        N = { page: 'compose', section: 'recipients' },
        H = function (e) {
          var t = e.history,
            n = e.inReplyToStatus,
            a = e.initialExcludedRecipients,
            o = e.recipientIds,
            c = e.updateExcludedRecipientsV2,
            l = s.a.useState(a),
            u = i()(l, 2),
            d = u[0],
            p = u[1]
          if (!n) return s.a.createElement(T.a, { to: '/compose/tweet' })
          var h = (n.retweeted_status || n).user,
            f = function (e) {
              p(e ? Object(m.a)() : o)
            },
            v = function (e) {
              return function () {
                var t = -1 !== d.indexOf(e)
                p(
                  t
                    ? d.filter(function (t) {
                        return t !== e
                      })
                    : Object(x.a)([].concat(r()(d), [e])),
                )
              }
            },
            y = function () {
              c(d), t.goBack()
            },
            g = function () {
              return o.length > 1 ? s.a.createElement(A.a, { checked: 0 === d.length, onChange: f }) : null
            },
            b = function (e) {
              var t = e.isBlocking,
                n = e.screenName
              return t ? s.a.createElement(D.b, { color: 'magenta500', size: 'subtext2' }, F({ screenName: n })) : null
            },
            _ = function (e) {
              if (!n) return null
              var t = (n.retweeted_status || n).user,
                a = -1 !== d.indexOf(e),
                r = e === t.id_str,
                o = s.a.createElement(A.a, { checked: !a, disabled: r, onChange: v(e) })
              return s.a.createElement(O.b, {
                bottomControl: b,
                cellClickable: !r,
                decoration: o,
                key: e,
                onClick: v(e),
                promotedItemType: 'users',
                userId: e,
                withLink: !1,
              })
            }
          return s.a.createElement(
            S.b,
            { namespace: N },
            s.a.createElement(
              w.b,
              {
                backLocation: '/compose/tweet',
                history: t,
                onBackClick: y,
                rightControl: s.a.createElement(j.a, { onPress: y, size: 'xSmall', type: 'brandFilled' }, M),
                title: L,
              },
              _(h.id_str),
              o.length
                ? s.a.createElement(
                    I.a,
                    null,
                    s.a.createElement(P.a, null),
                    s.a.createElement(k.b, { rightControl: g(), text: B }),
                    s.a.createElement(R.a, { renderUserCell: _, userIds: o }),
                  )
                : null,
            ),
          )
        }
      t.default = _(H)
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
          return h
        }),
        n.d(t, 'f', function () {
          return g
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
        h = 'DELETE_SCHEDULED_TWEET',
        f = Object.freeze({
          REQUEST: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST',
          SUCCESS: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS',
          FAILURE: 'rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE',
        }),
        v = function (e, t) {
          return t.filter(function (t) {
            return t.rest_id !== e
          })
        }
      function y() {
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
              ? l(l({}, e), {}, { scheduledTweets: v(n.deleteScheduledTweetId, e.scheduledTweets) })
              : e
          default:
            return e
        }
        return e
      }
      c.a.register(r()({}, u, y))
      var g = function (e) {
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
          return v
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
        v = function () {
          return function (e, t) {
            return g()
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
            return p(t()) ? Promise.resolve() : e(v())
          }
        },
        g = function () {
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
        v = n.n(f),
        y = n('AuHH'),
        g = n.n(y),
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
        E = n('ye3X'),
        T = n('pXBW'),
        S = n('6/RC'),
        x = (n('KOtZ'), n('ho0z'), n('hBpG'), n('wpu3')),
        O = n('+Kfv'),
        R = n('eSoz'),
        I = n('rxPX'),
        P = function (e, t) {
          var n = t.communityId
          return n ? R.c.select(e, n) : void 0
        },
        k = Object(I.a)().propsFromState(function () {
          return { community: P }
        }),
        A = n('MtXG'),
        D = n('t62R'),
        j = n('CKsB'),
        L = n('rHpw'),
        M = n('3XMw'),
        B = n.n(M),
        F = B.a.d58baa7e,
        N = k(
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
                ((o = F(i)),
                C.a.createElement(
                  A.a.Group,
                  null,
                  C.a.createElement(
                    A.a,
                    null,
                    C.a.createElement(
                      D.b,
                      { color: 'white' },
                      C.a.createElement(
                        B.a.I18NFormatMessage,
                        { $i18n: 'b38e130b' },
                        C.a.createElement(A.a.Value, null, B.a.ibd0106d({ formattedCount: o })),
                        C.a.createElement(A.a.Label, null, B.a.cface2d0({ count: i })),
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
        H = L.a.create(function (e) {
          return { menuItem: { alignItems: 'center' } }
        }),
        V = n('FS1z'),
        U = n('MWbm'),
        z = n('yw4N'),
        W = n('+Eiw'),
        q = n('Zg3A'),
        K = n('EyD/'),
        G = B.a.e815fc33,
        X = B.a.c63602d3,
        Z = B.a.baffe39a,
        Y = B.a.aa4209e8,
        Q = L.a.create(function (e) {
          return {
            hidden: { visibility: 'hidden' },
            title: { flexDirection: 'column', paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 },
            root: { flex: 1, flexDirection: 'column', paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 },
            menuItem: { alignItems: 'center' },
            superFollowsIcon: { backgroundImage: W.a.getBackgroundImage() },
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
        J = function (e) {
          var t = e.audienceControlsValue,
            n = e.dismiss,
            a = e.hasMemberships,
            r = e.isC9sParticipationEnabled,
            o = e.isSuperFollowsCreator,
            i = e.onAudienceControlsValueChange,
            c = e.sliceModule,
            s = t.communityIdValue || void 0,
            l = t.exclusivityControlValue || void 0,
            u = C.a.useCallback(
              function (e) {
                return function () {
                  i(e), n()
                }
              },
              [i, n],
            )
          return C.a.createElement(
            U.a,
            { style: Q.root },
            C.a.createElement(
              z.a,
              { style: Q.viewport },
              C.a.createElement(
                C.a.Fragment,
                null,
                C.a.createElement(D.b, { size: 'headline1', style: Q.title, weight: 'bold' }, G),
                C.a.createElement(
                  O.a,
                  { viewType: 'everyone' },
                  C.a.createElement(j.a, {
                    Icon: q.a,
                    actionText: Z,
                    isSelected: !l && !s,
                    onClick: u({ _type: 'conversation_controls', conversationControlsValue: 'all' }),
                    selectable: !0,
                    style: Q.menuItem,
                    withIconAsThumbnail: !0,
                  }),
                ),
                o
                  ? C.a.createElement(j.a, {
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
                      style: Q.menuItem,
                      withIconAsThumbnail: !0,
                    })
                  : null,
              ),
              a && c && r
                ? C.a.createElement(
                    U.a,
                    null,
                    C.a.createElement(
                      O.a,
                      { viewType: 'community' },
                      C.a.createElement(D.b, { style: Q.title, weight: 'bold' }, X),
                      C.a.createElement(V.a, {
                        module: c,
                        noItemsRenderer: function () {
                          return null
                        },
                        renderer: function (e) {
                          return C.a.createElement(N, {
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
        $ = n('xVN5'),
        ee = n('wa7Z'),
        te = n('hqKg'),
        ne = n('li/m'),
        ae = n('RqPI'),
        re = n('xZGM'),
        oe = n('0KEI'),
        ie = function (e, t) {
          var n = t.audienceControlsValue.communityIdValue || void 0
          return n ? R.c.select(e, n) : void 0
        },
        ce = function (e, t) {
          return Object(re.z)(e, re.f)
        },
        se = Object(I.a)()
          .propsFromState(function () {
            return {
              communities: R.f,
              educationalVisibilityFlag: ce,
              hasMemberships: ne.d,
              selectedCommunity: ie,
              sliceModule: Object(te.createSelector)(ae.q, function (e) {
                return e ? Object(ee.a)(e) : void 0
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(oe.createLocalApiErrorHandlerWithContextFactory)(
                'COMMUNITIES_CONTROLS',
              ),
              addEducationFlag: function () {
                return Object(re.w)(re.f)
              },
              updateSingleComposer: $.x,
            }
          }),
        le = n('FG+G'),
        ue = n('v6aA'),
        de = n('X00g'),
        pe = n('efqG'),
        me = n('/yvb')
      function he(e) {
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
          return v()(this, n)
        }
      }
      var fe = B.a.baffe39a,
        ve = B.a.e815fc33,
        ye = B.a.aa4209e8,
        ge = C.a.createElement(le.a, null),
        be = (function (e) {
          h()(n, e)
          var t = he(n)
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
                return C.a.createElement(J, {
                  audienceControlsValue: n,
                  dismiss: e,
                  hasMemberships: a,
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
                    u = n.communityIdValue || !1,
                    d = n.exclusivityControlValue || !1,
                    p = a && !c,
                    m = u && null != c && c.name ? c.name : d ? ye : fe
                  if (d) e = { color: 'plum500', borderColor: 'plum500', backgroundColor: 'transparent' }
                  else if (u && null != c && c.theme && l) {
                    var h = de.a.getCommunityUIColorName(c.theme)
                    e = { color: h, borderColor: h, backgroundColor: 'transparent' }
                  } else e = { type: 'brandOutlined' }
                  return i || o
                    ? C.a.createElement(
                        O.a,
                        { viewType: 'communities_controls' },
                        C.a.createElement(
                          U.a,
                          { style: _e.container },
                          C.a.createElement(
                            pe.a,
                            {
                              onDismiss: this._handleDismiss,
                              onOpen: this._handleOpen,
                              renderContent: this._renderContent,
                              visibilityBehavior: p ? 'forceVisible' : 'interactive',
                            },
                            C.a.createElement(
                              me.a,
                              r()(
                                {
                                  accessibilityExpanded: s,
                                  accessibilityHasPopup: 'menu',
                                  accessibilityLabel: ve,
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
        })(C.a.Component)
      _()(be, 'contextType', ue.a)
      var _e = L.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spaces.space4 },
            container: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
            hidden: { visibility: 'hidden' },
            root: { flexDirection: 'column', paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 },
          }
        }),
        we = se(be),
        Ce = n('ddV6'),
        Ee = n.n(Ce),
        Te = n('PKbs'),
        Se = function (e, t) {
          var n = t.selectedCommunityId
          return n ? R.c.select(e, n) : void 0
        },
        xe = Object(I.a)()
          .propsFromState(function () {
            return { community: Se }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(oe.createLocalApiErrorHandlerWithContextFactory)('COMMUNITY_RULES'),
              fetchCommunityIfNeeded: R.c.fetchOneIfNeeded,
            }
          }),
        Oe = n('YeIG'),
        Re = n('21zW'),
        Ie = B.a.gfca5254,
        Pe = B.a.f510c8b2,
        ke = C.a.createElement(D.b, { weight: 'bold' }, Pe),
        Ae = L.a.create(function (e) {
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
        De = xe(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            o = e.selectedCommunityId,
            i = e.showMiddot
          C.a.useEffect(
            function () {
              o && Object(Oe.a)(t) && a(o).catch(n())
            },
            [t, o, n, a],
          )
          var c = C.a.useState(!1),
            s = Ee()(c, 2),
            l = s[0],
            u = s[1],
            d = C.a.useContext(ue.a).featureSwitches,
            p = C.a.useCallback(
              function (e) {
                if (null != t && t.rules) {
                  var n = t.rules,
                    a = t.theme
                  return C.a.createElement(Te.b, {
                    badgeStyle: Ae.badgeStyle,
                    headerContainerStyle: Ae.rulesHeader,
                    heading: ke,
                    ruleContainerStyle: Ae.ruleContainerStyle,
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
              h = de.a.getCommunityUIColorName(m),
              f = d.isTrue('c9s_ui_colors_enabled_rweb')
                ? { color: h, borderColor: 'transparent', backgroundColor: 'transparent' }
                : { type: 'brandText' }
            return C.a.createElement(
              U.a,
              { style: Ae.container },
              i ? C.a.createElement(Re.a, null) : null,
              C.a.createElement(
                pe.a,
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
                  me.a,
                  r()(
                    {
                      accessibilityExpanded: l,
                      accessibilityHasPopup: 'dialog',
                      accessibilityRole: 'button',
                      size: 'xSmall',
                      style: Ae.button,
                    },
                    f,
                  ),
                  Ie,
                ),
              ),
            )
          }
          return null
        }),
        je = function (e, t) {
          return Object(re.z)(e, re.g)
        },
        Le = Object(I.a)()
          .propsFromState(function () {
            return { shouldShowEducation: je }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(re.w)(re.g)
              },
            }
          }),
        Me = n('4zmP'),
        Be = B.a.g46f363d,
        Fe = { viewType: 'rule_education' }
      var Ne = L.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space8 } }
        }),
        He = Le(function (e) {
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
                  { style: Ne.container },
                  C.a.createElement(Me.a, { behavioralEventContext: Fe, onClose: a, text: Be, withCloseButton: !0 }),
                )
              : null
          )
        }),
        Ve = n('H7Rt'),
        Ue = n('m3Bd'),
        ze = n.n(Ue),
        We = n('yZqq'),
        qe = function (e, t) {
          return Object(re.z)(e, re.q)
        },
        Ke = Object(I.a)()
          .propsFromState(function () {
            return { shouldShowEducation: qe }
          })
          .propsFromActions(function () {
            return {
              addEducationFlag: function () {
                return Object(re.w)(re.q)
              },
            }
          }),
        Ge = B.a.aa65a449,
        Xe = { viewType: 'persistent_conversation_controls_education' }
      var Ze = L.a.create(function (e) {
          return { container: { width: '100%', marginBottom: e.spaces.space8 } }
        }),
        Ye = Ke(function (e) {
          var t = e.addEducationFlag,
            n = e.buttonRef,
            a = e.shouldShowEducation,
            r = C.a.useContext(ue.a).featureSwitches,
            o = C.a.useState(),
            i = Ee()(o, 2),
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
                  { style: Ze.container },
                  C.a.createElement(Me.a, {
                    arrowPositionStart: c,
                    behavioralEventContext: Xe,
                    onClose: l,
                    text: Ge,
                    withCloseButton: !0,
                  }),
                )
              : null
          )
        }),
        Qe = n('Irs7'),
        Je = n('DlMI'),
        $e = n('gBde'),
        et = n('gUPl'),
        tt = n('cOhU'),
        nt = C.a.createElement(Je.a, null),
        at = C.a.createElement($e.a, null),
        rt = C.a.createElement(et.a, null),
        ot = C.a.createElement(tt.a, null),
        it = 'conversation_control',
        ct = Object.freeze({
          all: { icon: nt, label: B.a.i8ea6d4e },
          community: { icon: rt, label: B.a.ec5a4a25 },
          by_invitation: { icon: at, label: B.a.b4543009 },
          community_members: { icon: ot, label: B.a.i13be5a0 },
          super_followers_exclusive: { icon: nt, label: B.a.f8393bda },
        }),
        st =
          (Object.freeze(['community', 'by_invitation']),
          Object(Qe.a)(function (e) {
            var t = e.analytics,
              n = ze()(e, ['analytics']),
              a = e.disabled,
              r = e.value,
              o = ct[r],
              i = o.icon,
              c = o.label,
              s = C.a.useState(!1),
              l = Ee()(s, 2),
              u = l[0],
              d = l[1],
              p = C.a.useRef(null)
            C.a.useEffect(function () {
              r !== Ve.a.all && r !== Ve.a.community_members && d(!0)
            }, [])
            var m = C.a.useCallback(
              function (e) {
                t.scribe({ element: it, action: 'click' })
              },
              [t],
            )
            return C.a.createElement(
              O.a,
              { viewType: it },
              u ? C.a.createElement(Ye, { buttonRef: p.current }) : null,
              C.a.createElement(
                U.a,
                { style: lt.controlsContainer },
                C.a.createElement(
                  We.a,
                  n,
                  C.a.createElement(
                    me.a,
                    { disabled: a, icon: i, onPress: m, ref: p, size: 'xSmall', style: lt.button, type: 'brandText' },
                    c,
                  ),
                ),
              ),
            )
          })),
        lt = L.a.create(function (e) {
          return {
            button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 },
            controlsContainer: { display: 'inline-flex', flexDirection: 'row', paddingBottom: e.spaces.space12 },
          }
        }),
        ut = n('krmn'),
        dt = n('cIoY'),
        pt = n('w3n3'),
        mt = n('MLl7'),
        ht = n('1auM'),
        ft = n('07FG'),
        vt = n('Q8CU'),
        yt = n('QbaN'),
        gt = n('nV1z'),
        bt = n('VPdC'),
        _t = n('WPfJ'),
        wt = L.a.create(function (e) {
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
              zIndex: _t.f,
            },
            textInputStyle: { paddingHorizontal: 0 },
            textInputMobileCollapsed: { maxHeight: e.fontSizes.title4, padding: 0, overflow: 'hidden' },
            tweetAttachmentArea: { zIndex: _t.e },
            iconEmojiPicker: { zIndex: _t.c },
            toolBar: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: e.spaces.space2,
              zIndex: _t.a,
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
        Et = B.a.bdbcdd93,
        Tt = B.a.a809609f,
        St = C.a.createElement(gt.a, null),
        xt = function (e) {
          var t = e.media,
            n = e.mediaAttachDisabled,
            a = e.onFilesAdded,
            r = e.setActiveParentKey,
            o = e.videoPickerEnabled,
            i = n || t.length >= 4,
            c = t.length < 3,
            s = o && Ct.b.isIOS() && Ct.b.isSafari()
          return C.a.createElement(
            C.a.Fragment,
            null,
            C.a.createElement(bt.a, {
              acceptGifs: 0 === t.length,
              acceptVideo: 0 === t.length && !s,
              accessibilityLabel: t.length > 0 || s ? Et : void 0,
              disabled: i,
              multiple: c,
              onChange: a,
              onPress: r,
              style: [wt.toolBarButton, wt.firstToolBarButton],
              type: 'brandText',
            }),
            s
              ? C.a.createElement(bt.a, {
                  acceptGifs: !1,
                  acceptImages: !1,
                  acceptVideo: !0,
                  accessibilityLabel: Tt,
                  disabled: t.length > 0,
                  hoverLabel: { label: Tt },
                  icon: St,
                  multiple: !1,
                  onChange: a,
                  onPress: r,
                  style: wt.toolBarButton,
                  type: 'brandText',
                })
              : null,
          )
        },
        Ot = n('p+r5'),
        Rt = n('GWvE')
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
            a = g()(e)
          if (t) {
            var r = g()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return v()(this, n)
        }
      }
      var Pt = (function (e) {
        h()(n, e)
        var t = It(n)
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
                  { style: kt.root },
                  C.a.createElement(Ot.a, {
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
                    style: kt.formTextInput,
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
                  (this.value && !Object(Rt.a)(this.value) && this._inputRef && this._inputRef.isValidLength())
                )
              },
            },
          ]),
          n
        )
      })(C.a.Component)
      _()(Pt, 'defaultProps', { autoFocus: !1, editable: !0, optional: !1 })
      var kt = L.a.create(function (e) {
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
        At = Pt,
        Dt = (n('Blm6'), n('DZ+c'), n('mtvn')),
        jt = n('6XNv')
      function Lt(e) {
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
          return v()(this, n)
        }
      }
      var Mt = (function (e) {
        h()(n, e)
        var t = Lt(n)
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
                  u = Object(Dt.a)(o, r + 1).map(function (e) {
                    return { label: ''.concat(B.a.ia24dc8c(e)), value: ''.concat(e) }
                  })
                return C.a.createElement(jt.a, {
                  disabled: s,
                  label: n,
                  onChange: i,
                  options: u,
                  style: [Bt.selector, !a && Bt.rightMargin],
                  testID: c,
                  value: l,
                })
              },
            },
          ]),
          n
        )
      })(C.a.PureComponent)
      _()(Mt, 'defaultProps', { last: !1 })
      var Bt = L.a.create(function (e) {
          return { rightMargin: { marginRight: e.spaces.space20 }, selector: { flexGrow: 1 } }
        }),
        Ft = Mt,
        Nt = 'addPollChoice',
        Ht = 'selectPollDays',
        Vt = 'selectPollHours',
        Ut = 'selectPollMinutes',
        zt = 'removePollButton'
      function Wt(e) {
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
          return v()(this, n)
        }
      }
      var qt = B.a.caf8edc4,
        Kt = B.a.g93586be,
        Gt = B.a.d073b644,
        Xt = B.a.a2f0728e,
        Zt = (function (e) {
          h()(n, e)
          var t = Wt(n)
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
                    C.a.createElement(D.b, { color: 'normal', style: Yt.durationLabel }, t ? qt : ''),
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
                    { style: Yt.durationControls },
                    C.a.createElement(Ft, {
                      editable: t && n,
                      label: Kt,
                      max: 7,
                      min: 0,
                      onChange: this._handleDaysChange,
                      testID: Ht,
                      value: r,
                    }),
                    C.a.createElement(Ft, {
                      editable: t && n,
                      label: Gt,
                      max: 7 === r ? 0 : 23,
                      min: 0,
                      onChange: this._handleHoursChange,
                      testID: Vt,
                      value: o,
                    }),
                    C.a.createElement(Ft, {
                      editable: t && n,
                      label: Xt,
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
        })(C.a.Component)
      _()(Zt, 'defaultProps', { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } })
      var Yt = L.a.create(function (e) {
          return {
            durationControls: { flexDirection: 'row', justifyContent: 'space-between' },
            durationLabel: { marginBottom: e.spaces.space4 },
          }
        }),
        Qt = Zt,
        Jt = n('iY63'),
        $t = n('jtO7')
      function en(e) {
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
          return v()(this, n)
        }
      }
      var tn = B.a.g589c2e1,
        nn = B.a.a1e6c3a1,
        an = B.a.a739e006,
        rn = B.a.d89a5b92,
        on = B.a.c2a8118d,
        cn = B.a.a8ede1de,
        sn = B.a.af40a8ef,
        ln = (function (e) {
          h()(n, e)
          var t = en(n)
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
                      { style: un.rightColumn },
                      c < 4
                        ? C.a.createElement(me.a, {
                            accessibilityLabel: cn,
                            disabled: !(t && r),
                            hoverLabel: { label: sn },
                            icon: C.a.createElement(Jt.a, null),
                            onPress: this._handleAdd,
                            size: 'medium',
                            style: un.addButton,
                            testID: Nt,
                            type: 'brandText',
                          })
                        : null,
                    )
                  return C.a.createElement(
                    U.a,
                    { style: un.choicesAndAddButton },
                    C.a.createElement(
                      U.a,
                      { style: un.choices },
                      C.a.createElement(At, {
                        autoFocus: i,
                        defaultValue: a[0],
                        editable: t && r,
                        label: tn,
                        name: 'Choice1',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice1Ref,
                      }),
                      C.a.createElement(At, {
                        defaultValue: a[1],
                        editable: t && r,
                        label: nn,
                        name: 'Choice2',
                        onBlur: this._handleBlur,
                        onChange: this._handleValidation,
                        ref: this._setChoice2Ref,
                      }),
                      c >= 3
                        ? C.a.createElement(At, {
                            autoFocus: i,
                            defaultValue: a[2],
                            editable: t && r,
                            label: an,
                            name: 'Choice3',
                            onBlur: this._handleBlur,
                            onChange: this._handleValidation,
                            optional: !0,
                            ref: this._setChoice3Ref,
                          })
                        : null,
                      4 === c
                        ? C.a.createElement(At, {
                            autoFocus: i,
                            defaultValue: a[3],
                            editable: t && r,
                            label: rn,
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
                    { style: un.root },
                    this._renderChoices(),
                    C.a.createElement(Qt, {
                      editable: t,
                      initialDuration: n,
                      isActive: a,
                      onChange: this._handleDurationChange,
                      ref: this._setDurationPickerRef,
                      style: un.durationPicker,
                    }),
                    C.a.createElement(
                      U.a,
                      { style: un.removePollButton },
                      C.a.createElement($t.a, { color: 'red500', label: on, onPress: r, testID: zt }),
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
        un = L.a.create(function (e) {
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
        dn = Object(Qe.a)(ln),
        pn = L.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 }, link: { color: 'black' } }
        }),
        mn = B.a.i859676b,
        hn = C.a.createElement(
          B.a.I18NFormatMessage,
          { $i18n: 'a02c8d74' },
          C.a.createElement(
            D.b,
            { link: '/settings/audience_and_tagging', style: pn.link, withInteractiveStyling: !0, withUnderline: !0 },
            B.a.c9a48d3f,
          ),
        )
      function fn() {
        return C.a.createElement(U.a, { style: pn.container }, C.a.createElement(Me.a, { headline: mn, text: hn }))
      }
      var vn = n('b5s6'),
        yn = n('rcen'),
        gn = n('zmS9'),
        bn = 'addButton',
        _n = 'addSubtitlesLabel',
        wn = 'altTextLabel',
        Cn = 'tagPeopleLabel',
        En = 'attachments',
        Tn = 'createPollButton',
        Sn = 'geoButton',
        xn = 'gifSearchButton',
        On = 'scheduleOption',
        Rn = 'taggedUsersLabel',
        In = 'tweetTextarea_',
        Pn = 'toolBar',
        kn = 'scheduledTweetIndicator',
        An = n('xM7j'),
        Dn = n('6OUF'),
        jn = n('tZIO'),
        Ln = n('5mJL'),
        Mn = n('DNho'),
        Bn = n('jhWN'),
        Fn = n('rFBM'),
        Nn = n('zfvc'),
        Hn = n('Ujvi'),
        Vn = n('yTN1'),
        Un = n('gpVt'),
        zn = n('hOZg'),
        Wn = n('ll3R'),
        qn = n('J0mu'),
        Kn = n('EfHu'),
        Gn = n('KrGU'),
        Xn = n('boUI'),
        Zn = n('6ZHn'),
        Yn = n('/WPq'),
        Qn = n('wpLu'),
        Jn = n('pHub'),
        $n = n('8A5z'),
        ea = n('pKoL'),
        ta = n('ZvMt'),
        na = n('9Xij')
      function aa(e) {
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
          return v()(this, n)
        }
      }
      var ra = (function (e) {
        h()(n, e)
        var t = aa(n)
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
                  o = L.a.theme.aspectRatios.landscape
                if (t) {
                  var i,
                    c,
                    s = L.a.theme.aspectRatios.minTimelineImage,
                    l = L.a.theme.aspectRatios.maxTimelineImage
                  o = ta.a.getImageAspectRatio(s, l, {
                    width: null === (i = e[0].mediaFile) || void 0 === i ? void 0 : i.width,
                    height: null === (c = e[0].mediaFile) || void 0 === c ? void 0 : c.height,
                  })
                }
                return C.a.createElement(
                  na.a,
                  { ratio: t ? o : r / a },
                  C.a.createElement(U.a, { style: oa.mediaPreviewWrapper }, this._renderMediaAtIndex(0)),
                )
              },
            },
            {
              key: '_renderGroupOf2',
              value: function () {
                return C.a.createElement(
                  na.a,
                  { ratio: L.a.theme.aspectRatios.landscape },
                  C.a.createElement(
                    U.a,
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
                return C.a.createElement(
                  na.a,
                  { ratio: L.a.theme.aspectRatios.landscape },
                  C.a.createElement(
                    U.a,
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
                return C.a.createElement(
                  na.a,
                  { ratio: L.a.theme.aspectRatios.landscape },
                  C.a.createElement(
                    U.a,
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
                return C.a.createElement(
                  U.a,
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
                  v = null === (n = f.mediaMetadata) || void 0 === n ? void 0 : n.altText,
                  y = null === (a = f.mediaMetadata) || void 0 === a ? void 0 : a.defaultAltText,
                  g = !(
                    null === (r = f.mediaMetadata) ||
                    void 0 === r ||
                    null === (o = r.sensitiveMediaWarning) ||
                    void 0 === o ||
                    !o.size
                  ),
                  b = d && c && s,
                  _ = b && g && !!p
                return C.a.createElement(ea.a, {
                  accessibilityLabel: v || y,
                  accessibilityRole: 'group',
                  enableGif: s,
                  key: f.id,
                  mediaItem: f,
                  onClick: u ? u(f.id) : void 0,
                  onEdit: d ? d(f.id) : void 0,
                  onEditSensitiveWarning: p && _ ? p(f.id) : void 0,
                  onRemove: m(f.id),
                  ref: h,
                  style: [oa.mediaContainer, t],
                  withAltTextLabel: !!v,
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
      _()(ra, 'contextType', ue.a)
      var oa = L.a.create(function (e) {
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
        ia = n('oQhu'),
        ca = n('+d3d'),
        sa = n('S1qy'),
        la = n.n(sa),
        ua = n('cjAp'),
        da = n.n(ua)
      function pa(e) {
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
          return v()(this, n)
        }
      }
      var ma = B.a.f0afcc0e,
        ha = B.a.ha5e2e79,
        fa = B.a.a3de3b68,
        va = B.a.cc2b28fc,
        ya = B.a.g45af04e,
        ga = B.a.ee9c4013,
        ba = B.a.af40a8ef,
        _a = B.a.e68b09b4,
        wa = B.a.ec10ee02,
        Ca = B.a.h735a98d,
        Ea = B.a.c4ccfbe2,
        Ta = B.a.j499fbcb,
        Sa = B.a.b7d8e3f0,
        xa = B.a.d1175c78,
        Oa = B.a.bf4e9d79,
        Ra = B.a.e0342f98,
        Ia = B.a.e349147b,
        Pa = B.a.e3a24e4b,
        ka = B.a.de4669e2,
        Aa = B.a.d2c7a41c,
        Da = B.a.f7364fa1,
        ja = ['ja', 'zh-cn', 'zh-tw', 'ko'],
        La = B.a.ia24dc8c,
        Ma = C.a.createElement(zn.a, null),
        Ba = C.a.createElement(Jt.a, null),
        Fa = C.a.createElement(Wn.a, null),
        Na = C.a.createElement(qn.a, null),
        Ha = { viewType: 'schedule_tweet' },
        Va = { viewType: 'add_poll' },
        Ua = { viewType: 'add_composer' },
        za = { viewType: 'tag_location' },
        Wa = (function (e) {
          h()(n, e)
          var t = pa(n)
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
                Object(ia.a)(function () {
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
                    (r.conversationControlsValue !== Ve.a.community_members &&
                      r.conversationControlsValue !== Ve.a.super_followers_exclusive) ||
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
                  s = i === Ve.a.community_members || i === Ve.a.super_followers_exclusive || o._isScheduled()
                return c
                  ? C.a.createElement(st, { disabled: s, onChange: o._handleConversationControlsValueChange, value: i })
                  : null
              }),
              _()(p()(o), '_renderTaggedLocation', function (e) {
                return C.a.createElement(
                  U.a,
                  { style: wt.taggedLocationContainer },
                  C.a.createElement(
                    me.a,
                    {
                      icon: C.a.createElement(Kn.a, null),
                      onPress: o._handleGeoButtonClick,
                      size: 'xSmall',
                      style: wt.taggedLocationButton,
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
                  f = Object(Un.b)(h) || (u && !Object(ft.a)(u) && [u]),
                  v = !!d.length || p || !!m,
                  y = o.props.typeaheadWrapper,
                  g = !o._isEmpty()
                return C.a.createElement(
                  U.a,
                  { style: wt.textInputArea },
                  C.a.createElement(
                    U.a,
                    { style: r ? wt.inputStyle : wt.collapsedInputStyle },
                    o._renderAudienceControls(g),
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
                    f && !v
                      ? C.a.createElement(Un.a, { index: a, isCardPreviewTombstoned: Object(ft.a)(u), urls: f })
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
                  v = t.richTextInputContext,
                  y = o.state.isFocused,
                  g = a.text,
                  b = 0 === c && p,
                  _ = !!v,
                  w = v || {},
                  E = w.dismissComposerCommandName,
                  T = w.element,
                  S = w.sendTweetCommandName,
                  x = d && !v && !l,
                  O = v
                    ? {
                        onChange: o._getHandleRichTextChange(e),
                        richTextInputContext: {
                          dismissComposerCommandName: E,
                          editorState: o.state.editorState,
                          element: T,
                          sendTweetCommandName: S,
                        },
                      }
                    : { onChange: o._getHandlePlainTextChange(e) }
                return C.a.createElement(
                  Dn.a,
                  r()(
                    {
                      appTextSize: 'headline1',
                      ariaLabel: fa,
                      autoFocus: n || (s && !u),
                      closeButton:
                        s && (o._deleteNonemptyTweetstormComposerEnabled || o._isEmpty()) && !b
                          ? o._renderCloseButton()
                          : void 0,
                      contentBelow: o._renderTweetAttachment(),
                      editable: i,
                      inputStyle: [wt.textInputStyle, x && wt.textInputMobileCollapsed],
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
                      testID: ''.concat(In).concat(c),
                      useCacheForDOMMeasurements: y,
                      value: g,
                    },
                    O,
                  ),
                )
              }),
              _()(
                p()(o),
                '_getHandleRichTextChange',
                Object(ia.a)(function (e) {
                  return function (t) {
                    e(t), o._handleRichTextChange(t)
                  }
                }),
              ),
              _()(
                p()(o),
                '_getHandlePlainTextChange',
                Object(ia.a)(function (e) {
                  return function (t) {
                    e(t), o._handlePlainTextChange(t)
                  }
                }),
              ),
              _()(p()(o), '_renderCommunityTweetFromProtectedUserCallout', function () {
                var e = o.props,
                  t = e.index,
                  n = e.isCommunityTweetFromProtectedUser
                return 0 === t && n ? C.a.createElement(fn, null) : null
              }),
              _()(p()(o), '_renderAudienceControls', function (e) {
                var t = o.props,
                  n = t.audienceControlsValue,
                  a = t.index,
                  r = t.isSuperFollowsCreator,
                  i = o.context.featureSwitches.isTrue('c9s_participation_enabled'),
                  c = o.context.featureSwitches.isTrue('super_follow_exclusive_tweet_creation_api_enabled')
                return o._shouldRenderControls(e, 'audience') && 0 === a && (i || c)
                  ? C.a.createElement(we, {
                      audienceControlsValue: n,
                      isC9sParticipationEnabled: i,
                      isSuperFollowsCreator: r && c,
                      onAudienceControlsValueChange: o._handleAudienceControlsValueChange,
                    })
                  : null
              }),
              _()(p()(o), '_renderCommunitiesRulesEducation', function () {
                return o.shouldRenderCommunitiesRules ? C.a.createElement(He, null) : null
              }),
              _()(p()(o), '_renderCommunitiesRules', function (e) {
                var t = o.props.audienceControlsValue.communityIdValue || void 0
                return o.shouldRenderCommunitiesRules && t
                  ? C.a.createElement(De, { selectedCommunityId: t, showMiddot: !e })
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
                return C.a.createElement(gn.a, {
                  onPress: o._handlePressScheduledTweetLegend,
                  scheduledFor: e,
                  testID: kn,
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
                return C.a.createElement(ut.a, {
                  onEmojiSelect: o._handleInsertEmoji,
                  size: 'medium',
                  style: o._getEmojiPickerButtonStyles(),
                  textInputRef: o._textInputRef || void 0,
                })
              }),
              _()(
                p()(o),
                '_getEmojiPickerButtonStyles',
                Object(ia.a)(function () {
                  return [wt.iconEmojiPicker, wt.toolBarButton]
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
                  p = t.conversationControlsValue !== Ve.a.all
                return Boolean(i || !d || (c && '' === s && !a.length) || p || r.length > 0)
              }),
              _()(p()(o), '_renderSchedulingButton', function () {
                return C.a.createElement(me.a, {
                  accessibilityLabel: ha,
                  behavioralEventContext: Ha,
                  disabled: o._isSchedulingDisabled(),
                  hoverLabel: { label: Ca },
                  icon: Na,
                  onClick: o._handleClickScheduler,
                  size: 'medium',
                  style: wt.toolBarButton,
                  testID: On,
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
                return C.a.createElement(me.a, {
                  accessibilityLabel: ga,
                  hoverLabel: { label: _a },
                  icon: Ma,
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
                  { onClick: o._handleFocus, style: [wt.attachmentContainer, wt.tweetAttachmentArea], testID: En },
                  r.length > 0
                    ? C.a.createElement(ra, {
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
                        style: wt.mediaPreview,
                      })
                    : null,
                  a ? o._renderMediaActions() : null,
                  i
                    ? C.a.createElement(dn, {
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
                      An.a,
                      null,
                      C.a.createElement(yn.a, {
                        entities: n.richText.entities,
                        rtl: n.richText.rtl,
                        text: n.richText.text,
                      }),
                    )
                  : C.a.createElement(vn.a, {
                      isCondensed: t.length > 0,
                      style: wt.quoteTweet,
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
                  { style: wt.toolBar, testID: Pn },
                  C.a.createElement(
                    U.a,
                    { style: wt.toolBarIconsContainer },
                    C.a.createElement(xt, {
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
                    { style: wt.toolBarIconsContainer },
                    e ? o._renderCountdownCircle() : null,
                    (s && !l) || !e
                      ? null
                      : C.a.createElement(
                          C.a.Fragment,
                          null,
                          C.a.createElement(U.a, { style: wt.separator }),
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
                var t = jn.a.replaceCarriageReturns(e.target.value)
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
                a ? n({ text: va }) : r(e)
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
                return x.c(t.concat(e))
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
              _()(p()(o), '_handlePollChange', Object(ca.a)(o._updatePoll, 200, { leading: !0, trailing: !0 })),
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
                return La(Math.ceil(e / o._userLanguageWeight))
              }),
              _()(p()(o), '_getPlaceHolderText', function () {
                var e = o.props,
                  t = e.data,
                  n = t.pollActive,
                  a = t.quotedStatus,
                  r = e.index,
                  i = e.isReply,
                  c = e.isSelfThreadReply
                return a ? ka : n ? Da : i && !c ? Aa : c || r > 0 ? Pa : Ia
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
                Object(ia.a)(function (e) {
                  var t = da.a[o.props.twitterTextConfigurationVersion]
                  return la()(e, t)
                }),
              ),
              _()(p()(o), '_isEmpty', function () {
                var e = o.props.data
                return Object(vt.c)(e)
              }),
              _()(p()(o), '_isScheduled', function () {
                var e = o.props.data.scheduledFor
                return Object(yt.h)(e)
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
              (o._userLanguageWeight = l && ja.indexOf(l) > -1 ? 2 : 1),
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
                      return e.mediaFile && !(e.mediaFile instanceof ht.a) && e.mediaFile.isVideo
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
                    p = s < L.a.theme.breakpoints.small
                  return C.a.createElement(
                    U.a,
                    {
                      onClick: this._handleWrapperClick,
                      onFocus: this._handleFocus,
                      style: [wt.root, !a && wt.blurStyle],
                    },
                    this._renderCommunityTweetFromProtectedUserCallout(),
                    C.a.createElement(
                      Ln.a,
                      {
                        avatarCell: C.a.createElement(
                          C.a.Fragment,
                          null,
                          l
                            ? C.a.createElement(Mn.a.Consumer, null, function (e) {
                                var t = e.avatarSize
                                return C.a.createElement(Bn.a, {
                                  accessibilityLabel: c ? c.name : void 0,
                                  screenName: c ? c.screen_name : void 0,
                                  size: t,
                                  style: wt.avatar,
                                  uri: c ? c.profile_image_url_https : void 0,
                                  withLink: o,
                                })
                              })
                            : null,
                          i
                            ? null
                            : C.a.createElement(U.a, {
                                style: [wt.conversationLine, !l && wt.conversationLineWithOverflow],
                              }),
                        ),
                        avatarCellStyle: r ? wt.avatarContainerExpanded : wt.avatarContainer,
                        cellStyle: wt.rightColumn,
                      },
                      this._renderScheduledTweetLegend(),
                      C.a.createElement(
                        U.a,
                        { onFocus: this._handleEditorFocus, style: wt.inputArea },
                        C.a.createElement(
                          Fn.a,
                          {
                            allowDragDrop: !this.mediaAttachDisabled,
                            onDragEnter: this._handleFocus,
                            onFilesAdded: this._handleFilesAdded,
                            style: wt.dragDrop,
                          },
                          function (t) {
                            return C.a.createElement(
                              C.a.Fragment,
                              null,
                              C.a.createElement(U.a, { style: wt.composeBoxContainer }, e._renderMainContent()),
                            )
                          },
                        ),
                      ),
                      this._renderCommunitiesRulesEducation(),
                      C.a.createElement(
                        U.a,
                        { style: [(d || n) && wt.controlsContainer, p ? wt.mobileControlsLayout : wt.controlsLayout] },
                        this._renderConversationControls(u),
                        this._renderCommunitiesRules(p),
                        n ? this._renderTaggedLocation(n) : null,
                      ),
                      C.a.createElement(Nn.b, { show: a && r }, this._renderToolbar(u)),
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
                  return C.a.createElement(pt.a, {
                    enabled: !c,
                    gifSearchKeySource: mt.a.Composition,
                    history: r,
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
                    a = t.pollActive,
                    r = t.quotedStatus,
                    o = e.loggedInUser,
                    i = this._isScheduled(),
                    c = !(!(a || n.length || r || i) && o)
                  return C.a.createElement(me.a, {
                    accessibilityLabel: ma,
                    behavioralEventContext: Va,
                    disabled: c,
                    hoverLabel: { label: wa },
                    icon: Fa,
                    onPress: this._handlePollAdd,
                    size: 'medium',
                    style: wt.toolBarButton,
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
                    a = e.loggedInUser,
                    r = !(n && a),
                    o = t ? C.a.createElement(Kn.a, null) : C.a.createElement(Gn.a, null)
                  return C.a.createElement(me.a, {
                    accessibilityLabel: Ea,
                    behavioralEventContext: za,
                    disabled: r,
                    hoverLabel: { label: Ea },
                    icon: o,
                    onPress: this._handleGeoButtonClick,
                    size: 'medium',
                    style: wt.toolBarButton,
                    testID: Sn,
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
                    { style: wt.imageActions },
                    t && t.url && t.provider
                      ? C.a.createElement(
                          U.a,
                          { style: wt.addImageTextPadding },
                          C.a.createElement(dt.a, { gifUrl: t.url, provider: t.provider }),
                        )
                      : null,
                    (!this.hasAttachedImage && !o) || this._isScheduled()
                      ? null
                      : C.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: xa,
                            color: 'gray700',
                            link: '/compose/tweet/tags',
                            style: [wt.addImageTextContainer, wt.addImageTextPadding],
                          },
                          a ? this._renderTaggedUsers() : this._renderTagPeopleLabel(),
                        ),
                    this.hasAttachedImage || r
                      ? C.a.createElement(
                          D.b,
                          {
                            accessibilityLabel: Ta({ numberOfImages: n.length }),
                            color: 'gray700',
                            link: { pathname: '/compose/tweet/media', state: { mediaId: n[0].id, tab: 'alt_text' } },
                            onPress: this._handleClickAltTextShortcut,
                            style: wt.addImageTextContainer,
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
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: Cn },
                    C.a.createElement(Xn.a, { style: wt.addImageActionIcon }),
                    xa,
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
                    D.b,
                    { color: 'gray700', size: 'subtext2', testID: Rn },
                    C.a.createElement(Zn.a, { style: wt.addImageActionIcon }),
                    C.a.createElement(Hn.a, { loggedInUserId: null == n ? void 0 : n.id_str, users: a }),
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
                          D.b,
                          { color: 'gray700', size: 'subtext2', testID: wn },
                          C.a.createElement(Qn.a, { style: wt.addImageActionIcon }),
                          Sa({ numberOfAltTextEntries: this._getNumberOfAltTextEntries() }),
                        )
                      : C.a.createElement(
                          D.b,
                          { color: 'gray700', numberOfLines: 1, size: 'subtext2', testID: wn },
                          C.a.createElement(Qn.a, { style: wt.addImageActionIcon }),
                          null == t ? void 0 : t.altText,
                        )
                    : C.a.createElement(
                        D.b,
                        { color: 'gray700', size: 'subtext2', testID: wn },
                        C.a.createElement(Yn.a, { style: wt.addImageActionIcon }),
                        Ta({ numberOfImages: e.length }),
                      )
                },
              },
              {
                key: '_renderSubtitlesLabel',
                value: function () {
                  var e = this.props.data.media,
                    t = this.attachedSubtitles ? Jn.a : $n.a
                  return C.a.createElement(
                    D.b,
                    {
                      accessibilityRole: 'button',
                      color: 'gray700',
                      link: { pathname: '/compose/tweet/media', state: { mediaId: e[0].id, tab: 'subtitles' } },
                      onPress: this._handleClickSubtitlesShortcut,
                      size: 'subtext2',
                      style: wt.addImageTextContainer,
                      testID: _n,
                    },
                    C.a.createElement(t, {
                      accessibilityLabel: this.attachedSubtitles ? Ra : void 0,
                      style: wt.addImageActionIcon,
                    }),
                    this.attachedSubtitles ? this.attachedSubtitles.displayName : Oa,
                  )
                },
              },
              {
                key: '_renderCountdownCircle',
                value: function () {
                  var e = this.props,
                    t = e.data.text,
                    n = e.twitterTextConfigurationVersion,
                    a = da.a[n],
                    r = this._getParsedTweet(t).weightedLength
                  return C.a.createElement(Vn.a, {
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
                  return C.a.createElement(me.a, {
                    accessibilityLabel: ya,
                    behavioralEventContext: Ua,
                    disabled: s,
                    hoverLabel: { label: ba },
                    icon: Ba,
                    link: !a || i || s ? void 0 : '/compose/tweet',
                    onPress: o,
                    size: 'xSmall',
                    testID: bn,
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
                      return e.mediaFile && !(e.mediaFile instanceof ht.a) && e.mediaFile.isVideo
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
                      return e.mediaFile && !(e.mediaFile instanceof ht.a) && e.mediaFile.isVideo
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
      _()(Wa, 'contextType', ue.a),
        _()(Wa, 'defaultProps', { twitterTextConfigurationVersion: 'defaults', withAvatar: !0 })
      var qa = Object(Qe.a)(Wa),
        Ka = C.a.createElement(D.b, { weight: 'bold' }),
        Ga = C.a.createElement(D.b, { color: 'link' }),
        Xa = function (e) {
          return '@'.concat(e)
        },
        Za = n('SrIh'),
        Ya = function (e) {
          return (null == e ? void 0 : e.screen_name) || ''
        },
        Qa = function (e) {
          var t = e.communityName,
            n = e.excludedRecipients,
            a = e.inReplyToStatus,
            r = e.loggedInUserId,
            o = {
              replyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'e34022a7' },
                  C.a.cloneElement(Ga, null, B.a.b50e199a({ userName: Xa(t) })),
                )
              },
              replyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'bfd9c99a' },
                  C.a.cloneElement(Ga, null, B.a.f2e4dd37({ replyUserName: Xa(t), otherUserName: Xa(n) })),
                )
              },
              replyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'g7a1000e' },
                  C.a.cloneElement(
                    Ga,
                    null,
                    B.a.eccfddc3({ userOneName: Xa(t), userTwoName: Xa(a), userThreeName: Xa(n) }),
                  ),
                )
              },
              replyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i558c201' },
                  C.a.cloneElement(Ga, null, B.a.h758cd22({ userOneName: Xa(n), userTwoName: Xa(a), othersCount: t })),
                )
              },
              communityReplyToOne: function (e) {
                var t = e.communityName,
                  n = e.userName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'j935bcde', communityName: t },
                  C.a.cloneElement(Ga, null, B.a.e9f8a0eb({ userName: Xa(n) })),
                )
              },
              communityReplyToTwo: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'i7bd9c8e', communityName: t },
                  C.a.cloneElement(Ga, null, B.a.df7e9fbc({ replyUserName: Xa(n), otherUserName: Xa(a) })),
                )
              },
              communityReplyToThree: function (e) {
                var t = e.communityName,
                  n = e.userOneName,
                  a = e.userThreeName,
                  r = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cfa0049d', communityName: t },
                  C.a.cloneElement(
                    Ga,
                    null,
                    B.a.b45fa505({ userOneName: Xa(n), userTwoName: Xa(r), userThreeName: Xa(a) }),
                  ),
                )
              },
              communityReplyToMany: function (e) {
                var t = e.communityName,
                  n = e.othersCount,
                  a = e.userOneName,
                  r = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'jfc8e4b4', communityName: t },
                  C.a.cloneElement(Ga, null, B.a.a4383815({ userOneName: Xa(a), userTwoName: Xa(r), othersCount: n })),
                )
              },
              exclusiveReplyToOne: function (e) {
                var t = e.userName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'a4e11010' },
                  C.a.cloneElement(Ga, null, B.a.ff792e35({ userName: Xa(t) })),
                  C.a.cloneElement(Ka, null, B.a.a18d8f1c),
                )
              },
              exclusiveReplyToTwo: function (e) {
                var t = e.userOneName,
                  n = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'cf1b3321' },
                  C.a.cloneElement(Ga, null, B.a.g7d5e985({ replyUserName: Xa(t), otherUserName: Xa(n) })),
                  C.a.cloneElement(Ka, null, B.a.af82725c),
                )
              },
              exclusiveReplyToThree: function (e) {
                var t = e.userOneName,
                  n = e.userThreeName,
                  a = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'c83d647e' },
                  C.a.cloneElement(
                    Ga,
                    null,
                    B.a.fe5a61e9({ userOneName: Xa(t), userTwoName: Xa(a), userThreeName: Xa(n) }),
                  ),
                  C.a.cloneElement(Ka, null, B.a.f7126257),
                )
              },
              exclusiveReplyToMany: function (e) {
                var t = e.othersCount,
                  n = e.userOneName,
                  a = e.userTwoName
                return C.a.createElement(
                  B.a.I18NFormatMessage,
                  { $i18n: 'fec57cab' },
                  C.a.cloneElement(Ga, null, B.a.bc9dd514({ userOneName: Xa(n), userTwoName: Xa(a), othersCount: t })),
                  C.a.cloneElement(Ka, null, B.a.de5071ba),
                )
              },
            },
            i = x.a({ inReplyToStatus: a, loggedInUserId: r }).filter(function (e) {
              var t = e.id_str
              return n.indexOf(t) < 0
            }),
            c = a.retweeted_status || a,
            s = c.exclusivity_info,
            l = c.user,
            u = i.filter(function (e) {
              return e.id_str !== l.id_str
            }),
            d = Ee()(u, 2),
            p = d[0],
            m = d[1],
            h = [l, p, m].map(Ya),
            f = Ee()(h, 3),
            v = f[0],
            y = f[1],
            g = f[2],
            b = i.length - 2
          switch (i.length) {
            case 0:
              return Object(Za.a)('Compose reply context should not have 0 recipients'), null
            case 1:
              return t
                ? o.communityReplyToOne({ communityName: t, userName: v })
                : s
                ? o.exclusiveReplyToOne({ userName: v })
                : o.replyToOne({ userName: v })
            case 2:
              return t
                ? o.communityReplyToTwo({ communityName: t, userOneName: v, userTwoName: y })
                : s
                ? o.exclusiveReplyToTwo({ userOneName: v, userTwoName: y })
                : o.replyToTwo({ userOneName: v, userTwoName: y })
            case 3:
              return t
                ? o.communityReplyToThree({ communityName: t, userOneName: v, userTwoName: y, userThreeName: g })
                : s
                ? o.exclusiveReplyToThree({ userOneName: v, userTwoName: y, userThreeName: g })
                : o.replyToThree({ userOneName: v, userTwoName: y, userThreeName: g })
            default:
              return t
                ? o.communityReplyToMany({ communityName: t, userOneName: v, userTwoName: y, othersCount: b })
                : s
                ? o.exclusiveReplyToMany({ userOneName: v, userTwoName: y, othersCount: b })
                : o.replyToMany({ userOneName: v, userTwoName: y, othersCount: b })
          }
        },
        Ja = C.a.memo(Qa),
        $a = n('fs1G'),
        er = n('BLtI'),
        tr = n('kY28')
      function nr(e) {
        null == e || e.preventDefault()
      }
      var ar = L.a.create(function (e) {
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
        rr = function (e) {
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
              ? C.a.createElement(er.b, {
                  conversationPosition: { isStart: !0 },
                  linkableQuotedTweet: !1,
                  linkify: !1,
                  onAnalyticsClick: $a.a,
                  onAvatarClick: nr,
                  onEntityClick: nr,
                  onMediaClick: nr,
                  onReplyContextClick: nr,
                  replyContext: tr.a.ReplyContextTypes.None,
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
              { style: ar.replyUsersContainer },
              C.a.createElement(
                Ln.a,
                {
                  avatarCell: s ? C.a.createElement(U.a, { style: ar.conversationLine }) : null,
                  avatarCellStyle: ar.conversationLineContainer,
                  cellStyle: ar.repliesTextContainer,
                  style: ar.grid,
                },
                i
                  ? C.a.createElement(
                      D.b,
                      { accessibilityRole: 'button', color: 'gray700', onPress: o, style: s && ar.repliesMessage },
                      C.a.createElement(Ja, {
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
        or = n('Tb0w'),
        ir = n('1YZw'),
        cr = n('pidX'),
        sr = n('5oBF'),
        lr = n('JYYi'),
        ur = n('/Rsk'),
        dr = n('qlwE'),
        pr = n('XOJV'),
        mr = n('G6rE'),
        hr = n('AspN'),
        fr = n('oEGd'),
        vr = n('P1r1')
      function yr(e, t) {
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
      function gr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? yr(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : yr(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var br = function (e) {
          return e.parentTweetId || (e.isInline ? lr.a.homeTimeline : lr.a.modal)
        },
        _r = function (e, t) {
          var n = br(t)
          return $.l(e, n)
        },
        wr = function (e, t) {
          var n = br(t)
          return $.m(e, n)
        },
        Cr = function (e, t) {
          var n = br(t)
          return $.k(e, n)
        },
        Er = function (e, t) {
          var n = kr(e, t),
            a = Cr(e, t).communityIdValue || void 0,
            r = (null == n ? void 0 : n.community_id_str) || a,
            o = r ? R.c.select(e, r) : void 0
          return o ? o.name : void 0
        },
        Tr = function (e, t) {
          var n = br(t)
          return $.n(e, n)
        },
        Sr = function (e, t) {
          var n = br(t)
          return $.j(e, n)
        },
        xr = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        Or = Object(te.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          mr.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        Rr = function (e, t) {
          return t.parentTweetId || Ir(e, t) || Pr(e, t)
        },
        Ir = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        Pr = xr(function (e) {
          return e.inReplyToStatusId
        }),
        kr = function (e, t) {
          var n = Rr(e, t)
          return n ? pr.a.selectHydrated(e, n) : void 0
        },
        Ar = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        Dr = xr(function (e) {
          return e.hasArticleNudge
        }),
        jr = xr(function (e) {
          return e.convoCardData
        }),
        Lr = xr(function (e) {
          return e.externalMedia
        }),
        Mr = xr(function (e) {
          return e.externalMediaFiles
        }),
        Br = xr(function (e) {
          return e.previewTweetId
        }),
        Fr = xr(function (e) {
          return e.defaultText
        }),
        Nr = function (e, t) {
          var n = Fr(e, t),
            a = Object(cr.a)(t.location)
          return (Ar(0, t) ||
            (function (e, t) {
              return t.location.pathname.indexOf('/compose/tweet') > -1
            })(0, t)) &&
            a
            ? a
            : n
        },
        Hr = xr(function (e) {
          return e.quotedStatusId
        }),
        Vr = xr(function (e) {
          return e.quotedStatus
        }),
        Ur = function (e, t) {
          return (
            (function (e, t) {
              return t.quotedStatus ? t.quotedStatus : Vr(e, t)
            })(e, t) ||
            (function (e, t) {
              var n = Hr(e, t)
              return n ? pr.a.selectHydratedMemoized(e, n) : void 0
            })(e, t)
          )
        },
        zr = xr(function (e) {
          return e.isSelfThreadReply
        }),
        Wr = xr(function (e) {
          return e.positionCursorAtBeginning
        }),
        qr = xr(function (e) {
          return e.promotedContent
        }),
        Kr = function () {
          return Object(te.createSelector)(_r, Nr, Ur, hr.j, function (e, t, n, a) {
            return e.map(function (e, r) {
              return gr(
                gr({}, ((o = e).mediaIds, ze()(o, ['mediaIds']))),
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
        Gr = {
          addComposer: $.a,
          addToast: ir.b,
          createLocalApiErrorHandler: Object(oe.createLocalApiErrorHandlerWithContextFactory)('SCREEN_COMPOSE_V2'),
          checkTweetForNudge: $.b,
          deletePreviewTweet: sr.c,
          fetchAutotaggedLocationIfNeeded: ur.a,
          fetchTweetIfNeeded: pr.a.fetchOneIfNeeded,
          removeComposer: $.f,
          resetDraft: $.g,
          retweet: pr.a.retweet,
          schedule: $.i,
          draftTweet: $.e,
          send: $.r,
          updateActiveComposerIndex: $.t,
          updateAudienceControlsValue: $.u,
          updateConvoCardState: or.b,
          preUploadMedia: hr.e,
          addMedia: hr.b,
          processMultipleMedia: hr.g,
          removeMediaUpload: hr.i,
          updateSingleComposer: $.x,
          setActiveParentKey: $.s,
          copyDataFromInlineComposerToModalComposer: $.c,
          copyDataFromInlineReplyComposerToModalComposer: $.d,
        },
        Xr = Object(fr.e)(function () {
          return Object(te.createStructuredSelector)({
            activeComposerIndex: Sr,
            activeUser: Or,
            altTextNudgeType: vr.h,
            audienceControlsValue: Cr,
            composerData: Kr(),
            dataSaverMode: vr.k,
            excludedRecipients: wr,
            externalMedia: Lr,
            externalMediaFiles: Mr,
            geoEnabled: vr.p,
            hasArticleNudge: Dr,
            inReplyToStatus: kr,
            inReplyToStatusId: Rr,
            isIntentRoute: Ar,
            isSelfThreadReply: zr,
            isSending: Tr,
            isSuperFollowsCreator: ae.l,
            positionCursorAtBeginning: Wr,
            loggedInUser: mr.e.selectLoggedInUser,
            prepopulatedText: Nr,
            previewTweetId: Br,
            promotedContent: qr,
            scheduledFor: $.o,
            selectedCommunityName: Er,
            sendingProgress: $.p,
            convoCardData: jr,
            undoTweetSettings: dr.p,
            userLanguage: ae.o,
            quotedStatusId: Hr,
          })
        }, Gr),
        Zr = n('45mF'),
        Yr = n('c0ZR'),
        Qr = n('W5XZ'),
        Jr = n('lsKC'),
        $r = n('Drq4'),
        eo = n('I8M8'),
        to = n('7myi'),
        no = n('7nmT'),
        ao = n.n(no),
        ro = n('vbWy'),
        oo = n('Rp9C'),
        io = n('Q5Mu'),
        co = n('N5qz'),
        so = 'tweetButton',
        lo = 'tweetButtonInline',
        uo = Object(I.a)()
          .propsFromState(function () {
            return { loggedInUser: mr.e.selectLoggedInUser }
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
        po = n('cHvH'),
        mo = n('sgih'),
        ho = n('xKuM'),
        fo = n('5Vk4'),
        vo = L.a.create(function (e) {
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
            a = e.onActionButtonClick,
            r = e.onMaskClick,
            o = e.sheetType,
            i = e.showActionButton
          return C.a.createElement(po.a, null, function (e) {
            var c = e.windowWidth > L.a.theme.breakpoints.small
            return C.a.createElement(
              mo.a,
              { onMaskClick: r, style: vo.sheetStyle, type: o, withMask: !0 },
              i &&
                C.a.createElement(ho.a, {
                  leftControl: C.a.createElement(fo.a, { backButtonType: t, onClick: a }),
                  position: 'absolute',
                }),
              C.a.createElement(U.a, { style: [vo.mainCard, c ? vo.largeScreenCard : vo.smallScreenCard] }, n),
            )
          })
        },
        go = B.a.cb7c0987,
        bo = B.a.de3bcf27,
        _o = B.a.e710ce75,
        wo = B.a.h11e5910,
        Co = B.a.b7ec04f3,
        Eo = B.a.i62a03aa,
        To = L.a.create(function (e) {
          return {
            itemPadding: { marginVertical: e.spaces.space8 },
            buttonContainer: { paddingHorizontal: e.spaces.space20, width: '100%' },
          }
        }),
        So = function (e) {
          var t = e.onBack,
            n = e.onNo,
            a = e.onYes
          return C.a.createElement(
            yo,
            {
              actionButtonType: 'back',
              onActionButtonClick: t,
              onMaskClick: t,
              sheetType: 'full',
              showActionButton: !0,
            },
            C.a.createElement(D.b, { size: 'title4', style: To.itemPadding, weight: 'heavy' }, go),
            C.a.createElement(D.b, { color: 'gray700', style: To.itemPadding }, bo),
            C.a.createElement(D.b, { color: 'gray700', style: To.itemPadding }, _o),
            C.a.createElement(
              U.a,
              { style: To.buttonContainer },
              C.a.createElement(D.b, { size: 'title4', style: To.itemPadding, weight: 'heavy' }, wo),
              C.a.createElement(me.a, { onPress: a, style: To.itemPadding, type: 'brandOutlined' }, Co),
              C.a.createElement(me.a, { onPress: n, style: To.itemPadding, type: 'brandOutlined' }, Eo),
            ),
          )
        },
        xo = n('cm6r'),
        Oo = L.a.create(function (e) {
          return { button: { width: e.spaces.space72, height: e.spaces.space72, marginBottom: e.spaces.space12 } }
        }),
        Ro = function (e) {
          var t = e.icon,
            n = e.label,
            a = e.onPress
          return C.a.createElement(xo.a, { interactiveStyles: null, onPress: a }, function (e) {
            return C.a.createElement(
              C.a.Fragment,
              null,
              C.a.createElement(me.a, {
                icon: t,
                interactivityState: e,
                size: 'xLarge',
                style: Oo.button,
                type: 'primaryOutlined',
              }),
              C.a.createElement(D.b, { color: 'gray700' }, n),
            )
          })
        },
        Io = n('sjK1'),
        Po = n('FDY4'),
        ko = n('tevE'),
        Ao = n('jV+4'),
        Do = n('UgB4'),
        jo = n('TW8A'),
        Lo = n('hiGS'),
        Mo = n('WtWS'),
        Bo = n('Lsrn'),
        Fo = n('k/Ka')
      function No(e, t) {
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
      function Ho(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? No(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : No(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Vo = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Fo.a)(
          'svg',
          Ho(
            Ho({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Bo.a.root, e.style], viewBox: '0 0 24 24' },
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
      Vo.metadata = { width: 24, height: 24 }
      var Uo = Vo,
        zo = [
          { headlineText: B.a.f3a7a80c, subTextLine1: B.a.ge52d1de, subTextLine2: null },
          { headlineText: B.a.j311bf49, subTextLine1: B.a.ae42ebff, subTextLine2: B.a.aa350ab1 },
          { headlineText: B.a.j18b2956, subTextLine1: B.a.f6bee896, subTextLine2: B.a.dddd0995 },
          { headlineText: B.a.d02a94fa, subTextLine1: B.a.dddd0995, subTextLine2: null },
          { headlineText: B.a.i018b746, subTextLine1: B.a.b8d85df9, subTextLine2: B.a.d5ca11f0 },
        ],
        Wo = B.a.h11e5910,
        qo = B.a.abd845fd,
        Ko = B.a.bea869b3,
        Go = B.a.d96cf7cd,
        Xo = B.a.d3145da8,
        Zo = L.a.create(function (e) {
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
            thanksCheckMark: { color: L.a.theme.colors.primary, marginRight: e.spaces.space8 },
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
            c = e.onWeGotItWrong,
            s = e.tweetText,
            l = e.userName,
            u = e.userProfileImageUrl,
            d = e.userScreenName,
            p = C.a.useContext(ue.a).featureSwitches.getNumberValue('responsive_web_reply_nudge_copy_version'),
            m = zo[(p = p >= 0 && p <= 4 ? p : 0)]
          return C.a.createElement(po.a, null, function (e) {
            var p,
              h,
              f,
              v = e.windowWidth
            return C.a.createElement(
              yo,
              {
                actionButtonType: 'close',
                onActionButtonClick: r,
                onMaskClick: r,
                sheetType: 'full',
                showActionButton: v > L.a.theme.breakpoints.medium,
              },
              C.a.createElement(Uo, { style: [Zo.profanityIcon, Zo.itemPadding] }),
              C.a.createElement(ko.a, { size: 'title4', style: Zo.itemPadding, weight: 'heavy' }, m.headlineText),
              C.a.createElement(D.b, { color: 'gray700', style: Zo.itemPadding }, m.subTextLine1),
              C.a.createElement(D.b, { color: 'gray700', style: Zo.itemPadding }, m.subTextLine2),
              C.a.createElement(
                U.a,
                { style: [Zo.tweetContainer, Zo.itemPadding] },
                C.a.createElement(
                  U.a,
                  { style: Zo.tweetContent },
                  C.a.createElement(Ao.a, { name: l, profileImageUrl: u, screenName: d, style: Zo.userName }),
                  C.a.createElement(
                    U.a,
                    { style: Zo.tweetBody },
                    (function () {
                      if (0 === n.length) return null
                      var e = n.map(function (e) {
                        var t,
                          n,
                          a,
                          r = ''
                        if (e.externalMediaDetails) r = e.externalMediaDetails.stillMediaUrl
                        else if (e.mediaFile instanceof Io.c) r = e.mediaFile.thumbnail
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
                        { style: Zo.photos },
                        C.a.createElement(Po.a, {
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
                    C.a.createElement(D.b, { style: Zo.textStyle }, s),
                  ),
                ),
              ),
              t
                ? C.a.createElement(
                    U.a,
                    { style: Zo.thanksContainer },
                    C.a.createElement(Mo.a, { style: Zo.thanksCheckMark }),
                    C.a.createElement(D.b, { align: 'center', style: Zo.itemPadding }, Xo),
                  )
                : C.a.createElement(D.b, { align: 'center', onPress: c, style: Zo.itemPadding, withUnderline: !0 }, Wo),
              v > L.a.theme.breakpoints.small
                ? C.a.createElement(
                    U.a,
                    { style: Zo.buttonContainer },
                    C.a.createElement(me.a, { onPress: o, style: Zo.itemPadding, type: 'brandFilled' }, qo),
                    C.a.createElement(me.a, { onPress: i, style: Zo.itemPadding, type: 'brandOutlined' }, Ko),
                    C.a.createElement(me.a, { onPress: a, style: Zo.itemPadding, type: 'destructiveText' }, Go),
                  )
                : ((p = C.a.createElement(Do.a, { style: { color: L.a.theme.colors.text } })),
                  (h = C.a.createElement(jo.a, { style: { color: L.a.theme.colors.primary } })),
                  (f = C.a.createElement(Lo.a, { style: { color: L.a.theme.colors.red500 } })),
                  C.a.createElement(
                    U.a,
                    { style: Zo.mobileButtonContainer },
                    C.a.createElement(Ro, { icon: p, label: Ko, onPress: i }),
                    C.a.createElement(Ro, { icon: h, label: qo, onPress: o }),
                    C.a.createElement(Ro, { icon: f, label: Go, onPress: a }),
                  )),
            )
          })
        },
        Qo = uo(function (e) {
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
            m = Ee()(p, 2),
            h = m[0],
            f = m[1],
            v = C.a.useState(!1),
            y = Ee()(v, 2),
            g = y[0],
            b = y[1],
            _ = function (e) {
              var n = e.action,
                r = e.element,
                o = e.page
              t.scribe({ action: n, data: { nudge_id: a }, element: r, page: o, section: 'dialog' })
            }
          return h
            ? C.a.createElement(So, {
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
            : C.a.createElement(Yo, {
                hasSentFeedback: g,
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
        Jo = n('eb3s'),
        $o = n('JYMr'),
        ei = n('sCk0'),
        ti = n('3A2y'),
        ni = n('zrOZ'),
        ai = n('s1N3'),
        ri = n('4FGy'),
        oi = n('mN6z'),
        ii = n('eyty'),
        ci = n('rziq'),
        si = n('jTgF')
      function li(e, t) {
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
      function ui(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? li(Object(n), !0).forEach(function (t) {
                _()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : li(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function di(e) {
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
          return v()(this, n)
        }
      }
      var pi = B.a.d28215f0,
        mi = B.a.ec909a54,
        hi = B.a.jd53409d,
        fi = {
          singular: B.a.edae65de,
          plural: B.a.a859846a,
          oneOfMultiple: B.a.e90118f5,
          someOfMultiple: B.a.c211dcb1,
        },
        vi = { singular: B.a.d7c26bfb, plural: B.a.a75e3ccc },
        yi = B.a.dcb7e3a0,
        gi = function (e) {
          var t,
            n,
            a = e.numberOfDescriptionsMissing,
            r = a === e.numberOfImages
          return (
            1 === a
              ? ((n = vi.singular), (t = r ? fi.singular : fi.oneOfMultiple))
              : ((n = vi.plural), (t = r ? fi.plural : fi.someOfMultiple)),
            ''.concat(t, ' ').concat(n, ' ').concat(yi)
          )
        },
        bi = B.a.c1bf53b0,
        _i = B.a.bb8170da,
        wi = B.a.dad5a4b8,
        Ci = B.a.e65aed64,
        Ei = B.a.bc2ceaf2,
        Ti = B.a.d8222374,
        Si = B.a.j890123a,
        xi = B.a.bb01231c,
        Oi = B.a.d4ab68e2,
        Ri = B.a.d8af8a4c,
        Ii = B.a.d09d4c05,
        Pi = B.a.i2209530,
        ki = B.a.bf9b89e4,
        Ai = B.a.f277e949,
        Di = B.a.b551cd22,
        ji = B.a.f026a7fa,
        Li = B.a.a5d4fda0,
        Mi = B.a.ib067d6a,
        Bi = S.canUseDOM && document.documentElement && 'scrollBehavior' in document.documentElement.style,
        Fi = { element: 'alt_text_prompt' },
        Ni = { component: 'article_nudge' },
        Hi = { viewType: 'send_tweet' },
        Vi = Object.freeze({ Original: 'original', Reply: 'reply', Quote: 'quote', Thread: 'thread' }),
        Ui = (function (e) {
          h()(n, e)
          var t = di(n)
          function n(e, a) {
            var r, o, c
            s()(this, n),
              (c = t.call(this, e, a)),
              _()(p()(c), '_getParentKey', function () {
                var e = c.props,
                  t = e.isInline
                return e.parentTweetId || (t ? lr.a.homeTimeline : lr.a.modal)
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
                  a = ao.a.findDOMNode(c._composerRefs[t])
                if (a instanceof window.Element) {
                  var r = a.getBoundingClientRect(),
                    o = r.bottom,
                    i = r.top,
                    s = Math.max(i, window.scrollY)
                  if (s < window.pageYOffset || o > window.innerHeight) {
                    var l = n ? s - n() - 14 : s - 14,
                      u = Math.max(l, 0)
                    window.requestAnimationFrame(function () {
                      Bi ? window.scrollTo({ top: u, left: 0, behavior: 'smooth' }) : window.scrollTo(0, u)
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
                !a && r && n(r).catch(t(Qr.a)), !o && i && n(i).catch(t(Qr.a))
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
                  : !('POP' === t && i && c._areComposersEmptyOrUnchanged && !Object(vt.a)(a)) || (c._resetDraft(), !0)
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
                    ? (c.setState({ showAltTextPrompt: !0 }), void c._scribe(ui(ui({}, Fi), {}, { action: 'show' })))
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
                  return C.a.createElement(rr, {
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
                return C.a.createElement(Jo.a, {
                  Icon: $r.a,
                  cancelButtonLabel: _i,
                  confirmButtonLabel: bi({ numOfDescriptions: t }),
                  headline: hi,
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
                return C.a.createElement(Qo, {
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
                  var a = c.props,
                    r = a.analytics,
                    o = a.createLocalApiErrorHandler
                  if (Object(si.d)(n) && n.code === eo.b.CANCELED) return r.scribeAction(e), Promise.resolve()
                  var i = Object(si.b)(n)
                  if (i) return c.setState({ errorMessage: i }), Promise.resolve()
                  o(ui({}, t || Object(Zr.a)(void 0, !1)))(n)
                  var s = n instanceof T.a && (null == t ? void 0 : t[n.errors[0].code])
                  c.setState({ errorMessage: { text: s ? s.toast.text : Li } })
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
                    var a = Object(yt.c)(i.scheduledFor)
                    if (a) {
                      var r = Object(yt.b)(a),
                        o = Object(yt.i)(a),
                        s = Di({ scheduleDate: r, scheduleTime: o })
                      t({ text: s, action: { label: Ai, link: '/compose/tweet/unsent/scheduled' } }),
                        c._scribeTweetSent(n[0], ui(ui({}, e), {}, { id_str: e.scheduled_id_str }), { isScheduled: !0 })
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
                      t({ text: ki, action: { label: Ai, link: '/compose/tweet/unsent/drafts' } }),
                      c._scribeTweetSent(n[0], ui(ui({}, e), {}, { id_str: e.draft_id_str }), { isDraftTweet: !0 }),
                      c._updateConvoCardState(),
                      c._close()
                  })
                  .catch(c._handleTweetError('draft_tweet_cancel', io.a))
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
                  v = r.conversationControlsValue,
                  y = r.exclusivityControlValue,
                  g = void 0 === y ? void 0 : y,
                  b = c.isPreview,
                  _ = c.props.composerData.map(function (e) {
                    return c._getSingleComposerDataWithLatestText(e)
                  }),
                  w = Object(yt.c)(_[0].scheduledFor)
                if (w) {
                  var C = Object(yt.b)(w),
                    E = Object(yt.i)(w),
                    T = Di({ scheduleDate: C, scheduleTime: E })
                  return n({ text: T, action: { label: Ai, link: '' } }), void c._close()
                }
                if (
                  (i.length > 0 && a.scribe({ element: 'mentions', action: 'edited' }),
                  c._conversationControlsCreationEnabled)
                )
                  if ('community' === v) a.scribe({ action: 'send_community_tweet' })
                  else if ('by_invitation' === v) {
                    var S = c._getSingleComposerDataWithLatestText(_[0]).text,
                      O = Object(x.d)(S)
                    a.scribe({
                      action: O ? 'send_mentioned_tweet_with_mentions' : 'send_mentioned_tweet_without_mentions',
                    })
                  } else 'followers' === v && a.scribe({ action: 'send_my_followers_tweet' })
                var R = (null == u ? void 0 : u.community_id_str) || r.communityIdValue || void 0,
                  I = R ? '8.31.'.concat(R) : '',
                  P = o ? (R ? [o, I].join(',') : o) : I
                f({
                  sendData: _,
                  communityIdValue: R,
                  conversationControlsValue: v,
                  excludedRecipients: i,
                  exclusivityControlValue: g,
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
                    var a = e.length > 1 ? Ci : wi
                    if (R && h) {
                      var r = h,
                        o = e.length
                      a = mi({ numOfTweets: o, communityName: r })
                    }
                    var i = b && c.isReply
                    if (i || !b) {
                      var l = i ? e[0].in_reply_to_status_id_str : e[0].id_str
                      n({
                        text: i ? Ei : a,
                        action: { label: Ai, link: '/'.concat(t ? t.screen_name : 'i', '/status/').concat(l || '') },
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
                      (Object(si.d)(e) && e.code === eo.b.CANCELED) ||
                        a.scribe({ action: 'send_tweet_failure', data: d }),
                      _.length > 1 && c._scribeThreadSent(_, r, 'thread_send_failure'),
                      r.length &&
                        l.replace({
                          pathname: p.pathname,
                          state: ui(
                            ui({}, Object(ti.a)(p.state || {}, 'quotedStatus')),
                            {},
                            { inReplyToStatusId: r[r.length - 1].id_str, isSelfThreadReply: !0 },
                          ),
                        }),
                      e)
                    )
                  })
                  .catch(c._handleTweetError('send_tweet_cancel', io.a))
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
                  h = { items: [oo.a.getTweetItem(t)] },
                  f = e.pollActive && e.pollValid,
                  v = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.altText)
                  }),
                  y = e.mediaTags.length,
                  g = Object(ni.a)(
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
                    r && c._scribe(ui(ui({}, Ni), {}, { element: 'result', action: 'retweet_with_comment' }), h)),
                  c.isReply && c._scribe({ component: b, action: ''.concat(m, 'reply') }, h),
                  f && c._scribe({ action: ''.concat(m, 'poll_tweet') }, h),
                  c._hasPhoto(e) &&
                    (c._scribe({ action: ''.concat(m, 'photo_tweet') }, h),
                    v && c._scribe({ action: ''.concat(m, 'photo_tweet_with_alt_text') }, h),
                    y && c._scribe({ action: ''.concat(m, 'photo_tweet_with_tags') }, h)),
                  c._hasVideo(e) &&
                    (c._scribe({ action: ''.concat(m, 'video_tweet') }, h),
                    y && c._scribe({ action: ''.concat(m, 'video_tweet_with_tags') }, h)),
                  g.size)
                ) {
                  var _ = c._hasPhoto(e) ? 'photo' : 'video'
                  g.forEach(function (e) {
                    c._scribe({ action: ''.concat(m).concat(_, '_tweet_with_').concat(e, '_warning') }, h)
                  })
                }
                var w = { page: 'nudge', section: 'dialog', element: 'result' }
                if (
                  (u &&
                    c.isReply &&
                    !l &&
                    (i
                      ? c._scribe(ui(ui({}, w), {}, { action: 'save' }), { nudge_id: u })
                      : c._scribe(ui(ui({}, w), {}, { action: 'sent' }), { nudge_id: u })),
                  u || i || !c.isReply || l || c._scribe(ui(ui({}, w), {}, { action: 'sent_no_nudge' })),
                  e.gifMetadata)
                ) {
                  var C = t.id_str && oo.a.getGifSearchItemForTweet(t.id_str, e.gifMetadata)
                  c._scribe({ element: 'remote', action: ''.concat(m, 'gif_tweet') }, { items: C ? [C] : [] })
                  var E = e.media.some(function (e) {
                    var t
                    return !(null === (t = e.mediaMetadata) || void 0 === t || !t.defaultAltText)
                  })
                  ;(v || E) &&
                    c._scribe(
                      { element: 'remote', action: ''.concat(m, 'gif_tweet_with_alt_text') },
                      { event_info: v ? 'user_entered' : 'from_provider', items: C ? [C] : [] },
                    ),
                    y && c._scribe({ action: ''.concat(m, 'gif_tweet_with_tags') }, h)
                } else c._hasGif(e) && (c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet') }, h), v && c._scribe({ element: 'local', action: ''.concat(m, 'gif_tweet_with_alt_text') }, h))
              }),
              _()(p()(c), '_scribeThreadSent', function (e, t, n) {
                var a = c.props.inReplyToStatus,
                  r = { items: [oo.a.getSendThreadItem(e, t.length, !!a)] }
                c._scribe({ action: n }, r)
              }),
              _()(p()(c), '_scribeRetweet', function (e) {
                var t = c.props.hasArticleNudge,
                  n = { items: [oo.a.getTweetItem(e)] }
                c._scribe({ action: 'retweet' }, n),
                  t && c._scribe(ui(ui({}, Ni), {}, { element: 'result', action: 'retweet' }), n)
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
                  a = c._canSaveDraft ? 'draft' : 'send'
                c.setState({ showDiscardTweetConfirmation: !1 }),
                  c._close(),
                  t.scribeAction(''.concat(a, '_tweet_discard')),
                  n && c._scribe(ui(ui({}, Ni), {}, { element: 'result', action: 'cancel' })),
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
                  (c._scribe(ui(ui({}, Fi), {}, { action: 'accepted' })),
                  e.push('/compose/tweet/media', { mediaId: t[0], cropTabEnabled: !1, showAllMedia: !0 }))
              }),
              _()(p()(c), '_handleIgnoreAltTextPrompt', function () {
                c._scribe(ui(ui({}, Fi), {}, { action: 'declined' })),
                  c.setState({ showAltTextPrompt: !1 }),
                  c._handleTweetOrRetweet()
              }),
              _()(p()(c), '_handleCancelAltTextPrompt', function () {
                c._scribe(ui(ui({}, Fi), {}, { action: 'cancel' })),
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
                  a.replace({ pathname: r.pathname, state: Object(ti.a)(r.state || {}, 'quotedStatus') }),
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
                  (c.setState({ textMap: ui(ui({}, n), {}, _()({}, t, e)) }, function () {
                    i && i(c._areComposersValid())
                  }),
                  c.setState({ errorMessage: void 0 }),
                  Ct.b.isIOS())
                ) {
                  var s = o ? 0 : r
                  c._updateSingleComposer({ text: e }, s)
                }
              }),
              _()(
                p()(c),
                '_handleTextOnBlur',
                Object(ia.a)(function (e, t) {
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
                      (c._updateSingleComposer({ pollActive: !1 }, 0), c.setState({ errorMessage: { text: pi } })),
                      (null == r ? void 0 : r.text) === pi && c.setState({ errorMessage: void 0 })
                }
                a(e, c._getParentKey())
              }),
              _()(p()(c), '_renderProgressBar', function () {
                var e = c.props,
                  t = e.isSending,
                  n = e.sendingProgress
                return C.a.createElement($o.a, { progress: t ? Math.max(n, 0.02) : 0, style: zi.progressBar })
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
                      return Object(Yr.a)(e)
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
                    v = f.pollActive,
                    y = Object(ii.e)(
                      null === (a = p()(c)) || void 0 === a || null === (r = a.context) || void 0 === r
                        ? void 0
                        : r.userClaims,
                    )
                  v ||
                    i(t, { location: ii.d.Tweet, canUploadLongVideo: y }).then(function (t) {
                      var a = t.map(function (e) {
                        return e.id
                      })
                      if (n._validateMedia(f, t)) {
                        var r = f.media.map(function (e) {
                          return e.id
                        })
                        c._updateSingleComposer({ mediaIds: Object(ai.a)(r.concat(a)) }, e),
                          m(t, { onFailure: c._handleMediaRemoveFactory(e) }).then(function (e) {
                            u ||
                              d(
                                e.map(function (e) {
                                  return e.id
                                }),
                              )
                          })
                      } else s({ text: Mi }), h(a)
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
                    return Object(ri.a)(e, n)
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
                var a = !Object(vt.c)(c._getSingleComposerDataWithLatestText(t[0]))
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
                    return Object(vt.e)(c._getSingleComposerDataWithLatestText(e))
                  })
                )
              }),
              _()(p()(c), '_areComposersEmptyOrUnchanged', function () {
                var e = c.props,
                  t = e.composerData,
                  n = e.prepopulatedText
                return t.every(function (e) {
                  return Object(vt.d)(c._getSingleComposerDataWithLatestText(e), n)
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
                return 'string' == typeof t[e.key] ? ui(ui({}, e), {}, { text: t[e.key] }) : e
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
              (c._throttledSyncTexts = Object(ca.a)(c._syncTexts, 1e3, { leading: !0, trailing: !1 })),
              (c._keyCommandHandlers =
                ((o = {}), _()(o, ci.b, c.handleTweetOrRetweet), _()(o, ci.a, c.handleDismissComposer), o)),
              (c._keyCommandHandlersForActiveTypeahead = _()({}, ci.b, c.handleTweetOrRetweet)),
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
                    var u = ui({}, null)
                    s && (u.text = s), t && t.cardUrl && (u.cardUrl = t.cardUrl), this._updateSingleComposer(u)
                  }
                  ;(s || (t && t.cardUrl) || n.length > 0 || a.length > 0) &&
                    !i &&
                    r.replace({
                      query: Object(cr.b)(c.query),
                      search: '',
                      pathname: c.pathname,
                      state: Object(ti.a)(Object(cr.b)(c.state || {}), [
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
                    r.length >= 25 && e.composerData.length < 25 && a({ text: ji }),
                    i.length > 0 && i !== e.externalMedia
                      ? this._attachExternalMedia(0)(i)
                      : c.length > 0 && c !== e.externalMediaFiles && this._handleAddMediaFiles(0)(c),
                    d && !Object(oi.a)(r, e.composerData) && d && d(this._areComposersValid()),
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
                    v = a.isInline,
                    y = a.isModal,
                    g = a.isSelfThreadReply,
                    b = a.isSending,
                    _ = a.isSuperFollowsCreator,
                    w = a.parentTweetId,
                    E = a.positionCursorAtBeginning,
                    T = a.richTextInputContext,
                    S = a.scheduledFor,
                    x = a.typeaheadWrapper,
                    O = a.userLanguage,
                    R = a.windowWidth,
                    I = this.state,
                    P = I.errorMessage,
                    k = I.focused,
                    A = I.shouldDisableButton,
                    D = I.showAltTextPrompt,
                    j = I.showDiscardTweetConfirmation,
                    L = I.showToxicReplyNudge,
                    M = I.typeaheadActive,
                    B = !y && M,
                    F = v ? 0 : this.props.activeComposerIndex,
                    N = B || v ? [u[F]] : u,
                    H = this._areComposersValid(),
                    V = this.hasNonCompliantQuote && this.isRetweet,
                    z = v ? U.a : ei.a,
                    W = v ? {} : { onAnimateComplete: y ? void 0 : this._handleAnimateComplete },
                    q = A || !H || V || this.isCommunityTweetFromProtectedUser,
                    K = (v && co.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet,
                    G = (v && co.a.isOneColumnSquishedLayout(R)) || this.isCommunityTweet || this.isExclusiveTweet
                  return C.a.createElement(
                    U.a,
                    { ref: this._setRootRef, style: !w && zi.root },
                    v ? this._renderProgressBar() : null,
                    P &&
                      C.a.createElement(
                        U.a,
                        { style: zi.inlineCallout },
                        C.a.createElement(Me.a, {
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
                        style: [zi.content, w && zi.contentInlineReply, y && zi.contentModal],
                      },
                      f ? this._renderReplyContext() : null,
                      l,
                      C.a.createElement(
                        z,
                        W,
                        N.map(function (e, t) {
                          var a = Object(yt.h)(e.scheduledFor),
                            l = u.indexOf(e),
                            w = p(e, t, N),
                            I =
                              y || v
                                ? C.a.createElement(
                                    me.a,
                                    {
                                      behavioralEventContext: Hi,
                                      disabled: q,
                                      onPress: n.handleTweetOrRetweet,
                                      size: 'medium',
                                      style: zi.inlineSendButton,
                                      testID: y ? so : lo,
                                      type: 'brandFilled',
                                    },
                                    Object(Jr.a)({
                                      inReplyToStatus: !!f,
                                      isSelfThreadReply: !!g,
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
                              qa,
                              r()(
                                {
                                  addToast: c,
                                  additionalToolbarContent: I,
                                  audienceControlsValue: s,
                                  autoFocus: n.isInlineReply && k,
                                  data: P,
                                  disableAddTweet: u.length >= 25,
                                  editable: !b && !!o,
                                  fetchAutotaggedLocationIfNeeded: n._fetchAutotaggedLocationIfNeeded,
                                  geoEnabled: m,
                                  hidePoll: K,
                                  hideScheduling: G,
                                  history: h,
                                  index: l,
                                  isActive: l === F && !b,
                                  isCommunityTweetFromProtectedUser: n.isCommunityTweetFromProtectedUser,
                                  isExpanded: 0 !== t || n._shouldBeExpanded(),
                                  isInline: v,
                                  isInlineReply: n.isInlineReply,
                                  isLast: v || l === u.length - 1,
                                  isReply: !!f || n.isInlineReply,
                                  isSelfThreadReply: !!g,
                                  isSuperFollowsCreator: _,
                                  keyCommandHandlers: n._getKeyCommandHandlers(),
                                  loggedInUser: o,
                                  onAddComposer: v ? d : i,
                                  onFilesAdded: n._handleAddMediaFiles(l),
                                  onFocus: n._handleComposerFocus,
                                  onRemoveComposer: n._handleRemoveComposer,
                                  onRemoveMedia: n._handleMediaRemove,
                                  onTextChange: n._handleTextChange,
                                  onTextInputBlur: n._handleTextOnBlur(P.key, t),
                                  onTypeaheadStateChange: n._handleTypeaheadStateChange,
                                  positionCursorAtBeginning: !!E,
                                  ref: n._setComposerRef(l),
                                  richTextInputContext: T,
                                  scheduledFor: S,
                                  setActiveParentKey: n._setActiveParentKey,
                                  twitterTextConfigurationVersion: 'version3',
                                  typeaheadActive: M,
                                  typeaheadWrapper: x,
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
                          ? C.a.createElement(Jo.a, {
                              cancelButtonLabel: Oi,
                              confirmButtonLabel: Pi,
                              headline: Ri,
                              onCancel: this._handleConfirmDiscardTweet,
                              onConfirm: this._handleDraftTweet,
                              onMaskClick: this._handleCancelDiscardTweet,
                              text: Ii,
                            })
                          : C.a.createElement(Jo.a, {
                              confirmButtonLabel: Oi,
                              confirmButtonType: 'destructiveFilled',
                              headline: this.isThread ? Si : Ti,
                              onCancel: this._handleCancelDiscardTweet,
                              onConfirm: this._handleConfirmDiscardTweet,
                              text: xi,
                            })
                        : null,
                      D ? this._renderAltTextPrompt() : null,
                      L ? this._renderToxicReplyNudge() : null,
                      C.a.createElement(U.a, { style: b && zi.mask }),
                    ),
                  )
                },
              },
              {
                key: '_scribe',
                value: function (e, t) {
                  this.props.analytics.scribe(ui(ui({}, e), {}, { data: t }))
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
                      !this.context.featureSwitches.isTrue('responsive_web_alt_text_nudges_enabled') || e !== E.a.prompt
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
                    ? Vi.Quote
                    : this.isThread
                    ? Vi.Thread
                    : this.isReply
                    ? Vi.Reply
                    : Vi.Original
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
      _()(Ui, 'defaultProps', {
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
        typeaheadWrapper: to.a,
      }),
        _()(Ui, 'contextType', ue.a),
        _()(Ui, '_validateMedia', function (e, t) {
          var n = e.media
          return Object(x.c)(n.concat(t))
        })
      var zi = L.a.create(function (e) {
        return {
          root: { paddingBottom: e.spaces.space4 },
          content: { paddingVertical: e.spaces.space4, backgroundColor: e.colors.cellBackground },
          contentModal: { borderBottomLeftRadius: e.borderRadii.xLarge, borderBottomRightRadius: e.borderRadii.xLarge },
          contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical },
          mask: ui({}, L.a.absoluteFillObject),
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
      t.a = Object(Qe.a)(Xr(Ui))
    },
    hqDb: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var a = n('97Jx'),
        r = n.n(a),
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
        v = n.n(f),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        _ = n.n(b),
        w = (n('2G9S'), n('ERkP')),
        C = n.n(w),
        E = n('k49u'),
        T = (n('LW0h'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        S = n('kGix'),
        x = n('G6rE'),
        O = n('rxPX'),
        R = n('0KEI'),
        I = function (e, t) {
          return t.userIds
        },
        P = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!x.e.select(e, t)
          })
        },
        k = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = x.e.selectFetchStatus(e, n)
            return (t[n] = a === S.a.NONE ? S.a.LOADING : a), t
          }, {})
        },
        A = Object(O.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(T.a)(P, function (e) {
                return e
              }),
              fetchStatus: Object(T.a)(P, k, I, function (e, t, n) {
                for (var a = S.a.LOADED, r = 0; r < n.length; r++) {
                  var o = n[r]
                  if (-1 === e.indexOf(o)) {
                    var i = t[o] || S.a.LOADING
                    a = a === S.a.LOADED ? i : a
                  }
                  if (a === S.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: x.e.fetchManyIfNeeded,
            }
          }),
        D = n('v//M'),
        j = n('3XMw'),
        L = n.n(j),
        M = n('pQ3Z'),
        B = n.n(M),
        F = (n('z84I'), n('cFuS')),
        N = n('Re5t'),
        H = n('MWbm'),
        V = n('88ay'),
        U = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return C.a.createElement(
            H.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : C.a.createElement(V.b, {
                    decoration: V.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: F.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      U.defaultProps = { displayMode: N.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var z = U
      function W(e) {
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
          return v()(this, n)
        }
      }
      var q = L.a.f5b426c2,
        K = { viewType: 'user_list' },
        G = A(
          (function (e) {
            h()(n, e)
            var t = W(n)
            function n() {
              var e
              s()(this, n)
              for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(o))),
                _()(p()(e), 'state', { allUsersUnavailable: !1 }),
                _()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a =
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
                  return C.a.createElement(z, r()({}, a, { userIds: n }))
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
                    B()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return C.a.createElement(D.a, {
                      accessibilityLabel: q,
                      behavioralEventContext: K,
                      fetchStatus: this.state.allUsersUnavailable ? S.a.LOADED : this.props.fetchStatus,
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
                      a = n.availableUserIds,
                      r = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      r(
                        ((e = {}),
                        _()(e, E.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        _()(e, E.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
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
          })(C.a.Component),
        )
      t.a = G
    },
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        o = n('ERkP'),
        i = n.n(o),
        c = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return i.a.createElement(c.a.Consumer, null, function (n) {
            return i.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
    },
    iY63: function (e, t, n) {
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
              d: 'M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
    o52z: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('VPAj'),
        r = Object(a.a)([])
      Object(a.a)({})
    },
    pcjM: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Compose', function () {
          return Ye
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
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        y = (n('2G9S'), n('MvUL'), n('KqXw'), n('uFXj'), n('ERkP')),
        g = n.n(y),
        b = n('HPNB'),
        _ = n('h5NW'),
        w = n('m3Bd'),
        C = n.n(w),
        E = (n('vrRf'), n('z84I'), n('5BYb'), n('xVN5')),
        T = n('pidX'),
        S = n('AspN'),
        x = n('XOJV'),
        O = n('G6rE'),
        R = n('xZGM'),
        I = n('0KEI'),
        P = n('hqKg'),
        k = n('oEGd'),
        A = n('rU/Q'),
        D = n('XpKj')
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = function (e) {
          return function (t, n) {
            var a = (function (e, t) {
              return t.location.state
            })(0, n)
            return a ? e(a) : void 0
          }
        },
        B = Object(P.createSelector)(
          function (e, t) {
            return t.activeUser
          },
          O.e.selectLoggedInUser,
          function (e, t) {
            return e || t
          },
        ),
        F = function (e, t) {
          var n = t.location.query
          return n && 'string' == typeof n.in_reply_to ? n.in_reply_to : void 0
        },
        N = M(function (e) {
          return e.inReplyToStatusId
        }),
        H = function (e, t) {
          return t.location.pathname.indexOf('/intent/') > -1
        },
        V = M(function (e) {
          return e.defaultText
        }),
        U = M(function (e) {
          return e.quotedStatus
        }),
        z = M(function (e) {
          return e.isSelfThreadReply
        }),
        W = M(function (e) {
          return e.hideUnsentTweetsButton
        }),
        q = M(function (e) {
          return e.headingSubtitle
        }),
        K = M(function (e) {
          return e.headingTitle
        }),
        G = M(function (e) {
          return e.selectedCommunityId
        }),
        X = Object(P.createSelector)(
          function (e) {
            return E.l(e, '')
          },
          function (e, t) {
            var n = V(e, t)
            return Object(T.a)(t.location) || n
          },
          function (e, t) {
            return t.quotedStatus ? t.quotedStatus : U(e, t)
          },
          S.j,
          H,
          function (e, t, n, a, r) {
            return e.map(function (e, o) {
              return L(
                L({}, ((i = e).cardUrl, i.mediaIds, C()(i, ['cardUrl', 'mediaIds']))),
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
        Z = Object(P.createStructuredSelector)({
          activeUser: B,
          composerData: X,
          draftTweets: A.e,
          inReplyToStatus: function (e, t) {
            var n = F(0, t) || N(e, t)
            return n ? x.a.selectHydrated(e, n) : void 0
          },
          inReplyToStatusId: F,
          isIntentRoute: H,
          isSelfThreadReply: z,
          isSending: function (e) {
            return E.n(e, '')
          },
          scheduledTweets: D.f,
          sendingProgress: E.p,
          composeSemanticCoreId: M(function (e) {
            return e.composeSemanticCoreId
          }),
          hideUnsentTweetsButton: W,
          subtitle: q,
          title: K,
          selectedCommunityIdFromLocationState: G,
          shouldShowCommunityAudienceEducation: function (e, t) {
            return Object(R.z)(e, R.e)
          },
        }),
        Y = {
          createDraftTweetApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(A.d),
          createScheduledTweetApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(D.d),
          fetchScheduledTweets: D.c,
          fetchDraftTweets: A.c,
          addCommunityAudienceEducationFlag: function () {
            return Object(R.w)(R.e)
          },
          updateAudienceControlsValue: E.u,
        },
        Q = Object(k.g)(Z, Y),
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
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var he = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(de.a)(
          'svg',
          me(
            me({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ue.a.root, e.style], viewBox: '0 0 32 32' },
          ),
          g.a.createElement(
            'g',
            null,
            g.a.createElement('path', {
              d: 'M18.672 15.25H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-5.297H8.078c-.414 0-.75.336-.75.75s.336.75.75.75h10.594c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4.304 10.594h-6.29c-.414 0-.75.336-.75.75s.336.75.75.75h6.29c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            g.a.createElement('path', {
              d: 'M29.284 15.25h-4.548V5.736C24.736 4.228 23.51 3 22 3H4.75C3.24 3 2.014 4.228 2.014 5.736v20.527C2.014 27.773 3.24 29 4.75 29h21.885c1.874 0 3.4-1.524 3.4-3.398V16c0-.414-.337-.75-.75-.75zM3.514 26.264V5.736c0-.68.554-1.236 1.236-1.236H22c.682 0 1.236.555 1.236 1.236V25.6c0 .704.214 1.357.58 1.9H4.75c-.682 0-1.236-.555-1.236-1.236zm23.12 1.236c-1.046 0-1.897-.852-1.897-1.898V16.75h3.798v8.852c0 1.046-.853 1.898-1.9 1.898z',
            }),
          ),
        )
      }
      he.metadata = { width: 32, height: 32 }
      var fe = he,
        ve = n('MWbm'),
        ye = n('4zmP'),
        ge = n('rHpw'),
        be = ae.a.ed33a3b6,
        _e = ae.a.d5bda8b3,
        we = ae.a.i859a9d3,
        Ce = ge.a.create(function (e) {
          return { revueCallout: { marginBottom: e.spaces.space4, marginTop: e.spaces.space20 } }
        }),
        Ee = le(function (e) {
          var t = e.addFlag,
            n = e.shouldShowNewsletterCallout,
            a = g.a.useContext(ie.a).featureSwitches.isTrue('responsive_web_newsletters_callout_enabled')
          return n && a
            ? g.a.createElement(
                ve.a,
                { style: Ce.revueCallout },
                g.a.createElement(ye.a, {
                  Icon: fe,
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
        Te = n('7nmT'),
        Se = n.n(Te),
        xe = n('Dtul'),
        Oe = n('zh9S'),
        Re = n('7JQg'),
        Ie = 'tweetButton',
        Pe = n('/yvb'),
        ke = n('JYMr'),
        Ae = n('cHvH'),
        De = n('feu+'),
        je = n('7N4s'),
        Le = n('oQhu'),
        Me = n('3A2y')
      function Be(e, t) {
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
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Be(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Be(Object(n)).forEach(function (t) {
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
            a = h()(e)
          if (t) {
            var r = h()(this).constructor
            n = Reflect.construct(a, arguments, r)
          } else n = a.apply(this, arguments)
          return p()(this, n)
        }
      }
      var He = ae.a.b8f0483e,
        Ve = ae.a.a133d13e,
        Ue = ae.a.a1183237,
        ze = ae.a.da2663f5,
        We = ae.a.j24c37b2,
        qe = 'compose',
        Ke = { page: qe },
        Ge = { page: qe, section: 'reply' },
        Xe = { context: 'compose_intent_logged_in' },
        Ze = { viewType: 'send_tweet' },
        Ye = (function (e) {
          u()(n, e)
          var t = Ne(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              v()(s()(e), 'state', { isValid: !1 }),
              v()(s()(e), '_handleDismissCommunityAudienceEducation', function () {
                e.props.addCommunityAudienceEducationFlag()
              }),
              v()(
                s()(e),
                '_handleAppBarHeight',
                Object(Le.a)(function () {
                  var t = Se.a.findDOMNode(e._appBarRef)
                  return (t && t instanceof window.Element && t.getBoundingClientRect().height) || 50
                }),
              ),
              v()(s()(e), '_handleBackClick', function () {
                e._composeContainerRef && e._composeContainerRef.handleDismissComposer()
              }),
              v()(s()(e), '_handleCloseComposer', function () {
                e._appBarRef && e._appBarRef.goBack()
              }),
              v()(s()(e), '_handleSendTweet', function () {
                e._composeContainerRef && e._composeContainerRef.handleTweetOrRetweet()
              }),
              v()(s()(e), '_setValidity', function (t) {
                t !== e.state.isValid && e.setState({ isValid: t })
              }),
              v()(s()(e), '_getScribeNamespace', function () {
                return e.props.inReplyToStatus || e.props.inReplyToStatusId ? Ge : Ke
              }),
              v()(s()(e), '_getScribeData', function () {
                var t = e.props,
                  n = t.activeUser
                return t.isIntentRoute && n ? Xe : $.a
              }),
              v()(s()(e), '_renderAppBarRightControl', function () {
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
                  : g.a.createElement(
                      Pe.a,
                      {
                        behavioralEventContext: Ze,
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
              v()(s()(e), '_renderHeaderWithProgressBar', function (t) {
                var n = e.context.isModal,
                  a = e.props,
                  r = a.isSending,
                  o = a.sendingProgress
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(ke.a, {
                    progress: r ? Math.max(o, 0.02) : 0,
                    style: [Qe.progressBar, n && Qe.progressBarModal],
                  }),
                  t,
                )
              }),
              v()(s()(e), '_renderUnsentHeading', function () {
                var t = e.props,
                  n = t.draftTweets,
                  a = t.hideUnsentTweetsButton,
                  r = t.scheduledTweets
                if (!a && (r.length > 0 || n.length > 0))
                  return g.a.createElement(
                    ve.a,
                    { style: Qe.unsentHeadingContainer },
                    g.a.createElement(Pe.a, { onPress: e._handleOpenUnsent, size: 'small', type: 'brandText' }, Ve),
                  )
              }),
              v()(s()(e), '_handleOpenUnsent', function () {
                var t = e.props.history
                Object(Oe.c)(Fe(Fe({}, e._getScribeNamespace()), {}, { element: 'unsent_tweets', action: 'click' })),
                  t.push('/compose/tweet/unsent/drafts')
              }),
              v()(s()(e), '_setAppBarRef', function (t) {
                e._appBarRef = t
              }),
              v()(s()(e), '_handleComposeContainerRef', function (t) {
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
                  ;(this._unlockReload = xe.a.acquire()),
                    i.setModalRouteBreakpoint(i.location),
                    t && (o().catch(a()), r().catch(n())),
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
                    h = t.typeaheadWrapper,
                    f = s && !n,
                    v = this.context.isModal
                  return g.a.createElement(
                    Re.b,
                    { data: this._getScribeData(), namespace: this._getScribeNamespace() },
                    g.a.createElement(Ae.a, null, function (t) {
                      var s = t.windowWidth,
                        y = b.a.shouldRenderAsModal(s),
                        w = (f || e.showCommunityAudienceEducation) && y,
                        C = (null == o ? void 0 : o.length) > 1
                      return g.a.createElement(
                        g.a.Fragment,
                        null,
                        e.showCommunityAudienceEducation
                          ? g.a.createElement(De.a, {
                              actionLabel: We,
                              graphicDisplayMode: 'none',
                              headline: Ue,
                              onAction: e._handleDismissCommunityAudienceEducation,
                              onClose: e._handleDismissCommunityAudienceEducation,
                              subtext: ze,
                              withCloseButton: !1,
                            })
                          : null,
                        f && g.a.createElement(re.a, { history: c, location: l }),
                        !w &&
                          g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(
                              ee.b,
                              {
                                appBarRef: e._setAppBarRef,
                                behavioralEventViewType: qe,
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
                              g.a.createElement(_.a, {
                                activeUser: n,
                                composeHeader: a,
                                composeSemanticCoreId: r,
                                customizePropsForSingleComposerItem: i,
                                history: c,
                                isModal: v,
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
                            C ? g.a.createElement(Ee, null) : null,
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
        })(g.a.Component)
      v()(Ye, 'contextType', je.b)
      var Qe = ge.a.create(function (e) {
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
      t.default = Q(Ye)
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
        v = n.n(f),
        y = (n('2G9S'), n('z84I'), n('DfhM'), n('ERkP')),
        g = n.n(y),
        b = n('zfvc'),
        _ = n('RhWx'),
        w = n.n(_),
        C = (n('yH/f'), n('M+/F'), n('zrc3')),
        E = Object.freeze({ in: 'in', out: 'out', static: 'static' })
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
      var S = (function (e) {
        u()(n, e)
        var t = T(n)
        function n() {
          var e
          r()(this, n)
          for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            v()(s()(e), 'state', {
              isAnimating: !1,
              renderChildren: g.a.Children.toArray(e.props.children).map(function (e) {
                return { status: E.static, child: e }
              }),
            }),
            v()(s()(e), '_handleEachAnimateComplete', function () {
              var t = e.state.isAnimating,
                n = e.props,
                a = n.children,
                r = n.onAnimateComplete
              t &&
                (r && r(),
                e.setState({
                  renderChildren: g.a.Children.toArray(a).map(function (e) {
                    return { status: E.static, child: e }
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
                      b.a,
                      {
                        animateMount: a !== E.static,
                        key: n.key,
                        onAnimateComplete: e._handleEachAnimateComplete,
                        show: a !== E.out,
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
                                    return { child: e, status: E.out }
                                  }),
                                ),
                              ),
                              'break'
                            )
                          var o = t[n],
                            i = e[a]
                          if (o.key === i.key) r.push({ child: o, status: E.static }), (n += 1)
                          else {
                            var c = Object(C.a)(t, function (e) {
                              return e.key === i.key
                            })
                            c >= 0
                              ? (r.push.apply(
                                  r,
                                  w()(
                                    t.slice(n, c).map(function (e) {
                                      return { child: e, status: E.in }
                                    }),
                                  ).concat([{ child: t[c], status: E.static }]),
                                ),
                                (n = c + 1))
                              : r.push({ child: i, status: E.out })
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
                              return { child: e, status: E.in }
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
                      return e.status === E.static
                    }),
                  }
                },
              },
            ],
          ),
          n
        )
      })(g.a.Component)
      t.a = S
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
    vOV5: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'PlacePickerScreen', function () {
          return de
        })
      n('OZaJ')
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
        v = n.n(f),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('2G9S'), n('LW0h'), n('jQ3i'), n('x4t0'), n('z84I'), n('LJOr'), n('KqXw'), n('ERkP')),
        _ = n.n(b),
        w = n('a/ea'),
        C = n('/Rsk'),
        E = n('P1r1'),
        T = n('xVN5'),
        S = n('RqPI'),
        x = n('rxPX'),
        O = n('0KEI'),
        R = Object(x.a)()
          .propsFromState(function () {
            return {
              autotaggedLocation: C.d,
              initialResults: C.f,
              initialFetchStatus: C.e,
              lastSearchResults: C.h,
              lastSearchFetchStatus: C.g,
              position: w.d,
              taggedLocation: T.q,
              userCountry: S.y,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)('PLACE_PICKER'),
              loadGeoLocation: w.a,
              fetchInitialPlacesIfNeeded: C.b,
              searchPlaces: C.c,
              updateLastSelectedPlace: C.i,
              updateSettings: E.L,
              updateSingleComposer: T.x,
            }
          })
          .withAnalytics({ page: 'compose', section: 'place_picker' }),
        I = n('kGix'),
        P = n('v//M'),
        k = n('jHSc'),
        A = n('M6MT'),
        D = n('3XMw'),
        j = n.n(D),
        L = n('MWbm'),
        M = n('pjBI'),
        B = n('t62R'),
        F = n('CKsB'),
        N = n('/yvb'),
        H = n('6OUF'),
        V = n('cmUU'),
        U = n('rHpw'),
        z =
          (n('hBpG'),
          (function () {
            function e(t, n, a) {
              i()(this, e), (this.formatter = t), (this.fallbackFormatter = n), (this.fallbackRatio = a)
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
        W = new z(j.a.b01ed2da, j.a.i83e29e0, 5280),
        q = new z(j.a.d4b7cff7, j.a.b211849e, 1e3),
        K = 1.609344,
        G = ['lr', 'mm', 'uk', 'us'],
        X = n('JFx8'),
        Z = n('VwDm'),
        Y = n('EfHu'),
        Q = n('474o')
      function J(e) {
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
          return h()(this, n)
        }
      }
      var $ = j.a.b772cd65,
        ee = j.a.e7c766ee,
        te = j.a.ab68727a,
        ne = j.a.ae4057a2,
        ae = j.a.bf2923a5,
        re = j.a.d963d1b6,
        oe = j.a.a893d601,
        ie = j.a.e68b09b4,
        ce = j.a.be6cc44d,
        se = j.a.d8ef3232,
        le = j.a.cce30dcc,
        ue = j.a.fa9adac1,
        de = (function (e) {
          p()(n, e)
          var t = J(n)
          function n(e) {
            var a
            i()(this, n),
              (a = t.call(this, e)),
              g()(u()(a), 'state', {
                activeResultSet: Q.c.initial,
                geoLocationError: void 0,
                query: '',
                selectedLocation: void 0,
                showSearchForButton: !1,
              }),
              g()(u()(a), '_appBarRef', _.a.createRef()),
              g()(u()(a), '_fetchInitialPlaces', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInitialPlacesIfNeeded,
                  r = e.taggedLocation
                n()
                  .then(function () {
                    var e = a.props.autotaggedLocation
                    r || a.setState({ selectedLocation: e })
                  })
                  .catch(t())
              }),
              g()(u()(a), '_getActiveResults', function () {
                var e = a.props,
                  t = e.initialResults,
                  n = e.lastSearchResults
                return a.state.activeResultSet === Q.c.initial ? t : n
              }),
              g()(u()(a), '_selectResults', function () {
                var e,
                  t = a.state,
                  n = t.query,
                  o = t.selectedLocation,
                  i = (null === (e = a._getActiveResults()) || void 0 === e ? void 0 : e.places) || []
                return (
                  o &&
                    (i = [o].concat(
                      r()(
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
              g()(u()(a), '_goBack', function () {
                var e
                null === (e = a._appBarRef.current) || void 0 === e || e.goBack()
              }),
              g()(u()(a), '_setTaggedLocation', function (e) {
                var t = a.props,
                  n = t.updateLastSelectedPlace,
                  r = t.updateSettings
                ;(0, t.updateSingleComposer)({ updates: { taggedLocation: e } }),
                  n(e),
                  r({ shouldAutoTagLocation: !!e })
              }),
              g()(u()(a), '_handleBack', function () {
                return a._goBack()
              }),
              g()(u()(a), '_handleDone', function () {
                var e = a.state.selectedLocation
                e && a._setTaggedLocation(e), a._goBack()
              }),
              g()(u()(a), '_handleRemove', function () {
                a._setTaggedLocation(null), a._goBack()
              }),
              g()(u()(a), '_handleRetry', function () {
                var e = a.props.searchPlaces,
                  t = a.state,
                  n = t.activeResultSet,
                  r = t.query
                n === Q.c.initial ? a._fetchInitialPlaces() : e(r)
              }),
              g()(u()(a), '_handleLocationDisabledPromptDismiss', function () {
                a.props.history.goBack()
              }),
              g()(u()(a), '_handleChange', function (e) {
                var t = e.currentTarget.value,
                  n = t.length ? a.state.activeResultSet : Q.c.initial
                a.setState({ activeResultSet: n, query: t, showSearchForButton: !!t.length })
              }),
              g()(u()(a), '_handleClear', function () {
                a.setState({ activeResultSet: Q.c.initial, query: '' })
              }),
              g()(u()(a), '_handleSubmit', function () {
                var e = a.state.query,
                  t = a.props.searchPlaces
                e.length && (a.setState({ activeResultSet: Q.c.lastSearch, showSearchForButton: !1 }), t(e))
              }),
              g()(u()(a), '_handlePlaceClick', function (e) {
                return function () {
                  a._setTaggedLocation(e), a._goBack()
                }
              }),
              g()(u()(a), '_renderPlaceSubtext', function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  c,
                  s = a.props,
                  l = s.position,
                  u = s.userCountry,
                  d = e.place,
                  p = d.attributes.street_address,
                  m = d.centroid
                if (p && m && 2 === m.length && l) {
                  var h =
                    ((t = { lat: l.coords.latitude, long: l.coords.longitude }),
                    (n = { lat: m[1], long: m[0] }),
                    (r = t.lat * (Math.PI / 180)),
                    (o = n.lat * (Math.PI / 180)),
                    (i = o - r),
                    (c = (n.long - t.long) * (Math.PI / 180)),
                    7917.6 *
                      Math.asin(
                        Math.sqrt(
                          Math.sin(i / 2) * Math.sin(i / 2) +
                            Math.cos(r) * Math.cos(o) * Math.sin(c / 2) * Math.sin(c / 2),
                        ),
                      ))
                  return _.a.createElement(
                    M.a,
                    null,
                    _.a.createElement(B.b, null, p),
                    _.a.createElement(
                      B.b,
                      null,
                      (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'us'
                        if (
                          G.find(function (e) {
                            return e === t.toLowerCase()
                          })
                        )
                          return W.format(e)
                        var n = e * K
                        return q.format(n)
                      })(h, u),
                    ),
                  )
                }
              }),
              g()(u()(a), '_renderPlace', function (e) {
                var t = a.state.selectedLocation
                return _.a.createElement(F.a, {
                  actionSubText: a._renderPlaceSubtext(e),
                  actionText: e.place.full_name,
                  isSelected: e.place.id === (null == t ? void 0 : t.place.id),
                  key: e.place.id,
                  onClick: a._handlePlaceClick(e),
                  selectable: !0,
                })
              }),
              g()(u()(a), '_renderPlaces', function (e) {
                return e.length
                  ? e.map(function (e) {
                      return a._renderPlace(e)
                    })
                  : _.a.createElement(B.b, { align: 'center', style: pe.noPlacesText }, re)
              }),
              g()(u()(a), '_renderAttributionIfNeeded', function () {
                var e = a._getActiveResults()
                return null != e && e.attributions.has(Q.b.foursquare)
                  ? _.a.createElement(X.a, { style: pe.foursquareIcon })
                  : null
              }),
              g()(u()(a), '_renderResults', function () {
                var e = a.state,
                  t = e.query,
                  n = e.showSearchForButton,
                  r = a._selectResults()
                return _.a.createElement(
                  L.a,
                  null,
                  a._renderPlaces(r),
                  n
                    ? _.a.createElement(F.a, {
                        actionText: ue({ query: t }),
                        onClick: a._handleSubmit,
                        textColor: 'primary',
                      })
                    : null,
                  a._renderAttributionIfNeeded(),
                )
              }),
              g()(u()(a), '_renderRightControl', function () {
                return _.a.createElement(
                  L.a,
                  { style: pe.actionButtonContainer },
                  _.a.createElement(
                    N.a,
                    { onPress: a._handleRemove, size: 'small', style: pe.actionButton, type: 'primaryText' },
                    ie,
                  ),
                  _.a.createElement(
                    N.a,
                    { onPress: a._handleDone, size: 'small', style: pe.actionButton, type: 'primaryFilled' },
                    $,
                  ),
                )
              }),
              g()(u()(a), '_renderGeoPicker', function () {
                var e = a.props,
                  t = e.history,
                  n = e.initialFetchStatus,
                  r = e.lastSearchFetchStatus,
                  o = a.state.activeResultSet === Q.c.initial ? n : r
                return _.a.createElement(
                  k.b,
                  {
                    appBarRef: a._appBarRef,
                    history: t,
                    onBackClick: a._handleBack,
                    rightControl: a._renderRightControl(),
                    title: le,
                    withBottomBorder: !1,
                  },
                  _.a.createElement(H.a, {
                    Icon: Z.a,
                    onChange: a._handleChange,
                    onClear: a._handleClear,
                    onSubmitEditing: a._handleSubmit,
                    placeholder: ce,
                    style: pe.search,
                    withClearButton: !0,
                  }),
                  _.a.createElement(P.a, {
                    fetchStatus: o === I.a.NONE ? I.a.LOADING : o,
                    onRequestRetry: a._handleRetry,
                    render: a._renderResults,
                    retryMessage: se,
                  }),
                )
              }),
              g()(u()(a), '_renderLocationDisabledPrompt', function () {
                var e = a.state.geoLocationError,
                  t = ne,
                  n = ae
                return (
                  e && e.code === A.a.PERMISSION_DENIED && ((t = ee), (n = te)),
                  _.a.createElement(V.a, {
                    actionLabel: oe,
                    graphic: Y.a,
                    headline: t,
                    onAction: a._handleLocationDisabledPromptDismiss,
                    onClose: a._handleLocationDisabledPromptDismiss,
                    subtext: n,
                  })
                )
              })
            var o = e.autotaggedLocation,
              c = e.initialResults,
              s = e.taggedLocation
            return s ? (a.state.selectedLocation = s) : c && (a.state.selectedLocation = o), a
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
        })(_.a.Component),
        pe = U.a.create(function (e) {
          return {
            search: { marginHorizontal: e.spaces.space16, flexGrow: 0 },
            actionButtonContainer: { flexDirection: 'row' },
            actionButton: { marginLeft: e.spaces.space12 },
            noPlacesText: { marginVertical: e.spaces.space16 },
            foursquareIcon: { marginVertical: e.spaces.space16, fill: e.colors.gray700 },
          }
        }),
        me = R(de)
      t.default = me
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
          v = n - t,
          y = v >= 0 ? m({ count: i(v) }) : p({ count: i(t - n) }),
          g =
            t >= c
              ? r.a.createElement(
                  u.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: l.a.visuallyHidden },
                  y,
                )
              : null,
          b = Object(o.a)(v, n),
          _ = t >= n ? 'red500' : t >= c ? 'yellow500' : 'primary',
          w = r.a.createElement(s.a, {
            color: _,
            progress: b,
            size: t >= c ? 30 : 20,
            style: [f.progressCircle, v <= -10 && f.hide],
          }),
          C = t >= c ? r.a.createElement(u.a, { style: [f.text, v > 0 ? f.gray700 : f.red500] }, i(v)) : null
        return r.a.createElement(
          d.a,
          { style: [f.root, f.center] },
          g,
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
        v = n('CKsB'),
        y = n('/yvb'),
        g = n('rHpw'),
        b = n('Zg3A'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        w = n.n(_),
        C = n('Lsrn'),
        E = n('k/Ka')
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
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
        return Object(E.a)(
          'svg',
          S(
            S({}, e),
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
      x.metadata = { width: 24, height: 24 }
      var O = x,
        R = n('boUI'),
        I = n('EweD'),
        P = m.a.g6185a9e,
        k = m.a.g2d04222,
        A = m.a.baffe39a,
        D = m.a.af293dc2,
        j = m.a.h1053f7e,
        L = m.a.bf994ab2,
        M = m.a.cf7f7e39,
        B = m.a.cfd2f35d,
        F = g.a.create(function (e) {
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
            l ? (p = L) : s && (p = M),
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
                  k,
                ),
              ),
              u.a.createElement(
                h.a,
                null,
                u.a.createElement(v.a, {
                  Icon: b.a,
                  actionText: A,
                  isSelected: d.a.all === i,
                  onClick: c(d.a.all),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(v.a, {
                  Icon: O,
                  actionText: D,
                  isSelected: d.a.community === i,
                  onClick: c(d.a.community),
                  selectable: !0,
                  style: F.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(v.a, {
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
                      B,
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
          h = u.a.useCallback(function () {
            return p(!1)
          }, []),
          f = a ? (d ? H.a.VISIBILITY_BEHAVIOR.forceVisible : H.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          v = 'function' == typeof t ? t({ openPopover: m, closePopover: h }) : t
        return u.a.createElement(
          V.a,
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
          v,
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
