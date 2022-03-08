;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '+Tpo': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var i = n('ERkP'),
        a = n.n(i),
        o = n('3XMw'),
        r = n.n(o),
        s = n('xrkw'),
        c = n('wwsH'),
        l = r.a.f2849136,
        u = r.a.dedf22f3,
        d = { viewType: 'analytics' }
      function p(e) {
        var t = e.activeColor,
          n = e.color,
          i = e.iconSize,
          o = e.isDisabled,
          r = e.isFaded,
          p = e.isPresentational,
          m = e.onPress,
          h = e.style,
          f = e.tweetLink
        return a.a.createElement(c.a, {
          Icon: s.a,
          accessibilityLabel: u,
          activeColor: t,
          behavioralEventContext: d,
          color: n,
          hoverLabel: { label: l },
          iconSize: i,
          isDisabled: o,
          isFaded: r,
          isPresentational: p,
          link: !f || o || r ? void 0 : ''.concat(f, '/analytics'),
          onPress: m,
          style: h,
        })
      }
    },
    '/aXP': function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        a = n.n(i),
        o = n('t62R'),
        r = n('5mJL'),
        s = n('rHpw'),
        c = n('j7Bv'),
        l = s.a.create(function (e) {
          return {
            cellStyle: { justifyContent: 'center' },
            thumbnail: { flexBasis: 'auto', justifyContent: 'center', marginRight: e.spaces.space8 },
          }
        }),
        u = function (e) {
          var t = e.Icon,
            n = e.nativeID,
            i = e.style,
            s = e.text,
            u = e.type,
            d = a.a.createElement(c.a, { Icon: t, color: u, size: 'medium' })
          return a.a.createElement(
            r.a,
            { avatarCell: d, avatarCellStyle: l.thumbnail, cellStyle: l.cellStyle, style: i },
            a.a.createElement(o.b, { color: 'gray700', nativeID: n, size: 'subtext2' }, s),
          )
        },
        d = n('4zmP'),
        p = n('MWbm'),
        m = n('3XMw'),
        h = n.n(m),
        f = n('lBmi'),
        v = n('gUPl'),
        _ = n('gBde'),
        b = n('Oib4'),
        g = n('EyD/'),
        w = n('yiKp'),
        y = n.n(w),
        C = n('Lsrn'),
        k = n('k/Ka'),
        T = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(k.a)(
            'svg',
            y()(
              y()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [C.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M12.084 16.7c.89 0 1.612-.71 1.637-1.595h-3.273c.025.884.748 1.596 1.637 1.596z',
              }),
              a.a.createElement('path', {
                d: 'M12.085 1.25C6.157 1.25 1.335 6.072 1.335 12s4.822 10.75 10.75 10.75 10.75-4.822 10.75-10.75-4.823-10.75-10.75-10.75zm5.468 13.593c-.053.156-.2.263-.364.263h-2.47c-.024 1.435-1.195 2.596-2.636 2.596s-2.612-1.16-2.637-2.596H6.98c-.167 0-.315-.106-.367-.265-.05-.157.003-.33.137-.43.046-.035 1.192-.943 1.172-3.352-.012-1.39.445-2.623 1.286-3.475.754-.763 1.773-1.185 2.872-1.19h.006c1.098.006 2.118.428 2.872 1.19.842.852 1.3 2.086 1.287 3.476-.02 2.407 1.125 3.315 1.174 3.353.133.1.186.274.133.43z',
              }),
            ),
          )
        }
      T.metadata = { width: 24, height: 24 }
      var E = T,
        S = {
          conversationControlsFollowersCanEngage: {
            Icon: f.a,
            calloutType: 'primary',
            headline: h.a.bb7b821a,
            detail: h.a.h15b020c,
            inline: h.a.e5dc76d0,
          },
          conversationControlsFollowersCannotEngage: {
            Icon: f.a,
            calloutType: 'primary',
            headline: h.a.ab105904,
            detail: h.a.h15b020c,
            inline: h.a.fd1cda7a,
          },
          conversationControlsCommunityCanEngage: {
            Icon: v.a,
            calloutType: 'primary',
            headline: h.a.bb7b821a,
            detail: h.a.j86de6d0,
            inline: h.a.e5dc76d0,
          },
          conversationControlsCommunityCannotEngage: {
            Icon: v.a,
            calloutType: 'primary',
            headline: h.a.ab105904,
            detail: h.a.j86de6d0,
            inline: h.a.fd1cda7a,
          },
          conversationControlsByInvitationCanEngage: {
            Icon: _.a,
            calloutType: 'primary',
            headline: h.a.bb7b821a,
            detail: h.a.cededc6f,
            inline: h.a.e5dc76d0,
          },
          conversationControlsByInvitationCannotEngage: {
            Icon: _.a,
            calloutType: 'primary',
            headline: h.a.ab105904,
            detail: h.a.cededc6f,
            inline: h.a.fd1cda7a,
          },
          communityHiddenTweetEducation: {
            Icon: b.a,
            calloutType: 'primary',
            headline: h.a.g7ea1122,
            detail: h.a.f9560709,
            inline: h.a.g7ea1122,
          },
          communityRemovedMemberEducation: {
            Icon: b.a,
            calloutType: 'primary',
            headline: h.a.g7ea1122,
            detail: h.a.jd773100,
            inline: h.a.g7ea1122,
          },
          exclusiveToSuperFollowersCreator: {
            Icon: g.a,
            calloutType: 'exclusive',
            headline: h.a.dbf9738f,
            detail: h.a.d95d8f24,
            inline: h.a.d95d8f24,
          },
          exclusiveToSuperFollowersReplyOwn: {
            Icon: g.a,
            calloutType: 'exclusive',
            headline: h.a.dbf9738f,
            detail: h.a.ff6895e3,
            inline: h.a.ff6895e3,
          },
          exclusiveToSuperFollowersReplyOthers: {
            Icon: g.a,
            calloutType: 'exclusive',
            headline: h.a.f1140912,
            detail: h.a.j1a5fd02,
            inline: h.a.aaeb399a,
          },
          headsUpCopyA: {
            Icon: E,
            calloutType: 'primary',
            headline: h.a.b140e3b1,
            detail: h.a.icbb05dc,
            inline: h.a.icbb05dc,
          },
          headsUpCopyB: {
            Icon: E,
            calloutType: 'primary',
            headline: h.a.g4d12383,
            detail: h.a.fe5ab73c,
            inline: h.a.fe5ab73c,
          },
          trustedFriendsReplyOwn: { Icon: g.a, calloutType: 'success', detail: h.a.fe0c6436, inline: h.a.fe0c6436 },
          trustedFriendsReplyOthers: {
            Icon: g.a,
            calloutType: 'success',
            detail: h.a.h7a1a9de,
            detailAction: { label: h.a.d7e50a66, link: 'https://help.twitter.com/using-twitter/twitter-circle' },
            inline: h.a.e5e32275,
          },
        },
        I = function (e, t) {
          return 'string' != typeof e ? e({ screenName: t }) : e
        }
      t.a = function (e) {
        var t = e.displayMode,
          n = e.nativeID,
          i = e.screenName,
          o = e.style,
          r = e.type,
          s = S[r],
          c = s.Icon,
          l = s.calloutType,
          m = s.detail,
          h = s.detailAction,
          f = s.headline,
          v = s.inline,
          _ = 'compact' === t,
          b = 'detail' === t,
          g = b ? h : void 0,
          w = b ? f : void 0,
          y = I(b ? m : v, i)
        return a.a.createElement(
          p.a,
          { style: o },
          _
            ? a.a.createElement(u, { Icon: c, nativeID: n, text: y, type: l })
            : a.a.createElement(d.a, {
                Icon: c,
                action: g,
                headline: w,
                nativeID: n,
                text: y,
                type: l,
                withThumbnail: !0,
              }),
        )
      }
    },
    '/x6e': function (e, t, n) {
      'use strict'
      var i = n('9Ulv'),
        a = n('BR0S'),
        o = n('tI3i'),
        r = n.n(o)
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
          function a(t) {
            var n
            n = e.call(this) || this
            var a = t || { x: 0, y: 0 }
            return (
              'number' == typeof a.x && 'number' == typeof a.y
                ? ((n.x = new i.a(a.x)), (n.y = new i.a(a.y)))
                : (r()(
                    a.x instanceof i.a && a.y instanceof i.a,
                    'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.',
                  ),
                  (n.x = a.x),
                  (n.y = a.y)),
              (n._listeners = {}),
              n
            )
          }
          ;(n = e), ((t = a).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), s(t, n)
          var o = a.prototype
          return (
            (o.setValue = function (e) {
              this.x.setValue(e.x), this.y.setValue(e.y)
            }),
            (o.setOffset = function (e) {
              this.x.setOffset(e.x), this.y.setOffset(e.y)
            }),
            (o.flattenOffset = function () {
              this.x.flattenOffset(), this.y.flattenOffset()
            }),
            (o.extractOffset = function () {
              this.x.extractOffset(), this.y.extractOffset()
            }),
            (o.__getValue = function () {
              return { x: this.x.__getValue(), y: this.y.__getValue() }
            }),
            (o.resetAnimation = function (e) {
              this.x.resetAnimation(), this.y.resetAnimation(), e && e(this.__getValue())
            }),
            (o.stopAnimation = function (e) {
              this.x.stopAnimation(), this.y.stopAnimation(), e && e(this.__getValue())
            }),
            (o.addListener = function (e) {
              var t = this,
                n = String(c++),
                i = function (n) {
                  n.value
                  e(t.__getValue())
                }
              return (this._listeners[n] = { x: this.x.addListener(i), y: this.y.addListener(i) }), n
            }),
            (o.removeListener = function (e) {
              this.x.removeListener(this._listeners[e].x),
                this.y.removeListener(this._listeners[e].y),
                delete this._listeners[e]
            }),
            (o.removeAllListeners = function () {
              this.x.removeAllListeners(), this.y.removeAllListeners(), (this._listeners = {})
            }),
            (o.getLayout = function () {
              return { left: this.x, top: this.y }
            }),
            (o.getTranslateTransform = function () {
              return [{ translateX: this.x }, { translateY: this.y }]
            }),
            a
          )
        })(a.a)
      t.a = l
    },
    '0ig/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var i = n('i4Oy'),
        a = n('ERkP')
      function o() {
        var e = Object(a.useState)(function () {
            return i.a.get('window')
          }),
          t = e[0],
          n = e[1]
        return (
          Object(a.useEffect)(function () {
            function e(e) {
              var t = e.window
              null != t && n(t)
            }
            return (
              i.a.addEventListener('change', e),
              n(i.a.get('window')),
              function () {
                i.a.removeEventListener('change', e)
              }
            )
          }, []),
          t
        )
      }
    },
    '0m3q': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i = n('4LIG'),
        a = n('tI3i'),
        o = n.n(a)
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var s = (function (e) {
          var t, n
          function i(t, n, i, a) {
            var o
            return ((o = e.call(this, n) || this).emitter = t), (o.listener = i), (o.context = a), o
          }
          return (
            (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            r(t, n),
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
              o()(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.'),
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
              o()(e.emitter === this, 'Subscription does not belong to this emitter.'),
                this._subscriber.removeSubscription(e)
            }),
            (t.listenerCount = function (e) {
              var t = this._subscriber.getSubscriptionsForType(e)
              return t ? t.filter(l).length : 0
            }),
            (t.emit = function (e) {
              var t = this._subscriber.getSubscriptionsForType(e)
              if (t) {
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                  i[a - 1] = arguments[a]
                for (var o = 0, r = t.length; o < r; o++) {
                  var s = t[o]
                  s && s.listener && s.listener.apply(s.context, i)
                }
              }
            }),
            (t.removeListener = function (e, t) {
              var n = this._subscriber.getSubscriptionsForType(e)
              if (n)
                for (var i = 0, a = n.length; i < a; i++) {
                  var o = n[i]
                  o && o.listener === t && o.remove()
                }
            }),
            e
          )
        })())(),
        d = (function () {
          function e(e) {
            'ios' === i.a.OS &&
              (o()(null != e, '`new NativeEventEmitter()` requires a non-null argument.'), (this._nativeModule = e))
          }
          var t = e.prototype
          return (
            (t.addListener = function (e, t, n) {
              var i,
                a = this
              null == (i = this._nativeModule) || i.addListener(e)
              var o = u.addListener(e, t, n)
              return {
                remove: function () {
                  var e
                  null != o && (null == (e = a._nativeModule) || e.removeListeners(1), o.remove(), (o = null))
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
              o()(null != e, '`NativeEventEmitter.removeAllListener()` requires a non-null argument.'),
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
    '0weh': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              r.a.createElement('path', {
                d: 'M13.37 16.19c0 .76-.61 1.37-1.37 1.37s-1.38-.61-1.38-1.37.62-1.38 1.38-1.38 1.37.62 1.37 1.38zm.35-7.66l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '2qZs': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M2.264 22.983c-.322 0-.638-.126-.88-.368-.374-.374-.473-.926-.25-1.405L2.8 17.58c-1.017-1.7-1.55-3.62-1.55-5.58C1.25 6.072 6.072 1.25 12 1.25S22.75 6.072 22.75 12 17.928 22.75 12 22.75c-1.957 0-3.876-.533-5.55-1.54l-3.66 1.657c-.17.078-.35.116-.526.116zm4.158-3.286c.278 0 .558.077.807.23 1.434.864 3.085 1.323 4.77 1.323 5.1 0 9.25-4.15 9.25-9.25S17.1 2.75 12 2.75 2.75 6.9 2.75 12c0 1.688.458 3.338 1.326 4.774.266.44.298.977.086 1.434l-1.384 3.014 3.016-1.386c.2-.093.413-.14.628-.14z',
              }),
              r.a.createElement('path', {
                d: 'M12 18.25c-3.446 0-6.25-2.804-6.25-6.25S8.554 5.75 12 5.75s6.25 2.804 6.25 6.25-2.804 6.25-6.25 6.25zm0-11c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25z',
              }),
              r.a.createElement('path', {
                d: 'M14.5 12.75c-.414 0-.75-.336-.75-.75 0-.965-.785-1.75-1.75-1.75-.414 0-.75-.336-.75-.75s.336-.75.75-.75c1.792 0 3.25 1.458 3.25 3.25 0 .414-.336.75-.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '3MlI': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      }),
        n.d(t, 'a', function () {
          return l
        })
      var i = n('ERkP'),
        a = n.n(i),
        o = n('nBUg'),
        r = n('rHpw'),
        s = n('MWbm')
      function c(e) {
        var t = e.accessibilityLabel,
          n = e.accessibilityLabelledBy,
          i = e.children,
          r = e.displayStyle,
          c = void 0 === r ? 'inline' : r,
          l = e.nativeID,
          d = e.style,
          p = o.b.useProps().edgeToEdgeEnabled()
        return a.a.createElement(
          s.a,
          {
            accessibilityLabel: t,
            accessibilityLabelledBy: n,
            accessibilityRole: 'group',
            nativeID: l,
            style: [u.container, u[''.concat(c, 'Container')], p && u.noMaxWidth, d],
          },
          i,
        )
      }
      var l = 425,
        u = r.a.create(function (e) {
          return {
            container: { columnGap: e.spacesPx.space8, flexDirection: 'row' },
            inlineContainer: { justifyContent: 'space-between', maxWidth: l },
            noMaxWidth: { maxWidth: 'none' },
            blockContainer: {
              alignItems: 'stretch',
              height: '100%',
              justifyContent: 'space-around',
              minHeight: '1.875rem',
              paddingHorizontal: e.spaces.space4,
            },
          }
        })
    },
    '48TD': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('wAC9')
      t.a = function (e, t) {
        return Object(o.a)({
          contextSuffix: 'BOOKMARK_FOLDERS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Bookmarks.fetchBookmarkFoldersSlice
          },
          getEndpointParams: function (e) {
            return a()(a()({}, e), {}, { tweet_id: t })
          },
          sliceKey: 'bookmarkFoldersSlice-'.concat(e),
        })
      }
    },
    '4bW+': function (e, t, n) {
      'use strict'
      t.a = {
        downvote: 'downvote',
        undownvote: 'undownvote',
        reply: 'reply',
        like: 'like',
        unlike: 'unlike',
        react: 'react',
        unreact: 'unreact',
        retweet: 'retweet',
        unretweet: 'unretweet',
        retweetConfirm: 'retweetConfirm',
        unretweetConfirm: 'unretweetConfirm',
        caret: 'caret',
      }
    },
    '4hQ9': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return d
      }),
        n.d(t, 'a', function () {
          return p
        }),
        n.d(t, 'e', function () {
          return m
        }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'd', function () {
          return f
        })
      n('ERkP')
      var i = n('3XMw'),
        a = n.n(i),
        o = n('Nh1N'),
        r = n('RT39'),
        s = a.a.e86cb37f,
        c = a.a.f1824804,
        l = o.a,
        u = function (e, t) {
          return (
            ('US' === e.toUpperCase() && 'EN' === t.toUpperCase()) ||
            ('JP' === e.toUpperCase() && 'JA' === t.toUpperCase()) ||
            ('MX' === e.toUpperCase() && 'ES' === t.toUpperCase())
          )
        },
        d = function (e) {
          var t = e.loggedInUserId,
            n = e.tweet,
            i = n.retweeted_status || n
          return !(i.user.id_str !== t || (!i.self_thread && i.in_reply_to_status_id_str))
        },
        p = function (e) {
          var t = e.featureSwitches,
            n = e.isNsfwUser,
            i = e.loggedInUserId,
            a = e.tweet,
            o = e.userCountry,
            r = e.userLanguage,
            s = a.retweeted_status || a
          return !(
            i !== s.user.id_str ||
            a.tombstoneInfo ||
            !s.possibly_sensitive ||
            n ||
            !u(o || '', r) ||
            !t.isTrue('enable_label_appealing_sensitive_content_enabled')
          )
        },
        m = function (e) {
          var t = e.displaySensitiveMedia,
            n = e.featureSwitches,
            i = e.isNsfwUser,
            a = e.loggedInUserId,
            o = e.tweet,
            r = e.userCountry,
            s = e.userLanguage
          return (
            t && p({ tweet: o, isNsfwUser: i, featureSwitches: n, loggedInUserId: a, userLanguage: s, userCountry: r })
          )
        },
        h = function (e) {
          var t = e.featureSwitches,
            n = e.forwardPivotDisplayType,
            i = e.loggedInUserId,
            a = e.tweet,
            o = e.userCountry,
            s = e.userLanguage
          return (
            i === (a.retweeted_status || a).user.id_str &&
            !a.tombstoneInfo &&
            n === r.a.SoftIntervention &&
            u(o || '', s) &&
            t.isTrue('enable_label_appealing_misinfo_enabled')
          )
        },
        f = function (e, t) {
          var n = e.retweeted_status || e
          return {
            text: s,
            action: {
              label: c,
              link: {
                pathname: ''.concat('/i/report/appeal_tweet_warning', '/').concat(n.id_str),
                state: { scribeNamespace: t },
              },
            },
            Icon: l,
            withThumbnail: !0,
          }
        }
    },
    '6nXH': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      var i = n('ddV6'),
        a = n.n(i),
        o = (n('2G9S'), n('ho0z'), n('ERkP')),
        r = n.n(o),
        s = n('6/RC'),
        c = n('iX4X'),
        l = n('/Ikv'),
        u = n('nBUg'),
        d = n('ZvMt'),
        p = n('3XMw'),
        m = n.n(p),
        h = n('4zmP'),
        f = n('3dad'),
        v = n('uCxL'),
        _ = n('k2KP'),
        b = n('tLTi'),
        g = n('rHpw'),
        w = n('+d3d'),
        y = n('v302'),
        C = n('LKCq'),
        k = n('rOiJ'),
        T = n('E0cF'),
        E = n('XurV'),
        S = n('MWbm'),
        I = n('IV4V'),
        x = n('RT39'),
        A = n('VRZ4'),
        O = 16 / 9,
        P = 'timeline',
        L = s.canUseDOM
          ? function () {
              var e = r.a.useRef(null),
                t = r.a.useState(506),
                n = a()(t, 2),
                i = n[0],
                o = n[1],
                s = r.a.useMemo(function () {
                  var e = Object(w.a)(o, 300)
                  return new window.ResizeObserver(function (t) {
                    if (t[0]) {
                      var n = t[0].contentRect.width
                      e(n)
                    }
                  })
                }, [])
              return (
                r.a.useLayoutEffect(
                  function () {
                    if (null != e && e.current)
                      return (
                        s.observe(e.current),
                        function () {
                          s.disconnect()
                        }
                      )
                  },
                  [e, s],
                ),
                [i >= 506, e]
              )
            }
          : function () {
              return [!0, null]
            }
      function R(e) {
        var t,
          n,
          i,
          o,
          s,
          p = e.cardCacheLocationKey,
          m = e.displayMediaMetadata,
          b = e.enableKeyboardShortcuts,
          g = e.forwardPivotInfo,
          w = e.inlineCalloutInfo,
          y = e.innerForwardPivotInfo,
          C = e.isMediaMaxHeightEnabled,
          R = e.loggedInUserId,
          M = e.mediaCacheLocationKey,
          j = e.nativeID,
          F = e.onCardLinkClick,
          B = e.onMediaClick,
          U = e.onQuoteTweetClick,
          V = e.preventVideoPlayback,
          H = e.promotedContent,
          z = e.quoteTweetSingleImageMinAspectRatio,
          W = void 0 === z ? O : z,
          q = e.quoteTweetSocialContextProps,
          K = e.quotedTweetTombstoneInfo,
          Q = e.renderQuoteTweetTombstone,
          X = void 0 === Q ? D : Q,
          G = e.singleImageMaxAspectRatio,
          J = void 0 === G ? 10 : G,
          Y = e.singleImageMinAspectRatio,
          Z = void 0 === Y ? O : Y,
          $ = e.mediaAltTranslations,
          ee = e.tweet,
          te = e.withActionsDisabled,
          ne = e.withAltTextBadge,
          ie = e.withCardLinks,
          ae = void 0 !== ie && ie,
          oe = e.withCenterCrop,
          re = void 0 !== oe && oe,
          se = e.withCondensedQuoteTweet,
          ce = e.withHalvedMediaSize,
          le = void 0 !== ce && ce,
          ue = e.withMediaTagsIcon,
          de = e.withQuoteTweetHeaderLinks,
          pe = e.withQuoteTweetLink,
          me = e.withQuoteTweetMedia,
          he = void 0 === me || me,
          fe = e.withReactions,
          ve = e.withRoundMediaCorners,
          _e = e.withTweetMedia,
          be = void 0 === _e || _e,
          ge = e.withUserHoverCard,
          we = L(),
          ye = a()(we, 2),
          Ce = ye[0],
          ke = ye[1],
          Te = u.b.useProps().edgeToEdgeEnabled(),
          Ee = Object(E.useOpaqueIdentifier)(),
          Se = Object(E.useOpaqueIdentifier)(),
          Ie = T.a.getOriginalTweet(ee),
          xe = function () {
            return T.a.hasMedia(Ie, !be)
          },
          Ae = function (e) {
            var t,
              n = null == e || null === (t = e.extended_entities) || void 0 === t ? void 0 : t.media
            if (n && 1 === n.length && 'photo' === n[0].type) return n[0]
          },
          Oe = function () {
            return Ae(Ie)
          },
          Pe = function () {
            return Ae(Ie.quoted_status)
          },
          Le = function () {
            var e = Pe()
            if (e && e.original_info) {
              var t = e && e.original_info,
                n = t.height,
                i = t.width
              return Object(d.b)(W, J, { width: i, height: n })
            }
          },
          Re = function (e) {
            var t = f.a.getBackgroundColor(e)
            return t ? 'rgb('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ')') : null
          },
          Ne = function (e, t) {
            return [Te && N.negativeMargin, t && Te && [N.centerItems, { backgroundColor: e }]]
          },
          De = function () {
            var e,
              t,
              n,
              i = T.a.getOriginalTweet(ee),
              a = xe(),
              o = C && !a && !!(e = Le()) && e < 1 && Ce,
              s = (t = Pe()) ? Re(t) : null
            return i && i.is_quote_status
              ? r.a.createElement(v.a, {
                  forwardPivotInfo: (null === (n = i.quoted_status) || void 0 === n ? void 0 : n.softIntervention) || y,
                  isCondensed: se,
                  loggedInUserId: R,
                  mediaContentStyles: !se && Ne(s, !!o),
                  mediaMaxHeight: o ? (Te ? 596 : 510) : void 0,
                  nativeID: Se,
                  onPress: U,
                  preventVideoPlayback: V,
                  shouldShowAltLabelAlways: ne,
                  singleImageMaxAspectRatio: J,
                  singleImageMinAspectRatio: W,
                  socialContextProps: q,
                  tweet: i.quoted_status,
                  withCenterCrop: re,
                  withHeaderLinks: de,
                  withLink: pe,
                  withMediaAsTextLinks: !he,
                  withReactions: fe,
                  withUserHoverCard: ge,
                })
              : null
          },
          Me = (function () {
            var e,
              t,
              n = T.a.getOriginalTweet(ee),
              i =
                C &&
                (function () {
                  if (!xe()) return !1
                  var e = Oe()
                  if (!e || !e.original_info) return !1
                  var t = e && e.original_info,
                    n = t.height,
                    i = t.width
                  return Object(d.b)(Z, J, { width: i, height: n }) < 1
                })() &&
                Ce,
              a = (t = Oe()) ? Re(t) : null
            if (!xe()) return null
            if (I.a.hasVoiceMedia(n))
              return r.a.createElement(S.a, { style: N.gap }, r.a.createElement(I.a, { tweet: n }))
            if (Object(A.c)(n)) {
              var o = Object(A.b)(n)
              if (o) return r.a.createElement(S.a, { style: N.gap }, r.a.createElement(A.a, { audioSpaceId: o }))
            }
            return r.a.createElement(k.a, {
              authorId: n.user.id_str,
              authorScreenName: n.user.screen_name,
              cacheLocationKey: M || P,
              displayMediaAttribution: !0,
              displayMediaMetadata: m,
              enableKeyboardShortcuts: b,
              forwardPivotInfo: g,
              hasSensitiveMedia: n.possibly_sensitive,
              loggedInUserId: R,
              mediaAltTranslations: $,
              mediaContentStyles: [Ne(a, !!i)],
              mediaDetails: null === (e = n.extended_entities) || void 0 === e ? void 0 : e.media,
              mediaMaxHeight: i ? (Te ? 596 : 510) : void 0,
              mediaTagsLink: ''.concat(n.permalink, '/media_tags'),
              onClick: B,
              preventPlayback: V,
              promotedContent: H,
              shouldShowAltLabelAlways: ne,
              showBorder: !(i && Te),
              showRoundCorners: ve,
              singleImageMaxAspectRatio: J,
              singleImageMinAspectRatio: Z,
              style: [N.gap, i && !Te && N.explicitlySized],
              tweetCreatedAt: n.created_at,
              tweetId: n.id_str,
              tweetText: n.text,
              withCenterCrop: re,
              withHalvedMediaSize: le,
              withMediaTagsIcon: ue,
              withPostPlayback: !0,
            })
          })(),
          je = (function () {
            if (g && g.displayType === x.a.SoftIntervention) {
              var e = g.displayType,
                t = g.landingUrl,
                n = g.softInterventionDisplayType,
                i = g.text
              return r.a.createElement(
                S.a,
                { style: N.mediaPivotGap },
                r.a.createElement(x.b, {
                  displayType: e,
                  isTweetNonCompliant: 'non_compliant' === ee.limited_actions,
                  landingUrl: t,
                  softInterventionDisplayType: n,
                  text: i,
                  tweetId: ee.id_str,
                  withReactions: fe,
                }),
              )
            }
          })(),
          Fe = w ? r.a.createElement(S.a, { style: N.mediaPivotGap }, r.a.createElement(h.a, w)) : null,
          Be =
            ((s = De()),
            (t =
              (s && K ? X({ children: s, config: K, nativeID: Se }) : s) ||
              (Ie && Ie.card && !xe() && (!ae || l.a.isPollCard(Ie.card.name)) && Ie.card
                ? r.a.createElement(c.a, {
                    card: {
                      name: Ie.card.name,
                      url: Ie.card.url,
                      binding_values: Ie.card.binding_values,
                      users: Ie.card.users,
                    },
                    cardContext: {
                      locationKey: p || P,
                      tweetId: Ie.id_str,
                      tweetPermalink: Ie.permalink,
                      tweetUserId: Ie.user.id_str,
                      viewerUserId: R,
                      withActionsDisabled: te,
                    },
                    nativeID: Ee,
                    onCardLinkClick: F,
                    preventVideoPlayback: V,
                    promotedContent: H,
                    unifiedCard: Ie.unified_card,
                  })
                : null)),
            (i = Ie.possibly_sensitive),
            ((null != (o = Ie.quoted_status) &&
              o.possibly_sensitive &&
              Ie.quoted_status &&
              Ie.quoted_status.entities &&
              Ie.quoted_status.entities.media &&
              Ie.quoted_status.entities.media.length > 0 &&
              he &&
              !K) ||
              (i && !l.a.isPollCard(null === (n = Ie.card) || void 0 === n ? void 0 : n.name))) &&
            t
              ? r.a.createElement(_.a, { revealableTombstoneConfig: _.a.sensitiveMediaTombstoneConfig }, t)
              : t)
        return Me || Be || je
          ? r.a.createElement(
              S.a,
              { accessibilityLabelledBy: [Se, Ee], nativeID: j, ref: ke },
              Me,
              Fe,
              je,
              Be ? r.a.createElement(S.a, { style: N.gap }, Be) : null,
            )
          : null
      }
      var N = g.a.create(function (e) {
        return {
          gap: { marginTop: e.spaces.space12 },
          mediaPivotGap: { marginTop: e.spaces.space4 },
          explicitlySized: { alignSelf: 'flex-start' },
          negativeMargin: { marginRight: -e.spacesPx.space16, marginLeft: -e.spacesPx.space16 },
          centerItems: { alignItems: 'center' },
        }
      })
      function D(e) {
        var t,
          n = e.children,
          i = e.config,
          a = e.nativeID,
          o = (null === (t = i.richRevealText) || void 0 === t ? void 0 : t.text) || i.revealText,
          s = i.richText
            ? r.a.createElement(b.a, {
                align: 'Center' === i.richText.alignment ? 'center' : void 0,
                dir: i.richText.rtl ? 'rtl' : 'ltr',
                entities: i.richText.entities,
                text: i.richText.text,
              })
            : i.text
        return r.a.createElement(
          S.a,
          { accessibilityLabel: m.a.c9d7235d, nativeID: a },
          o ? r.a.createElement(C.a, { label: s, revealLabel: o }, n) : r.a.createElement(y.a, null, s),
        )
      }
    },
    '6s7X': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              r.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              r.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '7zxR': function (e, t, n) {
      'use strict'
      var i,
        a = 0.1,
        o = 'function' == typeof Float32Array
      function r(e, t) {
        return 1 - 3 * t + 3 * e
      }
      function s(e, t) {
        return 3 * t - 6 * e
      }
      function c(e) {
        return 3 * e
      }
      function l(e, t, n) {
        return ((r(t, n) * e + s(t, n)) * e + c(t)) * e
      }
      function u(e, t, n) {
        return 3 * r(t, n) * e * e + 2 * s(t, n) * e + c(t)
      }
      function d(e, t, n, i) {
        if (!(e >= 0 && e <= 1 && n >= 0 && n <= 1)) throw new Error('bezier x values must be in [0, 1] range')
        var r = o ? new Float32Array(11) : new Array(11)
        if (e !== t || n !== i) for (var s = 0; s < 11; ++s) r[s] = l(s * a, e, n)
        function c(t) {
          for (var i = 0, o = 1; 10 !== o && r[o] <= t; ++o) i += a
          --o
          var s = i + ((t - r[o]) / (r[o + 1] - r[o])) * a,
            c = u(s, e, n)
          return c >= 0.001
            ? (function (e, t, n, i) {
                for (var a = t, o = 0; o < 4; ++o) {
                  var r = u(a, n, i)
                  if (0 === r) return a
                  a -= (l(a, n, i) - e) / r
                }
                return a
              })(t, s, e, n)
            : 0 === c
            ? s
            : (function (e, t, n, i, a) {
                var o,
                  r,
                  s = 0,
                  c = t,
                  u = n
                do {
                  ;(o = l((r = c + (u - c) / 2), i, a) - e) > 0 ? (u = r) : (c = r)
                } while (Math.abs(o) > 1e-7 && ++s < 10)
                return r
              })(t, i, i + a, e, n)
        }
        return function (a) {
          return e === t && n === i ? a : 0 === a ? 0 : 1 === a ? 1 : l(c(a), t, i)
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
    '9B+1': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var i = n('PbbS'),
        a = function (e) {
          return { topicId: e.topicId, functionalityType: e.functionalityType }
        },
        o = function (e) {
          return e === i.a.Star
            ? i.a.Star
            : e === i.a.Favorite
            ? i.a.Favorite
            : e === i.a.Interested
            ? i.a.Interested
            : i.a.Default
        }
    },
    '9Ulv': function (e, t, n) {
      'use strict'
      var i = n('FGdj'),
        a = n('BR0S'),
        o = n('M6BN')
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var s = n('XJEr').a.API
      var c = (function (e) {
        var t, n
        function a(t) {
          var n
          if (((n = e.call(this) || this), 'number' != typeof t))
            throw new Error('AnimatedValue: Attempting to set value to undefined')
          return (n._startingValue = n._value = t), (n._offset = 0), (n._animation = null), n
        }
        ;(n = e), ((t = a).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), r(t, n)
        var c = a.prototype
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
            e.__isInteraction && (i = o.a.createInteractionHandle())
            var a = this._animation
            this._animation && this._animation.stop(),
              (this._animation = e),
              e.start(
                this._value,
                function (e) {
                  n._updateValue(e, !0)
                },
                function (e) {
                  ;(n._animation = null), null !== i && o.a.clearInteractionHandle(i), t && t(e)
                },
                a,
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
            var i, a
            ;(this._value = t),
              n &&
                ((i = this),
                (a = new Set()),
                (function e(t) {
                  'function' == typeof t.update ? a.add(t) : t.__getChildren().forEach(e)
                })(i),
                a.forEach(function (e) {
                  return e.update()
                })),
              e.prototype.__callListeners.call(this, this.__getValue())
          }),
          (c.__getNativeConfig = function () {
            return { type: 'value', value: this._value, offset: this._offset }
          }),
          a
        )
      })(a.a)
      t.a = c
    },
    AOWc: function (e, t, n) {
      'use strict'
      n('ho0z'), n('849X'), n('TJCb')
      function i(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(i.prototype = Object.create(Error.prototype)), (i.prototype.constructor = i)
      t.a = function (e, t) {
        if (!e) throw new i(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
      }
    },
    BLtI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ln
      })
      var i = n('ddV6'),
        a = n.n(i),
        o = n('97Jx'),
        r = n.n(o),
        s = n('yiKp'),
        c = n.n(s),
        l = n('VrFO'),
        u = n.n(l),
        d = n('Y9Ll'),
        p = n.n(d),
        m = n('1Pcy'),
        h = n.n(m),
        f = n('5Yy7'),
        v = n.n(f),
        _ = n('2VqO'),
        b = n.n(_),
        g = n('KEM+'),
        w = n.n(g),
        y =
          (n('2G9S'),
          n('KqXw'),
          n('WNMA'),
          n('hBvt'),
          n('ho0z'),
          n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('849X'),
          n('5BYb'),
          n('uFXj'),
          n('ERkP')),
        C = n.n(y),
        k = n('rcen'),
        T = n('Rp9C'),
        E = n('MWbm'),
        S = n('Irs7'),
        I = n('htQn'),
        x = n('t62R'),
        A = n('OOKO'),
        O = n('/yvb'),
        P = n('rHpw'),
        L = n('v6aA'),
        R = n('Lsrn'),
        N = n('k/Ka'),
        D = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(N.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M20.937 3.223c-.403-.263-.948-.375-1.48-.195-.726.247-1.906.534-3.457.534-1.38 0-2.286-.225-3.273-.472l-.01-.003c-1.01-.252-2.1-.525-3.717-.525-1.67 0-3.235.484-4.357.946-.16.066-.312.132-.455.197V2.75c0-.518-.42-.938-.938-.938s-.937.42-.937.938v18.5c0 .518.42.938.938.938s.94-.42.94-.938v-2.457c.28-.15.682-.35 1.168-.55 1.002-.414 2.312-.806 3.642-.806 1.38 0 2.286.225 3.273.472l.01.002c1.01.253 2.102.525 3.717.525 2.4 0 4.075-.6 4.804-.922.58-.257.883-.823.883-1.378V4.577c0-.612-.343-1.088-.75-1.354zm-3.28 8.717c-.465.226-1.026.03-1.25-.435-.71-1.462-2.598-1.42-3.234.113l-.307.74c-.145.35-.487.58-.866.58-.38 0-.72-.23-.866-.58l-.308-.74c-.636-1.532-2.525-1.576-3.233-.113-.226.466-.786.66-1.252.435-.465-.226-.66-.786-.434-1.252C7.16 8.1 10.392 7.905 12 9.94c1.608-2.035 4.84-1.84 6.094.748.225.466.03 1.026-.436 1.252z',
              }),
            ),
          )
        }
      D.metadata = { width: 24, height: 24 }
      var M = D,
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(N.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M3.25 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v1.247C5.144 3.453 7.007 2.75 9 2.75c1.592 0 2.655.266 3.682.522.982.246 1.91.478 3.318.478 1.687 0 2.945-.332 3.704-.61.41-.15.87-.086 1.235.168.35.244.56.64.56 1.054V16.21c0 .474-.272.905-.694 1.1-.62.284-2.325.94-4.806.94-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433v2.567c0 .414-.336.75-.75.75zM4 5.683v11.314c1.144-.544 3.007-1.247 5-1.247 1.592 0 2.655.266 3.682.522.982.245 1.91.478 3.318.478 1.975 0 3.36-.458 4-.725v-11.4c-.887.302-2.246.625-4 .625-1.593 0-2.654-.266-3.682-.522-.983-.246-1.91-.478-3.318-.478-2.147 0-4.203.996-5 1.433z',
              }),
              C.a.createElement('path', {
                d: 'M17.925 10.77c-1.23-2.543-4.46-2.65-5.925-.496-1.465-2.153-4.695-2.047-5.925.495-.18.372-.025.82.348 1 .373.182.82.026 1.002-.347.78-1.61 2.878-1.556 3.575.123l.308.74c.116.28.39.464.693.464s.578-.182.694-.463l.306-.74c.697-1.68 2.795-1.734 3.575-.124.18.373.63.53 1.002.348.373-.18.53-.628.348-1z',
              }),
            ),
          )
        }
      j.metadata = { width: 24, height: 24 }
      var F = j,
        B = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(N.a)(
            'svg',
            c()(
              c()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [R.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            C.a.createElement(
              'g',
              null,
              C.a.createElement('path', {
                d: 'M17.296 2.642c-2.068-1.17-4.464-1.62-6.816-1.283C8.13 1.692 5.956 2.8 4.3 4.5c-1.658 1.707-2.704 3.91-2.976 6.27-.27 2.357.245 4.738 1.468 6.77.005.01.008.02.01.03 0 .01-.002.017-.004.025L1.12 21.2c-.11.232-.145.49-.103.742.043.254.162.488.343.67.18.184.412.307.665.353.253.047.514.014.747-.094l3.63-1.67h.01l.01.01.01.005c1.68 1.01 3.606 1.542 5.567 1.537 2.373 0 4.68-.783 6.562-2.232 1.882-1.45 3.23-3.482 3.836-5.778.604-2.298.432-4.73-.49-6.92-.925-2.188-2.548-4.01-4.614-5.178zM12 7.25c-2.623 0-4.75 2.127-4.75 4.75s2.127 4.75 4.75 4.75 4.75-2.127 4.75-4.75S14.623 7.25 12 7.25zM5.75 12c0-3.452 2.798-6.25 6.25-6.25s6.25 2.798 6.25 6.25-2.798 6.25-6.25 6.25S5.75 15.452 5.75 12zm5.5-2.5c0-.414.336-.75.75-.75 1.794 0 3.25 1.455 3.25 3.25 0 .413-.337.75-.75.75-.415 0-.75-.337-.75-.75 0-.967-.784-1.75-1.75-1.75-.414 0-.75-.336-.75-.75z',
              }),
            ),
          )
        }
      B.metadata = { width: 24, height: 24 }
      var U = B,
        V = n('7Mjr'),
        H = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(h()(e), '_scribeAction', function (t) {
                var n = e.props,
                  i = n.analytics,
                  a = n.destinationUrl,
                  o = n.note
                i.scribe({ action: t, data: { items: [T.a.getBirdwatchItem(null == o ? void 0 : o.rest_id, a)] } })
              }),
              w()(h()(e), '_handlePivotClick', function () {
                e._scribeAction('click')
              }),
              w()(h()(e), '_getBirdwatchIcon', function (e) {
                switch (e) {
                  case 'BirdwatchFlagFill':
                    return C.a.createElement(M, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag' })
                  case 'BirdwatchFlagStroke':
                    return C.a.createElement(F, { style: z.birdwatchIcon, testID: 'icon-birdwatch-flag-stroke' })
                  default:
                    return C.a.createElement(U, { style: z.birdwatchIcon, testID: 'icon-birdwatch-fill' })
                }
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToAction,
                    n = e.destinationUrl,
                    i = e.footer,
                    a = e.iconType,
                    o = e.subtitle,
                    r = e.title,
                    s = '#' === n ? void 0 : { pathname: n, anchorless: !0 },
                    c = s ? this._handlePivotClick : void 0,
                    l = (null == t ? void 0 : t.destinationUrl) || '#',
                    u = '#' === l ? void 0 : l
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    C.a.createElement(
                      I.a,
                      {
                        link: s,
                        onPress: c,
                        style: z.pivotContainer,
                        testID: 'birdwatch-pivot',
                        withInteractiveStyling: !!s,
                      },
                      C.a.createElement(
                        E.a,
                        { style: z.headerContainer },
                        C.a.createElement(
                          E.a,
                          { style: z.headerTextAndThumbnailContainer },
                          this._getBirdwatchIcon(a),
                          C.a.createElement(x.b, { size: 'subtext1', style: z.birdwatchLabel, weight: 'bold' }, r),
                        ),
                        t ? null : C.a.createElement(V.a, { style: z.icon, testID: 'icon-arrow-right' }),
                      ),
                      o
                        ? C.a.createElement(k.a, {
                            entities: o.entities,
                            size: 'body',
                            style: z.subtitle,
                            text: o.text,
                          })
                        : null,
                      t
                        ? C.a.createElement(
                            C.a.Fragment,
                            null,
                            C.a.createElement(A.a, { spacing: 'space2' }),
                            C.a.createElement(
                              E.a,
                              { style: z.callToActionContainer },
                              C.a.createElement(x.b, { size: 'subtext1' }, t.prompt),
                              C.a.createElement(
                                O.a,
                                { link: u, onPress: this._handlePivotClick, size: 'small', type: 'primaryOutlined' },
                                t.title,
                              ),
                            ),
                          )
                        : null,
                    ),
                    i
                      ? C.a.createElement(k.a, {
                          color: 'gray700',
                          entities: i.entities,
                          size: 'subtext2',
                          style: z.footer,
                          text: i.text,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      w()(H, 'contextType', L.a)
      var z = P.a.create(function (e) {
          return {
            birdwatchLabel: { display: 'flex', alignItems: 'center' },
            footer: { paddingVertical: e.spaces.space12 },
            pivotContainer: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              marginTop: e.spaces.space12,
              overflow: 'hidden',
            },
            headerContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              backgroundColor: e.colors.hoverBlack,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            headerTextAndThumbnailContainer: { flexDirection: 'row', width: '80%' },
            callToActionContainer: {
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space12,
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
            },
            icon: { color: e.colors.text, paddingLeft: e.spaces.space12, flexShrink: 0 },
            birdwatchIcon: { marginRight: e.spacesPx.space4, padding: e.spacesPx.space2, color: e.colors.primary },
            thumbnail: { color: e.colors.whiteOnColor },
            subtitle: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12 },
          }
        }),
        W = Object(S.a)(H, { element: 'birdwatch_pivot' }),
        q = n('6/RC'),
        K = n('3XMw'),
        Q = n.n(K),
        X = n('5S/X'),
        G = n('Ey+e'),
        J = n('caTy'),
        Y = n('Y6L+'),
        Z = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        $ = Object(Z.a)({
          loader: function () {
            return n.e(183).then(n.bind(null, 'mL9d'))
          },
        }),
        ee = n('m3Bd'),
        te = n.n(ee),
        ne = n('xM7j'),
        ie = n('LKCq'),
        ae = ['onActionClick'],
        oe = 'inner_tombstone'
      function re(e) {
        var t,
          n = e.children,
          i = e.config,
          a = e.nativeID,
          o = Object(S.b)()
        if (X.b) return n
        var s = (null === (t = i.richRevealText) || void 0 === t ? void 0 : t.text) || i.revealText,
          c = i.richText
            ? C.a.createElement(k.a, {
                alignment: i.richText.alignment,
                entities: i.richText.entities,
                onEntityClick: function () {
                  o.scribe({ action: 'open_link', component: oe })
                },
                rtl: i.richText.rtl,
                text: i.richText.text,
              })
            : i.text
        return C.a.createElement(
          E.a,
          { nativeID: a },
          s
            ? C.a.createElement(
                ie.a,
                {
                  label: c,
                  onReveal: function () {
                    o.scribe({ action: 'click', component: oe })
                  },
                  render: function (e) {
                    var t = e.onActionClick,
                      n = te()(e, ae)
                    return C.a.createElement(ne.a, r()({}, n, { inline: !0, onClick: t }))
                  },
                  revealLabel: s,
                },
                n,
              )
            : C.a.createElement(ne.a, { inline: !0 }, c),
        )
      }
      var se = n('PeW/'),
        ce = n('3IPs'),
        le = (n('1t7P'), n('jQ/y'), n('PbbS')),
        ue = n('LWCC'),
        de = n('JUsM'),
        pe = P.a.create(function (e) {
          return { topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) } }
        }),
        me = function (e) {
          var t = e.defaultRef,
            n = e.topic,
            i = e.topicFollowPrompt,
            a = (null == i ? void 0 : i.description) || {},
            o = a.entities,
            r = a.text
          return C.a.createElement(
            E.a,
            { style: pe.topicFollowPrompt },
            C.a.createElement(de.a, {
              containerRef: t,
              primaryAction: C.a.createElement(ue.a, {
                showRelationshipChangeConfirmation: !0,
                textMode: le.a.FollowTopic,
                topic: n,
              }),
              text: C.a.createElement(k.a, { entities: o, text: r }),
            }),
          )
        },
        he = n('SrIh'),
        fe = n('gdQ4'),
        ve = n('qbku'),
        _e = n('tocL'),
        be = 'analyticsButton',
        ge = 'promotedIndicator',
        we = 'socialContext',
        ye = 'tweet',
        Ce = n('X04g'),
        ke = n('v/3V'),
        Te = (n('Ysgh'), n('jwue'), n('+oxZ'), n('RqPI')),
        Ee = n('3zvM'),
        Se = n('lMB6'),
        Ie = n('iChn'),
        xe = Object(Ee.e)({
          namespace: 'translationsTweets',
          fetchOneContext: 'FETCH_TWEET_TRANSLATION',
          fetchOneEndpoint: function (e) {
            return function (t, n) {
              return e.Tweets.fetchTranslation(t, n).then(Ae)
            }
          },
          fetchOneParams: function (e) {
            return { id: e }
          },
        }),
        Ae = function (e) {
          var t = Array.isArray(e) ? e : [e]
          return {
            entities: {
              translationsTweets: Object(Ie.a)(t, function (e) {
                return e.id_str
              }),
            },
          }
        },
        Oe = Se.a.register(xe),
        Pe = n('rxPX'),
        Le = n('0KEI'),
        Re = function (e, t) {
          return Oe.select(e, t.tweetId)
        },
        Ne = function (e, t) {
          return Oe.selectFetchStatus(e, t.tweetId)
        },
        De = Object(Pe.a)()
          .propsFromState(function () {
            return { translation: Re, translationFetchStatus: Ne, userLanguage: Te.o }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Le.createLocalApiErrorHandlerWithContextFactory)('TRANSLATE_TWEET'),
              fetchTranslation: Oe.fetchOneIfNeeded,
            }
          }),
        Me = n('PdwO'),
        je = n('cTG8'),
        Fe = n('oQhu'),
        Be = n('YeIG'),
        Ue = n('Gpeq'),
        Ve = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'enrichments',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'weight',
          'withOriginalText',
        ],
        He = [
          'createLocalApiErrorHandler',
          'disableTranslation',
          'fetchTranslation',
          'header',
          'onMediaTranslation',
          'style',
          'supplementalLang',
          'translation',
          'translationFetchStatus',
          'tweetId',
          'userLanguage',
          'withOriginalText',
        ],
        ze = Q.a.b4947556,
        We = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(h()(e), '_fetchTranslation', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchTranslation)(t.tweetId).catch(n())
              }),
              w()(h()(e), '_shouldDisableTranslation', function () {
                var t = e.props,
                  n = t.disableTranslation,
                  i = t.displayTextRange,
                  a = t.entities,
                  o = t.lang,
                  r = t.supplementalLang,
                  s = t.text,
                  c = t.userLanguage
                return e._getMemoizedDisableTranslation(n, i, a, s, o, r, c)
              }),
              w()(h()(e), '_renderTranslation', function () {
                var t = e.props,
                  n =
                    (t.createLocalApiErrorHandler,
                    t.disableTranslation,
                    t.enrichments,
                    t.fetchTranslation,
                    t.header,
                    t.onMediaTranslation,
                    t.style,
                    t.supplementalLang,
                    t.translation),
                  i = (t.translationFetchStatus, t.tweetId, t.userLanguage, t.weight, t.withOriginalText, te()(t, Ve))
                if (n)
                  return C.a.createElement(
                    je.a,
                    r()({}, i, {
                      displayTextRange: e._getMemoizedDisplayTextRange(n.text),
                      entities: n.entities,
                      lang: n.destinationLanguage,
                      text: n.text,
                    }),
                  )
              }),
              w()(
                h()(e),
                '_getMemoizedDisplayTextRange',
                Object(Fe.a)(function (e) {
                  return [0, e.length]
                }),
              ),
              w()(
                h()(e),
                '_getMemoizedDisableTranslation',
                Object(Fe.a)(function (e, t, n, i, a, o, r) {
                  var s = r && Object(Ue.c)(a.split('-')[0]) !== Object(Ue.c)(r.split('-')[0])
                  return e || !!o || !s || !Object(Ue.b)({ displayTextRange: t, entities: n, text: i, language: a })
                }),
              ),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.onMediaTranslation,
                    i = t.translation
                  if (e.translation !== i && i) {
                    var a,
                      o = this.context.featureSwitches,
                      r = {}
                    ;((null == i || null === (a = i.entities) || void 0 === a ? void 0 : a.media) || []).forEach(
                      function (e) {
                        e.alt_text && (r[e.id_str] = e.alt_text)
                      },
                    ),
                      n && !Object(Be.a)(r) && o.isTrue('responsive_web_alt_text_translations_enabled') && n(r)
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = (e.createLocalApiErrorHandler, e.disableTranslation, e.fetchTranslation, e.header),
                    n = (e.onMediaTranslation, e.style),
                    i = (e.supplementalLang, e.translation),
                    a = e.translationFetchStatus,
                    o = e.tweetId,
                    r = (e.userLanguage, e.withOriginalText),
                    s = te()(e, He)
                  return C.a.createElement(
                    Me.a,
                    {
                      disableTranslation: this._shouldDisableTranslation(),
                      fetchTranslation: this._fetchTranslation,
                      header: t,
                      key: o,
                      originLanguage: i && i.localizedSourceLanguage,
                      style: n,
                      translateButtonText: ze,
                      translatedMessage: this._renderTranslation(),
                      translationFetchStatus: a,
                      withOriginalText: r,
                    },
                    C.a.createElement(je.a, s),
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      w()(We, 'contextType', L.a)
      var qe = De(We),
        Ke = n('2qZs'),
        Qe = n('wwsH'),
        Xe = { viewType: 'birdwatch' },
        Ge = P.a.create(function (e) {
          return { birdwatchIcon: { marginLeft: e.spaces.space12 } }
        }),
        Je = function (e) {
          var t = e.onPress,
            n = e.onShow,
            i = e.tweetId,
            a = { pathname: '/i/birdwatch/t/'.concat(i), external: !0 }
          return (
            C.a.useEffect(
              function () {
                n && n()
              },
              [n],
            ),
            C.a.createElement(Qe.a, {
              Icon: Ke.a,
              accessibilityLabel: 'Birdwatch note',
              activeColor: 'primary',
              behavioralEventContext: Xe,
              link: a,
              onPress: t,
              style: Ge.birdwatchIcon,
            })
          )
        },
        Ye = n('xXop'),
        Ze = n('xrkw'),
        $e = n('mqpi'),
        et = Q.a.g1fa869c,
        tt = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(h()(e), '_shouldDisable', $e.b.bind(null, e.context.featureSwitches)),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.endControl,
                    n = e.loggedInUserId,
                    i = e.onAnalyticsClick,
                    a = e.style,
                    o = e.tweet
                  return !this._shouldDisable(o, $e.a.Analytics) && n === o.user.id_str
                    ? C.a.createElement(
                        E.a,
                        { style: [nt.activityContainerWithChildren, a] },
                        C.a.createElement(
                          I.a,
                          {
                            link: ''.concat(o.permalink, '/analytics'),
                            onPress: i,
                            style: nt.analyticsButton,
                            testID: be,
                          },
                          C.a.createElement(Ze.a, { style: nt.analyticsIcon }),
                          C.a.createElement(x.b, { color: 'gray700' }, et),
                        ),
                        t,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      w()(tt, 'contextType', L.a)
      var nt = P.a.create(function (e) {
          return {
            analyticsIcon: { color: e.colors.gray700, paddingRight: e.spaces.space4 },
            analyticsButton: { paddingVertical: e.spaces.space16, flexDirection: 'row', flexGrow: 1 },
            activityContainerWithChildren: {
              justifyContent: 'space-between',
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
              alignItems: 'center',
            },
          }
        }),
        it = tt,
        at = n('tmUV'),
        ot = n('YBcl'),
        rt = n('k89r'),
        st = function (e) {
          var t = Object(rt.a)()
          return C.a.createElement(
            ot.a,
            r()({}, e, {
              handleAnchorAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              handleAnchorOpen: function (e) {
                t.scribe({ element: e, action: 'click' })
              },
              handleAnchorSecondaryAction: function () {
                t.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
              handleHeadsUpImpression: function (e, n) {
                t.scribe({ element: 'heads_up_context', action: n, data: { tweet_id: e } })
              },
            }),
          )
        },
        ct = n('uFYP'),
        lt = Q.a.g6237a1e,
        ut = Q.a.d6b5949e,
        dt = function (e) {
          switch (e) {
            case 'paused':
              return ut
            case 'in-progress':
            default:
              return lt
          }
        },
        pt = function (e) {
          var t = e.nativeID,
            n = e.status,
            i = e.style,
            a = 'paused' === n
          return C.a.createElement(
            E.a,
            { style: [mt.root, i] },
            C.a.createElement(ct.a, { style: [mt.icon, a ? mt.withGray700 : null] }),
            C.a.createElement(x.b, { color: a ? 'gray700' : 'normal', nativeID: t, size: 'subtext2' }, dt(n)),
          )
        },
        mt = P.a.create(function (e) {
          return {
            root: { alignItems: 'center', flexDirection: 'row' },
            icon: { color: e.colors.buttonBlack, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
            withGray700: { color: e.colors.gray700 },
          }
        }),
        ht = n('TuTd'),
        ft = function (e, t) {
          return Object(ht.a)(e, t.tweetId)
        },
        vt = Object(Pe.a)()
          .propsFromState(function () {
            return { liveCounts: ft }
          })
          .adjustStateProps(function (e) {
            var t = e.liveCounts
            return {
              liveLikeCount: t && t.likeCount,
              liveQuoteCount: t && t.quoteCount,
              liveRetweetCount: t && t.retweetCount,
            }
          }),
        _t = (n('KOtZ'), n('LW0h'), n('tQbP'), n('z84I'), n('Jkc4')),
        bt = n('855f'),
        gt = n('MtXG'),
        wt = n('de1q'),
        yt = n('cHvH'),
        Ct = Q.a.fd80ffbf,
        kt = P.a.theme.spacesPx.space20,
        Tt = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n(e, i) {
            var a
            return (
              u()(this, n),
              (a = t.call(this, e, i)),
              w()(
                h()(a),
                '_reactionsLegacyHeartEnabled',
                a.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              w()(h()(a), '_renderQuoteTweetTimelinePivot', function () {
                var e = a.props.permalink
                return C.a.createElement(
                  I.a,
                  {
                    link: ''.concat(e, '/retweets/with_comments'),
                    onPress: a._handleQuoteTweetPivotScribeOnClick,
                    style: Et.quoteTweetPivot,
                    withDarkerInteractiveBackground: !1,
                  },
                  C.a.createElement(x.b, { color: 'primary' }, Ct),
                )
              }),
              w()(h()(a), '_updateStateIfChanged', function (e, t) {
                return function (n) {
                  var i = n.nativeEvent.layout.width
                  i !== e() && t(i)
                }
              }),
              w()(
                h()(a),
                '_handleQuoteTweetStatLayout',
                a._updateStateIfChanged(
                  function () {
                    return a.state.quoteTweetLabelWidth
                  },
                  function (e) {
                    return a.setState({ quoteTweetLabelWidth: e })
                  },
                ),
              ),
              w()(
                h()(a),
                '_handleRetweetStatLayout',
                a._updateStateIfChanged(
                  function () {
                    return a.state.retweetLabelWidth
                  },
                  function (e) {
                    return a.setState({ retweetLabelWidth: e })
                  },
                ),
              ),
              w()(
                h()(a),
                '_handleLikeStatLayout',
                a._updateStateIfChanged(
                  function () {
                    return a.state.likeLabelWidth
                  },
                  function (e) {
                    return a.setState({ likeLabelWidth: e })
                  },
                ),
              ),
              w()(
                h()(a),
                '_handleStatGroupLayout',
                a._updateStateIfChanged(
                  function () {
                    return a.state.groupWidth
                  },
                  function (e) {
                    return a.setState({ groupWidth: e })
                  },
                ),
              ),
              w()(h()(a), '_handleRetweetScribeOnClick', function () {
                a.props.analytics.scribe({ element: 'retweet_stat', action: 'click' })
              }),
              w()(h()(a), '_handleQuoteTweetScribeOnClick', function () {
                a.props.analytics.scribe({ element: 'quote_tweet_stat', action: 'click' })
              }),
              w()(h()(a), '_handleQuoteTweetPivotScribeOnClick', function () {
                a.props.analytics.scribe({ element: 'quote_tweet_pivot', action: 'click' })
              }),
              (a.state = {
                retweetLabelWidth: void 0,
                likeLabelWidth: void 0,
                quoteTweetLabelWidth: void 0,
                groupWidth: void 0,
              }),
              a
            )
          }
          return (
            p()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.analytics,
                    n = e.isNonCompliantTweet,
                    i = e.quoteTweetCount
                  n && t.scribe({ element: 'quote_tweet_pivot', action: 'impression' }),
                    i && i > 0 && t.scribe({ element: 'quote_tweet_stat', action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.isNonCompliantTweet ? this._renderQuoteTweetTimelinePivot() : this._renderStats()
                },
              },
              {
                key: '_renderReaction',
                value: function (e) {
                  var t = this,
                    n = this.props.permalink,
                    i = bt.a.getTruncatedCount(e.count),
                    a = { pathname: ''.concat(n, '/reactions'), state: { reactionType: e.type } }
                  return C.a.createElement(
                    E.a,
                    { key: e.type },
                    C.a.createElement(_t.a, null, function (n) {
                      return C.a.createElement(
                        gt.a,
                        { count: e.count, link: a, onPress: n() },
                        C.a.createElement(
                          E.a,
                          { style: Et.reactionStat },
                          C.a.createElement(wt.a, {
                            legacyHeart: t._reactionsLegacyHeartEnabled,
                            reactionType: e.type,
                            style: Et.reaction,
                          }),
                          C.a.createElement(gt.a.Value, { animated: !0, count: e.count, weight: 'normal' }, i),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderReactionsStatsGroup',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.permalink,
                    i = t.reactionCount,
                    a =
                      (i &&
                        i.reduce(function (e, t) {
                          return (t.count || 0) + e
                        }, 0)) ||
                      0
                  if (!a || !i) return null
                  var o = bt.a.getTruncatedCount(a),
                    r = i
                      .sort(function (e, t) {
                        return t.count - e.count
                      })
                      .filter(function (e) {
                        return e.count > 0
                      })
                  return C.a.createElement(yt.a, null, function (t) {
                    var i = t.windowWidth
                    return C.a.createElement(
                      gt.a.Group,
                      { style: [Et.detailItemContainer, Et.detailItem] },
                      i > P.a.theme.breakpoints.small
                        ? C.a.createElement(
                            E.a,
                            null,
                            C.a.createElement(_t.a, null, function (e) {
                              return C.a.createElement(
                                gt.a,
                                { count: a, link: ''.concat(n, '/reactions'), onPress: e() },
                                C.a.createElement(
                                  Q.a.I18NFormatMessage,
                                  { $i18n: 'd01be6d8' },
                                  C.a.createElement(
                                    gt.a.Value,
                                    { animated: !0, count: a },
                                    Q.a.b4a4e4aa({ displayCountAll: o }),
                                  ),
                                  C.a.createElement(gt.a.Label, null, Q.a.ifa70ada({ count: a })),
                                ),
                              )
                            }),
                          )
                        : null,
                      r.map(function (t) {
                        return e._renderReaction(t)
                      }),
                    )
                  })
                },
              },
              {
                key: '_renderLikesStat',
                value: function (e) {
                  var t = bt.a.getTruncatedCount(e),
                    n = this.props.permalink
                  return C.a.createElement(
                    E.a,
                    { onLayout: this._handleLikeStatLayout },
                    C.a.createElement(_t.a, null, function (i) {
                      return C.a.createElement(
                        gt.a,
                        { count: e, link: ''.concat(n, '/likes'), onPress: i() },
                        C.a.createElement(
                          Q.a.I18NFormatMessage,
                          { $i18n: 'e4eeeefe' },
                          C.a.createElement(gt.a.Value, { animated: !0, count: e }, Q.a.ha054943({ displayCount: t })),
                          C.a.createElement(gt.a.Label, null, Q.a.d260af55({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderRetweetsStat',
                value: function (e) {
                  var t = this,
                    n = bt.a.getTruncatedCount(e),
                    i = this.props.permalink
                  return C.a.createElement(
                    E.a,
                    { onLayout: this._handleRetweetStatLayout },
                    C.a.createElement(_t.a, null, function (a) {
                      return C.a.createElement(
                        gt.a,
                        { count: e, link: ''.concat(i, '/retweets'), onPress: a(t._handleRetweetScribeOnClick) },
                        C.a.createElement(
                          Q.a.I18NFormatMessage,
                          { $i18n: 'b07c7c02' },
                          C.a.createElement(gt.a.Value, { animated: !0, count: e }, Q.a.j142cb3f({ displayCount: n })),
                          C.a.createElement(gt.a.Label, null, Q.a.e59a4e90({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderQuoteTweetsStat',
                value: function (e) {
                  var t = this,
                    n = bt.a.getTruncatedCount(e),
                    i = this.props.permalink
                  return C.a.createElement(
                    E.a,
                    { onLayout: this._handleQuoteTweetStatLayout },
                    C.a.createElement(_t.a, null, function (a) {
                      return C.a.createElement(
                        gt.a,
                        {
                          count: e,
                          link: ''.concat(i, '/retweets/with_comments'),
                          onPress: a(t._handleQuoteTweetScribeOnClick),
                        },
                        C.a.createElement(
                          Q.a.I18NFormatMessage,
                          { $i18n: 'f0259953' },
                          C.a.createElement(gt.a.Value, { animated: !0, count: e }, Q.a.f6e12705({ displayCount: n })),
                          C.a.createElement(gt.a.Label, null, Q.a.e2414184({ count: e })),
                        ),
                      )
                    }),
                  )
                },
              },
              {
                key: '_renderStats',
                value: function () {
                  var e = this.props,
                    t = e.containerStyle,
                    n = e.likeCount,
                    i = e.quoteTweetCount,
                    a = e.reactionCount,
                    o = e.retweetCount,
                    r = e.style,
                    s = e.withReactions,
                    c = this.state,
                    l = c.groupWidth,
                    u = c.likeLabelWidth,
                    d = c.quoteTweetLabelWidth,
                    p = c.retweetLabelWidth,
                    m = p && d && u && l && p + kt + (s ? 0 : u + kt) + d > l,
                    h = l,
                    f = s ? void 0 : n
                  return o || f || i || a
                    ? C.a.createElement(
                        E.a,
                        { onLayout: this._handleStatGroupLayout, style: h ? t : Et.hidden },
                        s ? this._renderReactionsStatsGroup() : null,
                        o || f || i
                          ? C.a.createElement(
                              gt.a.Group,
                              { style: [Et.detailItemContainer, Et.detailItem, Et.noWrap, r] },
                              o ? this._renderRetweetsStat(o) : null,
                              i ? this._renderQuoteTweetsStat(i) : null,
                              f && !m ? this._renderLikesStat(f) : null,
                            )
                          : null,
                        m && f
                          ? C.a.createElement(
                              gt.a.Group,
                              { style: [Et.detailItemContainer, Et.detailItem, r] },
                              this._renderLikesStat(f),
                            )
                          : null,
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(C.a.PureComponent)
      w()(Tt, 'contextType', L.a)
      var Et = P.a.create(function (e) {
          return {
            detailItem: { paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space16 },
            detailItemContainer: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              flexDirection: 'row',
            },
            hidden: { visibility: 'hidden' },
            noWrap: { flexWrap: 'nowrap' },
            quoteTweetPivot: {
              borderTopColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space16,
            },
            reaction: { width: '1.2em', height: '1.2em', marginRight: '0.5em' },
            reactionStat: { flexDirection: 'row', alignItems: 'center', display: 'inline-flex' },
          }
        }),
        St = Object(S.a)(Tt)
      var It = vt(function (e) {
          var t = e.containerStyle,
            n = e.isNonCompliantTweet,
            i = e.liveLikeCount,
            a = e.liveQuoteCount,
            o = e.liveRetweetCount,
            r = e.tweetLikeCount,
            s = e.tweetPermalink,
            c = e.tweetQuoteTweetCount,
            l = e.tweetReactionCount,
            u = e.tweetRetweetCount,
            d = e.withReactions
          return C.a.createElement(St, {
            containerStyle: t,
            isNonCompliantTweet: n,
            likeCount: i || r,
            permalink: s,
            quoteTweetCount: a || c,
            reactionCount: l,
            retweetCount: o || u,
            withReactions: d,
          })
        }),
        xt = n('avOP'),
        At = function (e) {
          var t = e.children
          return X.b ? C.a.createElement(xt.a, { itemProp: 'articleBody' }, t) : t
        },
        Ot = n('hqKg'),
        Pt = n('B/Qy'),
        Lt = n('M0jS'),
        Rt = function (e, t) {
          return Lt.b.select(e, t.userId)
        },
        Nt = Object(Pe.a)().propsFromState(function () {
          return {
            userSpace: Object(Ot.createSelector)(Rt, function (e) {
              var t = e ? e.spaces : void 0
              return t
                ? {
                    presenceRingType: 'space',
                    link: {
                      pathname: Object(Pt.a)(t.live_content.audiospace.broadcast_id),
                      state: { origin: 'audiospace_ring' },
                    },
                  }
                : void 0
            }),
          }
        }),
        Dt = n('Sksh'),
        Mt = n('1I0O'),
        jt = n('jhWN'),
        Ft = function (e) {
          var t = e.avatarRef,
            n = e.imageLayoutCache,
            i = e.nativeID,
            a = e.onClick,
            o = e.onHoverCardScreenNameClick,
            s = e.promotedContent,
            c = e.screenName,
            l = e.size,
            u = e.style,
            d = e.uri,
            p = e.userId,
            m = e.userSpace,
            h = e.withHoverCard,
            f = e.withLink
          return (
            C.a.useEffect(
              function () {
                return (
                  Dt.a.registerUserInApp(p),
                  function () {
                    Dt.a.deregisterUserInApp(p)
                  }
                )
              },
              [p],
            ),
            m
              ? C.a.createElement(
                  Mt.a,
                  r()(
                    {
                      avatarRef: t,
                      imageLayoutCache: n,
                      nativeID: i,
                      onClick: a,
                      onHoverCardScreenNameClick: o,
                      promotedContent: s,
                      screenName: c,
                      size: l,
                      style: u,
                      uri: d,
                      withHoverCard: h,
                      withLink: f,
                    },
                    m,
                  ),
                )
              : C.a.createElement(jt.a, {
                  avatarRef: t,
                  imageLayoutCache: n,
                  nativeID: i,
                  onClick: a,
                  onHoverCardScreenNameClick: o,
                  promotedContent: s,
                  screenName: c,
                  size: l,
                  style: u,
                  uri: d,
                  withHoverCard: h,
                  withLink: f,
                })
          )
        },
        Bt = Nt(C.a.memo(Ft)),
        Ut = n('FGLp'),
        Vt = n('TIdA'),
        Ht = n('DNho'),
        zt = Vt.a.createLayoutCache(),
        Wt = P.a.create(function (e) {
          return { avatar: { display: 'block' }, avatarWrapper: { flexShrink: 1, flexGrow: 0, width: '100%' } }
        }),
        qt = function (e) {
          var t = Object(S.b)(),
            n = C.a.useContext(L.a).featureSwitches,
            i = e.avatarRef,
            a = e.nativeID,
            o = e.onClick,
            r = e.onHoverCardScreenNameClick,
            s = e.promotedContent,
            c = e.screenName,
            l = e.uri,
            u = e.userId,
            d = e.withHoverCard,
            p = void 0 === d || d,
            m = e.withLink,
            h = void 0 === m || m,
            f = e.withNftAvatar,
            v = e.withUserPresence,
            _ = void 0 !== v && v
          return (
            Object(Ut.a)(function () {
              f && n.isTrue('responsive_web_nft_avatar') && t.scribe({ element: 'nft_avatar', action: 'impression' })
            }),
            C.a.createElement(
              E.a,
              { style: Wt.avatarWrapper },
              C.a.createElement(Ht.a.Consumer, null, function (e) {
                var t = e.avatarSize
                return _
                  ? C.a.createElement(Bt, {
                      avatarRef: i,
                      imageLayoutCache: zt,
                      nativeID: a,
                      onClick: o,
                      onHoverCardScreenNameClick: r,
                      promotedContent: s,
                      screenName: c,
                      size: t,
                      style: Wt.avatar,
                      uri: l,
                      userId: u,
                      withHoverCard: p,
                      withLink: h,
                    })
                  : C.a.createElement(jt.a, {
                      avatarRef: i,
                      imageLayoutCache: zt,
                      nativeID: a,
                      onClick: o,
                      onHoverCardScreenNameClick: r,
                      promotedContent: s,
                      screenName: c,
                      size: t,
                      style: Wt.avatar,
                      uri: l,
                      withHoverCard: p,
                      withLink: h,
                    })
              }),
            )
          )
        },
        Kt = n('aITJ'),
        Qt = n('E0cF'),
        Xt = n('Z6aJ'),
        Gt = n('dCqJ'),
        Jt = n('Olb6'),
        Yt = n('nBUg'),
        Zt = n('r7g+'),
        $t = n('PbQQ'),
        en = n('e5HP'),
        tn = n('JWUO'),
        nn = n('9VO7'),
        an = n('GBcw'),
        on = n('jV+4'),
        rn = n('ir4X'),
        sn = n('aA1u'),
        cn = n('kY28'),
        ln = n('6nXH')
      function un(e, t, n) {
        var i,
          a = Qt.a.getOriginalTweet(e),
          o = null == a || null === (i = a.entities) || void 0 === i ? void 0 : i.hashtags
        if (Array.isArray(o) && !(o.length < 1)) {
          var r = o[0]
          return n &&
            (function (e) {
              var t = Qt.a.getOriginalTweet(e),
                n = t.extended_entities && t.extended_entities.media
              return (
                !!(n && n.length > 0) &&
                n.some(function (e) {
                  return 'animated_gif' === e.type
                })
              )
            })(e) &&
            t.isTrue('responsive_web_hashtag_highlight_is_enabled')
            ? r.text
            : void 0
        }
      }
      function dn(e, t) {
        if (e && t.isTrue('responsive_web_hashtag_highlight_show_avatar')) return e.profile_image_url_https
      }
      n('yH/f')
      var pn = n('9B+1'),
        mn = n('YICZ'),
        hn = n('21zW'),
        fn = n('8bWS'),
        vn = Q.a.gf5e9ea6,
        _n = Q.a.e2f2b658,
        bn = Object.freeze({
          see_more: Q.a.ffd9cfe6,
          discover_more: Q.a.d172116a,
          more: Q.a.h63a5c3b,
          more_tweets: Q.a.iac074c3,
          more_suggestions: Q.a.g11ebd34,
          browse: Q.a.g4a69019,
          browse_tweets: Q.a.b1abb17d,
        })
      var gn = function (e) {
          var t = e.onUndoTopicNotInterestedClick
          return C.a.createElement(
            E.a,
            { style: Cn.tombstone },
            C.a.createElement(ne.a, { actionText: vn, children: _n, inline: !0, onClick: t }),
          )
        },
        wn = Object(S.a)(function (e) {
          var t = e.analytics,
            n = e.bannerText,
            i = e.label,
            a = e.link,
            o = e.linkText,
            r = e.onNotInterestedPress,
            s = e.topic,
            c = e.withRightControl,
            l = n && '' === n.text,
            u = o && '' === o.text,
            d = !u,
            p = !(l || u)
          return C.a.createElement(
            E.a,
            { style: Cn.topicActions },
            p && C.a.createElement(hn.a, null),
            d &&
              C.a.createElement(
                x.b,
                {
                  color: 'primary',
                  link: a,
                  onClick: function () {
                    t.scribeAction('click')
                  },
                  size: 'subtext2',
                  weight: 'bold',
                },
                o ? C.a.createElement(k.a, o) : i,
              ),
            c
              ? C.a.createElement(
                  E.a,
                  { style: Cn.notInterestedButtonWrapper },
                  C.a.createElement(mn.a, {
                    onPress: r,
                    size: 'small',
                    topicId: s.id,
                    type: 'brandText',
                    withIconOnly: !0,
                  }),
                )
              : null,
          )
        }),
        yn = function (e) {
          var t = e.isExpanded,
            n = e.onNotInterestedPress,
            i = e.topic,
            a = i.following ? Cn.followingTopicButtonWrapper : Cn.followTopicButtonWrapper,
            o = [t && a, !t && Cn.followTopicButtonWrapperNotExpanded],
            r = t ? Cn.largeNotInterestedButtonWrapper : Cn.notInterestedButtonWrapper
          return C.a.createElement(
            E.a,
            { style: Cn.topicActions },
            t ? null : C.a.createElement(hn.a, { style: Cn.topicMiddot }),
            C.a.createElement(
              E.a,
              { style: o },
              C.a.createElement(ue.a, {
                isTransparent: !t,
                showRelationshipChangeConfirmation: !0,
                size: t ? 'small' : 'xSmall',
                style: Cn.followTopicButton,
                textMode: le.a.FollowTopic,
                topic: i,
              }),
            ),
            n || (t && !i.following)
              ? C.a.createElement(
                  E.a,
                  { style: r },
                  C.a.createElement(mn.a, {
                    onPress: n,
                    size: 'small',
                    topicId: i.id,
                    type: t ? 'primaryOutlined' : 'brandText',
                    withIconOnly: !t,
                  }),
                )
              : null,
          )
        }
      var Cn = P.a.create(function (e) {
          return {
            tombstone: { paddingBottom: e.componentDimensions.gutterVertical },
            iconStyle: {
              paddingBottom: 'calc('.concat(e.spaces.space2, ' + ').concat(e.spaces.space1, ')'),
              marginBottom: e.spaces.space4,
            },
            topicActions: { flexDirection: 'row', flexGrow: 1, alignItems: 'center', minHeight: e.spaces.space32 },
            topicMiddot: { alignSelf: 'center', paddingRight: 0 },
            followTopicButton: { marginTop: e.spaces.space1 },
            followTopicButtonWrapperNotExpanded: { marginBottom: e.spaces.space2 },
            followTopicButtonWrapper: { marginVertical: e.spaces.space4, paddingRight: e.spaces.space4, width: '50%' },
            followingTopicButtonWrapper: { marginVertical: e.spaces.space4, width: '100%' },
            notInterestedButtonWrapper: { alignItems: 'flex-end', flexGrow: 1 },
            largeNotInterestedButtonWrapper: {
              marginVertical: e.spaces.space4,
              paddingLeft: e.spaces.space4,
              width: '50%',
            },
          }
        }),
        kn = n('0zXz'),
        Tn = n('fs1G'),
        En = P.a.theme.aspectRatios.maxTimelineImage,
        Sn = P.a.theme.aspectRatios.minTimelineImage,
        In = Q.a.f277e949,
        xn = Q.a.ee79367a,
        An = Q.a.a2a3824a,
        On = Q.a.c14cdb18,
        Pn = Q.a.e8adeec8,
        Ln = (function (e) {
          v()(n, e)
          var t = b()(n)
          function n() {
            var e
            u()(this, n)
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              w()(h()(e), '_defaultInlinePromptRef', C.a.createRef()),
              w()(h()(e), '_iconContainerRef', C.a.createRef()),
              w()(h()(e), 'state', { mediaAltTranslations: {} }),
              w()(h()(e), '_transformPromotedUrl', ke.a.bind(null, e.context.featureSwitches)),
              w()(
                h()(e),
                '_isEdgeToEdgeEnabled',
                e.context.featureSwitches.isTrue('media_edge_to_edge_content_enabled'),
              ),
              w()(h()(e), '_getWithTopLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  i = t.isFocal,
                  a = t.tweet,
                  o = Qt.a.getOriginalTweet(a),
                  r = e._getConversationPosition(),
                  s = e._getIsConversationStart(),
                  c = n && n.ancestorConnector,
                  l = n && n.indents,
                  u = (i && !!o.in_reply_to_status_id_str) || (r && !s)
                return l ? 'top' === c : u
              }),
              w()(h()(e), '_getWithBottomLine', function () {
                var t = e.props,
                  n = t.conversationTreeMetadata,
                  i = t.tweet,
                  a = Qt.a.getOriginalTweet(i),
                  o = e._getConversationPosition(),
                  r = n && n.indents,
                  s = n && n.descendantConnector,
                  c = o && !o.isEnd
                return r
                  ? s
                  : !(
                      !a.in_reply_to_status_id_str &&
                      'ancestor' !== (null == o ? void 0 : o.position) &&
                      e._isEdgeToEdgeEnabled
                    ) && c
              }),
              w()(h()(e), '_getFeatureConfigurationContextProviderValue', function () {
                var t = e.props,
                  n = t.onMediaHashtagHighlightClick,
                  i = t.promotedContent,
                  a = t.promotedContentAdvertiser,
                  o = t.tweet,
                  r = e.context.featureSwitches,
                  s = {
                    highlightedHashtag: function () {
                      return un(o, r, Xt.a.isPromoted(i))
                    },
                    avatarURIForHashtagHighlight: function () {
                      return dn(a, r)
                    },
                    shouldUseSmallFontForHashtagHighlight: function () {
                      return r.isTrue('responsive_web_hashtag_highlight_use_small_font')
                    },
                    onMediaHashtagHighlightClick: n,
                  },
                  l = {
                    c9sEnabled: function () {
                      return r.isTrue('c9s_enabled')
                    },
                    trustedFriendsEnabled: function () {
                      return r.isTrue('trusted_friends_consumption_enabled')
                    },
                  }
                return c()(
                  c()(c()({}, s), l),
                  {},
                  {
                    edgeToEdgeEnabled: function () {
                      return r.isTrue('media_edge_to_edge_content_enabled')
                    },
                    headsUpVariant: function () {
                      return r.getStringValue('conversational_safety_heads_up_treatment_A_enabled')
                    },
                    misinfoLabelRevampTweaksEnabled: function () {
                      return r.isTrue('responsive_web_misinfo_label_revamp_tweaks_enabled')
                    },
                    sensitiveMediaWarningsEnabled: function () {
                      return r.isTrue('sensitive_tweet_warnings_enabled')
                    },
                    tweetRendersPromotedContentBadgeBelowHeader: function () {
                      return r.isTrue('responsive_web_promoted_badge_below_header')
                    },
                    socialContextRefreshEnabled: function () {
                      return e.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                    },
                  },
                )
              }),
              w()(h()(e), '_renderPromotedDetails', function (t) {
                var n = e.props,
                  i = n.onPoliticalSponsorWebsiteClick,
                  a = n.onPromotedDisclaimerLearnMoreClick,
                  o = n.onPromotedIndicatorClick,
                  r = n.promotedContent,
                  s = n.promotedContentAdvertiser,
                  c = n.tweet
                return a && i && o
                  ? C.a.createElement(Gt.a, {
                      onPoliticalSponsorWebsiteClick: i,
                      onPromotedDisclaimerLearnMoreClick: a,
                      onPromotedIndicatorClick: o,
                      promotedContent: r,
                      promotedContentAdvertiser: s,
                      style: Rn.promotedDetails,
                      testID: ge,
                      tweet: c,
                      withCircleIcon: t,
                    })
                  : null
              }),
              w()(h()(e), '_getPromoteButtonOnPress', function (t) {
                var n = e.props,
                  i = n.onPromoteAgainButtonClick,
                  a = n.onPromoteButtonClick
                return 'EligibleWithPreviousCampaign' === t ? i : a
              }),
              w()(h()(e), '_renderBirdwatchPivot', function () {
                var t = e.props,
                  n = t.tweet,
                  i = t.withBirdwatchPivots,
                  a = Qt.a.getOriginalTweet(n)
                return a.birdwatch_pivot &&
                  i &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_pivots_enabled')
                  ? C.a.createElement(W, a.birdwatch_pivot)
                  : null
              }),
              w()(h()(e), '_renderModeratedRepliesIcon', function () {
                var t = e.props,
                  n = t.hasModeratedReplies,
                  i = t.onModeratedIconClick,
                  a = t.tweet
                return n ? C.a.createElement(Jt.a, { link: ''.concat(a.permalink, '/hidden'), onPress: i }) : null
              }),
              w()(h()(e), '_renderBirdwatchNotesIcon', function () {
                var t = e.props,
                  n = t.onBirdwatchNotesIconClick,
                  i = t.onBirdwatchNotesIconShown,
                  a = t.tweet
                return !(
                  a.birdwatch_pivot &&
                  !0 ===
                    e.context.featureSwitches.getValueWithoutScribeImpression('responsive_web_birdwatch_pivots_enabled')
                ) &&
                  a.has_birdwatch_notes &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_consumption_enabled') &&
                  e.context.featureSwitches.isTrue('responsive_web_birdwatch_contribution_enabled')
                  ? C.a.createElement(Je, { onPress: n, onShow: i, tweetId: a.id_str })
                  : null
              }),
              w()(h()(e), '_getUsernameStackedLayoutEnabled', function () {
                return e.props.isFocal || e._isEdgeToEdgeEnabled
              }),
              w()(h()(e), '_handleSocialContextClick', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  i = t.shouldStoreTypeaheadItem,
                  a = t.socialContext
                if (n && a && i && i(Ce.a.ItemType.USER)) {
                  var o,
                    r = (null === (o = a.landingUrl) || void 0 === o ? void 0 : o.url.match(Y.A.id)) || '',
                    s = a.text || ''
                  return n({ topic: { id: r && r[0], name: s, description: An, type: ce.a.Topic } })
                }
              }),
              w()(h()(e), '_renderTweetTextHWTweet', function (t) {
                var n = e.props,
                  i = n.excludeCardUrl,
                  a = n.hitHighlights,
                  o = n.linkify,
                  s = n.tweet,
                  c = n.tweetTextSize,
                  l = n.withCardLinks,
                  u = n.withInlineMedia,
                  d = n.withQuotedTweetLinks,
                  p = Qt.a.getOriginalTweet(s),
                  m = Qt.a.hasInteractiveText(p),
                  h = c || (m ? 'title4' : t.size)
                return C.a.createElement(
                  At,
                  null,
                  C.a.createElement(
                    je.a,
                    r()({}, t, {
                      excludeCardUrl: i,
                      hitHighlights: a,
                      linkify: o,
                      onEntityClick: e.props.onEntityClick,
                      size: h,
                      style: m && Rn.interactiveHighlightSpacer,
                      transformUrl: e._transformUrl,
                      unmentionedUserIds: p.unmentioned_user_ids,
                      weight: m ? 'heavy' : t.weight,
                      withCardLinks: l,
                      withMediaLinks: !u,
                      withQuoteLinks: d || Qt.a.isQuotedTweetUnavailable(p),
                      withUnicodeEmojis: X.b,
                    }),
                  ),
                )
              }),
              w()(h()(e), '_renderTweetText', function (t) {
                var n = e.props,
                  i = n.excludeCardUrl,
                  a = n.hitHighlights,
                  o = n.isFocal,
                  r = n.linkify,
                  s = n.onEntityClick,
                  c = n.tweet,
                  l = n.tweetTextSize,
                  u = n.withCardLinks,
                  d = n.withInlineMedia,
                  p = n.withQuotedTweetLinks,
                  m = Qt.a.getOriginalTweet(c),
                  h = Qt.a.hasInteractiveText(m),
                  f = l || (o || h ? 'title4' : 'body')
                return C.a.createElement(
                  At,
                  null,
                  o
                    ? C.a.createElement(qe, {
                        disableTranslation: m.user.protected,
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: i,
                        lang: m.lang,
                        linkify: !0,
                        nativeID: t,
                        onEntityClick: s,
                        onMediaTranslation: e._handleMediaTranslations,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: Rn.expandedTweetText,
                        supplementalLang: m.supplemental_language,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        tweetId: m.id_str,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withOriginalText: !0,
                        withQuoteLinks: Qt.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: X.b,
                      })
                    : C.a.createElement(je.a, {
                        displayTextRange: m.display_text_range,
                        enrichments: m.enrichments,
                        entities: m.entities,
                        excludeCardUrl: i,
                        hitHighlights: a,
                        lang: m.lang,
                        linkify: r,
                        nativeID: t,
                        onEntityClick: e.props.onEntityClick,
                        quotedTweetId: m.quoted_status && m.quoted_status.id_str,
                        quotedTweetPermalink: m.quoted_status_permalink,
                        size: f,
                        style: h && Rn.interactiveHighlightSpacer,
                        text: m.text,
                        transformUrl: e._transformUrl,
                        unmentionedUserIds: m.unmentioned_user_ids,
                        weight: h ? 'heavy' : void 0,
                        withCardLinks: u,
                        withMediaLinks: !d,
                        withQuoteLinks: p || Qt.a.isQuotedTweetUnavailable(m),
                        withUnicodeEmojis: X.b,
                      }),
                )
              }),
              w()(h()(e), '_handleMediaTranslations', function (t) {
                e.setState({ mediaAltTranslations: t })
              }),
              w()(h()(e), '_transformUrl', function (t) {
                var n
                return e._transformPromotedUrl(
                  t,
                  null === (n = e.props.promotedContent) || void 0 === n ? void 0 : n.click_tracking_info,
                )
              }),
              e
            )
          }
          return (
            p()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversationTreeMetadata,
                    i = t.forwardPivotInfo,
                    o = t.hideConversationControlsEducationText,
                    s = t.hideExclusivityInfoEducationTextInReplies,
                    l = t.hideTrustedFriendsEducationTextInReplies,
                    u = t.isFocal,
                    d = t.loggedInUser,
                    p = t.onBlur,
                    m = t.onClick,
                    h = t.onFocus,
                    f = t.promotedContent,
                    v = t.quotedTweetTombstoneInfo,
                    _ = t.readerModeAvailable,
                    b = t.renderCurationActionMenu,
                    g = t.showConversationHeadsUp,
                    w = t.socialContext,
                    y = t.to,
                    k = t.tweet,
                    T = t.withReaderModeBottomBar,
                    S = t.withTimestamp,
                    I = t.withTimestampLink,
                    A = t.withUnreadStyles,
                    L = Qt.a.getOriginalTweet(k),
                    R = L.has_super_follower,
                    N = L.quick_promote_eligibility,
                    D = L.user,
                    M = null == N ? void 0 : N.eligibility,
                    j = this._getIsQuickPromoteEligible(M),
                    F = Xt.a.isPromoted(f),
                    B = !!F && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_below_header'),
                    U = !!F && this.context.featureSwitches.isTrue('responsive_web_promoted_badge_use_circle_icon'),
                    V = !(!D.professional || !j),
                    H = 'IneligibleCampaignRunning' === M || 'IneligibleCampaignPaused' === M,
                    z = 'string' == typeof y ? { pathname: y } : y,
                    W = n && n.ancestorConnector,
                    K = n && n.indents,
                    Q = this._getWithTopLine(),
                    X = this._getWithBottomLine(),
                    G = Q || X || !this._isEdgeToEdgeEnabled,
                    Y = z ? c()(c()({}, z), {}, { anchorless: !0 }) : void 0,
                    Z = u ? 'detail' : 'inline'
                  return !u &&
                    this.context.featureSwitches.isTrue('responsive_web_consumes_horizon_web_tweet_in_timelines')
                    ? C.a.createElement(
                        Yt.b.Provider,
                        { value: this._getFeatureConfigurationContextProviderValue() },
                        C.a.createElement(
                          at.a,
                          { forwardPivotInfo: i, tweet: k },
                          C.a.createElement(Zt.a, {
                            conversationTreeMetadata: n
                              ? { ancestorConnector: n.ancestorConnector, depth: n.depth, indents: n.indents }
                              : void 0,
                            link: q.canUseDOM ? Y : void 0,
                            onBlur: p,
                            onFocus: h,
                            onPress: m,
                            promotedContent: f,
                            quotedTweetTombstoneInfo: v,
                            renderActionMenu: b && q.canUseDOM ? b : kn.a,
                            renderActionsBar: k.isPreview
                              ? function () {
                                  return C.a.createElement($, { previewTweetId: k.id_str })
                                }
                              : function (t) {
                                  return C.a.createElement(
                                    C.a.Fragment,
                                    null,
                                    V &&
                                      C.a.createElement(
                                        O.a,
                                        {
                                          link: ''.concat(k.permalink, '/quick_promote_web/intro'),
                                          onPress: e._getPromoteButtonOnPress(M),
                                          style: Rn.promoteButton,
                                          type: 'primaryOutlined',
                                        },
                                        e._getPromoteButtonText(M),
                                      ),
                                    e._renderTweetActions({
                                      actionSize: t.actionSize,
                                      displayStyle: t.displayStyle,
                                      nativeID: t.nativeID,
                                      style: t.style,
                                      withCount: t.withCount,
                                      withAnalyticsAction: !0,
                                    }),
                                  )
                                },
                            renderEducation: function (t) {
                              return C.a.createElement(
                                C.a.Fragment,
                                null,
                                C.a.createElement(
                                  st,
                                  r()({}, t, {
                                    hideConversationControlsEducationText: !!o,
                                    hideExclusivityInfoEducationTextInReplies: !!s,
                                    hideTrustedFriendsEducationTextInReplies: !!l,
                                    loggedInUser: d,
                                  }),
                                ),
                                e.props.withReaderModeBottomBar
                                  ? C.a.createElement(E.a, { style: Rn.readerBottomBar })
                                  : null,
                              )
                            },
                            renderHighlightedUserLabel: function (t) {
                              var n
                              return 'AutomatedLabel' !==
                                (null === (n = t.label) || void 0 === n ? void 0 : n.userLabelType) ||
                                e.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                                ? C.a.createElement(Zt.a.HighlightedUserLabel, t)
                                : null
                            },
                            renderPromotedIndicator: function (e) {
                              return C.a.createElement(Zt.a.PromotedIndicator, r()({}, e, { withCircleIcon: U }))
                            },
                            renderPromotionStatusBadge: H
                              ? function (t) {
                                  return C.a.createElement(pt, {
                                    nativeID: t.nativeID,
                                    status: e._getTweetPromotionStatus(M),
                                    style: Rn.promotionStatus,
                                  })
                                }
                              : function () {
                                  return null
                                },
                            renderReplyContext: function (t) {
                              return e._renderReplyContext({ nativeID: t.nativeID })
                            },
                            renderRichContent: function (t) {
                              return e._renderRichContent({ nativeID: t.nativeID, withRoundMediaCorners: G })
                            },
                            renderSelfThreadCTA: function () {
                              return e._renderSelfThreadCTA()
                            },
                            renderSocialContext: function (t) {
                              return e._renderSocialContext({ nativeID: t.nativeID })
                            },
                            renderText: function (t) {
                              return e._renderTweetTextHWTweet(t)
                            },
                            renderTimestamp: S
                              ? function (e) {
                                  return C.a.createElement(Zt.a.Timestamp, r()({}, e, { link: I ? e.link : void 0 }))
                                }
                              : kn.a,
                            renderTombstone: function (t) {
                              return e._renderTombstoneHWTweet(t)
                            },
                            renderUserAvatar: function (t) {
                              return e._renderAvatar(t.nativeID)
                            },
                            renderUserName: function (t) {
                              return e._renderUserNameHWTweet(t)
                            },
                            socialContext: w
                              ? {
                                  contextType: w.contextType,
                                  isSelfRetweet: w.isSelfRetweet,
                                  link: w.landingUrl ? Object(J.b)(w.landingUrl) : void 0,
                                  name: w.name,
                                  screenName: w.screenName,
                                  text: w.text,
                                }
                              : void 0,
                            staticLinkConfig: null,
                            testID: ye,
                            tweet: k,
                            withBottomLine: X,
                            withTopLine: Q,
                            withUnreadStyles: A,
                          }),
                        ),
                      )
                    : C.a.createElement($t.c.UseTweetA11yIds, { tweet: k }, function (t) {
                        var r = a()(t, 2),
                          c = r[0],
                          v = r[1],
                          w = B
                            ? Qt.a.hasInteractiveText(L)
                              ? Rn.promotedIndicatorBelowHeaderWithInteractiveHighlights
                              : Rn.promotedIndicatorBelowHeader
                            : Rn.promotedIndicator,
                          y =
                            f && F
                              ? C.a.createElement(en.a, {
                                  contentAuthorId: D.id_str,
                                  nativeID: c.promotedLabel,
                                  promotedContent: f,
                                  style: w,
                                  withCircleIcon: U,
                                })
                              : null,
                          I = H
                            ? C.a.createElement(pt, {
                                nativeID: c.promotionStatusLabel,
                                status: e._getTweetPromotionStatus(M),
                                style: Rn.promotionStatus,
                              })
                            : null,
                          N = n
                            ? C.a.createElement(
                                x.b,
                                { nativeID: c.conversationLevel, style: P.a.visuallyHidden },
                                xn({ conversationTreeDepth: n.depth.toString() }),
                              )
                            : null,
                          j = L.tombstoneInfo || k.tombstoneInfo,
                          z = C.a.createElement(
                            C.a.Fragment,
                            null,
                            j ? e._renderTombstone(j) : null,
                            u || !j
                              ? C.a.createElement(
                                  C.a.Fragment,
                                  null,
                                  e._renderReplyContext({ nativeID: c.replyContext }),
                                  C.a.createElement(E.a, null, e._renderTweetText(c.text)),
                                  C.a.createElement(
                                    E.a,
                                    null,
                                    e._renderRichContent({ nativeID: c.richContent, withRoundMediaCorners: G }),
                                  ),
                                )
                              : null,
                          )
                        return C.a.createElement(
                          Yt.b.Provider,
                          { value: e._getFeatureConfigurationContextProviderValue() },
                          C.a.createElement(
                            at.a,
                            { forwardPivotInfo: i, tweet: k },
                            C.a.createElement(
                              tn.a,
                              {
                                a11yDomIds: v,
                                actionMenu: b && q.canUseDOM ? b() : null,
                                avatar: e._renderAvatar(c.avatar),
                                footer: e._renderFooter(),
                                header: e._renderHeader(c),
                                indents: K,
                                link: u || !q.canUseDOM ? void 0 : Y,
                                onBlur: p,
                                onFocus: h,
                                onPress: m,
                                testID: ye,
                                timestamp:
                                  F || e._getUsernameStackedLayoutEnabled() || !S
                                    ? null
                                    : e._renderTweetRelativeTimestamp(c.timestamp),
                                userFollowIndicators: R ? C.a.createElement(nn.a, { type: 'superFollower' }) : void 0,
                                userLabel: e._renderUserLabel(D, c.userLabel),
                                userName: e._renderUserName(c.username, c.timestamp),
                                withBottomLine: X,
                                withElbow: K ? 'side' === W : void 0,
                                withFooterGap: !u,
                                withFullWidthChildren: u || e._isEdgeToEdgeEnabled,
                                withTopLine: Q,
                                withUnreadStyles: A,
                              },
                              B && u ? e._renderPromotedDetails(U) : null,
                              B && !u ? y : null,
                              N,
                              z,
                              V &&
                                'inline' === Z &&
                                C.a.createElement(
                                  O.a,
                                  {
                                    link: ''.concat(k.permalink, '/quick_promote_web/intro'),
                                    onPress: e._getPromoteButtonOnPress(M),
                                    style: Rn.promoteButton,
                                    type: 'primaryOutlined',
                                  },
                                  e._getPromoteButtonText(M),
                                ),
                              e._renderFocalContent(B, V, I),
                              'inline' === Z &&
                                C.a.createElement(st, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'inline',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!o,
                                  hideExclusivityInfoEducationTextInReplies: !!s,
                                  hideTrustedFriendsEducationTextInReplies: !!l,
                                  loggedInUser: d,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: k,
                                }),
                              k.isPreview
                                ? C.a.createElement($, { previewTweetId: k.id_str })
                                : e._renderTweetActions({
                                    actionSize: u ? 'large' : void 0,
                                    displayStyle: u ? 'block' : void 0,
                                    nativeID: c.actionsBar,
                                    style: [
                                      u ? Rn.actionBarFocalTweet : Rn.actionBar,
                                      u && !_ && Rn.actionBarWithInlineReply,
                                    ],
                                    withAnalyticsAction: !u,
                                    withCount: !u,
                                  }),
                              e._renderReaderModeButton(),
                              B || u ? null : y,
                              u ? null : I,
                              'detail' === Z &&
                                C.a.createElement(st, {
                                  conversationControlLabelNativeID: c.conversationControlLabel,
                                  displayStyle: 'detail',
                                  exclusivityInfoLabelNativeID: c.exclusivityInfoLabel,
                                  hideConversationControlsEducationText: !!o,
                                  hideExclusivityInfoEducationTextInReplies: !!s,
                                  hideTrustedFriendsEducationTextInReplies: !!l,
                                  loggedInUser: d,
                                  showConversationHeadsUp: g,
                                  trustedFriendsLabelNativeID: c.trustedFriendsLabel,
                                  tweet: k,
                                }),
                              T ? C.a.createElement(E.a, { style: Rn.readerBottomBar }) : null,
                            ),
                          ),
                        )
                      })
                },
              },
              {
                key: '_renderTweetRelativeTimestamp',
                value: function (e) {
                  var t = this.props,
                    n = t.promotedContent,
                    i = t.tweet,
                    a = t.withTimestampLink,
                    o = Qt.a.getOriginalTweet(i)
                  return C.a.createElement(an.a, {
                    link: a
                      ? { pathname: o.permalink, state: { contextTweetId: o.id_str, promotedContent: n } }
                      : void 0,
                    nativeID: e,
                    timestamp: o.created_at,
                  })
                },
              },
              {
                key: '_renderUserNameHWTweet',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    i = t.onScreenNameClick,
                    a = t.tweet,
                    o = t.withUserHoverCard,
                    s = t.withUserName,
                    c = Qt.a.getOriginalTweet(a).user
                  return s
                    ? C.a.createElement(
                        Zt.a.UserName,
                        r()({}, e, {
                          onAvatarClick: n,
                          onLinkClick: i,
                          onScreenNameClick: i,
                          withHoverCard: o && !c.blocking,
                          withLink: !!i,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserName',
                value: function (e, t) {
                  var n = this.props,
                    i = n.isFocal,
                    a = n.onAvatarClick,
                    o = n.onScreenNameClick,
                    r = n.promotedContent,
                    s = n.tweet,
                    c = n.withUserHoverCard,
                    l = n.withUserName,
                    u = Qt.a.getOriginalTweet(s).user,
                    d = Xt.a.isPromoted(r)
                  return l
                    ? C.a.createElement(on.a, {
                        isProtected: u.protected,
                        isVerified: u.verified,
                        name: u.name,
                        nativeID: e,
                        onAvatarClick: a,
                        onLinkClick: o,
                        onScreenNameClick: o,
                        promotedContent: r,
                        screenName: u.screen_name,
                        screenNameSuffix:
                          d || i || !this._isEdgeToEdgeEnabled ? null : this._renderTweetRelativeTimestamp(t),
                        withHoverCard: c && !u.blocking,
                        withLink: !!o,
                        withStackedLayout: this._getUsernameStackedLayoutEnabled(),
                      })
                    : null
                },
              },
              {
                key: '_renderUserLabel',
                value: function (e, t) {
                  var n = e.highlightedLabel,
                    i = 'AutomatedLabel' === (null == n ? void 0 : n.userLabelType),
                    a = !!i && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !n || (i && !a) ? null : C.a.createElement(rn.a, { label: n, nativeID: t })
                },
              },
              {
                key: '_renderFocalContent',
                value: function (e, t, n) {
                  var i = this.props,
                    a = i.isFocal,
                    o = i.onAnalyticsClick,
                    r = i.tweet,
                    s = Qt.a.getOriginalTweet(r),
                    c = s.created_at,
                    l = s.place,
                    u = s.quick_promote_eligibility,
                    d = s.source,
                    p = s.source_name,
                    m = null == u ? void 0 : u.eligibility,
                    h = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled')
                  return a
                    ? C.a.createElement(
                        C.a.Fragment,
                        null,
                        C.a.createElement(
                          E.a,
                          { style: Rn.footerContainer },
                          C.a.createElement(
                            E.a,
                            { style: Rn.footerContent },
                            C.a.createElement(sn.a, {
                              linkColor: 'gray700',
                              place: l && l.full_name,
                              placeLink: l && l.id ? '/places/'.concat(l.id) : void 0,
                              source: d && p ? p : void 0,
                              sourceLink: 'https://help.twitter.com/using-twitter/how-to-tweet#source-labels',
                              style: Rn.timeLocSource,
                              timestamp: c,
                              timestampLink: s.permalink,
                            }),
                            C.a.createElement(
                              E.a,
                              { style: Rn.footerIcons },
                              this._renderModeratedRepliesIcon(),
                              this._renderBirdwatchNotesIcon(),
                            ),
                          ),
                          e ? null : this._renderPromotedDetails(),
                          n,
                        ),
                        C.a.createElement(it, {
                          endControl: t
                            ? C.a.createElement(
                                O.a,
                                {
                                  link: ''.concat(r.permalink, '/quick_promote_web/intro'),
                                  onPress: this._getPromoteButtonOnPress(m),
                                  style: Rn.tweetActivityPromoteButton,
                                  type: 'primaryFilled',
                                },
                                this._getPromoteButtonText(m),
                              )
                            : null,
                          loggedInUserId: this.context.loggedInUserId,
                          onAnalyticsClick: o,
                          tweet: s,
                        }),
                        C.a.createElement(It, {
                          isNonCompliantTweet: 'non_compliant' === s.limited_actions,
                          tweetId: s.id_str,
                          tweetLikeCount: s.favorite_count,
                          tweetPermalink: s.permalink,
                          tweetQuoteTweetCount: s.quote_count,
                          tweetReactionCount: s.reaction_count,
                          tweetRetweetCount: s.retweet_count,
                          withReactions: h,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderFooter',
                value: function () {
                  var e = this.props,
                    t = e.isFocal,
                    n = e.topic,
                    i = e.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    this._renderSelfThreadCTA(),
                    !t && n && i && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? me({ defaultRef: this._defaultInlinePromptRef, topic: n, topicFollowPrompt: i })
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function (e) {
                  var t = this.props,
                    n = t.isFocal,
                    i = t.topic,
                    a = t.topicFollowPrompt
                  return C.a.createElement(
                    C.a.Fragment,
                    null,
                    n && a && i && this.context.featureSwitches.isTrue('topics_context_controls_inline_prompt_enabled')
                      ? me({ defaultRef: this._defaultInlinePromptRef, topic: i, topicFollowPrompt: a })
                      : this._renderSocialContext({ nativeID: e.socialContext }),
                  )
                },
              },
              {
                key: '_renderSelfThreadCTA',
                value: function () {
                  var e = this.props,
                    t = e.onSelfThreadClick,
                    n = e.onSelfThreadImpression,
                    i = e.tweet,
                    a = Qt.a.getOriginalTweet(i),
                    o = this._shouldShowSelfThreadWithAvatar()
                  return this._shouldShowSelfThread()
                    ? C.a.createElement(fe.a, {
                        avatarUrl: o ? a.user.profile_image_url_https : void 0,
                        onClick: t,
                        onImpression: n,
                        style: Rn.selfThreadCTA,
                        to: i.permalink,
                        userName: a.user.screen_name,
                        withConversationLine: o,
                      })
                    : null
                },
              },
              {
                key: '_shouldShowSelfThread',
                value: function () {
                  var e = this.props,
                    t = e.conversationPosition,
                    n = e.tweet,
                    i = e.withSelfThread,
                    a = Qt.a.getOriginalTweet(n)
                  return i && !t && a.self_thread && !n.isPreview
                },
              },
              {
                key: '_shouldShowSelfThreadWithAvatar',
                value: function () {
                  var e = this.props,
                    t = e.shouldSelfThreadIncludeAvatar,
                    n = e.tweet,
                    i = Qt.a.getOriginalTweet(n)
                  return this._shouldShowSelfThread() && t && !i.in_reply_to_status_id_str
                },
              },
              {
                key: '_getConversationPosition',
                value: function () {
                  return this._shouldShowSelfThreadWithAvatar()
                    ? { isStart: !0, isEnd: !1 }
                    : this.props.conversationPosition
                },
              },
              {
                key: '_getIsConversationStart',
                value: function () {
                  var e = this.props.tweet,
                    t = this._getConversationPosition(),
                    n = Qt.a.getOriginalTweet(e)
                  return t && (t.isStart || !n.in_reply_to_status_id_str)
                },
              },
              {
                key: '_getIsQuickPromoteEligible',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                    case 'EligibleWithPreviousCampaign':
                      return !0
                    default:
                      return !1
                  }
                },
              },
              {
                key: '_getPromoteButtonText',
                value: function (e) {
                  switch (e) {
                    case 'Eligible':
                      return On
                    case 'EligibleWithPreviousCampaign':
                      return Pn
                    default:
                      return (
                        Object(he.a)(
                          new Error(
                            'Tweet promote button should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        On
                      )
                  }
                },
              },
              {
                key: '_getTweetPromotionStatus',
                value: function (e) {
                  switch (e) {
                    case 'IneligibleCampaignRunning':
                      return 'in-progress'
                    case 'IneligibleCampaignPaused':
                      return 'paused'
                    default:
                      return (
                        Object(he.a)(
                          new Error(
                            'Tweet promotion badge should never render when quick promote eligibility is '.concat(
                              e || 'null',
                            ),
                          ),
                          { level: 'warning' },
                        ),
                        'in-progress'
                      )
                  }
                },
              },
              {
                key: '_renderSocialContext',
                value: function (e) {
                  var t = e.nativeID,
                    n = this.props,
                    i = n.conversationPosition,
                    a = n.injectedFeedbackItem,
                    o = n.isFocal,
                    s = n.onUndoTopicNotInterestedClick,
                    c = n.promotedContent,
                    l = n.socialContext,
                    u = n.topic
                  if (!n.withSocialContext || !l || Xt.a.isPromoted(c)) return null
                  var d = this.context.featureSwitches,
                    p = i && !this._getIsConversationStart(),
                    m = l.contextType,
                    h = l.isSelfRetweet,
                    f = l.landingUrl,
                    v = l.name,
                    _ = l.screenName,
                    b = l.text,
                    g = l.topicContext,
                    w = f ? Object(J.b)(f) : void 0
                  if (
                    g &&
                    u &&
                    (function (e) {
                      var t = e.featureSwitches,
                        n = e.isExpanded,
                        i = e.topic,
                        a = e.topicContext
                      return (
                        Object(fn.c)(a) &&
                        n &&
                        i.not_interested &&
                        (!(t.getStringValue('topics_context_controls_implicit_variation') in bn) ||
                          t.isTrue('topics_context_controls_implicit_context_x_enabled'))
                      )
                    })({ featureSwitches: d, isExpanded: o, topic: u, topicContext: g })
                  )
                    return C.a.createElement(gn, { onUndoTopicNotInterestedClick: s })
                  var y = {
                      contextType: m,
                      iconSize: 'large',
                      withLeftPadding: this.context.featureSwitches.isTrue(
                        'social_context_and_topic_context_refresh_alignment_enabled',
                      )
                        ? p || !1
                        : !p && !o,
                      text: b,
                    },
                    T =
                      g && u
                        ? (function (e) {
                            var t,
                              n = e.featureSwitches,
                              i = e.iconSize,
                              a = e.injectedFeedbackItem,
                              o = e.isExpanded,
                              r = e.socialContext,
                              s = e.topic,
                              c = e.withLeftPadding,
                              l = r.contextType,
                              u = r.landingUrl,
                              d = r.topicContext,
                              p = u ? Object(J.b)(u) : void 0,
                              m = d && Object(fn.b)(d),
                              h = d && Object(fn.c)(d),
                              f = n.isTrue('media_edge_to_edge_content_enabled'),
                              v = f ? _e.a.TextOnly : _e.a.Topic,
                              _ =
                                null == a || null === (t = a.markNotInterestedTopic) || void 0 === t
                                  ? void 0
                                  : t.onClick,
                              b = d ? Object(pn.a)(d) : void 0,
                              g = null != d && d.bannerText ? C.a.createElement(k.a, d.bannerText) : r.text
                            if (m && n.getStringValue('topics_context_controls_followed_variation') in bn) {
                              var w = bn[n.getStringValue('topics_context_controls_followed_variation')]
                              return {
                                iconSize: i,
                                contextType: v,
                                rightControl: C.a.createElement(wn, {
                                  bannerText: r.topicContext && r.topicContext.bannerText,
                                  label: w,
                                  link: p,
                                  linkText: r.topicContext && r.topicContext.linkText,
                                  topic: s,
                                }),
                                withBottomBorder: !1,
                                withLeftPadding: !(
                                  n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                ),
                                topicData: b,
                                text: g,
                              }
                            }
                            if (h) {
                              if (n.getStringValue('topics_context_controls_implicit_variation') in bn) {
                                var y,
                                  T = bn[n.getStringValue('topics_context_controls_implicit_variation')]
                                return {
                                  iconSize: i,
                                  contextType: v,
                                  rightControl: C.a.createElement(wn, {
                                    bannerText: r.topicContext && r.topicContext.bannerText,
                                    label: T,
                                    link: p,
                                    linkText: null === (y = r.topicContext) || void 0 === y ? void 0 : y.linkText,
                                    onNotInterestedPress: _,
                                    topic: s,
                                    withRightControl: n.isTrue('topics_context_controls_implicit_context_x_enabled'),
                                  }),
                                  topicData: b,
                                  text: g,
                                  withBottomBorder: !1,
                                  withLeftPadding: !(
                                    n.isTrue('social_context_and_topic_context_refresh_alignment_enabled') || f
                                  ),
                                }
                              }
                              var E = C.a.createElement(yn, { isExpanded: o, onNotInterestedPress: _, topic: s })
                              return o
                                ? {
                                    bottomControl: E,
                                    contextType: l,
                                    iconSize: 'xLarge',
                                    iconStyle: Cn.iconStyle,
                                    textColor: 'normal',
                                    textSize: 'headline1',
                                    text: r.text,
                                    topicData: void 0,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                                : {
                                    contextType: l,
                                    iconSize: i,
                                    iconStyle: Cn.iconStyle,
                                    rightControl: E,
                                    topicData: b,
                                    text: r.text,
                                    withBottomBorder: !0,
                                    withLeftPadding: c,
                                  }
                            }
                            return { contextType: l, iconSize: i, text: r.text, withLeftPadding: c }
                          })({
                            featureSwitches: d,
                            iconSize: y.iconSize,
                            injectedFeedbackItem: a,
                            isExpanded: o,
                            socialContext: l,
                            topic: u,
                            withLeftPadding: y.withLeftPadding,
                          })
                        : y
                  return C.a.createElement(
                    ve.a,
                    r()({}, T, {
                      link: w,
                      nativeID: t,
                      onClick: m === _e.a.Topic ? this._handleSocialContextClick : void 0,
                      retweetData: { name: v, screenName: _, isSelfRetweet: h },
                      style: Rn.socialContext,
                      testID: we,
                      weight: 'bold',
                    }),
                  )
                },
              },
              {
                key: '_renderReplyContext',
                value: function (e) {
                  var t,
                    n = e.nativeID,
                    i = this.props,
                    a = i.conversationPosition,
                    o = i.conversationTreeMetadata,
                    r = i.isFocal,
                    s = i.onReplyContextClick,
                    c = i.replyContext,
                    l = i.tweet,
                    u = Qt.a.getOriginalTweet(l),
                    d = u.self_thread
                  return this._shouldShowSelfThread() ||
                    c !== cn.a.ReplyContextTypes.Isolated ||
                    !u.in_reply_to_status_id_str ||
                    (o && !r) ||
                    (d && a && !a.isStart) ||
                    (d && r)
                    ? null
                    : C.a.createElement(cn.a, {
                        displayTextRange: u.display_text_range,
                        inReplyToName: u.in_reply_to_name,
                        inReplyToScreenName: u.in_reply_to_screen_name,
                        inReplyToStatusIdStr: u.in_reply_to_status_id_str,
                        inReplyToUserIdStr: u.in_reply_to_user_id_str,
                        nativeID: n,
                        onClick: s,
                        style: [Rn.replyContext, r && Rn.replyContextBig],
                        tweetPermalink: u.permalink,
                        unmentionedUserIds: u.unmentioned_user_ids,
                        userMentionsEntities: null === (t = u.entities) || void 0 === t ? void 0 : t.user_mentions,
                      })
                },
              },
              {
                key: '_renderReaderModeButton',
                value: function () {
                  var e = this.props,
                    t = e.readerModeAvailable,
                    n = e.tweet
                  return t
                    ? C.a.createElement(
                        E.a,
                        { style: Rn.actionBarWithInlineReply },
                        C.a.createElement(se.a, { focalTweet: n, isExpanded: !0, readerModeAvailable: !!t }),
                      )
                    : null
                },
              },
              {
                key: '_renderTweetActions',
                value: function (e) {
                  var t = e.actionSize,
                    n = e.displayStyle,
                    i = e.nativeID,
                    a = e.style,
                    o = e.withAnalyticsAction,
                    r = e.withCount,
                    s = this.props,
                    c = s.allowDownvote,
                    l = s.bookmarkFolderId,
                    u = s.contextTweet,
                    d = s.enableKeyboardShortcuts,
                    p = s.forwardPivotInfo,
                    m = s.onLikeSuccess,
                    h = s.onReplyPress,
                    f = s.promotedContent,
                    v = s.tweet,
                    _ = s.withActionsDisabled,
                    b = s.withRemoveFromBookmarks
                  return this.props.withActions
                    ? C.a.createElement(Ye.a, {
                        actionSize: t,
                        allowDownvote: c,
                        bookmarkFolderId: l,
                        displayStyle: n,
                        enableKeyboardShortcuts: d,
                        forwardPivotInfo: v.softIntervention || p,
                        likeActionIconContainerRef: this._iconContainerRef,
                        nativeID: i,
                        onLikeSuccess: m,
                        onReplyPress: h,
                        promotedContent: f,
                        style: a,
                        tweet: u || v,
                        withActionsDisabled: _,
                        withAnalyticsAction: o,
                        withCount: r,
                        withRemoveFromBookmarks: b,
                      })
                    : null
                },
              },
              {
                key: '_renderAvatar',
                value: function (e) {
                  var t = this.props,
                    n = t.onAvatarClick,
                    i = t.onScreenNameClick,
                    a = t.promotedContent,
                    o = t.tweet,
                    r = t.withAvatarLink,
                    s = t.withUserAvatar,
                    c = t.withUserHoverCard,
                    l = t.withUserPresence,
                    u = Qt.a.getOriginalTweet(o).user,
                    d = Qt.a.getOriginalTweet(o).user.id_str
                  return s
                    ? C.a.createElement(qt, {
                        avatarRef: this._defaultInlinePromptRef,
                        nativeID: e,
                        onClick: n,
                        onHoverCardScreenNameClick: i,
                        promotedContent: a,
                        screenName: u.screen_name,
                        uri: u.profile_image_url_https,
                        userId: d,
                        withHoverCard: c && !u.blocking,
                        withLink: r,
                        withNftAvatar: u.has_nft_avatar,
                        withUserPresence: l,
                      })
                    : null
                },
              },
              {
                key: '_renderTombstoneHWTweet',
                value: function (e) {
                  var t = e.actionLink,
                    n = e.actionText,
                    i = e.children,
                    a = e.style,
                    o = this.props,
                    r = o.conversationTreeMetadata,
                    s = o.onClick
                  return C.a.createElement(
                    E.a,
                    { style: a },
                    C.a.createElement(
                      ne.a,
                      { actionLink: t, actionText: n, conversationTreeMetadata: r, inline: !0, onClick: s },
                      i,
                    ),
                  )
                },
              },
              {
                key: '_renderTombstone',
                value: function (e) {
                  var t = this.props,
                    n = t.conversationTreeMetadata,
                    i = t.isFocal,
                    a = t.onClick,
                    o = t.tweet,
                    r = Qt.a.getOriginalTweet(o),
                    s = e.richText
                  return r && e && s
                    ? C.a.createElement(
                        E.a,
                        { style: Rn.spacingVertical },
                        C.a.createElement(
                          ne.a,
                          {
                            actionLink: i ? void 0 : r.permalink,
                            actionText: i ? void 0 : In,
                            conversationTreeMetadata: n,
                            inline: !0,
                            onClick: i ? void 0 : a,
                          },
                          C.a.createElement(k.a, { entities: s.entities, rtl: s.rtl, text: s.text }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_hasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Qt.a.getOriginalTweet(e),
                    n = t.extended_entities && t.extended_entities.media
                  return (
                    !!(n && n.length > 0) &&
                    n.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_quoteTweetHasPhoto',
                value: function () {
                  var e = this.props.tweet,
                    t = Qt.a.getOriginalTweet(e)
                  return !!(
                    t.quoted_status &&
                    t.quoted_status.entities &&
                    t.quoted_status.entities.media &&
                    t.quoted_status.entities.media.length > 0 &&
                    t.quoted_status.entities.media.some(function (e) {
                      return 'photo' === e.type
                    })
                  )
                },
              },
              {
                key: '_renderRichContent',
                value: function (e) {
                  var t = e.nativeID,
                    n = e.withRoundMediaCorners,
                    i = this.context.featureSwitches,
                    a = this.props.withActionsDisabled,
                    o = this.props,
                    r = o.enableKeyboardShortcuts,
                    s = o.forwardPivotInfo,
                    c = o.inlineCalloutInfo,
                    l = o.innerForwardPivotInfo,
                    u = o.isFocal,
                    d = o.linkableQuotedTweet,
                    p = o.onCardLinkClick,
                    m = o.onMediaClick,
                    h = o.onQuoteTweetClick,
                    f = o.preventVideoPlayback,
                    v = o.promotedContent,
                    _ = o.quoteTweetSocialContextProps,
                    b = o.quotedTweetTombstoneInfo,
                    g = o.tweet,
                    w = o.withCardLinks,
                    y = o.withInlineMedia,
                    k = o.withUserHoverCard,
                    T = u ? 'DETAIL' : 'TIMELINE',
                    E = (this._hasPhoto() || this._quoteTweetHasPhoto()) && !!Kt.b.isDesktopOS() && !u,
                    S = this.context.featureSwitches.isTrue('responsive_web_reactions_enabled'),
                    I = Qt.a.getOriginalTweet(g)
                  return (
                    (a = a || Object($e.b)(i, I, $e.a.VoteOnPoll)),
                    C.a.createElement(
                      C.a.Fragment,
                      null,
                      C.a.createElement(ln.a, {
                        cardCacheLocationKey: T,
                        displayMediaMetadata: u,
                        enableKeyboardShortcuts: r,
                        forwardPivotInfo: g.softIntervention || s,
                        inlineCalloutInfo: c,
                        innerForwardPivotInfo: l,
                        isMediaMaxHeightEnabled: E,
                        loggedInUserId: this.context.loggedInUserId,
                        mediaAltTranslations: this.state.mediaAltTranslations,
                        mediaCacheLocationKey: T,
                        nativeID: t,
                        onCardLinkClick: p,
                        onMediaClick: m,
                        onQuoteTweetClick: h,
                        preventVideoPlayback: f,
                        promotedContent: v,
                        quoteTweetSingleImageMinAspectRatio: Sn,
                        quoteTweetSocialContextProps: _,
                        quotedTweetTombstoneInfo: b,
                        renderQuoteTweetTombstone: function (e) {
                          return C.a.createElement(re, e)
                        },
                        singleImageMaxAspectRatio: En,
                        singleImageMinAspectRatio: u ? 0.1 : Sn,
                        tweet: g,
                        withActionsDisabled: a,
                        withAltTextBadge: this.context.featureSwitches.isTrue('responsive_web_alt_text_badge_enabled'),
                        withCardLinks: w,
                        withCenterCrop: !0,
                        withCondensedQuoteTweet: !u && Qt.a.hasMedia(I, !y),
                        withMediaTagsIcon: u,
                        withQuoteTweetHeaderLinks: !q.canUseDOM,
                        withQuoteTweetLink: d,
                        withQuoteTweetMedia: y,
                        withReactions: S,
                        withRoundMediaCorners: n,
                        withTweetMedia: y,
                        withUserHoverCard: k,
                      }),
                      this._renderBirdwatchPivot(),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(C.a.Component)
      w()(Ln, 'contextType', L.a),
        w()(Ln, 'displayName', 'Tweet'),
        w()(Ln, 'defaultProps', {
          displayBlocked: !1,
          isFocal: !1,
          linkify: !0,
          onBirdwatchNotesIconClick: Tn.a,
          onModeratedIconClick: Tn.a,
          onModeratedIconShown: Tn.a,
          replyContext: cn.a.ReplyContextTypes.Isolated,
          withActions: !1,
          withAvatarLink: !0,
          withBirdwatchPivots: !0,
          withCardLinks: !1,
          withInlineMedia: !0,
          withQuotedTweetLinks: !1,
          withRemoveFromBookmarks: !1,
          withSocialContext: !1,
          withTimestampLink: !0,
          withUserHoverCard: !0,
          withUserAvatar: !0,
          withUserName: !0,
          withTimestamp: !0,
        })
      var Rn = P.a.create(function (e) {
        return {
          replyContextBig: { marginTop: e.spaces.space12, marginBottom: 0 },
          replyContext: { marginBottom: e.spaces.space2 },
          selfThreadCTA: { marginHorizontal: 'calc(-1 * '.concat(e.componentDimensions.gutterHorizontal, ')') },
          innerRow: { alignItems: 'baseline', flexDirection: 'row', flexShrink: 1 },
          actionBar: { marginTop: e.spaces.space12 },
          actionBarFocalTweet: {
            borderTopColor: e.colors.borderColor,
            borderTopStyle: 'solid',
            borderTopWidth: e.borderWidths.small,
            height: e.spaces.space48,
          },
          actionsBarNarrow: { minWidth: 250, marginRight: 'auto' },
          actionBarWithInlineReply: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
          },
          promoteButton: { marginTop: e.spaces.space12 },
          tweetActivityPromoteButton: { marginVertical: e.spaces.space8 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedDetails: { marginTop: e.spaces.space4 },
          promotionStatus: { marginTop: e.spaces.space12 },
          socialContext: { marginBottom: e.spaces.space4, marginTop: '-'.concat(e.spaces.space4) },
          spacingVertical: { marginVertical: e.spaces.space4 },
          followTopicButton: { justifyContent: 'center' },
          expandedTweetText: { marginTop: e.spaces.space12 },
          footerContainer: { marginVertical: e.spaces.space16 },
          footerContent: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
          footerIcons: { flexDirection: 'row' },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          readerBottomBar: {
            borderBottomColor: e.colors.nestedBorderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: e.borderWidths.small,
            marginTop: e.spaces.space20,
            width: e.spaces.space32,
          },
          timeLocSource: { marginRight: e.spaces.space12 },
          topicFollowPrompt: { marginBottom: e.spaces.space12, marginTop: '-'.concat(e.spaces.space8) },
        }
      })
      t.b = Object(G.a)(Ln)
    },
    BQZD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'd', function () {
          return d
        })
      var i = n('WpDa'),
        a = n('oQhu'),
        o = n('eR3e'),
        r = n('ZNT5'),
        s = 'bookmarks',
        c = function (e) {
          return Object(r.a)({
            timelineId: 'bookmarkFolder-'.concat(e),
            getEndpoint: function (e) {
              return e.Bookmarks.fetchBookmarkFolderTimeline
            },
            getEndpointParams: function (t) {
              var n = t.cursor
              return { cursor: 'string' == typeof n ? n : void 0, bookmark_collection_id: e }
            },
            formatResponse: i.a,
            context: 'FETCH_BOOKMARK_FOLDER_TIMELINE',
            perfKey: 'bookmarkFolderGraphQL',
          })
        },
        l = Object(a.a)(function (e) {
          return e.isTrue('responsive_web_graphql_bookmarks')
            ? Object(r.a)({
                timelineId: s,
                getEndpoint: function (e) {
                  return e.Bookmarks.fetchBookmarksTimeline
                },
                getEndpointParams: function (e) {
                  var t = e.count,
                    n = e.cursor
                  return { count: t, cursor: 'string' == typeof n ? n : void 0 }
                },
                formatResponse: i.a,
                context: 'FETCH_BOOKMARKS_TIMELINE',
                perfKey: 'bookmarksGraphQL',
              })
            : Object(r.a)({
                timelineId: s,
                getEndpoint: function (e) {
                  return e.URT.fetchBookmarks
                },
                getEndpointParams: function (e) {
                  return e
                },
                context: 'FETCH_BOOKMARKS_TIMELINE',
                perfKey: 'bookmarks',
              })
        })
      t.b = l
      var u = function () {
          return function (e, t, n) {
            var i = n.api,
              a = n.featureSwitches
            return (
              a.isTrue('responsive_web_graphql_mutation_bookmarks')
                ? i.Bookmarks.deleteAll
                : i.Tweets.removeAllBookmarks
            )().then(function () {
              return e(l(a).deleteTimeline())
            })
          }
        },
        d = o.q.bind(null, s)
    },
    BR0S: function (e, t, n) {
      'use strict'
      var i = n('pxHa'),
        a = n('XJEr')
      function o(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return r(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
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
      function r(e, t) {
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
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            if (!this.__isNative) {
              this.__isNative = !0
              for (var t, n = o(this._children); !(t = n()).done; ) {
                var i = t.value
                i.__makeNative(), a.a.API.connectAnimatedNodes(this.__getNativeTag(), i.__getNativeTag())
              }
            }
            e.prototype.__makeNative.call(this)
          }),
          (r.__addChild = function (e) {
            0 === this._children.length && this.__attach(),
              this._children.push(e),
              this.__isNative &&
                (e.__makeNative(), a.a.API.connectAnimatedNodes(this.__getNativeTag(), e.__getNativeTag()))
          }),
          (r.__removeChild = function (e) {
            var t = this._children.indexOf(e)
            ;-1 !== t &&
              (this.__isNative &&
                e.__isNative &&
                a.a.API.disconnectAnimatedNodes(this.__getNativeTag(), e.__getNativeTag()),
              this._children.splice(t, 1),
              0 === this._children.length && this.__detach())
          }),
          (r.__getChildren = function () {
            return this._children
          }),
          (r.__callListeners = function (t) {
            if ((e.prototype.__callListeners.call(this, t), !this.__isNative))
              for (var n, i = o(this._children); !(n = i()).done; ) {
                var a = n.value
                a.__getValue && a.__callListeners(a.__getValue())
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
          a = n('XJEr')
        function o(e, t) {
          return (o =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var r = (function (t) {
          var n, i
          function r(e) {
            var n, i, o, r
            return (
              ((r = t.call(this) || this)._deceleration = null !== (n = e.deceleration) && void 0 !== n ? n : 0.998),
              (r._velocity = e.velocity),
              (r._useNativeDriver = Object(a.c)(e)),
              (r.__isInteraction = null !== (i = e.isInteraction) && void 0 !== i ? i : !r._useNativeDriver),
              (r.__iterations = null !== (o = e.iterations) && void 0 !== o ? o : 1),
              r
            )
          }
          ;(i = t), ((n = r).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), o(n, i)
          var s = r.prototype
          return (
            (s.__getNativeAnimationConfig = function () {
              return {
                type: 'decay',
                deceleration: this._deceleration,
                velocity: this._velocity,
                iterations: this.__iterations,
              }
            }),
            (s.start = function (e, t, n, i, a) {
              ;(this.__active = !0),
                (this._lastValue = e),
                (this._fromValue = e),
                (this._onUpdate = t),
                (this.__onEnd = n),
                (this._startTime = Date.now()),
                this._useNativeDriver
                  ? this.__startNativeAnimation(a)
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
            r
          )
        })(i.a)
        t.a = r
      }.call(this, n('fRV1')))
    },
    C25v: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M23.074 3.35H20.65V.927c0-.414-.337-.75-.75-.75s-.75.336-.75.75V3.35h-2.426c-.414 0-.75.337-.75.75s.336.75.75.75h2.425v2.426c0 .414.335.75.75.75s.75-.336.75-.75V4.85h2.424c.414 0 .75-.335.75-.75s-.336-.75-.75-.75zM19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    D5n3: function (e, t, n) {
      'use strict'
      var i = n('KEM+'),
        a = n.n(i),
        o = n('RqPI'),
        r = n('XOJV'),
        s = n('SRyb')
      t.a = function (e, t) {
        return function (n, i, c) {
          c.api
          var l = c.featureSwitches
          return n(r.a.unretweet(e, t)).then(function () {
            var t = Object(o.q)(i()),
              c = r.a.select(i(), e),
              u = c && (c.retweeted_status ? r.a.select(i(), c.retweeted_status) : c)
            if (t && u && (u.user !== t || u.id_str !== e))
              return n([
                Object(s.a)(l, t, 'default').removeTweets(a()({}, e, !0)),
                Object(s.a)(l, t, 'with_replies').removeTweets(a()({}, e, !0)),
              ])
          })
        }
      }
    },
    'Ey+e': function (e, t, n) {
      'use strict'
      var i = n('KEM+'),
        a = n.n(i),
        o = n('yiKp'),
        r = n.n(o),
        s = n('ddV6'),
        c = n.n(s),
        l = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        u = n('6/RC'),
        d = n('E6XO'),
        p = n('sXY3'),
        m = n('tn7R'),
        h = n('+d3d'),
        f = n('oECP'),
        v = n('fs1G'),
        _ = {},
        b = 0,
        g = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        w = function () {
          Object(p.a)(_).forEach(function (e, t) {
            var n = c()(e, 2),
              i = n[0],
              a = n[1],
              o = Object(m.a)(a),
              r = o.length
            o.forEach(function (e) {
              Object(p.a)(g).map(function (t) {
                var n = c()(t, 2),
                  a = n[0],
                  o = c()(n[1], 2),
                  s = o[0],
                  l = o[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(r) &&
                  s in e &&
                  l in e &&
                  Object(d.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(i, a),
                    { duration_ms: e[s] - e[l] },
                  )
              })
            })
          }),
            Object(d.a)(),
            (_ = {})
        },
        y = Object(h.a)(w, 2e4) || w,
        C = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(l.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var i = e.__lifecycleIdentifier
          return (
            !i && t && ((b += 1), (i = e.__lifecycleIdentifier = b)),
            (_[n] && _[n][i]) || (_[n] = r()(r()({}, _[n]), {}, a()({}, i, {}))),
            [n, i]
          )
        },
        k = function (e, t, n, i) {
          _[e][t][n] = i
        }
      t.a = u.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || v.a,
              componentDidMount: e.prototype.componentDidMount || v.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || v.a,
              componentDidUpdate: e.prototype.componentDidUpdate || v.a,
              componentWillUnmount: e.prototype.componentWillUnmount || v.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = C(this, !0), n = c()(e, 2), i = n[0], a = n[1], o = arguments.length, r = new Array(o), s = 0;
                  s < o;
                  s++
                )
                  r[s] = arguments[s]
                t.UNSAFE_componentWillMount.apply(this, r), k(i, a, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = C(this), n = c()(e, 2), i = n[0], a = n[1], o = arguments.length, r = new Array(o), s = 0;
                  s < o;
                  s++
                )
                  r[s] = arguments[s]
                t.componentDidMount.apply(this, r), k(i, a, 'didMount', Date.now()), y()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = C(this, !0), n = c()(e, 2), i = n[0], a = n[1], o = arguments.length, r = new Array(o), s = 0;
                  s < o;
                  s++
                )
                  r[s] = arguments[s]
                t.UNSAFE_componentWillUpdate.apply(this, r), k(i, a, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = C(this), n = c()(e, 2), i = n[0], a = n[1], o = arguments.length, r = new Array(o), s = 0;
                  s < o;
                  s++
                )
                  r[s] = arguments[s]
                t.componentDidUpdate.apply(this, r), k(i, a, 'didUpdate', Date.now()), y()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i]
                t.componentWillUnmount.apply(this, n), y()
              }),
              e
            )
          }
        : f.a
    },
    'EyD/': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.859 15.413l-3.606 2.641 1.364 4.255c.059.137 0 .284-.117.372-.058.049-.127.068-.195.068-.078 0-.146-.02-.205-.068l-3.606-2.622-3.606 2.622c-.059.049-.127.068-.205.068-.068 0-.137-.02-.195-.068-.127-.088-.185-.235-.127-.372l1.365-4.255-3.597-2.641c-.117-.078-.166-.245-.127-.381.049-.147.175-.235.331-.235h4.454l1.374-4.255c.049-.147.185-.225.331-.225.136 0 .283.078.331.225l1.374 4.255h4.454c.146 0 .292.088.331.235.042.137.004.303-.123.381zM9.696 22.402H3.617c-.822 0-1.574-.359-2.062-.986-.503-.645-.674-1.486-.472-2.307.617-2.486 2.409-4.509 4.918-5.552.603-.252 1.299.036 1.549.644.251.607-.037 1.303-.642 1.554-1.806.751-3.091 2.183-3.524 3.928-.025.103-.011.202.039.266.015.019.056.072.194.072h6.079c.655 0 1.186.533 1.186 1.19s-.531 1.191-1.186 1.191zm.197-10.184c-1.439 0-3.055-.167-4.128-1.397-.894-1.026-1.19-2.566-.903-4.709.402-2.999 2.33-4.862 5.031-4.862s4.63 1.863 5.031 4.861c.287 2.142-.008 3.683-.902 4.708-1.073 1.233-2.689 1.399-4.129 1.399zm0-8.588c-1.906 0-2.51 1.521-2.68 2.799-.185 1.382-.068 2.359.338 2.825.352.404 1.075.584 2.343.584 1.269 0 1.992-.18 2.344-.584.405-.466.522-1.443.337-2.825-.172-1.277-.776-2.799-2.682-2.799z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    FGdj: function (e, t, n) {
      'use strict'
      var i = n('BR0S'),
        a = n('XJEr'),
        o = n('tI3i'),
        r = n.n(o),
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
      function h(e) {
        if (e.outputRange && 'string' == typeof e.outputRange[0])
          return (function (e) {
            var t = e.outputRange
            r()(t.length >= 2, 'Bad output range'),
              (function (e) {
                for (var t = e[0].replace(v, ''), n = 1; n < e.length; ++n)
                  r()(t === e[n].replace(v, ''), 'invalid pattern ' + e[0] + ' and ' + e[n])
              })((t = t.map(f)))
            var n = t[0].match(v).map(function () {
              return []
            })
            t.forEach(function (e) {
              e.match(v).forEach(function (e, t) {
                n[t].push(+e)
              })
            })
            var i = t[0].match(v).map(function (t, i) {
                return h(d(d({}, e), {}, { outputRange: n[i] }))
              }),
              a = ((o = t[0]), 'string' == typeof o && o.startsWith('rgb'))
            var o
            return function (e) {
              var n = 0
              return t[0].replace(v, function () {
                var t = +i[n++](e)
                return a && (t = n < 4 ? Math.round(t) : Math.round(1e3 * t) / 1e3), String(t)
              })
            }
          })(e)
        var t = e.outputRange
        _('outputRange', t)
        var n = e.inputRange
        _('inputRange', n),
          (function (e) {
            r()(e.length >= 2, 'inputRange must have at least 2 elements')
            for (var t = 1; t < e.length; ++t)
              r()(e[t] >= e[t - 1], 'inputRange must be monotonically non-decreasing ' + e)
          })(n),
          r()(
            n.length === t.length,
            'inputRange (' + n.length + ') and outputRange (' + t.length + ') must have the same length',
          )
        var i = e.easing || m,
          a = 'extend'
        void 0 !== e.extrapolateLeft ? (a = e.extrapolateLeft) : void 0 !== e.extrapolate && (a = e.extrapolate)
        var o = 'extend'
        return (
          void 0 !== e.extrapolateRight ? (o = e.extrapolateRight) : void 0 !== e.extrapolate && (o = e.extrapolate),
          function (e) {
            r()('number' == typeof e, 'Cannot interpolation an input which is not a number')
            var s = (function (e, t) {
              var n
              for (n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            })(e, n)
            return (function (e, t, n, i, a, o, r, s) {
              var c = e
              if (c < t) {
                if ('identity' === r) return c
                'clamp' === r && (c = t)
              }
              if (c > n) {
                if ('identity' === s) return c
                'clamp' === s && (c = n)
              }
              if (i === a) return i
              if (t === n) return e <= t ? i : a
              t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t))
              ;(c = o(c)), i === -1 / 0 ? (c = -c) : a === 1 / 0 ? (c += i) : (c = c * (a - i) + i)
              return c
            })(e, n[s], n[s + 1], t[s], t[s + 1], i, a, o)
          }
        )
      }
      function f(e) {
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
      var v = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g
      function _(e, t) {
        r()(t.length >= 2, e + ' must have at least 2 elements'),
          r()(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + t)
      }
      var b = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return ((i = e.call(this) || this)._parent = t), (i._config = n), (i._interpolation = h(n)), i
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), l(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._parent.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.__getValue = function () {
            var e = this._parent.__getValue()
            return (
              r()('number' == typeof e, 'Cannot interpolate an input which is not a number.'), this._interpolation(e)
            )
          }),
          (o.interpolate = function (e) {
            return new i(this, e)
          }),
          (o.__attach = function () {
            this._parent.__addChild(this)
          }),
          (o.__detach = function () {
            this._parent.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__transformDataType = function (e) {
            return e.map(a.a.transformDataType)
          }),
          (o.__getNativeConfig = function () {
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
      ;(b.__createInterpolation = h), (t.a = b)
    },
    G41x: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var i = n('ERkP'),
        a = n.n(i),
        o = n('mjJ+'),
        r = n('3XMw'),
        s = n.n(r),
        c = n('fn9Y'),
        l = n('wD1h'),
        u = n('wwsH'),
        d = s.a.dc63da15,
        p = s.a.jc9298a8,
        m = { viewType: 'share' }
      function h(e) {
        var t = e.actionItems,
          n = e.actionMenuDescription,
          i = e.activeColor,
          r = e.color,
          s = e.enableKeyboardShortcuts,
          h = e.iconSize,
          f = e.isDisabled,
          v = e.isFaded,
          _ = e.isPresentational,
          b = e.onMenuCancel,
          g = e.onPress,
          w = e.style,
          y = e.withCount
        return a.a.createElement(u.a, {
          Icon: c.a,
          accessibilityLabel: p,
          activeColor: i,
          behavioralEventContext: m,
          color: r,
          enableKeyboardShortcuts: s,
          hoverLabel: { label: d },
          iconSize: h,
          isDisabled: f,
          isFaded: v,
          isPresentational: _,
          keyboardShortcut: l.a.shortcuts.share,
          onPress: g,
          renderMenu: v
            ? void 0
            : function (e) {
                return a.a.createElement(o.a, {
                  description: n,
                  items: t,
                  onCloseRequested: function () {
                    e(), null == b || b()
                  },
                  shouldCloseOnClick: !0,
                })
              },
          style: w,
          withCount: y,
        })
      }
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
    HSMM: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      n('hBvt')
      var i = n('ERkP'),
        a = n.n(i),
        o = n('3XMw'),
        r = n.n(o),
        s = n('dFWS'),
        c = n('wD1h'),
        l = n('wwsH'),
        u = r.a.hdf72269,
        d = r.a.c9940954,
        p = { viewType: 'reply' }
      function m(e) {
        var t = e.activeColor,
          n = e.color,
          i = e.count,
          o = e.enableKeyboardShortcuts,
          r = e.iconSize,
          m = e.isDisabled,
          h = e.isFaded,
          f = e.isPresentational,
          v = e.link,
          _ = e.onPress,
          b = e.renderWrapper,
          g = e.style,
          w = e.testID,
          y = e.withCount && 'number' == typeof i,
          C = y ? d({ count: i }) : u
        return a.a.createElement(l.a, {
          Icon: s.a,
          accessibilityLabel: C,
          activeColor: t,
          behavioralEventContext: p,
          color: n,
          count: i,
          enableKeyboardShortcuts: o,
          hoverLabel: { label: u },
          iconSize: r,
          isDisabled: m,
          isFaded: h,
          isPresentational: f,
          keyboardShortcut: c.a.shortcuts.reply,
          link: v,
          onPress: _,
          renderWrapper: b,
          style: g,
          testID: w,
          withCount: y,
        })
      }
    },
    Hja3: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return C
      }),
        n.d(t, 'a', function () {
          return k
        }),
        n.d(t, 'd', function () {
          return T
        })
      var i = n('KEM+'),
        a = n.n(i),
        o = n('yiKp'),
        r = n.n(o),
        s = (n('yH/f'), n('ho0z'), n('7x/C'), n('JtPf'), n('PiaM')),
        c = n('/kEJ'),
        l = n('48TD'),
        u = n('BQZD'),
        d = n('oEOe'),
        p = n('lMB6'),
        m = n('RqPI'),
        h = n('3zvM'),
        f = n('oQhu'),
        v = n('3A2y'),
        _ = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_FAILURE',
        }),
        b = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_FAILURE',
        }),
        g = Object(h.e)({ namespace: 'bookmarkFolders' }),
        w = Object(f.a)(function (e) {
          return Object(l.a)(e)
        }),
        y = {
          deleteBookmarkFolder: Object(h.c)(g, 'deleteBookmarkFolder', {
            context: 'DELETE_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.deleteBookmarkFolder
            },
            getParams: function (e) {
              return { bookmarkFolderId: e }
            },
            getMeta: function (e) {
              return { entityId: e }
            },
            reducer: function (e, t) {
              var n = t.meta.entityId
              if (!e.entities[n]) return e
              var i = Object(v.a)(e.entities, [n])
              return r()(r()({}, e), {}, { entities: i })
            },
            mapResponseToActions: function (e, t, n) {
              return function (t) {
                var i = Object(m.q)(n())
                if (i && e && 'Done' === (null == t ? void 0 : t.bookmark_collection_delete))
                  return [w(i).removeItems([e])]
              }
            },
          }),
          editBookmarkFolder: Object(h.c)(g, 'editBookmarkFolder', {
            context: 'EDIT_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.editBookmarkFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.name
              return { bookmarkFolderId: e, name: n }
            },
            getMeta: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              return { entityId: e, name: t.name }
            },
            mapResponseToActions: function (e, t, n) {
              return function (t) {
                if (t) {
                  var i = null == t ? void 0 : t.bookmark_collection_update,
                    a = Object(m.q)(n())
                  if (a && e && i) return [w(a).injectItems([i.id])]
                }
              }
            },
            reducer: function (e, t) {
              var n = t.meta,
                i = n.entityId,
                o = n.name,
                s = e.entities[i]
              if (!s) return e
              var c = { name: o }
              return r()(r()({}, e), {}, { entities: r()(r()({}, e.entities), {}, a()({}, s.id, r()(r()({}, s), c))) })
            },
          }),
          removeTweetFromBookmarkFolder: Object(h.c)(g, 'removeTweetFromBookmarkFolder', {
            context: 'REMOVE_TWEET_FROM_BOOKMARK_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.removeTweetFromBookmarkFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.tweetId
              return { bookmarkFolderId: e, tweetId: n }
            },
            mapResponseToActions: function (e, t, n) {
              return function (i) {
                if (i) {
                  if ('Done' !== i.bookmark_collection_tweet_delete) return
                  if (!t.tweetId || !e) return []
                  var o = null == i ? void 0 : i.bookmark_collection_tweet_delete,
                    r = Object(m.q)(n())
                  if (r && e && o) {
                    var s = w(r)
                    return [Object(u.a)(e).removeTweets(a()({}, t.tweetId, !0)), s.injectItems([e])]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
          addTweetToBookmarkFolder: Object(h.c)(g, 'addTweetToBookmarkFolder', {
            context: 'BOOKMARK_TWEET_TO_FOLDER',
            getApiMethod: function (e) {
              return e.Bookmarks.bookmarkTweetToFolder
            },
            getParams: function (e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.tweetId
              return { bookmark_collection_id: e, tweet_id: n }
            },
            mapResponseToActions: function (e, t, n) {
              return function (i) {
                if (i) {
                  if ('Done' !== i.bookmark_collection_tweet_put) return
                  if (!t.tweetId || !e) return []
                  var a = null == i ? void 0 : i.bookmark_collection_tweet_put,
                    o = Object(m.q)(n())
                  if (o && e && a) {
                    var r = w(o)
                    return [
                      Object(u.a)(e).injectEntry(s.k({ id: t.tweetId, sortIndex: t.tweetId })),
                      r.injectItems([e]),
                    ]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
        },
        C = function () {
          return function (e, t, n) {
            var i = n.api
            return Object(d.b)(e, { request: i.Bookmarks.fetchBookmarkFoldersSlice, params: {} })(
              { actionTypes: _, context: 'FETCH_BOOKMARK_FOLDERS' },
              function (e) {
                if (e) {
                  var t = e.entities
                  return t ? [Object(c.c)(t)] : void 0
                }
              },
            )
          }
        },
        k = function (e) {
          return function (t, n, i) {
            var o = i.api
            return Object(d.b)(t, { request: o.Bookmarks.createBookmarkFolder, params: { name: e } })(
              { actionTypes: b, context: 'CREATE_BOOKMARK_FOLDER' },
              function (e) {
                if (e) {
                  var t = null == e ? void 0 : e.bookmark_collection_create,
                    i = Object(m.q)(n())
                  if (t && i) {
                    var o = w(i)
                    return [g.add(a()({}, t.id, t)), o.injectItems([t.id])]
                  }
                }
              },
            )
          }
        },
        T = function (e, t, n) {
          return function (i) {
            var o = w(n)
            return Promise.resolve(i([Object(u.a)(e).removeTweets(a()({}, t, !0)), o.injectItems([e])]))
          }
        },
        E = r()(r()(r()({}, g), y), {}, { customActionTypes: Object(h.d)(y) })
      t.b = p.a.register(E)
    },
    HwrL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return o
        })
      var i = n('RT39'),
        a = { like: 'like', retweet: 'retweet', share: 'share' },
        o = function (e, t) {
          return (
            !((null == t ? void 0 : t.displayType) !== i.a.SoftIntervention || null == t || !t.engagementNudge) &&
            (e === a.retweet || e === a.like || e === a.share)
          )
        }
    },
    I7xS: function (e, t, n) {
      'use strict'
      n('ERkP')
      t.a = {
        getEducationType: function (e, t) {
          switch (e) {
            case 'followers':
              return t ? 'conversationControlsFollowersCanEngage' : 'conversationControlsFollowersCannotEngage'
            case 'community':
              return t ? 'conversationControlsCommunityCanEngage' : 'conversationControlsCommunityCannotEngage'
            case 'by_invitation':
              return t ? 'conversationControlsByInvitationCanEngage' : 'conversationControlsByInvitationCannotEngage'
            case 'community_hidden_tweet':
              return 'communityHiddenTweetEducation'
            case 'community_tweet_member_removed':
              return 'communityRemovedMemberEducation'
            default:
              return
          }
        },
      }
    },
    IO7v: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var i = n('3XMw'),
        a = { defaultToast: { text: n.n(i).a.e639775e }, showToast: !0 }
    },
    IqLm: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M3.538 14.219l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72v-6.81c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18zm.95-1.61c.04-.09.16-.3.46-.3h4.47c.41 0 .75-.34.75-.75v-7.56c0-.28.22-.5.5-.5h2.66c.28 0 .5.22.5.5v7.56c0 .41.34.75.75.75h4.47c.29 0 .42.21.46.3.04.09.1.33-.1.54l-6.88 7.18c-.1.11-.24.17-.39.17-.15 0-.29-.06-.39-.16l-7.15-7.18c-.21-.21-.15-.45-.11-.55z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    JUsM: function (e, t, n) {
      'use strict'
      var i = n('ddV6'),
        a = n.n(i),
        o = (n('uFXj'), n('2G9S'), n('ERkP')),
        r = n.n(o),
        s = n('t62R'),
        c = n('rHpw'),
        l = n('shC7'),
        u = n('MWbm'),
        d = c.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              backgroundColor: e.colors.navigationBackground,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.large,
              borderColor: e.colors.gray50,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              justifyContent: 'space-between',
            },
            containerDown: { marginTop: e.spaces.space12 },
            containerUp: { marginTop: e.spaces.space20 },
            text: { flexShrink: 1, alignSelf: 'center', alignItems: 'flex-start' },
            actionsContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: e.spaces.space12 },
            arrowContainer: { position: 'absolute', display: 'flex', width: '100%', alignItems: 'center' },
            arrowDirectionUp: { top: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrowDirectionDown: { bottom: 'calc(-'.concat(e.spaces.space8, ' + ').concat(e.spaces.space1, ')') },
            arrow: {
              borderStyle: 'solid',
              borderTopWidth: 0,
              borderRightWidth: e.spaces.space1,
              borderBottomWidth: e.spaces.space1,
              borderLeftWidth: 0,
              borderColor: e.colors.gray50,
              width: e.spaces.space12,
              height: e.spaces.space12,
              backgroundColor: e.colors.navigationBackground,
            },
          }
        })
      t.a = function (e) {
        var t = e.containerRef,
          n = e.primaryAction,
          i = e.secondaryAction,
          o = e.text,
          c = r.a.useState(void 0),
          p = a()(c, 2),
          m = p[0],
          h = p[1],
          f = l.a.getConstants().isRTL,
          v = r.a.useRef(0),
          _ = r.a.useRef(0),
          b = (function () {
            if (null != t && t.current && m) {
              var e = t.current.getBoundingClientRect(),
                n = e.left,
                i = e.top,
                a = e.width
              v.current = i
              var o = n + a / 2 - m
              return { left: f ? void 0 : o, right: f ? o : void 0 }
            }
          })(),
          g = _.current < v.current,
          w = g ? [d.arrowDirectionDown] : [d.arrowDirectionUp],
          y = g
            ? f
              ? { transform: 'rotate(-45deg)' }
              : { transform: 'rotate(45deg)' }
            : f
            ? { transform: 'rotate(135deg)' }
            : { transform: 'rotate(-135deg)' },
          C = g ? [d.containerDown] : [d.containerUp]
        return r.a.createElement(
          u.a,
          {
            accessibilityRole: 'text',
            onLayout: function (e) {
              var t = e.nativeEvent.layout,
                n = t.left,
                i = t.top,
                a = t.width
              ;(_.current = i), h(n + a / 2)
            },
            style: [d.root, C],
          },
          null != t && t.current
            ? r.a.createElement(
                u.a,
                { style: [w, d.arrowContainer, b] },
                r.a.createElement(u.a, { style: [d.arrow, y] }),
              )
            : null,
          r.a.createElement(s.b, { style: d.text }, o),
          r.a.createElement(u.a, { style: d.actionsContainer }, n, i),
        )
      }
    },
    JWUO: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        a = n.n(i),
        o = n('m3Bd'),
        r = n.n(o),
        s = n('ERkP'),
        c = n.n(s),
        l = n('pjBI'),
        u = n('rHpw'),
        d = n('9qnF'),
        p = n('MWbm'),
        m = ['actionMenu', 'timestamp', 'userFollowIndicators', 'userLabel', 'userName'],
        h = u.a.create(function (e) {
          return {
            userNameRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start' },
            actionMenuContainer: { marginStart: e.spaces.space20 },
            userLabelRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: e.spaces.space2 },
            userInfo: { marginBottom: e.spaces.space2 },
          }
        })
      t.a = function (e) {
        var t = e.actionMenu,
          n = e.timestamp,
          i = e.userFollowIndicators,
          o = e.userLabel,
          s = e.userName,
          u = r()(e, m),
          f = c.a.createElement(
            p.a,
            { style: h.userInfo },
            c.a.createElement(
              p.a,
              { style: h.userNameRow },
              c.a.createElement(l.a, null, s, n),
              t ? c.a.createElement(p.a, { style: h.actionMenuContainer }, t) : null,
            ),
            o ? c.a.createElement(p.a, { style: h.userLabelRow }, o) : null,
            i ? c.a.createElement(p.a, { style: h.userLabelRow }, i) : null,
          )
        return c.a.createElement(d.a, a()({}, u, { usernameContent: f }))
      }
    },
    LWCC: function (e, t, n) {
      'use strict'
      var i = n('VrFO'),
        a = n.n(i),
        o = n('Y9Ll'),
        r = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('yH/f'), n('2G9S'), n('ho0z'), n('ERkP')),
        v = n.n(f),
        _ = n('Zejx'),
        b = n('rxPX'),
        g = n('0KEI'),
        w = Object(b.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('FOLLOW_TOPIC_BUTTON'),
              follow: _.a.follow,
              unfollow: _.a.unfollow,
            }
          })
          .withAnalytics(),
        y = n('CGyZ'),
        C = n('PbbS'),
        k = n('3XMw'),
        T = n.n(k),
        E = n('sUoZ'),
        S = n('Tp1h'),
        I = n('Jkc4'),
        x = n('TnY3'),
        A = Object.freeze({ follow: T.a.i79ab12a, following: T.a.d960b55b, unfollow: T.a.c0f56044 }),
        O = Object.freeze({
          follow: T.a.fcf51fe6,
          following: T.a.e9a90d71,
          unfollow: T.a.bf403715,
          confirmationHeadline: T.a.c9f08e28,
          confirmationSheetText: T.a.abc600f3,
        }),
        P = Object.freeze({
          follow: T.a.cd876e01,
          following: T.a.f2816e02,
          unfollow: T.a.f5b04fbb,
          confirmationHeadline: T.a.c481ae3f,
          confirmationSheetText: T.a.aa3ba123,
        }),
        L = Object.freeze({
          follow: T.a.e0e730b0,
          following: T.a.e0e730b0,
          unfollow: T.a.b1850062,
          confirmationHeadline: T.a.gd3f996f,
          confirmationSheetText: T.a.i36c403c,
        }),
        R = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_getDisplayMode', function (t) {
                return void 0 === e._getFollowButtonIcon(t) ? 'only-text' : 'icon-text'
              }),
              h()(c()(e), '_getFollowButtonIcon', function (e) {
                switch (e) {
                  case C.a.Favorite:
                  case C.a.Star:
                  case C.a.Interested:
                    return v.a.createElement(E.a, null)
                  case C.a.FollowTopic:
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_getFollowingButtonIcon', function (t) {
                return 'icon-text' === e._getDisplayMode(t) ? v.a.createElement(v.a.Fragment, null) : void 0
              }),
              h()(c()(e), '_getButtonText', function (t) {
                var n = e.props.topic
                switch (t) {
                  case C.a.FollowTopic:
                    return { follow: A.follow, unfollow: A.unfollow, following: A.following }
                  case C.a.Favorite:
                    return {
                      follow: P.follow,
                      unfollow: P.unfollow,
                      following: P.following,
                      confirmationHeadline: P.confirmationHeadline && P.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: P.confirmationSheetText,
                    }
                  case C.a.Star:
                    return {
                      follow: O.follow,
                      unfollow: O.unfollow,
                      following: O.following,
                      confirmationHeadline: O.confirmationHeadline && O.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: O.confirmationSheetText,
                    }
                  case C.a.Interested:
                    return {
                      follow: L.follow,
                      unfollow: L.unfollow,
                      following: L.following,
                      confirmationHeadline: L.confirmationHeadline && L.confirmationHeadline({ title: n.name }),
                      confirmationSheetText: L.confirmationSheetText,
                    }
                  case C.a.Default:
                  default:
                    return
                }
              }),
              h()(c()(e), '_handleOnFollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  i = t.educateOnFollow,
                  a = t.follow,
                  o = t.history,
                  r = t.topic
                a(r.id).catch(n()),
                  e._handleScribe('follow'),
                  i && r && o.push({ pathname: '/i/topics/education', state: { topicName: r.name } })
              }),
              h()(c()(e), '_handleOnUnfollow', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  i = t.topic
                ;(0, t.unfollow)(i.id).catch(n()), e._handleScribe('unfollow')
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.ariaDescribedBy,
                    i = t.isTransparent,
                    a = t.nativeID,
                    o = t.showRelationshipChangeConfirmation,
                    r = t.size,
                    s = t.style,
                    c = t.textMode,
                    l = t.topic,
                    u = l.following,
                    d = l.name
                  return v.a.createElement(I.a, { customText: d, displayMode: S.a.topic }, function (t) {
                    return v.a.createElement(y.a, {
                      ariaDescribedBy: n,
                      buttonIcons: {
                        followIcon: e._getFollowButtonIcon(c),
                        followingIcon: e._getFollowingButtonIcon(c),
                      },
                      buttonText: e._getButtonText(c),
                      displayMode: e._getDisplayMode(c),
                      isFollowing: u,
                      isTransparent: i,
                      name: d,
                      nativeID: a,
                      onFollow: t(e._handleOnFollow),
                      onUnfollow: t(e._handleOnUnfollow),
                      showRelationshipChangeConfirmation: o,
                      size: r,
                      style: s,
                      type: 'topic',
                      withConfirmationSheetText: u,
                    })
                  })
                },
              },
              {
                key: '_handleScribe',
                value: function (e) {
                  this.props.analytics.scribe({ element: 'topic', action: e })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(R, 'defaultProps', { size: 'small', textMode: C.a.Default })
      t.a = Object(x.a)(w(R))
    },
    'ML2/': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z',
              }),
              r.a.createElement('path', {
                d: 'M20.955 4.226l2.07-2.07c.293-.293.293-.768 0-1.06s-.768-.294-1.06 0l-2.07 2.07-2.07-2.07c-.294-.294-.77-.294-1.062 0s-.293.767 0 1.06l2.07 2.07-2.07 2.07c-.293.293-.293.768 0 1.06.146.147.338.22.53.22s.384-.072.53-.22l2.07-2.07 2.07 2.07c.146.147.338.22.53.22s.384-.072.53-.22c.293-.292.293-.767 0-1.06l-2.068-2.07z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    MQi0: function (e, t, n) {
      'use strict'
      function i(e) {
        return 3.62 * (e - 30) + 194
      }
      function a(e) {
        return 3 * (e - 8) + 25
      }
      t.a = {
        fromOrigamiTensionAndFriction: function (e, t) {
          return { stiffness: i(e), damping: a(t) }
        },
        fromBouncinessAndSpeed: function (e, t) {
          function n(e, t, n) {
            return (e - t) / (n - t)
          }
          function o(e, t, n) {
            return t + e * (n - t)
          }
          var r = n(e / 1.7, 0, 20)
          r = o(r, 0, 0.8)
          var s,
            c,
            l,
            u,
            d = o(n(t / 1.7, 0, 20), 0.5, 200),
            p =
              ((s = r),
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
          return { stiffness: i(d), damping: a(p) }
        },
      }
    },
    OOKO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('uFXj')
      var i = n('ERkP'),
        a = n.n(i),
        o = n('rHpw'),
        r = n('MWbm')
      function s(e) {
        var t = e.spacing
        return a.a.createElement(r.a, {
          accessibilityRole: 'separator',
          style: [c.divider, { marginVertical: null != t ? o.a.theme.spaces[t] : void 0 }],
        })
      }
      var c = o.a.create(function (e) {
        return { divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }
      })
    },
    Olb6: function (e, t, n) {
      'use strict'
      n('hBvt')
      var i = n('ERkP'),
        a = n.n(i),
        o = n('3XMw'),
        r = n.n(o),
        s = n('5cUs'),
        c = n('wwsH'),
        l = r.a.d9fd5570,
        u = { viewType: 'hidden_replies' }
      t.a = function (e) {
        var t = e.link,
          n = e.onPress
        return a.a.createElement(c.a, {
          Icon: s.a,
          accessibilityLabel: l,
          activeColor: 'primary',
          behavioralEventContext: u,
          link: t,
          onPress: n,
        })
      }
    },
    PbbS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      n('yH/f'), n('ERkP')
      var i = Object.freeze({
        Default: 'default',
        FollowTopic: 'follow',
        Star: 'star',
        Interested: 'interested',
        Favorite: 'favorite',
      })
    },
    'Q+qU': function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        a = n.n(i),
        o = n('ddV6'),
        r = n.n(o),
        s = n('ERkP'),
        c = n.n(s),
        l = n('t62R'),
        u = n('rHpw'),
        d = u.a.create(function (e) {
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
      t.a = function (e) {
        var t = c.a.useState(0),
          n = r()(t, 2),
          i = n[0],
          o = n[1],
          s = e.size || 'body',
          p = u.a.theme.fontSizesPx[s],
          m = { fontSize: p - i }
        return c.a.createElement(
          l.b,
          a()({}, e, {
            getTextOverflow: function (e) {
              e && p - i > u.a.theme.fontSizesPx.subtext3 && o(i + 1)
            },
            numberOfLines: 1,
            style: [e.style, m, d.apptext],
          }),
        )
      }
    },
    R7KY: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var i = n('ERkP'),
        a = n.n(i),
        o = n('TIdA'),
        r = n('jhWN'),
        s = o.a.createLayoutCache()
      function c(e) {
        var t = e.nativeID,
          n = e.onClick,
          i = e.onHoverCardScreenNameClick,
          o = e.promotedContent,
          c = e.screenName,
          l = e.uri,
          u = e.withHoverCard,
          d = void 0 === u || u,
          p = e.withLink,
          m = void 0 === p || p
        return a.a.createElement(r.a, {
          imageLayoutCache: s,
          nativeID: t,
          onClick: n,
          onHoverCardScreenNameClick: i,
          promotedContent: o,
          screenName: c,
          size: 'xxLarge',
          uri: l,
          withHoverCard: d,
          withLink: m,
        })
      }
    },
    Sksh: function (e, t, n) {
      'use strict'
      var i = n('VrFO'),
        a = n.n(i),
        o = n('Y9Ll'),
        r = n.n(o),
        s = n('KEM+'),
        c = n.n(s),
        l = (n('+KXO'), n('849X'), n('TJCb'), n('SrIh')),
        u = n('M0jS'),
        d = n('+d3d'),
        p = n('VY6S'),
        m = (function () {
          function e() {
            var t = this
            a()(this, e),
              c()(this, 'usersInApp', {}),
              c()(
                this,
                '_throttledInitialFetch',
                Object(d.a)(function () {
                  t.store.dispatch(u.b.fetchManyIfNeeded(Object.keys(t.usersInApp)))
                }, 1500),
              )
          }
          return (
            r()(e, [
              {
                key: 'init',
                value: function (e) {
                  this.store = e
                },
              },
              {
                key: 'registerUserInApp',
                value: function (e) {
                  Object.keys(this.usersInApp).length > 50 &&
                    ((this.usersInApp = {}),
                    Object(l.a)(new Error('Registered users in app has exceeded 50'), { level: 'warning' })),
                    this.usersInApp[e]
                      ? (this.usersInApp[e] = this.usersInApp[e] + 1)
                      : ((this.usersInApp[e] = 1), Object(p.a)(this._throttledInitialFetch(), 100))
                },
              },
              {
                key: 'deregisterUserInApp',
                value: function (e) {
                  this.usersInApp[e] && this.usersInApp[e] > 1
                    ? (this.usersInApp[e] = this.usersInApp[e] - 1)
                    : delete this.usersInApp[e]
                },
              },
            ]),
            e
          )
        })()
      t.a = new m()
    },
    TW8A: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    TuTd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      }),
        n.d(t, 'b', function () {
          return m
        })
      var i = n('KEM+'),
        a = n.n(i),
        o = n('yiKp'),
        r = n.n(o),
        s = (n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('/kEJ')),
        c = n('Ssj5'),
        l = 'liveTweetCounts',
        u = 'UPDATE',
        d = {}
      c.a.register(
        a()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case s.a:
              var n,
                i = null === (n = t.payload) || void 0 === n ? void 0 : n.tweets
              if (i) {
                var o = r()({}, e)
                return (
                  Object.keys(i).forEach(function (e) {
                    o[e] && delete o[e]
                  }),
                  o
                )
              }
              return e
            case u:
              return r()(
                r()({}, e),
                {},
                a()({}, t.payload.tweetId, r()(r()({}, e[t.payload.tweetId]), t.payload.liveCounts)),
              )
            default:
              return e
          }
        }),
      )
      var p = function (e, t) {
          return e.liveTweetCounts[t]
        },
        m = function (e) {
          return function (t, n) {
            return t(
              (function (e) {
                return { payload: e, type: u }
              })(e),
            )
          }
        }
    },
    Wk1j: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      }),
        n.d(t, 'b', function () {
          return S
        })
      var i = n('ERkP'),
        a = n.n(i),
        o = n('3XMw'),
        r = n.n(o),
        s = n('wD1h'),
        c = n('wwsH'),
        l = n('yVEN'),
        u = n('jlPL'),
        d = n('mjJ+'),
        p = n('TW8A'),
        m = r.a.d6c85149,
        h = r.a.f3bbbb87,
        f = r.a.c9d7235d,
        v = { viewType: 'quote' },
        _ = function (e) {
          return { viewType: 'retweet', viewState: { type: 'toggleable', toggledTo: e } }
        }
      function b(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          c,
          l,
          b,
          g,
          w,
          y,
          C,
          k,
          T,
          E =
            ((n = (t = e).excludeRetweetAction),
            (i = void 0 !== n && n),
            (o = t.excludeRetweetWithCommentAction),
            (r = void 0 !== o && o),
            (s = t.isRetweeted),
            (c = t.onMenuCancel),
            (l = t.onQuoteTweetActionSelect),
            (b = t.onRetweetActionSelect),
            (g = t.onUnretweetActionSelect),
            (w = t.retweetActionSubText),
            (y = t.retweetWithCommentLink),
            (C = t.testIDs),
            (k = null == C ? void 0 : C.retweetConfirm),
            (T = null == C ? void 0 : C.unretweetConfirm),
            a.a.useMemo(
              function () {
                var e = []
                return (
                  s ||
                    i ||
                    e.push({
                      behavioralEventContext: _(!0),
                      text: m,
                      subText: w,
                      onClick: function () {
                        null == c || c(), null == b || b()
                      },
                      testID: k,
                      Icon: u.a,
                    }),
                  s &&
                    e.push({
                      behavioralEventContext: _(!1),
                      text: h,
                      onClick: function () {
                        null == c || c(), null == g || g()
                      },
                      testID: T,
                      Icon: u.a,
                    }),
                  r ||
                    e.push({
                      behavioralEventContext: v,
                      text: f,
                      onClick: function () {
                        null == c || c(), null == l || l()
                      },
                      Icon: p.a,
                      link: y,
                    }),
                  e
                )
              },
              [i, r, s, c, l, b, g, w, y, k, T],
            ))
        return a.a.createElement(d.a, {
          description: e.actionMenuDescription,
          items: E,
          onCloseRequested: function () {
            var t
            null === (t = e.onMenuCancel) || void 0 === t || t.call(e)
          },
        })
      }
      var g = r.a.d6c85149,
        w = r.a.f3bbbb87,
        y = r.a.g23ce6f0,
        C = r.a.i769b0ab,
        k = r.a.ea9a1f0c,
        T = { viewType: 'retweet' },
        E = { RETWEET: 'retweet', UNRETWEET: 'unretweet', QUOTE: 'quote' }
      function S(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          i = void 0 === n ? 'green500' : n,
          o = e.color,
          r = e.count,
          d = e.enableActionMenu,
          p = void 0 !== d && d,
          m = e.enableKeyboardShortcuts,
          h = e.excludeRetweetAction,
          f = e.excludeRetweetWithCommentAction,
          v = e.iconSize,
          _ = e.isDisabled,
          E = e.isFaded,
          S = e.isPresentational,
          I = e.isRetweeted,
          x = e.onMenuCancel,
          A = e.onPress,
          O = e.onQuoteTweetActionSelect,
          P = e.onRetweetActionSelect,
          L = e.onUnretweetActionSelect,
          R = e.retweetActionSubText,
          N = e.retweetWithCommentLink,
          D = e.style,
          M = e.testIDs,
          j = e.withCount && 'number' == typeof r,
          F = I ? y : g
        return (
          j && (F = I ? k({ count: r }) : C({ count: r })),
          a.a.createElement(c.a, {
            ActiveIcon: l.a,
            Icon: u.a,
            accessibilityLabel: F,
            activeColor: i,
            behavioralEventContext: T,
            color: o,
            count: r,
            enableKeyboardShortcuts: m,
            hoverLabel: { label: I ? w : g },
            iconSize: v,
            isActive: I,
            isDisabled: _,
            isFaded: E,
            isPresentational: S,
            keyboardShortcut: s.a.shortcuts.retweet,
            onPress: A,
            renderMenu: p
              ? function (e) {
                  return a.a.createElement(b, {
                    actionMenuDescription: t,
                    excludeRetweetAction: h,
                    excludeRetweetWithCommentAction: f,
                    isRetweeted: I,
                    onMenuCancel: function () {
                      e(), null == x || x()
                    },
                    onQuoteTweetActionSelect: O,
                    onRetweetActionSelect: P,
                    onUnretweetActionSelect: L,
                    retweetActionSubText: R,
                    retweetWithCommentLink: N,
                    testIDs: {
                      retweetConfirm: null == M ? void 0 : M.retweetConfirm,
                      unretweetConfirm: null == M ? void 0 : M.unretweetConfirm,
                    },
                  })
                }
              : void 0,
            style: D,
            testID: I ? (null == M ? void 0 : M.unretweet) : null == M ? void 0 : M.retweet,
            withCount: j,
          })
        )
      }
    },
    WrBE: function (e, t, n) {
      'use strict'
      var i = n('4LIG'),
        a = n('ERkP'),
        o = n('sIe2'),
        r = n('9Ulv'),
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
            if (t instanceof r.a) t.__makeNative(), i.push({ nativeEventPath: n, animatedValueTag: t.__getNativeTag() })
            else if ('object' == typeof t) for (var a in t) e(t[a], n.concat(a))
          })(n[0].nativeEvent, [])
        var a = Object(c.a)(e)
        return (
          null != a &&
            i.forEach(function (e) {
              s.a.API.addAnimatedEventToView(a, t, e)
            }),
          {
            detach: function () {
              null != a &&
                i.forEach(function (e) {
                  s.a.API.removeAnimatedEventFromView(a, t, e.animatedValueTag)
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
                var a = function e(t, n, i) {
                  if (t instanceof r.a) 'number' == typeof n && t.setValue(n)
                  else if ('object' == typeof t) for (var a in t) e(t[a], n[a], a)
                }
                e._argMapping.forEach(function (e, t) {
                  a(e, n[t], 'arg' + t)
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
        h = n('BR0S')
      function f(e, t) {
        return (f =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var v = (function (e) {
          var t, n
          function i(t) {
            var n
            return ((n = e.call(this) || this)._transforms = t), n
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), f(t, n)
          var a = i.prototype
          return (
            (a.__makeNative = function () {
              this._transforms.forEach(function (e) {
                for (var t in e) {
                  var n = e[t]
                  n instanceof m.a && n.__makeNative()
                }
              }),
                e.prototype.__makeNative.call(this)
            }),
            (a.__getValue = function () {
              return this._transforms.map(function (e) {
                var t = {}
                for (var n in e) {
                  var i = e[n]
                  i instanceof m.a ? (t[n] = i.__getValue()) : (t[n] = i)
                }
                return t
              })
            }),
            (a.__getAnimatedValue = function () {
              return this._transforms.map(function (e) {
                var t = {}
                for (var n in e) {
                  var i = e[n]
                  i instanceof m.a ? (t[n] = i.__getAnimatedValue()) : (t[n] = i)
                }
                return t
              })
            }),
            (a.__attach = function () {
              var e = this
              this._transforms.forEach(function (t) {
                for (var n in t) {
                  var i = t[n]
                  i instanceof m.a && i.__addChild(e)
                }
              })
            }),
            (a.__detach = function () {
              var t = this
              this._transforms.forEach(function (e) {
                for (var n in e) {
                  var i = e[n]
                  i instanceof m.a && i.__removeChild(t)
                }
              }),
                e.prototype.__detach.call(this)
            }),
            (a.__getNativeConfig = function () {
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
        })(h.a),
        _ = n('YTr2')
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
                w(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function w(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function y(e, t) {
        return (y =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var C = (function (e) {
        var t, n
        function i(t) {
          var n
          return (
            (n = e.call(this) || this),
            (t = Object(_.a)(t) || {}).transform && (t = g(g({}, t), {}, { transform: new v(t.transform) })),
            (n._style = t),
            n
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), y(t, n)
        var a = i.prototype
        return (
          (a._walkStyleAndGetValues = function (e) {
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
          (a.__getValue = function () {
            return this._walkStyleAndGetValues(this._style)
          }),
          (a._walkStyleAndGetAnimatedValues = function (e) {
            var t = {}
            for (var n in e) {
              var i = e[n]
              i instanceof m.a
                ? (t[n] = i.__getAnimatedValue())
                : i && !Array.isArray(i) && 'object' == typeof i && (t[n] = this._walkStyleAndGetAnimatedValues(i))
            }
            return t
          }),
          (a.__getAnimatedValue = function () {
            return this._walkStyleAndGetAnimatedValues(this._style)
          }),
          (a.__attach = function () {
            for (var e in this._style) {
              var t = this._style[e]
              t instanceof m.a && t.__addChild(this)
            }
          }),
          (a.__detach = function () {
            for (var t in this._style) {
              var n = this._style[t]
              n instanceof m.a && n.__removeChild(this)
            }
            e.prototype.__detach.call(this)
          }),
          (a.__makeNative = function () {
            for (var t in this._style) {
              var n = this._style[t]
              n instanceof m.a && n.__makeNative()
            }
            e.prototype.__makeNative.call(this)
          }),
          (a.__getNativeConfig = function () {
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
      })(h.a)
      function k(e, t) {
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
            ? k(Object(n), !0).forEach(function (t) {
                E(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function E(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function S(e, t) {
        return (S =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var I = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            (i = e.call(this) || this),
            t.style && (t = T(T({}, t), {}, { style: new C(t.style) })),
            (i._props = t),
            (i._callback = n),
            i.__attach(),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), S(t, n)
        var a = i.prototype
        return (
          (a.__getValue = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof m.a
                ? (!n.__isNative || n instanceof C) && (e[t] = n.__getValue())
                : (e[t] = n instanceof p ? n.__getHandler() : n)
            }
            return e
          }),
          (a.__getAnimatedValue = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof m.a && (e[t] = n.__getAnimatedValue())
            }
            return e
          }),
          (a.__attach = function () {
            for (var e in this._props) {
              var t = this._props[e]
              t instanceof m.a && t.__addChild(this)
            }
          }),
          (a.__detach = function () {
            for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
              var n = this._props[t]
              n instanceof m.a && n.__removeChild(this)
            }
            e.prototype.__detach.call(this)
          }),
          (a.update = function () {
            this._callback()
          }),
          (a.__makeNative = function () {
            if (!this.__isNative) {
              for (var e in ((this.__isNative = !0), this._props)) {
                var t = this._props[e]
                t instanceof m.a && t.__makeNative()
              }
              this._animatedView && this.__connectAnimatedView()
            }
          }),
          (a.setNativeView = function (e) {
            this._animatedView !== e && ((this._animatedView = e), this.__isNative && this.__connectAnimatedView())
          }),
          (a.__connectAnimatedView = function () {
            u()(this.__isNative, 'Expected node to be marked as "native"')
            var e = Object(c.a)(this._animatedView)
            u()(null != e, 'Unable to locate attached view in the native tree'),
              s.a.API.connectAnimatedNodeToView(this.__getNativeTag(), e)
          }),
          (a.__disconnectAnimatedView = function () {
            u()(this.__isNative, 'Expected node to be marked as "native"')
            var e = Object(c.a)(this._animatedView)
            u()(null != e, 'Unable to locate attached view in the native tree'),
              s.a.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), e)
          }),
          (a.__restoreDefaultValues = function () {
            this.__isNative && s.a.API.restoreDefaultValues(this.__getNativeTag())
          }),
          (a.__getNativeConfig = function () {
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
      var x = function (e) {
        var t = e.getForwardedRef,
          n = e.setLocalRef
        return function (e) {
          var i = t()
          n(e), 'function' == typeof i ? i(e) : 'object' == typeof i && null != i && (i.current = e)
        }
      }
      function A() {
        return (A =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function O(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(n), !0).forEach(function (t) {
                L(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function L(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function R(e, t) {
        if (null == e) return {}
        var n,
          i,
          a = {},
          o = Object.keys(e)
        for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n])
        return a
      }
      function N(e, t) {
        return (N =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var D = 1
      var M = function (e, t) {
        u()(
          'function' != typeof e || (e.prototype && e.prototype.isReactComponent),
          '`createAnimatedComponent` does not support stateless functional components; use a class component instead.',
        )
        var n = (function (n) {
          var i, o
          function r() {
            for (var e, t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a]
            return (
              ((e = n.call.apply(n, [this].concat(i)) || this)._invokeAnimatedPropsCallbackOnMount = !1),
              (e._eventDetachers = []),
              (e._animatedComponentId = D++ + ':animatedComponent'),
              (e._isFabric = function () {
                var t, n, i, a, o, r
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
                        null == (a = i.stateNode)
                          ? void 0
                          : a.canonical)) ||
                    (null != e._component.getScrollResponder &&
                      null != e._component.getScrollResponder() &&
                      null != e._component.getScrollResponder().getNativeScrollRef &&
                      null != e._component.getScrollResponder().getNativeScrollRef() &&
                      null !=
                        (null == (o = e._component.getScrollResponder().getNativeScrollRef()._internalInstanceHandle) ||
                        null == (r = o.stateNode)
                          ? void 0
                          : r.canonical)))
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
              (e._setComponentRef = x({
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
          ;(o = n), ((i = r).prototype = Object.create(o.prototype)), (i.prototype.constructor = i), N(i, o)
          var c = r.prototype
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
              for (var a in this.props) i(a)
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
                ((this._propsAnimated = new I(e, this._animatedPropsCallback)),
                t && (t.__restoreDefaultValues(), t.__detach()))
            }),
            (c.render = function () {
              var n,
                i,
                o = this._propsAnimated.__getValue() || {},
                r = o.style,
                s = void 0 === r ? {} : r,
                c = R(o, ['style']),
                l = this.props.passthroughAnimatedPropExplicitValues || {},
                u = l.style,
                d = void 0 === u ? {} : u,
                p = R(l, ['style']),
                m = P(P({}, s), d),
                h =
                  (null == this._component && (!1 === (null == t ? void 0 : t.collapsable) || !0 !== c.collapsable)) ||
                  this._isFabric(),
                f = (
                  null !== (n = c.collapsable) && void 0 !== n
                    ? n
                    : this._propsAnimated.__isNative || h || !1 === (null == t ? void 0 : t.collapsable)
                )
                  ? { nativeID: null !== (i = c.nativeID) && void 0 !== i ? i : 'animatedComponent', collapsable: !1 }
                  : {}
              return a.createElement(e, A({}, c, p, f, { style: m, ref: this._setComponentRef }))
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
            r
          )
        })(a.Component)
        return a.forwardRef(function (e, t) {
          return a.createElement(n, A({}, e, null == t ? null : { forwardedRef: t }))
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
      var F = M(
          a.forwardRef(function (e, t) {
            return a.createElement(o.a, j({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
        ),
        B = M(n('U+bB').a, { collapsable: !1 }),
        U = n('Iok7')
      function V() {
        return (V =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      var H = M(
          a.forwardRef(function (e, t) {
            return a.createElement(U.a, V({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
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
      function K(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return Q(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Q(e, t)
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
      function Q(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
      }
      function X(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                J(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function J(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function Y(e) {
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
          for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this)._getItem = function (e, t, n) {
              if (!t) return null
              for (var i = n - 1, a = 0; a < t.length; a++) {
                var o = t[a],
                  r = o.data,
                  s = e.getItemCount(r)
                if (-1 === i || i === s) return o
                if (i < s) return e.getItem(r, i)
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
              return G(G({}, e), {}, { index: n.index, key: i(e.item, n.index), section: n.section })
            }),
            (t._onViewableItemsChanged = function (e) {
              var n = e.viewableItems,
                i = e.changed,
                a = t.props.onViewableItemsChanged
              null != a &&
                a({
                  viewableItems: n.map(t._convertViewable, Y(t)).filter(Boolean),
                  changed: i.map(t._convertViewable, Y(t)).filter(Boolean),
                })
            }),
            (t._renderItem = function (e) {
              return function (n) {
                var i = n.item,
                  o = n.index,
                  r = t._subExtractor(o)
                if (!r) return null
                var s = r.index
                if (null == s) {
                  var c = r.section
                  if (!0 === r.header) {
                    var l = t.props.renderSectionHeader
                    return l ? l({ section: c }) : null
                  }
                  var d = t.props.renderSectionFooter
                  return d ? d({ section: c }) : null
                }
                var p = r.section.renderItem || t.props.renderItem,
                  m = t._getSeparatorComponent(o, r, e)
                return (
                  u()(p, 'no renderItem!'),
                  a.createElement(te, {
                    SeparatorComponent: m,
                    LeadingSeparatorComponent: 0 === s ? t.props.SectionSeparatorComponent : void 0,
                    cellKey: r.key,
                    index: s,
                    item: i,
                    leadingItem: r.leadingItem,
                    leadingSection: r.leadingSection,
                    onUpdateSeparator: t._onUpdateSeparator,
                    prevCellKey: (t._subExtractor(o - 1) || {}).key,
                    ref: function (e) {
                      t._cellRefs[r.key] = e
                    },
                    renderItem: p,
                    section: r.section,
                    trailingItem: r.trailingItem,
                    trailingSection: r.trailingSection,
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
              var a = G(G({}, e), {}, { viewOffset: i, index: t })
              this._listRef.scrollToIndex(a)
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
                      a = {},
                      o = Object.keys(e)
                    for (i = 0; i < o.length; i++) (n = o[i]), t.indexOf(n) >= 0 || (a[n] = e[n])
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
                o = this.props.ListHeaderComponent ? 1 : 0,
                r = this.props.stickySectionHeadersEnabled ? [] : void 0,
                s = 0,
                c = K(this.props.sections);
              !(e = c()).done;

            ) {
              var l = e.value
              null != r && r.push(s + o), (s += 2), (s += this.props.getItemCount(l.data))
            }
            var u = this._renderItem(s)
            return a.createElement(
              W.a,
              q({}, i, {
                keyExtractor: this._keyExtractor,
                stickyHeaderIndices: r,
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
              var t = e, n = this.props, i = n.getItem, a = n.getItemCount, o = n.keyExtractor, r = n.sections, s = 0;
              s < r.length;
              s++
            ) {
              var c = r[s],
                l = c.data,
                u = c.key || String(s)
              if (!((t -= 1) >= a(l) + 1))
                return -1 === t
                  ? { section: c, key: u + ':header', index: null, header: !0, trailingSection: r[s + 1] }
                  : t === a(l)
                  ? { section: c, key: u + ':footer', index: null, header: !1, trailingSection: r[s + 1] }
                  : {
                      section: c,
                      key: u + ':' + (c.keyExtractor || o)(i(l, t), t),
                      index: t,
                      leadingItem: i(l, t - 1),
                      leadingSection: r[s - 1],
                      trailingItem: i(l, t + 1),
                      trailingSection: r[s + 1],
                    }
              t -= a(l) + 1
            }
          }),
          (n._getSeparatorComponent = function (e, t, n) {
            if (!(t = t || this._subExtractor(e))) return null
            var i = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
              a = this.props.SectionSeparatorComponent,
              o = e === n - 1,
              r = t.index === this.props.getItemCount(t.section.data) - 1
            return a && r ? a : !i || r || o ? null : i
          }),
          t
        )
      })(a.PureComponent)
      ee.defaultProps = G(G({}, W.a.defaultProps), {}, { data: [] })
      var te = (function (e) {
          function t() {
            for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
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
                    a = i.LeadingSeparatorComponent,
                    o = i.cellKey,
                    r = i.prevCellKey
                  'leading' === e && null != a
                    ? t.setState(function (e) {
                        return { leadingSeparatorProps: G(G({}, e.leadingSeparatorProps), n) }
                      })
                    : t.props.onUpdateSeparator(('leading' === e && r) || o, n)
                },
              }),
              t
            )
          }
          Z(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return {
                separatorProps: G(
                  G({}, t.separatorProps),
                  {},
                  {
                    leadingItem: e.item,
                    leadingSection: e.leadingSection,
                    section: e.section,
                    trailingItem: e.trailingItem,
                    trailingSection: e.trailingSection,
                  },
                ),
                leadingSeparatorProps: G(
                  G({}, t.leadingSeparatorProps),
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
                return { separatorProps: G(G({}, t.separatorProps), e) }
              })
            }),
            (n.render = function () {
              var e = this.props,
                t = e.LeadingSeparatorComponent,
                n = e.SeparatorComponent,
                i = e.item,
                o = e.index,
                r = e.section,
                s = e.inverted,
                c = this.props.renderItem({ item: i, index: o, section: r, separators: this._separators }),
                l = null != t && a.createElement(t, this.state.leadingSeparatorProps),
                u = null != n && a.createElement(n, this.state.separatorProps)
              return l || u ? a.createElement(z.a, null, !1 === s ? l : u, c, !1 === s ? u : l) : c
            }),
            t
          )
        })(a.Component),
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
      function ae(e, t) {
        return (ae =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function oe(e, t) {
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
      function re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? oe(Object(n), !0).forEach(function (t) {
                se(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : oe(Object(n)).forEach(function (t) {
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
      var ce = re(re({}, ne.defaultProps), {}, { stickySectionHeadersEnabled: 'ios' === i.a.OS }),
        le = (function (e) {
          var t, n
          function i() {
            for (var t, n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this)._captureRef = function (e) {
                t._wrapperListRef = e
              }),
              t
            )
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), ae(t, n)
          var o = i.prototype
          return (
            (o.scrollToLocation = function (e) {
              null != this._wrapperListRef && this._wrapperListRef.scrollToLocation(e)
            }),
            (o.recordInteraction = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.recordInteraction()
            }),
            (o.flashScrollIndicators = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.flashScrollIndicators()
            }),
            (o.getScrollResponder = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (e) return e.getScrollResponder()
            }),
            (o.getScrollableNode = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (e) return e.getScrollableNode()
            }),
            (o.setNativeProps = function (e) {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              t && t.setNativeProps(e)
            }),
            (o.render = function () {
              return a.createElement(
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
        })(a.PureComponent)
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
      var pe = M(
          a.forwardRef(function (e, t) {
            return a.createElement(ue, de({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
        ),
        me = M(n('+/1j').a, { collapsable: !1 }),
        he = M(z.a, { collapsable: !0 }),
        fe = n('FGdj')
      function ve(e, t) {
        return (ve =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var _e = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new r.a(t) : t),
            (i._b = 'number' == typeof n ? new r.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), ve(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return this._a.__getValue() + this._b.__getValue()
          }),
          (a.interpolate = function (e) {
            return new fe.a(this, e)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'addition', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
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
          var a
          return (
            ((a = e.call(this) || this)._a = t),
            (a._min = n),
            (a._max = i),
            (a._value = a._lastValue = a._a.__getValue()),
            a
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), be(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.interpolate = function (e) {
            return new fe.a(this, e)
          }),
          (a.__getValue = function () {
            var e = this._a.__getValue(),
              t = e - this._lastValue
            return (
              (this._lastValue = e),
              (this._value = Math.min(Math.max(this._value + t, this._min), this._max)),
              this._value
            )
          }),
          (a.__attach = function () {
            this._a.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'diffclamp', input: this._a.__getNativeTag(), min: this._min, max: this._max }
          }),
          i
        )
      })(h.a)
      function we(e, t) {
        return (we =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var ye = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._warnedAboutDivideByZero = !1),
            0 === n || (n instanceof m.a && n.__getValue()),
            (i._a = 'number' == typeof t ? new r.a(t) : t),
            (i._b = 'number' == typeof n ? new r.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), we(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            var e = this._a.__getValue(),
              t = this._b.__getValue()
            return 0 === t
              ? (this._warnedAboutDivideByZero || (this._warnedAboutDivideByZero = !0), 0)
              : ((this._warnedAboutDivideByZero = !1), e / t)
          }),
          (a.interpolate = function (e) {
            return new fe.a(this, e)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'division', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
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
          return ((i = e.call(this) || this)._a = t), (i._modulus = n), i
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Ce(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus
          }),
          (a.interpolate = function (e) {
            return new fe.a(this, e)
          }),
          (a.__attach = function () {
            this._a.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'modulus', input: this._a.__getNativeTag(), modulus: this._modulus }
          }),
          i
        )
      })(h.a)
      function Te(e, t) {
        return (Te =
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
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new r.a(t) : t),
            (i._b = 'number' == typeof n ? new r.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Te(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return this._a.__getValue() * this._b.__getValue()
          }),
          (a.interpolate = function (e) {
            return new fe.a(this, e)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'multiplication', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
      function Se(e, t) {
        return (Se =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Ie = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new r.a(t) : t),
            (i._b = 'number' == typeof n ? new r.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Se(t, n)
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (a.__getValue = function () {
            return this._a.__getValue() - this._b.__getValue()
          }),
          (a.interpolate = function (e) {
            return new fe.a(this, e)
          }),
          (a.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (a.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (a.__getNativeConfig = function () {
            return { type: 'subtraction', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(h.a)
      function xe(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? xe(Object(n), !0).forEach(function (t) {
                Oe(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function Pe(e, t) {
        return (Pe =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Le = (function (e) {
          var t, n
          function i(t, n, i, a, o) {
            var r
            return (
              ((r = e.call(this) || this)._value = t),
              (r._parent = n),
              (r._animationClass = i),
              (r._animationConfig = a),
              (r._useNativeDriver = Object(s.c)(a)),
              (r._callback = o),
              r.__attach(),
              r
            )
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Pe(t, n)
          var a = i.prototype
          return (
            (a.__makeNative = function () {
              ;(this.__isNative = !0),
                this._parent.__makeNative(),
                e.prototype.__makeNative.call(this),
                this._value.__makeNative()
            }),
            (a.__getValue = function () {
              return this._parent.__getValue()
            }),
            (a.__attach = function () {
              this._parent.__addChild(this), this._useNativeDriver && this.__makeNative()
            }),
            (a.__detach = function () {
              this._parent.__removeChild(this), e.prototype.__detach.call(this)
            }),
            (a.update = function () {
              this._value.animate(
                new this._animationClass(
                  Ae(Ae({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() }),
                ),
                this._callback,
              )
            }),
            (a.__getNativeConfig = function () {
              var e = new this._animationClass(
                Ae(Ae({}, this._animationConfig), {}, { toValue: void 0 }),
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
        Re = n('/x6e'),
        Ne = n('BtOK'),
        De = n('jydp'),
        Me = n('e6X4')
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
      function Fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                Be(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Be(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var Ue = function (e, t) {
          return e && t.onComplete
            ? function () {
                t.onComplete && t.onComplete.apply(t, arguments), e && e.apply(void 0, arguments)
              }
            : e || t.onComplete
        },
        Ve = function (e, t, n) {
          if (e instanceof Re.a) {
            var i = Fe({}, t),
              a = Fe({}, t)
            for (var o in t) {
              var r = t[o],
                s = r.x,
                c = r.y
              void 0 !== s && void 0 !== c && ((i[o] = s), (a[o] = c))
            }
            var l = n(e.x, i),
              u = n(e.y, a)
            return We([l, u], { stopTogether: !1 })
          }
          return null
        },
        He = function e(t, n) {
          var i = function (e, t, n) {
            n = Ue(n, t)
            var i = e,
              a = t
            i.stopTracking(),
              t.toValue instanceof m.a ? i.track(new Le(i, t.toValue, Me.a, a, n)) : i.animate(new Me.a(a), n)
          }
          return (
            Ve(t, n, e) || {
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
                var a = Fe(Fe({}, n), {}, { iterations: e })
                i(t, a)
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
                : e[t].start(function i(a) {
                    a.finished && ++t !== e.length ? e[t].start(i) : n && n(a)
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
            a = !(t && !1 === t.stopTogether),
            o = {
              start: function (t) {
                n !== e.length
                  ? e.forEach(function (r, s) {
                      var c = function (r) {
                        if (((i[s] = !0), ++n === e.length)) return (n = 0), void (t && t(r))
                        !r.finished && a && o.stop()
                      }
                      r ? r.start(c) : c({ finished: !0 })
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
          return o
        },
        qe = function (e) {
          return He(new r.a(0), { toValue: 0, delay: e, duration: 0, useNativeDriver: !1 })
        }
      var Ke = {
        Value: r.a,
        ValueXY: Re.a,
        Interpolation: fe.a,
        Node: m.a,
        decay: function e(t, n) {
          var i = function (e, t, n) {
            n = Ue(n, t)
            var i = e,
              a = t
            i.stopTracking(), i.animate(new Ne.a(a), n)
          }
          return (
            Ve(t, n, e) || {
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
                var a = Fe(Fe({}, n), {}, { iterations: e })
                i(t, a)
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
            n = Ue(n, t)
            var i = e,
              a = t
            i.stopTracking(),
              t.toValue instanceof m.a ? i.track(new Le(i, t.toValue, De.a, a, n)) : i.animate(new De.a(a), n)
          }
          return (
            Ve(t, n, e) || {
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
                var a = Fe(Fe({}, n), {}, { iterations: e })
                i(t, a)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        add: function (e, t) {
          return new _e(e, t)
        },
        subtract: function (e, t) {
          return new Ie(e, t)
        },
        divide: function (e, t) {
          return new ye(e, t)
        },
        multiply: function (e, t) {
          return new Ee(e, t)
        },
        modulo: function (e, t) {
          return new ke(e, t)
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
            a = void 0 === i ? -1 : i,
            o = n.resetBeforeIteration,
            r = void 0 === o || o,
            s = !1,
            c = 0
          return {
            start: function (t) {
              e && 0 !== a
                ? e._isUsingNativeDriver()
                  ? e._startNativeLoop(a)
                  : (function n(i) {
                      void 0 === i && (i = { finished: !0 }),
                        s || c === a || !1 === i.finished ? t && t(i) : (c++, r && e.reset(), e.start(n))
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
        createAnimatedComponent: M,
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
        __PropsOnlyForTests: I,
      }
      function Qe(e, t) {
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
      function Xe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Qe(Object(n), !0).forEach(function (t) {
                Ge(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ge(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var Je = {
          start: function () {},
          stop: function () {},
          reset: function () {},
          _startNativeLoop: function () {},
          _isUsingNativeDriver: function () {
            return !1
          },
        },
        Ye = {
          Value: r.a,
          ValueXY: Re.a,
          Interpolation: fe.a,
          Node: m.a,
          decay: function (e, t) {
            return Je
          },
          timing: function (e, t) {
            var n = e
            return Xe(
              Xe({}, Je),
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
            return Xe(
              Xe({}, Je),
              {},
              {
                start: function (e) {
                  n.setValue(t.toValue), e && e({ finished: !0 })
                },
              },
            )
          },
          add: Ke.add,
          subtract: Ke.subtract,
          divide: Ke.divide,
          multiply: Ke.multiply,
          modulo: Ke.modulo,
          diffClamp: Ke.diffClamp,
          delay: function (e) {
            return Je
          },
          sequence: function (e) {
            return Je
          },
          parallel: function (e, t) {
            return Je
          },
          stagger: function (e, t) {
            return Je
          },
          loop: function (e, t) {
            ;(void 0 === t ? {} : t).iterations
            return Je
          },
          event: function (e, t) {
            return null
          },
          createAnimatedComponent: M,
          attachNativeEvent: d,
          forkEvent: Ke.forkEvent,
          unforkEvent: Ke.unforkEvent,
          Event: p,
          __PropsOnlyForTests: I,
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
      })({ FlatList: F, Image: B, ScrollView: H, SectionList: pe, Text: me, View: he }, i.a.isTesting ? Ye : Ke)
      t.a = et
    },
    XEYr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var i,
        a = n('KEM+'),
        o = n.n(a),
        r = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.b141cbff,
        u = c.a.e902fd9d,
        d = c.a.bbbfc827,
        p =
          ((i = { defaultToast: { text: u } }),
          o()(i, r.a.BlockedUserError, { toast: { text: l } }),
          o()(i, r.a.ProtectedStatusFavoriteError, { toast: { text: d } }),
          o()(i, 'showToast', !0),
          i)
    },
    XIWT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i,
        a = n('KEM+'),
        o = n.n(a),
        r = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.ae5c603c,
        u = c.a.h5634a0b,
        d =
          ((i = { defaultToast: { text: c.a.b657101c } }),
          o()(i, r.a.DuplicateBookmark, { toast: { text: u } }),
          o()(i, r.a.ProtectedTweetBookmarkError, { toast: { text: l } }),
          o()(i, 'showToast', !0),
          i)
    },
    XJEr: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'b', function () {
          return w
        }),
          n.d(t, 'c', function () {
            return C
          })
        var i,
          a = n('vG6z'),
          o = n('mbB1'),
          r = n('0m3q'),
          s = n('4LIG'),
          c = n('tI3i'),
          l = n.n(c),
          u = 'ios' === s.a.OS && e.RN$Bridgeless ? o.a : a.a,
          d = 1,
          p = 1,
          m = new Set(),
          h = !1,
          f = [],
          v = {
            getValue: function (e, t) {
              l()(u, 'Native animated module is not available'), u.getValue && u.getValue(e, t)
            },
            setWaitingForIdentifier: function (e) {
              m.add(e), (h = !0)
            },
            unsetWaitingForIdentifier: function (e) {
              m.delete(e), 0 === m.size && ((h = !1), v.disableQueue())
            },
            disableQueue: function () {
              l()(u, 'Native animated module is not available'), 'android' === s.a.OS && u.startOperationBatch()
              for (var e = 0, t = f.length; e < t; e++) f[e]()
              ;(f.length = 0), 'android' === s.a.OS && u.finishOperationBatch()
            },
            queueOperation: function (e) {
              h ? f.push(e) : e()
            },
            createAnimatedNode: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.createAnimatedNode(e, t)
                })
            },
            startListeningToAnimatedNodeValue: function (e) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.startListeningToAnimatedNodeValue(e)
                })
            },
            stopListeningToAnimatedNodeValue: function (e) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.stopListeningToAnimatedNodeValue(e)
                })
            },
            connectAnimatedNodes: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.connectAnimatedNodes(e, t)
                })
            },
            disconnectAnimatedNodes: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.disconnectAnimatedNodes(e, t)
                })
            },
            startAnimatingNode: function (e, t, n, i) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.startAnimatingNode(e, t, n, i)
                })
            },
            stopAnimation: function (e) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.stopAnimation(e)
                })
            },
            setAnimatedNodeValue: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.setAnimatedNodeValue(e, t)
                })
            },
            setAnimatedNodeOffset: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.setAnimatedNodeOffset(e, t)
                })
            },
            flattenAnimatedNodeOffset: function (e) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.flattenAnimatedNodeOffset(e)
                })
            },
            extractAnimatedNodeOffset: function (e) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.extractAnimatedNodeOffset(e)
                })
            },
            connectAnimatedNodeToView: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.connectAnimatedNodeToView(e, t)
                })
            },
            disconnectAnimatedNodeFromView: function (e, t) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.disconnectAnimatedNodeFromView(e, t)
                })
            },
            restoreDefaultValues: function (e) {
              l()(u, 'Native animated module is not available'),
                null != u.restoreDefaultValues &&
                  v.queueOperation(function () {
                    return u.restoreDefaultValues(e)
                  })
            },
            dropAnimatedNode: function (e) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.dropAnimatedNode(e)
                })
            },
            addAnimatedEventToView: function (e, t, n) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.addAnimatedEventToView(e, t, n)
                })
            },
            removeAnimatedEventFromView: function (e, t, n) {
              l()(u, 'Native animated module is not available'),
                v.queueOperation(function () {
                  return u.removeAnimatedEventFromView(e, t, n)
                })
            },
          },
          _ = {
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
        function w() {
          return p++
        }
        var y = !1
        function C(e) {
          return e.useNativeDriver, !0 !== e.useNativeDriver || u ? e.useNativeDriver || !1 : (y || (y = !0), !1)
        }
        t.a = {
          API: v,
          addWhitelistedStyleProp: function (e) {
            _[e] = !0
          },
          addWhitelistedTransformProp: function (e) {
            b[e] = !0
          },
          addWhitelistedInterpolationParam: function (e) {
            g[e] = !0
          },
          validateStyles: function (e) {
            for (var t in e)
              if (!_.hasOwnProperty(t))
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
          generateNewAnimationId: w,
          assertNativeAnimatedModule: function () {
            l()(u, 'Native animated module is not available')
          },
          shouldUseNativeDriver: C,
          transformDataType: function (e) {
            return 'string' != typeof e ? e : /deg$/.test(e) ? ((parseFloat(e) || 0) * Math.PI) / 180 : e
          },
          get nativeEventEmitter() {
            return i || (i = new r.a(u)), i
          },
        }
      }.call(this, n('fRV1')))
    },
    YBcl: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = (n('jQ3i'), n('ERkP')),
        r = n.n(o),
        s = n('I7xS'),
        c = n('nBUg'),
        l = n('rHpw'),
        u = n('sQjL'),
        d = n('/aXP'),
        p = n('E0cF'),
        m = function (e) {
          var t = (function (e) {
              var t = e.displayStyle,
                n = e.exclusivityInfoLabelNativeID,
                i = e.hideExclusivityInfoEducationTextInReplies,
                a = e.loggedInUser,
                o = e.tweet,
                r = p.a.getOriginalTweet(o),
                s = !!r.in_reply_to_status_id_str,
                c = r.exclusivity_info,
                l = r.permalink,
                u = r.user
              if (!(!c || ('inline' === t && s && i))) {
                var d = c.screen_name,
                  m = d === (null == a ? void 0 : a.screen_name),
                  h = u.screen_name === (null == a ? void 0 : a.screen_name)
                return {
                  displayMode: 'detail' === t ? 'detail' : s ? 'compact' : 'inline',
                  nativeID: n,
                  screenName: d,
                  scribeElement: 'exclusivity_info_context',
                  tweetPermalink: l,
                  type: m
                    ? 'exclusiveToSuperFollowersCreator'
                    : h
                    ? 'exclusiveToSuperFollowersReplyOwn'
                    : 'exclusiveToSuperFollowersReplyOthers',
                }
              }
            })(e),
            n = (function (e) {
              var t = e.displayStyle,
                n = e.hideTrustedFriendsEducationTextInReplies,
                i = e.loggedInUser,
                a = e.trustedFriendsLabelNativeID,
                o = e.tweet,
                r = c.b.useProps().trustedFriendsEnabled(),
                s = p.a.getOriginalTweet(o),
                l = !!s.in_reply_to_status_id_str,
                u = s.permalink,
                d = s.trusted_friends_info,
                m = s.user
              if (r && d && ('inline' !== t || !l || !n))
                return {
                  anchorless: !0,
                  displayMode: 'detail' === t ? 'detail' : l ? 'compact' : 'inline',
                  nativeID: a,
                  screenName: d.screen_name,
                  scribeElement: 'exclusivity_info_context',
                  tweetPermalink: u,
                  type:
                    m.screen_name === (null == i ? void 0 : i.screen_name)
                      ? 'trustedFriendsReplyOwn'
                      : 'trustedFriendsReplyOthers',
                }
            })(e),
            i = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = e.hideConversationControlsEducationText,
                a = e.loggedInUser,
                o = e.tweet,
                r = !!a,
                c = p.a.getOriginalTweet(o),
                l = c.conversation_control,
                u = c.limited_actions,
                d = c.permalink,
                m = r && !u
              if (l && ('inline' !== n || (m && !i))) {
                var h = l.conversation_owner.screen_name,
                  f = l.policy,
                  v = s.a.getEducationType(f, m)
                if (v)
                  return {
                    displayMode: 'detail' === n ? 'detail' : 'compact',
                    nativeID: t,
                    tweetPermalink: d,
                    screenName: h,
                    scribeElement: 'conversation_control_context',
                    type: v,
                  }
              }
            })(e),
            o = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = (e.hideConversationControlsEducationText, e.loggedInUser, e.tweet),
                a = c.b.useProps().c9sEnabled(),
                o = p.a.getOriginalTweet(i),
                r = o.community_id_str,
                l = 'community_tweet_hidden' === o.limited_actions,
                u = s.a.getEducationType('community_hidden_tweet')
              if (a && r && l && u)
                return {
                  displayMode: 'detail' === n ? 'detail' : 'compact',
                  nativeID: t,
                  screenName: '',
                  scribeElement: 'hidden_community_tweet_education',
                  type: u,
                }
            })(e),
            l = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = (e.hideConversationControlsEducationText, e.loggedInUser, e.tweet),
                a = c.b.useProps().c9sEnabled(),
                o = p.a.getOriginalTweet(i),
                r = o.community_id_str,
                l = 'community_tweet_member_removed' === o.limited_actions,
                u = s.a.getEducationType('community_tweet_member_removed')
              if (a && r && l && u)
                return {
                  displayMode: 'detail' === n ? 'detail' : 'compact',
                  nativeID: t,
                  screenName: '',
                  scribeElement: 'removed_member_community_tweet_education',
                  type: u,
                }
            })(e),
            m = t || n || i || o || l,
            f = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = e.educationBannerProps,
                a = e.handleHeadsUpImpression,
                o = e.showConversationHeadsUp,
                s = e.tweet,
                l = c.b.useProps().headsUpVariant(),
                u = ['headsUpCopyA', 'headsUpCopyB'].includes(l) ? l : void 0
              if (
                (r.a.useEffect(
                  function () {
                    a && i && o
                      ? a(s.id_str, 'impression_hidden_convo_controls')
                      : a && !u && o
                      ? a(s.id_str, 'impression_hidden')
                      : a && u && o && a(s.id_str, 'impression')
                  },
                  [u, i, a, o, s.id_str],
                ),
                o && u)
              )
                return 'headsUpCopyA' === u || 'headsUpCopyB' === u
                  ? {
                      displayMode: 'detail' === n ? 'detail' : 'compact',
                      nativeID: t,
                      screenName: '',
                      scribeElement: 'heads_up_context',
                      type: u,
                    }
                  : void 0
            })(a()({ educationBannerProps: void 0 !== m }, e)),
            v = m || f
          if (!v) return null
          var _ = e.displayStyle,
            b = e.handleAnchorAction,
            g = e.handleAnchorOpen,
            w = e.handleAnchorSecondaryAction,
            y = v.anchorless,
            C = v.displayMode,
            k = v.nativeID,
            T = v.screenName,
            E = v.scribeElement,
            S = v.tweetPermalink,
            I = v.type,
            x = h[C]
          return 'inline' !== _ || y
            ? r.a.createElement(d.a, { displayMode: C, nativeID: k, screenName: T, style: x, type: I })
            : r.a.createElement(
                u.a,
                {
                  onAction: b,
                  onOpen: g
                    ? function () {
                        return g(E)
                      }
                    : void 0,
                  onSecondaryAction: w,
                  screenName: T,
                  style: x,
                  tweetPermalink: S,
                  type: I,
                },
                r.a.createElement(d.a, { displayMode: C, nativeID: k, screenName: T, type: I }),
              )
        }
      m.defaultProps = { displayStyle: 'inline' }
      var h = l.a.create(function (e) {
        return {
          compact: { alignSelf: 'flex-start', marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
          inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
          detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 },
        }
      })
      t.a = m
    },
    YICZ: function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        a = n.n(i),
        o = n('Zejx'),
        r = n('rxPX'),
        s = n('0KEI'),
        c = Object(r.a)().propsFromActions(function () {
          return {
            createLocalApiErrorHandler: Object(s.createLocalApiErrorHandlerWithContextFactory)(
              'TOPIC_NOT_INTERESTED_CONTEXT',
            ),
            setNotInterested: o.a.notInterested,
          }
        }),
        l = n('3XMw'),
        u = n.n(l),
        d = n('hOZg'),
        p = n('Jkc4'),
        m = n('Irs7'),
        h = n('/yvb'),
        f = n('rHpw'),
        v = u.a.d9b417c4,
        _ = u.a.c29d6806,
        b = u.a.e839db39,
        g = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.nativeID,
            i = e.onPress,
            o = e.setNotInterested,
            r = e.size,
            s = e.style,
            c = e.text,
            l = e.topicId,
            u = e.type,
            d = e.withIconOnly,
            f = Object(m.b)(),
            _ = a.a.useCallback(
              function (e) {
                e.preventDefault(),
                  i ? i(e) : (f.scribe({ element: 'topic', action: 'not_interested' }), o(l).catch(t()))
              },
              [f, t, i, o, l],
            )
          return a.a.createElement(p.a, null, function (e) {
            return a.a.createElement(
              h.a,
              {
                accessibilityLabel: v,
                hoverLabel: { label: b },
                icon: d ? y : void 0,
                nativeID: n,
                onPress: e(_),
                pullRight: d,
                size: r,
                style: s,
                type: u,
              },
              d ? null : c,
            )
          })
        }
      g.defaultProps = { size: 'small', text: _, type: 'brandText', withIconOnly: !0 }
      var w = f.a.create(function (e) {
          return { closeIcon: { color: e.colors.gray700 } }
        }),
        y = a.a.createElement(d.a, { style: w.closeIcon }),
        C = c(g)
      t.a = C
    },
    YRNd: function (e, t, n) {
      'use strict'
      var i = n('XJEr'),
        a = 1,
        o = (function () {
          function e() {}
          var t = e.prototype
          return (
            (t.start = function (e, t, n, i, a) {}),
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
              var t = a + ':startAnimation'
              ;(a += 1), i.a.API.setWaitingForIdentifier(t)
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
      t.a = o
    },
    'Z8+W': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return x
      }),
        n.d(t, 'a', function () {
          return O
        })
      var i = n('97Jx'),
        a = n.n(i),
        o = n('T0aG'),
        r = n.n(o),
        s = n('ddV6'),
        c = n.n(s),
        l = (n('849X'), n('TJCb'), n('hBvt'), n('ERkP')),
        u = n.n(l),
        d = n('mjJ+'),
        p = n('PxJJ'),
        m = n('3XMw'),
        h = n.n(m),
        f = n('wD1h'),
        v = n('I8UQ'),
        _ = n('wwsH'),
        b = n('aITJ'),
        g = n('KDev'),
        w = n('iEUn'),
        y = n('uCrx'),
        C = h.a.d636ebc6,
        k = h.a.eb3a8b0b,
        T = h.a.a4ae22fa,
        E = h.a.a0af935b,
        S = h.a.dac92b0c,
        I = h.a.aa650427
      function x(e) {
        var t = e.isLiked,
          n = e.likeTransitionAnimation,
          i = u.a.useState(!1),
          a = c()(i, 2),
          o = a[0],
          s = a[1],
          l = u.a.useRef(t)
        return (
          u.a.useEffect(
            function () {
              ;('object' === r()(n) || v.b.check(n)) && t !== l.current && (s(t), (l.current = t))
            },
            [t, n],
          ),
          {
            onAnimationEnd: function () {
              return s(!1)
            },
            showAnimation: o,
            transitionAnimationUrl: n,
          }
        )
      }
      function A() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionLike.onError')
        p.a.report(e)
      }
      function O(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          i = void 0 === n ? 'magenta500' : n,
          o = e.color,
          r = e.count,
          s = e.enableActionMenu,
          c = void 0 !== s && s,
          l = e.enableKeyboardShortcuts,
          p = e.iconSize,
          m = e.isDisabled,
          h = e.isFaded,
          v = e.isLiked,
          O = e.isPresentational,
          P = e.likeActionIconContainerRef,
          L = e.likeTransitionAnimation,
          R = e.link,
          N = e.onError,
          D = void 0 === N ? A : N,
          M = e.onLikeActionSelect,
          j = e.onMenuCancel,
          F = e.onPress,
          B = e.style,
          U = e.testIDs,
          V = e.withCount && 'number' == typeof r,
          H = v ? E : C
        V && (H = v ? I({ count: r }) : S({ count: r }))
        var z = x({ isLiked: v, likeTransitionAnimation: L })
        return u.a.createElement(
          _.a,
          a()({}, z, {
            ActiveIcon: y.a,
            Icon: w.a,
            accessibilityLabel: H,
            actionIconContainerRef: P,
            activeColor: i,
            behavioralEventContext: { viewType: 'like', viewState: { type: 'toggleable', toggledTo: !v } },
            color: o,
            count: r,
            enableKeyboardShortcuts: l,
            hoverLabel: { label: v ? k : C },
            iconSize: p,
            isActive: v,
            isDisabled: m,
            isFaded: h,
            isPresentational: O,
            keyboardShortcut: f.a.shortcuts.like,
            link: R,
            onError: D,
            onPress: function () {
              b.b.isFirefox() || g.a.vibrate(5), null == F || F()
            },
            renderMenu: c
              ? function (e) {
                  var n = [
                    {
                      text: T,
                      onClick: function () {
                        e(), null == M || M()
                      },
                      testID: null == U ? void 0 : U.like,
                      Icon: w.a,
                    },
                  ]
                  return u.a.createElement(d.a, {
                    description: t,
                    items: n,
                    onCloseRequested: function () {
                      e(), null == j || j()
                    },
                  })
                }
              : void 0,
            style: B,
            testID: U && (v ? U.unlike : U.like),
            withCount: V,
          }),
        )
      }
    },
    ZGdk: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M18.87 9.538c-.42 0-.75.34-.75.75v7.339l-1.89-1.37V8.618c0-1.16-.94-2.09-2.09-2.09H6.89v-1.06c0-.32.27-.59.59-.59h5.2c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75h-5.2c-1.16 0-2.09.93-2.09 2.09v1.06h-1.3C2.94 6.529 2 7.459 2 8.618v13.627c0 .28.16.54.41.67s.55.11.78-.06l5.93-4.299 5.92 4.299c.13.09.29.14.44.14.12 0 .23-.02.34-.08.25-.13.41-.39.41-.67v-4.139l2.2 1.6c.13.1.28.14.44.14.11 0 .23-.02.34-.08.25-.13.41-.38.41-.67v-8.808c0-.41-.34-.75-.75-.75zm-4.14 11.238l-4.82-3.489-.35-.26c-.14-.1-.29-.14-.44-.14-.16 0-.31.04-.44.14l-3.23 2.34-1.95 1.41V8.618c0-.32.27-.59.59-.59h10.05c.33 0 .59.26.59.59v12.158zM22 4.129c0 .41-.34.75-.75.75h-1.63v1.62c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.62h-1.64c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h1.64V1.75c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1.63h1.63c.41 0 .75.329.75.749z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    aA1u: function (e, t, n) {
      'use strict'
      var i = n('VrFO'),
        a = n.n(i),
        o = n('Y9Ll'),
        r = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('t62R'),
        b = n('21zW'),
        g = n('rHpw'),
        w = n('3XMw'),
        y = n.n(w),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(c()(e), '_formatTimestamp', function (e) {
                var t = y.a.jade381b,
                  n = y.a.d725a288,
                  i = new Date(e),
                  a = t(i),
                  o = n(i)
                return ''.concat(o, ' · ').concat(a)
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.style
                  return v.a.createElement(
                    _.b,
                    { color: 'gray700', style: e },
                    this._renderTimestampAndMaybePlace(),
                    this._maybeRenderSource(),
                  )
                },
              },
              {
                key: '_renderTimestampAndMaybePlace',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onPlaceClick,
                    i = e.onTimestampClick,
                    a = e.place,
                    o = e.placeLink,
                    r = e.timestamp,
                    s = e.timestampLink,
                    c = this._formatTimestamp(r)
                  return a
                    ? v.a.createElement(
                        y.a.I18NFormatMessage,
                        { $i18n: 'ba64a3b2' },
                        v.a.createElement(
                          _.b,
                          { color: s ? t : void 0, link: s, onClick: i },
                          y.a.e9c24489({ date: c }),
                        ),
                        v.a.createElement(
                          _.b,
                          { color: o ? t : void 0, link: o, onClick: n },
                          y.a.a16de8a4({ place: a }),
                        ),
                      )
                    : v.a.createElement(_.b, { color: s ? t : void 0, link: s, onClick: i }, c)
                },
              },
              {
                key: '_maybeRenderSource',
                value: function () {
                  var e = this.props,
                    t = e.linkColor,
                    n = e.onSourceClick,
                    i = e.source,
                    a = e.sourceLink
                  return i
                    ? v.a.createElement(
                        v.a.Fragment,
                        null,
                        v.a.createElement(b.a, null),
                        v.a.createElement(_.b, { color: a ? t : void 0, link: a, onClick: n, style: k.source }, i),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(C, 'defaultProps', { linkColor: 'link' })
      var k = g.a.create(function (e) {
        return { source: { whiteSpace: 'normal' } }
      })
      t.a = C
    },
    bwko: function (e, t) {
      e.exports = function (e, t, n, i) {
        function a(e, t, n, i) {
          return e < 20 ? (t & n) | (~t & i) : e < 40 ? t ^ n ^ i : e < 60 ? (t & n) | (t & i) | (n & i) : t ^ n ^ i
        }
        function o(e) {
          return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
        }
        function r(e, t) {
          var n = (65535 & e) + (65535 & t)
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
        }
        function s(e, t) {
          return (e << t) | (e >>> (32 - t))
        }
        function c(e, t) {
          ;(e[t >> 5] |= 128 << (24 - (t % 32))), (e[15 + (((t + 64) >> 9) << 4)] = t)
          for (
            var n = [80], i = 1732584193, c = -271733879, l = -1732584194, u = 271733878, d = -1009589776, p = 0;
            p < e.length;
            p += 16
          ) {
            for (var m = i, h = c, f = l, v = u, _ = d, b = 0; b < 80; b++) {
              n[b] = b < 16 ? e[p + b] : s(n[b - 3] ^ n[b - 8] ^ n[b - 14] ^ n[b - 16], 1)
              var g = r(r(s(i, 5), a(b, c, l, u)), r(r(d, n[b]), o(b)))
              ;(d = u), (u = l), (l = s(c, 30)), (c = i), (i = g)
            }
            ;(i = r(i, m)), (c = r(c, h)), (l = r(l, f)), (u = r(u, v)), (d = r(d, _))
          }
          return [i, c, l, u, d]
        }
        function l(e) {
          for (var t = [], n = (1 << i) - 1, a = 0; a < e.length * i; a += i)
            t[a >> 5] |= (e.charCodeAt(a / 8) & n) << (32 - i - (a % 32))
          return t
        }
        return (
          n || (n = '='),
          i || (i = 8),
          (function (e, t) {
            return (function (e) {
              for (var t = '', i = 0; i < 4 * e.length; i += 3)
                for (
                  var a =
                      (((e[i >> 2] >> (8 * (3 - (i % 4)))) & 255) << 16) |
                      (((e[(i + 1) >> 2] >> (8 * (3 - ((i + 1) % 4)))) & 255) << 8) |
                      ((e[(i + 2) >> 2] >> (8 * (3 - ((i + 2) % 4)))) & 255),
                    o = 0;
                  o < 4;
                  o++
                )
                  8 * i + 6 * o > 32 * e.length
                    ? (t += n)
                    : (t += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                        (a >> (6 * (3 - o))) & 63,
                      ))
              return t
            })(
              (function (e, t) {
                var n = l(e)
                n.length > 16 && (n = c(n, e.length * i))
                for (var a = [16], o = [16], r = 0; r < 16; r++) (a[r] = 909522486 ^ n[r]), (o[r] = 1549556828 ^ n[r])
                var s = c(a.concat(l(t)), 512 + t.length * i)
                return c(o.concat(s), 672)
              })(e, t),
            )
          })(e, t)
        )
      }
    },
    dCqJ: function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        a = n.n(i),
        o = n('cm6r'),
        r = n('VrFO'),
        s = n.n(r),
        c = n('Y9Ll'),
        l = n.n(c),
        u = n('1Pcy'),
        d = n.n(u),
        p = n('5Yy7'),
        m = n.n(p),
        h = n('2VqO'),
        f = n.n(h),
        v = n('KEM+'),
        _ = n.n(v),
        b = (n('2G9S'), n('t62R')),
        g = n('rHpw'),
        w = n('3XMw'),
        y = n.n(w),
        C = y.a.d7e50a66,
        k = 'INDIRECT',
        T = 'NO_SPONSORSHIP',
        E = 'ISSUE',
        S = (function (e) {
          m()(n, e)
          var t = f()(n)
          function n() {
            var e
            s()(this, n)
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              _()(d()(e), '_renderDisclaimerDetails', function () {
                var t = e.props,
                  n = t.onPoliticalSponsorWebsiteClick,
                  i = t.promotedContent
                if (!i.adMetadataContainer) return null
                var o = i.adMetadataContainer,
                  r = o.disclaimerType,
                  s = o.sponsorshipCandidate,
                  c = o.sponsorshipOrganization,
                  l = o.sponsorshipOrganizationWebsite,
                  u = o.sponsorshipType,
                  d =
                    l && r !== E
                      ? a.a.createElement(b.b, { link: l, onClick: n })
                      : a.a.createElement(b.b, { color: 'gray700', size: 'subtext2' })
                if (!c) return null
                var p = a.a.createElement(
                    y.a.I18NFormatMessage,
                    { $i18n: 'e1e348dc' },
                    a.a.cloneElement(d, null, y.a.b1e5bc63({ sponsorshipOrganization: c })),
                  ),
                  m = a.a.createElement(
                    y.a.I18NFormatMessage,
                    { $i18n: 'c7dea0d0' },
                    a.a.cloneElement(d, null, y.a.a84fcff2({ sponsorshipOrganization: c })),
                  ),
                  h = s
                    ? a.a.createElement(
                        y.a.I18NFormatMessage,
                        { $i18n: 'b5c2371a', sponsorshipCandidate: s },
                        a.a.cloneElement(d, null, y.a.fd985325({ sponsorshipOrganization: c })),
                      )
                    : null
                return a.a.createElement(
                  b.b,
                  { color: 'gray700', size: 'subtext2' },
                  r === E ? p : u === T ? m : u === k ? h : p,
                )
              }),
              _()(d()(e), '_renderLearnMoreLink', function () {
                var t = e.props,
                  n = t.onPromotedDisclaimerLearnMoreClick,
                  i = t.promotedContent,
                  o = t.tweet,
                  r = (i.adMetadataContainer || {}).disclaimerType === E ? 'issue_ad' : 'political_ad',
                  s = 'http://ads.twitter.com/transparency/ads/'.concat(o.user.screen_name, '/tweet/').concat(o.id_str)
                return a.a.createElement(b.b, { link: s, onClick: n(r), size: 'subtext2', style: I.learnMore }, C)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  return a.a.createElement(
                    a.a.Fragment,
                    null,
                    this._renderDisclaimerDetails(),
                    this._renderLearnMoreLink(),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.Component),
        I = g.a.create(function (e) {
          return { learnMore: { alignSelf: 'flex-start' } }
        }),
        x = n('e5HP'),
        A = n('Z6aJ'),
        O = n('MWbm')
      t.a = function (e) {
        var t = e.onPoliticalSponsorWebsiteClick,
          n = e.onPromotedDisclaimerLearnMoreClick,
          i = e.onPromotedIndicatorClick,
          r = e.promotedContent,
          s = e.promotedContentAdvertiser,
          c = e.style,
          l = e.testID,
          u = e.tweet,
          d = e.withCircleIcon,
          p = A.a.isPromoted(r),
          m =
            !!r &&
            ((r.adMetadataContainer &&
              ('POLITICAL' === r.adMetadataContainer.disclaimerType ||
                'ISSUE' === r.adMetadataContainer.disclaimerType)) ||
              'political' === A.a.getDisclosureType(r) ||
              'issue' === A.a.getDisclosureType(r))
        return p
          ? a.a.createElement(
              O.a,
              { style: c, testID: l },
              s && r
                ? a.a.createElement(
                    o.a,
                    {
                      interactiveStyles: null,
                      link: {
                        pathname: 'https://twitter.com/'.concat(s.screen_name),
                        state: { promotedTweetState: r },
                      },
                      onPress: i,
                    },
                    a.a.createElement(x.a, { promotedContent: r, withCircleIcon: d }),
                  )
                : !!r && a.a.createElement(x.a, { promotedContent: r }),
              m && r
                ? a.a.createElement(S, {
                    onPoliticalSponsorWebsiteClick: t,
                    onPromotedDisclaimerLearnMoreClick: n,
                    promotedContent: r,
                    tweet: u,
                  })
                : null,
            )
          : null
      }
    },
    dFWS: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    de1q: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      var i,
        a,
        o = n('ERkP'),
        r = n.n(o),
        s = n('38/B'),
        c = n('q1bs'),
        l = n('Eqye'),
        u = n('uCrx'),
        d = n('yiKp'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = n.p + 'cheer.6249ab45.png',
        v = n.p + 'haha.c0b42cb5.png',
        _ = n.p + 'hmm.bc35b1e5.png',
        b = n('3rX5'),
        g = n.p + 'like.7a3e9685.png',
        w = n('kSIJ'),
        y = n('mJtw'),
        C = n.p + 'sad.f12709e5.png',
        k = n('rHpw'),
        T = n('MWbm'),
        E =
          ((i = {}),
          h()(i, y.a.Like, g),
          h()(i, y.a.Haha, v),
          h()(i, y.a.Hmm, _),
          h()(i, y.a.Sad, C),
          h()(i, y.a.Cheer, f),
          i),
        S = k.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: p()({}, k.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        I = function (e) {
          var t = e.reactionType
          return r.a.createElement(
            T.a,
            { style: S.fillContainer },
            r.a.createElement(b.a, { accessibilityLabel: w.a[t], source: E[t], style: S.reactionSelectedIcon }),
            r.a.createElement(T.a, { style: [S.reactionSelectedIcon, S.imageCover] }),
          )
        },
        x = n('DQLs'),
        A =
          ((a = {}),
          h()(a, y.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          h()(a, y.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          h()(a, y.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          h()(a, y.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          h()(a, y.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          a),
        O = function (e) {
          var t = e.reactionType,
            n = c.b.get(A[t])
          return (
            (n && 'boolean' != typeof n) || (n = A[t]), r.a.createElement(x.a, { animation: n, autoplay: !0, loop: !0 })
          )
        },
        P = function () {
          var e = window.navigator.deviceMemory
          return s.a.reducedMotionEnabled || l.a.isEnabled || (e && e < 4)
        },
        L = function (e) {
          var t = e.legacyHeart,
            n = e.reactionType,
            i = e.style,
            a = e.withAnimation,
            o = void 0 !== a && a,
            s = !P() && o ? O : I
          return t && n === y.a.Like
            ? r.a.createElement(T.a, { style: [R.root, R.legacyHeart, i] }, r.a.createElement(u.a, { style: R.root }))
            : r.a.createElement(T.a, { style: [R.root, i] }, r.a.createElement(s, { reactionType: n }))
        },
        R = k.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        N = function () {
          r.a.useEffect(function () {
            P() || (c.b.check(A.Hmm), c.b.check(A.Sad), c.b.check(A.Haha), c.b.check(A.Cheer), c.b.check(A.Like))
          }, [])
        }
      t.a = r.a.memo(L)
    },
    e6X4: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var i,
          a = n('YRNd'),
          o = n('XJEr'),
          r = n('7zxR')
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var c = (function (t) {
          var n, a
          function c(e) {
            var n, a, s, c, l, u
            return (
              ((u = t.call(this) || this)._toValue = e.toValue),
              (u._easing = null !== (n = e.easing) && void 0 !== n ? n : (i || (i = r.a.inOut(r.a.ease)), i)),
              (u._duration = null !== (a = e.duration) && void 0 !== a ? a : 500),
              (u._delay = null !== (s = e.delay) && void 0 !== s ? s : 0),
              (u.__iterations = null !== (c = e.iterations) && void 0 !== c ? c : 1),
              (u._useNativeDriver = Object(o.c)(e)),
              (u.__isInteraction = null !== (l = e.isInteraction) && void 0 !== l ? l : !u._useNativeDriver),
              u
            )
          }
          ;(a = t), ((n = c).prototype = Object.create(a.prototype)), (n.prototype.constructor = n), s(n, a)
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
            (l.start = function (e, t, n, i, a) {
              var o = this
              ;(this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n)
              var r = function () {
                0 !== o._duration || o._useNativeDriver
                  ? ((o._startTime = Date.now()),
                    o._useNativeDriver
                      ? o.__startNativeAnimation(a)
                      : (o._animationFrame = requestAnimationFrame(o.onUpdate.bind(o))))
                  : (o._onUpdate(o._toValue), o.__debouncedOnEnd({ finished: !0 }))
              }
              this._delay ? (this._timeout = setTimeout(r, this._delay)) : r()
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
        })(a.a)
        t.a = c
      }.call(this, n('fRV1')))
    },
    feOz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return mt
      })
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ddV6'),
        r = n.n(o),
        s = (n('KOtZ'), n('7x/C'), n('LW0h'), n('97Jx')),
        c = n.n(s),
        l = n('m3Bd'),
        u = n.n(l),
        d = n('ERkP'),
        p = n.n(d),
        m = n('+Tpo'),
        h = n('T0aG'),
        f = n.n(h),
        v = (n('849X'), n('TJCb'), n('PxJJ')),
        _ = n('3XMw'),
        b = n.n(_),
        g = n('wD1h'),
        w = n('wwsH'),
        y = n('aITJ'),
        C = n('KDev'),
        k = n('VrFO'),
        T = n.n(k),
        E = n('Y9Ll'),
        S = n.n(E),
        I = n('n70c'),
        x = n.n(I),
        A = n('AuHH'),
        O = n.n(A),
        P = n('5Yy7'),
        L = n.n(P),
        R = n('2VqO'),
        N = n.n(R),
        D = n('q1bs'),
        M = 'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
        j = new ((function (e) {
          L()(n, e)
          var t = N()(n)
          function n() {
            return T()(this, n), t.apply(this, arguments)
          }
          return (
            S()(n, [
              {
                key: 'check',
                value: function (e) {
                  return x()(O()(n.prototype), 'check', this).call(this, null != e ? e : M)
                },
              },
            ]),
            n
          )
        })(D.a))(),
        F = n('Lsrn'),
        B = n('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [F.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            p.a.createElement(
              'g',
              null,
              p.a.createElement('path', {
                d: 'M3.538 14.22l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72V4c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18z',
              }),
            ),
          )
        }
      U.metadata = { width: 24, height: 24 }
      var V = U,
        H = n('IqLm'),
        z = b.a.d2b2b8e5,
        W = b.a.hcb3286f,
        q = b.a.cb5dafd3
      function K() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionDownvote.onError')
        v.a.report(e)
      }
      var Q = n('Z8+W'),
        X = n('KEM+'),
        G = n.n(X),
        J = n('CHgo'),
        Y = (n('z84I'), n('M+/F'), n('tQbP'), n('de1q')),
        Z = n('mJtw'),
        $ = n('cHvH'),
        ee = n('rHpw'),
        te = n('MWbm'),
        ne = function (e, t, n) {
          var i = n.reduce(function (e, t) {
            return e + t.count
          }, 0)
          if (0 === i) return []
          var a = e || 20
          return n
            .filter(function (e) {
              return e.count >= i * (a / 100)
            })
            .filter(function (e, n, i) {
              return !(1 === i.length && e.type === Z.a.Like) || (t && t !== Z.a.Like)
            })
            .filter(function (e, n, i) {
              return !(1 === i.length && e.type === t)
            })
            .filter(function (e, n, i) {
              return !(1 === e.count && e.type === t)
            })
            .sort(function (e, t) {
              return t.count - e.count
            })
            .slice(0, 3)
        },
        ie = ee.a.create(function (e) {
          return {
            basket: {
              display: 'flex',
              flexDirection: 'row',
              fontSize: e.fontSizes.body,
              justifyContent: 'center',
              minHeight: e.lineHeights.body,
            },
          }
        }),
        ae = function (e) {
          var t = e.experimentalFruitBasketThreshold,
            n = e.legacyHeart,
            i = e.reacted,
            a = e.reactionCounts,
            o = e.size,
            r = void 0 === o ? 'normal' : o,
            s = e.style,
            c = ne(t, i, a)
          return 0 === c.length
            ? null
            : p.a.createElement($.a, null, function (e) {
                return e.windowWidth > ee.a.theme.breakpoints.xSmall * ee.a.theme.scaleMultipler
                  ? p.a.createElement(
                      te.a,
                      { style: [ie.basket, s] },
                      c.map(function (e) {
                        return p.a.createElement(
                          te.a,
                          { key: e.type, style: w.b[r] },
                          p.a.createElement(Y.a, { legacyHeart: n, reactionType: e.type, withAnimation: !1 }),
                        )
                      }),
                    )
                  : null
              })
        },
        oe = n('cm6r'),
        re = n('tn7R'),
        se = n('3dyc'),
        ce = n('OiMc'),
        le = n('38/B'),
        ue = n('kSIJ'),
        de = n('WrBE'),
        pe = ee.a.theme.spacesPx.space40,
        me = { growing: 'growing', grown: 'grown', shrinking: 'shrinking', shrunk: 'shrunk' },
        he = function (e, t) {
          var n = p.a.useRef(new de.a.Value(e)).current,
            i = p.a.useState(me.shrunk),
            a = r()(i, 2),
            o = a[0],
            s = a[1],
            c = p.a.useCallback(
              function (e) {
                s(me.growing),
                  de.a.timing(n, { duration: 200, toValue: t, useNativeDriver: !1 }).start(function (t) {
                    t.finished && s(me.grown), e && e(t)
                  })
              },
              [n, t],
            ),
            l = p.a.useCallback(
              function (t) {
                s(me.shrinking),
                  de.a.timing(n, { duration: 200, toValue: e, useNativeDriver: !1 }).start(function (e) {
                    e.finished && s(me.shrunk), t && t(e)
                  })
              },
              [n, e],
            )
          return { animationState: o, currentHeight: n, startAnimation: c, resetAnimation: l }
        },
        fe = function (e) {
          return Object(B.a)('div', e)
        },
        ve = ee.a.create(function (e) {
          return {
            container: {
              maxHeight: e.spaces.space40,
              maxWidth: e.spaces.space40,
              marginHorizontal: e.spaces.space8,
              alignItems: 'center',
              justifyContent: 'flex-end',
            },
            largeTouchArea: {
              position: 'absolute',
              width: e.spaces.space56,
              height: e.spaces.space40,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              paddingTop: e.spaces.space80,
              paddingBottom: e.spaces.space80,
            },
            activeBackground: a()(
              a()({}, ee.a.absoluteFillObject),
              {},
              {
                backgroundColor: e.colors.activeBlack,
                borderRadius: e.borderRadii.infinite,
                margin: '-'.concat(e.spaces.space4),
              },
            ),
            fullHeight: { height: '100%' },
          }
        }),
        _e = function (e) {
          var t = e.enableTouch,
            n = e.forceHovered,
            i = e.legacyHeart,
            a = e.onSelect,
            o = e.reacted,
            s = e.reactionType,
            c = e.withAnimation,
            l = void 0 === c || c,
            u = p.a.useState(!1),
            d = r()(u, 2),
            m = d[0],
            h = d[1],
            f = he(pe, 1.5 * pe),
            v = f.animationState,
            _ = f.currentHeight,
            b = f.resetAnimation,
            g = f.startAnimation
          p.a.useEffect(
            function () {
              if (!le.a.reducedMotionEnabled) {
                var e = n || m,
                  t = v === me.shrinking || v === me.shrunk,
                  i = v === me.growing || v === me.grown
                e && t ? g() : !e && i && b()
              }
            },
            [n, m, g, b, v],
          )
          var w = function () {
              h(!0)
            },
            y = function () {
              h(!1)
            },
            C = n || m
          return p.a.createElement(
            te.a,
            { style: ve.container },
            p.a.createElement(
              de.a.View,
              { style: { height: _, width: _ } },
              p.a.createElement(
                oe.a,
                {
                  accessibilityLabel: ue.a[s],
                  accessibilityRole: 'button',
                  hoverLabel:
                    v === me.grown || le.a.reducedMotionEnabled
                      ? { label: ue.a[s], preferredVerticalOrientation: 'up', withDelay: !1, withExtraSpace: !0 }
                      : void 0,
                  interactiveStyles: null,
                  onFocusRingGained: w,
                  onFocusRingLost: y,
                  onHoverIn: w,
                  onHoverOut: y,
                  onPress: a,
                  style: ve.fullHeight,
                },
                p.a.createElement(Y.a, { legacyHeart: i, reactionType: s, withAnimation: l }),
                o && !C && p.a.createElement(te.a, { style: ve.activeBackground }),
              ),
            ),
            t && p.a.createElement(fe, { 'data-reaction-type': s, style: ve.largeTouchArea }),
          )
        },
        be = ee.a.create(function (e) {
          return {
            popoverContainer: {
              paddingVertical: e.spaces.space8,
              paddingHorizontal: e.spaces.space12,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              userSelect: 'none',
            },
          }
        }),
        ge = function (e) {
          var t = e.dismissReactionPicker,
            n = e.enableTouch,
            i = e.forceHovered,
            a = e.legacyHeart,
            o = e.onSelection,
            r = e.reacted,
            s = e.reactionOptions,
            c = e.withAnimation,
            l = void 0 === c || c
          return p.a.createElement(
            te.a,
            { style: be.popoverContainer },
            s.map(function (e) {
              return p.a.createElement(_e, {
                enableTouch: n,
                forceHovered: i === e,
                key: e,
                legacyHeart: a,
                onSelect:
                  ((s = e),
                  function () {
                    o(s, 'picker-tap'), t()
                  }),
                reacted: r === e,
                reactionType: e,
                withAnimation: l,
              })
              var s
            }),
          )
        },
        we = n('iEUn'),
        ye = n('DlVf'),
        Ce = n('FG+G'),
        ke = n('uCrx'),
        Te = Object(re.a)(Z.a),
        Ee = Z.a.Like,
        Se = b.a.e3469988,
        Ie = b.a.c46f0fce,
        xe = b.a.ga9c2b52,
        Ae = b.a.hb755a53,
        Oe = b.a.cff26b89,
        Pe = 'data-reaction-type',
        Le = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Cheer, style: t, withAnimation: !1 })
        },
        Re = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Haha, style: t, withAnimation: !1 })
        },
        Ne = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Hmm, style: t, withAnimation: !1 })
        },
        De = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Like, style: t, withAnimation: !1 })
        },
        Me = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Sad, style: t, withAnimation: !1 })
        },
        je = ee.a.create(function (e) {
          return {
            root: { justifyContent: 'center', userSelect: 'none' },
            popoverContainer: { minWidth: 0, overflow: 'visible' },
            buttonContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            fruitBasketSpacing: { marginLeft: e.spaces.space8 },
            caretWithoutCount: { marginLeft: e.spaces.space12 },
          }
        }),
        Fe = function (e) {
          var t,
            n = e.activeColor,
            i = void 0 === n ? 'magenta500' : n,
            a = e.color,
            o = e.enableKeyboardShortcuts,
            s = e.experimentalFruitBasketThreshold,
            l = e.iconSize,
            u = e.isDisabled,
            d = e.isFaded,
            m = e.isPresentational,
            h = e.legacyHeart,
            f = e.onPopoverDismiss,
            v = e.onPopoverOpen,
            _ = e.onReactionSelect,
            b = e.reacted,
            y = e.reactionCounts,
            C = void 0 === y ? [] : y,
            k = e.style,
            T = e.tweetActionsRef,
            E = e.testIDs,
            S = e.withAnimation,
            I = void 0 === S || S,
            x = e.withCount,
            A = void 0 !== x && x,
            O = e.withFruitBasket,
            P = void 0 !== O && O,
            L = p.a.useState(null),
            R = r()(L, 2),
            N = R[0],
            D = R[1],
            M = p.a.useState(!1),
            j = r()(M, 2),
            F = j[0],
            B = j[1],
            U = p.a.useState(!1),
            V = r()(U, 2),
            H = V[0],
            z = V[1],
            W = p.a.useRef(null),
            q = p.a.useRef()
          Object(Y.b)()
          var K = Object(Q.b)({ isLiked: b === Z.a.Like && !!h }),
            X = C.reduce(function (e, t) {
              return e + t.count
            }, 0),
            $ = b ? Ie : Se
          A && ($ = b ? Oe({ count: X }) : Ae({ count: X }))
          var ne =
              ((t = {}),
              G()(t, g.a.shortcuts.like, function (e) {
                fe(!0)
              }),
              G()(t, g.a.shortcuts.reactUndo, function (e) {
                return _()
              }),
              G()(t, g.a.shortcuts.reactHmm, function (e) {
                return _(Z.a.Hmm, 'keyboard-shortcut')
              }),
              G()(t, g.a.shortcuts.reactSad, function (e) {
                return _(Z.a.Sad, 'keyboard-shortcut')
              }),
              G()(t, g.a.shortcuts.reactHaha, function (e) {
                return _(Z.a.Haha, 'keyboard-shortcut')
              }),
              G()(t, g.a.shortcuts.reactCheer, function (e) {
                return _(Z.a.Cheer, 'keyboard-shortcut')
              }),
              G()(t, g.a.shortcuts.reactLike, function (e) {
                return _(Z.a.Like, 'keyboard-shortcut')
              }),
              t),
            ie = function (e) {
              z(e === se.a.longPress), null == v || v(e)
            },
            re = function () {
              B(!0)
            },
            le = p.a.useCallback(function (e) {
              var t,
                n = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
                i =
                  null == n || null === (t = n.closest('['.concat(Pe, ']'))) || void 0 === t
                    ? void 0
                    : t.getAttribute(Pe)
              D(i ? Z.a[i] : null), e.preventDefault()
            }, [])
          p.a.useEffect(
            function () {
              if (W.current) {
                var e = Object(J.a)(W.current, le, !1)
                return function () {
                  e && e()
                }
              }
            },
            [le],
          )
          var ue = function (e) {
              return function () {
                B(!1), N && (_(N, 'picker-touchend'), D(null), e())
              }
            },
            de = function (e) {
              return p.a.createElement(ge, {
                dismissReactionPicker: e,
                enableTouch: F,
                forceHovered: N,
                legacyHeart: h,
                onSelection: _,
                reacted: b,
                reactionOptions: Te,
                withAnimation: I,
              })
            },
            pe = function (e) {
              return function (t) {
                e(), t.stopPropagation()
              }
            },
            me = function () {
              switch (b) {
                case Z.a.Cheer:
                  return Le
                case Z.a.Haha:
                  return Re
                case Z.a.Hmm:
                  return Ne
                case Z.a.Like:
                  return h ? ke.a : De
                case Z.a.Sad:
                  return Me
                default:
                  return De
              }
            },
            he = function (e) {
              return function (t) {
                e(), fe('keydown' === t.type)
              }
            },
            fe = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              b ? _() : _(Ee, e ? 'keyboard-shortcut' : 'button-tap')
            },
            ve = function () {
              return P
                ? 0 === X || (1 === X && b)
                  ? null
                  : p.a.createElement(ae, {
                      experimentalFruitBasketThreshold: s,
                      legacyHeart: h,
                      reacted: b,
                      reactionCounts: C,
                      size: l,
                      style: je.fruitBasketSpacing,
                    })
                : null
            }
          return p.a.createElement(
            te.a,
            { style: [je.root, k] },
            p.a.createElement(
              g.a,
              { enabled: !!o, handlers: ne },
              p.a.createElement(
                ce.a,
                {
                  anchorRef: H ? T : q,
                  animationDuration: 'normal',
                  animationType: 'slide',
                  contentStyle: je.popoverContainer,
                  disabled: u || d,
                  enableHover: !0,
                  enableLongPress: !0,
                  hoverDelay: 'short',
                  onDismiss: f,
                  onOpen: ie,
                  preferredVerticalOrientation: 'up',
                  renderContent: de,
                  withCardContentOverflow: !0,
                  withFixedPosition: !1,
                  withRoundedSides: !0,
                },
                function (e) {
                  var t = e.dismissPopover,
                    n = e.forceOpen
                  return p.a.createElement(
                    oe.a,
                    {
                      focusable: !1,
                      interactiveStyles: null,
                      onTouchEnd: ue(t),
                      onTouchStart: re,
                      ref: W,
                      style: je.buttonContainer,
                    },
                    function (e) {
                      var o = e.isFocusedWithin
                      return p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                          w.a,
                          c()({}, K, {
                            ActiveIcon: me(),
                            Icon: h ? we.a : ye.a,
                            accessibilityLabel: $,
                            actionIconContainerRef: q,
                            activeColor: i,
                            color: a,
                            count: X,
                            decoration: ve(),
                            enableKeyboardShortcuts: !1,
                            hoverLabel: { label: Se },
                            iconSize: l,
                            isActive: !!b,
                            isDisabled: u,
                            isFaded: d,
                            isPresentational: m,
                            onPress: he(t),
                            showBackgroundWhenActive: !0,
                            testID: E && (b ? E.unreact : E.react),
                            withCount: A,
                          }),
                        ),
                        p.a.createElement(w.a, {
                          Icon: Ce.a,
                          accessibilityLabel: xe,
                          activeColor: i,
                          color: a,
                          hoverLabel: { label: xe },
                          iconSize: l,
                          isDisabled: u,
                          isFaded: d,
                          isPresentational: m,
                          onPress: pe(n),
                          style: [!o && ee.a.visuallyHidden, !A && je.caretWithoutCount],
                        }),
                      )
                    },
                  )
                },
              ),
            ),
          )
        },
        Be = n('HSMM'),
        Ue = n('Wk1j'),
        Ve = n('G41x'),
        He = ['isFromProtectedAccount'],
        ze = m.a,
        We = function (e) {
          var t = e.activeColor,
            n = void 0 === t ? 'orange500' : t,
            i = e.color,
            a = e.count,
            o = e.enableKeyboardShortcuts,
            s = e.iconSize,
            l = e.isDisabled,
            u = e.isFaded,
            d = e.isDownvoted,
            m = e.isPresentational,
            h = e.downvoteTransitionAnimation,
            v = void 0 === h ? M : h,
            _ = e.onError,
            b = void 0 === _ ? K : _,
            k = e.onPress,
            T = e.style,
            E = e.testIDs,
            S = e.withCount && 'number' == typeof a,
            I = d ? q : z,
            x = (function (e) {
              var t = e.downvoteTransitionAnimation,
                n = e.isDownvoted,
                i = p.a.useState(!1),
                a = r()(i, 2),
                o = a[0],
                s = a[1],
                c = p.a.useRef(n)
              return (
                p.a.useEffect(
                  function () {
                    ;('object' === f()(t) || j.check(t)) && n !== c.current && (s(n), (c.current = n))
                  },
                  [n, t],
                ),
                {
                  onAnimationEnd: function () {
                    return s(!1)
                  },
                  showAnimation: o,
                  transitionAnimationUrl: t,
                }
              )
            })({ isDownvoted: d, downvoteTransitionAnimation: v })
          return p.a.createElement(
            w.a,
            c()({}, x, {
              ActiveIcon: V,
              Icon: H.a,
              accessibilityLabel: I,
              activeColor: n,
              behavioralEventContext: { viewType: 'downvote', viewState: { type: 'toggleable', toggledTo: !d } },
              color: i,
              count: a,
              enableKeyboardShortcuts: o,
              hoverLabel: { label: d ? W : z },
              iconSize: s,
              isActive: d,
              isDisabled: l,
              isFaded: u,
              isPresentational: m,
              keyboardShortcut: g.a.shortcuts.downvote,
              onError: b,
              onPress: function () {
                y.b.isFirefox() || C.a.vibrate(5), null == k || k()
              },
              style: T,
              testID: E && (d ? E.undownvote : E.downvote),
              withCount: S,
            }),
          )
        },
        qe = Q.a,
        Ke = Fe,
        Qe = Be.a,
        Xe = Ve.a
      var Ge = n('Xrkv'),
        Je = n('fs1G'),
        Ye = n('Q+qU'),
        Ze = n('3MlI'),
        $e = n('0ig/'),
        et = b.a.a0af935b,
        tt = b.a.fbaa28ef,
        nt = b.a.f9be84f0,
        it = b.a.g23ce6f0,
        at = b.a.b75196a4,
        ot = function (e) {
          return p.a.createElement(mt.ActionAnalytics, e)
        },
        rt = function (e) {
          return p.a.createElement(mt.ActionDownvote, e)
        },
        st = function (e) {
          return p.a.createElement(mt.ActionLike, e)
        },
        ct = function (e) {
          return p.a.createElement(mt.ActionReaction, e)
        },
        lt = function (e) {
          return p.a.createElement(mt.ActionReply, e)
        },
        ut = function (e) {
          return p.a.createElement(mt.ActionRetweet, e)
        },
        dt = function (e) {
          return p.a.createElement(mt.ActionShare, e)
        },
        pt = []
      function mt(e) {
        var t = e.actionSize,
          n = void 0 === t ? 'normal' : t,
          i = e.activeColor,
          o = void 0 === i ? void 0 : i,
          s = e.color,
          c = void 0 === s ? 'gray700' : s,
          l = e.displayStyle,
          u = e.downvoteCount,
          d = e.enableKeyboardShortcuts,
          m = void 0 === d || d,
          h = e.isDisabled,
          f = void 0 !== h && h,
          v = e.isDownvoted,
          _ = void 0 !== v && v,
          g = e.isFromProtectedAccount,
          w = e.isLiked,
          y = e.isRetweeted,
          C = e.isPresentational,
          k = e.likeCount,
          T = e.nativeID,
          E = e.reaction,
          S = e.reactionCounts,
          I = e.renderAnalyticsAction,
          x = void 0 === I ? ot : I,
          A = e.renderDownvoteAction,
          O = void 0 === A ? rt : A,
          P = e.renderLikeAction,
          L = void 0 === P ? st : P,
          R = e.renderReactionAction,
          N = void 0 === R ? ct : R,
          D = e.renderReplyAction,
          M = void 0 === D ? lt : D,
          j = e.renderRetweetAction,
          F = void 0 === j ? ut : j,
          B = e.renderShareAction,
          U = void 0 === B ? dt : B,
          V = e.replyCount,
          H = e.retweetCount,
          z = e.showDownvoteBeforeLike,
          W = void 0 !== z && z,
          q = e.style,
          K = e.tweetLink,
          Q = e.withAnalytics,
          X = void 0 !== Q && Q,
          G = e.withDownvote,
          J = void 0 !== G && G,
          Y = e.withCount,
          Z = void 0 !== Y && Y,
          $ = e.withReaction,
          ee = void 0 !== $ && $,
          ne = p.a.useState(!1),
          ie = r()(ne, 2),
          ae = ie[0],
          oe = ie[1],
          re = p.a.useRef(null),
          ce = Object($e.a)(),
          le = X && ce.width >= Ze.a,
          ue =
            null == S
              ? void 0
              : S.reduce(function (e, t) {
                  return e + t.count
                }, 0),
          de = p.a.useMemo(
            function () {
              if (Z) {
                var e = b.a.b03835c7,
                  t = b.a.hb7b0cea,
                  n = b.a.e089b42d,
                  i = b.a.d8320937
                return Object(Ge.a)(
                  [
                    V ? e({ replyCount: V }) : null,
                    H ? t({ retweetCount: H }) : null,
                    y ? it : null,
                    k && !ee ? n({ likeCount: k }) : null,
                    w && !ee ? et : null,
                    ue && ee ? i({ reactionCount: ue }) : null,
                    E && ee ? tt : null,
                    _ && J ? nt : null,
                  ].filter(Boolean),
                  !0,
                )
              }
            },
            [_, w, y, k, ue, E, V, H, Z, J, ee],
          ),
          pe = { color: c, iconSize: n, isDisabled: f },
          me = function () {
            return O(
              a()(
                a()({}, pe),
                {},
                {
                  activeColor: o,
                  count: u,
                  enableKeyboardShortcuts: m,
                  isDownvoted: _,
                  isPresentational: C,
                  withCount: Z,
                },
              ),
            )
          }
        return p.a.createElement(
          te.a,
          { ref: re },
          p.a.createElement(
            Ze.b,
            { accessibilityLabel: de, displayStyle: l, nativeID: T, style: [q, ae && ht.hidden] },
            M(
              a()(
                a()({}, pe),
                {},
                { activeColor: o, count: V, enableKeyboardShortcuts: m, isPresentational: C, withCount: Z },
              ),
            ),
            F(
              a()(
                a()({}, pe),
                {},
                {
                  activeColor: o,
                  count: H,
                  enableKeyboardShortcuts: m,
                  isFromProtectedAccount: g,
                  isRetweeted: y,
                  isPresentational: C,
                  withCount: Z,
                },
              ),
            ),
            J && W ? me() : null,
            ee
              ? N(
                  a()(
                    a()({}, pe),
                    {},
                    {
                      activeColor: o,
                      enableKeyboardShortcuts: m,
                      isPresentational: C,
                      onPopoverDismiss: function () {
                        return oe(!1)
                      },
                      onPopoverOpen: function (e) {
                        oe(e === se.a.longPress)
                      },
                      onReactionSelect: Je.a,
                      reacted: E,
                      reactionCounts: S,
                      tweetActionsRef: re,
                      withCount: Z,
                    },
                  ),
                )
              : L(
                  a()(
                    a()({}, pe),
                    {},
                    {
                      activeColor: o,
                      count: k,
                      enableKeyboardShortcuts: m,
                      isLiked: w,
                      isPresentational: C,
                      withCount: Z,
                    },
                  ),
                ),
            J && !W ? me() : null,
            U(
              a()(
                a()({}, pe),
                {},
                {
                  actionItems: pt,
                  activeColor: o,
                  enableKeyboardShortcuts: m,
                  isPresentational: C,
                  withCount: Z && le,
                },
              ),
            ),
            le ? x(a()(a()({}, pe), {}, { isPresentational: C, tweetLink: K })) : null,
          ),
          ae ? p.a.createElement(te.a, { style: ht.swipeInfoBar }, p.a.createElement(Ye.a, { color: c }, at)) : null,
        )
      }
      ;(mt.ActionAnalytics = ze),
        (mt.ActionDownvote = We),
        (mt.ActionLike = qe),
        (mt.ActionReaction = Ke),
        (mt.ActionReply = Qe),
        (mt.ActionRetweet = function (e) {
          var t = e.isFromProtectedAccount,
            n = void 0 !== t && t,
            i = u()(e, He)
          return p.a.createElement(
            Ue.b,
            c()({}, i, {
              excludeRetweetAction: i.excludeRetweetAction || n,
              excludeRetweetWithCommentAction: i.excludeRetweetWithCommentAction || n,
              isDisabled: i.isDisabled || (!i.isRetweeted && n),
            }),
          )
        }),
        (mt.ActionShare = Xe)
      var ht = ee.a.create(function (e) {
        return {
          swipeInfoBar: a()(
            a()({}, ee.a.absoluteFillObject),
            {},
            { alignItems: 'center', justifyContent: 'center', userSelect: 'none' },
          ),
          hidden: { visibility: 'hidden' },
        }
      })
    },
    gUPl: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M14.893 22.5H4.213c-.69 0-1.3-.29-1.72-.82-.44-.56-.6-1.32-.42-2.05.87-3.68 4.25-5.82 8.23-5.82.47 0 .93.03 1.38.09-.11.08-.21.17-.31.26-1.31 1.23-1.37 3.29-.14 4.6l3.06 3.24c.18.19.38.36.6.5zm-4.59-10.42c-1.34 0-2.85-.15-3.81-1.25-.8-.92-1.06-2.35-.79-4.35.37-2.81 2.1-4.48 4.6-4.48 2.51 0 4.23 1.67 4.61 4.48.27 2.01.01 3.43-.8 4.36-.96 1.09-2.46 1.24-3.81 1.24z',
              }),
              r.a.createElement('path', {
                d: 'M21.893 11.8l-4.22 8.51c-.06.12-.14.23-.24.32-.04.04-.09.08-.14.11-.03.02-.05.04-.08.05-.11.07-.23.11-.35.13-.06.01-.13.02-.2.02-.08 0-.17-.01-.25-.03-.08-.02-.16-.05-.23-.08-.06-.03-.11-.06-.16-.09-.06-.05-.12-.1-.18-.16l-.07-.07-3.02-3.2c-.43-.45-.4-1.18.05-1.6.45-.43 1.17-.41 1.6.04l1.97 2.09 3.49-7.04c.28-.56.96-.8 1.52-.51.55.27.78.96.51 1.51z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    gdQ4: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      var i = n('VrFO'),
        a = n.n(i),
        o = n('Y9Ll'),
        r = n.n(o),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        _ = n('tRj+'),
        b = n('3XMw'),
        g = n.n(b),
        w = n('oQhu'),
        y = n('MWbm'),
        C = n('htQn'),
        k = n('5mJL'),
        T = n('jhWN'),
        E = n('/yvb'),
        S = n('t62R'),
        I = n('rHpw'),
        x = g.a.e3a24e4b,
        A = g.a.i569ff3e,
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              h()(
                c()(e),
                '_getMemoizedBehavioralEventContext',
                Object(w.a)(function (e) {
                  return { viewType: e }
                }),
              ),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onImpression
                  e && e()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.avatarUrl,
                    n = e.onClick,
                    i = e.style,
                    a = e.to,
                    o = e.userName,
                    r = e.withButton,
                    s = e.withConversationLine,
                    c = t && o,
                    l = r ? 'add_tweet' : 'see_more',
                    u = this._getMemoizedBehavioralEventContext(l)
                  return v.a.createElement(
                    _.a,
                    { behavioralEventContext: u },
                    v.a.createElement(
                      C.a,
                      { link: a, onClick: n, style: [P.root, i] },
                      v.a.createElement(
                        k.a,
                        {
                          avatarCell: c
                            ? v.a.createElement(
                                y.a,
                                { style: [P.avatarColumn, !s && P.avatarColumnWithoutLine] },
                                s ? v.a.createElement(y.a, { style: P.conversationLine }) : null,
                                v.a.createElement(T.a, { size: 'large', uri: t }),
                              )
                            : null,
                          avatarCellStyle: P.conversationConnector,
                          cellStyle: r ? P.buttonContainer : c ? P.labelWithAvatar : P.label,
                        },
                        r
                          ? v.a.createElement(
                              E.a,
                              { accessibilityRole: 'none', size: 'xSmall', style: P.button, type: 'brandOutlined' },
                              x,
                            )
                          : v.a.createElement(S.b, { color: 'link', style: P.enlargeTouchTarget }, A),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(O, 'defaultProps', { withButton: !1, withConversationLine: !1 })
      var P = I.a.create(function (e) {
        return {
          root: {
            overflow: 'hidden',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space2,
          },
          avatarColumn: { flexDirection: 'column', flexGrow: 0, alignItems: 'center', paddingBottom: e.spaces.space4 },
          avatarColumnWithoutLine: { paddingTop: e.spaces.space12 },
          conversationConnector: { alignItems: 'center', display: 'flex', position: 'relative' },
          label: { flexGrow: 1, paddingVertical: e.spaces.space4 },
          labelWithAvatar: { flexGrow: 1, justifyContent: 'center' },
          conversationLine: {
            backgroundColor: e.colors.gray200,
            flexGrow: 1,
            flexShrink: 1,
            width: e.componentDimensions.conversationLineWidth,
            marginBottom: e.spaces.space4,
          },
          buttonContainer: { paddingVertical: e.spaces.space4, flexDirection: 'row', flexGrow: 1 },
          button: { marginVertical: e.spaces.space4 },
          enlargeTouchTarget: { paddingVertical: e.spaces.space8 },
        }
      })
    },
    iGRG: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var i,
        a = n('KEM+'),
        o = n.n(a),
        r = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.ja03b44d,
        u = c.a.da5c438f,
        d = c.a.f03dab29,
        p =
          ((i = { defaultToast: { text: l } }),
          o()(i, r.a.BlockedUserError, { toast: { text: d } }),
          o()(i, r.a.ProtectedStatusFavoriteError, { toast: { text: u } }),
          o()(i, 'showToast', !0),
          i)
    },
    jL08: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return T
      }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'a', function () {
          return S
        }),
        n.d(t, 'd', function () {
          return I
        }),
        n.d(t, 'e', function () {
          return x
        })
      var i = n('KEM+'),
        a = n.n(i),
        o = n('ddV6'),
        r = n.n(o),
        s = n('RhWx'),
        c = n.n(s),
        l = n('yiKp'),
        u = n.n(l),
        d =
          (n('yH/f'),
          n('lTEL'),
          n('7x/C'),
          n('LqLs'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('jQ3i'),
          n('x4t0'),
          n('KqXw'),
          n('MvUL'),
          n('hCOa'),
          n('JtPf'),
          n('ZVkB'),
          n('6U7i'),
          n('RqPI')),
        p = n('zrOZ'),
        m = n('bwko'),
        h = n.n(m),
        f = n('Ssj5'),
        v = 'articles',
        _ = 'rweb.articlesVisited',
        b = 'rweb.articleDomains',
        g = 'rweb/articles/ADD_DOMAINS',
        w = 'rweb/articles/ADD_VISITED_ARTICLES',
        y = function (e) {
          return { payload: e, type: g }
        },
        C = function (e) {
          return { payload: e, type: w }
        },
        k = Object.freeze({ domains: void 0, articles: new Set() })
      var T = function (e) {
          return e.articles.domains
        },
        E = function (e, t) {
          var n = T(e)
          return S(n, t)
        },
        S = function (e, t) {
          return !!e && !!t && e.includes((t || '').replace('www.', ''))
        },
        I = function (e, t, n) {
          var i = !!n && E(e, n)
          if (t && i) {
            var a =
                (function (e) {
                  return e.articles.articles
                })(e) || new Set(),
              o = h()('', t)
            return a.has(o)
          }
          return !1
        },
        x = function (e) {
          return function (t, n, i) {
            var a = i.userPersistence,
              o = h()('', e)
            return t(C([o])), A(o, a)
          }
        },
        A = function (e, t) {
          return t.get(_).then(function (n) {
            var i = (null == n ? void 0 : n.articles) || new Set()
            i.add(e)
            var a = (null == n ? void 0 : n.lastSeenMap) || {},
              o = Date.now()
            a[e] = o
            for (var s = 0, c = Object.entries(a); s < c.length; s++) {
              var l = r()(c[s], 2),
                u = l[0],
                d = l[1]
              o - Number(d) > 6048e5 && (i.delete(u), delete a[u])
            }
            return t.set(_, { articles: i, lastSeenMap: a })
          })
        }
      f.a.register(
        a()({}, v, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case g:
              return u()(u()({}, e), {}, { domains: t.payload })
            case w:
              return t.payload instanceof Array
                ? u()(u()({}, e), {}, { articles: Object(p.a)([].concat(c()(e.articles), c()(t.payload))) })
                : e
            default:
              return e
          }
        }),
        function () {
          return function (e, t, n) {
            return d.m(t())
              ? Promise.all([
                  n.devicePersistence.get(b).then(function (t) {
                    var i = null == t ? void 0 : t.domains,
                      a = null == t ? void 0 : t.updatedTime,
                      o = Date.now()
                    ;(!a || o - a > 864e5) &&
                      n.api.ArticleDomains.fetchArticleDomainsGraphQL()
                        .then(function (t) {
                          n.devicePersistence.set(b, { domains: t || [], updatedTime: o }), e(y(t || void 0))
                        })
                        .catch(function () {}),
                      t && e(y(i))
                  }),
                  n.userPersistence.get(_).then(function (t) {
                    var n = null == t ? void 0 : t.articles
                    n && e(C(Array.from(n)))
                  }),
                ]).then(function () {})
              : Promise.resolve()
          }
        },
      )
    },
    jydp: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var i = n('YRNd'),
          a = n('MQi0'),
          o = n('tI3i'),
          r = n.n(o),
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
          function o(e) {
            var n, i, o, c, l, u, d, p, m, h, f, v
            if (
              (((m = t.call(this) || this)._overshootClamping =
                null !== (n = e.overshootClamping) && void 0 !== n && n),
              (m._restDisplacementThreshold = null !== (i = e.restDisplacementThreshold) && void 0 !== i ? i : 0.001),
              (m._restSpeedThreshold = null !== (o = e.restSpeedThreshold) && void 0 !== o ? o : 0.001),
              (m._initialVelocity = null !== (c = e.velocity) && void 0 !== c ? c : 0),
              (m._lastVelocity = null !== (l = e.velocity) && void 0 !== l ? l : 0),
              (m._toValue = e.toValue),
              (m._delay = null !== (u = e.delay) && void 0 !== u ? u : 0),
              (m._useNativeDriver = Object(s.c)(e)),
              (m.__isInteraction = null !== (d = e.isInteraction) && void 0 !== d ? d : !m._useNativeDriver),
              (m.__iterations = null !== (p = e.iterations) && void 0 !== p ? p : 1),
              void 0 !== e.stiffness || void 0 !== e.damping || void 0 !== e.mass)
            )
              r()(
                void 0 === e.bounciness && void 0 === e.speed && void 0 === e.tension && void 0 === e.friction,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              ),
                (m._stiffness = null !== (h = e.stiffness) && void 0 !== h ? h : 100),
                (m._damping = null !== (f = e.damping) && void 0 !== f ? f : 10),
                (m._mass = null !== (v = e.mass) && void 0 !== v ? v : 1)
            else if (void 0 !== e.bounciness || void 0 !== e.speed) {
              var _, b
              r()(
                void 0 === e.tension &&
                  void 0 === e.friction &&
                  void 0 === e.stiffness &&
                  void 0 === e.damping &&
                  void 0 === e.mass,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              )
              var g = a.a.fromBouncinessAndSpeed(
                null !== (_ = e.bounciness) && void 0 !== _ ? _ : 8,
                null !== (b = e.speed) && void 0 !== b ? b : 12,
              )
              ;(m._stiffness = g.stiffness), (m._damping = g.damping), (m._mass = 1)
            } else {
              var w,
                y,
                C = a.a.fromOrigamiTensionAndFriction(
                  null !== (w = e.tension) && void 0 !== w ? w : 40,
                  null !== (y = e.friction) && void 0 !== y ? y : 7,
                )
              ;(m._stiffness = C.stiffness), (m._damping = C.damping), (m._mass = 1)
            }
            return (
              r()(m._stiffness > 0, 'Stiffness value must be greater than 0'),
              r()(m._damping > 0, 'Damping value must be greater than 0'),
              r()(m._mass > 0, 'Mass value must be greater than 0'),
              m
            )
          }
          ;(i = t), ((n = o).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), c(n, i)
          var l = o.prototype
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
            (l.start = function (e, t, n, i, a) {
              var r = this
              if (
                ((this.__active = !0),
                (this._startPosition = e),
                (this._lastPosition = this._startPosition),
                (this._onUpdate = t),
                (this.__onEnd = n),
                (this._lastTime = Date.now()),
                (this._frameTime = 0),
                i instanceof o)
              ) {
                var s = i.getInternalState()
                ;(this._lastPosition = s.lastPosition),
                  (this._lastVelocity = s.lastVelocity),
                  (this._initialVelocity = this._lastVelocity),
                  (this._lastTime = s.lastTime)
              }
              var c = function () {
                r._useNativeDriver ? r.__startNativeAnimation(a) : r.onUpdate()
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
                a = this._stiffness,
                o = -this._initialVelocity,
                r = n / (2 * Math.sqrt(a * i)),
                s = Math.sqrt(a / i),
                c = s * Math.sqrt(1 - r * r),
                l = this._toValue - this._startPosition,
                u = 0,
                d = 0,
                p = this._frameTime
              if (r < 1) {
                var m = Math.exp(-r * s * p)
                ;(u = this._toValue - m * (((o + r * s * l) / c) * Math.sin(c * p) + l * Math.cos(c * p))),
                  (d =
                    r * s * m * ((Math.sin(c * p) * (o + r * s * l)) / c + l * Math.cos(c * p)) -
                    m * (Math.cos(c * p) * (o + r * s * l) - c * l * Math.sin(c * p)))
              } else {
                var h = Math.exp(-s * p)
                ;(u = this._toValue - h * (l + (o + s * l) * p)), (d = h * (o * (p * s - 1) + p * l * (s * s)))
              }
              if (
                ((this._lastTime = e),
                (this._lastPosition = u),
                (this._lastVelocity = d),
                this._onUpdate(u),
                this.__active)
              ) {
                var f = !1
                this._overshootClamping &&
                  0 !== this._stiffness &&
                  (f = this._startPosition < this._toValue ? u > this._toValue : u < this._toValue)
                var v = Math.abs(d) <= this._restSpeedThreshold,
                  _ = !0
                if (
                  (0 !== this._stiffness && (_ = Math.abs(this._toValue - u) <= this._restDisplacementThreshold),
                  f || (v && _))
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
            o
          )
        })(i.a)
        t.a = l
      }.call(this, n('fRV1')))
    },
    kSIJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var i,
        a = n('KEM+'),
        o = n.n(a),
        r = n('3XMw'),
        s = n.n(r),
        c = n('mJtw'),
        l =
          ((i = {}),
          o()(i, c.a.Like, s.a.d636ebc6),
          o()(i, c.a.Haha, s.a.bd83592a),
          o()(i, c.a.Hmm, s.a.f84f0fa8),
          o()(i, c.a.Sad, s.a.g47ce0e4),
          o()(i, c.a.Cheer, s.a.fc8a13c5),
          i)
    },
    lBmi: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M23.885 19.5c-.762-3.064-3.72-5.206-7.19-5.206-1.17 0-2.27.265-3.258.707 1.246 1.08 2.157 2.5 2.564 4.138.252 1.004.052 2.03-.52 2.86h6.48c.627 0 1.2-.27 1.57-.744.38-.49.51-1.13.355-1.753zm-9.695 1.755c.38-.49.512-1.13.356-1.754-.375-1.506-1.284-2.785-2.52-3.7-1.278-.95-2.905-1.507-4.67-1.507-3.47 0-6.428 2.142-7.19 5.208-.156.626-.025 1.266.356 1.755.37.473.94.744 1.567.744h10.533c.627 0 1.197-.272 1.567-.745zm2.505-8.218c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.235 1.766 0 3.023.718 3.846.858.98 2.184 1.11 3.368 1.11zm-9.34 0c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.235 1.766 0 3.023.718 3.846.858.98 2.184 1.11 3.368 1.11z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    mbB1: function (e, t, n) {
      'use strict'
      var i = n('H5wF')
      t.a = i.a('NativeAnimatedTurboModule')
    },
    mqpi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      }),
        n.d(t, 'b', function () {
          return r
        })
      n('yH/f'), n('2G9S'), n('vrRf')
      var i = Object.freeze({
          AddToBookmarks: 'add_to_bookmarks',
          AddToMoment: 'add_to_moment',
          Analytics: 'view_tweet_activity',
          Downvote: 'downvote',
          Embed: 'embed',
          FollowAuthor: 'follow',
          HideCommunityTweet: 'hide_community_tweet',
          Like: 'like',
          ListsAddRemove: 'lists_add_remove',
          MuteConversation: 'mute_conversation',
          QuoteTweet: 'quote_tweet',
          React: 'react',
          Reply: 'reply',
          Retweet: 'retweet',
          RemoveCommunityMember: 'remove_from_community',
          SendViaDM: 'send_via_dm',
          Share: 'share',
          ShareTweetVia: 'share_tweet_via',
          PinToProfile: 'pin_to_profile',
          ViewHiddenReplies: 'view_hidden_replies',
          VoteOnPoll: 'vote_on_poll',
        }),
        a = [i.AddToBookmarks, i.Retweet, i.SendViaDM, i.ShareTweetVia],
        o = Object.freeze({
          enabled: 'tweet_limited_actions_config_enabled',
          non_compliant: 'tweet_limited_actions_config_non_compliant',
          community_tweet_member: 'tweet_limited_actions_config_community_tweet_member',
          community_tweet_non_member: 'tweet_limited_actions_config_community_tweet_non_member',
          community_tweet_hidden: 'tweet_limited_actions_config_community_tweet_hidden',
          community_tweet_member_removed: 'tweet_limited_actions_config_community_tweet_member_removed',
        }),
        r = function (e, t, n, r) {
          var s = (function (e, t, n) {
              var r = t.community_id_str,
                s = t.limited_actions
              if ('limited_replies' === s) return [i.Reply]
              if (s) {
                if (!o.hasOwnProperty(s)) return []
                var c = o[s]
                return e.getArrayValue(c, [])
              }
              return r
                ? e.isTrue('c9s_participation_enabled')
                  ? n
                    ? a
                    : [].concat(a, [i.VoteOnPoll, i.Reply])
                  : [].concat(a, [i.VoteOnPoll, i.Reply, i.QuoteTweet])
                : []
            })(e, t, r),
            c = e.isTrue('tweet_limited_actions_config_enabled'),
            l =
              '' !==
              e.getValueWithoutScribeImpression('conversation_controls_limited_replies_consumption_configuration')
          return !(null == s || !s.length || (!c && !l)) && s.indexOf(n) > -1
        }
    },
    ms2t: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M23.2 9.75h-1.588c-.777-1.352-2.22-2.275-3.888-2.275-1.41 0-2.654.664-3.48 1.682-.652-.41-1.418-.657-2.244-.657s-1.592.247-2.245.656c-.826-1.017-2.07-1.682-3.48-1.682-1.668 0-3.11.923-3.888 2.275H.8c-.414 0-.75.335-.75.75s.336.75.75.75h1.05c-.04.236-.074.476-.074.724 0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5c0-.536-.11-1.043-.283-1.52.433-.285.95-.454 1.507-.454s1.074.17 1.507.454c-.173.477-.283.984-.283 1.52 0 2.48 2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5c0-.248-.034-.487-.073-.725h1.05c.414 0 .75-.337.75-.75s-.336-.75-.75-.75zM6.275 14.975c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm8.45-3c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    pxHa: function (e, t, n) {
      'use strict'
      var i = n('XJEr'),
        a = n('tI3i'),
        o = n.n(a),
        r = i.a.API,
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
                r.startListeningToAnimatedNodeValue(this.__getNativeTag()),
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
                r.stopListeningToAnimatedNodeValue(this.__getNativeTag()))
            }),
            (e.__getNativeTag = function () {
              var e
              i.a.assertNativeAnimatedModule(),
                o()(this.__isNative, 'Attempt to get native tag from node not marked as "native"')
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
    qbku: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        a = n.n(i),
        o = n('yiKp'),
        r = n.n(o),
        s = n('m3Bd'),
        c = n.n(s),
        l = (n('hBvt'), n('ERkP')),
        u = n.n(l),
        d = n('rxPX'),
        p = Object(d.a)().withAnalytics({ element: 'social_proof' }),
        m = n('aTAq'),
        h = n('Nqmc'),
        f = n('x5Pi'),
        v = ['analytics', 'link'],
        _ = p(function (e) {
          var t = u.a.useContext(f.b)
          if (t && e.contextType === t) return null
          var n = e.analytics,
            i = e.link,
            o = c()(e, v),
            s =
              i && !Object(m.a)(i)
                ? r()(
                    r()({}, i),
                    {},
                    {
                      state: r()(
                        r()({}, i.state),
                        {},
                        {
                          referringScribeNamespace: r()(r()({}, n.contextualScribeNamespace), {}, { action: 'click' }),
                        },
                      ),
                    },
                  )
                : i
          return u.a.createElement(
            h.a,
            a()({}, o, {
              link: s,
              onClick: function () {
                var t = e.analytics,
                  n = e.onClick
                t.scribeAction('click'), n && n()
              },
            }),
          )
        })
      t.a = _
    },
    'r7g+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ae
      })
      var i = n('yiKp'),
        a = n.n(i),
        o = (n('TJCb'), n('7x/C'), n('DZ+c'), n('hBvt'), n('ERkP')),
        r = n.n(o),
        s = n('t62R'),
        c = n('nBUg'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('Z6aJ'),
        p = n('rHpw'),
        m = n('JWUO'),
        h = n('E0cF'),
        f = n('97Jx'),
        v = n.n(f),
        _ = n('ddV6'),
        b = n.n(_),
        g = n('m3Bd'),
        w = n.n(g),
        y = (n('yH/f'), n('lTEL'), n('87if'), n('kYxP'), n('Cm4o'), n('KrtT'), n('ho0z'), n('SEra')),
        C = n('ir4X'),
        k = n('e5HP'),
        T = n('GBcw'),
        E = n('tLTi'),
        S = n('Nqmc'),
        I = n('v302'),
        x = n('sX0n'),
        A = n('feOz'),
        O = n('YBcl'),
        P = n('kY28'),
        L = n('6nXH'),
        R = n('cTG8'),
        N = n('R7KY'),
        D = n('9VO7'),
        M = n('jV+4'),
        j = n('0/y9'),
        F = [
          'renderActionsBar',
          'renderActionMenu',
          'renderEducation',
          'renderHighlightedUserLabel',
          'renderPromotedIndicator',
          'renderPromotionStatusBadge',
          'renderReplyContext',
          'renderRichContent',
          'renderSocialContext',
          'renderText',
          'renderTimestamp',
          'renderTombstone',
          'renderUserAvatar',
          'renderUserFollowIndicator',
          'renderUserName',
          'promotedContent',
          'quotedTweetTombstoneInfo',
          'socialContext',
          'staticLinkConfig',
          'tweet',
        ],
        B = Object.freeze({
          ActionsBar: A.a,
          ActionMenu: x.a,
          Education: O.a,
          HighlightedUserLabel: C.a,
          PromotedIndicator: k.a,
          ReplyContext: P.a,
          RichContent: L.a,
          SocialContext: S.a,
          Text: R.a,
          Tombstone: I.a,
          Timestamp: T.a,
          UserAvatar: N.a,
          UserFollowIndicator: D.a,
          UserName: M.a,
        }),
        U = {
          linkProcessor: function (e) {
            return a()(a()({}, e), {}, { pathname: new URL(e.pathname, 'https://twitter.com').toString() })
          },
        }
      function V(e) {
        var t = r.a.useRef(e)
        return r.a.useCallback(function (e) {
          var n = e.children
          return null === t.current ? n : r.a.createElement(y.Provider, t.current, n)
        }, [])
      }
      var H = function (e) {
          return r.a.createElement(B.ActionMenu, e)
        },
        z = function (e) {
          return r.a.createElement(B.ActionsBar, v()({}, e, { isDisabled: !0 }))
        },
        W = function (e) {
          return r.a.createElement(B.Education, e)
        },
        q = function (e) {
          return r.a.createElement(B.HighlightedUserLabel, e)
        },
        K = function (e) {
          return r.a.createElement(B.PromotedIndicator, e)
        },
        Q = function (e) {
          return null
        },
        X = function (e) {
          return r.a.createElement(B.ReplyContext, e)
        },
        G = function (e) {
          return r.a.createElement(B.RichContent, e)
        },
        J = function (e) {
          return r.a.createElement(B.SocialContext, e)
        },
        Y = function (e) {
          return r.a.createElement(B.Timestamp, e)
        },
        Z = function (e) {
          return r.a.createElement(B.Text, e)
        },
        $ = function (e) {
          return r.a.createElement(B.Tombstone, e)
        },
        ee = function (e) {
          return r.a.createElement(B.UserAvatar, e)
        },
        te = function (e) {
          return r.a.createElement(B.UserFollowIndicator, e)
        },
        ne = function (e) {
          return r.a.createElement(B.UserName, e)
        },
        ie = u.a.g5662c95
      function ae(e) {
        var t,
          n,
          i,
          o,
          l,
          u = (function (e) {
            var t = e.renderActionsBar,
              n = void 0 === t ? z : t,
              i = e.renderActionMenu,
              o = void 0 === i ? H : i,
              s = e.renderEducation,
              c = void 0 === s ? W : s,
              l = e.renderHighlightedUserLabel,
              u = void 0 === l ? q : l,
              p = e.renderPromotedIndicator,
              m = void 0 === p ? K : p,
              f = e.renderPromotionStatusBadge,
              v = void 0 === f ? Q : f,
              _ = e.renderReplyContext,
              g = void 0 === _ ? X : _,
              y = e.renderRichContent,
              C = void 0 === y ? G : y,
              k = e.renderSocialContext,
              T = void 0 === k ? J : k,
              S = e.renderText,
              I = void 0 === S ? Z : S,
              x = e.renderTimestamp,
              A = void 0 === x ? Y : x,
              O = e.renderTombstone,
              P = void 0 === O ? $ : O,
              L = e.renderUserAvatar,
              R = void 0 === L ? ee : L,
              N = e.renderUserFollowIndicator,
              D = void 0 === N ? te : N,
              M = e.renderUserName,
              B = void 0 === M ? ne : M,
              ie = e.promotedContent,
              ae = e.quotedTweetTombstoneInfo,
              oe = e.socialContext,
              re = e.staticLinkConfig,
              se = void 0 === re ? U : re,
              ce = e.tweet,
              le = w()(e, F),
              ue = h.a.getOriginalTweet(ce),
              de = Object(j.useTweetA11yIds)(ue),
              pe = b()(de, 2),
              me = pe[0],
              he = pe[1],
              fe = {
                renderActionsBar: function (e) {
                  var t, i
                  return n(
                    a()(
                      {
                        enableKeyboardShortcuts: !1,
                        isLiked: ue.favorited,
                        isRetweeted: ue.retweeted,
                        likeCount: ue.favorite_count,
                        nativeID: me.actionsBar,
                        reaction: ue.reacted,
                        reactionCounts: ue.reaction_count,
                        replyCount: ue.reply_count,
                        retweetCount:
                          (null !== (t = ue.quote_count) && void 0 !== t ? t : 0) +
                          (null !== (i = ue.retweet_count) && void 0 !== i ? i : 0),
                        tweetLink: ue.permalink,
                        withAnalytics: !1,
                        withCount: !0,
                      },
                      e,
                    ),
                  )
                },
                renderActionMenu: function (e) {
                  return o(a()({ items: [] }, e))
                },
                renderEducation: function (e) {
                  return c(
                    a()(
                      {
                        conversationControlLabelNativeID: me.conversationControlLabel,
                        exclusivityInfoLabelNativeID: me.exclusivityInfoLabel,
                        trustedFriendsLabelNativeID: me.trustedFriendsLabel,
                        tweet: ce,
                      },
                      e,
                    ),
                  )
                },
                renderHighlightedUserLabel: function (e) {
                  return ue.user.highlightedLabel
                    ? u(a()({ label: ue.user.highlightedLabel, nativeID: me.userLabel }, e))
                    : null
                },
                renderPromotedIndicator: function (e) {
                  return ie && d.a.isPromoted(ie)
                    ? m(a()({ contentAuthorId: ue.user.id_str, nativeID: me.promotedLabel, promotedContent: ie }, e))
                    : null
                },
                renderPromotionStatusBadge: function (e) {
                  return v({ nativeID: me.promotionStatusLabel })
                },
                renderReplyContext: function (e) {
                  var t
                  return ue.in_reply_to_status_id_str
                    ? g(
                        a()(
                          {
                            displayTextRange: ue.display_text_range,
                            inReplyToName: ue.in_reply_to_name,
                            inReplyToScreenName: ue.in_reply_to_screen_name,
                            inReplyToStatusIdStr: ue.in_reply_to_status_id_str,
                            inReplyToUserIdStr: ue.in_reply_to_user_id_str,
                            nativeID: me.replyContext,
                            tweetPermalink: ue.permalink,
                            unmentionedUserIds: ue.unmentioned_user_ids,
                            userMentionsEntities: null === (t = ue.entities) || void 0 === t ? void 0 : t.user_mentions,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderRichContent: function (e) {
                  return C(
                    a()(
                      {
                        forwardPivotInfo: ce.softIntervention,
                        nativeID: me.richContent,
                        quotedTweetTombstoneInfo: ae,
                        tweet: ce,
                        withAltTextBadge: !1,
                        withCardLinks: !1,
                        withCondensedQuoteTweet: !0,
                        withMediaTagsIcon: !1,
                        withQuoteTweetHeaderLinks: !1,
                        withQuoteTweetLink: !0,
                        withQuoteTweetMedia: !0,
                      },
                      e,
                    ),
                  )
                },
                renderSocialContext: function (e) {
                  return oe
                    ? T(
                        a()(
                          {
                            contextType: null == oe ? void 0 : oe.contextType,
                            link: oe.link,
                            nativeID: me.socialContext,
                            retweetData: { isSelfRetweet: oe.isSelfRetweet, name: oe.name, screenName: oe.screenName },
                            text: oe.text,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderText: function (e) {
                  var t
                  return I(
                    a()(
                      {
                        displayTextRange: ue.display_text_range,
                        enrichments: ue.enrichments,
                        entities: ue.entities,
                        lang: ue.lang,
                        linkify: !0,
                        nativeID: me.text,
                        quotedTweetId: null === (t = ue.quoted_status) || void 0 === t ? void 0 : t.id_str,
                        quotedTweetPermalink: ue.quoted_status_permalink,
                        text: ue.text,
                        unmentionedUserIds: ue.unmentioned_user_ids,
                      },
                      e,
                    ),
                  )
                },
                renderTimestamp: function (e) {
                  return A(
                    a()(
                      {
                        nativeID: me.timestamp,
                        link: { pathname: ue.permalink, state: { contextTweetId: ue.id_str, promotedContent: ie } },
                        timestamp: ue.created_at,
                      },
                      e,
                    ),
                  )
                },
                renderTombstone: function (e) {
                  var t = ue.tombstoneInfo || ce.tombstoneInfo
                  return null != t && t.richText
                    ? P(
                        a()(
                          {
                            children: r.a.createElement(E.a, {
                              dir: t.richText.rtl ? 'rtl' : 'ltr',
                              entities: t.richText.entities,
                              text: t.richText.text,
                            }),
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderUserAvatar: function (e) {
                  return R(
                    a()(
                      {
                        nativeID: me.avatar,
                        promotedContent: ie,
                        screenName: ue.user.screen_name,
                        uri: ue.user.profile_image_url_https,
                        withLink: !0,
                      },
                      e,
                    ),
                  )
                },
                renderUserFollowIndicator: function (e) {
                  return ue.has_super_follower ? D(a()({ type: 'superFollower' }, e)) : null
                },
                renderUserName: function (e) {
                  return B(
                    a()(
                      {
                        isProtected: ue.user.protected,
                        isVerified: ue.user.verified,
                        name: ue.user.name,
                        nativeID: me.username,
                        promotedContent: ie,
                        screenName: ue.user.screen_name,
                      },
                      e,
                    ),
                  )
                },
              }
            return {
              LinkConfigProvider: V(se),
              a11yIds: me,
              a11yIdList: he,
              props: a()(
                a()({}, fe),
                {},
                { tweet: ce, promotedContent: ie, socialContext: oe, quotedTweetTombstoneInfo: ae },
                le,
              ),
            }
          })(e),
          f = u.LinkConfigProvider,
          v = u.a11yIdList,
          _ = u.a11yIds,
          g = u.props,
          y = h.a.getOriginalTweet(g.tweet),
          C = y.permalink,
          k = y.tombstoneInfo || g.tweet.tombstoneInfo,
          T = d.a.isPromoted(g.promotedContent),
          S = c.b.useProps(),
          I = S.edgeToEdgeEnabled(),
          x = S.tweetRendersPromotedContentBadgeBelowHeader(),
          A = null === (t = g.conversationTreeMetadata) || void 0 === t ? void 0 : t.ancestorConnector,
          O = null === (n = g.conversationTreeMetadata) || void 0 === n ? void 0 : n.indents,
          P = g.conversationTreeMetadata
            ? r.a.createElement(
                s.b,
                { nativeID: _.conversationLevel, style: p.a.visuallyHidden },
                ie({ conversationTreeDepth: g.conversationTreeMetadata.depth.toString() }),
              )
            : null,
          L = g.renderTombstone({
            actionLink: C,
            actionText: null == k || null === (i = k.richRevealText) || void 0 === i ? void 0 : i.text,
            style: oe.tombstone,
          })
        return r.a.createElement(
          f,
          null,
          r.a.createElement(
            m.a,
            {
              a11yDomIds: v,
              actionMenu: g.renderActionMenu(),
              avatar: g.renderUserAvatar(),
              footer: null === (o = g.renderSelfThreadCTA) || void 0 === o ? void 0 : o.call(g),
              header: g.renderSocialContext({
                iconSize: 'large',
                iconStyle: oe.socialContextIcon,
                style: oe.socialContext,
                weight: 'bold',
              }),
              indents: O,
              link: g.link
                ? ((l = g.link),
                  'string' == typeof l ? { anchorless: !0, pathname: l } : a()(a()({}, l), {}, { anchorless: !0 }))
                : void 0,
              onBlur: function () {
                var e
                return null === (e = g.onBlur) || void 0 === e ? void 0 : e.call(g)
              },
              onFocus: function () {
                var e
                return null === (e = g.onFocus) || void 0 === e ? void 0 : e.call(g)
              },
              onPress: function (e) {
                var t
                return null === (t = g.onPress) || void 0 === t ? void 0 : t.call(g, e)
              },
              testID: g.testID,
              timestamp: T || I ? null : g.renderTimestamp(),
              userFollowIndicators: g.renderUserFollowIndicator(),
              userLabel: g.renderHighlightedUserLabel(),
              userName: g.renderUserName({
                screenNameSuffix: T || !I ? null : g.renderTimestamp(),
                withStackedLayout: I,
              }),
              withBottomLine: g.withBottomLine,
              withElbow: O ? 'side' === A : void 0,
              withFullWidthChildren: I,
              withTopLine: g.withTopLine,
              withUnreadStyles: g.withUnreadStyles,
            },
            x
              ? g.renderPromotedIndicator({
                  style: h.a.hasInteractiveText(y)
                    ? oe.promotedIndicatorBelowHeaderWithInteractiveHighlights
                    : oe.promotedIndicatorBelowHeader,
                })
              : null,
            P,
            null !== L
              ? L
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  g.renderReplyContext({ style: oe.replyContext }),
                  g.renderText({ size: 'body' }),
                  g.renderRichContent({ withRoundMediaCorners: !I }),
                ),
            g.renderEducation({ displayStyle: 'inline' }),
            g.renderActionsBar({ actionSize: 'normal', displayStyle: 'inline', style: oe.actionsBar, withCount: !0 }),
            x ? null : g.renderPromotedIndicator({ style: oe.promotedIndicator }),
            g.renderPromotionStatusBadge({ nativeID: _.promotionStatusLabel }),
          ),
        )
      }
      ;(ae.ActionMenu = B.ActionMenu),
        (ae.ActionsBar = B.ActionsBar),
        (ae.Education = B.Education),
        (ae.HighlightedUserLabel = B.HighlightedUserLabel),
        (ae.PromotedIndicator = B.PromotedIndicator),
        (ae.ReplyContext = B.ReplyContext),
        (ae.RichContent = B.RichContent),
        (ae.SocialContext = B.SocialContext),
        (ae.Text = B.Text),
        (ae.Timestamp = B.Timestamp),
        (ae.Tombstone = B.Tombstone),
        (ae.UserAvatar = B.UserAvatar),
        (ae.UserFollowIndicator = B.UserFollowIndicator),
        (ae.UserName = B.UserName)
      var oe = p.a.create(function (e) {
        return {
          actionsBar: { marginTop: e.spaces.space12 },
          replyContext: { marginBottom: e.spaces.space2 },
          socialContext: { marginBottom: e.spaces.space4 },
          socialContextIcon: { marginBottom: e.spaces.space4 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          tombstone: { marginVertical: e.spaces.space4 },
        }
      })
    },
    rx9x: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'b', function () {
          return p
        })
      var i = n('KEM+'),
        a = n.n(i),
        o = n('yiKp'),
        r = n.n(o),
        s = n('Ssj5'),
        c = 'engagementNudges',
        l = { misinfo: {} },
        u = 'rweb/engagementNudges/SET_TWEET_MISINFO_ACTION_TAKEN'
      s.a.register(
        a()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case u:
              return t.payload
                ? r()(r()({}, e), {}, { misinfo: r()(r()({}, e.misinfo), {}, a()({}, t.payload, !0)) })
                : e
            default:
              return e
          }
        }),
      )
      var d = function (e, t) {
          return !!e.engagementNudges.misinfo[t]
        },
        p = function (e) {
          return { type: u, payload: e }
        }
    },
    sQjL: function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        a = n.n(i),
        o = n('97Jx'),
        r = n.n(o),
        s = n('3XMw'),
        c = n.n(s),
        l = n('cmUU'),
        u = n('efqG'),
        d = n('rHpw'),
        p = n('MWbm'),
        m = c.a.b09adb0c,
        h = c.a.c2637ef5,
        f = function (e) {
          var t = e.Icon,
            n = e.children,
            i = e.headline,
            o = e.onAction,
            s = e.onDismiss,
            c = e.onOpen,
            d = e.onSecondaryAction,
            f = e.style,
            _ = e.subtext,
            b = e.thumbnailColor,
            g = e.tweetPermalink
          return a.a.createElement(
            p.a,
            {
              onClick: function (e) {
                e.stopPropagation()
              },
              style: f,
            },
            a.a.createElement(
              u.a,
              {
                onDismiss: s,
                renderContent: function (e, n) {
                  var s = function () {
                      d && d(), e()
                    },
                    c = g
                      ? {
                          actionLabel: m,
                          actionLink: g,
                          onAction: function () {
                            o && o()
                          },
                          secondaryActionLabel: h,
                          onSecondaryAction: s,
                        }
                      : { actionLabel: h, onAction: s }
                  return a.a.createElement(
                    p.a,
                    { style: 'popover' === n ? v.interstitialPopover : void 0 },
                    a.a.createElement(
                      l.a,
                      r()({}, c, {
                        contentStyle: v.content,
                        graphic: t,
                        graphicDisplayMode: 'thumbnail',
                        graphicThumbnailColor: b,
                        headline: i,
                        subtext: _,
                        withBottomPadding: !1,
                        withCloseButton: !1,
                      }),
                    ),
                  )
                },
              },
              a.a.createElement(p.a, { accessibilityRole: 'button', onClick: c }, n),
            ),
          )
        },
        v = d.a.create(function (e) {
          return {
            interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 },
            content: { marginVertical: 0, marginBottom: e.spaces.space28 },
          }
        }),
        _ = n('lBmi'),
        b = n('gUPl'),
        g = n('gBde'),
        w = n('Oib4'),
        y = n('EyD/'),
        C = {
          conversationControlsFollowersCanEngage: { Icon: _.a, headline: c.a.bb7b821a, subtext: c.a.h15b020c },
          conversationControlsFollowersCannotEngage: { Icon: _.a, headline: c.a.ab105904, subtext: c.a.h15b020c },
          conversationControlsCommunityCanEngage: { Icon: b.a, headline: c.a.bb7b821a, subtext: c.a.j86de6d0 },
          conversationControlsCommunityCannotEngage: { Icon: b.a, headline: c.a.ab105904, subtext: c.a.j86de6d0 },
          conversationControlsByInvitationCanEngage: { Icon: g.a, headline: c.a.bb7b821a, subtext: c.a.cededc6f },
          conversationControlsByInvitationCannotEngage: { Icon: g.a, headline: c.a.ab105904, subtext: c.a.cededc6f },
          communityHiddenTweetEducation: { Icon: w.a, headline: c.a.g7ea1122, subtext: c.a.f9560709 },
          communityRemovedMemberEducation: { Icon: w.a, headline: c.a.g7ea1122, subtext: c.a.jd773100 },
          exclusiveToSuperFollowersCreator: {
            Icon: y.a,
            thumbnailColor: 'exclusive',
            headline: c.a.dbf9738f,
            subtext: c.a.d95d8f24,
          },
          exclusiveToSuperFollowersReplyOwn: {
            Icon: y.a,
            thumbnailColor: 'exclusive',
            headline: c.a.dbf9738f,
            subtext: c.a.ff6895e3,
          },
          exclusiveToSuperFollowersReplyOthers: {
            Icon: y.a,
            thumbnailColor: 'exclusive',
            headline: c.a.f1140912,
            subtext: c.a.j1a5fd02,
          },
        }
      t.a = function (e) {
        var t = e.children,
          n = e.onAction,
          i = e.onDismiss,
          o = e.onOpen,
          r = e.onSecondaryAction,
          s = e.screenName,
          c = e.style,
          l = e.tweetPermalink,
          u = e.type,
          d = C[u],
          p = d.Icon,
          m = d.headline,
          h = d.subtext,
          v = d.thumbnailColor,
          _ = (function (e, t) {
            return 'string' != typeof e ? e({ screenName: t }) : e
          })(h, s)
        return a.a.createElement(
          f,
          {
            Icon: p,
            headline: m,
            onAction: n,
            onDismiss: i,
            onOpen: o,
            onSecondaryAction: r,
            style: c,
            subtext: _,
            thumbnailColor: v,
            tweetPermalink: l,
          },
          t,
        )
      }
    },
    sUoZ: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M22.18 9.565c-.157-.487-.61-.82-1.126-.82h-5.928l-2.007-5.88c-.164-.476-.612-.8-1.12-.8s-.956.322-1.12.8L8.874 8.743H2.945c-.513 0-.97.332-1.126.82-.158.49.02 1.02.44 1.318l4.735 3.357-2.018 5.908c-.164.484 0 1.02.415 1.324.415.304.97.31 1.39.016L12 17.782l5.22 3.703c.206.146.446.218.686.218.25 0 .497-.08.705-.233.41-.305.577-.84.41-1.324l-2.015-5.906 4.735-3.356c.414-.3.595-.83.44-1.32z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    sX0n: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var i = n('ERkP'),
        a = n.n(i),
        o = n('mjJ+'),
        r = n('6/RC'),
        s = n('IG7M')
      function c(e) {
        var t = e.Icon,
          n = e.isDisabled,
          i = e.items,
          c = e.onOpen
        return r.canUseDOM && i.length
          ? a.a.createElement(s.a, {
              Icon: t,
              isDisabled: n,
              onClick: c,
              renderActionMenu: function (e) {
                return a.a.createElement(o.a, { items: i, onCloseRequested: e })
              },
            })
          : null
      }
    },
    vG6z: function (e, t, n) {
      'use strict'
      var i = n('H5wF')
      t.a = i.a('NativeAnimatedModule')
    },
    vbWy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var i,
        a = n('KEM+'),
        o = n.n(a),
        r = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('fs1G'),
        u = c.a.c730cd08,
        d = c.a.f1d600ab,
        p = c.a.d80d33c5,
        m = c.a.j3403c05,
        h =
          ((i = { defaultToast: { text: d } }),
          o()(i, r.a.BlockedUserError, { toast: { text: u } }),
          o()(i, r.a.DuplicateStatusError, { customAction: l.a }),
          o()(i, r.a.InvalidRetweetForStatus, { toast: { text: p } }),
          o()(i, r.a.OverStatusUpdateLimit, { toast: { text: m } }),
          o()(i, 'showToast', !0),
          i)
    },
    xXop: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        a = n.n(i),
        o = n('yiKp'),
        r = n.n(o),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        _ = n('KEM+'),
        b = n.n(_),
        g = (n('yH/f'), n('ho0z'), n('Blm6'), n('ERkP')),
        w = n.n(g),
        y = n('0JOx'),
        C = (n('hBvt'), n('ddV6')),
        k = n.n(C),
        T = (n('uFXj'), n('3XMw')),
        E = n.n(T),
        S = n('MWbm'),
        I = n('tevE'),
        x = n('t62R'),
        A = n('/yvb'),
        O = n('cm6r'),
        P = n('py1r'),
        L = n('rHpw'),
        R = n('0weh'),
        N = n('6s7X'),
        D = n('iySH'),
        M = E.a.i859a9d3,
        j = E.a.gc45a909,
        F = function (e) {
          var t = e.buttonLabel,
            n = e.condensedText,
            i = e.expanded,
            a = e.heading,
            o = e.icon,
            r = e.iconExpanded,
            s = e.isExpandable,
            c = e.learnMoreLink,
            l = e.link,
            u = e.onPress,
            d = e.subheading,
            p = w.a.useState(i),
            m = k()(p, 2),
            h = m[0],
            f = m[1],
            v = function (e) {
              e.preventDefault(), e.stopPropagation(), f(!0)
            }
          return h
            ? w.a.createElement(
                S.a,
                { focusable: !0, style: [B.container, B.containerExpanded] },
                r || o || w.a.createElement(R.a, { style: [B.iconPrimaryColor, B.iconExpanded] }),
                w.a.createElement(I.a, { align: 'center', size: 'title4', style: B.text, weight: 'bold' }, a),
                w.a.createElement(I.a, { align: 'center', color: 'gray700', style: B.text }, d),
                c ? w.a.createElement(x.b, { align: 'center', link: c, style: B.learnMore }, M) : null,
                w.a.createElement(A.a, { link: l, onPress: u, type: 'brandFilled' }, t),
              )
            : w.a.createElement(
                O.a,
                { focusable: !0, link: l, onPress: u, style: [B.container, B.containerCondensed] },
                function (e) {
                  var t = e.isHovered
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    o || w.a.createElement(R.a, { style: [B.iconPrimaryColor, B.iconCondensed] }),
                    w.a.createElement(x.b, { style: B.condensedText }, n),
                    s
                      ? w.a.createElement(P.a, null, function (e) {
                          var t = e.isHovered
                          return w.a.createElement(A.a, {
                            accessibilityLabel: j,
                            icon: w.a.createElement(N.a, { style: t ? B.infoIconPrimary : B.infoIconGray }),
                            onClick: v,
                            size: 'xSmall',
                            style: B.infoButton,
                            type: 'brandText',
                          })
                        })
                      : w.a.createElement(D.a, { style: [t ? B.iconPrimaryColor : B.iconGrayColor, B.rightIcon] }),
                  )
                },
              )
        }
      F.defaultProps = { isExpandable: !1 }
      var B = L.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              backgroundColor: e.colors.gray0,
              borderRadius: e.borderRadii.small,
              margin: e.spaces.space12,
            },
            containerExpanded: {
              paddingBottom: e.spaces.space16,
              paddingHorizontal: e.spaces.space16,
              paddingTop: e.spaces.space20,
            },
            containerCondensed: { flexDirection: 'row', padding: e.spaces.space12 },
            iconPrimaryColor: { color: e.colors.primary },
            iconGrayColor: { color: e.colors.gray300 },
            iconExpanded: { fontSize: e.fontSizes.title4, paddingBottom: e.spaces.space12 },
            iconCondensed: { fontSize: e.fontSizes.headline1, paddingRight: e.spaces.space4 },
            learnMore: { color: e.colors.link, paddingBottom: e.spaces.space16 },
            rightIcon: { fontSize: e.fontSizes.body, paddingLeft: e.spaces.space4 },
            text: { paddingBottom: e.spaces.space16 },
            condensedText: { paddingRight: e.spaces.space2 },
            infoButton: { marginLeft: 'auto', marginRight: 'calc(-1 * '.concat(e.spaces.space8, ')') },
            infoIconPrimary: { color: e.colors.primary },
            infoIconGray: { color: e.colors.gray300 },
          }
        }),
        U = F,
        V = n('ms2t'),
        H = E.a.ibd021f1,
        z = E.a.ca58508e,
        W = E.a.g5092765,
        q = E.a.a2d5c006,
        K = E.a.g37bb2d0,
        Q = L.a.create(function (e) {
          return {
            glassIcon: {
              alignSelf: 'center',
              borderRadius: e.borderRadii.infinite,
              backgroundColor: e.colors.primary,
              color: 'white',
              fontSize: e.fontSizes.subtext2,
              marginRight: 7,
              padding: 4,
            },
            glassIconExpanded: { fontSize: e.fontSizes.headline1, marginRight: 0, marginBottom: e.spaces.space12 },
          }
        }),
        X = function (e) {
          var t = e.articleNudgeFollowed,
            n = e.link,
            i = e.onClick,
            a = e.shouldShowArticleNudgeTip,
            o = w.a.createElement(V.a, { style: Q.glassIcon }),
            r = w.a.createElement(V.a, { style: [Q.glassIcon, Q.glassIconExpanded] })
          return w.a.createElement(U, {
            buttonLabel: W,
            condensedText: t ? q : H,
            expanded: a,
            heading: t ? q : H,
            icon: o,
            iconExpanded: r,
            isExpandable: !0,
            learnMoreLink: 'https://help.twitter.com/using-twitter/how-to-retweet#prompt',
            link: n,
            onPress: i,
            subheading: t ? K : z,
          })
        },
        G = n('XIWT'),
        J = n('6/RC'),
        Y = n('CaKu'),
        Z = n('xVN5'),
        $ = n('1YZw'),
        ee = n('eSoz'),
        te = n('Q8CU'),
        ne = n('Ig1G'),
        ie = n('BQZD'),
        ae = n('LQyW'),
        oe = n('RqPI'),
        re = n('D5n3'),
        se = n('G6rE'),
        ce = n('xZGM'),
        le = n('Hja3'),
        ue = n('rxPX'),
        de = n('0KEI'),
        pe = n('P1r1'),
        me = n('jL08'),
        he = n('rx9x'),
        fe = n('TuTd'),
        ve = n('XOJV'),
        _e = function (e, t) {
          return Object(ce.A)(e, ce.b)
        },
        be = function (e, t) {
          return Object(ce.A)(e, ce.s)
        },
        ge = function (e, t) {
          return Object(ce.y)(e, ce.l)
        },
        we = function (e) {
          return Z.k(e, '')
        },
        ye = function (e, t) {
          return Object(fe.a)(e, t.tweet.id_str)
        },
        Ce = function (e, t) {
          return Object(he.a)(e, t.tweet.id_str)
        },
        ke = function (e, t) {
          var n = t.tweet.community_id_str,
            i = n ? ee.c.select(e, n) : void 0
          return Object(ne.g)(null == i ? void 0 : i.role)
        },
        Te = function (e, t) {
          var n,
            i,
            a,
            o,
            r = t.tweet,
            s =
              null == r ||
              null === (n = r.card) ||
              void 0 === n ||
              null === (i = n.binding_values) ||
              void 0 === i ||
              null === (a = i.domain) ||
              void 0 === a
                ? void 0
                : a.string_value,
            c = null == r || null === (o = r.card) || void 0 === o ? void 0 : o.url
          return c && s ? Object(me.d)(e, c, s) : void 0
        },
        Ee = function (e, t) {
          var n,
            i,
            a,
            o = t.tweet,
            r =
              null == o ||
              null === (n = o.card) ||
              void 0 === n ||
              null === (i = n.binding_values) ||
              void 0 === i ||
              null === (a = i.domain) ||
              void 0 === a
                ? void 0
                : a.string_value
          return r ? Object(me.c)(e, r) : void 0
        },
        Se = function (e, t) {
          var n = t.bookmarkFolderId
          if (n) {
            var i = le.b.select(e, n)
            return null == i ? void 0 : i.name
          }
        },
        Ie = function (e, t) {
          var n = t.tweet
          return n ? Object(ae.b)(e, n) : void 0
        },
        xe = Object(ue.a)()
          .propsFromState(function () {
            return {
              canShowReactionsEducation: be,
              composerData: we,
              dataSaverMode: pe.k,
              isArticleDomainMatched: Ee,
              isCommunityMember: ke,
              likeTransitionAnimation: Ie,
              liveCounts: ye,
              loggedInUser: se.e.selectLoggedInUser,
              misinfoNudgeActionTaken: Ce,
              sessionToken: oe.v,
              shouldShowArticleNudgeTip: _e,
              wasArticleVisited: Te,
              bookmarkFolderName: Se,
              daysSinceDownvoteEducation: ge,
              replyVotingSurveyClicked: pe.y,
            }
          })
          .adjustStateProps(function (e, t) {
            var n = e.bookmarkFolderName,
              i = e.canShowReactionsEducation,
              a = e.composerData,
              o = e.dataSaverMode,
              r = e.daysSinceDownvoteEducation,
              s = e.isArticleDomainMatched,
              c = e.isCommunityMember,
              l = e.likeTransitionAnimation,
              u = e.liveCounts,
              d = e.loggedInUser,
              p = e.misinfoNudgeActionTaken,
              m = e.replyVotingSurveyClicked,
              h = e.sessionToken,
              f = e.shouldShowArticleNudgeTip,
              v = e.wasArticleVisited
            t.tweet
            return {
              canShowReactionsEducation: i,
              dataSaverMode: o,
              daysSinceDownvoteEducation: r,
              isArticleDomainMatched: s,
              isCommunityMember: c,
              likeTransitionAnimation: l,
              liveCounts: u,
              misinfoNudgeActionTaken: p,
              replyVotingSurveyClicked: m,
              sessionToken: h,
              shouldShowArticleNudgeTip: f,
              wasArticleVisited: v,
              bookmarkFolderName: n,
              composerHasData: a.length > 0 && !Object(te.b)(a[0]),
              loggedInUserFavCount: (null == d ? void 0 : d.favourites_count) || 0,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: ce.w,
              addToast: $.b,
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_ACTIONS_BAR_CONTAINER',
              ),
              onBookmark: ve.a.bookmark,
              onDownvote: ve.a.downvote,
              onLike: ve.a.like,
              onReact: ve.a.react,
              onRetweet: ve.a.retweet,
              onUnbookmark: ve.a.unbookmark,
              onUndownvote: ve.a.undownvote,
              onUnlike: ve.a.unlike,
              onUnreact: ve.a.unreact,
              onUnretweet: re.a,
              removeTweetsFromBookmarksTimeline: ie.d,
              removeTweetFromBookmarkFolder: le.b.removeTweetFromBookmarkFolder,
              removeTweetFromBookmarkFolderTimeline: le.d,
              updateCounts: ve.a.updateCounts,
              resetDraft: Z.f,
              setArticlesVisited: me.e,
              setReplyVotingSurveyClicked: pe.K,
              setTweetMisinfoActionTaken: he.b,
              updateLiveCounts: fe.b,
            }
          })
          .withAnalytics(),
        Ae = n('7JQg'),
        Oe = n('mqpi'),
        Pe = n('feu+'),
        Le = E.a.f755f71f,
        Re = function () {
          var e = w.a.createElement(x.b, {
            color: 'blue500',
            link: 'https://help.twitter.com/en/rules-and-policies/enforcement-options',
            withInteractiveStyling: !0,
          })
          return w.a.createElement(
            E.a.I18NFormatMessage,
            { $i18n: 'caf3fb60' },
            w.a.cloneElement(e, null, E.a.eb2aba8e),
          )
        },
        Ne = Object.freeze({
          HiddenCommunityTweet: 'community_tweet_hidden',
          CommunityNonMember: 'community_tweet_non_member',
          CommunityMemberRemoved: 'community_tweet_member_removed',
          NonCompliant: 'non_compliant',
        }),
        De = function (e) {
          var t = e.actionType,
            n = e.limitedActionsConfig,
            i = e.onAction,
            a = e.onClose,
            o = n === Ne.HiddenCommunityTweet,
            r = n === Ne.NonCompliant,
            s = n === Ne.CommunityNonMember,
            c = n === Ne.CommunityMemberRemoved
          if (!(o || r || s || c)) return null
          var l = (function (e) {
              var t = e.actionType,
                n = e.isCommunityMemberRemoved,
                i = e.isCommunityNonMember,
                a = e.isHiddenCommunityTweet,
                o = e.isNonCompliantTweet
              if (a || n) return E.a.d0270ae1
              if (i)
                switch (t) {
                  case Oe.a.Reply:
                    return E.a.ba352986
                  default:
                    return E.a.cb18be31
                }
              if (o)
                switch (t) {
                  case Oe.a.Reply:
                    return E.a.ae2c8a1e
                  case Oe.a.Downvote:
                    return E.a.adf4892e
                  case Oe.a.Like:
                    return E.a.afe7ba26
                  case Oe.a.React:
                    return E.a.ddb7acf0
                  case Oe.a.Share:
                    return E.a.jead3bc1
                  case Oe.a.Analytics:
                    return E.a.ff25aba5
                  default:
                    return ''
                }
              return ''
            })({
              actionType: t,
              isNonCompliantTweet: r,
              isCommunityNonMember: s,
              isHiddenCommunityTweet: o,
              isCommunityMemberRemoved: c,
            }),
            u = (function (e) {
              var t = e.actionType,
                n = e.isCommunityMemberRemoved,
                i = e.isCommunityNonMember,
                a = e.isHiddenCommunityTweet,
                o = e.isNonCompliantTweet
              if (a || n) return E.a.c8b72f50
              if (i)
                switch (t) {
                  case Oe.a.Reply:
                    return E.a.fa94c9da
                  default:
                    return E.a.if9bcebd
                }
              return o ? w.a.createElement(Re, null) : ''
            })({
              actionType: t,
              isNonCompliantTweet: r,
              isCommunityNonMember: s,
              isHiddenCommunityTweet: o,
              isCommunityMemberRemoved: c,
            })
          return w.a.createElement(Pe.a, {
            actionLabel: Le,
            graphicDisplayMode: 'none',
            headline: l,
            onAction: i,
            onClose: a,
            subtext: u,
          })
        },
        Me = n('4hQ9'),
        je = n('y+lG'),
        Fe = n('OrGc'),
        Be = n('XEYr'),
        Ue = n('RxYA'),
        Ve = n('oQhu'),
        He = n('iGRG'),
        ze = n('vbWy'),
        We = n('Rp9C'),
        qe = n('4bW+'),
        Ke = n('m3Bd'),
        Qe = n.n(Ke),
        Xe = n('sQjL'),
        Ge = n('k89r'),
        Je = ['scribeElement'],
        Ye = function (e) {
          var t = e.scribeElement,
            n = Qe()(e, Je),
            i = Object(Ge.a)()
          return w.a.createElement(
            Xe.a,
            a()({}, n, {
              onAction: function () {
                i.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              onOpen: function () {
                i.scribe({ element: t, action: 'click' })
              },
              onSecondaryAction: function () {
                i.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
            }),
          )
        },
        Ze = { defaultToast: { text: E.a.fda78a70 }, showToast: !0 },
        $e = { defaultToast: { text: E.a.j10ec2a0 }, showToast: !0 },
        et = { defaultToast: { text: E.a.ccdeb32e }, showToast: !0 },
        tt = n('IO7v'),
        nt = n('TnY3'),
        it = n('4zmP'),
        at = n('ZToW'),
        ot = n('cHvH'),
        rt = n('Wd7d'),
        st = n('E0cF'),
        ct = n('Wk1j'),
        lt = n('3dyc'),
        ut = n('I7xS'),
        dt = n('fn9Y'),
        pt = n('wD1h'),
        mt = n('feOz'),
        ht = n('eb3s'),
        ft = n('v6aA'),
        vt = n('HwrL'),
        _t = n('iEUn'),
        bt = n('DlVf'),
        gt = n('n5fo'),
        wt = n('C25v'),
        yt = n('ZGdk'),
        Ct = n('ML2/'),
        kt = n('SOvA'),
        Tt = n('I/9y'),
        Et = n('Tp1h'),
        St = E.a.gb303813,
        It = E.a.de2d83d5,
        xt = E.a.b6f822b9,
        At = E.a.f14df406,
        Ot = E.a.f61c4bbf,
        Pt = E.a.d9837138,
        Lt = E.a.jf9c38df,
        Rt = E.a.ff9348b8,
        Nt = E.a.ebad846b,
        Dt = E.a.h438b014,
        Mt = E.a.d91695cb,
        jt = E.a.b59d8d10,
        Ft = E.a.h5d6c720,
        Bt = E.a.f1fcb2eb,
        Ut = E.a.a2e7377e,
        Vt = E.a.e0fef909,
        Ht = E.a.ba370e34,
        zt = E.a.d9034c72,
        Wt = E.a.e518bc7a,
        qt = E.a.f46ba415,
        Kt = E.a.c604dda2,
        Qt = E.a.f6c7249b,
        Xt = E.a.f67de45a,
        Gt = E.a.e0be2c22,
        Jt = E.a.e32e0d92,
        Yt = E.a.bd7d377e,
        Zt = E.a.ae768646,
        $t = E.a.c1a50438,
        en = E.a.fd961b0b,
        tn = E.a.f4507358,
        nn = E.a.jc4cb6c4,
        an = E.a.f277e949,
        on = E.a.c2453317,
        rn = E.a.f88553c8,
        sn = E.a.b5b36724,
        cn = E.a.g449dfaa,
        ln = E.a.cf7a1b47,
        un = E.a.aec89ef0,
        dn = E.a.d17df547,
        pn = E.a.bac8f4c1,
        mn = E.a.j8eff20a,
        hn = E.a.ce6df39e,
        fn = E.a.af5cd00d,
        vn = E.a.e29c651e,
        _n = { component: 'soft_intervention_nudge' },
        bn = { component: 'article_nudge' },
        gn = { viewType: 'share' },
        wn = { viewType: 'share_via_dm' },
        yn = { viewType: 'copy_link' },
        Cn = function (e) {
          return { viewType: 'bookmark', viewState: { type: 'toggleable', toggledTo: e } }
        },
        kn = Object.freeze({ NONE: 'none', THANKS: 'thanks', EDUCATION: 'education', SURVEY: 'survey' }),
        Tn = 0,
        En = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e, i) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e, i)),
              b()(p()(a), '_shouldDisable', Oe.b.bind(null, a.context.featureSwitches)),
              b()(
                p()(a),
                '_articleNudgeEnabled',
                a.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              b()(p()(a), '_reactionsEnabled', a.context.featureSwitches.isTrue('responsive_web_reactions_enabled')),
              b()(p()(a), '_downvoteEnabled', a.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
              b()(
                p()(a),
                '_showDownvoteBeforeLike',
                a.context.featureSwitches.isTrue('rweb_reply_downvote_before_like'),
              ),
              b()(
                p()(a),
                '_reactionsLegacyHeartEnabled',
                a.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              b()(
                p()(a),
                '_reactionsFruitBasketThreshold',
                a.context.featureSwitches.getNumberValue('responsive_web_reactions_fruit_basket_threshold'),
              ),
              b()(p()(a), '_randomSeed', Math.random()),
              b()(p()(a), '_renderReactionsEducation', function () {
                return a.state.showReactionsEducation
                  ? w.a.createElement(it.a, { style: Sn.inlineCallout, text: a._getReactionsEducationText() })
                  : null
              }),
              b()(p()(a), '_getReactionsEducationText', function () {
                var e = a._reactionsLegacyHeartEnabled ? _t.a : bt.a,
                  t = w.a.createElement(e, { accessibilityLabel: Lt })
                return at.a.isEnabled
                  ? w.a.createElement(E.a.I18NFormatMessage, { $i18n: 'ad2ab554' }, t)
                  : w.a.createElement(E.a.I18NFormatMessage, { $i18n: 'g6a7d832' }, t)
              }),
              b()(p()(a), '_renderDownvoteInlineEducation', function () {
                var e = a.props.tweet
                switch (a.state.showDownvoteEducation) {
                  case kn.SURVEY:
                    var t = {
                      label: $t,
                      link: 'https://survey.twitterfeedback.com/survey/selfserve/53b/'
                        .concat('220104', '?subject=')
                        .concat(e.id_str),
                    }
                    return w.a.createElement(it.a, {
                      action: t,
                      onAction: a._handleDownvoteSurveyClick,
                      onClose: function () {
                        a.setState({ showDownvoteEducation: kn.NONE })
                      },
                      style: Sn.inlineCallout,
                      text: Zt,
                      type: 'primary',
                      withCloseButton: !0,
                    })
                  case kn.EDUCATION:
                    return w.a.createElement(it.a, {
                      Icon: gt.a,
                      headline: en,
                      style: Sn.inlineCallout,
                      text: tn,
                      type: 'primary',
                    })
                  case kn.THANKS:
                    return w.a.createElement(it.a, {
                      onClose: function () {
                        a.setState({ showDownvoteEducation: kn.NONE })
                      },
                      style: Sn.inlineCallout,
                      text: Yt,
                      type: 'primary',
                      withCloseButton: !0,
                    })
                  case kn.NONE:
                  default:
                    return
                }
              }),
              b()(p()(a), '_renderSuperFollowerActionRetweetSubText', function (e) {
                return w.a.createElement(ot.a, null, function (e) {
                  var t = e.windowWidth
                  return rt.a.isNarrowScreenWidth(t)
                    ? w.a.createElement(x.b, null, nn)
                    : w.a.createElement(I.a, null, nn)
                })
              }),
              b()(
                p()(a),
                '_renderEngagementNudge',
                Object(Ve.a)(function (e, t, n) {
                  if (n && Object(vt.b)(e, n)) {
                    var i = fn,
                      o = vn,
                      r = n.text.text,
                      s = n.landingUrl.url,
                      c = a._handleSetMisinfoActionTaken(e),
                      l = e === vt.a.like ? mn : hn
                    return w.a.createElement(F, {
                      buttonLabel: i,
                      condensedText: o,
                      expanded: t,
                      heading: r,
                      key: 'engagement_nudge',
                      link: s,
                      onPress: c,
                      subheading: l,
                    })
                  }
                  return null
                }),
              ),
              b()(p()(a), '_shouldShowArticleNudge', function () {
                var e,
                  t = a.props,
                  n = t.forwardPivotInfo,
                  i = t.isArticleDomainMatched,
                  o = t.tweet,
                  r = t.wasArticleVisited,
                  s = a.state.articleNudgeFollowed,
                  c = a.context.loggedInUserId,
                  l = o.promoted_content,
                  u =
                    (null === (e = o.retweeted_status) || void 0 === e ? void 0 : e.user.id_str) === c ||
                    o.user.id_str === c
                return a._articleNudgeEnabled && !n && !l && !u && !!i && (!r || s)
              }),
              b()(p()(a), '_shouldShowDownvoteButton', function () {
                var e = a.props,
                  t = e.allowDownvote,
                  n = e.tweet,
                  i = a.context.loggedInUserId,
                  o = st.a.getOriginalTweet(n)
                return (
                  a._downvoteEnabled &&
                  t &&
                  Boolean(o.in_reply_to_status_id_str) &&
                  o.user.id_str !== i &&
                  !o.self_thread &&
                  !n.retweeted_status &&
                  !o.community_id_str &&
                  Boolean(i)
                )
              }),
              b()(p()(a), '_handleMenuCancel', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addFlag,
                    i = t.shouldShowArticleNudgeTip,
                    o = t.wasArticleVisited
                  a._scribeMisInfoNudgeAction({ tweetActionName: e, action: 'cancel' })
                  var r = a._shouldShowArticleNudge()
                  r && i && n(ce.b),
                    a._articleNudgeEnabled &&
                      r &&
                      a._scribeArticleNudgeAction({ action: 'cancel', element: o ? 'after_read' : void 0 })
                }
              }),
              b()(p()(a), '_handleSetMisinfoActionTaken', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addToast,
                    i = t.misinfoNudgeActionTaken,
                    o = t.setTweetMisinfoActionTaken,
                    r = t.tweet
                  a._scribeMisInfoNudgeAction({ tweetActionName: e, element: 'read_article', action: 'click' }),
                    i || (o(r.id_str), n({ text: vn }))
                }
              }),
              b()(p()(a), '_handleHideConfirmation', function () {
                a.setState({ showReplyDiscardTweetConfirmation: !1, showRetweetDiscardTweetConfirmation: !1 })
              }),
              b()(p()(a), '_handleCloseEducationPrompt', function () {
                a.setState({ showDisabledActionsEducation: !1 })
              }),
              b()(p()(a), '_handleOpenEducationPrompt', function (e) {
                return function () {
                  a.setState({ showDisabledActionsEducation: !0, disabledAction: e })
                }
              }),
              b()(p()(a), '_handleRetweetPress', function () {
                var e = a.props,
                  t = e.isArticleDomainMatched,
                  n = e.misinfoNudgeActionTaken,
                  i = e.wasArticleVisited
                if (!a.context.loggedInUserId)
                  return a._scribeAction(ct.a.RETWEET), void a._showLoginSignupSheet(Et.a.retweet)
                var o = a._shouldShowArticleNudge()
                a._scribeMisInfoNudgeAction({
                  tweetActionName: vt.a.retweet,
                  element: n ? 'after_read' : void 0,
                  action: 'impression',
                }),
                  a._articleNudgeEnabled &&
                    (a._scribeArticleNudgeAction({ element: 'check_url', action: t ? 'matched' : 'not_matched' }),
                    t && a._scribeArticleNudgeAction({ element: 'check_url', action: i ? 'visited' : 'not_visited' }),
                    o && a._scribeArticleNudgeAction({ action: 'impression' }))
              }),
              b()(p()(a), '_handleRetweet', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.isArticleDomainMatched,
                  i = e.misinfoNudgeActionTaken,
                  o = e.onRetweet,
                  r = e.promotedContent,
                  s = e.tweet,
                  c = e.wasArticleVisited
                a._scribeAction(ct.a.RETWEET),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.retweet,
                    element: i ? 'retweet_after_read' : 'retweet',
                    action: 'click',
                  }),
                  a._articleNudgeEnabled &&
                    n &&
                    a._scribeArticleNudgeAction({ element: c ? 'retweet_after_read' : 'retweet', action: 'click' }),
                  a._modRetweets(1),
                  o(s.id_str, { promotedContent: r })
                    .then(function () {
                      a.props.addToast({ ariaOnly: !0, text: Qt })
                    })
                    .catch(function (e) {
                      a._modRetweets(-1), t(ze.a)(e)
                    })
              }),
              b()(p()(a), '_handleUnretweet', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  i = e.promotedContent,
                  o = e.tweet
                a._scribeAction(ct.a.UNRETWEET),
                  a._modRetweets(-1),
                  n(o.id_str, { promotedContent: i })
                    .then(function () {
                      a.props.addToast({ ariaOnly: !0, text: Xt })
                    })
                    .catch(function (e) {
                      a._modRetweets(1), t(tt.a)(e)
                    })
              }),
              b()(p()(a), '_handleQuoteTweet', function () {
                var e = a.props,
                  t = e.composerHasData,
                  n = e.isArticleDomainMatched,
                  i = e.misinfoNudgeActionTaken,
                  o = e.wasArticleVisited
                a._scribeAction(ct.a.QUOTE),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.retweet,
                    element: i ? 'retweet_with_comment_after_read' : 'retweet_with_comment',
                    action: 'click',
                  }),
                  a._articleNudgeEnabled &&
                    n &&
                    a._scribeArticleNudgeAction({
                      element: o ? 'retweet_with_comment_after_read' : 'retweet_with_comment',
                      action: 'click',
                    }),
                  t && a.setState({ showRetweetDiscardTweetConfirmation: !0 })
              }),
              b()(p()(a), '_handleConfirmQuoteTweet', function () {
                ;(0, a.props.resetDraft)(), a._handleHideConfirmation()
              }),
              b()(p()(a), '_handleLikeMenuPress', function () {
                var e = a.props.misinfoNudgeActionTaken
                a._scribeMisInfoNudgeAction({
                  tweetActionName: vt.a.like,
                  element: e ? 'after_read' : void 0,
                  action: 'impression',
                })
              }),
              b()(p()(a), '_handleDownvote', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onDownvote,
                  i = e.onUndownvote,
                  o = e.tweet,
                  r = st.a.getOriginalTweet(o),
                  s = !r.isDownvoted
                s
                  ? (r.favorited && a._handleLike(),
                    n(o.id_str)
                      .then(function () {
                        a.props.addToast({ ariaOnly: !0, text: Gt }), a._updateDownvoteEducation(!0)
                      })
                      .catch(function (e) {
                        a._scribe({ element: 'downvote_button', action: 'error' }), t(Be.a)(e)
                      }))
                  : i(o.id_str)
                      .then(function () {
                        a.props.addToast({ ariaOnly: !0, text: Jt }), a._updateDownvoteEducation(!1)
                      })
                      .catch(function (e) {
                        a._scribe({ element: 'downvote_button', action: 'error' }), t(Be.a)(e)
                      }),
                  a._scribe({ element: 'reply_voting', action: s ? 'downvote' : 'remove_downvote' })
              }),
              b()(p()(a), '_updateDownvoteEducation', function (e) {
                var t = a.context.featureSwitches,
                  n = a.props,
                  i = n.addFlag,
                  o = n.daysSinceDownvoteEducation,
                  r = n.replyVotingSurveyClicked,
                  s = a.state.showDownvoteEducation,
                  c = t.getNumberValue('rweb_reply_downvote_inline_survey') / 100,
                  l = t.getNumberValue('rweb_reply_downvote_inline_education') / 100,
                  u = t.getNumberValue('rweb_reply_downvote_inline_days'),
                  d = null === o || o >= u,
                  p = d && a._randomSeed < c && !r,
                  m = d && a._randomSeed < l
                e
                  ? d &&
                    (a._scribe({
                      component: 'reply_voting_nux',
                      element: p ? 'survey' : m ? 'privacy' : 'thank_you',
                      action: 'impression',
                    }),
                    i(ce.l, { updateTimestamp: !0 }),
                    a.setState({ showDownvoteEducation: p ? kn.SURVEY : m ? kn.EDUCATION : kn.THANKS }))
                  : s !== kn.NONE && a.setState({ showDownvoteEducation: kn.NONE })
              }),
              b()(p()(a), '_handleDownvoteSurveyClick', function () {
                var e = a.props.setReplyVotingSurveyClicked
                a._scribe({ component: 'reply_voting_nux', element: 'survey', action: 'click' }),
                  a.setState({ showDownvoteEducation: kn.THANKS }),
                  e()
              }),
              b()(p()(a), '_handleLike', function () {
                var e = a.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  i = a.props,
                  o = i.createLocalApiErrorHandler,
                  r = i.loggedInUserFavCount,
                  s = i.misinfoNudgeActionTaken,
                  c = i.onLike,
                  l = i.onLikeSuccess,
                  u = i.onReact,
                  d = i.onUnlike,
                  p = i.onUnreact,
                  m = i.promotedContent,
                  h = i.tweet,
                  f = t.isTrue('responsive_web_reactions_api_test'),
                  v = st.a.getOriginalTweet(h),
                  _ = !v.favorited
                n
                  ? _
                    ? (a._scribeMisInfoNudgeAction({
                        tweetActionName: vt.a.like,
                        element: s ? 'like_after_read' : 'like',
                        action: 'click',
                      }),
                      v.isDownvoted && a._handleDownvote(),
                      a._modLikes(1),
                      (f
                        ? u(h.id_str, { promotedContent: m, reactionType: 'Like' })
                        : c(h.id_str, { promotedContent: m })
                      )
                        .then(function () {
                          r + 1 < t.getNumberValue('focused_timeline_actions_onboarding_likes')
                            ? a.props.addToast({ text: Vt })
                            : a.props.addToast({ ariaOnly: !0, text: Ht }),
                            l && l()
                        })
                        .catch(function (e) {
                          a._modLikes(-1), a._scribe({ element: 'like_button', action: 'error' }), o(Be.a)(e)
                        }))
                    : (a._modLikes(-1),
                      (f ? p : d)(h.id_str, { promotedContent: m })
                        .then(function () {
                          a.props.addToast({ ariaOnly: !0, text: zt })
                        })
                        .catch(function (e) {
                          a._modLikes(1), a._scribe({ element: 'like_button', action: 'error' }), o($e)(e)
                        }))
                  : a._showLoginSignupSheet(Et.a.like),
                  a._scribeAction(_ ? 'favorite' : 'unfavorite'),
                  a._shouldShowDownvoteButton() &&
                    a._scribe({ element: 'reply_voting', action: _ ? 'upvote' : 'remove_upvote' })
              }),
              b()(p()(a), '_handleReact', function (e, t) {
                var n = a.context.loggedInUserId,
                  i = a.props,
                  o = i.addToast,
                  s = i.createLocalApiErrorHandler,
                  c = i.misinfoNudgeActionTaken,
                  l = i.onReact,
                  u = i.onUnreact,
                  d = i.promotedContent,
                  p = i.tweet,
                  m = st.a.getOriginalTweet(p)
                if (m.reacted !== e) {
                  if (
                    (a._scribeAction(e ? 'favorite' : 'unfavorite'),
                    a._shouldShowDownvoteButton() &&
                      a._scribe({ element: 'reply_voting', action: e ? 'upvote' : 'remove_upvote' }),
                    e)
                  )
                    switch ((m.reacted && a._scribe({ element: 'reaction_picker', action: 'change' }), t)) {
                      case 'button-tap':
                        a._scribe({ element: 'reaction_button', action: 'click' }), a._showReactionsEducation()
                        break
                      case 'picker-touchend':
                        a._scribe({ element: 'reaction_picker', action: 'select' }), a._hideReactionsEducation()
                        break
                      case 'picker-tap':
                        a._scribe({ element: 'reaction_picker', action: 'click' }), a._hideReactionsEducation()
                        break
                      case 'keyboard-shortcut':
                        a._scribe({ element: 'reaction_keyboard', action: 'select' }), a._showReactionsEducation()
                    }
                  else
                    a._scribe({ element: 'reaction_button', action: 'undo' }),
                      a.state.showReactionsEducation &&
                        (a.setState(function (e) {
                          return r()(r()({}, e), {}, { showReactionsEducation: !1 })
                        }),
                        (Tn -= 1))
                  n
                    ? e
                      ? (a._scribeMisInfoNudgeAction({
                          tweetActionName: vt.a.like,
                          element: c ? 'like_after_read' : 'like',
                          action: 'click',
                        }),
                        l(p.id_str, { promotedContent: d, reactionType: e })
                          .then(function () {
                            var e = a.state.showReactionsEducation
                            o({ ariaOnly: !0, text: e ? qt : Wt })
                          })
                          .catch(function (e) {
                            a._scribe({ element: 'reaction_button', action: 'error' }), s(He.a)(e)
                          }))
                      : u(p.id_str, { promotedContent: d })
                          .then(function () {
                            o({ ariaOnly: !0, text: Kt })
                          })
                          .catch(function (e) {
                            a._scribe({ element: 'reaction_button', action: 'error' }), s(et)(e)
                          })
                    : a._showLoginSignupSheet(Et.a.react)
                }
              }),
              b()(p()(a), '_handleReactionPopoverOpen', function (e) {
                e === lt.a.longPress
                  ? a._scribe({ element: 'reaction_button', action: 'longpress' })
                  : e === lt.a.hover
                  ? a._scribe({ element: 'reaction_button', action: 'hover' })
                  : (e !== lt.a.force && e !== lt.a.keyboard) ||
                    a._scribe({ element: 'reaction_button', action: 'keyboard' })
              }),
              b()(p()(a), '_showReactionsEducation', function () {
                var e = a.context.loggedInUserId,
                  t = a.props.canShowReactionsEducation
                a._reactionsEnabled &&
                  a.context.featureSwitches.isTrue('responsive_web_reactions_nux_banner') &&
                  (Tn >= 3
                    ? a._hideReactionsEducation()
                    : t &&
                      e &&
                      ((0 !== Tn && 2 !== Tn) ||
                        (a.setState(function (e) {
                          return r()(r()({}, e), {}, { showReactionsEducation: !0 })
                        }),
                        a._scribe({ element: 'reaction_nux', action: 'impression' })),
                      (Tn += 1)))
              }),
              b()(p()(a), '_hideReactionsEducation', function () {
                var e = a.props,
                  t = e.addFlag
                e.canShowReactionsEducation && t(ce.s)
              }),
              b()(p()(a), '_handleBookmarkTweet', function () {
                var e,
                  t = a.props,
                  n = t.createLocalApiErrorHandler,
                  i = t.tweet,
                  o = st.a.getOriginalTweet(i),
                  r = !(
                    null === (e = a.context.userClaims) ||
                    void 0 === e ||
                    !e.isTrueAndEnabled('subscriptions_feature_1002')
                  )
                a.props.onBookmark(o.id_str).then(
                  function () {
                    a.props.addToast({
                      action: {
                        label: r ? on : an,
                        onAction: r ? a._handleBookmarkTweetToFolder : a._handleViewBookmarks,
                      },
                      text: jt,
                    })
                  },
                  function (e) {
                    n(G.a)(e), a._scribeAction('bookmark_error')
                  },
                ),
                  a._scribeAction('bookmark')
              }),
              b()(p()(a), '_handleUnBookmarkFromFolder', function () {
                var e = a.props,
                  t = e.bookmarkFolderId,
                  n = e.bookmarkFolderName,
                  i = e.createLocalApiErrorHandler,
                  o = e.removeTweetFromBookmarkFolder,
                  r = e.tweet,
                  s = st.a.getOriginalTweet(r)
                t &&
                  o(t, { tweetId: s.id_str }).then(
                    function () {
                      a._scribe({ component: 'bookmark_folder', element: 'remove', action: 'success' }),
                        a.props.addToast({ text: Ut({ bookmarkFolderName: n }) })
                    },
                    function (e) {
                      i(G.a)(e), a._scribe({ component: 'bookmark_folder', element: 'remove', action: 'error' })
                    },
                  )
              }),
              b()(p()(a), '_handleBookmarkTweetToFolder', function () {
                var e = a.props,
                  t = e.onBookmark,
                  n = e.tweet,
                  i = st.a.getOriginalTweet(n)
                t(i.id_str),
                  a.props.history.push({ pathname: '/i/bookmarks/add', state: { tweet_id: i.id_str } }),
                  a._scribe({ element: 'add_to_folder', action: 'click' })
              }),
              b()(p()(a), '_handleUnbookmarkTweet', function () {
                var e = a.props,
                  t = e.bookmarkFolderId,
                  n = e.createLocalApiErrorHandler,
                  i = e.tweet,
                  o = a.context.loggedInUserId,
                  r = st.a.getOriginalTweet(i)
                a.props.onUnbookmark(r.id_str).then(
                  function () {
                    a.props.removeTweetsFromBookmarksTimeline(b()({}, r.id_str, !0)),
                      t && o && a.props.removeTweetFromBookmarkFolderTimeline(t, r.id_str, o),
                      a.props.addToast({ text: Ft })
                  },
                  function (e) {
                    n(Ze)(e), a._scribeAction('unbookmark_error')
                  },
                ),
                  a._scribeAction('unbookmark')
              }),
              b()(p()(a), '_handleViewBookmarks', function () {
                a.props.history.push({ pathname: '/i/bookmarks' })
              }),
              b()(p()(a), '_handleAnalyticsPress', function () {
                a._scribeAction('analytics')
              }),
              b()(p()(a), '_handleReplyPress', function () {
                var e = a.props.onReplyPress
                a._showReplyComposer(), e && e()
              }),
              b()(p()(a), '_showReplyComposer', function () {
                var e = a.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  i = a.props,
                  o = i.history,
                  r = i.promotedContent,
                  s = i.tweet
                a._scribeAction('reply'),
                  n
                    ? t.isTrue('rweb_reply_button_to_conversation_screen')
                      ? o.push({ state: { focusComposer: !0, promotedContent: r }, pathname: s.permalink })
                      : o.push({
                          state: {
                            inReplyToStatusId: s.id_str,
                            isSelfThreadReply: Object(Me.c)({ tweet: s, loggedInUserId: n }),
                            promotedContent: r,
                          },
                          pathname: '/compose/tweet',
                        })
                    : a._showLoginSignupSheet(Et.a.reply)
              }),
              b()(p()(a), '_handleConfirmReplyTweet', function () {
                ;(0, a.props.resetDraft)(), a._handleHideConfirmation(), a._showReplyComposer()
              }),
              b()(p()(a), '_handleDMShare', function () {
                var e = a.context.loggedInUserId,
                  t = a.props,
                  n = t.history,
                  i = t.misinfoNudgeActionTaken,
                  o = t.tweet
                a._scribeAction('share_via_dm'),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.share,
                    element: i ? 'share_tweet_after_read' : 'share_tweet',
                    action: 'click',
                  }),
                  e
                    ? n.push({ state: { tweetAttachment: st.a.getOriginalTweet(o) }, pathname: '/messages/compose' })
                    : a._showLoginSignupSheet(Et.a.dmshare)
              }),
              b()(p()(a), '_handleCopyLink', function () {
                var e = a.props,
                  t = e.misinfoNudgeActionTaken,
                  n = e.sessionToken
                Y.a.setString(Object(je.a)(a.props.tweet.permalink, n)),
                  a.props.addToast({ text: rn }),
                  a._scribeAction('copy_link'),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.share,
                    element: t ? 'share_tweet_after_read' : 'share_tweet',
                    action: 'click',
                  })
              }),
              b()(p()(a), '_handleSharePress', function () {
                var e = a.props.misinfoNudgeActionTaken
                a._scribeAction('share_menu_click'),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.share,
                    element: e ? 'after_read' : void 0,
                    action: 'impression',
                  })
              }),
              b()(p()(a), '_handleShare', function () {
                var e,
                  t,
                  n = a.props,
                  i = n.misinfoNudgeActionTaken,
                  o = n.sessionToken,
                  r = n.tweet,
                  s = st.a.getOriginalTweet(r),
                  c = a.context.featureSwitches.isTrue('responsive_web_share_only_tweet_url_omit_title_and_text'),
                  l = Object(je.a)(s.permalink, o),
                  u = Dt({ fullName: s.user.name, screenName: s.user.screen_name }),
                  d = Mt({
                    fullName: s.user.name,
                    screenName: s.user.screen_name,
                    tweet: ((e = s.text), (t = document.createElement('textarea')), (t.innerHTML = e), t.value),
                  }),
                  p = c ? { url: l } : { title: u, text: d, url: l }
                navigator
                  .share(p)
                  .then(function () {
                    a._scribeAction('share'),
                      a._scribeMisInfoNudgeAction({
                        tweetActionName: vt.a.share,
                        element: i ? 'share_tweet_after_read' : 'share_tweet',
                        action: 'click',
                      })
                  })
                  .catch(function () {
                    a._scribeAction('share_error')
                  })
              }),
              b()(p()(a), '_replyWrapper', function (e) {
                var t = e.children,
                  n = a.props,
                  i = n.displayStyle,
                  o = n.tweet,
                  r = st.a.getOriginalTweet(o)
                if ('limited_replies' !== r.limited_actions || !r.conversation_control) return t
                var s = 'block' !== i,
                  c = r.conversation_control.policy,
                  l = r.conversation_control.conversation_owner.screen_name,
                  u = ut.a.getEducationType(c, !1)
                return u
                  ? w.a.createElement(
                      Ye,
                      {
                        screenName: l,
                        scribeElement: 'disabled_reply',
                        style: Sn.conversationControlsAnchor,
                        tweetPermalink: s ? r.permalink : void 0,
                        type: u,
                      },
                      t,
                    )
                  : null
              }),
              b()(p()(a), '_handleCloseLoginSignupSheet', function () {
                a.setState({ showLoginSignupSheet: !1 })
              }),
              b()(p()(a), '_handleArticleClicked', function () {
                var e,
                  t = a.props,
                  n = t.setArticlesVisited,
                  i = t.tweet,
                  o = null == i || null === (e = i.card) || void 0 === e ? void 0 : e.url
                o &&
                  (n(o),
                  a._scribeArticleNudgeAction({ element: 'read_article', action: 'click' }),
                  a.setState({ articleNudgeFollowed: !0 }))
              }),
              b()(
                p()(a),
                '_getShareMenuActionItems',
                Object(Ve.a)(function (e, t, n, i) {
                  var o,
                    r = a.context.loggedInUserId,
                    s = e.retweeted_status || e,
                    c = s.user,
                    l = !(
                      null === (o = a.context.userClaims) ||
                      void 0 === o ||
                      !o.isTrueAndEnabled('subscriptions_feature_1002')
                    ),
                    u = []
                  return (
                    !c.protected && !a._shouldDisable(e, Oe.a.SendViaDM) && u.push(a._getDmShareAction()),
                    r &&
                      (n || s.isBookmarked
                        ? (u.push(a._getUnbookmarkTweetAction()), i && u.push(a._getUnBookmarkTweetFromFolderAction()))
                        : a._shouldDisable(e, Oe.a.AddToBookmarks) || u.push(a._getBookmarkTweetAction())),
                    r && l && u.push(a._getBookmarkTweetToFolderAction()),
                    !c.protected &&
                      J.canUseDOM &&
                      Y.a.isAvailable() &&
                      !a._shouldDisable(e, Oe.a.ShareTweetVia) &&
                      u.push(a._getCopyLinkAction(t)),
                    !c.protected &&
                      !a._shouldDisable(e, Oe.a.ShareTweetVia) &&
                      a._shareSupported &&
                      u.push(a._getShareAction(t)),
                    u
                  )
                }),
              ),
              b()(
                p()(a),
                '_getShareAction',
                Object(Ve.a)(function (e) {
                  return { behavioralEventContext: gn, text: e ? Rt : Nt, onClick: a._handleShare, Icon: dt.a }
                }),
              ),
              b()(
                p()(a),
                '_getBookmarkTweetAction',
                Object(Ve.a)(function () {
                  return { behavioralEventContext: Cn(!0), text: St, onClick: a._handleBookmarkTweet, Icon: wt.a }
                }),
              ),
              b()(
                p()(a),
                '_getBookmarkTweetToFolderAction',
                Object(Ve.a)(function () {
                  return {
                    behavioralEventContext: Cn(!0),
                    text: It,
                    onClick: a._handleBookmarkTweetToFolder,
                    Icon: yt.a,
                  }
                }),
              ),
              b()(
                p()(a),
                '_getUnBookmarkTweetFromFolderAction',
                Object(Ve.a)(function () {
                  return {
                    behavioralEventContext: Cn(!1),
                    text: Bt,
                    onClick: a._handleUnBookmarkFromFolder,
                    Icon: Ct.a,
                  }
                }),
              ),
              b()(
                p()(a),
                '_getUnbookmarkTweetAction',
                Object(Ve.a)(function () {
                  return { behavioralEventContext: Cn(!1), text: Pt, onClick: a._handleUnbookmarkTweet, Icon: Ct.a }
                }),
              ),
              b()(
                p()(a),
                '_getDmShareAction',
                Object(Ve.a)(function () {
                  return { behavioralEventContext: wn, text: Ot, onClick: a._handleDMShare, Icon: kt.a }
                }),
              ),
              b()(
                p()(a),
                '_getCopyLinkAction',
                Object(Ve.a)(function (e) {
                  return { behavioralEventContext: yn, text: e ? At : xt, onClick: a._handleCopyLink, Icon: Tt.a }
                }),
              ),
              b()(
                p()(a),
                '_getRetweetWithCommentLink',
                Object(Ve.a)(function (e, t, n) {
                  return {
                    pathname: '/compose/tweet',
                    state: { quotedStatus: e, promotedContent: t, hasArticleNudge: n },
                  }
                }),
              ),
              b()(p()(a), '_showLoginSignupSheet', function (e) {
                a.setState({ showLoginSignupSheet: !0, loginSignupSheetDisplayMode: e })
              }),
              b()(p()(a), '_modLikes', function (e) {
                var t = a.props,
                  n = t.liveCounts,
                  i = t.tweet,
                  o = t.updateLiveCounts
                n.likeCount && o({ tweetId: i.id_str, liveCounts: { likeCount: n.likeCount + e } })
              }),
              b()(p()(a), '_modRetweets', function (e) {
                var t = a.props,
                  n = t.liveCounts,
                  i = t.tweet,
                  o = t.updateLiveCounts
                n.retweetCount && o({ tweetId: i.id_str, liveCounts: { retweetCount: n.retweetCount + e } })
              }),
              b()(p()(a), '_handleLivePipelineUpdate', function (e) {
                var t = e.tweet_engagement,
                  n = t.like_count,
                  i = t.quote_count,
                  o = t.reply_count,
                  s = t.retweet_count,
                  c = a.props,
                  l = c.liveCounts,
                  u = c.updateLiveCounts,
                  d = r()({}, l)
                n && (d.likeCount = Math.max(l.likeCount || 0, parseInt(n, 10))),
                  i && (d.quoteCount = Math.max(l.quoteCount || 0, parseInt(i, 10))),
                  s && (d.retweetCount = Math.max(l.retweetCount || 0, parseInt(s, 10))),
                  o && (d.replyCount = Math.max(l.replyCount || 0, parseInt(o, 10))),
                  u({ tweetId: a.props.tweet.id_str, liveCounts: d })
              }),
              b()(p()(a), '_saveStateCounts', function () {
                var e = a.props,
                  t = e.liveCounts,
                  n = e.tweet.id_str,
                  i = e.updateCounts,
                  o = t.likeCount,
                  r = t.replyCount,
                  s = t.retweetCount
                ;(o || s || r) && i(n, t)
              }),
              (a.state = {
                articleNudgeFollowed: !1,
                disabledAction: void 0,
                loginSignupSheetDisplayMode: void 0,
                showDownvoteEducation: kn.NONE,
                showReactionsEducation: !1,
                showLoginSignupSheet: !1,
                showReplyDiscardTweetConfirmation: !1,
                showRetweetDiscardTweetConfirmation: !1,
                showDisabledActionsEducation: !1,
              }),
              (a._shareSupported = J.canUseDOM && void 0 !== window.navigator.share),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._initializeLivePipeline()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  e.tweet.id_str !== this.props.tweet.id_str &&
                    (this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                    this._initializeLivePipeline())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._livePipelineSubscription && this._livePipelineSubscription.teardown(), this._saveStateCounts()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.actionSize,
                    i = t.activeColor,
                    o = t.bookmarkFolderId,
                    r = t.color,
                    s = t.composerHasData,
                    c = t.displayStyle,
                    l = t.enableKeyboardShortcuts,
                    u = t.forwardPivotInfo,
                    d = t.isCommunityMember,
                    p = t.likeActionIconContainerRef,
                    m = t.likeTransitionAnimation,
                    h = t.liveCounts,
                    f = t.misinfoNudgeActionTaken,
                    v = t.nativeID,
                    _ = t.promotedContent,
                    g = t.style,
                    y = t.tweet,
                    C = t.withActionsDisabled,
                    k = t.withAnalyticsAction,
                    T = t.withCount,
                    E = t.withRemoveFromBookmarks,
                    S = this.context.loggedInUserId,
                    I = this.state,
                    x = I.disabledAction,
                    A = I.showDisabledActionsEducation,
                    O = I.showLoginSignupSheet,
                    P = I.showReplyDiscardTweetConfirmation,
                    L = I.showRetweetDiscardTweetConfirmation,
                    R = st.a.getOriginalTweet(y),
                    N = this._getRetweetWithCommentLink(R, _, this._shouldShowArticleNudge()),
                    D = this._shouldDisable(R, Oe.a.Analytics, d),
                    M = this._shouldDisable(R, Oe.a.Reply, d),
                    j = !R.favorited && this._shouldDisable(R, Oe.a.Like, d),
                    F = !R.reacted && this._shouldDisable(R, Oe.a.Like, d),
                    B = this._shouldDisable(R, Oe.a.Retweet, d),
                    U = !R.isDownvoted && this._shouldDisable(R, Oe.a.Downvote, d),
                    V = this._shouldDisable(R, Oe.a.QuoteTweet, d),
                    H = M && 'limited_replies' === R.limited_actions,
                    z = this._getShareMenuActionItems(y, _, E, o),
                    W = z.length < 1,
                    q = W && 'non_compliant' === R.limited_actions,
                    K = !!S,
                    Q = this._shouldMisinfoNudgeForceActionMenu(vt.a.like) && !R.favorited,
                    X = b()({}, Fe.e.bookmark, E ? this._handleUnbookmarkTweet : this._handleBookmarkTweet)
                  return w.a.createElement(
                    w.a.Fragment,
                    null,
                    w.a.createElement(pt.a, { enabled: l, handlers: X }),
                    w.a.createElement(mt.a, {
                      actionSize: n,
                      activeColor: i,
                      color: r,
                      displayStyle: c,
                      downvoteCount: 0,
                      enableKeyboardShortcuts: l,
                      isDisabled: C,
                      isDownvoted: R.isDownvoted,
                      isFromProtectedAccount: R.user.protected && R.user.id_str !== S,
                      isLiked: R.favorited,
                      isRetweeted: R.retweeted,
                      likeCount: h.likeCount || R.favorite_count,
                      nativeID: v,
                      reaction: R.reacted,
                      reactionCounts: R.reaction_count,
                      renderAnalyticsAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionAnalytics,
                          a()({}, t, {
                            isFaded: D,
                            onPress: D ? e._handleOpenEducationPrompt(Oe.a.Analytics) : e._handleAnalyticsPress,
                          }),
                        )
                      },
                      renderDownvoteAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionDownvote,
                          a()({}, t, {
                            downvoteTransitionAnimation:
                              'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
                            isFaded: U,
                            onPress: U ? e._handleOpenEducationPrompt(Oe.a.Downvote) : e._handleDownvote,
                            style: (h.likeCount || R.favorite_count || 0) > 0 && T ? Sn.reduceDownvotePadding : void 0,
                            testIDs: { downvote: qe.a.downvote, undownvote: qe.a.undownvote },
                          }),
                        )
                      },
                      renderLikeAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionLike,
                          a()({}, t, {
                            actionMenuDescription: e._renderEngagementNudge(vt.a.like, !f, u),
                            enableActionMenu: !j && Q,
                            isFaded: j,
                            likeActionIconContainerRef: p,
                            likeTransitionAnimation: m,
                            onLikeActionSelect: e._handleLike,
                            onMenuCancel: e._handleMenuCancel(vt.a.like),
                            onPress: j
                              ? e._handleOpenEducationPrompt(Oe.a.Like)
                              : Q
                              ? e._handleLikeMenuPress
                              : e._handleLike,
                            testIDs: { like: qe.a.like, unlike: qe.a.unlike },
                          }),
                        )
                      },
                      renderReactionAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionReaction,
                          a()({}, t, {
                            experimentalFruitBasketThreshold: e._reactionsFruitBasketThreshold,
                            isFaded: F,
                            legacyHeart: e._reactionsLegacyHeartEnabled,
                            onPopoverOpen: function (n) {
                              var i
                              null === (i = t.onPopoverOpen) || void 0 === i || i.call(t, n),
                                e._handleReactionPopoverOpen(n)
                            },
                            onReactionSelect: F ? e._handleOpenEducationPrompt(Oe.a.React) : e._handleReact,
                            testIDs: { react: qe.a.react, unreact: qe.a.unreact },
                            withFruitBasket: T,
                          }),
                        )
                      },
                      renderReplyAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionReply,
                          a()({}, t, {
                            isFaded: M,
                            onPress: M ? e._handleOpenEducationPrompt(Oe.a.Reply) : e._handleReplyPress,
                            renderWrapper: H ? e._replyWrapper : void 0,
                            testID: qe.a.reply,
                          }),
                        )
                      },
                      renderRetweetAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionRetweet,
                          a()({}, t, {
                            actionMenuDescription:
                              u && Object(vt.b)(vt.a.retweet, u)
                                ? e._renderEngagementNudge(vt.a.retweet, !f, u)
                                : e._renderArticleNudge(),
                            activeColor: null != R && R.exclusivity_info ? 'plum500' : void 0,
                            enableActionMenu: K,
                            excludeRetweetAction: B,
                            excludeRetweetWithCommentAction: V,
                            isDisabled: t.isDisabled || (!K && B) || (K && B && V),
                            onMenuCancel: e._handleMenuCancel(vt.a.retweet),
                            onPress: e._handleRetweetPress,
                            onQuoteTweetActionSelect: e._handleQuoteTweet,
                            onRetweetActionSelect: e._handleRetweet,
                            onUnretweetActionSelect: e._handleUnretweet,
                            retweetActionSubText:
                              null != R && R.exclusivity_info
                                ? e._renderSuperFollowerActionRetweetSubText(R.exclusivity_info.screen_name)
                                : void 0,
                            retweetWithCommentLink: s ? void 0 : N,
                            testIDs: {
                              retweet: qe.a.retweet,
                              retweetConfirm: qe.a.retweetConfirm,
                              unretweet: qe.a.unretweet,
                              unretweetConfirm: qe.a.unretweetConfirm,
                            },
                          }),
                        )
                      },
                      renderShareAction: function (t) {
                        return w.a.createElement(
                          mt.a.ActionShare,
                          a()({}, t, {
                            actionItems: z,
                            actionMenuDescription: e._renderEngagementNudge(vt.a.share, !f, u),
                            isDisabled: W && !q,
                            isFaded: q,
                            onMenuCancel: e._handleMenuCancel(vt.a.share),
                            onPress: q ? e._handleOpenEducationPrompt(Oe.a.Share) : e._handleSharePress,
                          }),
                        )
                      },
                      replyCount: h.replyCount || R.reply_count,
                      retweetCount: (h.quoteCount || R.quote_count || 0) + (h.retweetCount || R.retweet_count),
                      showDownvoteBeforeLike: this._showDownvoteBeforeLike,
                      style: g,
                      tweetLink: R.permalink,
                      withAnalytics: R.user.id_str === S && !!k,
                      withCount: T,
                      withDownvote: this._shouldShowDownvoteButton(),
                      withReaction: this._reactionsEnabled,
                    }),
                    O
                      ? w.a.createElement(Ue.a, {
                          displayMode: this.state.loginSignupSheetDisplayMode,
                          onClose: this._handleCloseLoginSignupSheet,
                          tweetId: R.id_str,
                          userFullName: R.user.name,
                          userId: R.user.id_str,
                        })
                      : null,
                    P
                      ? w.a.createElement(ht.a, {
                          confirmButtonLabel: dn,
                          confirmButtonType: 'destructiveFilled',
                          headline: sn,
                          onCancel: this._handleHideConfirmation,
                          onConfirm: this._handleConfirmReplyTweet,
                          text: ln,
                        })
                      : null,
                    L
                      ? w.a.createElement(ht.a, {
                          confirmButtonLabel: pn,
                          confirmButtonLink: {
                            pathname: '/compose/tweet',
                            state: { quotedStatus: R, promotedContent: _ },
                          },
                          confirmButtonType: 'destructiveFilled',
                          headline: cn,
                          onCancel: this._handleHideConfirmation,
                          onConfirm: this._handleConfirmQuoteTweet,
                          text: un,
                        })
                      : null,
                    this._renderReactionsEducation(),
                    this._renderDownvoteInlineEducation(),
                    A && x && y.limited_actions
                      ? w.a.createElement(De, {
                          actionType: x,
                          limitedActionsConfig: y.limited_actions,
                          onAction: this._handleCloseEducationPrompt,
                          onClose: this._handleCloseEducationPrompt,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_renderArticleNudge',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.shouldShowArticleNudgeTip,
                    i = t.tweet,
                    a = this.state.articleNudgeFollowed,
                    o = null == i || null === (e = i.card) || void 0 === e ? void 0 : e.url
                  return this._shouldShowArticleNudge()
                    ? w.a.createElement(X, {
                        articleNudgeFollowed: a,
                        key: 'article-nudge',
                        link: o,
                        onClick: this._handleArticleClicked,
                        shouldShowArticleNudgeTip: n,
                      })
                    : null
                },
              },
              {
                key: '_scribe',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    i = n.analytics,
                    a = n.promotedContent,
                    o = n.tweet,
                    s = t ? e.action : ''.concat(e.action, '_attempt'),
                    c = i.contextualScribeData,
                    l = c && c.items ? c : r()(r()({}, c || {}), {}, { items: [We.a.getTweetItem(o, a)] })
                  i.scribe(r()(r()({}, e), {}, { action: s, data: l }))
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this._scribe({ action: e })
                },
              },
              {
                key: '_scribeMisInfoNudgeAction',
                value: function (e) {
                  var t = e.action,
                    n = e.element,
                    i = e.tweetActionName,
                    a = this.props,
                    o = a.analytics,
                    s = a.forwardPivotInfo
                  Object(vt.b)(i, s) && o.scribe(r()(r()({}, _n), {}, { element: n, action: t }))
                },
              },
              {
                key: '_scribeArticleNudgeAction',
                value: function (e) {
                  var t,
                    n = e.action,
                    i = e.element,
                    a = this.props,
                    o = a.analytics,
                    s = a.tweet
                  this._articleNudgeEnabled &&
                    o.scribe(
                      r()(
                        r()({}, bn),
                        {},
                        {
                          element: i,
                          action: n,
                          data: {
                            items: [
                              {
                                token: null == s || null === (t = s.card) || void 0 === t ? void 0 : t.url,
                                retweeting_tweet_id: s.id_str,
                              },
                            ],
                          },
                        },
                      ),
                    )
                },
              },
              {
                key: '_shouldMisinfoNudgeForceActionMenu',
                value: function (e) {
                  var t = this.props.forwardPivotInfo
                  return Object(vt.b)(e, t)
                },
              },
              {
                key: '_initializeLivePipeline',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.dataSaverMode,
                    i = t.tweet,
                    a = st.a.getOriginalTweet(i)
                  if (this.context.loggedInUserId)
                    return Object(y.h)().then(function (t) {
                      var i = t.LivePipeline
                      !n &&
                        i.isSupportedAndReady(e.context.featureSwitches) &&
                        e.context.featureSwitches.isTrue('livepipeline_tweetengagement_enabled') &&
                        !e._livePipelineSubscription &&
                        (e._livePipelineSubscription =
                          i &&
                          i.get().subscribeTopic('/tweet_engagement/'.concat(a.id_str), e._handleLivePipelineUpdate))
                    })
                },
              },
            ]),
            n
          )
        })(w.a.PureComponent)
      b()(En, 'contextType', ft.a),
        b()(En, 'defaultProps', {
          actionSize: 'normal',
          color: 'gray700',
          displayStyle: 'inline',
          enableKeyboardShortcuts: !1,
          liveCounts: { replyCount: void 0, likeCount: void 0, retweetCount: void 0 },
          withCount: !1,
          withRemoveFromBookmarks: !1,
        })
      t.a = Object(nt.a)(Object(Ae.a)()(xe(En)))
      var Sn = L.a.create(function (e) {
        return {
          conversationControlsAnchor: { justifyContent: 'center' },
          inlineCallout: { marginTop: e.spaces.space12 },
          reduceDownvotePadding: { marginRight: -1 * e.spacesPx.space8 },
        }
      })
    },
    xrkw: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        a = n.n(i),
        o = n('ERkP'),
        r = n.n(o),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
