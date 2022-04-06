;(window.webpackJsonp = window.webpackJsonp || []).push([
  [170, 11],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('M2x3'),
        s = 'settingsAppBar',
        c = n('/yvb'),
        d = n('rHpw'),
        u = o.a.bb081ea1,
        p = { viewType: 'settings_button' },
        m = r.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.a.createElement(c.a, {
            accessibilityLabel: u,
            behavioralEventContext: p,
            hoverLabel: { label: u },
            icon: r.a.createElement(l.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: h.button,
            testID: s,
            type: 'primaryText',
          })
        }),
        h = d.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = m
    },
    '07FG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('cnVF'),
        r = function (e) {
          return e === a.B
        }
    },
    '33Kz': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
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
        o = function (e) {
          var t = e.getArrayValue('dm_reactions_config_inactive_reactions'),
            n = i(e)
          return [].concat(r()(n), r()(t))
        },
        l = function (e, t) {
          var n = o(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        s = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { includeInactive: !1 }
          return t.includeInactive
            ? o(e).map(function (e) {
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
        o = r()(r()({}, i.a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = o
    },
    '4AMG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Bi
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ejT/')),
        g = n('ERkP'),
        v = n.n(g),
        y = (n('lTEL'), n('7x/C'), n('kYxP'), n('M+/F'), n('KOtZ'), n('gbD7')),
        b = n('X/yg'),
        _ = (n('Blm6'), n('b9JY')),
        E = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(_.b)(e) && Object(_.b)(t)) {
            var n = e.message_data,
              a = n.sender_id,
              r = n.time,
              i = t.message_data,
              o = i.sender_id,
              l = i.time,
              s = parseInt(l, 10) - parseInt(r, 10)
            return a === o && s >= 0 && s <= 6e4
          }
          return !1
        },
        S = n('jat/'),
        k = n('MMRb'),
        C = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        I = n('XnpN'),
        x = n('LhSm'),
        T = n('I4+6'),
        R = n('rHpw'),
        w = n('PbQQ'),
        F = n('cm6r'),
        A = n('jV+4'),
        O = n('pBrB'),
        M = n('wCd/'),
        L = function (e, t) {
          var n = Object(I.a)(e, t).map(function (e) {
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
        D = R.a.create(function (e) {
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
            r = v.a.useContext(C.a).loggedInUserId
          if (!t) return null
          var i = L(t, r || ''),
            o = i.userDescription,
            l = i.userEntities,
            s = i.userFollowerCount,
            c = i.userFriendsCount,
            d = i.userIdStr,
            u = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            h = i.userScreenName,
            f = i.userWithheldDescription,
            g = i.userWithheldEntities,
            y = !!(m && h && ((s && c) || p)),
            b = T.a.generate({
              color: R.a.theme.colors.text,
              backgroundColor: R.a.theme.colors.transparent,
              customFocusBackgroundColor: R.a.theme.colors.gray0,
              customHoverBackgroundColor: R.a.theme.colors.gray0,
              customPressedBackgroundColor: R.a.theme.colors.activeFaintGray,
            })
          return v.a.createElement(w.a.Consumer, null, function (e) {
            return v.a.createElement(
              F.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [D.root, a && y && D.borderBottom],
              },
              v.a.createElement(A.a, {
                isVerified: u,
                name: m,
                screenName: h,
                style: D.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && l && d
                ? v.a.createElement(O.a, {
                    description: o,
                    entities: l,
                    style: [D.profileInfoItemMargin, D.description],
                    userId: d,
                    withheldDescription: f,
                    withheldEntities: g,
                  })
                : null,
              s && c
                ? v.a.createElement(M.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: h || '',
                    style: D.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? v.a.createElement(x.a, { joinDate: p }) : null,
            )
          })
        },
        N = n('V/6K'),
        K = n('cFyg'),
        j = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        B = n('aA19'),
        H = n('aWyx'),
        U = n('mN6z'),
        V = n('MWbm'),
        W = n('t62R'),
        q = n('jhWN'),
        z = n('MAI/'),
        G = n('zQEV'),
        Q = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return v.a.createElement(W.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        Y = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.entry,
                  r = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  l = Object(G.a)(a, r, i, o)
                switch (r) {
                  case H.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === a.conversation_avatar_image_https
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? v.a.createElement(
                            V.a,
                            { style: X.conversationAvatarContainer },
                            v.a.createElement(B.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      v.a.createElement(Q, null, l),
                    )
                  case H.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(l),
                      d = e._getParticipantsFromEntry(),
                      u = v.a.createElement(
                        W.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return v.a.createElement(v.a.Fragment, null, c, p)
                  default:
                    return v.a.createElement(Q, null, l)
                }
              }),
              h()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return v.a.createElement(
                  F.a,
                  { interactiveStyles: null, link: o, style: X.userAddedYouContainer },
                  i
                    ? v.a.createElement(q.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  v.a.createElement(Q, { link: o, style: X.userAddedYouText }, t),
                )
              }),
              h()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return v.a.createElement(
                  F.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: X.joinConversationDetails,
                  },
                  n,
                  v.a.createElement(z.a, { style: X.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: r }),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(U.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.a.createElement(V.a, { style: X.root }, this._renderContents())
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
        })(v.a.Component),
        X = R.a.create(function (e) {
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
        J = Object(j.a)(Y),
        $ = n('ddV6'),
        Z = n.n($),
        ee = n('yiKp'),
        te = n.n(ee),
        ne = n('oQhu')
      var ae = Object(ne.a)(function (e) {
          var t = R.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + R.a.theme.spacesPx.space12,
          }
        }),
        re = n('shC7'),
        ie = n('38/B'),
        oe = function (e) {
          return le(e, ie.a.reducedMotionEnabled)
        },
        le = Object(ne.a)(function (e, t) {
          var n,
            a,
            r,
            i,
            o,
            l,
            s,
            c,
            d,
            u =
              ((n = ae(R.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ue[R.a.theme.scale]),
              (o = ce / i),
              (l = de / a),
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
                    sent: { transform: [{ translateX: (re.a.getConstants().isRTL ? 1 : -1) * pe[R.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (re.a.getConstants().isRTL ? -1 : 1) * (pe[R.a.theme.scale] + d) - s }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: ce } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: s / o,
                      transformOrigin: re.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: s / o,
                      transformOrigin: re.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: re.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: re.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: l }] },
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
        he = n('+Kfv'),
        fe = n('hqKg'),
        ge = n('oEGd'),
        ve = n('zh9S'),
        ye = n('Yatk'),
        be = n('G6rE'),
        _e = n('P1r1'),
        Ee = { scribeAction: ve.scribeAction },
        Se = Object(fe.createSelector)(
          function (e, t) {
            return be.e.select(e, t.senderId)
          },
          _e.k,
          _e.q,
          function (e, t, n) {
            return { user: Object(ye.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        ke = Object(ge.f)(Se, Ee),
        Ce = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Ie = n('rxPX'),
        xe = n('0KEI'),
        Te = Object(Ie.a)()
          .propsFromActions(function () {
            return {
              addToast: Ce.b,
              createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: k.deleteEntry,
            }
          })
          .withAnalytics(),
        Re = n('k49u'),
        we = n('LVU8'),
        Fe = n('3XMw'),
        Ae = n.n(Fe),
        Oe = Ae.a.f58dff33,
        Me = Ae.a.ad5a8e8e,
        Le =
          ((se = {}),
          h()(se, Re.a.MissingParameter, { toast: Object(we.a)(Oe) }),
          h()(se, Re.a.DirectMessageDestroyPermissionsError, { toast: { text: Me } }),
          h()(se, 'showToast', !0),
          se),
        De = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Pe = n('uKEd'),
        Ne = [],
        Ke = Object(fe.createSelector)(
          function (e) {
            return Object(Pe.l)(e).entries
          },
          function (e, t) {
            return Object(Pe.p)(e, t.entry.id) || Ne
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
          createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: De.d,
          removeReaction: Pe.k,
        },
        Be = Object(ge.f)(Ke, je),
        He = n('RhWx'),
        Ue = n.n(He),
        Ve = n('33Kz'),
        We = n('wTX1'),
        qe = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            l = e.onPress,
            s = e.style,
            c = v.a.useContext(C.a).featureSwitches,
            d = Object(Ve.b)(r, c),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = T.a.generate({ backgroundColor: R.a.theme.colors.gray50, color: R.a.theme.colors.gray700 })
          return v.a.createElement(
            F.a,
            {
              accessibilityLabel: u,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: l,
              style: [ze.container].concat(Ue()(s || [])),
            },
            v.a.createElement(W.b, { size: a, style: ze.unsetLineHeight }, d),
            n
              ? v.a.createElement(We.a, { color: 'gray700', containerStyle: ze.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        ze = R.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        Ge = n('pHkl'),
        Qe = n('Irs7'),
        Ye = Ae.a.ca7a2214,
        Xe = Ae.a.fc0e94b7,
        Je = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_handleReactionScribing', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.entry,
                  o = a.isGroupDM,
                  l = a.participantsCount,
                  s = n ? 'delete_reaction' : 'create_reaction',
                  c = Object(b.c)(i)
                r.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: s,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: l,
                    conversation_type: o ? Ge.j.GROUP : Ge.j.ONE_TO_ONE,
                    message_type: c,
                    reaction_emotion: t,
                  },
                })
              }),
              h()(s()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.createLocalApiErrorHandler,
                    i = a.createReaction,
                    o = a.dismiss,
                    l = a.entry,
                    s = a.fetchUpdatesIfNeeded,
                    c = a.perspective,
                    d = a.removeReaction,
                    u = { reaction_key: t, conversation_id: l.conversation_id, dm_id: l.id, perspective: c }
                  ;(n ? d : i)(u)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return s()
                    })
                    .catch(r()),
                    o()
                }
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.selectedReactions,
                    n = Object(Ve.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return v.a.createElement(qe, {
                        accessibilityLabelFormatter: a ? Ye : Xe,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, a),
                        style: [Ze.reaction, a && Ze.selectedReaction],
                      })
                    })
                  return v.a.createElement(V.a, { style: Ze.reactions }, n)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(Je, 'contextType', C.a)
      var $e = Object(Qe.a)(Be(Je)),
        Ze = R.a.create(function (e) {
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
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.isGroupDM,
                  i = n.participantsCount,
                  o = n.perspective
                return v.a.createElement($e, {
                  dismiss: t,
                  entry: a,
                  isGroupDM: r,
                  participantsCount: i,
                  perspective: o,
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
                    t = e.children,
                    n = e.onDismiss
                  return v.a.createElement(
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
        })(v.a.Component)
      h()(tt, 'contextType', N.a)
      var nt = n('TnY3'),
        at = n('mjJ+'),
        rt = n('Q0VY'),
        it = n('eb3s'),
        ot = n('/yvb'),
        lt = n('ZToW'),
        st = n('CaKu'),
        ct = n('i4Oy'),
        dt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        ut = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            a = Z()(n, 2),
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
        ht = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        ft = function (e, t, n) {
          var a = 1.25 * R.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        gt = n('hiGS'),
        vt = n('zIWA'),
        yt = n('Lsrn'),
        bt = n('k/Ka'),
        _t = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(bt.a)(
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
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              v.a.createElement('path', {
                d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
              }),
            ),
          )
        }
      _t.metadata = { width: 24, height: 24 }
      var Et = _t,
        St = n('DlVf'),
        kt = n('ACHU'),
        Ct = n('UgB4'),
        It = n('fz3c'),
        xt = Ae.a.ba60339a,
        Tt = Ae.a.j4bfee22,
        Rt = Ae.a.d96cf7cd,
        wt = Ae.a.faddd3a2,
        Ft = Ae.a.eb497e08,
        At = Ae.a.b170974a,
        Ot = Ae.a.i202bd22,
        Mt = Ae.a.f2e5491a,
        Lt = Ae.a.f88553c8,
        Dt = Ae.a.ifea3114,
        Pt = Ae.a.cac14829,
        Nt = Ae.a.h63a5c3b,
        Kt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  a = t.entry,
                  r = t.featureSwitches,
                  o = t.isSent,
                  l = It.a.DMMessage,
                  s = n.contextualScribeNamespace,
                  c = [{ text: xt, Icon: gt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!o)
                  if (Object(It.g)(r, l)) {
                    var d,
                      u = Object(It.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: l,
                        reportedConversationId: a.conversation_id,
                        reportedMessageId: a.id,
                        reportedUser: null === (d = a.message_data) || void 0 === d ? void 0 : d.sender_id,
                        scribeNamespace: n.contextualScribeNamespace,
                      })
                    c.push({
                      text: Ot,
                      Icon: vt.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(u) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    c.push({
                      text: Ot,
                      Icon: vt.a,
                      link: {
                        pathname: '/i/report/'.concat(l, '/').concat(a.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: a.conversation_id,
                          scribeNamespace: s,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    })
                return (
                  st.a.isAvailable() && c.push({ text: Mt, Icon: Et, onClick: i._handleCopyMessageText }),
                  v.a.createElement(at.a, {
                    isFixed: i.context.isDrawer,
                    items: c,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              h()(s()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (st.a.setString(n), t({ text: Lt })), e && e()
              }),
              h()(s()(i), '_handleForwardButton', function () {
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
                  var o = a.message_data.attachment.tweet
                  r.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: te()(te()({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              h()(s()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              h()(s()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  a = e.deleteEntry,
                  r = e.entry,
                  o = e.inboxType,
                  l = e.isGroupDM,
                  s = e.participantsCount,
                  c = Object(b.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: l ? Ge.j.GROUP : Ge.j.ONE_TO_ONE,
                    conversation_participant_count: s,
                    message_type: c,
                    inbox_type: Object(b.i)(o),
                  },
                }),
                  a({ conversationId: r.conversation_id, id: r.id }).catch(n(Le))
              }),
              h()(s()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              h()(s()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              h()(s()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(b.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              h()(s()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              h()(s()(i), '_replaceMessageUrls', function () {
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
              (i._isNarrow = ct.a.get('screen').width < R.a.theme.breakpoints.xSmall),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n = this.props,
                    a = n.entry,
                    r = n.isSent,
                    i = n.shouldShowReactionButton,
                    o = n.style,
                    l = n.withVDLRefresh,
                    s = this._areActionsVisible()
                  return v.a.createElement(
                    V.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        Bt.messageActions,
                        r ? Bt.messageActionsLeft : Bt.messageActionsRight,
                        s ? Bt.visible : Bt.invisible,
                        l && Bt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? Bt.messageActionsMediaNarrow : Bt.messageActionsNarrow),
                        o,
                      ],
                    },
                    (null == a ||
                    null === (e = a.message_data) ||
                    void 0 === e ||
                    null === (t = e.attachment) ||
                    void 0 === t
                      ? void 0
                      : t.tweet) &&
                      l &&
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
                    ? v.a.createElement(it.a, {
                        confirmButtonLabel: Rt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Tt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: wt,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return v.a.createElement(ot.a, {
                    accessibilityLabel: Dt,
                    hoverLabel: { label: Dt },
                    icon: Ht,
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
                    o = this.state.actionsAreActive,
                    l = v.a.createElement(St.a, { style: i ? Bt.vdlActionIcon : Bt.actionIcon })
                  return v.a.createElement(
                    tt,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    v.a.createElement(ot.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: At,
                      hoverLabel: { label: Pt },
                      icon: l,
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
                    t = v.a.createElement(kt.a, { style: e ? Bt.vdlActionIcon : Bt.actionIcon })
                  return v.a.createElement(ot.a, {
                    accessibilityLabel: Ft,
                    hoverLabel: { label: Nt },
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
                    o = this.state.actionsAreActive,
                    l = ((e = this.props.entry), !pt(e) && mt(e) && !lt.a.isEnabled)
                  return !i && (l || (n && !lt.a.isEnabled) || a || r || o)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(Kt, 'contextType', N.a)
      var jt = Object(nt.a)(Te(Kt)),
        Bt = R.a.create(function (e) {
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
        Ht = v.a.createElement(Ct.a, { style: Bt.vdlActionIcon }),
        Ut = n('97Jx'),
        Vt = n.n(Ut),
        Wt = (n('6U7i'), n('CDB5')),
        qt = Object(Ie.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: k.removeEntry,
              sendMessage: Wt.m,
            }
          })
          .withAnalytics(),
        zt = '87.5%',
        Gt = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        Qt = n('RqPI'),
        Yt = [],
        Xt = function (e, t) {
          return Object(Pe.p)(e, t.entryId) || Yt
        },
        Jt = function (e) {
          return Object(Pe.l)(e).entries
        },
        $t = {
          createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        Zt = Object(ge.e)(function () {
          return Object(fe.createSelector)(Jt, Xt, Qt.r, Gt.d, function (e, t, n, a) {
            var r,
              i = Object(Ve.a)(a, { includeInactive: !0 }),
              o = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, a) {
                var l = e[a] && e[a].data
                if (!l) return t
                if (!i.includes(l.reaction_key)) return t
                var s = (t.get(l.reaction_key) || 0) + 1
                return (
                  t.set(l.reaction_key, s),
                  (null == l ? void 0 : l.sender_id) === n && (r = l.reaction_key),
                  (o += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: r,
              totalReactionCount: o,
            }
          })
        }, $t),
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
          return be.e.selectMany(
            e,
            (function (e, t) {
              return Object(Pe.q)(e, tn(0, t))
            })(e, t),
          )
        },
        on = {
          removeReaction: Pe.k,
          fetchUpdatesIfNeeded: De.d,
          createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        ln = Object(ge.e)(function () {
          return Object(fe.createSelector)(nn, an, Qt.r, rn, Gt.d, function (e, t, n, a, r) {
            var i = Object(Ve.a)(r, { includeInactive: !0 }),
              o = []
            t.forEach(function (t) {
              var r = e[t] && e[t].data
              if (r && i.includes(r.reaction_key)) {
                var l = a.find(function (e) {
                    return e && e.id_str === r.sender_id
                  }),
                  s = l && {
                    avatarUri: l.profile_image_url_https,
                    userId: l.id_str,
                    reactionKey: r.reaction_key,
                    isLoggedInUser: l.id_str === n,
                    screenName: l.screen_name,
                    name: l.name,
                    isProtected: l.protected,
                    isVerified: l.verified,
                    time: r.time,
                  }
                s && o.push(s)
              }
            }),
              o.sort(function (e, t) {
                return t.time - e.time
              })
            var l = o.findIndex(function (e) {
              return e.userId === n
            })
            return l > -1 && o.push.apply(o, Ue()(o.splice(0, l))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, on),
        sn = n('TIdA'),
        cn = n('htQn'),
        dn = Ae.a.gf5e9ea6,
        un = Ae.a.a2d48778,
        pn = sn.a.createLayoutCache()
      var mn = R.a.create(function (e) {
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
        hn = function (e) {
          var t = v.a.useContext(C.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            o = r.avatarUri,
            l = r.isProtected,
            s = r.isVerified,
            c = r.name,
            d = r.screenName,
            u = v.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = v.a.createElement(q.a, { imageLayoutCache: pn, screenName: d, size: 'xxLarge', uri: o }),
            m = v.a.createElement(qe, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            h = v.a.createElement(A.a, {
              badgeContext: 'content',
              isProtected: l,
              isVerified: s,
              name: c,
              screenName: d,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return v.a.createElement(
            cn.a,
            { link: { pathname: '/'.concat(d), anchorless: !0 }, style: [mn.root, i && mn.bottomBorder] },
            v.a.createElement(V.a, { style: mn.reactionColumn }, m),
            v.a.createElement(V.a, { style: mn.column }, p),
            v.a.createElement(V.a, { style: mn.bodyColumn }, v.a.createElement(V.a, { style: mn.body }, h)),
            a
              ? v.a.createElement(
                  V.a,
                  { style: mn.column },
                  v.a.createElement(
                    ot.a,
                    {
                      accessibilityLabel: un({ emoji: Object(Ve.b)(r.reactionKey, t) }),
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
        fn = n('xKuM'),
        gn = n('efqG'),
        vn = Ae.a.b772cd65,
        yn = Ae.a.c0098d49,
        bn = Ae.a.j85999eb,
        _n = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderContent', function (t, n) {
                return v.a.createElement(
                  V.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? v.a.createElement(fn.a, { title: yn })
                  : v.a.createElement(W.b, { visuallyHidden: !0 }, yn)
              }),
              h()(s()(e), '_renderUsers', function (t, n) {
                return v.a.createElement(
                  V.a,
                  { accessibilityLabel: bn, style: [En.container, 'sheet' === n ? En.sheet : En.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  v.a.createElement(
                    ot.a,
                    { key: 'button_done', onPress: e, style: En.cancelButton, type: 'primaryOutlined' },
                    vn,
                  )
                )
              }),
              h()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return v.a.createElement(hn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: a !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              h()(s()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.conversationId,
                    i = a.createLocalApiErrorHandler,
                    o = a.entryId,
                    l = a.fetchUpdatesIfNeeded,
                    s = a.loggedInUserId,
                    c = a.removeReaction,
                    d = { reaction_key: t, conversation_id: r, dm_id: o, perspective: s }
                  n(), c(d).then(e._handleScribeRemoveReaction(t)).then(l).catch(i())
                }
              }),
              h()(s()(e), '_handleScribeRemoveReaction', function (t) {
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
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.children
                  return v.a.createElement(
                    gn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(_n, 'contextType', N.a)
      var En = R.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Sn = Object(nt.a)(Object(Qe.a)(ln(_n))),
        kn = Ae.a.h95f9e76,
        Cn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(s()(a), '_handleScribeDMReactionSummary', function () {
                a.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              h()(s()(a), '_onSetReactionsNode', function (e) {
                a._measureWidths(e || void 0)
              }),
              h()(s()(a), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = a.props,
                  r = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  o = a.state.emojiSize || 'headline1',
                  l = r.size - 1
                return Array.from(r, function (e, n) {
                  var a = Z()(e, 2),
                    r = a[0],
                    s = a[1]
                  return v.a.createElement(qe, {
                    count: s,
                    emojiSize: o,
                    emotion: r,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: r,
                    style: [
                      n === l && In.rightPadding,
                      In.elementPadding,
                      i === r ? In.selfSelect : null,
                      t && In.isHoveredDMReaction,
                    ],
                  })
                })
              }),
              (a.state = { emojiSize: void 0 }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversationId,
                    n = e.entryId,
                    a = e.isEndOfDM,
                    r = e.isSent,
                    i = e.totalReactionCount,
                    o = this.state.emojiSize
                  if (0 === i) return null
                  var l = T.a.generate({ backgroundColor: R.a.theme.colors.gray50, color: R.a.theme.colors.gray700 }),
                    s = kn({ reactionCount: i })
                  return v.a.createElement(
                    V.a,
                    {
                      style: [
                        In.container,
                        a ? In.marginShort : In.marginLong,
                        r ? In.alignRight : In.alignLeft,
                        o ? In.visible : In.invisible,
                      ],
                    },
                    v.a.createElement(
                      Sn,
                      { conversationId: t, entryId: n },
                      v.a.createElement(
                        F.a,
                        {
                          accessibilityLabel: s,
                          focusable: !0,
                          interactiveStyles: l,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: In.content,
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
        })(v.a.PureComponent),
        In = R.a.create(function (e) {
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
            selfSelect: { borderColor: R.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        xn = Object(Qe.a)(Zt(Cn)),
        Tn = n('Xrkv'),
        Rn = Ae.a.icd0bf34,
        wn = Ae.a.e8bd8fec,
        Fn = Ae.a.b2d32fad,
        An = Ae.a.a763d33e,
        On = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(s()(a), '_handlePress', function (e) {
                e.stopPropagation(), a.setState({ showFullList: !0 })
              }),
              (a.state = { showFullList: !1 }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    a = e.namesToDisplay
                  return v.a.createElement(
                    V.a,
                    { style: Mn.root },
                    v.a.createElement(
                      W.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: Mn.seenLabel },
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
                  return n ? (t ? Fn : Rn) : a.length ? An({ count: a.length }) : wn
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
                      return v.a.createElement(
                        Ae.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        v.a.createElement(W.b, null, n),
                        v.a.createElement(
                          W.b,
                          { color: 'link', onPress: e._handlePress },
                          Ae.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Tn.a)(t, n)
                  return v.a.createElement(
                    W.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Mn.namesList },
                    n ? v.a.createElement(r, { namesList: i, othersCount: a }) : v.a.createElement(W.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        Mn = R.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Ln = On,
        Dn = n('t0aI'),
        Pn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user,
            r = Nn({ entryId: t, participants: n, user: a })
          return { namesToDisplay: r, isSeenByEveryone: r.length === n.length - 1 }
        },
        Nn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user
          return n.reduce(function (e, n) {
            var r = n.join_conversation_event_id,
              i = n.last_read_event_id,
              o = n.user.name,
              l = n.user_id !== a.id_str,
              s = i && 1 !== Object(Dn.a)(t, i),
              c = !r || 1 !== Object(Dn.a)(r, t)
            return l && s && c && e.push(o), e
          }, [])
        },
        Kn = n('IMYl'),
        jn = n('21zW'),
        Bn = n('gmpV'),
        Hn = Ae.a.fad48ee9,
        Un = Ae.a.ba60339a,
        Vn = Ae.a.d338f53e,
        Wn = Ae.a.ae7d7a24,
        qn = Ae.a.d725a288,
        zn = Ae.a.bbe74f3f,
        Gn = Ae.a.h0e4cdf4,
        Qn = Ae.a.bfbc051c,
        Yn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  a = t.entryId
                ;(0, t.removeEntry)(n, null, { id: a })
              }),
              h()(s()(e), '_handleTryAgain', function () {
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
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSent,
                    n = e.onPress,
                    a = this._renderSending(),
                    r = this._renderError(),
                    i = this._renderTimestamp(),
                    o = this._renderReadReceipt(),
                    l = this._renderSentCheckmark(),
                    s = this._renderReactions(),
                    c = i || o || l,
                    d = a || r || s || c,
                    u =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    d &&
                    v.a.createElement(
                      V.a,
                      { style: [Xn.root, u && Xn.vdlRootMargin, t && Xn.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? v.a.createElement(
                            F.a,
                            { interactiveStyles: null, onPress: n, style: t && Xn.sentContainer },
                            v.a.createElement(V.a, { style: t && Xn.groupedItems }, i, l),
                            o,
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
                    v.a.createElement(
                      V.a,
                      null,
                      v.a.createElement(W.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Wn),
                      v.a.createElement(
                        V.a,
                        { style: Xn.groupedItems },
                        v.a.createElement(
                          W.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Un,
                        ),
                        v.a.createElement(jn.a, null),
                        v.a.createElement(
                          W.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Vn,
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
                    o = e.withUserAvatar,
                    l = !r || a
                  return t
                    ? v.a.createElement(
                        V.a,
                        { style: o && Xn.footerPadderWithAvatar },
                        v.a.createElement(xn, { conversationId: t, entryId: n, isEndOfDM: l, isSent: i }),
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
                    o = e.isSent,
                    l = e.participants,
                    s = e.user
                  return n && o && !a && !r
                    ? v.a.createElement(Ln, Vt()({ isGroupDM: i }, Pn({ entryId: t, participants: l, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && v.a.createElement(W.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Hn)
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
                    o = e.isSent,
                    l = e.participants,
                    s = e.user,
                    c = Pn({ entryId: t, participants: l, user: s }).isSeenByEveryone
                  return !o || n || a || (i && !r)
                    ? null
                    : v.a.createElement(
                        W.b,
                        { color: c ? 'primary' : 'gray700', style: Xn.checkmarkContainer },
                        v.a.createElement(Kn.a, { style: Xn.checkmark }),
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
                    o = e.isRapidFire,
                    l = e.isSent,
                    s = e.user.name,
                    c = e.withUserAvatar
                  if (n || a || (o && !i)) return null
                  var d,
                    u = new Date(Number(t))
                  d = Object(Bn.c)(u) ? qn(u) : Object(Bn.d)(u) ? zn({ time: qn(u) }) : Object(Bn.e)(u) ? Gn(u) : Qn(u)
                  var p = r && !l,
                    m = l ? 'right' : 'left'
                  return v.a.createElement(
                    V.a,
                    { style: [c && Xn.footerPadderWithAvatar, l && Xn.timestamp] },
                    v.a.createElement(
                      W.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: l || !lt.a.isEnabled },
                      p &&
                        v.a.createElement(
                          Ae.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          v.a.createElement(W.b, null, s),
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
        })(v.a.PureComponent)
      h()(Yn, 'contextType', C.a)
      var Xn = R.a.create(function (e) {
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
        Jn = qt(Yn),
        $n = n('jtO7'),
        Zn = R.a.create(function (e) {
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
            o = e.outsideTopRounded,
            l = e.tcoUrl,
            s = [
              Zn.root,
              n && Zn.isLast,
              n && a && Zn.sentLast,
              n && !a && Zn.receivedLast,
              t && a && Zn.insideTopRoundedSent,
              t && !a && Zn.insideTopRoundedReceived,
              o && a && Zn.outsideTopRoundedSent,
              o && !a && Zn.outsideTopRoundedReceived,
            ]
          return v.a.createElement(
            V.a,
            { style: s },
            v.a.createElement($n.a, { align: 'center', color: 'primary', label: r, link: l, onClick: i }),
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
            o()(n, [
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
                    o = t.map(function (e, o) {
                      var l = 0 === o
                      return v.a.createElement(ea, {
                        insideTopRounded: l && (r || !i),
                        isLast: o === t.length - 1,
                        isSent: n,
                        key: o,
                        label: e.label,
                        onClick: a,
                        outsideTopRounded: l && r,
                        tcoUrl: e.tco_url,
                      })
                    })
                  return v.a.createElement(V.a, null, o)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(na, 'defaultProps', { onCtaClick: ta.a, onImpression: ta.a })
      var aa = na,
        ra = (n('1IsZ'), n('vjRr')),
        ia = n('EGrD'),
        oa = function (e, t) {
          return t.cardUrl
        },
        la = Object(Ie.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: ia.c, card: ra.a.createSingleHydratedSelector(oa) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ia.a,
              loadAdFreeArticleDomainsFromPersistence: ia.b,
              popOutConversation: k.popOutConversation,
            }
          }),
        sa = R.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        ca = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            a = e.isVisible,
            r = void 0 === a || a,
            i = e.textContent
          return v.a.createElement(V.a, { style: [r ? sa.visible : sa.invisible, sa.root] }, n, t, i)
        },
        da = n('cTG8'),
        ua = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            a = void 0 !== n && n,
            r = e.isFailedDraft,
            i = e.isFirstRapidFire,
            o = void 0 !== i && i,
            l = e.isRapidFire,
            s = void 0 !== l && l,
            c = e.isSent,
            d = e.hasAssociatedAttachment,
            u = e.messageData,
            p = void 0 === u ? {} : u,
            m = e.rootStyle,
            h = e.tweetId,
            f = e.withCta,
            g = e.withMediaLinks,
            y = e.withMessageBubble,
            b = v.a.useContext(C.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              m,
              y && pa.messageTextContainer,
              y && c && pa.sent,
              y && !c && pa.received,
              r && pa.failedDraft,
              s && !o && !c && pa.rapidFireReceived,
              s && !o && c && pa.rapidFireSent,
              d && c && pa.hasAssociatedAttachmentSent,
              d && !c && pa.hasAssociatedAttachmentReceived,
              y && _ && c && pa.vdlSent,
              y && a && c && pa.activeSent,
              y && _ && a && c && pa.vdlActiveSent,
              y && a && !c && !lt.a.isEnabled && pa.activeReceived,
              f && pa.withCta,
            ],
            S = [pa.tweetText, y && pa.textAlignLeft, !y && c && pa.textAlignRight],
            k = R.a.theme.colors,
            I = k.gray0,
            x = k.magenta500,
            w = k.primary,
            A = k.text,
            O = k.white,
            M = T.a.generate({ color: c ? O : A, backgroundColor: r ? x : c ? w : I }),
            L = (p.text && p.text.length) || 0
          return v.a.createElement(
            F.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? M : null, style: E },
            v.a.createElement(da.a, {
              color: R.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, L],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && c) || R.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: y ? void 0 : 'title2',
              style: S,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: g,
            }),
          )
        },
        pa = R.a.create(function (e) {
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
        ha = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            a = e.isFailedDraft,
            r = e.isFirstRapidFire,
            i = void 0 !== r && r,
            o = e.isRapidFire,
            l = void 0 !== o && o,
            s = e.isSent,
            c = e.messageData,
            d = e.withCta,
            u = e.withMessageBubble
          return v.a.createElement(ma, {
            isActive: n,
            isFailedDraft: a,
            isFirstRapidFire: i,
            isRapidFire: l,
            isSent: s,
            messageData: c,
            withCta: d,
            withMediaLinks: !0,
            withMessageBubble: u,
          })
        },
        fa = n('LSr9'),
        ga = n('aX4+'),
        va = n('/Ikv'),
        ya = va.a.CardNames,
        ba = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e, a
            r()(this, n)
            for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l]
            return (
              (a = t.call.apply(t, [this].concat(o))),
              h()(s()(a), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(
                s()(a),
                '_hasClaimsForAdFreeArticles',
                null === (e = a.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              h()(s()(a), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (a.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  a.setState(n)
                }
              }),
              h()(s()(a), '_handleOnClick', function (e) {
                var t = a.props,
                  n = t.card,
                  r = (n = void 0 === n ? {} : n).binding_values,
                  i = t.conversationId,
                  o = t.popOutConversation
                if ((i && o(i), a._hasClaimsForAdFreeArticles)) {
                  var l = a.props,
                    s = l.adFreeArticleDomains,
                    c = l.createLocalApiErrorHandler,
                    d = l.fetchAdFreeToken,
                    u = new fa.a(d, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: va.a.getBindingValue(r, 'card_url'),
                      linkDomain: va.a.getBindingValue(r, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    p = Z()(u, 2),
                    m = p[0],
                    h = p[1]
                  m && h(e)
                }
              }),
              h()(s()(a), '_handleTextContentLayout', function (e) {
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
            o()(n, [
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
                    o = e.isRapidFire,
                    l = e.isSent,
                    s = e.messageData,
                    c = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    m = u.textContentWidth,
                    h = !!Object.values(ya).includes(null == t ? void 0 : t.name),
                    f = ft(n, p, m),
                    g = f.isAttachmentSquared ? 'both' : l ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    b = t
                      ? v.a.createElement(
                          V.a,
                          { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                          v.a.createElement(ga.a, {
                            card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                            cardContext: { tweetUserId: s.sender_id },
                            dmSentOrReceived: l ? 'sent' : 'received',
                            withBorderShadow: y,
                            withSquareBottomBorderRadius: g,
                          }),
                        )
                      : null,
                    _ = n
                      ? v.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? _a.sentMessageWrapper : _a.receivedMessageWrapper,
                          },
                          v.a.createElement(ma, {
                            excludeCardUrl: null == t ? void 0 : t.url,
                            hasAssociatedAttachment: !0,
                            isActive: a,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: l,
                            messageData: s,
                            rootStyle: f.isTextSquared ? (l ? _a.textSentSquared : _a.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return h
                    ? v.a.createElement(ca, { attachmentContent: b, isVisible: f.compositeRendered, textContent: _ })
                    : v.a.createElement(ha, {
                        isActive: a,
                        isFailedDraft: r,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: l,
                        messageData: s,
                        withCta: c,
                        withMessageBubble: d,
                      })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(ba, 'defaultProps', { hasUserText: !1 }), h()(ba, 'contextType', C.a)
      var _a = R.a.create(function (e) {
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
        Ea = la(ba),
        Sa = Ae.a.f720438f,
        ka = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(s()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  a = 'left'
                return t ? (a = 'both') : n && (a = 'right'), Ca[a]
              }),
              h()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              h()(s()(e), '_handleTextContentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.textContentWidth !== n && e.setState({ textContentWidth: n })
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
                    t = e.hasUserText,
                    n = e.isActive,
                    a = e.isFailedDraft,
                    r = e.isFirstRapidFire,
                    i = e.isRapidFire,
                    o = e.isSent,
                    l = e.messageData,
                    s = e.withCta,
                    c = e.withMessageBubble,
                    d = this.state,
                    u = d.attachmentWidth,
                    p = d.textContentWidth
                  if (!l || !l.attachment || !l.attachment.fleet) return null
                  var m = ft(t, u, p),
                    h = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    g = m.isTextSquared,
                    y = [
                      Ia.tombstoneWrapper,
                      o ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    b = v.a.createElement(
                      V.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      v.a.createElement(W.b, { color: 'gray700' }, Sa),
                    ),
                    _ = t
                      ? v.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                              !c && Ia.fleetReactionSpacing,
                            ],
                          },
                          v.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: a,
                            isFirstRapidFire: r,
                            isRapidFire: i,
                            isSent: o,
                            messageData: l,
                            rootStyle: g ? (o ? Ia.sentSquared : Ia.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return v.a.createElement(ca, { attachmentContent: b, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        Ca = R.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ia = R.a.create(function (e) {
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
        xa = ka,
        Ta = (n('849X'), n('TJCb'), n('prG5')),
        Ra = n('RCZO'),
        wa = n('A91F'),
        Fa = Ae.a.b327c129,
        Aa = function (e) {
          e.stopPropagation()
        },
        Oa = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            a = t.ext_alt_text || Fa,
            r = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            l = i.width,
            s = Object(Ra.b)(t).rgb,
            c = v.a.createElement(Ta.a, {
              accessibilityLabel: a,
              aspectMode: wa.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: l, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? v.a.createElement(F.a, { interactiveStyles: null, link: n, onPress: Aa }, c) : c
        },
        Ma = n('Modb'),
        La = n('lklz'),
        Da = n('XrEN'),
        Pa = n('ZvMt'),
        Na = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && Da.a.extractVideoProps(La.b.forDm(n), t)
          return a
            ? v.a.createElement(
                Ma.a,
                Vt()({}, a, { aspectRatio: Pa.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Ka = Object(Ie.a)().withAnalytics(),
        ja = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width
                i.state.width !== t && i.setState({ width: t })
              }),
              h()(s()(i), '_getElement', function () {
                var e = i.props,
                  t = e.contentType,
                  n = e.isSensitive
                return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
              }),
              h()(s()(i), '_handleClick', function () {
                var e = i.props.analytics
                i.setState({ hide: !1 }), e.scribe({ element: i._getElement(), action: 'reveal' })
              }),
              (i.state = { hide: !0, width: 0 }),
              i
            )
          }
          return (
            o()(n, [
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
                    o = i.hide,
                    l = i.width < R.a.theme.breakpoints.micro
                  return o
                    ? v.a.createElement(
                        V.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ha.root,
                            l ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && Ba[r],
                          ],
                        },
                        v.a.createElement(V.a, { style: Ha.description }, v.a.createElement(W.b, null, a)),
                        v.a.createElement(
                          V.a,
                          { style: [Ha.button, l ? Ha.breakButtonWrapper : void 0] },
                          v.a.createElement(
                            ot.a,
                            { onClick: this._handleClick, size: 'small', style: Ha.buttonElement, type: 'brandText' },
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
        })(v.a.PureComponent)
      h()(ja, 'defaultProps', { isSensitive: !1 })
      var Ba = R.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ha = R.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: R.a.theme.spaces.space4,
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
        Ua = Object(Qe.a)(Ka(ja)),
        Va = n('CoGJ'),
        Wa = v.a.createElement(Va.a, null),
        qa = Ae.a.d9de7b57,
        za = Ae.a.f2879f4d,
        Ga = Ae.a.b518221e,
        Qa = Ae.a.eeaa9f90,
        Ya = Ae.a.g2b43663,
        Xa = Ae.a.f277e949,
        Ja = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(s()(e), '_renderAttachment', function () {
                var t,
                  n,
                  a = e.props,
                  r = a.entry,
                  i = a.hasUserText,
                  o = a.isFirstRapidFire,
                  l = a.isRapidFire,
                  s = a.isSent,
                  c = a.isTrusted,
                  d = a.messageData,
                  u = e.state,
                  p = u.attachmentWidth,
                  m = u.textContentWidth,
                  h = (d || {}).attachment,
                  f = r.is_draft,
                  g = ft(i, p, m),
                  y = [
                    $a.mediaAttachment,
                    s && $a.isSent,
                    !s && $a.received,
                    s && g.isAttachmentSquared && $a.equalComponentDimensionsSent,
                    !s && g.isAttachmentSquared && $a.equalComponentDimensionsReceived,
                    l && !o && s && $a.rapidFireSent,
                    l && !o && !s && $a.rapidFireReceived,
                  ],
                  _ = null
                if (
                  (!f && r.conversation_id && (_ = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = v.a.createElement(Oa, { media: t, mediaUrl: _ }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = v.a.createElement(Na, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(b.l)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = v.a.createElement(Na, { media: t, messageId: r.id })
                  }
                var E = g.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  S = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, E))
                return {
                  attachmentContent: v.a.createElement(V.a, { onLayout: e._handleAttachmentLayout, style: y }, S),
                  media: t,
                }
              }),
              h()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var a = { attachmentWidth: n }
                  e.setState(a)
                }
              }),
              h()(s()(e), '_handleTextContentLayout', function (t) {
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
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.entry,
                    n = e.hasUserText,
                    a = e.isActive,
                    r = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    l = e.isSent,
                    s = e.messageData,
                    c = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    m = u.textContentWidth,
                    h = t.is_draft,
                    f = ft(n, p, m),
                    g = this._renderAttachment(),
                    y = g.attachmentContent,
                    b = g.media,
                    _ = n
                      ? v.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? $a.sentMessageWrapper : $a.receivedMessageWrapper,
                          },
                          v.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: l,
                            messageData: h ? s : this._parseMessageData(s, b),
                            rootStyle: f.isTextSquared ? (l ? $a.sentSquared : $a.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return v.a.createElement(ca, { attachmentContent: y, isVisible: f.compositeRendered, textContent: _ })
                },
              },
              {
                key: '_getMediaContentWithGuard',
                value: function (e, t, n, a) {
                  var r = this.props,
                    i = r.displaySensitiveMedia,
                    o = r.isDmNsfwMediaFilterEnabled
                  if (
                    e.possibly_sensitive &&
                    this.context.featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
                  ) {
                    if (o) {
                      var l = ('animated_gif' === e.type && Ya) || ('video' === e.type && Qa) || Ga
                      return v.a.createElement(
                        Ua,
                        {
                          contentType: e.type,
                          ctaText: l,
                          description: za,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: a,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return v.a.createElement(
                      Ua,
                      {
                        contentType: e.type,
                        ctaText: Xa,
                        description: Wa,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: a,
                      },
                      n,
                    )
                  return t
                    ? n
                    : v.a.createElement(
                        Ua,
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
        })(v.a.Component)
      h()(Ja, 'contextType', C.a), h()(Ja, 'defaultProps', { hasUserText: !1 })
      var $a = R.a.create(function (e) {
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
        Za = Ja,
        er = Object(Ie.a)().propsFromActions(function () {
          return { markSpamStatus: k.markSpamStatus }
        }),
        tr = Ae.a.fd07947f,
        nr = Ae.a.c7a92dc9,
        ar = Ae.a.f277e949,
        rr = Ae.a.fb3ccb55,
        ir = er(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                h()(s()(e), '_handlePress', function (t) {
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
              o()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.children
                    return v.a.createElement(
                      Ua,
                      { contentType: 'dm', ctaText: ar, description: rr },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return v.a.createElement(
                      V.a,
                      { style: or.buttons },
                      v.a.createElement(
                        ot.a,
                        { onPress: this._handlePress(!1), style: or.leftButton, type: 'brandOutlined' },
                        nr,
                      ),
                      v.a.createElement(ot.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, tr),
                    )
                  },
                },
              ]),
              n
            )
          })(v.a.PureComponent),
        ),
        or = R.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        lr = n('U+bB'),
        sr = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        cr = R.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        dr = function (e) {
          var t = e.sticker
          return v.a.createElement(lr.a, { accessibilityLabel: t.display_name, source: sr(t), style: cr.stickerItem })
        },
        ur = n('XOJV'),
        pr = function (e, t) {
          var n,
            a = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (a && a.tweet) return a.tweet.status
        },
        mr = Object(Ie.a)()
          .propsFromState(function () {
            return { tweet: ur.a.createHydratedTweetSelector(pr) }
          })
          .propsFromActions(function () {
            return { popOutConversation: k.popOutConversation }
          }),
        hr = n('b5s6'),
        fr = v.a.createElement(W.b, { link: '/settings/safety' }),
        gr = function (e) {
          return v.a.createElement(
            Ae.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            v.a.cloneElement(fr, null, Ae.a.adcf07b5),
          )
        },
        vr = Ae.a.e4df0ad7,
        yr = Ae.a.f277e949,
        br = Ae.a.b5b91d58,
        _r = Ae.a.bb594d7b,
        Er = v.a.createElement(gr, null)
      var Sr = R.a.create(function (e) {
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
        kr = mr(function (e) {
          var t = v.a.useContext(C.a).featureSwitches,
            n = e.conversationId,
            a = e.displaySensitiveMedia,
            r = e.hasUserText,
            i = void 0 !== r && r,
            o = e.isActive,
            l = void 0 !== o && o,
            s = e.isDmNsfwMediaFilterEnabled,
            c = e.isFailedDraft,
            d = e.isFirstRapidFire,
            u = void 0 !== d && d,
            p = e.isRapidFire,
            m = void 0 !== p && p,
            h = e.isSent,
            f = e.isTrusted,
            g = e.messageData,
            y = e.popOutConversation,
            b = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            S = v.a.useState(void 0),
            k = Z()(S, 2),
            I = k[0],
            x = k[1],
            T = v.a.useState(void 0),
            R = Z()(T, 2),
            w = R[0],
            F = R[1],
            A = v.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            O = v.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  I !== t && x(t)
                }
              },
              [I],
            ),
            M = v.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  w !== t && F(t)
                }
              },
              [w],
            )
          if (!g || !g.attachment || !g.attachment.tweet) return null
          var L = g.attachment.tweet,
            D = h ? 'sent' : 'received',
            P = ft(i, I, w),
            N = v.a.createElement(hr.a, {
              onPress: A,
              style: [
                Sr[D],
                i && Sr.attachment,
                P.isAttachmentSquared ? (h ? Sr.sentAttachmentSquared : Sr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: L.status,
            }),
            K = P.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            j = (function () {
              if (!b) return null
              if (h) return N
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return v.a.createElement(
                    Ua,
                    { contentType: 'photo', ctaText: _r, description: br, withSquareBottomBorderRadius: K },
                    N,
                  )
              } else if (!a && b.possibly_sensitive)
                return v.a.createElement(
                  Ua,
                  { contentType: 'photo', ctaText: yr, description: Er, withSquareBottomBorderRadius: K },
                  N,
                )
              return f
                ? N
                : v.a.createElement(
                    Ua,
                    { contentType: 'tweet', ctaText: yr, description: vr, withSquareBottomBorderRadius: K },
                    N,
                  )
            })(),
            B = v.a.createElement(V.a, { onLayout: O, style: Sr.attachment }, j),
            H = i
              ? v.a.createElement(
                  V.a,
                  { onLayout: M, style: h ? Sr.sentMessageWrapper : Sr.receivedMessageWrapper },
                  v.a.createElement(ma, {
                    hasAssociatedAttachment: !0,
                    isActive: l,
                    isFailedDraft: c,
                    isFirstRapidFire: u,
                    isRapidFire: m,
                    isSent: h,
                    messageData: g,
                    rootStyle: P.isTextSquared ? (h ? Sr.sentSquared : Sr.receivedSquared) : void 0,
                    tweetId: L.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return v.a.createElement(ca, { attachmentContent: B, isVisible: P.compositeRendered, textContent: H })
        }),
        Cr = n('htvZ'),
        Ir = n('MH+I'),
        xr = n('5Ixf'),
        Tr = n('AtEG')
      function Rr(e) {
        var t,
          n,
          a = v.a.useContext(Cr.a),
          r = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var l = Z()(a.activeVoiceMessage, 2),
          s = l[0],
          c = l[1],
          d = Z()(a.playerApi, 1)[0],
          u = Z()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = Z()(s, 1)[0],
          h = e.messageId === m
        if (!p) return null
        var f = Fr(u),
          g = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: g,
            isActive: h,
            isSent: i,
            playerApi: null,
            playerState: null,
            onImpression: function () {
              return p.impression({ isLowQuality: r, isTrusted: o })
            },
            onPlayRequest: function () {
              return c([e.messageId, e.media])
            },
            onPlay: function () {
              return p.play({ data: { duration_ms: g } })
            },
            onPause: function () {
              return p.pause()
            },
          }
        return (
          h &&
            f &&
            f.contentId === e.media.id_str &&
            ((y.playerApi = d),
            (y.playerState = u),
            null != f && f.durationMs && (y.durationMs = null == f ? void 0 : f.durationMs)),
          v.a.createElement(wr, y)
        )
      }
      function wr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          o = Fr(r),
          l = (null == o ? void 0 : o.currentTimeMs) || 0,
          s = (null == o ? void 0 : o.durationMs) || e.durationMs,
          c = Math.max(t ? s - l : s, 0)
        v.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          v.a.useEffect(
            function () {
              a && 0 === l && (a.play(), e.onPlay())
            },
            [a],
          )
        var d = R.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'text' },
          p = [
            Mr.voiceMessage,
            Lr({ isSent: n, squared: t }),
            n ? Mr.voiceMessageSent : Mr.voiceMessageReceived,
            oe(R.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? xr.a : Tr.a
        return v.a.createElement(
          V.a,
          { style: [Mr.container, oe(R.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          v.a.createElement(
            V.a,
            { style: p },
            v.a.createElement(V.a, { style: Mr.startSpacer }),
            v.a.createElement(ot.a, {
              accessibilityLabel: i ? Or : Ar,
              icon: v.a.createElement(m, { style: d ? Mr.iconColorDark : Mr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            v.a.createElement(V.a, { style: Mr.durationSpacer }),
            v.a.createElement(
              V.a,
              { style: n ? Mr.durationOpacity : void 0 },
              v.a.createElement(
                Ir.a,
                Vt()({ countdown: !0, timeMs: c }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Mr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            v.a.createElement(V.a, { style: Mr.endSpacer }),
          ),
        )
      }
      var Fr = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ar = Ae.a.c94b7d89,
        Or = Ae.a.eb6f9582,
        Mr = R.a.create(function (e) {
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
      function Lr(e) {
        var t = e.isSent,
          n = e.squared
        return [Dr.base, t ? Dr.sent : Dr.received, n ? (t ? Dr.sentSquared : Dr.receivedSquared) : void 0]
      }
      var Dr = R.a.create(function (e) {
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
        Pr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.entry,
                    a = t.isSent,
                    r = t.onCtaClick,
                    i = t.onCtaImpression,
                    o = n.message_data,
                    l = o && o.attachment ? o.attachment : {},
                    s = n.marked_as_spam,
                    c = mt(n),
                    d = !!o && !!o.ctas,
                    u = pt(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (mt(e) && !ht(e)) return !1
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
                    h = ht(n)
                  e = l.sticker ? v.a.createElement(dr, { sticker: l.sticker }) : this._renderDMMessage(u, d, m)
                  var f = s ? v.a.createElement(ir, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    g = c && !h && !Object(b.l)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    y = [
                      a ? Nr.isSent : Nr.isReceived,
                      d && Nr.withCta,
                      g ? Nr.mediaRoot : Nr.flexShrink,
                      this.props.style,
                    ]
                  return v.a.createElement(
                    V.a,
                    { style: y },
                    f,
                    o && o.ctas
                      ? v.a.createElement(aa, {
                          callToActions: o.ctas,
                          isSent: a,
                          onCtaClick: r,
                          onImpression: i,
                          withSticker: !!l.sticker || p,
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
                    o = a.isActive,
                    l = a.isDmNsfwMediaFilterEnabled,
                    s = a.isFirstRapidFire,
                    c = a.isLowQuality,
                    d = a.isRapidFire,
                    u = a.isSent,
                    p = a.isTrusted,
                    m = i.error,
                    h = i.message_data,
                    f = h && te()(te()({}, h), {}, { entities: (h && h.entities) || void 0, error: m }),
                    g = null == f ? void 0 : f.attachment,
                    y = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && g) {
                    if (g.tweet)
                      return v.a.createElement(
                        kr,
                        Vt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: l,
                            isTrusted: p,
                            messageData: f,
                          },
                          y,
                        ),
                      )
                    if (g.photo || g.animated_gif || g.video)
                      return g.video && Object(b.l)(g, this.context.featureSwitches)
                        ? v.a.createElement(Rr, {
                            isLowQuality: c,
                            isSent: !!u,
                            isTrusted: p,
                            media: g.video,
                            messageId: i.id,
                          })
                        : v.a.createElement(
                            Za,
                            Vt()(
                              {
                                displaySensitiveMedia: r,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: l,
                                isTrusted: p,
                                messageData: f,
                              },
                              y,
                            ),
                          )
                    if (g.card)
                      return v.a.createElement(
                        Ea,
                        Vt()({ cardUrl: g.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, y),
                      )
                    if (g.fleet) return v.a.createElement(xa, Vt()({ entry: i, hasUserText: e, messageData: f }, y))
                  }
                  return v.a.createElement(ha, Vt()({}, y, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(Pr, 'contextType', C.a)
      var Nr = R.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Kr = Pr,
        jr = R.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Br = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? v.a.createElement(q.a, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : v.a.createElement(V.a, { style: [jr.avatar, q.a.getSizeStyle(a)] })
        },
        Hr = n('m3Bd'),
        Ur = n.n(Hr),
        Vr = n('B3eJ'),
        Wr = ['color', 'isActive', 'size']
      function qr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Ur()(e, Wr),
          i = v.a.useContext(Cr.a),
          o = v.a.useState(0.5),
          l = Z()(o, 2),
          s = l[0],
          c = l[1],
          d = Z()(i.playerState, 1)[0]
        v.a.useEffect(
          function () {
            n && d && d.isPlaying && c(Math.random())
          },
          [n, d],
        )
        var u = n && (null == d ? void 0 : d.isPlaying),
          p = a + 2 * zr,
          m = [Gr.container, r.style, { width: a, height: a }]
        return v.a.createElement(
          V.a,
          { style: m },
          v.a.createElement(
            V.a,
            { style: [Gr.container, Gr.transitionOpacity, u ? Gr.show : Gr.hide] },
            ie.a.reducedMotionEnabled
              ? null
              : v.a.createElement(Vr.a, { audioLevel: s, color: t, paused: !u, size: a }),
          ),
          v.a.createElement(V.a, {
            style: [Gr.border, { width: p, height: p }, Gr.transitionOpacity, n ? Gr.show : Gr.hide],
          }),
        )
      }
      var zr = parseInt(R.a.theme.spaces.space2, 10),
        Gr = R.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * zr,
              left: -1 * zr,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Qr = n('uArA'),
        Yr = 'messageEntry',
        Xr = { element: 'cta_dm' },
        Jr = { viewType: 'message' },
        $r = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        Zr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { shouldFadeHighlight: !1 }),
              h()(
                s()(e),
                '_handleClick',
                Object(Qr.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    a = n.error,
                    r = n.id,
                    i = n.is_draft,
                    o = t.isActive,
                    l = t.setActiveEntry
                  i || a || (l(o ? null : r), e._handleScribeMessageEntryClick())
                }),
              ),
              h()(s()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!lt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(b.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              h()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(te()(te()({}, Xr), {}, { action: 'show' }))
              }),
              h()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(te()(te()({}, Xr), {}, { action: 'click' }))
              }),
              h()(s()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(b.l)(
                  null === (t = e.props.entry.message_data) || void 0 === t ? void 0 : t.attachment,
                  e.context.featureSwitches,
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
                  this.props.isHighlightedMessageSearchEntry && this.setState({ shouldFadeHighlight: !0 })
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return (
                    !Object(U.a)(this.props, e) || !Object(U.a)(this.state.shouldFadeHighlight, t.shouldFadeHighlight)
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
                    o = t.user,
                    l = this._getRapidFireProps(),
                    s = !l.isRapidFire || l.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    d = [
                      ti.root.base,
                      c && ti.root.vdlPadding,
                      s && ti.root.contentSpacing,
                      s && c && ti.root.vdlContentSpacing,
                      r && ti.root.highlightableEntry,
                      r && this.state.shouldFadeHighlight && ti.root.remove,
                    ],
                    u = this._isDMVoiceMessage(),
                    p = c ? a && !i : !i || u
                  if (!o) return null
                  var m = !lt.a.isEnabled || i
                  return v.a.createElement(
                    he.a,
                    { behavioralEventContext: Jr },
                    v.a.createElement(
                      V.a,
                      { style: d },
                      v.a.createElement(
                        F.a,
                        {
                          accessibilityExpanded: !(!m || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: m ? this._handleClick : void 0,
                          style: i ? ti.root.sent : ti.root.received,
                          testID: Yr,
                        },
                        function (t) {
                          var n = t.isFocused,
                            a = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: a,
                            rapidFireProps: l,
                            withVDLRefresh: c,
                            withUserAvatar: p,
                          })
                        },
                      ),
                      this._renderFooter(l, p),
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
                    o = this.props,
                    l = o.displaySensitiveMedia,
                    s = o.entry,
                    c = o.inboxType,
                    d = o.isActive,
                    u = o.isDmNsfwMediaFilterEnabled,
                    p = o.isGroupDM,
                    m = o.isLowQuality,
                    h = o.isReadOnly,
                    f = o.isSent,
                    g = o.isTrusted,
                    y = o.isVoiceMessageActive,
                    b = o.isWide,
                    _ = o.participants,
                    E = o.perspective,
                    S = o.scribeVoiceMessage,
                    k = o.setShouldFreezeUpdates,
                    C = a.isFirstRapidFire,
                    I = a.isRapidFire,
                    x = [
                      f ? ti.messageContainer.sent : ti.messageContainer.received,
                      b ? ti.messageContainer.wide : ti.messageContainer.narrow,
                      f && b && ti.messageContainer.sentWide,
                      !f && b && ti.messageContainer.receivedWide,
                    ],
                    T = g && !h,
                    w = this._isDMVoiceMessage(),
                    F = (null == _ ? void 0 : _.length) || 0
                  return v.a.createElement(
                    V.a,
                    { style: x },
                    s.error
                      ? null
                      : v.a.createElement(jt, {
                          containerIsActive: d,
                          containerIsFocused: t,
                          containerIsHovered: n,
                          entry: s,
                          featureSwitches: this.context.featureSwitches,
                          inboxType: c,
                          isDraft: !!s.is_draft,
                          isGroupDM: p,
                          isSent: f,
                          onReportMessage:
                            w && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: g })
                                }
                              : void 0,
                          participantsCount: F,
                          perspective: E,
                          setShouldFreezeUpdates: k,
                          shouldShowReactionButton: T,
                          style: w && oe(R.a.theme.scale).actionsContainer({ isSent: f, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    v.a.createElement(Kr, {
                      displaySensitiveMedia: l,
                      entry: s,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: u,
                      isFirstRapidFire: C,
                      isLowQuality: m,
                      isRapidFire: I,
                      isSent: f,
                      isTrusted: g,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: w && oe(R.a.theme.scale).messageContainer({ isSent: f, isVoiceMessageActive: y }),
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
                    o = this.props,
                    l = o.entry,
                    s = o.isActive,
                    c = o.isGroupDM,
                    d = o.isSent,
                    u = o.participants,
                    p = o.user
                  return p
                    ? v.a.createElement(Jn, {
                        conversationId: l.conversation_id,
                        entryId: l.id,
                        entryText: null === (n = l.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: l.time,
                        isActive: s,
                        isDraft: !!l.is_draft,
                        isError: !!l.error,
                        isGroupDM: c,
                        isLastRapidFire: r,
                        isRapidFire: i,
                        isSent: d,
                        localMediaId: null === (a = l.message_data) || void 0 === a ? void 0 : a.localMediaId,
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
                    o = r.isVoiceMessageActive,
                    l = r.user,
                    s = this._isDMVoiceMessage()
                  if (!l || (!t && !o)) return null
                  var c = ae(R.a.theme.scale),
                    d = c.DMUserAvatarSizePx,
                    u = { showAvatar: !!s || !a || !!n, size: c.DMUserAvatarSizeType, user: l },
                    p = [
                      ti.userAvatar.base,
                      i ? ti.userAvatar.sent : ti.userAvatar.received,
                      s && oe(R.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return v.a.createElement(
                    V.a,
                    { style: ti.userAvatar.container },
                    i ? null : v.a.createElement(V.a, { style: ti.userAvatar.spacer }),
                    s
                      ? v.a.createElement(qr, {
                          color: i ? R.a.theme.colors.primary : R.a.theme.colors.text,
                          isActive: !!o,
                          size: d,
                          style: p,
                        })
                      : null,
                    v.a.createElement(V.a, { style: p }, v.a.createElement(Br, u)),
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
        })(v.a.Component)
      h()(Zr, 'contextType', C.a), h()(Zr, 'defaultProps', $r)
      var ei = Object(Qe.a)(
          ke(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = v.a.useContext(Cr.a),
                  r = Z()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  o = Z()(r, 1)[0] === n.id,
                  l = te()(te()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return v.a.createElement(e, l)
              }
              return (t.defaultProps = $r), t
            })(Zr),
          ),
        ),
        ti = {
          root: R.a.create(function (e) {
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
          messageContainer: R.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: zt },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: R.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: ae(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        ni = n('H4nC'),
        ai = function (e) {
          var t = e.conversation,
            n = e.entry,
            a = e.inboxType,
            r = e.isActive,
            i = e.isFirstRapidFire,
            o = e.isHighlightedMessageSearchEntry,
            l = e.isLastRapidFire,
            s = e.isRapidFire,
            c = e.isWide,
            d = e.perspective,
            u = e.scribeNamespace,
            p = e.setActiveEntry,
            m = e.setShouldFreezeUpdates
          if (Object(_.b)(n) || Object(_.e)(n)) {
            var h = t.conversation_id,
              f = t.low_quality,
              g = t.participants,
              y = t.read_only,
              b = t.trusted,
              E = t.type,
              S = n.message_data,
              C = (S = void 0 === S ? {} : S).sender_id,
              I = void 0 === h || b
            return v.a.createElement(ei, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: E === k.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: o,
              isLastRapidFire: l,
              isLowQuality: !!f,
              isRapidFire: s,
              isReadOnly: y,
              isSent: C === d,
              isTrusted: !!I,
              isWide: c,
              participants: g,
              perspective: d,
              scribeNamespace: u,
              senderId: C,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(_.a)(n)
            ? v.a.createElement(J, { conversation: t, entry: n, entryType: n.type, perspective: d })
            : Object(_.d)(n)
            ? v.a.createElement(ni.a, { entry: n, isCompact: !1 })
            : null
        },
        ri = n('0JOx'),
        ii = Object(fe.createSelector)(
          function (e, t) {
            var n = Object(Pe.o)(e, t.conversationId),
              a = n && Object(S.a)(n)
            return a && Object(k.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        oi = Object(ge.c)(ii),
        li = (n('Ef13'), n('uDfI')),
        si = Object(fe.createSelector)(
          function (e, t) {
            return be.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        ci = Object(li.b)(si),
        di = n('VPAj'),
        ui = n('Enqy'),
        pi = n('+/1j'),
        mi = 'overflow',
        hi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        fi = { stiffness: 1e3, damping: 70 },
        gi = 140,
        vi = { scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(0, fi) },
        yi = function (e, t) {
          return { key: e.id_str, data: e, style: vi }
        },
        bi = Object(di.a)({ translateY: gi, scale: 0 }),
        _i = Object(di.a)({ scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(gi, fi) }),
        Ei = [{ key: 'bubble', style: { scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(0, fi) } }],
        Si = Object(di.a)({ translateY: gi, scale: 0 }),
        ki = Object(di.a)({ scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(gi, fi) }),
        Ci = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ii = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { isHidden: !0 }),
              h()(s()(e), '_afterLeave', function () {
                var t = e.props.users
                e.setState(function (e) {
                  return { isHidden: 0 === t.length }
                })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  this.state.isHidden && this.props.users && this.props.users.length && this.setState({ isHidden: !1 })
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(U.a)(this.props, e) || !Object(U.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(hi).slice(0, 5).map(yi)
                  return (
                    t.length > 5 && n.push({ key: mi, style: vi }),
                    v.a.createElement(
                      V.a,
                      { style: [xi.root, e && xi.hidden] },
                      v.a.createElement(
                        V.a,
                        { style: xi.avatarRow },
                        v.a.createElement(
                          ui.TransitionMotion,
                          { styles: n, willEnter: bi, willLeave: _i },
                          function (e) {
                            return v.a.createElement(
                              v.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Ci(e.style)
                                return e.key === mi
                                  ? v.a.createElement(
                                      V.a,
                                      {
                                        key: e.key,
                                        style: [xi.avatar, xi.avatarSpacer, xi.overflowAvatar, { transform: a }],
                                      },
                                      v.a.createElement(pi.a, { style: xi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : v.a.createElement(
                                      V.a,
                                      { key: e.key, style: [xi.avatar, { transform: a }] },
                                      v.a.createElement(q.a, {
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
                      v.a.createElement(
                        ui.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Ei : [], willEnter: Si, willLeave: ki },
                        function (e) {
                          return v.a.createElement(
                            v.a.Fragment,
                            null,
                            e.map(function (e) {
                              return v.a.createElement(
                                V.a,
                                { key: e.key, style: [xi.messageBubble, { transform: Ci(e.style) }] },
                                v.a.createElement(V.a, { style: xi.dot }),
                                v.a.createElement(V.a, { style: [xi.dot, xi.dot1] }),
                                v.a.createElement(V.a, { style: [xi.dot, xi.dot2] }),
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
        })(v.a.Component),
        xi = R.a.create(function (e) {
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
        Ti = ci(Ii),
        Ri = n('tn7R'),
        wi = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_timers', {}),
              h()(s()(e), 'state', { forceHide: !1, userIds: [] }),
              h()(s()(e), '_handleLivePipelineUpdate', function (t) {
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
                        Ue()(
                          e.userIds.filter(function (e) {
                            return e !== n
                          }),
                        ),
                        [n],
                      ),
                    }
                  }))
              }),
              h()(s()(e), '_removeAvatar', function (t) {
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
            o()(n, [
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
                  return !t && v.a.createElement(Ti, { userIds: n })
                },
              },
              {
                key: '_teardownLivePipeline',
                value: function () {
                  Object(Ri.a)(this._timers).forEach(function (e) {
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
                  Object(ri.h)().then(function (n) {
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
        })(v.a.PureComponent)
      h()(wi, 'contextType', C.a)
      var Fi = oi(wi),
        Ai = n('3AAD'),
        Oi = n('iBK2'),
        Mi = n('RJrc'),
        Li = n('yw4N'),
        Di = n('mw9i'),
        Pi = Ae.a.i859a9d3,
        Ni = Ae.a.i8ecae5b,
        Ki = function (e) {
          return e.entry.id
        },
        ji = function (e) {
          return e.entry.type === H.b.MESSAGE
        },
        Bi = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_handleScrollEnd', function () {
                i.setState({ didRenderMessageSearchEntry: !0 })
              }),
              h()(s()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case H.b.TYPING_INDICATOR:
                    return n ? v.a.createElement(Fi, { conversationId: n }) : null
                  case H.b.READ_ONLY_INDICATOR:
                    return n
                      ? v.a.createElement(
                          V.a,
                          { style: Hi.readOnly },
                          v.a.createElement(
                            W.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Ni,
                            ' ',
                            v.a.createElement(W.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Pi),
                          ),
                        )
                      : null
                  case H.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return v.a.createElement(P, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              h()(s()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              h()(s()(i), '_setShouldFreezeUpdates', function (e) {
                i.setState({ shouldFreezeUpdates: e })
              }),
              (i.state = { activeEntryId: null, didRenderMessageSearchEntry: !1, shouldFreezeUpdates: !1 }),
              i
            )
          }
          return (
            o()(n, [
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
                    o = t.onForwardRequest,
                    l = t.onHistoryRequest,
                    s = t.shouldScrollToCenter,
                    c = t.style,
                    d = this.state.activeEntryId,
                    u = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        a = e.conversation,
                        r = e.footer,
                        i = e.messageSearchEntryId,
                        o = e.readOnlyEntry,
                        l = (a && a.entries) || [],
                        s = null == a ? void 0 : a.max_search_entry_id,
                        c = null == a ? void 0 : a.min_search_entry_id,
                        d = (null == a ? void 0 : a.status) === k.PAGINATION_STATUS.AT_END,
                        u = s ? Object(b.d)(l, s) : l.length - 1,
                        p = c ? Object(b.d)(l, c) : -1,
                        m = i && -1 === p ? Object(b.d)(l, i) : p,
                        h = l.slice(d ? 0 : m, u + 1),
                        f = (i ? h : l).reduce(function (e, r, o) {
                          n && 0 === o && e.push(y.b)
                          var s = Object(S.a)(e),
                            c = o === l.length - 1
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
                            var d = E(s.entry, r),
                              u = e[e.length - 2]
                            d
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return r && !i && f.push(r), a.read_only && o && !i && f.push(o), f
                    })({
                      conversation: n,
                      footer: y.d,
                      readOnlyEntry: y.c,
                      canInjectConversationProfileInfoHeader: n.status === H.c.AT_END && n.type === H.a.ONE_TO_ONE,
                      activeEntryId: d,
                      messageSearchEntryId: i,
                    }),
                    p = n.conversation_id,
                    m = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && ji(n)) return n
                      }
                      return (function (e) {
                        return e[e.length - 1]
                      })(e)
                    },
                    h = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    g =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== H.c.AT_END
                  return v.a.createElement(N.a.Consumer, null, function (t) {
                    var d = t.isDrawer ? K.b.drawerHeaderRadius : Hi.scrollSpace
                    return v.a.createElement(
                      V.a,
                      { style: [Hi.scrollContainer, d] },
                      v.a.createElement(
                        Li.a,
                        { style: [Hi.scrollContainer, r && Hi.conversationsPadding, d, c] },
                        a || null,
                        (n.status && n.status !== H.c.AT_END && !i) || g ? v.a.createElement(Mi.a, null) : null,
                        v.a.createElement(
                          Di.a,
                          { style: [Hi.content, Hi.alignTop], withGutter: !0 },
                          v.a.createElement(Oi.b, {
                            anchoring: Ai.a,
                            assumedItemHeight: 50,
                            cacheKey: h,
                            canBeAnchorFunction: ji,
                            centerInitialAnchor: i && s,
                            hasNewContentAtBottom: !0,
                            identityFunction: Ki,
                            initialAnchor: u.length > 0 ? f.a(i && s ? i : Ki(m(u))) : void 0,
                            items: u,
                            nearStartProximityRatio: 2,
                            onAtEnd: i && e.state.didRenderMessageSearchEntry ? o : void 0,
                            onAtStart: i && e.state.didRenderMessageSearchEntry ? l : void 0,
                            onNearStart: i ? void 0 : l,
                            onScrollEnd: i && !e.state.didRenderMessageSearchEntry ? e._handleScrollEnd : void 0,
                            renderer: e._renderItem,
                            withoutHeadroom: !1,
                          }),
                        ),
                        e.state.didRenderMessageSearchEntry &&
                          i &&
                          n.max_search_entry_id &&
                          n.search_status !== H.c.AT_END
                          ? v.a.createElement(Mi.a, null)
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
                    o = this.props,
                    l = o.conversation,
                    s = o.inboxType,
                    c = o.isWide,
                    d = o.messageSearchEntryId,
                    u = o.perspective,
                    p = o.scribeNamespace,
                    m = t.id === d
                  return t && s
                    ? v.a.createElement(ai, {
                        conversation: l,
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
        })(v.a.Component)
      h()(Bi, 'contextType', C.a)
      var Hi = R.a.create(function (e) {
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
    '4bHO': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ho0z')
      var a = function (e, t) {
        switch (e.type) {
          case 'user':
            return '@'.concat('users' === t ? e.data.screen_name : e.data.name, ' ')
          case 'hashtag':
          case 'topic':
          case 'event':
            return ''.concat(e.data.topic, ' ')
          case 'dm_conversation':
            return ''.concat(e.data.name, ' ')
          case 'no_result':
            return ''.concat(e.data.text, ' ')
          default:
            return ''
        }
      }
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
    '7myi': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        g = n.n(f),
        v = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        _ = n('dzqK'),
        E = n('GZwR'),
        S = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_genericWrapperRef', g.a.createRef()),
              h()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  d = s.queryContext,
                  u = c && d ? { word: d.word, resultType: d.resultType } : void 0
                return g.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: u,
                    ref: e._genericWrapperRef,
                    source: l || E.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    l = i.newTweetText
                  n({ target: { value: l } }), e._updateDOMTextArea(o, l)
                }
                e._setQueryContext(void 0)
              }),
              h()(s()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(s()(e), '_handleInputChange', function (t) {
                if (Object(_.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = v.c(n.selectionStart, i),
                  l = o.end,
                  s = o.start,
                  c = o.word,
                  d = v.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: s, endIndex: l })
                  } else e._setQueryContext(void 0)
              }),
              h()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.endIndex,
                    a = t.fullText,
                    r = t.startIndex,
                    i = a.slice(0, r)
                  return { newTweetText: i + e + a.slice(n), newCursor: i.length + e.length }
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.a = S
    },
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      }),
        n.d(t, 'c', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return I
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        l = n('3XMw'),
        s = n.n(l),
        c = n('fs1G'),
        d = s.a.c3752568,
        u = s.a.f78aa3e9,
        p = s.a.f9690dc0,
        m = s.a.i859a9d3,
        h = s.a.b1d35407,
        f = s.a.g539cca6,
        g = s.a.bbac0019,
        v = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        b = s.a.hf383be4,
        _ = s.a.b25c5b2a,
        E = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        k = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: u }, showToast: !0 },
        I =
          ((a = { defaultToast: { text: d } }),
          i()(a, o.a.CurrentUserSuspended, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, o.a.DirectMessageDuplicate, { toast: { text: _ } }),
          i()(a, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: v, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          i()(a, o.a.DirectMessageTooLongError, { toast: { text: g } }),
          i()(a, o.a.DirectMessageTweetNotFound, { toast: { text: y } }),
          i()(a, o.a.GenericBadRequest, { customAction: c.a }),
          i()(a, o.a.MessageSendError, { toast: { text: S } }),
          i()(a, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          i()(a, o.a.TargetUserNotFound, { toast: { text: b } }),
          i()(a, 'showToast', !0),
          a)
    },
    '8W85': function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')
      var a = n('zb92')
      t.a = Object(a.a)({
        loader: function () {
          return Promise.all([n.e(0), n.e(23), n.e(169)])
            .then(n.bind(null, 'u2Vg'))
            .then(function (e) {
              return { default: e.__DANGEROUS_IMPORT__ }
            })
        },
      })
    },
    Avzu: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
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
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return w
      }),
        n.d(t, 'l', function () {
          return A
        }),
        n.d(t, 'f', function () {
          return M
        }),
        n.d(t, 'd', function () {
          return D
        }),
        n.d(t, 'g', function () {
          return P
        }),
        n.d(t, 'e', function () {
          return K
        }),
        n.d(t, 'i', function () {
          return B
        }),
        n.d(t, 'j', function () {
          return H
        }),
        n.d(t, 'k', function () {
          return U
        }),
        n.d(t, 'h', function () {
          return V
        }),
        n.d(t, 'a', function () {
          return q
        }),
        n.d(t, 'b', function () {
          return G
        }),
        n.d(t, 'c', function () {
          return X
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        l = n('m3Bd'),
        s = n.n(l),
        c = n('KEM+'),
        d = n.n(c),
        u = n('yiKp'),
        p = n.n(u),
        m =
          (n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('1IsZ'),
          n('AspN')),
        h = n('xPna'),
        f = n('oEOe'),
        g = n('xCUF'),
        v = n('ude7'),
        y = n('07FG'),
        b = n('Ssj5'),
        _ = n('fEA7'),
        E = n.n(_),
        S = n('uKEd'),
        k = n('lnti'),
        C = n('/NU0'),
        I = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        x = 'dmComposer',
        T = {}
      var R = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            l = e.attachment,
            s = void 0 === l ? {} : l,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: a, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        w = function (e) {
          return function (t, n, a) {
            var i = a.api,
              l = e || {},
              c = l.senderId,
              d = l.cardUrl,
              u = l.conversationId,
              b = l.localMediaId,
              _ = l.recipients,
              x = void 0 === _ ? [] : _,
              T = l.requestId,
              w = void 0 === T ? E.a.v1() : T,
              F = l.tweetAttachment,
              A = l.quickReply,
              O = s()(l, I)
            t($(u))
            var M = n(),
              L = b || j(n(), u),
              P = m.k(M, L),
              N = o()(P, 1)[0] || {},
              K = N.mediaFile,
              B = N.mediaMetadata,
              H = x.length > 0 && x.join(','),
              U = {}
            K && K.isGif
              ? (U.extraInitParams = '&media_category=dm_gif')
              : K && K.isVideo && (U.extraInitParams = '&media_category=dm_video')
            var W = m.p(L, U),
              q = [t(W)],
              z = (V(M, u) || {}).found_media_origin
            return (
              K && K.isGif && q.push(Object(v.a)(K)),
              Promise.all(q).then(
                function (n) {
                  var a = o()(n, 2),
                    l = o()(a[0], 1)[0],
                    s = a[1],
                    v = (null == B ? void 0 : B.altText) || (null == B ? void 0 : B.defaultAltText),
                    b = !!v
                  return (
                    l && (z || b)
                      ? t(m.m(p()({ media_id: l.uploadId, found_media_origin: z }, !!b && { alt_text: { text: v } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (F || {}).id_str,
                        a = {}
                      if (l) {
                        var o = l.mediaFile,
                          m = void 0 === o ? {} : o,
                          v = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, v), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, v), {}, { media_url_https: s, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, v), {}, { media_url_https: m.url, type: 'video' }))
                      } else F && (a.tweet = { status: n })
                      var b = (l || {}).uploadId,
                        _ = R({
                          attachment: a,
                          conversation_id: u,
                          id: w,
                          recipient_ids: H,
                          sender_id: c,
                          text: e.text,
                        }),
                        E = p()(
                          p()(
                            p()(p()({}, O), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: H, request_id: w, tweet_id: n },
                        )
                      A &&
                        ((E['quick_reply_response[options][id]'] = A.id),
                        (E['quick_reply_response[options][selected_id]'] = A.selected_id))
                      var I = Object(k.a)([
                        ee(u),
                        { type: g.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(S.b)(u, w, _),
                      ])
                      return (
                        t(I),
                        i.DirectMessages.sendMessage(E).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              l = a.tweets,
                              s = a.users,
                              c = n.result.conversations
                            Object(C.a)(L) && t(X(u, L))
                            var d = Object(k.a)(
                              [{ type: g.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: s, tweets: l, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(S.j)(u, w, e), D(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = R({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: w,
                                localMediaId: L,
                                recipient_ids: H,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(k.a)([
                                { type: g.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(S.b)(u, w, r),
                              ])
                            return t(i), Object(f.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(u)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(k.a)([Object(C.a)(L) && X(u, L), ne(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        F = function (e, t) {
          return e.dmComposer[t]
        },
        A = function (e, t) {
          var n = F(e, t)
          return n ? n.text : null
        },
        O = 'rweb/dmComposer/SAVE_TEXT',
        M = function (e, t) {
          return { type: O, conversationId: e, text: t }
        },
        L = 'rweb/dmComposer/REMOVE_TEXT',
        D = function (e) {
          return { type: L, conversationId: e }
        },
        P = function (e, t) {
          var n = F(e, t)
          return n ? n.cardUrl : null
        },
        N = 'rweb/dmComposer/SAVE_CARD_URL',
        K = function (e, t) {
          return { type: N, conversationId: e, cardUrl: t }
        },
        j = function (e, t) {
          var n = F(e, t)
          return n ? n.mediaId : null
        },
        B = function (e, t) {
          var n = m.k(e, j(e, t))
          return n.length > 0 ? n[0] : null
        },
        H = function (e, t) {
          var n = F(e, t)
          return !!n && n.isUploading
        },
        U = function (e, t) {
          return m.l(e, j(e, t))
        },
        V = function (e, t) {
          var n = F(e, t)
          return n ? n.gifMetadata : null
        },
        W = 'rweb/dmComposer/ADD_MEDIA',
        q = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: W, conversationId: e }
        },
        z = 'rweb/dmComposer/CANCEL_UPLOAD',
        G = function (e) {
          return { type: z, conversationId: e }
        },
        Q = 'rweb/dmComposer/REMOVE_MEDIA',
        Y = function (e) {
          return { type: Q, conversationId: e }
        },
        X = function (e, t) {
          return function (n) {
            n(m.i(t)), n([G(e), Y(e)])
          }
        },
        J = 'rweb/dmComposer/UPLOAD_REQUEST',
        $ = function (e) {
          return { type: J, conversationId: e }
        },
        Z = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: Z, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ne = function (e) {
          return { type: te, conversationId: e }
        }
      b.a.register(
        d()({}, x, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case z:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case Z:
            case Q:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case O:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, l), {}, { text: t.text })))
            case N:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case L:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, c), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    DbJc: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VPAj'),
        o = n('7n04'),
        l = r()(
          r()({}, o.a),
          {},
          { initialScrollHeadroom: Object(i.a)(0), scrollHeadroom: Object(i.a)(0), pinToNewestWhenAtNewest: !0 },
        )
      t.a = l
    },
    GSsg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = (n('yH/f'), n('B5iK')),
        s = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            r()(this, e)
            var a = n.interval,
              i = void 0 === a ? 6e4 : a,
              o = n.burstInterval,
              s = void 0 === o ? 3e3 : o,
              c = n.burstDuration,
              d = void 0 === c ? 3e5 : c
            ;(this.pollTimer = new l.b(i).interval(t)), (this.burstTimer = new l.a(this.pollTimer, s, d))
          }
          return (
            o()(e, [
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
    H4nC: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('MWbm'),
        s = n('rHpw'),
        c = n('t62R'),
        d = n('4n2h'),
        u = s.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        p = o.a.d84b485d,
        m = o.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          a = e.isSelected,
          i = void 0 !== a && a,
          o = e.unread,
          s = void 0 !== o && o,
          h = 'follow' === t.reason ? p : m,
          f = Object(d.b)(s),
          g = Object(d.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: g, weight: f }, h)
          : r.a.createElement(
              l.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: g, size: 'subtext2', weight: f }, h),
            )
      }
    },
    HvW7: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('XiYe'),
        i = n('PJTX'),
        o = n('ERkP'),
        l = n('e1/f').commitMutation,
        s = o.useState,
        c = o.useEffect,
        d = o.useRef,
        u = o.useCallback
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
          n = i(),
          o = r(),
          p = d(n),
          m = d(e),
          h = d(new Set()),
          f = s(!1),
          g = f[0],
          v = f[1],
          y = u(
            function (t) {
              p.current === n && m.current === e && (h.current.delete(t), o.current && v(h.current.size > 0))
            },
            [n, o, e],
          )
        c(
          function () {
            ;(p.current === n && m.current === e) ||
              ((h.current = new Set()), o.current && v(!1), (p.current = n), (m.current = e))
          },
          [n, o, e],
        )
        var b = u(
          function (r) {
            var i = t(
              n,
              (0, a.default)(
                (0, a.default)({}, r),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    var n
                    y(i), null === (n = r.onCompleted) || void 0 === n || n.call(r, e, t)
                  },
                  onError: function (e) {
                    var t
                    y(i), null === (t = r.onError) || void 0 === t || t.call(r, e)
                  },
                  onUnsubscribe: function () {
                    var e
                    y(i), null === (e = r.onUnsubscribe) || void 0 === e || e.call(r)
                  },
                  onNext: function () {
                    var e
                    null === (e = r.onNext) || void 0 === e || e.call(r)
                  },
                },
              ),
            )
            return h.current.add(i), o.current && v(!0), i
          },
          [y, t, n, o, e],
        )
        return [b, g]
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
        o = n('lRnM'),
        l = n('LVU8'),
        s = function (e) {
          return r()({}, i.a.ClientNotPermitted, {
            customAction: function () {
              return Object(l.d)('/messages/', { statusCode: 401 }), Object(o.v)(e)
            },
          })
        }
    },
    IpT4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
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
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
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
    KqB4: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], a = (0, r.default)(e, t), i = 0; i < a.length; i++) n.push(a[i].url)
          return n
        })
      var r = a(n('vwfs'))
      e.exports = t.default
    },
    MLl7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return i
        })
      n('yH/f'), n('vrRf'), n('1IsZ')
      var a = Object.freeze({ Composition: 'composition', DMComposition: 'dm_composition' }),
        r = function (e) {
          return Object.values(a).indexOf(e) >= 0
        },
        i = function (e, t) {
          return 'boolean' == typeof e ? e : t
        }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(v),
        b = n('0JOx'),
        _ = n('zh9S'),
        E = n('MMRb'),
        S = n('CDB5'),
        k = n('RqPI'),
        C = n('1YZw'),
        I = n('hqKg'),
        x = n('kGix'),
        T = n('AQOc'),
        R = n('UhuB'),
        w = n('pNZL'),
        F = n('G6rE'),
        A = n('oEGd'),
        O = n('X/yg'),
        M = n('0KEI'),
        L = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        P = Object(I.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === x.a.LOADED ? t : e
          },
        ),
        N = Object(I.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, D(0, t))
          },
          k.r,
          function (e, t) {
            return t ? Object(O.e)(e, t) : void 0
          },
        ),
        K = Object(I.createSelector)(
          function (e, t) {
            return E.selectConversation(e, D(0, t))
          },
          E.selectEntries,
          O.m,
          k.r,
          O.n,
          O.o,
          F.e.selectAll,
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
          L.j,
          R.n,
          N,
          L.m,
          function (e, t) {
            var n = D(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, o, l, s, c, d, u, p, m, h, f, g, v, y) {
            var b = e && e.data
            return {
              conversation: (b && Object(T.a)(b, t, o)) || void 0,
              dataSaverMode: h,
              draftText: m,
              dtabBarInfo: v,
              fetchStatus: l,
              gifMetadata: p,
              inboxType: y,
              isDmReceiptSettingEnabled: f,
              cardUrl: s,
              isNewGroupConversation: n,
              isUploading: c,
              media: d,
              mediaUploadProgress: u,
              newConversationParticipants: r,
              perspective: a,
              quickReplyOptions: g,
              tweetAttachment: i,
            }
          },
        ),
        j = Object(A.d)(K, function (e) {
          return {
            acceptConversation: E.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return S.a(t, e, n)
              }),
            saveText: S.f,
            addToast: C.b,
            addWelcomeMessageToConversation: E.addWelcomeMessageToConversation,
            cancelUpload: Object(O.a)(e.conversationId),
            createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationFuture: E.fetchConversationFuture,
            fetchConversationHistoricalSnapshot: E.fetchConversationHistoricalSnapshot,
            fetchConversationHistory: E.fetchConversationHistory,
            fetchConversationIfNeeded: E.fetchConversationIfNeeded,
            fetchInboxIfNeeded: E.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: E.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: _.googleAnalyticsPageView,
            leaveConversation: E.leaveConversation,
            removeMedia: Object(O.b)(e.conversationId),
            removeText: S.d,
            scribeAction: _.scribeAction,
            scribePageImpression: _.scribePageImpression,
            sendMessage: S.m,
            updateConversationReadState: E.updateConversationReadState,
            updateTweetDetailNav: w.b,
            updateTyping: E.updateTyping,
            removeConversation: E.removeConversation,
            popOutConversation: E.popOutConversation,
          }
          var t
        }),
        B = n('I2k/'),
        H = n('4AMG'),
        U = n('uB9N'),
        V = n('htvZ'),
        W = n('v//M'),
        q = n('3XMw'),
        z = n.n(q),
        G = n('UgB4'),
        Q = n('J2UM'),
        Y = n('07FG'),
        X = n('I8M8'),
        J = n('7myi'),
        $ = n('pHkl'),
        Z = n('883S'),
        ee = n('z0MJ'),
        te = n.n(ee),
        ne = n('Es6L'),
        ae = n('LsPn'),
        re = n('sl05'),
        ie = n('GSsg'),
        oe = n('ddV6'),
        le = n.n(oe),
        se = (n('ho0z'), n('v6aA')),
        ce = n('EbOo'),
        de = n('rxPX'),
        ue = Object(de.a)().propsFromActions(function () {
          return {
            addToast: C.b,
            block: F.e.block,
            createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: E.muteDMUser,
            unmuteDMUser: E.unmuteDMUser,
            unblock: F.e.unblock,
          }
        }),
        pe = (n('AQ79'), n('u0B7')),
        me = (n('uFXj'), n('97Jx')),
        he = n.n(me),
        fe = n('tZH3'),
        ge = n('/yvb'),
        ve = n('efqG'),
        ye = z.a.ccf2f24e,
        be = z.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = y.a.createElement(ge.a, he()({}, i, { accessibilityRole: 'button' }), be),
            l = y.a.createElement(ge.a, he()({}, i, { onPress: a }), ye),
            s = y.a.useCallback(
              function (e, t) {
                return y.a.createElement(fe.a, {
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
          return t ? l : y.a.createElement(ve.a, { renderContent: s }, o)
        },
        Ee = n('MWbm'),
        Se = n('cHvH'),
        ke = n('rHpw'),
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
            o = function () {
              return e.onReport()
            },
            l = function () {
              return e.onLeave()
            }
          return y.a.createElement(Se.a, null, function (t) {
            var s = t.windowWidth <= ke.a.theme.breakpoints.small
            return y.a.createElement(
              Ee.a,
              { style: Ie.actionsContainer },
              n &&
                y.a.createElement(
                  ge.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Ie.actionFullWidth, Ie.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              y.a.createElement(
                Ee.a,
                { style: s ? Ie.actionFullWidth : [Ie.actionHalfWidth, Ie.actionMarginRight] },
                y.a.createElement(_e, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(O.j)(e.conversation, a).screenName,
                }),
              ),
              y.a.createElement(
                ge.a,
                {
                  onPress: l,
                  size: 'medium',
                  style: s ? [Ie.actionFullWidth, Ie.actionMarginTop] : [Ie.actionHalfWidth, Ie.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                y.a.createElement(
                  ge.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Ie.actionFullWidth, Ie.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        Ie = ke.a.create(function (e) {
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
        xe = n('aITJ'),
        Te = n('t62R'),
        Re = n('eb3s'),
        we = n('vMjK'),
        Fe = n('7JQg'),
        Ae = n('24HD'),
        Oe = n('zCf4'),
        Me = z.a.da878dcf,
        Le = z.a.d96cf7cd,
        De = (z.a.gde6b424, z.a.e308019b, z.a.gf5e9ea6, z.a.hc52446b),
        Pe = z.a.f7e1ad65,
        Ne = { headline: z.a.gdf4b79f, text: z.a.bbf83d83, confirmButtonLabel: z.a.bb1d57b6 },
        Ke = ke.a.create(function (e) {
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
        je = Object(Fe.a)({ element: 'untrusted_interstitial' })(
          ue(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = y.a.useContext(se.a),
              o = Object(Oe.f)(),
              l = Object(Oe.g)(),
              s = y.a.useState(!1),
              c = le()(s, 2),
              d = c[0],
              u = c[1],
              p = y.a.useState(!1),
              m = le()(p, 2),
              h = m[0],
              f = m[1],
              g = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE }],
                  }
                },
                [t.type],
              ),
              v = y.a.useCallback(
                function (e, t) {
                  n(r()(r()({}, a), {}, { action: e }), t || g())
                },
                [g, n, a],
              )
            y.a.useEffect(
              function () {
                v('impression')
              },
              [v],
            )
            var b,
              _,
              S,
              k,
              C = function () {
                u(!0), f(!1)
              },
              I = function () {
                u(!1)
              },
              x = function () {
                f(!1)
              },
              T = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = (null == t ? void 0 : t.participants.length) || 0,
                  c = (null == l || null === (n = l.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: s,
                    position: c,
                    inbox_type: Object(O.i)(r),
                    entry_point: $.c.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: a }), v(o, d), R()
              },
              R = function () {
                var t = e.inboxType
                o.push(Object(O.f)(t))
              },
              w = function () {
                !(function () {
                  var n,
                    a = e.acceptConversation,
                    i = e.conversationId,
                    o = e.inboxType,
                    s = e.scribeAction,
                    c = e.scribeNamespace,
                    d = (null == t ? void 0 : t.participants.length) || 0,
                    u = (null == l || null === (n = l.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (a(i),
                    s(r()(r()({}, c), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE,
                      conversation_participant_count: d,
                      entry_point: $.c.REQUEST_ACTION_SHEET,
                      inbox_type: Object(O.i)(o),
                      position: u,
                    }))
                })()
              },
              F = function (t) {
                return function () {
                  var n = e.addToast,
                    a = e.block,
                    r = e.createLocalApiErrorHandler
                  f(!1),
                    a(t).then(function () {
                      n({ action: { label: we.c, onAction: A(t) }, text: we.a })
                    }, r(ce.a)),
                    v('block')
                }
              },
              A = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), v('unblock')
                }
              },
              M = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                Ee.a,
                { style: Ke.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    Te.b,
                    { style: Ke.copy },
                    e ? De : Pe({ senderName: Object(O.j)(t, n).name }),
                  )
                })(M),
                y.a.createElement(Ce, {
                  acceptButtonText: Me,
                  conversation: t,
                  declineButtonText: Le,
                  isGroup: M,
                  onAccept: w,
                  onBlock: function () {
                    u(!1), f(!0)
                  },
                  onLeave: C,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), o.push(Object(O.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              xe.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: Le, onLeftClick: C, onRightClick: w, rightText: Me })
                : null,
              d
                ? y.a.createElement(Re.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: I,
                    onConfirm: T,
                    text: Ne.text,
                  })
                : null,
              h
                ? ((b = i.loggedInUserId),
                  (_ = Object(O.j)(t, b)),
                  (S = _.idStr),
                  (k = _.screenName),
                  Object(Ae.j)({ confirmation: Object(Ae.f)(k), onClose: x, handleConfirm: F(S) }))
                : null,
            )
          }),
        ),
        Be = n('yw4N'),
        He = n('rFBM'),
        Ue = n('mw9i'),
        Ve = n('jTgF'),
        We = n('+d3d'),
        qe = n('mN6z'),
        ze = y.a.createElement(G.a, null),
        Ge = z.a.badb01a0,
        Qe = z.a.e3275464,
        Ye = z.a.d6b11d9c,
        Xe = z.a.i7ca1446,
        Je = function (e) {
          return e && (e.tweet || e.media)
        },
        $e = function (e) {
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
        Ze = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, a)),
              g()(d()(i), '_composer', y.a.createRef()),
              g()(d()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              g()(d()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              g()(d()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              g()(d()(i), '_initialFetch', function () {
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
              g()(d()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              g()(d()(i), '_leaveConversation', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.leaveConversation)({ conversationId: t }).catch(n({ showToast: !0 }))
              }),
              g()(d()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  a = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    xe.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(a({ showToast: !0 }))
              }),
              g()(d()(i), '_renderActions', function () {
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
                      xe.b.isKaiOS()
                        ? y.a.createElement(ae.a, {
                            leftText: Xe,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Ge,
                          })
                        : null,
                    )
              }),
              g()(d()(i), '_render', function () {
                var e,
                  t,
                  n,
                  a = i.props,
                  r = a.conversation,
                  o = a.conversationId,
                  l = a.drawerHeader,
                  s = a.inboxType,
                  c = a.isWide,
                  d = a.location,
                  u = a.perspective,
                  p = a.scribeNamespace,
                  m = i.state,
                  h = m.attachment,
                  f = m.composerHeight
                return y.a.createElement(
                  V.b,
                  { key: o },
                  y.a.createElement(
                    He.a,
                    { allowDragDrop: !Je(h), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    y.a.createElement(
                      Be.a,
                      {
                        style: [
                          re.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(r) && { paddingBottom: f },
                        ],
                      },
                      u &&
                        r &&
                        (null == d ||
                          null === (e = d.state) ||
                          void 0 === e ||
                          !e.entryPoint ||
                          i.state.hasLoadedSnapshot)
                        ? y.a.createElement(H.a, {
                            conversation: r,
                            drawerHeader: l,
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
              g()(d()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              g()(d()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              g()(
                d()(i),
                '_throttleUpdateTyping',
                Object(We.a)(
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
              g()(
                d()(i),
                '_throttleSaveDraftText',
                Object(We.a)(
                  function () {
                    i.props.conversationId && i._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              g()(d()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              g()(d()(i), '_handleForwardRequest', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.createLocalApiErrorHandler,
                  r = e.fetchConversationFuture
                i.setState({ shouldScrollToCenter: !1 }),
                  null != t && t.max_search_entry_id && r({ conversationId: n }).catch(a())
              }),
              g()(d()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              g()(d()(i), '_handleRelativeHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.fetchConversationHistory
                i.setState({ shouldScrollToCenter: !1 }), a({ conversationId: t, isSearch: !0 }).catch(n())
              }),
              g()(d()(i), '_handleSendMessage', function (e, t) {
                var n,
                  a,
                  o = i.props,
                  l = o.addToast,
                  s = o.cardUrl,
                  c = o.conversation,
                  d = o.conversationId,
                  u = o.createLocalApiErrorHandler,
                  p = o.gifMetadata,
                  m = o.history,
                  h = o.location,
                  f = o.newConversationParticipants,
                  g = o.perspective,
                  v = o.scribeAction,
                  y = o.scribeNamespace,
                  b = o.sendMessage,
                  _ = o.tweetAttachment,
                  S = i.state.attachment,
                  k = S && S.media,
                  C = null != c && c.participants ? c.participants.length : 0,
                  I = (null == c ? void 0 : c.type) === E.CONVERSATION_TYPE.GROUP,
                  x = 'unknown'
                if (
                  (e.quickReply ||
                    k ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  x = 'gif'
                else if (s) x = 'card'
                else if (_) x = 'tweet'
                else {
                  var T,
                    R = null == S || null === (T = S.media) || void 0 === T ? void 0 : T.mediaFile,
                    w = null != R && R.isVideo ? 'video' : null != R && R.isGif ? 'gif' : 'photo'
                  x = R ? w : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    v(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
                      conversation_id: d,
                      conversation_participant_count: C,
                      conversation_type: I ? $.j.GROUP : $.j.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  d
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (a = n.media) &&
                          void 0 !== a &&
                          a.uploading) ||
                        (i.setState({ attachment: null }), m.replace(h.pathname)),
                      b(
                        r()(
                          { senderId: g, cardUrl: s, conversationId: d, text: t, tweetAttachment: _ },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            k &&
                            (i._currentComposer && i._currentComposer.clear(),
                            i._currentComposer && i._currentComposer.focus()),
                            i.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((i.setState({ isSending: !1 }), !Object(Ve.d)(e) || e.code !== X.b.CANCELED))
                            if (Object(Ve.d)(e)) {
                              var t = Object(Ve.b)(e, Ye)
                              t && l(t)
                            } else u(Z.b)(e)
                        }))
                    : (b({
                        senderId: g,
                        recipients:
                          f &&
                          f.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: _,
                      }).then(function (e) {
                        v(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: f ? f.length + 1 : 0,
                          conversation_type: $.j.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          m.replace('/messages/'.concat(e))
                      }, u(Z.b)),
                      Promise.resolve())
                )
              }),
              g()(d()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              g()(d()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              g()(d()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              g()(d()(i), '_handleSaveDraftText', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.saveText
                t && i._currentComposer && n(t, i._currentComposer.value())
              }),
              (i.state = {
                attachment: $e(e),
                composerHeight: ke.a.theme.componentDimensions.appBarHeight,
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
                    o = n.updateTweetDetailNav
                  return (
                    i(r),
                    o(r),
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
                    return Object(Q.a)().then(function (t) {
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
                  Object(b.h)().then(function (n) {
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
                    o = this.props,
                    l = o.conversation,
                    s = o.conversationId,
                    c = o.fetchStatus,
                    d = o.isUploading,
                    u = o.location,
                    p = o.quickReplyOptions,
                    m = o.updateConversationReadState
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
                    : ((null == l ? void 0 : l.sort_event_id) !==
                        (null === (i = e.conversation) || void 0 === i ? void 0 : i.sort_event_id) && m(s),
                      d || !e.isUploading || p || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === x.a.LOADED && c !== x.a.LOADED && s && this._fetchConversation(s))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(qe.a)(t, n) || this.setState({ attachment: $e(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    Ue.a,
                    { style: [re.a.root, xe.b.isKaiOS() && re.a.kaiOSFix] },
                    y.a.createElement(W.a, {
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
                    o = e.draftText,
                    l = e.dtabBarInfo,
                    s = e.history,
                    c = e.isUploading,
                    d = e.mediaUploadProgress,
                    u = e.quickReplyOptions,
                    p = e.removeMedia,
                    m = e.richTextInputContext,
                    h = e.scribeNamespace,
                    f = e.typeaheadWrapper,
                    g = this.state,
                    v = g.attachment,
                    b = g.isSending,
                    _ = this.props.prefillText || o
                  return null != a && a.read_only
                    ? null
                    : y.a.createElement(U.a, {
                        attachment: v,
                        conversationId: r,
                        disabled: c,
                        dtabBarInfo: l,
                        history: s,
                        isCardPreviewTombstoned: Object(Y.a)(n),
                        isSending: b,
                        isUploading: c,
                        key: r,
                        mediaUploadProgress: d,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: i ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof _ ? _ : void 0,
                        primaryActionIcon: ze,
                        primaryActionLabel: Qe,
                        quickReplyOptions: u,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: m,
                        scribeNamespace: h,
                        typeaheadWrapper: f,
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
                    o = r.fetchConversationHistoricalSnapshot,
                    l = r.fetchConversationIfNeeded,
                    s = r.location,
                    c = r.updateConversationReadState
                  return null != s && null !== (t = s.state) && void 0 !== t && t.entryPoint
                    ? (this.setState({ hasLoadedSnapshot: !1 }),
                      o({
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
                            : n.status) === E.PAGINATION_STATUS.AT_END && (r = !1),
                            a.setState({ hasLoadedSnapshot: !0, shouldScrollToCenter: r })
                        })
                        .catch(function (e) {
                          return a.setState({ hasLoadedSnapshot: !0 }), i(e)
                        }))
                    : l({ conversationId: e })
                        .then(function () {
                          return c(e)
                        })
                        .catch(i(Object(B.a)(e)))
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
                    o = n.location,
                    l = o.query.text,
                    s = Array.isArray(o.query.welcome_message_id)
                      ? o.query.welcome_message_id[0]
                      : o.query.welcome_message_id,
                    c = !!this.state.attachment || !(!l || s),
                    d = !r || !r.type || r.type === E.CONVERSATION_TYPE.GROUP,
                    u = r && (null == r || null === (t = r.participants) || void 0 === t ? void 0 : t.length) <= 1
                  return c || d || u ? Promise.resolve() : a(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(Ze, 'contextType', se.a), g()(Ze, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Fe.a)()(j(Ze))
    },
    RJrc: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('MWbm'),
        s = n('Qwev'),
        c = n('rHpw'),
        d = o.a.ffde2fdb,
        u = c.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.a.createElement(l.a, { style: u.spinner }, r.a.createElement(s.a, { accessibilityLabel: d }))
      }
    },
    'ShJ/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
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
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    UgB4: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
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
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ isDrawer: !1 })
      t.a = r
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return A
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(v),
        b = n('3XMw'),
        _ = n.n(b),
        E = n('cjZk'),
        S = 'fileInput',
        k = n('sjK1'),
        C = n('/Imo'),
        I = n('rHpw'),
        x = n('9HgX'),
        T = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        R = _.a.b9960f31,
        w = { viewType: 'media_picker' },
        F = y.a.createElement(E.a, null),
        A = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? x.b : []).concat(t ? [x.a] : []).concat(r ? k.a : [])
        },
        O = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptImages,
                    a = e.acceptVideo,
                    i = e.customMimeTypes,
                    l = e.icon,
                    s = e.style,
                    c = e.withIcon,
                    d = o()(e, T),
                    u = A({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    C.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: w,
                      icon: c ? l : void 0,
                      style: [M.root, s],
                      testID: S,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(O, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: R,
        icon: F,
        size: 'medium',
        withIcon: !0,
      })
      var M = I.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = O
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
          return h
        }),
        n.d(t, 'l', function () {
          return f
        }),
        n.d(t, 'g', function () {
          return g
        }),
        n.d(t, 'j', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return y
        }),
        n.d(t, 'f', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return _
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'e', function () {
          return S
        })
      n('vfdX'), n('z84I'), n('ho0z')
      var a = n('CDB5'),
        r = n('Myq3'),
        i = n('XnpN'),
        o = n('AQ79'),
        l = n('pHkl'),
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
            n = l.f.UNKNOWN,
            a = (t && t.attachment) || {}
          return (
            a.tweet
              ? (n = l.f.TWEET)
              : a.photo
              ? (n = l.f.PHOTO)
              : a.animated_gif
              ? (n = l.f.GIF)
              : a.video
              ? (n = a.video.audio_only ? l.f.VOICE : l.f.VIDEO)
              : a.card
              ? (n = l.f.CARD)
              : null != t && t.text && (n = l.f.TEXT),
            n
          )
        }
      function p(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function m(e) {
        return e === o.d.SECONDARY ? l.e.REQUESTS : e === o.d.TERTIARY ? l.e.LOW_QUALITY : l.e.PRIMARY
      }
      function h(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function f(e, t) {
        return !!(e && e.video && h(t)) && !!e.video.audio_only
      }
      function g(e, t, n, a) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: a, scribeNamespace: n },
        }
      }
      function v(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(i.a)(e, t).map(function (e) {
            return e.user
          }),
          a = n && n[0]
        return { name: (a && a.name) || '', screenName: (a && a.screen_name) || '', idStr: (a && a.id_str) || '' }
      }
      var y = function (e) {
          return e === o.d.TERTIARY
            ? 'low_quality_timeline'
            : e === o.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        b = function (e) {
          return e === o.d.TERTIARY
            ? '/messages/requests/additional'
            : e === o.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        _ = function (e) {
          return function () {
            return a.b(e)
          }
        },
        E = function (e) {
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
    X8um: function (e, t, n) {
      'use strict'
      var a,
        r,
        i,
        o,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        g,
        v,
        y = {
          fragment: {
            argumentDefinitions: (a = [{ defaultValue: null, kind: 'LocalArgument', name: 'label' }]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMPinnedInboxQuery',
            selections: [
              {
                alias: 'labeled_conversation_slice',
                args: (r = [
                  { kind: 'Variable', name: 'label', variableName: 'label' },
                  { kind: 'Literal', name: 's', value: 18 },
                ]),
                concreteType: 'DMLabeledConversationsSlice',
                kind: 'LinkedField',
                name: '__DMPinnedInboxQuery_labeled_conversation_slice_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'DMConversation',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      (i = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                      (o = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationInfo',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          (l = {
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
                              l,
                              (s = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'conversation_type',
                                storageKey: null,
                              }),
                              (c = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                              (d = {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'created_at_millis',
                                storageKey: null,
                              }),
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
                                      (u = {
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
                                          o,
                                          {
                                            kind: 'RequiredField',
                                            field: (p = {
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
                                                {
                                                  alias: null,
                                                  args: null,
                                                  kind: 'ScalarField',
                                                  name: 'screen_name',
                                                  storageKey: null,
                                                },
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
                                            path: 'labeled_conversation_slice.items.legacy.participants_metadata.user_results.result.legacy',
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
                          (m = {
                            alias: null,
                            args: null,
                            concreteType: 'PerspectivalConversationMetadata',
                            kind: 'LinkedField',
                            name: 'perspectival_conversation_metadata',
                            plural: !1,
                            selections: [
                              {
                                alias: null,
                                args: null,
                                kind: 'ScalarField',
                                name: 'last_read_event_id',
                                storageKey: null,
                              },
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
                      (h = {
                        alias: null,
                        args: null,
                        concreteType: 'DMConversationLabelInfo',
                        kind: 'LinkedField',
                        name: 'labels',
                        plural: !0,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'label_type', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'timestamp', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    storageKey: null,
                  },
                  (f = {
                    alias: null,
                    args: null,
                    concreteType: 'SliceInfo',
                    kind: 'LinkedField',
                    name: 'slice_info',
                    plural: !1,
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                    ],
                    storageKey: null,
                  }),
                  (g = {
                    kind: 'ClientExtension',
                    selections: [{ alias: null, args: null, kind: 'ScalarField', name: '__id', storageKey: null }],
                  }),
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
            name: 'DMPinnedInboxQuery',
            selections: [
              {
                alias: null,
                args: r,
                concreteType: 'DMLabeledConversationsSlice',
                kind: 'LinkedField',
                name: 'labeled_conversation_slice',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: 'DMConversation',
                    kind: 'LinkedField',
                    name: 'items',
                    plural: !0,
                    selections: [
                      i,
                      o,
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationInfo',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          l,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ConversationMetadata',
                            kind: 'LinkedField',
                            name: 'metadata',
                            plural: !1,
                            selections: [
                              l,
                              s,
                              c,
                              d,
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
                                      (v = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: '__typename',
                                        storageKey: null,
                                      }),
                                      u,
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
                                      v,
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          i,
                                          o,
                                          p,
                                          {
                                            alias: null,
                                            args: null,
                                            filters: null,
                                            handle: 'defaultScalars',
                                            key: '',
                                            kind: 'LinkedHandle',
                                            name: 'legacy',
                                          },
                                        ],
                                        type: 'User',
                                        abstractKey: null,
                                      },
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
                                    name: 'result',
                                  },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          m,
                        ],
                        storageKey: null,
                      },
                      h,
                    ],
                    storageKey: null,
                  },
                  f,
                  g,
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: r,
                filters: ['label', 's'],
                handle: 'slice',
                key: 'DMPinnedInboxQuery_labeled_conversation_slice',
                kind: 'LinkedHandle',
                name: 'labeled_conversation_slice',
                handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
              },
            ],
          },
          params: {
            id: 'cKsXL-p1VWDQbomSDV2bAg',
            metadata: { sliceInfoPath: ['labeled_conversation_slice', 'slice_info'] },
            name: 'DMPinnedInboxQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(y.hash = 'ce2e2976cf1d1610f3238a158593facf'), (e.exports = y)
    },
    XiYe: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = a.useEffect,
        i = a.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          r(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1
              }
            )
          }, []),
          e
        )
      }
    },
    YemM: function (e, t, n) {
      'use strict'
      n('2G9S')
      var a = n('rHpw').a.create(function (e) {
        return {
          root: {
            backgroundColor: e.colors.cellBackground,
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.spaces.space16,
            width: '100%',
          },
          active: { backgroundColor: e.colors.gray0 },
          bodyColumn: { flexDirection: 'row' },
          inlineTimestamp: { flexDirection: 'row' },
          inlineTimestampVDL: { flexDirection: 'row', alignItems: 'center' },
          titleContainer: { flex: 1 },
          inlineNotificationsDisabledIcon: {
            paddingLeft: 'calc('.concat(e.spaces.space2, ' * 3)'),
            color: e.colors.gray700,
          },
          inlineNotificationsDisabledIconVDL: { width: e.spaces.space16, height: e.spaces.space16 },
          hiddenMenu: { opacity: 0, overflow: 'hidden', width: 0 },
          menu: { alignSelf: 'flex-start' },
          menuContainer: { height: 0, marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')') },
          notificationsDisabledIcon: { alignSelf: 'flex-end', color: e.colors.gray700, paddingTop: e.spaces.space4 },
          unreadMessagePip: {
            backgroundColor: e.colors.blue500,
            marginTop: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, ')'),
            height: e.baseFontSize - 5,
            width: e.baseFontSize - 5,
          },
          vdlXButton: {
            border: 'none',
            marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')'),
            marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')'),
            marginTop: 'calc(-1 * ('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, '))'),
          },
          xButton: { alignSelf: 'center', marginRight: 'calc(-1 * '.concat(e.spaces.space4, ')') },
          xIcon: {
            height: 'calc('.concat(e.spaces.space28, ' - ').concat(e.spaces.space1, ')'),
            width: 'calc('.concat(e.spaces.space28, ' - ').concat(e.spaces.space1, ')'),
          },
          trashcanIcon: { color: e.colors.gray700 },
          snippet: { maxHeight: e.spaces.space40, overflow: 'hidden' },
          snippetPadding: { paddingRight: 'calc('.concat(e.spaces.space28, ' + ').concat(e.spaces.space1, ' * 0.75)') },
          unread: { backgroundColor: e.colors.unreadCellBackground },
          socialProofContainer: { marginTop: e.spaces.space4 },
          socialProofText: { marginLeft: 0 },
          convoLabelIcon: { marginRight: e.spaces.space4 },
          endCell: { marginLeft: e.spaces.space16 },
        }
      })
      t.a = a
    },
    ZH9U: function (e, t, n) {
      'use strict'
      var a,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'conversation_id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'label' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMPinnedInboxAppend_Mutation',
            selections: (r = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'conversation_id' },
                  { kind: 'Variable', name: 'label', variableName: 'label' },
                  { kind: 'Literal', name: 's', value: 18 },
                ],
                concreteType: null,
                kind: 'LinkedField',
                name: 'add_dm_conversation_label_v3',
                plural: !1,
                selections: [
                  { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'label_type', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'timestamp', storageKey: null },
                    ],
                    type: 'DMConversationLabelInfo',
                    abstractKey: null,
                  },
                  {
                    kind: 'InlineFragment',
                    selections: [
                      { alias: null, args: null, kind: 'ScalarField', name: 'failure_reason', storageKey: null },
                      { alias: null, args: null, kind: 'ScalarField', name: 'message', storageKey: null },
                    ],
                    type: 'DMConversationLabelUnavailable',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: { argumentDefinitions: a, kind: 'Operation', name: 'DMPinnedInboxAppend_Mutation', selections: r },
          params: {
            id: 'o0aymgGiJY-53Y52YSUGVA',
            metadata: {},
            name: 'DMPinnedInboxAppend_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(i.hash = '86e5601441f8d07b68ccbcf112746d23'), (e.exports = i)
    },
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        s = n.n(l),
        c = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        p = n('rxPX'),
        m = n('0KEI'),
        h = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && d.a.select(e, n)
          return a ? Object(u.g)(e, a) : void 0
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(h) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        v = n('YeIG'),
        y = n('uCxL'),
        b = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, _)),
            d = s.a.useContext(c.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              m && Object(v.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(b.f)(i, p, t),
            g = f && Object(b.e)(f),
            E = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: g,
              tweet: i,
              withReactions: E,
            }),
          )
        })
      t.a = E
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
          return o
        }),
        n.d(t, 'c', function () {
          return l
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
        o = function (e) {
          return e && e.type === a.b.TRUST_CONVERSATION
        },
        l = function (e) {
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
    cIoY: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('1YZw'),
        o = n('rxPX'),
        l = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        s = n('VrFO'),
        c = n.n(s),
        d = n('Y9Ll'),
        u = n.n(d),
        p = n('1Pcy'),
        m = n.n(p),
        h = n('5Yy7'),
        f = n.n(h),
        g = n('2VqO'),
        v = n.n(g),
        y = n('KEM+'),
        b = n.n(y),
        _ = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        E = n('3XMw'),
        S = n.n(E),
        k = n('sgih'),
        C = n('t62R'),
        I = n('/yvb'),
        x = n('rHpw'),
        T = S.a.cfd2f35d,
        R = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(m()(e), '_handleOnFocus', function (e) {
                e.currentTarget.select()
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
                    t = e.cancelButtonLabel,
                    n = e.description,
                    a = e.headerText,
                    i = e.link,
                    o = e.onCancel,
                    l = Object(_.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: w.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    k.a,
                    { onMaskClick: o, style: w.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(C.b, { align: 'center', style: w.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(C.b, { align: 'center', color: 'gray700', style: w.labelText }, n),
                    l,
                    r.a.createElement(I.a, { onPress: o, size: 'xLarge', style: w.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(R, 'defaultProps', { cancelButtonLabel: T })
      var w = x.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingVertical: e.spaces.space32,
              paddingHorizontal: e.spaces.space12,
              position: 'relative',
            },
            headerText: { marginBottom: e.spaces.space16 },
            labelText: { marginBottom: e.spaces.space16, width: '100%' },
            linkInput: {
              backgroundColor: e.colors.gray0,
              borderColor: 'transparent',
              color: e.colors.gray700,
              fontSize: e.fontSizes.body,
              marginBottom: e.spaces.space12,
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space20,
            },
            cancelButton: { width: '100%' },
          }
        }),
        F = R,
        A = n('I/9y'),
        O = n('mjJ+'),
        M = n('cm6r'),
        L = n('CaKu'),
        D = n('U+bB'),
        P = S.a.e05c00b4,
        N = S.a.eabf2209,
        K = S.a.a613e72f,
        j = S.a.f88553c8,
        B = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        H = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(O.a, {
                  items: [{ text: K, Icon: A.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              b()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                L.a.isAvailable() ? (L.a.setString(r), n({ text: j })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              b()(m()(a), '_handleCopyLinkSheetCancel', function () {
                a.setState({ showCopyLinkSheet: !1 })
              }),
              (a.state = { showCopyLinkSheet: !1 }),
              a
            )
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showCopyLinkSheet,
                    t = this.props,
                    n = t.gifUrl,
                    a = t.provider,
                    i = a.display_name,
                    o = a.name,
                    l = B[o]
                  return l
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        e
                          ? r.a.createElement(F, {
                              description: N({ providerName: i }),
                              headerText: P,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          C.b,
                          { align: 'center', color: 'gray700', style: U.root },
                          r.a.createElement(
                            S.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, l),
                          ),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderAttribution',
                value: function (e, t) {
                  return r.a.createElement(
                    M.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      C.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(D.a, { source: { uri: t }, style: U.image }),
                      r.a.createElement(C.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        U = x.a.create(function (e) {
          return {
            button: { marginLeft: e.spaces.space12 },
            image: {
              display: 'inline-block',
              height: e.spaces.space16,
              marginHorizontal: e.spaces.space4,
              width: e.spaces.space16,
            },
            root: { marginHorizontal: e.spaces.space12 },
          }
        }),
        V = H,
        W = l(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(V, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = W
    },
    d9IC: function (e, t, n) {
      'use strict'
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        l = n('Irs7'),
        s = n('MWbm'),
        c = n('/yvb'),
        d = n('t62R'),
        u = n('rHpw'),
        p = o.a.b08821f3,
        m = o.a.e047b8fa,
        h = u.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingLeft: e.spaces.space16,
              paddingVertical: e.spaces.space4,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
            backButton: { marginRight: e.spaces.space4 },
            iconContainer: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.text,
              marginRight: e.spaces.space12,
              fontSize: e.fontSizes.body,
              marginVertical: e.spaces.space8,
            },
            labelHeader: { borderBottomStyle: 'none', paddingVertical: e.spaces.space12 },
          }
        })
      t.a = function (e) {
        var t = Object(l.b)(),
          n = e.clearRecentSearches,
          a = e.headerText,
          i = e.icon,
          o = e.isInboxLabelHeader,
          u = e.withClearButton
        r.a.useEffect(
          function () {
            t.scribe({ component: 'recent_search', action: 'impression' })
          },
          [t],
        )
        var f,
          g = [h.root, o && h.labelHeader]
        return r.a.createElement(
          s.a,
          { style: g },
          r.a.createElement(
            s.a,
            { style: h.iconContainer },
            (f = i) ? r.a.createElement(f, { style: h.icon }) : null,
            r.a.createElement(
              d.b,
              { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
              a,
            ),
          ),
          u
            ? r.a.createElement(
                c.a,
                { accessibilityLabel: p, onPress: n, style: h.backButton, type: 'onMediaWhiteFilled' },
                m,
              )
            : null,
        )
      }
    },
    dzqK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ERkP')
      var a = n('zpdM')
      function r(e) {
        return e instanceof a.EditorState
      }
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
    fQBn: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('MMRb'),
        l = n('yiKp'),
        s = n.n(l),
        c = n('hqKg'),
        d = n('g54k'),
        u = n('G6rE'),
        p = n('rxPX'),
        m = function (e, t) {
          return t.entry
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { users: Object(c.createSelector)(u.e.selectAll, m, d.b) }
          })
          .adjustStateProps(function (e) {
            var t = e.users
            return s()({}, t)
          }),
        f = n('zQEV'),
        g = n('4n2h'),
        v = h(function (e) {
          var t = e.entry,
            n = e.entryType,
            a = e.isSelected,
            o = void 0 !== a && a,
            l = e.perspective,
            s = e.unread,
            c = void 0 !== s && s,
            d = e.users,
            u = Object(f.a)(t, n, l, d),
            p = Object(g.b)(c),
            m = Object(g.a)(c, o)
          return r.a.createElement(i.b, { color: m, weight: p }, u)
        }),
        y = (n('ho0z'), n('v6aA')),
        b = function (e, t) {
          return u.e.select(e, t.senderId)
        },
        _ = function (e, t) {
          return t.recipientId ? u.e.select(e, t.recipientId) : void 0
        },
        E = Object(p.a)().propsFromState(function () {
          return { user: b, recipient: _ }
        }),
        S = n('X/yg'),
        k = n('cTG8'),
        C = n('3XMw'),
        I = n.n(C),
        x = function (e) {
          return r.a.createElement(I.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, r.a.createElement(i.b, null, e))
        },
        T = I.a.dedfd265
      var R = I.a.a876e58b,
        w = I.a.bf584cd1,
        F = I.a.a9cc8cfd,
        A = I.a.e20b65b0,
        O = I.a.e5bfe07d,
        M = I.a.b1a614fe,
        L = E(function (e) {
          var t = e.entry,
            n = e.perspective,
            a = e.isGroupDM,
            o = e.unread,
            l = void 0 !== o && o,
            s = e.user,
            c = void 0 === s ? {} : s,
            d = e.recipient,
            u = void 0 === d ? {} : d,
            p = e.isSelected,
            m = void 0 !== p && p,
            h = r.a.useContext(y.a).featureSwitches,
            f = t && t.message_data
          if (!f) return null
          var v = f.attachment,
            b = v && !!(v.video || v.photo || v.animated_gif || v.tweet || v.fleet || v.sticker || v.card),
            _ = n === c.id_str,
            E = !(!b || !_) || !(!a || _),
            C = c.name,
            L = u.name,
            D = Object(g.b)(l),
            P = Object(g.a)(l, m),
            N = [
              E && r.a.createElement(i.b, { key: 'senderName' }, x(C), ' '),
              f &&
                f.text &&
                r.a.createElement(k.a, {
                  displayTextRange: [0, f.text.length],
                  entities: f.entities,
                  key: 'message',
                  text: f.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            v &&
              (v.tweet
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.d5b762c8)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, C)
                    : M)
                : v.fleet
                ? (N = (function (e, t, n) {
                    return e
                      ? r.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          r.a.createElement(i.b, null, t),
                          r.a.createElement(i.b, null, n || ''),
                        )
                      : r.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          r.a.createElement(i.b, null, n || ''),
                        )
                  })(_, L, f.text))
                : v.video
                ? (N = Object(S.l)(v, h)
                    ? E
                      ? (function (e, t) {
                          return e
                            ? r.a.createElement(i.b, null, I.a.h7033cac)
                            : r.a.createElement(
                                I.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                r.a.createElement(i.b, null, t),
                              )
                        })(_, C)
                      : T
                    : E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.j7d81019)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, C)
                    : R)
                : v.photo
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.f80629ba)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, C)
                    : w)
                : v.animated_gif
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.eb3d722e)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, C)
                    : F)
                : v.sticker
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.d30c2d4f)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, C)
                    : A)
                : v.card &&
                  (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.db53c017)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, C)
                    : O)),
            r.a.createElement(i.b, { color: P, numberOfLines: 1, weight: D }, N)
          )
        }),
        D = n('uKEd'),
        P = n('oEGd'),
        N = function (e, t) {
          return t.senderId ? u.e.select(e, t.senderId) : void 0
        },
        K = function (e, t) {
          return Object(D.n)(e, t.reactionEntry.message_id)
        },
        j = function (e, t) {
          var n = K(e, t)
          return n && n.message_data && u.e.select(e, n.message_data.sender_id)
        },
        B = Object(P.e)(function () {
          return Object(c.createSelector)(N, K, j, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        H = n('33Kz'),
        U = B(function (e) {
          var t,
            n = e.isGroupDM,
            a = e.isSelected,
            o = void 0 !== a && a,
            l = e.messageUser,
            s = e.perspective,
            c = e.reactedMessageEntry,
            d = e.reactingUser,
            u = e.reactionEntry,
            p = e.unread,
            m = void 0 !== p && p,
            h = r.a.useContext(y.a).featureSwitches,
            f = c && c.message_data,
            v = f && f.attachment,
            b = f && f.text,
            _ = l && l.screen_name,
            E = s === (d && d.id_str),
            S = d && d.name,
            k = Object(H.b)(u.reaction_key || '', h),
            C = Object(g.b)(m),
            x = Object(g.a)(m, o)
          return (
            (t =
              v && v.tweet
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, k)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'ca684bf5' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                          )
                    })(E, S, k)
                : v && v.video
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, k)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'ab1cdfe2' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                          )
                    })(E, S, k)
                : v && v.photo
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, k)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'jf27606a' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                          )
                    })(E, S, k)
                : v && v.animated_gif
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, k)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'b2da1bf8' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                          )
                    })(E, S, k)
                : v && v.card
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, k)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f9fb1cf6' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                          )
                    })(E, S, k)
                : b
                ? n
                  ? (function (e, t, n, a, o) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            r.a.createElement(i.b, null, a),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, o),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, a),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, o),
                          )
                    })(E, S, k, _, b)
                  : (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, k, b)
                : (function (e, t, n) {
                    return e
                      ? r.a.createElement(I.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, r.a.createElement(i.b, null, n))
                      : r.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          r.a.createElement(i.b, null, t),
                          r.a.createElement(i.b, null, n),
                        )
                  })(E, S, k)),
            r.a.createElement(i.b, { color: x, numberOfLines: 1, weight: C }, t)
          )
        }),
        V = n('H4nC'),
        W = n('b9JY'),
        q = I.a.fb3ccb55
      t.a = function (e) {
        var t = e.conversationType,
          n = e.entry,
          a = e.isSelected,
          l = void 0 !== a && a,
          s = e.perspective,
          c = e.unread
        if (n.marked_as_spam) {
          var d = Object(g.b)(c),
            u = Object(g.a)(c, l)
          return r.a.createElement(i.b, { color: u, numberOfLines: 1, weight: d }, q)
        }
        if (Object(W.b)(n)) {
          var p = n.message_data,
            m = (p = void 0 === p ? {} : p).recipient_id,
            h = p.sender_id
          return r.a.createElement(L, {
            entry: n,
            isGroupDM: t === o.CONVERSATION_TYPE.GROUP,
            isSelected: l,
            perspective: s,
            recipientId: m,
            senderId: h,
            unread: c,
          })
        }
        return Object(W.c)(n)
          ? r.a.createElement(U, {
              isGroupDM: t === o.CONVERSATION_TYPE.GROUP,
              isSelected: l,
              perspective: s,
              reactionEntry: n,
              senderId: n.sender_id,
              unread: c,
            })
          : Object(W.a)(n)
          ? r.a.createElement(v, { entry: n, entryType: n.type, isSelected: l, perspective: s, unread: c })
          : Object(W.d)(n)
          ? r.a.createElement(V.a, { entry: n, isCompact: !0, isSelected: l, unread: c })
          : null
      }
    },
    fuhe: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMDrawer', function () {
          return ht
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('3voH'), n('ERkP')),
        y = n.n(v),
        b = n('ZUOq'),
        _ = n('MMRb'),
        E = n('RqPI'),
        S = n('rxPX'),
        k = n('0KEI'),
        C = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              drawerExperimentEnabled: _.selectDrawerExperimentEnabled,
              perspective: E.r,
              poppedOutConversationId: _.selectPoppedOutConversationId,
              visibility: _.selectDrawerVisibility,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchInboxIfNeeded: _.fetchInboxIfNeeded,
              loadDrawerVisibilityFromPersistence: _.loadDrawerVisibilityFromPersistence,
              setDrawerVisibility: _.setDrawerVisibility,
            }
          }),
        I = n('V/6K'),
        x = (n('z84I'), n('yiKp')),
        T = n.n(x),
        R = (n('lTEL'), n('7x/C'), n('kYxP'), n('CDB5')),
        w = n('1YZw'),
        F = n('hqKg'),
        A = n('X/yg'),
        O = n('AQOc'),
        M = n('UhuB'),
        L = n('l0YN'),
        D = n('G6rE'),
        P = n('P1r1'),
        N = function (e, t) {
          return t.conversationId
        },
        K = Object(F.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, N(0, t))
          },
          E.r,
          function (e, t) {
            return t ? Object(A.e)(e, t) : void 0
          },
        ),
        j = function (e) {
          return function (t) {
            return R.c(e, t)
          }
        },
        B = function (e) {
          return function (t, n) {
            return R.a(e, t, n)
          }
        },
        H = {
          conversation: function (e, t) {
            return _.selectConversation(e, N(0, t))
          },
          entries: _.selectEntries,
          perspective: E.r,
          users: D.e.selectAll,
          dataSaverMode: P.j,
          dtabBarInfo: P.m,
          quickReplyOptions: K,
          visibility: _.selectDrawerVisibility,
          inboxUnreadCount: L.a,
          isUnread: function (e, t) {
            return !_.selectConversationIsRead(e, N(0, t))
          },
          isDmReceiptSettingEnabled: M.n,
        },
        U = {
          draftText: function (e, t) {
            return R.l(e, N(0, t))
          },
          gifMetadata: function (e, t) {
            return R.h(e, N(0, t))
          },
          isUploading: function (e, t) {
            return R.j(e, N(0, t))
          },
          media: function (e, t) {
            return R.i(e, N(0, t))
          },
          mediaUploadProgress: function (e, t) {
            return R.k(e, N(0, t))
          },
        },
        V = Object(S.a)()
          .propsFromState(function () {
            return T()(T()({}, H), U)
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = e.dataSaverMode,
              a = e.draftText,
              r = e.dtabBarInfo,
              i = e.entries,
              o = e.gifMetadata,
              l = e.inboxUnreadCount,
              s = e.isDmReceiptSettingEnabled,
              c = e.isUnread,
              d = e.isUploading,
              u = e.media,
              p = e.mediaUploadProgress,
              m = e.perspective,
              h = e.quickReplyOptions,
              f = e.users,
              g = e.visibility,
              v = null == t ? void 0 : t.data
            return {
              conversation: v && Object(O.a)(v, i, f),
              perspective: m,
              dataSaverMode: n,
              draftText: a,
              dtabBarInfo: r,
              gifMetadata: o,
              inboxUnreadCount: l,
              isDmReceiptSettingEnabled: s,
              isUploading: d,
              isUnread: c,
              media: u,
              mediaUploadProgress: p,
              quickReplyOptions: h,
              visibility: g,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              addMedia: B(t),
              addToast: w.b,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationHistory: _.fetchConversationHistory,
              removeMedia: j(t),
              saveText: R.f,
              sendMessage: R.m,
              updateConversationReadState: _.updateConversationReadState,
              updateTyping: _.updateTyping,
              fetchUpdatesIfNeeded: _.fetchUpdatesIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'thread_drawer' }),
        W = n('aWyx'),
        q = n('qz2E'),
        z = n('Oi4X'),
        G = n('OhSZ'),
        Q =
          (n('uFXj'),
          Object(S.a)()
            .propsFromState(function () {
              return { visibility: _.selectDrawerVisibility }
            })
            .propsFromActions(function () {
              return { popOutConversation: _.popOutConversation, setDrawerVisibility: _.setDrawerVisibility }
            })
            .withAnalytics()),
        Y = n('AQ79'),
        X = n('3XMw'),
        J = n.n(X),
        $ = n('OrGc'),
        Z = n('hACr'),
        ee = n('fs1G'),
        te = n('MWbm'),
        ne = n('/yvb'),
        ae = n('Znyr'),
        re = n('t62R'),
        ie = n('xKuM'),
        oe = n('rHpw'),
        le = n('v6aA'),
        se = n('95Se'),
        ce = n('Avzu'),
        de = n('Lsrn'),
        ue = n('k/Ka'),
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            T()(
              T()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [de.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z',
              }),
              y.a.createElement('path', {
                d: 'M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z',
              }),
            ),
          )
        }
      pe.metadata = { width: 24, height: 24 }
      var me = pe,
        he = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            T()(
              T()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [de.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z',
              }),
              y.a.createElement('path', {
                d: 'M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z',
              }),
            ),
          )
        }
      he.metadata = { width: 24, height: 24 }
      var fe = he,
        ge = n('x0mb'),
        ve = J.a.a2f8105f,
        ye = J.a.d227d19e,
        be = J.a.c64c1883,
        _e = J.a.j7d0e835,
        Ee = J.a.b08821f3,
        Se = J.a.e736990a,
        ke = J.a.cdcebd22,
        Ce = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), '_headerBar', y.a.createRef()),
              g()(d()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              g()(d()(e), '_renderLeftControl', function () {
                var t = e.props.inboxUnreadCount
                return y.a.createElement(
                  te.a,
                  null,
                  y.a.createElement(ne.a, {
                    accessibilityLabel: Ee,
                    icon: y.a.createElement(se.a, null),
                    onPress: e._handleUnpopConvo,
                    type: e._getButtonType(),
                  }),
                  t && t > 0
                    ? y.a.createElement(ae.a, {
                        pip: !0,
                        style: Ie.newMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null,
                )
              }),
              g()(d()(e), '_getButtonType', function () {
                var t = e.props,
                  n = t.hasNewMessages
                return t.isHighlighted && n ? 'onMediaText' : 'primaryText'
              }),
              g()(d()(e), '_renderRightControl', function () {
                var t = e.props.conversationTitle,
                  n = e._isExpanded(),
                  a = e._getButtonType()
                return y.a.createElement(
                  te.a,
                  { style: Ie.rightControls },
                  t
                    ? null
                    : y.a.createElement(ne.a, {
                        accessibilityLabel: be,
                        hoverLabel: { label: ke },
                        icon: y.a.createElement(ce.a, null),
                        onPress: e._handleNewMessage,
                        type: a,
                      }),
                  n
                    ? y.a.createElement(ne.a, {
                        accessibilityLabel: ye,
                        hoverLabel: { label: ye },
                        icon: y.a.createElement(me, null),
                        onPress: e._handleToggleVisibility,
                        type: a,
                      })
                    : y.a.createElement(ne.a, {
                        accessibilityLabel: _e,
                        hoverLabel: { label: _e },
                        icon: y.a.createElement(fe, null),
                        onPress: e._handleToggleVisibility,
                        type: a,
                      }),
                )
              }),
              g()(d()(e), '_handleUnpopConvo', function () {
                ;(0, e.props.popOutConversation)(null)
              }),
              g()(d()(e), '_handleToggleVisibility', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.onDrawerOpen,
                  r = t.setDrawerVisibility,
                  i = e._isExpanded() ? Y.b.COLLAPSED : Y.b.EXPANDED
                i === Y.b.COLLAPSED
                  ? n.scribe({ action: 'collapse' })
                  : i === Y.b.EXPANDED && (n.scribe({ action: 'expand' }), a && a()),
                  r(i)
              }),
              g()(d()(e), '_handleToggleVisibilityKeyboard', function () {
                e._handleToggleVisibility(), e._headerBar && e._headerBar.current && e._headerBar.current.focus()
              }),
              g()(d()(e), '_handleNewMessage', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribe({ section: 'compose_drawer', component: 'dm', action: 'show' }),
                  a.push({ pathname: '/messages/compose', state: { source: 'drawer' } })
              }),
              g()(d()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.conversationTitle,
                  a = t.hasNewMessages,
                  r = t.isHighlighted,
                  i = n || y.a.createElement(re.b, null, ve)
                return y.a.createElement(
                  te.a,
                  { style: Ie.titleContainer },
                  y.a.createElement(te.a, { style: [Ie.titleTextRoot, r && a ? Ie.titleTextHighlighted : null] }, i),
                  a
                    ? y.a.createElement(
                        te.a,
                        { style: Ie.newMessageDotContainer },
                        y.a.createElement(ge.a, {
                          accessibilityLabel: Se,
                          style: [Ie.newMessageDotRoot, r ? Ie.newMessageDotHighlighted : Ie.newMessageDotRegular],
                        }),
                      )
                    : null,
                )
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.hasNewMessages,
                    a = t.isHighlighted,
                    r = t.triggerHighlight
                  e.isHighlighted || a || e.hasNewMessages || !n || (r && r())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.conversationSubtitle,
                    a = t.conversationTitle,
                    r = t.hasNewMessages,
                    i = t.isHighlighted,
                    o = r ? (i ? [Ie.headerHighlighted] : [Ie.headerActive]) : [],
                    l = this._isExpanded()
                  return y.a.createElement(
                    Z.a,
                    {
                      enabled: !0,
                      handlers:
                        ((e = {}),
                        g()(e, $.e.goLists, ee.a),
                        g()(e, $.e.toggleDMDrawer, this._handleToggleVisibilityKeyboard),
                        e),
                    },
                    y.a.createElement(
                      te.a,
                      {
                        ref: this._headerBar,
                        style: [Ie.headerRoot, !l && Ie.headerBorderClosed].concat(o, [Ie.cursor]),
                      },
                      y.a.createElement(ie.a, {
                        leftControl: a && this._isExpanded() ? this._renderLeftControl() : null,
                        onMiddleControlClick: this._handleToggleVisibility,
                        rightControl: this._renderRightControl(),
                        style: Ie.roundedAppBarCorners,
                        subtitle: n,
                        title: this._renderTitle(),
                        withBackground: !i,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(Ce, 'contextType', le.a)
      var Ie = oe.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderColor: e.colors.borderColor,
              borderWidth: e.borderWidths.small,
              marginRight: e.spaces.space20,
              width: b.a.columnWidths.secondary.normal,
            },
            cursor: { cursor: 'pointer' },
            expanded: { height: b.a.columnWidths.secondary.normal },
            headerRoot: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              transition: 'all 0.3s ease',
            },
            headerBorderClosed: { borderColor: e.colors.navigationBackground },
            headerActive: { backgroundColor: e.colors.unreadCellBackground },
            headerHighlighted: { borderColor: e.colors.primary, backgroundColor: e.colors.primary },
            titleContainer: { alignItems: 'center', display: 'flex', flexDirection: 'row', flexGrow: 1 },
            titleTextRoot: { flexGrow: 1, flexShrink: 1 },
            titleTextHighlighted: { color: e.colors.white },
            roundedAppBarCorners: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
            },
            newMessageDotContainer: { flexGrow: 1 },
            newMessageDotRoot: { width: e.spaces.space12, height: e.spaces.space12, marginLeft: e.spaces.space4 },
            newMessageDotRegular: { color: e.colors.primary },
            newMessageDotHighlighted: { color: e.colors.white },
            newMessagePip: { right: e.spaces.space4, top: e.spaces.space4 },
            rightControls: { flexDirection: 'row' },
          }
        }),
        xe = Q(Ce),
        Te = (n('JtPf'), n('87if'), n('zb92')),
        Re = Object(Te.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(233)]).then(n.bind(null, 'Rk1B'))
          },
        }),
        we = n('aWzz'),
        Fe = n('XnpN'),
        Ae = n('GSsg'),
        Oe = n('aITJ'),
        Me = n('yrzJ'),
        Le = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, a)),
              g()(d()(r), '_composer', y.a.createRef()),
              g()(d()(r), '_renderConversation', function (e, t) {
                var n = r.props,
                  a = n.conversationId,
                  i = n.history,
                  o = n.location
                return y.a.createElement(z.a, {
                  conversationId: a,
                  drawerHeader: r._renderHeader(),
                  history: i,
                  isWide: !1,
                  location: o,
                  richTextInputContext: e,
                  typeaheadWrapper: t,
                })
              }),
              g()(d()(r), '_isExpanded', function () {
                return r.props.visibility === Y.b.EXPANDED
              }),
              g()(d()(r), '_fetchUpdatesIfNeeded', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              Object(q.a)(),
              r
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._updatePolling()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.visibility !== this.props.visibility && this._updatePolling()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this._isExpanded()
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    !t && this._renderHeader(),
                    t
                      ? Oe.b.isDesktopOS()
                        ? y.a.createElement(Re, null, function (t) {
                            var n = t.richTextInputContext,
                              a = t.typeaheadWrapper
                            return e._renderConversation(n, a)
                          })
                        : this._renderConversation()
                      : null,
                  )
                },
              },
              {
                key: '_renderHeader',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.history,
                    a = e.inboxUnreadCount,
                    r = e.isHeaderHighlighted,
                    i = e.isUnread,
                    o = e.onDrawerOpen,
                    l = e.perspective,
                    s = e.triggerHeaderHighlight,
                    c = r ? 'white' : 'text',
                    d = r ? 'white' : 'gray700',
                    u =
                      t &&
                      t.type === W.a.ONE_TO_ONE &&
                      l &&
                      Object(Fe.a)(t, l).map(function (e) {
                        return e.user.screen_name
                      }),
                    p = u ? y.a.createElement(Me.a, { color: d, screenName: u[0] }) : void 0
                  return y.a.createElement(
                    te.a,
                    { style: De.headerRoot },
                    y.a.createElement(xe, {
                      conversationSubtitle: p,
                      conversationTitle: y.a.createElement(G.b, {
                        conversation: t,
                        perspective: l,
                        textColor: c,
                        withScreenName: !1,
                      }),
                      hasNewMessages: i,
                      history: n,
                      inboxUnreadCount: a,
                      isHighlighted: r,
                      onDrawerOpen: o,
                      triggerHighlight: s,
                    }),
                  )
                },
              },
              {
                key: '_updatePolling',
                value: function () {
                  this._pollingTimer && this._pollingTimer.stop(),
                    this.props.visibility === Y.b.COLLAPSED &&
                      ((this._pollingTimer = new Ae.a(this._fetchUpdatesIfNeeded, { interval: 3e3 })),
                      this._pollingTimer.start())
                },
              },
              {
                key: 'getChildContext',
                value: function () {
                  return { getCustomLocation: null }
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(Le, 'contextType', le.a), g()(Le, 'childContextTypes', { getCustomLocation: we.func })
      var De = oe.a.create(function (e) {
          return { headerRoot: { position: 'sticky', top: 0, zIndex: e.componentZIndices.appBarZIndex } }
        }),
        Pe = V(Le),
        Ne = (n('i4UL'), n('K1iM')),
        Ke = n.n(Ne),
        je = (n('tQbP'), n('4q8G')),
        Be = n('tn7R'),
        He = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              settings: P.g,
              unreadCount: L.a,
              untrustedConversationCount: _.selectUntrustedConversationCount,
              untrustedUnreadCount: _.selectUntrustedUnreadCount,
              visibility: _.selectDrawerVisibility,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n = e.conversations,
              a = e.settings,
              r = e.unreadCount,
              i = e.untrustedConversationCount,
              o = e.untrustedUnreadCount,
              l = e.visibility,
              s = [],
              c = Ke()(Object(Be.a)(n))
            try {
              for (c.s(); !(t = c.n()).done; ) {
                var d,
                  u = t.value
                !u.isDeleted && null !== (d = u.data) && void 0 !== d && d.trusted && s.push(u.data)
              }
            } catch (m) {
              c.e(m)
            } finally {
              c.f()
            }
            s.sort(je.a)
            var p = r > 0
            return {
              allowUntrustedInbox: 'all' === a.allow_dms_from || i > 0,
              conversationIds: s.map(function (e) {
                return e.conversation_id
              }),
              isUnread: p,
              untrustedUnreadCount: o,
              visibility: l,
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: _.fetchInbox,
              fetchInboxHistory: _.fetchTrustedInboxHistory,
              fetchInboxIfNeeded: _.fetchInboxIfNeeded,
              fetchUpdates: _.fetchUpdatesIfNeeded,
              updateLastSeenEventId: _.updateTrustedLastSeenEventId,
              popOutConversation: _.popOutConversation,
            }
          })
          .withAnalytics({ page: 'messages', section: 'inbox_drawer' }),
        Ue = n('cFyg'),
        Ve = n('pXKu'),
        We = n('nySH'),
        qe = n('yw4N'),
        ze = n('FIs5'),
        Ge = n('csss'),
        Qe = 'dmDrawerInbox',
        Ye = J.a.a2f8105f,
        Xe = J.a.b8aa3744,
        Je = J.a.j06309e1,
        $e = J.a.gee5150a,
        Ze = J.a.cf2d1047,
        et = J.a.da2f9224,
        tt = J.a.h6beb5fa,
        nt = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), '_renderHeader', function () {
                var t = e.props,
                  n = t.history,
                  a = t.isHeaderHighlighted,
                  r = t.isUnread,
                  i = t.onDrawerOpen,
                  o = t.triggerHeaderHighlight
                return y.a.createElement(
                  te.a,
                  { style: at.headerRoot },
                  y.a.createElement(xe, {
                    hasNewMessages: r,
                    history: n,
                    isHighlighted: a,
                    onDrawerOpen: i,
                    triggerHighlight: o,
                  }),
                )
              }),
              g()(d()(e), '_renderExpandedInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.conversationIds,
                  r = t.fetchInboxHistory,
                  i = t.updateLastSeenEventId
                return y.a.createElement(
                  te.a,
                  { style: at.fill },
                  y.a.createElement(
                    te.a,
                    { style: [at.viewportView, Ue.b.drawerHeaderRadius] },
                    y.a.createElement(
                      qe.a,
                      { style: [at.viewportView, Ue.b.drawerHeaderRadius] },
                      e._renderHeader(),
                      y.a.createElement(Ve.a, {
                        accessibilityTitle: Ye,
                        analytics: n,
                        conversationIds: a,
                        customCellClick: e._dmDrawerOnClick,
                        fetchInboxHistory: r,
                        isDrawer: !0,
                        renderEmptyDMInbox: e._renderEmptyDMInbox,
                        renderStickyContent: e._renderPivot,
                        updateLastSeenEventId: i,
                        virtualScrollerCacheKey: Qe,
                        withPinnedInbox: !0,
                      }),
                    ),
                  ),
                )
              }),
              g()(d()(e), '_renderEmptyDMInbox', function () {
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderPivot(),
                  y.a.createElement(ze.a, {
                    buttonLink: '/messages/compose',
                    buttonText: $e,
                    header: Xe,
                    message: Je,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              g()(d()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              g()(d()(e), '_dmDrawerOnClick', function (t, n) {
                ;(0, e.props.popOutConversation)(n), t.preventDefault()
              }),
              g()(d()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              g()(d()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              g()(d()(e), '_renderPivot', function () {
                return e.props.allowUntrustedInbox
                  ? y.a.createElement(
                      te.a,
                      { style: at.requestPivotContainer },
                      y.a.createElement(Ge.a, {
                        label: Ze,
                        link: Object(We.a)(Y.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: e._renderPivotBadge,
                      }),
                    )
                  : null
              }),
              g()(d()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? y.a.createElement(ae.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: tt,
                      unreadCountLabel: et,
                    })
                  : null
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._isExpanded() && Object(q.a)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this._isExpanded()
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    !e && this._renderHeader(),
                    e && this._renderExpandedInbox(),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(nt, 'contextType', le.a)
      var at = oe.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            headerRoot: { position: 'sticky', top: 0, zIndex: e.componentZIndices.appBarZIndex },
            requestPivotContainer: {
              backgroundColor: e.colors.cellBackground,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              zIndex: 2,
            },
            viewportView: T()(T()({}, oe.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        rt = He(nt),
        it = n('YeIG'),
        ot = n('A69o'),
        lt = 'DMDrawer',
        st = n('TnY3'),
        ct = n('0FVZ'),
        dt = n('Oe3h'),
        ut = n('nBUg'),
        pt = { isGlobal: !0, isSticky: !0 },
        mt = { isGlobal: !0, isSticky: !1 },
        ht = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), 'state', { isHeaderHighlighted: !1, hasStartedInitialFetch: !1, unexpandedHeight: void 0 }),
              g()(d()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout.height,
                  a = e.state.unexpandedHeight
                e._isExpanded() || void 0 !== a || e.setState({ unexpandedHeight: n })
              }),
              g()(d()(e), '_showDMDrawer', function () {
                var t = e.props,
                  n = t.conversations,
                  a = t.visibility === Y.b.CLOSED
                return !e._isHideDMDrawerPath() && !Object(it.a)(n) && !a
              }),
              g()(d()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              g()(d()(e), '_triggerHeaderHighlight', function () {
                var t = e.state.isHeaderHighlighted
                e._isExpanded() ||
                  t ||
                  e._headerHighlightTimeoutId ||
                  (e.setState({ isHeaderHighlighted: !0 }),
                  (e._headerHighlightTimeoutId = setTimeout(function () {
                    e.setState({ isHeaderHighlighted: !1 }), (e._headerHighlightTimeoutId = void 0)
                  }, 3e3)))
              }),
              g()(d()(e), '_handleDrawerOpen', function () {
                e.state.isHeaderHighlighted &&
                  (e.setState({ isHeaderHighlighted: !1 }),
                  clearTimeout(e._headerHighlightTimeoutId),
                  (e._headerHighlightTimeoutId = void 0))
              }),
              g()(d()(e), '_isOnOcfFlow', function () {
                return e.props.location.pathname.startsWith('/i/flow')
              }),
              g()(d()(e), '_isOnBirdwatchPage', function () {
                return e.props.location.pathname.startsWith('/i/birdwatch')
              }),
              g()(d()(e), '_isHideDMDrawerPath', function () {
                return e._isOnOcfFlow() || e._isOnBirdwatchPage()
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._headerHighlightTimeoutId)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this._loadInboxDataIfNeeded()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._loadInboxDataIfNeeded()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.history,
                    a = t.location,
                    i = t.perspective,
                    o = t.poppedOutConversationId,
                    l = t.width,
                    s = this.state,
                    c = s.isHeaderHighlighted,
                    d = s.unexpandedHeight,
                    u = this._isExpanded()
                  return this._showDMDrawer()
                    ? y.a.createElement(
                        ct.a.Drawer,
                        null,
                        y.a.createElement(dt.a, { id: 'DMDrawer' }, function (t, s) {
                          return y.a.createElement(
                            I.a.Provider,
                            { value: { isDrawer: !0 } },
                            y.a.createElement(
                              ut.b.Provider,
                              {
                                value: {
                                  isDMDrawer: function () {
                                    return !0
                                  },
                                },
                              },
                              y.a.createElement(
                                te.a,
                                r()({ ref: t() }, s({ style: [Ue.b.root, { width: l }], testID: lt })),
                                y.a.createElement(
                                  te.a,
                                  {
                                    onLayout: d ? void 0 : e._handleLayout,
                                    style: [Ue.b.expandable, { height: d, maxHeight: d }, u && Ue.b.expanded],
                                  },
                                  o
                                    ? y.a.createElement(
                                        ot.a.Provider,
                                        { value: mt },
                                        y.a.createElement(Pe, {
                                          conversationId: o,
                                          history: n,
                                          isHeaderHighlighted: c,
                                          location: a,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          perspective: i,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      )
                                    : y.a.createElement(
                                        ot.a.Provider,
                                        { value: pt },
                                        y.a.createElement(rt, {
                                          history: n,
                                          isHeaderHighlighted: c,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      ),
                                ),
                              ),
                            ),
                          )
                        }),
                      )
                    : null
                },
              },
              {
                key: '_loadInboxDataIfNeeded',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.fetchInboxIfNeeded,
                    a = e.loadDrawerVisibilityFromPersistence,
                    r = this.state.hasStartedInitialFetch
                  this._isHideDMDrawerPath() ||
                    r ||
                    (a(), n().catch(t()), this.setState({ hasStartedInitialFetch: !0 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(ht, 'defaultProps', { width: b.a.dmDrawerWidth.max })
      var ft = C(ht)
      t.default = Object(st.a)(ft)
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
        o = n('G6rE'),
        l = n('oEGd'),
        s = function (e, t) {
          return {
            users: i(t).reduce(function (t, n) {
              return (t[n] = e[n]), t
            }, {}),
          }
        },
        c = Object(a.createSelector)(
          o.e.selectAll,
          function (e, t) {
            return t.entry
          },
          s,
        )
      t.a = Object(l.c)(c)
    },
    gbD7: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return o
        }),
        n.d(t, 'd', function () {
          return l
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
        o = 'typingIndicator',
        l = r(a.b.TYPING_INDICATOR, o),
        s = r(a.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return V
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        g = n.n(f),
        v = n('K1iM'),
        y = n.n(v),
        b = n('RhWx'),
        _ = n.n(b),
        E = (n('wFPu'), n('CDB5')),
        S = n('xVN5'),
        k = n('vjRr'),
        C = n('rxPX'),
        I = n('0KEI'),
        x = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = _()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var l = a.value
              if ((n = k.a.select(e, l))) break
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return n
        },
        T = Object(C.a)()
          .propsFromState(function () {
            return { card: x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: k.a.fetchCardPreviewIfNeeded,
              updateDMComposer: E.e,
              updateTweetComposer: S.w,
            }
          }),
        R = n('KqB4'),
        w = n.n(R),
        F = n('aX4+'),
        A = n('3XMw'),
        O = n.n(A),
        M = n('hOZg'),
        L = n('cnVF'),
        D = n('MWbm'),
        P = n('v6aA'),
        N = n('/yvb'),
        K = n('rHpw'),
        j = n('VY6S'),
        B = n('mN6z'),
        H = O.a.f6fec9f6,
        U = /^https?:\/\//i,
        V = function (e) {
          var t = w()(e)
          if (t.length)
            return t.map(function (e) {
              return (!U.test(e) && 'http://'.concat(e)) || e
            })
        },
        W = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(s()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: L.B })
              }),
              h()(s()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  l = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, l) : o({ updates: { cardUrl: l }, index: a })
              }),
              (i._debouncedFetchCardPreview = Object(j.a)(i._fetchCardPreviewIfNeeded, 1e3)),
              (i._isDMComposer = !!e.conversationId),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.urls
                  Object(B.a)(e.urls, t) || this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updateSingleComposer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.card,
                    n = e.isCardPreviewTombstoned,
                    a = e.style,
                    r = this.context.loggedInUserId
                  return t && !n && r
                    ? g.a.createElement(
                        D.a,
                        { style: a },
                        g.a.createElement(F.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        g.a.createElement(N.a, {
                          accessibilityLabel: H,
                          icon: g.a.createElement(M.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: q.closeButton,
                          type: 'onMediaDominantColorFilled',
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(W, 'contextType', P.a)
      var q = K.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        z = T(W)
      t.a = z
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
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
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    htvZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return E
      }),
        n.d(t, 'a', function () {
          return S
        })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('ddV6'),
        l = n.n(o),
        s = n('8W85')
      function c() {
        var e = r.a.useContext(S),
          t = l()(e.activeVoiceMessage, 2),
          n = t[0],
          a = t[1],
          i = l()(e.playerApi, 2)[1],
          o = l()(e.playerState, 2)[1]
        var c = {
          media: l()(n, 2)[1],
          onEnded: function () {
            a([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: o,
        }
        return r.a.createElement(s.a, c)
      }
      var d = n('X/yg'),
        u = n('yiKp'),
        p = n.n(u),
        m = (n('849X'), n('TJCb'), n('89tF')),
        h = n('k89r')
      function f(e) {
        var t,
          n,
          a,
          i,
          o,
          l =
            ((t = r.a.useState(y.activeVoiceMessage)),
            (n = r.a.useState(y.playerApi)),
            (a = r.a.useState(y.playerState)),
            (o = Object(h.a)()),
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
                      ? o.scribe(p()(p()({}, t({ action: e })), {}, { data: n.data }))
                      : o.scribe(p()({}, t({ action: e, component: v(n) })))
                    : o.scribe(p()({}, t({ action: e })))
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
              [o],
            )),
            { activeVoiceMessage: t, playerApi: n, playerState: a, scribeAction: i })
        return r.a.createElement(b.Provider, { value: l }, e.children)
      }
      var g = {
        Timelines: Object(m.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function v(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? g.Timelines.inbox_timeline
          : t
          ? g.Timelines.low_quality_timeline
          : g.Timelines.requests_timeline
      }
      var y = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        b = r.a.createContext({
          activeVoiceMessage: [y.activeVoiceMessage, _],
          playerApi: [y.playerApi, _],
          playerState: [y.playerState, _],
          scribeAction: null,
        })
      function _() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function E(e) {
        var t = r.a.useContext(i.a).featureSwitches
        return Object(d.k)(t) ? r.a.createElement(f, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = b
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return o
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wtru')
      function o(e) {
        var t = Object(i.b)()
        return [
          !!t && !t.flags[e],
          r.a.useCallback(
            function () {
              null == t || t.addFlag(e)
            },
            [t, e],
          ),
        ]
      }
      t.a = o
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        s = n.n(l),
        c = n('t62R'),
        d = n('I4+6'),
        u = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        h = ['align', 'color', 'label'],
        f = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          a = e.color,
          i = e.label,
          l = o()(e, h),
          g = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: f.container },
          s.a.createElement(
            u.a,
            r()({}, l, { interactiveStyles: g, style: f.root }),
            s.a.createElement(c.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    kb9v: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        o = n.n(i),
        l = n('TIdA'),
        s = n('t62R'),
        c = n('A91F'),
        d = n('/yvb'),
        u = n('Eqye'),
        p = n('efqG'),
        m = n('sgih'),
        h = n('rHpw'),
        f = n('MWbm'),
        g = n('3dyc'),
        v = h.a.create(function (e) {
          return {
            root: { paddingVertical: e.spacesPx.space32 },
            rootWithImage: { paddingTop: 0 },
            graphic: { marginBottom: e.spacesPx.space20 },
            icon: { alignSelf: 'center', height: e.spacesPx.space64, width: e.spacesPx.space64 },
            container: { paddingHorizontal: e.spacesPx.space32 },
            description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 },
            actionButton: { marginTop: e.spacesPx.space16 },
          }
        })
      t.a = function (e) {
        var t = e.actionPrimary,
          n = e.actionSecondary,
          a = e.children,
          i = e.headline,
          y = e.icon,
          b = e.iconColor,
          _ = e.imageUrl,
          E = e.onDismiss,
          S = e.shouldDisplay,
          k = e.text,
          C = e.withMask,
          I = void 0 === C || C,
          x = o.a.useState(!1),
          T = r()(x, 2),
          R = T[0],
          w = T[1],
          F = function (e) {
            return o.a.createElement(
              p.a,
              {
                onDismiss: N,
                renderContent: function () {
                  return O(N)
                },
                switchOnlyOnXSmallBreakpoint: !0,
                visibilityBehavior: g.b.forceVisible,
                withArrow: !0,
                withFixedPosition: !0,
                withMask: I,
              },
              e,
            )
          },
          A = function () {
            return o.a.createElement(
              m.a,
              {
                onMaskClick: function () {
                  return N()
                },
                type: 'center',
                withMask: !0,
              },
              O(N),
            )
          },
          O = function (e) {
            return o.a.createElement(
              f.a,
              { style: [v.root, _ && v.rootWithImage] },
              M(),
              o.a.createElement(
                f.a,
                { style: v.container },
                L(),
                D(),
                P({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                P({ action: n, dismiss: e }),
              ),
            )
          },
          M = function () {
            var e = y && o.a.createElement(y, { style: b ? [v.icon, { color: h.a.theme.colors[b] }] : v.icon })
            return (
              _ &&
                !u.a.isEnabled &&
                (e = o.a.createElement(l.a, { accessibilityLabel: '', aspectMode: c.a.exact(2), image: _ })),
              e && o.a.createElement(f.a, { style: v.graphic }, e)
            )
          },
          L = function () {
            return o.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, i)
          },
          D = function () {
            return o.a.createElement(s.b, { color: 'gray700', style: v.description }, k)
          },
          P = function (e) {
            var t = e.action,
              n = e.dismiss,
              a = e.type
            return (
              t &&
              o.a.createElement(
                d.a,
                {
                  link: t.link && t.link,
                  onPress: t.onClick ? t.onClick : n,
                  size: 'large',
                  style: v.actionButton,
                  type: a,
                },
                t.text,
              )
            )
          },
          N = function () {
            E && E(), w(!0)
          }
        return S && !R ? (a ? F(a) : A()) : a || null
      }
    },
    krmn: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        s = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(l.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(17), n.e(208)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(s.a, { hasError: e, onRetry: t })
          },
        }),
        p = n.p + 'twemoji_sprite.6d90d9d5.png',
        m = n.p + 'twemoji_sprite_high_res.0b0faef5.png',
        h = n('rHpw'),
        f = n('U+bB'),
        g = n('kLqS'),
        v = n('MWbm'),
        y = h.a.create(function (e) {
          return {
            content: { backgroundColor: e.colors.cellBackground },
            dimensions: {
              height: '400px',
              borderRadius: e.borderRadii.xLarge,
              width: 10 * e.spacesPx.space32,
              overflow: 'hidden',
            },
            hidden: { display: 'none' },
          }
        }),
        b = function (e) {
          var t = e.onSelect,
            n = e.partialRender,
            a = g.a.get() > 1 ? m : p
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              v.a,
              { style: [y.content, y.dimensions] },
              o.a.createElement(u, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            o.a.createElement(f.a, { source: a, style: y.hidden }),
          )
        },
        _ = n('pNJr'),
        E = n('2ZFc'),
        S = n('OiMc'),
        k = n('/yvb'),
        C = d.a.d4a4842d,
        I = o.a.createElement(_.a, null),
        x = d.a.fec16c1c,
        T = { viewType: 'emoji_picker' },
        R = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            l = e.style,
            s = e.textInputRef,
            c = o.a.useState(!0),
            d = r()(c, 2),
            p = d[0],
            m = d[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              u.preload(), E.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            S.a,
            {
              enableEnterKeyToggle: !0,
              onAnimateComplete: function () {
                return m(!1)
              },
              onDismiss: function () {
                return m(!0)
              },
              onHoverCardUnmount: function () {
                window.requestAnimationFrame(function () {
                  return s && s.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(b, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            o.a.createElement(k.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: C,
              behavioralEventContext: T,
              disabled: t,
              hoverLabel: { label: x },
              icon: I,
              onPress: function (e) {
                return a && a(e)
              },
              size: i,
              style: l,
              type: 'brandText',
            }),
          )
        }
      R.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = R
    },
    lBmi: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('Lsrn'),
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
                style: [l.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M23.885 19.5c-.762-3.064-3.72-5.206-7.19-5.206-1.17 0-2.27.265-3.258.707 1.246 1.08 2.157 2.5 2.564 4.138.252 1.004.052 2.03-.52 2.86h6.48c.627 0 1.2-.27 1.57-.744.38-.49.51-1.13.355-1.753zm-9.695 1.755c.38-.49.512-1.13.356-1.754-.375-1.506-1.284-2.785-2.52-3.7-1.278-.95-2.905-1.507-4.67-1.507-3.47 0-6.428 2.142-7.19 5.208-.156.626-.025 1.266.356 1.755.37.473.94.744 1.567.744h10.533c.627 0 1.197-.272 1.567-.745zm2.505-8.218c1.185 0 2.51-.132 3.368-1.11.72-.823.952-2.08.715-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.235 1.766 0 3.023.718 3.846.858.98 2.184 1.11 3.368 1.11zm-9.34 0c1.185 0 2.51-.132 3.367-1.11.72-.823.953-2.08.716-3.847-.333-2.478-1.86-3.956-4.083-3.956-2.225 0-3.75 1.48-4.084 3.956-.235 1.766 0 3.023.718 3.846.858.98 2.184 1.11 3.368 1.11z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    nySH: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'c', function () {
          return g
        })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('HPNB'),
        o = n('v6aA'),
        l = n('jYSG'),
        s = n('AQ79'),
        c = n('+Bsv'),
        d = n('MWbm'),
        u = n('cHvH'),
        p = n('t62R'),
        m = n('rHpw'),
        h = function (e) {
          switch (e) {
            case s.d.SECONDARY:
              return '/messages/requests'
            case s.d.TERTIARY:
              return '/messages/requests/additional'
            case s.d.PRIMARY:
            default:
              return '/messages'
          }
        },
        f = function (e, t) {
          return r.a.createElement(o.a.Consumer, null, function (n) {
            var a = n.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return r.a.createElement(c.a, { pullRight: t, to: a })
          })
        },
        g = function (e) {
          return r.a.createElement(u.a, null, function (t) {
            var n = t.windowWidth,
              a = i.a.isTwoColumnLayout(n),
              o = 0 === e.length
            return a || o
              ? null
              : r.a.createElement(
                  d.a,
                  { style: v.stickyCopyContainer },
                  r.a.createElement(p.b, { style: v.stickyCopy }, l.a),
                )
          })
        },
        v = m.a.create(function (e) {
          return {
            stickyCopyContainer: {
              backgroundColor: e.colors.cellBackground,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              zIndex: 1,
            },
            stickyCopy: { color: e.colors.gray700, padding: e.spaces.space20 },
          }
        })
    },
    pXKu: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VrFO'),
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('vrRf'), n('ERkP')),
        y = n.n(v),
        b = n('BUB3'),
        _ = n('v6aA'),
        E = n('xZGM'),
        S = n('rxPX'),
        k = Object(S.a)()
          .propsFromState(function () {
            return {
              shouldShowPrompt: function (e, t) {
                return Object(E.D)(e, E.k)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: E.z }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        C = n('fs1G'),
        I = n('t62R'),
        x = n('feu+'),
        T = n('3XMw'),
        R = n.n(T),
        w = R.a.fd6150fc,
        F = y.a.createElement(
          R.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.a.createElement(I.b, { link: '/privacy' }, R.a.d42d239f),
        ),
        A = R.a.j24c37b2,
        O = k(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            a = e.shouldShowPrompt,
            r = y.a.useContext(_.a).featureSwitches
          if (!(a && r.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.a.createElement(x.a, {
              actionLabel: A,
              headline: w,
              onAction: function () {
                n.scribeAction('click'), t(E.k)
              },
              onClose: C.a,
              subtext: F,
              withCloseButton: !1,
            })
          )
        }),
        M = n('MMRb'),
        L = n('kGix'),
        D = n('0KEI'),
        P = Object(S.a)()
          .propsFromState(function () {
            return {
              hasConversations: M.selectHasConversations,
              fetchStatus: M.selectFetchStatus,
              isLoadingTop: M.selectIsLoadingTop,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasConversations,
              a = e.isLoadingTop
            return { fetchStatus: n ? L.a.LOADED : t, isRefreshing: n && a }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: M.fetchInbox,
              fetchInboxIfNeeded: M.fetchInboxIfNeeded,
              fetchUpdates: M.fetchUpdatesIfNeeded,
            }
          }),
        N = n('ddV6'),
        K = n.n(N),
        j =
          (n('hBpG'),
          n('7x/C'),
          n('2G9S'),
          n('z84I'),
          n('ho0z'),
          n('tQbP'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('0zG9'),
          n('6U7i'),
          n('KqXw'),
          n('MvUL'),
          n('hBvt'),
          n('lTEL'),
          n('kYxP'),
          n('EbOo')),
        B = n('tZH3'),
        H = n('1YZw'),
        U = n('hqKg'),
        V = n('AQOc'),
        W = n('G6rE'),
        q = n('oEGd'),
        z = function (e, t) {
          return t.conversationId
        },
        G = Object(U.createSelector)(
          z,
          function (e, t) {
            return M.selectConversation(e, z(0, t))
          },
          M.selectEntries,
          W.e.selectAll,
          function (e, t) {
            return !M.selectConversationIsRead(e, z(0, t))
          },
          function (e, t) {
            var n = z(0, t)
            return Object(M.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(E.D)(e, E.t)
          },
          function (e, t, n, a, r, i, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(V.a)(t.data, n, a),
              conversationId: e,
              unread: r,
              inboxType: i,
              shouldShowPinnedEducation: o,
            }
          },
        ),
        Q = {
          addFlag: E.z,
          addRecentSearch: M.addRecentSearches,
          addToast: H.b,
          block: W.e.block,
          createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: M.disableNotifications,
          enableNotifications: M.enableNotifications,
          leaveConversation: M.leaveConversation,
          muteDMUser: M.muteDMUser,
          unmuteDMUser: M.unmuteDMUser,
          unblock: W.e.unblock,
        },
        Y = Object(q.f)(G, Q),
        X = n('aA19'),
        J = n('OhSZ'),
        $ = n('fQBn'),
        Z = n('Myq3'),
        ee = n('3wZR'),
        te = n('XnpN'),
        ne = n('RqPI'),
        ae = n('HPNB'),
        re = n('V/6K'),
        ie = n('YemM'),
        oe = n('Irs7'),
        le = n('ii+P'),
        se = n('zCf4'),
        ce = n('MWbm'),
        de = n('mjJ+'),
        ue = n('eb3s'),
        pe = n('ZToW'),
        me = n('cHvH'),
        he = n('kb9v'),
        fe = n('IG7M'),
        ge = n('pHkl'),
        ve = n('X/yg'),
        ye = n('Lsrn'),
        be = n('k/Ka'),
        _e = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(be.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ye.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M17.931 2.508c0 .42-.34.75-.75.75h-8.39l1.38 2.08-.56 5.78-.47.16c-1.5.49-3.1 2.07-3.37 3.31-.07.35-.39.59-.73.59-.05 0-.11 0-.16-.01-.4-.09-.66-.49-.58-.89.39-1.81 2.24-3.52 3.91-4.25l.42-4.3-1.35-2.02c-.26-.38-.29-.87-.07-1.29.24-.41.66-.66 1.11-.66h8.86c.41 0 .75.34.75.75zm3.09 12.76c-.14.17-.46.46-1.05.46h-3.86l-2.64 6.1c-.12.28-.39.45-.69.45s-.57-.17-.69-.45l-1.96-4.53c-.16-.38.01-.82.39-.98.38-.17.82.01.99.39l1.27 2.93 1.69-3.91h-1.61c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.81c-.41-1.06-1.64-2.26-2.91-2.82-.09-.04-.16-.09-.22-.16-.22-.21-.3-.54-.17-.83.17-.38.61-.55.99-.39 1.59.7 3.5 2.43 3.89 4.25.06.25.03.66-.23.99zm.839-12.259L3.2 21.659c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.29-.29-.29-.76 0-1.06L20.8 1.939c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07z',
              }),
            ),
          )
        }
      _e.metadata = { width: 24, height: 24 }
      var Ee = _e,
        Se = n('ShJ/'),
        ke = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(be.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ye.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M28.05 6.52h-5.42V4.887c0-1.548-1.26-2.808-2.81-2.808h-7.54c-1.548 0-2.807 1.26-2.807 2.808v1.63H4.05c-.414 0-.75.337-.75.75s.336.75.75.75h.753L7 26.435c.27 1.504 1.657 2.554 3.37 2.554h11.36c1.713 0 3.1-1.05 3.376-2.598l2.19-18.37h.753c.413 0 .75-.337.75-.75s-.336-.75-.75-.75zM10.972 4.887c0-.72.586-1.308 1.307-1.308h7.542c.72 0 1.308.587 1.308 1.308v1.63H10.972V4.89zm12.65 21.28c-.163.91-1.068 1.32-1.893 1.32H10.37c-.824 0-1.73-.41-1.887-1.276L6.313 8.02h19.472l-2.162 18.148z',
              }),
              y.a.createElement('path', {
                d: 'M13.312 23.123c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75zm5.486 0c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ke.metadata = { width: 32, height: 32 }
      var Ce = ke,
        Ie = n('zIWA'),
        xe = n('5pef'),
        Te = n('IpT4'),
        Re = n('fz3c'),
        we = n('uDfI'),
        Fe = R.a.a30a206d,
        Ae = R.a.ib4b1b85,
        Oe = R.a.bd3ca2ee,
        Me = {
          confirmButtonLabel: R.a.bb1d57b6,
          actionTextLeave: R.a.g9074da4,
          header: R.a.gdf4b79f,
          text: R.a.h09b49f7,
        },
        Le = R.a.ad63377d,
        De = R.a.e1c9ec9b,
        Pe = R.a.i6b19b07,
        Ne = R.a.e3cfff7c,
        Ke = R.a.f398722d,
        je = R.a.bdd91963,
        Be = R.a.a8ed0eca,
        He = R.a.jac4eb1e
      function Ue(e) {
        var t = e.conversation,
          n = e.conversationId,
          a = e.conversationType,
          r = e.inboxType,
          i = e.isHovered,
          o = e.isPinned,
          l = e.isSnoozed,
          s = e.participantCount,
          c = e.position,
          d = Object(oe.b)(),
          u = Object(D.useCreateLocalApiErrorHandler)('DIRECT_MESSAGES_INBOX_ITEM'),
          p = Object(we.c)(),
          m = y.a.useContext(_.a).featureSwitches,
          h = Object(se.f)(),
          f = y.a.useContext(re.a).isDrawer,
          g = Object(we.d)(ne.r),
          v = m.getValue('dm_conversation_labels_max_pinned_count'),
          b = m.isTrue('dm_conversation_labels_pinned_education_enabled') && !o && 1 === c,
          S = y.a.useState(!1),
          k = K()(S, 2),
          C = k[0],
          I = k[1],
          x = y.a.useState(!1),
          T = K()(x, 2),
          R = T[0],
          w = T[1],
          F = Object(le.a)(E.t),
          A = K()(F, 2),
          O = A[0],
          L = A[1],
          P = y.a.useState(b && O),
          N = K()(P, 2),
          j = N[0],
          B = N[1]
        y.a.useEffect(
          function () {
            if (j) return L
          },
          [L, j],
        )
        var U = function () {
            var e = a === M.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
              t = {
                conversation_type: a === M.CONVERSATION_TYPE.GROUP ? ge.j.GROUP : ge.j.ONE_TO_ONE,
                conversation_id: n,
                conversation_participant_count: s,
                position: c,
                inbox_type: Object(ve.i)(r),
                entry_point: r === ge.e.PRIMARY ? ge.c.THREE_DOT_MENU : ge.c.CELL_X_BUTTON,
              }
            w(!1),
              d.scribe({ element: 'thread', action: e, data: t }),
              o && z(),
              p(M.leaveConversation({ conversationId: n })).catch(u({ showToast: !0 })),
              h.replace(Object(ve.f)(r))
          },
          V = function (e) {
            return function () {
              e && e(), I(!1)
            }
          },
          W = function (e) {
            return function () {
              var i,
                o,
                l = Re.a.DMConversation,
                s =
                  a === M.CONVERSATION_TYPE.GROUP
                    ? '0'
                    : ((i =
                        t &&
                        Object(te.a)(t, g).map(function (e) {
                          return e.user
                        })),
                      (o = (i && i[0]) || null) ? o.id_str : '')
              if ((d.scribeAction('report'), Object(Re.g)(m, l))) {
                var c = Object(Re.d)({
                  clientReferer: window.location.pathname,
                  isMedia: !1,
                  isPromoted: !1,
                  reportType: l,
                  reportedConversationId: n,
                  reportedUser: s,
                  scribeNamespace: d.contextualScribeNamespace,
                })
                e.push({
                  pathname: '/i/safety/report_story_start',
                  state: { input: { requested_variant: JSON.stringify(c) } },
                })
              } else {
                var u = Object(ve.g)(n, window.location.pathname, d.contextualScribeNamespace, r)
                e.push(u)
              }
            }
          },
          q = function () {
            if (l) p(M.enableNotifications({ conversationId: n })).then(p(Object(H.b)({ ariaOnly: !0, text: He })))
            else {
              var e = {
                conversation_type: a === M.CONVERSATION_TYPE.GROUP ? ge.j.GROUP : ge.j.ONE_TO_ONE,
                conversation_id: n,
                conversation_participant_count: s,
                entry_point: ge.c.THREE_DOT_MENU,
              }
              d.scribe({ element: 'thread', action: 'mute_dm_thread_forever', data: e }),
                p(M.disableNotifications({ conversationId: n })).then(p(Object(H.b)({ ariaOnly: !0, text: Ke })))
            }
          },
          z = function () {
            var r = e.pinConversation,
              i = e.unpinConversation,
              l = o ? 'unpin_dm_conversation' : 'pin_dm_conversation',
              u = o ? i : r,
              p = {
                conversation_type: a === M.CONVERSATION_TYPE.GROUP ? ge.j.GROUP : ge.j.ONE_TO_ONE,
                conversation_id: n,
                conversation_participant_count: s,
                position: c,
              }
            d.scribe({ element: 'thread', action: l, data: p }), t && u && u(n, t)
          },
          G = function (e) {
            var t = [
              { Icon: o ? Ee : Se.a, onClick: z, text: o ? je : De, withBottomBorder: !0 },
              {
                Icon: Ce,
                isEmphasized: !0,
                onClick: function () {
                  return w(!0)
                },
                text: Le,
                withBottomBorder: !0,
              },
              { Icon: Ie.a, onClick: W(h), text: Pe, withBottomBorder: !0 },
              { Icon: l ? xe.a : Te.a, onClick: q, text: l ? Be : Ne, withBottomBorder: !0 },
            ]
            return y.a.createElement(de.a, { items: t, onCloseRequested: V(e), shouldCloseOnClick: !0 })
          },
          Q = !pe.a.isEnabled || i || C || j
        return y.a.createElement(
          y.a.Fragment,
          null,
          R
            ? y.a.createElement(ue.a, {
                confirmButtonLabel: Me.confirmButtonLabel,
                confirmButtonType: 'destructiveFilled',
                headline: Me.header,
                onCancel: function () {
                  return w(!1)
                },
                onConfirm: U,
                text: Me.text,
              })
            : null,
          Q
            ? y.a.createElement(me.a, null, function (e) {
                var t = e.windowWidth,
                  n = ae.a.isTwoColumnLayout(t)
                return y.a.createElement(
                  ce.a,
                  { style: ie.a.menuContainer },
                  y.a.createElement(
                    he.a,
                    {
                      actionPrimary: {
                        text: Fe,
                        onClick: function () {
                          return B(!1)
                        },
                      },
                      headline: Ae,
                      onDismiss: function () {
                        return B(!1)
                      },
                      shouldDisplay: j && !f,
                      text: Oe({ count: v }),
                      withMask: !n,
                    },
                    n
                      ? y.a.createElement(fe.a, {
                          onClick: function () {
                            return I(!0)
                          },
                          renderActionMenu: G,
                          style: Q ? ie.a.menu : ie.a.hiddenMenu,
                        })
                      : null,
                  ),
                  n
                    ? null
                    : y.a.createElement(fe.a, {
                        onClick: function () {
                          return I(!0)
                        },
                        renderActionMenu: G,
                        style: Q ? ie.a.menu : ie.a.hiddenMenu,
                      }),
                )
              })
            : null,
        )
      }
      var Ve = n('aWyx'),
        We = 'conversation',
        qe = n('u0B7'),
        ze = n('Znyr'),
        Ge = n('0PHd'),
        Qe = n('yrzJ'),
        Ye = n('Xrkv'),
        Xe = n('lHOd'),
        Je = n('efqG'),
        $e = n('/yvb'),
        Ze = n('GBcw'),
        et = n('cm6r'),
        tt = n('htQn'),
        nt = n('5mJL'),
        at = n('vMjK'),
        rt = n('AQ79'),
        it = n('5oT/'),
        ot = R.a.d88d0790,
        lt = function (e) {
          var t
          return Boolean(
            null == e || null === (t = e.labels) || void 0 === t
              ? void 0
              : t.find(function (e) {
                  return e.label_type === rt.a.PINNED
                }),
          )
        },
        st = function (e) {
          var t = e.children
          return y.a.createElement(ce.a, { style: ie.a.socialProofContainer }, t)
        },
        ct = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(
                d()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              g()(
                d()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              g()(d()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered,
                  i = e.props,
                  o = i.conversation,
                  l = i.conversationId,
                  s = i.inboxType,
                  c = i.pinConversation,
                  d = i.position,
                  u = i.unpinConversation
                if (o && c && u) {
                  var p = lt(o),
                    m = o.notifications_disabled,
                    h = o.participants.length || 0
                  return y.a.createElement(Ue, {
                    conversation: o,
                    conversationId: l,
                    conversationType: o.type,
                    inboxType: s,
                    isHovered: n || a || r,
                    isPinned: p,
                    isSnoozed: m,
                    participantCount: h,
                    pinConversation: c,
                    position: d,
                    unpinConversation: u,
                  })
                }
                return null
              }),
              g()(d()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered
                switch (e.props.inboxType) {
                  case rt.d.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: a, isHovered: r })
                      : null
                  case rt.d.SECONDARY:
                  case rt.d.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              g()(d()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  a = n.inboxType,
                  r = n.searchQuery,
                  i = n.unread
                    ? y.a.createElement(ze.a, {
                        pip: !0,
                        style: ie.a.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (a) {
                  case rt.d.PRIMARY:
                    return e._isVDLEnabled ? i : r ? null : e._renderTimestamp(t)
                  case rt.d.SECONDARY:
                    return e._isVDLEnabled ? i : null
                  default:
                    return null
                }
              }),
              g()(d()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(ee.b)(t.icon)
                return y.a.createElement(
                  I.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.a.createElement(n, { style: ie.a.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              g()(d()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var a = n[0]
                switch (a.proof_type) {
                  case Ve.d.MUTUAL_FRIENDS:
                    if (0 === a.total) return null
                    var r = a.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = a.users.map(function (e) {
                        return e.name
                      })
                    return y.a.createElement(
                      st,
                      null,
                      y.a.createElement(
                        I.b,
                        { weight: e._isVDLEnabled ? 'medium' : 'normal' },
                        y.a.createElement(Ge.a, {
                          displayFacepileInline: !0,
                          knownFollowersAvatarUrls: r,
                          knownFollowersCount: a.total,
                          knownFollowersNames: i,
                          textStyle: e._isVDLEnabled && ie.a.socialProofText,
                          withFacepile: !e._isVDLEnabled,
                        }),
                      ),
                    )
                  default:
                    return null
                }
              }),
              g()(d()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r = t.searchQuery,
                  i = n ? Object(te.a)(n, a) : [],
                  o = [],
                  l = function (e, t) {
                    return e.localeCompare(t)
                  },
                  s = i
                    .map(function (e) {
                      return e.user
                    })
                    .filter(function (e) {
                      var t,
                        n = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(r)
                      return e.id_str !== a && (n && o.push(e.name), !n)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(l),
                  c = o.sort(l).concat(s)
                if (n) {
                  if (n.type === M.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var d = i.map(function (e) {
                        return e.user
                      }),
                      u = K()(d, 1)[0]
                    return y.a.createElement(Qe.a, { color: 'gray700', screenName: u.screen_name })
                  }
                  var p = Object(Ye.a)(c, !0)
                  return y.a.createElement(I.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              g()(d()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = e.context.loggedInUserId,
                  i = Object(ve.j)(n, r),
                  o = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                return y.a.createElement(Xe.a.Consumer, null, function (t) {
                  return y.a.createElement(
                    Je.a,
                    {
                      renderContent: function (n, r) {
                        return y.a.createElement(B.a, {
                          dismiss: n,
                          flatBorders: 'sheet' === r,
                          isGroup: o,
                          onBlockClick: e._blockUser(i.idStr),
                          onDeleteClick: e._deleteConversation(a),
                          onReportClick: e._handleReportMenuItemClick(t),
                          requestorScreenName: i.screenName,
                          showBlock: !o,
                          showCancel: 'sheet' === r,
                          showDelete: !0,
                        })
                      },
                    },
                    y.a.createElement($e.a, {
                      accessibilityLabel: ot,
                      icon: y.a.createElement(it.a, { style: e._isVDLEnabled ? ie.a.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? ie.a.vdlXButton : ie.a.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              g()(d()(e), '_getUserIdOfOneToOneConvo', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r =
                    n &&
                    Object(te.a)(n, a).map(function (e) {
                      return e.user
                    }),
                  i = (r && r[0]) || null
                return i ? i.id_str : ''
              }),
              g()(d()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.conversation,
                    i = n.conversationId,
                    o = n.inboxType,
                    l = Re.a.DMConversation,
                    s = e.context.featureSwitches,
                    c =
                      (null == r ? void 0 : r.type) === M.CONVERSATION_TYPE.GROUP ? '0' : e._getUserIdOfOneToOneConvo()
                  if (i)
                    if ((a.scribeAction('report'), Object(Re.g)(s, l))) {
                      var d = Object(Re.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: l,
                        reportedConversationId: i,
                        reportedUser: c,
                        scribeNamespace: a.contextualScribeNamespace,
                      })
                      t.push({
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(d) } },
                      })
                    } else {
                      var u = Object(ve.g)(i, window.location.pathname, a.contextualScribeNamespace, o)
                      t.push(u)
                    }
                }
              }),
              g()(d()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              g()(d()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  a = n.conversation,
                  r = n.isMessageItem,
                  i =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  o = [
                    i || r ? ie.a.inlineNotificationsDisabledIcon : ie.a.notificationsDisabledIcon,
                    i && ie.a.inlineNotificationsDisabledIconVDL,
                  ],
                  l = Number(t && r ? (null == t ? void 0 : t.time) : null == a ? void 0 : a.sort_timestamp)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    ce.a,
                    { style: [r && ie.a.inlineTimestamp, i && ie.a.inlineTimestampVDL] },
                    a && l ? y.a.createElement(Ze.a, { timestamp: l }) : null,
                    null != a && a.notifications_disabled ? y.a.createElement(Te.a, { style: o }) : null,
                  ),
                )
              }),
              g()(d()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.conversation,
                    i = n.createLocalApiErrorHandler,
                    o = n.inboxType,
                    l = n.leaveConversation,
                    s = n.position,
                    c = e.context.history,
                    d = (null == r ? void 0 : r.participants.length) || 0,
                    u = r && r.type === M.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type:
                        (null == r ? void 0 : r.type) === M.CONVERSATION_TYPE.GROUP ? ge.j.GROUP : ge.j.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: d,
                      position: s,
                      inbox_type: Object(ve.i)(o),
                      entry_point: o === ge.e.PRIMARY ? ge.c.THREE_DOT_MENU : ge.c.CELL_X_BUTTON,
                    }
                  a.scribe({ element: 'thread', action: u, data: p }),
                    l({ conversationId: t }).catch(i({ showToast: !0 })),
                    c.replace(Object(ve.f)(o))
                }
              }),
              g()(d()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    a = n.addToast,
                    r = n.analytics,
                    i = n.block,
                    o = n.createLocalApiErrorHandler
                  i(t).then(function () {
                    a({ action: { label: at.c, onAction: e._createUnblockUserHandler(t) }, text: at.a })
                  }, o(j.a)),
                    r.scribeAction('block')
                }
              }),
              g()(d()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(r(qe.a)), a.scribeAction('unblock')
                }
              }),
              g()(d()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  a = n.addRecentSearch,
                  r = n.analytics,
                  i = n.conversation,
                  o = n.conversationId,
                  l = n.onClick,
                  s = n.position,
                  c = n.searchQuery,
                  d = (null == i ? void 0 : i.participants.length) || 0,
                  u = (null == i ? void 0 : i.type) === M.CONVERSATION_TYPE.GROUP
                c &&
                  (r.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: o,
                      conversation_participant_count: d,
                      conversation_type: u ? ge.j.GROUP : ge.j.ONE_TO_ONE,
                      entry_point: ge.c.ALL,
                      inbox_type: ge.e.PRIMARY,
                      dm_search_result_type: ge.a.CONVERSATION,
                      message_type: ge.f.NOT_APPLICABLE,
                      position: s,
                    },
                  }),
                  r.scribe({ component: 'recent_search', action: 'add' }),
                  a(c)),
                  l(t, o, i, s)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = this.props.conversation,
                    n = null == t ? void 0 : t.conversation_id,
                    a = null == t ? void 0 : t.notifications_disabled,
                    r = null == t ? void 0 : t.last_read_event_id,
                    i = null == t ? void 0 : t.sort_event_id,
                    o = null == t ? void 0 : t.max_entry_id,
                    l = null == t ? void 0 : t.convo_label,
                    s = this.props.messageId,
                    c = e.conversation,
                    d = null == c ? void 0 : c.conversation_id,
                    u = null == c ? void 0 : c.notifications_disabled,
                    p = null == c ? void 0 : c.last_read_event_id,
                    m = null == c ? void 0 : c.sort_event_id,
                    h = null == c ? void 0 : c.max_entry_id,
                    f = null == c ? void 0 : c.convo_label,
                    g = e.messageId,
                    v = this.props,
                    y = v.filter,
                    b = v.isActive,
                    _ = e.filter,
                    E = e.isActive
                  return n !== d || a !== u || r !== p || i !== m || o !== h || s !== g || b !== E || y !== _ || l !== f
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.conversation,
                    a = t.isActive,
                    i = t.isMessageItem,
                    o = t.link,
                    l = t.messageId,
                    s = t.perspective,
                    c = t.position,
                    d = t.searchQuery,
                    u = t.unread,
                    p = (null == n ? void 0 : n.entries) || [],
                    m = i
                      ? p.find(function (e) {
                          return e.id === l
                        })
                      : Object(Z.a)(p, function (e) {
                          return !ge.b.includes(e.type)
                        }),
                    h = [ie.a.root, u && !this._isVDLEnabled && ie.a.unread, a && this._isVDLEnabled && ie.a.active],
                    f = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP,
                    g = this._isVDLEnabled && f
                  if (!n) return null
                  var v = !!n.convo_label,
                    b = !n.trusted && !v,
                    _ = this._renderConversationEndCell(m),
                    E = d && !i,
                    S = 'text',
                    k = 'bold'
                  return (
                    this._isVDLEnabled && !u && ((S = 'gray900'), (k = 'medium')),
                    this._isVDLEnabled && a && ((S = 'text'), (k = 'medium')),
                    !n || (!d && n.isSearchResultOnly)
                      ? null
                      : y.a.createElement(et.a, null, function (t) {
                          var l = t.isFocused,
                            p = t.isFocusedWithin,
                            f = t.isHovered
                          return y.a.createElement(
                            tt.a,
                            {
                              accessibilityRole: 'none',
                              accessibilityState: { selected: a },
                              link: {
                                pathname: null == o ? void 0 : o.pathname,
                                anchorless: !0,
                                state: r()(
                                  r()({}, null == o ? void 0 : o.state),
                                  {},
                                  { position: c, entryPoint: i ? (null == m ? void 0 : m.id) : null, isMessageItem: i },
                                ),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: We,
                            },
                            y.a.createElement(
                              nt.a,
                              {
                                avatarCell: y.a.createElement(X.a, { conversation: n, perspective: s, withBadge: g }),
                                avatarSize: 'xxLarge',
                              },
                              y.a.createElement(
                                ce.a,
                                { style: ie.a.bodyColumn },
                                y.a.createElement(
                                  ce.a,
                                  { style: ie.a.titleContainer },
                                  y.a.createElement(J.b, {
                                    conversation: n,
                                    isConversationSearchTitle: !!E,
                                    isMessageSearchTitle: !!i,
                                    perspective: s,
                                    renderTimestamp: function () {
                                      return e._renderTimestamp(m)
                                    },
                                    textColor: S,
                                    titleWeight: k,
                                    withScreenName: !d && !i,
                                    withVDLRefresh: e._isVDLEnabled,
                                  }),
                                  y.a.createElement(
                                    ce.a,
                                    { style: [ie.a.snippet, !l && !p && !f && ie.a.snippetPadding] },
                                    m && !E
                                      ? y.a.createElement($.a, {
                                          conversationType: n.type,
                                          entry: m,
                                          isMessageItem: i,
                                          isSelected: e._isVDLEnabled && a,
                                          perspective: s,
                                          unread: e._isVDLEnabled && u,
                                        })
                                      : E
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  v ? e._renderConversationLabel(n) : null,
                                  b ? e._renderSocialProof(n) : null,
                                ),
                                _ ? y.a.createElement(ce.a, { style: ie.a.endCell }, _) : null,
                                e._renderConversationActions({ isFocused: l, isFocusedWithin: p, isHovered: f }),
                              ),
                            ),
                          )
                        })
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(ct, 'contextType', _.a),
        g()(ct, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var dt = Object(oe.a)(Y(ct), { page: 'messages', section: 'inbox' }),
        ut =
          (n('jwue'),
          n('+oxZ'),
          n('JtPf'),
          n('87if'),
          Object(S.a)()
            .propsFromState(function () {
              return { pinnedConversationIds: M.selectPinnedConversationIds }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                  'DM_PINNED_INBOX_CONTEXT',
                ),
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox' })),
        pt = n('oUUt'),
        mt = n('d9IC'),
        ht = n('h3MB'),
        ft =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('uFXj'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        gt = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        vt = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: gt, sliceItems: ft }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.sliceItems,
              a = (function (e) {
                var t
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.groupData
                    })) || void 0 === t
                    ? void 0
                    : t.groupData) || []
                )
              })(n),
              r = (function (e) {
                var t
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.peopleData
                    })) || void 0 === t
                    ? void 0
                    : t.peopleData) || []
                )
              })(n),
              i = (function (e) {
                var t, n
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.messageData
                    })) ||
                  void 0 === t ||
                  null === (n = t.messageData) ||
                  void 0 === n
                    ? void 0
                    : n.conversationIds) || []
                )
              })(n)
            return {
              entryIds: (function (e) {
                var t, n
                return (
                  (null ===
                    (t = e.find(function (e) {
                      return e.messageData
                    })) ||
                  void 0 === t ||
                  null === (n = t.messageData) ||
                  void 0 === n
                    ? void 0
                    : n.entryIds) || []
                )
              })(n),
              fetchStatus: t,
              groupConversationIds: a,
              messageConversationIds: i,
              peopleSearchConversationIds: r,
              sliceItems: n,
            }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DM_SEARCH_ALL_CONTEXT',
              ),
              fetchSearchIfNeeded: t.fetchIfNeeded,
            }
          }),
        yt = n('MDbM'),
        bt = n('v//M'),
        _t = n('0yYu'),
        Et = n('rHpw'),
        St = n('lBmi'),
        kt = n('91AQ'),
        Ct = n('6ZHn'),
        It = R.a.c94ac69d,
        xt = R.a.a2f8105f,
        Tt = R.a.g2fd3205,
        Rt = R.a.ffd9cfe6,
        wt = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(
                d()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              g()(
                d()(e),
                '_messagesBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_messages_bucket_size'),
              ),
              g()(
                d()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              g()(d()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  a = t.messageConversationIds,
                  r = t.peopleSearchConversationIds,
                  i = t.renderEmptyState,
                  o = r.length && n.length,
                  l = e._groupBucketSize < n.length,
                  s = e._messagesBucketSize < a.length,
                  c = e._peopleBucketSize < r.length
                return (null == n ? void 0 : n.length) || r.length || a.length
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      r.length ? e._renderPeopleSection() : null,
                      o && !c ? y.a.createElement(_t.a, null) : null,
                      c ? e._renderDMSearchFooter(Tt) : null,
                      n.length ? e._renderGroupsSection() : null,
                      l ? e._renderDMSearchFooter(It) : null,
                      a.length ? e._renderMessagesSection() : null,
                      s ? e._renderDMSearchFooter(xt) : null,
                    )
                  : i()
              }),
              g()(d()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              g()(d()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return y.a.createElement(
                  ce.a,
                  { style: At.header },
                  y.a.createElement(I.b, { link: { pathname: n.pathname, state: { tab: t } } }, Rt),
                )
              }),
              g()(d()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.a.createElement(mt.a, { headerText: t, icon: n })
              }),
              g()(d()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: St.a, headerText: It }),
                  n
                    .map(function (e) {
                      return e ? r({ conversationIds: n, pinConversation: a, unpinConversation: i })(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              g()(d()(e), '_renderMessagesSection', function () {
                var t = e.props,
                  n = t.entryIds,
                  a = t.messageConversationIds,
                  r = t.pinConversation,
                  i = t.renderInboxItem,
                  o = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: kt.a, headerText: xt }),
                  n
                    .map(function (e) {
                      return e
                        ? (function (e) {
                            return i({
                              conversationIds: a,
                              isMessageItem: !0,
                              messageIds: n,
                              pinConversation: r,
                              unpinConversation: o,
                            })(e)
                          })(e)
                        : null
                    })
                    .slice(0, e._messagesBucketSize),
                )
              }),
              g()(d()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Ct.a, headerText: Tt }),
                  n
                    .map(function (e) {
                      return e ? r({ conversationIds: n, pinConversation: a, unpinConversation: i })(e) : null
                    })
                    .slice(0, e._peopleBucketSize),
                )
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    a = t.module
                  e.module !== a && n !== yt.a.FAILED && this._handleFetch()
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.loadingLabel
                  return y.a.createElement(bt.a, {
                    accessibilityLabel: n,
                    fetchStatus: t,
                    onRequestRetry: this._handleFetch,
                    render: this._renderSearchResults,
                  })
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(wt, 'contextType', _.a)
      var Ft,
        At = Et.a.create(function (e) {
          return {
            header: {
              backgroundColor: e.colors.cellBackground,
              paddingLeft: e.spaces.space16,
              paddingVertical: e.spaces.space12,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
              borderTopColor: e.colors.borderColor,
            },
          }
        }),
        Ot = vt(wt),
        Mt = n('wAC9'),
        Lt = (n('1IsZ'), n('IAdD'), n('xPna')),
        Dt = function (e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = {},
            a = {}
          return (
            null != e &&
              e.conversations &&
              (Object.values(e.conversations).forEach(function (e) {
                e && e.users && Object.assign(n, e.users), t && (e.isSearchResult = !0)
              }),
              (a = { conversations: null == e ? void 0 : e.conversations, users: n })),
            null != e && e.entries && (a = r()(r()({}, a), {}, { entries: null == e ? void 0 : e.entries })),
            Object(Lt.a)(a)
          )
        },
        Pt = function (e) {
          return Object(Mt.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(ge.h, '-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Dt,
          })
        },
        Nt = function (e, t) {
          return t.query
        },
        Kt = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(Nt, function (e) {
              return e ? Pt(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            a = e.pinConversation,
            r = e.query,
            i = e.renderEmptyState,
            o = e.renderInboxItem,
            l = e.sliceModule,
            s = e.unpinConversation
          return l
            ? y.a.createElement(Ot, {
                loadingLabel: t,
                location: n,
                module: l,
                pinConversation: a,
                query: r,
                renderEmptyState: i,
                renderInboxItem: o,
                unpinConversation: s,
              })
            : i()
        }),
        jt = M.selectRecentSearches,
        Bt = function (e, t) {
          return t.query ? M.selectSearchConversations(e, t.query) : []
        },
        Ht = function (e, t) {
          return t.query ? M.selectSearchFetchStatus(e, t.query) : L.a.LOADED
        },
        Ut = function (e, t) {
          return t.conversationIds || []
        },
        Vt = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        Wt = Object(S.a)()
          .propsFromState(function () {
            return { conversationIds: Ut, recentSearches: jt, searchFetchStatus: Ht, searchConversationIds: Bt }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              a = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: Vt(a, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: M.addRecentSearches,
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: M.searchConversations,
              clearRecentSearch: M.clearRecentSearch,
              clearRecentSearches: M.clearRecentSearches,
            }
          }),
        qt = n('VY6S'),
        zt = n('s14A'),
        Gt = function (e) {
          return Object(Mt.a)({
            contextSuffix: 'DM_GROUP_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMGroupSearch
            },
            sliceKey: ''.concat(ge.h, '-groups-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Dt,
          })
        },
        Qt = function (e) {
          return Object(Mt.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(ge.h, '-people-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Dt,
          })
        },
        Yt = function (e, t) {
          return t.query
        },
        Xt = function (e, t) {
          return t.tabType
        },
        Jt = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(U.createSelector)(Xt, Yt, function (e, t) {
              var n = t && e === ge.i.PEOPLE
              return t && e === ge.i.GROUPS ? Gt(t) : n ? Qt(t) : void 0
            }),
          }
        }),
        $t = n('FS1z'),
        Zt = Jt(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            a = e.pinConversation,
            r = e.renderEmptyState,
            i = e.renderInboxItem,
            o = e.sliceModule,
            l = e.unpinConversation
          return o
            ? y.a.createElement($t.a, {
                footer: t,
                module: o,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: i({ conversationIds: [], pinConversation: a, unpinConversation: l }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        en = n('VPW4'),
        tn = (n('YWiL'), n('mN6z')),
        nn = n('TEoO'),
        an = n('NjAB'),
        rn = n('Fr3L'),
        on = n('s8G+'),
        ln = n('DQzJ'),
        sn = void 0 !== Ft ? Ft : (Ft = n('y59G')),
        cn = 'DM_MESSAGE_SEARCH',
        dn = { context: cn },
        un = function (e) {
          return e
        },
        pn = function (e) {
          var t,
            n,
            a,
            i = e.footer,
            o = e.noItemsRenderer,
            l = e.onScrollEnd,
            s = e.pinConversation,
            c = e.renderInboxItem,
            d = e.searchTerm,
            u = e.unpinConversation,
            p = Object(we.c)(),
            m = Object(on.a)('dm_inbox_search_message_attachment_previews_enabled'),
            h = Object(on.a)('rito_safety_mode_blocked_profile_enabled'),
            f = Object(on.a)('super_follow_user_api_enabled'),
            g = Object(ln.a)(sn, {
              query: d,
              withAttachments: m,
              withSafetyModeUserFields: h,
              withSuperFollowsUserFields: f,
            }),
            v = g.data,
            b = g.fetchNext,
            _ = g.hasNext,
            E = y.a.useMemo(
              function () {
                var e,
                  t,
                  n,
                  a =
                    null == v ||
                    null === (e = v.dm_message_slice_result) ||
                    void 0 === e ||
                    null === (t = e.items) ||
                    void 0 === t
                      ? void 0
                      : t.map(function (e) {
                          var t, n
                          return null == e ||
                            null === (t = e.dm_event) ||
                            void 0 === t ||
                            null === (n = t.legacy) ||
                            void 0 === n
                            ? void 0
                            : n.conversation
                        }),
                  i = null == v || null === (n = v.dm_message_slice_result) || void 0 === n ? void 0 : n.items,
                  o = Object(an.b)(a, [ht.a]),
                  l = Object(an.b)(i, [ht.b])
                return {
                  normalizedConversations: o,
                  normalizedMessages: l,
                  entities: r()(r()({}, null == o ? void 0 : o.entities), null == l ? void 0 : l.entities),
                }
              },
              [null == v || null === (t = v.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            S = E.entities,
            k = E.normalizedConversations,
            C = E.normalizedMessages,
            I =
              ((n = v),
              (a = y.a.useRef()),
              y.a.useEffect(function () {
                a.current = n
              }),
              a.current)
          return (
            y.a.useEffect(
              function () {
                Object(tn.a)(v, I) || p(Dt(S, !0))
              },
              [S, v, I, p],
            ),
            y.a.createElement(nn.a, {
              cacheKey: cn,
              footer: _ ? null : i,
              identityFunction: un,
              items: null == C ? void 0 : C.result,
              noItemsRenderer: o,
              onNearEnd: b,
              onScrollEnd: l,
              renderer: c({
                conversationIds: null == k ? void 0 : k.result,
                isMessageItem: !0,
                messageIds: null == C ? void 0 : C.result,
                pinConversation: s,
                unpinConversation: u,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        mn = Et.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function hn(e) {
        return y.a.createElement(
          rn.a,
          { errorConfig: dn },
          y.a.createElement(
            y.a.Suspense,
            { fallback: y.a.createElement(en.a, { style: mn.activityIndicatior }) },
            y.a.createElement(pn, e),
          ),
        )
      }
      var fn = n('j7Bv'),
        gn = n('VwDm'),
        vn = n('hOZg'),
        yn = R.a.dbd5d40f,
        bn = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            s()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    a = e.recentSearch,
                    r = y.a.createElement(fn.a, { Icon: gn.a, color: 'neutral', size: 'xLarge', style: _n.searchIcon }),
                    i = [_n.listItemView, _n.bottomBorder]
                  return y.a.createElement(
                    tt.a,
                    { onPress: n, style: i },
                    y.a.createElement(
                      ce.a,
                      null,
                      y.a.createElement(
                        nt.a,
                        { avatarCell: r, avatarSize: 'xLarge', cellStyle: _n.avatarColumn },
                        y.a.createElement(
                          ce.a,
                          { style: _n.container },
                          y.a.createElement(I.b, { numberOfLines: 1 }, a),
                          y.a.createElement($e.a, {
                            accessibilityLabel: yn,
                            borderColor: 'transparent',
                            icon: y.a.createElement(vn.a, null),
                            onPress: t,
                            type: 'brandText',
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent),
        _n = Et.a.create(function (e) {
          return {
            container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
            searchIcon: { marginRight: e.spaces.space12, padding: e.spaces.space4 },
            avatarColumn: { flexGrow: 1, minWidth: '32px' },
            bottomBorder: {
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
            listItemView: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space12,
              width: '100%',
            },
          }
        }),
        En = bn,
        Sn = n('DbJc'),
        kn = n('IG4P'),
        Cn = n('RJrc'),
        In = n('TnY3'),
        xn = n('FIs5'),
        Tn = n('6OUF'),
        Rn = n('k/OQ'),
        wn = n('95Se'),
        Fn = 'dmSearchInbox',
        An = function (e) {
          return e
        },
        On = R.a.b08821f3,
        Mn = R.a.a66ac766,
        Ln = R.a.fe61929d,
        Dn = R.a.a846382a,
        Pn = R.a.b9dae4f4,
        Nn = R.a.e7fb2027,
        Kn = R.a.b92a21d8,
        jn = R.a.jdc67c42,
        Bn = R.a.e8581ccd,
        Hn = R.a.f08940ab,
        Un = R.a.gaae1fd5,
        Vn = R.a.i5d7593a,
        Wn = R.a.f8321d82,
        qn = R.a.c94ac69d,
        zn = R.a.a2f8105f,
        Gn = R.a.g2fd3205,
        Qn = R.a.fb3c8e74,
        Yn = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(d()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              g()(
                d()(e),
                '_messageSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              g()(
                d()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              g()(d()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              g()(d()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = e.state.debouncedQuery
                return r && a
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    y.a.createElement(xn.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Hn,
                      header: Kn({ query: r }),
                      message: e._messageSearchEnabled ? Bn : jn,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.a.createElement(
                      ce.a,
                      { style: ta.emptyState },
                      y.a.createElement(I.b, { align: 'center', color: 'gray700' }, e._messageSearchEnabled ? Vn : Un),
                    )
              }),
              g()(d()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = t.recentSearches
                return r.length && !a
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      y.a.createElement(mt.a, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Qn,
                        withClearButton: !0,
                      }),
                      r.map(function (t) {
                        return y.a.createElement(En, {
                          clearRecentSearch: function (n) {
                            return e._handleClearRecentSearch(n, t)
                          },
                          handleRecentSearchClick: function () {
                            return e._handleRecentSearchClick(t)
                          },
                          key: t,
                          recentSearch: t,
                        })
                      }),
                    )
                  : e._renderEmptyDMSearchInbox()
              }),
              g()(d()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation,
                  o = e.state.debouncedQuery
                return o
                  ? y.a.createElement(Kt, {
                      loadingLabel: Mn,
                      location: n,
                      pinConversation: a,
                      query: o,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: r,
                      unpinConversation: i,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              g()(d()(e), '_renderConversationsTab', function (t) {
                var n = e.props,
                  a = n.pinConversation,
                  r = n.renderInboxItem,
                  i = n.unpinConversation,
                  o = e.state.debouncedQuery
                return y.a.createElement(Zt, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  pinConversation: a,
                  query: o,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: r,
                  tabType: t ? ge.i.GROUPS : ge.i.PEOPLE,
                  unpinConversation: i,
                })
              }),
              g()(d()(e), '_renderMessagesTab', function () {
                var t = e.props,
                  n = t.pinConversation,
                  a = t.renderInboxItem,
                  r = t.unpinConversation,
                  i = e.state.debouncedQuery
                return i
                  ? y.a.createElement(hn, {
                      footer: e._renderFooter(),
                      noItemsRenderer: e._renderEmptyDMSearchInbox,
                      onScrollEnd: e._handleScrollEnd,
                      pinConversation: n,
                      renderInboxItem: a,
                      searchTerm: i,
                      unpinConversation: r,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              g()(d()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case Gn:
                    return e._renderConversationsTab(!1)
                  case qn:
                    return e._renderConversationsTab(!0)
                  case zn:
                    return e._renderMessagesTab()
                  default:
                    return e._renderAllDMSearchResultsTab()
                }
              }),
              g()(d()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.searchConversationIds,
                  o = t.unpinConversation,
                  l = e.state.isRefreshing
                return y.a.createElement(
                  zt.a,
                  null,
                  y.a.createElement(
                    kn.a,
                    { isRefreshing: l, onRefresh: e._handlePullToRefresh },
                    y.a.createElement(nn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: Sn.a,
                      assumedItemHeight: 100,
                      cacheKey: Fn,
                      footer: e._renderFooter(),
                      identityFunction: An,
                      items: i,
                      noItemsRenderer: e._renderRecentSearches,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: e._handleScrollEnd,
                      renderer: r({ conversationIds: i, pinConversation: a, unpinConversation: o }),
                      withoutHeadroom: !0,
                    }),
                  ),
                )
              }),
              g()(d()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.a.createElement(Cn.a, null)
                  : y.a.createElement(
                      ce.a,
                      { style: ta.footerContainer },
                      y.a.createElement(I.b, { align: 'center', size: 'body', weight: 'bold' }, Nn),
                      y.a.createElement(
                        et.a,
                        { interactiveStyles: null },
                        y.a.createElement(
                          I.b,
                          {
                            align: 'center',
                            color: 'primary',
                            onPress: e._handleFooterClick,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Pn,
                        ),
                      ),
                    )
              }),
              g()(d()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), a()
              }),
              g()(d()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              g()(d()(e), '_handleFooterClick', function () {
                var t, n
                null === (t = e._textInputRef) || void 0 === t || t.clear(),
                  null === (n = e._textInputRef) || void 0 === n || n.focus()
              }),
              g()(d()(e), '_handleRefetchSearch', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.createLocalApiErrorHandler,
                  r = t.search,
                  i = e.state.debouncedQuery
                r &&
                  i &&
                  (n.scribe({ component: 'search', element: 'retry', action: 'click' }),
                  r({ query: i.toLowerCase(), preserveResults: !1, fetchNextPage: !1 }).catch(a()))
              }),
              g()(d()(e), '_handlePullToRefresh', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  a = t.search,
                  r = e.state.debouncedQuery
                e.setState({ isRefreshing: !0 }),
                  a &&
                    r &&
                    a({ query: r.toLowerCase(), preserveResults: !0, fetchNextPage: !1 })
                      .then(function () {
                        return e.setState({ isRefreshing: !1 })
                      })
                      .catch(function (t) {
                        return e.setState({ isRefreshing: !1 }), n()(t)
                      })
              }),
              g()(d()(e), '_handleSearchChangeInner', function (t) {
                var n = e.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.onQueryChange,
                  i = n.search
                r(t),
                  e.setState({ debouncedQuery: t }),
                  i &&
                    t &&
                    !e._modularSearchEnabled &&
                    i({ query: t, preserveResults: !1, fetchNextPage: !1 }).catch(a())
              }),
              g()(d()(e), '_handleSearchChangeDebounced', Object(qt.a)(e._handleSearchChangeInner, 200)),
              g()(d()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  a = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (a(n), e._handleSearchChangeDebounced(n))
              }),
              g()(d()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.search,
                  r = e.state.debouncedQuery
                e.setState({ isLoadingMore: !0 }),
                  r &&
                    (n.scribe({ component: 'search', element: 'results', action: 'get_older' }),
                    a({ query: r, preserveResults: !1, fetchNextPage: !0 }).finally(function () {
                      return e.setState({ isLoadingMore: !1 })
                    }))
              }),
              g()(d()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  a = t.analytics,
                  r = t.query
                e.state.debouncedQuery && r && (n(r), a.scribe({ component: 'recent_search', action: 'add' }))
              }),
              g()(d()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              g()(d()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              g()(d()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  a = e.props,
                  r = a.addRecentSearch,
                  i = a.analytics
                n &&
                  (r(n),
                  i.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              g()(d()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  a = n.analytics
                ;(0, n.onQueryChange)(t),
                  a.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              g()(d()(e), '_handleClearRecentSearch', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), r.scribe({ component: 'recent_search', action: 'clear' }), i(n)
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e,
                    t,
                    n = this.props.location
                  null != n &&
                    null !== (e = n.state) &&
                    void 0 !== e &&
                    e.searchQuery &&
                    this._handleSearchChangeInner(
                      null == n || null === (t = n.state) || void 0 === t ? void 0 : t.searchQuery,
                    )
                  this._textInputRef && this._textInputRef.focus()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.analytics,
                    a = t.query,
                    r = t.recentSearches
                  e.query || !a || r.includes(a) || n.scribe({ component: 'search', action: 'began_typing' })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.location,
                    n = e.query,
                    a = e.searchFetchStatus,
                    i = !(
                      (this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                        this.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled')) ||
                      (this._modularSearchEnabled && n)
                    ),
                    o = [ta.searchInput, i ? ta.searchInputBorder : void 0],
                    l = ((null == t ? void 0 : t.state) || {}).tab,
                    s = [Wn, Gn, qn]
                  this._messageSearchEnabled && s.push(zn)
                  var c = s.map(function (e) {
                      return {
                        key: e,
                        label: e,
                        accessibilityLabel: e,
                        isActive: function () {
                          return l === e || (!l && e === Wn)
                        },
                        to: r()(r()({}, t), {}, { state: r()(r()({}, t.state), {}, { tab: e }) }),
                      }
                    }),
                    d = l === zn && this._messageSearchEnabled
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      ce.a,
                      { style: o },
                      y.a.createElement($e.a, {
                        accessibilityLabel: On,
                        icon: y.a.createElement(wn.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.a.createElement(Tn.a, {
                        Icon: gn.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? Dn : Ln,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || l === Gn || l === qn || d)
                      ? y.a.createElement(
                          y.a.Fragment,
                          null,
                          y.a.createElement(Rn.a, { links: c }),
                          this._renderTabContent(),
                        )
                      : y.a.createElement(bt.a, {
                          accessibilityLabel: Mn,
                          fetchStatus: a,
                          onRequestRetry: this._handleRefetchSearch,
                          render: this._renderSearchResults,
                        }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()(Yn, 'contextType', _.a), g()(Yn, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var Xn,
        Jn,
        $n,
        Zn,
        ea,
        ta = Et.a.create(function (e) {
          return {
            emptyState: { marginTop: e.spaces.space32 },
            searchInput: {
              backgroundColor: e.colors.cellBackground,
              padding: e.spaces.space12,
              flexDirection: 'row',
              alignItems: 'center',
              zIndex: 1,
            },
            searchInputBorder: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
            },
            footerContainer: { marginVertical: e.spaces.space32 },
          }
        }),
        na = Object(In.a)(Wt(Yn)),
        aa = n('P74S'),
        ra = n.n(aa),
        ia = n('OIs+'),
        oa = R.a.cb367657,
        la = R.a.ie9a7e48,
        sa = R.a.hd3927c6,
        ca = R.a.f1ac0968,
        da =
          ((Xn = {}),
          g()(Xn, ia.a.Offline, { toast: { text: la } }),
          g()(Xn, 'defaultToast', { text: oa }),
          g()(Xn, 'showToast', !0),
          Xn),
        ua =
          ((Jn = {}),
          g()(Jn, ia.a.Offline, { toast: { text: ca } }),
          g()(Jn, 'defaultToast', { text: sa }),
          g()(Jn, 'showToast', !0),
          Jn),
        pa = n('HvW7'),
        ma = n.n(pa),
        ha = n('PJTX'),
        fa = n.n(ha),
        ga = R.a.e4b3f520,
        va = R.a.ae4d666a,
        ya = function (e) {
          return e
        },
        ba = R.a.a219e217,
        _a = R.a.d571e4f8,
        Ea = R.a.a551bf7d,
        Sa = R.a.d98e066b,
        ka = R.a.j302dba7,
        Ca = void 0 !== $n ? $n : ($n = n('X8um')),
        Ia = { context: 'DM_PINNED_INBOX' },
        xa = function (e) {
          var t,
            a,
            i,
            o = Object(we.c)(),
            l = e.accessibilityTitle,
            s = e.analytics,
            c = e.cacheKey,
            d = e.conversationIds,
            u = e.createLocalApiErrorHandler,
            p = e.footer,
            m = e.header,
            h = e.onNearEnd,
            f = e.pinnedConversationIds,
            v = e.renderEmptyDMInbox,
            b = e.renderInboxItem,
            E = e.showSearchView,
            S = e.withKeyboardShortcuts,
            k = fa()(),
            C = Object(ln.a)(Ca, { label: rt.a.PINNED }).data,
            I = y.a.useMemo(
              function () {
                var e
                return (
                  (null == C || null === (e = C.labeled_conversation_slice) || void 0 === e ? void 0 : e.items) || []
                )
              },
              [C],
            ),
            x = Object(an.b)(I, [ht.a]).entities,
            T = y.a.useContext(_.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            R = y.a.useState(!1),
            w = K()(R, 2),
            F = w[0],
            A = w[1],
            O = y.a.useState(!1),
            L = K()(O, 2),
            D = L[0],
            P = L[1],
            N =
              ((a = C),
              (i = y.a.useRef()),
              y.a.useEffect(function () {
                i.current = a
              }),
              i.current)
          y.a.useEffect(
            function () {
              var e,
                t = (null == N || null === (e = N.labeled_conversation_slice) || void 0 === e ? void 0 : e.items) || [],
                n =
                  null == t
                    ? void 0
                    : t.filter(function (e) {
                        return -1 === I.indexOf(e.rest_id)
                      })
              n.length &&
                n.forEach(function (e) {
                  var t,
                    n =
                      null === (t = e.labels) || void 0 === t
                        ? void 0
                        : t.filter(function (e) {
                            return e.label_type !== rt.a.PINNED
                          })
                  o(Dt({ conversations: g()({}, e.rest_id, r()(r()({}, e), {}, { labels: n })) }))
                }),
                o(Dt(x, !1))
            },
            [C],
          )
          var j = y.a.useCallback(
              function () {
                A(!0)
                var e = ra()(k, Ca, { label: rt.a.PINNED }).toPromise()
                Promise.all([
                  e,
                  function () {
                    return o(M.fetchInbox())
                  },
                ])
                  .then(function () {
                    return A(!1)
                  })
                  .catch(function (e) {
                    u()(e), A(!1)
                  })
              },
              [u, o, k],
            ),
            B = ma()(void 0 !== Zn ? Zn : (Zn = n('ZH9U'))),
            U = K()(B, 1)[0],
            V = ma()(void 0 !== ea ? ea : (ea = n('rQjK'))),
            W = K()(V, 1)[0],
            q = y.a.useCallback(
              function (e, t) {
                U({
                  variables: { conversation_id: e, label: rt.a.PINNED },
                  onCompleted: function (n) {
                    var a
                    switch (null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename) {
                      case 'DMConversationLabelInfo':
                        var i = n.add_dm_conversation_label_v3,
                          l = i.label_type,
                          c = i.timestamp
                        o(
                          Dt({
                            conversations: g()(
                              {},
                              e,
                              r()(r()({}, t), {}, { labels: [{ label_type: l, timestamp: c }] }),
                            ),
                          }),
                        ),
                          o(Object(H.b)({ ariaOnly: !0, text: Sa }))
                        break
                      case 'DMConversationLabelUnavailable':
                        var d = n.add_dm_conversation_label_v3.failure_reason
                        s.scribe({
                          element: 'thread',
                          action: 'error_shown',
                          data: { error_type: ge.g.MAX_PINS_REACHED },
                        }),
                          'ExceededMaxPinnedConversations' === d && P(!0)
                    }
                  },
                  onError: function (e) {
                    u(da)(e)
                  },
                })
              },
              [o, u, U, s],
            ),
            z = y.a.useCallback(
              function (e, t) {
                W({
                  variables: { conversation_id: e, label_type: rt.a.PINNED },
                  onCompleted: function (n) {
                    var a,
                      i = t
                        ? null == t || null === (a = t.labels) || void 0 === a
                          ? void 0
                          : a.filter(function (e) {
                              return e.label_type !== rt.a.PINNED
                            })
                        : []
                    o(Dt({ conversations: g()({}, e, r()(r()({}, t), {}, { labels: i })) })),
                      o(Object(H.b)({ ariaOnly: !0, text: ka }))
                  },
                  updater: function (t) {
                    var n,
                      a,
                      r =
                        null ===
                          (n = I.find(function (t) {
                            return t.rest_id === e
                          })) || void 0 === n
                          ? void 0
                          : n.id,
                      i = null == C || null === (a = C.labeled_conversation_slice) || void 0 === a ? void 0 : a.__id
                    if (r && i) {
                      var o = t.get(r),
                        l = t.get(i)
                      l && o && (Object(pt.b)(l, r), t.delete(r))
                    }
                  },
                  onError: function (e) {
                    u(ua)(e)
                  },
                })
              },
              [u, I, null == C || null === (t = C.labeled_conversation_slice) || void 0 === t ? void 0 : t.__id, o, W],
            ),
            G =
              null == d
                ? void 0
                : d.filter(function (e) {
                    return -1 === f.indexOf(e)
                  }),
            Q = f.length && G.length,
            Y = y.a.createElement(
              y.a.Fragment,
              null,
              m,
              null != f && f.length
                ? y.a.createElement(
                    y.a.Fragment,
                    null,
                    Ta(ga),
                    f.map(function (e, t) {
                      return b({ conversationIds: f, pinConversation: q, unpinConversation: z })(e)
                    }),
                  )
                : null,
              Q ? Ta(va) : null,
            )
          return null != d && d.length
            ? y.a.createElement(
                y.a.Fragment,
                null,
                D
                  ? y.a.createElement(ue.a, {
                      confirmButtonLabel: ba,
                      headline: _a({ count: T }),
                      onConfirm: function () {
                        return P(!1)
                      },
                      text: Ea,
                      withCancelButton: !1,
                    })
                  : null,
                E
                  ? y.a.createElement(na, {
                      accessibilityTitle: l,
                      analytics: s,
                      conversationIds: d,
                      hideRecentSearches: e.hideRecentSearches,
                      onQueryChange: e.onQueryChange,
                      pinConversation: q,
                      query: e.query,
                      renderInboxItem: e.renderInboxItem,
                      unpinConversation: z,
                    })
                  : y.a.createElement(
                      kn.a,
                      { isRefreshing: F, onRefresh: j },
                      c && null != G && G.length
                        ? y.a.createElement(nn.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: l,
                            anchoring: Sn.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: p,
                            header: Y,
                            identityFunction: ya,
                            items: G,
                            onNearEnd: h,
                            renderer: b({ conversationIds: G, pinConversation: q, unpinConversation: z }),
                            withKeyboardShortcuts: S,
                            withoutHeadroom: !0,
                          })
                        : Y,
                    ),
              )
            : v()
        },
        Ta = function (e) {
          return y.a.createElement(ce.a, null, y.a.createElement(mt.a, { headerText: e, isInboxLabelHeader: !0 }))
        }
      function Ra(e) {
        return y.a.createElement(rn.a, { errorConfig: Ia }, y.a.createElement(xa, e))
      }
      var wa = ut(y.a.memo(Ra)),
        Fa = n('dwig'),
        Aa = n('QB0K'),
        Oa = n('Avzu'),
        Ma = n('FRNI'),
        La = R.a.h845f281,
        Da = R.a.f325afc3
      function Pa() {
        return y.a.createElement(Aa.a, {
          accessibilityLabel: La,
          href: '/messages/compose',
          icon: y.a.createElement(Oa.a, null),
          label: La,
          scribeComponent: 'floating_dm_button',
          shortLabel: Da,
          testID: Ma.a.message,
        })
      }
      var Na = y.a.memo(Pa),
        Ka = n('tI3i'),
        ja = n.n(Ka),
        Ba = n('sNn6'),
        Ha = n('883S'),
        Ua = n('yoO3'),
        Va = n('GSsg'),
        Wa = n('2g+p'),
        qa = n('mw9i'),
        za = n('BcsE'),
        Ga = n('+d3d'),
        Qa = function (e) {
          return e
        },
        Ya = R.a.a66ac766,
        Xa = R.a.fe61929d,
        Ja = R.a.a846382a,
        $a = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i, l, s, c, u, p, m, h
            return (
              o()(this, n),
              (h = t.call(this, e, a)),
              g()(d()(h), 'state', {
                showSearchView: !(
                  null === (i = h.props) ||
                  void 0 === i ||
                  null === (l = i.location) ||
                  void 0 === l ||
                  null === (s = l.state) ||
                  void 0 === s ||
                  !s.searchQuery
                ),
                searchQuery:
                  null !==
                    (c =
                      null === (u = h.props) ||
                      void 0 === u ||
                      null === (p = u.location) ||
                      void 0 === p ||
                      null === (m = p.state) ||
                      void 0 === m
                        ? void 0
                        : m.searchQuery) && void 0 !== c
                    ? c
                    : '',
              }),
              g()(
                d()(h),
                '_enablePinnedInbox',
                h.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  h.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              g()(
                d()(h),
                '_messageSearchEnabled',
                h.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                  h.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              g()(
                d()(h),
                '_modularSearchEnabled',
                h.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              g()(
                d()(h),
                '_isVDLEnabled',
                h.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  h.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              g()(d()(h), '_render', function () {
                var e = h.props.withPinnedInbox
                return h._enablePinnedInbox && e ? h._renderPinnedInbox() : h._renderInbox()
              }),
              g()(d()(h), '_renderFocusedSearch', function () {
                var e = h.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  a = e.conversationIds,
                  r = h.state.searchQuery
                return y.a.createElement(na, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: a,
                  hideRecentSearches: h._hideRecentSearches,
                  onQueryChange: h._handleQueryChange,
                  query: r,
                  renderInboxItem: h._renderInboxItem,
                })
              }),
              g()(d()(h), '_renderInbox', function () {
                var e,
                  t,
                  n = h.props,
                  a = n.accessibilityTitle,
                  r = n.conversationIds,
                  i = n.footer,
                  o = n.isDrawer,
                  l = n.isRefreshing,
                  s = n.renderEmptyDMInbox,
                  c = n.virtualScrollerCacheKey
                return h.state.showSearchView ||
                  (null !== (e = h.props.location) &&
                    void 0 !== e &&
                    null !== (t = e.state) &&
                    void 0 !== t &&
                    t.searchQuery)
                  ? h._renderFocusedSearch()
                  : y.a.createElement(
                      kn.a,
                      { isRefreshing: l, onRefresh: h._handlePullToRefresh },
                      c && r
                        ? y.a.createElement(nn.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: a,
                            anchoring: Sn.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: i,
                            header: h._renderHeader(),
                            identityFunction: Qa,
                            items: r,
                            noItemsRenderer: s,
                            onNearEnd: h._handleNearEnd,
                            renderer: h._renderInboxItem({ conversationIds: r }),
                            withKeyboardShortcuts: !o,
                            withoutHeadroom: !0,
                          })
                        : null,
                    )
              }),
              g()(d()(h), '_handleNearEnd', function () {
                h._handleHistoryRequest()
              }),
              g()(d()(h), '_handleQueryChange', function (e) {
                h.setState({ searchQuery: e })
              }),
              g()(d()(h), '_handleSearchChange', function (e) {
                e.currentTarget.value
                h.state.showSearchView || h.setState({ showSearchView: !0 })
              }),
              g()(d()(h), '_handleSearchClick', function () {
                h.props.analytics.scribe({ component: 'search', action: 'click' }), h.setState({ showSearchView: !0 })
              }),
              g()(d()(h), '_hideRecentSearches', function () {
                h.setState({ showSearchView: !1, searchQuery: '' })
              }),
              g()(d()(h), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  a = void 0 !== n && n,
                  i = e.messageIds,
                  o = e.pinConversation,
                  l = e.unpinConversation
                return function (e, n) {
                  var s = h.context.loggedInUserId,
                    c = h.props.location,
                    d = h.state.searchQuery,
                    u = a ? (i || []).indexOf(e) : -1,
                    p = -1 !== u && null != t && t.length ? t[u] : null,
                    m = p ? e : '',
                    f = p || e,
                    g = {
                      pathname: '/messages/'.concat(f),
                      state: r()(r()({}, null == c ? void 0 : c.state), {}, { entryPoint: null, searchQuery: d }),
                    },
                    v = f && null != t && t.length ? t.indexOf(f) : null,
                    _ = Object(za.a)(v) ? v + 1 : 0
                  ja()(!!s, 'loggedInUserId must be defined'), n && n(!0)
                  var E = function (e) {
                    return y.a.createElement(dt, {
                      conversationId: f,
                      inboxType: h.props.inboxType,
                      isActive: e,
                      isMessageItem: a,
                      key: f,
                      link: g,
                      messageId: m,
                      onClick: h._handleConversationClick,
                      perspective: s,
                      pinConversation: o,
                      position: _,
                      searchQuery: d,
                      unpinConversation: l,
                    })
                  }
                  return h._isVDLEnabled
                    ? y.a.createElement(Ba.a, { exact: !1, path: g.pathname }, E)
                    : y.a.createElement(b.a, { exact: !1, path: g.pathname }, E)
                }
              }),
              g()(d()(h), '_renderPinnedInbox', function () {
                var e = h.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  a = e.footer,
                  r = e.isDrawer,
                  i = e.renderEmptyDMInbox,
                  o = e.virtualScrollerCacheKey,
                  l = h.state,
                  s = l.searchQuery,
                  c = l.showSearchView
                return n.length
                  ? y.a.createElement(wa, {
                      accessibilityTitle: t,
                      cacheKey: o,
                      conversationIds: n,
                      footer: a,
                      header: h._renderHeader(),
                      hideRecentSearches: h._hideRecentSearches,
                      onNearEnd: h._handleNearEnd,
                      onQueryChange: h._handleQueryChange,
                      query: s,
                      renderEmptyDMInbox: i,
                      renderInboxItem: h._renderInboxItem,
                      showSearchView: c,
                      withKeyboardShortcuts: !r,
                    })
                  : i()
              }),
              g()(d()(h), '_handleFetchInitialWrapper', function () {
                h._handleFetchInitial()
              }),
              g()(d()(h), '_handleFetchInitial', function () {
                var e = h.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInboxIfNeeded,
                  a = e.fetchUpdates
                return n()
                  .then(h._updateLastSeenEventId, t())
                  .then(function () {
                    h._updatePolling.start()
                  })
                  .then(function () {
                    return a().catch(t())
                  })
              }),
              g()(d()(h), '_handleConversationClick', function (e, t, n, a) {
                var r = h.props,
                  i = r.analytics,
                  o = r.customCellClick,
                  l = (null == n ? void 0 : n.participants.length) || 0,
                  s = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                i.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: h.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: l,
                    conversation_type: s ? ge.j.GROUP : ge.j.ONE_TO_ONE,
                    position: a,
                  },
                }),
                  o && o(e, t)
              }),
              g()(d()(h), '_handleEmptyDMInboxImpression', function () {
                h.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              g()(d()(h), '_handlePullToRefresh', function () {
                var e = h.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(h._updateLastSeenEventId, t())
              }),
              g()(d()(h), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== Wa.a.currentState) return h._updateLastSeenEventId()
              }),
              g()(d()(h), '_renderHeader', function () {
                var e = h.props,
                  t = e.renderStickyContent,
                  n = e.withDmSearch,
                  a = [Za.searchInput, h._isVDLEnabled ? void 0 : Za.searchInputBorder]
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  n
                    ? y.a.createElement(
                        ce.a,
                        { onClick: h._handleSearchClick, style: a },
                        y.a.createElement(Tn.a, {
                          Icon: gn.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: h._handleSearchChange,
                          placeholder: h._messageSearchEnabled ? Ja : Xa,
                          withClearButton: !0,
                        }),
                      )
                    : null,
                  t ? t() : null,
                )
              }),
              g()(d()(h), '_updateLastSeenEventId', function () {
                var e = h.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (h._fab = y.a.createElement(Na, null)),
              h
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.fetchInboxHistory,
                    r = t.fetchUpdates
                  return (
                    (this._updatePolling = new Va.a(
                      function () {
                        r().then(e._updateLastSeenEventIdIfActive, n(Ha.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Ga.a)(function () {
                      a.apply(void 0, arguments).catch(n())
                    }, 1e3)),
                    this._handleFetchInitial()
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updatePolling.stop()
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.a.createElement(
                    Ua.a,
                    null,
                    y.a.createElement(O, null),
                    y.a.createElement(
                      Fa.a,
                      { component: qa.a, fab: this._fab, style: Za.root },
                      y.a.createElement(bt.a, {
                        accessibilityLabel: Ya,
                        fetchStatus: this.props.fetchStatus,
                        onRequestRetry: this._handleFetchInitialWrapper,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      g()($a, 'contextType', _.a),
        g()($a, 'defaultProps', {
          conversationIds: [],
          inboxType: rt.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Za = Et.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground, flexGrow: 1 },
          searchInput: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, zIndex: 1 },
          searchInputBorder: {
            borderBottomColor: e.colors.borderColor,
            borderBottomStyle: 'solid',
            borderBottomWidth: '1px',
          },
        }
      })
      t.a = Object(In.a)(P($a))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        E = n('nT9l'),
        S = n('3XMw'),
        k = n.n(S),
        C = 'image',
        I = n('TIdA'),
        x = n('a6qo'),
        T = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        R = k.a.f93bb3ee,
        w = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  a = t.useMinimumData,
                  i = e.props,
                  l = i.accessibilityLabel,
                  s = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  c = o()(i, T)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    I.a,
                    r()({}, c, { accessibilityLabel: l, onVariantSelection: n, previewMode: a, testID: C }),
                  ),
                  s ? _.a.createElement(x.a, { align: 'left', altLabel: l }) : null,
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
                  return _.a.createElement(E.a, {
                    acceptLabel: R,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(_.a.Component)
    },
    rFBM: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        g = n.n(f),
        v = n('rHpw'),
        y = n('k/Ka'),
        b = n('MWbm'),
        _ = function (e) {
          return Object(y.a)('div', e)
        },
        E = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_dragEnterCount', 0),
              h()(s()(e), 'state', { active: !1 }),
              h()(s()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(s()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(s()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(s()(e), '_handleDragOver', function (e) {
                e.preventDefault()
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
                    t = e.allowDragDrop,
                    n = e.children,
                    a = e.style,
                    r = this.state.active,
                    i = t ? S.dragBorderValid : S.dragBorderInvalid
                  return g.a.createElement(
                    _,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [S.root, a, r && i],
                    },
                    g.a.createElement(b.a, { style: S.inner }, 'function' == typeof n ? n(r) : n),
                  )
                },
              },
              {
                key: '_updateDragCount',
                value: function (e) {
                  ;(this._dragEnterCount = e),
                    0 === this._dragEnterCount
                      ? this.setState({ active: !1 })
                      : this._dragEnterCount > 0 && this.setState({ active: !0 })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(E, 'defaultProps', { allowDragDrop: !0 })
      var S = v.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = E
    },
    rQjK: function (e, t, n) {
      'use strict'
      var a,
        r,
        i = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'conversation_id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'label_type' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMPinnedInboxDelete_Mutation',
            selections: (r = [
              {
                alias: null,
                args: [
                  { kind: 'Variable', name: 'conversation_id', variableName: 'conversation_id' },
                  { kind: 'Variable', name: 'label_type', variableName: 'label_type' },
                ],
                kind: 'ScalarField',
                name: 'dm_conversation_label_delete',
                storageKey: null,
              },
            ]),
            type: 'Mutation',
            abstractKey: null,
          },
          kind: 'Request',
          operation: { argumentDefinitions: a, kind: 'Operation', name: 'DMPinnedInboxDelete_Mutation', selections: r },
          params: {
            id: '_TQxP2Rb0expwVP9ktGrTQ',
            metadata: {},
            name: 'DMPinnedInboxDelete_Mutation',
            operationKind: 'mutation',
            text: null,
          },
        }
      ;(i.hash = 'f0ba5e0b671c54ae94c7322d3036a375'), (e.exports = i)
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
        o = n.n(i),
        l = n('MWbm'),
        s = n('CKsB'),
        c = n('/yvb'),
        d = n('rHpw'),
        u = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        h = o.a.fcd4d489,
        f = o.a.gbed8594,
        g = o.a.g9074da4,
        v = o.a.ad63377d,
        y = o.a.h09b49f7,
        b = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        E = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        k = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            d = e.onReportClick,
            k = e.requestorScreenName,
            I = e.showBlock,
            x = e.showCancel,
            T = e.showDelete,
            R = r.a.useCallback(
              function () {
                d && d(), t()
              },
              [t, d],
            ),
            w = r.a.useCallback(
              function () {
                i && i(), t()
              },
              [t, i],
            ),
            F = r.a.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            )
          return r.a.createElement(
            l.a,
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            T
              ? r.a.createElement(s.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? g : v,
                  onClick: F,
                  textColor: 'red500',
                })
              : null,
            I
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: k }), onClick: w })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: a ? b : _({ screenName: k }),
              onClick: R,
            }),
            x ? r.a.createElement(c.a, { onPress: t, style: C.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      k.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var C = d.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = k
    },
    uB9N: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('97Jx'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(b),
        E = n('1YZw'),
        S = n('zh9S'),
        k = n('P1r1'),
        C = n('AspN'),
        I = n('rxPX'),
        x = Object(I.a)()
          .propsFromState(function () {
            return { dataSaverMode: k.j }
          })
          .propsFromActions(function () {
            return {
              addMedia: C.b,
              addToast: E.b,
              processMultipleMedia: C.g,
              removeMediaUpload: C.i,
              scribeAction: S.scribeAction,
              preUploadMedia: C.e,
            }
          }),
        T = n('wpu3'),
        R = n('cOB2'),
        w = n('MWbm'),
        F = n('0FVZ'),
        A = n('Oe3h'),
        O = n('rHpw')
      var M = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            a = e.children,
            r = e.onLayout,
            i = e.sideNavPresent,
            l = e.style,
            s = _.a.useContext(R.a)
          return i
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(w.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l }, a),
              )
            : _.a.createElement(
                F.a.BottomComposer,
                null,
                _.a.createElement(A.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return _.a.createElement(
                    w.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l })),
                    a,
                    _.a.createElement(w.a, { style: !1 === s.keyboardVisible && L.offsetBottom }),
                  )
                }),
              )
        },
        L = O.a.create(function () {
          return { offsetBottom: { paddingBottom: O.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        P = n('htQn'),
        N = n('t62R'),
        K = (function (e) {
          h()(n, e)
          var t = g()(n)
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
                  return _.a.createElement(
                    P.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [j.root, n && j.isWide, !n && j.isNarrow],
                    },
                    _.a.createElement(N.b, { weight: 'bold' }, a),
                    _.a.createElement(N.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
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
        B = K,
        H = n('cHvH'),
        U = n('mw9i'),
        V = (function (e) {
          h()(n, e)
          var t = g()(n)
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
                  return _.a.createElement(H.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
                      o = [i && W.isWide, i && n && W.oneButtonOnly, !i && W.isNarrow]
                    return _.a.createElement(
                      U.a,
                      { style: o, withGutter: i },
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
                  return _.a.createElement(B, {
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
        })(_.a.Component),
        W = O.a.create(function (e) {
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
        q = V,
        z = n('krmn'),
        G = n('cIoY'),
        Q = n('w3n3'),
        Y = n('MLl7'),
        X = n('3XMw'),
        J = n.n(X),
        $ = n('J2UM'),
        Z = n('VPdC'),
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
          h()(n, e)
          var t = g()(n)
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
                  return _.a.createElement(ae.a, { progress: t })
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
        })(_.a.Component)
      function oe(e) {
        var t = e.isSending,
          n = e.isUploading,
          a = e.progress
        return t && !n ? _.a.createElement(ie, null) : _.a.createElement(ae.a, { progress: t ? Math.max(a, 0.02) : 0 })
      }
      var le = _.a.memo(oe),
        se = n('Dtul'),
        ce = n('Es6L'),
        de = 'dmComposerAttachments',
        ue = 'dmComposerTextInput',
        pe = 'dmComposerSendButton',
        me = n('GZwR'),
        he = n('aITJ'),
        fe = n('6OUF'),
        ge = n('9Xij'),
        ve = n('/yvb'),
        ye = n('OiMc'),
        be = n('v6aA'),
        _e = n('gpVt'),
        Ee = n('Lsrn'),
        Se = n('k/Ka'),
        ke = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Se.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ee.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            _.a.createElement(
              'g',
              null,
              _.a.createElement('path', {
                d: 'M19 13.5H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0 6H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-12H5c-.828 0-1.5-.672-1.5-1.5S4.172 4.5 5 4.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z',
              }),
            ),
          )
        }
      ke.metadata = { width: 24, height: 24 }
      var Ce = ke,
        Ie = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Se.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ee.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            _.a.createElement(
              'g',
              null,
              _.a.createElement('path', {
                d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0-12H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      Ie.metadata = { width: 24, height: 24 }
      var xe = Ie,
        Te = n('iySH'),
        Re = J.a.ee230734,
        we = J.a.ca0ce0e4,
        Fe = J.a.cdcebd22,
        Ae = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(T.b)({ maxNumberOfPhotos: 1 }),
        De = (function (e) {
          h()(n, e)
          var t = g()(n)
          function n(e, a) {
            var i, l, c
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
                  ? _.a.createElement(q, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              y()(p()(c), '_renderComposeBox', function () {
                return _.a.createElement(w.a, { style: Pe.composeBoxContainer }, c._renderMainContent())
              }),
              y()(p()(c), '_renderMainContent', function () {
                var e = c.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  a = c.state.value,
                  r = n
                return r
                  ? _.a.createElement(
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
                  i = he.b.isKaiOS() ? Fe : a || we,
                  l = c.state,
                  s = l.editorState,
                  d = l.mediaButtonsCollapsible,
                  u = l.value,
                  p = !!r,
                  m = r ? { editorState: s, element: r.element } : void 0,
                  h = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: s, element: r.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return _.a.createElement(
                  fe.a,
                  o()(
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
                    h,
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
                  o = c.state.value,
                  l =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  s = l.height,
                  d = l.width,
                  u = null == t ? void 0 : t.media,
                  p = null == u ? void 0 : u.mediaMetadata,
                  m = null == p ? void 0 : p.altText,
                  h = null == p ? void 0 : p.defaultAltText,
                  f = Object(_e.b)(o)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  u
                    ? _.a.createElement(
                        w.a,
                        { style: Pe.attachmentContainer, testID: de },
                        _.a.createElement(
                          ge.a,
                          { ratio: d / s, style: Pe.aspectContainer },
                          _.a.createElement(
                            w.a,
                            { style: Pe.mediaPreviewContainer },
                            _.a.createElement(ee.a, {
                              accessibilityLabel: m || h,
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
                          _.a.createElement(
                            w.a,
                            { style: Pe.gifAttribution },
                            _.a.createElement(G.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : f && !r
                    ? _.a.createElement(_e.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: Pe.cardPreviewContainer,
                        urls: f,
                      })
                    : null,
                )
              }),
              y()(p()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && he.b.isDesktopOS()
                  ? _.a.createElement(z.a, {
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
                  ? _.a.createElement(
                      ve.a,
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
                  o = _.a.createElement(
                    ve.a,
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
                  ? o
                  : _.a.createElement(
                      ye.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              y()(p()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return _.a.createElement(ve.a, {
                  accessibilityLabel: Ae,
                  icon: e ? _.a.createElement(Ce, null) : _.a.createElement(xe, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Pe.actionButton,
                  type: 'brandText',
                })
              }),
              y()(p()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = Me(e),
                  n = c._renderComposeBox(),
                  a = c._renderPrimaryActionButton(t),
                  r = c._renderSecondaryActionButton()
                return _.a.createElement(
                  w.a,
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
                return _.a.createElement(
                  w.a,
                  { style: Pe.uploadButtons },
                  i
                    ? _.a.createElement(ve.a, {
                        accessibilityLabel: Re,
                        icon: _.a.createElement(Te.a, null),
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
                  o = 'Enter' === a
                return !c.state.isTypeaheadActive && o && c._keyboardOrMouseDetected && !(i || r || n)
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
                  o = t.preUploadMedia,
                  l = t.processMultipleMedia,
                  s = t.removeMedia,
                  d = t.removeMediaUpload
                n(e, { location: te.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  c._validateMedia(e)
                    ? (i && i(t),
                      l(e, { onFailure: s }).then(function (e) {
                        r ||
                          o(
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
                  o = a ? a.convertEmojiToEntities(e) : null
                c.setState({ editorState: o, value: i }), r !== i && (null == n || n())
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
                return !Me(c.props.attachment) && Le(e)
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
                  i = Me(t),
                  o = c._hasMessageText() || n,
                  l = !(!t || !t.media) && (t.media.needsProcessing || r)
                return a || (!o && !i) || l || r
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
                    (i = null == u || null === (l = u.initEditorState) || void 0 === l ? void 0 : l.call(u, d)) &&
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
                  Object($.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = se.a.acquire())
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
                    o = e.style,
                    l = i || we,
                    s = Object(ce.a)(),
                    c = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    M,
                    {
                      accessibilityLabel: l,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [Pe.root, c && Pe.dtabOffset, o],
                    },
                    _.a.createElement(le, { isSending: n, isUploading: a, progress: n ? Math.max(r, 0.02) : 0 }),
                    this._renderComposer(),
                    this._renderQuickReplyPicker(),
                  )
                },
              },
              {
                key: '_renderMediaPicker',
                value: function () {
                  return _.a.createElement(Z.a, {
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
                  return _.a.createElement(Q.a, {
                    dmConversationId: t,
                    enabled: !0,
                    gifSearchKeySource: Y.a.DMComposition,
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
        })(_.a.Component)
      y()(De, 'contextType', be.a),
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
      t.a = x.forwardRef(De)
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        l = n.n(o),
        s = n('3rWK'),
        c = n('Irs7'),
        d = l.a.a4993fa1,
        u = r.a.createElement(s.a, null),
        p = l.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          l = e.history,
          s = e.onPress,
          h = e.style,
          f = e.testID,
          g = Object(c.b)(),
          v = r.a.useCallback(
            function () {
              s && s(),
                g.scribe({ element: 'found_media_button', action: 'click' }),
                l.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, g, o, l, s],
          )
        return r.a.createElement(i.a, {
          accessibilityLabel: d,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: u,
          onPress: v,
          size: 'medium',
          style: h,
          testID: f,
          type: 'brandText',
        })
      }
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'c', function () {
          return v
        }),
        n.d(t, 'd', function () {
          return y
        })
      var a = n('RhWx'),
        r = n.n(a),
        i = n('KEM+'),
        o = n.n(i),
        l =
          (n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('ho0z'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('2G9S'),
          n('kFen'),
          n('qd3W'),
          n('z84I'),
          n('5BYb'),
          n('DfhM'),
          n('KqXw'),
          n('Ysgh'),
          n('hBpG'),
          n('oEoC')),
        s = n('1auM'),
        c = n('kIAd'),
        d = n('VAyw'),
        u = n('/Ikv'),
        p = n('s1N3'),
        m = n('lnti'),
        h = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            l = a.retweeted_status,
            s = l || a,
            c = s.entities,
            u = s.unmentioned_user_ids,
            h = s.user,
            g = l ? l.user : {},
            v = l ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = f(l || a) || {},
            E = ((t = {}), o()(t, g.id_str, g), o()(t, v.id_str, v), o()(t, h.id_str, h), o()(t, _.id_str, _), t)
          y.forEach(function (e) {
            E[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              E[a] = { id_str: a, name: t, screen_name: n }
            })
          var S = function (e) {
              var t = null == u ? void 0 : u.includes(e.id_str),
                n = e.id_str === h.id_str
              return !t || n ? [e.id_str] : []
            },
            k = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(S(g)),
                  r()(S(v)),
                  [h.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return S(e)
                    }),
                  ),
                  r()(
                    b.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            C = i && h.id_str === i ? [i].concat(r()(k)) : k
          return (
            n &&
              (C = C.filter(function (e) {
                return e !== h.id_str
              })),
            C.map(function (e) {
              return E[e]
            })
          )
        },
        f = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var a = u.a.getBindingValue(t.binding_values, 'site')
            a && t.users && (n = t.users[a.id_str])
          }
          return n
        },
        g = function (e) {
          var t = e.maxNumberOfPhotos
          return function (e) {
            if (0 === e.length) return !0
            var n = e.some(function (e) {
                return !!e.externalMediaDetails
              }),
              a =
                !n &&
                e.some(function (e) {
                  return e.mediaFile && e.mediaFile.isGif
                }),
              r = e.some(function (e) {
                return e.mediaFile && !(e.mediaFile instanceof s.a) && e.mediaFile.isVideo
              })
            if (a || n || r) return 1 === e.length
            var i = e.length <= t,
              o = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && o
          }
        },
        v = g({ maxNumberOfPhotos: 4 }),
        y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(c.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(l.e)(e, 'compose')
              return t && 'users' === t.result_type
            })
          )
        }
    },
    y59G: function (e, t, n) {
      'use strict'
      var a,
        r,
        i,
        o,
        l,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        f,
        g,
        v,
        y,
        b,
        _,
        E,
        S,
        k,
        C,
        I,
        x,
        T,
        R,
        w,
        F,
        A,
        O,
        M,
        L,
        D,
        P,
        N,
        K,
        j,
        B,
        H,
        U,
        V,
        W,
        q,
        z,
        G,
        Q,
        Y,
        X,
        J,
        $,
        Z,
        ee,
        te,
        ne,
        ae,
        re,
        ie,
        oe,
        le,
        se,
        ce,
        de,
        ue,
        pe,
        me,
        he,
        fe,
        ge,
        ve,
        ye,
        be,
        _e,
        Ee,
        Se,
        ke,
        Ce,
        Ie,
        xe,
        Te,
        Re,
        we,
        Fe,
        Ae,
        Oe,
        Me,
        Le,
        De,
        Pe,
        Ne,
        Ke,
        je,
        Be,
        He,
        Ue,
        Ve,
        We,
        qe,
        ze,
        Ge,
        Qe,
        Ye,
        Xe,
        Je,
        $e,
        Ze,
        et,
        tt,
        nt,
        at,
        rt,
        it,
        ot,
        lt,
        st,
        ct,
        dt,
        ut,
        pt,
        mt,
        ht,
        ft,
        gt,
        vt,
        yt,
        bt,
        _t,
        Et,
        St,
        kt,
        Ct,
        It = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'cursor' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'query' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'withAttachments' }),
              (o = { defaultValue: !1, kind: 'LocalArgument', name: 'withDmMuting' }),
              (l = { defaultValue: null, kind: 'LocalArgument', name: 'withSafetyModeUserFields' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'withSuperFollowsUserFields' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: 'dm_message_slice_result',
                args: [
                  (c = { kind: 'Variable', name: 'query', variableName: 'query' }),
                  (d = { kind: 'Literal', name: 's', value: 19 }),
                ],
                concreteType: null,
                kind: 'LinkedField',
                name: '__DMMessageSearchTabQuery_dm_message_slice_result_slice',
                plural: !1,
                selections: [
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'items',
                        plural: !0,
                        selections: [
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  (u = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'rest_id',
                                    storageKey: null,
                                  }),
                                  (p = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (m = {
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
                                      (f = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (g = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (v = {
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
                                          p,
                                          u,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              (y = {
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
                                                  y,
                                                  (b = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (_ = {
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
                                                              p,
                                                              u,
                                                              {
                                                                kind: 'RequiredField',
                                                                field: (S = {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'ApiUser',
                                                                  kind: 'LinkedField',
                                                                  name: 'legacy',
                                                                  plural: !1,
                                                                  selections: [
                                                                    _,
                                                                    (E = {
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
                                                                path: 'dm_message_slice_result.items.dm_event.legacy.conversation.legacy.metadata.created_by_user_results.result.legacy',
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
                                                              p,
                                                              u,
                                                              {
                                                                kind: 'RequiredField',
                                                                field: S,
                                                                action: 'THROW',
                                                                path: 'dm_message_slice_result.items.dm_event.legacy.conversation.legacy.metadata.admin_user_results.result.legacy',
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
                                                      p,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (x = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              (k = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              }),
                                                              (C = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_width',
                                                                storageKey: null,
                                                              }),
                                                              (I = {
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
                                                              p,
                                                              u,
                                                              {
                                                                kind: 'RequiredField',
                                                                field: (w = {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'ApiUser',
                                                                  kind: 'LinkedField',
                                                                  name: 'legacy',
                                                                  plural: !1,
                                                                  selections: [
                                                                    (T = {
                                                                      alias: null,
                                                                      args: null,
                                                                      kind: 'ScalarField',
                                                                      name: 'id_str',
                                                                      storageKey: null,
                                                                    }),
                                                                    _,
                                                                    E,
                                                                    (R = {
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
                                                                path: 'dm_message_slice_result.items.dm_event.legacy.conversation.legacy.participants_metadata.user_results.result.legacy',
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
                                                  (F = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'last_read_event_id',
                                                    storageKey: null,
                                                  }),
                                                  (A = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (O = {
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
                                                  F,
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
                                          (L = {
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
                                          (D = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (P = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (N = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (K = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          _,
                                          (j = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (B = {
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
                                                      p,
                                                      u,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: S,
                                                        action: 'THROW',
                                                        path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.users_results.result.legacy',
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
                                                      p,
                                                      u,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: S,
                                                        action: 'THROW',
                                                        path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.participants_snapshot_results.result.legacy',
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
                                                      p,
                                                      u,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: S,
                                                        action: 'THROW',
                                                        path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.initiating_user_results.result.legacy',
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
                                              (H = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              p,
                                              (U = {
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
                                                      (ee = {
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
                                                              p,
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
                                                                    selections: (Y = [
                                                                      (W = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'alt_text',
                                                                        storageKey: null,
                                                                      }),
                                                                      I,
                                                                      C,
                                                                      k,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiMediaRect',
                                                                        kind: 'LinkedField',
                                                                        name: 'salient_rect',
                                                                        plural: !1,
                                                                        selections: [
                                                                          (q = {
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
                                                                          (z = {
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
                                                                              (G = {
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
                                                                      (X = {
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
                                                                      (J = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiImage',
                                                                        kind: 'LinkedField',
                                                                        name: 'preview_image',
                                                                        plural: !1,
                                                                        selections: Y,
                                                                        storageKey: null,
                                                                      }),
                                                                      (Z = {
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
                                                                    selections: [W, X, J, Z],
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
                                                              u,
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'LegacyCard',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  (ae = {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'LegacyCardBinding',
                                                                    kind: 'LinkedField',
                                                                    name: 'binding_values',
                                                                    plural: !0,
                                                                    selections: [
                                                                      (te = {
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
                                                                              q,
                                                                              z,
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
                                                                                  (ne = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: 'ApiMediaEntityColor',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'rgb',
                                                                                    plural: !1,
                                                                                    selections: Q,
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  G,
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
                                                                              T,
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
                                                                  (re = {
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
                                                                              _,
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
                                                                              _,
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
                                                                  _,
                                                                  $,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'User',
                                                                    kind: 'LinkedField',
                                                                    name: 'user_refs',
                                                                    plural: !0,
                                                                    selections: [
                                                                      p,
                                                                      u,
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
                                                                                  (ie = {
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
                                                                              (le = {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'BadgeInfo',
                                                                                kind: 'LinkedField',
                                                                                name: 'badge',
                                                                                plural: !1,
                                                                                selections: [$],
                                                                                storageKey: null,
                                                                              }),
                                                                              (se = {
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
                                                                                  (ce = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'alignment',
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  (de = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'rtl',
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  U,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType:
                                                                                      'TimelineRichTextEntity',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'entities',
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                      (ue = {
                                                                                        alias: 'fromIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'from_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (pe = {
                                                                                        alias: 'toIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'to_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (me = {
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
                                                                                          (ge = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: (fe = [U]),
                                                                                            type: 'TimelineRichTextCashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (ve = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [p, $],
                                                                                            type: 'TimelineRichTextList',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (ye = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: fe,
                                                                                            type: 'TimelineRichTextHashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (be = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              $,
                                                                                              ie,
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
                                                                                                      te,
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
                                                                                                            field: (_e =
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
                                                                                                                  [E],
                                                                                                                storageKey:
                                                                                                                  null,
                                                                                                              }),
                                                                                                            action:
                                                                                                              'THROW',
                                                                                                            path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.affiliates_highlighted_label.label.longDescription.entities.ref.user_results.result.legacy',
                                                                                                          },
                                                                                                          u,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      (Ee = {
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
                                                                                              E,
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
                                                                                                            field: _e,
                                                                                                            action:
                                                                                                              'THROW',
                                                                                                            path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.affiliates_highlighted_label.label.longDescription.entities.ref.mention_results.result.legacy',
                                                                                                          },
                                                                                                          u,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      Ee,
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
                                                                              (Se = {
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
                                                                      (ke = {
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
                                                                      (Ce = {
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
                                                                              field: (Ie = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'blocked_by',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.blocked_by',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (xe = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'blocking',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.blocking',
                                                                            },
                                                                            (Te = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'can_dm',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Re = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'can_media_tag',
                                                                              storageKey: null,
                                                                            }),
                                                                            (we = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'created_at',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Fe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'default_profile',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ae = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'default_profile_image',
                                                                              storageKey: null,
                                                                            }),
                                                                            se,
                                                                            (Le = {
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
                                                                                  selections: (Oe = [
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
                                                                                  selections: Oe,
                                                                                  storageKey: null,
                                                                                },
                                                                              ]),
                                                                              storageKey: null,
                                                                            }),
                                                                            (De = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'fast_followers_count',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Pe = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'favourites_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.favourites_count',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ne = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'follow_request_sent',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.follow_request_sent',
                                                                            },
                                                                            (Ke = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'follow_request_received',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (je = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'followed_by',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.followed_by',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Be = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'followers_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.followers_count',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (He = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'following',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.following',
                                                                            },
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ue = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'friends_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.friends_count',
                                                                            },
                                                                            (Ve = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'has_custom_timelines',
                                                                              storageKey: null,
                                                                            }),
                                                                            (We = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'is_translator',
                                                                              storageKey: null,
                                                                            }),
                                                                            (qe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'listed_count',
                                                                              storageKey: null,
                                                                            }),
                                                                            (ze = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'location',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (Ge = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'media_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.media_count',
                                                                            },
                                                                            (Qe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'muting',
                                                                              storageKey: null,
                                                                            }),
                                                                            _,
                                                                            (Ye = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'needs_phone_verification',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Xe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'normal_followers_count',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Je = {
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
                                                                            (et = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'ApiMediaExtensions',
                                                                              kind: 'LinkedField',
                                                                              name: 'profile_banner_extensions',
                                                                              plural: !1,
                                                                              selections: (Ze = [
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
                                                                                              selections: [G, ne],
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
                                                                            (tt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'profile_banner_url',
                                                                              storageKey: null,
                                                                            }),
                                                                            (nt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'ApiMediaExtensions',
                                                                              kind: 'LinkedField',
                                                                              name: 'profile_image_extensions',
                                                                              plural: !1,
                                                                              selections: Ze,
                                                                              storageKey: null,
                                                                            }),
                                                                            R,
                                                                            (at = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'profile_interstitial_type',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (rt = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'protected',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.protected',
                                                                            },
                                                                            E,
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (it = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'statuses_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.statuses_count',
                                                                            },
                                                                            (ot = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'time_zone',
                                                                              storageKey: null,
                                                                            }),
                                                                            (lt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'translator_type',
                                                                              storageKey: null,
                                                                            }),
                                                                            $,
                                                                            (st = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'utc_offset',
                                                                              storageKey: null,
                                                                            }),
                                                                            {
                                                                              kind: 'RequiredField',
                                                                              field: (ct = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'verified',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.verified',
                                                                            },
                                                                            (dt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'want_retweets',
                                                                              storageKey: null,
                                                                            }),
                                                                            (ut = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'withheld_description',
                                                                              storageKey: null,
                                                                            }),
                                                                            (pt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              concreteType: 'UserEntities',
                                                                              kind: 'LinkedField',
                                                                              name: 'withheld_entities',
                                                                              plural: !1,
                                                                              selections: Me,
                                                                              storageKey: null,
                                                                            }),
                                                                            (mt = {
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
                                                                        path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy',
                                                                      },
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [
                                                                          u,
                                                                          (ft = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'professional_type',
                                                                            storageKey: null,
                                                                          }),
                                                                          (gt = {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'BusinessCategory',
                                                                            kind: 'LinkedField',
                                                                            name: 'category',
                                                                            plural: !0,
                                                                            selections: [
                                                                              p,
                                                                              _,
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
                                                                      (vt = {
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
                                                                      (yt = {
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
                                                          p,
                                                          u,
                                                          {
                                                            kind: 'RequiredField',
                                                            field: S,
                                                            action: 'THROW',
                                                            path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.recipient_results.result.legacy',
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
                                                          p,
                                                          u,
                                                          {
                                                            kind: 'RequiredField',
                                                            field: S,
                                                            action: 'THROW',
                                                            path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.sender_results.result.legacy',
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
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (bt = {
                        alias: null,
                        args: null,
                        concreteType: 'SliceInfo',
                        kind: 'LinkedField',
                        name: 'slice_info',
                        plural: !1,
                        selections: [
                          { alias: null, args: null, kind: 'ScalarField', name: 'next_cursor', storageKey: null },
                          { alias: null, args: null, kind: 'ScalarField', name: 'previous_cursor', storageKey: null },
                        ],
                        storageKey: null,
                      }),
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
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
            argumentDefinitions: [a, r, i, s, l, o],
            kind: 'Operation',
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: null,
                args: (_t = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, c, d]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  V,
                  {
                    kind: 'InlineFragment',
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: 'LinkedField',
                        name: 'items',
                        plural: !0,
                        selections: [
                          V,
                          {
                            kind: 'InlineFragment',
                            selections: [
                              {
                                alias: null,
                                args: null,
                                concreteType: 'DMEvent',
                                kind: 'LinkedField',
                                name: 'dm_event',
                                plural: !1,
                                selections: [
                                  u,
                                  p,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      m,
                                      h,
                                      f,
                                      g,
                                      v,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          p,
                                          u,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              y,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  y,
                                                  b,
                                                  _,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (kt = [
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
                                                              p,
                                                              u,
                                                              S,
                                                              (Et = {
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
                                                      (St = {
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
                                                    selections: kt,
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
                                                      p,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [V, x],
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
                                                            selections: [p, u, w, Et],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      St,
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  F,
                                                  A,
                                                  O,
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
                                          L,
                                          D,
                                          P,
                                          N,
                                          K,
                                          _,
                                          j,
                                          B,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: kt,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: kt,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: kt,
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
                                              H,
                                              p,
                                              U,
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
                                                      ee,
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
                                                              u,
                                                              {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'LegacyCard',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  ae,
                                                                  re,
                                                                  _,
                                                                  $,
                                                                  {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'User',
                                                                    kind: 'LinkedField',
                                                                    name: 'user_refs',
                                                                    plural: !0,
                                                                    selections: [
                                                                      p,
                                                                      u,
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
                                                                              le,
                                                                              se,
                                                                              {
                                                                                alias: 'longDescription',
                                                                                args: null,
                                                                                concreteType: 'TimelineRichText',
                                                                                kind: 'LinkedField',
                                                                                name: 'long_description',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  ce,
                                                                                  de,
                                                                                  U,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType:
                                                                                      'TimelineRichTextEntity',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'entities',
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                      ue,
                                                                                      pe,
                                                                                      me,
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
                                                                                          ge,
                                                                                          ve,
                                                                                          ye,
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
                                                                                                selections: (Ct = [
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
                                                                                                          _e,
                                                                                                          Et,
                                                                                                          u,
                                                                                                          p,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      Ee,
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
                                                                                              E,
                                                                                              {
                                                                                                alias:
                                                                                                  'mention_results',
                                                                                                args: null,
                                                                                                concreteType:
                                                                                                  'UserResults',
                                                                                                kind: 'LinkedField',
                                                                                                name: 'user_results',
                                                                                                plural: !1,
                                                                                                selections: Ct,
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
                                                                              Se,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      ke,
                                                                      Ce,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiUser',
                                                                        kind: 'LinkedField',
                                                                        name: 'legacy',
                                                                        plural: !1,
                                                                        selections: [
                                                                          Ie,
                                                                          xe,
                                                                          Te,
                                                                          Re,
                                                                          we,
                                                                          Fe,
                                                                          Ae,
                                                                          se,
                                                                          Le,
                                                                          De,
                                                                          Pe,
                                                                          Ne,
                                                                          Ke,
                                                                          je,
                                                                          Be,
                                                                          He,
                                                                          Ue,
                                                                          Ve,
                                                                          We,
                                                                          qe,
                                                                          ze,
                                                                          Ge,
                                                                          Qe,
                                                                          _,
                                                                          Ye,
                                                                          Xe,
                                                                          Je,
                                                                          $e,
                                                                          et,
                                                                          tt,
                                                                          nt,
                                                                          R,
                                                                          at,
                                                                          rt,
                                                                          E,
                                                                          it,
                                                                          ot,
                                                                          lt,
                                                                          $,
                                                                          st,
                                                                          ct,
                                                                          dt,
                                                                          ut,
                                                                          pt,
                                                                          mt,
                                                                          ht,
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      Et,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [u, ft, gt, p],
                                                                        storageKey: null,
                                                                      },
                                                                      vt,
                                                                      yt,
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
                                                              p,
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
                                                selections: kt,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: kt,
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
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      bt,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: _t,
                filters: ['query', 's'],
                handle: 'slice',
                key: 'DMMessageSearchTabQuery_dm_message_slice_result',
                kind: 'LinkedHandle',
                name: 'dm_message_slice_result',
              },
            ],
          },
          params: {
            id: 'dwe8pudI0w7gOinDfFC0fQ',
            metadata: { sliceInfoPath: ['dm_message_slice_result', 'slice_info'] },
            name: 'DMMessageSearchTabQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(It.hash = '43f462e52881e76aa030f8d291ff5d5a'), (e.exports = It)
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return f
        })
      n('z84I'), n('ho0z')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('aWyx'),
        l = n('3XMw'),
        s = n.n(l),
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
        h = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? r.a.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var a = e.user_id,
                    o = n[a]
                  return o
                    ? r.a.createElement('span', { key: t }, t > 0 ? ', ' : null, r.a.createElement(i.b, null, o.name))
                    : null
                }),
              )
            : null
        },
        f = function (e, t, n, a) {
          var l,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (l = e.by_user_id && a[e.by_user_id] && a[e.by_user_id].name)
                ? p
                  ? c
                  : (function (e) {
                      return r.a.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        r.a.createElement(i.b, null, e),
                      )
                    })(l)
                : d
            case o.b.CONVERSATION_NAME_UPDATE:
              var m = r.a.createElement(i.b, null, e.conversation_name)
              return (l = e.by_user_id && a[e.by_user_id] && a[e.by_user_id].name)
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
                    })(l, m)
                : (function (e) {
                    return r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(m)
            case o.b.JOIN_CONVERSATION:
              return (l = e.sender_id && a[e.sender_id] && a[e.sender_id].name)
                ? (function (e) {
                    return r.a.createElement(
                      s.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      r.a.createElement(i.b, null, e),
                    )
                  })(l)
                : u
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.a.createElement(h, { entry: e, users: a }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.a.createElement(i.b, null, e), t)
                  : r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (l = e.sender_id && a[e.sender_id] && a[e.sender_id].name),
                r.a.createElement(h, { entry: e, users: a }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
