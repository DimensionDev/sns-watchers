;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49, 11, 233],
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
        o = n.n(i),
        l = n('i4Oy'),
        s = n('yiKp'),
        c = n.n(s),
        u = (n('lTEL'), n('7x/C'), n('kYxP'), n('wFPu'), n('mw9i')),
        d = n('4AMG'),
        p = n('h3MB'),
        m = (n('enFi'), n('NjAB')),
        f = n('Fr3L'),
        h = n('sl05'),
        g = n('s8G+'),
        v = n('DQzJ'),
        y = void 0 !== a ? a : (a = n('GjeS')),
        b = { context: 'DM_CONVERSATION_METADATA' }
      function _(e) {
        var t = e.conversation,
          n = e.isWide,
          a = e.perspective,
          r = Object(g.a)('rito_safety_mode_blocked_profile_enabled'),
          i = Object(g.a)('super_follow_user_api_enabled'),
          l = (function (e, t) {
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
              o = []
            for (var l in i) o.push(i[l])
            return o.reverse(), c()(c()({}, e), {}, { entries: o, social_proof: [] })
          })(
            t,
            Object(v.a)(y, { id: t.conversation_id || '', withSafetyModeUserFields: r, withSuperFollowsUserFields: i })
              .data,
          )
        return o.a.useCallback(
          function (e) {
            return l
              ? o.a.createElement(
                  u.a,
                  { style: h.a.root },
                  o.a.createElement(d.a, {
                    conversation: l,
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
          [l, n, a],
        )(e)
      }
      function k(e) {
        return o.a.createElement(f.a, { errorConfig: b }, o.a.createElement(_, e))
      }
      var S,
        C = n('qBaR'),
        E = n('RqPI'),
        T = n('z2Pn'),
        w = n('rHpw'),
        x = n('pNZL'),
        R = n('IAZG'),
        F = n('uDfI'),
        A = n('zCf4'),
        I = { page: 'messages', section: 'thread' },
        O = void 0 !== S ? S : (S = n('q2o4')),
        M = { context: 'DM_CONVERSATION_TIMELINE' }
      function L(e) {
        var t = e.richTextInputContext,
          n = e.typeaheadWrapper,
          a = Object(A.f)(),
          i = Object(A.g)(),
          s = Object(A.h)().conversationId,
          c = Object(R.a)(O, { id: s || '' })
        o.a.useEffect(function () {
          r.scribePageImpression(I), r.googleAnalyticsPageView(I), Object(x.b)(I)
        }, []),
          o.a.useEffect(
            function () {
              Object(T.h)(i.pathname)
            },
            [i.pathname],
          )
        var u = 'string' == typeof i.query.text ? i.query.text : void 0,
          d = l.a.get('window').width >= w.a.theme.breakpoints.small,
          f = Object(F.d)(E.r) || '',
          h = (function (e) {
            if (!e) return null
            var t = Object(m.b)([e.dm_conversation_by_rest_id], [p.a]).entities.conversations
            for (var n in t) return t[n]
            return null
          })(c)
        return h && h.conversation_id
          ? o.a.createElement(
              C.a,
              { conversation: h, conversationId: h.conversation_id, newConversationParticipants: [], perspective: f },
              o.a.createElement(k, {
                conversation: h,
                history: a,
                isWide: d,
                perspective: f,
                prefillText: u,
                richTextInputContext: t,
                typeaheadWrapper: n,
              }),
            )
          : null
      }
      function D(e) {
        return o.a.createElement(f.a, { errorConfig: M }, o.a.createElement(L, e))
      }
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
        return Ui
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('ejT/')),
        g = n('ERkP'),
        v = n.n(g),
        y = (n('lTEL'), n('7x/C'), n('kYxP'), n('M+/F'), n('KOtZ'), n('gbD7')),
        b = n('X/yg'),
        _ = (n('Blm6'), n('b9JY')),
        k = function (e, t) {
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
        E = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        T = n('XnpN'),
        w = n('LhSm'),
        x = n('I4+6'),
        R = n('rHpw'),
        F = n('PbQQ'),
        A = n('cm6r'),
        I = n('jV+4'),
        O = n('pBrB'),
        M = n('wCd/'),
        L = function (e, t) {
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
            r = v.a.useContext(E.a).loggedInUserId
          if (!t) return null
          var i = L(t, r || ''),
            o = i.userDescription,
            l = i.userEntities,
            s = i.userFollowerCount,
            c = i.userFriendsCount,
            u = i.userIdStr,
            d = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            f = i.userScreenName,
            h = i.userWithheldDescription,
            g = i.userWithheldEntities,
            y = !!(m && f && ((s && c) || p)),
            b = x.a.generate({
              color: R.a.theme.colors.text,
              backgroundColor: R.a.theme.colors.transparent,
              customFocusBackgroundColor: R.a.theme.colors.gray0,
              customHoverBackgroundColor: R.a.theme.colors.gray0,
              customPressedBackgroundColor: R.a.theme.colors.activeFaintGray,
            })
          return v.a.createElement(F.a.Consumer, null, function (e) {
            return v.a.createElement(
              A.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(f || '')),
                style: [D.root, a && y && D.borderBottom],
              },
              v.a.createElement(I.a, {
                isVerified: d,
                name: m,
                screenName: f,
                style: D.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && l && u
                ? v.a.createElement(O.a, {
                    description: o,
                    entities: l,
                    style: [D.profileInfoItemMargin, D.description],
                    userId: u,
                    withheldDescription: h,
                    withheldEntities: g,
                  })
                : null,
              s && c
                ? v.a.createElement(M.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: f || '',
                    style: D.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? v.a.createElement(w.a, { joinDate: p }) : null,
            )
          })
        },
        K = n('V/6K'),
        B = n('cFyg'),
        j = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        U = n('aA19'),
        N = n('aWyx'),
        H = n('mN6z'),
        V = n('MWbm'),
        W = n('t62R'),
        z = n('jhWN'),
        q = n('MAI/'),
        G = n('zQEV'),
        Y = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return v.a.createElement(W.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        Q = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.entry,
                  r = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  l = Object(G.a)(a, r, i, o)
                switch (r) {
                  case N.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === a.conversation_avatar_image_https
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? v.a.createElement(
                            V.a,
                            { style: X.conversationAvatarContainer },
                            v.a.createElement(U.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      v.a.createElement(Y, null, l),
                    )
                  case N.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(l),
                      u = e._getParticipantsFromEntry(),
                      d = v.a.createElement(
                        W.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return v.a.createElement(v.a.Fragment, null, c, p)
                  default:
                    return v.a.createElement(Y, null, l)
                }
              }),
              f()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return v.a.createElement(
                  A.a,
                  { interactiveStyles: null, link: o, style: X.userAddedYouContainer },
                  i
                    ? v.a.createElement(z.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  v.a.createElement(Y, { link: o, style: X.userAddedYouText }, t),
                )
              }),
              f()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return v.a.createElement(
                  A.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: X.joinConversationDetails,
                  },
                  n,
                  v.a.createElement(q.a, { style: X.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: r }),
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
                  return !Object(H.a)(this.props, e)
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
        J = Object(j.a)(Q),
        Z = n('ddV6'),
        $ = n.n(Z),
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
            u,
            d =
              ((n = ae(R.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = de[R.a.theme.scale]),
              (o = ce / i),
              (l = ue / a),
              (c = ue - (s = ue / 2)),
              (u = ue - s - r),
              {
                cssTransition: ie.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(me, ', opacity ').concat(me) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (re.a.getConstants().isRTL ? 1 : -1) * c }] },
                    received: { transform: [{ translateX: (re.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (re.a.getConstants().isRTL ? 1 : -1) * pe[R.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (re.a.getConstants().isRTL ? -1 : 1) * (pe[R.a.theme.scale] + u) - s }],
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
                a = [d.cssTransition, d.actionsContainer.base]
              return n && a.push(t ? d.actionsContainer.active.sent : d.actionsContainer.active.received), a
            },
            messageContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [d.cssTransition, d.messageContainer.base]
              return n && a.push(t ? d.messageContainer.active.sent : d.messageContainer.active.received), a
            },
            voiceMessageContainer: function (e) {
              e.isSent
              var t = e.isVoiceMessageActive,
                n = [d.cssTransition, d.voiceMessage.container.base]
              return t && n.push(d.voiceMessage.container.active), n
            },
            voiceMessage: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [d.cssTransition, d.voiceMessage.base]
              return (
                n &&
                  (a.push(d.voiceMessage.active.base),
                  a.push(t ? d.voiceMessage.active.sent : d.voiceMessage.active.received)),
                a
              )
            },
            userAvatar: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                a = [d.cssTransition, d.userAvatar.base, t ? d.userAvatar.sent : d.userAvatar.received]
              return n ? a.push(d.userAvatar.active) : t && a.push(d.userAvatar.visuallyHidden), a
            },
          }
        })
      var se,
        ce = 60,
        ue = ce,
        de = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        pe = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        me = '0.2s 0s ease-in-out',
        fe = n('+Kfv'),
        he = n('hqKg'),
        ge = n('oEGd'),
        ve = n('zh9S'),
        ye = n('Yatk'),
        be = n('G6rE'),
        _e = n('P1r1'),
        ke = { scribeAction: ve.scribeAction },
        Se = Object(he.createSelector)(
          function (e, t) {
            return be.e.select(e, t.senderId)
          },
          _e.k,
          _e.q,
          function (e, t, n) {
            return { user: Object(ye.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ce = Object(ge.f)(Se, ke),
        Ee = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Te = n('rxPX'),
        we = n('0KEI'),
        xe = Object(Te.a)()
          .propsFromActions(function () {
            return {
              addToast: Ee.b,
              createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: C.deleteEntry,
            }
          })
          .withAnalytics(),
        Re = n('k49u'),
        Fe = n('LVU8'),
        Ae = n('3XMw'),
        Ie = n.n(Ae),
        Oe = Ie.a.f58dff33,
        Me = Ie.a.ad5a8e8e,
        Le =
          ((se = {}),
          f()(se, Re.a.MissingParameter, { toast: Object(Fe.a)(Oe) }),
          f()(se, Re.a.DirectMessageDestroyPermissionsError, { toast: { text: Me } }),
          f()(se, 'showToast', !0),
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
          createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: De.d,
          removeReaction: Pe.k,
        },
        Ue = Object(ge.f)(Be, je),
        Ne = n('RhWx'),
        He = n.n(Ne),
        Ve = n('33Kz'),
        We = n('wTX1'),
        ze = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            l = e.onPress,
            s = e.style,
            c = v.a.useContext(E.a).featureSwitches,
            u = Object(Ve.b)(r, c),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = x.a.generate({ backgroundColor: R.a.theme.colors.gray50, color: R.a.theme.colors.gray700 })
          return v.a.createElement(
            A.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: l,
              style: [qe.container].concat(He()(s || [])),
            },
            v.a.createElement(W.b, { size: a, style: qe.unsetLineHeight }, u),
            n
              ? v.a.createElement(We.a, { color: 'gray700', containerStyle: qe.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        qe = R.a.create(function (e) {
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
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_handleReactionScribing', function (t, n) {
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
              f()(s()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.createLocalApiErrorHandler,
                    i = a.createReaction,
                    o = a.dismiss,
                    l = a.entry,
                    s = a.fetchUpdatesIfNeeded,
                    c = a.perspective,
                    u = a.removeReaction,
                    d = { reaction_key: t, conversation_id: l.conversation_id, dm_id: l.id, perspective: c }
                  ;(n ? u : i)(d)
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
                      return v.a.createElement(ze, {
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
                  return v.a.createElement(V.a, { style: $e.reactions }, n)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(Je, 'contextType', E.a)
      var Ze = Object(Ye.a)(Ue(Je)),
        $e = R.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        et = n('OiMc'),
        tt = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.isGroupDM,
                  i = n.participantsCount,
                  o = n.perspective
                return v.a.createElement(Ze, {
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
      f()(tt, 'contextType', K.a)
      var nt = n('TnY3'),
        at = n('mjJ+'),
        rt = n('Q0VY'),
        it = n('eb3s'),
        ot = n('/yvb'),
        lt = n('ZToW'),
        st = n('CaKu'),
        ct = n('i4Oy'),
        ut = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        dt = function (e, t) {
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
          if (a) return dt(t.text, a.indices)
          if (n.card) {
            var r,
              i = ((null === (r = t.entities) || void 0 === r ? void 0 : r.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return dt(t.text, i && i.indices)
          }
          return !0
        },
        mt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        ft = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        ht = function (e, t, n) {
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
      var kt = _t,
        St = n('DlVf'),
        Ct = n('ACHU'),
        Et = n('UgB4'),
        Tt = n('fz3c'),
        wt = Ie.a.ba60339a,
        xt = Ie.a.j4bfee22,
        Rt = Ie.a.d96cf7cd,
        Ft = Ie.a.faddd3a2,
        At = Ie.a.eb497e08,
        It = Ie.a.b170974a,
        Ot = Ie.a.i202bd22,
        Mt = Ie.a.f2e5491a,
        Lt = Ie.a.f88553c8,
        Dt = Ie.a.ifea3114,
        Pt = Ie.a.cac14829,
        Kt = Ie.a.h63a5c3b,
        Bt = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              f()(s()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  a = t.entry,
                  r = t.featureSwitches,
                  o = t.isSent,
                  l = Tt.a.DMMessage,
                  s = n.contextualScribeNamespace,
                  c = [{ text: wt, Icon: gt.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!o)
                  if (Object(Tt.g)(r, l)) {
                    var u,
                      d = Object(Tt.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: l,
                        reportedConversationId: a.conversation_id,
                        reportedMessageId: a.id,
                        reportedUser: null === (u = a.message_data) || void 0 === u ? void 0 : u.sender_id,
                        scribeNamespace: n.contextualScribeNamespace,
                      })
                    c.push({
                      text: Ot,
                      Icon: vt.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(d) } },
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
                  st.a.isAvailable() && c.push({ text: Mt, Icon: kt, onClick: i._handleCopyMessageText }),
                  v.a.createElement(at.a, {
                    isFixed: i.context.isDrawer,
                    items: c,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              f()(s()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (st.a.setString(n), t({ text: Lt })), e && e()
              }),
              f()(s()(i), '_handleForwardButton', function () {
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
              f()(s()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              f()(s()(i), '_handleDelete', function () {
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
              f()(s()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              f()(s()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              f()(s()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(b.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              f()(s()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              f()(s()(i), '_replaceMessageUrls', function () {
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
                        Ut.messageActions,
                        r ? Ut.messageActionsLeft : Ut.messageActionsRight,
                        s ? Ut.visible : Ut.invisible,
                        l && Ut.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? Ut.messageActionsMediaNarrow : Ut.messageActionsNarrow),
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
                        headline: xt,
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
                  return v.a.createElement(ot.a, {
                    accessibilityLabel: Dt,
                    hoverLabel: { label: Dt },
                    icon: Nt,
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
                    l = v.a.createElement(St.a, { style: i ? Ut.vdlActionIcon : Ut.actionIcon })
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
                      accessibilityLabel: It,
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
                    t = v.a.createElement(Ct.a, { style: e ? Ut.vdlActionIcon : Ut.actionIcon })
                  return v.a.createElement(ot.a, {
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
                    o = this.state.actionsAreActive,
                    l = ((e = this.props.entry), !pt(e) && mt(e) && !lt.a.isEnabled)
                  return !i && (l || (n && !lt.a.isEnabled) || a || r || o)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(Bt, 'contextType', K.a)
      var jt = Object(nt.a)(xe(Bt)),
        Ut = R.a.create(function (e) {
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
        Nt = v.a.createElement(Et.a, { style: Ut.vdlActionIcon }),
        Ht = n('97Jx'),
        Vt = n.n(Ht),
        Wt = (n('6U7i'), n('CDB5')),
        zt = Object(Te.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: C.removeEntry,
              sendMessage: Wt.m,
            }
          })
          .withAnalytics(),
        qt = '87.5%',
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
          createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        $t = Object(ge.e)(function () {
          return Object(he.createSelector)(Jt, Xt, Yt.r, Gt.d, function (e, t, n, a) {
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
          createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        ln = Object(ge.e)(function () {
          return Object(he.createSelector)(nn, an, Yt.r, rn, Gt.d, function (e, t, n, a, r) {
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
            return l > -1 && o.push.apply(o, He()(o.splice(0, l))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, on),
        sn = n('TIdA'),
        cn = n('htQn'),
        un = Ie.a.gf5e9ea6,
        dn = Ie.a.a2d48778,
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
        fn = function (e) {
          var t = v.a.useContext(E.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            o = r.avatarUri,
            l = r.isProtected,
            s = r.isVerified,
            c = r.name,
            u = r.screenName,
            d = v.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = v.a.createElement(z.a, { imageLayoutCache: pn, screenName: u, size: 'xxLarge', uri: o }),
            m = v.a.createElement(ze, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            f = v.a.createElement(I.a, {
              badgeContext: 'content',
              isProtected: l,
              isVerified: s,
              name: c,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return v.a.createElement(
            cn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [mn.root, i && mn.bottomBorder] },
            v.a.createElement(V.a, { style: mn.reactionColumn }, m),
            v.a.createElement(V.a, { style: mn.column }, p),
            v.a.createElement(V.a, { style: mn.bodyColumn }, v.a.createElement(V.a, { style: mn.body }, f)),
            a
              ? v.a.createElement(
                  V.a,
                  { style: mn.column },
                  v.a.createElement(
                    ot.a,
                    {
                      accessibilityLabel: dn({ emoji: Object(Ve.b)(r.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    un,
                  ),
                )
              : null,
          )
        },
        hn = n('xKuM'),
        gn = n('efqG'),
        vn = Ie.a.b772cd65,
        yn = Ie.a.c0098d49,
        bn = Ie.a.j85999eb,
        _n = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_renderContent', function (t, n) {
                return v.a.createElement(
                  V.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              f()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? v.a.createElement(hn.a, { title: yn })
                  : v.a.createElement(W.b, { visuallyHidden: !0 }, yn)
              }),
              f()(s()(e), '_renderUsers', function (t, n) {
                return v.a.createElement(
                  V.a,
                  { accessibilityLabel: bn, style: [kn.container, 'sheet' === n ? kn.sheet : kn.popover] },
                  e._renderUserCells(t),
                )
              }),
              f()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  v.a.createElement(
                    ot.a,
                    { key: 'button_done', onPress: e, style: kn.cancelButton, type: 'primaryOutlined' },
                    vn,
                  )
                )
              }),
              f()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return v.a.createElement(fn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: a !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              f()(s()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.conversationId,
                    i = a.createLocalApiErrorHandler,
                    o = a.entryId,
                    l = a.fetchUpdatesIfNeeded,
                    s = a.loggedInUserId,
                    c = a.removeReaction,
                    u = { reaction_key: t, conversation_id: r, dm_id: o, perspective: s }
                  n(), c(u).then(e._handleScribeRemoveReaction(t)).then(l).catch(i())
                }
              }),
              f()(s()(e), '_handleScribeRemoveReaction', function (t) {
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
      f()(_n, 'contextType', K.a)
      var kn = R.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Sn = Object(nt.a)(Object(Ye.a)(ln(_n))),
        Cn = Ie.a.h95f9e76,
        En = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              f()(s()(a), '_handleScribeDMReactionSummary', function () {
                a.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              f()(s()(a), '_onSetReactionsNode', function (e) {
                a._measureWidths(e || void 0)
              }),
              f()(s()(a), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = a.props,
                  r = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  o = a.state.emojiSize || 'headline1',
                  l = r.size - 1
                return Array.from(r, function (e, n) {
                  var a = $()(e, 2),
                    r = a[0],
                    s = a[1]
                  return v.a.createElement(ze, {
                    count: s,
                    emojiSize: o,
                    emotion: r,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: r,
                    style: [
                      n === l && Tn.rightPadding,
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
                  var l = x.a.generate({ backgroundColor: R.a.theme.colors.gray50, color: R.a.theme.colors.gray700 }),
                    s = Cn({ reactionCount: i })
                  return v.a.createElement(
                    V.a,
                    {
                      style: [
                        Tn.container,
                        a ? Tn.marginShort : Tn.marginLong,
                        r ? Tn.alignRight : Tn.alignLeft,
                        o ? Tn.visible : Tn.invisible,
                      ],
                    },
                    v.a.createElement(
                      Sn,
                      { conversationId: t, entryId: n },
                      v.a.createElement(
                        A.a,
                        {
                          accessibilityLabel: s,
                          focusable: !0,
                          interactiveStyles: l,
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
        })(v.a.PureComponent),
        Tn = R.a.create(function (e) {
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
        wn = Object(Ye.a)($t(En)),
        xn = n('Xrkv'),
        Rn = Ie.a.icd0bf34,
        Fn = Ie.a.e8bd8fec,
        An = Ie.a.b2d32fad,
        In = Ie.a.a763d33e,
        On = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              f()(s()(a), '_handlePress', function (e) {
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
                  return n ? (t ? An : Rn) : a.length ? In({ count: a.length }) : Fn
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
                        Ie.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        v.a.createElement(W.b, null, n),
                        v.a.createElement(
                          W.b,
                          { color: 'link', onPress: e._handlePress },
                          Ie.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(xn.a)(t, n)
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
              o = n.user.name,
              l = n.user_id !== a.id_str,
              s = i && 1 !== Object(Dn.a)(t, i),
              c = !r || 1 !== Object(Dn.a)(r, t)
            return l && s && c && e.push(o), e
          }, [])
        },
        Bn = n('IMYl'),
        jn = n('21zW'),
        Un = n('gmpV'),
        Nn = Ie.a.fad48ee9,
        Hn = Ie.a.ba60339a,
        Vn = Ie.a.d338f53e,
        Wn = Ie.a.ae7d7a24,
        zn = Ie.a.d725a288,
        qn = Ie.a.bbe74f3f,
        Gn = Ie.a.h0e4cdf4,
        Yn = Ie.a.bfbc051c,
        Qn = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  a = t.entryId
                ;(0, t.removeEntry)(n, null, { id: a })
              }),
              f()(s()(e), '_handleTryAgain', function () {
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
                    u = a || r || s || c,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    v.a.createElement(
                      V.a,
                      { style: [Xn.root, d && Xn.vdlRootMargin, t && Xn.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? v.a.createElement(
                            A.a,
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
                          Hn,
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
                        v.a.createElement(wn, { conversationId: t, entryId: n, isEndOfDM: l, isSent: i }),
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
                  return t && !n && v.a.createElement(W.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Nn)
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
                        v.a.createElement(Bn.a, { style: Xn.checkmark }),
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
                  var u,
                    d = new Date(Number(t))
                  u = Object(Un.c)(d) ? zn(d) : Object(Un.d)(d) ? qn({ time: zn(d) }) : Object(Un.e)(d) ? Gn(d) : Yn(d)
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
                          Ie.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          v.a.createElement(W.b, null, s),
                        ),
                      p && ' ',
                      u,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      f()(Qn, 'contextType', E.a)
      var Xn = R.a.create(function (e) {
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
        Jn = zt(Qn),
        Zn = n('jtO7'),
        $n = R.a.create(function (e) {
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
              $n.root,
              n && $n.isLast,
              n && a && $n.sentLast,
              n && !a && $n.receivedLast,
              t && a && $n.insideTopRoundedSent,
              t && !a && $n.insideTopRoundedReceived,
              o && a && $n.outsideTopRoundedSent,
              o && !a && $n.outsideTopRoundedReceived,
            ]
          return v.a.createElement(
            V.a,
            { style: s },
            v.a.createElement(Zn.a, { align: 'center', color: 'primary', label: r, link: l, onClick: i }),
          )
        },
        ta = n('fs1G'),
        na = (function (e) {
          u()(n, e)
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
      f()(na, 'defaultProps', { onCtaClick: ta.a, onImpression: ta.a })
      var aa = na,
        ra = (n('1IsZ'), n('vjRr')),
        ia = n('EGrD'),
        oa = function (e, t) {
          return t.cardUrl
        },
        la = Object(Te.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: ia.c, card: ra.a.createSingleHydratedSelector(oa) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ia.a,
              loadAdFreeArticleDomainsFromPersistence: ia.b,
              popOutConversation: C.popOutConversation,
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
        ua = n('cTG8'),
        da = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            a = void 0 !== n && n,
            r = e.isFailedDraft,
            i = e.isFirstRapidFire,
            o = void 0 !== i && i,
            l = e.isRapidFire,
            s = void 0 !== l && l,
            c = e.isSent,
            u = e.hasAssociatedAttachment,
            d = e.messageData,
            p = void 0 === d ? {} : d,
            m = e.rootStyle,
            f = e.tweetId,
            h = e.withCta,
            g = e.withMediaLinks,
            y = e.withMessageBubble,
            b = v.a.useContext(E.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            k = [
              m,
              y && pa.messageTextContainer,
              y && c && pa.sent,
              y && !c && pa.received,
              r && pa.failedDraft,
              s && !o && !c && pa.rapidFireReceived,
              s && !o && c && pa.rapidFireSent,
              u && c && pa.hasAssociatedAttachmentSent,
              u && !c && pa.hasAssociatedAttachmentReceived,
              y && _ && c && pa.vdlSent,
              y && a && c && pa.activeSent,
              y && _ && a && c && pa.vdlActiveSent,
              y && a && !c && !lt.a.isEnabled && pa.activeReceived,
              h && pa.withCta,
            ],
            S = [pa.tweetText, y && pa.textAlignLeft, !y && c && pa.textAlignRight],
            C = R.a.theme.colors,
            T = C.gray0,
            w = C.magenta500,
            F = C.primary,
            I = C.text,
            O = C.white,
            M = x.a.generate({ color: c ? O : I, backgroundColor: r ? w : c ? F : T }),
            L = (p.text && p.text.length) || 0
          return v.a.createElement(
            A.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? M : null, style: k },
            v.a.createElement(ua.a, {
              color: R.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, L],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && c) || R.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: f,
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
      da.defaultProps = { withMediaLinks: !1 }
      var ma = da,
        fa = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            a = e.isFailedDraft,
            r = e.isFirstRapidFire,
            i = void 0 !== r && r,
            o = e.isRapidFire,
            l = void 0 !== o && o,
            s = e.isSent,
            c = e.messageData,
            u = e.withCta,
            d = e.withMessageBubble
          return v.a.createElement(ma, {
            isActive: n,
            isFailedDraft: a,
            isFirstRapidFire: i,
            isRapidFire: l,
            isSent: s,
            messageData: c,
            withCta: u,
            withMediaLinks: !0,
            withMessageBubble: d,
          })
        },
        ha = n('LSr9'),
        ga = n('aX4+'),
        va = n('/Ikv'),
        ya = va.a.CardNames,
        ba = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e, a
            r()(this, n)
            for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++) o[l] = arguments[l]
            return (
              (a = t.call.apply(t, [this].concat(o))),
              f()(s()(a), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              f()(
                s()(a),
                '_hasClaimsForAdFreeArticles',
                null === (e = a.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              f()(s()(a), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (a.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  a.setState(n)
                }
              }),
              f()(s()(a), '_handleOnClick', function (e) {
                var t = a.props,
                  n = t.card,
                  r = (n = void 0 === n ? {} : n).binding_values,
                  i = t.conversationId,
                  o = t.popOutConversation
                if ((i && o(i), a._hasClaimsForAdFreeArticles)) {
                  var l = a.props,
                    s = l.adFreeArticleDomains,
                    c = l.createLocalApiErrorHandler,
                    u = l.fetchAdFreeToken,
                    d = new ha.a(u, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: va.a.getBindingValue(r, 'card_url'),
                      linkDomain: va.a.getBindingValue(r, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    p = $()(d, 2),
                    m = p[0],
                    f = p[1]
                  m && f(e)
                }
              }),
              f()(s()(a), '_handleTextContentLayout', function (e) {
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    f = !!Object.values(ya).includes(null == t ? void 0 : t.name),
                    h = ht(n, p, m),
                    g = h.isAttachmentSquared ? 'both' : l ? 'right' : 'left',
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
                            rootStyle: h.isTextSquared ? (l ? _a.textSentSquared : _a.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return f
                    ? v.a.createElement(ca, { attachmentContent: b, isVisible: h.compositeRendered, textContent: _ })
                    : v.a.createElement(fa, {
                        isActive: a,
                        isFailedDraft: r,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: l,
                        messageData: s,
                        withCta: c,
                        withMessageBubble: u,
                      })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(ba, 'defaultProps', { hasUserText: !1 }), f()(ba, 'contextType', E.a)
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
        ka = la(ba),
        Sa = Ie.a.f720438f,
        Ca = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              f()(s()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  a = 'left'
                return t ? (a = 'both') : n && (a = 'right'), Ea[a]
              }),
              f()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              f()(s()(e), '_handleTextContentLayout', function (t) {
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
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!l || !l.attachment || !l.attachment.fleet) return null
                  var m = ht(t, d, p),
                    f = m.compositeRendered,
                    h = m.isAttachmentSquared,
                    g = m.isTextSquared,
                    y = [
                      Ta.tombstoneWrapper,
                      o ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                      this._getSquareBottomStyles(h),
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
                              o ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                              !c && Ta.fleetReactionSpacing,
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
                            rootStyle: g ? (o ? Ta.sentSquared : Ta.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return v.a.createElement(ca, { attachmentContent: b, isVisible: f, textContent: _ })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        Ea = R.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ta = R.a.create(function (e) {
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
        wa = Ca,
        xa = (n('849X'), n('TJCb'), n('prG5')),
        Ra = n('RCZO'),
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
            o = i.height,
            l = i.width,
            s = Object(Ra.b)(t).rgb,
            c = v.a.createElement(xa.a, {
              accessibilityLabel: a,
              aspectMode: Fa.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: l, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? v.a.createElement(A.a, { interactiveStyles: null, link: n, onPress: Ia }, c) : c
        },
        Ma = n('Modb'),
        La = n('lklz'),
        Da = n('XrEN'),
        Pa = n('ZvMt'),
        Ka = function (e) {
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
        Ba = Object(Te.a)().withAnalytics(),
        ja = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              f()(s()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width
                i.state.width !== t && i.setState({ width: t })
              }),
              f()(s()(i), '_getElement', function () {
                var e = i.props,
                  t = e.contentType,
                  n = e.isSensitive
                return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
              }),
              f()(s()(i), '_handleClick', function () {
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
                            Na.root,
                            l ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && Ua[r],
                          ],
                        },
                        v.a.createElement(V.a, { style: Na.description }, v.a.createElement(W.b, null, a)),
                        v.a.createElement(
                          V.a,
                          { style: [Na.button, l ? Na.breakButtonWrapper : void 0] },
                          v.a.createElement(
                            ot.a,
                            { onClick: this._handleClick, size: 'small', style: Na.buttonElement, type: 'brandText' },
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
      f()(ja, 'defaultProps', { isSensitive: !1 })
      var Ua = R.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Na = R.a.create(function (e) {
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
        Ha = Object(Ye.a)(Ba(ja)),
        Va = n('CoGJ'),
        Wa = v.a.createElement(Va.a, null),
        za = Ie.a.d9de7b57,
        qa = Ie.a.f2879f4d,
        Ga = Ie.a.b518221e,
        Ya = Ie.a.eeaa9f90,
        Qa = Ie.a.g2b43663,
        Xa = Ie.a.f277e949,
        Ja = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              f()(s()(e), '_renderAttachment', function () {
                var t,
                  n,
                  a = e.props,
                  r = a.entry,
                  i = a.hasUserText,
                  o = a.isFirstRapidFire,
                  l = a.isRapidFire,
                  s = a.isSent,
                  c = a.isTrusted,
                  u = a.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  m = d.textContentWidth,
                  f = (u || {}).attachment,
                  h = r.is_draft,
                  g = ht(i, p, m),
                  y = [
                    Za.mediaAttachment,
                    s && Za.isSent,
                    !s && Za.received,
                    s && g.isAttachmentSquared && Za.equalComponentDimensionsSent,
                    !s && g.isAttachmentSquared && Za.equalComponentDimensionsReceived,
                    l && !o && s && Za.rapidFireSent,
                    l && !o && !s && Za.rapidFireReceived,
                  ],
                  _ = null
                if (
                  (!h && r.conversation_id && (_ = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), f)
                )
                  if (f.photo) (t = f.photo), (n = v.a.createElement(Oa, { media: t, mediaUrl: _ }))
                  else if (f.animated_gif)
                    (t = f.animated_gif), (n = v.a.createElement(Ka, { media: t, messageId: r.id }))
                  else if (f.video) {
                    if (((t = f.video), Object(b.l)(f, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = v.a.createElement(Ka, { media: t, messageId: r.id })
                  }
                var k = g.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  S = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, k))
                return {
                  attachmentContent: v.a.createElement(V.a, { onLayout: e._handleAttachmentLayout, style: y }, S),
                  media: t,
                }
              }),
              f()(s()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var a = { attachmentWidth: n }
                  e.setState(a)
                }
              }),
              f()(s()(e), '_handleTextContentLayout', function (t) {
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    f = t.is_draft,
                    h = ht(n, p, m),
                    g = this._renderAttachment(),
                    y = g.attachmentContent,
                    b = g.media,
                    _ = n
                      ? v.a.createElement(
                          V.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? Za.sentMessageWrapper : Za.receivedMessageWrapper,
                          },
                          v.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: l,
                            messageData: f ? s : this._parseMessageData(s, b),
                            rootStyle: h.isTextSquared ? (l ? Za.sentSquared : Za.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return v.a.createElement(ca, { attachmentContent: y, isVisible: h.compositeRendered, textContent: _ })
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
                      var l = ('animated_gif' === e.type && Qa) || ('video' === e.type && Ya) || Ga
                      return v.a.createElement(
                        Ha,
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
                    return v.a.createElement(
                      Ha,
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
                        Ha,
                        { contentType: e.type, ctaText: Xa, description: za, withSquareBottomBorderRadius: a },
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
      f()(Ja, 'contextType', E.a), f()(Ja, 'defaultProps', { hasUserText: !1 })
      var Za = R.a.create(function (e) {
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
          return { markSpamStatus: C.markSpamStatus }
        }),
        tr = Ie.a.fd07947f,
        nr = Ie.a.c7a92dc9,
        ar = Ie.a.f277e949,
        rr = Ie.a.fb3ccb55,
        ir = er(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                f()(s()(e), '_handlePress', function (t) {
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
                      Ha,
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
        ur = function (e) {
          var t = e.sticker
          return v.a.createElement(lr.a, { accessibilityLabel: t.display_name, source: sr(t), style: cr.stickerItem })
        },
        dr = n('XOJV'),
        pr = function (e, t) {
          var n,
            a = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (a && a.tweet) return a.tweet.status
        },
        mr = Object(Te.a)()
          .propsFromState(function () {
            return { tweet: dr.a.createHydratedTweetSelector(pr) }
          })
          .propsFromActions(function () {
            return { popOutConversation: C.popOutConversation }
          }),
        fr = n('b5s6'),
        hr = v.a.createElement(W.b, { link: '/settings/safety' }),
        gr = function (e) {
          return v.a.createElement(
            Ie.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            v.a.cloneElement(hr, null, Ie.a.adcf07b5),
          )
        },
        vr = Ie.a.e4df0ad7,
        yr = Ie.a.f277e949,
        br = Ie.a.b5b91d58,
        _r = Ie.a.bb594d7b,
        kr = v.a.createElement(gr, null)
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
        Cr = mr(function (e) {
          var t = v.a.useContext(E.a).featureSwitches,
            n = e.conversationId,
            a = e.displaySensitiveMedia,
            r = e.hasUserText,
            i = void 0 !== r && r,
            o = e.isActive,
            l = void 0 !== o && o,
            s = e.isDmNsfwMediaFilterEnabled,
            c = e.isFailedDraft,
            u = e.isFirstRapidFire,
            d = void 0 !== u && u,
            p = e.isRapidFire,
            m = void 0 !== p && p,
            f = e.isSent,
            h = e.isTrusted,
            g = e.messageData,
            y = e.popOutConversation,
            b = e.tweet,
            _ = e.withCta,
            k = e.withMessageBubble,
            S = v.a.useState(void 0),
            C = $()(S, 2),
            T = C[0],
            w = C[1],
            x = v.a.useState(void 0),
            R = $()(x, 2),
            F = R[0],
            A = R[1],
            I = v.a.useMemo(
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
                  T !== t && w(t)
                }
              },
              [T],
            ),
            M = v.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  F !== t && A(t)
                }
              },
              [F],
            )
          if (!g || !g.attachment || !g.attachment.tweet) return null
          var L = g.attachment.tweet,
            D = f ? 'sent' : 'received',
            P = ht(i, T, F),
            K = v.a.createElement(fr.a, {
              onPress: I,
              style: [
                Sr[D],
                i && Sr.attachment,
                P.isAttachmentSquared ? (f ? Sr.sentAttachmentSquared : Sr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: L.status,
            }),
            B = P.isAttachmentSquared ? 'both' : f ? 'right' : 'left',
            j = (function () {
              if (!b) return null
              if (f) return K
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return v.a.createElement(
                    Ha,
                    { contentType: 'photo', ctaText: _r, description: br, withSquareBottomBorderRadius: B },
                    K,
                  )
              } else if (!a && b.possibly_sensitive)
                return v.a.createElement(
                  Ha,
                  { contentType: 'photo', ctaText: yr, description: kr, withSquareBottomBorderRadius: B },
                  K,
                )
              return h
                ? K
                : v.a.createElement(
                    Ha,
                    { contentType: 'tweet', ctaText: yr, description: vr, withSquareBottomBorderRadius: B },
                    K,
                  )
            })(),
            U = v.a.createElement(V.a, { onLayout: O, style: Sr.attachment }, j),
            N = i
              ? v.a.createElement(
                  V.a,
                  { onLayout: M, style: f ? Sr.sentMessageWrapper : Sr.receivedMessageWrapper },
                  v.a.createElement(ma, {
                    hasAssociatedAttachment: !0,
                    isActive: l,
                    isFailedDraft: c,
                    isFirstRapidFire: d,
                    isRapidFire: m,
                    isSent: f,
                    messageData: g,
                    rootStyle: P.isTextSquared ? (f ? Sr.sentSquared : Sr.receivedSquared) : void 0,
                    tweetId: L.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: k,
                  }),
                )
              : null
          return v.a.createElement(ca, { attachmentContent: U, isVisible: P.compositeRendered, textContent: N })
        }),
        Er = n('htvZ'),
        Tr = n('MH+I'),
        wr = n('5Ixf'),
        xr = n('AtEG')
      function Rr(e) {
        var t,
          n,
          a = v.a.useContext(Er.a),
          r = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var l = $()(a.activeVoiceMessage, 2),
          s = l[0],
          c = l[1],
          u = $()(a.playerApi, 1)[0],
          d = $()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = $()(s, 1)[0],
          f = e.messageId === m
        if (!p) return null
        var h = Ar(d),
          g = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: g,
            isActive: f,
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
          f &&
            h &&
            h.contentId === e.media.id_str &&
            ((y.playerApi = u),
            (y.playerState = d),
            null != h && h.durationMs && (y.durationMs = null == h ? void 0 : h.durationMs)),
          v.a.createElement(Fr, y)
        )
      }
      function Fr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          o = Ar(r),
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
        var u = R.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'text' },
          p = [
            Mr.voiceMessage,
            Lr({ isSent: n, squared: t }),
            n ? Mr.voiceMessageSent : Mr.voiceMessageReceived,
            oe(R.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? wr.a : xr.a
        return v.a.createElement(
          V.a,
          { style: [Mr.container, oe(R.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          v.a.createElement(
            V.a,
            { style: p },
            v.a.createElement(V.a, { style: Mr.startSpacer }),
            v.a.createElement(ot.a, {
              accessibilityLabel: i ? Or : Ir,
              icon: v.a.createElement(m, { style: u ? Mr.iconColorDark : Mr.iconColorDefault }),
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
                Tr.a,
                Vt()({ countdown: !0, timeMs: c }, d, {
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
      var Ar = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ir = Ie.a.c94b7d89,
        Or = Ie.a.eb6f9582,
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
          u()(n, e)
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
                    u = !!o && !!o.ctas,
                    d = pt(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (mt(e) && !ft(e)) return !1
                      if (!t.text) return !1
                      var n = Object(ut.parse)(t.text)
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
                    m = !(d && p),
                    f = ft(n)
                  e = l.sticker ? v.a.createElement(ur, { sticker: l.sticker }) : this._renderDMMessage(d, u, m)
                  var h = s ? v.a.createElement(ir, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    g = c && !f && !Object(b.l)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    y = [
                      a ? Kr.isSent : Kr.isReceived,
                      u && Kr.withCta,
                      g ? Kr.mediaRoot : Kr.flexShrink,
                      this.props.style,
                    ]
                  return v.a.createElement(
                    V.a,
                    { style: y },
                    h,
                    o && o.ctas
                      ? v.a.createElement(aa, {
                          callToActions: o.ctas,
                          isSent: a,
                          onCtaClick: r,
                          onImpression: i,
                          withSticker: !!l.sticker || p,
                          withUserText: d,
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
                    u = a.isRapidFire,
                    d = a.isSent,
                    p = a.isTrusted,
                    m = i.error,
                    f = i.message_data,
                    h = f && te()(te()({}, f), {}, { entities: (f && f.entities) || void 0, error: m }),
                    g = null == h ? void 0 : h.attachment,
                    y = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: u,
                      isSent: d,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (h && g) {
                    if (g.tweet)
                      return v.a.createElement(
                        Cr,
                        Vt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: l,
                            isTrusted: p,
                            messageData: h,
                          },
                          y,
                        ),
                      )
                    if (g.photo || g.animated_gif || g.video)
                      return g.video && Object(b.l)(g, this.context.featureSwitches)
                        ? v.a.createElement(Rr, {
                            isLowQuality: c,
                            isSent: !!d,
                            isTrusted: p,
                            media: g.video,
                            messageId: i.id,
                          })
                        : v.a.createElement(
                            $a,
                            Vt()(
                              {
                                displaySensitiveMedia: r,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: l,
                                isTrusted: p,
                                messageData: h,
                              },
                              y,
                            ),
                          )
                    if (g.card)
                      return v.a.createElement(
                        ka,
                        Vt()({ cardUrl: g.card, conversationId: i.conversation_id, hasUserText: e, messageData: h }, y),
                      )
                    if (g.fleet) return v.a.createElement(wa, Vt()({ entry: i, hasUserText: e, messageData: h }, y))
                  }
                  return v.a.createElement(fa, Vt()({}, y, { messageData: h }))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      f()(Pr, 'contextType', E.a)
      var Kr = R.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Br = Pr,
        jr = R.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Ur = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? v.a.createElement(z.a, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : v.a.createElement(V.a, { style: [jr.avatar, z.a.getSizeStyle(a)] })
        },
        Nr = n('m3Bd'),
        Hr = n.n(Nr),
        Vr = n('B3eJ'),
        Wr = ['color', 'isActive', 'size']
      function zr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Hr()(e, Wr),
          i = v.a.useContext(Er.a),
          o = v.a.useState(0.5),
          l = $()(o, 2),
          s = l[0],
          c = l[1],
          u = $()(i.playerState, 1)[0]
        v.a.useEffect(
          function () {
            n && u && u.isPlaying && c(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = a + 2 * qr,
          m = [Gr.container, r.style, { width: a, height: a }]
        return v.a.createElement(
          V.a,
          { style: m },
          v.a.createElement(
            V.a,
            { style: [Gr.container, Gr.transitionOpacity, d ? Gr.show : Gr.hide] },
            ie.a.reducedMotionEnabled
              ? null
              : v.a.createElement(Vr.a, { audioLevel: s, color: t, paused: !d, size: a }),
          ),
          v.a.createElement(V.a, {
            style: [Gr.border, { width: p, height: p }, Gr.transitionOpacity, n ? Gr.show : Gr.hide],
          }),
        )
      }
      var qr = parseInt(R.a.theme.spaces.space2, 10),
        Gr = R.a.create(function (e) {
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
        Yr = n('uArA'),
        Qr = 'messageEntry',
        Xr = { element: 'cta_dm' },
        Jr = { viewType: 'message' },
        Zr = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        $r = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), 'state', { shouldFadeHighlight: !1 }),
              f()(
                s()(e),
                '_handleClick',
                Object(Yr.a)(function () {
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
              f()(s()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!lt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(b.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              f()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(te()(te()({}, Xr), {}, { action: 'show' }))
              }),
              f()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(te()(te()({}, Xr), {}, { action: 'click' }))
              }),
              f()(s()(e), '_isDMVoiceMessage', function () {
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
                    !Object(H.a)(this.props, e) || !Object(H.a)(this.state.shouldFadeHighlight, t.shouldFadeHighlight)
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
                    u = [
                      ti.root.base,
                      c && ti.root.vdlPadding,
                      s && ti.root.contentSpacing,
                      s && c && ti.root.vdlContentSpacing,
                      r && ti.root.highlightableEntry,
                      r && this.state.shouldFadeHighlight && ti.root.remove,
                    ],
                    d = this._isDMVoiceMessage(),
                    p = c ? a && !i : !i || d
                  if (!o) return null
                  var m = !lt.a.isEnabled || i
                  return v.a.createElement(
                    fe.a,
                    { behavioralEventContext: Jr },
                    v.a.createElement(
                      V.a,
                      { style: u },
                      v.a.createElement(
                        A.a,
                        {
                          accessibilityExpanded: !(!m || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: m ? this._handleClick : void 0,
                          style: i ? ti.root.sent : ti.root.received,
                          testID: Qr,
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
                    u = o.isActive,
                    d = o.isDmNsfwMediaFilterEnabled,
                    p = o.isGroupDM,
                    m = o.isLowQuality,
                    f = o.isReadOnly,
                    h = o.isSent,
                    g = o.isTrusted,
                    y = o.isVoiceMessageActive,
                    b = o.isWide,
                    _ = o.participants,
                    k = o.perspective,
                    S = o.scribeVoiceMessage,
                    C = o.setShouldFreezeUpdates,
                    E = a.isFirstRapidFire,
                    T = a.isRapidFire,
                    w = [
                      h ? ti.messageContainer.sent : ti.messageContainer.received,
                      b ? ti.messageContainer.wide : ti.messageContainer.narrow,
                      h && b && ti.messageContainer.sentWide,
                      !h && b && ti.messageContainer.receivedWide,
                    ],
                    x = g && !f,
                    F = this._isDMVoiceMessage(),
                    A = (null == _ ? void 0 : _.length) || 0
                  return v.a.createElement(
                    V.a,
                    { style: w },
                    s.error
                      ? null
                      : v.a.createElement(jt, {
                          containerIsActive: u,
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
                                  return S.report({ isLowQuality: m, isTrusted: g })
                                }
                              : void 0,
                          participantsCount: A,
                          perspective: k,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: x,
                          style: F && oe(R.a.theme.scale).actionsContainer({ isSent: h, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    v.a.createElement(Br, {
                      displaySensitiveMedia: l,
                      entry: s,
                      isActive: u,
                      isDmNsfwMediaFilterEnabled: d,
                      isFirstRapidFire: E,
                      isLowQuality: m,
                      isRapidFire: T,
                      isSent: h,
                      isTrusted: g,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: F && oe(R.a.theme.scale).messageContainer({ isSent: h, isVoiceMessageActive: y }),
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
                    u = o.isSent,
                    d = o.participants,
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
                        isSent: u,
                        localMediaId: null === (a = l.message_data) || void 0 === a ? void 0 : a.localMediaId,
                        onPress: this._handleClick,
                        participants: d,
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
                    u = c.DMUserAvatarSizePx,
                    d = { showAvatar: !!s || !a || !!n, size: c.DMUserAvatarSizeType, user: l },
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
                      ? v.a.createElement(zr, {
                          color: i ? R.a.theme.colors.primary : R.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    v.a.createElement(V.a, { style: p }, v.a.createElement(Ur, d)),
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
      f()($r, 'contextType', E.a), f()($r, 'defaultProps', Zr)
      var ei = Object(Ye.a)(
          Ce(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = v.a.useContext(Er.a),
                  r = $()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  o = $()(r, 1)[0] === n.id,
                  l = te()(te()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return v.a.createElement(e, l)
              }
              return (t.defaultProps = Zr), t
            })($r),
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
              wide: { width: qt },
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
            u = e.perspective,
            d = e.scribeNamespace,
            p = e.setActiveEntry,
            m = e.setShouldFreezeUpdates
          if (Object(_.b)(n) || Object(_.e)(n)) {
            var f = t.conversation_id,
              h = t.low_quality,
              g = t.participants,
              y = t.read_only,
              b = t.trusted,
              k = t.type,
              S = n.message_data,
              E = (S = void 0 === S ? {} : S).sender_id,
              T = void 0 === f || b
            return v.a.createElement(ei, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: k === C.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: o,
              isLastRapidFire: l,
              isLowQuality: !!h,
              isRapidFire: s,
              isReadOnly: y,
              isSent: E === u,
              isTrusted: !!T,
              isWide: c,
              participants: g,
              perspective: u,
              scribeNamespace: d,
              senderId: E,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(_.a)(n)
            ? v.a.createElement(J, { conversation: t, entry: n, entryType: n.type, perspective: u })
            : Object(_.d)(n)
            ? v.a.createElement(ni.a, { entry: n, isCompact: !1 })
            : null
        },
        ri = n('0JOx'),
        ii = Object(he.createSelector)(
          function (e, t) {
            var n = Object(Pe.o)(e, t.conversationId),
              a = n && Object(S.a)(n)
            return a && Object(C.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        oi = Object(ge.c)(ii),
        li = (n('Ef13'), n('uDfI')),
        si = Object(he.createSelector)(
          function (e, t) {
            return be.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        ci = Object(li.b)(si),
        ui = n('VPAj'),
        di = n('Enqy'),
        pi = n('+/1j'),
        mi = 'overflow',
        fi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        hi = { stiffness: 1e3, damping: 70 },
        gi = 140,
        vi = { scale: Object(di.spring)(1, hi), translateY: Object(di.spring)(0, hi) },
        yi = function (e, t) {
          return { key: e.id_str, data: e, style: vi }
        },
        bi = Object(ui.a)({ translateY: gi, scale: 0 }),
        _i = Object(ui.a)({ scale: Object(di.spring)(1, hi), translateY: Object(di.spring)(gi, hi) }),
        ki = [{ key: 'bubble', style: { scale: Object(di.spring)(1, hi), translateY: Object(di.spring)(0, hi) } }],
        Si = Object(ui.a)({ translateY: gi, scale: 0 }),
        Ci = Object(ui.a)({ scale: Object(di.spring)(1, hi), translateY: Object(di.spring)(gi, hi) }),
        Ei = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ti = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), 'state', { isHidden: !0 }),
              f()(s()(e), '_afterLeave', function () {
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
                  return !Object(H.a)(this.props, e) || !Object(H.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(fi).slice(0, 5).map(yi)
                  return (
                    t.length > 5 && n.push({ key: mi, style: vi }),
                    v.a.createElement(
                      V.a,
                      { style: [wi.root, e && wi.hidden] },
                      v.a.createElement(
                        V.a,
                        { style: wi.avatarRow },
                        v.a.createElement(
                          di.TransitionMotion,
                          { styles: n, willEnter: bi, willLeave: _i },
                          function (e) {
                            return v.a.createElement(
                              v.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Ei(e.style)
                                return e.key === mi
                                  ? v.a.createElement(
                                      V.a,
                                      {
                                        key: e.key,
                                        style: [wi.avatar, wi.avatarSpacer, wi.overflowAvatar, { transform: a }],
                                      },
                                      v.a.createElement(pi.a, { style: wi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : v.a.createElement(
                                      V.a,
                                      { key: e.key, style: [wi.avatar, { transform: a }] },
                                      v.a.createElement(z.a, {
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
                        di.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? ki : [], willEnter: Si, willLeave: Ci },
                        function (e) {
                          return v.a.createElement(
                            v.a.Fragment,
                            null,
                            e.map(function (e) {
                              return v.a.createElement(
                                V.a,
                                { key: e.key, style: [wi.messageBubble, { transform: Ei(e.style) }] },
                                v.a.createElement(V.a, { style: wi.dot }),
                                v.a.createElement(V.a, { style: [wi.dot, wi.dot1] }),
                                v.a.createElement(V.a, { style: [wi.dot, wi.dot2] }),
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
        wi = R.a.create(function (e) {
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
        xi = ci(Ti),
        Ri = n('tn7R'),
        Fi = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_timers', {}),
              f()(s()(e), 'state', { forceHide: !1, userIds: [] }),
              f()(s()(e), '_handleLivePipelineUpdate', function (t) {
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
                        He()(
                          e.userIds.filter(function (e) {
                            return e !== n
                          }),
                        ),
                        [n],
                      ),
                    }
                  }))
              }),
              f()(s()(e), '_removeAvatar', function (t) {
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
                  return !t && v.a.createElement(xi, { userIds: n })
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
      f()(Fi, 'contextType', E.a)
      var Ai = oi(Fi),
        Ii = n('3AAD'),
        Oi = n('iBK2'),
        Mi = n('RJrc'),
        Li = n('yw4N'),
        Di = n('mw9i'),
        Pi = Ie.a.i859a9d3,
        Ki = Ie.a.i8ecae5b,
        Bi = function (e) {
          return e.entry.id
        },
        ji = function (e) {
          return e.entry.type === N.b.MESSAGE
        },
        Ui = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              f()(s()(i), '_handleScrollEnd', function () {
                i.setState({ didRenderMessageSearchEntry: !0 })
              }),
              f()(s()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case N.b.TYPING_INDICATOR:
                    return n ? v.a.createElement(Ai, { conversationId: n }) : null
                  case N.b.READ_ONLY_INDICATOR:
                    return n
                      ? v.a.createElement(
                          V.a,
                          { style: Ni.readOnly },
                          v.a.createElement(
                            W.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Ki,
                            ' ',
                            v.a.createElement(W.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Pi),
                          ),
                        )
                      : null
                  case N.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return v.a.createElement(P, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              f()(s()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              f()(s()(i), '_setShouldFreezeUpdates', function (e) {
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
                    u = this.state.activeEntryId,
                    d = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        a = e.conversation,
                        r = e.footer,
                        i = e.messageSearchEntryId,
                        o = e.readOnlyEntry,
                        l = (a && a.entries) || [],
                        s = null == a ? void 0 : a.max_search_entry_id,
                        c = null == a ? void 0 : a.min_search_entry_id,
                        u = (null == a ? void 0 : a.status) === C.PAGINATION_STATUS.AT_END,
                        d = s ? Object(b.d)(l, s) : l.length - 1,
                        p = c ? Object(b.d)(l, c) : -1,
                        m = i && -1 === p ? Object(b.d)(l, i) : p,
                        f = l.slice(u ? 0 : m, d + 1),
                        h = (i ? f : l).reduce(function (e, r, o) {
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
                            var u = k(s.entry, r),
                              d = e[e.length - 2]
                            u
                              ? ((e[e.length - 1].isRapidFire = !0),
                                d.isRapidFire || ((d.isFirstRapidFire = !0), (d.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : d.isRapidFire && (d.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return r && !i && h.push(r), a.read_only && o && !i && h.push(o), h
                    })({
                      conversation: n,
                      footer: y.d,
                      readOnlyEntry: y.c,
                      canInjectConversationProfileInfoHeader: n.status === N.c.AT_END && n.type === N.a.ONE_TO_ONE,
                      activeEntryId: u,
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
                    f = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    g =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== N.c.AT_END
                  return v.a.createElement(K.a.Consumer, null, function (t) {
                    var u = t.isDrawer ? B.b.drawerHeaderRadius : Ni.scrollSpace
                    return v.a.createElement(
                      V.a,
                      { style: [Ni.scrollContainer, u] },
                      v.a.createElement(
                        Li.a,
                        { style: [Ni.scrollContainer, r && Ni.conversationsPadding, u, c] },
                        a || null,
                        (n.status && n.status !== N.c.AT_END && !i) || g ? v.a.createElement(Mi.a, null) : null,
                        v.a.createElement(
                          Di.a,
                          { style: [Ni.content, Ni.alignTop], withGutter: !0 },
                          v.a.createElement(Oi.b, {
                            anchoring: Ii.a,
                            assumedItemHeight: 50,
                            cacheKey: f,
                            canBeAnchorFunction: ji,
                            centerInitialAnchor: i && s,
                            hasNewContentAtBottom: !0,
                            identityFunction: Bi,
                            initialAnchor: d.length > 0 ? h.a(i && s ? i : Bi(m(d))) : void 0,
                            items: d,
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
                          n.search_status !== N.c.AT_END
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
                    u = o.messageSearchEntryId,
                    d = o.perspective,
                    p = o.scribeNamespace,
                    m = t.id === u
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
                        perspective: d,
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
      f()(Ui, 'contextType', E.a)
      var Ni = R.a.create(function (e) {
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
    '6s7X': function (e, t, n) {
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
                d: 'M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z',
              }),
              o.a.createElement('circle', { cx: '12', cy: '8.042', r: '1.25' }),
              o.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
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
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        g = n.n(h),
        v = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        _ = n('dzqK'),
        k = n('GZwR'),
        S = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_genericWrapperRef', g.a.createRef()),
              f()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              f()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  u = s.queryContext,
                  d = c && u ? { word: u.word, resultType: u.resultType } : void 0
                return g.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: l || k.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              f()(s()(e), '_handleSelectItem', function (t) {
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
              f()(s()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              f()(s()(e), '_handleInputChange', function (t) {
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
                  u = v.e(c || '', 'compose')
                if ((null == u ? void 0 : u.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (u) {
                    var d = u.q,
                      p = u.result_type
                    e._setQueryContext({ word: d, resultType: p, fullText: n.value, startIndex: s, endIndex: l })
                  } else e._setQueryContext(void 0)
              }),
              f()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              f()(s()(e), '_handleDismiss', function () {
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
        return C
      }),
        n.d(t, 'c', function () {
          return E
        }),
        n.d(t, 'b', function () {
          return T
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        l = n('3XMw'),
        s = n.n(l),
        c = n('fs1G'),
        u = s.a.c3752568,
        d = s.a.f78aa3e9,
        p = s.a.f9690dc0,
        m = s.a.i859a9d3,
        f = s.a.b1d35407,
        h = s.a.g539cca6,
        g = s.a.bbac0019,
        v = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        b = s.a.hf383be4,
        _ = s.a.b25c5b2a,
        k = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        C = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        E = { defaultToast: { text: d }, showToast: !0 },
        T =
          ((a = { defaultToast: { text: u } }),
          i()(a, o.a.CurrentUserSuspended, {
            toast: { text: h, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, o.a.DirectMessageDuplicate, { toast: { text: _ } }),
          i()(a, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: v, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: k } }),
          i()(a, o.a.DirectMessageTooLongError, { toast: { text: g } }),
          i()(a, o.a.DirectMessageTweetNotFound, { toast: { text: y } }),
          i()(a, o.a.GenericBadRequest, { customAction: c.a }),
          i()(a, o.a.MessageSendError, { toast: { text: S } }),
          i()(a, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: f },
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
    '8fI/': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreenWithRichText', function () {
          return u
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        l = n('cOtO'),
        s = n('Rk1B'),
        c = n('RH6X'),
        u = function (e) {
          return o.a.createElement(s.default, null, function (t) {
            var n = t.richTextInputContext
            t.typeaheadWrapper
            return o.a.createElement(l.default, r()({}, e, { richTextInputContext: n, typeaheadWrapper: c.a }))
          })
        }
      t.default = u
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return F
      }),
        n.d(t, 'l', function () {
          return I
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
          return B
        }),
        n.d(t, 'i', function () {
          return U
        }),
        n.d(t, 'j', function () {
          return N
        }),
        n.d(t, 'k', function () {
          return H
        }),
        n.d(t, 'h', function () {
          return V
        }),
        n.d(t, 'a', function () {
          return z
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
        u = n.n(c),
        d = n('yiKp'),
        p = n.n(d),
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
        f = n('xPna'),
        h = n('oEOe'),
        g = n('xCUF'),
        v = n('ude7'),
        y = n('07FG'),
        b = n('Ssj5'),
        _ = n('fEA7'),
        k = n.n(_),
        S = n('uKEd'),
        C = n('lnti'),
        E = n('/NU0'),
        T = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        w = 'dmComposer',
        x = {}
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
            u = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: a, sender_id: i, text: o, time: u },
            type: 'message',
            time: u,
          }
        },
        F = function (e) {
          return function (t, n, a) {
            var i = a.api,
              l = e || {},
              c = l.senderId,
              u = l.cardUrl,
              d = l.conversationId,
              b = l.localMediaId,
              _ = l.recipients,
              w = void 0 === _ ? [] : _,
              x = l.requestId,
              F = void 0 === x ? k.a.v1() : x,
              A = l.tweetAttachment,
              I = l.quickReply,
              O = s()(l, T)
            t(Z(d))
            var M = n(),
              L = b || j(n(), d),
              P = m.k(M, L),
              K = o()(P, 1)[0] || {},
              B = K.mediaFile,
              U = K.mediaMetadata,
              N = w.length > 0 && w.join(','),
              H = {}
            B && B.isGif
              ? (H.extraInitParams = '&media_category=dm_gif')
              : B && B.isVideo && (H.extraInitParams = '&media_category=dm_video')
            var W = m.p(L, H),
              z = [t(W)],
              q = (V(M, d) || {}).found_media_origin
            return (
              B && B.isGif && z.push(Object(v.a)(B)),
              Promise.all(z).then(
                function (n) {
                  var a = o()(n, 2),
                    l = o()(a[0], 1)[0],
                    s = a[1],
                    v = (null == U ? void 0 : U.altText) || (null == U ? void 0 : U.defaultAltText),
                    b = !!v
                  return (
                    l && (q || b)
                      ? t(m.m(p()({ media_id: l.uploadId, found_media_origin: q }, !!b && { alt_text: { text: v } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (A || {}).id_str,
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
                      } else A && (a.tweet = { status: n })
                      var b = (l || {}).uploadId,
                        _ = R({
                          attachment: a,
                          conversation_id: d,
                          id: F,
                          recipient_ids: N,
                          sender_id: c,
                          text: e.text,
                        }),
                        k = p()(
                          p()(
                            p()(p()({}, O), Object(y.a)(u) && { card_uri: u }),
                            {},
                            { conversation_id: d },
                            !n && { media_id: b },
                          ),
                          {},
                          { recipient_ids: N, request_id: F, tweet_id: n },
                        )
                      I &&
                        ((k['quick_reply_response[options][id]'] = I.id),
                        (k['quick_reply_response[options][selected_id]'] = I.selected_id))
                      var T = Object(C.a)([
                        ee(d),
                        { type: g.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        d && Object(S.b)(d, F, _),
                      ])
                      return (
                        t(T),
                        i.DirectMessages.sendMessage(k).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              l = a.tweets,
                              s = a.users,
                              c = n.result.conversations
                            Object(E.a)(L) && t(X(d, L))
                            var u = Object(C.a)(
                              [{ type: g.c.SUCCESS }].concat(
                                r()(Object(f.a)({ conversations: c, entries: o, users: s, tweets: l, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, d && Object(S.j)(d, F, e), D(d)],
                              ),
                            )
                            return t(u), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = R({
                                attachment: a,
                                conversation_id: d,
                                error: !0,
                                id: F,
                                localMediaId: L,
                                recipient_ids: N,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(C.a)([
                                { type: g.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                d && Object(S.b)(d, F, r),
                              ])
                            return t(i), Object(h.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(d)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(C.a)([Object(E.a)(L) && X(d, L), ne(d)])), Promise.reject(e)
                },
              )
            )
          }
        },
        A = function (e, t) {
          return e.dmComposer[t]
        },
        I = function (e, t) {
          var n = A(e, t)
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
          var n = A(e, t)
          return n ? n.cardUrl : null
        },
        K = 'rweb/dmComposer/SAVE_CARD_URL',
        B = function (e, t) {
          return { type: K, conversationId: e, cardUrl: t }
        },
        j = function (e, t) {
          var n = A(e, t)
          return n ? n.mediaId : null
        },
        U = function (e, t) {
          var n = m.k(e, j(e, t))
          return n.length > 0 ? n[0] : null
        },
        N = function (e, t) {
          var n = A(e, t)
          return !!n && n.isUploading
        },
        H = function (e, t) {
          return m.l(e, j(e, t))
        },
        V = function (e, t) {
          var n = A(e, t)
          return n ? n.gifMetadata : null
        },
        W = 'rweb/dmComposer/ADD_MEDIA',
        z = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: W, conversationId: e }
        },
        q = 'rweb/dmComposer/CANCEL_UPLOAD',
        G = function (e) {
          return { type: q, conversationId: e }
        },
        Y = 'rweb/dmComposer/REMOVE_MEDIA',
        Q = function (e) {
          return { type: Y, conversationId: e }
        },
        X = function (e, t) {
          return function (n) {
            n(m.i(t)), n([G(e), Q(e)])
          }
        },
        J = 'rweb/dmComposer/UPLOAD_REQUEST',
        Z = function (e) {
          return { type: J, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ne = function (e) {
          return { type: te, conversationId: e }
        }
      b.a.register(
        u()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case q:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Y:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                u()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case O:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, l), {}, { text: t.text })))
            case K:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case L:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, u()({}, n, p()(p()({}, c), {}, { text: null })))
            default:
              return e
          }
        }),
      )
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
              u = void 0 === c ? 3e5 : c
            ;(this.pollTimer = new l.b(i).interval(t)), (this.burstTimer = new l.a(this.pollTimer, s, u))
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
    GjeS: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        l,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        g,
        v,
        y,
        b,
        _,
        k,
        S,
        C,
        E,
        T,
        w,
        x,
        R,
        F,
        A,
        I,
        O,
        M,
        L,
        D,
        P,
        K,
        B,
        j,
        U,
        N,
        H,
        V,
        W,
        z,
        q,
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
        oe,
        le,
        se,
        ce,
        ue,
        de,
        pe,
        me,
        fe,
        he,
        ge,
        ve,
        ye,
        be,
        _e,
        ke,
        Se,
        Ce,
        Ee,
        Te,
        we,
        xe,
        Re,
        Fe,
        Ae,
        Ie,
        Oe,
        Me,
        Le,
        De,
        Pe,
        Ke,
        Be,
        je = {
          fragment: {
            argumentDefinitions: [
              (a = { defaultValue: null, kind: 'LocalArgument', name: 'id' }),
              (r = { defaultValue: null, kind: 'LocalArgument', name: 'next_cursor' }),
              (i = { defaultValue: null, kind: 'LocalArgument', name: 'previous_cursor' }),
              (o = { defaultValue: !1, kind: 'LocalArgument', name: 'withAttachments' }),
              (l = { defaultValue: !1, kind: 'LocalArgument', name: 'withDmMuting' }),
              (s = { defaultValue: null, kind: 'LocalArgument', name: 'withSafetyModeUserFields' }),
              (c = { defaultValue: null, kind: 'LocalArgument', name: 'withSuperFollowsUserFields' }),
            ],
            kind: 'Fragment',
            metadata: null,
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: (u = [
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
                    args: (d = [
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
                                      (f = {
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
                                      (g = {
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
                                                    selections: (E = [
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
                                                              (C = {
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
                                                    selections: E,
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
                                                              (T = {
                                                                alias: null,
                                                                args: null,
                                                                kind: 'ScalarField',
                                                                name: 'original_img_url',
                                                                storageKey: null,
                                                              }),
                                                              (w = {
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
                                                              (I = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  (F = {
                                                                    alias: null,
                                                                    args: null,
                                                                    kind: 'ScalarField',
                                                                    name: 'id_str',
                                                                    storageKey: null,
                                                                  }),
                                                                  k,
                                                                  S,
                                                                  (A = {
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
                                                  (O = {
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
                                              (D = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  O,
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
                                          (P = {
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
                                          (K = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (B = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (j = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (U = {
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
                                            selections: E,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: E,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: E,
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
                                              (V = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              m,
                                              (W = {
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
                                                selections: E,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: E,
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
                                                      (ne = {
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
                                                                  z,
                                                                  {
                                                                    kind: 'InlineFragment',
                                                                    selections: (J = [
                                                                      (q = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'alt_text',
                                                                        storageKey: null,
                                                                      }),
                                                                      x,
                                                                      w,
                                                                      T,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiMediaRect',
                                                                        kind: 'LinkedField',
                                                                        name: 'salient_rect',
                                                                        plural: !1,
                                                                        selections: [
                                                                          (G = {
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
                                                                          (Y = {
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
                                                                                selections: (X = [
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
                                                                      (Z = {
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
                                                                        selections: J,
                                                                        storageKey: null,
                                                                      }),
                                                                      (te = {
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
                                                                          (ee = {
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
                                                                    selections: [q, Z, $, te],
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
                                                                  (ie = {
                                                                    alias: null,
                                                                    args: null,
                                                                    concreteType: 'LegacyCardBinding',
                                                                    kind: 'LinkedField',
                                                                    name: 'binding_values',
                                                                    plural: !0,
                                                                    selections: [
                                                                      (ae = {
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
                                                                              G,
                                                                              Y,
                                                                              ee,
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
                                                                                  (re = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: 'ApiMediaEntityColor',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'rgb',
                                                                                    plural: !1,
                                                                                    selections: X,
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
                                                                              F,
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
                                                                  (oe = {
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
                                                                  ee,
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
                                                                              (se = {
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
                                                                                  ee,
                                                                                ],
                                                                                storageKey: null,
                                                                              }),
                                                                              (ce = {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'BadgeInfo',
                                                                                kind: 'LinkedField',
                                                                                name: 'badge',
                                                                                plural: !1,
                                                                                selections: [ee],
                                                                                storageKey: null,
                                                                              }),
                                                                              (ue = {
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
                                                                                  (pe = {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    kind: 'ScalarField',
                                                                                    name: 'rtl',
                                                                                    storageKey: null,
                                                                                  }),
                                                                                  W,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType:
                                                                                      'TimelineRichTextEntity',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'entities',
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                      (me = {
                                                                                        alias: 'fromIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'from_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (fe = {
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
                                                                                          (ye = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: (ve = [W]),
                                                                                            type: 'TimelineRichTextCashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (be = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [m, ee],
                                                                                            type: 'TimelineRichTextList',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (_e = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: ve,
                                                                                            type: 'TimelineRichTextHashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (ke = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              ee,
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
                                                                                                      ae,
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
                                                                                                selections: (Ee = [
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
                                                                                                          (Se = {
                                                                                                            alias: null,
                                                                                                            args: null,
                                                                                                            concreteType:
                                                                                                              'ApiUser',
                                                                                                            kind: 'LinkedField',
                                                                                                            name: 'legacy',
                                                                                                            plural: !1,
                                                                                                            selections:
                                                                                                              [S],
                                                                                                            storageKey:
                                                                                                              null,
                                                                                                          }),
                                                                                                          p,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      (Ce = {
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
                                                                                                selections: Ee,
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
                                                                              (Te = {
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
                                                                      (we = {
                                                                        alias: null,
                                                                        args: null,
                                                                        kind: 'ScalarField',
                                                                        name: 'has_nft_avatar',
                                                                        storageKey: null,
                                                                      }),
                                                                      (Ae = {
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
                                                                          ue,
                                                                          {
                                                                            alias: null,
                                                                            args: null,
                                                                            concreteType: 'UserEntities',
                                                                            kind: 'LinkedField',
                                                                            name: 'entities',
                                                                            plural: !1,
                                                                            selections: (Re = [
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
                                                                                      ee,
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
                                                                          k,
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
                                                                            selections: (Fe = [
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
                                                                                            selections: [Q, re],
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
                                                                            selections: Fe,
                                                                            storageKey: null,
                                                                          },
                                                                          A,
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
                                                                          S,
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
                                                                          ee,
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
                                                                            selections: Re,
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
                                                                          p,
                                                                          (Ie = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'professional_type',
                                                                            storageKey: null,
                                                                          }),
                                                                          (Oe = {
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
                                                                      (Le = {
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
                                                                      (De = {
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
            argumentDefinitions: [a, r, i, o, c, s, l],
            kind: 'Operation',
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: u,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: d,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      z,
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
                                      f,
                                      h,
                                      g,
                                      v,
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
                                                  k,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
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
                                                              m,
                                                              p,
                                                              C,
                                                              (Pe = {
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
                                                    selections: Ke,
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
                                                        selections: [z, R],
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
                                                            selections: [m, p, I, Pe],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  O,
                                                  M,
                                                  L,
                                                ],
                                                storageKey: null,
                                              },
                                              D,
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
                                          P,
                                          K,
                                          B,
                                          j,
                                          U,
                                          k,
                                          N,
                                          H,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: Ke,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: Ke,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: Ke,
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
                                              V,
                                              m,
                                              W,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: Ke,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: Ke,
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
                                                      ne,
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
                                                                  ie,
                                                                  oe,
                                                                  k,
                                                                  ee,
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
                                                                              se,
                                                                              ce,
                                                                              ue,
                                                                              {
                                                                                alias: 'longDescription',
                                                                                args: null,
                                                                                concreteType: 'TimelineRichText',
                                                                                kind: 'LinkedField',
                                                                                name: 'long_description',
                                                                                plural: !1,
                                                                                selections: [
                                                                                  de,
                                                                                  pe,
                                                                                  W,
                                                                                  {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType:
                                                                                      'TimelineRichTextEntity',
                                                                                    kind: 'LinkedField',
                                                                                    name: 'entities',
                                                                                    plural: !0,
                                                                                    selections: [
                                                                                      me,
                                                                                      fe,
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
                                                                                          ge,
                                                                                          ye,
                                                                                          be,
                                                                                          _e,
                                                                                          ke,
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
                                                                                                          Se,
                                                                                                          Pe,
                                                                                                          p,
                                                                                                          m,
                                                                                                        ],
                                                                                                        type: 'User',
                                                                                                        abstractKey:
                                                                                                          null,
                                                                                                      },
                                                                                                      Ce,
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
                                                                                                selections: Be,
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
                                                                              Te,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      we,
                                                                      Ae,
                                                                      Pe,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'Professional',
                                                                        kind: 'LinkedField',
                                                                        name: 'professional',
                                                                        plural: !1,
                                                                        selections: [p, Ie, Oe, m],
                                                                        storageKey: null,
                                                                      },
                                                                      Me,
                                                                      Le,
                                                                      De,
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
                    args: d,
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
            id: 'fqkg7zO94go0I31RTGxX3g',
            metadata: { sliceInfoPath: ['dm_conversation_by_rest_id', 'legacy_conversation_slice', 'slice_info'] },
            name: 'evolutionDmConversationTimelineQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(je.hash = 'd07206d5b39d9e3de615f7f59f505da7'), (t.default = je)
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
        u = n('4n2h'),
        d = s.a.create(function (e) {
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
          f = 'follow' === t.reason ? p : m,
          h = Object(u.b)(s),
          g = Object(u.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: g, weight: h }, f)
          : r.a.createElement(
              l.a,
              { style: d.root },
              r.a.createElement(c.b, { align: 'center', color: g, size: 'subtext2', weight: h }, f),
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
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return v
      }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'c', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return _
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
        o = n('dWxr'),
        l = n.n(o),
        s = n('OiMc'),
        c = n('hHEM'),
        u = n('rHpw'),
        d = n('aITJ'),
        p = n('IZ3v'),
        m = function (e, t) {
          for (var n = l()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        f = { clipPath: 'circle(0% at center)' },
        h = function (e, t, n) {
          e.findEntityRanges(function (e) {
            var t = e.getEntity(),
              a = t ? n.getEntity(t) : null
            return !!a && 'LINK' === a.getType()
          }, t)
        },
        g = function (e) {
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
        v = function (e) {
          return { strategy: h, component: g(e) }
        },
        y = {
          strategy: h,
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        b = {
          strategy: m,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(p.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(p.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        _ = {
          strategy: m,
          component: function (e) {
            return r.a.createElement('span', { style: { color: u.a.theme.colors.link } }, e.children)
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
            return !(d.b.isFirefox() && d.b.firefoxVersion() < 49)
              ? r.a.Children.map(t, function (e) {
                  var t,
                    n = r.a.Children.map(e, function (e) {
                      return r.a.createElement('span', { style: f }, e)
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
        o = n.n(i),
        l = n('Y9Ll'),
        s = n.n(l),
        c = n('1Pcy'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        g = n.n(h),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        b = n.n(y),
        _ = n('HPNB'),
        k = n('VAZu'),
        S = n('wiP2'),
        C = n('Es6L'),
        E = n('yiKp'),
        T = n.n(E),
        w = n('rHpw'),
        x = w.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: T()(T()({}, w.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        R = n('MWbm'),
        F = n('yw4N'),
        A = n('TnY3'),
        I = n('cHvH'),
        O = n('3xLC'),
        M = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        L = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? b.a.createElement(
                      R.a,
                      { style: x.fill },
                      b.a.createElement(
                        F.a,
                        { style: x.viewportView },
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
                  return b.a.createElement(I.a, null, function (t) {
                    var n = t.windowWidth
                    return _.a.isTwoColumnLayout(n) ? e._renderForTwoColumnLayout() : e._renderForOneColumnLayout()
                  })
                },
              },
              {
                key: '_renderForOneColumnLayout',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n =
                      (e.leftControl,
                      e.screenType,
                      e.showSubtitleOnRoot,
                      e.showSubtitleOnWideDetail,
                      e.withBottomBorder,
                      e.withDetailOpen,
                      r()(e, M))
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : b.a.createElement(S.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return b.a.createElement(
                    b.a.Fragment,
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
                    o = n.backLocation,
                    l = n.documentTitle,
                    s = n.headerless,
                    c = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    m = n.rightControl,
                    f = n.screenType,
                    h = n.searchBoxOptions,
                    g = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    E = n.title,
                    T = n.titleIconCell,
                    w = n.titleIconCellSize,
                    F = n.withDetailOpen,
                    A = n.withSearchBox,
                    I = n.withTweetButton,
                    O = 'root' === f,
                    M = 'secondaryRoot' === f,
                    L = 'primaryDetail' === f,
                    D = (L && _) || (O && y),
                    P = O || (L && t),
                    K = O ? v.c : L ? v.a : void 0,
                    B = b.a.createElement(
                      R.a,
                      { style: x.appBarContainer },
                      b.a.createElement(k.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: P,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: g,
                        subtitle: D ? C : void 0,
                        title: E,
                        titleDomId: K,
                        titleIconCell: T,
                        titleIconCellSize: w,
                      }),
                    ),
                    j =
                      O || (M && F)
                        ? null
                        : b.a.createElement(S.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: h,
                            subtitle: C,
                            title: E,
                            withSearchBox: A,
                            withTweetButton: I,
                          })
                  return b.a.createElement(b.a.Fragment, null, j, B)
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      g()(L, 'contextType', O.a),
        g()(L, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(L)
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
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        g = n.n(h),
        v = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(v),
        b = n('0JOx'),
        _ = n('zh9S'),
        k = n('MMRb'),
        S = n('CDB5'),
        C = n('RqPI'),
        E = n('1YZw'),
        T = n('hqKg'),
        w = n('kGix'),
        x = n('AQOc'),
        R = n('UhuB'),
        F = n('pNZL'),
        A = n('G6rE'),
        I = n('oEGd'),
        O = n('X/yg'),
        M = n('0KEI'),
        L = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        P = Object(T.createSelector)(
          k.selectFetchStatus,
          function (e, t) {
            return k.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === w.a.LOADED ? t : e
          },
        ),
        K = Object(T.createSelector)(
          function (e, t) {
            return k.selectEntriesForConversation(e, D(0, t))
          },
          C.r,
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
          C.r,
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
          L.j,
          R.n,
          K,
          L.m,
          function (e, t) {
            var n = D(0, t)
            return k.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, o, l, s, c, u, d, p, m, f, h, g, v, y) {
            var b = e && e.data
            return {
              conversation: (b && Object(x.a)(b, t, o)) || void 0,
              dataSaverMode: f,
              draftText: m,
              dtabBarInfo: v,
              fetchStatus: l,
              gifMetadata: p,
              inboxType: y,
              isDmReceiptSettingEnabled: h,
              cardUrl: s,
              isNewGroupConversation: n,
              isUploading: c,
              media: u,
              mediaUploadProgress: d,
              newConversationParticipants: r,
              perspective: a,
              quickReplyOptions: g,
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
            addToast: E.b,
            addWelcomeMessageToConversation: k.addWelcomeMessageToConversation,
            cancelUpload: Object(O.a)(e.conversationId),
            createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationFuture: k.fetchConversationFuture,
            fetchConversationHistoricalSnapshot: k.fetchConversationHistoricalSnapshot,
            fetchConversationHistory: k.fetchConversationHistory,
            fetchConversationIfNeeded: k.fetchConversationIfNeeded,
            fetchInboxIfNeeded: k.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: k.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: _.googleAnalyticsPageView,
            leaveConversation: k.leaveConversation,
            removeMedia: Object(O.b)(e.conversationId),
            removeText: S.d,
            scribeAction: _.scribeAction,
            scribePageImpression: _.scribePageImpression,
            sendMessage: S.m,
            updateConversationReadState: k.updateConversationReadState,
            updateTweetDetailNav: F.b,
            updateTyping: k.updateTyping,
            removeConversation: k.removeConversation,
            popOutConversation: k.popOutConversation,
          }
          var t
        }),
        U = n('I2k/'),
        N = n('4AMG'),
        H = n('uB9N'),
        V = n('htvZ'),
        W = n('v//M'),
        z = n('3XMw'),
        q = n.n(z),
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
        oe = n('ddV6'),
        le = n.n(oe),
        se = (n('ho0z'), n('v6aA')),
        ce = n('EbOo'),
        ue = n('rxPX'),
        de = Object(ue.a)().propsFromActions(function () {
          return {
            addToast: E.b,
            block: A.e.block,
            createLocalApiErrorHandler: Object(M.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: k.muteDMUser,
            unmuteDMUser: k.unmuteDMUser,
            unblock: A.e.unblock,
          }
        }),
        pe = (n('AQ79'), n('u0B7')),
        me = (n('uFXj'), n('97Jx')),
        fe = n.n(me),
        he = n('tZH3'),
        ge = n('/yvb'),
        ve = n('efqG'),
        ye = q.a.ccf2f24e,
        be = q.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = y.a.createElement(ge.a, fe()({}, i, { accessibilityRole: 'button' }), be),
            l = y.a.createElement(ge.a, fe()({}, i, { onPress: a }), ye),
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
          return t ? l : y.a.createElement(ve.a, { renderContent: s }, o)
        },
        ke = n('MWbm'),
        Se = n('cHvH'),
        Ce = n('rHpw'),
        Ee = function (e) {
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
              ke.a,
              { style: Te.actionsContainer },
              n &&
                y.a.createElement(
                  ge.a,
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
                  style: s ? [Te.actionFullWidth, Te.actionMarginTop] : [Te.actionHalfWidth, Te.actionMarginLeft],
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
                    style: [Te.actionFullWidth, Te.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        Te = Ce.a.create(function (e) {
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
        we = n('aITJ'),
        xe = n('t62R'),
        Re = n('eb3s'),
        Fe = n('vMjK'),
        Ae = n('7JQg'),
        Ie = n('24HD'),
        Oe = n('zCf4'),
        Me = q.a.da878dcf,
        Le = q.a.d96cf7cd,
        De = (q.a.gde6b424, q.a.e308019b, q.a.gf5e9ea6, q.a.hc52446b),
        Pe = q.a.f7e1ad65,
        Ke = { headline: q.a.gdf4b79f, text: q.a.bbf83d83, confirmButtonLabel: q.a.bb1d57b6 },
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
        je = Object(Ae.a)({ element: 'untrusted_interstitial' })(
          de(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = y.a.useContext(se.a),
              o = Object(Oe.f)(),
              l = Object(Oe.g)(),
              s = y.a.useState(!1),
              c = le()(s, 2),
              u = c[0],
              d = c[1],
              p = y.a.useState(!1),
              m = le()(p, 2),
              f = m[0],
              h = m[1],
              g = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE }],
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
              C,
              E = function () {
                d(!0), h(!1)
              },
              T = function () {
                d(!1)
              },
              w = function () {
                h(!1)
              },
              x = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === k.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = (null == t ? void 0 : t.participants.length) || 0,
                  c = (null == l || null === (n = l.state) || void 0 === n ? void 0 : n.position) || 0,
                  u = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: s,
                    position: c,
                    inbox_type: Object(O.i)(r),
                    entry_point: Z.c.REQUEST_ACTION_SHEET,
                  }
                d(!1), i({ conversationId: a }), v(o, u), R()
              },
              R = function () {
                var t = e.inboxType
                o.push(Object(O.f)(t))
              },
              F = function () {
                !(function () {
                  var n,
                    a = e.acceptConversation,
                    i = e.conversationId,
                    o = e.inboxType,
                    s = e.scribeAction,
                    c = e.scribeNamespace,
                    u = (null == t ? void 0 : t.participants.length) || 0,
                    d = (null == l || null === (n = l.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (a(i),
                    s(r()(r()({}, c), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE,
                      conversation_participant_count: u,
                      entry_point: Z.c.REQUEST_ACTION_SHEET,
                      inbox_type: Object(O.i)(o),
                      position: d,
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
                    v('block')
                }
              },
              I = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), v('unblock')
                }
              },
              M = (t && t.type) === k.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                ke.a,
                { style: Be.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    xe.b,
                    { style: Be.copy },
                    e ? De : Pe({ senderName: Object(O.j)(t, n).name }),
                  )
                })(M),
                y.a.createElement(Ee, {
                  acceptButtonText: Me,
                  conversation: t,
                  declineButtonText: Le,
                  isGroup: M,
                  onAccept: F,
                  onBlock: function () {
                    d(!1), h(!0)
                  },
                  onLeave: E,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), o.push(Object(O.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              we.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: Le, onLeftClick: E, onRightClick: F, rightText: Me })
                : null,
              u
                ? y.a.createElement(Re.a, {
                    confirmButtonLabel: Ke.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ke.headline,
                    onCancel: T,
                    onConfirm: x,
                    text: Ke.text,
                  })
                : null,
              f
                ? ((b = i.loggedInUserId),
                  (_ = Object(O.j)(t, b)),
                  (S = _.idStr),
                  (C = _.screenName),
                  Object(Ie.j)({ confirmation: Object(Ie.f)(C), onClose: w, handleConfirm: A(S) }))
                : null,
            )
          }),
        ),
        Ue = n('yw4N'),
        Ne = n('rFBM'),
        He = n('mw9i'),
        Ve = n('jTgF'),
        We = n('+d3d'),
        ze = n('mN6z'),
        qe = y.a.createElement(G.a, null),
        Ge = q.a.badb01a0,
        Ye = q.a.e3275464,
        Qe = q.a.d6b11d9c,
        Xe = q.a.i7ca1446,
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
          var t = f()(n)
          function n(e, a) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, a)),
              g()(u()(i), '_composer', y.a.createRef()),
              g()(u()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              g()(u()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              g()(u()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              g()(u()(i), '_initialFetch', function () {
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
              g()(u()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              g()(u()(i), '_leaveConversation', function (e) {
                var t = i.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
              }),
              g()(u()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  a = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    we.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(a({ showToast: !0 }))
              }),
              g()(u()(i), '_renderActions', function () {
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
                      we.b.isKaiOS()
                        ? y.a.createElement(ae.a, {
                            leftText: Xe,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Ge,
                          })
                        : null,
                    )
              }),
              g()(u()(i), '_render', function () {
                var e,
                  t,
                  n,
                  a = i.props,
                  r = a.conversation,
                  o = a.conversationId,
                  l = a.drawerHeader,
                  s = a.inboxType,
                  c = a.isWide,
                  u = a.location,
                  d = a.perspective,
                  p = a.scribeNamespace,
                  m = i.state,
                  f = m.attachment,
                  h = m.composerHeight
                return y.a.createElement(
                  V.b,
                  { key: o },
                  y.a.createElement(
                    Ne.a,
                    { allowDragDrop: !Je(f), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    y.a.createElement(
                      Ue.a,
                      {
                        style: [
                          re.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(r) && { paddingBottom: h },
                        ],
                      },
                      d &&
                        r &&
                        (null == u ||
                          null === (e = u.state) ||
                          void 0 === e ||
                          !e.entryPoint ||
                          i.state.hasLoadedSnapshot)
                        ? y.a.createElement(N.a, {
                            conversation: r,
                            drawerHeader: l,
                            inboxType: s,
                            isWide: c,
                            messageSearchEntryId:
                              null == u || null === (t = u.state) || void 0 === t ? void 0 : t.entryPoint,
                            onForwardRequest: i._handleForwardRequest,
                            onHistoryRequest:
                              null != u && null !== (n = u.state) && void 0 !== n && n.entryPoint
                                ? i._handleRelativeHistoryRequest
                                : i._handleHistoryRequest,
                            perspective: d,
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
              g()(u()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              g()(u()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              g()(
                u()(i),
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
                u()(i),
                '_throttleSaveDraftText',
                Object(We.a)(
                  function () {
                    i.props.conversationId && i._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              g()(u()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              g()(u()(i), '_handleForwardRequest', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.createLocalApiErrorHandler,
                  r = e.fetchConversationFuture
                i.setState({ shouldScrollToCenter: !1 }),
                  null != t && t.max_search_entry_id && r({ conversationId: n }).catch(a())
              }),
              g()(u()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              g()(u()(i), '_handleRelativeHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.fetchConversationHistory
                i.setState({ shouldScrollToCenter: !1 }), a({ conversationId: t, isSearch: !0 }).catch(n())
              }),
              g()(u()(i), '_handleSendMessage', function (e, t) {
                var n,
                  a,
                  o = i.props,
                  l = o.addToast,
                  s = o.cardUrl,
                  c = o.conversation,
                  u = o.conversationId,
                  d = o.createLocalApiErrorHandler,
                  p = o.gifMetadata,
                  m = o.history,
                  f = o.location,
                  h = o.newConversationParticipants,
                  g = o.perspective,
                  v = o.scribeAction,
                  y = o.scribeNamespace,
                  b = o.sendMessage,
                  _ = o.tweetAttachment,
                  S = i.state.attachment,
                  C = S && S.media,
                  E = null != c && c.participants ? c.participants.length : 0,
                  T = (null == c ? void 0 : c.type) === k.CONVERSATION_TYPE.GROUP,
                  w = 'unknown'
                if (
                  (e.quickReply ||
                    C ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  w = 'gif'
                else if (s) w = 'card'
                else if (_) w = 'tweet'
                else {
                  var x,
                    R = null == S || null === (x = S.media) || void 0 === x ? void 0 : x.mediaFile,
                    F = null != R && R.isVideo ? 'video' : null != R && R.isGif ? 'gif' : 'photo'
                  w = R ? F : t ? 'text' : 'unknown'
                }
                return (
                  u &&
                    v(r()(r()({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: u,
                      conversation_participant_count: E,
                      conversation_type: T ? Z.j.GROUP : Z.j.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  u
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (a = n.media) &&
                          void 0 !== a &&
                          a.uploading) ||
                        (i.setState({ attachment: null }), m.replace(f.pathname)),
                      b(
                        r()(
                          { senderId: g, cardUrl: s, conversationId: u, text: t, tweetAttachment: _ },
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
                              var t = Object(Ve.b)(e, Qe)
                              t && l(t)
                            } else d($.b)(e)
                        }))
                    : (b({
                        senderId: g,
                        recipients:
                          h &&
                          h.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: _,
                      }).then(function (e) {
                        v(r()(r()({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: Z.j.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          m.replace('/messages/'.concat(e))
                      }, d($.b)),
                      Promise.resolve())
                )
              }),
              g()(u()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              g()(u()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              g()(u()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              g()(u()(i), '_handleSaveDraftText', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.saveText
                t && i._currentComposer && n(t, i._currentComposer.value())
              }),
              (i.state = {
                attachment: Ze(e),
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
                    u = o.isUploading,
                    d = o.location,
                    p = o.quickReplyOptions,
                    m = o.updateConversationReadState
                  ;((null == d || null === (n = d.state) || void 0 === n ? void 0 : n.entryPoint) !==
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
                      u || !e.isUploading || p || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === w.a.LOADED && c !== w.a.LOADED && s && this._fetchConversation(s))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(ze.a)(t, n) || this.setState({ attachment: Ze(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    He.a,
                    { style: [re.a.root, we.b.isKaiOS() && re.a.kaiOSFix] },
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
                    u = e.mediaUploadProgress,
                    d = e.quickReplyOptions,
                    p = e.removeMedia,
                    m = e.richTextInputContext,
                    f = e.scribeNamespace,
                    h = e.typeaheadWrapper,
                    g = this.state,
                    v = g.attachment,
                    b = g.isSending,
                    _ = this.props.prefillText || o
                  return null != a && a.read_only
                    ? null
                    : y.a.createElement(H.a, {
                        attachment: v,
                        conversationId: r,
                        disabled: c,
                        dtabBarInfo: l,
                        history: s,
                        isCardPreviewTombstoned: Object(Q.a)(n),
                        isSending: b,
                        isUploading: c,
                        key: r,
                        mediaUploadProgress: u,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: i ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof _ ? _ : void 0,
                        primaryActionIcon: qe,
                        primaryActionLabel: Ye,
                        quickReplyOptions: d,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: m,
                        scribeNamespace: f,
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
                            : n.status) === k.PAGINATION_STATUS.AT_END && (r = !1),
                            a.setState({ hasLoadedSnapshot: !0, shouldScrollToCenter: r })
                        })
                        .catch(function (e) {
                          return a.setState({ hasLoadedSnapshot: !0 }), i(e)
                        }))
                    : l({ conversationId: e })
                        .then(function () {
                          return c(e)
                        })
                        .catch(i(Object(U.a)(e)))
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
                    u = !r || !r.type || r.type === k.CONVERSATION_TYPE.GROUP,
                    d = r && (null == r || null === (t = r.participants) || void 0 === t ? void 0 : t.length) <= 1
                  return c || u || d ? Promise.resolve() : a(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()($e, 'contextType', se.a), g()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Ae.a)()(j($e))
    },
    RH6X: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        g = n.n(h),
        v = n('oEoC'),
        y = n('2dXj'),
        b = n('4bHO'),
        _ = n('dzqK'),
        k = n('GZwR'),
        S = n('zpdM'),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              f()(s()(e), '_genericWrapperRef', g.a.createRef()),
              f()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  l = t.source,
                  s = e.state,
                  c = s.canShowTypeahead,
                  u = s.queryContext,
                  d = c && u ? { word: u.word, resultType: u.resultType } : void 0
                return g.a.createElement(
                  y.a,
                  {
                    contextText: a,
                    isInline: r,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: l || k.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              f()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              f()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              f()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              f()(s()(e), '_handleInputChange', function (t) {
                if (!Object(_.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  a = n && n.word,
                  r = e._getPlaintextFromCurrentBlock(t),
                  i = v.c(e._getCaret(t), r),
                  o = i.end,
                  l = i.start,
                  s = i.word,
                  c = v.e(s || '', 'compose')
                if ((null == c ? void 0 : c.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (c) {
                    var u = c.q,
                      d = c.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: l, endIndex: o })
                  } else e._setQueryContext(void 0)
              }),
              f()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              f()(s()(e), '_handleDismiss', function () {
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
                  var n = t.editorState,
                    a = t.endIndex,
                    r = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: r, focusOffset: a }),
                    o = S.Modifier.replaceText(n.getCurrentContent(), i, e),
                    l = S.EditorState.push(n, o, 'insert-characters'),
                    s = r + e.length,
                    c = l.getSelection().merge({ anchorOffset: s, focusOffset: s })
                  return S.EditorState.forceSelection(l, c)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      t.a = C
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
        u = o.a.ffde2fdb,
        d = c.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.a.createElement(l.a, { style: d.spinner }, r.a.createElement(s.a, { accessibilityLabel: u }))
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
        return I
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('KEM+'),
        g = n.n(h),
        v = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(v),
        b = n('3XMw'),
        _ = n.n(b),
        k = n('cjZk'),
        S = 'fileInput',
        C = n('sjK1'),
        E = n('/Imo'),
        T = n('rHpw'),
        w = n('9HgX'),
        x = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        R = _.a.b9960f31,
        F = { viewType: 'media_picker' },
        A = y.a.createElement(k.a, null),
        I = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            a = void 0 === n || n,
            r = e.acceptVideo
          return (a ? w.b : []).concat(t ? [w.a] : []).concat(r ? C.a : [])
        },
        O = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
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
                    u = o()(e, x),
                    d = I({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    E.a,
                    r()({}, u, {
                      accept: d,
                      behavioralEventContext: F,
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
        icon: A,
        size: 'medium',
        withIcon: !0,
      })
      var M = T.a.create(function (e) {
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
          return u
        }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'i', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return f
        }),
        n.d(t, 'l', function () {
          return h
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
          return k
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
        u = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        d = function (e) {
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
      function f(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && f(t)) && !!e.video.audio_only
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
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('ERkP'),
        s = n.n(l),
        c = n('v6aA'),
        u = n('XOJV'),
        d = n('eSoz'),
        p = n('rxPX'),
        m = n('0KEI'),
        f = function (e, t) {
          return t.tweetId
        },
        h = function (e, t) {
          var n = t.tweetId,
            a = n && u.a.select(e, n)
          return a ? Object(d.g)(e, a) : void 0
        },
        g = Object(p.a)()
          .propsFromState(function () {
            return { community: h, hydratedTweet: u.a.createHydratedTweetSelector(f) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(m.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        v = n('YeIG'),
        y = n('uCxL'),
        b = n('x5Pi'),
        _ = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = g(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            l = (e.tweetId, o()(e, _)),
            u = s.a.useContext(c.a),
            d = u.featureSwitches,
            p = u.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              m && Object(v.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var f = d.isTrue('responsive_web_alt_text_badge_enabled'),
            h = i && Object(b.f)(i, p, t),
            g = h && Object(b.e)(h),
            k = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            r()({}, l, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: f,
              socialContextProps: g,
              tweet: i,
              withReactions: k,
            }),
          )
        })
      t.a = k
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
        u = n('Y9Ll'),
        d = n.n(u),
        p = n('1Pcy'),
        m = n.n(p),
        f = n('5Yy7'),
        h = n.n(f),
        g = n('2VqO'),
        v = n.n(g),
        y = n('KEM+'),
        b = n.n(y),
        _ = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        k = n('3XMw'),
        S = n.n(k),
        C = n('sgih'),
        E = n('t62R'),
        T = n('/yvb'),
        w = n('rHpw'),
        x = S.a.cfd2f35d,
        R = (function (e) {
          h()(n, e)
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
            d()(n, [
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
                      style: F.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    C.a,
                    { onMaskClick: o, style: F.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(E.b, { align: 'center', style: F.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(E.b, { align: 'center', color: 'gray700', style: F.labelText }, n),
                    l,
                    r.a.createElement(T.a, { onPress: o, size: 'xLarge', style: F.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(R, 'defaultProps', { cancelButtonLabel: x })
      var F = w.a.create(function (e) {
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
        A = R,
        I = n('I/9y'),
        O = n('mjJ+'),
        M = n('cm6r'),
        L = n('CaKu'),
        D = n('U+bB'),
        P = S.a.e05c00b4,
        K = S.a.eabf2209,
        B = S.a.a613e72f,
        j = S.a.f88553c8,
        U = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        N = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(O.a, {
                  items: [{ text: B, Icon: I.a, onClick: a._handleCopyGifLinkButtonClick }],
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
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showCopyLinkSheet,
                    t = this.props,
                    n = t.gifUrl,
                    a = t.provider,
                    i = a.display_name,
                    o = a.name,
                    l = U[o]
                  return l
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        e
                          ? r.a.createElement(A, {
                              description: K({ providerName: i }),
                              headerText: P,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          E.b,
                          { align: 'center', color: 'gray700', style: H.root },
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
                      E.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(D.a, { source: { uri: t }, style: H.image }),
                      r.a.createElement(E.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        H = w.a.create(function (e) {
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
        V = N,
        W = l(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(V, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = W
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
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        g = n.n(h),
        v = n('v6aA'),
        y = (n('WNMA'), n('zh9S')),
        b = n('MMRb'),
        _ = n('CDB5'),
        k = n('RqPI'),
        S = n('hqKg'),
        C = n('AQOc'),
        E = n('z2Pn'),
        T = n('pNZL'),
        w = n('G6rE'),
        x = n('oEGd'),
        R = n('X/yg'),
        F = function (e, t) {
          return t.match.params.conversationId
        },
        A = Object(S.createSelector)(
          function (e, t) {
            return b.selectConversation(e, F(0, t))
          },
          b.selectEntries,
          F,
          R.m,
          k.r,
          R.n,
          R.o,
          w.e.selectAll,
          function (e, t) {
            return _.j(e, F(0, t))
          },
          function (e, t) {
            return _.i(e, F(0, t))
          },
          function (e, t, n, a, r, i, o, l, s, c) {
            var u = e && e.data
            return {
              conversation: (u && Object(C.a)(u, t, l)) || void 0,
              conversationId: n,
              isNewGroupConversation: a,
              isUploading: s,
              media: c,
              newConversationParticipants: i,
              perspective: r,
            }
          },
        ),
        I = Object(x.d)(A, function (e) {
          return {
            cancelUpload: Object(R.a)(e.match.params.conversationId),
            googleAnalyticsPageView: y.googleAnalyticsPageView,
            removeMedia: Object(R.b)(e.match.params.conversationId),
            scribePageImpression: y.scribePageImpression,
            setLastViewedDmInboxPath: E.h,
            updateTweetDetailNav: T.b,
          }
        }),
        O = n('i4Oy'),
        M = n('Oi4X'),
        L = n('qBaR'),
        D = n('7myi'),
        P = n('rHpw'),
        K = n('7JQg'),
        B = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              f()(s()(i), '_composer', g.a.createRef()),
              f()(s()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              f()(s()(i), '_updateLastViewDmInboxPath', function () {
                var e = i.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var o = e.conversationId,
              l = e.history,
              c = e.isNewGroupConversation,
              u = e.location
            return o || c || u.pathname !== window.location.pathname || l.replace({ pathname: '/messages' }), i
          }
          return (
            o()(n, [
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
                    o = e.perspective,
                    l = e.richTextInputContext,
                    s = e.typeaheadWrapper,
                    c = 'string' == typeof r.query.text ? r.query.text : void 0,
                    u = O.a.get('window').width >= P.a.theme.breakpoints.small
                  return g.a.createElement(
                    L.a,
                    { conversation: t, conversationId: n, newConversationParticipants: i, perspective: o },
                    g.a.createElement(M.a, {
                      conversationId: n,
                      history: a,
                      isWide: u,
                      location: r,
                      prefillText: c,
                      richTextInputContext: l,
                      typeaheadWrapper: s,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      f()(B, 'contextType', v.a), f()(B, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: D.a })
      t.default = Object(K.a)({ page: 'messages', section: 'thread' })(I(B))
    },
    dWxr: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      n('2G9S'),
        Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          var n = (0, l.default)(e, t)
            .concat((0, o.default)(e))
            .concat((0, i.default)(e, { checkUrlOverlap: !1 }))
            .concat((0, r.default)(e))
          if (0 == n.length) return []
          return (0, s.default)(n), n
        })
      var r = a(n('EW8Q')),
        i = a(n('yyPN')),
        o = a(n('YXS5')),
        l = a(n('vwfs')),
        s = a(n('c8jd'))
      e.exports = t.default
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
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        g = n.n(h),
        v = n('K1iM'),
        y = n.n(v),
        b = n('RhWx'),
        _ = n.n(b),
        k = (n('wFPu'), n('CDB5')),
        S = n('xVN5'),
        C = n('vjRr'),
        E = n('rxPX'),
        T = n('0KEI'),
        w = function (e, t) {
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
        x = Object(E.a)()
          .propsFromState(function () {
            return { card: w }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(T.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: C.a.fetchCardPreviewIfNeeded,
              updateDMComposer: k.e,
              updateTweetComposer: S.w,
            }
          }),
        R = n('KqB4'),
        F = n.n(R),
        A = n('aX4+'),
        I = n('3XMw'),
        O = n.n(I),
        M = n('hOZg'),
        L = n('cnVF'),
        D = n('MWbm'),
        P = n('v6aA'),
        K = n('/yvb'),
        B = n('rHpw'),
        j = n('VY6S'),
        U = n('mN6z'),
        N = O.a.f6fec9f6,
        H = /^https?:\/\//i,
        V = function (e) {
          var t = F()(e)
          if (t.length)
            return t.map(function (e) {
              return (!H.test(e) && 'http://'.concat(e)) || e
            })
        },
        W = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              f()(s()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              f()(s()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: L.B })
              }),
              f()(s()(i), '_updateSingleComposer', function (e) {
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
                  Object(U.a)(e.urls, t) || this._debouncedFetchCardPreview()
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
                        g.a.createElement(A.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        g.a.createElement(K.a, {
                          accessibilityLabel: N,
                          icon: g.a.createElement(M.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: z.closeButton,
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
      f()(W, 'contextType', P.a)
      var z = B.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        q = x(W)
      t.a = q
    },
    hHEM: function (e, t, n) {
      'use strict'
      n('yH/f'), n('jwue'), n('7x/C'), n('+oxZ')
      var a = n('z4Oz'),
        r = n('LQrL'),
        i = n('zpdM'),
        o = function (e, t) {
          for (var n = 0, a = 0; a < e.length; a++) {
            var r = e[a],
              i = r.getText().length
            if (n + i >= t) return { blockKey: r.key, offset: t - n }
            n += i + 1
          }
          return Object.freeze({})
        },
        l = function (e, t) {
          var n = e.getCurrentContent(),
            a = n.getFirstBlock(),
            r = n.getLastBlock(),
            o = t.blockKey,
            l = void 0 === o ? r.key : o,
            s = t.offset,
            c = void 0 === s ? r.getText().length : s,
            u = e
              .getSelection()
              .merge({ anchorKey: a.key, anchorOffset: 0, focusKey: l, focusOffset: c, isBackward: !1 }),
            d = i.Modifier.removeInlineStyle(e.getCurrentContent(), u, 'overflow')
          return i.EditorState.push(e, d, 'change-inline-style')
        },
        s = function (e, t) {
          var n = t.blockKey,
            a = t.offset,
            r = e.getCurrentContent(),
            o = r.getLastBlock(),
            l = c(r, n, a)
          if (n) {
            var s = e
                .getSelection()
                .merge({
                  anchorKey: n,
                  anchorOffset: l,
                  focusKey: o.key,
                  focusOffset: o.getText().length,
                  isBackward: !1,
                }),
              u = i.Modifier.applyInlineStyle(r, s, 'overflow')
            return i.EditorState.push(e, u, 'change-inline-style')
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
              var o = i && e.getEntity(i),
                l = o && o.data && o.data.id
              if (void 0 !== l)
                for (var s = n - 1; s >= 0; s--) {
                  var c = r.getEntityAt(s),
                    u = c && e.getEntity(c)
                  if (!u || !u.data || u.data.id !== l) {
                    a = s + 1
                    break
                  }
                }
            }
            return a
          }
        },
        u = 'TWEMOJI',
        d = 'IMMUTABLE'
      t.a = {
        convertEmojiToEntities: function (e) {
          var t = i.EditorState.set(e, { allowUndo: !1 }),
            n = t.getCurrentContent(),
            r = 0
          return (
            n.getBlocksAsArray().forEach(function (e) {
              a.a.getTwemojiEntities(e.getText()).forEach(function (a) {
                if (2 === (a.indices && a.indices.length)) {
                  var o = n.createEntity(u, d, { url: a.url || null, id: r })
                  r += 1
                  var l = o.getLastCreatedEntityKey(),
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
                  n = i.Modifier.applyEntity(o, c, l)
                }
              })
            }),
            i.EditorState.set(t, { allowUndo: !0, currentContent: n })
          )
        },
        getRelativeOffset: o,
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
        TWEMOJI_ENTITY_TYPE: u,
        updateOverflowStyle: function (e, t) {
          var n,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = e.getSelection(),
            c = i.EditorState.set(e, { allowUndo: !1 }),
            u = e.getCurrentContent().getSelectionBefore(),
            d = e.getCurrentContent().getSelectionAfter(),
            p = e.getCurrentContent(),
            m = p.getBlocksAsArray(),
            f = 'number' == typeof t && t > -1,
            h = f ? o(m, t) : Object.freeze({})
          if ((a && ((c = l(c, h)), (n = !0)), f && ((c = s(c, h)), (n = !0)), n)) {
            var g = (c = i.EditorState.forceSelection(c, r)).getCurrentContent()
            ;(g = (g = g.set('selectionBefore', u)).set('selectionAfter', d)),
              (c = i.EditorState.set(e, { allowUndo: !0, currentContent: g }))
          }
          return c
        },
      }
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
        return k
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
      var u = n('X/yg'),
        d = n('yiKp'),
        p = n.n(d),
        m = (n('849X'), n('TJCb'), n('89tF')),
        f = n('k89r')
      function h(e) {
        var t,
          n,
          a,
          i,
          o,
          l =
            ((t = r.a.useState(y.activeVoiceMessage)),
            (n = r.a.useState(y.playerApi)),
            (a = r.a.useState(y.playerState)),
            (o = Object(f.a)()),
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
      function k(e) {
        var t = r.a.useContext(i.a).featureSwitches
        return Object(u.k)(t) ? r.a.createElement(h, null, e.children, r.a.createElement(c, null)) : e.children
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
        u = n('I4+6'),
        d = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        f = ['align', 'color', 'label'],
        h = p.a.create(function (e) {
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
          l = o()(e, f),
          g = u.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: h.container },
          s.a.createElement(
            d.a,
            r()({}, l, { interactiveStyles: g, style: h.root }),
            s.a.createElement(c.b, { align: n, color: a }, i),
          ),
        )
      }
    },
    keCP: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l = n('1Pcy'),
        s = n.n(l),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = n('97Jx'),
        g = n.n(h),
        v =
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
        b = 'singleline',
        _ = function (e) {
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
              b,
              ' .public-DraftStyleDefault-block {\n            overflow-x: auto;\n            scrollbar-width: none;\n            white-space: nowrap;\n            -ms-overflow-style: none;\n        }\n        .',
            )
            .concat(
              b,
              ' .public-DraftStyleDefault-block::-webkit-scrollbar {\n            display: none;\n        }\n    ',
            )
        },
        k = n('ERkP'),
        S = n.n(k),
        C = n('k/Ka'),
        E = n('PxJJ'),
        T = n('w9LO'),
        w = n('fs1G'),
        x = n('zpdM'),
        R = function (e) {
          return Object(C.a)('div', e)
        },
        F = !1,
        A =
          ((t.a = S.a.forwardRef(function (e, t) {
            var n = v.d()
            return S.a.createElement(
              A,
              g()({}, e, {
                onFocus: function (t) {
                  e.onFocus && e.onFocus(t), n('focus')
                },
                ref: t,
              }),
            )
          })),
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                f()(s()(e), '_setSelectionToStart', function () {
                  var t = e.props.editorState,
                    n = t.getCurrentContent().getFirstBlock().getKey()
                  return x.EditorState.acceptSelection(
                    t,
                    new x.SelectionState({
                      anchorKey: n,
                      anchorOffset: 0,
                      focusKey: n,
                      focusOffset: 0,
                      isBackward: !1,
                    }),
                  )
                }),
                f()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return x.EditorState.forceSelection(t, t.getSelection())
                }),
                f()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(x.EditorState.moveFocusToEnd(a))
                    : null == r || r(x.EditorState.moveSelectionToEnd(a))
                }),
                f()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = _({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                f()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                f()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                f()(s()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                f()(s()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                f()(s()(e), 'clear', function () {}),
                f()(s()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                f()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                f()(s()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                f()(s()(e), '_removeNewLines', function (e, t) {
                  return x.EditorState.push(
                    t,
                    x.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                f()(s()(e), '_removeInvalidStylesFromContentBlock', function (t) {
                  var n = e.props.pastedStylesAllowlist,
                    a = t.getCharacterList().map(function (e) {
                      return e
                        .getStyle()
                        .filter(function (e) {
                          return !(null != n && n.includes(e))
                        })
                        .reduce(function (e, t) {
                          return x.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', a)
                }),
                f()(s()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(x.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      o =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (o) {
                      var l = x.ContentState.createFromBlockArray(o, null == r ? void 0 : r.entityMap)
                      return x.EditorState.push(
                        n,
                        x.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), l.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                f()(s()(e), '_onPastedText', function (t, n, a) {
                  var r = e.props,
                    i = r.multiline,
                    o = r.onChange,
                    l = r.pastedStylesAllowlist
                  if (o) {
                    if (!i) return o(e._removeNewLines(t, a)), 'handled'
                    if (null != l && l.length) {
                      var s = e._removeInvalidStyles(n, a)
                      if (s) return o(s), 'handled'
                    }
                  }
                  return 'not-handled'
                }),
                f()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = x.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(x.getDefaultKeyBinding)(t)
                }),
                f()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                f()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                f()(s()(e), '_getContainerStyle', function () {
                  var t = e.props,
                    n = t.appTextSize,
                    a = t.maxNumberOfLines,
                    r = t.multiline,
                    i = t.numberOfLines,
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
                      ]
                  return { minHeight: (r && i ? i : 1) * o, maxHeight: (r && a ? a : 1) * o }
                }),
                e
              )
            }
            return (
              o()(
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
                      E.a.report(e, { tags: { userVisible: !0, draftJs: !0 } })
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
                        o = t.blockRenderMap,
                        l = t.blockRendererFn,
                        s = t.editorState,
                        c = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        h = t.onKeyPress,
                        g = t.onKeyUp,
                        v = t.pastedStylesAllowlist,
                        _ = t.placeholder,
                        k = t.spellCheck,
                        C = t.style,
                        E = t.testID
                      return S.a.createElement(
                        R,
                        {
                          className: u ? void 0 : b,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), C],
                        },
                        S.a.createElement(x.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: u,
                          blockRenderMap: o,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            f()(e, T.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            f()(e, 'onKeyPress', h),
                            f()(e, 'onKeyUp', g),
                            e),
                          customStyleMap: I(y.a.theme),
                          editorState: s,
                          handleKeyCommand: this._onKeyCommand,
                          handlePastedFiles: this._onPastedFiles,
                          handlePastedText: this._onPastedText,
                          handleReturn: u ? c : this._onSingleLineReturn,
                          keyBindingFn: this._myKeyBindingFn,
                          onChange: d,
                          onFocus: p,
                          onKeyDown: m,
                          placeholder: _,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== k,
                          stripPastedStyles: !(u && null != v && v.length),
                          tabIndex: 0,
                          webDriverTestID: E,
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
      f()(A, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: w.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (A.propTypes = {})
      var I = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
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
        u = n.n(c),
        d = Object(l.a)({
          loader: function () {
            return u.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(17), n.e(208)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(s.a, { hasError: e, onRetry: t })
          },
        }),
        p = n.p + 'twemoji_sprite.6d90d9d5.png',
        m = n.p + 'twemoji_sprite_high_res.0b0faef5.png',
        f = n('rHpw'),
        h = n('U+bB'),
        g = n('kLqS'),
        v = n('MWbm'),
        y = f.a.create(function (e) {
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
              o.a.createElement(d, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            o.a.createElement(h.a, { source: a, style: y.hidden }),
          )
        },
        _ = n('pNJr'),
        k = n('2ZFc'),
        S = n('OiMc'),
        C = n('/yvb'),
        E = u.a.d4a4842d,
        T = o.a.createElement(_.a, null),
        w = u.a.fec16c1c,
        x = { viewType: 'emoji_picker' },
        R = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            l = e.style,
            s = e.textInputRef,
            c = o.a.useState(!0),
            u = r()(c, 2),
            p = u[0],
            m = u[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              d.preload(), k.a.get('emojiPicker2')
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
              accessibilityLabel: E,
              behavioralEventContext: x,
              disabled: t,
              hoverLabel: { label: w },
              icon: T,
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
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return F
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        f = n.n(m),
        h = n('2VqO'),
        g = n.n(h),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('2G9S'), n('ERkP')),
        _ = n.n(b),
        k = n('nT9l'),
        S = n('3XMw'),
        C = n.n(S),
        E = 'image',
        T = n('TIdA'),
        w = n('a6qo'),
        x = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        R = C.a.f93bb3ee,
        F = (function (e) {
          f()(n, e)
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
                  c = o()(i, x)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    T.a,
                    r()({}, c, { accessibilityLabel: l, onVariantSelection: n, previewMode: a, testID: E }),
                  ),
                  s ? _.a.createElement(w.a, { align: 'left', altLabel: l }) : null,
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
                  return _.a.createElement(k.a, {
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
    q2o4: function (e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r,
        i,
        o,
        l,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        g,
        v,
        y,
        b,
        _,
        k,
        S,
        C = {
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
                  (o = { alias: null, args: null, kind: 'ScalarField', name: 'rest_id', storageKey: null }),
                  {
                    alias: null,
                    args: null,
                    concreteType: 'ConversationInfo',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      (l = { alias: null, args: null, kind: 'ScalarField', name: 'conversation_id', storageKey: null }),
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
                          {
                            alias: null,
                            args: null,
                            concreteType: 'UserResults',
                            kind: 'LinkedField',
                            name: 'created_by_user_results',
                            plural: !1,
                            selections: (p = [
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
                                      (d = {
                                        alias: null,
                                        args: null,
                                        concreteType: 'ApiUser',
                                        kind: 'LinkedField',
                                        name: 'legacy',
                                        plural: !1,
                                        selections: [
                                          c,
                                          (u = {
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
                          (m = {
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
                            selections: p,
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
                                  (f = {
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
                                      (h = {
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
                                          u,
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
                          (g = {
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
                          (y = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_conversation_event_id',
                            storageKey: null,
                          }),
                        ],
                        storageKey: null,
                      },
                      (b = {
                        alias: null,
                        args: null,
                        concreteType: 'PerspectivalConversationMetadata',
                        kind: 'LinkedField',
                        name: 'perspectival_conversation_metadata',
                        plural: !1,
                        selections: [
                          g,
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
                                      o,
                                      d,
                                      (k = {
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
                          m,
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
                                selections: [_, f],
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
                                  { kind: 'InlineFragment', selections: [i, o, h, k], type: 'User', abstractKey: null },
                                ],
                                storageKey: null,
                              },
                            ],
                            storageKey: null,
                          },
                          g,
                          v,
                          y,
                        ],
                        storageKey: null,
                      },
                      b,
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
      ;(C.hash = '05c5ace285646279f5426d235fdf2b26'), (t.default = C)
    },
    qBaR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('+Kfv'),
        l = n('MMRb'),
        s = n('aA19'),
        c = n('XnpN'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('hBvt'), n('/yvb')),
        m = n('6s7X'),
        f = d.a.h810143c,
        h = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            a = e.link,
            i = e.style,
            o = r.a.createElement(m.a, null)
          return r.a.createElement(p.a, {
            accessibilityLabel: t || f,
            hoverLabel: { label: f },
            icon: o,
            key: n,
            link: a,
            pullRight: !0,
            style: i,
            type: 'primaryText',
          })
        },
        g = n('M2mT'),
        v = n('aITJ'),
        y = n('MWbm'),
        b = n('t62R'),
        _ = n('rHpw'),
        k = n('OhSZ'),
        S = n('zCf4'),
        C = { viewType: 'messages' },
        E = d.a.d4986f85,
        T = d.a.e3e58b6d,
        w = d.a.a9ddbb94
      function x(e) {
        var t,
          n,
          a,
          u,
          d,
          p,
          m,
          f = r.a.useContext(i.a),
          _ = Object(S.f)(),
          x = Object(S.g)(),
          F = f.featureSwitches.isTrue('dm_vdl_enabled') && f.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
          A = e.conversation,
          I = e.conversationId,
          O = e.newConversationParticipants,
          M = e.perspective,
          L = function (e) {
            null != A && A.trusted ? _.push({ pathname: '/messages', state: x.state }) : e()
          },
          D = function () {
            var e,
              t = (null == A ? void 0 : A.type) === l.CONVERSATION_TYPE.GROUP,
              n = (null == x || null === (e = x.state) || void 0 === e ? void 0 : e.position) || 0
            return I
              ? r.a.createElement(
                  y.a,
                  { style: R.rightControlStyles },
                  r.a.createElement(h, {
                    accessibilityLabel: t ? w : T,
                    conversationId: I,
                    link: { pathname: '/messages/'.concat(I, '/info'), state: { position: n } },
                    style: R.infoButton,
                  }),
                )
              : void 0
          }
        return r.a.createElement(
          g.a,
          ((t = F ? 'headline2' : void 0),
          (n =
            A && A.participants.length
              ? Object(k.a)({ conversation: A, perspective: M })
              : O
              ? Object(k.a)({ newConversationParticipants: O, perspective: M })
              : E),
          (a =
            A && A.participants.length
              ? r.a.createElement(k.b, { conversation: A, perspective: M, textSize: t, withScreenName: !1 })
              : O
              ? r.a.createElement(k.b, {
                  newConversationParticipants: O,
                  perspective: M,
                  textSize: t,
                  withScreenName: !1,
                })
              : r.a.createElement(b.b, { size: t }, E)),
          (u = F ? 'large' : 'medium'),
          (d = M ? r.a.createElement(s.a, { conversation: A, perspective: M, size: u }) : void 0),
          (p =
            !F &&
            A &&
            A.type === l.CONVERSATION_TYPE.ONE_TO_ONE &&
            M &&
            Object(c.a)(A, M).map(function (e) {
              return e.user.screen_name
            })),
          (m = p ? '@'.concat(p[0]) : void 0),
          {
            backLocation: '/messages',
            onBackClick: L,
            documentTitle: n,
            rightControl: D(),
            title: a,
            titleIconCell: d,
            titleIconCellSize: u,
            subtitle: m,
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: v.b.isKaiOS(),
          }),
          r.a.createElement(o.a, { behavioralEventContext: C }, e.children),
        )
      }
      var R = _.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
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
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        f = n.n(m),
        h = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        g = n.n(h),
        v = n('rHpw'),
        y = n('k/Ka'),
        b = n('MWbm'),
        _ = function (e) {
          return Object(y.a)('div', e)
        },
        k = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              f()(s()(e), '_dragEnterCount', 0),
              f()(s()(e), 'state', { active: !1 }),
              f()(s()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              f()(s()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              f()(s()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              f()(s()(e), '_handleDragOver', function (e) {
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
      f()(k, 'defaultProps', { allowDragDrop: !0 })
      var S = v.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = k
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
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        f = o.a.fcd4d489,
        h = o.a.gbed8594,
        g = o.a.g9074da4,
        v = o.a.ad63377d,
        y = o.a.h09b49f7,
        b = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        k = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        C = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            u = e.onReportClick,
            C = e.requestorScreenName,
            T = e.showBlock,
            w = e.showCancel,
            x = e.showDelete,
            R = r.a.useCallback(
              function () {
                u && u(), t()
              },
              [t, u],
            ),
            F = r.a.useCallback(
              function () {
                i && i(), t()
              },
              [t, i],
            ),
            A = r.a.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            )
          return r.a.createElement(
            l.a,
            { accessibilityRole: 'dialog', style: n ? E.flatCorners : E.roundCorners },
            x
              ? r.a.createElement(s.a, {
                  Icon: d.a,
                  actionSubText: y,
                  actionText: a ? g : v,
                  onClick: A,
                  textColor: 'red500',
                })
              : null,
            T
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: h, actionText: f({ screenName: C }), onClick: F })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: k,
              actionText: a ? b : _({ screenName: C }),
              onClick: R,
            }),
            w ? r.a.createElement(c.a, { onPress: t, style: E.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var E = u.a.create(function (e) {
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
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        f = n.n(m),
        h = n('2VqO'),
        g = n.n(h),
        v = n('KEM+'),
        y = n.n(v),
        b = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(b),
        k = n('1YZw'),
        S = n('zh9S'),
        C = n('P1r1'),
        E = n('AspN'),
        T = n('rxPX'),
        w = Object(T.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.j }
          })
          .propsFromActions(function () {
            return {
              addMedia: E.b,
              addToast: k.b,
              processMultipleMedia: E.g,
              removeMediaUpload: E.i,
              scribeAction: S.scribeAction,
              preUploadMedia: E.e,
            }
          }),
        x = n('wpu3'),
        R = n('cOB2'),
        F = n('MWbm'),
        A = n('0FVZ'),
        I = n('Oe3h'),
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
                _.a.createElement(F.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l }, a),
              )
            : _.a.createElement(
                A.a.BottomComposer,
                null,
                _.a.createElement(I.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return _.a.createElement(
                    F.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l })),
                    a,
                    _.a.createElement(F.a, { style: !1 === s.keyboardVisible && L.offsetBottom }),
                  )
                }),
              )
        },
        L = O.a.create(function () {
          return { offsetBottom: { paddingBottom: O.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        P = n('htQn'),
        K = n('t62R'),
        B = (function (e) {
          f()(n, e)
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
            u()(n, [
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
                    _.a.createElement(K.b, { weight: 'bold' }, a),
                    _.a.createElement(K.b, { color: 'gray700', size: 'subtext2' }, t),
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
        U = B,
        N = n('cHvH'),
        H = n('mw9i'),
        V = (function (e) {
          f()(n, e)
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
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.quickReplyOptions.options,
                    n = 1 === t.length
                  return _.a.createElement(N.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
                      o = [i && W.isWide, i && n && W.oneButtonOnly, !i && W.isNarrow]
                    return _.a.createElement(
                      H.a,
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
                  return _.a.createElement(U, {
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
        z = V,
        q = n('krmn'),
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
          f()(n, e)
          var t = g()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), y()(p()(e), 'state', { currentStepIndex: -1 }), e
          }
          return (
            u()(n, [
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
        ue = 'dmComposerAttachments',
        de = 'dmComposerTextInput',
        pe = 'dmComposerSendButton',
        me = n('GZwR'),
        fe = n('aITJ'),
        he = n('6OUF'),
        ge = n('9Xij'),
        ve = n('/yvb'),
        ye = n('OiMc'),
        be = n('v6aA'),
        _e = n('gpVt'),
        ke = n('Lsrn'),
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
                style: [ke.a.root, e.style],
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
      var Ee = Ce,
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
            _.a.createElement(
              'g',
              null,
              _.a.createElement('path', {
                d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0-12H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
              }),
            ),
          )
        }
      Te.metadata = { width: 24, height: 24 }
      var we = Te,
        xe = n('iySH'),
        Re = J.a.ee230734,
        Fe = J.a.ca0ce0e4,
        Ae = J.a.cdcebd22,
        Ie = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(x.b)({ maxNumberOfPhotos: 1 }),
        De = (function (e) {
          f()(n, e)
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
                  ? _.a.createElement(z, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              y()(p()(c), '_renderComposeBox', function () {
                return _.a.createElement(F.a, { style: Pe.composeBoxContainer }, c._renderMainContent())
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
                  i = fe.b.isKaiOS() ? Ae : a || Fe,
                  l = c.state,
                  s = l.editorState,
                  u = l.mediaButtonsCollapsible,
                  d = l.value,
                  p = !!r,
                  m = r ? { editorState: s, element: r.element } : void 0,
                  f = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: s, element: r.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return _.a.createElement(
                  he.a,
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
                      testID: de,
                      useCacheForDOMMeasurements: !c._isSendDisabled() && !u,
                      value: d,
                    },
                    f,
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
                  u = l.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  m = null == p ? void 0 : p.altText,
                  f = null == p ? void 0 : p.defaultAltText,
                  h = Object(_e.b)(o)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  d
                    ? _.a.createElement(
                        F.a,
                        { style: Pe.attachmentContainer, testID: ue },
                        _.a.createElement(
                          ge.a,
                          { ratio: u / s, style: Pe.aspectContainer },
                          _.a.createElement(
                            F.a,
                            { style: Pe.mediaPreviewContainer },
                            _.a.createElement(ee.a, {
                              accessibilityLabel: m || f,
                              mediaItem: d,
                              onClick: c._canEditImage ? c._handleClickMediaDetail : void 0,
                              onEdit: c._canEditImage || c._canEditVideo ? c._handleClickMediaDetail : void 0,
                              onRemove: c._handleRemoveMedia(d.id),
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
                            F.a,
                            { style: Pe.gifAttribution },
                            _.a.createElement(G.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : h && !r
                    ? _.a.createElement(_e.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: Pe.cardPreviewContainer,
                        urls: h,
                      })
                    : null,
                )
              }),
              y()(p()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && fe.b.isDesktopOS()
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
                  accessibilityLabel: Ie,
                  icon: e ? _.a.createElement(Ee, null) : _.a.createElement(we, null),
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
                return _.a.createElement(
                  F.a,
                  { style: Pe.uploadButtons },
                  i
                    ? _.a.createElement(ve.a, {
                        accessibilityLabel: Re,
                        icon: _.a.createElement(xe.a, null),
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
                  u = t.removeMediaUpload
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
                    : (a({ text: Oe }), u(t))
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
            var u = e.prefillText,
              d = e.richTextInputContext
            return (
              (c.state = {
                isQuickReplyOpen: !0,
                value: u,
                editorState:
                  null !==
                    (i = null == d || null === (l = d.initEditorState) || void 0 === l ? void 0 : l.call(d, u)) &&
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
            u()(n, [
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
                    o = e.style,
                    l = i || Fe,
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
                  return _.a.createElement($.a, {
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
                  return _.a.createElement(Y.a, {
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
      t.a = w.forwardRef(De)
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
        o = n('Rk1B'),
        l = n('RH6X')
      function s() {
        return r.a.createElement(o.default, null, function (e) {
          var t = e.richTextInputContext
          e.typeaheadWrapper
          return r.a.createElement(i.default, { richTextInputContext: t, typeaheadWrapper: l.a })
        })
      }
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
        u = l.a.a4993fa1,
        d = r.a.createElement(s.a, null),
        p = l.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          l = e.history,
          s = e.onPress,
          f = e.style,
          h = e.testID,
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
          accessibilityLabel: u,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: d,
          onPress: v,
          size: 'medium',
          style: f,
          testID: h,
          type: 'brandText',
        })
      }
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
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
        u = n('VAyw'),
        d = n('/Ikv'),
        p = n('s1N3'),
        m = n('lnti'),
        f = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            l = a.retweeted_status,
            s = l || a,
            c = s.entities,
            d = s.unmentioned_user_ids,
            f = s.user,
            g = l ? l.user : {},
            v = l ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = u.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = h(l || a) || {},
            k = ((t = {}), o()(t, g.id_str, g), o()(t, v.id_str, v), o()(t, f.id_str, f), o()(t, _.id_str, _), t)
          y.forEach(function (e) {
            k[e.id_str] = e
          }),
            b.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              k[a] = { id_str: a, name: t, screen_name: n }
            })
          var S = function (e) {
              var t = null == d ? void 0 : d.includes(e.id_str),
                n = e.id_str === f.id_str
              return !t || n ? [e.id_str] : []
            },
            C = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(S(g)),
                  r()(S(v)),
                  [f.id_str],
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
            E = i && f.id_str === i ? [i].concat(r()(C)) : C
          return (
            n &&
              (E = E.filter(function (e) {
                return e !== f.id_str
              })),
            E.map(function (e) {
              return k[e]
            })
          )
        },
        h = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var a = d.a.getBindingValue(t.binding_values, 'site')
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
        o = n('aWyx'),
        l = n('3XMw'),
        s = n.n(l),
        c = s.a.c1d4ac83,
        u = s.a.abc7b032,
        d = s.a.i263b293,
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
        f = function (e) {
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
        h = function (e, t, n, a) {
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
                : u
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
                : d
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.a.createElement(f, { entry: e, users: a }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.a.createElement(i.b, null, e), t)
                  : r.a.createElement(s.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (l = e.sender_id && a[e.sender_id] && a[e.sender_id].name),
                r.a.createElement(f, { entry: e, users: a }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
