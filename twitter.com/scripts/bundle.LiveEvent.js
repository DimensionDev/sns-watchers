;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62, 174],
  {
    '/x6e': function (e, t, n) {
      'use strict'
      var i = n('9Ulv'),
        r = n('BR0S'),
        a = n('tI3i'),
        o = n.n(a)
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var c = 1,
        l = (function (e) {
          var t, n
          function r(t) {
            var n
            n = e.call(this) || this
            var r = t || { x: 0, y: 0 }
            return (
              'number' == typeof r.x && 'number' == typeof r.y
                ? ((n.x = new i.a(r.x)), (n.y = new i.a(r.y)))
                : (o()(
                    r.x instanceof i.a && r.y instanceof i.a,
                    'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.',
                  ),
                  (n.x = r.x),
                  (n.y = r.y)),
              (n._listeners = {}),
              n
            )
          }
          ;(n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), s(t, n)
          var a = r.prototype
          return (
            (a.setValue = function (e) {
              this.x.setValue(e.x), this.y.setValue(e.y)
            }),
            (a.setOffset = function (e) {
              this.x.setOffset(e.x), this.y.setOffset(e.y)
            }),
            (a.flattenOffset = function () {
              this.x.flattenOffset(), this.y.flattenOffset()
            }),
            (a.extractOffset = function () {
              this.x.extractOffset(), this.y.extractOffset()
            }),
            (a.__getValue = function () {
              return { x: this.x.__getValue(), y: this.y.__getValue() }
            }),
            (a.resetAnimation = function (e) {
              this.x.resetAnimation(), this.y.resetAnimation(), e && e(this.__getValue())
            }),
            (a.stopAnimation = function (e) {
              this.x.stopAnimation(), this.y.stopAnimation(), e && e(this.__getValue())
            }),
            (a.addListener = function (e) {
              var t = this,
                n = String(c++),
                i = function (n) {
                  n.value
                  e(t.__getValue())
                }
              return (this._listeners[n] = { x: this.x.addListener(i), y: this.y.addListener(i) }), n
            }),
            (a.removeListener = function (e) {
              this.x.removeListener(this._listeners[e].x),
                this.y.removeListener(this._listeners[e].y),
                delete this._listeners[e]
            }),
            (a.removeAllListeners = function () {
              this.x.removeAllListeners(), this.y.removeAllListeners(), (this._listeners = {})
            }),
            (a.getLayout = function () {
              return { left: this.x, top: this.y }
            }),
            (a.getTranslateTransform = function () {
              return [{ translateX: this.x }, { translateY: this.y }]
            }),
            r
          )
        })(r.a)
      t.a = l
    },
    '0GAP': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y'), n('hBvt')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('TIdA'),
        o = n('t62R'),
        s = n('A91F'),
        c = n('IJsT'),
        l = n('rHpw'),
        u = n('MWbm'),
        d = l.a.create(function (e) {
          return {
            root: { padding: e.spaces.space4 },
            upper: { height: 'auto' },
            title: { paddingBottom: e.spaces.space4 },
            description: { paddingBottom: e.spaces.space8 },
            previousPrice: { textDecorationLine: 'line-through', marginLeft: e.spaces.space4 },
            price: { paddingBottom: e.spaces.space8 },
            imageColorOverlay: {
              position: 'absolute',
              backgroundColor: e.colors.gray700,
              opacity: 0.05,
              width: '100%',
              height: '100%',
            },
            imageOverlay: {
              position: 'absolute',
              bottom: e.spaces.space12,
              left: e.spaces.space12,
              marginRight: e.spaces.space12,
              paddingVertical: e.spaces.space4,
              paddingHorizontal: e.spaces.space8,
              backgroundColor: e.colors.white,
              borderRadius: e.borderRadii.xLarge,
            },
          }
        })
      t.a = function (e) {
        var t = e.accessibilityLabel,
          n = e.containerStyle,
          i = e.description,
          l = e.image,
          p = e.imageOverlayText,
          m = e.link,
          f = e.onClick,
          h = e.previousPrice,
          _ = e.price,
          v = e.title,
          b = p
            ? r.a.createElement(
                o.b,
                { color: 'alwaysBaseGray1100', size: 'subtext3', style: d.imageOverlay, weight: 'bold' },
                p,
              )
            : null,
          g = r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(a.a, { accessibilityLabel: t, aspectMode: s.a.SQUARE, image: l }),
            r.a.createElement(u.a, { style: d.imageColorOverlay }),
            b,
          ),
          y = h
            ? r.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 1, style: d.previousPrice, weight: 'normal' },
                h,
              )
            : null,
          E = _ ? r.a.createElement(o.b, { numberOfLines: 1, size: 'subtext2', style: d.price }, _, y) : null,
          w = r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(o.b, { numberOfLines: 1, style: d.title, weight: 'bold' }, v),
            r.a.createElement(o.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: d.description }, i),
            E,
          )
        return r.a.createElement(c.a, {
          accessibilityLabel: t,
          containerStyle: [d.root, n],
          link: m,
          lower: w,
          onClick: f,
          stackLayoutUpperStyle: d.upper,
          upper: g,
          withInteractiveStyling: !0,
        })
      }
    },
    '0m3q': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i = n('4LIG'),
        r = n('tI3i'),
        a = n.n(r)
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var s = (function (e) {
          var t, n
          function i(t, n, i, r) {
            var a
            return ((a = e.call(this, n) || this).emitter = t), (a.listener = i), (a.context = r), a
          }
          return (
            (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            o(t, n),
            (i.prototype.remove = function () {
              this.emitter.removeSubscription(this)
            }),
            i
          )
        })(
          (function () {
            function e(e) {
              this.subscriber = e
            }
            return (
              (e.prototype.remove = function () {
                this.subscriber.removeSubscription(this)
              }),
              e
            )
          })(),
        ),
        c = (function () {
          function e() {
            this._subscriptionsForType = {}
          }
          var t = e.prototype
          return (
            (t.addSubscription = function (e, t) {
              a()(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.'),
                this._subscriptionsForType[e] || (this._subscriptionsForType[e] = [])
              var n = this._subscriptionsForType[e].length
              return this._subscriptionsForType[e].push(t), (t.eventType = e), (t.key = n), t
            }),
            (t.removeAllSubscriptions = function (e) {
              null == e ? (this._subscriptionsForType = {}) : delete this._subscriptionsForType[e]
            }),
            (t.removeSubscription = function (e) {
              var t = e.eventType,
                n = e.key,
                i = this._subscriptionsForType[t]
              i && delete i[n]
            }),
            (t.getSubscriptionsForType = function (e) {
              return this._subscriptionsForType[e]
            }),
            e
          )
        })(),
        l = function () {
          return !0
        },
        u = new ((function () {
          function e(e) {
            this._subscriber = e || new c()
          }
          var t = e.prototype
          return (
            (t.addListener = function (e, t, n) {
              return this._subscriber.addSubscription(e, new s(this, this._subscriber, t, n))
            }),
            (t.removeAllListeners = function (e) {
              this._subscriber.removeAllSubscriptions(e)
            }),
            (t.removeSubscription = function (e) {
              a()(e.emitter === this, 'Subscription does not belong to this emitter.'),
                this._subscriber.removeSubscription(e)
            }),
            (t.listenerCount = function (e) {
              var t = this._subscriber.getSubscriptionsForType(e)
              return t ? t.filter(l).length : 0
            }),
            (t.emit = function (e) {
              var t = this._subscriber.getSubscriptionsForType(e)
              if (t) {
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
                  i[r - 1] = arguments[r]
                for (var a = 0, o = t.length; a < o; a++) {
                  var s = t[a]
                  s && s.listener && s.listener.apply(s.context, i)
                }
              }
            }),
            (t.removeListener = function (e, t) {
              var n = this._subscriber.getSubscriptionsForType(e)
              if (n)
                for (var i = 0, r = n.length; i < r; i++) {
                  var a = n[i]
                  a && a.listener === t && a.remove()
                }
            }),
            e
          )
        })())(),
        d = (function () {
          function e(e) {
            'ios' === i.a.OS &&
              (a()(null != e, '`new NativeEventEmitter()` requires a non-null argument.'), (this._nativeModule = e))
          }
          var t = e.prototype
          return (
            (t.addListener = function (e, t, n) {
              var i,
                r = this
              null == (i = this._nativeModule) || i.addListener(e)
              var a = u.addListener(e, t, n)
              return {
                remove: function () {
                  var e
                  null != a && (null == (e = r._nativeModule) || e.removeListeners(1), a.remove(), (a = null))
                },
              }
            }),
            (t.removeListener = function (e, t) {
              var n
              null == (n = this._nativeModule) || n.removeListeners(1), u.removeListener(e, t)
            }),
            (t.emit = function (e) {
              for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i]
              u.emit.apply(u, [e].concat(n))
            }),
            (t.removeAllListeners = function (e) {
              var t
              a()(null != e, '`NativeEventEmitter.removeAllListener()` requires a non-null argument.'),
                null == (t = this._nativeModule) || t.removeListeners(this.listenerCount(e)),
                u.removeAllListeners(e)
            }),
            (t.listenerCount = function (e) {
              return u.listenerCount(e)
            }),
            e
          )
        })()
    },
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'c', function () {
          return f
        })
      n('ho0z'), n('uFXj')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('MWbm'),
        o = n('GcQN'),
        s = n('PU7B'),
        c = n('/WPq'),
        l = n('78ol'),
        u = n('jV+4'),
        d = n('rHpw'),
        p = function (e) {
          var t = e.author,
            n = e.color,
            i = void 0 === n ? 'text' : n,
            a = e.size,
            o = void 0 === a ? 'subtext2' : a,
            s = e.style,
            c = e.withHoverCard,
            l = void 0 === c || c,
            d = e.withLink,
            p = void 0 !== d && d,
            m = e.withScreenName,
            f = void 0 !== m && m
          return r.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: i,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [h.authorUserName, s],
            withHoverCard: l,
            withLink: p,
            withScreenName: f,
          })
        },
        m = function (e) {
          var t = e.style
          return r.a.createElement(
            a.a,
            { style: [h.lightningBadge, t] },
            r.a.createElement(o.a, { style: h.lightningIcon }),
          )
        },
        f = function (e) {
          var t = e.icon
          return r.a.createElement(
            a.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? r.a.createElement(s.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? r.a.createElement(c.a, { style: h.placeholderIcon })
              : r.a.createElement(l.a, { style: h.placeholderIcon }),
          )
        },
        h = d.a.create(function (e) {
          return {
            authorUserName: { alignItems: 'center' },
            lightningBadge: {
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: e.borderRadii.small,
              position: 'absolute',
            },
            lightningIcon: {
              boxSizing: 'border-box',
              color: e.colors.white,
              height: e.spaces.space20,
              paddingVertical: '0.25rem',
              paddingHorizontal: '0.2rem',
            },
            middot: { paddingHorizontal: e.spaces.space4 },
            placeholderIcon: { color: e.colors.gray700, height: '2em' },
            placeholderIconContainer: {
              alignItems: 'center',
              borderWidth: e.borderWidths.small,
              borderStyle: 'solid',
              borderColor: e.colors.borderColor,
              borderRadius: e.borderRadii.xLarge,
              backgroundColor: e.colors.gray0,
              height: '100%',
              justifyContent: 'center',
            },
          }
        })
    },
    '3AAD': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        r = n.n(i),
        a = n('7n04'),
        o = r()(r()({}, a.a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = o
    },
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('yH/f')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('t62R'),
        o = n('EHV7'),
        s = n('rHpw'),
        c = s.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        l = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        p = n('MWbm'),
        m = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var f = s.a.create(function (e) {
        return {
          root: {
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          mainContent: { flexDirection: 'row' },
          subtext: { alignSelf: 'flex-start' },
          withSubtext: { alignSelf: 'center' },
          icon: { alignSelf: 'flex-start', height: e.spaces.space20, justifyContent: 'center' },
          iconArrow: { color: e.colors.text },
          rightControlGroup: { flexDirection: 'row', justifyContent: 'flex-end', flexGrow: 1, alignSelf: 'center' },
        }
      })
      t.b = function (e) {
        var t = e.icon,
          n = e.landingUrl,
          i = e.nativeID,
          h = e.rightControl,
          _ = e.style,
          v = e.subtext,
          b = e.testID,
          g = e.text,
          y = (function (e) {
            switch (e) {
              case m.TopicFilled:
                return r.a.createElement(o.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          E = v ? null : f.withSubtext,
          w = u.a.generate({
            backgroundColor: s.a.theme.colors.gray0,
            color: s.a.theme.colors.cellBackground,
            customFocusBackgroundColor: s.a.theme.colors.gray0,
            customHoverBackgroundColor: s.a.theme.colors.gray0,
            customPressedBackgroundColor: s.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: n ? w : null,
            link: null == n ? void 0 : n.url,
            nativeID: i,
            style: [f.root, _],
            testID: b,
          },
          r.a.createElement(
            p.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: f.mainContent },
            r.a.createElement(p.a, { style: f.icon }, y),
            r.a.createElement(
              a.b,
              { numberOfLines: 3, size: 'headline1', style: E, weight: 'heavy', withHashflags: !0 },
              g,
            ),
            r.a.createElement(
              p.a,
              { style: f.rightControlGroup },
              n ? r.a.createElement(p.a, { style: E }, r.a.createElement(l.a, { style: f.iconArrow })) : null,
              h ? r.a.createElement(p.a, null, h) : null,
            ),
          ),
          v
            ? r.a.createElement(
                a.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: f.subtext, withHashflags: !0 },
                v,
              )
            : null,
        )
      }
    },
    '7sPD': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LiveEventScreen', function () {
          return Ve
        })
      var i = n('yiKp'),
        r = n.n(i),
        a = n('VrFO'),
        o = n.n(a),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        _ = n.n(h),
        v = (n('2G9S'), n('hBpG'), n('7x/C'), n('1t7P'), n('jQ/y'), n('LW0h'), n('jwue'), n('+oxZ'), n('ERkP')),
        b = n.n(v),
        g = n('k49u'),
        y = n('zI2C'),
        E = n('6/RC'),
        w = n('es0u'),
        I = (n('KqXw'), n('WNMA'), n('MvUL'), n('5BYb'), n('ho0z'), n('zh9S')),
        S = n('kGix'),
        O = n('RrqW'),
        C = function (e, t, n) {
          return { isFullPageInterstitial: e, type: t, screenName: n }
        },
        k = function (e) {
          var t = e.isBlockedBy,
            n = void 0 !== t && t,
            i = e.isBlocking,
            r = void 0 !== i && i,
            a = e.isSensitive,
            o = void 0 !== a && a,
            s = e.screenName,
            c = []
          return (
            n
              ? c.push(C(!0, O.a.BLOCKED_BY, s))
              : (r && c.push(C(!0, O.a.BLOCKED, s)), o && c.push(C(!1, O.a.SENSITIVE))),
            c.length ? c : void 0
          )
        },
        A = n('lPpt'),
        P = n('tn7R'),
        N = n('wrlS'),
        T = n('G6rE'),
        x = n('RhWx'),
        D = n.n(x),
        L = (n('yH/f'), n('JtPf'), n('Ssj5')),
        V = 'liveEventInterstitials',
        R = 'rweb.liveEventInterstitials',
        j = Object.freeze({
          REQUEST: 'rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_REQUEST',
          SUCCESS: 'rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_SUCCESS',
          FAILURE: 'rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_FAILURE',
        }),
        M = { seenEvents: [], fetchStatus: S.a.NONE }
      var F = function () {
          return { type: j.FAILURE }
        },
        B = function (e) {
          return { type: j.SUCCESS, payload: e }
        },
        U = function (e) {
          return e[V].seenEvents
        },
        H = function () {
          return function (e, t, n) {
            var i = n.userPersistence
            return t()[V].fetchStatus === S.a.LOADED
              ? Promise.resolve()
              : (e({ type: j.REQUEST }),
                i
                  .get(R)
                  .then(function (t) {
                    null != t && t.seenEvents ? e(B(t.seenEvents)) : e(F())
                  })
                  .catch(function () {
                    e(F())
                  }))
          }
        },
        z = function (e) {
          return function (t, n) {
            var i = [].concat(D()(U(n())), [{ eventId: e, lastSeenTimestamp: Date.now() }])
            return (
              t(B(i)),
              t(
                (function (e) {
                  return function (t, n, i) {
                    return i.userPersistence.set(R, { seenEvents: e }).catch(function () {})
                  }
                })(i),
              )
            )
          }
        }
      L.a.register(
        _()({}, V, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case j.REQUEST:
              return r()(r()({}, e), {}, { fetchStatus: S.a.LOADING })
            case j.FAILURE:
              return r()(r()({}, e), {}, { fetchStatus: S.a.FAILED })
            case j.SUCCESS:
              return t.payload ? { seenEvents: t.payload, fetchStatus: S.a.LOADED } : e
            default:
              return e
          }
        }),
      )
      var W = n('rxPX'),
        q = n('0KEI'),
        G = n('zlxh'),
        X = function (e, t) {
          return t.match.params.eventId
        },
        Y = function (e, t) {
          var n
          return [].concat(null === (n = t.location.query) || void 0 === n ? void 0 : n.timeline)[0]
        },
        K = function (e, t) {
          return A.a.select(e, X(0, t))
        },
        Q = function (e, t) {
          return A.a.selectFetchStatus(e, X(0, t))
        },
        J = function (e, t) {
          var n = ((A.a.selectErrors(e) || {})[X(0, t)] || {}).errors,
            i = (void 0 === n ? [] : n).find(function (e) {
              return e.code === g.a.BlockedUserError
            })
          return i && i.message && i.message.replace('@', '')
        },
        Z = function (e, t) {
          return A.a.selectIsTOO(e, X(0, t))
        },
        $ = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.promotedCardState
        },
        ee = function (e, t) {
          return (function (e, t) {
            var n = U(e),
              i =
                null == n
                  ? void 0
                  : n.find(function (e) {
                      return e.eventId === t
                    })
            return !!i && Date.now() - i.lastSeenTimestamp < 24192e5
          })(e, X(0, t))
        },
        te = function (e) {
          return r()({}, e ? { loggedInUserAvatarURI: e.profile_image_url_https, loggedInUserName: e.name } : null)
        },
        ne = Object(W.a)()
          .propsFromState(function () {
            return {
              eventId: X,
              event: K,
              blockedByScreenName: J,
              fetchStatus: Q,
              liveEventTimelineId: Y,
              promotedCardState: $,
              loggedInUser: T.e.selectLoggedInUser,
              isTOO: Z,
              featureSwitches: N.d,
              hasSeenEvent: ee,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.blockedByScreenName,
              n = e.event,
              i = e.eventId,
              a = e.featureSwitches,
              o = e.fetchStatus,
              s = e.hasSeenEvent,
              c = e.isTOO,
              l = e.liveEventTimelineId,
              u = e.loggedInUser,
              d = e.promotedCardState,
              p = (function (e, t, n, i) {
                return r()(
                  {
                    liveEventDetails: { eventId: e },
                    fetchStatus: t ? S.a.LOADED : n,
                    refreshStatus: n,
                    timelineDetails: {
                      composeDetails: { defaultText: '' },
                      eventId: e,
                      timelineId: G.b,
                      timelineIndex: 0,
                      timelineLinks: [],
                    },
                    hasSeenEvent: !1,
                    interstitialOrderToDisplay: t ? k({ isBlockedBy: !0, screenName: t }) : void 0,
                    isTOO: !1,
                    isUserSuspended: !1,
                  },
                  te(i),
                )
              })(i, t, o, u)
            if (!n) return p
            var m = Object(G.o)(n),
              f = Object(G.i)(n, m, d),
              h = Object(G.k)(i, n),
              _ = Object(G.n)(n),
              v = Object(G.r)(i, n, l, a),
              b = (function (e) {
                var t = e || {},
                  n = t.liveEventDetails,
                  i = void 0 === n ? {} : n,
                  r = t.users,
                  a = i.attribution_user_id
                return (
                  !!a &&
                  !Object(P.a)(r || {}).some(function (e) {
                    return e.id_str === a
                  })
                )
              })(n),
              g = h.author || {},
              y = g.blocked_by,
              E = g.blocking,
              w = g.screen_name,
              I = n.liveEventDetails.sensitive,
              O = k({ isBlockedBy: y, isBlocking: E, isSensitive: I, screenName: w })
            return r()(
              r()(r()({}, p), te(u)),
              {},
              {
                liveEventDetails: h,
                fetchStatus: n ? S.a.LOADED : o,
                refreshStatus: o,
                interstitialOrderToDisplay: O,
                isTOO: c,
                isUserSuspended: b,
                serverPollingIntervalSeconds: _,
                hasSeenEvent: s,
                scoreData: m,
                carousel: f.length > 0 ? f : void 0,
                timelineDetails: v,
              },
            )
          })
          .propsFromActions(function () {
            return {
              addSeenEventId: z,
              createLocalApiErrorHandler: Object(q.createLocalApiErrorHandlerWithContextFactory)('LIVE_EVENT_SCREEN'),
              fetchLiveEvent: A.a.fetchOne,
              fetchSeenEventIds: H,
              googleAnalyticsPageView: I.googleAnalyticsPageView,
              remindMeButtonSubscribe: A.a.subscribe,
              remindMeButtonUnsubscribe: A.a.unSubscribe,
              scribeAction: I.scribeAction,
              scribePageImpression: I.scribePageImpression,
            }
          }),
        ie = (n('0zG9'), n('E4zi')),
        re = n('muX9'),
        ae = function (e) {
          var t,
            n = e.liveEventDetails,
            i = e.slate,
            r = n.category,
            a = n.description,
            o = n.eventId,
            s = n.timeString,
            c = n.title,
            l = null == i || null === (t = i.image) || void 0 === t ? void 0 : t.url,
            u = n.author ? Object(ie.a)(n.author) : null,
            d = JSON.stringify(
              {
                '@context': 'http://schema.org',
                '@type': 'NewsArticle',
                name: c,
                description: a,
                genre: r,
                identifier: o,
                datePublished: s,
                author: u,
                image: l,
              },
              null,
              2,
            )
          return b.a.createElement(re.a, { script: [{ type: 'application/ld+json', innerHTML: d }] })
        },
        oe = (n('z84I'), n('/Ikv')),
        se = n('BcsE'),
        ce = function (e) {
          var t = e.content,
            n = e.name
          return t || Object(se.a)(t) ? b.a.createElement('meta', { content: t, key: n, name: n }) : null
        },
        le = Object.freeze({ broadcast: 'broadcast', video: 'video', image: 'image' }),
        ue = function (e) {
          var t = e.carousel,
            n = e.liveEventDetails,
            i = e.timelineDetails,
            r = n.description,
            a = n.eventId,
            o = n.title,
            s = i.timelineId,
            c = t[Object(G.q)(t)],
            l = (c || {}).slate,
            u = (function (e) {
              var t,
                n = e.carouselItemInfo.type
              return (
                n === G.e.LIVE_BROADCAST || n === G.e.REPLAY_BROADCAST
                  ? (t = le.broadcast)
                  : n === G.e.VOD || n === G.e.GIF
                  ? (t = le.video)
                  : n === G.e.SLATE && (t = le.image),
                t
              )
            })(c)
          return o && r && l
            ? b.a.createElement(
                re.a,
                null,
                (function (e, t, n, i, r) {
                  return [
                    { name: 'twitter:card', content: oe.a.CardNames.LIVE_EVENT },
                    { name: 'twitter:text:event_id', content: n },
                    { name: 'twitter:text:event_title', content: e },
                    { name: 'twitter:text:event_subtitle', content: t },
                    { name: 'twitter:text:event_timeline_id', content: r },
                    { name: 'twitter:image:event_thumbnail:src', content: i.image.url },
                    { name: 'twitter:image:event_thumbnail:height', content: i.image.height },
                    { name: 'twitter:image:event_thumbnail:width', content: i.image.width },
                  ]
                })(o, r, a, l, s).map(ce),
                (function (e, t, n, i) {
                  var r,
                    a,
                    o,
                    s,
                    c,
                    l,
                    u,
                    d,
                    p,
                    m,
                    f,
                    h,
                    _,
                    v,
                    b,
                    g,
                    y,
                    E,
                    w,
                    I,
                    S,
                    O,
                    C,
                    k,
                    A,
                    P,
                    N,
                    T,
                    x,
                    D,
                    L,
                    V,
                    R,
                    j
                  return [
                    { name: 'twitter:text:event_category', content: e.category },
                    {
                      name: 'twitter:text:broadcast_id',
                      content: null === (r = n.mediaDetails) || void 0 === r ? void 0 : r.broadcastId,
                    },
                    {
                      name: 'twitter:text:broadcast_media_key',
                      content: null === (a = n.mediaDetails) || void 0 === a ? void 0 : a.broadcastMediaKey,
                    },
                    {
                      name: 'twitter:text:broadcast_media_id',
                      content:
                        (null === (o = n.mediaDetails) || void 0 === o ? void 0 : o.broadcastId) &&
                        (null === (s = n.mediaDetails) || void 0 === s ? void 0 : s.mediaId),
                    },
                    {
                      name: 'twitter:text:broadcast_title',
                      content: null === (c = n.mediaDetails) || void 0 === c ? void 0 : c.broadcastTitle,
                    },
                    {
                      name: 'twitter:text:broadcaster_twitter_id',
                      content: null === (l = n.mediaDetails) || void 0 === l ? void 0 : l.broadcastTwitterId,
                    },
                    {
                      name: 'twitter:text:broadcaster_display_name',
                      content: null === (u = n.mediaDetails) || void 0 === u ? void 0 : u.broadcastDisplayName,
                    },
                    {
                      name: 'twitter:text:broadcaster_username',
                      content: null === (d = n.mediaDetails) || void 0 === d ? void 0 : d.broadcastUsername,
                    },
                    {
                      name: 'twitter:text:broadcast_width',
                      content: null === (p = n.mediaDetails) || void 0 === p ? void 0 : p.broadcastWidth,
                    },
                    {
                      name: 'twitter:text:broadcast_height',
                      content: null === (m = n.mediaDetails) || void 0 === m ? void 0 : m.broadcastHeight,
                    },
                    {
                      name: 'twitter:text:broadcast_source',
                      content: null === (f = n.mediaDetails) || void 0 === f ? void 0 : f.broadcastSource,
                    },
                    {
                      name: 'twitter:text:broadcast_orientation',
                      content: null === (h = n.mediaDetails) || void 0 === h ? void 0 : h.broadcastOrientation,
                    },
                    {
                      name: 'twitter:user:author:id',
                      content: null === (_ = e.author) || void 0 === _ ? void 0 : _.id_str,
                    },
                    {
                      name: 'twitter:text:event_badge',
                      content: null === (v = n.slate) || void 0 === v ? void 0 : v.label,
                    },
                    {
                      name: 'twitter:string:media_tweet_id',
                      content:
                        null === (b = n.mediaDetails) || void 0 === b || null === (g = b.coverTweet) || void 0 === g
                          ? void 0
                          : g.id_str,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:src',
                      content: null === (y = n.slate) || void 0 === y ? void 0 : y.image.url,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:height',
                      content: null === (E = n.slate) || void 0 === E ? void 0 : E.image.height,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:width',
                      content: null === (w = n.slate) || void 0 === w ? void 0 : w.image.width,
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:w',
                      content:
                        (null === (I = n.slate) || void 0 === I || null === (S = I.cropCandidates) || void 0 === S
                          ? void 0
                          : S.length) && (null === (O = n.slate) || void 0 === O ? void 0 : O.cropCandidates[0].w),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:h',
                      content:
                        (null === (C = n.slate) || void 0 === C || null === (k = C.cropCandidates) || void 0 === k
                          ? void 0
                          : k.length) && (null === (A = n.slate) || void 0 === A ? void 0 : A.cropCandidates[0].h),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:x',
                      content:
                        (null === (P = n.slate) || void 0 === P || null === (N = P.cropCandidates) || void 0 === N
                          ? void 0
                          : N.length) && (null === (T = n.slate) || void 0 === T ? void 0 : T.cropCandidates[0].x),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:y',
                      content:
                        (null === (x = n.slate) || void 0 === x || null === (D = x.cropCandidates) || void 0 === D
                          ? void 0
                          : D.length) && (null === (L = n.slate) || void 0 === L ? void 0 : L.cropCandidates[0].y),
                    },
                    {
                      name: 'twitter:text:remind_me_notification_id',
                      content: null === (V = e.remindMeSubscription) || void 0 === V ? void 0 : V.notification_id,
                    },
                    {
                      name: 'twitter:image:broadcast_thumbnail:src',
                      content: null === (R = n.mediaDetails) || void 0 === R ? void 0 : R.broadcastThumbnail,
                    },
                    {
                      name: 'twitter:string:broadcast_replay_edited_start_time',
                      content: null === (j = n.mediaDetails) || void 0 === j ? void 0 : j.broadcastReplayStartTime,
                    },
                    { name: 'twitter:string:media_type', content: i },
                  ]
                })(n, 0, c, u).map(ce),
              )
            : null
        },
        de = n('QtuH'),
        pe = n('LVU8'),
        me =
          (n('+KXO'),
          function (e) {
            return { items: [fe(e)] }
          }),
        fe = function (e) {
          var t = e.carouselLength,
            n = e.carouselPosition,
            i = e.includeTimelineSource,
            a = void 0 !== i && i,
            o = e.liveEventDetails,
            s = e.mediaDetails,
            c = e.selectedTimeline,
            l = e.tilePosition,
            u = e.timelineTabPosition,
            d = o.eventId,
            p = o.remindMeSubscription,
            m = (s || {}).broadcastId,
            f = c || {},
            h = f.timelineId,
            _ = f.timelineSourceId,
            v = f.timelineSourceType,
            b = p || {},
            g = b.notification_id,
            y = b.subscribed,
            E = b.toggle_visible,
            w = r()({}, null),
            I = r()({}, null),
            S = r()({}, null)
          return (
            d && (I.host_event_id = d),
            h && (I.timeline_id = h),
            a && ((I.timeline_source_id = _), (I.timeline_source_type = v)),
            void 0 !== u && (I.timeline_tab_position = u),
            t && ((I.carousel_count = t), (I.carousel_position = n)),
            void 0 !== l && (I.tile_position = l),
            p && ((I.remind_me_notification_id = g), (I.remind_me_subscribed = y), (I.remind_me_toggle_visible = E)),
            m && (S.host_broadcast_id = m),
            Object.keys(I).length > 0 && (w.live_video_event_details = I),
            Object.keys(S).length > 0 && (w.live_broadcast_details = S),
            w
          )
        },
        he = n('9Bb1'),
        _e = n('3XMw'),
        ve = n.n(_e),
        be = n('5S/X'),
        ge = n('XvPy'),
        ye = n('Vgm9'),
        Ee = n('VTxf'),
        we = n('rJoH'),
        Ie = n('yoO3'),
        Se = n('EskI'),
        Oe = n('VS6U'),
        Ce = n('HBr9'),
        ke = n('MWbm'),
        Ae = n('G8HL'),
        Pe = n('t62R'),
        Ne = n('rHpw'),
        Te = n('v6aA'),
        xe = n('7JQg'),
        De = n('zrc3'),
        Le = n('oQhu'),
        Ve = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              _()(u()(e), '_carouselIndexReceived', !1),
              _()(
                u()(e),
                '_defaultPollingInterval',
                e.context.featureSwitches.getNumberValue(
                  'live_event_timeline_default_refresh_rate_interval_seconds',
                  30,
                ),
              ),
              _()(
                u()(e),
                '_minPollingInterval',
                e.context.featureSwitches.getNumberValue(
                  'live_event_timeline_minimum_refresh_rate_interval_seconds',
                  10,
                ),
              ),
              _()(u()(e), '_newSegmentedControlDesign', !1),
              _()(
                u()(e),
                '_shouldHonourServerRefresh',
                e.context.featureSwitches.isTrue('live_event_timeline_server_controlled_refresh_rate_enabled'),
              ),
              _()(
                u()(e),
                '_eventsSeenCacheEnabled',
                e.context.featureSwitches.isTrue('live_event_interstitial_seen_cache_enabled'),
              ),
              _()(u()(e), 'state', { isPlayerFullscreen: !1, selectedCarouselItemId: void 0 }),
              _()(u()(e), '_renderPrimaryContent', function (t) {
                var n = t.isWide,
                  i = e.props,
                  r = i.carousel,
                  a = i.fetchStatus,
                  o = i.history,
                  s = i.isTOO,
                  c = i.liveEventDetails,
                  l = i.refreshStatus,
                  u = i.remindMeButtonSubscribe,
                  d = i.remindMeButtonUnsubscribe,
                  p = i.scoreData,
                  m = i.timelineDetails,
                  f = e.state.isPlayerFullscreen,
                  h = ve.a.c08e7935,
                  _ = e._getPollingIntervalMs(),
                  v = e._getInterstitialsToDisplay()
                return b.a.createElement(
                  Ce.a,
                  { collectionName: h },
                  b.a.createElement(ge.a, {
                    carousel: r,
                    fetchStatus: a,
                    history: o,
                    interstitialOrderToDisplay: v,
                    isPlayerFullscreen: f,
                    isTOO: s,
                    isWide: n,
                    liveEventDetails: c,
                    onChildScribeAction: e._handleChildScribeAction,
                    onFetch: e._handleInitialFetch,
                    onFullscreenChange: e._handleFullscreenChange,
                    onInterstitialSubmit: e._handleInterstitialSubmit,
                    onSelectedCarouselItemChange: e._handleSelectedCarouselItemChanged,
                    onTimelinePoll: e._handleTimelinePoll,
                    pollingIntervalMs: _,
                    refreshStatus: l,
                    remindMeButtonSubscribe: u,
                    remindMeButtonUnsubscribe: d,
                    scoreData: p,
                    timelineDetails: m,
                    withFloatingComposeButton: !0,
                  }),
                )
              }),
              _()(u()(e), '_getSelectedItem', function () {
                var t = e.props.carousel,
                  n = e.state.selectedCarouselItemId
                return Object(G.p)(t, n)
              }),
              _()(u()(e), '_getSelectedItemIndex', function () {
                var t = e.props.carousel,
                  n = e._getSelectedItem()
                return t && n
                  ? Object(De.a)(t, function (e) {
                      return e.id === n.id
                    })
                  : void 0
              }),
              _()(
                u()(e),
                '_getScribeProviderMetadata',
                Object(Le.a)(function (e, t, n, i, a) {
                  var o = n.timelineId,
                    s = n.timelineIndex,
                    c = n.timelineLinks,
                    l = (a || {}).mediaDetails,
                    u =
                      c &&
                      c.find(function (e) {
                        return e.timelineId === o
                      })
                  return r()(
                    { event_id: t.eventId },
                    me({
                      carouselLength: e && e.length,
                      carouselPosition: i,
                      liveEventDetails: t,
                      mediaDetails: l,
                      timelineTabPosition: s,
                      selectedTimeline: u,
                    }),
                  )
                }),
              ),
              _()(u()(e), '_handleInitialFetch', function () {
                e._fetchLiveEvent()
              }),
              _()(u()(e), '_fetchLiveEvent', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchLiveEvent)(t.liveEventDetails.eventId).catch(
                  n(_()({}, g.a.GenericNotFound, { customAction: pe.c })),
                )
              }),
              _()(u()(e), '_fetchSeenIds', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchSeenEventIds)().catch(n)
              }),
              _()(u()(e), '_handleInterstitialSubmit', function (t) {
                var n = t.type,
                  i = e.props,
                  r = i.addSeenEventId,
                  a = i.createLocalApiErrorHandler,
                  o = i.liveEventDetails.eventId
                n === O.a.SENSITIVE && e._eventsSeenCacheEnabled && r(o).catch(a)
              }),
              _()(u()(e), '_handleTimelinePoll', function () {
                e._fetchLiveEvent()
              }),
              _()(u()(e), '_handleFullscreenChange', function (t) {
                var n = t.isPlayerFullscreen
                e.setState({ isPlayerFullscreen: n })
              }),
              _()(u()(e), '_handleOverflowButtonClickScribe', function () {
                return e._scribeActionWithEventItems({ section: 'live_event_header', element: 'more', action: 'click' })
              }),
              _()(u()(e), '_handleSelectedCarouselItemChanged', function (t) {
                e.setState({ selectedCarouselItemId: t.id })
              }),
              _()(u()(e), '_handleChildScribeAction', function (t, n) {
                return e._scribeActionWithEventItems(t, n)
              }),
              _()(u()(e), '_scribeTimelineImpression', function () {
                var t = e.props,
                  n = t.carousel,
                  i = t.liveEventDetails,
                  a = t.scribeAction,
                  o = t.scribeNamespace,
                  s = t.timelineDetails,
                  c = s.timelineId,
                  l = s.timelineLinks,
                  u = e._getSelectedItemIndex(),
                  d = (e._getSelectedItem() || {}).mediaDetails,
                  p = l.find(function (e) {
                    return e && e.timelineId === c
                  })
                p &&
                  a(
                    r()(r()({}, o), {}, { action: 'impression' }),
                    me({
                      liveEventDetails: i,
                      includeTimelineSource: !0,
                      mediaDetails: d,
                      selectedTimeline: p,
                      carouselLength: n && n.length,
                      carouselPosition: u,
                    }),
                  )
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleInitialFetch(), this._fetchSeenIds()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    i = n.liveEventDetails.eventId,
                    r = n.timelineDetails,
                    a = r.timelineId,
                    o = r.timelineLinks,
                    s = e.liveEventDetails.eventId,
                    c = e.timelineDetails,
                    l = c.timelineId,
                    u = c.timelineLinks
                  s !== i
                    ? this._handleInitialFetch()
                    : l !== a && (this._scribeTimelineTabChange(), this._scribeTimelineImpression()),
                    0 === u.length && o.length > 0 && this._scribeTimelineTabImpressions()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.carousel,
                    n = e.history,
                    i = e.isUserSuspended,
                    r = e.liveEventDetails,
                    a = e.timelineDetails,
                    o = r.shortTitle,
                    s = r.title,
                    c = a.composeDetails,
                    l = this.state.isPlayerFullscreen
                  if (i) return b.a.createElement(Ee.a, null)
                  var u = s || G.f,
                    d = this._renderScoreCard(),
                    p = o ? b.a.createElement(Pe.b, { withHashflags: !0 }, o) : G.g,
                    m = b.a.createElement(w.a, { withWhoToFollow: !1 }, d),
                    f = this.context.loggedInUserId && !l ? this._renderRightButtons() : void 0,
                    h = this._getScribeProviderMetadata(t, r, a, this._getSelectedItemIndex(), this._getSelectedItem())
                  return b.a.createElement(
                    xe.c,
                    { data: h },
                    b.a.createElement(
                      Ie.a,
                      null,
                      E.canUseDOM ? null : this._renderPageMeta(u),
                      b.a.createElement(Oe.a, {
                        backLocation: '/',
                        composeOptions: c,
                        documentTitle: u,
                        headerless: l,
                        history: n,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: f,
                        sidebarContent: m,
                        title: p,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderPageMeta',
                value: function (e) {
                  var t,
                    n,
                    i,
                    r,
                    a,
                    o,
                    s = this.props,
                    c = s.carousel,
                    l = s.liveEventDetails,
                    u = s.timelineDetails,
                    d = l.description,
                    p = l.eventId,
                    m = this._getSelectedItem(),
                    f = p && 'twitter://events/timeline/'.concat(p),
                    h = p && 'https://twitter.com/i/events/'.concat(p || '')
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    d ? b.a.createElement(he.a, { description: d }) : null,
                    b.a.createElement(we.a, {
                      canonical: h,
                      description: d,
                      image:
                        null == m || null === (t = m.slate) || void 0 === t || null === (n = t.image) || void 0 === n
                          ? void 0
                          : n.url,
                      imageH:
                        null == m || null === (i = m.slate) || void 0 === i || null === (r = i.image) || void 0 === r
                          ? void 0
                          : r.height,
                      imageW:
                        null == m || null === (a = m.slate) || void 0 === a || null === (o = a.image) || void 0 === o
                          ? void 0
                          : o.width,
                      title: e,
                      type: 'article',
                    }),
                    be.b && null != m && m.slate
                      ? b.a.createElement(ae, { liveEventDetails: l, slate: null == m ? void 0 : m.slate })
                      : null,
                    b.a.createElement(y.a, { deepLink: f }),
                    c ? b.a.createElement(ue, { carousel: c, liveEventDetails: l, timelineDetails: u }) : null,
                  )
                },
              },
              {
                key: '_renderRightButtons',
                value: function () {
                  var e = this.props,
                    t = e.isTOO,
                    n = e.liveEventDetails,
                    i = n.author,
                    a = n.eventId,
                    o = n.title,
                    s = e.scribeNamespace,
                    c = e.timelineDetails.hashtag
                  return b.a.createElement(
                    ke.a,
                    { style: Re.rightButtonContainer },
                    b.a.createElement(de.a, { author: i, hashtag: c, id: a, title: o }),
                    t
                      ? null
                      : b.a.createElement(ye.a, {
                          author: i,
                          eventId: a,
                          onPress: this._handleOverflowButtonClickScribe,
                          redirectOnDelete: i ? '/'.concat(i.screen_name, '/moments') : void 0,
                          scribeNamespace: r()(r()({}, s), {}, { section: 'live_event_header' }),
                          style: Re.overflowButton,
                          title: o,
                        }),
                  )
                },
              },
              {
                key: '_renderScoreCard',
                value: function () {
                  var e = this.props.scoreData
                  return e ? b.a.createElement(Se.a, { scoreData: e, withContainer: !0, withHeader: !0 }) : null
                },
              },
              {
                key: '_getPollingIntervalMs',
                value: function () {
                  var e = this.props.serverPollingIntervalSeconds,
                    t = void 0 === e ? 0 : e
                  return (
                    1e3 *
                    (this._shouldHonourServerRefresh
                      ? Math.max(t, this._minPollingInterval)
                      : this._defaultPollingInterval)
                  )
                },
              },
              {
                key: '_getInterstitialsToDisplay',
                value: function () {
                  var e = this.props,
                    t = e.hasSeenEvent,
                    n = e.interstitialOrderToDisplay
                  return this._eventsSeenCacheEnabled && t
                    ? null == n
                      ? void 0
                      : n.filter(function (e) {
                          return e.type !== O.a.SENSITIVE
                        })
                    : n
                },
              },
              {
                key: '_scribeActionWithEventItems',
                value: function (e, t) {
                  var n = this.props,
                    i = n.carousel,
                    a = n.liveEventDetails,
                    o = n.scribeAction,
                    s = n.scribeNamespace,
                    c = n.timelineDetails,
                    l = c.timelineId,
                    u = c.timelineLinks,
                    d = this._getSelectedItemIndex(),
                    p = (this._getSelectedItem() || {}).mediaDetails,
                    m = u.find(function (e) {
                      return e.timelineId === l
                    })
                  o(
                    r()(r()({}, s), e),
                    me(
                      r()(
                        {
                          liveEventDetails: a,
                          mediaDetails: p,
                          selectedTimeline: m,
                          carouselLength: i && i.length,
                          carouselPosition: d,
                        },
                        t,
                      ),
                    ),
                  )
                },
              },
              {
                key: '_scribeTimelineTabChange',
                value: function () {
                  var e = this.props,
                    t = e.liveEventDetails,
                    n = e.scribeAction,
                    i = e.scribeNamespace,
                    a = e.timelineDetails,
                    o = a.timelineId,
                    s = a.timelineIndex,
                    c = a.timelineLinks,
                    l = (this._getSelectedItem() || {}).mediaDetails,
                    u =
                      c &&
                      c.find(function (e) {
                        return e.timelineId === o
                      })
                  n(
                    r()(r()({}, i), {}, { component: o, element: 'tab', action: 'selected' }),
                    me({
                      liveEventDetails: t,
                      timelineTabPosition: s,
                      mediaDetails: l,
                      selectedTimeline: u,
                      includeTimelineSource: !0,
                    }),
                  )
                },
              },
              {
                key: '_scribeTimelineTabImpressions',
                value: function () {
                  var e = this.props,
                    t = e.liveEventDetails,
                    n = e.scribeAction,
                    i = e.scribeNamespace
                  e.timelineDetails.timelineLinks.forEach(function (e) {
                    var a = r()(r()({}, i), {}, { component: 'tabs', element: e.timelineId, action: 'impression' })
                    n(a, me({ liveEventDetails: t }))
                  })
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      _()(Ve, 'contextType', Te.a)
      var Re = Ne.a.create(function (e) {
        return {
          rightButtonContainer: { flexDirection: 'row' },
          overflowButton: { marginStart: e.spaces.space12 },
          segmentedControl: {
            borderBottomWidth: '1px',
            borderBottomStyle: 'solid',
            borderBottomColor: e.colors.borderColor,
          },
        }
      })
      t.default = Object(xe.a)({ page: 'live_event_timeline' })(ne(Object(Ae.a)(Ve)))
    },
    '7zxR': function (e, t, n) {
      'use strict'
      var i,
        r = 0.1,
        a = 'function' == typeof Float32Array
      function o(e, t) {
        return 1 - 3 * t + 3 * e
      }
      function s(e, t) {
        return 3 * t - 6 * e
      }
      function c(e) {
        return 3 * e
      }
      function l(e, t, n) {
        return ((o(t, n) * e + s(t, n)) * e + c(t)) * e
      }
      function u(e, t, n) {
        return 3 * o(t, n) * e * e + 2 * s(t, n) * e + c(t)
      }
      function d(e, t, n, i) {
        if (!(e >= 0 && e <= 1 && n >= 0 && n <= 1)) throw new Error('bezier x values must be in [0, 1] range')
        var o = a ? new Float32Array(11) : new Array(11)
        if (e !== t || n !== i) for (var s = 0; s < 11; ++s) o[s] = l(s * r, e, n)
        function c(t) {
          for (var i = 0, a = 1; 10 !== a && o[a] <= t; ++a) i += r
          --a
          var s = i + ((t - o[a]) / (o[a + 1] - o[a])) * r,
            c = u(s, e, n)
          return c >= 0.001
            ? (function (e, t, n, i) {
                for (var r = t, a = 0; a < 4; ++a) {
                  var o = u(r, n, i)
                  if (0 === o) return r
                  r -= (l(r, n, i) - e) / o
                }
                return r
              })(t, s, e, n)
            : 0 === c
            ? s
            : (function (e, t, n, i, r) {
                var a,
                  o,
                  s = 0,
                  c = t,
                  u = n
                do {
                  ;(a = l((o = c + (u - c) / 2), i, r) - e) > 0 ? (u = o) : (c = o)
                } while (Math.abs(a) > 1e-7 && ++s < 10)
                return o
              })(t, i, i + r, e, n)
        }
        return function (r) {
          return e === t && n === i ? r : 0 === r ? 0 : 1 === r ? 1 : l(c(r), t, i)
        }
      }
      var p = (function () {
        function e() {}
        return (
          (e.step0 = function (e) {
            return e > 0 ? 1 : 0
          }),
          (e.step1 = function (e) {
            return e >= 1 ? 1 : 0
          }),
          (e.linear = function (e) {
            return e
          }),
          (e.ease = function (t) {
            return i || (i = e.bezier(0.42, 0, 1, 1)), i(t)
          }),
          (e.quad = function (e) {
            return e * e
          }),
          (e.cubic = function (e) {
            return e * e * e
          }),
          (e.poly = function (e) {
            return function (t) {
              return Math.pow(t, e)
            }
          }),
          (e.sin = function (e) {
            return 1 - Math.cos((e * Math.PI) / 2)
          }),
          (e.circle = function (e) {
            return 1 - Math.sqrt(1 - e * e)
          }),
          (e.exp = function (e) {
            return Math.pow(2, 10 * (e - 1))
          }),
          (e.elastic = function (e) {
            void 0 === e && (e = 1)
            var t = e * Math.PI
            return function (e) {
              return 1 - Math.pow(Math.cos((e * Math.PI) / 2), 3) * Math.cos(e * t)
            }
          }),
          (e.back = function (e) {
            return (
              void 0 === e && (e = 1.70158),
              function (t) {
                return t * t * ((e + 1) * t - e)
              }
            )
          }),
          (e.bounce = function (e) {
            if (e < 1 / 2.75) return 7.5625 * e * e
            if (e < 2 / 2.75) {
              var t = e - 1.5 / 2.75
              return 7.5625 * t * t + 0.75
            }
            if (e < 2.5 / 2.75) {
              var n = e - 2.25 / 2.75
              return 7.5625 * n * n + 0.9375
            }
            var i = e - 2.625 / 2.75
            return 7.5625 * i * i + 0.984375
          }),
          (e.bezier = function (e, t, n, i) {
            return d(e, t, n, i)
          }),
          (e.in = function (e) {
            return e
          }),
          (e.out = function (e) {
            return function (t) {
              return 1 - e(1 - t)
            }
          }),
          (e.inOut = function (e) {
            return function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
          }),
          e
        )
      })()
      t.a = p
    },
    '8/3a': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y')
      var i = n('0mK8'),
        r = n('ERkP'),
        a = n.n(r),
        o = (n('jQ3i'), n('x4t0'), n('tVqn'), n('z84I'), n('3XMw')),
        s = n.n(o),
        c = n('caTy'),
        l = n('MWbm'),
        u = n('rHpw'),
        d = n('t62R'),
        p = n('yrzJ'),
        m = n('XrEN'),
        f = n('Q0VY'),
        h = n('FiRh'),
        _ = u.a.create(function (e) {
          return { description: { marginTop: e.spaces.space12 } }
        }),
        v = function (e, t, n) {
          return n && !m.a.VIDEO_TYPES.includes(t)
            ? (function (e) {
                var t,
                  n = e.url ? (null === (t = Object(c.a)(e.url)) || void 0 === t ? void 0 : t.pathname) : void 0
                return a.a.createElement(d.b, { color: 'gray700', link: n }, e.text)
              })(n)
            : e && m.a.VIDEO_TYPES.includes(t)
            ? (function (e, t) {
                return a.a.createElement(
                  d.b,
                  { color: 'gray700', link: e.permalink },
                  b(t, { screenName: a.a.createElement(p.a, { screenName: e.user.screen_name }) }),
                )
              })(e, t)
            : null
        },
        b = function (e, t) {
          switch (e) {
            case 'animated_gif':
              return a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a5d9d070' }, t.screenName)
            case 'video':
            case 'vine':
              return a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'i9606e32' }, t.screenName)
            default:
              return a.a.createElement(s.a.I18NFormatMessage, { $i18n: 'i1a64d47' }, t.screenName)
          }
        },
        g = function (e) {
          var t = e.coverTweet,
            n = e.description,
            i = e.descriptionEntities,
            r = e.imageAttribution,
            o = e.mediaType,
            s = e.pivotText,
            c = n ? n.trim() : void 0,
            u = i
              ? {
                  description: {
                    urls: i.map(function (e) {
                      return { display_url: e.displayUrl, expanded_url: e.expandedUrl, url: e.url, indices: e.indices }
                    }),
                  },
                }
              : void 0,
            p = c ? f.a.descriptionTextParts(c, u) : []
          return a.a.createElement(
            l.a,
            { style: _.description },
            p.length
              ? a.a.createElement(
                  d.b,
                  null,
                  p.map(function (e, t) {
                    return a.a.createElement(h.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            v(t, o, r),
            s ? a.a.createElement(d.b, { color: 'gray700' }, s) : null,
          )
        },
        y = n('pjBI'),
        E = u.a.create(function (e) {
          return {
            title: { alignItems: 'center', flexDirection: 'row', paddingTop: e.spaces.space4 },
            timeString: { flexShrink: 0 },
            timeStringMargin: { marginTop: e.spaces.space12 },
            remindMeButton: { marginTop: e.spaces.space12 },
          }
        })
      t.a = function (e) {
        var t = e.author,
          n = e.coverTweet,
          r = e.description,
          o = e.descriptionEntities,
          s = e.imageAttribution,
          c = e.isTOO,
          u = e.mediaType,
          p = e.pivotText,
          m = e.preTitle,
          f = e.remindMeButton,
          h = e.time,
          _ = e.title,
          v = e.withHashflags,
          b = function () {
            return t
              ? a.a.createElement(
                  l.a,
                  null,
                  a.a.createElement(i.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  h ? w(!0) : null,
                )
              : null
          },
          w = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return a.a.createElement(
              d.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [E.timeString, e && E.timeStringMargin] },
              h,
            )
          },
          I = function () {
            return m
              ? a.a.createElement(
                  y.a,
                  null,
                  a.a.createElement(d.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, m),
                  h ? w() : null,
                )
              : null
          }
        return a.a.createElement(
          a.a.Fragment,
          null,
          c && m ? I() : b() || I(),
          a.a.createElement(d.b, { dir: 'auto', size: 'title4', style: E.title, weight: 'heavy', withHashflags: v }, _),
          r || n || s
            ? a.a.createElement(g, {
                coverTweet: n,
                description: r,
                descriptionEntities: o,
                imageAttribution: s,
                mediaType: u,
                pivotText: p,
              })
            : null,
          f ? a.a.createElement(l.a, { style: E.remindMeButton }, f) : null,
        )
      }
    },
    '8FZA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BroadcastScreen', function () {
          return Le
        })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('tVqn'), n('2G9S'), n('ho0z'), n('Blm6'), n('uFXj'), n('ERkP')),
        _ = n.n(h),
        v = n('k49u'),
        b = n('zI2C'),
        g = 'NOT_STARTED',
        y = 'RUNNING',
        E = 'TIMED_OUT',
        w = 'ENDED',
        I = n('RhWx'),
        S = n.n(I),
        O = (n('z84I'), n('/Ikv')),
        C = n('muX9'),
        k = function (e) {
          return []
            .concat(
              ((n = e),
              (i = n.id),
              (r = n.timecode),
              (a = n.title),
              (o = n.url),
              [
                { name: 'twitter:card', content: O.a.CardNames.BROADCAST },
                { name: 'twitter:url:broadcast_url', content: o },
                { name: 'twitter:text:broadcast_id', content: i },
                { name: 'twitter:text:broadcast_title', content: a },
                { name: 'twitter:text:broadcast_timecode', content: r },
                { name: 'twitter:image:broadcast_pre_live_slate:width', content: 1280 },
                { name: 'twitter:image:broadcast_pre_live_slate:height', content: 720 },
                { name: 'twitter:maxage', content: 210 },
              ]),
            )
            .concat(
              (t = e.broadcast)
                ? [
                    { name: 'twitter:text:broadcast_media_key', content: t.media_key },
                    { name: 'twitter:text:broadcast_media_id', content: t.media_id },
                    { name: 'twitter:text:broadcaster_twitter_id', content: t.twitter_user_id },
                    { name: 'twitter:text:broadcaster_display_name', content: t.user_display_name },
                    { name: 'twitter:text:broadcaster_username', content: t.twitter_username },
                    { name: 'twitter:text:broadcast_width', content: t.width },
                    { name: 'twitter:text:broadcast_height', content: t.height },
                    { name: 'twitter:text:broadcast_source', content: t.broadcast_source },
                    { name: 'twitter:text:broadcast_orientation', content: t.camera_rotation },
                    { name: 'twitter:image:broadcast_thumbnail:src', content: t.image_url },
                    { name: 'twitter:boolean:broadcast_is_high_latency', content: t.is_high_latency },
                    { name: 'twitter:string:broadcast_replay_edited_start_time', content: t.replay_edited_start_time },
                    { name: 'twitter:string:broadcast_scheduled_start_time', content: t.scheduled_start_ms },
                    { name: 'twitter:site:id', content: t.twitter_user_id },
                    { name: 'twitter:string:broadcast_state', content: t.state },
                    { name: 'twitter:image:broadcast_pre_live_slate:src', content: t.pre_live_slate_url },
                  ]
                : [],
            )
          var t, n, i, r, a, o
        },
        A = function (e) {
          return void 0 !== e.content ? _.a.createElement('meta', e) : null
        },
        P = function (e) {
          return _.a.createElement.apply(
            _.a,
            [C.a, null].concat(
              S()(
                (function (e) {
                  return k(e).map(A)
                })(e),
              ),
            ),
          )
        },
        N = n('6/RC'),
        T = n('es0u'),
        x = (n('KqXw'), n('WNMA'), n('yiKp')),
        D = n.n(x),
        L = n('ddV6'),
        V = n.n(L),
        R = n('3zvM'),
        j = n('lMB6'),
        M = Object(R.e)({
          namespace: 'broadcasts',
          fetchOneContext: 'FETCH_BROADCAST',
          fetchOneEndpoint: function (e) {
            return e.Broadcasts.fetchBroadcast
          },
          fetchOneParams: function (e, t) {
            var n = V()(e, 1)[0]
            return D()({ ids: [n] }, t)
          },
        }),
        F = j.a.register(M),
        B = n('kGix'),
        U = n('Hw0q'),
        H = n('G6rE'),
        z = n('rxPX'),
        W = n('0KEI'),
        q = function (e, t) {
          return t.match.params.broadcastId
        },
        G = function (e, t) {
          return F.select(e, q(0, t))
        },
        X = function (e, t) {
          var n = G(e, t)
          return n && n.twitter_user_id ? H.e.select(e, n.twitter_user_id) : void 0
        },
        Y = function (e, t) {
          return t.location.state ? t.location.state.promotedContent : void 0
        },
        K = function (e, t) {
          return G(e, t) ? B.a.LOADED : F.selectFetchStatus(e, q(0, t))
        },
        Q = Object(U.b)('t'),
        J = Object(z.a)()
          .propsFromState(function () {
            return {
              broadcastId: q,
              broadcast: G,
              twitterBroadcaster: X,
              fetchStatus: K,
              promotedContent: Y,
              timecode: Q,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(W.createLocalApiErrorHandlerWithContextFactory)('BROADCAST_SCREEN'),
              fetchBroadcast: F.fetchOne,
              fetchUserIfNeeded: H.e.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'broadcast' }),
        Z = n('SrtL'),
        $ = n('GOQE'),
        ee = n('v//M'),
        te = n('LVU8'),
        ne = n('zlxh'),
        ie = n('rJoH'),
        re = n('yoO3'),
        ae = n('7JQg'),
        oe = n('VS6U'),
        se = n('B5iK'),
        ce = n('pynj'),
        le = n('Modb'),
        ue = n('lklz'),
        de = n('MWbm'),
        pe = n('G8HL'),
        me = n('t62R'),
        fe = n('Wms4'),
        he = n('jV+4'),
        _e = n('TIdA'),
        ve = n('A91F'),
        be = n('rHpw'),
        ge = n('3XMw'),
        ye = n.n(ge),
        Ee = { url: 'https://pbs.twimg.com/lex/placeholder_live_nomargin.png', width: 1920, height: 1080 },
        we = { objectFitVideo: 'contain' },
        Ie = function (e) {
          return e && e.trim().length > 0
        },
        Se = ye.a.ac4c73d8,
        Oe = ye.a.e39b368e,
        Ce = ye.a.f2382014,
        ke = ye.a.e3aac82a,
        Ae = ye.a.hd0bc1eb,
        Pe = ye.a.bea1f26a,
        Ne = ye.a.jceadc3e,
        Te = ye.a.d980e29e,
        xe = ye.a.fc209bb7,
        De = function (e, t) {
          return 'https://twitter.com/i/broadcasts/'.concat(e).concat(t ? '?t='.concat(t) : '')
        },
        Le = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(c()(e), '_getTitle', function () {
                var t = e.props.broadcast
                if (t) {
                  var n = t.state,
                    i = t.status
                  if (i) return i
                  var r = e._getName(t)
                  if (r)
                    switch (n) {
                      case y:
                        return Ae({ name: r })
                      case w:
                      case E:
                        return Pe({ name: r })
                      case g:
                      default:
                        return Ne
                    }
                }
                return Ne
              }),
              f()(c()(e), '_getName', function (e) {
                var t = e.twitter_username,
                  n = e.user_display_name
                return Ie(n) ? n : t && Ie(t) ? '@'.concat(t) : void 0
              }),
              f()(c()(e), '_isLive', function () {
                return e.props.broadcast && 'RUNNING' === e.props.broadcast.state
              }),
              f()(c()(e), '_renderPrimaryContent', function () {
                var t = e.props.fetchStatus
                return _.a.createElement(ee.a, {
                  accessibilityLabel: ke,
                  fetchStatus: t,
                  onRequestRetry: e._handleFetchBroadcast,
                  render: e._render,
                })
              }),
              f()(c()(e), '_render', function () {
                var t = e._getTitle()
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  e._renderMedia(),
                  _.a.createElement(
                    de.a,
                    { style: Ve.header },
                    e._renderUserName(),
                    _.a.createElement(
                      de.a,
                      { style: Ve.title },
                      _.a.createElement(me.b, { size: 'headline1', style: Ve.titleText, weight: 'bold' }, t),
                      e._isLive() ? _.a.createElement(fe.a, { type: 'live' }, Ce) : null,
                    ),
                    e._renderRelatedEvent(),
                  ),
                )
              }),
              f()(c()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.broadcast,
                  i = t.twitterBroadcaster
                return i
                  ? _.a.createElement(
                      de.a,
                      { style: Ve.userNameWrapper },
                      _.a.createElement(
                        ce.a,
                        { screenName: i.screen_name },
                        _.a.createElement(he.a, {
                          isProtected: i.protected,
                          isVerified: i.verified,
                          name: i.name,
                          profileImageUrl: i.profile_image_url_https,
                          screenName: i.screen_name,
                          translatorType: 'none' === i.translator_type ? void 0 : i.translator_type,
                          withLink: !0,
                          withScreenName: !0,
                        }),
                      ),
                    )
                  : n && n.user_display_name
                  ? _.a.createElement(
                      de.a,
                      { style: Ve.userNameWrapper },
                      _.a.createElement(he.a, { name: n.user_display_name, profileImageUrl: n.profile_image_url }),
                    )
                  : void 0
              }),
              f()(c()(e), '_getScribeData', function () {
                return { items: [{ live_broadcast_details: { target_broadcast_id: e.props.broadcastId } }] }
              }),
              f()(c()(e), '_fetchTwitterBroadcaster', function () {
                var t = e.props,
                  n = t.broadcast,
                  i = t.createLocalApiErrorHandler,
                  r = t.fetchUserIfNeeded,
                  a = n && n.twitter_user_id
                if (a) return r(a).catch(i($.a))
              }),
              f()(c()(e), '_startTimer', function () {
                e._stopTimer(), (e._timer = new se.b(3e4).interval(e._fetchUpdates)), e._timer.start()
              }),
              f()(c()(e), '_stopTimer', function () {
                e._timer && e._timer.stop(), (e._timer = void 0)
              }),
              f()(c()(e), '_handleFetchBroadcast', function () {
                var t = e.props,
                  n = t.broadcast,
                  i = t.broadcastId,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchBroadcast
                i &&
                  a(i, { broadcastVersionMap: f()({}, i, null == n ? void 0 : n.version) }).catch(
                    r(f()({}, v.a.GenericNotFound, { customAction: te.c })),
                  )
              }),
              f()(c()(e), '_fetchUpdates', function () {
                e._handleFetchBroadcast()
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._stopTimer()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetchBroadcast()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.broadcastId !== this.props.broadcastId && this._handleFetchBroadcast(),
                    this.props.broadcast &&
                      (e.broadcast && e.broadcast.broadcast_id) !==
                        (this.props.broadcast && this.props.broadcast.broadcast_id) &&
                      (this._startTimer(), this._fetchTwitterBroadcaster())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = this._getTitle()
                  return _.a.createElement(
                    ae.c,
                    { data: this._getScribeData() },
                    _.a.createElement(
                      re.a,
                      null,
                      this._renderMetaTags(t),
                      _.a.createElement(oe.a, {
                        backLocation: '/',
                        documentTitle: t,
                        history: e,
                        primaryContent: this._renderPrimaryContent,
                        sidebarContent: _.a.createElement(T.a, null),
                        title: Oe,
                      }),
                      _.a.createElement(Z.a, { title: t, withMeta: !1 }),
                    ),
                  )
                },
              },
              {
                key: '_renderMetaTags',
                value: function (e) {
                  var t = this.props,
                    n = t.broadcast,
                    i = t.broadcastId,
                    r = t.timecode,
                    a = t.twitterBroadcaster,
                    o = (null == a ? void 0 : a.name) || (null == n ? void 0 : n.user_display_name),
                    s = 'twitter://broadcasts/'.concat(i),
                    c = De(i),
                    l = De(i, r)
                  return N.canUseDOM
                    ? null
                    : _.a.createElement(
                        _.a.Fragment,
                        null,
                        _.a.createElement(ie.a, { canonical: c, description: e, title: o, type: 'article' }),
                        _.a.createElement(b.a, { deepLink: s }),
                        _.a.createElement(P, { broadcast: n, id: i, timecode: r, title: e, url: l }),
                      )
                },
              },
              {
                key: '_renderMedia',
                value: function () {
                  var e = this.props.broadcast
                  return e && e.state === g ? this._renderPreLiveSlate() : this._renderPlayer()
                },
              },
              {
                key: '_renderStartDateLabel',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.scheduled_start_ms ? new Date(parseInt(e.scheduled_start_ms, 10)) : void 0,
                    n = t ? Te({ date: xe(t) }) : void 0
                  return n
                    ? _.a.createElement(de.a, { style: Ve.labelOverlay }, _.a.createElement(fe.a, null, n))
                    : null
                },
              },
              {
                key: '_renderPreLiveSlate',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : Ee
                  return _.a.createElement(
                    de.a,
                    null,
                    _.a.createElement(
                      C.a,
                      null,
                      _.a.createElement('meta', { content: t.url, property: 'og:image' }),
                      _.a.createElement('meta', { content: t.width, property: 'og:image:width' }),
                      _.a.createElement('meta', { content: t.height, property: 'og:image:height' }),
                    ),
                    _.a.createElement(_e.a, {
                      accessibilityLabel: Se,
                      aspectMode: ve.a.exact(be.a.theme.aspectRatios.landscape),
                      image: t,
                      previewMode: !1,
                    }),
                    this._renderStartDateLabel(),
                  )
                },
              },
              {
                key: '_renderPlayer',
                value: function () {
                  var e = this.props,
                    t = e.broadcast,
                    n = e.broadcastId,
                    i = e.promotedContent,
                    r = e.timecode,
                    a = t && { url: t.image_url, width: t.width, height: t.height },
                    o = t && t.media_id
                  if (!(n && a && o)) return null
                  var s = t && Object(ne.m)(t.image_url_small, t.image_url_medium, a)
                  return _.a.createElement(
                    de.a,
                    { style: Ve.card },
                    _.a.createElement(
                      C.a,
                      null,
                      _.a.createElement('meta', { content: a.url, property: 'og:image' }),
                      _.a.createElement('meta', { content: a.width, property: 'og:image:width' }),
                      _.a.createElement('meta', { content: a.height, property: 'og:image:height' }),
                    ),
                    _.a.createElement(le.a, {
                      accessibilityLabel: Se,
                      aspectRatio: 1.7777777777777777,
                      customVariants: s,
                      displayOptions: we,
                      includeBroadcastEventAssociation: !0,
                      poster: a,
                      promotedContent: i,
                      source: { variants: [], videoId: ue.b.forBroadcast(n), contentId: o },
                      timecode: r,
                      videoType: 'video',
                    }),
                  )
                },
              },
              {
                key: '_renderRelatedEvent',
                value: function () {
                  var e = this.props.broadcast,
                    t = (e && e.liveEvents && e.liveEvents[0]) || {},
                    n = t.id,
                    i = t.title
                  if (!n || !i) return null
                  var r = '/i/events/'.concat(n),
                    a = _.a.createElement(me.b, { color: 'primary', link: r }, i)
                  return _.a.createElement(
                    me.b,
                    { style: Ve.relatedEvent },
                    _.a.createElement(ye.a.I18NFormatMessage, { $i18n: 'c43d1678' }, a),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        Ve = be.a.create(function (e) {
          return {
            card: { backgroundColor: e.colors.gray0, overflow: 'hidden' },
            header: {
              flexDirection: 'column',
              justifyContent: 'center',
              paddingVertical: e.spaces.space20,
              paddingHorizontal: e.spaces.space12,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            labelOverlay: { position: 'absolute', bottom: e.spaces.space12, left: e.spaces.space12 },
            title: { alignItems: 'center', flexDirection: 'row', flexWrap: 'nowrap' },
            relatedEvent: { flexBasis: '100%' },
            userNameWrapper: { marginBottom: e.spaces.space12, alignItems: 'flex-start' },
            titleText: { marginRight: e.spaces.space4 },
          }
        })
      t.default = J(Object(pe.a)(Le))
    },
    '9Ulv': function (e, t, n) {
      'use strict'
      var i = n('FGdj'),
        r = n('BR0S'),
        a = n('M6BN')
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var s = n('XJEr').a.API
      var c = (function (e) {
        var t, n
        function r(t) {
          var n
          if (((n = e.call(this) || this), 'number' != typeof t))
            throw new Error('AnimatedValue: Attempting to set value to undefined')
          return (n._startingValue = n._value = t), (n._offset = 0), (n._animation = null), n
        }
        ;(n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), o(t, n)
        var c = r.prototype
        return (
          (c.__detach = function () {
            var t = this
            this.__isNative &&
              s.getValue(this.__getNativeTag(), function (e) {
                t._value = e
              }),
              this.stopAnimation(),
              e.prototype.__detach.call(this)
          }),
          (c.__getValue = function () {
            return this._value + this._offset
          }),
          (c.setValue = function (e) {
            this._animation && (this._animation.stop(), (this._animation = null)),
              this._updateValue(e, !this.__isNative),
              this.__isNative && s.setAnimatedNodeValue(this.__getNativeTag(), e)
          }),
          (c.setOffset = function (e) {
            ;(this._offset = e), this.__isNative && s.setAnimatedNodeOffset(this.__getNativeTag(), e)
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
          (c.stopAnimation = function (e) {
            this.stopTracking(),
              this._animation && this._animation.stop(),
              (this._animation = null),
              e && e(this.__getValue())
          }),
          (c.resetAnimation = function (e) {
            this.stopAnimation(e), (this._value = this._startingValue)
          }),
          (c._onAnimatedValueUpdateReceived = function (e) {
            this._updateValue(e, !1)
          }),
          (c.interpolate = function (e) {
            return new i.a(this, e)
          }),
          (c.animate = function (e, t) {
            var n = this,
              i = null
            e.__isInteraction && (i = a.a.createInteractionHandle())
            var r = this._animation
            this._animation && this._animation.stop(),
              (this._animation = e),
              e.start(
                this._value,
                function (e) {
                  n._updateValue(e, !0)
                },
                function (e) {
                  ;(n._animation = null), null !== i && a.a.clearInteractionHandle(i), t && t(e)
                },
                r,
                this,
              )
          }),
          (c.stopTracking = function () {
            this._tracking && this._tracking.__detach(), (this._tracking = null)
          }),
          (c.track = function (e) {
            this.stopTracking(), (this._tracking = e)
          }),
          (c._updateValue = function (t, n) {
            if (void 0 === t) throw new Error('AnimatedValue: Attempting to set value to undefined')
            var i, r
            ;(this._value = t),
              n &&
                ((i = this),
                (r = new Set()),
                (function e(t) {
                  'function' == typeof t.update ? r.add(t) : t.__getChildren().forEach(e)
                })(i),
                r.forEach(function (e) {
                  return e.update()
                })),
              e.prototype.__callListeners.call(this, this.__getValue())
          }),
          (c.__getNativeConfig = function () {
            return { type: 'value', value: this._value, offset: this._offset }
          }),
          r
        )
      })(r.a)
      t.a = c
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('KOtZ'), n('7x/C'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        _ = n.n(h),
        v = n('3XMw'),
        b = n.n(v),
        g = n('oQhu'),
        y = n('mjJ+'),
        E = n('eb3s'),
        w = b.a.cfd2f35d,
        I = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(c()(e), 'state', { activeConfirmation: null }),
              f()(c()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              f()(c()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              f()(c()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : _.a.createElement(y.a, {
                        cancelButtonLabel: w,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: e,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (e) {
                  if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm)
                  var t = e || {},
                    n = t.confirmButtonType,
                    i = t.headline,
                    r = t.label,
                    a = t.text,
                    o = t.withCancelButton
                  return _.a.createElement(E.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: i,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: a,
                    withCancelButton: o,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var e = this.props,
                    t = e.actionItems,
                    n = e.dividerIndices,
                    i = e.onClose
                  return S(t, n, i, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        S = Object(g.a)(function (e, t, n, i) {
          return e.reduce(function (e, r, a) {
            var o = r.Icon,
              s = r.behavioralEventContext,
              c = r.confirmation,
              l = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              p = r.link,
              m = r.onClick,
              f = r.subText,
              h = r.testID,
              _ = r.text
            r.withCancelButton
            if (!u) {
              var v = m
                ? function () {
                    c
                      ? c.render
                        ? i({ callback: m, render: c.render })
                        : i({
                            callback: m,
                            text: c.text,
                            headline: c.headline,
                            label: c.label,
                            confirmButtonType: c.confirmButtonType,
                            withCancelButton: c.withCancelButton,
                          })
                      : (m(), n())
                  }
                : n
              e.push({
                behavioralEventContext: s,
                disabled: l,
                Icon: o,
                isEmphasized: d,
                testID: h,
                subText: f,
                text: _,
                onClick: v,
                link: p,
                withBottomBorder: t && t.includes(a),
              })
            }
            return e
          }, [])
        })
      t.default = I
    },
    BR0S: function (e, t, n) {
      'use strict'
      var i = n('pxHa'),
        r = n('XJEr')
      function a(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return o(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var i = 0
            return function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        return (n = e[Symbol.iterator]()).next.bind(n)
      }
      function o(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
      }
      function s(e, t) {
        return (s =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var c = (function (e) {
        var t, n
        function i() {
          var t
          return ((t = e.call(this) || this)._children = []), t
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), s(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            if (!this.__isNative) {
              this.__isNative = !0
              for (var t, n = a(this._children); !(t = n()).done; ) {
                var i = t.value
                i.__makeNative(), r.a.API.connectAnimatedNodes(this.__getNativeTag(), i.__getNativeTag())
              }
            }
            e.prototype.__makeNative.call(this)
          }),
          (o.__addChild = function (e) {
            0 === this._children.length && this.__attach(),
              this._children.push(e),
              this.__isNative &&
                (e.__makeNative(), r.a.API.connectAnimatedNodes(this.__getNativeTag(), e.__getNativeTag()))
          }),
          (o.__removeChild = function (e) {
            var t = this._children.indexOf(e)
            ;-1 !== t &&
              (this.__isNative &&
                e.__isNative &&
                r.a.API.disconnectAnimatedNodes(this.__getNativeTag(), e.__getNativeTag()),
              this._children.splice(t, 1),
              0 === this._children.length && this.__detach())
          }),
          (o.__getChildren = function () {
            return this._children
          }),
          (o.__callListeners = function (t) {
            if ((e.prototype.__callListeners.call(this, t), !this.__isNative))
              for (var n, i = a(this._children); !(n = i()).done; ) {
                var r = n.value
                r.__getValue && r.__callListeners(r.__getValue())
              }
          }),
          i
        )
      })(i.a)
      t.a = c
    },
    BtOK: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var i = n('YRNd'),
          r = n('XJEr')
        function a(e, t) {
          return (a =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var o = (function (t) {
          var n, i
          function o(e) {
            var n, i, a, o
            return (
              ((o = t.call(this) || this)._deceleration = null !== (n = e.deceleration) && void 0 !== n ? n : 0.998),
              (o._velocity = e.velocity),
              (o._useNativeDriver = Object(r.c)(e)),
              (o.__isInteraction = null !== (i = e.isInteraction) && void 0 !== i ? i : !o._useNativeDriver),
              (o.__iterations = null !== (a = e.iterations) && void 0 !== a ? a : 1),
              o
            )
          }
          ;(i = t), ((n = o).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), a(n, i)
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
            (s.start = function (e, t, n, i, r) {
              ;(this.__active = !0),
                (this._lastValue = e),
                (this._fromValue = e),
                (this._onUpdate = t),
                (this.__onEnd = n),
                (this._startTime = Date.now()),
                this._useNativeDriver
                  ? this.__startNativeAnimation(r)
                  : (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)))
            }),
            (s.onUpdate = function () {
              var e = Date.now(),
                t =
                  this._fromValue +
                  (this._velocity / (1 - this._deceleration)) *
                    (1 - Math.exp(-(1 - this._deceleration) * (e - this._startTime)))
              this._onUpdate(t),
                Math.abs(this._lastValue - t) < 0.1
                  ? this.__debouncedOnEnd({ finished: !0 })
                  : ((this._lastValue = t),
                    this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this))))
            }),
            (s.stop = function () {
              t.prototype.stop.call(this),
                (this.__active = !1),
                e.cancelAnimationFrame(this._animationFrame),
                this.__debouncedOnEnd({ finished: !1 })
            }),
            o
          )
        })(i.a)
        t.a = o
      }.call(this, n('fRV1')))
    },
    EskI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return S
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        u = n.n(l),
        d = (n('7xRU'), n('KqXw'), n('Ysgh'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        p = n.n(d),
        m = n('3XMw'),
        f = n.n(m),
        h =
          (n('yH/f'),
          Object.freeze({ BROADCAST_MEDIA_TYPE: 'broadcast', VIDEO_MEDIA_TYPE: 'video' }),
          Object.freeze({ COMPLETED: 'COMPLETED', DELAYED: 'DELAYED', LIVE: 'LIVE', UPCOMING: 'UPCOMING' })),
        _ = 'scorecard',
        v = n('6vad'),
        b = n('t62R'),
        g = n('rHpw'),
        y = n('U+bB'),
        E = n('MWbm'),
        w = f.a.eaaca5db,
        I = function (e) {
          var t = e.id,
            n = void 0 === t ? '' : t,
            i = e.isLive,
            r = e.status,
            a = '44' === n.split(':')[0],
            o = r === h.UPCOMING || r === h.DELAYED
          return (a && i) || o
        },
        S = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = (function (e) {
                    var t = e.moments
                    if (t) {
                      var n = t.id,
                        i = t.participant_scores,
                        r = t.progress_strings,
                        a = t.status,
                        o = t.winner_id,
                        s = a === h.LIVE
                      return {
                        isLive: s,
                        progressStrings: I({ id: n, status: a, isLive: s }) ? r.join(' ') : r[0],
                        participantScores: i,
                        winnerId: o,
                      }
                    }
                  })(this.props.scoreData)
                  return e ? this._renderScoreCardWithHeader(e) : null
                },
              },
              {
                key: '_renderScoreCardWithHeader',
                value: function (e) {
                  var t = this.props.withHeader
                  return p.a.createElement(
                    p.a.Fragment,
                    null,
                    t ? p.a.createElement(v.b, { text: w }) : null,
                    this._renderScoresAndMatchStatus(e),
                  )
                },
              },
              {
                key: '_renderScoresAndMatchStatus',
                value: function (e) {
                  var t = this,
                    n = this.props.withContainer,
                    i = e.isLive,
                    r = e.participantScores,
                    a = e.progressStrings,
                    o = e.winnerId,
                    s = r.map(function (e) {
                      return t._renderTeamRow(e, o, i)
                    })
                  return p.a.createElement(
                    E.a,
                    { style: [O.teamDisplay, n && O.container] },
                    p.a.createElement(E.a, { style: O.teamRows }, s),
                    p.a.createElement(b.b, { style: O.matchStatusText }, a),
                  )
                },
              },
              {
                key: '_renderTeamRow',
                value: function (e, t, n) {
                  var i = e.participant,
                    r = i.id,
                    a = i.media,
                    o = i.name,
                    s = e.score,
                    c = r === t,
                    l = n || c ? 'bold' : 'normal'
                  return p.a.createElement(
                    E.a,
                    { key: r, style: O.teamRow, testID: _ },
                    p.a.createElement(y.a, { source: a.url, style: O.teamLogo }),
                    p.a.createElement(b.b, { align: 'left', numberOfLines: 1, style: O.teamName }, o),
                    p.a.createElement(b.b, { style: O.teamScore, weight: l }, s),
                    p.a.createElement(E.a, { style: [O.winnerContainer, c && O.winner] }),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        O = g.a.create(function (e) {
          return {
            container: { margin: e.spaces.space12 },
            teamDisplay: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: e.spaces.space12,
            },
            teamRows: {
              flexGrow: 1,
              flexShrink: 1,
              borderRightWidth: 1,
              borderRightStyle: 'solid',
              borderRightColor: e.colors.gray200,
            },
            teamRow: {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: e.spaces.space4,
              marginTop: e.spaces.space4,
            },
            teamLogo: {
              borderRadius: e.borderRadii.small,
              marginRight: e.spaces.space12,
              width: e.spaces.space20,
              height: e.spaces.space20,
            },
            teamName: { flexGrow: 1, flexShrink: 1 },
            teamScore: { flexShrink: 0, marginLeft: e.spaces.space12 },
            winnerContainer: { width: e.spaces.space12 },
            winner: {
              borderBottomWidth: 4,
              borderBottomColor: 'transparent',
              borderBottomStyle: 'solid',
              borderRightWidth: 5,
              borderRightStyle: 'solid',
              borderRightColor: e.colors.text,
              borderTopWidth: 4,
              borderTopStyle: 'solid',
              borderTopColor: 'transparent',
            },
            matchStatusText: { minWidth: 'calc(4.5 * '.concat(e.spaces.space20, ')'), paddingLeft: e.spaces.space12 },
          }
        })
    },
    FGdj: function (e, t, n) {
      'use strict'
      var i = n('BR0S'),
        r = n('XJEr'),
        a = n('tI3i'),
        o = n.n(a),
        s = n('q2a+'),
        c = n.n(s)
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function u(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                p(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var m = function (e) {
        return e
      }
      function f(e) {
        if (e.outputRange && 'string' == typeof e.outputRange[0])
          return (function (e) {
            var t = e.outputRange
            o()(t.length >= 2, 'Bad output range'),
              (function (e) {
                for (var t = e[0].replace(_, ''), n = 1; n < e.length; ++n)
                  o()(t === e[n].replace(_, ''), 'invalid pattern ' + e[0] + ' and ' + e[n])
              })((t = t.map(h)))
            var n = t[0].match(_).map(function () {
              return []
            })
            t.forEach(function (e) {
              e.match(_).forEach(function (e, t) {
                n[t].push(+e)
              })
            })
            var i = t[0].match(_).map(function (t, i) {
                return f(d(d({}, e), {}, { outputRange: n[i] }))
              }),
              r = ((a = t[0]), 'string' == typeof a && a.startsWith('rgb'))
            var a
            return function (e) {
              var n = 0
              return t[0].replace(_, function () {
                var t = +i[n++](e)
                return r && (t = n < 4 ? Math.round(t) : Math.round(1e3 * t) / 1e3), String(t)
              })
            }
          })(e)
        var t = e.outputRange
        v('outputRange', t)
        var n = e.inputRange
        v('inputRange', n),
          (function (e) {
            o()(e.length >= 2, 'inputRange must have at least 2 elements')
            for (var t = 1; t < e.length; ++t)
              o()(e[t] >= e[t - 1], 'inputRange must be monotonically non-decreasing ' + e)
          })(n),
          o()(
            n.length === t.length,
            'inputRange (' + n.length + ') and outputRange (' + t.length + ') must have the same length',
          )
        var i = e.easing || m,
          r = 'extend'
        void 0 !== e.extrapolateLeft ? (r = e.extrapolateLeft) : void 0 !== e.extrapolate && (r = e.extrapolate)
        var a = 'extend'
        return (
          void 0 !== e.extrapolateRight ? (a = e.extrapolateRight) : void 0 !== e.extrapolate && (a = e.extrapolate),
          function (e) {
            o()('number' == typeof e, 'Cannot interpolation an input which is not a number')
            var s = (function (e, t) {
              var n
              for (n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            })(e, n)
            return (function (e, t, n, i, r, a, o, s) {
              var c = e
              if (c < t) {
                if ('identity' === o) return c
                'clamp' === o && (c = t)
              }
              if (c > n) {
                if ('identity' === s) return c
                'clamp' === s && (c = n)
              }
              if (i === r) return i
              if (t === n) return e <= t ? i : r
              t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t))
              ;(c = a(c)), i === -1 / 0 ? (c = -c) : r === 1 / 0 ? (c += i) : (c = c * (r - i) + i)
              return c
            })(e, n[s], n[s + 1], t[s], t[s + 1], i, r, a)
          }
        )
      }
      function h(e) {
        var t = c()(e)
        return null === t || 'number' != typeof t
          ? e
          : 'rgba(' +
              ((4278190080 & (t = t || 0)) >>> 24) +
              ', ' +
              ((16711680 & t) >>> 16) +
              ', ' +
              ((65280 & t) >>> 8) +
              ', ' +
              (255 & t) / 255 +
              ')'
      }
      var _ = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g
      function v(e, t) {
        o()(t.length >= 2, e + ' must have at least 2 elements'),
          o()(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + t)
      }
      var b = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return ((i = e.call(this) || this)._parent = t), (i._config = n), (i._interpolation = f(n)), i
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), l(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._parent.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            var e = this._parent.__getValue()
            return (
              o()('number' == typeof e, 'Cannot interpolate an input which is not a number.'), this._interpolation(e)
            )
          }),
          (a.interpolate = function (e) {
            return new i(this, e)
          }),
          (a.__attach = function () {
            this._parent.__addChild(this)
          }),
          (a.__detach = function () {
            this._parent.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__transformDataType = function (e) {
            return e.map(r.a.transformDataType)
          }),
          (a.__getNativeConfig = function () {
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
      ;(b.__createInterpolation = f), (t.a = b)
    },
    H5wF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      n('tI3i')
      function i(e) {
        return null
      }
    },
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('I4+6'),
        o = n('cm6r'),
        s = n('rHpw'),
        c = n('MWbm'),
        l = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            i = e.isCompact,
            l = e.link,
            d = e.lower,
            p = e.onClick,
            m = e.stackLayoutLowerStyle,
            f = e.stackLayoutUpperStyle,
            h = e.upper,
            _ = e.withInsetFocusRing,
            v = e.withInteractiveStyling,
            b = a.a.generate({
              backgroundColor: s.a.theme.colors.transparent,
              color: s.a.theme.colors.primary,
              insetFocusRing: _,
            }),
            g = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(c.a, { style: [u.defaultUpperContainerStyle, f, i && { height: 'auto' }] }, h),
              d ? r.a.createElement(c.a, { style: [u.defaultLowerContainerStyle, m] }, d) : null,
            )
          return r.a.createElement(
            o.a,
            {
              accessibilityLabel: t,
              interactive: v,
              interactiveStyles: v ? b : void 0,
              link: l,
              onClick: p,
              style: [u.root, n],
            },
            g,
          )
        }
      l.defaultProps = { withInsetFocusRing: !0, withInteractiveStyling: !1 }
      var u = s.a.create(function (e) {
        return {
          root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large },
          defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: 'flex-end' },
          defaultUpperContainerStyle: {
            height: 'calc('.concat(e.spaces.space48, '*2)'),
            overflow: 'hidden',
            borderRadius: e.borderRadii.large,
          },
        }
      })
      t.a = l
    },
    MQi0: function (e, t, n) {
      'use strict'
      function i(e) {
        return 3.62 * (e - 30) + 194
      }
      function r(e) {
        return 3 * (e - 8) + 25
      }
      t.a = {
        fromOrigamiTensionAndFriction: function (e, t) {
          return { stiffness: i(e), damping: r(t) }
        },
        fromBouncinessAndSpeed: function (e, t) {
          function n(e, t, n) {
            return (e - t) / (n - t)
          }
          function a(e, t, n) {
            return t + e * (n - t)
          }
          var o = n(e / 1.7, 0, 20)
          o = a(o, 0, 0.8)
          var s,
            c,
            l,
            u,
            d = a(n(t / 1.7, 0, 20), 0.5, 200),
            p =
              ((s = o),
              (c =
                (l = d) <= 18
                  ? ((u = l), 7e-4 * Math.pow(u, 3) - 0.031 * Math.pow(u, 2) + 0.64 * u + 1.28)
                  : l > 18 && l <= 44
                  ? (function (e) {
                      return 44e-6 * Math.pow(e, 3) - 0.006 * Math.pow(e, 2) + 0.36 * e + 2
                    })(l)
                  : (function (e) {
                      return 45e-8 * Math.pow(e, 3) - 332e-6 * Math.pow(e, 2) + 0.1078 * e + 5.84
                    })(l)),
              (function (e, t, n) {
                return e * n + (1 - e) * t
              })(2 * s - s * s, c, 0.01))
          return { stiffness: i(d), damping: r(p) }
        },
      }
    },
    Mhzv: function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP')
      var i = n('ERkP'),
        r = n.n(i),
        a = n('zb92'),
        o = Object(a.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(15), n.e(22), n.e(192)]).then(n.bind(null, 'wHP+'))
          },
          renderPlaceholder: function () {
            return r.a.createElement('div', null)
          },
        })
      t.a = o
    },
    QtuH: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        r = n.n(i),
        a = n('yiKp'),
        o = n.n(a),
        s = n('m3Bd'),
        c = n.n(s),
        l = (n('tVqn'), n('ERkP')),
        u = n.n(l),
        d = n('zlxh'),
        p = n('3XMw'),
        m = n.n(p),
        f = n('MWbm'),
        h = n('/yvb'),
        _ = n('rHpw'),
        v = n('I6Uj'),
        b = ['id', 'isInlineButton', 'onShareMomentScribe'],
        g = m.a.i8d6a27e,
        y = m.a.hbae0a4e,
        E = m.a.j51ab633,
        w = { page: 'live_event_timeline', section: 'live_event_header' },
        I = { element: 'share_moment_inline_button', page: 'live_event_timeline', section: 'live_event_header' },
        S = function (e) {
          var t = e.author,
            n = e.hashtag,
            i = e.title,
            r = (i && i.trim()) || ''
          return O(t) ? C(t.screen_name, n, r) : n
        },
        O = function (e) {
          return !!e
        },
        C = function (e, t, n) {
          return t ? g({ author: e, timelineHashtag: t, title: n }) : y({ author: e, title: n })
        }
      function k(e) {
        return u.a.createElement(
          f.a,
          { style: A.buttonContainer },
          u.a.createElement(h.a, r()({}, e, { type: 'primaryFilled' }), E),
        )
      }
      var A = _.a.create(function (e) {
        return { buttonContainer: { marginTop: e.spaces.space16, flexDirection: 'row' } }
      })
      t.a = function (e) {
        var t = e.id,
          n = e.isInlineButton,
          i = e.onShareMomentScribe,
          r = c()(e, b),
          a = Object(d.j)(t),
          s = S(r)
        return (
          u.a.useEffect(
            function () {
              n && i && i(o()({ action: 'impression' }, I))
            },
            [n, i],
          ),
          u.a.createElement(v.a, { ButtonComponent: n ? k : void 0, scribeNamespace: n ? I : w, shareText: s, url: a })
        )
      }
    },
    RrqW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var i,
        r = n('KEM+'),
        a = n.n(r),
        o = (n('yH/f'), n('ERkP')),
        s = n.n(o),
        c = n('t62R'),
        l = n('FIs5'),
        u = n('rHpw'),
        d = n('3XMw'),
        p = n.n(d),
        m = 'sensitive',
        f = 'blocked',
        h = 'blocked_by',
        _ = Object.freeze({ SENSITIVE: m, BLOCKED: f, BLOCKED_BY: h }),
        v = { title: p.a.j32d345d, button: p.a.c3d89aca, body: void 0 },
        b = {
          title: p.a.a01d5a7c,
          body: function (e) {
            var t = e.screenName
            return s.a.createElement(
              p.a.I18NFormatMessage,
              { $i18n: 'ha49b9b7', screenName: t },
              s.a.createElement(c.b, { link: 'https://support.twitter.com/articles/117063' }, p.a.i859a9d3),
            )
          },
          button: p.a.f277e949,
        },
        g = { title: p.a.b2311b7f, body: p.a.cab51f93, button: void 0 },
        y = Object.freeze(((i = {}), a()(i, m, v), a()(i, f, b), a()(i, h, g), i)),
        E = function (e, t) {
          return 'function' == typeof e ? (t && e({ screenName: t })) || void 0 : e
        },
        w = u.a.create(function (e) {
          return {
            style: {
              alignItems: 'center',
              paddingHorizontal: e.spaces.space40,
              paddingVertical: 'calc(2 * '.concat(e.spaces.space40, ')'),
            },
          }
        })
      t.b = function (e) {
        var t = e.onPress,
          n = e.screenName,
          i = e.type,
          r = y[i],
          a = r.body,
          o = r.button,
          c = r.title,
          u = E(c, n),
          d = E(a, n)
        return s.a.createElement(l.a, { buttonText: o, header: u, message: d, onButtonPress: t, style: w.style })
      }
    },
    TW8A: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        r = n.n(i),
        a = n('ERkP'),
        o = n.n(a),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return $
      })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ERkP')),
        _ = n.n(h),
        v = n('RhWx'),
        b = n.n(v),
        g = n('yiKp'),
        y = n.n(g),
        E = n('1YZw'),
        w = n('Fg8X'),
        I = n('n4jD'),
        S = n('RqPI'),
        O = n('iUle'),
        C = function (e) {
          return function (t, n, i) {
            var r = i.api,
              a = n(),
              o = Object(S.r)(a) || '',
              s = Object(I.c)(a),
              c = Object(O.a)(o),
              l = { moment_id: e, teamUserId: s }
            return r.Moments.delete(l).then(function () {
              t([w.a.deleteOne(e), c.removeEntry('moment-'.concat(e))])
            })
          }
        },
        k = n('rxPX'),
        A = Object(k.a)()
          .propsFromState(function () {
            return { activeTeamId: I.c }
          })
          .propsFromActions(function () {
            return { addToast: E.b, deleteMoment: C }
          })
          .withAnalytics({ component: 'action_sheet' }),
        P = n('ACNv'),
        N = n('3XMw'),
        T = n.n(N),
        x = n('Rp9C'),
        D = n('TnY3'),
        L = n('v6aA'),
        V = n('hiGS'),
        R = n('I/9y'),
        j = n('TW8A'),
        M = n('xrkw'),
        F = n('zIWA'),
        B = T.a.e8dff578,
        U = T.a.fcc64f01,
        H = T.a.ea193d66,
        z = T.a.e5227fe0,
        W = T.a.d0df844c,
        q = T.a.fd61ab81,
        G = T.a.aaae5e7f,
        X = T.a.d96cf7cd,
        Y = T.a.e7718461,
        K = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(c()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  i = t.id,
                  r = t.withEditAction,
                  a = t.withLinkAction,
                  o = []
                return (
                  e._isOwner()
                    ? (o.push({
                        confirmation: { label: X, headline: q, text: G, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: H,
                        Icon: V.a,
                      }),
                      a && o.push({ link: '/i/events/'.concat(i), onClick: e._handleClickLink, text: z, Icon: R.a }),
                      r && o.push({ link: '/i/moment_maker/edit/'.concat(i), text: B, Icon: j.a }),
                      o.push({
                        link: '/i/moments/'.concat(i, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: W,
                        Icon: M.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: U, Icon: F.a }),
                  o
                )
              }),
              f()(c()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  i = t.history,
                  r = t.id,
                  a = t.scribeNamespace,
                  o = y()(y()({}, n), a)
                i.push({
                  pathname: '/i/report/moment/'.concat(r),
                  state: { clientReferer: window.location.pathname, isMedia: !0, scribeNamespace: o },
                })
              }),
              f()(c()(e), '_handleClickLink', function () {
                e._scribeAction('click', 'link_button')
              }),
              f()(c()(e), '_handleNavigateAnalytics', function () {
                e._scribeAction('moment_analytics')
              }),
              f()(c()(e), '_handleDeleteConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  i = t.deleteMoment,
                  r = t.history,
                  a = t.id,
                  o = t.redirectOnDelete
                i(a).then(function () {
                  e._scribeAction('delete'),
                    n({ text: Y }),
                    o && r.goBack({ backLocation: o, shouldReplaceOnFallback: !0 })
                })
              }),
              f()(c()(e), '_scribeAction', function (t, n) {
                var i = e.props,
                  r = i.analytics,
                  a = i.id,
                  o = i.scribeMomentItem,
                  s = i.scribeNamespace,
                  c = y()(
                    y()({}, r.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        b()(r.contextualScribeData && r.contextualScribeData.items ? r.contextualScribeData.items : []),
                        [o || x.a.getMomentItem(a)],
                      ),
                    },
                  )
                r.scribe(y()({ action: t, data: c, element: n }, s))
              }),
              f()(c()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  i = t.author,
                  r = e.context.loggedInUserId,
                  a = r && (null == i ? void 0 : i.id_str) === r,
                  o = n && (null == i ? void 0 : i.id_str) === n
                return !!a || !!o
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  return this.context.loggedInUserId
                    ? _.a.createElement(P.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(K, 'contextType', L.a)
      var Q = A(K),
        J = Object(D.a)(Q),
        Z = n('2G3J'),
        $ = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              f()(c()(e), '_renderMenu', function (t) {
                var n = e.props,
                  i = n.author,
                  r = n.eventId,
                  a = n.redirectOnDelete,
                  o = n.scribeMomentItem,
                  s = n.scribeNamespace,
                  c = n.title,
                  l = n.withEditAction,
                  u = n.withLinkAction
                return _.a.createElement(J, {
                  author: i,
                  id: r,
                  onClose: t,
                  redirectOnDelete: a,
                  scribeMomentItem: o,
                  scribeNamespace: s,
                  title: c,
                  withEditAction: l,
                  withLinkAction: u,
                })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.iconStyle,
                    n = e.onPress,
                    i = e.size,
                    r = e.style,
                    a = e.type
                  return _.a.createElement(Z.a, {
                    iconStyle: t,
                    onPress: n,
                    renderMenu: this._renderMenu,
                    size: i,
                    style: r,
                    type: a,
                  })
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()($, 'defaultProps', { withEditAction: !0 })
    },
    WrBE: function (e, t, n) {
      'use strict'
      var i = n('4LIG'),
        r = n('ERkP'),
        a = n('sIe2'),
        o = n('9Ulv'),
        s = n('XJEr'),
        c = n('Xo28'),
        l = n('tI3i'),
        u = n.n(l)
      function d(e, t, n) {
        var i = []
        u()(
          n[0] && n[0].nativeEvent,
          'Native driven events only support animated values contained inside `nativeEvent`.',
        ),
          (function e(t, n) {
            if (t instanceof o.a) t.__makeNative(), i.push({ nativeEventPath: n, animatedValueTag: t.__getNativeTag() })
            else if ('object' == typeof t) for (var r in t) e(t[r], n.concat(r))
          })(n[0].nativeEvent, [])
        var r = Object(c.a)(e)
        return (
          null != r &&
            i.forEach(function (e) {
              s.a.API.addAnimatedEventToView(r, t, e)
            }),
          {
            detach: function () {
              null != r &&
                i.forEach(function (e) {
                  s.a.API.removeAnimatedEventFromView(r, t, e.animatedValueTag)
                })
            },
          }
        )
      }
      var p = (function () {
          function e(e, t) {
            ;(this._listeners = []),
              (this._argMapping = e),
              null == t && (t = { useNativeDriver: !1 }),
              t.listener && this.__addListener(t.listener),
              (this._callListeners = this._callListeners.bind(this)),
              (this._attachedEvent = null),
              (this.__isNative = Object(s.c)(t))
          }
          var t = e.prototype
          return (
            (t.__addListener = function (e) {
              this._listeners.push(e)
            }),
            (t.__removeListener = function (e) {
              this._listeners = this._listeners.filter(function (t) {
                return t !== e
              })
            }),
            (t.__attach = function (e, t) {
              u()(this.__isNative, 'Only native driven events need to be attached.'),
                (this._attachedEvent = d(e, t, this._argMapping))
            }),
            (t.__detach = function (e, t) {
              u()(this.__isNative, 'Only native driven events need to be detached.'),
                this._attachedEvent && this._attachedEvent.detach()
            }),
            (t.__getHandler = function () {
              var e = this
              if (this.__isNative) return this._callListeners
              return function () {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i]
                var r = function e(t, n, i) {
                  if (t instanceof o.a) 'number' == typeof n && t.setValue(n)
                  else if ('object' == typeof t) for (var r in t) e(t[r], n[r], r)
                }
                e._argMapping.forEach(function (e, t) {
                  r(e, n[t], 'arg' + t)
                }),
                  e._callListeners.apply(e, n)
              }
            }),
            (t._callListeners = function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
              this._listeners.forEach(function (e) {
                return e.apply(void 0, t)
              })
            }),
            e
          )
        })(),
        m = n('pxHa'),
        f = n('BR0S')
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var _ = (function (e) {
          var t, n
          function i(t) {
            var n
            return ((n = e.call(this) || this)._transforms = t), n
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), h(t, n)
          var r = i.prototype
          return (
            (r.__makeNative = function () {
              this._transforms.forEach(function (e) {
                for (var t in e) {
                  var n = e[t]
                  n instanceof m.a && n.__makeNative()
                }
              }),
                e.prototype.__makeNative.call(this)
            }),
            (r.__getValue = function () {
              return this._transforms.map(function (e) {
                var t = {}
                for (var n in e) {
                  var i = e[n]
                  i instanceof m.a ? (t[n] = i.__getValue()) : (t[n] = i)
                }
                return t
              })
            }),
            (r.__getAnimatedValue = function () {
              return this._transforms.map(function (e) {
                var t = {}
                for (var n in e) {
                  var i = e[n]
                  i instanceof m.a ? (t[n] = i.__getAnimatedValue()) : (t[n] = i)
                }
                return t
              })
            }),
            (r.__attach = function () {
              var e = this
              this._transforms.forEach(function (t) {
                for (var n in t) {
                  var i = t[n]
                  i instanceof m.a && i.__addChild(e)
                }
              })
            }),
            (r.__detach = function () {
              var t = this
              this._transforms.forEach(function (e) {
                for (var n in e) {
                  var i = e[n]
                  i instanceof m.a && i.__removeChild(t)
                }
              }),
                e.prototype.__detach.call(this)
            }),
            (r.__getNativeConfig = function () {
              var e = []
              return (
                this._transforms.forEach(function (t) {
                  for (var n in t) {
                    var i = t[n]
                    i instanceof m.a
                      ? e.push({ type: 'animated', property: n, nodeTag: i.__getNativeTag() })
                      : e.push({ type: 'static', property: n, value: s.a.transformDataType(i) })
                  }
                }),
                s.a.validateTransform(e),
                { type: 'transform', transforms: e }
              )
            }),
            i
          )
        })(f.a),
        v = n('YTr2')
      function b(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                y(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function E(e, t) {
        return (E =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var w = (function (e) {
        var t, n
        function i(t) {
          var n
          return (
            (n = e.call(this) || this),
            (t = Object(v.a)(t) || {}).transform && (t = g(g({}, t), {}, { transform: new _(t.transform) })),
            (n._style = t),
            n
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), E(t, n)
        var r = i.prototype
        return (
          (r._walkStyleAndGetValues = function (e) {
            var t = {}
            for (var n in e) {
              var i = e[n]
              i instanceof m.a
                ? i.__isNative || (t[n] = i.__getValue())
                : i && !Array.isArray(i) && 'object' == typeof i
                ? (t[n] = this._walkStyleAndGetValues(i))
                : (t[n] = i)
            }
            return t
          }),
          (r.__getValue = function () {
            return this._walkStyleAndGetValues(this._style)
          }),
          (r._walkStyleAndGetAnimatedValues = function (e) {
            var t = {}
            for (var n in e) {
              var i = e[n]
              i instanceof m.a
                ? (t[n] = i.__getAnimatedValue())
                : i && !Array.isArray(i) && 'object' == typeof i && (t[n] = this._walkStyleAndGetAnimatedValues(i))
            }
            return t
          }),
          (r.__getAnimatedValue = function () {
            return this._walkStyleAndGetAnimatedValues(this._style)
          }),
          (r.__attach = function () {
            for (var e in this._style) {
              var t = this._style[e]
              t instanceof m.a && t.__addChild(this)
            }
          }),
          (r.__detach = function () {
            for (var t in this._style) {
              var n = this._style[t]
              n instanceof m.a && n.__removeChild(this)
            }
            e.prototype.__detach.call(this)
          }),
          (r.__makeNative = function () {
            for (var t in this._style) {
              var n = this._style[t]
              n instanceof m.a && n.__makeNative()
            }
            e.prototype.__makeNative.call(this)
          }),
          (r.__getNativeConfig = function () {
            var e = {}
            for (var t in this._style)
              if (this._style[t] instanceof m.a) {
                var n = this._style[t]
                n.__makeNative(), (e[t] = n.__getNativeTag())
              }
            return s.a.validateStyles(e), { type: 'style', style: e }
          }),
          i
        )
      })(f.a)
      function I(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                O(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function O(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function C(e, t) {
        return (C =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var k = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            (i = e.call(this) || this),
            t.style && (t = S(S({}, t), {}, { style: new w(t.style) })),
            (i._props = t),
            (i._callback = n),
            i.__attach(),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), C(t, n)
        var r = i.prototype
        return (
          (r.__getValue = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof m.a
                ? (!n.__isNative || n instanceof w) && (e[t] = n.__getValue())
                : (e[t] = n instanceof p ? n.__getHandler() : n)
            }
            return e
          }),
          (r.__getAnimatedValue = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof m.a && (e[t] = n.__getAnimatedValue())
            }
            return e
          }),
          (r.__attach = function () {
            for (var e in this._props) {
              var t = this._props[e]
              t instanceof m.a && t.__addChild(this)
            }
          }),
          (r.__detach = function () {
            for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
              var n = this._props[t]
              n instanceof m.a && n.__removeChild(this)
            }
            e.prototype.__detach.call(this)
          }),
          (r.update = function () {
            this._callback()
          }),
          (r.__makeNative = function () {
            if (!this.__isNative) {
              for (var e in ((this.__isNative = !0), this._props)) {
                var t = this._props[e]
                t instanceof m.a && t.__makeNative()
              }
              this._animatedView && this.__connectAnimatedView()
            }
          }),
          (r.setNativeView = function (e) {
            this._animatedView !== e && ((this._animatedView = e), this.__isNative && this.__connectAnimatedView())
          }),
          (r.__connectAnimatedView = function () {
            u()(this.__isNative, 'Expected node to be marked as "native"')
            var e = Object(c.a)(this._animatedView)
            u()(null != e, 'Unable to locate attached view in the native tree'),
              s.a.API.connectAnimatedNodeToView(this.__getNativeTag(), e)
          }),
          (r.__disconnectAnimatedView = function () {
            u()(this.__isNative, 'Expected node to be marked as "native"')
            var e = Object(c.a)(this._animatedView)
            u()(null != e, 'Unable to locate attached view in the native tree'),
              s.a.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), e)
          }),
          (r.__restoreDefaultValues = function () {
            this.__isNative && s.a.API.restoreDefaultValues(this.__getNativeTag())
          }),
          (r.__getNativeConfig = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof m.a && (n.__makeNative(), (e[t] = n.__getNativeTag()))
            }
            return { type: 'props', props: e }
          }),
          i
        )
      })(m.a)
      var A = function (e) {
        var t = e.getForwardedRef,
          n = e.setLocalRef
        return function (e) {
          var i = t()
          n(e), 'function' == typeof i ? i(e) : 'object' == typeof i && null != i && (i.current = e)
        }
      }
      function P() {
        return (P =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function N(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                x(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function x(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function D(e, t) {
        if (null == e) return {}
        var n,
          i,
          r = {},
          a = Object.keys(e)
        for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n])
        return r
      }
      function L(e, t) {
        return (L =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var V = 1
      var R = function (e, t) {
        u()(
          'function' != typeof e || (e.prototype && e.prototype.isReactComponent),
          '`createAnimatedComponent` does not support stateless functional components; use a class component instead.',
        )
        var n = (function (n) {
          var i, a
          function o() {
            for (var e, t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r]
            return (
              ((e = n.call.apply(n, [this].concat(i)) || this)._invokeAnimatedPropsCallbackOnMount = !1),
              (e._eventDetachers = []),
              (e._animatedComponentId = V++ + ':animatedComponent'),
              (e._isFabric = function () {
                var t, n, i, r, a, o
                return (
                  null != e._component &&
                  (null !=
                    (null == (t = e._component._internalInstanceHandle) || null == (n = t.stateNode)
                      ? void 0
                      : n.canonical) ||
                    (null != e._component.getNativeScrollRef &&
                      null != e._component.getNativeScrollRef() &&
                      null !=
                        (null == (i = e._component.getNativeScrollRef()._internalInstanceHandle) ||
                        null == (r = i.stateNode)
                          ? void 0
                          : r.canonical)) ||
                    (null != e._component.getScrollResponder &&
                      null != e._component.getScrollResponder() &&
                      null != e._component.getScrollResponder().getNativeScrollRef &&
                      null != e._component.getScrollResponder().getNativeScrollRef() &&
                      null !=
                        (null == (a = e._component.getScrollResponder().getNativeScrollRef()._internalInstanceHandle) ||
                        null == (o = a.stateNode)
                          ? void 0
                          : o.canonical)))
                )
              }),
              (e._waitForUpdate = function () {
                e._isFabric() && s.a.API.setWaitingForIdentifier(e._animatedComponentId)
              }),
              (e._markUpdateComplete = function () {
                e._isFabric() && s.a.API.unsetWaitingForIdentifier(e._animatedComponentId)
              }),
              (e._animatedPropsCallback = function () {
                if (null == e._component) e._invokeAnimatedPropsCallbackOnMount = !0
                else if ('function' != typeof e._component.setNativeProps || e._isFabric()) e.forceUpdate()
                else {
                  if (e._propsAnimated.__isNative)
                    throw new Error(
                      'Attempting to run JS driven animation on animated node that has been moved to "native" earlier by starting an animation with `useNativeDriver: true`',
                    )
                  e._component.setNativeProps(e._propsAnimated.__getAnimatedValue())
                }
              }),
              (e._setComponentRef = A({
                getForwardedRef: function () {
                  return e.props.forwardedRef
                },
                setLocalRef: function (t) {
                  ;(e._prevComponent = e._component),
                    (e._component = t),
                    null != t &&
                      null == t.getNode &&
                      (t.getNode = function () {
                        return t
                      })
                },
              })),
              e
            )
          }
          ;(a = n), ((i = o).prototype = Object.create(a.prototype)), (i.prototype.constructor = i), L(i, a)
          var c = o.prototype
          return (
            (c._attachNativeEvents = function () {
              var e,
                t = this,
                n =
                  null != (e = this._component) && e.getScrollableNode
                    ? this._component.getScrollableNode()
                    : this._component,
                i = function (e) {
                  var i = t.props[e]
                  i instanceof p &&
                    i.__isNative &&
                    (i.__attach(n, e),
                    t._eventDetachers.push(function () {
                      return i.__detach(n, e)
                    }))
                }
              for (var r in this.props) i(r)
            }),
            (c._detachNativeEvents = function () {
              this._eventDetachers.forEach(function (e) {
                return e()
              }),
                (this._eventDetachers = [])
            }),
            (c._attachProps = function (e) {
              var t = this._propsAnimated
              e !== t &&
                ((this._propsAnimated = new k(e, this._animatedPropsCallback)),
                t && (t.__restoreDefaultValues(), t.__detach()))
            }),
            (c.render = function () {
              var n,
                i,
                a = this._propsAnimated.__getValue() || {},
                o = a.style,
                s = void 0 === o ? {} : o,
                c = D(a, ['style']),
                l = this.props.passthroughAnimatedPropExplicitValues || {},
                u = l.style,
                d = void 0 === u ? {} : u,
                p = D(l, ['style']),
                m = T(T({}, s), d),
                f =
                  (null == this._component && (!1 === (null == t ? void 0 : t.collapsable) || !0 !== c.collapsable)) ||
                  this._isFabric(),
                h = (
                  null !== (n = c.collapsable) && void 0 !== n
                    ? n
                    : this._propsAnimated.__isNative || f || !1 === (null == t ? void 0 : t.collapsable)
                )
                  ? { nativeID: null !== (i = c.nativeID) && void 0 !== i ? i : 'animatedComponent', collapsable: !1 }
                  : {}
              return r.createElement(e, P({}, c, p, h, { style: m, ref: this._setComponentRef }))
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
            (c.UNSAFE_componentWillReceiveProps = function (e) {
              this._waitForUpdate(), this._attachProps(e)
            }),
            (c.componentDidUpdate = function (e) {
              this._component !== this._prevComponent && this._propsAnimated.setNativeView(this._component),
                (this._component === this._prevComponent && e === this.props) ||
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
        })(r.Component)
        return r.forwardRef(function (e, t) {
          return r.createElement(n, P({}, e, null == t ? null : { forwardedRef: t }))
        })
      }
      function j() {
        return (j =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      var M = R(
          r.forwardRef(function (e, t) {
            return r.createElement(a.a, j({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
        ),
        F = R(n('U+bB').a, { collapsable: !1 }),
        B = n('Iok7')
      function U() {
        return (U =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      var H = R(
          r.forwardRef(function (e, t) {
            return r.createElement(B.a, U({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
          { collapsable: !1 },
        ),
        z = n('MWbm'),
        W = n('8cgI')
      function q() {
        return (q =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function G(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return X(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var i = 0
            return function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] }
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        return (n = e[Symbol.iterator]()).next.bind(n)
      }
      function X(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
      }
      function Y(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Y(Object(n), !0).forEach(function (t) {
                Q(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Q(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function J(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function Z(e, t) {
        ;(e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), $(e, t)
      }
      function $(e, t) {
        return ($ =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var ee = (function (e) {
        function t() {
          for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this)._getItem = function (e, t, n) {
              if (!t) return null
              for (var i = n - 1, r = 0; r < t.length; r++) {
                var a = t[r],
                  o = a.data,
                  s = e.getItemCount(o)
                if (-1 === i || i === s) return a
                if (i < s) return e.getItem(o, i)
                i -= s + 2
              }
              return null
            }),
            (t._keyExtractor = function (e, n) {
              var i = t._subExtractor(n)
              return (i && i.key) || String(n)
            }),
            (t._convertViewable = function (e) {
              u()(null != e.index, 'Received a broken ViewToken')
              var n = t._subExtractor(e.index)
              if (!n) return null
              var i = n.section.keyExtractor || t.props.keyExtractor
              return K(K({}, e), {}, { index: n.index, key: i(e.item, n.index), section: n.section })
            }),
            (t._onViewableItemsChanged = function (e) {
              var n = e.viewableItems,
                i = e.changed,
                r = t.props.onViewableItemsChanged
              null != r &&
                r({
                  viewableItems: n.map(t._convertViewable, J(t)).filter(Boolean),
                  changed: i.map(t._convertViewable, J(t)).filter(Boolean),
                })
            }),
            (t._renderItem = function (e) {
              return function (n) {
                var i = n.item,
                  a = n.index,
                  o = t._subExtractor(a)
                if (!o) return null
                var s = o.index
                if (null == s) {
                  var c = o.section
                  if (!0 === o.header) {
                    var l = t.props.renderSectionHeader
                    return l ? l({ section: c }) : null
                  }
                  var d = t.props.renderSectionFooter
                  return d ? d({ section: c }) : null
                }
                var p = o.section.renderItem || t.props.renderItem,
                  m = t._getSeparatorComponent(a, o, e)
                return (
                  u()(p, 'no renderItem!'),
                  r.createElement(te, {
                    SeparatorComponent: m,
                    LeadingSeparatorComponent: 0 === s ? t.props.SectionSeparatorComponent : void 0,
                    cellKey: o.key,
                    index: s,
                    item: i,
                    leadingItem: o.leadingItem,
                    leadingSection: o.leadingSection,
                    onUpdateSeparator: t._onUpdateSeparator,
                    prevCellKey: (t._subExtractor(a - 1) || {}).key,
                    ref: function (e) {
                      t._cellRefs[o.key] = e
                    },
                    renderItem: p,
                    section: o.section,
                    trailingItem: o.trailingItem,
                    trailingSection: o.trailingSection,
                    inverted: !!t.props.inverted,
                  })
                )
              }
            }),
            (t._onUpdateSeparator = function (e, n) {
              var i = t._cellRefs[e]
              i && i.updateSeparatorProps(n)
            }),
            (t._cellRefs = {}),
            (t._captureRef = function (e) {
              t._listRef = e
            }),
            t
          )
        }
        Z(t, e)
        var n = t.prototype
        return (
          (n.scrollToLocation = function (e) {
            for (var t = e.itemIndex, n = 0; n < e.sectionIndex; n++)
              t += this.props.getItemCount(this.props.sections[n].data) + 2
            var i = e.viewOffset || 0
            if (null != this._listRef) {
              if (e.itemIndex > 0 && this.props.stickySectionHeadersEnabled)
                i += this._listRef._getFrameMetricsApprox(t - e.itemIndex).length
              var r = K(K({}, e), {}, { viewOffset: i, index: t })
              this._listRef.scrollToIndex(r)
            }
          }),
          (n.getListRef = function () {
            return this._listRef
          }),
          (n.render = function () {
            for (
              var e,
                t = this,
                n = this.props,
                i =
                  (n.ItemSeparatorComponent,
                  n.SectionSeparatorComponent,
                  n.renderItem,
                  n.renderSectionFooter,
                  n.renderSectionHeader,
                  n.sections,
                  n.stickySectionHeadersEnabled,
                  (function (e, t) {
                    if (null == e) return {}
                    var n,
                      i,
                      r = {},
                      a = Object.keys(e)
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n])
                    return r
                  })(n, [
                    'ItemSeparatorComponent',
                    'SectionSeparatorComponent',
                    'renderItem',
                    'renderSectionFooter',
                    'renderSectionHeader',
                    'sections',
                    'stickySectionHeadersEnabled',
                  ])),
                a = this.props.ListHeaderComponent ? 1 : 0,
                o = this.props.stickySectionHeadersEnabled ? [] : void 0,
                s = 0,
                c = G(this.props.sections);
              !(e = c()).done;

            ) {
              var l = e.value
              null != o && o.push(s + a), (s += 2), (s += this.props.getItemCount(l.data))
            }
            var u = this._renderItem(s)
            return r.createElement(
              W.a,
              q({}, i, {
                keyExtractor: this._keyExtractor,
                stickyHeaderIndices: o,
                renderItem: u,
                data: this.props.sections,
                getItem: function (e, n) {
                  return t._getItem(t.props, e, n)
                },
                getItemCount: function () {
                  return s
                },
                onViewableItemsChanged: this.props.onViewableItemsChanged ? this._onViewableItemsChanged : void 0,
                ref: this._captureRef,
              }),
            )
          }),
          (n._subExtractor = function (e) {
            for (
              var t = e, n = this.props, i = n.getItem, r = n.getItemCount, a = n.keyExtractor, o = n.sections, s = 0;
              s < o.length;
              s++
            ) {
              var c = o[s],
                l = c.data,
                u = c.key || String(s)
              if (!((t -= 1) >= r(l) + 1))
                return -1 === t
                  ? { section: c, key: u + ':header', index: null, header: !0, trailingSection: o[s + 1] }
                  : t === r(l)
                  ? { section: c, key: u + ':footer', index: null, header: !1, trailingSection: o[s + 1] }
                  : {
                      section: c,
                      key: u + ':' + (c.keyExtractor || a)(i(l, t), t),
                      index: t,
                      leadingItem: i(l, t - 1),
                      leadingSection: o[s - 1],
                      trailingItem: i(l, t + 1),
                      trailingSection: o[s + 1],
                    }
              t -= r(l) + 1
            }
          }),
          (n._getSeparatorComponent = function (e, t, n) {
            if (!(t = t || this._subExtractor(e))) return null
            var i = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
              r = this.props.SectionSeparatorComponent,
              a = e === n - 1,
              o = t.index === this.props.getItemCount(t.section.data) - 1
            return r && o ? r : !i || o || a ? null : i
          }),
          t
        )
      })(r.PureComponent)
      ee.defaultProps = K(K({}, W.a.defaultProps), {}, { data: [] })
      var te = (function (e) {
          function t() {
            for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this).state = {
                separatorProps: {
                  highlighted: !1,
                  leadingItem: t.props.item,
                  leadingSection: t.props.leadingSection,
                  section: t.props.section,
                  trailingItem: t.props.trailingItem,
                  trailingSection: t.props.trailingSection,
                },
                leadingSeparatorProps: {
                  highlighted: !1,
                  leadingItem: t.props.leadingItem,
                  leadingSection: t.props.leadingSection,
                  section: t.props.section,
                  trailingItem: t.props.item,
                  trailingSection: t.props.trailingSection,
                },
              }),
              (t._separators = {
                highlight: function () {
                  ;['leading', 'trailing'].forEach(function (e) {
                    return t._separators.updateProps(e, { highlighted: !0 })
                  })
                },
                unhighlight: function () {
                  ;['leading', 'trailing'].forEach(function (e) {
                    return t._separators.updateProps(e, { highlighted: !1 })
                  })
                },
                updateProps: function (e, n) {
                  var i = t.props,
                    r = i.LeadingSeparatorComponent,
                    a = i.cellKey,
                    o = i.prevCellKey
                  'leading' === e && null != r
                    ? t.setState(function (e) {
                        return { leadingSeparatorProps: K(K({}, e.leadingSeparatorProps), n) }
                      })
                    : t.props.onUpdateSeparator(('leading' === e && o) || a, n)
                },
              }),
              t
            )
          }
          Z(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return {
                separatorProps: K(
                  K({}, t.separatorProps),
                  {},
                  {
                    leadingItem: e.item,
                    leadingSection: e.leadingSection,
                    section: e.section,
                    trailingItem: e.trailingItem,
                    trailingSection: e.trailingSection,
                  },
                ),
                leadingSeparatorProps: K(
                  K({}, t.leadingSeparatorProps),
                  {},
                  {
                    leadingItem: e.leadingItem,
                    leadingSection: e.leadingSection,
                    section: e.section,
                    trailingItem: e.item,
                    trailingSection: e.trailingSection,
                  },
                ),
              }
            })
          var n = t.prototype
          return (
            (n.updateSeparatorProps = function (e) {
              this.setState(function (t) {
                return { separatorProps: K(K({}, t.separatorProps), e) }
              })
            }),
            (n.render = function () {
              var e = this.props,
                t = e.LeadingSeparatorComponent,
                n = e.SeparatorComponent,
                i = e.item,
                a = e.index,
                o = e.section,
                s = e.inverted,
                c = this.props.renderItem({ item: i, index: a, section: o, separators: this._separators }),
                l = null != t && r.createElement(t, this.state.leadingSeparatorProps),
                u = null != n && r.createElement(n, this.state.separatorProps)
              return l || u ? r.createElement(z.a, null, !1 === s ? l : u, c, !1 === s ? u : l) : c
            }),
            t
          )
        })(r.Component),
        ne = ee
      function ie() {
        return (ie =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function re(e, t) {
        return (re =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function ae(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function oe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ae(Object(n), !0).forEach(function (t) {
                se(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ae(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function se(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var ce = oe(oe({}, ne.defaultProps), {}, { stickySectionHeadersEnabled: 'ios' === i.a.OS }),
        le = (function (e) {
          var t, n
          function i() {
            for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this)._captureRef = function (e) {
                t._wrapperListRef = e
              }),
              t
            )
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), re(t, n)
          var a = i.prototype
          return (
            (a.scrollToLocation = function (e) {
              null != this._wrapperListRef && this._wrapperListRef.scrollToLocation(e)
            }),
            (a.recordInteraction = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.recordInteraction()
            }),
            (a.flashScrollIndicators = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.flashScrollIndicators()
            }),
            (a.getScrollResponder = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (e) return e.getScrollResponder()
            }),
            (a.getScrollableNode = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (e) return e.getScrollableNode()
            }),
            (a.setNativeProps = function (e) {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              t && t.setNativeProps(e)
            }),
            (a.render = function () {
              return r.createElement(
                ne,
                ie({}, this.props, {
                  ref: this._captureRef,
                  getItemCount: function (e) {
                    return e.length
                  },
                  getItem: function (e, t) {
                    return e[t]
                  },
                }),
              )
            }),
            i
          )
        })(r.PureComponent)
      le.defaultProps = ce
      var ue = le
      function de() {
        return (de =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      var pe = R(
          r.forwardRef(function (e, t) {
            return r.createElement(ue, de({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
        ),
        me = R(n('+/1j').a, { collapsable: !1 }),
        fe = R(z.a, { collapsable: !0 }),
        he = n('FGdj')
      function _e(e, t) {
        return (_e =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var ve = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new o.a(t) : t),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), _e(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            return this._a.__getValue() + this._b.__getValue()
          }),
          (r.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (r.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (r.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__getNativeConfig = function () {
            return { type: 'addition', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(f.a)
      function be(e, t) {
        return (be =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var ge = (function (e) {
        var t, n
        function i(t, n, i) {
          var r
          return (
            ((r = e.call(this) || this)._a = t),
            (r._min = n),
            (r._max = i),
            (r._value = r._lastValue = r._a.__getValue()),
            r
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), be(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._a.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (r.__getValue = function () {
            var e = this._a.__getValue(),
              t = e - this._lastValue
            return (
              (this._lastValue = e),
              (this._value = Math.min(Math.max(this._value + t, this._min), this._max)),
              this._value
            )
          }),
          (r.__attach = function () {
            this._a.__addChild(this)
          }),
          (r.__detach = function () {
            this._a.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__getNativeConfig = function () {
            return { type: 'diffclamp', input: this._a.__getNativeTag(), min: this._min, max: this._max }
          }),
          i
        )
      })(f.a)
      function ye(e, t) {
        return (ye =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Ee = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._warnedAboutDivideByZero = !1),
            0 === n || (n instanceof m.a && n.__getValue()),
            (i._a = 'number' == typeof t ? new o.a(t) : t),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), ye(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            var e = this._a.__getValue(),
              t = this._b.__getValue()
            return 0 === t
              ? (this._warnedAboutDivideByZero || (this._warnedAboutDivideByZero = !0), 0)
              : ((this._warnedAboutDivideByZero = !1), e / t)
          }),
          (r.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (r.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (r.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__getNativeConfig = function () {
            return { type: 'division', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(f.a)
      function we(e, t) {
        return (we =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Ie = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return ((i = e.call(this) || this)._a = t), (i._modulus = n), i
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), we(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._a.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus
          }),
          (r.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (r.__attach = function () {
            this._a.__addChild(this)
          }),
          (r.__detach = function () {
            this._a.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__getNativeConfig = function () {
            return { type: 'modulus', input: this._a.__getNativeTag(), modulus: this._modulus }
          }),
          i
        )
      })(f.a)
      function Se(e, t) {
        return (Se =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Oe = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new o.a(t) : t),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Se(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            return this._a.__getValue() * this._b.__getValue()
          }),
          (r.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (r.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (r.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__getNativeConfig = function () {
            return { type: 'multiplication', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(f.a)
      function Ce(e, t) {
        return (Ce =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var ke = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new o.a(t) : t),
            (i._b = 'number' == typeof n ? new o.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Ce(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            return this._a.__getValue() - this._b.__getValue()
          }),
          (r.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (r.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (r.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__getNativeConfig = function () {
            return { type: 'subtraction', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(f.a)
      function Ae(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Pe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                Ne(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ae(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ne(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function Te(e, t) {
        return (Te =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var xe = (function (e) {
          var t, n
          function i(t, n, i, r, a) {
            var o
            return (
              ((o = e.call(this) || this)._value = t),
              (o._parent = n),
              (o._animationClass = i),
              (o._animationConfig = r),
              (o._useNativeDriver = Object(s.c)(r)),
              (o._callback = a),
              o.__attach(),
              o
            )
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Te(t, n)
          var r = i.prototype
          return (
            (r.__makeNative = function () {
              ;(this.__isNative = !0),
                this._parent.__makeNative(),
                e.prototype.__makeNative.call(this),
                this._value.__makeNative()
            }),
            (r.__getValue = function () {
              return this._parent.__getValue()
            }),
            (r.__attach = function () {
              this._parent.__addChild(this), this._useNativeDriver && this.__makeNative()
            }),
            (r.__detach = function () {
              this._parent.__removeChild(this), e.prototype.__detach.call(this)
            }),
            (r.update = function () {
              this._value.animate(
                new this._animationClass(
                  Pe(Pe({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() }),
                ),
                this._callback,
              )
            }),
            (r.__getNativeConfig = function () {
              var e = new this._animationClass(
                Pe(Pe({}, this._animationConfig), {}, { toValue: void 0 }),
              ).__getNativeAnimationConfig()
              return {
                type: 'tracking',
                animationId: Object(s.b)(),
                animationConfig: e,
                toValue: this._parent.__getNativeTag(),
                value: this._value.__getNativeTag(),
              }
            }),
            i
          )
        })(m.a),
        De = n('/x6e'),
        Le = n('BtOK'),
        Ve = n('jydp'),
        Re = n('e6X4')
      function je(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                Fe(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Fe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var Be = function (e, t) {
          return e && t.onComplete
            ? function () {
                t.onComplete && t.onComplete.apply(t, arguments), e && e.apply(void 0, arguments)
              }
            : e || t.onComplete
        },
        Ue = function (e, t, n) {
          if (e instanceof De.a) {
            var i = Me({}, t),
              r = Me({}, t)
            for (var a in t) {
              var o = t[a],
                s = o.x,
                c = o.y
              void 0 !== s && void 0 !== c && ((i[a] = s), (r[a] = c))
            }
            var l = n(e.x, i),
              u = n(e.y, r)
            return We([l, u], { stopTogether: !1 })
          }
          return null
        },
        He = function e(t, n) {
          var i = function (e, t, n) {
            n = Be(n, t)
            var i = e,
              r = t
            i.stopTracking(),
              t.toValue instanceof m.a ? i.track(new xe(i, t.toValue, Re.a, r, n)) : i.animate(new Re.a(r), n)
          }
          return (
            Ue(t, n, e) || {
              start: function (e) {
                i(t, n, e)
              },
              stop: function () {
                t.stopAnimation()
              },
              reset: function () {
                t.resetAnimation()
              },
              _startNativeLoop: function (e) {
                var r = Me(Me({}, n), {}, { iterations: e })
                i(t, r)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        ze = function (e) {
          var t = 0
          return {
            start: function (n) {
              0 === e.length
                ? n && n({ finished: !0 })
                : e[t].start(function i(r) {
                    r.finished && ++t !== e.length ? e[t].start(i) : n && n(r)
                  })
            },
            stop: function () {
              t < e.length && e[t].stop()
            },
            reset: function () {
              e.forEach(function (e, n) {
                n <= t && e.reset()
              }),
                (t = 0)
            },
            _startNativeLoop: function () {
              throw new Error('Loops run using the native driver cannot contain Animated.sequence animations')
            },
            _isUsingNativeDriver: function () {
              return !1
            },
          }
        },
        We = function (e, t) {
          var n = 0,
            i = {},
            r = !(t && !1 === t.stopTogether),
            a = {
              start: function (t) {
                n !== e.length
                  ? e.forEach(function (o, s) {
                      var c = function (o) {
                        if (((i[s] = !0), ++n === e.length)) return (n = 0), void (t && t(o))
                        !o.finished && r && a.stop()
                      }
                      o ? o.start(c) : c({ finished: !0 })
                    })
                  : t && t({ finished: !0 })
              },
              stop: function () {
                e.forEach(function (e, t) {
                  !i[t] && e.stop(), (i[t] = !0)
                })
              },
              reset: function () {
                e.forEach(function (e, t) {
                  e.reset(), (i[t] = !1), (n = 0)
                })
              },
              _startNativeLoop: function () {
                throw new Error('Loops run using the native driver cannot contain Animated.parallel animations')
              },
              _isUsingNativeDriver: function () {
                return !1
              },
            }
          return a
        },
        qe = function (e) {
          return He(new o.a(0), { toValue: 0, delay: e, duration: 0, useNativeDriver: !1 })
        }
      var Ge = {
        Value: o.a,
        ValueXY: De.a,
        Interpolation: he.a,
        Node: m.a,
        decay: function e(t, n) {
          var i = function (e, t, n) {
            n = Be(n, t)
            var i = e,
              r = t
            i.stopTracking(), i.animate(new Le.a(r), n)
          }
          return (
            Ue(t, n, e) || {
              start: function (e) {
                i(t, n, e)
              },
              stop: function () {
                t.stopAnimation()
              },
              reset: function () {
                t.resetAnimation()
              },
              _startNativeLoop: function (e) {
                var r = Me(Me({}, n), {}, { iterations: e })
                i(t, r)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        timing: He,
        spring: function e(t, n) {
          var i = function (e, t, n) {
            n = Be(n, t)
            var i = e,
              r = t
            i.stopTracking(),
              t.toValue instanceof m.a ? i.track(new xe(i, t.toValue, Ve.a, r, n)) : i.animate(new Ve.a(r), n)
          }
          return (
            Ue(t, n, e) || {
              start: function (e) {
                i(t, n, e)
              },
              stop: function () {
                t.stopAnimation()
              },
              reset: function () {
                t.resetAnimation()
              },
              _startNativeLoop: function (e) {
                var r = Me(Me({}, n), {}, { iterations: e })
                i(t, r)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        add: function (e, t) {
          return new ve(e, t)
        },
        subtract: function (e, t) {
          return new ke(e, t)
        },
        divide: function (e, t) {
          return new Ee(e, t)
        },
        multiply: function (e, t) {
          return new Oe(e, t)
        },
        modulo: function (e, t) {
          return new Ie(e, t)
        },
        diffClamp: function (e, t, n) {
          return new ge(e, t, n)
        },
        delay: qe,
        sequence: ze,
        parallel: We,
        stagger: function (e, t) {
          return We(
            t.map(function (t, n) {
              return ze([qe(e * n), t])
            }),
          )
        },
        loop: function (e, t) {
          var n = void 0 === t ? {} : t,
            i = n.iterations,
            r = void 0 === i ? -1 : i,
            a = n.resetBeforeIteration,
            o = void 0 === a || a,
            s = !1,
            c = 0
          return {
            start: function (t) {
              e && 0 !== r
                ? e._isUsingNativeDriver()
                  ? e._startNativeLoop(r)
                  : (function n(i) {
                      void 0 === i && (i = { finished: !0 }),
                        s || c === r || !1 === i.finished ? t && t(i) : (c++, o && e.reset(), e.start(n))
                    })()
                : t && t({ finished: !0 })
            },
            stop: function () {
              ;(s = !0), e.stop()
            },
            reset: function () {
              ;(c = 0), (s = !1), e.reset()
            },
            _startNativeLoop: function () {
              throw new Error('Loops run using the native driver cannot contain Animated.loop animations')
            },
            _isUsingNativeDriver: function () {
              return e._isUsingNativeDriver()
            },
          }
        },
        event: function (e, t) {
          var n = new p(e, t)
          return n.__isNative ? n : n.__getHandler()
        },
        createAnimatedComponent: R,
        attachNativeEvent: d,
        forkEvent: function (e, t) {
          return e
            ? e instanceof p
              ? (e.__addListener(t), e)
              : function () {
                  'function' == typeof e && e.apply(void 0, arguments), t.apply(void 0, arguments)
                }
            : t
        },
        unforkEvent: function (e, t) {
          e && e instanceof p && e.__removeListener(t)
        },
        Event: p,
        __PropsOnlyForTests: k,
      }
      function Xe(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                Ke(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ke(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var Qe = {
          start: function () {},
          stop: function () {},
          reset: function () {},
          _startNativeLoop: function () {},
          _isUsingNativeDriver: function () {
            return !1
          },
        },
        Je = {
          Value: o.a,
          ValueXY: De.a,
          Interpolation: he.a,
          Node: m.a,
          decay: function (e, t) {
            return Qe
          },
          timing: function (e, t) {
            var n = e
            return Ye(
              Ye({}, Qe),
              {},
              {
                start: function (e) {
                  n.setValue(t.toValue), e && e({ finished: !0 })
                },
              },
            )
          },
          spring: function (e, t) {
            var n = e
            return Ye(
              Ye({}, Qe),
              {},
              {
                start: function (e) {
                  n.setValue(t.toValue), e && e({ finished: !0 })
                },
              },
            )
          },
          add: Ge.add,
          subtract: Ge.subtract,
          divide: Ge.divide,
          multiply: Ge.multiply,
          modulo: Ge.modulo,
          diffClamp: Ge.diffClamp,
          delay: function (e) {
            return Qe
          },
          sequence: function (e) {
            return Qe
          },
          parallel: function (e, t) {
            return Qe
          },
          stagger: function (e, t) {
            return Qe
          },
          loop: function (e, t) {
            ;(void 0 === t ? {} : t).iterations
            return Qe
          },
          event: function (e, t) {
            return null
          },
          createAnimatedComponent: R,
          attachNativeEvent: d,
          forkEvent: Ge.forkEvent,
          unforkEvent: Ge.unforkEvent,
          Event: p,
          __PropsOnlyForTests: k,
        }
      function Ze(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
      }
      function $e(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var et = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(n), !0).forEach(function (t) {
                $e(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ze(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      })({ FlatList: M, Image: F, ScrollView: H, SectionList: pe, Text: me, View: fe }, i.a.isTesting ? Je : Ge)
      t.a = et
    },
    XJEr: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'b', function () {
          return y
        }),
          n.d(t, 'c', function () {
            return w
          })
        var i,
          r = n('vG6z'),
          a = n('mbB1'),
          o = n('0m3q'),
          s = n('4LIG'),
          c = n('tI3i'),
          l = n.n(c),
          u = 'ios' === s.a.OS && e.RN$Bridgeless ? a.a : r.a,
          d = 1,
          p = 1,
          m = new Set(),
          f = !1,
          h = [],
          _ = {
            getValue: function (e, t) {
              l()(u, 'Native animated module is not available'), u.getValue && u.getValue(e, t)
            },
            setWaitingForIdentifier: function (e) {
              m.add(e), (f = !0)
            },
            unsetWaitingForIdentifier: function (e) {
              m.delete(e), 0 === m.size && ((f = !1), _.disableQueue())
            },
            disableQueue: function () {
              l()(u, 'Native animated module is not available'), 'android' === s.a.OS && u.startOperationBatch()
              for (var e = 0, t = h.length; e < t; e++) h[e]()
              ;(h.length = 0), 'android' === s.a.OS && u.finishOperationBatch()
            },
            queueOperation: function (e) {
              f ? h.push(e) : e()
            },
            createAnimatedNode: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.createAnimatedNode(e, t)
                })
            },
            startListeningToAnimatedNodeValue: function (e) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.startListeningToAnimatedNodeValue(e)
                })
            },
            stopListeningToAnimatedNodeValue: function (e) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.stopListeningToAnimatedNodeValue(e)
                })
            },
            connectAnimatedNodes: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.connectAnimatedNodes(e, t)
                })
            },
            disconnectAnimatedNodes: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.disconnectAnimatedNodes(e, t)
                })
            },
            startAnimatingNode: function (e, t, n, i) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.startAnimatingNode(e, t, n, i)
                })
            },
            stopAnimation: function (e) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.stopAnimation(e)
                })
            },
            setAnimatedNodeValue: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.setAnimatedNodeValue(e, t)
                })
            },
            setAnimatedNodeOffset: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.setAnimatedNodeOffset(e, t)
                })
            },
            flattenAnimatedNodeOffset: function (e) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.flattenAnimatedNodeOffset(e)
                })
            },
            extractAnimatedNodeOffset: function (e) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.extractAnimatedNodeOffset(e)
                })
            },
            connectAnimatedNodeToView: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.connectAnimatedNodeToView(e, t)
                })
            },
            disconnectAnimatedNodeFromView: function (e, t) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.disconnectAnimatedNodeFromView(e, t)
                })
            },
            restoreDefaultValues: function (e) {
              l()(u, 'Native animated module is not available'),
                null != u.restoreDefaultValues &&
                  _.queueOperation(function () {
                    return u.restoreDefaultValues(e)
                  })
            },
            dropAnimatedNode: function (e) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.dropAnimatedNode(e)
                })
            },
            addAnimatedEventToView: function (e, t, n) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.addAnimatedEventToView(e, t, n)
                })
            },
            removeAnimatedEventFromView: function (e, t, n) {
              l()(u, 'Native animated module is not available'),
                _.queueOperation(function () {
                  return u.removeAnimatedEventFromView(e, t, n)
                })
            },
          },
          v = {
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
          b = {
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
          g = { inputRange: !0, outputRange: !0, extrapolate: !0, extrapolateRight: !0, extrapolateLeft: !0 }
        function y() {
          return p++
        }
        var E = !1
        function w(e) {
          return e.useNativeDriver, !0 !== e.useNativeDriver || u ? e.useNativeDriver || !1 : (E || (E = !0), !1)
        }
        t.a = {
          API: _,
          addWhitelistedStyleProp: function (e) {
            v[e] = !0
          },
          addWhitelistedTransformProp: function (e) {
            b[e] = !0
          },
          addWhitelistedInterpolationParam: function (e) {
            g[e] = !0
          },
          validateStyles: function (e) {
            for (var t in e)
              if (!v.hasOwnProperty(t))
                throw new Error("Style property '" + t + "' is not supported by native animated module")
          },
          validateTransform: function (e) {
            e.forEach(function (e) {
              if (!b.hasOwnProperty(e.property))
                throw new Error("Property '" + e.property + "' is not supported by native animated module")
            })
          },
          validateInterpolation: function (e) {
            for (var t in e)
              if (!g.hasOwnProperty(t))
                throw new Error("Interpolation property '" + t + "' is not supported by native animated module")
          },
          generateNewNodeTag: function () {
            return d++
          },
          generateNewAnimationId: y,
          assertNativeAnimatedModule: function () {
            l()(u, 'Native animated module is not available')
          },
          shouldUseNativeDriver: w,
          transformDataType: function (e) {
            return 'string' != typeof e ? e : /deg$/.test(e) ? ((parseFloat(e) || 0) * Math.PI) / 180 : e
          },
          get nativeEventEmitter() {
            return i || (i = new o.a(u)), i
          },
        }
      }.call(this, n('fRV1')))
    },
    XmKV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return o
        })
      n('6U7i'), n('LW0h'), n('7x/C')
      var i = function (e, t) {
          if (0 !== e.length) {
            for (var n = e[0], i = t(n), r = 1; r < e.length; r++) {
              var a = e[r],
                o = t(a)
              o < i && ((n = a), (i = o))
            }
            return n
          }
        },
        r = n('HT/6'),
        a = function (e) {
          var t,
            n,
            r =
              null == e || null === (t = e[0]) || void 0 === t || null === (n = t.placement) || void 0 === n
                ? void 0
                : n.scrollY()
          return i(
            e,
            0 === r
              ? function (e) {
                  return e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE
                }
              : function (e) {
                  return e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE
                },
          )
        },
        o = function (e) {
          var t = e.filter(function (e) {
            return e.playbackPriority === r.a.DOCKABLE
          })
          return t.length ? t[0] : a(e)
        }
    },
    XvPy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return si
      })
      var i = n('m3Bd'),
        r = n.n(i),
        a = n('yiKp'),
        o = n.n(a),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        f = n.n(m),
        h = n('2VqO'),
        _ = n.n(h),
        v = n('KEM+'),
        b = n.n(v),
        g = (n('z84I'), n('ERkP')),
        y = n.n(g),
        E = (n('Blm6'), n('1t7P'), n('jQ/y'), n('ikiw')),
        w = n('t62R'),
        I = n('0GAP'),
        S = n('3XMw'),
        O = n.n(S),
        C = O.a.cfe836d1,
        k = O.a.efb132c2
      O.a.f27deeea
      var A = function (e) {
          return E.a[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6)
        },
        P = function (e, t) {
          var n = A(e)
          return 'Preorder' === t
            ? (function (e) {
                return y.a.createElement(
                  O.a.I18NFormatMessage,
                  { $i18n: 'd6c6deae' },
                  y.a.createElement(w.b, { weight: 'bold' }, O.a.j2b1a8b8({ formattedPrice: e })),
                )
              })(n)
            : y.a.createElement(w.b, { weight: 'bold' }, n)
        },
        N = function (e, t) {
          var n = parseInt(t.micro_value, 10),
            i = parseInt(e.micro_value, 10),
            r = Math.round(((n - i) / n) * 100)
          return C({ percent: r })
        },
        T = function (e, t, n) {
          return e && e.length > 0 ? e[e.length - 1] : t ? t.shortened_google_product_category_name : void 0
        },
        x = function (e) {
          var t = e.commerceProduct,
            n = e.onClick,
            i = e.style,
            r = t.product_core_data,
            a =
              null != r
                ? (function (e) {
                    var t = e.product_details,
                      n = e.product_identifiers,
                      i = t.availability,
                      r = t.cover_media,
                      a = (t.description, t.external_url),
                      o = t.price,
                      s = t.product_sale,
                      c = t.title,
                      l = null == n ? void 0 : n.custom_product_type,
                      u = null == n ? void 0 : n.google_product_category,
                      d = null == r ? void 0 : r.media_info
                    if (null == d) return null
                    var p = (function (e, t) {
                        return t
                          ? { currentPrice: t.price, previousPrice: e }
                          : { currentPrice: e, previousPrice: void 0 }
                      })(o, s),
                      m = p.currentPrice,
                      f = p.previousPrice
                    return {
                      formattedDescription: T(l, u),
                      formattedPercentOff: f ? N(m, f) : void 0,
                      formattedPreviousPrice: f ? A(f) : void 0,
                      formattedPrice: P(m, i),
                      formattedTitle: c,
                      image: 'ApiImage' === d.__typename ? d.original_img_url : '',
                      url: a.url,
                    }
                  })(r)
                : null
          if (a) {
            var o = a.formattedDescription,
              s = a.formattedPercentOff,
              c = a.formattedPreviousPrice,
              l = a.formattedPrice,
              u = a.formattedTitle,
              d = a.image,
              p = a.url
            return y.a.createElement(I.a, {
              accessibilityLabel: k({ title: u, description: o, price: l }),
              containerStyle: i,
              description: o,
              image: d,
              imageOverlayText: s,
              link: p,
              onClick: function () {
                n && n()
              },
              previousPrice: c,
              price: l,
              title: u,
            })
          }
          return null
        },
        D = n('3zvM'),
        L = n('lMB6'),
        V = Object(D.e)({ namespace: 'commerceItems' }),
        R = o()({}, V),
        j = L.a.register(R),
        M = n('rxPX'),
        F = function (e, t) {
          var n = t.commerceItemId
          return n ? j.select(e, n) : void 0
        },
        B = Object(M.a)().propsFromState(function () {
          return { commerceItem: F }
        }),
        U = ['__typename'],
        H = B(function (e) {
          var t = e.commerceItem,
            n = e.onClick
          switch (null == t ? void 0 : t.__typename) {
            case 'CommerceProduct':
              t.__typename
              var i = r()(t, U)
              return y.a.createElement(x, { commerceProduct: i, onClick: n })
            default:
              return null
          }
        }),
        z =
          (n('LW0h'),
          n('7x/C'),
          function (e, t) {
            return t.module
              .selectItems(e)
              .map(function (t) {
                return t ? j.select(e, t) : void 0
              })
              .filter(Boolean)
          }),
        W = Object(M.a)().propsFromState(function (e) {
          return { commerceItems: z }
        }),
        q = (n('jwue'), n('+oxZ'), n('FGLp')),
        G = n('MWbm'),
        X = { threshold: 0.01 },
        Y = function (e) {
          var t = e.children,
            n = e.onImpression,
            i = e.style,
            r = y.a.useRef(null),
            a = function (e) {
              e.forEach(function (e) {
                e.isIntersecting && n()
              })
            }
          return (
            Object(q.a)(function () {
              if ('IntersectionObserver' in window) {
                var e = new IntersectionObserver(a, X),
                  t = r.current
                null != t && e.observe(t)
                return function () {
                  var t = r.current
                  null != t && e.unobserve(t), e.disconnect()
                }
              }
            }),
            y.a.createElement(G.a, { ref: r, style: i }, t)
          )
        },
        K = n('Rp9C'),
        Q = n('FS1z'),
        J = n('Irs7'),
        Z = n('FIs5'),
        $ = n('rHpw'),
        ee = O.a.e9f1fbcb,
        te = O.a.c9b302f8,
        ne = function () {
          return y.a.createElement(Z.a, { header: ee, message: te })
        },
        ie = $.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 },
            cell: { marginHorizontal: '1%', marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: '48%' },
          }
        }),
        re = Object(J.a)(
          W(function (e) {
            var t = e.analytics,
              n = e.commerceItems,
              i = e.module,
              r = t.contextualScribeData
            y.a.useEffect(
              function () {
                t.scribe({ action: 'impression', data: r })
              },
              [t, r],
            )
            var a = function (e, i) {
                var a = K.a.addCommerceDetailsToItems(r, n, e)
                t.scribe({ element: 'product', action: i, data: a })
              },
              o = function (e) {
                return function () {
                  a(e, 'impression')
                }
              },
              s = function (e) {
                return function () {
                  a(e, 'click')
                }
              }
            return y.a.createElement(
              G.a,
              { style: ie.root },
              y.a.createElement(Q.a, {
                module: i,
                noItemsRenderer: ne,
                numColumns: 2,
                renderer: function (e) {
                  var t = e.item
                  return y.a.createElement(
                    Y,
                    { onImpression: o(t), style: ie.cell },
                    y.a.createElement(H, { commerceItemId: t, onClick: s(t) }),
                  )
                },
              }),
            )
          }),
        ),
        ae = n('dwig'),
        oe = n('kGix'),
        se = n('v//M'),
        ce = n('0+qk'),
        le = (n('2G9S'), n('hBvt'), n('uFXj'), n('ho0z'), n('G6rE')),
        ue = Object(M.a)()
          .propsFromState(function () {
            return { loggedInUser: le.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          })
          .withAnalytics(),
        de = n('cm6r'),
        pe = n('XP29'),
        me = n('cjZk'),
        fe = n('3rWK'),
        he = n('ll3R'),
        _e = O.a.b8f0483e,
        ve = O.a.e349147b,
        be = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleClick', function (t) {
                var n = e.props,
                  i = n.analytics,
                  r = n.onClick
                r && r(t), i.scribe({ component: 'inline_compose_prompt', action: 'click' })
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
                    t = e.isDisabled,
                    n = e.link,
                    i = e.promptLabel,
                    r = e.userAvatarURI,
                    a = e.userName,
                    o = e.withBorder,
                    s = e.withComposeIcons
                  return y.a.createElement(
                    de.a,
                    {
                      accessibilityLabel: _e,
                      interactiveStyles: null,
                      link: t ? void 0 : n,
                      onClick: t ? void 0 : this._handleClick,
                      style: [ge.root, o && ge.borderBottom],
                    },
                    y.a.createElement(pe.a, { accessibilityLabel: a, size: 'xxLarge', uri: r }),
                    y.a.createElement(
                      G.a,
                      { style: [ge.column, ge.bodyColumn] },
                      y.a.createElement(
                        G.a,
                        { style: [ge.fakeInput, t && ge.disabled] },
                        y.a.createElement(w.b, { color: 'gray700', numberOfLines: 1, size: 'subtext1' }, i),
                      ),
                      s
                        ? y.a.createElement(
                            y.a.Fragment,
                            null,
                            y.a.createElement(me.a, { style: ge.icon }),
                            y.a.createElement(fe.a, { style: ge.icon }),
                            y.a.createElement(he.a, { style: ge.icon }),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(be, 'defaultProps', { link: '/compose/tweet', promptLabel: ve, withBorder: !1, withComposeIcons: !0 })
      var ge = $.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              flexDirection: 'row',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              zIndex: 1,
            },
            borderBottom: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
            column: { alignItems: 'center', flexBasis: 0, flexDirection: 'row', flexShrink: 1, minWidth: 0 },
            bodyColumn: { flexGrow: 1, justifyContent: 'space-between', marginLeft: e.spaces.space12 },
            fakeInput: {
              borderColor: e.colors.gray200,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.infinite,
              flexGrow: 1,
              flexShrink: 1,
              paddingHorizontal: e.spaces.space16,
              paddingVertical: e.spaces.space12,
            },
            disabled: { opacity: 0.5 },
            icon: {
              color: e.colors.primary,
              height: 'calc('.concat(e.spaces.space20, ' + ').concat(e.spaces.space4, ')'),
              marginLeft: e.spaces.space12,
              width: 'calc('.concat(e.spaces.space20, ' + ').concat(e.spaces.space4, ')'),
            },
          }
        }),
        ye = ue(be),
        Ee = n('s3M2'),
        we = n.n(Ee),
        Ie = n('ddV6'),
        Se = n.n(Ie),
        Oe = (n('M+/F'), n('RrqW'))
      var Ce = function (e) {
          var t,
            n = e.children,
            i = e.onInterstitialSubmit,
            r = y.a.useState(e.interstitials || []),
            a = Se()(r, 2),
            o = a[0],
            s = a[1],
            c = function () {
              var e = we()(o),
                t = e[0],
                n = e.slice(1)
              s(n), i && i(t)
            }
          return o
            ? (t = o && o[0])
              ? (function (e) {
                  var t = e.isFullPageInterstitial,
                    i = e.screenName,
                    r = e.type,
                    a = y.a.createElement(Oe.b, { onPress: c, screenName: i, type: r })
                  return t ? a : n(a)
                })(t)
              : n()
            : n()
        },
        ke = n('wAC9'),
        Ae = function (e) {
          return Object(ke.a)({
            contextSuffix: 'LIVE_COMMERCE_ITEMS_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.Commerce.fetchLiveCommerceItemsSlice
            },
            getEndpointParams: function () {
              return { liveEventId: e }
            },
            sliceKey: 'liveCommerceItemsSlice-'.concat(e),
          })
        },
        Pe = (n('jQ3i'), n('x4t0'), n('QtuH')),
        Ne = n('zrc3'),
        Te = n('8/3a'),
        xe =
          (n('yH/f'),
          n('lTEL'),
          n('m9LP'),
          n('87if'),
          n('kYxP'),
          n('hCOa'),
          (function () {
            function e(t) {
              var n = this
              c()(this, e),
                b()(this, '_scribedIndices', new Map()),
                b()(this, '_indiceCallbacks', new Map()),
                b()(this, '_handleScribeImpression', function (e) {
                  n._scribedIndices.set(e, !0), n._scribeImpression(e)
                }),
                (this._scribeImpression = t)
            }
            return (
              u()(e, [
                {
                  key: 'destroy',
                  value: function () {
                    Array.from(this._indiceCallbacks.values()).forEach(function (e) {
                      clearTimeout(e)
                    })
                  },
                },
                {
                  key: 'handleVisibilityChange',
                  value: function (e) {
                    var t = this,
                      n = e.index,
                      i = e.intersectionRatio
                    if (!this._scribedIndices.has(n)) {
                      var r = this._indiceCallbacks.has(n)
                      i >= 0.5 && !r
                        ? this._indiceCallbacks.set(
                            n,
                            setTimeout(function () {
                              return t._handleScribeImpression(n)
                            }, 500),
                          )
                        : i < 0.5 && r && (clearTimeout(this._indiceCallbacks.get(n)), this._indiceCallbacks.delete(n))
                    }
                  },
                },
              ]),
              e
            )
          })()),
        De = n('dgjd'),
        Le = n('n4Eu'),
        Ve = n('vbJ7'),
        Re = n('oSwX')
      function je(e) {
        var t,
          n = y.a.useState(0),
          i = Se()(n, 2),
          r = i[0],
          a = i[1],
          s = Object(De.a)(e.audioSpaceId).space
        if (!s) return null
        var c = $.a.theme.colors.purple500
        if (s.hostPalette) {
          var l = Le.a.get(s.hostPalette)
          l && (c = Ve.a.rgbaToCss(o()(o()({}, l.rgb), {}, { alpha: 1 })))
        }
        return y.a.createElement(
          G.a,
          {
            onLayout: function (e) {
              var t = e.nativeEvent.layout.width
              a(t * Fe)
            },
            style: [{ backgroundColor: c }, Me.container],
          },
          y.a.createElement(Re.default, {
            size: 'custom',
            style: { width: r, height: r },
            uri: null === (t = s.host) || void 0 === t ? void 0 : t.avatar_url,
          }),
        )
      }
      var Me = $.a.create(function (e) {
          return { container: { alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' } }
        }),
        Fe = 0.39,
        Be = n('boUI'),
        Ue = n('Wms4'),
        He = n('zlxh'),
        ze = O.a.f2382014,
        We = O.a.g66c8347,
        qe = function (e) {
          var t = e.playbackDuration
          switch (e.type) {
            case He.e.LIVE_BROADCAST:
              return y.a.createElement(Ue.a, { type: 'live' }, ze)
            case He.e.REPLAY_BROADCAST:
              return y.a.createElement(Ue.a, { bold: !0 }, We)
            case He.e.VOD:
              return y.a.createElement(
                Ue.a,
                null,
                (function (e) {
                  if (e) {
                    var t = Math.round(e / 1e3),
                      n = t % 60,
                      i = n < 10 ? '0'.concat(n) : n,
                      r = (t - n) / 60
                    if (r > 60) {
                      var a = Math.floor(r / 60),
                        o = r % 60,
                        s = o % 60 < 10 ? '0'.concat(o) : o
                      return ''.concat(a, ':').concat(s, ':').concat(i)
                    }
                    return ''.concat(r, ':').concat(i)
                  }
                })(t) || '',
              )
            case He.e.GIF:
              return y.a.createElement(Ue.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        Ge = n('Tg44')
      var Xe = { liveSpace: O.a.db4620aa, recordedSpace: O.a.c958e691 },
        Ye = n('hqKg'),
        Ke = n('H9MA'),
        Qe = n('oEGd'),
        Je = Object(Ye.createSelector)(Ke.c, function (e) {
          return { dataSaverMode: e }
        }),
        Ze = Object(Qe.c)(Je),
        $e = n('prG5'),
        et = n('A91F'),
        tt = O.a.i3f7ff0f,
        nt = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { hasImageError: !1, currentSlate: void 0 }),
              b()(p()(e), '_handleError', function () {
                e.setState({ hasImageError: !0 })
              }),
              e
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e, t) {
                    var n = this.state,
                      i = n.currentSlate,
                      r = n.hasImageError,
                      a = t.currentSlate
                    r &&
                      i &&
                      a &&
                      i.image &&
                      a.image &&
                      i.image.url !== a.image.url &&
                      this.setState({ hasImageError: !1 })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.state,
                      t = e.currentSlate,
                      n = e.hasImageError,
                      i = t || {},
                      r = i.cropCandidates,
                      a = i.image,
                      o = i.periscopeVariants
                    return a && !n
                      ? y.a.createElement($e.a, {
                          accessibilityLabel: tt,
                          aspectMode: et.a.exact($.a.theme.aspectRatios.landscape),
                          backgroundColor: $.a.theme.colors.gray50,
                          cropCandidates: r,
                          customVariants: o,
                          hideAcceptOverlay: !0,
                          image: a,
                          onError: this._handleError,
                        })
                      : y.a.createElement(G.a, { style: it.fallback })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    if (t.currentSlate) {
                      var n = t.currentSlate.image.url,
                        i = e.slate.image.url,
                        r = Object(He.h)(n),
                        a = Object(He.h)(i),
                        s = 'latest.jpg' === a
                      return r !== a || (!e.dataSaverMode && s) ? o()(o()({}, t), {}, { currentSlate: e.slate }) : null
                    }
                    return o()(o()({}, t), {}, { currentSlate: e.slate })
                  },
                },
              ],
            ),
            n
          )
        })(y.a.Component),
        it = $.a.create(function (e) {
          return { fallback: { backgroundColor: e.colors.gray50 } }
        }),
        rt = Ze(nt),
        at = n('jV+4'),
        ot = n('9Xij'),
        st = n('855f'),
        ct = n('vCAy'),
        lt = n('I4+6'),
        ut = ['views', 'viewers'],
        dt = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClick,
                    t = this._renderImage(),
                    n = this._renderAttribution(),
                    i = this._renderOverlay(t)
                  return y.a.createElement(
                    de.a,
                    {
                      accessibilityRole: 'button',
                      focusable: !0,
                      interactiveStyles: ft,
                      onClick: e,
                      style: mt.carouselItem,
                    },
                    i,
                    n,
                  )
                },
              },
              {
                key: '_renderAttribution',
                value: function () {
                  var e = this.props.mediaItem.carouselItemInfo
                  if (e) {
                    var t = e.name,
                      n = e.screenName,
                      i = e.verified
                    return y.a.createElement(at.a, {
                      isVerified: i,
                      name: t,
                      screenName: n,
                      style: mt.userAttribution,
                      withStackedLayout: !0,
                    })
                  }
                },
              },
              {
                key: '_renderOverlay',
                value: function (e) {
                  var t = this.props.isSelected
                  return y.a.createElement(
                    ot.a,
                    { ratio: $.a.theme.aspectRatios.landscape, style: mt.image },
                    this._renderSocialProof(e),
                    t && y.a.createElement(G.a, { style: mt.selectedOverlay }),
                  )
                },
              },
              {
                key: '_renderSocialProof',
                value: function (e) {
                  var t = this.props.mediaItem.carouselItemInfo || {},
                    n = t.audiospace,
                    i = t.playbackDuration,
                    r = t.socialProof,
                    a = t.type,
                    o =
                      r && ut.includes(r.type)
                        ? y.a.createElement(
                            Ue.a,
                            null,
                            y.a.createElement(
                              G.a,
                              { style: mt.horizontalContainer },
                              y.a.createElement(Be.a, null),
                              y.a.createElement(w.b, null, st.a.getTruncatedCount(r.count, !0)),
                            ),
                          )
                        : null
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    e,
                    y.a.createElement(pt, {
                      audioSpaceId: null == n ? void 0 : n.id,
                      playbackDuration: i,
                      type: a,
                      viewCount: o,
                    }),
                  )
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props.mediaItem,
                    t = e.carouselItemInfo.audiospace,
                    n = e.slate
                  return t
                    ? y.a.createElement(je, { audioSpaceId: t.id })
                    : n
                    ? y.a.createElement(rt, { slate: n })
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      function pt(e) {
        var t = e.audioSpaceId,
          n = e.playbackDuration,
          i = e.type,
          r = e.viewCount,
          a = (function (e) {
            var t,
              n = Object(De.a)(e || ''),
              i = n.space,
              r = n.utils,
              a = r.is.Running,
              o = r.is.replayable,
              s = r.is.NotStarted
            return (
              (a || o || s) &&
                ((t = { bold: !0, background: void 0, children: void 0 }),
                a
                  ? ((t.background = 'purple500'), (t.children = Xe.liveSpace))
                  : o
                  ? (t.children = Xe.recordedSpace)
                  : s &&
                    null != i &&
                    i.scheduled_start &&
                    (t.children = Ge.a.formatScheduledStartMs(i.scheduled_start).node)),
              t
            )
          })(t),
          o = t ? y.a.createElement(Ue.a, a) : qe({ playbackDuration: n, type: i })
        return y.a.createElement(ct.a, { align: 'left' }, o, r)
      }
      var mt = $.a.create(function (e) {
          return {
            selectedOverlay: o()(
              o()({}, $.a.absoluteFillObject),
              {},
              {
                borderColor: e.colors.primary,
                borderRadius: e.borderRadii.small,
                borderWidth: e.borderWidths.large,
                borderStyle: 'solid',
              },
            ),
            horizontalContainer: { flexDirection: 'row' },
            image: { borderRadius: e.borderRadii.small },
            carouselItem: {
              borderRadius: e.borderRadii.small,
              marginEnd: e.spaces.space12,
              padding: e.spaces.space2,
              width: 150,
            },
            userAttribution: { paddingTop: e.spaces.space4 },
          }
        }),
        ft = lt.a.generate({
          backgroundColor: $.a.theme.colors.transparent,
          color: $.a.theme.colors.primary,
          customFocusBackgroundColor: $.a.theme.colors.transparent,
          insetFocusRing: !0,
        }),
        ht = n('6iuV'),
        _t = Object.freeze({
          CarouselImpression: 'carousel_impression',
          TileClick: 'tile_click',
          TileImpression: 'tile_impression',
          TileAutoClick: 'tile_auto_click',
        }),
        vt = { action: _t.CarouselImpression },
        bt = { action: _t.TileAutoClick },
        gt = { action: _t.TileImpression },
        yt = { action: _t.TileClick },
        Et = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_getHandleOnClickForItem', function (t, n) {
                return function () {
                  var i = e.props.onCarouselScribe
                  n(t, function () {
                    return i(yt)
                  })
                }
              }),
              b()(p()(e), '_handleCarouselChildImpression', function (t) {
                ;(0, e.props.onCarouselScribe)(gt, { tilePosition: t })
              }),
              b()(p()(e), '_handleVisibleRangeChange', function (t) {
                e._impressionTracker.handleVisibilityChange(t)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onCarouselScribe
                  ;(this._impressionTracker = new xe(this._handleCarouselChildImpression)),
                    this._shouldDisplayCarousel() && e(vt)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._impressionTracker.destroy()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = e.carousel,
                    n = this.props,
                    i = n.carousel,
                    r = n.onCarouselScribe
                  this._shouldDisplayCarousel() && i.length !== t.length && r(vt)
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._shouldDisplayCarousel()
                    ? y.a.createElement(
                        ht.a,
                        {
                          onVisibleRangeChange: this._handleVisibleRangeChange,
                          style: wt.carousel,
                          visibleItemIndex: this.props.selectedItemIndex,
                        },
                        this._renderCarouselItems(),
                      )
                    : null
                },
              },
              {
                key: '_renderCarouselItems',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.carousel,
                    i = t.selectedItemIndex,
                    r = t.setSelectedCarouselIndex
                  return n.map(function (t, n) {
                    return y.a.createElement(dt, {
                      isSelected: n === i,
                      key: n,
                      mediaItem: t,
                      onClick: e._getHandleOnClickForItem(n, r),
                    })
                  })
                },
              },
              {
                key: '_shouldDisplayCarousel',
                value: function () {
                  return this.props.carousel.length > 1
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent),
        wt = $.a.create(function (e) {
          return { carousel: { paddingTop: e.spaces.space16 } }
        }),
        It = Et,
        St = n('/yvb'),
        Ot = O.a.j1d352d7,
        Ct = O.a.d18909d4,
        kt = { element: 'reminder_button' },
        At = Object.freeze({ impression: 'impression', click: 'click' })
      var Pt = function (e) {
          var t = e.eventId,
            n = e.onPress,
            i = e.onRemindButtonScribe,
            r = e.remindMeSubscription,
            a = r.notification_id,
            s = r.subscribed,
            c = y.a.useRef({})
          ;(c.current.onRemindButtonScribe = i),
            y.a.useEffect(function () {
              var e
              null === (e = c.current) || void 0 === e || e.onRemindButtonScribe(o()({ action: At.impression }, kt))
            }, [])
          var l = s ? 'primaryOutlined' : 'primaryFilled',
            u = s ? Ot : Ct
          return y.a.createElement(
            St.a,
            {
              onPress: function () {
                n(t, { remind_me: !s, notification_id: a }), i(o()({ action: At.click }, kt))
              },
              size: 'medium',
              type: l,
            },
            u,
          )
        },
        Nt = n('EskI'),
        Tt = n('v6aA'),
        xt = n('0yYu'),
        Dt = n('97Jx'),
        Lt = n.n(Dt),
        Vt = n('ZUOq'),
        Rt = n('MMRb'),
        jt = n('zHh/'),
        Mt = Object(Ye.createSelector)(Ke.d, Rt.selectDrawerVisibility, function (e, t) {
          return { canAutoplay: Object(jt.a)(e), dmDrawerVisibility: t }
        }),
        Ft = Object(Qe.c)(Mt),
        Bt = n('7JQg'),
        Ut = n('AQ79'),
        Ht = y.a.createContext({ dockRequested: !1, closeRequested: !1 }),
        zt = n('MXDK'),
        Wt = { component: 'dock' },
        qt = Object.freeze({
          dockedOnScroll: 'dock_on_scroll',
          undockOnScroll: 'undock_on_scroll',
          dismissTap: 'dismiss_tap',
          undockTap: 'undock_tap',
        })
      var Gt = function (e) {
          var t = y.a.useContext(Tt.a).featureSwitches,
            n = y.a.useRef(null),
            i = y.a.useState(!1),
            r = Se()(i, 2),
            a = r[0],
            s = r[1],
            c = y.a.useState(!1),
            l = Se()(c, 2),
            u = l[0],
            d = l[1],
            p = e.onCloseDockComplete,
            m = e.onDockingScribeAction,
            f = e.render
          return (
            (function (e) {
              y.a.useEffect(
                function () {
                  a && !e && s(!1),
                    a ||
                      u === e ||
                      (d(e), m(o()(o()({}, Wt), {}, { action: e ? qt.dockedOnScroll : qt.undockOnScroll })))
                },
                [e],
              )
            })(e.requestDock),
            (function (e, i) {
              y.a.useEffect(
                function () {
                  if (!i && e) p && p()
                  else if (!i && null != n && n.current) {
                    var r = n.current.offsetTop
                    zt.d({ featureSwitches: t, top: r })
                  }
                },
                [e, i],
              )
            })(a, u),
            y.a.createElement(
              G.a,
              { ref: n },
              f({
                closeRequested: a,
                dockRequested: u,
                requestClose: function () {
                  s(!0), d(!1), m(o()(o()({}, Wt), {}, { action: qt.dismissTap }))
                },
                requestUndock: function () {
                  d(!1), m(o()(o()({}, Wt), {}, { action: qt.undockTap }))
                },
              }),
            )
          )
        },
        Xt = n('gZV8'),
        Yt = n('xKuM'),
        Kt = n('Lsrn'),
        Qt = n('shC7'),
        Jt = n('k/Ka'),
        Zt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Jt.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Kt.a.root, e.style, Qt.a.getConstants().isRTL && Kt.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M19.687 22H7.813C6.538 22 5.5 20.962 5.5 19.687V13.17c0-.413.336-.75.75-.75s.75.337.75.75v6.517c0 .448.365.813.813.813h11.873c.448 0 .813-.365.813-.813V7.813c0-.448-.365-.813-.813-.813H13.17c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h6.517C20.962 5.5 22 6.538 22 7.813v11.873C22 20.962 20.962 22 19.687 22z',
              }),
              y.a.createElement('path', {
                d: 'M11.996 10.936L4.56 3.5h4.636c.414 0 .75-.336.75-.75S9.61 2 9.196 2H2.75c-.414 0-.75.336-.75.75v6.455c0 .414.336.75.75.75s.75-.336.75-.75V4.56l7.436 7.437c.146.146.338.22.53.22s.384-.073.53-.22c.293-.294.293-.768 0-1.06z',
              }),
            ),
          )
        }
      Zt.metadata = { width: 24, height: 24 }
      var $t = Zt,
        en = n('hOZg'),
        tn = O.a.e839db39,
        nn = O.a.a7a119ec,
        rn = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { isOffscreen: !1 }),
              b()(p()(e), '_render', function (t) {
                var n = t.closeRequested,
                  i = t.dockRequested,
                  r = t.requestClose,
                  a = t.requestUndock,
                  o = e.props,
                  s = o.children,
                  c = o.placeholder
                return y.a.createElement(
                  Ht.Provider,
                  { value: { closeRequested: n, dockRequested: i } },
                  i && c,
                  y.a.createElement(
                    G.a,
                    { style: i ? [an.dockedContainer, e._getDockedBottomStyle()] : void 0 },
                    i && e._renderDockingControlBar(a, r),
                    s,
                  ),
                )
              }),
              b()(p()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  i = n.isDisabled,
                  r = n.visibleThreshold
                i || e.setState({ isOffscreen: t.visibleFraction() <= r })
              }),
              b()(p()(e), '_getDockedBottomStyle', function () {
                return { marginBottom: e.props.dockBottomOffset }
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.isOffscreen,
                    t = this.props,
                    n = t.isDisabled,
                    i = t.onCloseDockComplete,
                    r = t.onDockingScribeAction
                  return y.a.createElement(
                    Xt.e,
                    { onPlacementChange: this._handlePlacementChange, style: an.root },
                    y.a.createElement(Gt, {
                      onCloseDockComplete: i,
                      onDockingScribeAction: r,
                      render: this._render,
                      requestDock: e && !n,
                    }),
                  )
                },
              },
              {
                key: '_renderDockingControlBar',
                value: function (e, t) {
                  var n = this.props,
                    i = n.subtitle,
                    r = n.title
                  return y.a.createElement(Yt.a, {
                    rightControl: this._renderDockingControls(e, t),
                    subtitle: i,
                    title: r,
                  })
                },
              },
              {
                key: '_renderDockingControls',
                value: function (e, t) {
                  return y.a.createElement(
                    G.a,
                    { style: an.dockingControls },
                    y.a.createElement(St.a, {
                      accessibilityLabel: nn,
                      icon: y.a.createElement($t, null),
                      onPress: e,
                      type: 'brandText',
                    }),
                    y.a.createElement(St.a, {
                      accessibilityLabel: tn,
                      icon: y.a.createElement(en.a, null),
                      onPress: t,
                      type: 'brandText',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()(rn, 'defaultProps', {
        placeholder: y.a.createElement(ot.a, { ratio: $.a.theme.aspectRatios.landscape }),
        visibleThreshold: 0,
      })
      var an = $.a.create(function (e) {
          return {
            root: { zIndex: 1 },
            dockedContainer: {
              bottom: 0,
              right: 0,
              marginEnd: e.spaces.space20,
              boxShadow: e.boxShadows.small,
              maxWidth: Vt.a.columnWidths.secondary.normal,
              position: 'fixed',
              width: Vt.a.columnWidths.secondary.normal,
            },
            dockingControls: { flexDirection: 'row', alignItems: 'baseline' },
          }
        }),
        on = rn,
        sn = n('nT9l'),
        cn = n('hACr'),
        ln = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.backgroundColor,
                    i = t.children,
                    r = t.remindMeButton,
                    a = this._renderMediaLabel(),
                    o =
                      a || r
                        ? y.a.createElement(
                            G.a,
                            {
                              style: [
                                un.verticalAlignment,
                                ((e = n), { backgroundImage: 'linear-gradient(transparent 0%, '.concat(e, ' 100%)') }),
                              ],
                            },
                            y.a.createElement(G.a, { style: un.wrapper }, r, a),
                          )
                        : null
                  return y.a.createElement(G.a, null, o, i)
                },
              },
              {
                key: '_renderMediaLabel',
                value: function () {
                  var e = this.props.mediaLabel
                  return e
                    ? y.a.createElement(
                        G.a,
                        { style: un.mediaLabelWrapper },
                        y.a.createElement(
                          w.b,
                          { align: 'left', color: 'white', size: 'body', style: un.mediaLabel },
                          e,
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(ln, 'defaultProps', { backgroundColor: $.a.theme.colors.translucentBlack77 })
      var un = $.a.create(function (e) {
          return {
            verticalAlignment: {
              flexDirection: 'column',
              alignItems: 'flex-end',
              zIndex: 1,
              height: '25%',
              width: '100%',
              bottom: '0',
              left: '0',
              position: 'absolute',
            },
            wrapper: {
              flexDirection: 'row-reverse',
              flexWrap: 'nowrap',
              justifyContent: 'space-between',
              width: '100%',
              position: 'absolute',
              bottom: '0',
              paddingBottom: e.spaces.space12,
              paddingStart: e.spaces.space12,
              paddingEnd: e.spaces.space12,
            },
            mediaLabelWrapper: { justifyContent: 'center', flexGrow: 1, flexShrink: 1 },
            mediaLabel: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
          }
        }),
        dn = ln,
        pn = n('TIdA'),
        mn = n('wD1h'),
        fn = n('3dad'),
        hn = O.a.f93bb3ee,
        _n = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { shouldRenderImage: !0 }),
              b()(p()(e), '_getRenderDataSafeImage', function (t) {
                var n = t.mediaItem,
                  i = t.originalImage
                return function (t) {
                  var r = t.resourceSelectionHandler,
                    a = t.useMinimumData,
                    o = e.props,
                    s = o.fallbackAccessibilityLabel,
                    c = o.slate,
                    l = c.label,
                    u = c.periscopeVariants,
                    d = n.expanded_url,
                    p = n.ext_alt_text,
                    m = n.original_info,
                    f = p || s,
                    h = y.a.createElement(
                      dn,
                      { mediaLabel: a ? void 0 : l },
                      y.a.createElement(pn.a, {
                        accessibilityLabel: f,
                        aspectMode: et.a.exact($.a.theme.aspectRatios.landscape),
                        cropCandidates: m && m.focus_rects,
                        customVariants: u,
                        image: i,
                        onError: e._handleImageError,
                        onVariantSelection: r,
                        previewMode: a,
                      }),
                    )
                  return d
                    ? y.a.createElement(
                        cn.a,
                        { handlers: b()({}, mn.a.shortcuts.openMediaModal, e._handleOpenPhotoModal) },
                        h,
                      )
                    : h
                }
              }),
              b()(p()(e), '_handleImageError', function () {
                e.setState({ shouldRenderImage: !1 })
              }),
              b()(p()(e), '_handleOpenPhotoModal', function () {
                var t = e.props,
                  n = t.coverMedia,
                  i = t.history
                n && i.push(n.expanded_url)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  if (!this.state.shouldRenderImage) {
                    var t = this.props.slate.image,
                      n = e.slate.image
                    t.url !== n.url && this.setState({ shouldRenderImage: !0 })
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.state.shouldRenderImage ? this._renderImage() : null
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this._getMediaItem(),
                    t = e && fn.a.getOriginalImage(e)
                  return e && t
                    ? y.a.createElement(sn.a, {
                        acceptLabel: hn,
                        renderContent: this._getRenderDataSafeImage({ mediaItem: e, originalImage: t }),
                        resourceId: t.url,
                      })
                    : null
                },
              },
              {
                key: '_getMediaItem',
                value: function () {
                  var e = this.props,
                    t = e.coverMedia,
                    n = e.slate
                  return Object(He.s)(n, t) || void 0
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent),
        vn = n('oQhu'),
        bn = n('XmKV'),
        gn = 'events-player',
        yn = n('Modb'),
        En = n('lklz'),
        wn = n('Mhzv'),
        In = n('38/B'),
        Sn = n('HT/6'),
        On = n('XrEN'),
        Cn = n('mf9H'),
        kn = O.a.b0b38773,
        An = { autoplayPrioritizationPolicy: bn.b, minimumVisibilityForAutoplay: Xt.b },
        Pn = new Cn.a(An),
        Nn = { hideFullScreenButton: !0 },
        Tn = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(
                p()(e),
                '_multiVideoAutoAdvanceEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_enabled'),
              ),
              b()(
                p()(e),
                '_multiVideoAutoAdvanceDockEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_dock_enabled'),
              ),
              b()(
                p()(e),
                '_multiVideoAutoAdvanceFullscreenEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_fullscreen_enabled'),
              ),
              b()(
                p()(e),
                '_dockableAutoplayPolicyEnabled',
                e.context.featureSwitches.isTrue('responsive_web_dockable_autoplay_policy_enabled'),
              ),
              b()(p()(e), 'state', { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
              b()(
                p()(e),
                '_getUiStack',
                Object(vn.a)(function (t, n, i, r, a, o) {
                  return function (s) {
                    var c = s.containerRef,
                      l = s.guestsState,
                      u = s.playerApi,
                      d = s.playerState
                    return y.a.createElement(wn.a, {
                      containerRef: c,
                      guestsState: l,
                      isDocked: n,
                      nextItemInfo: r,
                      onUpNextComplete: e._getHandleUpNextOverlayComplete(a),
                      onUpNextReplay: e._handleReplayPress,
                      playerApi: u,
                      playerDisplayOptions: t,
                      playerState: d,
                      renderUpNextImage: function () {
                        var e = null == o ? void 0 : o.slate
                        return y.a.createElement(
                          y.a.Fragment,
                          null,
                          e ? y.a.createElement(rt, { slate: e }) : null,
                          y.a.createElement(G.a, { style: xn.backgroundFading }),
                        )
                      },
                      shouldRenderUpNext: i,
                    })
                  }
                }),
              ),
              b()(p()(e), '_renderHorizonPlayer', function (t, n) {
                t.closeRequested
                var i = t.dockRequested,
                  r = t.key,
                  a = t.playerProps
                if (!a) return null
                var o = e.props.disableFullscreenVideo,
                  s = e._shouldRenderUpNext(n, i),
                  c = o ? Nn : void 0,
                  l = e.props,
                  u = l.carousel,
                  d = l.selectedItemIndex,
                  p = e._getNextEligibleCarouselItemIndex(d, u),
                  m = p > -1 && u ? u[p] : void 0,
                  f = null == m ? void 0 : m.carouselItemInfo,
                  h = f
                    ? {
                        playbackDurationMs: f.playbackDuration,
                        name: f.name,
                        screenName: f.screenName,
                        type: f.type,
                        verified: !!f.verified,
                      }
                    : void 0,
                  _ = e._getUiStack(a.displayOptions, i, !!s, h, p, m)
                return a
                  ? y.a.createElement(
                      G.a,
                      { style: i ? xn.dockedContainerBackground : void 0 },
                      y.a.createElement(
                        yn.a,
                        Lt()({}, a, {
                          displayOptions: c,
                          key: r,
                          loopingThresholdMs: 7e3,
                          onProgressChange: e._handleProgressChange,
                          preserveMuteState: !0,
                          uiStack: _,
                        }),
                      ),
                    )
                  : null
              }),
              b()(p()(e), '_handleProgressChange', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  i = e.state.showUpNextPlayerOverlay
                n !== i && e.setState({ showUpNextPlayerOverlay: n })
              }),
              b()(p()(e), '_getHandleUpNextOverlayComplete', function (t) {
                return function (n) {
                  if (t) {
                    var i = e.props,
                      r = i.onChildScribeAction,
                      a = i.setSelectedCarouselIndex,
                      o = { tilePosition: t }
                    a(t), r(n ? yt : bt, o)
                  }
                  e.setState({ showUpNextPlayerOverlay: !1 })
                }
              }),
              b()(p()(e), '_setPlayer', function (t) {
                e._playerInstance = t
              }),
              b()(p()(e), '_shouldRenderUpNext', function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  i = e.props,
                  r = i.canAutoplay,
                  a = i.carousel,
                  o = i.isPlayerFullscreen,
                  s = i.selectedItemIndex,
                  c = e._getNextEligibleCarouselItemIndex(s, a)
                return (
                  e._multiVideoAutoAdvanceEnabled &&
                  r &&
                  !In.a.reducedMotionEnabled &&
                  (!n || e._multiVideoAutoAdvanceDockEnabled) &&
                  (!o || e._multiVideoAutoAdvanceFullscreenEnabled) &&
                  t &&
                  e.state.showUpNextPlayerOverlay &&
                  c > -1
                )
              }),
              b()(p()(e), '_handleCloseDockComplete', function () {
                var t = e.state.showUpNextPlayerOverlay,
                  n = e.props,
                  i = n.carousel,
                  r = n.selectedItemIndex
                if (t) {
                  var a = e._getNextEligibleCarouselItemIndex(r, i)
                  e._getHandleUpNextOverlayComplete(a)()
                } else e._playerInstance && e._playerInstance.pause()
              }),
              b()(p()(e), '_handleMuteChange', function (t) {
                var n = t.isPlayerMuted
                return e.setState({ isPlayerMuted: n })
              }),
              b()(p()(e), '_handleReplayPress', function () {
                e._playerInstance && e._playerInstance.replay()
              }),
              b()(p()(e), '_getNextEligibleCarouselItemIndex', Object(vn.a)(He.l)),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.carouselItemInfo,
                    i = t.isDockingEnabled,
                    r = t.mediaType,
                    a = t.onChildScribeAction,
                    o = t.title
                  switch (r) {
                    case He.e.REPLAY_BROADCAST:
                    case He.e.LIVE_BROADCAST:
                    case He.e.VOD:
                      e = this._renderVideo()
                      break
                    case He.e.GIF:
                      e = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 })
                      break
                    case He.e.SLATE:
                    default:
                      e = this._renderImage()
                  }
                  var s = i ? this._renderUserSceenName(n) : null
                  return y.a.createElement(
                    on,
                    {
                      dockBottomOffset: this._getOffsetForDrawer(),
                      isDisabled: !i,
                      onCloseDockComplete: this._handleCloseDockComplete,
                      onDockingScribeAction: a,
                      subtitle: s,
                      title: o,
                      visibleThreshold: Xt.b,
                    },
                    y.a.createElement(G.a, { style: xn.container, testID: gn }, e),
                  )
                },
              },
              {
                key: '_getOffsetForDrawer',
                value: function () {
                  var e = $.a.theme.spaces,
                    t = this.props.dmDrawerVisibility,
                    n = parseInt(''.concat(e.space20), 10)
                  return t === Ut.b.COLLAPSED
                    ? Vt.a.dmDrawerHeight.collapsed + n
                    : t === Ut.b.EXPANDED
                    ? Vt.a.dmDrawerHeight.expanded + n
                    : n
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.mediaDetails,
                    i = e.slate
                  return i
                    ? y.a.createElement(_n, {
                        coverMedia: n.coverMedia,
                        fallbackAccessibilityLabel: kn,
                        history: t,
                        slate: i,
                      })
                    : null
                },
              },
              {
                key: '_renderVideo',
                value: function () {
                  var e,
                    t,
                    n = this,
                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = i.isGif,
                    a = void 0 !== r && r,
                    s = i.withUpNextOverlay,
                    c = void 0 === s || s,
                    l = this.props,
                    u = l.eventId,
                    d = l.mediaDetails,
                    p = d.broadcastId,
                    m = d.coverMedia,
                    f = d.coverTweet,
                    h = void 0 === f ? {} : f,
                    _ = d.mediaId,
                    v = d.promotedContent,
                    b = l.onFullscreenChange,
                    g = l.slate,
                    E = m || {},
                    w = E.id_str,
                    I = h.id_str,
                    S = g || {},
                    O = S.image,
                    C = S.periscopeVariants,
                    k = {
                      accessibilityLabel: kn,
                      aspectRatio: $.a.theme.aspectRatios.landscape,
                      backgroundColor: $.a.theme.colors.gray0,
                      maxLoopCount: a ? void 0 : 3,
                      onFullscreenChange: b,
                      onMuteChange: this._handleMuteChange,
                      promotedContent: v,
                      playbackCoordination: this._dockableAutoplayPolicyEnabled ? Cn.b : Pn,
                      playbackPriority: Sn.a.DOCKABLE,
                      poster: O,
                      customVariants: C,
                      shouldPlayUnmuted: !this.state.isPlayerMuted,
                      setPlayer: this._setPlayer,
                    }
                  if (p && _)
                    (e = p),
                      (t = o()(
                        o()({}, k),
                        {},
                        {
                          videoType: 'video',
                          includeBroadcastEventAssociation: !0,
                          source: { contentId: _, variants: [], videoId: En.b.forBroadcast(p) },
                        },
                      ))
                  else if (w && I) {
                    var A = En.b.forTweet(I),
                      P = On.a.getVideoFromCoverMedia(m),
                      N = P && On.a.extractVideoProps(A, P, u)
                    ;(e = w), (t = N ? o()(o()({}, N), k) : void 0)
                  }
                  return y.a.createElement(Ht.Consumer, null, function (i) {
                    var r = i.closeRequested,
                      a = i.dockRequested
                    return n._renderHorizonPlayer({ closeRequested: r, dockRequested: a, key: e, playerProps: t }, c)
                  })
                },
              },
              {
                key: '_renderUserSceenName',
                value: function (e) {
                  var t = e || {},
                    n = t.accountType,
                    i = t.name,
                    r = t.screenName,
                    a = t.userId,
                    o = null
                  return (
                    a &&
                      (n === He.a.TWITTER && r
                        ? (o = y.a.createElement(at.a, { screenName: r, weight: 'normal', withLink: !0 }))
                        : n === He.a.PERISCOPE &&
                          i &&
                          (o = y.a.createElement(w.b, { color: 'gray700', link: 'https://pscp.tv/u/'.concat(a) }, i))),
                    o
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(Tn, 'contextType', Tt.a)
      var xn = $.a.create(function (e) {
          return {
            backgroundFading: o()(
              o()({}, $.a.absoluteFillObject),
              {},
              { backgroundColor: e.colors.translucentBlack30 },
            ),
            container: { zIndex: 10 },
            dockedContainerBackground: { backgroundColor: e.colors.cellBackground },
          }
        }),
        Dn = Object(Bt.a)({ element: 'image' })(Ft(Tn)),
        Ln =
          (O.a.f2382014,
          O.a.g66c8347,
          (function (e) {
            f()(n, e)
            var t = _()(n)
            function n() {
              var e
              c()(this, n)
              for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                b()(p()(e), '_enableMultiVideo', e.context.featureSwitches.isTrue('live_event_multi_video_enabled')),
                b()(p()(e), '_enableDocking', e.context.featureSwitches.isTrue('live_event_docking_enabled')),
                b()(p()(e), 'state', { headerWidth: 0 }),
                b()(p()(e), '_getSelectedItemIndex', function (e, t) {
                  return Object(Ne.a)(e, function (e) {
                    return e.id === t
                  })
                }),
                b()(p()(e), '_setSelectedCarouselIndex', function (t) {
                  var n = e.props,
                    i = n.carousel,
                    r = n.setSelectedCarouselItem,
                    a = i && i[t]
                  a && r(a)
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.selectedCarouselItem
                    return y.a.createElement(
                      y.a.Fragment,
                      null,
                      e && this._renderHeaderMedia(e),
                      this._renderDescription(e),
                      y.a.createElement(xt.a, null),
                    )
                  },
                },
                {
                  key: '_renderDescription',
                  value: function (e) {
                    var t,
                      n,
                      i,
                      r = this.props,
                      a = r.isTOO,
                      o = r.liveEventDetails,
                      s = o.author,
                      c = o.category,
                      l = o.description,
                      u = o.descriptionEntities,
                      d = o.timeString,
                      p = o.title,
                      m = r.withShareButton,
                      f = null == e || null === (t = e.mediaDetails) || void 0 === t ? void 0 : t.coverTweet,
                      h = null == e || null === (n = e.mediaDetails) || void 0 === n ? void 0 : n.coverMedia,
                      _ = null == e || null === (i = e.slate) || void 0 === i ? void 0 : i.imageAttribution
                    return y.a.createElement(
                      G.a,
                      { style: Vn.contentContainer },
                      p
                        ? y.a.createElement(Te.a, {
                            author: s,
                            coverTweet: f,
                            description: l,
                            descriptionEntities: u,
                            imageAttribution: _,
                            isTOO: a,
                            mediaType: null == h ? void 0 : h.type,
                            preTitle: a || !s ? c : '',
                            remindMeButton: this._renderRemindMeButton(),
                            time: d,
                            title: p,
                            withHashflags: !0,
                          })
                        : null,
                      this._renderScoreCard(),
                      m ? this._renderShareButton() : null,
                      this._enableMultiVideo && e ? this._renderCarousel(e) : null,
                    )
                  },
                },
                {
                  key: '_renderHeaderMedia',
                  value: function (e) {
                    var t = this.props,
                      n = t.carousel,
                      i = t.disableFullscreenVideo,
                      r = t.history,
                      a = t.isPlayerFullscreen,
                      o = t.liveEventDetails,
                      s = o.eventId,
                      c = o.title,
                      l = t.onChildScribeAction,
                      u = t.onFullscreenChange,
                      d = e.carouselItemInfo,
                      p = e.mediaDetails,
                      m = e.slate,
                      f = d.type,
                      h = this._getDockingEnabled(f)
                    return y.a.createElement(Dn, {
                      carousel: n,
                      carouselItemInfo: d,
                      disableFullscreenVideo: i,
                      eventId: s,
                      history: r,
                      isDockingEnabled: h,
                      isPlayerFullscreen: a,
                      mediaDetails: p,
                      mediaType: f,
                      onChildScribeAction: l,
                      onFullscreenChange: u,
                      selectedItemIndex: this._getSelectedItemIndex(n || [], e.id),
                      setSelectedCarouselIndex: this._setSelectedCarouselIndex,
                      slate: m,
                      title: c,
                    })
                  },
                },
                {
                  key: '_renderRemindMeButton',
                  value: function () {
                    var e = this.props,
                      t = e.liveEventDetails,
                      n = t.eventId,
                      i = t.remindMeSubscription,
                      r = e.onChildScribeAction,
                      a = e.remindMeButtonSubscribe,
                      o = e.remindMeButtonUnsubscribe,
                      s = !!this.context.loggedInUserId,
                      c = (i || {}).toggle_visible
                    return s && c && i && a && o
                      ? y.a.createElement(Pt, {
                          eventId: n,
                          onPress: i.subscribed ? o : a,
                          onRemindButtonScribe: r,
                          remindMeSubscription: i,
                        })
                      : null
                  },
                },
                {
                  key: '_renderScoreCard',
                  value: function () {
                    var e = this.props,
                      t = e.scoreData,
                      n = e.withScoreCard
                    return t && n ? y.a.createElement(Nt.a, { scoreData: t }) : null
                  },
                },
                {
                  key: '_renderCarousel',
                  value: function (e) {
                    var t = this.props,
                      n = t.carousel,
                      i = t.onChildScribeAction
                    return n
                      ? y.a.createElement(It, {
                          carousel: n,
                          onCarouselScribe: i,
                          selectedItemIndex: this._getSelectedItemIndex(n, e.id),
                          setSelectedCarouselIndex: this._setSelectedCarouselIndex,
                        })
                      : null
                  },
                },
                {
                  key: '_renderShareButton',
                  value: function () {
                    var e = this.props,
                      t = e.liveEventDetails,
                      n = t.author,
                      i = t.eventId,
                      r = t.title,
                      a = e.onChildScribeAction,
                      o = e.timelineHashtag
                    return y.a.createElement(Pe.a, {
                      author: n,
                      hashtag: o,
                      id: i,
                      isInlineButton: !0,
                      onShareMomentScribe: a,
                      title: r,
                    })
                  },
                },
                {
                  key: '_getDockingEnabled',
                  value: function (e) {
                    var t = this.props.isWide,
                      n = this.context.loggedInUserId,
                      i = [He.e.LIVE_BROADCAST, He.e.REPLAY_BROADCAST, He.e.VOD]
                    return !!n && this._enableDocking && t && i.includes(e)
                  },
                },
              ]),
              n
            )
          })(y.a.Component))
      b()(Ln, 'contextType', Tt.a)
      var Vn = $.a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Rn = n('9bsQ'),
        jn = n('3AAD'),
        Mn = n('7BdX'),
        Fn = n('IG4P'),
        Bn = n('fTQJ'),
        Un = n('k/OQ'),
        Hn = n('mw9i'),
        zn = n('QIgh'),
        Wn = n('8UdT'),
        qn = n('iu0J'),
        Gn = n('IcAo'),
        Xn = n('zgaL'),
        Yn = n('U+bB'),
        Kn = n('YeIG'),
        Qn = n('fs1G'),
        Jn = ['customizationInfo', 'label', 'labelType'],
        Zn = O.a.abdcd689,
        $n = O.a.a1bb552d,
        ei = O.a.b103771f,
        ti = O.a.bb980dbf,
        ni = O.a.e9f1fbcb,
        ii = O.a.dfd7bbaf,
        ri = O.a.bffb7ed4,
        ai = { section: 'shop_tab', component: 'product_grid' },
        oi = function () {
          return y.a.createElement(Z.a, { header: ni, message: ii })
        },
        si = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n(e, i) {
            var r
            c()(this, n),
              (r = t.call(this, e, i)),
              b()(p()(r), 'state', { selectedCarouselItemId: void 0 }),
              b()(p()(r), '_render', function () {
                var e = r.props,
                  t = e.interstitialOrderToDisplay,
                  n = e.onInterstitialSubmit
                return r._refreshControlWrapper(
                  y.a.createElement(Ce, { interstitials: t, onInterstitialSubmit: n }, function (e) {
                    return y.a.createElement(
                      y.a.Fragment,
                      null,
                      r._renderHeader(),
                      r._renderInlineCompose(),
                      e || r._renderTimeline(),
                    )
                  }),
                )
              }),
              b()(p()(r), '_getComposeTimelineDetails', function () {
                return r.props.timelineDetails.composeDetails
              }),
              b()(p()(r), '_setSelectedCarouselItem', function (e) {
                var t = r.props.onSelectedCarouselItemChange
                t && t(e), r.setState({ selectedCarouselItemId: e.id })
              }),
              b()(p()(r), '_handleInlineComposeOnClick', function (e) {
                e.preventDefault()
                var t = r.props.history,
                  n = { pathname: '/compose/tweet', state: r._getComposeTimelineDetails() }
                t.push(n)
              }),
              b()(
                p()(r),
                '_getTimelineModuleMemoized',
                Object(vn.a)(function (e, t) {
                  return Object(Rn.a)(e, t)
                }),
              ),
              b()(
                p()(r),
                '_getLiveCommerceItemsSliceModuleMemoized',
                Object(vn.a)(function (e) {
                  return Ae(e)
                }),
              ),
              b()(p()(r), '_shouldRenderInlineButton', function () {
                var e = r.props.carousel,
                  t = r.state.selectedCarouselItemId,
                  n = Object(He.p)(e, t)
                return (
                  !(!n || !n.isMoment) &&
                  r.context.featureSwitches.isTrue('moments_new_share_variant_description_inline_button')
                )
              })
            var a = e.timelineMessageOverride,
              s = e.withTweetActionsDisabled
            return (
              (r._entryConfiguration = (function (e) {
                var t,
                  n = e.withTweetActionsDisabled
                return o()(
                  o()({}, Object(zn.createConfiguration)({ withTweetActionsDisabled: n })),
                  {},
                  ((t = {}), b()(t, Wn.b.MomentAnnotation, Xn.a), b()(t, Wn.b.EventSummary, Object(qn.a)({})), t),
                )
              })({ withTweetActionsDisabled: s })),
              (r._timelinePreprocessor = (function (e) {
                return function (t) {
                  return e
                    ? t.map(function (t) {
                        if (t.type === Wn.b.Message) {
                          var n = { content: { content: { inlinePrompt: { headerText: e } } } }
                          return Object(Gn.a)({}, t, n)
                        }
                        return t
                      })
                    : t
                }
              })(a)),
              r
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.liveEventDetails,
                    i = e.onFetch
                  return y.a.createElement(se.a, {
                    accessibilityLabel: Zn,
                    fetchStatus: t,
                    key: n.eventId,
                    onRequestRetry: i,
                    render: this._render,
                  })
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.props,
                    t = e.carousel,
                    n = e.disableFullscreenVideo,
                    i = e.history,
                    r = e.isPlayerFullscreen,
                    a = e.isTOO,
                    o = e.isWide,
                    s = e.liveEventDetails,
                    c = e.onChildScribeAction,
                    l = e.onFullscreenChange,
                    u = e.remindMeButtonSubscribe,
                    d = e.remindMeButtonUnsubscribe,
                    p = e.scoreData,
                    m = e.timelineDetails.hashtag,
                    f = this.state.selectedCarouselItemId,
                    h = Object(He.p)(t, f)
                  return y.a.createElement(Ln, {
                    carousel: t,
                    disableFullscreenVideo: n,
                    history: i,
                    isPlayerFullscreen: r,
                    isTOO: a,
                    isWide: o,
                    liveEventDetails: s,
                    onChildScribeAction: c,
                    onFullscreenChange: l,
                    remindMeButtonSubscribe: u,
                    remindMeButtonUnsubscribe: d,
                    scoreData: p,
                    selectedCarouselItem: h,
                    setSelectedCarouselItem: this._setSelectedCarouselItem,
                    timelineHashtag: m,
                    withScoreCard: !o,
                    withShareButton: this._shouldRenderInlineButton(),
                  })
                },
              },
              {
                key: '_renderInlineCompose',
                value: function () {
                  var e = this.props,
                    t = e.isWide,
                    n = e.timelineDetails.hashtag,
                    i = n ? $n({ hashtag: n }) : ei
                  return t && !this._shouldRenderInlineButton()
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ye, { onClick: this._handleInlineComposeOnClick, promptLabel: i }),
                        y.a.createElement(xt.a, null),
                      )
                    : null
                },
              },
              {
                key: '_renderTimeline',
                value: function () {
                  var e = this.props.timelineDetails.timelineId,
                    t = this._renderTimelineLinks(),
                    n = e === He.c.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline()
                  return t.length > 1 || (1 === t.length && t[0].isCustom)
                    ? y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(Un.a, {
                          accessibilityLabel: ti,
                          links: t.map(function (e) {
                            return { key: e.key, label: e.label, isActive: e.isActive, to: o()({}, e.to) }
                          }),
                        }),
                        y.a.createElement(G.a, { style: ci.timelineContainer }, n),
                      )
                    : n
                },
              },
              {
                key: '_renderTimelineLinks',
                value: function () {
                  var e = this
                  return this.props.timelineDetails.timelineLinks.map(function (t) {
                    var n = t.customizationInfo,
                      i = t.label,
                      a = t.labelType,
                      s = r()(t, Jn),
                      c = !Object(Kn.a)(n),
                      l = e._renderTimelineLabelAnnotation(a),
                      u =
                        c && n
                          ? e._renderCustomLabel({ label: i, customizationInfo: n, labelAnnotation: l })
                          : y.a.createElement(w.b, { weight: 'bold' }, i, l)
                    return o()(o()({}, s), {}, { key: i, label: u, isCustom: c })
                  })
                },
              },
              {
                key: '_renderTimelineLabelAnnotation',
                value: function (e) {
                  return e === He.d.New
                    ? y.a.createElement(Ue.a, { background: 'primary', bold: !0, style: ci.labelAnnotation }, ri)
                    : null
                },
              },
              {
                key: '_renderCustomLabel',
                value: function (e) {
                  var t = e.customizationInfo,
                    n = t.badge_media,
                    i = t.title_color,
                    r = e.label,
                    a = e.labelAnnotation
                  return y.a.createElement(
                    G.a,
                    { style: ci.timelineLabel },
                    n && n.url ? y.a.createElement(Yn.a, { source: n.url, style: ci.timelineLabelBadge }) : null,
                    y.a.createElement(w.b, { style: { color: i }, weight: 'bold' }, r, a),
                  )
                },
              },
              {
                key: '_renderRichTimeline',
                value: function () {
                  var e = this.props,
                    t = e.isPlayerFullscreen,
                    n = e.isWide,
                    i = e.liveEventDetails.title,
                    r = void 0 === i ? ti : i,
                    a = e.onTimelinePoll,
                    o = e.pollingIntervalMs,
                    s = e.timelineDetails,
                    c = s.eventId,
                    l = s.timelineId,
                    u = e.withFloatingComposeButton,
                    d = this._getTimelineModuleMemoized(c, l),
                    p = t || n || !u ? null : this._renderFloatingComposeButton()
                  return y.a.createElement(
                    ae.a,
                    { component: Hn.a, fab: p },
                    y.a.createElement(Bn.a, {
                      anchoring: jn.a,
                      entryConfiguration: this._entryConfiguration,
                      module: d,
                      onTimelinePoll: a,
                      pollingIntervalMsOverride: o,
                      preprocessEntryList: this._timelinePreprocessor,
                      prerollDisplayLocation: Mn.c.OTHER,
                      refreshControl: null,
                      renderEmptyState: oi,
                      title: r,
                    }),
                  )
                },
              },
              {
                key: '_renderCommerceItemSliceTimeline',
                value: function () {
                  var e = this.props.timelineDetails.eventId,
                    t = this._getLiveCommerceItemsSliceModuleMemoized(e)
                  return y.a.createElement(Bt.c, { namespace: ai }, y.a.createElement(re, { module: t }))
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return y.a.createElement(ce.a, { getLocationState: this._getComposeTimelineDetails, history: e })
                },
              },
              {
                key: '_refreshControlWrapper',
                value: function (e) {
                  var t = this.props,
                    n = t.onFetch,
                    i = t.refreshStatus
                  return y.a.createElement(Fn.a, { isRefreshing: i === oe.a.LOADING, onRefresh: n }, e)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      b()(si, 'contextType', Tt.a), b()(si, 'defaultProps', { onChildScribeAction: Qn.a })
      var ci = $.a.create(function (e) {
        return {
          timelineLabel: { flexDirection: 'row', alignItems: 'flex-end' },
          timelineLabelBadge: {
            borderRadius: e.borderRadii.infinite,
            height: e.lineHeights.body,
            marginEnd: e.spaces.space4,
            width: e.lineHeights.body,
          },
          timelineContainer: { minHeight: '90vh' },
          labelAnnotation: { marginLeft: e.spaces.space4 },
        }
      })
    },
    YRNd: function (e, t, n) {
      'use strict'
      var i = n('XJEr'),
        r = 1,
        a = (function () {
          function e() {}
          var t = e.prototype
          return (
            (t.start = function (e, t, n, i, r) {}),
            (t.stop = function () {
              this.__nativeId && i.a.API.stopAnimation(this.__nativeId)
            }),
            (t.__getNativeAnimationConfig = function () {
              throw new Error('This animation type cannot be offloaded to native')
            }),
            (t.__debouncedOnEnd = function (e) {
              var t = this.__onEnd
              ;(this.__onEnd = null), t && t(e)
            }),
            (t.__startNativeAnimation = function (e) {
              var t = r + ':startAnimation'
              ;(r += 1), i.a.API.setWaitingForIdentifier(t)
              try {
                e.__makeNative(),
                  (this.__nativeId = i.a.generateNewAnimationId()),
                  i.a.API.startAnimatingNode(
                    this.__nativeId,
                    e.__getNativeTag(),
                    this.__getNativeAnimationConfig(),
                    this.__debouncedOnEnd.bind(this),
                  )
              } catch (n) {
                throw n
              } finally {
                i.a.API.unsetWaitingForIdentifier(t)
              }
            }),
            e
          )
        })()
      t.a = a
    },
    e6X4: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var i,
          r = n('YRNd'),
          a = n('XJEr'),
          o = n('7zxR')
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var c = (function (t) {
          var n, r
          function c(e) {
            var n, r, s, c, l, u
            return (
              ((u = t.call(this) || this)._toValue = e.toValue),
              (u._easing = null !== (n = e.easing) && void 0 !== n ? n : (i || (i = o.a.inOut(o.a.ease)), i)),
              (u._duration = null !== (r = e.duration) && void 0 !== r ? r : 500),
              (u._delay = null !== (s = e.delay) && void 0 !== s ? s : 0),
              (u.__iterations = null !== (c = e.iterations) && void 0 !== c ? c : 1),
              (u._useNativeDriver = Object(a.c)(e)),
              (u.__isInteraction = null !== (l = e.isInteraction) && void 0 !== l ? l : !u._useNativeDriver),
              u
            )
          }
          ;(r = t), ((n = c).prototype = Object.create(r.prototype)), (n.prototype.constructor = n), s(n, r)
          var l = c.prototype
          return (
            (l.__getNativeAnimationConfig = function () {
              for (var e = [], t = Math.round(this._duration / (1e3 / 60)), n = 0; n < t; n++)
                e.push(this._easing(n / t))
              return (
                e.push(this._easing(1)),
                { type: 'frames', frames: e, toValue: this._toValue, iterations: this.__iterations }
              )
            }),
            (l.start = function (e, t, n, i, r) {
              var a = this
              ;(this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n)
              var o = function () {
                0 !== a._duration || a._useNativeDriver
                  ? ((a._startTime = Date.now()),
                    a._useNativeDriver
                      ? a.__startNativeAnimation(r)
                      : (a._animationFrame = requestAnimationFrame(a.onUpdate.bind(a))))
                  : (a._onUpdate(a._toValue), a.__debouncedOnEnd({ finished: !0 }))
              }
              this._delay ? (this._timeout = setTimeout(o, this._delay)) : o()
            }),
            (l.onUpdate = function () {
              var e = Date.now()
              if (e >= this._startTime + this._duration)
                return (
                  0 === this._duration
                    ? this._onUpdate(this._toValue)
                    : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)),
                  void this.__debouncedOnEnd({ finished: !0 })
                )
              this._onUpdate(
                this._fromValue +
                  this._easing((e - this._startTime) / this._duration) * (this._toValue - this._fromValue),
              ),
                this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)))
            }),
            (l.stop = function () {
              t.prototype.stop.call(this),
                (this.__active = !1),
                clearTimeout(this._timeout),
                e.cancelAnimationFrame(this._animationFrame),
                this.__debouncedOnEnd({ finished: !1 })
            }),
            c
          )
        })(r.a)
        t.a = c
      }.call(this, n('fRV1')))
    },
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          i = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(i)), n
        }
      }
    },
    jydp: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var i = n('YRNd'),
          r = n('MQi0'),
          a = n('tI3i'),
          o = n.n(a),
          s = n('XJEr')
        function c(e, t) {
          return (c =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var l = (function (t) {
          var n, i
          function a(e) {
            var n, i, a, c, l, u, d, p, m, f, h, _
            if (
              (((m = t.call(this) || this)._overshootClamping =
                null !== (n = e.overshootClamping) && void 0 !== n && n),
              (m._restDisplacementThreshold = null !== (i = e.restDisplacementThreshold) && void 0 !== i ? i : 0.001),
              (m._restSpeedThreshold = null !== (a = e.restSpeedThreshold) && void 0 !== a ? a : 0.001),
              (m._initialVelocity = null !== (c = e.velocity) && void 0 !== c ? c : 0),
              (m._lastVelocity = null !== (l = e.velocity) && void 0 !== l ? l : 0),
              (m._toValue = e.toValue),
              (m._delay = null !== (u = e.delay) && void 0 !== u ? u : 0),
              (m._useNativeDriver = Object(s.c)(e)),
              (m.__isInteraction = null !== (d = e.isInteraction) && void 0 !== d ? d : !m._useNativeDriver),
              (m.__iterations = null !== (p = e.iterations) && void 0 !== p ? p : 1),
              void 0 !== e.stiffness || void 0 !== e.damping || void 0 !== e.mass)
            )
              o()(
                void 0 === e.bounciness && void 0 === e.speed && void 0 === e.tension && void 0 === e.friction,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              ),
                (m._stiffness = null !== (f = e.stiffness) && void 0 !== f ? f : 100),
                (m._damping = null !== (h = e.damping) && void 0 !== h ? h : 10),
                (m._mass = null !== (_ = e.mass) && void 0 !== _ ? _ : 1)
            else if (void 0 !== e.bounciness || void 0 !== e.speed) {
              var v, b
              o()(
                void 0 === e.tension &&
                  void 0 === e.friction &&
                  void 0 === e.stiffness &&
                  void 0 === e.damping &&
                  void 0 === e.mass,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              )
              var g = r.a.fromBouncinessAndSpeed(
                null !== (v = e.bounciness) && void 0 !== v ? v : 8,
                null !== (b = e.speed) && void 0 !== b ? b : 12,
              )
              ;(m._stiffness = g.stiffness), (m._damping = g.damping), (m._mass = 1)
            } else {
              var y,
                E,
                w = r.a.fromOrigamiTensionAndFriction(
                  null !== (y = e.tension) && void 0 !== y ? y : 40,
                  null !== (E = e.friction) && void 0 !== E ? E : 7,
                )
              ;(m._stiffness = w.stiffness), (m._damping = w.damping), (m._mass = 1)
            }
            return (
              o()(m._stiffness > 0, 'Stiffness value must be greater than 0'),
              o()(m._damping > 0, 'Damping value must be greater than 0'),
              o()(m._mass > 0, 'Mass value must be greater than 0'),
              m
            )
          }
          ;(i = t), ((n = a).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), c(n, i)
          var l = a.prototype
          return (
            (l.__getNativeAnimationConfig = function () {
              var e
              return {
                type: 'spring',
                overshootClamping: this._overshootClamping,
                restDisplacementThreshold: this._restDisplacementThreshold,
                restSpeedThreshold: this._restSpeedThreshold,
                stiffness: this._stiffness,
                damping: this._damping,
                mass: this._mass,
                initialVelocity: null !== (e = this._initialVelocity) && void 0 !== e ? e : this._lastVelocity,
                toValue: this._toValue,
                iterations: this.__iterations,
              }
            }),
            (l.start = function (e, t, n, i, r) {
              var o = this
              if (
                ((this.__active = !0),
                (this._startPosition = e),
                (this._lastPosition = this._startPosition),
                (this._onUpdate = t),
                (this.__onEnd = n),
                (this._lastTime = Date.now()),
                (this._frameTime = 0),
                i instanceof a)
              ) {
                var s = i.getInternalState()
                ;(this._lastPosition = s.lastPosition),
                  (this._lastVelocity = s.lastVelocity),
                  (this._initialVelocity = this._lastVelocity),
                  (this._lastTime = s.lastTime)
              }
              var c = function () {
                o._useNativeDriver ? o.__startNativeAnimation(r) : o.onUpdate()
              }
              this._delay ? (this._timeout = setTimeout(c, this._delay)) : c()
            }),
            (l.getInternalState = function () {
              return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime }
            }),
            (l.onUpdate = function () {
              var e = Date.now()
              e > this._lastTime + 64 && (e = this._lastTime + 64)
              var t = (e - this._lastTime) / 1e3
              this._frameTime += t
              var n = this._damping,
                i = this._mass,
                r = this._stiffness,
                a = -this._initialVelocity,
                o = n / (2 * Math.sqrt(r * i)),
                s = Math.sqrt(r / i),
                c = s * Math.sqrt(1 - o * o),
                l = this._toValue - this._startPosition,
                u = 0,
                d = 0,
                p = this._frameTime
              if (o < 1) {
                var m = Math.exp(-o * s * p)
                ;(u = this._toValue - m * (((a + o * s * l) / c) * Math.sin(c * p) + l * Math.cos(c * p))),
                  (d =
                    o * s * m * ((Math.sin(c * p) * (a + o * s * l)) / c + l * Math.cos(c * p)) -
                    m * (Math.cos(c * p) * (a + o * s * l) - c * l * Math.sin(c * p)))
              } else {
                var f = Math.exp(-s * p)
                ;(u = this._toValue - f * (l + (a + s * l) * p)), (d = f * (a * (p * s - 1) + p * l * (s * s)))
              }
              if (
                ((this._lastTime = e),
                (this._lastPosition = u),
                (this._lastVelocity = d),
                this._onUpdate(u),
                this.__active)
              ) {
                var h = !1
                this._overshootClamping &&
                  0 !== this._stiffness &&
                  (h = this._startPosition < this._toValue ? u > this._toValue : u < this._toValue)
                var _ = Math.abs(d) <= this._restSpeedThreshold,
                  v = !0
                if (
                  (0 !== this._stiffness && (v = Math.abs(this._toValue - u) <= this._restDisplacementThreshold),
                  h || (_ && v))
                )
                  return (
                    0 !== this._stiffness &&
                      ((this._lastPosition = this._toValue), (this._lastVelocity = 0), this._onUpdate(this._toValue)),
                    void this.__debouncedOnEnd({ finished: !0 })
                  )
                this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this))
              }
            }),
            (l.stop = function () {
              t.prototype.stop.call(this),
                (this.__active = !1),
                clearTimeout(this._timeout),
                e.cancelAnimationFrame(this._animationFrame),
                this.__debouncedOnEnd({ finished: !1 })
            }),
            a
          )
        })(i.a)
        t.a = l
      }.call(this, n('fRV1')))
    },
    mbB1: function (e, t, n) {
      'use strict'
      var i = n('H5wF')
      t.a = i.a('NativeAnimatedTurboModule')
    },
    mf9H: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      }),
        n.d(t, 'b', function () {
          return v
        })
      var i = n('VrFO'),
        r = n.n(i),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('KEM+'),
        c = n.n(s),
        l = (n('hBpG'), n('7x/C'), n('jwue'), n('+oxZ'), n('vrRf'), n('Ee2X'), n('LW0h'), n('6U7i'), n('6/RC')),
        u = n('XmKV'),
        d = n('HT/6'),
        p = n('jHwr'),
        m = n('+d3d'),
        f = n('fs1G'),
        h = { autoplayPrioritizationPolicy: u.a, minimumVisibilityForAutoplay: 0.25 },
        _ = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h
            r()(this, e),
              c()(this, '_players', []),
              c()(this, '_setPlayerState', function (e, t) {
                ;(e.previousPlaybackState = e.playbackState), (e.playbackState = t)
              }),
              c()(this, '_updatePlaybackStates', function () {
                var e = t._players.find(function (e) {
                  return e.playbackState === d.b.USER_PLAYING && e.playbackPriority !== d.a.SPACE
                })
                e && !t._canPlay(e)
                  ? (t._pausePlayer(e), t._triggerAutoplay())
                  : e
                  ? t._stopAllExcept(e)
                  : t._triggerAutoplay()
              }),
              c()(
                this,
                '_scheduleUpdate',
                l.canUseDOM
                  ? Object(m.a)(
                      Object(p.a)(
                        this._updatePlaybackStates,
                        window.requestIdleCallback
                          ? function (e) {
                              return window.requestIdleCallback(e, { timeout: 200 })
                            }
                          : window.requestAnimationFrame,
                      ),
                      300,
                      { leading: !1, trailing: !0 },
                    )
                  : f.a,
              )
            var i = n.autoplayPrioritizationPolicy,
              a = n.minimumVisibilityForAutoplay
            ;(this._autoplayPrioritizationPolicy = i), (this._minimumVisibilityForAutoplay = a)
          }
          return (
            o()(e, [
              {
                key: 'register',
                value: function (e) {
                  var t = this,
                    n = e.canAutoplay,
                    i = e.onAutoPlayRequest,
                    r = e.onFullscreenEntered,
                    a = e.onFullscreenExited,
                    o = e.onPauseRequest,
                    s = e.isLooping,
                    c = e.playbackPriority,
                    l = void 0 === c ? d.a.NORMAL : c,
                    u = {
                      placement: void 0,
                      playbackPriority: l,
                      playbackState: d.b.INITIAL,
                      previousPlaybackState: d.b.INITIAL,
                      commandHandlers: {
                        onAutoPlayRequest: i,
                        onFullscreenEntered: r,
                        onFullscreenExited: a,
                        onPauseRequest: o,
                      },
                      canAutoplay: n && l !== d.a.INELIGIBLE,
                      isLooping: s,
                    }
                  return (
                    this._players.push(u),
                    {
                      reset: function () {
                        return t._handleReset(u)
                      },
                      signalFullscreenChange: function (e) {
                        return t._handleFullscreenChanged(e)
                      },
                      signalPlacementChange: function (e) {
                        return t._handlePlacementChange(u, e)
                      },
                      signalPlay: function () {
                        return t._handlePlay(u)
                      },
                      signalPause: function () {
                        return t._handlePause(u)
                      },
                      signalPlaybackFinish: function () {
                        return t._handlePlaybackFinished(u)
                      },
                      signalPlaybackPriorityChange: function (e, n) {
                        return t._handlePlaybackPriorityChange(u, e, n)
                      },
                      unregister: function () {
                        return t._handleUnregister(u)
                      },
                    }
                  )
                },
              },
              {
                key: '_handleFullscreenChanged',
                value: function (e) {
                  this._players.forEach(function (t) {
                    var n = t.commandHandlers,
                      i = n.onFullscreenEntered,
                      r = n.onFullscreenExited
                    e && i ? i() : !e && r && r()
                  })
                },
              },
              {
                key: '_handlePlacementChange',
                value: function (e, t) {
                  var n = t.scrollY()
                  ;(e.placement = t),
                    this._scrollY !== n && (this._scrollY = n),
                    e.playbackState === d.b.FINISHED &&
                      0 === t.visibleFraction() &&
                      this._setPlayerState(e, d.b.INITIAL),
                    this._scheduleUpdate()
                },
              },
              {
                key: '_handlePlay',
                value: function (e) {
                  e.playbackState !== d.b.AUTO_PLAYING &&
                    (e.previousPlaybackState === d.b.AUTO_PLAYING && e.isLooping
                      ? this._setPlayerState(e, d.b.AUTO_PLAYING)
                      : this._setPlayerState(e, d.b.USER_PLAYING)),
                    this._stopAllExcept(e)
                },
              },
              {
                key: '_handlePause',
                value: function (e) {
                  e.playbackState !== d.b.AUTO_PAUSED && this._setPlayerState(e, d.b.USER_PAUSED)
                },
              },
              {
                key: '_handlePlaybackFinished',
                value: function (e) {
                  this._setPlayerState(e, d.b.FINISHED)
                },
              },
              {
                key: '_handlePlaybackPriorityChange',
                value: function (e, t, n) {
                  ;(e.playbackPriority = t), (e.canAutoplay = n && t !== d.a.INELIGIBLE), this._scheduleUpdate()
                },
              },
              {
                key: '_handleReset',
                value: function (e) {
                  this._setPlayerState(e, d.b.INITIAL), this._scheduleUpdate()
                },
              },
              {
                key: '_handleUnregister',
                value: function (e) {
                  var t = this._players.indexOf(e)
                  t >= 0 && this._players.splice(t, 1), this._scheduleUpdate()
                },
              },
              {
                key: '_triggerAutoplay',
                value: function () {
                  var e = this,
                    t = this._players.filter(function (t) {
                      return e._canAutoPlay(t)
                    }),
                    n = this._findBestAutoplayFit(t)
                  n
                    ? (this._stopAllExcept(n), this._autoPlayVideo(n))
                    : this._players.forEach(function (t) {
                        t.playbackState === d.b.AUTO_PLAYING && e._pausePlayer(t)
                      })
                },
              },
              {
                key: '_canAutoPlay',
                value: function (e) {
                  var t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                    n = e.playbackState === d.b.USER_PAUSED,
                    i = e.playbackState === d.b.FINISHED
                  return e.canAutoplay && t && !n && !i
                },
              },
              {
                key: '_canPlay',
                value: function (e) {
                  var t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                    n = !!e.placement && e.placement.visibleFraction() > 0
                  return e.playbackPriority !== d.a.INELIGIBLE && (!e.placement || n || t)
                },
              },
              {
                key: '_stopAllExcept',
                value: function (e) {
                  var t = this
                  this._players.forEach(function (n) {
                    var i = n.playbackPriority !== d.a.SPACE
                    n === e ||
                      !i ||
                      (n.playbackState !== d.b.USER_PLAYING && n.playbackState !== d.b.AUTO_PLAYING) ||
                      t._pausePlayer(n)
                  })
                },
              },
              {
                key: '_pausePlayer',
                value: function (e) {
                  var t = e.commandHandlers.onPauseRequest
                  this._setPlayerState(e, d.b.AUTO_PAUSED), t()
                },
              },
              {
                key: '_autoPlayVideo',
                value: function (e) {
                  var t = e.commandHandlers.onAutoPlayRequest
                  this._setPlayerState(e, d.b.AUTO_PLAYING), t()
                },
              },
              {
                key: '_findBestAutoplayFit',
                value: function (e) {
                  return this._autoplayPrioritizationPolicy(e)
                },
              },
              {
                key: '_getDistanceToCenter',
                value: function (e) {
                  return e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE
                },
              },
              {
                key: '_getDistanceToTop',
                value: function (e) {
                  return e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE
                },
              },
            ]),
            e
          )
        })(),
        v = new _()
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      var i = n('97Jx'),
        r = n.n(i),
        a = n('m3Bd'),
        o = n.n(a),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        f = n.n(m),
        h = n('2VqO'),
        _ = n.n(h),
        v = n('KEM+'),
        b = n.n(v),
        g = (n('2G9S'), n('ERkP')),
        y = n.n(g),
        E = n('nT9l'),
        w = n('3XMw'),
        I = n.n(w),
        S = 'image',
        O = n('TIdA'),
        C = n('a6qo'),
        k = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        A = I.a.f93bb3ee,
        P = (function (e) {
          f()(n, e)
          var t = _()(n)
          function n() {
            var e
            c()(this, n)
            for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  i = t.useMinimumData,
                  a = e.props,
                  s = a.accessibilityLabel,
                  c = (a.hideAcceptOverlay, a.shouldShowAltLabel),
                  l = o()(a, k)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    O.a,
                    r()({}, l, { accessibilityLabel: s, onVariantSelection: n, previewMode: i, testID: S }),
                  ),
                  c ? y.a.createElement(C.a, { align: 'left', altLabel: s }) : null,
                )
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
                    t = e.hideAcceptOverlay,
                    n = e.image
                  return y.a.createElement(E.a, {
                    acceptLabel: A,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
    },
    pxHa: function (e, t, n) {
      'use strict'
      var i = n('XJEr'),
        r = n('tI3i'),
        a = n.n(r),
        o = i.a.API,
        s = 1,
        c = (function () {
          var e = t.prototype
          function t() {
            this._listeners = {}
          }
          return (
            (e.__attach = function () {}),
            (e.__detach = function () {
              this.__isNative &&
                null != this.__nativeTag &&
                (i.a.API.dropAnimatedNode(this.__nativeTag), (this.__nativeTag = void 0))
            }),
            (e.__getValue = function () {}),
            (e.__getAnimatedValue = function () {
              return this.__getValue()
            }),
            (e.__addChild = function (e) {}),
            (e.__removeChild = function (e) {}),
            (e.__getChildren = function () {
              return []
            }),
            (e.__makeNative = function () {
              if (!this.__isNative) throw new Error('This node cannot be made a "native" animated node')
              this.hasListeners() && this._startListeningToNativeValueUpdates()
            }),
            (e.addListener = function (e) {
              var t = String(s++)
              return (this._listeners[t] = e), this.__isNative && this._startListeningToNativeValueUpdates(), t
            }),
            (e.removeListener = function (e) {
              delete this._listeners[e],
                this.__isNative && !this.hasListeners() && this._stopListeningForNativeValueUpdates()
            }),
            (e.removeAllListeners = function () {
              ;(this._listeners = {}), this.__isNative && this._stopListeningForNativeValueUpdates()
            }),
            (e.hasListeners = function () {
              return !!Object.keys(this._listeners).length
            }),
            (e._startListeningToNativeValueUpdates = function () {
              var e = this
              ;(this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) ||
                (this.__shouldUpdateListenersForNewNativeTag &&
                  ((this.__shouldUpdateListenersForNewNativeTag = !1), this._stopListeningForNativeValueUpdates()),
                o.startListeningToAnimatedNodeValue(this.__getNativeTag()),
                (this.__nativeAnimatedValueListener = i.a.nativeEventEmitter.addListener(
                  'onAnimatedValueUpdate',
                  function (t) {
                    t.tag === e.__getNativeTag() && e._onAnimatedValueUpdateReceived(t.value)
                  },
                )))
            }),
            (e._onAnimatedValueUpdateReceived = function (e) {
              this.__callListeners(e)
            }),
            (e.__callListeners = function (e) {
              for (var t in this._listeners) this._listeners[t]({ value: e })
            }),
            (e._stopListeningForNativeValueUpdates = function () {
              this.__nativeAnimatedValueListener &&
                (this.__nativeAnimatedValueListener.remove(),
                (this.__nativeAnimatedValueListener = null),
                o.stopListeningToAnimatedNodeValue(this.__getNativeTag()))
            }),
            (e.__getNativeTag = function () {
              var e
              i.a.assertNativeAnimatedModule(),
                a()(this.__isNative, 'Attempt to get native tag from node not marked as "native"')
              var t = null !== (e = this.__nativeTag) && void 0 !== e ? e : i.a.generateNewNodeTag()
              return (
                null == this.__nativeTag &&
                  ((this.__nativeTag = t),
                  i.a.API.createAnimatedNode(t, this.__getNativeConfig()),
                  (this.__shouldUpdateListenersForNewNativeTag = !0)),
                t
              )
            }),
            (e.__getNativeConfig = function () {
              throw new Error('This JS animated node type cannot be used as native animated node')
            }),
            (e.toJSON = function () {
              return this.__getValue()
            }),
            t
          )
        })()
      t.a = c
    },
    vG6z: function (e, t, n) {
      'use strict'
      var i = n('H5wF')
      t.a = i.a('NativeAnimatedModule')
    },
    xrkw: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        r = n.n(i),
        a = n('ERkP'),
        o = n.n(a),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    zlxh: function (e, t, n) {
      'use strict'
      n.d(t, 'j', function () {
        return h
      }),
        n.d(t, 'f', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'b', function () {
          return b
        }),
        n.d(t, 'e', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return I
        }),
        n.d(t, 'm', function () {
          return S
        }),
        n.d(t, 'k', function () {
          return k
        }),
        n.d(t, 's', function () {
          return x
        }),
        n.d(t, 'r', function () {
          return L
        }),
        n.d(t, 'p', function () {
          return V
        }),
        n.d(t, 'q', function () {
          return R
        }),
        n.d(t, 'n', function () {
          return M
        }),
        n.d(t, 'o', function () {
          return F
        }),
        n.d(t, 'i', function () {
          return B
        }),
        n.d(t, 'a', function () {
          return H
        }),
        n.d(t, 'h', function () {
          return Y
        }),
        n.d(t, 'l', function () {
          return Q
        }),
        n.d(t, 'c', function () {
          return J
        })
      var i = n('yiKp'),
        r = n.n(i),
        a = n('RhWx'),
        o = n.n(a),
        s =
          (n('yH/f'),
          n('vrRf'),
          n('2G9S'),
          n('ho0z'),
          n('hBpG'),
          n('7x/C'),
          n('uFXj'),
          n('1t7P'),
          n('jQ/y'),
          n('5BYb'),
          n('z84I'),
          n('LW0h'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('KqXw'),
          n('Ysgh'),
          n('vfdX'),
          n('M+/F'),
          n('3XMw')),
        c = n.n(s),
        l = n('lPpt'),
        u = n('XkXQ'),
        d = n('oQhu'),
        p = n('zrc3'),
        m = n('3dad'),
        f = n('XrEN'),
        h = function (e) {
          return 'https://twitter.com/i/events/'.concat(e)
        },
        _ = c.a.d2fb334b,
        v = c.a.ad16f482,
        b = (c.a.h0786685, '1'),
        g = 'RUNNING',
        y = { '600x1200': 4, '1024x2048': 3, '340x680': 2, '150x150': 1 },
        E = c.a.i0ed3f4d,
        w = Object.freeze({
          LIVE_BROADCAST: 'liveBroadcast',
          REPLAY_BROADCAST: 'replayBroadcast',
          AUDIOSPACE: 'audiospace',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        I = Object.freeze({ New: 'New' }),
        S = function (e, t, n) {
          if (n && n.url)
            return (function (e) {
              return -1 !== e.url.indexOf('pscp.tv')
            })(n)
              ? [].concat(
                  o()(e ? [{ width: 128, height: 128, uri: e }] : []),
                  o()(t ? [{ width: 360, height: 360, uri: t }] : []),
                  [{ width: n.width, height: n.height, uri: n.url }],
                )
              : void 0
        },
        O = Object(d.a)(function (e, t) {
          return e.slates && t && e.slates[t]
        }),
        C = function (e, t) {
          var n = (e.slate || e.fallback_slate || {}).id,
            i = (function (e, t) {
              var n = O(e, t),
                i = (n && n.variants) || []
              return Object(u.a)(i, function (e) {
                var t = e.name
                return y[t] || 0
              })
            })(t, n),
            r = (function (e, t, n) {
              var i,
                r = O(e, t)
              if (n && r) {
                var a = r.focus_rects,
                  o = void 0 === a ? [] : a,
                  s = r.tweet_id
                if (!(i = o.length ? o : void 0) && s) {
                  var c,
                    l = (null == e ? void 0 : e.tweets) && (null == e ? void 0 : e.tweets[s]),
                    u = (
                      (null == l || null === (c = l.extended_entities) || void 0 === c ? void 0 : c.media) || []
                    ).find(function (e) {
                      return e.media_key === t
                    })
                  i = u && m.a.getCropCandidates(u)
                }
              }
              return i
            })(t, n, i),
            a = (function (e, t, n) {
              return e ? t.slates[n].label : void 0
            })(i, t, n),
            o = O(t, n) || {},
            s = o.attribution,
            c = o.tweet_id,
            l =
              (function (e, t) {
                if (t.broadcast && t.broadcast.id) {
                  var n = t.broadcast.id,
                    i = A(e, n)
                  return i && { small: i.image_url_small, medium: i.image_url_medium }
                }
              })(t, e) || {},
            d = i && S(l.small, l.medium, i)
          return n && i
            ? { id: n, image: i, imageAttribution: s, periscopeVariants: d, cropCandidates: r, label: a, tweetId: c }
            : void 0
        },
        k = function (e, t) {
          var n = (function (e) {
              var t = e.liveEventDetails.attribution_user_id
              return e.users ? e.users[t] : void 0
            })(t),
            i = t.liveEventDetails,
            r = i.category,
            a = i.description,
            o = i.descriptionEntities,
            s = i.remind_me_subscription,
            c = i.short_title,
            l = i.time_string,
            u = i.title
          return {
            author: n,
            category: r,
            description: a,
            descriptionEntities: o,
            eventId: e,
            remindMeSubscription: s,
            shortTitle: c || u,
            timeString: l,
            title: u,
          }
        },
        A = function (e, t) {
          return e.broadcasts && t ? e.broadcasts[t] : void 0
        },
        P = function (e, t) {
          var n = e.extended_entities,
            i = (void 0 === n ? {} : n).media
          return (void 0 === i ? [] : i).find(function (e) {
            return e.media_key === t || 'photo' !== e.type
          })
        },
        N = function (e, t, n) {
          var i = e.media,
            r = (void 0 === i ? {} : i).mediaEntity
          return !r || (r.broadcast_id !== t && r.media_tweet_id !== n) ? void 0 : e.promotedContent
        },
        T = function (e, t, n, i, r, a) {
          var o = t && r ? P(t, r) : void 0,
            s = A(n, e),
            c = s ? e : void 0,
            l = null == s ? void 0 : s.media_key,
            u = null == s ? void 0 : s.status,
            d = null == s ? void 0 : s.twitter_user_id,
            p = null == s ? void 0 : s.user_display_name,
            m = null == s ? void 0 : s.username,
            f = null == s ? void 0 : s.width,
            h = null == s ? void 0 : s.height,
            _ = null == s ? void 0 : s.broadcast_source,
            v = null == s ? void 0 : s.camera_rotation,
            b = null == s ? void 0 : s.image_url,
            y = null == s ? void 0 : s.replay_edited_start_time
          return {
            mediaId: null == s ? void 0 : s.media_id,
            coverTweet: t,
            coverMedia: o,
            broadcastId: c,
            broadcastMediaKey: l,
            broadcastTitle: u,
            broadcastTwitterId: d,
            broadcastDisplayName: p,
            broadcastUsername: m,
            broadcastWidth: f,
            broadcastHeight: h,
            broadcastThumbnail: b,
            broadcastReplayStartTime: y,
            broadcastSource: _,
            broadcastOrientation: v,
            isLive: (function (e) {
              return !!e && e.state === g
            })(s),
            promotedContent: a && N(a, c, r),
          }
        },
        x = function (e, t) {
          return e && e.image
            ? {
                media_url_https: e.image.url,
                original_info: { focus_rects: e.cropCandidates, height: e.image.height, width: e.image.width },
                ext_alt_text: t ? t.ext_alt_text : E,
                id_str: e.id,
                expanded_url: '',
                type: 'photo',
              }
            : void 0
        },
        D = function (e, t) {
          switch (t) {
            case J.SHOP:
              return e.isTrue('responsive_web_live_commerce_enabled')
            default:
              return !0
          }
        },
        L = function (e, t, n, i) {
          var a,
            o,
            s = t.liveEventDetails.timelines || [],
            c = s.length ? s[0].timeline_id : b,
            l = s.length ? s[0].hashtag : void 0,
            u = s.length ? s[0].compose_semantic_core_id : void 0,
            d = 0,
            p =
              n &&
              s.some(function (e) {
                return e.timeline_id === n
              }),
            m = D(i, n),
            f = s
              .filter(function (e) {
                var t = e.timeline_id
                return D(i, t)
              })
              .map(function (t, i) {
                var r = t.compose_semantic_core_id,
                  s = t.customization_info,
                  l = t.hashtag,
                  u = t.label_type,
                  m = t.timeline_id,
                  f = t.timeline_source_id,
                  h = t.timeline_source_type,
                  _ = t.title,
                  v = m === c
                return (
                  ((p && m === n) || v) && ((d = i), (a = l), (o = r)),
                  {
                    isActive: function () {
                      return p ? m === n : v
                    },
                    to: { pathname: '/i/events/'.concat(e), query: { timeline: m } },
                    label: _,
                    labelType: I[u],
                    customizationInfo: s,
                    hashtag: l,
                    timelineId: m,
                    timelineSourceId: f,
                    timelineSourceType: h,
                  }
                )
              }),
            h = p && m && n ? n : c,
            _ = a || l,
            v = o || u
          return {
            composeDetails: r()(
              { composeSemanticCoreId: v },
              _ ? { defaultText: ' '.concat(_), positionCursorAtBeginning: !0 } : { defaultText: '' },
            ),
            eventId: e,
            hashtag: _,
            timelineId: h,
            timelineIndex: d,
            timelineLinks: f,
          }
        },
        V = function (e, t) {
          if (e) {
            var n = t && j(e, t),
              i = R(e)
            return n || e[i]
          }
        },
        R = function (e) {
          var t = Object(p.a)(e, function (e) {
            return e.selected
          })
          return -1 === t ? 0 : t
        },
        j = function (e, t) {
          return (
            e &&
            e.find(function (e) {
              return e.id === t
            })
          )
        },
        M = function (e) {
          var t = e.response.polling_interval_seconds
          return t > 0 ? t : 0
        },
        F = function (e) {
          var t = e.response.score
          return t && t.data && t.data.moments ? t.data : void 0
        },
        B = function (e, t, n) {
          var i = e.response.carousel,
            a =
              (i || []).filter(function (e) {
                return e.moment
              }).length > 0
          return (i || [])
            .filter(function (e) {
              return !e.moment
            })
            .map(function (t) {
              var i,
                o,
                s = t.entry_id,
                c = C(t, e),
                u = c && c.id,
                d = (t.tweet_media && t.tweet_media.id) || (c && c.tweetId),
                p = d ? l.a.selectHydratedTweet(e, d) : void 0,
                m = T(s, p, e, 0, u, n)
              if (t.broadcast) {
                var f = e.broadcasts ? e.broadcasts[t.broadcast.id] : void 0
                ;(o = (f && f.twitter_user_id && e.users && e.users[f.twitter_user_id]) || void 0),
                  (i = f ? z(o, f) : void 0)
              } else if (t.audiospace) {
                var h = e.audiospaces ? e.audiospaces[t.audiospace.id] : void 0
                ;(o = (h && h.creator_twitter_user_id && e.users && e.users[h.creator_twitter_user_id]) || void 0),
                  (i = h ? W(o, h) : void 0)
              } else if ((t.slate && d) || t.tweet_media) {
                var _ = d && e.tweets ? e.tweets[d] : void 0
                i = (o = _ && e.users ? e.users[_.user] : void 0) ? q(o, !!t.tweet_media, u, _, e) : void 0
              } else t.slate && c && (i = { type: w.SLATE })
              return (
                i || !c || t.tweet_media || (i = { type: w.SLATE }),
                !U(o) && i && c
                  ? {
                      id: s,
                      carouselItemInfo: r()(r()({}, i), {}, { socialProof: t.social_proof }),
                      mediaDetails: m,
                      slate: c,
                      selected: !!t.selected,
                      isMoment: a,
                    }
                  : void 0
              )
            })
            .filter(Boolean)
        },
        U = function (e) {
          return (e && (e.blocking || e.blocked_by)) || !1
        },
        H = Object.freeze({ TWITTER: 'twitter', PERISCOPE: 'periscope' }),
        z = function (e, t) {
          return {
            verified: !!e && e.verified,
            screenName: e ? e.screen_name : void 0,
            name: e ? e.name : t.user_display_name,
            userId: e ? e.id_str : t.user_id,
            type: t.state === g ? w.LIVE_BROADCAST : w.REPLAY_BROADCAST,
            accountType: e ? H.TWITTER : H.PERISCOPE,
            profileImageUrl: e ? e.profile_image_url_https : void 0,
          }
        },
        W = function (e, t) {
          return {
            audiospace: t,
            verified: !!e && e.verified,
            screenName: e ? e.screen_name : t.host.username,
            name: e ? e.name : t.host.display_name,
            userId: e ? e.id_str : t.creator_twitter_user_id,
            type: w.AUDIOSPACE,
            accountType: e ? H.TWITTER : H.PERISCOPE,
            profileImageUrl: e ? e.profile_image_url_https : t.host.avatar_url,
          }
        },
        q = function (e, t, n, i, r) {
          var a, o, s
          if (t && i && n) {
            var c = P(i, n)
            if (c) {
              var l = c.type
              o = X(l)
              var u = f.a.getVideoFromCoverMedia(c) || {},
                d = u.source_user_id_str,
                p = u.video_info
              ;(a = p && p.duration_millis), (s = d && G(d, r))
            }
          } else o = w.SLATE
          var m = s || e || {},
            h = m.id_str,
            _ = m.name,
            v = m.screen_name,
            b = m.verified
          return o
            ? { accountType: H.TWITTER, verified: b, screenName: v, name: _, type: o, playbackDuration: a, userId: h }
            : void 0
        },
        G = function (e, t) {
          return t.users && t.users[e]
        },
        X = function (e) {
          switch (e) {
            case 'animated_gif':
              return w.GIF
            case 'vine':
            case 'video':
              return w.VOD
            default:
              return
          }
        },
        Y = function (e) {
          var t
          if (e) {
            var n = new URL(e).pathname.split('/')
            t = n[n.length - 1]
          }
          return t
        },
        K = function (e) {
          return !!e && !!e.carouselItemInfo && e.carouselItemInfo.type !== w.GIF && e.carouselItemInfo.type !== w.SLATE
        },
        Q = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e + 1,
            i = t.slice(n).findIndex(K)
          return i > -1 ? i + n : i
        },
        J = Object.freeze({ SHOP: 'shop' })
    },
  },
])
//# sourceMappingURL=WIPED
