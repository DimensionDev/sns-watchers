;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    '+aTU': function (e, t, r) {
      'use strict'
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c =
          (r('Cm4o'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          r('WNMA'),
          r('KqXw'),
          r('LJOr'),
          r('2G9S'),
          (function () {
            function e(t) {
              o()(this, e)
              try {
                this.parser = new URL(t)
              } catch (r) {
                ;(this.parser = document.createElement('a')), (this.parser.href = t)
              }
            }
            return (
              i()(e, [
                {
                  key: 'getHostname',
                  value: function () {
                    return this.parser.hostname
                  },
                },
                {
                  key: 'getPath',
                  value: function () {
                    return this.parser.pathname
                  },
                },
                {
                  key: 'isSafe',
                  value: function () {
                    return !!this.parser.protocol.match(/^https?:$/)
                  },
                },
                {
                  key: 'addSearchParam',
                  value: function (e, t) {
                    this.parser.search
                      ? (this.parser.search = ''.concat(this.parser.search, '&').concat(e, '=').concat(t))
                      : (this.parser.search = '?'.concat(e, '=').concat(t))
                  },
                },
                {
                  key: 'toString',
                  value: function () {
                    return this.parser.href
                  },
                },
              ]),
              e
            )
          })())
      t.a = c
    },
    BVo1: function (e, t, r) {
      'use strict'
      r.d(t, 'e', function () {
        return o
      }),
        r.d(t, 'd', function () {
          return a
        }),
        r.d(t, 'c', function () {
          return i
        }),
        r.d(t, 'a', function () {
          return c
        }),
        r.d(t, 'b', function () {
          return s
        }),
        r.d(t, 'f', function () {
          return u
        })
      var n = r('rHpw').a.create(function (e) {
          return {
            root: { writingDirection: 'ltr', position: 'absolute', bottom: 0, cursor: 'auto', width: '100%' },
            container: { paddingHorizontal: e.spaces.space4, paddingBottom: e.spaces.space2 },
            absoluteContainer: {
              paddingHorizontal: e.spaces.space4,
              paddingBottom: e.spaces.space2,
              width: '100%',
              position: 'absolute',
              minHeight: '100%',
            },
            scrubber: { paddingLeft: e.spaces.space4, paddingRight: e.spaces.space4 },
            bottomBar: { width: '100%', justifyContent: 'space-between' },
            actionContainer: { minHeight: e.spaces.space40 },
            flex: { flex: 1 },
            flexShrink: { flexShrink: 1 },
            flexRow: { alignItems: 'center', flexDirection: 'row' },
            rightContainer: { justifyContent: 'flex-end' },
            leftContainer: { justifyContent: 'flex-start', flexGrow: 1 },
            controlContainer: { flexDirection: 'row', paddingHorizontal: e.spaces.space4 },
            controlsBottomOffset: { paddingBottom: e.spaces.space2 },
            withMargin: { marginHorizontal: e.spaces.space2, paddingHorizontal: e.spaces.space2 },
            skipButtonAffordance: { opacity: 0 },
            skipAdText: { fontVariant: ['tabular-nums'] },
          }
        }),
        o = n.root,
        a = n.container,
        i = [n.flexRow, n.bottomBar],
        c = [n.actionContainer, n.leftContainer, n.flexShrink, n.flexRow],
        s = [n.actionContainer, n.rightContainer, n.flexRow],
        u = n.skipAdText
      t.g = n
    },
    'IE/l': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r('USG3'),
        a = r('aNKf'),
        i = r('rHpw'),
        c = r('MWbm'),
        s = r('BVo1')
      t.a = function (e) {
        var t = e.actionButton,
          r = e.displayDismissableControls,
          u = void 0 === r || r,
          l = e.leftContent,
          f = e.rightContent,
          d = e.scrubber,
          p = e.skipButton
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            o.a,
            { show: u },
            n.createElement(a.a, {
              colors: [i.a.theme.colors.transparent, i.a.theme.colors.translucentBlack77],
              style: s.g.absoluteContainer,
            }),
          ),
          n.createElement(
            c.a,
            { style: s.g.controlContainer },
            n.createElement(
              c.a,
              { style: s.g.flex },
              n.createElement(
                o.a,
                { show: u },
                n.createElement(
                  c.a,
                  { style: s.g.controlsBottomOffset },
                  d,
                  n.createElement(
                    c.a,
                    { style: s.c },
                    n.createElement(
                      c.a,
                      { style: s.a },
                      t,
                      n.createElement(c.a, { style: [s.g.flexRow, s.g.flexShrink] }, l),
                    ),
                    n.createElement(c.a, { style: s.b }, f),
                  ),
                ),
              ),
            ),
            p && n.createElement(c.a, { style: s.g.controlsBottomOffset }, p),
          ),
        )
      }
    },
    N2PN: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      })
      var n = r('97Jx'),
        o = r.n(n),
        a = r('m3Bd'),
        i = r.n(a),
        c = r('ERkP'),
        s = r('/yvb'),
        u = r('gK2g'),
        l = function (e) {
          e.hoverLabelPreferredHorizontalOrientation, e.hoverLabelWithExtraSpace
          var t = i()(e, ['hoverLabelPreferredHorizontalOrientation', 'hoverLabelWithExtraSpace']),
            r = e.accessibilityLabel
              ? {
                  label: e.accessibilityLabel,
                  preferredVerticalOrientation: 'up',
                  preferredHorizontalOrientation: e.hoverLabelPreferredHorizontalOrientation,
                  withLayer: !1,
                  withExtraSpace: e.hoverLabelWithExtraSpace,
                }
              : void 0
          return c.createElement(s.a, o()({}, t, { hoverLabel: r, size: e.size || 'medium', type: 'onMediaText' }))
        },
        f = function (e) {
          var t = e.icon,
            r = e.onPress,
            n = e.scribeNamespace,
            a = e.size,
            s = e.testID,
            f = i()(e, ['icon', 'onPress', 'scribeNamespace', 'size', 'testID']),
            d = u.a.useAnalytics()
          return c.createElement(
            l,
            o()({}, f, {
              icon: t,
              onPress: function (e) {
                r && r(e), d.scribe(n)
              },
              size: a,
              testID: s,
            }),
          )
        }
      t.b = l
    },
    NnQ9: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ERkP'),
        i = r('Lsrn'),
        c = r('shC7'),
        s = r('k/Ka')
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style, c.a.getConstants().isRTL && i.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M3.5 19.44v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.81c0 .414.336.75.75.75h5.81c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4l6.577-6.576c.146-.146.22-.338.22-.53s-.073-.384-.22-.53c-.293-.293-.768-.293-1.06 0L3.5 19.44zM14.69 2.75c0 .414.336.75.75.75h4l-6.577 6.576c-.293.293-.293.768 0 1.06s.768.294 1.06 0L20.5 4.562v4c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75h-5.81c-.414 0-.75.336-.75.75z',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    Q0n6: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return w
      }),
        r.d(t, 'l', function () {
          return g
        }),
        r.d(t, 'g', function () {
          return O
        }),
        r.d(t, 'h', function () {
          return E
        }),
        r.d(t, 'd', function () {
          return P
        }),
        r.d(t, 'f', function () {
          return k
        }),
        r.d(t, 'j', function () {
          return C
        }),
        r.d(t, 'e', function () {
          return j
        }),
        r.d(t, 'k', function () {
          return _
        }),
        r.d(t, 'i', function () {
          return L
        }),
        r.d(t, 'c', function () {
          return x
        }),
        r.d(t, 'b', function () {
          return T
        })
      r('7xRU'), r('hBpG'), r('2G9S')
      var n = r('kCRK'),
        o = r('3XMw'),
        a = r.n(o),
        i = a.a.d58baa7e,
        c = a.a.i3b7a017,
        s = a.a.ie5d110e,
        u = a.a.df5f11b3,
        l = a.a.a7cd5cf4,
        f = a.a.b6eb8f69,
        d = a.a.dcc2b9b2,
        p = a.a.hf4ffd4d,
        b = a.a.f6e90cd6,
        h = a.a.e7d191ec,
        m = a.a.h1888a33,
        v = a.a.c58b2ab7,
        y = function (e) {
          return 'number' == typeof e ? i(e) : e
        },
        w = function (e) {
          var t = e.viewCount,
            r = e.viewerCount
          return t || 0 === t ? v({ viewCount: y(t) }) : r || 0 === r ? m({ viewerCount: y(r) }) : null
        },
        g = function (e) {
          return e
            ? (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.durationSeconds,
                  r = e.isBroadcast,
                  n = e.isLive,
                  o = e.timecode,
                  a = e.videoTrack,
                  i = [],
                  c = r || n ? f : l,
                  s = n ? p : d
                if ((i.push(s({ locVideoType: c })), 'number' == typeof t && t && !n)) {
                  var u = S(t),
                    m = u.hoursWord,
                    v = u.minutesWord,
                    y = u.secondsWord
                  i.push(b({ hoursWord: m, minutesWord: v, secondsWord: y }))
                }
                if ('number' == typeof o && o) {
                  var g = S(o),
                    O = g.hoursWord,
                    E = g.minutesWord,
                    P = g.secondsWord
                  i.push(h({ hoursWord: O, minutesWord: E, secondsWord: P }))
                }
                var k = a && w(a)
                return k && i.push(k), i.join('. ')
              })({
                isLive: e.isLive,
                isBroadcast: e.contentType === n.a.BROADCAST,
                durationSeconds: k(e),
                timecode: L(e),
                videoTrack: e,
              })
            : ''
        },
        S = function (e) {
          var t = R(e),
            r = t.hours,
            n = t.minutes,
            o = t.seconds,
            a = { hoursWord: '', minutesWord: '', secondsWord: '' }
          return 0 === o && 0 === n && 0 === r && 0 === n
            ? ((a.secondsWord = c(0)), a)
            : ((a.hoursWord = r > 0 ? u(r) : ''),
              (a.minutesWord = n > 0 ? s(n) : ''),
              (a.secondsWord = o > 0 ? c(o) : ''),
              a)
        },
        O = function (e) {
          return e ? (e.currentTimeMs || 0) / 1e3 : void 0
        },
        E = function (e) {
          return e ? (e.durationMs || 0) / 1e3 : void 0
        },
        P = function (e) {
          var t = O(e)
          return t && Math.round(t)
        },
        k = function (e) {
          var t = E(e)
          return t && Math.round(t)
        },
        C = function (e) {
          return e.tracks.find(function (e) {
            return 0 === e.id
          })
        },
        j = function (e) {
          return e.tracks.find(function (t) {
            return t.id === e.currentTrackId
          })
        },
        _ = function (e) {
          return e.controls && e.controls.isPosterShown ? C(e) : j(e)
        },
        L = function (e) {
          if (e) {
            var t = e.requestedTimecode
            return t && t > 0 ? t : e.replayEditedStartTime
          }
        },
        x = function (e) {
          return T(Math.round(e / 1e3))
        },
        T = function (e) {
          var t = R(e),
            r = t.hours,
            n = t.minutes,
            o = t.seconds,
            a = o < 10 ? '0'.concat(o) : o,
            i = n < 10 && r ? '0'.concat(n) : n
          return r ? ''.concat(r, ':').concat(i, ':').concat(a) : ''.concat(i, ':').concat(a)
        },
        R = function (e) {
          return { hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) }
        }
    },
    USG3: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return f
      })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ddV6'),
        i = r.n(a),
        c = r('ERkP')
      function s(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var l = {
        transitionDuration: '250ms',
        transitionProperty: 'opacity, height',
        transitionTimingFunction: 'ease',
        willChange: 'opacity',
      }
      function f(e) {
        var t = e.children,
          r = e.show,
          n = c.useState(!r),
          o = i()(n, 2),
          a = o[0],
          s = o[1]
        return (
          c.useEffect(
            function () {
              r && a && s(!1)
            },
            [a, r],
          ),
          c.useMemo(
            function () {
              var e = u(u({}, l), {}, { opacity: r ? 1 : 0 })
              return c.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    r || a || s(!0)
                  },
                  style: e,
                },
                a ? null : t,
              )
            },
            [t, r, a],
          )
        )
      }
    },
    Y3cQ: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r('fyvP'),
        a = r('rHpw'),
        i = r('MWbm')
      t.a = function (e) {
        return n.createElement(i.a, { style: c.root }, n.createElement(o.a, e))
      }
      var c = a.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
        }
      })
    },
    dPHj: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        o = r('t62R'),
        a = function (e) {
          return n.createElement(o.b, { color: 'white', numberOfLines: 1, style: [i.withMargin, e.style] }, e.children)
        },
        i = r('rHpw').a.create(function (e) {
          return { withMargin: { marginHorizontal: e.spaces.space4 } }
        })
      t.a = n.memo(a)
    },
    hhMf: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return T
      })
      r('OZaJ')
      var n = r('97Jx'),
        o = r.n(n),
        a = r('VrFO'),
        i = r.n(a),
        c = r('Y9Ll'),
        s = r.n(c),
        u = r('1Pcy'),
        l = r.n(u),
        f = r('5Yy7'),
        d = r.n(f),
        p = r('N+ot'),
        b = r.n(p),
        h = r('AuHH'),
        m = r.n(h),
        v = r('KEM+'),
        y = r.n(v),
        w =
          (r('LqLs'),
          r('7x/C'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          r('2G9S'),
          r('DfhM'),
          r('+KXO'),
          r('jwue'),
          r('+oxZ'),
          r('ERkP')),
        g = r('6fxz')
      function S(e) {
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
          var r,
            n = m()(e)
          if (t) {
            var o = m()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var O = 'click',
        E = 'focused',
        P = 'mousemove',
        k = 'mouseover',
        C = 'touch',
        j = function (e, t) {
          return function (r) {
            var n = r.observed
            return n[e].add(t), { observed: n }
          }
        },
        _ = function (e, t) {
          return function (r) {
            var n = r.observed
            return n[e].delete(t), { observed: n }
          }
        },
        L = w.createContext({
          observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() },
          Observer: function () {
            return null
          },
        }),
        x = w.createContext(function () {
          return null
        }),
        T = (function (e) {
          d()(r, e)
          var t = S(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, a = new Array(n), c = 0; c < n; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(l()(e), '_timeoutCollection', { click: {}, focused: {}, mousemove: {}, mouseover: {}, touch: {} }),
              y()(l()(e), '_interactionWatcherRefs', {}),
              y()(l()(e), 'state', {
                observed: {
                  click: new Set(),
                  focused: new Set(),
                  mousemove: new Set(),
                  mouseover: new Set(),
                  touch: new Set(),
                },
              }),
              y()(l()(e), 'getContext', function () {
                return { observed: e.state.observed, Observer: e._renderObserver }
              }),
              y()(l()(e), 'hasActiveInteractionWatcherChildren', function () {
                return !Object.keys(e._interactionWatcherRefs).every(function (t) {
                  var r = e._interactionWatcherRefs[t]
                  return !r || !r.contains(document.activeElement)
                })
              }),
              y()(l()(e), '_renderObserver', function (t) {
                var r = t.children,
                  n = t.interactionKey,
                  a = t.click,
                  i = t.focus,
                  c = t.mousemove,
                  s = t.mouseover,
                  u = t.touch,
                  l = t.interactionTimeoutMs,
                  f = void 0 === l ? 2e3 : l,
                  d = {}
                return (
                  a && (d.onClick = e._handleClick(n, f)),
                  i && ((d.onBlur = e._handleBlur(n, f)), (d.onFocus = e._handleActive(n))),
                  c && (d.onMouseMove = e._handleMouseMove(n, f)),
                  s && ((d.onMouseEnter = e._handleMouseEnter(n)), (d.onMouseLeave = e._handleMouseLeave(n))),
                  u && ((d.onTouchStart = e._handleTouchStart(n)), (d.onTouchEnd = e._handleTouchEnd(n, f))),
                  w.createElement(
                    'div',
                    o()({}, d, {
                      ref: function (t) {
                        if (!n) throw new Error('Observer requires an `interactionKey` prop for storing refs.')
                        e._interactionWatcherRefs[n] = t
                      },
                    }),
                    r,
                  )
                )
              }),
              y()(l()(e), '_handleMouseEnter', function (t) {
                return function () {
                  e.setState(j(k, t))
                }
              }),
              y()(l()(e), '_handleMouseLeave', function (t) {
                return function () {
                  e.setState(_(k, t))
                }
              }),
              y()(l()(e), '_handleTouchStart', function (t) {
                return function () {
                  e.setState(j(C, t))
                }
              }),
              y()(l()(e), '_handleTouchEnd', function (t, r) {
                return function () {
                  var n = C
                  clearTimeout(e._timeoutCollection[n][t]),
                    r
                      ? (e._timeoutCollection[n][t] = setTimeout(function () {
                          return e.setState(_(n, t))
                        }, r))
                      : e.setState(_(n, t))
                }
              }),
              y()(l()(e), '_handleMouseMove', function (t, r) {
                return function () {
                  var n = P
                  e.state.observed[n].has(t) || e.setState(j(n, t)),
                    clearTimeout(e._timeoutCollection[n][t]),
                    (e._timeoutCollection[n][t] = setTimeout(function () {
                      return e.setState(_(n, t))
                    }, r))
                }
              }),
              y()(l()(e), '_handleClick', function (t, r) {
                return function () {
                  var n = O
                  e.state.observed[n].has(t) || e.setState(j(n, t)),
                    clearTimeout(e._timeoutCollection[n][t]),
                    (e._timeoutCollection[n][t] = setTimeout(function () {
                      return e.setState(_(n, t))
                    }, r))
                }
              }),
              y()(l()(e), '_handleActive', function (t) {
                return function () {
                  var r = E
                  clearTimeout(e._timeoutCollection[r][t])
                  var n = e.hasActiveInteractionWatcherChildren()
                  g.a.hadKeyboardEvent && n && e.setState(j(r, t))
                }
              }),
              y()(l()(e), '_handleBlur', function (t, r) {
                return function () {
                  var n = E
                  clearTimeout(e._timeoutCollection[n][t]),
                    e.state.observed[n].has(t) && (e._timeoutCollection[n][t] = setTimeout(e._handleFocusReset(t), r))
                }
              }),
              y()(l()(e), '_handleFocusReset', function (t) {
                return function () {
                  var r = E
                  e.setState(_(r, t)), clearTimeout(e._timeoutCollection[r][t])
                }
              }),
              e
            )
          }
          return (
            s()(r, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this
                  Object.keys(this._timeoutCollection).forEach(function (t) {
                    var r = e._timeoutCollection[t]
                    Object.keys(r).forEach(function (e) {
                      clearTimeout(r[e])
                    })
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.children
                  if (!e) throw new Error('component requires children prop.')
                  var t = this._renderObserver
                  return w.createElement(
                    r.ObserverContext.Provider,
                    { value: t },
                    w.createElement(r.Context.Provider, { value: this.getContext() }, e),
                  )
                },
              },
            ]),
            r
          )
        })(w.Component)
      y()(T, 'Context', L), y()(T, 'ObserverContext', x)
    },
    kCRK: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return n
      }),
        r.d(t, 'd', function () {
          return o
        }),
        r.d(t, 'a', function () {
          return a
        }),
        r.d(t, 'c', function () {
          return i
        }),
        r.d(t, 'e', function () {
          return c
        })
      var n = { VISIT: 'url', WATCH: 'watch' },
        o = { watch_now: 'watch_now', visit_site: 'visit_site', shop: 'shop', see_more: 'see_more', go_to: 'go_to' },
        a = { MEDIA: 'media_entity', GIF: 'gif', VMAP: 'vmap', BROADCAST: 'broadcast' },
        i = { AD: 'ad', CONTENT: 'content' },
        c = { BROADCAST: 'broadcast', DM: 'dm', TWEET: 'tweet' }
    },
    p6DB: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        o = r.n(n),
        a = r('ERkP'),
        i = r('Lsrn'),
        c = r('shC7'),
        s = r('k/Ka')
      function u(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                o()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          l(
            l({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [i.a.root, e.style, c.a.getConstants().isRTL && i.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          a.createElement(
            'g',
            null,
            a.createElement('path', {
              d: 'M3.983 13.605c0 .414.336.75.75.75H8.57l-6.357 6.357c-.297.297-.297.777 0 1.074s.777.297 1.074 0l6.357-6.357v3.828c0 .414.336.75.75.75s.75-.336.75-.75v-5.653c0-.414-.336-.75-.75-.75h-5.66c-.415 0-.75.336-.75.75zm16.73-11.392L14.355 8.57V4.74c0-.413-.336-.75-.75-.75s-.75.337-.75.75v5.654c0 .414.336.75.75.75h5.653c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H15.43l6.357-6.357c.148-.148.223-.343.223-.537s-.074-.39-.223-.537c-.297-.297-.777-.297-1.074 0z',
            }),
          ),
        )
      }
      ;(f.metadata = { width: 24, height: 24 }), (t.a = f)
    },
    ub6r: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return tt
      })
      var n = r('ERkP'),
        o = (r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('VrFO')),
        a = r.n(o),
        i = r('Y9Ll'),
        c = r.n(i),
        s = r('1Pcy'),
        u = r.n(s),
        l = r('5Yy7'),
        f = r.n(l),
        d = r('N+ot'),
        p = r.n(d),
        b = r('AuHH'),
        h = r.n(b),
        m = r('KEM+'),
        v = r.n(m),
        y = (r('2G9S'), r('7x/C'), r('DZ+c'), r('hBvt'), r('Zl35')),
        w = r('IE/l'),
        g = r('N2PN'),
        S = r('dPHj'),
        O = r('kCRK'),
        E = r('3XMw'),
        P = r.n(E),
        k = r('hhMf'),
        C = r('Q0n6'),
        j = r('9RkS'),
        _ = r('+d3d')
      function L(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var x = P.a.f06f2e53,
        T = (function (e) {
          f()(r, e)
          var t = L(r)
          function r(e) {
            var n
            return (
              a()(this, r),
              (n = t.call(this, e)),
              v()(u()(n), '_handleChange', function (e) {
                n.setState({ scrubTo: e }), (n.scheduledSeekTargetSec = e), n._throttledPlayerSeek()
              }),
              v()(
                u()(n),
                '_throttledPlayerSeek',
                Object(_.a)(
                  function () {
                    var e = u()(n).scheduledSeekTargetSec,
                      t = n.props,
                      r = t.duration,
                      o = t.playerApi
                    if (r) {
                      var a = e / r
                      o.scrubToFraction(a)
                    }
                  },
                  50,
                  { leading: !0, trailing: !0 },
                ),
              ),
              v()(u()(n), '_handleActive', function (e) {
                return (
                  !n.state.isScrubbing && e && document.addEventListener('click', n._handleCaptureClick, !0),
                  e || n._throttledPlayerSeek.flush(),
                  n.props.playerApi.setScrubbing(e),
                  n.setState({ isScrubbing: e })
                )
              }),
              v()(u()(n), '_handleCaptureClick', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.removeEventListener('click', n._handleCaptureClick, !0)
              }),
              (n.state = { isScrubbing: !1, scrubTo: 0 }),
              n
            )
          }
          return (
            c()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    r = e.currentTime,
                    o = e.duration,
                    a = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : r
                  if ('number' == typeof a && 'number' == typeof o && o > 0) {
                    var i = Object(C.b)(a),
                      c = Object(C.b)(o)
                    return n.createElement(j.a, {
                      accessibilityLabel: t,
                      accessibilityLabelValueText: x({ currentTime: i, durationTime: c }),
                      color: 'white',
                      keepLTR: !0,
                      keyboardStep: 5,
                      max: o,
                      min: 0,
                      onActive: this._handleActive,
                      onChange: this._handleChange,
                      step: 'any',
                      value: a,
                      withHidingThumb: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            r
          )
        })(n.PureComponent),
        R = r('97Jx'),
        B = r.n(R),
        M = r('/yvb'),
        D = r('BVo1'),
        A = r('w05h'),
        H = r('+/1j'),
        z = r('MWbm')
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
          var r,
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var F = (function (e) {
        f()(r, e)
        var t = W(r)
        function r() {
          var e
          a()(this, r)
          for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            v()(u()(e), '_handleSkipPress', function () {
              e.props.playerApi.nextTrack()
            }),
            e
          )
        }
        return (
          c()(r, [
            {
              key: 'render',
              value: function () {
                if (!this.props.playerState) return null
                var e = Object(C.e)(this.props.playerState)
                if (!e || e.durationMs <= this.props.skipThreshold || e.displayType !== O.c.AD) return null
                var t = Math.ceil((5e3 - e.currentTimeMs) / 1e3),
                  r = t > 0,
                  o = r ? Object(A.m)({ seconds: Object(A.q)(t) }) : A.l,
                  a = r ? Object(A.n)({ seconds: Object(A.p)(t) }) : A.k
                return n.createElement(
                  M.a,
                  {
                    accessibilityLabel: o,
                    disabled: r,
                    onPress: r ? void 0 : this._handleSkipPress,
                    pointerEvents: 'auto',
                    size: 'small',
                    testID: 'ControlBar-skipButton',
                    type: 'onMediaDominantColorFilled',
                  },
                  n.createElement(H.a, { style: D.f }, a),
                )
              },
            },
          ]),
          r
        )
      })(n.PureComponent)
      v()(F, 'defaultProps', { skipThreshold: 7e3 })
      var I = n.memo(function (e) {
          return e.useRefactoredLayout
            ? n.createElement(
                z.a,
                { pointerEvents: 'none', style: D.b },
                n.createElement(y.a, { periodic: !0 }, function (t) {
                  var r = t.playerApi,
                    o = t.playerState
                  return n.createElement(F, B()({}, e, { playerApi: r, playerState: o }))
                }),
              )
            : n.createElement(
                z.a,
                { pointerEvents: 'none', style: D.e },
                n.createElement(
                  z.a,
                  { style: D.d },
                  n.createElement(
                    z.a,
                    { style: D.c },
                    n.createElement(z.a, { style: D.a }),
                    n.createElement(
                      z.a,
                      { style: D.b },
                      n.createElement(y.a, { periodic: !0 }, function (t) {
                        var r = t.playerApi,
                          o = t.playerState
                        return n.createElement(F, B()({}, e, { playerApi: r, playerState: o }))
                      }),
                    ),
                  ),
                ),
              )
        }),
        N = r('rHpw'),
        V = r('+aTU'),
        K = r('aITJ'),
        U = r('jV+4'),
        G = r('m3Bd'),
        X = r.n(G),
        q = r('ddV6'),
        Y = r.n(q),
        Z = r('M2x3'),
        J = (r('lZm3'), r('uFXj'), r('nBUg')),
        Q = r('3dyc'),
        $ = r('t62R'),
        ee = r('Y3cQ'),
        te = r('efqG'),
        re = P.a.h9b3104d,
        ne = P.a.ccc97152,
        oe = P.a.e8b5757c,
        ae = P.a.e7e954de,
        ie = P.a.g07ffe66,
        ce = P.a.d8bede9d,
        se = P.a.j41845c7,
        ue = P.a.e9eeed9e,
        le = P.a.fe45dc83,
        fe = P.a.e791190a,
        de = P.a.e23b20af,
        pe = { label: ce, value: '1' },
        be = [
          { label: oe, value: '0.25' },
          { label: ae, value: '0.5' },
          { label: ie, value: '0.75' },
        ],
        he = [
          { label: se, value: '1.25' },
          { label: ue, value: '1.5' },
          { label: le, value: '1.75' },
          { label: fe, value: '2' },
        ]
      function me(e) {
        switch (e) {
          case 'fast':
            return [pe].concat(he)
          case 'slow':
            return [].concat(be, [pe])
          default:
            return [].concat(be, [pe], he)
        }
      }
      var ve = N.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space8,
              paddingBottom: e.spaces.space4,
              paddingLeft: e.spaces.space8,
              paddingRight: e.spaces.space8,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 },
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
        ye = function (e) {
          var t,
            r = null === (t = e.playerState.playbackRate) || void 0 === t ? void 0 : t.toString(),
            o = e.children,
            a = e.onDismiss,
            i = e.showVideoSettings,
            c = e.playerState,
            s = c.features,
            u = c.fullscreen.isFullscreen,
            l = null == s ? void 0 : s.web_video_playback_rate_enabled,
            f = i ? Q.b.forceVisible : Q.b.forceHidden,
            d = J.b.useProps().isDMDrawer
          function p(t, r) {
            e.playerApi.setPlaybackRate(parseFloat(r)), a()
          }
          return n.createElement(
            te.a,
            {
              onDismiss: a,
              renderContent: function (e, t) {
                var o = 'sheet' === t
                return n.createElement(
                  z.a,
                  { accessibilityRole: 'dialog', style: ve.root },
                  n.createElement(
                    z.a,
                    { style: ve.title },
                    n.createElement($.b, { size: 'headline1', weight: 'bold' }, ne),
                  ),
                  n.createElement(ee.a, {
                    accessibilityLabel: ne,
                    name: 'playback_rate',
                    onChange: p,
                    options: me(l),
                    value: r,
                  }),
                  o
                    ? n.createElement(
                        M.a,
                        { onPress: a, style: ve.cancelButton, testID: 'Cancel', type: 'primaryOutlined' },
                        de,
                      )
                    : null,
                )
              },
              visibilityBehavior: f,
              withArrow: !0,
              withFixedPosition: u || d(),
              withoutLayer: u,
            },
            o,
          )
        },
        we = { action: 'click', element: 'video_settings' }
      function ge(e) {
        var t = n.useState({ showVideoSettings: !1, resumePlaybackOnDismiss: !1 }),
          r = Y()(t, 2),
          o = r[0],
          a = r[1],
          i = e.isNarrow,
          c = e.playerApi,
          s = e.playerState,
          u = X()(e, ['isNarrow', 'playerApi', 'playerState']),
          l = Object(C.e)(s)
        return l && l.playbackRateSupported
          ? n.createElement(
              ye,
              {
                onDismiss: function () {
                  a({ showVideoSettings: !1 })
                },
                playerApi: c,
                playerState: s,
                showVideoSettings: o.showVideoSettings,
              },
              n.createElement(
                g.a,
                B()({}, u, {
                  accessibilityLabel: re,
                  icon: n.createElement(Z.a, null),
                  onPress: function () {
                    a({ showVideoSettings: !0 })
                  },
                  scribeNamespace: we,
                  size: i ? 'xSmall' : 'medium',
                }),
              ),
            )
          : null
      }
      var Se,
        Oe = r('kRXa'),
        Ee = (r('yH/f'), Object.freeze({ wide: 'wide', narrow: 'narrow', veryNarrow: 'veryNarrow' })),
        Pe = Object.freeze(
          ((Se = {}), v()(Se, Ee.wide, 500), v()(Se, Ee.narrow, 285), v()(Se, Ee.veryNarrow, 200), Se),
        ),
        ke = r('wtsM'),
        Ce = r('5Ixf'),
        je = r('RUwF'),
        _e = r('AtEG'),
        Le = r('NnQ9'),
        xe = r('p6DB'),
        Te = r('pHub'),
        Re = r('8A5z'),
        Be = r('Lsrn'),
        Me = r('k/Ka')
      function De(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? De(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : De(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var He = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Me.a)(
          'svg',
          Ae(
            Ae({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Be.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          n.createElement(
            'g',
            null,
            n.createElement('path', {
              d: 'M12.13 1.5c-4.684 0-8.387 4.316-8.387 9.055 0 4.95 6.51 11.945 8.386 11.945 1.642 0 8.152-7.383 8.152-12.334 0-4.74-3.702-8.666-8.153-8.666zm.026 13.17c-2.924 0-5.178-2.232-5.178-4.84 0-1.217.402-2.313 1.08-3.178v.01c0 1.08.884 1.958 1.976 1.958s1.977-.877 1.977-1.958c0-.8-.486-1.488-1.182-1.79.422-.106.865-.168 1.327-.168 2.636 0 4.89 2.23 4.89 5.126 0 2.61-2.252 4.84-4.89 4.84z',
            }),
          ),
        )
      }
      He.metadata = { width: 24, height: 24 }
      var ze = He
      function We(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? We(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : We(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function Ie(e) {
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
          var r,
            n = h()(e)
          if (t) {
            var o = h()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var Ne = /^https?:\/\/(?:www.)?(?:periscope|pscp).tv/,
        Ve = P.a.j25d7cc9,
        Ke = P.a.a858b25b,
        Ue = P.a.faf9f483,
        Ge = P.a.ae2ea9e6,
        Xe = P.a.hea01797,
        qe = P.a.f8a09386,
        Ye = 'ControlBar-',
        Ze = {
          CAPTIONS: ''.concat(Ye, 'Captions'),
          PERISCOPE: ''.concat(Ye, 'Periscope'),
          FULLSCREEN: ''.concat(Ye, 'Fullscreen'),
          SETTING: ''.concat(Ye, 'Setting'),
        },
        Je = function (e) {
          return e === Ee.narrow || e === Ee.veryNarrow
        },
        Qe = (function (e) {
          f()(r, e)
          var t = Ie(r)
          function r(e) {
            var o
            if (
              (a()(this, r),
              (o = t.call(this, e)),
              v()(u()(o), 'state', { currentBreakpoint: Ee.wide, showScrubber: !0, scrubTime: 0 }),
              v()(u()(o), '_parentRef', n.createRef()),
              v()(u()(o), '_renderActionButton', function (e, t) {
                var r = t.controls,
                  a = t.isPlaying,
                  i = e.pause,
                  c = e.play,
                  s = e.replay,
                  u = o.state.currentBreakpoint,
                  l = Object(C.e)(t),
                  f = Je(u) ? 'xSmall' : 'medium'
                return !l || l.isLive
                  ? null
                  : a || (r && 'PLAY_REQUESTED' === r.playState)
                  ? n.createElement(g.b, {
                      accessibilityLabel: ke.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: o.props.showScrubber,
                      icon: n.createElement(Ce.a, null),
                      onPress: i,
                      size: f,
                    })
                  : r.isReplayButtonShown
                  ? n.createElement(g.b, {
                      accessibilityLabel: ke.f,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: o.props.showScrubber,
                      icon: n.createElement(je.a, null),
                      onPress: s,
                      size: f,
                    })
                  : n.createElement(g.b, {
                      accessibilityLabel: ke.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: o.props.showScrubber,
                      icon: n.createElement(_e.a, null),
                      onPress: c,
                      size: f,
                    })
              }),
              v()(u()(o), '_renderViewCount', function (e) {
                var t = Object(C.e)(e)
                if (!t) return null
                var r = Object(C.a)(t)
                return r ? n.createElement(S.a, null, r) : null
              }),
              v()(u()(o), '_renderPublisherAttribution', function (e) {
                var t = o.props,
                  r = t.publisherDisplayName,
                  a = t.publisherProfileImageUrl,
                  i = Object(C.e)(e)
                return r && a && i
                  ? n.createElement(
                      z.a,
                      { style: D.g.flex },
                      n.createElement(
                        z.a,
                        { style: [D.g.withMargin, D.g.flex] },
                        n.createElement(U.a, { color: 'white', name: r, profileImageUrl: a }),
                      ),
                    )
                  : null
              }),
              v()(u()(o), '_renderMiddot', function (e) {
                var t = o.props,
                  r = t.publisherDisplayName,
                  a = t.publisherProfileImageUrl,
                  i = Object(C.e)(e)
                return i && r && a && (i.viewCount || i.viewerCount) ? n.createElement(S.a, null, '·') : null
              }),
              v()(u()(o), '_renderAdBadge', function (e) {
                var t = Object(C.e)(e),
                  r = o.state.currentBreakpoint
                if (t && t.displayType === O.c.AD) {
                  var a = t.advertiserName
                  return n.createElement(
                    S.a,
                    { style: Je(r) && { fontSize: N.a.theme.fontSizes.subtext2 } },
                    a ? Ge({ advertiserName: a }) : Ue,
                  )
                }
                return null
              }),
              v()(u()(o), '_renderFullScreenButton', function (e, t) {
                var r = o.props.fullscreenAdsDisabledOnIOS,
                  a = Object(C.e)(t),
                  i = (null == a ? void 0 : a.displayType) === O.c.AD && K.b.isIOS(),
                  c = t.fullscreen,
                  s = o.state.currentBreakpoint,
                  u = o._fullScreenIcon,
                  l = Je(s) ? 'xSmall' : 'medium'
                return r && i
                  ? null
                  : c.isFullscreen
                  ? n.createElement(g.b, {
                      accessibilityLabel: ke.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: o.props.showScrubber,
                      icon: n.createElement(u, { isFullscreen: c.isFullscreen }),
                      onPress: o._exitFullScreen(e),
                      size: l,
                    })
                  : n.createElement(g.b, {
                      accessibilityLabel: ke.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: o.props.showScrubber,
                      icon: n.createElement(u, { isFullscreen: c.isFullscreen }),
                      onPress: o._requestFullScreen(e),
                      size: l,
                    })
              }),
              v()(u()(o), '_fullScreenIcon', function (e) {
                var t = e.isFullscreen,
                  r = (e.style, et.hidden),
                  o = et.shown
                return n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(Le.a, { style: t ? r : o }),
                  n.createElement(xe.a, { style: t ? o : r }),
                )
              }),
              v()(u()(o), '_requestFullScreen', function (e) {
                return function () {
                  e.fullScreen(o.props.containerRef)
                }
              }),
              v()(u()(o), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              v()(u()(o), '_renderScrubber', function (e) {
                return o.props.showScrubber && o.state.showScrubber
                  ? n.createElement(
                      z.a,
                      { style: D.g.scrubber },
                      n.createElement(y.a, { periodic: !0 }, function (t) {
                        var r = t.playerState,
                          o = Object(C.e)(r)
                        return n.createElement(T, {
                          accessibilityLabel: Xe,
                          currentTime: Object(C.g)(o),
                          duration: Object(C.h)(o),
                          isScrubbing: r.isScrubbing,
                          isSeeking: r.isSeeking,
                          playerApi: e,
                        })
                      }),
                    )
                  : null
              }),
              v()(u()(o), '_renderVolume', function (e, t) {
                var r = t.isMuted,
                  a = t.volume,
                  i = e.mute,
                  c = e.setVolume,
                  s = e.unmute,
                  u = o.state,
                  l = u.containerHeight,
                  f = u.currentBreakpoint,
                  d = r ? s : i,
                  p = r ? ke.g : ke.c
                return n.createElement(Oe.a, {
                  accessibilityLabelIcon: p,
                  accessibilityLabelSlider: ke.h,
                  containerHeight: l,
                  isMuted: r,
                  onHideSlider: o._showScrubberHandler(!0),
                  onMuteToggle: d,
                  onShowSlider: o._showScrubberHandler(!1),
                  onSliderChange: o._setVolumePercent(c),
                  size: Je(f) ? 'xSmall' : 'medium',
                  volumePercent: 100 * a,
                })
              }),
              v()(u()(o), '_renderCaptionsButton', function (e, t) {
                var r = Object(C.e)(t)
                if (r && r.hasCaptions) {
                  var a = o.state.currentBreakpoint,
                    i = t.areCaptionsShown,
                    c = e.toggleCaptions
                  return n.createElement(g.b, {
                    accessibilityLabel: i ? Ve : Ke,
                    hoverLabelWithExtraSpace: o.props.showScrubber,
                    icon: i ? n.createElement(Te.a, null) : n.createElement(Re.a, null),
                    onPress: c,
                    size: Je(a) ? 'xSmall' : 'medium',
                    testID: 'captions',
                  })
                }
              }),
              v()(u()(o), '_renderTimePlayed', function () {
                return n.createElement(y.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    r = o.state.currentBreakpoint,
                    a = Object(C.e)(t),
                    i = Object(C.d)(a),
                    c = Object(C.f)(a),
                    s = t.controls,
                    u = t.isSeeking,
                    l = s.scrubToFraction,
                    f = u && void 0 !== l && c ? l * c : Object(C.d)(a) || 0
                  if (a && 'number' == typeof i && c && !a.isLive) {
                    var d =
                      r === Ee.veryNarrow
                        ? ''.concat(Object(C.b)(c - f))
                        : ''.concat(Object(C.b)(f), ' / ').concat(Object(C.b)(c))
                    return n.createElement(S.a, { style: Je(r) && { fontSize: N.a.theme.fontSizes.subtext2 } }, d)
                  }
                  return null
                })
              }),
              v()(u()(o), '_renderPeriscopeOrCustomIconLink', function (e, t, r) {
                var n = e.pause,
                  a = o.props.customControlBarIcon,
                  i = Object(C.e)(t),
                  c = r && r.hidePeriscopeLink,
                  s = null == i ? void 0 : i.broadcastShareUrl
                return s && Ne.test(s) ? o._renderPeriscopeLink(i, c, n) : a ? o._renderCustomIconLink(a) : void 0
              }),
              v()(u()(o), '_renderPeriscopeLink', function (e, t, r) {
                return n.createElement(y.a, { periodic: !0 }, function (a) {
                  a.playerState
                  if (e && e.broadcastShareUrl && !e.unavailableInPeriscope && !t) {
                    var i = o.state.currentBreakpoint,
                      c = new V.a(e.broadcastShareUrl),
                      s = Object(C.d)(e),
                      u = Object(C.i)(e)
                    if (s && s > 0 && !e.isLive) c.addSearchParam('t', s.toString())
                    else if (e.isLive && u) {
                      var l = u + (s || 0)
                      c.addSearchParam('t', l.toString())
                    }
                    return n.createElement(g.b, {
                      accessibilityLabel: qe,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: o.props.showScrubber,
                      icon: n.createElement(ze, null),
                      link: { pathname: c.toString(), anchorless: !0 },
                      onPress: r,
                      size: Je(i) ? 'xSmall' : 'medium',
                      testID: 'periscopeLink',
                    })
                  }
                })
              }),
              v()(u()(o), '_renderCustomIconLink', function (e) {
                var t = o.state.currentBreakpoint,
                  r = new V.a(e.link),
                  a = e.tooltipLabel,
                  i = e.onPress
                return n.createElement(g.b, {
                  accessibilityLabel: a,
                  hoverLabelPreferredHorizontalOrientation: 'start',
                  hoverLabelWithExtraSpace: o.props.showScrubber,
                  icon: e.icon,
                  link: { pathname: r.toString(), anchorless: !0 },
                  onPress: i,
                  size: Je(t) ? 'xSmall' : 'medium',
                })
              }),
              v()(u()(o), '_showScrubberHandler', function (e) {
                return function () {
                  return o.setState({ showScrubber: e })
                }
              }),
              v()(u()(o), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              v()(u()(o), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  r = t.height,
                  n = t.width,
                  a = o.state.currentBreakpoint,
                  i = o.props,
                  c = i.hideControls,
                  s = i.playerApi,
                  u = i.playerState
                if (s) {
                  var l = 0
                  ;(l = c ? (null != u && u.isPreview ? N.a.theme.spacesPx.space40 : N.a.theme.spacesPx.space12) : r),
                    o.props.playerApi.setCaptionDefaultOffset({ bottom: l })
                }
                var f = o._convertWidthToBreakpoint(n)
                f !== a &&
                  o.setState(function (e) {
                    return { currentBreakpoint: f }
                  })
              }),
              v()(u()(o), '_convertWidthToBreakpoint', function (e) {
                var t
                return (
                  e > Pe.wide
                    ? (t = Ee.wide)
                    : e < Pe.veryNarrow
                    ? (t = Ee.veryNarrow)
                    : e < Pe.narrow && (t = Ee.narrow),
                  t
                )
              }),
              e.containerRef)
            ) {
              var i = e.containerRef.getBoundingClientRect(),
                c = i.height,
                s = i.width
              o.state = Fe(
                Fe({}, o.state),
                {},
                { currentBreakpoint: o._convertWidthToBreakpoint(s), containerHeight: c },
              )
            }
            return o
          }
          return (
            c()(
              r,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props,
                      r = t.hideControls,
                      o = t.playerApi,
                      a = t.playerDisplayOptions,
                      i = t.playerState,
                      c = this.state.currentBreakpoint
                    return o && i
                      ? n.createElement(k.a.ObserverContext.Consumer, null, function (t) {
                          return n.createElement(
                            z.a,
                            { onLayout: e._handleLayout, pointerEvents: 'auto', ref: e._parentRef, style: D.e },
                            n.createElement(w.a, {
                              actionButton: e._renderActionButton(o, i),
                              displayDismissableControls: !r,
                              leftContent: n.createElement(
                                n.Fragment,
                                null,
                                e._renderAdBadge(i),
                                e._renderPublisherAttribution(i),
                                c === Ee.wide ? e._renderMiddot(i) : null,
                                c === Ee.wide ? e._renderViewCount(i) : null,
                              ),
                              rightContent: n.createElement(
                                n.Fragment,
                                null,
                                e._renderTimePlayed(),
                                n.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ze.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderCaptionsButton(o, i),
                                ),
                                e._renderVolume(o, i),
                                n.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ze.PERISCOPE, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderPeriscopeOrCustomIconLink(o, i, a),
                                ),
                                n.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ze.SETTING, interactionTimeoutMs: 0, mouseover: !0 },
                                  n.createElement(ge, { isNarrow: Je(c), playerApi: o, playerState: i }),
                                ),
                                n.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ze.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderFullScreenButton(o, i),
                                ),
                              ),
                              scrubber: e._renderScrubber(o),
                              skipButton: n.createElement(I, { useRefactoredLayout: !0 }),
                            }),
                          )
                        })
                      : null
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return e.hideControls ? Fe(Fe({}, t), {}, { showScrubber: !0 }) : t
                  },
                },
              ],
            ),
            r
          )
        })(n.PureComponent)
      v()(Qe, 'defaultProps', { showScrubber: !0 })
      var $e = Qe,
        et = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } }
      function tt(e) {
        return n.createElement($e, e)
      }
    },
    w05h: function (e, t, r) {
      'use strict'
      r.d(t, 'e', function () {
        return a
      }),
        r.d(t, 'c', function () {
          return i
        }),
        r.d(t, 'b', function () {
          return c
        }),
        r.d(t, 'a', function () {
          return s
        }),
        r.d(t, 'd', function () {
          return u
        }),
        r.d(t, 'p', function () {
          return l
        }),
        r.d(t, 'q', function () {
          return f
        }),
        r.d(t, 'j', function () {
          return d
        }),
        r.d(t, 'h', function () {
          return p
        }),
        r.d(t, 'g', function () {
          return b
        }),
        r.d(t, 'f', function () {
          return h
        }),
        r.d(t, 'i', function () {
          return m
        }),
        r.d(t, 'o', function () {
          return v
        }),
        r.d(t, 'k', function () {
          return y
        }),
        r.d(t, 'l', function () {
          return w
        }),
        r.d(t, 'm', function () {
          return g
        }),
        r.d(t, 'n', function () {
          return S
        })
      var n = r('3XMw'),
        o = r.n(n),
        a = o.a.eeb64451,
        i = o.a.f3c268a4,
        c = o.a.g60001bb,
        s = o.a.dff1ddd9,
        u = o.a.b0b22805,
        l = o.a.e8733ed8,
        f = o.a.i3b7a017,
        d = o.a.c67e71aa,
        p = o.a.a6ada13d,
        b = o.a.j0f12222,
        h = o.a.f569f7c7,
        m = o.a.j0c67729,
        v = o.a.f73003aa,
        y = o.a.b3112b89,
        w = o.a.h6333ad0,
        g = o.a.c59da417,
        S = o.a.c3c147cf
    },
    wtsM: function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return a
      }),
        r.d(t, 'f', function () {
          return i
        }),
        r.d(t, 'e', function () {
          return c
        }),
        r.d(t, 'c', function () {
          return s
        }),
        r.d(t, 'g', function () {
          return u
        }),
        r.d(t, 'h', function () {
          return l
        }),
        r.d(t, 'a', function () {
          return f
        }),
        r.d(t, 'b', function () {
          return d
        })
      var n = r('3XMw'),
        o = r.n(n),
        a = o.a.fb236727,
        i = o.a.e9bd453e,
        c = o.a.f17dfdb5,
        s = o.a.ec8ab8b4,
        u = o.a.b8b6344a,
        l = o.a.c9a642f9,
        f = o.a.c27e60bf,
        d = o.a.d2969f1f
    },
  },
])
//# sourceMappingURL=WIPED
