;(window.webpackJsonp = window.webpackJsonp || []).push([
  [28],
  {
    '+7VC': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return b
      })
      n('ho0z')
      var i,
        a = n('ERkP'),
        r = n.n(a),
        o = n('MWbm'),
        s = n('jhWN'),
        c = n('jV+4'),
        u = n('9VO7'),
        l = n('a2Fh'),
        d = n('9Xij'),
        f = n('rHpw'),
        p = (n('enFi'), n('jAXQ')),
        h = n.n(p),
        v = {
          backgroundBottomTweet: [12, 8, 6, 12],
          backgroundTopTweet: [13, 8, 5, 19, 8, 6],
          focalPointTweet: [12, 8, 5, 19, 17, 14],
        },
        _ = void 0 !== i ? i : (i = n('O5E5'))
      function m(t) {
        var e = t.wordWidths
        return r.a.createElement(
          o.a,
          { style: y.root },
          r.a.createElement(d.a, { ratio: 1, style: y.mockUserAvatar }),
          r.a.createElement(
            o.a,
            { style: y.mockTweetContent },
            r.a.createElement(
              o.a,
              { style: y.mockUserNameContainer },
              r.a.createElement(l.a, {
                color: 'text',
                maxWidthPx: 18,
                style: y.mockUserNameMarginRight,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
              r.a.createElement(l.a, {
                color: 'gray700',
                maxWidthPx: 35,
                withBorderRadius: !0,
                wordHeightPx: 3,
                wordPercentWidths: [100],
              }),
            ),
            r.a.createElement(l.a, { withBorderRadius: !0, wordHeightPx: 3, wordPercentWidths: e }),
          ),
        )
      }
      var g = f.a.create(function (t) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              paddingHorizontal: t.spaces.space56,
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            mockBackgroundTweets: {
              backgroundColor: t.colors.cellBackground,
              borderRadius: t.borderRadii.xLarge,
              boxShadow: t.boxShadows.medium,
              height: '260px',
              justifyContent: 'space-between',
              width: '100%',
            },
            mockBodyCopy: { marginTop: t.spaces.space12 },
            mockFocalTweet: {
              display: 'flex',
              backgroundColor: t.colors.cellBackground,
              borderRadius: t.borderRadii.xLarge,
              boxShadow: t.boxShadows.medium,
              flexDirection: 'row',
              height: '104px',
              padding: t.spaces.space16,
              width: '100%',
            },
            mockFocalTweetContainer: {
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              left: 0,
              position: 'absolute',
              right: 0,
              top: 0,
            },
            mockFocalTweetContent: { flex: 1, paddingBottom: t.spaces.space4, paddingLeft: t.spaces.space12 },
            superFollowIndicatorContainer: {
              alignSelf: 'flex-start',
              marginTop: t.spaces.space8,
              marginBottom: t.spaces.space4,
            },
          }
        }),
        y = f.a.create(function (t) {
          return {
            root: { flexDirection: 'row', marginBottom: t.spaces.space8, padding: t.spaces.space16, width: '100%' },
            mockUserAvatar: {
              border: 'none',
              backgroundColor: t.colors.gray300,
              borderRadius: t.borderRadii.infinite,
              height: f.a.theme.spaces.space40,
              width: f.a.theme.spaces.space40,
            },
            mockTweetContent: {
              flexGrow: 1,
              justifyContent: 'space-between',
              marginLeft: t.spaces.space12,
              marginTop: t.spaces.space12,
            },
            mockUserNameContainer: { flexDirection: 'row', justifyContent: 'flex-start' },
            mockUserNameMarginRight: { marginRight: t.spaces.space4 },
          }
        }),
        b = function (t) {
          var e = t.style,
            n = t.user,
            i = h()(_, n),
            a = (null == i ? void 0 : i.legacy) || {},
            d = a.name,
            f = a.profile_image_url_https,
            p = a.protected,
            y = a.screen_name,
            b = a.verified
          return d && y && f
            ? r.a.createElement(
                o.a,
                { style: [g.root, e] },
                r.a.createElement(
                  o.a,
                  { style: g.mockBackgroundTweets },
                  r.a.createElement(m, { wordWidths: v.backgroundTopTweet }),
                  r.a.createElement(m, { wordWidths: v.backgroundBottomTweet }),
                ),
                r.a.createElement(
                  o.a,
                  { style: g.mockFocalTweetContainer },
                  r.a.createElement(
                    o.a,
                    { style: g.mockFocalTweet },
                    r.a.createElement(o.a, null, r.a.createElement(s.a, { focusable: !1, size: 'xLarge', uri: f })),
                    r.a.createElement(
                      o.a,
                      { style: g.mockFocalTweetContent },
                      r.a.createElement(c.a, {
                        isProtected: p,
                        isVerified: b,
                        name: d,
                        nameSize: 'body',
                        screenName: y,
                        screenNameSize: 'body',
                      }),
                      r.a.createElement(
                        o.a,
                        { style: g.superFollowIndicatorContainer },
                        r.a.createElement(u.a, { type: 'superFollower' }),
                      ),
                      r.a.createElement(l.a, {
                        style: g.mockBodyCopy,
                        withBorderRadius: !0,
                        wordPercentWidths: v.focalPointTweet,
                      }),
                    ),
                  ),
                ),
              )
            : null
        }
    },
    '+Tpo': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return f
      })
      var i = n('ERkP'),
        a = n.n(i),
        r = n('3XMw'),
        o = n.n(r),
        s = n('xrkw'),
        c = n('wwsH'),
        u = o.a.f2849136,
        l = o.a.dedf22f3,
        d = { viewType: 'analytics' }
      function f(t) {
        var e = t.activeColor,
          n = t.color,
          i = t.iconSize,
          r = t.isDisabled,
          o = t.isFaded,
          f = t.isPresentational,
          p = t.onPress,
          h = t.style,
          v = t.tweetLink
        return a.a.createElement(c.a, {
          Icon: s.a,
          accessibilityLabel: l,
          activeColor: e,
          behavioralEventContext: d,
          color: n,
          hoverLabel: { label: u },
          iconSize: i,
          isDisabled: r,
          isFaded: o,
          isPresentational: f,
          link: !v || r || o ? void 0 : ''.concat(v, '/analytics'),
          onPress: p,
          style: h,
        })
      }
    },
    '/x6e': function (t, e, n) {
      'use strict'
      var i = n('9Ulv'),
        a = n('BR0S'),
        r = n('tI3i'),
        o = n.n(r)
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var c = 1,
        u = (function (t) {
          var e, n
          function a(e) {
            var n
            n = t.call(this) || this
            var a = e || { x: 0, y: 0 }
            return (
              'number' == typeof a.x && 'number' == typeof a.y
                ? ((n.x = new i.a(a.x)), (n.y = new i.a(a.y)))
                : (o()(
                    a.x instanceof i.a && a.y instanceof i.a,
                    'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.',
                  ),
                  (n.x = a.x),
                  (n.y = a.y)),
              (n._listeners = {}),
              n
            )
          }
          ;(n = t), ((e = a).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), s(e, n)
          var r = a.prototype
          return (
            (r.setValue = function (t) {
              this.x.setValue(t.x), this.y.setValue(t.y)
            }),
            (r.setOffset = function (t) {
              this.x.setOffset(t.x), this.y.setOffset(t.y)
            }),
            (r.flattenOffset = function () {
              this.x.flattenOffset(), this.y.flattenOffset()
            }),
            (r.extractOffset = function () {
              this.x.extractOffset(), this.y.extractOffset()
            }),
            (r.__getValue = function () {
              return { x: this.x.__getValue(), y: this.y.__getValue() }
            }),
            (r.resetAnimation = function (t) {
              this.x.resetAnimation(), this.y.resetAnimation(), t && t(this.__getValue())
            }),
            (r.stopAnimation = function (t) {
              this.x.stopAnimation(), this.y.stopAnimation(), t && t(this.__getValue())
            }),
            (r.addListener = function (t) {
              var e = this,
                n = String(c++),
                i = function (n) {
                  n.value
                  t(e.__getValue())
                }
              return (this._listeners[n] = { x: this.x.addListener(i), y: this.y.addListener(i) }), n
            }),
            (r.removeListener = function (t) {
              this.x.removeListener(this._listeners[t].x),
                this.y.removeListener(this._listeners[t].y),
                delete this._listeners[t]
            }),
            (r.removeAllListeners = function () {
              this.x.removeAllListeners(), this.y.removeAllListeners(), (this._listeners = {})
            }),
            (r.getLayout = function () {
              return { left: this.x, top: this.y }
            }),
            (r.getTranslateTransform = function () {
              return [{ translateX: this.x }, { translateY: this.y }]
            }),
            a
          )
        })(a.a)
      e.a = u
    },
    '0ig/': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return r
      })
      var i = n('i4Oy'),
        a = n('ERkP')
      function r() {
        var t = Object(a.useState)(function () {
            return i.a.get('window')
          }),
          e = t[0],
          n = t[1]
        return (
          Object(a.useEffect)(function () {
            function t(t) {
              var e = t.window
              null != e && n(e)
            }
            return (
              i.a.addEventListener('change', t),
              n(i.a.get('window')),
              function () {
                i.a.removeEventListener('change', t)
              }
            )
          }, []),
          e
        )
      }
    },
    '0m3q': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return d
      })
      var i = n('4LIG'),
        a = n('tI3i'),
        r = n.n(a)
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var s = (function (t) {
          var e, n
          function i(e, n, i, a) {
            var r
            return ((r = t.call(this, n) || this).emitter = e), (r.listener = i), (r.context = a), r
          }
          return (
            (n = t),
            ((e = i).prototype = Object.create(n.prototype)),
            (e.prototype.constructor = e),
            o(e, n),
            (i.prototype.remove = function () {
              this.emitter.removeSubscription(this)
            }),
            i
          )
        })(
          (function () {
            function t(t) {
              this.subscriber = t
            }
            return (
              (t.prototype.remove = function () {
                this.subscriber.removeSubscription(this)
              }),
              t
            )
          })(),
        ),
        c = (function () {
          function t() {
            this._subscriptionsForType = {}
          }
          var e = t.prototype
          return (
            (e.addSubscription = function (t, e) {
              r()(e.subscriber === this, 'The subscriber of the subscription is incorrectly set.'),
                this._subscriptionsForType[t] || (this._subscriptionsForType[t] = [])
              var n = this._subscriptionsForType[t].length
              return this._subscriptionsForType[t].push(e), (e.eventType = t), (e.key = n), e
            }),
            (e.removeAllSubscriptions = function (t) {
              null == t ? (this._subscriptionsForType = {}) : delete this._subscriptionsForType[t]
            }),
            (e.removeSubscription = function (t) {
              var e = t.eventType,
                n = t.key,
                i = this._subscriptionsForType[e]
              i && delete i[n]
            }),
            (e.getSubscriptionsForType = function (t) {
              return this._subscriptionsForType[t]
            }),
            t
          )
        })(),
        u = function () {
          return !0
        },
        l = new ((function () {
          function t(t) {
            this._subscriber = t || new c()
          }
          var e = t.prototype
          return (
            (e.addListener = function (t, e, n) {
              return this._subscriber.addSubscription(t, new s(this, this._subscriber, e, n))
            }),
            (e.removeAllListeners = function (t) {
              this._subscriber.removeAllSubscriptions(t)
            }),
            (e.removeSubscription = function (t) {
              r()(t.emitter === this, 'Subscription does not belong to this emitter.'),
                this._subscriber.removeSubscription(t)
            }),
            (e.listenerCount = function (t) {
              var e = this._subscriber.getSubscriptionsForType(t)
              return e ? e.filter(u).length : 0
            }),
            (e.emit = function (t) {
              var e = this._subscriber.getSubscriptionsForType(t)
              if (e) {
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                  i[a - 1] = arguments[a]
                for (var r = 0, o = e.length; r < o; r++) {
                  var s = e[r]
                  s && s.listener && s.listener.apply(s.context, i)
                }
              }
            }),
            (e.removeListener = function (t, e) {
              var n = this._subscriber.getSubscriptionsForType(t)
              if (n)
                for (var i = 0, a = n.length; i < a; i++) {
                  var r = n[i]
                  r && r.listener === e && r.remove()
                }
            }),
            t
          )
        })())(),
        d = (function () {
          function t(t) {
            'ios' === i.a.OS &&
              (r()(null != t, '`new NativeEventEmitter()` requires a non-null argument.'), (this._nativeModule = t))
          }
          var e = t.prototype
          return (
            (e.addListener = function (t, e, n) {
              var i,
                a = this
              null == (i = this._nativeModule) || i.addListener(t)
              var r = l.addListener(t, e, n)
              return {
                remove: function () {
                  var t
                  null != r && (null == (t = a._nativeModule) || t.removeListeners(1), r.remove(), (r = null))
                },
              }
            }),
            (e.removeListener = function (t, e) {
              var n
              null == (n = this._nativeModule) || n.removeListeners(1), l.removeListener(t, e)
            }),
            (e.emit = function (t) {
              for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
                n[i - 1] = arguments[i]
              l.emit.apply(l, [t].concat(n))
            }),
            (e.removeAllListeners = function (t) {
              var e
              r()(null != t, '`NativeEventEmitter.removeAllListener()` requires a non-null argument.'),
                null == (e = this._nativeModule) || e.removeListeners(this.listenerCount(t)),
                l.removeAllListeners(t)
            }),
            (e.listenerCount = function (t) {
              return l.listenerCount(t)
            }),
            t
          )
        })()
    },
    '1k08': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      })
      n('1t7P'), n('jQ/y')
      var i = n('ERkP'),
        a = n.n(i),
        r = n('MWbm'),
        o = n('t62R'),
        s = n('rHpw'),
        c = function (t) {
          var e = t.description,
            n = t.style,
            i = t.title
          return a.a.createElement(
            r.a,
            { style: n },
            a.a.createElement(
              o.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'title4', weight: 'heavy' },
              i,
            ),
            e && a.a.createElement(o.b, { color: 'gray700', style: u.description }, e),
          )
        },
        u = s.a.create(function (t) {
          return { description: { marginTop: t.spaces.space8 } }
        })
    },
    '23An': function (t, e, n) {
      'use strict'
      var i = n('ERkP'),
        a = i.useEffect,
        r = i.useRef
      t.exports = function () {
        var t = r(!0)
        return (
          a(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, []),
          t
        )
      }
    },
    '3MlI': function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return c
      }),
        n.d(e, 'a', function () {
          return u
        })
      var i = n('ERkP'),
        a = n.n(i),
        r = n('nBUg'),
        o = n('rHpw'),
        s = n('MWbm')
      function c(t) {
        var e = t.accessibilityLabel,
          n = t.accessibilityLabelledBy,
          i = t.children,
          o = t.displayStyle,
          c = void 0 === o ? 'inline' : o,
          u = t.nativeID,
          d = t.style,
          f = r.b.useProps().edgeToEdgeEnabled()
        return a.a.createElement(
          s.a,
          {
            accessibilityLabel: e,
            accessibilityLabelledBy: n,
            accessibilityRole: 'group',
            nativeID: u,
            style: [l.container, l[''.concat(c, 'Container')], f && l.noMaxWidth, d],
          },
          i,
        )
      }
      var u = 425,
        l = o.a.create(function (t) {
          return {
            container: { columnGap: t.spacesPx.space8, flexDirection: 'row' },
            inlineContainer: { justifyContent: 'space-between', maxWidth: u },
            noMaxWidth: { maxWidth: 'none' },
            blockContainer: {
              alignItems: 'stretch',
              height: '100%',
              justifyContent: 'space-around',
              minHeight: '1.875rem',
              paddingHorizontal: t.spaces.space4,
            },
          }
        })
    },
    '7zxR': function (t, e, n) {
      'use strict'
      var i,
        a = 0.1,
        r = 'function' == typeof Float32Array
      function o(t, e) {
        return 1 - 3 * e + 3 * t
      }
      function s(t, e) {
        return 3 * e - 6 * t
      }
      function c(t) {
        return 3 * t
      }
      function u(t, e, n) {
        return ((o(e, n) * t + s(e, n)) * t + c(e)) * t
      }
      function l(t, e, n) {
        return 3 * o(e, n) * t * t + 2 * s(e, n) * t + c(e)
      }
      function d(t, e, n, i) {
        if (!(t >= 0 && t <= 1 && n >= 0 && n <= 1)) throw new Error('bezier x values must be in [0, 1] range')
        var o = r ? new Float32Array(11) : new Array(11)
        if (t !== e || n !== i) for (var s = 0; s < 11; ++s) o[s] = u(s * a, t, n)
        function c(e) {
          for (var i = 0, r = 1; 10 !== r && o[r] <= e; ++r) i += a
          --r
          var s = i + ((e - o[r]) / (o[r + 1] - o[r])) * a,
            c = l(s, t, n)
          return c >= 0.001
            ? (function (t, e, n, i) {
                for (var a = e, r = 0; r < 4; ++r) {
                  var o = l(a, n, i)
                  if (0 === o) return a
                  a -= (u(a, n, i) - t) / o
                }
                return a
              })(e, s, t, n)
            : 0 === c
            ? s
            : (function (t, e, n, i, a) {
                var r,
                  o,
                  s = 0,
                  c = e,
                  l = n
                do {
                  ;(r = u((o = c + (l - c) / 2), i, a) - t) > 0 ? (l = o) : (c = o)
                } while (Math.abs(r) > 1e-7 && ++s < 10)
                return o
              })(e, i, i + a, t, n)
        }
        return function (a) {
          return t === e && n === i ? a : 0 === a ? 0 : 1 === a ? 1 : u(c(a), e, i)
        }
      }
      var f = (function () {
        function t() {}
        return (
          (t.step0 = function (t) {
            return t > 0 ? 1 : 0
          }),
          (t.step1 = function (t) {
            return t >= 1 ? 1 : 0
          }),
          (t.linear = function (t) {
            return t
          }),
          (t.ease = function (e) {
            return i || (i = t.bezier(0.42, 0, 1, 1)), i(e)
          }),
          (t.quad = function (t) {
            return t * t
          }),
          (t.cubic = function (t) {
            return t * t * t
          }),
          (t.poly = function (t) {
            return function (e) {
              return Math.pow(e, t)
            }
          }),
          (t.sin = function (t) {
            return 1 - Math.cos((t * Math.PI) / 2)
          }),
          (t.circle = function (t) {
            return 1 - Math.sqrt(1 - t * t)
          }),
          (t.exp = function (t) {
            return Math.pow(2, 10 * (t - 1))
          }),
          (t.elastic = function (t) {
            void 0 === t && (t = 1)
            var e = t * Math.PI
            return function (t) {
              return 1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * e)
            }
          }),
          (t.back = function (t) {
            return (
              void 0 === t && (t = 1.70158),
              function (e) {
                return e * e * ((t + 1) * e - t)
              }
            )
          }),
          (t.bounce = function (t) {
            if (t < 1 / 2.75) return 7.5625 * t * t
            if (t < 2 / 2.75) {
              var e = t - 1.5 / 2.75
              return 7.5625 * e * e + 0.75
            }
            if (t < 2.5 / 2.75) {
              var n = t - 2.25 / 2.75
              return 7.5625 * n * n + 0.9375
            }
            var i = t - 2.625 / 2.75
            return 7.5625 * i * i + 0.984375
          }),
          (t.bezier = function (t, e, n, i) {
            return d(t, e, n, i)
          }),
          (t.in = function (t) {
            return t
          }),
          (t.out = function (t) {
            return function (e) {
              return 1 - t(1 - e)
            }
          }),
          (t.inOut = function (t) {
            return function (e) {
              return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            }
          }),
          t
        )
      })()
      e.a = f
    },
    '9Ulv': function (t, e, n) {
      'use strict'
      var i = n('FGdj'),
        a = n('BR0S'),
        r = n('M6BN')
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var s = n('XJEr').a.API
      var c = (function (t) {
        var e, n
        function a(e) {
          var n
          if (((n = t.call(this) || this), 'number' != typeof e))
            throw new Error('AnimatedValue: Attempting to set value to undefined')
          return (n._startingValue = n._value = e), (n._offset = 0), (n._animation = null), n
        }
        ;(n = t), ((e = a).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), o(e, n)
        var c = a.prototype
        return (
          (c.__detach = function () {
            var e = this
            this.__isNative &&
              s.getValue(this.__getNativeTag(), function (t) {
                e._value = t
              }),
              this.stopAnimation(),
              t.prototype.__detach.call(this)
          }),
          (c.__getValue = function () {
            return this._value + this._offset
          }),
          (c.setValue = function (t) {
            this._animation && (this._animation.stop(), (this._animation = null)),
              this._updateValue(t, !this.__isNative),
              this.__isNative && s.setAnimatedNodeValue(this.__getNativeTag(), t)
          }),
          (c.setOffset = function (t) {
            ;(this._offset = t), this.__isNative && s.setAnimatedNodeOffset(this.__getNativeTag(), t)
          }),
          (c.flattenOffset = function () {
            ;(this._value += this._offset),
              (this._offset = 0),
              this.__isNative && s.flattenAnimatedNodeOffset(this.__getNativeTag())
          }),
          (c.extractOffset = function () {
            ;(this._offset += this._value),
              (this._value = 0),
              this.__isNative && s.extractAnimatedNodeOffset(this.__getNativeTag())
          }),
          (c.stopAnimation = function (t) {
            this.stopTracking(),
              this._animation && this._animation.stop(),
              (this._animation = null),
              t && t(this.__getValue())
          }),
          (c.resetAnimation = function (t) {
            this.stopAnimation(t), (this._value = this._startingValue)
          }),
          (c._onAnimatedValueUpdateReceived = function (t) {
            this._updateValue(t, !1)
          }),
          (c.interpolate = function (t) {
            return new i.a(this, t)
          }),
          (c.animate = function (t, e) {
            var n = this,
              i = null
            t.__isInteraction && (i = r.a.createInteractionHandle())
            var a = this._animation
            this._animation && this._animation.stop(),
              (this._animation = t),
              t.start(
                this._value,
                function (t) {
                  n._updateValue(t, !0)
                },
                function (t) {
                  ;(n._animation = null), null !== i && r.a.clearInteractionHandle(i), e && e(t)
                },
                a,
                this,
              )
          }),
          (c.stopTracking = function () {
            this._tracking && this._tracking.__detach(), (this._tracking = null)
          }),
          (c.track = function (t) {
            this.stopTracking(), (this._tracking = t)
          }),
          (c._updateValue = function (e, n) {
            if (void 0 === e) throw new Error('AnimatedValue: Attempting to set value to undefined')
            var i, a
            ;(this._value = e),
              n &&
                ((i = this),
                (a = new Set()),
                (function t(e) {
                  'function' == typeof e.update ? a.add(e) : e.__getChildren().forEach(t)
                })(i),
                a.forEach(function (t) {
                  return t.update()
                })),
              t.prototype.__callListeners.call(this, this.__getValue())
          }),
          (c.__getNativeConfig = function () {
            return { type: 'value', value: this._value, offset: this._offset }
          }),
          a
        )
      })(a.a)
      e.a = c
    },
    '9VLy': function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return v
      })
      var i = n('ERkP'),
        a = n.n(i),
        r = n('3XMw'),
        o = n.n(r),
        s = n('lUZE'),
        c = n('MWbm'),
        u = n('t62R'),
        l = n('jhWN'),
        d = n('j7Bv'),
        f = n('rHpw'),
        p = o.a.d2fb334b,
        h = o.a.f0c99eff,
        v = function (t) {
          var e = t.imageUrl,
            n = t.screenName,
            i = t.style
          return a.a.createElement(
            c.a,
            { style: [_.signature, i] },
            a.a.createElement(u.b, { color: 'gray700', weight: 'bold' }, h({ screenName: null != n ? n : p })),
            e
              ? a.a.createElement(l.a, { size: 'medium', uri: e })
              : a.a.createElement(d.a, { Icon: s.a, size: 'medium' }),
          )
        },
        _ = f.a.create(function (t) {
          return {
            signature: { display: 'inline-flex', alignItems: 'center', flexDirection: 'row', gap: t.spaces.space8 },
          }
        })
    },
    BR0S: function (t, e, n) {
      'use strict'
      var i = n('pxHa'),
        a = n('XJEr')
      function r(t, e) {
        var n
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return o(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0
            return function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] }
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        return (n = t[Symbol.iterator]()).next.bind(n)
      }
      function o(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n]
        return i
      }
      function s(t, e) {
        return (s =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var c = (function (t) {
        var e, n
        function i() {
          var e
          return ((e = t.call(this) || this)._children = []), e
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), s(e, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            if (!this.__isNative) {
              this.__isNative = !0
              for (var e, n = r(this._children); !(e = n()).done; ) {
                var i = e.value
                i.__makeNative(), a.a.API.connectAnimatedNodes(this.__getNativeTag(), i.__getNativeTag())
              }
            }
            t.prototype.__makeNative.call(this)
          }),
          (o.__addChild = function (t) {
            0 === this._children.length && this.__attach(),
              this._children.push(t),
              this.__isNative &&
                (t.__makeNative(), a.a.API.connectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag()))
          }),
          (o.__removeChild = function (t) {
            var e = this._children.indexOf(t)
            ;-1 !== e &&
              (this.__isNative &&
                t.__isNative &&
                a.a.API.disconnectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag()),
              this._children.splice(e, 1),
              0 === this._children.length && this.__detach())
          }),
          (o.__getChildren = function () {
            return this._children
          }),
          (o.__callListeners = function (e) {
            if ((t.prototype.__callListeners.call(this, e), !this.__isNative))
              for (var n, i = r(this._children); !(n = i()).done; ) {
                var a = n.value
                a.__getValue && a.__callListeners(a.__getValue())
              }
          }),
          i
        )
      })(i.a)
      e.a = c
    },
    BtOK: function (t, e, n) {
      'use strict'
      ;(function (t) {
        var i = n('YRNd'),
          a = n('XJEr')
        function r(t, e) {
          return (r =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            })(t, e)
        }
        var o = (function (e) {
          var n, i
          function o(t) {
            var n, i, r, o
            return (
              ((o = e.call(this) || this)._deceleration = null !== (n = t.deceleration) && void 0 !== n ? n : 0.998),
              (o._velocity = t.velocity),
              (o._useNativeDriver = Object(a.c)(t)),
              (o.__isInteraction = null !== (i = t.isInteraction) && void 0 !== i ? i : !o._useNativeDriver),
              (o.__iterations = null !== (r = t.iterations) && void 0 !== r ? r : 1),
              o
            )
          }
          ;(i = e), ((n = o).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), r(n, i)
          var s = o.prototype
          return (
            (s.__getNativeAnimationConfig = function () {
              return {
                type: 'decay',
                deceleration: this._deceleration,
                velocity: this._velocity,
                iterations: this.__iterations,
              }
            }),
            (s.start = function (t, e, n, i, a) {
              ;(this.__active = !0),
                (this._lastValue = t),
                (this._fromValue = t),
                (this._onUpdate = e),
                (this.__onEnd = n),
                (this._startTime = Date.now()),
                this._useNativeDriver
                  ? this.__startNativeAnimation(a)
                  : (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)))
            }),
            (s.onUpdate = function () {
              var t = Date.now(),
                e =
                  this._fromValue +
                  (this._velocity / (1 - this._deceleration)) *
                    (1 - Math.exp(-(1 - this._deceleration) * (t - this._startTime)))
              this._onUpdate(e),
                Math.abs(this._lastValue - e) < 0.1
                  ? this.__debouncedOnEnd({ finished: !0 })
                  : ((this._lastValue = e),
                    this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this))))
            }),
            (s.stop = function () {
              e.prototype.stop.call(this),
                (this.__active = !1),
                t.cancelAnimationFrame(this._animationFrame),
                this.__debouncedOnEnd({ finished: !1 })
            }),
            o
          )
        })(i.a)
        e.a = o
      }.call(this, n('fRV1')))
    },
    'EyD/': function (t, e, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.859 15.413l-3.606 2.641 1.364 4.255c.059.137 0 .284-.117.372-.058.049-.127.068-.195.068-.078 0-.146-.02-.205-.068l-3.606-2.622-3.606 2.622c-.059.049-.127.068-.205.068-.068 0-.137-.02-.195-.068-.127-.088-.185-.235-.127-.372l1.365-4.255-3.597-2.641c-.117-.078-.166-.245-.127-.381.049-.147.175-.235.331-.235h4.454l1.374-4.255c.049-.147.185-.225.331-.225.136 0 .283.078.331.225l1.374 4.255h4.454c.146 0 .292.088.331.235.042.137.004.303-.123.381zM9.696 22.402H3.617c-.822 0-1.574-.359-2.062-.986-.503-.645-.674-1.486-.472-2.307.617-2.486 2.409-4.509 4.918-5.552.603-.252 1.299.036 1.549.644.251.607-.037 1.303-.642 1.554-1.806.751-3.091 2.183-3.524 3.928-.025.103-.011.202.039.266.015.019.056.072.194.072h6.079c.655 0 1.186.533 1.186 1.19s-.531 1.191-1.186 1.191zm.197-10.184c-1.439 0-3.055-.167-4.128-1.397-.894-1.026-1.19-2.566-.903-4.709.402-2.999 2.33-4.862 5.031-4.862s4.63 1.863 5.031 4.861c.287 2.142-.008 3.683-.902 4.708-1.073 1.233-2.689 1.399-4.129 1.399zm0-8.588c-1.906 0-2.51 1.521-2.68 2.799-.185 1.382-.068 2.359.338 2.825.352.404 1.075.584 2.343.584 1.269 0 1.992-.18 2.344-.584.405-.466.522-1.443.337-2.825-.172-1.277-.776-2.799-2.682-2.799z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (e.a = u)
    },
    FGdj: function (t, e, n) {
      'use strict'
      var i = n('BR0S'),
        a = n('XJEr'),
        r = n('tI3i'),
        o = n.n(r),
        s = n('q2a+'),
        c = n.n(s)
      function u(t, e) {
        return (u =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      function l(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                f(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      var p = function (t) {
        return t
      }
      function h(t) {
        if (t.outputRange && 'string' == typeof t.outputRange[0])
          return (function (t) {
            var e = t.outputRange
            o()(e.length >= 2, 'Bad output range'),
              (function (t) {
                for (var e = t[0].replace(_, ''), n = 1; n < t.length; ++n)
                  o()(e === t[n].replace(_, ''), 'invalid pattern ' + t[0] + ' and ' + t[n])
              })((e = e.map(v)))
            var n = e[0].match(_).map(function () {
              return []
            })
            e.forEach(function (t) {
              t.match(_).forEach(function (t, e) {
                n[e].push(+t)
              })
            })
            var i = e[0].match(_).map(function (e, i) {
                return h(d(d({}, t), {}, { outputRange: n[i] }))
              }),
              a = ((r = e[0]), 'string' == typeof r && r.startsWith('rgb'))
            var r
            return function (t) {
              var n = 0
              return e[0].replace(_, function () {
                var e = +i[n++](t)
                return a && (e = n < 4 ? Math.round(e) : Math.round(1e3 * e) / 1e3), String(e)
              })
            }
          })(t)
        var e = t.outputRange
        m('outputRange', e)
        var n = t.inputRange
        m('inputRange', n),
          (function (t) {
            o()(t.length >= 2, 'inputRange must have at least 2 elements')
            for (var e = 1; e < t.length; ++e)
              o()(t[e] >= t[e - 1], 'inputRange must be monotonically non-decreasing ' + t)
          })(n),
          o()(
            n.length === e.length,
            'inputRange (' + n.length + ') and outputRange (' + e.length + ') must have the same length',
          )
        var i = t.easing || p,
          a = 'extend'
        void 0 !== t.extrapolateLeft ? (a = t.extrapolateLeft) : void 0 !== t.extrapolate && (a = t.extrapolate)
        var r = 'extend'
        return (
          void 0 !== t.extrapolateRight ? (r = t.extrapolateRight) : void 0 !== t.extrapolate && (r = t.extrapolate),
          function (t) {
            o()('number' == typeof t, 'Cannot interpolation an input which is not a number')
            var s = (function (t, e) {
              var n
              for (n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
              return n - 1
            })(t, n)
            return (function (t, e, n, i, a, r, o, s) {
              var c = t
              if (c < e) {
                if ('identity' === o) return c
                'clamp' === o && (c = e)
              }
              if (c > n) {
                if ('identity' === s) return c
                'clamp' === s && (c = n)
              }
              if (i === a) return i
              if (e === n) return t <= e ? i : a
              e === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= e) : (c = (c - e) / (n - e))
              ;(c = r(c)), i === -1 / 0 ? (c = -c) : a === 1 / 0 ? (c += i) : (c = c * (a - i) + i)
              return c
            })(t, n[s], n[s + 1], e[s], e[s + 1], i, a, r)
          }
        )
      }
      function v(t) {
        var e = c()(t)
        return null === e || 'number' != typeof e
          ? t
          : 'rgba(' +
              ((4278190080 & (e = e || 0)) >>> 24) +
              ', ' +
              ((16711680 & e) >>> 16) +
              ', ' +
              ((65280 & e) >>> 8) +
              ', ' +
              (255 & e) / 255 +
              ')'
      }
      var _ = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g
      function m(t, e) {
        o()(e.length >= 2, t + ' must have at least 2 elements'),
          o()(2 !== e.length || e[0] !== -1 / 0 || e[1] !== 1 / 0, t + 'cannot be ]-infinity;+infinity[ ' + e)
      }
      var g = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return ((i = t.call(this) || this)._parent = e), (i._config = n), (i._interpolation = h(n)), i
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), u(e, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._parent.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            var t = this._parent.__getValue()
            return (
              o()('number' == typeof t, 'Cannot interpolate an input which is not a number.'), this._interpolation(t)
            )
          }),
          (r.interpolate = function (t) {
            return new i(this, t)
          }),
          (r.__attach = function () {
            this._parent.__addChild(this)
          }),
          (r.__detach = function () {
            this._parent.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (r.__transformDataType = function (t) {
            return t.map(a.a.transformDataType)
          }),
          (r.__getNativeConfig = function () {
            return {
              inputRange: this._config.inputRange,
              outputRange: this.__transformDataType(this._config.outputRange),
              extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',
              extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',
              type: 'interpolation',
            }
          }),
          i
        )
      })(i.a)
      ;(g.__createInterpolation = h), (e.a = g)
    },
    G41x: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return h
      })
      var i = n('ERkP'),
        a = n.n(i),
        r = n('mjJ+'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('fn9Y'),
        u = n('wD1h'),
        l = n('wwsH'),
        d = s.a.dc63da15,
        f = s.a.jc9298a8,
        p = { viewType: 'share' }
      function h(t) {
        var e = t.actionItems,
          n = t.actionMenuDescription,
          i = t.activeColor,
          o = t.color,
          s = t.enableKeyboardShortcuts,
          h = t.iconSize,
          v = t.isDisabled,
          _ = t.isFaded,
          m = t.isPresentational,
          g = t.onMenuCancel,
          y = t.onPress,
          b = t.style,
          w = t.withCount
        return a.a.createElement(l.a, {
          Icon: c.a,
          accessibilityLabel: f,
          activeColor: i,
          behavioralEventContext: p,
          color: o,
          enableKeyboardShortcuts: s,
          hoverLabel: { label: d },
          iconSize: h,
          isDisabled: v,
          isFaded: _,
          isPresentational: m,
          keyboardShortcut: u.a.shortcuts.share,
          onPress: y,
          renderMenu: _
            ? void 0
            : function (t) {
                return a.a.createElement(r.a, {
                  description: n,
                  items: e,
                  onCloseRequested: function () {
                    t(), null == g || g()
                  },
                  shouldCloseOnClick: !0,
                })
              },
          style: b,
          withCount: w,
        })
      }
    },
    H5wF: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return i
      })
      n('tI3i')
      function i(t) {
        return null
      }
    },
    HSMM: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return p
      })
      n('hBvt')
      var i = n('ERkP'),
        a = n.n(i),
        r = n('3XMw'),
        o = n.n(r),
        s = n('dFWS'),
        c = n('wD1h'),
        u = n('wwsH'),
        l = o.a.hdf72269,
        d = o.a.c9940954,
        f = { viewType: 'reply' }
      function p(t) {
        var e = t.activeColor,
          n = t.color,
          i = t.count,
          r = t.enableKeyboardShortcuts,
          o = t.iconSize,
          p = t.isDisabled,
          h = t.isFaded,
          v = t.isPresentational,
          _ = t.link,
          m = t.onPress,
          g = t.renderWrapper,
          y = t.style,
          b = t.testID,
          w = t.withCount && 'number' == typeof i,
          O = w ? d({ count: i }) : l
        return a.a.createElement(u.a, {
          Icon: s.a,
          accessibilityLabel: O,
          activeColor: e,
          behavioralEventContext: f,
          color: n,
          count: i,
          enableKeyboardShortcuts: r,
          hoverLabel: { label: l },
          iconSize: o,
          isDisabled: p,
          isFaded: h,
          isPresentational: v,
          keyboardShortcut: c.a.shortcuts.reply,
          link: _,
          onPress: m,
          renderWrapper: g,
          style: y,
          testID: b,
          withCount: w,
        })
      }
    },
    IqLm: function (t, e, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M3.538 14.219l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72v-6.81c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18zm.95-1.61c.04-.09.16-.3.46-.3h4.47c.41 0 .75-.34.75-.75v-7.56c0-.28.22-.5.5-.5h2.66c.28 0 .5.22.5.5v7.56c0 .41.34.75.75.75h4.47c.29 0 .42.21.46.3.04.09.1.33-.1.54l-6.88 7.18c-.1.11-.24.17-.39.17-.15 0-.29-.06-.39-.16l-7.15-7.18c-.21-.21-.15-.45-.11-.55z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (e.a = u)
    },
    JWc1: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return g
      })
      n('uFXj'), n('kH1Z'), n('6U7i')
      var i = n('ERkP'),
        a = n.n(i),
        r = n('3XMw'),
        o = n.n(r),
        s = n('lUZE'),
        c = n('MWbm'),
        u = n('cHvH'),
        l = n('rHpw'),
        d = n('jhWN'),
        f = n('j7Bv'),
        p = n('6OUF'),
        h = n('yTN1'),
        v = n('t62R'),
        _ = o.a.a4ed9071,
        m = function (t, e) {
          var n,
            i = t.autoFocus,
            r = t.imageUrl,
            o = t.onChange,
            m = t.style,
            g = t.value,
            b = t.valueMaxLength,
            w = Object(u.b)().windowWidth > l.a.theme.breakpoints.small
          return a.a.createElement(
            c.a,
            { style: [y.root, m] },
            r
              ? a.a.createElement(d.a, { size: w ? 'xxxLarge' : 'xLarge', uri: r })
              : a.a.createElement(f.a, { Icon: s.a }),
            o
              ? a.a.createElement(
                  a.a.Fragment,
                  null,
                  a.a.createElement(p.a, {
                    autoFocus: i,
                    inputStyle: [y.creatorIntroInput, b && y.creatorIntroInputWithCountdownCircle],
                    isCompact: !0,
                    leftAligned: !0,
                    maxNumberOfLines: Number.MAX_SAFE_INTEGER,
                    multiline: !0,
                    name: 'creatorIntro',
                    numberOfLines: 1,
                    onChange: o,
                    placeholder: _,
                    ref: e,
                    style: y.creatorIntro,
                    value: g,
                  }),
                  b &&
                    a.a.createElement(
                      c.a,
                      { style: y.countdownCircle },
                      a.a.createElement(h.a, {
                        count: null !== (n = null == g ? void 0 : g.length) && void 0 !== n ? n : 0,
                        maxCount: b,
                        warningCount: b - 10,
                      }),
                    ),
                )
              : a.a.createElement(v.b, { style: [y.creatorIntro, y.creatorIntroReadOnly] }, g),
          )
        },
        g = a.a.forwardRef(m),
        y = l.a.create(function (t) {
          return {
            root: { display: 'inline-flex', alignItems: 'start', flexDirection: 'row', gap: t.spaces.space12 },
            creatorIntro: {
              backgroundColor: t.colors.cellBackground,
              borderBottomLeftRadius: t.borderRadii.large,
              borderBottomRightRadius: t.borderRadii.large,
              borderTopLeftRadius: 0,
              borderTopRightRadius: t.borderRadii.large,
              boxShadow: t.boxShadows.small,
              width: '100%',
            },
            creatorIntroReadOnly: { padding: t.spaces.space24 },
            creatorIntroInput: {
              minHeight: 0,
              paddingBottom: t.spaces.space24,
              paddingLeft: t.spaces.space24,
              paddingRight: t.spaces.space24,
              paddingTop: t.spaces.space24,
            },
            creatorIntroInputWithCountdownCircle: { paddingBottom: t.spaces.space40 },
            countdownCircle: { position: 'absolute', bottom: t.spaces.space8, right: t.spaces.space8 },
          }
        })
    },
    MAc7: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return g
      })
      var i = n('97Jx'),
        a = n.n(i),
        r = n('m3Bd'),
        o = n.n(r),
        s = (n('ho0z'), n('ERkP')),
        c = n.n(s),
        u = n('VTDR'),
        l = n('JWc1'),
        d = n('t62R'),
        f = n('rHpw'),
        p = n('3XMw'),
        h = n.n(p),
        v = ['name', 'style'],
        _ = h.a.dc71aee7,
        m = function (t, e) {
          var n = t.name,
            i = t.style,
            r = o()(t, v)
          return c.a.createElement(
            u.a,
            { style: i },
            c.a.createElement(
              d.b,
              { accessibilityLevel: 1, accessibilityRole: 'heading', size: 'title3', weight: 'heavy' },
              c.a.createElement(
                h.a.I18NFormatMessage,
                { $i18n: 'f402ebd1', name: null != n ? n : '' },
                c.a.createElement('br', null),
              ),
            ),
            c.a.createElement(d.b, { style: y.subheader }, _),
            c.a.createElement(l.a, a()({}, r, { ref: e, style: y.intro })),
          )
        },
        g = c.a.forwardRef(m),
        y = f.a.create(function (t) {
          return { subheader: { marginTop: t.spaces.space8 }, intro: { marginTop: t.spaces.space36 } }
        })
    },
    MQi0: function (t, e, n) {
      'use strict'
      function i(t) {
        return 3.62 * (t - 30) + 194
      }
      function a(t) {
        return 3 * (t - 8) + 25
      }
      e.a = {
        fromOrigamiTensionAndFriction: function (t, e) {
          return { stiffness: i(t), damping: a(e) }
        },
        fromBouncinessAndSpeed: function (t, e) {
          function n(t, e, n) {
            return (t - e) / (n - e)
          }
          function r(t, e, n) {
            return e + t * (n - e)
          }
          var o = n(t / 1.7, 0, 20)
          o = r(o, 0, 0.8)
          var s,
            c,
            u,
            l,
            d = r(n(e / 1.7, 0, 20), 0.5, 200),
            f =
              ((s = o),
              (c =
                (u = d) <= 18
                  ? ((l = u), 7e-4 * Math.pow(l, 3) - 0.031 * Math.pow(l, 2) + 0.64 * l + 1.28)
                  : u > 18 && u <= 44
                  ? (function (t) {
                      return 44e-6 * Math.pow(t, 3) - 0.006 * Math.pow(t, 2) + 0.36 * t + 2
                    })(u)
                  : (function (t) {
                      return 45e-8 * Math.pow(t, 3) - 332e-6 * Math.pow(t, 2) + 0.1078 * t + 5.84
                    })(u)),
              (function (t, e, n) {
                return t * n + (1 - t) * e
              })(2 * s - s * s, c, 0.01))
          return { stiffness: i(d), damping: a(f) }
        },
      }
    },
    O5E5: function (t, e, n) {
      'use strict'
      n.r(e)
      var i = {
        argumentDefinitions: [],
        kind: 'Fragment',
        metadata: null,
        name: 'ExclusiveDemoVIPContent_user',
        selections: [
          {
            alias: null,
            args: null,
            concreteType: 'ApiUser',
            kind: 'LinkedField',
            name: 'legacy',
            plural: !1,
            selections: [
              { alias: null, args: null, kind: 'ScalarField', name: 'profile_image_url_https', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'protected', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'verified', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null },
              { alias: null, args: null, kind: 'ScalarField', name: 'screen_name', storageKey: null },
            ],
            storageKey: null,
          },
        ],
        type: 'User',
        abstractKey: null,
        hash: '58af446418df3647d0170aad2caed65d',
      }
      e.default = i
    },
    'Q+qU': function (t, e, n) {
      'use strict'
      var i = n('97Jx'),
        a = n.n(i),
        r = n('ddV6'),
        o = n.n(r),
        s = n('ERkP'),
        c = n.n(s),
        u = n('t62R'),
        l = n('rHpw'),
        d = l.a.create(function (t) {
          return {
            apptext: {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
              display: 'inline-block',
            },
          }
        })
      e.a = function (t) {
        var e = c.a.useState(0),
          n = o()(e, 2),
          i = n[0],
          r = n[1],
          s = t.size || 'body',
          f = l.a.theme.fontSizesPx[s],
          p = { fontSize: f - i }
        return c.a.createElement(
          u.b,
          a()({}, t, {
            getTextOverflow: function (t) {
              t && f - i > l.a.theme.fontSizesPx.subtext3 && r(i + 1)
            },
            numberOfLines: 1,
            style: [t.style, p, d.apptext],
          }),
        )
      }
    },
    TW8A: function (t, e, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (e.a = u)
    },
    VTDR: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return u
      })
      var i = n('ERkP'),
        a = n.n(i),
        r = n('MWbm'),
        o = n('cHvH'),
        s = n('rHpw'),
        c = n('+Eiw'),
        u = function (t) {
          var e = t.children,
            n = t.style,
            i = Object(o.b)().windowWidth > s.a.theme.breakpoints.medium
          return a.a.createElement(
            r.a,
            { style: [l.root, i && l.rootWide, n] },
            a.a.createElement(r.a, { style: l.blob }),
            e,
          )
        },
        l = s.a.create(function (t) {
          return {
            root: {
              minHeight: 240,
              paddingBottom: t.spaces.space16,
              paddingHorizontal: t.spaces.space32,
              paddingTop: t.spaces.space48,
              position: 'relative',
            },
            rootWide: { paddingHorizontal: t.spaces.space48 },
            blob: {
              backgroundImage: c.a.getBackgroundImage(),
              clipPath: 'ellipse(100% 100% at 38% 0%)',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
              zIndex: -1,
            },
          }
        })
    },
    WOwf: function (t, e, n) {
      'use strict'
      function i(t, e) {
        return Math.min(1, 1 - t / e)
      }
      n.d(e, 'a', function () {
        return i
      })
    },
    Wk1j: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return C
      }),
        n.d(e, 'b', function () {
          return N
        })
      var i = n('ERkP'),
        a = n.n(i),
        r = n('3XMw'),
        o = n.n(r),
        s = n('wD1h'),
        c = n('wwsH'),
        u = n('yVEN'),
        l = n('jlPL'),
        d = n('mjJ+'),
        f = n('TW8A'),
        p = o.a.d6c85149,
        h = o.a.f3bbbb87,
        v = o.a.c9d7235d,
        _ = { viewType: 'quote' },
        m = function (t) {
          return { viewType: 'retweet', viewState: { type: 'toggleable', toggledTo: t } }
        }
      function g(t) {
        var e,
          n,
          i,
          r,
          o,
          s,
          c,
          u,
          g,
          y,
          b,
          w,
          O,
          E,
          k,
          C =
            ((n = (e = t).excludeRetweetAction),
            (i = void 0 !== n && n),
            (r = e.excludeRetweetWithCommentAction),
            (o = void 0 !== r && r),
            (s = e.isRetweeted),
            (c = e.onMenuCancel),
            (u = e.onQuoteTweetActionSelect),
            (g = e.onRetweetActionSelect),
            (y = e.onUnretweetActionSelect),
            (b = e.retweetActionSubText),
            (w = e.retweetWithCommentLink),
            (O = e.testIDs),
            (E = null == O ? void 0 : O.retweetConfirm),
            (k = null == O ? void 0 : O.unretweetConfirm),
            a.a.useMemo(
              function () {
                var t = []
                return (
                  s ||
                    i ||
                    t.push({
                      behavioralEventContext: m(!0),
                      text: p,
                      subText: b,
                      onClick: function () {
                        null == c || c(), null == g || g()
                      },
                      testID: E,
                      Icon: l.a,
                    }),
                  s &&
                    t.push({
                      behavioralEventContext: m(!1),
                      text: h,
                      onClick: function () {
                        null == c || c(), null == y || y()
                      },
                      testID: k,
                      Icon: l.a,
                    }),
                  o ||
                    t.push({
                      behavioralEventContext: _,
                      text: v,
                      onClick: function () {
                        null == c || c(), null == u || u()
                      },
                      Icon: f.a,
                      link: w,
                    }),
                  t
                )
              },
              [i, o, s, c, u, g, y, b, w, E, k],
            ))
        return a.a.createElement(d.a, {
          description: t.actionMenuDescription,
          items: C,
          onCloseRequested: function () {
            var e
            null === (e = t.onMenuCancel) || void 0 === e || e.call(t)
          },
        })
      }
      var y = o.a.d6c85149,
        b = o.a.f3bbbb87,
        w = o.a.g23ce6f0,
        O = o.a.i769b0ab,
        E = o.a.ea9a1f0c,
        k = { viewType: 'retweet' },
        C = { RETWEET: 'retweet', UNRETWEET: 'unretweet', QUOTE: 'quote' }
      function N(t) {
        var e = t.actionMenuDescription,
          n = t.activeColor,
          i = void 0 === n ? 'green500' : n,
          r = t.color,
          o = t.count,
          d = t.enableActionMenu,
          f = void 0 !== d && d,
          p = t.enableKeyboardShortcuts,
          h = t.excludeRetweetAction,
          v = t.excludeRetweetWithCommentAction,
          _ = t.iconSize,
          m = t.isDisabled,
          C = t.isFaded,
          N = t.isPresentational,
          A = t.isRetweeted,
          S = t.onMenuCancel,
          P = t.onPress,
          j = t.onQuoteTweetActionSelect,
          x = t.onRetweetActionSelect,
          T = t.onUnretweetActionSelect,
          R = t.retweetActionSubText,
          V = t.retweetWithCommentLink,
          I = t.style,
          L = t.testIDs,
          D = t.withCount && 'number' == typeof o,
          F = A ? w : y
        return (
          D && (F = A ? E({ count: o }) : O({ count: o })),
          a.a.createElement(c.a, {
            ActiveIcon: u.a,
            Icon: l.a,
            accessibilityLabel: F,
            activeColor: i,
            behavioralEventContext: k,
            color: r,
            count: o,
            enableKeyboardShortcuts: p,
            hoverLabel: { label: A ? b : y },
            iconSize: _,
            isActive: A,
            isDisabled: m,
            isFaded: C,
            isPresentational: N,
            keyboardShortcut: s.a.shortcuts.retweet,
            onPress: P,
            renderMenu: f
              ? function (t) {
                  return a.a.createElement(g, {
                    actionMenuDescription: e,
                    excludeRetweetAction: h,
                    excludeRetweetWithCommentAction: v,
                    isRetweeted: A,
                    onMenuCancel: function () {
                      t(), null == S || S()
                    },
                    onQuoteTweetActionSelect: j,
                    onRetweetActionSelect: x,
                    onUnretweetActionSelect: T,
                    retweetActionSubText: R,
                    retweetWithCommentLink: V,
                    testIDs: {
                      retweetConfirm: null == L ? void 0 : L.retweetConfirm,
                      unretweetConfirm: null == L ? void 0 : L.unretweetConfirm,
                    },
                  })
                }
              : void 0,
            style: I,
            testID: A ? (null == L ? void 0 : L.unretweet) : null == L ? void 0 : L.retweet,
            withCount: D,
          })
        )
      }
    },
    WrBE: function (t, e, n) {
      'use strict'
      var i = n('4LIG'),
        a = n('ERkP'),
        r = n('sIe2'),
        o = n('9Ulv'),
        s = n('XJEr'),
        c = n('Xo28'),
        u = n('tI3i'),
        l = n.n(u)
      function d(t, e, n) {
        var i = []
        l()(
          n[0] && n[0].nativeEvent,
          'Native driven events only support animated values contained inside `nativeEvent`.',
        ),
          (function t(e, n) {
            if (e instanceof o.a) e.__makeNative(), i.push({ nativeEventPath: n, animatedValueTag: e.__getNativeTag() })
            else if ('object' == typeof e) for (var a in e) t(e[a], n.concat(a))
          })(n[0].nativeEvent, [])
        var a = Object(c.a)(t)
        return (
          null != a &&
            i.forEach(function (t) {
              s.a.API.addAnimatedEventToView(a, e, t)
            }),
          {
            detach: function () {
              null != a &&
                i.forEach(function (t) {
                  s.a.API.removeAnimatedEventFromView(a, e, t.animatedValueTag)
                })
            },
          }
        )
      }
      var f = (function () {
          function t(t, e) {
            ;(this._listeners = []),
              (this._argMapping = t),
              null == e && (e = { useNativeDriver: !1 }),
              e.listener && this.__addListener(e.listener),
              (this._callListeners = this._callListeners.bind(this)),
              (this._attachedEvent = null),
              (this.__isNative = Object(s.c)(e))
          }
          var e = t.prototype
          return (
            (e.__addListener = function (t) {
              this._listeners.push(t)
            }),
            (e.__removeListener = function (t) {
              this._listeners = this._listeners.filter(function (e) {
                return e !== t
              })
            }),
            (e.__attach = function (t, e) {
              l()(this.__isNative, 'Only native driven events need to be attached.'),
                (this._attachedEvent = d(t, e, this._argMapping))
            }),
            (e.__detach = function (t, e) {
              l()(this.__isNative, 'Only native driven events need to be detached.'),
                this._attachedEvent && this._attachedEvent.detach()
            }),
            (e.__getHandler = function () {
              var t = this
              if (this.__isNative) return this._callListeners
              return function () {
                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i]
                var a = function t(e, n, i) {
                  if (e instanceof o.a) 'number' == typeof n && e.setValue(n)
                  else if ('object' == typeof e) for (var a in e) t(e[a], n[a], a)
                }
                t._argMapping.forEach(function (t, e) {
                  a(t, n[e], 'arg' + e)
                }),
                  t._callListeners.apply(t, n)
              }
            }),
            (e._callListeners = function () {
              for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
              this._listeners.forEach(function (t) {
                return t.apply(void 0, e)
              })
            }),
            t
          )
        })(),
        p = n('pxHa'),
        h = n('BR0S')
      function v(t, e) {
        return (v =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var _ = (function (t) {
          var e, n
          function i(e) {
            var n
            return ((n = t.call(this) || this)._transforms = e), n
          }
          ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), v(e, n)
          var a = i.prototype
          return (
            (a.__makeNative = function () {
              this._transforms.forEach(function (t) {
                for (var e in t) {
                  var n = t[e]
                  n instanceof p.a && n.__makeNative()
                }
              }),
                t.prototype.__makeNative.call(this)
            }),
            (a.__getValue = function () {
              return this._transforms.map(function (t) {
                var e = {}
                for (var n in t) {
                  var i = t[n]
                  i instanceof p.a ? (e[n] = i.__getValue()) : (e[n] = i)
                }
                return e
              })
            }),
            (a.__getAnimatedValue = function () {
              return this._transforms.map(function (t) {
                var e = {}
                for (var n in t) {
                  var i = t[n]
                  i instanceof p.a ? (e[n] = i.__getAnimatedValue()) : (e[n] = i)
                }
                return e
              })
            }),
            (a.__attach = function () {
              var t = this
              this._transforms.forEach(function (e) {
                for (var n in e) {
                  var i = e[n]
                  i instanceof p.a && i.__addChild(t)
                }
              })
            }),
            (a.__detach = function () {
              var e = this
              this._transforms.forEach(function (t) {
                for (var n in t) {
                  var i = t[n]
                  i instanceof p.a && i.__removeChild(e)
                }
              }),
                t.prototype.__detach.call(this)
            }),
            (a.__getNativeConfig = function () {
              var t = []
              return (
                this._transforms.forEach(function (e) {
                  for (var n in e) {
                    var i = e[n]
                    i instanceof p.a
                      ? t.push({ type: 'animated', property: n, nodeTag: i.__getNativeTag() })
                      : t.push({ type: 'static', property: n, value: s.a.transformDataType(i) })
                  }
                }),
                s.a.validateTransform(t),
                { type: 'transform', transforms: t }
              )
            }),
            i
          )
        })(h.a),
        m = n('YTr2')
      function g(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? g(Object(n), !0).forEach(function (e) {
                b(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function b(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      function w(t, e) {
        return (w =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var O = (function (t) {
        var e, n
        function i(e) {
          var n
          return (
            (n = t.call(this) || this),
            (e = Object(m.a)(e) || {}).transform && (e = y(y({}, e), {}, { transform: new _(e.transform) })),
            (n._style = e),
            n
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), w(e, n)
        var a = i.prototype
        return (
          (a._walkStyleAndGetValues = function (t) {
            var e = {}
            for (var n in t) {
              var i = t[n]
              i instanceof p.a
                ? i.__isNative || (e[n] = i.__getValue())
                : i && !Array.isArray(i) && 'object' == typeof i
                ? (e[n] = this._walkStyleAndGetValues(i))
                : (e[n] = i)
            }
            return e
          }),
          (a.__getValue = function () {
            return this._walkStyleAndGetValues(this._style)
          }),
          (a._walkStyleAndGetAnimatedValues = function (t) {
            var e = {}
            for (var n in t) {
              var i = t[n]
              i instanceof p.a
                ? (e[n] = i.__getAnimatedValue())
                : i && !Array.isArray(i) && 'object' == typeof i && (e[n] = this._walkStyleAndGetAnimatedValues(i))
            }
            return e
          }),
          (a.__getAnimatedValue = function () {
            return this._walkStyleAndGetAnimatedValues(this._style)
          }),
          (a.__attach = function () {
            for (var t in this._style) {
              var e = this._style[t]
              e instanceof p.a && e.__addChild(this)
            }
          }),
          (a.__detach = function () {
            for (var e in this._style) {
              var n = this._style[e]
              n instanceof p.a && n.__removeChild(this)
            }
            t.prototype.__detach.call(this)
          }),
          (a.__makeNative = function () {
            for (var e in this._style) {
              var n = this._style[e]
              n instanceof p.a && n.__makeNative()
            }
            t.prototype.__makeNative.call(this)
          }),
          (a.__getNativeConfig = function () {
            var t = {}
            for (var e in this._style)
              if (this._style[e] instanceof p.a) {
                var n = this._style[e]
                n.__makeNative(), (t[e] = n.__getNativeTag())
              }
            return s.a.validateStyles(t), { type: 'style', style: t }
          }),
          i
        )
      })(h.a)
      function E(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function k(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? E(Object(n), !0).forEach(function (e) {
                C(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function C(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      function N(t, e) {
        return (N =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var A = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return (
            (i = t.call(this) || this),
            e.style && (e = k(k({}, e), {}, { style: new O(e.style) })),
            (i._props = e),
            (i._callback = n),
            i.__attach(),
            i
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), N(e, n)
        var a = i.prototype
        return (
          (a.__getValue = function () {
            var t = {}
            for (var e in this._props) {
              var n = this._props[e]
              n instanceof p.a
                ? (!n.__isNative || n instanceof O) && (t[e] = n.__getValue())
                : (t[e] = n instanceof f ? n.__getHandler() : n)
            }
            return t
          }),
          (a.__getAnimatedValue = function () {
            var t = {}
            for (var e in this._props) {
              var n = this._props[e]
              n instanceof p.a && (t[e] = n.__getAnimatedValue())
            }
            return t
          }),
          (a.__attach = function () {
            for (var t in this._props) {
              var e = this._props[t]
              e instanceof p.a && e.__addChild(this)
            }
          }),
          (a.__detach = function () {
            for (var e in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
              var n = this._props[e]
              n instanceof p.a && n.__removeChild(this)
            }
            t.prototype.__detach.call(this)
          }),
          (a.update = function () {
            this._callback()
          }),
          (a.__makeNative = function () {
            if (!this.__isNative) {
              for (var t in ((this.__isNative = !0), this._props)) {
                var e = this._props[t]
                e instanceof p.a && e.__makeNative()
              }
              this._animatedView && this.__connectAnimatedView()
            }
          }),
          (a.setNativeView = function (t) {
            this._animatedView !== t && ((this._animatedView = t), this.__isNative && this.__connectAnimatedView())
          }),
          (a.__connectAnimatedView = function () {
            l()(this.__isNative, 'Expected node to be marked as "native"')
            var t = Object(c.a)(this._animatedView)
            l()(null != t, 'Unable to locate attached view in the native tree'),
              s.a.API.connectAnimatedNodeToView(this.__getNativeTag(), t)
          }),
          (a.__disconnectAnimatedView = function () {
            l()(this.__isNative, 'Expected node to be marked as "native"')
            var t = Object(c.a)(this._animatedView)
            l()(null != t, 'Unable to locate attached view in the native tree'),
              s.a.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), t)
          }),
          (a.__restoreDefaultValues = function () {
            this.__isNative && s.a.API.restoreDefaultValues(this.__getNativeTag())
          }),
          (a.__getNativeConfig = function () {
            var t = {}
            for (var e in this._props) {
              var n = this._props[e]
              n instanceof p.a && (n.__makeNative(), (t[e] = n.__getNativeTag()))
            }
            return { type: 'props', props: t }
          }),
          i
        )
      })(p.a)
      var S = function (t) {
        var e = t.getForwardedRef,
          n = t.setLocalRef
        return function (t) {
          var i = e()
          n(t), 'function' == typeof i ? i(t) : 'object' == typeof i && null != i && (i.current = t)
        }
      }
      function P() {
        return (P =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          }).apply(this, arguments)
      }
      function j(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function x(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? j(Object(n), !0).forEach(function (e) {
                T(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function T(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      function R(t, e) {
        if (null == t) return {}
        var n,
          i,
          a = {},
          r = Object.keys(t)
        for (i = 0; i < r.length; i++) (n = r[i]), e.indexOf(n) >= 0 || (a[n] = t[n])
        return a
      }
      function V(t, e) {
        return (V =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var I = 1
      var L = function (t, e) {
        l()(
          'function' != typeof t || (t.prototype && t.prototype.isReactComponent),
          '`createAnimatedComponent` does not support stateless functional components; use a class component instead.',
        )
        var n = (function (n) {
          var i, r
          function o() {
            for (var t, e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a]
            return (
              ((t = n.call.apply(n, [this].concat(i)) || this)._invokeAnimatedPropsCallbackOnMount = !1),
              (t._eventDetachers = []),
              (t._animatedComponentId = I++ + ':animatedComponent'),
              (t._isFabric = function () {
                var e, n, i, a, r, o
                return (
                  null != t._component &&
                  (null !=
                    (null == (e = t._component._internalInstanceHandle) || null == (n = e.stateNode)
                      ? void 0
                      : n.canonical) ||
                    (null != t._component.getNativeScrollRef &&
                      null != t._component.getNativeScrollRef() &&
                      null !=
                        (null == (i = t._component.getNativeScrollRef()._internalInstanceHandle) ||
                        null == (a = i.stateNode)
                          ? void 0
                          : a.canonical)) ||
                    (null != t._component.getScrollResponder &&
                      null != t._component.getScrollResponder() &&
                      null != t._component.getScrollResponder().getNativeScrollRef &&
                      null != t._component.getScrollResponder().getNativeScrollRef() &&
                      null !=
                        (null == (r = t._component.getScrollResponder().getNativeScrollRef()._internalInstanceHandle) ||
                        null == (o = r.stateNode)
                          ? void 0
                          : o.canonical)))
                )
              }),
              (t._waitForUpdate = function () {
                t._isFabric() && s.a.API.setWaitingForIdentifier(t._animatedComponentId)
              }),
              (t._markUpdateComplete = function () {
                t._isFabric() && s.a.API.unsetWaitingForIdentifier(t._animatedComponentId)
              }),
              (t._animatedPropsCallback = function () {
                if (null == t._component) t._invokeAnimatedPropsCallbackOnMount = !0
                else if ('function' != typeof t._component.setNativeProps || t._isFabric()) t.forceUpdate()
                else {
                  if (t._propsAnimated.__isNative)
                    throw new Error(
                      'Attempting to run JS driven animation on animated node that has been moved to "native" earlier by starting an animation with `useNativeDriver: true`',
                    )
                  t._component.setNativeProps(t._propsAnimated.__getAnimatedValue())
                }
              }),
              (t._setComponentRef = S({
                getForwardedRef: function () {
                  return t.props.forwardedRef
                },
                setLocalRef: function (e) {
                  ;(t._prevComponent = t._component),
                    (t._component = e),
                    null != e &&
                      null == e.getNode &&
                      (e.getNode = function () {
                        return e
                      })
                },
              })),
              t
            )
          }
          ;(r = n), ((i = o).prototype = Object.create(r.prototype)), (i.prototype.constructor = i), V(i, r)
          var c = o.prototype
          return (
            (c._attachNativeEvents = function () {
              var t,
                e = this,
                n =
                  null != (t = this._component) && t.getScrollableNode
                    ? this._component.getScrollableNode()
                    : this._component,
                i = function (t) {
                  var i = e.props[t]
                  i instanceof f &&
                    i.__isNative &&
                    (i.__attach(n, t),
                    e._eventDetachers.push(function () {
                      return i.__detach(n, t)
                    }))
                }
              for (var a in this.props) i(a)
            }),
            (c._detachNativeEvents = function () {
              this._eventDetachers.forEach(function (t) {
                return t()
              }),
                (this._eventDetachers = [])
            }),
            (c._attachProps = function (t) {
              var e = this._propsAnimated
              t !== e &&
                ((this._propsAnimated = new A(t, this._animatedPropsCallback)),
                e && (e.__restoreDefaultValues(), e.__detach()))
            }),
            (c.render = function () {
              var n,
                i,
                r = this._propsAnimated.__getValue() || {},
                o = r.style,
                s = void 0 === o ? {} : o,
                c = R(r, ['style']),
                u = this.props.passthroughAnimatedPropExplicitValues || {},
                l = u.style,
                d = void 0 === l ? {} : l,
                f = R(u, ['style']),
                p = x(x({}, s), d),
                h =
                  (null == this._component && (!1 === (null == e ? void 0 : e.collapsable) || !0 !== c.collapsable)) ||
                  this._isFabric(),
                v = (
                  null !== (n = c.collapsable) && void 0 !== n
                    ? n
                    : this._propsAnimated.__isNative || h || !1 === (null == e ? void 0 : e.collapsable)
                )
                  ? { nativeID: null !== (i = c.nativeID) && void 0 !== i ? i : 'animatedComponent', collapsable: !1 }
                  : {}
              return a.createElement(t, P({}, c, f, v, { style: p, ref: this._setComponentRef }))
            }),
            (c.UNSAFE_componentWillMount = function () {
              this._waitForUpdate(), this._attachProps(this.props)
            }),
            (c.componentDidMount = function () {
              this._invokeAnimatedPropsCallbackOnMount &&
                ((this._invokeAnimatedPropsCallbackOnMount = !1), this._animatedPropsCallback()),
                this._propsAnimated.setNativeView(this._component),
                this._attachNativeEvents(),
                this._markUpdateComplete()
            }),
            (c.UNSAFE_componentWillReceiveProps = function (t) {
              this._waitForUpdate(), this._attachProps(t)
            }),
            (c.componentDidUpdate = function (t) {
              this._component !== this._prevComponent && this._propsAnimated.setNativeView(this._component),
                (this._component === this._prevComponent && t === this.props) ||
                  (this._detachNativeEvents(), this._attachNativeEvents()),
                this._markUpdateComplete()
            }),
            (c.componentWillUnmount = function () {
              this._propsAnimated && this._propsAnimated.__detach(),
                this._detachNativeEvents(),
                this._markUpdateComplete(),
                (this._component = null),
                (this._prevComponent = null)
            }),
            o
          )
        })(a.Component)
        return a.forwardRef(function (t, e) {
          return a.createElement(n, P({}, t, null == e ? null : { forwardedRef: e }))
        })
      }
      function D() {
        return (D =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          }).apply(this, arguments)
      }
      var F = L(
          a.forwardRef(function (t, e) {
            return a.createElement(r.a, D({ scrollEventThrottle: 1e-4 }, t, { ref: e }))
          }),
        ),
        M = L(n('U+bB').a, { collapsable: !1 }),
        H = n('Iok7')
      function W() {
        return (W =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          }).apply(this, arguments)
      }
      var U = L(
          a.forwardRef(function (t, e) {
            return a.createElement(H.a, W({ scrollEventThrottle: 1e-4 }, t, { ref: e }))
          }),
          { collapsable: !1 },
        ),
        B = n('MWbm'),
        z = n('8cgI')
      function K() {
        return (K =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          }).apply(this, arguments)
      }
      function q(t, e) {
        var n
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return
              if ('string' == typeof t) return X(t, e)
              var n = Object.prototype.toString.call(t).slice(8, -1)
              'Object' === n && t.constructor && (n = t.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(t)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(t, e)
            })(t)) ||
            (e && t && 'number' == typeof t.length)
          ) {
            n && (t = n)
            var i = 0
            return function () {
              return i >= t.length ? { done: !0 } : { done: !1, value: t[i++] }
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        return (n = t[Symbol.iterator]()).next.bind(n)
      }
      function X(t, e) {
        ;(null == e || e > t.length) && (e = t.length)
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n]
        return i
      }
      function J(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function G(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? J(Object(n), !0).forEach(function (e) {
                Y(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : J(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function Y(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      function Q(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function Z(t, e) {
        ;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), $(t, e)
      }
      function $(t, e) {
        return ($ =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var tt = (function (t) {
        function e() {
          for (var e, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
          return (
            ((e = t.call.apply(t, [this].concat(i)) || this)._getItem = function (t, e, n) {
              if (!e) return null
              for (var i = n - 1, a = 0; a < e.length; a++) {
                var r = e[a],
                  o = r.data,
                  s = t.getItemCount(o)
                if (-1 === i || i === s) return r
                if (i < s) return t.getItem(o, i)
                i -= s + 2
              }
              return null
            }),
            (e._keyExtractor = function (t, n) {
              var i = e._subExtractor(n)
              return (i && i.key) || String(n)
            }),
            (e._convertViewable = function (t) {
              l()(null != t.index, 'Received a broken ViewToken')
              var n = e._subExtractor(t.index)
              if (!n) return null
              var i = n.section.keyExtractor || e.props.keyExtractor
              return G(G({}, t), {}, { index: n.index, key: i(t.item, n.index), section: n.section })
            }),
            (e._onViewableItemsChanged = function (t) {
              var n = t.viewableItems,
                i = t.changed,
                a = e.props.onViewableItemsChanged
              null != a &&
                a({
                  viewableItems: n.map(e._convertViewable, Q(e)).filter(Boolean),
                  changed: i.map(e._convertViewable, Q(e)).filter(Boolean),
                })
            }),
            (e._renderItem = function (t) {
              return function (n) {
                var i = n.item,
                  r = n.index,
                  o = e._subExtractor(r)
                if (!o) return null
                var s = o.index
                if (null == s) {
                  var c = o.section
                  if (!0 === o.header) {
                    var u = e.props.renderSectionHeader
                    return u ? u({ section: c }) : null
                  }
                  var d = e.props.renderSectionFooter
                  return d ? d({ section: c }) : null
                }
                var f = o.section.renderItem || e.props.renderItem,
                  p = e._getSeparatorComponent(r, o, t)
                return (
                  l()(f, 'no renderItem!'),
                  a.createElement(et, {
                    SeparatorComponent: p,
                    LeadingSeparatorComponent: 0 === s ? e.props.SectionSeparatorComponent : void 0,
                    cellKey: o.key,
                    index: s,
                    item: i,
                    leadingItem: o.leadingItem,
                    leadingSection: o.leadingSection,
                    onUpdateSeparator: e._onUpdateSeparator,
                    prevCellKey: (e._subExtractor(r - 1) || {}).key,
                    ref: function (t) {
                      e._cellRefs[o.key] = t
                    },
                    renderItem: f,
                    section: o.section,
                    trailingItem: o.trailingItem,
                    trailingSection: o.trailingSection,
                    inverted: !!e.props.inverted,
                  })
                )
              }
            }),
            (e._onUpdateSeparator = function (t, n) {
              var i = e._cellRefs[t]
              i && i.updateSeparatorProps(n)
            }),
            (e._cellRefs = {}),
            (e._captureRef = function (t) {
              e._listRef = t
            }),
            e
          )
        }
        Z(e, t)
        var n = e.prototype
        return (
          (n.scrollToLocation = function (t) {
            for (var e = t.itemIndex, n = 0; n < t.sectionIndex; n++)
              e += this.props.getItemCount(this.props.sections[n].data) + 2
            var i = t.viewOffset || 0
            if (null != this._listRef) {
              if (t.itemIndex > 0 && this.props.stickySectionHeadersEnabled)
                i += this._listRef._getFrameMetricsApprox(e - t.itemIndex).length
              var a = G(G({}, t), {}, { viewOffset: i, index: e })
              this._listRef.scrollToIndex(a)
            }
          }),
          (n.getListRef = function () {
            return this._listRef
          }),
          (n.render = function () {
            for (
              var t,
                e = this,
                n = this.props,
                i =
                  (n.ItemSeparatorComponent,
                  n.SectionSeparatorComponent,
                  n.renderItem,
                  n.renderSectionFooter,
                  n.renderSectionHeader,
                  n.sections,
                  n.stickySectionHeadersEnabled,
                  (function (t, e) {
                    if (null == t) return {}
                    var n,
                      i,
                      a = {},
                      r = Object.keys(t)
                    for (i = 0; i < r.length; i++) (n = r[i]), e.indexOf(n) >= 0 || (a[n] = t[n])
                    return a
                  })(n, [
                    'ItemSeparatorComponent',
                    'SectionSeparatorComponent',
                    'renderItem',
                    'renderSectionFooter',
                    'renderSectionHeader',
                    'sections',
                    'stickySectionHeadersEnabled',
                  ])),
                r = this.props.ListHeaderComponent ? 1 : 0,
                o = this.props.stickySectionHeadersEnabled ? [] : void 0,
                s = 0,
                c = q(this.props.sections);
              !(t = c()).done;

            ) {
              var u = t.value
              null != o && o.push(s + r), (s += 2), (s += this.props.getItemCount(u.data))
            }
            var l = this._renderItem(s)
            return a.createElement(
              z.a,
              K({}, i, {
                keyExtractor: this._keyExtractor,
                stickyHeaderIndices: o,
                renderItem: l,
                data: this.props.sections,
                getItem: function (t, n) {
                  return e._getItem(e.props, t, n)
                },
                getItemCount: function () {
                  return s
                },
                onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0,
                ref: this._captureRef,
              }),
            )
          }),
          (n._subExtractor = function (t) {
            for (
              var e = t, n = this.props, i = n.getItem, a = n.getItemCount, r = n.keyExtractor, o = n.sections, s = 0;
              s < o.length;
              s++
            ) {
              var c = o[s],
                u = c.data,
                l = c.key || String(s)
              if (!((e -= 1) >= a(u) + 1))
                return -1 === e
                  ? { section: c, key: l + ':header', index: null, header: !0, trailingSection: o[s + 1] }
                  : e === a(u)
                  ? { section: c, key: l + ':footer', index: null, header: !1, trailingSection: o[s + 1] }
                  : {
                      section: c,
                      key: l + ':' + (c.keyExtractor || r)(i(u, e), e),
                      index: e,
                      leadingItem: i(u, e - 1),
                      leadingSection: o[s - 1],
                      trailingItem: i(u, e + 1),
                      trailingSection: o[s + 1],
                    }
              e -= a(u) + 1
            }
          }),
          (n._getSeparatorComponent = function (t, e, n) {
            if (!(e = e || this._subExtractor(t))) return null
            var i = e.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
              a = this.props.SectionSeparatorComponent,
              r = t === n - 1,
              o = e.index === this.props.getItemCount(e.section.data) - 1
            return a && o ? a : !i || o || r ? null : i
          }),
          e
        )
      })(a.PureComponent)
      tt.defaultProps = G(G({}, z.a.defaultProps), {}, { data: [] })
      var et = (function (t) {
          function e() {
            for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
            return (
              ((e = t.call.apply(t, [this].concat(i)) || this).state = {
                separatorProps: {
                  highlighted: !1,
                  leadingItem: e.props.item,
                  leadingSection: e.props.leadingSection,
                  section: e.props.section,
                  trailingItem: e.props.trailingItem,
                  trailingSection: e.props.trailingSection,
                },
                leadingSeparatorProps: {
                  highlighted: !1,
                  leadingItem: e.props.leadingItem,
                  leadingSection: e.props.leadingSection,
                  section: e.props.section,
                  trailingItem: e.props.item,
                  trailingSection: e.props.trailingSection,
                },
              }),
              (e._separators = {
                highlight: function () {
                  ;['leading', 'trailing'].forEach(function (t) {
                    return e._separators.updateProps(t, { highlighted: !0 })
                  })
                },
                unhighlight: function () {
                  ;['leading', 'trailing'].forEach(function (t) {
                    return e._separators.updateProps(t, { highlighted: !1 })
                  })
                },
                updateProps: function (t, n) {
                  var i = e.props,
                    a = i.LeadingSeparatorComponent,
                    r = i.cellKey,
                    o = i.prevCellKey
                  'leading' === t && null != a
                    ? e.setState(function (t) {
                        return { leadingSeparatorProps: G(G({}, t.leadingSeparatorProps), n) }
                      })
                    : e.props.onUpdateSeparator(('leading' === t && o) || r, n)
                },
              }),
              e
            )
          }
          Z(e, t),
            (e.getDerivedStateFromProps = function (t, e) {
              return {
                separatorProps: G(
                  G({}, e.separatorProps),
                  {},
                  {
                    leadingItem: t.item,
                    leadingSection: t.leadingSection,
                    section: t.section,
                    trailingItem: t.trailingItem,
                    trailingSection: t.trailingSection,
                  },
                ),
                leadingSeparatorProps: G(
                  G({}, e.leadingSeparatorProps),
                  {},
                  {
                    leadingItem: t.leadingItem,
                    leadingSection: t.leadingSection,
                    section: t.section,
                    trailingItem: t.item,
                    trailingSection: t.trailingSection,
                  },
                ),
              }
            })
          var n = e.prototype
          return (
            (n.updateSeparatorProps = function (t) {
              this.setState(function (e) {
                return { separatorProps: G(G({}, e.separatorProps), t) }
              })
            }),
            (n.render = function () {
              var t = this.props,
                e = t.LeadingSeparatorComponent,
                n = t.SeparatorComponent,
                i = t.item,
                r = t.index,
                o = t.section,
                s = t.inverted,
                c = this.props.renderItem({ item: i, index: r, section: o, separators: this._separators }),
                u = null != e && a.createElement(e, this.state.leadingSeparatorProps),
                l = null != n && a.createElement(n, this.state.separatorProps)
              return u || l ? a.createElement(B.a, null, !1 === s ? u : l, c, !1 === s ? l : u) : c
            }),
            e
          )
        })(a.Component),
        nt = tt
      function it() {
        return (it =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          }).apply(this, arguments)
      }
      function at(t, e) {
        return (at =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      function rt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function ot(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? rt(Object(n), !0).forEach(function (e) {
                st(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : rt(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function st(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      var ct = ot(ot({}, nt.defaultProps), {}, { stickySectionHeadersEnabled: 'ios' === i.a.OS }),
        ut = (function (t) {
          var e, n
          function i() {
            for (var e, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
            return (
              ((e = t.call.apply(t, [this].concat(i)) || this)._captureRef = function (t) {
                e._wrapperListRef = t
              }),
              e
            )
          }
          ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), at(e, n)
          var r = i.prototype
          return (
            (r.scrollToLocation = function (t) {
              null != this._wrapperListRef && this._wrapperListRef.scrollToLocation(t)
            }),
            (r.recordInteraction = function () {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              t && t.recordInteraction()
            }),
            (r.flashScrollIndicators = function () {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              t && t.flashScrollIndicators()
            }),
            (r.getScrollResponder = function () {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (t) return t.getScrollResponder()
            }),
            (r.getScrollableNode = function () {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (t) return t.getScrollableNode()
            }),
            (r.setNativeProps = function (t) {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.setNativeProps(t)
            }),
            (r.render = function () {
              return a.createElement(
                nt,
                it({}, this.props, {
                  ref: this._captureRef,
                  getItemCount: function (t) {
                    return t.length
                  },
                  getItem: function (t, e) {
                    return t[e]
                  },
                }),
              )
            }),
            i
          )
        })(a.PureComponent)
      ut.defaultProps = ct
      var lt = ut
      function dt() {
        return (dt =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
          }).apply(this, arguments)
      }
      var ft = L(
          a.forwardRef(function (t, e) {
            return a.createElement(lt, dt({ scrollEventThrottle: 1e-4 }, t, { ref: e }))
          }),
        ),
        pt = L(n('+/1j').a, { collapsable: !1 }),
        ht = L(B.a, { collapsable: !0 }),
        vt = n('FGdj')
      function _t(t, e) {
        return (_t =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var mt = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return (
            ((i = t.call(this) || this)._a = 'number' == typeof e ? new o.a(e) : e),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), _t(e, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return this._a.__getValue() + this._b.__getValue()
          }),
          (a.interpolate = function (t) {
            return new vt.a(this, t)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'addition', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
      function gt(t, e) {
        return (gt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var yt = (function (t) {
        var e, n
        function i(e, n, i) {
          var a
          return (
            ((a = t.call(this) || this)._a = e),
            (a._min = n),
            (a._max = i),
            (a._value = a._lastValue = a._a.__getValue()),
            a
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), gt(e, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (a.interpolate = function (t) {
            return new vt.a(this, t)
          }),
          (a.__getValue = function () {
            var t = this._a.__getValue(),
              e = t - this._lastValue
            return (
              (this._lastValue = t),
              (this._value = Math.min(Math.max(this._value + e, this._min), this._max)),
              this._value
            )
          }),
          (a.__attach = function () {
            this._a.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'diffclamp', input: this._a.__getNativeTag(), min: this._min, max: this._max }
          }),
          i
        )
      })(h.a)
      function bt(t, e) {
        return (bt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var wt = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return (
            ((i = t.call(this) || this)._warnedAboutDivideByZero = !1),
            0 === n || (n instanceof p.a && n.__getValue()),
            (i._a = 'number' == typeof e ? new o.a(e) : e),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), bt(e, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            var t = this._a.__getValue(),
              e = this._b.__getValue()
            return 0 === e
              ? (this._warnedAboutDivideByZero || (this._warnedAboutDivideByZero = !0), 0)
              : ((this._warnedAboutDivideByZero = !1), t / e)
          }),
          (a.interpolate = function (t) {
            return new vt.a(this, t)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'division', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
      function Ot(t, e) {
        return (Ot =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var Et = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return ((i = t.call(this) || this)._a = e), (i._modulus = n), i
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), Ot(e, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus
          }),
          (a.interpolate = function (t) {
            return new vt.a(this, t)
          }),
          (a.__attach = function () {
            this._a.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'modulus', input: this._a.__getNativeTag(), modulus: this._modulus }
          }),
          i
        )
      })(h.a)
      function kt(t, e) {
        return (kt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var Ct = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return (
            ((i = t.call(this) || this)._a = 'number' == typeof e ? new o.a(e) : e),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), kt(e, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return this._a.__getValue() * this._b.__getValue()
          }),
          (a.interpolate = function (t) {
            return new vt.a(this, t)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'multiplication', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
      function Nt(t, e) {
        return (Nt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var At = (function (t) {
        var e, n
        function i(e, n) {
          var i
          return (
            ((i = t.call(this) || this)._a = 'number' == typeof e ? new o.a(e) : e),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), Nt(e, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), t.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return this._a.__getValue() - this._b.__getValue()
          }),
          (a.interpolate = function (t) {
            return new vt.a(this, t)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), t.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'subtraction', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
      function St(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Pt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? St(Object(n), !0).forEach(function (e) {
                jt(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : St(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function jt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      function xt(t, e) {
        return (xt =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      var Tt = (function (t) {
          var e, n
          function i(e, n, i, a, r) {
            var o
            return (
              ((o = t.call(this) || this)._value = e),
              (o._parent = n),
              (o._animationClass = i),
              (o._animationConfig = a),
              (o._useNativeDriver = Object(s.c)(a)),
              (o._callback = r),
              o.__attach(),
              o
            )
          }
          ;(n = t), ((e = i).prototype = Object.create(n.prototype)), (e.prototype.constructor = e), xt(e, n)
          var a = i.prototype
          return (
            (a.__makeNative = function () {
              ;(this.__isNative = !0),
                this._parent.__makeNative(),
                t.prototype.__makeNative.call(this),
                this._value.__makeNative()
            }),
            (a.__getValue = function () {
              return this._parent.__getValue()
            }),
            (a.__attach = function () {
              this._parent.__addChild(this), this._useNativeDriver && this.__makeNative()
            }),
            (a.__detach = function () {
              this._parent.__removeChild(this), t.prototype.__detach.call(this)
            }),
            (a.update = function () {
              this._value.animate(
                new this._animationClass(
                  Pt(Pt({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() }),
                ),
                this._callback,
              )
            }),
            (a.__getNativeConfig = function () {
              var t = new this._animationClass(
                Pt(Pt({}, this._animationConfig), {}, { toValue: void 0 }),
              ).__getNativeAnimationConfig()
              return {
                type: 'tracking',
                animationId: Object(s.b)(),
                animationConfig: t,
                toValue: this._parent.__getNativeTag(),
                value: this._value.__getNativeTag(),
              }
            }),
            i
          )
        })(p.a),
        Rt = n('/x6e'),
        Vt = n('BtOK'),
        It = n('jydp'),
        Lt = n('e6X4')
      function Dt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Ft(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? Dt(Object(n), !0).forEach(function (e) {
                Mt(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Dt(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function Mt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      var Ht = function (t, e) {
          return t && e.onComplete
            ? function () {
                e.onComplete && e.onComplete.apply(e, arguments), t && t.apply(void 0, arguments)
              }
            : t || e.onComplete
        },
        Wt = function (t, e, n) {
          if (t instanceof Rt.a) {
            var i = Ft({}, e),
              a = Ft({}, e)
            for (var r in e) {
              var o = e[r],
                s = o.x,
                c = o.y
              void 0 !== s && void 0 !== c && ((i[r] = s), (a[r] = c))
            }
            var u = n(t.x, i),
              l = n(t.y, a)
            return zt([u, l], { stopTogether: !1 })
          }
          return null
        },
        Ut = function t(e, n) {
          var i = function (t, e, n) {
            n = Ht(n, e)
            var i = t,
              a = e
            i.stopTracking(),
              e.toValue instanceof p.a ? i.track(new Tt(i, e.toValue, Lt.a, a, n)) : i.animate(new Lt.a(a), n)
          }
          return (
            Wt(e, n, t) || {
              start: function (t) {
                i(e, n, t)
              },
              stop: function () {
                e.stopAnimation()
              },
              reset: function () {
                e.resetAnimation()
              },
              _startNativeLoop: function (t) {
                var a = Ft(Ft({}, n), {}, { iterations: t })
                i(e, a)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        Bt = function (t) {
          var e = 0
          return {
            start: function (n) {
              0 === t.length
                ? n && n({ finished: !0 })
                : t[e].start(function i(a) {
                    a.finished && ++e !== t.length ? t[e].start(i) : n && n(a)
                  })
            },
            stop: function () {
              e < t.length && t[e].stop()
            },
            reset: function () {
              t.forEach(function (t, n) {
                n <= e && t.reset()
              }),
                (e = 0)
            },
            _startNativeLoop: function () {
              throw new Error('Loops run using the native driver cannot contain Animated.sequence animations')
            },
            _isUsingNativeDriver: function () {
              return !1
            },
          }
        },
        zt = function (t, e) {
          var n = 0,
            i = {},
            a = !(e && !1 === e.stopTogether),
            r = {
              start: function (e) {
                n !== t.length
                  ? t.forEach(function (o, s) {
                      var c = function (o) {
                        if (((i[s] = !0), ++n === t.length)) return (n = 0), void (e && e(o))
                        !o.finished && a && r.stop()
                      }
                      o ? o.start(c) : c({ finished: !0 })
                    })
                  : e && e({ finished: !0 })
              },
              stop: function () {
                t.forEach(function (t, e) {
                  !i[e] && t.stop(), (i[e] = !0)
                })
              },
              reset: function () {
                t.forEach(function (t, e) {
                  t.reset(), (i[e] = !1), (n = 0)
                })
              },
              _startNativeLoop: function () {
                throw new Error('Loops run using the native driver cannot contain Animated.parallel animations')
              },
              _isUsingNativeDriver: function () {
                return !1
              },
            }
          return r
        },
        Kt = function (t) {
          return Ut(new o.a(0), { toValue: 0, delay: t, duration: 0, useNativeDriver: !1 })
        }
      var qt = {
        Value: o.a,
        ValueXY: Rt.a,
        Interpolation: vt.a,
        Node: p.a,
        decay: function t(e, n) {
          var i = function (t, e, n) {
            n = Ht(n, e)
            var i = t,
              a = e
            i.stopTracking(), i.animate(new Vt.a(a), n)
          }
          return (
            Wt(e, n, t) || {
              start: function (t) {
                i(e, n, t)
              },
              stop: function () {
                e.stopAnimation()
              },
              reset: function () {
                e.resetAnimation()
              },
              _startNativeLoop: function (t) {
                var a = Ft(Ft({}, n), {}, { iterations: t })
                i(e, a)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        timing: Ut,
        spring: function t(e, n) {
          var i = function (t, e, n) {
            n = Ht(n, e)
            var i = t,
              a = e
            i.stopTracking(),
              e.toValue instanceof p.a ? i.track(new Tt(i, e.toValue, It.a, a, n)) : i.animate(new It.a(a), n)
          }
          return (
            Wt(e, n, t) || {
              start: function (t) {
                i(e, n, t)
              },
              stop: function () {
                e.stopAnimation()
              },
              reset: function () {
                e.resetAnimation()
              },
              _startNativeLoop: function (t) {
                var a = Ft(Ft({}, n), {}, { iterations: t })
                i(e, a)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        add: function (t, e) {
          return new mt(t, e)
        },
        subtract: function (t, e) {
          return new At(t, e)
        },
        divide: function (t, e) {
          return new wt(t, e)
        },
        multiply: function (t, e) {
          return new Ct(t, e)
        },
        modulo: function (t, e) {
          return new Et(t, e)
        },
        diffClamp: function (t, e, n) {
          return new yt(t, e, n)
        },
        delay: Kt,
        sequence: Bt,
        parallel: zt,
        stagger: function (t, e) {
          return zt(
            e.map(function (e, n) {
              return Bt([Kt(t * n), e])
            }),
          )
        },
        loop: function (t, e) {
          var n = void 0 === e ? {} : e,
            i = n.iterations,
            a = void 0 === i ? -1 : i,
            r = n.resetBeforeIteration,
            o = void 0 === r || r,
            s = !1,
            c = 0
          return {
            start: function (e) {
              t && 0 !== a
                ? t._isUsingNativeDriver()
                  ? t._startNativeLoop(a)
                  : (function n(i) {
                      void 0 === i && (i = { finished: !0 }),
                        s || c === a || !1 === i.finished ? e && e(i) : (c++, o && t.reset(), t.start(n))
                    })()
                : e && e({ finished: !0 })
            },
            stop: function () {
              ;(s = !0), t.stop()
            },
            reset: function () {
              ;(c = 0), (s = !1), t.reset()
            },
            _startNativeLoop: function () {
              throw new Error('Loops run using the native driver cannot contain Animated.loop animations')
            },
            _isUsingNativeDriver: function () {
              return t._isUsingNativeDriver()
            },
          }
        },
        event: function (t, e) {
          var n = new f(t, e)
          return n.__isNative ? n : n.__getHandler()
        },
        createAnimatedComponent: L,
        attachNativeEvent: d,
        forkEvent: function (t, e) {
          return t
            ? t instanceof f
              ? (t.__addListener(e), t)
              : function () {
                  'function' == typeof t && t.apply(void 0, arguments), e.apply(void 0, arguments)
                }
            : e
        },
        unforkEvent: function (t, e) {
          t && t instanceof f && t.__removeListener(e)
        },
        Event: f,
        __PropsOnlyForTests: A,
      }
      function Xt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Jt(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? Xt(Object(n), !0).forEach(function (e) {
                Gt(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Xt(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      }
      function Gt(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      var Yt = {
          start: function () {},
          stop: function () {},
          reset: function () {},
          _startNativeLoop: function () {},
          _isUsingNativeDriver: function () {
            return !1
          },
        },
        Qt = {
          Value: o.a,
          ValueXY: Rt.a,
          Interpolation: vt.a,
          Node: p.a,
          decay: function (t, e) {
            return Yt
          },
          timing: function (t, e) {
            var n = t
            return Jt(
              Jt({}, Yt),
              {},
              {
                start: function (t) {
                  n.setValue(e.toValue), t && t({ finished: !0 })
                },
              },
            )
          },
          spring: function (t, e) {
            var n = t
            return Jt(
              Jt({}, Yt),
              {},
              {
                start: function (t) {
                  n.setValue(e.toValue), t && t({ finished: !0 })
                },
              },
            )
          },
          add: qt.add,
          subtract: qt.subtract,
          divide: qt.divide,
          multiply: qt.multiply,
          modulo: qt.modulo,
          diffClamp: qt.diffClamp,
          delay: function (t) {
            return Yt
          },
          sequence: function (t) {
            return Yt
          },
          parallel: function (t, e) {
            return Yt
          },
          stagger: function (t, e) {
            return Yt
          },
          loop: function (t, e) {
            ;(void 0 === e ? {} : e).iterations
            return Yt
          },
          event: function (t, e) {
            return null
          },
          createAnimatedComponent: L,
          attachNativeEvent: d,
          forkEvent: qt.forkEvent,
          unforkEvent: qt.unforkEvent,
          Event: f,
          __PropsOnlyForTests: A,
        }
      function Zt(t, e) {
        var n = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t)
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function $t(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        )
      }
      var te = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? Zt(Object(n), !0).forEach(function (e) {
                $t(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Zt(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              })
        }
        return t
      })({ FlatList: F, Image: M, ScrollView: U, SectionList: ft, Text: pt, View: ht }, i.a.isTesting ? Qt : qt)
      e.a = te
    },
    XJEr: function (t, e, n) {
      'use strict'
      ;(function (t) {
        n.d(e, 'b', function () {
          return b
        }),
          n.d(e, 'c', function () {
            return O
          })
        var i,
          a = n('vG6z'),
          r = n('mbB1'),
          o = n('0m3q'),
          s = n('4LIG'),
          c = n('tI3i'),
          u = n.n(c),
          l = 'ios' === s.a.OS && t.RN$Bridgeless ? r.a : a.a,
          d = 1,
          f = 1,
          p = new Set(),
          h = !1,
          v = [],
          _ = {
            getValue: function (t, e) {
              u()(l, 'Native animated module is not available'), l.getValue && l.getValue(t, e)
            },
            setWaitingForIdentifier: function (t) {
              p.add(t), (h = !0)
            },
            unsetWaitingForIdentifier: function (t) {
              p.delete(t), 0 === p.size && ((h = !1), _.disableQueue())
            },
            disableQueue: function () {
              u()(l, 'Native animated module is not available'), 'android' === s.a.OS && l.startOperationBatch()
              for (var t = 0, e = v.length; t < e; t++) v[t]()
              ;(v.length = 0), 'android' === s.a.OS && l.finishOperationBatch()
            },
            queueOperation: function (t) {
              h ? v.push(t) : t()
            },
            createAnimatedNode: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.createAnimatedNode(t, e)
                })
            },
            startListeningToAnimatedNodeValue: function (t) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.startListeningToAnimatedNodeValue(t)
                })
            },
            stopListeningToAnimatedNodeValue: function (t) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.stopListeningToAnimatedNodeValue(t)
                })
            },
            connectAnimatedNodes: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.connectAnimatedNodes(t, e)
                })
            },
            disconnectAnimatedNodes: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.disconnectAnimatedNodes(t, e)
                })
            },
            startAnimatingNode: function (t, e, n, i) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.startAnimatingNode(t, e, n, i)
                })
            },
            stopAnimation: function (t) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.stopAnimation(t)
                })
            },
            setAnimatedNodeValue: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.setAnimatedNodeValue(t, e)
                })
            },
            setAnimatedNodeOffset: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.setAnimatedNodeOffset(t, e)
                })
            },
            flattenAnimatedNodeOffset: function (t) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.flattenAnimatedNodeOffset(t)
                })
            },
            extractAnimatedNodeOffset: function (t) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.extractAnimatedNodeOffset(t)
                })
            },
            connectAnimatedNodeToView: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.connectAnimatedNodeToView(t, e)
                })
            },
            disconnectAnimatedNodeFromView: function (t, e) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.disconnectAnimatedNodeFromView(t, e)
                })
            },
            restoreDefaultValues: function (t) {
              u()(l, 'Native animated module is not available'),
                null != l.restoreDefaultValues &&
                  _.queueOperation(function () {
                    return l.restoreDefaultValues(t)
                  })
            },
            dropAnimatedNode: function (t) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.dropAnimatedNode(t)
                })
            },
            addAnimatedEventToView: function (t, e, n) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.addAnimatedEventToView(t, e, n)
                })
            },
            removeAnimatedEventFromView: function (t, e, n) {
              u()(l, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return l.removeAnimatedEventFromView(t, e, n)
                })
            },
          },
          m = {
            opacity: !0,
            transform: !0,
            borderRadius: !0,
            borderBottomEndRadius: !0,
            borderBottomLeftRadius: !0,
            borderBottomRightRadius: !0,
            borderBottomStartRadius: !0,
            borderTopEndRadius: !0,
            borderTopLeftRadius: !0,
            borderTopRightRadius: !0,
            borderTopStartRadius: !0,
            elevation: !0,
            zIndex: !0,
            shadowOpacity: !0,
            shadowRadius: !0,
            scaleX: !0,
            scaleY: !0,
            translateX: !0,
            translateY: !0,
          },
          g = {
            translateX: !0,
            translateY: !0,
            scale: !0,
            scaleX: !0,
            scaleY: !0,
            rotate: !0,
            rotateX: !0,
            rotateY: !0,
            rotateZ: !0,
            perspective: !0,
          },
          y = { inputRange: !0, outputRange: !0, extrapolate: !0, extrapolateRight: !0, extrapolateLeft: !0 }
        function b() {
          return f++
        }
        var w = !1
        function O(t) {
          return t.useNativeDriver, !0 !== t.useNativeDriver || l ? t.useNativeDriver || !1 : (w || (w = !0), !1)
        }
        e.a = {
          API: _,
          addWhitelistedStyleProp: function (t) {
            m[t] = !0
          },
          addWhitelistedTransformProp: function (t) {
            g[t] = !0
          },
          addWhitelistedInterpolationParam: function (t) {
            y[t] = !0
          },
          validateStyles: function (t) {
            for (var e in t)
              if (!m.hasOwnProperty(e))
                throw new Error("Style property '" + e + "' is not supported by native animated module")
          },
          validateTransform: function (t) {
            t.forEach(function (t) {
              if (!g.hasOwnProperty(t.property))
                throw new Error("Property '" + t.property + "' is not supported by native animated module")
            })
          },
          validateInterpolation: function (t) {
            for (var e in t)
              if (!y.hasOwnProperty(e))
                throw new Error("Interpolation property '" + e + "' is not supported by native animated module")
          },
          generateNewNodeTag: function () {
            return d++
          },
          generateNewAnimationId: b,
          assertNativeAnimatedModule: function () {
            u()(l, 'Native animated module is not available')
          },
          shouldUseNativeDriver: O,
          transformDataType: function (t) {
            return 'string' != typeof t ? t : /deg$/.test(t) ? ((parseFloat(t) || 0) * Math.PI) / 180 : t
          },
          get nativeEventEmitter() {
            return i || (i = new o.a(l)), i
          },
        }
      }.call(this, n('fRV1')))
    },
    YRNd: function (t, e, n) {
      'use strict'
      var i = n('XJEr'),
        a = 1,
        r = (function () {
          function t() {}
          var e = t.prototype
          return (
            (e.start = function (t, e, n, i, a) {}),
            (e.stop = function () {
              this.__nativeId && i.a.API.stopAnimation(this.__nativeId)
            }),
            (e.__getNativeAnimationConfig = function () {
              throw new Error('This animation type cannot be offloaded to native')
            }),
            (e.__debouncedOnEnd = function (t) {
              var e = this.__onEnd
              ;(this.__onEnd = null), e && e(t)
            }),
            (e.__startNativeAnimation = function (t) {
              var e = a + ':startAnimation'
              ;(a += 1), i.a.API.setWaitingForIdentifier(e)
              try {
                t.__makeNative(),
                  (this.__nativeId = i.a.generateNewAnimationId()),
                  i.a.API.startAnimatingNode(
                    this.__nativeId,
                    t.__getNativeTag(),
                    this.__getNativeAnimationConfig(),
                    this.__debouncedOnEnd.bind(this),
                  )
              } catch (n) {
                throw n
              } finally {
                i.a.API.unsetWaitingForIdentifier(e)
              }
            }),
            t
          )
        })()
      e.a = r
    },
    'Z8+W': function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return S
      }),
        n.d(e, 'a', function () {
          return j
        })
      var i = n('97Jx'),
        a = n.n(i),
        r = n('T0aG'),
        o = n.n(r),
        s = n('ddV6'),
        c = n.n(s),
        u = (n('849X'), n('TJCb'), n('hBvt'), n('ERkP')),
        l = n.n(u),
        d = n('mjJ+'),
        f = n('PxJJ'),
        p = n('3XMw'),
        h = n.n(p),
        v = n('wD1h'),
        _ = n('I8UQ'),
        m = n('wwsH'),
        g = n('aITJ'),
        y = n('KDev'),
        b = n('iEUn'),
        w = n('uCrx'),
        O = h.a.d636ebc6,
        E = h.a.eb3a8b0b,
        k = h.a.a4ae22fa,
        C = h.a.a0af935b,
        N = h.a.dac92b0c,
        A = h.a.aa650427
      function S(t) {
        var e = t.isLiked,
          n = t.likeTransitionAnimation,
          i = l.a.useState(!1),
          a = c()(i, 2),
          r = a[0],
          s = a[1],
          u = l.a.useRef(e)
        return (
          l.a.useEffect(
            function () {
              ;('object' === o()(n) || _.b.check(n)) && e !== u.current && (s(e), (u.current = e))
            },
            [e, n],
          ),
          {
            onAnimationEnd: function () {
              return s(!1)
            },
            showAnimation: r,
            transitionAnimationUrl: n,
          }
        )
      }
      function P() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionLike.onError')
        f.a.report(t)
      }
      function j(t) {
        var e = t.actionMenuDescription,
          n = t.activeColor,
          i = void 0 === n ? 'magenta500' : n,
          r = t.color,
          o = t.count,
          s = t.enableActionMenu,
          c = void 0 !== s && s,
          u = t.enableKeyboardShortcuts,
          f = t.iconSize,
          p = t.isDisabled,
          h = t.isFaded,
          _ = t.isLiked,
          j = t.isPresentational,
          x = t.likeActionIconContainerRef,
          T = t.likeTransitionAnimation,
          R = t.link,
          V = t.onError,
          I = void 0 === V ? P : V,
          L = t.onLikeActionSelect,
          D = t.onMenuCancel,
          F = t.onPress,
          M = t.style,
          H = t.testIDs,
          W = t.withCount && 'number' == typeof o,
          U = _ ? C : O
        W && (U = _ ? A({ count: o }) : N({ count: o }))
        var B = S({ isLiked: _, likeTransitionAnimation: T })
        return l.a.createElement(
          m.a,
          a()({}, B, {
            ActiveIcon: w.a,
            Icon: b.a,
            accessibilityLabel: U,
            actionIconContainerRef: x,
            activeColor: i,
            behavioralEventContext: { viewType: 'like', viewState: { type: 'toggleable', toggledTo: !_ } },
            color: r,
            count: o,
            enableKeyboardShortcuts: u,
            hoverLabel: { label: _ ? E : O },
            iconSize: f,
            isActive: _,
            isDisabled: p,
            isFaded: h,
            isPresentational: j,
            keyboardShortcut: v.a.shortcuts.like,
            link: R,
            onError: I,
            onPress: function () {
              g.b.isFirefox() || y.a.vibrate(5), null == F || F()
            },
            renderMenu: c
              ? function (t) {
                  var n = [
                    {
                      text: k,
                      onClick: function () {
                        t(), null == L || L()
                      },
                      testID: null == H ? void 0 : H.like,
                      Icon: b.a,
                    },
                  ]
                  return l.a.createElement(d.a, {
                    description: e,
                    items: n,
                    onCloseRequested: function () {
                      t(), null == D || D()
                    },
                  })
                }
              : void 0,
            style: M,
            testID: H && (_ ? H.unlike : H.like),
            withCount: W,
          }),
        )
      }
    },
    a2Fh: function (t, e, n) {
      'use strict'
      n('z84I')
      var i = n('ERkP'),
        a = n.n(i),
        r = n('rHpw'),
        o = n('MWbm')
      var s = r.a.create(function (t) {
        return {
          root: { display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflow: 'hidden', width: '100%' },
          borderRadius: { borderRadius: t.borderRadii.infinite },
          lineWrap: { flexWrap: 'wrap', overflow: 'visible' },
          word: { backgroundColor: t.colors.gray300, height: t.spaces.space4 },
          wordWrapper: { justifyContent: 'center' },
        }
      })
      e.a = function (t) {
        var e = t.color,
          n = t.lineHeightPx,
          i = t.maxWidthPx,
          c = t.style,
          u = t.withBorderRadius,
          l = t.withLineWrap,
          d = t.wordHeightPx,
          f = t.wordPercentWidths,
          p = t.wordSpacingPx,
          h = a.a.useMemo(
            function () {
              return f.map(function (t, i) {
                var c = p || r.a.theme.spaces.space4,
                  l = i !== f.length - 1 ? c : 0,
                  h = a.a.createElement(o.a, {
                    key: i,
                    style: [
                      s.word,
                      { width: n ? '100%' : ''.concat(t, '%') },
                      e && { backgroundColor: r.a.theme.colors[e] },
                      !n && { marginRight: l },
                      u && s.borderRadius,
                      d && { height: d },
                    ],
                  })
                return n
                  ? a.a.createElement(
                      o.a,
                      {
                        key: i,
                        style: [s.wordWrapper, n && { marginRight: l }, { height: n, width: ''.concat(t, '%') }],
                      },
                      h,
                    )
                  : h
              })
            },
            [e, n, u, d, p, f],
          )
        return a.a.createElement(o.a, { style: [s.root, l && s.lineWrap, { maxWidth: i || 'none' }, c] }, h)
      }
    },
    dFWS: function (t, e, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (e.a = u)
    },
    de1q: function (t, e, n) {
      'use strict'
      n.d(e, 'b', function () {
        return V
      })
      var i,
        a,
        r = n('ERkP'),
        o = n.n(r),
        s = n('38/B'),
        c = n('q1bs'),
        u = n('Eqye'),
        l = n('uCrx'),
        d = n('yiKp'),
        f = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        v = n.p + 'cheer.6249ab45.png',
        _ = n.p + 'haha.c0b42cb5.png',
        m = n.p + 'hmm.bc35b1e5.png',
        g = n('3rX5'),
        y = n.p + 'like.7a3e9685.png',
        b = n('kSIJ'),
        w = n('mJtw'),
        O = n.p + 'sad.f12709e5.png',
        E = n('rHpw'),
        k = n('MWbm'),
        C =
          ((i = {}),
          h()(i, w.a.Like, y),
          h()(i, w.a.Haha, _),
          h()(i, w.a.Hmm, m),
          h()(i, w.a.Sad, O),
          h()(i, w.a.Cheer, v),
          i),
        N = E.a.create(function (t) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: f()({}, E.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        A = function (t) {
          var e = t.reactionType
          return o.a.createElement(
            k.a,
            { style: N.fillContainer },
            o.a.createElement(g.a, { accessibilityLabel: b.a[e], source: C[e], style: N.reactionSelectedIcon }),
            o.a.createElement(k.a, { style: [N.reactionSelectedIcon, N.imageCover] }),
          )
        },
        S = n('DQLs'),
        P =
          ((a = {}),
          h()(a, w.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          h()(a, w.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          h()(a, w.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          h()(a, w.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          h()(a, w.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          a),
        j = function (t) {
          var e = t.reactionType,
            n = c.b.get(P[e])
          return (
            (n && 'boolean' != typeof n) || (n = P[e]), o.a.createElement(S.a, { animation: n, autoplay: !0, loop: !0 })
          )
        },
        x = function () {
          var t = window.navigator.deviceMemory
          return s.a.reducedMotionEnabled || u.a.isEnabled || (t && t < 4)
        },
        T = function (t) {
          var e = t.legacyHeart,
            n = t.reactionType,
            i = t.style,
            a = t.withAnimation,
            r = void 0 !== a && a,
            s = !x() && r ? j : A
          return e && n === w.a.Like
            ? o.a.createElement(k.a, { style: [R.root, R.legacyHeart, i] }, o.a.createElement(l.a, { style: R.root }))
            : o.a.createElement(k.a, { style: [R.root, i] }, o.a.createElement(s, { reactionType: n }))
        },
        R = E.a.create(function (t) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: t.colors.magenta500 } }
        }),
        V = function () {
          o.a.useEffect(function () {
            x() || (c.b.check(P.Hmm), c.b.check(P.Sad), c.b.check(P.Haha), c.b.check(P.Cheer), c.b.check(P.Like))
          }, [])
        }
      e.a = o.a.memo(T)
    },
    e6X4: function (t, e, n) {
      'use strict'
      ;(function (t) {
        var i,
          a = n('YRNd'),
          r = n('XJEr'),
          o = n('7zxR')
        function s(t, e) {
          return (s =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            })(t, e)
        }
        var c = (function (e) {
          var n, a
          function c(t) {
            var n, a, s, c, u, l
            return (
              ((l = e.call(this) || this)._toValue = t.toValue),
              (l._easing = null !== (n = t.easing) && void 0 !== n ? n : (i || (i = o.a.inOut(o.a.ease)), i)),
              (l._duration = null !== (a = t.duration) && void 0 !== a ? a : 500),
              (l._delay = null !== (s = t.delay) && void 0 !== s ? s : 0),
              (l.__iterations = null !== (c = t.iterations) && void 0 !== c ? c : 1),
              (l._useNativeDriver = Object(r.c)(t)),
              (l.__isInteraction = null !== (u = t.isInteraction) && void 0 !== u ? u : !l._useNativeDriver),
              l
            )
          }
          ;(a = e), ((n = c).prototype = Object.create(a.prototype)), (n.prototype.constructor = n), s(n, a)
          var u = c.prototype
          return (
            (u.__getNativeAnimationConfig = function () {
              for (var t = [], e = Math.round(this._duration / (1e3 / 60)), n = 0; n < e; n++)
                t.push(this._easing(n / e))
              return (
                t.push(this._easing(1)),
                { type: 'frames', frames: t, toValue: this._toValue, iterations: this.__iterations }
              )
            }),
            (u.start = function (t, e, n, i, a) {
              var r = this
              ;(this.__active = !0), (this._fromValue = t), (this._onUpdate = e), (this.__onEnd = n)
              var o = function () {
                0 !== r._duration || r._useNativeDriver
                  ? ((r._startTime = Date.now()),
                    r._useNativeDriver
                      ? r.__startNativeAnimation(a)
                      : (r._animationFrame = requestAnimationFrame(r.onUpdate.bind(r))))
                  : (r._onUpdate(r._toValue), r.__debouncedOnEnd({ finished: !0 }))
              }
              this._delay ? (this._timeout = setTimeout(o, this._delay)) : o()
            }),
            (u.onUpdate = function () {
              var t = Date.now()
              if (t >= this._startTime + this._duration)
                return (
                  0 === this._duration
                    ? this._onUpdate(this._toValue)
                    : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)),
                  void this.__debouncedOnEnd({ finished: !0 })
                )
              this._onUpdate(
                this._fromValue +
                  this._easing((t - this._startTime) / this._duration) * (this._toValue - this._fromValue),
              ),
                this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)))
            }),
            (u.stop = function () {
              e.prototype.stop.call(this),
                (this.__active = !1),
                clearTimeout(this._timeout),
                t.cancelAnimationFrame(this._animationFrame),
                this.__debouncedOnEnd({ finished: !1 })
            }),
            c
          )
        })(a.a)
        e.a = c
      }.call(this, n('fRV1')))
    },
    feOz: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return pe
      })
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ddV6'),
        o = n.n(r),
        s = (n('KOtZ'), n('7x/C'), n('LW0h'), n('97Jx')),
        c = n.n(s),
        u = n('m3Bd'),
        l = n.n(u),
        d = n('ERkP'),
        f = n.n(d),
        p = n('+Tpo'),
        h = n('T0aG'),
        v = n.n(h),
        _ = (n('849X'), n('TJCb'), n('PxJJ')),
        m = n('3XMw'),
        g = n.n(m),
        y = n('wD1h'),
        b = n('wwsH'),
        w = n('aITJ'),
        O = n('KDev'),
        E = n('VrFO'),
        k = n.n(E),
        C = n('Y9Ll'),
        N = n.n(C),
        A = n('n70c'),
        S = n.n(A),
        P = n('AuHH'),
        j = n.n(P),
        x = n('5Yy7'),
        T = n.n(x),
        R = n('2VqO'),
        V = n.n(R),
        I = n('q1bs'),
        L = 'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
        D = new ((function (t) {
          T()(n, t)
          var e = V()(n)
          function n() {
            return k()(this, n), e.apply(this, arguments)
          }
          return (
            N()(n, [
              {
                key: 'check',
                value: function (t) {
                  return S()(j()(n.prototype), 'check', this).call(this, null != t ? t : L)
                },
              },
            ]),
            n
          )
        })(I.a))(),
        F = n('Lsrn'),
        M = n('k/Ka'),
        H = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(M.a)(
            'svg',
            a()(
              a()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [F.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M3.538 14.22l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72V4c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var W = H,
        U = n('IqLm'),
        B = g.a.d2b2b8e5,
        z = g.a.hcb3286f,
        K = g.a.cb5dafd3
      function q() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionDownvote.onError')
        _.a.report(t)
      }
      var X = n('Z8+W'),
        J = n('KEM+'),
        G = n.n(J),
        Y = n('CHgo'),
        Q = (n('z84I'), n('M+/F'), n('tQbP'), n('de1q')),
        Z = n('mJtw'),
        $ = n('cHvH'),
        tt = n('rHpw'),
        et = n('MWbm'),
        nt = function (t, e, n) {
          var i = n.reduce(function (t, e) {
            return t + e.count
          }, 0)
          if (0 === i) return []
          var a = t || 20
          return n
            .filter(function (t) {
              return t.count >= i * (a / 100)
            })
            .filter(function (t, n, i) {
              return !(1 === i.length && t.type === Z.a.Like) || (e && e !== Z.a.Like)
            })
            .filter(function (t, n, i) {
              return !(1 === i.length && t.type === e)
            })
            .filter(function (t, n, i) {
              return !(1 === t.count && t.type === e)
            })
            .sort(function (t, e) {
              return e.count - t.count
            })
            .slice(0, 3)
        },
        it = tt.a.create(function (t) {
          return {
            basket: {
              display: 'flex',
              flexDirection: 'row',
              fontSize: t.fontSizes.body,
              justifyContent: 'center',
              minHeight: t.lineHeights.body,
            },
          }
        }),
        at = function (t) {
          var e = t.experimentalFruitBasketThreshold,
            n = t.legacyHeart,
            i = t.reacted,
            a = t.reactionCounts,
            r = t.size,
            o = void 0 === r ? 'normal' : r,
            s = t.style,
            c = nt(e, i, a)
          return 0 === c.length
            ? null
            : f.a.createElement($.a, null, function (t) {
                return t.windowWidth > tt.a.theme.breakpoints.xSmall * tt.a.theme.scaleMultipler
                  ? f.a.createElement(
                      et.a,
                      { style: [it.basket, s] },
                      c.map(function (t) {
                        return f.a.createElement(
                          et.a,
                          { key: t.type, style: b.b[o] },
                          f.a.createElement(Q.a, { legacyHeart: n, reactionType: t.type, withAnimation: !1 }),
                        )
                      }),
                    )
                  : null
              })
        },
        rt = n('cm6r'),
        ot = n('tn7R'),
        st = n('3dyc'),
        ct = n('OiMc'),
        ut = n('38/B'),
        lt = n('kSIJ'),
        dt = n('WrBE'),
        ft = tt.a.theme.spacesPx.space40,
        pt = { growing: 'growing', grown: 'grown', shrinking: 'shrinking', shrunk: 'shrunk' },
        ht = function (t, e) {
          var n = f.a.useRef(new dt.a.Value(t)).current,
            i = f.a.useState(pt.shrunk),
            a = o()(i, 2),
            r = a[0],
            s = a[1],
            c = f.a.useCallback(
              function (t) {
                s(pt.growing),
                  dt.a.timing(n, { duration: 200, toValue: e, useNativeDriver: !1 }).start(function (e) {
                    e.finished && s(pt.grown), t && t(e)
                  })
              },
              [n, e],
            ),
            u = f.a.useCallback(
              function (e) {
                s(pt.shrinking),
                  dt.a.timing(n, { duration: 200, toValue: t, useNativeDriver: !1 }).start(function (t) {
                    t.finished && s(pt.shrunk), e && e(t)
                  })
              },
              [n, t],
            )
          return { animationState: r, currentHeight: n, startAnimation: c, resetAnimation: u }
        },
        vt = function (t) {
          return Object(M.a)('div', t)
        },
        _t = tt.a.create(function (t) {
          return {
            container: {
              maxHeight: t.spaces.space40,
              maxWidth: t.spaces.space40,
              marginHorizontal: t.spaces.space8,
              alignItems: 'center',
              justifyContent: 'flex-end',
            },
            largeTouchArea: {
              position: 'absolute',
              width: t.spaces.space56,
              height: t.spaces.space40,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              paddingTop: t.spaces.space80,
              paddingBottom: t.spaces.space80,
            },
            activeBackground: a()(
              a()({}, tt.a.absoluteFillObject),
              {},
              {
                backgroundColor: t.colors.activeBlack,
                borderRadius: t.borderRadii.infinite,
                margin: '-'.concat(t.spaces.space4),
              },
            ),
            fullHeight: { height: '100%' },
          }
        }),
        mt = function (t) {
          var e = t.enableTouch,
            n = t.forceHovered,
            i = t.legacyHeart,
            a = t.onSelect,
            r = t.reacted,
            s = t.reactionType,
            c = t.withAnimation,
            u = void 0 === c || c,
            l = f.a.useState(!1),
            d = o()(l, 2),
            p = d[0],
            h = d[1],
            v = ht(ft, 1.5 * ft),
            _ = v.animationState,
            m = v.currentHeight,
            g = v.resetAnimation,
            y = v.startAnimation
          f.a.useEffect(
            function () {
              if (!ut.a.reducedMotionEnabled) {
                var t = n || p,
                  e = _ === pt.shrinking || _ === pt.shrunk,
                  i = _ === pt.growing || _ === pt.grown
                t && e ? y() : !t && i && g()
              }
            },
            [n, p, y, g, _],
          )
          var b = function () {
              h(!0)
            },
            w = function () {
              h(!1)
            },
            O = n || p
          return f.a.createElement(
            et.a,
            { style: _t.container },
            f.a.createElement(
              dt.a.View,
              { style: { height: m, width: m } },
              f.a.createElement(
                rt.a,
                {
                  accessibilityLabel: lt.a[s],
                  accessibilityRole: 'button',
                  hoverLabel:
                    _ === pt.grown || ut.a.reducedMotionEnabled
                      ? { label: lt.a[s], preferredVerticalOrientation: 'up', withDelay: !1, withExtraSpace: !0 }
                      : void 0,
                  interactiveStyles: null,
                  onFocusRingGained: b,
                  onFocusRingLost: w,
                  onHoverIn: b,
                  onHoverOut: w,
                  onPress: a,
                  style: _t.fullHeight,
                },
                f.a.createElement(Q.a, { legacyHeart: i, reactionType: s, withAnimation: u }),
                r && !O && f.a.createElement(et.a, { style: _t.activeBackground }),
              ),
            ),
            e && f.a.createElement(vt, { 'data-reaction-type': s, style: _t.largeTouchArea }),
          )
        },
        gt = tt.a.create(function (t) {
          return {
            popoverContainer: {
              paddingVertical: t.spaces.space8,
              paddingHorizontal: t.spaces.space12,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              userSelect: 'none',
            },
          }
        }),
        yt = function (t) {
          var e = t.dismissReactionPicker,
            n = t.enableTouch,
            i = t.forceHovered,
            a = t.legacyHeart,
            r = t.onSelection,
            o = t.reacted,
            s = t.reactionOptions,
            c = t.withAnimation,
            u = void 0 === c || c
          return f.a.createElement(
            et.a,
            { style: gt.popoverContainer },
            s.map(function (t) {
              return f.a.createElement(mt, {
                enableTouch: n,
                forceHovered: i === t,
                key: t,
                legacyHeart: a,
                onSelect:
                  ((s = t),
                  function () {
                    r(s, 'picker-tap'), e()
                  }),
                reacted: o === t,
                reactionType: t,
                withAnimation: u,
              })
              var s
            }),
          )
        },
        bt = n('iEUn'),
        wt = n('DlVf'),
        Ot = n('FG+G'),
        Et = n('uCrx'),
        kt = Object(ot.a)(Z.a),
        Ct = Z.a.Like,
        Nt = g.a.e3469988,
        At = g.a.c46f0fce,
        St = g.a.ga9c2b52,
        Pt = g.a.hb755a53,
        jt = g.a.cff26b89,
        xt = 'data-reaction-type',
        Tt = function (t) {
          var e = t.style
          return f.a.createElement(Q.a, { reactionType: Z.a.Cheer, style: e, withAnimation: !1 })
        },
        Rt = function (t) {
          var e = t.style
          return f.a.createElement(Q.a, { reactionType: Z.a.Haha, style: e, withAnimation: !1 })
        },
        Vt = function (t) {
          var e = t.style
          return f.a.createElement(Q.a, { reactionType: Z.a.Hmm, style: e, withAnimation: !1 })
        },
        It = function (t) {
          var e = t.style
          return f.a.createElement(Q.a, { reactionType: Z.a.Like, style: e, withAnimation: !1 })
        },
        Lt = function (t) {
          var e = t.style
          return f.a.createElement(Q.a, { reactionType: Z.a.Sad, style: e, withAnimation: !1 })
        },
        Dt = tt.a.create(function (t) {
          return {
            root: { justifyContent: 'center', userSelect: 'none' },
            popoverContainer: { minWidth: 0, overflow: 'visible' },
            buttonContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            fruitBasketSpacing: { marginLeft: t.spaces.space8 },
            caretWithoutCount: { marginLeft: t.spaces.space12 },
          }
        }),
        Ft = function (t) {
          var e,
            n = t.activeColor,
            i = void 0 === n ? 'magenta500' : n,
            a = t.color,
            r = t.enableKeyboardShortcuts,
            s = t.experimentalFruitBasketThreshold,
            u = t.iconSize,
            l = t.isDisabled,
            d = t.isFaded,
            p = t.isPresentational,
            h = t.legacyHeart,
            v = t.onPopoverDismiss,
            _ = t.onPopoverOpen,
            m = t.onReactionSelect,
            g = t.reacted,
            w = t.reactionCounts,
            O = void 0 === w ? [] : w,
            E = t.style,
            k = t.tweetActionsRef,
            C = t.testIDs,
            N = t.withAnimation,
            A = void 0 === N || N,
            S = t.withCount,
            P = void 0 !== S && S,
            j = t.withFruitBasket,
            x = void 0 !== j && j,
            T = f.a.useState(null),
            R = o()(T, 2),
            V = R[0],
            I = R[1],
            L = f.a.useState(!1),
            D = o()(L, 2),
            F = D[0],
            M = D[1],
            H = f.a.useState(!1),
            W = o()(H, 2),
            U = W[0],
            B = W[1],
            z = f.a.useRef(null),
            K = f.a.useRef()
          Object(Q.b)()
          var q = Object(X.b)({ isLiked: g === Z.a.Like && !!h }),
            J = O.reduce(function (t, e) {
              return t + e.count
            }, 0),
            $ = g ? At : Nt
          P && ($ = g ? jt({ count: J }) : Pt({ count: J }))
          var nt =
              ((e = {}),
              G()(e, y.a.shortcuts.like, function (t) {
                vt(!0)
              }),
              G()(e, y.a.shortcuts.reactUndo, function (t) {
                return m()
              }),
              G()(e, y.a.shortcuts.reactHmm, function (t) {
                return m(Z.a.Hmm, 'keyboard-shortcut')
              }),
              G()(e, y.a.shortcuts.reactSad, function (t) {
                return m(Z.a.Sad, 'keyboard-shortcut')
              }),
              G()(e, y.a.shortcuts.reactHaha, function (t) {
                return m(Z.a.Haha, 'keyboard-shortcut')
              }),
              G()(e, y.a.shortcuts.reactCheer, function (t) {
                return m(Z.a.Cheer, 'keyboard-shortcut')
              }),
              G()(e, y.a.shortcuts.reactLike, function (t) {
                return m(Z.a.Like, 'keyboard-shortcut')
              }),
              e),
            it = function (t) {
              B(t === st.a.longPress), null == _ || _(t)
            },
            ot = function () {
              M(!0)
            },
            ut = f.a.useCallback(function (t) {
              var e,
                n = document.elementFromPoint(t.changedTouches[0].clientX, t.changedTouches[0].clientY),
                i =
                  null == n || null === (e = n.closest('['.concat(xt, ']'))) || void 0 === e
                    ? void 0
                    : e.getAttribute(xt)
              I(i ? Z.a[i] : null), t.preventDefault()
            }, [])
          f.a.useEffect(
            function () {
              if (z.current) {
                var t = Object(Y.a)(z.current, ut, !1)
                return function () {
                  t && t()
                }
              }
            },
            [ut],
          )
          var lt = function (t) {
              return function () {
                M(!1), V && (m(V, 'picker-touchend'), I(null), t())
              }
            },
            dt = function (t) {
              return f.a.createElement(yt, {
                dismissReactionPicker: t,
                enableTouch: F,
                forceHovered: V,
                legacyHeart: h,
                onSelection: m,
                reacted: g,
                reactionOptions: kt,
                withAnimation: A,
              })
            },
            ft = function (t) {
              return function (e) {
                t(), e.stopPropagation()
              }
            },
            pt = function () {
              switch (g) {
                case Z.a.Cheer:
                  return Tt
                case Z.a.Haha:
                  return Rt
                case Z.a.Hmm:
                  return Vt
                case Z.a.Like:
                  return h ? Et.a : It
                case Z.a.Sad:
                  return Lt
                default:
                  return It
              }
            },
            ht = function (t) {
              return function (e) {
                t(), vt('keydown' === e.type)
              }
            },
            vt = function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              g ? m() : m(Ct, t ? 'keyboard-shortcut' : 'button-tap')
            },
            _t = function () {
              return x
                ? 0 === J || (1 === J && g)
                  ? null
                  : f.a.createElement(at, {
                      experimentalFruitBasketThreshold: s,
                      legacyHeart: h,
                      reacted: g,
                      reactionCounts: O,
                      size: u,
                      style: Dt.fruitBasketSpacing,
                    })
                : null
            }
          return f.a.createElement(
            et.a,
            { style: [Dt.root, E] },
            f.a.createElement(
              y.a,
              { enabled: !!r, handlers: nt },
              f.a.createElement(
                ct.a,
                {
                  anchorRef: U ? k : K,
                  animationDuration: 'normal',
                  animationType: 'slide',
                  contentStyle: Dt.popoverContainer,
                  disabled: l || d,
                  enableHover: !0,
                  enableLongPress: !0,
                  hoverDelay: 'short',
                  onDismiss: v,
                  onOpen: it,
                  preferredVerticalOrientation: 'up',
                  renderContent: dt,
                  withCardContentOverflow: !0,
                  withFixedPosition: !1,
                  withRoundedSides: !0,
                },
                function (t) {
                  var e = t.dismissPopover,
                    n = t.forceOpen
                  return f.a.createElement(
                    rt.a,
                    {
                      focusable: !1,
                      interactiveStyles: null,
                      onTouchEnd: lt(e),
                      onTouchStart: ot,
                      ref: z,
                      style: Dt.buttonContainer,
                    },
                    function (t) {
                      var r = t.isFocusedWithin
                      return f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(
                          b.a,
                          c()({}, q, {
                            ActiveIcon: pt(),
                            Icon: h ? bt.a : wt.a,
                            accessibilityLabel: $,
                            actionIconContainerRef: K,
                            activeColor: i,
                            color: a,
                            count: J,
                            decoration: _t(),
                            enableKeyboardShortcuts: !1,
                            hoverLabel: { label: Nt },
                            iconSize: u,
                            isActive: !!g,
                            isDisabled: l,
                            isFaded: d,
                            isPresentational: p,
                            onPress: ht(e),
                            showBackgroundWhenActive: !0,
                            testID: C && (g ? C.unreact : C.react),
                            withCount: P,
                          }),
                        ),
                        f.a.createElement(b.a, {
                          Icon: Ot.a,
                          accessibilityLabel: St,
                          activeColor: i,
                          color: a,
                          hoverLabel: { label: St },
                          iconSize: u,
                          isDisabled: l,
                          isFaded: d,
                          isPresentational: p,
                          onPress: ft(n),
                          style: [!r && tt.a.visuallyHidden, !P && Dt.caretWithoutCount],
                        }),
                      )
                    },
                  )
                },
              ),
            ),
          )
        },
        Mt = n('HSMM'),
        Ht = n('Wk1j'),
        Wt = n('G41x'),
        Ut = ['isFromProtectedAccount'],
        Bt = p.a,
        zt = function (t) {
          var e = t.activeColor,
            n = void 0 === e ? 'orange500' : e,
            i = t.color,
            a = t.count,
            r = t.enableKeyboardShortcuts,
            s = t.iconSize,
            u = t.isDisabled,
            l = t.isFaded,
            d = t.isDownvoted,
            p = t.isPresentational,
            h = t.downvoteTransitionAnimation,
            _ = void 0 === h ? L : h,
            m = t.onError,
            g = void 0 === m ? q : m,
            E = t.onPress,
            k = t.style,
            C = t.testIDs,
            N = t.withCount && 'number' == typeof a,
            A = d ? K : B,
            S = (function (t) {
              var e = t.downvoteTransitionAnimation,
                n = t.isDownvoted,
                i = f.a.useState(!1),
                a = o()(i, 2),
                r = a[0],
                s = a[1],
                c = f.a.useRef(n)
              return (
                f.a.useEffect(
                  function () {
                    ;('object' === v()(e) || D.check(e)) && n !== c.current && (s(n), (c.current = n))
                  },
                  [n, e],
                ),
                {
                  onAnimationEnd: function () {
                    return s(!1)
                  },
                  showAnimation: r,
                  transitionAnimationUrl: e,
                }
              )
            })({ isDownvoted: d, downvoteTransitionAnimation: _ })
          return f.a.createElement(
            b.a,
            c()({}, S, {
              ActiveIcon: W,
              Icon: U.a,
              accessibilityLabel: A,
              activeColor: n,
              behavioralEventContext: { viewType: 'downvote', viewState: { type: 'toggleable', toggledTo: !d } },
              color: i,
              count: a,
              enableKeyboardShortcuts: r,
              hoverLabel: { label: d ? z : B },
              iconSize: s,
              isActive: d,
              isDisabled: u,
              isFaded: l,
              isPresentational: p,
              keyboardShortcut: y.a.shortcuts.downvote,
              onError: g,
              onPress: function () {
                w.b.isFirefox() || O.a.vibrate(5), null == E || E()
              },
              style: k,
              testID: C && (d ? C.undownvote : C.downvote),
              withCount: N,
            }),
          )
        },
        Kt = X.a,
        qt = Ft,
        Xt = Mt.a,
        Jt = Wt.a
      var Gt = n('Xrkv'),
        Yt = n('fs1G'),
        Qt = n('Q+qU'),
        Zt = n('3MlI'),
        $t = n('0ig/'),
        te = g.a.a0af935b,
        ee = g.a.fbaa28ef,
        ne = g.a.f9be84f0,
        ie = g.a.g23ce6f0,
        ae = g.a.b75196a4,
        re = function (t) {
          return f.a.createElement(pe.ActionAnalytics, t)
        },
        oe = function (t) {
          return f.a.createElement(pe.ActionDownvote, t)
        },
        se = function (t) {
          return f.a.createElement(pe.ActionLike, t)
        },
        ce = function (t) {
          return f.a.createElement(pe.ActionReaction, t)
        },
        ue = function (t) {
          return f.a.createElement(pe.ActionReply, t)
        },
        le = function (t) {
          return f.a.createElement(pe.ActionRetweet, t)
        },
        de = function (t) {
          return f.a.createElement(pe.ActionShare, t)
        },
        fe = []
      function pe(t) {
        var e = t.actionSize,
          n = void 0 === e ? 'normal' : e,
          i = t.activeColor,
          r = void 0 === i ? void 0 : i,
          s = t.color,
          c = void 0 === s ? 'gray700' : s,
          u = t.displayStyle,
          l = t.downvoteCount,
          d = t.enableKeyboardShortcuts,
          p = void 0 === d || d,
          h = t.isDisabled,
          v = void 0 !== h && h,
          _ = t.isDownvoted,
          m = void 0 !== _ && _,
          y = t.isFromProtectedAccount,
          b = t.isLiked,
          w = t.isRetweeted,
          O = t.isPresentational,
          E = t.likeCount,
          k = t.nativeID,
          C = t.reaction,
          N = t.reactionCounts,
          A = t.renderAnalyticsAction,
          S = void 0 === A ? re : A,
          P = t.renderDownvoteAction,
          j = void 0 === P ? oe : P,
          x = t.renderLikeAction,
          T = void 0 === x ? se : x,
          R = t.renderReactionAction,
          V = void 0 === R ? ce : R,
          I = t.renderReplyAction,
          L = void 0 === I ? ue : I,
          D = t.renderRetweetAction,
          F = void 0 === D ? le : D,
          M = t.renderShareAction,
          H = void 0 === M ? de : M,
          W = t.replyCount,
          U = t.retweetCount,
          B = t.showDownvoteBeforeLike,
          z = void 0 !== B && B,
          K = t.style,
          q = t.tweetLink,
          X = t.withAnalytics,
          J = void 0 !== X && X,
          G = t.withDownvote,
          Y = void 0 !== G && G,
          Q = t.withCount,
          Z = void 0 !== Q && Q,
          $ = t.withReaction,
          tt = void 0 !== $ && $,
          nt = f.a.useState(!1),
          it = o()(nt, 2),
          at = it[0],
          rt = it[1],
          ot = f.a.useRef(null),
          ct = Object($t.a)(),
          ut = J && ct.width >= Zt.a,
          lt =
            null == N
              ? void 0
              : N.reduce(function (t, e) {
                  return t + e.count
                }, 0),
          dt = f.a.useMemo(
            function () {
              if (Z) {
                var t = g.a.b03835c7,
                  e = g.a.hb7b0cea,
                  n = g.a.e089b42d,
                  i = g.a.d8320937
                return Object(Gt.a)(
                  [
                    W ? t({ replyCount: W }) : null,
                    U ? e({ retweetCount: U }) : null,
                    w ? ie : null,
                    E && !tt ? n({ likeCount: E }) : null,
                    b && !tt ? te : null,
                    lt && tt ? i({ reactionCount: lt }) : null,
                    C && tt ? ee : null,
                    m && Y ? ne : null,
                  ].filter(Boolean),
                  !0,
                )
              }
            },
            [m, b, w, E, lt, C, W, U, Z, Y, tt],
          ),
          ft = { color: c, iconSize: n, isDisabled: v },
          pt = function () {
            return j(
              a()(
                a()({}, ft),
                {},
                {
                  activeColor: r,
                  count: l,
                  enableKeyboardShortcuts: p,
                  isDownvoted: m,
                  isPresentational: O,
                  withCount: Z,
                },
              ),
            )
          }
        return f.a.createElement(
          et.a,
          { ref: ot },
          f.a.createElement(
            Zt.b,
            { accessibilityLabel: dt, displayStyle: u, nativeID: k, style: [K, at && he.hidden] },
            L(
              a()(
                a()({}, ft),
                {},
                { activeColor: r, count: W, enableKeyboardShortcuts: p, isPresentational: O, withCount: Z },
              ),
            ),
            F(
              a()(
                a()({}, ft),
                {},
                {
                  activeColor: r,
                  count: U,
                  enableKeyboardShortcuts: p,
                  isFromProtectedAccount: y,
                  isRetweeted: w,
                  isPresentational: O,
                  withCount: Z,
                },
              ),
            ),
            Y && z ? pt() : null,
            tt
              ? V(
                  a()(
                    a()({}, ft),
                    {},
                    {
                      activeColor: r,
                      enableKeyboardShortcuts: p,
                      isPresentational: O,
                      onPopoverDismiss: function () {
                        return rt(!1)
                      },
                      onPopoverOpen: function (t) {
                        rt(t === st.a.longPress)
                      },
                      onReactionSelect: Yt.a,
                      reacted: C,
                      reactionCounts: N,
                      tweetActionsRef: ot,
                      withCount: Z,
                    },
                  ),
                )
              : T(
                  a()(
                    a()({}, ft),
                    {},
                    {
                      activeColor: r,
                      count: E,
                      enableKeyboardShortcuts: p,
                      isLiked: b,
                      isPresentational: O,
                      withCount: Z,
                    },
                  ),
                ),
            Y && !z ? pt() : null,
            H(
              a()(
                a()({}, ft),
                {},
                {
                  actionItems: fe,
                  activeColor: r,
                  enableKeyboardShortcuts: p,
                  isPresentational: O,
                  withCount: Z && ut,
                },
              ),
            ),
            ut ? S(a()(a()({}, ft), {}, { isPresentational: O, tweetLink: q })) : null,
          ),
          at ? f.a.createElement(et.a, { style: he.swipeInfoBar }, f.a.createElement(Qt.a, { color: c }, ae)) : null,
        )
      }
      ;(pe.ActionAnalytics = Bt),
        (pe.ActionDownvote = zt),
        (pe.ActionLike = Kt),
        (pe.ActionReaction = qt),
        (pe.ActionReply = Xt),
        (pe.ActionRetweet = function (t) {
          var e = t.isFromProtectedAccount,
            n = void 0 !== e && e,
            i = l()(t, Ut)
          return f.a.createElement(
            Ht.b,
            c()({}, i, {
              excludeRetweetAction: i.excludeRetweetAction || n,
              excludeRetweetWithCommentAction: i.excludeRetweetWithCommentAction || n,
              isDisabled: i.isDisabled || (!i.isRetweeted && n),
            }),
          )
        }),
        (pe.ActionShare = Jt)
      var he = tt.a.create(function (t) {
        return {
          swipeInfoBar: a()(
            a()({}, tt.a.absoluteFillObject),
            {},
            { alignItems: 'center', justifyContent: 'center', userSelect: 'none' },
          ),
          hidden: { visibility: 'hidden' },
        }
      })
    },
    jydp: function (t, e, n) {
      'use strict'
      ;(function (t) {
        var i = n('YRNd'),
          a = n('MQi0'),
          r = n('tI3i'),
          o = n.n(r),
          s = n('XJEr')
        function c(t, e) {
          return (c =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t
            })(t, e)
        }
        var u = (function (e) {
          var n, i
          function r(t) {
            var n, i, r, c, u, l, d, f, p, h, v, _
            if (
              (((p = e.call(this) || this)._overshootClamping =
                null !== (n = t.overshootClamping) && void 0 !== n && n),
              (p._restDisplacementThreshold = null !== (i = t.restDisplacementThreshold) && void 0 !== i ? i : 0.001),
              (p._restSpeedThreshold = null !== (r = t.restSpeedThreshold) && void 0 !== r ? r : 0.001),
              (p._initialVelocity = null !== (c = t.velocity) && void 0 !== c ? c : 0),
              (p._lastVelocity = null !== (u = t.velocity) && void 0 !== u ? u : 0),
              (p._toValue = t.toValue),
              (p._delay = null !== (l = t.delay) && void 0 !== l ? l : 0),
              (p._useNativeDriver = Object(s.c)(t)),
              (p.__isInteraction = null !== (d = t.isInteraction) && void 0 !== d ? d : !p._useNativeDriver),
              (p.__iterations = null !== (f = t.iterations) && void 0 !== f ? f : 1),
              void 0 !== t.stiffness || void 0 !== t.damping || void 0 !== t.mass)
            )
              o()(
                void 0 === t.bounciness && void 0 === t.speed && void 0 === t.tension && void 0 === t.friction,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              ),
                (p._stiffness = null !== (h = t.stiffness) && void 0 !== h ? h : 100),
                (p._damping = null !== (v = t.damping) && void 0 !== v ? v : 10),
                (p._mass = null !== (_ = t.mass) && void 0 !== _ ? _ : 1)
            else if (void 0 !== t.bounciness || void 0 !== t.speed) {
              var m, g
              o()(
                void 0 === t.tension &&
                  void 0 === t.friction &&
                  void 0 === t.stiffness &&
                  void 0 === t.damping &&
                  void 0 === t.mass,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              )
              var y = a.a.fromBouncinessAndSpeed(
                null !== (m = t.bounciness) && void 0 !== m ? m : 8,
                null !== (g = t.speed) && void 0 !== g ? g : 12,
              )
              ;(p._stiffness = y.stiffness), (p._damping = y.damping), (p._mass = 1)
            } else {
              var b,
                w,
                O = a.a.fromOrigamiTensionAndFriction(
                  null !== (b = t.tension) && void 0 !== b ? b : 40,
                  null !== (w = t.friction) && void 0 !== w ? w : 7,
                )
              ;(p._stiffness = O.stiffness), (p._damping = O.damping), (p._mass = 1)
            }
            return (
              o()(p._stiffness > 0, 'Stiffness value must be greater than 0'),
              o()(p._damping > 0, 'Damping value must be greater than 0'),
              o()(p._mass > 0, 'Mass value must be greater than 0'),
              p
            )
          }
          ;(i = e), ((n = r).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), c(n, i)
          var u = r.prototype
          return (
            (u.__getNativeAnimationConfig = function () {
              var t
              return {
                type: 'spring',
                overshootClamping: this._overshootClamping,
                restDisplacementThreshold: this._restDisplacementThreshold,
                restSpeedThreshold: this._restSpeedThreshold,
                stiffness: this._stiffness,
                damping: this._damping,
                mass: this._mass,
                initialVelocity: null !== (t = this._initialVelocity) && void 0 !== t ? t : this._lastVelocity,
                toValue: this._toValue,
                iterations: this.__iterations,
              }
            }),
            (u.start = function (t, e, n, i, a) {
              var o = this
              if (
                ((this.__active = !0),
                (this._startPosition = t),
                (this._lastPosition = this._startPosition),
                (this._onUpdate = e),
                (this.__onEnd = n),
                (this._lastTime = Date.now()),
                (this._frameTime = 0),
                i instanceof r)
              ) {
                var s = i.getInternalState()
                ;(this._lastPosition = s.lastPosition),
                  (this._lastVelocity = s.lastVelocity),
                  (this._initialVelocity = this._lastVelocity),
                  (this._lastTime = s.lastTime)
              }
              var c = function () {
                o._useNativeDriver ? o.__startNativeAnimation(a) : o.onUpdate()
              }
              this._delay ? (this._timeout = setTimeout(c, this._delay)) : c()
            }),
            (u.getInternalState = function () {
              return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime }
            }),
            (u.onUpdate = function () {
              var t = Date.now()
              t > this._lastTime + 64 && (t = this._lastTime + 64)
              var e = (t - this._lastTime) / 1e3
              this._frameTime += e
              var n = this._damping,
                i = this._mass,
                a = this._stiffness,
                r = -this._initialVelocity,
                o = n / (2 * Math.sqrt(a * i)),
                s = Math.sqrt(a / i),
                c = s * Math.sqrt(1 - o * o),
                u = this._toValue - this._startPosition,
                l = 0,
                d = 0,
                f = this._frameTime
              if (o < 1) {
                var p = Math.exp(-o * s * f)
                ;(l = this._toValue - p * (((r + o * s * u) / c) * Math.sin(c * f) + u * Math.cos(c * f))),
                  (d =
                    o * s * p * ((Math.sin(c * f) * (r + o * s * u)) / c + u * Math.cos(c * f)) -
                    p * (Math.cos(c * f) * (r + o * s * u) - c * u * Math.sin(c * f)))
              } else {
                var h = Math.exp(-s * f)
                ;(l = this._toValue - h * (u + (r + s * u) * f)), (d = h * (r * (f * s - 1) + f * u * (s * s)))
              }
              if (
                ((this._lastTime = t),
                (this._lastPosition = l),
                (this._lastVelocity = d),
                this._onUpdate(l),
                this.__active)
              ) {
                var v = !1
                this._overshootClamping &&
                  0 !== this._stiffness &&
                  (v = this._startPosition < this._toValue ? l > this._toValue : l < this._toValue)
                var _ = Math.abs(d) <= this._restSpeedThreshold,
                  m = !0
                if (
                  (0 !== this._stiffness && (m = Math.abs(this._toValue - l) <= this._restDisplacementThreshold),
                  v || (_ && m))
                )
                  return (
                    0 !== this._stiffness &&
                      ((this._lastPosition = this._toValue), (this._lastVelocity = 0), this._onUpdate(this._toValue)),
                    void this.__debouncedOnEnd({ finished: !0 })
                  )
                this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this))
              }
            }),
            (u.stop = function () {
              e.prototype.stop.call(this),
                (this.__active = !1),
                clearTimeout(this._timeout),
                t.cancelAnimationFrame(this._animationFrame),
                this.__debouncedOnEnd({ finished: !1 })
            }),
            r
          )
        })(i.a)
        e.a = u
      }.call(this, n('fRV1')))
    },
    kSIJ: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return u
      })
      var i,
        a = n('KEM+'),
        r = n.n(a),
        o = n('3XMw'),
        s = n.n(o),
        c = n('mJtw'),
        u =
          ((i = {}),
          r()(i, c.a.Like, s.a.d636ebc6),
          r()(i, c.a.Haha, s.a.bd83592a),
          r()(i, c.a.Hmm, s.a.f84f0fa8),
          r()(i, c.a.Sad, s.a.g47ce0e4),
          r()(i, c.a.Cheer, s.a.fc8a13c5),
          i)
    },
    lD8l: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return g
      })
      n('2G9S')
      var i = n('ERkP'),
        a = n.n(i),
        r = n('3XMw'),
        o = n.n(r),
        s = n('EyD/'),
        c = n('MWbm'),
        u = n('t62R'),
        l = n('rHpw'),
        d = n('a2Fh'),
        f = n('4zmP'),
        p = n('feOz'),
        h = n('aNKf'),
        v = [17, 7, 14, 11, 8, 12, 4, 11],
        _ = a.a.createElement(
          o.a.I18NFormatMessage,
          { $i18n: 'gc242226' },
          a.a.createElement(u.b, { size: 'subtext3' }, o.a.fa70c77f),
        )
      var m = l.a.create(function (t) {
          return {
            root: {
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-end',
              maxWidth: '327px',
              position: 'relative',
              userSelect: 'none',
              width: '100%',
            },
            educationCallout: {
              marginBottom: t.spaces.space8,
              marginHorizontal: t.spaces.space24,
              marginTop: t.spaces.space16,
            },
            fakeBodyCopy: { paddingHorizontal: t.spaces.space28, width: '100%' },
            gradient: { height: t.spaces.space56, position: 'absolute', top: 0, width: '100%' },
            mockTweet: {
              backgroundColor: t.colors.cellBackground,
              borderRadius: t.borderRadii.xLarge,
              boxShadow: t.boxShadows.medium,
              marginTop: t.spaces.space16,
              paddingVertical: t.spaces.space16,
              width: '100%',
            },
          }
        }),
        g = function (t) {
          var e = t.style,
            n = function (t) {
              return ''.concat(l.a.theme.colors.cellBackground).concat(t || '')
            },
            i = l.a.theme.colors.transparent
          return a.a.createElement(
            c.a,
            { style: [m.root, e] },
            a.a.createElement(
              c.a,
              { style: m.mockTweet },
              a.a.createElement(c.a, { style: m.fakeBodyCopy }, a.a.createElement(d.a, { wordPercentWidths: v })),
              a.a.createElement(
                c.a,
                { style: m.educationCallout },
                a.a.createElement(f.a, { Icon: s.a, text: _, type: 'exclusive', withThumbnail: !0 }),
              ),
              a.a.createElement(p.a, {
                displayStyle: 'block',
                isLiked: !1,
                isPresentational: !0,
                isRetweeted: !1,
                likeCount: 0,
                reaction: null,
                reactionCounts: [],
                replyCount: 0,
                retweetCount: 0,
                tweetLink: '',
              }),
            ),
            a.a.createElement(h.a, { colors: [n(), n(), n(50), i], locations: [0, 0.25, 0.75, 1], style: m.gradient }),
            a.a.createElement(h.a, { colors: [n(), n(99), n(50), i], locations: [0, 0.5, 0.75, 1], style: m.gradient }),
          )
        }
    },
    mbB1: function (t, e, n) {
      'use strict'
      var i = n('H5wF')
      e.a = i.a('NativeAnimatedTurboModule')
    },
    pxHa: function (t, e, n) {
      'use strict'
      var i = n('XJEr'),
        a = n('tI3i'),
        r = n.n(a),
        o = i.a.API,
        s = 1,
        c = (function () {
          var t = e.prototype
          function e() {
            this._listeners = {}
          }
          return (
            (t.__attach = function () {}),
            (t.__detach = function () {
              this.__isNative &&
                null != this.__nativeTag &&
                (i.a.API.dropAnimatedNode(this.__nativeTag), (this.__nativeTag = void 0))
            }),
            (t.__getValue = function () {}),
            (t.__getAnimatedValue = function () {
              return this.__getValue()
            }),
            (t.__addChild = function (t) {}),
            (t.__removeChild = function (t) {}),
            (t.__getChildren = function () {
              return []
            }),
            (t.__makeNative = function () {
              if (!this.__isNative) throw new Error('This node cannot be made a "native" animated node')
              this.hasListeners() && this._startListeningToNativeValueUpdates()
            }),
            (t.addListener = function (t) {
              var e = String(s++)
              return (this._listeners[e] = t), this.__isNative && this._startListeningToNativeValueUpdates(), e
            }),
            (t.removeListener = function (t) {
              delete this._listeners[t],
                this.__isNative && !this.hasListeners() && this._stopListeningForNativeValueUpdates()
            }),
            (t.removeAllListeners = function () {
              ;(this._listeners = {}), this.__isNative && this._stopListeningForNativeValueUpdates()
            }),
            (t.hasListeners = function () {
              return !!Object.keys(this._listeners).length
            }),
            (t._startListeningToNativeValueUpdates = function () {
              var t = this
              ;(this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) ||
                (this.__shouldUpdateListenersForNewNativeTag &&
                  ((this.__shouldUpdateListenersForNewNativeTag = !1), this._stopListeningForNativeValueUpdates()),
                o.startListeningToAnimatedNodeValue(this.__getNativeTag()),
                (this.__nativeAnimatedValueListener = i.a.nativeEventEmitter.addListener(
                  'onAnimatedValueUpdate',
                  function (e) {
                    e.tag === t.__getNativeTag() && t._onAnimatedValueUpdateReceived(e.value)
                  },
                )))
            }),
            (t._onAnimatedValueUpdateReceived = function (t) {
              this.__callListeners(t)
            }),
            (t.__callListeners = function (t) {
              for (var e in this._listeners) this._listeners[e]({ value: t })
            }),
            (t._stopListeningForNativeValueUpdates = function () {
              this.__nativeAnimatedValueListener &&
                (this.__nativeAnimatedValueListener.remove(),
                (this.__nativeAnimatedValueListener = null),
                o.stopListeningToAnimatedNodeValue(this.__getNativeTag()))
            }),
            (t.__getNativeTag = function () {
              var t
              i.a.assertNativeAnimatedModule(),
                r()(this.__isNative, 'Attempt to get native tag from node not marked as "native"')
              var e = null !== (t = this.__nativeTag) && void 0 !== t ? t : i.a.generateNewNodeTag()
              return (
                null == this.__nativeTag &&
                  ((this.__nativeTag = e),
                  i.a.API.createAnimatedNode(e, this.__getNativeConfig()),
                  (this.__shouldUpdateListenersForNewNativeTag = !0)),
                e
              )
            }),
            (t.__getNativeConfig = function () {
              throw new Error('This JS animated node type cannot be used as native animated node')
            }),
            (t.toJSON = function () {
              return this.__getValue()
            }),
            e
          )
        })()
      e.a = c
    },
    vG6z: function (t, e, n) {
      'use strict'
      var i = n('H5wF')
      e.a = i.a('NativeAnimatedModule')
    },
    xrkw: function (t, e, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        r = n('ERkP'),
        o = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        u = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, t),
              {},
              {
                accessibilityHidden: void 0 === t.accessibilityLabel,
                style: [s.a.root, t.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (e.a = u)
    },
    yTN1: function (t, e, n) {
      'use strict'
      var i = n('ERkP'),
        a = n.n(i),
        r = n('WOwf'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('k6Ei'),
        u = n('rHpw'),
        l = n('+/1j'),
        d = n('MWbm'),
        f = s.a.c2fc878c,
        p = s.a.db11b27f,
        h = function (t) {
          return t
        },
        v = u.a.create(function (t) {
          var e = t.colors
          return {
            root: { alignItems: 'flex-start', minHeight: 30, minWidth: 30 },
            center: { alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            progressCircle: { transitionDuration: '0.2s', transitionProperty: 'opacity' },
            hide: { opacity: 0 },
            text: { fontSize: 13, lineHeight: 0.8, minWidth: 16, textAlign: 'center' },
            gray700: { color: e.gray700 },
            red500: { color: e.red500 },
          }
        })
      e.a = function (t) {
        var e = t.count,
          n = t.maxCount,
          i = t.formatNumber,
          o = void 0 === i ? h : i,
          s = t.warningCount,
          _ = n - e,
          m = _ >= 0 ? p({ count: o(_) }) : f({ count: o(e - n) }),
          g =
            e >= s
              ? a.a.createElement(
                  l.a,
                  { accessibilityAtomic: !0, accessibilityLiveRegion: 'polite', style: u.a.visuallyHidden },
                  m,
                )
              : null,
          y = Object(r.a)(_, n),
          b = e >= n ? 'red500' : e >= s ? 'yellow500' : 'primary',
          w = a.a.createElement(c.a, {
            color: b,
            progress: y,
            size: e >= s ? 30 : 20,
            style: [v.progressCircle, _ <= -10 && v.hide],
          }),
          O = e >= s ? a.a.createElement(l.a, { style: [v.text, _ > 0 ? v.gray700 : v.red500] }, o(_)) : null
        return a.a.createElement(
          d.a,
          { style: [v.root, v.center] },
          g,
          w,
          a.a.createElement(d.a, { style: [u.a.absoluteFill, v.center] }, O),
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
