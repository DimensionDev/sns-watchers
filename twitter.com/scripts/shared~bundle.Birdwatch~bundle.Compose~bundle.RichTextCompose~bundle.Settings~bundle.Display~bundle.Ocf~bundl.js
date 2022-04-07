;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '+Tpo': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var o = n('ERkP'),
        a = n.n(o),
        i = n('3XMw'),
        r = n.n(i),
        c = n('xrkw'),
        s = n('wwsH'),
        l = r.a.f2849136,
        u = r.a.ee9a81b6,
        d = { viewType: 'analytics' }
      function m(e) {
        var t = e.activeColor,
          n = e.color,
          o = e.iconSize,
          i = e.isDisabled,
          r = e.isFaded,
          m = e.isPresentational,
          p = e.onPress,
          v = e.style,
          h = e.tweetLink
        return a.a.createElement(s.a, {
          Icon: c.a,
          accessibilityLabel: u,
          activeColor: t,
          behavioralEventContext: d,
          color: n,
          hoverLabel: { label: l },
          iconSize: o,
          isDisabled: i,
          isFaded: r,
          isPresentational: m,
          link: !h || i || r ? void 0 : ''.concat(h, '/analytics'),
          onPress: p,
          style: v,
        })
      }
    },
    '/aXP': function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        a = n.n(o),
        i = n('t62R'),
        r = n('5mJL'),
        c = n('rHpw'),
        s = n('j7Bv'),
        l = c.a.create(function (e) {
          return {
            cellStyle: { justifyContent: 'center' },
            thumbnail: { flexBasis: 'auto', justifyContent: 'center', marginRight: e.spaces.space8 },
          }
        }),
        u = function (e) {
          var t = e.Icon,
            n = e.nativeID,
            o = e.style,
            c = e.text,
            u = e.type,
            d = a.a.createElement(s.a, { Icon: t, color: u, size: 'medium' })
          return a.a.createElement(
            r.a,
            { avatarCell: d, avatarCellStyle: l.thumbnail, cellStyle: l.cellStyle, style: o },
            a.a.createElement(i.b, { color: 'gray700', nativeID: n, size: 'subtext2' }, c),
          )
        },
        d = n('4zmP'),
        m = n('MWbm'),
        p = n('3XMw'),
        v = n.n(p),
        h = n('lBmi'),
        f = n('gUPl'),
        w = n('gBde'),
        b = n('Oib4'),
        y = n('EyD/'),
        _ = n('yiKp'),
        g = n.n(_),
        k = n('Lsrn'),
        C = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [k.a.root, e.style],
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
      E.metadata = { width: 24, height: 24 }
      var T = E,
        S = n('5wO0'),
        A = {
          conversationControlsFollowersCanEngage: {
            Icon: h.a,
            calloutType: 'primary',
            headline: v.a.bb7b821a,
            detail: v.a.h15b020c,
            inline: v.a.e5dc76d0,
          },
          conversationControlsFollowersCannotEngage: {
            Icon: h.a,
            calloutType: 'primary',
            headline: v.a.ab105904,
            detail: v.a.h15b020c,
            inline: v.a.fd1cda7a,
          },
          conversationControlsCommunityCanEngage: {
            Icon: f.a,
            calloutType: 'primary',
            headline: v.a.bb7b821a,
            detail: v.a.j86de6d0,
            inline: v.a.e5dc76d0,
          },
          conversationControlsCommunityCannotEngage: {
            Icon: f.a,
            calloutType: 'primary',
            headline: v.a.ab105904,
            detail: v.a.j86de6d0,
            inline: v.a.fd1cda7a,
          },
          conversationControlsByInvitationCanEngage: {
            Icon: w.a,
            calloutType: 'primary',
            headline: v.a.bb7b821a,
            detail: v.a.cededc6f,
            inline: v.a.e5dc76d0,
          },
          conversationControlsByInvitationCannotEngage: {
            Icon: w.a,
            calloutType: 'primary',
            headline: v.a.ab105904,
            detail: v.a.cededc6f,
            inline: v.a.fd1cda7a,
          },
          communityHiddenTweetEducation: {
            Icon: b.a,
            calloutType: 'primary',
            headline: v.a.g7ea1122,
            detail: v.a.f9560709,
            inline: v.a.g7ea1122,
          },
          communityRemovedMemberEducation: {
            Icon: b.a,
            calloutType: 'primary',
            headline: v.a.g7ea1122,
            detail: v.a.jd773100,
            inline: v.a.g7ea1122,
          },
          exclusiveToSuperFollowersCreator: {
            Icon: y.a,
            calloutType: 'exclusive',
            headline: v.a.dbf9738f,
            detail: v.a.d95d8f24,
            inline: v.a.d95d8f24,
          },
          exclusiveToSuperFollowersReplyOwn: {
            Icon: y.a,
            calloutType: 'exclusive',
            headline: v.a.dbf9738f,
            detail: v.a.ff6895e3,
            inline: v.a.ff6895e3,
          },
          exclusiveToSuperFollowersReplyOthers: {
            Icon: y.a,
            calloutType: 'exclusive',
            headline: v.a.f1140912,
            detail: v.a.j1a5fd02,
            inline: v.a.aaeb399a,
          },
          headsUpCopyA: {
            Icon: T,
            calloutType: 'primary',
            headline: v.a.b140e3b1,
            detail: v.a.icbb05dc,
            inline: v.a.icbb05dc,
          },
          headsUpCopyB: {
            Icon: T,
            calloutType: 'primary',
            headline: v.a.g4d12383,
            detail: v.a.fe5ab73c,
            inline: v.a.fe5ab73c,
          },
          trustedFriendsReplyOwn: { Icon: S.a, calloutType: 'success', detail: v.a.fe0c6436, inline: v.a.fe0c6436 },
          trustedFriendsReplyOthers: {
            Icon: S.a,
            calloutType: 'success',
            detail: v.a.h7a1a9de,
            detailAction: { label: v.a.d7e50a66, link: 'https://help.twitter.com/using-twitter/twitter-circle' },
            inline: v.a.e5e32275,
          },
        },
        I = function (e, t) {
          return 'string' != typeof e ? e({ screenName: t }) : e
        }
      t.a = function (e) {
        var t = e.displayMode,
          n = e.nativeID,
          o = e.screenName,
          i = e.style,
          r = e.type,
          c = A[r],
          s = c.Icon,
          l = c.calloutType,
          p = c.detail,
          v = c.detailAction,
          h = c.headline,
          f = c.inline,
          w = 'compact' === t,
          b = 'detail' === t,
          y = b ? v : void 0,
          _ = b ? h : void 0,
          g = I(b ? p : f, o)
        return a.a.createElement(
          m.a,
          { style: i },
          w
            ? a.a.createElement(u, { Icon: s, nativeID: n, text: g, type: l })
            : a.a.createElement(d.a, {
                Icon: s,
                action: y,
                headline: _,
                nativeID: n,
                text: g,
                type: l,
                withThumbnail: !0,
              }),
        )
      }
    },
    '0ig/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var o = n('i4Oy'),
        a = n('ERkP')
      function i() {
        var e = Object(a.useState)(function () {
            return o.a.get('window')
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
              o.a.addEventListener('change', e),
              n(o.a.get('window')),
              function () {
                o.a.removeEventListener('change', e)
              }
            )
          }, []),
          t
        )
      }
    },
    '0weh': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    '3MlI': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      }),
        n.d(t, 'a', function () {
          return l
        })
      var o = n('ERkP'),
        a = n.n(o),
        i = n('nBUg'),
        r = n('rHpw'),
        c = n('MWbm')
      function s(e) {
        var t = e.accessibilityLabel,
          n = e.accessibilityLabelledBy,
          o = e.children,
          r = e.displayStyle,
          s = void 0 === r ? 'inline' : r,
          l = e.nativeID,
          d = e.style,
          m = i.b.useProps().withEdgeToEdgeTweetAnatomy()
        return a.a.createElement(
          c.a,
          {
            accessibilityLabel: t,
            accessibilityLabelledBy: n,
            accessibilityRole: 'group',
            nativeID: l,
            style: [u.container, u[''.concat(s, 'Container')], m && u.noMaxWidth, d],
          },
          o,
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
      var o = n('yiKp'),
        a = n.n(o),
        i = n('wAC9')
      t.a = function (e, t) {
        return Object(i.a)({
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
          return m
        }),
        n.d(t, 'e', function () {
          return p
        }),
        n.d(t, 'b', function () {
          return v
        }),
        n.d(t, 'd', function () {
          return h
        })
      n('0zG9'), n('ERkP')
      var o = n('3XMw'),
        a = n.n(o),
        i = n('Nh1N'),
        r = n('RT39'),
        c = n('fz3c'),
        s = a.a.e86cb37f,
        l = a.a.f1824804,
        u = i.a,
        d = function (e) {
          var t = e.loggedInUserId,
            n = e.tweet,
            o = n.retweeted_status || n
          return !(o.user.id_str !== t || (!o.self_thread && o.in_reply_to_status_id_str))
        },
        m = function (e) {
          var t = e.featureSwitches,
            n = e.isNsfwUser,
            o = e.loggedInUserId,
            a = e.tweet,
            i = (e.userCountry, e.userLanguage, a.retweeted_status || a)
          return !(
            o !== i.user.id_str ||
            a.tombstoneInfo ||
            !i.possibly_sensitive ||
            n ||
            !t.isTrue('enable_label_appealing_sensitive_content_enabled')
          )
        },
        p = function (e) {
          var t = e.displaySensitiveMedia,
            n = e.featureSwitches,
            o = e.isNsfwUser,
            a = e.loggedInUserId,
            i = e.tweet,
            r = e.userCountry,
            c = e.userLanguage
          return (
            t && m({ tweet: i, isNsfwUser: o, featureSwitches: n, loggedInUserId: a, userLanguage: c, userCountry: r })
          )
        },
        v = function (e) {
          var t = e.featureSwitches,
            n = e.forwardPivotDisplayType,
            o = e.loggedInUserId,
            a = e.tweet
          e.userCountry, e.userLanguage
          return (
            o === (a.retweeted_status || a).user.id_str &&
            !a.tombstoneInfo &&
            n === r.a.SoftIntervention &&
            t.isTrue('enable_label_appealing_misinfo_enabled')
          )
        },
        h = function (e, t, n) {
          var o,
            a = e.retweeted_status || e,
            i = c.a.AppealTweetWarning
          if (n && Object(c.g)(n, i)) {
            var r,
              d,
              m =
                ((null == a ||
                null === (r = a.extended_entities) ||
                void 0 === r ||
                null === (d = r.media) ||
                void 0 === d
                  ? void 0
                  : d.length) || 0) > 0,
              p = !!a.promoted_content,
              v = Object(c.d)({
                clientReferer: window.location.pathname,
                isMedia: m,
                isPromoted: void 0 !== p,
                reportType: i,
                reportedTweet: a,
                reportedUser: a.user.id_str,
                scribeNamespace: t,
              })
            o = { pathname: '/i/safety/report_story_start', state: { input: { requested_variant: JSON.stringify(v) } } }
          } else
            o = {
              pathname: ''.concat('/i/report/appeal_tweet_warning', '/').concat(a.id_str),
              state: { scribeNamespace: t },
            }
          return { text: s, action: { label: l, link: o }, Icon: u, withThumbnail: !0 }
        }
    },
    '5wO0': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
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
        return M
      })
      var o = n('ddV6'),
        a = n.n(o),
        i = (n('2G9S'), n('ho0z'), n('ERkP')),
        r = n.n(i),
        c = n('6/RC'),
        s = n('iX4X'),
        l = n('/Ikv'),
        u = n('nBUg'),
        d = n('ZvMt'),
        m = n('3XMw'),
        p = n.n(m),
        v = n('4zmP'),
        h = n('3dad'),
        f = n('uCxL'),
        w = n('k2KP'),
        b = n('tLTi'),
        y = n('rHpw'),
        _ = n('+d3d'),
        g = n('v302'),
        k = n('LKCq'),
        C = n('rOiJ'),
        E = n('E0cF'),
        T = n('XurV'),
        S = n('MWbm'),
        A = n('IV4V'),
        I = n('RT39'),
        x = n('VRZ4'),
        R = 16 / 9,
        L = 'timeline',
        D = c.canUseDOM
          ? function () {
              var e = r.a.useRef(null),
                t = r.a.useState(506),
                n = a()(t, 2),
                o = n[0],
                i = n[1],
                c = r.a.useMemo(function () {
                  var e = Object(_.a)(i, 300)
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
                        c.observe(e.current),
                        function () {
                          c.disconnect()
                        }
                      )
                  },
                  [e, c],
                ),
                [o >= 506, e]
              )
            }
          : function () {
              return [!0, null]
            }
      function M(e) {
        var t,
          n,
          o,
          i,
          c,
          m = e.cardCacheLocationKey,
          p = e.displayMediaMetadata,
          b = e.enableKeyboardShortcuts,
          y = e.forwardPivotInfo,
          _ = e.inlineCalloutInfo,
          g = e.innerForwardPivotInfo,
          k = e.isMediaMaxHeightEnabled,
          M = e.loggedInUserId,
          B = e.mediaCacheLocationKey,
          F = e.nativeID,
          N = e.onCardLinkClick,
          H = e.onMediaClick,
          j = e.onPlaybackStarted,
          U = e.onQuoteTweetClick,
          K = e.preventVideoPlayback,
          z = e.promotedContent,
          V = e.quoteTweetSingleImageMinAspectRatio,
          W = void 0 === V ? R : V,
          q = e.quoteTweetSocialContextProps,
          Q = e.quotedTweetTombstoneInfo,
          X = e.renderQuoteTweetTombstone,
          J = void 0 === X ? O : X,
          G = e.singleImageMaxAspectRatio,
          Y = void 0 === G ? 10 : G,
          Z = e.singleImageMinAspectRatio,
          $ = void 0 === Z ? R : Z,
          ee = e.mediaAltTranslations,
          te = e.tweet,
          ne = e.withActionsDisabled,
          oe = e.withAltTextBadge,
          ae = e.withCardLinks,
          ie = void 0 !== ae && ae,
          re = e.withCenterCrop,
          ce = void 0 !== re && re,
          se = e.withCondensedQuoteTweet,
          le = e.withHalvedMediaSize,
          ue = void 0 !== le && le,
          de = e.withMediaTagsIcon,
          me = e.withQuoteTweetHeaderLinks,
          pe = e.withQuoteTweetLink,
          ve = e.withQuoteTweetMedia,
          he = void 0 === ve || ve,
          fe = e.withReactions,
          we = e.withRoundMediaCorners,
          be = e.withTweetMedia,
          ye = void 0 === be || be,
          _e = e.withUserHoverCard,
          ge = D(),
          ke = a()(ge, 2),
          Ce = ke[0],
          Ee = ke[1],
          Te = u.b.useProps().withEdgeToEdgeContent(),
          Se = Object(T.useOpaqueIdentifier)(),
          Ae = Object(T.useOpaqueIdentifier)(),
          Ie = E.a.getOriginalTweet(te),
          xe = function () {
            return E.a.hasMedia(Ie, !ye)
          },
          Re = function (e) {
            var t,
              n = null == e || null === (t = e.extended_entities) || void 0 === t ? void 0 : t.media
            if (n && 1 === n.length && 'photo' === n[0].type) return n[0]
          },
          Le = function () {
            return Re(Ie)
          },
          De = function () {
            return Re(Ie.quoted_status)
          },
          Me = function () {
            var e = De()
            if (e && e.original_info) {
              var t = e && e.original_info,
                n = t.height,
                o = t.width
              return Object(d.b)(W, Y, { width: o, height: n })
            }
          },
          Pe = function (e) {
            var t = h.a.getBackgroundColor(e)
            if (t) return 'rgb('.concat(t.red, ',').concat(t.green, ',').concat(t.blue, ')')
          },
          Oe = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            return [Te && !n && P.negativeMargin, t && Te && [P.centerItems, { backgroundColor: e }]]
          },
          Be = function () {
            var e,
              t,
              n = E.a.getOriginalTweet(te),
              o = xe(),
              a = k && !o && !!(e = Me()) && e < 1 && Ce,
              i = (function () {
                var e = De()
                if (e) return Pe(e)
              })()
            return n && n.is_quote_status
              ? r.a.createElement(f.a, {
                  forwardPivotInfo: (null === (t = n.quoted_status) || void 0 === t ? void 0 : t.softIntervention) || g,
                  isCondensed: se,
                  loggedInUserId: M,
                  mediaContentStyles: !se && Oe(i, !!a, !0),
                  mediaMaxHeight: a ? (Te ? 596 : 510) : void 0,
                  nativeID: Ae,
                  onPress: U,
                  preventVideoPlayback: K,
                  shouldShowAltLabelAlways: oe,
                  singleImageMaxAspectRatio: Y,
                  singleImageMinAspectRatio: W,
                  socialContextProps: q,
                  tweet: n.quoted_status,
                  withCenterCrop: ce,
                  withHeaderLinks: me,
                  withLink: pe,
                  withMediaAsTextLinks: !he,
                  withReactions: fe,
                  withUserHoverCard: _e,
                })
              : null
          },
          Fe = (function () {
            var e,
              t = E.a.getOriginalTweet(te),
              n =
                k &&
                (function () {
                  if (!xe()) return !1
                  var e = Le()
                  if (!e || !e.original_info) return !1
                  var t = e && e.original_info,
                    n = t.height,
                    o = t.width
                  return Object(d.b)($, Y, { width: o, height: n }) < 1
                })() &&
                Ce,
              o = (function () {
                var e = Le()
                if (e) return Pe(e)
              })()
            if (!xe()) return null
            if (A.a.hasVoiceMedia(t))
              return r.a.createElement(S.a, { style: P.gap }, r.a.createElement(A.a, { tweet: t }))
            if (Object(x.c)(t)) {
              var a = Object(x.b)(t)
              if (a) return r.a.createElement(S.a, { style: P.gap }, r.a.createElement(x.a, { audioSpaceId: a }))
            }
            return r.a.createElement(C.a, {
              authorId: t.user.id_str,
              authorScreenName: t.user.screen_name,
              cacheLocationKey: B || L,
              customHoverBackgroundColor: n && Te ? o : void 0,
              displayMediaAttribution: !0,
              displayMediaMetadata: p,
              enableKeyboardShortcuts: b,
              forwardPivotInfo: y,
              hasSensitiveMedia: t.possibly_sensitive,
              loggedInUserId: M,
              mediaAltTranslations: ee,
              mediaContentStyles: [Oe(o, !!n)],
              mediaDetails: null === (e = t.extended_entities) || void 0 === e ? void 0 : e.media,
              mediaMaxHeight: n ? (Te ? 596 : 510) : void 0,
              mediaTagsLink: ''.concat(t.permalink, '/media_tags'),
              onClick: H,
              onPlaybackStarted: j,
              preventPlayback: K,
              promotedContent: z,
              shouldShowAltLabelAlways: oe,
              showBorder: !(n && Te),
              showRoundCorners: we,
              singleImageMaxAspectRatio: Y,
              singleImageMinAspectRatio: $,
              style: [P.gap, n && !Te && P.explicitlySized],
              tweetCreatedAt: t.created_at,
              tweetId: t.id_str,
              tweetText: t.text,
              withCenterCrop: ce,
              withHalvedMediaSize: ue,
              withMediaTagsIcon: de,
              withPostPlayback: !0,
            })
          })(),
          Ne = (function () {
            if (y && y.displayType === I.a.SoftIntervention) {
              var e = y.displayType,
                t = y.landingUrl,
                n = y.softInterventionDisplayType,
                o = y.text
              return r.a.createElement(
                S.a,
                { style: P.mediaPivotGap },
                r.a.createElement(I.b, {
                  displayType: e,
                  isTweetNonCompliant: 'non_compliant' === te.limited_actions,
                  landingUrl: t,
                  softInterventionDisplayType: n,
                  text: o,
                  tweetId: te.id_str,
                  withReactions: fe,
                }),
              )
            }
          })(),
          He = _ ? r.a.createElement(S.a, { style: P.mediaPivotGap }, r.a.createElement(v.a, _)) : null,
          je =
            ((c = Be()),
            (t =
              (c && Q ? J({ children: c, config: Q, nativeID: Ae }) : c) ||
              (Ie && Ie.card && !xe() && (!ie || l.a.isPollCard(Ie.card.name)) && Ie.card
                ? r.a.createElement(s.a, {
                    card: {
                      name: Ie.card.name,
                      url: Ie.card.url,
                      binding_values: Ie.card.binding_values,
                      users: Ie.card.users,
                    },
                    cardContext: {
                      locationKey: m || L,
                      tweetId: Ie.id_str,
                      tweetPermalink: Ie.permalink,
                      tweetUserId: Ie.user.id_str,
                      viewerUserId: M,
                      withActionsDisabled: ne,
                    },
                    nativeID: Se,
                    onCardLinkClick: N,
                    preventVideoPlayback: K,
                    promotedContent: z,
                    unifiedCard: Ie.unified_card,
                  })
                : null)),
            (o = Ie.possibly_sensitive),
            ((null != (i = Ie.quoted_status) &&
              i.possibly_sensitive &&
              Ie.quoted_status &&
              Ie.quoted_status.entities &&
              Ie.quoted_status.entities.media &&
              Ie.quoted_status.entities.media.length > 0 &&
              he &&
              !Q) ||
              (o && !l.a.isPollCard(null === (n = Ie.card) || void 0 === n ? void 0 : n.name))) &&
            t
              ? r.a.createElement(w.a, { revealableTombstoneConfig: w.a.sensitiveMediaTombstoneConfig }, t)
              : t)
        return Fe || je || Ne
          ? r.a.createElement(
              S.a,
              { accessibilityLabelledBy: [Ae, Se], nativeID: F, ref: Ee },
              Fe,
              He,
              Ne,
              je ? r.a.createElement(S.a, { style: P.gap }, je) : null,
            )
          : null
      }
      var P = y.a.create(function (e) {
        return {
          gap: { marginTop: e.spaces.space12 },
          mediaPivotGap: { marginTop: e.spaces.space4 },
          explicitlySized: { alignSelf: 'flex-start' },
          negativeMargin: { marginHorizontal: -e.spacesPx.space16 },
          centerItems: { alignItems: 'center' },
        }
      })
      function O(e) {
        var t,
          n = e.children,
          o = e.config,
          a = e.nativeID,
          i = (null === (t = o.richRevealText) || void 0 === t ? void 0 : t.text) || o.revealText,
          c = o.richText
            ? r.a.createElement(b.a, {
                align: 'Center' === o.richText.alignment ? 'center' : void 0,
                dir: o.richText.rtl ? 'rtl' : 'ltr',
                entities: o.richText.entities,
                text: o.richText.text,
              })
            : o.text
        return r.a.createElement(
          S.a,
          { accessibilityLabel: p.a.c9d7235d, nativeID: a },
          i ? r.a.createElement(k.a, { label: c, revealLabel: i }, n) : r.a.createElement(g.a, null, c),
        )
      }
    },
    '6s7X': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    BQZD: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'd', function () {
          return d
        })
      var o = n('WpDa'),
        a = n('oQhu'),
        i = n('eR3e'),
        r = n('ZNT5'),
        c = 'bookmarks',
        s = function (e) {
          return Object(r.a)({
            timelineId: 'bookmarkFolder-'.concat(e),
            getEndpoint: function (e) {
              return e.Bookmarks.fetchBookmarkFolderTimeline
            },
            getEndpointParams: function (t) {
              var n = t.cursor
              return { cursor: 'string' == typeof n ? n : void 0, bookmark_collection_id: e }
            },
            formatResponse: o.a,
            context: 'FETCH_BOOKMARK_FOLDER_TIMELINE',
            perfKey: 'bookmarkFolderGraphQL',
          })
        },
        l = Object(a.a)(function (e) {
          return e.isTrue('responsive_web_graphql_bookmarks')
            ? Object(r.a)({
                timelineId: c,
                getEndpoint: function (e) {
                  return e.Bookmarks.fetchBookmarksTimeline
                },
                getEndpointParams: function (e) {
                  var t = e.count,
                    n = e.cursor
                  return { count: t, cursor: 'string' == typeof n ? n : void 0 }
                },
                formatResponse: o.a,
                context: 'FETCH_BOOKMARKS_TIMELINE',
                perfKey: 'bookmarksGraphQL',
              })
            : Object(r.a)({
                timelineId: c,
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
            var o = n.api,
              a = n.featureSwitches
            return (
              a.isTrue('responsive_web_graphql_mutation_bookmarks')
                ? o.Bookmarks.deleteAll
                : o.Tweets.removeAllBookmarks
            )().then(function () {
              return e(l(a).deleteTimeline())
            })
          }
        },
        d = i.q.bind(null, c)
    },
    C25v: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
      var o = n('KEM+'),
        a = n.n(o),
        i = n('RqPI'),
        r = n('XOJV'),
        c = n('SRyb')
      t.a = function (e, t) {
        return function (n, o, s) {
          s.api
          var l = s.featureSwitches
          return n(r.a.unretweet(e, t)).then(function () {
            var t = Object(i.r)(o()),
              s = r.a.select(o(), e),
              u = s && (s.retweeted_status ? r.a.select(o(), s.retweeted_status) : s)
            if (t && u && (u.user !== t || u.id_str !== e))
              return n([
                Object(c.a)(l, t, 'default').removeTweets(a()({}, e, !0)),
                Object(c.a)(l, t, 'with_replies').removeTweets(a()({}, e, !0)),
              ])
          })
        }
      }
    },
    'EyD/': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    G41x: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var o = n('ERkP'),
        a = n.n(o),
        i = n('mjJ+'),
        r = n('3XMw'),
        c = n.n(r),
        s = n('fn9Y'),
        l = n('wD1h'),
        u = n('wwsH'),
        d = c.a.dc63da15,
        m = c.a.jc9298a8,
        p = { viewType: 'share' }
      function v(e) {
        var t = e.actionItems,
          n = e.actionMenuDescription,
          o = e.activeColor,
          r = e.color,
          c = e.enableKeyboardShortcuts,
          v = e.iconSize,
          h = e.isDisabled,
          f = e.isFaded,
          w = e.isPresentational,
          b = e.onMenuCancel,
          y = e.onPress,
          _ = e.style,
          g = e.withCount
        return a.a.createElement(u.a, {
          Icon: s.a,
          accessibilityLabel: m,
          activeColor: o,
          behavioralEventContext: p,
          color: r,
          enableKeyboardShortcuts: c,
          hoverLabel: { label: d },
          iconSize: v,
          isDisabled: h,
          isFaded: f,
          isPresentational: w,
          keyboardShortcut: l.a.shortcuts.share,
          onPress: y,
          renderMenu: f
            ? void 0
            : function (e) {
                return a.a.createElement(i.a, {
                  description: n,
                  items: t,
                  onCloseRequested: function () {
                    e(), null == b || b()
                  },
                  shouldCloseOnClick: !0,
                })
              },
          style: _,
          withCount: g,
        })
      }
    },
    HSMM: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      n('hBvt')
      var o = n('ERkP'),
        a = n.n(o),
        i = n('3XMw'),
        r = n.n(i),
        c = n('dFWS'),
        s = n('wD1h'),
        l = n('wwsH'),
        u = r.a.hdf72269,
        d = r.a.c9940954,
        m = { viewType: 'reply' }
      function p(e) {
        var t = e.activeColor,
          n = e.color,
          o = e.count,
          i = e.enableKeyboardShortcuts,
          r = e.iconSize,
          p = e.isDisabled,
          v = e.isFaded,
          h = e.isPresentational,
          f = e.link,
          w = e.onPress,
          b = e.renderWrapper,
          y = e.style,
          _ = e.testID,
          g = e.withCount && 'number' == typeof o,
          k = g ? d({ count: o }) : u
        return a.a.createElement(l.a, {
          Icon: c.a,
          accessibilityLabel: k,
          activeColor: t,
          behavioralEventContext: m,
          color: n,
          count: o,
          enableKeyboardShortcuts: i,
          hoverLabel: { label: u },
          iconSize: r,
          isDisabled: p,
          isFaded: v,
          isPresentational: h,
          keyboardShortcut: s.a.shortcuts.reply,
          link: f,
          onPress: w,
          renderWrapper: b,
          style: y,
          testID: _,
          withCount: g,
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
      var o = n('KEM+'),
        a = n.n(o),
        i = n('yiKp'),
        r = n.n(i),
        c = (n('yH/f'), n('ho0z'), n('7x/C'), n('JtPf'), n('PiaM')),
        s = n('/kEJ'),
        l = n('48TD'),
        u = n('BQZD'),
        d = n('oEOe'),
        m = n('lMB6'),
        p = n('RqPI'),
        v = n('3zvM'),
        h = n('oQhu'),
        f = n('3A2y'),
        w = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/FETCH_BOOKMARK_FOLDERS_FAILURE',
        }),
        b = Object.freeze({
          REQUEST: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_REQUEST',
          SUCCESS: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_SUCCESS',
          FAILURE: 'rweb/bookmarkFolders/CREATE_BOOKMARK_FOLDERS_FAILURE',
        }),
        y = Object(v.e)({ namespace: 'bookmarkFolders' }),
        _ = Object(h.a)(function (e) {
          return Object(l.a)(e)
        }),
        g = {
          deleteBookmarkFolder: Object(v.c)(y, 'deleteBookmarkFolder', {
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
              var o = Object(f.a)(e.entities, [n])
              return r()(r()({}, e), {}, { entities: o })
            },
            mapResponseToActions: function (e, t, n) {
              return function (t) {
                var o = Object(p.r)(n())
                if (o && e && 'Done' === (null == t ? void 0 : t.bookmark_collection_delete))
                  return [_(o).removeItems([e])]
              }
            },
          }),
          editBookmarkFolder: Object(v.c)(y, 'editBookmarkFolder', {
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
                  var o = null == t ? void 0 : t.bookmark_collection_update,
                    a = Object(p.r)(n())
                  if (a && e && o) return [_(a).injectItems([o.id])]
                }
              }
            },
            reducer: function (e, t) {
              var n = t.meta,
                o = n.entityId,
                i = n.name,
                c = e.entities[o]
              if (!c) return e
              var s = { name: i }
              return r()(r()({}, e), {}, { entities: r()(r()({}, e.entities), {}, a()({}, c.id, r()(r()({}, c), s))) })
            },
          }),
          removeTweetFromBookmarkFolder: Object(v.c)(y, 'removeTweetFromBookmarkFolder', {
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
              return function (o) {
                if (o) {
                  if ('Done' !== o.bookmark_collection_tweet_delete) return
                  if (!t.tweetId || !e) return []
                  var i = null == o ? void 0 : o.bookmark_collection_tweet_delete,
                    r = Object(p.r)(n())
                  if (r && e && i) {
                    var c = _(r)
                    return [Object(u.a)(e).removeTweets(a()({}, t.tweetId, !0)), c.injectItems([e])]
                  }
                }
              }
            },
            reducer: function (e, t) {
              return e
            },
          }),
          addTweetToBookmarkFolder: Object(v.c)(y, 'addTweetToBookmarkFolder', {
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
              return function (o) {
                if (o) {
                  if ('Done' !== o.bookmark_collection_tweet_put) return
                  if (!t.tweetId || !e) return []
                  var a = null == o ? void 0 : o.bookmark_collection_tweet_put,
                    i = Object(p.r)(n())
                  if (i && e && a) {
                    var r = _(i)
                    return [
                      Object(u.a)(e).injectEntry(c.k({ id: t.tweetId, sortIndex: t.tweetId })),
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
        k = function () {
          return function (e, t, n) {
            var o = n.api
            return Object(d.b)(e, { request: o.Bookmarks.fetchBookmarkFoldersSlice, params: {} })(
              { actionTypes: w, context: 'FETCH_BOOKMARK_FOLDERS' },
              function (e) {
                if (e) {
                  var t = e.entities
                  return t ? [Object(s.c)(t)] : void 0
                }
              },
            )
          }
        },
        C = function (e) {
          return function (t, n, o) {
            var i = o.api
            return Object(d.b)(t, { request: i.Bookmarks.createBookmarkFolder, params: { name: e } })(
              { actionTypes: b, context: 'CREATE_BOOKMARK_FOLDER' },
              function (e) {
                if (e) {
                  var t = null == e ? void 0 : e.bookmark_collection_create,
                    o = Object(p.r)(n())
                  if (t && o) {
                    var i = _(o)
                    return [y.add(a()({}, t.id, t)), i.injectItems([t.id])]
                  }
                }
              },
            )
          }
        },
        E = function (e, t, n) {
          return function (o) {
            var i = _(n)
            return Promise.resolve(o([Object(u.a)(e).removeTweets(a()({}, t, !0)), i.injectItems([e])]))
          }
        },
        T = r()(r()(r()({}, y), g), {}, { customActionTypes: Object(v.d)(g) })
      t.b = m.a.register(T)
    },
    HwrL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return i
        })
      var o = n('RT39'),
        a = { like: 'like', retweet: 'retweet', share: 'share' },
        i = function (e, t) {
          return (
            !((null == t ? void 0 : t.displayType) !== o.a.SoftIntervention || null == t || !t.engagementNudge) &&
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
      var o = n('3XMw'),
        a = { defaultToast: { text: n.n(o).a.e639775e }, showToast: !0 }
    },
    IqLm: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    JWUO: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        a = n.n(o),
        i = n('m3Bd'),
        r = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        l = n('pjBI'),
        u = n('rHpw'),
        d = n('9qnF'),
        m = n('MWbm'),
        p = ['actionMenu', 'timestamp', 'userFollowIndicators', 'userLabel', 'userName'],
        v = u.a.create(function (e) {
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
          o = e.userFollowIndicators,
          i = e.userLabel,
          c = e.userName,
          u = r()(e, p),
          h = s.a.createElement(
            m.a,
            { style: v.userInfo },
            s.a.createElement(
              m.a,
              { style: v.userNameRow },
              s.a.createElement(l.a, null, c, n),
              t ? s.a.createElement(m.a, { style: v.actionMenuContainer }, t) : null,
            ),
            i ? s.a.createElement(m.a, { style: v.userLabelRow }, i) : null,
            o ? s.a.createElement(m.a, { style: v.userLabelRow }, o) : null,
          )
        return s.a.createElement(d.a, a()({}, u, { usernameContent: h }))
      }
    },
    'ML2/': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    'Q+qU': function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        a = n.n(o),
        i = n('ddV6'),
        r = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
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
        var t = s.a.useState(0),
          n = r()(t, 2),
          o = n[0],
          i = n[1],
          c = e.size || 'body',
          m = u.a.theme.fontSizesPx[c],
          p = { fontSize: m - o }
        return s.a.createElement(
          l.b,
          a()({}, e, {
            getTextOverflow: function (e) {
              e && m - o > u.a.theme.fontSizesPx.subtext3 && i(o + 1)
            },
            numberOfLines: 1,
            style: [e.style, p, d.apptext],
          }),
        )
      }
    },
    R7KY: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var o = n('ERkP'),
        a = n.n(o),
        i = n('TIdA'),
        r = n('oSwX'),
        c = i.a.createLayoutCache()
      function s(e) {
        var t = e.nativeID,
          n = e.onClick,
          o = e.onHoverCardScreenNameClick,
          i = e.promotedContent,
          s = e.screenName,
          l = e.uri,
          u = e.withHoverCard,
          d = void 0 === u || u,
          m = e.withLink,
          p = void 0 === m || m
        return a.a.createElement(r.default, {
          imageLayoutCache: c,
          nativeID: t,
          onClick: n,
          onHoverCardScreenNameClick: o,
          promotedContent: i,
          screenName: s,
          size: 'xxLarge',
          uri: l,
          withHoverCard: d,
          withLink: p,
        })
      }
    },
    TW8A: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
        return m
      }),
        n.d(t, 'b', function () {
          return p
        })
      var o = n('KEM+'),
        a = n.n(o),
        i = n('yiKp'),
        r = n.n(i),
        c = (n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('/kEJ')),
        s = n('Ssj5'),
        l = 'liveTweetCounts',
        u = 'UPDATE',
        d = {}
      s.a.register(
        a()({}, l, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case c.a:
              var n,
                o = null === (n = t.payload) || void 0 === n ? void 0 : n.tweets
              if (o) {
                var i = r()({}, e)
                return (
                  Object.keys(o).forEach(function (e) {
                    i[e] && delete i[e]
                  }),
                  i
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
      var m = function (e, t) {
          return e.liveTweetCounts[t]
        },
        p = function (e) {
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
          return S
        })
      var o = n('ERkP'),
        a = n.n(o),
        i = n('3XMw'),
        r = n.n(i),
        c = n('wD1h'),
        s = n('wwsH'),
        l = n('yVEN'),
        u = n('jlPL'),
        d = n('mjJ+'),
        m = n('TW8A'),
        p = r.a.d6c85149,
        v = r.a.f3bbbb87,
        h = r.a.c9d7235d,
        f = { viewType: 'quote' },
        w = function (e) {
          return { viewType: 'retweet', viewState: { type: 'toggleable', toggledTo: e } }
        }
      function b(e) {
        var t,
          n,
          o,
          i,
          r,
          c,
          s,
          l,
          b,
          y,
          _,
          g,
          k,
          C,
          E,
          T =
            ((n = (t = e).excludeRetweetAction),
            (o = void 0 !== n && n),
            (i = t.excludeRetweetWithCommentAction),
            (r = void 0 !== i && i),
            (c = t.isRetweeted),
            (s = t.onMenuCancel),
            (l = t.onQuoteTweetActionSelect),
            (b = t.onRetweetActionSelect),
            (y = t.onUnretweetActionSelect),
            (_ = t.retweetActionSubText),
            (g = t.retweetWithCommentLink),
            (k = t.testIDs),
            (C = null == k ? void 0 : k.retweetConfirm),
            (E = null == k ? void 0 : k.unretweetConfirm),
            a.a.useMemo(
              function () {
                var e = []
                return (
                  c ||
                    o ||
                    e.push({
                      behavioralEventContext: w(!0),
                      text: p,
                      subText: _,
                      onClick: function () {
                        null == s || s(), null == b || b()
                      },
                      testID: C,
                      Icon: u.a,
                    }),
                  c &&
                    e.push({
                      behavioralEventContext: w(!1),
                      text: v,
                      onClick: function () {
                        null == s || s(), null == y || y()
                      },
                      testID: E,
                      Icon: u.a,
                    }),
                  r ||
                    e.push({
                      behavioralEventContext: f,
                      text: h,
                      onClick: function () {
                        null == s || s(), null == l || l()
                      },
                      Icon: m.a,
                      link: g,
                    }),
                  e
                )
              },
              [o, r, c, s, l, b, y, _, g, C, E],
            ))
        return a.a.createElement(d.a, {
          description: e.actionMenuDescription,
          items: T,
          onCloseRequested: function () {
            var t
            null === (t = e.onMenuCancel) || void 0 === t || t.call(e)
          },
        })
      }
      var y = r.a.d6c85149,
        _ = r.a.f3bbbb87,
        g = r.a.g23ce6f0,
        k = r.a.i769b0ab,
        C = r.a.ea9a1f0c,
        E = { viewType: 'retweet' },
        T = { RETWEET: 'retweet', UNRETWEET: 'unretweet', QUOTE: 'quote' }
      function S(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          o = void 0 === n ? 'green500' : n,
          i = e.color,
          r = e.count,
          d = e.enableActionMenu,
          m = void 0 !== d && d,
          p = e.enableKeyboardShortcuts,
          v = e.excludeRetweetAction,
          h = e.excludeRetweetWithCommentAction,
          f = e.iconSize,
          w = e.isDisabled,
          T = e.isFaded,
          S = e.isPresentational,
          A = e.isRetweeted,
          I = e.onMenuCancel,
          x = e.onPress,
          R = e.onQuoteTweetActionSelect,
          L = e.onRetweetActionSelect,
          D = e.onUnretweetActionSelect,
          M = e.retweetActionSubText,
          P = e.retweetWithCommentLink,
          O = e.style,
          B = e.testIDs,
          F = e.withCount && 'number' == typeof r,
          N = A ? g : y
        return (
          F && (N = A ? C({ count: r }) : k({ count: r })),
          a.a.createElement(s.a, {
            ActiveIcon: l.a,
            Icon: u.a,
            accessibilityLabel: N,
            activeColor: o,
            behavioralEventContext: E,
            color: i,
            count: r,
            enableKeyboardShortcuts: p,
            hoverLabel: { label: A ? _ : y },
            iconSize: f,
            isActive: A,
            isDisabled: w,
            isFaded: T,
            isPresentational: S,
            keyboardShortcut: c.a.shortcuts.retweet,
            onPress: x,
            renderMenu: m
              ? function (e) {
                  return a.a.createElement(b, {
                    actionMenuDescription: t,
                    excludeRetweetAction: v,
                    excludeRetweetWithCommentAction: h,
                    isRetweeted: A,
                    onMenuCancel: function () {
                      e(), null == I || I()
                    },
                    onQuoteTweetActionSelect: R,
                    onRetweetActionSelect: L,
                    onUnretweetActionSelect: D,
                    retweetActionSubText: M,
                    retweetWithCommentLink: P,
                    testIDs: {
                      retweetConfirm: null == B ? void 0 : B.retweetConfirm,
                      unretweetConfirm: null == B ? void 0 : B.unretweetConfirm,
                    },
                  })
                }
              : void 0,
            style: O,
            testID: A ? (null == B ? void 0 : B.unretweet) : null == B ? void 0 : B.retweet,
            withCount: F,
          })
        )
      }
    },
    XEYr: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var o,
        a = n('KEM+'),
        i = n.n(a),
        r = n('k49u'),
        c = n('3XMw'),
        s = n.n(c),
        l = s.a.b141cbff,
        u = s.a.e902fd9d,
        d = s.a.bbbfc827,
        m =
          ((o = { defaultToast: { text: u } }),
          i()(o, r.a.BlockedUserError, { toast: { text: l } }),
          i()(o, r.a.ProtectedStatusFavoriteError, { toast: { text: d } }),
          i()(o, 'showToast', !0),
          o)
    },
    XIWT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var o,
        a = n('KEM+'),
        i = n.n(a),
        r = n('k49u'),
        c = n('3XMw'),
        s = n.n(c),
        l = s.a.ae5c603c,
        u = s.a.h5634a0b,
        d =
          ((o = { defaultToast: { text: s.a.b657101c } }),
          i()(o, r.a.DuplicateBookmark, { toast: { text: u } }),
          i()(o, r.a.ProtectedTweetBookmarkError, { toast: { text: l } }),
          i()(o, 'showToast', !0),
          o)
    },
    YBcl: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = (n('jQ3i'), n('ERkP')),
        r = n.n(i),
        c = n('I7xS'),
        s = n('nBUg'),
        l = n('rHpw'),
        u = n('sQjL'),
        d = n('/aXP'),
        m = n('E0cF'),
        p = function (e) {
          var t = (function (e) {
              var t = e.displayStyle,
                n = e.exclusivityInfoLabelNativeID,
                o = e.hideExclusivityInfoEducationTextInReplies,
                a = e.loggedInUser,
                i = e.tweet,
                r = m.a.getOriginalTweet(i),
                c = !!r.in_reply_to_status_id_str,
                s = r.exclusivity_info,
                l = r.permalink,
                u = r.user
              if (!(!s || ('inline' === t && c && o))) {
                var d = s.screen_name,
                  p = d === (null == a ? void 0 : a.screen_name),
                  v = u.screen_name === (null == a ? void 0 : a.screen_name)
                return {
                  displayMode: 'detail' === t ? 'detail' : c ? 'compact' : 'inline',
                  nativeID: n,
                  screenName: d,
                  scribeElement: 'exclusivity_info_context',
                  tweetPermalink: l,
                  type: p
                    ? 'exclusiveToSuperFollowersCreator'
                    : v
                    ? 'exclusiveToSuperFollowersReplyOwn'
                    : 'exclusiveToSuperFollowersReplyOthers',
                }
              }
            })(e),
            n = (function (e) {
              var t = e.displayStyle,
                n = e.hideTrustedFriendsEducationTextInReplies,
                o = e.loggedInUser,
                a = e.trustedFriendsLabelNativeID,
                i = e.tweet,
                r = s.b.useProps().trustedFriendsEnabled(),
                c = m.a.getOriginalTweet(i),
                l = !!c.in_reply_to_status_id_str,
                u = c.permalink,
                d = c.trusted_friends_info,
                p = c.user
              if (r && d && ('inline' !== t || !l || !n))
                return {
                  anchorless: !0,
                  displayMode: 'detail' === t ? 'detail' : l ? 'compact' : 'inline',
                  nativeID: a,
                  screenName: d.screen_name,
                  scribeElement: 'exclusivity_info_context',
                  tweetPermalink: u,
                  type:
                    p.screen_name === (null == o ? void 0 : o.screen_name)
                      ? 'trustedFriendsReplyOwn'
                      : 'trustedFriendsReplyOthers',
                }
            })(e),
            o = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                o = e.hideConversationControlsEducationText,
                a = e.loggedInUser,
                i = e.tweet,
                r = !!a,
                s = m.a.getOriginalTweet(i),
                l = s.conversation_control,
                u = s.limited_actions,
                d = s.permalink,
                p = r && !u
              if (l && ('inline' !== n || (p && !o))) {
                var v = l.conversation_owner.screen_name,
                  h = l.policy,
                  f = c.a.getEducationType(h, p)
                if (f)
                  return {
                    displayMode: 'detail' === n ? 'detail' : 'compact',
                    nativeID: t,
                    tweetPermalink: d,
                    screenName: v,
                    scribeElement: 'conversation_control_context',
                    type: f,
                  }
              }
            })(e),
            i = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                o = (e.hideConversationControlsEducationText, e.loggedInUser, e.tweet),
                a = s.b.useProps().c9sEnabled(),
                i = m.a.getOriginalTweet(o),
                r = i.community_id_str,
                l = 'community_tweet_hidden' === i.limited_actions,
                u = c.a.getEducationType('community_hidden_tweet')
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
                o = (e.hideConversationControlsEducationText, e.loggedInUser, e.tweet),
                a = s.b.useProps().c9sEnabled(),
                i = m.a.getOriginalTweet(o),
                r = i.community_id_str,
                l = 'community_tweet_member_removed' === i.limited_actions,
                u = c.a.getEducationType('community_tweet_member_removed')
              if (a && r && l && u)
                return {
                  displayMode: 'detail' === n ? 'detail' : 'compact',
                  nativeID: t,
                  screenName: '',
                  scribeElement: 'removed_member_community_tweet_education',
                  type: u,
                }
            })(e),
            p = t || n || o || i || l,
            h = (function (e) {
              var t = e.conversationControlLabelNativeID,
                n = e.displayStyle,
                o = e.educationBannerProps,
                a = e.handleHeadsUpImpression,
                i = e.showConversationHeadsUp,
                c = e.tweet,
                l = s.b.useProps().headsUpVariant(),
                u = ['headsUpCopyA', 'headsUpCopyB'].includes(l) ? l : void 0
              if (
                (r.a.useEffect(
                  function () {
                    a && o && i
                      ? a(c.id_str, 'impression_hidden_convo_controls')
                      : a && !u && i
                      ? a(c.id_str, 'impression_hidden')
                      : a && u && i && a(c.id_str, 'impression')
                  },
                  [u, o, a, i, c.id_str],
                ),
                i && u)
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
            })(a()({ educationBannerProps: void 0 !== p }, e)),
            f = p || h
          if (!f) return null
          var w = e.displayStyle,
            b = e.handleAnchorAction,
            y = e.handleAnchorOpen,
            _ = e.handleAnchorSecondaryAction,
            g = f.anchorless,
            k = f.displayMode,
            C = f.nativeID,
            E = f.screenName,
            T = f.scribeElement,
            S = f.tweetPermalink,
            A = f.type,
            I = v[k]
          return 'inline' !== w || g
            ? r.a.createElement(d.a, { displayMode: k, nativeID: C, screenName: E, style: I, type: A })
            : r.a.createElement(
                u.a,
                {
                  onAction: b,
                  onOpen: y
                    ? function () {
                        return y(T)
                      }
                    : void 0,
                  onSecondaryAction: _,
                  screenName: E,
                  style: I,
                  tweetPermalink: S,
                  type: A,
                },
                r.a.createElement(d.a, { displayMode: k, nativeID: C, screenName: E, type: A }),
              )
        }
      p.defaultProps = { displayStyle: 'inline' }
      var v = l.a.create(function (e) {
        return {
          compact: { alignSelf: 'flex-start', marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
          inline: { marginTop: e.spaces.space8, marginBottom: e.spaces.space4 },
          detail: { marginTop: e.spaces.space12, marginBottom: e.spaces.space16 },
        }
      })
      t.a = p
    },
    'Z8+W': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return I
      }),
        n.d(t, 'a', function () {
          return R
        })
      var o = n('97Jx'),
        a = n.n(o),
        i = n('T0aG'),
        r = n.n(i),
        c = n('ddV6'),
        s = n.n(c),
        l = (n('849X'), n('TJCb'), n('hBvt'), n('ERkP')),
        u = n.n(l),
        d = n('mjJ+'),
        m = n('PxJJ'),
        p = n('3XMw'),
        v = n.n(p),
        h = n('wD1h'),
        f = n('I8UQ'),
        w = n('wwsH'),
        b = n('aITJ'),
        y = n('KDev'),
        _ = n('iEUn'),
        g = n('uCrx'),
        k = v.a.d636ebc6,
        C = v.a.eb3a8b0b,
        E = v.a.a4ae22fa,
        T = v.a.a0af935b,
        S = v.a.dac92b0c,
        A = v.a.aa650427
      function I(e) {
        var t = e.isLiked,
          n = e.likeTransitionAnimation,
          o = u.a.useState(!1),
          a = s()(o, 2),
          i = a[0],
          c = a[1],
          l = u.a.useRef(t)
        return (
          u.a.useEffect(
            function () {
              ;('object' === r()(n) || f.b.check(n)) && t !== l.current && (c(t), (l.current = t))
            },
            [t, n],
          ),
          {
            onAnimationEnd: function () {
              return c(!1)
            },
            showAnimation: i,
            transitionAnimationUrl: n,
          }
        )
      }
      function x() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionLike.onError')
        m.a.report(e)
      }
      function R(e) {
        var t = e.actionMenuDescription,
          n = e.activeColor,
          o = void 0 === n ? 'magenta500' : n,
          i = e.color,
          r = e.count,
          c = e.enableActionMenu,
          s = void 0 !== c && c,
          l = e.enableKeyboardShortcuts,
          m = e.iconSize,
          p = e.isDisabled,
          v = e.isFaded,
          f = e.isLiked,
          R = e.isPresentational,
          L = e.likeActionIconContainerRef,
          D = e.likeTransitionAnimation,
          M = e.link,
          P = e.onError,
          O = void 0 === P ? x : P,
          B = e.onLikeActionSelect,
          F = e.onMenuCancel,
          N = e.onPress,
          H = e.style,
          j = e.testIDs,
          U = e.withCount && 'number' == typeof r,
          K = f ? T : k
        U && (K = f ? A({ count: r }) : S({ count: r }))
        var z = I({ isLiked: f, likeTransitionAnimation: D })
        return u.a.createElement(
          w.a,
          a()({}, z, {
            ActiveIcon: g.a,
            Icon: _.a,
            accessibilityLabel: K,
            actionIconContainerRef: L,
            activeColor: o,
            behavioralEventContext: { viewType: 'like', viewState: { type: 'toggleable', toggledTo: !f } },
            color: i,
            count: r,
            enableKeyboardShortcuts: l,
            hoverLabel: { label: f ? C : k },
            iconSize: m,
            isActive: f,
            isDisabled: p,
            isFaded: v,
            isPresentational: R,
            keyboardShortcut: h.a.shortcuts.like,
            link: M,
            onError: O,
            onPress: function () {
              b.b.isFirefox() || y.a.vibrate(5), null == N || N()
            },
            renderMenu: s
              ? function (e) {
                  var n = [
                    {
                      text: E,
                      onClick: function () {
                        e(), null == B || B()
                      },
                      testID: null == j ? void 0 : j.like,
                      Icon: _.a,
                    },
                  ]
                  return u.a.createElement(d.a, {
                    description: t,
                    items: n,
                    onCloseRequested: function () {
                      e(), null == F || F()
                    },
                  })
                }
              : void 0,
            style: H,
            testID: j && (f ? j.unlike : j.like),
            withCount: U,
          }),
        )
      }
    },
    ZGdk: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    bwko: function (e, t) {
      e.exports = function (e, t, n, o) {
        function a(e, t, n, o) {
          return e < 20 ? (t & n) | (~t & o) : e < 40 ? t ^ n ^ o : e < 60 ? (t & n) | (t & o) | (n & o) : t ^ n ^ o
        }
        function i(e) {
          return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
        }
        function r(e, t) {
          var n = (65535 & e) + (65535 & t)
          return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n)
        }
        function c(e, t) {
          return (e << t) | (e >>> (32 - t))
        }
        function s(e, t) {
          ;(e[t >> 5] |= 128 << (24 - (t % 32))), (e[15 + (((t + 64) >> 9) << 4)] = t)
          for (
            var n = [80], o = 1732584193, s = -271733879, l = -1732584194, u = 271733878, d = -1009589776, m = 0;
            m < e.length;
            m += 16
          ) {
            for (var p = o, v = s, h = l, f = u, w = d, b = 0; b < 80; b++) {
              n[b] = b < 16 ? e[m + b] : c(n[b - 3] ^ n[b - 8] ^ n[b - 14] ^ n[b - 16], 1)
              var y = r(r(c(o, 5), a(b, s, l, u)), r(r(d, n[b]), i(b)))
              ;(d = u), (u = l), (l = c(s, 30)), (s = o), (o = y)
            }
            ;(o = r(o, p)), (s = r(s, v)), (l = r(l, h)), (u = r(u, f)), (d = r(d, w))
          }
          return [o, s, l, u, d]
        }
        function l(e) {
          for (var t = [], n = (1 << o) - 1, a = 0; a < e.length * o; a += o)
            t[a >> 5] |= (e.charCodeAt(a / 8) & n) << (32 - o - (a % 32))
          return t
        }
        return (
          n || (n = '='),
          o || (o = 8),
          (function (e, t) {
            return (function (e) {
              for (var t = '', o = 0; o < 4 * e.length; o += 3)
                for (
                  var a =
                      (((e[o >> 2] >> (8 * (3 - (o % 4)))) & 255) << 16) |
                      (((e[(o + 1) >> 2] >> (8 * (3 - ((o + 1) % 4)))) & 255) << 8) |
                      ((e[(o + 2) >> 2] >> (8 * (3 - ((o + 2) % 4)))) & 255),
                    i = 0;
                  i < 4;
                  i++
                )
                  8 * o + 6 * i > 32 * e.length
                    ? (t += n)
                    : (t += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(
                        (a >> (6 * (3 - i))) & 63,
                      ))
              return t
            })(
              (function (e, t) {
                var n = l(e)
                n.length > 16 && (n = s(n, e.length * o))
                for (var a = [16], i = [16], r = 0; r < 16; r++) (a[r] = 909522486 ^ n[r]), (i[r] = 1549556828 ^ n[r])
                var c = s(a.concat(l(t)), 512 + t.length * o)
                return s(i.concat(c), 672)
              })(e, t),
            )
          })(e, t)
        )
      }
    },
    dFWS: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
        return P
      })
      var o,
        a,
        i = n('ERkP'),
        r = n.n(i),
        c = n('38/B'),
        s = n('q1bs'),
        l = n('Eqye'),
        u = n('uCrx'),
        d = n('yiKp'),
        m = n.n(d),
        p = n('KEM+'),
        v = n.n(p),
        h = n.p + 'cheer.6249ab45.png',
        f = n.p + 'haha.c0b42cb5.png',
        w = n.p + 'hmm.bc35b1e5.png',
        b = n('3rX5'),
        y = n.p + 'like.7a3e9685.png',
        _ = n('kSIJ'),
        g = n('mJtw'),
        k = n.p + 'sad.f12709e5.png',
        C = n('rHpw'),
        E = n('MWbm'),
        T =
          ((o = {}),
          v()(o, g.a.Like, y),
          v()(o, g.a.Haha, f),
          v()(o, g.a.Hmm, w),
          v()(o, g.a.Sad, k),
          v()(o, g.a.Cheer, h),
          o),
        S = C.a.create(function (e) {
          return {
            fillContainer: { height: '100%', width: '100%' },
            reactionSelectedIcon: m()({}, C.a.absoluteFillObject),
            imageCover: { position: 'absolute' },
          }
        }),
        A = function (e) {
          var t = e.reactionType
          return r.a.createElement(
            E.a,
            { style: S.fillContainer },
            r.a.createElement(b.a, { accessibilityLabel: _.a[t], source: T[t], style: S.reactionSelectedIcon }),
            r.a.createElement(E.a, { style: [S.reactionSelectedIcon, S.imageCover] }),
          )
        },
        I = n('DQLs'),
        x =
          ((a = {}),
          v()(a, g.a.Hmm, 'https://abs.twimg.com/sticky/animations/hmm.reaction.1.json'),
          v()(a, g.a.Sad, 'https://abs.twimg.com/sticky/animations/sad.reaction.1.json'),
          v()(a, g.a.Haha, 'https://abs.twimg.com/sticky/animations/haha.reaction.1.json'),
          v()(a, g.a.Cheer, 'https://abs.twimg.com/sticky/animations/cheer.reaction.1.json'),
          v()(a, g.a.Like, 'https://abs.twimg.com/sticky/animations/like.reaction.1.json'),
          a),
        R = function (e) {
          var t = e.reactionType,
            n = s.b.get(x[t])
          return (
            (n && 'boolean' != typeof n) || (n = x[t]), r.a.createElement(I.a, { animation: n, autoplay: !0, loop: !0 })
          )
        },
        L = function () {
          var e = window.navigator.deviceMemory
          return c.a.reducedMotionEnabled || l.a.isEnabled || (e && e < 4)
        },
        D = function (e) {
          var t = e.legacyHeart,
            n = e.reactionType,
            o = e.style,
            a = e.withAnimation,
            i = void 0 !== a && a,
            c = !L() && i ? R : A
          return t && n === g.a.Like
            ? r.a.createElement(E.a, { style: [M.root, M.legacyHeart, o] }, r.a.createElement(u.a, { style: M.root }))
            : r.a.createElement(E.a, { style: [M.root, o] }, r.a.createElement(c, { reactionType: n }))
        },
        M = C.a.create(function (e) {
          return { root: { height: '100%', width: '100%' }, legacyHeart: { color: e.colors.magenta500 } }
        }),
        P = function () {
          r.a.useEffect(function () {
            L() || (s.b.check(x.Hmm), s.b.check(x.Sad), s.b.check(x.Haha), s.b.check(x.Cheer), s.b.check(x.Like))
          }, [])
        }
      t.a = r.a.memo(D)
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var o = n('VrFO'),
        a = n.n(o),
        i = n('Y9Ll'),
        r = n.n(i),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        m = n.n(d),
        p = n('ERkP'),
        v = n.n(p),
        h = n('t62R'),
        f = n('3XMw'),
        w = n.n(f),
        b = n('rHpw'),
        y = n('MWbm'),
        _ = n('yiKp'),
        g = n.n(_),
        k = n('Lsrn'),
        C = n('k/Ka'),
        E = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(C.a)(
            'svg',
            g()(
              g()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [k.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      E.metadata = { width: 24, height: 24 }
      var T = E,
        S = n('uFYP'),
        A = w.a.f1a1b790,
        I = w.a.if2bf8b3,
        x = w.a.f3624b5c,
        R = w.a.b4b3b113,
        L = w.a.be22205f,
        D = w.a.hcbbe447,
        M = (function (e) {
          s()(n, e)
          var t = u()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.color,
                    n = e.nativeID,
                    o = e.style,
                    a = e.withCircleIcon ? T : S.a
                  return v.a.createElement(
                    y.a,
                    { style: [P.root, o] },
                    v.a.createElement(a, { style: [P.icon, t && P[t]] }),
                    v.a.createElement(h.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    o = e.promotedContent,
                    a = o.adMetadataContainer,
                    i = o.advertiser,
                    r = o.advertiser_name,
                    c = o.disclosure_type,
                    s = t && i && t === i.id_str,
                    l = 'string' == typeof c && 'political' === c.toLowerCase(),
                    u = 'string' == typeof c && 'issue' === c.toLowerCase(),
                    d = !(!a || 'POLITICAL' !== a.disclaimerType) || l,
                    m = !(!a || 'ISSUE' !== a.disclaimerType) || u,
                    p = (a || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!r || s || p
                      ? d
                        ? x
                        : m
                        ? L
                        : I
                      : d
                      ? R({ fullName: r })
                      : m
                      ? D({ fullName: r })
                      : A({ fullName: r }))
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(M, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var P = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    feOz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return pt
      })
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ddV6'),
        r = n.n(i),
        c = (n('KOtZ'), n('7x/C'), n('LW0h'), n('97Jx')),
        s = n.n(c),
        l = n('m3Bd'),
        u = n.n(l),
        d = n('ERkP'),
        m = n.n(d),
        p = n('+Tpo'),
        v = n('T0aG'),
        h = n.n(v),
        f = (n('849X'), n('TJCb'), n('PxJJ')),
        w = n('3XMw'),
        b = n.n(w),
        y = n('wD1h'),
        _ = n('wwsH'),
        g = n('aITJ'),
        k = n('KDev'),
        C = n('VrFO'),
        E = n.n(C),
        T = n('Y9Ll'),
        S = n.n(T),
        A = n('n70c'),
        I = n.n(A),
        x = n('AuHH'),
        R = n.n(x),
        L = n('5Yy7'),
        D = n.n(L),
        M = n('2VqO'),
        P = n.n(M),
        O = n('q1bs'),
        B = 'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
        F = new ((function (e) {
          D()(n, e)
          var t = P()(n)
          function n() {
            return E()(this, n), t.apply(this, arguments)
          }
          return (
            S()(n, [
              {
                key: 'check',
                value: function (e) {
                  return I()(R()(n.prototype), 'check', this).call(this, null != e ? e : B)
                },
              },
            ]),
            n
          )
        })(O.a))(),
        N = n('Lsrn'),
        H = n('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(H.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [N.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            m.a.createElement(
              'g',
              null,
              m.a.createElement('path', {
                d: 'M3.538 14.22l7.15 7.18c.39.39.89.63 1.47.6.55-.01 1.07-.23 1.45-.63l6.88-7.18c.56-.59.72-1.42.4-2.17s-1.03-1.21-1.84-1.21h-3.72V4c0-1.1-.9-2-2-2h-2.66c-1.11 0-2 .9-2 2v6.81h-3.72c-.82 0-1.53.47-1.84 1.23-.32.76-.15 1.59.43 2.18z',
              }),
            ),
          )
        }
      j.metadata = { width: 24, height: 24 }
      var U = j,
        K = n('IqLm'),
        z = b.a.d2b2b8e5,
        V = b.a.hcb3286f,
        W = b.a.cb5dafd3
      function q() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Error('TweetActionDownvote.onError')
        f.a.report(e)
      }
      var Q = n('Z8+W'),
        X = n('KEM+'),
        J = n.n(X),
        G = n('CHgo'),
        Y = (n('z84I'), n('M+/F'), n('tQbP'), n('de1q')),
        Z = n('mJtw'),
        $ = n('cHvH'),
        ee = n('rHpw'),
        te = n('MWbm'),
        ne = function (e, t, n) {
          var o = n.reduce(function (e, t) {
            return e + t.count
          }, 0)
          if (0 === o) return []
          var a = e || 20
          return n
            .filter(function (e) {
              return e.count >= o * (a / 100)
            })
            .filter(function (e, n, o) {
              return !(1 === o.length && e.type === Z.a.Like) || (t && t !== Z.a.Like)
            })
            .filter(function (e, n, o) {
              return !(1 === o.length && e.type === t)
            })
            .filter(function (e, n, o) {
              return !(1 === e.count && e.type === t)
            })
            .sort(function (e, t) {
              return t.count - e.count
            })
            .slice(0, 3)
        },
        oe = ee.a.create(function (e) {
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
            o = e.reacted,
            a = e.reactionCounts,
            i = e.size,
            r = void 0 === i ? 'normal' : i,
            c = e.style,
            s = ne(t, o, a)
          return 0 === s.length
            ? null
            : m.a.createElement($.a, null, function (e) {
                return e.windowWidth > ee.a.theme.breakpoints.xSmall * ee.a.theme.scaleMultipler
                  ? m.a.createElement(
                      te.a,
                      { style: [oe.basket, c] },
                      s.map(function (e) {
                        return m.a.createElement(
                          te.a,
                          { key: e.type, style: _.b[r] },
                          m.a.createElement(Y.a, { legacyHeart: n, reactionType: e.type, withAnimation: !1 }),
                        )
                      }),
                    )
                  : null
              })
        },
        ie = n('cm6r'),
        re = n('tn7R'),
        ce = n('3dyc'),
        se = n('OiMc'),
        le = n('38/B'),
        ue = n('kSIJ'),
        de = n('WrBE'),
        me = ee.a.theme.spacesPx.space40,
        pe = { growing: 'growing', grown: 'grown', shrinking: 'shrinking', shrunk: 'shrunk' },
        ve = function (e, t) {
          var n = m.a.useRef(new de.a.Value(e)).current,
            o = m.a.useState(pe.shrunk),
            a = r()(o, 2),
            i = a[0],
            c = a[1],
            s = m.a.useCallback(
              function (e) {
                c(pe.growing),
                  de.a.timing(n, { duration: 200, toValue: t, useNativeDriver: !1 }).start(function (t) {
                    t.finished && c(pe.grown), e && e(t)
                  })
              },
              [n, t],
            ),
            l = m.a.useCallback(
              function (t) {
                c(pe.shrinking),
                  de.a.timing(n, { duration: 200, toValue: e, useNativeDriver: !1 }).start(function (e) {
                    e.finished && c(pe.shrunk), t && t(e)
                  })
              },
              [n, e],
            )
          return { animationState: i, currentHeight: n, startAnimation: s, resetAnimation: l }
        },
        he = function (e) {
          return Object(H.a)('div', e)
        },
        fe = ee.a.create(function (e) {
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
        we = function (e) {
          var t = e.enableTouch,
            n = e.forceHovered,
            o = e.legacyHeart,
            a = e.onSelect,
            i = e.reacted,
            c = e.reactionType,
            s = e.withAnimation,
            l = void 0 === s || s,
            u = m.a.useState(!1),
            d = r()(u, 2),
            p = d[0],
            v = d[1],
            h = ve(me, 1.5 * me),
            f = h.animationState,
            w = h.currentHeight,
            b = h.resetAnimation,
            y = h.startAnimation
          m.a.useEffect(
            function () {
              if (!le.a.reducedMotionEnabled) {
                var e = n || p,
                  t = f === pe.shrinking || f === pe.shrunk,
                  o = f === pe.growing || f === pe.grown
                e && t ? y() : !e && o && b()
              }
            },
            [n, p, y, b, f],
          )
          var _ = function () {
              v(!0)
            },
            g = function () {
              v(!1)
            },
            k = n || p
          return m.a.createElement(
            te.a,
            { style: fe.container },
            m.a.createElement(
              de.a.View,
              { style: { height: w, width: w } },
              m.a.createElement(
                ie.a,
                {
                  accessibilityLabel: ue.a[c],
                  accessibilityRole: 'button',
                  hoverLabel:
                    f === pe.grown || le.a.reducedMotionEnabled
                      ? { label: ue.a[c], preferredVerticalOrientation: 'up', withDelay: !1, withExtraSpace: !0 }
                      : void 0,
                  interactiveStyles: null,
                  onFocusRingGained: _,
                  onFocusRingLost: g,
                  onHoverIn: _,
                  onHoverOut: g,
                  onPress: a,
                  style: fe.fullHeight,
                },
                m.a.createElement(Y.a, { legacyHeart: o, reactionType: c, withAnimation: l }),
                i && !k && m.a.createElement(te.a, { style: fe.activeBackground }),
              ),
            ),
            t && m.a.createElement(he, { 'data-reaction-type': c, style: fe.largeTouchArea }),
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
        ye = function (e) {
          var t = e.dismissReactionPicker,
            n = e.enableTouch,
            o = e.forceHovered,
            a = e.legacyHeart,
            i = e.onSelection,
            r = e.reacted,
            c = e.reactionOptions,
            s = e.withAnimation,
            l = void 0 === s || s
          return m.a.createElement(
            te.a,
            { style: be.popoverContainer },
            c.map(function (e) {
              return m.a.createElement(we, {
                enableTouch: n,
                forceHovered: o === e,
                key: e,
                legacyHeart: a,
                onSelect:
                  ((c = e),
                  function () {
                    i(c, 'picker-tap'), t()
                  }),
                reacted: r === e,
                reactionType: e,
                withAnimation: l,
              })
              var c
            }),
          )
        },
        _e = n('iEUn'),
        ge = n('DlVf'),
        ke = n('FG+G'),
        Ce = n('uCrx'),
        Ee = Object(re.a)(Z.a),
        Te = Z.a.Like,
        Se = b.a.e3469988,
        Ae = b.a.c46f0fce,
        Ie = b.a.ga9c2b52,
        xe = b.a.hb755a53,
        Re = b.a.cff26b89,
        Le = 'data-reaction-type',
        De = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: Z.a.Cheer, style: t, withAnimation: !1 })
        },
        Me = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: Z.a.Haha, style: t, withAnimation: !1 })
        },
        Pe = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: Z.a.Hmm, style: t, withAnimation: !1 })
        },
        Oe = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: Z.a.Like, style: t, withAnimation: !1 })
        },
        Be = function (e) {
          var t = e.style
          return m.a.createElement(Y.a, { reactionType: Z.a.Sad, style: t, withAnimation: !1 })
        },
        Fe = ee.a.create(function (e) {
          return {
            root: { justifyContent: 'center', userSelect: 'none' },
            popoverContainer: { minWidth: 0, overflow: 'visible' },
            buttonContainer: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
            fruitBasketSpacing: { marginLeft: e.spaces.space8 },
            caretWithoutCount: { marginLeft: e.spaces.space12 },
          }
        }),
        Ne = function (e) {
          var t,
            n = e.activeColor,
            o = void 0 === n ? 'magenta500' : n,
            a = e.color,
            i = e.enableKeyboardShortcuts,
            c = e.experimentalFruitBasketThreshold,
            l = e.iconSize,
            u = e.isDisabled,
            d = e.isFaded,
            p = e.isPresentational,
            v = e.legacyHeart,
            h = e.onPopoverDismiss,
            f = e.onPopoverOpen,
            w = e.onReactionSelect,
            b = e.reacted,
            g = e.reactionCounts,
            k = void 0 === g ? [] : g,
            C = e.style,
            E = e.tweetActionsRef,
            T = e.testIDs,
            S = e.withAnimation,
            A = void 0 === S || S,
            I = e.withCount,
            x = void 0 !== I && I,
            R = e.withFruitBasket,
            L = void 0 !== R && R,
            D = m.a.useState(null),
            M = r()(D, 2),
            P = M[0],
            O = M[1],
            B = m.a.useState(!1),
            F = r()(B, 2),
            N = F[0],
            H = F[1],
            j = m.a.useState(!1),
            U = r()(j, 2),
            K = U[0],
            z = U[1],
            V = m.a.useRef(null),
            W = m.a.useRef()
          Object(Y.b)()
          var q = Object(Q.b)({ isLiked: b === Z.a.Like && !!v }),
            X = k.reduce(function (e, t) {
              return e + t.count
            }, 0),
            $ = b ? Ae : Se
          x && ($ = b ? Re({ count: X }) : xe({ count: X }))
          var ne =
              ((t = {}),
              J()(t, y.a.shortcuts.like, function (e) {
                he(!0)
              }),
              J()(t, y.a.shortcuts.reactUndo, function (e) {
                return w()
              }),
              J()(t, y.a.shortcuts.reactHmm, function (e) {
                return w(Z.a.Hmm, 'keyboard-shortcut')
              }),
              J()(t, y.a.shortcuts.reactSad, function (e) {
                return w(Z.a.Sad, 'keyboard-shortcut')
              }),
              J()(t, y.a.shortcuts.reactHaha, function (e) {
                return w(Z.a.Haha, 'keyboard-shortcut')
              }),
              J()(t, y.a.shortcuts.reactCheer, function (e) {
                return w(Z.a.Cheer, 'keyboard-shortcut')
              }),
              J()(t, y.a.shortcuts.reactLike, function (e) {
                return w(Z.a.Like, 'keyboard-shortcut')
              }),
              t),
            oe = function (e) {
              z(e === ce.a.longPress), null == f || f(e)
            },
            re = function () {
              H(!0)
            },
            le = m.a.useCallback(function (e) {
              var t,
                n = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY),
                o =
                  null == n || null === (t = n.closest('['.concat(Le, ']'))) || void 0 === t
                    ? void 0
                    : t.getAttribute(Le)
              O(o ? Z.a[o] : null), e.preventDefault()
            }, [])
          m.a.useEffect(
            function () {
              if (V.current) {
                var e = Object(G.a)(V.current, le, !1)
                return function () {
                  e && e()
                }
              }
            },
            [le],
          )
          var ue = function (e) {
              return function () {
                H(!1), P && (w(P, 'picker-touchend'), O(null), e())
              }
            },
            de = function (e) {
              return m.a.createElement(ye, {
                dismissReactionPicker: e,
                enableTouch: N,
                forceHovered: P,
                legacyHeart: v,
                onSelection: w,
                reacted: b,
                reactionOptions: Ee,
                withAnimation: A,
              })
            },
            me = function (e) {
              return function (t) {
                e(), t.stopPropagation()
              }
            },
            pe = function () {
              switch (b) {
                case Z.a.Cheer:
                  return De
                case Z.a.Haha:
                  return Me
                case Z.a.Hmm:
                  return Pe
                case Z.a.Like:
                  return v ? Ce.a : Oe
                case Z.a.Sad:
                  return Be
                default:
                  return Oe
              }
            },
            ve = function (e) {
              return function (t) {
                e(), he('keydown' === t.type)
              }
            },
            he = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              b ? w() : w(Te, e ? 'keyboard-shortcut' : 'button-tap')
            },
            fe = function () {
              return L
                ? 0 === X || (1 === X && b)
                  ? null
                  : m.a.createElement(ae, {
                      experimentalFruitBasketThreshold: c,
                      legacyHeart: v,
                      reacted: b,
                      reactionCounts: k,
                      size: l,
                      style: Fe.fruitBasketSpacing,
                    })
                : null
            }
          return m.a.createElement(
            te.a,
            { style: [Fe.root, C] },
            m.a.createElement(
              y.a,
              { enabled: !!i, handlers: ne },
              m.a.createElement(
                se.a,
                {
                  anchorRef: K ? E : W,
                  animationDuration: 'normal',
                  animationType: 'slide',
                  contentStyle: Fe.popoverContainer,
                  disabled: u || d,
                  enableHover: !0,
                  enableLongPress: !0,
                  hoverDelay: 'short',
                  onDismiss: h,
                  onOpen: oe,
                  preferredVerticalOrientation: 'up',
                  renderContent: de,
                  withCardContentOverflow: !0,
                  withFixedPosition: !1,
                  withRoundedSides: !0,
                },
                function (e) {
                  var t = e.dismissPopover,
                    n = e.forceOpen
                  return m.a.createElement(
                    ie.a,
                    {
                      focusable: !1,
                      interactiveStyles: null,
                      onTouchEnd: ue(t),
                      onTouchStart: re,
                      ref: V,
                      style: Fe.buttonContainer,
                    },
                    function (e) {
                      var i = e.isFocusedWithin
                      return m.a.createElement(
                        m.a.Fragment,
                        null,
                        m.a.createElement(
                          _.a,
                          s()({}, q, {
                            ActiveIcon: pe(),
                            Icon: v ? _e.a : ge.a,
                            accessibilityLabel: $,
                            actionIconContainerRef: W,
                            activeColor: o,
                            color: a,
                            count: X,
                            decoration: fe(),
                            enableKeyboardShortcuts: !1,
                            hoverLabel: { label: Se },
                            iconSize: l,
                            isActive: !!b,
                            isDisabled: u,
                            isFaded: d,
                            isPresentational: p,
                            onPress: ve(t),
                            showBackgroundWhenActive: !0,
                            testID: T && (b ? T.unreact : T.react),
                            withCount: x,
                          }),
                        ),
                        m.a.createElement(_.a, {
                          Icon: ke.a,
                          accessibilityLabel: Ie,
                          activeColor: o,
                          color: a,
                          hoverLabel: { label: Ie },
                          iconSize: l,
                          isDisabled: u,
                          isFaded: d,
                          isPresentational: p,
                          onPress: me(n),
                          style: [!i && ee.a.visuallyHidden, !x && Fe.caretWithoutCount],
                        }),
                      )
                    },
                  )
                },
              ),
            ),
          )
        },
        He = n('HSMM'),
        je = n('Wk1j'),
        Ue = n('G41x'),
        Ke = ['isFromProtectedAccount'],
        ze = p.a,
        Ve = function (e) {
          var t = e.activeColor,
            n = void 0 === t ? 'orange500' : t,
            o = e.color,
            a = e.count,
            i = e.enableKeyboardShortcuts,
            c = e.iconSize,
            l = e.isDisabled,
            u = e.isFaded,
            d = e.isDownvoted,
            p = e.isPresentational,
            v = e.downvoteTransitionAnimation,
            f = void 0 === v ? B : v,
            w = e.onError,
            b = void 0 === w ? q : w,
            C = e.onPress,
            E = e.style,
            T = e.testIDs,
            S = e.withCount && 'number' == typeof a,
            A = d ? W : z,
            I = (function (e) {
              var t = e.downvoteTransitionAnimation,
                n = e.isDownvoted,
                o = m.a.useState(!1),
                a = r()(o, 2),
                i = a[0],
                c = a[1],
                s = m.a.useRef(n)
              return (
                m.a.useEffect(
                  function () {
                    ;('object' === h()(t) || F.check(t)) && n !== s.current && (c(n), (s.current = n))
                  },
                  [n, t],
                ),
                {
                  onAnimationEnd: function () {
                    return c(!1)
                  },
                  showAnimation: i,
                  transitionAnimationUrl: t,
                }
              )
            })({ isDownvoted: d, downvoteTransitionAnimation: f })
          return m.a.createElement(
            _.a,
            s()({}, I, {
              ActiveIcon: U,
              Icon: K.a,
              accessibilityLabel: A,
              activeColor: n,
              behavioralEventContext: { viewType: 'downvote', viewState: { type: 'toggleable', toggledTo: !d } },
              color: o,
              count: a,
              enableKeyboardShortcuts: i,
              hoverLabel: { label: d ? V : z },
              iconSize: c,
              isActive: d,
              isDisabled: l,
              isFaded: u,
              isPresentational: p,
              keyboardShortcut: y.a.shortcuts.downvote,
              onError: b,
              onPress: function () {
                g.b.isFirefox() || k.a.vibrate(5), null == C || C()
              },
              style: E,
              testID: T && (d ? T.undownvote : T.downvote),
              withCount: S,
            }),
          )
        },
        We = Q.a,
        qe = Ne,
        Qe = He.a,
        Xe = Ue.a
      var Je = n('Xrkv'),
        Ge = n('fs1G'),
        Ye = n('Q+qU'),
        Ze = n('3MlI'),
        $e = n('0ig/'),
        et = b.a.a0af935b,
        tt = b.a.fbaa28ef,
        nt = b.a.f9be84f0,
        ot = b.a.g23ce6f0,
        at = b.a.b75196a4,
        it = function (e) {
          return m.a.createElement(pt.ActionAnalytics, e)
        },
        rt = function (e) {
          return m.a.createElement(pt.ActionDownvote, e)
        },
        ct = function (e) {
          return m.a.createElement(pt.ActionLike, e)
        },
        st = function (e) {
          return m.a.createElement(pt.ActionReaction, e)
        },
        lt = function (e) {
          return m.a.createElement(pt.ActionReply, e)
        },
        ut = function (e) {
          return m.a.createElement(pt.ActionRetweet, e)
        },
        dt = function (e) {
          return m.a.createElement(pt.ActionShare, e)
        },
        mt = []
      function pt(e) {
        var t = e.actionSize,
          n = void 0 === t ? 'normal' : t,
          o = e.activeColor,
          i = void 0 === o ? void 0 : o,
          c = e.color,
          s = void 0 === c ? 'gray700' : c,
          l = e.displayStyle,
          u = e.downvoteCount,
          d = e.enableKeyboardShortcuts,
          p = void 0 === d || d,
          v = e.isDisabled,
          h = void 0 !== v && v,
          f = e.isDownvoted,
          w = void 0 !== f && f,
          y = e.isFromProtectedAccount,
          _ = e.isLiked,
          g = e.isRetweeted,
          k = e.isPresentational,
          C = e.likeCount,
          E = e.nativeID,
          T = e.reaction,
          S = e.reactionCounts,
          A = e.renderAnalyticsAction,
          I = void 0 === A ? it : A,
          x = e.renderDownvoteAction,
          R = void 0 === x ? rt : x,
          L = e.renderLikeAction,
          D = void 0 === L ? ct : L,
          M = e.renderReactionAction,
          P = void 0 === M ? st : M,
          O = e.renderReplyAction,
          B = void 0 === O ? lt : O,
          F = e.renderRetweetAction,
          N = void 0 === F ? ut : F,
          H = e.renderShareAction,
          j = void 0 === H ? dt : H,
          U = e.replyCount,
          K = e.retweetCount,
          z = e.showDownvoteBeforeLike,
          V = void 0 !== z && z,
          W = e.style,
          q = e.tweetLink,
          Q = e.withAnalytics,
          X = void 0 !== Q && Q,
          J = e.withDownvote,
          G = void 0 !== J && J,
          Y = e.withCount,
          Z = void 0 !== Y && Y,
          $ = e.withReaction,
          ee = void 0 !== $ && $,
          ne = m.a.useState(!1),
          oe = r()(ne, 2),
          ae = oe[0],
          ie = oe[1],
          re = m.a.useRef(null),
          se = Object($e.a)(),
          le = X && se.width >= Ze.a,
          ue =
            null == S
              ? void 0
              : S.reduce(function (e, t) {
                  return e + t.count
                }, 0),
          de = m.a.useMemo(
            function () {
              if (Z) {
                var e = b.a.b03835c7,
                  t = b.a.hb7b0cea,
                  n = b.a.e089b42d,
                  o = b.a.d8320937
                return Object(Je.a)(
                  [
                    U ? e({ replyCount: U }) : null,
                    K ? t({ retweetCount: K }) : null,
                    g ? ot : null,
                    C && !ee ? n({ likeCount: C }) : null,
                    _ && !ee ? et : null,
                    ue && ee ? o({ reactionCount: ue }) : null,
                    T && ee ? tt : null,
                    w && G ? nt : null,
                  ].filter(Boolean),
                  !0,
                )
              }
            },
            [w, _, g, C, ue, T, U, K, Z, G, ee],
          ),
          me = { color: s, iconSize: n, isDisabled: h },
          pe = function () {
            return R(
              a()(
                a()({}, me),
                {},
                {
                  activeColor: i,
                  count: u,
                  enableKeyboardShortcuts: p,
                  isDownvoted: w,
                  isPresentational: k,
                  withCount: Z,
                },
              ),
            )
          }
        return m.a.createElement(
          te.a,
          { ref: re },
          m.a.createElement(
            Ze.b,
            { accessibilityLabel: de, displayStyle: l, nativeID: E, style: [W, ae && vt.hidden] },
            B(
              a()(
                a()({}, me),
                {},
                { activeColor: i, count: U, enableKeyboardShortcuts: p, isPresentational: k, withCount: Z },
              ),
            ),
            N(
              a()(
                a()({}, me),
                {},
                {
                  activeColor: i,
                  count: K,
                  enableKeyboardShortcuts: p,
                  isFromProtectedAccount: y,
                  isRetweeted: g,
                  isPresentational: k,
                  withCount: Z,
                },
              ),
            ),
            G && V ? pe() : null,
            ee
              ? P(
                  a()(
                    a()({}, me),
                    {},
                    {
                      activeColor: i,
                      enableKeyboardShortcuts: p,
                      isPresentational: k,
                      onPopoverDismiss: function () {
                        return ie(!1)
                      },
                      onPopoverOpen: function (e) {
                        ie(e === ce.a.longPress)
                      },
                      onReactionSelect: Ge.a,
                      reacted: T,
                      reactionCounts: S,
                      tweetActionsRef: re,
                      withCount: Z,
                    },
                  ),
                )
              : D(
                  a()(
                    a()({}, me),
                    {},
                    {
                      activeColor: i,
                      count: C,
                      enableKeyboardShortcuts: p,
                      isLiked: _,
                      isPresentational: k,
                      withCount: Z,
                    },
                  ),
                ),
            G && !V ? pe() : null,
            j(
              a()(
                a()({}, me),
                {},
                {
                  actionItems: mt,
                  activeColor: i,
                  enableKeyboardShortcuts: p,
                  isPresentational: k,
                  withCount: Z && le,
                },
              ),
            ),
            le ? I(a()(a()({}, me), {}, { isPresentational: k, tweetLink: q })) : null,
          ),
          ae ? m.a.createElement(te.a, { style: vt.swipeInfoBar }, m.a.createElement(Ye.a, { color: s }, at)) : null,
        )
      }
      ;(pt.ActionAnalytics = ze),
        (pt.ActionDownvote = Ve),
        (pt.ActionLike = We),
        (pt.ActionReaction = qe),
        (pt.ActionReply = Qe),
        (pt.ActionRetweet = function (e) {
          var t = e.isFromProtectedAccount,
            n = void 0 !== t && t,
            o = u()(e, Ke)
          return m.a.createElement(
            je.b,
            s()({}, o, {
              excludeRetweetAction: o.excludeRetweetAction || n,
              excludeRetweetWithCommentAction: o.excludeRetweetWithCommentAction || n,
              isDisabled: o.isDisabled || (!o.isRetweeted && n),
            }),
          )
        }),
        (pt.ActionShare = Xe)
      var vt = ee.a.create(function (e) {
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
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    iGRG: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var o,
        a = n('KEM+'),
        i = n.n(a),
        r = n('k49u'),
        c = n('3XMw'),
        s = n.n(c),
        l = s.a.ja03b44d,
        u = s.a.da5c438f,
        d = s.a.f03dab29,
        m =
          ((o = { defaultToast: { text: l } }),
          i()(o, r.a.BlockedUserError, { toast: { text: d } }),
          i()(o, r.a.ProtectedStatusFavoriteError, { toast: { text: u } }),
          i()(o, 'showToast', !0),
          o)
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
          return S
        }),
        n.d(t, 'd', function () {
          return A
        }),
        n.d(t, 'e', function () {
          return I
        })
      var o = n('KEM+'),
        a = n.n(o),
        i = n('ddV6'),
        r = n.n(i),
        c = n('RhWx'),
        s = n.n(c),
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
        m = n('zrOZ'),
        p = n('bwko'),
        v = n.n(p),
        h = n('Ssj5'),
        f = 'articles',
        w = 'rweb.articlesVisited',
        b = 'rweb.articleDomains',
        y = 'rweb/articles/ADD_DOMAINS',
        _ = 'rweb/articles/ADD_VISITED_ARTICLES',
        g = function (e) {
          return { payload: e, type: y }
        },
        k = function (e) {
          return { payload: e, type: _ }
        },
        C = Object.freeze({ domains: void 0, articles: new Set() })
      var E = function (e) {
          return e.articles.domains
        },
        T = function (e, t) {
          var n = E(e)
          return S(n, t)
        },
        S = function (e, t) {
          return !!e && !!t && e.includes((t || '').replace('www.', ''))
        },
        A = function (e, t, n) {
          var o = !!n && T(e, n)
          if (t && o) {
            var a =
                (function (e) {
                  return e.articles.articles
                })(e) || new Set(),
              i = v()('', t)
            return a.has(i)
          }
          return !1
        },
        I = function (e) {
          return function (t, n, o) {
            var a = o.userPersistence,
              i = v()('', e)
            return t(k([i])), x(i, a)
          }
        },
        x = function (e, t) {
          return t.get(w).then(function (n) {
            var o = (null == n ? void 0 : n.articles) || new Set()
            o.add(e)
            var a = (null == n ? void 0 : n.lastSeenMap) || {},
              i = Date.now()
            a[e] = i
            for (var c = 0, s = Object.entries(a); c < s.length; c++) {
              var l = r()(s[c], 2),
                u = l[0],
                d = l[1]
              i - Number(d) > 6048e5 && (o.delete(u), delete a[u])
            }
            return t.set(w, { articles: o, lastSeenMap: a })
          })
        }
      h.a.register(
        a()({}, f, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case y:
              return u()(u()({}, e), {}, { domains: t.payload })
            case _:
              return t.payload instanceof Array
                ? u()(u()({}, e), {}, { articles: Object(m.a)([].concat(s()(e.articles), s()(t.payload))) })
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
                    var o = null == t ? void 0 : t.domains,
                      a = null == t ? void 0 : t.updatedTime,
                      i = Date.now()
                    ;(!a || i - a > 864e5) &&
                      n.api.ArticleDomains.fetchArticleDomainsGraphQL()
                        .then(function (t) {
                          n.devicePersistence.set(b, { domains: t || [], updatedTime: i }), e(g(t || void 0))
                        })
                        .catch(function () {}),
                      t && e(g(o))
                  }),
                  n.userPersistence.get(w).then(function (t) {
                    var n = null == t ? void 0 : t.articles
                    n && e(k(Array.from(n)))
                  }),
                ]).then(function () {})
              : Promise.resolve()
          }
        },
      )
    },
    kSIJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var o,
        a = n('KEM+'),
        i = n.n(a),
        r = n('3XMw'),
        c = n.n(r),
        s = n('mJtw'),
        l =
          ((o = {}),
          i()(o, s.a.Like, c.a.d636ebc6),
          i()(o, s.a.Haha, c.a.bd83592a),
          i()(o, s.a.Hmm, c.a.f84f0fa8),
          i()(o, s.a.Sad, c.a.g47ce0e4),
          i()(o, s.a.Cheer, c.a.fc8a13c5),
          o)
    },
    lBmi: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    mqpi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'b', function () {
          return c
        })
      n('yH/f'), n('2G9S'), n('vrRf')
      var o = Object.freeze({
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
          PinToProfile: 'pin_to_profile',
          ViewHiddenReplies: 'view_hidden_replies',
          VoteOnPoll: 'vote_on_poll',
        }),
        a = [o.AddToBookmarks, o.Retweet, o.SendViaDM, o.ShareTweetVia],
        i = [o.Retweet, o.QuoteTweet, o.SendViaDM, o.ShareTweetVia, o.Embed],
        r = Object.freeze({
          enabled: 'tweet_limited_actions_config_enabled',
          non_compliant: 'tweet_limited_actions_config_non_compliant',
          community_tweet_member: 'tweet_limited_actions_config_community_tweet_member',
          community_tweet_non_member: 'tweet_limited_actions_config_community_tweet_non_member',
          community_tweet_hidden: 'tweet_limited_actions_config_community_tweet_hidden',
          community_tweet_member_removed: 'tweet_limited_actions_config_community_tweet_member_removed',
          disable_state_media_autoplay: 'tweet_limited_actions_config_disable_state_media_autoplay',
          limit_trusted_friends_tweet: 'tweet_limited_actions_config_limit_trusted_friends_tweet',
        }),
        c = function (e, t, n, c) {
          var s = (function (e, t, n) {
              var c = t.community_id_str,
                s = t.limited_actions,
                l = t.trusted_friends_info
              if ('limited_replies' === s) return [o.Reply]
              if (s) {
                if (!r.hasOwnProperty(s)) return []
                var u = r[s]
                return e.getArrayValue(u, [])
              }
              return c
                ? e.isTrue('c9s_participation_enabled')
                  ? n
                    ? a
                    : [].concat(a, [o.VoteOnPoll, o.Reply])
                  : [].concat(a, [o.VoteOnPoll, o.Reply, o.QuoteTweet])
                : l
                ? i
                : []
            })(e, t, c),
            l = e.isTrue('tweet_limited_actions_config_enabled'),
            u =
              '' !==
              e.getValueWithoutScribeImpression('conversation_controls_limited_replies_consumption_configuration')
          return !(null == s || !s.length || (!l && !u)) && s.indexOf(n) > -1
        }
    },
    ms2t: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
    'r7g+': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ae
      })
      var o = n('yiKp'),
        a = n.n(o),
        i = (n('TJCb'), n('7x/C'), n('DZ+c'), n('hBvt'), n('ERkP')),
        r = n.n(i),
        c = n('t62R'),
        s = n('nBUg'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('Z6aJ'),
        m = n('rHpw'),
        p = n('JWUO'),
        v = n('E0cF'),
        h = n('97Jx'),
        f = n.n(h),
        w = n('ddV6'),
        b = n.n(w),
        y = n('m3Bd'),
        _ = n.n(y),
        g = (n('yH/f'), n('lTEL'), n('87if'), n('kYxP'), n('Cm4o'), n('KrtT'), n('ho0z'), n('SEra')),
        k = n('ir4X'),
        C = n('e5HP'),
        E = n('GBcw'),
        T = n('tLTi'),
        S = n('Nqmc'),
        A = n('v302'),
        I = n('sX0n'),
        x = n('feOz'),
        R = n('YBcl'),
        L = n('kY28'),
        D = n('6nXH'),
        M = n('cTG8'),
        P = n('R7KY'),
        O = n('9VO7'),
        B = n('jV+4'),
        F = n('0/y9'),
        N = [
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
        H = Object.freeze({
          ActionsBar: x.a,
          ActionMenu: I.a,
          Education: R.a,
          HighlightedUserLabel: k.a,
          PromotedIndicator: C.a,
          ReplyContext: L.a,
          RichContent: D.a,
          SocialContext: S.a,
          Text: M.a,
          Tombstone: A.a,
          Timestamp: E.a,
          UserAvatar: P.a,
          UserFollowIndicator: O.a,
          UserName: B.a,
        }),
        j = {
          linkProcessor: function (e) {
            return a()(a()({}, e), {}, { pathname: new URL(e.pathname, 'https://twitter.com').toString() })
          },
        }
      function U(e) {
        var t = r.a.useRef(e)
        return r.a.useCallback(function (e) {
          var n = e.children
          return null === t.current ? n : r.a.createElement(g.Provider, t.current, n)
        }, [])
      }
      var K = function (e) {
          return r.a.createElement(H.ActionMenu, e)
        },
        z = function (e) {
          return r.a.createElement(H.ActionsBar, f()({}, e, { isDisabled: !0 }))
        },
        V = function (e) {
          return r.a.createElement(H.Education, e)
        },
        W = function (e) {
          return r.a.createElement(H.HighlightedUserLabel, e)
        },
        q = function (e) {
          return r.a.createElement(H.PromotedIndicator, e)
        },
        Q = function (e) {
          return null
        },
        X = function (e) {
          return r.a.createElement(H.ReplyContext, e)
        },
        J = function (e) {
          return r.a.createElement(H.RichContent, e)
        },
        G = function (e) {
          return r.a.createElement(H.SocialContext, e)
        },
        Y = function (e) {
          return r.a.createElement(H.Timestamp, e)
        },
        Z = function (e) {
          return r.a.createElement(H.Text, e)
        },
        $ = function (e) {
          return r.a.createElement(H.Tombstone, e)
        },
        ee = function (e) {
          return r.a.createElement(H.UserAvatar, e)
        },
        te = function (e) {
          return r.a.createElement(H.UserFollowIndicator, e)
        },
        ne = function (e) {
          return r.a.createElement(H.UserName, e)
        },
        oe = u.a.g5662c95
      function ae(e) {
        var t,
          n,
          o,
          i,
          l,
          u = (function (e) {
            var t = e.renderActionsBar,
              n = void 0 === t ? z : t,
              o = e.renderActionMenu,
              i = void 0 === o ? K : o,
              c = e.renderEducation,
              s = void 0 === c ? V : c,
              l = e.renderHighlightedUserLabel,
              u = void 0 === l ? W : l,
              m = e.renderPromotedIndicator,
              p = void 0 === m ? q : m,
              h = e.renderPromotionStatusBadge,
              f = void 0 === h ? Q : h,
              w = e.renderReplyContext,
              y = void 0 === w ? X : w,
              g = e.renderRichContent,
              k = void 0 === g ? J : g,
              C = e.renderSocialContext,
              E = void 0 === C ? G : C,
              S = e.renderText,
              A = void 0 === S ? Z : S,
              I = e.renderTimestamp,
              x = void 0 === I ? Y : I,
              R = e.renderTombstone,
              L = void 0 === R ? $ : R,
              D = e.renderUserAvatar,
              M = void 0 === D ? ee : D,
              P = e.renderUserFollowIndicator,
              O = void 0 === P ? te : P,
              B = e.renderUserName,
              H = void 0 === B ? ne : B,
              oe = e.promotedContent,
              ae = e.quotedTweetTombstoneInfo,
              ie = e.socialContext,
              re = e.staticLinkConfig,
              ce = void 0 === re ? j : re,
              se = e.tweet,
              le = _()(e, N),
              ue = v.a.getOriginalTweet(se),
              de = Object(F.useTweetA11yIds)(ue),
              me = b()(de, 2),
              pe = me[0],
              ve = me[1],
              he = {
                renderActionsBar: function (e) {
                  var t, o
                  return n(
                    a()(
                      {
                        enableKeyboardShortcuts: !1,
                        isLiked: ue.favorited,
                        isRetweeted: ue.retweeted,
                        likeCount: ue.favorite_count,
                        nativeID: pe.actionsBar,
                        reaction: ue.reacted,
                        reactionCounts: ue.reaction_count,
                        replyCount: ue.reply_count,
                        retweetCount:
                          (null !== (t = ue.quote_count) && void 0 !== t ? t : 0) +
                          (null !== (o = ue.retweet_count) && void 0 !== o ? o : 0),
                        tweetLink: ue.permalink,
                        withAnalytics: !1,
                        withCount: !0,
                      },
                      e,
                    ),
                  )
                },
                renderActionMenu: function (e) {
                  return i(a()({ items: [] }, e))
                },
                renderEducation: function (e) {
                  return s(
                    a()(
                      {
                        conversationControlLabelNativeID: pe.conversationControlLabel,
                        exclusivityInfoLabelNativeID: pe.exclusivityInfoLabel,
                        trustedFriendsLabelNativeID: pe.trustedFriendsLabel,
                        tweet: se,
                      },
                      e,
                    ),
                  )
                },
                renderHighlightedUserLabel: function (e) {
                  return ue.user.highlightedLabel
                    ? u(a()({ label: ue.user.highlightedLabel, nativeID: pe.userLabel }, e))
                    : null
                },
                renderPromotedIndicator: function (e) {
                  return oe && d.a.isPromoted(oe)
                    ? p(a()({ contentAuthorId: ue.user.id_str, nativeID: pe.promotedLabel, promotedContent: oe }, e))
                    : null
                },
                renderPromotionStatusBadge: function (e) {
                  return f({ nativeID: pe.promotionStatusLabel })
                },
                renderReplyContext: function (e) {
                  var t
                  return ue.in_reply_to_status_id_str
                    ? y(
                        a()(
                          {
                            displayTextRange: ue.display_text_range,
                            inReplyToName: ue.in_reply_to_name,
                            inReplyToScreenName: ue.in_reply_to_screen_name,
                            inReplyToStatusIdStr: ue.in_reply_to_status_id_str,
                            inReplyToUserIdStr: ue.in_reply_to_user_id_str,
                            nativeID: pe.replyContext,
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
                  return k(
                    a()(
                      {
                        forwardPivotInfo: se.softIntervention,
                        nativeID: pe.richContent,
                        quotedTweetTombstoneInfo: ae,
                        tweet: se,
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
                  return ie
                    ? E(
                        a()(
                          {
                            contextType: null == ie ? void 0 : ie.contextType,
                            link: ie.link,
                            nativeID: pe.socialContext,
                            retweetData: { isSelfRetweet: ie.isSelfRetweet, name: ie.name, screenName: ie.screenName },
                            text: ie.text,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderText: function (e) {
                  var t
                  return A(
                    a()(
                      {
                        displayTextRange: ue.display_text_range,
                        enrichments: ue.enrichments,
                        entities: ue.entities,
                        lang: ue.lang,
                        linkify: !0,
                        nativeID: pe.text,
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
                  return x(
                    a()(
                      {
                        nativeID: pe.timestamp,
                        link: { pathname: ue.permalink, state: { contextTweetId: ue.id_str, promotedContent: oe } },
                        timestamp: ue.created_at,
                      },
                      e,
                    ),
                  )
                },
                renderTombstone: function (e) {
                  var t = ue.tombstoneInfo || se.tombstoneInfo
                  return null != t && t.richText
                    ? L(
                        a()(
                          {
                            children: r.a.createElement(T.a, {
                              dir: t.richText.rtl ? 'rtl' : 'ltr',
                              entities: t.richText.entities,
                              text: t.richText.text,
                            }),
                            nativeID: pe.tombstone,
                          },
                          e,
                        ),
                      )
                    : null
                },
                renderUserAvatar: function (e) {
                  return M(
                    a()(
                      {
                        nativeID: pe.avatar,
                        promotedContent: oe,
                        screenName: ue.user.screen_name,
                        uri: ue.user.profile_image_url_https,
                        withLink: !0,
                      },
                      e,
                    ),
                  )
                },
                renderUserFollowIndicator: function (e) {
                  return ue.has_super_follower ? O(a()({ type: 'superFollower' }, e)) : null
                },
                renderUserName: function (e) {
                  return H(
                    a()(
                      {
                        isProtected: ue.user.protected,
                        isVerified: ue.user.verified,
                        name: ue.user.name,
                        nativeID: pe.username,
                        promotedContent: oe,
                        screenName: ue.user.screen_name,
                      },
                      e,
                    ),
                  )
                },
              }
            return {
              LinkConfigProvider: U(ce),
              a11yIds: pe,
              a11yIdList: ve,
              props: a()(
                a()({}, he),
                {},
                { tweet: se, promotedContent: oe, socialContext: ie, quotedTweetTombstoneInfo: ae },
                le,
              ),
            }
          })(e),
          h = u.LinkConfigProvider,
          f = u.a11yIdList,
          w = u.a11yIds,
          y = u.props,
          g = v.a.getOriginalTweet(y.tweet),
          k = g.permalink,
          C = g.tombstoneInfo || y.tweet.tombstoneInfo,
          E = d.a.isPromoted(y.promotedContent),
          S = s.b.useProps(),
          A = S.withEdgeToEdgeContent(),
          I = S.withEdgeToEdgeTweetAnatomy(),
          x = S.tweetRendersPromotedContentBadgeBelowHeader(),
          R = null === (t = y.conversationTreeMetadata) || void 0 === t ? void 0 : t.ancestorConnector,
          L = null === (n = y.conversationTreeMetadata) || void 0 === n ? void 0 : n.indents,
          D = y.conversationTreeMetadata
            ? r.a.createElement(
                c.b,
                { nativeID: w.conversationLevel, style: m.a.visuallyHidden },
                oe({ conversationTreeDepth: y.conversationTreeMetadata.depth.toString() }),
              )
            : null,
          M = y.renderTombstone({
            actionLink: k,
            actionText: null == C || null === (o = C.richRevealText) || void 0 === o ? void 0 : o.text,
            style: ie.tombstone,
          })
        return r.a.createElement(
          h,
          null,
          r.a.createElement(
            p.a,
            {
              a11yDomIds: f,
              actionMenu: y.renderActionMenu(),
              avatar: y.renderUserAvatar(),
              footer: null === (i = y.renderSelfThreadCTA) || void 0 === i ? void 0 : i.call(y),
              header: y.renderSocialContext({
                iconSize: 'large',
                iconStyle: ie.socialContextIcon,
                style: ie.socialContext,
                weight: 'bold',
              }),
              indents: L,
              link: y.link
                ? ((l = y.link),
                  'string' == typeof l ? { anchorless: !0, pathname: l } : a()(a()({}, l), {}, { anchorless: !0 }))
                : void 0,
              onBlur: function () {
                var e
                return null === (e = y.onBlur) || void 0 === e ? void 0 : e.call(y)
              },
              onFocus: function () {
                var e
                return null === (e = y.onFocus) || void 0 === e ? void 0 : e.call(y)
              },
              onPress: function (e) {
                var t
                return null === (t = y.onPress) || void 0 === t ? void 0 : t.call(y, e)
              },
              testID: y.testID,
              timestamp: E || I ? null : y.renderTimestamp(),
              userFollowIndicators: y.renderUserFollowIndicator(),
              userLabel: y.renderHighlightedUserLabel(),
              userName: y.renderUserName({
                screenNameSuffix: E || !I ? null : y.renderTimestamp(),
                withStackedLayout: I,
              }),
              withBottomLine: y.withBottomLine,
              withElbow: L ? 'side' === R : void 0,
              withFullWidthChildren: A,
              withTopLine: y.withTopLine,
              withUnreadStyles: y.withUnreadStyles,
            },
            x
              ? y.renderPromotedIndicator({
                  style: v.a.hasInteractiveText(g)
                    ? ie.promotedIndicatorBelowHeaderWithInteractiveHighlights
                    : ie.promotedIndicatorBelowHeader,
                })
              : null,
            D,
            null !== M
              ? M
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  y.renderReplyContext({ style: ie.replyContext }),
                  y.renderText({ size: 'body' }),
                  y.renderRichContent({ withRoundMediaCorners: !A }),
                ),
            y.renderEducation({ displayStyle: 'inline' }),
            y.renderActionsBar({ actionSize: 'normal', displayStyle: 'inline', style: ie.actionsBar, withCount: !0 }),
            x ? null : y.renderPromotedIndicator({ style: ie.promotedIndicator }),
            y.renderPromotionStatusBadge({ nativeID: w.promotionStatusLabel }),
          ),
        )
      }
      ;(ae.ActionMenu = H.ActionMenu),
        (ae.ActionsBar = H.ActionsBar),
        (ae.Education = H.Education),
        (ae.HighlightedUserLabel = H.HighlightedUserLabel),
        (ae.PromotedIndicator = H.PromotedIndicator),
        (ae.ReplyContext = H.ReplyContext),
        (ae.RichContent = H.RichContent),
        (ae.SocialContext = H.SocialContext),
        (ae.Text = H.Text),
        (ae.Timestamp = H.Timestamp),
        (ae.Tombstone = H.Tombstone),
        (ae.UserAvatar = H.UserAvatar),
        (ae.UserFollowIndicator = H.UserFollowIndicator),
        (ae.UserName = H.UserName)
      var ie = m.a.create(function (e) {
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
          return m
        })
      var o = n('KEM+'),
        a = n.n(o),
        i = n('yiKp'),
        r = n.n(i),
        c = n('Ssj5'),
        s = 'engagementNudges',
        l = { misinfo: {} },
        u = 'rweb/engagementNudges/SET_TWEET_MISINFO_ACTION_TAKEN'
      c.a.register(
        a()({}, s, function () {
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
        m = function (e) {
          return { type: u, payload: e }
        }
    },
    sQjL: function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        a = n.n(o),
        i = n('97Jx'),
        r = n.n(i),
        c = n('3XMw'),
        s = n.n(c),
        l = n('cmUU'),
        u = n('efqG'),
        d = n('rHpw'),
        m = n('MWbm'),
        p = s.a.b09adb0c,
        v = s.a.c2637ef5,
        h = function (e) {
          var t = e.Icon,
            n = e.children,
            o = e.headline,
            i = e.onAction,
            c = e.onDismiss,
            s = e.onOpen,
            d = e.onSecondaryAction,
            h = e.style,
            w = e.subtext,
            b = e.thumbnailColor,
            y = e.tweetPermalink
          return a.a.createElement(
            m.a,
            {
              onClick: function (e) {
                e.stopPropagation()
              },
              style: h,
            },
            a.a.createElement(
              u.a,
              {
                onDismiss: c,
                renderContent: function (e, n) {
                  var c = function () {
                      d && d(), e()
                    },
                    s = y
                      ? {
                          actionLabel: p,
                          actionLink: y,
                          onAction: function () {
                            i && i()
                          },
                          secondaryActionLabel: v,
                          onSecondaryAction: c,
                        }
                      : { actionLabel: v, onAction: c }
                  return a.a.createElement(
                    m.a,
                    { style: 'popover' === n ? f.interstitialPopover : void 0 },
                    a.a.createElement(
                      l.a,
                      r()({}, s, {
                        contentStyle: f.content,
                        graphic: t,
                        graphicDisplayMode: 'thumbnail',
                        graphicThumbnailColor: b,
                        headline: o,
                        subtext: w,
                        withBottomPadding: !1,
                        withCloseButton: !1,
                      }),
                    ),
                  )
                },
              },
              a.a.createElement(m.a, { accessibilityRole: 'button', onClick: s }, n),
            ),
          )
        },
        f = d.a.create(function (e) {
          return {
            interstitialPopover: { maxWidth: 5 * e.spacesPx.space64 },
            content: { marginVertical: 0, marginBottom: e.spaces.space28 },
          }
        }),
        w = n('lBmi'),
        b = n('gUPl'),
        y = n('gBde'),
        _ = n('Oib4'),
        g = n('EyD/'),
        k = {
          conversationControlsFollowersCanEngage: { Icon: w.a, headline: s.a.bb7b821a, subtext: s.a.h15b020c },
          conversationControlsFollowersCannotEngage: { Icon: w.a, headline: s.a.ab105904, subtext: s.a.h15b020c },
          conversationControlsCommunityCanEngage: { Icon: b.a, headline: s.a.bb7b821a, subtext: s.a.j86de6d0 },
          conversationControlsCommunityCannotEngage: { Icon: b.a, headline: s.a.ab105904, subtext: s.a.j86de6d0 },
          conversationControlsByInvitationCanEngage: { Icon: y.a, headline: s.a.bb7b821a, subtext: s.a.cededc6f },
          conversationControlsByInvitationCannotEngage: { Icon: y.a, headline: s.a.ab105904, subtext: s.a.cededc6f },
          communityHiddenTweetEducation: { Icon: _.a, headline: s.a.g7ea1122, subtext: s.a.f9560709 },
          communityRemovedMemberEducation: { Icon: _.a, headline: s.a.g7ea1122, subtext: s.a.jd773100 },
          exclusiveToSuperFollowersCreator: {
            Icon: g.a,
            thumbnailColor: 'exclusive',
            headline: s.a.dbf9738f,
            subtext: s.a.d95d8f24,
          },
          exclusiveToSuperFollowersReplyOwn: {
            Icon: g.a,
            thumbnailColor: 'exclusive',
            headline: s.a.dbf9738f,
            subtext: s.a.ff6895e3,
          },
          exclusiveToSuperFollowersReplyOthers: {
            Icon: g.a,
            thumbnailColor: 'exclusive',
            headline: s.a.f1140912,
            subtext: s.a.j1a5fd02,
          },
        }
      t.a = function (e) {
        var t = e.children,
          n = e.onAction,
          o = e.onDismiss,
          i = e.onOpen,
          r = e.onSecondaryAction,
          c = e.screenName,
          s = e.style,
          l = e.tweetPermalink,
          u = e.type
        if (!k[u]) return t
        var d = k[u],
          m = d.Icon,
          p = d.headline,
          v = d.subtext,
          f = d.thumbnailColor,
          w = (function (e, t) {
            return 'string' != typeof e ? e({ screenName: t }) : e
          })(v, c)
        return a.a.createElement(
          h,
          {
            Icon: m,
            headline: p,
            onAction: n,
            onDismiss: o,
            onOpen: i,
            onSecondaryAction: r,
            style: s,
            subtext: w,
            thumbnailColor: f,
            tweetPermalink: l,
          },
          t,
        )
      }
    },
    sX0n: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var o = n('ERkP'),
        a = n.n(o),
        i = n('mjJ+'),
        r = n('6/RC'),
        c = n('IG7M')
      function s(e) {
        var t = e.Icon,
          n = e.isDisabled,
          o = e.items,
          s = e.onOpen
        return r.canUseDOM && o.length
          ? a.a.createElement(c.a, {
              Icon: t,
              isDisabled: n,
              onClick: s,
              renderActionMenu: function (e) {
                return a.a.createElement(i.a, { items: o, onCloseRequested: e })
              },
            })
          : null
      }
    },
    uFYP: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    vbWy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      })
      var o,
        a = n('KEM+'),
        i = n.n(a),
        r = n('k49u'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('fs1G'),
        u = s.a.c730cd08,
        d = s.a.f1d600ab,
        m = s.a.d80d33c5,
        p = s.a.j3403c05,
        v =
          ((o = { defaultToast: { text: d } }),
          i()(o, r.a.BlockedUserError, { toast: { text: u } }),
          i()(o, r.a.DuplicateStatusError, { customAction: l.a }),
          i()(o, r.a.InvalidRetweetForStatus, { toast: { text: m } }),
          i()(o, r.a.OverStatusUpdateLimit, { toast: { text: p } }),
          i()(o, 'showToast', !0),
          o)
    },
    xXop: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        a = n.n(o),
        i = n('yiKp'),
        r = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        m = n.n(d),
        p = n('5Yy7'),
        v = n.n(p),
        h = n('2VqO'),
        f = n.n(h),
        w = n('KEM+'),
        b = n.n(w),
        y = (n('yH/f'), n('ho0z'), n('Blm6'), n('ERkP')),
        _ = n.n(y),
        g = n('0JOx'),
        k = (n('hBvt'), n('ddV6')),
        C = n.n(k),
        E = (n('uFXj'), n('3XMw')),
        T = n.n(E),
        S = n('MWbm'),
        A = n('tevE'),
        I = n('t62R'),
        x = n('/yvb'),
        R = n('cm6r'),
        L = n('py1r'),
        D = n('rHpw'),
        M = n('0weh'),
        P = n('6s7X'),
        O = n('iySH'),
        B = T.a.i859a9d3,
        F = T.a.gc45a909,
        N = function (e) {
          var t = e.buttonLabel,
            n = e.condensedText,
            o = e.expanded,
            a = e.heading,
            i = e.icon,
            r = e.iconExpanded,
            c = e.isExpandable,
            s = e.learnMoreLink,
            l = e.link,
            u = e.onPress,
            d = e.subheading,
            m = _.a.useState(o),
            p = C()(m, 2),
            v = p[0],
            h = p[1],
            f = function (e) {
              e.preventDefault(), e.stopPropagation(), h(!0)
            }
          return v
            ? _.a.createElement(
                S.a,
                { focusable: !0, style: [H.container, H.containerExpanded] },
                r || i || _.a.createElement(M.a, { style: [H.iconPrimaryColor, H.iconExpanded] }),
                _.a.createElement(A.a, { align: 'center', size: 'title4', style: H.text, weight: 'bold' }, a),
                _.a.createElement(A.a, { align: 'center', color: 'gray700', style: H.text }, d),
                s ? _.a.createElement(I.b, { align: 'center', link: s, style: H.learnMore }, B) : null,
                _.a.createElement(x.a, { link: l, onPress: u, type: 'brandFilled' }, t),
              )
            : _.a.createElement(
                R.a,
                { focusable: !0, link: l, onPress: u, style: [H.container, H.containerCondensed] },
                function (e) {
                  var t = e.isHovered
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    i || _.a.createElement(M.a, { style: [H.iconPrimaryColor, H.iconCondensed] }),
                    _.a.createElement(I.b, { style: H.condensedText }, n),
                    c
                      ? _.a.createElement(L.a, null, function (e) {
                          var t = e.isHovered
                          return _.a.createElement(x.a, {
                            accessibilityLabel: F,
                            icon: _.a.createElement(P.a, { style: t ? H.infoIconPrimary : H.infoIconGray }),
                            onClick: f,
                            size: 'xSmall',
                            style: H.infoButton,
                            type: 'brandText',
                          })
                        })
                      : _.a.createElement(O.a, { style: [t ? H.iconPrimaryColor : H.iconGrayColor, H.rightIcon] }),
                  )
                },
              )
        }
      N.defaultProps = { isExpandable: !1 }
      var H = D.a.create(function (e) {
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
        j = N,
        U = n('ms2t'),
        K = T.a.ibd021f1,
        z = T.a.ca58508e,
        V = T.a.g5092765,
        W = T.a.a2d5c006,
        q = T.a.g37bb2d0,
        Q = D.a.create(function (e) {
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
            o = e.onClick,
            a = e.shouldShowArticleNudgeTip,
            i = _.a.createElement(U.a, { style: Q.glassIcon }),
            r = _.a.createElement(U.a, { style: [Q.glassIcon, Q.glassIconExpanded] })
          return _.a.createElement(j, {
            buttonLabel: V,
            condensedText: t ? W : K,
            expanded: a,
            heading: t ? W : K,
            icon: i,
            iconExpanded: r,
            isExpandable: !0,
            learnMoreLink: 'https://help.twitter.com/using-twitter/how-to-retweet#prompt',
            link: n,
            onPress: o,
            subheading: t ? q : z,
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
        oe = n('BQZD'),
        ae = n('LQyW'),
        ie = n('RqPI'),
        re = n('D5n3'),
        ce = n('G6rE'),
        se = n('xZGM'),
        le = n('Hja3'),
        ue = n('rxPX'),
        de = n('0KEI'),
        me = n('P1r1'),
        pe = n('jL08'),
        ve = n('rx9x'),
        he = n('TuTd'),
        fe = n('XOJV'),
        we = function (e, t) {
          return Object(se.D)(e, se.b)
        },
        be = function (e, t) {
          return Object(se.D)(e, se.u)
        },
        ye = function (e, t) {
          return Object(se.B)(e, se.m)
        },
        _e = function (e) {
          return Z.k(e, '')
        },
        ge = function (e, t) {
          return Object(he.a)(e, t.tweet.id_str)
        },
        ke = function (e, t) {
          return Object(ve.a)(e, t.tweet.id_str)
        },
        Ce = function (e, t) {
          var n = t.tweet.community_id_str,
            o = n ? ee.c.select(e, n) : void 0
          return Object(ne.g)(null == o ? void 0 : o.role)
        },
        Ee = function (e, t) {
          var n,
            o,
            a,
            i,
            r = t.tweet,
            c =
              null == r ||
              null === (n = r.card) ||
              void 0 === n ||
              null === (o = n.binding_values) ||
              void 0 === o ||
              null === (a = o.domain) ||
              void 0 === a
                ? void 0
                : a.string_value,
            s = null == r || null === (i = r.card) || void 0 === i ? void 0 : i.url
          return s && c ? Object(pe.d)(e, s, c) : void 0
        },
        Te = function (e, t) {
          var n,
            o,
            a,
            i = t.tweet,
            r =
              null == i ||
              null === (n = i.card) ||
              void 0 === n ||
              null === (o = n.binding_values) ||
              void 0 === o ||
              null === (a = o.domain) ||
              void 0 === a
                ? void 0
                : a.string_value
          return r ? Object(pe.c)(e, r) : void 0
        },
        Se = function (e, t) {
          var n = t.bookmarkFolderId
          if (n) {
            var o = le.b.select(e, n)
            return null == o ? void 0 : o.name
          }
        },
        Ae = function (e, t) {
          var n = t.tweet
          return n ? Object(ae.b)(e, n) : void 0
        },
        Ie = Object(ue.a)()
          .propsFromState(function () {
            return {
              canShowReactionsEducation: be,
              composerData: _e,
              dataSaverMode: me.j,
              isArticleDomainMatched: Te,
              isCommunityMember: Ce,
              likeTransitionAnimation: Ae,
              liveCounts: ge,
              loggedInUser: ce.e.selectLoggedInUser,
              misinfoNudgeActionTaken: ke,
              sessionToken: ie.w,
              shouldShowArticleNudgeTip: we,
              wasArticleVisited: Ee,
              bookmarkFolderName: Se,
              daysSinceDownvoteEducation: ye,
              replyVotingSurveyClicked: me.x,
            }
          })
          .adjustStateProps(function (e, t) {
            var n = e.bookmarkFolderName,
              o = e.canShowReactionsEducation,
              a = e.composerData,
              i = e.dataSaverMode,
              r = e.daysSinceDownvoteEducation,
              c = e.isArticleDomainMatched,
              s = e.isCommunityMember,
              l = e.likeTransitionAnimation,
              u = e.liveCounts,
              d = e.loggedInUser,
              m = e.misinfoNudgeActionTaken,
              p = e.replyVotingSurveyClicked,
              v = e.sessionToken,
              h = e.shouldShowArticleNudgeTip,
              f = e.wasArticleVisited
            t.tweet
            return {
              canShowReactionsEducation: o,
              dataSaverMode: i,
              daysSinceDownvoteEducation: r,
              isArticleDomainMatched: c,
              isCommunityMember: s,
              likeTransitionAnimation: l,
              liveCounts: u,
              misinfoNudgeActionTaken: m,
              replyVotingSurveyClicked: p,
              sessionToken: v,
              shouldShowArticleNudgeTip: h,
              wasArticleVisited: f,
              bookmarkFolderName: n,
              composerHasData: a.length > 0 && !Object(te.b)(a[0]),
              loggedInUserFavCount: (null == d ? void 0 : d.favourites_count) || 0,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: se.z,
              addToast: $.b,
              createLocalApiErrorHandler: Object(de.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_ACTIONS_BAR_CONTAINER',
              ),
              onBookmark: fe.a.bookmark,
              onDownvote: fe.a.downvote,
              onLike: fe.a.like,
              onReact: fe.a.react,
              onRetweet: fe.a.retweet,
              onUnbookmark: fe.a.unbookmark,
              onUndownvote: fe.a.undownvote,
              onUnlike: fe.a.unlike,
              onUnreact: fe.a.unreact,
              onUnretweet: re.a,
              removeTweetsFromBookmarksTimeline: oe.d,
              removeTweetFromBookmarkFolder: le.b.removeTweetFromBookmarkFolder,
              removeTweetFromBookmarkFolderTimeline: le.d,
              updateCounts: fe.a.updateCounts,
              resetDraft: Z.f,
              setArticlesVisited: pe.e,
              setReplyVotingSurveyClicked: me.J,
              setTweetMisinfoActionTaken: ve.b,
              updateLiveCounts: he.b,
            }
          })
          .withAnalytics(),
        xe = n('7JQg'),
        Re = n('mqpi'),
        Le = n('feu+'),
        De = T.a.f755f71f,
        Me = function () {
          var e = _.a.createElement(I.b, {
            color: 'blue500',
            link: 'https://help.twitter.com/en/rules-and-policies/enforcement-options',
            withInteractiveStyling: !0,
          })
          return _.a.createElement(
            T.a.I18NFormatMessage,
            { $i18n: 'caf3fb60' },
            _.a.cloneElement(e, null, T.a.eb2aba8e),
          )
        },
        Pe = Object.freeze({
          HiddenCommunityTweet: 'community_tweet_hidden',
          CommunityNonMember: 'community_tweet_non_member',
          CommunityMemberRemoved: 'community_tweet_member_removed',
          NonCompliant: 'non_compliant',
        }),
        Oe = function (e) {
          var t = e.actionType,
            n = e.limitedActionsConfig,
            o = e.onAction,
            a = e.onClose,
            i = n === Pe.HiddenCommunityTweet,
            r = n === Pe.NonCompliant,
            c = n === Pe.CommunityNonMember,
            s = n === Pe.CommunityMemberRemoved
          if (!(i || r || c || s)) return null
          var l = (function (e) {
              var t = e.actionType,
                n = e.isCommunityMemberRemoved,
                o = e.isCommunityNonMember,
                a = e.isHiddenCommunityTweet,
                i = e.isNonCompliantTweet
              if (a || n) return T.a.d0270ae1
              if (o)
                switch (t) {
                  case Re.a.Reply:
                    return T.a.ba352986
                  default:
                    return T.a.cb18be31
                }
              if (i)
                switch (t) {
                  case Re.a.Reply:
                    return T.a.ae2c8a1e
                  case Re.a.Downvote:
                    return T.a.adf4892e
                  case Re.a.Like:
                    return T.a.afe7ba26
                  case Re.a.React:
                    return T.a.ddb7acf0
                  case Re.a.Share:
                    return T.a.jead3bc1
                  case Re.a.Analytics:
                    return T.a.bf02eab5
                  default:
                    return ''
                }
              return ''
            })({
              actionType: t,
              isNonCompliantTweet: r,
              isCommunityNonMember: c,
              isHiddenCommunityTweet: i,
              isCommunityMemberRemoved: s,
            }),
            u = (function (e) {
              var t = e.actionType,
                n = e.isCommunityMemberRemoved,
                o = e.isCommunityNonMember,
                a = e.isHiddenCommunityTweet,
                i = e.isNonCompliantTweet
              if (a || n) return T.a.c8b72f50
              if (o)
                switch (t) {
                  case Re.a.Reply:
                    return T.a.fa94c9da
                  default:
                    return T.a.if9bcebd
                }
              return i ? _.a.createElement(Me, null) : ''
            })({
              actionType: t,
              isNonCompliantTweet: r,
              isCommunityNonMember: c,
              isHiddenCommunityTweet: i,
              isCommunityMemberRemoved: s,
            })
          return _.a.createElement(Le.a, {
            actionLabel: De,
            graphicDisplayMode: 'none',
            headline: l,
            onAction: o,
            onClose: a,
            subtext: u,
          })
        },
        Be = n('4hQ9'),
        Fe = n('y+lG'),
        Ne = n('OrGc'),
        He = n('XEYr'),
        je = n('RxYA'),
        Ue = n('oQhu'),
        Ke = n('iGRG'),
        ze = n('vbWy'),
        Ve = n('Rp9C'),
        We = n('4bW+'),
        qe = n('m3Bd'),
        Qe = n.n(qe),
        Xe = n('sQjL'),
        Je = n('k89r'),
        Ge = ['scribeElement'],
        Ye = function (e) {
          var t = e.scribeElement,
            n = Qe()(e, Ge),
            o = Object(Je.a)()
          return _.a.createElement(
            Xe.a,
            a()({}, n, {
              onAction: function () {
                o.scribe({ component: 'conversation_control_prompt', element: 'see_conversation', action: 'click' })
              },
              onOpen: function () {
                o.scribe({ element: t, action: 'click' })
              },
              onSecondaryAction: function () {
                o.scribe({ component: 'conversation_control_prompt', element: 'ok', action: 'click' })
              },
            }),
          )
        },
        Ze = { defaultToast: { text: T.a.fda78a70 }, showToast: !0 },
        $e = { defaultToast: { text: T.a.j10ec2a0 }, showToast: !0 },
        et = { defaultToast: { text: T.a.ccdeb32e }, showToast: !0 },
        tt = n('IO7v'),
        nt = n('TnY3'),
        ot = n('4zmP'),
        at = n('ZToW'),
        it = n('cHvH'),
        rt = n('Wd7d'),
        ct = n('E0cF'),
        st = n('Wk1j'),
        lt = n('3dyc'),
        ut = n('I7xS'),
        dt = n('fn9Y'),
        mt = n('wD1h'),
        pt = n('feOz'),
        vt = n('eb3s'),
        ht = n('v6aA'),
        ft = n('HwrL'),
        wt = n('iEUn'),
        bt = n('DlVf'),
        yt = n('n5fo'),
        _t = n('C25v'),
        gt = n('ZGdk'),
        kt = n('ML2/'),
        Ct = n('SOvA'),
        Et = n('I/9y'),
        Tt = n('Tp1h'),
        St = T.a.gb303813,
        At = T.a.de2d83d5,
        It = T.a.b6f822b9,
        xt = T.a.f14df406,
        Rt = T.a.f61c4bbf,
        Lt = T.a.d9837138,
        Dt = T.a.jf9c38df,
        Mt = T.a.ff9348b8,
        Pt = T.a.ebad846b,
        Ot = T.a.h438b014,
        Bt = T.a.d91695cb,
        Ft = T.a.b59d8d10,
        Nt = T.a.h5d6c720,
        Ht = T.a.f1fcb2eb,
        jt = T.a.a2e7377e,
        Ut = T.a.e0fef909,
        Kt = T.a.ba370e34,
        zt = T.a.d9034c72,
        Vt = T.a.e518bc7a,
        Wt = T.a.f46ba415,
        qt = T.a.c604dda2,
        Qt = T.a.f6c7249b,
        Xt = T.a.f67de45a,
        Jt = T.a.e0be2c22,
        Gt = T.a.e32e0d92,
        Yt = T.a.bd7d377e,
        Zt = T.a.ae768646,
        $t = T.a.c1a50438,
        en = T.a.fd961b0b,
        tn = T.a.d964e8ec,
        nn = T.a.jc4cb6c4,
        on = T.a.f277e949,
        an = T.a.c2453317,
        rn = T.a.f88553c8,
        cn = T.a.b5b36724,
        sn = T.a.g449dfaa,
        ln = T.a.cf7a1b47,
        un = T.a.aec89ef0,
        dn = T.a.d17df547,
        mn = T.a.bac8f4c1,
        pn = T.a.j8eff20a,
        vn = T.a.ce6df39e,
        hn = T.a.af5cd00d,
        fn = T.a.e29c651e,
        wn = { component: 'soft_intervention_nudge' },
        bn = { component: 'article_nudge' },
        yn = { viewType: 'share' },
        _n = { viewType: 'share_via_dm' },
        gn = { viewType: 'copy_link' },
        kn = function (e) {
          return { viewType: 'bookmark', viewState: { type: 'toggleable', toggledTo: e } }
        },
        Cn = Object.freeze({ NONE: 'none', THANKS: 'thanks', EDUCATION: 'education', SURVEY: 'survey' }),
        En = 0,
        Tn = (function (e) {
          v()(n, e)
          var t = f()(n)
          function n(e, o) {
            var a
            return (
              s()(this, n),
              (a = t.call(this, e, o)),
              b()(m()(a), '_shouldDisable', Re.b.bind(null, a.context.featureSwitches)),
              b()(
                m()(a),
                '_articleNudgeEnabled',
                a.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
              ),
              b()(m()(a), '_reactionsEnabled', a.context.featureSwitches.isTrue('responsive_web_reactions_enabled')),
              b()(m()(a), '_downvoteEnabled', a.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
              b()(
                m()(a),
                '_showDownvoteBeforeLike',
                a.context.featureSwitches.isTrue('rweb_reply_downvote_before_like'),
              ),
              b()(
                m()(a),
                '_reactionsLegacyHeartEnabled',
                a.context.featureSwitches.isTrue('responsive_web_reactions_legacy_heart'),
              ),
              b()(
                m()(a),
                '_reactionsFruitBasketThreshold',
                a.context.featureSwitches.getNumberValue('responsive_web_reactions_fruit_basket_threshold'),
              ),
              b()(m()(a), '_randomSeed', Math.random()),
              b()(m()(a), '_renderReactionsEducation', function () {
                return a.state.showReactionsEducation
                  ? _.a.createElement(ot.a, { style: Sn.inlineCallout, text: a._getReactionsEducationText() })
                  : null
              }),
              b()(m()(a), '_getReactionsEducationText', function () {
                var e = a._reactionsLegacyHeartEnabled ? wt.a : bt.a,
                  t = _.a.createElement(e, { accessibilityLabel: Dt })
                return at.a.isEnabled
                  ? _.a.createElement(T.a.I18NFormatMessage, { $i18n: 'ad2ab554' }, t)
                  : _.a.createElement(T.a.I18NFormatMessage, { $i18n: 'g6a7d832' }, t)
              }),
              b()(m()(a), '_renderDownvoteInlineEducation', function () {
                var e = a.props.tweet
                switch (a.state.showDownvoteEducation) {
                  case Cn.SURVEY:
                    var t = {
                      label: $t,
                      link: 'https://survey.twitterfeedback.com/survey/selfserve/53b/'
                        .concat('220104', '?subject=')
                        .concat(e.id_str),
                    }
                    return _.a.createElement(ot.a, {
                      action: t,
                      onAction: a._handleDownvoteSurveyClick,
                      onClose: function () {
                        a.setState({ showDownvoteEducation: Cn.NONE })
                      },
                      style: Sn.inlineCallout,
                      text: Zt,
                      type: 'primary',
                      withCloseButton: !0,
                    })
                  case Cn.EDUCATION:
                    return _.a.createElement(ot.a, {
                      Icon: yt.a,
                      headline: en,
                      style: Sn.inlineCallout,
                      text: tn,
                      type: 'primary',
                    })
                  case Cn.THANKS:
                    return _.a.createElement(ot.a, {
                      onClose: function () {
                        a.setState({ showDownvoteEducation: Cn.NONE })
                      },
                      style: Sn.inlineCallout,
                      text: Yt,
                      type: 'primary',
                      withCloseButton: !0,
                    })
                  case Cn.NONE:
                  default:
                    return
                }
              }),
              b()(m()(a), '_renderSuperFollowerActionRetweetSubText', function (e) {
                return _.a.createElement(it.a, null, function (e) {
                  var t = e.windowWidth
                  return rt.a.isNarrowScreenWidth(t)
                    ? _.a.createElement(I.b, null, nn)
                    : _.a.createElement(A.a, null, nn)
                })
              }),
              b()(
                m()(a),
                '_renderEngagementNudge',
                Object(Ue.a)(function (e, t, n) {
                  if (n && Object(ft.b)(e, n)) {
                    var o = hn,
                      i = fn,
                      r = n.text.text,
                      c = n.landingUrl.url,
                      s = a._handleSetMisinfoActionTaken(e),
                      l = e === ft.a.like ? pn : vn
                    return _.a.createElement(N, {
                      buttonLabel: o,
                      condensedText: i,
                      expanded: t,
                      heading: r,
                      key: 'engagement_nudge',
                      link: c,
                      onPress: s,
                      subheading: l,
                    })
                  }
                  return null
                }),
              ),
              b()(m()(a), '_shouldShowArticleNudge', function () {
                var e,
                  t = a.props,
                  n = t.forwardPivotInfo,
                  o = t.isArticleDomainMatched,
                  i = t.tweet,
                  r = t.wasArticleVisited,
                  c = a.state.articleNudgeFollowed,
                  s = a.context.loggedInUserId,
                  l = i.promoted_content,
                  u =
                    (null === (e = i.retweeted_status) || void 0 === e ? void 0 : e.user.id_str) === s ||
                    i.user.id_str === s
                return a._articleNudgeEnabled && !n && !l && !u && !!o && (!r || c)
              }),
              b()(m()(a), '_shouldShowDownvoteButton', function () {
                var e = a.props,
                  t = e.allowDownvote,
                  n = e.tweet,
                  o = a.context.loggedInUserId,
                  i = ct.a.getOriginalTweet(n)
                return (
                  a._downvoteEnabled &&
                  t &&
                  Boolean(i.in_reply_to_status_id_str) &&
                  i.user.id_str !== o &&
                  !i.self_thread &&
                  !n.retweeted_status &&
                  !i.community_id_str &&
                  Boolean(o)
                )
              }),
              b()(m()(a), '_handleMenuCancel', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addFlag,
                    o = t.shouldShowArticleNudgeTip,
                    i = t.wasArticleVisited
                  a._scribeMisInfoNudgeAction({ tweetActionName: e, action: 'cancel' })
                  var r = a._shouldShowArticleNudge()
                  r && o && n(se.b),
                    a._articleNudgeEnabled &&
                      r &&
                      a._scribeArticleNudgeAction({ action: 'cancel', element: i ? 'after_read' : void 0 })
                }
              }),
              b()(m()(a), '_handleSetMisinfoActionTaken', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addToast,
                    o = t.misinfoNudgeActionTaken,
                    i = t.setTweetMisinfoActionTaken,
                    r = t.tweet
                  a._scribeMisInfoNudgeAction({ tweetActionName: e, element: 'read_article', action: 'click' }),
                    o || (i(r.id_str), n({ text: fn }))
                }
              }),
              b()(m()(a), '_handleHideConfirmation', function () {
                a.setState({ showReplyDiscardTweetConfirmation: !1, showRetweetDiscardTweetConfirmation: !1 })
              }),
              b()(m()(a), '_handleCloseEducationPrompt', function () {
                a.setState({ showDisabledActionsEducation: !1 })
              }),
              b()(m()(a), '_handleOpenEducationPrompt', function (e) {
                return function () {
                  a.setState({ showDisabledActionsEducation: !0, disabledAction: e })
                }
              }),
              b()(m()(a), '_handleRetweetPress', function () {
                var e = a.props,
                  t = e.isArticleDomainMatched,
                  n = e.misinfoNudgeActionTaken,
                  o = e.wasArticleVisited
                if (!a.context.loggedInUserId)
                  return a._scribeAction(st.a.RETWEET), void a._showLoginSignupSheet(Tt.a.retweet)
                var i = a._shouldShowArticleNudge()
                a._scribeMisInfoNudgeAction({
                  tweetActionName: ft.a.retweet,
                  element: n ? 'after_read' : void 0,
                  action: 'impression',
                }),
                  a._articleNudgeEnabled &&
                    (a._scribeArticleNudgeAction({ element: 'check_url', action: t ? 'matched' : 'not_matched' }),
                    t && a._scribeArticleNudgeAction({ element: 'check_url', action: o ? 'visited' : 'not_visited' }),
                    i && a._scribeArticleNudgeAction({ action: 'impression' }))
              }),
              b()(m()(a), '_handleRetweet', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.isArticleDomainMatched,
                  o = e.misinfoNudgeActionTaken,
                  i = e.onRetweet,
                  r = e.promotedContent,
                  c = e.tweet,
                  s = e.wasArticleVisited
                a._scribeAction(st.a.RETWEET),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: ft.a.retweet,
                    element: o ? 'retweet_after_read' : 'retweet',
                    action: 'click',
                  }),
                  a._articleNudgeEnabled &&
                    n &&
                    a._scribeArticleNudgeAction({ element: s ? 'retweet_after_read' : 'retweet', action: 'click' }),
                  a._modRetweets(1),
                  i(c.id_str, { promotedContent: r })
                    .then(function () {
                      a.props.addToast({ ariaOnly: !0, text: Qt })
                    })
                    .catch(function (e) {
                      a._modRetweets(-1), t(ze.a)(e)
                    })
              }),
              b()(m()(a), '_handleUnretweet', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onUnretweet,
                  o = e.promotedContent,
                  i = e.tweet
                a._scribeAction(st.a.UNRETWEET),
                  a._modRetweets(-1),
                  n(i.id_str, { promotedContent: o })
                    .then(function () {
                      a.props.addToast({ ariaOnly: !0, text: Xt })
                    })
                    .catch(function (e) {
                      a._modRetweets(1), t(tt.a)(e)
                    })
              }),
              b()(m()(a), '_handleQuoteTweet', function () {
                var e = a.props,
                  t = e.composerHasData,
                  n = e.isArticleDomainMatched,
                  o = e.misinfoNudgeActionTaken,
                  i = e.wasArticleVisited
                a._scribeAction(st.a.QUOTE),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: ft.a.retweet,
                    element: o ? 'retweet_with_comment_after_read' : 'retweet_with_comment',
                    action: 'click',
                  }),
                  a._articleNudgeEnabled &&
                    n &&
                    a._scribeArticleNudgeAction({
                      element: i ? 'retweet_with_comment_after_read' : 'retweet_with_comment',
                      action: 'click',
                    }),
                  t && a.setState({ showRetweetDiscardTweetConfirmation: !0 })
              }),
              b()(m()(a), '_handleConfirmQuoteTweet', function () {
                ;(0, a.props.resetDraft)(), a._handleHideConfirmation()
              }),
              b()(m()(a), '_handleLikeMenuPress', function () {
                var e = a.props.misinfoNudgeActionTaken
                a._scribeMisInfoNudgeAction({
                  tweetActionName: ft.a.like,
                  element: e ? 'after_read' : void 0,
                  action: 'impression',
                })
              }),
              b()(m()(a), '_handleDownvote', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.onDownvote,
                  o = e.onUndownvote,
                  i = e.tweet,
                  r = ct.a.getOriginalTweet(i),
                  c = !r.isDownvoted
                c
                  ? (r.favorited && a._handleLike(),
                    n(i.id_str)
                      .then(function () {
                        a.props.addToast({ ariaOnly: !0, text: Jt }), a._updateDownvoteEducation(!0)
                      })
                      .catch(function (e) {
                        a._scribe({ element: 'downvote_button', action: 'error' }), t(He.a)(e)
                      }))
                  : o(i.id_str)
                      .then(function () {
                        a.props.addToast({ ariaOnly: !0, text: Gt }), a._updateDownvoteEducation(!1)
                      })
                      .catch(function (e) {
                        a._scribe({ element: 'downvote_button', action: 'error' }), t(He.a)(e)
                      }),
                  a._scribe({ element: 'reply_voting', action: c ? 'downvote' : 'remove_downvote' })
              }),
              b()(m()(a), '_updateDownvoteEducation', function (e) {
                var t = a.context.featureSwitches,
                  n = a.props,
                  o = n.addFlag,
                  i = n.daysSinceDownvoteEducation,
                  r = n.replyVotingSurveyClicked,
                  c = a.state.showDownvoteEducation,
                  s = t.getNumberValue('rweb_reply_downvote_inline_survey') / 100,
                  l = t.getNumberValue('rweb_reply_downvote_inline_education') / 100,
                  u = t.getNumberValue('rweb_reply_downvote_inline_days'),
                  d = null === i || i >= u,
                  m = d && a._randomSeed < s && !r,
                  p = d && a._randomSeed < l
                e
                  ? d &&
                    (a._scribe({
                      component: 'reply_voting_nux',
                      element: m ? 'survey' : p ? 'privacy' : 'thank_you',
                      action: 'impression',
                    }),
                    o(se.m, { updateTimestamp: !0 }),
                    a.setState({ showDownvoteEducation: m ? Cn.SURVEY : p ? Cn.EDUCATION : Cn.THANKS }))
                  : c !== Cn.NONE && a.setState({ showDownvoteEducation: Cn.NONE })
              }),
              b()(m()(a), '_handleDownvoteSurveyClick', function () {
                var e = a.props.setReplyVotingSurveyClicked
                a._scribe({ component: 'reply_voting_nux', element: 'survey', action: 'click' }),
                  a.setState({ showDownvoteEducation: Cn.THANKS }),
                  e()
              }),
              b()(m()(a), '_handleLike', function () {
                var e = a.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  o = a.props,
                  i = o.createLocalApiErrorHandler,
                  r = o.loggedInUserFavCount,
                  c = o.misinfoNudgeActionTaken,
                  s = o.onLike,
                  l = o.onLikeSuccess,
                  u = o.onReact,
                  d = o.onUnlike,
                  m = o.onUnreact,
                  p = o.promotedContent,
                  v = o.tweet,
                  h = t.isTrue('responsive_web_reactions_api_test'),
                  f = ct.a.getOriginalTweet(v),
                  w = !f.favorited
                n
                  ? w
                    ? (a._scribeMisInfoNudgeAction({
                        tweetActionName: ft.a.like,
                        element: c ? 'like_after_read' : 'like',
                        action: 'click',
                      }),
                      f.isDownvoted && a._handleDownvote(),
                      a._modLikes(1),
                      (h
                        ? u(v.id_str, { promotedContent: p, reactionType: 'Like' })
                        : s(v.id_str, { promotedContent: p })
                      )
                        .then(function () {
                          r + 1 < t.getNumberValue('focused_timeline_actions_onboarding_likes')
                            ? a.props.addToast({ text: Ut })
                            : a.props.addToast({ ariaOnly: !0, text: Kt }),
                            l && l()
                        })
                        .catch(function (e) {
                          a._modLikes(-1), a._scribe({ element: 'like_button', action: 'error' }), i(He.a)(e)
                        }))
                    : (a._modLikes(-1),
                      (h ? m : d)(v.id_str, { promotedContent: p })
                        .then(function () {
                          a.props.addToast({ ariaOnly: !0, text: zt })
                        })
                        .catch(function (e) {
                          a._modLikes(1), a._scribe({ element: 'like_button', action: 'error' }), i($e)(e)
                        }))
                  : a._showLoginSignupSheet(Tt.a.like),
                  a._scribeAction(w ? 'favorite' : 'unfavorite'),
                  a._shouldShowDownvoteButton() &&
                    a._scribe({ element: 'reply_voting', action: w ? 'upvote' : 'remove_upvote' })
              }),
              b()(m()(a), '_handleReact', function (e, t) {
                var n = a.context.loggedInUserId,
                  o = a.props,
                  i = o.addToast,
                  c = o.createLocalApiErrorHandler,
                  s = o.misinfoNudgeActionTaken,
                  l = o.onReact,
                  u = o.onUnreact,
                  d = o.promotedContent,
                  m = o.tweet,
                  p = ct.a.getOriginalTweet(m)
                if (p.reacted !== e) {
                  if (
                    (a._scribeAction(e ? 'favorite' : 'unfavorite'),
                    a._shouldShowDownvoteButton() &&
                      a._scribe({ element: 'reply_voting', action: e ? 'upvote' : 'remove_upvote' }),
                    e)
                  )
                    switch ((p.reacted && a._scribe({ element: 'reaction_picker', action: 'change' }), t)) {
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
                        (En -= 1))
                  n
                    ? e
                      ? (a._scribeMisInfoNudgeAction({
                          tweetActionName: ft.a.like,
                          element: s ? 'like_after_read' : 'like',
                          action: 'click',
                        }),
                        l(m.id_str, { promotedContent: d, reactionType: e })
                          .then(function () {
                            var e = a.state.showReactionsEducation
                            i({ ariaOnly: !0, text: e ? Wt : Vt })
                          })
                          .catch(function (e) {
                            a._scribe({ element: 'reaction_button', action: 'error' }), c(Ke.a)(e)
                          }))
                      : u(m.id_str, { promotedContent: d })
                          .then(function () {
                            i({ ariaOnly: !0, text: qt })
                          })
                          .catch(function (e) {
                            a._scribe({ element: 'reaction_button', action: 'error' }), c(et)(e)
                          })
                    : a._showLoginSignupSheet(Tt.a.react)
                }
              }),
              b()(m()(a), '_handleReactionPopoverOpen', function (e) {
                e === lt.a.longPress
                  ? a._scribe({ element: 'reaction_button', action: 'longpress' })
                  : e === lt.a.hover
                  ? a._scribe({ element: 'reaction_button', action: 'hover' })
                  : (e !== lt.a.force && e !== lt.a.keyboard) ||
                    a._scribe({ element: 'reaction_button', action: 'keyboard' })
              }),
              b()(m()(a), '_showReactionsEducation', function () {
                var e = a.context.loggedInUserId,
                  t = a.props.canShowReactionsEducation
                a._reactionsEnabled &&
                  a.context.featureSwitches.isTrue('responsive_web_reactions_nux_banner') &&
                  (En >= 3
                    ? a._hideReactionsEducation()
                    : t &&
                      e &&
                      ((0 !== En && 2 !== En) ||
                        (a.setState(function (e) {
                          return r()(r()({}, e), {}, { showReactionsEducation: !0 })
                        }),
                        a._scribe({ element: 'reaction_nux', action: 'impression' })),
                      (En += 1)))
              }),
              b()(m()(a), '_hideReactionsEducation', function () {
                var e = a.props,
                  t = e.addFlag
                e.canShowReactionsEducation && t(se.u)
              }),
              b()(m()(a), '_handleBookmarkTweet', function () {
                var e,
                  t = a.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.tweet,
                  i = ct.a.getOriginalTweet(o),
                  r = !(
                    null === (e = a.context.userClaims) ||
                    void 0 === e ||
                    !e.isTrueAndEnabled('subscriptions_feature_1002')
                  )
                a.props.onBookmark(i.id_str).then(
                  function () {
                    a.props.addToast({
                      action: {
                        label: r ? an : on,
                        onAction: r ? a._handleBookmarkTweetToFolder : a._handleViewBookmarks,
                      },
                      text: Ft,
                    })
                  },
                  function (e) {
                    n(J.a)(e), a._scribeAction('bookmark_error')
                  },
                ),
                  a._scribeAction('bookmark')
              }),
              b()(m()(a), '_handleUnBookmarkFromFolder', function () {
                var e = a.props,
                  t = e.bookmarkFolderId,
                  n = e.bookmarkFolderName,
                  o = e.createLocalApiErrorHandler,
                  i = e.removeTweetFromBookmarkFolder,
                  r = e.tweet,
                  c = ct.a.getOriginalTweet(r)
                t &&
                  i(t, { tweetId: c.id_str }).then(
                    function () {
                      a._scribe({ component: 'bookmark_folder', element: 'remove', action: 'success' }),
                        a.props.addToast({ text: jt({ bookmarkFolderName: n }) })
                    },
                    function (e) {
                      o(J.a)(e), a._scribe({ component: 'bookmark_folder', element: 'remove', action: 'error' })
                    },
                  )
              }),
              b()(m()(a), '_handleBookmarkTweetToFolder', function () {
                var e = a.props,
                  t = e.onBookmark,
                  n = e.tweet,
                  o = ct.a.getOriginalTweet(n)
                t(o.id_str),
                  a.props.history.push({ pathname: '/i/bookmarks/add', state: { tweet_id: o.id_str } }),
                  a._scribe({ element: 'add_to_folder', action: 'click' })
              }),
              b()(m()(a), '_handleUnbookmarkTweet', function () {
                var e = a.props,
                  t = e.bookmarkFolderId,
                  n = e.createLocalApiErrorHandler,
                  o = e.tweet,
                  i = a.context.loggedInUserId,
                  r = ct.a.getOriginalTweet(o)
                a.props.onUnbookmark(r.id_str).then(
                  function () {
                    a.props.removeTweetsFromBookmarksTimeline(b()({}, r.id_str, !0)),
                      t && i && a.props.removeTweetFromBookmarkFolderTimeline(t, r.id_str, i),
                      a.props.addToast({ text: Nt })
                  },
                  function (e) {
                    n(Ze)(e), a._scribeAction('unbookmark_error')
                  },
                ),
                  a._scribeAction('unbookmark')
              }),
              b()(m()(a), '_handleViewBookmarks', function () {
                a.props.history.push({ pathname: '/i/bookmarks' })
              }),
              b()(m()(a), '_handleAnalyticsPress', function () {
                a._scribeAction('analytics')
              }),
              b()(m()(a), '_handleReplyPress', function () {
                var e = a.props.onReplyPress
                a._showReplyComposer(), e && e()
              }),
              b()(m()(a), '_showReplyComposer', function () {
                var e = a.context,
                  t = e.featureSwitches,
                  n = e.loggedInUserId,
                  o = a.props,
                  i = o.history,
                  r = o.promotedContent,
                  c = o.tweet
                a._scribeAction('reply'),
                  n
                    ? t.isTrue('rweb_reply_button_to_conversation_screen')
                      ? i.push({ state: { focusComposer: !0, promotedContent: r }, pathname: c.permalink })
                      : i.push({
                          state: {
                            inReplyToStatusId: c.id_str,
                            isSelfThreadReply: Object(Be.c)({ tweet: c, loggedInUserId: n }),
                            promotedContent: r,
                          },
                          pathname: '/compose/tweet',
                        })
                    : a._showLoginSignupSheet(Tt.a.reply)
              }),
              b()(m()(a), '_handleConfirmReplyTweet', function () {
                ;(0, a.props.resetDraft)(), a._handleHideConfirmation(), a._showReplyComposer()
              }),
              b()(m()(a), '_handleDMShare', function () {
                var e = a.context.loggedInUserId,
                  t = a.props,
                  n = t.history,
                  o = t.misinfoNudgeActionTaken,
                  i = t.tweet
                a._scribeAction('share_via_dm'),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: ft.a.share,
                    element: o ? 'share_tweet_after_read' : 'share_tweet',
                    action: 'click',
                  }),
                  e
                    ? n.push({ state: { tweetAttachment: ct.a.getOriginalTweet(i) }, pathname: '/messages/compose' })
                    : a._showLoginSignupSheet(Tt.a.dmshare)
              }),
              b()(m()(a), '_handleCopyLink', function () {
                var e = a.props,
                  t = e.misinfoNudgeActionTaken,
                  n = e.sessionToken
                Y.a.setString(Object(Fe.a)(a.props.tweet.permalink, n)),
                  a.props.addToast({ text: rn }),
                  a._scribeAction('copy_link'),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: ft.a.share,
                    element: t ? 'share_tweet_after_read' : 'share_tweet',
                    action: 'click',
                  })
              }),
              b()(m()(a), '_handleSharePress', function () {
                var e = a.props.misinfoNudgeActionTaken
                a._scribeAction('share_menu_click'),
                  a._scribeMisInfoNudgeAction({
                    tweetActionName: ft.a.share,
                    element: e ? 'after_read' : void 0,
                    action: 'impression',
                  })
              }),
              b()(m()(a), '_handleShare', function () {
                var e,
                  t,
                  n = a.props,
                  o = n.misinfoNudgeActionTaken,
                  i = n.sessionToken,
                  r = n.tweet,
                  c = ct.a.getOriginalTweet(r),
                  s = a.context.featureSwitches.isTrue('responsive_web_share_only_tweet_url_omit_title_and_text'),
                  l = Object(Fe.a)(c.permalink, i),
                  u = Ot({ fullName: c.user.name, screenName: c.user.screen_name }),
                  d = Bt({
                    fullName: c.user.name,
                    screenName: c.user.screen_name,
                    tweet: ((e = c.text), (t = document.createElement('textarea')), (t.innerHTML = e), t.value),
                  }),
                  m = s ? { url: l } : { title: u, text: d, url: l }
                navigator
                  .share(m)
                  .then(function () {
                    a._scribeAction('share'),
                      a._scribeMisInfoNudgeAction({
                        tweetActionName: ft.a.share,
                        element: o ? 'share_tweet_after_read' : 'share_tweet',
                        action: 'click',
                      })
                  })
                  .catch(function () {
                    a._scribeAction('share_error')
                  })
              }),
              b()(m()(a), '_replyWrapper', function (e) {
                var t = e.children,
                  n = a.props,
                  o = n.displayStyle,
                  i = n.tweet,
                  r = ct.a.getOriginalTweet(i)
                if ('limited_replies' !== r.limited_actions || !r.conversation_control) return t
                var c = 'block' !== o,
                  s = r.conversation_control.policy,
                  l = r.conversation_control.conversation_owner.screen_name,
                  u = ut.a.getEducationType(s, !1)
                return u
                  ? _.a.createElement(
                      Ye,
                      {
                        screenName: l,
                        scribeElement: 'disabled_reply',
                        style: Sn.conversationControlsAnchor,
                        tweetPermalink: c ? r.permalink : void 0,
                        type: u,
                      },
                      t,
                    )
                  : null
              }),
              b()(m()(a), '_handleCloseLoginSignupSheet', function () {
                a.setState({ showLoginSignupSheet: !1 })
              }),
              b()(m()(a), '_handleArticleClicked', function () {
                var e,
                  t = a.props,
                  n = t.setArticlesVisited,
                  o = t.tweet,
                  i = null == o || null === (e = o.card) || void 0 === e ? void 0 : e.url
                i &&
                  (n(i),
                  a._scribeArticleNudgeAction({ element: 'read_article', action: 'click' }),
                  a.setState({ articleNudgeFollowed: !0 }))
              }),
              b()(
                m()(a),
                '_getShareMenuActionItems',
                Object(Ue.a)(function (e, t, n, o) {
                  var i,
                    r = a.context.loggedInUserId,
                    c = e.retweeted_status || e,
                    s = c.user,
                    l = !(
                      null === (i = a.context.userClaims) ||
                      void 0 === i ||
                      !i.isTrueAndEnabled('subscriptions_feature_1002')
                    ),
                    u = []
                  return (
                    !s.protected && !a._shouldDisable(e, Re.a.SendViaDM) && u.push(a._getDmShareAction()),
                    r &&
                      (n || c.isBookmarked
                        ? (u.push(a._getUnbookmarkTweetAction()), o && u.push(a._getUnBookmarkTweetFromFolderAction()))
                        : a._shouldDisable(e, Re.a.AddToBookmarks) || u.push(a._getBookmarkTweetAction())),
                    r && l && u.push(a._getBookmarkTweetToFolderAction()),
                    !s.protected &&
                      G.canUseDOM &&
                      Y.a.isAvailable() &&
                      !a._shouldDisable(e, Re.a.ShareTweetVia) &&
                      u.push(a._getCopyLinkAction(t)),
                    !s.protected &&
                      !a._shouldDisable(e, Re.a.ShareTweetVia) &&
                      a._shareSupported &&
                      u.push(a._getShareAction(t)),
                    u
                  )
                }),
              ),
              b()(
                m()(a),
                '_getShareAction',
                Object(Ue.a)(function (e) {
                  return { behavioralEventContext: yn, text: e ? Mt : Pt, onClick: a._handleShare, Icon: dt.a }
                }),
              ),
              b()(
                m()(a),
                '_getBookmarkTweetAction',
                Object(Ue.a)(function () {
                  return { behavioralEventContext: kn(!0), text: St, onClick: a._handleBookmarkTweet, Icon: _t.a }
                }),
              ),
              b()(
                m()(a),
                '_getBookmarkTweetToFolderAction',
                Object(Ue.a)(function () {
                  return {
                    behavioralEventContext: kn(!0),
                    text: At,
                    onClick: a._handleBookmarkTweetToFolder,
                    Icon: gt.a,
                  }
                }),
              ),
              b()(
                m()(a),
                '_getUnBookmarkTweetFromFolderAction',
                Object(Ue.a)(function () {
                  return {
                    behavioralEventContext: kn(!1),
                    text: Ht,
                    onClick: a._handleUnBookmarkFromFolder,
                    Icon: kt.a,
                  }
                }),
              ),
              b()(
                m()(a),
                '_getUnbookmarkTweetAction',
                Object(Ue.a)(function () {
                  return { behavioralEventContext: kn(!1), text: Lt, onClick: a._handleUnbookmarkTweet, Icon: kt.a }
                }),
              ),
              b()(
                m()(a),
                '_getDmShareAction',
                Object(Ue.a)(function () {
                  return { behavioralEventContext: _n, text: Rt, onClick: a._handleDMShare, Icon: Ct.a }
                }),
              ),
              b()(
                m()(a),
                '_getCopyLinkAction',
                Object(Ue.a)(function (e) {
                  return { behavioralEventContext: gn, text: e ? xt : It, onClick: a._handleCopyLink, Icon: Et.a }
                }),
              ),
              b()(
                m()(a),
                '_getRetweetWithCommentLink',
                Object(Ue.a)(function (e, t, n) {
                  return {
                    pathname: '/compose/tweet',
                    state: { quotedStatus: e, promotedContent: t, hasArticleNudge: n },
                  }
                }),
              ),
              b()(m()(a), '_showLoginSignupSheet', function (e) {
                a.setState({ showLoginSignupSheet: !0, loginSignupSheetDisplayMode: e })
              }),
              b()(m()(a), '_modLikes', function (e) {
                var t = a.props,
                  n = t.liveCounts,
                  o = t.tweet,
                  i = t.updateLiveCounts
                n.likeCount && i({ tweetId: o.id_str, liveCounts: { likeCount: n.likeCount + e } })
              }),
              b()(m()(a), '_modRetweets', function (e) {
                var t = a.props,
                  n = t.liveCounts,
                  o = t.tweet,
                  i = t.updateLiveCounts
                n.retweetCount && i({ tweetId: o.id_str, liveCounts: { retweetCount: n.retweetCount + e } })
              }),
              b()(m()(a), '_handleLivePipelineUpdate', function (e) {
                var t = e.tweet_engagement,
                  n = t.like_count,
                  o = t.quote_count,
                  i = t.reply_count,
                  c = t.retweet_count,
                  s = a.props,
                  l = s.liveCounts,
                  u = s.updateLiveCounts,
                  d = r()({}, l)
                n && (d.likeCount = Math.max(l.likeCount || 0, parseInt(n, 10))),
                  o && (d.quoteCount = Math.max(l.quoteCount || 0, parseInt(o, 10))),
                  c && (d.retweetCount = Math.max(l.retweetCount || 0, parseInt(c, 10))),
                  i && (d.replyCount = Math.max(l.replyCount || 0, parseInt(i, 10))),
                  u({ tweetId: a.props.tweet.id_str, liveCounts: d })
              }),
              b()(m()(a), '_saveStateCounts', function () {
                var e = a.props,
                  t = e.liveCounts,
                  n = e.tweet.id_str,
                  o = e.updateCounts,
                  i = t.likeCount,
                  r = t.replyCount,
                  c = t.retweetCount
                ;(i || c || r) && o(n, t)
              }),
              (a.state = {
                articleNudgeFollowed: !1,
                disabledAction: void 0,
                loginSignupSheetDisplayMode: void 0,
                showDownvoteEducation: Cn.NONE,
                showReactionsEducation: !1,
                showLoginSignupSheet: !1,
                showReplyDiscardTweetConfirmation: !1,
                showRetweetDiscardTweetConfirmation: !1,
                showDisabledActionsEducation: !1,
              }),
              (a._shareSupported = G.canUseDOM && void 0 !== window.navigator.share),
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
                    o = t.activeColor,
                    i = t.bookmarkFolderId,
                    r = t.color,
                    c = t.composerHasData,
                    s = t.displayStyle,
                    l = t.enableKeyboardShortcuts,
                    u = t.forwardPivotInfo,
                    d = t.isCommunityMember,
                    m = t.likeActionIconContainerRef,
                    p = t.likeTransitionAnimation,
                    v = t.liveCounts,
                    h = t.misinfoNudgeActionTaken,
                    f = t.nativeID,
                    w = t.promotedContent,
                    y = t.style,
                    g = t.tweet,
                    k = t.withActionsDisabled,
                    C = t.withAnalyticsAction,
                    E = t.withCount,
                    T = t.withRemoveFromBookmarks,
                    S = this.context.loggedInUserId,
                    A = this.state,
                    I = A.disabledAction,
                    x = A.showDisabledActionsEducation,
                    R = A.showLoginSignupSheet,
                    L = A.showReplyDiscardTweetConfirmation,
                    D = A.showRetweetDiscardTweetConfirmation,
                    M = ct.a.getOriginalTweet(g),
                    P = this._getRetweetWithCommentLink(M, w, this._shouldShowArticleNudge()),
                    O = this._shouldDisable(M, Re.a.Analytics, d),
                    B = this._shouldDisable(M, Re.a.Reply, d),
                    F = !M.favorited && this._shouldDisable(M, Re.a.Like, d),
                    N = !M.reacted && this._shouldDisable(M, Re.a.Like, d),
                    H = this._shouldDisable(M, Re.a.Retweet, d),
                    j = !M.isDownvoted && this._shouldDisable(M, Re.a.Downvote, d),
                    U = this._shouldDisable(M, Re.a.QuoteTweet, d),
                    K = B && 'limited_replies' === M.limited_actions,
                    z = this._getShareMenuActionItems(g, w, T, i),
                    V = z.length < 1,
                    W = V && 'non_compliant' === M.limited_actions,
                    q = !!S,
                    Q = this._shouldMisinfoNudgeForceActionMenu(ft.a.like) && !M.favorited,
                    X = b()({}, Ne.e.bookmark, T ? this._handleUnbookmarkTweet : this._handleBookmarkTweet)
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    _.a.createElement(mt.a, { enabled: l, handlers: X }),
                    _.a.createElement(pt.a, {
                      actionSize: n,
                      activeColor: o,
                      color: r,
                      displayStyle: s,
                      downvoteCount: 0,
                      enableKeyboardShortcuts: l,
                      isDisabled: k,
                      isDownvoted: M.isDownvoted,
                      isFromProtectedAccount: M.user.protected && M.user.id_str !== S,
                      isLiked: M.favorited,
                      isRetweeted: M.retweeted,
                      likeCount: v.likeCount || M.favorite_count,
                      nativeID: f,
                      reaction: M.reacted,
                      reactionCounts: M.reaction_count,
                      renderAnalyticsAction: function (t) {
                        return _.a.createElement(
                          pt.a.ActionAnalytics,
                          a()({}, t, {
                            isFaded: O,
                            onPress: O ? e._handleOpenEducationPrompt(Re.a.Analytics) : e._handleAnalyticsPress,
                          }),
                        )
                      },
                      renderDownvoteAction: function (t) {
                        return _.a.createElement(
                          pt.a.ActionDownvote,
                          a()({}, t, {
                            downvoteTransitionAnimation:
                              'https://abs.twimg.com/sticky/animations/reply.downvote.1.json',
                            isFaded: j,
                            onPress: j ? e._handleOpenEducationPrompt(Re.a.Downvote) : e._handleDownvote,
                            style: (v.likeCount || M.favorite_count || 0) > 0 && E ? Sn.reduceDownvotePadding : void 0,
                            testIDs: { downvote: We.a.downvote, undownvote: We.a.undownvote },
                          }),
                        )
                      },
                      renderLikeAction: function (t) {
                        return _.a.createElement(
                          pt.a.ActionLike,
                          a()({}, t, {
                            actionMenuDescription: e._renderEngagementNudge(ft.a.like, !h, u),
                            enableActionMenu: !F && Q,
                            isFaded: F,
                            likeActionIconContainerRef: m,
                            likeTransitionAnimation: p,
                            onLikeActionSelect: e._handleLike,
                            onMenuCancel: e._handleMenuCancel(ft.a.like),
                            onPress: F
                              ? e._handleOpenEducationPrompt(Re.a.Like)
                              : Q
                              ? e._handleLikeMenuPress
                              : e._handleLike,
                            testIDs: { like: We.a.like, unlike: We.a.unlike },
                          }),
                        )
                      },
                      renderReactionAction: function (t) {
                        return _.a.createElement(
                          pt.a.ActionReaction,
                          a()({}, t, {
                            experimentalFruitBasketThreshold: e._reactionsFruitBasketThreshold,
                            isFaded: N,
                            legacyHeart: e._reactionsLegacyHeartEnabled,
                            onPopoverOpen: function (n) {
                              var o
                              null === (o = t.onPopoverOpen) || void 0 === o || o.call(t, n),
                                e._handleReactionPopoverOpen(n)
                            },
                            onReactionSelect: N ? e._handleOpenEducationPrompt(Re.a.React) : e._handleReact,
                            testIDs: { react: We.a.react, unreact: We.a.unreact },
                            withFruitBasket: E,
                          }),
                        )
                      },
                      renderReplyAction: function (t) {
                        return _.a.createElement(
                          pt.a.ActionReply,
                          a()({}, t, {
                            isFaded: B,
                            onPress: B ? e._handleOpenEducationPrompt(Re.a.Reply) : e._handleReplyPress,
                            renderWrapper: K ? e._replyWrapper : void 0,
                            testID: We.a.reply,
                          }),
                        )
                      },
                      renderRetweetAction: function (t) {
                        return _.a.createElement(
                          pt.a.ActionRetweet,
                          a()({}, t, {
                            actionMenuDescription:
                              u && Object(ft.b)(ft.a.retweet, u)
                                ? e._renderEngagementNudge(ft.a.retweet, !h, u)
                                : e._renderArticleNudge(),
                            activeColor: null != M && M.exclusivity_info ? 'plum500' : void 0,
                            enableActionMenu: q,
                            excludeRetweetAction: H,
                            excludeRetweetWithCommentAction: U,
                            isDisabled: t.isDisabled || (!q && H) || (q && H && U),
                            onMenuCancel: e._handleMenuCancel(ft.a.retweet),
                            onPress: e._handleRetweetPress,
                            onQuoteTweetActionSelect: e._handleQuoteTweet,
                            onRetweetActionSelect: e._handleRetweet,
                            onUnretweetActionSelect: e._handleUnretweet,
                            retweetActionSubText:
                              null != M && M.exclusivity_info
                                ? e._renderSuperFollowerActionRetweetSubText(M.exclusivity_info.screen_name)
                                : void 0,
                            retweetWithCommentLink: c ? void 0 : P,
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
                        return _.a.createElement(
                          pt.a.ActionShare,
                          a()({}, t, {
                            actionItems: z,
                            actionMenuDescription: e._renderEngagementNudge(ft.a.share, !h, u),
                            isDisabled: V && !W,
                            isFaded: W,
                            onMenuCancel: e._handleMenuCancel(ft.a.share),
                            onPress: W ? e._handleOpenEducationPrompt(Re.a.Share) : e._handleSharePress,
                          }),
                        )
                      },
                      replyCount: v.replyCount || M.reply_count,
                      retweetCount: (v.quoteCount || M.quote_count || 0) + (v.retweetCount || M.retweet_count),
                      showDownvoteBeforeLike: this._showDownvoteBeforeLike,
                      style: y,
                      tweetLink: M.permalink,
                      withAnalytics: M.user.id_str === S && !!C,
                      withCount: E,
                      withDownvote: this._shouldShowDownvoteButton(),
                      withReaction: this._reactionsEnabled,
                    }),
                    R
                      ? _.a.createElement(je.a, {
                          displayMode: this.state.loginSignupSheetDisplayMode,
                          onClose: this._handleCloseLoginSignupSheet,
                          tweetId: M.id_str,
                          userFullName: M.user.name,
                          userId: M.user.id_str,
                        })
                      : null,
                    L
                      ? _.a.createElement(vt.a, {
                          confirmButtonLabel: dn,
                          confirmButtonType: 'destructiveFilled',
                          headline: cn,
                          onCancel: this._handleHideConfirmation,
                          onConfirm: this._handleConfirmReplyTweet,
                          text: ln,
                        })
                      : null,
                    D
                      ? _.a.createElement(vt.a, {
                          confirmButtonLabel: mn,
                          confirmButtonLink: {
                            pathname: '/compose/tweet',
                            state: { quotedStatus: M, promotedContent: w },
                          },
                          confirmButtonType: 'destructiveFilled',
                          headline: sn,
                          onCancel: this._handleHideConfirmation,
                          onConfirm: this._handleConfirmQuoteTweet,
                          text: un,
                        })
                      : null,
                    this._renderReactionsEducation(),
                    this._renderDownvoteInlineEducation(),
                    x && I && g.limited_actions
                      ? _.a.createElement(Oe, {
                          actionType: I,
                          limitedActionsConfig: g.limited_actions,
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
                    o = t.tweet,
                    a = this.state.articleNudgeFollowed,
                    i = null == o || null === (e = o.card) || void 0 === e ? void 0 : e.url
                  return this._shouldShowArticleNudge()
                    ? _.a.createElement(X, {
                        articleNudgeFollowed: a,
                        key: 'article-nudge',
                        link: i,
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
                    o = n.analytics,
                    a = n.promotedContent,
                    i = n.tweet,
                    c = t ? e.action : ''.concat(e.action, '_attempt'),
                    s = o.contextualScribeData,
                    l = s && s.items ? s : r()(r()({}, s || {}), {}, { items: [Ve.a.getTweetItem(i, a)] })
                  o.scribe(r()(r()({}, e), {}, { action: c, data: l }))
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
                    o = e.tweetActionName,
                    a = this.props,
                    i = a.analytics,
                    c = a.forwardPivotInfo
                  Object(ft.b)(o, c) && i.scribe(r()(r()({}, wn), {}, { element: n, action: t }))
                },
              },
              {
                key: '_scribeArticleNudgeAction',
                value: function (e) {
                  var t,
                    n = e.action,
                    o = e.element,
                    a = this.props,
                    i = a.analytics,
                    c = a.tweet
                  this._articleNudgeEnabled &&
                    i.scribe(
                      r()(
                        r()({}, bn),
                        {},
                        {
                          element: o,
                          action: n,
                          data: {
                            items: [
                              {
                                token: null == c || null === (t = c.card) || void 0 === t ? void 0 : t.url,
                                retweeting_tweet_id: c.id_str,
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
                  return Object(ft.b)(e, t)
                },
              },
              {
                key: '_initializeLivePipeline',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.dataSaverMode,
                    o = t.tweet,
                    a = ct.a.getOriginalTweet(o)
                  if (this.context.loggedInUserId)
                    return Object(g.h)().then(function (t) {
                      var o = t.LivePipeline
                      !n &&
                        o.isSupportedAndReady(e.context.featureSwitches) &&
                        e.context.featureSwitches.isTrue('livepipeline_tweetengagement_enabled') &&
                        !e._livePipelineSubscription &&
                        (e._livePipelineSubscription =
                          o &&
                          o.get().subscribeTopic('/tweet_engagement/'.concat(a.id_str), e._handleLivePipelineUpdate))
                    })
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent)
      b()(Tn, 'contextType', ht.a),
        b()(Tn, 'defaultProps', {
          actionSize: 'normal',
          color: 'gray700',
          displayStyle: 'inline',
          enableKeyboardShortcuts: !1,
          liveCounts: { replyCount: void 0, likeCount: void 0, retweetCount: void 0 },
          withCount: !1,
          withRemoveFromBookmarks: !1,
        })
      t.a = Object(nt.a)(Object(xe.a)()(Ie(Tn)))
      var Sn = D.a.create(function (e) {
        return {
          conversationControlsAnchor: { justifyContent: 'center' },
          inlineCallout: { marginTop: e.spaces.space12 },
          reduceDownvotePadding: { marginRight: -1 * e.spacesPx.space8 },
        }
      })
    },
    xrkw: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
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
