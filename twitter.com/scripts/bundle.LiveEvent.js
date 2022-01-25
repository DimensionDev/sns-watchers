;(window.webpackJsonp = window.webpackJsonp || []).push([
  [59, 166],
  {
    '0GAP': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y'), n('hBvt')
      var r = n('ERkP'),
        i = n('TIdA'),
        a = n('t62R'),
        o = n('A91F'),
        c = n('IJsT'),
        l = n('rHpw'),
        s = n('MWbm'),
        u = l.a.create(function (e) {
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
          l = e.description,
          d = e.image,
          m = e.imageOverlayText,
          p = e.link,
          f = e.onClick,
          h = e.previousPrice,
          v = e.price,
          b = e.title,
          y = m
            ? r.createElement(a.b, { color: 'gray1100', size: 'subtext3', style: u.imageOverlay, weight: 'bold' }, m)
            : null,
          g = r.createElement(
            r.Fragment,
            null,
            r.createElement(i.a, { accessibilityLabel: t, aspectMode: o.a.SQUARE, image: d }),
            r.createElement(s.a, { style: u.imageColorOverlay }),
            y,
          ),
          _ = h
            ? r.createElement(a.b, { color: 'gray700', numberOfLines: 1, style: u.previousPrice, weight: 'normal' }, h)
            : null,
          O = v ? r.createElement(a.b, { numberOfLines: 1, size: 'subtext2', style: u.price }, v, _) : null,
          E = r.createElement(
            r.Fragment,
            null,
            r.createElement(a.b, { numberOfLines: 1, style: u.title, weight: 'bold' }, b),
            r.createElement(a.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: u.description }, l),
            O,
          )
        return r.createElement(c.a, {
          accessibilityLabel: t,
          containerStyle: [u.root, n],
          link: p,
          lower: E,
          onClick: f,
          stackLayoutUpperStyle: u.upper,
          upper: g,
          withInteractiveStyling: !0,
        })
      }
    },
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      }),
        n.d(t, 'b', function () {
          return m
        }),
        n.d(t, 'c', function () {
          return p
        })
      n('ho0z'), n('uFXj')
      var r = n('ERkP'),
        i = n('MWbm'),
        a = n('GcQN'),
        o = n('PU7B'),
        c = n('/WPq'),
        l = n('78ol'),
        s = n('jV+4'),
        u = n('rHpw'),
        d = function (e) {
          var t = e.author,
            n = e.color,
            i = void 0 === n ? 'normal' : n,
            a = e.size,
            o = void 0 === a ? 'subtext2' : a,
            c = e.style,
            l = e.withHoverCard,
            u = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            h = void 0 !== p && p
          return r.createElement(s.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: i,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [f.authorUserName, c],
            withHoverCard: u,
            withLink: m,
            withScreenName: h,
          })
        },
        m = function (e) {
          var t = e.style
          return r.createElement(
            i.a,
            { style: [f.lightningBadge, t] },
            r.createElement(a.a, { style: f.lightningIcon }),
          )
        },
        p = function (e) {
          var t = e.icon
          return r.createElement(
            i.a,
            { style: f.placeholderIconContainer },
            'news' === t
              ? r.createElement(o.a, { style: f.placeholderIcon })
              : 'lists' === t
              ? r.createElement(c.a, { style: f.placeholderIcon })
              : r.createElement(l.a, { style: f.placeholderIcon }),
          )
        },
        f = u.a.create(function (e) {
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
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r)
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var c = o(o({}, n('7n04').a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = c
    },
    '3GUV': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        m = n.n(d),
        p = n('ERkP'),
        f = n('rHpw'),
        h = n('MWbm')
      function v(e) {
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
            r = m()(e)
          if (t) {
            var i = m()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var b = (function (e) {
          l()(n, e)
          var t = v(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.createElement(h.a, { style: y.root })
                },
              },
            ]),
            n
          )
        })(p.Component),
        y = f.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = b
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        m = n.n(d),
        p = n('ERkP'),
        f = n('3XMw'),
        h = n.n(f),
        v = n('rHpw'),
        b = n('+/1j'),
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
            r = m()(e)
          if (t) {
            var i = m()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var _ = h.a.e5b0063d,
        O = 0,
        E = (function (e) {
          l()(n, e)
          var t = g(n)
          function n() {
            var e
            return i()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(O)), (O += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = _({ title: n })
                  return p.createElement(
                    y.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.createElement(
                      b.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: v.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.createElement(y.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component)
      t.a = E
    },
    '7sPD': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LiveEventScreen', function () {
          return Te
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        m = n.n(d),
        p = n('AuHH'),
        f = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        b = (n('2G9S'), n('hBpG'), n('1t7P'), n('jQ/y'), n('ERkP')),
        y = n('k49u'),
        g = n('zI2C'),
        _ = n('6/RC'),
        O = n('es0u'),
        E = (n('WNMA'), n('KqXw'), n('MvUL'), n('5BYb'), n('ho0z'), n('zh9S')),
        I = n('hqKg'),
        w = n('kGix'),
        P = n('RrqW'),
        C = function (e, t, n) {
          return { isFullPageInterstitial: e, type: t, screenName: n }
        },
        k = function (e) {
          var t = e.isBlockedBy,
            n = void 0 !== t && t,
            r = e.isBlocking,
            i = void 0 !== r && r,
            a = e.isSensitive,
            o = void 0 !== a && a,
            c = e.screenName,
            l = []
          return (
            n
              ? l.push(C(!0, P.a.BLOCKED_BY, c))
              : (i && l.push(C(!0, P.a.BLOCKED, c)), o && l.push(C(!1, P.a.SENSITIVE))),
            l.length ? l : void 0
          )
        },
        S = n('lPpt'),
        D = n('tn7R'),
        x = n('wrlS'),
        j = n('G6rE'),
        R = n('0KEI'),
        A = n('zlxh'),
        T = n('oEGd')
      function L(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = function (e, t) {
          return t.match.params.eventId
        },
        N = function (e) {
          return B({}, e ? { loggedInUserAvatarURI: e.profile_image_url_https, loggedInUserName: e.name } : null)
        },
        F = Object(I.createSelector)(
          M,
          function (e, t) {
            return S.a.select(e, M(0, t))
          },
          function (e, t) {
            var n = ((S.a.selectErrors(e) || {})[M(0, t)] || {}).errors,
              r = (void 0 === n ? [] : n).find(function (e) {
                return e.code === y.a.BlockedUserError
              })
            return r && r.message && r.message.replace('@', '')
          },
          function (e, t) {
            return S.a.selectFetchStatus(e, M(0, t))
          },
          function (e, t) {
            var n
            return [].concat(null === (n = t.location.query) || void 0 === n ? void 0 : n.timeline)[0]
          },
          function (e, t) {
            var n
            return null === (n = t.location.state) || void 0 === n ? void 0 : n.promotedCardState
          },
          j.e.selectLoggedInUser,
          function (e, t) {
            return S.a.selectIsTOO(e, M(0, t))
          },
          x.d,
          function (e, t, n, r, i, a, o, c, l) {
            var s = (function (e, t, n, r) {
              return B(
                {
                  liveEventDetails: { eventId: e },
                  fetchStatus: t ? w.a.LOADED : n,
                  refreshStatus: n,
                  timelineDetails: {
                    composeDetails: { defaultText: '' },
                    eventId: e,
                    timelineId: A.b,
                    timelineIndex: 0,
                    timelineLinks: [],
                  },
                  interstitialOrderToDisplay: t ? k({ isBlockedBy: !0, screenName: t }) : void 0,
                  isTOO: !1,
                  isUserSuspended: !1,
                },
                N(r),
              )
            })(e, n, r, o)
            if (!t) return s
            var u = Object(A.o)(t),
              d = Object(A.i)(t, u, a),
              m = Object(A.k)(e, t),
              p = Object(A.n)(t),
              f = Object(A.r)(e, t, i, l),
              h = (function (e) {
                var t = e || {},
                  n = t.liveEventDetails,
                  r = void 0 === n ? {} : n,
                  i = t.users,
                  a = r.attribution_user_id
                return (
                  !!a &&
                  !Object(D.a)(i || {}).some(function (e) {
                    return e.id_str === a
                  })
                )
              })(t),
              v = m.author || {},
              b = v.blocked_by,
              y = v.blocking,
              g = v.screen_name,
              _ = t.liveEventDetails.sensitive,
              O = k({ isBlockedBy: b, isBlocking: y, isSensitive: _, screenName: g })
            return B(
              B(B({}, s), N(o)),
              {},
              {
                liveEventDetails: m,
                fetchStatus: t ? w.a.LOADED : r,
                refreshStatus: r,
                interstitialOrderToDisplay: O,
                isTOO: c,
                isUserSuspended: h,
                serverPollingIntervalSeconds: p,
                scoreData: u,
                carousel: d.length > 0 ? d : void 0,
                timelineDetails: f,
              },
            )
          },
        ),
        H = {
          createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)('LIVE_EVENT_SCREEN'),
          fetchLiveEvent: S.a.fetchOne,
          googleAnalyticsPageView: E.a,
          remindMeButtonSubscribe: S.a.subscribe,
          remindMeButtonUnsubscribe: S.a.unSubscribe,
          scribeAction: E.c,
          scribePageImpression: E.d,
        },
        U = Object(T.g)(F, H),
        V = n('E4zi'),
        z = n('muX9'),
        W = function (e) {
          var t,
            n = e.liveEventDetails,
            r = e.slate,
            i = n.category,
            a = n.description,
            o = n.eventId,
            c = n.timeString,
            l = n.title,
            s = null == r || null === (t = r.image) || void 0 === t ? void 0 : t.url,
            u = n.author ? Object(V.a)(n.author) : null,
            d = JSON.stringify(
              {
                '@context': 'http://schema.org',
                '@type': 'NewsArticle',
                name: l,
                description: a,
                genre: i,
                identifier: o,
                datePublished: c,
                author: u,
                image: s,
              },
              null,
              2,
            )
          return b.createElement(z.a, { script: [{ type: 'application/ld+json', innerHTML: d }] })
        },
        G = (n('yH/f'), n('z84I'), n('/Ikv')),
        Y = n('BcsE'),
        q = function (e) {
          var t = e.content,
            n = e.name
          return t || Object(Y.a)(t) ? b.createElement('meta', { content: t, key: n, name: n }) : null
        },
        X = Object.freeze({ broadcast: 'broadcast', video: 'video', image: 'image' }),
        K = function (e) {
          var t = e.carousel,
            n = e.liveEventDetails,
            r = e.timelineDetails,
            i = n.description,
            a = n.eventId,
            o = n.title,
            c = r.timelineId,
            l = t[Object(A.q)(t)],
            s = (l || {}).slate,
            u = (function (e) {
              var t,
                n = e.carouselItemInfo.type
              return (
                n === A.e.LIVE_BROADCAST || n === A.e.REPLAY_BROADCAST
                  ? (t = X.broadcast)
                  : n === A.e.VOD || n === A.e.GIF
                  ? (t = X.video)
                  : n === A.e.SLATE && (t = X.image),
                t
              )
            })(l)
          return o && i && s
            ? b.createElement(
                z.a,
                null,
                (function (e, t, n, r, i) {
                  return [
                    { name: 'twitter:card', content: G.a.CardNames.LIVE_EVENT },
                    { name: 'twitter:text:event_id', content: n },
                    { name: 'twitter:text:event_title', content: e },
                    { name: 'twitter:text:event_subtitle', content: t },
                    { name: 'twitter:text:event_timeline_id', content: i },
                    { name: 'twitter:image:event_thumbnail:src', content: r.image.url },
                    { name: 'twitter:image:event_thumbnail:height', content: r.image.height },
                    { name: 'twitter:image:event_thumbnail:width', content: r.image.width },
                  ]
                })(o, i, a, s, c).map(q),
                (function (e, t, n, r) {
                  var i,
                    a,
                    o,
                    c,
                    l,
                    s,
                    u,
                    d,
                    m,
                    p,
                    f,
                    h,
                    v,
                    b,
                    y,
                    g,
                    _,
                    O,
                    E,
                    I,
                    w,
                    P,
                    C,
                    k,
                    S,
                    D,
                    x,
                    j,
                    R,
                    A,
                    T,
                    L,
                    B,
                    M
                  return [
                    { name: 'twitter:text:event_category', content: e.category },
                    {
                      name: 'twitter:text:broadcast_id',
                      content: null === (i = n.mediaDetails) || void 0 === i ? void 0 : i.broadcastId,
                    },
                    {
                      name: 'twitter:text:broadcast_media_key',
                      content: null === (a = n.mediaDetails) || void 0 === a ? void 0 : a.broadcastMediaKey,
                    },
                    {
                      name: 'twitter:text:broadcast_media_id',
                      content:
                        (null === (o = n.mediaDetails) || void 0 === o ? void 0 : o.broadcastId) &&
                        (null === (c = n.mediaDetails) || void 0 === c ? void 0 : c.mediaId),
                    },
                    {
                      name: 'twitter:text:broadcast_title',
                      content: null === (l = n.mediaDetails) || void 0 === l ? void 0 : l.broadcastTitle,
                    },
                    {
                      name: 'twitter:text:broadcaster_twitter_id',
                      content: null === (s = n.mediaDetails) || void 0 === s ? void 0 : s.broadcastTwitterId,
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
                      content: null === (m = n.mediaDetails) || void 0 === m ? void 0 : m.broadcastWidth,
                    },
                    {
                      name: 'twitter:text:broadcast_height',
                      content: null === (p = n.mediaDetails) || void 0 === p ? void 0 : p.broadcastHeight,
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
                      content: null === (v = e.author) || void 0 === v ? void 0 : v.id_str,
                    },
                    {
                      name: 'twitter:text:event_badge',
                      content: null === (b = n.slate) || void 0 === b ? void 0 : b.label,
                    },
                    {
                      name: 'twitter:string:media_tweet_id',
                      content:
                        null === (y = n.mediaDetails) || void 0 === y || null === (g = y.coverTweet) || void 0 === g
                          ? void 0
                          : g.id_str,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:src',
                      content: null === (_ = n.slate) || void 0 === _ ? void 0 : _.image.url,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:height',
                      content: null === (O = n.slate) || void 0 === O ? void 0 : O.image.height,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:width',
                      content: null === (E = n.slate) || void 0 === E ? void 0 : E.image.width,
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:w',
                      content:
                        (null === (I = n.slate) || void 0 === I || null === (w = I.cropCandidates) || void 0 === w
                          ? void 0
                          : w.length) && (null === (P = n.slate) || void 0 === P ? void 0 : P.cropCandidates[0].w),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:h',
                      content:
                        (null === (C = n.slate) || void 0 === C || null === (k = C.cropCandidates) || void 0 === k
                          ? void 0
                          : k.length) && (null === (S = n.slate) || void 0 === S ? void 0 : S.cropCandidates[0].h),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:x',
                      content:
                        (null === (D = n.slate) || void 0 === D || null === (x = D.cropCandidates) || void 0 === x
                          ? void 0
                          : x.length) && (null === (j = n.slate) || void 0 === j ? void 0 : j.cropCandidates[0].x),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:y',
                      content:
                        (null === (R = n.slate) || void 0 === R || null === (A = R.cropCandidates) || void 0 === A
                          ? void 0
                          : A.length) && (null === (T = n.slate) || void 0 === T ? void 0 : T.cropCandidates[0].y),
                    },
                    {
                      name: 'twitter:text:remind_me_notification_id',
                      content: null === (L = e.remindMeSubscription) || void 0 === L ? void 0 : L.notification_id,
                    },
                    {
                      name: 'twitter:image:broadcast_thumbnail:src',
                      content: null === (B = n.mediaDetails) || void 0 === B ? void 0 : B.broadcastThumbnail,
                    },
                    {
                      name: 'twitter:string:broadcast_replay_edited_start_time',
                      content: null === (M = n.mediaDetails) || void 0 === M ? void 0 : M.broadcastReplayStartTime,
                    },
                    { name: 'twitter:string:media_type', content: r },
                  ]
                })(n, 0, l, u).map(q),
              )
            : null
        },
        J = n('m3Bd'),
        Z = n.n(J),
        Q = (n('tVqn'), n('3XMw')),
        $ = n.n(Q),
        ee = n('I6Uj'),
        te = $.a.i8d6a27e,
        ne = $.a.hbae0a4e,
        re = { page: 'live_event_timeline', section: 'live_event_header' },
        ie = function (e) {
          var t = e.author,
            n = e.hashtag,
            r = e.title,
            i = (r && r.trim()) || ''
          return ae(t) ? oe(t.screen_name, n, i) : n
        },
        ae = function (e) {
          return !!e
        },
        oe = function (e, t, n) {
          return t ? te({ author: e, timelineHashtag: t, title: n }) : ne({ author: e, title: n })
        },
        ce = function (e) {
          var t = e.id,
            n = Z()(e, ['id']),
            r = Object(A.j)(t),
            i = ie(n)
          return b.createElement(ee.a, { scribeNamespace: re, shareText: i, url: r })
        },
        le = n('LVU8')
      function se(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? se(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var de = function (e) {
          return { items: [me(e)] }
        },
        me = function (e) {
          var t = e.carouselLength,
            n = e.carouselPosition,
            r = e.includeTimelineSource,
            i = void 0 !== r && r,
            a = e.liveEventDetails,
            o = e.mediaDetails,
            c = e.selectedTimeline,
            l = e.tilePosition,
            s = e.timelineTabPosition,
            u = a.eventId,
            d = a.remindMeSubscription,
            m = (o || {}).broadcastId,
            p = c || {},
            f = p.timelineId,
            h = p.timelineSourceId,
            v = p.timelineSourceType,
            b = d || {},
            y = b.notification_id,
            g = b.subscribed,
            _ = b.toggle_visible,
            O = ue({}, null),
            E = ue({}, null),
            I = ue({}, null)
          return (
            u && (E.host_event_id = u),
            f && (E.timeline_id = f),
            i && ((E.timeline_source_id = h), (E.timeline_source_type = v)),
            void 0 !== s && (E.timeline_tab_position = s),
            t && ((E.carousel_count = t), (E.carousel_position = n)),
            void 0 !== l && (E.tile_position = l),
            d && ((E.remind_me_notification_id = y), (E.remind_me_subscribed = g), (E.remind_me_toggle_visible = _)),
            m && (I.host_broadcast_id = m),
            Object.keys(E).length > 0 && (O.live_video_event_details = E),
            Object.keys(I).length > 0 && (O.live_broadcast_details = I),
            O
          )
        },
        pe = n('9Bb1'),
        fe = n('5S/X'),
        he = n('XvPy'),
        ve = n('Vgm9'),
        be = n('VTxf'),
        ye = n('rJoH'),
        ge = n('yoO3'),
        _e = n('EskI'),
        Oe = n('VS6U'),
        Ee = n('HBr9'),
        Ie = n('MWbm'),
        we = n('G8HL'),
        Pe = n('t62R'),
        Ce = n('rHpw'),
        ke = n('v6aA'),
        Se = n('7JQg'),
        De = n('zrc3'),
        xe = n('oQhu')
      function je(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ae(e) {
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
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Te = (function (e) {
        u()(n, e)
        var t = Ae(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(l()(e), '_carouselIndexReceived', !1),
            v()(
              l()(e),
              '_defaultPollingInterval',
              e.context.featureSwitches.getNumberValue('live_event_timeline_default_refresh_rate_interval_seconds', 30),
            ),
            v()(
              l()(e),
              '_minPollingInterval',
              e.context.featureSwitches.getNumberValue('live_event_timeline_minimum_refresh_rate_interval_seconds', 10),
            ),
            v()(l()(e), '_newSegmentedControlDesign', !1),
            v()(
              l()(e),
              '_shouldHonourServerRefresh',
              e.context.featureSwitches.isTrue('live_event_timeline_server_controlled_refresh_rate_enabled'),
            ),
            v()(l()(e), 'state', { isPlayerFullscreen: !1, selectedCarouselItemId: void 0 }),
            v()(l()(e), '_renderPrimaryContent', function (t) {
              var n = t.isWide,
                r = e.props,
                i = r.carousel,
                a = r.fetchStatus,
                o = r.history,
                c = r.interstitialOrderToDisplay,
                l = r.isTOO,
                s = r.liveEventDetails,
                u = r.refreshStatus,
                d = r.remindMeButtonSubscribe,
                m = r.remindMeButtonUnsubscribe,
                p = r.scoreData,
                f = r.timelineDetails,
                h = e.state.isPlayerFullscreen,
                v = $.a.c08e7935,
                y = e._getPollingIntervalMs()
              return b.createElement(
                Ee.a,
                { collectionName: v },
                b.createElement(he.a, {
                  carousel: i,
                  fetchStatus: a,
                  history: o,
                  interstitialOrderToDisplay: c,
                  isPlayerFullscreen: h,
                  isTOO: l,
                  isWide: n,
                  liveEventDetails: s,
                  onChildScribeAction: e._handleChildScribeAction,
                  onFetch: e._handleInitialFetch,
                  onFullscreenChange: e._handleFullscreenChange,
                  onSelectedCarouselItemChange: e._handleSelectedCarouselItemChanged,
                  onTimelinePoll: e._handleTimelinePoll,
                  pollingIntervalMs: y,
                  refreshStatus: u,
                  remindMeButtonSubscribe: d,
                  remindMeButtonUnsubscribe: m,
                  scoreData: p,
                  timelineDetails: f,
                  withFloatingComposeButton: !0,
                }),
              )
            }),
            v()(l()(e), '_getSelectedItem', function () {
              var t = e.props.carousel,
                n = e.state.selectedCarouselItemId
              return Object(A.p)(t, n)
            }),
            v()(l()(e), '_getSelectedItemIndex', function () {
              var t = e.props.carousel,
                n = e._getSelectedItem()
              return t && n
                ? Object(De.a)(t, function (e) {
                    return e.id === n.id
                  })
                : void 0
            }),
            v()(
              l()(e),
              '_getScribeProviderMetadata',
              Object(xe.a)(function (e, t, n, r, i) {
                var a = n.timelineId,
                  o = n.timelineIndex,
                  c = n.timelineLinks,
                  l = (i || {}).mediaDetails,
                  s =
                    c &&
                    c.find(function (e) {
                      return e.timelineId === a
                    })
                return Re(
                  { event_id: t.eventId },
                  de({
                    carouselLength: e && e.length,
                    carouselPosition: r,
                    liveEventDetails: t,
                    mediaDetails: l,
                    timelineTabPosition: o,
                    selectedTimeline: s,
                  }),
                )
              }),
            ),
            v()(l()(e), '_handleInitialFetch', function () {
              e._fetchLiveEvent()
            }),
            v()(l()(e), '_fetchLiveEvent', function () {
              var t = e.props,
                n = t.createLocalApiErrorHandler
              return (0, t.fetchLiveEvent)(t.liveEventDetails.eventId).catch(
                n(v()({}, y.a.GenericNotFound, { customAction: le.c })),
              )
            }),
            v()(l()(e), '_handleTimelinePoll', function () {
              e._fetchLiveEvent()
            }),
            v()(l()(e), '_handleFullscreenChange', function (t) {
              var n = t.isPlayerFullscreen
              e.setState({ isPlayerFullscreen: n })
            }),
            v()(l()(e), '_handleOverflowButtonClickScribe', function () {
              return e._scribeActionWithEventItems({ section: 'live_event_header', element: 'more', action: 'click' })
            }),
            v()(l()(e), '_handleSelectedCarouselItemChanged', function (t) {
              e.setState({ selectedCarouselItemId: t.id })
            }),
            v()(l()(e), '_handleChildScribeAction', function (t, n) {
              return e._scribeActionWithEventItems(t, n)
            }),
            v()(l()(e), '_scribeTimelineImpression', function () {
              var t = e.props,
                n = t.carousel,
                r = t.liveEventDetails,
                i = t.scribeAction,
                a = t.scribeNamespace,
                o = t.timelineDetails,
                c = o.timelineId,
                l = o.timelineLinks,
                s = e._getSelectedItemIndex(),
                u = (e._getSelectedItem() || {}).mediaDetails,
                d = l.find(function (e) {
                  return e && e.timelineId === c
                })
              d &&
                i(
                  Re(Re({}, a), {}, { action: 'impression' }),
                  de({
                    liveEventDetails: r,
                    includeTimelineSource: !0,
                    mediaDetails: u,
                    selectedTimeline: d,
                    carouselLength: n && n.length,
                    carouselPosition: s,
                  }),
                )
            }),
            e
          )
        }
        return (
          o()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._handleInitialFetch()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e, t) {
                var n = this.props,
                  r = n.liveEventDetails.eventId,
                  i = n.timelineDetails.timelineId,
                  a = e.liveEventDetails.eventId,
                  o = e.timelineDetails.timelineId
                a !== r
                  ? this._handleInitialFetch()
                  : o !== i && (this._scribeTimelineTabChange(), this._scribeTimelineImpression())
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.carousel,
                  n = e.history,
                  r = e.isUserSuspended,
                  i = e.liveEventDetails,
                  a = e.timelineDetails,
                  o = i.shortTitle,
                  c = i.title,
                  l = a.composeDetails,
                  s = this.state.isPlayerFullscreen
                if (r) return b.createElement(be.a, null)
                var u = c || A.f,
                  d = this._renderScoreCard(),
                  m = o ? b.createElement(Pe.b, { withHashflags: !0 }, o) : A.g,
                  p = b.createElement(O.a, { withWhoToFollow: !1 }, d),
                  f = this.context.loggedInUserId && !s ? this._renderRightButtons() : void 0,
                  h = this._getScribeProviderMetadata(t, i, a, this._getSelectedItemIndex(), this._getSelectedItem())
                return b.createElement(
                  Se.b,
                  { data: h },
                  b.createElement(
                    ge.a,
                    null,
                    _.canUseDOM ? null : this._renderPageMeta(u),
                    b.createElement(Oe.a, {
                      backLocation: '/',
                      composeOptions: l,
                      documentTitle: u,
                      headerless: s,
                      history: n,
                      primaryContent: this._renderPrimaryContent,
                      rightControl: f,
                      sidebarContent: p,
                      title: m,
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
                  r,
                  i,
                  a,
                  o,
                  c = this.props,
                  l = c.carousel,
                  s = c.liveEventDetails,
                  u = c.timelineDetails,
                  d = s.description,
                  m = s.eventId,
                  p = this._getSelectedItem(),
                  f = m && 'twitter://events/timeline/'.concat(m),
                  h = m && 'https://twitter.com/i/events/'.concat(m || '')
                return b.createElement(
                  b.Fragment,
                  null,
                  d ? b.createElement(pe.a, { description: d }) : null,
                  b.createElement(ye.a, {
                    canonical: h,
                    description: d,
                    image:
                      null == p || null === (t = p.slate) || void 0 === t || null === (n = t.image) || void 0 === n
                        ? void 0
                        : n.url,
                    imageH:
                      null == p || null === (r = p.slate) || void 0 === r || null === (i = r.image) || void 0 === i
                        ? void 0
                        : i.height,
                    imageW:
                      null == p || null === (a = p.slate) || void 0 === a || null === (o = a.image) || void 0 === o
                        ? void 0
                        : o.width,
                    title: e,
                    type: 'article',
                  }),
                  fe.b && null != p && p.slate
                    ? b.createElement(W, { liveEventDetails: s, slate: null == p ? void 0 : p.slate })
                    : null,
                  b.createElement(g.a, { deepLink: f }),
                  l ? b.createElement(K, { carousel: l, liveEventDetails: s, timelineDetails: u }) : null,
                )
              },
            },
            {
              key: '_renderRightButtons',
              value: function () {
                var e = this.props,
                  t = e.isTOO,
                  n = e.liveEventDetails,
                  r = n.author,
                  i = n.eventId,
                  a = n.title,
                  o = e.scribeNamespace,
                  c = e.timelineDetails.hashtag
                return b.createElement(
                  Ie.a,
                  { style: Le.rightButtonContainer },
                  b.createElement(ce, { author: r, hashtag: c, id: i, title: a }),
                  t
                    ? null
                    : b.createElement(ve.a, {
                        author: r,
                        eventId: i,
                        onPress: this._handleOverflowButtonClickScribe,
                        redirectOnDelete: r ? '/'.concat(r.screen_name, '/moments') : void 0,
                        scribeNamespace: Re(Re({}, o), {}, { section: 'live_event_header' }),
                        style: Le.overflowButton,
                        title: a,
                      }),
                )
              },
            },
            {
              key: '_renderScoreCard',
              value: function () {
                var e = this.props.scoreData
                return e ? b.createElement(_e.a, { scoreData: e, withContainer: !0, withHeader: !0 }) : null
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
              key: '_scribeActionWithEventItems',
              value: function (e, t) {
                var n = this.props,
                  r = n.carousel,
                  i = n.liveEventDetails,
                  a = n.scribeAction,
                  o = n.scribeNamespace,
                  c = n.timelineDetails,
                  l = c.timelineId,
                  s = c.timelineLinks,
                  u = this._getSelectedItemIndex(),
                  d = (this._getSelectedItem() || {}).mediaDetails,
                  m = s.find(function (e) {
                    return e.timelineId === l
                  })
                a(
                  Re(Re({}, o), e),
                  de(
                    Re(
                      {
                        liveEventDetails: i,
                        mediaDetails: d,
                        selectedTimeline: m,
                        carouselLength: r && r.length,
                        carouselPosition: u,
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
                  r = e.scribeNamespace,
                  i = e.timelineDetails,
                  a = i.timelineId,
                  o = i.timelineIndex,
                  c = i.timelineLinks,
                  l = (this._getSelectedItem() || {}).mediaDetails,
                  s =
                    c &&
                    c.find(function (e) {
                      return e.timelineId === a
                    })
                n(
                  Re(Re({}, r), {}, { component: a, element: 'tab', action: 'selected' }),
                  de({
                    liveEventDetails: t,
                    timelineTabPosition: o,
                    mediaDetails: l,
                    selectedTimeline: s,
                    includeTimelineSource: !0,
                  }),
                )
              },
            },
          ]),
          n
        )
      })(b.Component)
      v()(Te, 'contextType', ke.a)
      var Le = Ce.a.create(function (e) {
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
      t.default = Object(Se.c)({ page: 'live_event_timeline' })(U(Object(we.a)(Te)))
    },
    '8/3a': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y')
      var r = n('0mK8'),
        i = n('ERkP'),
        a = (n('jQ3i'), n('x4t0'), n('tVqn'), n('z84I'), n('3XMw')),
        o = n.n(a),
        c = n('caTy'),
        l = n('MWbm'),
        s = n('rHpw'),
        u = n('t62R'),
        d = n('yrzJ'),
        m = n('XrEN'),
        p = n('Q0VY'),
        f = n('FiRh'),
        h = s.a.create(function (e) {
          return { description: { marginTop: e.spaces.space12 } }
        }),
        v = function (e, t, n) {
          return n && !m.a.VIDEO_TYPES.includes(t)
            ? (function (e) {
                var t,
                  n = e.url ? (null === (t = Object(c.a)(e.url)) || void 0 === t ? void 0 : t.pathname) : void 0
                return i.createElement(u.b, { color: 'gray700', link: n }, e.text)
              })(n)
            : e && m.a.VIDEO_TYPES.includes(t)
            ? (function (e, t) {
                return i.createElement(
                  u.b,
                  { color: 'gray700', link: e.permalink },
                  b(t, { screenName: i.createElement(d.a, { screenName: e.user.screen_name }) }),
                )
              })(e, t)
            : null
        },
        b = function (e, t) {
          switch (e) {
            case 'animated_gif':
              return i.createElement(o.a.I18NFormatMessage, { $i18n: 'a5d9d070' }, t.screenName)
            case 'video':
            case 'vine':
              return i.createElement(o.a.I18NFormatMessage, { $i18n: 'i9606e32' }, t.screenName)
            default:
              return i.createElement(o.a.I18NFormatMessage, { $i18n: 'i1a64d47' }, t.screenName)
          }
        },
        y = function (e) {
          var t = e.coverTweet,
            n = e.description,
            r = e.imageAttribution,
            a = e.mediaType,
            o = e.pivotText,
            c = n ? n.trim() : void 0,
            s = c ? p.a.descriptionTextParts(c) : []
          return i.createElement(
            l.a,
            { style: h.description },
            s.length
              ? i.createElement(
                  u.b,
                  null,
                  s.map(function (e, t) {
                    return i.createElement(f.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            v(t, a, r),
            o ? i.createElement(u.b, { color: 'gray700' }, o) : null,
          )
        },
        g = n('pjBI'),
        _ = s.a.create(function (e) {
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
          a = e.description,
          o = e.imageAttribution,
          c = e.isTOO,
          s = e.mediaType,
          d = e.pivotText,
          m = e.preTitle,
          p = e.remindMeButton,
          f = e.time,
          h = e.title,
          v = e.withHashflags,
          b = function () {
            return t
              ? i.createElement(
                  l.a,
                  null,
                  i.createElement(r.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  f ? O(!0) : null,
                )
              : null
          },
          O = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return i.createElement(
              u.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [_.timeString, e && _.timeStringMargin] },
              f,
            )
          },
          E = function () {
            return m
              ? i.createElement(
                  g.a,
                  null,
                  i.createElement(u.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, m),
                  f ? O() : null,
                )
              : null
          }
        return i.createElement(
          i.Fragment,
          null,
          c && m ? E() : b() || E(),
          i.createElement(u.b, { dir: 'auto', size: 'title4', style: _.title, weight: 'heavy', withHashflags: v }, h),
          a || n || o
            ? i.createElement(y, { coverTweet: n, description: a, imageAttribution: o, mediaType: s, pivotText: d })
            : null,
          p ? i.createElement(l.a, { style: _.remindMeButton }, p) : null,
        )
      }
    },
    '8FZA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BroadcastScreen', function () {
          return Le
        })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        m = n.n(d),
        p = n('AuHH'),
        f = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        b = (n('tVqn'), n('2G9S'), n('ho0z'), n('Blm6'), n('uFXj'), n('ERkP')),
        y = n('k49u'),
        g = n('zI2C'),
        _ = 'NOT_STARTED',
        O = 'RUNNING',
        E = 'TIMED_OUT',
        I = 'ENDED',
        w = n('RhWx'),
        P = n.n(w),
        C = (n('z84I'), n('/Ikv')),
        k = n('muX9'),
        S = function (e) {
          return []
            .concat(
              ((n = e),
              (r = n.id),
              (i = n.timecode),
              (a = n.title),
              (o = n.url),
              [
                { name: 'twitter:card', content: C.a.CardNames.BROADCAST },
                { name: 'twitter:url:broadcast_url', content: o },
                { name: 'twitter:text:broadcast_id', content: r },
                { name: 'twitter:text:broadcast_title', content: a },
                { name: 'twitter:text:broadcast_timecode', content: i },
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
          var t, n, r, i, a, o
        },
        D = function (e) {
          return void 0 !== e.content ? b.createElement('meta', e) : null
        },
        x = function (e) {
          return b.createElement.apply(
            b,
            [k.a, null].concat(
              P()(
                (function (e) {
                  return S(e).map(D)
                })(e),
              ),
            ),
          )
        },
        j = n('6/RC'),
        R = n('es0u'),
        A = (n('WNMA'), n('KqXw'), n('zh9S')),
        T = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ddV6')),
        L = n.n(T),
        B = n('3zvM'),
        M = n('lMB6')
      function N(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      var F = Object(B.f)({
          namespace: 'broadcasts',
          fetchOneContext: 'FETCH_BROADCAST',
          fetchOneEndpoint: function (e) {
            return e.Broadcasts.fetchBroadcast
          },
          fetchOneParams: function (e, t) {
            return (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? N(Object(n), !0).forEach(function (t) {
                      v()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : N(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ ids: [L()(e, 1)[0]] }, t)
          },
        }),
        H = M.a.register(F),
        U = n('kGix'),
        V = n('Hw0q'),
        z = n('G6rE'),
        W = n('rxPX'),
        G = n('0KEI'),
        Y = function (e, t) {
          return t.match.params.broadcastId
        },
        q = function (e, t) {
          return H.select(e, Y(0, t))
        },
        X = function (e, t) {
          var n = q(e, t)
          return n && n.twitter_user_id ? z.e.select(e, n.twitter_user_id) : void 0
        },
        K = function (e, t) {
          return t.location.state ? t.location.state.promotedContent : void 0
        },
        J = function (e, t) {
          return q(e, t) ? U.a.LOADED : H.selectFetchStatus(e, Y(0, t))
        },
        Z = Object(V.b)('t'),
        Q = Object(W.a)()
          .propsFromState(function () {
            return {
              broadcastId: Y,
              broadcast: q,
              twitterBroadcaster: X,
              fetchStatus: J,
              promotedContent: K,
              timecode: Z,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(G.createLocalApiErrorHandlerWithContextFactory)('BROADCAST_SCREEN'),
              fetchBroadcast: H.fetchOne,
              fetchUserIfNeeded: z.e.fetchOneIfNeeded,
              scribeAction: A.c,
              scribePageImpression: A.d,
              googleAnalyticsPageView: A.a,
            }
          }),
        $ = n('SrtL'),
        ee = n('GOQE'),
        te = n('v//M'),
        ne = n('LVU8'),
        re = n('zlxh'),
        ie = n('rJoH'),
        ae = n('VS6U'),
        oe = n('B5iK'),
        ce = n('pynj'),
        le = n('Modb'),
        se = n('lklz'),
        ue = n('MWbm'),
        de = n('G8HL'),
        me = n('t62R'),
        pe = n('Wms4'),
        fe = n('jV+4'),
        he = n('TIdA'),
        ve = n('A91F'),
        be = n('rHpw'),
        ye = n('7JQg'),
        ge = n('3XMw'),
        _e = n.n(ge)
      function Oe(e) {
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
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Ee = { url: 'https://pbs.twimg.com/lex/placeholder_live_nomargin.png', width: 1920, height: 1080 },
        Ie = { objectFitVideo: 'contain' },
        we = function (e) {
          return e && e.trim().length > 0
        },
        Pe = _e.a.ac4c73d8,
        Ce = _e.a.e39b368e,
        ke = _e.a.f2382014,
        Se = _e.a.e3aac82a,
        De = _e.a.hd0bc1eb,
        xe = _e.a.bea1f26a,
        je = _e.a.jceadc3e,
        Re = _e.a.d980e29e,
        Ae = _e.a.fc209bb7,
        Te = function (e, t) {
          return 'https://twitter.com/i/broadcasts/'.concat(e).concat(t ? '?t='.concat(t) : '')
        },
        Le = (function (e) {
          u()(n, e)
          var t = Oe(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_getTitle', function () {
                var t = e.props.broadcast
                if (t) {
                  var n = t.state,
                    r = t.status
                  if (r) return r
                  var i = e._getName(t)
                  if (i)
                    switch (n) {
                      case O:
                        return De({ name: i })
                      case I:
                      case E:
                        return xe({ name: i })
                      case _:
                      default:
                        return je
                    }
                }
                return je
              }),
              v()(l()(e), '_getName', function (e) {
                var t = e.twitter_username,
                  n = e.user_display_name
                return we(n) ? n : t && we(t) ? '@'.concat(t) : void 0
              }),
              v()(l()(e), '_isLive', function () {
                return e.props.broadcast && 'RUNNING' === e.props.broadcast.state
              }),
              v()(l()(e), '_renderPrimaryContent', function () {
                var t = e.props.fetchStatus
                return b.createElement(te.a, {
                  accessibilityLabel: Se,
                  fetchStatus: t,
                  onRequestRetry: e._handleFetchBroadcast,
                  render: e._render,
                })
              }),
              v()(l()(e), '_render', function () {
                var t = e._getTitle()
                return b.createElement(
                  b.Fragment,
                  null,
                  e._renderMedia(),
                  b.createElement(
                    ue.a,
                    { style: Be.header },
                    e._renderUserName(),
                    b.createElement(
                      ue.a,
                      { style: Be.title },
                      b.createElement(me.b, { size: 'headline1', style: Be.titleText, weight: 'bold' }, t),
                      e._isLive() ? b.createElement(pe.a, { type: 'live' }, ke) : null,
                    ),
                    e._renderRelatedEvent(),
                  ),
                )
              }),
              v()(l()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.broadcast,
                  r = t.twitterBroadcaster
                return r
                  ? b.createElement(
                      ue.a,
                      { style: Be.userNameWrapper },
                      b.createElement(
                        ce.a,
                        { screenName: r.screen_name },
                        b.createElement(fe.a, {
                          isProtected: r.protected,
                          isVerified: r.verified,
                          name: r.name,
                          profileImageUrl: r.profile_image_url_https,
                          screenName: r.screen_name,
                          translatorType: 'none' === r.translator_type ? void 0 : r.translator_type,
                          withLink: !0,
                          withScreenName: !0,
                        }),
                      ),
                    )
                  : n && n.user_display_name
                  ? b.createElement(
                      ue.a,
                      { style: Be.userNameWrapper },
                      b.createElement(fe.a, { name: n.user_display_name, profileImageUrl: n.profile_image_url }),
                    )
                  : void 0
              }),
              v()(l()(e), '_scribePageImpression', function () {
                var t = e.props,
                  n = t.broadcastId,
                  r = t.googleAnalyticsPageView,
                  i = t.scribeNamespace,
                  a = t.scribePageImpression
                n && a(i, { items: [{ live_broadcast_details: { target_broadcast_id: n } }] }), r(i)
              }),
              v()(l()(e), '_fetchTwitterBroadcaster', function () {
                var t = e.props,
                  n = t.broadcast,
                  r = t.createLocalApiErrorHandler,
                  i = t.fetchUserIfNeeded,
                  a = n && n.twitter_user_id
                if (a) return i(a).catch(r(ee.a))
              }),
              v()(l()(e), '_startTimer', function () {
                e._stopTimer(), (e._timer = new oe.b(3e4).interval(e._fetchUpdates)), e._timer.start()
              }),
              v()(l()(e), '_stopTimer', function () {
                e._timer && e._timer.stop(), (e._timer = void 0)
              }),
              v()(l()(e), '_handleFetchBroadcast', function () {
                var t = e.props,
                  n = t.broadcast,
                  r = t.broadcastId,
                  i = t.createLocalApiErrorHandler,
                  a = t.fetchBroadcast
                r &&
                  a(r, { broadcastVersionMap: v()({}, r, null == n ? void 0 : n.version) }).catch(
                    i(v()({}, y.a.GenericNotFound, { customAction: ne.c })),
                  )
              }),
              v()(l()(e), '_fetchUpdates', function () {
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
                  this._handleFetchBroadcast(), this._scribePageImpression()
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
                  return b.createElement(
                    b.Fragment,
                    null,
                    this._renderMetaTags(t),
                    b.createElement(ae.a, {
                      backLocation: '/',
                      documentTitle: t,
                      history: e,
                      primaryContent: this._renderPrimaryContent,
                      sidebarContent: b.createElement(R.a, null),
                      title: Ce,
                    }),
                    b.createElement($.a, { title: t, withMeta: !1 }),
                  )
                },
              },
              {
                key: '_renderMetaTags',
                value: function (e) {
                  var t = this.props,
                    n = t.broadcast,
                    r = t.broadcastId,
                    i = t.timecode,
                    a = t.twitterBroadcaster,
                    o = (null == a ? void 0 : a.name) || (null == n ? void 0 : n.user_display_name),
                    c = 'twitter://broadcasts/'.concat(r),
                    l = Te(r),
                    s = Te(r, i)
                  return j.canUseDOM
                    ? null
                    : b.createElement(
                        b.Fragment,
                        null,
                        b.createElement(ie.a, { canonical: l, description: e, title: o, type: 'article' }),
                        b.createElement(g.a, { deepLink: c }),
                        b.createElement(x, { broadcast: n, id: r, timecode: i, title: e, url: s }),
                      )
                },
              },
              {
                key: '_renderMedia',
                value: function () {
                  var e = this.props.broadcast
                  return e && e.state === _ ? this._renderPreLiveSlate() : this._renderPlayer()
                },
              },
              {
                key: '_renderStartDateLabel',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.scheduled_start_ms ? new Date(parseInt(e.scheduled_start_ms, 10)) : void 0,
                    n = t ? Re({ date: Ae(t) }) : void 0
                  return n ? b.createElement(ue.a, { style: Be.labelOverlay }, b.createElement(pe.a, null, n)) : null
                },
              },
              {
                key: '_renderPreLiveSlate',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : Ee
                  return b.createElement(
                    ue.a,
                    null,
                    b.createElement(
                      k.a,
                      null,
                      b.createElement('meta', { content: t.url, property: 'og:image' }),
                      b.createElement('meta', { content: t.width, property: 'og:image:width' }),
                      b.createElement('meta', { content: t.height, property: 'og:image:height' }),
                    ),
                    b.createElement(he.a, {
                      accessibilityLabel: Pe,
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
                    r = e.promotedContent,
                    i = e.timecode,
                    a = t && { url: t.image_url, width: t.width, height: t.height },
                    o = t && t.media_id
                  if (!(n && a && o)) return null
                  var c = t && Object(re.m)(t.image_url_small, t.image_url_medium, a)
                  return b.createElement(
                    ue.a,
                    { style: Be.card },
                    b.createElement(
                      k.a,
                      null,
                      b.createElement('meta', { content: a.url, property: 'og:image' }),
                      b.createElement('meta', { content: a.width, property: 'og:image:width' }),
                      b.createElement('meta', { content: a.height, property: 'og:image:height' }),
                    ),
                    b.createElement(le.a, {
                      accessibilityLabel: Pe,
                      aspectRatio: 1.7777777777777777,
                      customVariants: c,
                      displayOptions: Ie,
                      includeBroadcastEventAssociation: !0,
                      poster: a,
                      promotedContent: r,
                      source: { variants: [], videoId: se.b.forBroadcast(n), contentId: o },
                      timecode: i,
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
                    r = t.title
                  if (!n || !r) return null
                  var i = '/i/events/'.concat(n),
                    a = b.createElement(me.b, { color: 'primary', link: i }, r)
                  return b.createElement(
                    me.b,
                    { style: Be.relatedEvent },
                    b.createElement(_e.a.I18NFormatMessage, { $i18n: 'c43d1678' }, a),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component),
        Be = be.a.create(function (e) {
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
      t.default = Object(ye.c)({ page: 'broadcast' })(Q(Object(de.a)(Le)))
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        m = n.n(d),
        p = n('AuHH'),
        f = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        b = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        y = n('3XMw'),
        g = n.n(y),
        _ = n('oQhu'),
        O = n('mjJ+'),
        E = n('eb3s')
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
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var w = g.a.cfd2f35d,
        P = (function (e) {
          u()(n, e)
          var t = I(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), 'state', { activeConfirmation: null }),
              v()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              v()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              v()(l()(e), '_handleCancelConfirm', function () {
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
                    : b.createElement(O.a, {
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
                    r = t.headline,
                    i = t.label,
                    a = t.text,
                    o = t.withCancelButton
                  return b.createElement(E.a, {
                    confirmButtonLabel: i,
                    confirmButtonType: n,
                    headline: r,
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
                    r = e.onClose
                  return C(t, n, r, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(b.Component),
        C = Object(_.a)(function (e, t, n, r) {
          return e.reduce(function (e, i, a) {
            var o = i.Icon,
              c = i.behavioralEventContext,
              l = i.confirmation,
              s = i.disabled,
              u = i.excludeFromActionMenu,
              d = i.isEmphasized,
              m = i.link,
              p = i.onClick,
              f = i.subText,
              h = i.testID,
              v = i.text
            i.withCancelButton
            if (!u) {
              var b = p
                ? function () {
                    l
                      ? l.render
                        ? r({ callback: p, render: l.render })
                        : r({
                            callback: p,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (p(), n())
                  }
                : n
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: o,
                isEmphasized: d,
                testID: h,
                subText: f,
                text: v,
                onClick: b,
                link: m,
                withBottomBorder: t && t.includes(a),
              })
            }
            return e
          }, [])
        })
      t.default = P
    },
    EskI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        m = n.n(d),
        p = (n('7xRU'), n('Ysgh'), n('KqXw'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        f = n('3XMw'),
        h = n.n(f),
        v =
          (n('yH/f'),
          Object.freeze({ BROADCAST_MEDIA_TYPE: 'broadcast', VIDEO_MEDIA_TYPE: 'video' }),
          Object.freeze({ COMPLETED: 'COMPLETED', DELAYED: 'DELAYED', LIVE: 'LIVE', UPCOMING: 'UPCOMING' })),
        b = 'scorecard',
        y = n('6vad'),
        g = n('t62R'),
        _ = n('rHpw'),
        O = n('U+bB'),
        E = n('MWbm')
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
            r = m()(e)
          if (t) {
            var i = m()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var w = h.a.eaaca5db,
        P = function (e) {
          var t = e.id,
            n = void 0 === t ? '' : t,
            r = e.isLive,
            i = e.status,
            a = '44' === n.split(':')[0],
            o = i === v.UPCOMING || i === v.DELAYED
          return (a && r) || o
        },
        C = (function (e) {
          l()(n, e)
          var t = I(n)
          function n() {
            return i()(this, n), t.apply(this, arguments)
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
                        r = t.participant_scores,
                        i = t.progress_strings,
                        a = t.status,
                        o = t.winner_id,
                        c = a === v.LIVE
                      return {
                        isLive: c,
                        progressStrings: P({ id: n, status: a, isLive: c }) ? i.join(' ') : i[0],
                        participantScores: r,
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
                  return p.createElement(
                    p.Fragment,
                    null,
                    t ? p.createElement(y.b, { text: w }) : null,
                    this._renderScoresAndMatchStatus(e),
                  )
                },
              },
              {
                key: '_renderScoresAndMatchStatus',
                value: function (e) {
                  var t = this,
                    n = this.props.withContainer,
                    r = e.isLive,
                    i = e.participantScores,
                    a = e.progressStrings,
                    o = e.winnerId,
                    c = i.map(function (e) {
                      return t._renderTeamRow(e, o, r)
                    })
                  return p.createElement(
                    E.a,
                    { style: [k.teamDisplay, n && k.container] },
                    p.createElement(E.a, { style: k.teamRows }, c),
                    p.createElement(g.b, { style: k.matchStatusText }, a),
                  )
                },
              },
              {
                key: '_renderTeamRow',
                value: function (e, t, n) {
                  var r = e.participant,
                    i = r.id,
                    a = r.media,
                    o = r.name,
                    c = e.score,
                    l = i === t,
                    s = n || l ? 'bold' : 'normal'
                  return p.createElement(
                    E.a,
                    { key: i, style: k.teamRow, testID: b },
                    p.createElement(O.a, { source: a.url, style: k.teamLogo }),
                    p.createElement(g.b, { align: 'left', numberOfLines: 1, style: k.teamName }, o),
                    p.createElement(g.b, { style: k.teamScore, weight: s }, c),
                    p.createElement(E.a, { style: [k.winnerContainer, l && k.winner] }),
                  )
                },
              },
            ]),
            n
          )
        })(p.Component),
        k = _.a.create(function (e) {
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
    FS1z: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        m = n.n(d),
        p = n('AuHH'),
        f = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        b = (n('2G9S'), n('ERkP')),
        y = n('rxPX'),
        g = n('0KEI'),
        _ = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        O = function (e, t) {
          return t.module.selectItems(e)
        },
        E = Object(y.a)()
          .propsFromState(function (e) {
            return { fetchStatus: _, items: O }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(g.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        I = n('v//M'),
        w = n('sIe2'),
        P = n('3XMw'),
        C = n.n(P),
        k = n('TEoO')
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
          var n,
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var D = C.a.i9028824,
        x = 'sliceTimeline',
        j = function (e) {
          return e
        },
        R = { viewType: 'timeline' },
        A = (function (e) {
          u()(n, e)
          var t = S(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  i = t.noItemsRenderer,
                  a = t.numColumns,
                  o = t.onScrollEnd,
                  c = t.renderer,
                  l = t.withoutHeadroom
                return !r || a < 1
                  ? null
                  : 1 === a
                  ? b.createElement(k.a, {
                      cacheKey: x,
                      footer: n,
                      identityFunction: j,
                      items: r,
                      noItemsRenderer: i,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : b.createElement(w.a, {
                      ListEmptyComponent: i,
                      data: r,
                      keyExtractor: j,
                      numColumns: a,
                      renderItem: c,
                    })
              }),
              v()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              v()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  r = t.createLocalApiErrorHandler,
                  i = t.fetch,
                  a = t.fetchIfNeeded
                ;(n ? i : a)().catch(r())
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    r = e.retryMessage
                  return n
                    ? b.createElement(I.a, {
                        accessibilityLabel: D,
                        behavioralEventContext: R,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: r,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      v()(A, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var T = E(A)
      t.a = T
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var r = n('ERkP')
      function i(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var a = n('97Jx'),
        o = n.n(a),
        c = n('KEM+'),
        l = n.n(c),
        s = (n('jwue'), n('+oxZ'), n('3XMw')),
        u = n.n(s),
        d = n('/yvb'),
        m = n('fn9Y'),
        p = u.a.c0530da5,
        f = u.a.ifea3114
      var h = function (e) {
          return r.createElement(d.a, {
            accessibilityLabel: p,
            hoverLabel: { label: f },
            icon: r.createElement(m.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        v = 'share-button',
        b = 'share-by-tweet',
        y = n('m3Bd'),
        g = n.n(y),
        _ = n('1YZw'),
        O = n('CaKu')
      n('Cm4o'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP')
      function E(e) {
        var t = new URL(e, 'https://twitter.com')
        return t.searchParams.has('s') || t.searchParams.set('s', '20'), t.href
      }
      var I = n('SrIh'),
        w = n('Irs7'),
        P = n('uDfI'),
        C = n('Ty5D'),
        k = n('jwTb'),
        S = n('SOvA'),
        D = n('I/9y'),
        x = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: k.a,
            text: u.a.fcc684a9,
            testID: b,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: S.a,
            text: u.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return O.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: D.a,
            text: u.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: m.a,
            text: u.a.if23a251,
          },
        }
      function j(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function A(e) {
        var t = Object(w.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(P.c)(),
              i = Object(C.g)()
            return r.useMemo(
              function () {
                return function (r) {
                  var a = x[r.type],
                    o = a.isAvailable,
                    c = a.scribeAction,
                    l = g()(a, ['isAvailable', 'scribeAction'])
                  if (!o()) return null
                  var s = R({}, l)
                  function u() {
                    var a = r.shareText || e.shareText,
                      o = e.url,
                      l = R(R({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      s = { text: a, url: o },
                      u = { analytics: t, dispatch: n, history: i, mergedScribeNamespace: l }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(R(R({}, L(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            O.a.setString(E(t.url)),
                            r(),
                            void n.dispatch(Object(_.b)({ text: T.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              R(
                                R({ pathname: '/compose/tweet' }, L(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: E(t.url) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(R(R({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(I.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, s, u)
                  }
                  return r.label && (s.text = r.label), R(R({}, s), {}, { onClick: u })
                }
              },
              [t, n, i, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var T = { copyLinkSuccessMessage: u.a.f88553c8, shareTextPrefixFormatter: u.a.gb5851d7 }
      function L(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? T.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var B = n('T0aG'),
        M = n.n(B),
        N = n('mN6z')
      var F = n('mjJ+'),
        H = n('rHpw')
      function U(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? U(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : U(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var z = { element: 'share' }
      function W(e) {
        var t = (function (e) {
            var t = r.useRef({ previous: void 0 })
            if ('object' !== M()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var i = t.current.previous
            return i && (e === i || Object(N.a)(e, i)) ? i : n()
          })(V(V({}, z), e.scribeNamespace)),
          n = A(V(V({}, e), {}, { scribeNamespace: t })),
          i = n.analytics,
          a = n.getActionItem
        var o = e.ButtonComponent || G
        return r.createElement(o, {
          onPress: function () {
            var e = V(V({}, t), {}, { action: 'share_menu_click' })
            i.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.Children.forEach(e.children, function (e) {
                    if (r.isValidElement(e)) {
                      var t = a(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = a({ type: e })
                    t && n.push(t)
                  }),
              r.createElement(F.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function G(e) {
        return r.createElement(h, o()({}, e, { style: Y.button, testID: v }))
      }
      var Y = H.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function q(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          a = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = g()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return r.createElement(
          W,
          c,
          r.createElement(i, { label: o, type: 'tweet' }),
          r.createElement(i, { label: n, type: 'dm' }),
          r.createElement(i, { label: t, type: 'copy' }),
          r.createElement(i, { label: a, type: 'via' }),
        )
      }
      ;(q.Action = i), (q.Custom = W)
      t.a = q
    },
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var r = n('ERkP'),
        i = n('cm6r'),
        a = n('rHpw'),
        o = n('MWbm'),
        c = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            a = e.isCompact,
            c = e.link,
            s = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            f = e.withInteractiveStyling,
            h = r.createElement(
              r.Fragment,
              null,
              r.createElement(o.a, { style: [l.defaultUpperContainerStyle, m, a && { height: 'auto' }] }, p),
              s ? r.createElement(o.a, { style: [l.defaultLowerContainerStyle, d] }, s) : null,
            )
          return r.createElement(
            i.a,
            { accessibilityLabel: t, interactive: f, link: c, onClick: u, style: [l.root, n] },
            h,
          )
        }
      c.defaultProps = { withInteractiveStyling: !1 }
      var l = a.a.create(function (e) {
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
      t.a = c
    },
    Mhzv: function (e, t, n) {
      'use strict'
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP')
      var r = n('ERkP'),
        i = n('zb92'),
        a = Object(i.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(6), n.e(12), n.e(19), n.e(186)]).then(n.bind(null, 'wHP+'))
          },
          renderPlaceholder: function () {
            return r.createElement('div', null)
          },
        })
      t.a = a
    },
    RrqW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      })
      var r,
        i = n('KEM+'),
        a = n.n(i),
        o = (n('yH/f'), n('ERkP')),
        c = n('t62R'),
        l = n('FIs5'),
        s = n('rHpw'),
        u = n('3XMw'),
        d = n.n(u),
        m = 'sensitive',
        p = 'blocked',
        f = 'blocked_by',
        h = Object.freeze({ SENSITIVE: m, BLOCKED: p, BLOCKED_BY: f }),
        v = { title: d.a.j32d345d, button: d.a.c3d89aca, body: void 0 },
        b = {
          title: d.a.a01d5a7c,
          body: function (e) {
            var t = e.screenName
            return o.createElement(
              d.a.I18NFormatMessage,
              { $i18n: 'ha49b9b7', screenName: t },
              o.createElement(c.b, { link: 'https://support.twitter.com/articles/117063' }, d.a.i859a9d3),
            )
          },
          button: d.a.f277e949,
        },
        y = { title: d.a.b2311b7f, body: d.a.cab51f93, button: void 0 },
        g = Object.freeze(((r = {}), a()(r, m, v), a()(r, p, b), a()(r, f, y), r)),
        _ = function (e, t) {
          return 'function' == typeof e ? (t && e({ screenName: t })) || void 0 : e
        },
        O = s.a.create(function (e) {
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
          r = e.type,
          i = g[r],
          a = i.body,
          c = i.button,
          s = i.title,
          u = _(s, n),
          d = _(a, n)
        return o.createElement(l.a, { buttonText: c, header: u, message: d, onButtonPress: t, style: O.style })
      }
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        i = n.n(r),
        a = n('ERkP'),
        o = n('5UID'),
        c = n('3GUV'),
        l = n('iBK2'),
        s = a.createElement(c.a, null),
        u = function (e) {
          var t = e.accessibilityTitle,
            n = i()(e, ['accessibilityTitle']),
            r = a.createElement(l.b, n)
          return t ? a.createElement(o.a, { title: t }, r) : r
        }
      ;(u.defaultProps = { footer: s }), (t.a = u)
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ne
      })
      n('OZaJ')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        m = n.n(d),
        p = n('AuHH'),
        f = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        b = (n('2G9S'), n('ERkP')),
        y = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        g = n.n(y),
        _ = n('1YZw'),
        O = n('Fg8X'),
        E = n('n4jD'),
        I = n('RqPI'),
        w = n('iUle'),
        P = function (e) {
          return function (t, n, r) {
            var i = r.api,
              a = n(),
              o = Object(I.q)(a) || '',
              c = Object(E.c)(a),
              l = Object(w.a)(o),
              s = { moment_id: e, teamUserId: c }
            return i.Moments.delete(s).then(function () {
              t([O.a.deleteOne(e), l.removeEntry('moment-'.concat(e))])
            })
          }
        },
        C = n('rxPX'),
        k = Object(C.a)()
          .propsFromState(function () {
            return { activeTeamId: E.c }
          })
          .propsFromActions(function () {
            return { addToast: _.b, deleteMoment: P }
          })
          .withAnalytics({ component: 'action_sheet' }),
        S = n('ACNv'),
        D = n('3XMw'),
        x = n.n(D),
        j = n('Rp9C'),
        R = n('TnY3'),
        A = n('v6aA'),
        T = n('hiGS'),
        L = n('I/9y'),
        B = n('TW8A'),
        M = n('xrkw'),
        N = n('zIWA')
      function F(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function H(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? F(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function U(e) {
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
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var V = x.a.e8dff578,
        z = x.a.fcc64f01,
        W = x.a.ea193d66,
        G = x.a.e5227fe0,
        Y = x.a.d0df844c,
        q = x.a.fd61ab81,
        X = x.a.aaae5e7f,
        K = x.a.d96cf7cd,
        J = x.a.e7718461,
        Z = (function (e) {
          u()(n, e)
          var t = U(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(l()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  r = t.id,
                  i = t.withEditAction,
                  a = t.withLinkAction,
                  o = []
                return (
                  e._isOwner()
                    ? (o.push({
                        confirmation: { label: K, headline: q, text: X, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: W,
                        Icon: T.a,
                      }),
                      a && o.push({ link: '/i/events/'.concat(r), onClick: e._handleClickLink, text: G, Icon: L.a }),
                      i && o.push({ link: '/i/moment_maker/edit/'.concat(r), text: V, Icon: B.a }),
                      o.push({
                        link: '/i/moments/'.concat(r, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: Y,
                        Icon: M.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: z, Icon: N.a }),
                  o
                )
              }),
              v()(l()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  r = t.history,
                  i = t.id,
                  a = t.scribeNamespace,
                  o = H(H({}, n), a)
                r.push({
                  pathname: '/i/report/moment/'.concat(i),
                  state: { clientReferer: window.location.pathname, isMedia: !0, scribeNamespace: o },
                })
              }),
              v()(l()(e), '_handleClickLink', function () {
                e._scribeAction('click', 'link_button')
              }),
              v()(l()(e), '_handleNavigateAnalytics', function () {
                e._scribeAction('moment_analytics')
              }),
              v()(l()(e), '_handleDeleteConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  r = t.deleteMoment,
                  i = t.history,
                  a = t.id,
                  o = t.redirectOnDelete
                r(a).then(function () {
                  e._scribeAction('delete'),
                    n({ text: J }),
                    o && i.goBack({ backLocation: o, shouldReplaceOnFallback: !0 })
                })
              }),
              v()(l()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  i = r.analytics,
                  a = r.id,
                  o = r.scribeMomentItem,
                  c = r.scribeNamespace,
                  l = H(
                    H({}, i.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        g()(i.contextualScribeData && i.contextualScribeData.items ? i.contextualScribeData.items : []),
                        [o || j.a.getMomentItem(a)],
                      ),
                    },
                  )
                i.scribe(H({ action: t, data: l, element: n }, c))
              }),
              v()(l()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  r = t.author,
                  i = e.context.loggedInUserId,
                  a = i && (null == r ? void 0 : r.id_str) === i,
                  o = n && (null == r ? void 0 : r.id_str) === n
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
                    ? b.createElement(S.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(b.Component)
      v()(Z, 'contextType', A.a)
      var Q = k(Z),
        $ = Object(R.a)(Q),
        ee = n('2G3J')
      function te(e) {
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
            r = f()(e)
          if (t) {
            var i = f()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var ne = (function (e) {
        u()(n, e)
        var t = te(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(l()(e), '_renderMenu', function (t) {
              var n = e.props,
                r = n.author,
                i = n.eventId,
                a = n.redirectOnDelete,
                o = n.scribeMomentItem,
                c = n.scribeNamespace,
                l = n.title,
                s = n.withEditAction,
                u = n.withLinkAction
              return b.createElement($, {
                author: r,
                id: i,
                onClose: t,
                redirectOnDelete: a,
                scribeMomentItem: o,
                scribeNamespace: c,
                title: l,
                withEditAction: s,
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
                  r = e.size,
                  i = e.style,
                  a = e.type
                return b.createElement(ee.a, {
                  iconStyle: t,
                  onPress: n,
                  renderMenu: this._renderMenu,
                  size: r,
                  style: i,
                  type: a,
                })
              },
            },
          ]),
          n
        )
      })(b.Component)
      v()(ne, 'defaultProps', { withEditAction: !0 })
    },
    XmKV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return o
        })
      n('6U7i'), n('LW0h')
      var r = function (e, t) {
          if (0 !== e.length) {
            for (var n = e[0], r = t(n), i = 1; i < e.length; i++) {
              var a = e[i],
                o = t(a)
              o < r && ((n = a), (r = o))
            }
            return n
          }
        },
        i = n('HT/6'),
        a = function (e) {
          var t,
            n,
            i =
              null == e || null === (t = e[0]) || void 0 === t || null === (n = t.placement) || void 0 === n
                ? void 0
                : n.scrollY()
          return r(
            e,
            0 === i
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
            return e.playbackPriority === i.a.DOCKABLE
          })
          return t.length ? t[0] : a(e)
        }
    },
    XvPy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return vr
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        i = n.n(r),
        a = n('VrFO'),
        o = n.n(a),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('N+ot'),
        f = n.n(p),
        h = n('AuHH'),
        v = n.n(h),
        b = n('KEM+'),
        y = n.n(b),
        g = (n('z84I'), n('ERkP')),
        _ = (n('Blm6'), n('jQ/y'), n('ikiw')),
        O = n('t62R'),
        E = n('0GAP'),
        I = n('3XMw'),
        w = n.n(I),
        P = w.a.cfe836d1,
        C = w.a.efb132c2
      w.a.f27deeea
      var k = function (e) {
          return _.a[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6)
        },
        S = function (e, t) {
          var n = k(e)
          return 'Preorder' === t
            ? (function (e) {
                return g.createElement(
                  w.a.I18NFormatMessage,
                  { $i18n: 'd6c6deae' },
                  g.createElement(O.b, { weight: 'bold' }, w.a.j2b1a8b8({ formattedPrice: e })),
                )
              })(n)
            : g.createElement(O.b, { weight: 'bold' }, n)
        },
        D = function (e, t) {
          var n = parseInt(t.micro_value, 10),
            r = parseInt(e.micro_value, 10),
            i = Math.round(((n - r) / n) * 100)
          return P({ percent: i })
        },
        x = function (e, t, n) {
          return e && e.length > 0 ? e[e.length - 1] : t ? t.shortened_google_product_category_name : void 0
        },
        j = function (e) {
          var t = e.commerceProduct,
            n = e.onClick,
            r = e.style,
            i = t.product_core_data,
            a =
              null != i
                ? (function (e) {
                    var t = e.product_details,
                      n = e.product_identifiers,
                      r = t.availability,
                      i = t.cover_media,
                      a = (t.description, t.external_url),
                      o = t.price,
                      c = t.product_sale,
                      l = t.title,
                      s = null == n ? void 0 : n.custom_product_type,
                      u = null == n ? void 0 : n.google_product_category,
                      d = null == i ? void 0 : i.media_info
                    if (null == d) return null
                    var m = (function (e, t) {
                        return t
                          ? { currentPrice: t.price, previousPrice: e }
                          : { currentPrice: e, previousPrice: void 0 }
                      })(o, c),
                      p = m.currentPrice,
                      f = m.previousPrice
                    return {
                      formattedDescription: x(s, u),
                      formattedPercentOff: f ? D(p, f) : void 0,
                      formattedPreviousPrice: f ? k(f) : void 0,
                      formattedPrice: S(p, r),
                      formattedTitle: l,
                      image: 'ApiImage' === d.__typename ? d.original_img_url : '',
                      url: a.url,
                    }
                  })(i)
                : null
          if (a) {
            var o = a.formattedDescription,
              c = a.formattedPercentOff,
              l = a.formattedPreviousPrice,
              s = a.formattedPrice,
              u = a.formattedTitle,
              d = a.image,
              m = a.url
            return g.createElement(E.a, {
              accessibilityLabel: C({ title: u, description: o, price: s }),
              containerStyle: r,
              description: o,
              image: d,
              imageOverlayText: c,
              link: m,
              onClick: function () {
                n && n()
              },
              previousPrice: l,
              price: s,
              title: u,
            })
          }
          return null
        },
        R = n('3zvM'),
        A = n('lMB6')
      function T(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      var L = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? T(Object(n), !0).forEach(function (t) {
                  y()(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : T(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        })({}, Object(R.f)({ namespace: 'commerceItems' })),
        B = A.a.register(L),
        M = n('rxPX'),
        N = function (e, t) {
          var n = t.commerceItemId
          return n ? B.select(e, n) : void 0
        },
        F = Object(M.a)().propsFromState(function () {
          return { commerceItem: N }
        })(function (e) {
          var t = e.commerceItem,
            n = e.onClick
          switch (null == t ? void 0 : t.__typename) {
            case 'CommerceProduct':
              t.__typename
              var r = i()(t, ['__typename'])
              return g.createElement(j, { commerceProduct: r, onClick: n })
            default:
              return null
          }
        }),
        H = function (e, t) {
          return t.module
            .selectItems(e)
            .map(function (t) {
              return t ? B.select(e, t) : void 0
            })
            .filter(Boolean)
        },
        U = Object(M.a)().propsFromState(function (e) {
          return { commerceItems: H }
        }),
        V = n('MWbm'),
        z = { threshold: 0.01 },
        W = function (e) {
          var t = e.children,
            n = e.onImpression,
            r = e.style,
            i = g.useRef(null),
            a = function (e) {
              e.forEach(function (e) {
                e.isIntersecting && n()
              })
            }
          return (
            g.useEffect(function () {
              if ('IntersectionObserver' in window) {
                var e = new IntersectionObserver(a, z),
                  t = i.current
                null != t && e.observe(t)
                return function () {
                  var t = i.current
                  null != t && e.unobserve(t), e.disconnect()
                }
              }
            }, []),
            g.createElement(V.a, { ref: i, style: r }, t)
          )
        },
        G = n('Rp9C'),
        Y = n('FS1z'),
        q = n('Irs7'),
        X = n('FIs5'),
        K = n('rHpw'),
        J = w.a.e9f1fbcb,
        Z = w.a.c9b302f8,
        Q = function () {
          return g.createElement(X.a, { header: J, message: Z })
        },
        $ = K.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 },
            cell: { marginHorizontal: '1%', marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: '48%' },
          }
        }),
        ee = Object(q.a)(
          U(function (e) {
            var t = e.analytics,
              n = e.commerceItems,
              r = e.module,
              i = t.contextualScribeData,
              a = function (e, r) {
                var a = G.a.addCommerceDetailsToItems(i, n, e)
                t.scribe({ element: 'product', action: r, data: a })
              },
              o = function (e) {
                return function () {
                  a(e, 'impression')
                }
              },
              c = function (e) {
                return function () {
                  a(e, 'click')
                }
              }
            return g.createElement(
              V.a,
              { style: $.root },
              g.createElement(Y.a, {
                module: r,
                noItemsRenderer: Q,
                numColumns: 2,
                renderer: function (e) {
                  var t = e.item
                  return g.createElement(
                    W,
                    { onImpression: o(t), style: $.cell },
                    g.createElement(F, { commerceItemId: t, onClick: c(t) }),
                  )
                },
              }),
            )
          }),
        ),
        te = n('dwig'),
        ne = n('kGix'),
        re = n('v//M'),
        ie = n('0+qk'),
        ae = (n('2G9S'), n('hBvt'), n('uFXj'), n('ho0z'), n('G6rE')),
        oe = Object(M.a)()
          .propsFromState(function () {
            return { loggedInUser: ae.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          })
          .withAnalytics(),
        ce = n('cm6r'),
        le = n('XP29'),
        se = n('cjZk'),
        ue = n('3rWK'),
        de = n('ll3R')
      function me(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var pe = w.a.b8f0483e,
        fe = w.a.e349147b,
        he = (function (e) {
          m()(n, e)
          var t = me(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_handleClick', function (t) {
                var n = e.props,
                  r = n.analytics,
                  i = n.onClick
                i && i(t), r.scribe({ component: 'inline_compose_prompt', action: 'click' })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.link,
                    r = e.promptLabel,
                    i = e.userAvatarURI,
                    a = e.userName,
                    o = e.withBorder,
                    c = e.withComposeIcons
                  return g.createElement(
                    ce.a,
                    {
                      accessibilityLabel: pe,
                      interactiveStyles: null,
                      link: t ? void 0 : n,
                      onClick: t ? void 0 : this._handleClick,
                      style: [ve.root, o && ve.borderBottom],
                    },
                    g.createElement(le.a, { accessibilityLabel: a, size: 'xxLarge', uri: i }),
                    g.createElement(
                      V.a,
                      { style: [ve.column, ve.bodyColumn] },
                      g.createElement(
                        V.a,
                        { style: [ve.fakeInput, t && ve.disabled] },
                        g.createElement(O.b, { color: 'gray700', numberOfLines: 1, size: 'subtext1' }, r),
                      ),
                      c
                        ? g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(se.a, { style: ve.icon }),
                            g.createElement(ue.a, { style: ve.icon }),
                            g.createElement(de.a, { style: ve.icon }),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(he, 'defaultProps', { link: '/compose/tweet', promptLabel: fe, withBorder: !1, withComposeIcons: !0 })
      var ve = K.a.create(function (e) {
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
        be = oe(he),
        ye = n('s3M2'),
        ge = n.n(ye),
        _e = (n('M+/F'), n('RrqW'))
      function Oe(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Ee = (function (e) {
          m()(n, e)
          var t = Oe(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), 'state', { interstitialsToDisplay: void 0 }),
              y()(u()(e), '_handleInterstitialPress', function () {
                var t = e.state.interstitialsToDisplay,
                  n = void 0 === t ? [] : t,
                  r = ge()(n).slice(1)
                e.setState({ interstitialsToDisplay: r })
              }),
              e
            )
          }
          return (
            l()(
              n,
              [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.children
                    return this.state.interstitialsToDisplay ? this._renderNext() : e()
                  },
                },
                {
                  key: '_renderNext',
                  value: function () {
                    var e = this.props.children,
                      t = this.state.interstitialsToDisplay,
                      n = t && t[0]
                    return n ? this._renderInterstitial(n) : e()
                  },
                },
                {
                  key: '_renderInterstitial',
                  value: function (e) {
                    var t = this.props.children,
                      n = e.isFullPageInterstitial,
                      r = e.screenName,
                      i = e.type,
                      a = g.createElement(_e.b, { onPress: this._handleInterstitialPress, screenName: r, type: i })
                    return n ? a : t(a)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.interstitials,
                      r = t.interstitialsToDisplay
                    return n && !r ? { interstitialsToDisplay: n } : null
                  },
                },
              ],
            ),
            n
          )
        })(g.Component),
        Ie = n('wAC9'),
        we = function (e) {
          return Object(Ie.a)({
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
        Pe = (n('jQ3i'), n('x4t0'), n('zrc3')),
        Ce = n('8/3a'),
        ke =
          (n('yH/f'),
          n('m9LP'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('hCOa'),
          (function () {
            function e(t) {
              var n = this
              o()(this, e),
                y()(this, '_scribedIndices', new Map()),
                y()(this, '_indiceCallbacks', new Map()),
                y()(this, '_handleScribeImpression', function (e) {
                  n._scribedIndices.set(e, !0), n._scribeImpression(e)
                }),
                (this._scribeImpression = t)
            }
            return (
              l()(e, [
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
                      r = e.intersectionRatio
                    if (!this._scribedIndices.has(n)) {
                      var i = this._indiceCallbacks.has(n)
                      r >= 0.5 && !i
                        ? this._indiceCallbacks.set(
                            n,
                            setTimeout(function () {
                              return t._handleScribeImpression(n)
                            }, 500),
                          )
                        : r < 0.5 && i && (clearTimeout(this._indiceCallbacks.get(n)), this._indiceCallbacks.delete(n))
                    }
                  },
                },
              ]),
              e
            )
          })()),
        Se = n('boUI'),
        De = n('Wms4'),
        xe = n('zlxh'),
        je = w.a.f2382014,
        Re = w.a.g66c8347,
        Ae = function (e) {
          var t = e.playbackDuration
          switch (e.type) {
            case xe.e.LIVE_BROADCAST:
              return g.createElement(De.a, { type: 'live' }, je)
            case xe.e.REPLAY_BROADCAST:
              return g.createElement(De.a, { bold: !0 }, Re)
            case xe.e.VOD:
              return g.createElement(
                De.a,
                null,
                (function (e) {
                  if (e) {
                    var t = Math.round(e / 1e3),
                      n = t % 60,
                      r = n < 10 ? '0'.concat(n) : n,
                      i = (t - n) / 60
                    if (i > 60) {
                      var a = Math.floor(i / 60),
                        o = i % 60,
                        c = o % 60 < 10 ? '0'.concat(o) : o
                      return ''.concat(a, ':').concat(c, ':').concat(r)
                    }
                    return ''.concat(i, ':').concat(r)
                  }
                })(t) || '',
              )
            case xe.e.GIF:
              return g.createElement(De.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        Te = n('hqKg'),
        Le = n('H9MA'),
        Be = n('oEGd'),
        Me = Object(Te.createSelector)(Le.c, function (e) {
          return { dataSaverMode: e }
        }),
        Ne = Object(Be.c)(Me),
        Fe = n('prG5'),
        He = n('A91F')
      function Ue(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ue(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ue(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ze(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var We = w.a.i3f7ff0f,
        Ge = (function (e) {
          m()(n, e)
          var t = ze(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), 'state', { hasImageError: !1, currentSlate: void 0 }),
              y()(u()(e), '_handleError', function () {
                e.setState({ hasImageError: !0 })
              }),
              e
            )
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e, t) {
                    var n = this.state,
                      r = n.currentSlate,
                      i = n.hasImageError,
                      a = t.currentSlate
                    i &&
                      r &&
                      a &&
                      r.image &&
                      a.image &&
                      r.image.url !== a.image.url &&
                      this.setState({ hasImageError: !1 })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.state,
                      t = e.currentSlate,
                      n = e.hasImageError,
                      r = t || {},
                      i = r.cropCandidates,
                      a = r.image,
                      o = r.periscopeVariants
                    return a && !n
                      ? g.createElement(Fe.a, {
                          accessibilityLabel: We,
                          aspectMode: He.a.exact(K.a.theme.aspectRatios.landscape),
                          backgroundColor: K.a.theme.colors.gray50,
                          cropCandidates: i,
                          customVariants: o,
                          hideAcceptOverlay: !0,
                          image: a,
                          onError: this._handleError,
                        })
                      : g.createElement(V.a, { style: Ye.fallback })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    if (t.currentSlate) {
                      var n = t.currentSlate.image.url,
                        r = e.slate.image.url,
                        i = Object(xe.h)(n),
                        a = Object(xe.h)(r),
                        o = 'latest.jpg' === a
                      return i !== a || (!e.dataSaverMode && o) ? Ve(Ve({}, t), {}, { currentSlate: e.slate }) : null
                    }
                    return Ve(Ve({}, t), {}, { currentSlate: e.slate })
                  },
                },
              ],
            ),
            n
          )
        })(g.Component),
        Ye = K.a.create(function (e) {
          return { fallback: { backgroundColor: e.colors.gray50 } }
        }),
        qe = Ne(Ge),
        Xe = n('jV+4'),
        Ke = n('9Xij'),
        Je = n('vCAy')
      function Ze(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Qe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ze(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ze(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $e(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var et = w.a.d58baa7e,
        tt = ['views', 'viewers'],
        nt = (function (e) {
          m()(n, e)
          var t = $e(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClick,
                    t = this._renderImage(),
                    n = this._renderAttribution(),
                    r = this._renderOverlay(t)
                  return g.createElement(V.a, { accessibilityRole: 'button', onClick: e, style: rt.carouselItem }, r, n)
                },
              },
              {
                key: '_renderAttribution',
                value: function () {
                  var e = this.props.mediaItem.carouselItemInfo
                  if (e) {
                    var t = e.name,
                      n = e.screenName,
                      r = e.verified
                    return g.createElement(Xe.a, {
                      isVerified: r,
                      name: t,
                      screenName: n,
                      style: rt.userAttribution,
                      withStackedLayout: !0,
                    })
                  }
                },
              },
              {
                key: '_renderOverlay',
                value: function (e) {
                  var t = this.props.isSelected
                  return g.createElement(
                    Ke.a,
                    { ratio: K.a.theme.aspectRatios.landscape, style: rt.image },
                    this._renderSocialProof(e),
                    t && g.createElement(V.a, { style: rt.selectedOverlay }),
                  )
                },
              },
              {
                key: '_renderSocialProof',
                value: function (e) {
                  var t = this.props.mediaItem.carouselItemInfo || {},
                    n = t.playbackDuration,
                    r = t.socialProof,
                    i = t.type,
                    a =
                      r && tt.includes(r.type)
                        ? g.createElement(
                            De.a,
                            null,
                            g.createElement(
                              V.a,
                              { style: rt.horizontalContainer },
                              g.createElement(Se.a, null),
                              g.createElement(O.b, null, et(r.count)),
                            ),
                          )
                        : null,
                    o = Ae({ playbackDuration: n, type: i })
                  return g.createElement(g.Fragment, null, e, g.createElement(Je.a, { align: 'left' }, o, a))
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props.mediaItem.slate
                  return e ? g.createElement(qe, { slate: e }) : null
                },
              },
            ]),
            n
          )
        })(g.Component),
        rt = K.a.create(function (e) {
          return {
            selectedOverlay: Qe(
              Qe({}, K.a.absoluteFillObject),
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
            carouselItem: { paddingEnd: e.spaces.space12, width: 150 },
            userAttribution: { paddingTop: e.spaces.space4 },
          }
        }),
        it = n('6iuV')
      function at(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ot = Object.freeze({
          CarouselImpression: 'carousel_impression',
          TileClick: 'tile_click',
          TileImpression: 'tile_impression',
          TileAutoClick: 'tile_auto_click',
        }),
        ct = { action: ot.CarouselImpression },
        lt = { action: ot.TileAutoClick },
        st = { action: ot.TileImpression },
        ut = { action: ot.TileClick },
        dt = (function (e) {
          m()(n, e)
          var t = at(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), '_getHandleOnClickForItem', function (t, n) {
                return function () {
                  var r = e.props.onCarouselScribe
                  n(t, function () {
                    return r(ut)
                  })
                }
              }),
              y()(u()(e), '_handleCarouselChildImpression', function (t) {
                ;(0, e.props.onCarouselScribe)(st, { tilePosition: t })
              }),
              y()(u()(e), '_handleVisibleRangeChange', function (t) {
                e._impressionTracker.handleVisibilityChange(t)
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.onCarouselScribe
                  ;(this._impressionTracker = new ke(this._handleCarouselChildImpression)),
                    this._shouldDisplayCarousel() && e(ct)
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
                    r = n.carousel,
                    i = n.onCarouselScribe
                  this._shouldDisplayCarousel() && r.length !== t.length && i(ct)
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._shouldDisplayCarousel()
                    ? g.createElement(
                        it.a,
                        {
                          onVisibleRangeChange: this._handleVisibleRangeChange,
                          style: mt.carousel,
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
                    r = t.selectedItemIndex,
                    i = t.setSelectedCarouselIndex
                  return n.map(function (t, n) {
                    return g.createElement(nt, {
                      isSelected: n === r,
                      key: n,
                      mediaItem: t,
                      onClick: e._getHandleOnClickForItem(n, i),
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
        })(g.PureComponent),
        mt = K.a.create(function (e) {
          return { carousel: { paddingTop: e.spaces.space16 } }
        }),
        pt = dt,
        ft = n('/yvb')
      function ht(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function vt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ht(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ht(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var bt = w.a.j1d352d7,
        yt = w.a.d18909d4,
        gt = { element: 'reminder_button' },
        _t = Object.freeze({ impression: 'impression', click: 'click' })
      var Ot = function (e) {
          var t = e.eventId,
            n = e.onPress,
            r = e.onRemindButtonScribe,
            i = e.remindMeSubscription,
            a = i.notification_id,
            o = i.subscribed,
            c = g.useRef({})
          ;(c.current.onRemindButtonScribe = r),
            g.useEffect(function () {
              var e
              null === (e = c.current) || void 0 === e || e.onRemindButtonScribe(vt({ action: _t.impression }, gt))
            }, [])
          var l = o ? 'primaryOutlined' : 'primaryFilled',
            s = o ? bt : yt
          return g.createElement(
            ft.a,
            {
              onPress: function () {
                n(t, { remind_me: !o, notification_id: a }), r(vt({ action: _t.click }, gt))
              },
              size: 'medium',
              type: l,
            },
            s,
          )
        },
        Et = n('EskI'),
        It = n('v6aA'),
        wt = n('0yYu'),
        Pt = n('97Jx'),
        Ct = n.n(Pt),
        kt = n('ZUOq'),
        St = n('MMRb'),
        Dt = n('zHh/'),
        xt = Object(Te.createSelector)(Le.d, St.selectDrawerVisibility, function (e, t) {
          return { canAutoplay: Object(Dt.a)(e), dmDrawerVisibility: t }
        }),
        jt = Object(Be.c)(xt),
        Rt = n('7JQg'),
        At = n('AQ79'),
        Tt = g.createContext({ dockRequested: !1, closeRequested: !1 }),
        Lt = n('ddV6'),
        Bt = n.n(Lt),
        Mt = n('MXDK')
      function Nt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Ft(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nt(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Nt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ht = { component: 'dock' },
        Ut = Object.freeze({
          dockedOnScroll: 'dock_on_scroll',
          undockOnScroll: 'undock_on_scroll',
          dismissTap: 'dismiss_tap',
          undockTap: 'undock_tap',
        })
      var Vt = function (e) {
          var t = g.useContext(It.a).featureSwitches,
            n = g.useRef(null),
            r = g.useState(!1),
            i = Bt()(r, 2),
            a = i[0],
            o = i[1],
            c = g.useState(!1),
            l = Bt()(c, 2),
            s = l[0],
            u = l[1],
            d = e.onCloseDockComplete,
            m = e.onDockingScribeAction,
            p = e.render
          return (
            (function (e) {
              g.useEffect(
                function () {
                  a && !e && o(!1),
                    a || s === e || (u(e), m(Ft(Ft({}, Ht), {}, { action: e ? Ut.dockedOnScroll : Ut.undockOnScroll })))
                },
                [e],
              )
            })(e.requestDock),
            (function (e, r) {
              g.useEffect(
                function () {
                  if (!r && e) d && d()
                  else if (!r && null != n && n.current) {
                    var i = n.current.offsetTop
                    Mt.d({ featureSwitches: t, top: i })
                  }
                },
                [e, r],
              )
            })(a, s),
            g.createElement(
              V.a,
              { ref: n },
              p({
                closeRequested: a,
                dockRequested: s,
                requestClose: function () {
                  o(!0), u(!1), m(Ft(Ft({}, Ht), {}, { action: Ut.dismissTap }))
                },
                requestUndock: function () {
                  u(!1), m(Ft(Ft({}, Ht), {}, { action: Ut.undockTap }))
                },
              }),
            )
          )
        },
        zt = n('gZV8'),
        Wt = n('xKuM'),
        Gt = n('Lsrn'),
        Yt = n('shC7'),
        qt = n('k/Ka')
      function Xt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Kt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xt(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Jt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(qt.a)(
          'svg',
          Kt(
            Kt({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [Gt.a.root, e.style, Yt.a.getConstants().isRTL && Gt.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          g.createElement(
            'g',
            null,
            g.createElement('path', {
              d: 'M19.687 22H7.813C6.538 22 5.5 20.962 5.5 19.687V13.17c0-.413.336-.75.75-.75s.75.337.75.75v6.517c0 .448.365.813.813.813h11.873c.448 0 .813-.365.813-.813V7.813c0-.448-.365-.813-.813-.813H13.17c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h6.517C20.962 5.5 22 6.538 22 7.813v11.873C22 20.962 20.962 22 19.687 22z',
            }),
            g.createElement('path', {
              d: 'M11.996 10.936L4.56 3.5h4.636c.414 0 .75-.336.75-.75S9.61 2 9.196 2H2.75c-.414 0-.75.336-.75.75v6.455c0 .414.336.75.75.75s.75-.336.75-.75V4.56l7.436 7.437c.146.146.338.22.53.22s.384-.073.53-.22c.293-.294.293-.768 0-1.06z',
            }),
          ),
        )
      }
      Jt.metadata = { width: 24, height: 24 }
      var Zt = Jt,
        Qt = n('hOZg')
      function $t(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var en = w.a.e839db39,
        tn = w.a.a7a119ec,
        nn = (function (e) {
          m()(n, e)
          var t = $t(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), 'state', { isOffscreen: !1 }),
              y()(u()(e), '_render', function (t) {
                var n = t.closeRequested,
                  r = t.dockRequested,
                  i = t.requestClose,
                  a = t.requestUndock,
                  o = e.props,
                  c = o.children,
                  l = o.placeholder
                return g.createElement(
                  Tt.Provider,
                  { value: { closeRequested: n, dockRequested: r } },
                  r && l,
                  g.createElement(
                    V.a,
                    { style: r ? [rn.dockedContainer, e._getDockedBottomStyle()] : void 0 },
                    r && e._renderDockingControlBar(a, i),
                    c,
                  ),
                )
              }),
              y()(u()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  r = n.isDisabled,
                  i = n.visibleThreshold
                r || e.setState({ isOffscreen: t.visibleFraction() <= i })
              }),
              y()(u()(e), '_getDockedBottomStyle', function () {
                return { marginBottom: e.props.dockBottomOffset }
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.isOffscreen,
                    t = this.props,
                    n = t.isDisabled,
                    r = t.onCloseDockComplete,
                    i = t.onDockingScribeAction
                  return g.createElement(
                    zt.e,
                    { onPlacementChange: this._handlePlacementChange, style: rn.root },
                    g.createElement(Vt, {
                      onCloseDockComplete: r,
                      onDockingScribeAction: i,
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
                    r = n.subtitle,
                    i = n.title
                  return g.createElement(Wt.a, {
                    rightControl: this._renderDockingControls(e, t),
                    subtitle: r,
                    title: i,
                  })
                },
              },
              {
                key: '_renderDockingControls',
                value: function (e, t) {
                  return g.createElement(
                    V.a,
                    { style: rn.dockingControls },
                    g.createElement(ft.a, {
                      accessibilityLabel: tn,
                      icon: g.createElement(Zt, null),
                      onPress: e,
                      type: 'brandText',
                    }),
                    g.createElement(ft.a, {
                      accessibilityLabel: en,
                      icon: g.createElement(Qt.a, null),
                      onPress: t,
                      type: 'brandText',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.PureComponent)
      y()(nn, 'defaultProps', {
        placeholder: g.createElement(Ke.a, { ratio: K.a.theme.aspectRatios.landscape }),
        visibleThreshold: 0,
      })
      var rn = K.a.create(function (e) {
          return {
            root: { zIndex: 1 },
            dockedContainer: {
              bottom: 0,
              right: 0,
              marginEnd: e.spaces.space20,
              boxShadow: e.boxShadows.small,
              maxWidth: kt.a.columnWidths.secondary.normal,
              position: 'fixed',
              width: kt.a.columnWidths.secondary.normal,
            },
            dockingControls: { flexDirection: 'row', alignItems: 'baseline' },
          }
        }),
        an = nn,
        on = n('nT9l'),
        cn = n('hACr')
      function ln(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var sn = (function (e) {
        m()(n, e)
        var t = ln(n)
        function n() {
          return o()(this, n), t.apply(this, arguments)
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e,
                  t = this.props,
                  n = t.backgroundColor,
                  r = t.children,
                  i = t.remindMeButton,
                  a = this._renderMediaLabel(),
                  o =
                    a || i
                      ? g.createElement(
                          V.a,
                          {
                            style: [
                              un.verticalAlignment,
                              ((e = n), { backgroundImage: 'linear-gradient(transparent 0%, '.concat(e, ' 100%)') }),
                            ],
                          },
                          g.createElement(V.a, { style: un.wrapper }, i, a),
                        )
                      : null
                return g.createElement(V.a, null, o, r)
              },
            },
            {
              key: '_renderMediaLabel',
              value: function () {
                var e = this.props.mediaLabel
                return e
                  ? g.createElement(
                      V.a,
                      { style: un.mediaLabelWrapper },
                      g.createElement(O.b, { align: 'left', color: 'white', size: 'body', style: un.mediaLabel }, e),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(g.Component)
      y()(sn, 'defaultProps', { backgroundColor: K.a.theme.colors.translucentBlack77 })
      var un = K.a.create(function (e) {
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
        dn = sn,
        mn = n('TIdA'),
        pn = n('wD1h'),
        fn = n('3dad')
      function hn(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var vn = w.a.f93bb3ee,
        bn = (function (e) {
          m()(n, e)
          var t = hn(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(u()(e), 'state', { shouldRenderImage: !0 }),
              y()(u()(e), '_getRenderDataSafeImage', function (t) {
                var n = t.mediaItem,
                  r = t.originalImage
                return function (t) {
                  var i = t.resourceSelectionHandler,
                    a = t.useMinimumData,
                    o = e.props,
                    c = o.fallbackAccessibilityLabel,
                    l = o.slate,
                    s = l.label,
                    u = l.periscopeVariants,
                    d = n.expanded_url,
                    m = n.ext_alt_text,
                    p = n.original_info,
                    f = m || c,
                    h = g.createElement(
                      dn,
                      { mediaLabel: a ? void 0 : s },
                      g.createElement(mn.a, {
                        accessibilityLabel: f,
                        aspectMode: He.a.exact(K.a.theme.aspectRatios.landscape),
                        cropCandidates: p && p.focus_rects,
                        customVariants: u,
                        image: r,
                        onError: e._handleImageError,
                        onVariantSelection: i,
                        previewMode: a,
                      }),
                    )
                  return d
                    ? g.createElement(
                        cn.a,
                        { handlers: y()({}, pn.a.shortcuts.openMediaModal, e._handleOpenPhotoModal) },
                        h,
                      )
                    : h
                }
              }),
              y()(u()(e), '_handleImageError', function () {
                e.setState({ shouldRenderImage: !1 })
              }),
              y()(u()(e), '_handleOpenPhotoModal', function () {
                var t = e.props,
                  n = t.coverMedia,
                  r = t.history
                n && r.push(n.expanded_url)
              }),
              e
            )
          }
          return (
            l()(n, [
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
                    ? g.createElement(on.a, {
                        acceptLabel: vn,
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
                  return Object(xe.s)(n, t) || void 0
                },
              },
            ]),
            n
          )
        })(g.PureComponent),
        yn = n('oQhu'),
        gn = n('XmKV'),
        _n = 'events-player',
        On = n('Modb'),
        En = n('lklz'),
        In = n('Mhzv'),
        wn = n('38/B'),
        Pn = n('HT/6'),
        Cn = n('XrEN'),
        kn = n('mf9H')
      function Sn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function Dn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Sn(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Sn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function xn(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var jn = w.a.b0b38773,
        Rn = { autoplayPrioritizationPolicy: gn.b, minimumVisibilityForAutoplay: zt.b },
        An = new kn.a(Rn),
        Tn = { hideFullScreenButton: !0 },
        Ln = (function (e) {
          m()(n, e)
          var t = xn(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(
                u()(e),
                '_multiVideoAutoAdvanceEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_enabled'),
              ),
              y()(
                u()(e),
                '_multiVideoAutoAdvanceDockEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_dock_enabled'),
              ),
              y()(
                u()(e),
                '_multiVideoAutoAdvanceFullscreenEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_fullscreen_enabled'),
              ),
              y()(
                u()(e),
                '_dockableAutoplayPolicyEnabled',
                e.context.featureSwitches.isTrue('responsive_web_dockable_autoplay_policy_enabled'),
              ),
              y()(u()(e), 'state', { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
              y()(
                u()(e),
                '_getUiStack',
                Object(yn.a)(function (t, n, r, i, a, o) {
                  return function (c) {
                    var l = c.containerRef,
                      s = c.guestsState,
                      u = c.playerApi,
                      d = c.playerState
                    return g.createElement(In.a, {
                      containerRef: l,
                      guestsState: s,
                      isDocked: n,
                      nextItemInfo: i,
                      onUpNextComplete: e._getHandleUpNextOverlayComplete(a),
                      onUpNextReplay: e._handleReplayPress,
                      playerApi: u,
                      playerDisplayOptions: t,
                      playerState: d,
                      renderUpNextImage: function () {
                        var e = null == o ? void 0 : o.slate
                        return g.createElement(
                          g.Fragment,
                          null,
                          e ? g.createElement(qe, { slate: e }) : null,
                          g.createElement(V.a, { style: Bn.backgroundFading }),
                        )
                      },
                      shouldRenderUpNext: r,
                    })
                  }
                }),
              ),
              y()(u()(e), '_renderHorizonPlayer', function (t, n) {
                t.closeRequested
                var r = t.dockRequested,
                  i = t.key,
                  a = t.playerProps
                if (!a) return null
                var o = e.props.disableFullscreenVideo,
                  c = e._shouldRenderUpNext(n, r),
                  l = o ? Tn : void 0,
                  s = e.props,
                  u = s.carousel,
                  d = s.selectedItemIndex,
                  m = e._getNextEligibleCarouselItemIndex(d, u),
                  p = m > -1 && u ? u[m] : void 0,
                  f = null == p ? void 0 : p.carouselItemInfo,
                  h = f
                    ? {
                        playbackDurationMs: f.playbackDuration,
                        name: f.name,
                        screenName: f.screenName,
                        type: f.type,
                        verified: !!f.verified,
                      }
                    : void 0,
                  v = e._getUiStack(a.displayOptions, r, !!c, h, m, p)
                return a
                  ? g.createElement(
                      V.a,
                      { style: r ? Bn.dockedContainerBackground : void 0 },
                      g.createElement(
                        On.a,
                        Ct()({}, a, {
                          displayOptions: l,
                          key: i,
                          loopingThresholdMs: 7e3,
                          onProgressChange: e._handleProgressChange,
                          preserveMuteState: !0,
                          uiStack: v,
                        }),
                      ),
                    )
                  : null
              }),
              y()(u()(e), '_handleProgressChange', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  r = e.state.showUpNextPlayerOverlay
                n !== r && e.setState({ showUpNextPlayerOverlay: n })
              }),
              y()(u()(e), '_getHandleUpNextOverlayComplete', function (t) {
                return function (n) {
                  if (t) {
                    var r = e.props,
                      i = r.onChildScribeAction,
                      a = r.setSelectedCarouselIndex,
                      o = { tilePosition: t }
                    a(t), i(n ? ut : lt, o)
                  }
                  e.setState({ showUpNextPlayerOverlay: !1 })
                }
              }),
              y()(u()(e), '_setPlayer', function (t) {
                e._playerInstance = t
              }),
              y()(u()(e), '_shouldRenderUpNext', function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  r = e.props,
                  i = r.canAutoplay,
                  a = r.carousel,
                  o = r.isPlayerFullscreen,
                  c = r.selectedItemIndex,
                  l = e._getNextEligibleCarouselItemIndex(c, a)
                return (
                  e._multiVideoAutoAdvanceEnabled &&
                  i &&
                  !wn.a.reducedMotionEnabled &&
                  (!n || e._multiVideoAutoAdvanceDockEnabled) &&
                  (!o || e._multiVideoAutoAdvanceFullscreenEnabled) &&
                  t &&
                  e.state.showUpNextPlayerOverlay &&
                  l > -1
                )
              }),
              y()(u()(e), '_handleCloseDockComplete', function () {
                var t = e.state.showUpNextPlayerOverlay,
                  n = e.props,
                  r = n.carousel,
                  i = n.selectedItemIndex
                if (t) {
                  var a = e._getNextEligibleCarouselItemIndex(i, r)
                  e._getHandleUpNextOverlayComplete(a)()
                } else e._playerInstance && e._playerInstance.pause()
              }),
              y()(u()(e), '_handleMuteChange', function (t) {
                var n = t.isPlayerMuted
                return e.setState({ isPlayerMuted: n })
              }),
              y()(u()(e), '_handleReplayPress', function () {
                e._playerInstance && e._playerInstance.replay()
              }),
              y()(u()(e), '_getNextEligibleCarouselItemIndex', Object(yn.a)(xe.l)),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.carouselItemInfo,
                    r = t.isDockingEnabled,
                    i = t.mediaType,
                    a = t.onChildScribeAction,
                    o = t.title
                  switch (i) {
                    case xe.e.REPLAY_BROADCAST:
                    case xe.e.LIVE_BROADCAST:
                    case xe.e.VOD:
                      e = this._renderVideo()
                      break
                    case xe.e.GIF:
                      e = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 })
                      break
                    case xe.e.SLATE:
                    default:
                      e = this._renderImage()
                  }
                  var c = r ? this._renderUserSceenName(n) : null
                  return g.createElement(
                    an,
                    {
                      dockBottomOffset: this._getOffsetForDrawer(),
                      isDisabled: !r,
                      onCloseDockComplete: this._handleCloseDockComplete,
                      onDockingScribeAction: a,
                      subtitle: c,
                      title: o,
                      visibleThreshold: zt.b,
                    },
                    g.createElement(V.a, { style: Bn.container, testID: _n }, e),
                  )
                },
              },
              {
                key: '_getOffsetForDrawer',
                value: function () {
                  var e = K.a.theme.spaces,
                    t = this.props.dmDrawerVisibility,
                    n = parseInt(''.concat(e.space20), 10)
                  return t === At.b.COLLAPSED
                    ? kt.a.dmDrawerHeight.collapsed + n
                    : t === At.b.EXPANDED
                    ? kt.a.dmDrawerHeight.expanded + n
                    : n
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.mediaDetails,
                    r = e.slate
                  return r
                    ? g.createElement(bn, {
                        coverMedia: n.coverMedia,
                        fallbackAccessibilityLabel: jn,
                        history: t,
                        slate: r,
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
                    r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = r.isGif,
                    a = void 0 !== i && i,
                    o = r.withUpNextOverlay,
                    c = void 0 === o || o,
                    l = this.props,
                    s = l.eventId,
                    u = l.mediaDetails,
                    d = u.broadcastId,
                    m = u.coverMedia,
                    p = u.coverTweet,
                    f = void 0 === p ? {} : p,
                    h = u.mediaId,
                    v = u.promotedContent,
                    b = l.onFullscreenChange,
                    y = l.slate,
                    _ = m || {},
                    O = _.id_str,
                    E = f.id_str,
                    I = y || {},
                    w = I.image,
                    P = I.periscopeVariants,
                    C = {
                      accessibilityLabel: jn,
                      aspectRatio: K.a.theme.aspectRatios.landscape,
                      backgroundColor: K.a.theme.colors.gray0,
                      maxLoopCount: a ? void 0 : 3,
                      onFullscreenChange: b,
                      onMuteChange: this._handleMuteChange,
                      promotedContent: v,
                      playbackCoordination: this._dockableAutoplayPolicyEnabled ? kn.b : An,
                      playbackPriority: Pn.a.DOCKABLE,
                      poster: w,
                      customVariants: P,
                      shouldPlayUnmuted: !this.state.isPlayerMuted,
                      setPlayer: this._setPlayer,
                    }
                  if (d && h)
                    (e = d),
                      (t = Dn(
                        Dn({}, C),
                        {},
                        {
                          videoType: 'video',
                          includeBroadcastEventAssociation: !0,
                          source: { contentId: h, variants: [], videoId: En.b.forBroadcast(d) },
                        },
                      ))
                  else if (O && E) {
                    var k = En.b.forTweet(E),
                      S = Cn.a.getVideoFromCoverMedia(m),
                      D = S && Cn.a.extractVideoProps(k, S, s)
                    ;(e = O), (t = D ? Dn(Dn({}, D), C) : void 0)
                  }
                  return g.createElement(Tt.Consumer, null, function (r) {
                    var i = r.closeRequested,
                      a = r.dockRequested
                    return n._renderHorizonPlayer({ closeRequested: i, dockRequested: a, key: e, playerProps: t }, c)
                  })
                },
              },
              {
                key: '_renderUserSceenName',
                value: function (e) {
                  var t = e || {},
                    n = t.accountType,
                    r = t.name,
                    i = t.screenName,
                    a = t.userId,
                    o = null
                  return (
                    a &&
                      (n === xe.a.TWITTER && i
                        ? (o = g.createElement(Xe.a, { screenName: i, weight: 'normal', withLink: !0 }))
                        : n === xe.a.PERISCOPE &&
                          r &&
                          (o = g.createElement(O.b, { color: 'gray700', link: 'https://pscp.tv/u/'.concat(a) }, r))),
                    o
                  )
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(Ln, 'contextType', It.a)
      var Bn = K.a.create(function (e) {
          return {
            backgroundFading: Dn(Dn({}, K.a.absoluteFillObject), {}, { backgroundColor: e.colors.translucentBlack30 }),
            container: { zIndex: 10 },
            dockedContainerBackground: { backgroundColor: e.colors.cellBackground },
          }
        }),
        Mn = Object(Rt.c)({ element: 'image' })(jt(Ln))
      function Nn(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      w.a.f2382014, w.a.g66c8347
      var Fn = (function (e) {
        m()(n, e)
        var t = Nn(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            y()(u()(e), '_enableMultiVideo', e.context.featureSwitches.isTrue('live_event_multi_video_enabled')),
            y()(u()(e), '_enableDocking', e.context.featureSwitches.isTrue('live_event_docking_enabled')),
            y()(u()(e), 'state', { headerWidth: 0 }),
            y()(u()(e), '_getSelectedItemIndex', function (e, t) {
              return Object(Pe.a)(e, function (e) {
                return e.id === t
              })
            }),
            y()(u()(e), '_setSelectedCarouselIndex', function (t) {
              var n = e.props,
                r = n.carousel,
                i = n.setSelectedCarouselItem,
                a = r && r[t]
              a && i(a)
            }),
            e
          )
        }
        return (
          l()(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.selectedCarouselItem
                return g.createElement(
                  g.Fragment,
                  null,
                  e && this._renderHeaderMedia(e),
                  this._renderDescription(e),
                  g.createElement(wt.a, null),
                )
              },
            },
            {
              key: '_renderDescription',
              value: function (e) {
                var t,
                  n,
                  r,
                  i = this.props,
                  a = i.isTOO,
                  o = i.liveEventDetails,
                  c = o.author,
                  l = o.category,
                  s = o.description,
                  u = o.timeString,
                  d = o.title,
                  m = null == e || null === (t = e.mediaDetails) || void 0 === t ? void 0 : t.coverTweet,
                  p = null == e || null === (n = e.mediaDetails) || void 0 === n ? void 0 : n.coverMedia,
                  f = null == e || null === (r = e.slate) || void 0 === r ? void 0 : r.imageAttribution
                return g.createElement(
                  V.a,
                  { style: Hn.contentContainer },
                  d
                    ? g.createElement(Ce.a, {
                        author: c,
                        coverTweet: m,
                        description: s,
                        imageAttribution: f,
                        isTOO: a,
                        mediaType: null == p ? void 0 : p.type,
                        preTitle: a || !c ? l : '',
                        remindMeButton: this._renderRemindMeButton(),
                        time: u,
                        title: d,
                        withHashflags: !0,
                      })
                    : null,
                  this._renderScoreCard(),
                  this._enableMultiVideo && e ? this._renderCarousel(e) : null,
                )
              },
            },
            {
              key: '_renderHeaderMedia',
              value: function (e) {
                var t = this.props,
                  n = t.carousel,
                  r = t.disableFullscreenVideo,
                  i = t.history,
                  a = t.isPlayerFullscreen,
                  o = t.liveEventDetails,
                  c = o.eventId,
                  l = o.title,
                  s = t.onChildScribeAction,
                  u = t.onFullscreenChange,
                  d = e.carouselItemInfo,
                  m = e.mediaDetails,
                  p = e.slate,
                  f = d.type,
                  h = this._getDockingEnabled(f)
                return g.createElement(Mn, {
                  carousel: n,
                  carouselItemInfo: d,
                  disableFullscreenVideo: r,
                  eventId: c,
                  history: i,
                  isDockingEnabled: h,
                  isPlayerFullscreen: a,
                  mediaDetails: m,
                  mediaType: f,
                  onChildScribeAction: s,
                  onFullscreenChange: u,
                  selectedItemIndex: this._getSelectedItemIndex(n || [], e.id),
                  setSelectedCarouselIndex: this._setSelectedCarouselIndex,
                  slate: p,
                  title: l,
                })
              },
            },
            {
              key: '_renderRemindMeButton',
              value: function () {
                var e = this.props,
                  t = e.liveEventDetails,
                  n = t.eventId,
                  r = t.remindMeSubscription,
                  i = e.onChildScribeAction,
                  a = e.remindMeButtonSubscribe,
                  o = e.remindMeButtonUnsubscribe,
                  c = !!this.context.loggedInUserId,
                  l = (r || {}).toggle_visible
                return c && l && r && a && o
                  ? g.createElement(Ot, {
                      eventId: n,
                      onPress: r.subscribed ? o : a,
                      onRemindButtonScribe: i,
                      remindMeSubscription: r,
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
                return t && n ? g.createElement(Et.a, { scoreData: t }) : null
              },
            },
            {
              key: '_renderCarousel',
              value: function (e) {
                var t = this.props,
                  n = t.carousel,
                  r = t.onChildScribeAction
                return n
                  ? g.createElement(pt, {
                      carousel: n,
                      onCarouselScribe: r,
                      selectedItemIndex: this._getSelectedItemIndex(n, e.id),
                      setSelectedCarouselIndex: this._setSelectedCarouselIndex,
                    })
                  : null
              },
            },
            {
              key: '_getDockingEnabled',
              value: function (e) {
                var t = this.props.isWide,
                  n = this.context.loggedInUserId,
                  r = [xe.e.LIVE_BROADCAST, xe.e.REPLAY_BROADCAST, xe.e.VOD]
                return !!n && this._enableDocking && t && r.includes(e)
              },
            },
          ]),
          n
        )
      })(g.Component)
      y()(Fn, 'contextType', It.a)
      var Hn = K.a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Un = n('9bsQ'),
        Vn = n('3AAD'),
        zn = n('7BdX'),
        Wn = n('IG4P'),
        Gn = n('fTQJ'),
        Yn = n('k/OQ'),
        qn = n('mw9i'),
        Xn = n('QIgh'),
        Kn = n('8UdT'),
        Jn = n('iu0J'),
        Zn = n('IcAo'),
        Qn = n('zgaL')
      function $n(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function er(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? $n(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $n(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var tr = n('U+bB'),
        nr = n('YeIG'),
        rr = n('fs1G')
      function ir(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function ar(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ir(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ir(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function or(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var cr = w.a.abdcd689,
        lr = w.a.a1bb552d,
        sr = w.a.b103771f,
        ur = w.a.bb980dbf,
        dr = w.a.e9f1fbcb,
        mr = w.a.dfd7bbaf,
        pr = w.a.bffb7ed4,
        fr = { component: 'shop_tab' },
        hr = function () {
          return g.createElement(X.a, { header: dr, message: mr })
        },
        vr = (function (e) {
          m()(n, e)
          var t = or(n)
          function n(e) {
            var r
            o()(this, n),
              (r = t.call(this, e)),
              y()(u()(r), 'state', { selectedCarouselItemId: void 0 }),
              y()(u()(r), '_render', function () {
                var e = r.props.interstitialOrderToDisplay
                return r._refreshControlWrapper(
                  g.createElement(Ee, { interstitials: e }, function (e) {
                    return g.createElement(
                      g.Fragment,
                      null,
                      r._renderHeader(),
                      r._renderInlineCompose(),
                      e || r._renderTimeline(),
                    )
                  }),
                )
              }),
              y()(u()(r), '_getComposeTimelineDetails', function () {
                return r.props.timelineDetails.composeDetails
              }),
              y()(u()(r), '_setSelectedCarouselItem', function (e) {
                var t = r.props.onSelectedCarouselItemChange
                t && t(e), r.setState({ selectedCarouselItemId: e.id })
              }),
              y()(u()(r), '_handleInlineComposeOnClick', function (e) {
                e.preventDefault()
                var t = r.props.history,
                  n = { pathname: '/compose/tweet', state: r._getComposeTimelineDetails() }
                t.push(n)
              }),
              y()(
                u()(r),
                '_getTimelineModuleMemoized',
                Object(yn.a)(function (e, t) {
                  return Object(Un.a)(e, t)
                }),
              ),
              y()(
                u()(r),
                '_getLiveCommerceItemsSliceModuleMemoized',
                Object(yn.a)(function (e) {
                  return we(e)
                }),
              )
            var i = e.timelineMessageOverride,
              a = e.withTweetActionsDisabled
            return (
              (r._entryConfiguration = (function (e) {
                var t,
                  n = e.withTweetActionsDisabled
                return er(
                  er({}, Object(Xn.a)({ withTweetActionsDisabled: n })),
                  {},
                  ((t = {}),
                  y()(t, Kn.b.MomentAnnotation, Qn.a),
                  y()(t, Kn.b.EventSummary, Object(Jn.a)({ errorContext: 'LIVE_EVENT_TIMELINE' })),
                  t),
                )
              })({ withTweetActionsDisabled: a })),
              (r._timelinePreprocessor = (function (e) {
                return function (t) {
                  return e
                    ? t.map(function (t) {
                        if (t.type === Kn.b.Message) {
                          var n = { content: { content: { inlinePrompt: { headerText: e } } } }
                          return Object(Zn.a)({}, t, n)
                        }
                        return t
                      })
                    : t
                }
              })(i)),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.liveEventDetails,
                    r = e.onFetch
                  return g.createElement(re.a, {
                    accessibilityLabel: cr,
                    fetchStatus: t,
                    key: n.eventId,
                    onRequestRetry: r,
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
                    r = e.history,
                    i = e.isPlayerFullscreen,
                    a = e.isTOO,
                    o = e.isWide,
                    c = e.liveEventDetails,
                    l = e.onChildScribeAction,
                    s = e.onFullscreenChange,
                    u = e.remindMeButtonSubscribe,
                    d = e.remindMeButtonUnsubscribe,
                    m = e.scoreData,
                    p = e.timelineDetails.hashtag,
                    f = this.state.selectedCarouselItemId,
                    h = Object(xe.p)(t, f)
                  return g.createElement(Fn, {
                    carousel: t,
                    disableFullscreenVideo: n,
                    history: r,
                    isPlayerFullscreen: i,
                    isTOO: a,
                    isWide: o,
                    liveEventDetails: c,
                    onChildScribeAction: l,
                    onFullscreenChange: s,
                    remindMeButtonSubscribe: u,
                    remindMeButtonUnsubscribe: d,
                    scoreData: m,
                    selectedCarouselItem: h,
                    setSelectedCarouselItem: this._setSelectedCarouselItem,
                    timelineHashtag: p,
                    withScoreCard: !o,
                  })
                },
              },
              {
                key: '_renderInlineCompose',
                value: function () {
                  var e = this.props,
                    t = e.isWide,
                    n = e.timelineDetails.hashtag,
                    r = n ? lr({ hashtag: n }) : sr
                  return t
                    ? g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(be, { onClick: this._handleInlineComposeOnClick, promptLabel: r }),
                        g.createElement(wt.a, null),
                      )
                    : null
                },
              },
              {
                key: '_renderTimeline',
                value: function () {
                  var e = this.props.timelineDetails.timelineId,
                    t = this._renderTimelineLinks(),
                    n = e === xe.c.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline()
                  return t.length > 1 || (1 === t.length && t[0].isCustom)
                    ? g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(Yn.a, {
                          accessibilityLabel: ur,
                          links: t.map(function (e) {
                            return { key: e.key, label: e.label, isActive: e.isActive, to: ar({}, e.to) }
                          }),
                        }),
                        g.createElement(V.a, { style: br.timelineContainer }, n),
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
                      r = t.label,
                      a = t.labelType,
                      o = i()(t, ['customizationInfo', 'label', 'labelType']),
                      c = !Object(nr.a)(n),
                      l = e._renderTimelineLabelAnnotation(a),
                      s =
                        c && n
                          ? e._renderCustomLabel({ label: r, customizationInfo: n, labelAnnotation: l })
                          : g.createElement(O.b, { weight: 'bold' }, r, l)
                    return ar(ar({}, o), {}, { key: r, label: s, isCustom: c })
                  })
                },
              },
              {
                key: '_renderTimelineLabelAnnotation',
                value: function (e) {
                  return e === xe.d.New
                    ? g.createElement(De.a, { background: 'primary', bold: !0, style: br.labelAnnotation }, pr)
                    : null
                },
              },
              {
                key: '_renderCustomLabel',
                value: function (e) {
                  var t = e.customizationInfo,
                    n = t.badge_media,
                    r = t.title_color,
                    i = e.label,
                    a = e.labelAnnotation
                  return g.createElement(
                    V.a,
                    { style: br.timelineLabel },
                    n && n.url ? g.createElement(tr.a, { source: n.url, style: br.timelineLabelBadge }) : null,
                    g.createElement(O.b, { style: { color: r }, weight: 'bold' }, i, a),
                  )
                },
              },
              {
                key: '_renderRichTimeline',
                value: function () {
                  var e = this.props,
                    t = e.isPlayerFullscreen,
                    n = e.isWide,
                    r = e.liveEventDetails.title,
                    i = void 0 === r ? ur : r,
                    a = e.onTimelinePoll,
                    o = e.pollingIntervalMs,
                    c = e.timelineDetails,
                    l = c.eventId,
                    s = c.timelineId,
                    u = e.withFloatingComposeButton,
                    d = this._getTimelineModuleMemoized(l, s),
                    m = t || n || !u ? null : this._renderFloatingComposeButton()
                  return g.createElement(
                    te.a,
                    { component: qn.a, fab: m },
                    g.createElement(Gn.a, {
                      anchoring: Vn.a,
                      entryConfiguration: this._entryConfiguration,
                      module: d,
                      onTimelinePoll: a,
                      pollingIntervalMsOverride: o,
                      preprocessEntryList: this._timelinePreprocessor,
                      prerollDisplayLocation: zn.c.OTHER,
                      refreshControl: null,
                      renderEmptyState: hr,
                      title: i,
                    }),
                  )
                },
              },
              {
                key: '_renderCommerceItemSliceTimeline',
                value: function () {
                  var e = this.props.timelineDetails.eventId,
                    t = this._getLiveCommerceItemsSliceModuleMemoized(e)
                  return g.createElement(Rt.b, { namespace: fr }, g.createElement(ee, { module: t }))
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return g.createElement(ie.a, { getLocationState: this._getComposeTimelineDetails, history: e })
                },
              },
              {
                key: '_refreshControlWrapper',
                value: function (e) {
                  var t = this.props,
                    n = t.onFetch,
                    r = t.refreshStatus
                  return g.createElement(Wn.a, { isRefreshing: r === ne.a.LOADING, onRefresh: n }, e)
                },
              },
            ]),
            n
          )
        })(g.Component)
      y()(vr, 'defaultProps', { onChildScribeAction: rr.a })
      var br = K.a.create(function (e) {
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
    jHwr: function (e, t, n) {
      'use strict'
      t.a = function (e, t) {
        var n = null,
          r = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(r)), n
        }
      }
    },
    mf9H: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'b', function () {
          return b
        })
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        c = n('KEM+'),
        l = n.n(c),
        s = (n('hBpG'), n('jwue'), n('+oxZ'), n('vrRf'), n('Ee2X'), n('LW0h'), n('6U7i'), n('6/RC')),
        u = n('XmKV'),
        d = n('HT/6'),
        m = n('jHwr'),
        p = n('+d3d'),
        f = n('fs1G'),
        h = { autoplayPrioritizationPolicy: u.a, minimumVisibilityForAutoplay: 0.25 },
        v = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h
            i()(this, e),
              l()(this, '_players', []),
              l()(this, '_setPlayerState', function (e, t) {
                ;(e.previousPlaybackState = e.playbackState), (e.playbackState = t)
              }),
              l()(this, '_updatePlaybackStates', function () {
                var e = t._players.find(function (e) {
                  return e.playbackState === d.b.USER_PLAYING && e.playbackPriority !== d.a.SPACE
                })
                e && !t._canPlay(e)
                  ? (t._pausePlayer(e), t._triggerAutoplay())
                  : e
                  ? t._stopAllExcept(e)
                  : t._triggerAutoplay()
              }),
              l()(
                this,
                '_scheduleUpdate',
                s.canUseDOM
                  ? Object(p.a)(
                      Object(m.a)(
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
            var r = n.autoplayPrioritizationPolicy,
              a = n.minimumVisibilityForAutoplay
            ;(this._autoplayPrioritizationPolicy = r), (this._minimumVisibilityForAutoplay = a)
          }
          return (
            o()(e, [
              {
                key: 'register',
                value: function (e) {
                  var t = this,
                    n = e.canAutoplay,
                    r = e.onAutoPlayRequest,
                    i = e.onFullscreenEntered,
                    a = e.onFullscreenExited,
                    o = e.onPauseRequest,
                    c = e.isLooping,
                    l = e.playbackPriority,
                    s = void 0 === l ? d.a.NORMAL : l,
                    u = {
                      placement: void 0,
                      playbackPriority: s,
                      playbackState: d.b.INITIAL,
                      previousPlaybackState: d.b.INITIAL,
                      commandHandlers: {
                        onAutoPlayRequest: r,
                        onFullscreenEntered: i,
                        onFullscreenExited: a,
                        onPauseRequest: o,
                      },
                      canAutoplay: n && s !== d.a.INELIGIBLE,
                      isLooping: c,
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
                      r = n.onFullscreenEntered,
                      i = n.onFullscreenExited
                    e && r ? r() : !e && i && i()
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
                    r = e.playbackState === d.b.FINISHED
                  return e.canAutoplay && t && !n && !r
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
                    var r = n.playbackPriority !== d.a.SPACE
                    n === e ||
                      !r ||
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
        b = new v()
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      n('OZaJ')
      var r = n('97Jx'),
        i = n.n(r),
        a = n('m3Bd'),
        o = n.n(a),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        f = n.n(p),
        h = n('N+ot'),
        v = n.n(h),
        b = n('AuHH'),
        y = n.n(b),
        g = n('KEM+'),
        _ = n.n(g),
        O = (n('2G9S'), n('ERkP')),
        E = n('nT9l'),
        I = n('3XMw'),
        w = n.n(I),
        P = 'image',
        C = n('TIdA'),
        k = n('a6qo')
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
          var n,
            r = y()(e)
          if (t) {
            var i = y()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var D = w.a.f93bb3ee,
        x = (function (e) {
          f()(n, e)
          var t = S(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++) a[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              _()(m()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  a = e.props,
                  c = a.accessibilityLabel,
                  l = (a.hideAcceptOverlay, a.shouldShowAltLabel),
                  s = o()(a, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return O.createElement(
                  O.Fragment,
                  null,
                  O.createElement(
                    C.a,
                    i()({}, s, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: P }),
                  ),
                  l ? O.createElement(k.a, { align: 'left', altLabel: c }) : null,
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
                  return O.createElement(E.a, {
                    acceptLabel: D,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(O.Component)
    },
    zgaL: function (e, t, n) {
      'use strict'
      var r = n('ezF+'),
        i =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(213).then(n.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = r.e(i)
    },
    zlxh: function (e, t, n) {
      'use strict'
      n.d(t, 'j', function () {
        return b
      }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'g', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'e', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return P
        }),
        n.d(t, 'm', function () {
          return C
        }),
        n.d(t, 'k', function () {
          return D
        }),
        n.d(t, 's', function () {
          return T
        }),
        n.d(t, 'r', function () {
          return B
        }),
        n.d(t, 'p', function () {
          return M
        }),
        n.d(t, 'q', function () {
          return N
        }),
        n.d(t, 'n', function () {
          return H
        }),
        n.d(t, 'o', function () {
          return U
        }),
        n.d(t, 'i', function () {
          return V
        }),
        n.d(t, 'a', function () {
          return W
        }),
        n.d(t, 'h', function () {
          return K
        }),
        n.d(t, 'l', function () {
          return Z
        }),
        n.d(t, 'c', function () {
          return Q
        })
      n('+KXO'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        a = n('RhWx'),
        o = n.n(a),
        c =
          (n('yH/f'),
          n('vrRf'),
          n('2G9S'),
          n('ho0z'),
          n('hBpG'),
          n('uFXj'),
          n('1t7P'),
          n('jQ/y'),
          n('5BYb'),
          n('z84I'),
          n('LW0h'),
          n('Cm4o'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('Ysgh'),
          n('KqXw'),
          n('vfdX'),
          n('M+/F'),
          n('3XMw')),
        l = n.n(c),
        s = n('lPpt'),
        u = n('XkXQ'),
        d = n('oQhu'),
        m = n('zrc3'),
        p = n('3dad'),
        f = n('XrEN')
      function h(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var b = function (e) {
          return 'https://twitter.com/i/events/'.concat(e)
        },
        y = l.a.d2fb334b,
        g = l.a.ad16f482,
        _ = (l.a.h0786685, '1'),
        O = 'RUNNING',
        E = { '600x1200': 4, '1024x2048': 3, '340x680': 2, '150x150': 1 },
        I = l.a.i0ed3f4d,
        w = Object.freeze({
          LIVE_BROADCAST: 'liveBroadcast',
          REPLAY_BROADCAST: 'replayBroadcast',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        P = Object.freeze({ New: 'New' }),
        C = function (e, t, n) {
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
        k = Object(d.a)(function (e, t) {
          return e.slates && t && e.slates[t]
        }),
        S = function (e, t) {
          var n = (e.slate || e.fallback_slate || {}).id,
            r = (function (e, t) {
              var n = k(e, t),
                r = (n && n.variants) || []
              return Object(u.a)(r, function (e) {
                var t = e.name
                return E[t] || 0
              })
            })(t, n),
            i = (function (e, t, n) {
              var r,
                i = k(e, t)
              if (n && i) {
                var a = i.focus_rects,
                  o = void 0 === a ? [] : a,
                  c = i.tweet_id
                if (!(r = o.length ? o : void 0) && c) {
                  var l,
                    s = (null == e ? void 0 : e.tweets) && (null == e ? void 0 : e.tweets[c]),
                    u = (
                      (null == s || null === (l = s.extended_entities) || void 0 === l ? void 0 : l.media) || []
                    ).find(function (e) {
                      return e.media_key === t
                    })
                  r = u && p.a.getCropCandidates(u)
                }
              }
              return r
            })(t, n, r),
            a = (function (e, t, n) {
              return e ? t.slates[n].label : void 0
            })(r, t, n),
            o = k(t, n) || {},
            c = o.attribution,
            l = o.tweet_id,
            s =
              (function (e, t) {
                if (t.broadcast && t.broadcast.id) {
                  var n = t.broadcast.id,
                    r = x(e, n)
                  return r && { small: r.image_url_small, medium: r.image_url_medium }
                }
              })(t, e) || {},
            d = r && C(s.small, s.medium, r)
          return n && r
            ? { id: n, image: r, imageAttribution: c, periscopeVariants: d, cropCandidates: i, label: a, tweetId: l }
            : void 0
        },
        D = function (e, t) {
          var n = (function (e) {
              var t = e.liveEventDetails.attribution_user_id
              return e.users ? e.users[t] : void 0
            })(t),
            r = t.liveEventDetails,
            i = r.category,
            a = r.description,
            o = r.remind_me_subscription,
            c = r.short_title,
            l = r.time_string,
            s = r.title
          return {
            author: n,
            category: i,
            description: a,
            eventId: e,
            remindMeSubscription: o,
            shortTitle: c || s,
            timeString: l,
            title: s,
          }
        },
        x = function (e, t) {
          return e.broadcasts && t ? e.broadcasts[t] : void 0
        },
        j = function (e, t) {
          var n = e.extended_entities,
            r = (void 0 === n ? {} : n).media
          return (void 0 === r ? [] : r).find(function (e) {
            return e.media_key === t || 'photo' !== e.type
          })
        },
        R = function (e, t, n) {
          var r = e.media,
            i = (void 0 === r ? {} : r).mediaEntity
          return !i || (i.broadcast_id !== t && i.media_tweet_id !== n) ? void 0 : e.promotedContent
        },
        A = function (e, t, n, r, i, a) {
          var o = t && i ? j(t, i) : void 0,
            c = x(n, e),
            l = c ? e : void 0,
            s = null == c ? void 0 : c.media_key,
            u = null == c ? void 0 : c.status,
            d = null == c ? void 0 : c.twitter_user_id,
            m = null == c ? void 0 : c.user_display_name,
            p = null == c ? void 0 : c.username,
            f = null == c ? void 0 : c.width,
            h = null == c ? void 0 : c.height,
            v = null == c ? void 0 : c.broadcast_source,
            b = null == c ? void 0 : c.camera_rotation,
            y = null == c ? void 0 : c.image_url,
            g = null == c ? void 0 : c.replay_edited_start_time
          return {
            mediaId: null == c ? void 0 : c.media_id,
            coverTweet: t,
            coverMedia: o,
            broadcastId: l,
            broadcastMediaKey: s,
            broadcastTitle: u,
            broadcastTwitterId: d,
            broadcastDisplayName: m,
            broadcastUsername: p,
            broadcastWidth: f,
            broadcastHeight: h,
            broadcastThumbnail: y,
            broadcastReplayStartTime: g,
            broadcastSource: v,
            broadcastOrientation: b,
            isLive: (function (e) {
              return !!e && e.state === O
            })(c),
            promotedContent: a && R(a, l, i),
          }
        },
        T = function (e, t) {
          return e && e.image
            ? {
                media_url_https: e.image.url,
                original_info: { focus_rects: e.cropCandidates, height: e.image.height, width: e.image.width },
                ext_alt_text: t ? t.ext_alt_text : I,
                id_str: e.id,
                expanded_url: '',
                type: 'photo',
              }
            : void 0
        },
        L = function (e, t) {
          switch (t) {
            case Q.SHOP:
              return e.isTrue('responsive_web_live_commerce_enabled')
            default:
              return !0
          }
        },
        B = function (e, t, n, r) {
          var i,
            a,
            o = t.liveEventDetails.timelines || [],
            c = o.length ? o[0].timeline_id : _,
            l = o.length ? o[0].hashtag : void 0,
            s = o.length ? o[0].compose_semantic_core_id : void 0,
            u = 0,
            d =
              n &&
              o.some(function (e) {
                return e.timeline_id === n
              }),
            m = L(r, n),
            p = o
              .filter(function (e) {
                var t = e.timeline_id
                return L(r, t)
              })
              .map(function (t, r) {
                var o = t.compose_semantic_core_id,
                  l = t.customization_info,
                  s = t.hashtag,
                  m = t.label_type,
                  p = t.timeline_id,
                  f = t.timeline_source_id,
                  h = t.timeline_source_type,
                  v = t.title,
                  b = p === c
                return (
                  ((d && p === n) || b) && ((u = r), (i = s), (a = o)),
                  {
                    isActive: function () {
                      return d ? p === n : b
                    },
                    to: { pathname: '/i/events/'.concat(e), query: { timeline: p } },
                    label: v,
                    labelType: P[m],
                    customizationInfo: l,
                    hashtag: s,
                    timelineId: p,
                    timelineSourceId: f,
                    timelineSourceType: h,
                  }
                )
              }),
            f = d && m && n ? n : c,
            h = i || l
          return {
            composeDetails: v(
              { composeSemanticCoreId: a || s },
              h ? { defaultText: ' '.concat(h), positionCursorAtBeginning: !0 } : { defaultText: '' },
            ),
            eventId: e,
            hashtag: h,
            timelineId: f,
            timelineIndex: u,
            timelineLinks: p,
          }
        },
        M = function (e, t) {
          if (e) {
            var n = t && F(e, t),
              r = N(e)
            return n || e[r]
          }
        },
        N = function (e) {
          var t = Object(m.a)(e, function (e) {
            return e.selected
          })
          return -1 === t ? 0 : t
        },
        F = function (e, t) {
          return (
            e &&
            e.find(function (e) {
              return e.id === t
            })
          )
        },
        H = function (e) {
          var t = e.response.polling_interval_seconds
          return t > 0 ? t : 0
        },
        U = function (e) {
          var t = e.response.score
          return t && t.data && t.data.moments ? t.data : void 0
        },
        V = function (e, t, n) {
          return (e.response.carousel || [])
            .filter(function (e) {
              return !e.moment
            })
            .map(function (t) {
              var r,
                i,
                a = t.entry_id,
                o = S(t, e),
                c = o && o.id,
                l = (t.tweet_media && t.tweet_media.id) || (o && o.tweetId),
                u = l ? s.a.selectHydratedTweet(e, l) : void 0,
                d = A(a, u, e, 0, c, n)
              if (t.broadcast) {
                var m = e.broadcasts ? e.broadcasts[t.broadcast.id] : void 0
                ;(i = (m && m.twitter_user_id && e.users && e.users[m.twitter_user_id]) || void 0),
                  (r = m ? G(i, m) : void 0)
              } else if ((t.slate && l) || t.tweet_media) {
                var p = l && e.tweets ? e.tweets[l] : void 0
                r = (i = p && e.users ? e.users[p.user] : void 0) ? Y(i, !!t.tweet_media, c, p, e) : void 0
              } else t.slate && o && (r = { type: w.SLATE })
              return (
                r || !o || t.tweet_media || (r = { type: w.SLATE }),
                !z(i) && r && o
                  ? {
                      id: a,
                      carouselItemInfo: v(v({}, r), {}, { socialProof: t.social_proof }),
                      mediaDetails: d,
                      slate: o,
                      selected: !!t.selected,
                    }
                  : void 0
              )
            })
            .filter(Boolean)
        },
        z = function (e) {
          return (e && (e.blocking || e.blocked_by)) || !1
        },
        W = Object.freeze({ TWITTER: 'twitter', PERISCOPE: 'periscope' }),
        G = function (e, t) {
          return {
            verified: !!e && e.verified,
            screenName: e ? e.screen_name : void 0,
            name: e ? e.name : t.user_display_name,
            userId: e ? e.id_str : t.user_id,
            type: t.state === O ? w.LIVE_BROADCAST : w.REPLAY_BROADCAST,
            accountType: e ? W.TWITTER : W.PERISCOPE,
            profileImageUrl: e ? e.profile_image_url_https : void 0,
          }
        },
        Y = function (e, t, n, r, i) {
          var a, o, c
          if (t && r && n) {
            var l = j(r, n)
            if (l) {
              var s = l.type
              o = X(s)
              var u = f.a.getVideoFromCoverMedia(l) || {},
                d = u.source_user_id_str,
                m = u.video_info
              ;(a = m && m.duration_millis), (c = d && q(d, i))
            }
          } else o = w.SLATE
          var p = c || e || {},
            h = p.id_str,
            v = p.name,
            b = p.screen_name,
            y = p.verified
          return o
            ? { accountType: W.TWITTER, verified: y, screenName: b, name: v, type: o, playbackDuration: a, userId: h }
            : void 0
        },
        q = function (e, t) {
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
        K = function (e) {
          var t
          if (e) {
            var n = new URL(e).pathname.split('/')
            t = n[n.length - 1]
          }
          return t
        },
        J = function (e) {
          return !!e && !!e.carouselItemInfo && e.carouselItemInfo.type !== w.GIF && e.carouselItemInfo.type !== w.SLATE
        },
        Z = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e + 1,
            r = t.slice(n).findIndex(J)
          return r > -1 ? r + n : r
        },
        Q = Object.freeze({ SHOP: 'shop' })
    },
  },
])
//# sourceMappingURL=WIPED
