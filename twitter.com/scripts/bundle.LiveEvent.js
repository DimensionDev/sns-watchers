;(window.webpackJsonp = window.webpackJsonp || []).push([
  [61, 173],
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
            ? r.a.createElement(
                o.b,
                { color: 'alwaysBaseGray1100', size: 'subtext3', style: d.imageOverlay, weight: 'bold' },
                m,
              )
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
            a = void 0 === n ? 'text' : n,
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
    '6vad': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      n('yH/f')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('EHV7'),
        l = n('rHpw'),
        c = l.a.create(function (e) {
          return {
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.title4,
              paddingRight: e.spaces.space12,
              width: e.fontSizes.title4,
            },
          }
        }),
        s = n('7Mjr'),
        u = n('I4+6'),
        d = n('cm6r'),
        m = n('MWbm'),
        p = Object.freeze({ TopicFilled: 'TOPIC_FILLED' })
      var h = l.a.create(function (e) {
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
          a = e.nativeID,
          v = e.rightControl,
          f = e.style,
          b = e.subtext,
          _ = e.testID,
          y = e.text,
          g = (function (e) {
            switch (e) {
              case p.TopicFilled:
                return r.a.createElement(o.a, { style: c.icon })
              default:
                return null
            }
          })(t),
          E = b ? null : h.withSubtext,
          I = u.a.generate({
            backgroundColor: l.a.theme.colors.gray0,
            color: l.a.theme.colors.cellBackground,
            customFocusBackgroundColor: l.a.theme.colors.gray0,
            customHoverBackgroundColor: l.a.theme.colors.gray0,
            customPressedBackgroundColor: l.a.theme.colors.gray0,
          })
        return r.a.createElement(
          d.a,
          {
            interactiveStyles: n ? I : null,
            link: null == n ? void 0 : n.url,
            nativeID: a,
            style: [h.root, f],
            testID: _,
          },
          r.a.createElement(
            m.a,
            { accessibilityLevel: 2, accessibilityRole: 'heading', style: h.mainContent },
            r.a.createElement(m.a, { style: h.icon }, g),
            r.a.createElement(
              i.b,
              { numberOfLines: 3, size: 'headline1', style: E, weight: 'heavy', withHashflags: !0 },
              y,
            ),
            r.a.createElement(
              m.a,
              { style: h.rightControlGroup },
              n ? r.a.createElement(m.a, { style: E }, r.a.createElement(s.a, { style: h.iconArrow })) : null,
              v ? r.a.createElement(m.a, null, v) : null,
            ),
          ),
          b
            ? r.a.createElement(
                i.b,
                { color: 'gray700', numberOfLines: 2, size: 'subtext2', style: h.subtext, withHashflags: !0 },
                b,
              )
            : null,
        )
      }
    },
    '7sPD': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'LiveEventScreen', function () {
          return Me
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
        b = (n('2G9S'), n('hBpG'), n('7x/C'), n('1t7P'), n('jQ/y'), n('LW0h'), n('jwue'), n('+oxZ'), n('ERkP')),
        _ = n.n(b),
        y = n('k49u'),
        g = n('zI2C'),
        E = n('6/RC'),
        I = n('es0u'),
        C = (n('KqXw'), n('WNMA'), n('MvUL'), n('5BYb'), n('ho0z'), n('zh9S')),
        S = n('kGix'),
        w = n('RrqW'),
        k = function (e, t, n) {
          return { isFullPageInterstitial: e, type: t, screenName: n }
        },
        D = function (e) {
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
              ? c.push(k(!0, w.a.BLOCKED_BY, l))
              : (r && c.push(k(!0, w.a.BLOCKED, l)), o && c.push(k(!1, w.a.SENSITIVE))),
            c.length ? c : void 0
          )
        },
        T = n('lPpt'),
        x = n('tn7R'),
        P = n('wrlS'),
        A = n('G6rE'),
        O = n('RhWx'),
        L = n.n(O),
        R = (n('yH/f'), n('JtPf'), n('Ssj5')),
        M = 'liveEventInterstitials',
        B = 'rweb.liveEventInterstitials',
        F = Object.freeze({
          REQUEST: 'rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_REQUEST',
          SUCCESS: 'rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_SUCCESS',
          FAILURE: 'rweb/liveEventInterstitials/FETCH_SEEN_EVENT_IDS_FAILURE',
        }),
        N = { seenEvents: [], fetchStatus: S.a.NONE }
      var U = function () {
          return { type: F.FAILURE }
        },
        V = function (e) {
          return { type: F.SUCCESS, payload: e }
        },
        j = function (e) {
          return e[M].seenEvents
        },
        z = function () {
          return function (e, t, n) {
            var a = n.userPersistence
            return t()[M].fetchStatus === S.a.LOADED
              ? Promise.resolve()
              : (e({ type: F.REQUEST }),
                a
                  .get(B)
                  .then(function (t) {
                    null != t && t.seenEvents ? e(V(t.seenEvents)) : e(U())
                  })
                  .catch(function () {
                    e(U())
                  }))
          }
        },
        H = function (e) {
          return function (t, n) {
            var a = [].concat(L()(j(n())), [{ eventId: e, lastSeenTimestamp: Date.now() }])
            return (
              t(V(a)),
              t(
                (function (e) {
                  return function (t, n, a) {
                    return a.userPersistence.set(B, { seenEvents: e }).catch(function () {})
                  }
                })(a),
              )
            )
          }
        }
      R.a.register(
        f()({}, M, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case F.REQUEST:
              return r()(r()({}, e), {}, { fetchStatus: S.a.LOADING })
            case F.FAILURE:
              return r()(r()({}, e), {}, { fetchStatus: S.a.FAILED })
            case F.SUCCESS:
              return t.payload ? { seenEvents: t.payload, fetchStatus: S.a.LOADED } : e
            default:
              return e
          }
        }),
      )
      var W = n('rxPX'),
        G = n('0KEI'),
        q = n('zlxh'),
        Y = function (e, t) {
          return t.match.params.eventId
        },
        X = function (e, t) {
          var n
          return [].concat(null === (n = t.location.query) || void 0 === n ? void 0 : n.timeline)[0]
        },
        K = function (e, t) {
          return T.a.select(e, Y(0, t))
        },
        Q = function (e, t) {
          return T.a.selectFetchStatus(e, Y(0, t))
        },
        J = function (e, t) {
          var n = ((T.a.selectErrors(e) || {})[Y(0, t)] || {}).errors,
            a = (void 0 === n ? [] : n).find(function (e) {
              return e.code === y.a.BlockedUserError
            })
          return a && a.message && a.message.replace('@', '')
        },
        Z = function (e, t) {
          return T.a.selectIsTOO(e, Y(0, t))
        },
        $ = function (e, t) {
          var n
          return null === (n = t.location.state) || void 0 === n ? void 0 : n.promotedCardState
        },
        ee = function (e, t) {
          return (function (e, t) {
            var n = j(e),
              a =
                null == n
                  ? void 0
                  : n.find(function (e) {
                      return e.eventId === t
                    })
            return !!a && Date.now() - a.lastSeenTimestamp < 24192e5
          })(e, Y(0, t))
        },
        te = function (e) {
          return r()({}, e ? { loggedInUserAvatarURI: e.profile_image_url_https, loggedInUserName: e.name } : null)
        },
        ne = Object(W.a)()
          .propsFromState(function () {
            return {
              eventId: Y,
              event: K,
              blockedByScreenName: J,
              fetchStatus: Q,
              liveEventTimelineId: X,
              promotedCardState: $,
              loggedInUser: A.e.selectLoggedInUser,
              isTOO: Z,
              featureSwitches: P.d,
              hasSeenEvent: ee,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.blockedByScreenName,
              n = e.event,
              a = e.eventId,
              i = e.featureSwitches,
              o = e.fetchStatus,
              l = e.hasSeenEvent,
              c = e.isTOO,
              s = e.liveEventTimelineId,
              u = e.loggedInUser,
              d = e.promotedCardState,
              m = (function (e, t, n, a) {
                return r()(
                  {
                    liveEventDetails: { eventId: e },
                    fetchStatus: t ? S.a.LOADED : n,
                    refreshStatus: n,
                    timelineDetails: {
                      composeDetails: { defaultText: '' },
                      eventId: e,
                      timelineId: q.b,
                      timelineIndex: 0,
                      timelineLinks: [],
                    },
                    hasSeenEvent: !1,
                    interstitialOrderToDisplay: t ? D({ isBlockedBy: !0, screenName: t }) : void 0,
                    isTOO: !1,
                    isUserSuspended: !1,
                  },
                  te(a),
                )
              })(a, t, o, u)
            if (!n) return m
            var p = Object(q.o)(n),
              h = Object(q.i)(n, p, d),
              v = Object(q.k)(a, n),
              f = Object(q.n)(n),
              b = Object(q.r)(a, n, s, i),
              _ = (function (e) {
                var t = e || {},
                  n = t.liveEventDetails,
                  a = void 0 === n ? {} : n,
                  r = t.users,
                  i = a.attribution_user_id
                return (
                  !!i &&
                  !Object(x.a)(r || {}).some(function (e) {
                    return e.id_str === i
                  })
                )
              })(n),
              y = v.author || {},
              g = y.blocked_by,
              E = y.blocking,
              I = y.screen_name,
              C = n.liveEventDetails.sensitive,
              w = D({ isBlockedBy: g, isBlocking: E, isSensitive: C, screenName: I })
            return r()(
              r()(r()({}, m), te(u)),
              {},
              {
                liveEventDetails: v,
                fetchStatus: n ? S.a.LOADED : o,
                refreshStatus: o,
                interstitialOrderToDisplay: w,
                isTOO: c,
                isUserSuspended: _,
                serverPollingIntervalSeconds: f,
                hasSeenEvent: l,
                scoreData: p,
                carousel: h.length > 0 ? h : void 0,
                timelineDetails: b,
              },
            )
          })
          .propsFromActions(function () {
            return {
              addSeenEventId: H,
              createLocalApiErrorHandler: Object(G.createLocalApiErrorHandlerWithContextFactory)('LIVE_EVENT_SCREEN'),
              fetchLiveEvent: T.a.fetchOne,
              fetchSeenEventIds: z,
              googleAnalyticsPageView: C.googleAnalyticsPageView,
              remindMeButtonSubscribe: T.a.subscribe,
              remindMeButtonUnsubscribe: T.a.unSubscribe,
              scribeAction: C.scribeAction,
              scribePageImpression: C.scribePageImpression,
            }
          }),
        ae = (n('0zG9'), n('E4zi')),
        re = n('muX9'),
        ie = function (e) {
          var t,
            n = e.liveEventDetails,
            a = e.slate,
            r = n.category,
            i = n.description,
            o = n.eventId,
            l = n.timeString,
            c = n.title,
            s = null == a || null === (t = a.image) || void 0 === t ? void 0 : t.url,
            u = n.author ? Object(ae.a)(n.author) : null,
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
          return _.a.createElement(re.a, { script: [{ type: 'application/ld+json', innerHTML: d }] })
        },
        oe = (n('z84I'), n('/Ikv')),
        le = n('BcsE'),
        ce = function (e) {
          var t = e.content,
            n = e.name
          return t || Object(le.a)(t) ? _.a.createElement('meta', { content: t, key: n, name: n }) : null
        },
        se = Object.freeze({ broadcast: 'broadcast', video: 'video', image: 'image' }),
        ue = function (e) {
          var t = e.carousel,
            n = e.liveEventDetails,
            a = e.timelineDetails,
            r = n.description,
            i = n.eventId,
            o = n.title,
            l = a.timelineId,
            c = t[Object(q.q)(t)],
            s = (c || {}).slate,
            u = (function (e) {
              var t,
                n = e.carouselItemInfo.type
              return (
                n === q.e.LIVE_BROADCAST || n === q.e.REPLAY_BROADCAST
                  ? (t = se.broadcast)
                  : n === q.e.VOD || n === q.e.GIF
                  ? (t = se.video)
                  : n === q.e.SLATE && (t = se.image),
                t
              )
            })(c)
          return o && r && s
            ? _.a.createElement(
                re.a,
                null,
                (function (e, t, n, a, r) {
                  return [
                    { name: 'twitter:card', content: oe.a.CardNames.LIVE_EVENT },
                    { name: 'twitter:text:event_id', content: n },
                    { name: 'twitter:text:event_title', content: e },
                    { name: 'twitter:text:event_subtitle', content: t },
                    { name: 'twitter:text:event_timeline_id', content: r },
                    { name: 'twitter:image:event_thumbnail:src', content: a.image.url },
                    { name: 'twitter:image:event_thumbnail:height', content: a.image.height },
                    { name: 'twitter:image:event_thumbnail:width', content: a.image.width },
                  ]
                })(o, r, i, s, l).map(ce),
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
                    S,
                    w,
                    k,
                    D,
                    T,
                    x,
                    P,
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
                        (null === (C = n.slate) || void 0 === C || null === (S = C.cropCandidates) || void 0 === S
                          ? void 0
                          : S.length) && (null === (w = n.slate) || void 0 === w ? void 0 : w.cropCandidates[0].w),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:h',
                      content:
                        (null === (k = n.slate) || void 0 === k || null === (D = k.cropCandidates) || void 0 === D
                          ? void 0
                          : D.length) && (null === (T = n.slate) || void 0 === T ? void 0 : T.cropCandidates[0].h),
                    },
                    {
                      name: 'twitter:text:event_thumbnail:media:size:crops:16x9:x',
                      content:
                        (null === (x = n.slate) || void 0 === x || null === (P = x.cropCandidates) || void 0 === P
                          ? void 0
                          : P.length) && (null === (A = n.slate) || void 0 === A ? void 0 : A.cropCandidates[0].x),
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
                })(n, 0, c, u).map(ce),
              )
            : null
        },
        de = n('QtuH'),
        me = n('LVU8'),
        pe =
          (n('+KXO'),
          function (e) {
            return { items: [he(e)] }
          }),
        he = function (e) {
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
            S = r()({}, null)
          return (
            d && (C.host_event_id = d),
            v && (C.timeline_id = v),
            i && ((C.timeline_source_id = f), (C.timeline_source_type = b)),
            void 0 !== u && (C.timeline_tab_position = u),
            t && ((C.carousel_count = t), (C.carousel_position = n)),
            void 0 !== s && (C.tile_position = s),
            m && ((C.remind_me_notification_id = y), (C.remind_me_subscribed = g), (C.remind_me_toggle_visible = E)),
            p && (S.host_broadcast_id = p),
            Object.keys(C).length > 0 && (I.live_video_event_details = C),
            Object.keys(S).length > 0 && (I.live_broadcast_details = S),
            I
          )
        },
        ve = n('9Bb1'),
        fe = n('3XMw'),
        be = n.n(fe),
        _e = n('5S/X'),
        ye = n('XvPy'),
        ge = n('Vgm9'),
        Ee = n('VTxf'),
        Ie = n('rJoH'),
        Ce = n('yoO3'),
        Se = n('EskI'),
        we = n('VS6U'),
        ke = n('HBr9'),
        De = n('MWbm'),
        Te = n('G8HL'),
        xe = n('t62R'),
        Pe = n('rHpw'),
        Ae = n('v6aA'),
        Oe = n('7JQg'),
        Le = n('zrc3'),
        Re = n('oQhu'),
        Me = (function (e) {
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
              f()(
                u()(e),
                '_eventsSeenCacheEnabled',
                e.context.featureSwitches.isTrue('live_event_interstitial_seen_cache_enabled'),
              ),
              f()(u()(e), 'state', { isPlayerFullscreen: !1, selectedCarouselItemId: void 0 }),
              f()(u()(e), '_renderPrimaryContent', function (t) {
                var n = t.isWide,
                  a = e.props,
                  r = a.carousel,
                  i = a.fetchStatus,
                  o = a.history,
                  l = a.isTOO,
                  c = a.liveEventDetails,
                  s = a.refreshStatus,
                  u = a.remindMeButtonSubscribe,
                  d = a.remindMeButtonUnsubscribe,
                  m = a.scoreData,
                  p = a.timelineDetails,
                  h = e.state.isPlayerFullscreen,
                  v = be.a.c08e7935,
                  f = e._getPollingIntervalMs(),
                  b = e._getInterstitialsToDisplay()
                return _.a.createElement(
                  ke.a,
                  { collectionName: v },
                  _.a.createElement(ye.a, {
                    carousel: r,
                    fetchStatus: i,
                    history: o,
                    interstitialOrderToDisplay: b,
                    isPlayerFullscreen: h,
                    isTOO: l,
                    isWide: n,
                    liveEventDetails: c,
                    onChildScribeAction: e._handleChildScribeAction,
                    onFetch: e._handleInitialFetch,
                    onFullscreenChange: e._handleFullscreenChange,
                    onInterstitialSubmit: e._handleInterstitialSubmit,
                    onSelectedCarouselItemChange: e._handleSelectedCarouselItemChanged,
                    onTimelinePoll: e._handleTimelinePoll,
                    pollingIntervalMs: f,
                    refreshStatus: s,
                    remindMeButtonSubscribe: u,
                    remindMeButtonUnsubscribe: d,
                    scoreData: m,
                    timelineDetails: p,
                    withFloatingComposeButton: !0,
                  }),
                )
              }),
              f()(u()(e), '_getSelectedItem', function () {
                var t = e.props.carousel,
                  n = e.state.selectedCarouselItemId
                return Object(q.p)(t, n)
              }),
              f()(u()(e), '_getSelectedItemIndex', function () {
                var t = e.props.carousel,
                  n = e._getSelectedItem()
                return t && n
                  ? Object(Le.a)(t, function (e) {
                      return e.id === n.id
                    })
                  : void 0
              }),
              f()(
                u()(e),
                '_getScribeProviderMetadata',
                Object(Re.a)(function (e, t, n, a, i) {
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
                    pe({
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
                  n(f()({}, y.a.GenericNotFound, { customAction: me.c })),
                )
              }),
              f()(u()(e), '_fetchSeenIds', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                return (0, t.fetchSeenEventIds)().catch(n)
              }),
              f()(u()(e), '_handleInterstitialSubmit', function (t) {
                var n = t.type,
                  a = e.props,
                  r = a.addSeenEventId,
                  i = a.createLocalApiErrorHandler,
                  o = a.liveEventDetails.eventId
                n === w.a.SENSITIVE && e._eventsSeenCacheEnabled && r(o).catch(i)
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
                    pe({
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
                  this._handleInitialFetch(), this._fetchSeenIds()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    a = n.liveEventDetails.eventId,
                    r = n.timelineDetails,
                    i = r.timelineId,
                    o = r.timelineLinks,
                    l = e.liveEventDetails.eventId,
                    c = e.timelineDetails,
                    s = c.timelineId,
                    u = c.timelineLinks
                  l !== a
                    ? this._handleInitialFetch()
                    : s !== i && (this._scribeTimelineTabChange(), this._scribeTimelineImpression()),
                    0 === u.length && o.length > 0 && this._scribeTimelineTabImpressions()
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
                  if (a) return _.a.createElement(Ee.a, null)
                  var u = l || q.f,
                    d = this._renderScoreCard(),
                    m = o ? _.a.createElement(xe.b, { withHashflags: !0 }, o) : q.g,
                    p = _.a.createElement(I.a, { withWhoToFollow: !1 }, d),
                    h = this.context.loggedInUserId && !s ? this._renderRightButtons() : void 0,
                    v = this._getScribeProviderMetadata(t, r, i, this._getSelectedItemIndex(), this._getSelectedItem())
                  return _.a.createElement(
                    Oe.c,
                    { data: v },
                    _.a.createElement(
                      Ce.a,
                      null,
                      E.canUseDOM ? null : this._renderPageMeta(u),
                      _.a.createElement(we.a, {
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
                    d ? _.a.createElement(ve.a, { description: d }) : null,
                    _.a.createElement(Ie.a, {
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
                    _e.b && null != p && p.slate
                      ? _.a.createElement(ie, { liveEventDetails: s, slate: null == p ? void 0 : p.slate })
                      : null,
                    _.a.createElement(g.a, { deepLink: h }),
                    c ? _.a.createElement(ue, { carousel: c, liveEventDetails: s, timelineDetails: u }) : null,
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
                    De.a,
                    { style: Be.rightButtonContainer },
                    _.a.createElement(de.a, { author: a, hashtag: c, id: i, title: o }),
                    t
                      ? null
                      : _.a.createElement(ge.a, {
                          author: a,
                          eventId: i,
                          onPress: this._handleOverflowButtonClickScribe,
                          redirectOnDelete: a ? '/'.concat(a.screen_name, '/moments') : void 0,
                          scribeNamespace: r()(r()({}, l), {}, { section: 'live_event_header' }),
                          style: Be.overflowButton,
                          title: o,
                        }),
                  )
                },
              },
              {
                key: '_renderScoreCard',
                value: function () {
                  var e = this.props.scoreData
                  return e ? _.a.createElement(Se.a, { scoreData: e, withContainer: !0, withHeader: !0 }) : null
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
                          return e.type !== w.a.SENSITIVE
                        })
                    : n
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
                    pe(
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
                    pe({
                      liveEventDetails: t,
                      timelineTabPosition: l,
                      mediaDetails: s,
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
                    a = e.scribeNamespace
                  e.timelineDetails.timelineLinks.forEach(function (e) {
                    var i = r()(r()({}, a), {}, { component: 'tabs', element: e.timelineId, action: 'impression' })
                    n(i, pe({ liveEventDetails: t }))
                  })
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      f()(Me, 'contextType', Ae.a)
      var Be = Pe.a.create(function (e) {
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
      t.default = Object(Oe.a)({ page: 'live_event_timeline' })(ne(Object(Te.a)(Me)))
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
            a = e.descriptionEntities,
            r = e.imageAttribution,
            o = e.mediaType,
            l = e.pivotText,
            c = n ? n.trim() : void 0,
            u = a
              ? {
                  description: {
                    urls: a.map(function (e) {
                      return { display_url: e.displayUrl, expanded_url: e.expandedUrl, url: e.url, indices: e.indices }
                    }),
                  },
                }
              : void 0,
            m = c ? h.a.descriptionTextParts(c, u) : []
          return i.a.createElement(
            s.a,
            { style: f.description },
            m.length
              ? i.a.createElement(
                  d.b,
                  null,
                  m.map(function (e, t) {
                    return i.a.createElement(v.b, { key: 'events_textpart_'.concat(t), linkify: !0, part: e })
                  }),
                )
              : null,
            b(t, o, r),
            l ? i.a.createElement(d.b, { color: 'gray700' }, l) : null,
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
          o = e.descriptionEntities,
          l = e.imageAttribution,
          c = e.isTOO,
          u = e.mediaType,
          m = e.pivotText,
          p = e.preTitle,
          h = e.remindMeButton,
          v = e.time,
          f = e.title,
          b = e.withHashflags,
          _ = function () {
            return t
              ? i.a.createElement(
                  s.a,
                  null,
                  i.a.createElement(a.a, { author: t, size: 'body', withLink: !0, withScreenName: !0 }),
                  v ? I(!0) : null,
                )
              : null
          },
          I = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return i.a.createElement(
              d.b,
              { color: 'gray700', numberOfLines: 1, size: 'body', style: [E.timeString, e && E.timeStringMargin] },
              v,
            )
          },
          C = function () {
            return p
              ? i.a.createElement(
                  g.a,
                  null,
                  i.a.createElement(d.b, { color: 'gray700', numberOfLines: 1, size: 'body', weight: 'bold' }, p),
                  v ? I() : null,
                )
              : null
          }
        return i.a.createElement(
          i.a.Fragment,
          null,
          c && p ? C() : _() || C(),
          i.a.createElement(d.b, { dir: 'auto', size: 'title4', style: E.title, weight: 'heavy', withHashflags: b }, f),
          r || n || l
            ? i.a.createElement(y, {
                coverTweet: n,
                description: r,
                descriptionEntities: o,
                imageAttribution: l,
                mediaType: u,
                pivotText: m,
              })
            : null,
          h ? i.a.createElement(s.a, { style: E.remindMeButton }, h) : null,
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
        S = n.n(C),
        w = (n('z84I'), n('/Ikv')),
        k = n('muX9'),
        D = function (e) {
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
        T = function (e) {
          return void 0 !== e.content ? f.a.createElement('meta', e) : null
        },
        x = function (e) {
          return f.a.createElement.apply(
            f.a,
            [k.a, null].concat(
              S()(
                (function (e) {
                  return D(e).map(T)
                })(e),
              ),
            ),
          )
        },
        P = n('6/RC'),
        A = n('es0u'),
        O = (n('KqXw'), n('WNMA'), n('yiKp')),
        L = n.n(O),
        R = n('ddV6'),
        M = n.n(R),
        B = n('3zvM'),
        F = n('lMB6'),
        N = Object(B.e)({
          namespace: 'broadcasts',
          fetchOneContext: 'FETCH_BROADCAST',
          fetchOneEndpoint: function (e) {
            return e.Broadcasts.fetchBroadcast
          },
          fetchOneParams: function (e, t) {
            var n = M()(e, 1)[0]
            return L()({ ids: [n] }, t)
          },
        }),
        U = F.a.register(N),
        V = n('kGix'),
        j = n('Hw0q'),
        z = n('G6rE'),
        H = n('rxPX'),
        W = n('0KEI'),
        G = function (e, t) {
          return t.match.params.broadcastId
        },
        q = function (e, t) {
          return U.select(e, G(0, t))
        },
        Y = function (e, t) {
          var n = q(e, t)
          return n && n.twitter_user_id ? z.e.select(e, n.twitter_user_id) : void 0
        },
        X = function (e, t) {
          return t.location.state ? t.location.state.promotedContent : void 0
        },
        K = function (e, t) {
          return q(e, t) ? V.a.LOADED : U.selectFetchStatus(e, G(0, t))
        },
        Q = Object(j.b)('t'),
        J = Object(H.a)()
          .propsFromState(function () {
            return {
              broadcastId: G,
              broadcast: q,
              twitterBroadcaster: Y,
              fetchStatus: K,
              promotedContent: X,
              timecode: Q,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(W.createLocalApiErrorHandlerWithContextFactory)('BROADCAST_SCREEN'),
              fetchBroadcast: U.fetchOne,
              fetchUserIfNeeded: z.e.fetchOneIfNeeded,
            }
          })
          .withAnalytics({ page: 'broadcast' }),
        Z = n('SrtL'),
        $ = n('GOQE'),
        ee = n('v//M'),
        te = n('LVU8'),
        ne = n('zlxh'),
        ae = n('rJoH'),
        re = n('yoO3'),
        ie = n('7JQg'),
        oe = n('VS6U'),
        le = n('B5iK'),
        ce = n('pynj'),
        se = n('Modb'),
        ue = n('lklz'),
        de = n('MWbm'),
        me = n('G8HL'),
        pe = n('t62R'),
        he = n('Wms4'),
        ve = n('jV+4'),
        fe = n('TIdA'),
        be = n('A91F'),
        _e = n('rHpw'),
        ye = n('3XMw'),
        ge = n.n(ye),
        Ee = { url: 'https://pbs.twimg.com/lex/placeholder_live_nomargin.png', width: 1920, height: 1080 },
        Ie = { objectFitVideo: 'contain' },
        Ce = function (e) {
          return e && e.trim().length > 0
        },
        Se = ge.a.ac4c73d8,
        we = ge.a.e39b368e,
        ke = ge.a.f2382014,
        De = ge.a.e3aac82a,
        Te = ge.a.hd0bc1eb,
        xe = ge.a.bea1f26a,
        Pe = ge.a.jceadc3e,
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
                        return Te({ name: r })
                      case I:
                      case E:
                        return xe({ name: r })
                      case y:
                      default:
                        return Pe
                    }
                }
                return Pe
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
                return f.a.createElement(ee.a, {
                  accessibilityLabel: De,
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
                    de.a,
                    { style: Me.header },
                    e._renderUserName(),
                    f.a.createElement(
                      de.a,
                      { style: Me.title },
                      f.a.createElement(pe.b, { size: 'headline1', style: Me.titleText, weight: 'bold' }, t),
                      e._isLive() ? f.a.createElement(he.a, { type: 'live' }, ke) : null,
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
                      de.a,
                      { style: Me.userNameWrapper },
                      f.a.createElement(
                        ce.a,
                        { screenName: a.screen_name },
                        f.a.createElement(ve.a, {
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
                      de.a,
                      { style: Me.userNameWrapper },
                      f.a.createElement(ve.a, { name: n.user_display_name, profileImageUrl: n.profile_image_url }),
                    )
                  : void 0
              }),
              h()(c()(e), '_getScribeData', function () {
                return { items: [{ live_broadcast_details: { target_broadcast_id: e.props.broadcastId } }] }
              }),
              h()(c()(e), '_fetchTwitterBroadcaster', function () {
                var t = e.props,
                  n = t.broadcast,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetchUserIfNeeded,
                  i = n && n.twitter_user_id
                if (i) return r(i).catch(a($.a))
              }),
              h()(c()(e), '_startTimer', function () {
                e._stopTimer(), (e._timer = new le.b(3e4).interval(e._fetchUpdates)), e._timer.start()
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
                    r(h()({}, b.a.GenericNotFound, { customAction: te.c })),
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
                  return f.a.createElement(
                    ie.c,
                    { data: this._getScribeData() },
                    f.a.createElement(
                      re.a,
                      null,
                      this._renderMetaTags(t),
                      f.a.createElement(oe.a, {
                        backLocation: '/',
                        documentTitle: t,
                        history: e,
                        primaryContent: this._renderPrimaryContent,
                        sidebarContent: f.a.createElement(A.a, null),
                        title: we,
                      }),
                      f.a.createElement(Z.a, { title: t, withMeta: !1 }),
                    ),
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
                  return P.canUseDOM
                    ? null
                    : f.a.createElement(
                        f.a.Fragment,
                        null,
                        f.a.createElement(ae.a, { canonical: c, description: e, title: o, type: 'article' }),
                        f.a.createElement(_.a, { deepLink: l }),
                        f.a.createElement(x, { broadcast: n, id: a, timecode: r, title: e, url: s }),
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
                    ? f.a.createElement(de.a, { style: Me.labelOverlay }, f.a.createElement(he.a, null, n))
                    : null
                },
              },
              {
                key: '_renderPreLiveSlate',
                value: function () {
                  var e = this.props.broadcast,
                    t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : Ee
                  return f.a.createElement(
                    de.a,
                    null,
                    f.a.createElement(
                      k.a,
                      null,
                      f.a.createElement('meta', { content: t.url, property: 'og:image' }),
                      f.a.createElement('meta', { content: t.width, property: 'og:image:width' }),
                      f.a.createElement('meta', { content: t.height, property: 'og:image:height' }),
                    ),
                    f.a.createElement(fe.a, {
                      accessibilityLabel: Se,
                      aspectMode: be.a.exact(_e.a.theme.aspectRatios.landscape),
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
                  var l = t && Object(ne.m)(t.image_url_small, t.image_url_medium, i)
                  return f.a.createElement(
                    de.a,
                    { style: Me.card },
                    f.a.createElement(
                      k.a,
                      null,
                      f.a.createElement('meta', { content: i.url, property: 'og:image' }),
                      f.a.createElement('meta', { content: i.width, property: 'og:image:width' }),
                      f.a.createElement('meta', { content: i.height, property: 'og:image:height' }),
                    ),
                    f.a.createElement(se.a, {
                      accessibilityLabel: Se,
                      aspectRatio: 1.7777777777777777,
                      customVariants: l,
                      displayOptions: Ie,
                      includeBroadcastEventAssociation: !0,
                      poster: i,
                      promotedContent: a,
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
                    a = t.title
                  if (!n || !a) return null
                  var r = '/i/events/'.concat(n),
                    i = f.a.createElement(pe.b, { color: 'primary', link: r }, a)
                  return f.a.createElement(
                    pe.b,
                    { style: Me.relatedEvent },
                    f.a.createElement(ge.a.I18NFormatMessage, { $i18n: 'c43d1678' }, i),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        Me = _e.a.create(function (e) {
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
      t.default = J(Object(me.a)(Re))
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
                  return S(t, n, a, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        S = Object(y.a)(function (e, t, n, a) {
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
        return S
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
    IJsT: function (e, t, n) {
      'use strict'
      n('hBvt')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('I4+6'),
        o = n('cm6r'),
        l = n('rHpw'),
        c = n('MWbm'),
        s = function (e) {
          var t = e.accessibilityLabel,
            n = e.containerStyle,
            a = e.isCompact,
            s = e.link,
            d = e.lower,
            m = e.onClick,
            p = e.stackLayoutLowerStyle,
            h = e.stackLayoutUpperStyle,
            v = e.upper,
            f = e.withInsetFocusRing,
            b = e.withInteractiveStyling,
            _ = i.a.generate({
              backgroundColor: l.a.theme.colors.transparent,
              color: l.a.theme.colors.primary,
              insetFocusRing: f,
            }),
            y = r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(c.a, { style: [u.defaultUpperContainerStyle, h, a && { height: 'auto' }] }, v),
              d ? r.a.createElement(c.a, { style: [u.defaultLowerContainerStyle, p] }, d) : null,
            )
          return r.a.createElement(
            o.a,
            {
              accessibilityLabel: t,
              interactive: b,
              interactiveStyles: b ? _ : void 0,
              link: s,
              onClick: m,
              style: [u.root, n],
            },
            y,
          )
        }
      s.defaultProps = { withInsetFocusRing: !0, withInteractiveStyling: !1 }
      var u = l.a.create(function (e) {
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
      t.a = s
    },
    Mhzv: function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('zb92'),
        o = Object(i.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(16), n.e(21), n.e(191)]).then(n.bind(null, 'wHP+'))
          },
          renderPlaceholder: function () {
            return r.a.createElement('div', null)
          },
        })
      t.a = o
    },
    QtuH: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('m3Bd'),
        c = n.n(l),
        s = (n('tVqn'), n('ERkP')),
        u = n.n(s),
        d = n('zlxh'),
        m = n('3XMw'),
        p = n.n(m),
        h = n('MWbm'),
        v = n('/yvb'),
        f = n('rHpw'),
        b = n('I6Uj'),
        _ = ['id', 'isInlineButton', 'onShareMomentScribe'],
        y = p.a.i8d6a27e,
        g = p.a.hbae0a4e,
        E = p.a.j51ab633,
        I = { page: 'live_event_timeline', section: 'live_event_header' },
        C = { element: 'share_moment_inline_button', page: 'live_event_timeline', section: 'live_event_header' },
        S = function (e) {
          var t = e.author,
            n = e.hashtag,
            a = e.title,
            r = (a && a.trim()) || ''
          return w(t) ? k(t.screen_name, n, r) : n
        },
        w = function (e) {
          return !!e
        },
        k = function (e, t, n) {
          return t ? y({ author: e, timelineHashtag: t, title: n }) : g({ author: e, title: n })
        }
      function D(e) {
        return u.a.createElement(
          h.a,
          { style: T.buttonContainer },
          u.a.createElement(v.a, r()({}, e, { type: 'primaryFilled' }), E),
        )
      }
      var T = f.a.create(function (e) {
        return { buttonContainer: { marginTop: e.spaces.space16, flexDirection: 'row' } }
      })
      t.a = function (e) {
        var t = e.id,
          n = e.isInlineButton,
          a = e.onShareMomentScribe,
          r = c()(e, _),
          i = Object(d.j)(t),
          l = S(r)
        return (
          u.a.useEffect(
            function () {
              n && a && a(o()({ action: 'impression' }, C))
            },
            [n, a],
          ),
          u.a.createElement(b.a, { ButtonComponent: n ? D : void 0, scribeNamespace: n ? C : I, shareText: l, url: i })
        )
      }
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
    TW8A: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        S = n('RqPI'),
        w = n('iUle'),
        k = function (e) {
          return function (t, n, a) {
            var r = a.api,
              i = n(),
              o = Object(S.r)(i) || '',
              l = Object(C.c)(i),
              c = Object(w.a)(o),
              s = { moment_id: e, teamUserId: l }
            return r.Moments.delete(s).then(function () {
              t([I.a.deleteOne(e), c.removeEntry('moment-'.concat(e))])
            })
          }
        },
        D = n('rxPX'),
        T = Object(D.a)()
          .propsFromState(function () {
            return { activeTeamId: C.c }
          })
          .propsFromActions(function () {
            return { addToast: E.b, deleteMoment: k }
          })
          .withAnalytics({ component: 'action_sheet' }),
        x = n('ACNv'),
        P = n('3XMw'),
        A = n.n(P),
        O = n('Rp9C'),
        L = n('TnY3'),
        R = n('v6aA'),
        M = n('hiGS'),
        B = n('I/9y'),
        F = n('TW8A'),
        N = n('xrkw'),
        U = n('zIWA'),
        V = A.a.e8dff578,
        j = A.a.fcc64f01,
        z = A.a.ea193d66,
        H = A.a.e5227fe0,
        W = A.a.d0df844c,
        G = A.a.fd61ab81,
        q = A.a.aaae5e7f,
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
                        confirmation: { label: Y, headline: G, text: q, confirmButtonType: 'destructiveFilled' },
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
                    : n && o.push({ onClick: e._handleReport, text: j, Icon: U.a }),
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
                    ? f.a.createElement(x.default, { actionItems: this._getActionItems(), onClose: this.props.onClose })
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(K, 'contextType', R.a)
      var Q = T(K),
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
        return la
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
        S = n('3XMw'),
        w = n.n(S),
        k = w.a.cfe836d1,
        D = w.a.efb132c2
      w.a.f27deeea
      var T = function (e) {
          return E.a[e.currency_code.toUpperCase()](parseInt(e.micro_value, 10) / 1e6)
        },
        x = function (e, t) {
          var n = T(e)
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
        P = function (e, t) {
          var n = parseInt(t.micro_value, 10),
            a = parseInt(e.micro_value, 10),
            r = Math.round(((n - a) / n) * 100)
          return k({ percent: r })
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
                      formattedPercentOff: h ? P(p, h) : void 0,
                      formattedPreviousPrice: h ? T(h) : void 0,
                      formattedPrice: x(p, a),
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
              accessibilityLabel: D({ title: u, description: o, price: s }),
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
        M = Object(L.e)({ namespace: 'commerceItems' }),
        B = o()({}, M),
        F = R.a.register(B),
        N = n('rxPX'),
        U = function (e, t) {
          var n = t.commerceItemId
          return n ? F.select(e, n) : void 0
        },
        V = Object(N.a)().propsFromState(function () {
          return { commerceItem: U }
        }),
        j = ['__typename'],
        z = V(function (e) {
          var t = e.commerceItem,
            n = e.onClick
          switch (null == t ? void 0 : t.__typename) {
            case 'CommerceProduct':
              t.__typename
              var a = r()(t, j)
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
        G = (n('jwue'), n('+oxZ'), n('FGLp')),
        q = n('MWbm'),
        Y = { threshold: 0.01 },
        X = function (e) {
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
            Object(G.a)(function () {
              if ('IntersectionObserver' in window) {
                var e = new IntersectionObserver(i, Y),
                  t = r.current
                null != t && e.observe(t)
                return function () {
                  var t = r.current
                  null != t && e.unobserve(t), e.disconnect()
                }
              }
            }),
            g.a.createElement(q.a, { ref: r, style: a }, t)
          )
        },
        K = n('Rp9C'),
        Q = n('FS1z'),
        J = n('Irs7'),
        Z = n('FIs5'),
        $ = n('rHpw'),
        ee = w.a.e9f1fbcb,
        te = w.a.c9b302f8,
        ne = function () {
          return g.a.createElement(Z.a, { header: ee, message: te })
        },
        ae = $.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space8, marginBottom: e.spaces.space56 },
            cell: { marginHorizontal: '1%', marginTop: e.spaces.space12, marginBottom: e.spaces.space20, width: '48%' },
          }
        }),
        re = Object(J.a)(
          W(function (e) {
            var t = e.analytics,
              n = e.commerceItems,
              a = e.module,
              r = t.contextualScribeData
            g.a.useEffect(
              function () {
                t.scribe({ action: 'impression', data: r })
              },
              [t, r],
            )
            var i = function (e, a) {
                var i = K.a.addCommerceDetailsToItems(r, n, e)
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
              { style: ae.root },
              g.a.createElement(Q.a, {
                module: a,
                noItemsRenderer: ne,
                numColumns: 2,
                renderer: function (e) {
                  var t = e.item
                  return g.a.createElement(
                    X,
                    { onImpression: o(t), style: ae.cell },
                    g.a.createElement(z, { commerceItemId: t, onClick: l(t) }),
                  )
                },
              }),
            )
          }),
        ),
        ie = n('dwig'),
        oe = n('kGix'),
        le = n('v//M'),
        ce = n('0+qk'),
        se = (n('2G9S'), n('hBvt'), n('uFXj'), n('ho0z'), n('G6rE')),
        ue = Object(N.a)()
          .propsFromState(function () {
            return { loggedInUser: se.e.selectLoggedInUser }
          })
          .adjustStateProps(function (e) {
            var t = e.loggedInUser
            return { userAvatarURI: t && t.profile_image_url_https, userName: t && t.name }
          })
          .withAnalytics(),
        de = n('cm6r'),
        me = n('XP29'),
        pe = n('cjZk'),
        he = n('3rWK'),
        ve = n('ll3R'),
        fe = w.a.b8f0483e,
        be = w.a.e349147b,
        _e = (function (e) {
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
                    de.a,
                    {
                      accessibilityLabel: fe,
                      interactiveStyles: null,
                      link: t ? void 0 : n,
                      onClick: t ? void 0 : this._handleClick,
                      style: [ye.root, o && ye.borderBottom],
                    },
                    g.a.createElement(me.a, { accessibilityLabel: i, size: 'xxLarge', uri: r }),
                    g.a.createElement(
                      q.a,
                      { style: [ye.column, ye.bodyColumn] },
                      g.a.createElement(
                        q.a,
                        { style: [ye.fakeInput, t && ye.disabled] },
                        g.a.createElement(I.b, { color: 'gray700', numberOfLines: 1, size: 'subtext1' }, a),
                      ),
                      l
                        ? g.a.createElement(
                            g.a.Fragment,
                            null,
                            g.a.createElement(pe.a, { style: ye.icon }),
                            g.a.createElement(he.a, { style: ye.icon }),
                            g.a.createElement(ve.a, { style: ye.icon }),
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
      _()(_e, 'defaultProps', { link: '/compose/tweet', promptLabel: be, withBorder: !1, withComposeIcons: !0 })
      var ye = $.a.create(function (e) {
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
        ge = ue(_e),
        Ee = n('s3M2'),
        Ie = n.n(Ee),
        Ce = n('ddV6'),
        Se = n.n(Ce),
        we = (n('M+/F'), n('RrqW'))
      var ke = function (e) {
          var t,
            n = e.children,
            a = e.onInterstitialSubmit,
            r = g.a.useState(e.interstitials || []),
            i = Se()(r, 2),
            o = i[0],
            l = i[1],
            c = function () {
              var e = Ie()(o),
                t = e[0],
                n = e.slice(1)
              l(n), a && a(t)
            }
          return o
            ? (t = o && o[0])
              ? (function (e) {
                  var t = e.isFullPageInterstitial,
                    a = e.screenName,
                    r = e.type,
                    i = g.a.createElement(we.b, { onPress: c, screenName: a, type: r })
                  return t ? i : n(i)
                })(t)
              : n()
            : n()
        },
        De = n('wAC9'),
        Te = function (e) {
          return Object(De.a)({
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
        xe = (n('jQ3i'), n('x4t0'), n('QtuH')),
        Pe = n('zrc3'),
        Ae = n('8/3a'),
        Oe =
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
        Le = n('dgjd'),
        Re = n('n4Eu'),
        Me = n('vbJ7'),
        Be = n('oSwX')
      function Fe(e) {
        var t,
          n = g.a.useState(0),
          a = Se()(n, 2),
          r = a[0],
          i = a[1],
          l = Object(Le.a)(e.audioSpaceId).space
        if (!l) return null
        var c = $.a.theme.colors.purple500
        if (l.hostPalette) {
          var s = Re.a.get(l.hostPalette)
          s && (c = Me.a.rgbaToCss(o()(o()({}, s.rgb), {}, { alpha: 1 })))
        }
        return g.a.createElement(
          q.a,
          {
            onLayout: function (e) {
              var t = e.nativeEvent.layout.width
              i(t * Ue)
            },
            style: [{ backgroundColor: c }, Ne.container],
          },
          g.a.createElement(Be.default, {
            size: 'custom',
            style: { width: r, height: r },
            uri: null === (t = l.host) || void 0 === t ? void 0 : t.avatar_url,
          }),
        )
      }
      var Ne = $.a.create(function (e) {
          return { container: { alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' } }
        }),
        Ue = 0.39,
        Ve = n('boUI'),
        je = n('Wms4'),
        ze = n('zlxh'),
        He = w.a.f2382014,
        We = w.a.g66c8347,
        Ge = function (e) {
          var t = e.playbackDuration
          switch (e.type) {
            case ze.e.LIVE_BROADCAST:
              return g.a.createElement(je.a, { type: 'live' }, He)
            case ze.e.REPLAY_BROADCAST:
              return g.a.createElement(je.a, { bold: !0 }, We)
            case ze.e.VOD:
              return g.a.createElement(
                je.a,
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
            case ze.e.GIF:
              return g.a.createElement(je.a, { bold: !0 }, 'GIF')
            default:
              return null
          }
        },
        qe = n('Tg44')
      var Ye = { liveSpace: w.a.db4620aa, recordedSpace: w.a.c958e691 },
        Xe = n('hqKg'),
        Ke = n('H9MA'),
        Qe = n('oEGd'),
        Je = Object(Xe.createSelector)(Ke.c, function (e) {
          return { dataSaverMode: e }
        }),
        Ze = Object(Qe.c)(Je),
        $e = n('prG5'),
        et = n('A91F'),
        tt = w.a.i3f7ff0f,
        nt = (function (e) {
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
                      ? g.a.createElement($e.a, {
                          accessibilityLabel: tt,
                          aspectMode: et.a.exact($.a.theme.aspectRatios.landscape),
                          backgroundColor: $.a.theme.colors.gray50,
                          cropCandidates: r,
                          customVariants: o,
                          hideAcceptOverlay: !0,
                          image: i,
                          onError: this._handleError,
                        })
                      : g.a.createElement(q.a, { style: at.fallback })
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
                        r = Object(ze.h)(n),
                        i = Object(ze.h)(a),
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
        at = $.a.create(function (e) {
          return { fallback: { backgroundColor: e.colors.gray50 } }
        }),
        rt = Ze(nt),
        it = n('jV+4'),
        ot = n('9Xij'),
        lt = n('855f'),
        ct = n('vCAy'),
        st = n('I4+6'),
        ut = ['views', 'viewers'],
        dt = (function (e) {
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
                    de.a,
                    {
                      accessibilityRole: 'button',
                      focusable: !0,
                      interactiveStyles: ht,
                      onClick: e,
                      style: pt.carouselItem,
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
                    return g.a.createElement(it.a, {
                      isVerified: a,
                      name: t,
                      screenName: n,
                      style: pt.userAttribution,
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
                    ot.a,
                    { ratio: $.a.theme.aspectRatios.landscape, style: pt.image },
                    this._renderSocialProof(e),
                    t && g.a.createElement(q.a, { style: pt.selectedOverlay }),
                  )
                },
              },
              {
                key: '_renderSocialProof',
                value: function (e) {
                  var t = this.props.mediaItem.carouselItemInfo || {},
                    n = t.audiospace,
                    a = t.playbackDuration,
                    r = t.socialProof,
                    i = t.type,
                    o =
                      r && ut.includes(r.type)
                        ? g.a.createElement(
                            je.a,
                            null,
                            g.a.createElement(
                              q.a,
                              { style: pt.horizontalContainer },
                              g.a.createElement(Ve.a, null),
                              g.a.createElement(I.b, null, lt.a.getTruncatedCount(r.count, !0)),
                            ),
                          )
                        : null
                  return g.a.createElement(
                    g.a.Fragment,
                    null,
                    e,
                    g.a.createElement(mt, {
                      audioSpaceId: null == n ? void 0 : n.id,
                      playbackDuration: a,
                      type: i,
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
                    ? g.a.createElement(Fe, { audioSpaceId: t.id })
                    : n
                    ? g.a.createElement(rt, { slate: n })
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      function mt(e) {
        var t = e.audioSpaceId,
          n = e.playbackDuration,
          a = e.type,
          r = e.viewCount,
          i = (function (e) {
            var t,
              n = Object(Le.a)(e || ''),
              a = n.space,
              r = n.utils,
              i = r.is.Running,
              o = r.is.replayable,
              l = r.is.NotStarted
            return (
              (i || o || l) &&
                ((t = { bold: !0, background: void 0, children: void 0 }),
                i
                  ? ((t.background = 'purple500'), (t.children = Ye.liveSpace))
                  : o
                  ? (t.children = Ye.recordedSpace)
                  : l &&
                    null != a &&
                    a.scheduled_start &&
                    (t.children = qe.a.formatScheduledStartMs(a.scheduled_start).node)),
              t
            )
          })(t),
          o = t ? g.a.createElement(je.a, i) : Ge({ playbackDuration: n, type: a })
        return g.a.createElement(ct.a, { align: 'left' }, o, r)
      }
      var pt = $.a.create(function (e) {
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
        ht = st.a.generate({
          backgroundColor: $.a.theme.colors.transparent,
          color: $.a.theme.colors.primary,
          customFocusBackgroundColor: $.a.theme.colors.transparent,
          insetFocusRing: !0,
        }),
        vt = n('6iuV'),
        ft = Object.freeze({
          CarouselImpression: 'carousel_impression',
          TileClick: 'tile_click',
          TileImpression: 'tile_impression',
          TileAutoClick: 'tile_auto_click',
        }),
        bt = { action: ft.CarouselImpression },
        _t = { action: ft.TileAutoClick },
        yt = { action: ft.TileImpression },
        gt = { action: ft.TileClick },
        Et = (function (e) {
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
                    return a(gt)
                  })
                }
              }),
              _()(m()(e), '_handleCarouselChildImpression', function (t) {
                ;(0, e.props.onCarouselScribe)(yt, { tilePosition: t })
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
                  ;(this._impressionTracker = new Oe(this._handleCarouselChildImpression)),
                    this._shouldDisplayCarousel() && e(bt)
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
                  this._shouldDisplayCarousel() && a.length !== t.length && r(bt)
                },
              },
              {
                key: 'render',
                value: function () {
                  return this._shouldDisplayCarousel()
                    ? g.a.createElement(
                        vt.a,
                        {
                          onVisibleRangeChange: this._handleVisibleRangeChange,
                          style: It.carousel,
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
                    return g.a.createElement(dt, {
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
        It = $.a.create(function (e) {
          return { carousel: { paddingTop: e.spaces.space16 } }
        }),
        Ct = Et,
        St = n('/yvb'),
        wt = w.a.j1d352d7,
        kt = w.a.d18909d4,
        Dt = { element: 'reminder_button' },
        Tt = Object.freeze({ impression: 'impression', click: 'click' })
      var xt = function (e) {
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
              null === (e = c.current) || void 0 === e || e.onRemindButtonScribe(o()({ action: Tt.impression }, Dt))
            }, [])
          var s = l ? 'primaryOutlined' : 'primaryFilled',
            u = l ? wt : kt
          return g.a.createElement(
            St.a,
            {
              onPress: function () {
                n(t, { remind_me: !l, notification_id: i }), a(o()({ action: Tt.click }, Dt))
              },
              size: 'medium',
              type: s,
            },
            u,
          )
        },
        Pt = n('EskI'),
        At = n('v6aA'),
        Ot = n('0yYu'),
        Lt = n('97Jx'),
        Rt = n.n(Lt),
        Mt = n('ZUOq'),
        Bt = n('MMRb'),
        Ft = n('zHh/'),
        Nt = Object(Xe.createSelector)(Ke.d, Bt.selectDrawerVisibility, function (e, t) {
          return { canAutoplay: Object(Ft.a)(e), dmDrawerVisibility: t }
        }),
        Ut = Object(Qe.c)(Nt),
        Vt = n('7JQg'),
        jt = n('AQ79'),
        zt = g.a.createContext({ dockRequested: !1, closeRequested: !1 }),
        Ht = n('MXDK'),
        Wt = { component: 'dock' },
        Gt = Object.freeze({
          dockedOnScroll: 'dock_on_scroll',
          undockOnScroll: 'undock_on_scroll',
          dismissTap: 'dismiss_tap',
          undockTap: 'undock_tap',
        })
      var qt = function (e) {
          var t = g.a.useContext(At.a).featureSwitches,
            n = g.a.useRef(null),
            a = g.a.useState(!1),
            r = Se()(a, 2),
            i = r[0],
            l = r[1],
            c = g.a.useState(!1),
            s = Se()(c, 2),
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
                      (d(e), p(o()(o()({}, Wt), {}, { action: e ? Gt.dockedOnScroll : Gt.undockOnScroll })))
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
                    Ht.d({ featureSwitches: t, top: r })
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
                  l(!0), d(!1), p(o()(o()({}, Wt), {}, { action: Gt.dismissTap }))
                },
                requestUndock: function () {
                  d(!1), p(o()(o()({}, Wt), {}, { action: Gt.undockTap }))
                },
              }),
            )
          )
        },
        Yt = n('gZV8'),
        Xt = n('xKuM'),
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
      Zt.metadata = { width: 24, height: 24 }
      var $t = Zt,
        en = n('hOZg'),
        tn = w.a.e839db39,
        nn = w.a.a7a119ec,
        an = (function (e) {
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
                  zt.Provider,
                  { value: { closeRequested: n, dockRequested: a } },
                  a && c,
                  g.a.createElement(
                    q.a,
                    { style: a ? [rn.dockedContainer, e._getDockedBottomStyle()] : void 0 },
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
                    Yt.e,
                    { onPlacementChange: this._handlePlacementChange, style: rn.root },
                    g.a.createElement(qt, {
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
                  return g.a.createElement(Xt.a, {
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
                    { style: rn.dockingControls },
                    g.a.createElement(St.a, {
                      accessibilityLabel: nn,
                      icon: g.a.createElement($t, null),
                      onPress: e,
                      type: 'brandText',
                    }),
                    g.a.createElement(St.a, {
                      accessibilityLabel: tn,
                      icon: g.a.createElement(en.a, null),
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
      _()(an, 'defaultProps', {
        placeholder: g.a.createElement(ot.a, { ratio: $.a.theme.aspectRatios.landscape }),
        visibleThreshold: 0,
      })
      var rn = $.a.create(function (e) {
          return {
            root: { zIndex: 1 },
            dockedContainer: {
              bottom: 0,
              right: 0,
              marginEnd: e.spaces.space20,
              boxShadow: e.boxShadows.small,
              maxWidth: Mt.a.columnWidths.secondary.normal,
              position: 'fixed',
              width: Mt.a.columnWidths.secondary.normal,
            },
            dockingControls: { flexDirection: 'row', alignItems: 'baseline' },
          }
        }),
        on = an,
        ln = n('nT9l'),
        cn = n('hACr'),
        sn = (function (e) {
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
                                un.verticalAlignment,
                                ((e = n), { backgroundImage: 'linear-gradient(transparent 0%, '.concat(e, ' 100%)') }),
                              ],
                            },
                            g.a.createElement(q.a, { style: un.wrapper }, r, i),
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
                        { style: un.mediaLabelWrapper },
                        g.a.createElement(
                          I.b,
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
        })(g.a.Component)
      _()(sn, 'defaultProps', { backgroundColor: $.a.theme.colors.translucentBlack77 })
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
        dn = sn,
        mn = n('TIdA'),
        pn = n('wD1h'),
        hn = n('3dad'),
        vn = w.a.f93bb3ee,
        fn = (function (e) {
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
                      dn,
                      { mediaLabel: i ? void 0 : s },
                      g.a.createElement(mn.a, {
                        accessibilityLabel: h,
                        aspectMode: et.a.exact($.a.theme.aspectRatios.landscape),
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
                        cn.a,
                        { handlers: _()({}, pn.a.shortcuts.openMediaModal, e._handleOpenPhotoModal) },
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
                    t = e && hn.a.getOriginalImage(e)
                  return e && t
                    ? g.a.createElement(ln.a, {
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
                  return Object(ze.s)(n, t) || void 0
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        bn = n('oQhu'),
        _n = n('XmKV'),
        yn = 'events-player',
        gn = n('Modb'),
        En = n('lklz'),
        In = n('Mhzv'),
        Cn = n('38/B'),
        Sn = n('HT/6'),
        wn = n('XrEN'),
        kn = n('mf9H'),
        Dn = w.a.b0b38773,
        Tn = { autoplayPrioritizationPolicy: _n.b, minimumVisibilityForAutoplay: Yt.b },
        xn = new kn.a(Tn),
        Pn = { hideFullScreenButton: !0 },
        An = (function (e) {
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
                Object(bn.a)(function (t, n, a, r, i, o) {
                  return function (l) {
                    var c = l.containerRef,
                      s = l.guestsState,
                      u = l.playerApi,
                      d = l.playerState
                    return g.a.createElement(In.a, {
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
                          e ? g.a.createElement(rt, { slate: e }) : null,
                          g.a.createElement(q.a, { style: On.backgroundFading }),
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
                  c = o ? Pn : void 0,
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
                      { style: a ? On.dockedContainerBackground : void 0 },
                      g.a.createElement(
                        gn.a,
                        Rt()({}, i, {
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
                    i(t), r(n ? gt : _t, o)
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
                  !Cn.a.reducedMotionEnabled &&
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
              _()(m()(e), '_getNextEligibleCarouselItemIndex', Object(bn.a)(ze.l)),
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
                    case ze.e.REPLAY_BROADCAST:
                    case ze.e.LIVE_BROADCAST:
                    case ze.e.VOD:
                      e = this._renderVideo()
                      break
                    case ze.e.GIF:
                      e = this._renderVideo({ withUpNextOverlay: !1, isGif: !0 })
                      break
                    case ze.e.SLATE:
                    default:
                      e = this._renderImage()
                  }
                  var l = a ? this._renderUserSceenName(n) : null
                  return g.a.createElement(
                    on,
                    {
                      dockBottomOffset: this._getOffsetForDrawer(),
                      isDisabled: !a,
                      onCloseDockComplete: this._handleCloseDockComplete,
                      onDockingScribeAction: i,
                      subtitle: l,
                      title: o,
                      visibleThreshold: Yt.b,
                    },
                    g.a.createElement(q.a, { style: On.container, testID: yn }, e),
                  )
                },
              },
              {
                key: '_getOffsetForDrawer',
                value: function () {
                  var e = $.a.theme.spaces,
                    t = this.props.dmDrawerVisibility,
                    n = parseInt(''.concat(e.space20), 10)
                  return t === jt.b.COLLAPSED
                    ? Mt.a.dmDrawerHeight.collapsed + n
                    : t === jt.b.EXPANDED
                    ? Mt.a.dmDrawerHeight.expanded + n
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
                    ? g.a.createElement(fn, {
                        coverMedia: n.coverMedia,
                        fallbackAccessibilityLabel: Dn,
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
                    S = y || {},
                    w = S.image,
                    k = S.periscopeVariants,
                    D = {
                      accessibilityLabel: Dn,
                      aspectRatio: $.a.theme.aspectRatios.landscape,
                      backgroundColor: $.a.theme.colors.gray0,
                      maxLoopCount: i ? void 0 : 3,
                      onFullscreenChange: _,
                      onMuteChange: this._handleMuteChange,
                      promotedContent: b,
                      playbackCoordination: this._dockableAutoplayPolicyEnabled ? kn.b : xn,
                      playbackPriority: Sn.a.DOCKABLE,
                      poster: w,
                      customVariants: k,
                      shouldPlayUnmuted: !this.state.isPlayerMuted,
                      setPlayer: this._setPlayer,
                    }
                  if (m && f)
                    (e = m),
                      (t = o()(
                        o()({}, D),
                        {},
                        {
                          videoType: 'video',
                          includeBroadcastEventAssociation: !0,
                          source: { contentId: f, variants: [], videoId: En.b.forBroadcast(m) },
                        },
                      ))
                  else if (I && C) {
                    var T = En.b.forTweet(C),
                      x = wn.a.getVideoFromCoverMedia(p),
                      P = x && wn.a.extractVideoProps(T, x, u)
                    ;(e = I), (t = P ? o()(o()({}, P), D) : void 0)
                  }
                  return g.a.createElement(zt.Consumer, null, function (a) {
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
                      (n === ze.a.TWITTER && r
                        ? (o = g.a.createElement(it.a, { screenName: r, weight: 'normal', withLink: !0 }))
                        : n === ze.a.PERISCOPE &&
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
      _()(An, 'contextType', At.a)
      var On = $.a.create(function (e) {
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
        Ln = Object(Vt.a)({ element: 'image' })(Ut(An)),
        Rn =
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
                  return Object(Pe.a)(e, function (e) {
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
                      g.a.createElement(Ot.a, null),
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
                      u = o.descriptionEntities,
                      d = o.timeString,
                      m = o.title,
                      p = r.withShareButton,
                      h = null == e || null === (t = e.mediaDetails) || void 0 === t ? void 0 : t.coverTweet,
                      v = null == e || null === (n = e.mediaDetails) || void 0 === n ? void 0 : n.coverMedia,
                      f = null == e || null === (a = e.slate) || void 0 === a ? void 0 : a.imageAttribution
                    return g.a.createElement(
                      q.a,
                      { style: Mn.contentContainer },
                      m
                        ? g.a.createElement(Ae.a, {
                            author: l,
                            coverTweet: h,
                            description: s,
                            descriptionEntities: u,
                            imageAttribution: f,
                            isTOO: i,
                            mediaType: null == v ? void 0 : v.type,
                            preTitle: i || !l ? c : '',
                            remindMeButton: this._renderRemindMeButton(),
                            time: d,
                            title: m,
                            withHashflags: !0,
                          })
                        : null,
                      this._renderScoreCard(),
                      p ? this._renderShareButton() : null,
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
                    return g.a.createElement(Ln, {
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
                      ? g.a.createElement(xt, {
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
                    return t && n ? g.a.createElement(Pt.a, { scoreData: t }) : null
                  },
                },
                {
                  key: '_renderCarousel',
                  value: function (e) {
                    var t = this.props,
                      n = t.carousel,
                      a = t.onChildScribeAction
                    return n
                      ? g.a.createElement(Ct, {
                          carousel: n,
                          onCarouselScribe: a,
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
                      a = t.eventId,
                      r = t.title,
                      i = e.onChildScribeAction,
                      o = e.timelineHashtag
                    return g.a.createElement(xe.a, {
                      author: n,
                      hashtag: o,
                      id: a,
                      isInlineButton: !0,
                      onShareMomentScribe: i,
                      title: r,
                    })
                  },
                },
                {
                  key: '_getDockingEnabled',
                  value: function (e) {
                    var t = this.props.isWide,
                      n = this.context.loggedInUserId,
                      a = [ze.e.LIVE_BROADCAST, ze.e.REPLAY_BROADCAST, ze.e.VOD]
                    return !!n && this._enableDocking && t && a.includes(e)
                  },
                },
              ]),
              n
            )
          })(g.a.Component))
      _()(Rn, 'contextType', At.a)
      var Mn = $.a.create(function (e) {
          return {
            contentContainer: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        Bn = n('9bsQ'),
        Fn = n('3AAD'),
        Nn = n('7BdX'),
        Un = n('IG4P'),
        Vn = n('fTQJ'),
        jn = n('k/OQ'),
        zn = n('mw9i'),
        Hn = n('QIgh'),
        Wn = n('8UdT'),
        Gn = n('iu0J'),
        qn = n('IcAo'),
        Yn = n('zgaL'),
        Xn = n('U+bB'),
        Kn = n('YeIG'),
        Qn = n('fs1G'),
        Jn = ['customizationInfo', 'label', 'labelType'],
        Zn = w.a.abdcd689,
        $n = w.a.a1bb552d,
        ea = w.a.b103771f,
        ta = w.a.bb980dbf,
        na = w.a.e9f1fbcb,
        aa = w.a.dfd7bbaf,
        ra = w.a.bffb7ed4,
        ia = { section: 'shop_tab', component: 'product_grid' },
        oa = function () {
          return g.a.createElement(Z.a, { header: na, message: aa })
        },
        la = (function (e) {
          h()(n, e)
          var t = f()(n)
          function n(e, a) {
            var r
            c()(this, n),
              (r = t.call(this, e, a)),
              _()(m()(r), 'state', { selectedCarouselItemId: void 0 }),
              _()(m()(r), '_render', function () {
                var e = r.props,
                  t = e.interstitialOrderToDisplay,
                  n = e.onInterstitialSubmit
                return r._refreshControlWrapper(
                  g.a.createElement(ke, { interstitials: t, onInterstitialSubmit: n }, function (e) {
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      r._renderHeader(),
                      r._renderInlineCompose(),
                      e || r._renderTimeline(),
                    )
                  }),
                )
              }),
              _()(m()(r), '_getComposeTimelineDetails', function () {
                return r.props.timelineDetails.composeDetails
              }),
              _()(m()(r), '_setSelectedCarouselItem', function (e) {
                var t = r.props.onSelectedCarouselItemChange
                t && t(e), r.setState({ selectedCarouselItemId: e.id })
              }),
              _()(m()(r), '_handleInlineComposeOnClick', function (e) {
                e.preventDefault()
                var t = r.props.history,
                  n = { pathname: '/compose/tweet', state: r._getComposeTimelineDetails() }
                t.push(n)
              }),
              _()(
                m()(r),
                '_getTimelineModuleMemoized',
                Object(bn.a)(function (e, t) {
                  return Object(Bn.a)(e, t)
                }),
              ),
              _()(
                m()(r),
                '_getLiveCommerceItemsSliceModuleMemoized',
                Object(bn.a)(function (e) {
                  return Te(e)
                }),
              ),
              _()(m()(r), '_shouldRenderInlineButton', function () {
                var e = r.props.carousel,
                  t = r.state.selectedCarouselItemId,
                  n = Object(ze.p)(e, t)
                return (
                  !(!n || !n.isMoment) &&
                  r.context.featureSwitches.isTrue('moments_new_share_variant_description_inline_button')
                )
              })
            var i = e.timelineMessageOverride,
              l = e.withTweetActionsDisabled
            return (
              (r._entryConfiguration = (function (e) {
                var t,
                  n = e.withTweetActionsDisabled
                return o()(
                  o()({}, Object(Hn.a)({ withTweetActionsDisabled: n })),
                  {},
                  ((t = {}), _()(t, Wn.b.MomentAnnotation, Yn.a), _()(t, Wn.b.EventSummary, Object(Gn.a)({})), t),
                )
              })({ withTweetActionsDisabled: l })),
              (r._timelinePreprocessor = (function (e) {
                return function (t) {
                  return e
                    ? t.map(function (t) {
                        if (t.type === Wn.b.Message) {
                          var n = { content: { content: { inlinePrompt: { headerText: e } } } }
                          return Object(qn.a)({}, t, n)
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
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.liveEventDetails,
                    a = e.onFetch
                  return g.a.createElement(le.a, {
                    accessibilityLabel: Zn,
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
                    v = Object(ze.p)(t, h)
                  return g.a.createElement(Rn, {
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
                    a = n ? $n({ hashtag: n }) : ea
                  return t && !this._shouldRenderInlineButton()
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(ge, { onClick: this._handleInlineComposeOnClick, promptLabel: a }),
                        g.a.createElement(Ot.a, null),
                      )
                    : null
                },
              },
              {
                key: '_renderTimeline',
                value: function () {
                  var e = this.props.timelineDetails.timelineId,
                    t = this._renderTimelineLinks(),
                    n = e === ze.c.SHOP ? this._renderCommerceItemSliceTimeline() : this._renderRichTimeline()
                  return t.length > 1 || (1 === t.length && t[0].isCustom)
                    ? g.a.createElement(
                        g.a.Fragment,
                        null,
                        g.a.createElement(jn.a, {
                          accessibilityLabel: ta,
                          links: t.map(function (e) {
                            return { key: e.key, label: e.label, isActive: e.isActive, to: o()({}, e.to) }
                          }),
                        }),
                        g.a.createElement(q.a, { style: ca.timelineContainer }, n),
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
                      l = r()(t, Jn),
                      c = !Object(Kn.a)(n),
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
                  return e === ze.d.New
                    ? g.a.createElement(je.a, { background: 'primary', bold: !0, style: ca.labelAnnotation }, ra)
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
                    { style: ca.timelineLabel },
                    n && n.url ? g.a.createElement(Xn.a, { source: n.url, style: ca.timelineLabelBadge }) : null,
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
                    r = void 0 === a ? ta : a,
                    i = e.onTimelinePoll,
                    o = e.pollingIntervalMs,
                    l = e.timelineDetails,
                    c = l.eventId,
                    s = l.timelineId,
                    u = e.withFloatingComposeButton,
                    d = this._getTimelineModuleMemoized(c, s),
                    m = t || n || !u ? null : this._renderFloatingComposeButton()
                  return g.a.createElement(
                    ie.a,
                    { component: zn.a, fab: m },
                    g.a.createElement(Vn.a, {
                      anchoring: Fn.a,
                      entryConfiguration: this._entryConfiguration,
                      module: d,
                      onTimelinePoll: i,
                      pollingIntervalMsOverride: o,
                      preprocessEntryList: this._timelinePreprocessor,
                      prerollDisplayLocation: Nn.c.OTHER,
                      refreshControl: null,
                      renderEmptyState: oa,
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
                  return g.a.createElement(Vt.c, { namespace: ia }, g.a.createElement(re, { module: t }))
                },
              },
              {
                key: '_renderFloatingComposeButton',
                value: function () {
                  var e = this.props.history
                  return g.a.createElement(ce.a, { getLocationState: this._getComposeTimelineDetails, history: e })
                },
              },
              {
                key: '_refreshControlWrapper',
                value: function (e) {
                  var t = this.props,
                    n = t.onFetch,
                    a = t.refreshStatus
                  return g.a.createElement(Un.a, { isRefreshing: a === oe.a.LOADING, onRefresh: n }, e)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      _()(la, 'contextType', At.a), _()(la, 'defaultProps', { onChildScribeAction: Qn.a })
      var ca = $.a.create(function (e) {
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
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              o.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
        return x
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
        S = 'image',
        w = n('TIdA'),
        k = n('a6qo'),
        D = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        T = C.a.f93bb3ee,
        x = (function (e) {
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
                  s = o()(i, D)
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(
                    w.a,
                    r()({}, s, { accessibilityLabel: l, onVariantSelection: n, previewMode: a, testID: S }),
                  ),
                  c ? g.a.createElement(k.a, { align: 'left', altLabel: l }) : null,
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
                    acceptLabel: T,
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
    xrkw: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
        c = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [l.a.root, e.style],
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
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
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
              return Promise.all([n.e(0), n.e(223)]).then(n.bind(null, 'tFiq'))
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
          return S
        }),
        n.d(t, 'k', function () {
          return D
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
          return U
        }),
        n.d(t, 'i', function () {
          return V
        }),
        n.d(t, 'a', function () {
          return z
        }),
        n.d(t, 'h', function () {
          return X
        }),
        n.d(t, 'l', function () {
          return Q
        }),
        n.d(t, 'c', function () {
          return J
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
          AUDIOSPACE: 'audiospace',
          VOD: 'vod',
          GIF: 'gif',
          SLATE: 'slate',
        }),
        C = Object.freeze({ New: 'New' }),
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
        w = Object(d.a)(function (e, t) {
          return e.slates && t && e.slates[t]
        }),
        k = function (e, t) {
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
                    a = T(e, n)
                  return a && { small: a.image_url_small, medium: a.image_url_medium }
                }
              })(t, e) || {},
            d = a && S(s.small, s.medium, a)
          return n && a
            ? { id: n, image: a, imageAttribution: l, periscopeVariants: d, cropCandidates: r, label: i, tweetId: c }
            : void 0
        },
        D = function (e, t) {
          var n = (function (e) {
              var t = e.liveEventDetails.attribution_user_id
              return e.users ? e.users[t] : void 0
            })(t),
            a = t.liveEventDetails,
            r = a.category,
            i = a.description,
            o = a.descriptionEntities,
            l = a.remind_me_subscription,
            c = a.short_title,
            s = a.time_string,
            u = a.title
          return {
            author: n,
            category: r,
            description: i,
            descriptionEntities: o,
            eventId: e,
            remindMeSubscription: l,
            shortTitle: c || u,
            timeString: s,
            title: u,
          }
        },
        T = function (e, t) {
          return e.broadcasts && t ? e.broadcasts[t] : void 0
        },
        x = function (e, t) {
          var n = e.extended_entities,
            a = (void 0 === n ? {} : n).media
          return (void 0 === a ? [] : a).find(function (e) {
            return e.media_key === t || 'photo' !== e.type
          })
        },
        P = function (e, t, n) {
          var a = e.media,
            r = (void 0 === a ? {} : a).mediaEntity
          return !r || (r.broadcast_id !== t && r.media_tweet_id !== n) ? void 0 : e.promotedContent
        },
        A = function (e, t, n, a, r, i) {
          var o = t && r ? x(t, r) : void 0,
            l = T(n, e),
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
            promotedContent: i && P(i, c, r),
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
            case J.SHOP:
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
        U = function (e) {
          var t = e.response.score
          return t && t.data && t.data.moments ? t.data : void 0
        },
        V = function (e, t, n) {
          var a = e.response.carousel,
            i =
              (a || []).filter(function (e) {
                return e.moment
              }).length > 0
          return (a || [])
            .filter(function (e) {
              return !e.moment
            })
            .map(function (t) {
              var a,
                o,
                l = t.entry_id,
                c = k(t, e),
                u = c && c.id,
                d = (t.tweet_media && t.tweet_media.id) || (c && c.tweetId),
                m = d ? s.a.selectHydratedTweet(e, d) : void 0,
                p = A(l, m, e, 0, u, n)
              if (t.broadcast) {
                var h = e.broadcasts ? e.broadcasts[t.broadcast.id] : void 0
                ;(o = (h && h.twitter_user_id && e.users && e.users[h.twitter_user_id]) || void 0),
                  (a = h ? H(o, h) : void 0)
              } else if (t.audiospace) {
                var v = e.audiospaces ? e.audiospaces[t.audiospace.id] : void 0
                ;(o = (v && v.creator_twitter_user_id && e.users && e.users[v.creator_twitter_user_id]) || void 0),
                  (a = v ? W(o, v) : void 0)
              } else if ((t.slate && d) || t.tweet_media) {
                var f = d && e.tweets ? e.tweets[d] : void 0
                a = (o = f && e.users ? e.users[f.user] : void 0) ? G(o, !!t.tweet_media, u, f, e) : void 0
              } else t.slate && c && (a = { type: I.SLATE })
              return (
                a || !c || t.tweet_media || (a = { type: I.SLATE }),
                !j(o) && a && c
                  ? {
                      id: l,
                      carouselItemInfo: r()(r()({}, a), {}, { socialProof: t.social_proof }),
                      mediaDetails: p,
                      slate: c,
                      selected: !!t.selected,
                      isMoment: i,
                    }
                  : void 0
              )
            })
            .filter(Boolean)
        },
        j = function (e) {
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
        W = function (e, t) {
          return {
            audiospace: t,
            verified: !!e && e.verified,
            screenName: e ? e.screen_name : t.host.username,
            name: e ? e.name : t.host.display_name,
            userId: e ? e.id_str : t.creator_twitter_user_id,
            type: I.AUDIOSPACE,
            accountType: e ? z.TWITTER : z.PERISCOPE,
            profileImageUrl: e ? e.profile_image_url_https : t.host.avatar_url,
          }
        },
        G = function (e, t, n, a, r) {
          var i, o, l
          if (t && a && n) {
            var c = x(a, n)
            if (c) {
              var s = c.type
              o = Y(s)
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
        Y = function (e) {
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
        X = function (e) {
          var t
          if (e) {
            var n = new URL(e).pathname.split('/')
            t = n[n.length - 1]
          }
          return t
        },
        K = function (e) {
          return !!e && !!e.carouselItemInfo && e.carouselItemInfo.type !== I.GIF && e.carouselItemInfo.type !== I.SLATE
        },
        Q = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e + 1,
            a = t.slice(n).findIndex(K)
          return a > -1 ? a + n : a
        },
        J = Object.freeze({ SHOP: 'shop' })
    },
  },
])
//# sourceMappingURL=WIPED
