;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50, 233],
  {
    '/FNr': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DmConversationMetadataQuery', function () {
          return O
        }),
        n.d(t, 'default', function () {
          return D
        })
      n('uFXj')
      var a,
        r = n('zh9S'),
        i = n('ERkP'),
        l = n.n(i),
        o = n('i4Oy'),
        s = n('yiKp'),
        c = n.n(s),
        d = (n('lTEL'), n('7x/C'), n('kYxP'), n('wFPu'), n('mw9i')),
        u = n('4AMG'),
        p = n('h3MB'),
        m = (n('YWiL'), n('NjAB')),
        g = n('Fr3L'),
        h = n('sl05'),
        v = n('s8G+'),
        f = n('DQzJ'),
        y = void 0 !== a ? a : (a = n('GjeS')),
        _ = { context: 'DM_CONVERSATION_METADATA' }
      function b(e) {
        var t = e.conversation,
          n = e.isWide,
          a = e.perspective,
          r = Object(v.a)('rito_safety_mode_blocked_profile_enabled'),
          i = Object(v.a)('super_follow_user_api_enabled'),
          o = (function (e, t) {
            var n,
              a,
              r =
                null == t ||
                null === (n = t.dm_conversation_by_rest_id) ||
                void 0 === n ||
                null === (a = n.legacy_conversation_slice) ||
                void 0 === a
                  ? void 0
                  : a.items
            if (!r || !r.length) return null
            var i = Object(m.b)(r, [p.b]).entities.entries,
              l = []
            for (var o in i) l.push(i[o])
            return l.reverse(), c()(c()({}, e), {}, { entries: l, social_proof: [] })
          })(
            t,
            Object(f.a)(y, { id: t.conversation_id || '', withSafetyModeUserFields: r, withSuperFollowsUserFields: i })
              .data,
          )
        return l.a.useCallback(
          function (e) {
            return o
              ? l.a.createElement(
                  d.a,
                  { style: h.a.root },
                  l.a.createElement(u.a, {
                    conversation: o,
                    inboxType: 'primary',
                    isWide: n,
                    onHistoryRequest: function () {},
                    perspective: a,
                    scribeNamespace: {},
                    style: h.a.activity,
                  }),
                )
              : null
          },
          [o, n, a],
        )(e)
      }
      function k(e) {
        return l.a.createElement(g.a, { errorConfig: _ }, l.a.createElement(b, e))
      }
      var S,
        E = n('qBaR'),
        C = n('RqPI'),
        T = n('z2Pn'),
        R = n('rHpw'),
        w = n('pNZL'),
        x = n('IAZG'),
        F = n('uDfI'),
        A = n('zCf4'),
        I = { page: 'messages', section: 'thread' },
        O = void 0 !== S ? S : (S = n('q2o4')),
        L = { context: 'DM_CONVERSATION_TIMELINE' }
      function M(e) {
        var t = e.richTextInputContext,
          n = e.typeaheadWrapper,
          a = Object(A.f)(),
          i = Object(A.g)(),
          s = Object(A.h)().conversationId,
          c = Object(x.a)(O, { id: s || '' })
        l.a.useEffect(function () {
          r.scribePageImpression(I), r.googleAnalyticsPageView(I), Object(w.b)(I)
        }, []),
          l.a.useEffect(
            function () {
              Object(T.h)(i.pathname)
            },
            [i.pathname],
          )
        var d = 'string' == typeof i.query.text ? i.query.text : void 0,
          u = o.a.get('window').width >= R.a.theme.breakpoints.small,
          g = Object(F.d)(C.r) || '',
          h = (function (e) {
            if (!e) return null
            var t = Object(m.b)([e.dm_conversation_by_rest_id], [p.a]).entities.conversations
            for (var n in t) return t[n]
            return null
          })(c)
        return h && h.conversation_id
          ? l.a.createElement(
              E.a,
              { conversation: h, conversationId: h.conversation_id, newConversationParticipants: [], perspective: g },
              l.a.createElement(k, {
                conversation: h,
                history: a,
                isWide: u,
                perspective: g,
                prefillText: d,
                richTextInputContext: t,
                typeaheadWrapper: n,
              }),
            )
          : null
      }
      function D(e) {
        return l.a.createElement(g.a, { errorConfig: L }, l.a.createElement(M, e))
      }
    },
    '33Kz': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return o
      }),
        n.d(t, 'a', function () {
          return s
        })
      var a = n('RhWx'),
        r = n.n(a),
        i =
          (n('2G9S'),
          n('hBpG'),
          n('7x/C'),
          n('mlET'),
          n('KqXw'),
          n('Ysgh'),
          n('z84I'),
          function (e) {
            return e.getArrayValue('dm_reactions_config_active_reactions')
          }),
        l = function (e) {
          var t = e.getArrayValue('dm_reactions_config_inactive_reactions'),
            n = i(e)
          return [].concat(r()(n), r()(t))
        },
        o = function (e, t) {
          var n = l(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        s = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeInactive: !1 }
          return t.includeInactive
            ? l(e).map(function (e) {
                return e.split(':')[1]
              })
            : i(e).map(function (e) {
                return e.split(':')[1]
              })
        }
    },
    '3AAD': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('7n04'),
        l = r()(r()({}, i.a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = l
    },
    '4AMG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Wi
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        g = n.n(m),
        h = (n('2G9S'), n('ejT/')),
        v = n('ERkP'),
        f = n.n(v),
        y = (n('lTEL'), n('7x/C'), n('kYxP'), n('M+/F'), n('KOtZ'), n('gbD7')),
        _ = n('X/yg'),
        b = (n('Blm6'), n('b9JY')),
        k = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(b.b)(e) && Object(b.b)(t)) {
            var n = e.message_data,
              a = n.sender_id,
              r = n.time,
              i = t.message_data,
              l = i.sender_id,
              o = i.time,
              s = parseInt(o, 10) - parseInt(r, 10)
            return a === l && s >= 0 && s <= 6e4
          }
          return !1
        },
        S = n('jat/'),
        E = n('MMRb'),
        C = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        T = n('XnpN'),
        R = n('LhSm'),
        w = n('I4+6'),
        x = n('rHpw'),
        F = n('PbQQ'),
        A = n('cm6r'),
        I = n('jV+4'),
        O = n('pBrB'),
        L = n('wCd/'),
        M = function (e, t) {
          var n = Object(T.a)(e, t).map(function (e) {
              return e.user
            }),
            a = n && n[0]
          return {
            userDescription: a.description,
            userEntities: a.entities,
            userWithheldDescription: a.withheld_description,
            userWithheldEntities: a.withheld_entities,
            userFollowerCount: a && a.followers_count,
            userFriendsCount: a && a.friends_count,
            userIdStr: a && a.id_str,
            userJoinDate: a && a.created_at,
            userName: a && a.name,
            userScreenName: a && a.screen_name,
            userIsVerified: a && a.verified,
          }
        },
        D = x.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: e.spaces.space16,
              paddingVertical: e.spaces.space20,
              paddingHorizontal: e.spaces.space16,
              borderRadius: e.borderRadii.xSmall,
            },
            profileInfoItemMargin: { marginBottom: e.spaces.space4 },
            borderBottom: {
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
            },
            description: { width: '100%', textAlign: 'center' },
          }
        }),
        P = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            a = void 0 === n || n,
            r = f.a.useContext(C.a).loggedInUserId
          if (!t) return null
          var i = M(t, r || ''),
            l = i.userDescription,
            o = i.userEntities,
            s = i.userFollowerCount,
            c = i.userFriendsCount,
            d = i.userIdStr,
            u = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            g = i.userScreenName,
            h = i.userWithheldDescription,
            v = i.userWithheldEntities,
            y = !!(m && g && ((s && c) || p)),
            _ = w.a.generate({
              color: x.a.theme.colors.text,
              backgroundColor: x.a.theme.colors.transparent,
              customFocusBackgroundColor: x.a.theme.colors.gray0,
              customHoverBackgroundColor: x.a.theme.colors.gray0,
              customPressedBackgroundColor: x.a.theme.colors.activeFaintGray,
            })
          return f.a.createElement(F.a.Consumer, null, function (e) {
            return f.a.createElement(
              A.a,
              {
                interactiveStyles: _,
                link: e.withAnchorless('https://twitter.com/'.concat(g || '')),
                style: [D.root, a && y && D.borderBottom],
              },
              f.a.createElement(I.a, {
                isVerified: u,
                name: m,
                screenName: g,
                style: D.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              l && o && d
                ? f.a.createElement(O.a, {
                    description: l,
                    entities: o,
                    style: [D.profileInfoItemMargin, D.description],
                    userId: d,
                    withheldDescription: h,
                    withheldEntities: v,
                  })
                : null,
              s && c
                ? f.a.createElement(L.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: g || '',
                    style: D.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? f.a.createElement(R.a, { joinDate: p }) : null,
            )
          })
        },
        K = n('V/6K'),
        B = n('cFyg'),
        j = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        N = n('aA19'),
        U = n('aWyx'),
        W = n('mN6z'),
        H = n('MWbm'),
        V = n('t62R'),
        q = n('oSwX'),
        z = n('MAI/'),
        G = n('zQEV'),
        Y = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return f.a.createElement(V.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        Q = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.entry,
                  r = t.entryType,
                  i = t.perspective,
                  l = t.users,
                  o = Object(G.a)(a, r, i, l)
                switch (r) {
                  case U.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === a.conversation_avatar_image_https
                    return f.a.createElement(
                      f.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? f.a.createElement(
                            H.a,
                            { style: X.conversationAvatarContainer },
                            f.a.createElement(N.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      f.a.createElement(Y, null, o),
                    )
                  case U.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(o),
                      d = e._getParticipantsFromEntry(),
                      u = f.a.createElement(
                        V.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return f.a.createElement(f.a.Fragment, null, c, p)
                  default:
                    return f.a.createElement(Y, null, o)
                }
              }),
              g()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  l = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return f.a.createElement(
                  A.a,
                  { interactiveStyles: null, link: l, style: X.userAddedYouContainer },
                  i
                    ? f.a.createElement(q.default, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  f.a.createElement(Y, { link: l, style: X.userAddedYouText }, t),
                )
              }),
              g()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return f.a.createElement(
                  A.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: X.joinConversationDetails,
                  },
                  n,
                  f.a.createElement(z.a, { style: X.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: r }),
                )
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(W.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.a.createElement(H.a, { style: X.root }, this._renderContents())
                },
              },
              {
                key: '_isValidImageSource',
                value: function (e) {
                  return e && '' !== e && e.indexOf('MEDIA_NOT_FOUND') < 0
                },
              },
              {
                key: '_getParticipantsFromEntry',
                value: function () {
                  var e = this.props,
                    t = e.entry,
                    n = e.perspective,
                    a = e.users
                  return t.participants
                    ? t.participants
                        .filter(function (e) {
                          var t = e.user_id
                          return n !== t
                        })
                        .map(function (e) {
                          var t = e.user_id
                          return a[t]
                        })
                        .filter(Boolean)
                    : []
                },
              },
              {
                key: '_getParticipantsFromEntryText',
                value: function (e) {
                  var t = this.props.conversation.conversation_id
                  return Object(G.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        X = x.a.create(function (e) {
          return {
            root: { paddingBottom: e.spaces.space20 },
            conversationAvatarContainer: {
              alignSelf: 'center',
              height: e.spaces.space64,
              marginBottom: e.spaces.space12,
              width: e.spaces.space64,
            },
            userAddedYouContainer: { flexDirection: 'row', justifyContent: 'center' },
            userAddedYouText: { flexShrink: 1, marginLeft: e.spaces.space12 },
            joinConversationDetails: { marginTop: e.spaces.space4 },
            userAvatarList: { marginTop: e.spaces.space4 },
            userAvatarFacepile: { marginTop: e.spaces.space4, justifyContent: 'center' },
          }
        }),
        J = Object(j.a)(Q),
        Z = n('ddV6'),
        $ = n.n(Z),
        ee = n('yiKp'),
        te = n.n(ee),
        ne = n('oQhu')
      var ae = Object(ne.a)(function (e) {
          var t = x.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + x.a.theme.spacesPx.space12,
          }
        }),
        re = n('shC7'),
        ie = n('38/B'),
        le = function (e) {
          return oe(e, ie.a.reducedMotionEnabled)
        },
        oe = Object(ne.a)(function (e, t) {
          var n,
            a,
            r,
            i,
            l,
            o,
            s,
            c,
            d,
            u =
              ((n = ae(x.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ue[x.a.theme.scale]),
              (l = ce / i),
              (o = de / a),
              (c = de - (s = de / 2)),
              (d = de - s - r),
              {
                cssTransition: ie.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(me, ', opacity ').concat(me) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (re.a.getConstants().isRTL ? 1 : -1) * c }] },
                    received: { transform: [{ translateX: (re.a.getConstants().isRTL ? -1 : 1) * d }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (re.a.getConstants().isRTL ? 1 : -1) * pe[x.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (re.a.getConstants().isRTL ? -1 : 1) * (pe[x.a.theme.scale] + d) - s }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: ce } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: l }] },
                    sent: {
                      paddingRight: s / l,
                      transformOrigin: re.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: s / l,
                      transformOrigin: re.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: re.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: re.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: o }] },
                  visuallyHidden: { opacity: 0, pointerEvents: 'none' },
                },
              })
          return {
            actionsContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [u.cssTransition, u.actionsContainer.base]
              return n && a.push(t ? u.actionsContainer.active.sent : u.actionsContainer.active.received), a
            },
            messageContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [u.cssTransition, u.messageContainer.base]
              return n && a.push(t ? u.messageContainer.active.sent : u.messageContainer.active.received), a
            },
            voiceMessageContainer: function (e) {
              e.isSent
              var t = e.isVoiceMessageActive,
                n = [u.cssTransition, u.voiceMessage.container.base]
              return t && n.push(u.voiceMessage.container.active), n
            },
            voiceMessage: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [u.cssTransition, u.voiceMessage.base]
              return (
                n &&
                  (a.push(u.voiceMessage.active.base),
                  a.push(t ? u.voiceMessage.active.sent : u.voiceMessage.active.received)),
                a
              )
            },
            userAvatar: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [u.cssTransition, u.userAvatar.base, t ? u.userAvatar.sent : u.userAvatar.received]
              return n ? a.push(u.userAvatar.active) : t && a.push(u.userAvatar.visuallyHidden), a
            },
          }
        })
      var se,
        ce = 60,
        de = ce,
        ue = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        pe = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        me = '0.2s 0s ease-in-out',
        ge = n('+Kfv'),
        he = n('hqKg'),
        ve = n('oEGd'),
        fe = n('zh9S'),
        ye = n('Yatk'),
        _e = n('G6rE'),
        be = n('P1r1'),
        ke = { scribeAction: fe.scribeAction },
        Se = Object(he.createSelector)(
          function (e, t) {
            return _e.e.select(e, t.senderId)
          },
          be.k,
          be.q,
          function (e, t, n) {
            return { user: Object(ye.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ee = Object(ve.f)(Se, ke),
        Ce = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Te = n('rxPX'),
        Re = n('0KEI'),
        we = Object(Te.a)()
          .propsFromActions(function () {
            return {
              addToast: Ce.b,
              createLocalApiErrorHandler: Object(Re.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: E.deleteEntry,
            }
          })
          .withAnalytics(),
        xe = n('k49u'),
        Fe = n('LVU8'),
        Ae = n('3XMw'),
        Ie = n.n(Ae),
        Oe = Ie.a.f58dff33,
        Le = Ie.a.ad5a8e8e,
        Me =
          ((se = {}),
          g()(se, xe.a.MissingParameter, { toast: Object(Fe.a)(Oe) }),
          g()(se, xe.a.DirectMessageDestroyPermissionsError, { toast: { text: Le } }),
          g()(se, 'showToast', !0),
          se),
        De = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Pe = n('uKEd'),
        Ke = [],
        Be = Object(he.createSelector)(
          function (e) {
            return Object(Pe.l)(e).entries
          },
          function (e, t) {
            return Object(Pe.p)(e, t.entry.id) || Ke
          },
          function (e, t) {
            return t.perspective
          },
          function (e, t, n) {
            return {
              selectedReactions: t
                .filter(function (t) {
                  var a = e[t] && e[t].data
                  return a && a.sender_id === n
                })
                .map(function (t) {
                  return e[t].data.reaction_key
                }),
            }
          },
        ),
        je = {
          createReaction: Pe.d,
          createLocalApiErrorHandler: Object(Re.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: De.d,
          removeReaction: Pe.k,
        },
        Ne = Object(ve.f)(Be, je),
        Ue = n('RhWx'),
        We = n.n(Ue),
        He = n('33Kz'),
        Ve = n('wTX1'),
        qe = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            l = e.focusable,
            o = e.onPress,
            s = e.style,
            c = f.a.useContext(C.a).featureSwitches,
            d = Object(He.b)(r, c),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = w.a.generate({ backgroundColor: x.a.theme.colors.gray50, color: x.a.theme.colors.gray700 })
          return f.a.createElement(
            A.a,
            {
              accessibilityLabel: u,
              focusable: l,
              interactiveStyles: i ? p : null,
              onPress: o,
              style: [ze.container].concat(We()(s || [])),
            },
            f.a.createElement(V.b, { size: a, style: ze.unsetLineHeight }, d),
            n
              ? f.a.createElement(Ve.a, { color: 'gray700', containerStyle: ze.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        ze = x.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        Ge = n('pHkl'),
        Ye = n('Irs7'),
        Qe = Ie.a.ca7a2214,
        Xe = Ie.a.fc0e94b7,
        Je = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_handleReactionScribing', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.entry,
                  l = a.isGroupDM,
                  o = a.participantsCount,
                  s = n ? 'delete_reaction' : 'create_reaction',
                  c = Object(_.c)(i)
                r.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: s,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: o,
                    conversation_type: l ? Ge.j.GROUP : Ge.j.ONE_TO_ONE,
                    message_type: c,
                    reaction_emotion: t,
                  },
                })
              }),
              g()(s()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.createLocalApiErrorHandler,
                    i = a.createReaction,
                    l = a.dismiss,
                    o = a.entry,
                    s = a.fetchUpdatesIfNeeded,
                    c = a.perspective,
                    d = a.removeReaction,
                    u = { reaction_key: t, conversation_id: o.conversation_id, dm_id: o.id, perspective: c }
                  ;(n ? d : i)(u)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return s()
                    })
                    .catch(r()),
                    l()
                }
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.selectedReactions,
                    n = Object(He.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return f.a.createElement(qe, {
                        accessibilityLabelFormatter: a ? Qe : Xe,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, a),
                        style: [$e.reaction, a && $e.selectedReaction],
                      })
                    })
                  return f.a.createElement(H.a, { style: $e.reactions }, n)
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(Je, 'contextType', C.a)
      var Ze = Object(Ye.a)(Ne(Je)),
        $e = x.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        et = n('OiMc'),
        tt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.isGroupDM,
                  i = n.participantsCount,
                  l = n.perspective
                return f.a.createElement(Ze, {
                  dismiss: t,
                  entry: a,
                  isGroupDM: r,
                  participantsCount: i,
                  perspective: l,
                })
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
                    t = e.children,
                    n = e.onDismiss
                  return f.a.createElement(
                    et.a,
                    {
                      enableEnterKeyToggle: !0,
                      onDismiss: n,
                      preferredVerticalOrientation: 'up',
                      renderContent: this._renderDMReactionPickerContent,
                      withArrow: !0,
                      withFixedPosition: this.context.isDrawer,
                    },
                    t,
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(tt, 'contextType', K.a)
      var nt = n('TnY3'),
        at = n('mjJ+'),
        rt = n('Q0VY'),
        it = n('eb3s'),
        lt = n('/yvb'),
        ot = n('ZToW'),
        st = n('CaKu'),
        ct = n('i4Oy'),
        dt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        ut = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            a = $()(n, 2),
            r = a[0],
            i = a[1]
          return !((0 === r || 1 === r) && e.length === i)
        },
        pt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var a = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (a) return ut(t.text, a.indices)
          if (n.card) {
            var r,
              i = ((null === (r = t.entities) || void 0 === r ? void 0 : r.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return ut(t.text, i && i.indices)
          }
          return !0
        },
        mt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        gt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        ht = function (e, t, n) {
          var a = 1.25 * x.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        vt = n('hiGS'),
        ft = n('zIWA'),
        yt = n('Lsrn'),
        _t = n('k/Ka'),
        bt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(_t.a)(
            'svg',
            te()(
              te()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [yt.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              f.a.createElement('path', {
                d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
              }),
            ),
          )
        }
      bt.metadata = { width: 24, height: 24 }
      var kt = bt,
        St = n('DlVf'),
        Et = n('ACHU'),
        Ct = n('UgB4'),
        Tt = n('fz3c'),
        Rt = Ie.a.ba60339a,
        wt = Ie.a.j4bfee22,
        xt = Ie.a.d96cf7cd,
        Ft = Ie.a.faddd3a2,
        At = Ie.a.eb497e08,
        It = Ie.a.b170974a,
        Ot = Ie.a.i202bd22,
        Lt = Ie.a.f2e5491a,
        Mt = Ie.a.f88553c8,
        Dt = Ie.a.ifea3114,
        Pt = Ie.a.cac14829,
        Kt = Ie.a.h63a5c3b,
        Bt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              g()(s()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  a = t.entry,
                  r = t.featureSwitches,
                  l = t.isSent,
                  o = Tt.a.DMMessage,
                  s = n.contextualScribeNamespace,
                  c = [{ text: Rt, Icon: vt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!l)
                  if (Object(Tt.g)(r, o)) {
                    var d,
                      u = Object(Tt.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: o,
                        reportedConversationId: a.conversation_id,
                        reportedMessageId: a.id,
                        reportedUser: null === (d = a.message_data) || void 0 === d ? void 0 : d.sender_id,
                        scribeNamespace: n.contextualScribeNamespace,
                      })
                    c.push({
                      text: Ot,
                      Icon: ft.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(u) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    c.push({
                      text: Ot,
                      Icon: ft.a,
                      link: {
                        pathname: '/i/report/'.concat(o, '/').concat(a.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: a.conversation_id,
                          scribeNamespace: s,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    })
                return (
                  st.a.isAvailable() && c.push({ text: Lt, Icon: kt, onClick: i._handleCopyMessageText }),
                  f.a.createElement(at.a, {
                    isFixed: i.context.isDrawer,
                    items: c,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              g()(s()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (st.a.setString(n), t({ text: Mt })), e && e()
              }),
              g()(s()(i), '_handleForwardButton', function () {
                var e,
                  t,
                  n = i.props,
                  a = n.entry,
                  r = n.history
                if (
                  null != a &&
                  null !== (e = a.message_data) &&
                  void 0 !== e &&
                  null !== (t = e.attachment) &&
                  void 0 !== t &&
                  t.tweet
                ) {
                  var l = a.message_data.attachment.tweet
                  r.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: te()(te()({}, l), {}, { id_str: l.status }) },
                  })
                }
              }),
              g()(s()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              g()(s()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  a = e.deleteEntry,
                  r = e.entry,
                  l = e.inboxType,
                  o = e.isGroupDM,
                  s = e.participantsCount,
                  c = Object(_.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: o ? Ge.j.GROUP : Ge.j.ONE_TO_ONE,
                    conversation_participant_count: s,
                    message_type: c,
                    inbox_type: Object(_.i)(l),
                  },
                }),
                  a({ conversationId: r.conversation_id, id: r.id }).catch(n(Me))
              }),
              g()(s()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              g()(s()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              g()(s()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(_.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              g()(s()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              g()(s()(i), '_replaceMessageUrls', function () {
                var e = i.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  rt.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = mt(i.props.entry)),
              (i._isNarrow = ct.a.get('screen').width < x.a.theme.breakpoints.xSmall),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.entry,
                    r = n.isSent,
                    i = n.shouldShowReactionButton,
                    l = n.style,
                    o = n.withVDLRefresh,
                    s = this._areActionsVisible()
                  return f.a.createElement(
                    H.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        Nt.messageActions,
                        r ? Nt.messageActionsLeft : Nt.messageActionsRight,
                        s ? Nt.visible : Nt.invisible,
                        o && Nt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? Nt.messageActionsMediaNarrow : Nt.messageActionsNarrow),
                        l,
                      ],
                    },
                    (null == a ||
                    null === (e = a.message_data) ||
                    void 0 === e ||
                    null === (t = e.attachment) ||
                    void 0 === t
                      ? void 0
                      : t.tweet) &&
                      o &&
                      this._renderForwardButton(),
                    i && this._renderReactionButton(),
                    this._renderOverflowButton(),
                    this._renderDeleteConfirmation(),
                  )
                },
              },
              {
                key: '_renderDeleteConfirmation',
                value: function () {
                  return this.state.showDeleteConfirmation
                    ? f.a.createElement(it.a, {
                        confirmButtonLabel: xt,
                        confirmButtonType: 'destructiveFilled',
                        headline: wt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: Ft,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return f.a.createElement(lt.a, {
                    accessibilityLabel: Dt,
                    hoverLabel: { label: Dt },
                    icon: Ut,
                    onPress: this._handleForwardButton,
                    size: this._isNarrow ? 'small' : 'medium',
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderReactionButton',
                value: function () {
                  var e = this.props,
                    t = e.entry,
                    n = e.isGroupDM,
                    a = e.participantsCount,
                    r = e.perspective,
                    i = e.withVDLRefresh,
                    l = this.state.actionsAreActive,
                    o = f.a.createElement(St.a, { style: i ? Nt.vdlActionIcon : Nt.actionIcon })
                  return f.a.createElement(
                    tt,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    f.a.createElement(lt.a, {
                      accessibilityExpanded: !!l,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: It,
                      hoverLabel: { label: Pt },
                      icon: o,
                      onPress: this._handlePressReactionPickerButton,
                      size: this._isNarrow ? 'small' : 'medium',
                      type: 'brandText',
                    }),
                  )
                },
              },
              {
                key: '_renderOverflowButton',
                value: function () {
                  var e = this.props.withVDLRefresh,
                    t = f.a.createElement(Et.a, { style: e ? Nt.vdlActionIcon : Nt.actionIcon })
                  return f.a.createElement(lt.a, {
                    accessibilityLabel: At,
                    hoverLabel: { label: Kt },
                    icon: t,
                    onPress: this._handleSetActionsActive,
                    renderMenu: this._renderOverflowMenu,
                    size: this._isNarrow ? 'small' : 'medium',
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_areActionsVisible',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.containerIsActive,
                    a = t.containerIsFocused,
                    r = t.containerIsHovered,
                    i = t.isDraft,
                    l = this.state.actionsAreActive,
                    o = ((e = this.props.entry), !pt(e) && mt(e) && !ot.a.isEnabled)
                  return !i && (o || (n && !ot.a.isEnabled) || a || r || l)
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(Bt, 'contextType', K.a)
      var jt = Object(nt.a)(we(Bt)),
        Nt = x.a.create(function (e) {
          return {
            invisible: { opacity: 0 },
            messageActions: { alignSelf: 'flex-end', flexDirection: 'row' },
            messageActionsMediaNarrow: { flexDirection: 'column' },
            messageActionsNarrow: { flexShrink: 1, flexWrap: 'wrap', minWidth: e.spaces.space32 },
            messageActionsLeft: { justifyContent: 'flex-end', paddingRight: e.spaces.space4 },
            messageActionsRight: { justifyContent: 'flex-start', paddingLeft: e.spaces.space4 },
            vdlMessageActions: { alignSelf: 'center' },
            actionIcon: { color: e.colors.gray700 },
            vdlActionIcon: { color: e.colors.gray600 },
            visible: { opacity: 1 },
          }
        }),
        Ut = f.a.createElement(Ct.a, { style: Nt.vdlActionIcon }),
        Wt = n('97Jx'),
        Ht = n.n(Wt),
        Vt = (n('6U7i'), n('CDB5')),
        qt = Object(Te.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Re.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: E.removeEntry,
              sendMessage: Vt.m,
            }
          })
          .withAnalytics(),
        zt = '87.5%',
        Gt = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        Yt = n('RqPI'),
        Qt = [],
        Xt = function (e, t) {
          return Object(Pe.p)(e, t.entryId) || Qt
        },
        Jt = function (e) {
          return Object(Pe.l)(e).entries
        },
        Zt = {
          createLocalApiErrorHandler: Object(Re.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        $t = Object(ve.e)(function () {
          return Object(he.createSelector)(Jt, Xt, Yt.r, Gt.d, function (e, t, n, a) {
            var r,
              i = Object(He.a)(a, { includeInactive: !0 }),
              l = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, a) {
                var o = e[a] && e[a].data
                if (!o) return t
                if (!i.includes(o.reaction_key)) return t
                var s = (t.get(o.reaction_key) || 0) + 1
                return (
                  t.set(o.reaction_key, s),
                  (null == o ? void 0 : o.sender_id) === n && (r = o.reaction_key),
                  (l += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: r,
              totalReactionCount: l,
            }
          })
        }, Zt),
        en = (n('vfdX'), n('Ee2X'), []),
        tn = function (e, t) {
          return t.entryId
        },
        nn = function (e) {
          return Object(Pe.l)(e).entries
        },
        an = function (e, t) {
          return Object(Pe.p)(e, tn(0, t)) || en
        },
        rn = function (e, t) {
          return _e.e.selectMany(
            e,
            (function (e, t) {
              return Object(Pe.q)(e, tn(0, t))
            })(e, t),
          )
        },
        ln = {
          removeReaction: Pe.k,
          fetchUpdatesIfNeeded: De.d,
          createLocalApiErrorHandler: Object(Re.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        on = Object(ve.e)(function () {
          return Object(he.createSelector)(nn, an, Yt.r, rn, Gt.d, function (e, t, n, a, r) {
            var i = Object(He.a)(r, { includeInactive: !0 }),
              l = []
            t.forEach(function (t) {
              var r = e[t] && e[t].data
              if (r && i.includes(r.reaction_key)) {
                var o = a.find(function (e) {
                    return e && e.id_str === r.sender_id
                  }),
                  s = o && {
                    avatarUri: o.profile_image_url_https,
                    userId: o.id_str,
                    reactionKey: r.reaction_key,
                    isLoggedInUser: o.id_str === n,
                    screenName: o.screen_name,
                    name: o.name,
                    isProtected: o.protected,
                    isVerified: o.verified,
                    time: r.time,
                  }
                s && l.push(s)
              }
            }),
              l.sort(function (e, t) {
                return t.time - e.time
              })
            var o = l.findIndex(function (e) {
              return e.userId === n
            })
            return o > -1 && l.push.apply(l, We()(l.splice(0, o))), { loggedInUserId: n, usersWithReactions: l }
          })
        }, ln),
        sn = n('TIdA'),
        cn = n('htQn'),
        dn = Ie.a.gf5e9ea6,
        un = Ie.a.a2d48778,
        pn = sn.a.createLayoutCache()
      var mn = x.a.create(function (e) {
          return {
            bodyColumn: { flexShrink: 1, flexGrow: 1, justifyContent: 'center', marginHorizontal: e.spaces.space4 },
            body: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            bottomBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            column: { alignItems: 'center', justifyContent: 'center', marginRight: e.spaces.space4 },
            reactionColumn: {
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: e.componentDimensions.gutterHorizontal,
            },
            root: {
              flexDirection: 'row',
              minHeight: '56px',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
          }
        }),
        gn = function (e) {
          var t = f.a.useContext(C.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            l = r.avatarUri,
            o = r.isProtected,
            s = r.isVerified,
            c = r.name,
            d = r.screenName,
            u = f.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = f.a.createElement(q.default, { imageLayoutCache: pn, screenName: d, size: 'xxLarge', uri: l }),
            m = f.a.createElement(qe, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            g = f.a.createElement(I.a, {
              badgeContext: 'content',
              isProtected: o,
              isVerified: s,
              name: c,
              screenName: d,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return f.a.createElement(
            cn.a,
            { link: { pathname: '/'.concat(d), anchorless: !0 }, style: [mn.root, i && mn.bottomBorder] },
            f.a.createElement(H.a, { style: mn.reactionColumn }, m),
            f.a.createElement(H.a, { style: mn.column }, p),
            f.a.createElement(H.a, { style: mn.bodyColumn }, f.a.createElement(H.a, { style: mn.body }, g)),
            a
              ? f.a.createElement(
                  H.a,
                  { style: mn.column },
                  f.a.createElement(
                    lt.a,
                    {
                      accessibilityLabel: un({ emoji: Object(He.b)(r.reactionKey, t) }),
                      onClick: u,
                      size: 'small',
                      type: 'brandText',
                    },
                    dn,
                  ),
                )
              : null,
          )
        },
        hn = n('xKuM'),
        vn = n('efqG'),
        fn = Ie.a.b772cd65,
        yn = Ie.a.c0098d49,
        _n = Ie.a.j85999eb,
        bn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_renderContent', function (t, n) {
                return f.a.createElement(
                  H.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              g()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? f.a.createElement(hn.a, { title: yn })
                  : f.a.createElement(V.b, { visuallyHidden: !0 }, yn)
              }),
              g()(s()(e), '_renderUsers', function (t, n) {
                return f.a.createElement(
                  H.a,
                  { accessibilityLabel: _n, style: [kn.container, 'sheet' === n ? kn.sheet : kn.popover] },
                  e._renderUserCells(t),
                )
              }),
              g()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  f.a.createElement(
                    lt.a,
                    { key: 'button_done', onPress: e, style: kn.cancelButton, type: 'primaryOutlined' },
                    fn,
                  )
                )
              }),
              g()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return f.a.createElement(gn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: a !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              g()(s()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.conversationId,
                    i = a.createLocalApiErrorHandler,
                    l = a.entryId,
                    o = a.fetchUpdatesIfNeeded,
                    s = a.loggedInUserId,
                    c = a.removeReaction,
                    d = { reaction_key: t, conversation_id: r, dm_id: l, perspective: s }
                  n(), c(d).then(e._handleScribeRemoveReaction(t)).then(o).catch(i())
                }
              }),
              g()(s()(e), '_handleScribeRemoveReaction', function (t) {
                return function () {
                  e.props.analytics.scribe({
                    page: 'app',
                    section: 'twitter_service',
                    component: 'direct_messages',
                    element: 'delete_reaction',
                    action: 'success',
                    data: { reaction_emotion: t },
                  })
                }
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.children
                  return f.a.createElement(
                    vn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      g()(bn, 'contextType', K.a)
      var kn = x.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Sn = Object(nt.a)(Object(Ye.a)(on(bn))),
        En = Ie.a.h95f9e76,
        Cn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              g()(s()(a), '_handleScribeDMReactionSummary', function () {
                a.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              g()(s()(a), '_onSetReactionsNode', function (e) {
                a._measureWidths(e || void 0)
              }),
              g()(s()(a), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = a.props,
                  r = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  l = a.state.emojiSize || 'headline1',
                  o = r.size - 1
                return Array.from(r, function (e, n) {
                  var a = $()(e, 2),
                    r = a[0],
                    s = a[1]
                  return f.a.createElement(qe, {
                    count: s,
                    emojiSize: l,
                    emotion: r,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: r,
                    style: [
                      n === o && Tn.rightPadding,
                      Tn.elementPadding,
                      i === r ? Tn.selfSelect : null,
                      t && Tn.isHoveredDMReaction,
                    ],
                  })
                })
              }),
              (a.state = { emojiSize: void 0 }),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.entryId,
                    a = e.isEndOfDM,
                    r = e.isSent,
                    i = e.totalReactionCount,
                    l = this.state.emojiSize
                  if (0 === i) return null
                  var o = w.a.generate({ backgroundColor: x.a.theme.colors.gray50, color: x.a.theme.colors.gray700 }),
                    s = En({ reactionCount: i })
                  return f.a.createElement(
                    H.a,
                    {
                      style: [
                        Tn.container,
                        a ? Tn.marginShort : Tn.marginLong,
                        r ? Tn.alignRight : Tn.alignLeft,
                        l ? Tn.visible : Tn.invisible,
                      ],
                    },
                    f.a.createElement(
                      Sn,
                      { conversationId: t, entryId: n },
                      f.a.createElement(
                        A.a,
                        {
                          accessibilityLabel: s,
                          focusable: !0,
                          interactiveStyles: o,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: Tn.content,
                        },
                        this._renderReactions,
                      ),
                    ),
                  )
                },
              },
              {
                key: '_measureWidths',
                value: function (e) {
                  var t = e && e.parentElement,
                    n = { emojiSize: 'headline1' }
                  if (t) {
                    var a = t.getBoundingClientRect().width,
                      r = (e ? e.getBoundingClientRect() : {}).width
                    ;(void 0 === r ? 0 : r) > a && (n.emojiSize = 'subtext2')
                  }
                  this.setState(te()({}, n))
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent),
        Tn = x.a.create(function (e) {
          return {
            container: { boxSizing: 'border-box' },
            content: { borderRadius: e.borderRadii.infinite, display: 'flex', flexDirection: 'row' },
            rightPadding: { paddingRight: e.spaces.space2 },
            elementPadding: {
              borderColor: e.colors.transparent,
              borderWidth: e.borderWidths.small,
              paddingBottom: e.spaces.space2,
              paddingTop: e.spaces.space2,
              paddingLeft: 'calc('.concat(e.spaces.space2, ' * 2)'),
            },
            selfSelect: { borderColor: x.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        Rn = Object(Ye.a)($t(Cn)),
        wn = n('Xrkv'),
        xn = Ie.a.icd0bf34,
        Fn = Ie.a.e8bd8fec,
        An = Ie.a.b2d32fad,
        In = Ie.a.a763d33e,
        On = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              g()(s()(a), '_handlePress', function (e) {
                e.stopPropagation(), a.setState({ showFullList: !0 })
              }),
              (a.state = { showFullList: !1 }),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    a = e.namesToDisplay
                  return f.a.createElement(
                    H.a,
                    { style: Ln.root },
                    f.a.createElement(
                      V.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: Ln.seenLabel },
                      this._renderSeenLabel(),
                    ),
                    !n && t && a.length ? this._renderNameList() : null,
                  )
                },
              },
              {
                key: '_renderSeenLabel',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    a = e.namesToDisplay
                  return n ? (t ? An : xn) : a.length ? In({ count: a.length }) : Fn
                },
              },
              {
                key: '_renderNameList',
                value: function () {
                  var e = this,
                    t = this.props.namesToDisplay,
                    n = !this.state.showFullList && t.length > 10,
                    a = t.length - 10,
                    r = function (t) {
                      var n = t.namesList,
                        a = t.othersCount
                      return f.a.createElement(
                        Ie.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        f.a.createElement(V.b, null, n),
                        f.a.createElement(
                          V.b,
                          { color: 'link', onPress: e._handlePress },
                          Ie.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(wn.a)(t, n)
                  return f.a.createElement(
                    V.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Ln.namesList },
                    n ? f.a.createElement(r, { namesList: i, othersCount: a }) : f.a.createElement(V.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent),
        Ln = x.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Mn = On,
        Dn = n('t0aI'),
        Pn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user,
            r = Kn({ entryId: t, participants: n, user: a })
          return { namesToDisplay: r, isSeenByEveryone: r.length === n.length - 1 }
        },
        Kn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user
          return n.reduce(function (e, n) {
            var r = n.join_conversation_event_id,
              i = n.last_read_event_id,
              l = n.user.name,
              o = n.user_id !== a.id_str,
              s = i && 1 !== Object(Dn.a)(t, i),
              c = !r || 1 !== Object(Dn.a)(r, t)
            return o && s && c && e.push(l), e
          }, [])
        },
        Bn = n('IMYl'),
        jn = n('21zW'),
        Nn = n('gmpV'),
        Un = Ie.a.fad48ee9,
        Wn = Ie.a.ba60339a,
        Hn = Ie.a.d338f53e,
        Vn = Ie.a.ae7d7a24,
        qn = Ie.a.d725a288,
        zn = Ie.a.bbe74f3f,
        Gn = Ie.a.h0e4cdf4,
        Yn = Ie.a.bfbc051c,
        Qn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  a = t.entryId
                ;(0, t.removeEntry)(n, null, { id: a })
              }),
              g()(s()(e), '_handleTryAgain', function () {
                var t = e.props,
                  n = t.conversationId,
                  a = t.entryText,
                  r = t.localMediaId
                ;(0, t.sendMessage)({
                  tweetAttachment: void 0,
                  senderId: t.user.id_str,
                  conversationId: n,
                  text: a,
                  localMediaId: r,
                }),
                  e._handleRemove()
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
                    t = e.isSent,
                    n = e.onPress,
                    a = this._renderSending(),
                    r = this._renderError(),
                    i = this._renderTimestamp(),
                    l = this._renderReadReceipt(),
                    o = this._renderSentCheckmark(),
                    s = this._renderReactions(),
                    c = i || l || o,
                    d = a || r || s || c,
                    u =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    d &&
                    f.a.createElement(
                      H.a,
                      { style: [Xn.root, u && Xn.vdlRootMargin, t && Xn.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? f.a.createElement(
                            A.a,
                            { interactiveStyles: null, onPress: n, style: t && Xn.sentContainer },
                            f.a.createElement(H.a, { style: t && Xn.groupedItems }, i, o),
                            l,
                          )
                        : null,
                    )
                  )
                },
              },
              {
                key: '_renderError',
                value: function () {
                  return (
                    this.props.isError &&
                    f.a.createElement(
                      H.a,
                      null,
                      f.a.createElement(V.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Vn),
                      f.a.createElement(
                        H.a,
                        { style: Xn.groupedItems },
                        f.a.createElement(
                          V.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Wn,
                        ),
                        f.a.createElement(jn.a, null),
                        f.a.createElement(
                          V.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Hn,
                        ),
                      ),
                    )
                  )
                },
              },
              {
                key: '_renderReactions',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.entryId,
                    a = e.isLastRapidFire,
                    r = e.isRapidFire,
                    i = e.isSent,
                    l = e.withUserAvatar,
                    o = !r || a
                  return t
                    ? f.a.createElement(
                        H.a,
                        { style: l && Xn.footerPadderWithAvatar },
                        f.a.createElement(Rn, { conversationId: t, entryId: n, isEndOfDM: o, isSent: i }),
                      )
                    : null
                },
              },
              {
                key: '_renderReadReceipt',
                value: function () {
                  var e = this.props,
                    t = e.entryId,
                    n = e.isActive,
                    a = e.isDraft,
                    r = e.isError,
                    i = e.isGroupDM,
                    l = e.isSent,
                    o = e.participants,
                    s = e.user
                  return n && l && !a && !r
                    ? f.a.createElement(Mn, Ht()({ isGroupDM: i }, Pn({ entryId: t, participants: o, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && f.a.createElement(V.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Un)
                },
              },
              {
                key: '_renderSentCheckmark',
                value: function () {
                  var e = this.props,
                    t = e.entryId,
                    n = e.isDraft,
                    a = e.isError,
                    r = e.isLastRapidFire,
                    i = e.isRapidFire,
                    l = e.isSent,
                    o = e.participants,
                    s = e.user,
                    c = Pn({ entryId: t, participants: o, user: s }).isSeenByEveryone
                  return !l || n || a || (i && !r)
                    ? null
                    : f.a.createElement(
                        V.b,
                        { color: c ? 'primary' : 'gray700', style: Xn.checkmarkContainer },
                        f.a.createElement(Bn.a, { style: Xn.checkmark }),
                      )
                },
              },
              {
                key: '_renderTimestamp',
                value: function () {
                  var e = this.props,
                    t = e.entryTime,
                    n = e.isDraft,
                    a = e.isError,
                    r = e.isGroupDM,
                    i = e.isLastRapidFire,
                    l = e.isRapidFire,
                    o = e.isSent,
                    s = e.user.name,
                    c = e.withUserAvatar
                  if (n || a || (l && !i)) return null
                  var d,
                    u = new Date(Number(t))
                  d = Object(Nn.c)(u) ? qn(u) : Object(Nn.d)(u) ? zn({ time: qn(u) }) : Object(Nn.e)(u) ? Gn(u) : Yn(u)
                  var p = r && !o,
                    m = o ? 'right' : 'left'
                  return f.a.createElement(
                    H.a,
                    { style: [c && Xn.footerPadderWithAvatar, o && Xn.timestamp] },
                    f.a.createElement(
                      V.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: o || !ot.a.isEnabled },
                      p &&
                        f.a.createElement(
                          Ie.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          f.a.createElement(V.b, null, s),
                        ),
                      p && ' ',
                      d,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      g()(Qn, 'contextType', C.a)
      var Xn = x.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: zt },
            vdlRootMargin: { marginTop: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space2, ')') },
            sentMessage: { alignSelf: 'flex-end', justifyContent: 'flex-end' },
            sentContainer: { flexDirection: 'column' },
            groupedItems: { justifyContent: 'flex-end', flexDirection: 'row' },
            timestamp: { cursor: 'pointer' },
            checkmark: { cursor: 'pointer', flexShrink: 0, height: '1rem', paddingLeft: e.spaces.space2 },
            checkmarkContainer: { lineHeight: '1' },
            footerPadderWithAvatar: {
              marginLeft: 'calc('.concat(e.spaces.space40, ' + ').concat(e.spaces.space12, ')'),
            },
          }
        }),
        Jn = qt(Qn),
        Zn = n('jtO7'),
        $n = x.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.gray50,
              borderStyle: 'solid',
              borderWidth: e.borderWidths.small,
              borderBottomWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              overflow: 'hidden',
            },
            isLast: { borderBottomWidth: e.borderWidths.small },
            insideTopRoundedSent: { borderTopLeftRadius: e.borderRadii.xLarge },
            insideTopRoundedReceived: { borderTopRightRadius: e.borderRadii.xLarge },
            outsideTopRoundedSent: { borderTopRightRadius: e.borderRadii.xLarge },
            outsideTopRoundedReceived: { borderTopLeftRadius: e.borderRadii.xLarge },
            sentLast: { borderBottomLeftRadius: e.borderRadii.xLarge },
            receivedLast: { borderBottomRightRadius: e.borderRadii.xLarge },
          }
        }),
        ea = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            a = e.isSent,
            r = e.label,
            i = e.onClick,
            l = e.outsideTopRounded,
            o = e.tcoUrl,
            s = [
              $n.root,
              n && $n.isLast,
              n && a && $n.sentLast,
              n && !a && $n.receivedLast,
              t && a && $n.insideTopRoundedSent,
              t && !a && $n.insideTopRoundedReceived,
              l && a && $n.outsideTopRoundedSent,
              l && !a && $n.outsideTopRoundedReceived,
            ]
          return f.a.createElement(
            H.a,
            { style: s },
            f.a.createElement(Zn.a, { align: 'center', color: 'primary', label: r, link: o, onClick: i }),
          )
        },
        ta = n('fs1G'),
        na = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.onImpression()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.callToActions,
                    n = e.isSent,
                    a = e.onCtaClick,
                    r = e.withSticker,
                    i = e.withUserText,
                    l = t.map(function (e, l) {
                      var o = 0 === l
                      return f.a.createElement(ea, {
                        insideTopRounded: o && (r || !i),
                        isLast: l === t.length - 1,
                        isSent: n,
                        key: l,
                        label: e.label,
                        onClick: a,
                        outsideTopRounded: o && r,
                        tcoUrl: e.tco_url,
                      })
                    })
                  return f.a.createElement(H.a, null, l)
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(na, 'defaultProps', { onCtaClick: ta.a, onImpression: ta.a })
      var aa = na,
        ra = (n('1IsZ'), n('vjRr')),
        ia = n('EGrD'),
        la = function (e, t) {
          return t.cardUrl
        },
        oa = Object(Te.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: ia.c, card: ra.a.createSingleHydratedSelector(la) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Re.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ia.a,
              loadAdFreeArticleDomainsFromPersistence: ia.b,
              popOutConversation: E.popOutConversation,
            }
          }),
        sa = x.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        ca = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            a = e.isVisible,
            r = void 0 === a || a,
            i = e.textContent
          return f.a.createElement(H.a, { style: [r ? sa.visible : sa.invisible, sa.root] }, n, t, i)
        },
        da = n('cTG8'),
        ua = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            a = void 0 !== n && n,
            r = e.isFailedDraft,
            i = e.isFirstRapidFire,
            l = void 0 !== i && i,
            o = e.isRapidFire,
            s = void 0 !== o && o,
            c = e.isSent,
            d = e.hasAssociatedAttachment,
            u = e.messageData,
            p = void 0 === u ? {} : u,
            m = e.rootStyle,
            g = e.tweetId,
            h = e.withCta,
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            _ = f.a.useContext(C.a).featureSwitches,
            b = _.isTrue('dm_vdl_enabled') && _.isTrue('dm_vdl_chat_p0_enabled'),
            k = [
              m,
              y && pa.messageTextContainer,
              y && c && pa.sent,
              y && !c && pa.received,
              r && pa.failedDraft,
              s && !l && !c && pa.rapidFireReceived,
              s && !l && c && pa.rapidFireSent,
              d && c && pa.hasAssociatedAttachmentSent,
              d && !c && pa.hasAssociatedAttachmentReceived,
              y && b && c && pa.vdlSent,
              y && a && c && pa.activeSent,
              y && b && a && c && pa.vdlActiveSent,
              y && a && !c && !ot.a.isEnabled && pa.activeReceived,
              h && pa.withCta,
            ],
            S = [pa.tweetText, y && pa.textAlignLeft, !y && c && pa.textAlignRight],
            E = x.a.theme.colors,
            T = E.gray0,
            R = E.magenta500,
            F = E.primary,
            I = E.text,
            O = E.white,
            L = w.a.generate({ color: c ? O : I, backgroundColor: r ? R : c ? F : T }),
            M = (p.text && p.text.length) || 0
          return f.a.createElement(
            A.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? L : null, style: k },
            f.a.createElement(da.a, {
              color: x.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, M],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && c) || x.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: g,
              size: y ? void 0 : 'title2',
              style: S,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        pa = x.a.create(function (e) {
          return {
            tweetText: { overflow: 'hidden', wordBreak: 'break-word' },
            messageTextContainer: {
              borderRadius: e.borderRadii.xLarge,
              boxSizing: 'border-box',
              maxWidth: '100%',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
            },
            textAlignLeft: { textAlign: 'left' },
            textAlignRight: { textAlign: 'right' },
            sent: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.primary,
              borderBottomRightRadius: e.borderRadii.none,
              borderColor: e.colors.primary,
            },
            received: {
              alignSelf: 'flex-start',
              backgroundColor: e.colors.dmReceivedBubbleBackground,
              borderBottomLeftRadius: e.borderRadii.none,
              borderColor: e.colors.gray200,
            },
            vdlSent: { backgroundColor: e.colors.blue600 },
            activeSent: { backgroundColor: e.colors.lightPrimary },
            activeReceived: { backgroundColor: e.colors.gray200 },
            vdlActiveSent: { backgroundColor: e.colors.blue700 },
            failedDraft: { backgroundColor: e.colors.magenta500 },
            rapidFireReceived: { borderTopLeftRadius: e.borderRadii.none },
            rapidFireSent: { borderTopRightRadius: e.borderRadii.none },
            withCta: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            hasAssociatedAttachmentSent: { borderTopRightRadius: e.borderRadii.none },
            hasAssociatedAttachmentReceived: { borderTopLeftRadius: e.borderRadii.none },
          }
        })
      ua.defaultProps = { withMediaLinks: !1 }
      var ma = ua,
        ga = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            a = e.isFailedDraft,
            r = e.isFirstRapidFire,
            i = void 0 !== r && r,
            l = e.isRapidFire,
            o = void 0 !== l && l,
            s = e.isSent,
            c = e.messageData,
            d = e.withCta,
            u = e.withMessageBubble
          return f.a.createElement(ma, {
            isActive: n,
            isFailedDraft: a,
            isFirstRapidFire: i,
            isRapidFire: o,
            isSent: s,
            messageData: c,
            withCta: d,
            withMediaLinks: !0,
            withMessageBubble: u,
          })
        },
        ha = n('LSr9'),
        va = n('aX4+'),
        fa = n('/Ikv'),
        ya = fa.a.CardNames,
        _a = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e, a
            r()(this, n)
            for (var i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o]
            return (
              (a = t.call.apply(t, [this].concat(l))),
              g()(s()(a), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              g()(
                s()(a),
                '_hasClaimsForAdFreeArticles',
                null === (e = a.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              g()(s()(a), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (a.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  a.setState(n)
                }
              }),
              g()(s()(a), '_handleOnClick', function (e) {
                var t = a.props,
                  n = t.card,
                  r = (n = void 0 === n ? {} : n).binding_values,
                  i = t.conversationId,
                  l = t.popOutConversation
                if ((i && l(i), a._hasClaimsForAdFreeArticles)) {
                  var o = a.props,
                    s = o.adFreeArticleDomains,
                    c = o.createLocalApiErrorHandler,
                    d = o.fetchAdFreeToken,
                    u = new ha.a(d, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: fa.a.getBindingValue(r, 'card_url'),
                      linkDomain: fa.a.getBindingValue(r, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    p = $()(u, 2),
                    m = p[0],
                    g = p[1]
                  m && g(e)
                }
              }),
              g()(s()(a), '_handleTextContentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (a.state.textContentWidth !== t) {
                  var n = { textContentWidth: t }
                  a.setState(n)
                }
              }),
              a
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasClaimsForAdFreeArticles && this.props.loadAdFreeArticleDomainsFromPersistence()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.card,
                    n = e.hasUserText,
                    a = e.isActive,
                    r = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    l = e.isRapidFire,
                    o = e.isSent,
                    s = e.messageData,
                    c = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    m = u.textContentWidth,
                    g = !!Object.values(ya).includes(null == t ? void 0 : t.name),
                    h = ht(n, p, m),
                    v = h.isAttachmentSquared ? 'both' : o ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    _ = t
                      ? f.a.createElement(
                          H.a,
                          { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                          f.a.createElement(va.a, {
                            card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                            cardContext: { tweetUserId: s.sender_id },
                            dmSentOrReceived: o ? 'sent' : 'received',
                            withBorderShadow: y,
                            withSquareBottomBorderRadius: v,
                          }),
                        )
                      : null,
                    b = n
                      ? f.a.createElement(
                          H.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: o ? ba.sentMessageWrapper : ba.receivedMessageWrapper,
                          },
                          f.a.createElement(ma, {
                            excludeCardUrl: null == t ? void 0 : t.url,
                            hasAssociatedAttachment: !0,
                            isActive: a,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: l,
                            isSent: o,
                            messageData: s,
                            rootStyle: h.isTextSquared ? (o ? ba.textSentSquared : ba.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return g
                    ? f.a.createElement(ca, { attachmentContent: _, isVisible: h.compositeRendered, textContent: b })
                    : f.a.createElement(ga, {
                        isActive: a,
                        isFailedDraft: r,
                        isFirstRapidFire: i,
                        isRapidFire: l,
                        isSent: o,
                        messageData: s,
                        withCta: c,
                        withMessageBubble: d,
                      })
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(_a, 'defaultProps', { hasUserText: !1 }), g()(_a, 'contextType', C.a)
      var ba = x.a.create(function (e) {
          return {
            attachmentReceivedSquared: { borderBottomRightRadius: e.borderRadii.none },
            attachmentSentSquared: { borderBottomLeftRadius: e.borderRadii.none },
            card: { marginBottom: e.spaces.space2 },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            received: { borderBottomLeftRadius: e.borderRadii.none },
            sent: { borderBottomRightRadius: e.borderRadii.none },
            textReceivedSquared: { borderTopRightRadius: e.borderRadii.none },
            textSentSquared: { borderTopLeftRadius: e.borderRadii.none },
          }
        }),
        ka = oa(_a),
        Sa = Ie.a.f720438f,
        Ea = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              g()(s()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  a = 'left'
                return t ? (a = 'both') : n && (a = 'right'), Ca[a]
              }),
              g()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              g()(s()(e), '_handleTextContentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.textContentWidth !== n && e.setState({ textContentWidth: n })
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
                    t = e.hasUserText,
                    n = e.isActive,
                    a = e.isFailedDraft,
                    r = e.isFirstRapidFire,
                    i = e.isRapidFire,
                    l = e.isSent,
                    o = e.messageData,
                    s = e.withCta,
                    c = e.withMessageBubble,
                    d = this.state,
                    u = d.attachmentWidth,
                    p = d.textContentWidth
                  if (!o || !o.attachment || !o.attachment.fleet) return null
                  var m = ht(t, u, p),
                    g = m.compositeRendered,
                    h = m.isAttachmentSquared,
                    v = m.isTextSquared,
                    y = [
                      Ta.tombstoneWrapper,
                      l ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                      this._getSquareBottomStyles(h),
                    ],
                    _ = f.a.createElement(
                      H.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      f.a.createElement(V.b, { color: 'gray700' }, Sa),
                    ),
                    b = t
                      ? f.a.createElement(
                          H.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              l ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                              !c && Ta.fleetReactionSpacing,
                            ],
                          },
                          f.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: a,
                            isFirstRapidFire: r,
                            isRapidFire: i,
                            isSent: l,
                            messageData: o,
                            rootStyle: v ? (l ? Ta.sentSquared : Ta.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return f.a.createElement(ca, { attachmentContent: _, isVisible: g, textContent: b })
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        Ca = x.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ta = x.a.create(function (e) {
          return {
            fleetReactionSpacing: { marginTop: e.spaces.space4 },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            receivedSquared: { borderTopRightRadius: e.borderRadii.none },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            sentSquared: { borderTopLeftRadius: e.borderRadii.none },
            tombstoneWrapper: {
              backgroundColor: e.colors.gray0,
              borderColor: e.colors.gray50,
              borderRadius: e.borderRadii.xLarge,
              boxSizing: 'border-box',
              flexDirection: 'row',
              borderWidth: e.borderWidths.small,
              paddingHorizontal: e.spaces.space16,
              paddingVertical: e.spaces.space12,
              overflow: 'auto',
            },
          }
        }),
        Ra = Ea,
        wa = (n('849X'), n('TJCb'), n('prG5')),
        xa = n('RCZO'),
        Fa = n('A91F'),
        Aa = Ie.a.b327c129,
        Ia = function (e) {
          e.stopPropagation()
        },
        Oa = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            a = t.ext_alt_text || Aa,
            r = t.media_url_https,
            i = t.original_info || {},
            l = i.height,
            o = i.width,
            s = Object(xa.b)(t).rgb,
            c = f.a.createElement(wa.a, {
              accessibilityLabel: a,
              aspectMode: Fa.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: o, height: l },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? f.a.createElement(A.a, { interactiveStyles: null, link: n, onPress: Ia }, c) : c
        },
        La = n('Modb'),
        Ma = n('lklz'),
        Da = n('XrEN'),
        Pa = n('ZvMt'),
        Ka = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && Da.a.extractVideoProps(Ma.b.forDm(n), t)
          return a
            ? f.a.createElement(
                La.a,
                Ht()({}, a, { aspectRatio: Pa.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Ba = Object(Te.a)().withAnalytics(),
        ja = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              g()(s()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width
                i.state.width !== t && i.setState({ width: t })
              }),
              g()(s()(i), '_getElement', function () {
                var e = i.props,
                  t = e.contentType,
                  n = e.isSensitive
                return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
              }),
              g()(s()(i), '_handleClick', function () {
                var e = i.props.analytics
                i.setState({ hide: !1 }), e.scribe({ element: i._getElement(), action: 'reveal' })
              }),
              (i.state = { hide: !0, width: 0 }),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.analytics.scribe({ element: this._getElement(), action: 'impression' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.ctaText,
                    a = e.description,
                    r = e.withSquareBottomBorderRadius,
                    i = this.state,
                    l = i.hide,
                    o = i.width < x.a.theme.breakpoints.micro
                  return l
                    ? f.a.createElement(
                        H.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ua.root,
                            o ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && Na[r],
                          ],
                        },
                        f.a.createElement(H.a, { style: Ua.description }, f.a.createElement(V.b, null, a)),
                        f.a.createElement(
                          H.a,
                          { style: [Ua.button, o ? Ua.breakButtonWrapper : void 0] },
                          f.a.createElement(
                            lt.a,
                            { onClick: this._handleClick, size: 'small', style: Ua.buttonElement, type: 'brandText' },
                            n,
                          ),
                        ),
                      )
                    : t
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      g()(ja, 'defaultProps', { isSensitive: !1 })
      var Na = x.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ua = x.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: x.a.theme.spaces.space4,
              marginLeft: 'calc(-1 * '.concat(e.spaces.space12, ')'),
            },
            button: { flexGrow: 1, alignItems: 'flex-start' },
            buttonElement: { paddingHorizontal: e.spaces.space12 },
            description: { flexGrow: 1, flexShrink: 1 },
            root: {
              backgroundColor: e.colors.gray0,
              borderColor: e.colors.gray50,
              borderRadius: e.borderRadii.xLarge,
              boxSizing: 'border-box',
              borderWidth: e.borderWidths.small,
              maxWidth: '100%',
              paddingLeft: e.spaces.space16,
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space16,
              paddingRight: e.spaces.space4,
              overflow: 'auto',
              display: 'flex',
            },
          }
        }),
        Wa = Object(Ye.a)(Ba(ja)),
        Ha = n('CoGJ'),
        Va = f.a.createElement(Ha.a, null),
        qa = Ie.a.d9de7b57,
        za = Ie.a.f2879f4d,
        Ga = Ie.a.b518221e,
        Ya = Ie.a.eeaa9f90,
        Qa = Ie.a.g2b43663,
        Xa = Ie.a.f277e949,
        Ja = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              g()(s()(e), '_renderAttachment', function () {
                var t,
                  n,
                  a = e.props,
                  r = a.entry,
                  i = a.hasUserText,
                  l = a.isFirstRapidFire,
                  o = a.isRapidFire,
                  s = a.isSent,
                  c = a.isTrusted,
                  d = a.messageData,
                  u = e.state,
                  p = u.attachmentWidth,
                  m = u.textContentWidth,
                  g = (d || {}).attachment,
                  h = r.is_draft,
                  v = ht(i, p, m),
                  y = [
                    Za.mediaAttachment,
                    s && Za.isSent,
                    !s && Za.received,
                    s && v.isAttachmentSquared && Za.equalComponentDimensionsSent,
                    !s && v.isAttachmentSquared && Za.equalComponentDimensionsReceived,
                    o && !l && s && Za.rapidFireSent,
                    o && !l && !s && Za.rapidFireReceived,
                  ],
                  b = null
                if (
                  (!h && r.conversation_id && (b = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), g)
                )
                  if (g.photo) (t = g.photo), (n = f.a.createElement(Oa, { media: t, mediaUrl: b }))
                  else if (g.animated_gif)
                    (t = g.animated_gif), (n = f.a.createElement(Ka, { media: t, messageId: r.id }))
                  else if (g.video) {
                    if (((t = g.video), Object(_.l)(g, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = f.a.createElement(Ka, { media: t, messageId: r.id })
                  }
                var k = v.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  S = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, k))
                return {
                  attachmentContent: f.a.createElement(H.a, { onLayout: e._handleAttachmentLayout, style: y }, S),
                  media: t,
                }
              }),
              g()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var a = { attachmentWidth: n }
                  e.setState(a)
                }
              }),
              g()(s()(e), '_handleTextContentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.textContentWidth !== n) {
                  var a = { textContentWidth: n }
                  e.setState(a)
                }
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
                    t = e.entry,
                    n = e.hasUserText,
                    a = e.isActive,
                    r = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    l = e.isRapidFire,
                    o = e.isSent,
                    s = e.messageData,
                    c = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    m = u.textContentWidth,
                    g = t.is_draft,
                    h = ht(n, p, m),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    _ = v.media,
                    b = n
                      ? f.a.createElement(
                          H.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: o ? Za.sentMessageWrapper : Za.receivedMessageWrapper,
                          },
                          f.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!l,
                            isSent: o,
                            messageData: g ? s : this._parseMessageData(s, _),
                            rootStyle: h.isTextSquared ? (o ? Za.sentSquared : Za.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return f.a.createElement(ca, { attachmentContent: y, isVisible: h.compositeRendered, textContent: b })
                },
              },
              {
                key: '_getMediaContentWithGuard',
                value: function (e, t, n, a) {
                  var r = this.props,
                    i = r.displaySensitiveMedia,
                    l = r.isDmNsfwMediaFilterEnabled
                  if (
                    e.possibly_sensitive &&
                    this.context.featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
                  ) {
                    if (l) {
                      var o = ('animated_gif' === e.type && Qa) || ('video' === e.type && Ya) || Ga
                      return f.a.createElement(
                        Wa,
                        {
                          contentType: e.type,
                          ctaText: o,
                          description: za,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: a,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return f.a.createElement(
                      Wa,
                      {
                        contentType: e.type,
                        ctaText: Xa,
                        description: Va,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: a,
                      },
                      n,
                    )
                  return t
                    ? n
                    : f.a.createElement(
                        Wa,
                        { contentType: e.type, ctaText: Xa, description: qa, withSquareBottomBorderRadius: a },
                        n,
                      )
                },
              },
              {
                key: '_parseMessageData',
                value: function (e, t) {
                  var n,
                    a =
                      null != e && null !== (n = e.entities) && void 0 !== n && n.urls && t
                        ? e.entities.urls.filter(function (e) {
                            return e.display_url !== t.display_url
                          })
                        : null
                  return e && a
                    ? te()(
                        te()({}, e),
                        {},
                        { entities: te()(te()({}, e.entities), {}, { urls: a, media: t ? [t] : [] }) },
                      )
                    : void 0
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(Ja, 'contextType', C.a), g()(Ja, 'defaultProps', { hasUserText: !1 })
      var Za = x.a.create(function (e) {
          return {
            equalComponentDimensionsSent: { borderBottomLeftRadius: e.borderRadii.none },
            equalComponentDimensionsReceived: { borderBottomRightRadius: e.borderRadii.none },
            invisible: { opacity: 0 },
            isSent: { borderBottomRightRadius: e.borderRadii.none },
            mediaAttachment: {
              borderRadius: e.borderRadii.xLarge,
              WebkitMaskImage:
                'url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)',
            },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            rapidFireReceived: { borderTopLeftRadius: e.borderRadii.none },
            rapidFireSent: { borderTopRightRadius: e.borderRadii.none },
            received: { borderBottomLeftRadius: e.borderRadii.none },
            receivedSquared: { borderTopRightRadius: e.borderRadii.none },
            sentSquared: { borderTopLeftRadius: e.borderRadii.none },
            visible: { opacity: 1 },
          }
        }),
        $a = Ja,
        er = Object(Te.a)().propsFromActions(function () {
          return { markSpamStatus: E.markSpamStatus }
        }),
        tr = Ie.a.fd07947f,
        nr = Ie.a.c7a92dc9,
        ar = Ie.a.f277e949,
        rr = Ie.a.fb3ccb55,
        ir = er(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                g()(s()(e), '_handlePress', function (t) {
                  return function () {
                    var n = e.props,
                      a = n.conversationId,
                      r = n.dmId
                    ;(0, n.markSpamStatus)({ conversationId: a, dmId: r, markSpam: t })
                  }
                }),
                e
              )
            }
            return (
              l()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.children
                    return f.a.createElement(
                      Wa,
                      { contentType: 'dm', ctaText: ar, description: rr },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return f.a.createElement(
                      H.a,
                      { style: lr.buttons },
                      f.a.createElement(
                        lt.a,
                        { onPress: this._handlePress(!1), style: lr.leftButton, type: 'brandOutlined' },
                        nr,
                      ),
                      f.a.createElement(lt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, tr),
                    )
                  },
                },
              ]),
              n
            )
          })(f.a.PureComponent),
        ),
        lr = x.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        or = n('U+bB'),
        sr = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        cr = x.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        dr = function (e) {
          var t = e.sticker
          return f.a.createElement(or.a, { accessibilityLabel: t.display_name, source: sr(t), style: cr.stickerItem })
        },
        ur = n('XOJV'),
        pr = function (e, t) {
          var n,
            a = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (a && a.tweet) return a.tweet.status
        },
        mr = Object(Te.a)()
          .propsFromState(function () {
            return { tweet: ur.a.createHydratedTweetSelector(pr) }
          })
          .propsFromActions(function () {
            return { popOutConversation: E.popOutConversation }
          }),
        gr = n('b5s6'),
        hr = f.a.createElement(V.b, { link: '/settings/safety' }),
        vr = function (e) {
          return f.a.createElement(
            Ie.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            f.a.cloneElement(hr, null, Ie.a.adcf07b5),
          )
        },
        fr = Ie.a.e4df0ad7,
        yr = Ie.a.f277e949,
        _r = Ie.a.b5b91d58,
        br = Ie.a.bb594d7b,
        kr = f.a.createElement(vr, null)
      var Sr = x.a.create(function (e) {
          return {
            received: { boxShadow: e.boxShadows.small },
            receivedAttachmentSquared: { borderTopRightRadius: e.borderRadii.none, boxShadow: e.boxShadows.small },
            sent: { boxShadow: e.boxShadows.small },
            sentAttachmentSquared: { borderTopRightRadius: e.borderRadii.none, boxShadow: e.boxShadows.small },
          }
        }),
        Er = x.a.create(function (e) {
          return {
            attachment: { marginBottom: 0 },
            receivedMessageWrapper: { alignSelf: 'flex-start' },
            sentMessageWrapper: { alignSelf: 'flex-end' },
            received: { borderBottomLeftRadius: e.borderRadii.none, borderColor: e.colors.gray200 },
            receivedAttachmentSquared: { borderBottomRightRadius: e.borderRadii.none },
            receivedSquared: { borderTopRightRadius: e.borderRadii.none },
            sent: { borderBottomRightRadius: e.borderRadii.none, borderColor: e.colors.primary },
            sentAttachmentSquared: { borderBottomLeftRadius: e.borderRadii.none },
            sentSquared: { borderTopLeftRadius: e.borderRadii.none },
          }
        }),
        Cr = {
          attachment: Er.attachment,
          receivedMessageWrapper: Er.receivedMessageWrapper,
          sentMessageWrapper: Er.sentMessageWrapper,
          received: Sr.received,
          receivedAttachmentSquared: Sr.receivedAttachmentSquared,
          receivedSquared: Er.receivedSquared,
          sent: Sr.sent,
          sentAttachmentSquared: Sr.sentAttachmentSquared,
          sentSquared: Er.sentSquared,
        },
        Tr = mr(function (e) {
          var t = f.a.useContext(C.a).featureSwitches,
            n = e.conversationId,
            a = e.displaySensitiveMedia,
            r = e.hasUserText,
            i = void 0 !== r && r,
            l = e.isActive,
            o = void 0 !== l && l,
            s = e.isDmNsfwMediaFilterEnabled,
            c = e.isFailedDraft,
            d = e.isFirstRapidFire,
            u = void 0 !== d && d,
            p = e.isRapidFire,
            m = void 0 !== p && p,
            g = e.isSent,
            h = e.isTrusted,
            v = e.isVdlEnabled,
            y = e.messageData,
            _ = e.popOutConversation,
            b = e.tweet,
            k = e.withCta,
            S = e.withMessageBubble,
            E = f.a.useState(void 0),
            T = $()(E, 2),
            R = T[0],
            w = T[1],
            x = f.a.useState(void 0),
            F = $()(x, 2),
            A = F[0],
            I = F[1],
            O = f.a.useMemo(
              function () {
                return function () {
                  n && _(n)
                }
              },
              [n, _],
            ),
            L = f.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  R !== t && w(t)
                }
              },
              [R],
            ),
            M = f.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  A !== t && I(t)
                }
              },
              [A],
            )
          if (!y || !y.attachment || !y.attachment.tweet) return null
          var D = y.attachment.tweet,
            P = g ? 'sent' : 'received',
            K = ht(i, R, A),
            B = v ? Cr : Er,
            j = f.a.createElement(gr.a, {
              onPress: O,
              style: [
                B[P],
                i && B.attachment,
                K.isAttachmentSquared ? (g ? B.sentAttachmentSquared : B.receivedAttachmentSquared) : void 0,
              ],
              tweetId: D.status,
            }),
            N = K.isAttachmentSquared ? 'both' : g ? 'right' : 'left',
            U = (function () {
              if (!b) return null
              if (g) return j
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return f.a.createElement(
                    Wa,
                    { contentType: 'photo', ctaText: br, description: _r, withSquareBottomBorderRadius: N },
                    j,
                  )
              } else if (!a && b.possibly_sensitive)
                return f.a.createElement(
                  Wa,
                  { contentType: 'photo', ctaText: yr, description: kr, withSquareBottomBorderRadius: N },
                  j,
                )
              return h
                ? j
                : f.a.createElement(
                    Wa,
                    { contentType: 'tweet', ctaText: yr, description: fr, withSquareBottomBorderRadius: N },
                    j,
                  )
            })(),
            W = f.a.createElement(H.a, { onLayout: L, style: B.attachment }, U),
            V = i
              ? f.a.createElement(
                  H.a,
                  { onLayout: M, style: g ? B.sentMessageWrapper : B.receivedMessageWrapper },
                  f.a.createElement(ma, {
                    hasAssociatedAttachment: !0,
                    isActive: o,
                    isFailedDraft: c,
                    isFirstRapidFire: u,
                    isRapidFire: m,
                    isSent: g,
                    messageData: y,
                    rootStyle: K.isTextSquared ? (g ? B.sentSquared : B.receivedSquared) : void 0,
                    tweetId: D.status,
                    withCta: k,
                    withMediaLinks: !0,
                    withMessageBubble: S,
                  }),
                )
              : null
          return f.a.createElement(ca, { attachmentContent: W, isVisible: K.compositeRendered, textContent: V })
        }),
        Rr = n('htvZ'),
        wr = n('MH+I'),
        xr = n('5Ixf'),
        Fr = n('AtEG')
      function Ar(e) {
        var t,
          n,
          a = f.a.useContext(Rr.a),
          r = e.isLowQuality,
          i = e.isSent,
          l = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var o = $()(a.activeVoiceMessage, 2),
          s = o[0],
          c = o[1],
          d = $()(a.playerApi, 1)[0],
          u = $()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = $()(s, 1)[0],
          g = e.messageId === m
        if (!p) return null
        var h = Or(u),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: v,
            isActive: g,
            isSent: i,
            playerApi: null,
            playerState: null,
            onImpression: function () {
              return p.impression({ isLowQuality: r, isTrusted: l })
            },
            onPlayRequest: function () {
              return c([e.messageId, e.media])
            },
            onPlay: function () {
              return p.play({ data: { duration_ms: v } })
            },
            onPause: function () {
              return p.pause()
            },
          }
        return (
          g &&
            h &&
            h.contentId === e.media.id_str &&
            ((y.playerApi = d),
            (y.playerState = u),
            null != h && h.durationMs && (y.durationMs = null == h ? void 0 : h.durationMs)),
          f.a.createElement(Ir, y)
        )
      }
      function Ir(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          l = Or(r),
          o = (null == l ? void 0 : l.currentTimeMs) || 0,
          s = (null == l ? void 0 : l.durationMs) || e.durationMs,
          c = Math.max(t ? s - o : s, 0)
        f.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          f.a.useEffect(
            function () {
              a && 0 === o && (a.play(), e.onPlay())
            },
            [a],
          )
        var d = x.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'text' },
          p = [
            Dr.voiceMessage,
            Pr({ isSent: n, squared: t }),
            n ? Dr.voiceMessageSent : Dr.voiceMessageReceived,
            le(x.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? xr.a : Fr.a
        return f.a.createElement(
          H.a,
          { style: [Dr.container, le(x.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          f.a.createElement(
            H.a,
            { style: p },
            f.a.createElement(H.a, { style: Dr.startSpacer }),
            f.a.createElement(lt.a, {
              accessibilityLabel: i ? Mr : Lr,
              icon: f.a.createElement(m, { style: d ? Dr.iconColorDark : Dr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            f.a.createElement(H.a, { style: Dr.durationSpacer }),
            f.a.createElement(
              H.a,
              { style: n ? Dr.durationOpacity : void 0 },
              f.a.createElement(
                wr.a,
                Ht()({ countdown: !0, timeMs: c }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Dr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            f.a.createElement(H.a, { style: Dr.endSpacer }),
          ),
        )
      }
      var Or = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Lr = Ie.a.c94b7d89,
        Mr = Ie.a.eb6f9582,
        Dr = x.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: re.a.getConstants().isRTL ? 'row-reverse' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            voiceMessageSent: { backgroundColor: e.colors.primary },
            voiceMessageReceived: { backgroundColor: e.colors.dmReceivedBubbleBackground },
            durationSpacer: { width: e.spaces.space4 },
            durationOpacity: { opacity: 0.75 },
            durationDark: { color: e.colors.whiteOnColor },
            iconColorDark: { color: e.colors.whiteOnColor },
            iconColorDefault: { color: e.colors.alwaysBaseGray1100 },
            startSpacer: { width: e.spaces.space4 },
            endSpacer: { width: e.spaces.space16 },
          }
        })
      function Pr(e) {
        var t = e.isSent,
          n = e.squared
        return [Kr.base, t ? Kr.sent : Kr.received, n ? (t ? Kr.sentSquared : Kr.receivedSquared) : void 0]
      }
      var Kr = x.a.create(function (e) {
          return {
            base: {
              borderRadius: e.borderRadii.xLarge,
              WebkitMaskImage:
                'url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)',
            },
            sent: { borderBottomRightRadius: e.borderRadii.none },
            sentSquared: { borderTopRightRadius: e.borderRadii.none },
            received: { borderBottomLeftRadius: e.borderRadii.none },
            receivedSquared: { borderTopLeftRadius: e.borderRadii.none },
          }
        }),
        Br = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.entry,
                    a = t.isSent,
                    r = t.onCtaClick,
                    i = t.onCtaImpression,
                    l = n.message_data,
                    o = l && l.attachment ? l.attachment : {},
                    s = n.marked_as_spam,
                    c = mt(n),
                    d = !!l && !!l.ctas,
                    u = pt(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (mt(e) && !gt(e)) return !1
                      if (!t.text) return !1
                      var n = Object(dt.parse)(t.text)
                      if (!n || 0 === n.length) return !1
                      var a = n
                        .sort(function (e, t) {
                          return t.indices[1] - e.indices[1]
                        })
                        .reduce(function (e, t) {
                          return ''.concat(e.slice(0, t.indices[0])).concat(e.slice(t.indices[1]))
                        }, t.text)
                        .trim()
                      return n.length <= 10 && 0 === a.length
                    })(n),
                    m = !(u && p),
                    g = gt(n)
                  e = o.sticker ? f.a.createElement(dr, { sticker: o.sticker }) : this._renderDMMessage(u, d, m)
                  var h = s ? f.a.createElement(ir, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = c && !g && !Object(_.l)(null == l ? void 0 : l.attachment, this.context.featureSwitches),
                    y = [
                      a ? jr.isSent : jr.isReceived,
                      d && jr.withCta,
                      v ? jr.mediaRoot : jr.flexShrink,
                      this.props.style,
                    ]
                  return f.a.createElement(
                    H.a,
                    { style: y },
                    h,
                    l && l.ctas
                      ? f.a.createElement(aa, {
                          callToActions: l.ctas,
                          isSent: a,
                          onCtaClick: r,
                          onImpression: i,
                          withSticker: !!o.sticker || p,
                          withUserText: u,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_renderDMMessage',
                value: function (e, t, n) {
                  var a = this.props,
                    r = a.displaySensitiveMedia,
                    i = a.entry,
                    l = a.isActive,
                    o = a.isDmNsfwMediaFilterEnabled,
                    s = a.isFirstRapidFire,
                    c = a.isLowQuality,
                    d = a.isRapidFire,
                    u = a.isSent,
                    p = a.isTrusted,
                    m = i.error,
                    g = i.message_data,
                    h = g && te()(te()({}, g), {}, { entities: (g && g.entities) || void 0, error: m }),
                    v = null == h ? void 0 : h.attachment,
                    y = {
                      isActive: l,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    },
                    b =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  if (h && v) {
                    if (v.tweet)
                      return f.a.createElement(
                        Tr,
                        Ht()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: o,
                            isTrusted: p,
                            isVdlEnabled: b,
                            messageData: h,
                          },
                          y,
                        ),
                      )
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(_.l)(v, this.context.featureSwitches)
                        ? f.a.createElement(Ar, {
                            isLowQuality: c,
                            isSent: !!u,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : f.a.createElement(
                            $a,
                            Ht()(
                              {
                                displaySensitiveMedia: r,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: o,
                                isTrusted: p,
                                messageData: h,
                              },
                              y,
                            ),
                          )
                    if (v.card)
                      return f.a.createElement(
                        ka,
                        Ht()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: h }, y),
                      )
                    if (v.fleet) return f.a.createElement(Ra, Ht()({ entry: i, hasUserText: e, messageData: h }, y))
                  }
                  return f.a.createElement(ga, Ht()({}, y, { messageData: h }))
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(Br, 'contextType', C.a)
      var jr = x.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Nr = Br,
        Ur = x.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Wr = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? f.a.createElement(q.default, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : f.a.createElement(H.a, { style: [Ur.avatar, q.default.getSizeStyle(a)] })
        },
        Hr = n('m3Bd'),
        Vr = n.n(Hr),
        qr = n('B3eJ'),
        zr = ['color', 'isActive', 'size']
      function Gr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Vr()(e, zr),
          i = f.a.useContext(Rr.a),
          l = f.a.useState(0.5),
          o = $()(l, 2),
          s = o[0],
          c = o[1],
          d = $()(i.playerState, 1)[0]
        f.a.useEffect(
          function () {
            n && d && d.isPlaying && c(Math.random())
          },
          [n, d],
        )
        var u = n && (null == d ? void 0 : d.isPlaying),
          p = a + 2 * Yr,
          m = [Qr.container, r.style, { width: a, height: a }]
        return f.a.createElement(
          H.a,
          { style: m },
          f.a.createElement(
            H.a,
            { style: [Qr.container, Qr.transitionOpacity, u ? Qr.show : Qr.hide] },
            ie.a.reducedMotionEnabled
              ? null
              : f.a.createElement(qr.a, { audioLevel: s, color: t, paused: !u, size: a }),
          ),
          f.a.createElement(H.a, {
            style: [Qr.border, { width: p, height: p }, Qr.transitionOpacity, n ? Qr.show : Qr.hide],
          }),
        )
      }
      var Yr = parseInt(x.a.theme.spaces.space2, 10),
        Qr = x.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Yr,
              left: -1 * Yr,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Xr = n('uArA'),
        Jr = 'messageEntry',
        Zr = { element: 'cta_dm' },
        $r = { viewType: 'message' },
        ei = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        ti = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), 'state', { shouldFadeHighlight: !1 }),
              g()(
                s()(e),
                '_handleClick',
                Object(Xr.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    a = n.error,
                    r = n.id,
                    i = n.is_draft,
                    l = t.isActive,
                    o = t.setActiveEntry
                  i || a || (o(l ? null : r), e._handleScribeMessageEntryClick())
                }),
              ),
              g()(s()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!ot.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(_.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              g()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(te()(te()({}, Zr), {}, { action: 'show' }))
              }),
              g()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(te()(te()({}, Zr), {}, { action: 'click' }))
              }),
              g()(s()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(_.l)(
                  null === (t = e.props.entry.message_data) || void 0 === t ? void 0 : t.attachment,
                  e.context.featureSwitches,
                )
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.isHighlightedMessageSearchEntry && this.setState({ shouldFadeHighlight: !0 })
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return (
                    !Object(W.a)(this.props, e) || !Object(W.a)(this.state.shouldFadeHighlight, t.shouldFadeHighlight)
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.isActive,
                    a = t.isGroupDM,
                    r = t.isHighlightedMessageSearchEntry,
                    i = t.isSent,
                    l = t.user,
                    o = this._getRapidFireProps(),
                    s = !o.isRapidFire || o.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    d = [
                      ai.root.base,
                      c && ai.root.vdlPadding,
                      s && ai.root.contentSpacing,
                      s && c && ai.root.vdlContentSpacing,
                      r && ai.root.highlightableEntry,
                      r && this.state.shouldFadeHighlight && ai.root.remove,
                    ],
                    u = this._isDMVoiceMessage(),
                    p = c ? a && !i : !i || u
                  if (!l) return null
                  var m = !ot.a.isEnabled || i
                  return f.a.createElement(
                    ge.a,
                    { behavioralEventContext: $r },
                    f.a.createElement(
                      H.a,
                      { style: d },
                      f.a.createElement(
                        A.a,
                        {
                          accessibilityExpanded: !(!m || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: m ? this._handleClick : void 0,
                          style: i ? ai.root.sent : ai.root.received,
                          testID: Jr,
                        },
                        function (t) {
                          var n = t.isFocused,
                            a = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: a,
                            rapidFireProps: o,
                            withVDLRefresh: c,
                            withUserAvatar: p,
                          })
                        },
                      ),
                      this._renderFooter(o, p),
                    ),
                  )
                },
              },
              {
                key: '_renderMessage',
                value: function (e) {
                  var t = e.isFocused,
                    n = e.isHovered,
                    a = e.rapidFireProps,
                    r = e.withUserAvatar,
                    i = e.withVDLRefresh,
                    l = this.props,
                    o = l.displaySensitiveMedia,
                    s = l.entry,
                    c = l.inboxType,
                    d = l.isActive,
                    u = l.isDmNsfwMediaFilterEnabled,
                    p = l.isGroupDM,
                    m = l.isLowQuality,
                    g = l.isReadOnly,
                    h = l.isSent,
                    v = l.isTrusted,
                    y = l.isVoiceMessageActive,
                    _ = l.isWide,
                    b = l.participants,
                    k = l.perspective,
                    S = l.scribeVoiceMessage,
                    E = l.setShouldFreezeUpdates,
                    C = a.isFirstRapidFire,
                    T = a.isRapidFire,
                    R = [
                      h ? ai.messageContainer.sent : ai.messageContainer.received,
                      _ ? ai.messageContainer.wide : ai.messageContainer.narrow,
                      h && _ && ai.messageContainer.sentWide,
                      !h && _ && ai.messageContainer.receivedWide,
                    ],
                    w = v && !g,
                    F = this._isDMVoiceMessage(),
                    A = (null == b ? void 0 : b.length) || 0
                  return f.a.createElement(
                    H.a,
                    { style: R },
                    s.error
                      ? null
                      : f.a.createElement(jt, {
                          containerIsActive: d,
                          containerIsFocused: t,
                          containerIsHovered: n,
                          entry: s,
                          featureSwitches: this.context.featureSwitches,
                          inboxType: c,
                          isDraft: !!s.is_draft,
                          isGroupDM: p,
                          isSent: h,
                          onReportMessage:
                            F && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: v })
                                }
                              : void 0,
                          participantsCount: A,
                          perspective: k,
                          setShouldFreezeUpdates: E,
                          shouldShowReactionButton: w,
                          style: F && le(x.a.theme.scale).actionsContainer({ isSent: h, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    f.a.createElement(Nr, {
                      displaySensitiveMedia: o,
                      entry: s,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: u,
                      isFirstRapidFire: C,
                      isLowQuality: m,
                      isRapidFire: T,
                      isSent: h,
                      isTrusted: v,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: F && le(x.a.theme.scale).messageContainer({ isSent: h, isVoiceMessageActive: y }),
                    }),
                    this._possiblyRenderUserAvatar(a, r),
                  )
                },
              },
              {
                key: '_renderFooter',
                value: function (e, t) {
                  var n,
                    a,
                    r = e.isLastRapidFire,
                    i = e.isRapidFire,
                    l = this.props,
                    o = l.entry,
                    s = l.isActive,
                    c = l.isGroupDM,
                    d = l.isSent,
                    u = l.participants,
                    p = l.user
                  return p
                    ? f.a.createElement(Jn, {
                        conversationId: o.conversation_id,
                        entryId: o.id,
                        entryText: null === (n = o.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: o.time,
                        isActive: s,
                        isDraft: !!o.is_draft,
                        isError: !!o.error,
                        isGroupDM: c,
                        isLastRapidFire: r,
                        isRapidFire: i,
                        isSent: d,
                        localMediaId: null === (a = o.message_data) || void 0 === a ? void 0 : a.localMediaId,
                        onPress: this._handleClick,
                        participants: u,
                        user: p,
                        withUserAvatar: t,
                      })
                    : null
                },
              },
              {
                key: '_possiblyRenderUserAvatar',
                value: function (e, t) {
                  var n = e.isLastRapidFire,
                    a = e.isRapidFire,
                    r = this.props,
                    i = r.isSent,
                    l = r.isVoiceMessageActive,
                    o = r.user,
                    s = this._isDMVoiceMessage()
                  if (!o || (!t && !l)) return null
                  var c = ae(x.a.theme.scale),
                    d = c.DMUserAvatarSizePx,
                    u = { showAvatar: !!s || !a || !!n, size: c.DMUserAvatarSizeType, user: o },
                    p = [
                      ai.userAvatar.base,
                      i ? ai.userAvatar.sent : ai.userAvatar.received,
                      s && le(x.a.theme.scale).userAvatar({ isVoiceMessageActive: l, isSent: i }),
                    ]
                  return f.a.createElement(
                    H.a,
                    { style: ai.userAvatar.container },
                    i ? null : f.a.createElement(H.a, { style: ai.userAvatar.spacer }),
                    s
                      ? f.a.createElement(Gr, {
                          color: i ? x.a.theme.colors.primary : x.a.theme.colors.text,
                          isActive: !!l,
                          size: d,
                          style: p,
                        })
                      : null,
                    f.a.createElement(H.a, { style: p }, f.a.createElement(Wr, u)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(te()({}, e))
                },
              },
              {
                key: '_getRapidFireProps',
                value: function () {
                  return {
                    isFirstRapidFire: this.props.isFirstRapidFire,
                    isLastRapidFire: this.props.isLastRapidFire,
                    isRapidFire: this.props.isRapidFire,
                  }
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(ti, 'contextType', C.a), g()(ti, 'defaultProps', ei)
      var ni = Object(Ye.a)(
          Ee(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = f.a.useContext(Rr.a),
                  r = $()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  l = $()(r, 1)[0] === n.id,
                  o = te()(te()({}, t), {}, { isVoiceMessageActive: l, scribeVoiceMessage: i })
                return f.a.createElement(e, o)
              }
              return (t.defaultProps = ei), t
            })(ti),
          ),
        ),
        ai = {
          root: x.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
              highlightableEntry: {
                marginHorizontal: 'calc(-'.concat(e.spaces.space16, ')'),
                paddingHorizontal: e.spaces.space16,
                transition: 'background-color 3s ease-in',
                backgroundColor: e.colors.unreadCellBackground,
              },
              remove: { backgroundColor: e.colors.cellBackground },
            }
          }),
          messageContainer: x.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: zt },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: x.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: ae(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        ri = n('H4nC'),
        ii = function (e) {
          var t = e.conversation,
            n = e.entry,
            a = e.inboxType,
            r = e.isActive,
            i = e.isFirstRapidFire,
            l = e.isHighlightedMessageSearchEntry,
            o = e.isLastRapidFire,
            s = e.isRapidFire,
            c = e.isWide,
            d = e.perspective,
            u = e.scribeNamespace,
            p = e.setActiveEntry,
            m = e.setShouldFreezeUpdates
          if (Object(b.b)(n) || Object(b.e)(n)) {
            var g = t.conversation_id,
              h = t.low_quality,
              v = t.participants,
              y = t.read_only,
              _ = t.trusted,
              k = t.type,
              S = n.message_data,
              C = (S = void 0 === S ? {} : S).sender_id,
              T = void 0 === g || _
            return f.a.createElement(ni, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: k === E.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: l,
              isLastRapidFire: o,
              isLowQuality: !!h,
              isRapidFire: s,
              isReadOnly: y,
              isSent: C === d,
              isTrusted: !!T,
              isWide: c,
              participants: v,
              perspective: d,
              scribeNamespace: u,
              senderId: C,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(b.a)(n)
            ? f.a.createElement(J, { conversation: t, entry: n, entryType: n.type, perspective: d })
            : Object(b.d)(n)
            ? f.a.createElement(ri.a, { entry: n, isCompact: !1 })
            : null
        },
        li = n('0JOx'),
        oi = Object(he.createSelector)(
          function (e, t) {
            var n = Object(Pe.o)(e, t.conversationId),
              a = n && Object(S.a)(n)
            return a && Object(E.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        si = Object(ve.c)(oi),
        ci = (n('Ef13'), n('uDfI')),
        di = Object(he.createSelector)(
          function (e, t) {
            return _e.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        ui = Object(ci.b)(di),
        pi = n('VPAj'),
        mi = n('Enqy'),
        gi = n('+/1j'),
        hi = 'overflow',
        vi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        fi = { stiffness: 1e3, damping: 70 },
        yi = 140,
        _i = { scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(0, fi) },
        bi = function (e, t) {
          return { key: e.id_str, data: e, style: _i }
        },
        ki = Object(pi.a)({ translateY: yi, scale: 0 }),
        Si = Object(pi.a)({ scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(yi, fi) }),
        Ei = [{ key: 'bubble', style: { scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(0, fi) } }],
        Ci = Object(pi.a)({ translateY: yi, scale: 0 }),
        Ti = Object(pi.a)({ scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(yi, fi) }),
        Ri = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        wi = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), 'state', { isHidden: !0 }),
              g()(s()(e), '_afterLeave', function () {
                var t = e.props.users
                e.setState(function (e) {
                  return { isHidden: 0 === t.length }
                })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this.state.isHidden && this.props.users && this.props.users.length && this.setState({ isHidden: !1 })
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(W.a)(this.props, e) || !Object(W.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(vi).slice(0, 5).map(bi)
                  return (
                    t.length > 5 && n.push({ key: hi, style: _i }),
                    f.a.createElement(
                      H.a,
                      { style: [xi.root, e && xi.hidden] },
                      f.a.createElement(
                        H.a,
                        { style: xi.avatarRow },
                        f.a.createElement(
                          mi.TransitionMotion,
                          { styles: n, willEnter: ki, willLeave: Si },
                          function (e) {
                            return f.a.createElement(
                              f.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Ri(e.style)
                                return e.key === hi
                                  ? f.a.createElement(
                                      H.a,
                                      {
                                        key: e.key,
                                        style: [xi.avatar, xi.avatarSpacer, xi.overflowAvatar, { transform: a }],
                                      },
                                      f.a.createElement(gi.a, { style: xi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : f.a.createElement(
                                      H.a,
                                      { key: e.key, style: [xi.avatar, { transform: a }] },
                                      f.a.createElement(q.default, {
                                        accessibilityLabel: e.data && e.data.name,
                                        size: 'xLarge',
                                        uri: e.data && e.data.profile_image_url_https,
                                      }),
                                    )
                              }),
                            )
                          },
                        ),
                      ),
                      f.a.createElement(
                        mi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Ei : [], willEnter: Ci, willLeave: Ti },
                        function (e) {
                          return f.a.createElement(
                            f.a.Fragment,
                            null,
                            e.map(function (e) {
                              return f.a.createElement(
                                H.a,
                                { key: e.key, style: [xi.messageBubble, { transform: Ri(e.style) }] },
                                f.a.createElement(H.a, { style: xi.dot }),
                                f.a.createElement(H.a, { style: [xi.dot, xi.dot1] }),
                                f.a.createElement(H.a, { style: [xi.dot, xi.dot2] }),
                              )
                            }),
                          )
                        },
                      ),
                    )
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        xi = x.a.create(function (e) {
          return {
            root: {
              flexDirection: 'row',
              paddingBottom: e.spaces.space20,
              paddingRight: e.spaces.space12,
              width: 'calc(100% * 7/8)',
              position: 'relative',
              transitionProperty: 'height, padding-bottom',
              transitionDuration: '0.2s',
              overflow: 'hidden',
            },
            hidden: { paddingBottom: 0, paddingRight: 0, height: 0, width: 0 },
            avatarRow: { display: 'inline-flex', alignItems: 'flex-start', flexDirection: 'row' },
            avatar: { marginEnd: e.spaces.space12, transformOrigin: '50% 100%' },
            avatarSpacer: { height: e.spaces.space40, width: e.spaces.space40 },
            overflowAvatar: {
              borderRadius: e.borderRadii.infinite,
              backgroundColor: e.colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
            },
            overflowAvatarText: { color: 'white' },
            messageBubble: {
              alignItems: 'center',
              borderRadius: e.borderRadii.infinite,
              maxWidth: '100%',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
              backgroundColor: e.colors.gray50,
              borderBottomLeftRadius: e.borderRadii.none,
              borderColor: e.colors.gray200,
              flexDirection: 'row',
              height: e.spaces.space40,
              overflow: 'hidden',
              transformOrigin: '0% 100%',
            },
            dot: {
              display: 'flex-inline',
              position: 'relative',
              width: e.spaces.space12,
              height: e.spaces.space12,
              overflow: 'hidden',
              borderRadius: e.borderRadii.infinite,
              backgroundColor: e.colors.gray700,
              marginEnd: e.spaces.space4,
              animationDuration: '1.2s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              animationKeyframes: [
                {
                  '15%': { transform: [{ scale: 1.4 }], backgroundColor: e.colors.primary },
                  '30%': { transform: [{ scale: 1 }] },
                },
              ],
            },
            dot1: { animationDelay: '0.1s' },
            dot2: { animationDelay: '0.2s' },
          }
        }),
        Fi = ui(wi),
        Ai = n('tn7R'),
        Ii = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_timers', {}),
              g()(s()(e), 'state', { forceHide: !1, userIds: [] }),
              g()(s()(e), '_handleLivePipelineUpdate', function (t) {
                var n = t.dm_typing.user_id
                n !== e.context.loggedInUserId &&
                  (e._timers[n] && clearTimeout(e._timers[n]),
                  (e._timers[n] = setTimeout(function () {
                    return e._removeAvatar(n)
                  }, 4e3)),
                  e.setState(function (e) {
                    return {
                      forceHide: !1,
                      userIds: [].concat(
                        We()(
                          e.userIds.filter(function (e) {
                            return e !== n
                          }),
                        ),
                        [n],
                      ),
                    }
                  }))
              }),
              g()(s()(e), '_removeAvatar', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                e.setState(function (e) {
                  var a = e.userIds.filter(function (e) {
                    return e !== t
                  })
                  return { forceHide: n && 0 === a.length, userIds: a }
                })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._initializeLivePipeline()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  if (this.props.lastEntry) {
                    var n = (e || {}).lastEntry,
                      a = void 0 === n ? {} : n,
                      r = this.props.lastEntry
                    a && a.id !== r.id && r.message_data && this._removeAvatar(r.message_data.sender_id, !0)
                  }
                  e.conversationId !== this.props.conversationId &&
                    (this._teardownLivePipeline(), this._initializeLivePipeline())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._teardownLivePipeline()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.forceHide,
                    n = e.userIds
                  return !t && f.a.createElement(Fi, { userIds: n })
                },
              },
              {
                key: '_teardownLivePipeline',
                value: function () {
                  Object(Ai.a)(this._timers).forEach(function (e) {
                    return clearTimeout(e)
                  }),
                    this._livePipelineSubscription && this._livePipelineSubscription.teardown()
                },
              },
              {
                key: '_initializeLivePipeline',
                value: function () {
                  var e = this,
                    t = this.props.conversationId
                  Object(li.h)().then(function (n) {
                    var a = n.LivePipeline
                    a.isSupportedAndReady(e.context.featureSwitches) &&
                      e.context.featureSwitches.isTrue('livepipeline_dm_features_enabled') &&
                      !e._livePipelineSubscription &&
                      (e._livePipelineSubscription = a
                        .get()
                        .subscribeTopic('/dm_typing/'.concat(t), e._handleLivePipelineUpdate))
                  })
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent)
      g()(Ii, 'contextType', C.a)
      var Oi = si(Ii),
        Li = n('3AAD'),
        Mi = n('iBK2'),
        Di = n('RJrc'),
        Pi = n('yw4N'),
        Ki = n('mw9i'),
        Bi = Ie.a.i859a9d3,
        ji = Ie.a.i8ecae5b,
        Ni = function (e) {
          return e.entry.id
        },
        Ui = function (e) {
          return e.entry.type === U.b.MESSAGE
        },
        Wi = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              g()(s()(i), '_handleScrollEnd', function () {
                i.setState({ didRenderMessageSearchEntry: !0 })
              }),
              g()(s()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case U.b.TYPING_INDICATOR:
                    return n ? f.a.createElement(Oi, { conversationId: n }) : null
                  case U.b.READ_ONLY_INDICATOR:
                    return n
                      ? f.a.createElement(
                          H.a,
                          { style: Hi.readOnly },
                          f.a.createElement(
                            V.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            ji,
                            ' ',
                            f.a.createElement(V.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Bi),
                          ),
                        )
                      : null
                  case U.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return f.a.createElement(P, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              g()(s()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              g()(s()(i), '_setShouldFreezeUpdates', function (e) {
                i.setState({ shouldFreezeUpdates: e })
              }),
              (i.state = { activeEntryId: null, didRenderMessageSearchEntry: !1, shouldFreezeUpdates: !1 }),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !1 === t.shouldFreezeUpdates
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversation,
                    a = t.drawerHeader,
                    r = t.isWide,
                    i = t.messageSearchEntryId,
                    l = t.onForwardRequest,
                    o = t.onHistoryRequest,
                    s = t.shouldScrollToCenter,
                    c = t.style,
                    d = this.state.activeEntryId,
                    u = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        a = e.conversation,
                        r = e.footer,
                        i = e.messageSearchEntryId,
                        l = e.readOnlyEntry,
                        o = (a && a.entries) || [],
                        s = null == a ? void 0 : a.max_search_entry_id,
                        c = null == a ? void 0 : a.min_search_entry_id,
                        d = (null == a ? void 0 : a.status) === E.PAGINATION_STATUS.AT_END,
                        u = s ? Object(_.d)(o, s) : o.length - 1,
                        p = c ? Object(_.d)(o, c) : -1,
                        m = i && -1 === p ? Object(_.d)(o, i) : p,
                        g = o.slice(d ? 0 : m, u + 1),
                        h = (i ? g : o).reduce(function (e, r, l) {
                          n && 0 === l && e.push(y.b)
                          var s = Object(S.a)(e),
                            c = l === o.length - 1
                          if (
                            (e.push({
                              isRapidFire: !1,
                              isFirstRapidFire: !1,
                              isLastRapidFire: !1,
                              entry: r,
                              isActive: i === r.id || t === r.id,
                              isTrusted: !(null == a || !a.trusted),
                              messageSearchEntryId: i,
                            }),
                            s)
                          ) {
                            var d = k(s.entry, r),
                              u = e[e.length - 2]
                            d
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return r && !i && h.push(r), a.read_only && l && !i && h.push(l), h
                    })({
                      conversation: n,
                      footer: y.d,
                      readOnlyEntry: y.c,
                      canInjectConversationProfileInfoHeader: n.status === U.c.AT_END && n.type === U.a.ONE_TO_ONE,
                      activeEntryId: d,
                      messageSearchEntryId: i,
                    }),
                    p = n.conversation_id,
                    m = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Ui(n)) return n
                      }
                      return (function (e) {
                        return e[e.length - 1]
                      })(e)
                    },
                    g = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    v =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== U.c.AT_END
                  return f.a.createElement(K.a.Consumer, null, function (t) {
                    var d = t.isDrawer ? B.b.drawerHeaderRadius : Hi.scrollSpace
                    return f.a.createElement(
                      H.a,
                      { style: [Hi.scrollContainer, d] },
                      f.a.createElement(
                        Pi.a,
                        { style: [Hi.scrollContainer, r && Hi.conversationsPadding, d, c] },
                        a || null,
                        (n.status && n.status !== U.c.AT_END && !i) || v ? f.a.createElement(Di.a, null) : null,
                        f.a.createElement(
                          Ki.a,
                          { style: [Hi.content, Hi.alignTop], withGutter: !0 },
                          f.a.createElement(Mi.b, {
                            anchoring: Li.a,
                            assumedItemHeight: 50,
                            cacheKey: g,
                            canBeAnchorFunction: Ui,
                            centerInitialAnchor: i && s,
                            hasNewContentAtBottom: !0,
                            identityFunction: Ni,
                            initialAnchor: u.length > 0 ? h.a(i && s ? i : Ni(m(u))) : void 0,
                            items: u,
                            nearStartProximityRatio: 2,
                            onAtEnd: i && e.state.didRenderMessageSearchEntry ? l : void 0,
                            onAtStart: i && e.state.didRenderMessageSearchEntry ? o : void 0,
                            onNearStart: i ? void 0 : o,
                            onScrollEnd: i && !e.state.didRenderMessageSearchEntry ? e._handleScrollEnd : void 0,
                            renderer: e._renderItem,
                            withoutHeadroom: !1,
                          }),
                        ),
                        e.state.didRenderMessageSearchEntry &&
                          i &&
                          n.max_search_entry_id &&
                          n.search_status !== U.c.AT_END
                          ? f.a.createElement(Di.a, null)
                          : null,
                      ),
                    )
                  })
                },
              },
              {
                key: '_renderDMEntry',
                value: function (e) {
                  var t = e.entry,
                    n = e.isActive,
                    a = e.isFirstRapidFire,
                    r = e.isLastRapidFire,
                    i = e.isRapidFire,
                    l = this.props,
                    o = l.conversation,
                    s = l.inboxType,
                    c = l.isWide,
                    d = l.messageSearchEntryId,
                    u = l.perspective,
                    p = l.scribeNamespace,
                    m = t.id === d
                  return t && s
                    ? f.a.createElement(ii, {
                        conversation: o,
                        entry: t,
                        inboxType: s,
                        isActive: n,
                        isFirstRapidFire: a,
                        isHighlightedMessageSearchEntry: m,
                        isLastRapidFire: r,
                        isRapidFire: i,
                        isWide: c,
                        key: t.id,
                        perspective: u,
                        scribeNamespace: p,
                        setActiveEntry: this._setActiveEntry,
                        setShouldFreezeUpdates: this._setShouldFreezeUpdates,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      g()(Wi, 'contextType', C.a)
      var Hi = x.a.create(function (e) {
        return {
          spinner: { alignItems: 'center', marginVertical: '30px' },
          scrollContainer: {
            backgroundColor: e.colors.cellBackground,
            flexGrow: 1,
            height: '100%',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch',
          },
          scrollSpace: {
            paddingTop: e.componentDimensions.appBarHeightPx,
            marginTop: -e.componentDimensions.appBarHeightPx,
          },
          conversationsPadding: { paddingTop: e.spaces.space20 },
          content: { flexGrow: 1, transform: [{ translate3d: '0,0,0' }] },
          alignTop: { justifyContent: 'flex-start' },
          readOnly: { paddingBottom: e.spaces.space20 },
        }
      })
    },
    '4n2h': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      var a = function (e) {
          return e ? 'medium' : 'normal'
        },
        r = function (e, t) {
          return e || t ? 'text' : 'gray700'
        }
    },
    '6s7X': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('Lsrn'),
        s = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [o.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            l.a.createElement(
              'g',
              null,
              l.a.createElement('path', {
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              l.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              l.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      }),
        n.d(t, 'c', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return T
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        l = n('k49u'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('fs1G'),
        d = s.a.c3752568,
        u = s.a.f78aa3e9,
        p = s.a.f9690dc0,
        m = s.a.i859a9d3,
        g = s.a.b1d35407,
        h = s.a.g539cca6,
        v = s.a.bbac0019,
        f = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        _ = s.a.hf383be4,
        b = s.a.b25c5b2a,
        k = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        E = i()({}, l.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: u }, showToast: !0 },
        T =
          ((a = { defaultToast: { text: d } }),
          i()(a, l.a.CurrentUserSuspended, {
            toast: { text: h, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, l.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, l.a.DirectMessageDuplicate, { toast: { text: b } }),
          i()(a, l.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, l.a.DirectMessagesSenderBlocksRecipient, { toast: { text: k } }),
          i()(a, l.a.DirectMessageTooLongError, { toast: { text: v } }),
          i()(a, l.a.DirectMessageTweetNotFound, { toast: { text: y } }),
          i()(a, l.a.GenericBadRequest, { customAction: c.a }),
          i()(a, l.a.MessageSendError, { toast: { text: S } }),
          i()(a, l.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: g },
          }),
          i()(a, l.a.TargetUserNotFound, { toast: { text: _ } }),
          i()(a, 'showToast', !0),
          a)
    },
    '8W85': function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')
      var a = n('zb92')
      t.a = Object(a.a)({
        loader: function () {
          return Promise.all([n.e(0), n.e(24), n.e(170)])
            .then(n.bind(null, 'u2Vg'))
            .then(function (e) {
              return { default: e.__DANGEROUS_IMPORT__ }
            })
        },
      })
    },
    '8fI/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreenWithRichText', function () {
          return d
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        l = n.n(i),
        o = n('cOtO'),
        s = n('Rk1B'),
        c = n('RH6X'),
        d = function (e) {
          return l.a.createElement(s.default, null, function (t) {
            var n = t.richTextInputContext
            t.typeaheadWrapper
            return l.a.createElement(o.default, r()({}, e, { richTextInputContext: n, typeaheadWrapper: c.a }))
          })
        }
      t.default = d
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return v
      }),
        n.d(t, 'a', function () {
          return f
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = (n('z84I'), n('Blm6'), n('lTEL'), n('7x/C'), n('kYxP'), n('LW0h'), n('lnti')),
        s = n('aWyx'),
        c = n('Yatk'),
        d = ['users'],
        u = ['conversation_id', 'participants'],
        p = ['conversation_id', 'participants', 'social_proof'],
        m = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.map(function (e) {
            return r()(
              r()({}, e),
              {},
              {
                user: Object(c.a)(t[e.user_id]) || {
                  created_at: '',
                  description: '',
                  entities: {},
                  followed_by: !1,
                  followers_count: 0,
                  following: !1,
                  friends_count: 0,
                  id: parseInt(e.user_id, 10),
                  id_str: e.user_id,
                  name: '',
                  profile_image_url_https: '',
                  protected: !1,
                  screen_name: '',
                  verified: !1,
                },
              },
            )
          })
        }
      function h(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var v = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = e.conversation_id,
            i = e.participants,
            o = l()(e, u)
          return r()(
            r()({ conversation_id: a }, o),
            {},
            { entries: t.entryIdsByConversationId[a] || [], participants: g(i, n) },
          )
        },
        f = function (e, t, n) {
          var a = e.conversation_id,
            i = e.participants,
            u = e.social_proof,
            m = l()(e, p),
            v = r()(
              r()({ conversation_id: a }, m),
              {},
              { entries: h(a, t), participants: g(i, n), social_proof: void 0 },
            )
          return (
            u &&
              (v.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === s.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      a = l()(t, d)
                    return r()(
                      r()({}, a),
                      {},
                      {
                        users: Object(o.a)(
                          n.map(function (t) {
                            return Object(c.a)(e[t])
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(u, n)),
            v
          )
        }
    },
    GSsg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = (n('yH/f'), n('B5iK')),
        s = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            r()(this, e)
            var a = n.interval,
              i = void 0 === a ? 6e4 : a,
              l = n.burstInterval,
              s = void 0 === l ? 3e3 : l,
              c = n.burstDuration,
              d = void 0 === c ? 3e5 : c
            ;(this.pollTimer = new o.b(i).interval(t)), (this.burstTimer = new o.a(this.pollTimer, s, d))
          }
          return (
            l()(e, [
              {
                key: 'start',
                value: function (e) {
                  return this.pollTimer.start(), e && this.burstTimer.requestBurst(), this
                },
              },
              {
                key: 'stop',
                value: function () {
                  return this.burstTimer.stopBurst(), this.pollTimer.stop(), this
                },
              },
              {
                key: 'restart',
                value: function () {
                  return this.stop(), this.start(), this
                },
              },
            ]),
            e
          )
        })()
    },
    GjeS: function (e, t, n) {
      'use strict'
      var a,
        r,
        i,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        v,
        f,
        y,
        _,
        b,
        k,
        S,
        E,
        C,
        T,
        R,
        w,
        x,
        F,
        A,
        I,
        O,
        L,
        M,
        D,
        P,
        K,
        B,
        j,
        N,
        U,
        W,
        H,
        V,
        q,
        z,
        G,
        Y,
        Q,
        X,
        J,
        Z,
        $,
        ee,
        te,
        ne,
        ae,
        re,
        ie,
        le,
        oe,
        se,
        ce,
        de,
        ue,
        pe,
        me,
        ge,
        he,
        ve,
        fe,
        ye,
        _e,
        be,
        ke,
        Se,
        Ee,
        Ce,
        Te,
        Re,
        we,
        xe,
        Fe,
        Ae,
        Ie,
        Oe,
        Le,
        Me,
        De,
        Pe,
        Ke,
        Be,
        je,
        Ne,
        Ue,
        We,
        He,
        Ve,
        qe,
        ze,
        Ge,
        Ye,
        Qe,
        Xe,
        Je,
        Ze,
        $e,
        et,
        tt,
        nt,
        at,
        rt,
        it,
        lt,
        ot,
        st,
        ct,
        dt,
        ut,
        pt,
        mt,
        gt,
        ht,
        vt,
        ft,
        yt,
        _t,
        bt,
        kt,
        St,
        Et,
        Ct = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'id' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'next_cursor' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'previous_cursor' }),
              (l = { defaultValue: !1, kind: 'LocalArgument', name: 'withAttachments' }),
              (o = { defaultValue: !1, kind: 'LocalArgument', name: 'withDmMuting' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'withSafetyModeUserFields' }),
              (c = { defaultValue: null, kind: 'LocalArgument', name: 'withSuperFollowsUserFields' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: (d = [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'id' },
                  { kind: 'Literal', name: 's', value: 25 },
                ]),
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: 'legacy_conversation_slice',
                    args: (u = [
                      { kind: 'Variable', name: 'next_cursor', variableName: 'next_cursor' },
                      { kind: 'Variable', name: 'previous_cursor', variableName: 'previous_cursor' },
                    ]),
                    concreteType: null,
                    kind: 'LinkedField',
                    name: '__evolutionDmConversationTimelineQuery_legacy_conversation_slice_slice',
                    plural: !1,
                    selections: [
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'DMEventItem',
                            kind: 'LinkedField',
                            name: 'items',
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  (p = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'rest_id',
                                    storageKey: null,
                                  }),
                                  (m = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (g = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (h = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (v = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (f = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (y = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_type',
                                        storageKey: null,
                                      }),
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          m,
                                          p,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              (_ = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'conversation_id',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  _,
                                                  (b = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (k = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'name',
                                                    storageKey: null,
                                                  }),
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              m,
                                                              p,
                                                              {
                                                                kind: 'RequiredField',
                                                                field: (E = {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'ApiUser',
                                                                  kind: 'LinkedField',
                                                                  name: 'legacy',
                                                                  plural: !1,
                                                                  selections: [
                                                                    k,
                                                                    (S = {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'screen_name',
                                                                      storageKey: null,
                                                                    }),
                                                                  ],
                                                                  storageKey: null,
                                                                }),
                                                                action: 'THROW',
                                                                path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.conversation.legacy.metadata.created_by_user_results.result.legacy',
                                                              },
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  h,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              m,
                                                              p,
                                                              {
                                                                kind: 'RequiredField',
                                                                field: E,
                                                                action: 'THROW',
                                                                path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.conversation.legacy.metadata.admin_user_results.result.legacy',
                                                              },
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      m,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (w = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              (C = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              }),
                                                              (T = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_width',
                                                                storageKey: null,
                                                              }),
                                                              (R = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_height',
                                                                storageKey: null,
                                                              }),
                                                            ],
                                                            type: 'ApiImage',
                                                            abstractKey: null,
                                                          }),
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              m,
                                                              p,
                                                              {
                                                                kind: 'RequiredField',
                                                                field: (A = {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'ApiUser',
                                                                  kind: 'LinkedField',
                                                                  name: 'legacy',
                                                                  plural: !1,
                                                                  selections: [
                                                                    (x = {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'id_str',
                                                                      storageKey: null,
                                                                    }),
                                                                    k,
                                                                    S,
                                                                    (F = {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'profile_image_url_https',
                                                                      storageKey: null,
                                                                    }),
                                                                  ],
                                                                  storageKey: null,
                                                                }),
                                                                action: 'THROW',
                                                                path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.conversation.legacy.participants_metadata.user_results.result.legacy',
                                                              },
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  (I = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'last_read_event_id',
                                                    storageKey: null,
                                                  }),
                                                  (O = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (L = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (M = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  I,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'low_quality',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'muted_due_to_muted_user',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'read_only',
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'trusted',
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              }),
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          (D = {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DMInitialLowQualityState',
                                            kind: 'LinkedField',
                                            name: 'initial_low_quality_state',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'is_low_quality',
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          }),
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (K = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (B = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (j = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          k,
                                          (N = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (U = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'sender_registration_token',
                                            storageKey: null,
                                          }),
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: 'LinkedField',
                                                name: 'result',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    kind: 'InlineFragment',
                                                    selections: [
                                                      m,
                                                      p,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: E,
                                                        action: 'THROW',
                                                        path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.users_results.result.legacy',
                                                      },
                                                    ],
                                                    type: 'User',
                                                    abstractKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: 'LinkedField',
                                                name: 'result',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    kind: 'InlineFragment',
                                                    selections: [
                                                      m,
                                                      p,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: E,
                                                        action: 'THROW',
                                                        path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.participants_snapshot_results.result.legacy',
                                                      },
                                                    ],
                                                    type: 'User',
                                                    abstractKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: [
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: 'LinkedField',
                                                name: 'result',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    kind: 'InlineFragment',
                                                    selections: [
                                                      m,
                                                      p,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: E,
                                                        action: 'THROW',
                                                        path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.initiating_user_results.result.legacy',
                                                      },
                                                    ],
                                                    type: 'User',
                                                    abstractKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              (W = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              m,
                                              (H = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                              {
                                                condition: 'withAttachments',
                                                kind: 'Condition',
                                                passingValue: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: 'LinkedField',
                                                    name: 'attachments',
                                                    plural: !0,
                                                    selections: [
                                                      (V = {
                                                        alias: null,
                                                        args: null,
                                                        kind: 'ScalarField',
                                                        name: '__typename',
                                                        storageKey: null,
                                                      }),
                                                      (te = {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'ApiMedia',
                                                            kind: 'LinkedField',
                                                            name: 'media',
                                                            plural: !1,
                                                            selections: [
                                                              m,
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'media_key',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'media_id',
                                                                storageKey: null,
                                                              },
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: null,
                                                                kind: 'LinkedField',
                                                                name: 'media_info',
                                                                plural: !1,
                                                                selections: [
                                                                  V,
                                                                  {
                                                                    kind: 'InlineFragment',
                                                                    selections: (X = [
                                                                      (q = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'alt_text',
                                                                        storageKey: null,
                                                                      }),
                                                                      R,
                                                                      T,
                                                                      C,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiMediaRect',
                                                                        kind: 'LinkedField',
                                                                        name: 'salient_rect',
                                                                        plural: !1,
                                                                        selections: [
                                                                          (z = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'height',
                                                                            storageKey: null,
                                                                          }),
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'left',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'top',
                                                                            storageKey: null,
                                                                          },
                                                                          (G = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'width',
                                                                            storageKey: null,
                                                                          }),
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'MediaColorInfo',
                                                                        kind: 'LinkedField',
                                                                        name: 'color_info',
                                                                        plural: !1,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'MediaColorPaletteItem',
                                                                            kind: 'LinkedField',
                                                                            name: 'palette',
                                                                            plural: !0,
                                                                            selections: [
                                                                              (Y = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'percentage',
                                                                                storageKey: null,
                                                                              }),
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'MediaColor',
                                                                                kind: 'LinkedField',
                                                                                name: 'rgb',
                                                                                plural: !1,
                                                                                selections: (Q = [
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'blue',
                                                                                    storageKey: null,
                                                                                  },
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'green',
                                                                                    storageKey: null,
                                                                                  },
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'red',
                                                                                    storageKey: null,
                                                                                  },
                                                                                ]),
                                                                                storageKey: null,
                                                                              },
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                    ]),
                                                                    type: 'ApiImage',
                                                                    abstractKey: null,
                                                                  },
                                                                  {
                                                                    kind: 'InlineFragment',
                                                                    selections: [
                                                                      (J = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'AspectRatio',
                                                                        kind: 'LinkedField',
                                                                        name: 'aspect_ratio',
                                                                        plural: !1,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'denominator',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'numerator',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      }),
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'duration_millis',
                                                                        storageKey: null,
                                                                      },
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'embeddable',
                                                                        storageKey: null,
                                                                      },
                                                                      (Z = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiImage',
                                                                        kind: 'LinkedField',
                                                                        name: 'preview_image',
                                                                        plural: !1,
                                                                        selections: X,
                                                                        storageKey: null,
                                                                      }),
                                                                      (ee = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'VideoVariant',
                                                                        kind: 'LinkedField',
                                                                        name: 'variants',
                                                                        plural: !0,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'bit_rate',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'content_type',
                                                                            storageKey: null,
                                                                          },
                                                                          ($ = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'url',
                                                                            storageKey: null,
                                                                          }),
                                                                        ],
                                                                        storageKey: null,
                                                                      }),
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'view_count',
                                                                        storageKey: null,
                                                                      },
                                                                    ],
                                                                    type: 'ApiVideo',
                                                                    abstractKey: null,
                                                                  },
                                                                  {
                                                                    kind: 'InlineFragment',
                                                                    selections: [q, J, Z, ee],
                                                                    type: 'ApiGif',
                                                                    abstractKey: null,
                                                                  },
                                                                ],
                                                                storageKey: null,
                                                              },
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        type: 'DMMediaAttachment',
                                                        abstractKey: null,
                                                      }),
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'Card',
                                                            kind: 'LinkedField',
                                                            name: 'card',
                                                            plural: !1,
                                                            selections: [
                                                              p,
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'LegacyCard',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  (re = {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'LegacyCardBinding',
                                                                    kind: 'LinkedField',
                                                                    name: 'binding_values',
                                                                    plural: !0,
                                                                    selections: [
                                                                      (ne = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'key',
                                                                        storageKey: null,
                                                                      }),
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiCardBindingValue',
                                                                        kind: 'LinkedField',
                                                                        name: 'value',
                                                                        plural: !1,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'boolean_value',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'double_value',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiCardBindingImageValue',
                                                                            kind: 'LinkedField',
                                                                            name: 'image_value',
                                                                            plural: !1,
                                                                            selections: [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'alt',
                                                                                storageKey: null,
                                                                              },
                                                                              z,
                                                                              G,
                                                                              $,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiMediaEntityColorPalette',
                                                                            kind: 'LinkedField',
                                                                            name: 'image_color_value',
                                                                            plural: !1,
                                                                            selections: [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType:
                                                                                  'ApiMediaEntityColorPaletteColor',
                                                                                kind: 'LinkedField',
                                                                                name: 'palette',
                                                                                plural: !0,
                                                                                selections: [
                                                                                  (ae = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: 'ApiMediaEntityColor',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'rgb',
                                                                                    plural: !1,
                                                                                    selections: Q,
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  Y,
                                                                                ],
                                                                                storageKey: null,
                                                                              },
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'integer_value',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'scribe_key',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'string_value',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'type',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiCardBindingUserValue',
                                                                            kind: 'LinkedField',
                                                                            name: 'user_value',
                                                                            plural: !1,
                                                                            selections: [
                                                                              x,
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'path',
                                                                                storageKey: null,
                                                                              },
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                    ],
                                                                    storageKey: null,
                                                                  }),
                                                                  (ie = {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'ApiCardPlatform',
                                                                    kind: 'LinkedField',
                                                                    name: 'card_platform',
                                                                    plural: !1,
                                                                    selections: [
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiCardPlatformPlatform',
                                                                        kind: 'LinkedField',
                                                                        name: 'platform',
                                                                        plural: !1,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiCardPlatformAudience',
                                                                            kind: 'LinkedField',
                                                                            name: 'audience',
                                                                            plural: !1,
                                                                            selections: [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'bucket',
                                                                                storageKey: null,
                                                                              },
                                                                              k,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiCardPlatformDevice',
                                                                            kind: 'LinkedField',
                                                                            name: 'device',
                                                                            plural: !1,
                                                                            selections: [
                                                                              k,
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'version',
                                                                                storageKey: null,
                                                                              },
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                    ],
                                                                    storageKey: null,
                                                                  }),
                                                                  k,
                                                                  $,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'User',
                                                                    kind: 'LinkedField',
                                                                    name: 'user_refs',
                                                                    plural: !0,
                                                                    selections: [
                                                                      m,
                                                                      p,
                                                                      {
                                                                        alias: 'affiliates_highlighted_label',
                                                                        args: null,
                                                                        concreteType: 'HighlightedUserLabelResponse',
                                                                        kind: 'LinkedField',
                                                                        name: 'identity_profile_labels_highlighted_label',
                                                                        plural: !1,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'HighlightedUserLabel',
                                                                            kind: 'LinkedField',
                                                                            name: 'label',
                                                                            plural: !1,
                                                                            selections: [
                                                                              (oe = {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'TimelineUrl',
                                                                                kind: 'LinkedField',
                                                                                name: 'url',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  (le = {
                                                                                    alias: 'urlType',
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'url_type',
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  $,
                                                                                ],
                                                                                storageKey: null,
                                                                              }),
                                                                              (se = {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'BadgeInfo',
                                                                                kind: 'LinkedField',
                                                                                name: 'badge',
                                                                                plural: !1,
                                                                                selections: [$],
                                                                                storageKey: null,
                                                                              }),
                                                                              (ce = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'description',
                                                                                storageKey: null,
                                                                              }),
                                                                              {
                                                                                alias: 'longDescription',
                                                                                args: null,
                                                                                concreteType: 'TimelineRichText',
                                                                                kind: 'LinkedField',
                                                                                name: 'long_description',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  (de = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'alignment',
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  (ue = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'rtl',
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  H,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType:
                                                                                      'TimelineRichTextEntity',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'entities',
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                      (pe = {
                                                                                        alias: 'fromIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'from_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (me = {
                                                                                        alias: 'toIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'to_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (ge = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'format',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: 'LinkedField',
                                                                                        name: 'ref',
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                          (he = {
                                                                                            alias: 'type',
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: '__typename',
                                                                                            storageKey: null,
                                                                                          }),
                                                                                          (fe = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: (ve = [H]),
                                                                                            type: 'TimelineRichTextCashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (ye = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [m, $],
                                                                                            type: 'TimelineRichTextList',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (_e = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: ve,
                                                                                            type: 'TimelineRichTextHashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (be = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              $,
                                                                                              le,
                                                                                              {
                                                                                                alias:
                                                                                                  'urtEndpointOptions',
                                                                                                args: null,
                                                                                                concreteType:
                                                                                                  'TimelineUrtEndpointOptions',
                                                                                                kind: 'LinkedField',
                                                                                                name: 'urt_endpoint_options',
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                  {
                                                                                                    alias: 'cacheId',
                                                                                                    args: null,
                                                                                                    kind: 'ScalarField',
                                                                                                    name: 'cache_id',
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    kind: 'ScalarField',
                                                                                                    name: 'subtitle',
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    kind: 'ScalarField',
                                                                                                    name: 'title',
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                  {
                                                                                                    alias:
                                                                                                      'requestParams',
                                                                                                    args: null,
                                                                                                    concreteType:
                                                                                                      'RequestParamsEntry',
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'request_params',
                                                                                                    plural: !0,
                                                                                                    selections: [
                                                                                                      ne,
                                                                                                      {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        kind: 'ScalarField',
                                                                                                        name: 'value',
                                                                                                        storageKey:
                                                                                                          null,
                                                                                                      },
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                              },
                                                                                            ],
                                                                                            type: 'TimelineUrl',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType:
                                                                                                  'UserResults',
                                                                                                kind: 'LinkedField',
                                                                                                name: 'user_results',
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: null,
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'result',
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                      V,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          {
                                                                                                            kind: 'RequiredField',
                                                                                                            field: (ke =
                                                                                                              {
                                                                                                                alias:
                                                                                                                  null,
                                                                                                                args: null,
                                                                                                                concreteType:
                                                                                                                  'ApiUser',
                                                                                                                kind: 'LinkedField',
                                                                                                                name: 'legacy',
                                                                                                                plural:
                                                                                                                  !1,
                                                                                                                selections:
                                                                                                                  [S],
                                                                                                                storageKey:
                                                                                                                  null,
                                                                                                              }),
                                                                                                            action:
                                                                                                              'THROW',
                                                                                                            path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.affiliates_highlighted_label.label.longDescription.entities.ref.user_results.result.legacy',
                                                                                                          },
                                                                                                          p,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      (Se = {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          {
                                                                                                            alias:
                                                                                                              'reason',
                                                                                                            args: null,
                                                                                                            kind: 'ScalarField',
                                                                                                            name: 'unavailable_reason',
                                                                                                            storageKey:
                                                                                                              null,
                                                                                                          },
                                                                                                          {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            kind: 'ScalarField',
                                                                                                            name: 'message',
                                                                                                            storageKey:
                                                                                                              null,
                                                                                                          },
                                                                                                        ],
                                                                                                        type: 'UserUnavailable',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      }),
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                              },
                                                                                            ],
                                                                                            type: 'TimelineRichTextUser',
                                                                                            abstractKey: null,
                                                                                          },
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              S,
                                                                                              {
                                                                                                alias:
                                                                                                  'mention_results',
                                                                                                args: null,
                                                                                                concreteType:
                                                                                                  'UserResults',
                                                                                                kind: 'LinkedField',
                                                                                                name: 'user_results',
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: null,
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'result',
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                      V,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          {
                                                                                                            kind: 'RequiredField',
                                                                                                            field: ke,
                                                                                                            action:
                                                                                                              'THROW',
                                                                                                            path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.affiliates_highlighted_label.label.longDescription.entities.ref.mention_results.result.legacy',
                                                                                                          },
                                                                                                          p,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      Se,
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                              },
                                                                                            ],
                                                                                            type: 'TimelineRichTextMention',
                                                                                            abstractKey: null,
                                                                                          },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                      },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                  },
                                                                                ],
                                                                                storageKey: null,
                                                                              },
                                                                              (Ee = {
                                                                                alias: 'userLabelType',
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'user_label_type',
                                                                                storageKey: null,
                                                                              }),
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      (Ce = {
                                                                        condition: 'withDmMuting',
                                                                        kind: 'Condition',
                                                                        passingValue: !0,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'dm_muting',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                      }),
                                                                      (Te = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'has_nft_avatar',
                                                                        storageKey: null,
                                                                      }),
                                                                      {
                                                                        kind: 'RequiredField',
                                                                        field: {
                                                                          alias: null,
                                                                          args: null,
                                                                          concreteType: 'ApiUser',
                                                                          kind: 'LinkedField',
                                                                          name: 'legacy',
                                                                          plural: !1,
                                                                          selections: [
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Re = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'blocked_by',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.blocked_by',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (we = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'blocking',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.blocking',
                                                                            },
                                                                            (xe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'can_dm',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Fe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'can_media_tag',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ae = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'created_at',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ie = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'default_profile',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Oe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'default_profile_image',
                                                                              storageKey: null,
                                                                            }),
                                                                            ce,
                                                                            (De = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'UserEntities',
                                                                              kind: 'LinkedField',
                                                                              name: 'entities',
                                                                              plural: !1,
                                                                              selections: (Me = [
                                                                                {
                                                                                  alias: null,
                                                                                  args: null,
                                                                                  concreteType: 'EntitySet',
                                                                                  kind: 'LinkedField',
                                                                                  name: 'description',
                                                                                  plural: !1,
                                                                                  selections: (Le = [
                                                                                    {
                                                                                      alias: null,
                                                                                      args: null,
                                                                                      concreteType: 'UrlsEntity',
                                                                                      kind: 'LinkedField',
                                                                                      name: 'urls',
                                                                                      plural: !0,
                                                                                      selections: [
                                                                                        {
                                                                                          alias: null,
                                                                                          args: null,
                                                                                          kind: 'ScalarField',
                                                                                          name: 'display_url',
                                                                                          storageKey: null,
                                                                                        },
                                                                                        {
                                                                                          alias: null,
                                                                                          args: null,
                                                                                          kind: 'ScalarField',
                                                                                          name: 'expanded_url',
                                                                                          storageKey: null,
                                                                                        },
                                                                                        $,
                                                                                        {
                                                                                          alias: null,
                                                                                          args: null,
                                                                                          kind: 'ScalarField',
                                                                                          name: 'indices',
                                                                                          storageKey: null,
                                                                                        },
                                                                                      ],
                                                                                      storageKey: null,
                                                                                    },
                                                                                  ]),
                                                                                  storageKey: null,
                                                                                },
                                                                                {
                                                                                  alias: null,
                                                                                  args: null,
                                                                                  concreteType: 'EntitySet',
                                                                                  kind: 'LinkedField',
                                                                                  name: 'url',
                                                                                  plural: !1,
                                                                                  selections: Le,
                                                                                  storageKey: null,
                                                                                },
                                                                              ]),
                                                                              storageKey: null,
                                                                            }),
                                                                            (Pe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'fast_followers_count',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ke = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'favourites_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.favourites_count',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Be = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'follow_request_sent',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.follow_request_sent',
                                                                            },
                                                                            (je = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'follow_request_received',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ne = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'followed_by',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.followed_by',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ue = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'followers_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.followers_count',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (We = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'following',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.following',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (He = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'friends_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.friends_count',
                                                                            },
                                                                            (Ve = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'has_custom_timelines',
                                                                              storageKey: null,
                                                                            }),
                                                                            (qe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'is_translator',
                                                                              storageKey: null,
                                                                            }),
                                                                            (ze = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'listed_count',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ge = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'location',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ye = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'media_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.media_count',
                                                                            },
                                                                            (Qe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'muting',
                                                                              storageKey: null,
                                                                            }),
                                                                            k,
                                                                            (Xe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'needs_phone_verification',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Je = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'normal_followers_count',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ze = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'notifications',
                                                                              storageKey: null,
                                                                            }),
                                                                            ($e = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'pinned_tweet_ids_str',
                                                                              storageKey: null,
                                                                            }),
                                                                            (tt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'ApiMediaExtensions',
                                                                              kind: 'LinkedField',
                                                                              name: 'profile_banner_extensions',
                                                                              plural: !1,
                                                                              selections: (et = [
                                                                                {
                                                                                  alias: null,
                                                                                  args: null,
                                                                                  concreteType:
                                                                                    'ApiMediaColorExtension',
                                                                                  kind: 'LinkedField',
                                                                                  name: 'mediaColor',
                                                                                  plural: !1,
                                                                                  selections: [
                                                                                    {
                                                                                      alias: null,
                                                                                      args: null,
                                                                                      concreteType:
                                                                                        'ApiMediaColorExtensionR',
                                                                                      kind: 'LinkedField',
                                                                                      name: 'r',
                                                                                      plural: !1,
                                                                                      selections: [
                                                                                        {
                                                                                          alias: null,
                                                                                          args: null,
                                                                                          concreteType:
                                                                                            'ApiMediaEntityColorPalette',
                                                                                          kind: 'LinkedField',
                                                                                          name: 'ok',
                                                                                          plural: !1,
                                                                                          selections: [
                                                                                            {
                                                                                              alias: null,
                                                                                              args: null,
                                                                                              concreteType:
                                                                                                'ApiMediaEntityColorPaletteColor',
                                                                                              kind: 'LinkedField',
                                                                                              name: 'palette',
                                                                                              plural: !0,
                                                                                              selections: [Y, ae],
                                                                                              storageKey: null,
                                                                                            },
                                                                                          ],
                                                                                          storageKey: null,
                                                                                        },
                                                                                      ],
                                                                                      storageKey: null,
                                                                                    },
                                                                                  ],
                                                                                  storageKey: null,
                                                                                },
                                                                              ]),
                                                                              storageKey: null,
                                                                            }),
                                                                            (nt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'profile_banner_url',
                                                                              storageKey: null,
                                                                            }),
                                                                            (at = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'ApiMediaExtensions',
                                                                              kind: 'LinkedField',
                                                                              name: 'profile_image_extensions',
                                                                              plural: !1,
                                                                              selections: et,
                                                                              storageKey: null,
                                                                            }),
                                                                            F,
                                                                            (rt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'profile_interstitial_type',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (it = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'protected',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.protected',
                                                                            },
                                                                            S,
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (lt = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'statuses_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.statuses_count',
                                                                            },
                                                                            (ot = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'time_zone',
                                                                              storageKey: null,
                                                                            }),
                                                                            (st = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'translator_type',
                                                                              storageKey: null,
                                                                            }),
                                                                            $,
                                                                            (ct = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'utc_offset',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (dt = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'verified',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.verified',
                                                                            },
                                                                            (ut = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'want_retweets',
                                                                              storageKey: null,
                                                                            }),
                                                                            (pt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'withheld_description',
                                                                              storageKey: null,
                                                                            }),
                                                                            (mt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'UserEntities',
                                                                              kind: 'LinkedField',
                                                                              name: 'withheld_entities',
                                                                              plural: !1,
                                                                              selections: Me,
                                                                              storageKey: null,
                                                                            }),
                                                                            (gt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'withheld_in_countries',
                                                                              storageKey: null,
                                                                            }),
                                                                            (ht = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'withheld_scope',
                                                                              storageKey: null,
                                                                            }),
                                                                          ],
                                                                          storageKey: null,
                                                                        },
                                                                        action: 'THROW',
                                                                        path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy',
                                                                      },
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [
                                                                          p,
                                                                          (vt = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'professional_type',
                                                                            storageKey: null,
                                                                          }),
                                                                          (ft = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'BusinessCategory',
                                                                            kind: 'LinkedField',
                                                                            name: 'category',
                                                                            plural: !0,
                                                                            selections: [
                                                                              m,
                                                                              k,
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'display',
                                                                                storageKey: null,
                                                                              },
                                                                            ],
                                                                            storageKey: null,
                                                                          }),
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      (yt = {
                                                                        condition: 'withSafetyModeUserFields',
                                                                        kind: 'Condition',
                                                                        passingValue: !0,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'smart_blocked_by',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'smart_blocking',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'smart_blocking_expiration',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                      }),
                                                                      (_t = {
                                                                        condition: 'withSuperFollowsUserFields',
                                                                        kind: 'Condition',
                                                                        passingValue: !0,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'super_follow_eligible',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'super_followed_by',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'super_following',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                      }),
                                                                    ],
                                                                    storageKey: null,
                                                                  },
                                                                ],
                                                                storageKey: null,
                                                              },
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        type: 'DMCardAttachment',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: 'LinkedField',
                                                    name: 'result',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          m,
                                                          p,
                                                          {
                                                            kind: 'RequiredField',
                                                            field: E,
                                                            action: 'THROW',
                                                            path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.recipient_results.result.legacy',
                                                          },
                                                        ],
                                                        type: 'User',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: 'LinkedField',
                                                    name: 'result',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          m,
                                                          p,
                                                          {
                                                            kind: 'RequiredField',
                                                            field: E,
                                                            action: 'THROW',
                                                            path: 'dm_conversation_by_rest_id.legacy_conversation_slice.items.dm_event.legacy.event_detail.dm.sender_results.result.legacy',
                                                          },
                                                        ],
                                                        type: 'User',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'DMEventSlice',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: [a, r, i, l, c, s, o],
            kind: 'Operation',
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: d,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: u,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      V,
                      { kind: 'TypeDiscriminator', abstractKey: '__isDMEventSliceResult' },
                      {
                        kind: 'InlineFragment',
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'DMEventItem',
                            kind: 'LinkedField',
                            name: 'items',
                            plural: !0,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  p,
                                  m,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      g,
                                      h,
                                      v,
                                      f,
                                      y,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          m,
                                          p,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              _,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  _,
                                                  b,
                                                  k,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (St = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          V,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              m,
                                                              p,
                                                              E,
                                                              (bt = {
                                                                alias: null,
                                                                args: null,
                                                                filters: null,
                                                                handle: 'defaultScalars',
                                                                key: '',
                                                                kind: 'LinkedHandle',
                                                                name: 'legacy',
                                                              }),
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      (kt = {
                                                        alias: null,
                                                        args: null,
                                                        filters: null,
                                                        handle: 'user',
                                                        key: '',
                                                        kind: 'LinkedHandle',
                                                        name: 'result',
                                                      }),
                                                    ]),
                                                    storageKey: null,
                                                  },
                                                  h,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: St,
                                                    storageKey: null,
                                                  },
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'ApiMedia',
                                                    kind: 'LinkedField',
                                                    name: 'avatar',
                                                    plural: !1,
                                                    selections: [
                                                      m,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [V, w],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ParticipantConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'participants_metadata',
                                                plural: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'user_results',
                                                    plural: !1,
                                                    selections: [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          V,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [m, p, A, bt],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      kt,
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  I,
                                                  O,
                                                  L,
                                                ],
                                                storageKey: null,
                                              },
                                              M,
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMEventDetail',
                                        kind: 'LinkedField',
                                        name: 'event_detail',
                                        plural: !1,
                                        selections: [
                                          D,
                                          P,
                                          K,
                                          B,
                                          j,
                                          k,
                                          N,
                                          U,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: St,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: St,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: St,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'DirectMessageInfo',
                                            kind: 'LinkedField',
                                            name: 'dm',
                                            plural: !1,
                                            selections: [
                                              W,
                                              m,
                                              H,
                                              {
                                                condition: 'withAttachments',
                                                kind: 'Condition',
                                                passingValue: !0,
                                                selections: [
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: null,
                                                    kind: 'LinkedField',
                                                    name: 'attachments',
                                                    plural: !0,
                                                    selections: [
                                                      V,
                                                      te,
                                                      {
                                                        kind: 'InlineFragment',
                                                        selections: [
                                                          {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: 'Card',
                                                            kind: 'LinkedField',
                                                            name: 'card',
                                                            plural: !1,
                                                            selections: [
                                                              p,
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'LegacyCard',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  re,
                                                                  ie,
                                                                  k,
                                                                  $,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'User',
                                                                    kind: 'LinkedField',
                                                                    name: 'user_refs',
                                                                    plural: !0,
                                                                    selections: [
                                                                      m,
                                                                      p,
                                                                      {
                                                                        alias: 'affiliates_highlighted_label',
                                                                        args: null,
                                                                        concreteType: 'HighlightedUserLabelResponse',
                                                                        kind: 'LinkedField',
                                                                        name: 'identity_profile_labels_highlighted_label',
                                                                        plural: !1,
                                                                        selections: [
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'HighlightedUserLabel',
                                                                            kind: 'LinkedField',
                                                                            name: 'label',
                                                                            plural: !1,
                                                                            selections: [
                                                                              oe,
                                                                              se,
                                                                              ce,
                                                                              {
                                                                                alias: 'longDescription',
                                                                                args: null,
                                                                                concreteType: 'TimelineRichText',
                                                                                kind: 'LinkedField',
                                                                                name: 'long_description',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  de,
                                                                                  ue,
                                                                                  H,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType:
                                                                                      'TimelineRichTextEntity',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'entities',
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                      pe,
                                                                                      me,
                                                                                      ge,
                                                                                      {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: 'LinkedField',
                                                                                        name: 'ref',
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                          V,
                                                                                          {
                                                                                            kind: 'TypeDiscriminator',
                                                                                            abstractKey:
                                                                                              '__isTimelineReferenceObject',
                                                                                          },
                                                                                          he,
                                                                                          fe,
                                                                                          ye,
                                                                                          _e,
                                                                                          be,
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType:
                                                                                                  'UserResults',
                                                                                                kind: 'LinkedField',
                                                                                                name: 'user_results',
                                                                                                plural: !1,
                                                                                                selections: (Et = [
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: null,
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'result',
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                      V,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          ke,
                                                                                                          bt,
                                                                                                          p,
                                                                                                          m,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      Se,
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                ]),
                                                                                                storageKey: null,
                                                                                              },
                                                                                            ],
                                                                                            type: 'TimelineRichTextUser',
                                                                                            abstractKey: null,
                                                                                          },
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              S,
                                                                                              {
                                                                                                alias:
                                                                                                  'mention_results',
                                                                                                args: null,
                                                                                                concreteType:
                                                                                                  'UserResults',
                                                                                                kind: 'LinkedField',
                                                                                                name: 'user_results',
                                                                                                plural: !1,
                                                                                                selections: Et,
                                                                                                storageKey: null,
                                                                                              },
                                                                                            ],
                                                                                            type: 'TimelineRichTextMention',
                                                                                            abstractKey: null,
                                                                                          },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                      },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                  },
                                                                                ],
                                                                                storageKey: null,
                                                                              },
                                                                              Ee,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      Ce,
                                                                      Te,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiUser',
                                                                        kind: 'LinkedField',
                                                                        name: 'legacy',
                                                                        plural: !1,
                                                                        selections: [
                                                                          Re,
                                                                          we,
                                                                          xe,
                                                                          Fe,
                                                                          Ae,
                                                                          Ie,
                                                                          Oe,
                                                                          ce,
                                                                          De,
                                                                          Pe,
                                                                          Ke,
                                                                          Be,
                                                                          je,
                                                                          Ne,
                                                                          Ue,
                                                                          We,
                                                                          He,
                                                                          Ve,
                                                                          qe,
                                                                          ze,
                                                                          Ge,
                                                                          Ye,
                                                                          Qe,
                                                                          k,
                                                                          Xe,
                                                                          Je,
                                                                          Ze,
                                                                          $e,
                                                                          tt,
                                                                          nt,
                                                                          at,
                                                                          F,
                                                                          rt,
                                                                          it,
                                                                          S,
                                                                          lt,
                                                                          ot,
                                                                          st,
                                                                          $,
                                                                          ct,
                                                                          dt,
                                                                          ut,
                                                                          pt,
                                                                          mt,
                                                                          gt,
                                                                          ht,
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      bt,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [p, vt, ft, m],
                                                                        storageKey: null,
                                                                      },
                                                                      yt,
                                                                      _t,
                                                                    ],
                                                                    storageKey: null,
                                                                  },
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    filters: null,
                                                                    handle: 'user',
                                                                    key: '',
                                                                    kind: 'LinkedHandle',
                                                                    name: 'user_refs',
                                                                    handleArgs: [
                                                                      { kind: 'Literal', name: 'isPlural', value: !0 },
                                                                    ],
                                                                  },
                                                                ],
                                                                storageKey: null,
                                                              },
                                                              m,
                                                            ],
                                                            storageKey: null,
                                                          },
                                                        ],
                                                        type: 'DMCardAttachment',
                                                        abstractKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                ],
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: St,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: St,
                                                storageKey: null,
                                              },
                                            ],
                                            storageKey: null,
                                          },
                                        ],
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        type: 'DMEventSlice',
                        abstractKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: u,
                    filters: ['next_cursor', 'previous_cursor'],
                    handle: 'slice',
                    key: 'evolutionDmConversationTimelineQuery_legacy_conversation_slice',
                    kind: 'LinkedHandle',
                    name: 'legacy_conversation_slice',
                  },
                  m,
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'QGW9dau2541a04uLw7qycA',
            metadata: { sliceInfoPath: ['dm_conversation_by_rest_id', 'legacy_conversation_slice', 'slice_info'] },
            name: 'evolutionDmConversationTimelineQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(Ct.hash = 'd07206d5b39d9e3de615f7f59f505da7'), (e.exports = Ct)
    },
    H4nC: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('MWbm'),
        s = n('rHpw'),
        c = n('t62R'),
        d = n('4n2h'),
        u = s.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        p = l.a.d84b485d,
        m = l.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          a = e.isSelected,
          i = void 0 !== a && a,
          l = e.unread,
          s = void 0 !== l && l,
          g = 'follow' === t.reason ? p : m,
          h = Object(d.b)(s),
          v = Object(d.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: v, weight: h }, g)
          : r.a.createElement(
              o.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: v, size: 'subtext2', weight: h }, g),
            )
      }
    },
    'I2k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('k49u'),
        l = n('lRnM'),
        o = n('LVU8'),
        s = function (e) {
          return r()({}, i.a.ClientNotPermitted, {
            customAction: function () {
              return Object(o.d)('/messages/', { statusCode: 401 }), Object(l.v)(e)
            },
          })
        }
    },
    J2UM: function (e, t, n) {
      'use strict'
      var a = n('0JOx')
      t.a = function () {
        return Object(a.h)().then(function (e) {
          return e.inputDetect
        })
      }
    },
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return f
      }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return _
        }),
        n.d(t, 'b', function () {
          return b
        }),
        n.d(t, 'f', function () {
          return k
        }),
        n.d(t, 'a', function () {
          return S
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        l = n('dWxr'),
        o = n.n(l),
        s = n('OiMc'),
        c = n('hHEM'),
        d = n('rHpw'),
        u = n('aITJ'),
        p = n('IZ3v'),
        m = function (e, t) {
          for (var n = o()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        g = { clipPath: 'circle(0% at center)' },
        h = function (e, t, n) {
          e.findEntityRanges(function (e) {
            var t = e.getEntity(),
              a = t ? n.getEntity(t) : null
            return !!a && 'LINK' === a.getType()
          }, t)
        },
        v = function (e) {
          return function (t) {
            if (!t.entityKey) return null
            var n = t.children,
              a = t.contentState.getEntity(t.entityKey).getData().url
            return r.a.createElement(
              s.a,
              { animationDuration: 'normal', renderContent: e(n, a), withArrow: !0 },
              r.a.createElement(i.b, { color: 'text', withInteractiveStyling: !0, withUnderline: !0 }, n),
            )
          }
        },
        f = function (e) {
          return { strategy: h, component: v(e) }
        },
        y = {
          strategy: h,
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        _ = {
          strategy: m,
          component: function (e) {
            var t = o()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(p.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(p.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        b = {
          strategy: m,
          component: function (e) {
            return r.a.createElement('span', { style: { color: d.a.theme.colors.link } }, e.children)
          },
        },
        k = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== c.a.TWEMOJI_ENTITY_TYPE)
            }, t)
          },
          component: function (e) {
            var t = e.children,
              n = e.contentState,
              a = e.entityKey,
              i = (a && n.getEntity(a)) || {}
            return !(u.b.isFirefox() && u.b.firefoxVersion() < 49)
              ? r.a.Children.map(t, function (e) {
                  var t,
                    n = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: g }, e)
                    })[0]
                  return r.a.cloneElement(
                    r.a.createElement('span', null),
                    {
                      style:
                        ((t = (i.data && i.data.url) || ''),
                        {
                          backgroundImage: 'url("'.concat(t, '")'),
                          backgroundSize: '1em 1em',
                          padding: '0.15em',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          WebkitTextFillColor: 'transparent',
                        }),
                    },
                    n,
                  )
                })
              : t
          },
        },
        S = {
          strategy: function (e, t) {
            var n = (function (e, t, n) {
              for (var a, r, i = t.getText(); (a = e.exec(i)); ) n((r = a.index), r + a[0].length)
            })(/\r/g, e, t)
            if (n) return t(n, n + 1)
          },
          component: function () {
            return '\n'
          },
        }
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('VrFO'),
        l = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        g = n.n(m),
        h = n('KEM+'),
        v = n.n(h),
        f = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        _ = n.n(y),
        b = n('HPNB'),
        k = n('VAZu'),
        S = n('wiP2'),
        E = n('Es6L'),
        C = n('yiKp'),
        T = n.n(C),
        R = n('rHpw'),
        w = R.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: T()(T()({}, R.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        x = n('MWbm'),
        F = n('yw4N'),
        A = n('TnY3'),
        I = n('cHvH'),
        O = n('3xLC'),
        L = [
          'appBarStyle',
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        M = (function (e) {
          p()(n, e)
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      x.a,
                      { style: w.fill },
                      _.a.createElement(
                        F.a,
                        { style: w.viewportView },
                        e._renderInlineNav({ isTwoColumnLayout: !0 }),
                        t,
                      ),
                    )
                  : t
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return _.a.createElement(I.a, null, function (t) {
                    var n = t.windowWidth
                    return b.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = (e.appBarStyle, e.children),
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, L))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    Object(E.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : _.a.createElement(S.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    !e && this._renderInlineNav({ isTwoColumnLayout: !0 }),
                    this._renderChildren(),
                  )
                },
              },
              {
                key: '_renderInlineNav',
                value: function (e) {
                  var t = e.isTwoColumnLayout,
                    n = this.props,
                    a = n.SideNavButton,
                    r = n.TabBar,
                    i = n.TeamsSwitcher,
                    l = n.appBarStyle,
                    o = n.backLocation,
                    s = n.documentTitle,
                    c = n.headerless,
                    d = n.history,
                    u = n.leftControl,
                    p = n.middleControl,
                    m = n.onBackClick,
                    g = n.rightControl,
                    h = n.screenType,
                    v = n.searchBoxOptions,
                    y = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    E = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    T = n.title,
                    R = n.titleIconCell,
                    F = n.titleIconCellSize,
                    A = n.withDetailOpen,
                    I = n.withSearchBox,
                    O = n.withTweetButton,
                    L = 'root' === h,
                    M = 'secondaryRoot' === h,
                    D = 'primaryDetail' === h,
                    P = (D && E) || (L && b),
                    K = L || (D && t),
                    B = L ? f.c : D ? f.a : void 0,
                    j = _.a.createElement(
                      x.a,
                      { style: w.appBarContainer },
                      _.a.createElement(k.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: K,
                        history: d,
                        leftControl: u,
                        middleControl: p,
                        onBackClick: m,
                        rightControl: g,
                        secondaryBar: y,
                        style: l,
                        subtitle: P ? C : void 0,
                        title: T,
                        titleDomId: B,
                        titleIconCell: R,
                        titleIconCellSize: F,
                      }),
                    ),
                    N =
                      L || (M && A)
                        ? null
                        : _.a.createElement(S.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: s,
                            headerless: c,
                            middleControl: p,
                            onBackClick: m,
                            rightControl: g,
                            searchBoxOptions: v,
                            subtitle: C,
                            title: T,
                            withSearchBox: I,
                            withTweetButton: O,
                          })
                  return _.a.createElement(_.a.Fragment, null, N, j)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(M, 'contextType', O.a),
        v()(M, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(M)
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('ho0z'), n('ERkP')),
        l = n.n(i),
        o = n('MMRb'),
        s = n('XnpN'),
        c = n('3XMw'),
        d = n.n(c),
        u = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        g = n('t62R'),
        h = n('rHpw'),
        v = n('p9G8'),
        f = d.a.cfd94063,
        y = d.a.b93ba92c,
        _ = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        b = h.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        k = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            a = e.perspective
          if (t) {
            if (t.type === o.CONVERSATION_TYPE.ONE_TO_ONE) {
              var i = Object(s.a)(t, a).map(function (e) {
                return e.user
              })
              return r()(i, 1)[0].name
            }
            return Object(v.a)(t, a)
          }
          var l = _(n)
          return Object(v.b)(l, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          c = void 0 !== i && i,
          d = e.newConversationParticipants,
          h = e.perspective,
          k = e.renderTimestamp,
          S = e.textColor,
          E = void 0 === S ? 'text' : S,
          C = e.textSize,
          T = e.titleWeight,
          R = void 0 === T ? 'bold' : T,
          w = e.withParticipantsCount,
          x = void 0 !== w && w,
          F = e.withScreenName,
          A = void 0 === F || F,
          I = e.withVDLRefresh,
          O = void 0 !== I && I
        if (t) {
          var L = k ? k() : null
          if (t.type === o.CONVERSATION_TYPE.ONE_TO_ONE) {
            var M = Object(s.a)(t, h).map(function (e) {
                return e.user
              }),
              D = r()(M, 1)[0],
              P = l.a.createElement(p.a, {
                color: E,
                isProtected: D.protected,
                isVerified: D.verified,
                name: D.name,
                nameSize: C,
                screenName: D.screen_name,
                weight: R,
                withLink: !1,
                withScreenName: A,
              })
            return (O && !a) || c ? l.a.createElement(m.a, null, P, L) : P
          }
          var K = t.participants.length + (O ? -1 : 0)
          if (a)
            return l.a.createElement(
              m.a,
              { color: E },
              l.a.createElement(
                g.b,
                { color: E, numberOfLines: 1, size: C, style: b.title, weight: R },
                Object(v.a)(t, h, a),
              ),
              O
                ? null
                : l.a.createElement(
                    g.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    f({ peopleCount: K }),
                  ),
            )
          var B = l.a.createElement(
            g.b,
            { color: E, numberOfLines: 1, size: C, weight: R },
            Object(v.a)(t, h, a, O ? 2 : void 0),
          )
          return (O && !a) || c
            ? l.a.createElement(
                u.a,
                { style: b.dmGroup },
                l.a.createElement(m.a, null, B, L),
                x && l.a.createElement(g.b, { color: 'gray700', numberOfLines: 1, size: C }, y({ peopleCount: K })),
              )
            : B
        }
        var j = _(d)
        return l.a.createElement(g.b, { color: E, numberOfLines: 1, size: C, weight: R }, Object(v.b)(j, h))
      }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        l = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        g = n.n(m),
        h = n('KEM+'),
        v = n.n(h),
        f = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(f),
        _ = n('0JOx'),
        b = n('zh9S'),
        k = n('MMRb'),
        S = n('CDB5'),
        E = n('RqPI'),
        C = n('1YZw'),
        T = n('hqKg'),
        R = n('kGix'),
        w = n('AQOc'),
        x = n('UhuB'),
        F = n('pNZL'),
        A = n('G6rE'),
        I = n('oEGd'),
        O = n('X/yg'),
        L = n('0KEI'),
        M = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        P = Object(T.createSelector)(
          k.selectFetchStatus,
          function (e, t) {
            return k.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === R.a.LOADED ? t : e
          },
        ),
        K = Object(T.createSelector)(
          function (e, t) {
            return k.selectEntriesForConversation(e, D(0, t))
          },
          E.r,
          function (e, t) {
            return t ? Object(O.e)(e, t) : void 0
          },
        ),
        B = Object(T.createSelector)(
          function (e, t) {
            return k.selectConversation(e, D(0, t))
          },
          k.selectEntries,
          O.m,
          E.r,
          O.n,
          O.o,
          A.e.selectAll,
          P,
          function (e, t) {
            return S.g(e, D(0, t))
          },
          function (e, t) {
            return S.j(e, D(0, t))
          },
          function (e, t) {
            return S.i(e, D(0, t))
          },
          function (e, t) {
            return S.k(e, D(0, t))
          },
          function (e, t) {
            return S.h(e, D(0, t))
          },
          function (e, t) {
            return S.l(e, D(0, t))
          },
          M.j,
          x.n,
          K,
          M.m,
          function (e, t) {
            var n = D(0, t)
            return k.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, l, o, s, c, d, u, p, m, g, h, v, f, y) {
            var _ = e && e.data
            return {
              conversation: (_ && Object(w.a)(_, t, l)) || void 0,
              dataSaverMode: g,
              draftText: m,
              dtabBarInfo: f,
              fetchStatus: o,
              gifMetadata: p,
              inboxType: y,
              isDmReceiptSettingEnabled: h,
              cardUrl: s,
              isNewGroupConversation: n,
              isUploading: c,
              media: d,
              mediaUploadProgress: u,
              newConversationParticipants: r,
              perspective: a,
              quickReplyOptions: v,
              tweetAttachment: i,
            }
          },
        ),
        j = Object(I.d)(B, function (e) {
          return {
            acceptConversation: k.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return S.a(t, e, n)
              }),
            saveText: S.f,
            addToast: C.b,
            addWelcomeMessageToConversation: k.addWelcomeMessageToConversation,
            cancelUpload: Object(O.a)(e.conversationId),
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationFuture: k.fetchConversationFuture,
            fetchConversationHistoricalSnapshot: k.fetchConversationHistoricalSnapshot,
            fetchConversationHistory: k.fetchConversationHistory,
            fetchConversationIfNeeded: k.fetchConversationIfNeeded,
            fetchInboxIfNeeded: k.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: k.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: b.googleAnalyticsPageView,
            leaveConversation: k.leaveConversation,
            removeMedia: Object(O.b)(e.conversationId),
            removeText: S.d,
            scribeAction: b.scribeAction,
            scribePageImpression: b.scribePageImpression,
            sendMessage: S.m,
            updateConversationReadState: k.updateConversationReadState,
            updateTweetDetailNav: F.b,
            updateTyping: k.updateTyping,
            removeConversation: k.removeConversation,
            popOutConversation: k.popOutConversation,
          }
          var t
        }),
        N = n('I2k/'),
        U = n('4AMG'),
        W = n('uB9N'),
        H = n('htvZ'),
        V = n('v//M'),
        q = n('3XMw'),
        z = n.n(q),
        G = n('UgB4'),
        Y = n('J2UM'),
        Q = n('07FG'),
        X = n('I8M8'),
        J = n('7myi'),
        Z = n('pHkl'),
        $ = n('883S'),
        ee = n('z0MJ'),
        te = n.n(ee),
        ne = n('Es6L'),
        ae = n('LsPn'),
        re = n('sl05'),
        ie = n('GSsg'),
        le = n('ddV6'),
        oe = n.n(le),
        se = (n('ho0z'), n('v6aA')),
        ce = n('EbOo'),
        de = n('rxPX'),
        ue = Object(de.a)().propsFromActions(function () {
          return {
            addToast: C.b,
            block: A.e.block,
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: k.muteDMUser,
            unmuteDMUser: k.unmuteDMUser,
            unblock: A.e.unblock,
          }
        }),
        pe = (n('AQ79'), n('u0B7')),
        me = (n('uFXj'), n('97Jx')),
        ge = n.n(me),
        he = n('tZH3'),
        ve = n('/yvb'),
        fe = n('efqG'),
        ye = z.a.ccf2f24e,
        _e = z.a.ib3fe8a9,
        be = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            l = y.a.createElement(ve.a, ge()({}, i, { accessibilityRole: 'button' }), _e),
            o = y.a.createElement(ve.a, ge()({}, i, { onPress: a }), ye),
            s = y.a.useCallback(
              function (e, t) {
                return y.a.createElement(he.a, {
                  dismiss: e,
                  flatBorders: 'sheet' === t,
                  onBlockClick: n,
                  onReportClick: a,
                  requestorScreenName: r,
                  showBlock: !0,
                  showCancel: 'sheet' === t,
                })
              },
              [n, a, r],
            )
          return t ? o : y.a.createElement(fe.a, { renderContent: s }, l)
        },
        ke = n('MWbm'),
        Se = n('cHvH'),
        Ee = n('rHpw'),
        Ce = function (e) {
          var t = y.a.useContext(se.a),
            n = t.featureSwitches.isTrue('dm_vdl_enabled') && t.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
            a = t.loggedInUserId,
            r = function () {
              return e.onAccept()
            },
            i = function () {
              return e.onBlock()
            },
            l = function () {
              return e.onReport()
            },
            o = function () {
              return e.onLeave()
            }
          return y.a.createElement(Se.a, null, function (t) {
            var s = t.windowWidth <= Ee.a.theme.breakpoints.small
            return y.a.createElement(
              ke.a,
              { style: Te.actionsContainer },
              n &&
                y.a.createElement(
                  ve.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Te.actionFullWidth, Te.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              y.a.createElement(
                ke.a,
                { style: s ? Te.actionFullWidth : [Te.actionHalfWidth, Te.actionMarginRight] },
                y.a.createElement(be, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: l,
                  requestorScreenName: Object(O.j)(e.conversation, a).screenName,
                }),
              ),
              y.a.createElement(
                ve.a,
                {
                  onPress: o,
                  size: 'medium',
                  style: s ? [Te.actionFullWidth, Te.actionMarginTop] : [Te.actionHalfWidth, Te.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                y.a.createElement(
                  ve.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Te.actionFullWidth, Te.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        Te = Ee.a.create(function (e) {
          return {
            actionsContainer: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' },
            actionFullWidth: { width: '100%' },
            actionHalfWidth: { width: 'calc(50% - '.concat(e.spaces.space4, ')') },
            actionMarginRight: { marginRight: e.spaces.space4 },
            actionMarginLeft: { marginLeft: e.spaces.space4 },
            actionMarginTop: { marginTop: e.spaces.space12 },
            actionMarginBottom: { marginBottom: e.spaces.space12 },
          }
        }),
        Re = n('aITJ'),
        we = n('t62R'),
        xe = n('eb3s'),
        Fe = n('vMjK'),
        Ae = n('7JQg'),
        Ie = n('24HD'),
        Oe = n('zCf4'),
        Le = z.a.da878dcf,
        Me = z.a.d96cf7cd,
        De = (z.a.gde6b424, z.a.e308019b, z.a.gf5e9ea6, z.a.hc52446b),
        Pe = z.a.f7e1ad65,
        Ke = { headline: z.a.gdf4b79f, text: z.a.bbf83d83, confirmButtonLabel: z.a.bb1d57b6 },
        Be = Ee.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: '1px',
              paddingVertical: e.spaces.space20,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
            },
            copy: { paddingBottom: e.spaces.space20 },
          }
        }),
        je = Object(Ae.a)({ element: 'untrusted_interstitial' })(
          ue(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = y.a.useContext(se.a),
              l = Object(Oe.f)(),
              o = Object(Oe.g)(),
              s = y.a.useState(!1),
              c = oe()(s, 2),
              d = c[0],
              u = c[1],
              p = y.a.useState(!1),
              m = oe()(p, 2),
              g = m[0],
              h = m[1],
              v = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE }],
                  }
                },
                [t.type],
              ),
              f = y.a.useCallback(
                function (e, t) {
                  n(r()(r()({}, a), {}, { action: e }), t || v())
                },
                [v, n, a],
              )
            y.a.useEffect(
              function () {
                f('impression')
              },
              [f],
            )
            var _,
              b,
              S,
              E,
              C = function () {
                u(!0), h(!1)
              },
              T = function () {
                u(!1)
              },
              R = function () {
                h(!1)
              },
              w = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  l = t.type === k.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = (null == t ? void 0 : t.participants.length) || 0,
                  c = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: s,
                    position: c,
                    inbox_type: Object(O.i)(r),
                    entry_point: Z.c.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: a }), f(l, d), x()
              },
              x = function () {
                var t = e.inboxType
                l.push(Object(O.f)(t))
              },
              F = function () {
                !(function () {
                  var n,
                    a = e.acceptConversation,
                    i = e.conversationId,
                    l = e.inboxType,
                    s = e.scribeAction,
                    c = e.scribeNamespace,
                    d = (null == t ? void 0 : t.participants.length) || 0,
                    u = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (a(i),
                    s(r()(r()({}, c), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE,
                      conversation_participant_count: d,
                      entry_point: Z.c.REQUEST_ACTION_SHEET,
                      inbox_type: Object(O.i)(l),
                      position: u,
                    }))
                })()
              },
              A = function (t) {
                return function () {
                  var n = e.addToast,
                    a = e.block,
                    r = e.createLocalApiErrorHandler
                  h(!1),
                    a(t).then(function () {
                      n({ action: { label: Fe.c, onAction: I(t) }, text: Fe.a })
                    }, r(ce.a)),
                    f('block')
                }
              },
              I = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), f('unblock')
                }
              },
              L = (t && t.type) === k.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                ke.a,
                { style: Be.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    we.b,
                    { style: Be.copy },
                    e ? De : Pe({ senderName: Object(O.j)(t, n).name }),
                  )
                })(L),
                y.a.createElement(Ce, {
                  acceptButtonText: Le,
                  conversation: t,
                  declineButtonText: Me,
                  isGroup: L,
                  onAccept: F,
                  onBlock: function () {
                    u(!1), h(!0)
                  },
                  onLeave: C,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (f('report'), l.push(Object(O.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              Re.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: Me, onLeftClick: C, onRightClick: F, rightText: Le })
                : null,
              d
                ? y.a.createElement(xe.a, {
                    confirmButtonLabel: Ke.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ke.headline,
                    onCancel: T,
                    onConfirm: w,
                    text: Ke.text,
                  })
                : null,
              g
                ? ((_ = i.loggedInUserId),
                  (b = Object(O.j)(t, _)),
                  (S = b.idStr),
                  (E = b.screenName),
                  Object(Ie.j)({ confirmation: Object(Ie.f)(E), onClose: R, handleConfirm: A(S) }))
                : null,
            )
          }),
        ),
        Ne = n('yw4N'),
        Ue = n('rFBM'),
        We = n('mw9i'),
        He = n('jTgF'),
        Ve = n('+d3d'),
        qe = n('mN6z'),
        ze = y.a.createElement(G.a, null),
        Ge = z.a.badb01a0,
        Ye = z.a.e3275464,
        Qe = z.a.d6b11d9c,
        Xe = z.a.i7ca1446,
        Je = function (e) {
          return e && (e.tweet || e.media)
        },
        Ze = function (e) {
          var t,
            n = e.gifMetadata,
            a = void 0 === n ? {} : n,
            r = e.tweetAttachment,
            i = e.media
          return (
            r
              ? (t = { tweet: r })
              : i
              ? i.mediaFile
                ? (t = { media: i })
                : i.externalMediaDetails && (t = { media: i, provider: a.provider, gifUrl: a.url })
              : (t = null),
            t
          )
        },
        $e = (function (e) {
          p()(n, e)
          var t = g()(n)
          function n(e, a) {
            var i
            return (
              l()(this, n),
              (i = t.call(this, e, a)),
              v()(d()(i), '_composer', y.a.createRef()),
              v()(d()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              v()(d()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              v()(d()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              v()(d()(i), '_initialFetch', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.fetchInboxIfNeeded,
                  r = e.fetchUpdatesIfNeeded
                return a()
                  .then(function () {
                    if (t)
                      return i._fetchConversation(t).then(function () {
                        return i._requestWelcomeMessage(t)
                      })
                  })
                  .then(function () {
                    return r()
                  })
                  .catch(n())
                  .finally(function () {
                    i._updatePolling && i._updatePolling.start()
                  })
              }),
              v()(d()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              v()(d()(i), '_leaveConversation', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.leaveConversation)({ conversationId: t }).catch(n({ showToast: !0 }))
              }),
              v()(d()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  a = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    Re.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(a({ showToast: !0 }))
              }),
              v()(d()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.inboxType,
                  r = e.scribeAction
                return t && i._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      y.a.createElement(je, {
                        acceptConversation: i._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: a,
                        leaveConversation: i._leaveConversation,
                        scribeAction: r,
                      })
                  : y.a.createElement(
                      y.a.Fragment,
                      null,
                      i._renderComposerBar(),
                      Re.b.isKaiOS()
                        ? y.a.createElement(ae.a, {
                            leftText: Xe,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Ge,
                          })
                        : null,
                    )
              }),
              v()(d()(i), '_render', function () {
                var e,
                  t,
                  n,
                  a = i.props,
                  r = a.conversation,
                  l = a.conversationId,
                  o = a.drawerHeader,
                  s = a.inboxType,
                  c = a.isWide,
                  d = a.location,
                  u = a.perspective,
                  p = a.scribeNamespace,
                  m = i.state,
                  g = m.attachment,
                  h = m.composerHeight
                return y.a.createElement(
                  H.b,
                  { key: l },
                  y.a.createElement(
                    Ue.a,
                    { allowDragDrop: !Je(g), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    y.a.createElement(
                      Ne.a,
                      {
                        style: [
                          re.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(r) && { paddingBottom: h },
                        ],
                      },
                      u &&
                        r &&
                        (null == d ||
                          null === (e = d.state) ||
                          void 0 === e ||
                          !e.entryPoint ||
                          i.state.hasLoadedSnapshot)
                        ? y.a.createElement(U.a, {
                            conversation: r,
                            drawerHeader: o,
                            inboxType: s,
                            isWide: c,
                            messageSearchEntryId:
                              null == d || null === (t = d.state) || void 0 === t ? void 0 : t.entryPoint,
                            onForwardRequest: i._handleForwardRequest,
                            onHistoryRequest:
                              null != d && null !== (n = d.state) && void 0 !== n && n.entryPoint
                                ? i._handleRelativeHistoryRequest
                                : i._handleHistoryRequest,
                            perspective: u,
                            scribeNamespace: p,
                            shouldScrollToCenter: i.state.shouldScrollToCenter,
                            style: re.a.activity,
                          })
                        : null,
                    ),
                    i._renderActions(),
                  ),
                )
              }),
              v()(d()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(d()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              v()(
                d()(i),
                '_throttleUpdateTyping',
                Object(Ve.a)(
                  function () {
                    var e = i.props,
                      t = e.conversationId,
                      n = e.createLocalApiErrorHandler,
                      a = e.updateTyping
                    t && a({ conversationId: t }).catch(n())
                  },
                  2e3,
                  { trailing: !1 },
                ),
              ),
              v()(
                d()(i),
                '_throttleSaveDraftText',
                Object(Ve.a)(
                  function () {
                    i.props.conversationId && i._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              v()(d()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              v()(d()(i), '_handleForwardRequest', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.createLocalApiErrorHandler,
                  r = e.fetchConversationFuture
                i.setState({ shouldScrollToCenter: !1 }),
                  null != t && t.max_search_entry_id && r({ conversationId: n }).catch(a())
              }),
              v()(d()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(d()(i), '_handleRelativeHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.fetchConversationHistory
                i.setState({ shouldScrollToCenter: !1 }), a({ conversationId: t, isSearch: !0 }).catch(n())
              }),
              v()(d()(i), '_handleSendMessage', function (e, t) {
                var n,
                  a,
                  l = i.props,
                  o = l.addToast,
                  s = l.cardUrl,
                  c = l.conversation,
                  d = l.conversationId,
                  u = l.createLocalApiErrorHandler,
                  p = l.gifMetadata,
                  m = l.history,
                  g = l.location,
                  h = l.newConversationParticipants,
                  v = l.perspective,
                  f = l.scribeAction,
                  y = l.scribeNamespace,
                  _ = l.sendMessage,
                  b = l.tweetAttachment,
                  S = i.state.attachment,
                  E = S && S.media,
                  C = null != c && c.participants ? c.participants.length : 0,
                  T = (null == c ? void 0 : c.type) === k.CONVERSATION_TYPE.GROUP,
                  R = 'unknown'
                if (
                  (e.quickReply ||
                    E ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  R = 'gif'
                else if (s) R = 'card'
                else if (b) R = 'tweet'
                else {
                  var w,
                    x = null == S || null === (w = S.media) || void 0 === w ? void 0 : w.mediaFile,
                    F = null != x && x.isVideo ? 'video' : null != x && x.isGif ? 'gif' : 'photo'
                  R = x ? F : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    f(r()(r()({}, y), {}, { element: R, action: 'send_dm' }), {
                      conversation_id: d,
                      conversation_participant_count: C,
                      conversation_type: T ? Z.j.GROUP : Z.j.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  d
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (a = n.media) &&
                          void 0 !== a &&
                          a.uploading) ||
                        (i.setState({ attachment: null }), m.replace(g.pathname)),
                      _(
                        r()(
                          { senderId: v, cardUrl: s, conversationId: d, text: t, tweetAttachment: b },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            E &&
                            (i._currentComposer && i._currentComposer.clear(),
                            i._currentComposer && i._currentComposer.focus()),
                            i.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((i.setState({ isSending: !1 }), !Object(He.d)(e) || e.code !== X.b.CANCELED))
                            if (Object(He.d)(e)) {
                              var t = Object(He.b)(e, Qe)
                              t && o(t)
                            } else u($.b)(e)
                        }))
                    : (_({
                        senderId: v,
                        recipients:
                          h &&
                          h.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: b,
                      }).then(function (e) {
                        f(r()(r()({}, y), {}, { element: R, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: Z.j.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          m.replace('/messages/'.concat(e))
                      }, u($.b)),
                      Promise.resolve())
                )
              }),
              v()(d()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              v()(d()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(d()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              v()(d()(i), '_handleSaveDraftText', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.saveText
                t && i._currentComposer && n(t, i._currentComposer.value())
              }),
              (i.state = {
                attachment: Ze(e),
                composerHeight: Ee.a.theme.componentDimensions.appBarHeight,
                hasLoadedSnapshot: !1,
                isSending: !1,
                shouldScrollToCenter: !1,
              }),
              i
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.googleAnalyticsPageView,
                    r = n.scribeNamespace,
                    i = n.scribePageImpression,
                    l = n.updateTweetDetailNav
                  return (
                    i(r),
                    l(r),
                    a(r),
                    this._initializePolling({ interval: 3e3 }),
                    this._initializeLivePipeline(),
                    this._focusComposerIfNeeded(),
                    null !== (e = this.props.location) &&
                      void 0 !== e &&
                      null !== (t = e.state) &&
                      void 0 !== t &&
                      t.entryPoint &&
                      this.setState({ shouldScrollToCenter: !0 }),
                    this._initialFetch()
                  )
                },
              },
              {
                key: '_focusComposerIfNeeded',
                value: function () {
                  var e = this
                  te()(function () {
                    return Object(Y.a)().then(function (t) {
                      var n = t.KEYBOARD,
                        a = t.MOUSE,
                        r = t.detectedType,
                        i = e.props.quickReplyOptions
                      ;(r(n) || r(a)) && !i && e._currentComposer && e._currentComposer.focus()
                    })
                  })
                },
              },
              {
                key: '_initializeLivePipeline',
                value: function () {
                  var e = this,
                    t = this.props.conversationId
                  Object(_.h)().then(function (n) {
                    var a = n.LivePipeline
                    t &&
                      a.isSupportedAndReady(e.context.featureSwitches) &&
                      e.context.featureSwitches.isTrue('livepipeline_dm_features_enabled') &&
                      !e._livePipelineSubscription &&
                      ((e._livePipelineSubscription = a
                        .get()
                        .subscribeTopic('/dm_update/'.concat(t), e._handleLivePipelineUpdate)),
                      e._initializePolling({ interval: 1e4 }))
                  })
                },
              },
              {
                key: '_initializePolling',
                value: function (e) {
                  var t = e.interval
                  this._updatePolling && this._updatePolling.stop(),
                    (this._updatePolling = new ie.a(this._fetchUpdatesIfNeeded, { interval: t }))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    a = e.removeConversation,
                    r = (null == t ? void 0 : t.entries) || []
                  this._updatePolling && this._updatePolling.stop(),
                    (this._updatePolling = void 0),
                    this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                    0 === r.length && a(n),
                    1 === r.length && 'welcome_message_create' === r[0].type && a(n)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n,
                    a,
                    r,
                    i,
                    l = this.props,
                    o = l.conversation,
                    s = l.conversationId,
                    c = l.fetchStatus,
                    d = l.isUploading,
                    u = l.location,
                    p = l.quickReplyOptions,
                    m = l.updateConversationReadState
                  ;((null == u || null === (n = u.state) || void 0 === n ? void 0 : n.entryPoint) !==
                    (null === (a = e.location) || void 0 === a || null === (r = a.state) || void 0 === r
                      ? void 0
                      : r.entryPoint) &&
                    s &&
                    this._fetchConversation(s),
                  s !== e.conversationId)
                    ? (s && this._fetchConversation(s),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == o ? void 0 : o.sort_event_id) !==
                        (null === (i = e.conversation) || void 0 === i ? void 0 : i.sort_event_id) && m(s),
                      d || !e.isUploading || p || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === R.a.LOADED && c !== R.a.LOADED && s && this._fetchConversation(s))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(qe.a)(t, n) || this.setState({ attachment: Ze(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    We.a,
                    { style: [re.a.root, Re.b.isKaiOS() && re.a.kaiOSFix] },
                    y.a.createElement(V.a, {
                      fetchStatus: e,
                      onRequestRetry: this._handleInitialFetch,
                      render: this._render,
                    }),
                  )
                },
              },
              {
                key: '_renderComposerBar',
                value: function () {
                  var e = this.props,
                    t = e.addMedia,
                    n = e.cardUrl,
                    a = e.conversation,
                    r = e.conversationId,
                    i = e.dataSaverMode,
                    l = e.draftText,
                    o = e.dtabBarInfo,
                    s = e.history,
                    c = e.isUploading,
                    d = e.mediaUploadProgress,
                    u = e.quickReplyOptions,
                    p = e.removeMedia,
                    m = e.richTextInputContext,
                    g = e.scribeNamespace,
                    h = e.typeaheadWrapper,
                    v = this.state,
                    f = v.attachment,
                    _ = v.isSending,
                    b = this.props.prefillText || l
                  return null != a && a.read_only
                    ? null
                    : y.a.createElement(W.a, {
                        attachment: f,
                        conversationId: r,
                        disabled: c,
                        dtabBarInfo: o,
                        history: s,
                        isCardPreviewTombstoned: Object(Q.a)(n),
                        isSending: _,
                        isUploading: c,
                        key: r,
                        mediaUploadProgress: d,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: i ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof b ? b : void 0,
                        primaryActionIcon: ze,
                        primaryActionLabel: Ye,
                        quickReplyOptions: u,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: m,
                        scribeNamespace: g,
                        typeaheadWrapper: h,
                      })
                },
              },
              {
                key: '_currentComposer',
                get: function () {
                  return this._composer.current
                },
              },
              {
                key: '_fetchConversation',
                value: function (e) {
                  var t,
                    n,
                    a = this,
                    r = this.props,
                    i = r.createLocalApiErrorHandler,
                    l = r.fetchConversationHistoricalSnapshot,
                    o = r.fetchConversationIfNeeded,
                    s = r.location,
                    c = r.updateConversationReadState
                  return null != s && null !== (t = s.state) && void 0 !== t && t.entryPoint
                    ? (this.setState({ hasLoadedSnapshot: !1 }),
                      l({
                        conversationId: e,
                        entryId: null == s || null === (n = s.state) || void 0 === n ? void 0 : n.entryPoint,
                      })
                        .then(function (e) {
                          var t,
                            n,
                            r = !0
                          ;(null == e ||
                          null === (t = e.result) ||
                          void 0 === t ||
                          null === (n = t.conversation_timeline) ||
                          void 0 === n
                            ? void 0
                            : n.status) === k.PAGINATION_STATUS.AT_END && (r = !1),
                            a.setState({ hasLoadedSnapshot: !0, shouldScrollToCenter: r })
                        })
                        .catch(function (e) {
                          return a.setState({ hasLoadedSnapshot: !0 }), i(e)
                        }))
                    : o({ conversationId: e })
                        .then(function () {
                          return c(e)
                        })
                        .catch(i(Object(N.a)(e)))
                },
              },
              {
                key: '_requestWelcomeMessage',
                value: function (e) {
                  var t,
                    n = this.props,
                    a = n.addWelcomeMessageToConversation,
                    r = n.conversation,
                    i = n.createLocalApiErrorHandler,
                    l = n.location,
                    o = l.query.text,
                    s = Array.isArray(l.query.welcome_message_id)
                      ? l.query.welcome_message_id[0]
                      : l.query.welcome_message_id,
                    c = !!this.state.attachment || !(!o || s),
                    d = !r || !r.type || r.type === k.CONVERSATION_TYPE.GROUP,
                    u = r && (null == r || null === (t = r.participants) || void 0 === t ? void 0 : t.length) <= 1
                  return c || d || u ? Promise.resolve() : a(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()($e, 'contextType', se.a), v()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Ae.a)()(j($e))
    },
    RH6X: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        g = n.n(m),
        h = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(h),
        f = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        k = n('GZwR'),
        S = n('zpdM'),
        E = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              g()(s()(e), '_genericWrapperRef', v.a.createRef()),
              g()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  l = t.onTypeaheadStateChange,
                  o = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  d = s.queryContext,
                  u = c && d ? { word: d.word, resultType: d.resultType } : void 0
                return v.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: l,
                    query: u,
                    ref: e._genericWrapperRef,
                    source: o || k.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              g()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              g()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              g()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              g()(s()(e), '_handleInputChange', function (t) {
                if (!Object(b.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  i = f.c(e._getCaret(t), r),
                  l = i.end,
                  o = i.start,
                  s = i.word,
                  c = f.e(s || '', 'compose')
                if ((null == c ? void 0 : c.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === o))
                    e._setQueryContext(void 0)
                  else if (c) {
                    var d = c.q,
                      u = c.result_type
                    e._setQueryContext({ word: d, resultType: u, editorState: t, startIndex: o, endIndex: l })
                  } else e._setQueryContext(void 0)
              }),
              g()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              g()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.editorState,
                    a = t.endIndex,
                    r = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                    l = S.Modifier.replaceText(n.getCurrentContent(), i, e),
                    o = S.EditorState.push(n, l, 'insert-characters'),
                    s = r + e.length,
                    c = o.getSelection().merge({ anchorOffset: s, focusOffset: s })
                  return S.EditorState.forceSelection(o, c)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = E
    },
    RJrc: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('MWbm'),
        s = n('Qwev'),
        c = n('rHpw'),
        d = l.a.ffde2fdb,
        u = c.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.a.createElement(o.a, { style: u.spinner }, r.a.createElement(s.a, { accessibilityLabel: d }))
      }
    },
    Rk1B: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var a = n('RH6X'),
        r = n('hHEM'),
        i = n('keCP')
      t.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: r.a.convertEmojiToEntities,
            element: i.a,
            initEditorState: r.a.initEditorState,
            insertTextAtCursor: r.a.insertTextAtCursor,
          },
          typeaheadWrapper: a.a,
        })
      }
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ isDrawer: !1 })
      t.a = r
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'o', function () {
        return s
      }),
        n.d(t, 'n', function () {
          return c
        }),
        n.d(t, 'm', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'i', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return g
        }),
        n.d(t, 'l', function () {
          return h
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'j', function () {
          return f
        }),
        n.d(t, 'h', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return _
        }),
        n.d(t, 'a', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return k
        }),
        n.d(t, 'e', function () {
          return S
        })
      n('vfdX'), n('z84I'), n('ho0z')
      var a = n('CDB5'),
        r = n('Myq3'),
        i = n('XnpN'),
        l = n('AQ79'),
        o = n('pHkl'),
        s = function (e, t) {
          return t.location && t.location.state && t.location.state.tweetAttachment
        },
        c = function (e, t) {
          return t.location && t.location.state && t.location.state.participants
        },
        d = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        u = function (e) {
          var t = e.message_data,
            n = o.f.UNKNOWN,
            a = (t && t.attachment) || {}
          return (
            a.tweet
              ? (n = o.f.TWEET)
              : a.photo
              ? (n = o.f.PHOTO)
              : a.animated_gif
              ? (n = o.f.GIF)
              : a.video
              ? (n = a.video.audio_only ? o.f.VOICE : o.f.VIDEO)
              : a.card
              ? (n = o.f.CARD)
              : null != t && t.text && (n = o.f.TEXT),
            n
          )
        }
      function p(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function m(e) {
        return e === l.d.SECONDARY ? o.e.REQUEST : e === l.d.TERTIARY ? o.e.LOW_QUALITY : o.e.PRIMARY
      }
      function g(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && g(t)) && !!e.video.audio_only
      }
      function v(e, t, n, a) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: a, scribeNamespace: n },
        }
      }
      function f(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(i.a)(e, t).map(function (e) {
            return e.user
          }),
          a = n && n[0]
        return { name: (a && a.name) || '', screenName: (a && a.screen_name) || '', idStr: (a && a.id_str) || '' }
      }
      var y = function (e) {
          return e === l.d.TERTIARY
            ? 'low_quality_timeline'
            : e === l.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        _ = function (e) {
          return e === l.d.TERTIARY
            ? '/messages/requests/additional'
            : e === l.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        b = function (e) {
          return function () {
            return a.b(e)
          }
        },
        k = function (e) {
          return function (t) {
            return a.c(e, t)
          }
        },
        S = function (e, t) {
          var n = Object(r.a)(e, function (e) {
            return !!e.message_data && e.message_data && e.message_data.recipient_id === t
          })
          return n &&
            n.message_data &&
            n.message_data.quick_reply &&
            n.message_data.quick_reply &&
            'options' === n.message_data.quick_reply.type
            ? n.message_data.quick_reply
            : void 0
        }
    },
    XnpN: function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        l = n.n(i),
        o = (n('2G9S'), n('tQbP'), n('aWyx')),
        s = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        d = function (e, t) {
          return c(e.join_time) - c(t.join_time)
        },
        u = function (e, t) {
          var n = e.user,
            a = t.user
          return Object(s.a)(n.id_str, a.id_str)
        },
        p = function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
            return function (e, n) {
              return (
                t
                  .map(function (t) {
                    return t(e, n)
                  })
                  .filter(function (e) {
                    return !!e
                  })[0] || 0
              )
            }
          })(
            (function (e) {
              return function (t, n) {
                var a = t.user,
                  r = n.user
                switch (e) {
                  case a.id_str:
                    return -1
                  case r.id_str:
                    return 1
                  default:
                    return 0
                }
              }
            })(e),
            d,
            u,
          )
        },
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          a = e.participants,
          i = e.type,
          s = Object(m.a)(a, function (e) {
            return e.user.id_str === t
          }),
          c = l()(s, 2),
          d = c[0],
          u = c[1]
        return u.length ? (i === o.a.GROUP && 1 === u.length ? [].concat(r()(d), r()(u)) : n ? u.sort(p(n)) : u) : d
      }
    },
    Yatk: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('1t7P'), n('jQ/y'), n('ho0z')
      var a = function (e) {
        if (e)
          return {
            blocking: e.blocking,
            can_dm: e.can_dm,
            can_media_tag: e.can_media_tag,
            created_at: e.created_at,
            description: e.description,
            entities: e.entities,
            followed_by: e.followed_by,
            followers_count: e.followers_count,
            following: e.following,
            friends_count: e.friends_count,
            id: e.id,
            id_str: e.id_str,
            name: e.name,
            profile_image_url_https: e.profile_image_url_https,
            protected: e.protected,
            screen_name: e.screen_name,
            verified: e.verified,
          }
      }
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('aWyx'),
        l = n('XnpN'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('aI6n'),
        d = n('rHpw'),
        u = n('TIdA'),
        p = n('A91F'),
        m = n('oSwX'),
        g = n('9Xij'),
        h = n('Znyr'),
        v = n('cm6r'),
        f = n('U+bB'),
        y = n('MWbm'),
        _ = s.a.fd48249b,
        b = d.a.create(function (e) {
          return {
            circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' },
            container: { height: 'auto', width: '100%' },
            itemAccessory: {
              top: -e.spacesPx.space24 + e.spacesPx.space1,
              right: -e.spacesPx.space16 - e.spacesPx.space1,
            },
            userDecoration: {
              fontSize: e.fontSizes.subtext3,
              position: 'absolute',
              backgroundColor: e.colors.gray100,
              marginLeft: e.spaces.space8,
              boxSizing: 'border-box',
              width: e.spaces.space24,
              height: e.spaces.space24,
            },
          }
        }),
        k = d.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            left: { flex: 1 },
            right: {
              flex: 1,
              marginLeft: e.borderWidths.small,
              marginRight: 'calc(-1 * '.concat(e.borderWidths.small, ')'),
            },
          }
        }),
        S = d.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        E = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            y.a,
            { style: k.container },
            r.a.createElement(y.a, { style: k.left }, t),
            r.a.createElement(y.a, { style: k.right }, n),
          )
        },
        C = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            y.a,
            { style: S.container },
            r.a.createElement(y.a, { style: S.top }, n),
            r.a.createElement(y.a, { style: S.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return r.a.createElement(
              y.a,
              { key: t.id_str, style: b.container },
              r.a.createElement(m.default, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  y.a,
                  { key: e.id_str, style: b.container },
                  r.a.createElement(m.default, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(g.a, { ratio: 1 }, r.a.createElement(E, { left: n[1], right: n[0] }))
            var a = r.a.createElement(C, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(E, { left: a, right: i })
          },
          a = e.conversation,
          o = e.link,
          s = e.perspective,
          k = e.withBadge,
          S = a && a.avatar_image_https,
          T = a
            ? Object(l.a)(a, s).map(function (e) {
                return e.user
              })
            : [],
          R = T.slice(0, 3),
          w =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.a.createElement(u.a, {
                    accessibilityLabel: '',
                    aspectMode: p.a.SQUARE,
                    backgroundColor: d.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(a) ||
            (function (e) {
              return e ? r.a.createElement(f.a, { source: e }) : null
            })(S) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(y.a, { style: b.circle }, n(e))
            })(R),
          x =
            o ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, T),
          F = k && null != a && a.participants ? a.participants.length - 1 : 0
        return w
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                g.a,
                { ratio: 1 },
                x ? r.a.createElement(v.a, { interactiveStyles: null, link: x, testID: c.a.conversationAvatar }, w) : w,
              ),
              F
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      y.a,
                      { style: b.itemAccessory },
                      r.a.createElement(h.a, {
                        count: t,
                        standalone: !0,
                        style: b.userDecoration,
                        textColor: 'text',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: _,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: F })
                : null,
            )
          : null
      }
    },
    aI6n: function (e, t, n) {
      'use strict'
      t.a = {
        conversationAvatar: 'DM_Conversation_Avatar',
        newDM: 'NewDM_Button',
        untrustedThumbnail: 'DM_Untrusted_Thumbnail',
      }
    },
    b9JY: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'e', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return l
        }),
        n.d(t, 'c', function () {
          return o
        }),
        n.d(t, 'a', function () {
          return c
        })
      n('vrRf')
      var a = n('aWyx'),
        r = function (e) {
          return e && e.type === a.b.MESSAGE
        },
        i = function (e) {
          return e && e.type === a.b.WELCOME_MESSAGE
        },
        l = function (e) {
          return e && e.type === a.b.TRUST_CONVERSATION
        },
        o = function (e) {
          return e && e.type === a.b.REACTION_CREATE
        },
        s = [
          a.b.CONVERSATION_AVATAR_UPDATE,
          a.b.CONVERSATION_NAME_UPDATE,
          a.b.JOIN_CONVERSATION,
          a.b.PARTICIPANTS_JOIN,
          a.b.PARTICIPANTS_LEAVE,
        ],
        c = function (e) {
          return e && s.indexOf(e.type) > -1
        }
    },
    cOtO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreen', function () {
          return B
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        g = n.n(m),
        h = (n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        v = n.n(h),
        f = n('v6aA'),
        y = (n('WNMA'), n('zh9S')),
        _ = n('MMRb'),
        b = n('CDB5'),
        k = n('RqPI'),
        S = n('hqKg'),
        E = n('AQOc'),
        C = n('z2Pn'),
        T = n('pNZL'),
        R = n('G6rE'),
        w = n('oEGd'),
        x = n('X/yg'),
        F = function (e, t) {
          return t.match.params.conversationId
        },
        A = Object(S.createSelector)(
          function (e, t) {
            return _.selectConversation(e, F(0, t))
          },
          _.selectEntries,
          F,
          x.m,
          k.r,
          x.n,
          x.o,
          R.e.selectAll,
          function (e, t) {
            return b.j(e, F(0, t))
          },
          function (e, t) {
            return b.i(e, F(0, t))
          },
          function (e, t, n, a, r, i, l, o, s, c) {
            var d = e && e.data
            return {
              conversation: (d && Object(E.a)(d, t, o)) || void 0,
              conversationId: n,
              isNewGroupConversation: a,
              isUploading: s,
              media: c,
              newConversationParticipants: i,
              perspective: r,
            }
          },
        ),
        I = Object(w.d)(A, function (e) {
          return {
            cancelUpload: Object(x.a)(e.match.params.conversationId),
            googleAnalyticsPageView: y.googleAnalyticsPageView,
            removeMedia: Object(x.b)(e.match.params.conversationId),
            scribePageImpression: y.scribePageImpression,
            setLastViewedDmInboxPath: C.h,
            updateTweetDetailNav: T.b,
          }
        }),
        O = n('i4Oy'),
        L = n('Oi4X'),
        M = n('qBaR'),
        D = n('7myi'),
        P = n('rHpw'),
        K = n('7JQg'),
        B = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              g()(s()(i), '_composer', v.a.createRef()),
              g()(s()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              g()(s()(i), '_updateLastViewDmInboxPath', function () {
                var e = i.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var l = e.conversationId,
              o = e.history,
              c = e.isNewGroupConversation,
              d = e.location
            return l || c || d.pathname !== window.location.pathname || o.replace({ pathname: '/messages' }), i
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.scribeNamespace,
                    a = e.scribePageImpression,
                    r = e.updateTweetDetailNav
                  a(n), r(n), t(n), this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.props.conversationId !== e.conversationId && this._updateLastViewDmInboxPath()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    a = e.history,
                    r = e.location,
                    i = e.newConversationParticipants,
                    l = e.perspective,
                    o = e.richTextInputContext,
                    s = e.typeaheadWrapper,
                    c = 'string' == typeof r.query.text ? r.query.text : void 0,
                    d = O.a.get('window').width >= P.a.theme.breakpoints.small
                  return v.a.createElement(
                    M.a,
                    { conversation: t, conversationId: n, newConversationParticipants: i, perspective: l },
                    v.a.createElement(L.a, {
                      conversationId: n,
                      history: a,
                      isWide: d,
                      location: r,
                      prefillText: c,
                      richTextInputContext: o,
                      typeaheadWrapper: s,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      g()(B, 'contextType', f.a), g()(B, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: D.a })
      t.default = Object(K.a)({ page: 'messages', section: 'thread' })(I(B))
    },
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, o.default)(e, t)
            .concat((0, l.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, s.default)(n), n
        })
      var r = a(n('EW8Q')),
        i = a(n('yyPN')),
        l = a(n('YXS5')),
        o = a(n('vwfs')),
        s = a(n('c8jd'))
      e.exports = t.default
    },
    'ejT/': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'a', function () {
          return r
        })
      var a = function (e) {
          return { id: e, distanceToViewportTop: 0 }
        },
        r = function (e) {
          return { id: e, distanceToViewportBottom: 0 }
        }
    },
    g54k: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return s
      })
      n('KOtZ'), n('7x/C')
      var a = n('hqKg'),
        r = (n('LW0h'), n('2G9S'), n('z84I'), n('s1N3')),
        i = function (e) {
          var t = e.sender_id,
            n = e.by_user_id,
            a = e.participants,
            i = void 0 === a ? [] : a
          return Object(r.a)(
            i
              .map(function (e) {
                return e.user_id
              })
              .concat([t, n])
              .filter(Boolean),
          )
        },
        l = n('G6rE'),
        o = n('oEGd'),
        s = function (e, t) {
          return {
            users: i(t).reduce(function (t, n) {
              return (t[n] = e[n]), t
            }, {}),
          }
        },
        c = Object(a.createSelector)(
          l.e.selectAll,
          function (e, t) {
            return t.entry
          },
          s,
        )
      t.a = Object(o.c)(c)
    },
    gbD7: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return l
        }),
        n.d(t, 'd', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return s
        })
      n('ERkP')
      var a = n('aWyx'),
        r = function (e, t) {
          return {
            entry: { id: t, time: '', type: e },
            isActive: !1,
            isRapidFire: !1,
            isFirstRapidFire: !1,
            isLastRapidFire: !1,
            type: e,
          }
        },
        i = r(a.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        l = 'typingIndicator',
        o = r(a.b.TYPING_INDICATOR, l),
        s = r(a.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ')
      var a = n('z4Oz'),
        r = n('LQrL'),
        i = n('zpdM'),
        l = function (e, t) {
          for (var n = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              i = r.getText().length
            if (n + i >= t) return { blockKey: r.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        o = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            l = t.blockKey,
            o = void 0 === l ? r.key : l,
            s = t.offset,
            c = void 0 === s ? r.getText().length : s,
            d = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: o, focusOffset: c, isBackward: !1 }),
            u = i.Modifier.removeInlineStyle(e.getCurrentContent(), d, 'overflow')
          return i.EditorState.push(e, u, 'change-inline-style')
        },
        s = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            l = r.getLastBlock(),
            o = c(r, n, a)
          if (n) {
            var s = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: o,
                  focusKey: l.key,
                  focusOffset: l.getText().length,
                  isBackward: !1,
                }),
              d = i.Modifier.applyInlineStyle(r, s, 'overflow')
            return i.EditorState.push(e, d, 'change-inline-style')
          }
          return e
        },
        c = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            a = n,
            r = e.getBlockForKey(t)
          if (r) {
            var i = r.getEntityAt(n)
            if (void 0 !== i) {
              var l = i && e.getEntity(i),
                o = l && l.data && l.data.id
              if (void 0 !== o)
                for (var s = n - 1; s >= 0; s--) {
                  var c = r.getEntityAt(s),
                    d = c && e.getEntity(c)
                  if (!d || !d.data || d.data.id !== o) {
                    a = s + 1
                    break
                  }
                }
            }
            return a
          }
        },
        d = 'TWEMOJI',
        u = 'IMMUTABLE'
      t.a = {
        convertEmojiToEntities: function (e) {
          var t = i.EditorState.set(e, { allowUndo: !1 }),
            n = t.getCurrentContent(),
            r = 0
          return (
            n.getBlocksAsArray().forEach(function (e) {
              a.a.getTwemojiEntities(e.getText()).forEach(function (a) {
                if (2 === (a.indices && a.indices.length)) {
                  var l = n.createEntity(d, u, { url: a.url || null, id: r })
                  r += 1
                  var o = l.getLastCreatedEntityKey(),
                    s = e.getKey(),
                    c = t
                      .getSelection()
                      .merge({
                        anchorKey: s,
                        anchorOffset: a.indices[0],
                        focusKey: s,
                        focusOffset: a.indices[1],
                        isBackward: !1,
                      })
                  n = i.Modifier.applyEntity(l, c, o)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: l,
        initEditorState: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [r.b, r.f, r.a] },
            n = t.decorators,
            a = i.EditorState.createWithContent(
              'string' == typeof e ? i.ContentState.createFromText(e) : Object(i.convertFromRaw)(e),
              new i.CompositeDecorator(n),
            )
          return i.EditorState.moveSelectionToEnd(a)
        },
        insertTextAtCursor: function (e, t) {
          var n = e.getCurrentContent(),
            a = e.getSelection(),
            r = i.Modifier.insertText(n, a, t)
          return i.EditorState.push(e, r, 'insert-characters')
        },
        TWEMOJI_ENTITY_TYPE: d,
        updateOverflowStyle: function (e, t) {
          var n,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.getSelection(),
            c = i.EditorState.set(e, { allowUndo: !1 }),
            d = e.getCurrentContent().getSelectionBefore(),
            u = e.getCurrentContent().getSelectionAfter(),
            p = e.getCurrentContent(),
            m = p.getBlocksAsArray(),
            g = 'number' == typeof t && t > -1,
            h = g ? l(m, t) : Object.freeze({})
          if ((a && ((c = o(c, h)), (n = !0)), g && ((c = s(c, h)), (n = !0)), n)) {
            var v = (c = i.EditorState.forceSelection(c, r)).getCurrentContent()
            ;(v = (v = v.set('selectionBefore', d)).set('selectionAfter', u)),
              (c = i.EditorState.set(e, { allowUndo: !0, currentContent: v }))
          }
          return c
        },
      }
    },
    htvZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return k
      }),
        n.d(t, 'a', function () {
          return S
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        l = n('ddV6'),
        o = n.n(l),
        s = n('8W85')
      function c() {
        var e = r.a.useContext(S),
          t = o()(e.activeVoiceMessage, 2),
          n = t[0],
          a = t[1],
          i = o()(e.playerApi, 2)[1],
          l = o()(e.playerState, 2)[1]
        var c = {
          media: o()(n, 2)[1],
          onEnded: function () {
            a([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: l,
        }
        return r.a.createElement(s.a, c)
      }
      var d = n('X/yg'),
        u = n('yiKp'),
        p = n.n(u),
        m = (n('849X'), n('TJCb'), n('89tF')),
        g = n('k89r')
      function h(e) {
        var t,
          n,
          a,
          i,
          l,
          o =
            ((t = r.a.useState(y.activeVoiceMessage)),
            (n = r.a.useState(y.playerApi)),
            (a = r.a.useState(y.playerState)),
            (l = Object(g.a)()),
            (i = r.a.useMemo(
              function () {
                var e = { page: 'messages', section: 'thread', component: 'message', element: 'voice' }
                function t(t) {
                  var n = t.action,
                    a = t.component,
                    r = void 0 === a ? e.component : a,
                    i = e.element
                  return { page: e.page, section: e.section, component: r, element: i, action: n }
                }
                var n = function (e, n) {
                  return n
                    ? n.data
                      ? l.scribe(p()(p()({}, t({ action: e })), {}, { data: n.data }))
                      : l.scribe(p()({}, t({ action: e, component: f(n) })))
                    : l.scribe(p()({}, t({ action: e })))
                }
                return {
                  impression: function (e) {
                    return n('impression', e)
                  },
                  report: function (e) {
                    return n('report', e)
                  },
                  play: function (e) {
                    return n('play', e)
                  },
                  pause: function () {
                    return n('pause')
                  },
                  complete: function () {
                    return n('complete')
                  },
                }
              },
              [l],
            )),
            { activeVoiceMessage: t, playerApi: n, playerState: a, scribeAction: i })
        return r.a.createElement(_.Provider, { value: o }, e.children)
      }
      var v = {
        Timelines: Object(m.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function f(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? v.Timelines.inbox_timeline
          : t
          ? v.Timelines.low_quality_timeline
          : v.Timelines.requests_timeline
      }
      var y = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        _ = r.a.createContext({
          activeVoiceMessage: [y.activeVoiceMessage, b],
          playerApi: [y.playerApi, b],
          playerState: [y.playerState, b],
          scribeAction: null,
        })
      function b() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function k(e) {
        var t = r.a.useContext(i.a).featureSwitches
        return Object(d.k)(t) ? r.a.createElement(h, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = _
    },
    keCP: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        l = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        g = n.n(m),
        h = n('97Jx'),
        v = n.n(h),
        f =
          (n('2G9S'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('KqXw'),
          n('MvUL'),
          n('z84I'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('KOtZ'),
          n('SV7d')),
        y = n('rHpw'),
        _ = 'singleline',
        b = function (e) {
          var t = e.placeholderTextColor,
            n = void 0 === t ? y.a.theme.colors.gray700 : t,
            a = y.a.theme.spaces.space2
          return '\n         .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n            height: inherit;\n            max-height: inherit;\n            min-height: inherit;\n            overflow: auto;\n            text-align: initial;\n        }\n\n        .public-DraftEditor-content[contenteditable=true] {\n            -webkit-user-modify: read-write-plaintext-only\n        }\n\n        .DraftEditor-root {\n            width: 100%;\n            position: relative;\n            -webkit-user-select: none;\n        }\n\n        .DraftEditor-editorContainer {\n            background-color: rgba(255, 255, 255, 0);\n            border-left: .1px solid transparent;\n            position: relative;\n            z-index: 1;\n        }\n\n        .public-DraftEditor-block {\n            position: relative;\n        }\n\n        .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n            text-align: left;\n        }\n\n        .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n            left: 0;\n            text-align: left;\n        }\n\n        .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n            text-align: center\n        }\n\n        .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n            margin: 0 auto;\n            text-align: center;\n            width: 100%\n        }\n\n        .DraftEditor-alignRight .public-DraftStyleDefault-block {\n            text-align: right;\n        }\n\n        .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n            right: 0;\n            text-align: right;\n        }\n\n        .public-DraftEditorPlaceholder-root {\n            color: '
            .concat(n, ';\n            padding-bottom: ')
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ';\n            position: absolute;\n            z-index: 1;\n        }\n\n        .public-DraftEditorPlaceholder-inner {\n            user-select: none;\n            -webkit-user-select: none;\n        }\n\n        .public-DraftEditorPlaceholder-hasFocus {\n            color: ',
            )
            .concat(
              n,
              ';\n        }\n\n        .DraftEditorPlaceholder-hidden {\n            display: none;\n        }\n\n        .public-DraftStyleDefault-block {\n            overflow:hidden;\n            padding-bottom: ',
            )
            .concat(a, ';\n            padding-top: ')
            .concat(
              a,
              ";\n            position: relative;\n            white-space: pre-wrap;\n        }\n\n        /* Only a handful of CSS rules work on br tags and user-select isn't one */\n        div:only-child > .public-DraftStyleDefault-block br::selection {\n            background: transparent;\n        }\n\n        /*\n           Safari doesn't let you change ::selection on br elements,\n           but Chrome needs it here\n        */\n        div:only-child > .public-DraftStyleDefault-block::selection {\n            background: transparent;\n        }\n\n        .public-DraftStyleDefault-ltr {\n            direction: ltr;\n            text-align: left;\n        }\n\n        .public-DraftStyleDefault-rtl {\n            direction: rtl;\n            text-align: right;\n        }\n\n        .",
            )
            .concat(
              _,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              _,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        k = n('ERkP'),
        S = n.n(k),
        E = n('k/Ka'),
        C = n('PxJJ'),
        T = n('w9LO'),
        R = n('fs1G'),
        w = n('zpdM'),
        x = function (e) {
          return Object(E.a)('div', e)
        },
        F = !1,
        A =
          ((t.a = S.a.forwardRef(function (e, t) {
            var n = f.d()
            return S.a.createElement(
              A,
              v()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                g()(s()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return w.EditorState.acceptSelection(
                    t,
                    new w.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                g()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return w.EditorState.forceSelection(t, t.getSelection())
                }),
                g()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(w.EditorState.moveFocusToEnd(a))
                    : null == r || r(w.EditorState.moveSelectionToEnd(a))
                }),
                g()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = b({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                g()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                g()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                g()(s()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                g()(s()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                g()(s()(e), 'clear', function () {}),
                g()(s()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                g()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                g()(s()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                g()(s()(e), '_removeNewLines', function (e, t) {
                  return w.EditorState.push(
                    t,
                    w.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                g()(s()(e), '_removeInvalidStylesFromContentBlock', function (t) {
                  var n = e.props.pastedStylesAllowlist,
                    a = t.getCharacterList().map(function (e) {
                      return e
                        .getStyle()
                        .filter(function (e) {
                          return !(null != n && n.includes(e))
                        })
                        .reduce(function (e, t) {
                          return w.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', a)
                }),
                g()(s()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(w.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      l =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (l) {
                      var o = w.ContentState.createFromBlockArray(l, null == r ? void 0 : r.entityMap)
                      return w.EditorState.push(
                        n,
                        w.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), o.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                g()(s()(e), '_onPastedText', function (t, n, a) {
                  var r = e.props,
                    i = r.multiline,
                    l = r.onChange,
                    o = r.pastedStylesAllowlist
                  if (l) {
                    if (!i) return l(e._removeNewLines(t, a)), 'handled'
                    if (null != o && o.length) {
                      var s = e._removeInvalidStyles(n, a)
                      if (s) return l(s), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                g()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = w.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(w.getDefaultKeyBinding)(t)
                }),
                g()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                g()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                g()(s()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
                    i = t.numberOfLines,
                    l = t.withMaxHeight,
                    o =
                      y.a.theme.lineHeightsPx[
                        {
                          small: 'subtext2',
                          normal: 'body',
                          large: 'headline1',
                          subtext2: 'subtext2',
                          body: 'body',
                          headline1: 'headline1',
                        }[n]
                      ],
                    s = (r && i ? i : 1) * o
                  return l ? { minHeight: s, maxHeight: (r && a ? a : 1) * o } : { minHeight: s }
                }),
                e
              )
            }
            return (
              l()(
                n,
                [
                  {
                    key: 'componentDidMount',
                    value: function () {
                      var e = this.props,
                        t = e.onChange,
                        n = e.positionCursorAtBeginning
                      e.positionCursorAtEnd
                        ? this._setFocusToEnd()
                        : n
                        ? null == t || t(this._setFocusToStart())
                        : this.props.autoFocus && this.focus(),
                        F || (this._setDraftJsStyle(), (F = !0))
                    },
                  },
                  {
                    key: 'componentDidCatch',
                    value: function (e) {
                      C.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
                    },
                  },
                  {
                    key: 'render',
                    value: function () {
                      var e,
                        t = this.props,
                        n = t.ariaActiveDescendant,
                        a = t.ariaAutocomplete,
                        r = t.ariaControls,
                        i = t.ariaLabel,
                        l = t.blockRenderMap,
                        o = t.blockRendererFn,
                        s = t.editorState,
                        c = t.handleReturn,
                        d = t.multiline,
                        u = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        h = t.onKeyPress,
                        v = t.onKeyUp,
                        f = t.pastedStylesAllowlist,
                        b = t.placeholder,
                        k = t.spellCheck,
                        E = t.style,
                        C = t.testID
                      return S.a.createElement(
                        x,
                        {
                          className: d ? void 0 : _,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), E],
                        },
                        S.a.createElement(w.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: d,
                          blockRenderMap: l,
                          blockRendererFn: o,
                          customAttrs:
                            ((e = {}),
                            g()(e, T.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            g()(e, 'onKeyPress', h),
                            g()(e, 'onKeyUp', v),
                            e),
                          customStyleMap: I(y.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: d ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: u,
                          onFocus: p,
                          onKeyDown: m,
                          placeholder: b,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== k,
                          stripPastedStyles: !(d && null != f && f.length),
                          tabIndex: 0,
                          webDriverTestID: C,
                        }),
                      )
                    },
                  },
                ],
                [
                  {
                    key: 'getDerivedStateFromError',
                    value: function () {
                      return {}
                    },
                  },
                ],
              ),
              n
            )
          })(S.a.Component))
      g()(A, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: R.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        withMaxHeight: !0,
      }),
        (A.propTypes = {})
      var I = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
      }
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return g
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('ho0z'), n('z84I'), n('LW0h'), n('7x/C'), n('M+/F'), n('Xrkv')),
        l = n('aWyx'),
        o = n('XnpN'),
        s = n('3XMw'),
        c = n.n(s),
        d = c.a.b5b7fb93,
        u = c.a.g755fcde,
        p = c.a.f6b1ff81,
        m = c.a.j652293d
      t.a = function (e, t, n, a) {
        var r = e.type,
          i = e.name,
          s = e.participants,
          c = void 0 === s ? {} : s
        if (r === l.a.GROUP && i) return i
        if (c.length) {
          if (r === l.a.GROUP && n) return d
          var u = Object(o.a)(e, t).map(function (e) {
            return e.user
          })
          return g(u, t, r, a)
        }
      }
      var g = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.a.GROUP,
          a = arguments.length > 3 ? arguments[3] : void 0,
          o = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (o.length) {
          case 0:
            return u
          case 1:
            var s = r()(o, 1),
              c = s[0]
            return n === l.a.GROUP ? p({ name: c }) : c
          default:
            var d = !0,
              g = Object(i.a)(o.slice(0, a), d)
            return a ? m({ listOfParticipants: g, count: o.length - a }) : g
        }
      }
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        g = n.n(m),
        h = n('2VqO'),
        v = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        k = n('nT9l'),
        S = n('3XMw'),
        E = n.n(S),
        C = 'image',
        T = n('TIdA'),
        R = n('a6qo'),
        w = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        x = E.a.f93bb3ee,
        F = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  a = t.useMinimumData,
                  i = e.props,
                  o = i.accessibilityLabel,
                  s = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  c = l()(i, w)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(
                    T.a,
                    r()({}, c, { accessibilityLabel: o, onVariantSelection: n, previewMode: a, testID: C }),
                  ),
                  s ? b.a.createElement(R.a, { align: 'left', altLabel: o }) : null,
                )
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.hideAcceptOverlay,
                    n = e.image
                  return b.a.createElement(k.a, {
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
        })(b.a.Component)
    },
    q2o4: function (e, t, n) {
      'use strict'
      var a,
        r,
        i,
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        g,
        h,
        v,
        f,
        y,
        _,
        b,
        k,
        S,
        E = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'id' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'evolutionDmConversationMetadataQuery',
            selections: [
              {
                alias: null,
                args: (r = [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'id' },
                  { kind: 'Literal', name: 's', value: 25 },
                ]),
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                  (l = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ConversationInfo',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'conversation_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationMetadata',
                        kind: 'LinkedField',
                        name: 'metadata',
                        plural: !1,
                        selections: [
                          o,
                          (s = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'conversation_type',
                            storageKey: null,
                          }),
                          (c = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'created_by_user_results',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      i,
                                      l,
                                      {
                                        kind: 'RequiredField',
                                        field: (u = {
                                          alias: null,
                                          args: null,
                                          concreteType: 'ApiUser',
                                          kind: 'LinkedField',
                                          name: 'legacy',
                                          plural: !1,
                                          selections: [
                                            c,
                                            (d = {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'screen_name',
                                              storageKey: null,
                                            }),
                                          ],
                                          storageKey: null,
                                        }),
                                        action: 'THROW',
                                        path: 'dm_conversation_by_rest_id.legacy.metadata.created_by_user_results.result.legacy',
                                      },
                                    ],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          (p = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'created_at_millis',
                            storageKey: null,
                          }),
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'admin_user_results',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      i,
                                      l,
                                      {
                                        kind: 'RequiredField',
                                        field: u,
                                        action: 'THROW',
                                        path: 'dm_conversation_by_rest_id.legacy.metadata.admin_user_results.result.legacy',
                                      },
                                    ],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ApiMedia',
                            kind: 'LinkedField',
                            name: 'avatar',
                            plural: !1,
                            selections: [
                              i,
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'media_info',
                                plural: !1,
                                selections: [
                                  (m = {
                                    kind: 'InlineFragment',
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'original_img_url',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'original_img_width',
                                        storageKey: null,
                                      },
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'original_img_height',
                                        storageKey: null,
                                      },
                                    ],
                                    type: 'ApiImage',
                                    abstractKey: null,
                                  }),
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ParticipantConversationMetadata',
                        kind: 'LinkedField',
                        name: 'participants_metadata',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'user_results',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      i,
                                      l,
                                      {
                                        kind: 'RequiredField',
                                        field: (g = {
                                          alias: null,
                                          args: null,
                                          concreteType: 'ApiUser',
                                          kind: 'LinkedField',
                                          name: 'legacy',
                                          plural: !1,
                                          selections: [
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'id_str',
                                              storageKey: null,
                                            },
                                            c,
                                            d,
                                            {
                                              alias: null,
                                              args: null,
                                              kind: 'ScalarField',
                                              name: 'profile_image_url_https',
                                              storageKey: null,
                                            },
                                          ],
                                          storageKey: null,
                                        }),
                                        action: 'THROW',
                                        path: 'dm_conversation_by_rest_id.legacy.participants_metadata.user_results.result.legacy',
                                      },
                                    ],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          (h = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'last_read_event_id',
                            storageKey: null,
                          }),
                          (v = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_time_millis',
                            storageKey: null,
                          }),
                          (f = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_conversation_event_id',
                            storageKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                      (y = {
                        alias: null,
                        args: null,
                        concreteType: 'PerspectivalConversationMetadata',
                        kind: 'LinkedField',
                        name: 'perspectival_conversation_metadata',
                        plural: !1,
                        selections: [
                          h,
                          { alias: null, args: null, kind: 'ScalarField', name: 'low_quality', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'muted', storageKey: null },
                          {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'muted_due_to_muted_user',
                            storageKey: null,
                          },
                          { alias: null, args: null, kind: 'ScalarField', name: 'read_only', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'trusted', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            type: 'Query',
            abstractKey: null,
          },
          kind: 'Request',
          operation: {
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'evolutionDmConversationMetadataQuery',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  l,
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ConversationInfo',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      o,
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationMetadata',
                        kind: 'LinkedField',
                        name: 'metadata',
                        plural: !1,
                        selections: [
                          o,
                          s,
                          c,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'created_by_user_results',
                            plural: !1,
                            selections: (S = [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  (_ = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: '__typename',
                                    storageKey: null,
                                  }),
                                  {
                                    kind: 'InlineFragment',
                                    selections: [
                                      i,
                                      l,
                                      u,
                                      (b = {
                                        alias: null,
                                        args: null,
                                        filters: null,
                                        handle: 'defaultScalars',
                                        key: '',
                                        kind: 'LinkedHandle',
                                        name: 'legacy',
                                      }),
                                    ],
                                    type: 'User',
                                    abstractKey: null,
                                  },
                                ],
                                storageKey: null,
                              },
                              (k = {
                                alias: null,
                                args: null,
                                filters: null,
                                handle: 'user',
                                key: '',
                                kind: 'LinkedHandle',
                                name: 'result',
                              }),
                            ]),
                            storageKey: null,
                          },
                          p,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'admin_user_results',
                            plural: !1,
                            selections: S,
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ApiMedia',
                            kind: 'LinkedField',
                            name: 'avatar',
                            plural: !1,
                            selections: [
                              i,
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'media_info',
                                plural: !1,
                                selections: [_, m],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ParticipantConversationMetadata',
                        kind: 'LinkedField',
                        name: 'participants_metadata',
                        plural: !0,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'user_results',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: 'LinkedField',
                                name: 'result',
                                plural: !1,
                                selections: [
                                  _,
                                  { kind: 'InlineFragment', selections: [i, l, g, b], type: 'User', abstractKey: null },
                                ],
                                storageKey: null,
                              },
                              k,
                            ],
                            storageKey: null,
                          },
                          h,
                          v,
                          f,
                        ],
                        storageKey: null,
                      },
                      y,
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
          },
          params: {
            id: 'pKUmCavq54OtWfyGSjQ96w',
            metadata: {},
            name: 'evolutionDmConversationMetadataQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(E.hash = '05c5ace285646279f5426d235fdf2b26'), (e.exports = E)
    },
    qBaR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('M+/F'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('HPNB'),
        l = n('v6aA'),
        o = n('+Kfv'),
        s = n('MMRb'),
        c = n('aA19'),
        d = n('XnpN'),
        u = n('3XMw'),
        p = n.n(u),
        m = (n('hBvt'), n('/yvb')),
        g = n('6s7X'),
        h = p.a.h810143c,
        v = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            a = e.link,
            i = e.style,
            l = r.a.createElement(g.a, null)
          return r.a.createElement(m.a, {
            accessibilityLabel: t || h,
            hoverLabel: { label: h },
            icon: l,
            key: n,
            link: a,
            pullRight: !0,
            style: i,
            type: 'primaryText',
          })
        },
        f = n('M2mT'),
        y = n('aITJ'),
        _ = n('MWbm'),
        b = n('MAI/'),
        k = n('cHvH'),
        S = n('t62R'),
        E = n('rHpw'),
        C = n('OhSZ'),
        T = n('zCf4'),
        R = { viewType: 'messages' },
        w = p.a.d4986f85,
        x = p.a.e3e58b6d,
        F = p.a.a9ddbb94
      function A(e) {
        var t = r.a.useContext(l.a),
          n = Object(T.f)(),
          a = Object(T.g)(),
          u = t.featureSwitches.isTrue('dm_vdl_enabled') && t.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
          p = e.conversation,
          m = e.conversationId,
          g = e.newConversationParticipants,
          h = e.perspective,
          E = function (e) {
            null != p && p.trusted ? n.push({ pathname: '/messages', state: a.state }) : e()
          },
          A = function (e, t) {
            var n = e
              .map(function (e) {
                return e.user.profile_image_url_https
              })
              .slice(0, t)
            return r.a.createElement(
              _.a,
              { style: I.facePile },
              r.a.createElement(b.a, { userAvatarSize: 'large', userAvatarUrls: n }),
            )
          },
          O = function () {
            var e,
              t = (null == p ? void 0 : p.type) === s.CONVERSATION_TYPE.GROUP,
              n = (null == a || null === (e = a.state) || void 0 === e ? void 0 : e.position) || 0
            return m
              ? r.a.createElement(
                  _.a,
                  { style: I.rightControlStyles },
                  r.a.createElement(v, {
                    accessibilityLabel: t ? F : x,
                    conversationId: m,
                    link: { pathname: '/messages/'.concat(m, '/info'), state: { position: n } },
                    style: I.infoButton,
                  }),
                )
              : void 0
          }
        return r.a.createElement(
          f.a,
          (function () {
            var e = u ? 'headline2' : void 0,
              t =
                p && p.participants.length
                  ? Object(C.a)({ conversation: p, perspective: h })
                  : g
                  ? Object(C.a)({ newConversationParticipants: g, perspective: h })
                  : w,
              n =
                p && p.participants.length
                  ? r.a.createElement(C.b, { conversation: p, perspective: h, textSize: e, withScreenName: !1 })
                  : g
                  ? r.a.createElement(C.b, {
                      newConversationParticipants: g,
                      perspective: h,
                      textSize: e,
                      withScreenName: !1,
                    })
                  : r.a.createElement(S.b, { size: e }, w),
              a = p && h ? Object(d.a)(p, h) : void 0,
              l = u ? 'large' : 'medium',
              o = h ? r.a.createElement(c.a, { conversation: p, perspective: h, size: l }) : void 0
            u &&
              a &&
              (null == p ? void 0 : p.type) === s.CONVERSATION_TYPE.GROUP &&
              void 0 === (null == p ? void 0 : p.avatar) &&
              ((o = (function (e) {
                return r.a.createElement(k.a, null, function (t) {
                  var n = t.windowWidth
                  return i.a.isTwoColumnLayout(n) ? A(e, 8) : A(e, 3)
                })
              })(a)),
              (l = 'custom'))
            var m =
                u || (null == p ? void 0 : p.type) !== s.CONVERSATION_TYPE.ONE_TO_ONE || null == a
                  ? void 0
                  : a.map(function (e) {
                      return e.user.screen_name
                    }),
              v = m ? '@'.concat(m[0]) : void 0
            return {
              backLocation: '/messages',
              onBackClick: E,
              documentTitle: t,
              rightControl: O(),
              title: n,
              titleIconCell: o,
              titleIconCellSize: l,
              subtitle: v,
              screenType: 'primaryDetail',
              withBottomTabBar: !1,
              headerless: y.b.isKaiOS(),
            }
          })(),
          r.a.createElement(o.a, { behavioralEventContext: R }, e.children),
        )
      }
      var I = E.a.create(function (e) {
        return {
          infoButton: { marginRight: e.spaces.space4 },
          rightControlStyles: { flexDirection: 'row' },
          facePile: { display: 'flex', flexDirection: 'row' },
        }
      })
    },
    's8G+': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA')
      t.a = function (e) {
        var t = r.a.useContext(i.a).featureSwitches
        return r.a.useMemo(
          function () {
            return t.isTrue(e)
          },
          [e, t],
        )
      }
    },
    sl05: function (e, t, n) {
      'use strict'
      var a = n('rHpw')
      t.a = a.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: e.spaces.space20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
        }
      })
    },
    tZH3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('MWbm'),
        s = n('CKsB'),
        c = n('/yvb'),
        d = n('rHpw'),
        u = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        g = l.a.fcd4d489,
        h = l.a.gbed8594,
        v = l.a.g9074da4,
        f = l.a.ad63377d,
        y = l.a.h09b49f7,
        _ = l.a.i6b19b07,
        b = l.a.j7bb1a42,
        k = l.a.ea200ba6,
        S = l.a.cfd2f35d,
        E = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            l = e.onDeleteClick,
            d = e.onReportClick,
            E = e.requestorScreenName,
            T = e.showBlock,
            R = e.showCancel,
            w = e.showDelete,
            x = r.a.useCallback(
              function () {
                d && d(), t()
              },
              [t, d],
            ),
            F = r.a.useCallback(
              function () {
                i && i(), t()
              },
              [t, i],
            ),
            A = r.a.useCallback(
              function () {
                l && l(), t()
              },
              [t, l],
            )
          return r.a.createElement(
            o.a,
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            w
              ? r.a.createElement(s.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? v : f,
                  onClick: A,
                  textColor: 'red500',
                })
              : null,
            T
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: h, actionText: g({ screenName: E }), onClick: F })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: k,
              actionText: a ? _ : b({ screenName: E }),
              onClick: x,
            }),
            R ? r.a.createElement(c.a, { onPress: t, style: C.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      E.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var C = d.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = E
    },
    uB9N: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('97Jx'),
        l = n.n(i),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        g = n.n(m),
        h = n('2VqO'),
        v = n.n(h),
        f = n('KEM+'),
        y = n.n(f),
        _ = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        b = n.n(_),
        k = n('1YZw'),
        S = n('zh9S'),
        E = n('P1r1'),
        C = n('AspN'),
        T = n('rxPX'),
        R = Object(T.a)()
          .propsFromState(function () {
            return { dataSaverMode: E.j }
          })
          .propsFromActions(function () {
            return {
              addMedia: C.b,
              addToast: k.b,
              processMultipleMedia: C.g,
              removeMediaUpload: C.i,
              scribeAction: S.scribeAction,
              preUploadMedia: C.e,
            }
          }),
        w = n('wpu3'),
        x = n('cOB2'),
        F = n('MWbm'),
        A = n('0FVZ'),
        I = n('Oe3h'),
        O = n('rHpw')
      var L = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            a = e.children,
            r = e.onLayout,
            i = e.sideNavPresent,
            o = e.style,
            s = b.a.useContext(x.a)
          return i
            ? b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(F.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: o }, a),
              )
            : b.a.createElement(
                A.a.BottomComposer,
                null,
                b.a.createElement(I.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return b.a.createElement(
                    F.a,
                    l()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: o })),
                    a,
                    b.a.createElement(F.a, { style: !1 === s.keyboardVisible && M.offsetBottom }),
                  )
                }),
              )
        },
        M = O.a.create(function () {
          return { offsetBottom: { paddingBottom: O.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        P = n('htQn'),
        K = n('t62R'),
        B = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.id,
                  a = t.label
                ;(0, t.onClick)({ id: n, label: a })
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.isWide,
                    a = e.label
                  return b.a.createElement(
                    P.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [j.root, n && j.isWide, !n && j.isNarrow],
                    },
                    b.a.createElement(K.b, { weight: 'bold' }, a),
                    b.a.createElement(K.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        j = O.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              borderColor: e.colors.borderColor,
              borderStyle: 'solid',
              paddingLeft: '1rem',
              paddingVertical: '1rem',
            },
            isWide: {
              borderRadius: e.borderRadii.xLarge,
              paddingVertical: '0.5rem',
              borderWidth: e.borderWidths.small,
            },
            isNarrow: { borderTopWidth: e.borderWidths.small },
          }
        }),
        N = B,
        U = n('cHvH'),
        W = n('mw9i'),
        H = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              y()(p()(e), '_handleOptionChoose', function (t) {
                var n = e.props
                return (0, n.onOptionChoose)(n.quickReplyOptions.id, t)
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.quickReplyOptions.options,
                    n = 1 === t.length
                  return b.a.createElement(U.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
                      l = [i && V.isWide, i && n && V.oneButtonOnly, !i && V.isNarrow]
                    return b.a.createElement(
                      W.a,
                      { style: l, withGutter: i },
                      t.map(function (t) {
                        return e.renderOption(t, i)
                      }),
                    )
                  })
                },
              },
              {
                key: 'renderOption',
                value: function (e, t) {
                  return b.a.createElement(N, {
                    description: e.description,
                    id: e.id,
                    isWide: t,
                    key: e.id,
                    label: e.label,
                    onClick: this._handleOptionChoose,
                  })
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        V = O.a.create(function (e) {
          return {
            oneButtonOnly: { gridTemplateColumns: '1fr' },
            isWide: {
              backgroundColor: e.colors.gray0,
              display: 'grid',
              gridColumnGap: e.spaces.space12,
              gridRowGap: e.spaces.space12,
              gridTemplateColumns: '1fr 1fr',
              paddingVertical: e.spaces.space12,
            },
            isNarrow: { maxHeight: '168px', overflow: 'auto' },
          }
        }),
        q = H,
        z = n('krmn'),
        G = n('cIoY'),
        Y = n('w3n3'),
        Q = n('MLl7'),
        X = n('3XMw'),
        J = n.n(X),
        Z = n('J2UM'),
        $ = n('VPdC'),
        ee = n('pKoL'),
        te = n('eyty'),
        ne = n('oQhu'),
        ae = n('JYMr'),
        re = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        ie = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), y()(p()(e), 'state', { currentStepIndex: -1 }), e
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scheduleNextStep(0)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._currentTimeoutId && clearTimeout(this._currentTimeoutId)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.currentStepIndex,
                    t = e >= 0 && e < re.length ? re[e].progress : 0
                  return b.a.createElement(ae.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < re.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, re[e].waitMs))
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      function le(e) {
        var t = e.isSending,
          n = e.isUploading,
          a = e.progress
        return t && !n ? b.a.createElement(ie, null) : b.a.createElement(ae.a, { progress: t ? Math.max(a, 0.02) : 0 })
      }
      var oe = b.a.memo(le),
        se = n('Dtul'),
        ce = n('Es6L'),
        de = 'dmComposerAttachments',
        ue = 'dmComposerTextInput',
        pe = 'dmComposerSendButton',
        me = n('GZwR'),
        ge = n('aITJ'),
        he = n('6OUF'),
        ve = n('9Xij'),
        fe = n('/yvb'),
        ye = n('OiMc'),
        _e = n('v6aA'),
        be = n('gpVt'),
        ke = n('Lsrn'),
        Se = n('k/Ka'),
        Ee = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Se.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ke.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M19 13.5H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0 6H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-12H5c-.828 0-1.5-.672-1.5-1.5S4.172 4.5 5 4.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z',
              }),
            ),
          )
        }
      Ee.metadata = { width: 24, height: 24 }
      var Ce = Ee,
        Te = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Se.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ke.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0-12H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      Te.metadata = { width: 24, height: 24 }
      var Re = Te,
        we = n('iySH'),
        xe = J.a.ee230734,
        Fe = J.a.ca0ce0e4,
        Ae = J.a.cdcebd22,
        Ie = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Le = function (e) {
          return !(!e || !e.media)
        },
        Me = Object(w.b)({ maxNumberOfPhotos: 1 }),
        De = (function (e) {
          g()(n, e)
          var t = v()(n)
          function n(e, a) {
            var i, o, c
            s()(this, n),
              (c = t.call(this, e, a)),
              y()(p()(c), '_handleLayout', function (e) {
                var t = c.props.onHeightChange,
                  n = c.state.mediaButtonsCollapsible,
                  a = e.nativeEvent.layout
                a &&
                  (Object(ce.a)() || (t && t(a.height)),
                  a.width <= O.a.theme.breakpoints.small && !n
                    ? c.setState({ mediaButtonsCollapsible: !0 })
                    : a.width > O.a.theme.breakpoints.small && n && c.setState({ mediaButtonsCollapsible: !1 }))
              }),
              y()(p()(c), '_renderQuickReplyPicker', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state.isQuickReplyOpen
                return e && t
                  ? b.a.createElement(q, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              y()(p()(c), '_renderComposeBox', function () {
                return b.a.createElement(F.a, { style: Pe.composeBoxContainer }, c._renderMainContent())
              }),
              y()(p()(c), '_renderMainContent', function () {
                var e = c.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  a = c.state.value,
                  r = n
                return r
                  ? b.a.createElement(
                      r,
                      {
                        contextText: a,
                        isInline: !0,
                        onTextUpdated: t ? c._handleRichTextChange : c._handlePlainTextChange,
                        onTypeaheadStateChange: c._handleTypeaheadStateChange,
                        source: me.d.ComposeMessage,
                      },
                      c._renderFieldTextInput,
                    )
                  : c._renderFieldTextInput()
              }),
              y()(p()(c), '_renderFieldTextInput', function (e) {
                var t = c.props,
                  n = t.disabled,
                  a = t.placeholderText,
                  r = t.richTextInputContext,
                  i = ge.b.isKaiOS() ? Ae : a || Fe,
                  o = c.state,
                  s = o.editorState,
                  d = o.mediaButtonsCollapsible,
                  u = o.value,
                  p = !!r,
                  m = r ? { editorState: s, element: r.element } : void 0,
                  g = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: s, element: r.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return b.a.createElement(
                  he.a,
                  l()(
                    {
                      contentAbove: c._renderAttachments(),
                      editable: !n,
                      emojiPickerButton: c._renderEmojiPicker(),
                      handleReturn: p ? c._handleReturn : void 0,
                      isCompact: !0,
                      leftAligned: !0,
                      maxNumberOfLines: p ? 8 : 4,
                      multiline: !0,
                      numberOfLines: 1,
                      onBlur: c._handleOnBlur,
                      onFilesAdded: c._handleAddMediaFiles,
                      onFocus: c._handleTextInputFocus,
                      onKeyPress: p ? void 0 : c._handleReturn,
                      placeholder: i,
                      ref: c._setTextInputRef,
                      richTextInputContext: n ? void 0 : m,
                      style: Pe.composeInput,
                      testID: ue,
                      useCacheForDOMMeasurements: !c._isSendDisabled() && !d,
                      value: u,
                    },
                    g,
                  ),
                )
              }),
              y()(
                p()(c),
                '_getHandleRichTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handleRichTextChange(t)
                  }
                }),
              ),
              y()(
                p()(c),
                '_getHandlePlainTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handlePlainTextChange(t)
                  }
                }),
              ),
              y()(p()(c), '_handleTypeaheadStateChange', function (e) {
                c.setState({ isTypeaheadActive: e })
              }),
              y()(p()(c), '_renderAttachments', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.conversationId,
                  a = e.isCardPreviewTombstoned,
                  r = e.isShareViaDM,
                  i = e.isUploading,
                  l = c.state.value,
                  o =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  s = o.height,
                  d = o.width,
                  u = null == t ? void 0 : t.media,
                  p = null == u ? void 0 : u.mediaMetadata,
                  m = null == p ? void 0 : p.altText,
                  g = null == p ? void 0 : p.defaultAltText,
                  h = Object(be.b)(l)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  u
                    ? b.a.createElement(
                        F.a,
                        { style: Pe.attachmentContainer, testID: de },
                        b.a.createElement(
                          ve.a,
                          { ratio: d / s, style: Pe.aspectContainer },
                          b.a.createElement(
                            F.a,
                            { style: Pe.mediaPreviewContainer },
                            b.a.createElement(ee.a, {
                              accessibilityLabel: m || g,
                              mediaItem: u,
                              onClick: c._canEditImage ? c._handleClickMediaDetail : void 0,
                              onEdit: c._canEditImage || c._canEditVideo ? c._handleClickMediaDetail : void 0,
                              onRemove: c._handleRemoveMedia(u.id),
                              resizeIfNeeded: 'width',
                              style: Pe.mediaPreview,
                              withAltTextLabel: !!m,
                              withCloseButton: !i,
                              withEditButton: (c._canEditImage || c._canEditVideo) && !i,
                              withEditIcon: !0,
                            }),
                          ),
                        ),
                        t &&
                          t.provider &&
                          t.gifUrl &&
                          b.a.createElement(
                            F.a,
                            { style: Pe.gifAttribution },
                            b.a.createElement(G.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : h && !r
                    ? b.a.createElement(be.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: Pe.cardPreviewContainer,
                        urls: h,
                      })
                    : null,
                )
              }),
              y()(p()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && ge.b.isDesktopOS()
                  ? b.a.createElement(z.a, {
                      disabled: c.props.disabled,
                      onEmojiSelect: c._handleEmojiSelect,
                      onPress: c._handleTextInputFocus,
                      size: 'small',
                      textInputRef: c._textInput || void 0,
                    })
                  : null
              }),
              y()(p()(c), '_renderPrimaryActionButton', function (e) {
                var t = c.props,
                  n = t.primaryActionIcon,
                  a = t.primaryActionLabel,
                  r = t.quickReplyOptions,
                  i = c._hasMessageText()
                return !r || i || e
                  ? b.a.createElement(
                      fe.a,
                      {
                        accessibilityLabel: a,
                        disabled: c._isSendDisabled(),
                        hoverLabel: { label: a },
                        icon: n || void 0,
                        onPress: c._handlePrimaryAction,
                        size: 'medium',
                        style: Pe.actionButton,
                        testID: pe,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : a,
                    )
                  : c._renderQRToggleButton()
              }),
              y()(p()(c), '_renderSecondaryActionButton', function () {
                var e = c.props,
                  t = e.secondaryActionDisabledPopoverRenderer,
                  n = e.secondaryActionLabel,
                  a = e.shouldEnableSecondaryActionFunc,
                  r = e.shouldShowSecondaryActionFunc
                if ((r && !r()) || !n) return null
                var i = !a || a(),
                  l = b.a.createElement(
                    fe.a,
                    {
                      accessibilityLabel: n,
                      disabled: !i,
                      onPress: c._handleSecondaryAction,
                      style: Pe.actionButton,
                      type: 'primaryOutlined',
                    },
                    c.props.secondaryActionLabel,
                  )
                return i || !t
                  ? l
                  : b.a.createElement(
                      ye.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      l,
                    )
              }),
              y()(p()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return b.a.createElement(fe.a, {
                  accessibilityLabel: Ie,
                  icon: e ? b.a.createElement(Ce, null) : b.a.createElement(Re, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Pe.actionButton,
                  type: 'brandText',
                })
              }),
              y()(p()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = Le(e),
                  n = c._renderComposeBox(),
                  a = c._renderPrimaryActionButton(t),
                  r = c._renderSecondaryActionButton()
                return b.a.createElement(
                  F.a,
                  { style: [Pe.composer, t && Pe.composerWithAttachment] },
                  t ? null : c._renderMediaButtons(),
                  n,
                  r,
                  a,
                )
              }),
              y()(p()(c), '_renderMediaButtons', function () {
                var e = c.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  a = c.state,
                  r = a.mediaButtonsCollapsed,
                  i = a.mediaButtonsCollapsible && r
                return b.a.createElement(
                  F.a,
                  { style: Pe.uploadButtons },
                  i
                    ? b.a.createElement(fe.a, {
                        accessibilityLabel: xe,
                        icon: b.a.createElement(we.a, null),
                        onMouseDown: c._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !i ? c._renderMediaPicker() : null,
                  t && !i ? c._renderGifButton() : null,
                )
              }),
              y()(p()(c), '_handleShowMediaControlsMouseDown', function () {
                var e = c.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                c.setState({ mediaButtonsCollapsed: !1 }),
                  t(r()(r()({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              y()(p()(c), '_handleReturn', function (e) {
                var t = e.nativeEvent,
                  n = t.ctrlKey,
                  a = t.key,
                  r = t.metaKey,
                  i = t.shiftKey,
                  l = 'Enter' === a
                return !c.state.isTypeaheadActive && l && c._keyboardOrMouseDetected && !(i || r || n)
                  ? (e.preventDefault(), c._handlePrimaryAction(e), 'handled')
                  : 'not-handled'
              }),
              y()(p()(c), '_handleClickMediaDetail', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.conversationId,
                  a = e.history
                if (c._canEditImage || c._canEditVideo) {
                  var r = t && t.media ? t.media.id : 0,
                    i = c._canEditVideo ? 'trimmer' : 'crop'
                  a.push('/messages/compose/media', { mediaId: r, conversationId: n, tab: i })
                }
              }),
              y()(p()(c), '_handleAddMediaFiles', function (e) {
                var t = c.props,
                  n = t.addMedia,
                  a = t.addToast,
                  r = t.dataSaverMode,
                  i = t.onAddMedia,
                  l = t.preUploadMedia,
                  o = t.processMultipleMedia,
                  s = t.removeMedia,
                  d = t.removeMediaUpload
                n(e, { location: te.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  c._validateMedia(e)
                    ? (i && i(t),
                      o(e, { onFailure: s }).then(function (e) {
                        r ||
                          l(
                            e.map(function (e) {
                              return e.id
                            }),
                          )
                      }))
                    : (a({ text: Oe }), d(t))
                })
              }),
              y()(p()(c), '_handleEmojiSelect', function (e) {
                var t = c.state.editorState,
                  n = c.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  c._handleRichTextChange(a)
                }
              }),
              y()(p()(c), '_handleRemoveMedia', function (e) {
                return function () {
                  c.props.removeMedia && c.props.removeMedia(e)
                }
              }),
              y()(p()(c), '_handlePrimaryAction', function (e) {
                if (!c._isSendDisabled()) {
                  var t = c.props.onPrimaryAction
                  c._textInput &&
                    c._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    c._closeQuickReplyPicker()
                }
              }),
              y()(p()(c), '_handleSecondaryAction', function (e) {
                var t = c.props.onSecondaryAction
                c._textInput &&
                  c._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              y()(p()(c), '_handleRichTextChange', function (e) {
                var t = c.props,
                  n = t.onTyping,
                  a = t.richTextInputContext,
                  r = c.state.value,
                  i = e.getCurrentContent().getPlainText(),
                  l = a ? a.convertEmojiToEntities(e) : null
                c.setState({ editorState: l, value: i }), r !== i && (null == n || n())
              }),
              y()(p()(c), '_handlePlainTextChange', function (e) {
                var t = c.props.onTyping,
                  n = c.state.value,
                  a = e.target.value
                c.setState({ value: a }), n !== a && (null == t || t())
              }),
              y()(p()(c), '_handleOnBlur', function () {
                var e = c.props.onBlur,
                  t = c.state.mediaButtonsCollapsible
                e && e(), t && c.setState({ mediaButtonsCollapsed: !1 })
              }),
              y()(p()(c), '_handleTextInputFocus', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state,
                  n = t.isQuickReplyOpen,
                  a = t.mediaButtonsCollapsible
                e && n && c._closeQuickReplyPicker(), a && c.setState({ mediaButtonsCollapsed: !0 })
              }),
              y()(p()(c), '_handleQROptionSelection', function (e, t) {
                var n = c.props,
                  a = n.disabled,
                  r = n.onPrimaryAction
                a || (r({ quickReply: { id: e, selected_id: t.id } }, t.label), c._closeQuickReplyPicker())
              }),
              y()(p()(c), '_handleQuickReplyPickerToggle', function () {
                c.setState({ isQuickReplyOpen: !c.state.isQuickReplyOpen })
              }),
              y()(p()(c), '_validateMedia', function (e) {
                return !Le(c.props.attachment) && Me(e)
              }),
              y()(p()(c), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    c._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              y()(p()(c), '_isSendDisabled', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.canSendEmptyMessage,
                  a = e.disabled,
                  r = e.isUploading,
                  i = Le(t),
                  l = c._hasMessageText() || n,
                  o = !(!t || !t.media) && (t.media.needsProcessing || r)
                return a || (!l && !i) || o || r
              }),
              y()(p()(c), '_hasMessageText', function () {
                return !!(c.state.value || '').trim()
              }),
              y()(p()(c), '_closeQuickReplyPicker', function () {
                c.setState({ isQuickReplyOpen: !1 })
              }),
              y()(p()(c), 'handleAddMediaFiles', function (e) {
                return c._handleAddMediaFiles(e)
              }),
              y()(p()(c), '_setTextInputRef', function (e) {
                c._textInput = e
              })
            var d = e.prefillText,
              u = e.richTextInputContext
            return (
              (c.state = {
                isQuickReplyOpen: !0,
                value: d,
                editorState:
                  null !==
                    (i = null == u || null === (o = u.initEditorState) || void 0 === o ? void 0 : o.call(u, d)) &&
                  void 0 !== i
                    ? i
                    : null,
                isTypeaheadActive: !1,
                mediaButtonsCollapsed: !1,
                mediaButtonsCollapsible: !1,
              }),
              c
            )
          }
          return (
            d()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  Object(Z.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = se.a.acquire())
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._unlockReload && this._unlockReload()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.props.quickReplyOptions &&
                    this.state.isQuickReplyOpen &&
                    this._textInput &&
                    this._textInput.blur()
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.quickReplyOptions,
                    n = e.quickReplyOptions
                  t && !n
                    ? this.setState({ isQuickReplyOpen: !1 })
                    : ((!t && n) || (t && n && t.id !== n.id)) && this.setState({ isQuickReplyOpen: !0 }),
                    this.props.conversationId !== e.conversationId && this.clear()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.dtabBarInfo,
                    n = e.isSending,
                    a = e.isUploading,
                    r = e.mediaUploadProgress,
                    i = e.placeholderText,
                    l = e.style,
                    o = i || Fe,
                    s = Object(ce.a)(),
                    c = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return b.a.createElement(
                    L,
                    {
                      accessibilityLabel: o,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [Pe.root, c && Pe.dtabOffset, l],
                    },
                    b.a.createElement(oe, { isSending: n, isUploading: a, progress: n ? Math.max(r, 0.02) : 0 }),
                    this._renderComposer(),
                    this._renderQuickReplyPicker(),
                  )
                },
              },
              {
                key: '_renderMediaPicker',
                value: function () {
                  return b.a.createElement($.a, {
                    onChange: this._handleAddMediaFiles,
                    style: Pe.mediaPicker,
                    type: 'brandText',
                  })
                },
              },
              {
                key: '_renderGifButton',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.history
                  return b.a.createElement(Y.a, {
                    dmConversationId: t,
                    enabled: !0,
                    gifSearchKeySource: Q.a.DMComposition,
                    history: n,
                  })
                },
              },
              {
                key: '_canEditImage',
                get: function () {
                  var e, t, n
                  return !(
                    null === (e = this.props.attachment) ||
                    void 0 === e ||
                    null === (t = e.media) ||
                    void 0 === t ||
                    null === (n = t.mediaFile) ||
                    void 0 === n ||
                    !n.isImage
                  )
                },
              },
              {
                key: '_canEditVideo',
                get: function () {
                  var e,
                    t,
                    n = this.props.attachment,
                    a =
                      null == n || null === (e = n.media) || void 0 === e || null === (t = e.mediaFile) || void 0 === t
                        ? void 0
                        : t.isVideo
                  return (
                    a &&
                      ((this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                      (a = this._videoTrimmerEnabled)),
                    !!a
                  )
                },
              },
              {
                key: 'clear',
                value: function () {
                  var e = this.props.richTextInputContext
                  if (e) {
                    var t = (e || {}).initEditorState
                    this.setState({ value: '', editorState: t && t('') })
                  } else this.setState({ value: '' })
                },
              },
              {
                key: 'focus',
                value: function () {
                  this._textInput && this._textInput.focus()
                },
              },
              {
                key: 'value',
                value: function () {
                  return this.state.value
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      y()(De, 'contextType', _e.a),
        y()(De, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var Pe = O.a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.navigationBackground,
            borderTopColor: e.colors.borderColor,
            borderTopWidth: e.borderWidths.small,
          },
          attachmentContainer: { maxHeight: '10rem', margin: e.spaces.space12 },
          aspectContainer: { flexShrink: 1 },
          cardPreviewContainer: { margin: e.spaces.space12 },
          dtabOffset: { marginBottom: e.spaces.space40 },
          gifAttribution: { flexDirection: 'row', marginVertical: e.spaces.space4, marginHorizontal: 0 },
          mediaPicker: { margin: 0 },
          icon: { color: e.colors.primary, fontSize: '1.5em' },
          composeBoxContainer: { flexGrow: 1, flexShrink: 1, alignSelf: 'center' },
          composeInput: { width: '100%' },
          mediaPreviewContainer: { flexDirection: 'row', height: '100%' },
          mediaPreview: { borderRadius: e.borderRadii.xLarge, overflow: 'hidden', minWidth: '10em' },
          composer: { alignItems: 'center', flexDirection: 'row', padding: e.spaces.space4, width: '100%' },
          composerWithAttachment: { paddingLeft: e.spaces.space12 },
          actionButton: { marginLeft: e.spaces.space4 },
          uploadButtons: { flexDirection: 'row', marginRight: e.spaces.space4 },
        }
      })
      t.a = R.forwardRef(De)
    },
    uwR9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return s
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/FNr'),
        l = n('Rk1B'),
        o = n('RH6X')
      function s() {
        return r.a.createElement(l.default, null, function (e) {
          var t = e.richTextInputContext
          e.typeaheadWrapper
          return r.a.createElement(i.default, { richTextInputContext: t, typeaheadWrapper: o.a })
        })
      }
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('z84I'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        l = n('aWyx'),
        o = n('3XMw'),
        s = n.n(o),
        c = s.a.c1d4ac83,
        d = s.a.abc7b032,
        u = s.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return r.a.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        m = function (e, t) {
          return e >= 2
            ? r.a.createElement(
                s.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                r.a.createElement(p, { conversationId: t }, s.a.d1242bcc({ count: e })),
              )
            : r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        g = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? r.a.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var a = e.user_id,
                    l = n[a]
                  return l
                    ? r.a.createElement('span', { key: t }, t > 0 ? ', ' : null, r.a.createElement(i.b, null, l.name))
                    : null
                }),
              )
            : null
        },
        h = function (e, t, n, a) {
          var o,
            p = n === e.by_user_id
          switch (t) {
            case l.b.CONVERSATION_AVATAR_UPDATE:
              return (o = e.by_user_id && a[e.by_user_id] && a[e.by_user_id].name)
                ? p
                  ? c
                  : (function (e) {
                      return r.a.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        r.a.createElement(i.b, null, e),
                      )
                    })(o)
                : d
            case l.b.CONVERSATION_NAME_UPDATE:
              var m = r.a.createElement(i.b, null, e.conversation_name)
              return (o = e.by_user_id && a[e.by_user_id] && a[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(m)
                  : (function (e, t) {
                      return r.a.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        r.a.createElement(i.b, null, e),
                        t,
                      )
                    })(o, m)
                : (function (e) {
                    return r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(m)
            case l.b.JOIN_CONVERSATION:
              return (o = e.sender_id && a[e.sender_id] && a[e.sender_id].name)
                ? (function (e) {
                    return r.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      r.a.createElement(i.b, null, e),
                    )
                  })(o)
                : u
            case l.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.a.createElement(g, { entry: e, users: a }))
            case l.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.a.createElement(i.b, null, e), t)
                  : r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (o = e.sender_id && a[e.sender_id] && a[e.sender_id].name),
                r.a.createElement(g, { entry: e, users: a }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
