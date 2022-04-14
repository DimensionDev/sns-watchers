;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    '+Tpo': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var i = n('ERkP'),
        o = n.n(i),
        r = n('3XMw'),
        a = n.n(r),
        s = n('xrkw'),
        c = n('wwsH'),
        l = a.a.f2849136,
        u = a.a.ee9a81b6,
        d = { viewType: 'analytics' }
      function p(e) {
        var t = e.activeColor,
          n = e.color,
          i = e.iconSize,
          r = e.isDisabled,
          a = e.isFaded,
          p = e.isPresentational,
          f = e.onPress,
          m = e.style,
          h = e.tweetLink
        return o.a.createElement(c.a, {
          Icon: s.a,
          accessibilityLabel: u,
          activeColor: t,
          behavioralEventContext: d,
          color: n,
          hoverLabel: { label: l },
          iconSize: i,
          isDisabled: r,
          isFaded: a,
          isPresentational: p,
          link: !h || r || a ? void 0 : ''.concat(h, '/analytics'),
          onPress: f,
          style: m,
        })
      }
    },
    '/aXP': function (e, t, n) {
      'use strict'
      var i = n('ERkP'),
        o = n.n(i),
        r = n('t62R'),
        a = n('5mJL'),
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
            d = o.a.createElement(c.a, { Icon: t, color: u, size: 'medium' })
          return o.a.createElement(
            a.a,
            { avatarCell: d, avatarCellStyle: l.thumbnail, cellStyle: l.cellStyle, style: i },
            o.a.createElement(r.b, { color: 'gray700', nativeID: n, size: 'subtext2' }, s),
          )
        },
        d = n('4zmP'),
        p = n('MWbm'),
        f = n('3XMw'),
        m = n.n(f),
        h = n('lBmi'),
        v = n('gUPl'),
        _ = n('gBde'),
        b = n('Oib4'),
        g = n('EyD/'),
        y = n('yiKp'),
        w = n.n(y),
        k = n('Lsrn'),
        C = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [k.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12.084 16.7c.89 0 1.612-.71 1.637-1.595h-3.273c.025.884.748 1.596 1.637 1.596z',
              }),
              o.a.createElement('path', {
                d: 'M12.085 1.25C6.157 1.25 1.335 6.072 1.335 12s4.822 10.75 10.75 10.75 10.75-4.822 10.75-10.75-4.823-10.75-10.75-10.75zm5.468 13.593c-.053.156-.2.263-.364.263h-2.47c-.024 1.435-1.195 2.596-2.636 2.596s-2.612-1.16-2.637-2.596H6.98c-.167 0-.315-.106-.367-.265-.05-.157.003-.33.137-.43.046-.035 1.192-.943 1.172-3.352-.012-1.39.445-2.623 1.286-3.475.754-.763 1.773-1.185 2.872-1.19h.006c1.098.006 2.118.428 2.872 1.19.842.852 1.3 2.086 1.287 3.476-.02 2.407 1.125 3.315 1.174 3.353.133.1.186.274.133.43z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var T = E,
        A = n('5wO0'),
        S = {
          conversationControlsFollowersCanEngage: {
            Icon: h.a,
            calloutType: 'primary',
            headline: m.a.bb7b821a,
            detail: m.a.h15b020c,
            inline: m.a.e5dc76d0,
          },
          conversationControlsFollowersCannotEngage: {
            Icon: h.a,
            calloutType: 'primary',
            headline: m.a.ab105904,
            detail: m.a.h15b020c,
            inline: m.a.fd1cda7a,
          },
          conversationControlsCommunityCanEngage: {
            Icon: v.a,
            calloutType: 'primary',
            headline: m.a.bb7b821a,
            detail: m.a.j86de6d0,
            inline: m.a.e5dc76d0,
          },
          conversationControlsCommunityCannotEngage: {
            Icon: v.a,
            calloutType: 'primary',
            headline: m.a.ab105904,
            detail: m.a.j86de6d0,
            inline: m.a.fd1cda7a,
          },
          conversationControlsByInvitationCanEngage: {
            Icon: _.a,
            calloutType: 'primary',
            headline: m.a.bb7b821a,
            detail: m.a.cededc6f,
            inline: m.a.e5dc76d0,
          },
          conversationControlsByInvitationCannotEngage: {
            Icon: _.a,
            calloutType: 'primary',
            headline: m.a.ab105904,
            detail: m.a.cededc6f,
            inline: m.a.fd1cda7a,
          },
          communityHiddenTweetEducation: {
            Icon: b.a,
            calloutType: 'primary',
            headline: m.a.g7ea1122,
            detail: m.a.f9560709,
            inline: m.a.g7ea1122,
          },
          communityRemovedMemberEducation: {
            Icon: b.a,
            calloutType: 'primary',
            headline: m.a.g7ea1122,
            detail: m.a.jd773100,
            inline: m.a.g7ea1122,
          },
          exclusiveToSuperFollowersCreator: {
            Icon: g.a,
            calloutType: 'exclusive',
            headline: m.a.dbf9738f,
            detail: m.a.d95d8f24,
            inline: m.a.d95d8f24,
          },
          exclusiveToSuperFollowersReplyOwn: {
            Icon: g.a,
            calloutType: 'exclusive',
            headline: m.a.dbf9738f,
            detail: m.a.ff6895e3,
            inline: m.a.ff6895e3,
          },
          exclusiveToSuperFollowersReplyOthers: {
            Icon: g.a,
            calloutType: 'exclusive',
            headline: m.a.f1140912,
            detail: m.a.j1a5fd02,
            inline: m.a.aaeb399a,
          },
          headsUpCopyA: {
            Icon: T,
            calloutType: 'primary',
            headline: m.a.b140e3b1,
            detail: m.a.icbb05dc,
            inline: m.a.icbb05dc,
          },
          headsUpCopyB: {
            Icon: T,
            calloutType: 'primary',
            headline: m.a.g4d12383,
            detail: m.a.fe5ab73c,
            inline: m.a.fe5ab73c,
          },
          trustedFriendsReplyOwn: { Icon: A.a, calloutType: 'success', detail: m.a.fe0c6436, inline: m.a.fe0c6436 },
          trustedFriendsReplyOthers: {
            Icon: A.a,
            calloutType: 'success',
            detail: m.a.h7a1a9de,
            detailAction: { label: m.a.d7e50a66, link: 'https://help.twitter.com/using-twitter/twitter-circle' },
            inline: m.a.e5e32275,
          },
        },
        O = function (e, t) {
          return 'string' != typeof e ? e({ screenName: t }) : e
        }
      t.a = function (e) {
        var t = e.displayMode,
          n = e.nativeID,
          i = e.screenName,
          r = e.style,
          a = e.type,
          s = S[a],
          c = s.Icon,
          l = s.calloutType,
          f = s.detail,
          m = s.detailAction,
          h = s.headline,
          v = s.inline,
          _ = 'compact' === t,
          b = 'detail' === t,
          g = b ? m : void 0,
          y = b ? h : void 0,
          w = O(b ? f : v, i)
        return o.a.createElement(
          p.a,
          { style: r },
          _
            ? o.a.createElement(u, { Icon: c, nativeID: n, text: w, type: l })
            : o.a.createElement(d.a, {
                Icon: c,
                action: g,
                headline: y,
                nativeID: n,
                text: w,
                type: l,
                withThumbnail: !0,
              }),
        )
      }
    },
    '/x6e': function (e, t, n) {
      'use strict'
      var i = n('9Ulv'),
        o = n('BR0S'),
        r = n('tI3i'),
        a = n.n(r)
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
          function o(t) {
            var n
            n = e.call(this) || this
            var o = t || { x: 0, y: 0 }
            return (
              'number' == typeof o.x && 'number' == typeof o.y
                ? ((n.x = new i.a(o.x)), (n.y = new i.a(o.y)))
                : (a()(
                    o.x instanceof i.a && o.y instanceof i.a,
                    'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.',
                  ),
                  (n.x = o.x),
                  (n.y = o.y)),
              (n._listeners = {}),
              n
            )
          }
          ;(n = e), ((t = o).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), s(t, n)
          var r = o.prototype
          return (
            (r.setValue = function (e) {
              this.x.setValue(e.x), this.y.setValue(e.y)
            }),
            (r.setOffset = function (e) {
              this.x.setOffset(e.x), this.y.setOffset(e.y)
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
            (r.resetAnimation = function (e) {
              this.x.resetAnimation(), this.y.resetAnimation(), e && e(this.__getValue())
            }),
            (r.stopAnimation = function (e) {
              this.x.stopAnimation(), this.y.stopAnimation(), e && e(this.__getValue())
            }),
            (r.addListener = function (e) {
              var t = this,
                n = String(c++),
                i = function (n) {
                  n.value
                  e(t.__getValue())
                }
              return (this._listeners[n] = { x: this.x.addListener(i), y: this.y.addListener(i) }), n
            }),
            (r.removeListener = function (e) {
              this.x.removeListener(this._listeners[e].x),
                this.y.removeListener(this._listeners[e].y),
                delete this._listeners[e]
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
            o
          )
        })(o.a)
      t.a = l
    },
    '0ig/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var i = n('i4Oy'),
        o = n('ERkP')
      function r() {
        var e = Object(o.useState)(function () {
            return i.a.get('window')
          }),
          t = e[0],
          n = e[1]
        return (
          Object(o.useEffect)(function () {
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
        o = n('tI3i'),
        r = n.n(o)
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var s = (function (e) {
          var t, n
          function i(t, n, i, o) {
            var r
            return ((r = e.call(this, n) || this).emitter = t), (r.listener = i), (r.context = o), r
          }
          return (
            (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            a(t, n),
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
              r()(t.subscriber === this, 'The subscriber of the subscription is incorrectly set.'),
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
              r()(e.emitter === this, 'Subscription does not belong to this emitter.'),
                this._subscriber.removeSubscription(e)
            }),
            (t.listenerCount = function (e) {
              var t = this._subscriber.getSubscriptionsForType(e)
              return t ? t.filter(l).length : 0
            }),
            (t.emit = function (e) {
              var t = this._subscriber.getSubscriptionsForType(e)
              if (t) {
                for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                  i[o - 1] = arguments[o]
                for (var r = 0, a = t.length; r < a; r++) {
                  var s = t[r]
                  s && s.listener && s.listener.apply(s.context, i)
                }
              }
            }),
            (t.removeListener = function (e, t) {
              var n = this._subscriber.getSubscriptionsForType(e)
              if (n)
                for (var i = 0, o = n.length; i < o; i++) {
                  var r = n[i]
                  r && r.listener === t && r.remove()
                }
            }),
            e
          )
        })())(),
        d = (function () {
          function e(e) {
            'ios' === i.a.OS &&
              (r()(null != e, '`new NativeEventEmitter()` requires a non-null argument.'), (this._nativeModule = e))
          }
          var t = e.prototype
          return (
            (t.addListener = function (e, t, n) {
              var i,
                o = this
              null == (i = this._nativeModule) || i.addListener(e)
              var r = u.addListener(e, t, n)
              return {
                remove: function () {
                  var e
                  null != r && (null == (e = o._nativeModule) || e.removeListeners(1), r.remove(), (r = null))
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
              r()(null != e, '`NativeEventEmitter.removeAllListener()` requires a non-null argument.'),
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
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M12 1.25C6.07 1.25 1.25 6.07 1.25 12S6.07 22.75 12 22.75 22.75 17.93 22.75 12 17.93 1.25 12 1.25zm0 20c-5.1 0-9.25-4.15-9.25-9.25S6.9 2.75 12 2.75 21.25 6.9 21.25 12 17.1 21.25 12 21.25z',
              }),
              a.a.createElement('path', {
                d: 'M13.37 16.19c0 .76-.61 1.37-1.37 1.37s-1.38-.61-1.38-1.37.62-1.38 1.38-1.38 1.37.62 1.37 1.38zm.35-7.66l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z',
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
        o = n.n(i),
        r = n('nBUg'),
        a = n('rHpw'),
        s = n('MWbm')
      function c(e) {
        var t = e.accessibilityLabel,
          n = e.accessibilityLabelledBy,
          i = e.children,
          a = e.displayStyle,
          c = void 0 === a ? 'inline' : a,
          l = e.nativeID,
          d = e.style,
          p = r.b.useProps().withEdgeToEdgeTweetAnatomy()
        return o.a.createElement(
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
        u = a.a.create(function (e) {
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
        o = n.n(i),
        r = n('wAC9')
      t.a = function (e, t) {
        return Object(r.a)({
          contextSuffix: 'BOOKMARK_FOLDERS_SLICE',
          getFetchApiEndpoint: function (e) {
            return e.Bookmarks.fetchBookmarkFoldersSlice
          },
          getEndpointParams: function (e) {
            return o()(o()({}, e), {}, { tweet_id: t })
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
          return f
        }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return h
        })
      n('0zG9'), n('ERkP')
      var i = n('3XMw'),
        o = n.n(i),
        r = n('Nh1N'),
        a = n('RT39'),
        s = n('fz3c'),
        c = o.a.e86cb37f,
        l = o.a.f1824804,
        u = r.a,
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
            o = e.tweet,
            r = (e.userCountry, e.userLanguage, o.retweeted_status || o)
          return !(
            i !== r.user.id_str ||
            o.tombstoneInfo ||
            !r.possibly_sensitive ||
            n ||
            !t.isTrue('enable_label_appealing_sensitive_content_enabled')
          )
        },
        f = function (e) {
          var t = e.displaySensitiveMedia,
            n = e.featureSwitches,
            i = e.isNsfwUser,
            o = e.loggedInUserId,
            r = e.tweet,
            a = e.userCountry,
            s = e.userLanguage
          return (
            t && p({ tweet: r, isNsfwUser: i, featureSwitches: n, loggedInUserId: o, userLanguage: s, userCountry: a })
          )
        },
        m = function (e) {
          var t = e.featureSwitches,
            n = e.forwardPivotDisplayType,
            i = e.loggedInUserId,
            o = e.tweet
          e.userCountry, e.userLanguage
          return (
            i === (o.retweeted_status || o).user.id_str &&
            !o.tombstoneInfo &&
            n === a.a.SoftIntervention &&
            t.isTrue('enable_label_appealing_misinfo_enabled')
          )
        },
        h = function (e, t, n) {
          var i,
            o = e.retweeted_status || e,
            r = s.a.AppealTweetWarning
          if (n && Object(s.g)(n, r)) {
            var a,
              d,
              p =
                ((null == o ||
                null === (a = o.extended_entities) ||
                void 0 === a ||
                null === (d = a.media) ||
                void 0 === d
                  ? void 0
                  : d.length) || 0) > 0,
              f = !!o.promoted_content,
              m = Object(s.d)({
                clientReferer: window.location.pathname,
                isMedia: p,
                isPromoted: void 0 !== f,
                reportType: r,
                reportedTweet: o,
                reportedUser: o.user.id_str,
                scribeNamespace: t,
              })
            i = { pathname: '/i/safety/report_story_start', state: { input: { requested_variant: JSON.stringify(m) } } }
          } else
            i = {
              pathname: ''.concat('/i/report/appeal_tweet_warning', '/').concat(o.id_str),
              state: { scribeNamespace: t },
            }
          return { text: c, action: { label: l, link: i }, Icon: u, withThumbnail: !0 }
        }
    },
    '5wO0': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M4.7 5.846c.384-2.878 2.15-4.6 4.72-4.6s4.334 1.718 4.72 4.6C14.7 10 13.07 11.6 9.42 11.6S4.145 10 4.7 5.846zM3.217 21.94h9.573c-2.09-2.456-3.57-5.994-1.8-8.738-4.475-.665-8.87 1.732-9.916 5.948-.326 1.17.36 2.384 1.53 2.71.2.055.406.082.613.08zm8.976-6.066c0 3.54 4.18 7.1 5.34 7.126 1.16-.02 5.34-3.586 5.34-7.126.016-1.517-1.16-2.78-2.673-2.874-1.337 0-2.05 1.01-2.668 1.88-.617-.87-1.332-1.88-2.666-1.88-1.513.095-2.688 1.358-2.673 2.874z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    '6nXH': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      var i = n('ddV6'),
        o = n.n(i),
        r = (n('2G9S'), n('ho0z'), n('ERkP')),
        a = n.n(r),
        s = n('6/RC'),
        c = n('iX4X'),
        l = n('/Ikv'),
        u = n('nBUg'),
        d = n('ZvMt'),
        p = n('3XMw'),
        f = n.n(p),
        m = n('4zmP'),
        h = n('3dad'),
        v = n('uCxL'),
        _ = n('k2KP'),
        b = n('tLTi'),
        g = n('rHpw'),
        y = n('+d3d'),
        w = n('v302'),
        k = n('LKCq'),
        C = n('rOiJ'),
        E = n('E0cF'),
        T = n('XurV'),
        A = n('MWbm'),
        S = n('IV4V'),
        O = n('RT39'),
        I = n('VRZ4'),
        N = 16 / 9,
        x = 'timeline',
        P = s.canUseDOM
          ? function () {
              var e = a.a.useRef(null),
                t = a.a.useState(506),
                n = o()(t, 2),
                i = n[0],
                r = n[1],
                s = a.a.useMemo(function () {
                  var e = Object(y.a)(r, 300)
                  return new window.ResizeObserver(function (t) {
                    if (t[0]) {
                      var n = t[0].contentRect.width
                      e(n)
                    }
                  })
                }, [])
              return (
                a.a.useLayoutEffect(
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
          r,
          s,
          p = e.cardCacheLocationKey,
          f = e.displayMediaMetadata,
          b = e.enableKeyboardShortcuts,
          g = e.forwardPivotInfo,
          y = e.inlineCalloutInfo,
          w = e.innerForwardPivotInfo,
          k = e.isMediaMaxHeightEnabled,
          R = e.loggedInUserId,
          j = e.mediaCacheLocationKey,
          M = e.nativeID,
          V = e.onCardLinkClick,
          F = e.onMediaClick,
          U = e.onPlaybackStarted,
          B = e.onQuoteTweetClick,
          H = e.preventVideoPlayback,
          K = e.promotedContent,
          z = e.quoteTweetSingleImageMinAspectRatio,
          W = void 0 === z ? N : z,
          q = e.quoteTweetSocialContextProps,
          X = e.quotedTweetTombstoneInfo,
          Q = e.renderQuoteTweetTombstone,
          J = void 0 === Q ? D : Q,
          G = e.singleImageMaxAspectRatio,
          Y = void 0 === G ? 10 : G,
          Z = e.singleImageMinAspectRatio,
          $ = void 0 === Z ? N : Z,
          ee = e.mediaAltTranslations,
          te = e.tweet,
          ne = e.withActionsDisabled,
          ie = e.withAltTextBadge,
          oe = e.withCardLinks,
          re = void 0 !== oe && oe,
          ae = e.withCenterCrop,
          se = void 0 !== ae && ae,
          ce = e.withCondensedQuoteTweet,
          le = e.withHalvedMediaSize,
          ue = void 0 !== le && le,
          de = e.withMediaTagsIcon,
          pe = e.withQuoteTweetHeaderLinks,
          fe = e.withQuoteTweetLink,
          me = e.withQuoteTweetMedia,
          he = void 0 === me || me,
          ve = e.withReactions,
          _e = e.withRoundMediaCorners,
          be = e.withTweetMedia,
          ge = void 0 === be || be,
          ye = e.withUserHoverCard,
          we = P(),
          ke = o()(we, 2),
          Ce = ke[0],
          Ee = ke[1],
          Te = u.b.useProps().withEdgeToEdgeContent(),
          Ae = Object(T.useOpaqueIdentifier)(),
          Se = Object(T.useOpaqueIdentifier)(),
          Oe = E.a.getOriginalTweet(te),
          Ie = function () {
            return E.a.hasMedia(Oe, !ge)
          },
          Ne = function (e) {
            var t,
              n = null == e || null === (t = e.extended_entities) || void 0 === t ? void 0 : t.media
            if (n && 1 === n.length && 'photo' === n[0].type) return n[0]
          },
          xe = function () {
            return Ne(Oe)
          },
          Pe = function () {
            return Ne(Oe.quoted_status)
          },
          Re = function () {
            var e = Pe()
            if (e && e.original_info) {
              var t = e && e.original_info,
                n = t.height,
                i = t.width
              return Object(d.b)(W, Y, { width: i, height: n })
            }
          },
          Le = function (e) {
            var t = h.a.getBackgroundColor(e)
            if (t) return 'rgb('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ')')
          },
          De = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            return [Te && !n && L.negativeMargin, t && Te && [L.centerItems, { backgroundColor: e }]]
          },
          je = function () {
            var e,
              t,
              n = E.a.getOriginalTweet(te),
              i = Ie(),
              o = k && !i && !!(e = Re()) && e < 1 && Ce,
              r = (function () {
                var e = Pe()
                if (e) return Le(e)
              })()
            return n && n.is_quote_status
              ? a.a.createElement(v.a, {
                  forwardPivotInfo: (null === (t = n.quoted_status) || void 0 === t ? void 0 : t.softIntervention) || w,
                  isCondensed: ce,
                  loggedInUserId: R,
                  mediaContentStyles: !ce && De(r, !!o, !0),
                  mediaMaxHeight: o ? (Te ? 596 : 510) : void 0,
                  nativeID: Se,
                  onPress: B,
                  preventVideoPlayback: H,
                  shouldShowAltLabelAlways: ie,
                  singleImageMaxAspectRatio: Y,
                  singleImageMinAspectRatio: W,
                  socialContextProps: q,
                  tweet: n.quoted_status,
                  withCenterCrop: se,
                  withHeaderLinks: pe,
                  withLink: fe,
                  withMediaAsTextLinks: !he,
                  withReactions: ve,
                  withUserHoverCard: ye,
                })
              : null
          },
          Me = (function () {
            var e,
              t = E.a.getOriginalTweet(te),
              n =
                k &&
                (function () {
                  if (!Ie()) return !1
                  var e = xe()
                  if (!e || !e.original_info) return !1
                  var t = e && e.original_info,
                    n = t.height,
                    i = t.width
                  return Object(d.b)($, Y, { width: i, height: n }) < 1
                })() &&
                Ce,
              i = (function () {
                var e = xe()
                if (e) return Le(e)
              })()
            if (!Ie()) return null
            if (S.a.hasVoiceMedia(t))
              return a.a.createElement(A.a, { style: L.gap }, a.a.createElement(S.a, { tweet: t }))
            if (Object(I.c)(t)) {
              var o = Object(I.b)(t)
              if (o) return a.a.createElement(A.a, { style: L.gap }, a.a.createElement(I.a, { audioSpaceId: o }))
            }
            return a.a.createElement(C.a, {
              authorId: t.user.id_str,
              authorScreenName: t.user.screen_name,
              cacheLocationKey: j || x,
              customHoverBackgroundColor: n && Te ? i : void 0,
              displayMediaAttribution: !0,
              displayMediaMetadata: f,
              enableKeyboardShortcuts: b,
              forwardPivotInfo: g,
              hasSensitiveMedia: t.possibly_sensitive,
              loggedInUserId: R,
              mediaAltTranslations: ee,
              mediaContentStyles: [De(i, !!n)],
              mediaDetails: null === (e = t.extended_entities) || void 0 === e ? void 0 : e.media,
              mediaMaxHeight: n ? (Te ? 596 : 510) : void 0,
              mediaTagsLink: ''.concat(t.permalink, '/media_tags'),
              onClick: F,
              onPlaybackStarted: U,
              preventPlayback: H,
              promotedContent: K,
              shouldShowAltLabelAlways: ie,
              showBorder: !(n && Te),
              showRoundCorners: _e,
              singleImageMaxAspectRatio: Y,
              singleImageMinAspectRatio: $,
              style: [L.gap, n && !Te && L.explicitlySized],
              tweetCreatedAt: t.created_at,
              tweetId: t.id_str,
              tweetText: t.text,
              withCenterCrop: se,
              withHalvedMediaSize: ue,
              withMediaTagsIcon: de,
              withPostPlayback: !0,
            })
          })(),
          Ve = (function () {
            if (g && g.displayType === O.a.SoftIntervention) {
              var e = g.displayType,
                t = g.landingUrl,
                n = g.softInterventionDisplayType,
                i = g.text
              return a.a.createElement(
                A.a,
                { style: L.mediaPivotGap },
                a.a.createElement(O.b, {
                  displayType: e,
                  isTweetNonCompliant: 'non_compliant' === te.limited_actions,
                  landingUrl: t,
                  softInterventionDisplayType: n,
                  text: i,
                  tweetId: te.id_str,
                  withReactions: ve,
                }),
              )
            }
          })(),
          Fe = y ? a.a.createElement(A.a, { style: L.mediaPivotGap }, a.a.createElement(m.a, y)) : null,
          Ue =
            ((s = je()),
            (t =
              (s && X ? J({ children: s, config: X, nativeID: Se }) : s) ||
              (Oe && Oe.card && !Ie() && (!re || l.a.isPollCard(Oe.card.name)) && Oe.card
                ? a.a.createElement(c.a, {
                    card: {
                      name: Oe.card.name,
                      url: Oe.card.url,
                      binding_values: Oe.card.binding_values,
                      users: Oe.card.users,
                    },
                    cardContext: {
                      locationKey: p || x,
                      tweetId: Oe.id_str,
                      tweetPermalink: Oe.permalink,
                      tweetUserId: Oe.user.id_str,
                      viewerUserId: R,
                      withActionsDisabled: ne,
                    },
                    nativeID: Ae,
                    onCardLinkClick: V,
                    preventVideoPlayback: H,
                    promotedContent: K,
                    unifiedCard: Oe.unified_card,
                  })
                : null)),
            (i = Oe.possibly_sensitive),
            ((null != (r = Oe.quoted_status) &&
              r.possibly_sensitive &&
              Oe.quoted_status &&
              Oe.quoted_status.entities &&
              Oe.quoted_status.entities.media &&
              Oe.quoted_status.entities.media.length > 0 &&
              he &&
              !X) ||
              (i && !l.a.isPollCard(null === (n = Oe.card) || void 0 === n ? void 0 : n.name))) &&
            t
              ? a.a.createElement(_.a, { revealableTombstoneConfig: _.a.sensitiveMediaTombstoneConfig }, t)
              : t)
        return Me || Ue || Ve
          ? a.a.createElement(
              A.a,
              { accessibilityLabelledBy: [Se, Ae], nativeID: M, ref: Ee },
              Me,
              Fe,
              Ve,
              Ue ? a.a.createElement(A.a, { style: L.gap }, Ue) : null,
            )
          : null
      }
      var L = g.a.create(function (e) {
        return {
          gap: { marginTop: e.spaces.space12 },
          mediaPivotGap: { marginTop: e.spaces.space4 },
          explicitlySized: { alignSelf: 'flex-start' },
          negativeMargin: { marginHorizontal: -e.spacesPx.space16 },
          centerItems: { alignItems: 'center' },
        }
      })
      function D(e) {
        var t,
          n = e.children,
          i = e.config,
          o = e.nativeID,
          r = (null === (t = i.richRevealText) || void 0 === t ? void 0 : t.text) || i.revealText,
          s = i.richText
            ? a.a.createElement(b.a, {
                align: 'Center' === i.richText.alignment ? 'center' : void 0,
                dir: i.richText.rtl ? 'rtl' : 'ltr',
                entities: i.richText.entities,
                text: i.richText.text,
              })
            : i.text
        return a.a.createElement(
          A.a,
          { accessibilityLabel: f.a.c9d7235d, nativeID: o },
          r ? a.a.createElement(k.a, { label: s, revealLabel: r }, n) : a.a.createElement(w.a, null, s),
        )
      }
    },
    '6s7X': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              a.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              a.a.createElement('path', {
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
        o = 0.1,
        r = 'function' == typeof Float32Array
      function a(e, t) {
        return 1 - 3 * t + 3 * e
      }
      function s(e, t) {
        return 3 * t - 6 * e
      }
      function c(e) {
        return 3 * e
      }
      function l(e, t, n) {
        return ((a(t, n) * e + s(t, n)) * e + c(t)) * e
      }
      function u(e, t, n) {
        return 3 * a(t, n) * e * e + 2 * s(t, n) * e + c(t)
      }
      function d(e, t, n, i) {
        if (!(e >= 0 && e <= 1 && n >= 0 && n <= 1)) throw new Error('bezier x values must be in [0, 1] range')
        var a = r ? new Float32Array(11) : new Array(11)
        if (e !== t || n !== i) for (var s = 0; s < 11; ++s) a[s] = l(s * o, e, n)
        function c(t) {
          for (var i = 0, r = 1; 10 !== r && a[r] <= t; ++r) i += o
          --r
          var s = i + ((t - a[r]) / (a[r + 1] - a[r])) * o,
            c = u(s, e, n)
          return c >= 0.001
            ? (function (e, t, n, i) {
                for (var o = t, r = 0; r < 4; ++r) {
                  var a = u(o, n, i)
                  if (0 === a) return o
                  o -= (l(o, n, i) - e) / a
                }
                return o
              })(t, s, e, n)
            : 0 === c
            ? s
            : (function (e, t, n, i, o) {
                var r,
                  a,
                  s = 0,
                  c = t,
                  u = n
                do {
                  ;(r = l((a = c + (u - c) / 2), i, o) - e) > 0 ? (u = a) : (c = a)
                } while (Math.abs(r) > 1e-7 && ++s < 10)
                return a
              })(t, i, i + o, e, n)
        }
        return function (o) {
          return e === t && n === i ? o : 0 === o ? 0 : 1 === o ? 1 : l(c(o), t, i)
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
    '9Ulv': function (e, t, n) {
      'use strict'
      var i = n('FGdj'),
        o = n('BR0S'),
        r = n('M6BN')
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var s = n('XJEr').a.API
      var c = (function (e) {
        var t, n
        function o(t) {
          var n
          if (((n = e.call(this) || this), 'number' != typeof t))
            throw new Error('AnimatedValue: Attempting to set value to undefined')
          return (n._startingValue = n._value = t), (n._offset = 0), (n._animation = null), n
        }
        ;(n = e), ((t = o).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), a(t, n)
        var c = o.prototype
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
            e.__isInteraction && (i = r.a.createInteractionHandle())
            var o = this._animation
            this._animation && this._animation.stop(),
              (this._animation = e),
              e.start(
                this._value,
                function (e) {
                  n._updateValue(e, !0)
                },
                function (e) {
                  ;(n._animation = null), null !== i && r.a.clearInteractionHandle(i), t && t(e)
                },
                o,
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
            var i, o
            ;(this._value = t),
              n &&
                ((i = this),
                (o = new Set()),
                (function e(t) {
                  'function' == typeof t.update ? o.add(t) : t.__getChildren().forEach(e)
                })(i),
                o.forEach(function (e) {
                  return e.update()
                })),
              e.prototype.__callListeners.call(this, this.__getValue())
          }),
          (c.__getNativeConfig = function () {
            return { type: 'value', value: this._value, offset: this._offset }
          }),
          o
        )
      })(o.a)
      t.a = c
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
        o = n('oQhu'),
        r = n('eR3e'),
        a = n('ZNT5'),
        s = 'bookmarks',
        c = function (e) {
          return Object(a.a)({
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
        l = Object(o.a)(function (e) {
          return e.isTrue('responsive_web_graphql_bookmarks')
            ? Object(a.a)({
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
            : Object(a.a)({
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
              o = n.featureSwitches
            return (
              o.isTrue('responsive_web_graphql_mutation_bookmarks')
                ? i.Bookmarks.deleteAll
                : i.Tweets.removeAllBookmarks
            )().then(function () {
              return e(l(o).deleteTimeline())
            })
          }
        },
        d = r.q.bind(null, s)
    },
    BR0S: function (e, t, n) {
      'use strict'
      var i = n('pxHa'),
        o = n('XJEr')
      function r(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return a(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
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
      function a(e, t) {
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
        var a = i.prototype
        return (
          (a.__makeNative = function () {
            if (!this.__isNative) {
              this.__isNative = !0
              for (var t, n = r(this._children); !(t = n()).done; ) {
                var i = t.value
                i.__makeNative(), o.a.API.connectAnimatedNodes(this.__getNativeTag(), i.__getNativeTag())
              }
            }
            e.prototype.__makeNative.call(this)
          }),
          (a.__addChild = function (e) {
            0 === this._children.length && this.__attach(),
              this._children.push(e),
              this.__isNative &&
                (e.__makeNative(), o.a.API.connectAnimatedNodes(this.__getNativeTag(), e.__getNativeTag()))
          }),
          (a.__removeChild = function (e) {
            var t = this._children.indexOf(e)
            ;-1 !== t &&
              (this.__isNative &&
                e.__isNative &&
                o.a.API.disconnectAnimatedNodes(this.__getNativeTag(), e.__getNativeTag()),
              this._children.splice(t, 1),
              0 === this._children.length && this.__detach())
          }),
          (a.__getChildren = function () {
            return this._children
          }),
          (a.__callListeners = function (t) {
            if ((e.prototype.__callListeners.call(this, t), !this.__isNative))
              for (var n, i = r(this._children); !(n = i()).done; ) {
                var o = n.value
                o.__getValue && o.__callListeners(o.__getValue())
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
          o = n('XJEr')
        function r(e, t) {
          return (r =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var a = (function (t) {
          var n, i
          function a(e) {
            var n, i, r, a
            return (
              ((a = t.call(this) || this)._deceleration = null !== (n = e.deceleration) && void 0 !== n ? n : 0.998),
              (a._velocity = e.velocity),
              (a._useNativeDriver = Object(o.c)(e)),
              (a.__isInteraction = null !== (i = e.isInteraction) && void 0 !== i ? i : !a._useNativeDriver),
              (a.__iterations = null !== (r = e.iterations) && void 0 !== r ? r : 1),
              a
            )
          }
          ;(i = t), ((n = a).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), r(n, i)
          var s = a.prototype
          return (
            (s.__getNativeAnimationConfig = function () {
              return {
                type: 'decay',
                deceleration: this._deceleration,
                velocity: this._velocity,
                iterations: this.__iterations,
              }
            }),
            (s.start = function (e, t, n, i, o) {
              ;(this.__active = !0),
                (this._lastValue = e),
                (this._fromValue = e),
                (this._onUpdate = t),
                (this.__onEnd = n),
                (this._startTime = Date.now()),
                this._useNativeDriver
                  ? this.__startNativeAnimation(o)
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
            a
          )
        })(i.a)
        t.a = a
      }.call(this, n('fRV1')))
    },
    C25v: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
        o = n.n(i),
        r = n('RqPI'),
        a = n('XOJV'),
        s = n('SRyb')
      t.a = function (e, t) {
        return function (n, i, c) {
          c.api
          var l = c.featureSwitches
          return n(a.a.unretweet(e, t)).then(function () {
            var t = Object(r.r)(i()),
              c = a.a.select(i(), e),
              u = c && (c.retweeted_status ? a.a.select(i(), c.retweeted_status) : c)
            if (t && u && (u.user !== t || u.id_str !== e))
              return n([
                Object(s.a)(l, t, 'default').removeTweets(o()({}, e, !0)),
                Object(s.a)(l, t, 'with_replies').removeTweets(o()({}, e, !0)),
              ])
          })
        }
      }
    },
    'EyD/': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
        o = n('XJEr'),
        r = n('tI3i'),
        a = n.n(r),
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
      var f = function (e) {
        return e
      }
      function m(e) {
        if (e.outputRange && 'string' == typeof e.outputRange[0])
          return (function (e) {
            var t = e.outputRange
            a()(t.length >= 2, 'Bad output range'),
              (function (e) {
                for (var t = e[0].replace(v, ''), n = 1; n < e.length; ++n)
                  a()(t === e[n].replace(v, ''), 'invalid pattern ' + e[0] + ' and ' + e[n])
              })((t = t.map(h)))
            var n = t[0].match(v).map(function () {
              return []
            })
            t.forEach(function (e) {
              e.match(v).forEach(function (e, t) {
                n[t].push(+e)
              })
            })
            var i = t[0].match(v).map(function (t, i) {
                return m(d(d({}, e), {}, { outputRange: n[i] }))
              }),
              o = ((r = t[0]), 'string' == typeof r && r.startsWith('rgb'))
            var r
            return function (e) {
              var n = 0
              return t[0].replace(v, function () {
                var t = +i[n++](e)
                return o && (t = n < 4 ? Math.round(t) : Math.round(1e3 * t) / 1e3), String(t)
              })
            }
          })(e)
        var t = e.outputRange
        _('outputRange', t)
        var n = e.inputRange
        _('inputRange', n),
          (function (e) {
            a()(e.length >= 2, 'inputRange must have at least 2 elements')
            for (var t = 1; t < e.length; ++t)
              a()(e[t] >= e[t - 1], 'inputRange must be monotonically non-decreasing ' + e)
          })(n),
          a()(
            n.length === t.length,
            'inputRange (' + n.length + ') and outputRange (' + t.length + ') must have the same length',
          )
        var i = e.easing || f,
          o = 'extend'
        void 0 !== e.extrapolateLeft ? (o = e.extrapolateLeft) : void 0 !== e.extrapolate && (o = e.extrapolate)
        var r = 'extend'
        return (
          void 0 !== e.extrapolateRight ? (r = e.extrapolateRight) : void 0 !== e.extrapolate && (r = e.extrapolate),
          function (e) {
            a()('number' == typeof e, 'Cannot interpolation an input which is not a number')
            var s = (function (e, t) {
              var n
              for (n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            })(e, n)
            return (function (e, t, n, i, o, r, a, s) {
              var c = e
              if (c < t) {
                if ('identity' === a) return c
                'clamp' === a && (c = t)
              }
              if (c > n) {
                if ('identity' === s) return c
                'clamp' === s && (c = n)
              }
              if (i === o) return i
              if (t === n) return e <= t ? i : o
              t === -1 / 0 ? (c = -c) : n === 1 / 0 ? (c -= t) : (c = (c - t) / (n - t))
              ;(c = r(c)), i === -1 / 0 ? (c = -c) : o === 1 / 0 ? (c += i) : (c = c * (o - i) + i)
              return c
            })(e, n[s], n[s + 1], t[s], t[s + 1], i, o, r)
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
      var v = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g
      function _(e, t) {
        a()(t.length >= 2, e + ' must have at least 2 elements'),
          a()(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + 'cannot be ]-infinity;+infinity[ ' + t)
      }
      var b = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return ((i = e.call(this) || this)._parent = t), (i._config = n), (i._interpolation = m(n)), i
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), l(t, n)
        var r = i.prototype
        return (
          (r.__makeNative = function () {
            this._parent.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (r.__getValue = function () {
            var e = this._parent.__getValue()
            return (
              a()('number' == typeof e, 'Cannot interpolate an input which is not a number.'), this._interpolation(e)
            )
          }),
          (r.interpolate = function (e) {
            return new i(this, e)
          }),
          (r.__attach = function () {
            this._parent.__addChild(this)
          }),
          (r.__detach = function () {
            this._parent.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (r.__transformDataType = function (e) {
            return e.map(o.a.transformDataType)
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
      ;(b.__createInterpolation = m), (t.a = b)
    },
    G41x: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var i = n('ERkP'),
        o = n.n(i),
        r = n('mjJ+'),
        a = n('3XMw'),
        s = n.n(a),
        c = n('fn9Y'),
        l = n('wD1h'),
        u = n('wwsH'),
        d = s.a.dc63da15,
        p = s.a.jc9298a8,
        f = { viewType: 'share' }
      function m(e) {
        var t = e.actionItems,
          n = e.actionMenuDescription,
          i = e.activeColor,
          a = e.color,
          s = e.enableKeyboardShortcuts,
          m = e.iconSize,
          h = e.isDisabled,
          v = e.isFaded,
          _ = e.isPresentational,
          b = e.onMenuCancel,
          g = e.onPress,
          y = e.style,
          w = e.withCount
        return o.a.createElement(u.a, {
          Icon: c.a,
          accessibilityLabel: p,
          activeColor: i,
          behavioralEventContext: f,
          color: a,
          enableKeyboardShortcuts: s,
          hoverLabel: { label: d },
          iconSize: m,
          isDisabled: h,
          isFaded: v,
          isPresentational: _,
          keyboardShortcut: l.a.shortcuts.share,
          onPress: g,
          renderMenu: v
            ? void 0
            : function (e) {
                return o.a.createElement(r.a, {
                  description: n,
                  items: t,
                  onCloseRequested: function () {
                    e(), null == b || b()
                  },
                  shouldCloseOnClick: !0,
                })
              },
          style: y,
          withCount: w,
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
        return f
      })
      n('hBvt')
      var i = n('ERkP'),
        o = n.n(i),
        r = n('3XMw'),
        a = n.n(r),
        s = n('dFWS'),
        c = n('wD1h'),
        l = n('wwsH'),
        u = a.a.hdf72269,
        d = a.a.c9940954,
        p = { viewType: 'reply' }
      function f(e) {
        var t = e.activeColor,
          n = e.color,
          i = e.count,
          r = e.enableKeyboardShortcuts,
          a = e.iconSize,
          f = e.isDisabled,
          m = e.isFaded,
          h = e.isPresentational,
          v = e.link,
          _ = e.onPress,
          b = e.renderWrapper,
          g = e.style,
          y = e.testID,
          w = e.withCount && 'number' == typeof i,
          k = w ? d({ count: i }) : u
        return o.a.createElement(l.a, {
          Icon: s.a,
          accessibilityLabel: k,
          activeColor: t,
          behavioralEventContext: p,
          color: n,
          count: i,
          enableKeyboardShortcuts: r,
          hoverLabel: { label: u },
          iconSize: a,
          isDisabled: f,
          isFaded: m,
          isPresentational: h,
          keyboardShortcut: c.a.shortcuts.reply,
          link: v,
          onPress: _,
          renderWrapper: b,
          style: g,
          testID: y,
          withCount: w,
        })
      }
    },
    Hja3: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return k
      }),
        n.d(t, 'a', function () {
          return C
        }),
        n.d(t, 'd', function () {
          return E
        })
      var i = n('KEM+'),
        o = n.n(i),
        r = n('yiKp'),
        a = n.n(r),
        s = (n('yH/f'), n('ho0z'), n('7x/C'), n('JtPf'), n('PiaM')),
        c = n('/kEJ'),
        l = n('48TD'),
        u = n('BQZD'),
        d = n('oEOe'),
        p = n('lMB6'),
        f = n('RqPI'),
        m = n('3zvM'),
        h = n('oQhu'),
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
        g = Object(m.e)({ namespace: 'bookmarkFolders' }),
        y = Object(h.a)(function (e) {
          return Object(l.a)(e)
        }),
        w = {
          deleteBookmarkFolder: Object(m.c)(g, 'deleteBookmarkFolder', {
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
              return a()(a()({}, e), {}, { entities: i })
            },
            mapResponseToActions: function (e, t, n) {
              return function (t) {
                var i = Object(f.r)(n())
                if (i && e && 'Done' === (null == t ? void 0 : t.bookmark_collection_delete))
                  return [y(i).removeItems([e])]
              }
            },
          }),
          editBookmarkFolder: Object(m.c)(g, 'editBookmarkFolder', {
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
                    o = Object(f.r)(n())
                  if (o && e && i) return [y(o).injectItems([i.id])]
                }
              }
            },
            reducer: function (e, t) {
              var n = t.meta,
                i = n.entityId,
                r = n.name,
                s = e.entities[i]
              if (!s) return e
              var c = { name: r }
              return a()(a()({}, e), {}, { entities: a()(a()({}, e.entities), {}, o()({}, s.id, a()(a()({}, s), c))) })
            },
          }),
          removeTweetFromBookmarkFolder: Object(m.c)(g, 'removeTweetFromBookmarkFolder', {
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
                  var r = null == i ? void 0 : i.bookmark_collection_tweet_delete,
                    a = Object(f.r)(n())
                  if (a && e && r) {
                    var s = y(a)
                    return [Object(u.a)(e).removeTweets(o()({}, t.tweetId, !0)), s.injectItems([e])]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
          addTweetToBookmarkFolder: Object(m.c)(g, 'addTweetToBookmarkFolder', {
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
                  var o = null == i ? void 0 : i.bookmark_collection_tweet_put,
                    r = Object(f.r)(n())
                  if (r && e && o) {
                    var a = y(r)
                    return [
                      Object(u.a)(e).injectEntry(s.k({ id: t.tweetId, sortIndex: t.tweetId })),
                      a.injectItems([e]),
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
        k = function () {
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
        C = function (e) {
          return function (t, n, i) {
            var r = i.api
            return Object(d.b)(t, { request: r.Bookmarks.createBookmarkFolder, params: { name: e } })(
              { actionTypes: b, context: 'CREATE_BOOKMARK_FOLDER' },
              function (e) {
                if (e) {
                  var t = null == e ? void 0 : e.bookmark_collection_create,
                    i = Object(f.r)(n())
                  if (t && i) {
                    var r = y(i)
                    return [g.add(o()({}, t.id, t)), r.injectItems([t.id])]
                  }
                }
              },
            )
          }
        },
        E = function (e, t, n) {
          return function (i) {
            var r = y(n)
            return Promise.resolve(i([Object(u.a)(e).removeTweets(o()({}, t, !0)), r.injectItems([e])]))
          }
        },
        T = a()(a()(a()({}, g), w), {}, { customActionTypes: Object(m.d)(w) })
      t.b = p.a.register(T)
    },
    HwrL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return r
        })
      var i = n('RT39'),
        o = { like: 'like', retweet: 'retweet', share: 'share' },
        r = function (e, t) {
          return (
            !((null == t ? void 0 : t.displayType) !== i.a.SoftIntervention || null == t || !t.engagementNudge) &&
            (e === o.retweet || e === o.like || e === o.share)
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
        return o
      })
      var i = n('3XMw'),
        o = { defaultToast: { text: n.n(i).a.e639775e }, showToast: !0 }
    },
    IqLm: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M3.538 14.219l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72v-6.81c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18zm.95-1.61c.04-.09.16-.3.46-.3h4.47c.41 0 .75-.34.75-.75v-7.56c0-.28.22-.5.5-.5h2.66c.28 0 .5.22.5.5v7.56c0 .41.34.75.75.75h4.47c.29 0 .42.21.46.3.04.09.1.33-.1.54l-6.88 7.18c-.1.11-.24.17-.39.17-.15 0-.29-.06-.39-.16l-7.15-7.18c-.21-.21-.15-.45-.11-.55z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    JWUO: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        o = n.n(i),
        r = n('m3Bd'),
        a = n.n(r),
        s = n('ERkP'),
        c = n.n(s),
        l = n('pjBI'),
        u = n('rHpw'),
        d = n('9qnF'),
        p = n('MWbm'),
        f = ['actionMenu', 'timestamp', 'userFollowIndicators', 'userLabel', 'userName'],
        m = u.a.create(function (e) {
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
          r = e.userLabel,
          s = e.userName,
          u = a()(e, f),
          h = c.a.createElement(
            p.a,
            { style: m.userInfo },
            c.a.createElement(
              p.a,
              { style: m.userNameRow },
              c.a.createElement(l.a, null, s, n),
              t ? c.a.createElement(p.a, { style: m.actionMenuContainer }, t) : null,
            ),
            r ? c.a.createElement(p.a, { style: m.userLabelRow }, r) : null,
            i ? c.a.createElement(p.a, { style: m.userLabelRow }, i) : null,
          )
        return c.a.createElement(d.a, o()({}, u, { usernameContent: h }))
      }
    },
    'ML2/': function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M19.9 10.744c-.415 0-.75.336-.75.75v9.782l-6.71-4.883c-.13-.095-.285-.143-.44-.143s-.31.048-.44.144l-6.71 4.883V5.6c0-.412.337-.75.75-.75h6.902c.414 0 .75-.335.75-.75s-.336-.75-.75-.75h-6.9c-1.242 0-2.25 1.01-2.25 2.25v17.15c0 .282.157.54.41.668.25.13.553.104.78-.062L12 17.928l7.458 5.43c.13.094.286.143.44.143.117 0 .234-.026.34-.08.252-.13.41-.387.41-.67V11.495c0-.414-.335-.75-.75-.75z',
              }),
              a.a.createElement('path', {
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
      function o(e) {
        return 3 * (e - 8) + 25
      }
      t.a = {
        fromOrigamiTensionAndFriction: function (e, t) {
          return { stiffness: i(e), damping: o(t) }
        },
        fromBouncinessAndSpeed: function (e, t) {
          function n(e, t, n) {
            return (e - t) / (n - t)
          }
          function r(e, t, n) {
            return t + e * (n - t)
          }
          var a = n(e / 1.7, 0, 20)
          a = r(a, 0, 0.8)
          var s,
            c,
            l,
            u,
            d = r(n(t / 1.7, 0, 20), 0.5, 200),
            p =
              ((s = a),
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
          return { stiffness: i(d), damping: o(p) }
        },
      }
    },
    'Q+qU': function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        o = n.n(i),
        r = n('ddV6'),
        a = n.n(r),
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
          n = a()(t, 2),
          i = n[0],
          r = n[1],
          s = e.size || 'body',
          p = u.a.theme.fontSizesPx[s],
          f = { fontSize: p - i }
        return c.a.createElement(
          l.b,
          o()({}, e, {
            getTextOverflow: function (e) {
              e && p - i > u.a.theme.fontSizesPx.subtext3 && r(i + 1)
            },
            numberOfLines: 1,
            style: [e.style, f, d.apptext],
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
        o = n.n(i),
        r = n('TIdA'),
        a = n('oSwX'),
        s = r.a.createLayoutCache()
      function c(e) {
        var t = e.nativeID,
          n = e.onClick,
          i = e.onHoverCardScreenNameClick,
          r = e.promotedContent,
          c = e.screenName,
          l = e.uri,
          u = e.withHoverCard,
          d = void 0 === u || u,
          p = e.withLink,
          f = void 0 === p || p
        return o.a.createElement(a.default, {
          imageLayoutCache: s,
          nativeID: t,
          onClick: n,
          onHoverCardScreenNameClick: i,
          promotedContent: r,
          screenName: c,
          size: 'xxLarge',
          uri: l,
          withHoverCard: d,
          withLink: f,
        })
      }
    },
    TW8A: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
          return f
        })
      var i = n('KEM+'),
        o = n.n(i),
        r = n('yiKp'),
        a = n.n(r),
        s = (n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('/kEJ')),
        c = n('Ssj5'),
        l = 'liveTweetCounts',
        u = 'UPDATE',
        d = {}
      c.a.register(
        o()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case s.a:
              var n,
                i = null === (n = t.payload) || void 0 === n ? void 0 : n.tweets
              if (i) {
                var r = a()({}, e)
                return (
                  Object.keys(i).forEach(function (e) {
                    r[e] && delete r[e]
                  }),
                  r
                )
              }
              return e
            case u:
              return a()(
                a()({}, e),
                {},
                o()({}, t.payload.tweetId, a()(a()({}, e[t.payload.tweetId]), t.payload.liveCounts)),
              )
            default:
              return e
          }
        }),
      )
      var p = function (e, t) {
          return e.liveTweetCounts[t]
        },
        f = function (e) {
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
        return T
      }),
        n.d(t, 'b', function () {
          return A
        })
      var i = n('ERkP'),
        o = n.n(i),
        r = n('3XMw'),
        a = n.n(r),
        s = n('wD1h'),
        c = n('wwsH'),
        l = n('yVEN'),
        u = n('jlPL'),
        d = n('mjJ+'),
        p = n('TW8A'),
        f = a.a.d6c85149,
        m = a.a.f3bbbb87,
        h = a.a.c9d7235d,
        v = { viewType: 'quote' },
        _ = function (e) {
          return { viewType: 'retweet', viewState: { type: 'toggleable', toggledTo: e } }
        }
      function b(e) {
        var t,
          n,
          i,
          r,
          a,
          s,
          c,
          l,
          b,
          g,
          y,
          w,
          k,
          C,
          E,
          T =
            ((n = (t = e).excludeRetweetAction),
            (i = void 0 !== n && n),
            (r = t.excludeRetweetWithCommentAction),
            (a = void 0 !== r && r),
            (s = t.isRetweeted),
            (c = t.onMenuCancel),
            (l = t.onQuoteTweetActionSelect),
            (b = t.onRetweetActionSelect),
            (g = t.onUnretweetActionSelect),
            (y = t.retweetActionSubText),
            (w = t.retweetWithCommentLink),
            (k = t.testIDs),
            (C = null == k ? void 0 : k.retweetConfirm),
            (E = null == k ? void 0 : k.unretweetConfirm),
            o.a.useMemo(
              function () {
                var e = []
                return (
                  s ||
                    i ||
                    e.push({
                      behavioralEventContext: _(!0),
                      text: f,
                      subText: y,
                      onClick: function () {
                        null == c || c(), null == b || b()
                      },
                      testID: C,
                      Icon: u.a,
                    }),
                  s &&
                    e.push({
                      behavioralEventContext: _(!1),
                      text: m,
                      onClick: function () {
                        null == c || c(), null == g || g()
                      },
                      testID: E,
                      Icon: u.a,
                    }),
                  a ||
                    e.push({
                      behavioralEventContext: v,
                      text: h,
                      onClick: function () {
                        null == c || c(), null == l || l()
                      },
                      Icon: p.a,
                      link: w,
                    }),
                  e
                )
              },
              [i, a, s, c, l, b, g, y, w, C, E],
            ))
        return o.a.createElement(d.a, {
          description: e.actionMenuDescription,
          items: T,
          onCloseRequested: function () {
            var t
            null === (t = e.onMenuCancel) || void 0 === t || t.call(e)
          },
        })
      }
      var g = a.a.d6c85149,
        y = a.a.f3bbbb87,
        w = a.a.g23ce6f0,
        k = a.a.i769b0ab,
        C = a.a.ea9a1f0c,
        E = { viewType: 'retweet' },
        T = { RETWEET: 'retweet', UNRETWEET: 'unretweet', QUOTE: 'quote' }
      function A(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          i = void 0 === n ? 'green500' : n,
          r = e.color,
          a = e.count,
          d = e.enableActionMenu,
          p = void 0 !== d && d,
          f = e.enableKeyboardShortcuts,
          m = e.excludeRetweetAction,
          h = e.excludeRetweetWithCommentAction,
          v = e.iconSize,
          _ = e.isDisabled,
          T = e.isFaded,
          A = e.isPresentational,
          S = e.isRetweeted,
          O = e.onMenuCancel,
          I = e.onPress,
          N = e.onQuoteTweetActionSelect,
          x = e.onRetweetActionSelect,
          P = e.onUnretweetActionSelect,
          R = e.retweetActionSubText,
          L = e.retweetWithCommentLink,
          D = e.style,
          j = e.testIDs,
          M = e.withCount && 'number' == typeof a,
          V = S ? w : g
        return (
          M && (V = S ? C({ count: a }) : k({ count: a })),
          o.a.createElement(c.a, {
            ActiveIcon: l.a,
            Icon: u.a,
            accessibilityLabel: V,
            activeColor: i,
            behavioralEventContext: E,
            color: r,
            count: a,
            enableKeyboardShortcuts: f,
            hoverLabel: { label: S ? y : g },
            iconSize: v,
            isActive: S,
            isDisabled: _,
            isFaded: T,
            isPresentational: A,
            keyboardShortcut: s.a.shortcuts.retweet,
            onPress: I,
            renderMenu: p
              ? function (e) {
                  return o.a.createElement(b, {
                    actionMenuDescription: t,
                    excludeRetweetAction: m,
                    excludeRetweetWithCommentAction: h,
                    isRetweeted: S,
                    onMenuCancel: function () {
                      e(), null == O || O()
                    },
                    onQuoteTweetActionSelect: N,
                    onRetweetActionSelect: x,
                    onUnretweetActionSelect: P,
                    retweetActionSubText: R,
                    retweetWithCommentLink: L,
                    testIDs: {
                      retweetConfirm: null == j ? void 0 : j.retweetConfirm,
                      unretweetConfirm: null == j ? void 0 : j.unretweetConfirm,
                    },
                  })
                }
              : void 0,
            style: D,
            testID: S ? (null == j ? void 0 : j.unretweet) : null == j ? void 0 : j.retweet,
            withCount: M,
          })
        )
      }
    },
    WrBE: function (e, t, n) {
      'use strict'
      var i = n('4LIG'),
        o = n('ERkP'),
        r = n('sIe2'),
        a = n('9Ulv'),
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
            if (t instanceof a.a) t.__makeNative(), i.push({ nativeEventPath: n, animatedValueTag: t.__getNativeTag() })
            else if ('object' == typeof t) for (var o in t) e(t[o], n.concat(o))
          })(n[0].nativeEvent, [])
        var o = Object(c.a)(e)
        return (
          null != o &&
            i.forEach(function (e) {
              s.a.API.addAnimatedEventToView(o, t, e)
            }),
          {
            detach: function () {
              null != o &&
                i.forEach(function (e) {
                  s.a.API.removeAnimatedEventFromView(o, t, e.animatedValueTag)
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
                var o = function e(t, n, i) {
                  if (t instanceof a.a) 'number' == typeof n && t.setValue(n)
                  else if ('object' == typeof t) for (var o in t) e(t[o], n[o], o)
                }
                e._argMapping.forEach(function (e, t) {
                  o(e, n[t], 'arg' + t)
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
        f = n('pxHa'),
        m = n('BR0S')
      function h(e, t) {
        return (h =
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
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), h(t, n)
          var o = i.prototype
          return (
            (o.__makeNative = function () {
              this._transforms.forEach(function (e) {
                for (var t in e) {
                  var n = e[t]
                  n instanceof f.a && n.__makeNative()
                }
              }),
                e.prototype.__makeNative.call(this)
            }),
            (o.__getValue = function () {
              return this._transforms.map(function (e) {
                var t = {}
                for (var n in e) {
                  var i = e[n]
                  i instanceof f.a ? (t[n] = i.__getValue()) : (t[n] = i)
                }
                return t
              })
            }),
            (o.__getAnimatedValue = function () {
              return this._transforms.map(function (e) {
                var t = {}
                for (var n in e) {
                  var i = e[n]
                  i instanceof f.a ? (t[n] = i.__getAnimatedValue()) : (t[n] = i)
                }
                return t
              })
            }),
            (o.__attach = function () {
              var e = this
              this._transforms.forEach(function (t) {
                for (var n in t) {
                  var i = t[n]
                  i instanceof f.a && i.__addChild(e)
                }
              })
            }),
            (o.__detach = function () {
              var t = this
              this._transforms.forEach(function (e) {
                for (var n in e) {
                  var i = e[n]
                  i instanceof f.a && i.__removeChild(t)
                }
              }),
                e.prototype.__detach.call(this)
            }),
            (o.__getNativeConfig = function () {
              var e = []
              return (
                this._transforms.forEach(function (t) {
                  for (var n in t) {
                    var i = t[n]
                    i instanceof f.a
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
        })(m.a),
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
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var k = (function (e) {
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
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), w(t, n)
        var o = i.prototype
        return (
          (o._walkStyleAndGetValues = function (e) {
            var t = {}
            for (var n in e) {
              var i = e[n]
              i instanceof f.a
                ? i.__isNative || (t[n] = i.__getValue())
                : i && !Array.isArray(i) && 'object' == typeof i
                ? (t[n] = this._walkStyleAndGetValues(i))
                : (t[n] = i)
            }
            return t
          }),
          (o.__getValue = function () {
            return this._walkStyleAndGetValues(this._style)
          }),
          (o._walkStyleAndGetAnimatedValues = function (e) {
            var t = {}
            for (var n in e) {
              var i = e[n]
              i instanceof f.a
                ? (t[n] = i.__getAnimatedValue())
                : i && !Array.isArray(i) && 'object' == typeof i && (t[n] = this._walkStyleAndGetAnimatedValues(i))
            }
            return t
          }),
          (o.__getAnimatedValue = function () {
            return this._walkStyleAndGetAnimatedValues(this._style)
          }),
          (o.__attach = function () {
            for (var e in this._style) {
              var t = this._style[e]
              t instanceof f.a && t.__addChild(this)
            }
          }),
          (o.__detach = function () {
            for (var t in this._style) {
              var n = this._style[t]
              n instanceof f.a && n.__removeChild(this)
            }
            e.prototype.__detach.call(this)
          }),
          (o.__makeNative = function () {
            for (var t in this._style) {
              var n = this._style[t]
              n instanceof f.a && n.__makeNative()
            }
            e.prototype.__makeNative.call(this)
          }),
          (o.__getNativeConfig = function () {
            var e = {}
            for (var t in this._style)
              if (this._style[t] instanceof f.a) {
                var n = this._style[t]
                n.__makeNative(), (e[t] = n.__getNativeTag())
              }
            return s.a.validateStyles(e), { type: 'style', style: e }
          }),
          i
        )
      })(m.a)
      function C(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                T(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function T(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function A(e, t) {
        return (A =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var S = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            (i = e.call(this) || this),
            t.style && (t = E(E({}, t), {}, { style: new k(t.style) })),
            (i._props = t),
            (i._callback = n),
            i.__attach(),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), A(t, n)
        var o = i.prototype
        return (
          (o.__getValue = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof f.a
                ? (!n.__isNative || n instanceof k) && (e[t] = n.__getValue())
                : (e[t] = n instanceof p ? n.__getHandler() : n)
            }
            return e
          }),
          (o.__getAnimatedValue = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof f.a && (e[t] = n.__getAnimatedValue())
            }
            return e
          }),
          (o.__attach = function () {
            for (var e in this._props) {
              var t = this._props[e]
              t instanceof f.a && t.__addChild(this)
            }
          }),
          (o.__detach = function () {
            for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
              var n = this._props[t]
              n instanceof f.a && n.__removeChild(this)
            }
            e.prototype.__detach.call(this)
          }),
          (o.update = function () {
            this._callback()
          }),
          (o.__makeNative = function () {
            if (!this.__isNative) {
              for (var e in ((this.__isNative = !0), this._props)) {
                var t = this._props[e]
                t instanceof f.a && t.__makeNative()
              }
              this._animatedView && this.__connectAnimatedView()
            }
          }),
          (o.setNativeView = function (e) {
            this._animatedView !== e && ((this._animatedView = e), this.__isNative && this.__connectAnimatedView())
          }),
          (o.__connectAnimatedView = function () {
            u()(this.__isNative, 'Expected node to be marked as "native"')
            var e = Object(c.a)(this._animatedView)
            u()(null != e, 'Unable to locate attached view in the native tree'),
              s.a.API.connectAnimatedNodeToView(this.__getNativeTag(), e)
          }),
          (o.__disconnectAnimatedView = function () {
            u()(this.__isNative, 'Expected node to be marked as "native"')
            var e = Object(c.a)(this._animatedView)
            u()(null != e, 'Unable to locate attached view in the native tree'),
              s.a.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), e)
          }),
          (o.__restoreDefaultValues = function () {
            this.__isNative && s.a.API.restoreDefaultValues(this.__getNativeTag())
          }),
          (o.__getNativeConfig = function () {
            var e = {}
            for (var t in this._props) {
              var n = this._props[t]
              n instanceof f.a && (n.__makeNative(), (e[t] = n.__getNativeTag()))
            }
            return { type: 'props', props: e }
          }),
          i
        )
      })(f.a)
      var O = function (e) {
        var t = e.getForwardedRef,
          n = e.setLocalRef
        return function (e) {
          var i = t()
          n(e), 'function' == typeof i ? i(e) : 'object' == typeof i && null != i && (i.current = e)
        }
      }
      function I() {
        return (I =
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
      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                P(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function P(e, t, n) {
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
          o = {},
          r = Object.keys(e)
        for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n])
        return o
      }
      function L(e, t) {
        return (L =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var D = 1
      var j = function (e, t) {
        u()(
          'function' != typeof e || (e.prototype && e.prototype.isReactComponent),
          '`createAnimatedComponent` does not support stateless functional components; use a class component instead.',
        )
        var n = (function (n) {
          var i, r
          function a() {
            for (var e, t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o]
            return (
              ((e = n.call.apply(n, [this].concat(i)) || this)._invokeAnimatedPropsCallbackOnMount = !1),
              (e._eventDetachers = []),
              (e._animatedComponentId = D++ + ':animatedComponent'),
              (e._isFabric = function () {
                var t, n, i, o, r, a
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
                        null == (o = i.stateNode)
                          ? void 0
                          : o.canonical)) ||
                    (null != e._component.getScrollResponder &&
                      null != e._component.getScrollResponder() &&
                      null != e._component.getScrollResponder().getNativeScrollRef &&
                      null != e._component.getScrollResponder().getNativeScrollRef() &&
                      null !=
                        (null == (r = e._component.getScrollResponder().getNativeScrollRef()._internalInstanceHandle) ||
                        null == (a = r.stateNode)
                          ? void 0
                          : a.canonical)))
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
              (e._setComponentRef = O({
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
          ;(r = n), ((i = a).prototype = Object.create(r.prototype)), (i.prototype.constructor = i), L(i, r)
          var c = a.prototype
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
              for (var o in this.props) i(o)
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
                ((this._propsAnimated = new S(e, this._animatedPropsCallback)),
                t && (t.__restoreDefaultValues(), t.__detach()))
            }),
            (c.render = function () {
              var n,
                i,
                r = this._propsAnimated.__getValue() || {},
                a = r.style,
                s = void 0 === a ? {} : a,
                c = R(r, ['style']),
                l = this.props.passthroughAnimatedPropExplicitValues || {},
                u = l.style,
                d = void 0 === u ? {} : u,
                p = R(l, ['style']),
                f = x(x({}, s), d),
                m =
                  (null == this._component && (!1 === (null == t ? void 0 : t.collapsable) || !0 !== c.collapsable)) ||
                  this._isFabric(),
                h = (
                  null !== (n = c.collapsable) && void 0 !== n
                    ? n
                    : this._propsAnimated.__isNative || m || !1 === (null == t ? void 0 : t.collapsable)
                )
                  ? { nativeID: null !== (i = c.nativeID) && void 0 !== i ? i : 'animatedComponent', collapsable: !1 }
                  : {}
              return o.createElement(e, I({}, c, p, h, { style: f, ref: this._setComponentRef }))
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
            a
          )
        })(o.Component)
        return o.forwardRef(function (e, t) {
          return o.createElement(n, I({}, e, null == t ? null : { forwardedRef: t }))
        })
      }
      function M() {
        return (M =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      var V = j(
          o.forwardRef(function (e, t) {
            return o.createElement(r.a, M({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
        ),
        F = j(n('U+bB').a, { collapsable: !1 }),
        U = n('Iok7')
      function B() {
        return (B =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      var H = j(
          o.forwardRef(function (e, t) {
            return o.createElement(U.a, B({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
          { collapsable: !1 },
        ),
        K = n('MWbm'),
        z = n('8cgI')
      function W() {
        return (W =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          }).apply(this, arguments)
      }
      function q(e, t) {
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
      function Q(e, t) {
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
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                G(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function G(e, t, n) {
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
          for (var t, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r]
          return (
            ((t = e.call.apply(e, [this].concat(i)) || this)._getItem = function (e, t, n) {
              if (!t) return null
              for (var i = n - 1, o = 0; o < t.length; o++) {
                var r = t[o],
                  a = r.data,
                  s = e.getItemCount(a)
                if (-1 === i || i === s) return r
                if (i < s) return e.getItem(a, i)
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
              return J(J({}, e), {}, { index: n.index, key: i(e.item, n.index), section: n.section })
            }),
            (t._onViewableItemsChanged = function (e) {
              var n = e.viewableItems,
                i = e.changed,
                o = t.props.onViewableItemsChanged
              null != o &&
                o({
                  viewableItems: n.map(t._convertViewable, Y(t)).filter(Boolean),
                  changed: i.map(t._convertViewable, Y(t)).filter(Boolean),
                })
            }),
            (t._renderItem = function (e) {
              return function (n) {
                var i = n.item,
                  r = n.index,
                  a = t._subExtractor(r)
                if (!a) return null
                var s = a.index
                if (null == s) {
                  var c = a.section
                  if (!0 === a.header) {
                    var l = t.props.renderSectionHeader
                    return l ? l({ section: c }) : null
                  }
                  var d = t.props.renderSectionFooter
                  return d ? d({ section: c }) : null
                }
                var p = a.section.renderItem || t.props.renderItem,
                  f = t._getSeparatorComponent(r, a, e)
                return (
                  u()(p, 'no renderItem!'),
                  o.createElement(te, {
                    SeparatorComponent: f,
                    LeadingSeparatorComponent: 0 === s ? t.props.SectionSeparatorComponent : void 0,
                    cellKey: a.key,
                    index: s,
                    item: i,
                    leadingItem: a.leadingItem,
                    leadingSection: a.leadingSection,
                    onUpdateSeparator: t._onUpdateSeparator,
                    prevCellKey: (t._subExtractor(r - 1) || {}).key,
                    ref: function (e) {
                      t._cellRefs[a.key] = e
                    },
                    renderItem: p,
                    section: a.section,
                    trailingItem: a.trailingItem,
                    trailingSection: a.trailingSection,
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
              var o = J(J({}, e), {}, { viewOffset: i, index: t })
              this._listRef.scrollToIndex(o)
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
                      o = {},
                      r = Object.keys(e)
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n])
                    return o
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
                a = this.props.stickySectionHeadersEnabled ? [] : void 0,
                s = 0,
                c = q(this.props.sections);
              !(e = c()).done;

            ) {
              var l = e.value
              null != a && a.push(s + r), (s += 2), (s += this.props.getItemCount(l.data))
            }
            var u = this._renderItem(s)
            return o.createElement(
              z.a,
              W({}, i, {
                keyExtractor: this._keyExtractor,
                stickyHeaderIndices: a,
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
              var t = e, n = this.props, i = n.getItem, o = n.getItemCount, r = n.keyExtractor, a = n.sections, s = 0;
              s < a.length;
              s++
            ) {
              var c = a[s],
                l = c.data,
                u = c.key || String(s)
              if (!((t -= 1) >= o(l) + 1))
                return -1 === t
                  ? { section: c, key: u + ':header', index: null, header: !0, trailingSection: a[s + 1] }
                  : t === o(l)
                  ? { section: c, key: u + ':footer', index: null, header: !1, trailingSection: a[s + 1] }
                  : {
                      section: c,
                      key: u + ':' + (c.keyExtractor || r)(i(l, t), t),
                      index: t,
                      leadingItem: i(l, t - 1),
                      leadingSection: a[s - 1],
                      trailingItem: i(l, t + 1),
                      trailingSection: a[s + 1],
                    }
              t -= o(l) + 1
            }
          }),
          (n._getSeparatorComponent = function (e, t, n) {
            if (!(t = t || this._subExtractor(e))) return null
            var i = t.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent,
              o = this.props.SectionSeparatorComponent,
              r = e === n - 1,
              a = t.index === this.props.getItemCount(t.section.data) - 1
            return o && a ? o : !i || a || r ? null : i
          }),
          t
        )
      })(o.PureComponent)
      ee.defaultProps = J(J({}, z.a.defaultProps), {}, { data: [] })
      var te = (function (e) {
          function t() {
            for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
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
                    o = i.LeadingSeparatorComponent,
                    r = i.cellKey,
                    a = i.prevCellKey
                  'leading' === e && null != o
                    ? t.setState(function (e) {
                        return { leadingSeparatorProps: J(J({}, e.leadingSeparatorProps), n) }
                      })
                    : t.props.onUpdateSeparator(('leading' === e && a) || r, n)
                },
              }),
              t
            )
          }
          Z(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return {
                separatorProps: J(
                  J({}, t.separatorProps),
                  {},
                  {
                    leadingItem: e.item,
                    leadingSection: e.leadingSection,
                    section: e.section,
                    trailingItem: e.trailingItem,
                    trailingSection: e.trailingSection,
                  },
                ),
                leadingSeparatorProps: J(
                  J({}, t.leadingSeparatorProps),
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
                return { separatorProps: J(J({}, t.separatorProps), e) }
              })
            }),
            (n.render = function () {
              var e = this.props,
                t = e.LeadingSeparatorComponent,
                n = e.SeparatorComponent,
                i = e.item,
                r = e.index,
                a = e.section,
                s = e.inverted,
                c = this.props.renderItem({ item: i, index: r, section: a, separators: this._separators }),
                l = null != t && o.createElement(t, this.state.leadingSeparatorProps),
                u = null != n && o.createElement(n, this.state.separatorProps)
              return l || u ? o.createElement(K.a, null, !1 === s ? l : u, c, !1 === s ? u : l) : c
            }),
            t
          )
        })(o.Component),
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
      function oe(e, t) {
        return (oe =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function re(e, t) {
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
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? re(Object(n), !0).forEach(function (t) {
                se(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : re(Object(n)).forEach(function (t) {
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
      var ce = ae(ae({}, ne.defaultProps), {}, { stickySectionHeadersEnabled: 'ios' === i.a.OS }),
        le = (function (e) {
          var t, n
          function i() {
            for (var t, n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o]
            return (
              ((t = e.call.apply(e, [this].concat(i)) || this)._captureRef = function (e) {
                t._wrapperListRef = e
              }),
              t
            )
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), oe(t, n)
          var r = i.prototype
          return (
            (r.scrollToLocation = function (e) {
              null != this._wrapperListRef && this._wrapperListRef.scrollToLocation(e)
            }),
            (r.recordInteraction = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.recordInteraction()
            }),
            (r.flashScrollIndicators = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              e && e.flashScrollIndicators()
            }),
            (r.getScrollResponder = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (e) return e.getScrollResponder()
            }),
            (r.getScrollableNode = function () {
              var e = this._wrapperListRef && this._wrapperListRef.getListRef()
              if (e) return e.getScrollableNode()
            }),
            (r.setNativeProps = function (e) {
              var t = this._wrapperListRef && this._wrapperListRef.getListRef()
              t && t.setNativeProps(e)
            }),
            (r.render = function () {
              return o.createElement(
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
        })(o.PureComponent)
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
      var pe = j(
          o.forwardRef(function (e, t) {
            return o.createElement(ue, de({ scrollEventThrottle: 1e-4 }, e, { ref: t }))
          }),
        ),
        fe = j(n('+/1j').a, { collapsable: !1 }),
        me = j(K.a, { collapsable: !0 }),
        he = n('FGdj')
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
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new a.a(t) : t),
            (i._b = 'number' == typeof n ? new a.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), ve(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.__getValue = function () {
            return this._a.__getValue() + this._b.__getValue()
          }),
          (o.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (o.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (o.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__getNativeConfig = function () {
            return { type: 'addition', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(m.a)
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
          var o
          return (
            ((o = e.call(this) || this)._a = t),
            (o._min = n),
            (o._max = i),
            (o._value = o._lastValue = o._a.__getValue()),
            o
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), be(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._a.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (o.__getValue = function () {
            var e = this._a.__getValue(),
              t = e - this._lastValue
            return (
              (this._lastValue = e),
              (this._value = Math.min(Math.max(this._value + t, this._min), this._max)),
              this._value
            )
          }),
          (o.__attach = function () {
            this._a.__addChild(this)
          }),
          (o.__detach = function () {
            this._a.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__getNativeConfig = function () {
            return { type: 'diffclamp', input: this._a.__getNativeTag(), min: this._min, max: this._max }
          }),
          i
        )
      })(m.a)
      function ye(e, t) {
        return (ye =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var we = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._warnedAboutDivideByZero = !1),
            0 === n || (n instanceof f.a && n.__getValue()),
            (i._a = 'number' == typeof t ? new a.a(t) : t),
            (i._b = 'number' == typeof n ? new a.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), ye(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.__getValue = function () {
            var e = this._a.__getValue(),
              t = this._b.__getValue()
            return 0 === t
              ? (this._warnedAboutDivideByZero || (this._warnedAboutDivideByZero = !0), 0)
              : ((this._warnedAboutDivideByZero = !1), e / t)
          }),
          (o.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (o.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (o.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__getNativeConfig = function () {
            return { type: 'division', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(m.a)
      function ke(e, t) {
        return (ke =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Ce = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return ((i = e.call(this) || this)._a = t), (i._modulus = n), i
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), ke(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._a.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.__getValue = function () {
            return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus
          }),
          (o.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (o.__attach = function () {
            this._a.__addChild(this)
          }),
          (o.__detach = function () {
            this._a.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__getNativeConfig = function () {
            return { type: 'modulus', input: this._a.__getNativeTag(), modulus: this._modulus }
          }),
          i
        )
      })(m.a)
      function Ee(e, t) {
        return (Ee =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Te = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new a.a(t) : t),
            (i._b = 'number' == typeof n ? new a.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Ee(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.__getValue = function () {
            return this._a.__getValue() * this._b.__getValue()
          }),
          (o.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (o.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (o.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__getNativeConfig = function () {
            return { type: 'multiplication', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(m.a)
      function Ae(e, t) {
        return (Ae =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Se = (function (e) {
        var t, n
        function i(t, n) {
          var i
          return (
            ((i = e.call(this) || this)._a = 'number' == typeof t ? new a.a(t) : t),
            (i._b = 'number' == typeof n ? new a.a(n) : n),
            i
          )
        }
        ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), Ae(t, n)
        var o = i.prototype
        return (
          (o.__makeNative = function () {
            this._a.__makeNative(), this._b.__makeNative(), e.prototype.__makeNative.call(this)
          }),
          (o.__getValue = function () {
            return this._a.__getValue() - this._b.__getValue()
          }),
          (o.interpolate = function (e) {
            return new he.a(this, e)
          }),
          (o.__attach = function () {
            this._a.__addChild(this), this._b.__addChild(this)
          }),
          (o.__detach = function () {
            this._a.__removeChild(this), this._b.__removeChild(this), e.prototype.__detach.call(this)
          }),
          (o.__getNativeConfig = function () {
            return { type: 'subtraction', input: [this._a.__getNativeTag(), this._b.__getNativeTag()] }
          }),
          i
        )
      })(m.a)
      function Oe(e, t) {
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
      function Ie(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Oe(Object(n), !0).forEach(function (t) {
                Ne(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Oe(Object(n)).forEach(function (t) {
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
      function xe(e, t) {
        return (xe =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var Pe = (function (e) {
          var t, n
          function i(t, n, i, o, r) {
            var a
            return (
              ((a = e.call(this) || this)._value = t),
              (a._parent = n),
              (a._animationClass = i),
              (a._animationConfig = o),
              (a._useNativeDriver = Object(s.c)(o)),
              (a._callback = r),
              a.__attach(),
              a
            )
          }
          ;(n = e), ((t = i).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), xe(t, n)
          var o = i.prototype
          return (
            (o.__makeNative = function () {
              ;(this.__isNative = !0),
                this._parent.__makeNative(),
                e.prototype.__makeNative.call(this),
                this._value.__makeNative()
            }),
            (o.__getValue = function () {
              return this._parent.__getValue()
            }),
            (o.__attach = function () {
              this._parent.__addChild(this), this._useNativeDriver && this.__makeNative()
            }),
            (o.__detach = function () {
              this._parent.__removeChild(this), e.prototype.__detach.call(this)
            }),
            (o.update = function () {
              this._value.animate(
                new this._animationClass(
                  Ie(Ie({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() }),
                ),
                this._callback,
              )
            }),
            (o.__getNativeConfig = function () {
              var e = new this._animationClass(
                Ie(Ie({}, this._animationConfig), {}, { toValue: void 0 }),
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
        })(f.a),
        Re = n('/x6e'),
        Le = n('BtOK'),
        De = n('jydp'),
        je = n('e6X4')
      function Me(e, t) {
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
      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Me(Object(n), !0).forEach(function (t) {
                Fe(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Me(Object(n)).forEach(function (t) {
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
      var Ue = function (e, t) {
          return e && t.onComplete
            ? function () {
                t.onComplete && t.onComplete.apply(t, arguments), e && e.apply(void 0, arguments)
              }
            : e || t.onComplete
        },
        Be = function (e, t, n) {
          if (e instanceof Re.a) {
            var i = Ve({}, t),
              o = Ve({}, t)
            for (var r in t) {
              var a = t[r],
                s = a.x,
                c = a.y
              void 0 !== s && void 0 !== c && ((i[r] = s), (o[r] = c))
            }
            var l = n(e.x, i),
              u = n(e.y, o)
            return ze([l, u], { stopTogether: !1 })
          }
          return null
        },
        He = function e(t, n) {
          var i = function (e, t, n) {
            n = Ue(n, t)
            var i = e,
              o = t
            i.stopTracking(),
              t.toValue instanceof f.a ? i.track(new Pe(i, t.toValue, je.a, o, n)) : i.animate(new je.a(o), n)
          }
          return (
            Be(t, n, e) || {
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
                var o = Ve(Ve({}, n), {}, { iterations: e })
                i(t, o)
              },
              _isUsingNativeDriver: function () {
                return n.useNativeDriver || !1
              },
            }
          )
        },
        Ke = function (e) {
          var t = 0
          return {
            start: function (n) {
              0 === e.length
                ? n && n({ finished: !0 })
                : e[t].start(function i(o) {
                    o.finished && ++t !== e.length ? e[t].start(i) : n && n(o)
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
        ze = function (e, t) {
          var n = 0,
            i = {},
            o = !(t && !1 === t.stopTogether),
            r = {
              start: function (t) {
                n !== e.length
                  ? e.forEach(function (a, s) {
                      var c = function (a) {
                        if (((i[s] = !0), ++n === e.length)) return (n = 0), void (t && t(a))
                        !a.finished && o && r.stop()
                      }
                      a ? a.start(c) : c({ finished: !0 })
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
          return r
        },
        We = function (e) {
          return He(new a.a(0), { toValue: 0, delay: e, duration: 0, useNativeDriver: !1 })
        }
      var qe = {
        Value: a.a,
        ValueXY: Re.a,
        Interpolation: he.a,
        Node: f.a,
        decay: function e(t, n) {
          var i = function (e, t, n) {
            n = Ue(n, t)
            var i = e,
              o = t
            i.stopTracking(), i.animate(new Le.a(o), n)
          }
          return (
            Be(t, n, e) || {
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
                var o = Ve(Ve({}, n), {}, { iterations: e })
                i(t, o)
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
              o = t
            i.stopTracking(),
              t.toValue instanceof f.a ? i.track(new Pe(i, t.toValue, De.a, o, n)) : i.animate(new De.a(o), n)
          }
          return (
            Be(t, n, e) || {
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
                var o = Ve(Ve({}, n), {}, { iterations: e })
                i(t, o)
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
          return new Se(e, t)
        },
        divide: function (e, t) {
          return new we(e, t)
        },
        multiply: function (e, t) {
          return new Te(e, t)
        },
        modulo: function (e, t) {
          return new Ce(e, t)
        },
        diffClamp: function (e, t, n) {
          return new ge(e, t, n)
        },
        delay: We,
        sequence: Ke,
        parallel: ze,
        stagger: function (e, t) {
          return ze(
            t.map(function (t, n) {
              return Ke([We(e * n), t])
            }),
          )
        },
        loop: function (e, t) {
          var n = void 0 === t ? {} : t,
            i = n.iterations,
            o = void 0 === i ? -1 : i,
            r = n.resetBeforeIteration,
            a = void 0 === r || r,
            s = !1,
            c = 0
          return {
            start: function (t) {
              e && 0 !== o
                ? e._isUsingNativeDriver()
                  ? e._startNativeLoop(o)
                  : (function n(i) {
                      void 0 === i && (i = { finished: !0 }),
                        s || c === o || !1 === i.finished ? t && t(i) : (c++, a && e.reset(), e.start(n))
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
        createAnimatedComponent: j,
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
        __PropsOnlyForTests: S,
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
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xe(Object(n), !0).forEach(function (t) {
                Je(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xe(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Je(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var Ge = {
          start: function () {},
          stop: function () {},
          reset: function () {},
          _startNativeLoop: function () {},
          _isUsingNativeDriver: function () {
            return !1
          },
        },
        Ye = {
          Value: a.a,
          ValueXY: Re.a,
          Interpolation: he.a,
          Node: f.a,
          decay: function (e, t) {
            return Ge
          },
          timing: function (e, t) {
            var n = e
            return Qe(
              Qe({}, Ge),
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
            return Qe(
              Qe({}, Ge),
              {},
              {
                start: function (e) {
                  n.setValue(t.toValue), e && e({ finished: !0 })
                },
              },
            )
          },
          add: qe.add,
          subtract: qe.subtract,
          divide: qe.divide,
          multiply: qe.multiply,
          modulo: qe.modulo,
          diffClamp: qe.diffClamp,
          delay: function (e) {
            return Ge
          },
          sequence: function (e) {
            return Ge
          },
          parallel: function (e, t) {
            return Ge
          },
          stagger: function (e, t) {
            return Ge
          },
          loop: function (e, t) {
            ;(void 0 === t ? {} : t).iterations
            return Ge
          },
          event: function (e, t) {
            return null
          },
          createAnimatedComponent: j,
          attachNativeEvent: d,
          forkEvent: qe.forkEvent,
          unforkEvent: qe.unforkEvent,
          Event: p,
          __PropsOnlyForTests: S,
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
      })({ FlatList: V, Image: F, ScrollView: H, SectionList: pe, Text: fe, View: me }, i.a.isTesting ? Ye : qe)
      t.a = et
    },
    XEYr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.b141cbff,
        u = c.a.e902fd9d,
        d = c.a.bbbfc827,
        p =
          ((i = { defaultToast: { text: u } }),
          r()(i, a.a.BlockedUserError, { toast: { text: l } }),
          r()(i, a.a.ProtectedStatusFavoriteError, { toast: { text: d } }),
          r()(i, 'showToast', !0),
          i)
    },
    XIWT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.ae5c603c,
        u = c.a.h5634a0b,
        d =
          ((i = { defaultToast: { text: c.a.b657101c } }),
          r()(i, a.a.DuplicateBookmark, { toast: { text: u } }),
          r()(i, a.a.ProtectedTweetBookmarkError, { toast: { text: l } }),
          r()(i, 'showToast', !0),
          i)
    },
    XJEr: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'b', function () {
          return y
        }),
          n.d(t, 'c', function () {
            return k
          })
        var i,
          o = n('vG6z'),
          r = n('mbB1'),
          a = n('0m3q'),
          s = n('4LIG'),
          c = n('tI3i'),
          l = n.n(c),
          u = 'ios' === s.a.OS && e.RN$Bridgeless ? r.a : o.a,
          d = 1,
          p = 1,
          f = new Set(),
          m = !1,
          h = [],
          v = {
            getValue: function (e, t) {
              l()(u, 'Native animated module is not available'), u.getValue && u.getValue(e, t)
            },
            setWaitingForIdentifier: function (e) {
              f.add(e), (m = !0)
            },
            unsetWaitingForIdentifier: function (e) {
              f.delete(e), 0 === f.size && ((m = !1), v.disableQueue())
            },
            disableQueue: function () {
              l()(u, 'Native animated module is not available'), 'android' === s.a.OS && u.startOperationBatch()
              for (var e = 0, t = h.length; e < t; e++) h[e]()
              ;(h.length = 0), 'android' === s.a.OS && u.finishOperationBatch()
            },
            queueOperation: function (e) {
              m ? h.push(e) : e()
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
        function y() {
          return p++
        }
        var w = !1
        function k(e) {
          return e.useNativeDriver, !0 !== e.useNativeDriver || u ? e.useNativeDriver || !1 : (w || (w = !0), !1)
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
          generateNewAnimationId: y,
          assertNativeAnimatedModule: function () {
            l()(u, 'Native animated module is not available')
          },
          shouldUseNativeDriver: k,
          transformDataType: function (e) {
            return 'string' != typeof e ? e : /deg$/.test(e) ? ((parseFloat(e) || 0) * Math.PI) / 180 : e
          },
          get nativeEventEmitter() {
            return i || (i = new a.a(u)), i
          },
        }
      }.call(this, n('fRV1')))
    },
    YBcl: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = (n('jQ3i'), n('ERkP')),
        a = n.n(r),
        s = n('I7xS'),
        c = n('nBUg'),
        l = n('rHpw'),
        u = n('sQjL'),
        d = n('/aXP'),
        p = n('E0cF'),
        f = function (e) {
          var t = (function (e) {
              var t = e.displayStyle,
                n = e.exclusivityInfoLabelNativeID,
                i = e.hideExclusivityInfoEducationTextInReplies,
                o = e.loggedInUser,
                r = e.tweet,
                a = p.a.getOriginalTweet(r),
                s = !!a.in_reply_to_status_id_str,
                c = a.exclusivity_info,
                l = a.permalink,
                u = a.user
              if (!(!c || ('inline' === t && s && i))) {
                var d = c.screen_name,
                  f = d === (null == o ? void 0 : o.screen_name),
                  m = u.screen_name === (null == o ? void 0 : o.screen_name)
                return {
                  displayMode: 'detail' === t ? 'detail' : s ? 'compact' : 'inline',
                  nativeID: n,
                  screenName: d,
                  scribeElement: 'exclusivity_info_context',
                  tweetPermalink: l,
                  type: f
                    ? 'exclusiveToSuperFollowersCreator'
                    : m
                    ? 'exclusiveToSuperFollowersReplyOwn'
                    : 'exclusiveToSuperFollowersReplyOthers',
                }
              }
            })(e),
            n = (function (e) {
              var t = e.displayStyle,
                n = e.hideTrustedFriendsEducationTextInReplies,
                i = e.loggedInUser,
                o = e.trustedFriendsLabelNativeID,
                r = e.tweet,
                a = c.b.useProps().trustedFriendsEnabled(),
                s = p.a.getOriginalTweet(r),
                l = !!s.in_reply_to_status_id_str,
                u = s.permalink,
                d = s.trusted_friends_info,
                f = s.user
              if (a && d && ('inline' !== t || !l || !n))
                return {
                  anchorless: !0,
                  displayMode: 'detail' === t ? 'detail' : l ? 'compact' : 'inline',
                  nativeID: o,
                  screenName: d.screen_name,
                  scribeElement: 'exclusivity_info_context',
                  tweetPermalink: u,
                  type:
                    f.screen_name === (null == i ? void 0 : i.screen_name)
                      ? 'trustedFriendsReplyOwn'
                      : 'trustedFriendsReplyOthers',
                }
            })(e),
            i = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = e.hideConversationControlsEducationText,
                o = e.loggedInUser,
                r = e.tweet,
                a = !!o,
                c = p.a.getOriginalTweet(r),
                l = c.conversation_control,
                u = c.limited_actions,
                d = c.permalink,
                f = a && !u
              if (l && ('inline' !== n || (f && !i))) {
                var m = l.conversation_owner.screen_name,
                  h = l.policy,
                  v = s.a.getEducationType(h, f)
                if (v)
                  return {
                    displayMode: 'detail' === n ? 'detail' : 'compact',
                    nativeID: t,
                    tweetPermalink: d,
                    screenName: m,
                    scribeElement: 'conversation_control_context',
                    type: v,
                  }
              }
            })(e),
            r = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = (e.hideConversationControlsEducationText, e.loggedInUser, e.tweet),
                o = c.b.useProps().c9sEnabled(),
                r = p.a.getOriginalTweet(i),
                a = r.community_id_str,
                l = 'community_tweet_hidden' === r.limited_actions,
                u = s.a.getEducationType('community_hidden_tweet')
              if (o && a && l && u)
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
                o = c.b.useProps().c9sEnabled(),
                r = p.a.getOriginalTweet(i),
                a = r.community_id_str,
                l = 'community_tweet_member_removed' === r.limited_actions,
                u = s.a.getEducationType('community_tweet_member_removed')
              if (o && a && l && u)
                return {
                  displayMode: 'detail' === n ? 'detail' : 'compact',
                  nativeID: t,
                  screenName: '',
                  scribeElement: 'removed_member_community_tweet_education',
                  type: u,
                }
            })(e),
            f = t || n || i || r || l,
            h = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                i = e.educationBannerProps,
                o = e.handleHeadsUpImpression,
                r = e.showConversationHeadsUp,
                s = e.tweet,
                l = c.b.useProps().headsUpVariant(),
                u = ['headsUpCopyA', 'headsUpCopyB'].includes(l) ? l : void 0
              if (
                (a.a.useEffect(
                  function () {
                    o && i && r
                      ? o(s.id_str, 'impression_hidden_convo_controls')
                      : o && !u && r
                      ? o(s.id_str, 'impression_hidden')
                      : o && u && r && o(s.id_str, 'impression')
                  },
                  [u, i, o, r, s.id_str],
                ),
                r && u)
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
            })(o()({ educationBannerProps: void 0 !== f }, e)),
            v = f || h
          if (!v) return null
          var _ = e.displayStyle,
            b = e.handleAnchorAction,
            g = e.handleAnchorOpen,
            y = e.handleAnchorSecondaryAction,
            w = v.anchorless,
            k = v.displayMode,
            C = v.nativeID,
            E = v.screenName,
            T = v.scribeElement,
            A = v.tweetPermalink,
            S = v.type,
            O = m[k]
          return 'inline' !== _ || w
            ? a.a.createElement(d.a, { displayMode: k, nativeID: C, screenName: E, style: O, type: S })
            : a.a.createElement(
                u.a,
                {
                  onAction: b,
                  onOpen: g
                    ? function () {
                        return g(T)
                      }
                    : void 0,
                  onSecondaryAction: y,
                  screenName: E,
                  style: O,
                  tweetPermalink: A,
                  type: S,
                },
                a.a.createElement(d.a, { displayMode: k, nativeID: C, screenName: E, type: S }),
              )
        }
      f.defaultProps = { displayStyle: 'inline' }
      var m = l.a.create(function (e) {
        return {
          compact: { alignSelf: 'flex-start', marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
          inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
          detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 },
        }
      })
      t.a = f
    },
    YRNd: function (e, t, n) {
      'use strict'
      var i = n('XJEr'),
        o = 1,
        r = (function () {
          function e() {}
          var t = e.prototype
          return (
            (t.start = function (e, t, n, i, o) {}),
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
              var t = o + ':startAnimation'
              ;(o += 1), i.a.API.setWaitingForIdentifier(t)
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
      t.a = r
    },
    'Z8+W': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return O
      }),
        n.d(t, 'a', function () {
          return N
        })
      var i = n('97Jx'),
        o = n.n(i),
        r = n('T0aG'),
        a = n.n(r),
        s = n('ddV6'),
        c = n.n(s),
        l = (n('849X'), n('TJCb'), n('hBvt'), n('ERkP')),
        u = n.n(l),
        d = n('mjJ+'),
        p = n('PxJJ'),
        f = n('3XMw'),
        m = n.n(f),
        h = n('wD1h'),
        v = n('I8UQ'),
        _ = n('wwsH'),
        b = n('aITJ'),
        g = n('KDev'),
        y = n('iEUn'),
        w = n('uCrx'),
        k = m.a.d636ebc6,
        C = m.a.eb3a8b0b,
        E = m.a.a4ae22fa,
        T = m.a.a0af935b,
        A = m.a.dac92b0c,
        S = m.a.aa650427
      function O(e) {
        var t = e.isLiked,
          n = e.likeTransitionAnimation,
          i = u.a.useState(!1),
          o = c()(i, 2),
          r = o[0],
          s = o[1],
          l = u.a.useRef(t)
        return (
          u.a.useEffect(
            function () {
              ;('object' === a()(n) || v.b.check(n)) && t !== l.current && (s(t), (l.current = t))
            },
            [t, n],
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
      function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionLike.onError')
        p.a.report(e)
      }
      function N(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          i = void 0 === n ? 'magenta500' : n,
          r = e.color,
          a = e.count,
          s = e.enableActionMenu,
          c = void 0 !== s && s,
          l = e.enableKeyboardShortcuts,
          p = e.iconSize,
          f = e.isDisabled,
          m = e.isFaded,
          v = e.isLiked,
          N = e.isPresentational,
          x = e.likeActionIconContainerRef,
          P = e.likeTransitionAnimation,
          R = e.link,
          L = e.onError,
          D = void 0 === L ? I : L,
          j = e.onLikeActionSelect,
          M = e.onMenuCancel,
          V = e.onPress,
          F = e.style,
          U = e.testIDs,
          B = e.withCount && 'number' == typeof a,
          H = v ? T : k
        B && (H = v ? S({ count: a }) : A({ count: a }))
        var K = O({ isLiked: v, likeTransitionAnimation: P })
        return u.a.createElement(
          _.a,
          o()({}, K, {
            ActiveIcon: w.a,
            Icon: y.a,
            accessibilityLabel: H,
            actionIconContainerRef: x,
            activeColor: i,
            behavioralEventContext: { viewType: 'like', viewState: { type: 'toggleable', toggledTo: !v } },
            color: r,
            count: a,
            enableKeyboardShortcuts: l,
            hoverLabel: { label: v ? C : k },
            iconSize: p,
            isActive: v,
            isDisabled: f,
            isFaded: m,
            isPresentational: N,
            keyboardShortcut: h.a.shortcuts.like,
            link: R,
            onError: D,
            onPress: function () {
              b.b.isFirefox() || g.a.vibrate(5), null == V || V()
            },
            renderMenu: c
              ? function (e) {
                  var n = [
                    {
                      text: E,
                      onClick: function () {
                        e(), null == j || j()
                      },
                      testID: null == U ? void 0 : U.like,
                      Icon: y.a,
                    },
                  ]
                  return u.a.createElement(d.a, {
                    description: t,
                    items: n,
                    onCloseRequested: function () {
                      e(), null == M || M()
                    },
                  })
                }
              : void 0,
            style: F,
            testID: U && (v ? U.unlike : U.like),
            withCount: B,
          }),
        )
      }
    },
    ZGdk: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M18.87 9.538c-.42 0-.75.34-.75.75v7.339l-1.89-1.37V8.618c0-1.16-.94-2.09-2.09-2.09H6.89v-1.06c0-.32.27-.59.59-.59h5.2c.41 0 .75-.34.75-.75 0-.42-.34-.75-.75-.75h-5.2c-1.16 0-2.09.93-2.09 2.09v1.06h-1.3C2.94 6.529 2 7.459 2 8.618v13.627c0 .28.16.54.41.67s.55.11.78-.06l5.93-4.299 5.92 4.299c.13.09.29.14.44.14.12 0 .23-.02.34-.08.25-.13.41-.39.41-.67v-4.139l2.2 1.6c.13.1.28.14.44.14.11 0 .23-.02.34-.08.25-.13.41-.38.41-.67v-8.808c0-.41-.34-.75-.75-.75zm-4.14 11.238l-4.82-3.489-.35-.26c-.14-.1-.29-.14-.44-.14-.16 0-.31.04-.44.14l-3.23 2.34-1.95 1.41V8.618c0-.32.27-.59.59-.59h10.05c.33 0 .59.26.59.59v12.158zM22 4.129c0 .41-.34.75-.75.75h-1.63v1.62c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75v-1.62h-1.64c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h1.64V1.75c0-.41.33-.75.75-.75.41 0 .75.34.75.75v1.63h1.63c.41 0 .75.329.75.749z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    ZQ2e: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
      })
      var i = n('VrFO'),
        o = n.n(i),
        r = n('Y9Ll'),
        a = n.n(r),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('1Pcy'),
        v = n.n(h),
        _ = (n('2G9S'), n('1t7P'), n('jQ/y'), n('t62R')),
        b = n('ir4X'),
        g = n('0PHd'),
        y = n('rHpw'),
        w = n('oSwX'),
        k = n('pBrB'),
        C = n('jV+4'),
        E = n('wCd/'),
        T = n('MWbm'),
        A = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            o()(this, n)
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              p()(v()(e), '_renderKnownFollowerSocialContext', function () {
                var t = e.props,
                  n = t.isAllowedToViewOptions,
                  i = t.isLoggedIn,
                  o = t.knownFollowers,
                  r = t.userScreenName,
                  a = o.avatarUrls,
                  s = o.count,
                  c = o.names
                return n.followersYouKnow && i
                  ? m.a.createElement(
                      T.a,
                      { style: [S.marginTopXSmall, S.minHeight] },
                      'number' == typeof s &&
                        m.a.createElement(g.a, {
                          knownFollowersAvatarUrls: a,
                          knownFollowersCount: s,
                          knownFollowersNames: c,
                          userScreenName: r,
                        }),
                    )
                  : null
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  return m.a.createElement(
                    T.a,
                    { style: S.root },
                    this._renderHeader(),
                    this._renderErrorMessage(),
                    this._renderUserDescription(),
                    this._renderUserStats(),
                    this._renderKnownFollowerSocialContext(),
                  )
                },
              },
              {
                key: '_renderUserAvatar',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.onAvatarClick,
                    i = e.promotedContent,
                    o = e.userAvatarUri,
                    r = e.userScreenName,
                    a = t.avatar
                  return m.a.createElement(
                    T.a,
                    { style: S.row },
                    m.a.createElement(w.default, {
                      onClick: n,
                      promotedContent: i,
                      screenName: r,
                      size: 'jumbo',
                      uri: a ? o : void 0,
                      withLink: !0,
                    }),
                    this._renderFollowerButton(),
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  return this.props.withUserAvatar
                    ? m.a.createElement(
                        m.a.Fragment,
                        null,
                        this._renderUserAvatar(),
                        m.a.createElement(
                          T.a,
                          { style: S.marginTopXXSmall },
                          this._renderUserName(),
                          this._renderHighlightedUserLabel(),
                        ),
                      )
                    : m.a.createElement(T.a, { style: S.row }, this._renderUserName(), this._renderFollowerButton())
                },
              },
              {
                key: '_renderFollowerButton',
                value: function () {
                  var e = this.props,
                    t = e.followButton,
                    n = e.isAllowedToViewOptions,
                    i = e.isLoggedIn
                  return n.followButton && i && t ? t : null
                },
              },
              {
                key: '_renderUserName',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.isUserProtected,
                    i = e.isUserVerified,
                    o = e.onScreenNameClick,
                    r = e.promotedContent,
                    a = e.userName,
                    s = e.userScreenName,
                    c = e.userTranslatorType,
                    l = e.userWithFollowsYou,
                    u = t.badges,
                    d = t.followIndicator,
                    p = t.fullName
                  return m.a.createElement(C.a, {
                    badgeContext: 'account',
                    isProtected: u ? n : void 0,
                    isVerified: u ? i : void 0,
                    name: p ? a : s,
                    onLinkClick: o,
                    promotedContent: r,
                    screenName: s,
                    translatorType: u ? c : void 0,
                    withFollowsYou: d && l,
                    withLink: !0,
                    withStackedLayout: !0,
                  })
                },
              },
              {
                key: '_renderHighlightedUserLabel',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.userHighlightedLabel
                  return t.label && n ? m.a.createElement(b.a, { label: n }) : null
                },
              },
              {
                key: '_renderErrorMessage',
                value: function () {
                  var e = this.props.errorMessage
                  return e
                    ? m.a.createElement(T.a, { style: S.marginTopXXSmall }, m.a.createElement(_.b, null, e))
                    : null
                },
              },
              {
                key: '_renderUserDescription',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.userDescription,
                    i = e.userEntities,
                    o = e.userId,
                    r = e.userWithheldDescription,
                    a = e.userWithheldEntities
                  return t.description && n
                    ? m.a.createElement(
                        T.a,
                        { style: [S.row, S.marginTopXSmall] },
                        m.a.createElement(k.a, {
                          description: n,
                          entities: i,
                          userId: o,
                          withheldDescription: r,
                          withheldEntities: a,
                        }),
                      )
                    : null
                },
              },
              {
                key: '_renderUserStats',
                value: function () {
                  var e = this.props,
                    t = e.isAllowedToViewOptions,
                    n = e.isUserStatsWithLink,
                    i = e.onUserStatsPress,
                    o = e.userFollowersCount,
                    r = e.userFriendsCount,
                    a = e.userScreenName
                  return t.stats
                    ? m.a.createElement(
                        T.a,
                        { style: [S.row, S.marginTopXSmall] },
                        m.a.createElement(E.a, {
                          followersCount: o,
                          friendsCount: r,
                          onPress: i,
                          screenName: a,
                          withLink: n,
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(m.a.PureComponent)
      p()(A, 'defaultProps', { withUserAvatar: !0 })
      var S = y.a.create(function (e) {
          return {
            root: { padding: e.spaces.space16 },
            row: { flexDirection: 'row', justifyContent: 'space-between' },
            marginTopXSmall: { marginTop: e.spaces.space12 },
            marginTopXXSmall: { marginTop: e.spaces.space4 },
            minHeight: { minHeight: e.spaces.space20 },
          }
        }),
        O = n('97Jx'),
        I = n.n(O),
        N = n('m3Bd'),
        x = n.n(N),
        P = [
          'followButton',
          'isUserProtected',
          'isUserVerified',
          'onAvatarClick',
          'onScreenNameClick',
          'promotedContent',
          'userDescription',
          'userId',
          'userName',
          'userScreenName',
        ],
        R = n('3XMw'),
        L = n.n(R).a.ef633577
      var D = (function (e) {
        c()(n, e)
        var t = u()(n)
        function n() {
          return o()(this, n), t.apply(this, arguments)
        }
        return (
          a()(n, [
            {
              key: 'render',
              value: function () {
                return m.a.createElement(A, this.props)
              },
            },
          ]),
          n
        )
      })(m.a.PureComponent)
      p()(D, 'Promoted', function (e) {
        var t = e.followButton,
          n = e.isUserProtected,
          i = e.isUserVerified,
          o = e.onAvatarClick,
          r = e.onScreenNameClick,
          a = e.promotedContent,
          s = e.userDescription,
          c = e.userId,
          l = e.userName,
          u = e.userScreenName,
          d = x()(e, P),
          p = {
            protected: !1,
            isUserStatsWithLink: !1,
            verified: !1,
            profile_image_url_https: '',
            entities: {},
            followers_count: 0,
            friends_count: 0,
            id_str: '',
            followed_by: !1,
          }
        return m.a.createElement(
          A,
          I()({}, d, {
            followButton: t,
            isAllowedToViewOptions: {
              avatar: !1,
              badges: !0,
              description: !0,
              followButton: !0,
              followIndicator: !0,
              followersYouKnow: !1,
              fullName: !0,
              label: !0,
              stats: !1,
            },
            isLoggedIn: !0,
            isUserProtected: n,
            isUserStatsWithLink: p.isUserStatsWithLink,
            isUserVerified: i,
            knownFollowers: { avatarUrls: [], names: [] },
            onAvatarClick: o,
            onScreenNameClick: r,
            promotedContent: a,
            userAvatarUri: p.profile_image_url_https,
            userDescription: s,
            userEntities: p.entities,
            userFollowersCount: p.followers_count,
            userFriendsCount: p.friends_count,
            userId: c,
            userName: l,
            userScreenName: u,
            userWithFollowsYou: p.followed_by,
            userWithheldDescription: void 0,
            userWithheldEntities: void 0,
            withUserAvatar: !1,
          }),
        )
      }),
        p()(D, 'Suspended', function (e) {
          var t = e.onAvatarClick,
            n = e.onScreenNameClick,
            i = e.userScreenName,
            o = {
              protected: !1,
              isUserStatsWithLink: !1,
              verified: !1,
              profile_image_url_https: '',
              description: '',
              entities: {},
              followers_count: 0,
              friends_count: 0,
              id_str: '',
              followed_by: !1,
            }
          return m.a.createElement(A, {
            errorMessage: L,
            isAllowedToViewOptions: {
              avatar: !1,
              badges: !0,
              description: !1,
              followButton: !1,
              followIndicator: !0,
              followersYouKnow: !1,
              fullName: !1,
              label: !1,
              stats: !1,
            },
            isLoggedIn: !1,
            isUserProtected: o.protected,
            isUserStatsWithLink: o.isUserStatsWithLink,
            isUserVerified: o.verified,
            knownFollowers: { avatarUrls: [], names: [] },
            onAvatarClick: t,
            onScreenNameClick: n,
            userAvatarUri: o.profile_image_url_https,
            userDescription: o.description,
            userEntities: o.entities,
            userFollowersCount: o.followers_count,
            userFriendsCount: o.friends_count,
            userId: o.id_str,
            userName: i,
            userScreenName: i,
            userWithFollowsYou: o.followed_by,
            userWithheldDescription: void 0,
            userWithheldEntities: void 0,
          })
        })
    },
    bwko: function (e, t) {
      e.exports = function (e, t, n, i) {
        function o(e, t, n, i) {
          return e < 20 ? (t & n) | (~t & i) : e < 40 ? t ^ n ^ i : e < 60 ? (t & n) | (t & i) | (n & i) : t ^ n ^ i
        }
        function r(e) {
          return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
        }
        function a(e, t) {
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
            for (var f = i, m = c, h = l, v = u, _ = d, b = 0; b < 80; b++) {
              n[b] = b < 16 ? e[p + b] : s(n[b - 3] ^ n[b - 8] ^ n[b - 14] ^ n[b - 16], 1)
              var g = a(a(s(i, 5), o(b, c, l, u)), a(a(d, n[b]), r(b)))
              ;(d = u), (u = l), (l = s(c, 30)), (c = i), (i = g)
            }
            ;(i = a(i, f)), (c = a(c, m)), (l = a(l, h)), (u = a(u, v)), (d = a(d, _))
          }
          return [i, c, l, u, d]
        }
        function l(e) {
          for (var t = [], n = (1 << i) - 1, o = 0; o < e.length * i; o += i)
            t[o >> 5] |= (e.charCodeAt(o / 8) & n) << (32 - i - (o % 32))
          return t
        }
        return (
          n || (n = '='),
          i || (i = 8),
          (function (e, t) {
            return (function (e) {
              for (var t = '', i = 0; i < 4 * e.length; i += 3)
                for (
                  var o =
                      (((e[i >> 2] >> (8 * (3 - (i % 4)))) & 255) << 16) |
                      (((e[(i + 1) >> 2] >> (8 * (3 - ((i + 1) % 4)))) & 255) << 8) |
                      ((e[(i + 2) >> 2] >> (8 * (3 - ((i + 2) % 4)))) & 255),
                    r = 0;
                  r < 4;
                  r++
                )
                  8 * i + 6 * r > 32 * e.length
                    ? (t += n)
                    : (t += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                        (o >> (6 * (3 - r))) & 63,
                      ))
              return t
            })(
              (function (e, t) {
                var n = l(e)
                n.length > 16 && (n = c(n, e.length * i))
                for (var o = [16], r = [16], a = 0; a < 16; a++) (o[a] = 909522486 ^ n[a]), (r[a] = 1549556828 ^ n[a])
                var s = c(o.concat(l(t)), 512 + t.length * i)
                return c(r.concat(s), 672)
              })(e, t),
            )
          })(e, t)
        )
      }
    },
    dFWS: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
        return L
      })
      var i,
        o,
        r = n('ERkP'),
        a = n.n(r),
        s = n('38/B'),
        c = n('q1bs'),
        l = n('Eqye'),
        u = n('uCrx'),
        d = n('yiKp'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = n.p + 'cheer.6249ab45.png',
        v = n.p + 'haha.c0b42cb5.png',
        _ = n.p + 'hmm.bc35b1e5.png',
        b = n('3rX5'),
        g = n.p + 'like.7a3e9685.png',
        y = n('kSIJ'),
        w = n('mJtw'),
        k = n.p + 'sad.f12709e5.png',
        C = n('rHpw'),
        E = n('MWbm'),
        T =
          ((i = {}),
          m()(i, w.a.Like, g),
          m()(i, w.a.Haha, v),
          m()(i, w.a.Hmm, _),
          m()(i, w.a.Sad, k),
          m()(i, w.a.Cheer, h),
          i),
        A = C.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: p()({}, C.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        S = function (e) {
          var t = e.reactionType
          return a.a.createElement(
            E.a,
            { style: A.fillContainer },
            a.a.createElement(b.a, { accessibilityLabel: y.a[t], source: T[t], style: A.reactionSelectedIcon }),
            a.a.createElement(E.a, { style: [A.reactionSelectedIcon, A.imageCover] }),
          )
        },
        O = n('DQLs'),
        I =
          ((o = {}),
          m()(o, w.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          m()(o, w.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          m()(o, w.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          m()(o, w.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          m()(o, w.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          o),
        N = function (e) {
          var t = e.reactionType,
            n = c.b.get(I[t])
          return (
            (n && 'boolean' != typeof n) || (n = I[t]), a.a.createElement(O.a, { animation: n, autoplay: !0, loop: !0 })
          )
        },
        x = function () {
          var e = window.navigator.deviceMemory
          return s.a.reducedMotionEnabled || l.a.isEnabled || (e && e < 4)
        },
        P = function (e) {
          var t = e.legacyHeart,
            n = e.reactionType,
            i = e.style,
            o = e.withAnimation,
            r = void 0 !== o && o,
            s = !x() && r ? N : S
          return t && n === w.a.Like
            ? a.a.createElement(E.a, { style: [R.root, R.legacyHeart, i] }, a.a.createElement(u.a, { style: R.root }))
            : a.a.createElement(E.a, { style: [R.root, i] }, a.a.createElement(s, { reactionType: n }))
        },
        R = C.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        L = function () {
          a.a.useEffect(function () {
            x() || (c.b.check(I.Hmm), c.b.check(I.Sad), c.b.check(I.Haha), c.b.check(I.Cheer), c.b.check(I.Like))
          }, [])
        }
      t.a = a.a.memo(P)
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      var i = n('VrFO'),
        o = n.n(i),
        r = n('Y9Ll'),
        a = n.n(r),
        s = n('5Yy7'),
        c = n.n(s),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        p = n.n(d),
        f = n('ERkP'),
        m = n.n(f),
        h = n('t62R'),
        v = n('3XMw'),
        _ = n.n(v),
        b = n('rHpw'),
        g = n('MWbm'),
        y = n('yiKp'),
        w = n.n(y),
        k = n('Lsrn'),
        C = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [k.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var T = E,
        A = n('uFYP'),
        S = _.a.f1a1b790,
        O = _.a.if2bf8b3,
        I = _.a.f3624b5c,
        N = _.a.b4b3b113,
        x = _.a.be22205f,
        P = _.a.hcbbe447,
        R = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    i = e.style,
                    o = e.withCircleIcon ? T : A.a
                  return m.a.createElement(
                    g.a,
                    { style: [L.root, i] },
                    m.a.createElement(o, { style: [L.icon, t && L[t]] }),
                    m.a.createElement(h.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    i = e.promotedContent,
                    o = i.adMetadataContainer,
                    r = i.advertiser,
                    a = i.advertiser_name,
                    s = i.disclosure_type,
                    c = t && r && t === r.id_str,
                    l = 'string' == typeof s && 'political' === s.toLowerCase(),
                    u = 'string' == typeof s && 'issue' === s.toLowerCase(),
                    d = !(!o || 'POLITICAL' !== o.disclaimerType) || l,
                    p = !(!o || 'ISSUE' !== o.disclaimerType) || u,
                    f = (o || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!a || c || f
                      ? d
                        ? I
                        : p
                        ? x
                        : O
                      : d
                      ? N({ fullName: a })
                      : p
                      ? P({ fullName: a })
                      : S({ fullName: a }))
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      p()(R, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var L = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    e6X4: function (e, t, n) {
      'use strict'
      ;(function (e) {
        var i,
          o = n('YRNd'),
          r = n('XJEr'),
          a = n('7zxR')
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e
            })(e, t)
        }
        var c = (function (t) {
          var n, o
          function c(e) {
            var n, o, s, c, l, u
            return (
              ((u = t.call(this) || this)._toValue = e.toValue),
              (u._easing = null !== (n = e.easing) && void 0 !== n ? n : (i || (i = a.a.inOut(a.a.ease)), i)),
              (u._duration = null !== (o = e.duration) && void 0 !== o ? o : 500),
              (u._delay = null !== (s = e.delay) && void 0 !== s ? s : 0),
              (u.__iterations = null !== (c = e.iterations) && void 0 !== c ? c : 1),
              (u._useNativeDriver = Object(r.c)(e)),
              (u.__isInteraction = null !== (l = e.isInteraction) && void 0 !== l ? l : !u._useNativeDriver),
              u
            )
          }
          ;(o = t), ((n = c).prototype = Object.create(o.prototype)), (n.prototype.constructor = n), s(n, o)
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
            (l.start = function (e, t, n, i, o) {
              var r = this
              ;(this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n)
              var a = function () {
                0 !== r._duration || r._useNativeDriver
                  ? ((r._startTime = Date.now()),
                    r._useNativeDriver
                      ? r.__startNativeAnimation(o)
                      : (r._animationFrame = requestAnimationFrame(r.onUpdate.bind(r))))
                  : (r._onUpdate(r._toValue), r.__debouncedOnEnd({ finished: !0 }))
              }
              this._delay ? (this._timeout = setTimeout(a, this._delay)) : a()
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
        })(o.a)
        t.a = c
      }.call(this, n('fRV1')))
    },
    feOz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ft
      })
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ddV6'),
        a = n.n(r),
        s = (n('KOtZ'), n('7x/C'), n('LW0h'), n('97Jx')),
        c = n.n(s),
        l = n('m3Bd'),
        u = n.n(l),
        d = n('ERkP'),
        p = n.n(d),
        f = n('+Tpo'),
        m = n('T0aG'),
        h = n.n(m),
        v = (n('849X'), n('TJCb'), n('PxJJ')),
        _ = n('3XMw'),
        b = n.n(_),
        g = n('wD1h'),
        y = n('wwsH'),
        w = n('aITJ'),
        k = n('KDev'),
        C = n('VrFO'),
        E = n.n(C),
        T = n('Y9Ll'),
        A = n.n(T),
        S = n('n70c'),
        O = n.n(S),
        I = n('AuHH'),
        N = n.n(I),
        x = n('5Yy7'),
        P = n.n(x),
        R = n('2VqO'),
        L = n.n(R),
        D = n('q1bs'),
        j = 'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
        M = new ((function (e) {
          P()(n, e)
          var t = L()(n)
          function n() {
            return E()(this, n), t.apply(this, arguments)
          }
          return (
            A()(n, [
              {
                key: 'check',
                value: function (e) {
                  return O()(N()(n.prototype), 'check', this).call(this, null != e ? e : j)
                },
              },
            ]),
            n
          )
        })(D.a))(),
        V = n('Lsrn'),
        F = n('k/Ka'),
        U = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(F.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [V.a.root, e.style],
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
      var B = U,
        H = n('IqLm'),
        K = b.a.d2b2b8e5,
        z = b.a.hcb3286f,
        W = b.a.cb5dafd3
      function q() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionDownvote.onError')
        v.a.report(e)
      }
      var X = n('Z8+W'),
        Q = n('KEM+'),
        J = n.n(Q),
        G = n('CHgo'),
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
          var o = e || 20
          return n
            .filter(function (e) {
              return e.count >= i * (o / 100)
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
        oe = function (e) {
          var t = e.experimentalFruitBasketThreshold,
            n = e.legacyHeart,
            i = e.reacted,
            o = e.reactionCounts,
            r = e.size,
            a = void 0 === r ? 'normal' : r,
            s = e.style,
            c = ne(t, i, o)
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
                          { key: e.type, style: y.b[a] },
                          p.a.createElement(Y.a, { legacyHeart: n, reactionType: e.type, withAnimation: !1 }),
                        )
                      }),
                    )
                  : null
              })
        },
        re = n('cm6r'),
        ae = n('tn7R'),
        se = n('3dyc'),
        ce = n('OiMc'),
        le = n('38/B'),
        ue = n('kSIJ'),
        de = n('WrBE'),
        pe = ee.a.theme.spacesPx.space40,
        fe = { growing: 'growing', grown: 'grown', shrinking: 'shrinking', shrunk: 'shrunk' },
        me = function (e, t) {
          var n = p.a.useRef(new de.a.Value(e)).current,
            i = p.a.useState(fe.shrunk),
            o = a()(i, 2),
            r = o[0],
            s = o[1],
            c = p.a.useCallback(
              function (e) {
                s(fe.growing),
                  de.a.timing(n, { duration: 200, toValue: t, useNativeDriver: !1 }).start(function (t) {
                    t.finished && s(fe.grown), e && e(t)
                  })
              },
              [n, t],
            ),
            l = p.a.useCallback(
              function (t) {
                s(fe.shrinking),
                  de.a.timing(n, { duration: 200, toValue: e, useNativeDriver: !1 }).start(function (e) {
                    e.finished && s(fe.shrunk), t && t(e)
                  })
              },
              [n, e],
            )
          return { animationState: r, currentHeight: n, startAnimation: c, resetAnimation: l }
        },
        he = function (e) {
          return Object(F.a)('div', e)
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
            activeBackground: o()(
              o()({}, ee.a.absoluteFillObject),
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
            o = e.onSelect,
            r = e.reacted,
            s = e.reactionType,
            c = e.withAnimation,
            l = void 0 === c || c,
            u = p.a.useState(!1),
            d = a()(u, 2),
            f = d[0],
            m = d[1],
            h = me(pe, 1.5 * pe),
            v = h.animationState,
            _ = h.currentHeight,
            b = h.resetAnimation,
            g = h.startAnimation
          p.a.useEffect(
            function () {
              if (!le.a.reducedMotionEnabled) {
                var e = n || f,
                  t = v === fe.shrinking || v === fe.shrunk,
                  i = v === fe.growing || v === fe.grown
                e && t ? g() : !e && i && b()
              }
            },
            [n, f, g, b, v],
          )
          var y = function () {
              m(!0)
            },
            w = function () {
              m(!1)
            },
            k = n || f
          return p.a.createElement(
            te.a,
            { style: ve.container },
            p.a.createElement(
              de.a.View,
              { style: { height: _, width: _ } },
              p.a.createElement(
                re.a,
                {
                  accessibilityLabel: ue.a[s],
                  accessibilityRole: 'button',
                  hoverLabel:
                    v === fe.grown || le.a.reducedMotionEnabled
                      ? { label: ue.a[s], preferredVerticalOrientation: 'up', withDelay: !1, withExtraSpace: !0 }
                      : void 0,
                  interactiveStyles: null,
                  onFocusRingGained: y,
                  onFocusRingLost: w,
                  onHoverIn: y,
                  onHoverOut: w,
                  onPress: o,
                  style: ve.fullHeight,
                },
                p.a.createElement(Y.a, { legacyHeart: i, reactionType: s, withAnimation: l }),
                r && !k && p.a.createElement(te.a, { style: ve.activeBackground }),
              ),
            ),
            t && p.a.createElement(he, { 'data-reaction-type': s, style: ve.largeTouchArea }),
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
            o = e.legacyHeart,
            r = e.onSelection,
            a = e.reacted,
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
                legacyHeart: o,
                onSelect:
                  ((s = e),
                  function () {
                    r(s, 'picker-tap'), t()
                  }),
                reacted: a === e,
                reactionType: e,
                withAnimation: l,
              })
              var s
            }),
          )
        },
        ye = n('iEUn'),
        we = n('DlVf'),
        ke = n('FG+G'),
        Ce = n('uCrx'),
        Ee = Object(ae.a)(Z.a),
        Te = Z.a.Like,
        Ae = b.a.e3469988,
        Se = b.a.c46f0fce,
        Oe = b.a.ga9c2b52,
        Ie = b.a.hb755a53,
        Ne = b.a.cff26b89,
        xe = 'data-reaction-type',
        Pe = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Cheer, style: t, withAnimation: !1 })
        },
        Re = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Haha, style: t, withAnimation: !1 })
        },
        Le = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Hmm, style: t, withAnimation: !1 })
        },
        De = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Like, style: t, withAnimation: !1 })
        },
        je = function (e) {
          var t = e.style
          return p.a.createElement(Y.a, { reactionType: Z.a.Sad, style: t, withAnimation: !1 })
        },
        Me = ee.a.create(function (e) {
          return {
            root: { justifyContent: 'center', userSelect: 'none' },
            popoverContainer: { minWidth: 0, overflow: 'visible' },
            buttonContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            fruitBasketSpacing: { marginLeft: e.spaces.space8 },
            caretWithoutCount: { marginLeft: e.spaces.space12 },
          }
        }),
        Ve = function (e) {
          var t,
            n = e.activeColor,
            i = void 0 === n ? 'magenta500' : n,
            o = e.color,
            r = e.enableKeyboardShortcuts,
            s = e.experimentalFruitBasketThreshold,
            l = e.iconSize,
            u = e.isDisabled,
            d = e.isFaded,
            f = e.isPresentational,
            m = e.legacyHeart,
            h = e.onPopoverDismiss,
            v = e.onPopoverOpen,
            _ = e.onReactionSelect,
            b = e.reacted,
            w = e.reactionCounts,
            k = void 0 === w ? [] : w,
            C = e.style,
            E = e.tweetActionsRef,
            T = e.testIDs,
            A = e.withAnimation,
            S = void 0 === A || A,
            O = e.withCount,
            I = void 0 !== O && O,
            N = e.withFruitBasket,
            x = void 0 !== N && N,
            P = p.a.useState(null),
            R = a()(P, 2),
            L = R[0],
            D = R[1],
            j = p.a.useState(!1),
            M = a()(j, 2),
            V = M[0],
            F = M[1],
            U = p.a.useState(!1),
            B = a()(U, 2),
            H = B[0],
            K = B[1],
            z = p.a.useRef(null),
            W = p.a.useRef()
          Object(Y.b)()
          var q = Object(X.b)({ isLiked: b === Z.a.Like && !!m }),
            Q = k.reduce(function (e, t) {
              return e + t.count
            }, 0),
            $ = b ? Se : Ae
          I && ($ = b ? Ne({ count: Q }) : Ie({ count: Q }))
          var ne =
              ((t = {}),
              J()(t, g.a.shortcuts.like, function (e) {
                he(!0)
              }),
              J()(t, g.a.shortcuts.reactUndo, function (e) {
                return _()
              }),
              J()(t, g.a.shortcuts.reactHmm, function (e) {
                return _(Z.a.Hmm, 'keyboard-shortcut')
              }),
              J()(t, g.a.shortcuts.reactSad, function (e) {
                return _(Z.a.Sad, 'keyboard-shortcut')
              }),
              J()(t, g.a.shortcuts.reactHaha, function (e) {
                return _(Z.a.Haha, 'keyboard-shortcut')
              }),
              J()(t, g.a.shortcuts.reactCheer, function (e) {
                return _(Z.a.Cheer, 'keyboard-shortcut')
              }),
              J()(t, g.a.shortcuts.reactLike, function (e) {
                return _(Z.a.Like, 'keyboard-shortcut')
              }),
              t),
            ie = function (e) {
              K(e === se.a.longPress), null == v || v(e)
            },
            ae = function () {
              F(!0)
            },
            le = p.a.useCallback(function (e) {
              var t,
                n = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
                i =
                  null == n || null === (t = n.closest('['.concat(xe, ']'))) || void 0 === t
                    ? void 0
                    : t.getAttribute(xe)
              D(i ? Z.a[i] : null), e.preventDefault()
            }, [])
          p.a.useEffect(
            function () {
              if (z.current) {
                var e = Object(G.a)(z.current, le, !1)
                return function () {
                  e && e()
                }
              }
            },
            [le],
          )
          var ue = function (e) {
              return function () {
                F(!1), L && (_(L, 'picker-touchend'), D(null), e())
              }
            },
            de = function (e) {
              return p.a.createElement(ge, {
                dismissReactionPicker: e,
                enableTouch: V,
                forceHovered: L,
                legacyHeart: m,
                onSelection: _,
                reacted: b,
                reactionOptions: Ee,
                withAnimation: S,
              })
            },
            pe = function (e) {
              return function (t) {
                e(), t.stopPropagation()
              }
            },
            fe = function () {
              switch (b) {
                case Z.a.Cheer:
                  return Pe
                case Z.a.Haha:
                  return Re
                case Z.a.Hmm:
                  return Le
                case Z.a.Like:
                  return m ? Ce.a : De
                case Z.a.Sad:
                  return je
                default:
                  return De
              }
            },
            me = function (e) {
              return function (t) {
                e(), he('keydown' === t.type)
              }
            },
            he = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              b ? _() : _(Te, e ? 'keyboard-shortcut' : 'button-tap')
            },
            ve = function () {
              return x
                ? 0 === Q || (1 === Q && b)
                  ? null
                  : p.a.createElement(oe, {
                      experimentalFruitBasketThreshold: s,
                      legacyHeart: m,
                      reacted: b,
                      reactionCounts: k,
                      size: l,
                      style: Me.fruitBasketSpacing,
                    })
                : null
            }
          return p.a.createElement(
            te.a,
            { style: [Me.root, C] },
            p.a.createElement(
              g.a,
              { enabled: !!r, handlers: ne },
              p.a.createElement(
                ce.a,
                {
                  anchorRef: H ? E : W,
                  animationDuration: 'normal',
                  animationType: 'slide',
                  contentStyle: Me.popoverContainer,
                  disabled: u || d,
                  enableHover: !0,
                  enableLongPress: !0,
                  hoverDelay: 'short',
                  onDismiss: h,
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
                    re.a,
                    {
                      focusable: !1,
                      interactiveStyles: null,
                      onTouchEnd: ue(t),
                      onTouchStart: ae,
                      ref: z,
                      style: Me.buttonContainer,
                    },
                    function (e) {
                      var r = e.isFocusedWithin
                      return p.a.createElement(
                        p.a.Fragment,
                        null,
                        p.a.createElement(
                          y.a,
                          c()({}, q, {
                            ActiveIcon: fe(),
                            Icon: m ? ye.a : we.a,
                            accessibilityLabel: $,
                            actionIconContainerRef: W,
                            activeColor: i,
                            color: o,
                            count: Q,
                            decoration: ve(),
                            enableKeyboardShortcuts: !1,
                            hoverLabel: { label: Ae },
                            iconSize: l,
                            isActive: !!b,
                            isDisabled: u,
                            isFaded: d,
                            isPresentational: f,
                            onPress: me(t),
                            showBackgroundWhenActive: !0,
                            testID: T && (b ? T.unreact : T.react),
                            withCount: I,
                          }),
                        ),
                        p.a.createElement(y.a, {
                          Icon: ke.a,
                          accessibilityLabel: Oe,
                          activeColor: i,
                          color: o,
                          hoverLabel: { label: Oe },
                          iconSize: l,
                          isDisabled: u,
                          isFaded: d,
                          isPresentational: f,
                          onPress: pe(n),
                          style: [!r && ee.a.visuallyHidden, !I && Me.caretWithoutCount],
                        }),
                      )
                    },
                  )
                },
              ),
            ),
          )
        },
        Fe = n('HSMM'),
        Ue = n('Wk1j'),
        Be = n('G41x'),
        He = ['isFromProtectedAccount'],
        Ke = f.a,
        ze = function (e) {
          var t = e.activeColor,
            n = void 0 === t ? 'orange500' : t,
            i = e.color,
            o = e.count,
            r = e.enableKeyboardShortcuts,
            s = e.iconSize,
            l = e.isDisabled,
            u = e.isFaded,
            d = e.isDownvoted,
            f = e.isPresentational,
            m = e.downvoteTransitionAnimation,
            v = void 0 === m ? j : m,
            _ = e.onError,
            b = void 0 === _ ? q : _,
            C = e.onPress,
            E = e.style,
            T = e.testIDs,
            A = e.withCount && 'number' == typeof o,
            S = d ? W : K,
            O = (function (e) {
              var t = e.downvoteTransitionAnimation,
                n = e.isDownvoted,
                i = p.a.useState(!1),
                o = a()(i, 2),
                r = o[0],
                s = o[1],
                c = p.a.useRef(n)
              return (
                p.a.useEffect(
                  function () {
                    ;('object' === h()(t) || M.check(t)) && n !== c.current && (s(n), (c.current = n))
                  },
                  [n, t],
                ),
                {
                  onAnimationEnd: function () {
                    return s(!1)
                  },
                  showAnimation: r,
                  transitionAnimationUrl: t,
                }
              )
            })({ isDownvoted: d, downvoteTransitionAnimation: v })
          return p.a.createElement(
            y.a,
            c()({}, O, {
              ActiveIcon: B,
              Icon: H.a,
              accessibilityLabel: S,
              activeColor: n,
              behavioralEventContext: { viewType: 'downvote', viewState: { type: 'toggleable', toggledTo: !d } },
              color: i,
              count: o,
              enableKeyboardShortcuts: r,
              hoverLabel: { label: d ? z : K },
              iconSize: s,
              isActive: d,
              isDisabled: l,
              isFaded: u,
              isPresentational: f,
              keyboardShortcut: g.a.shortcuts.downvote,
              onError: b,
              onPress: function () {
                w.b.isFirefox() || k.a.vibrate(5), null == C || C()
              },
              style: E,
              testID: T && (d ? T.undownvote : T.downvote),
              withCount: A,
            }),
          )
        },
        We = X.a,
        qe = Ve,
        Xe = Fe.a,
        Qe = Be.a
      var Je = n('Xrkv'),
        Ge = n('fs1G'),
        Ye = n('Q+qU'),
        Ze = n('3MlI'),
        $e = n('0ig/'),
        et = b.a.a0af935b,
        tt = b.a.fbaa28ef,
        nt = b.a.f9be84f0,
        it = b.a.g23ce6f0,
        ot = b.a.b75196a4,
        rt = function (e) {
          return p.a.createElement(ft.ActionAnalytics, e)
        },
        at = function (e) {
          return p.a.createElement(ft.ActionDownvote, e)
        },
        st = function (e) {
          return p.a.createElement(ft.ActionLike, e)
        },
        ct = function (e) {
          return p.a.createElement(ft.ActionReaction, e)
        },
        lt = function (e) {
          return p.a.createElement(ft.ActionReply, e)
        },
        ut = function (e) {
          return p.a.createElement(ft.ActionRetweet, e)
        },
        dt = function (e) {
          return p.a.createElement(ft.ActionShare, e)
        },
        pt = []
      function ft(e) {
        var t = e.actionSize,
          n = void 0 === t ? 'normal' : t,
          i = e.activeColor,
          r = void 0 === i ? void 0 : i,
          s = e.color,
          c = void 0 === s ? 'gray700' : s,
          l = e.displayStyle,
          u = e.downvoteCount,
          d = e.enableKeyboardShortcuts,
          f = void 0 === d || d,
          m = e.isDisabled,
          h = void 0 !== m && m,
          v = e.isDownvoted,
          _ = void 0 !== v && v,
          g = e.isFromProtectedAccount,
          y = e.isLiked,
          w = e.isRetweeted,
          k = e.isPresentational,
          C = e.likeCount,
          E = e.nativeID,
          T = e.reaction,
          A = e.reactionCounts,
          S = e.renderAnalyticsAction,
          O = void 0 === S ? rt : S,
          I = e.renderDownvoteAction,
          N = void 0 === I ? at : I,
          x = e.renderLikeAction,
          P = void 0 === x ? st : x,
          R = e.renderReactionAction,
          L = void 0 === R ? ct : R,
          D = e.renderReplyAction,
          j = void 0 === D ? lt : D,
          M = e.renderRetweetAction,
          V = void 0 === M ? ut : M,
          F = e.renderShareAction,
          U = void 0 === F ? dt : F,
          B = e.replyCount,
          H = e.retweetCount,
          K = e.showDownvoteBeforeLike,
          z = void 0 !== K && K,
          W = e.style,
          q = e.tweetLink,
          X = e.withAnalytics,
          Q = void 0 !== X && X,
          J = e.withDownvote,
          G = void 0 !== J && J,
          Y = e.withCount,
          Z = void 0 !== Y && Y,
          $ = e.withReaction,
          ee = void 0 !== $ && $,
          ne = p.a.useState(!1),
          ie = a()(ne, 2),
          oe = ie[0],
          re = ie[1],
          ae = p.a.useRef(null),
          ce = Object($e.a)(),
          le = Q && ce.width >= Ze.a,
          ue =
            null == A
              ? void 0
              : A.reduce(function (e, t) {
                  return e + t.count
                }, 0),
          de = p.a.useMemo(
            function () {
              if (Z) {
                var e = b.a.b03835c7,
                  t = b.a.hb7b0cea,
                  n = b.a.e089b42d,
                  i = b.a.d8320937
                return Object(Je.a)(
                  [
                    B ? e({ replyCount: B }) : null,
                    H ? t({ retweetCount: H }) : null,
                    w ? it : null,
                    C && !ee ? n({ likeCount: C }) : null,
                    y && !ee ? et : null,
                    ue && ee ? i({ reactionCount: ue }) : null,
                    T && ee ? tt : null,
                    _ && G ? nt : null,
                  ].filter(Boolean),
                  !0,
                )
              }
            },
            [_, y, w, C, ue, T, B, H, Z, G, ee],
          ),
          pe = { color: c, iconSize: n, isDisabled: h },
          fe = function () {
            return N(
              o()(
                o()({}, pe),
                {},
                {
                  activeColor: r,
                  count: u,
                  enableKeyboardShortcuts: f,
                  isDownvoted: _,
                  isPresentational: k,
                  withCount: Z,
                },
              ),
            )
          }
        return p.a.createElement(
          te.a,
          { ref: ae },
          p.a.createElement(
            Ze.b,
            { accessibilityLabel: de, displayStyle: l, nativeID: E, style: [W, oe && mt.hidden] },
            j(
              o()(
                o()({}, pe),
                {},
                { activeColor: r, count: B, enableKeyboardShortcuts: f, isPresentational: k, withCount: Z },
              ),
            ),
            V(
              o()(
                o()({}, pe),
                {},
                {
                  activeColor: r,
                  count: H,
                  enableKeyboardShortcuts: f,
                  isFromProtectedAccount: g,
                  isRetweeted: w,
                  isPresentational: k,
                  withCount: Z,
                },
              ),
            ),
            G && z ? fe() : null,
            ee
              ? L(
                  o()(
                    o()({}, pe),
                    {},
                    {
                      activeColor: r,
                      enableKeyboardShortcuts: f,
                      isPresentational: k,
                      onPopoverDismiss: function () {
                        return re(!1)
                      },
                      onPopoverOpen: function (e) {
                        re(e === se.a.longPress)
                      },
                      onReactionSelect: Ge.a,
                      reacted: T,
                      reactionCounts: A,
                      tweetActionsRef: ae,
                      withCount: Z,
                    },
                  ),
                )
              : P(
                  o()(
                    o()({}, pe),
                    {},
                    {
                      activeColor: r,
                      count: C,
                      enableKeyboardShortcuts: f,
                      isLiked: y,
                      isPresentational: k,
                      withCount: Z,
                    },
                  ),
                ),
            G && !z ? fe() : null,
            U(
              o()(
                o()({}, pe),
                {},
                {
                  actionItems: pt,
                  activeColor: r,
                  enableKeyboardShortcuts: f,
                  isPresentational: k,
                  withCount: Z && le,
                },
              ),
            ),
            le ? O(o()(o()({}, pe), {}, { isPresentational: k, tweetLink: q })) : null,
          ),
          oe ? p.a.createElement(te.a, { style: mt.swipeInfoBar }, p.a.createElement(Ye.a, { color: c }, ot)) : null,
        )
      }
      ;(ft.ActionAnalytics = Ke),
        (ft.ActionDownvote = ze),
        (ft.ActionLike = We),
        (ft.ActionReaction = qe),
        (ft.ActionReply = Xe),
        (ft.ActionRetweet = function (e) {
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
        (ft.ActionShare = Qe)
      var mt = ee.a.create(function (e) {
        return {
          swipeInfoBar: o()(
            o()({}, ee.a.absoluteFillObject),
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
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M14.893 22.5H4.213c-.69 0-1.3-.29-1.72-.82-.44-.56-.6-1.32-.42-2.05.87-3.68 4.25-5.82 8.23-5.82.47 0 .93.03 1.38.09-.11.08-.21.17-.31.26-1.31 1.23-1.37 3.29-.14 4.6l3.06 3.24c.18.19.38.36.6.5zm-4.59-10.42c-1.34 0-2.85-.15-3.81-1.25-.8-.92-1.06-2.35-.79-4.35.37-2.81 2.1-4.48 4.6-4.48 2.51 0 4.23 1.67 4.61 4.48.27 2.01.01 3.43-.8 4.36-.96 1.09-2.46 1.24-3.81 1.24z',
              }),
              a.a.createElement('path', {
                d: 'M21.893 11.8l-4.22 8.51c-.06.12-.14.23-.24.32-.04.04-.09.08-.14.11-.03.02-.05.04-.08.05-.11.07-.23.11-.35.13-.06.01-.13.02-.2.02-.08 0-.17-.01-.25-.03-.08-.02-.16-.05-.23-.08-.06-.03-.11-.06-.16-.09-.06-.05-.12-.1-.18-.16l-.07-.07-3.02-3.2c-.43-.45-.4-1.18.05-1.6.45-.43 1.17-.41 1.6.04l1.97 2.09 3.49-7.04c.28-.56.96-.8 1.52-.51.55.27.78.96.51 1.51z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    iGRG: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.ja03b44d,
        u = c.a.da5c438f,
        d = c.a.f03dab29,
        p =
          ((i = { defaultToast: { text: l } }),
          r()(i, a.a.BlockedUserError, { toast: { text: d } }),
          r()(i, a.a.ProtectedStatusFavoriteError, { toast: { text: u } }),
          r()(i, 'showToast', !0),
          i)
    },
    jL08: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return E
      }),
        n.d(t, 'c', function () {
          return T
        }),
        n.d(t, 'a', function () {
          return A
        }),
        n.d(t, 'd', function () {
          return S
        }),
        n.d(t, 'e', function () {
          return O
        })
      var i = n('KEM+'),
        o = n.n(i),
        r = n('ddV6'),
        a = n.n(r),
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
        f = n('bwko'),
        m = n.n(f),
        h = n('Ssj5'),
        v = 'articles',
        _ = 'rweb.articlesVisited',
        b = 'rweb.articleDomains',
        g = 'rweb/articles/ADD_DOMAINS',
        y = 'rweb/articles/ADD_VISITED_ARTICLES',
        w = function (e) {
          return { payload: e, type: g }
        },
        k = function (e) {
          return { payload: e, type: y }
        },
        C = Object.freeze({ domains: void 0, articles: new Set() })
      var E = function (e) {
          return e.articles.domains
        },
        T = function (e, t) {
          var n = E(e)
          return A(n, t)
        },
        A = function (e, t) {
          return !!e && !!t && e.includes((t || '').replace('www.', ''))
        },
        S = function (e, t, n) {
          var i = !!n && T(e, n)
          if (t && i) {
            var o =
                (function (e) {
                  return e.articles.articles
                })(e) || new Set(),
              r = m()('', t)
            return o.has(r)
          }
          return !1
        },
        O = function (e) {
          return function (t, n, i) {
            var o = i.userPersistence,
              r = m()('', e)
            return t(k([r])), I(r, o)
          }
        },
        I = function (e, t) {
          return t.get(_).then(function (n) {
            var i = (null == n ? void 0 : n.articles) || new Set()
            i.add(e)
            var o = (null == n ? void 0 : n.lastSeenMap) || {},
              r = Date.now()
            o[e] = r
            for (var s = 0, c = Object.entries(o); s < c.length; s++) {
              var l = a()(c[s], 2),
                u = l[0],
                d = l[1]
              r - Number(d) > 6048e5 && (i.delete(u), delete o[u])
            }
            return t.set(_, { articles: i, lastSeenMap: o })
          })
        }
      h.a.register(
        o()({}, v, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case g:
              return u()(u()({}, e), {}, { domains: t.payload })
            case y:
              return t.payload instanceof Array
                ? u()(u()({}, e), {}, { articles: Object(p.a)([].concat(c()(e.articles), c()(t.payload))) })
                : e
            default:
              return e
          }
        }),
        function () {
          return function (e, t, n) {
            return d.n(t())
              ? Promise.all([
                  n.devicePersistence.get(b).then(function (t) {
                    var i = null == t ? void 0 : t.domains,
                      o = null == t ? void 0 : t.updatedTime,
                      r = Date.now()
                    ;(!o || r - o > 864e5) &&
                      n.api.ArticleDomains.fetchArticleDomainsGraphQL()
                        .then(function (t) {
                          n.devicePersistence.set(b, { domains: t || [], updatedTime: r }), e(w(t || void 0))
                        })
                        .catch(function () {}),
                      t && e(w(i))
                  }),
                  n.userPersistence.get(_).then(function (t) {
                    var n = null == t ? void 0 : t.articles
                    n && e(k(Array.from(n)))
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
          o = n('MQi0'),
          r = n('tI3i'),
          a = n.n(r),
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
          function r(e) {
            var n, i, r, c, l, u, d, p, f, m, h, v
            if (
              (((f = t.call(this) || this)._overshootClamping =
                null !== (n = e.overshootClamping) && void 0 !== n && n),
              (f._restDisplacementThreshold = null !== (i = e.restDisplacementThreshold) && void 0 !== i ? i : 0.001),
              (f._restSpeedThreshold = null !== (r = e.restSpeedThreshold) && void 0 !== r ? r : 0.001),
              (f._initialVelocity = null !== (c = e.velocity) && void 0 !== c ? c : 0),
              (f._lastVelocity = null !== (l = e.velocity) && void 0 !== l ? l : 0),
              (f._toValue = e.toValue),
              (f._delay = null !== (u = e.delay) && void 0 !== u ? u : 0),
              (f._useNativeDriver = Object(s.c)(e)),
              (f.__isInteraction = null !== (d = e.isInteraction) && void 0 !== d ? d : !f._useNativeDriver),
              (f.__iterations = null !== (p = e.iterations) && void 0 !== p ? p : 1),
              void 0 !== e.stiffness || void 0 !== e.damping || void 0 !== e.mass)
            )
              a()(
                void 0 === e.bounciness && void 0 === e.speed && void 0 === e.tension && void 0 === e.friction,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              ),
                (f._stiffness = null !== (m = e.stiffness) && void 0 !== m ? m : 100),
                (f._damping = null !== (h = e.damping) && void 0 !== h ? h : 10),
                (f._mass = null !== (v = e.mass) && void 0 !== v ? v : 1)
            else if (void 0 !== e.bounciness || void 0 !== e.speed) {
              var _, b
              a()(
                void 0 === e.tension &&
                  void 0 === e.friction &&
                  void 0 === e.stiffness &&
                  void 0 === e.damping &&
                  void 0 === e.mass,
                'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one',
              )
              var g = o.a.fromBouncinessAndSpeed(
                null !== (_ = e.bounciness) && void 0 !== _ ? _ : 8,
                null !== (b = e.speed) && void 0 !== b ? b : 12,
              )
              ;(f._stiffness = g.stiffness), (f._damping = g.damping), (f._mass = 1)
            } else {
              var y,
                w,
                k = o.a.fromOrigamiTensionAndFriction(
                  null !== (y = e.tension) && void 0 !== y ? y : 40,
                  null !== (w = e.friction) && void 0 !== w ? w : 7,
                )
              ;(f._stiffness = k.stiffness), (f._damping = k.damping), (f._mass = 1)
            }
            return (
              a()(f._stiffness > 0, 'Stiffness value must be greater than 0'),
              a()(f._damping > 0, 'Damping value must be greater than 0'),
              a()(f._mass > 0, 'Mass value must be greater than 0'),
              f
            )
          }
          ;(i = t), ((n = r).prototype = Object.create(i.prototype)), (n.prototype.constructor = n), c(n, i)
          var l = r.prototype
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
            (l.start = function (e, t, n, i, o) {
              var a = this
              if (
                ((this.__active = !0),
                (this._startPosition = e),
                (this._lastPosition = this._startPosition),
                (this._onUpdate = t),
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
                a._useNativeDriver ? a.__startNativeAnimation(o) : a.onUpdate()
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
                o = this._stiffness,
                r = -this._initialVelocity,
                a = n / (2 * Math.sqrt(o * i)),
                s = Math.sqrt(o / i),
                c = s * Math.sqrt(1 - a * a),
                l = this._toValue - this._startPosition,
                u = 0,
                d = 0,
                p = this._frameTime
              if (a < 1) {
                var f = Math.exp(-a * s * p)
                ;(u = this._toValue - f * (((r + a * s * l) / c) * Math.sin(c * p) + l * Math.cos(c * p))),
                  (d =
                    a * s * f * ((Math.sin(c * p) * (r + a * s * l)) / c + l * Math.cos(c * p)) -
                    f * (Math.cos(c * p) * (r + a * s * l) - c * l * Math.sin(c * p)))
              } else {
                var m = Math.exp(-s * p)
                ;(u = this._toValue - m * (l + (r + s * l) * p)), (d = m * (r * (p * s - 1) + p * l * (s * s)))
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
                var v = Math.abs(d) <= this._restSpeedThreshold,
                  _ = !0
                if (
                  (0 !== this._stiffness && (_ = Math.abs(this._toValue - u) <= this._restDisplacementThreshold),
                  h || (v && _))
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
            r
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
        o = n('KEM+'),
        r = n.n(o),
        a = n('3XMw'),
        s = n.n(a),
        c = n('mJtw'),
        l =
          ((i = {}),
          r()(i, c.a.Like, s.a.d636ebc6),
          r()(i, c.a.Haha, s.a.bd83592a),
          r()(i, c.a.Hmm, s.a.f84f0fa8),
          r()(i, c.a.Sad, s.a.g47ce0e4),
          r()(i, c.a.Cheer, s.a.fc8a13c5),
          i)
    },
    lBmi: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
          return s
        })
      n('yH/f'), n('2G9S'), n('vrRf')
      var i = Object.freeze({
          AddToBookmarks: 'add_to_bookmarks',
          AddToMoment: 'add_to_moment',
          Analytics: 'view_tweet_activity',
          Autoplay: 'autoplay',
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
          ShowRetweetActionMenu: 'show_retweet_action_menu',
          PinToProfile: 'pin_to_profile',
          ViewHiddenReplies: 'view_hidden_replies',
          VoteOnPoll: 'vote_on_poll',
        }),
        o = [i.AddToBookmarks, i.Retweet, i.SendViaDM, i.ShareTweetVia],
        r = [i.Retweet, i.QuoteTweet, i.SendViaDM, i.ShareTweetVia, i.Embed],
        a = Object.freeze({
          enabled: 'tweet_limited_actions_config_enabled',
          non_compliant: 'tweet_limited_actions_config_non_compliant',
          community_tweet_member: 'tweet_limited_actions_config_community_tweet_member',
          community_tweet_non_member: 'tweet_limited_actions_config_community_tweet_non_member',
          community_tweet_hidden: 'tweet_limited_actions_config_community_tweet_hidden',
          community_tweet_member_removed: 'tweet_limited_actions_config_community_tweet_member_removed',
          disable_state_media_autoplay: 'tweet_limited_actions_config_disable_state_media_autoplay',
          limit_trusted_friends_tweet: 'tweet_limited_actions_config_limit_trusted_friends_tweet',
          soft_nudge_with_quote_tweet: 'tweet_limited_actions_config_soft_nudge_with_quote_tweet',
        }),
        s = function (e, t, n, s) {
          var c = (function (e, t, n) {
              var s = t.community_id_str,
                c = t.limited_actions,
                l = t.trusted_friends_info
              if ('limited_replies' === c) return [i.Reply]
              if (c) {
                if (!a.hasOwnProperty(c)) return []
                var u = a[c]
                return e.getArrayValue(u, [])
              }
              return s
                ? e.isTrue('c9s_participation_enabled')
                  ? n
                    ? o
                    : [].concat(o, [i.VoteOnPoll, i.Reply])
                  : [].concat(o, [i.VoteOnPoll, i.Reply, i.QuoteTweet])
                : l
                ? r
                : []
            })(e, t, s),
            l = e.isTrue('tweet_limited_actions_config_enabled'),
            u =
              '' !==
              e.getValueWithoutScribeImpression('conversation_controls_limited_replies_consumption_configuration')
          return !(null == c || !c.length || (!l && !u)) && c.indexOf(n) > -1
        }
    },
    ms2t: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
        o = n('tI3i'),
        r = n.n(o),
        a = i.a.API,
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
                a.startListeningToAnimatedNodeValue(this.__getNativeTag()),
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
                a.stopListeningToAnimatedNodeValue(this.__getNativeTag()))
            }),
            (e.__getNativeTag = function () {
              var e
              i.a.assertNativeAnimatedModule(),
                r()(this.__isNative, 'Attempt to get native tag from node not marked as "native"')
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
    'r7g+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ue
      })
      var i = n('yiKp'),
        o = n.n(i),
        r = (n('TJCb'), n('7x/C'), n('DZ+c'), n('hBvt'), n('ERkP')),
        a = n.n(r),
        s = n('t62R'),
        c = n('nBUg'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('Z6aJ'),
        p = n('rHpw'),
        f = n('JWUO'),
        m = n('E0cF'),
        h = n('97Jx'),
        v = n.n(h),
        _ = n('ddV6'),
        b = n.n(_),
        g = n('m3Bd'),
        y = n.n(g),
        w =
          (n('yH/f'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('1t7P'),
          n('jQ/y'),
          n('ho0z'),
          n('SEra')),
        k = n('ir4X'),
        C = n('e5HP'),
        E = n('GBcw'),
        T = n('tLTi'),
        A = n('Nqmc'),
        S = n('v302'),
        O = n('sX0n'),
        I = n('feOz'),
        N = n('YBcl'),
        x = (n('uFXj'), n('htQn')),
        P = n('ZQ2e'),
        R = n('MWbm')
      var L = p.a.create(function (e) {
          return {
            root: {
              borderWidth: e.borderWidths.small,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              borderRadius: e.borderRadii.large,
            },
          }
        }),
        D = function (e) {
          var t = e.followButton,
            n = e.isUserProtected,
            i = e.isUserVerified,
            o = e.link,
            r = e.onAvatarClick,
            s = e.onScreenNameClick,
            c = e.promotedContent,
            l = e.style,
            u = e.userDescription,
            d = e.userId,
            p = e.userName,
            f = e.userScreenName
          return a.a.createElement(
            R.a,
            { style: l },
            a.a.createElement(
              x.a,
              { link: o, style: L.root },
              a.a.createElement(P.a.Promoted, {
                followButton: t,
                isUserProtected: n,
                isUserVerified: i,
                onAvatarClick: r,
                onScreenNameClick: s,
                promotedContent: c,
                userDescription: u,
                userId: d,
                userName: p,
                userScreenName: f,
              }),
            ),
          )
        },
        j = n('kY28'),
        M = n('6nXH'),
        V = n('cTG8'),
        F = n('R7KY'),
        U = n('9VO7'),
        B = n('jV+4'),
        H = n('0/y9'),
        K = [
          'renderActionsBar',
          'renderActionMenu',
          'renderEducation',
          'renderHighlightedUserLabel',
          'renderPromotedUserProfileCard',
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
        z = Object.freeze({
          ActionsBar: I.a,
          ActionMenu: O.a,
          Education: N.a,
          HighlightedUserLabel: k.a,
          PromotedIndicator: C.a,
          PromotedUserProfileCard: D,
          ReplyContext: j.a,
          RichContent: M.a,
          SocialContext: A.a,
          Text: V.a,
          Tombstone: S.a,
          Timestamp: E.a,
          UserAvatar: F.a,
          UserFollowIndicator: U.a,
          UserName: B.a,
        }),
        W = {
          linkProcessor: function (e) {
            return o()(o()({}, e), {}, { pathname: new URL(e.pathname, 'https://twitter.com').toString() })
          },
        }
      function q(e) {
        var t = a.a.useRef(e)
        return a.a.useCallback(function (e) {
          var n = e.children
          return null === t.current ? n : a.a.createElement(w.Provider, t.current, n)
        }, [])
      }
      var X = function (e) {
          return a.a.createElement(z.ActionMenu, e)
        },
        Q = function (e) {
          return a.a.createElement(z.ActionsBar, v()({}, e, { isDisabled: !0 }))
        },
        J = function (e) {
          return a.a.createElement(z.Education, e)
        },
        G = function (e) {
          return a.a.createElement(z.HighlightedUserLabel, e)
        },
        Y = function (e) {
          return a.a.createElement(z.PromotedIndicator, e)
        },
        Z = function (e) {
          return null
        },
        $ = function (e) {
          return null
        },
        ee = function (e) {
          return a.a.createElement(z.ReplyContext, e)
        },
        te = function (e) {
          return a.a.createElement(z.RichContent, e)
        },
        ne = function (e) {
          return a.a.createElement(z.SocialContext, e)
        },
        ie = function (e) {
          return a.a.createElement(z.Timestamp, e)
        },
        oe = function (e) {
          return a.a.createElement(z.Text, e)
        },
        re = function (e) {
          return a.a.createElement(z.Tombstone, e)
        },
        ae = function (e) {
          return a.a.createElement(z.UserAvatar, e)
        },
        se = function (e) {
          return a.a.createElement(z.UserFollowIndicator, e)
        },
        ce = function (e) {
          return a.a.createElement(z.UserName, e)
        },
        le = u.a.g5662c95
      function ue(e) {
        var t,
          n,
          i,
          r,
          l,
          u = (function (e) {
            var t = e.renderActionsBar,
              n = void 0 === t ? Q : t,
              i = e.renderActionMenu,
              r = void 0 === i ? X : i,
              s = e.renderEducation,
              c = void 0 === s ? J : s,
              l = e.renderHighlightedUserLabel,
              u = void 0 === l ? G : l,
              p = e.renderPromotedUserProfileCard,
              f = void 0 === p ? Z : p,
              h = e.renderPromotedIndicator,
              v = void 0 === h ? Y : h,
              _ = e.renderPromotionStatusBadge,
              g = void 0 === _ ? $ : _,
              w = e.renderReplyContext,
              k = void 0 === w ? ee : w,
              C = e.renderRichContent,
              E = void 0 === C ? te : C,
              A = e.renderSocialContext,
              S = void 0 === A ? ne : A,
              O = e.renderText,
              I = void 0 === O ? oe : O,
              N = e.renderTimestamp,
              x = void 0 === N ? ie : N,
              P = e.renderTombstone,
              R = void 0 === P ? re : P,
              L = e.renderUserAvatar,
              D = void 0 === L ? ae : L,
              j = e.renderUserFollowIndicator,
              M = void 0 === j ? se : j,
              V = e.renderUserName,
              F = void 0 === V ? ce : V,
              U = e.promotedContent,
              B = e.quotedTweetTombstoneInfo,
              z = e.socialContext,
              le = e.staticLinkConfig,
              ue = void 0 === le ? W : le,
              de = e.tweet,
              pe = y()(e, K),
              fe = m.a.getOriginalTweet(de),
              me = Object(H.useTweetA11yIds)(fe),
              he = b()(me, 2),
              ve = he[0],
              _e = he[1],
              be = {
                renderActionsBar: function (e) {
                  var t, i
                  return n(
                    o()(
                      {
                        enableKeyboardShortcuts: !1,
                        isLiked: fe.favorited,
                        isRetweeted: fe.retweeted,
                        likeCount: fe.favorite_count,
                        nativeID: ve.actionsBar,
                        reaction: fe.reacted,
                        reactionCounts: fe.reaction_count,
                        replyCount: fe.reply_count,
                        retweetCount:
                          (null !== (t = fe.quote_count) && void 0 !== t ? t : 0) +
                          (null !== (i = fe.retweet_count) && void 0 !== i ? i : 0),
                        tweetLink: fe.permalink,
                        withAnalytics: !1,
                        withCount: !0,
                      },
                      e,
                    ),
                  )
                },
                renderActionMenu: function (e) {
                  return r(o()({ items: [] }, e))
                },
                renderEducation: function (e) {
                  return c(
                    o()(
                      {
                        conversationControlLabelNativeID: ve.conversationControlLabel,
                        exclusivityInfoLabelNativeID: ve.exclusivityInfoLabel,
                        trustedFriendsLabelNativeID: ve.trustedFriendsLabel,
                        tweet: de,
                      },
                      e,
                    ),
                  )
                },
                renderHighlightedUserLabel: function (e) {
                  return fe.user.highlightedLabel
                    ? u(o()({ label: fe.user.highlightedLabel, nativeID: ve.userLabel }, e))
                    : null
                },
                renderPromotedUserProfileCard: function (e) {
                  var t
                  return 'true' ===
                    (null == U || null === (t = U.experiment_values) || void 0 === t ? void 0 : t.pac_in_timeline)
                    ? f(
                        o()(
                          {
                            isUserProtected: fe.user.protected,
                            isUserVerified: fe.user.verified,
                            promotedContent: U,
                            userDescription: fe.user.description,
                            userId: fe.user.id_str,
                            userName: fe.user.name,
                            userScreenName: fe.user.screen_name,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderPromotedIndicator: function (e) {
                  return U && d.a.isPromoted(U)
                    ? v(o()({ contentAuthorId: fe.user.id_str, nativeID: ve.promotedLabel, promotedContent: U }, e))
                    : null
                },
                renderPromotionStatusBadge: function (e) {
                  return g({ nativeID: ve.promotionStatusLabel })
                },
                renderReplyContext: function (e) {
                  var t
                  return fe.in_reply_to_status_id_str
                    ? k(
                        o()(
                          {
                            displayTextRange: fe.display_text_range,
                            inReplyToName: fe.in_reply_to_name,
                            inReplyToScreenName: fe.in_reply_to_screen_name,
                            inReplyToStatusIdStr: fe.in_reply_to_status_id_str,
                            inReplyToUserIdStr: fe.in_reply_to_user_id_str,
                            nativeID: ve.replyContext,
                            tweetPermalink: fe.permalink,
                            unmentionedUserIds: fe.unmentioned_user_ids,
                            userMentionsEntities: null === (t = fe.entities) || void 0 === t ? void 0 : t.user_mentions,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderRichContent: function (e) {
                  return E(
                    o()(
                      {
                        forwardPivotInfo: de.softIntervention,
                        nativeID: ve.richContent,
                        quotedTweetTombstoneInfo: B,
                        tweet: de,
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
                  return z
                    ? S(
                        o()(
                          {
                            contextType: null == z ? void 0 : z.contextType,
                            link: z.link,
                            nativeID: ve.socialContext,
                            retweetData: { isSelfRetweet: z.isSelfRetweet, name: z.name, screenName: z.screenName },
                            text: z.text,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderText: function (e) {
                  var t
                  return I(
                    o()(
                      {
                        displayTextRange: fe.display_text_range,
                        enrichments: fe.enrichments,
                        entities: fe.entities,
                        lang: fe.lang,
                        linkify: !0,
                        nativeID: ve.text,
                        quotedTweetId: null === (t = fe.quoted_status) || void 0 === t ? void 0 : t.id_str,
                        quotedTweetPermalink: fe.quoted_status_permalink,
                        text: fe.text,
                        unmentionedUserIds: fe.unmentioned_user_ids,
                      },
                      e,
                    ),
                  )
                },
                renderTimestamp: function (e) {
                  return x(
                    o()(
                      {
                        nativeID: ve.timestamp,
                        link: { pathname: fe.permalink, state: { contextTweetId: fe.id_str, promotedContent: U } },
                        timestamp: fe.created_at,
                      },
                      e,
                    ),
                  )
                },
                renderTombstone: function (e) {
                  var t = fe.tombstoneInfo || de.tombstoneInfo
                  return null != t && t.richText
                    ? R(
                        o()(
                          {
                            children: a.a.createElement(T.a, {
                              dir: t.richText.rtl ? 'rtl' : 'ltr',
                              entities: t.richText.entities,
                              text: t.richText.text,
                            }),
                            nativeID: ve.tombstone,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderUserAvatar: function (e) {
                  return D(
                    o()(
                      {
                        nativeID: ve.avatar,
                        promotedContent: U,
                        screenName: fe.user.screen_name,
                        uri: fe.user.profile_image_url_https,
                        withLink: !0,
                      },
                      e,
                    ),
                  )
                },
                renderUserFollowIndicator: function (e) {
                  return fe.has_super_follower ? M(o()({ type: 'superFollower' }, e)) : null
                },
                renderUserName: function (e) {
                  return F(
                    o()(
                      {
                        isProtected: fe.user.protected,
                        isVerified: fe.user.verified,
                        name: fe.user.name,
                        nativeID: ve.username,
                        promotedContent: U,
                        screenName: fe.user.screen_name,
                      },
                      e,
                    ),
                  )
                },
              }
            return {
              LinkConfigProvider: q(ue),
              a11yIds: ve,
              a11yIdList: _e,
              props: o()(
                o()({}, be),
                {},
                { tweet: de, promotedContent: U, socialContext: z, quotedTweetTombstoneInfo: B },
                pe,
              ),
            }
          })(e),
          h = u.LinkConfigProvider,
          v = u.a11yIdList,
          _ = u.a11yIds,
          g = u.props,
          w = m.a.getOriginalTweet(g.tweet),
          k = w.permalink,
          C = w.tombstoneInfo || g.tweet.tombstoneInfo,
          E = d.a.isPromoted(g.promotedContent),
          A = c.b.useProps(),
          S = A.withEdgeToEdgeContent(),
          O = A.withEdgeToEdgeTweetAnatomy(),
          I = A.tweetRendersPromotedContentBadgeBelowHeader(),
          N = m.a.hasInteractiveText(w),
          x = null === (t = g.conversationTreeMetadata) || void 0 === t ? void 0 : t.ancestorConnector,
          P = null === (n = g.conversationTreeMetadata) || void 0 === n ? void 0 : n.indents,
          R = g.conversationTreeMetadata
            ? a.a.createElement(
                s.b,
                { nativeID: _.conversationLevel, style: p.a.visuallyHidden },
                le({ conversationTreeDepth: g.conversationTreeMetadata.depth.toString() }),
              )
            : null,
          L = g.renderTombstone({
            actionLink: k,
            actionText: null == C || null === (i = C.richRevealText) || void 0 === i ? void 0 : i.text,
            style: de.tombstone,
          })
        return a.a.createElement(
          h,
          null,
          a.a.createElement(
            f.a,
            {
              a11yDomIds: v,
              actionMenu: g.renderActionMenu(),
              avatar: g.renderUserAvatar(),
              footer: null === (r = g.renderSelfThreadCTA) || void 0 === r ? void 0 : r.call(g),
              header: g.renderSocialContext({
                iconSize: 'large',
                iconStyle: de.socialContextIcon,
                style: de.socialContext,
                weight: 'bold',
              }),
              indents: P,
              link: g.link
                ? ((l = g.link),
                  'string' == typeof l ? { anchorless: !0, pathname: l } : o()(o()({}, l), {}, { anchorless: !0 }))
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
              timestamp: E || O ? null : g.renderTimestamp(),
              userFollowIndicators: g.renderUserFollowIndicator(),
              userLabel: g.renderHighlightedUserLabel(),
              userName: g.renderUserName({
                screenNameSuffix: E || !O ? null : g.renderTimestamp(),
                withStackedLayout: O,
              }),
              withBottomLine: g.withBottomLine,
              withElbow: P ? 'side' === x : void 0,
              withFullWidthChildren: S,
              withTopLine: g.withTopLine,
              withUnreadStyles: g.withUnreadStyles,
            },
            I
              ? g.renderPromotedIndicator({
                  style: m.a.hasInteractiveText(w)
                    ? de.promotedIndicatorBelowHeaderWithInteractiveHighlights
                    : de.promotedIndicatorBelowHeader,
                })
              : null,
            R,
            null !== L
              ? L
              : a.a.createElement(
                  a.a.Fragment,
                  null,
                  g.renderReplyContext({ style: de.replyContext }),
                  g.renderText({
                    size: 'body',
                    style: (N && de.interactiveHighlightSpacer) || (S && de.edgeToEdgeTextSpacer),
                  }),
                  g.renderRichContent({ withRoundMediaCorners: !S }),
                ),
            g.renderEducation({ displayStyle: 'inline' }),
            g.renderPromotedUserProfileCard({ style: de.promotedUserCard }),
            g.renderActionsBar({ actionSize: 'normal', displayStyle: 'inline', style: de.actionsBar, withCount: !0 }),
            I ? null : g.renderPromotedIndicator({ style: de.promotedIndicator }),
            g.renderPromotionStatusBadge({ nativeID: _.promotionStatusLabel }),
          ),
        )
      }
      ;(ue.ActionMenu = z.ActionMenu),
        (ue.ActionsBar = z.ActionsBar),
        (ue.Education = z.Education),
        (ue.HighlightedUserLabel = z.HighlightedUserLabel),
        (ue.PromotedIndicator = z.PromotedIndicator),
        (ue.PromotedUserProfileCard = z.PromotedUserProfileCard),
        (ue.ReplyContext = z.ReplyContext),
        (ue.RichContent = z.RichContent),
        (ue.SocialContext = z.SocialContext),
        (ue.Text = z.Text),
        (ue.Timestamp = z.Timestamp),
        (ue.Tombstone = z.Tombstone),
        (ue.UserAvatar = z.UserAvatar),
        (ue.UserFollowIndicator = z.UserFollowIndicator),
        (ue.UserName = z.UserName)
      var de = p.a.create(function (e) {
        return {
          actionsBar: { marginTop: e.spaces.space12 },
          edgeToEdgeTextSpacer: { marginTop: e.spaces.space4 },
          interactiveHighlightSpacer: { marginTop: e.spaces.space8 },
          replyContext: { marginBottom: e.spaces.space2 },
          socialContext: { marginBottom: e.spaces.space4 },
          socialContextIcon: { marginBottom: e.spaces.space4 },
          promotedIndicator: { marginTop: e.spaces.space12 },
          promotedIndicatorBelowHeader: { marginBottom: e.spaces.space8 },
          promotedIndicatorBelowHeaderWithInteractiveHighlights: { marginBottom: e.spaces.space4 },
          promotedUserCard: { marginTop: e.spaces.space8 },
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
        o = n.n(i),
        r = n('yiKp'),
        a = n.n(r),
        s = n('Ssj5'),
        c = 'engagementNudges',
        l = { misinfo: {} },
        u = 'rweb/engagementNudges/SET_TWEET_MISINFO_ACTION_TAKEN'
      s.a.register(
        o()({}, c, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case u:
              return t.payload
                ? a()(a()({}, e), {}, { misinfo: a()(a()({}, e.misinfo), {}, o()({}, t.payload, !0)) })
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
        o = n.n(i),
        r = n('97Jx'),
        a = n.n(r),
        s = n('3XMw'),
        c = n.n(s),
        l = n('cmUU'),
        u = n('efqG'),
        d = n('rHpw'),
        p = n('MWbm'),
        f = c.a.b09adb0c,
        m = c.a.c2637ef5,
        h = function (e) {
          var t = e.Icon,
            n = e.children,
            i = e.headline,
            r = e.onAction,
            s = e.onDismiss,
            c = e.onOpen,
            d = e.onSecondaryAction,
            h = e.style,
            _ = e.subtext,
            b = e.thumbnailColor,
            g = e.tweetPermalink
          return o.a.createElement(
            p.a,
            {
              onClick: function (e) {
                e.stopPropagation()
              },
              style: h,
            },
            o.a.createElement(
              u.a,
              {
                onDismiss: s,
                renderContent: function (e, n) {
                  var s = function () {
                      d && d(), e()
                    },
                    c = g
                      ? {
                          actionLabel: f,
                          actionLink: g,
                          onAction: function () {
                            r && r()
                          },
                          secondaryActionLabel: m,
                          onSecondaryAction: s,
                        }
                      : { actionLabel: m, onAction: s }
                  return o.a.createElement(
                    p.a,
                    { style: 'popover' === n ? v.interstitialPopover : void 0 },
                    o.a.createElement(
                      l.a,
                      a()({}, c, {
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
              o.a.createElement(p.a, { accessibilityRole: 'button', onClick: c }, n),
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
        y = n('Oib4'),
        w = n('EyD/'),
        k = {
          conversationControlsFollowersCanEngage: { Icon: _.a, headline: c.a.bb7b821a, subtext: c.a.h15b020c },
          conversationControlsFollowersCannotEngage: { Icon: _.a, headline: c.a.ab105904, subtext: c.a.h15b020c },
          conversationControlsCommunityCanEngage: { Icon: b.a, headline: c.a.bb7b821a, subtext: c.a.j86de6d0 },
          conversationControlsCommunityCannotEngage: { Icon: b.a, headline: c.a.ab105904, subtext: c.a.j86de6d0 },
          conversationControlsByInvitationCanEngage: { Icon: g.a, headline: c.a.bb7b821a, subtext: c.a.cededc6f },
          conversationControlsByInvitationCannotEngage: { Icon: g.a, headline: c.a.ab105904, subtext: c.a.cededc6f },
          communityHiddenTweetEducation: { Icon: y.a, headline: c.a.g7ea1122, subtext: c.a.f9560709 },
          communityRemovedMemberEducation: { Icon: y.a, headline: c.a.g7ea1122, subtext: c.a.jd773100 },
          exclusiveToSuperFollowersCreator: {
            Icon: w.a,
            thumbnailColor: 'exclusive',
            headline: c.a.dbf9738f,
            subtext: c.a.d95d8f24,
          },
          exclusiveToSuperFollowersReplyOwn: {
            Icon: w.a,
            thumbnailColor: 'exclusive',
            headline: c.a.dbf9738f,
            subtext: c.a.ff6895e3,
          },
          exclusiveToSuperFollowersReplyOthers: {
            Icon: w.a,
            thumbnailColor: 'exclusive',
            headline: c.a.f1140912,
            subtext: c.a.j1a5fd02,
          },
        }
      t.a = function (e) {
        var t = e.children,
          n = e.onAction,
          i = e.onDismiss,
          r = e.onOpen,
          a = e.onSecondaryAction,
          s = e.screenName,
          c = e.style,
          l = e.tweetPermalink,
          u = e.type
        if (!k[u]) return t
        var d = k[u],
          p = d.Icon,
          f = d.headline,
          m = d.subtext,
          v = d.thumbnailColor,
          _ = (function (e, t) {
            return 'string' != typeof e ? e({ screenName: t }) : e
          })(m, s)
        return o.a.createElement(
          h,
          {
            Icon: p,
            headline: f,
            onAction: n,
            onDismiss: i,
            onOpen: r,
            onSecondaryAction: a,
            style: c,
            subtext: _,
            thumbnailColor: v,
            tweetPermalink: l,
          },
          t,
        )
      }
    },
    sX0n: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var i = n('ERkP'),
        o = n.n(i),
        r = n('mjJ+'),
        a = n('6/RC'),
        s = n('IG7M')
      function c(e) {
        var t = e.Icon,
          n = e.isDisabled,
          i = e.items,
          c = e.onOpen
        return a.canUseDOM && i.length
          ? o.a.createElement(s.a, {
              Icon: t,
              isDisabled: n,
              onClick: c,
              renderActionMenu: function (e) {
                return o.a.createElement(r.a, { items: i, onCloseRequested: e })
              },
            })
          : null
      }
    },
    uFYP: function (e, t, n) {
      'use strict'
      var i = n('yiKp'),
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    vG6z: function (e, t, n) {
      'use strict'
      var i = n('H5wF')
      t.a = i.a('NativeAnimatedModule')
    },
    vbWy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var i,
        o = n('KEM+'),
        r = n.n(o),
        a = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('fs1G'),
        u = c.a.c730cd08,
        d = c.a.f1d600ab,
        p = c.a.d80d33c5,
        f = c.a.j3403c05,
        m =
          ((i = { defaultToast: { text: d } }),
          r()(i, a.a.BlockedUserError, { toast: { text: u } }),
          r()(i, a.a.DuplicateStatusError, { customAction: l.a }),
          r()(i, a.a.InvalidRetweetForStatus, { toast: { text: p } }),
          r()(i, a.a.OverStatusUpdateLimit, { toast: { text: f } }),
          r()(i, 'showToast', !0),
          i)
    },
    xXop: function (e, t, n) {
      'use strict'
      var i = n('97Jx'),
        o = n.n(i),
        r = n('yiKp'),
        a = n.n(r),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        m = n.n(f),
        h = n('2VqO'),
        v = n.n(h),
        _ = n('KEM+'),
        b = n.n(_),
        g = (n('yH/f'), n('ho0z'), n('Blm6'), n('ERkP')),
        y = n.n(g),
        w = n('0JOx'),
        k = (n('hBvt'), n('ddV6')),
        C = n.n(k),
        E = (n('uFXj'), n('3XMw')),
        T = n.n(E),
        A = n('MWbm'),
        S = n('tevE'),
        O = n('t62R'),
        I = n('/yvb'),
        N = n('cm6r'),
        x = n('py1r'),
        P = n('rHpw'),
        R = n('0weh'),
        L = n('6s7X'),
        D = n('iySH'),
        j = T.a.i859a9d3,
        M = T.a.gc45a909,
        V = function (e) {
          var t = e.buttonLabel,
            n = e.condensedText,
            i = e.expanded,
            o = e.heading,
            r = e.icon,
            a = e.iconExpanded,
            s = e.isExpandable,
            c = e.learnMoreLink,
            l = e.link,
            u = e.onPress,
            d = e.subheading,
            p = y.a.useState(i),
            f = C()(p, 2),
            m = f[0],
            h = f[1],
            v = function (e) {
              e.preventDefault(), e.stopPropagation(), h(!0)
            }
          return m
            ? y.a.createElement(
                A.a,
                { focusable: !0, style: [F.container, F.containerExpanded] },
                a || r || y.a.createElement(R.a, { style: [F.iconPrimaryColor, F.iconExpanded] }),
                y.a.createElement(S.a, { align: 'center', size: 'title4', style: F.text, weight: 'bold' }, o),
                y.a.createElement(S.a, { align: 'center', color: 'gray700', style: F.text }, d),
                c ? y.a.createElement(O.b, { align: 'center', link: c, style: F.learnMore }, j) : null,
                y.a.createElement(I.a, { link: l, onPress: u, type: 'brandFilled' }, t),
              )
            : y.a.createElement(
                N.a,
                { focusable: !0, link: l, onPress: u, style: [F.container, F.containerCondensed] },
                function (e) {
                  var t = e.isHovered
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    r || y.a.createElement(R.a, { style: [F.iconPrimaryColor, F.iconCondensed] }),
                    y.a.createElement(O.b, { style: F.condensedText }, n),
                    s
                      ? y.a.createElement(x.a, null, function (e) {
                          var t = e.isHovered
                          return y.a.createElement(I.a, {
                            accessibilityLabel: M,
                            icon: y.a.createElement(L.a, { style: t ? F.infoIconPrimary : F.infoIconGray }),
                            onClick: v,
                            size: 'xSmall',
                            style: F.infoButton,
                            type: 'brandText',
                          })
                        })
                      : y.a.createElement(D.a, { style: [t ? F.iconPrimaryColor : F.iconGrayColor, F.rightIcon] }),
                  )
                },
              )
        }
      V.defaultProps = { isExpandable: !1 }
      var F = P.a.create(function (e) {
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
        U = V,
        B = n('ms2t'),
        H = T.a.ibd021f1,
        K = T.a.ca58508e,
        z = T.a.g5092765,
        W = T.a.a2d5c006,
        q = T.a.g37bb2d0,
        X = P.a.create(function (e) {
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
        Q = function (e) {
          var t = e.articleNudgeFollowed,
            n = e.link,
            i = e.onClick,
            o = e.shouldShowArticleNudgeTip,
            r = y.a.createElement(B.a, { style: X.glassIcon }),
            a = y.a.createElement(B.a, { style: [X.glassIcon, X.glassIconExpanded] })
          return y.a.createElement(U, {
            buttonLabel: z,
            condensedText: t ? W : H,
            expanded: o,
            heading: t ? W : H,
            icon: r,
            iconExpanded: a,
            isExpandable: !0,
            learnMoreLink: 'https://help.twitter.com/using-twitter/how-to-retweet#prompt',
            link: n,
            onPress: i,
            subheading: t ? q : K,
          })
        },
        J = n('XIWT'),
        G = n('6/RC'),
        Y = n('CaKu'),
        Z = n('xVN5'),
        $ = n('1YZw'),
        ee = n('eSoz'),
        te = n('Q8CU'),
        ne = n('Ig1G'),
        ie = n('BQZD'),
        oe = n('LQyW'),
        re = n('RqPI'),
        ae = n('D5n3'),
        se = n('G6rE'),
        ce = n('xZGM'),
        le = n('Hja3'),
        ue = n('rxPX'),
        de = n('0KEI'),
        pe = n('P1r1'),
        fe = n('jL08'),
        me = n('rx9x'),
        he = n('TuTd'),
        ve = n('XOJV'),
        _e = function (e, t) {
          return Object(ce.D)(e, ce.b)
        },
        be = function (e, t) {
          return Object(ce.D)(e, ce.u)
        },
        ge = function (e, t) {
          return Object(ce.B)(e, ce.m)
        },
        ye = function (e) {
          return Z.k(e, '')
        },
        we = function (e, t) {
          return Object(he.a)(e, t.tweet.id_str)
        },
        ke = function (e, t) {
          return Object(me.a)(e, t.tweet.id_str)
        },
        Ce = function (e, t) {
          var n = t.tweet.community_id_str,
            i = n ? ee.c.select(e, n) : void 0
          return Object(ne.g)(null == i ? void 0 : i.role)
        },
        Ee = function (e, t) {
          var n,
            i,
            o,
            r,
            a = t.tweet,
            s =
              null == a ||
              null === (n = a.card) ||
              void 0 === n ||
              null === (i = n.binding_values) ||
              void 0 === i ||
              null === (o = i.domain) ||
              void 0 === o
                ? void 0
                : o.string_value,
            c = null == a || null === (r = a.card) || void 0 === r ? void 0 : r.url
          return c && s ? Object(fe.d)(e, c, s) : void 0
        },
        Te = function (e, t) {
          var n,
            i,
            o,
            r = t.tweet,
            a =
              null == r ||
              null === (n = r.card) ||
              void 0 === n ||
              null === (i = n.binding_values) ||
              void 0 === i ||
              null === (o = i.domain) ||
              void 0 === o
                ? void 0
                : o.string_value
          return a ? Object(fe.c)(e, a) : void 0
        },
        Ae = function (e, t) {
          var n = t.bookmarkFolderId
          if (n) {
            var i = le.b.select(e, n)
            return null == i ? void 0 : i.name
          }
        },
        Se = function (e, t) {
          var n = t.tweet
          return n ? Object(oe.b)(e, n) : void 0
        },
        Oe = Object(ue.a)()
          .propsFromState(function () {
            return {
              canShowReactionsEducation: be,
              composerData: ye,
              dataSaverMode: pe.j,
              isArticleDomainMatched: Te,
              isCommunityMember: Ce,
              likeTransitionAnimation: Se,
              liveCounts: we,
              loggedInUser: se.e.selectLoggedInUser,
              misinfoNudgeActionTaken: ke,
              sessionToken: re.w,
              shouldShowArticleNudgeTip: _e,
              wasArticleVisited: Ee,
              bookmarkFolderName: Ae,
              daysSinceDownvoteEducation: ge,
              replyVotingSurveyClicked: pe.x,
            }
          })
          .adjustStateProps(function (e, t) {
            var n = e.bookmarkFolderName,
              i = e.canShowReactionsEducation,
              o = e.composerData,
              r = e.dataSaverMode,
              a = e.daysSinceDownvoteEducation,
              s = e.isArticleDomainMatched,
              c = e.isCommunityMember,
              l = e.likeTransitionAnimation,
              u = e.liveCounts,
              d = e.loggedInUser,
              p = e.misinfoNudgeActionTaken,
              f = e.replyVotingSurveyClicked,
              m = e.sessionToken,
              h = e.shouldShowArticleNudgeTip,
              v = e.wasArticleVisited
            t.tweet
            return {
              canShowReactionsEducation: i,
              dataSaverMode: r,
              daysSinceDownvoteEducation: a,
              isArticleDomainMatched: s,
              isCommunityMember: c,
              likeTransitionAnimation: l,
              liveCounts: u,
              misinfoNudgeActionTaken: p,
              replyVotingSurveyClicked: f,
              sessionToken: m,
              shouldShowArticleNudgeTip: h,
              wasArticleVisited: v,
              bookmarkFolderName: n,
              composerHasData: o.length > 0 && !Object(te.b)(o[0]),
              loggedInUserFavCount: (null == d ? void 0 : d.favourites_count) || 0,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: ce.z,
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
              onUnretweet: ae.a,
              removeTweetsFromBookmarksTimeline: ie.d,
              removeTweetFromBookmarkFolder: le.b.removeTweetFromBookmarkFolder,
              removeTweetFromBookmarkFolderTimeline: le.d,
              updateCounts: ve.a.updateCounts,
              resetDraft: Z.f,
              setArticlesVisited: fe.e,
              setReplyVotingSurveyClicked: pe.J,
              setTweetMisinfoActionTaken: me.b,
              updateLiveCounts: he.b,
            }
          })
          .withAnalytics(),
        Ie = n('7JQg'),
        Ne = n('mqpi'),
        xe = n('feu+'),
        Pe = T.a.f755f71f,
        Re = function () {
          var e = y.a.createElement(O.b, {
            color: 'blue500',
            link: 'https://help.twitter.com/en/rules-and-policies/enforcement-options',
            withInteractiveStyling: !0,
          })
          return y.a.createElement(
            T.a.I18NFormatMessage,
            { $i18n: 'hb779f3a' },
            y.a.cloneElement(e, null, T.a.a49a2d30),
          )
        },
        Le = Object.freeze({
          HiddenCommunityTweet: 'community_tweet_hidden',
          CommunityNonMember: 'community_tweet_non_member',
          CommunityMemberRemoved: 'community_tweet_member_removed',
          NonCompliant: 'non_compliant',
        }),
        De = function (e) {
          var t = e.actionType,
            n = e.limitedActionsConfig,
            i = e.onAction,
            o = e.onClose,
            r = n === Le.HiddenCommunityTweet,
            a = n === Le.NonCompliant,
            s = n === Le.CommunityNonMember,
            c = n === Le.CommunityMemberRemoved
          if (!(r || a || s || c)) return null
          var l = (function (e) {
              var t = e.actionType,
                n = e.isCommunityMemberRemoved,
                i = e.isCommunityNonMember,
                o = e.isHiddenCommunityTweet,
                r = e.isNonCompliantTweet
              if (o || n) return T.a.d0270ae1
              if (i)
                switch (t) {
                  case Ne.a.Reply:
                    return T.a.ba352986
                  default:
                    return T.a.cb18be31
                }
              if (r)
                switch (t) {
                  case Ne.a.Reply:
                    return T.a.ae2c8a1e
                  case Ne.a.Downvote:
                    return T.a.adf4892e
                  case Ne.a.Like:
                    return T.a.afe7ba26
                  case Ne.a.React:
                    return T.a.ddb7acf0
                  case Ne.a.Share:
                    return T.a.jead3bc1
                  case Ne.a.Analytics:
                    return T.a.bf02eab5
                  default:
                    return ''
                }
              return ''
            })({
              actionType: t,
              isNonCompliantTweet: a,
              isCommunityNonMember: s,
              isHiddenCommunityTweet: r,
              isCommunityMemberRemoved: c,
            }),
            u = (function (e) {
              var t = e.actionType,
                n = e.isCommunityMemberRemoved,
                i = e.isCommunityNonMember,
                o = e.isHiddenCommunityTweet,
                r = e.isNonCompliantTweet
              if (o || n) return T.a.c8b72f50
              if (i)
                switch (t) {
                  case Ne.a.Reply:
                    return T.a.fa94c9da
                  default:
                    return T.a.if9bcebd
                }
              return r ? y.a.createElement(Re, null) : ''
            })({
              actionType: t,
              isNonCompliantTweet: a,
              isCommunityNonMember: s,
              isHiddenCommunityTweet: r,
              isCommunityMemberRemoved: c,
            })
          return y.a.createElement(xe.a, {
            actionLabel: Pe,
            graphicDisplayMode: 'none',
            headline: l,
            onAction: i,
            onClose: o,
            subtext: u,
          })
        },
        je = n('4hQ9'),
        Me = n('y+lG'),
        Ve = n('OrGc'),
        Fe = n('XEYr'),
        Ue = n('RxYA'),
        Be = n('oQhu'),
        He = n('iGRG'),
        Ke = n('vbWy'),
        ze = n('Rp9C'),
        We = n('4bW+'),
        qe = n('m3Bd'),
        Xe = n.n(qe),
        Qe = n('sQjL'),
        Je = n('k89r'),
        Ge = ['scribeElement'],
        Ye = function (e) {
          var t = e.scribeElement,
            n = Xe()(e, Ge),
            i = Object(Je.a)()
          return y.a.createElement(
            Qe.a,
            o()({}, n, {
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
        Ze = { defaultToast: { text: T.a.fda78a70 }, showToast: !0 },
        $e = { defaultToast: { text: T.a.j10ec2a0 }, showToast: !0 },
        et = { defaultToast: { text: T.a.ccdeb32e }, showToast: !0 },
        tt = n('IO7v'),
        nt = n('TnY3'),
        it = n('4zmP'),
        ot = n('ZToW'),
        rt = n('cHvH'),
        at = n('Wd7d'),
        st = n('E0cF'),
        ct = n('Wk1j'),
        lt = n('3dyc'),
        ut = n('I7xS'),
        dt = n('fn9Y'),
        pt = n('wD1h'),
        ft = n('feOz'),
        mt = n('eb3s'),
        ht = n('v6aA'),
        vt = n('HwrL'),
        _t = n('iEUn'),
        bt = n('DlVf'),
        gt = n('n5fo'),
        yt = n('C25v'),
        wt = n('ZGdk'),
        kt = n('ML2/'),
        Ct = n('SOvA'),
        Et = n('I/9y'),
        Tt = n('Tp1h'),
        At = T.a.gb303813,
        St = T.a.de2d83d5,
        Ot = T.a.b6f822b9,
        It = T.a.f14df406,
        Nt = T.a.f61c4bbf,
        xt = T.a.d9837138,
        Pt = T.a.jf9c38df,
        Rt = T.a.ff9348b8,
        Lt = T.a.ebad846b,
        Dt = T.a.h438b014,
        jt = T.a.d91695cb,
        Mt = T.a.b59d8d10,
        Vt = T.a.h5d6c720,
        Ft = T.a.f1fcb2eb,
        Ut = T.a.a2e7377e,
        Bt = T.a.e0fef909,
        Ht = T.a.ba370e34,
        Kt = T.a.d9034c72,
        zt = T.a.e518bc7a,
        Wt = T.a.f46ba415,
        qt = T.a.c604dda2,
        Xt = T.a.f6c7249b,
        Qt = T.a.f67de45a,
        Jt = T.a.e0be2c22,
        Gt = T.a.e32e0d92,
        Yt = T.a.bd7d377e,
        Zt = T.a.ae768646,
        $t = T.a.c1a50438,
        en = T.a.fd961b0b,
        tn = T.a.d964e8ec,
        nn = T.a.jc4cb6c4,
        on = T.a.f277e949,
        rn = T.a.c2453317,
        an = T.a.f88553c8,
        sn = T.a.b5b36724,
        cn = T.a.g449dfaa,
        ln = T.a.cf7a1b47,
        un = T.a.aec89ef0,
        dn = T.a.d17df547,
        pn = T.a.bac8f4c1,
        fn = T.a.j8eff20a,
        mn = T.a.ce6df39e,
        hn = T.a.af5cd00d,
        vn = T.a.e29c651e,
        _n = { component: 'soft_intervention_nudge' },
        bn = { component: 'article_nudge' },
        gn = { component: 'soft_nudge_with_quote_tweet' },
        yn = { viewType: 'share' },
        wn = { viewType: 'share_via_dm' },
        kn = { viewType: 'copy_link' },
        Cn = function (e) {
          return { viewType: 'bookmark', viewState: { type: 'toggleable', toggledTo: e } }
        },
        En = Object.freeze({ NONE: 'none', THANKS: 'thanks', EDUCATION: 'education', SURVEY: 'survey' }),
        Tn = 0,
        An = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e, i) {
            var o
            return (
              c()(this, n),
              (o = t.call(this, e, i)),
              b()(p()(o), '_shouldDisable', Ne.b.bind(null, o.context.featureSwitches)),
              b()(
                p()(o),
                '_articleNudgeEnabled',
                o.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              b()(p()(o), '_reactionsEnabled', o.context.featureSwitches.isTrue('responsive_web_reactions_enabled')),
              b()(p()(o), '_downvoteEnabled', o.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
              b()(
                p()(o),
                '_showDownvoteBeforeLike',
                o.context.featureSwitches.isTrue('rweb_reply_downvote_before_like'),
              ),
              b()(
                p()(o),
                '_reactionsLegacyHeartEnabled',
                o.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              b()(
                p()(o),
                '_reactionsFruitBasketThreshold',
                o.context.featureSwitches.getNumberValue('responsive_web_reactions_fruit_basket_threshold'),
              ),
              b()(p()(o), '_randomSeed', Math.random()),
              b()(p()(o), '_renderReactionsEducation', function () {
                return o.state.showReactionsEducation
                  ? y.a.createElement(it.a, { style: Sn.inlineCallout, text: o._getReactionsEducationText() })
                  : null
              }),
              b()(p()(o), '_getReactionsEducationText', function () {
                var e = o._reactionsLegacyHeartEnabled ? _t.a : bt.a,
                  t = y.a.createElement(e, { accessibilityLabel: Pt })
                return ot.a.isEnabled
                  ? y.a.createElement(T.a.I18NFormatMessage, { $i18n: 'ad2ab554' }, t)
                  : y.a.createElement(T.a.I18NFormatMessage, { $i18n: 'g6a7d832' }, t)
              }),
              b()(p()(o), '_renderDownvoteInlineEducation', function () {
                var e = o.props.tweet
                switch (o.state.showDownvoteEducation) {
                  case En.SURVEY:
                    var t = {
                      label: $t,
                      link: 'https://survey.twitterfeedback.com/survey/selfserve/53b/'
                        .concat('220104', '?subject=')
                        .concat(e.id_str),
                    }
                    return y.a.createElement(it.a, {
                      action: t,
                      onAction: o._handleDownvoteSurveyClick,
                      onClose: function () {
                        o.setState({ showDownvoteEducation: En.NONE })
                      },
                      style: Sn.inlineCallout,
                      text: Zt,
                      type: 'primary',
                      withCloseButton: !0,
                    })
                  case En.EDUCATION:
                    return y.a.createElement(it.a, {
                      Icon: gt.a,
                      headline: en,
                      style: Sn.inlineCallout,
                      text: tn,
                      type: 'primary',
                    })
                  case En.THANKS:
                    return y.a.createElement(it.a, {
                      onClose: function () {
                        o.setState({ showDownvoteEducation: En.NONE })
                      },
                      style: Sn.inlineCallout,
                      text: Yt,
                      type: 'primary',
                      withCloseButton: !0,
                    })
                  case En.NONE:
                  default:
                    return
                }
              }),
              b()(p()(o), '_renderSuperFollowerActionRetweetSubText', function (e) {
                return y.a.createElement(rt.a, null, function (e) {
                  var t = e.windowWidth
                  return at.a.isNarrowScreenWidth(t)
                    ? y.a.createElement(O.b, null, nn)
                    : y.a.createElement(S.a, null, nn)
                })
              }),
              b()(
                p()(o),
                '_renderEngagementNudge',
                Object(Be.a)(function (e, t, n) {
                  if (n && Object(vt.b)(e, n)) {
                    var i = hn,
                      r = vn,
                      a = n.text.text,
                      s = n.landingUrl.url,
                      c = o._handleSetMisinfoActionTaken(e),
                      l = e === vt.a.like ? fn : mn
                    return y.a.createElement(V, {
                      buttonLabel: i,
                      condensedText: r,
                      expanded: t,
                      heading: a,
                      key: 'engagement_nudge',
                      link: s,
                      onPress: c,
                      subheading: l,
                    })
                  }
                  return null
                }),
              ),
              b()(p()(o), '_shouldShowArticleNudge', function () {
                var e,
                  t = o.props,
                  n = t.forwardPivotInfo,
                  i = t.isArticleDomainMatched,
                  r = t.tweet,
                  a = t.wasArticleVisited,
                  s = o.state.articleNudgeFollowed,
                  c = o.context.loggedInUserId,
                  l = r.promoted_content,
                  u =
                    (null === (e = r.retweeted_status) || void 0 === e ? void 0 : e.user.id_str) === c ||
                    r.user.id_str === c
                return o._articleNudgeEnabled && !n && !l && !u && !!i && (!a || s)
              }),
              b()(p()(o), '_shouldShowDownvoteButton', function () {
                var e = o.props,
                  t = e.allowDownvote,
                  n = e.tweet,
                  i = o.context.loggedInUserId,
                  r = st.a.getOriginalTweet(n)
                return (
                  o._downvoteEnabled &&
                  t &&
                  Boolean(r.in_reply_to_status_id_str) &&
                  r.user.id_str !== i &&
                  !r.self_thread &&
                  !n.retweeted_status &&
                  !r.community_id_str &&
                  Boolean(i)
                )
              }),
              b()(p()(o), '_isShowRetweetActionMenuEnabled', function () {
                var e = o.props,
                  t = e.isCommunityMember,
                  n = e.tweet,
                  i = st.a.getOriginalTweet(n)
                return i.retweeted || !o._shouldDisable(i, Ne.a.ShowRetweetActionMenu, t)
              }),
              b()(p()(o), '_handleMenuCancel', function (e) {
                return function () {
                  var t = o.props,
                    n = t.addFlag,
                    i = t.shouldShowArticleNudgeTip,
                    r = t.wasArticleVisited
                  o._scribeMisInfoNudgeAction({ tweetActionName: e, action: 'cancel' })
                  var a = o._shouldShowArticleNudge()
                  a && i && n(ce.b),
                    o._articleNudgeEnabled &&
                      a &&
                      o._scribeArticleNudgeAction({ action: 'cancel', element: r ? 'after_read' : void 0 })
                }
              }),
              b()(p()(o), '_handleSetMisinfoActionTaken', function (e) {
                return function () {
                  var t = o.props,
                    n = t.addToast,
                    i = t.misinfoNudgeActionTaken,
                    r = t.setTweetMisinfoActionTaken,
                    a = t.tweet
                  o._scribeMisInfoNudgeAction({ tweetActionName: e, element: 'read_article', action: 'click' }),
                    i || (r(a.id_str), n({ text: vn }))
                }
              }),
              b()(p()(o), '_handleHideConfirmation', function () {
                o.setState({ showReplyDiscardTweetConfirmation: !1, showRetweetDiscardTweetConfirmation: !1 })
              }),
              b()(p()(o), '_handleCloseEducationPrompt', function () {
                o.setState({ showDisabledActionsEducation: !1 })
              }),
              b()(p()(o), '_handleOpenEducationPrompt', function (e) {
                return function () {
                  o.setState({ showDisabledActionsEducation: !0, disabledAction: e })
                }
              }),
              b()(p()(o), '_scribeArticleNudgeActionsOnRetweet', function () {
                var e = o.props,
                  t = e.isArticleDomainMatched,
                  n = e.wasArticleVisited
                o._articleNudgeEnabled &&
                  (o._scribeArticleNudgeAction({ element: 'check_url', action: t ? 'matched' : 'not_matched' }),
                  t && o._scribeArticleNudgeAction({ element: 'check_url', action: n ? 'visited' : 'not_visited' }),
                  o._shouldShowArticleNudge() && o._scribeArticleNudgeAction({ action: 'impression' }))
              }),
              b()(p()(o), '_defaultToComposerOnRetweetIfEnabled', function () {
                var e = o.props,
                  t = e.history,
                  n = e.isCommunityMember,
                  i = e.promotedContent,
                  r = e.tweet,
                  a = o.context.featureSwitches,
                  s = st.a.getOriginalTweet(r)
                o._shouldDisable(s, Ne.a.QuoteTweet, n) || o._isShowRetweetActionMenuEnabled()
                  ? o.setState({ isQuoteTweetPrioritized: !1 })
                  : a.isTrue('targeted_project_friday_enabled') &&
                    (o.setState({ isQuoteTweetPrioritized: !0 }),
                    o._shouldShowArticleNudge() ||
                      o._shouldMisinfoNudgeForceActionMenu(vt.a.retweet) ||
                      (o._handleQuoteTweet(),
                      t.push({
                        pathname: '/compose/tweet',
                        state: { quotedStatus: st.a.getOriginalTweet(r), promotedContent: i, hasArticleNudge: !1 },
                      })))
              }),
              b()(p()(o), '_handleRetweetPress', function () {
                var e = o.props.misinfoNudgeActionTaken
                if (!o.context.loggedInUserId)
                  return o._scribeAction(ct.a.RETWEET), void o._showLoginSignupSheet(Tt.a.retweet)
                o._scribeMisInfoNudgeAction({
                  tweetActionName: vt.a.retweet,
                  element: e ? 'after_read' : void 0,
                  action: 'impression',
                }),
                  o._scribeArticleNudgeActionsOnRetweet(),
                  o._defaultToComposerOnRetweetIfEnabled()
              }),
              b()(p()(o), '_handleRetweet', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.isArticleDomainMatched,
                  i = e.misinfoNudgeActionTaken,
                  r = e.onRetweet,
                  a = e.promotedContent,
                  s = e.tweet,
                  c = e.wasArticleVisited
                o._scribeAction(ct.a.RETWEET),
                  o._scribeSoftNudgeWithQuoteTweetAction(ct.a.RETWEET),
                  o._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.retweet,
                    element: i ? 'retweet_after_read' : 'retweet',
                    action: 'click',
                  }),
                  o._articleNudgeEnabled &&
                    n &&
                    o._scribeArticleNudgeAction({ element: c ? 'retweet_after_read' : 'retweet', action: 'click' }),
                  o._modRetweets(1),
                  r(s.id_str, { promotedContent: a })
                    .then(function () {
                      o.props.addToast({ ariaOnly: !0, text: Xt })
                    })
                    .catch(function (e) {
                      o._modRetweets(-1), t(Ke.a)(e)
                    })
              }),
              b()(p()(o), '_handleUnretweet', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  i = e.promotedContent,
                  r = e.tweet
                o._scribeAction(ct.a.UNRETWEET),
                  o._modRetweets(-1),
                  n(r.id_str, { promotedContent: i })
                    .then(function () {
                      o.props.addToast({ ariaOnly: !0, text: Qt })
                    })
                    .catch(function (e) {
                      o._modRetweets(1), t(tt.a)(e)
                    })
              }),
              b()(p()(o), '_handleQuoteTweet', function () {
                var e = o.props,
                  t = e.composerHasData,
                  n = e.isArticleDomainMatched,
                  i = e.misinfoNudgeActionTaken,
                  r = e.wasArticleVisited
                o._scribeAction(ct.a.QUOTE),
                  o._scribeSoftNudgeWithQuoteTweetAction(ct.a.QUOTE),
                  o._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.retweet,
                    element: i ? 'retweet_with_comment_after_read' : 'retweet_with_comment',
                    action: 'click',
                  }),
                  o._articleNudgeEnabled &&
                    n &&
                    o._scribeArticleNudgeAction({
                      element: r ? 'retweet_with_comment_after_read' : 'retweet_with_comment',
                      action: 'click',
                    }),
                  t && o.setState({ showRetweetDiscardTweetConfirmation: !0 })
              }),
              b()(p()(o), '_handleConfirmQuoteTweet', function () {
                ;(0, o.props.resetDraft)(), o._handleHideConfirmation()
              }),
              b()(p()(o), '_handleLikeMenuPress', function () {
                var e = o.props.misinfoNudgeActionTaken
                o._scribeMisInfoNudgeAction({
                  tweetActionName: vt.a.like,
                  element: e ? 'after_read' : void 0,
                  action: 'impression',
                })
              }),
              b()(p()(o), '_handleDownvote', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onDownvote,
                  i = e.onUndownvote,
                  r = e.tweet,
                  a = st.a.getOriginalTweet(r),
                  s = !a.isDownvoted
                s
                  ? (a.favorited && o._handleLike(),
                    n(r.id_str)
                      .then(function () {
                        o.props.addToast({ ariaOnly: !0, text: Jt }), o._updateDownvoteEducation(!0)
                      })
                      .catch(function (e) {
                        o._scribe({ element: 'downvote_button', action: 'error' }), t(Fe.a)(e)
                      }))
                  : i(r.id_str)
                      .then(function () {
                        o.props.addToast({ ariaOnly: !0, text: Gt }), o._updateDownvoteEducation(!1)
                      })
                      .catch(function (e) {
                        o._scribe({ element: 'downvote_button', action: 'error' }), t(Fe.a)(e)
                      }),
                  o._scribe({ element: 'reply_voting', action: s ? 'downvote' : 'remove_downvote' })
              }),
              b()(p()(o), '_updateDownvoteEducation', function (e) {
                var t = o.context.featureSwitches,
                  n = o.props,
                  i = n.addFlag,
                  r = n.daysSinceDownvoteEducation,
                  a = n.replyVotingSurveyClicked,
                  s = o.state.showDownvoteEducation,
                  c = t.getNumberValue('rweb_reply_downvote_inline_survey') / 100,
                  l = t.getNumberValue('rweb_reply_downvote_inline_education') / 100,
                  u = t.getNumberValue('rweb_reply_downvote_inline_days'),
                  d = null === r || r >= u,
                  p = d && o._randomSeed < c && !a,
                  f = d && o._randomSeed < l
                e
                  ? d &&
                    (o._scribe({
                      component: 'reply_voting_nux',
                      element: p ? 'survey' : f ? 'privacy' : 'thank_you',
                      action: 'impression',
                    }),
                    i(ce.m, { updateTimestamp: !0 }),
                    o.setState({ showDownvoteEducation: p ? En.SURVEY : f ? En.EDUCATION : En.THANKS }))
                  : s !== En.NONE && o.setState({ showDownvoteEducation: En.NONE })
              }),
              b()(p()(o), '_handleDownvoteSurveyClick', function () {
                var e = o.props.setReplyVotingSurveyClicked
                o._scribe({ component: 'reply_voting_nux', element: 'survey', action: 'click' }),
                  o.setState({ showDownvoteEducation: En.THANKS }),
                  e()
              }),
              b()(p()(o), '_handleLike', function () {
                var e = o.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  i = o.props,
                  r = i.createLocalApiErrorHandler,
                  a = i.loggedInUserFavCount,
                  s = i.misinfoNudgeActionTaken,
                  c = i.onLike,
                  l = i.onLikeSuccess,
                  u = i.onReact,
                  d = i.onUnlike,
                  p = i.onUnreact,
                  f = i.promotedContent,
                  m = i.tweet,
                  h = t.isTrue('responsive_web_reactions_api_test'),
                  v = st.a.getOriginalTweet(m),
                  _ = !v.favorited
                n
                  ? _
                    ? (o._scribeMisInfoNudgeAction({
                        tweetActionName: vt.a.like,
                        element: s ? 'like_after_read' : 'like',
                        action: 'click',
                      }),
                      v.isDownvoted && o._handleDownvote(),
                      o._modLikes(1),
                      (h
                        ? u(m.id_str, { promotedContent: f, reactionType: 'Like' })
                        : c(m.id_str, { promotedContent: f })
                      )
                        .then(function () {
                          a + 1 < t.getNumberValue('focused_timeline_actions_onboarding_likes')
                            ? o.props.addToast({ text: Bt })
                            : o.props.addToast({ ariaOnly: !0, text: Ht }),
                            l && l()
                        })
                        .catch(function (e) {
                          o._modLikes(-1), o._scribe({ element: 'like_button', action: 'error' }), r(Fe.a)(e)
                        }))
                    : (o._modLikes(-1),
                      (h ? p : d)(m.id_str, { promotedContent: f })
                        .then(function () {
                          o.props.addToast({ ariaOnly: !0, text: Kt })
                        })
                        .catch(function (e) {
                          o._modLikes(1), o._scribe({ element: 'like_button', action: 'error' }), r($e)(e)
                        }))
                  : o._showLoginSignupSheet(Tt.a.like),
                  o._scribeAction(_ ? 'favorite' : 'unfavorite'),
                  o._shouldShowDownvoteButton() &&
                    o._scribe({ element: 'reply_voting', action: _ ? 'upvote' : 'remove_upvote' })
              }),
              b()(p()(o), '_handleReact', function (e, t) {
                var n = o.context.loggedInUserId,
                  i = o.props,
                  r = i.addToast,
                  s = i.createLocalApiErrorHandler,
                  c = i.misinfoNudgeActionTaken,
                  l = i.onReact,
                  u = i.onUnreact,
                  d = i.promotedContent,
                  p = i.tweet,
                  f = st.a.getOriginalTweet(p)
                if (f.reacted !== e) {
                  if (
                    (o._scribeAction(e ? 'favorite' : 'unfavorite'),
                    o._shouldShowDownvoteButton() &&
                      o._scribe({ element: 'reply_voting', action: e ? 'upvote' : 'remove_upvote' }),
                    e)
                  )
                    switch ((f.reacted && o._scribe({ element: 'reaction_picker', action: 'change' }), t)) {
                      case 'button-tap':
                        o._scribe({ element: 'reaction_button', action: 'click' }), o._showReactionsEducation()
                        break
                      case 'picker-touchend':
                        o._scribe({ element: 'reaction_picker', action: 'select' }), o._hideReactionsEducation()
                        break
                      case 'picker-tap':
                        o._scribe({ element: 'reaction_picker', action: 'click' }), o._hideReactionsEducation()
                        break
                      case 'keyboard-shortcut':
                        o._scribe({ element: 'reaction_keyboard', action: 'select' }), o._showReactionsEducation()
                    }
                  else
                    o._scribe({ element: 'reaction_button', action: 'undo' }),
                      o.state.showReactionsEducation &&
                        (o.setState(function (e) {
                          return a()(a()({}, e), {}, { showReactionsEducation: !1 })
                        }),
                        (Tn -= 1))
                  n
                    ? e
                      ? (o._scribeMisInfoNudgeAction({
                          tweetActionName: vt.a.like,
                          element: c ? 'like_after_read' : 'like',
                          action: 'click',
                        }),
                        l(p.id_str, { promotedContent: d, reactionType: e })
                          .then(function () {
                            var e = o.state.showReactionsEducation
                            r({ ariaOnly: !0, text: e ? Wt : zt })
                          })
                          .catch(function (e) {
                            o._scribe({ element: 'reaction_button', action: 'error' }), s(He.a)(e)
                          }))
                      : u(p.id_str, { promotedContent: d })
                          .then(function () {
                            r({ ariaOnly: !0, text: qt })
                          })
                          .catch(function (e) {
                            o._scribe({ element: 'reaction_button', action: 'error' }), s(et)(e)
                          })
                    : o._showLoginSignupSheet(Tt.a.react)
                }
              }),
              b()(p()(o), '_handleReactionPopoverOpen', function (e) {
                e === lt.a.longPress
                  ? o._scribe({ element: 'reaction_button', action: 'longpress' })
                  : e === lt.a.hover
                  ? o._scribe({ element: 'reaction_button', action: 'hover' })
                  : (e !== lt.a.force && e !== lt.a.keyboard) ||
                    o._scribe({ element: 'reaction_button', action: 'keyboard' })
              }),
              b()(p()(o), '_showReactionsEducation', function () {
                var e = o.context.loggedInUserId,
                  t = o.props.canShowReactionsEducation
                o._reactionsEnabled &&
                  o.context.featureSwitches.isTrue('responsive_web_reactions_nux_banner') &&
                  (Tn >= 3
                    ? o._hideReactionsEducation()
                    : t &&
                      e &&
                      ((0 !== Tn && 2 !== Tn) ||
                        (o.setState(function (e) {
                          return a()(a()({}, e), {}, { showReactionsEducation: !0 })
                        }),
                        o._scribe({ element: 'reaction_nux', action: 'impression' })),
                      (Tn += 1)))
              }),
              b()(p()(o), '_hideReactionsEducation', function () {
                var e = o.props,
                  t = e.addFlag
                e.canShowReactionsEducation && t(ce.u)
              }),
              b()(p()(o), '_handleBookmarkTweet', function () {
                var e,
                  t = o.props,
                  n = t.createLocalApiErrorHandler,
                  i = t.tweet,
                  r = st.a.getOriginalTweet(i),
                  a = !(
                    null === (e = o.context.userClaims) ||
                    void 0 === e ||
                    !e.isTrueAndEnabled('subscriptions_feature_1002')
                  )
                o.props.onBookmark(r.id_str).then(
                  function () {
                    o.props.addToast({
                      action: {
                        label: a ? rn : on,
                        onAction: a ? o._handleBookmarkTweetToFolder : o._handleViewBookmarks,
                      },
                      text: Mt,
                    })
                  },
                  function (e) {
                    n(J.a)(e), o._scribeAction('bookmark_error')
                  },
                ),
                  o._scribeAction('bookmark')
              }),
              b()(p()(o), '_handleUnBookmarkFromFolder', function () {
                var e = o.props,
                  t = e.bookmarkFolderId,
                  n = e.bookmarkFolderName,
                  i = e.createLocalApiErrorHandler,
                  r = e.removeTweetFromBookmarkFolder,
                  a = e.tweet,
                  s = st.a.getOriginalTweet(a)
                t &&
                  r(t, { tweetId: s.id_str }).then(
                    function () {
                      o._scribe({ component: 'bookmark_folder', element: 'remove', action: 'success' }),
                        o.props.addToast({ text: Ut({ bookmarkFolderName: n }) })
                    },
                    function (e) {
                      i(J.a)(e), o._scribe({ component: 'bookmark_folder', element: 'remove', action: 'error' })
                    },
                  )
              }),
              b()(p()(o), '_handleBookmarkTweetToFolder', function () {
                var e = o.props,
                  t = e.onBookmark,
                  n = e.tweet,
                  i = st.a.getOriginalTweet(n)
                t(i.id_str),
                  o.props.history.push({ pathname: '/i/bookmarks/add', state: { tweet_id: i.id_str } }),
                  o._scribe({ element: 'add_to_folder', action: 'click' })
              }),
              b()(p()(o), '_handleUnbookmarkTweet', function () {
                var e = o.props,
                  t = e.bookmarkFolderId,
                  n = e.createLocalApiErrorHandler,
                  i = e.tweet,
                  r = o.context.loggedInUserId,
                  a = st.a.getOriginalTweet(i)
                o.props.onUnbookmark(a.id_str).then(
                  function () {
                    o.props.removeTweetsFromBookmarksTimeline(b()({}, a.id_str, !0)),
                      t && r && o.props.removeTweetFromBookmarkFolderTimeline(t, a.id_str, r),
                      o.props.addToast({ text: Vt })
                  },
                  function (e) {
                    n(Ze)(e), o._scribeAction('unbookmark_error')
                  },
                ),
                  o._scribeAction('unbookmark')
              }),
              b()(p()(o), '_handleViewBookmarks', function () {
                o.props.history.push({ pathname: '/i/bookmarks' })
              }),
              b()(p()(o), '_handleAnalyticsPress', function () {
                o._scribeAction('analytics')
              }),
              b()(p()(o), '_handleReplyPress', function () {
                var e = o.props.onReplyPress
                o._showReplyComposer(), e && e()
              }),
              b()(p()(o), '_showReplyComposer', function () {
                var e = o.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  i = o.props,
                  r = i.history,
                  a = i.promotedContent,
                  s = i.tweet
                o._scribeAction('reply'),
                  n
                    ? t.isTrue('rweb_reply_button_to_conversation_screen')
                      ? r.push({ state: { focusComposer: !0, promotedContent: a }, pathname: s.permalink })
                      : r.push({
                          state: {
                            inReplyToStatusId: s.id_str,
                            isSelfThreadReply: Object(je.c)({ tweet: s, loggedInUserId: n }),
                            promotedContent: a,
                          },
                          pathname: '/compose/tweet',
                        })
                    : o._showLoginSignupSheet(Tt.a.reply)
              }),
              b()(p()(o), '_handleConfirmReplyTweet', function () {
                ;(0, o.props.resetDraft)(), o._handleHideConfirmation(), o._showReplyComposer()
              }),
              b()(p()(o), '_handleDMShare', function () {
                var e = o.context.loggedInUserId,
                  t = o.props,
                  n = t.history,
                  i = t.misinfoNudgeActionTaken,
                  r = t.tweet
                o._scribeAction('share_via_dm'),
                  o._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.share,
                    element: i ? 'share_tweet_after_read' : 'share_tweet',
                    action: 'click',
                  }),
                  e
                    ? n.push({ state: { tweetAttachment: st.a.getOriginalTweet(r) }, pathname: '/messages/compose' })
                    : o._showLoginSignupSheet(Tt.a.dmshare)
              }),
              b()(p()(o), '_handleCopyLink', function () {
                var e = o.props,
                  t = e.misinfoNudgeActionTaken,
                  n = e.sessionToken
                Y.a.setString(Object(Me.a)(o.props.tweet.permalink, n)),
                  o.props.addToast({ text: an }),
                  o._scribeAction('copy_link'),
                  o._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.share,
                    element: t ? 'share_tweet_after_read' : 'share_tweet',
                    action: 'click',
                  })
              }),
              b()(p()(o), '_handleSharePress', function () {
                var e = o.props.misinfoNudgeActionTaken
                o._scribeAction('share_menu_click'),
                  o._scribeMisInfoNudgeAction({
                    tweetActionName: vt.a.share,
                    element: e ? 'after_read' : void 0,
                    action: 'impression',
                  })
              }),
              b()(p()(o), '_handleShare', function () {
                var e,
                  t,
                  n = o.props,
                  i = n.misinfoNudgeActionTaken,
                  r = n.sessionToken,
                  a = n.tweet,
                  s = st.a.getOriginalTweet(a),
                  c = o.context.featureSwitches.isTrue('responsive_web_share_only_tweet_url_omit_title_and_text'),
                  l = Object(Me.a)(s.permalink, r),
                  u = Dt({ fullName: s.user.name, screenName: s.user.screen_name }),
                  d = jt({
                    fullName: s.user.name,
                    screenName: s.user.screen_name,
                    tweet: ((e = s.text), (t = document.createElement('textarea')), (t.innerHTML = e), t.value),
                  }),
                  p = c ? { url: l } : { title: u, text: d, url: l }
                navigator
                  .share(p)
                  .then(function () {
                    o._scribeAction('share'),
                      o._scribeMisInfoNudgeAction({
                        tweetActionName: vt.a.share,
                        element: i ? 'share_tweet_after_read' : 'share_tweet',
                        action: 'click',
                      })
                  })
                  .catch(function () {
                    o._scribeAction('share_error')
                  })
              }),
              b()(p()(o), '_replyWrapper', function (e) {
                var t = e.children,
                  n = o.props,
                  i = n.displayStyle,
                  r = n.tweet,
                  a = st.a.getOriginalTweet(r)
                if ('limited_replies' !== a.limited_actions || !a.conversation_control) return t
                var s = 'block' !== i,
                  c = a.conversation_control.policy,
                  l = a.conversation_control.conversation_owner.screen_name,
                  u = ut.a.getEducationType(c, !1)
                return u
                  ? y.a.createElement(
                      Ye,
                      {
                        screenName: l,
                        scribeElement: 'disabled_reply',
                        style: Sn.conversationControlsAnchor,
                        tweetPermalink: s ? a.permalink : void 0,
                        type: u,
                      },
                      t,
                    )
                  : null
              }),
              b()(p()(o), '_handleCloseLoginSignupSheet', function () {
                o.setState({ showLoginSignupSheet: !1 })
              }),
              b()(p()(o), '_handleArticleClicked', function () {
                var e,
                  t = o.props,
                  n = t.setArticlesVisited,
                  i = t.tweet,
                  r = null == i || null === (e = i.card) || void 0 === e ? void 0 : e.url
                r &&
                  (n(r),
                  o._scribeArticleNudgeAction({ element: 'read_article', action: 'click' }),
                  o.setState({ articleNudgeFollowed: !0 }))
              }),
              b()(
                p()(o),
                '_getShareMenuActionItems',
                Object(Be.a)(function (e, t, n, i) {
                  var r,
                    a = o.context.loggedInUserId,
                    s = e.retweeted_status || e,
                    c = s.user,
                    l = !(
                      null === (r = o.context.userClaims) ||
                      void 0 === r ||
                      !r.isTrueAndEnabled('subscriptions_feature_1002')
                    ),
                    u = []
                  return (
                    !c.protected && !o._shouldDisable(e, Ne.a.SendViaDM) && u.push(o._getDmShareAction()),
                    a &&
                      (n || s.isBookmarked
                        ? (u.push(o._getUnbookmarkTweetAction()), i && u.push(o._getUnBookmarkTweetFromFolderAction()))
                        : o._shouldDisable(e, Ne.a.AddToBookmarks) || u.push(o._getBookmarkTweetAction())),
                    a && l && u.push(o._getBookmarkTweetToFolderAction()),
                    !c.protected &&
                      G.canUseDOM &&
                      Y.a.isAvailable() &&
                      !o._shouldDisable(e, Ne.a.ShareTweetVia) &&
                      u.push(o._getCopyLinkAction(t)),
                    !c.protected &&
                      !o._shouldDisable(e, Ne.a.ShareTweetVia) &&
                      o._shareSupported &&
                      u.push(o._getShareAction(t)),
                    u
                  )
                }),
              ),
              b()(
                p()(o),
                '_getShareAction',
                Object(Be.a)(function (e) {
                  return { behavioralEventContext: yn, text: e ? Rt : Lt, onClick: o._handleShare, Icon: dt.a }
                }),
              ),
              b()(
                p()(o),
                '_getBookmarkTweetAction',
                Object(Be.a)(function () {
                  return { behavioralEventContext: Cn(!0), text: At, onClick: o._handleBookmarkTweet, Icon: yt.a }
                }),
              ),
              b()(
                p()(o),
                '_getBookmarkTweetToFolderAction',
                Object(Be.a)(function () {
                  return {
                    behavioralEventContext: Cn(!0),
                    text: St,
                    onClick: o._handleBookmarkTweetToFolder,
                    Icon: wt.a,
                  }
                }),
              ),
              b()(
                p()(o),
                '_getUnBookmarkTweetFromFolderAction',
                Object(Be.a)(function () {
                  return {
                    behavioralEventContext: Cn(!1),
                    text: Ft,
                    onClick: o._handleUnBookmarkFromFolder,
                    Icon: kt.a,
                  }
                }),
              ),
              b()(
                p()(o),
                '_getUnbookmarkTweetAction',
                Object(Be.a)(function () {
                  return { behavioralEventContext: Cn(!1), text: xt, onClick: o._handleUnbookmarkTweet, Icon: kt.a }
                }),
              ),
              b()(
                p()(o),
                '_getDmShareAction',
                Object(Be.a)(function () {
                  return { behavioralEventContext: wn, text: Nt, onClick: o._handleDMShare, Icon: Ct.a }
                }),
              ),
              b()(
                p()(o),
                '_getCopyLinkAction',
                Object(Be.a)(function (e) {
                  return { behavioralEventContext: kn, text: e ? It : Ot, onClick: o._handleCopyLink, Icon: Et.a }
                }),
              ),
              b()(
                p()(o),
                '_getRetweetWithCommentLink',
                Object(Be.a)(function (e, t, n) {
                  return {
                    pathname: '/compose/tweet',
                    state: { quotedStatus: e, promotedContent: t, hasArticleNudge: n },
                  }
                }),
              ),
              b()(p()(o), '_showLoginSignupSheet', function (e) {
                o.setState({ showLoginSignupSheet: !0, loginSignupSheetDisplayMode: e })
              }),
              b()(p()(o), '_modLikes', function (e) {
                var t = o.props,
                  n = t.liveCounts,
                  i = t.tweet,
                  r = t.updateLiveCounts
                n.likeCount && r({ tweetId: i.id_str, liveCounts: { likeCount: n.likeCount + e } })
              }),
              b()(p()(o), '_modRetweets', function (e) {
                var t = o.props,
                  n = t.liveCounts,
                  i = t.tweet,
                  r = t.updateLiveCounts
                n.retweetCount && r({ tweetId: i.id_str, liveCounts: { retweetCount: n.retweetCount + e } })
              }),
              b()(p()(o), '_handleLivePipelineUpdate', function (e) {
                var t = e.tweet_engagement,
                  n = t.like_count,
                  i = t.quote_count,
                  r = t.reply_count,
                  s = t.retweet_count,
                  c = o.props,
                  l = c.liveCounts,
                  u = c.updateLiveCounts,
                  d = a()({}, l)
                n && (d.likeCount = Math.max(l.likeCount || 0, parseInt(n, 10))),
                  i && (d.quoteCount = Math.max(l.quoteCount || 0, parseInt(i, 10))),
                  s && (d.retweetCount = Math.max(l.retweetCount || 0, parseInt(s, 10))),
                  r && (d.replyCount = Math.max(l.replyCount || 0, parseInt(r, 10))),
                  u({ tweetId: o.props.tweet.id_str, liveCounts: d })
              }),
              b()(p()(o), '_saveStateCounts', function () {
                var e = o.props,
                  t = e.liveCounts,
                  n = e.tweet.id_str,
                  i = e.updateCounts,
                  r = t.likeCount,
                  a = t.replyCount,
                  s = t.retweetCount
                ;(r || s || a) && i(n, t)
              }),
              (o.state = {
                articleNudgeFollowed: !1,
                disabledAction: void 0,
                isQuoteTweetPrioritized: !1,
                loginSignupSheetDisplayMode: void 0,
                showDownvoteEducation: En.NONE,
                showReactionsEducation: !1,
                showLoginSignupSheet: !1,
                showReplyDiscardTweetConfirmation: !1,
                showRetweetDiscardTweetConfirmation: !1,
                showDisabledActionsEducation: !1,
              }),
              (o._shareSupported = G.canUseDOM && void 0 !== window.navigator.share),
              o
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
                    r = t.bookmarkFolderId,
                    a = t.color,
                    s = t.composerHasData,
                    c = t.displayStyle,
                    l = t.enableKeyboardShortcuts,
                    u = t.forwardPivotInfo,
                    d = t.isCommunityMember,
                    p = t.likeActionIconContainerRef,
                    f = t.likeTransitionAnimation,
                    m = t.liveCounts,
                    h = t.misinfoNudgeActionTaken,
                    v = t.nativeID,
                    _ = t.promotedContent,
                    g = t.style,
                    w = t.tweet,
                    k = t.withActionsDisabled,
                    C = t.withAnalyticsAction,
                    E = t.withCount,
                    T = t.withRemoveFromBookmarks,
                    A = this.context.loggedInUserId,
                    S = this.state,
                    O = S.disabledAction,
                    I = S.isQuoteTweetPrioritized,
                    N = S.showDisabledActionsEducation,
                    x = S.showLoginSignupSheet,
                    P = S.showReplyDiscardTweetConfirmation,
                    R = S.showRetweetDiscardTweetConfirmation,
                    L = st.a.getOriginalTweet(w),
                    D = this._getRetweetWithCommentLink(L, _, this._shouldShowArticleNudge()),
                    j = this._shouldDisable(L, Ne.a.Analytics, d),
                    M = this._shouldDisable(L, Ne.a.Reply, d),
                    V = !L.favorited && this._shouldDisable(L, Ne.a.Like, d),
                    F = !L.reacted && this._shouldDisable(L, Ne.a.Like, d),
                    U = this._shouldDisable(L, Ne.a.Retweet, d),
                    B = !L.isDownvoted && this._shouldDisable(L, Ne.a.Downvote, d),
                    H = this._shouldDisable(L, Ne.a.QuoteTweet, d),
                    K = M && 'limited_replies' === L.limited_actions,
                    z = this._getShareMenuActionItems(w, _, T, r),
                    W = z.length < 1,
                    q = W && 'non_compliant' === L.limited_actions,
                    X = this._shouldMisinfoNudgeForceActionMenu(vt.a.like) && !L.favorited,
                    Q = b()({}, Ve.e.bookmark, T ? this._handleUnbookmarkTweet : this._handleBookmarkTweet),
                    J = U || I,
                    G = !!A && (!I || X || this._shouldShowArticleNudge())
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(pt.a, { enabled: l, handlers: Q }),
                    y.a.createElement(ft.a, {
                      actionSize: n,
                      activeColor: i,
                      color: a,
                      displayStyle: c,
                      downvoteCount: 0,
                      enableKeyboardShortcuts: l,
                      isDisabled: k,
                      isDownvoted: L.isDownvoted,
                      isFromProtectedAccount: L.user.protected && L.user.id_str !== A,
                      isLiked: L.favorited,
                      isRetweeted: L.retweeted,
                      likeCount: m.likeCount || L.favorite_count,
                      nativeID: v,
                      reaction: L.reacted,
                      reactionCounts: L.reaction_count,
                      renderAnalyticsAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionAnalytics,
                          o()({}, t, {
                            isFaded: j,
                            onPress: j ? e._handleOpenEducationPrompt(Ne.a.Analytics) : e._handleAnalyticsPress,
                          }),
                        )
                      },
                      renderDownvoteAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionDownvote,
                          o()({}, t, {
                            downvoteTransitionAnimation:
                              'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
                            isFaded: B,
                            onPress: B ? e._handleOpenEducationPrompt(Ne.a.Downvote) : e._handleDownvote,
                            style: (m.likeCount || L.favorite_count || 0) > 0 && E ? Sn.reduceDownvotePadding : void 0,
                            testIDs: { downvote: We.a.downvote, undownvote: We.a.undownvote },
                          }),
                        )
                      },
                      renderLikeAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionLike,
                          o()({}, t, {
                            actionMenuDescription: e._renderEngagementNudge(vt.a.like, !h, u),
                            enableActionMenu: !V && X,
                            isFaded: V,
                            likeActionIconContainerRef: p,
                            likeTransitionAnimation: f,
                            onLikeActionSelect: e._handleLike,
                            onMenuCancel: e._handleMenuCancel(vt.a.like),
                            onPress: V
                              ? e._handleOpenEducationPrompt(Ne.a.Like)
                              : X
                              ? e._handleLikeMenuPress
                              : e._handleLike,
                            testIDs: { like: We.a.like, unlike: We.a.unlike },
                          }),
                        )
                      },
                      renderReactionAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionReaction,
                          o()({}, t, {
                            experimentalFruitBasketThreshold: e._reactionsFruitBasketThreshold,
                            isFaded: F,
                            legacyHeart: e._reactionsLegacyHeartEnabled,
                            onPopoverOpen: function (n) {
                              var i
                              null === (i = t.onPopoverOpen) || void 0 === i || i.call(t, n),
                                e._handleReactionPopoverOpen(n)
                            },
                            onReactionSelect: F ? e._handleOpenEducationPrompt(Ne.a.React) : e._handleReact,
                            testIDs: { react: We.a.react, unreact: We.a.unreact },
                            withFruitBasket: E,
                          }),
                        )
                      },
                      renderReplyAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionReply,
                          o()({}, t, {
                            isFaded: M,
                            onPress: M ? e._handleOpenEducationPrompt(Ne.a.Reply) : e._handleReplyPress,
                            renderWrapper: K ? e._replyWrapper : void 0,
                            testID: We.a.reply,
                          }),
                        )
                      },
                      renderRetweetAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionRetweet,
                          o()({}, t, {
                            actionMenuDescription:
                              u && Object(vt.b)(vt.a.retweet, u)
                                ? e._renderEngagementNudge(vt.a.retweet, !h, u)
                                : e._renderArticleNudge(),
                            activeColor: null != L && L.exclusivity_info ? 'plum500' : void 0,
                            enableActionMenu: G,
                            excludeRetweetAction: J,
                            excludeRetweetWithCommentAction: H,
                            isDisabled: t.isDisabled || (!G && U) || (G && U && H),
                            onMenuCancel: e._handleMenuCancel(vt.a.retweet),
                            onPress: e._handleRetweetPress,
                            onQuoteTweetActionSelect: e._handleQuoteTweet,
                            onRetweetActionSelect: e._handleRetweet,
                            onUnretweetActionSelect: e._handleUnretweet,
                            retweetActionSubText:
                              null != L && L.exclusivity_info
                                ? e._renderSuperFollowerActionRetweetSubText(L.exclusivity_info.screen_name)
                                : void 0,
                            retweetWithCommentLink: s ? void 0 : D,
                            testIDs: {
                              retweet: We.a.retweet,
                              retweetConfirm: We.a.retweetConfirm,
                              unretweet: We.a.unretweet,
                              unretweetConfirm: We.a.unretweetConfirm,
                            },
                          }),
                        )
                      },
                      renderShareAction: function (t) {
                        return y.a.createElement(
                          ft.a.ActionShare,
                          o()({}, t, {
                            actionItems: z,
                            actionMenuDescription: e._renderEngagementNudge(vt.a.share, !h, u),
                            isDisabled: W && !q,
                            isFaded: q,
                            onMenuCancel: e._handleMenuCancel(vt.a.share),
                            onPress: q ? e._handleOpenEducationPrompt(Ne.a.Share) : e._handleSharePress,
                          }),
                        )
                      },
                      replyCount: m.replyCount || L.reply_count,
                      retweetCount: (m.quoteCount || L.quote_count || 0) + (m.retweetCount || L.retweet_count),
                      showDownvoteBeforeLike: this._showDownvoteBeforeLike,
                      style: g,
                      tweetLink: L.permalink,
                      withAnalytics: L.user.id_str === A && !!C,
                      withCount: E,
                      withDownvote: this._shouldShowDownvoteButton(),
                      withReaction: this._reactionsEnabled,
                    }),
                    x
                      ? y.a.createElement(Ue.a, {
                          displayMode: this.state.loginSignupSheetDisplayMode,
                          onClose: this._handleCloseLoginSignupSheet,
                          tweetId: L.id_str,
                          userFullName: L.user.name,
                          userId: L.user.id_str,
                        })
                      : null,
                    P
                      ? y.a.createElement(mt.a, {
                          confirmButtonLabel: dn,
                          confirmButtonType: 'destructiveFilled',
                          headline: sn,
                          onCancel: this._handleHideConfirmation,
                          onConfirm: this._handleConfirmReplyTweet,
                          text: ln,
                        })
                      : null,
                    R
                      ? y.a.createElement(mt.a, {
                          confirmButtonLabel: pn,
                          confirmButtonLink: {
                            pathname: '/compose/tweet',
                            state: { quotedStatus: L, promotedContent: _ },
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
                    N && O && w.limited_actions
                      ? y.a.createElement(De, {
                          actionType: O,
                          limitedActionsConfig: w.limited_actions,
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
                    o = this.state.articleNudgeFollowed,
                    r = null == i || null === (e = i.card) || void 0 === e ? void 0 : e.url
                  return this._shouldShowArticleNudge()
                    ? y.a.createElement(Q, {
                        articleNudgeFollowed: o,
                        key: 'article-nudge',
                        link: r,
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
                    o = n.promotedContent,
                    r = n.tweet,
                    s = t ? e.action : ''.concat(e.action, '_attempt'),
                    c = i.contextualScribeData,
                    l = c && c.items ? c : a()(a()({}, c || {}), {}, { items: [ze.a.getTweetItem(r, o)] })
                  i.scribe(a()(a()({}, e), {}, { action: s, data: l }))
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this._scribe({ action: e })
                },
              },
              {
                key: '_scribeSoftNudgeWithQuoteTweetAction',
                value: function (e) {
                  'soft_nudge_with_quote_tweet' === this.props.tweet.limited_actions &&
                    this._scribe(a()(a()({}, gn), {}, { action: e }))
                },
              },
              {
                key: '_scribeMisInfoNudgeAction',
                value: function (e) {
                  var t = e.action,
                    n = e.element,
                    i = e.tweetActionName,
                    o = this.props,
                    r = o.analytics,
                    s = o.forwardPivotInfo
                  Object(vt.b)(i, s) && r.scribe(a()(a()({}, _n), {}, { element: n, action: t }))
                },
              },
              {
                key: '_scribeArticleNudgeAction',
                value: function (e) {
                  var t = e.action,
                    n = e.element,
                    i = this.props,
                    o = i.analytics,
                    r = i.tweet
                  if (this._articleNudgeEnabled) {
                    var s,
                      c = {
                        items: [
                          {
                            token: null == r || null === (s = r.card) || void 0 === s ? void 0 : s.url,
                            retweeting_tweet_id: r.id_str,
                          },
                        ],
                      }
                    o.scribe(a()(a()({}, bn), {}, { element: n, action: t, data: c }))
                  }
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
                    o = st.a.getOriginalTweet(i)
                  if (this.context.loggedInUserId)
                    return Object(w.h)().then(function (t) {
                      var i = t.LivePipeline
                      !n &&
                        i.isSupportedAndReady(e.context.featureSwitches) &&
                        e.context.featureSwitches.isTrue('livepipeline_tweetengagement_enabled') &&
                        !e._livePipelineSubscription &&
                        (e._livePipelineSubscription =
                          i &&
                          i.get().subscribeTopic('/tweet_engagement/'.concat(o.id_str), e._handleLivePipelineUpdate))
                    })
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      b()(An, 'contextType', ht.a),
        b()(An, 'defaultProps', {
          actionSize: 'normal',
          color: 'gray700',
          displayStyle: 'inline',
          enableKeyboardShortcuts: !1,
          liveCounts: { replyCount: void 0, likeCount: void 0, retweetCount: void 0 },
          withCount: !1,
          withRemoveFromBookmarks: !1,
        })
      t.a = Object(nt.a)(Object(Ie.a)()(Oe(An)))
      var Sn = P.a.create(function (e) {
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
        o = n.n(i),
        r = n('ERkP'),
        a = n.n(r),
        s = n('Lsrn'),
        c = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
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
