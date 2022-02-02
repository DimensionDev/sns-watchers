;(window.webpackJsonp = window.webpackJsonp || []).push([
  [60, 170],
  {
    '0GAP': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y'), n('hBvt')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('TIdA'),
        o = n('t62R'),
        c = n('A91F'),
        l = n('IJsT'),
        s = n('rHpw'),
        u = n('MWbm'),
        d = s.a.create(function (e) {
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
          r = e.description,
          s = e.image,
          m = e.imageOverlayText,
          p = e.link,
          f = e.onClick,
          h = e.previousPrice,
          v = e.price,
          b = e.title,
          y = m
            ? a.a.createElement(o.b, { color: 'gray1100', size: 'subtext3', style: d.imageOverlay, weight: 'bold' }, m)
            : null,
          g = a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(i.a, { accessibilityLabel: t, aspectMode: c.a.SQUARE, image: s }),
            a.a.createElement(u.a, { style: d.imageColorOverlay }),
            y,
          ),
          _ = h
            ? a.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 1, style: d.previousPrice, weight: 'normal' },
                h,
              )
            : null,
          O = v ? a.a.createElement(o.b, { numberOfLines: 1, size: 'subtext2', style: d.price }, v, _) : null,
          E = a.a.createElement(
            a.a.Fragment,
            null,
            a.a.createElement(o.b, { numberOfLines: 1, style: d.title, weight: 'bold' }, b),
            a.a.createElement(o.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: d.description }, r),
            O,
          )
        return a.a.createElement(l.a, {
          accessibilityLabel: t,
          containerStyle: [d.root, n],
          link: p,
          lower: E,
          onClick: f,
          stackLayoutUpperStyle: d.upper,
          upper: g,
          withInteractiveStyling: !0,
        })
      }
    },
    '0mK8': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'c', function () {
          return f
        })
      n('ho0z'), n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('MWbm'),
        o = n('GcQN'),
        c = n('PU7B'),
        l = n('/WPq'),
        s = n('78ol'),
        u = n('jV+4'),
        d = n('rHpw'),
        m = function (e) {
          var t = e.author,
            n = e.color,
            r = void 0 === n ? 'normal' : n,
            i = e.size,
            o = void 0 === i ? 'subtext2' : i,
            c = e.style,
            l = e.withHoverCard,
            s = void 0 === l || l,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            f = void 0 !== p && p
          return a.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: r,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [h.authorUserName, c],
            withHoverCard: s,
            withLink: m,
            withScreenName: f,
          })
        },
        p = function (e) {
          var t = e.style
          return a.a.createElement(
            i.a,
            { style: [h.lightningBadge, t] },
            a.a.createElement(o.a, { style: h.lightningIcon }),
          )
        },
        f = function (e) {
          var t = e.icon
          return a.a.createElement(
            i.a,
            { style: h.placeholderIconContainer },
            'news' === t
              ? a.a.createElement(c.a, { style: h.placeholderIcon })
              : 'lists' === t
              ? a.a.createElement(l.a, { style: h.placeholderIcon })
              : a.a.createElement(s.a, { style: h.placeholderIcon }),
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
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r)
      function i(e, t) {
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
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
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
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        m = n.n(d),
        p = n('ERkP'),
        f = n.n(p),
        h = n('rHpw'),
        v = n('MWbm')
      function b(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var y = (function (e) {
          l()(n, e)
          var t = b(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
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
                  return f.a.createElement(v.a, { style: g.root })
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        g = h.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = y
    },
    '5UID': function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        m = n.n(d),
        p = n('ERkP'),
        f = n.n(p),
        h = n('3XMw'),
        v = n.n(h),
        b = n('rHpw'),
        y = n('+/1j'),
        g = n('MWbm')
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
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var O = v.a.e5b0063d,
        E = 0,
        I = (function (e) {
          l()(n, e)
          var t = _(n)
          function n() {
            var e
            return a()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(E)), (E += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    r = O({ title: n })
                  return f.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    f.a.createElement(
                      y.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: b.a.visuallyHidden,
                      },
                      n,
                    ),
                    f.a.createElement(g.a, { accessibilityLabel: r }, t),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      t.a = I
    },
    '7sPD': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LiveEventScreen', function () {
          return Le
        })
      n('OZaJ'), n('+KXO'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
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
        y = n.n(b),
        g = n('k49u'),
        _ = n('zI2C'),
        O = n('6/RC'),
        E = n('es0u'),
        I = (n('WNMA'), n('KqXw'), n('MvUL'), n('5BYb'), n('ho0z'), n('zh9S')),
        w = n('hqKg'),
        P = n('kGix'),
        C = n('RrqW'),
        k = function (e, t, n) {
          return { isFullPageInterstitial: e, type: t, screenName: n }
        },
        S = function (e) {
          var t = e.isBlockedBy,
            n = void 0 !== t && t,
            r = e.isBlocking,
            a = void 0 !== r && r,
            i = e.isSensitive,
            o = void 0 !== i && i,
            c = e.screenName,
            l = []
          return (
            n
              ? l.push(k(!0, C.a.BLOCKED_BY, c))
              : (a && l.push(k(!0, C.a.BLOCKED, c)), o && l.push(k(!1, C.a.SENSITIVE))),
            l.length ? l : void 0
          )
        },
        D = n('lPpt'),
        x = n('tn7R'),
        j = n('wrlS'),
        R = n('G6rE'),
        A = n('0KEI'),
        T = n('zlxh'),
        L = n('oEGd')
      function B(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? B(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : B(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var F = function (e, t) {
          return t.match.params.eventId
        },
        N = function (e) {
          return M({}, e ? { loggedInUserAvatarURI: e.profile_image_url_https, loggedInUserName: e.name } : null)
        },
        H = Object(w.createSelector)(
          F,
          function (e, t) {
            return D.a.select(e, F(0, t))
          },
          function (e, t) {
            var n = ((D.a.selectErrors(e) || {})[F(0, t)] || {}).errors,
              r = (void 0 === n ? [] : n).find(function (e) {
                return e.code === g.a.BlockedUserError
              })
            return r && r.message && r.message.replace('@', '')
          },
          function (e, t) {
            return D.a.selectFetchStatus(e, F(0, t))
          },
          function (e, t) {
            var n
            return [].concat(null === (n = t.location.query) || void 0 === n ? void 0 : n.timeline)[0]
          },
          function (e, t) {
            var n
            return null === (n = t.location.state) || void 0 === n ? void 0 : n.promotedCardState
          },
          R.e.selectLoggedInUser,
          function (e, t) {
            return D.a.selectIsTOO(e, F(0, t))
          },
          j.d,
          function (e, t, n, r, a, i, o, c, l) {
            var s = (function (e, t, n, r) {
              return M(
                {
                  liveEventDetails: { eventId: e },
                  fetchStatus: t ? P.a.LOADED : n,
                  refreshStatus: n,
                  timelineDetails: {
                    composeDetails: { defaultText: '' },
                    eventId: e,
                    timelineId: T.b,
                    timelineIndex: 0,
                    timelineLinks: [],
                  },
                  interstitialOrderToDisplay: t ? S({ isBlockedBy: !0, screenName: t }) : void 0,
                  isTOO: !1,
                  isUserSuspended: !1,
                },
                N(r),
              )
            })(e, n, r, o)
            if (!t) return s
            var u = Object(T.o)(t),
              d = Object(T.i)(t, u, i),
              m = Object(T.k)(e, t),
              p = Object(T.n)(t),
              f = Object(T.r)(e, t, a, l),
              h = (function (e) {
                var t = e || {},
                  n = t.liveEventDetails,
                  r = void 0 === n ? {} : n,
                  a = t.users,
                  i = r.attribution_user_id
                return (
                  !!i &&
                  !Object(x.a)(a || {}).some(function (e) {
                    return e.id_str === i
                  })
                )
              })(t),
              v = m.author || {},
              b = v.blocked_by,
              y = v.blocking,
              g = v.screen_name,
              _ = t.liveEventDetails.sensitive,
              O = S({ isBlockedBy: b, isBlocking: y, isSensitive: _, screenName: g })
            return M(
              M(M({}, s), N(o)),
              {},
              {
                liveEventDetails: m,
                fetchStatus: t ? P.a.LOADED : r,
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
        U = {
          createLocalApiErrorHandler: Object(A.createLocalApiErrorHandlerWithContextFactory)('LIVE_EVENT_SCREEN'),
          fetchLiveEvent: D.a.fetchOne,
          googleAnalyticsPageView: I.a,
          remindMeButtonSubscribe: D.a.subscribe,
          remindMeButtonUnsubscribe: D.a.unSubscribe,
          scribeAction: I.c,
          scribePageImpression: I.d,
        },
        V = Object(L.g)(H, U),
        z = n('E4zi'),
        W = n('muX9'),
        G = function (e) {
          var t,
            n = e.liveEventDetails,
            r = e.slate,
            a = n.category,
            i = n.description,
            o = n.eventId,
            c = n.timeString,
            l = n.title,
            s = null == r || null === (t = r.image) || void 0 === t ? void 0 : t.url,
            u = n.author ? Object(z.a)(n.author) : null,
            d = JSON.stringify(
              {
                '@context': 'http://schema.org',
                '@type': 'NewsArticle',
                name: l,
                description: i,
                genre: a,
                identifier: o,
                datePublished: c,
                author: u,
                image: s,
              },
              null,
              2,
            )
          return y.a.createElement(W.a, { script: [{ type: 'application/ld+json', innerHTML: d }] })
        },
        Y = (n('yH/f'), n('z84I'), n('/Ikv')),
        q = n('BcsE'),
        X = function (e) {
          var t = e.content,
            n = e.name
          return t || Object(q.a)(t) ? y.a.createElement('meta', { content: t, key: n, name: n }) : null
        },
        K = Object.freeze({ broadcast: 'broadcast', video: 'video', image: 'image' }),
        J = function (e) {
          var t = e.carousel,
            n = e.liveEventDetails,
            r = e.timelineDetails,
            a = n.description,
            i = n.eventId,
            o = n.title,
            c = r.timelineId,
            l = t[Object(T.q)(t)],
            s = (l || {}).slate,
            u = (function (e) {
              var t,
                n = e.carouselItemInfo.type
              return (
                n === T.e.LIVE_BROADCAST || n === T.e.REPLAY_BROADCAST
                  ? (t = K.broadcast)
                  : n === T.e.VOD || n === T.e.GIF
                  ? (t = K.video)
                  : n === T.e.SLATE && (t = K.image),
                t
              )
            })(l)
          return o && a && s
            ? y.a.createElement(
                W.a,
                null,
                (function (e, t, n, r, a) {
                  return [
                    { name: 'twitter:card', content: Y.a.CardNames.LIVE_EVENT },
                    { name: 'twitter:text:event_id', content: n },
                    { name: 'twitter:text:event_title', content: e },
                    { name: 'twitter:text:event_subtitle', content: t },
                    { name: 'twitter:text:event_timeline_id', content: a },
                    { name: 'twitter:image:event_thumbnail:src', content: r.image.url },
                    { name: 'twitter:image:event_thumbnail:height', content: r.image.height },
                    { name: 'twitter:image:event_thumbnail:width', content: r.image.width },
                  ]
                })(o, a, i, s, c).map(X),
                (function (e, t, n, r) {
                  var a,
                    i,
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
                      content: null === (a = n.mediaDetails) || void 0 === a ? void 0 : a.broadcastId,
                    },
                    {
                      name: 'twitter:text:broadcast_media_key',
                      content: null === (i = n.mediaDetails) || void 0 === i ? void 0 : i.broadcastMediaKey,
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
                })(n, 0, l, u).map(X),
              )
            : null
        },
        Q = n('m3Bd'),
        Z = n.n(Q),
        $ = (n('tVqn'), n('3XMw')),
        ee = n.n($),
        te = n('I6Uj'),
        ne = ee.a.i8d6a27e,
        re = ee.a.hbae0a4e,
        ae = { page: 'live_event_timeline', section: 'live_event_header' },
        ie = function (e) {
          var t = e.author,
            n = e.hashtag,
            r = e.title,
            a = (r && r.trim()) || ''
          return oe(t) ? ce(t.screen_name, n, a) : n
        },
        oe = function (e) {
          return !!e
        },
        ce = function (e, t, n) {
          return t ? ne({ author: e, timelineHashtag: t, title: n }) : re({ author: e, title: n })
        },
        le = function (e) {
          var t = e.id,
            n = Z()(e, ['id']),
            r = Object(T.j)(t),
            a = ie(n)
          return y.a.createElement(te.a, { scribeNamespace: ae, shareText: a, url: r })
        },
        se = n('LVU8')
      function ue(e, t) {
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
      function de(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ue(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var me = function (e) {
          return { items: [pe(e)] }
        },
        pe = function (e) {
          var t = e.carouselLength,
            n = e.carouselPosition,
            r = e.includeTimelineSource,
            a = void 0 !== r && r,
            i = e.liveEventDetails,
            o = e.mediaDetails,
            c = e.selectedTimeline,
            l = e.tilePosition,
            s = e.timelineTabPosition,
            u = i.eventId,
            d = i.remindMeSubscription,
            m = (o || {}).broadcastId,
            p = c || {},
            f = p.timelineId,
            h = p.timelineSourceId,
            v = p.timelineSourceType,
            b = d || {},
            y = b.notification_id,
            g = b.subscribed,
            _ = b.toggle_visible,
            O = de({}, null),
            E = de({}, null),
            I = de({}, null)
          return (
            u && (E.host_event_id = u),
            f && (E.timeline_id = f),
            a && ((E.timeline_source_id = h), (E.timeline_source_type = v)),
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
        fe = n('9Bb1'),
        he = n('5S/X'),
        ve = n('XvPy'),
        be = n('Vgm9'),
        ye = n('VTxf'),
        ge = n('rJoH'),
        _e = n('yoO3'),
        Oe = n('EskI'),
        Ee = n('VS6U'),
        Ie = n('HBr9'),
        we = n('MWbm'),
        Pe = n('G8HL'),
        Ce = n('t62R'),
        ke = n('rHpw'),
        Se = n('v6aA'),
        De = n('7JQg'),
        xe = n('zrc3'),
        je = n('oQhu')
      function Re(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Re(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Re(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Te(e) {
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
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Le = (function (e) {
        u()(n, e)
        var t = Te(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
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
                a = r.carousel,
                i = r.fetchStatus,
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
                v = ee.a.c08e7935,
                b = e._getPollingIntervalMs()
              return y.a.createElement(
                Ie.a,
                { collectionName: v },
                y.a.createElement(ve.a, {
                  carousel: a,
                  fetchStatus: i,
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
                  pollingIntervalMs: b,
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
              return Object(T.p)(t, n)
            }),
            v()(l()(e), '_getSelectedItemIndex', function () {
              var t = e.props.carousel,
                n = e._getSelectedItem()
              return t && n
                ? Object(xe.a)(t, function (e) {
                    return e.id === n.id
                  })
                : void 0
            }),
            v()(
              l()(e),
              '_getScribeProviderMetadata',
              Object(je.a)(function (e, t, n, r, a) {
                var i = n.timelineId,
                  o = n.timelineIndex,
                  c = n.timelineLinks,
                  l = (a || {}).mediaDetails,
                  s =
                    c &&
                    c.find(function (e) {
                      return e.timelineId === i
                    })
                return Ae(
                  { event_id: t.eventId },
                  me({
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
                n(v()({}, g.a.GenericNotFound, { customAction: se.c })),
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
                a = t.scribeAction,
                i = t.scribeNamespace,
                o = t.timelineDetails,
                c = o.timelineId,
                l = o.timelineLinks,
                s = e._getSelectedItemIndex(),
                u = (e._getSelectedItem() || {}).mediaDetails,
                d = l.find(function (e) {
                  return e && e.timelineId === c
                })
              d &&
                a(
                  Ae(Ae({}, i), {}, { action: 'impression' }),
                  me({
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
                  a = n.timelineDetails.timelineId,
                  i = e.liveEventDetails.eventId,
                  o = e.timelineDetails.timelineId
                i !== r
                  ? this._handleInitialFetch()
                  : o !== a && (this._scribeTimelineTabChange(), this._scribeTimelineImpression())
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.carousel,
                  n = e.history,
                  r = e.isUserSuspended,
                  a = e.liveEventDetails,
                  i = e.timelineDetails,
                  o = a.shortTitle,
                  c = a.title,
                  l = i.composeDetails,
                  s = this.state.isPlayerFullscreen
                if (r) return y.a.createElement(ye.a, null)
                var u = c || T.f,
                  d = this._renderScoreCard(),
                  m = o ? y.a.createElement(Ce.b, { withHashflags: !0 }, o) : T.g,
                  p = y.a.createElement(E.a, { withWhoToFollow: !1 }, d),
                  f = this.context.loggedInUserId && !s ? this._renderRightButtons() : void 0,
                  h = this._getScribeProviderMetadata(t, a, i, this._getSelectedItemIndex(), this._getSelectedItem())
                return y.a.createElement(
                  De.b,
                  { data: h },
                  y.a.createElement(
                    _e.a,
                    null,
                    O.canUseDOM ? null : this._renderPageMeta(u),
                    y.a.createElement(Ee.a, {
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
                  a,
                  i,
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
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  d ? y.a.createElement(fe.a, { description: d }) : null,
                  y.a.createElement(ge.a, {
                    canonical: h,
                    description: d,
                    image:
                      null == p || null === (t = p.slate) || void 0 === t || null === (n = t.image) || void 0 === n
                        ? void 0
                        : n.url,
                    imageH:
                      null == p || null === (r = p.slate) || void 0 === r || null === (a = r.image) || void 0 === a
                        ? void 0
                        : a.height,
                    imageW:
                      null == p || null === (i = p.slate) || void 0 === i || null === (o = i.image) || void 0 === o
                        ? void 0
                        : o.width,
                    title: e,
                    type: 'article',
                  }),
                  he.b && null != p && p.slate
                    ? y.a.createElement(G, { liveEventDetails: s, slate: null == p ? void 0 : p.slate })
                    : null,
                  y.a.createElement(_.a, { deepLink: f }),
                  l ? y.a.createElement(J, { carousel: l, liveEventDetails: s, timelineDetails: u }) : null,
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
                  a = n.eventId,
                  i = n.title,
                  o = e.scribeNamespace,
                  c = e.timelineDetails.hashtag
                return y.a.createElement(
                  we.a,
                  { style: Be.rightButtonContainer },
                  y.a.createElement(le, { author: r, hashtag: c, id: a, title: i }),
                  t
                    ? null
                    : y.a.createElement(be.a, {
                        author: r,
                        eventId: a,
                        onPress: this._handleOverflowButtonClickScribe,
                        redirectOnDelete: r ? '/'.concat(r.screen_name, '/moments') : void 0,
                        scribeNamespace: Ae(Ae({}, o), {}, { section: 'live_event_header' }),
                        style: Be.overflowButton,
                        title: i,
                      }),
                )
              },
            },
            {
              key: '_renderScoreCard',
              value: function () {
                var e = this.props.scoreData
                return e ? y.a.createElement(Oe.a, { scoreData: e, withContainer: !0, withHeader: !0 }) : null
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
                  a = n.liveEventDetails,
                  i = n.scribeAction,
                  o = n.scribeNamespace,
                  c = n.timelineDetails,
                  l = c.timelineId,
                  s = c.timelineLinks,
                  u = this._getSelectedItemIndex(),
                  d = (this._getSelectedItem() || {}).mediaDetails,
                  m = s.find(function (e) {
                    return e.timelineId === l
                  })
                i(
                  Ae(Ae({}, o), e),
                  me(
                    Ae(
                      {
                        liveEventDetails: a,
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
                  a = e.timelineDetails,
                  i = a.timelineId,
                  o = a.timelineIndex,
                  c = a.timelineLinks,
                  l = (this._getSelectedItem() || {}).mediaDetails,
                  s =
                    c &&
                    c.find(function (e) {
                      return e.timelineId === i
                    })
                n(
                  Ae(Ae({}, r), {}, { component: i, element: 'tab', action: 'selected' }),
                  me({
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
      })(y.a.Component)
      v()(Le, 'contextType', Se.a)
      var Be = ke.a.create(function (e) {
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
      t.default = Object(De.c)({ page: 'live_event_timeline' })(V(Object(Pe.a)(Le)))
    },
    '8/3a': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y')
      var r = n('0mK8'),
        a = n('ERkP'),
        i = n.n(a),
        o = (n('jQ3i'), n('x4t0'), n('tVqn'), n('z84I'), n('3XMw')),
        c = n.n(o),
        l = n('caTy'),
        s = n('MWbm'),
        u = n('rHpw'),
        d = n('t62R'),
        m = n('yrzJ'),
        p = n('XrEN'),
        f = n('Q0VY'),
        h = n('FiRh'),
        v = u.a.create(function (e) {
          return { description: { marginTop: e.spaces.space12 } }
        }),
        b = function (e, t, n) {
          return n && !p.a.VIDEO_TYPES.includes(t)
            ? (function (e) {
                var t,
                  n = e.url ? (null === (t = Object(l.a)(e.url)) || void 0 === t ? void 0 : t.pathname) : void 0
                return i.a.createElement(d.b, { color: 'gray700', link: n }, e.text)
              })(n)
            : e && p.a.VIDEO_TYPES.includes(t)
            ? (function (e, t) {
                return i.a.createElement(
                  d.b,
                  { color: 'gray700', link: e.permalink },
                  y(t, { screenName: i.a.createElement(m.a, { screenName: e.user.screen_name }) }),
                )
              })(e, t)
            : null
        },
        y = function (e, t) {
          switch (e) {
            case 'animated_gif':
              return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a5d9d070' }, t.screenName)
            case 'video':
            case 'vine':
              return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'i9606e32' }, t.screenName)
            default:
              return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'i1a64d47' }, t.screenName)
          }
        },
        g = function (e) {
          var t = e.coverTweet,
            n = e.description,
            r = e.imageAttribution,
            a = e.mediaType,
            o = e.pivotText,
            c = n ? n.trim() : void 0,
            l = c ? f.a.descriptionTextParts(c) : []
          return i.a.createElement(
            s.a,
            { style: v.description },
            l.length
              ? i.a.createElement(
                  d.b,
                  null,
                  l.map(function (e, t) {
                    return i.a.createElement(h.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            b(t, a, r),
            o ? i.a.createElement(d.b, { color: 'gray700' }, o) : null,
          )
        },
        _ = n('pjBI'),
        O = u.a.create(function (e) {
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
          l = e.mediaType,
          u = e.pivotText,
          m = e.preTitle,
          p = e.remindMeButton,
          f = e.time,
          h = e.title,
          v = e.withHashflags,
          b = function () {
            return t
              ? i.a.createElement(
                  s.a,
                  null,
                  i.a.createElement(r.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  f ? y(!0) : null,
                )
              : null
          },
          y = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return i.a.createElement(
              d.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [O.timeString, e && O.timeStringMargin] },
              f,
            )
          },
          E = function () {
            return m
              ? i.a.createElement(
                  _.a,
                  null,
                  i.a.createElement(d.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, m),
                  f ? y() : null,
                )
              : null
          }
        return i.a.createElement(
          i.a.Fragment,
          null,
          c && m ? E() : b() || E(),
          i.a.createElement(d.b, { dir: 'auto', size: 'title4', style: O.title, weight: 'heavy', withHashflags: v }, h),
          a || n || o
            ? i.a.createElement(g, { coverTweet: n, description: a, imageAttribution: o, mediaType: l, pivotText: u })
            : null,
          p ? i.a.createElement(s.a, { style: O.remindMeButton }, p) : null,
        )
      }
    },
    '8FZA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BroadcastScreen', function () {
          return Be
        })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
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
        y = n.n(b),
        g = n('k49u'),
        _ = n('zI2C'),
        O = 'NOT_STARTED',
        E = 'RUNNING',
        I = 'TIMED_OUT',
        w = 'ENDED',
        P = n('RhWx'),
        C = n.n(P),
        k = (n('z84I'), n('/Ikv')),
        S = n('muX9'),
        D = function (e) {
          return []
            .concat(
              ((n = e),
              (r = n.id),
              (a = n.timecode),
              (i = n.title),
              (o = n.url),
              [
                { name: 'twitter:card', content: k.a.CardNames.BROADCAST },
                { name: 'twitter:url:broadcast_url', content: o },
                { name: 'twitter:text:broadcast_id', content: r },
                { name: 'twitter:text:broadcast_title', content: i },
                { name: 'twitter:text:broadcast_timecode', content: a },
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
          var t, n, r, a, i, o
        },
        x = function (e) {
          return void 0 !== e.content ? y.a.createElement('meta', e) : null
        },
        j = function (e) {
          return y.a.createElement.apply(
            y.a,
            [S.a, null].concat(
              C()(
                (function (e) {
                  return D(e).map(x)
                })(e),
              ),
            ),
          )
        },
        R = n('6/RC'),
        A = n('es0u'),
        T = (n('WNMA'), n('KqXw'), n('zh9S')),
        L = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('ddV6')),
        B = n.n(L),
        M = n('3zvM'),
        F = n('lMB6')
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
      var H = Object(M.f)({
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
            })({ ids: [B()(e, 1)[0]] }, t)
          },
        }),
        U = F.a.register(H),
        V = n('kGix'),
        z = n('Hw0q'),
        W = n('G6rE'),
        G = n('rxPX'),
        Y = n('0KEI'),
        q = function (e, t) {
          return t.match.params.broadcastId
        },
        X = function (e, t) {
          return U.select(e, q(0, t))
        },
        K = function (e, t) {
          var n = X(e, t)
          return n && n.twitter_user_id ? W.e.select(e, n.twitter_user_id) : void 0
        },
        J = function (e, t) {
          return t.location.state ? t.location.state.promotedContent : void 0
        },
        Q = function (e, t) {
          return X(e, t) ? V.a.LOADED : U.selectFetchStatus(e, q(0, t))
        },
        Z = Object(z.b)('t'),
        $ = Object(G.a)()
          .propsFromState(function () {
            return {
              broadcastId: q,
              broadcast: X,
              twitterBroadcaster: K,
              fetchStatus: Q,
              promotedContent: J,
              timecode: Z,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Y.createLocalApiErrorHandlerWithContextFactory)('BROADCAST_SCREEN'),
              fetchBroadcast: U.fetchOne,
              fetchUserIfNeeded: W.e.fetchOneIfNeeded,
              scribeAction: T.c,
              scribePageImpression: T.d,
              googleAnalyticsPageView: T.a,
            }
          }),
        ee = n('SrtL'),
        te = n('GOQE'),
        ne = n('v//M'),
        re = n('LVU8'),
        ae = n('zlxh'),
        ie = n('rJoH'),
        oe = n('VS6U'),
        ce = n('B5iK'),
        le = n('pynj'),
        se = n('Modb'),
        ue = n('lklz'),
        de = n('MWbm'),
        me = n('G8HL'),
        pe = n('t62R'),
        fe = n('Wms4'),
        he = n('jV+4'),
        ve = n('TIdA'),
        be = n('A91F'),
        ye = n('rHpw'),
        ge = n('7JQg'),
        _e = n('3XMw'),
        Oe = n.n(_e)
      function Ee(e) {
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
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Ie = { url: 'https://pbs.twimg.com/lex/placeholder_live_nomargin.png', width: 1920, height: 1080 },
        we = { objectFitVideo: 'contain' },
        Pe = function (e) {
          return e && e.trim().length > 0
        },
        Ce = Oe.a.ac4c73d8,
        ke = Oe.a.e39b368e,
        Se = Oe.a.f2382014,
        De = Oe.a.e3aac82a,
        xe = Oe.a.hd0bc1eb,
        je = Oe.a.bea1f26a,
        Re = Oe.a.jceadc3e,
        Ae = Oe.a.d980e29e,
        Te = Oe.a.fc209bb7,
        Le = function (e, t) {
          return 'https://twitter.com/i/broadcasts/'.concat(e).concat(t ? '?t='.concat(t) : '')
        },
        Be = (function (e) {
          u()(n, e)
          var t = Ee(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(l()(e), '_getTitle', function () {
                var t = e.props.broadcast
                if (t) {
                  var n = t.state,
                    r = t.status
                  if (r) return r
                  var a = e._getName(t)
                  if (a)
                    switch (n) {
                      case E:
                        return xe({ name: a })
                      case w:
                      case I:
                        return je({ name: a })
                      case O:
                      default:
                        return Re
                    }
                }
                return Re
              }),
              v()(l()(e), '_getName', function (e) {
                var t = e.twitter_username,
                  n = e.user_display_name
                return Pe(n) ? n : t && Pe(t) ? '@'.concat(t) : void 0
              }),
              v()(l()(e), '_isLive', function () {
                return e.props.broadcast && 'RUNNING' === e.props.broadcast.state
              }),
              v()(l()(e), '_renderPrimaryContent', function () {
                var t = e.props.fetchStatus
                return y.a.createElement(ne.a, {
                  accessibilityLabel: De,
                  fetchStatus: t,
                  onRequestRetry: e._handleFetchBroadcast,
                  render: e._render,
                })
              }),
              v()(l()(e), '_render', function () {
                var t = e._getTitle()
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderMedia(),
                  y.a.createElement(
                    de.a,
                    { style: Me.header },
                    e._renderUserName(),
                    y.a.createElement(
                      de.a,
                      { style: Me.title },
                      y.a.createElement(pe.b, { size: 'headline1', style: Me.titleText, weight: 'bold' }, t),
                      e._isLive() ? y.a.createElement(fe.a, { type: 'live' }, Se) : null,
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
                  ? y.a.createElement(
                      de.a,
                      { style: Me.userNameWrapper },
                      y.a.createElement(
                        le.a,
                        { screenName: r.screen_name },
                        y.a.createElement(he.a, {
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
                  ? y.a.createElement(
                      de.a,
                      { style: Me.userNameWrapper },
                      y.a.createElement(he.a, { name: n.user_display_name, profileImageUrl: n.profile_image_url }),
                    )
                  : void 0
              }),
              v()(l()(e), '_scribePageImpression', function () {
                var t = e.props,
                  n = t.broadcastId,
                  r = t.googleAnalyticsPageView,
                  a = t.scribeNamespace,
                  i = t.scribePageImpression
                n && i(a, { items: [{ live_broadcast_details: { target_broadcast_id: n } }] }), r(a)
              }),
              v()(l()(e), '_fetchTwitterBroadcaster', function () {
                var t = e.props,
                  n = t.broadcast,
                  r = t.createLocalApiErrorHandler,
                  a = t.fetchUserIfNeeded,
                  i = n && n.twitter_user_id
                if (i) return a(i).catch(r(te.a))
              }),
              v()(l()(e), '_startTimer', function () {
                e._stopTimer(), (e._timer = new ce.b(3e4).interval(e._fetchUpdates)), e._timer.start()
              }),
              v()(l()(e), '_stopTimer', function () {
                e._timer && e._timer.stop(), (e._timer = void 0)
              }),
              v()(l()(e), '_handleFetchBroadcast', function () {
                var t = e.props,
                  n = t.broadcast,
                  r = t.broadcastId,
                  a = t.createLocalApiErrorHandler,
                  i = t.fetchBroadcast
                r &&
                  i(r, { broadcastVersionMap: v()({}, r, null == n ? void 0 : n.version) }).catch(
                    a(v()({}, g.a.GenericNotFound, { customAction: re.c })),
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
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    this._renderMetaTags(t),
                    y.a.createElement(oe.a, {
                      backLocation: '/',
                      documentTitle: t,
                      history: e,
                      primaryContent: this._renderPrimaryContent,
                      sidebarContent: y.a.createElement(A.a, null),
                      title: ke,
                    }),
                    y.a.createElement(ee.a, { title: t, withMeta: !1 }),
                  )
                },
              },
              {
                key: '_renderMetaTags',
                value: function (e) {
                  var t = this.props,
                    n = t.broadcast,
                    r = t.broadcastId,
                    a = t.timecode,
                    i = t.twitterBroadcaster,
                    o = (null == i ? void 0 : i.name) || (null == n ? void 0 : n.user_display_name),
                    c = 'twitter://broadcasts/'.concat(r),
                    l = Le(r),
                    s = Le(r, a)
                  return R.canUseDOM
                    ? null
                    : y.a.createElement(
                        y.a.Fragment,
                        null,
                        y.a.createElement(ie.a, { canonical: l, description: e, title: o, type: 'article' }),
                        y.a.createElement(_.a, { deepLink: c }),
                        y.a.createElement(j, { broadcast: n, id: r, timecode: a, title: e, url: s }),
                      )
                },
              },
              {
                key: '_renderMedia',
                value: function () {
                  var e = this.props.broadcast
                  return e && e.state === O ? this._renderPreLiveSlate() : this._renderPlayer()
                },
              },
              {
                key: '_renderStartDateLabel',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.scheduled_start_ms ? new Date(parseInt(e.scheduled_start_ms, 10)) : void 0,
                    n = t ? Ae({ date: Te(t) }) : void 0
                  return n
                    ? y.a.createElement(de.a, { style: Me.labelOverlay }, y.a.createElement(fe.a, null, n))
                    : null
                },
              },
              {
                key: '_renderPreLiveSlate',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : Ie
                  return y.a.createElement(
                    de.a,
                    null,
                    y.a.createElement(
                      S.a,
                      null,
                      y.a.createElement('meta', { content: t.url, property: 'og:image' }),
                      y.a.createElement('meta', { content: t.width, property: 'og:image:width' }),
                      y.a.createElement('meta', { content: t.height, property: 'og:image:height' }),
                    ),
                    y.a.createElement(ve.a, {
                      accessibilityLabel: Ce,
                      aspectMode: be.a.exact(ye.a.theme.aspectRatios.landscape),
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
                    a = e.timecode,
                    i = t && { url: t.image_url, width: t.width, height: t.height },
                    o = t && t.media_id
                  if (!(n && i && o)) return null
                  var c = t && Object(ae.m)(t.image_url_small, t.image_url_medium, i)
                  return y.a.createElement(
                    de.a,
                    { style: Me.card },
                    y.a.createElement(
                      S.a,
                      null,
                      y.a.createElement('meta', { content: i.url, property: 'og:image' }),
                      y.a.createElement('meta', { content: i.width, property: 'og:image:width' }),
                      y.a.createElement('meta', { content: i.height, property: 'og:image:height' }),
                    ),
                    y.a.createElement(se.a, {
                      accessibilityLabel: Ce,
                      aspectRatio: 1.7777777777777777,
                      customVariants: c,
                      displayOptions: we,
                      includeBroadcastEventAssociation: !0,
                      poster: i,
                      promotedContent: r,
                      source: { variants: [], videoId: ue.b.forBroadcast(n), contentId: o },
                      timecode: a,
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
                  var a = '/i/events/'.concat(n),
                    i = y.a.createElement(pe.b, { color: 'primary', link: a }, r)
                  return y.a.createElement(
                    pe.b,
                    { style: Me.relatedEvent },
                    y.a.createElement(Oe.a.I18NFormatMessage, { $i18n: 'c43d1678' }, i),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        Me = ye.a.create(function (e) {
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
      t.default = Object(ge.c)({ page: 'broadcast' })($(Object(me.a)(Be)))
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
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
        y = n.n(b),
        g = n('3XMw'),
        _ = n.n(g),
        O = n('oQhu'),
        E = n('mjJ+'),
        I = n('eb3s')
      function w(e) {
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
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var P = _.a.cfd2f35d,
        C = (function (e) {
          u()(n, e)
          var t = w(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
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
                    : y.a.createElement(E.a, {
                        cancelButtonLabel: P,
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
                    a = t.label,
                    i = t.text,
                    o = t.withCancelButton
                  return y.a.createElement(I.a, {
                    confirmButtonLabel: a,
                    confirmButtonType: n,
                    headline: r,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: i,
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
                  return k(t, n, r, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(y.a.Component),
        k = Object(O.a)(function (e, t, n, r) {
          return e.reduce(function (e, a, i) {
            var o = a.Icon,
              c = a.behavioralEventContext,
              l = a.confirmation,
              s = a.disabled,
              u = a.excludeFromActionMenu,
              d = a.isEmphasized,
              m = a.link,
              p = a.onClick,
              f = a.subText,
              h = a.testID,
              v = a.text
            a.withCancelButton
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
                withBottomBorder: t && t.includes(i),
              })
            }
            return e
          }, [])
        })
      t.default = C
    },
    EskI: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        l = n.n(c),
        s = n('N+ot'),
        u = n.n(s),
        d = n('AuHH'),
        m = n.n(d),
        p = (n('7xRU'), n('Ysgh'), n('KqXw'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        f = n.n(p),
        h = n('3XMw'),
        v = n.n(h),
        b =
          (n('yH/f'),
          Object.freeze({ BROADCAST_MEDIA_TYPE: 'broadcast', VIDEO_MEDIA_TYPE: 'video' }),
          Object.freeze({ COMPLETED: 'COMPLETED', DELAYED: 'DELAYED', LIVE: 'LIVE', UPCOMING: 'UPCOMING' })),
        y = 'scorecard',
        g = n('6vad'),
        _ = n('t62R'),
        O = n('rHpw'),
        E = n('U+bB'),
        I = n('MWbm')
      function w(e) {
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
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return u()(this, n)
        }
      }
      var P = v.a.eaaca5db,
        C = function (e) {
          var t = e.id,
            n = void 0 === t ? '' : t,
            r = e.isLive,
            a = e.status,
            i = '44' === n.split(':')[0],
            o = a === b.UPCOMING || a === b.DELAYED
          return (i && r) || o
        },
        k = (function (e) {
          l()(n, e)
          var t = w(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
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
                        a = t.progress_strings,
                        i = t.status,
                        o = t.winner_id,
                        c = i === b.LIVE
                      return {
                        isLive: c,
                        progressStrings: C({ id: n, status: i, isLive: c }) ? a.join(' ') : a[0],
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
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    t ? f.a.createElement(g.b, { text: P }) : null,
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
                    a = e.participantScores,
                    i = e.progressStrings,
                    o = e.winnerId,
                    c = a.map(function (e) {
                      return t._renderTeamRow(e, o, r)
                    })
                  return f.a.createElement(
                    I.a,
                    { style: [S.teamDisplay, n && S.container] },
                    f.a.createElement(I.a, { style: S.teamRows }, c),
                    f.a.createElement(_.b, { style: S.matchStatusText }, i),
                  )
                },
              },
              {
                key: '_renderTeamRow',
                value: function (e, t, n) {
                  var r = e.participant,
                    a = r.id,
                    i = r.media,
                    o = r.name,
                    c = e.score,
                    l = a === t,
                    s = n || l ? 'bold' : 'normal'
                  return f.a.createElement(
                    I.a,
                    { key: a, style: S.teamRow, testID: y },
                    f.a.createElement(E.a, { source: i.url, style: S.teamLogo }),
                    f.a.createElement(_.b, { align: 'left', numberOfLines: 1, style: S.teamName }, o),
                    f.a.createElement(_.b, { style: S.teamScore, weight: s }, c),
                    f.a.createElement(I.a, { style: [S.winnerContainer, l && S.winner] }),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        S = O.a.create(function (e) {
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
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
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
        y = n.n(b),
        g = n('rxPX'),
        _ = n('0KEI'),
        O = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        E = function (e, t) {
          return t.module.selectItems(e)
        },
        I = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: O, items: E }
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
        w = n('v//M'),
        P = n('sIe2'),
        C = n('3XMw'),
        k = n.n(C),
        S = n('TEoO')
      function D(e) {
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
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var x = k.a.i9028824,
        j = 'sliceTimeline',
        R = function (e) {
          return e
        },
        A = { viewType: 'timeline' },
        T = (function (e) {
          u()(n, e)
          var t = D(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  r = t.items,
                  a = t.noItemsRenderer,
                  i = t.numColumns,
                  o = t.onScrollEnd,
                  c = t.renderer,
                  l = t.withoutHeadroom
                return !r || i < 1
                  ? null
                  : 1 === i
                  ? y.a.createElement(S.a, {
                      cacheKey: j,
                      footer: n,
                      identityFunction: R,
                      items: r,
                      noItemsRenderer: a,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: c,
                      withoutHeadroom: l,
                    })
                  : y.a.createElement(P.a, {
                      ListEmptyComponent: a,
                      data: r,
                      keyExtractor: R,
                      numColumns: i,
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
                  a = t.fetch,
                  i = t.fetchIfNeeded
                ;(n ? a : i)().catch(r())
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
                    ? y.a.createElement(w.a, {
                        accessibilityLabel: x,
                        behavioralEventContext: A,
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
        })(y.a.Component)
      v()(T, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var L = I(T)
      t.a = L
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r)
      function i(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var o = n('97Jx'),
        c = n.n(o),
        l = n('KEM+'),
        s = n.n(l),
        u = (n('jwue'), n('+oxZ'), n('3XMw')),
        d = n.n(u),
        m = n('/yvb'),
        p = n('fn9Y'),
        f = d.a.c0530da5,
        h = d.a.ifea3114
      var v = function (e) {
          return a.a.createElement(m.a, {
            accessibilityLabel: f,
            hoverLabel: { label: h },
            icon: a.a.createElement(p.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        b = 'share-button',
        y = 'share-by-tweet',
        g = n('m3Bd'),
        _ = n.n(g),
        O = n('1YZw'),
        E = n('CaKu'),
        I = n('y+lG'),
        w = n('SrIh'),
        P = n('RqPI'),
        C = n('Irs7'),
        k = n('uDfI'),
        S = n('Ty5D'),
        D = n('yUQf'),
        x = n('jwTb'),
        j = n('SOvA'),
        R = n('I/9y'),
        A = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: x.a,
            text: d.a.fcc684a9,
            testID: y,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: j.a,
            text: d.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return E.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: R.a,
            text: d.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: p.a,
            text: d.a.if23a251,
          },
        }
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function B(e) {
        var t = Object(C.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(k.c)(),
              r = Object(S.g)(),
              i = Object(D.a)(P.v)
            return a.a.useMemo(
              function () {
                return function (a) {
                  var o = A[a.type],
                    c = o.isAvailable,
                    l = o.scribeAction,
                    s = _()(o, ['isAvailable', 'scribeAction'])
                  if (!c()) return null
                  var u = L({}, s)
                  function d() {
                    var o = a.shareText || e.shareText,
                      c = e.url,
                      s = L(L({}, e.scribeNamespace), {}, { action: l }, a.scribeNamespace),
                      u = { text: o, url: c },
                      d = { analytics: t, dispatch: n, history: r, mergedScribeNamespace: s, sessionToken: i }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(L(L({}, F(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            E.a.setString(Object(I.a)(t.url, n.sessionToken)),
                            r(),
                            void n.dispatch(Object(O.b)({ text: M.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              L(
                                L({ pathname: '/compose/tweet' }, F(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(I.a)(t.url, n.sessionToken) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(L(L({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(w.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(a.type, u, d)
                  }
                  return a.label && (u.text = a.label), L(L({}, u), {}, { onClick: d })
                }
              },
              [t, n, r, i, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var M = { copyLinkSuccessMessage: d.a.f88553c8, shareTextPrefixFormatter: d.a.gb5851d7 }
      function F(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? M.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var N = n('T0aG'),
        H = n.n(N),
        U = n('mN6z')
      var V = n('mjJ+'),
        z = n('rHpw')
      function W(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? W(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Y = { element: 'share' }
      function q(e) {
        var t = (function (e) {
            var t = a.a.useRef({ previous: void 0 })
            if ('object' !== H()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var r = t.current.previous
            return r && (e === r || Object(U.a)(e, r)) ? r : n()
          })(G(G({}, Y), e.scribeNamespace)),
          n = B(G(G({}, e), {}, { scribeNamespace: t })),
          r = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || X
        return a.a.createElement(o, {
          onPress: function () {
            var e = G(G({}, t), {}, { action: 'share_menu_click' })
            r.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? a.a.Children.forEach(e.children, function (e) {
                    if (a.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              a.a.createElement(V.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function X(e) {
        return a.a.createElement(v, c()({}, e, { style: K.button, testID: b }))
      }
      var K = z.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function J(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          r = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = _()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return a.a.createElement(
          q,
          c,
          a.a.createElement(i, { label: o, type: 'tweet' }),
          a.a.createElement(i, { label: n, type: 'dm' }),
          a.a.createElement(i, { label: t, type: 'copy' }),
          a.a.createElement(i, { label: r, type: 'via' }),
        )
      }
      ;(J.Action = i), (J.Custom = q)
      t.a = J
    },
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('cm6r'),
        o = n('rHpw'),
        c = n('MWbm'),
        l = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            r = e.isCompact,
            o = e.link,
            l = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            f = e.withInteractiveStyling,
            h = a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(c.a, { style: [s.defaultUpperContainerStyle, m, r && { height: 'auto' }] }, p),
              l ? a.a.createElement(c.a, { style: [s.defaultLowerContainerStyle, d] }, l) : null,
            )
          return a.a.createElement(
            i.a,
            { accessibilityLabel: t, interactive: f, link: o, onClick: u, style: [s.root, n] },
            h,
          )
        }
      l.defaultProps = { withInteractiveStyling: !1 }
      var s = o.a.create(function (e) {
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
    Mhzv: function (e, t, n) {
      'use strict'
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('zb92'),
        o = Object(i.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(6), n.e(13), n.e(20), n.e(189)]).then(n.bind(null, 'wHP+'))
          },
          renderPlaceholder: function () {
            return a.a.createElement('div', null)
          },
        })
      t.a = o
    },
    RrqW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = (n('yH/f'), n('ERkP')),
        c = n.n(o),
        l = n('t62R'),
        s = n('FIs5'),
        u = n('rHpw'),
        d = n('3XMw'),
        m = n.n(d),
        p = 'sensitive',
        f = 'blocked',
        h = 'blocked_by',
        v = Object.freeze({ SENSITIVE: p, BLOCKED: f, BLOCKED_BY: h }),
        b = { title: m.a.j32d345d, button: m.a.c3d89aca, body: void 0 },
        y = {
          title: m.a.a01d5a7c,
          body: function (e) {
            var t = e.screenName
            return c.a.createElement(
              m.a.I18NFormatMessage,
              { $i18n: 'ha49b9b7', screenName: t },
              c.a.createElement(l.b, { link: 'https://support.twitter.com/articles/117063' }, m.a.i859a9d3),
            )
          },
          button: m.a.f277e949,
        },
        g = { title: m.a.b2311b7f, body: m.a.cab51f93, button: void 0 },
        _ = Object.freeze(((r = {}), i()(r, p, b), i()(r, f, y), i()(r, h, g), r)),
        O = function (e, t) {
          return 'function' == typeof e ? (t && e({ screenName: t })) || void 0 : e
        },
        E = u.a.create(function (e) {
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
          a = _[r],
          i = a.body,
          o = a.button,
          l = a.title,
          u = O(l, n),
          d = O(i, n)
        return c.a.createElement(s.a, { buttonText: o, header: u, message: d, onButtonPress: t, style: E.style })
      }
    },
    TEoO: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('5UID'),
        l = n('3GUV'),
        s = n('iBK2'),
        u = o.a.createElement(l.a, null),
        d = function (e) {
          var t = e.accessibilityTitle,
            n = a()(e, ['accessibilityTitle']),
            r = o.a.createElement(s.b, n)
          return t ? o.a.createElement(c.a, { title: t }, r) : r
        }
      ;(d.defaultProps = { footer: u }), (t.a = d)
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return re
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
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
        y = n.n(b),
        g = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('RhWx')),
        _ = n.n(g),
        O = n('1YZw'),
        E = n('Fg8X'),
        I = n('n4jD'),
        w = n('RqPI'),
        P = n('iUle'),
        C = function (e) {
          return function (t, n, r) {
            var a = r.api,
              i = n(),
              o = Object(w.q)(i) || '',
              c = Object(I.c)(i),
              l = Object(P.a)(o),
              s = { moment_id: e, teamUserId: c }
            return a.Moments.delete(s).then(function () {
              t([E.a.deleteOne(e), l.removeEntry('moment-'.concat(e))])
            })
          }
        },
        k = n('rxPX'),
        S = Object(k.a)()
          .propsFromState(function () {
            return { activeTeamId: I.c }
          })
          .propsFromActions(function () {
            return { addToast: O.b, deleteMoment: C }
          })
          .withAnalytics({ component: 'action_sheet' }),
        D = n('ACNv'),
        x = n('3XMw'),
        j = n.n(x),
        R = n('Rp9C'),
        A = n('TnY3'),
        T = n('v6aA'),
        L = n('hiGS'),
        B = n('I/9y'),
        M = n('TW8A'),
        F = n('xrkw'),
        N = n('zIWA')
      function H(e, t) {
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
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? H(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function V(e) {
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
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var z = j.a.e8dff578,
        W = j.a.fcc64f01,
        G = j.a.ea193d66,
        Y = j.a.e5227fe0,
        q = j.a.d0df844c,
        X = j.a.fd61ab81,
        K = j.a.aaae5e7f,
        J = j.a.d96cf7cd,
        Q = j.a.e7718461,
        Z = (function (e) {
          u()(n, e)
          var t = V(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(l()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  r = t.id,
                  a = t.withEditAction,
                  i = t.withLinkAction,
                  o = []
                return (
                  e._isOwner()
                    ? (o.push({
                        confirmation: { label: J, headline: X, text: K, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: G,
                        Icon: L.a,
                      }),
                      i && o.push({ link: '/i/events/'.concat(r), onClick: e._handleClickLink, text: Y, Icon: B.a }),
                      a && o.push({ link: '/i/moment_maker/edit/'.concat(r), text: z, Icon: M.a }),
                      o.push({
                        link: '/i/moments/'.concat(r, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: q,
                        Icon: F.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: W, Icon: N.a }),
                  o
                )
              }),
              v()(l()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  r = t.history,
                  a = t.id,
                  i = t.scribeNamespace,
                  o = U(U({}, n), i)
                r.push({
                  pathname: '/i/report/moment/'.concat(a),
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
                  a = t.history,
                  i = t.id,
                  o = t.redirectOnDelete
                r(i).then(function () {
                  e._scribeAction('delete'),
                    n({ text: Q }),
                    o && a.goBack({ backLocation: o, shouldReplaceOnFallback: !0 })
                })
              }),
              v()(l()(e), '_scribeAction', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  i = r.id,
                  o = r.scribeMomentItem,
                  c = r.scribeNamespace,
                  l = U(
                    U({}, a.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        _()(a.contextualScribeData && a.contextualScribeData.items ? a.contextualScribeData.items : []),
                        [o || R.a.getMomentItem(i)],
                      ),
                    },
                  )
                a.scribe(U({ action: t, data: l, element: n }, c))
              }),
              v()(l()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  r = t.author,
                  a = e.context.loggedInUserId,
                  i = a && (null == r ? void 0 : r.id_str) === a,
                  o = n && (null == r ? void 0 : r.id_str) === n
                return !!i || !!o
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
                    ? y.a.createElement(D.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(Z, 'contextType', T.a)
      var $ = S(Z),
        ee = Object(A.a)($),
        te = n('2G3J')
      function ne(e) {
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
            var a = f()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return m()(this, n)
        }
      }
      var re = (function (e) {
        u()(n, e)
        var t = ne(n)
        function n() {
          var e
          a()(this, n)
          for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(i))),
            v()(l()(e), '_renderMenu', function (t) {
              var n = e.props,
                r = n.author,
                a = n.eventId,
                i = n.redirectOnDelete,
                o = n.scribeMomentItem,
                c = n.scribeNamespace,
                l = n.title,
                s = n.withEditAction,
                u = n.withLinkAction
              return y.a.createElement(ee, {
                author: r,
                id: a,
                onClose: t,
                redirectOnDelete: i,
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
                  a = e.style,
                  i = e.type
                return y.a.createElement(te.a, {
                  iconStyle: t,
                  onPress: n,
                  renderMenu: this._renderMenu,
                  size: r,
                  style: a,
                  type: i,
                })
              },
            },
          ]),
          n
        )
      })(y.a.Component)
      v()(re, 'defaultProps', { withEditAction: !0 })
    },
    XmKV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return o
        })
      n('6U7i'), n('LW0h')
      var r = function (e, t) {
          if (0 !== e.length) {
            for (var n = e[0], r = t(n), a = 1; a < e.length; a++) {
              var i = e[a],
                o = t(i)
              o < r && ((n = i), (r = o))
            }
            return n
          }
        },
        a = n('HT/6'),
        i = function (e) {
          var t,
            n,
            a =
              null == e || null === (t = e[0]) || void 0 === t || null === (n = t.placement) || void 0 === n
                ? void 0
                : n.scrollY()
          return r(
            e,
            0 === a
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
            return e.playbackPriority === a.a.DOCKABLE
          })
          return t.length ? t[0] : i(e)
        }
    },
    XvPy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return br
      })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
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
        _ = n.n(g),
        O = (n('Blm6'), n('jQ/y'), n('ikiw')),
        E = n('t62R'),
        I = n('0GAP'),
        w = n('3XMw'),
        P = n.n(w),
        C = P.a.cfe836d1,
        k = P.a.efb132c2
      P.a.f27deeea
      var S = function (e) {
          return O.a[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6)
        },
        D = function (e, t) {
          var n = S(e)
          return 'Preorder' === t
            ? (function (e) {
                return _.a.createElement(
                  P.a.I18NFormatMessage,
                  { $i18n: 'd6c6deae' },
                  _.a.createElement(E.b, { weight: 'bold' }, P.a.j2b1a8b8({ formattedPrice: e })),
                )
              })(n)
            : _.a.createElement(E.b, { weight: 'bold' }, n)
        },
        x = function (e, t) {
          var n = parseInt(t.micro_value, 10),
            r = parseInt(e.micro_value, 10),
            a = Math.round(((n - r) / n) * 100)
          return C({ percent: a })
        },
        j = function (e, t, n) {
          return e && e.length > 0 ? e[e.length - 1] : t ? t.shortened_google_product_category_name : void 0
        },
        R = function (e) {
          var t = e.commerceProduct,
            n = e.onClick,
            r = e.style,
            a = t.product_core_data,
            i =
              null != a
                ? (function (e) {
                    var t = e.product_details,
                      n = e.product_identifiers,
                      r = t.availability,
                      a = t.cover_media,
                      i = (t.description, t.external_url),
                      o = t.price,
                      c = t.product_sale,
                      l = t.title,
                      s = null == n ? void 0 : n.custom_product_type,
                      u = null == n ? void 0 : n.google_product_category,
                      d = null == a ? void 0 : a.media_info
                    if (null == d) return null
                    var m = (function (e, t) {
                        return t
                          ? { currentPrice: t.price, previousPrice: e }
                          : { currentPrice: e, previousPrice: void 0 }
                      })(o, c),
                      p = m.currentPrice,
                      f = m.previousPrice
                    return {
                      formattedDescription: j(s, u),
                      formattedPercentOff: f ? x(p, f) : void 0,
                      formattedPreviousPrice: f ? S(f) : void 0,
                      formattedPrice: D(p, r),
                      formattedTitle: l,
                      image: 'ApiImage' === d.__typename ? d.original_img_url : '',
                      url: i.url,
                    }
                  })(a)
                : null
          if (i) {
            var o = i.formattedDescription,
              c = i.formattedPercentOff,
              l = i.formattedPreviousPrice,
              s = i.formattedPrice,
              u = i.formattedTitle,
              d = i.image,
              m = i.url
            return _.a.createElement(I.a, {
              accessibilityLabel: k({ title: u, description: o, price: s }),
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
        A = n('3zvM'),
        T = n('lMB6')
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
      var B = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? L(Object(n), !0).forEach(function (t) {
                  y()(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : L(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        })({}, Object(A.f)({ namespace: 'commerceItems' })),
        M = T.a.register(B),
        F = n('rxPX'),
        N = function (e, t) {
          var n = t.commerceItemId
          return n ? M.select(e, n) : void 0
        },
        H = Object(F.a)().propsFromState(function () {
          return { commerceItem: N }
        })(function (e) {
          var t = e.commerceItem,
            n = e.onClick
          switch (null == t ? void 0 : t.__typename) {
            case 'CommerceProduct':
              t.__typename
              var r = a()(t, ['__typename'])
              return _.a.createElement(R, { commerceProduct: r, onClick: n })
            default:
              return null
          }
        }),
        U = function (e, t) {
          return t.module
            .selectItems(e)
            .map(function (t) {
              return t ? M.select(e, t) : void 0
            })
            .filter(Boolean)
        },
        V = Object(F.a)().propsFromState(function (e) {
          return { commerceItems: U }
        }),
        z = n('MWbm'),
        W = { threshold: 0.01 },
        G = function (e) {
          var t = e.children,
            n = e.onImpression,
            r = e.style,
            a = _.a.useRef(null),
            i = function (e) {
              e.forEach(function (e) {
                e.isIntersecting && n()
              })
            }
          return (
            _.a.useEffect(function () {
              if ('IntersectionObserver' in window) {
                var e = new IntersectionObserver(i, W),
                  t = a.current
                null != t && e.observe(t)
                return function () {
                  var t = a.current
                  null != t && e.unobserve(t), e.disconnect()
                }
              }
            }, []),
            _.a.createElement(z.a, { ref: a, style: r }, t)
          )
        },
        Y = n('Rp9C'),
        q = n('FS1z'),
        X = n('Irs7'),
        K = n('FIs5'),
        J = n('rHpw'),
        Q = P.a.e9f1fbcb,
        Z = P.a.c9b302f8,
        $ = function () {
          return _.a.createElement(K.a, { header: Q, message: Z })
        },
        ee = J.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 },
            cell: { marginHorizontal: '1%', marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: '48%' },
          }
        }),
        te = Object(X.a)(
          V(function (e) {
            var t = e.analytics,
              n = e.commerceItems,
              r = e.module,
              a = t.contextualScribeData,
              i = function (e, r) {
                var i = Y.a.addCommerceDetailsToItems(a, n, e)
                t.scribe({ element: 'product', action: r, data: i })
              },
              o = function (e) {
                return function () {
                  i(e, 'impression')
                }
              },
              c = function (e) {
                return function () {
                  i(e, 'click')
                }
              }
            return _.a.createElement(
              z.a,
              { style: ee.root },
              _.a.createElement(q.a, {
                module: r,
                noItemsRenderer: $,
                numColumns: 2,
                renderer: function (e) {
                  var t = e.item
                  return _.a.createElement(
                    G,
                    { onImpression: o(t), style: ee.cell },
                    _.a.createElement(H, { commerceItemId: t, onClick: c(t) }),
                  )
                },
              }),
            )
          }),
        ),
        ne = n('dwig'),
        re = n('kGix'),
        ae = n('v//M'),
        ie = n('0+qk'),
        oe = (n('2G9S'), n('hBvt'), n('uFXj'), n('ho0z'), n('G6rE')),
        ce = Object(F.a)()
          .propsFromState(function () {
            return { loggedInUser: oe.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          })
          .withAnalytics(),
        le = n('cm6r'),
        se = n('XP29'),
        ue = n('cjZk'),
        de = n('3rWK'),
        me = n('ll3R')
      function pe(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var fe = P.a.b8f0483e,
        he = P.a.e349147b,
        ve = (function (e) {
          m()(n, e)
          var t = pe(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_handleClick', function (t) {
                var n = e.props,
                  r = n.analytics,
                  a = n.onClick
                a && a(t), r.scribe({ component: 'inline_compose_prompt', action: 'click' })
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
                    a = e.userAvatarURI,
                    i = e.userName,
                    o = e.withBorder,
                    c = e.withComposeIcons
                  return _.a.createElement(
                    le.a,
                    {
                      accessibilityLabel: fe,
                      interactiveStyles: null,
                      link: t ? void 0 : n,
                      onClick: t ? void 0 : this._handleClick,
                      style: [be.root, o && be.borderBottom],
                    },
                    _.a.createElement(se.a, { accessibilityLabel: i, size: 'xxLarge', uri: a }),
                    _.a.createElement(
                      z.a,
                      { style: [be.column, be.bodyColumn] },
                      _.a.createElement(
                        z.a,
                        { style: [be.fakeInput, t && be.disabled] },
                        _.a.createElement(E.b, { color: 'gray700', numberOfLines: 1, size: 'subtext1' }, r),
                      ),
                      c
                        ? _.a.createElement(
                            _.a.Fragment,
                            null,
                            _.a.createElement(ue.a, { style: be.icon }),
                            _.a.createElement(de.a, { style: be.icon }),
                            _.a.createElement(me.a, { style: be.icon }),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(ve, 'defaultProps', { link: '/compose/tweet', promptLabel: he, withBorder: !1, withComposeIcons: !0 })
      var be = J.a.create(function (e) {
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
        ye = ce(ve),
        ge = n('s3M2'),
        _e = n.n(ge),
        Oe = (n('M+/F'), n('RrqW'))
      function Ee(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Ie = (function (e) {
          m()(n, e)
          var t = Ee(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), 'state', { interstitialsToDisplay: void 0 }),
              y()(u()(e), '_handleInterstitialPress', function () {
                var t = e.state.interstitialsToDisplay,
                  n = void 0 === t ? [] : t,
                  r = _e()(n).slice(1)
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
                      a = e.type,
                      i = _.a.createElement(Oe.b, { onPress: this._handleInterstitialPress, screenName: r, type: a })
                    return n ? i : t(i)
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
        })(_.a.Component),
        we = n('wAC9'),
        Pe = function (e) {
          return Object(we.a)({
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
        Ce = (n('jQ3i'), n('x4t0'), n('zrc3')),
        ke = n('8/3a'),
        Se =
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
                      var a = this._indiceCallbacks.has(n)
                      r >= 0.5 && !a
                        ? this._indiceCallbacks.set(
                            n,
                            setTimeout(function () {
                              return t._handleScribeImpression(n)
                            }, 500),
                          )
                        : r < 0.5 && a && (clearTimeout(this._indiceCallbacks.get(n)), this._indiceCallbacks.delete(n))
                    }
                  },
                },
              ]),
              e
            )
          })()),
        De = n('boUI'),
        xe = n('Wms4'),
        je = n('zlxh'),
        Re = P.a.f2382014,
        Ae = P.a.g66c8347,
        Te = function (e) {
          var t = e.playbackDuration
          switch (e.type) {
            case je.e.LIVE_BROADCAST:
              return _.a.createElement(xe.a, { type: 'live' }, Re)
            case je.e.REPLAY_BROADCAST:
              return _.a.createElement(xe.a, { bold: !0 }, Ae)
            case je.e.VOD:
              return _.a.createElement(
                xe.a,
                null,
                (function (e) {
                  if (e) {
                    var t = Math.round(e / 1e3),
                      n = t % 60,
                      r = n < 10 ? '0'.concat(n) : n,
                      a = (t - n) / 60
                    if (a > 60) {
                      var i = Math.floor(a / 60),
                        o = a % 60,
                        c = o % 60 < 10 ? '0'.concat(o) : o
                      return ''.concat(i, ':').concat(c, ':').concat(r)
                    }
                    return ''.concat(a, ':').concat(r)
                  }
                })(t) || '',
              )
            case je.e.GIF:
              return _.a.createElement(xe.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        Le = n('hqKg'),
        Be = n('H9MA'),
        Me = n('oEGd'),
        Fe = Object(Le.createSelector)(Be.c, function (e) {
          return { dataSaverMode: e }
        }),
        Ne = Object(Me.c)(Fe),
        He = n('prG5'),
        Ue = n('A91F')
      function Ve(e, t) {
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
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ve(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ve(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function We(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Ge = P.a.i3f7ff0f,
        Ye = (function (e) {
          m()(n, e)
          var t = We(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
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
                      a = n.hasImageError,
                      i = t.currentSlate
                    a &&
                      r &&
                      i &&
                      r.image &&
                      i.image &&
                      r.image.url !== i.image.url &&
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
                      a = r.cropCandidates,
                      i = r.image,
                      o = r.periscopeVariants
                    return i && !n
                      ? _.a.createElement(He.a, {
                          accessibilityLabel: Ge,
                          aspectMode: Ue.a.exact(J.a.theme.aspectRatios.landscape),
                          backgroundColor: J.a.theme.colors.gray50,
                          cropCandidates: a,
                          customVariants: o,
                          hideAcceptOverlay: !0,
                          image: i,
                          onError: this._handleError,
                        })
                      : _.a.createElement(z.a, { style: qe.fallback })
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
                        a = Object(je.h)(n),
                        i = Object(je.h)(r),
                        o = 'latest.jpg' === i
                      return a !== i || (!e.dataSaverMode && o) ? ze(ze({}, t), {}, { currentSlate: e.slate }) : null
                    }
                    return ze(ze({}, t), {}, { currentSlate: e.slate })
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component),
        qe = J.a.create(function (e) {
          return { fallback: { backgroundColor: e.colors.gray50 } }
        }),
        Xe = Ne(Ye),
        Ke = n('jV+4'),
        Je = n('9Xij'),
        Qe = n('vCAy')
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
      function $e(e) {
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
      function et(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var tt = P.a.d58baa7e,
        nt = ['views', 'viewers'],
        rt = (function (e) {
          m()(n, e)
          var t = et(n)
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
                  return _.a.createElement(
                    z.a,
                    { accessibilityRole: 'button', onClick: e, style: at.carouselItem },
                    r,
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
                      r = e.verified
                    return _.a.createElement(Ke.a, {
                      isVerified: r,
                      name: t,
                      screenName: n,
                      style: at.userAttribution,
                      withStackedLayout: !0,
                    })
                  }
                },
              },
              {
                key: '_renderOverlay',
                value: function (e) {
                  var t = this.props.isSelected
                  return _.a.createElement(
                    Je.a,
                    { ratio: J.a.theme.aspectRatios.landscape, style: at.image },
                    this._renderSocialProof(e),
                    t && _.a.createElement(z.a, { style: at.selectedOverlay }),
                  )
                },
              },
              {
                key: '_renderSocialProof',
                value: function (e) {
                  var t = this.props.mediaItem.carouselItemInfo || {},
                    n = t.playbackDuration,
                    r = t.socialProof,
                    a = t.type,
                    i =
                      r && nt.includes(r.type)
                        ? _.a.createElement(
                            xe.a,
                            null,
                            _.a.createElement(
                              z.a,
                              { style: at.horizontalContainer },
                              _.a.createElement(De.a, null),
                              _.a.createElement(E.b, null, tt(r.count)),
                            ),
                          )
                        : null,
                    o = Te({ playbackDuration: n, type: a })
                  return _.a.createElement(_.a.Fragment, null, e, _.a.createElement(Qe.a, { align: 'left' }, o, i))
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props.mediaItem.slate
                  return e ? _.a.createElement(Xe, { slate: e }) : null
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        at = J.a.create(function (e) {
          return {
            selectedOverlay: $e(
              $e({}, J.a.absoluteFillObject),
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
      function ot(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var ct = Object.freeze({
          CarouselImpression: 'carousel_impression',
          TileClick: 'tile_click',
          TileImpression: 'tile_impression',
          TileAutoClick: 'tile_auto_click',
        }),
        lt = { action: ct.CarouselImpression },
        st = { action: ct.TileAutoClick },
        ut = { action: ct.TileImpression },
        dt = { action: ct.TileClick },
        mt = (function (e) {
          m()(n, e)
          var t = ot(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), '_getHandleOnClickForItem', function (t, n) {
                return function () {
                  var r = e.props.onCarouselScribe
                  n(t, function () {
                    return r(dt)
                  })
                }
              }),
              y()(u()(e), '_handleCarouselChildImpression', function (t) {
                ;(0, e.props.onCarouselScribe)(ut, { tilePosition: t })
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
                  ;(this._impressionTracker = new Se(this._handleCarouselChildImpression)),
                    this._shouldDisplayCarousel() && e(lt)
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
                    a = n.onCarouselScribe
                  this._shouldDisplayCarousel() && r.length !== t.length && a(lt)
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._shouldDisplayCarousel()
                    ? _.a.createElement(
                        it.a,
                        {
                          onVisibleRangeChange: this._handleVisibleRangeChange,
                          style: pt.carousel,
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
                    a = t.setSelectedCarouselIndex
                  return n.map(function (t, n) {
                    return _.a.createElement(rt, {
                      isSelected: n === r,
                      key: n,
                      mediaItem: t,
                      onClick: e._getHandleOnClickForItem(n, a),
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
        })(_.a.PureComponent),
        pt = J.a.create(function (e) {
          return { carousel: { paddingTop: e.spaces.space16 } }
        }),
        ft = mt,
        ht = n('/yvb')
      function vt(e, t) {
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
      function bt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? vt(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : vt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var yt = P.a.j1d352d7,
        gt = P.a.d18909d4,
        _t = { element: 'reminder_button' },
        Ot = Object.freeze({ impression: 'impression', click: 'click' })
      var Et = function (e) {
          var t = e.eventId,
            n = e.onPress,
            r = e.onRemindButtonScribe,
            a = e.remindMeSubscription,
            i = a.notification_id,
            o = a.subscribed,
            c = _.a.useRef({})
          ;(c.current.onRemindButtonScribe = r),
            _.a.useEffect(function () {
              var e
              null === (e = c.current) || void 0 === e || e.onRemindButtonScribe(bt({ action: Ot.impression }, _t))
            }, [])
          var l = o ? 'primaryOutlined' : 'primaryFilled',
            s = o ? yt : gt
          return _.a.createElement(
            ht.a,
            {
              onPress: function () {
                n(t, { remind_me: !o, notification_id: i }), r(bt({ action: Ot.click }, _t))
              },
              size: 'medium',
              type: l,
            },
            s,
          )
        },
        It = n('EskI'),
        wt = n('v6aA'),
        Pt = n('0yYu'),
        Ct = n('97Jx'),
        kt = n.n(Ct),
        St = n('ZUOq'),
        Dt = n('MMRb'),
        xt = n('zHh/'),
        jt = Object(Le.createSelector)(Be.d, Dt.selectDrawerVisibility, function (e, t) {
          return { canAutoplay: Object(xt.a)(e), dmDrawerVisibility: t }
        }),
        Rt = Object(Me.c)(jt),
        At = n('7JQg'),
        Tt = n('AQ79'),
        Lt = _.a.createContext({ dockRequested: !1, closeRequested: !1 }),
        Bt = n('ddV6'),
        Mt = n.n(Bt),
        Ft = n('MXDK')
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
      function Ht(e) {
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
      var Ut = { component: 'dock' },
        Vt = Object.freeze({
          dockedOnScroll: 'dock_on_scroll',
          undockOnScroll: 'undock_on_scroll',
          dismissTap: 'dismiss_tap',
          undockTap: 'undock_tap',
        })
      var zt = function (e) {
          var t = _.a.useContext(wt.a).featureSwitches,
            n = _.a.useRef(null),
            r = _.a.useState(!1),
            a = Mt()(r, 2),
            i = a[0],
            o = a[1],
            c = _.a.useState(!1),
            l = Mt()(c, 2),
            s = l[0],
            u = l[1],
            d = e.onCloseDockComplete,
            m = e.onDockingScribeAction,
            p = e.render
          return (
            (function (e) {
              _.a.useEffect(
                function () {
                  i && !e && o(!1),
                    i || s === e || (u(e), m(Ht(Ht({}, Ut), {}, { action: e ? Vt.dockedOnScroll : Vt.undockOnScroll })))
                },
                [e],
              )
            })(e.requestDock),
            (function (e, r) {
              _.a.useEffect(
                function () {
                  if (!r && e) d && d()
                  else if (!r && null != n && n.current) {
                    var a = n.current.offsetTop
                    Ft.d({ featureSwitches: t, top: a })
                  }
                },
                [e, r],
              )
            })(i, s),
            _.a.createElement(
              z.a,
              { ref: n },
              p({
                closeRequested: i,
                dockRequested: s,
                requestClose: function () {
                  o(!0), u(!1), m(Ht(Ht({}, Ut), {}, { action: Vt.dismissTap }))
                },
                requestUndock: function () {
                  u(!1), m(Ht(Ht({}, Ut), {}, { action: Vt.undockTap }))
                },
              }),
            )
          )
        },
        Wt = n('gZV8'),
        Gt = n('xKuM'),
        Yt = n('Lsrn'),
        qt = n('shC7'),
        Xt = n('k/Ka')
      function Kt(e, t) {
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
      function Jt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Kt(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Kt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Qt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Xt.a)(
          'svg',
          Jt(
            Jt({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [Yt.a.root, e.style, qt.a.getConstants().isRTL && Yt.a.iconRTL],
              viewBox: '0 0 24 24',
            },
          ),
          _.a.createElement(
            'g',
            null,
            _.a.createElement('path', {
              d: 'M19.687 22H7.813C6.538 22 5.5 20.962 5.5 19.687V13.17c0-.413.336-.75.75-.75s.75.337.75.75v6.517c0 .448.365.813.813.813h11.873c.448 0 .813-.365.813-.813V7.813c0-.448-.365-.813-.813-.813H13.17c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h6.517C20.962 5.5 22 6.538 22 7.813v11.873C22 20.962 20.962 22 19.687 22z',
            }),
            _.a.createElement('path', {
              d: 'M11.996 10.936L4.56 3.5h4.636c.414 0 .75-.336.75-.75S9.61 2 9.196 2H2.75c-.414 0-.75.336-.75.75v6.455c0 .414.336.75.75.75s.75-.336.75-.75V4.56l7.436 7.437c.146.146.338.22.53.22s.384-.073.53-.22c.293-.294.293-.768 0-1.06z',
            }),
          ),
        )
      }
      Qt.metadata = { width: 24, height: 24 }
      var Zt = Qt,
        $t = n('hOZg')
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
            r = v()(e)
          if (t) {
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var tn = P.a.e839db39,
        nn = P.a.a7a119ec,
        rn = (function (e) {
          m()(n, e)
          var t = en(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), 'state', { isOffscreen: !1 }),
              y()(u()(e), '_render', function (t) {
                var n = t.closeRequested,
                  r = t.dockRequested,
                  a = t.requestClose,
                  i = t.requestUndock,
                  o = e.props,
                  c = o.children,
                  l = o.placeholder
                return _.a.createElement(
                  Lt.Provider,
                  { value: { closeRequested: n, dockRequested: r } },
                  r && l,
                  _.a.createElement(
                    z.a,
                    { style: r ? [an.dockedContainer, e._getDockedBottomStyle()] : void 0 },
                    r && e._renderDockingControlBar(i, a),
                    c,
                  ),
                )
              }),
              y()(u()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  r = n.isDisabled,
                  a = n.visibleThreshold
                r || e.setState({ isOffscreen: t.visibleFraction() <= a })
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
                    a = t.onDockingScribeAction
                  return _.a.createElement(
                    Wt.e,
                    { onPlacementChange: this._handlePlacementChange, style: an.root },
                    _.a.createElement(zt, {
                      onCloseDockComplete: r,
                      onDockingScribeAction: a,
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
                    a = n.title
                  return _.a.createElement(Gt.a, {
                    rightControl: this._renderDockingControls(e, t),
                    subtitle: r,
                    title: a,
                  })
                },
              },
              {
                key: '_renderDockingControls',
                value: function (e, t) {
                  return _.a.createElement(
                    z.a,
                    { style: an.dockingControls },
                    _.a.createElement(ht.a, {
                      accessibilityLabel: nn,
                      icon: _.a.createElement(Zt, null),
                      onPress: e,
                      type: 'brandText',
                    }),
                    _.a.createElement(ht.a, {
                      accessibilityLabel: tn,
                      icon: _.a.createElement($t.a, null),
                      onPress: t,
                      type: 'brandText',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      y()(rn, 'defaultProps', {
        placeholder: _.a.createElement(Je.a, { ratio: J.a.theme.aspectRatios.landscape }),
        visibleThreshold: 0,
      })
      var an = J.a.create(function (e) {
          return {
            root: { zIndex: 1 },
            dockedContainer: {
              bottom: 0,
              right: 0,
              marginEnd: e.spaces.space20,
              boxShadow: e.boxShadows.small,
              maxWidth: St.a.columnWidths.secondary.normal,
              position: 'fixed',
              width: St.a.columnWidths.secondary.normal,
            },
            dockingControls: { flexDirection: 'row', alignItems: 'baseline' },
          }
        }),
        on = rn,
        cn = n('nT9l'),
        ln = n('hACr')
      function sn(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var un = (function (e) {
        m()(n, e)
        var t = sn(n)
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
                  a = t.remindMeButton,
                  i = this._renderMediaLabel(),
                  o =
                    i || a
                      ? _.a.createElement(
                          z.a,
                          {
                            style: [
                              dn.verticalAlignment,
                              ((e = n), { backgroundImage: 'linear-gradient(transparent 0%, '.concat(e, ' 100%)') }),
                            ],
                          },
                          _.a.createElement(z.a, { style: dn.wrapper }, a, i),
                        )
                      : null
                return _.a.createElement(z.a, null, o, r)
              },
            },
            {
              key: '_renderMediaLabel',
              value: function () {
                var e = this.props.mediaLabel
                return e
                  ? _.a.createElement(
                      z.a,
                      { style: dn.mediaLabelWrapper },
                      _.a.createElement(E.b, { align: 'left', color: 'white', size: 'body', style: dn.mediaLabel }, e),
                    )
                  : null
              },
            },
          ]),
          n
        )
      })(_.a.Component)
      y()(un, 'defaultProps', { backgroundColor: J.a.theme.colors.translucentBlack77 })
      var dn = J.a.create(function (e) {
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
        mn = un,
        pn = n('TIdA'),
        fn = n('wD1h'),
        hn = n('3dad')
      function vn(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var bn = P.a.f93bb3ee,
        yn = (function (e) {
          m()(n, e)
          var t = vn(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(u()(e), 'state', { shouldRenderImage: !0 }),
              y()(u()(e), '_getRenderDataSafeImage', function (t) {
                var n = t.mediaItem,
                  r = t.originalImage
                return function (t) {
                  var a = t.resourceSelectionHandler,
                    i = t.useMinimumData,
                    o = e.props,
                    c = o.fallbackAccessibilityLabel,
                    l = o.slate,
                    s = l.label,
                    u = l.periscopeVariants,
                    d = n.expanded_url,
                    m = n.ext_alt_text,
                    p = n.original_info,
                    f = m || c,
                    h = _.a.createElement(
                      mn,
                      { mediaLabel: i ? void 0 : s },
                      _.a.createElement(pn.a, {
                        accessibilityLabel: f,
                        aspectMode: Ue.a.exact(J.a.theme.aspectRatios.landscape),
                        cropCandidates: p && p.focus_rects,
                        customVariants: u,
                        image: r,
                        onError: e._handleImageError,
                        onVariantSelection: a,
                        previewMode: i,
                      }),
                    )
                  return d
                    ? _.a.createElement(
                        ln.a,
                        { handlers: y()({}, fn.a.shortcuts.openMediaModal, e._handleOpenPhotoModal) },
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
                    t = e && hn.a.getOriginalImage(e)
                  return e && t
                    ? _.a.createElement(cn.a, {
                        acceptLabel: bn,
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
                  return Object(je.s)(n, t) || void 0
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        gn = n('oQhu'),
        _n = n('XmKV'),
        On = 'events-player',
        En = n('Modb'),
        In = n('lklz'),
        wn = n('Mhzv'),
        Pn = n('38/B'),
        Cn = n('HT/6'),
        kn = n('XrEN'),
        Sn = n('mf9H')
      function Dn(e, t) {
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
      function xn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Dn(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Dn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function jn(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var Rn = P.a.b0b38773,
        An = { autoplayPrioritizationPolicy: _n.b, minimumVisibilityForAutoplay: Wt.b },
        Tn = new Sn.a(An),
        Ln = { hideFullScreenButton: !0 },
        Bn = (function (e) {
          m()(n, e)
          var t = jn(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
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
                Object(gn.a)(function (t, n, r, a, i, o) {
                  return function (c) {
                    var l = c.containerRef,
                      s = c.guestsState,
                      u = c.playerApi,
                      d = c.playerState
                    return _.a.createElement(wn.a, {
                      containerRef: l,
                      guestsState: s,
                      isDocked: n,
                      nextItemInfo: a,
                      onUpNextComplete: e._getHandleUpNextOverlayComplete(i),
                      onUpNextReplay: e._handleReplayPress,
                      playerApi: u,
                      playerDisplayOptions: t,
                      playerState: d,
                      renderUpNextImage: function () {
                        var e = null == o ? void 0 : o.slate
                        return _.a.createElement(
                          _.a.Fragment,
                          null,
                          e ? _.a.createElement(Xe, { slate: e }) : null,
                          _.a.createElement(z.a, { style: Mn.backgroundFading }),
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
                  a = t.key,
                  i = t.playerProps
                if (!i) return null
                var o = e.props.disableFullscreenVideo,
                  c = e._shouldRenderUpNext(n, r),
                  l = o ? Ln : void 0,
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
                  v = e._getUiStack(i.displayOptions, r, !!c, h, m, p)
                return i
                  ? _.a.createElement(
                      z.a,
                      { style: r ? Mn.dockedContainerBackground : void 0 },
                      _.a.createElement(
                        En.a,
                        kt()({}, i, {
                          displayOptions: l,
                          key: a,
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
                      a = r.onChildScribeAction,
                      i = r.setSelectedCarouselIndex,
                      o = { tilePosition: t }
                    i(t), a(n ? dt : st, o)
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
                  a = r.canAutoplay,
                  i = r.carousel,
                  o = r.isPlayerFullscreen,
                  c = r.selectedItemIndex,
                  l = e._getNextEligibleCarouselItemIndex(c, i)
                return (
                  e._multiVideoAutoAdvanceEnabled &&
                  a &&
                  !Pn.a.reducedMotionEnabled &&
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
                  a = n.selectedItemIndex
                if (t) {
                  var i = e._getNextEligibleCarouselItemIndex(a, r)
                  e._getHandleUpNextOverlayComplete(i)()
                } else e._playerInstance && e._playerInstance.pause()
              }),
              y()(u()(e), '_handleMuteChange', function (t) {
                var n = t.isPlayerMuted
                return e.setState({ isPlayerMuted: n })
              }),
              y()(u()(e), '_handleReplayPress', function () {
                e._playerInstance && e._playerInstance.replay()
              }),
              y()(u()(e), '_getNextEligibleCarouselItemIndex', Object(gn.a)(je.l)),
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
                    a = t.mediaType,
                    i = t.onChildScribeAction,
                    o = t.title
                  switch (a) {
                    case je.e.REPLAY_BROADCAST:
                    case je.e.LIVE_BROADCAST:
                    case je.e.VOD:
                      e = this._renderVideo()
                      break
                    case je.e.GIF:
                      e = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 })
                      break
                    case je.e.SLATE:
                    default:
                      e = this._renderImage()
                  }
                  var c = r ? this._renderUserSceenName(n) : null
                  return _.a.createElement(
                    on,
                    {
                      dockBottomOffset: this._getOffsetForDrawer(),
                      isDisabled: !r,
                      onCloseDockComplete: this._handleCloseDockComplete,
                      onDockingScribeAction: i,
                      subtitle: c,
                      title: o,
                      visibleThreshold: Wt.b,
                    },
                    _.a.createElement(z.a, { style: Mn.container, testID: On }, e),
                  )
                },
              },
              {
                key: '_getOffsetForDrawer',
                value: function () {
                  var e = J.a.theme.spaces,
                    t = this.props.dmDrawerVisibility,
                    n = parseInt(''.concat(e.space20), 10)
                  return t === Tt.b.COLLAPSED
                    ? St.a.dmDrawerHeight.collapsed + n
                    : t === Tt.b.EXPANDED
                    ? St.a.dmDrawerHeight.expanded + n
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
                    ? _.a.createElement(yn, {
                        coverMedia: n.coverMedia,
                        fallbackAccessibilityLabel: Rn,
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
                    a = r.isGif,
                    i = void 0 !== a && a,
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
                    g = m || {},
                    O = g.id_str,
                    E = f.id_str,
                    I = y || {},
                    w = I.image,
                    P = I.periscopeVariants,
                    C = {
                      accessibilityLabel: Rn,
                      aspectRatio: J.a.theme.aspectRatios.landscape,
                      backgroundColor: J.a.theme.colors.gray0,
                      maxLoopCount: i ? void 0 : 3,
                      onFullscreenChange: b,
                      onMuteChange: this._handleMuteChange,
                      promotedContent: v,
                      playbackCoordination: this._dockableAutoplayPolicyEnabled ? Sn.b : Tn,
                      playbackPriority: Cn.a.DOCKABLE,
                      poster: w,
                      customVariants: P,
                      shouldPlayUnmuted: !this.state.isPlayerMuted,
                      setPlayer: this._setPlayer,
                    }
                  if (d && h)
                    (e = d),
                      (t = xn(
                        xn({}, C),
                        {},
                        {
                          videoType: 'video',
                          includeBroadcastEventAssociation: !0,
                          source: { contentId: h, variants: [], videoId: In.b.forBroadcast(d) },
                        },
                      ))
                  else if (O && E) {
                    var k = In.b.forTweet(E),
                      S = kn.a.getVideoFromCoverMedia(m),
                      D = S && kn.a.extractVideoProps(k, S, s)
                    ;(e = O), (t = D ? xn(xn({}, D), C) : void 0)
                  }
                  return _.a.createElement(Lt.Consumer, null, function (r) {
                    var a = r.closeRequested,
                      i = r.dockRequested
                    return n._renderHorizonPlayer({ closeRequested: a, dockRequested: i, key: e, playerProps: t }, c)
                  })
                },
              },
              {
                key: '_renderUserSceenName',
                value: function (e) {
                  var t = e || {},
                    n = t.accountType,
                    r = t.name,
                    a = t.screenName,
                    i = t.userId,
                    o = null
                  return (
                    i &&
                      (n === je.a.TWITTER && a
                        ? (o = _.a.createElement(Ke.a, { screenName: a, weight: 'normal', withLink: !0 }))
                        : n === je.a.PERISCOPE &&
                          r &&
                          (o = _.a.createElement(E.b, { color: 'gray700', link: 'https://pscp.tv/u/'.concat(i) }, r))),
                    o
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(Bn, 'contextType', wt.a)
      var Mn = J.a.create(function (e) {
          return {
            backgroundFading: xn(xn({}, J.a.absoluteFillObject), {}, { backgroundColor: e.colors.translucentBlack30 }),
            container: { zIndex: 10 },
            dockedContainerBackground: { backgroundColor: e.colors.cellBackground },
          }
        }),
        Fn = Object(At.c)({ element: 'image' })(Rt(Bn))
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      P.a.f2382014, P.a.g66c8347
      var Hn = (function (e) {
        m()(n, e)
        var t = Nn(n)
        function n() {
          var e
          o()(this, n)
          for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            y()(u()(e), '_enableMultiVideo', e.context.featureSwitches.isTrue('live_event_multi_video_enabled')),
            y()(u()(e), '_enableDocking', e.context.featureSwitches.isTrue('live_event_docking_enabled')),
            y()(u()(e), 'state', { headerWidth: 0 }),
            y()(u()(e), '_getSelectedItemIndex', function (e, t) {
              return Object(Ce.a)(e, function (e) {
                return e.id === t
              })
            }),
            y()(u()(e), '_setSelectedCarouselIndex', function (t) {
              var n = e.props,
                r = n.carousel,
                a = n.setSelectedCarouselItem,
                i = r && r[t]
              i && a(i)
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
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  e && this._renderHeaderMedia(e),
                  this._renderDescription(e),
                  _.a.createElement(Pt.a, null),
                )
              },
            },
            {
              key: '_renderDescription',
              value: function (e) {
                var t,
                  n,
                  r,
                  a = this.props,
                  i = a.isTOO,
                  o = a.liveEventDetails,
                  c = o.author,
                  l = o.category,
                  s = o.description,
                  u = o.timeString,
                  d = o.title,
                  m = null == e || null === (t = e.mediaDetails) || void 0 === t ? void 0 : t.coverTweet,
                  p = null == e || null === (n = e.mediaDetails) || void 0 === n ? void 0 : n.coverMedia,
                  f = null == e || null === (r = e.slate) || void 0 === r ? void 0 : r.imageAttribution
                return _.a.createElement(
                  z.a,
                  { style: Un.contentContainer },
                  d
                    ? _.a.createElement(ke.a, {
                        author: c,
                        coverTweet: m,
                        description: s,
                        imageAttribution: f,
                        isTOO: i,
                        mediaType: null == p ? void 0 : p.type,
                        preTitle: i || !c ? l : '',
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
                  a = t.history,
                  i = t.isPlayerFullscreen,
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
                return _.a.createElement(Fn, {
                  carousel: n,
                  carouselItemInfo: d,
                  disableFullscreenVideo: r,
                  eventId: c,
                  history: a,
                  isDockingEnabled: h,
                  isPlayerFullscreen: i,
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
                  a = e.onChildScribeAction,
                  i = e.remindMeButtonSubscribe,
                  o = e.remindMeButtonUnsubscribe,
                  c = !!this.context.loggedInUserId,
                  l = (r || {}).toggle_visible
                return c && l && r && i && o
                  ? _.a.createElement(Et, {
                      eventId: n,
                      onPress: r.subscribed ? o : i,
                      onRemindButtonScribe: a,
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
                return t && n ? _.a.createElement(It.a, { scoreData: t }) : null
              },
            },
            {
              key: '_renderCarousel',
              value: function (e) {
                var t = this.props,
                  n = t.carousel,
                  r = t.onChildScribeAction
                return n
                  ? _.a.createElement(ft, {
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
                  r = [je.e.LIVE_BROADCAST, je.e.REPLAY_BROADCAST, je.e.VOD]
                return !!n && this._enableDocking && t && r.includes(e)
              },
            },
          ]),
          n
        )
      })(_.a.Component)
      y()(Hn, 'contextType', wt.a)
      var Un = J.a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Vn = n('9bsQ'),
        zn = n('3AAD'),
        Wn = n('7BdX'),
        Gn = n('IG4P'),
        Yn = n('fTQJ'),
        qn = n('k/OQ'),
        Xn = n('mw9i'),
        Kn = n('QIgh'),
        Jn = n('8UdT'),
        Qn = n('iu0J'),
        Zn = n('IcAo'),
        $n = n('zgaL')
      function er(e, t) {
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
      function tr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? er(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : er(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var nr = n('U+bB'),
        rr = n('YeIG'),
        ar = n('fs1G')
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
      function or(e) {
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
      function cr(e) {
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
            var a = v()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var lr = P.a.abdcd689,
        sr = P.a.a1bb552d,
        ur = P.a.b103771f,
        dr = P.a.bb980dbf,
        mr = P.a.e9f1fbcb,
        pr = P.a.dfd7bbaf,
        fr = P.a.bffb7ed4,
        hr = { section: 'shop_tab', component: 'product_grid' },
        vr = function () {
          return _.a.createElement(K.a, { header: mr, message: pr })
        },
        br = (function (e) {
          m()(n, e)
          var t = cr(n)
          function n(e) {
            var r
            o()(this, n),
              (r = t.call(this, e)),
              y()(u()(r), 'state', { selectedCarouselItemId: void 0 }),
              y()(u()(r), '_render', function () {
                var e = r.props.interstitialOrderToDisplay
                return r._refreshControlWrapper(
                  _.a.createElement(Ie, { interstitials: e }, function (e) {
                    return _.a.createElement(
                      _.a.Fragment,
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
                Object(gn.a)(function (e, t) {
                  return Object(Vn.a)(e, t)
                }),
              ),
              y()(
                u()(r),
                '_getLiveCommerceItemsSliceModuleMemoized',
                Object(gn.a)(function (e) {
                  return Pe(e)
                }),
              )
            var a = e.timelineMessageOverride,
              i = e.withTweetActionsDisabled
            return (
              (r._entryConfiguration = (function (e) {
                var t,
                  n = e.withTweetActionsDisabled
                return tr(
                  tr({}, Object(Kn.a)({ withTweetActionsDisabled: n })),
                  {},
                  ((t = {}), y()(t, Jn.b.MomentAnnotation, $n.a), y()(t, Jn.b.EventSummary, Object(Qn.a)({})), t),
                )
              })({ withTweetActionsDisabled: i })),
              (r._timelinePreprocessor = (function (e) {
                return function (t) {
                  return e
                    ? t.map(function (t) {
                        if (t.type === Jn.b.Message) {
                          var n = { content: { content: { inlinePrompt: { headerText: e } } } }
                          return Object(Zn.a)({}, t, n)
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.liveEventDetails,
                    r = e.onFetch
                  return _.a.createElement(ae.a, {
                    accessibilityLabel: lr,
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
                    a = e.isPlayerFullscreen,
                    i = e.isTOO,
                    o = e.isWide,
                    c = e.liveEventDetails,
                    l = e.onChildScribeAction,
                    s = e.onFullscreenChange,
                    u = e.remindMeButtonSubscribe,
                    d = e.remindMeButtonUnsubscribe,
                    m = e.scoreData,
                    p = e.timelineDetails.hashtag,
                    f = this.state.selectedCarouselItemId,
                    h = Object(je.p)(t, f)
                  return _.a.createElement(Hn, {
                    carousel: t,
                    disableFullscreenVideo: n,
                    history: r,
                    isPlayerFullscreen: a,
                    isTOO: i,
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
                    r = n ? sr({ hashtag: n }) : ur
                  return t
                    ? _.a.createElement(
                        _.a.Fragment,
                        null,
                        _.a.createElement(ye, { onClick: this._handleInlineComposeOnClick, promptLabel: r }),
                        _.a.createElement(Pt.a, null),
                      )
                    : null
                },
              },
              {
                key: '_renderTimeline',
                value: function () {
                  var e = this.props.timelineDetails.timelineId,
                    t = this._renderTimelineLinks(),
                    n = e === je.c.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline()
                  return t.length > 1 || (1 === t.length && t[0].isCustom)
                    ? _.a.createElement(
                        _.a.Fragment,
                        null,
                        _.a.createElement(qn.a, {
                          accessibilityLabel: dr,
                          links: t.map(function (e) {
                            return { key: e.key, label: e.label, isActive: e.isActive, to: or({}, e.to) }
                          }),
                        }),
                        _.a.createElement(z.a, { style: yr.timelineContainer }, n),
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
                      i = t.labelType,
                      o = a()(t, ['customizationInfo', 'label', 'labelType']),
                      c = !Object(rr.a)(n),
                      l = e._renderTimelineLabelAnnotation(i),
                      s =
                        c && n
                          ? e._renderCustomLabel({ label: r, customizationInfo: n, labelAnnotation: l })
                          : _.a.createElement(E.b, { weight: 'bold' }, r, l)
                    return or(or({}, o), {}, { key: r, label: s, isCustom: c })
                  })
                },
              },
              {
                key: '_renderTimelineLabelAnnotation',
                value: function (e) {
                  return e === je.d.New
                    ? _.a.createElement(xe.a, { background: 'primary', bold: !0, style: yr.labelAnnotation }, fr)
                    : null
                },
              },
              {
                key: '_renderCustomLabel',
                value: function (e) {
                  var t = e.customizationInfo,
                    n = t.badge_media,
                    r = t.title_color,
                    a = e.label,
                    i = e.labelAnnotation
                  return _.a.createElement(
                    z.a,
                    { style: yr.timelineLabel },
                    n && n.url ? _.a.createElement(nr.a, { source: n.url, style: yr.timelineLabelBadge }) : null,
                    _.a.createElement(E.b, { style: { color: r }, weight: 'bold' }, a, i),
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
                    a = void 0 === r ? dr : r,
                    i = e.onTimelinePoll,
                    o = e.pollingIntervalMs,
                    c = e.timelineDetails,
                    l = c.eventId,
                    s = c.timelineId,
                    u = e.withFloatingComposeButton,
                    d = this._getTimelineModuleMemoized(l, s),
                    m = t || n || !u ? null : this._renderFloatingComposeButton()
                  return _.a.createElement(
                    ne.a,
                    { component: Xn.a, fab: m },
                    _.a.createElement(Yn.a, {
                      anchoring: zn.a,
                      entryConfiguration: this._entryConfiguration,
                      module: d,
                      onTimelinePoll: i,
                      pollingIntervalMsOverride: o,
                      preprocessEntryList: this._timelinePreprocessor,
                      prerollDisplayLocation: Wn.c.OTHER,
                      refreshControl: null,
                      renderEmptyState: vr,
                      title: a,
                    }),
                  )
                },
              },
              {
                key: '_renderCommerceItemSliceTimeline',
                value: function () {
                  var e = this.props.timelineDetails.eventId,
                    t = this._getLiveCommerceItemsSliceModuleMemoized(e)
                  return _.a.createElement(At.b, { namespace: hr }, _.a.createElement(te, { module: t }))
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return _.a.createElement(ie.a, { getLocationState: this._getComposeTimelineDetails, history: e })
                },
              },
              {
                key: '_refreshControlWrapper',
                value: function (e) {
                  var t = this.props,
                    n = t.onFetch,
                    r = t.refreshStatus
                  return _.a.createElement(Gn.a, { isRefreshing: r === re.a.LOADING, onRefresh: n }, e)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      y()(br, 'defaultProps', { onChildScribeAction: ar.a })
      var yr = J.a.create(function (e) {
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
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
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
            a()(this, e),
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
              i = n.minimumVisibilityForAutoplay
            ;(this._autoplayPrioritizationPolicy = r), (this._minimumVisibilityForAutoplay = i)
          }
          return (
            o()(e, [
              {
                key: 'register',
                value: function (e) {
                  var t = this,
                    n = e.canAutoplay,
                    r = e.onAutoPlayRequest,
                    a = e.onFullscreenEntered,
                    i = e.onFullscreenExited,
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
                        onFullscreenEntered: a,
                        onFullscreenExited: i,
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
                      a = n.onFullscreenExited
                    e && r ? r() : !e && a && a()
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
        return j
      })
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
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
        E = n.n(O),
        I = n('nT9l'),
        w = n('3XMw'),
        P = n.n(w),
        C = 'image',
        k = n('TIdA'),
        S = n('a6qo')
      function D(e) {
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
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var x = P.a.f93bb3ee,
        j = (function (e) {
          f()(n, e)
          var t = D(n)
          function n() {
            var e
            l()(this, n)
            for (var r = arguments.length, i = new Array(r), c = 0; c < r; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(m()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  i = e.props,
                  c = i.accessibilityLabel,
                  l = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  s = o()(i, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return E.a.createElement(
                  E.a.Fragment,
                  null,
                  E.a.createElement(
                    k.a,
                    a()({}, s, { accessibilityLabel: c, onVariantSelection: n, previewMode: r, testID: C }),
                  ),
                  l ? E.a.createElement(S.a, { align: 'left', altLabel: c }) : null,
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
                  return E.a.createElement(I.a, {
                    acceptLabel: x,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(E.a.Component)
    },
    zgaL: function (e, t, n) {
      'use strict'
      var r = n('ezF+'),
        a =
          (n('JtPf'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(218).then(n.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = r.e(a)
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
          return F
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
          return Q
        }),
        n.d(t, 'c', function () {
          return Z
        })
      n('+KXO'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('RhWx'),
        o = n.n(i),
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
                a()(e, t, n[t])
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
            a = (function (e, t, n) {
              var r,
                a = k(e, t)
              if (n && a) {
                var i = a.focus_rects,
                  o = void 0 === i ? [] : i,
                  c = a.tweet_id
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
            i = (function (e, t, n) {
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
            ? { id: n, image: r, imageAttribution: c, periscopeVariants: d, cropCandidates: a, label: i, tweetId: l }
            : void 0
        },
        D = function (e, t) {
          var n = (function (e) {
              var t = e.liveEventDetails.attribution_user_id
              return e.users ? e.users[t] : void 0
            })(t),
            r = t.liveEventDetails,
            a = r.category,
            i = r.description,
            o = r.remind_me_subscription,
            c = r.short_title,
            l = r.time_string,
            s = r.title
          return {
            author: n,
            category: a,
            description: i,
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
            a = (void 0 === r ? {} : r).mediaEntity
          return !a || (a.broadcast_id !== t && a.media_tweet_id !== n) ? void 0 : e.promotedContent
        },
        A = function (e, t, n, r, a, i) {
          var o = t && a ? j(t, a) : void 0,
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
            promotedContent: i && R(i, l, a),
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
            case Z.SHOP:
              return e.isTrue('responsive_web_live_commerce_enabled')
            default:
              return !0
          }
        },
        B = function (e, t, n, r) {
          var a,
            i,
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
                  ((d && p === n) || b) && ((u = r), (a = s), (i = o)),
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
            h = a || l
          return {
            composeDetails: v(
              { composeSemanticCoreId: i || s },
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
            var n = t && N(e, t),
              r = F(e)
            return n || e[r]
          }
        },
        F = function (e) {
          var t = Object(m.a)(e, function (e) {
            return e.selected
          })
          return -1 === t ? 0 : t
        },
        N = function (e, t) {
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
                a,
                i = t.entry_id,
                o = S(t, e),
                c = o && o.id,
                l = (t.tweet_media && t.tweet_media.id) || (o && o.tweetId),
                u = l ? s.a.selectHydratedTweet(e, l) : void 0,
                d = A(i, u, e, 0, c, n)
              if (t.broadcast) {
                var m = e.broadcasts ? e.broadcasts[t.broadcast.id] : void 0
                ;(a = (m && m.twitter_user_id && e.users && e.users[m.twitter_user_id]) || void 0),
                  (r = m ? G(a, m) : void 0)
              } else if ((t.slate && l) || t.tweet_media) {
                var p = l && e.tweets ? e.tweets[l] : void 0
                r = (a = p && e.users ? e.users[p.user] : void 0) ? Y(a, !!t.tweet_media, c, p, e) : void 0
              } else t.slate && o && (r = { type: w.SLATE })
              return (
                r || !o || t.tweet_media || (r = { type: w.SLATE }),
                !z(a) && r && o
                  ? {
                      id: i,
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
        Y = function (e, t, n, r, a) {
          var i, o, c
          if (t && r && n) {
            var l = j(r, n)
            if (l) {
              var s = l.type
              o = X(s)
              var u = f.a.getVideoFromCoverMedia(l) || {},
                d = u.source_user_id_str,
                m = u.video_info
              ;(i = m && m.duration_millis), (c = d && q(d, a))
            }
          } else o = w.SLATE
          var p = c || e || {},
            h = p.id_str,
            v = p.name,
            b = p.screen_name,
            y = p.verified
          return o
            ? { accountType: W.TWITTER, verified: y, screenName: b, name: v, type: o, playbackDuration: i, userId: h }
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
        Q = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e + 1,
            r = t.slice(n).findIndex(J)
          return r > -1 ? r + n : r
        },
        Z = Object.freeze({ SHOP: 'shop' })
    },
  },
])
//# sourceMappingURL=WIPED
