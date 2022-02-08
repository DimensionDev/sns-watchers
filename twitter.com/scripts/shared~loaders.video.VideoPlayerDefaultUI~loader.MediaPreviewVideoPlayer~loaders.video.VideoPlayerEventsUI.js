;(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    '+aTU': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        o = n('Y9Ll'),
        i = n.n(o),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('KqXw'),
          n('WNMA'),
          n('LJOr'),
          n('2G9S'),
          (function () {
            function e(t) {
              a()(this, e)
              try {
                this.parser = new URL(t)
              } catch (n) {
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
    '3JAx': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('fyvP'),
        i = n('rHpw'),
        c = n('MWbm')
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
    BVo1: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return a
      }),
        n.d(t, 'd', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'a', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'f', function () {
          return u
        })
      var r = n('rHpw').a.create(function (e) {
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
        a = r.root,
        o = r.container,
        i = [r.flexRow, r.bottomBar],
        c = [r.actionContainer, r.leftContainer, r.flexShrink, r.flexRow],
        s = [r.actionContainer, r.rightContainer, r.flexRow],
        u = r.skipAdText
      t.g = r
    },
    'IE/l': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('USG3'),
        i = n('aNKf'),
        c = n('rHpw'),
        s = n('MWbm'),
        u = n('BVo1')
      t.a = function (e) {
        var t = e.actionButton,
          n = e.displayDismissableControls,
          r = void 0 === n || n,
          l = e.leftContent,
          d = e.rightContent,
          f = e.scrubber,
          p = e.skipButton
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            o.a,
            { show: r },
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
                { show: r },
                a.a.createElement(
                  s.a,
                  { style: u.g.controlsBottomOffset },
                  f,
                  a.a.createElement(
                    s.a,
                    { style: u.c },
                    a.a.createElement(
                      s.a,
                      { style: u.a },
                      t,
                      a.a.createElement(s.a, { style: [u.g.flexRow, u.g.flexShrink] }, l),
                    ),
                    a.a.createElement(s.a, { style: u.b }, d),
                  ),
                ),
              ),
            ),
            p && a.a.createElement(s.a, { style: u.g.controlsBottomOffset }, p),
          ),
        )
      }
    },
    N2PN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('m3Bd'),
        i = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        u = n('/yvb'),
        l = n('gK2g'),
        d = ['hoverLabelPreferredHorizontalOrientation', 'hoverLabelWithExtraSpace'],
        f = ['icon', 'onPress', 'scribeNamespace', 'size', 'testID'],
        p = function (e) {
          e.hoverLabelPreferredHorizontalOrientation, e.hoverLabelWithExtraSpace
          var t = i()(e, d),
            n = e.accessibilityLabel
              ? {
                  label: e.accessibilityLabel,
                  preferredVerticalOrientation: 'up',
                  preferredHorizontalOrientation: e.hoverLabelPreferredHorizontalOrientation,
                  withLayer: !1,
                  withExtraSpace: e.hoverLabelWithExtraSpace,
                }
              : void 0
          return s.a.createElement(u.a, a()({}, t, { hoverLabel: n, size: e.size || 'medium', type: 'onMediaText' }))
        },
        h = function (e) {
          var t = e.icon,
            n = e.onPress,
            r = e.scribeNamespace,
            o = e.size,
            c = e.testID,
            u = i()(e, f),
            d = l.a.useAnalytics()
          return s.a.createElement(
            p,
            a()({}, u, {
              icon: t,
              onPress: function (e) {
                n && n(e), d.scribe(r)
              },
              size: o,
              testID: c,
            }),
          )
        }
      t.b = p
    },
    NnQ9: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('shC7'),
        u = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(u.a)(
            'svg',
            a()(
              a()({}, e),
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    Q0n6: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      }),
        n.d(t, 'l', function () {
          return E
        }),
        n.d(t, 'g', function () {
          return g
        }),
        n.d(t, 'h', function () {
          return k
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'f', function () {
          return _
        }),
        n.d(t, 'j', function () {
          return L
        }),
        n.d(t, 'e', function () {
          return P
        }),
        n.d(t, 'k', function () {
          return T
        }),
        n.d(t, 'i', function () {
          return O
        }),
        n.d(t, 'c', function () {
          return x
        }),
        n.d(t, 'b', function () {
          return B
        })
      n('7xRU'), n('hBpG'), n('7x/C'), n('2G9S')
      var r = n('kCRK'),
        a = n('3XMw'),
        o = n.n(a),
        i = o.a.d58baa7e,
        c = o.a.i3b7a017,
        s = o.a.ie5d110e,
        u = o.a.df5f11b3,
        l = o.a.a7cd5cf4,
        d = o.a.b6eb8f69,
        f = o.a.dcc2b9b2,
        p = o.a.hf4ffd4d,
        h = o.a.f6e90cd6,
        b = o.a.e7d191ec,
        m = o.a.h1888a33,
        v = o.a.c58b2ab7,
        y = function (e) {
          return 'number' == typeof e ? i(e) : e
        },
        S = function (e) {
          var t = e.viewCount,
            n = e.viewerCount
          return t || 0 === t ? v({ viewCount: y(t) }) : n || 0 === n ? m({ viewerCount: y(n) }) : null
        },
        E = function (e) {
          return e
            ? (function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = e.durationSeconds,
                  n = e.isBroadcast,
                  r = e.isLive,
                  a = e.timecode,
                  o = e.videoTrack,
                  i = [],
                  c = n || r ? d : l,
                  s = r ? p : f
                if ((i.push(s({ locVideoType: c })), 'number' == typeof t && t && !r)) {
                  var u = w(t),
                    m = u.hoursWord,
                    v = u.minutesWord,
                    y = u.secondsWord
                  i.push(h({ hoursWord: m, minutesWord: v, secondsWord: y }))
                }
                if ('number' == typeof a && a) {
                  var E = w(a),
                    g = E.hoursWord,
                    k = E.minutesWord,
                    C = E.secondsWord
                  i.push(b({ hoursWord: g, minutesWord: k, secondsWord: C }))
                }
                var _ = o && S(o)
                return _ && i.push(_), i.join('. ')
              })({
                isLive: e.isLive,
                isBroadcast: e.contentType === r.a.BROADCAST,
                durationSeconds: _(e),
                timecode: O(e),
                videoTrack: e,
              })
            : ''
        },
        w = function (e) {
          var t = R(e),
            n = t.hours,
            r = t.minutes,
            a = t.seconds,
            o = { hoursWord: '', minutesWord: '', secondsWord: '' }
          return 0 === a && 0 === r && 0 === n && 0 === r
            ? ((o.secondsWord = c(0)), o)
            : ((o.hoursWord = n > 0 ? u(n) : ''),
              (o.minutesWord = r > 0 ? s(r) : ''),
              (o.secondsWord = a > 0 ? c(a) : ''),
              o)
        },
        g = function (e) {
          return e ? (e.currentTimeMs || 0) / 1e3 : void 0
        },
        k = function (e) {
          return e ? (e.durationMs || 0) / 1e3 : void 0
        },
        C = function (e) {
          var t = g(e)
          return t && Math.round(t)
        },
        _ = function (e) {
          var t = k(e)
          return t && Math.round(t)
        },
        L = function (e) {
          return e.tracks.find(function (e) {
            return 0 === e.id
          })
        },
        P = function (e) {
          return e.tracks.find(function (t) {
            return t.id === e.currentTrackId
          })
        },
        T = function (e) {
          return e.controls && e.controls.isPosterShown ? L(e) : P(e)
        },
        O = function (e) {
          if (e) {
            var t = e.requestedTimecode
            return t && t > 0 ? t : e.replayEditedStartTime
          }
        },
        x = function (e) {
          return B(Math.round(e / 1e3))
        },
        B = function (e) {
          var t = R(e),
            n = t.hours,
            r = t.minutes,
            a = t.seconds,
            o = a < 10 ? '0'.concat(a) : a,
            i = r < 10 && n ? '0'.concat(r) : r
          return n ? ''.concat(n, ':').concat(i, ':').concat(o) : ''.concat(i, ':').concat(o)
        },
        R = function (e) {
          return { hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) }
        }
    },
    USG3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
        c = n('ERkP'),
        s = n.n(c),
        u = {
          transitionDuration: '250ms',
          transitionProperty: 'opacity, height',
          transitionTimingFunction: 'ease',
          willChange: 'opacity',
        }
      function l(e) {
        var t = e.children,
          n = e.show,
          r = s.a.useState(!n),
          o = i()(r, 2),
          c = o[0],
          l = o[1]
        return (
          s.a.useEffect(
            function () {
              n && c && l(!1)
            },
            [c, n],
          ),
          s.a.useMemo(
            function () {
              var e = a()(a()({}, u), {}, { opacity: n ? 1 : 0 })
              return s.a.createElement(
                'div',
                {
                  onTransitionEnd: function (e) {
                    n || c || l(!0)
                  },
                  style: e,
                },
                c ? null : t,
              )
            },
            [t, n, c],
          )
        )
      }
    },
    dPHj: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        o = n('t62R'),
        i = function (e) {
          return a.a.createElement(
            o.b,
            { color: 'white', numberOfLines: 1, style: [c.withMargin, e.style] },
            e.children,
          )
        },
        c = n('rHpw').a.create(function (e) {
          return { withMargin: { marginHorizontal: e.spaces.space4 } }
        })
      t.a = a.a.memo(i)
    },
    hhMf: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      var r = n('97Jx'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        l = n.n(u),
        d = n('5Yy7'),
        f = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        b = n('KEM+'),
        m = n.n(b),
        v =
          (n('lTEL'),
          n('7x/C'),
          n('LqLs'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('DfhM'),
          n('+KXO'),
          n('849X'),
          n('TJCb'),
          n('jwue'),
          n('+oxZ'),
          n('ERkP')),
        y = n.n(v),
        S = n('6fxz'),
        E = 'click',
        w = 'focused',
        g = 'mousemove',
        k = 'mouseover',
        C = 'touch',
        _ = function (e, t) {
          return function (n) {
            var r = n.observed
            return r[e].add(t), { observed: r }
          }
        },
        L = function (e, t) {
          return function (n) {
            var r = n.observed
            return r[e].delete(t), { observed: r }
          }
        },
        P = y.a.createContext({
          observed: { click: new Set(), focused: new Set(), mousemove: new Set(), mouseover: new Set() },
          Observer: function () {
            return null
          },
        }),
        T = y.a.createContext(function () {
          return null
        }),
        O = (function (e) {
          f()(n, e)
          var t = h()(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              m()(l()(e), '_timeoutCollection', { click: {}, focused: {}, mousemove: {}, mouseover: {}, touch: {} }),
              m()(l()(e), '_interactionWatcherRefs', {}),
              m()(l()(e), 'state', {
                observed: {
                  click: new Set(),
                  focused: new Set(),
                  mousemove: new Set(),
                  mouseover: new Set(),
                  touch: new Set(),
                },
              }),
              m()(l()(e), 'getContext', function () {
                return { observed: e.state.observed, Observer: e._renderObserver }
              }),
              m()(l()(e), 'hasActiveInteractionWatcherChildren', function () {
                return !Object.keys(e._interactionWatcherRefs).every(function (t) {
                  var n = e._interactionWatcherRefs[t]
                  return !n || !n.contains(document.activeElement)
                })
              }),
              m()(l()(e), '_renderObserver', function (t) {
                var n = t.children,
                  r = t.interactionKey,
                  o = t.click,
                  i = t.focus,
                  c = t.mousemove,
                  s = t.mouseover,
                  u = t.touch,
                  l = t.interactionTimeoutMs,
                  d = void 0 === l ? 2e3 : l,
                  f = {}
                return (
                  o && (f.onClick = e._handleClick(r, d)),
                  i && ((f.onBlur = e._handleBlur(r, d)), (f.onFocus = e._handleActive(r))),
                  c && (f.onMouseMove = e._handleMouseMove(r, d)),
                  s && ((f.onMouseEnter = e._handleMouseEnter(r)), (f.onMouseLeave = e._handleMouseLeave(r))),
                  u && ((f.onTouchStart = e._handleTouchStart(r)), (f.onTouchEnd = e._handleTouchEnd(r, d))),
                  y.a.createElement(
                    'div',
                    a()({}, f, {
                      ref: function (t) {
                        if (!r) throw new Error('Observer requires an `interactionKey` prop for storing refs.')
                        e._interactionWatcherRefs[r] = t
                      },
                    }),
                    n,
                  )
                )
              }),
              m()(l()(e), '_handleMouseEnter', function (t) {
                return function () {
                  e.setState(_(k, t))
                }
              }),
              m()(l()(e), '_handleMouseLeave', function (t) {
                return function () {
                  e.setState(L(k, t))
                }
              }),
              m()(l()(e), '_handleTouchStart', function (t) {
                return function () {
                  e.setState(_(C, t))
                }
              }),
              m()(l()(e), '_handleTouchEnd', function (t, n) {
                return function () {
                  var r = C
                  clearTimeout(e._timeoutCollection[r][t]),
                    n
                      ? (e._timeoutCollection[r][t] = setTimeout(function () {
                          return e.setState(L(r, t))
                        }, n))
                      : e.setState(L(r, t))
                }
              }),
              m()(l()(e), '_handleMouseMove', function (t, n) {
                return function () {
                  var r = g
                  e.state.observed[r].has(t) || e.setState(_(r, t)),
                    clearTimeout(e._timeoutCollection[r][t]),
                    (e._timeoutCollection[r][t] = setTimeout(function () {
                      return e.setState(L(r, t))
                    }, n))
                }
              }),
              m()(l()(e), '_handleClick', function (t, n) {
                return function () {
                  var r = E
                  e.state.observed[r].has(t) || e.setState(_(r, t)),
                    clearTimeout(e._timeoutCollection[r][t]),
                    (e._timeoutCollection[r][t] = setTimeout(function () {
                      return e.setState(L(r, t))
                    }, n))
                }
              }),
              m()(l()(e), '_handleActive', function (t) {
                return function () {
                  var n = w
                  clearTimeout(e._timeoutCollection[n][t])
                  var r = e.hasActiveInteractionWatcherChildren()
                  S.a.hadKeyboardEvent && r && e.setState(_(n, t))
                }
              }),
              m()(l()(e), '_handleBlur', function (t, n) {
                return function () {
                  var r = w
                  clearTimeout(e._timeoutCollection[r][t]),
                    e.state.observed[r].has(t) && (e._timeoutCollection[r][t] = setTimeout(e._handleFocusReset(t), n))
                }
              }),
              m()(l()(e), '_handleFocusReset', function (t) {
                return function () {
                  var n = w
                  e.setState(L(n, t)), clearTimeout(e._timeoutCollection[n][t])
                }
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this
                  Object.keys(this._timeoutCollection).forEach(function (t) {
                    var n = e._timeoutCollection[t]
                    Object.keys(n).forEach(function (e) {
                      clearTimeout(n[e])
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
                  return y.a.createElement(
                    n.ObserverContext.Provider,
                    { value: t },
                    y.a.createElement(n.Context.Provider, { value: this.getContext() }, e),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      m()(O, 'Context', P), m()(O, 'ObserverContext', T)
    },
    kCRK: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'd', function () {
          return a
        }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        })
      var r = { VISIT: 'url', WATCH: 'watch' },
        a = { watch_now: 'watch_now', visit_site: 'visit_site', shop: 'shop', see_more: 'see_more', go_to: 'go_to' },
        o = { MEDIA: 'media_entity', GIF: 'gif', VMAP: 'vmap', BROADCAST: 'broadcast' },
        i = { AD: 'ad', CONTENT: 'content' },
        c = { BROADCAST: 'broadcast', DM: 'dm', TWEET: 'tweet' }
    },
    p6DB: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        o = n('ERkP'),
        i = n.n(o),
        c = n('Lsrn'),
        s = n('shC7'),
        u = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(u.a)(
            'svg',
            a()(
              a()({}, e),
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    ub6r: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ye
      })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('yiKp'),
        i = n.n(o),
        c = n('VrFO'),
        s = n.n(c),
        u = n('Y9Ll'),
        l = n.n(u),
        d = n('1Pcy'),
        f = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        b = n('2VqO'),
        m = n.n(b),
        v = n('KEM+'),
        y = n.n(v),
        S = (n('2G9S'), n('KqXw'), n('3uku'), n('TJCb'), n('7x/C'), n('DZ+c'), n('hBvt'), n('Zl35')),
        E = n('IE/l'),
        w = n('N2PN'),
        g = n('dPHj'),
        k = n('kCRK'),
        C = n('3XMw'),
        _ = n.n(C),
        L = n('hhMf'),
        P = n('Q0n6'),
        T = n('9RkS'),
        O = n('+d3d'),
        x = _.a.f06f2e53,
        B = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e) {
            var r
            return (
              s()(this, n),
              (r = t.call(this, e)),
              y()(f()(r), '_handleChange', function (e) {
                r.setState({ scrubTo: e }), (r.scheduledSeekTargetSec = e), r._throttledPlayerSeek()
              }),
              y()(
                f()(r),
                '_throttledPlayerSeek',
                Object(O.a)(
                  function () {
                    var e = f()(r).scheduledSeekTargetSec,
                      t = r.props,
                      n = t.duration,
                      a = t.playerApi
                    if (n) {
                      var o = e / n
                      a.scrubToFraction(o)
                    }
                  },
                  50,
                  { leading: !0, trailing: !0 },
                ),
              ),
              y()(f()(r), '_handleActive', function (e) {
                return (
                  !r.state.isScrubbing && e && document.addEventListener('click', r._handleCaptureClick, !0),
                  e || r._throttledPlayerSeek.flush(),
                  r.props.playerApi.setScrubbing(e),
                  r.setState({ isScrubbing: e })
                )
              }),
              y()(f()(r), '_handleCaptureClick', function (e) {
                e.preventDefault(),
                  e.stopPropagation(),
                  document.removeEventListener('click', r._handleCaptureClick, !0)
              }),
              (r.state = { isScrubbing: !1, scrubTo: 0 }),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.accessibilityLabel,
                    n = e.currentTime,
                    r = e.duration,
                    o = this.state.isScrubbing || this.props.isSeeking ? this.state.scrubTo : n
                  if ('number' == typeof o && 'number' == typeof r && r > 0) {
                    var i = Object(P.b)(o),
                      c = Object(P.b)(r)
                    return a.a.createElement(T.a, {
                      accessibilityLabel: t,
                      accessibilityLabelValueText: x({ currentTime: i, durationTime: c }),
                      color: 'white',
                      keepLTR: !0,
                      keyboardStep: 5,
                      max: r,
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
            n
          )
        })(a.a.PureComponent),
        R = n('97Jx'),
        M = n.n(R),
        A = n('/yvb'),
        j = n('BVo1'),
        z = n('w05h'),
        H = n('+/1j'),
        W = n('MWbm'),
        D = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(f()(e), '_handleSkipPress', function () {
                e.props.playerApi.nextTrack()
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  if (!this.props.playerState) return null
                  var e = Object(P.e)(this.props.playerState)
                  if (!e || e.durationMs <= this.props.skipThreshold || e.displayType !== k.c.AD) return null
                  var t = Math.ceil((5e3 - e.currentTimeMs) / 1e3),
                    n = t > 0,
                    r = n ? Object(z.m)({ seconds: Object(z.q)(t) }) : z.l,
                    o = n ? Object(z.n)({ seconds: Object(z.p)(t) }) : z.k
                  return a.a.createElement(
                    A.a,
                    {
                      accessibilityLabel: r,
                      disabled: n,
                      onPress: n ? void 0 : this._handleSkipPress,
                      pointerEvents: 'auto',
                      size: 'small',
                      testID: 'ControlBar-skipButton',
                      type: 'onMediaDominantColorFilled',
                    },
                    a.a.createElement(H.a, { style: j.f }, o),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.PureComponent)
      y()(D, 'defaultProps', { skipThreshold: 7e3 })
      var I = a.a.memo(function (e) {
          return e.useRefactoredLayout
            ? a.a.createElement(
                W.a,
                { pointerEvents: 'none', style: j.b },
                a.a.createElement(S.a, { periodic: !0 }, function (t) {
                  var n = t.playerApi,
                    r = t.playerState
                  return a.a.createElement(D, M()({}, e, { playerApi: n, playerState: r }))
                }),
              )
            : a.a.createElement(
                W.a,
                { pointerEvents: 'none', style: j.e },
                a.a.createElement(
                  W.a,
                  { style: j.d },
                  a.a.createElement(
                    W.a,
                    { style: j.c },
                    a.a.createElement(W.a, { style: j.a }),
                    a.a.createElement(
                      W.a,
                      { style: j.b },
                      a.a.createElement(S.a, { periodic: !0 }, function (t) {
                        var n = t.playerApi,
                          r = t.playerState
                        return a.a.createElement(D, M()({}, e, { playerApi: n, playerState: r }))
                      }),
                    ),
                  ),
                ),
              )
        }),
        F = n('rHpw'),
        V = n('+aTU'),
        N = n('aITJ'),
        K = n('jV+4'),
        U = n('m3Bd'),
        q = n.n(U),
        G = n('ddV6'),
        J = n.n(G),
        X = n('M2x3'),
        Y = (n('lZm3'), n('uFXj'), n('nBUg')),
        Q = n('3dyc'),
        Z = n('t62R'),
        $ = n('3JAx'),
        ee = n('efqG'),
        te = _.a.h9b3104d,
        ne = _.a.ccc97152,
        re = _.a.e8b5757c,
        ae = _.a.e7e954de,
        oe = _.a.g07ffe66,
        ie = _.a.d8bede9d,
        ce = _.a.j41845c7,
        se = _.a.e9eeed9e,
        ue = _.a.fe45dc83,
        le = _.a.e791190a,
        de = _.a.e23b20af,
        fe = { label: ie, value: '1' },
        pe = [
          { label: re, value: '0.25' },
          { label: ae, value: '0.5' },
          { label: oe, value: '0.75' },
        ],
        he = [
          { label: ce, value: '1.25' },
          { label: se, value: '1.5' },
          { label: ue, value: '1.75' },
          { label: le, value: '2' },
        ]
      function be(e) {
        switch (e) {
          case 'fast':
            return [fe].concat(he)
          case 'slow':
            return [].concat(pe, [fe])
          default:
            return [].concat(pe, [fe], he)
        }
      }
      var me = F.a.create(function (e) {
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
        ve = function (e) {
          var t,
            n = null === (t = e.playerState.playbackRate) || void 0 === t ? void 0 : t.toString(),
            r = e.children,
            o = e.onDismiss,
            i = e.showVideoSettings,
            c = e.playerState,
            s = c.features,
            u = c.fullscreen.isFullscreen,
            l = null == s ? void 0 : s.web_video_playback_rate_enabled,
            d = i ? Q.b.forceVisible : Q.b.forceHidden,
            f = Y.b.useProps().isDMDrawer
          function p(t, n) {
            e.playerApi.setPlaybackRate(parseFloat(n)), o()
          }
          return a.a.createElement(
            ee.a,
            {
              onDismiss: o,
              renderContent: function (e, t) {
                var r = 'sheet' === t
                return a.a.createElement(
                  W.a,
                  { accessibilityRole: 'dialog', style: me.root },
                  a.a.createElement(
                    W.a,
                    { style: me.title },
                    a.a.createElement(Z.b, { size: 'headline1', weight: 'bold' }, ne),
                  ),
                  a.a.createElement($.a, {
                    accessibilityLabel: ne,
                    name: 'playback_rate',
                    onChange: p,
                    options: be(l),
                    value: n,
                  }),
                  r
                    ? a.a.createElement(
                        A.a,
                        { onPress: o, style: me.cancelButton, testID: 'Cancel', type: 'primaryOutlined' },
                        de,
                      )
                    : null,
                )
              },
              visibilityBehavior: d,
              withArrow: !0,
              withFixedPosition: u || f(),
              withoutLayer: u,
            },
            r,
          )
        },
        ye = ['isNarrow', 'playerApi', 'playerState'],
        Se = { action: 'click', element: 'video_settings' }
      function Ee(e) {
        var t = a.a.useState({ showVideoSettings: !1, resumePlaybackOnDismiss: !1 }),
          n = J()(t, 2),
          r = n[0],
          o = n[1],
          i = e.isNarrow,
          c = e.playerApi,
          s = e.playerState,
          u = q()(e, ye),
          l = Object(P.e)(s)
        return l && l.playbackRateSupported
          ? a.a.createElement(
              ve,
              {
                onDismiss: function () {
                  o({ showVideoSettings: !1 })
                },
                playerApi: c,
                playerState: s,
                showVideoSettings: r.showVideoSettings,
              },
              a.a.createElement(
                w.a,
                M()({}, u, {
                  accessibilityLabel: te,
                  icon: a.a.createElement(X.a, null),
                  onPress: function () {
                    o({ showVideoSettings: !0 })
                  },
                  scribeNamespace: Se,
                  size: i ? 'xSmall' : 'medium',
                }),
              ),
            )
          : null
      }
      var we,
        ge = n('kRXa'),
        ke = (n('yH/f'), Object.freeze({ wide: 'wide', narrow: 'narrow', veryNarrow: 'veryNarrow' })),
        Ce = Object.freeze(
          ((we = {}), y()(we, ke.wide, 500), y()(we, ke.narrow, 285), y()(we, ke.veryNarrow, 200), we),
        ),
        _e = n('wtsM'),
        Le = n('5Ixf'),
        Pe = n('RUwF'),
        Te = n('AtEG'),
        Oe = n('NnQ9'),
        xe = n('p6DB'),
        Be = n('pHub'),
        Re = n('8A5z'),
        Me = n('Lsrn'),
        Ae = n('k/Ka'),
        je = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ae.a)(
            'svg',
            i()(
              i()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Me.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      je.metadata = { width: 24, height: 24 }
      var ze = je,
        He = /^https?:\/\/(?:www.)?(?:periscope|pscp).tv/,
        We = _.a.j25d7cc9,
        De = _.a.a858b25b,
        Ie = _.a.faf9f483,
        Fe = _.a.ae2ea9e6,
        Ve = _.a.hea01797,
        Ne = _.a.f8a09386,
        Ke = 'ControlBar-',
        Ue = {
          CAPTIONS: ''.concat(Ke, 'Captions'),
          PERISCOPE: ''.concat(Ke, 'Periscope'),
          FULLSCREEN: ''.concat(Ke, 'Fullscreen'),
          SETTING: ''.concat(Ke, 'Setting'),
        },
        qe = function (e) {
          return e === ke.narrow || e === ke.veryNarrow
        },
        Ge = (function (e) {
          h()(n, e)
          var t = m()(n)
          function n(e) {
            var r
            if (
              (s()(this, n),
              (r = t.call(this, e)),
              y()(f()(r), 'state', { currentBreakpoint: ke.wide, showScrubber: !0, scrubTime: 0 }),
              y()(f()(r), '_parentRef', a.a.createRef()),
              y()(f()(r), '_renderActionButton', function (e, t) {
                var n = t.controls,
                  o = t.isPlaying,
                  i = e.pause,
                  c = e.play,
                  s = e.replay,
                  u = r.state.currentBreakpoint,
                  l = Object(P.e)(t),
                  d = qe(u) ? 'xSmall' : 'medium'
                return !l || l.isLive
                  ? null
                  : o || (n && 'PLAY_REQUESTED' === n.playState)
                  ? a.a.createElement(w.b, {
                      accessibilityLabel: _e.d,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(Le.a, null),
                      onPress: i,
                      size: d,
                    })
                  : n.isReplayButtonShown
                  ? a.a.createElement(w.b, {
                      accessibilityLabel: _e.f,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(Pe.a, null),
                      onPress: s,
                      size: d,
                    })
                  : a.a.createElement(w.b, {
                      accessibilityLabel: _e.e,
                      hoverLabelPreferredHorizontalOrientation: 'end',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(Te.a, null),
                      onPress: c,
                      size: d,
                    })
              }),
              y()(f()(r), '_renderViewCount', function (e) {
                var t = Object(P.e)(e)
                if (!t) return null
                var n = Object(P.a)(t)
                return n ? a.a.createElement(g.a, null, n) : null
              }),
              y()(f()(r), '_renderPublisherAttribution', function (e) {
                var t = r.props,
                  n = t.publisherDisplayName,
                  o = t.publisherProfileImageUrl,
                  i = Object(P.e)(e)
                return n && o && i
                  ? a.a.createElement(
                      W.a,
                      { style: j.g.flex },
                      a.a.createElement(
                        W.a,
                        { style: [j.g.withMargin, j.g.flex] },
                        a.a.createElement(K.a, { color: 'white', name: n, profileImageUrl: o }),
                      ),
                    )
                  : null
              }),
              y()(f()(r), '_renderMiddot', function (e) {
                var t = r.props,
                  n = t.publisherDisplayName,
                  o = t.publisherProfileImageUrl,
                  i = Object(P.e)(e)
                return i && n && o && (i.viewCount || i.viewerCount) ? a.a.createElement(g.a, null, '·') : null
              }),
              y()(f()(r), '_renderAdBadge', function (e) {
                var t = Object(P.e)(e),
                  n = r.state.currentBreakpoint
                if (t && t.displayType === k.c.AD) {
                  var o = t.advertiserName
                  return a.a.createElement(
                    g.a,
                    { style: qe(n) && { fontSize: F.a.theme.fontSizes.subtext2 } },
                    o ? Fe({ advertiserName: o }) : Ie,
                  )
                }
                return null
              }),
              y()(f()(r), '_renderFullScreenButton', function (e, t) {
                var n = r.props.fullscreenAdsDisabledOnIOS,
                  o = Object(P.e)(t),
                  i = (null == o ? void 0 : o.displayType) === k.c.AD && N.b.isIOS(),
                  c = t.fullscreen,
                  s = r.state.currentBreakpoint,
                  u = r._fullScreenIcon,
                  l = qe(s) ? 'xSmall' : 'medium'
                return n && i
                  ? null
                  : c.isFullscreen
                  ? a.a.createElement(w.b, {
                      accessibilityLabel: _e.b,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(u, { isFullscreen: c.isFullscreen }),
                      onPress: r._exitFullScreen(e),
                      size: l,
                    })
                  : a.a.createElement(w.b, {
                      accessibilityLabel: _e.a,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(u, { isFullscreen: c.isFullscreen }),
                      onPress: r._requestFullScreen(e),
                      size: l,
                    })
              }),
              y()(f()(r), '_fullScreenIcon', function (e) {
                var t = e.isFullscreen,
                  n = (e.style, Xe.hidden),
                  r = Xe.shown
                return a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(Oe.a, { style: t ? n : r }),
                  a.a.createElement(xe.a, { style: t ? r : n }),
                )
              }),
              y()(f()(r), '_requestFullScreen', function (e) {
                return function () {
                  e.fullScreen(r.props.containerRef)
                }
              }),
              y()(f()(r), '_exitFullScreen', function (e) {
                return function () {
                  return e.exitFullScreen()
                }
              }),
              y()(f()(r), '_renderScrubber', function (e) {
                return r.props.showScrubber && r.state.showScrubber
                  ? a.a.createElement(
                      W.a,
                      { style: j.g.scrubber },
                      a.a.createElement(S.a, { periodic: !0 }, function (t) {
                        var n = t.playerState,
                          r = Object(P.e)(n)
                        return a.a.createElement(B, {
                          accessibilityLabel: Ve,
                          currentTime: Object(P.g)(r),
                          duration: Object(P.h)(r),
                          isScrubbing: n.isScrubbing,
                          isSeeking: n.isSeeking,
                          playerApi: e,
                        })
                      }),
                    )
                  : null
              }),
              y()(f()(r), '_renderVolume', function (e, t) {
                var n = t.isMuted,
                  o = t.volume,
                  i = e.mute,
                  c = e.setVolume,
                  s = e.unmute,
                  u = r.state,
                  l = u.containerHeight,
                  d = u.currentBreakpoint,
                  f = n ? s : i,
                  p = n ? _e.g : _e.c
                return a.a.createElement(ge.a, {
                  accessibilityLabelIcon: p,
                  accessibilityLabelSlider: _e.h,
                  containerHeight: l,
                  isMuted: n,
                  onHideSlider: r._showScrubberHandler(!0),
                  onMuteToggle: f,
                  onShowSlider: r._showScrubberHandler(!1),
                  onSliderChange: r._setVolumePercent(c),
                  size: qe(d) ? 'xSmall' : 'medium',
                  volumePercent: 100 * o,
                })
              }),
              y()(f()(r), '_renderCaptionsButton', function (e, t) {
                var n = Object(P.e)(t)
                if (n && n.hasCaptions) {
                  var o = r.state.currentBreakpoint,
                    i = t.areCaptionsShown,
                    c = e.toggleCaptions
                  return a.a.createElement(w.b, {
                    accessibilityLabel: i ? We : De,
                    hoverLabelWithExtraSpace: r.props.showScrubber,
                    icon: i ? a.a.createElement(Be.a, null) : a.a.createElement(Re.a, null),
                    onPress: c,
                    size: qe(o) ? 'xSmall' : 'medium',
                    testID: 'captions',
                  })
                }
              }),
              y()(f()(r), '_renderTimePlayed', function () {
                return a.a.createElement(S.a, { periodic: !0 }, function (e) {
                  var t = e.playerState,
                    n = r.state.currentBreakpoint,
                    o = Object(P.e)(t),
                    i = Object(P.d)(o),
                    c = Object(P.f)(o),
                    s = t.controls,
                    u = t.isSeeking,
                    l = s.scrubToFraction,
                    d = u && void 0 !== l && c ? l * c : Object(P.d)(o) || 0
                  if (o && 'number' == typeof i && c && !o.isLive) {
                    var f =
                      n === ke.veryNarrow
                        ? ''.concat(Object(P.b)(c - d))
                        : ''.concat(Object(P.b)(d), ' / ').concat(Object(P.b)(c))
                    return a.a.createElement(g.a, { style: qe(n) && { fontSize: F.a.theme.fontSizes.subtext2 } }, f)
                  }
                  return null
                })
              }),
              y()(f()(r), '_renderPeriscopeOrCustomIconLink', function (e, t, n) {
                var a = e.pause,
                  o = r.props.customControlBarIcon,
                  i = Object(P.e)(t),
                  c = n && n.hidePeriscopeLink,
                  s = null == i ? void 0 : i.broadcastShareUrl
                return s && He.test(s) ? r._renderPeriscopeLink(i, c, a) : o ? r._renderCustomIconLink(o) : void 0
              }),
              y()(f()(r), '_renderPeriscopeLink', function (e, t, n) {
                return a.a.createElement(S.a, { periodic: !0 }, function (o) {
                  o.playerState
                  if (e && e.broadcastShareUrl && !e.unavailableInPeriscope && !t) {
                    var i = r.state.currentBreakpoint,
                      c = new V.a(e.broadcastShareUrl),
                      s = Object(P.d)(e),
                      u = Object(P.i)(e)
                    if (s && s > 0 && !e.isLive) c.addSearchParam('t', s.toString())
                    else if (e.isLive && u) {
                      var l = u + (s || 0)
                      c.addSearchParam('t', l.toString())
                    }
                    return a.a.createElement(w.b, {
                      accessibilityLabel: Ne,
                      hoverLabelPreferredHorizontalOrientation: 'start',
                      hoverLabelWithExtraSpace: r.props.showScrubber,
                      icon: a.a.createElement(ze, null),
                      link: { pathname: c.toString(), anchorless: !0 },
                      onPress: n,
                      size: qe(i) ? 'xSmall' : 'medium',
                      testID: 'periscopeLink',
                    })
                  }
                })
              }),
              y()(f()(r), '_renderCustomIconLink', function (e) {
                var t = r.state.currentBreakpoint,
                  n = new V.a(e.link),
                  o = e.tooltipLabel,
                  i = e.onPress
                return a.a.createElement(w.b, {
                  accessibilityLabel: o,
                  hoverLabelPreferredHorizontalOrientation: 'start',
                  hoverLabelWithExtraSpace: r.props.showScrubber,
                  icon: e.icon,
                  link: { pathname: n.toString(), anchorless: !0 },
                  onPress: i,
                  size: qe(t) ? 'xSmall' : 'medium',
                })
              }),
              y()(f()(r), '_showScrubberHandler', function (e) {
                return function () {
                  return r.setState({ showScrubber: e })
                }
              }),
              y()(f()(r), '_setVolumePercent', function (e) {
                return function (t) {
                  e(t / 100)
                }
              }),
              y()(f()(r), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout,
                  n = t.height,
                  a = t.width,
                  o = r.state.currentBreakpoint,
                  i = r.props,
                  c = i.hideControls,
                  s = i.playerApi,
                  u = i.playerState
                if (s) {
                  var l = 0
                  ;(l = c ? (null != u && u.isPreview ? F.a.theme.spacesPx.space40 : F.a.theme.spacesPx.space12) : n),
                    r.props.playerApi.setCaptionDefaultOffset({ bottom: l })
                }
                var d = r._convertWidthToBreakpoint(a)
                d !== o &&
                  r.setState(function (e) {
                    return { currentBreakpoint: d }
                  })
              }),
              y()(f()(r), '_convertWidthToBreakpoint', function (e) {
                var t
                return (
                  e > Ce.wide
                    ? (t = ke.wide)
                    : e < Ce.veryNarrow
                    ? (t = ke.veryNarrow)
                    : e < Ce.narrow && (t = ke.narrow),
                  t
                )
              }),
              e.containerRef)
            ) {
              var o = e.containerRef.getBoundingClientRect(),
                c = o.height,
                u = o.width
              r.state = i()(
                i()({}, r.state),
                {},
                { currentBreakpoint: r._convertWidthToBreakpoint(u), containerHeight: c },
              )
            }
            return r
          }
          return (
            l()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this,
                      t = this.props,
                      n = t.hideControls,
                      r = t.playerApi,
                      o = t.playerDisplayOptions,
                      i = t.playerState,
                      c = this.state.currentBreakpoint
                    return r && i
                      ? a.a.createElement(L.a.ObserverContext.Consumer, null, function (t) {
                          return a.a.createElement(
                            W.a,
                            { onLayout: e._handleLayout, pointerEvents: 'auto', ref: e._parentRef, style: j.e },
                            a.a.createElement(E.a, {
                              actionButton: e._renderActionButton(r, i),
                              displayDismissableControls: !n,
                              leftContent: a.a.createElement(
                                a.a.Fragment,
                                null,
                                e._renderAdBadge(i),
                                e._renderPublisherAttribution(i),
                                c === ke.wide ? e._renderMiddot(i) : null,
                                c === ke.wide ? e._renderViewCount(i) : null,
                              ),
                              rightContent: a.a.createElement(
                                a.a.Fragment,
                                null,
                                e._renderTimePlayed(),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ue.CAPTIONS, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderCaptionsButton(r, i),
                                ),
                                e._renderVolume(r, i),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ue.PERISCOPE, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderPeriscopeOrCustomIconLink(r, i, o),
                                ),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ue.SETTING, interactionTimeoutMs: 0, mouseover: !0 },
                                  a.a.createElement(Ee, { isNarrow: qe(c), playerApi: r, playerState: i }),
                                ),
                                a.a.createElement(
                                  t,
                                  { focus: !0, interactionKey: Ue.FULLSCREEN, interactionTimeoutMs: 0, mouseover: !0 },
                                  e._renderFullScreenButton(r, i),
                                ),
                              ),
                              scrubber: e._renderScrubber(r),
                              skipButton: a.a.createElement(I, { useRefactoredLayout: !0 }),
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
                    return e.hideControls ? i()(i()({}, t), {}, { showScrubber: !0 }) : t
                  },
                },
              ],
            ),
            n
          )
        })(a.a.PureComponent)
      y()(Ge, 'defaultProps', { showScrubber: !0 })
      var Je = Ge,
        Xe = { hidden: { display: 'none', height: '1.5em' }, shown: { display: 'block', height: '1.5em' } }
      function Ye(e) {
        return a.a.createElement(Je, e)
      }
    },
    w05h: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return o
      }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'b', function () {
          return c
        }),
        n.d(t, 'a', function () {
          return s
        }),
        n.d(t, 'd', function () {
          return u
        }),
        n.d(t, 'p', function () {
          return l
        }),
        n.d(t, 'q', function () {
          return d
        }),
        n.d(t, 'j', function () {
          return f
        }),
        n.d(t, 'h', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return b
        }),
        n.d(t, 'i', function () {
          return m
        }),
        n.d(t, 'o', function () {
          return v
        }),
        n.d(t, 'k', function () {
          return y
        }),
        n.d(t, 'l', function () {
          return S
        }),
        n.d(t, 'm', function () {
          return E
        }),
        n.d(t, 'n', function () {
          return w
        })
      var r = n('3XMw'),
        a = n.n(r),
        o = a.a.eeb64451,
        i = a.a.f3c268a4,
        c = a.a.g60001bb,
        s = a.a.dff1ddd9,
        u = a.a.b0b22805,
        l = a.a.e8733ed8,
        d = a.a.i3b7a017,
        f = a.a.c67e71aa,
        p = a.a.a6ada13d,
        h = a.a.j0f12222,
        b = a.a.f569f7c7,
        m = a.a.j0c67729,
        v = a.a.f73003aa,
        y = a.a.b3112b89,
        S = a.a.h6333ad0,
        E = a.a.c59da417,
        w = a.a.c3c147cf
    },
    wtsM: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return o
      }),
        n.d(t, 'f', function () {
          return i
        }),
        n.d(t, 'e', function () {
          return c
        }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'g', function () {
          return u
        }),
        n.d(t, 'h', function () {
          return l
        }),
        n.d(t, 'a', function () {
          return d
        }),
        n.d(t, 'b', function () {
          return f
        })
      var r = n('3XMw'),
        a = n.n(r),
        o = a.a.fb236727,
        i = a.a.e9bd453e,
        c = a.a.f17dfdb5,
        s = a.a.ec8ab8b4,
        u = a.a.b8b6344a,
        l = a.a.c9a642f9,
        d = a.a.c27e60bf,
        f = a.a.d2969f1f
    },
  },
])
//# sourceMappingURL=WIPED
