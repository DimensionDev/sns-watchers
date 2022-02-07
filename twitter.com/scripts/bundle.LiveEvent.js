;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61, 171],
  {
    '0GAP': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y'), n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('TIdA'),
        o = n('t62R'),
        l = n('A91F'),
        c = n('IJsT'),
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
          a = e.description,
          s = e.image,
          m = e.imageOverlayText,
          p = e.link,
          h = e.onClick,
          v = e.previousPrice,
          f = e.price,
          b = e.title,
          _ = m
            ? r.a.createElement(o.b, { color: 'gray1100', size: 'subtext3', style: d.imageOverlay, weight: 'bold' }, m)
            : null,
          y = r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(i.a, { accessibilityLabel: t, aspectMode: l.a.SQUARE, image: s }),
            r.a.createElement(u.a, { style: d.imageColorOverlay }),
            _,
          ),
          g = v
            ? r.a.createElement(
                o.b,
                { color: 'gray700', numberOfLines: 1, style: d.previousPrice, weight: 'normal' },
                v,
              )
            : null,
          E = f ? r.a.createElement(o.b, { numberOfLines: 1, size: 'subtext2', style: d.price }, f, g) : null,
          I = r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(o.b, { numberOfLines: 1, style: d.title, weight: 'bold' }, b),
            r.a.createElement(o.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: d.description }, a),
            E,
          )
        return r.a.createElement(c.a, {
          accessibilityLabel: t,
          containerStyle: [d.root, n],
          link: p,
          lower: I,
          onClick: h,
          stackLayoutUpperStyle: d.upper,
          upper: y,
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
          return h
        })
      n('ho0z'), n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('MWbm'),
        o = n('GcQN'),
        l = n('PU7B'),
        c = n('/WPq'),
        s = n('78ol'),
        u = n('jV+4'),
        d = n('rHpw'),
        m = function (e) {
          var t = e.author,
            n = e.color,
            a = void 0 === n ? 'normal' : n,
            i = e.size,
            o = void 0 === i ? 'subtext2' : i,
            l = e.style,
            c = e.withHoverCard,
            s = void 0 === c || c,
            d = e.withLink,
            m = void 0 !== d && d,
            p = e.withScreenName,
            h = void 0 !== p && p
          return r.a.createElement(u.a, {
            avatarSize: { subtext2: 'small', body: 'medium', headline1: 'large' }[o],
            color: a,
            isProtected: t.protected,
            isVerified: t.verified,
            name: t.name,
            nameSize: o,
            profileImageUrl: t.profile_image_url_https,
            screenName: t.screen_name,
            screenNameSize: o,
            style: [v.authorUserName, l],
            withHoverCard: s,
            withLink: m,
            withScreenName: h,
          })
        },
        p = function (e) {
          var t = e.style
          return r.a.createElement(
            i.a,
            { style: [v.lightningBadge, t] },
            r.a.createElement(o.a, { style: v.lightningIcon }),
          )
        },
        h = function (e) {
          var t = e.icon
          return r.a.createElement(
            i.a,
            { style: v.placeholderIconContainer },
            'news' === t
              ? r.a.createElement(l.a, { style: v.placeholderIcon })
              : 'lists' === t
              ? r.a.createElement(c.a, { style: v.placeholderIcon })
              : r.a.createElement(s.a, { style: v.placeholderIcon }),
          )
        },
        v = d.a.create(function (e) {
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
      var a = n('yiKp'),
        r = n.n(a),
        i = n('7n04'),
        o = r()(r()({}, i.a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = o
    },
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('ERkP'),
        m = n.n(d),
        p = n('rHpw'),
        h = n('MWbm'),
        v = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
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
                  return m.a.createElement(h.a, { style: f.root })
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        f = p.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = v
    },
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = n('ERkP'),
        m = n.n(d),
        p = n('3XMw'),
        h = n.n(p),
        v = n('rHpw'),
        f = n('+/1j'),
        b = n('MWbm'),
        _ = h.a.e5b0063d,
        y = 0,
        g = (function (e) {
          c()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(y)), (y += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = _({ title: n })
                  return m.a.createElement(
                    b.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    m.a.createElement(
                      f.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: v.a.visuallyHidden,
                      },
                      n,
                    ),
                    m.a.createElement(b.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component)
      t.a = g
    },
    '7sPD': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LiveEventScreen', function () {
          return De
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        c = n.n(l),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        m = n.n(d),
        p = n('2VqO'),
        h = n.n(p),
        v = n('KEM+'),
        f = n.n(v),
        b = (n('2G9S'), n('hBpG'), n('7x/C'), n('1t7P'), n('jQ/y'), n('ERkP')),
        _ = n.n(b),
        y = n('k49u'),
        g = n('zI2C'),
        E = n('6/RC'),
        I = n('es0u'),
        C = (n('KqXw'), n('WNMA'), n('MvUL'), n('5BYb'), n('ho0z'), n('zh9S')),
        k = n('hqKg'),
        w = n('kGix'),
        S = n('RrqW'),
        x = function (e, t, n) {
          return { isFullPageInterstitial: e, type: t, screenName: n }
        },
        P = function (e) {
          var t = e.isBlockedBy,
            n = void 0 !== t && t,
            a = e.isBlocking,
            r = void 0 !== a && a,
            i = e.isSensitive,
            o = void 0 !== i && i,
            l = e.screenName,
            c = []
          return (
            n
              ? c.push(x(!0, S.a.BLOCKED_BY, l))
              : (r && c.push(x(!0, S.a.BLOCKED, l)), o && c.push(x(!1, S.a.SENSITIVE))),
            c.length ? c : void 0
          )
        },
        D = n('lPpt'),
        T = n('tn7R'),
        A = n('wrlS'),
        O = n('G6rE'),
        L = n('0KEI'),
        R = n('zlxh'),
        M = n('oEGd'),
        B = function (e, t) {
          return t.match.params.eventId
        },
        F = function (e) {
          return r()({}, e ? { loggedInUserAvatarURI: e.profile_image_url_https, loggedInUserName: e.name } : null)
        },
        N = Object(k.createSelector)(
          B,
          function (e, t) {
            return D.a.select(e, B(0, t))
          },
          function (e, t) {
            var n = ((D.a.selectErrors(e) || {})[B(0, t)] || {}).errors,
              a = (void 0 === n ? [] : n).find(function (e) {
                return e.code === y.a.BlockedUserError
              })
            return a && a.message && a.message.replace('@', '')
          },
          function (e, t) {
            return D.a.selectFetchStatus(e, B(0, t))
          },
          function (e, t) {
            var n
            return [].concat(null === (n = t.location.query) || void 0 === n ? void 0 : n.timeline)[0]
          },
          function (e, t) {
            var n
            return null === (n = t.location.state) || void 0 === n ? void 0 : n.promotedCardState
          },
          O.e.selectLoggedInUser,
          function (e, t) {
            return D.a.selectIsTOO(e, B(0, t))
          },
          A.d,
          function (e, t, n, a, i, o, l, c, s) {
            var u = (function (e, t, n, a) {
              return r()(
                {
                  liveEventDetails: { eventId: e },
                  fetchStatus: t ? w.a.LOADED : n,
                  refreshStatus: n,
                  timelineDetails: {
                    composeDetails: { defaultText: '' },
                    eventId: e,
                    timelineId: R.b,
                    timelineIndex: 0,
                    timelineLinks: [],
                  },
                  interstitialOrderToDisplay: t ? P({ isBlockedBy: !0, screenName: t }) : void 0,
                  isTOO: !1,
                  isUserSuspended: !1,
                },
                F(a),
              )
            })(e, n, a, l)
            if (!t) return u
            var d = Object(R.o)(t),
              m = Object(R.i)(t, d, o),
              p = Object(R.k)(e, t),
              h = Object(R.n)(t),
              v = Object(R.r)(e, t, i, s),
              f = (function (e) {
                var t = e || {},
                  n = t.liveEventDetails,
                  a = void 0 === n ? {} : n,
                  r = t.users,
                  i = a.attribution_user_id
                return (
                  !!i &&
                  !Object(T.a)(r || {}).some(function (e) {
                    return e.id_str === i
                  })
                )
              })(t),
              b = p.author || {},
              _ = b.blocked_by,
              y = b.blocking,
              g = b.screen_name,
              E = t.liveEventDetails.sensitive,
              I = P({ isBlockedBy: _, isBlocking: y, isSensitive: E, screenName: g })
            return r()(
              r()(r()({}, u), F(l)),
              {},
              {
                liveEventDetails: p,
                fetchStatus: t ? w.a.LOADED : a,
                refreshStatus: a,
                interstitialOrderToDisplay: I,
                isTOO: c,
                isUserSuspended: f,
                serverPollingIntervalSeconds: h,
                scoreData: d,
                carousel: m.length > 0 ? m : void 0,
                timelineDetails: v,
              },
            )
          },
        ),
        j = {
          createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('LIVE_EVENT_SCREEN'),
          fetchLiveEvent: D.a.fetchOne,
          googleAnalyticsPageView: C.a,
          remindMeButtonSubscribe: D.a.subscribe,
          remindMeButtonUnsubscribe: D.a.unSubscribe,
          scribeAction: C.c,
          scribePageImpression: C.d,
        },
        V = Object(M.g)(N, j),
        U = (n('0zG9'), n('E4zi')),
        z = n('muX9'),
        H = function (e) {
          var t,
            n = e.liveEventDetails,
            a = e.slate,
            r = n.category,
            i = n.description,
            o = n.eventId,
            l = n.timeString,
            c = n.title,
            s = null == a || null === (t = a.image) || void 0 === t ? void 0 : t.url,
            u = n.author ? Object(U.a)(n.author) : null,
            d = JSON.stringify(
              {
                '@context': 'http://schema.org',
                '@type': 'NewsArticle',
                name: c,
                description: i,
                genre: r,
                identifier: o,
                datePublished: l,
                author: u,
                image: s,
              },
              null,
              2,
            )
          return _.a.createElement(z.a, { script: [{ type: 'application/ld+json', innerHTML: d }] })
        },
        W = (n('yH/f'), n('z84I'), n('/Ikv')),
        q = n('BcsE'),
        G = function (e) {
          var t = e.content,
            n = e.name
          return t || Object(q.a)(t) ? _.a.createElement('meta', { content: t, key: n, name: n }) : null
        },
        Y = Object.freeze({ broadcast: 'broadcast', video: 'video', image: 'image' }),
        X = function (e) {
          var t = e.carousel,
            n = e.liveEventDetails,
            a = e.timelineDetails,
            r = n.description,
            i = n.eventId,
            o = n.title,
            l = a.timelineId,
            c = t[Object(R.q)(t)],
            s = (c || {}).slate,
            u = (function (e) {
              var t,
                n = e.carouselItemInfo.type
              return (
                n === R.e.LIVE_BROADCAST || n === R.e.REPLAY_BROADCAST
                  ? (t = Y.broadcast)
                  : n === R.e.VOD || n === R.e.GIF
                  ? (t = Y.video)
                  : n === R.e.SLATE && (t = Y.image),
                t
              )
            })(c)
          return o && r && s
            ? _.a.createElement(
                z.a,
                null,
                (function (e, t, n, a, r) {
                  return [
                    { name: 'twitter:card', content: W.a.CardNames.LIVE_EVENT },
                    { name: 'twitter:text:event_id', content: n },
                    { name: 'twitter:text:event_title', content: e },
                    { name: 'twitter:text:event_subtitle', content: t },
                    { name: 'twitter:text:event_timeline_id', content: r },
                    { name: 'twitter:image:event_thumbnail:src', content: a.image.url },
                    { name: 'twitter:image:event_thumbnail:height', content: a.image.height },
                    { name: 'twitter:image:event_thumbnail:width', content: a.image.width },
                  ]
                })(o, r, i, s, l).map(G),
                (function (e, t, n, a) {
                  var r,
                    i,
                    o,
                    l,
                    c,
                    s,
                    u,
                    d,
                    m,
                    p,
                    h,
                    v,
                    f,
                    b,
                    _,
                    y,
                    g,
                    E,
                    I,
                    C,
                    k,
                    w,
                    S,
                    x,
                    P,
                    D,
                    T,
                    A,
                    O,
                    L,
                    R,
                    M,
                    B,
                    F
                  return [
                    { name: 'twitter:text:event_category', content: e.category },
                    {
                      name: 'twitter:text:broadcast_id',
                      content: null === (r = n.mediaDetails) || void 0 === r ? void 0 : r.broadcastId,
                    },
                    {
                      name: 'twitter:text:broadcast_media_key',
                      content: null === (i = n.mediaDetails) || void 0 === i ? void 0 : i.broadcastMediaKey,
                    },
                    {
                      name: 'twitter:text:broadcast_media_id',
                      content:
                        (null === (o = n.mediaDetails) || void 0 === o ? void 0 : o.broadcastId) &&
                        (null === (l = n.mediaDetails) || void 0 === l ? void 0 : l.mediaId),
                    },
                    {
                      name: 'twitter:text:broadcast_title',
                      content: null === (c = n.mediaDetails) || void 0 === c ? void 0 : c.broadcastTitle,
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
                      content: null === (h = n.mediaDetails) || void 0 === h ? void 0 : h.broadcastSource,
                    },
                    {
                      name: 'twitter:text:broadcast_orientation',
                      content: null === (v = n.mediaDetails) || void 0 === v ? void 0 : v.broadcastOrientation,
                    },
                    {
                      name: 'twitter:user:author:id',
                      content: null === (f = e.author) || void 0 === f ? void 0 : f.id_str,
                    },
                    {
                      name: 'twitter:text:event_badge',
                      content: null === (b = n.slate) || void 0 === b ? void 0 : b.label,
                    },
                    {
                      name: 'twitter:string:media_tweet_id',
                      content:
                        null === (_ = n.mediaDetails) || void 0 === _ || null === (y = _.coverTweet) || void 0 === y
                          ? void 0
                          : y.id_str,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:src',
                      content: null === (g = n.slate) || void 0 === g ? void 0 : g.image.url,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:height',
                      content: null === (E = n.slate) || void 0 === E ? void 0 : E.image.height,
                    },
                    {
                      name: 'twitter:image:square_thumbnail:width',
                      content: null === (I = n.slate) || void 0 === I ? void 0 : I.image.width,
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:w',
                      content:
                        (null === (C = n.slate) || void 0 === C || null === (k = C.cropCandidates) || void 0 === k
                          ? void 0
                          : k.length) && (null === (w = n.slate) || void 0 === w ? void 0 : w.cropCandidates[0].w),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:h',
                      content:
                        (null === (S = n.slate) || void 0 === S || null === (x = S.cropCandidates) || void 0 === x
                          ? void 0
                          : x.length) && (null === (P = n.slate) || void 0 === P ? void 0 : P.cropCandidates[0].h),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:x',
                      content:
                        (null === (D = n.slate) || void 0 === D || null === (T = D.cropCandidates) || void 0 === T
                          ? void 0
                          : T.length) && (null === (A = n.slate) || void 0 === A ? void 0 : A.cropCandidates[0].x),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:y',
                      content:
                        (null === (O = n.slate) || void 0 === O || null === (L = O.cropCandidates) || void 0 === L
                          ? void 0
                          : L.length) && (null === (R = n.slate) || void 0 === R ? void 0 : R.cropCandidates[0].y),
                    },
                    {
                      name: 'twitter:text:remind_me_notification_id',
                      content: null === (M = e.remindMeSubscription) || void 0 === M ? void 0 : M.notification_id,
                    },
                    {
                      name: 'twitter:image:broadcast_thumbnail:src',
                      content: null === (B = n.mediaDetails) || void 0 === B ? void 0 : B.broadcastThumbnail,
                    },
                    {
                      name: 'twitter:string:broadcast_replay_edited_start_time',
                      content: null === (F = n.mediaDetails) || void 0 === F ? void 0 : F.broadcastReplayStartTime,
                    },
                    { name: 'twitter:string:media_type', content: a },
                  ]
                })(n, 0, c, u).map(G),
              )
            : null
        },
        K = n('m3Bd'),
        Q = n.n(K),
        J = (n('tVqn'), n('3XMw')),
        Z = n.n(J),
        $ = n('I6Uj'),
        ee = ['id'],
        te = Z.a.i8d6a27e,
        ne = Z.a.hbae0a4e,
        ae = { page: 'live_event_timeline', section: 'live_event_header' },
        re = function (e) {
          var t = e.author,
            n = e.hashtag,
            a = e.title,
            r = (a && a.trim()) || ''
          return ie(t) ? oe(t.screen_name, n, r) : n
        },
        ie = function (e) {
          return !!e
        },
        oe = function (e, t, n) {
          return t ? te({ author: e, timelineHashtag: t, title: n }) : ne({ author: e, title: n })
        },
        le = function (e) {
          var t = e.id,
            n = Q()(e, ee),
            a = Object(R.j)(t),
            r = re(n)
          return _.a.createElement($.a, { scribeNamespace: ae, shareText: r, url: a })
        },
        ce = n('LVU8'),
        se =
          (n('+KXO'),
          function (e) {
            return { items: [ue(e)] }
          }),
        ue = function (e) {
          var t = e.carouselLength,
            n = e.carouselPosition,
            a = e.includeTimelineSource,
            i = void 0 !== a && a,
            o = e.liveEventDetails,
            l = e.mediaDetails,
            c = e.selectedTimeline,
            s = e.tilePosition,
            u = e.timelineTabPosition,
            d = o.eventId,
            m = o.remindMeSubscription,
            p = (l || {}).broadcastId,
            h = c || {},
            v = h.timelineId,
            f = h.timelineSourceId,
            b = h.timelineSourceType,
            _ = m || {},
            y = _.notification_id,
            g = _.subscribed,
            E = _.toggle_visible,
            I = r()({}, null),
            C = r()({}, null),
            k = r()({}, null)
          return (
            d && (C.host_event_id = d),
            v && (C.timeline_id = v),
            i && ((C.timeline_source_id = f), (C.timeline_source_type = b)),
            void 0 !== u && (C.timeline_tab_position = u),
            t && ((C.carousel_count = t), (C.carousel_position = n)),
            void 0 !== s && (C.tile_position = s),
            m && ((C.remind_me_notification_id = y), (C.remind_me_subscribed = g), (C.remind_me_toggle_visible = E)),
            p && (k.host_broadcast_id = p),
            Object.keys(C).length > 0 && (I.live_video_event_details = C),
            Object.keys(k).length > 0 && (I.live_broadcast_details = k),
            I
          )
        },
        de = n('9Bb1'),
        me = n('5S/X'),
        pe = n('XvPy'),
        he = n('Vgm9'),
        ve = n('VTxf'),
        fe = n('rJoH'),
        be = n('yoO3'),
        _e = n('EskI'),
        ye = n('VS6U'),
        ge = n('HBr9'),
        Ee = n('MWbm'),
        Ie = n('G8HL'),
        Ce = n('t62R'),
        ke = n('rHpw'),
        we = n('v6aA'),
        Se = n('7JQg'),
        xe = n('zrc3'),
        Pe = n('oQhu'),
        De = (function (e) {
          m()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(u()(e), '_carouselIndexReceived', !1),
              f()(
                u()(e),
                '_defaultPollingInterval',
                e.context.featureSwitches.getNumberValue(
                  'live_event_timeline_default_refresh_rate_interval_seconds',
                  30,
                ),
              ),
              f()(
                u()(e),
                '_minPollingInterval',
                e.context.featureSwitches.getNumberValue(
                  'live_event_timeline_minimum_refresh_rate_interval_seconds',
                  10,
                ),
              ),
              f()(u()(e), '_newSegmentedControlDesign', !1),
              f()(
                u()(e),
                '_shouldHonourServerRefresh',
                e.context.featureSwitches.isTrue('live_event_timeline_server_controlled_refresh_rate_enabled'),
              ),
              f()(u()(e), 'state', { isPlayerFullscreen: !1, selectedCarouselItemId: void 0 }),
              f()(u()(e), '_renderPrimaryContent', function (t) {
                var n = t.isWide,
                  a = e.props,
                  r = a.carousel,
                  i = a.fetchStatus,
                  o = a.history,
                  l = a.interstitialOrderToDisplay,
                  c = a.isTOO,
                  s = a.liveEventDetails,
                  u = a.refreshStatus,
                  d = a.remindMeButtonSubscribe,
                  m = a.remindMeButtonUnsubscribe,
                  p = a.scoreData,
                  h = a.timelineDetails,
                  v = e.state.isPlayerFullscreen,
                  f = Z.a.c08e7935,
                  b = e._getPollingIntervalMs()
                return _.a.createElement(
                  ge.a,
                  { collectionName: f },
                  _.a.createElement(pe.a, {
                    carousel: r,
                    fetchStatus: i,
                    history: o,
                    interstitialOrderToDisplay: l,
                    isPlayerFullscreen: v,
                    isTOO: c,
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
                    timelineDetails: h,
                    withFloatingComposeButton: !0,
                  }),
                )
              }),
              f()(u()(e), '_getSelectedItem', function () {
                var t = e.props.carousel,
                  n = e.state.selectedCarouselItemId
                return Object(R.p)(t, n)
              }),
              f()(u()(e), '_getSelectedItemIndex', function () {
                var t = e.props.carousel,
                  n = e._getSelectedItem()
                return t && n
                  ? Object(xe.a)(t, function (e) {
                      return e.id === n.id
                    })
                  : void 0
              }),
              f()(
                u()(e),
                '_getScribeProviderMetadata',
                Object(Pe.a)(function (e, t, n, a, i) {
                  var o = n.timelineId,
                    l = n.timelineIndex,
                    c = n.timelineLinks,
                    s = (i || {}).mediaDetails,
                    u =
                      c &&
                      c.find(function (e) {
                        return e.timelineId === o
                      })
                  return r()(
                    { event_id: t.eventId },
                    se({
                      carouselLength: e && e.length,
                      carouselPosition: a,
                      liveEventDetails: t,
                      mediaDetails: s,
                      timelineTabPosition: l,
                      selectedTimeline: u,
                    }),
                  )
                }),
              ),
              f()(u()(e), '_handleInitialFetch', function () {
                e._fetchLiveEvent()
              }),
              f()(u()(e), '_fetchLiveEvent', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchLiveEvent)(t.liveEventDetails.eventId).catch(
                  n(f()({}, y.a.GenericNotFound, { customAction: ce.c })),
                )
              }),
              f()(u()(e), '_handleTimelinePoll', function () {
                e._fetchLiveEvent()
              }),
              f()(u()(e), '_handleFullscreenChange', function (t) {
                var n = t.isPlayerFullscreen
                e.setState({ isPlayerFullscreen: n })
              }),
              f()(u()(e), '_handleOverflowButtonClickScribe', function () {
                return e._scribeActionWithEventItems({ section: 'live_event_header', element: 'more', action: 'click' })
              }),
              f()(u()(e), '_handleSelectedCarouselItemChanged', function (t) {
                e.setState({ selectedCarouselItemId: t.id })
              }),
              f()(u()(e), '_handleChildScribeAction', function (t, n) {
                return e._scribeActionWithEventItems(t, n)
              }),
              f()(u()(e), '_scribeTimelineImpression', function () {
                var t = e.props,
                  n = t.carousel,
                  a = t.liveEventDetails,
                  i = t.scribeAction,
                  o = t.scribeNamespace,
                  l = t.timelineDetails,
                  c = l.timelineId,
                  s = l.timelineLinks,
                  u = e._getSelectedItemIndex(),
                  d = (e._getSelectedItem() || {}).mediaDetails,
                  m = s.find(function (e) {
                    return e && e.timelineId === c
                  })
                m &&
                  i(
                    r()(r()({}, o), {}, { action: 'impression' }),
                    se({
                      liveEventDetails: a,
                      includeTimelineSource: !0,
                      mediaDetails: d,
                      selectedTimeline: m,
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
                  this._handleInitialFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.liveEventDetails.eventId,
                    r = n.timelineDetails.timelineId,
                    i = e.liveEventDetails.eventId,
                    o = e.timelineDetails.timelineId
                  i !== a
                    ? this._handleInitialFetch()
                    : o !== r && (this._scribeTimelineTabChange(), this._scribeTimelineImpression())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.carousel,
                    n = e.history,
                    a = e.isUserSuspended,
                    r = e.liveEventDetails,
                    i = e.timelineDetails,
                    o = r.shortTitle,
                    l = r.title,
                    c = i.composeDetails,
                    s = this.state.isPlayerFullscreen
                  if (a) return _.a.createElement(ve.a, null)
                  var u = l || R.f,
                    d = this._renderScoreCard(),
                    m = o ? _.a.createElement(Ce.b, { withHashflags: !0 }, o) : R.g,
                    p = _.a.createElement(I.a, { withWhoToFollow: !1 }, d),
                    h = this.context.loggedInUserId && !s ? this._renderRightButtons() : void 0,
                    v = this._getScribeProviderMetadata(t, r, i, this._getSelectedItemIndex(), this._getSelectedItem())
                  return _.a.createElement(
                    Se.b,
                    { data: v },
                    _.a.createElement(
                      be.a,
                      null,
                      E.canUseDOM ? null : this._renderPageMeta(u),
                      _.a.createElement(ye.a, {
                        backLocation: '/',
                        composeOptions: c,
                        documentTitle: u,
                        headerless: s,
                        history: n,
                        primaryContent: this._renderPrimaryContent,
                        rightControl: h,
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
                    a,
                    r,
                    i,
                    o,
                    l = this.props,
                    c = l.carousel,
                    s = l.liveEventDetails,
                    u = l.timelineDetails,
                    d = s.description,
                    m = s.eventId,
                    p = this._getSelectedItem(),
                    h = m && 'twitter://events/timeline/'.concat(m),
                    v = m && 'https://twitter.com/i/events/'.concat(m || '')
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    d ? _.a.createElement(de.a, { description: d }) : null,
                    _.a.createElement(fe.a, {
                      canonical: v,
                      description: d,
                      image:
                        null == p || null === (t = p.slate) || void 0 === t || null === (n = t.image) || void 0 === n
                          ? void 0
                          : n.url,
                      imageH:
                        null == p || null === (a = p.slate) || void 0 === a || null === (r = a.image) || void 0 === r
                          ? void 0
                          : r.height,
                      imageW:
                        null == p || null === (i = p.slate) || void 0 === i || null === (o = i.image) || void 0 === o
                          ? void 0
                          : o.width,
                      title: e,
                      type: 'article',
                    }),
                    me.b && null != p && p.slate
                      ? _.a.createElement(H, { liveEventDetails: s, slate: null == p ? void 0 : p.slate })
                      : null,
                    _.a.createElement(g.a, { deepLink: h }),
                    c ? _.a.createElement(X, { carousel: c, liveEventDetails: s, timelineDetails: u }) : null,
                  )
                },
              },
              {
                key: '_renderRightButtons',
                value: function () {
                  var e = this.props,
                    t = e.isTOO,
                    n = e.liveEventDetails,
                    a = n.author,
                    i = n.eventId,
                    o = n.title,
                    l = e.scribeNamespace,
                    c = e.timelineDetails.hashtag
                  return _.a.createElement(
                    Ee.a,
                    { style: Te.rightButtonContainer },
                    _.a.createElement(le, { author: a, hashtag: c, id: i, title: o }),
                    t
                      ? null
                      : _.a.createElement(he.a, {
                          author: a,
                          eventId: i,
                          onPress: this._handleOverflowButtonClickScribe,
                          redirectOnDelete: a ? '/'.concat(a.screen_name, '/moments') : void 0,
                          scribeNamespace: r()(r()({}, l), {}, { section: 'live_event_header' }),
                          style: Te.overflowButton,
                          title: o,
                        }),
                  )
                },
              },
              {
                key: '_renderScoreCard',
                value: function () {
                  var e = this.props.scoreData
                  return e ? _.a.createElement(_e.a, { scoreData: e, withContainer: !0, withHeader: !0 }) : null
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
                    a = n.carousel,
                    i = n.liveEventDetails,
                    o = n.scribeAction,
                    l = n.scribeNamespace,
                    c = n.timelineDetails,
                    s = c.timelineId,
                    u = c.timelineLinks,
                    d = this._getSelectedItemIndex(),
                    m = (this._getSelectedItem() || {}).mediaDetails,
                    p = u.find(function (e) {
                      return e.timelineId === s
                    })
                  o(
                    r()(r()({}, l), e),
                    se(
                      r()(
                        {
                          liveEventDetails: i,
                          mediaDetails: m,
                          selectedTimeline: p,
                          carouselLength: a && a.length,
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
                    a = e.scribeNamespace,
                    i = e.timelineDetails,
                    o = i.timelineId,
                    l = i.timelineIndex,
                    c = i.timelineLinks,
                    s = (this._getSelectedItem() || {}).mediaDetails,
                    u =
                      c &&
                      c.find(function (e) {
                        return e.timelineId === o
                      })
                  n(
                    r()(r()({}, a), {}, { component: o, element: 'tab', action: 'selected' }),
                    se({
                      liveEventDetails: t,
                      timelineTabPosition: l,
                      mediaDetails: s,
                      selectedTimeline: u,
                      includeTimelineSource: !0,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(De, 'contextType', we.a)
      var Te = ke.a.create(function (e) {
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
      t.default = Object(Se.c)({ page: 'live_event_timeline' })(V(Object(Ie.a)(De)))
    },
    '8/3a': function (e, t, n) {
      'use strict'
      n('1t7P'), n('jQ/y')
      var a = n('0mK8'),
        r = n('ERkP'),
        i = n.n(r),
        o = (n('jQ3i'), n('x4t0'), n('tVqn'), n('z84I'), n('3XMw')),
        l = n.n(o),
        c = n('caTy'),
        s = n('MWbm'),
        u = n('rHpw'),
        d = n('t62R'),
        m = n('yrzJ'),
        p = n('XrEN'),
        h = n('Q0VY'),
        v = n('FiRh'),
        f = u.a.create(function (e) {
          return { description: { marginTop: e.spaces.space12 } }
        }),
        b = function (e, t, n) {
          return n && !p.a.VIDEO_TYPES.includes(t)
            ? (function (e) {
                var t,
                  n = e.url ? (null === (t = Object(c.a)(e.url)) || void 0 === t ? void 0 : t.pathname) : void 0
                return i.a.createElement(d.b, { color: 'gray700', link: n }, e.text)
              })(n)
            : e && p.a.VIDEO_TYPES.includes(t)
            ? (function (e, t) {
                return i.a.createElement(
                  d.b,
                  { color: 'gray700', link: e.permalink },
                  _(t, { screenName: i.a.createElement(m.a, { screenName: e.user.screen_name }) }),
                )
              })(e, t)
            : null
        },
        _ = function (e, t) {
          switch (e) {
            case 'animated_gif':
              return i.a.createElement(l.a.I18NFormatMessage, { $i18n: 'a5d9d070' }, t.screenName)
            case 'video':
            case 'vine':
              return i.a.createElement(l.a.I18NFormatMessage, { $i18n: 'i9606e32' }, t.screenName)
            default:
              return i.a.createElement(l.a.I18NFormatMessage, { $i18n: 'i1a64d47' }, t.screenName)
          }
        },
        y = function (e) {
          var t = e.coverTweet,
            n = e.description,
            a = e.imageAttribution,
            r = e.mediaType,
            o = e.pivotText,
            l = n ? n.trim() : void 0,
            c = l ? h.a.descriptionTextParts(l) : []
          return i.a.createElement(
            s.a,
            { style: f.description },
            c.length
              ? i.a.createElement(
                  d.b,
                  null,
                  c.map(function (e, t) {
                    return i.a.createElement(v.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            b(t, r, a),
            o ? i.a.createElement(d.b, { color: 'gray700' }, o) : null,
          )
        },
        g = n('pjBI'),
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
          o = e.imageAttribution,
          l = e.isTOO,
          c = e.mediaType,
          u = e.pivotText,
          m = e.preTitle,
          p = e.remindMeButton,
          h = e.time,
          v = e.title,
          f = e.withHashflags,
          b = function () {
            return t
              ? i.a.createElement(
                  s.a,
                  null,
                  i.a.createElement(a.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  h ? _(!0) : null,
                )
              : null
          },
          _ = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return i.a.createElement(
              d.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [E.timeString, e && E.timeStringMargin] },
              h,
            )
          },
          I = function () {
            return m
              ? i.a.createElement(
                  g.a,
                  null,
                  i.a.createElement(d.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, m),
                  h ? _() : null,
                )
              : null
          }
        return i.a.createElement(
          i.a.Fragment,
          null,
          l && m ? I() : b() || I(),
          i.a.createElement(d.b, { dir: 'auto', size: 'title4', style: E.title, weight: 'heavy', withHashflags: f }, v),
          r || n || o
            ? i.a.createElement(y, { coverTweet: n, description: r, imageAttribution: o, mediaType: c, pivotText: u })
            : null,
          p ? i.a.createElement(s.a, { style: E.remindMeButton }, p) : null,
        )
      }
    },
    '8FZA': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'BroadcastScreen', function () {
          return Re
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        v = (n('tVqn'), n('2G9S'), n('ho0z'), n('Blm6'), n('uFXj'), n('ERkP')),
        f = n.n(v),
        b = n('k49u'),
        _ = n('zI2C'),
        y = 'NOT_STARTED',
        g = 'RUNNING',
        E = 'TIMED_OUT',
        I = 'ENDED',
        C = n('RhWx'),
        k = n.n(C),
        w = (n('z84I'), n('/Ikv')),
        S = n('muX9'),
        x = function (e) {
          return []
            .concat(
              ((n = e),
              (a = n.id),
              (r = n.timecode),
              (i = n.title),
              (o = n.url),
              [
                { name: 'twitter:card', content: w.a.CardNames.BROADCAST },
                { name: 'twitter:url:broadcast_url', content: o },
                { name: 'twitter:text:broadcast_id', content: a },
                { name: 'twitter:text:broadcast_title', content: i },
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
          var t, n, a, r, i, o
        },
        P = function (e) {
          return void 0 !== e.content ? f.a.createElement('meta', e) : null
        },
        D = function (e) {
          return f.a.createElement.apply(
            f.a,
            [S.a, null].concat(
              k()(
                (function (e) {
                  return x(e).map(P)
                })(e),
              ),
            ),
          )
        },
        T = n('6/RC'),
        A = n('es0u'),
        O = (n('KqXw'), n('WNMA'), n('zh9S')),
        L = n('yiKp'),
        R = n.n(L),
        M = n('ddV6'),
        B = n.n(M),
        F = n('3zvM'),
        N = n('lMB6'),
        j = Object(F.f)({
          namespace: 'broadcasts',
          fetchOneContext: 'FETCH_BROADCAST',
          fetchOneEndpoint: function (e) {
            return e.Broadcasts.fetchBroadcast
          },
          fetchOneParams: function (e, t) {
            var n = B()(e, 1)[0]
            return R()({ ids: [n] }, t)
          },
        }),
        V = N.a.register(j),
        U = n('kGix'),
        z = n('Hw0q'),
        H = n('G6rE'),
        W = n('rxPX'),
        q = n('0KEI'),
        G = function (e, t) {
          return t.match.params.broadcastId
        },
        Y = function (e, t) {
          return V.select(e, G(0, t))
        },
        X = function (e, t) {
          var n = Y(e, t)
          return n && n.twitter_user_id ? H.e.select(e, n.twitter_user_id) : void 0
        },
        K = function (e, t) {
          return t.location.state ? t.location.state.promotedContent : void 0
        },
        Q = function (e, t) {
          return Y(e, t) ? U.a.LOADED : V.selectFetchStatus(e, G(0, t))
        },
        J = Object(z.b)('t'),
        Z = Object(W.a)()
          .propsFromState(function () {
            return {
              broadcastId: G,
              broadcast: Y,
              twitterBroadcaster: X,
              fetchStatus: Q,
              promotedContent: K,
              timecode: J,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(q.createLocalApiErrorHandlerWithContextFactory)('BROADCAST_SCREEN'),
              fetchBroadcast: V.fetchOne,
              fetchUserIfNeeded: H.e.fetchOneIfNeeded,
              scribeAction: O.c,
              scribePageImpression: O.d,
              googleAnalyticsPageView: O.a,
            }
          }),
        $ = n('SrtL'),
        ee = n('GOQE'),
        te = n('v//M'),
        ne = n('LVU8'),
        ae = n('zlxh'),
        re = n('rJoH'),
        ie = n('VS6U'),
        oe = n('B5iK'),
        le = n('pynj'),
        ce = n('Modb'),
        se = n('lklz'),
        ue = n('MWbm'),
        de = n('G8HL'),
        me = n('t62R'),
        pe = n('Wms4'),
        he = n('jV+4'),
        ve = n('TIdA'),
        fe = n('A91F'),
        be = n('rHpw'),
        _e = n('7JQg'),
        ye = n('3XMw'),
        ge = n.n(ye),
        Ee = { url: 'https://pbs.twimg.com/lex/placeholder_live_nomargin.png', width: 1920, height: 1080 },
        Ie = { objectFitVideo: 'contain' },
        Ce = function (e) {
          return e && e.trim().length > 0
        },
        ke = ge.a.ac4c73d8,
        we = ge.a.e39b368e,
        Se = ge.a.f2382014,
        xe = ge.a.e3aac82a,
        Pe = ge.a.hd0bc1eb,
        De = ge.a.bea1f26a,
        Te = ge.a.jceadc3e,
        Ae = ge.a.d980e29e,
        Oe = ge.a.fc209bb7,
        Le = function (e, t) {
          return 'https://twitter.com/i/broadcasts/'.concat(e).concat(t ? '?t='.concat(t) : '')
        },
        Re = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_getTitle', function () {
                var t = e.props.broadcast
                if (t) {
                  var n = t.state,
                    a = t.status
                  if (a) return a
                  var r = e._getName(t)
                  if (r)
                    switch (n) {
                      case g:
                        return Pe({ name: r })
                      case I:
                      case E:
                        return De({ name: r })
                      case y:
                      default:
                        return Te
                    }
                }
                return Te
              }),
              h()(c()(e), '_getName', function (e) {
                var t = e.twitter_username,
                  n = e.user_display_name
                return Ce(n) ? n : t && Ce(t) ? '@'.concat(t) : void 0
              }),
              h()(c()(e), '_isLive', function () {
                return e.props.broadcast && 'RUNNING' === e.props.broadcast.state
              }),
              h()(c()(e), '_renderPrimaryContent', function () {
                var t = e.props.fetchStatus
                return f.a.createElement(te.a, {
                  accessibilityLabel: xe,
                  fetchStatus: t,
                  onRequestRetry: e._handleFetchBroadcast,
                  render: e._render,
                })
              }),
              h()(c()(e), '_render', function () {
                var t = e._getTitle()
                return f.a.createElement(
                  f.a.Fragment,
                  null,
                  e._renderMedia(),
                  f.a.createElement(
                    ue.a,
                    { style: Me.header },
                    e._renderUserName(),
                    f.a.createElement(
                      ue.a,
                      { style: Me.title },
                      f.a.createElement(me.b, { size: 'headline1', style: Me.titleText, weight: 'bold' }, t),
                      e._isLive() ? f.a.createElement(pe.a, { type: 'live' }, Se) : null,
                    ),
                    e._renderRelatedEvent(),
                  ),
                )
              }),
              h()(c()(e), '_renderUserName', function () {
                var t = e.props,
                  n = t.broadcast,
                  a = t.twitterBroadcaster
                return a
                  ? f.a.createElement(
                      ue.a,
                      { style: Me.userNameWrapper },
                      f.a.createElement(
                        le.a,
                        { screenName: a.screen_name },
                        f.a.createElement(he.a, {
                          isProtected: a.protected,
                          isVerified: a.verified,
                          name: a.name,
                          profileImageUrl: a.profile_image_url_https,
                          screenName: a.screen_name,
                          translatorType: 'none' === a.translator_type ? void 0 : a.translator_type,
                          withLink: !0,
                          withScreenName: !0,
                        }),
                      ),
                    )
                  : n && n.user_display_name
                  ? f.a.createElement(
                      ue.a,
                      { style: Me.userNameWrapper },
                      f.a.createElement(he.a, { name: n.user_display_name, profileImageUrl: n.profile_image_url }),
                    )
                  : void 0
              }),
              h()(c()(e), '_scribePageImpression', function () {
                var t = e.props,
                  n = t.broadcastId,
                  a = t.googleAnalyticsPageView,
                  r = t.scribeNamespace,
                  i = t.scribePageImpression
                n && i(r, { items: [{ live_broadcast_details: { target_broadcast_id: n } }] }), a(r)
              }),
              h()(c()(e), '_fetchTwitterBroadcaster', function () {
                var t = e.props,
                  n = t.broadcast,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchUserIfNeeded,
                  i = n && n.twitter_user_id
                if (i) return r(i).catch(a(ee.a))
              }),
              h()(c()(e), '_startTimer', function () {
                e._stopTimer(), (e._timer = new oe.b(3e4).interval(e._fetchUpdates)), e._timer.start()
              }),
              h()(c()(e), '_stopTimer', function () {
                e._timer && e._timer.stop(), (e._timer = void 0)
              }),
              h()(c()(e), '_handleFetchBroadcast', function () {
                var t = e.props,
                  n = t.broadcast,
                  a = t.broadcastId,
                  r = t.createLocalApiErrorHandler,
                  i = t.fetchBroadcast
                a &&
                  i(a, { broadcastVersionMap: h()({}, a, null == n ? void 0 : n.version) }).catch(
                    r(h()({}, b.a.GenericNotFound, { customAction: ne.c })),
                  )
              }),
              h()(c()(e), '_fetchUpdates', function () {
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
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    this._renderMetaTags(t),
                    f.a.createElement(ie.a, {
                      backLocation: '/',
                      documentTitle: t,
                      history: e,
                      primaryContent: this._renderPrimaryContent,
                      sidebarContent: f.a.createElement(A.a, null),
                      title: we,
                    }),
                    f.a.createElement($.a, { title: t, withMeta: !1 }),
                  )
                },
              },
              {
                key: '_renderMetaTags',
                value: function (e) {
                  var t = this.props,
                    n = t.broadcast,
                    a = t.broadcastId,
                    r = t.timecode,
                    i = t.twitterBroadcaster,
                    o = (null == i ? void 0 : i.name) || (null == n ? void 0 : n.user_display_name),
                    l = 'twitter://broadcasts/'.concat(a),
                    c = Le(a),
                    s = Le(a, r)
                  return T.canUseDOM
                    ? null
                    : f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(re.a, { canonical: c, description: e, title: o, type: 'article' }),
                        f.a.createElement(_.a, { deepLink: l }),
                        f.a.createElement(D, { broadcast: n, id: a, timecode: r, title: e, url: s }),
                      )
                },
              },
              {
                key: '_renderMedia',
                value: function () {
                  var e = this.props.broadcast
                  return e && e.state === y ? this._renderPreLiveSlate() : this._renderPlayer()
                },
              },
              {
                key: '_renderStartDateLabel',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.scheduled_start_ms ? new Date(parseInt(e.scheduled_start_ms, 10)) : void 0,
                    n = t ? Ae({ date: Oe(t) }) : void 0
                  return n
                    ? f.a.createElement(ue.a, { style: Me.labelOverlay }, f.a.createElement(pe.a, null, n))
                    : null
                },
              },
              {
                key: '_renderPreLiveSlate',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : Ee
                  return f.a.createElement(
                    ue.a,
                    null,
                    f.a.createElement(
                      S.a,
                      null,
                      f.a.createElement('meta', { content: t.url, property: 'og:image' }),
                      f.a.createElement('meta', { content: t.width, property: 'og:image:width' }),
                      f.a.createElement('meta', { content: t.height, property: 'og:image:height' }),
                    ),
                    f.a.createElement(ve.a, {
                      accessibilityLabel: ke,
                      aspectMode: fe.a.exact(be.a.theme.aspectRatios.landscape),
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
                    a = e.promotedContent,
                    r = e.timecode,
                    i = t && { url: t.image_url, width: t.width, height: t.height },
                    o = t && t.media_id
                  if (!(n && i && o)) return null
                  var l = t && Object(ae.m)(t.image_url_small, t.image_url_medium, i)
                  return f.a.createElement(
                    ue.a,
                    { style: Me.card },
                    f.a.createElement(
                      S.a,
                      null,
                      f.a.createElement('meta', { content: i.url, property: 'og:image' }),
                      f.a.createElement('meta', { content: i.width, property: 'og:image:width' }),
                      f.a.createElement('meta', { content: i.height, property: 'og:image:height' }),
                    ),
                    f.a.createElement(ce.a, {
                      accessibilityLabel: ke,
                      aspectRatio: 1.7777777777777777,
                      customVariants: l,
                      displayOptions: Ie,
                      includeBroadcastEventAssociation: !0,
                      poster: i,
                      promotedContent: a,
                      source: { variants: [], videoId: se.b.forBroadcast(n), contentId: o },
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
                    a = t.title
                  if (!n || !a) return null
                  var r = '/i/events/'.concat(n),
                    i = f.a.createElement(me.b, { color: 'primary', link: r }, a)
                  return f.a.createElement(
                    me.b,
                    { style: Me.relatedEvent },
                    f.a.createElement(ge.a.I18NFormatMessage, { $i18n: 'c43d1678' }, i),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        Me = be.a.create(function (e) {
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
      t.default = Object(_e.c)({ page: 'broadcast' })(Z(Object(de.a)(Re)))
    },
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        v = (n('2G9S'), n('KOtZ'), n('7x/C'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        f = n.n(v),
        b = n('3XMw'),
        _ = n.n(b),
        y = n('oQhu'),
        g = n('mjJ+'),
        E = n('eb3s'),
        I = _.a.cfd2f35d,
        C = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { activeConfirmation: null }),
              h()(c()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              h()(c()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              h()(c()(e), '_handleCancelConfirm', function () {
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
                    : f.a.createElement(g.a, {
                        cancelButtonLabel: I,
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
                    a = t.headline,
                    r = t.label,
                    i = t.text,
                    o = t.withCancelButton
                  return f.a.createElement(E.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: a,
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
                    a = e.onClose
                  return k(t, n, a, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        k = Object(y.a)(function (e, t, n, a) {
          return e.reduce(function (e, r, i) {
            var o = r.Icon,
              l = r.behavioralEventContext,
              c = r.confirmation,
              s = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              m = r.link,
              p = r.onClick,
              h = r.subText,
              v = r.testID,
              f = r.text
            r.withCancelButton
            if (!u) {
              var b = p
                ? function () {
                    c
                      ? c.render
                        ? a({ callback: p, render: c.render })
                        : a({
                            callback: p,
                            text: c.text,
                            headline: c.headline,
                            label: c.label,
                            confirmButtonType: c.confirmButtonType,
                            withCancelButton: c.withCancelButton,
                          })
                      : (p(), n())
                  }
                : n
              e.push({
                behavioralEventContext: l,
                disabled: s,
                Icon: o,
                isEmphasized: d,
                testID: v,
                subText: h,
                text: f,
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
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('5Yy7'),
        c = n.n(l),
        s = n('2VqO'),
        u = n.n(s),
        d = (n('7xRU'), n('KqXw'), n('Ysgh'), n('z84I'), n('ho0z'), n('uFXj'), n('ERkP')),
        m = n.n(d),
        p = n('3XMw'),
        h = n.n(p),
        v =
          (n('yH/f'),
          Object.freeze({ BROADCAST_MEDIA_TYPE: 'broadcast', VIDEO_MEDIA_TYPE: 'video' }),
          Object.freeze({ COMPLETED: 'COMPLETED', DELAYED: 'DELAYED', LIVE: 'LIVE', UPCOMING: 'UPCOMING' })),
        f = 'scorecard',
        b = n('6vad'),
        _ = n('t62R'),
        y = n('rHpw'),
        g = n('U+bB'),
        E = n('MWbm'),
        I = h.a.eaaca5db,
        C = function (e) {
          var t = e.id,
            n = void 0 === t ? '' : t,
            a = e.isLive,
            r = e.status,
            i = '44' === n.split(':')[0],
            o = r === v.UPCOMING || r === v.DELAYED
          return (i && a) || o
        },
        k = (function (e) {
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
                        a = t.participant_scores,
                        r = t.progress_strings,
                        i = t.status,
                        o = t.winner_id,
                        l = i === v.LIVE
                      return {
                        isLive: l,
                        progressStrings: C({ id: n, status: i, isLive: l }) ? r.join(' ') : r[0],
                        participantScores: a,
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
                  return m.a.createElement(
                    m.a.Fragment,
                    null,
                    t ? m.a.createElement(b.b, { text: I }) : null,
                    this._renderScoresAndMatchStatus(e),
                  )
                },
              },
              {
                key: '_renderScoresAndMatchStatus',
                value: function (e) {
                  var t = this,
                    n = this.props.withContainer,
                    a = e.isLive,
                    r = e.participantScores,
                    i = e.progressStrings,
                    o = e.winnerId,
                    l = r.map(function (e) {
                      return t._renderTeamRow(e, o, a)
                    })
                  return m.a.createElement(
                    E.a,
                    { style: [w.teamDisplay, n && w.container] },
                    m.a.createElement(E.a, { style: w.teamRows }, l),
                    m.a.createElement(_.b, { style: w.matchStatusText }, i),
                  )
                },
              },
              {
                key: '_renderTeamRow',
                value: function (e, t, n) {
                  var a = e.participant,
                    r = a.id,
                    i = a.media,
                    o = a.name,
                    l = e.score,
                    c = r === t,
                    s = n || c ? 'bold' : 'normal'
                  return m.a.createElement(
                    E.a,
                    { key: r, style: w.teamRow, testID: f },
                    m.a.createElement(g.a, { source: i.url, style: w.teamLogo }),
                    m.a.createElement(_.b, { align: 'left', numberOfLines: 1, style: w.teamName }, o),
                    m.a.createElement(_.b, { style: w.teamScore, weight: s }, l),
                    m.a.createElement(E.a, { style: [w.winnerContainer, c && w.winner] }),
                  )
                },
              },
            ]),
            n
          )
        })(m.a.Component),
        w = y.a.create(function (e) {
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
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        v = (n('2G9S'), n('ERkP')),
        f = n.n(v),
        b = n('rxPX'),
        _ = n('0KEI'),
        y = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        g = function (e, t) {
          return t.module.selectItems(e)
        },
        E = Object(b.a)()
          .propsFromState(function (e) {
            return { fetchStatus: y, items: g }
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
        I = n('v//M'),
        C = n('sIe2'),
        k = n('3XMw'),
        w = n.n(k),
        S = n('TEoO'),
        x = w.a.i9028824,
        P = 'sliceTimeline',
        D = function (e) {
          return e
        },
        T = { viewType: 'timeline' },
        A = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  i = t.numColumns,
                  o = t.onScrollEnd,
                  l = t.renderer,
                  c = t.withoutHeadroom
                return !a || i < 1
                  ? null
                  : 1 === i
                  ? f.a.createElement(S.a, {
                      cacheKey: P,
                      footer: n,
                      identityFunction: D,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: l,
                      withoutHeadroom: c,
                    })
                  : f.a.createElement(C.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: D,
                      numColumns: i,
                      renderItem: l,
                    })
              }),
              h()(c()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(c()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  i = t.fetchIfNeeded
                ;(n ? r : i)().catch(a())
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
                    a = e.retryMessage
                  return n
                    ? f.a.createElement(I.a, {
                        accessibilityLabel: x,
                        behavioralEventContext: T,
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
        })(f.a.Component)
      h()(A, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var O = E(A)
      t.a = O
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a)
      function i(e) {
        return null
      }
      var o = n('97Jx'),
        l = n.n(o),
        c = n('yiKp'),
        s = n.n(c),
        u = (n('jwue'), n('7x/C'), n('+oxZ'), n('3XMw')),
        d = n.n(u),
        m = n('/yvb'),
        p = n('fn9Y'),
        h = d.a.c0530da5,
        v = d.a.ifea3114
      var f = function (e) {
          return r.a.createElement(m.a, {
            accessibilityLabel: h,
            hoverLabel: { label: v },
            icon: r.a.createElement(p.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        b = 'share-button',
        _ = 'share-by-tweet',
        y = n('m3Bd'),
        g = n.n(y),
        E = n('1YZw'),
        I = n('CaKu'),
        C = n('y+lG'),
        k = n('SrIh'),
        w = n('RqPI'),
        S = n('Irs7'),
        x = n('uDfI'),
        P = n('zCf4'),
        D = n('yUQf'),
        T = n('jwTb'),
        A = n('SOvA'),
        O = n('I/9y'),
        L = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: T.a,
            text: d.a.fcc684a9,
            testID: _,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: A.a,
            text: d.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return I.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: O.a,
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
        },
        R = ['isAvailable', 'scribeAction']
      function M(e) {
        var t = Object(S.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(x.c)(),
              a = Object(P.f)(),
              i = Object(D.a)(w.v)
            return r.a.useMemo(
              function () {
                return function (r) {
                  var o = L[r.type],
                    l = o.isAvailable,
                    c = o.scribeAction,
                    u = g()(o, R)
                  if (!l()) return null
                  var d = s()({}, u)
                  function m() {
                    var o = r.shareText || e.shareText,
                      l = e.url,
                      u = s()(s()({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      d = { text: o, url: l },
                      m = { analytics: t, dispatch: n, history: a, mergedScribeNamespace: u, sessionToken: i }
                    !(function (e, t, n) {
                      var a = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return a(), void n.history.push(s()(s()({}, F(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            I.a.setString(Object(C.a)(t.url, n.sessionToken)),
                            a(),
                            void n.dispatch(Object(E.b)({ text: B.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            a(),
                            void n.history.push(
                              s()(
                                s()({ pathname: '/compose/tweet' }, F(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(C.a)(t.url, n.sessionToken) })
                            .then(a)
                            .catch(function () {
                              n.analytics.scribe(s()(s()({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(k.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, d, m)
                  }
                  return r.label && (d.text = r.label), s()(s()({}, d), {}, { onClick: m })
                }
              },
              [t, n, a, i, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var B = { copyLinkSuccessMessage: d.a.f88553c8, shareTextPrefixFormatter: d.a.gb5851d7 }
      function F(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? B.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var N = n('T0aG'),
        j = n.n(N),
        V = n('mN6z')
      var U = n('mjJ+'),
        z = n('rHpw'),
        H = { element: 'share' }
      function W(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            if ('object' !== j()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var a = t.current.previous
            return a && (e === a || Object(V.a)(e, a)) ? a : n()
          })(s()(s()({}, H), e.scribeNamespace)),
          n = M(s()(s()({}, e), {}, { scribeNamespace: t })),
          a = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || q
        return r.a.createElement(o, {
          onPress: function () {
            var e = s()(s()({}, t), {}, { action: 'share_menu_click' })
            a.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.a.Children.forEach(e.children, function (e) {
                    if (r.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              r.a.createElement(U.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function q(e) {
        return r.a.createElement(f, l()({}, e, { style: G.button, testID: b }))
      }
      var G = z.a.create(function (e) {
          return { button: { marginRight: e.spaces.space4 } }
        }),
        Y = ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel']
      function X(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          a = e.externalShareLabel,
          o = e.tweetShareLabel,
          l = g()(e, Y)
        return r.a.createElement(
          W,
          l,
          r.a.createElement(i, { label: o, type: 'tweet' }),
          r.a.createElement(i, { label: n, type: 'dm' }),
          r.a.createElement(i, { label: t, type: 'copy' }),
          r.a.createElement(i, { label: a, type: 'via' }),
        )
      }
      ;(X.Action = i), (X.Custom = W)
      t.a = X
    },
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('cm6r'),
        o = n('rHpw'),
        l = n('MWbm'),
        c = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            a = e.isCompact,
            o = e.link,
            c = e.lower,
            u = e.onClick,
            d = e.stackLayoutLowerStyle,
            m = e.stackLayoutUpperStyle,
            p = e.upper,
            h = e.withInteractiveStyling,
            v = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(l.a, { style: [s.defaultUpperContainerStyle, m, a && { height: 'auto' }] }, p),
              c ? r.a.createElement(l.a, { style: [s.defaultLowerContainerStyle, d] }, c) : null,
            )
          return r.a.createElement(
            i.a,
            { accessibilityLabel: t, interactive: h, link: o, onClick: u, style: [s.root, n] },
            v,
          )
        }
      c.defaultProps = { withInteractiveStyling: !1 }
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
      t.a = c
    },
    Mhzv: function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('zb92'),
        o = Object(i.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(5), n.e(15), n.e(21), n.e(190)]).then(n.bind(null, 'wHP+'))
          },
          renderPlaceholder: function () {
            return r.a.createElement('div', null)
          },
        })
      t.a = o
    },
    RrqW: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = (n('yH/f'), n('ERkP')),
        l = n.n(o),
        c = n('t62R'),
        s = n('FIs5'),
        u = n('rHpw'),
        d = n('3XMw'),
        m = n.n(d),
        p = 'sensitive',
        h = 'blocked',
        v = 'blocked_by',
        f = Object.freeze({ SENSITIVE: p, BLOCKED: h, BLOCKED_BY: v }),
        b = { title: m.a.j32d345d, button: m.a.c3d89aca, body: void 0 },
        _ = {
          title: m.a.a01d5a7c,
          body: function (e) {
            var t = e.screenName
            return l.a.createElement(
              m.a.I18NFormatMessage,
              { $i18n: 'ha49b9b7', screenName: t },
              l.a.createElement(c.b, { link: 'https://support.twitter.com/articles/117063' }, m.a.i859a9d3),
            )
          },
          button: m.a.f277e949,
        },
        y = { title: m.a.b2311b7f, body: m.a.cab51f93, button: void 0 },
        g = Object.freeze(((a = {}), i()(a, p, b), i()(a, h, _), i()(a, v, y), a)),
        E = function (e, t) {
          return 'function' == typeof e ? (t && e({ screenName: t })) || void 0 : e
        },
        I = u.a.create(function (e) {
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
          a = e.type,
          r = g[a],
          i = r.body,
          o = r.button,
          c = r.title,
          u = E(c, n),
          d = E(i, n)
        return l.a.createElement(s.a, { buttonText: o, header: u, message: d, onButtonPress: t, style: I.style })
      }
    },
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('5UID'),
        c = n('3GUV'),
        s = n('iBK2'),
        u = ['accessibilityTitle'],
        d = o.a.createElement(c.a, null),
        m = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, u),
            a = o.a.createElement(s.b, n)
          return t ? o.a.createElement(l.a, { title: t }, a) : a
        }
      ;(m.defaultProps = { footer: d }), (t.a = m)
    },
    Vgm9: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return $
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        c = n.n(l),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('2VqO'),
        m = n.n(d),
        p = n('KEM+'),
        h = n.n(p),
        v = (n('2G9S'), n('ERkP')),
        f = n.n(v),
        b = n('RhWx'),
        _ = n.n(b),
        y = n('yiKp'),
        g = n.n(y),
        E = n('1YZw'),
        I = n('Fg8X'),
        C = n('n4jD'),
        k = n('RqPI'),
        w = n('iUle'),
        S = function (e) {
          return function (t, n, a) {
            var r = a.api,
              i = n(),
              o = Object(k.q)(i) || '',
              l = Object(C.c)(i),
              c = Object(w.a)(o),
              s = { moment_id: e, teamUserId: l }
            return r.Moments.delete(s).then(function () {
              t([I.a.deleteOne(e), c.removeEntry('moment-'.concat(e))])
            })
          }
        },
        x = n('rxPX'),
        P = Object(x.a)()
          .propsFromState(function () {
            return { activeTeamId: C.c }
          })
          .propsFromActions(function () {
            return { addToast: E.b, deleteMoment: S }
          })
          .withAnalytics({ component: 'action_sheet' }),
        D = n('ACNv'),
        T = n('3XMw'),
        A = n.n(T),
        O = n('Rp9C'),
        L = n('TnY3'),
        R = n('v6aA'),
        M = n('hiGS'),
        B = n('I/9y'),
        F = n('TW8A'),
        N = n('xrkw'),
        j = n('zIWA'),
        V = A.a.e8dff578,
        U = A.a.fcc64f01,
        z = A.a.ea193d66,
        H = A.a.e5227fe0,
        W = A.a.d0df844c,
        q = A.a.fd61ab81,
        G = A.a.aaae5e7f,
        Y = A.a.d96cf7cd,
        X = A.a.e7718461,
        K = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_getActionItems', function () {
                var t = e.props,
                  n = t.author,
                  a = t.id,
                  r = t.withEditAction,
                  i = t.withLinkAction,
                  o = []
                return (
                  e._isOwner()
                    ? (o.push({
                        confirmation: { label: Y, headline: q, text: G, confirmButtonType: 'destructiveFilled' },
                        isEmphasized: !0,
                        onClick: e._handleDeleteConfirm,
                        text: z,
                        Icon: M.a,
                      }),
                      i && o.push({ link: '/i/events/'.concat(a), onClick: e._handleClickLink, text: H, Icon: B.a }),
                      r && o.push({ link: '/i/moment_maker/edit/'.concat(a), text: V, Icon: F.a }),
                      o.push({
                        link: '/i/moments/'.concat(a, '/analytics'),
                        onClick: e._handleNavigateAnalytics,
                        text: W,
                        Icon: N.a,
                      }))
                    : n && o.push({ onClick: e._handleReport, text: U, Icon: j.a }),
                  o
                )
              }),
              h()(c()(e), '_handleReport', function () {
                var t = e.props,
                  n = t.analytics.contextualScribeNamespace,
                  a = t.history,
                  r = t.id,
                  i = t.scribeNamespace,
                  o = g()(g()({}, n), i)
                a.push({
                  pathname: '/i/report/moment/'.concat(r),
                  state: { clientReferer: window.location.pathname, isMedia: !0, scribeNamespace: o },
                })
              }),
              h()(c()(e), '_handleClickLink', function () {
                e._scribeAction('click', 'link_button')
              }),
              h()(c()(e), '_handleNavigateAnalytics', function () {
                e._scribeAction('moment_analytics')
              }),
              h()(c()(e), '_handleDeleteConfirm', function () {
                var t = e.props,
                  n = t.addToast,
                  a = t.deleteMoment,
                  r = t.history,
                  i = t.id,
                  o = t.redirectOnDelete
                a(i).then(function () {
                  e._scribeAction('delete'),
                    n({ text: X }),
                    o && r.goBack({ backLocation: o, shouldReplaceOnFallback: !0 })
                })
              }),
              h()(c()(e), '_scribeAction', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.id,
                  o = a.scribeMomentItem,
                  l = a.scribeNamespace,
                  c = g()(
                    g()({}, r.contextualScribeData),
                    {},
                    {
                      items: [].concat(
                        _()(r.contextualScribeData && r.contextualScribeData.items ? r.contextualScribeData.items : []),
                        [o || O.a.getMomentItem(i)],
                      ),
                    },
                  )
                r.scribe(g()({ action: t, data: c, element: n }, l))
              }),
              h()(c()(e), '_isOwner', function () {
                var t = e.props,
                  n = t.activeTeamId,
                  a = t.author,
                  r = e.context.loggedInUserId,
                  i = r && (null == a ? void 0 : a.id_str) === r,
                  o = n && (null == a ? void 0 : a.id_str) === n
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
                    ? f.a.createElement(D.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(K, 'contextType', R.a)
      var Q = P(K),
        J = Object(L.a)(Q),
        Z = n('2G3J'),
        $ = (function (e) {
          u()(n, e)
          var t = m()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_renderMenu', function (t) {
                var n = e.props,
                  a = n.author,
                  r = n.eventId,
                  i = n.redirectOnDelete,
                  o = n.scribeMomentItem,
                  l = n.scribeNamespace,
                  c = n.title,
                  s = n.withEditAction,
                  u = n.withLinkAction
                return f.a.createElement(J, {
                  author: a,
                  id: r,
                  onClose: t,
                  redirectOnDelete: i,
                  scribeMomentItem: o,
                  scribeNamespace: l,
                  title: c,
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
                    a = e.size,
                    r = e.style,
                    i = e.type
                  return f.a.createElement(Z.a, {
                    iconStyle: t,
                    onPress: n,
                    renderMenu: this._renderMenu,
                    size: a,
                    style: r,
                    type: i,
                  })
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()($, 'defaultProps', { withEditAction: !0 })
    },
    XmKV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return o
        })
      n('6U7i'), n('LW0h'), n('7x/C')
      var a = function (e, t) {
          if (0 !== e.length) {
            for (var n = e[0], a = t(n), r = 1; r < e.length; r++) {
              var i = e[r],
                o = t(i)
              o < a && ((n = i), (a = o))
            }
            return n
          }
        },
        r = n('HT/6'),
        i = function (e) {
          var t,
            n,
            r =
              null == e || null === (t = e[0]) || void 0 === t || null === (n = t.placement) || void 0 === n
                ? void 0
                : n.scrollY()
          return a(
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
          return t.length ? t[0] : i(e)
        }
    },
    XvPy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Kn
      })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        v = n('2VqO'),
        f = n.n(v),
        b = n('KEM+'),
        _ = n.n(b),
        y = (n('z84I'), n('ERkP')),
        g = n.n(y),
        E = (n('Blm6'), n('1t7P'), n('jQ/y'), n('ikiw')),
        I = n('t62R'),
        C = n('0GAP'),
        k = n('3XMw'),
        w = n.n(k),
        S = w.a.cfe836d1,
        x = w.a.efb132c2
      w.a.f27deeea
      var P = function (e) {
          return E.a[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6)
        },
        D = function (e, t) {
          var n = P(e)
          return 'Preorder' === t
            ? (function (e) {
                return g.a.createElement(
                  w.a.I18NFormatMessage,
                  { $i18n: 'd6c6deae' },
                  g.a.createElement(I.b, { weight: 'bold' }, w.a.j2b1a8b8({ formattedPrice: e })),
                )
              })(n)
            : g.a.createElement(I.b, { weight: 'bold' }, n)
        },
        T = function (e, t) {
          var n = parseInt(t.micro_value, 10),
            a = parseInt(e.micro_value, 10),
            r = Math.round(((n - a) / n) * 100)
          return S({ percent: r })
        },
        A = function (e, t, n) {
          return e && e.length > 0 ? e[e.length - 1] : t ? t.shortened_google_product_category_name : void 0
        },
        O = function (e) {
          var t = e.commerceProduct,
            n = e.onClick,
            a = e.style,
            r = t.product_core_data,
            i =
              null != r
                ? (function (e) {
                    var t = e.product_details,
                      n = e.product_identifiers,
                      a = t.availability,
                      r = t.cover_media,
                      i = (t.description, t.external_url),
                      o = t.price,
                      l = t.product_sale,
                      c = t.title,
                      s = null == n ? void 0 : n.custom_product_type,
                      u = null == n ? void 0 : n.google_product_category,
                      d = null == r ? void 0 : r.media_info
                    if (null == d) return null
                    var m = (function (e, t) {
                        return t
                          ? { currentPrice: t.price, previousPrice: e }
                          : { currentPrice: e, previousPrice: void 0 }
                      })(o, l),
                      p = m.currentPrice,
                      h = m.previousPrice
                    return {
                      formattedDescription: A(s, u),
                      formattedPercentOff: h ? T(p, h) : void 0,
                      formattedPreviousPrice: h ? P(h) : void 0,
                      formattedPrice: D(p, a),
                      formattedTitle: c,
                      image: 'ApiImage' === d.__typename ? d.original_img_url : '',
                      url: i.url,
                    }
                  })(r)
                : null
          if (i) {
            var o = i.formattedDescription,
              l = i.formattedPercentOff,
              c = i.formattedPreviousPrice,
              s = i.formattedPrice,
              u = i.formattedTitle,
              d = i.image,
              m = i.url
            return g.a.createElement(C.a, {
              accessibilityLabel: x({ title: u, description: o, price: s }),
              containerStyle: a,
              description: o,
              image: d,
              imageOverlayText: l,
              link: m,
              onClick: function () {
                n && n()
              },
              previousPrice: c,
              price: s,
              title: u,
            })
          }
          return null
        },
        L = n('3zvM'),
        R = n('lMB6'),
        M = Object(L.f)({ namespace: 'commerceItems' }),
        B = o()({}, M),
        F = R.a.register(B),
        N = n('rxPX'),
        j = function (e, t) {
          var n = t.commerceItemId
          return n ? F.select(e, n) : void 0
        },
        V = Object(N.a)().propsFromState(function () {
          return { commerceItem: j }
        }),
        U = ['__typename'],
        z = V(function (e) {
          var t = e.commerceItem,
            n = e.onClick
          switch (null == t ? void 0 : t.__typename) {
            case 'CommerceProduct':
              t.__typename
              var a = r()(t, U)
              return g.a.createElement(O, { commerceProduct: a, onClick: n })
            default:
              return null
          }
        }),
        H =
          (n('LW0h'),
          n('7x/C'),
          function (e, t) {
            return t.module
              .selectItems(e)
              .map(function (t) {
                return t ? F.select(e, t) : void 0
              })
              .filter(Boolean)
          }),
        W = Object(N.a)().propsFromState(function (e) {
          return { commerceItems: H }
        }),
        q = (n('jwue'), n('+oxZ'), n('MWbm')),
        G = { threshold: 0.01 },
        Y = function (e) {
          var t = e.children,
            n = e.onImpression,
            a = e.style,
            r = g.a.useRef(null),
            i = function (e) {
              e.forEach(function (e) {
                e.isIntersecting && n()
              })
            }
          return (
            g.a.useEffect(function () {
              if ('IntersectionObserver' in window) {
                var e = new IntersectionObserver(i, G),
                  t = r.current
                null != t && e.observe(t)
                return function () {
                  var t = r.current
                  null != t && e.unobserve(t), e.disconnect()
                }
              }
            }, []),
            g.a.createElement(q.a, { ref: r, style: a }, t)
          )
        },
        X = n('Rp9C'),
        K = n('FS1z'),
        Q = n('Irs7'),
        J = n('FIs5'),
        Z = n('rHpw'),
        $ = w.a.e9f1fbcb,
        ee = w.a.c9b302f8,
        te = function () {
          return g.a.createElement(J.a, { header: $, message: ee })
        },
        ne = Z.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 },
            cell: { marginHorizontal: '1%', marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: '48%' },
          }
        }),
        ae = Object(Q.a)(
          W(function (e) {
            var t = e.analytics,
              n = e.commerceItems,
              a = e.module,
              r = t.contextualScribeData,
              i = function (e, a) {
                var i = X.a.addCommerceDetailsToItems(r, n, e)
                t.scribe({ element: 'product', action: a, data: i })
              },
              o = function (e) {
                return function () {
                  i(e, 'impression')
                }
              },
              l = function (e) {
                return function () {
                  i(e, 'click')
                }
              }
            return g.a.createElement(
              q.a,
              { style: ne.root },
              g.a.createElement(K.a, {
                module: a,
                noItemsRenderer: te,
                numColumns: 2,
                renderer: function (e) {
                  var t = e.item
                  return g.a.createElement(
                    Y,
                    { onImpression: o(t), style: ne.cell },
                    g.a.createElement(z, { commerceItemId: t, onClick: l(t) }),
                  )
                },
              }),
            )
          }),
        ),
        re = n('dwig'),
        ie = n('kGix'),
        oe = n('v//M'),
        le = n('0+qk'),
        ce = (n('2G9S'), n('hBvt'), n('uFXj'), n('ho0z'), n('G6rE')),
        se = Object(N.a)()
          .propsFromState(function () {
            return { loggedInUser: ce.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          })
          .withAnalytics(),
        ue = n('cm6r'),
        de = n('XP29'),
        me = n('cjZk'),
        pe = n('3rWK'),
        he = n('ll3R'),
        ve = w.a.b8f0483e,
        fe = w.a.e349147b,
        be = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), '_handleClick', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.onClick
                r && r(t), a.scribe({ component: 'inline_compose_prompt', action: 'click' })
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
                    a = e.promptLabel,
                    r = e.userAvatarURI,
                    i = e.userName,
                    o = e.withBorder,
                    l = e.withComposeIcons
                  return g.a.createElement(
                    ue.a,
                    {
                      accessibilityLabel: ve,
                      interactiveStyles: null,
                      link: t ? void 0 : n,
                      onClick: t ? void 0 : this._handleClick,
                      style: [_e.root, o && _e.borderBottom],
                    },
                    g.a.createElement(de.a, { accessibilityLabel: i, size: 'xxLarge', uri: r }),
                    g.a.createElement(
                      q.a,
                      { style: [_e.column, _e.bodyColumn] },
                      g.a.createElement(
                        q.a,
                        { style: [_e.fakeInput, t && _e.disabled] },
                        g.a.createElement(I.b, { color: 'gray700', numberOfLines: 1, size: 'subtext1' }, a),
                      ),
                      l
                        ? g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(me.a, { style: _e.icon }),
                            g.a.createElement(pe.a, { style: _e.icon }),
                            g.a.createElement(he.a, { style: _e.icon }),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      _()(be, 'defaultProps', { link: '/compose/tweet', promptLabel: fe, withBorder: !1, withComposeIcons: !0 })
      var _e = Z.a.create(function (e) {
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
        ye = se(be),
        ge = n('s3M2'),
        Ee = n.n(ge),
        Ie = (n('M+/F'), n('RrqW')),
        Ce = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), 'state', { interstitialsToDisplay: void 0 }),
              _()(m()(e), '_handleInterstitialPress', function () {
                var t = e.state.interstitialsToDisplay,
                  n = void 0 === t ? [] : t,
                  a = Ee()(n).slice(1)
                e.setState({ interstitialsToDisplay: a })
              }),
              e
            )
          }
          return (
            u()(
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
                      a = e.screenName,
                      r = e.type,
                      i = g.a.createElement(Ie.b, { onPress: this._handleInterstitialPress, screenName: a, type: r })
                    return n ? i : t(i)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.interstitials,
                      a = t.interstitialsToDisplay
                    return n && !a ? { interstitialsToDisplay: n } : null
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component),
        ke = n('wAC9'),
        we = function (e) {
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
        Se = (n('jQ3i'), n('x4t0'), n('zrc3')),
        xe = n('8/3a'),
        Pe =
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
                _()(this, '_scribedIndices', new Map()),
                _()(this, '_indiceCallbacks', new Map()),
                _()(this, '_handleScribeImpression', function (e) {
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
                      a = e.intersectionRatio
                    if (!this._scribedIndices.has(n)) {
                      var r = this._indiceCallbacks.has(n)
                      a >= 0.5 && !r
                        ? this._indiceCallbacks.set(
                            n,
                            setTimeout(function () {
                              return t._handleScribeImpression(n)
                            }, 500),
                          )
                        : a < 0.5 && r && (clearTimeout(this._indiceCallbacks.get(n)), this._indiceCallbacks.delete(n))
                    }
                  },
                },
              ]),
              e
            )
          })()),
        De = n('boUI'),
        Te = n('Wms4'),
        Ae = n('zlxh'),
        Oe = w.a.f2382014,
        Le = w.a.g66c8347,
        Re = function (e) {
          var t = e.playbackDuration
          switch (e.type) {
            case Ae.e.LIVE_BROADCAST:
              return g.a.createElement(Te.a, { type: 'live' }, Oe)
            case Ae.e.REPLAY_BROADCAST:
              return g.a.createElement(Te.a, { bold: !0 }, Le)
            case Ae.e.VOD:
              return g.a.createElement(
                Te.a,
                null,
                (function (e) {
                  if (e) {
                    var t = Math.round(e / 1e3),
                      n = t % 60,
                      a = n < 10 ? '0'.concat(n) : n,
                      r = (t - n) / 60
                    if (r > 60) {
                      var i = Math.floor(r / 60),
                        o = r % 60,
                        l = o % 60 < 10 ? '0'.concat(o) : o
                      return ''.concat(i, ':').concat(l, ':').concat(a)
                    }
                    return ''.concat(r, ':').concat(a)
                  }
                })(t) || '',
              )
            case Ae.e.GIF:
              return g.a.createElement(Te.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        Me = n('hqKg'),
        Be = n('H9MA'),
        Fe = n('oEGd'),
        Ne = Object(Me.createSelector)(Be.c, function (e) {
          return { dataSaverMode: e }
        }),
        je = Object(Fe.c)(Ne),
        Ve = n('prG5'),
        Ue = n('A91F'),
        ze = w.a.i3f7ff0f,
        He = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), 'state', { hasImageError: !1, currentSlate: void 0 }),
              _()(m()(e), '_handleError', function () {
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
                      a = n.currentSlate,
                      r = n.hasImageError,
                      i = t.currentSlate
                    r &&
                      a &&
                      i &&
                      a.image &&
                      i.image &&
                      a.image.url !== i.image.url &&
                      this.setState({ hasImageError: !1 })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.state,
                      t = e.currentSlate,
                      n = e.hasImageError,
                      a = t || {},
                      r = a.cropCandidates,
                      i = a.image,
                      o = a.periscopeVariants
                    return i && !n
                      ? g.a.createElement(Ve.a, {
                          accessibilityLabel: ze,
                          aspectMode: Ue.a.exact(Z.a.theme.aspectRatios.landscape),
                          backgroundColor: Z.a.theme.colors.gray50,
                          cropCandidates: r,
                          customVariants: o,
                          hideAcceptOverlay: !0,
                          image: i,
                          onError: this._handleError,
                        })
                      : g.a.createElement(q.a, { style: We.fallback })
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    if (t.currentSlate) {
                      var n = t.currentSlate.image.url,
                        a = e.slate.image.url,
                        r = Object(Ae.h)(n),
                        i = Object(Ae.h)(a),
                        l = 'latest.jpg' === i
                      return r !== i || (!e.dataSaverMode && l) ? o()(o()({}, t), {}, { currentSlate: e.slate }) : null
                    }
                    return o()(o()({}, t), {}, { currentSlate: e.slate })
                  },
                },
              ],
            ),
            n
          )
        })(g.a.Component),
        We = Z.a.create(function (e) {
          return { fallback: { backgroundColor: e.colors.gray50 } }
        }),
        qe = je(He),
        Ge = n('jV+4'),
        Ye = n('9Xij'),
        Xe = n('vCAy'),
        Ke = n('I4+6'),
        Qe = w.a.d58baa7e,
        Je = ['views', 'viewers'],
        Ze = (function (e) {
          h()(n, e)
          var t = f()(n)
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
                    a = this._renderOverlay(t)
                  return g.a.createElement(
                    ue.a,
                    {
                      accessibilityRole: 'button',
                      focusable: !0,
                      interactiveStyles: et,
                      onClick: e,
                      style: $e.carouselItem,
                    },
                    a,
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
                      a = e.verified
                    return g.a.createElement(Ge.a, {
                      isVerified: a,
                      name: t,
                      screenName: n,
                      style: $e.userAttribution,
                      withStackedLayout: !0,
                    })
                  }
                },
              },
              {
                key: '_renderOverlay',
                value: function (e) {
                  var t = this.props.isSelected
                  return g.a.createElement(
                    Ye.a,
                    { ratio: Z.a.theme.aspectRatios.landscape, style: $e.image },
                    this._renderSocialProof(e),
                    t && g.a.createElement(q.a, { style: $e.selectedOverlay }),
                  )
                },
              },
              {
                key: '_renderSocialProof',
                value: function (e) {
                  var t = this.props.mediaItem.carouselItemInfo || {},
                    n = t.playbackDuration,
                    a = t.socialProof,
                    r = t.type,
                    i =
                      a && Je.includes(a.type)
                        ? g.a.createElement(
                            Te.a,
                            null,
                            g.a.createElement(
                              q.a,
                              { style: $e.horizontalContainer },
                              g.a.createElement(De.a, null),
                              g.a.createElement(I.b, null, Qe(a.count)),
                            ),
                          )
                        : null,
                    o = Re({ playbackDuration: n, type: r })
                  return g.a.createElement(g.a.Fragment, null, e, g.a.createElement(Xe.a, { align: 'left' }, o, i))
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props.mediaItem.slate
                  return e ? g.a.createElement(qe, { slate: e }) : null
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        $e = Z.a.create(function (e) {
          return {
            selectedOverlay: o()(
              o()({}, Z.a.absoluteFillObject),
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
        et = Ke.a.generate({
          backgroundColor: Z.a.theme.colors.transparent,
          color: Z.a.theme.colors.primary,
          customFocusBackgroundColor: Z.a.theme.colors.transparent,
          insetFocusRing: !0,
        }),
        tt = n('6iuV'),
        nt = Object.freeze({
          CarouselImpression: 'carousel_impression',
          TileClick: 'tile_click',
          TileImpression: 'tile_impression',
          TileAutoClick: 'tile_auto_click',
        }),
        at = { action: nt.CarouselImpression },
        rt = { action: nt.TileAutoClick },
        it = { action: nt.TileImpression },
        ot = { action: nt.TileClick },
        lt = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), '_getHandleOnClickForItem', function (t, n) {
                return function () {
                  var a = e.props.onCarouselScribe
                  n(t, function () {
                    return a(ot)
                  })
                }
              }),
              _()(m()(e), '_handleCarouselChildImpression', function (t) {
                ;(0, e.props.onCarouselScribe)(it, { tilePosition: t })
              }),
              _()(m()(e), '_handleVisibleRangeChange', function (t) {
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
                  ;(this._impressionTracker = new Pe(this._handleCarouselChildImpression)),
                    this._shouldDisplayCarousel() && e(at)
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
                    a = n.carousel,
                    r = n.onCarouselScribe
                  this._shouldDisplayCarousel() && a.length !== t.length && r(at)
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._shouldDisplayCarousel()
                    ? g.a.createElement(
                        tt.a,
                        {
                          onVisibleRangeChange: this._handleVisibleRangeChange,
                          style: ct.carousel,
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
                    a = t.selectedItemIndex,
                    r = t.setSelectedCarouselIndex
                  return n.map(function (t, n) {
                    return g.a.createElement(Ze, {
                      isSelected: n === a,
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
        })(g.a.PureComponent),
        ct = Z.a.create(function (e) {
          return { carousel: { paddingTop: e.spaces.space16 } }
        }),
        st = lt,
        ut = n('/yvb'),
        dt = w.a.j1d352d7,
        mt = w.a.d18909d4,
        pt = { element: 'reminder_button' },
        ht = Object.freeze({ impression: 'impression', click: 'click' })
      var vt = function (e) {
          var t = e.eventId,
            n = e.onPress,
            a = e.onRemindButtonScribe,
            r = e.remindMeSubscription,
            i = r.notification_id,
            l = r.subscribed,
            c = g.a.useRef({})
          ;(c.current.onRemindButtonScribe = a),
            g.a.useEffect(function () {
              var e
              null === (e = c.current) || void 0 === e || e.onRemindButtonScribe(o()({ action: ht.impression }, pt))
            }, [])
          var s = l ? 'primaryOutlined' : 'primaryFilled',
            u = l ? dt : mt
          return g.a.createElement(
            ut.a,
            {
              onPress: function () {
                n(t, { remind_me: !l, notification_id: i }), a(o()({ action: ht.click }, pt))
              },
              size: 'medium',
              type: s,
            },
            u,
          )
        },
        ft = n('EskI'),
        bt = n('v6aA'),
        _t = n('0yYu'),
        yt = n('97Jx'),
        gt = n.n(yt),
        Et = n('ZUOq'),
        It = n('MMRb'),
        Ct = n('zHh/'),
        kt = Object(Me.createSelector)(Be.d, It.selectDrawerVisibility, function (e, t) {
          return { canAutoplay: Object(Ct.a)(e), dmDrawerVisibility: t }
        }),
        wt = Object(Fe.c)(kt),
        St = n('7JQg'),
        xt = n('AQ79'),
        Pt = g.a.createContext({ dockRequested: !1, closeRequested: !1 }),
        Dt = n('ddV6'),
        Tt = n.n(Dt),
        At = n('MXDK'),
        Ot = { component: 'dock' },
        Lt = Object.freeze({
          dockedOnScroll: 'dock_on_scroll',
          undockOnScroll: 'undock_on_scroll',
          dismissTap: 'dismiss_tap',
          undockTap: 'undock_tap',
        })
      var Rt = function (e) {
          var t = g.a.useContext(bt.a).featureSwitches,
            n = g.a.useRef(null),
            a = g.a.useState(!1),
            r = Tt()(a, 2),
            i = r[0],
            l = r[1],
            c = g.a.useState(!1),
            s = Tt()(c, 2),
            u = s[0],
            d = s[1],
            m = e.onCloseDockComplete,
            p = e.onDockingScribeAction,
            h = e.render
          return (
            (function (e) {
              g.a.useEffect(
                function () {
                  i && !e && l(!1),
                    i ||
                      u === e ||
                      (d(e), p(o()(o()({}, Ot), {}, { action: e ? Lt.dockedOnScroll : Lt.undockOnScroll })))
                },
                [e],
              )
            })(e.requestDock),
            (function (e, a) {
              g.a.useEffect(
                function () {
                  if (!a && e) m && m()
                  else if (!a && null != n && n.current) {
                    var r = n.current.offsetTop
                    At.d({ featureSwitches: t, top: r })
                  }
                },
                [e, a],
              )
            })(i, u),
            g.a.createElement(
              q.a,
              { ref: n },
              h({
                closeRequested: i,
                dockRequested: u,
                requestClose: function () {
                  l(!0), d(!1), p(o()(o()({}, Ot), {}, { action: Lt.dismissTap }))
                },
                requestUndock: function () {
                  d(!1), p(o()(o()({}, Ot), {}, { action: Lt.undockTap }))
                },
              }),
            )
          )
        },
        Mt = n('gZV8'),
        Bt = n('xKuM'),
        Ft = n('Lsrn'),
        Nt = n('shC7'),
        jt = n('k/Ka'),
        Vt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(jt.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ft.a.root, e.style, Nt.a.getConstants().isRTL && Ft.a.iconRTL],
                viewBox: '0 0 24 24',
              },
            ),
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M19.687 22H7.813C6.538 22 5.5 20.962 5.5 19.687V13.17c0-.413.336-.75.75-.75s.75.337.75.75v6.517c0 .448.365.813.813.813h11.873c.448 0 .813-.365.813-.813V7.813c0-.448-.365-.813-.813-.813H13.17c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h6.517C20.962 5.5 22 6.538 22 7.813v11.873C22 20.962 20.962 22 19.687 22z',
              }),
              g.a.createElement('path', {
                d: 'M11.996 10.936L4.56 3.5h4.636c.414 0 .75-.336.75-.75S9.61 2 9.196 2H2.75c-.414 0-.75.336-.75.75v6.455c0 .414.336.75.75.75s.75-.336.75-.75V4.56l7.436 7.437c.146.146.338.22.53.22s.384-.073.53-.22c.293-.294.293-.768 0-1.06z',
              }),
            ),
          )
        }
      Vt.metadata = { width: 24, height: 24 }
      var Ut = Vt,
        zt = n('hOZg'),
        Ht = w.a.e839db39,
        Wt = w.a.a7a119ec,
        qt = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), 'state', { isOffscreen: !1 }),
              _()(m()(e), '_render', function (t) {
                var n = t.closeRequested,
                  a = t.dockRequested,
                  r = t.requestClose,
                  i = t.requestUndock,
                  o = e.props,
                  l = o.children,
                  c = o.placeholder
                return g.a.createElement(
                  Pt.Provider,
                  { value: { closeRequested: n, dockRequested: a } },
                  a && c,
                  g.a.createElement(
                    q.a,
                    { style: a ? [Gt.dockedContainer, e._getDockedBottomStyle()] : void 0 },
                    a && e._renderDockingControlBar(i, r),
                    l,
                  ),
                )
              }),
              _()(m()(e), '_handlePlacementChange', function (t) {
                var n = e.props,
                  a = n.isDisabled,
                  r = n.visibleThreshold
                a || e.setState({ isOffscreen: t.visibleFraction() <= r })
              }),
              _()(m()(e), '_getDockedBottomStyle', function () {
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
                    a = t.onCloseDockComplete,
                    r = t.onDockingScribeAction
                  return g.a.createElement(
                    Mt.e,
                    { onPlacementChange: this._handlePlacementChange, style: Gt.root },
                    g.a.createElement(Rt, {
                      onCloseDockComplete: a,
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
                    a = n.subtitle,
                    r = n.title
                  return g.a.createElement(Bt.a, {
                    rightControl: this._renderDockingControls(e, t),
                    subtitle: a,
                    title: r,
                  })
                },
              },
              {
                key: '_renderDockingControls',
                value: function (e, t) {
                  return g.a.createElement(
                    q.a,
                    { style: Gt.dockingControls },
                    g.a.createElement(ut.a, {
                      accessibilityLabel: Wt,
                      icon: g.a.createElement(Ut, null),
                      onPress: e,
                      type: 'brandText',
                    }),
                    g.a.createElement(ut.a, {
                      accessibilityLabel: Ht,
                      icon: g.a.createElement(zt.a, null),
                      onPress: t,
                      type: 'brandText',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      _()(qt, 'defaultProps', {
        placeholder: g.a.createElement(Ye.a, { ratio: Z.a.theme.aspectRatios.landscape }),
        visibleThreshold: 0,
      })
      var Gt = Z.a.create(function (e) {
          return {
            root: { zIndex: 1 },
            dockedContainer: {
              bottom: 0,
              right: 0,
              marginEnd: e.spaces.space20,
              boxShadow: e.boxShadows.small,
              maxWidth: Et.a.columnWidths.secondary.normal,
              position: 'fixed',
              width: Et.a.columnWidths.secondary.normal,
            },
            dockingControls: { flexDirection: 'row', alignItems: 'baseline' },
          }
        }),
        Yt = qt,
        Xt = n('nT9l'),
        Kt = n('hACr'),
        Qt = (function (e) {
          h()(n, e)
          var t = f()(n)
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
                    a = t.children,
                    r = t.remindMeButton,
                    i = this._renderMediaLabel(),
                    o =
                      i || r
                        ? g.a.createElement(
                            q.a,
                            {
                              style: [
                                Jt.verticalAlignment,
                                ((e = n), { backgroundImage: 'linear-gradient(transparent 0%, '.concat(e, ' 100%)') }),
                              ],
                            },
                            g.a.createElement(q.a, { style: Jt.wrapper }, r, i),
                          )
                        : null
                  return g.a.createElement(q.a, null, o, a)
                },
              },
              {
                key: '_renderMediaLabel',
                value: function () {
                  var e = this.props.mediaLabel
                  return e
                    ? g.a.createElement(
                        q.a,
                        { style: Jt.mediaLabelWrapper },
                        g.a.createElement(
                          I.b,
                          { align: 'left', color: 'white', size: 'body', style: Jt.mediaLabel },
                          e,
                        ),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      _()(Qt, 'defaultProps', { backgroundColor: Z.a.theme.colors.translucentBlack77 })
      var Jt = Z.a.create(function (e) {
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
        Zt = Qt,
        $t = n('TIdA'),
        en = n('wD1h'),
        tn = n('3dad'),
        nn = w.a.f93bb3ee,
        an = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), 'state', { shouldRenderImage: !0 }),
              _()(m()(e), '_getRenderDataSafeImage', function (t) {
                var n = t.mediaItem,
                  a = t.originalImage
                return function (t) {
                  var r = t.resourceSelectionHandler,
                    i = t.useMinimumData,
                    o = e.props,
                    l = o.fallbackAccessibilityLabel,
                    c = o.slate,
                    s = c.label,
                    u = c.periscopeVariants,
                    d = n.expanded_url,
                    m = n.ext_alt_text,
                    p = n.original_info,
                    h = m || l,
                    v = g.a.createElement(
                      Zt,
                      { mediaLabel: i ? void 0 : s },
                      g.a.createElement($t.a, {
                        accessibilityLabel: h,
                        aspectMode: Ue.a.exact(Z.a.theme.aspectRatios.landscape),
                        cropCandidates: p && p.focus_rects,
                        customVariants: u,
                        image: a,
                        onError: e._handleImageError,
                        onVariantSelection: r,
                        previewMode: i,
                      }),
                    )
                  return d
                    ? g.a.createElement(
                        Kt.a,
                        { handlers: _()({}, en.a.shortcuts.openMediaModal, e._handleOpenPhotoModal) },
                        v,
                      )
                    : v
                }
              }),
              _()(m()(e), '_handleImageError', function () {
                e.setState({ shouldRenderImage: !1 })
              }),
              _()(m()(e), '_handleOpenPhotoModal', function () {
                var t = e.props,
                  n = t.coverMedia,
                  a = t.history
                n && a.push(n.expanded_url)
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
                    t = e && tn.a.getOriginalImage(e)
                  return e && t
                    ? g.a.createElement(Xt.a, {
                        acceptLabel: nn,
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
                  return Object(Ae.s)(n, t) || void 0
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        rn = n('oQhu'),
        on = n('XmKV'),
        ln = 'events-player',
        cn = n('Modb'),
        sn = n('lklz'),
        un = n('Mhzv'),
        dn = n('38/B'),
        mn = n('HT/6'),
        pn = n('XrEN'),
        hn = n('mf9H'),
        vn = w.a.b0b38773,
        fn = { autoplayPrioritizationPolicy: on.b, minimumVisibilityForAutoplay: Mt.b },
        bn = new hn.a(fn),
        _n = { hideFullScreenButton: !0 },
        yn = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(
                m()(e),
                '_multiVideoAutoAdvanceEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_enabled'),
              ),
              _()(
                m()(e),
                '_multiVideoAutoAdvanceDockEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_dock_enabled'),
              ),
              _()(
                m()(e),
                '_multiVideoAutoAdvanceFullscreenEnabled',
                e.context.featureSwitches.isTrue('live_event_multi_video_auto_advance_fullscreen_enabled'),
              ),
              _()(
                m()(e),
                '_dockableAutoplayPolicyEnabled',
                e.context.featureSwitches.isTrue('responsive_web_dockable_autoplay_policy_enabled'),
              ),
              _()(m()(e), 'state', { isPlayerMuted: !0, showUpNextPlayerOverlay: !1 }),
              _()(
                m()(e),
                '_getUiStack',
                Object(rn.a)(function (t, n, a, r, i, o) {
                  return function (l) {
                    var c = l.containerRef,
                      s = l.guestsState,
                      u = l.playerApi,
                      d = l.playerState
                    return g.a.createElement(un.a, {
                      containerRef: c,
                      guestsState: s,
                      isDocked: n,
                      nextItemInfo: r,
                      onUpNextComplete: e._getHandleUpNextOverlayComplete(i),
                      onUpNextReplay: e._handleReplayPress,
                      playerApi: u,
                      playerDisplayOptions: t,
                      playerState: d,
                      renderUpNextImage: function () {
                        var e = null == o ? void 0 : o.slate
                        return g.a.createElement(
                          g.a.Fragment,
                          null,
                          e ? g.a.createElement(qe, { slate: e }) : null,
                          g.a.createElement(q.a, { style: gn.backgroundFading }),
                        )
                      },
                      shouldRenderUpNext: a,
                    })
                  }
                }),
              ),
              _()(m()(e), '_renderHorizonPlayer', function (t, n) {
                t.closeRequested
                var a = t.dockRequested,
                  r = t.key,
                  i = t.playerProps
                if (!i) return null
                var o = e.props.disableFullscreenVideo,
                  l = e._shouldRenderUpNext(n, a),
                  c = o ? _n : void 0,
                  s = e.props,
                  u = s.carousel,
                  d = s.selectedItemIndex,
                  m = e._getNextEligibleCarouselItemIndex(d, u),
                  p = m > -1 && u ? u[m] : void 0,
                  h = null == p ? void 0 : p.carouselItemInfo,
                  v = h
                    ? {
                        playbackDurationMs: h.playbackDuration,
                        name: h.name,
                        screenName: h.screenName,
                        type: h.type,
                        verified: !!h.verified,
                      }
                    : void 0,
                  f = e._getUiStack(i.displayOptions, a, !!l, v, m, p)
                return i
                  ? g.a.createElement(
                      q.a,
                      { style: a ? gn.dockedContainerBackground : void 0 },
                      g.a.createElement(
                        cn.a,
                        gt()({}, i, {
                          displayOptions: c,
                          key: r,
                          loopingThresholdMs: 7e3,
                          onProgressChange: e._handleProgressChange,
                          preserveMuteState: !0,
                          uiStack: f,
                        }),
                      ),
                    )
                  : null
              }),
              _()(m()(e), '_handleProgressChange', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  a = e.state.showUpNextPlayerOverlay
                n !== a && e.setState({ showUpNextPlayerOverlay: n })
              }),
              _()(m()(e), '_getHandleUpNextOverlayComplete', function (t) {
                return function (n) {
                  if (t) {
                    var a = e.props,
                      r = a.onChildScribeAction,
                      i = a.setSelectedCarouselIndex,
                      o = { tilePosition: t }
                    i(t), r(n ? ot : rt, o)
                  }
                  e.setState({ showUpNextPlayerOverlay: !1 })
                }
              }),
              _()(m()(e), '_setPlayer', function (t) {
                e._playerInstance = t
              }),
              _()(m()(e), '_shouldRenderUpNext', function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                  n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                  a = e.props,
                  r = a.canAutoplay,
                  i = a.carousel,
                  o = a.isPlayerFullscreen,
                  l = a.selectedItemIndex,
                  c = e._getNextEligibleCarouselItemIndex(l, i)
                return (
                  e._multiVideoAutoAdvanceEnabled &&
                  r &&
                  !dn.a.reducedMotionEnabled &&
                  (!n || e._multiVideoAutoAdvanceDockEnabled) &&
                  (!o || e._multiVideoAutoAdvanceFullscreenEnabled) &&
                  t &&
                  e.state.showUpNextPlayerOverlay &&
                  c > -1
                )
              }),
              _()(m()(e), '_handleCloseDockComplete', function () {
                var t = e.state.showUpNextPlayerOverlay,
                  n = e.props,
                  a = n.carousel,
                  r = n.selectedItemIndex
                if (t) {
                  var i = e._getNextEligibleCarouselItemIndex(r, a)
                  e._getHandleUpNextOverlayComplete(i)()
                } else e._playerInstance && e._playerInstance.pause()
              }),
              _()(m()(e), '_handleMuteChange', function (t) {
                var n = t.isPlayerMuted
                return e.setState({ isPlayerMuted: n })
              }),
              _()(m()(e), '_handleReplayPress', function () {
                e._playerInstance && e._playerInstance.replay()
              }),
              _()(m()(e), '_getNextEligibleCarouselItemIndex', Object(rn.a)(Ae.l)),
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
                    a = t.isDockingEnabled,
                    r = t.mediaType,
                    i = t.onChildScribeAction,
                    o = t.title
                  switch (r) {
                    case Ae.e.REPLAY_BROADCAST:
                    case Ae.e.LIVE_BROADCAST:
                    case Ae.e.VOD:
                      e = this._renderVideo()
                      break
                    case Ae.e.GIF:
                      e = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 })
                      break
                    case Ae.e.SLATE:
                    default:
                      e = this._renderImage()
                  }
                  var l = a ? this._renderUserSceenName(n) : null
                  return g.a.createElement(
                    Yt,
                    {
                      dockBottomOffset: this._getOffsetForDrawer(),
                      isDisabled: !a,
                      onCloseDockComplete: this._handleCloseDockComplete,
                      onDockingScribeAction: i,
                      subtitle: l,
                      title: o,
                      visibleThreshold: Mt.b,
                    },
                    g.a.createElement(q.a, { style: gn.container, testID: ln }, e),
                  )
                },
              },
              {
                key: '_getOffsetForDrawer',
                value: function () {
                  var e = Z.a.theme.spaces,
                    t = this.props.dmDrawerVisibility,
                    n = parseInt(''.concat(e.space20), 10)
                  return t === xt.b.COLLAPSED
                    ? Et.a.dmDrawerHeight.collapsed + n
                    : t === xt.b.EXPANDED
                    ? Et.a.dmDrawerHeight.expanded + n
                    : n
                },
              },
              {
                key: '_renderImage',
                value: function () {
                  var e = this.props,
                    t = e.history,
                    n = e.mediaDetails,
                    a = e.slate
                  return a
                    ? g.a.createElement(an, {
                        coverMedia: n.coverMedia,
                        fallbackAccessibilityLabel: vn,
                        history: t,
                        slate: a,
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
                    a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = a.isGif,
                    i = void 0 !== r && r,
                    l = a.withUpNextOverlay,
                    c = void 0 === l || l,
                    s = this.props,
                    u = s.eventId,
                    d = s.mediaDetails,
                    m = d.broadcastId,
                    p = d.coverMedia,
                    h = d.coverTweet,
                    v = void 0 === h ? {} : h,
                    f = d.mediaId,
                    b = d.promotedContent,
                    _ = s.onFullscreenChange,
                    y = s.slate,
                    E = p || {},
                    I = E.id_str,
                    C = v.id_str,
                    k = y || {},
                    w = k.image,
                    S = k.periscopeVariants,
                    x = {
                      accessibilityLabel: vn,
                      aspectRatio: Z.a.theme.aspectRatios.landscape,
                      backgroundColor: Z.a.theme.colors.gray0,
                      maxLoopCount: i ? void 0 : 3,
                      onFullscreenChange: _,
                      onMuteChange: this._handleMuteChange,
                      promotedContent: b,
                      playbackCoordination: this._dockableAutoplayPolicyEnabled ? hn.b : bn,
                      playbackPriority: mn.a.DOCKABLE,
                      poster: w,
                      customVariants: S,
                      shouldPlayUnmuted: !this.state.isPlayerMuted,
                      setPlayer: this._setPlayer,
                    }
                  if (m && f)
                    (e = m),
                      (t = o()(
                        o()({}, x),
                        {},
                        {
                          videoType: 'video',
                          includeBroadcastEventAssociation: !0,
                          source: { contentId: f, variants: [], videoId: sn.b.forBroadcast(m) },
                        },
                      ))
                  else if (I && C) {
                    var P = sn.b.forTweet(C),
                      D = pn.a.getVideoFromCoverMedia(p),
                      T = D && pn.a.extractVideoProps(P, D, u)
                    ;(e = I), (t = T ? o()(o()({}, T), x) : void 0)
                  }
                  return g.a.createElement(Pt.Consumer, null, function (a) {
                    var r = a.closeRequested,
                      i = a.dockRequested
                    return n._renderHorizonPlayer({ closeRequested: r, dockRequested: i, key: e, playerProps: t }, c)
                  })
                },
              },
              {
                key: '_renderUserSceenName',
                value: function (e) {
                  var t = e || {},
                    n = t.accountType,
                    a = t.name,
                    r = t.screenName,
                    i = t.userId,
                    o = null
                  return (
                    i &&
                      (n === Ae.a.TWITTER && r
                        ? (o = g.a.createElement(Ge.a, { screenName: r, weight: 'normal', withLink: !0 }))
                        : n === Ae.a.PERISCOPE &&
                          a &&
                          (o = g.a.createElement(I.b, { color: 'gray700', link: 'https://pscp.tv/u/'.concat(i) }, a))),
                    o
                  )
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      _()(yn, 'contextType', bt.a)
      var gn = Z.a.create(function (e) {
          return {
            backgroundFading: o()(
              o()({}, Z.a.absoluteFillObject),
              {},
              { backgroundColor: e.colors.translucentBlack30 },
            ),
            container: { zIndex: 10 },
            dockedContainerBackground: { backgroundColor: e.colors.cellBackground },
          }
        }),
        En = Object(St.c)({ element: 'image' })(wt(yn)),
        In =
          (w.a.f2382014,
          w.a.g66c8347,
          (function (e) {
            h()(n, e)
            var t = f()(n)
            function n() {
              var e
              c()(this, n)
              for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
              return (
                (e = t.call.apply(t, [this].concat(r))),
                _()(m()(e), '_enableMultiVideo', e.context.featureSwitches.isTrue('live_event_multi_video_enabled')),
                _()(m()(e), '_enableDocking', e.context.featureSwitches.isTrue('live_event_docking_enabled')),
                _()(m()(e), 'state', { headerWidth: 0 }),
                _()(m()(e), '_getSelectedItemIndex', function (e, t) {
                  return Object(Se.a)(e, function (e) {
                    return e.id === t
                  })
                }),
                _()(m()(e), '_setSelectedCarouselIndex', function (t) {
                  var n = e.props,
                    a = n.carousel,
                    r = n.setSelectedCarouselItem,
                    i = a && a[t]
                  i && r(i)
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
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e && this._renderHeaderMedia(e),
                      this._renderDescription(e),
                      g.a.createElement(_t.a, null),
                    )
                  },
                },
                {
                  key: '_renderDescription',
                  value: function (e) {
                    var t,
                      n,
                      a,
                      r = this.props,
                      i = r.isTOO,
                      o = r.liveEventDetails,
                      l = o.author,
                      c = o.category,
                      s = o.description,
                      u = o.timeString,
                      d = o.title,
                      m = null == e || null === (t = e.mediaDetails) || void 0 === t ? void 0 : t.coverTweet,
                      p = null == e || null === (n = e.mediaDetails) || void 0 === n ? void 0 : n.coverMedia,
                      h = null == e || null === (a = e.slate) || void 0 === a ? void 0 : a.imageAttribution
                    return g.a.createElement(
                      q.a,
                      { style: Cn.contentContainer },
                      d
                        ? g.a.createElement(xe.a, {
                            author: l,
                            coverTweet: m,
                            description: s,
                            imageAttribution: h,
                            isTOO: i,
                            mediaType: null == p ? void 0 : p.type,
                            preTitle: i || !l ? c : '',
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
                      a = t.disableFullscreenVideo,
                      r = t.history,
                      i = t.isPlayerFullscreen,
                      o = t.liveEventDetails,
                      l = o.eventId,
                      c = o.title,
                      s = t.onChildScribeAction,
                      u = t.onFullscreenChange,
                      d = e.carouselItemInfo,
                      m = e.mediaDetails,
                      p = e.slate,
                      h = d.type,
                      v = this._getDockingEnabled(h)
                    return g.a.createElement(En, {
                      carousel: n,
                      carouselItemInfo: d,
                      disableFullscreenVideo: a,
                      eventId: l,
                      history: r,
                      isDockingEnabled: v,
                      isPlayerFullscreen: i,
                      mediaDetails: m,
                      mediaType: h,
                      onChildScribeAction: s,
                      onFullscreenChange: u,
                      selectedItemIndex: this._getSelectedItemIndex(n || [], e.id),
                      setSelectedCarouselIndex: this._setSelectedCarouselIndex,
                      slate: p,
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
                      a = t.remindMeSubscription,
                      r = e.onChildScribeAction,
                      i = e.remindMeButtonSubscribe,
                      o = e.remindMeButtonUnsubscribe,
                      l = !!this.context.loggedInUserId,
                      c = (a || {}).toggle_visible
                    return l && c && a && i && o
                      ? g.a.createElement(vt, {
                          eventId: n,
                          onPress: a.subscribed ? o : i,
                          onRemindButtonScribe: r,
                          remindMeSubscription: a,
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
                    return t && n ? g.a.createElement(ft.a, { scoreData: t }) : null
                  },
                },
                {
                  key: '_renderCarousel',
                  value: function (e) {
                    var t = this.props,
                      n = t.carousel,
                      a = t.onChildScribeAction
                    return n
                      ? g.a.createElement(st, {
                          carousel: n,
                          onCarouselScribe: a,
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
                      a = [Ae.e.LIVE_BROADCAST, Ae.e.REPLAY_BROADCAST, Ae.e.VOD]
                    return !!n && this._enableDocking && t && a.includes(e)
                  },
                },
              ]),
              n
            )
          })(g.a.Component))
      _()(In, 'contextType', bt.a)
      var Cn = Z.a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        kn = n('9bsQ'),
        wn = n('3AAD'),
        Sn = n('7BdX'),
        xn = n('IG4P'),
        Pn = n('fTQJ'),
        Dn = n('k/OQ'),
        Tn = n('mw9i'),
        An = n('QIgh'),
        On = n('8UdT'),
        Ln = n('iu0J'),
        Rn = n('IcAo'),
        Mn = n('zgaL'),
        Bn = n('U+bB'),
        Fn = n('YeIG'),
        Nn = n('fs1G'),
        jn = ['customizationInfo', 'label', 'labelType'],
        Vn = w.a.abdcd689,
        Un = w.a.a1bb552d,
        zn = w.a.b103771f,
        Hn = w.a.bb980dbf,
        Wn = w.a.e9f1fbcb,
        qn = w.a.dfd7bbaf,
        Gn = w.a.bffb7ed4,
        Yn = { section: 'shop_tab', component: 'product_grid' },
        Xn = function () {
          return g.a.createElement(J.a, { header: Wn, message: qn })
        },
        Kn = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e) {
            var a
            c()(this, n),
              (a = t.call(this, e)),
              _()(m()(a), 'state', { selectedCarouselItemId: void 0 }),
              _()(m()(a), '_render', function () {
                var e = a.props.interstitialOrderToDisplay
                return a._refreshControlWrapper(
                  g.a.createElement(Ce, { interstitials: e }, function (e) {
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      a._renderHeader(),
                      a._renderInlineCompose(),
                      e || a._renderTimeline(),
                    )
                  }),
                )
              }),
              _()(m()(a), '_getComposeTimelineDetails', function () {
                return a.props.timelineDetails.composeDetails
              }),
              _()(m()(a), '_setSelectedCarouselItem', function (e) {
                var t = a.props.onSelectedCarouselItemChange
                t && t(e), a.setState({ selectedCarouselItemId: e.id })
              }),
              _()(m()(a), '_handleInlineComposeOnClick', function (e) {
                e.preventDefault()
                var t = a.props.history,
                  n = { pathname: '/compose/tweet', state: a._getComposeTimelineDetails() }
                t.push(n)
              }),
              _()(
                m()(a),
                '_getTimelineModuleMemoized',
                Object(rn.a)(function (e, t) {
                  return Object(kn.a)(e, t)
                }),
              ),
              _()(
                m()(a),
                '_getLiveCommerceItemsSliceModuleMemoized',
                Object(rn.a)(function (e) {
                  return we(e)
                }),
              )
            var r = e.timelineMessageOverride,
              i = e.withTweetActionsDisabled
            return (
              (a._entryConfiguration = (function (e) {
                var t,
                  n = e.withTweetActionsDisabled
                return o()(
                  o()({}, Object(An.a)({ withTweetActionsDisabled: n })),
                  {},
                  ((t = {}), _()(t, On.b.MomentAnnotation, Mn.a), _()(t, On.b.EventSummary, Object(Ln.a)({})), t),
                )
              })({ withTweetActionsDisabled: i })),
              (a._timelinePreprocessor = (function (e) {
                return function (t) {
                  return e
                    ? t.map(function (t) {
                        if (t.type === On.b.Message) {
                          var n = { content: { content: { inlinePrompt: { headerText: e } } } }
                          return Object(Rn.a)({}, t, n)
                        }
                        return t
                      })
                    : t
                }
              })(r)),
              a
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
                    a = e.onFetch
                  return g.a.createElement(oe.a, {
                    accessibilityLabel: Vn,
                    fetchStatus: t,
                    key: n.eventId,
                    onRequestRetry: a,
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
                    a = e.history,
                    r = e.isPlayerFullscreen,
                    i = e.isTOO,
                    o = e.isWide,
                    l = e.liveEventDetails,
                    c = e.onChildScribeAction,
                    s = e.onFullscreenChange,
                    u = e.remindMeButtonSubscribe,
                    d = e.remindMeButtonUnsubscribe,
                    m = e.scoreData,
                    p = e.timelineDetails.hashtag,
                    h = this.state.selectedCarouselItemId,
                    v = Object(Ae.p)(t, h)
                  return g.a.createElement(In, {
                    carousel: t,
                    disableFullscreenVideo: n,
                    history: a,
                    isPlayerFullscreen: r,
                    isTOO: i,
                    isWide: o,
                    liveEventDetails: l,
                    onChildScribeAction: c,
                    onFullscreenChange: s,
                    remindMeButtonSubscribe: u,
                    remindMeButtonUnsubscribe: d,
                    scoreData: m,
                    selectedCarouselItem: v,
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
                    a = n ? Un({ hashtag: n }) : zn
                  return t
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(ye, { onClick: this._handleInlineComposeOnClick, promptLabel: a }),
                        g.a.createElement(_t.a, null),
                      )
                    : null
                },
              },
              {
                key: '_renderTimeline',
                value: function () {
                  var e = this.props.timelineDetails.timelineId,
                    t = this._renderTimelineLinks(),
                    n = e === Ae.c.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline()
                  return t.length > 1 || (1 === t.length && t[0].isCustom)
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(Dn.a, {
                          accessibilityLabel: Hn,
                          links: t.map(function (e) {
                            return { key: e.key, label: e.label, isActive: e.isActive, to: o()({}, e.to) }
                          }),
                        }),
                        g.a.createElement(q.a, { style: Qn.timelineContainer }, n),
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
                      a = t.label,
                      i = t.labelType,
                      l = r()(t, jn),
                      c = !Object(Fn.a)(n),
                      s = e._renderTimelineLabelAnnotation(i),
                      u =
                        c && n
                          ? e._renderCustomLabel({ label: a, customizationInfo: n, labelAnnotation: s })
                          : g.a.createElement(I.b, { weight: 'bold' }, a, s)
                    return o()(o()({}, l), {}, { key: a, label: u, isCustom: c })
                  })
                },
              },
              {
                key: '_renderTimelineLabelAnnotation',
                value: function (e) {
                  return e === Ae.d.New
                    ? g.a.createElement(Te.a, { background: 'primary', bold: !0, style: Qn.labelAnnotation }, Gn)
                    : null
                },
              },
              {
                key: '_renderCustomLabel',
                value: function (e) {
                  var t = e.customizationInfo,
                    n = t.badge_media,
                    a = t.title_color,
                    r = e.label,
                    i = e.labelAnnotation
                  return g.a.createElement(
                    q.a,
                    { style: Qn.timelineLabel },
                    n && n.url ? g.a.createElement(Bn.a, { source: n.url, style: Qn.timelineLabelBadge }) : null,
                    g.a.createElement(I.b, { style: { color: a }, weight: 'bold' }, r, i),
                  )
                },
              },
              {
                key: '_renderRichTimeline',
                value: function () {
                  var e = this.props,
                    t = e.isPlayerFullscreen,
                    n = e.isWide,
                    a = e.liveEventDetails.title,
                    r = void 0 === a ? Hn : a,
                    i = e.onTimelinePoll,
                    o = e.pollingIntervalMs,
                    l = e.timelineDetails,
                    c = l.eventId,
                    s = l.timelineId,
                    u = e.withFloatingComposeButton,
                    d = this._getTimelineModuleMemoized(c, s),
                    m = t || n || !u ? null : this._renderFloatingComposeButton()
                  return g.a.createElement(
                    re.a,
                    { component: Tn.a, fab: m },
                    g.a.createElement(Pn.a, {
                      anchoring: wn.a,
                      entryConfiguration: this._entryConfiguration,
                      module: d,
                      onTimelinePoll: i,
                      pollingIntervalMsOverride: o,
                      preprocessEntryList: this._timelinePreprocessor,
                      prerollDisplayLocation: Sn.c.OTHER,
                      refreshControl: null,
                      renderEmptyState: Xn,
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
                  return g.a.createElement(St.b, { namespace: Yn }, g.a.createElement(ae, { module: t }))
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return g.a.createElement(le.a, { getLocationState: this._getComposeTimelineDetails, history: e })
                },
              },
              {
                key: '_refreshControlWrapper',
                value: function (e) {
                  var t = this.props,
                    n = t.onFetch,
                    a = t.refreshStatus
                  return g.a.createElement(xn.a, { isRefreshing: a === ie.a.LOADING, onRefresh: n }, e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      _()(Kn, 'defaultProps', { onChildScribeAction: Nn.a })
      var Qn = Z.a.create(function (e) {
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
          a = function () {
            ;(n = null), e()
          }
        return function () {
          return n || (n = t(a)), n
        }
      }
    },
    mf9H: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      }),
        n.d(t, 'b', function () {
          return b
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('KEM+'),
        c = n.n(l),
        s = (n('hBpG'), n('7x/C'), n('jwue'), n('+oxZ'), n('vrRf'), n('Ee2X'), n('LW0h'), n('6U7i'), n('6/RC')),
        u = n('XmKV'),
        d = n('HT/6'),
        m = n('jHwr'),
        p = n('+d3d'),
        h = n('fs1G'),
        v = { autoplayPrioritizationPolicy: u.a, minimumVisibilityForAutoplay: 0.25 },
        f = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v
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
                  : h.a,
              )
            var a = n.autoplayPrioritizationPolicy,
              i = n.minimumVisibilityForAutoplay
            ;(this._autoplayPrioritizationPolicy = a), (this._minimumVisibilityForAutoplay = i)
          }
          return (
            o()(e, [
              {
                key: 'register',
                value: function (e) {
                  var t = this,
                    n = e.canAutoplay,
                    a = e.onAutoPlayRequest,
                    r = e.onFullscreenEntered,
                    i = e.onFullscreenExited,
                    o = e.onPauseRequest,
                    l = e.isLooping,
                    c = e.playbackPriority,
                    s = void 0 === c ? d.a.NORMAL : c,
                    u = {
                      placement: void 0,
                      playbackPriority: s,
                      playbackState: d.b.INITIAL,
                      previousPlaybackState: d.b.INITIAL,
                      commandHandlers: {
                        onAutoPlayRequest: a,
                        onFullscreenEntered: r,
                        onFullscreenExited: i,
                        onPauseRequest: o,
                      },
                      canAutoplay: n && s !== d.a.INELIGIBLE,
                      isLooping: l,
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
                      a = n.onFullscreenEntered,
                      r = n.onFullscreenExited
                    e && a ? a() : !e && r && r()
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
                    a = e.playbackState === d.b.FINISHED
                  return e.canAutoplay && t && !n && !a
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
                    var a = n.playbackPriority !== d.a.SPACE
                    n === e ||
                      !a ||
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
        b = new f()
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        c = n.n(l),
        s = n('Y9Ll'),
        u = n.n(s),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        h = n.n(p),
        v = n('2VqO'),
        f = n.n(v),
        b = n('KEM+'),
        _ = n.n(b),
        y = (n('2G9S'), n('ERkP')),
        g = n.n(y),
        E = n('nT9l'),
        I = n('3XMw'),
        C = n.n(I),
        k = 'image',
        w = n('TIdA'),
        S = n('a6qo'),
        x = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        P = C.a.f93bb3ee,
        D = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              _()(m()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  a = t.useMinimumData,
                  i = e.props,
                  l = i.accessibilityLabel,
                  c = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  s = o()(i, x)
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(
                    w.a,
                    r()({}, s, { accessibilityLabel: l, onVariantSelection: n, previewMode: a, testID: k }),
                  ),
                  c ? g.a.createElement(S.a, { align: 'left', altLabel: l }) : null,
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
                  return g.a.createElement(E.a, {
                    acceptLabel: P,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
    },
    zgaL: function (e, t, n) {
      'use strict'
      var a = n('ezF+'),
        r =
          (n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          {
            loader: function () {
              return n.e(220).then(n.bind(null, 'tFiq'))
            },
            loaderKey: 'momentAnnoationLoader',
            strategy: n('XBtf').a.Critical,
          })
      t.a = a.e(r)
    },
    zlxh: function (e, t, n) {
      'use strict'
      n.d(t, 'j', function () {
        return v
      }),
        n.d(t, 'f', function () {
          return f
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'e', function () {
          return I
        }),
        n.d(t, 'd', function () {
          return C
        }),
        n.d(t, 'm', function () {
          return k
        }),
        n.d(t, 'k', function () {
          return x
        }),
        n.d(t, 's', function () {
          return O
        }),
        n.d(t, 'r', function () {
          return R
        }),
        n.d(t, 'p', function () {
          return M
        }),
        n.d(t, 'q', function () {
          return B
        }),
        n.d(t, 'n', function () {
          return N
        }),
        n.d(t, 'o', function () {
          return j
        }),
        n.d(t, 'i', function () {
          return V
        }),
        n.d(t, 'a', function () {
          return z
        }),
        n.d(t, 'h', function () {
          return Y
        }),
        n.d(t, 'l', function () {
          return K
        }),
        n.d(t, 'c', function () {
          return Q
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        l =
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
        c = n.n(l),
        s = n('lPpt'),
        u = n('XkXQ'),
        d = n('oQhu'),
        m = n('zrc3'),
        p = n('3dad'),
        h = n('XrEN'),
        v = function (e) {
          return 'https://twitter.com/i/events/'.concat(e)
        },
        f = c.a.d2fb334b,
        b = c.a.ad16f482,
        _ = (c.a.h0786685, '1'),
        y = 'RUNNING',
        g = { '600x1200': 4, '1024x2048': 3, '340x680': 2, '150x150': 1 },
        E = c.a.i0ed3f4d,
        I = Object.freeze({
          LIVE_BROADCAST: 'liveBroadcast',
          REPLAY_BROADCAST: 'replayBroadcast',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        C = Object.freeze({ New: 'New' }),
        k = function (e, t, n) {
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
        w = Object(d.a)(function (e, t) {
          return e.slates && t && e.slates[t]
        }),
        S = function (e, t) {
          var n = (e.slate || e.fallback_slate || {}).id,
            a = (function (e, t) {
              var n = w(e, t),
                a = (n && n.variants) || []
              return Object(u.a)(a, function (e) {
                var t = e.name
                return g[t] || 0
              })
            })(t, n),
            r = (function (e, t, n) {
              var a,
                r = w(e, t)
              if (n && r) {
                var i = r.focus_rects,
                  o = void 0 === i ? [] : i,
                  l = r.tweet_id
                if (!(a = o.length ? o : void 0) && l) {
                  var c,
                    s = (null == e ? void 0 : e.tweets) && (null == e ? void 0 : e.tweets[l]),
                    u = (
                      (null == s || null === (c = s.extended_entities) || void 0 === c ? void 0 : c.media) || []
                    ).find(function (e) {
                      return e.media_key === t
                    })
                  a = u && p.a.getCropCandidates(u)
                }
              }
              return a
            })(t, n, a),
            i = (function (e, t, n) {
              return e ? t.slates[n].label : void 0
            })(a, t, n),
            o = w(t, n) || {},
            l = o.attribution,
            c = o.tweet_id,
            s =
              (function (e, t) {
                if (t.broadcast && t.broadcast.id) {
                  var n = t.broadcast.id,
                    a = P(e, n)
                  return a && { small: a.image_url_small, medium: a.image_url_medium }
                }
              })(t, e) || {},
            d = a && k(s.small, s.medium, a)
          return n && a
            ? { id: n, image: a, imageAttribution: l, periscopeVariants: d, cropCandidates: r, label: i, tweetId: c }
            : void 0
        },
        x = function (e, t) {
          var n = (function (e) {
              var t = e.liveEventDetails.attribution_user_id
              return e.users ? e.users[t] : void 0
            })(t),
            a = t.liveEventDetails,
            r = a.category,
            i = a.description,
            o = a.remind_me_subscription,
            l = a.short_title,
            c = a.time_string,
            s = a.title
          return {
            author: n,
            category: r,
            description: i,
            eventId: e,
            remindMeSubscription: o,
            shortTitle: l || s,
            timeString: c,
            title: s,
          }
        },
        P = function (e, t) {
          return e.broadcasts && t ? e.broadcasts[t] : void 0
        },
        D = function (e, t) {
          var n = e.extended_entities,
            a = (void 0 === n ? {} : n).media
          return (void 0 === a ? [] : a).find(function (e) {
            return e.media_key === t || 'photo' !== e.type
          })
        },
        T = function (e, t, n) {
          var a = e.media,
            r = (void 0 === a ? {} : a).mediaEntity
          return !r || (r.broadcast_id !== t && r.media_tweet_id !== n) ? void 0 : e.promotedContent
        },
        A = function (e, t, n, a, r, i) {
          var o = t && r ? D(t, r) : void 0,
            l = P(n, e),
            c = l ? e : void 0,
            s = null == l ? void 0 : l.media_key,
            u = null == l ? void 0 : l.status,
            d = null == l ? void 0 : l.twitter_user_id,
            m = null == l ? void 0 : l.user_display_name,
            p = null == l ? void 0 : l.username,
            h = null == l ? void 0 : l.width,
            v = null == l ? void 0 : l.height,
            f = null == l ? void 0 : l.broadcast_source,
            b = null == l ? void 0 : l.camera_rotation,
            _ = null == l ? void 0 : l.image_url,
            g = null == l ? void 0 : l.replay_edited_start_time
          return {
            mediaId: null == l ? void 0 : l.media_id,
            coverTweet: t,
            coverMedia: o,
            broadcastId: c,
            broadcastMediaKey: s,
            broadcastTitle: u,
            broadcastTwitterId: d,
            broadcastDisplayName: m,
            broadcastUsername: p,
            broadcastWidth: h,
            broadcastHeight: v,
            broadcastThumbnail: _,
            broadcastReplayStartTime: g,
            broadcastSource: f,
            broadcastOrientation: b,
            isLive: (function (e) {
              return !!e && e.state === y
            })(l),
            promotedContent: i && T(i, c, r),
          }
        },
        O = function (e, t) {
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
        L = function (e, t) {
          switch (t) {
            case Q.SHOP:
              return e.isTrue('responsive_web_live_commerce_enabled')
            default:
              return !0
          }
        },
        R = function (e, t, n, a) {
          var i,
            o,
            l = t.liveEventDetails.timelines || [],
            c = l.length ? l[0].timeline_id : _,
            s = l.length ? l[0].hashtag : void 0,
            u = l.length ? l[0].compose_semantic_core_id : void 0,
            d = 0,
            m =
              n &&
              l.some(function (e) {
                return e.timeline_id === n
              }),
            p = L(a, n),
            h = l
              .filter(function (e) {
                var t = e.timeline_id
                return L(a, t)
              })
              .map(function (t, a) {
                var r = t.compose_semantic_core_id,
                  l = t.customization_info,
                  s = t.hashtag,
                  u = t.label_type,
                  p = t.timeline_id,
                  h = t.timeline_source_id,
                  v = t.timeline_source_type,
                  f = t.title,
                  b = p === c
                return (
                  ((m && p === n) || b) && ((d = a), (i = s), (o = r)),
                  {
                    isActive: function () {
                      return m ? p === n : b
                    },
                    to: { pathname: '/i/events/'.concat(e), query: { timeline: p } },
                    label: f,
                    labelType: C[u],
                    customizationInfo: l,
                    hashtag: s,
                    timelineId: p,
                    timelineSourceId: h,
                    timelineSourceType: v,
                  }
                )
              }),
            v = m && p && n ? n : c,
            f = i || s,
            b = o || u
          return {
            composeDetails: r()(
              { composeSemanticCoreId: b },
              f ? { defaultText: ' '.concat(f), positionCursorAtBeginning: !0 } : { defaultText: '' },
            ),
            eventId: e,
            hashtag: f,
            timelineId: v,
            timelineIndex: d,
            timelineLinks: h,
          }
        },
        M = function (e, t) {
          if (e) {
            var n = t && F(e, t),
              a = B(e)
            return n || e[a]
          }
        },
        B = function (e) {
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
        N = function (e) {
          var t = e.response.polling_interval_seconds
          return t > 0 ? t : 0
        },
        j = function (e) {
          var t = e.response.score
          return t && t.data && t.data.moments ? t.data : void 0
        },
        V = function (e, t, n) {
          return (e.response.carousel || [])
            .filter(function (e) {
              return !e.moment
            })
            .map(function (t) {
              var a,
                i,
                o = t.entry_id,
                l = S(t, e),
                c = l && l.id,
                u = (t.tweet_media && t.tweet_media.id) || (l && l.tweetId),
                d = u ? s.a.selectHydratedTweet(e, u) : void 0,
                m = A(o, d, e, 0, c, n)
              if (t.broadcast) {
                var p = e.broadcasts ? e.broadcasts[t.broadcast.id] : void 0
                ;(i = (p && p.twitter_user_id && e.users && e.users[p.twitter_user_id]) || void 0),
                  (a = p ? H(i, p) : void 0)
              } else if ((t.slate && u) || t.tweet_media) {
                var h = u && e.tweets ? e.tweets[u] : void 0
                a = (i = h && e.users ? e.users[h.user] : void 0) ? W(i, !!t.tweet_media, c, h, e) : void 0
              } else t.slate && l && (a = { type: I.SLATE })
              return (
                a || !l || t.tweet_media || (a = { type: I.SLATE }),
                !U(i) && a && l
                  ? {
                      id: o,
                      carouselItemInfo: r()(r()({}, a), {}, { socialProof: t.social_proof }),
                      mediaDetails: m,
                      slate: l,
                      selected: !!t.selected,
                    }
                  : void 0
              )
            })
            .filter(Boolean)
        },
        U = function (e) {
          return (e && (e.blocking || e.blocked_by)) || !1
        },
        z = Object.freeze({ TWITTER: 'twitter', PERISCOPE: 'periscope' }),
        H = function (e, t) {
          return {
            verified: !!e && e.verified,
            screenName: e ? e.screen_name : void 0,
            name: e ? e.name : t.user_display_name,
            userId: e ? e.id_str : t.user_id,
            type: t.state === y ? I.LIVE_BROADCAST : I.REPLAY_BROADCAST,
            accountType: e ? z.TWITTER : z.PERISCOPE,
            profileImageUrl: e ? e.profile_image_url_https : void 0,
          }
        },
        W = function (e, t, n, a, r) {
          var i, o, l
          if (t && a && n) {
            var c = D(a, n)
            if (c) {
              var s = c.type
              o = G(s)
              var u = h.a.getVideoFromCoverMedia(c) || {},
                d = u.source_user_id_str,
                m = u.video_info
              ;(i = m && m.duration_millis), (l = d && q(d, r))
            }
          } else o = I.SLATE
          var p = l || e || {},
            v = p.id_str,
            f = p.name,
            b = p.screen_name,
            _ = p.verified
          return o
            ? { accountType: z.TWITTER, verified: _, screenName: b, name: f, type: o, playbackDuration: i, userId: v }
            : void 0
        },
        q = function (e, t) {
          return t.users && t.users[e]
        },
        G = function (e) {
          switch (e) {
            case 'animated_gif':
              return I.GIF
            case 'vine':
            case 'video':
              return I.VOD
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
        X = function (e) {
          return !!e && !!e.carouselItemInfo && e.carouselItemInfo.type !== I.GIF && e.carouselItemInfo.type !== I.SLATE
        },
        K = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e + 1,
            a = t.slice(n).findIndex(X)
          return a > -1 ? a + n : a
        },
        Q = Object.freeze({ SHOP: 'shop' })
    },
  },
])
//# sourceMappingURL=WIPED
