;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    '+aTU': function (e, t, r) {
      'use strict'
      var n = r('VrFO'),
        a = r.n(n),
        o = r('Y9Ll'),
        i = r.n(o),
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
              a()(this, e)
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
        return a
      }),
        r.d(t, 'd', function () {
          return o
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
        a = n.root,
        o = n.container,
        i = [n.flexRow, n.bottomBar],
        c = [n.actionContainer, n.leftContainer, n.flexShrink, n.flexRow],
        s = [n.actionContainer, n.rightContainer, n.flexRow],
        u = n.skipAdText
      t.g = n
    },
    'IE/l': function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        o = r('USG3'),
        i = r('aNKf'),
        c = r('rHpw'),
        s = r('MWbm'),
        u = r('BVo1')
      t.a = function (e) {
        var t = e.actionButton,
          r = e.displayDismissableControls,
          n = void 0 === r || r,
          l = e.leftContent,
          f = e.rightContent,
          d = e.scrubber,
          p = e.skipButton
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            o.a,
            { show: n },
            a.a.createElement(i.a, {
              colors: [c.a.theme.colors.transparent, c.a.theme.colors.translucentBlack77],
              style: u.g.absoluteContainer,
            }),
          ),
          a.a.createElement(
            s.a,
            { style: u.g.controlContainer },
            a.a.createElement(
              s.a,
              { style: u.g.flex },
              a.a.createElement(
                o.a,
                { show: n },
                a.a.createElement(
                  s.a,
                  { style: u.g.controlsBottomOffset },
                  d,
                  a.a.createElement(
                    s.a,
                    { style: u.c },
                    a.a.createElement(
                      s.a,
                      { style: u.a },
                      t,
                      a.a.createElement(s.a, { style: [u.g.flexRow, u.g.flexShrink] }, l),
                    ),
                    a.a.createElement(s.a, { style: u.b }, f),
                  ),
                ),
              ),
            ),
            p && a.a.createElement(s.a, { style: u.g.controlsBottomOffset }, p),
          ),
        )
      }
    },
    N2PN: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return d
      })
      var n = r('97Jx'),
        a = r.n(n),
        o = r('m3Bd'),
        i = r.n(o),
        c = r('ERkP'),
        s = r.n(c),
        u = r('/yvb'),
        l = r('gK2g'),
        f = function (e) {
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
          return s.a.createElement(u.a, a()({}, t, { hoverLabel: r, size: e.size || 'medium', type: 'onMediaText' }))
        },
        d = function (e) {
          var t = e.icon,
            r = e.onPress,
            n = e.scribeNamespace,
            o = e.size,
            c = e.testID,
            u = i()(e, ['icon', 'onPress', 'scribeNamespace', 'size', 'testID']),
            d = l.a.useAnalytics()
          return s.a.createElement(
            f,
            a()({}, u, {
              icon: t,
              onPress: function (e) {
                r && r(e), d.scribe(n)
              },
              size: o,
              testID: c,
            }),
          )
        }
      t.b = f
    },
    NnQ9: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ERkP'),
        i = r.n(o),
        c = r('Lsrn'),
        s = r('shC7'),
        u = r('k/Ka')
      function l(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(u.a)(
          'svg',
          f(
            f({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [c.a.root, e.style, s.a.getConstants().isRTL && c.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M3.5 19.44v-4c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5.81c0 .414.336.75.75.75h5.81c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-4l6.577-6.576c.146-.146.22-.338.22-.53s-.073-.384-.22-.53c-.293-.293-.768-.293-1.06 0L3.5 19.44zM14.69 2.75c0 .414.336.75.75.75h4l-6.577 6.576c-.293.293-.293.768 0 1.06s.768.294 1.06 0L20.5 4.562v4c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75h-5.81c-.414 0-.75.336-.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
        a = r('3XMw'),
        o = r.n(a),
        i = o.a.d58baa7e,
        c = o.a.i3b7a017,
        s = o.a.ie5d110e,
        u = o.a.df5f11b3,
        l = o.a.a7cd5cf4,
        f = o.a.b6eb8f69,
        d = o.a.dcc2b9b2,
        p = o.a.hf4ffd4d,
        b = o.a.f6e90cd6,
        h = o.a.e7d191ec,
        m = o.a.h1888a33,
        v = o.a.c58b2ab7,
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
                  a = e.timecode,
                  o = e.videoTrack,
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
                if ('number' == typeof a && a) {
                  var g = S(a),
                    O = g.hoursWord,
                    E = g.minutesWord,
                    P = g.secondsWord
                  i.push(h({ hoursWord: O, minutesWord: E, secondsWord: P }))
                }
                var k = o && w(o)
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
            a = t.seconds,
            o = { hoursWord: '', minutesWord: '', secondsWord: '' }
          return 0 === a && 0 === n && 0 === r && 0 === n
            ? ((o.secondsWord = c(0)), o)
            : ((o.hoursWord = r > 0 ? u(r) : ''),
              (o.minutesWord = n > 0 ? s(n) : ''),
              (o.secondsWord = a > 0 ? c(a) : ''),
              o)
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
            a = t.seconds,
            o = a < 10 ? '0'.concat(a) : a,
            i = n < 10 && r ? '0'.concat(n) : n
          return r ? ''.concat(r, ':').concat(i, ':').concat(o) : ''.concat(i, ':').concat(o)
        },
        R = function (e) {
          return { hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) }
        }
    },
    USG3: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return d
      })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ddV6'),
        i = r.n(o),
        c = r('ERkP'),
        s = r.n(c)
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
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : u(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var f = {
        transitionDuration: '250ms',
        transitionProperty: 'opacity, height',
        transitionTimingFunction: 'ease',
        willChange: 'opacity',
      }
      function d(e) {
        var t = e.children,
          r = e.show,
          n = s.a.useState(!r),
          a = i()(n, 2),
          o = a[0],
          c = a[1]
        return (
          s.a.useEffect(
            function () {
              r && o && c(!1)
            },
            [o, r],
          ),
          s.a.useMemo(
            function () {
              var e = l(l({}, f), {}, { opacity: r ? 1 : 0 })
              return s.a.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    r || o || c(!0)
                  },
                  style: e,
                },
                o ? null : t,
              )
            },
            [t, r, o],
          )
        )
      }
    },
    Y3cQ: function (e, t, r) {
      'use strict'
      var n = r('ERkP'),
        a = r.n(n),
        o = r('fyvP'),
        i = r('rHpw'),
        c = r('MWbm')
      t.a = function (e) {
        return a.a.createElement(c.a, { style: s.root }, a.a.createElement(o.a, e))
      }
      var s = i.a.create(function (e) {
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
        a = r.n(n),
        o = r('t62R'),
        i = function (e) {
          return a.a.createElement(
            o.b,
            { color: 'white', numberOfLines: 1, style: [c.withMargin, e.style] },
            e.children,
          )
        },
        c = r('rHpw').a.create(function (e) {
          return { withMargin: { marginHorizontal: e.spaces.space4 } }
        })
      t.a = a.a.memo(i)
    },
    hhMf: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return R
      })
      r('OZaJ')
      var n = r('97Jx'),
        a = r.n(n),
        o = r('VrFO'),
        i = r.n(o),
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
        g = r.n(w),
        S = r('6fxz')
      function O(e) {
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
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var E = 'click',
        P = 'focused',
        k = 'mousemove',
        C = 'mouseover',
        j = 'touch',
        _ = function (e, t) {
          return function (r) {
            var n = r.observed
            return n[e].add(t), { observed: n }
          }
        },
        L = function (e, t) {
          return function (r) {
            var n = r.observed
            return n[e].delete(t), { observed: n }
          }
        },
        x = g.a.createContext({
          observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() },
          Observer: function () {
            return null
          },
        }),
        T = g.a.createContext(function () {
          return null
        }),
        R = (function (e) {
          d()(r, e)
          var t = O(r)
          function r() {
            var e
            i()(this, r)
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
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
                  o = t.click,
                  i = t.focus,
                  c = t.mousemove,
                  s = t.mouseover,
                  u = t.touch,
                  l = t.interactionTimeoutMs,
                  f = void 0 === l ? 2e3 : l,
                  d = {}
                return (
                  o && (d.onClick = e._handleClick(n, f)),
                  i && ((d.onBlur = e._handleBlur(n, f)), (d.onFocus = e._handleActive(n))),
                  c && (d.onMouseMove = e._handleMouseMove(n, f)),
                  s && ((d.onMouseEnter = e._handleMouseEnter(n)), (d.onMouseLeave = e._handleMouseLeave(n))),
                  u && ((d.onTouchStart = e._handleTouchStart(n)), (d.onTouchEnd = e._handleTouchEnd(n, f))),
                  g.a.createElement(
                    'div',
                    a()({}, d, {
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
                  e.setState(_(C, t))
                }
              }),
              y()(l()(e), '_handleMouseLeave', function (t) {
                return function () {
                  e.setState(L(C, t))
                }
              }),
              y()(l()(e), '_handleTouchStart', function (t) {
                return function () {
                  e.setState(_(j, t))
                }
              }),
              y()(l()(e), '_handleTouchEnd', function (t, r) {
                return function () {
                  var n = j
                  clearTimeout(e._timeoutCollection[n][t]),
                    r
                      ? (e._timeoutCollection[n][t] = setTimeout(function () {
                          return e.setState(L(n, t))
                        }, r))
                      : e.setState(L(n, t))
                }
              }),
              y()(l()(e), '_handleMouseMove', function (t, r) {
                return function () {
                  var n = k
                  e.state.observed[n].has(t) || e.setState(_(n, t)),
                    clearTimeout(e._timeoutCollection[n][t]),
                    (e._timeoutCollection[n][t] = setTimeout(function () {
                      return e.setState(L(n, t))
                    }, r))
                }
              }),
              y()(l()(e), '_handleClick', function (t, r) {
                return function () {
                  var n = E
                  e.state.observed[n].has(t) || e.setState(_(n, t)),
                    clearTimeout(e._timeoutCollection[n][t]),
                    (e._timeoutCollection[n][t] = setTimeout(function () {
                      return e.setState(L(n, t))
                    }, r))
                }
              }),
              y()(l()(e), '_handleActive', function (t) {
                return function () {
                  var r = P
                  clearTimeout(e._timeoutCollection[r][t])
                  var n = e.hasActiveInteractionWatcherChildren()
                  S.a.hadKeyboardEvent && n && e.setState(_(r, t))
                }
              }),
              y()(l()(e), '_handleBlur', function (t, r) {
                return function () {
                  var n = P
                  clearTimeout(e._timeoutCollection[n][t]),
                    e.state.observed[n].has(t) && (e._timeoutCollection[n][t] = setTimeout(e._handleFocusReset(t), r))
                }
              }),
              y()(l()(e), '_handleFocusReset', function (t) {
                return function () {
                  var r = P
                  e.setState(L(r, t)), clearTimeout(e._timeoutCollection[r][t])
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
                  return g.a.createElement(
                    r.ObserverContext.Provider,
                    { value: t },
                    g.a.createElement(r.Context.Provider, { value: this.getContext() }, e),
                  )
                },
              },
            ]),
            r
          )
        })(g.a.Component)
      y()(R, 'Context', x), y()(R, 'ObserverContext', T)
    },
    kCRK: function (e, t, r) {
      'use strict'
      r.d(t, 'b', function () {
        return n
      }),
        r.d(t, 'd', function () {
          return a
        }),
        r.d(t, 'a', function () {
          return o
        }),
        r.d(t, 'c', function () {
          return i
        }),
        r.d(t, 'e', function () {
          return c
        })
      var n = { VISIT: 'url', WATCH: 'watch' },
        a = { watch_now: 'watch_now', visit_site: 'visit_site', shop: 'shop', see_more: 'see_more', go_to: 'go_to' },
        o = { MEDIA: 'media_entity', GIF: 'gif', VMAP: 'vmap', BROADCAST: 'broadcast' },
        i = { AD: 'ad', CONTENT: 'content' },
        c = { BROADCAST: 'broadcast', DM: 'dm', TWEET: 'tweet' }
    },
    p6DB: function (e, t, r) {
      'use strict'
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('KEM+'),
        a = r.n(n),
        o = r('ERkP'),
        i = r.n(o),
        c = r('Lsrn'),
        s = r('shC7'),
        u = r('k/Ka')
      function l(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                a()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(u.a)(
          'svg',
          f(
            f({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [c.a.root, e.style, s.a.getConstants().isRTL && c.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          i.a.createElement(
            'g',
            null,
            i.a.createElement('path', {
              d: 'M3.983 13.605c0 .414.336.75.75.75H8.57l-6.357 6.357c-.297.297-.297.777 0 1.074s.777.297 1.074 0l6.357-6.357v3.828c0 .414.336.75.75.75s.75-.336.75-.75v-5.653c0-.414-.336-.75-.75-.75h-5.66c-.415 0-.75.336-.75.75zm16.73-11.392L14.355 8.57V4.74c0-.413-.336-.75-.75-.75s-.75.337-.75.75v5.654c0 .414.336.75.75.75h5.653c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H15.43l6.357-6.357c.148-.148.223-.343.223-.537s-.074-.39-.223-.537c-.297-.297-.777-.297-1.074 0z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    ub6r: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return rt
      })
      var n = r('ERkP'),
        a = r.n(n),
        o = (r('OZaJ'), r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn'), r('VrFO')),
        i = r.n(o),
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
        w = (r('2G9S'), r('7x/C'), r('DZ+c'), r('hBvt'), r('Zl35')),
        g = r('IE/l'),
        S = r('N2PN'),
        O = r('dPHj'),
        E = r('kCRK'),
        P = r('3XMw'),
        k = r.n(P),
        C = r('hhMf'),
        j = r('Q0n6'),
        _ = r('9RkS'),
        L = r('+d3d')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var T = k.a.f06f2e53,
        R = (function (e) {
          d()(r, e)
          var t = x(r)
          function r(e) {
            var n
            return (
              i()(this, r),
              (n = t.call(this, e)),
              y()(l()(n), '_handleChange', function (e) {
                n.setState({ scrubTo: e }), (n.scheduledSeekTargetSec = e), n._throttledPlayerSeek()
              }),
              y()(
                l()(n),
                '_throttledPlayerSeek',
                Object(L.a)(
                  function () {
                    var e = l()(n).scheduledSeekTargetSec,
                      t = n.props,
                      r = t.duration,
                      a = t.playerApi
                    if (r) {
                      var o = e / r
                      a.scrubToFraction(o)
                    }
                  },
                  50,
                  { leading: !0, trailing: !0 },
                ),
              ),
              y()(l()(n), '_handleActive', function (e) {
                return (
                  !n.state.isScrubbing && e && document.addEventListener('click', n._handleCaptureClick, !0),
                  e || n._throttledPlayerSeek.flush(),
                  n.props.playerApi.setScrubbing(e),
                  n.setState({ isScrubbing: e })
                )
              }),
              y()(l()(n), '_handleCaptureClick', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.removeEventListener('click', n._handleCaptureClick, !0)
              }),
              (n.state = { isScrubbing: !1, scrubTo: 0 }),
              n
            )
          }
          return (
            s()(r, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    r = e.currentTime,
                    n = e.duration,
                    o = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : r
                  if ('number' == typeof o && 'number' == typeof n && n > 0) {
                    var i = Object(j.b)(o),
                      c = Object(j.b)(n)
                    return a.a.createElement(_.a, {
                      accessibilityLabel: t,
                      accessibilityLabelValueText: T({ currentTime: i, durationTime: c }),
                      color: 'white',
                      keepLTR: !0,
                      keyboardStep: 5,
                      max: n,
                      min: 0,
                      onActive: this._handleActive,
                      onChange: this._handleChange,
                      step: 'any',
                      value: o,
                      withHidingThumb: !0,
                    })
                  }
                  return null
                },
              },
            ]),
            r
          )
        })(a.a.PureComponent),
        B = r('97Jx'),
        M = r.n(B),
        D = r('/yvb'),
        A = r('BVo1'),
        H = r('w05h'),
        z = r('+/1j'),
        W = r('MWbm')
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var I = (function (e) {
        d()(r, e)
        var t = F(r)
        function r() {
          var e
          i()(this, r)
          for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            y()(l()(e), '_handleSkipPress', function () {
              e.props.playerApi.nextTrack()
            }),
            e
          )
        }
        return (
          s()(r, [
            {
              key: 'render',
              value: function () {
                if (!this.props.playerState) return null
                var e = Object(j.e)(this.props.playerState)
                if (!e || e.durationMs <= this.props.skipThreshold || e.displayType !== E.c.AD) return null
                var t = Math.ceil((5e3 - e.currentTimeMs) / 1e3),
                  r = t > 0,
                  n = r ? Object(H.m)({ seconds: Object(H.q)(t) }) : H.l,
                  o = r ? Object(H.n)({ seconds: Object(H.p)(t) }) : H.k
                return a.a.createElement(
                  D.a,
                  {
                    accessibilityLabel: n,
                    disabled: r,
                    onPress: r ? void 0 : this._handleSkipPress,
                    pointerEvents: 'auto',
                    size: 'small',
                    testID: 'ControlBar-skipButton',
                    type: 'onMediaDominantColorFilled',
                  },
                  a.a.createElement(z.a, { style: A.f }, o),
                )
              },
            },
          ]),
          r
        )
      })(a.a.PureComponent)
      y()(I, 'defaultProps', { skipThreshold: 7e3 })
      var N = a.a.memo(function (e) {
          return e.useRefactoredLayout
            ? a.a.createElement(
                W.a,
                { pointerEvents: 'none', style: A.b },
                a.a.createElement(w.a, { periodic: !0 }, function (t) {
                  var r = t.playerApi,
                    n = t.playerState
                  return a.a.createElement(I, M()({}, e, { playerApi: r, playerState: n }))
                }),
              )
            : a.a.createElement(
                W.a,
                { pointerEvents: 'none', style: A.e },
                a.a.createElement(
                  W.a,
                  { style: A.d },
                  a.a.createElement(
                    W.a,
                    { style: A.c },
                    a.a.createElement(W.a, { style: A.a }),
                    a.a.createElement(
                      W.a,
                      { style: A.b },
                      a.a.createElement(w.a, { periodic: !0 }, function (t) {
                        var r = t.playerApi,
                          n = t.playerState
                        return a.a.createElement(I, M()({}, e, { playerApi: r, playerState: n }))
                      }),
                    ),
                  ),
                ),
              )
        }),
        V = r('rHpw'),
        K = r('+aTU'),
        U = r('aITJ'),
        G = r('jV+4'),
        X = r('m3Bd'),
        q = r.n(X),
        Y = r('ddV6'),
        Z = r.n(Y),
        J = r('M2x3'),
        Q = (r('lZm3'), r('uFXj'), r('nBUg')),
        $ = r('3dyc'),
        ee = r('t62R'),
        te = r('Y3cQ'),
        re = r('efqG'),
        ne = k.a.h9b3104d,
        ae = k.a.ccc97152,
        oe = k.a.e8b5757c,
        ie = k.a.e7e954de,
        ce = k.a.g07ffe66,
        se = k.a.d8bede9d,
        ue = k.a.j41845c7,
        le = k.a.e9eeed9e,
        fe = k.a.fe45dc83,
        de = k.a.e791190a,
        pe = k.a.e23b20af,
        be = { label: se, value: '1' },
        he = [
          { label: oe, value: '0.25' },
          { label: ie, value: '0.5' },
          { label: ce, value: '0.75' },
        ],
        me = [
          { label: ue, value: '1.25' },
          { label: le, value: '1.5' },
          { label: fe, value: '1.75' },
          { label: de, value: '2' },
        ]
      function ve(e) {
        switch (e) {
          case 'fast':
            return [be].concat(me)
          case 'slow':
            return [].concat(he, [be])
          default:
            return [].concat(he, [be], me)
        }
      }
      var ye = V.a.create(function (e) {
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
        we = function (e) {
          var t,
            r = null === (t = e.playerState.playbackRate) || void 0 === t ? void 0 : t.toString(),
            n = e.children,
            o = e.onDismiss,
            i = e.showVideoSettings,
            c = e.playerState,
            s = c.features,
            u = c.fullscreen.isFullscreen,
            l = null == s ? void 0 : s.web_video_playback_rate_enabled,
            f = i ? $.b.forceVisible : $.b.forceHidden,
            d = Q.b.useProps().isDMDrawer
          function p(t, r) {
            e.playerApi.setPlaybackRate(parseFloat(r)), o()
          }
          return a.a.createElement(
            re.a,
            {
              onDismiss: o,
              renderContent: function (e, t) {
                var n = 'sheet' === t
                return a.a.createElement(
                  W.a,
                  { accessibilityRole: 'dialog', style: ye.root },
                  a.a.createElement(
                    W.a,
                    { style: ye.title },
                    a.a.createElement(ee.b, { size: 'headline1', weight: 'bold' }, ae),
                  ),
                  a.a.createElement(te.a, {
                    accessibilityLabel: ae,
                    name: 'playback_rate',
                    onChange: p,
                    options: ve(l),
                    value: r,
                  }),
                  n
                    ? a.a.createElement(
                        D.a,
                        { onPress: o, style: ye.cancelButton, testID: 'Cancel', type: 'primaryOutlined' },
                        pe,
                      )
                    : null,
                )
              },
              visibilityBehavior: f,
              withArrow: !0,
              withFixedPosition: u || d(),
              withoutLayer: u,
            },
            n,
          )
        },
        ge = { action: 'click', element: 'video_settings' }
      function Se(e) {
        var t = a.a.useState({ showVideoSettings: !1, resumePlaybackOnDismiss: !1 }),
          r = Z()(t, 2),
          n = r[0],
          o = r[1],
          i = e.isNarrow,
          c = e.playerApi,
          s = e.playerState,
          u = q()(e, ['isNarrow', 'playerApi', 'playerState']),
          l = Object(j.e)(s)
        return l && l.playbackRateSupported
          ? a.a.createElement(
              we,
              {
                onDismiss: function () {
                  o({ showVideoSettings: !1 })
                },
                playerApi: c,
                playerState: s,
                showVideoSettings: n.showVideoSettings,
              },
              a.a.createElement(
                S.a,
                M()({}, u, {
                  accessibilityLabel: ne,
                  icon: a.a.createElement(J.a, null),
                  onPress: function () {
                    o({ showVideoSettings: !0 })
                  },
                  scribeNamespace: ge,
                  size: i ? 'xSmall' : 'medium',
                }),
              ),
            )
          : null
      }
      var Oe,
        Ee = r('kRXa'),
        Pe = (r('yH/f'), Object.freeze({ wide: 'wide', narrow: 'narrow', veryNarrow: 'veryNarrow' })),
        ke = Object.freeze(
          ((Oe = {}), y()(Oe, Pe.wide, 500), y()(Oe, Pe.narrow, 285), y()(Oe, Pe.veryNarrow, 200), Oe),
        ),
        Ce = r('wtsM'),
        je = r('5Ixf'),
        _e = r('RUwF'),
        Le = r('AtEG'),
        xe = r('NnQ9'),
        Te = r('p6DB'),
        Re = r('pHub'),
        Be = r('8A5z'),
        Me = r('Lsrn'),
        De = r('k/Ka')
      function Ae(e, t) {
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
      function He(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Ae(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var ze = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(De.a)(
          'svg',
          He(
            He({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Me.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M12.13 1.5c-4.684 0-8.387 4.316-8.387 9.055 0 4.95 6.51 11.945 8.386 11.945 1.642 0 8.152-7.383 8.152-12.334 0-4.74-3.702-8.666-8.153-8.666zm.026 13.17c-2.924 0-5.178-2.232-5.178-4.84 0-1.217.402-2.313 1.08-3.178v.01c0 1.08.884 1.958 1.976 1.958s1.977-.877 1.977-1.958c0-.8-.486-1.488-1.182-1.79.422-.106.865-.168 1.327-.168 2.636 0 4.89 2.23 4.89 5.126 0 2.61-2.252 4.84-4.89 4.84z',
            }),
          ),
        )
      }
      ze.metadata = { width: 24, height: 24 }
      var We = ze
      function Fe(e, t) {
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
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Fe(Object(r), !0).forEach(function (t) {
                y()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : Fe(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
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
          var r,
            n = m()(e)
          if (t) {
            var a = m()(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return b()(this, r)
        }
      }
      var Ve = /^https?:\/\/(?:www.)?(?:periscope|pscp).tv/,
        Ke = k.a.j25d7cc9,
        Ue = k.a.a858b25b,
        Ge = k.a.faf9f483,
        Xe = k.a.ae2ea9e6,
        qe = k.a.hea01797,
        Ye = k.a.f8a09386,
        Ze = 'ControlBar-',
        Je = {
          CAPTIONS: ''.concat(Ze, 'Captions'),
          PERISCOPE: ''.concat(Ze, 'Periscope'),
          FULLSCREEN: ''.concat(Ze, 'Fullscreen'),
          SETTING: ''.concat(Ze, 'Setting'),
        },
        Qe = function (e) {
          return e === Pe.narrow || e === Pe.veryNarrow
        },
        $e = (function (e) {
          d()(r, e)
          var t = Ne(r)
          function r(e) {
            var n
            if (
              (i()(this, r),
              (n = t.call(this, e)),
              y()(l()(n), 'state', { currentBreakpoint: Pe.wide, showScrubber: !0, scrubTime: 0 }),
              y()(l()(n), '_parentRef', a.a.createRef()),
              y()(l()(n), '_renderActionButton', function (e, t) {
                var r = t.controls,
                  o = t.isPlaying,
                  i = e.pause,
                  c = e.play,
                  s = e.replay,
                  u = n.state.currentBreakpoint,
                  l = Object(j.e)(t),
                  f = Qe(u) ? 'xSmall' : 'medium'
                return !l || l.isLive
                  ? null
                  : o || (r && 'PLAY_REQUESTED' === r.playState)
                  ? a.a.createElement(S.b, {
                      accessibilityLabel: Ce.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: n.props.showScrubber,
                      icon: a.a.createElement(je.a, null),
                      onPress: i,
                      size: f,
                    })
                  : r.isReplayButtonShown
                  ? a.a.createElement(S.b, {
                      accessibilityLabel: Ce.f,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: n.props.showScrubber,
                      icon: a.a.createElement(_e.a, null),
                      onPress: s,
                      size: f,
                    })
                  : a.a.createElement(S.b, {
                      accessibilityLabel: Ce.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: n.props.showScrubber,
                      icon: a.a.createElement(Le.a, null),
                      onPress: c,
                      size: f,
                    })
              }),
              y()(l()(n), '_renderViewCount', function (e) {
                var t = Object(j.e)(e)
                if (!t) return null
                var r = Object(j.a)(t)
                return r ? a.a.createElement(O.a, null, r) : null
              }),
              y()(l()(n), '_renderPublisherAttribution', function (e) {
                var t = n.props,
                  r = t.publisherDisplayName,
                  o = t.publisherProfileImageUrl,
                  i = Object(j.e)(e)
                return r && o && i
                  ? a.a.createElement(
                      W.a,
                      { style: A.g.flex },
                      a.a.createElement(
                        W.a,
                        { style: [A.g.withMargin, A.g.flex] },
                        a.a.createElement(G.a, { color: 'white', name: r, profileImageUrl: o }),
                      ),
                    )
                  : null
              }),
              y()(l()(n), '_renderMiddot', function (e) {
                var t = n.props,
                  r = t.publisherDisplayName,
                  o = t.publisherProfileImageUrl,
                  i = Object(j.e)(e)
                return i && r && o && (i.viewCount || i.viewerCount) ? a.a.createElement(O.a, null, '·') : null
              }),
              y()(l()(n), '_renderAdBadge', function (e) {
                var t = Object(j.e)(e),
                  r = n.state.currentBreakpoint
                if (t && t.displayType === E.c.AD) {
                  var o = t.advertiserName
                  return a.a.createElement(
                    O.a,
                    { style: Qe(r) && { fontSize: V.a.theme.fontSizes.subtext2 } },
                    o ? Xe({ advertiserName: o }) : Ge,
                  )
                }
                return null
              }),
              y()(l()(n), '_renderFullScreenButton', function (e, t) {
                var r = n.props.fullscreenAdsDisabledOnIOS,
                  o = Object(j.e)(t),
                  i = (null == o ? void 0 : o.displayType) === E.c.AD && U.b.isIOS(),
                  c = t.fullscreen,
                  s = n.state.currentBreakpoint,
                  u = n._fullScreenIcon,
                  l = Qe(s) ? 'xSmall' : 'medium'
                return r && i
                  ? null
                  : c.isFullscreen
                  ? a.a.createElement(S.b, {
                      accessibilityLabel: Ce.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: n.props.showScrubber,
                      icon: a.a.createElement(u, { isFullscreen: c.isFullscreen }),
                      onPress: n._exitFullScreen(e),
                      size: l,
                    })
                  : a.a.createElement(S.b, {
                      accessibilityLabel: Ce.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: n.props.showScrubber,
                      icon: a.a.createElement(u, { isFullscreen: c.isFullscreen }),
                      onPress: n._requestFullScreen(e),
                      size: l,
                    })
              }),
              y()(l()(n), '_fullScreenIcon', function (e) {
                var t = e.isFullscreen,
                  r = (e.style, tt.hidden),
                  n = tt.shown
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(xe.a, { style: t ? r : n }),
                  a.a.createElement(Te.a, { style: t ? n : r }),
                )
              }),
              y()(l()(n), '_requestFullScreen', function (e) {
                return function () {
                  e.fullScreen(n.props.containerRef)
                }
              }),
              y()(l()(n), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              y()(l()(n), '_renderScrubber', function (e) {
                return n.props.showScrubber && n.state.showScrubber
                  ? a.a.createElement(
                      W.a,
                      { style: A.g.scrubber },
                      a.a.createElement(w.a, { periodic: !0 }, function (t) {
                        var r = t.playerState,
                          n = Object(j.e)(r)
                        return a.a.createElement(R, {
                          accessibilityLabel: qe,
                          currentTime: Object(j.g)(n),
                          duration: Object(j.h)(n),
                          isScrubbing: r.isScrubbing,
                          isSeeking: r.isSeeking,
                          playerApi: e,
                        })
                      }),
                    )
                  : null
              }),
              y()(l()(n), '_renderVolume', function (e, t) {
                var r = t.isMuted,
                  o = t.volume,
                  i = e.mute,
                  c = e.setVolume,
                  s = e.unmute,
                  u = n.state,
                  l = u.containerHeight,
                  f = u.currentBreakpoint,
                  d = r ? s : i,
                  p = r ? Ce.g : Ce.c
                return a.a.createElement(Ee.a, {
                  accessibilityLabelIcon: p,
                  accessibilityLabelSlider: Ce.h,
                  containerHeight: l,
                  isMuted: r,
                  onHideSlider: n._showScrubberHandler(!0),
                  onMuteToggle: d,
                  onShowSlider: n._showScrubberHandler(!1),
                  onSliderChange: n._setVolumePercent(c),
                  size: Qe(f) ? 'xSmall' : 'medium',
                  volumePercent: 100 * o,
                })
              }),
              y()(l()(n), '_renderCaptionsButton', function (e, t) {
                var r = Object(j.e)(t)
                if (r && r.hasCaptions) {
                  var o = n.state.currentBreakpoint,
                    i = t.areCaptionsShown,
                    c = e.toggleCaptions
                  return a.a.createElement(S.b, {
                    accessibilityLabel: i ? Ke : Ue,
                    hoverLabelWithExtraSpace: n.props.showScrubber,
                    icon: i ? a.a.createElement(Re.a, null) : a.a.createElement(Be.a, null),
                    onPress: c,
                    size: Qe(o) ? 'xSmall' : 'medium',
                    testID: 'captions',
                  })
                }
              }),
              y()(l()(n), '_renderTimePlayed', function () {
                return a.a.createElement(w.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    r = n.state.currentBreakpoint,
                    o = Object(j.e)(t),
                    i = Object(j.d)(o),
                    c = Object(j.f)(o),
                    s = t.controls,
                    u = t.isSeeking,
                    l = s.scrubToFraction,
                    f = u && void 0 !== l && c ? l * c : Object(j.d)(o) || 0
                  if (o && 'number' == typeof i && c && !o.isLive) {
                    var d =
                      r === Pe.veryNarrow
                        ? ''.concat(Object(j.b)(c - f))
                        : ''.concat(Object(j.b)(f), ' / ').concat(Object(j.b)(c))
                    return a.a.createElement(O.a, { style: Qe(r) && { fontSize: V.a.theme.fontSizes.subtext2 } }, d)
                  }
                  return null
                })
              }),
              y()(l()(n), '_renderPeriscopeOrCustomIconLink', function (e, t, r) {
                var a = e.pause,
                  o = n.props.customControlBarIcon,
                  i = Object(j.e)(t),
                  c = r && r.hidePeriscopeLink,
                  s = null == i ? void 0 : i.broadcastShareUrl
                return s && Ve.test(s) ? n._renderPeriscopeLink(i, c, a) : o ? n._renderCustomIconLink(o) : void 0
              }),
              y()(l()(n), '_renderPeriscopeLink', function (e, t, r) {
                return a.a.createElement(w.a, { periodic: !0 }, function (o) {
                  o.playerState
                  if (e && e.broadcastShareUrl && !e.unavailableInPeriscope && !t) {
                    var i = n.state.currentBreakpoint,
                      c = new K.a(e.broadcastShareUrl),
                      s = Object(j.d)(e),
                      u = Object(j.i)(e)
                    if (s && s > 0 && !e.isLive) c.addSearchParam('t', s.toString())
                    else if (e.isLive && u) {
                      var l = u + (s || 0)
                      c.addSearchParam('t', l.toString())
                    }
                    return a.a.createElement(S.b, {
                      accessibilityLabel: Ye,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: n.props.showScrubber,
                      icon: a.a.createElement(We, null),
                      link: { pathname: c.toString(), anchorless: !0 },
                      onPress: r,
                      size: Qe(i) ? 'xSmall' : 'medium',
                      testID: 'periscopeLink',
                    })
                  }
                })
              }),
              y()(l()(n), '_renderCustomIconLink', function (e) {
                var t = n.state.currentBreakpoint,
                  r = new K.a(e.link),
                  o = e.tooltipLabel,
                  i = e.onPress
                return a.a.createElement(S.b, {
                  accessibilityLabel: o,
                  hoverLabelPreferredHorizontalOrientation: 'start',
                  hoverLabelWithExtraSpace: n.props.showScrubber,
                  icon: e.icon,
                  link: { pathname: r.toString(), anchorless: !0 },
                  onPress: i,
                  size: Qe(t) ? 'xSmall' : 'medium',
                })
              }),
              y()(l()(n), '_showScrubberHandler', function (e) {
                return function () {
                  return n.setState({ showScrubber: e })
                }
              }),
              y()(l()(n), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              y()(l()(n), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  r = t.height,
                  a = t.width,
                  o = n.state.currentBreakpoint,
                  i = n.props,
                  c = i.hideControls,
                  s = i.playerApi,
                  u = i.playerState
                if (s) {
                  var l = 0
                  ;(l = c ? (null != u && u.isPreview ? V.a.theme.spacesPx.space40 : V.a.theme.spacesPx.space12) : r),
                    n.props.playerApi.setCaptionDefaultOffset({ bottom: l })
                }
                var f = n._convertWidthToBreakpoint(a)
                f !== o &&
                  n.setState(function (e) {
                    return { currentBreakpoint: f }
                  })
              }),
              y()(l()(n), '_convertWidthToBreakpoint', function (e) {
                var t
                return (
                  e > ke.wide
                    ? (t = Pe.wide)
                    : e < ke.veryNarrow
                    ? (t = Pe.veryNarrow)
                    : e < ke.narrow && (t = Pe.narrow),
                  t
                )
              }),
              e.containerRef)
            ) {
              var o = e.containerRef.getBoundingClientRect(),
                c = o.height,
                s = o.width
              n.state = Ie(
                Ie({}, n.state),
                {},
                { currentBreakpoint: n._convertWidthToBreakpoint(s), containerHeight: c },
              )
            }
            return n
          }
          return (
            s()(
              r,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props,
                      r = t.hideControls,
                      n = t.playerApi,
                      o = t.playerDisplayOptions,
                      i = t.playerState,
                      c = this.state.currentBreakpoint
                    return n && i
                      ? a.a.createElement(C.a.ObserverContext.Consumer, null, function (t) {
                          return a.a.createElement(
                            W.a,
                            { onLayout: e._handleLayout, pointerEvents: 'auto', ref: e._parentRef, style: A.e },
                            a.a.createElement(g.a, {
                              actionButton: e._renderActionButton(n, i),
                              displayDismissableControls: !r,
                              leftContent: a.a.createElement(
                                a.a.Fragment,
                                null,
                                e._renderAdBadge(i),
                                e._renderPublisherAttribution(i),
                                c === Pe.wide ? e._renderMiddot(i) : null,
                                c === Pe.wide ? e._renderViewCount(i) : null,
                              ),
                              rightContent: a.a.createElement(
                                a.a.Fragment,
                                null,
                                e._renderTimePlayed(),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Je.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderCaptionsButton(n, i),
                                ),
                                e._renderVolume(n, i),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Je.PERISCOPE, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderPeriscopeOrCustomIconLink(n, i, o),
                                ),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Je.SETTING, interactionTimeoutMs: 0, mouseover: !0 },
                                  a.a.createElement(Se, { isNarrow: Qe(c), playerApi: n, playerState: i }),
                                ),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Je.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderFullScreenButton(n, i),
                                ),
                              ),
                              scrubber: e._renderScrubber(n),
                              skipButton: a.a.createElement(N, { useRefactoredLayout: !0 }),
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
                    return e.hideControls ? Ie(Ie({}, t), {}, { showScrubber: !0 }) : t
                  },
                },
              ],
            ),
            r
          )
        })(a.a.PureComponent)
      y()($e, 'defaultProps', { showScrubber: !0 })
      var et = $e,
        tt = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } }
      function rt(e) {
        return a.a.createElement(et, e)
      }
    },
    w05h: function (e, t, r) {
      'use strict'
      r.d(t, 'e', function () {
        return o
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
        a = r.n(n),
        o = a.a.eeb64451,
        i = a.a.f3c268a4,
        c = a.a.g60001bb,
        s = a.a.dff1ddd9,
        u = a.a.b0b22805,
        l = a.a.e8733ed8,
        f = a.a.i3b7a017,
        d = a.a.c67e71aa,
        p = a.a.a6ada13d,
        b = a.a.j0f12222,
        h = a.a.f569f7c7,
        m = a.a.j0c67729,
        v = a.a.f73003aa,
        y = a.a.b3112b89,
        w = a.a.h6333ad0,
        g = a.a.c59da417,
        S = a.a.c3c147cf
    },
    wtsM: function (e, t, r) {
      'use strict'
      r.d(t, 'd', function () {
        return o
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
        a = r.n(n),
        o = a.a.fb236727,
        i = a.a.e9bd453e,
        c = a.a.f17dfdb5,
        s = a.a.ec8ab8b4,
        u = a.a.b8b6344a,
        l = a.a.c9a642f9,
        f = a.a.c27e60bf,
        d = a.a.d2969f1f
    },
  },
])
//# sourceMappingURL=WIPED
