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
    '23An': function (e, t, n) {
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
        return ji
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
        v = n('ERkP'),
        g = n.n(v),
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
        C = n('MMRb'),
        k = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        I = n('XnpN'),
        x = n('LhSm'),
        w = n('I4+6'),
        T = n('rHpw'),
        R = n('PbQQ'),
        F = n('cm6r'),
        A = n('jV+4'),
        M = n('pBrB'),
        O = n('wCd/'),
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
            r = g.a.useContext(k.a).loggedInUserId
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
            v = i.userWithheldEntities,
            y = !!(m && h && ((s && c) || p)),
            b = w.a.generate({
              color: T.a.theme.colors.text,
              backgroundColor: T.a.theme.colors.transparent,
              customFocusBackgroundColor: T.a.theme.colors.gray0,
              customHoverBackgroundColor: T.a.theme.colors.gray0,
              customPressedBackgroundColor: T.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(R.a.Consumer, null, function (e) {
            return g.a.createElement(
              F.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [D.root, a && y && D.borderBottom],
              },
              g.a.createElement(A.a, {
                isVerified: u,
                name: m,
                screenName: h,
                style: D.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && l && d
                ? g.a.createElement(M.a, {
                    description: o,
                    entities: l,
                    style: [D.profileInfoItemMargin, D.description],
                    userId: d,
                    withheldDescription: f,
                    withheldEntities: v,
                  })
                : null,
              s && c
                ? g.a.createElement(O.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: h || '',
                    style: D.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? g.a.createElement(x.a, { joinDate: p }) : null,
            )
          })
        },
        N = n('V/6K'),
        B = n('cFyg'),
        K = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        j = n('aA19'),
        H = n('aWyx'),
        U = n('mN6z'),
        V = n('MWbm'),
        z = n('t62R'),
        W = n('jhWN'),
        q = n('MAI/'),
        G = n('zQEV'),
        Q = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return g.a.createElement(z.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
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
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? g.a.createElement(
                            V.a,
                            { style: X.conversationAvatarContainer },
                            g.a.createElement(j.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      g.a.createElement(Q, null, l),
                    )
                  case H.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(l),
                      d = e._getParticipantsFromEntry(),
                      u = g.a.createElement(
                        z.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return g.a.createElement(g.a.Fragment, null, c, p)
                  default:
                    return g.a.createElement(Q, null, l)
                }
              }),
              h()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return g.a.createElement(
                  F.a,
                  { interactiveStyles: null, link: o, style: X.userAddedYouContainer },
                  i
                    ? g.a.createElement(W.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  g.a.createElement(Q, { link: o, style: X.userAddedYouText }, t),
                )
              }),
              h()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  F.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: X.joinConversationDetails,
                  },
                  n,
                  g.a.createElement(q.a, { style: X.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: r }),
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
                  return g.a.createElement(V.a, { style: X.root }, this._renderContents())
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
        })(g.a.Component),
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
        J = Object(K.a)(Y),
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
              ((n = ae(T.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ue[T.a.theme.scale]),
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
        ve = n('oEGd'),
        ge = n('zh9S'),
        ye = n('Yatk'),
        be = n('G6rE'),
        _e = n('P1r1'),
        Ee = { scribeAction: ge.scribeAction },
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
        Ce = Object(ve.f)(Se, Ee),
        ke = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Ie = n('rxPX'),
        xe = n('0KEI'),
        we = Object(Ie.a)()
          .propsFromActions(function () {
            return {
              addToast: ke.b,
              createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: C.deleteEntry,
            }
          })
          .withAnalytics(),
        Te = n('k49u'),
        Re = n('LVU8'),
        Fe = n('3XMw'),
        Ae = n.n(Fe),
        Me = Ae.a.f58dff33,
        Oe = Ae.a.ad5a8e8e,
        Le =
          ((se = {}),
          h()(se, Te.a.MissingParameter, { toast: Object(Re.a)(Me) }),
          h()(se, Te.a.DirectMessageDestroyPermissionsError, { toast: { text: Oe } }),
          h()(se, 'showToast', !0),
          se),
        De = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Pe = n('uKEd'),
        Ne = [],
        Be = Object(fe.createSelector)(
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
        Ke = {
          createReaction: Pe.d,
          createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: De.d,
          removeReaction: Pe.k,
        },
        je = Object(ve.f)(Be, Ke),
        He = n('RhWx'),
        Ue = n.n(He),
        Ve = n('33Kz'),
        ze = n('wTX1'),
        We = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            l = e.onPress,
            s = e.style,
            c = g.a.useContext(k.a).featureSwitches,
            d = Object(Ve.b)(r, c),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = w.a.generate({ backgroundColor: T.a.theme.colors.gray50, color: T.a.theme.colors.gray700 })
          return g.a.createElement(
            F.a,
            {
              accessibilityLabel: u,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: l,
              style: [qe.container].concat(Ue()(s || [])),
            },
            g.a.createElement(z.b, { size: a, style: qe.unsetLineHeight }, d),
            n
              ? g.a.createElement(ze.a, { color: 'gray700', containerStyle: qe.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        qe = T.a.create(function (e) {
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
                      return g.a.createElement(We, {
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
                  return g.a.createElement(V.a, { style: Ze.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Je, 'contextType', k.a)
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
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.isGroupDM,
                  i = n.participantsCount,
                  o = n.perspective
                return g.a.createElement($e, {
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
                  return g.a.createElement(
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
        })(g.a.Component)
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
          var a = 1.25 * T.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        vt = n('hiGS'),
        gt = n('zIWA'),
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
            g.a.createElement(
              'g',
              null,
              g.a.createElement('path', {
                d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
              }),
              g.a.createElement('path', {
                d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
              }),
            ),
          )
        }
      _t.metadata = { width: 24, height: 24 }
      var Et = _t,
        St = n('DlVf'),
        Ct = n('ACHU'),
        kt = n('UgB4'),
        It = n('fz3c'),
        xt = Ae.a.ba60339a,
        wt = Ae.a.j4bfee22,
        Tt = Ae.a.d96cf7cd,
        Rt = Ae.a.faddd3a2,
        Ft = Ae.a.eb497e08,
        At = Ae.a.b170974a,
        Mt = Ae.a.i202bd22,
        Ot = Ae.a.f2e5491a,
        Lt = Ae.a.f88553c8,
        Dt = Ae.a.ifea3114,
        Pt = Ae.a.cac14829,
        Nt = Ae.a.h63a5c3b,
        Bt = (function (e) {
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
                  c = [{ text: xt, Icon: vt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
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
                      text: Mt,
                      Icon: gt.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(u) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    c.push({
                      text: Mt,
                      Icon: gt.a,
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
                  st.a.isAvailable() && c.push({ text: Ot, Icon: Et, onClick: i._handleCopyMessageText }),
                  g.a.createElement(at.a, {
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
              (i._isNarrow = ct.a.get('screen').width < T.a.theme.breakpoints.xSmall),
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
                  return g.a.createElement(
                    V.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        jt.messageActions,
                        r ? jt.messageActionsLeft : jt.messageActionsRight,
                        s ? jt.visible : jt.invisible,
                        l && jt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? jt.messageActionsMediaNarrow : jt.messageActionsNarrow),
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
                    ? g.a.createElement(it.a, {
                        confirmButtonLabel: Tt,
                        confirmButtonType: 'destructiveFilled',
                        headline: wt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: Rt,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return g.a.createElement(ot.a, {
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
                    l = g.a.createElement(St.a, { style: i ? jt.vdlActionIcon : jt.actionIcon })
                  return g.a.createElement(
                    tt,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    g.a.createElement(ot.a, {
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
                    t = g.a.createElement(Ct.a, { style: e ? jt.vdlActionIcon : jt.actionIcon })
                  return g.a.createElement(ot.a, {
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
        })(g.a.Component)
      h()(Bt, 'contextType', N.a)
      var Kt = Object(nt.a)(we(Bt)),
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
        Ht = g.a.createElement(kt.a, { style: jt.vdlActionIcon }),
        Ut = n('97Jx'),
        Vt = n.n(Ut),
        zt = (n('6U7i'), n('CDB5')),
        Wt = Object(Ie.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(xe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: C.removeEntry,
              sendMessage: zt.m,
            }
          })
          .withAnalytics(),
        qt = '87.5%',
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
        ln = Object(ve.e)(function () {
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
          var t = g.a.useContext(k.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            o = r.avatarUri,
            l = r.isProtected,
            s = r.isVerified,
            c = r.name,
            d = r.screenName,
            u = g.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = g.a.createElement(W.a, { imageLayoutCache: pn, screenName: d, size: 'xxLarge', uri: o }),
            m = g.a.createElement(We, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            h = g.a.createElement(A.a, {
              badgeContext: 'content',
              isProtected: l,
              isVerified: s,
              name: c,
              screenName: d,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            cn.a,
            { link: { pathname: '/'.concat(d), anchorless: !0 }, style: [mn.root, i && mn.bottomBorder] },
            g.a.createElement(V.a, { style: mn.reactionColumn }, m),
            g.a.createElement(V.a, { style: mn.column }, p),
            g.a.createElement(V.a, { style: mn.bodyColumn }, g.a.createElement(V.a, { style: mn.body }, h)),
            a
              ? g.a.createElement(
                  V.a,
                  { style: mn.column },
                  g.a.createElement(
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
        vn = n('efqG'),
        gn = Ae.a.b772cd65,
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
                return g.a.createElement(
                  V.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(fn.a, { title: yn })
                  : g.a.createElement(z.b, { visuallyHidden: !0 }, yn)
              }),
              h()(s()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  V.a,
                  { accessibilityLabel: bn, style: [En.container, 'sheet' === n ? En.sheet : En.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    ot.a,
                    { key: 'button_done', onPress: e, style: En.cancelButton, type: 'primaryOutlined' },
                    gn,
                  )
                )
              }),
              h()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return g.a.createElement(hn, {
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
                  return g.a.createElement(
                    vn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      h()(_n, 'contextType', N.a)
      var En = T.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Sn = Object(nt.a)(Object(Qe.a)(ln(_n))),
        Cn = Ae.a.h95f9e76,
        kn = (function (e) {
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
                  return g.a.createElement(We, {
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
                  var l = w.a.generate({ backgroundColor: T.a.theme.colors.gray50, color: T.a.theme.colors.gray700 }),
                    s = Cn({ reactionCount: i })
                  return g.a.createElement(
                    V.a,
                    {
                      style: [
                        In.container,
                        a ? In.marginShort : In.marginLong,
                        r ? In.alignRight : In.alignLeft,
                        o ? In.visible : In.invisible,
                      ],
                    },
                    g.a.createElement(
                      Sn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
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
        })(g.a.PureComponent),
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
        xn = Object(Qe.a)(Zt(kn)),
        wn = n('Xrkv'),
        Tn = Ae.a.icd0bf34,
        Rn = Ae.a.e8bd8fec,
        Fn = Ae.a.b2d32fad,
        An = Ae.a.a763d33e,
        Mn = (function (e) {
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
                  return g.a.createElement(
                    V.a,
                    { style: On.root },
                    g.a.createElement(
                      z.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: On.seenLabel },
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
                  return n ? (t ? Fn : Tn) : a.length ? An({ count: a.length }) : Rn
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
                      return g.a.createElement(
                        Ae.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(z.b, null, n),
                        g.a.createElement(
                          z.b,
                          { color: 'link', onPress: e._handlePress },
                          Ae.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(wn.a)(t, n)
                  return g.a.createElement(
                    z.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: On.namesList },
                    n ? g.a.createElement(r, { namesList: i, othersCount: a }) : g.a.createElement(z.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        On = T.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Ln = Mn,
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
        Bn = n('IMYl'),
        Kn = n('21zW'),
        jn = n('gmpV'),
        Hn = Ae.a.fad48ee9,
        Un = Ae.a.ba60339a,
        Vn = Ae.a.d338f53e,
        zn = Ae.a.ae7d7a24,
        Wn = Ae.a.d725a288,
        qn = Ae.a.bbe74f3f,
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
                    g.a.createElement(
                      V.a,
                      { style: [Xn.root, u && Xn.vdlRootMargin, t && Xn.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? g.a.createElement(
                            F.a,
                            { interactiveStyles: null, onPress: n, style: t && Xn.sentContainer },
                            g.a.createElement(V.a, { style: t && Xn.groupedItems }, i, l),
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
                    g.a.createElement(
                      V.a,
                      null,
                      g.a.createElement(z.b, { align: 'right', color: 'gray700', size: 'subtext2' }, zn),
                      g.a.createElement(
                        V.a,
                        { style: Xn.groupedItems },
                        g.a.createElement(
                          z.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Un,
                        ),
                        g.a.createElement(Kn.a, null),
                        g.a.createElement(
                          z.b,
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
                    ? g.a.createElement(
                        V.a,
                        { style: o && Xn.footerPadderWithAvatar },
                        g.a.createElement(xn, { conversationId: t, entryId: n, isEndOfDM: l, isSent: i }),
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
                    ? g.a.createElement(Ln, Vt()({ isGroupDM: i }, Pn({ entryId: t, participants: l, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement(z.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Hn)
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
                    : g.a.createElement(
                        z.b,
                        { color: c ? 'primary' : 'gray700', style: Xn.checkmarkContainer },
                        g.a.createElement(Bn.a, { style: Xn.checkmark }),
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
                  d = Object(jn.c)(u) ? Wn(u) : Object(jn.d)(u) ? qn({ time: Wn(u) }) : Object(jn.e)(u) ? Gn(u) : Qn(u)
                  var p = r && !l,
                    m = l ? 'right' : 'left'
                  return g.a.createElement(
                    V.a,
                    { style: [c && Xn.footerPadderWithAvatar, l && Xn.timestamp] },
                    g.a.createElement(
                      z.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: l || !lt.a.isEnabled },
                      p &&
                        g.a.createElement(
                          Ae.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement(z.b, null, s),
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
        })(g.a.PureComponent)
      h()(Yn, 'contextType', k.a)
      var Xn = T.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: qt },
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
        Jn = Wt(Yn),
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
          return g.a.createElement(
            V.a,
            { style: s },
            g.a.createElement($n.a, { align: 'center', color: 'primary', label: r, link: l, onClick: i }),
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
                      return g.a.createElement(ea, {
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
                  return g.a.createElement(V.a, null, o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
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
              popOutConversation: C.popOutConversation,
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
          return g.a.createElement(V.a, { style: [r ? sa.visible : sa.invisible, sa.root] }, n, t, i)
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
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            b = g.a.useContext(k.a).featureSwitches,
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
            C = T.a.theme.colors,
            I = C.gray0,
            x = C.magenta500,
            R = C.primary,
            A = C.text,
            M = C.white,
            O = w.a.generate({ color: c ? M : A, backgroundColor: r ? x : c ? R : I }),
            L = (p.text && p.text.length) || 0
          return g.a.createElement(
            F.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? O : null, style: E },
            g.a.createElement(da.a, {
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
            o = e.isRapidFire,
            l = void 0 !== o && o,
            s = e.isSent,
            c = e.messageData,
            d = e.withCta,
            u = e.withMessageBubble
          return g.a.createElement(ma, {
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
        va = n('aX4+'),
        ga = n('/Ikv'),
        ya = ga.a.CardNames,
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
                      destinationUrl: ga.a.getBindingValue(r, 'card_url'),
                      linkDomain: ga.a.getBindingValue(r, 'domain'),
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
                    v = f.isAttachmentSquared ? 'both' : l ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    b = t
                      ? g.a.createElement(
                          V.a,
                          { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                          g.a.createElement(va.a, {
                            card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                            cardContext: { tweetUserId: s.sender_id },
                            dmSentOrReceived: l ? 'sent' : 'received',
                            withBorderShadow: y,
                            withSquareBottomBorderRadius: v,
                          }),
                        )
                      : null,
                    _ = n
                      ? g.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? _a.sentMessageWrapper : _a.receivedMessageWrapper,
                          },
                          g.a.createElement(ma, {
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
                    ? g.a.createElement(ca, { attachmentContent: b, isVisible: f.compositeRendered, textContent: _ })
                    : g.a.createElement(ha, {
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
        })(g.a.Component)
      h()(ba, 'defaultProps', { hasUserText: !1 }), h()(ba, 'contextType', k.a)
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
        Ea = la(ba),
        Sa = Ae.a.f720438f,
        Ca = (function (e) {
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
                return t ? (a = 'both') : n && (a = 'right'), ka[a]
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
                    v = m.isTextSquared,
                    y = [
                      Ia.tombstoneWrapper,
                      o ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    b = g.a.createElement(
                      V.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      g.a.createElement(z.b, { color: 'gray700' }, Sa),
                    ),
                    _ = t
                      ? g.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                              !c && Ia.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: a,
                            isFirstRapidFire: r,
                            isRapidFire: i,
                            isSent: o,
                            messageData: l,
                            rootStyle: v ? (o ? Ia.sentSquared : Ia.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return g.a.createElement(ca, { attachmentContent: b, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ka = T.a.create(function (e) {
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
        xa = Ca,
        wa = (n('849X'), n('TJCb'), n('prG5')),
        Ta = n('RCZO'),
        Ra = n('A91F'),
        Fa = Ae.a.b327c129,
        Aa = function (e) {
          e.stopPropagation()
        },
        Ma = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            a = t.ext_alt_text || Fa,
            r = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            l = i.width,
            s = Object(Ta.b)(t).rgb,
            c = g.a.createElement(wa.a, {
              accessibilityLabel: a,
              aspectMode: Ra.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: l, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(F.a, { interactiveStyles: null, link: n, onPress: Aa }, c) : c
        },
        Oa = n('Modb'),
        La = n('lklz'),
        Da = n('XrEN'),
        Pa = n('ZvMt'),
        Na = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && Da.a.extractVideoProps(La.b.forDm(n), t)
          return a
            ? g.a.createElement(
                Oa.a,
                Vt()({}, a, { aspectRatio: Pa.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Ba = Object(Ie.a)().withAnalytics(),
        Ka = (function (e) {
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
                    l = i.width < T.a.theme.breakpoints.micro
                  return o
                    ? g.a.createElement(
                        V.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ha.root,
                            l ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && ja[r],
                          ],
                        },
                        g.a.createElement(V.a, { style: Ha.description }, g.a.createElement(z.b, null, a)),
                        g.a.createElement(
                          V.a,
                          { style: [Ha.button, l ? Ha.breakButtonWrapper : void 0] },
                          g.a.createElement(
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
        })(g.a.PureComponent)
      h()(Ka, 'defaultProps', { isSensitive: !1 })
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
        Ua = Object(Qe.a)(Ba(Ka)),
        Va = n('CoGJ'),
        za = g.a.createElement(Va.a, null),
        Wa = Ae.a.d9de7b57,
        qa = Ae.a.f2879f4d,
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
                  v = ft(i, p, m),
                  y = [
                    $a.mediaAttachment,
                    s && $a.isSent,
                    !s && $a.received,
                    s && v.isAttachmentSquared && $a.equalComponentDimensionsSent,
                    !s && v.isAttachmentSquared && $a.equalComponentDimensionsReceived,
                    l && !o && s && $a.rapidFireSent,
                    l && !o && !s && $a.rapidFireReceived,
                  ],
                  _ = null
                if (
                  (!f && r.conversation_id && (_ = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = g.a.createElement(Ma, { media: t, mediaUrl: _ }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = g.a.createElement(Na, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(b.l)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(Na, { media: t, messageId: r.id })
                  }
                var E = v.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  S = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, E))
                return {
                  attachmentContent: g.a.createElement(V.a, { onLayout: e._handleAttachmentLayout, style: y }, S),
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
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    b = v.media,
                    _ = n
                      ? g.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? $a.sentMessageWrapper : $a.receivedMessageWrapper,
                          },
                          g.a.createElement(ma, {
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
                  return g.a.createElement(ca, { attachmentContent: y, isVisible: f.compositeRendered, textContent: _ })
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
                      return g.a.createElement(
                        Ua,
                        {
                          contentType: e.type,
                          ctaText: l,
                          description: qa,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: a,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return g.a.createElement(
                      Ua,
                      {
                        contentType: e.type,
                        ctaText: Xa,
                        description: za,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: a,
                      },
                      n,
                    )
                  return t
                    ? n
                    : g.a.createElement(
                        Ua,
                        { contentType: e.type, ctaText: Xa, description: Wa, withSquareBottomBorderRadius: a },
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
        })(g.a.Component)
      h()(Ja, 'contextType', k.a), h()(Ja, 'defaultProps', { hasUserText: !1 })
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
          return { markSpamStatus: C.markSpamStatus }
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
                    return g.a.createElement(
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
                    return g.a.createElement(
                      V.a,
                      { style: or.buttons },
                      g.a.createElement(
                        ot.a,
                        { onPress: this._handlePress(!1), style: or.leftButton, type: 'brandOutlined' },
                        nr,
                      ),
                      g.a.createElement(ot.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, tr),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        or = T.a.create(function (e) {
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
          return g.a.createElement(lr.a, { accessibilityLabel: t.display_name, source: sr(t), style: cr.stickerItem })
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
            return { popOutConversation: C.popOutConversation }
          }),
        hr = n('b5s6'),
        fr = g.a.createElement(z.b, { link: '/settings/safety' }),
        vr = function (e) {
          return g.a.createElement(
            Ae.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(fr, null, Ae.a.adcf07b5),
          )
        },
        gr = Ae.a.e4df0ad7,
        yr = Ae.a.f277e949,
        br = Ae.a.b5b91d58,
        _r = Ae.a.bb594d7b,
        Er = g.a.createElement(vr, null)
      var Sr = T.a.create(function (e) {
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
        Cr = mr(function (e) {
          var t = g.a.useContext(k.a).featureSwitches,
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
            v = e.messageData,
            y = e.popOutConversation,
            b = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            S = g.a.useState(void 0),
            C = Z()(S, 2),
            I = C[0],
            x = C[1],
            w = g.a.useState(void 0),
            T = Z()(w, 2),
            R = T[0],
            F = T[1],
            A = g.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            M = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  I !== t && x(t)
                }
              },
              [I],
            ),
            O = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  R !== t && F(t)
                }
              },
              [R],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var L = v.attachment.tweet,
            D = h ? 'sent' : 'received',
            P = ft(i, I, R),
            N = g.a.createElement(hr.a, {
              onPress: A,
              style: [
                Sr[D],
                i && Sr.attachment,
                P.isAttachmentSquared ? (h ? Sr.sentAttachmentSquared : Sr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: L.status,
            }),
            B = P.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            K = (function () {
              if (!b) return null
              if (h) return N
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return g.a.createElement(
                    Ua,
                    { contentType: 'photo', ctaText: _r, description: br, withSquareBottomBorderRadius: B },
                    N,
                  )
              } else if (!a && b.possibly_sensitive)
                return g.a.createElement(
                  Ua,
                  { contentType: 'photo', ctaText: yr, description: Er, withSquareBottomBorderRadius: B },
                  N,
                )
              return f
                ? N
                : g.a.createElement(
                    Ua,
                    { contentType: 'tweet', ctaText: yr, description: gr, withSquareBottomBorderRadius: B },
                    N,
                  )
            })(),
            j = g.a.createElement(V.a, { onLayout: M, style: Sr.attachment }, K),
            H = i
              ? g.a.createElement(
                  V.a,
                  { onLayout: O, style: h ? Sr.sentMessageWrapper : Sr.receivedMessageWrapper },
                  g.a.createElement(ma, {
                    hasAssociatedAttachment: !0,
                    isActive: l,
                    isFailedDraft: c,
                    isFirstRapidFire: u,
                    isRapidFire: m,
                    isSent: h,
                    messageData: v,
                    rootStyle: P.isTextSquared ? (h ? Sr.sentSquared : Sr.receivedSquared) : void 0,
                    tweetId: L.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(ca, { attachmentContent: j, isVisible: P.compositeRendered, textContent: H })
        }),
        kr = n('htvZ'),
        Ir = n('MH+I'),
        xr = n('5Ixf'),
        wr = n('AtEG')
      function Tr(e) {
        var t,
          n,
          a = g.a.useContext(kr.a),
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
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: v,
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
              return p.play({ data: { duration_ms: v } })
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
          g.a.createElement(Rr, y)
        )
      }
      function Rr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          o = Fr(r),
          l = (null == o ? void 0 : o.currentTimeMs) || 0,
          s = (null == o ? void 0 : o.durationMs) || e.durationMs,
          c = Math.max(t ? s - l : s, 0)
        g.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          g.a.useEffect(
            function () {
              a && 0 === l && (a.play(), e.onPlay())
            },
            [a],
          )
        var d = T.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'text' },
          p = [
            Or.voiceMessage,
            Lr({ isSent: n, squared: t }),
            n ? Or.voiceMessageSent : Or.voiceMessageReceived,
            oe(T.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? xr.a : wr.a
        return g.a.createElement(
          V.a,
          { style: [Or.container, oe(T.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            V.a,
            { style: p },
            g.a.createElement(V.a, { style: Or.startSpacer }),
            g.a.createElement(ot.a, {
              accessibilityLabel: i ? Mr : Ar,
              icon: g.a.createElement(m, { style: d ? Or.iconColorDark : Or.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(V.a, { style: Or.durationSpacer }),
            g.a.createElement(
              V.a,
              { style: n ? Or.durationOpacity : void 0 },
              g.a.createElement(
                Ir.a,
                Vt()({ countdown: !0, timeMs: c }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Or.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(V.a, { style: Or.endSpacer }),
          ),
        )
      }
      var Fr = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ar = Ae.a.c94b7d89,
        Mr = Ae.a.eb6f9582,
        Or = T.a.create(function (e) {
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
      var Dr = T.a.create(function (e) {
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
                  e = l.sticker ? g.a.createElement(dr, { sticker: l.sticker }) : this._renderDMMessage(u, d, m)
                  var f = s ? g.a.createElement(ir, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = c && !h && !Object(b.l)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    y = [
                      a ? Nr.isSent : Nr.isReceived,
                      d && Nr.withCta,
                      v ? Nr.mediaRoot : Nr.flexShrink,
                      this.props.style,
                    ]
                  return g.a.createElement(
                    V.a,
                    { style: y },
                    f,
                    o && o.ctas
                      ? g.a.createElement(aa, {
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
                    v = null == f ? void 0 : f.attachment,
                    y = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && v) {
                    if (v.tweet)
                      return g.a.createElement(
                        Cr,
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
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(b.l)(v, this.context.featureSwitches)
                        ? g.a.createElement(Tr, {
                            isLowQuality: c,
                            isSent: !!u,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : g.a.createElement(
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
                    if (v.card)
                      return g.a.createElement(
                        Ea,
                        Vt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, y),
                      )
                    if (v.fleet) return g.a.createElement(xa, Vt()({ entry: i, hasUserText: e, messageData: f }, y))
                  }
                  return g.a.createElement(ha, Vt()({}, y, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Pr, 'contextType', k.a)
      var Nr = T.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Br = Pr,
        Kr = T.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        jr = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? g.a.createElement(W.a, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : g.a.createElement(V.a, { style: [Kr.avatar, W.a.getSizeStyle(a)] })
        },
        Hr = n('m3Bd'),
        Ur = n.n(Hr),
        Vr = n('B3eJ'),
        zr = ['color', 'isActive', 'size']
      function Wr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Ur()(e, zr),
          i = g.a.useContext(kr.a),
          o = g.a.useState(0.5),
          l = Z()(o, 2),
          s = l[0],
          c = l[1],
          d = Z()(i.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && d && d.isPlaying && c(Math.random())
          },
          [n, d],
        )
        var u = n && (null == d ? void 0 : d.isPlaying),
          p = a + 2 * qr,
          m = [Gr.container, r.style, { width: a, height: a }]
        return g.a.createElement(
          V.a,
          { style: m },
          g.a.createElement(
            V.a,
            { style: [Gr.container, Gr.transitionOpacity, u ? Gr.show : Gr.hide] },
            ie.a.reducedMotionEnabled
              ? null
              : g.a.createElement(Vr.a, { audioLevel: s, color: t, paused: !u, size: a }),
          ),
          g.a.createElement(V.a, {
            style: [Gr.border, { width: p, height: p }, Gr.transitionOpacity, n ? Gr.show : Gr.hide],
          }),
        )
      }
      var qr = parseInt(T.a.theme.spaces.space2, 10),
        Gr = T.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * qr,
              left: -1 * qr,
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
                  return g.a.createElement(
                    he.a,
                    { behavioralEventContext: Jr },
                    g.a.createElement(
                      V.a,
                      { style: d },
                      g.a.createElement(
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
                    v = o.isTrusted,
                    y = o.isVoiceMessageActive,
                    b = o.isWide,
                    _ = o.participants,
                    E = o.perspective,
                    S = o.scribeVoiceMessage,
                    C = o.setShouldFreezeUpdates,
                    k = a.isFirstRapidFire,
                    I = a.isRapidFire,
                    x = [
                      f ? ti.messageContainer.sent : ti.messageContainer.received,
                      b ? ti.messageContainer.wide : ti.messageContainer.narrow,
                      f && b && ti.messageContainer.sentWide,
                      !f && b && ti.messageContainer.receivedWide,
                    ],
                    w = v && !h,
                    R = this._isDMVoiceMessage(),
                    F = (null == _ ? void 0 : _.length) || 0
                  return g.a.createElement(
                    V.a,
                    { style: x },
                    s.error
                      ? null
                      : g.a.createElement(Kt, {
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
                            R && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: v })
                                }
                              : void 0,
                          participantsCount: F,
                          perspective: E,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: w,
                          style: R && oe(T.a.theme.scale).actionsContainer({ isSent: f, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    g.a.createElement(Br, {
                      displaySensitiveMedia: l,
                      entry: s,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: u,
                      isFirstRapidFire: k,
                      isLowQuality: m,
                      isRapidFire: I,
                      isSent: f,
                      isTrusted: v,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: R && oe(T.a.theme.scale).messageContainer({ isSent: f, isVoiceMessageActive: y }),
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
                    ? g.a.createElement(Jn, {
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
                  var c = ae(T.a.theme.scale),
                    d = c.DMUserAvatarSizePx,
                    u = { showAvatar: !!s || !a || !!n, size: c.DMUserAvatarSizeType, user: l },
                    p = [
                      ti.userAvatar.base,
                      i ? ti.userAvatar.sent : ti.userAvatar.received,
                      s && oe(T.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return g.a.createElement(
                    V.a,
                    { style: ti.userAvatar.container },
                    i ? null : g.a.createElement(V.a, { style: ti.userAvatar.spacer }),
                    s
                      ? g.a.createElement(Wr, {
                          color: i ? T.a.theme.colors.primary : T.a.theme.colors.text,
                          isActive: !!o,
                          size: d,
                          style: p,
                        })
                      : null,
                    g.a.createElement(V.a, { style: p }, g.a.createElement(jr, u)),
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
        })(g.a.Component)
      h()(Zr, 'contextType', k.a), h()(Zr, 'defaultProps', $r)
      var ei = Object(Qe.a)(
          Ce(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = g.a.useContext(kr.a),
                  r = Z()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  o = Z()(r, 1)[0] === n.id,
                  l = te()(te()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return g.a.createElement(e, l)
              }
              return (t.defaultProps = $r), t
            })(Zr),
          ),
        ),
        ti = {
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
              wide: { width: qt },
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
              v = t.participants,
              y = t.read_only,
              b = t.trusted,
              E = t.type,
              S = n.message_data,
              k = (S = void 0 === S ? {} : S).sender_id,
              I = void 0 === h || b
            return g.a.createElement(ei, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: E === C.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: o,
              isLastRapidFire: l,
              isLowQuality: !!f,
              isRapidFire: s,
              isReadOnly: y,
              isSent: k === d,
              isTrusted: !!I,
              isWide: c,
              participants: v,
              perspective: d,
              scribeNamespace: u,
              senderId: k,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(_.a)(n)
            ? g.a.createElement(J, { conversation: t, entry: n, entryType: n.type, perspective: d })
            : Object(_.d)(n)
            ? g.a.createElement(ni.a, { entry: n, isCompact: !1 })
            : null
        },
        ri = n('0JOx'),
        ii = Object(fe.createSelector)(
          function (e, t) {
            var n = Object(Pe.o)(e, t.conversationId),
              a = n && Object(S.a)(n)
            return a && Object(C.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        oi = Object(ve.c)(ii),
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
        vi = 140,
        gi = { scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(0, fi) },
        yi = function (e, t) {
          return { key: e.id_str, data: e, style: gi }
        },
        bi = Object(di.a)({ translateY: vi, scale: 0 }),
        _i = Object(di.a)({ scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(vi, fi) }),
        Ei = [{ key: 'bubble', style: { scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(0, fi) } }],
        Si = Object(di.a)({ translateY: vi, scale: 0 }),
        Ci = Object(di.a)({ scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(vi, fi) }),
        ki = function (e) {
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
                    t.length > 5 && n.push({ key: mi, style: gi }),
                    g.a.createElement(
                      V.a,
                      { style: [xi.root, e && xi.hidden] },
                      g.a.createElement(
                        V.a,
                        { style: xi.avatarRow },
                        g.a.createElement(
                          ui.TransitionMotion,
                          { styles: n, willEnter: bi, willLeave: _i },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = ki(e.style)
                                return e.key === mi
                                  ? g.a.createElement(
                                      V.a,
                                      {
                                        key: e.key,
                                        style: [xi.avatar, xi.avatarSpacer, xi.overflowAvatar, { transform: a }],
                                      },
                                      g.a.createElement(pi.a, { style: xi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      V.a,
                                      { key: e.key, style: [xi.avatar, { transform: a }] },
                                      g.a.createElement(W.a, {
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
                      g.a.createElement(
                        ui.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Ei : [], willEnter: Si, willLeave: Ci },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                V.a,
                                { key: e.key, style: [xi.messageBubble, { transform: ki(e.style) }] },
                                g.a.createElement(V.a, { style: xi.dot }),
                                g.a.createElement(V.a, { style: [xi.dot, xi.dot1] }),
                                g.a.createElement(V.a, { style: [xi.dot, xi.dot2] }),
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
        })(g.a.Component),
        xi = T.a.create(function (e) {
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
        wi = ci(Ii),
        Ti = n('tn7R'),
        Ri = (function (e) {
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
                  return !t && g.a.createElement(wi, { userIds: n })
                },
              },
              {
                key: '_teardownLivePipeline',
                value: function () {
                  Object(Ti.a)(this._timers).forEach(function (e) {
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
        })(g.a.PureComponent)
      h()(Ri, 'contextType', k.a)
      var Fi = oi(Ri),
        Ai = n('3AAD'),
        Mi = n('iBK2'),
        Oi = n('RJrc'),
        Li = n('yw4N'),
        Di = n('mw9i'),
        Pi = Ae.a.i859a9d3,
        Ni = Ae.a.i8ecae5b,
        Bi = function (e) {
          return e.entry.id
        },
        Ki = function (e) {
          return e.entry.type === H.b.MESSAGE
        },
        ji = (function (e) {
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
                    return n ? g.a.createElement(Fi, { conversationId: n }) : null
                  case H.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          V.a,
                          { style: Hi.readOnly },
                          g.a.createElement(
                            z.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Ni,
                            ' ',
                            g.a.createElement(z.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Pi),
                          ),
                        )
                      : null
                  case H.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(P, { conversation: t })
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
                        d = (null == a ? void 0 : a.status) === C.PAGINATION_STATUS.AT_END,
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
                        if (n && Ki(n)) return n
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
                  return g.a.createElement(N.a.Consumer, null, function (t) {
                    var d = t.isDrawer ? B.b.drawerHeaderRadius : Hi.scrollSpace
                    return g.a.createElement(
                      V.a,
                      { style: [Hi.scrollContainer, d] },
                      g.a.createElement(
                        Li.a,
                        { style: [Hi.scrollContainer, r && Hi.conversationsPadding, d, c] },
                        a || null,
                        (n.status && n.status !== H.c.AT_END && !i) || v ? g.a.createElement(Oi.a, null) : null,
                        g.a.createElement(
                          Di.a,
                          { style: [Hi.content, Hi.alignTop], withGutter: !0 },
                          g.a.createElement(Mi.b, {
                            anchoring: Ai.a,
                            assumedItemHeight: 50,
                            cacheKey: h,
                            canBeAnchorFunction: Ki,
                            centerInitialAnchor: i && s,
                            hasNewContentAtBottom: !0,
                            identityFunction: Bi,
                            initialAnchor: u.length > 0 ? f.a(i && s ? i : Bi(m(u))) : void 0,
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
                          ? g.a.createElement(Oi.a, null)
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
                    ? g.a.createElement(ai, {
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
        })(g.a.Component)
      h()(ji, 'contextType', k.a)
      var Hi = T.a.create(function (e) {
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
        v = n.n(f),
        g = n('oEoC'),
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
              h()(s()(e), '_genericWrapperRef', v.a.createRef()),
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
                return v.a.createElement(
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
                  o = g.c(n.selectionStart, i),
                  l = o.end,
                  s = o.start,
                  c = o.word,
                  d = g.e(c || '', 'compose')
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
        })(v.a.Component)
      t.a = S
    },
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return C
      }),
        n.d(t, 'c', function () {
          return k
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
        v = s.a.bbac0019,
        g = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        b = s.a.hf383be4,
        _ = s.a.b25c5b2a,
        E = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        C = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        k = { defaultToast: { text: u }, showToast: !0 },
        I =
          ((a = { defaultToast: { text: d } }),
          i()(a, o.a.CurrentUserSuspended, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, o.a.DirectMessageDuplicate, { toast: { text: _ } }),
          i()(a, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: g, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          i()(a, o.a.DirectMessageTooLongError, { toast: { text: v } }),
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
    '9SqB': function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('yiKp')),
        r = n('ERkP'),
        i = n('Ud88'),
        o = n('K1lQ').commitMutation,
        l = r.useState,
        s = r.useEffect,
        c = r.useRef,
        d = r.useCallback,
        u = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = i(),
          r = u(),
          p = c(n),
          m = c(e),
          h = c(new Set()),
          f = l(!1),
          v = f[0],
          g = f[1],
          y = d(
            function (t) {
              p.current === n && m.current === e && (h.current.delete(t), r.current && g(h.current.size > 0))
            },
            [n, r, e],
          )
        s(
          function () {
            ;(p.current === n && m.current === e) ||
              ((h.current = new Set()), r.current && g(!1), (p.current = n), (m.current = e))
          },
          [n, r, e],
        )
        var b = d(
          function (i) {
            var o = t(
              n,
              (0, a.default)(
                (0, a.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    y(o), i.onCompleted && i.onCompleted(e, t)
                  },
                  onError: function (e) {
                    y(o), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    y(o), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return h.current.add(o), r.current && g(!0), o
          },
          [y, t, n, r, e],
        )
        return [b, v]
      }
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
        return R
      }),
        n.d(t, 'l', function () {
          return A
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'd', function () {
          return D
        }),
        n.d(t, 'g', function () {
          return P
        }),
        n.d(t, 'e', function () {
          return B
        }),
        n.d(t, 'i', function () {
          return j
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
          return W
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
        v = n('xCUF'),
        g = n('ude7'),
        y = n('07FG'),
        b = n('Ssj5'),
        _ = n('fEA7'),
        E = n.n(_),
        S = n('uKEd'),
        C = n('lnti'),
        k = n('/NU0'),
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
        w = {}
      var T = function (e) {
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
        R = function (e) {
          return function (t, n, a) {
            var i = a.api,
              l = e || {},
              c = l.senderId,
              d = l.cardUrl,
              u = l.conversationId,
              b = l.localMediaId,
              _ = l.recipients,
              x = void 0 === _ ? [] : _,
              w = l.requestId,
              R = void 0 === w ? E.a.v1() : w,
              F = l.tweetAttachment,
              A = l.quickReply,
              M = s()(l, I)
            t($(u))
            var O = n(),
              L = b || K(n(), u),
              P = m.k(O, L),
              N = o()(P, 1)[0] || {},
              B = N.mediaFile,
              j = N.mediaMetadata,
              H = x.length > 0 && x.join(','),
              U = {}
            B && B.isGif
              ? (U.extraInitParams = '&media_category=dm_gif')
              : B && B.isVideo && (U.extraInitParams = '&media_category=dm_video')
            var z = m.p(L, U),
              W = [t(z)],
              q = (V(O, u) || {}).found_media_origin
            return (
              B && B.isGif && W.push(Object(g.a)(B)),
              Promise.all(W).then(
                function (n) {
                  var a = o()(n, 2),
                    l = o()(a[0], 1)[0],
                    s = a[1],
                    g = (null == j ? void 0 : j.altText) || (null == j ? void 0 : j.defaultAltText),
                    b = !!g
                  return (
                    l && (q || b)
                      ? t(m.m(p()({ media_id: l.uploadId, found_media_origin: q }, !!b && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (F || {}).id_str,
                        a = {}
                      if (l) {
                        var o = l.mediaFile,
                          m = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, g), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, g), {}, { media_url_https: s, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, g), {}, { media_url_https: m.url, type: 'video' }))
                      } else F && (a.tweet = { status: n })
                      var b = (l || {}).uploadId,
                        _ = T({
                          attachment: a,
                          conversation_id: u,
                          id: R,
                          recipient_ids: H,
                          sender_id: c,
                          text: e.text,
                        }),
                        E = p()(
                          p()(
                            p()(p()({}, M), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: H, request_id: R, tweet_id: n },
                        )
                      A &&
                        ((E['quick_reply_response[options][id]'] = A.id),
                        (E['quick_reply_response[options][selected_id]'] = A.selected_id))
                      var I = Object(C.a)([
                        ee(u),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(S.b)(u, R, _),
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
                            Object(k.a)(L) && t(X(u, L))
                            var d = Object(C.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: s, tweets: l, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(S.j)(u, R, e), D(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = T({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: R,
                                localMediaId: L,
                                recipient_ids: H,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(C.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(S.b)(u, R, r),
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
                  return t(Object(C.a)([Object(k.a)(L) && X(u, L), ne(u)])), Promise.reject(e)
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
        M = 'rweb/dmComposer/SAVE_TEXT',
        O = function (e, t) {
          return { type: M, conversationId: e, text: t }
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
        B = function (e, t) {
          return { type: N, conversationId: e, cardUrl: t }
        },
        K = function (e, t) {
          var n = F(e, t)
          return n ? n.mediaId : null
        },
        j = function (e, t) {
          var n = m.k(e, K(e, t))
          return n.length > 0 ? n[0] : null
        },
        H = function (e, t) {
          var n = F(e, t)
          return !!n && n.isUploading
        },
        U = function (e, t) {
          return m.l(e, K(e, t))
        },
        V = function (e, t) {
          var n = F(e, t)
          return n ? n.gifMetadata : null
        },
        z = 'rweb/dmComposer/ADD_MEDIA',
        W = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: z, conversationId: e }
        },
        q = 'rweb/dmComposer/CANCEL_UPLOAD',
        G = function (e) {
          return { type: q, conversationId: e }
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
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case z:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case q:
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
            case M:
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
          v = Object(d.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: v, weight: f }, h)
          : r.a.createElement(
              l.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: v, size: 'subtext2', weight: f }, h),
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
        v = n.n(f),
        g = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(g),
        b = n('0JOx'),
        _ = n('zh9S'),
        E = n('MMRb'),
        S = n('CDB5'),
        C = n('RqPI'),
        k = n('1YZw'),
        I = n('hqKg'),
        x = n('kGix'),
        w = n('AQOc'),
        T = n('UhuB'),
        R = n('pNZL'),
        F = n('G6rE'),
        A = n('oEGd'),
        M = n('X/yg'),
        O = n('0KEI'),
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
          C.r,
          function (e, t) {
            return t ? Object(M.e)(e, t) : void 0
          },
        ),
        B = Object(I.createSelector)(
          function (e, t) {
            return E.selectConversation(e, D(0, t))
          },
          E.selectEntries,
          M.m,
          C.r,
          M.n,
          M.o,
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
          function (e, t, n, a, r, i, o, l, s, c, d, u, p, m, h, f, v, g, y) {
            var b = e && e.data
            return {
              conversation: (b && Object(w.a)(b, t, o)) || void 0,
              dataSaverMode: h,
              draftText: m,
              dtabBarInfo: g,
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
              quickReplyOptions: v,
              tweetAttachment: i,
            }
          },
        ),
        K = Object(A.d)(B, function (e) {
          return {
            acceptConversation: E.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return S.a(t, e, n)
              }),
            saveText: S.f,
            addToast: k.b,
            addWelcomeMessageToConversation: E.addWelcomeMessageToConversation,
            cancelUpload: Object(M.a)(e.conversationId),
            createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
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
            removeMedia: Object(M.b)(e.conversationId),
            removeText: S.d,
            scribeAction: _.scribeAction,
            scribePageImpression: _.scribePageImpression,
            sendMessage: S.m,
            updateConversationReadState: E.updateConversationReadState,
            updateTweetDetailNav: R.b,
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
        z = n('v//M'),
        W = n('3XMw'),
        q = n.n(W),
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
            addToast: k.b,
            block: F.e.block,
            createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
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
        ve = n('/yvb'),
        ge = n('efqG'),
        ye = q.a.ccf2f24e,
        be = q.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = y.a.createElement(ve.a, he()({}, i, { accessibilityRole: 'button' }), be),
            l = y.a.createElement(ve.a, he()({}, i, { onPress: a }), ye),
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
          return t ? l : y.a.createElement(ge.a, { renderContent: s }, o)
        },
        Ee = n('MWbm'),
        Se = n('cHvH'),
        Ce = n('rHpw'),
        ke = function (e) {
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
            var s = t.windowWidth <= Ce.a.theme.breakpoints.small
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
                  onReportClick: o,
                  requestorScreenName: Object(M.j)(e.conversation, a).screenName,
                }),
              ),
              y.a.createElement(
                ve.a,
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
        Ie = Ce.a.create(function (e) {
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
        we = n('t62R'),
        Te = n('eb3s'),
        Re = n('vMjK'),
        Fe = n('7JQg'),
        Ae = n('24HD'),
        Me = n('zCf4'),
        Oe = q.a.da878dcf,
        Le = q.a.d96cf7cd,
        De = (q.a.gde6b424, q.a.e308019b, q.a.gf5e9ea6, q.a.hc52446b),
        Pe = q.a.f7e1ad65,
        Ne = { headline: q.a.gdf4b79f, text: q.a.bbf83d83, confirmButtonLabel: q.a.bb1d57b6 },
        Be = Ce.a.create(function (e) {
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
        Ke = Object(Fe.a)({ element: 'untrusted_interstitial' })(
          ue(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = y.a.useContext(se.a),
              o = Object(Me.f)(),
              l = Object(Me.g)(),
              s = y.a.useState(!1),
              c = le()(s, 2),
              d = c[0],
              u = c[1],
              p = y.a.useState(!1),
              m = le()(p, 2),
              h = m[0],
              f = m[1],
              v = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? $.j.GROUP : $.j.ONE_TO_ONE }],
                  }
                },
                [t.type],
              ),
              g = y.a.useCallback(
                function (e, t) {
                  n(r()(r()({}, a), {}, { action: e }), t || v())
                },
                [v, n, a],
              )
            y.a.useEffect(
              function () {
                g('impression')
              },
              [g],
            )
            var b,
              _,
              S,
              C,
              k = function () {
                u(!0), f(!1)
              },
              I = function () {
                u(!1)
              },
              x = function () {
                f(!1)
              },
              w = function () {
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
                    inbox_type: Object(M.i)(r),
                    entry_point: $.c.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: a }), g(o, d), T()
              },
              T = function () {
                var t = e.inboxType
                o.push(Object(M.f)(t))
              },
              R = function () {
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
                      inbox_type: Object(M.i)(o),
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
                      n({ action: { label: Re.c, onAction: A(t) }, text: Re.a })
                    }, r(ce.a)),
                    g('block')
                }
              },
              A = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), g('unblock')
                }
              },
              O = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                Ee.a,
                { style: Be.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    we.b,
                    { style: Be.copy },
                    e ? De : Pe({ senderName: Object(M.j)(t, n).name }),
                  )
                })(O),
                y.a.createElement(ke, {
                  acceptButtonText: Oe,
                  conversation: t,
                  declineButtonText: Le,
                  isGroup: O,
                  onAccept: R,
                  onBlock: function () {
                    u(!1), f(!0)
                  },
                  onLeave: k,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (g('report'), o.push(Object(M.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              xe.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: Le, onLeftClick: k, onRightClick: R, rightText: Oe })
                : null,
              d
                ? y.a.createElement(Te.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: I,
                    onConfirm: w,
                    text: Ne.text,
                  })
                : null,
              h
                ? ((b = i.loggedInUserId),
                  (_ = Object(M.j)(t, b)),
                  (S = _.idStr),
                  (C = _.screenName),
                  Object(Ae.j)({ confirmation: Object(Ae.f)(C), onClose: x, handleConfirm: F(S) }))
                : null,
            )
          }),
        ),
        je = n('yw4N'),
        He = n('rFBM'),
        Ue = n('mw9i'),
        Ve = n('jTgF'),
        ze = n('+d3d'),
        We = n('mN6z'),
        qe = y.a.createElement(G.a, null),
        Ge = q.a.badb01a0,
        Qe = q.a.e3275464,
        Ye = q.a.d6b11d9c,
        Xe = q.a.i7ca1446,
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
              v()(d()(i), '_leaveConversation', function (e) {
                var t = i.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
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
                      y.a.createElement(Ke, {
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
                      je.a,
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
              v()(d()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(d()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              v()(
                d()(i),
                '_throttleUpdateTyping',
                Object(ze.a)(
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
                Object(ze.a)(
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
                  v = o.perspective,
                  g = o.scribeAction,
                  y = o.scribeNamespace,
                  b = o.sendMessage,
                  _ = o.tweetAttachment,
                  S = i.state.attachment,
                  C = S && S.media,
                  k = null != c && c.participants ? c.participants.length : 0,
                  I = (null == c ? void 0 : c.type) === E.CONVERSATION_TYPE.GROUP,
                  x = 'unknown'
                if (
                  (e.quickReply ||
                    C ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  x = 'gif'
                else if (s) x = 'card'
                else if (_) x = 'tweet'
                else {
                  var w,
                    T = null == S || null === (w = S.media) || void 0 === w ? void 0 : w.mediaFile,
                    R = null != T && T.isVideo ? 'video' : null != T && T.isGif ? 'gif' : 'photo'
                  x = T ? R : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    g(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
                      conversation_id: d,
                      conversation_participant_count: k,
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
                            C &&
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
                        senderId: v,
                        recipients:
                          f &&
                          f.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: _,
                      }).then(function (e) {
                        g(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
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
                composerHeight: Ce.a.theme.componentDimensions.appBarHeight,
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
                  Object(We.a)(t, n) || this.setState({ attachment: $e(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    Ue.a,
                    { style: [re.a.root, xe.b.isKaiOS() && re.a.kaiOSFix] },
                    y.a.createElement(z.a, {
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
                    v = this.state,
                    g = v.attachment,
                    b = v.isSending,
                    _ = this.props.prefillText || o
                  return null != a && a.read_only
                    ? null
                    : y.a.createElement(U.a, {
                        attachment: g,
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
                        primaryActionIcon: qe,
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
      v()(Ze, 'contextType', se.a), v()(Ze, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Fe.a)()(K(Ze))
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
        v = n.n(f),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        b = n('3XMw'),
        _ = n.n(b),
        E = n('cjZk'),
        S = 'fileInput',
        C = n('sjK1'),
        k = n('/Imo'),
        I = n('rHpw'),
        x = n('9HgX'),
        w = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        T = _.a.b9960f31,
        R = { viewType: 'media_picker' },
        F = y.a.createElement(E.a, null),
        A = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? x.b : []).concat(t ? [x.a] : []).concat(r ? C.a : [])
        },
        M = (function (e) {
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
                    d = o()(e, w),
                    u = A({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    k.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: R,
                      icon: c ? l : void 0,
                      style: [O.root, s],
                      testID: S,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()(M, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: T,
        icon: F,
        size: 'medium',
        withIcon: !0,
      })
      var O = I.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = M
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
          return v
        }),
        n.d(t, 'j', function () {
          return g
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
      function v(e, t, n, a) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: a, scribeNamespace: n },
        }
      }
      function g(e, t) {
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
      n.r(t)
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
        v,
        g,
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
                                          (p = {
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
                                      (g = {
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
                                      g,
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
      ;(y.hash = 'ce2e2976cf1d1610f3238a158593facf'), (t.default = y)
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
      n.r(t)
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
      ;(i.hash = '86e5601441f8d07b68ccbcf112746d23'), (t.default = i)
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
        v = Object(p.a)()
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
        g = n('YeIG'),
        y = n('uCxL'),
        b = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        E = v(function (e) {
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
              m && Object(g.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(b.f)(i, p, t),
            v = f && Object(b.e)(f),
            E = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: h,
              socialContextProps: v,
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
        v = n('2VqO'),
        g = n.n(v),
        y = n('KEM+'),
        b = n.n(y),
        _ = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        E = n('3XMw'),
        S = n.n(E),
        C = n('sgih'),
        k = n('t62R'),
        I = n('/yvb'),
        x = n('rHpw'),
        w = S.a.cfd2f35d,
        T = (function (e) {
          f()(n, e)
          var t = g()(n)
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
                      style: R.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    C.a,
                    { onMaskClick: o, style: R.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(k.b, { align: 'center', style: R.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(k.b, { align: 'center', color: 'gray700', style: R.labelText }, n),
                    l,
                    r.a.createElement(I.a, { onPress: o, size: 'xLarge', style: R.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(T, 'defaultProps', { cancelButtonLabel: w })
      var R = x.a.create(function (e) {
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
        F = T,
        A = n('I/9y'),
        M = n('mjJ+'),
        O = n('cm6r'),
        L = n('CaKu'),
        D = n('U+bB'),
        P = S.a.e05c00b4,
        N = S.a.eabf2209,
        B = S.a.a613e72f,
        K = S.a.f88553c8,
        j = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        H = (function (e) {
          f()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(M.a, {
                  items: [{ text: B, Icon: A.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              b()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                L.a.isAvailable() ? (L.a.setString(r), n({ text: K })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
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
                    l = j[o]
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
                          k.b,
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
                    O.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      k.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(D.a, { source: { uri: t }, style: U.image }),
                      r.a.createElement(k.b, null, e.toUpperCase()),
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
        z = l(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(V, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = z
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
          v = [h.root, o && h.labelHeader]
        return r.a.createElement(
          s.a,
          { style: v },
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
        v = n('4n2h'),
        g = h(function (e) {
          var t = e.entry,
            n = e.entryType,
            a = e.isSelected,
            o = void 0 !== a && a,
            l = e.perspective,
            s = e.unread,
            c = void 0 !== s && s,
            d = e.users,
            u = Object(f.a)(t, n, l, d),
            p = Object(v.b)(c),
            m = Object(v.a)(c, o)
          return r.a.createElement(i.b, { color: m, weight: p }, u)
        }),
        y = (n('ho0z'), n('v6aA')),
        b = n('oEGd'),
        _ = Object(c.createSelector)(
          function (e, t) {
            return u.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? u.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        E = Object(b.c)(_),
        S = n('X/yg'),
        C = n('cTG8'),
        k = n('3XMw'),
        I = n.n(k),
        x = function (e) {
          return r.a.createElement(I.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, r.a.createElement(i.b, null, e))
        },
        w = I.a.dedfd265
      var T = I.a.a876e58b,
        R = I.a.bf584cd1,
        F = I.a.a9cc8cfd,
        A = I.a.e20b65b0,
        M = I.a.e5bfe07d,
        O = I.a.b1a614fe,
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
          var g = f.attachment,
            b = g && !!(g.video || g.photo || g.animated_gif || g.tweet || g.fleet || g.sticker || g.card),
            _ = n === c.id_str,
            E = !(!b || !_) || !(!a || _),
            k = c.name,
            L = u.name,
            D = Object(v.b)(l),
            P = Object(v.a)(l, m),
            N = [
              E && r.a.createElement(i.b, { key: 'senderName' }, x(k), ' '),
              f &&
                f.text &&
                r.a.createElement(C.a, {
                  displayTextRange: [0, f.text.length],
                  entities: f.entities,
                  key: 'message',
                  text: f.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            g &&
              (g.tweet
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.d5b762c8)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, k)
                    : O)
                : g.fleet
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
                : g.video
                ? (N = Object(S.l)(g, h)
                    ? E
                      ? (function (e, t) {
                          return e
                            ? r.a.createElement(i.b, null, I.a.h7033cac)
                            : r.a.createElement(
                                I.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                r.a.createElement(i.b, null, t),
                              )
                        })(_, k)
                      : w
                    : E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.j7d81019)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, k)
                    : T)
                : g.photo
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.f80629ba)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, k)
                    : R)
                : g.animated_gif
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.eb3d722e)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, k)
                    : F)
                : g.sticker
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.d30c2d4f)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, k)
                    : A)
                : g.card &&
                  (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, I.a.db53c017)
                          : r.a.createElement(
                              I.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, k)
                    : M)),
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
        B = function (e, t) {
          var n = N(e, t)
          return n && n.message_data && u.e.select(e, n.message_data.sender_id)
        },
        K = Object(b.e)(function () {
          return Object(c.createSelector)(P, N, B, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        j = n('33Kz'),
        H = K(function (e) {
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
            g = f && f.attachment,
            b = f && f.text,
            _ = l && l.screen_name,
            E = s === (d && d.id_str),
            S = d && d.name,
            C = Object(j.b)(u.reaction_key || '', h),
            k = Object(v.b)(m),
            x = Object(v.a)(m, o)
          return (
            (t =
              g && g.tweet
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
                    })(E, S, _, C)
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
                    })(E, S, C)
                : g && g.video
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
                    })(E, S, _, C)
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
                    })(E, S, C)
                : g && g.photo
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
                    })(E, S, _, C)
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
                    })(E, S, C)
                : g && g.animated_gif
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
                    })(E, S, _, C)
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
                    })(E, S, C)
                : g && g.card
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
                    })(E, S, _, C)
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
                    })(E, S, C)
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
                    })(E, S, C, _, b)
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
                    })(E, S, C, b)
                : (function (e, t, n) {
                    return e
                      ? r.a.createElement(I.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, r.a.createElement(i.b, null, n))
                      : r.a.createElement(
                          I.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          r.a.createElement(i.b, null, t),
                          r.a.createElement(i.b, null, n),
                        )
                  })(E, S, C)),
            r.a.createElement(i.b, { color: x, numberOfLines: 1, weight: k }, t)
          )
        }),
        U = n('H4nC'),
        V = n('b9JY'),
        z = I.a.fb3ccb55
      t.a = function (e) {
        var t = e.conversationType,
          n = e.entry,
          a = e.isSelected,
          l = void 0 !== a && a,
          s = e.perspective,
          c = e.unread
        if (n.marked_as_spam) {
          var d = Object(v.b)(c),
            u = Object(v.a)(c, l)
          return r.a.createElement(i.b, { color: u, numberOfLines: 1, weight: d }, z)
        }
        if (Object(V.b)(n)) {
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
        return Object(V.c)(n)
          ? r.a.createElement(H, {
              isGroupDM: t === o.CONVERSATION_TYPE.GROUP,
              isSelected: l,
              perspective: s,
              reactionEntry: n,
              senderId: n.sender_id,
              unread: c,
            })
          : Object(V.a)(n)
          ? r.a.createElement(g, { entry: n, entryType: n.type, isSelected: l, perspective: s, unread: c })
          : Object(V.d)(n)
          ? r.a.createElement(U.a, { entry: n, isCompact: !0, isSelected: l, unread: c })
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
        v = n.n(f),
        g = (n('2G9S'), n('3voH'), n('ERkP')),
        y = n.n(g),
        b = n('ZUOq'),
        _ = n('MMRb'),
        E = n('RqPI'),
        S = n('rxPX'),
        C = n('0KEI'),
        k = Object(S.a)()
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
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchInboxIfNeeded: _.fetchInboxIfNeeded,
              loadDrawerVisibilityFromPersistence: _.loadDrawerVisibilityFromPersistence,
              setDrawerVisibility: _.setDrawerVisibility,
            }
          }),
        I = n('V/6K'),
        x = (n('z84I'), n('yiKp')),
        w = n.n(x),
        T = (n('lTEL'), n('7x/C'), n('kYxP'), n('CDB5')),
        R = n('1YZw'),
        F = n('hqKg'),
        A = n('X/yg'),
        M = n('AQOc'),
        O = n('UhuB'),
        L = n('l0YN'),
        D = n('G6rE'),
        P = n('P1r1'),
        N = function (e, t) {
          return t.conversationId
        },
        B = Object(F.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, N(0, t))
          },
          E.r,
          function (e, t) {
            return t ? Object(A.e)(e, t) : void 0
          },
        ),
        K = function (e) {
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
          quickReplyOptions: B,
          visibility: _.selectDrawerVisibility,
          inboxUnreadCount: L.a,
          isUnread: function (e, t) {
            return !_.selectConversationIsRead(e, N(0, t))
          },
          isDmReceiptSettingEnabled: O.n,
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
            return w()(w()({}, H), U)
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
              v = e.visibility,
              g = null == t ? void 0 : t.data
            return {
              conversation: g && Object(M.a)(g, i, f),
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
              visibility: v,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              addMedia: j(t),
              addToast: R.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationHistory: _.fetchConversationHistory,
              removeMedia: K(t),
              saveText: T.f,
              sendMessage: T.m,
              updateConversationReadState: _.updateConversationReadState,
              updateTyping: _.updateTyping,
              fetchUpdatesIfNeeded: _.fetchUpdatesIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'thread_drawer' }),
        z = n('aWyx'),
        W = n('qz2E'),
        q = n('Oi4X'),
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
            w()(
              w()({}, e),
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
            w()(
              w()({}, e),
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
        ve = n('x0mb'),
        ge = J.a.a2f8105f,
        ye = J.a.d227d19e,
        be = J.a.c64c1883,
        _e = J.a.j7d0e835,
        Ee = J.a.b08821f3,
        Se = J.a.e736990a,
        Ce = J.a.cdcebd22,
        ke = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
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
                        hoverLabel: { label: Ce },
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
                  i = n || y.a.createElement(re.b, null, ge)
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
                    o = r ? (i ? [Ie.headerHighlighted] : [Ie.headerActive]) : [],
                    l = this._isExpanded()
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
      v()(ke, 'contextType', le.a)
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
        xe = Q(ke),
        we = (n('JtPf'), n('87if'), n('zb92')),
        Te = Object(we.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(233)]).then(n.bind(null, 'Rk1B'))
          },
        }),
        Re = n('aWzz'),
        Fe = n('XnpN'),
        Ae = n('GSsg'),
        Me = n('aITJ'),
        Oe = n('yrzJ'),
        Le = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, a)),
              v()(d()(r), '_composer', y.a.createRef()),
              v()(d()(r), '_renderConversation', function (e, t) {
                var n = r.props,
                  a = n.conversationId,
                  i = n.history,
                  o = n.location
                return y.a.createElement(q.a, {
                  conversationId: a,
                  drawerHeader: r._renderHeader(),
                  history: i,
                  isWide: !1,
                  location: o,
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
              Object(W.a)(),
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
                      ? Me.b.isDesktopOS()
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
                    o = e.onDrawerOpen,
                    l = e.perspective,
                    s = e.triggerHeaderHighlight,
                    c = r ? 'white' : 'text',
                    d = r ? 'white' : 'gray700',
                    u =
                      t &&
                      t.type === z.a.ONE_TO_ONE &&
                      l &&
                      Object(Fe.a)(t, l).map(function (e) {
                        return e.user.screen_name
                      }),
                    p = u ? y.a.createElement(Oe.a, { color: d, screenName: u[0] }) : void 0
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
      v()(Le, 'contextType', le.a), v()(Le, 'childContextTypes', { getCustomLocation: Re.func })
      var De = oe.a.create(function (e) {
          return { headerRoot: { position: 'sticky', top: 0, zIndex: e.componentZIndices.appBarZIndex } }
        }),
        Pe = V(Le),
        Ne = (n('i4UL'), n('K1iM')),
        Be = n.n(Ne),
        Ke = (n('tQbP'), n('4q8G')),
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
              o = e.untrustedUnreadCount,
              l = e.visibility,
              s = [],
              c = Be()(Object(je.a)(n))
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
            s.sort(Ke.a)
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
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
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
        ze = n('nySH'),
        We = n('yw4N'),
        qe = n('FIs5'),
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
              v()(d()(e), '_renderHeader', function () {
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
                      We.a,
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
                  y.a.createElement(qe.a, {
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
                        link: Object(ze.a)(Y.d.SECONDARY),
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
                  this._isExpanded() && Object(W.a)()
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
      v()(nt, 'contextType', le.a)
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
            viewportView: w()(w()({}, oe.a.absoluteFillObject), {}, { overflowY: 'auto' }),
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
      v()(ht, 'defaultProps', { width: b.a.dmDrawerWidth.max })
      var ft = k(ht)
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
        v = n.n(f),
        g = n('K1iM'),
        y = n.n(g),
        b = n('RhWx'),
        _ = n.n(b),
        E = (n('wFPu'), n('CDB5')),
        S = n('xVN5'),
        C = n('vjRr'),
        k = n('rxPX'),
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
              if ((n = C.a.select(e, l))) break
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return n
        },
        w = Object(k.a)()
          .propsFromState(function () {
            return { card: x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: C.a.fetchCardPreviewIfNeeded,
              updateDMComposer: E.e,
              updateTweetComposer: S.w,
            }
          }),
        T = n('KqB4'),
        R = n.n(T),
        F = n('aX4+'),
        A = n('3XMw'),
        M = n.n(A),
        O = n('hOZg'),
        L = n('cnVF'),
        D = n('MWbm'),
        P = n('v6aA'),
        N = n('/yvb'),
        B = n('rHpw'),
        K = n('VY6S'),
        j = n('mN6z'),
        H = M.a.f6fec9f6,
        U = /^https?:\/\//i,
        V = function (e) {
          var t = R()(e)
          if (t.length)
            return t.map(function (e) {
              return (!U.test(e) && 'http://'.concat(e)) || e
            })
        },
        z = (function (e) {
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
              (i._debouncedFetchCardPreview = Object(K.a)(i._fetchCardPreviewIfNeeded, 1e3)),
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
                  Object(j.a)(e.urls, t) || this._debouncedFetchCardPreview()
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
                    ? v.a.createElement(
                        D.a,
                        { style: a },
                        v.a.createElement(F.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        v.a.createElement(N.a, {
                          accessibilityLabel: H,
                          icon: v.a.createElement(O.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: W.closeButton,
                          type: 'onMediaDominantColorFilled',
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(z, 'contextType', P.a)
      var W = B.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        q = w(z)
      t.a = q
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
                      : o.scribe(p()({}, t({ action: e, component: g(n) })))
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
      var v = {
        Timelines: Object(m.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function g(e) {
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
        return Object(d.k)(t) ? r.a.createElement(f, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = b
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
          v = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: f.container },
          s.a.createElement(
            u.a,
            r()({}, l, { interactiveStyles: v, style: f.root }),
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
        v = n('3dyc'),
        g = h.a.create(function (e) {
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
          C = e.text,
          k = e.withMask,
          I = void 0 === k || k,
          x = o.a.useState(!1),
          w = r()(x, 2),
          T = w[0],
          R = w[1],
          F = function (e) {
            return o.a.createElement(
              p.a,
              {
                onDismiss: N,
                renderContent: function () {
                  return M(N)
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
            return o.a.createElement(
              m.a,
              {
                onMaskClick: function () {
                  return N()
                },
                type: 'center',
                withMask: !0,
              },
              M(N),
            )
          },
          M = function (e) {
            return o.a.createElement(
              f.a,
              { style: [g.root, _ && g.rootWithImage] },
              O(),
              o.a.createElement(
                f.a,
                { style: g.container },
                L(),
                D(),
                P({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                P({ action: n, dismiss: e }),
              ),
            )
          },
          O = function () {
            var e = y && o.a.createElement(y, { style: b ? [g.icon, { color: h.a.theme.colors[b] }] : g.icon })
            return (
              _ &&
                !u.a.isEnabled &&
                (e = o.a.createElement(l.a, { accessibilityLabel: '', aspectMode: c.a.exact(2), image: _ })),
              e && o.a.createElement(f.a, { style: g.graphic }, e)
            )
          },
          L = function () {
            return o.a.createElement(s.b, { size: 'title3', weight: 'heavy' }, i)
          },
          D = function () {
            return o.a.createElement(s.b, { color: 'gray700', style: g.description }, C)
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
                  style: g.actionButton,
                  type: a,
                },
                t.text,
              )
            )
          },
          N = function () {
            E && E(), R(!0)
          }
        return S && !T ? (a ? F(a) : A()) : a || null
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
        v = n('kLqS'),
        g = n('MWbm'),
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
            a = v.a.get() > 1 ? m : p
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              g.a,
              { style: [y.content, y.dimensions] },
              o.a.createElement(u, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            o.a.createElement(f.a, { source: a, style: y.hidden }),
          )
        },
        _ = n('pNJr'),
        E = n('2ZFc'),
        S = n('OiMc'),
        C = n('/yvb'),
        k = d.a.d4a4842d,
        I = o.a.createElement(_.a, null),
        x = d.a.fec16c1c,
        w = { viewType: 'emoji_picker' },
        T = function (e) {
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
            o.a.createElement(C.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: k,
              behavioralEventContext: w,
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
      T.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = T
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
          return v
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
        v = function (e) {
          return r.a.createElement(u.a, null, function (t) {
            var n = t.windowWidth,
              a = i.a.isTwoColumnLayout(n),
              o = 0 === e.length
            return a || o
              ? null
              : r.a.createElement(
                  d.a,
                  { style: g.stickyCopyContainer },
                  r.a.createElement(p.b, { style: g.stickyCopy }, l.a),
                )
          })
        },
        g = m.a.create(function (e) {
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
        v = n.n(f),
        g = (n('vrRf'), n('ERkP')),
        y = n.n(g),
        b = n('BUB3'),
        _ = n('v6aA'),
        E = n('xZGM'),
        S = n('rxPX'),
        C = Object(S.a)()
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
        k = n('fs1G'),
        I = n('t62R'),
        x = n('feu+'),
        w = n('3XMw'),
        T = n.n(w),
        R = T.a.fd6150fc,
        F = y.a.createElement(
          T.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.a.createElement(I.b, { link: '/privacy' }, T.a.d42d239f),
        ),
        A = T.a.j24c37b2,
        M = C(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            a = e.shouldShowPrompt,
            r = y.a.useContext(_.a).featureSwitches
          if (!(a && r.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.a.createElement(x.a, {
              actionLabel: A,
              headline: R,
              onAction: function () {
                n.scribeAction('click'), t(E.k)
              },
              onClose: k.a,
              subtext: F,
              withCloseButton: !1,
            })
          )
        }),
        O = n('MMRb'),
        L = n('kGix'),
        D = n('0KEI'),
        P = Object(S.a)()
          .propsFromState(function () {
            return {
              hasConversations: O.selectHasConversations,
              fetchStatus: O.selectFetchStatus,
              isLoadingTop: O.selectIsLoadingTop,
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
              fetchInbox: O.fetchInbox,
              fetchInboxIfNeeded: O.fetchInboxIfNeeded,
              fetchUpdates: O.fetchUpdatesIfNeeded,
            }
          }),
        N = n('ddV6'),
        B = n.n(N),
        K =
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
          n('HPNB')),
        j = n('EbOo'),
        H = n('tZH3'),
        U = n('1YZw'),
        V = n('hqKg'),
        z = n('AQOc'),
        W = n('G6rE'),
        q = n('oEGd'),
        G = function (e, t) {
          return t.conversationId
        },
        Q = Object(V.createSelector)(
          G,
          function (e, t) {
            return O.selectConversation(e, G(0, t))
          },
          O.selectEntries,
          W.e.selectAll,
          function (e, t) {
            return !O.selectConversationIsRead(e, G(0, t))
          },
          function (e, t) {
            var n = G(0, t)
            return Object(O.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(E.D)(e, E.t)
          },
          function (e, t, n, a, r, i, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(z.a)(t.data, n, a),
              conversationId: e,
              unread: r,
              inboxType: i,
              shouldShowPinnedEducation: o,
            }
          },
        ),
        Y = {
          addFlag: E.z,
          addRecentSearch: O.addRecentSearches,
          addToast: U.b,
          block: W.e.block,
          createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: O.disableNotifications,
          enableNotifications: O.enableNotifications,
          leaveConversation: O.leaveConversation,
          muteDMUser: O.muteDMUser,
          unmuteDMUser: O.unmuteDMUser,
          unblock: W.e.unblock,
        },
        X = Object(q.f)(Q, Y),
        J = n('aA19'),
        $ = n('OhSZ'),
        Z = n('V/6K'),
        ee = n('fQBn'),
        te = n('Myq3'),
        ne = n('3wZR'),
        ae = n('XnpN'),
        re = n('aWyx'),
        ie = n('YemM'),
        oe = 'conversation',
        le = n('u0B7'),
        se = n('MWbm'),
        ce = n('Irs7'),
        de = n('eb3s'),
        ue = n('ZToW'),
        pe = n('cHvH'),
        me = n('lHOd'),
        he = n('kb9v'),
        fe = n('IG7M'),
        ve = n('mjJ+'),
        ge = n('Znyr'),
        ye = n('0PHd'),
        be = n('yrzJ'),
        _e = n('Xrkv'),
        Ee = n('efqG'),
        Se = n('/yvb'),
        Ce = n('GBcw'),
        ke = n('cm6r'),
        Ie = n('htQn'),
        xe = n('5mJL'),
        we = n('vMjK'),
        Te = n('AQ79'),
        Re = n('pHkl'),
        Fe = n('X/yg'),
        Ae = n('Lsrn'),
        Me = n('k/Ka'),
        Oe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Me.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ae.a.root, e.style],
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
      Oe.metadata = { width: 24, height: 24 }
      var Le = Oe,
        De = n('ShJ/'),
        Pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Me.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ae.a.root, e.style],
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
      Pe.metadata = { width: 32, height: 32 }
      var Ne = Pe,
        Be = n('zIWA'),
        Ke = n('5pef'),
        je = n('IpT4'),
        He = n('5oT/'),
        Ue = n('fz3c'),
        Ve = T.a.d88d0790,
        ze = T.a.ad63377d,
        We = {
          confirmButtonLabel: T.a.bb1d57b6,
          actionTextLeave: T.a.g9074da4,
          header: T.a.gdf4b79f,
          text: T.a.h09b49f7,
        },
        qe = T.a.e1c9ec9b,
        Ge = T.a.i6b19b07,
        Qe = T.a.e3cfff7c,
        Ye = T.a.f398722d,
        Xe = T.a.a8ed0eca,
        Je = T.a.jac4eb1e,
        $e = T.a.bdd91963,
        Ze = T.a.a30a206d,
        et = T.a.ib4b1b85,
        tt = T.a.bd3ca2ee,
        nt = function (e) {
          var t
          return Boolean(
            null == e || null === (t = e.labels) || void 0 === t
              ? void 0
              : t.find(function (e) {
                  return e.label_type === Te.a.PINNED
                }),
          )
        },
        at = { component: 'low_quality_timeline' },
        rt = function (e) {
          var t = e.children
          return y.a.createElement(se.a, { style: ie.a.socialProofContainer }, t)
        },
        it = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(d()(e), '_count', e.context.featureSwitches.getValue('dm_conversation_labels_max_pinned_count')),
              v()(
                d()(e),
                '_isPinnedEducationEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_education_enabled'),
              ),
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
              v()(d()(e), 'state', { showActionMenu: !1, showConfirmation: !1, showPinnedAnnouncement: !1 }),
              v()(d()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return y.a.createElement(de.a, {
                  confirmButtonLabel: We.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: We.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: We.text,
                })
              }),
              v()(d()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered,
                  i = e.state,
                  o = i.showActionMenu,
                  l = i.showPinnedAnnouncement,
                  s = e.props,
                  c = s.conversation,
                  d = s.position,
                  u = nt(c),
                  p = function () {
                    e.setState({ showPinnedAnnouncement: !1 })
                  },
                  m = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  h = e._isPinnedEducationEnabled && l && 1 === d && !u,
                  f = !ue.a.isEnabled || n || a || r || o || h
                return y.a.createElement(Z.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return y.a.createElement(pe.a, null, function (t) {
                    var a = t.windowWidth,
                      r = K.a.isTwoColumnLayout(a)
                    return y.a.createElement(me.a.Consumer, null, function (t) {
                      return y.a.createElement(
                        se.a,
                        { style: ie.a.menuContainer },
                        y.a.createElement(
                          he.a,
                          {
                            actionPrimary: { text: Ze, onClick: p },
                            headline: et,
                            onDismiss: p,
                            shouldDisplay: h && !n,
                            text: tt({ count: e._count }),
                            withMask: !r,
                          },
                          r
                            ? y.a.createElement(fe.a, {
                                onClick: m,
                                renderActionMenu: e._renderActionMenu,
                                style: f ? ie.a.menu : ie.a.hiddenMenu,
                              })
                            : null,
                        ),
                        r
                          ? null
                          : y.a.createElement(fe.a, {
                              onClick: m,
                              renderActionMenu: e._renderActionMenu,
                              style: f ? ie.a.menu : ie.a.hiddenMenu,
                            }),
                      )
                    })
                  })
                })
              }),
              v()(d()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  a = n.conversation,
                  r = n.conversationId,
                  i = e.context.history,
                  o = nt(a),
                  l = null == a ? void 0 : a.notifications_disabled,
                  s = []
                if (a) {
                  var c = {
                    Icon: o ? Le : De.a,
                    onClick: function () {
                      return e._handleTogglePinState(o)
                    },
                    text: o ? $e : qe,
                    withBottomBorder: !0,
                  }
                  s.push(c)
                  var d = {
                      Icon: Ne,
                      isEmphasized: !0,
                      onClick: e._handleDeleteMenuItemClick,
                      text: ze,
                      withBottomBorder: !0,
                    },
                    u = {
                      Icon: Be.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(i)()
                      },
                      text: Ge,
                      withBottomBorder: !0,
                    },
                    p = {
                      Icon: l ? Ke.a : je.a,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(r)
                      },
                      text: l ? Xe : Qe,
                      withBottomBorder: !0,
                    }
                  s.push(u, p, d)
                }
                return y.a.createElement(ve.a, {
                  items: s,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              v()(d()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered
                switch (e.props.inboxType) {
                  case Te.d.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: a, isHovered: r })
                      : null
                  case Te.d.SECONDARY:
                  case Te.d.TERTIARY:
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
                    ? y.a.createElement(ge.a, {
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
                  case Te.d.PRIMARY:
                    return e._isVDLEnabled ? i : r ? null : e._renderTimestamp(t)
                  case Te.d.SECONDARY:
                    return e._isVDLEnabled ? i : null
                  default:
                    return null
                }
              }),
              v()(d()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(ne.b)(t.icon)
                return y.a.createElement(
                  I.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.a.createElement(n, { style: ie.a.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(d()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var a = n[0]
                switch (a.proof_type) {
                  case re.d.MUTUAL_FRIENDS:
                    if (0 === a.total) return null
                    var r = a.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = a.users.map(function (e) {
                        return e.name
                      })
                    return y.a.createElement(
                      rt,
                      null,
                      y.a.createElement(
                        I.b,
                        { weight: e._isVDLEnabled ? 'medium' : 'normal' },
                        y.a.createElement(ye.a, {
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
              v()(d()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r = t.searchQuery,
                  i = n ? Object(ae.a)(n, a) : [],
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
                  if (n.type === O.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var d = i.map(function (e) {
                        return e.user
                      }),
                      u = B()(d, 1)[0]
                    return y.a.createElement(be.a, { color: 'gray700', screenName: u.screen_name })
                  }
                  var p = Object(_e.a)(c, !0)
                  return y.a.createElement(I.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              v()(d()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = e.context.loggedInUserId,
                  i = Object(Fe.j)(n, r),
                  o = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP
                return y.a.createElement(me.a.Consumer, null, function (t) {
                  return y.a.createElement(
                    Ee.a,
                    {
                      renderContent: function (n, r) {
                        return y.a.createElement(H.a, {
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
                    y.a.createElement(Se.a, {
                      accessibilityLabel: Ve,
                      icon: y.a.createElement(He.a, { style: e._isVDLEnabled ? ie.a.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? ie.a.vdlXButton : ie.a.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              v()(d()(e), '_handleDeleteMenuItemClick', function () {
                e.setState({ showConfirmation: !0 })
              }),
              v()(d()(e), '_handleHideMenu', function (t) {
                return function () {
                  t && t(), e.setState({ showActionMenu: !1 })
                }
              }),
              v()(d()(e), '_getUserIdOfOneToOneConvo', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r =
                    n &&
                    Object(ae.a)(n, a).map(function (e) {
                      return e.user
                    }),
                  i = (r && r[0]) || null
                return i ? i.id_str : ''
              }),
              v()(d()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.conversation,
                    i = n.conversationId,
                    o = n.inboxType,
                    l = Ue.a.DMConversation,
                    s = e.context.featureSwitches,
                    c =
                      (null == r ? void 0 : r.type) === O.CONVERSATION_TYPE.GROUP ? '0' : e._getUserIdOfOneToOneConvo()
                  if (i)
                    if ((a.scribeAction('report'), Object(Ue.g)(s, l))) {
                      var d = Object(Ue.d)({
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
                      var u = Object(Fe.g)(i, window.location.pathname, a.contextualScribeNamespace, o)
                      t.push(u)
                    }
                }
              }),
              v()(d()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  a = n.addToast,
                  r = n.analytics,
                  i = n.conversation,
                  o = n.disableNotifications,
                  l = n.enableNotifications
                if (null == i ? void 0 : i.notifications_disabled)
                  l({ conversationId: t }).then(a({ ariaOnly: !0, text: Je }))
                else {
                  var s = (null == i ? void 0 : i.participants.length) || 0,
                    c = {
                      conversation_type:
                        (null == i ? void 0 : i.type) === O.CONVERSATION_TYPE.GROUP ? Re.j.GROUP : Re.j.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: s,
                      entry_point: Re.c.THREE_DOT_MENU,
                    }
                  r.scribe({ element: 'thread', action: 'mute_dm_thread_forever', data: c }),
                    o({ conversationId: t }).then(a({ ariaOnly: !0, text: Ye }))
                }
              }),
              v()(d()(e), '_handleTogglePinState', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.conversation,
                  i = n.conversationId,
                  o = n.pinConversation,
                  l = n.position,
                  s = n.unpinConversation,
                  c = t ? 'unpin_dm_conversation' : 'pin_dm_conversation',
                  d = t ? s : o,
                  u = (null == r ? void 0 : r.participants.length) || 0,
                  p = {
                    conversation_type:
                      (null == r ? void 0 : r.type) === O.CONVERSATION_TYPE.GROUP ? Re.j.GROUP : Re.j.ONE_TO_ONE,
                    conversation_id: i,
                    conversation_participant_count: u,
                    position: l,
                  }
                a.scribe({ element: 'thread', action: c, data: p }), r && d && d(i, r)
              }),
              v()(d()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              v()(d()(e), '_renderTimestamp', function (t) {
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
                    se.a,
                    { style: [r && ie.a.inlineTimestamp, i && ie.a.inlineTimestampVDL] },
                    a && l ? y.a.createElement(Ce.a, { timestamp: l }) : null,
                    null != a && a.notifications_disabled ? y.a.createElement(je.a, { style: o }) : null,
                  ),
                )
              }),
              v()(d()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.conversation,
                    i = n.createLocalApiErrorHandler,
                    o = n.inboxType,
                    l = n.leaveConversation,
                    s = n.position,
                    c = e.context.history,
                    d = nt(r),
                    u = (null == r ? void 0 : r.participants.length) || 0,
                    p = r && r.type === O.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    m = {
                      conversation_type:
                        (null == r ? void 0 : r.type) === O.CONVERSATION_TYPE.GROUP ? Re.j.GROUP : Re.j.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: s,
                      inbox_type: Object(Fe.i)(o),
                      entry_point: o === Re.e.PRIMARY ? Re.c.THREE_DOT_MENU : Re.c.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    a.scribe({ element: 'thread', action: p, data: m }),
                    d && e._handleTogglePinState(d),
                    l({ conversationId: t }).catch(i({ showToast: !0 })),
                    c.replace(Object(Fe.f)(o))
                }
              }),
              v()(d()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    a = n.addToast,
                    r = n.analytics,
                    i = n.block,
                    o = n.createLocalApiErrorHandler
                  i(t).then(function () {
                    a({ action: { label: we.c, onAction: e._createUnblockUserHandler(t) }, text: we.a })
                  }, o(j.a)),
                    r.scribeAction('block')
                }
              }),
              v()(d()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(r(le.a)), a.scribeAction('unblock')
                }
              }),
              v()(d()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              v()(d()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  a = n.addRecentSearch,
                  r = n.analytics,
                  i = n.conversation,
                  o = n.conversationId,
                  l = n.onClick,
                  s = n.position,
                  c = n.searchQuery,
                  d = (null == i ? void 0 : i.participants.length) || 0,
                  u = (null == i ? void 0 : i.type) === O.CONVERSATION_TYPE.GROUP
                c &&
                  (r.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: o,
                      conversation_participant_count: d,
                      conversation_type: u ? Re.j.GROUP : Re.j.ONE_TO_ONE,
                      entry_point: Re.c.ALL,
                      inbox_type: Re.e.PRIMARY,
                      dm_search_result_type: Re.a.CONVERSATION,
                      message_type: Re.f.NOT_APPLICABLE,
                      position: s,
                    },
                  }),
                  r.scribe({ component: 'recent_search', action: 'add' }),
                  a(c)),
                  l(t, o, i, s)
              }),
              v()(d()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(r()(r()({}, at), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag
                  e.shouldShowPinnedEducation && (this.setState({ showPinnedAnnouncement: !0 }), t(E.t))
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = this.props.conversation,
                    a = null == n ? void 0 : n.conversation_id,
                    r = null == n ? void 0 : n.notifications_disabled,
                    i = null == n ? void 0 : n.last_read_event_id,
                    o = null == n ? void 0 : n.sort_event_id,
                    l = null == n ? void 0 : n.max_entry_id,
                    s = null == n ? void 0 : n.convo_label,
                    c = this.props.messageId,
                    d = e.conversation,
                    u = null == d ? void 0 : d.conversation_id,
                    p = null == d ? void 0 : d.notifications_disabled,
                    m = null == d ? void 0 : d.last_read_event_id,
                    h = null == d ? void 0 : d.sort_event_id,
                    f = null == d ? void 0 : d.max_entry_id,
                    v = null == d ? void 0 : d.convo_label,
                    g = e.messageId,
                    y = this.props,
                    b = y.filter,
                    _ = y.isActive,
                    E = e.filter,
                    S = e.isActive,
                    C = this.state,
                    k = C.showConfirmation,
                    I = C.showPinnedAnnouncement,
                    x = t.showConfirmation,
                    w = t.showPinnedAnnouncement
                  return (
                    a !== u ||
                    r !== p ||
                    i !== m ||
                    o !== h ||
                    l !== f ||
                    c !== g ||
                    _ !== S ||
                    k !== x ||
                    b !== E ||
                    s !== v ||
                    I !== w
                  )
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
                    p = this.state.showConfirmation,
                    m = (null == n ? void 0 : n.entries) || [],
                    h = i
                      ? m.find(function (e) {
                          return e.id === l
                        })
                      : Object(te.a)(m, function (e) {
                          return !Re.b.includes(e.type)
                        }),
                    f = [ie.a.root, u && !this._isVDLEnabled && ie.a.unread, a && this._isVDLEnabled && ie.a.active],
                    v = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP,
                    g = this._isVDLEnabled && v
                  if (!n) return null
                  var b = !!n.convo_label,
                    _ = !n.trusted && !b,
                    E = this._renderConversationEndCell(h),
                    S = d && !i,
                    C = 'text',
                    k = 'bold'
                  return (
                    this._isVDLEnabled && !u && ((C = 'gray900'), (k = 'medium')),
                    this._isVDLEnabled && a && ((C = 'text'), (k = 'medium')),
                    !n || (!d && n.isSearchResultOnly)
                      ? null
                      : y.a.createElement(
                          y.a.Fragment,
                          null,
                          p ? this._renderConfirmationSheet() : null,
                          y.a.createElement(ke.a, null, function (t) {
                            var l = t.isFocused,
                              p = t.isFocusedWithin,
                              m = t.isHovered
                            return y.a.createElement(
                              Ie.a,
                              {
                                accessibilityRole: 'none',
                                accessibilityState: { selected: a },
                                link: {
                                  pathname: null == o ? void 0 : o.pathname,
                                  anchorless: !0,
                                  state: r()(
                                    r()({}, null == o ? void 0 : o.state),
                                    {},
                                    {
                                      position: c,
                                      entryPoint: i ? (null == h ? void 0 : h.id) : null,
                                      isMessageItem: i,
                                    },
                                  ),
                                },
                                onPress: e._handleOnClick,
                                style: f,
                                testID: oe,
                              },
                              y.a.createElement(
                                xe.a,
                                {
                                  avatarCell: y.a.createElement(J.a, { conversation: n, perspective: s, withBadge: g }),
                                  avatarSize: 'xxLarge',
                                },
                                y.a.createElement(
                                  se.a,
                                  { style: ie.a.bodyColumn },
                                  y.a.createElement(
                                    se.a,
                                    { style: ie.a.titleContainer },
                                    y.a.createElement($.b, {
                                      conversation: n,
                                      isConversationSearchTitle: !!S,
                                      isMessageSearchTitle: !!i,
                                      perspective: s,
                                      renderTimestamp: function () {
                                        return e._renderTimestamp(h)
                                      },
                                      textColor: C,
                                      titleWeight: k,
                                      withScreenName: !d && !i,
                                      withVDLRefresh: e._isVDLEnabled,
                                    }),
                                    y.a.createElement(
                                      se.a,
                                      { style: [ie.a.snippet, !l && !p && !m && ie.a.snippetPadding] },
                                      h && !S
                                        ? y.a.createElement(ee.a, {
                                            conversationType: n.type,
                                            entry: h,
                                            isMessageItem: i,
                                            isSelected: e._isVDLEnabled && a,
                                            perspective: s,
                                            unread: e._isVDLEnabled && u,
                                          })
                                        : S
                                        ? e._renderSearchConversationPreview()
                                        : null,
                                    ),
                                    b ? e._renderConversationLabel(n) : null,
                                    _ ? e._renderSocialProof(n) : null,
                                  ),
                                  E ? y.a.createElement(se.a, { style: ie.a.endCell }, E) : null,
                                  e._renderConversationActions({ isFocused: l, isFocusedWithin: p, isHovered: m }),
                                ),
                              ),
                            )
                          }),
                        )
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(it, 'contextType', _.a),
        v()(it, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var ot = Object(ce.a)(X(it), { page: 'messages', section: 'inbox' }),
        lt =
          (n('jwue'),
          n('+oxZ'),
          n('JtPf'),
          n('87if'),
          Object(S.a)()
            .propsFromState(function () {
              return { pinnedConversationIds: O.selectPinnedConversationIds }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                  'DM_PINNED_INBOX_CONTEXT',
                ),
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox' })),
        st = n('oUUt'),
        ct = n('d9IC'),
        dt = n('h3MB'),
        ut =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('uFXj'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        pt = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        mt = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: pt, sliceItems: ut }
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
        ht = n('MDbM'),
        ft = n('v//M'),
        vt = n('0yYu'),
        gt = n('rHpw'),
        yt = n('lBmi'),
        bt = n('91AQ'),
        _t = n('6ZHn'),
        Et = T.a.c94ac69d,
        St = T.a.a2f8105f,
        Ct = T.a.g2fd3205,
        kt = T.a.ffd9cfe6,
        It = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
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
                  o = r.length && n.length,
                  l = e._groupBucketSize < n.length,
                  s = e._messagesBucketSize < a.length,
                  c = e._peopleBucketSize < r.length
                return (null == n ? void 0 : n.length) || r.length || a.length
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      r.length ? e._renderPeopleSection() : null,
                      o && !c ? y.a.createElement(vt.a, null) : null,
                      c ? e._renderDMSearchFooter(Ct) : null,
                      n.length ? e._renderGroupsSection() : null,
                      l ? e._renderDMSearchFooter(Et) : null,
                      a.length ? e._renderMessagesSection() : null,
                      s ? e._renderDMSearchFooter(St) : null,
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
                  se.a,
                  { style: wt.header },
                  y.a.createElement(I.b, { link: { pathname: n.pathname, state: { tab: t } } }, kt),
                )
              }),
              v()(d()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.a.createElement(ct.a, { headerText: t, icon: n })
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
                  e._renderDMHeader({ icon: yt.a, headerText: Et }),
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
                  o = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: bt.a, headerText: St }),
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
              v()(d()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: _t.a, headerText: Ct }),
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
                  e.module !== a && n !== ht.a.FAILED && this._handleFetch()
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
                  return y.a.createElement(ft.a, {
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
      v()(It, 'contextType', _.a)
      var xt,
        wt = gt.a.create(function (e) {
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
        Tt = mt(It),
        Rt = n('wAC9'),
        Ft = (n('1IsZ'), n('IAdD'), n('xPna')),
        At = function (e) {
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
            Object(Ft.a)(a)
          )
        },
        Mt = function (e) {
          return Object(Rt.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(Re.h, '-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: At,
          })
        },
        Ot = function (e, t) {
          return t.query
        },
        Lt = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(Ot, function (e) {
              return e ? Mt(e) : void 0
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
            ? y.a.createElement(Tt, {
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
        Dt = O.selectRecentSearches,
        Pt = function (e, t) {
          return t.query ? O.selectSearchConversations(e, t.query) : []
        },
        Nt = function (e, t) {
          return t.query ? O.selectSearchFetchStatus(e, t.query) : L.a.LOADED
        },
        Bt = function (e, t) {
          return t.conversationIds || []
        },
        Kt = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        jt = Object(S.a)()
          .propsFromState(function () {
            return { conversationIds: Bt, recentSearches: Dt, searchFetchStatus: Nt, searchConversationIds: Pt }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              a = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: Kt(a, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: O.addRecentSearches,
              createLocalApiErrorHandler: Object(D.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: O.searchConversations,
              clearRecentSearch: O.clearRecentSearch,
              clearRecentSearches: O.clearRecentSearches,
            }
          }),
        Ht = n('VY6S'),
        Ut = n('s14A'),
        Vt = function (e) {
          return Object(Rt.a)({
            contextSuffix: 'DM_GROUP_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMGroupSearch
            },
            sliceKey: ''.concat(Re.h, '-groups-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: At,
          })
        },
        zt = function (e) {
          return Object(Rt.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(Re.h, '-people-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: At,
          })
        },
        Wt = function (e, t) {
          return t.query
        },
        qt = function (e, t) {
          return t.tabType
        },
        Gt = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(qt, Wt, function (e, t) {
              var n = t && e === Re.i.PEOPLE
              return t && e === Re.i.GROUPS ? Vt(t) : n ? zt(t) : void 0
            }),
          }
        }),
        Qt = n('FS1z'),
        Yt = Gt(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            a = e.pinConversation,
            r = e.renderEmptyState,
            i = e.renderInboxItem,
            o = e.sliceModule,
            l = e.unpinConversation
          return o
            ? y.a.createElement(Qt.a, {
                footer: t,
                module: o,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: i({ conversationIds: [], pinConversation: a, unpinConversation: l }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        Xt = n('VPW4'),
        Jt = (n('enFi'), n('mN6z')),
        $t = n('TEoO'),
        Zt = n('NjAB'),
        en = n('Fr3L'),
        tn = n('uDfI'),
        nn = n('s8G+'),
        an = n('DQzJ'),
        rn = void 0 !== xt ? xt : (xt = n('y59G')),
        on = 'DM_MESSAGE_SEARCH',
        ln = { context: on },
        sn = function (e) {
          return e
        },
        cn = function (e) {
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
            p = Object(tn.c)(),
            m = Object(nn.a)('dm_inbox_search_message_attachment_previews_enabled'),
            h = Object(nn.a)('rito_safety_mode_blocked_profile_enabled'),
            f = Object(nn.a)('super_follow_user_api_enabled'),
            v = Object(an.a)(rn, {
              query: d,
              withAttachments: m,
              withSafetyModeUserFields: h,
              withSuperFollowsUserFields: f,
            }),
            g = v.data,
            b = v.fetchNext,
            _ = v.hasNext,
            E = y.a.useMemo(
              function () {
                var e,
                  t,
                  n,
                  a =
                    null == g ||
                    null === (e = g.dm_message_slice_result) ||
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
                  i = null == g || null === (n = g.dm_message_slice_result) || void 0 === n ? void 0 : n.items,
                  o = Object(Zt.b)(a, [dt.a]),
                  l = Object(Zt.b)(i, [dt.b])
                return {
                  normalizedConversations: o,
                  normalizedMessages: l,
                  entities: r()(r()({}, null == o ? void 0 : o.entities), null == l ? void 0 : l.entities),
                }
              },
              [null == g || null === (t = g.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            S = E.entities,
            C = E.normalizedConversations,
            k = E.normalizedMessages,
            I =
              ((n = g),
              (a = y.a.useRef()),
              y.a.useEffect(function () {
                a.current = n
              }),
              a.current)
          return (
            y.a.useEffect(
              function () {
                Object(Jt.a)(g, I) || p(At(S, !0))
              },
              [S, g, I, p],
            ),
            y.a.createElement($t.a, {
              cacheKey: on,
              footer: _ ? null : i,
              identityFunction: sn,
              items: null == k ? void 0 : k.result,
              noItemsRenderer: o,
              onNearEnd: b,
              onScrollEnd: l,
              renderer: c({
                conversationIds: null == C ? void 0 : C.result,
                isMessageItem: !0,
                messageIds: null == k ? void 0 : k.result,
                pinConversation: s,
                unpinConversation: u,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        dn = gt.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function un(e) {
        return y.a.createElement(
          en.a,
          { errorConfig: ln },
          y.a.createElement(
            y.a.Suspense,
            { fallback: y.a.createElement(Xt.a, { style: dn.activityIndicatior }) },
            y.a.createElement(cn, e),
          ),
        )
      }
      var pn = n('j7Bv'),
        mn = n('VwDm'),
        hn = n('hOZg'),
        fn = T.a.dbd5d40f,
        vn = (function (e) {
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
                    r = y.a.createElement(pn.a, { Icon: mn.a, color: 'neutral', size: 'xLarge', style: gn.searchIcon }),
                    i = [gn.listItemView, gn.bottomBorder]
                  return y.a.createElement(
                    Ie.a,
                    { onPress: n, style: i },
                    y.a.createElement(
                      se.a,
                      null,
                      y.a.createElement(
                        xe.a,
                        { avatarCell: r, avatarSize: 'xLarge', cellStyle: gn.avatarColumn },
                        y.a.createElement(
                          se.a,
                          { style: gn.container },
                          y.a.createElement(I.b, { numberOfLines: 1 }, a),
                          y.a.createElement(Se.a, {
                            accessibilityLabel: fn,
                            borderColor: 'transparent',
                            icon: y.a.createElement(hn.a, null),
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
        gn = gt.a.create(function (e) {
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
        yn = vn,
        bn = n('DbJc'),
        _n = n('IG4P'),
        En = n('RJrc'),
        Sn = n('TnY3'),
        Cn = n('FIs5'),
        kn = n('6OUF'),
        In = n('k/OQ'),
        xn = n('95Se'),
        wn = 'dmSearchInbox',
        Tn = function (e) {
          return e
        },
        Rn = T.a.b08821f3,
        Fn = T.a.a66ac766,
        An = T.a.fe61929d,
        Mn = T.a.a846382a,
        On = T.a.b9dae4f4,
        Ln = T.a.e7fb2027,
        Dn = T.a.b92a21d8,
        Pn = T.a.jdc67c42,
        Nn = T.a.e8581ccd,
        Bn = T.a.f08940ab,
        Kn = T.a.gaae1fd5,
        jn = T.a.i5d7593a,
        Hn = T.a.f8321d82,
        Un = T.a.c94ac69d,
        Vn = T.a.a2f8105f,
        zn = T.a.g2fd3205,
        Wn = T.a.fb3c8e74,
        qn = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
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
                    y.a.createElement(Cn.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Bn,
                      header: Dn({ query: r }),
                      message: e._messageSearchEnabled ? Nn : Pn,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.a.createElement(
                      se.a,
                      { style: $n.emptyState },
                      y.a.createElement(I.b, { align: 'center', color: 'gray700' }, e._messageSearchEnabled ? jn : Kn),
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
                      y.a.createElement(ct.a, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Wn,
                        withClearButton: !0,
                      }),
                      r.map(function (t) {
                        return y.a.createElement(yn, {
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
                  o = e.state.debouncedQuery
                return o
                  ? y.a.createElement(Lt, {
                      loadingLabel: Fn,
                      location: n,
                      pinConversation: a,
                      query: o,
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
                  o = e.state.debouncedQuery
                return y.a.createElement(Yt, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  pinConversation: a,
                  query: o,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: r,
                  tabType: t ? Re.i.GROUPS : Re.i.PEOPLE,
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
                  ? y.a.createElement(un, {
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
                  case zn:
                    return e._renderConversationsTab(!1)
                  case Un:
                    return e._renderConversationsTab(!0)
                  case Vn:
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
                  o = t.unpinConversation,
                  l = e.state.isRefreshing
                return y.a.createElement(
                  Ut.a,
                  null,
                  y.a.createElement(
                    _n.a,
                    { isRefreshing: l, onRefresh: e._handlePullToRefresh },
                    y.a.createElement($t.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: bn.a,
                      assumedItemHeight: 100,
                      cacheKey: wn,
                      footer: e._renderFooter(),
                      identityFunction: Tn,
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
              v()(d()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? y.a.createElement(En.a, null)
                  : y.a.createElement(
                      se.a,
                      { style: $n.footerContainer },
                      y.a.createElement(I.b, { align: 'center', size: 'body', weight: 'bold' }, Ln),
                      y.a.createElement(
                        ke.a,
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
                          On,
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
              v()(d()(e), '_handleSearchChangeDebounced', Object(Ht.a)(e._handleSearchChangeInner, 200)),
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
                    o = [$n.searchInput, i ? $n.searchInputBorder : void 0],
                    l = ((null == t ? void 0 : t.state) || {}).tab,
                    s = [Hn, zn, Un]
                  this._messageSearchEnabled && s.push(Vn)
                  var c = s.map(function (e) {
                      return {
                        key: e,
                        label: e,
                        accessibilityLabel: e,
                        isActive: function () {
                          return l === e || (!l && e === Hn)
                        },
                        to: r()(r()({}, t), {}, { state: r()(r()({}, t.state), {}, { tab: e }) }),
                      }
                    }),
                    d = l === Vn && this._messageSearchEnabled
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      se.a,
                      { style: o },
                      y.a.createElement(Se.a, {
                        accessibilityLabel: Rn,
                        icon: y.a.createElement(xn.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.a.createElement(kn.a, {
                        Icon: mn.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? Mn : An,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || l === zn || l === Un || d)
                      ? y.a.createElement(
                          y.a.Fragment,
                          null,
                          y.a.createElement(In.a, { links: c }),
                          this._renderTabContent(),
                        )
                      : y.a.createElement(ft.a, {
                          accessibilityLabel: Fn,
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
      v()(qn, 'contextType', _.a), v()(qn, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var Gn,
        Qn,
        Yn,
        Xn,
        Jn,
        $n = gt.a.create(function (e) {
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
        Zn = Object(Sn.a)(jt(qn)),
        ea = n('UIzd'),
        ta = n.n(ea),
        na = n('OIs+'),
        aa = T.a.cb367657,
        ra = T.a.ie9a7e48,
        ia = T.a.hd3927c6,
        oa = T.a.f1ac0968,
        la =
          ((Gn = {}),
          v()(Gn, na.a.Offline, { toast: { text: ra } }),
          v()(Gn, 'defaultToast', { text: aa }),
          v()(Gn, 'showToast', !0),
          Gn),
        sa =
          ((Qn = {}),
          v()(Qn, na.a.Offline, { toast: { text: oa } }),
          v()(Qn, 'defaultToast', { text: ia }),
          v()(Qn, 'showToast', !0),
          Qn),
        ca = n('9SqB'),
        da = n.n(ca),
        ua = n('Ud88'),
        pa = n.n(ua),
        ma = T.a.e4b3f520,
        ha = T.a.ae4d666a,
        fa = function (e) {
          return e
        },
        va = T.a.a219e217,
        ga = T.a.d571e4f8,
        ya = T.a.a551bf7d,
        ba = T.a.d98e066b,
        _a = T.a.j302dba7,
        Ea = void 0 !== Yn ? Yn : (Yn = n('X8um')),
        Sa = { context: 'DM_PINNED_INBOX' },
        Ca = function (e) {
          var t,
            a,
            i,
            o = Object(tn.c)(),
            l = e.accessibilityTitle,
            s = e.analytics,
            c = e.cacheKey,
            d = e.conversationIds,
            u = e.createLocalApiErrorHandler,
            p = e.footer,
            m = e.header,
            h = e.onNearEnd,
            f = e.pinnedConversationIds,
            g = e.renderEmptyDMInbox,
            b = e.renderInboxItem,
            E = e.showSearchView,
            S = e.withKeyboardShortcuts,
            C = pa()(),
            k = Object(an.a)(Ea, { label: Te.a.PINNED }).data,
            I = y.a.useMemo(
              function () {
                var e
                return (
                  (null == k || null === (e = k.labeled_conversation_slice) || void 0 === e ? void 0 : e.items) || []
                )
              },
              [k],
            ),
            x = Object(Zt.b)(I, [dt.a]).entities,
            w = y.a.useContext(_.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            T = y.a.useState(!1),
            R = B()(T, 2),
            F = R[0],
            A = R[1],
            M = y.a.useState(!1),
            L = B()(M, 2),
            D = L[0],
            P = L[1],
            N =
              ((a = k),
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
                            return e.label_type !== Te.a.PINNED
                          })
                  o(At({ conversations: v()({}, e.rest_id, r()(r()({}, e), {}, { labels: n })) }))
                }),
                o(At(x, !1))
            },
            [k],
          )
          var K = y.a.useCallback(
              function () {
                A(!0)
                var e = ta()(C, Ea, { label: Te.a.PINNED }).toPromise()
                Promise.all([
                  e,
                  function () {
                    return o(O.fetchInbox())
                  },
                ])
                  .then(function () {
                    return A(!1)
                  })
                  .catch(function (e) {
                    u()(e), A(!1)
                  })
              },
              [u, o, C],
            ),
            j = da()(void 0 !== Xn ? Xn : (Xn = n('ZH9U'))),
            H = B()(j, 1)[0],
            V = da()(void 0 !== Jn ? Jn : (Jn = n('rQjK'))),
            z = B()(V, 1)[0],
            W = y.a.useCallback(
              function (e, t) {
                H({
                  variables: { conversation_id: e, label: Te.a.PINNED },
                  onCompleted: function (n) {
                    var a
                    switch (null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename) {
                      case 'DMConversationLabelInfo':
                        var i = n.add_dm_conversation_label_v3,
                          l = i.label_type,
                          c = i.timestamp
                        o(
                          At({
                            conversations: v()(
                              {},
                              e,
                              r()(r()({}, t), {}, { labels: [{ label_type: l, timestamp: c }] }),
                            ),
                          }),
                        ),
                          o(Object(U.b)({ ariaOnly: !0, text: ba }))
                        break
                      case 'DMConversationLabelUnavailable':
                        var d = n.add_dm_conversation_label_v3.failure_reason
                        s.scribe({
                          element: 'thread',
                          action: 'error_shown',
                          data: { error_type: Re.g.MAX_PINS_REACHED },
                        }),
                          'ExceededMaxPinnedConversations' === d && P(!0)
                    }
                  },
                  onError: function (e) {
                    u(la)(e)
                  },
                })
              },
              [o, u, H, s],
            ),
            q = y.a.useCallback(
              function (e, t) {
                z({
                  variables: { conversation_id: e, label_type: Te.a.PINNED },
                  onCompleted: function (n) {
                    var a,
                      i = t
                        ? null == t || null === (a = t.labels) || void 0 === a
                          ? void 0
                          : a.filter(function (e) {
                              return e.label_type !== Te.a.PINNED
                            })
                        : []
                    o(At({ conversations: v()({}, e, r()(r()({}, t), {}, { labels: i })) })),
                      o(Object(U.b)({ ariaOnly: !0, text: _a }))
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
                      i = null == k || null === (a = k.labeled_conversation_slice) || void 0 === a ? void 0 : a.__id
                    if (r && i) {
                      var o = t.get(r),
                        l = t.get(i)
                      l && o && (Object(st.b)(l, r), t.delete(r))
                    }
                  },
                  onError: function (e) {
                    u(sa)(e)
                  },
                })
              },
              [u, I, null == k || null === (t = k.labeled_conversation_slice) || void 0 === t ? void 0 : t.__id, o, z],
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
                    ka(ma),
                    f.map(function (e, t) {
                      return b({ conversationIds: f, pinConversation: W, unpinConversation: q })(e)
                    }),
                  )
                : null,
              Q ? ka(ha) : null,
            )
          return null != d && d.length
            ? y.a.createElement(
                y.a.Fragment,
                null,
                D
                  ? y.a.createElement(de.a, {
                      confirmButtonLabel: va,
                      headline: ga({ count: w }),
                      onConfirm: function () {
                        return P(!1)
                      },
                      text: ya,
                      withCancelButton: !1,
                    })
                  : null,
                E
                  ? y.a.createElement(Zn, {
                      accessibilityTitle: l,
                      analytics: s,
                      conversationIds: d,
                      hideRecentSearches: e.hideRecentSearches,
                      onQueryChange: e.onQueryChange,
                      pinConversation: W,
                      query: e.query,
                      renderInboxItem: e.renderInboxItem,
                      unpinConversation: q,
                    })
                  : y.a.createElement(
                      _n.a,
                      { isRefreshing: F, onRefresh: K },
                      c && null != G && G.length
                        ? y.a.createElement($t.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: l,
                            anchoring: bn.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: p,
                            header: Y,
                            identityFunction: fa,
                            items: G,
                            onNearEnd: h,
                            renderer: b({ conversationIds: G, pinConversation: W, unpinConversation: q }),
                            withKeyboardShortcuts: S,
                            withoutHeadroom: !0,
                          })
                        : Y,
                    ),
              )
            : g()
        },
        ka = function (e) {
          return y.a.createElement(se.a, null, y.a.createElement(ct.a, { headerText: e, isInboxLabelHeader: !0 }))
        }
      function Ia(e) {
        return y.a.createElement(en.a, { errorConfig: Sa }, y.a.createElement(Ca, e))
      }
      var xa = lt(y.a.memo(Ia)),
        wa = n('dwig'),
        Ta = n('QB0K'),
        Ra = n('Avzu'),
        Fa = n('FRNI'),
        Aa = T.a.h845f281,
        Ma = T.a.f325afc3
      function Oa() {
        return y.a.createElement(Ta.a, {
          accessibilityLabel: Aa,
          href: '/messages/compose',
          icon: y.a.createElement(Ra.a, null),
          label: Aa,
          scribeComponent: 'floating_dm_button',
          shortLabel: Ma,
          testID: Fa.a.message,
        })
      }
      var La = y.a.memo(Oa),
        Da = n('tI3i'),
        Pa = n.n(Da),
        Na = n('sNn6'),
        Ba = n('883S'),
        Ka = n('yoO3'),
        ja = n('GSsg'),
        Ha = n('2g+p'),
        Ua = n('mw9i'),
        Va = n('BcsE'),
        za = n('+d3d'),
        Wa = function (e) {
          return e
        },
        qa = T.a.a66ac766,
        Ga = T.a.fe61929d,
        Qa = T.a.a846382a,
        Ya = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i, l, s, c, u, p, m, h
            return (
              o()(this, n),
              (h = t.call(this, e, a)),
              v()(d()(h), 'state', {
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
                return y.a.createElement(Zn, {
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
                      _n.a,
                      { isRefreshing: l, onRefresh: h._handlePullToRefresh },
                      c && r
                        ? y.a.createElement($t.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: a,
                            anchoring: bn.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: i,
                            header: h._renderHeader(),
                            identityFunction: Wa,
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
                    v = {
                      pathname: '/messages/'.concat(f),
                      state: r()(r()({}, null == c ? void 0 : c.state), {}, { entryPoint: null, searchQuery: d }),
                    },
                    g = f && null != t && t.length ? t.indexOf(f) : null,
                    _ = Object(Va.a)(g) ? g + 1 : 0
                  Pa()(!!s, 'loggedInUserId must be defined'), n && n(!0)
                  var E = function (e) {
                    return y.a.createElement(ot, {
                      conversationId: f,
                      inboxType: h.props.inboxType,
                      isActive: e,
                      isMessageItem: a,
                      key: f,
                      link: v,
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
                    ? y.a.createElement(Na.a, { exact: !1, path: v.pathname }, E)
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
                  o = e.virtualScrollerCacheKey,
                  l = h.state,
                  s = l.searchQuery,
                  c = l.showSearchView
                return n.length
                  ? y.a.createElement(xa, {
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
                  o = r.customCellClick,
                  l = (null == n ? void 0 : n.participants.length) || 0,
                  s = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP
                i.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: h.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: l,
                    conversation_type: s ? Re.j.GROUP : Re.j.ONE_TO_ONE,
                    position: a,
                  },
                }),
                  o && o(e, t)
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
                if ('background' !== Ha.a.currentState) return h._updateLastSeenEventId()
              }),
              v()(d()(h), '_renderHeader', function () {
                var e = h.props,
                  t = e.renderStickyContent,
                  n = e.withDmSearch,
                  a = [Xa.searchInput, h._isVDLEnabled ? void 0 : Xa.searchInputBorder]
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  n
                    ? y.a.createElement(
                        se.a,
                        { onClick: h._handleSearchClick, style: a },
                        y.a.createElement(kn.a, {
                          Icon: mn.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: h._handleSearchChange,
                          placeholder: h._messageSearchEnabled ? Qa : Ga,
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
              (h._fab = y.a.createElement(La, null)),
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
                    (this._updatePolling = new ja.a(
                      function () {
                        r().then(e._updateLastSeenEventIdIfActive, n(Ba.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(za.a)(function () {
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
                    Ka.a,
                    null,
                    y.a.createElement(M, null),
                    y.a.createElement(
                      wa.a,
                      { component: Ua.a, fab: this._fab, style: Xa.root },
                      y.a.createElement(ft.a, {
                        accessibilityLabel: qa,
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
      v()(Ya, 'contextType', _.a),
        v()(Ya, 'defaultProps', {
          conversationIds: [],
          inboxType: Te.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Xa = gt.a.create(function (e) {
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
      t.a = Object(Sn.a)(P(Ya))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
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
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        E = n('nT9l'),
        S = n('3XMw'),
        C = n.n(S),
        k = 'image',
        I = n('TIdA'),
        x = n('a6qo'),
        w = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        T = C.a.f93bb3ee,
        R = (function (e) {
          h()(n, e)
          var t = v()(n)
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
                  c = o()(i, w)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    I.a,
                    r()({}, c, { accessibilityLabel: l, onVariantSelection: n, previewMode: a, testID: k }),
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
        v = n.n(f),
        g = n('rHpw'),
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
                  return v.a.createElement(
                    _,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [S.root, a, r && i],
                    },
                    v.a.createElement(b.a, { style: S.inner }, 'function' == typeof n ? n(r) : n),
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
        })(v.a.Component)
      h()(E, 'defaultProps', { allowDragDrop: !0 })
      var S = g.a.create(function (e) {
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
      n.r(t)
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
      ;(i.hash = 'f0ba5e0b671c54ae94c7322d3036a375'), (t.default = i)
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
        v = o.a.g9074da4,
        g = o.a.ad63377d,
        y = o.a.h09b49f7,
        b = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        E = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        C = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            d = e.onReportClick,
            C = e.requestorScreenName,
            I = e.showBlock,
            x = e.showCancel,
            w = e.showDelete,
            T = r.a.useCallback(
              function () {
                d && d(), t()
              },
              [t, d],
            ),
            R = r.a.useCallback(
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
            { accessibilityRole: 'dialog', style: n ? k.flatCorners : k.roundCorners },
            w
              ? r.a.createElement(s.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? v : g,
                  onClick: F,
                  textColor: 'red500',
                })
              : null,
            I
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: C }), onClick: R })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: a ? b : _({ screenName: C }),
              onClick: T,
            }),
            x ? r.a.createElement(c.a, { onPress: t, style: k.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var k = d.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = C
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
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        b = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(b),
        E = n('1YZw'),
        S = n('zh9S'),
        C = n('P1r1'),
        k = n('AspN'),
        I = n('rxPX'),
        x = Object(I.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.j }
          })
          .propsFromActions(function () {
            return {
              addMedia: k.b,
              addToast: E.b,
              processMultipleMedia: k.g,
              removeMediaUpload: k.i,
              scribeAction: S.scribeAction,
              preUploadMedia: k.e,
            }
          }),
        w = n('wpu3'),
        T = n('cOB2'),
        R = n('MWbm'),
        F = n('0FVZ'),
        A = n('Oe3h'),
        M = n('rHpw')
      var O = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            a = e.children,
            r = e.onLayout,
            i = e.sideNavPresent,
            l = e.style,
            s = _.a.useContext(T.a)
          return i
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(R.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l }, a),
              )
            : _.a.createElement(
                F.a.BottomComposer,
                null,
                _.a.createElement(A.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return _.a.createElement(
                    R.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l })),
                    a,
                    _.a.createElement(R.a, { style: !1 === s.keyboardVisible && L.offsetBottom }),
                  )
                }),
              )
        },
        L = M.a.create(function () {
          return { offsetBottom: { paddingBottom: M.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        P = n('htQn'),
        N = n('t62R'),
        B = (function (e) {
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
                      style: [K.root, n && K.isWide, !n && K.isNarrow],
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
        K = M.a.create(function (e) {
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
        j = B,
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
                      o = [i && z.isWide, i && n && z.oneButtonOnly, !i && z.isNarrow]
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
        z = M.a.create(function (e) {
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
        W = V,
        q = n('krmn'),
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
        ve = n('9Xij'),
        ge = n('/yvb'),
        ye = n('OiMc'),
        be = n('v6aA'),
        _e = n('gpVt'),
        Ee = n('Lsrn'),
        Se = n('k/Ka'),
        Ce = function () {
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
      Ce.metadata = { width: 24, height: 24 }
      var ke = Ce,
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
        we = n('iySH'),
        Te = J.a.ee230734,
        Re = J.a.ca0ce0e4,
        Fe = J.a.cdcebd22,
        Ae = J.a.ic8c615d,
        Me = J.a.a04077c4,
        Oe = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(w.b)({ maxNumberOfPhotos: 1 }),
        De = (function (e) {
          h()(n, e)
          var t = v()(n)
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
                  a.width <= M.a.theme.breakpoints.small && !n
                    ? c.setState({ mediaButtonsCollapsible: !0 })
                    : a.width > M.a.theme.breakpoints.small && n && c.setState({ mediaButtonsCollapsible: !1 }))
              }),
              y()(p()(c), '_renderQuickReplyPicker', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state.isQuickReplyOpen
                return e && t
                  ? _.a.createElement(W, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              y()(p()(c), '_renderComposeBox', function () {
                return _.a.createElement(R.a, { style: Pe.composeBoxContainer }, c._renderMainContent())
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
                  i = he.b.isKaiOS() ? Fe : a || Re,
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
                        R.a,
                        { style: Pe.attachmentContainer, testID: de },
                        _.a.createElement(
                          ve.a,
                          { ratio: d / s, style: Pe.aspectContainer },
                          _.a.createElement(
                            R.a,
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
                            R.a,
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
                  ? _.a.createElement(q.a, {
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
                      ge.a,
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
                    ge.a,
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
                return _.a.createElement(ge.a, {
                  accessibilityLabel: Ae,
                  icon: e ? _.a.createElement(ke, null) : _.a.createElement(xe, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Pe.actionButton,
                  type: 'brandText',
                })
              }),
              y()(p()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = Oe(e),
                  n = c._renderComposeBox(),
                  a = c._renderPrimaryActionButton(t),
                  r = c._renderSecondaryActionButton()
                return _.a.createElement(
                  R.a,
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
                  R.a,
                  { style: Pe.uploadButtons },
                  i
                    ? _.a.createElement(ge.a, {
                        accessibilityLabel: Te,
                        icon: _.a.createElement(we.a, null),
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
                    : (a({ text: Me }), d(t))
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
                return !Oe(c.props.attachment) && Le(e)
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
                  i = Oe(t),
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
                    l = i || Re,
                    s = Object(ce.a)(),
                    c = s && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    O,
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
      var Pe = M.a.create(function (e) {
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
          v = Object(c.b)(),
          g = r.a.useCallback(
            function () {
              s && s(),
                v.scribe({ element: 'found_media_button', action: 'click' }),
                l.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, v, o, l, s],
          )
        return r.a.createElement(i.a, {
          accessibilityLabel: d,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: u,
          onPress: g,
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
          return v
        }),
        n.d(t, 'c', function () {
          return g
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
            v = l ? l.user : {},
            g = l ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = f(l || a) || {},
            E = ((t = {}), o()(t, v.id_str, v), o()(t, g.id_str, g), o()(t, h.id_str, h), o()(t, _.id_str, _), t)
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
            C = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(S(v)),
                  r()(S(g)),
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
            k = i && h.id_str === i ? [i].concat(r()(C)) : C
          return (
            n &&
              (k = k.filter(function (e) {
                return e !== h.id_str
              })),
            k.map(function (e) {
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
        v = function (e) {
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
        g = v({ maxNumberOfPhotos: 4 }),
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
      n.r(t)
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
        v,
        g,
        y,
        b,
        _,
        E,
        S,
        C,
        k,
        I,
        x,
        w,
        T,
        R,
        F,
        A,
        M,
        O,
        L,
        D,
        P,
        N,
        B,
        K,
        j,
        H,
        U,
        V,
        z,
        W,
        q,
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
        ve,
        ge,
        ye,
        be,
        _e,
        Ee,
        Se,
        Ce,
        ke,
        Ie,
        xe,
        we,
        Te,
        Re,
        Fe,
        Ae,
        Me,
        Oe,
        Le,
        De,
        Pe,
        Ne,
        Be,
        Ke,
        je = {
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
                                      (v = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (g = {
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
                                                    selections: (C = [
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
                                                              (S = {
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
                                                            ],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
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
                                                    selections: C,
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
                                                          (w = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              (k = {
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
                                                              p,
                                                              u,
                                                              (F = {
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
                                                  (M = {
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
                                          (B = {
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
                                            selections: C,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: C,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: C,
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
                                              p,
                                              (V = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'text',
                                                storageKey: null,
                                              }),
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: C,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: C,
                                                storageKey: null,
                                              },
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
                                                      (z = {
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
                                                                  z,
                                                                  {
                                                                    kind: 'InlineFragment',
                                                                    selections: (X = [
                                                                      (W = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'alt_text',
                                                                        storageKey: null,
                                                                      }),
                                                                      x,
                                                                      I,
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
                                                                    selections: [W, J, $, ee],
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
                                                                              q,
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
                                                                  Z,
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
                                                                              (le = {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'TimelineUrl',
                                                                                kind: 'LinkedField',
                                                                                name: 'url',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  (oe = {
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
                                                                                          (fe = {
                                                                                            alias: 'type',
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: '__typename',
                                                                                            storageKey: null,
                                                                                          }),
                                                                                          (ge = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: (ve = [V]),
                                                                                            type: 'TimelineRichTextCashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (ye = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [p, Z],
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
                                                                                              oe,
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
                                                                                                selections: (Ce = [
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: null,
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'result',
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                      z,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          (Ee = {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType:
                                                                                                              'ApiUser',
                                                                                                            kind: 'LinkedField',
                                                                                                            name: 'legacy',
                                                                                                            plural: !1,
                                                                                                            selections:
                                                                                                              [E],
                                                                                                            storageKey:
                                                                                                              null,
                                                                                                          }),
                                                                                                          u,
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
                                                                                                selections: Ce,
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
                                                                      (Ie = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'has_nft_avatar',
                                                                        storageKey: null,
                                                                      }),
                                                                      (Re = {
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
                                                                            name: 'blocked_by',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'blocking',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'can_dm',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'can_media_tag',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'created_at',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'default_profile',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'default_profile_image',
                                                                            storageKey: null,
                                                                          },
                                                                          ce,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'UserEntities',
                                                                            kind: 'LinkedField',
                                                                            name: 'entities',
                                                                            plural: !1,
                                                                            selections: (we = [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'EntitySet',
                                                                                kind: 'LinkedField',
                                                                                name: 'description',
                                                                                plural: !1,
                                                                                selections: (xe = [
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
                                                                                selections: xe,
                                                                                storageKey: null,
                                                                              },
                                                                            ]),
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'fast_followers_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'favourites_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'follow_request_sent',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'follow_request_received',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'followed_by',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'followers_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'following',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'friends_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'has_custom_timelines',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'is_translator',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'listed_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'location',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'media_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'muting',
                                                                            storageKey: null,
                                                                          },
                                                                          _,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'needs_phone_verification',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'normal_followers_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'notifications',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'pinned_tweet_ids_str',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiMediaExtensions',
                                                                            kind: 'LinkedField',
                                                                            name: 'profile_banner_extensions',
                                                                            plural: !1,
                                                                            selections: (Te = [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'ApiMediaColorExtension',
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
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'profile_banner_url',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'ApiMediaExtensions',
                                                                            kind: 'LinkedField',
                                                                            name: 'profile_image_extensions',
                                                                            plural: !1,
                                                                            selections: Te,
                                                                            storageKey: null,
                                                                          },
                                                                          R,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'profile_interstitial_type',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'protected',
                                                                            storageKey: null,
                                                                          },
                                                                          E,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'statuses_count',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'time_zone',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'translator_type',
                                                                            storageKey: null,
                                                                          },
                                                                          Z,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'utc_offset',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'verified',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'want_retweets',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'withheld_description',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'UserEntities',
                                                                            kind: 'LinkedField',
                                                                            name: 'withheld_entities',
                                                                            plural: !1,
                                                                            selections: we,
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'withheld_in_countries',
                                                                            storageKey: null,
                                                                          },
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'withheld_scope',
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      }),
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [
                                                                          u,
                                                                          (Fe = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'professional_type',
                                                                            storageKey: null,
                                                                          }),
                                                                          (Ae = {
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
                                                                      (Me = {
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
                                                                      (Oe = {
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
                                                                      (Le = {
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
                      (De = {
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
                args: (Pe = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, c, d]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  z,
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
                          z,
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
                                      v,
                                      g,
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
                                                    selections: (Be = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          z,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              p,
                                                              u,
                                                              S,
                                                              (Ne = {
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
                                                    selections: Be,
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
                                                        selections: [z, w],
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
                                                          z,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [p, u, F, Ne],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  A,
                                                  M,
                                                  O,
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
                                          B,
                                          K,
                                          _,
                                          j,
                                          H,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: Be,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: Be,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: Be,
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
                                              p,
                                              V,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: Be,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: Be,
                                                storageKey: null,
                                              },
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
                                                      z,
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
                                                              u,
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
                                                                  _,
                                                                  Z,
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
                                                                              le,
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
                                                                                          z,
                                                                                          {
                                                                                            kind: 'TypeDiscriminator',
                                                                                            abstractKey:
                                                                                              '__isTimelineReferenceObject',
                                                                                          },
                                                                                          fe,
                                                                                          ge,
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
                                                                                                selections: (Ke = [
                                                                                                  {
                                                                                                    alias: null,
                                                                                                    args: null,
                                                                                                    concreteType: null,
                                                                                                    kind: 'LinkedField',
                                                                                                    name: 'result',
                                                                                                    plural: !1,
                                                                                                    selections: [
                                                                                                      z,
                                                                                                      {
                                                                                                        kind: 'InlineFragment',
                                                                                                        selections: [
                                                                                                          Ee,
                                                                                                          Ne,
                                                                                                          u,
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
                                                                                                selections: Ke,
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
                                                                      Ie,
                                                                      Re,
                                                                      Ne,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [u, Fe, Ae, p],
                                                                        storageKey: null,
                                                                      },
                                                                      Me,
                                                                      Oe,
                                                                      Le,
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
                      De,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: Pe,
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
      ;(je.hash = '43f462e52881e76aa030f8d291ff5d5a'), (t.default = je)
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
