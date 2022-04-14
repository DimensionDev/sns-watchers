;(window.webpackJsonp = window.webpackJsonp || []).push([
  [171],
  {
    '+Bsv': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('M2x3'),
        s = 'settingsAppBar',
        c = n('/yvb'),
        d = n('rHpw'),
        u = l.a.bb081ea1,
        p = { viewType: 'settings_button' },
        m = r.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.a.createElement(c.a, {
            accessibilityLabel: u,
            behavioralEventContext: p,
            hoverLabel: { label: u },
            icon: r.a.createElement(o.a, null),
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
        return Ui
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
        h = n.n(m),
        g = (n('2G9S'), n('ejT/')),
        v = n('ERkP'),
        f = n.n(v),
        y = (n('lTEL'), n('7x/C'), n('kYxP'), n('M+/F'), n('KOtZ'), n('gbD7')),
        b = n('X/yg'),
        _ = (n('Blm6'), n('b9JY')),
        E = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(_.b)(e) && Object(_.b)(t)) {
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
        k = n('MMRb'),
        C = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        I = n('XnpN'),
        x = n('LhSm'),
        R = n('I4+6'),
        T = n('rHpw'),
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
        D = T.a.create(function (e) {
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
          var i = L(t, r || ''),
            l = i.userDescription,
            o = i.userEntities,
            s = i.userFollowerCount,
            c = i.userFriendsCount,
            d = i.userIdStr,
            u = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            h = i.userScreenName,
            g = i.userWithheldDescription,
            v = i.userWithheldEntities,
            y = !!(m && h && ((s && c) || p)),
            b = R.a.generate({
              color: T.a.theme.colors.text,
              backgroundColor: T.a.theme.colors.transparent,
              customFocusBackgroundColor: T.a.theme.colors.gray0,
              customHoverBackgroundColor: T.a.theme.colors.gray0,
              customPressedBackgroundColor: T.a.theme.colors.activeFaintGray,
            })
          return f.a.createElement(w.a.Consumer, null, function (e) {
            return f.a.createElement(
              F.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [D.root, a && y && D.borderBottom],
              },
              f.a.createElement(A.a, {
                isVerified: u,
                name: m,
                screenName: h,
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
                    withheldDescription: g,
                    withheldEntities: v,
                  })
                : null,
              s && c
                ? f.a.createElement(M.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: h || '',
                    style: D.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? f.a.createElement(x.a, { joinDate: p }) : null,
            )
          })
        },
        N = n('V/6K'),
        K = n('cFyg'),
        B = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        j = n('aA19'),
        H = n('aWyx'),
        U = n('mN6z'),
        V = n('MWbm'),
        W = n('t62R'),
        q = n('oSwX'),
        z = n('MAI/'),
        G = n('zQEV'),
        Q = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return f.a.createElement(W.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        Y = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.entry,
                  r = t.entryType,
                  i = t.perspective,
                  l = t.users,
                  o = Object(G.a)(a, r, i, l)
                switch (r) {
                  case H.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === a.conversation_avatar_image_https
                    return f.a.createElement(
                      f.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? f.a.createElement(
                            V.a,
                            { style: X.conversationAvatarContainer },
                            f.a.createElement(j.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      f.a.createElement(Q, null, o),
                    )
                  case H.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(o),
                      d = e._getParticipantsFromEntry(),
                      u = f.a.createElement(
                        W.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return f.a.createElement(f.a.Fragment, null, c, p)
                  default:
                    return f.a.createElement(Q, null, o)
                }
              }),
              h()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  l = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return f.a.createElement(
                  F.a,
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
                  f.a.createElement(Q, { link: l, style: X.userAddedYouText }, t),
                )
              }),
              h()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return f.a.createElement(
                  F.a,
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
                  return !Object(U.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return f.a.createElement(V.a, { style: X.root }, this._renderContents())
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
        X = T.a.create(function (e) {
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
        J = Object(B.a)(Y),
        $ = n('ddV6'),
        Z = n.n($),
        ee = n('yiKp'),
        te = n.n(ee),
        ne = n('oQhu')
      var ae = Object(ne.a)(function (e) {
          var t = T.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + T.a.theme.spacesPx.space12,
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
              ((n = ae(T.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ue[T.a.theme.scale]),
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
                    sent: { transform: [{ translateX: (re.a.getConstants().isRTL ? 1 : -1) * pe[T.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (re.a.getConstants().isRTL ? -1 : 1) * (pe[T.a.theme.scale] + d) - s }],
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
        he = n('+Kfv'),
        ge = n('hqKg'),
        ve = n('oEGd'),
        fe = n('zh9S'),
        ye = n('Yatk'),
        be = n('G6rE'),
        _e = n('P1r1'),
        Ee = { scribeAction: fe.scribeAction },
        Se = Object(ge.createSelector)(
          function (e, t) {
            return be.e.select(e, t.senderId)
          },
          _e.k,
          _e.q,
          function (e, t, n) {
            return { user: Object(ye.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        ke = Object(ve.f)(Se, Ee),
        Ce = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Ie = n('rxPX'),
        xe = n('0KEI'),
        Re = Object(Ie.a)()
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
        Te = n('k49u'),
        we = n('LVU8'),
        Fe = n('3XMw'),
        Ae = n.n(Fe),
        Oe = Ae.a.f58dff33,
        Me = Ae.a.ad5a8e8e,
        Le =
          ((se = {}),
          h()(se, Te.a.MissingParameter, { toast: Object(we.a)(Oe) }),
          h()(se, Te.a.DirectMessageDestroyPermissionsError, { toast: { text: Me } }),
          h()(se, 'showToast', !0),
          se),
        De = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Pe = n('uKEd'),
        Ne = [],
        Ke = Object(ge.createSelector)(
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
        Be = {
          createReaction: Pe.d,
          createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: De.d,
          removeReaction: Pe.k,
        },
        je = Object(ve.f)(Ke, Be),
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
            l = e.focusable,
            o = e.onPress,
            s = e.style,
            c = f.a.useContext(C.a).featureSwitches,
            d = Object(Ve.b)(r, c),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = R.a.generate({ backgroundColor: T.a.theme.colors.gray50, color: T.a.theme.colors.gray700 })
          return f.a.createElement(
            F.a,
            {
              accessibilityLabel: u,
              focusable: l,
              interactiveStyles: i ? p : null,
              onPress: o,
              style: [ze.container].concat(Ue()(s || [])),
            },
            f.a.createElement(W.b, { size: a, style: ze.unsetLineHeight }, d),
            n
              ? f.a.createElement(We.a, { color: 'gray700', containerStyle: ze.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        ze = T.a.create(function (e) {
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
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_handleReactionScribing', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.entry,
                  l = a.isGroupDM,
                  o = a.participantsCount,
                  s = n ? 'delete_reaction' : 'create_reaction',
                  c = Object(b.c)(i)
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
              h()(s()(e), '_reactionClickHandler', function (t, n) {
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
                    n = Object(Ve.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return f.a.createElement(qe, {
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
                  return f.a.createElement(V.a, { style: Ze.reactions }, n)
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(Je, 'contextType', C.a)
      var $e = Object(Qe.a)(je(Je)),
        Ze = T.a.create(function (e) {
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
              h()(s()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.isGroupDM,
                  i = n.participantsCount,
                  l = n.perspective
                return f.a.createElement($e, {
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
      h()(tt, 'contextType', N.a)
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
        gt = function (e, t, n) {
          var a = 1.25 * T.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        vt = n('hiGS'),
        ft = n('zIWA'),
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
      _t.metadata = { width: 24, height: 24 }
      var Et = _t,
        St = n('DlVf'),
        kt = n('ACHU'),
        Ct = n('UgB4'),
        It = n('fz3c'),
        xt = Ae.a.ba60339a,
        Rt = Ae.a.j4bfee22,
        Tt = Ae.a.d96cf7cd,
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
                  l = t.isSent,
                  o = It.a.DMMessage,
                  s = n.contextualScribeNamespace,
                  c = [{ text: xt, Icon: vt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!l)
                  if (Object(It.g)(r, o)) {
                    var d,
                      u = Object(It.d)({
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
                  st.a.isAvailable() && c.push({ text: Mt, Icon: Et, onClick: i._handleCopyMessageText }),
                  f.a.createElement(at.a, {
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
                  var l = a.message_data.attachment.tweet
                  r.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: te()(te()({}, l), {}, { id_str: l.status }) },
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
                  l = e.inboxType,
                  o = e.isGroupDM,
                  s = e.participantsCount,
                  c = Object(b.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: o ? Ge.j.GROUP : Ge.j.ONE_TO_ONE,
                    conversation_participant_count: s,
                    message_type: c,
                    inbox_type: Object(b.i)(l),
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
              (i._isNarrow = ct.a.get('screen').width < T.a.theme.breakpoints.xSmall),
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
                    V.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        jt.messageActions,
                        r ? jt.messageActionsLeft : jt.messageActionsRight,
                        s ? jt.visible : jt.invisible,
                        o && jt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? jt.messageActionsMediaNarrow : jt.messageActionsNarrow),
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
                        confirmButtonLabel: Tt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Rt,
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
                  return f.a.createElement(lt.a, {
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
                    l = this.state.actionsAreActive,
                    o = f.a.createElement(St.a, { style: i ? jt.vdlActionIcon : jt.actionIcon })
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
                      accessibilityLabel: At,
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
                    t = f.a.createElement(kt.a, { style: e ? jt.vdlActionIcon : jt.actionIcon })
                  return f.a.createElement(lt.a, {
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
                    l = this.state.actionsAreActive,
                    o = ((e = this.props.entry), !pt(e) && mt(e) && !ot.a.isEnabled)
                  return !i && (o || (n && !ot.a.isEnabled) || a || r || l)
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(Kt, 'contextType', N.a)
      var Bt = Object(nt.a)(Re(Kt)),
        jt = T.a.create(function (e) {
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
        Ht = f.a.createElement(Ct.a, { style: jt.vdlActionIcon }),
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
        Zt = Object(ve.e)(function () {
          return Object(ge.createSelector)(Jt, Xt, Qt.r, Gt.d, function (e, t, n, a) {
            var r,
              i = Object(Ve.a)(a, { includeInactive: !0 }),
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
        ln = {
          removeReaction: Pe.k,
          fetchUpdatesIfNeeded: De.d,
          createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        on = Object(ve.e)(function () {
          return Object(ge.createSelector)(nn, an, Qt.r, rn, Gt.d, function (e, t, n, a, r) {
            var i = Object(Ve.a)(r, { includeInactive: !0 }),
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
            return o > -1 && l.push.apply(l, Ue()(l.splice(0, o))), { loggedInUserId: n, usersWithReactions: l }
          })
        }, ln),
        sn = n('TIdA'),
        cn = n('htQn'),
        dn = Ae.a.gf5e9ea6,
        un = Ae.a.a2d48778,
        pn = sn.a.createLayoutCache()
      var mn = T.a.create(function (e) {
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
            h = f.a.createElement(A.a, {
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
            f.a.createElement(V.a, { style: mn.reactionColumn }, m),
            f.a.createElement(V.a, { style: mn.column }, p),
            f.a.createElement(V.a, { style: mn.bodyColumn }, f.a.createElement(V.a, { style: mn.body }, h)),
            a
              ? f.a.createElement(
                  V.a,
                  { style: mn.column },
                  f.a.createElement(
                    lt.a,
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
        gn = n('xKuM'),
        vn = n('efqG'),
        fn = Ae.a.b772cd65,
        yn = Ae.a.c0098d49,
        bn = Ae.a.j85999eb,
        _n = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderContent', function (t, n) {
                return f.a.createElement(
                  V.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? f.a.createElement(gn.a, { title: yn })
                  : f.a.createElement(W.b, { visuallyHidden: !0 }, yn)
              }),
              h()(s()(e), '_renderUsers', function (t, n) {
                return f.a.createElement(
                  V.a,
                  { accessibilityLabel: bn, style: [En.container, 'sheet' === n ? En.sheet : En.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  f.a.createElement(
                    lt.a,
                    { key: 'button_done', onPress: e, style: En.cancelButton, type: 'primaryOutlined' },
                    fn,
                  )
                )
              }),
              h()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return f.a.createElement(hn, {
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
                    l = a.entryId,
                    o = a.fetchUpdatesIfNeeded,
                    s = a.loggedInUserId,
                    c = a.removeReaction,
                    d = { reaction_key: t, conversation_id: r, dm_id: l, perspective: s }
                  n(), c(d).then(e._handleScribeRemoveReaction(t)).then(o).catch(i())
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
      h()(_n, 'contextType', N.a)
      var En = T.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Sn = Object(nt.a)(Object(Qe.a)(on(_n))),
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
                  l = a.state.emojiSize || 'headline1',
                  o = r.size - 1
                return Array.from(r, function (e, n) {
                  var a = Z()(e, 2),
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
                      n === o && In.rightPadding,
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
                  var o = R.a.generate({ backgroundColor: T.a.theme.colors.gray50, color: T.a.theme.colors.gray700 }),
                    s = kn({ reactionCount: i })
                  return f.a.createElement(
                    V.a,
                    {
                      style: [
                        In.container,
                        a ? In.marginShort : In.marginLong,
                        r ? In.alignRight : In.alignLeft,
                        l ? In.visible : In.invisible,
                      ],
                    },
                    f.a.createElement(
                      Sn,
                      { conversationId: t, entryId: n },
                      f.a.createElement(
                        F.a,
                        {
                          accessibilityLabel: s,
                          focusable: !0,
                          interactiveStyles: o,
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
        })(f.a.PureComponent),
        In = T.a.create(function (e) {
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
            selfSelect: { borderColor: T.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
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
        Rn = n('Xrkv'),
        Tn = Ae.a.icd0bf34,
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    a = e.namesToDisplay
                  return f.a.createElement(
                    V.a,
                    { style: Mn.root },
                    f.a.createElement(
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
                  return n ? (t ? Fn : Tn) : a.length ? An({ count: a.length }) : wn
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
                        Ae.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        f.a.createElement(W.b, null, n),
                        f.a.createElement(
                          W.b,
                          { color: 'link', onPress: e._handlePress },
                          Ae.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Rn.a)(t, n)
                  return f.a.createElement(
                    W.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Mn.namesList },
                    n ? f.a.createElement(r, { namesList: i, othersCount: a }) : f.a.createElement(W.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(f.a.PureComponent),
        Mn = T.a.create(function (e) {
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
              l = n.user.name,
              o = n.user_id !== a.id_str,
              s = i && 1 !== Object(Dn.a)(t, i),
              c = !r || 1 !== Object(Dn.a)(r, t)
            return o && s && c && e.push(l), e
          }, [])
        },
        Kn = n('IMYl'),
        Bn = n('21zW'),
        jn = n('gmpV'),
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
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
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
                      V.a,
                      { style: [Xn.root, u && Xn.vdlRootMargin, t && Xn.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? f.a.createElement(
                            F.a,
                            { interactiveStyles: null, onPress: n, style: t && Xn.sentContainer },
                            f.a.createElement(V.a, { style: t && Xn.groupedItems }, i, o),
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
                      V.a,
                      null,
                      f.a.createElement(W.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Wn),
                      f.a.createElement(
                        V.a,
                        { style: Xn.groupedItems },
                        f.a.createElement(
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
                        f.a.createElement(Bn.a, null),
                        f.a.createElement(
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
                    l = e.withUserAvatar,
                    o = !r || a
                  return t
                    ? f.a.createElement(
                        V.a,
                        { style: l && Xn.footerPadderWithAvatar },
                        f.a.createElement(xn, { conversationId: t, entryId: n, isEndOfDM: o, isSent: i }),
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
                    ? f.a.createElement(Ln, Vt()({ isGroupDM: i }, Pn({ entryId: t, participants: o, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && f.a.createElement(W.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Hn)
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
                        W.b,
                        { color: c ? 'primary' : 'gray700', style: Xn.checkmarkContainer },
                        f.a.createElement(Kn.a, { style: Xn.checkmark }),
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
                  d = Object(jn.c)(u) ? qn(u) : Object(jn.d)(u) ? zn({ time: qn(u) }) : Object(jn.e)(u) ? Gn(u) : Qn(u)
                  var p = r && !o,
                    m = o ? 'right' : 'left'
                  return f.a.createElement(
                    V.a,
                    { style: [c && Xn.footerPadderWithAvatar, o && Xn.timestamp] },
                    f.a.createElement(
                      W.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: o || !ot.a.isEnabled },
                      p &&
                        f.a.createElement(
                          Ae.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          f.a.createElement(W.b, null, s),
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
      h()(Yn, 'contextType', C.a)
      var Xn = T.a.create(function (e) {
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
        Zn = T.a.create(function (e) {
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
              Zn.root,
              n && Zn.isLast,
              n && a && Zn.sentLast,
              n && !a && Zn.receivedLast,
              t && a && Zn.insideTopRoundedSent,
              t && !a && Zn.insideTopRoundedReceived,
              l && a && Zn.outsideTopRoundedSent,
              l && !a && Zn.outsideTopRoundedReceived,
            ]
          return f.a.createElement(
            V.a,
            { style: s },
            f.a.createElement($n.a, { align: 'center', color: 'primary', label: r, link: o, onClick: i }),
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
                  return f.a.createElement(V.a, null, l)
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(na, 'defaultProps', { onCtaClick: ta.a, onImpression: ta.a })
      var aa = na,
        ra = (n('1IsZ'), n('vjRr')),
        ia = n('EGrD'),
        la = function (e, t) {
          return t.cardUrl
        },
        oa = Object(Ie.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: ia.c, card: ra.a.createSingleHydratedSelector(la) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ia.a,
              loadAdFreeArticleDomainsFromPersistence: ia.b,
              popOutConversation: k.popOutConversation,
            }
          }),
        sa = T.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        ca = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            a = e.isVisible,
            r = void 0 === a || a,
            i = e.textContent
          return f.a.createElement(V.a, { style: [r ? sa.visible : sa.invisible, sa.root] }, n, t, i)
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
            h = e.tweetId,
            g = e.withCta,
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            b = f.a.useContext(C.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              m,
              y && pa.messageTextContainer,
              y && c && pa.sent,
              y && !c && pa.received,
              r && pa.failedDraft,
              s && !l && !c && pa.rapidFireReceived,
              s && !l && c && pa.rapidFireSent,
              d && c && pa.hasAssociatedAttachmentSent,
              d && !c && pa.hasAssociatedAttachmentReceived,
              y && _ && c && pa.vdlSent,
              y && a && c && pa.activeSent,
              y && _ && a && c && pa.vdlActiveSent,
              y && a && !c && !ot.a.isEnabled && pa.activeReceived,
              g && pa.withCta,
            ],
            S = [pa.tweetText, y && pa.textAlignLeft, !y && c && pa.textAlignRight],
            k = T.a.theme.colors,
            I = k.gray0,
            x = k.magenta500,
            w = k.primary,
            A = k.text,
            O = k.white,
            M = R.a.generate({ color: c ? O : A, backgroundColor: r ? x : c ? w : I }),
            L = (p.text && p.text.length) || 0
          return f.a.createElement(
            F.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? M : null, style: E },
            f.a.createElement(da.a, {
              color: T.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, L],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && c) || T.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: y ? void 0 : 'title2',
              style: S,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        pa = T.a.create(function (e) {
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
        ga = n('LSr9'),
        va = n('aX4+'),
        fa = n('/Ikv'),
        ya = fa.a.CardNames,
        ba = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e, a
            r()(this, n)
            for (var i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o]
            return (
              (a = t.call.apply(t, [this].concat(l))),
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
                  l = t.popOutConversation
                if ((i && l(i), a._hasClaimsForAdFreeArticles)) {
                  var o = a.props,
                    s = o.adFreeArticleDomains,
                    c = o.createLocalApiErrorHandler,
                    d = o.fetchAdFreeToken,
                    u = new ga.a(d, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: fa.a.getBindingValue(r, 'card_url'),
                      linkDomain: fa.a.getBindingValue(r, 'domain'),
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
                    h = !!Object.values(ya).includes(null == t ? void 0 : t.name),
                    g = gt(n, p, m),
                    v = g.isAttachmentSquared ? 'both' : o ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    b = t
                      ? f.a.createElement(
                          V.a,
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
                    _ = n
                      ? f.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: o ? _a.sentMessageWrapper : _a.receivedMessageWrapper,
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
                            rootStyle: g.isTextSquared ? (o ? _a.textSentSquared : _a.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return h
                    ? f.a.createElement(ca, { attachmentContent: b, isVisible: g.compositeRendered, textContent: _ })
                    : f.a.createElement(ha, {
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
      h()(ba, 'defaultProps', { hasUserText: !1 }), h()(ba, 'contextType', C.a)
      var _a = T.a.create(function (e) {
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
        Ea = oa(ba),
        Sa = Ae.a.f720438f,
        ka = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
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
                  var m = gt(t, u, p),
                    h = m.compositeRendered,
                    g = m.isAttachmentSquared,
                    v = m.isTextSquared,
                    y = [
                      Ia.tombstoneWrapper,
                      l ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                      this._getSquareBottomStyles(g),
                    ],
                    b = f.a.createElement(
                      V.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      f.a.createElement(W.b, { color: 'gray700' }, Sa),
                    ),
                    _ = t
                      ? f.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              l ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                              !c && Ia.fleetReactionSpacing,
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
                            rootStyle: v ? (l ? Ia.sentSquared : Ia.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return f.a.createElement(ca, { attachmentContent: b, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(f.a.Component),
        Ca = T.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ia = T.a.create(function (e) {
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
        Ra = (n('849X'), n('TJCb'), n('prG5')),
        Ta = n('RCZO'),
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
            l = i.height,
            o = i.width,
            s = Object(Ta.b)(t).rgb,
            c = f.a.createElement(Ra.a, {
              accessibilityLabel: a,
              aspectMode: wa.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: o, height: l },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? f.a.createElement(F.a, { interactiveStyles: null, link: n, onPress: Aa }, c) : c
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
            ? f.a.createElement(
                Ma.a,
                Vt()({}, a, { aspectRatio: Pa.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Ka = Object(Ie.a)().withAnalytics(),
        Ba = (function (e) {
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
                    o = i.width < T.a.theme.breakpoints.micro
                  return l
                    ? f.a.createElement(
                        V.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ha.root,
                            o ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && ja[r],
                          ],
                        },
                        f.a.createElement(V.a, { style: Ha.description }, f.a.createElement(W.b, null, a)),
                        f.a.createElement(
                          V.a,
                          { style: [Ha.button, o ? Ha.breakButtonWrapper : void 0] },
                          f.a.createElement(
                            lt.a,
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
        })(f.a.PureComponent)
      h()(Ba, 'defaultProps', { isSensitive: !1 })
      var ja = T.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ha = T.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: T.a.theme.spaces.space4,
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
        Ua = Object(Qe.a)(Ka(Ba)),
        Va = n('CoGJ'),
        Wa = f.a.createElement(Va.a, null),
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
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(s()(e), '_renderAttachment', function () {
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
                  h = (d || {}).attachment,
                  g = r.is_draft,
                  v = gt(i, p, m),
                  y = [
                    $a.mediaAttachment,
                    s && $a.isSent,
                    !s && $a.received,
                    s && v.isAttachmentSquared && $a.equalComponentDimensionsSent,
                    !s && v.isAttachmentSquared && $a.equalComponentDimensionsReceived,
                    o && !l && s && $a.rapidFireSent,
                    o && !l && !s && $a.rapidFireReceived,
                  ],
                  _ = null
                if (
                  (!g && r.conversation_id && (_ = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = f.a.createElement(Oa, { media: t, mediaUrl: _ }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = f.a.createElement(Na, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(b.l)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = f.a.createElement(Na, { media: t, messageId: r.id })
                  }
                var E = v.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  S = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, E))
                return {
                  attachmentContent: f.a.createElement(V.a, { onLayout: e._handleAttachmentLayout, style: y }, S),
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
                    h = t.is_draft,
                    g = gt(n, p, m),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    b = v.media,
                    _ = n
                      ? f.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: o ? $a.sentMessageWrapper : $a.receivedMessageWrapper,
                          },
                          f.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!l,
                            isSent: o,
                            messageData: h ? s : this._parseMessageData(s, b),
                            rootStyle: g.isTextSquared ? (o ? $a.sentSquared : $a.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return f.a.createElement(ca, { attachmentContent: y, isVisible: g.compositeRendered, textContent: _ })
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
                      var o = ('animated_gif' === e.type && Ya) || ('video' === e.type && Qa) || Ga
                      return f.a.createElement(
                        Ua,
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
                    : f.a.createElement(
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
        })(f.a.Component)
      h()(Ja, 'contextType', C.a), h()(Ja, 'defaultProps', { hasUserText: !1 })
      var $a = T.a.create(function (e) {
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
              for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
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
              l()(n, [
                {
                  key: 'render',
                  value: function () {
                    var e = this.props.children
                    return f.a.createElement(
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
                    return f.a.createElement(
                      V.a,
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
        lr = T.a.create(function (e) {
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
        cr = T.a.create(function (e) {
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
        mr = Object(Ie.a)()
          .propsFromState(function () {
            return { tweet: ur.a.createHydratedTweetSelector(pr) }
          })
          .propsFromActions(function () {
            return { popOutConversation: k.popOutConversation }
          }),
        hr = n('b5s6'),
        gr = f.a.createElement(W.b, { link: '/settings/safety' }),
        vr = function (e) {
          return f.a.createElement(
            Ae.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            f.a.cloneElement(gr, null, Ae.a.adcf07b5),
          )
        },
        fr = Ae.a.e4df0ad7,
        yr = Ae.a.f277e949,
        br = Ae.a.b5b91d58,
        _r = Ae.a.bb594d7b,
        Er = f.a.createElement(vr, null)
      var Sr = T.a.create(function (e) {
          return {
            received: { boxShadow: e.boxShadows.small },
            receivedAttachmentSquared: { borderTopRightRadius: e.borderRadii.none, boxShadow: e.boxShadows.small },
            sent: { boxShadow: e.boxShadows.small },
            sentAttachmentSquared: { borderTopRightRadius: e.borderRadii.none, boxShadow: e.boxShadows.small },
          }
        }),
        kr = T.a.create(function (e) {
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
          attachment: kr.attachment,
          receivedMessageWrapper: kr.receivedMessageWrapper,
          sentMessageWrapper: kr.sentMessageWrapper,
          received: Sr.received,
          receivedAttachmentSquared: Sr.receivedAttachmentSquared,
          receivedSquared: kr.receivedSquared,
          sent: Sr.sent,
          sentAttachmentSquared: Sr.sentAttachmentSquared,
          sentSquared: kr.sentSquared,
        },
        Ir = mr(function (e) {
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
            h = e.isSent,
            g = e.isTrusted,
            v = e.isVdlEnabled,
            y = e.messageData,
            b = e.popOutConversation,
            _ = e.tweet,
            E = e.withCta,
            S = e.withMessageBubble,
            k = f.a.useState(void 0),
            I = Z()(k, 2),
            x = I[0],
            R = I[1],
            T = f.a.useState(void 0),
            w = Z()(T, 2),
            F = w[0],
            A = w[1],
            O = f.a.useMemo(
              function () {
                return function () {
                  n && b(n)
                }
              },
              [n, b],
            ),
            M = f.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  x !== t && R(t)
                }
              },
              [x],
            ),
            L = f.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  F !== t && A(t)
                }
              },
              [F],
            )
          if (!y || !y.attachment || !y.attachment.tweet) return null
          var D = y.attachment.tweet,
            P = h ? 'sent' : 'received',
            N = gt(i, x, F),
            K = v ? Cr : kr,
            B = f.a.createElement(hr.a, {
              onPress: O,
              style: [
                K[P],
                i && K.attachment,
                N.isAttachmentSquared ? (h ? K.sentAttachmentSquared : K.receivedAttachmentSquared) : void 0,
              ],
              tweetId: D.status,
            }),
            j = N.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            H = (function () {
              if (!_) return null
              if (h) return B
              if (_.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return f.a.createElement(
                    Ua,
                    { contentType: 'photo', ctaText: _r, description: br, withSquareBottomBorderRadius: j },
                    B,
                  )
              } else if (!a && _.possibly_sensitive)
                return f.a.createElement(
                  Ua,
                  { contentType: 'photo', ctaText: yr, description: Er, withSquareBottomBorderRadius: j },
                  B,
                )
              return g
                ? B
                : f.a.createElement(
                    Ua,
                    { contentType: 'tweet', ctaText: yr, description: fr, withSquareBottomBorderRadius: j },
                    B,
                  )
            })(),
            U = f.a.createElement(V.a, { onLayout: M, style: K.attachment }, H),
            W = i
              ? f.a.createElement(
                  V.a,
                  { onLayout: L, style: h ? K.sentMessageWrapper : K.receivedMessageWrapper },
                  f.a.createElement(ma, {
                    hasAssociatedAttachment: !0,
                    isActive: o,
                    isFailedDraft: c,
                    isFirstRapidFire: u,
                    isRapidFire: m,
                    isSent: h,
                    messageData: y,
                    rootStyle: N.isTextSquared ? (h ? K.sentSquared : K.receivedSquared) : void 0,
                    tweetId: D.status,
                    withCta: E,
                    withMediaLinks: !0,
                    withMessageBubble: S,
                  }),
                )
              : null
          return f.a.createElement(ca, { attachmentContent: U, isVisible: N.compositeRendered, textContent: W })
        }),
        xr = n('htvZ'),
        Rr = n('MH+I'),
        Tr = n('5Ixf'),
        wr = n('AtEG')
      function Fr(e) {
        var t,
          n,
          a = f.a.useContext(xr.a),
          r = e.isLowQuality,
          i = e.isSent,
          l = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var o = Z()(a.activeVoiceMessage, 2),
          s = o[0],
          c = o[1],
          d = Z()(a.playerApi, 1)[0],
          u = Z()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = Z()(s, 1)[0],
          h = e.messageId === m
        if (!p) return null
        var g = Or(u),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: v,
            isActive: h,
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
          h &&
            g &&
            g.contentId === e.media.id_str &&
            ((y.playerApi = d),
            (y.playerState = u),
            null != g && g.durationMs && (y.durationMs = null == g ? void 0 : g.durationMs)),
          f.a.createElement(Ar, y)
        )
      }
      function Ar(e) {
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
        var d = T.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'text' },
          p = [
            Dr.voiceMessage,
            Pr({ isSent: n, squared: t }),
            n ? Dr.voiceMessageSent : Dr.voiceMessageReceived,
            le(T.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? Tr.a : wr.a
        return f.a.createElement(
          V.a,
          { style: [Dr.container, le(T.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          f.a.createElement(
            V.a,
            { style: p },
            f.a.createElement(V.a, { style: Dr.startSpacer }),
            f.a.createElement(lt.a, {
              accessibilityLabel: i ? Lr : Mr,
              icon: f.a.createElement(m, { style: d ? Dr.iconColorDark : Dr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            f.a.createElement(V.a, { style: Dr.durationSpacer }),
            f.a.createElement(
              V.a,
              { style: n ? Dr.durationOpacity : void 0 },
              f.a.createElement(
                Rr.a,
                Vt()({ countdown: !0, timeMs: c }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Dr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            f.a.createElement(V.a, { style: Dr.endSpacer }),
          ),
        )
      }
      var Or = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Mr = Ae.a.c94b7d89,
        Lr = Ae.a.eb6f9582,
        Dr = T.a.create(function (e) {
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
        return [Nr.base, t ? Nr.sent : Nr.received, n ? (t ? Nr.sentSquared : Nr.receivedSquared) : void 0]
      }
      var Nr = T.a.create(function (e) {
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
        Kr = (function (e) {
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
                  e = o.sticker ? f.a.createElement(dr, { sticker: o.sticker }) : this._renderDMMessage(u, d, m)
                  var g = s ? f.a.createElement(ir, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = c && !h && !Object(b.l)(null == l ? void 0 : l.attachment, this.context.featureSwitches),
                    y = [
                      a ? Br.isSent : Br.isReceived,
                      d && Br.withCta,
                      v ? Br.mediaRoot : Br.flexShrink,
                      this.props.style,
                    ]
                  return f.a.createElement(
                    V.a,
                    { style: y },
                    g,
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
                    h = i.message_data,
                    g = h && te()(te()({}, h), {}, { entities: (h && h.entities) || void 0, error: m }),
                    v = null == g ? void 0 : g.attachment,
                    y = {
                      isActive: l,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    },
                    _ =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  if (g && v) {
                    if (v.tweet)
                      return f.a.createElement(
                        Ir,
                        Vt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: o,
                            isTrusted: p,
                            isVdlEnabled: _,
                            messageData: g,
                          },
                          y,
                        ),
                      )
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(b.l)(v, this.context.featureSwitches)
                        ? f.a.createElement(Fr, {
                            isLowQuality: c,
                            isSent: !!u,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : f.a.createElement(
                            Za,
                            Vt()(
                              {
                                displaySensitiveMedia: r,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: o,
                                isTrusted: p,
                                messageData: g,
                              },
                              y,
                            ),
                          )
                    if (v.card)
                      return f.a.createElement(
                        Ea,
                        Vt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: g }, y),
                      )
                    if (v.fleet) return f.a.createElement(xa, Vt()({ entry: i, hasUserText: e, messageData: g }, y))
                  }
                  return f.a.createElement(ha, Vt()({}, y, { messageData: g }))
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      h()(Kr, 'contextType', C.a)
      var Br = T.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        jr = Kr,
        Hr = T.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Ur = function (e) {
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
            : f.a.createElement(V.a, { style: [Hr.avatar, q.default.getSizeStyle(a)] })
        },
        Vr = n('m3Bd'),
        Wr = n.n(Vr),
        qr = n('B3eJ'),
        zr = ['color', 'isActive', 'size']
      function Gr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Wr()(e, zr),
          i = f.a.useContext(xr.a),
          l = f.a.useState(0.5),
          o = Z()(l, 2),
          s = o[0],
          c = o[1],
          d = Z()(i.playerState, 1)[0]
        f.a.useEffect(
          function () {
            n && d && d.isPlaying && c(Math.random())
          },
          [n, d],
        )
        var u = n && (null == d ? void 0 : d.isPlaying),
          p = a + 2 * Qr,
          m = [Yr.container, r.style, { width: a, height: a }]
        return f.a.createElement(
          V.a,
          { style: m },
          f.a.createElement(
            V.a,
            { style: [Yr.container, Yr.transitionOpacity, u ? Yr.show : Yr.hide] },
            ie.a.reducedMotionEnabled
              ? null
              : f.a.createElement(qr.a, { audioLevel: s, color: t, paused: !u, size: a }),
          ),
          f.a.createElement(V.a, {
            style: [Yr.border, { width: p, height: p }, Yr.transitionOpacity, n ? Yr.show : Yr.hide],
          }),
        )
      }
      var Qr = parseInt(T.a.theme.spaces.space2, 10),
        Yr = T.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Qr,
              left: -1 * Qr,
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
        $r = { element: 'cta_dm' },
        Zr = { viewType: 'message' },
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
              h()(s()(e), 'state', { shouldFadeHighlight: !1 }),
              h()(
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
              h()(s()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!ot.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(b.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              h()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(te()(te()({}, $r), {}, { action: 'show' }))
              }),
              h()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(te()(te()({}, $r), {}, { action: 'click' }))
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
                    he.a,
                    { behavioralEventContext: Zr },
                    f.a.createElement(
                      V.a,
                      { style: d },
                      f.a.createElement(
                        F.a,
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
                    h = l.isReadOnly,
                    g = l.isSent,
                    v = l.isTrusted,
                    y = l.isVoiceMessageActive,
                    b = l.isWide,
                    _ = l.participants,
                    E = l.perspective,
                    S = l.scribeVoiceMessage,
                    k = l.setShouldFreezeUpdates,
                    C = a.isFirstRapidFire,
                    I = a.isRapidFire,
                    x = [
                      g ? ai.messageContainer.sent : ai.messageContainer.received,
                      b ? ai.messageContainer.wide : ai.messageContainer.narrow,
                      g && b && ai.messageContainer.sentWide,
                      !g && b && ai.messageContainer.receivedWide,
                    ],
                    R = v && !h,
                    w = this._isDMVoiceMessage(),
                    F = (null == _ ? void 0 : _.length) || 0
                  return f.a.createElement(
                    V.a,
                    { style: x },
                    s.error
                      ? null
                      : f.a.createElement(Bt, {
                          containerIsActive: d,
                          containerIsFocused: t,
                          containerIsHovered: n,
                          entry: s,
                          featureSwitches: this.context.featureSwitches,
                          inboxType: c,
                          isDraft: !!s.is_draft,
                          isGroupDM: p,
                          isSent: g,
                          onReportMessage:
                            w && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: v })
                                }
                              : void 0,
                          participantsCount: F,
                          perspective: E,
                          setShouldFreezeUpdates: k,
                          shouldShowReactionButton: R,
                          style: w && le(T.a.theme.scale).actionsContainer({ isSent: g, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    f.a.createElement(jr, {
                      displaySensitiveMedia: o,
                      entry: s,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: u,
                      isFirstRapidFire: C,
                      isLowQuality: m,
                      isRapidFire: I,
                      isSent: g,
                      isTrusted: v,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: w && le(T.a.theme.scale).messageContainer({ isSent: g, isVoiceMessageActive: y }),
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
                  var c = ae(T.a.theme.scale),
                    d = c.DMUserAvatarSizePx,
                    u = { showAvatar: !!s || !a || !!n, size: c.DMUserAvatarSizeType, user: o },
                    p = [
                      ai.userAvatar.base,
                      i ? ai.userAvatar.sent : ai.userAvatar.received,
                      s && le(T.a.theme.scale).userAvatar({ isVoiceMessageActive: l, isSent: i }),
                    ]
                  return f.a.createElement(
                    V.a,
                    { style: ai.userAvatar.container },
                    i ? null : f.a.createElement(V.a, { style: ai.userAvatar.spacer }),
                    s
                      ? f.a.createElement(Gr, {
                          color: i ? T.a.theme.colors.primary : T.a.theme.colors.text,
                          isActive: !!l,
                          size: d,
                          style: p,
                        })
                      : null,
                    f.a.createElement(V.a, { style: p }, f.a.createElement(Ur, u)),
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
      h()(ti, 'contextType', C.a), h()(ti, 'defaultProps', ei)
      var ni = Object(Qe.a)(
          ke(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = f.a.useContext(xr.a),
                  r = Z()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  l = Z()(r, 1)[0] === n.id,
                  o = te()(te()({}, t), {}, { isVoiceMessageActive: l, scribeVoiceMessage: i })
                return f.a.createElement(e, o)
              }
              return (t.defaultProps = ei), t
            })(ti),
          ),
        ),
        ai = {
          root: T.a.create(function (e) {
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
          messageContainer: T.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: zt },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: T.a.create(function (e) {
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
          if (Object(_.b)(n) || Object(_.e)(n)) {
            var h = t.conversation_id,
              g = t.low_quality,
              v = t.participants,
              y = t.read_only,
              b = t.trusted,
              E = t.type,
              S = n.message_data,
              C = (S = void 0 === S ? {} : S).sender_id,
              I = void 0 === h || b
            return f.a.createElement(ni, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: E === k.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: l,
              isLastRapidFire: o,
              isLowQuality: !!g,
              isRapidFire: s,
              isReadOnly: y,
              isSent: C === d,
              isTrusted: !!I,
              isWide: c,
              participants: v,
              perspective: d,
              scribeNamespace: u,
              senderId: C,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(_.a)(n)
            ? f.a.createElement(J, { conversation: t, entry: n, entryType: n.type, perspective: d })
            : Object(_.d)(n)
            ? f.a.createElement(ri.a, { entry: n, isCompact: !1 })
            : null
        },
        li = n('0JOx'),
        oi = Object(ge.createSelector)(
          function (e, t) {
            var n = Object(Pe.o)(e, t.conversationId),
              a = n && Object(S.a)(n)
            return a && Object(k.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        si = Object(ve.c)(oi),
        ci = (n('Ef13'), n('uDfI')),
        di = Object(ge.createSelector)(
          function (e, t) {
            return be.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        ui = Object(ci.b)(di),
        pi = n('VPAj'),
        mi = n('Enqy'),
        hi = n('+/1j'),
        gi = 'overflow',
        vi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        fi = { stiffness: 1e3, damping: 70 },
        yi = 140,
        bi = { scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(0, fi) },
        _i = function (e, t) {
          return { key: e.id_str, data: e, style: bi }
        },
        Ei = Object(pi.a)({ translateY: yi, scale: 0 }),
        Si = Object(pi.a)({ scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(yi, fi) }),
        ki = [{ key: 'bubble', style: { scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(0, fi) } }],
        Ci = Object(pi.a)({ translateY: yi, scale: 0 }),
        Ii = Object(pi.a)({ scale: Object(mi.spring)(1, fi), translateY: Object(mi.spring)(yi, fi) }),
        xi = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ri = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
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
                  return !Object(U.a)(this.props, e) || !Object(U.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(vi).slice(0, 5).map(_i)
                  return (
                    t.length > 5 && n.push({ key: gi, style: bi }),
                    f.a.createElement(
                      V.a,
                      { style: [Ti.root, e && Ti.hidden] },
                      f.a.createElement(
                        V.a,
                        { style: Ti.avatarRow },
                        f.a.createElement(
                          mi.TransitionMotion,
                          { styles: n, willEnter: Ei, willLeave: Si },
                          function (e) {
                            return f.a.createElement(
                              f.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = xi(e.style)
                                return e.key === gi
                                  ? f.a.createElement(
                                      V.a,
                                      {
                                        key: e.key,
                                        style: [Ti.avatar, Ti.avatarSpacer, Ti.overflowAvatar, { transform: a }],
                                      },
                                      f.a.createElement(hi.a, { style: Ti.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : f.a.createElement(
                                      V.a,
                                      { key: e.key, style: [Ti.avatar, { transform: a }] },
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
                        { didLeave: this._afterLeave, styles: t.length > 0 ? ki : [], willEnter: Ci, willLeave: Ii },
                        function (e) {
                          return f.a.createElement(
                            f.a.Fragment,
                            null,
                            e.map(function (e) {
                              return f.a.createElement(
                                V.a,
                                { key: e.key, style: [Ti.messageBubble, { transform: xi(e.style) }] },
                                f.a.createElement(V.a, { style: Ti.dot }),
                                f.a.createElement(V.a, { style: [Ti.dot, Ti.dot1] }),
                                f.a.createElement(V.a, { style: [Ti.dot, Ti.dot2] }),
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
        Ti = T.a.create(function (e) {
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
        wi = ui(Ri),
        Fi = n('tn7R'),
        Ai = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
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
                  return !t && f.a.createElement(wi, { userIds: n })
                },
              },
              {
                key: '_teardownLivePipeline',
                value: function () {
                  Object(Fi.a)(this._timers).forEach(function (e) {
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
      h()(Ai, 'contextType', C.a)
      var Oi = si(Ai),
        Mi = n('3AAD'),
        Li = n('iBK2'),
        Di = n('RJrc'),
        Pi = n('yw4N'),
        Ni = n('mw9i'),
        Ki = Ae.a.i859a9d3,
        Bi = Ae.a.i8ecae5b,
        ji = function (e) {
          return e.entry.id
        },
        Hi = function (e) {
          return e.entry.type === H.b.MESSAGE
        },
        Ui = (function (e) {
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
                    return n ? f.a.createElement(Oi, { conversationId: n }) : null
                  case H.b.READ_ONLY_INDICATOR:
                    return n
                      ? f.a.createElement(
                          V.a,
                          { style: Vi.readOnly },
                          f.a.createElement(
                            W.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Bi,
                            ' ',
                            f.a.createElement(W.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Ki),
                          ),
                        )
                      : null
                  case H.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return f.a.createElement(P, { conversation: t })
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
                        d = (null == a ? void 0 : a.status) === k.PAGINATION_STATUS.AT_END,
                        u = s ? Object(b.d)(o, s) : o.length - 1,
                        p = c ? Object(b.d)(o, c) : -1,
                        m = i && -1 === p ? Object(b.d)(o, i) : p,
                        h = o.slice(d ? 0 : m, u + 1),
                        g = (i ? h : o).reduce(function (e, r, l) {
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
                      return r && !i && g.push(r), a.read_only && l && !i && g.push(l), g
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
                        if (n && Hi(n)) return n
                      }
                      return (function (e) {
                        return e[e.length - 1]
                      })(e)
                    },
                    h = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    v =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== H.c.AT_END
                  return f.a.createElement(N.a.Consumer, null, function (t) {
                    var d = t.isDrawer ? K.b.drawerHeaderRadius : Vi.scrollSpace
                    return f.a.createElement(
                      V.a,
                      { style: [Vi.scrollContainer, d] },
                      f.a.createElement(
                        Pi.a,
                        { style: [Vi.scrollContainer, r && Vi.conversationsPadding, d, c] },
                        a || null,
                        (n.status && n.status !== H.c.AT_END && !i) || v ? f.a.createElement(Di.a, null) : null,
                        f.a.createElement(
                          Ni.a,
                          { style: [Vi.content, Vi.alignTop], withGutter: !0 },
                          f.a.createElement(Li.b, {
                            anchoring: Mi.a,
                            assumedItemHeight: 50,
                            cacheKey: h,
                            canBeAnchorFunction: Hi,
                            centerInitialAnchor: i && s,
                            hasNewContentAtBottom: !0,
                            identityFunction: ji,
                            initialAnchor: u.length > 0 ? g.a(i && s ? i : ji(m(u))) : void 0,
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
                          n.search_status !== H.c.AT_END
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
      h()(Ui, 'contextType', C.a)
      var Vi = T.a.create(function (e) {
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
        l = n('k49u'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('fs1G'),
        d = s.a.c3752568,
        u = s.a.f78aa3e9,
        p = s.a.f9690dc0,
        m = s.a.i859a9d3,
        h = s.a.b1d35407,
        g = s.a.g539cca6,
        v = s.a.bbac0019,
        f = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        b = s.a.hf383be4,
        _ = s.a.b25c5b2a,
        E = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        k = i()({}, l.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: u }, showToast: !0 },
        I =
          ((a = { defaultToast: { text: d } }),
          i()(a, l.a.CurrentUserSuspended, {
            toast: { text: g, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, l.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, l.a.DirectMessageDuplicate, { toast: { text: _ } }),
          i()(a, l.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, l.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          i()(a, l.a.DirectMessageTooLongError, { toast: { text: v } }),
          i()(a, l.a.DirectMessageTweetNotFound, { toast: { text: y } }),
          i()(a, l.a.GenericBadRequest, { customAction: c.a }),
          i()(a, l.a.MessageSendError, { toast: { text: S } }),
          i()(a, l.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          i()(a, l.a.TargetUserNotFound, { toast: { text: b } }),
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
    '8hvq': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return A
      })
      n('KqXw'), n('MvUL'), n('0zG9')
      var a = n('MMRb'),
        r = n('ERkP'),
        i = n.n(r),
        l = n('1YZw'),
        o = n('v6aA'),
        s = n('EbOo'),
        c = n('tZH3'),
        d = n('3XMw'),
        u = n.n(d),
        p = n('5oT/'),
        m = n('YemM'),
        h = n('u0B7'),
        g = n('Irs7'),
        v = n('0KEI'),
        f = n('uDfI'),
        y = n('zCf4'),
        b = n('G6rE'),
        _ = n('vMjK'),
        E = n('efqG'),
        S = n('/yvb'),
        k = n('6u/5'),
        C = n.n(k),
        I = n('PJTX'),
        x = n.n(I),
        R = n('pHkl'),
        T = n('X/yg'),
        w = n('fz3c'),
        F = u.a.d88d0790
      function A(e) {
        var t = e.conversationId,
          n = e.conversationType,
          r = e.inboxType,
          d = e.participant,
          u = Object(g.b)(),
          k = Object(v.useCreateLocalApiErrorHandler)('DIRECT_MESSAGES_INBOX_ITEM'),
          I = Object(f.c)(),
          A = x()(),
          O = i.a.useContext(o.a).featureSwitches,
          M = Object(y.f)(),
          L = O.isTrue('dm_vdl_enabled') && O.isTrue('dm_vdl_inbox_p0_enabled'),
          D = n === a.CONVERSATION_TYPE.GROUP,
          P = function (e) {
            I(b.e.unblock(e)).catch(k(h.a)), u.scribeAction('unblock')
          },
          N = function () {
            var i = e.participantCount,
              l = e.position,
              o = e.relayId,
              s = n === a.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
              c = {
                conversation_type: n === a.CONVERSATION_TYPE.GROUP ? R.j.GROUP : R.j.ONE_TO_ONE,
                conversation_id: t,
                conversation_participant_count: i,
                position: l,
                inbox_type: Object(T.i)(r),
                entry_point: R.c.CELL_X_BUTTON,
              }
            u.scribe({ element: 'thread', action: s, data: c }),
              I(a.leaveConversation({ conversationId: t }))
                .then(function () {
                  o &&
                    C()(A, function (e) {
                      e.delete(o)
                    })
                })
                .catch(k({ showToast: !0 })),
              M.replace(Object(T.f)(r))
          },
          K = function () {
            var n = e.userId,
              a = w.a.DMConversation
            if ((u.scribeAction('report'), Object(w.g)(O, a))) {
              var i = Object(w.d)({
                clientReferer: window.location.pathname,
                isMedia: !1,
                isPromoted: !1,
                reportType: a,
                reportedConversationId: t,
                reportedUser: n,
                scribeNamespace: u.contextualScribeNamespace,
              })
              M.push({
                pathname: '/i/safety/report_story_start',
                state: { input: { requested_variant: JSON.stringify(i) } },
              })
            } else {
              var l = Object(T.g)(t, window.location.pathname, u.contextualScribeNamespace, r)
              M.push(l)
            }
          }
        return i.a.createElement(
          E.a,
          {
            renderContent: function (e, t) {
              return i.a.createElement(c.a, {
                dismiss: e,
                flatBorders: 'sheet' === t,
                isGroup: D,
                onBlockClick: function () {
                  return (
                    (e = d.idStr),
                    I(b.e.block(e)).then(function () {
                      I(
                        Object(l.b)({
                          action: {
                            label: _.c,
                            onAction: function () {
                              return P(e)
                            },
                          },
                          text: _.a,
                        }),
                      )
                    }, k(s.a)),
                    void u.scribeAction('block')
                  )
                  var e
                },
                onDeleteClick: N,
                onReportClick: K,
                requestorScreenName: d.screenName,
                showBlock: !D,
                showCancel: 'sheet' === t,
                showDelete: !0,
              })
            },
          },
          i.a.createElement(S.a, {
            accessibilityLabel: F,
            icon: i.a.createElement(p.a, { style: L ? m.a.xIcon : void 0 }),
            onPress: function (e) {
              e.preventDefault()
            },
            style: L ? m.a.vdlXButton : m.a.xButton,
            type: L ? void 0 : 'destructiveText',
          }),
        )
      }
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
        h = function () {
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
      function g(e, t) {
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
            { entries: t.entryIdsByConversationId[a] || [], participants: h(i, n) },
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
              { entries: g(a, t), participants: h(i, n), social_proof: void 0 },
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
    Avzu: function (e, t, n) {
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
                d: 'M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    DbJc: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('VPAj'),
        l = n('7n04'),
        o = r()(
          r()({}, l.a),
          {},
          { initialScrollHeadroom: Object(i.a)(0), scrollHeadroom: Object(i.a)(0), pinToNewestWhenAtNewest: !0 },
        )
      t.a = o
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
          h = 'follow' === t.reason ? p : m,
          g = Object(d.b)(s),
          v = Object(d.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: v, weight: g }, h)
          : r.a.createElement(
              o.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: v, size: 'subtext2', weight: g }, h),
            )
      }
    },
    HvW7: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('XiYe'),
        i = n('PJTX'),
        l = n('ERkP'),
        o = n('e1/f').commitMutation,
        s = l.useState,
        c = l.useEffect,
        d = l.useRef,
        u = l.useCallback
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = i(),
          l = r(),
          p = d(n),
          m = d(e),
          h = d(new Set()),
          g = s(!1),
          v = g[0],
          f = g[1],
          y = u(
            function (t) {
              p.current === n && m.current === e && (h.current.delete(t), l.current && f(h.current.size > 0))
            },
            [n, l, e],
          )
        c(
          function () {
            ;(p.current === n && m.current === e) ||
              ((h.current = new Set()), l.current && f(!1), (p.current = n), (m.current = e))
          },
          [n, l, e],
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
            return h.current.add(i), l.current && f(!0), i
          },
          [y, t, n, l, e],
        )
        return [b, v]
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
    IpT4: function (e, t, n) {
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
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
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
        h = n('t62R'),
        g = n('rHpw'),
        v = n('p9G8'),
        f = d.a.cfd94063,
        y = d.a.b93ba92c,
        b = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        _ = g.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        E = function (e) {
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
          var l = b(n)
          return Object(v.b)(l, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          c = void 0 !== i && i,
          d = e.newConversationParticipants,
          g = e.perspective,
          E = e.renderTimestamp,
          S = e.textColor,
          k = void 0 === S ? 'text' : S,
          C = e.textSize,
          I = e.titleWeight,
          x = void 0 === I ? 'bold' : I,
          R = e.withParticipantsCount,
          T = void 0 !== R && R,
          w = e.withScreenName,
          F = void 0 === w || w,
          A = e.withVDLRefresh,
          O = void 0 !== A && A
        if (t) {
          var M = E ? E() : null
          if (t.type === o.CONVERSATION_TYPE.ONE_TO_ONE) {
            var L = Object(s.a)(t, g).map(function (e) {
                return e.user
              }),
              D = r()(L, 1)[0],
              P = l.a.createElement(p.a, {
                color: k,
                isProtected: D.protected,
                isVerified: D.verified,
                name: D.name,
                nameSize: C,
                screenName: D.screen_name,
                weight: x,
                withLink: !1,
                withScreenName: F,
              })
            return (O && !a) || c ? l.a.createElement(m.a, null, P, M) : P
          }
          var N = t.participants.length + (O ? -1 : 0)
          if (a)
            return l.a.createElement(
              m.a,
              { color: k },
              l.a.createElement(
                h.b,
                { color: k, numberOfLines: 1, size: C, style: _.title, weight: x },
                Object(v.a)(t, g, a),
              ),
              O
                ? null
                : l.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    f({ peopleCount: N }),
                  ),
            )
          var K = l.a.createElement(
            h.b,
            { color: k, numberOfLines: 1, size: C, weight: x },
            Object(v.a)(t, g, a, O ? 2 : void 0),
          )
          return (O && !a) || c
            ? l.a.createElement(
                u.a,
                { style: _.dmGroup },
                l.a.createElement(m.a, null, K, M),
                T && l.a.createElement(h.b, { color: 'gray700', numberOfLines: 1, size: C }, y({ peopleCount: N })),
              )
            : K
        }
        var B = b(d)
        return l.a.createElement(h.b, { color: k, numberOfLines: 1, size: C, weight: x }, Object(v.b)(B, g))
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
        h = n.n(m),
        g = n('KEM+'),
        v = n.n(g),
        f = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(f),
        b = n('0JOx'),
        _ = n('zh9S'),
        E = n('MMRb'),
        S = n('CDB5'),
        k = n('RqPI'),
        C = n('1YZw'),
        I = n('hqKg'),
        x = n('kGix'),
        R = n('AQOc'),
        T = n('UhuB'),
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
          T.n,
          N,
          L.m,
          function (e, t) {
            var n = D(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, l, o, s, c, d, u, p, m, h, g, v, f, y) {
            var b = e && e.data
            return {
              conversation: (b && Object(R.a)(b, t, l)) || void 0,
              dataSaverMode: h,
              draftText: m,
              dtabBarInfo: f,
              fetchStatus: o,
              gifMetadata: p,
              inboxType: y,
              isDmReceiptSettingEnabled: g,
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
        B = Object(A.d)(K, function (e) {
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
        j = n('I2k/'),
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
        le = n('ddV6'),
        oe = n.n(le),
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
        ge = n('tZH3'),
        ve = n('/yvb'),
        fe = n('efqG'),
        ye = z.a.ccf2f24e,
        be = z.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            l = y.a.createElement(ve.a, he()({}, i, { accessibilityRole: 'button' }), be),
            o = y.a.createElement(ve.a, he()({}, i, { onPress: a }), ye),
            s = y.a.useCallback(
              function (e, t) {
                return y.a.createElement(ge.a, {
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
            l = function () {
              return e.onReport()
            },
            o = function () {
              return e.onLeave()
            }
          return y.a.createElement(Se.a, null, function (t) {
            var s = t.windowWidth <= ke.a.theme.breakpoints.small
            return y.a.createElement(
              Ee.a,
              { style: Ie.actionsContainer },
              n &&
                y.a.createElement(
                  ve.a,
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
                  onReportClick: l,
                  requestorScreenName: Object(O.j)(e.conversation, a).screenName,
                }),
              ),
              y.a.createElement(
                ve.a,
                {
                  onPress: o,
                  size: 'medium',
                  style: s ? [Ie.actionFullWidth, Ie.actionMarginTop] : [Ie.actionHalfWidth, Ie.actionMarginLeft],
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
        Re = n('t62R'),
        Te = n('eb3s'),
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
        Be = Object(Fe.a)({ element: 'untrusted_interstitial' })(
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
              h = m[0],
              g = m[1],
              v = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE }],
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
            var b,
              _,
              S,
              k,
              C = function () {
                u(!0), g(!1)
              },
              I = function () {
                u(!1)
              },
              x = function () {
                g(!1)
              },
              R = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  l = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = (null == t ? void 0 : t.participants.length) || 0,
                  c = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: s,
                    position: c,
                    inbox_type: Object(O.i)(r),
                    entry_point: $.c.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: a }), f(l, d), T()
              },
              T = function () {
                var t = e.inboxType
                l.push(Object(O.f)(t))
              },
              w = function () {
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
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE,
                      conversation_participant_count: d,
                      entry_point: $.c.REQUEST_ACTION_SHEET,
                      inbox_type: Object(O.i)(l),
                      position: u,
                    }))
                })()
              },
              F = function (t) {
                return function () {
                  var n = e.addToast,
                    a = e.block,
                    r = e.createLocalApiErrorHandler
                  g(!1),
                    a(t).then(function () {
                      n({ action: { label: we.c, onAction: A(t) }, text: we.a })
                    }, r(ce.a)),
                    f('block')
                }
              },
              A = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), f('unblock')
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
                    Re.b,
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
                    u(!1), g(!0)
                  },
                  onLeave: C,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (f('report'), l.push(Object(O.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              xe.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: Le, onLeftClick: C, onRightClick: w, rightText: Me })
                : null,
              d
                ? y.a.createElement(Te.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: I,
                    onConfirm: R,
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
        je = n('yw4N'),
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
                    xe.b.isMobileOS() && i._fetchConversation(e)
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
                      y.a.createElement(Be, {
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
                  h = m.attachment,
                  g = m.composerHeight
                return y.a.createElement(
                  V.b,
                  { key: l },
                  y.a.createElement(
                    He.a,
                    { allowDragDrop: !Je(h), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    y.a.createElement(
                      je.a,
                      {
                        style: [
                          re.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(r) && { paddingBottom: g },
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
              v()(
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
                  h = l.location,
                  g = l.newConversationParticipants,
                  v = l.perspective,
                  f = l.scribeAction,
                  y = l.scribeNamespace,
                  b = l.sendMessage,
                  _ = l.tweetAttachment,
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
                  var R,
                    T = null == S || null === (R = S.media) || void 0 === R ? void 0 : R.mediaFile,
                    w = null != T && T.isVideo ? 'video' : null != T && T.isGif ? 'gif' : 'photo'
                  x = T ? w : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    f(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
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
                          { senderId: v, cardUrl: s, conversationId: d, text: t, tweetAttachment: _ },
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
                              t && o(t)
                            } else u(Z.b)(e)
                        }))
                    : (b({
                        senderId: v,
                        recipients:
                          g &&
                          g.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: _,
                      }).then(function (e) {
                        f(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: g ? g.length + 1 : 0,
                          conversation_type: $.j.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          m.replace('/messages/'.concat(e))
                      }, u(Z.b)),
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
                    l = e.draftText,
                    o = e.dtabBarInfo,
                    s = e.history,
                    c = e.isUploading,
                    d = e.mediaUploadProgress,
                    u = e.quickReplyOptions,
                    p = e.removeMedia,
                    m = e.richTextInputContext,
                    h = e.scribeNamespace,
                    g = e.typeaheadWrapper,
                    v = this.state,
                    f = v.attachment,
                    b = v.isSending,
                    _ = this.props.prefillText || l
                  return null != a && a.read_only
                    ? null
                    : y.a.createElement(U.a, {
                        attachment: f,
                        conversationId: r,
                        disabled: c,
                        dtabBarInfo: o,
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
                        typeaheadWrapper: g,
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
                            : n.status) === E.PAGINATION_STATUS.AT_END && (r = !1),
                            a.setState({ hasLoadedSnapshot: !0, shouldScrollToCenter: r })
                        })
                        .catch(function (e) {
                          return a.setState({ hasLoadedSnapshot: !0 }), i(e)
                        }))
                    : o({ conversationId: e })
                        .then(function () {
                          return c(e)
                        })
                        .catch(i(Object(j.a)(e)))
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
                    d = !r || !r.type || r.type === E.CONVERSATION_TYPE.GROUP,
                    u = r && (null == r || null === (t = r.participants) || void 0 === t ? void 0 : t.length) <= 1
                  return c || d || u ? Promise.resolve() : a(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(Ze, 'contextType', se.a), v()(Ze, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Fe.a)()(B(Ze))
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
    'ShJ/': function (e, t, n) {
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
                d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
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
    VcIV: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return oe
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('KqXw'), n('MvUL'), n('0zG9'), n('MMRb')),
        l = n('ERkP'),
        o = n.n(l),
        s = n('1YZw'),
        c = n('HPNB'),
        d = n('v6aA'),
        u = n('V/6K'),
        p = n('3XMw'),
        m = n.n(p),
        h = n('tI3i'),
        g = n.n(h),
        v = n('xZGM'),
        f = n('YemM'),
        y = n('Irs7'),
        b = n('0KEI'),
        _ = n('uDfI'),
        E = n('ii+P'),
        S = n('zCf4'),
        k = n('MWbm'),
        C = n('mjJ+'),
        I = n('eb3s'),
        x = n('ZToW'),
        R = n('cHvH'),
        T = n('kb9v'),
        w = n('IG7M'),
        F = n('6u/5'),
        A = n.n(F),
        O = n('PJTX'),
        M = n.n(O),
        L = n('pHkl'),
        D = n('X/yg'),
        P = n('yiKp'),
        N = n.n(P),
        K = n('Lsrn'),
        B = n('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M17.931 2.508c0 .42-.34.75-.75.75h-8.39l1.38 2.08-.56 5.78-.47.16c-1.5.49-3.1 2.07-3.37 3.31-.07.35-.39.59-.73.59-.05 0-.11 0-.16-.01-.4-.09-.66-.49-.58-.89.39-1.81 2.24-3.52 3.91-4.25l.42-4.3-1.35-2.02c-.26-.38-.29-.87-.07-1.29.24-.41.66-.66 1.11-.66h8.86c.41 0 .75.34.75.75zm3.09 12.76c-.14.17-.46.46-1.05.46h-3.86l-2.64 6.1c-.12.28-.39.45-.69.45s-.57-.17-.69-.45l-1.96-4.53c-.16-.38.01-.82.39-.98.38-.17.82.01.99.39l1.27 2.93 1.69-3.91h-1.61c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.81c-.41-1.06-1.64-2.26-2.91-2.82-.09-.04-.16-.09-.22-.16-.22-.21-.3-.54-.17-.83.17-.38.61-.55.99-.39 1.59.7 3.5 2.43 3.89 4.25.06.25.03.66-.23.99zm.839-12.259L3.2 21.659c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.29-.29-.29-.76 0-1.06L20.8 1.939c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07z',
              }),
            ),
          )
        }
      j.metadata = { width: 24, height: 24 }
      var H = j,
        U = n('ShJ/'),
        V = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(B.a)(
            'svg',
            N()(
              N()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [K.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M28.05 6.52h-5.42V4.887c0-1.548-1.26-2.808-2.81-2.808h-7.54c-1.548 0-2.807 1.26-2.807 2.808v1.63H4.05c-.414 0-.75.337-.75.75s.336.75.75.75h.753L7 26.435c.27 1.504 1.657 2.554 3.37 2.554h11.36c1.713 0 3.1-1.05 3.376-2.598l2.19-18.37h.753c.413 0 .75-.337.75-.75s-.336-.75-.75-.75zM10.972 4.887c0-.72.586-1.308 1.307-1.308h7.542c.72 0 1.308.587 1.308 1.308v1.63H10.972V4.89zm12.65 21.28c-.163.91-1.068 1.32-1.893 1.32H10.37c-.824 0-1.73-.41-1.887-1.276L6.313 8.02h19.472l-2.162 18.148z',
              }),
              o.a.createElement('path', {
                d: 'M13.312 23.123c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75zm5.486 0c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      V.metadata = { width: 32, height: 32 }
      var W = V,
        q = n('zIWA'),
        z = n('5pef'),
        G = n('IpT4'),
        Q = n('fz3c'),
        Y = m.a.a30a206d,
        X = m.a.ib4b1b85,
        J = m.a.bd3ca2ee,
        $ = {
          confirmButtonLabel: m.a.bb1d57b6,
          actionTextLeave: m.a.g9074da4,
          header: m.a.gdf4b79f,
          text: m.a.h09b49f7,
        },
        Z = m.a.ad63377d,
        ee = m.a.e1c9ec9b,
        te = m.a.i6b19b07,
        ne = m.a.e3cfff7c,
        ae = m.a.f398722d,
        re = m.a.bdd91963,
        ie = m.a.a8ed0eca,
        le = m.a.jac4eb1e
      function oe(e) {
        var t = e.conversation,
          n = e.conversationId,
          a = e.conversationType,
          l = e.inboxType,
          p = e.isHovered,
          m = e.isPinned,
          h = e.isSnoozed,
          F = e.participantCount,
          O = e.pinConversation,
          P = e.position,
          N = e.relayId,
          K = e.unpinConversation,
          B = Object(y.b)(),
          j = Object(b.useCreateLocalApiErrorHandler)('DIRECT_MESSAGES_INBOX_ITEM'),
          V = Object(_.c)(),
          oe = M()(),
          se = o.a.useContext(d.a).featureSwitches,
          ce = Object(S.f)(),
          de = o.a.useContext(u.a).isDrawer,
          ue = se.getValue('dm_conversation_labels_max_pinned_count'),
          pe = se.isTrue('dm_conversation_labels_pinned_education_enabled') && !m && 1 === P,
          me = o.a.useState(!1),
          he = r()(me, 2),
          ge = he[0],
          ve = he[1],
          fe = o.a.useState(!1),
          ye = r()(fe, 2),
          be = ye[0],
          _e = ye[1],
          Ee = Object(E.a)(v.t),
          Se = r()(Ee, 2),
          ke = Se[0],
          Ce = Se[1],
          Ie = o.a.useState(pe && ke),
          xe = r()(Ie, 2),
          Re = xe[0],
          Te = xe[1]
        o.a.useEffect(
          function () {
            if (Re) return Ce
          },
          [Ce, Re],
        )
        var we = function () {
            var e = a === i.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
              t = {
                conversation_type: a === i.CONVERSATION_TYPE.GROUP ? L.j.GROUP : L.j.ONE_TO_ONE,
                conversation_id: n,
                conversation_participant_count: F,
                position: P,
                inbox_type: Object(D.i)(l),
                entry_point: L.c.THREE_DOT_MENU,
              }
            _e(!1),
              B.scribe({ element: 'thread', action: e, data: t }),
              m && Me(),
              V(i.leaveConversation({ conversationId: n }))
                .then(function () {
                  N &&
                    A()(oe, function (e) {
                      e.delete(N)
                    })
                })
                .catch(j({ showToast: !0 })),
              ce.replace(Object(D.f)(l))
          },
          Fe = function (e) {
            return function () {
              e && e(), ve(!1)
            }
          },
          Ae = function (t) {
            return function () {
              var a = e.userId,
                r = Q.a.DMConversation
              if ((B.scribeAction('report'), Object(Q.g)(se, r))) {
                var i = Object(Q.d)({
                  clientReferer: window.location.pathname,
                  isMedia: !1,
                  isPromoted: !1,
                  reportType: r,
                  reportedConversationId: n,
                  reportedUser: a,
                  scribeNamespace: B.contextualScribeNamespace,
                })
                t.push({
                  pathname: '/i/safety/report_story_start',
                  state: { input: { requested_variant: JSON.stringify(i) } },
                })
              } else {
                var o = Object(D.g)(n, window.location.pathname, B.contextualScribeNamespace, l)
                t.push(o)
              }
            }
          },
          Oe = function () {
            if (h)
              V(i.enableNotifications({ conversationId: n })).then(function () {
                N &&
                  A()(oe, function (e) {
                    var t = e.get(N)
                    g()(t, 'relayId must be defined')
                    var n = t.getLinkedRecord('perspectival_conversation_metadata')
                    g()(n, 'metadataRef must be defined'), n.setValue(!1, 'muted')
                  }),
                  V(Object(s.b)({ ariaOnly: !0, text: le }))
              })
            else {
              var e = {
                conversation_type: a === i.CONVERSATION_TYPE.GROUP ? L.j.GROUP : L.j.ONE_TO_ONE,
                conversation_id: n,
                conversation_participant_count: F,
                entry_point: L.c.THREE_DOT_MENU,
              }
              B.scribe({ element: 'thread', action: 'mute_dm_thread_forever', data: e }),
                V(i.disableNotifications({ conversationId: n })).then(function () {
                  N &&
                    A()(oe, function (e) {
                      var t = e.get(N)
                      g()(t, 'relayId must be defined')
                      var n = t.getLinkedRecord('perspectival_conversation_metadata')
                      g()(n, 'metadataRef must be defined'), n.setValue(!0, 'muted')
                    }),
                    V(Object(s.b)({ ariaOnly: !0, text: ae }))
                })
            }
          },
          Me = function () {
            var r = e.togglePinStateEvolution,
              l = m ? 'unpin_dm_conversation' : 'pin_dm_conversation',
              o = m ? K : O,
              s = {
                conversation_type: a === i.CONVERSATION_TYPE.GROUP ? L.j.GROUP : L.j.ONE_TO_ONE,
                conversation_id: n,
                conversation_participant_count: F,
                position: P,
              }
            B.scribe({ element: 'thread', action: l, data: s }), r ? r() : t && o && o(n, t)
          },
          Le = function (e) {
            var t = [
              { Icon: m ? H : U.a, onClick: Me, text: m ? re : ee, withBottomBorder: !0 },
              {
                Icon: W,
                isEmphasized: !0,
                onClick: function () {
                  return _e(!0)
                },
                text: Z,
                withBottomBorder: !0,
              },
              { Icon: q.a, onClick: Ae(ce), text: te, withBottomBorder: !0 },
              { Icon: h ? z.a : G.a, onClick: Oe, text: h ? ie : ne, withBottomBorder: !0 },
            ]
            return o.a.createElement(C.a, { items: t, onCloseRequested: Fe(e), shouldCloseOnClick: !0 })
          },
          De = !x.a.isEnabled || p || ge || Re
        return o.a.createElement(
          o.a.Fragment,
          null,
          be
            ? o.a.createElement(I.a, {
                confirmButtonLabel: $.confirmButtonLabel,
                confirmButtonType: 'destructiveFilled',
                headline: $.header,
                onCancel: function () {
                  return _e(!1)
                },
                onConfirm: we,
                text: $.text,
              })
            : null,
          De
            ? o.a.createElement(R.a, null, function (e) {
                var t = e.windowWidth,
                  n = c.a.isTwoColumnLayout(t)
                return o.a.createElement(
                  k.a,
                  { style: f.a.menuContainer },
                  o.a.createElement(
                    T.a,
                    {
                      actionPrimary: {
                        text: Y,
                        onClick: function () {
                          return Te(!1)
                        },
                      },
                      headline: X,
                      onDismiss: function () {
                        return Te(!1)
                      },
                      shouldDisplay: Re && !de,
                      text: J({ count: ue }),
                      withMask: !n,
                    },
                    n
                      ? o.a.createElement(w.a, {
                          onClick: function () {
                            return ve(!0)
                          },
                          renderActionMenu: Le,
                          style: De ? f.a.menu : f.a.hiddenMenu,
                        })
                      : null,
                  ),
                  n
                    ? null
                    : o.a.createElement(w.a, {
                        onClick: function () {
                          return ve(!0)
                        },
                        renderActionMenu: Le,
                        style: De ? f.a.menu : f.a.hiddenMenu,
                      }),
                )
              })
            : null,
        )
      }
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
          return g
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
      function h(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function g(e, t) {
        return !!(e && e.video && h(t)) && !!e.video.audio_only
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
        b = function (e) {
          return e === l.d.TERTIARY
            ? '/messages/requests/additional'
            : e === l.d.SECONDARY
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
        l,
        o,
        s,
        c,
        d,
        u,
        p,
        m,
        h,
        g,
        v,
        f,
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
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationInfo',
                        kind: 'LinkedField',
                        name: 'legacy',
                        plural: !1,
                        selections: [
                          (o = {
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
                              o,
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
                                          l,
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
                  (g = {
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
                  (v = {
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
                                      (f = {
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
                                      f,
                                      {
                                        kind: 'InlineFragment',
                                        selections: [
                                          i,
                                          l,
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
                  g,
                  v,
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
        h = n('9Xij'),
        g = n('Znyr'),
        v = n('cm6r'),
        f = n('U+bB'),
        y = n('MWbm'),
        b = s.a.fd48249b,
        _ = d.a.create(function (e) {
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
        E = d.a.create(function (e) {
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
        k = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            y.a,
            { style: E.container },
            r.a.createElement(y.a, { style: E.left }, t),
            r.a.createElement(y.a, { style: E.right }, n),
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
              { key: t.id_str, style: _.container },
              r.a.createElement(m.default, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  y.a,
                  { key: e.id_str, style: _.container },
                  r.a.createElement(m.default, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(h.a, { ratio: 1 }, r.a.createElement(k, { left: n[1], right: n[0] }))
            var a = r.a.createElement(C, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(k, { left: a, right: i })
          },
          a = e.conversation,
          o = e.link,
          s = e.perspective,
          E = e.withBadge,
          S = a && a.avatar_image_https,
          I = a
            ? Object(l.a)(a, s).map(function (e) {
                return e.user
              })
            : [],
          x = I.slice(0, 3),
          R =
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
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(y.a, { style: _.circle }, n(e))
            })(x),
          T =
            o ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, I),
          w = E && null != a && a.participants ? a.participants.length - 1 : 0
        return R
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                h.a,
                { ratio: 1 },
                T ? r.a.createElement(v.a, { interactiveStyles: null, link: T, testID: c.a.conversationAvatar }, R) : R,
              ),
              w
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      y.a,
                      { style: _.itemAccessory },
                      r.a.createElement(g.a, {
                        count: t,
                        standalone: !0,
                        style: _.userDecoration,
                        textColor: 'text',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: b,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: w })
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
    d9IC: function (e, t, n) {
      'use strict'
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        l = n.n(i),
        o = n('Irs7'),
        s = n('MWbm'),
        c = n('/yvb'),
        d = n('t62R'),
        u = n('rHpw'),
        p = l.a.b08821f3,
        m = l.a.e047b8fa,
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
        var t = Object(o.b)(),
          n = e.clearRecentSearches,
          a = e.headerText,
          i = e.icon,
          l = e.isInboxLabelHeader,
          u = e.withClearButton
        r.a.useEffect(
          function () {
            t.scribe({ component: 'recent_search', action: 'impression' })
          },
          [t],
        )
        var g,
          v = [h.root, l && h.labelHeader]
        return r.a.createElement(
          s.a,
          { style: v },
          r.a.createElement(
            s.a,
            { style: h.iconContainer },
            (g = i) ? r.a.createElement(g, { style: h.icon }) : null,
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
        l = n('MMRb'),
        o = n('yiKp'),
        s = n.n(o),
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
        g = n('zQEV'),
        v = n('4n2h'),
        f = h(function (e) {
          var t = e.entry,
            n = e.entryType,
            a = e.isSelected,
            l = void 0 !== a && a,
            o = e.perspective,
            s = e.unread,
            c = void 0 !== s && s,
            d = e.users,
            u = Object(g.a)(t, n, o, d),
            p = Object(v.b)(c),
            m = Object(v.a)(c, l)
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
        R = I.a.dedfd265
      var T = I.a.a876e58b,
        w = I.a.bf584cd1,
        F = I.a.a9cc8cfd,
        A = I.a.e20b65b0,
        O = I.a.e5bfe07d,
        M = I.a.b1a614fe,
        L = E(function (e) {
          var t = e.entry,
            n = e.perspective,
            a = e.isGroupDM,
            l = e.unread,
            o = void 0 !== l && l,
            s = e.user,
            c = void 0 === s ? {} : s,
            d = e.recipient,
            u = void 0 === d ? {} : d,
            p = e.isSelected,
            m = void 0 !== p && p,
            h = r.a.useContext(y.a).featureSwitches,
            g = t && t.message_data
          if (!g) return null
          var f = g.attachment,
            b = f && !!(f.video || f.photo || f.animated_gif || f.tweet || f.fleet || f.sticker || f.card),
            _ = n === c.id_str,
            E = !(!b || !_) || !(!a || _),
            C = c.name,
            L = u.name,
            D = Object(v.b)(o),
            P = Object(v.a)(o, m),
            N = [
              E && r.a.createElement(i.b, { key: 'senderName' }, x(C), ' '),
              g &&
                g.text &&
                r.a.createElement(k.a, {
                  displayTextRange: [0, g.text.length],
                  entities: g.entities,
                  key: 'message',
                  text: g.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            f &&
              (f.tweet
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
                : f.fleet
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
                  })(_, L, g.text))
                : f.video
                ? (N = Object(S.l)(f, h)
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
                      : R
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
                    : T)
                : f.photo
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
                : f.animated_gif
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
                : f.sticker
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
                : f.card &&
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
        P = function (e, t) {
          return t.senderId ? u.e.select(e, t.senderId) : void 0
        },
        N = function (e, t) {
          return Object(D.n)(e, t.reactionEntry.message_id)
        },
        K = function (e, t) {
          var n = N(e, t)
          return n && n.message_data && u.e.select(e, n.message_data.sender_id)
        },
        B = Object(p.a)().propsFromState(function () {
          return { reactingUser: P, reactedMessageEntry: N, messageUser: K }
        }),
        j = n('33Kz'),
        H = B(function (e) {
          var t,
            n = e.isGroupDM,
            a = e.isSelected,
            l = void 0 !== a && a,
            o = e.messageUser,
            s = e.perspective,
            c = e.reactedMessageEntry,
            d = e.reactingUser,
            u = e.reactionEntry,
            p = e.unread,
            m = void 0 !== p && p,
            h = r.a.useContext(y.a).featureSwitches,
            g = c && c.message_data,
            f = g && g.attachment,
            b = g && g.text,
            _ = o && o.screen_name,
            E = s === (d && d.id_str),
            S = d && d.name,
            k = Object(j.b)(u.reaction_key || '', h),
            C = Object(v.b)(m),
            x = Object(v.a)(m, l)
          return (
            (t =
              f && f.tweet
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
                : f && f.video
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
                : f && f.photo
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
                : f && f.animated_gif
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
                : f && f.card
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
                  ? (function (e, t, n, a, l) {
                      return e
                        ? r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            r.a.createElement(i.b, null, a),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, l),
                          )
                        : r.a.createElement(
                            I.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, a),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, l),
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
        U = n('H4nC'),
        V = n('b9JY'),
        W = I.a.fb3ccb55
      t.a = function (e) {
        var t = e.conversationType,
          n = e.entry,
          a = e.isSelected,
          o = void 0 !== a && a,
          s = e.perspective,
          c = e.unread
        if (n.marked_as_spam) {
          var d = Object(v.b)(c),
            u = Object(v.a)(c, o)
          return r.a.createElement(i.b, { color: u, numberOfLines: 1, weight: d }, W)
        }
        if (Object(V.b)(n)) {
          var p = n.message_data,
            m = (p = void 0 === p ? {} : p).recipient_id,
            h = p.sender_id
          return r.a.createElement(L, {
            entry: n,
            isGroupDM: t === l.CONVERSATION_TYPE.GROUP,
            isSelected: o,
            perspective: s,
            recipientId: m,
            senderId: h,
            unread: c,
          })
        }
        return Object(V.c)(n)
          ? r.a.createElement(H, {
              isGroupDM: t === l.CONVERSATION_TYPE.GROUP,
              isSelected: o,
              perspective: s,
              reactionEntry: n,
              senderId: n.sender_id,
              unread: c,
            })
          : Object(V.a)(n)
          ? r.a.createElement(f, { entry: n, entryType: n.type, isSelected: o, perspective: s, unread: c })
          : Object(V.d)(n)
          ? r.a.createElement(U.a, { entry: n, isCompact: !0, isSelected: o, unread: c })
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
        l = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        h = n.n(m),
        g = n('KEM+'),
        v = n.n(g),
        f = (n('2G9S'), n('3voH'), n('ERkP')),
        y = n.n(f),
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
        R = n.n(x),
        T = (n('lTEL'), n('7x/C'), n('kYxP'), n('CDB5')),
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
        B = function (e) {
          return function (t) {
            return T.c(e, t)
          }
        },
        j = function (e) {
          return function (t, n) {
            return T.a(e, t, n)
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
            return T.l(e, N(0, t))
          },
          gifMetadata: function (e, t) {
            return T.h(e, N(0, t))
          },
          isUploading: function (e, t) {
            return T.j(e, N(0, t))
          },
          media: function (e, t) {
            return T.i(e, N(0, t))
          },
          mediaUploadProgress: function (e, t) {
            return T.k(e, N(0, t))
          },
        },
        V = Object(S.a)()
          .propsFromState(function () {
            return R()(R()({}, H), U)
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = e.dataSaverMode,
              a = e.draftText,
              r = e.dtabBarInfo,
              i = e.entries,
              l = e.gifMetadata,
              o = e.inboxUnreadCount,
              s = e.isDmReceiptSettingEnabled,
              c = e.isUnread,
              d = e.isUploading,
              u = e.media,
              p = e.mediaUploadProgress,
              m = e.perspective,
              h = e.quickReplyOptions,
              g = e.users,
              v = e.visibility,
              f = null == t ? void 0 : t.data
            return {
              conversation: f && Object(O.a)(f, i, g),
              perspective: m,
              dataSaverMode: n,
              draftText: a,
              dtabBarInfo: r,
              gifMetadata: l,
              inboxUnreadCount: o,
              isDmReceiptSettingEnabled: s,
              isUploading: d,
              isUnread: c,
              media: u,
              mediaUploadProgress: p,
              quickReplyOptions: h,
              visibility: v,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              addMedia: j(t),
              addToast: w.b,
              createLocalApiErrorHandler: Object(k.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationHistory: _.fetchConversationHistory,
              removeMedia: B(t),
              saveText: T.f,
              sendMessage: T.m,
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
        le = n('rHpw'),
        oe = n('v6aA'),
        se = n('95Se'),
        ce = n('Avzu'),
        de = n('Lsrn'),
        ue = n('k/Ka'),
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            R()(
              R()({}, e),
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
            R()(
              R()({}, e),
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
      var ge = he,
        ve = n('x0mb'),
        fe = J.a.a2f8105f,
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
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), '_headerBar', y.a.createRef()),
              v()(d()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              v()(d()(e), '_renderLeftControl', function () {
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
              v()(d()(e), '_getButtonType', function () {
                var t = e.props,
                  n = t.hasNewMessages
                return t.isHighlighted && n ? 'onMediaText' : 'primaryText'
              }),
              v()(d()(e), '_renderRightControl', function () {
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
                        icon: y.a.createElement(ge, null),
                        onPress: e._handleToggleVisibility,
                        type: a,
                      }),
                )
              }),
              v()(d()(e), '_handleUnpopConvo', function () {
                ;(0, e.props.popOutConversation)(null)
              }),
              v()(d()(e), '_handleToggleVisibility', function () {
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
              v()(d()(e), '_handleToggleVisibilityKeyboard', function () {
                e._handleToggleVisibility(), e._headerBar && e._headerBar.current && e._headerBar.current.focus()
              }),
              v()(d()(e), '_handleNewMessage', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribe({ section: 'compose_drawer', component: 'dm', action: 'show' }),
                  a.push({ pathname: '/messages/compose', state: { source: 'drawer' } })
              }),
              v()(d()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.conversationTitle,
                  a = t.hasNewMessages,
                  r = t.isHighlighted,
                  i = n || y.a.createElement(re.b, null, fe)
                return y.a.createElement(
                  te.a,
                  { style: Ie.titleContainer },
                  y.a.createElement(te.a, { style: [Ie.titleTextRoot, r && a ? Ie.titleTextHighlighted : null] }, i),
                  a
                    ? y.a.createElement(
                        te.a,
                        { style: Ie.newMessageDotContainer },
                        y.a.createElement(ve.a, {
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
                    l = r ? (i ? [Ie.headerHighlighted] : [Ie.headerActive]) : [],
                    o = this._isExpanded()
                  return y.a.createElement(
                    Z.a,
                    {
                      enabled: !0,
                      handlers:
                        ((e = {}),
                        v()(e, $.e.goLists, ee.a),
                        v()(e, $.e.toggleDMDrawer, this._handleToggleVisibilityKeyboard),
                        e),
                    },
                    y.a.createElement(
                      te.a,
                      {
                        ref: this._headerBar,
                        style: [Ie.headerRoot, !o && Ie.headerBorderClosed].concat(l, [Ie.cursor]),
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
      v()(Ce, 'contextType', oe.a)
      var Ie = le.a.create(function (e) {
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
        Re = (n('JtPf'), n('87if'), n('zb92')),
        Te = Object(Re.a)({
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
              l()(this, n),
              (r = t.call(this, e, a)),
              v()(d()(r), '_composer', y.a.createRef()),
              v()(d()(r), '_renderConversation', function (e, t) {
                var n = r.props,
                  a = n.conversationId,
                  i = n.history,
                  l = n.location
                return y.a.createElement(z.a, {
                  conversationId: a,
                  drawerHeader: r._renderHeader(),
                  history: i,
                  isWide: !1,
                  location: l,
                  richTextInputContext: e,
                  typeaheadWrapper: t,
                })
              }),
              v()(d()(r), '_isExpanded', function () {
                return r.props.visibility === Y.b.EXPANDED
              }),
              v()(d()(r), '_fetchUpdatesIfNeeded', function () {
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
                        ? y.a.createElement(Te, null, function (t) {
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
                    l = e.onDrawerOpen,
                    o = e.perspective,
                    s = e.triggerHeaderHighlight,
                    c = r ? 'white' : 'text',
                    d = r ? 'white' : 'gray700',
                    u =
                      t &&
                      t.type === W.a.ONE_TO_ONE &&
                      o &&
                      Object(Fe.a)(t, o).map(function (e) {
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
                        perspective: o,
                        textColor: c,
                        withScreenName: !1,
                      }),
                      hasNewMessages: i,
                      history: n,
                      inboxUnreadCount: a,
                      isHighlighted: r,
                      onDrawerOpen: l,
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
      v()(Le, 'contextType', oe.a), v()(Le, 'childContextTypes', { getCustomLocation: we.func })
      var De = le.a.create(function (e) {
          return { headerRoot: { position: 'sticky', top: 0, zIndex: e.componentZIndices.appBarZIndex } }
        }),
        Pe = V(Le),
        Ne = (n('i4UL'), n('K1iM')),
        Ke = n.n(Ne),
        Be = (n('tQbP'), n('4q8G')),
        je = n('tn7R'),
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
              l = e.untrustedUnreadCount,
              o = e.visibility,
              s = [],
              c = Ke()(Object(je.a)(n))
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
            s.sort(Be.a)
            var p = r > 0
            return {
              allowUntrustedInbox: 'all' === a.allow_dms_from || i > 0,
              conversationIds: s.map(function (e) {
                return e.conversation_id
              }),
              isUnread: p,
              untrustedUnreadCount: l,
              visibility: o,
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
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), '_renderHeader', function () {
                var t = e.props,
                  n = t.history,
                  a = t.isHeaderHighlighted,
                  r = t.isUnread,
                  i = t.onDrawerOpen,
                  l = t.triggerHeaderHighlight
                return y.a.createElement(
                  te.a,
                  { style: at.headerRoot },
                  y.a.createElement(xe, {
                    hasNewMessages: r,
                    history: n,
                    isHighlighted: a,
                    onDrawerOpen: i,
                    triggerHighlight: l,
                  }),
                )
              }),
              v()(d()(e), '_renderExpandedInbox', function () {
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
              v()(d()(e), '_renderEmptyDMInbox', function () {
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
              v()(d()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              v()(d()(e), '_dmDrawerOnClick', function (t, n) {
                ;(0, e.props.popOutConversation)(n), t.preventDefault()
              }),
              v()(d()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(d()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              v()(d()(e), '_renderPivot', function () {
                return e.props.allowUntrustedInbox
                  ? y.a.createElement(
                      te.a,
                      { style: at.requestPivotContainer },
                      y.a.createElement(Ge.a, {
                        label: Ze,
                        link: Object(We.b)(Y.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: e._renderPivotBadge,
                      }),
                    )
                  : null
              }),
              v()(d()(e), '_renderPivotBadge', function () {
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
      v()(nt, 'contextType', oe.a)
      var at = le.a.create(function (e) {
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
            viewportView: R()(R()({}, le.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        rt = He(nt),
        it = n('YeIG'),
        lt = n('A69o'),
        ot = 'DMDrawer',
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
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), 'state', { isHeaderHighlighted: !1, hasStartedInitialFetch: !1, unexpandedHeight: void 0 }),
              v()(d()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout.height,
                  a = e.state.unexpandedHeight
                e._isExpanded() || void 0 !== a || e.setState({ unexpandedHeight: n })
              }),
              v()(d()(e), '_showDMDrawer', function () {
                var t = e.props,
                  n = t.conversations,
                  a = t.visibility === Y.b.CLOSED
                return !e._isHideDMDrawerPath() && !Object(it.a)(n) && !a
              }),
              v()(d()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              v()(d()(e), '_triggerHeaderHighlight', function () {
                var t = e.state.isHeaderHighlighted
                e._isExpanded() ||
                  t ||
                  e._headerHighlightTimeoutId ||
                  (e.setState({ isHeaderHighlighted: !0 }),
                  (e._headerHighlightTimeoutId = setTimeout(function () {
                    e.setState({ isHeaderHighlighted: !1 }), (e._headerHighlightTimeoutId = void 0)
                  }, 3e3)))
              }),
              v()(d()(e), '_handleDrawerOpen', function () {
                e.state.isHeaderHighlighted &&
                  (e.setState({ isHeaderHighlighted: !1 }),
                  clearTimeout(e._headerHighlightTimeoutId),
                  (e._headerHighlightTimeoutId = void 0))
              }),
              v()(d()(e), '_isOnOcfFlow', function () {
                return e.props.location.pathname.startsWith('/i/flow')
              }),
              v()(d()(e), '_isOnBirdwatchPage', function () {
                return e.props.location.pathname.startsWith('/i/birdwatch')
              }),
              v()(d()(e), '_isHideDMDrawerPath', function () {
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
                    l = t.poppedOutConversationId,
                    o = t.width,
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
                                r()({ ref: t() }, s({ style: [Ue.b.root, { width: o }], testID: ot })),
                                y.a.createElement(
                                  te.a,
                                  {
                                    onLayout: d ? void 0 : e._handleLayout,
                                    style: [Ue.b.expandable, { height: d, maxHeight: d }, u && Ue.b.expanded],
                                  },
                                  l
                                    ? y.a.createElement(
                                        lt.a.Provider,
                                        { value: mt },
                                        y.a.createElement(Pe, {
                                          conversationId: l,
                                          history: n,
                                          isHeaderHighlighted: c,
                                          location: a,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          perspective: i,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      )
                                    : y.a.createElement(
                                        lt.a.Provider,
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
      v()(ht, 'defaultProps', { width: b.a.dmDrawerWidth.max })
      var gt = C(ht)
      t.default = Object(st.a)(gt)
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
    gEJU: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('eb3s'),
        l = n('3XMw'),
        o = n.n(l),
        s = o.a.a219e217,
        c = o.a.d571e4f8,
        d = o.a.a551bf7d
      function u(e) {
        var t = e.count,
          n = e.setShowPinError
        return r.a.createElement(i.a, {
          confirmButtonLabel: s,
          headline: c({ count: t }),
          onConfirm: function () {
            return n(!1)
          },
          text: d,
          withCancelButton: !1,
        })
      }
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
        h = n('k89r')
      function g(e) {
        var t,
          n,
          a,
          i,
          l,
          o =
            ((t = r.a.useState(y.activeVoiceMessage)),
            (n = r.a.useState(y.playerApi)),
            (a = r.a.useState(y.playerState)),
            (l = Object(h.a)()),
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
        return r.a.createElement(b.Provider, { value: o }, e.children)
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
        return Object(d.k)(t) ? r.a.createElement(g, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = b
    },
    'ii+P': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
      })
      n('FtFR')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('wtru')
      function l(e) {
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
      t.a = l
    },
    kb9v: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        l = n.n(i),
        o = n('TIdA'),
        s = n('t62R'),
        c = n('A91F'),
        d = n('/yvb'),
        u = n('Eqye'),
        p = n('efqG'),
        m = n('sgih'),
        h = n('rHpw'),
        g = n('MWbm'),
        v = n('3dyc'),
        f = h.a.create(function (e) {
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
          x = l.a.useState(!1),
          R = r()(x, 2),
          T = R[0],
          w = R[1],
          F = function (e) {
            return l.a.createElement(
              p.a,
              {
                onDismiss: N,
                renderContent: function () {
                  return O(N)
                },
                switchOnlyOnXSmallBreakpoint: !0,
                visibilityBehavior: v.b.forceVisible,
                withArrow: !0,
                withFixedPosition: !0,
                withMask: I,
              },
              e,
            )
          },
          A = function () {
            return l.a.createElement(
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
            return l.a.createElement(
              g.a,
              { style: [f.root, _ && f.rootWithImage] },
              M(),
              l.a.createElement(
                g.a,
                { style: f.container },
                L(),
                D(),
                P({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                P({ action: n, dismiss: e }),
              ),
            )
          },
          M = function () {
            var e = y && l.a.createElement(y, { style: b ? [f.icon, { color: h.a.theme.colors[b] }] : f.icon })
            return (
              _ &&
                !u.a.isEnabled &&
                (e = l.a.createElement(o.a, { accessibilityLabel: '', aspectMode: c.a.exact(2), image: _ })),
              e && l.a.createElement(g.a, { style: f.graphic }, e)
            )
          },
          L = function () {
            return l.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, i)
          },
          D = function () {
            return l.a.createElement(s.b, { color: 'gray700', style: f.description }, k)
          },
          P = function (e) {
            var t = e.action,
              n = e.dismiss,
              a = e.type
            return (
              t &&
              l.a.createElement(
                d.a,
                {
                  link: t.link && t.link,
                  onPress: t.onClick ? t.onClick : n,
                  size: 'large',
                  style: f.actionButton,
                  type: a,
                },
                t.text,
              )
            )
          },
          N = function () {
            E && E(), w(!0)
          }
        return S && !T ? (a ? F(a) : A()) : a || null
      }
    },
    lBmi: function (e, t, n) {
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
        return v
      }),
        n.d(t, 'b', function () {
          return f
        }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'd', function () {
          return b
        })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('HPNB'),
        l = n('v6aA'),
        o = n('jYSG'),
        s = n('3XMw'),
        c = n.n(s),
        d = n('AQ79'),
        u = n('+Bsv'),
        p = n('MWbm'),
        m = n('cHvH'),
        h = n('t62R'),
        g = n('rHpw'),
        v = c.a.bef0039f,
        f = function (e) {
          switch (e) {
            case d.d.SECONDARY:
              return '/messages/requests'
            case d.d.TERTIARY:
              return '/messages/requests/additional'
            case d.d.PRIMARY:
            default:
              return '/messages'
          }
        },
        y = function (e, t) {
          return r.a.createElement(l.a.Consumer, null, function (n) {
            var a = n.featureSwitches.isTrue('responsive_web_settings_revamp_enabled') ? e : '/settings/safety'
            return r.a.createElement(u.a, { pullRight: t, to: a })
          })
        },
        b = function (e) {
          return r.a.createElement(m.a, null, function (t) {
            var n = t.windowWidth,
              a = i.a.isTwoColumnLayout(n),
              l = 0 === e.length
            return a || l
              ? null
              : r.a.createElement(
                  p.a,
                  { style: _.stickyCopyContainer },
                  r.a.createElement(h.b, { style: _.stickyCopy }, o.a),
                )
          })
        },
        _ = g.a.create(function (e) {
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
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return h
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
          return h(u, t, r, a)
        }
      }
      var h = function () {
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
              h = Object(i.a)(o.slice(0, a), d)
            return a ? m({ listOfParticipants: h, count: o.length - a }) : h
        }
      }
    },
    pXKu: function (e, t, n) {
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
        h = n.n(m),
        g = n('KEM+'),
        v = n.n(g),
        f = (n('vrRf'), n('ERkP')),
        y = n.n(f),
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
        R = n('3XMw'),
        T = n.n(R),
        w = T.a.fd6150fc,
        F = y.a.createElement(
          T.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.a.createElement(I.b, { link: '/privacy' }, T.a.d42d239f),
        ),
        A = T.a.j24c37b2,
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
        B =
          (n('hBpG'),
          n('7x/C'),
          n('2G9S'),
          n('z84I'),
          n('ho0z'),
          n('tQbP'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('6U7i'),
          n('hBvt'),
          n('lTEL'),
          n('kYxP'),
          n('1YZw')),
        j = n('hqKg'),
        H = n('AQOc'),
        U = n('G6rE'),
        V = n('oEGd'),
        W = function (e, t) {
          return t.conversationId
        },
        q = Object(j.createSelector)(
          W,
          function (e, t) {
            return M.selectConversation(e, W(0, t))
          },
          M.selectEntries,
          U.e.selectAll,
          function (e, t) {
            return !M.selectConversationIsRead(e, W(0, t))
          },
          function (e, t) {
            var n = W(0, t)
            return Object(M.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(E.D)(e, E.t)
          },
          function (e, t, n, a, r, i, l) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(H.a)(t.data, n, a),
              conversationId: e,
              unread: r,
              inboxType: i,
              shouldShowPinnedEducation: l,
            }
          },
        ),
        z = {
          addFlag: E.z,
          addRecentSearch: M.addRecentSearches,
          addToast: B.b,
          block: U.e.block,
          createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: M.disableNotifications,
          enableNotifications: M.enableNotifications,
          leaveConversation: M.leaveConversation,
          muteDMUser: M.muteDMUser,
          unmuteDMUser: M.unmuteDMUser,
          unblock: U.e.unblock,
        },
        G = Object(V.f)(q, z),
        Q = n('aA19'),
        Y = n('OhSZ'),
        X = n('fQBn'),
        J = n('Myq3'),
        $ = n('3wZR'),
        Z = n('XnpN'),
        ee = n('X/yg'),
        te = n('IpT4'),
        ne = n('VcIV'),
        ae = n('aWyx'),
        re = n('YemM'),
        ie = 'conversation',
        le = n('MWbm'),
        oe = n('Irs7'),
        se = n('8hvq'),
        ce = n('Znyr'),
        de = n('0PHd'),
        ue = n('yrzJ'),
        pe = n('Xrkv'),
        me = n('GBcw'),
        he = n('cm6r'),
        ge = n('htQn'),
        ve = n('5mJL'),
        fe = n('AQ79'),
        ye = n('pHkl'),
        be = function (e) {
          var t
          return Boolean(
            null == e || null === (t = e.labels) || void 0 === t
              ? void 0
              : t.find(function (e) {
                  return e.label_type === fe.a.PINNED
                }),
          )
        },
        _e = function (e) {
          var t = e.children
          return y.a.createElement(le.a, { style: re.a.socialProofContainer }, t)
        },
        Ee = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(
                d()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                d()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              v()(d()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered,
                  i = e.props,
                  l = i.conversation,
                  o = i.conversationId,
                  s = i.inboxType,
                  c = i.pinConversation,
                  d = i.position,
                  u = i.unpinConversation
                if (l && c && u) {
                  var p = be(l),
                    m = l.notifications_disabled,
                    h = l.participants.length || 0,
                    g = l.type === M.CONVERSATION_TYPE.GROUP ? '0' : e._getUserIdOfOneToOneConvo()
                  return y.a.createElement(ne.a, {
                    conversation: l,
                    conversationId: o,
                    conversationType: l.type,
                    inboxType: s,
                    isHovered: n || a || r,
                    isPinned: p,
                    isSnoozed: m,
                    participantCount: h,
                    pinConversation: c,
                    position: d,
                    unpinConversation: u,
                    userId: g,
                  })
                }
                return null
              }),
              v()(d()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered
                switch (e.props.inboxType) {
                  case fe.d.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: a, isHovered: r })
                      : null
                  case fe.d.SECONDARY:
                  case fe.d.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              v()(d()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  a = n.inboxType,
                  r = n.searchQuery,
                  i = n.unread
                    ? y.a.createElement(ce.a, {
                        pip: !0,
                        style: re.a.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (a) {
                  case fe.d.PRIMARY:
                    return e._isVDLEnabled ? i : r ? null : e._renderTimestamp(t)
                  case fe.d.SECONDARY:
                    return e._isVDLEnabled ? i : null
                  default:
                    return null
                }
              }),
              v()(d()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object($.b)(t.icon)
                return y.a.createElement(
                  I.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.a.createElement(n, { style: re.a.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(d()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var a = n[0]
                switch (a.proof_type) {
                  case ae.d.MUTUAL_FRIENDS:
                    if (0 === a.total) return null
                    var r = a.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = a.users.map(function (e) {
                        return e.name
                      })
                    return y.a.createElement(
                      _e,
                      null,
                      y.a.createElement(
                        I.b,
                        { weight: e._isVDLEnabled ? 'medium' : 'normal' },
                        y.a.createElement(de.a, {
                          displayFacepileInline: !0,
                          knownFollowersAvatarUrls: r,
                          knownFollowersCount: a.total,
                          knownFollowersNames: i,
                          textStyle: e._isVDLEnabled && re.a.socialProofText,
                          withFacepile: !e._isVDLEnabled,
                        }),
                      ),
                    )
                  default:
                    return null
                }
              }),
              v()(d()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r = t.searchQuery,
                  i = n ? Object(Z.a)(n, a) : [],
                  l = [],
                  o = function (e, t) {
                    return e.localeCompare(t)
                  },
                  s = i
                    .map(function (e) {
                      return e.user
                    })
                    .filter(function (e) {
                      var t,
                        n = null === (t = e.name) || void 0 === t ? void 0 : t.toLowerCase().includes(r)
                      return e.id_str !== a && (n && l.push(e.name), !n)
                    })
                    .map(function (e) {
                      return e.name
                    })
                    .sort(o),
                  c = l.sort(o).concat(s)
                if (n) {
                  if (n.type === M.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var d = i.map(function (e) {
                        return e.user
                      }),
                      u = K()(d, 1)[0]
                    return y.a.createElement(ue.a, { color: 'gray700', screenName: u.screen_name })
                  }
                  var p = Object(pe.a)(c, !0)
                  return y.a.createElement(I.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              v()(d()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = t.inboxType,
                  i = t.position,
                  l = e.context.loggedInUserId
                if (n) {
                  var o = Object(ee.j)(n, l),
                    s = n.participants.length || 0,
                    c =
                      (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP ? '0' : e._getUserIdOfOneToOneConvo()
                  return y.a.createElement(se.a, {
                    conversationId: a,
                    conversationType: n.type,
                    inboxType: r,
                    participant: o,
                    participantCount: s,
                    position: i,
                    userId: c,
                  })
                }
                return null
              }),
              v()(d()(e), '_getUserIdOfOneToOneConvo', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r =
                    n &&
                    Object(Z.a)(n, a).map(function (e) {
                      return e.user
                    }),
                  i = (r && r[0]) || null
                return i ? i.id_str : ''
              }),
              v()(d()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  a = n.conversation,
                  r = n.isMessageItem,
                  i =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  l = [
                    i || r ? re.a.inlineNotificationsDisabledIcon : re.a.notificationsDisabledIcon,
                    i && re.a.inlineNotificationsDisabledIconVDL,
                  ],
                  o = Number(t && r ? (null == t ? void 0 : t.time) : null == a ? void 0 : a.sort_timestamp)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    le.a,
                    { style: [r && re.a.inlineTimestamp, i && re.a.inlineTimestampVDL] },
                    a && o ? y.a.createElement(me.a, { timestamp: o }) : null,
                    null != a && a.notifications_disabled ? y.a.createElement(te.a, { style: l }) : null,
                  ),
                )
              }),
              v()(d()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  a = n.addRecentSearch,
                  r = n.analytics,
                  i = n.conversation,
                  l = n.conversationId,
                  o = n.onClick,
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
                      conversation_id: l,
                      conversation_participant_count: d,
                      conversation_type: u ? ye.j.GROUP : ye.j.ONE_TO_ONE,
                      entry_point: ye.c.ALL,
                      inbox_type: ye.e.PRIMARY,
                      dm_search_result_type: ye.a.CONVERSATION,
                      message_type: ye.f.NOT_APPLICABLE,
                      position: s,
                    },
                  }),
                  r.scribe({ component: 'recent_search', action: 'add' }),
                  a(c)),
                  o(t, l, i, s)
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
                    l = null == t ? void 0 : t.max_entry_id,
                    o = null == t ? void 0 : t.convo_label,
                    s = this.props.messageId,
                    c = e.conversation,
                    d = null == c ? void 0 : c.conversation_id,
                    u = null == c ? void 0 : c.notifications_disabled,
                    p = null == c ? void 0 : c.last_read_event_id,
                    m = null == c ? void 0 : c.sort_event_id,
                    h = null == c ? void 0 : c.max_entry_id,
                    g = null == c ? void 0 : c.convo_label,
                    v = e.messageId,
                    f = this.props,
                    y = f.filter,
                    b = f.isActive,
                    _ = e.filter,
                    E = e.isActive
                  return n !== d || a !== u || r !== p || i !== m || l !== h || s !== v || b !== E || y !== _ || o !== g
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
                    l = t.link,
                    o = t.messageId,
                    s = t.perspective,
                    c = t.position,
                    d = t.searchQuery,
                    u = t.unread,
                    p = (null == n ? void 0 : n.entries) || [],
                    m = i
                      ? p.find(function (e) {
                          return e.id === o
                        })
                      : Object(J.a)(p, function (e) {
                          return !ye.b.includes(e.type)
                        }),
                    h = [re.a.root, u && !this._isVDLEnabled && re.a.unread, a && this._isVDLEnabled && re.a.active],
                    g = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP,
                    v = this._isVDLEnabled && g
                  if (!n) return null
                  var f = !!n.convo_label,
                    b = !n.trusted && !f,
                    _ = this._renderConversationEndCell(m),
                    E = d && !i,
                    S = 'text',
                    k = 'bold'
                  return (
                    this._isVDLEnabled && !u && ((S = 'gray900'), (k = 'medium')),
                    this._isVDLEnabled && a && ((S = 'text'), (k = 'medium')),
                    !n || (!d && n.isSearchResultOnly)
                      ? null
                      : y.a.createElement(he.a, null, function (t) {
                          var o = t.isFocused,
                            p = t.isFocusedWithin,
                            g = t.isHovered
                          return y.a.createElement(
                            ge.a,
                            {
                              accessibilityRole: 'none',
                              accessibilityState: { selected: a },
                              link: {
                                pathname: null == l ? void 0 : l.pathname,
                                anchorless: !0,
                                state: r()(
                                  r()({}, null == l ? void 0 : l.state),
                                  {},
                                  { position: c, entryPoint: i ? (null == m ? void 0 : m.id) : null, isMessageItem: i },
                                ),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: ie,
                            },
                            y.a.createElement(
                              ve.a,
                              {
                                avatarCell: y.a.createElement(Q.a, { conversation: n, perspective: s, withBadge: v }),
                                avatarSize: 'xxLarge',
                              },
                              y.a.createElement(
                                le.a,
                                { style: re.a.bodyColumn },
                                y.a.createElement(
                                  le.a,
                                  { style: re.a.titleContainer },
                                  y.a.createElement(Y.b, {
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
                                    le.a,
                                    { style: [re.a.snippet, !o && !p && !g && re.a.snippetPadding] },
                                    m && !E
                                      ? y.a.createElement(X.a, {
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
                                  f ? e._renderConversationLabel(n) : null,
                                  b ? e._renderSocialProof(n) : null,
                                ),
                                _ ? y.a.createElement(le.a, { style: re.a.endCell }, _) : null,
                                e._renderConversationActions({ isFocused: o, isFocusedWithin: p, isHovered: g }),
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
      v()(Ee, 'contextType', _.a),
        v()(Ee, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var Se = Object(oe.a)(G(Ee), { page: 'messages', section: 'inbox' }),
        ke =
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
        Ce = n('oUUt'),
        Ie = n('d9IC'),
        xe = n('h3MB'),
        Re =
          (n('KqXw'),
          n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('uFXj'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        Te = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        we = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: Te, sliceItems: Re }
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
        Fe = n('MDbM'),
        Ae = n('v//M'),
        Oe = n('0yYu'),
        Me = n('rHpw'),
        Le = n('lBmi'),
        De = n('91AQ'),
        Pe = n('6ZHn'),
        Ne = T.a.c94ac69d,
        Ke = T.a.a2f8105f,
        Be = T.a.g2fd3205,
        je = T.a.ffd9cfe6,
        He = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(
                d()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              v()(
                d()(e),
                '_messagesBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_messages_bucket_size'),
              ),
              v()(
                d()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              v()(d()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  a = t.messageConversationIds,
                  r = t.peopleSearchConversationIds,
                  i = t.renderEmptyState,
                  l = r.length && n.length,
                  o = e._groupBucketSize < n.length,
                  s = e._messagesBucketSize < a.length,
                  c = e._peopleBucketSize < r.length
                return (null == n ? void 0 : n.length) || r.length || a.length
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      r.length ? e._renderPeopleSection() : null,
                      l && !c ? y.a.createElement(Oe.a, null) : null,
                      c ? e._renderDMSearchFooter(Be) : null,
                      n.length ? e._renderGroupsSection() : null,
                      o ? e._renderDMSearchFooter(Ne) : null,
                      a.length ? e._renderMessagesSection() : null,
                      s ? e._renderDMSearchFooter(Ke) : null,
                    )
                  : i()
              }),
              v()(d()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              v()(d()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return y.a.createElement(
                  le.a,
                  { style: Ve.header },
                  y.a.createElement(I.b, { link: { pathname: n.pathname, state: { tab: t } } }, je),
                )
              }),
              v()(d()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.a.createElement(Ie.a, { headerText: t, icon: n })
              }),
              v()(d()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Le.a, headerText: Ne }),
                  n
                    .map(function (e) {
                      return e ? r({ conversationIds: n, pinConversation: a, unpinConversation: i })(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              v()(d()(e), '_renderMessagesSection', function () {
                var t = e.props,
                  n = t.entryIds,
                  a = t.messageConversationIds,
                  r = t.pinConversation,
                  i = t.renderInboxItem,
                  l = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: De.a, headerText: Ke }),
                  n
                    .map(function (e) {
                      return e
                        ? (function (e) {
                            return i({
                              conversationIds: a,
                              isMessageItem: !0,
                              messageIds: n,
                              pinConversation: r,
                              unpinConversation: l,
                            })(e)
                          })(e)
                        : null
                    })
                    .slice(0, e._messagesBucketSize),
                )
              }),
              v()(d()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Pe.a, headerText: Be }),
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
                  e.module !== a && n !== Fe.a.FAILED && this._handleFetch()
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
                  return y.a.createElement(Ae.a, {
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
      v()(He, 'contextType', _.a)
      var Ue,
        Ve = Me.a.create(function (e) {
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
        We = we(He),
        qe = n('wAC9'),
        ze = (n('1IsZ'), n('IAdD'), n('xPna')),
        Ge = function (e) {
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
            Object(ze.a)(a)
          )
        },
        Qe = function (e) {
          return Object(qe.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(ye.h, '-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Ge,
          })
        },
        Ye = function (e, t) {
          return t.query
        },
        Xe = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(j.createSelector)(Ye, function (e) {
              return e ? Qe(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            a = e.pinConversation,
            r = e.query,
            i = e.renderEmptyState,
            l = e.renderInboxItem,
            o = e.sliceModule,
            s = e.unpinConversation
          return o
            ? y.a.createElement(We, {
                loadingLabel: t,
                location: n,
                module: o,
                pinConversation: a,
                query: r,
                renderEmptyState: i,
                renderInboxItem: l,
                unpinConversation: s,
              })
            : i()
        }),
        Je = M.selectRecentSearches,
        $e = function (e, t) {
          return t.query ? M.selectSearchConversations(e, t.query) : []
        },
        Ze = function (e, t) {
          return t.query ? M.selectSearchFetchStatus(e, t.query) : L.a.LOADED
        },
        et = function (e, t) {
          return t.conversationIds || []
        },
        tt = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        nt = Object(S.a)()
          .propsFromState(function () {
            return { conversationIds: et, recentSearches: Je, searchFetchStatus: Ze, searchConversationIds: $e }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              a = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: tt(a, t),
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
        at = n('VY6S'),
        rt = n('s14A'),
        it = function (e) {
          return Object(qe.a)({
            contextSuffix: 'DM_GROUP_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMGroupSearch
            },
            sliceKey: ''.concat(ye.h, '-groups-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Ge,
          })
        },
        lt = function (e) {
          return Object(qe.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(ye.h, '-people-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Ge,
          })
        },
        ot = function (e, t) {
          return t.query
        },
        st = function (e, t) {
          return t.tabType
        },
        ct = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(j.createSelector)(st, ot, function (e, t) {
              var n = t && e === ye.i.PEOPLE
              return t && e === ye.i.GROUPS ? it(t) : n ? lt(t) : void 0
            }),
          }
        }),
        dt = n('FS1z'),
        ut = ct(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            a = e.pinConversation,
            r = e.renderEmptyState,
            i = e.renderInboxItem,
            l = e.sliceModule,
            o = e.unpinConversation
          return l
            ? y.a.createElement(dt.a, {
                footer: t,
                module: l,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: i({ conversationIds: [], pinConversation: a, unpinConversation: o }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        pt = n('VPW4'),
        mt = (n('YWiL'), n('mN6z')),
        ht = n('TEoO'),
        gt = n('NjAB'),
        vt = n('Fr3L'),
        ft = n('uDfI'),
        yt = n('s8G+'),
        bt = n('DQzJ'),
        _t = void 0 !== Ue ? Ue : (Ue = n('y59G')),
        Et = 'DM_MESSAGE_SEARCH',
        St = { context: Et },
        kt = function (e) {
          return e
        },
        Ct = function (e) {
          var t,
            n,
            a,
            i = e.footer,
            l = e.noItemsRenderer,
            o = e.onScrollEnd,
            s = e.pinConversation,
            c = e.renderInboxItem,
            d = e.searchTerm,
            u = e.unpinConversation,
            p = Object(ft.c)(),
            m = Object(yt.a)('dm_inbox_search_message_attachment_previews_enabled'),
            h = Object(yt.a)('dm_inbox_search_query_highlighting_message_results_enabled'),
            g = Object(yt.a)('rito_safety_mode_blocked_profile_enabled'),
            v = Object(yt.a)('super_follow_user_api_enabled'),
            f = Object(bt.a)(_t, {
              query: d,
              withAttachments: m,
              withMessageQueryHighlights: h,
              withSafetyModeUserFields: g,
              withSuperFollowsUserFields: v,
            }),
            b = f.data,
            _ = f.fetchNext,
            E = f.hasNext,
            S = y.a.useMemo(
              function () {
                var e,
                  t,
                  n,
                  a =
                    null == b ||
                    null === (e = b.dm_message_slice_result) ||
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
                  i = null == b || null === (n = b.dm_message_slice_result) || void 0 === n ? void 0 : n.items,
                  l = Object(gt.b)(a, [xe.a]),
                  o = Object(gt.b)(i, [xe.b])
                return {
                  normalizedConversations: l,
                  normalizedMessages: o,
                  entities: r()(r()({}, null == l ? void 0 : l.entities), null == o ? void 0 : o.entities),
                }
              },
              [null == b || null === (t = b.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            k = S.entities,
            C = S.normalizedConversations,
            I = S.normalizedMessages,
            x =
              ((n = b),
              (a = y.a.useRef()),
              y.a.useEffect(function () {
                a.current = n
              }),
              a.current)
          return (
            y.a.useEffect(
              function () {
                Object(mt.a)(b, x) || p(Ge(k, !0))
              },
              [k, b, x, p],
            ),
            y.a.createElement(ht.a, {
              cacheKey: Et,
              footer: E ? null : i,
              identityFunction: kt,
              items: null == I ? void 0 : I.result,
              noItemsRenderer: l,
              onNearEnd: _,
              onScrollEnd: o,
              renderer: c({
                conversationIds: null == C ? void 0 : C.result,
                isMessageItem: !0,
                messageIds: null == I ? void 0 : I.result,
                pinConversation: s,
                unpinConversation: u,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        It = Me.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function xt(e) {
        return y.a.createElement(
          vt.a,
          { errorConfig: St },
          y.a.createElement(
            y.a.Suspense,
            { fallback: y.a.createElement(pt.a, { style: It.activityIndicatior }) },
            y.a.createElement(Ct, e),
          ),
        )
      }
      var Rt = n('j7Bv'),
        Tt = n('/yvb'),
        wt = n('VwDm'),
        Ft = n('hOZg'),
        At = T.a.dbd5d40f,
        Ot = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return l()(this, n), t.apply(this, arguments)
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
                    r = y.a.createElement(Rt.a, { Icon: wt.a, color: 'neutral', size: 'xLarge', style: Mt.searchIcon }),
                    i = [Mt.listItemView, Mt.bottomBorder]
                  return y.a.createElement(
                    ge.a,
                    { onPress: n, style: i },
                    y.a.createElement(
                      le.a,
                      null,
                      y.a.createElement(
                        ve.a,
                        { avatarCell: r, avatarSize: 'xLarge', cellStyle: Mt.avatarColumn },
                        y.a.createElement(
                          le.a,
                          { style: Mt.container },
                          y.a.createElement(I.b, { numberOfLines: 1 }, a),
                          y.a.createElement(Tt.a, {
                            accessibilityLabel: At,
                            borderColor: 'transparent',
                            icon: y.a.createElement(Ft.a, null),
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
        Mt = Me.a.create(function (e) {
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
        Lt = Ot,
        Dt = n('DbJc'),
        Pt = n('IG4P'),
        Nt = n('RJrc'),
        Kt = n('TnY3'),
        Bt = n('FIs5'),
        jt = n('6OUF'),
        Ht = n('k/OQ'),
        Ut = n('95Se'),
        Vt = 'dmSearchInbox',
        Wt = function (e) {
          return e
        },
        qt = T.a.b08821f3,
        zt = T.a.a66ac766,
        Gt = T.a.fe61929d,
        Qt = T.a.a846382a,
        Yt = T.a.b9dae4f4,
        Xt = T.a.e7fb2027,
        Jt = T.a.b92a21d8,
        $t = T.a.jdc67c42,
        Zt = T.a.e8581ccd,
        en = T.a.f08940ab,
        tn = T.a.gaae1fd5,
        nn = T.a.i5d7593a,
        an = T.a.f8321d82,
        rn = T.a.c94ac69d,
        ln = T.a.a2f8105f,
        on = T.a.g2fd3205,
        sn = T.a.fb3c8e74,
        cn = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(d()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              v()(
                d()(e),
                '_messageSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                d()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(d()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              v()(d()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = e.state.debouncedQuery
                return r && a
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    y.a.createElement(Bt.a, {
                      buttonLink: '/messages/compose',
                      buttonText: en,
                      header: Jt({ query: r }),
                      message: e._messageSearchEnabled ? Zt : $t,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.a.createElement(
                      le.a,
                      { style: mn.emptyState },
                      y.a.createElement(I.b, { align: 'center', color: 'gray700' }, e._messageSearchEnabled ? nn : tn),
                    )
              }),
              v()(d()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = t.recentSearches
                return r.length && !a
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      y.a.createElement(Ie.a, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: sn,
                        withClearButton: !0,
                      }),
                      r.map(function (t) {
                        return y.a.createElement(Lt, {
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
              v()(d()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation,
                  l = e.state.debouncedQuery
                return l
                  ? y.a.createElement(Xe, {
                      loadingLabel: zt,
                      location: n,
                      pinConversation: a,
                      query: l,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: r,
                      unpinConversation: i,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              v()(d()(e), '_renderConversationsTab', function (t) {
                var n = e.props,
                  a = n.pinConversation,
                  r = n.renderInboxItem,
                  i = n.unpinConversation,
                  l = e.state.debouncedQuery
                return y.a.createElement(ut, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  pinConversation: a,
                  query: l,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: r,
                  tabType: t ? ye.i.GROUPS : ye.i.PEOPLE,
                  unpinConversation: i,
                })
              }),
              v()(d()(e), '_renderMessagesTab', function () {
                var t = e.props,
                  n = t.pinConversation,
                  a = t.renderInboxItem,
                  r = t.unpinConversation,
                  i = e.state.debouncedQuery
                return i
                  ? y.a.createElement(xt, {
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
              v()(d()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case on:
                    return e._renderConversationsTab(!1)
                  case rn:
                    return e._renderConversationsTab(!0)
                  case ln:
                    return e._renderMessagesTab()
                  default:
                    return e._renderAllDMSearchResultsTab()
                }
              }),
              v()(d()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.searchConversationIds,
                  l = t.unpinConversation,
                  o = e.state.isRefreshing
                return y.a.createElement(
                  rt.a,
                  null,
                  y.a.createElement(
                    Pt.a,
                    { isRefreshing: o, onRefresh: e._handlePullToRefresh },
                    y.a.createElement(ht.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: Dt.a,
                      assumedItemHeight: 100,
                      cacheKey: Vt,
                      footer: e._renderFooter(),
                      identityFunction: Wt,
                      items: i,
                      noItemsRenderer: e._renderRecentSearches,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: e._handleScrollEnd,
                      renderer: r({ conversationIds: i, pinConversation: a, unpinConversation: l }),
                      withoutHeadroom: !0,
                    }),
                  ),
                )
              }),
              v()(d()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.a.createElement(Nt.a, null)
                  : y.a.createElement(
                      le.a,
                      { style: mn.footerContainer },
                      y.a.createElement(I.b, { align: 'center', size: 'body', weight: 'bold' }, Xt),
                      y.a.createElement(
                        he.a,
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
                          Yt,
                        ),
                      ),
                    )
              }),
              v()(d()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), a()
              }),
              v()(d()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              v()(d()(e), '_handleFooterClick', function () {
                var t, n
                null === (t = e._textInputRef) || void 0 === t || t.clear(),
                  null === (n = e._textInputRef) || void 0 === n || n.focus()
              }),
              v()(d()(e), '_handleRefetchSearch', function () {
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
              v()(d()(e), '_handlePullToRefresh', function () {
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
              v()(d()(e), '_handleSearchChangeInner', function (t) {
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
              v()(d()(e), '_handleSearchChangeDebounced', Object(at.a)(e._handleSearchChangeInner, 200)),
              v()(d()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  a = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (a(n), e._handleSearchChangeDebounced(n))
              }),
              v()(d()(e), '_handleNearEnd', function () {
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
              v()(d()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  a = t.analytics,
                  r = t.query
                e.state.debouncedQuery && r && (n(r), a.scribe({ component: 'recent_search', action: 'add' }))
              }),
              v()(d()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              v()(d()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              v()(d()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  a = e.props,
                  r = a.addRecentSearch,
                  i = a.analytics
                n &&
                  (r(n),
                  i.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              v()(d()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  a = n.analytics
                ;(0, n.onQueryChange)(t),
                  a.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              v()(d()(e), '_handleClearRecentSearch', function (t, n) {
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
                    l = [mn.searchInput, i ? mn.searchInputBorder : void 0],
                    o = ((null == t ? void 0 : t.state) || {}).tab,
                    s = [an, on, rn]
                  this._messageSearchEnabled && s.push(ln)
                  var c = s.map(function (e) {
                      return {
                        key: e,
                        label: e,
                        accessibilityLabel: e,
                        isActive: function () {
                          return o === e || (!o && e === an)
                        },
                        to: r()(r()({}, t), {}, { state: r()(r()({}, t.state), {}, { tab: e }) }),
                      }
                    }),
                    d = o === ln && this._messageSearchEnabled
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      le.a,
                      { style: l },
                      y.a.createElement(Tt.a, {
                        accessibilityLabel: qt,
                        icon: y.a.createElement(Ut.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.a.createElement(jt.a, {
                        Icon: wt.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? Qt : Gt,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || o === on || o === rn || d)
                      ? y.a.createElement(
                          y.a.Fragment,
                          null,
                          y.a.createElement(Ht.a, { links: c }),
                          this._renderTabContent(),
                        )
                      : y.a.createElement(Ae.a, {
                          accessibilityLabel: zt,
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
      v()(cn, 'contextType', _.a), v()(cn, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var dn,
        un,
        pn,
        mn = Me.a.create(function (e) {
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
        hn = Object(Kt.a)(nt(cn)),
        gn = n('P74S'),
        vn = n.n(gn),
        fn = n('gEJU'),
        yn = n('q8SM'),
        bn = n('HvW7'),
        _n = n.n(bn),
        En = n('PJTX'),
        Sn = n.n(En),
        kn = T.a.e4b3f520,
        Cn = T.a.ae4d666a,
        In = T.a.d98e066b,
        xn = T.a.j302dba7,
        Rn = function (e) {
          return e
        },
        Tn = void 0 !== dn ? dn : (dn = n('X8um')),
        wn = { context: 'DM_PINNED_INBOX' },
        Fn = function (e) {
          var t,
            a,
            i,
            l = Object(ft.c)(),
            o = e.accessibilityTitle,
            s = e.analytics,
            c = e.cacheKey,
            d = e.conversationIds,
            u = e.createLocalApiErrorHandler,
            p = e.footer,
            m = e.header,
            h = e.onNearEnd,
            g = e.pinnedConversationIds,
            f = e.renderEmptyDMInbox,
            b = e.renderInboxItem,
            E = e.showSearchView,
            S = e.withKeyboardShortcuts,
            k = Sn()(),
            C = Object(bt.a)(Tn, { label: fe.a.PINNED }).data,
            I = y.a.useMemo(
              function () {
                var e
                return (
                  (null == C || null === (e = C.labeled_conversation_slice) || void 0 === e ? void 0 : e.items) || []
                )
              },
              [C],
            ),
            x = Object(gt.b)(I, [xe.a]).entities,
            R = y.a.useContext(_.a).featureSwitches.getNumberValue('dm_conversation_labels_max_pinned_count'),
            T = y.a.useState(!1),
            w = K()(T, 2),
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
                            return e.label_type !== fe.a.PINNED
                          })
                  l(Ge({ conversations: v()({}, e.rest_id, r()(r()({}, e), {}, { labels: n })) }))
                }),
                l(Ge(x, !1))
            },
            [C],
          )
          var j = y.a.useCallback(
              function () {
                A(!0)
                var e = vn()(k, Tn, { label: fe.a.PINNED }).toPromise()
                Promise.all([
                  e,
                  function () {
                    return l(M.fetchInbox())
                  },
                ])
                  .then(function () {
                    return A(!1)
                  })
                  .catch(function (e) {
                    u()(e), A(!1)
                  })
              },
              [u, l, k],
            ),
            H = _n()(void 0 !== un ? un : (un = n('ZH9U'))),
            U = K()(H, 1)[0],
            V = _n()(void 0 !== pn ? pn : (pn = n('rQjK'))),
            W = K()(V, 1)[0],
            q = y.a.useCallback(
              function (e, t) {
                U({
                  variables: { conversation_id: e, label: fe.a.PINNED },
                  onCompleted: function (n) {
                    var a
                    switch (null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename) {
                      case 'DMConversationLabelInfo':
                        var i = n.add_dm_conversation_label_v3,
                          o = i.label_type,
                          c = i.timestamp
                        l(
                          Ge({
                            conversations: v()(
                              {},
                              e,
                              r()(r()({}, t), {}, { labels: [{ label_type: o, timestamp: c }] }),
                            ),
                          }),
                        ),
                          l(Object(B.b)({ ariaOnly: !0, text: In }))
                        break
                      case 'DMConversationLabelUnavailable':
                        var d = n.add_dm_conversation_label_v3.failure_reason
                        s.scribe({
                          element: 'thread',
                          action: 'error_shown',
                          data: { error_type: ye.g.MAX_PINS_REACHED },
                        }),
                          'ExceededMaxPinnedConversations' === d && P(!0)
                    }
                  },
                  onError: function (e) {
                    u(yn.a)(e)
                  },
                })
              },
              [l, u, U, s],
            ),
            z = y.a.useCallback(
              function (e, t) {
                W({
                  variables: { conversation_id: e, label_type: fe.a.PINNED },
                  onCompleted: function (n) {
                    var a,
                      i = t
                        ? null == t || null === (a = t.labels) || void 0 === a
                          ? void 0
                          : a.filter(function (e) {
                              return e.label_type !== fe.a.PINNED
                            })
                        : []
                    l(Ge({ conversations: v()({}, e, r()(r()({}, t), {}, { labels: i })) })),
                      l(Object(B.b)({ ariaOnly: !0, text: xn }))
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
                      var l = t.get(r),
                        o = t.get(i)
                      o && l && (Object(Ce.b)(o, r), t.delete(r))
                    }
                  },
                  onError: function (e) {
                    u(yn.b)(e)
                  },
                })
              },
              [u, I, null == C || null === (t = C.labeled_conversation_slice) || void 0 === t ? void 0 : t.__id, l, W],
            ),
            G =
              null == d
                ? void 0
                : d.filter(function (e) {
                    return -1 === g.indexOf(e)
                  }),
            Q = g.length && G.length,
            Y = y.a.createElement(
              y.a.Fragment,
              null,
              m,
              null != g && g.length
                ? y.a.createElement(
                    y.a.Fragment,
                    null,
                    An(kn),
                    g.map(function (e, t) {
                      return b({ conversationIds: g, pinConversation: q, unpinConversation: z })(e)
                    }),
                  )
                : null,
              Q ? An(Cn) : null,
            )
          return null != d && d.length
            ? y.a.createElement(
                y.a.Fragment,
                null,
                D ? y.a.createElement(fn.a, { count: R, setShowPinError: P }) : null,
                E
                  ? y.a.createElement(hn, {
                      accessibilityTitle: o,
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
                      Pt.a,
                      { isRefreshing: F, onRefresh: j },
                      c && null != G && G.length
                        ? y.a.createElement(ht.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: o,
                            anchoring: Dt.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: p,
                            header: Y,
                            identityFunction: Rn,
                            items: G,
                            onNearEnd: h,
                            renderer: b({ conversationIds: G, pinConversation: q, unpinConversation: z }),
                            withKeyboardShortcuts: S,
                            withoutHeadroom: !0,
                          })
                        : Y,
                    ),
              )
            : f()
        },
        An = function (e) {
          return y.a.createElement(le.a, null, y.a.createElement(Ie.a, { headerText: e, isInboxLabelHeader: !0 }))
        }
      function On(e) {
        return y.a.createElement(vt.a, { errorConfig: wn }, y.a.createElement(Fn, e))
      }
      var Mn = ke(y.a.memo(On)),
        Ln = n('dwig'),
        Dn = n('QB0K'),
        Pn = n('Avzu'),
        Nn = n('FRNI'),
        Kn = T.a.h845f281,
        Bn = T.a.f325afc3
      function jn() {
        return y.a.createElement(Dn.a, {
          accessibilityLabel: Kn,
          href: '/messages/compose',
          icon: y.a.createElement(Pn.a, null),
          label: Kn,
          scribeComponent: 'floating_dm_button',
          shortLabel: Bn,
          testID: Nn.a.message,
        })
      }
      var Hn = y.a.memo(jn),
        Un = n('tI3i'),
        Vn = n.n(Un),
        Wn = n('sNn6'),
        qn = n('883S'),
        zn = n('yoO3'),
        Gn = n('GSsg'),
        Qn = n('2g+p'),
        Yn = n('mw9i'),
        Xn = n('BcsE'),
        Jn = n('+d3d'),
        $n = function (e) {
          return e
        },
        Zn = T.a.a66ac766,
        ea = T.a.fe61929d,
        ta = T.a.a846382a,
        na = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i, o, s, c, u, p, m, h
            return (
              l()(this, n),
              (h = t.call(this, e, a)),
              v()(d()(h), 'state', {
                showSearchView: !(
                  null === (i = h.props) ||
                  void 0 === i ||
                  null === (o = i.location) ||
                  void 0 === o ||
                  null === (s = o.state) ||
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
              v()(
                d()(h),
                '_enablePinnedInbox',
                h.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  h.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                d()(h),
                '_messageSearchEnabled',
                h.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                  h.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                d()(h),
                '_modularSearchEnabled',
                h.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(
                d()(h),
                '_isVDLEnabled',
                h.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  h.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              v()(d()(h), '_render', function () {
                var e = h.props.withPinnedInbox
                return h._enablePinnedInbox && e ? h._renderPinnedInbox() : h._renderInbox()
              }),
              v()(d()(h), '_renderFocusedSearch', function () {
                var e = h.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  a = e.conversationIds,
                  r = h.state.searchQuery
                return y.a.createElement(hn, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: a,
                  hideRecentSearches: h._hideRecentSearches,
                  onQueryChange: h._handleQueryChange,
                  query: r,
                  renderInboxItem: h._renderInboxItem,
                })
              }),
              v()(d()(h), '_renderInbox', function () {
                var e,
                  t,
                  n = h.props,
                  a = n.accessibilityTitle,
                  r = n.conversationIds,
                  i = n.footer,
                  l = n.isDrawer,
                  o = n.isRefreshing,
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
                      Pt.a,
                      { isRefreshing: o, onRefresh: h._handlePullToRefresh },
                      c && r
                        ? y.a.createElement(ht.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: a,
                            anchoring: Dt.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: i,
                            header: h._renderHeader(),
                            identityFunction: $n,
                            items: r,
                            noItemsRenderer: s,
                            onNearEnd: h._handleNearEnd,
                            renderer: h._renderInboxItem({ conversationIds: r }),
                            withKeyboardShortcuts: !l,
                            withoutHeadroom: !0,
                          })
                        : null,
                    )
              }),
              v()(d()(h), '_handleNearEnd', function () {
                h._handleHistoryRequest()
              }),
              v()(d()(h), '_handleQueryChange', function (e) {
                h.setState({ searchQuery: e })
              }),
              v()(d()(h), '_handleSearchChange', function (e) {
                e.currentTarget.value
                h.state.showSearchView || h.setState({ showSearchView: !0 })
              }),
              v()(d()(h), '_handleSearchClick', function () {
                h.props.analytics.scribe({ component: 'search', action: 'click' }), h.setState({ showSearchView: !0 })
              }),
              v()(d()(h), '_hideRecentSearches', function () {
                h.setState({ showSearchView: !1, searchQuery: '' })
              }),
              v()(d()(h), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  a = void 0 !== n && n,
                  i = e.messageIds,
                  l = e.pinConversation,
                  o = e.unpinConversation
                return function (e, n) {
                  var s = h.context.loggedInUserId,
                    c = h.props.location,
                    d = h.state.searchQuery,
                    u = a ? (i || []).indexOf(e) : -1,
                    p = -1 !== u && null != t && t.length ? t[u] : null,
                    m = p ? e : '',
                    g = p || e,
                    v = {
                      pathname: '/messages/'.concat(g),
                      state: r()(r()({}, null == c ? void 0 : c.state), {}, { entryPoint: null, searchQuery: d }),
                    },
                    f = g && null != t && t.length ? t.indexOf(g) : null,
                    _ = Object(Xn.a)(f) ? f + 1 : 0
                  Vn()(!!s, 'loggedInUserId must be defined'), n && n(!0)
                  var E = function (e) {
                    return y.a.createElement(Se, {
                      conversationId: g,
                      inboxType: h.props.inboxType,
                      isActive: e,
                      isMessageItem: a,
                      key: g,
                      link: v,
                      messageId: m,
                      onClick: h._handleConversationClick,
                      perspective: s,
                      pinConversation: l,
                      position: _,
                      searchQuery: d,
                      unpinConversation: o,
                    })
                  }
                  return h._isVDLEnabled
                    ? y.a.createElement(Wn.a, { exact: !1, path: v.pathname }, E)
                    : y.a.createElement(b.a, { exact: !1, path: v.pathname }, E)
                }
              }),
              v()(d()(h), '_renderPinnedInbox', function () {
                var e = h.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  a = e.footer,
                  r = e.isDrawer,
                  i = e.renderEmptyDMInbox,
                  l = e.virtualScrollerCacheKey,
                  o = h.state,
                  s = o.searchQuery,
                  c = o.showSearchView
                return n.length
                  ? y.a.createElement(Mn, {
                      accessibilityTitle: t,
                      cacheKey: l,
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
              v()(d()(h), '_handleFetchInitialWrapper', function () {
                h._handleFetchInitial()
              }),
              v()(d()(h), '_handleFetchInitial', function () {
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
              v()(d()(h), '_handleConversationClick', function (e, t, n, a) {
                var r = h.props,
                  i = r.analytics,
                  l = r.customCellClick,
                  o = (null == n ? void 0 : n.participants.length) || 0,
                  s = (null == n ? void 0 : n.type) === M.CONVERSATION_TYPE.GROUP
                i.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: h.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: o,
                    conversation_type: s ? ye.j.GROUP : ye.j.ONE_TO_ONE,
                    position: a,
                  },
                }),
                  l && l(e, t)
              }),
              v()(d()(h), '_handleEmptyDMInboxImpression', function () {
                h.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(d()(h), '_handlePullToRefresh', function () {
                var e = h.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(h._updateLastSeenEventId, t())
              }),
              v()(d()(h), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== Qn.a.currentState) return h._updateLastSeenEventId()
              }),
              v()(d()(h), '_renderHeader', function () {
                var e = h.props,
                  t = e.renderStickyContent,
                  n = e.withDmSearch,
                  a = [aa.searchInput, h._isVDLEnabled ? void 0 : aa.searchInputBorder]
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  n
                    ? y.a.createElement(
                        le.a,
                        { onClick: h._handleSearchClick, style: a },
                        y.a.createElement(jt.a, {
                          Icon: wt.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: h._handleSearchChange,
                          placeholder: h._messageSearchEnabled ? ta : ea,
                          withClearButton: !0,
                        }),
                      )
                    : null,
                  t ? t() : null,
                )
              }),
              v()(d()(h), '_updateLastSeenEventId', function () {
                var e = h.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (h._fab = y.a.createElement(Hn, null)),
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
                    (this._updatePolling = new Gn.a(
                      function () {
                        r().then(e._updateLastSeenEventIdIfActive, n(qn.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Jn.a)(function () {
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
                    zn.a,
                    null,
                    y.a.createElement(O, null),
                    y.a.createElement(
                      Ln.a,
                      { component: Yn.a, fab: this._fab, style: aa.root },
                      y.a.createElement(Ae.a, {
                        accessibilityLabel: Zn,
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
      v()(na, 'contextType', _.a),
        v()(na, 'defaultProps', {
          conversationIds: [],
          inboxType: fe.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var aa = Me.a.create(function (e) {
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
      t.a = Object(Kt.a)(P(na))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
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
        h = n.n(m),
        g = n('2VqO'),
        v = n.n(g),
        f = n('KEM+'),
        y = n.n(f),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        E = n('nT9l'),
        S = n('3XMw'),
        k = n.n(S),
        C = 'image',
        I = n('TIdA'),
        x = n('a6qo'),
        R = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        T = k.a.f93bb3ee,
        w = (function (e) {
          h()(n, e)
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
                  c = l()(i, R)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    I.a,
                    r()({}, c, { accessibilityLabel: o, onVariantSelection: n, previewMode: a, testID: C }),
                  ),
                  s ? _.a.createElement(x.a, { align: 'left', altLabel: o }) : null,
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
        })(_.a.Component)
    },
    q8SM: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return h
      }),
        n.d(t, 'b', function () {
          return g
        })
      var a,
        r,
        i = n('KEM+'),
        l = n.n(i),
        o = n('OIs+'),
        s = n('3XMw'),
        c = n.n(s),
        d = c.a.cb367657,
        u = c.a.ie9a7e48,
        p = c.a.hd3927c6,
        m = c.a.f1ac0968,
        h =
          ((a = {}),
          l()(a, o.a.Offline, { toast: { text: u } }),
          l()(a, 'defaultToast', { text: d }),
          l()(a, 'showToast', !0),
          a),
        g =
          ((r = {}),
          l()(r, o.a.Offline, { toast: { text: m } }),
          l()(r, 'defaultToast', { text: p }),
          l()(r, 'showToast', !0),
          r)
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
        l = n.n(i),
        o = n('MWbm'),
        s = n('CKsB'),
        c = n('/yvb'),
        d = n('rHpw'),
        u = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        h = l.a.fcd4d489,
        g = l.a.gbed8594,
        v = l.a.g9074da4,
        f = l.a.ad63377d,
        y = l.a.h09b49f7,
        b = l.a.i6b19b07,
        _ = l.a.j7bb1a42,
        E = l.a.ea200ba6,
        S = l.a.cfd2f35d,
        k = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            l = e.onDeleteClick,
            d = e.onReportClick,
            k = e.requestorScreenName,
            I = e.showBlock,
            x = e.showCancel,
            R = e.showDelete,
            T = r.a.useCallback(
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
                l && l(), t()
              },
              [t, l],
            )
          return r.a.createElement(
            o.a,
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            R
              ? r.a.createElement(s.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? v : f,
                  onClick: F,
                  textColor: 'red500',
                })
              : null,
            I
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: g, actionText: h({ screenName: k }), onClick: w })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: a ? b : _({ screenName: k }),
              onClick: T,
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
        l = n.n(i),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        h = n.n(m),
        g = n('2VqO'),
        v = n.n(g),
        f = n('KEM+'),
        y = n.n(f),
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
        R = n('wpu3'),
        T = n('cOB2'),
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
            o = e.style,
            s = _.a.useContext(T.a)
          return i
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(w.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: o }, a),
              )
            : _.a.createElement(
                F.a.BottomComposer,
                null,
                _.a.createElement(A.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return _.a.createElement(
                    w.a,
                    l()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: o })),
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
                  return _.a.createElement(
                    P.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [B.root, n && B.isWide, !n && B.isNarrow],
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
        B = O.a.create(function (e) {
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
        j = K,
        H = n('cHvH'),
        U = n('mw9i'),
        V = (function (e) {
          h()(n, e)
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
                  return _.a.createElement(H.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
                      l = [i && W.isWide, i && n && W.oneButtonOnly, !i && W.isNarrow]
                    return _.a.createElement(
                      U.a,
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
                  return _.a.createElement(j, {
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
      function le(e) {
        var t = e.isSending,
          n = e.isUploading,
          a = e.progress
        return t && !n ? _.a.createElement(ie, null) : _.a.createElement(ae.a, { progress: t ? Math.max(a, 0.02) : 0 })
      }
      var oe = _.a.memo(le),
        se = n('Dtul'),
        ce = n('Es6L'),
        de = 'dmComposerAttachments',
        ue = 'dmComposerTextInput',
        pe = 'dmComposerSendButton',
        me = n('GZwR'),
        he = n('aITJ'),
        ge = n('6OUF'),
        ve = n('9Xij'),
        fe = n('/yvb'),
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
        Re = n('iySH'),
        Te = J.a.ee230734,
        we = J.a.ca0ce0e4,
        Fe = J.a.cdcebd22,
        Ae = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(R.b)({ maxNumberOfPhotos: 1 }),
        De = (function (e) {
          h()(n, e)
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
                  o = c.state,
                  s = o.editorState,
                  d = o.mediaButtonsCollapsible,
                  u = o.value,
                  p = !!r,
                  m = r ? { editorState: s, element: r.element } : void 0,
                  h = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: s, element: r.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return _.a.createElement(
                  ge.a,
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
                  h = null == p ? void 0 : p.defaultAltText,
                  g = Object(_e.b)(l)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  u
                    ? _.a.createElement(
                        w.a,
                        { style: Pe.attachmentContainer, testID: de },
                        _.a.createElement(
                          ve.a,
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
                    : g && !r
                    ? _.a.createElement(_e.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: Pe.cardPreviewContainer,
                        urls: g,
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
                  l = _.a.createElement(
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
                  : _.a.createElement(
                      ye.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      l,
                    )
              }),
              y()(p()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return _.a.createElement(fe.a, {
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
                    ? _.a.createElement(fe.a, {
                        accessibilityLabel: Te,
                        icon: _.a.createElement(Re.a, null),
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
                    l = e.style,
                    o = i || we,
                    s = Object(ce.a)(),
                    c = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    M,
                    {
                      accessibilityLabel: o,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [Pe.root, c && Pe.dtabOffset, l],
                    },
                    _.a.createElement(oe, { isSending: n, isUploading: a, progress: n ? Math.max(r, 0.02) : 0 }),
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
    y59G: function (e, t, n) {
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
        h,
        g,
        v,
        f,
        y,
        b,
        _,
        E,
        S,
        k,
        C,
        I,
        x,
        R,
        T,
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
        B,
        j,
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
        le,
        oe,
        se,
        ce,
        de,
        ue,
        pe,
        me,
        he,
        ge,
        ve,
        fe,
        ye,
        be,
        _e,
        Ee,
        Se,
        ke,
        Ce,
        Ie,
        xe,
        Re,
        Te,
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
        Be,
        je,
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
        lt,
        ot,
        st,
        ct,
        dt,
        ut,
        pt,
        mt,
        ht,
        gt,
        vt,
        ft,
        yt,
        bt,
        _t,
        Et,
        St,
        kt,
        Ct,
        It,
        xt,
        Rt = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'cursor' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'query' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'withAttachments' }),
              (l = { defaultValue: !1, kind: 'LocalArgument', name: 'withDmMuting' }),
              (o = { defaultValue: null, kind: 'LocalArgument', name: 'withMessageQueryHighlights' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'withSafetyModeUserFields' }),
              (c = { defaultValue: null, kind: 'LocalArgument', name: 'withSuperFollowsUserFields' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: 'dm_message_slice_result',
                args: [
                  (d = { kind: 'Variable', name: 'query', variableName: 'query' }),
                  (u = { kind: 'Literal', name: 's', value: 19 }),
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
                                      (h = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (g = {
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
                                              (b = {
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
                                                  b,
                                                  (_ = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (E = {
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
                                                                field: (k = {
                                                                  alias: null,
                                                                  args: null,
                                                                  concreteType: 'ApiUser',
                                                                  kind: 'LinkedField',
                                                                  name: 'legacy',
                                                                  plural: !1,
                                                                  selections: [
                                                                    E,
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
                                                  g,
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
                                                                field: k,
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
                                                      m,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (R = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              (C = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              }),
                                                              (I = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_width',
                                                                storageKey: null,
                                                              }),
                                                              (x = {
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
                                                                field: (F = {
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
                                                                    E,
                                                                    S,
                                                                    (w = {
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
                                                  (A = {
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
                                                  (M = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (L = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  A,
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
                                          (N = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (K = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (B = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          E,
                                          (j = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (H = {
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
                                                        field: k,
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
                                                      m,
                                                      p,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: k,
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
                                                      m,
                                                      p,
                                                      {
                                                        kind: 'RequiredField',
                                                        field: k,
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
                                              (U = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              m,
                                              (V = {
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
                                                      (W = {
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
                                                                  W,
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
                                                                      x,
                                                                      I,
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
                                                                              (Q = {
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
                                                                                selections: (Y = [
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
                                                                      ($ = {
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
                                                                          (Z = {
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
                                                                    selections: [q, J, $, ee],
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
                                                                              Z,
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
                                                                                    selections: Y,
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  Q,
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
                                                                              E,
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
                                                                              E,
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
                                                                  E,
                                                                  Z,
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
                                                                                  Z,
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
                                                                                selections: [Z],
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
                                                                                  V,
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
                                                                                      (he = {
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
                                                                                          (ge = {
                                                                                            alias: 'type',
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: '__typename',
                                                                                            storageKey: null,
                                                                                          }),
                                                                                          (fe = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: (ve = [V]),
                                                                                            type: 'TimelineRichTextCashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (ye = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [m, Z],
                                                                                            type: 'TimelineRichTextList',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (be = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: ve,
                                                                                            type: 'TimelineRichTextHashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (_e = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              Z,
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
                                                                                                      W,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          {
                                                                                                            kind: 'RequiredField',
                                                                                                            field: (Ee =
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
                                                                                                            path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.affiliates_highlighted_label.label.longDescription.entities.ref.user_results.result.legacy',
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
                                                                                                      W,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          {
                                                                                                            kind: 'RequiredField',
                                                                                                            field: Ee,
                                                                                                            action:
                                                                                                              'THROW',
                                                                                                            path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.affiliates_highlighted_label.label.longDescription.entities.ref.mention_results.result.legacy',
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
                                                                              (ke = {
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
                                                                      (Ie = {
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
                                                                              field: (xe = {
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
                                                                              field: (Re = {
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
                                                                            (we = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'can_media_tag',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Fe = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'created_at',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ae = {
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
                                                                              selections: (Le = [
                                                                                {
                                                                                  alias: null,
                                                                                  args: null,
                                                                                  concreteType: 'EntitySet',
                                                                                  kind: 'LinkedField',
                                                                                  name: 'description',
                                                                                  plural: !1,
                                                                                  selections: (Me = [
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
                                                                                        Z,
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
                                                                                  selections: Me,
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
                                                                              field: (Ne = {
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
                                                                              field: (Ke = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'follow_request_sent',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.follow_request_sent',
                                                                            },
                                                                            (Be = {
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
                                                                              field: (He = {
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
                                                                              field: (Ue = {
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
                                                                              field: (Ve = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'friends_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.friends_count',
                                                                            },
                                                                            (We = {
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
                                                                              field: (Qe = {
                                                                                alias: null,
                                                                                args: null,
                                                                                kind: 'ScalarField',
                                                                                name: 'media_count',
                                                                                storageKey: null,
                                                                              }),
                                                                              action: 'THROW',
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.media_count',
                                                                            },
                                                                            (Ye = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'muting',
                                                                              storageKey: null,
                                                                            }),
                                                                            E,
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
                                                                            ($e = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'notifications',
                                                                              storageKey: null,
                                                                            }),
                                                                            (Ze = {
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
                                                                                              selections: [Q, ae],
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
                                                                            w,
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
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.protected',
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
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.statuses_count',
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
                                                                            Z,
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
                                                                              path: 'dm_message_slice_result.items.dm_event.legacy.event_detail.dm.attachments.card.legacy.user_refs.legacy.verified',
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
                                                                              selections: Le,
                                                                              storageKey: null,
                                                                            }),
                                                                            (ht = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'withheld_in_countries',
                                                                              storageKey: null,
                                                                            }),
                                                                            (gt = {
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
                                                                              E,
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
                                                                      (bt = {
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
                                                            field: k,
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
                                                          m,
                                                          p,
                                                          {
                                                            kind: 'RequiredField',
                                                            field: k,
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
                              (_t = {
                                condition: 'withMessageQueryHighlights',
                                kind: 'Condition',
                                passingValue: !0,
                                selections: [
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMHighlighting',
                                    kind: 'LinkedField',
                                    name: 'highlighting',
                                    plural: !1,
                                    selections: [
                                      {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'query_tokens',
                                        storageKey: null,
                                      },
                                    ],
                                    storageKey: null,
                                  },
                                ],
                              }),
                            ],
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      (Et = {
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
            argumentDefinitions: [a, r, i, o, c, s, l],
            kind: 'Operation',
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: null,
                args: (St = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, d, u]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  W,
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
                          W,
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
                                      h,
                                      g,
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
                                              b,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  b,
                                                  _,
                                                  E,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (It = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          W,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              m,
                                                              p,
                                                              k,
                                                              (kt = {
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
                                                      (Ct = {
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
                                                  g,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: It,
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
                                                        selections: [W, R],
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
                                                          W,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [m, p, F, kt],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                      Ct,
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  A,
                                                  O,
                                                  M,
                                                ],
                                                storageKey: null,
                                              },
                                              L,
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
                                          N,
                                          K,
                                          B,
                                          E,
                                          j,
                                          H,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: It,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: It,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: It,
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
                                              U,
                                              m,
                                              V,
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
                                                      W,
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
                                                                  E,
                                                                  Z,
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
                                                                                  V,
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
                                                                                      he,
                                                                                      {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: 'LinkedField',
                                                                                        name: 'ref',
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                          W,
                                                                                          {
                                                                                            kind: 'TypeDiscriminator',
                                                                                            abstractKey:
                                                                                              '__isTimelineReferenceObject',
                                                                                          },
                                                                                          ge,
                                                                                          fe,
                                                                                          ye,
                                                                                          be,
                                                                                          _e,
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
                                                                                                selections: (xt = [
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: null,
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'result',
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                      W,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          Ee,
                                                                                                          kt,
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
                                                                                                selections: xt,
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
                                                                              ke,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      Ce,
                                                                      Ie,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiUser',
                                                                        kind: 'LinkedField',
                                                                        name: 'legacy',
                                                                        plural: !1,
                                                                        selections: [
                                                                          xe,
                                                                          Re,
                                                                          Te,
                                                                          we,
                                                                          Fe,
                                                                          Ae,
                                                                          Oe,
                                                                          ce,
                                                                          De,
                                                                          Pe,
                                                                          Ne,
                                                                          Ke,
                                                                          Be,
                                                                          je,
                                                                          He,
                                                                          Ue,
                                                                          Ve,
                                                                          We,
                                                                          qe,
                                                                          ze,
                                                                          Ge,
                                                                          Qe,
                                                                          Ye,
                                                                          E,
                                                                          Xe,
                                                                          Je,
                                                                          $e,
                                                                          Ze,
                                                                          tt,
                                                                          nt,
                                                                          at,
                                                                          w,
                                                                          rt,
                                                                          it,
                                                                          S,
                                                                          lt,
                                                                          ot,
                                                                          st,
                                                                          Z,
                                                                          ct,
                                                                          dt,
                                                                          ut,
                                                                          pt,
                                                                          mt,
                                                                          ht,
                                                                          gt,
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      kt,
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
                                                                      bt,
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
                                                selections: It,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: It,
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
                              _t,
                            ],
                            type: 'DMMessageSearchItem',
                            abstractKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      Et,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: St,
                filters: ['query', 's'],
                handle: 'slice',
                key: 'DMMessageSearchTabQuery_dm_message_slice_result',
                kind: 'LinkedHandle',
                name: 'dm_message_slice_result',
              },
            ],
          },
          params: {
            id: 'xBiqai6wRDHzTJWA3o5RnQ',
            metadata: { sliceInfoPath: ['dm_message_slice_result', 'slice_info'] },
            name: 'DMMessageSearchTabQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(Rt.hash = 'ce6fb97d9798378904193bb452a54b1a'), (e.exports = Rt)
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return g
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
        h = function (e) {
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
        g = function (e, t, n, a) {
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
              })(r.a.createElement(h, { entry: e, users: a }))
            case l.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.a.createElement(i.b, null, e), t)
                  : r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (o = e.sender_id && a[e.sender_id] && a[e.sender_id].name),
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
