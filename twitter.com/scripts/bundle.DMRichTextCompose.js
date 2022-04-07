;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49, 12, 232],
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
        f = n('sl05'),
        h = n('s8G+'),
        v = n('DQzJ'),
        y = void 0 !== a ? a : (a = n('GjeS')),
        _ = { context: 'DM_CONVERSATION_METADATA' }
      function b(e) {
        var t = e.conversation,
          n = e.isWide,
          a = e.perspective,
          r = Object(h.a)('rito_safety_mode_blocked_profile_enabled'),
          i = Object(h.a)('super_follow_user_api_enabled'),
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
            Object(v.a)(y, { id: t.conversation_id || '', withSafetyModeUserFields: r, withSuperFollowsUserFields: i })
              .data,
          )
        return l.a.useCallback(
          function (e) {
            return o
              ? l.a.createElement(
                  d.a,
                  { style: f.a.root },
                  l.a.createElement(u.a, {
                    conversation: o,
                    inboxType: 'primary',
                    isWide: n,
                    onHistoryRequest: function () {},
                    perspective: a,
                    scribeNamespace: {},
                    style: f.a.activity,
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
        C = n('qBaR'),
        E = n('RqPI'),
        T = n('z2Pn'),
        w = n('rHpw'),
        R = n('pNZL'),
        x = n('IAZG'),
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
          c = Object(x.a)(O, { id: s || '' })
        l.a.useEffect(function () {
          r.scribePageImpression(I), r.googleAnalyticsPageView(I), Object(R.b)(I)
        }, []),
          l.a.useEffect(
            function () {
              Object(T.h)(i.pathname)
            },
            [i.pathname],
          )
        var d = 'string' == typeof i.query.text ? i.query.text : void 0,
          u = o.a.get('window').width >= w.a.theme.breakpoints.small,
          g = Object(F.d)(E.r) || '',
          f = (function (e) {
            if (!e) return null
            var t = Object(m.b)([e.dm_conversation_by_rest_id], [p.a]).entities.conversations
            for (var n in t) return t[n]
            return null
          })(c)
        return f && f.conversation_id
          ? l.a.createElement(
              C.a,
              { conversation: f, conversationId: f.conversation_id, newConversationParticipants: [], perspective: g },
              l.a.createElement(k, {
                conversation: f,
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
        return l.a.createElement(g.a, { errorConfig: M }, l.a.createElement(L, e))
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
        g = n.n(m),
        f = (n('2G9S'), n('ejT/')),
        h = n('ERkP'),
        v = n.n(h),
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
        C = n('MMRb'),
        E = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        T = n('XnpN'),
        w = n('LhSm'),
        R = n('I4+6'),
        x = n('rHpw'),
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
            r = v.a.useContext(E.a).loggedInUserId
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
            g = i.userScreenName,
            f = i.userWithheldDescription,
            h = i.userWithheldEntities,
            y = !!(m && g && ((s && c) || p)),
            _ = R.a.generate({
              color: x.a.theme.colors.text,
              backgroundColor: x.a.theme.colors.transparent,
              customFocusBackgroundColor: x.a.theme.colors.gray0,
              customHoverBackgroundColor: x.a.theme.colors.gray0,
              customPressedBackgroundColor: x.a.theme.colors.activeFaintGray,
            })
          return v.a.createElement(F.a.Consumer, null, function (e) {
            return v.a.createElement(
              A.a,
              {
                interactiveStyles: _,
                link: e.withAnchorless('https://twitter.com/'.concat(g || '')),
                style: [D.root, a && y && D.borderBottom],
              },
              v.a.createElement(I.a, {
                isVerified: u,
                name: m,
                screenName: g,
                style: D.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              l && o && d
                ? v.a.createElement(O.a, {
                    description: l,
                    entities: o,
                    style: [D.profileInfoItemMargin, D.description],
                    userId: d,
                    withheldDescription: f,
                    withheldEntities: h,
                  })
                : null,
              s && c
                ? v.a.createElement(M.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: g || '',
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
        W = n('MWbm'),
        V = n('t62R'),
        q = n('oSwX'),
        z = n('MAI/'),
        G = n('zQEV'),
        Y = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return v.a.createElement(V.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
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
                  case N.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === a.conversation_avatar_image_https
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? v.a.createElement(
                            W.a,
                            { style: X.conversationAvatarContainer },
                            v.a.createElement(U.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      v.a.createElement(Y, null, o),
                    )
                  case N.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(o),
                      d = e._getParticipantsFromEntry(),
                      u = v.a.createElement(
                        V.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return v.a.createElement(v.a.Fragment, null, c, p)
                  default:
                    return v.a.createElement(Y, null, o)
                }
              }),
              g()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  l = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return v.a.createElement(
                  A.a,
                  { interactiveStyles: null, link: l, style: X.userAddedYouContainer },
                  i
                    ? v.a.createElement(q.default, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  v.a.createElement(Y, { link: l, style: X.userAddedYouText }, t),
                )
              }),
              g()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
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
                  v.a.createElement(z.a, { style: X.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: r }),
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
                  return !Object(H.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.a.createElement(W.a, { style: X.root }, this._renderContents())
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
        fe = n('hqKg'),
        he = n('oEGd'),
        ve = n('zh9S'),
        ye = n('Yatk'),
        _e = n('G6rE'),
        be = n('P1r1'),
        ke = { scribeAction: ve.scribeAction },
        Se = Object(fe.createSelector)(
          function (e, t) {
            return _e.e.select(e, t.senderId)
          },
          be.k,
          be.q,
          function (e, t, n) {
            return { user: Object(ye.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ce = Object(he.f)(Se, ke),
        Ee = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Te = n('rxPX'),
        we = n('0KEI'),
        Re = Object(Te.a)()
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
        xe = n('k49u'),
        Fe = n('LVU8'),
        Ae = n('3XMw'),
        Ie = n.n(Ae),
        Oe = Ie.a.f58dff33,
        Me = Ie.a.ad5a8e8e,
        Le =
          ((se = {}),
          g()(se, xe.a.MissingParameter, { toast: Object(Fe.a)(Oe) }),
          g()(se, xe.a.DirectMessageDestroyPermissionsError, { toast: { text: Me } }),
          g()(se, 'showToast', !0),
          se),
        De = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Pe = n('uKEd'),
        Ke = [],
        Be = Object(fe.createSelector)(
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
        Ue = Object(he.f)(Be, je),
        Ne = n('RhWx'),
        He = n.n(Ne),
        We = n('33Kz'),
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
            c = v.a.useContext(E.a).featureSwitches,
            d = Object(We.b)(r, c),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = R.a.generate({ backgroundColor: x.a.theme.colors.gray50, color: x.a.theme.colors.gray700 })
          return v.a.createElement(
            A.a,
            {
              accessibilityLabel: u,
              focusable: l,
              interactiveStyles: i ? p : null,
              onPress: o,
              style: [ze.container].concat(He()(s || [])),
            },
            v.a.createElement(V.b, { size: a, style: ze.unsetLineHeight }, d),
            n
              ? v.a.createElement(Ve.a, { color: 'gray700', containerStyle: ze.count, count: n, size: 'subtext3' }, n)
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
                    n = Object(We.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return v.a.createElement(qe, {
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
                  return v.a.createElement(W.a, { style: $e.reactions }, n)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(Je, 'contextType', E.a)
      var Ze = Object(Ye.a)(Ue(Je)),
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
                return v.a.createElement(Ze, {
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
        ft = function (e, t, n) {
          var a = 1.25 * x.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        ht = n('hiGS'),
        vt = n('zIWA'),
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
      bt.metadata = { width: 24, height: 24 }
      var kt = bt,
        St = n('DlVf'),
        Ct = n('ACHU'),
        Et = n('UgB4'),
        Tt = n('fz3c'),
        wt = Ie.a.ba60339a,
        Rt = Ie.a.j4bfee22,
        xt = Ie.a.d96cf7cd,
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
                  c = [{ text: wt, Icon: ht.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
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
                  st.a.isAvailable() && c.push({ text: Mt, Icon: kt, onClick: i._handleCopyMessageText }),
                  v.a.createElement(at.a, {
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
                n && (st.a.setString(n), t({ text: Lt })), e && e()
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
                  a({ conversationId: r.conversation_id, id: r.id }).catch(n(Le))
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
                  return v.a.createElement(
                    W.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        Ut.messageActions,
                        r ? Ut.messageActionsLeft : Ut.messageActionsRight,
                        s ? Ut.visible : Ut.invisible,
                        o && Ut.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? Ut.messageActionsMediaNarrow : Ut.messageActionsNarrow),
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
                    ? v.a.createElement(it.a, {
                        confirmButtonLabel: xt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Rt,
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
                  return v.a.createElement(lt.a, {
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
                    l = this.state.actionsAreActive,
                    o = v.a.createElement(St.a, { style: i ? Ut.vdlActionIcon : Ut.actionIcon })
                  return v.a.createElement(
                    tt,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    v.a.createElement(lt.a, {
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
                    t = v.a.createElement(Ct.a, { style: e ? Ut.vdlActionIcon : Ut.actionIcon })
                  return v.a.createElement(lt.a, {
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
        })(v.a.Component)
      g()(Bt, 'contextType', K.a)
      var jt = Object(nt.a)(Re(Bt)),
        Ut = x.a.create(function (e) {
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
        Wt = n.n(Ht),
        Vt = (n('6U7i'), n('CDB5')),
        qt = Object(Te.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: C.removeEntry,
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
          createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        $t = Object(he.e)(function () {
          return Object(fe.createSelector)(Jt, Xt, Yt.r, Gt.d, function (e, t, n, a) {
            var r,
              i = Object(We.a)(a, { includeInactive: !0 }),
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
          createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        on = Object(he.e)(function () {
          return Object(fe.createSelector)(nn, an, Yt.r, rn, Gt.d, function (e, t, n, a, r) {
            var i = Object(We.a)(r, { includeInactive: !0 }),
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
            return o > -1 && l.push.apply(l, He()(l.splice(0, o))), { loggedInUserId: n, usersWithReactions: l }
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
          var t = v.a.useContext(E.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            l = r.avatarUri,
            o = r.isProtected,
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
            p = v.a.createElement(q.default, { imageLayoutCache: pn, screenName: d, size: 'xxLarge', uri: l }),
            m = v.a.createElement(qe, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            g = v.a.createElement(I.a, {
              badgeContext: 'content',
              isProtected: o,
              isVerified: s,
              name: c,
              screenName: d,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return v.a.createElement(
            cn.a,
            { link: { pathname: '/'.concat(d), anchorless: !0 }, style: [mn.root, i && mn.bottomBorder] },
            v.a.createElement(W.a, { style: mn.reactionColumn }, m),
            v.a.createElement(W.a, { style: mn.column }, p),
            v.a.createElement(W.a, { style: mn.bodyColumn }, v.a.createElement(W.a, { style: mn.body }, g)),
            a
              ? v.a.createElement(
                  W.a,
                  { style: mn.column },
                  v.a.createElement(
                    lt.a,
                    {
                      accessibilityLabel: un({ emoji: Object(We.b)(r.reactionKey, t) }),
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
        hn = n('efqG'),
        vn = Ie.a.b772cd65,
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
                return v.a.createElement(
                  W.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              g()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? v.a.createElement(fn.a, { title: yn })
                  : v.a.createElement(V.b, { visuallyHidden: !0 }, yn)
              }),
              g()(s()(e), '_renderUsers', function (t, n) {
                return v.a.createElement(
                  W.a,
                  { accessibilityLabel: _n, style: [kn.container, 'sheet' === n ? kn.sheet : kn.popover] },
                  e._renderUserCells(t),
                )
              }),
              g()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  v.a.createElement(
                    lt.a,
                    { key: 'button_done', onPress: e, style: kn.cancelButton, type: 'primaryOutlined' },
                    vn,
                  )
                )
              }),
              g()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return v.a.createElement(gn, {
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
                  return v.a.createElement(
                    hn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
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
        Cn = Ie.a.h95f9e76,
        En = (function (e) {
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
                  return v.a.createElement(qe, {
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
                  var o = R.a.generate({ backgroundColor: x.a.theme.colors.gray50, color: x.a.theme.colors.gray700 }),
                    s = Cn({ reactionCount: i })
                  return v.a.createElement(
                    W.a,
                    {
                      style: [
                        Tn.container,
                        a ? Tn.marginShort : Tn.marginLong,
                        r ? Tn.alignRight : Tn.alignLeft,
                        l ? Tn.visible : Tn.invisible,
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
        })(v.a.PureComponent),
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
        wn = Object(Ye.a)($t(En)),
        Rn = n('Xrkv'),
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
                  return v.a.createElement(
                    W.a,
                    { style: Mn.root },
                    v.a.createElement(
                      V.b,
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
                      return v.a.createElement(
                        Ie.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        v.a.createElement(V.b, null, n),
                        v.a.createElement(
                          V.b,
                          { color: 'link', onPress: e._handlePress },
                          Ie.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Rn.a)(t, n)
                  return v.a.createElement(
                    V.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Mn.namesList },
                    n ? v.a.createElement(r, { namesList: i, othersCount: a }) : v.a.createElement(V.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        Mn = x.a.create(function (e) {
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
              l = n.user.name,
              o = n.user_id !== a.id_str,
              s = i && 1 !== Object(Dn.a)(t, i),
              c = !r || 1 !== Object(Dn.a)(r, t)
            return o && s && c && e.push(l), e
          }, [])
        },
        Bn = n('IMYl'),
        jn = n('21zW'),
        Un = n('gmpV'),
        Nn = Ie.a.fad48ee9,
        Hn = Ie.a.ba60339a,
        Wn = Ie.a.d338f53e,
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
                    v.a.createElement(
                      W.a,
                      { style: [Xn.root, u && Xn.vdlRootMargin, t && Xn.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? v.a.createElement(
                            A.a,
                            { interactiveStyles: null, onPress: n, style: t && Xn.sentContainer },
                            v.a.createElement(W.a, { style: t && Xn.groupedItems }, i, o),
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
                    v.a.createElement(
                      W.a,
                      null,
                      v.a.createElement(V.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Vn),
                      v.a.createElement(
                        W.a,
                        { style: Xn.groupedItems },
                        v.a.createElement(
                          V.b,
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
                          V.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Wn,
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
                    ? v.a.createElement(
                        W.a,
                        { style: l && Xn.footerPadderWithAvatar },
                        v.a.createElement(wn, { conversationId: t, entryId: n, isEndOfDM: o, isSent: i }),
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
                    ? v.a.createElement(Ln, Wt()({ isGroupDM: i }, Pn({ entryId: t, participants: o, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && v.a.createElement(V.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Nn)
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
                    : v.a.createElement(
                        V.b,
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
                    l = e.isRapidFire,
                    o = e.isSent,
                    s = e.user.name,
                    c = e.withUserAvatar
                  if (n || a || (l && !i)) return null
                  var d,
                    u = new Date(Number(t))
                  d = Object(Un.c)(u) ? qn(u) : Object(Un.d)(u) ? zn({ time: qn(u) }) : Object(Un.e)(u) ? Gn(u) : Yn(u)
                  var p = r && !o,
                    m = o ? 'right' : 'left'
                  return v.a.createElement(
                    W.a,
                    { style: [c && Xn.footerPadderWithAvatar, o && Xn.timestamp] },
                    v.a.createElement(
                      V.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: o || !ot.a.isEnabled },
                      p &&
                        v.a.createElement(
                          Ie.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          v.a.createElement(V.b, null, s),
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
      g()(Qn, 'contextType', E.a)
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
          return v.a.createElement(
            W.a,
            { style: s },
            v.a.createElement(Zn.a, { align: 'center', color: 'primary', label: r, link: o, onClick: i }),
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
                      return v.a.createElement(ea, {
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
                  return v.a.createElement(W.a, null, l)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
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
              createLocalApiErrorHandler: Object(we.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ia.a,
              loadAdFreeArticleDomainsFromPersistence: ia.b,
              popOutConversation: C.popOutConversation,
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
          return v.a.createElement(W.a, { style: [r ? sa.visible : sa.invisible, sa.root] }, n, t, i)
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
            f = e.withCta,
            h = e.withMediaLinks,
            y = e.withMessageBubble,
            _ = v.a.useContext(E.a).featureSwitches,
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
              f && pa.withCta,
            ],
            S = [pa.tweetText, y && pa.textAlignLeft, !y && c && pa.textAlignRight],
            C = x.a.theme.colors,
            T = C.gray0,
            w = C.magenta500,
            F = C.primary,
            I = C.text,
            O = C.white,
            M = R.a.generate({ color: c ? O : I, backgroundColor: r ? w : c ? F : T }),
            L = (p.text && p.text.length) || 0
          return v.a.createElement(
            A.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? M : null, style: k },
            v.a.createElement(da.a, {
              color: x.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, L],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && c) || x.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: g,
              size: y ? void 0 : 'title2',
              style: S,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: h,
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
          return v.a.createElement(ma, {
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
        fa = n('LSr9'),
        ha = n('aX4+'),
        va = n('/Ikv'),
        ya = va.a.CardNames,
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
                    u = new fa.a(d, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: va.a.getBindingValue(r, 'card_url'),
                      linkDomain: va.a.getBindingValue(r, 'domain'),
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
                    f = ft(n, p, m),
                    h = f.isAttachmentSquared ? 'both' : o ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    _ = t
                      ? v.a.createElement(
                          W.a,
                          { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                          v.a.createElement(ha.a, {
                            card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                            cardContext: { tweetUserId: s.sender_id },
                            dmSentOrReceived: o ? 'sent' : 'received',
                            withBorderShadow: y,
                            withSquareBottomBorderRadius: h,
                          }),
                        )
                      : null,
                    b = n
                      ? v.a.createElement(
                          W.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: o ? ba.sentMessageWrapper : ba.receivedMessageWrapper,
                          },
                          v.a.createElement(ma, {
                            excludeCardUrl: null == t ? void 0 : t.url,
                            hasAssociatedAttachment: !0,
                            isActive: a,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: l,
                            isSent: o,
                            messageData: s,
                            rootStyle: f.isTextSquared ? (o ? ba.textSentSquared : ba.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return g
                    ? v.a.createElement(ca, { attachmentContent: _, isVisible: f.compositeRendered, textContent: b })
                    : v.a.createElement(ga, {
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
        })(v.a.Component)
      g()(_a, 'defaultProps', { hasUserText: !1 }), g()(_a, 'contextType', E.a)
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
        Ca = (function (e) {
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
                return t ? (a = 'both') : n && (a = 'right'), Ea[a]
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
                  var m = ft(t, u, p),
                    g = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    h = m.isTextSquared,
                    y = [
                      Ta.tombstoneWrapper,
                      l ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    _ = v.a.createElement(
                      W.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      v.a.createElement(V.b, { color: 'gray700' }, Sa),
                    ),
                    b = t
                      ? v.a.createElement(
                          W.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              l ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                              !c && Ta.fleetReactionSpacing,
                            ],
                          },
                          v.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: a,
                            isFirstRapidFire: r,
                            isRapidFire: i,
                            isSent: l,
                            messageData: o,
                            rootStyle: h ? (l ? Ta.sentSquared : Ta.receivedSquared) : void 0,
                            withCta: s,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return v.a.createElement(ca, { attachmentContent: _, isVisible: g, textContent: b })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        Ea = x.a.create(function (e) {
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
        wa = Ca,
        Ra = (n('849X'), n('TJCb'), n('prG5')),
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
            c = v.a.createElement(Ra.a, {
              accessibilityLabel: a,
              aspectMode: Fa.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: o, height: l },
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
                Wt()({}, a, { aspectRatio: Pa.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
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
                    ? v.a.createElement(
                        W.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Na.root,
                            o ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && Ua[r],
                          ],
                        },
                        v.a.createElement(W.a, { style: Na.description }, v.a.createElement(V.b, null, a)),
                        v.a.createElement(
                          W.a,
                          { style: [Na.button, o ? Na.breakButtonWrapper : void 0] },
                          v.a.createElement(
                            lt.a,
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
      g()(ja, 'defaultProps', { isSensitive: !1 })
      var Ua = x.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Na = x.a.create(function (e) {
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
        Ha = Object(Ye.a)(Ba(ja)),
        Wa = n('CoGJ'),
        Va = v.a.createElement(Wa.a, null),
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
                  f = r.is_draft,
                  h = ft(i, p, m),
                  y = [
                    Za.mediaAttachment,
                    s && Za.isSent,
                    !s && Za.received,
                    s && h.isAttachmentSquared && Za.equalComponentDimensionsSent,
                    !s && h.isAttachmentSquared && Za.equalComponentDimensionsReceived,
                    o && !l && s && Za.rapidFireSent,
                    o && !l && !s && Za.rapidFireReceived,
                  ],
                  b = null
                if (
                  (!f && r.conversation_id && (b = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), g)
                )
                  if (g.photo) (t = g.photo), (n = v.a.createElement(Oa, { media: t, mediaUrl: b }))
                  else if (g.animated_gif)
                    (t = g.animated_gif), (n = v.a.createElement(Ka, { media: t, messageId: r.id }))
                  else if (g.video) {
                    if (((t = g.video), Object(_.l)(g, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = v.a.createElement(Ka, { media: t, messageId: r.id })
                  }
                var k = h.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  S = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, k))
                return {
                  attachmentContent: v.a.createElement(W.a, { onLayout: e._handleAttachmentLayout, style: y }, S),
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
                    f = ft(n, p, m),
                    h = this._renderAttachment(),
                    y = h.attachmentContent,
                    _ = h.media,
                    b = n
                      ? v.a.createElement(
                          W.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: o ? Za.sentMessageWrapper : Za.receivedMessageWrapper,
                          },
                          v.a.createElement(ma, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!l,
                            isSent: o,
                            messageData: g ? s : this._parseMessageData(s, _),
                            rootStyle: f.isTextSquared ? (o ? Za.sentSquared : Za.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return v.a.createElement(ca, { attachmentContent: y, isVisible: f.compositeRendered, textContent: b })
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
                      return v.a.createElement(
                        Ha,
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
                    return v.a.createElement(
                      Ha,
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
                    : v.a.createElement(
                        Ha,
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
      g()(Ja, 'contextType', E.a), g()(Ja, 'defaultProps', { hasUserText: !1 })
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
          return { markSpamStatus: C.markSpamStatus }
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
                      W.a,
                      { style: lr.buttons },
                      v.a.createElement(
                        lt.a,
                        { onPress: this._handlePress(!1), style: lr.leftButton, type: 'brandOutlined' },
                        nr,
                      ),
                      v.a.createElement(lt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, tr),
                    )
                  },
                },
              ]),
              n
            )
          })(v.a.PureComponent),
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
          return v.a.createElement(or.a, { accessibilityLabel: t.display_name, source: sr(t), style: cr.stickerItem })
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
            return { popOutConversation: C.popOutConversation }
          }),
        gr = n('b5s6'),
        fr = v.a.createElement(V.b, { link: '/settings/safety' }),
        hr = function (e) {
          return v.a.createElement(
            Ie.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            v.a.cloneElement(fr, null, Ie.a.adcf07b5),
          )
        },
        vr = Ie.a.e4df0ad7,
        yr = Ie.a.f277e949,
        _r = Ie.a.b5b91d58,
        br = Ie.a.bb594d7b,
        kr = v.a.createElement(hr, null)
      var Sr = x.a.create(function (e) {
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
            l = e.isActive,
            o = void 0 !== l && l,
            s = e.isDmNsfwMediaFilterEnabled,
            c = e.isFailedDraft,
            d = e.isFirstRapidFire,
            u = void 0 !== d && d,
            p = e.isRapidFire,
            m = void 0 !== p && p,
            g = e.isSent,
            f = e.isTrusted,
            h = e.messageData,
            y = e.popOutConversation,
            _ = e.tweet,
            b = e.withCta,
            k = e.withMessageBubble,
            S = v.a.useState(void 0),
            C = $()(S, 2),
            T = C[0],
            w = C[1],
            R = v.a.useState(void 0),
            x = $()(R, 2),
            F = x[0],
            A = x[1],
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
          if (!h || !h.attachment || !h.attachment.tweet) return null
          var L = h.attachment.tweet,
            D = g ? 'sent' : 'received',
            P = ft(i, T, F),
            K = v.a.createElement(gr.a, {
              onPress: I,
              style: [
                Sr[D],
                i && Sr.attachment,
                P.isAttachmentSquared ? (g ? Sr.sentAttachmentSquared : Sr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: L.status,
            }),
            B = P.isAttachmentSquared ? 'both' : g ? 'right' : 'left',
            j = (function () {
              if (!_) return null
              if (g) return K
              if (_.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return v.a.createElement(
                    Ha,
                    { contentType: 'photo', ctaText: br, description: _r, withSquareBottomBorderRadius: B },
                    K,
                  )
              } else if (!a && _.possibly_sensitive)
                return v.a.createElement(
                  Ha,
                  { contentType: 'photo', ctaText: yr, description: kr, withSquareBottomBorderRadius: B },
                  K,
                )
              return f
                ? K
                : v.a.createElement(
                    Ha,
                    { contentType: 'tweet', ctaText: yr, description: vr, withSquareBottomBorderRadius: B },
                    K,
                  )
            })(),
            U = v.a.createElement(W.a, { onLayout: O, style: Sr.attachment }, j),
            N = i
              ? v.a.createElement(
                  W.a,
                  { onLayout: M, style: g ? Sr.sentMessageWrapper : Sr.receivedMessageWrapper },
                  v.a.createElement(ma, {
                    hasAssociatedAttachment: !0,
                    isActive: o,
                    isFailedDraft: c,
                    isFirstRapidFire: u,
                    isRapidFire: m,
                    isSent: g,
                    messageData: h,
                    rootStyle: P.isTextSquared ? (g ? Sr.sentSquared : Sr.receivedSquared) : void 0,
                    tweetId: L.status,
                    withCta: b,
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
        Rr = n('AtEG')
      function xr(e) {
        var t,
          n,
          a = v.a.useContext(Er.a),
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
        var f = Ar(u),
          h = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: h,
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
              return p.play({ data: { duration_ms: h } })
            },
            onPause: function () {
              return p.pause()
            },
          }
        return (
          g &&
            f &&
            f.contentId === e.media.id_str &&
            ((y.playerApi = d),
            (y.playerState = u),
            null != f && f.durationMs && (y.durationMs = null == f ? void 0 : f.durationMs)),
          v.a.createElement(Fr, y)
        )
      }
      function Fr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          l = Ar(r),
          o = (null == l ? void 0 : l.currentTimeMs) || 0,
          s = (null == l ? void 0 : l.durationMs) || e.durationMs,
          c = Math.max(t ? s - o : s, 0)
        v.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          v.a.useEffect(
            function () {
              a && 0 === o && (a.play(), e.onPlay())
            },
            [a],
          )
        var d = x.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'text' },
          p = [
            Mr.voiceMessage,
            Lr({ isSent: n, squared: t }),
            n ? Mr.voiceMessageSent : Mr.voiceMessageReceived,
            le(x.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? wr.a : Rr.a
        return v.a.createElement(
          W.a,
          { style: [Mr.container, le(x.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          v.a.createElement(
            W.a,
            { style: p },
            v.a.createElement(W.a, { style: Mr.startSpacer }),
            v.a.createElement(lt.a, {
              accessibilityLabel: i ? Or : Ir,
              icon: v.a.createElement(m, { style: d ? Mr.iconColorDark : Mr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            v.a.createElement(W.a, { style: Mr.durationSpacer }),
            v.a.createElement(
              W.a,
              { style: n ? Mr.durationOpacity : void 0 },
              v.a.createElement(
                Tr.a,
                Wt()({ countdown: !0, timeMs: c }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Mr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            v.a.createElement(W.a, { style: Mr.endSpacer }),
          ),
        )
      }
      var Ar = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ir = Ie.a.c94b7d89,
        Or = Ie.a.eb6f9582,
        Mr = x.a.create(function (e) {
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
      var Dr = x.a.create(function (e) {
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
                  e = o.sticker ? v.a.createElement(dr, { sticker: o.sticker }) : this._renderDMMessage(u, d, m)
                  var f = s ? v.a.createElement(ir, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    h = c && !g && !Object(_.l)(null == l ? void 0 : l.attachment, this.context.featureSwitches),
                    y = [
                      a ? Kr.isSent : Kr.isReceived,
                      d && Kr.withCta,
                      h ? Kr.mediaRoot : Kr.flexShrink,
                      this.props.style,
                    ]
                  return v.a.createElement(
                    W.a,
                    { style: y },
                    f,
                    l && l.ctas
                      ? v.a.createElement(aa, {
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
                    f = g && te()(te()({}, g), {}, { entities: (g && g.entities) || void 0, error: m }),
                    h = null == f ? void 0 : f.attachment,
                    y = {
                      isActive: l,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && h) {
                    if (h.tweet)
                      return v.a.createElement(
                        Cr,
                        Wt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: o,
                            isTrusted: p,
                            messageData: f,
                          },
                          y,
                        ),
                      )
                    if (h.photo || h.animated_gif || h.video)
                      return h.video && Object(_.l)(h, this.context.featureSwitches)
                        ? v.a.createElement(xr, {
                            isLowQuality: c,
                            isSent: !!u,
                            isTrusted: p,
                            media: h.video,
                            messageId: i.id,
                          })
                        : v.a.createElement(
                            $a,
                            Wt()(
                              {
                                displaySensitiveMedia: r,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: o,
                                isTrusted: p,
                                messageData: f,
                              },
                              y,
                            ),
                          )
                    if (h.card)
                      return v.a.createElement(
                        ka,
                        Wt()({ cardUrl: h.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, y),
                      )
                    if (h.fleet) return v.a.createElement(wa, Wt()({ entry: i, hasUserText: e, messageData: f }, y))
                  }
                  return v.a.createElement(ga, Wt()({}, y, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      g()(Pr, 'contextType', E.a)
      var Kr = x.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Br = Pr,
        jr = x.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Ur = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? v.a.createElement(q.default, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : v.a.createElement(W.a, { style: [jr.avatar, q.default.getSizeStyle(a)] })
        },
        Nr = n('m3Bd'),
        Hr = n.n(Nr),
        Wr = n('B3eJ'),
        Vr = ['color', 'isActive', 'size']
      function qr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Hr()(e, Vr),
          i = v.a.useContext(Er.a),
          l = v.a.useState(0.5),
          o = $()(l, 2),
          s = o[0],
          c = o[1],
          d = $()(i.playerState, 1)[0]
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
          W.a,
          { style: m },
          v.a.createElement(
            W.a,
            { style: [Gr.container, Gr.transitionOpacity, u ? Gr.show : Gr.hide] },
            ie.a.reducedMotionEnabled
              ? null
              : v.a.createElement(Wr.a, { audioLevel: s, color: t, paused: !u, size: a }),
          ),
          v.a.createElement(W.a, {
            style: [Gr.border, { width: p, height: p }, Gr.transitionOpacity, n ? Gr.show : Gr.hide],
          }),
        )
      }
      var zr = parseInt(x.a.theme.spaces.space2, 10),
        Gr = x.a.create(function (e) {
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
        Yr = n('uArA'),
        Qr = 'messageEntry',
        Xr = { element: 'cta_dm' },
        Jr = { viewType: 'message' },
        Zr = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        $r = (function (e) {
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
                Object(Yr.a)(function () {
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
                e._scribeAction(te()(te()({}, Xr), {}, { action: 'show' }))
              }),
              g()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(te()(te()({}, Xr), {}, { action: 'click' }))
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
                    l = t.user,
                    o = this._getRapidFireProps(),
                    s = !o.isRapidFire || o.isLastRapidFire,
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
                  if (!l) return null
                  var m = !ot.a.isEnabled || i
                  return v.a.createElement(
                    ge.a,
                    { behavioralEventContext: Jr },
                    v.a.createElement(
                      W.a,
                      { style: d },
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
                    f = l.isSent,
                    h = l.isTrusted,
                    y = l.isVoiceMessageActive,
                    _ = l.isWide,
                    b = l.participants,
                    k = l.perspective,
                    S = l.scribeVoiceMessage,
                    C = l.setShouldFreezeUpdates,
                    E = a.isFirstRapidFire,
                    T = a.isRapidFire,
                    w = [
                      f ? ti.messageContainer.sent : ti.messageContainer.received,
                      _ ? ti.messageContainer.wide : ti.messageContainer.narrow,
                      f && _ && ti.messageContainer.sentWide,
                      !f && _ && ti.messageContainer.receivedWide,
                    ],
                    R = h && !g,
                    F = this._isDMVoiceMessage(),
                    A = (null == b ? void 0 : b.length) || 0
                  return v.a.createElement(
                    W.a,
                    { style: w },
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
                            F && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: h })
                                }
                              : void 0,
                          participantsCount: A,
                          perspective: k,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: R,
                          style: F && le(x.a.theme.scale).actionsContainer({ isSent: f, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    v.a.createElement(Br, {
                      displaySensitiveMedia: o,
                      entry: s,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: u,
                      isFirstRapidFire: E,
                      isLowQuality: m,
                      isRapidFire: T,
                      isSent: f,
                      isTrusted: h,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: F && le(x.a.theme.scale).messageContainer({ isSent: f, isVoiceMessageActive: y }),
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
                    ? v.a.createElement(Jn, {
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
                      ti.userAvatar.base,
                      i ? ti.userAvatar.sent : ti.userAvatar.received,
                      s && le(x.a.theme.scale).userAvatar({ isVoiceMessageActive: l, isSent: i }),
                    ]
                  return v.a.createElement(
                    W.a,
                    { style: ti.userAvatar.container },
                    i ? null : v.a.createElement(W.a, { style: ti.userAvatar.spacer }),
                    s
                      ? v.a.createElement(qr, {
                          color: i ? x.a.theme.colors.primary : x.a.theme.colors.text,
                          isActive: !!l,
                          size: d,
                          style: p,
                        })
                      : null,
                    v.a.createElement(W.a, { style: p }, v.a.createElement(Ur, u)),
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
      g()($r, 'contextType', E.a), g()($r, 'defaultProps', Zr)
      var ei = Object(Ye.a)(
          Ce(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = v.a.useContext(Er.a),
                  r = $()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  l = $()(r, 1)[0] === n.id,
                  o = te()(te()({}, t), {}, { isVoiceMessageActive: l, scribeVoiceMessage: i })
                return v.a.createElement(e, o)
              }
              return (t.defaultProps = Zr), t
            })($r),
          ),
        ),
        ti = {
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
        ni = n('H4nC'),
        ai = function (e) {
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
              f = t.low_quality,
              h = t.participants,
              y = t.read_only,
              _ = t.trusted,
              k = t.type,
              S = n.message_data,
              E = (S = void 0 === S ? {} : S).sender_id,
              T = void 0 === g || _
            return v.a.createElement(ei, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: k === C.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: l,
              isLastRapidFire: o,
              isLowQuality: !!f,
              isRapidFire: s,
              isReadOnly: y,
              isSent: E === d,
              isTrusted: !!T,
              isWide: c,
              participants: h,
              perspective: d,
              scribeNamespace: u,
              senderId: E,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(b.a)(n)
            ? v.a.createElement(J, { conversation: t, entry: n, entryType: n.type, perspective: d })
            : Object(b.d)(n)
            ? v.a.createElement(ni.a, { entry: n, isCompact: !1 })
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
        li = Object(he.c)(ii),
        oi = (n('Ef13'), n('uDfI')),
        si = Object(fe.createSelector)(
          function (e, t) {
            return _e.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        ci = Object(oi.b)(si),
        di = n('VPAj'),
        ui = n('Enqy'),
        pi = n('+/1j'),
        mi = 'overflow',
        gi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        fi = { stiffness: 1e3, damping: 70 },
        hi = 140,
        vi = { scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(0, fi) },
        yi = function (e, t) {
          return { key: e.id_str, data: e, style: vi }
        },
        _i = Object(di.a)({ translateY: hi, scale: 0 }),
        bi = Object(di.a)({ scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(hi, fi) }),
        ki = [{ key: 'bubble', style: { scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(0, fi) } }],
        Si = Object(di.a)({ translateY: hi, scale: 0 }),
        Ci = Object(di.a)({ scale: Object(ui.spring)(1, fi), translateY: Object(ui.spring)(hi, fi) }),
        Ei = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ti = (function (e) {
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
                  return !Object(H.a)(this.props, e) || !Object(H.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(gi).slice(0, 5).map(yi)
                  return (
                    t.length > 5 && n.push({ key: mi, style: vi }),
                    v.a.createElement(
                      W.a,
                      { style: [wi.root, e && wi.hidden] },
                      v.a.createElement(
                        W.a,
                        { style: wi.avatarRow },
                        v.a.createElement(
                          ui.TransitionMotion,
                          { styles: n, willEnter: _i, willLeave: bi },
                          function (e) {
                            return v.a.createElement(
                              v.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Ei(e.style)
                                return e.key === mi
                                  ? v.a.createElement(
                                      W.a,
                                      {
                                        key: e.key,
                                        style: [wi.avatar, wi.avatarSpacer, wi.overflowAvatar, { transform: a }],
                                      },
                                      v.a.createElement(pi.a, { style: wi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : v.a.createElement(
                                      W.a,
                                      { key: e.key, style: [wi.avatar, { transform: a }] },
                                      v.a.createElement(q.default, {
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
                        { didLeave: this._afterLeave, styles: t.length > 0 ? ki : [], willEnter: Si, willLeave: Ci },
                        function (e) {
                          return v.a.createElement(
                            v.a.Fragment,
                            null,
                            e.map(function (e) {
                              return v.a.createElement(
                                W.a,
                                { key: e.key, style: [wi.messageBubble, { transform: Ei(e.style) }] },
                                v.a.createElement(W.a, { style: wi.dot }),
                                v.a.createElement(W.a, { style: [wi.dot, wi.dot1] }),
                                v.a.createElement(W.a, { style: [wi.dot, wi.dot2] }),
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
        wi = x.a.create(function (e) {
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
        Ri = ci(Ti),
        xi = n('tn7R'),
        Fi = (function (e) {
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
                  return !t && v.a.createElement(Ri, { userIds: n })
                },
              },
              {
                key: '_teardownLivePipeline',
                value: function () {
                  Object(xi.a)(this._timers).forEach(function (e) {
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
      g()(Fi, 'contextType', E.a)
      var Ai = li(Fi),
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
                  case N.b.TYPING_INDICATOR:
                    return n ? v.a.createElement(Ai, { conversationId: n }) : null
                  case N.b.READ_ONLY_INDICATOR:
                    return n
                      ? v.a.createElement(
                          W.a,
                          { style: Ni.readOnly },
                          v.a.createElement(
                            V.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Ki,
                            ' ',
                            v.a.createElement(V.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Pi),
                          ),
                        )
                      : null
                  case N.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return v.a.createElement(P, { conversation: t })
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
                        d = (null == a ? void 0 : a.status) === C.PAGINATION_STATUS.AT_END,
                        u = s ? Object(_.d)(o, s) : o.length - 1,
                        p = c ? Object(_.d)(o, c) : -1,
                        m = i && -1 === p ? Object(_.d)(o, i) : p,
                        g = o.slice(d ? 0 : m, u + 1),
                        f = (i ? g : o).reduce(function (e, r, l) {
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
                      return r && !i && f.push(r), a.read_only && l && !i && f.push(l), f
                    })({
                      conversation: n,
                      footer: y.d,
                      readOnlyEntry: y.c,
                      canInjectConversationProfileInfoHeader: n.status === N.c.AT_END && n.type === N.a.ONE_TO_ONE,
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
                    g = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    h =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== N.c.AT_END
                  return v.a.createElement(K.a.Consumer, null, function (t) {
                    var d = t.isDrawer ? B.b.drawerHeaderRadius : Ni.scrollSpace
                    return v.a.createElement(
                      W.a,
                      { style: [Ni.scrollContainer, d] },
                      v.a.createElement(
                        Li.a,
                        { style: [Ni.scrollContainer, r && Ni.conversationsPadding, d, c] },
                        a || null,
                        (n.status && n.status !== N.c.AT_END && !i) || h ? v.a.createElement(Mi.a, null) : null,
                        v.a.createElement(
                          Di.a,
                          { style: [Ni.content, Ni.alignTop], withGutter: !0 },
                          v.a.createElement(Oi.b, {
                            anchoring: Ii.a,
                            assumedItemHeight: 50,
                            cacheKey: g,
                            canBeAnchorFunction: ji,
                            centerInitialAnchor: i && s,
                            hasNewContentAtBottom: !0,
                            identityFunction: Bi,
                            initialAnchor: u.length > 0 ? f.a(i && s ? i : Bi(m(u))) : void 0,
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
                    l = this.props,
                    o = l.conversation,
                    s = l.inboxType,
                    c = l.isWide,
                    d = l.messageSearchEntryId,
                    u = l.perspective,
                    p = l.scribeNamespace,
                    m = t.id === d
                  return t && s
                    ? v.a.createElement(ai, {
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
        })(v.a.Component)
      g()(Ui, 'contextType', E.a)
      var Ni = x.a.create(function (e) {
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
    '7myi': function (e, t, n) {
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
        f = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        h = n.n(f),
        v = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        k = n('GZwR'),
        S = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_genericWrapperRef', h.a.createRef()),
              g()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
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
                return h.a.createElement(
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
              g()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    l = i.newCursor,
                    o = i.newTweetText
                  n({ target: { value: o } }), e._updateDOMTextArea(l, o)
                }
                e._setQueryContext(void 0)
              }),
              g()(s()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              g()(s()(e), '_handleInputChange', function (t) {
                if (Object(b.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  l = v.c(n.selectionStart, i),
                  o = l.end,
                  s = l.start,
                  c = l.word,
                  d = v.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: s, endIndex: o })
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
        })(h.a.Component)
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
        l = n('k49u'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('fs1G'),
        d = s.a.c3752568,
        u = s.a.f78aa3e9,
        p = s.a.f9690dc0,
        m = s.a.i859a9d3,
        g = s.a.b1d35407,
        f = s.a.g539cca6,
        h = s.a.bbac0019,
        v = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        _ = s.a.hf383be4,
        b = s.a.b25c5b2a,
        k = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        C = i()({}, l.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        E = { defaultToast: { text: u }, showToast: !0 },
        T =
          ((a = { defaultToast: { text: d } }),
          i()(a, l.a.CurrentUserSuspended, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, l.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, l.a.DirectMessageDuplicate, { toast: { text: b } }),
          i()(a, l.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: v, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, l.a.DirectMessagesSenderBlocksRecipient, { toast: { text: k } }),
          i()(a, l.a.DirectMessageTooLongError, { toast: { text: h } }),
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
          return W
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
        l = n.n(i),
        o = n('m3Bd'),
        s = n.n(o),
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
        g = n('xPna'),
        f = n('oEOe'),
        h = n('xCUF'),
        v = n('ude7'),
        y = n('07FG'),
        _ = n('Ssj5'),
        b = n('fEA7'),
        k = n.n(b),
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
        R = {}
      var x = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            l = e.text,
            o = e.attachment,
            s = void 0 === o ? {} : o,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: a, sender_id: i, text: l, time: d },
            type: 'message',
            time: d,
          }
        },
        F = function (e) {
          return function (t, n, a) {
            var i = a.api,
              o = e || {},
              c = o.senderId,
              d = o.cardUrl,
              u = o.conversationId,
              _ = o.localMediaId,
              b = o.recipients,
              w = void 0 === b ? [] : b,
              R = o.requestId,
              F = void 0 === R ? k.a.v1() : R,
              A = o.tweetAttachment,
              I = o.quickReply,
              O = s()(o, T)
            t(Z(u))
            var M = n(),
              L = _ || j(n(), u),
              P = m.k(M, L),
              K = l()(P, 1)[0] || {},
              B = K.mediaFile,
              U = K.mediaMetadata,
              N = w.length > 0 && w.join(','),
              H = {}
            B && B.isGif
              ? (H.extraInitParams = '&media_category=dm_gif')
              : B && B.isVideo && (H.extraInitParams = '&media_category=dm_video')
            var V = m.p(L, H),
              q = [t(V)],
              z = (W(M, u) || {}).found_media_origin
            return (
              B && B.isGif && q.push(Object(v.a)(B)),
              Promise.all(q).then(
                function (n) {
                  var a = l()(n, 2),
                    o = l()(a[0], 1)[0],
                    s = a[1],
                    v = (null == U ? void 0 : U.altText) || (null == U ? void 0 : U.defaultAltText),
                    _ = !!v
                  return (
                    o && (z || _)
                      ? t(m.m(p()({ media_id: o.uploadId, found_media_origin: z }, !!_ && { alt_text: { text: v } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (A || {}).id_str,
                        a = {}
                      if (o) {
                        var l = o.mediaFile,
                          m = void 0 === l ? {} : l,
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
                      var _ = (o || {}).uploadId,
                        b = x({
                          attachment: a,
                          conversation_id: u,
                          id: F,
                          recipient_ids: N,
                          sender_id: c,
                          text: e.text,
                        }),
                        k = p()(
                          p()(
                            p()(p()({}, O), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !n && { media_id: _ },
                          ),
                          {},
                          { recipient_ids: N, request_id: F, tweet_id: n },
                        )
                      I &&
                        ((k['quick_reply_response[options][id]'] = I.id),
                        (k['quick_reply_response[options][selected_id]'] = I.selected_id))
                      var T = Object(C.a)([
                        ee(u),
                        { type: h.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(S.b)(u, F, b),
                      ])
                      return (
                        t(T),
                        i.DirectMessages.sendMessage(k).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              l = a.entries,
                              o = a.tweets,
                              s = a.users,
                              c = n.result.conversations
                            Object(E.a)(L) && t(X(u, L))
                            var d = Object(C.a)(
                              [{ type: h.c.SUCCESS }].concat(
                                r()(Object(g.a)({ conversations: c, entries: l, users: s, tweets: o, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(S.j)(u, F, e), D(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = x({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: F,
                                localMediaId: L,
                                recipient_ids: N,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(C.a)([
                                { type: h.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(S.b)(u, F, r),
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
                  return t(Object(C.a)([Object(E.a)(L) && X(u, L), ne(u)])), Promise.reject(e)
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
        W = function (e, t) {
          var n = A(e, t)
          return n ? n.gifMetadata : null
        },
        V = 'rweb/dmComposer/ADD_MEDIA',
        q = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: l()(t, 1)[0], gifMetadata: n }, type: V, conversationId: e }
        },
        z = 'rweb/dmComposer/CANCEL_UPLOAD',
        G = function (e) {
          return { type: z, conversationId: e }
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
      _.a.register(
        d()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case V:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case z:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Y:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, l), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case O:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, o), {}, { text: t.text })))
            case K:
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
        f,
        h,
        v,
        y,
        _,
        b,
        k,
        S,
        C,
        E,
        T,
        w,
        R,
        x,
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
        W,
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
        fe,
        he,
        ve,
        ye,
        _e,
        be,
        ke,
        Se,
        Ce,
        Ee,
        Te,
        we,
        Re,
        xe,
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
        je,
        Ue,
        Ne,
        He,
        We,
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
        ft,
        ht,
        vt,
        yt,
        _t,
        bt,
        kt,
        St,
        Ct,
        Et = {
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
                                      (f = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (h = {
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
                                                                field: (C = {
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
                                                  f,
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
                                                                field: C,
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
                                                          (R = {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              (E = {
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
                                                              (w = {
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
                                          (U = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (N = {
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
                                                        field: C,
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
                                                        field: C,
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
                                                        field: C,
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
                                              (H = {
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
                                                                      w,
                                                                      T,
                                                                      E,
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
                                                                                          (fe = {
                                                                                            alias: 'type',
                                                                                            args: null,
                                                                                            kind: 'ScalarField',
                                                                                            name: '__typename',
                                                                                            storageKey: null,
                                                                                          }),
                                                                                          (ve = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: (he = [W]),
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
                                                                                            selections: he,
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
                                                                              (Ce = {
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
                                                                      (Ee = {
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
                                                                              field: (we = {
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
                                                                              field: (Re = {
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
                                                                              field: (Ue = {
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
                                                                              field: (Ne = {
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
                                                                              field: (He = {
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
                                                                              field: (We = {
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
                                                                              selections: Le,
                                                                              storageKey: null,
                                                                            }),
                                                                            (gt = {
                                                                              alias: null,
                                                                              args: null,
                                                                              kind: 'ScalarField',
                                                                              name: 'withheld_in_countries',
                                                                              storageKey: null,
                                                                            }),
                                                                            (ft = {
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
                                                                          (ht = {
                                                                            alias: null,
                                                                            args: null,
                                                                            kind: 'ScalarField',
                                                                            name: 'professional_type',
                                                                            storageKey: null,
                                                                          }),
                                                                          (vt = {
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
                                                            field: C,
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
                                                            field: C,
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
                                      f,
                                      h,
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
                                                              C,
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
                                                  f,
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
                                                        selections: [V, R],
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
                                          K,
                                          B,
                                          j,
                                          k,
                                          U,
                                          N,
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
                                              H,
                                              m,
                                              W,
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
                                                                                          fe,
                                                                                          ve,
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
                                                                              Ce,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      Ee,
                                                                      Te,
                                                                      {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: 'ApiUser',
                                                                        kind: 'LinkedField',
                                                                        name: 'legacy',
                                                                        plural: !1,
                                                                        selections: [
                                                                          we,
                                                                          Re,
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
                                                                          Ue,
                                                                          Ne,
                                                                          He,
                                                                          We,
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
                                                                          ft,
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
                                                                        selections: [p, ht, vt, m],
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
      ;(Et.hash = 'd07206d5b39d9e3de615f7f59f505da7'), (e.exports = Et)
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
          f = Object(d.b)(s),
          h = Object(d.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: h, weight: f }, g)
          : r.a.createElement(
              o.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: h, size: 'subtext2', weight: f }, g),
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
        f = function (e, t, n) {
          e.findEntityRanges(function (e) {
            var t = e.getEntity(),
              a = t ? n.getEntity(t) : null
            return !!a && 'LINK' === a.getType()
          }, t)
        },
        h = function (e) {
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
          return { strategy: f, component: h(e) }
        },
        y = {
          strategy: f,
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
        f = n('KEM+'),
        h = n.n(f),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        _ = n.n(y),
        b = n('HPNB'),
        k = n('VAZu'),
        S = n('wiP2'),
        C = n('Es6L'),
        E = n('yiKp'),
        T = n.n(E),
        w = n('rHpw'),
        R = w.a.create(function (e) {
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
        x = n('MWbm'),
        F = n('yw4N'),
        A = n('TnY3'),
        I = n('cHvH'),
        O = n('3xLC'),
        M = [
          'appBarStyle',
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
          var t = g()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              h()(d()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      x.a,
                      { style: R.fill },
                      _.a.createElement(
                        F.a,
                        { style: R.viewportView },
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
                      r()(e, M))
                  return _.a.createElement(
                    _.a.Fragment,
                    null,
                    Object(C.a)()
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
                    f = n.screenType,
                    h = n.searchBoxOptions,
                    y = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    C = n.showSubtitleOnWideDetail,
                    E = n.subtitle,
                    T = n.title,
                    w = n.titleIconCell,
                    F = n.titleIconCellSize,
                    A = n.withDetailOpen,
                    I = n.withSearchBox,
                    O = n.withTweetButton,
                    M = 'root' === f,
                    L = 'secondaryRoot' === f,
                    D = 'primaryDetail' === f,
                    P = (D && C) || (M && b),
                    K = M || (D && t),
                    B = M ? v.c : D ? v.a : void 0,
                    j = _.a.createElement(
                      x.a,
                      { style: R.appBarContainer },
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
                        subtitle: P ? E : void 0,
                        title: T,
                        titleDomId: B,
                        titleIconCell: w,
                        titleIconCellSize: F,
                      }),
                    ),
                    U =
                      M || (L && A)
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
                            searchBoxOptions: h,
                            subtitle: E,
                            title: T,
                            withSearchBox: I,
                            withTweetButton: O,
                          })
                  return _.a.createElement(_.a.Fragment, null, U, j)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      h()(L, 'contextType', O.a),
        h()(L, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
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
        l = n.n(i),
        o = n('Y9Ll'),
        s = n.n(o),
        c = n('1Pcy'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        g = n.n(m),
        f = n('KEM+'),
        h = n.n(f),
        v = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(v),
        _ = n('0JOx'),
        b = n('zh9S'),
        k = n('MMRb'),
        S = n('CDB5'),
        C = n('RqPI'),
        E = n('1YZw'),
        T = n('hqKg'),
        w = n('kGix'),
        R = n('AQOc'),
        x = n('UhuB'),
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
          x.n,
          K,
          L.m,
          function (e, t) {
            var n = D(0, t)
            return k.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, l, o, s, c, d, u, p, m, g, f, h, v, y) {
            var _ = e && e.data
            return {
              conversation: (_ && Object(R.a)(_, t, l)) || void 0,
              dataSaverMode: g,
              draftText: m,
              dtabBarInfo: v,
              fetchStatus: o,
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
              quickReplyOptions: h,
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
        U = n('I2k/'),
        N = n('4AMG'),
        H = n('uB9N'),
        W = n('htvZ'),
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
        ge = n.n(me),
        fe = n('tZH3'),
        he = n('/yvb'),
        ve = n('efqG'),
        ye = z.a.ccf2f24e,
        _e = z.a.ib3fe8a9,
        be = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            l = y.a.createElement(he.a, ge()({}, i, { accessibilityRole: 'button' }), _e),
            o = y.a.createElement(he.a, ge()({}, i, { onPress: a }), ye),
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
          return t ? o : y.a.createElement(ve.a, { renderContent: s }, l)
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
            l = function () {
              return e.onReport()
            },
            o = function () {
              return e.onLeave()
            }
          return y.a.createElement(Se.a, null, function (t) {
            var s = t.windowWidth <= Ce.a.theme.breakpoints.small
            return y.a.createElement(
              ke.a,
              { style: Te.actionsContainer },
              n &&
                y.a.createElement(
                  he.a,
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
                he.a,
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
                  he.a,
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
        Re = n('t62R'),
        xe = n('eb3s'),
        Fe = n('vMjK'),
        Ae = n('7JQg'),
        Ie = n('24HD'),
        Oe = n('zCf4'),
        Me = z.a.da878dcf,
        Le = z.a.d96cf7cd,
        De = (z.a.gde6b424, z.a.e308019b, z.a.gf5e9ea6, z.a.hc52446b),
        Pe = z.a.f7e1ad65,
        Ke = { headline: z.a.gdf4b79f, text: z.a.bbf83d83, confirmButtonLabel: z.a.bb1d57b6 },
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
              f = m[1],
              h = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === k.CONVERSATION_TYPE.GROUP ? Z.j.GROUP : Z.j.ONE_TO_ONE }],
                  }
                },
                [t.type],
              ),
              v = y.a.useCallback(
                function (e, t) {
                  n(r()(r()({}, a), {}, { action: e }), t || h())
                },
                [h, n, a],
              )
            y.a.useEffect(
              function () {
                v('impression')
              },
              [v],
            )
            var _,
              b,
              S,
              C,
              E = function () {
                u(!0), f(!1)
              },
              T = function () {
                u(!1)
              },
              w = function () {
                f(!1)
              },
              R = function () {
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
                u(!1), i({ conversationId: a }), v(l, d), x()
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
                  f(!1),
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
                    Re.b,
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
                    u(!1), f(!0)
                  },
                  onLeave: E,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), l.push(Object(O.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              we.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: Le, onLeftClick: E, onRightClick: F, rightText: Me })
                : null,
              d
                ? y.a.createElement(xe.a, {
                    confirmButtonLabel: Ke.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ke.headline,
                    onCancel: T,
                    onConfirm: R,
                    text: Ke.text,
                  })
                : null,
              g
                ? ((_ = i.loggedInUserId),
                  (b = Object(O.j)(t, _)),
                  (S = b.idStr),
                  (C = b.screenName),
                  Object(Ie.j)({ confirmation: Object(Ie.f)(C), onClose: w, handleConfirm: A(S) }))
                : null,
            )
          }),
        ),
        Ue = n('yw4N'),
        Ne = n('rFBM'),
        He = n('mw9i'),
        We = n('jTgF'),
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
              h()(d()(i), '_composer', y.a.createRef()),
              h()(d()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              h()(d()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              h()(d()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              h()(d()(i), '_initialFetch', function () {
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
              h()(d()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              h()(d()(i), '_leaveConversation', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.leaveConversation)({ conversationId: t }).catch(n({ showToast: !0 }))
              }),
              h()(d()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  a = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    we.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(a({ showToast: !0 }))
              }),
              h()(d()(i), '_renderActions', function () {
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
              h()(d()(i), '_render', function () {
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
                  f = m.composerHeight
                return y.a.createElement(
                  W.b,
                  { key: l },
                  y.a.createElement(
                    Ne.a,
                    { allowDragDrop: !Je(g), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    y.a.createElement(
                      Ue.a,
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
                        ? y.a.createElement(N.a, {
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
              h()(d()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              h()(d()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              h()(
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
              h()(
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
              h()(d()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              h()(d()(i), '_handleForwardRequest', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.createLocalApiErrorHandler,
                  r = e.fetchConversationFuture
                i.setState({ shouldScrollToCenter: !1 }),
                  null != t && t.max_search_entry_id && r({ conversationId: n }).catch(a())
              }),
              h()(d()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              h()(d()(i), '_handleRelativeHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.fetchConversationHistory
                i.setState({ shouldScrollToCenter: !1 }), a({ conversationId: t, isSearch: !0 }).catch(n())
              }),
              h()(d()(i), '_handleSendMessage', function (e, t) {
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
                  f = l.newConversationParticipants,
                  h = l.perspective,
                  v = l.scribeAction,
                  y = l.scribeNamespace,
                  _ = l.sendMessage,
                  b = l.tweetAttachment,
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
                else if (b) w = 'tweet'
                else {
                  var R,
                    x = null == S || null === (R = S.media) || void 0 === R ? void 0 : R.mediaFile,
                    F = null != x && x.isVideo ? 'video' : null != x && x.isGif ? 'gif' : 'photo'
                  w = x ? F : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    v(r()(r()({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: d,
                      conversation_participant_count: E,
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
                          { senderId: h, cardUrl: s, conversationId: d, text: t, tweetAttachment: b },
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
                          if ((i.setState({ isSending: !1 }), !Object(We.d)(e) || e.code !== X.b.CANCELED))
                            if (Object(We.d)(e)) {
                              var t = Object(We.b)(e, Qe)
                              t && o(t)
                            } else u($.b)(e)
                        }))
                    : (_({
                        senderId: h,
                        recipients:
                          f &&
                          f.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: b,
                      }).then(function (e) {
                        v(r()(r()({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: f ? f.length + 1 : 0,
                          conversation_type: Z.j.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          m.replace('/messages/'.concat(e))
                      }, u($.b)),
                      Promise.resolve())
                )
              }),
              h()(d()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              h()(d()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              h()(d()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              h()(d()(i), '_handleSaveDraftText', function () {
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
                      e.fetchStatus === w.a.LOADED && c !== w.a.LOADED && s && this._fetchConversation(s))
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
                    He.a,
                    { style: [re.a.root, we.b.isKaiOS() && re.a.kaiOSFix] },
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
                    f = e.typeaheadWrapper,
                    h = this.state,
                    v = h.attachment,
                    _ = h.isSending,
                    b = this.props.prefillText || l
                  return null != a && a.read_only
                    ? null
                    : y.a.createElement(H.a, {
                        attachment: v,
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
      h()($e, 'contextType', se.a), h()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
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
        f = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        h = n.n(f),
        v = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        k = n('GZwR'),
        S = n('zpdM'),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              g()(s()(e), '_genericWrapperRef', h.a.createRef()),
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
                return h.a.createElement(
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
                  i = v.c(e._getCaret(t), r),
                  l = i.end,
                  o = i.start,
                  s = i.word,
                  c = v.e(s || '', 'compose')
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
        })(h.a.Component)
      t.a = C
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
    UgB4: function (e, t, n) {
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
        l = n.n(i),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('5Yy7'),
        p = n.n(u),
        m = n('2VqO'),
        g = n.n(m),
        f = n('KEM+'),
        h = n.n(f),
        v = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(v),
        _ = n('3XMw'),
        b = n.n(_),
        k = n('cjZk'),
        S = 'fileInput',
        C = n('sjK1'),
        E = n('/Imo'),
        T = n('rHpw'),
        w = n('9HgX'),
        R = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        x = b.a.b9960f31,
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
          var t = g()(n)
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
                    o = e.icon,
                    s = e.style,
                    c = e.withIcon,
                    d = l()(e, R),
                    u = I({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    E.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: F,
                      icon: c ? o : void 0,
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
      h()(O, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: x,
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
          return f
        }),
        n.d(t, 'g', function () {
          return h
        }),
        n.d(t, 'j', function () {
          return v
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
        return e === l.d.SECONDARY ? o.e.REQUESTS : e === l.d.TERTIARY ? o.e.LOW_QUALITY : o.e.PRIMARY
      }
      function g(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function f(e, t) {
        return !!(e && e.video && g(t)) && !!e.video.audio_only
      }
      function h(e, t, n, a) {
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
    b5s6: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        c = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        p = n('rxPX'),
        m = n('0KEI'),
        g = function (e, t) {
          return t.tweetId
        },
        f = function (e, t) {
          var n = t.tweetId,
            a = n && d.a.select(e, n)
          return a ? Object(u.g)(e, a) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: f, hydratedTweet: d.a.createHydratedTweetSelector(g) }
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
        _ = n('x5Pi'),
        b = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        k = h(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            a = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            o = (e.tweetId, l()(e, b)),
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
          var g = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(_.f)(i, p, t),
            h = f && Object(_.e)(f),
            k = u.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            r()({}, o, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: g,
              socialContextProps: h,
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
    cIoY: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('1YZw'),
        l = n('rxPX'),
        o = Object(l.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        s = n('VrFO'),
        c = n.n(s),
        d = n('Y9Ll'),
        u = n.n(d),
        p = n('1Pcy'),
        m = n.n(p),
        g = n('5Yy7'),
        f = n.n(g),
        h = n('2VqO'),
        v = n.n(h),
        y = n('KEM+'),
        _ = n.n(y),
        b = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        k = n('3XMw'),
        S = n.n(k),
        C = n('sgih'),
        E = n('t62R'),
        T = n('/yvb'),
        w = n('rHpw'),
        R = S.a.cfd2f35d,
        x = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(m()(e), '_handleOnFocus', function (e) {
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
                    l = e.onCancel,
                    o = Object(b.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: F.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    C.a,
                    { onMaskClick: l, style: F.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(E.b, { align: 'center', style: F.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(E.b, { align: 'center', color: 'gray700', style: F.labelText }, n),
                    o,
                    r.a.createElement(T.a, { onPress: l, size: 'xLarge', style: F.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      _()(x, 'defaultProps', { cancelButtonLabel: R })
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
        A = x,
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
          f()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              _()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(O.a, {
                  items: [{ text: B, Icon: I.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              _()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                L.a.isAvailable() ? (L.a.setString(r), n({ text: j })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              _()(m()(a), '_handleCopyLinkSheetCancel', function () {
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
                    l = a.name,
                    o = U[l]
                  return o
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
                            this._renderAttribution(i, o),
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
        W = N,
        V = o(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(W, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = V
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
        f = (n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        h = n.n(f),
        v = n('v6aA'),
        y = (n('WNMA'), n('zh9S')),
        _ = n('MMRb'),
        b = n('CDB5'),
        k = n('RqPI'),
        S = n('hqKg'),
        C = n('AQOc'),
        E = n('z2Pn'),
        T = n('pNZL'),
        w = n('G6rE'),
        R = n('oEGd'),
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
          w.e.selectAll,
          function (e, t) {
            return b.j(e, F(0, t))
          },
          function (e, t) {
            return b.i(e, F(0, t))
          },
          function (e, t, n, a, r, i, l, o, s, c) {
            var d = e && e.data
            return {
              conversation: (d && Object(C.a)(d, t, o)) || void 0,
              conversationId: n,
              isNewGroupConversation: a,
              isUploading: s,
              media: c,
              newConversationParticipants: i,
              perspective: r,
            }
          },
        ),
        I = Object(R.d)(A, function (e) {
          return {
            cancelUpload: Object(x.a)(e.match.params.conversationId),
            googleAnalyticsPageView: y.googleAnalyticsPageView,
            removeMedia: Object(x.b)(e.match.params.conversationId),
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
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              g()(s()(i), '_composer', h.a.createRef()),
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
                  return h.a.createElement(
                    L.a,
                    { conversation: t, conversationId: n, newConversationParticipants: i, perspective: l },
                    h.a.createElement(M.a, {
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
        })(h.a.PureComponent)
      g()(B, 'contextType', v.a), g()(B, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: D.a })
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
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return W
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
        f = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        h = n.n(f),
        v = n('K1iM'),
        y = n.n(v),
        _ = n('RhWx'),
        b = n.n(_),
        k = (n('wFPu'), n('CDB5')),
        S = n('xVN5'),
        C = n('vjRr'),
        E = n('rxPX'),
        T = n('0KEI'),
        w = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = b()(r),
            l = y()(i.reverse())
          try {
            for (l.s(); !(a = l.n()).done; ) {
              var o = a.value
              if ((n = C.a.select(e, o))) break
            }
          } catch (s) {
            l.e(s)
          } finally {
            l.f()
          }
          return n
        },
        R = Object(E.a)()
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
        x = n('KqB4'),
        F = n.n(x),
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
        W = function (e) {
          var t = F()(e)
          if (t.length)
            return t.map(function (e) {
              return (!H.test(e) && 'http://'.concat(e)) || e
            })
        },
        V = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              g()(s()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              g()(s()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: L.B })
              }),
              g()(s()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  l = t.updateTweetComposer,
                  o = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, o) : l({ updates: { cardUrl: o }, index: a })
              }),
              (i._debouncedFetchCardPreview = Object(j.a)(i._fetchCardPreviewIfNeeded, 1e3)),
              (i._isDMComposer = !!e.conversationId),
              i
            )
          }
          return (
            l()(n, [
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
                    ? h.a.createElement(
                        D.a,
                        { style: a },
                        h.a.createElement(A.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        h.a.createElement(K.a, {
                          accessibilityLabel: N,
                          icon: h.a.createElement(M.a, null),
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
        })(h.a.Component)
      g()(V, 'contextType', P.a)
      var q = B.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        z = R(V)
      t.a = z
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
            f = g ? l(m, t) : Object.freeze({})
          if ((a && ((c = o(c, f)), (n = !0)), g && ((c = s(c, f)), (n = !0)), n)) {
            var h = (c = i.EditorState.forceSelection(c, r)).getCurrentContent()
            ;(h = (h = h.set('selectionBefore', d)).set('selectionAfter', u)),
              (c = i.EditorState.set(e, { allowUndo: !0, currentContent: h }))
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
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              l.a.createElement('path', {
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
      function f(e) {
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
                      : l.scribe(p()({}, t({ action: e, component: v(n) })))
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
      var h = {
        Timelines: Object(m.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function v(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? h.Timelines.inbox_timeline
          : t
          ? h.Timelines.low_quality_timeline
          : h.Timelines.requests_timeline
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
        return Object(d.k)(t) ? r.a.createElement(f, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = _
    },
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        l = n.n(i),
        o = n('ERkP'),
        s = n.n(o),
        c = n('t62R'),
        d = n('I4+6'),
        u = n('cm6r'),
        p = n('rHpw'),
        m = n('MWbm'),
        g = ['align', 'color', 'label'],
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
          o = l()(e, g),
          h = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          m.a,
          { style: f.container },
          s.a.createElement(
            u.a,
            r()({}, o, { interactiveStyles: h, style: f.root }),
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
        l = n.n(i),
        o = n('1Pcy'),
        s = n.n(o),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        g = n.n(m),
        f = n('97Jx'),
        h = n.n(f),
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
        C = n('k/Ka'),
        E = n('PxJJ'),
        T = n('w9LO'),
        w = n('fs1G'),
        R = n('zpdM'),
        x = function (e) {
          return Object(C.a)('div', e)
        },
        F = !1,
        A =
          ((t.a = S.a.forwardRef(function (e, t) {
            var n = v.d()
            return S.a.createElement(
              A,
              h()({}, e, {
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
                  return R.EditorState.acceptSelection(
                    t,
                    new R.SelectionState({
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
                  return R.EditorState.forceSelection(t, t.getSelection())
                }),
                g()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(R.EditorState.moveFocusToEnd(a))
                    : null == r || r(R.EditorState.moveSelectionToEnd(a))
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
                  return R.EditorState.push(
                    t,
                    R.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
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
                          return R.CharacterMetadata.removeStyle(e, t)
                        }, e)
                    })
                  return (null != n && n.includes(t.getType()) ? t : t.set('type', 'unstyled')).set('characterList', a)
                }),
                g()(s()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(R.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      l =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (l) {
                      var o = R.ContentState.createFromBlockArray(l, null == r ? void 0 : r.entityMap)
                      return R.EditorState.push(
                        n,
                        R.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), o.getBlockMap()),
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
                    i = R.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(R.getDefaultKeyBinding)(t)
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
                        l = t.blockRenderMap,
                        o = t.blockRendererFn,
                        s = t.editorState,
                        c = t.handleReturn,
                        d = t.multiline,
                        u = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        f = t.onKeyPress,
                        h = t.onKeyUp,
                        v = t.pastedStylesAllowlist,
                        b = t.placeholder,
                        k = t.spellCheck,
                        C = t.style,
                        E = t.testID
                      return S.a.createElement(
                        x,
                        {
                          className: d ? void 0 : _,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), C],
                        },
                        S.a.createElement(R.Editor, {
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
                            g()(e, 'onKeyPress', f),
                            g()(e, 'onKeyUp', h),
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
                          stripPastedStyles: !(d && null != v && v.length),
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
      g()(A, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: w.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
        withMaxHeight: !0,
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
        l = n.n(i),
        o = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        s = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(o.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(17), n.e(207)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return l.a.createElement(s.a, { hasError: e, onRetry: t })
          },
        }),
        p = n.p + 'twemoji_sprite.6d90d9d5.png',
        m = n.p + 'twemoji_sprite_high_res.0b0faef5.png',
        g = n('rHpw'),
        f = n('U+bB'),
        h = n('kLqS'),
        v = n('MWbm'),
        y = g.a.create(function (e) {
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
        _ = function (e) {
          var t = e.onSelect,
            n = e.partialRender,
            a = h.a.get() > 1 ? m : p
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              v.a,
              { style: [y.content, y.dimensions] },
              l.a.createElement(u, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: a }),
            ),
            l.a.createElement(f.a, { source: a, style: y.hidden }),
          )
        },
        b = n('pNJr'),
        k = n('2ZFc'),
        S = n('OiMc'),
        C = n('/yvb'),
        E = d.a.d4a4842d,
        T = l.a.createElement(b.a, null),
        w = d.a.fec16c1c,
        R = { viewType: 'emoji_picker' },
        x = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            o = e.style,
            s = e.textInputRef,
            c = l.a.useState(!0),
            d = r()(c, 2),
            p = d[0],
            m = d[1]
          l.a.useEffect(function () {
            var e = setTimeout(function () {
              u.preload(), k.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return l.a.createElement(
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
                return l.a.createElement(_, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            l.a.createElement(C.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: E,
              behavioralEventContext: R,
              disabled: t,
              hoverLabel: { label: w },
              icon: T,
              onPress: function (e) {
                return a && a(e)
              },
              size: i,
              style: o,
              type: 'brandText',
            }),
          )
        }
      x.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = x
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
        f = n('2VqO'),
        h = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        k = n('nT9l'),
        S = n('3XMw'),
        C = n.n(S),
        E = 'image',
        T = n('TIdA'),
        w = n('a6qo'),
        R = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        x = C.a.f93bb3ee,
        F = (function (e) {
          g()(n, e)
          var t = h()(n)
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
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(
                    T.a,
                    r()({}, c, { accessibilityLabel: o, onVariantSelection: n, previewMode: a, testID: E }),
                  ),
                  s ? b.a.createElement(w.a, { align: 'left', altLabel: o }) : null,
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
        f,
        h,
        v,
        y,
        _,
        b,
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
                          (f = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'last_read_event_id',
                            storageKey: null,
                          }),
                          (h = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'join_time_millis',
                            storageKey: null,
                          }),
                          (v = {
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
                          f,
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
                          f,
                          h,
                          v,
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
      ;(C.hash = '05c5ace285646279f5426d235fdf2b26'), (e.exports = C)
    },
    qBaR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      })
      n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        l = n('+Kfv'),
        o = n('MMRb'),
        s = n('aA19'),
        c = n('XnpN'),
        d = n('3XMw'),
        u = n.n(d),
        p = (n('hBvt'), n('/yvb')),
        m = n('6s7X'),
        g = u.a.h810143c,
        f = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            a = e.link,
            i = e.style,
            l = r.a.createElement(m.a, null)
          return r.a.createElement(p.a, {
            accessibilityLabel: t || g,
            hoverLabel: { label: g },
            icon: l,
            key: n,
            link: a,
            pullRight: !0,
            style: i,
            type: 'primaryText',
          })
        },
        h = n('M2mT'),
        v = n('aITJ'),
        y = n('MWbm'),
        _ = n('t62R'),
        b = n('rHpw'),
        k = n('OhSZ'),
        S = n('zCf4'),
        C = { viewType: 'messages' },
        E = u.a.d4986f85,
        T = u.a.e3e58b6d,
        w = u.a.a9ddbb94
      function R(e) {
        var t,
          n,
          a,
          d,
          u,
          p,
          m,
          g = r.a.useContext(i.a),
          b = Object(S.f)(),
          R = Object(S.g)(),
          F = g.featureSwitches.isTrue('dm_vdl_enabled') && g.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
          A = e.conversation,
          I = e.conversationId,
          O = e.newConversationParticipants,
          M = e.perspective,
          L = function (e) {
            null != A && A.trusted ? b.push({ pathname: '/messages', state: R.state }) : e()
          },
          D = function () {
            var e,
              t = (null == A ? void 0 : A.type) === o.CONVERSATION_TYPE.GROUP,
              n = (null == R || null === (e = R.state) || void 0 === e ? void 0 : e.position) || 0
            return I
              ? r.a.createElement(
                  y.a,
                  { style: x.rightControlStyles },
                  r.a.createElement(f, {
                    accessibilityLabel: t ? w : T,
                    conversationId: I,
                    link: { pathname: '/messages/'.concat(I, '/info'), state: { position: n } },
                    style: x.infoButton,
                  }),
                )
              : void 0
          }
        return r.a.createElement(
          h.a,
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
              : r.a.createElement(_.b, { size: t }, E)),
          (d = F ? 'large' : 'medium'),
          (u = M ? r.a.createElement(s.a, { conversation: A, perspective: M, size: d }) : void 0),
          (p =
            !F &&
            A &&
            A.type === o.CONVERSATION_TYPE.ONE_TO_ONE &&
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
            titleIconCell: u,
            titleIconCellSize: d,
            subtitle: m,
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: v.b.isKaiOS(),
          }),
          r.a.createElement(l.a, { behavioralEventContext: C }, e.children),
        )
      }
      var x = b.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
    },
    rFBM: function (e, t, n) {
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
        f = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        h = n.n(f),
        v = n('rHpw'),
        y = n('k/Ka'),
        _ = n('MWbm'),
        b = function (e) {
          return Object(y.a)('div', e)
        },
        k = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++) i[l] = arguments[l]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(s()(e), '_dragEnterCount', 0),
              g()(s()(e), 'state', { active: !1 }),
              g()(s()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              g()(s()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              g()(s()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              g()(s()(e), '_handleDragOver', function (e) {
                e.preventDefault()
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
                    t = e.allowDragDrop,
                    n = e.children,
                    a = e.style,
                    r = this.state.active,
                    i = t ? S.dragBorderValid : S.dragBorderInvalid
                  return h.a.createElement(
                    b,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [S.root, a, r && i],
                    },
                    h.a.createElement(_.a, { style: S.inner }, 'function' == typeof n ? n(r) : n),
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
        })(h.a.Component)
      g()(k, 'defaultProps', { allowDragDrop: !0 })
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
        l = n.n(i),
        o = n('MWbm'),
        s = n('CKsB'),
        c = n('/yvb'),
        d = n('rHpw'),
        u = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        g = l.a.fcd4d489,
        f = l.a.gbed8594,
        h = l.a.g9074da4,
        v = l.a.ad63377d,
        y = l.a.h09b49f7,
        _ = l.a.i6b19b07,
        b = l.a.j7bb1a42,
        k = l.a.ea200ba6,
        S = l.a.cfd2f35d,
        C = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            l = e.onDeleteClick,
            d = e.onReportClick,
            C = e.requestorScreenName,
            T = e.showBlock,
            w = e.showCancel,
            R = e.showDelete,
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
            { accessibilityRole: 'dialog', style: n ? E.flatCorners : E.roundCorners },
            R
              ? r.a.createElement(s.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? h : v,
                  onClick: A,
                  textColor: 'red500',
                })
              : null,
            T
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: f, actionText: g({ screenName: C }), onClick: F })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: k,
              actionText: a ? _ : b({ screenName: C }),
              onClick: x,
            }),
            w ? r.a.createElement(c.a, { onPress: t, style: E.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var E = d.a.create(function (e) {
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
        l = n.n(i),
        o = n('VrFO'),
        s = n.n(o),
        c = n('Y9Ll'),
        d = n.n(c),
        u = n('1Pcy'),
        p = n.n(u),
        m = n('5Yy7'),
        g = n.n(m),
        f = n('2VqO'),
        h = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        b = n.n(_),
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
        R = n('wpu3'),
        x = n('cOB2'),
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
                    b.a.createElement(F.a, { style: !1 === s.keyboardVisible && L.offsetBottom }),
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
          g()(n, e)
          var t = h()(n)
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
        U = B,
        N = n('cHvH'),
        H = n('mw9i'),
        W = (function (e) {
          g()(n, e)
          var t = h()(n)
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
                  return b.a.createElement(N.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
                      l = [i && V.isWide, i && n && V.oneButtonOnly, !i && V.isNarrow]
                    return b.a.createElement(
                      H.a,
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
                  return b.a.createElement(U, {
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
        q = W,
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
          var t = h()(n)
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
        fe = n('6OUF'),
        he = n('9Xij'),
        ve = n('/yvb'),
        ye = n('OiMc'),
        _e = n('v6aA'),
        be = n('gpVt'),
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
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
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
      var we = Te,
        Re = n('iySH'),
        xe = J.a.ee230734,
        Fe = J.a.ca0ce0e4,
        Ae = J.a.cdcebd22,
        Ie = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(R.b)({ maxNumberOfPhotos: 1 }),
        De = (function (e) {
          g()(n, e)
          var t = h()(n)
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
                  fe.a,
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
                  f = Object(be.b)(l)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  u
                    ? b.a.createElement(
                        F.a,
                        { style: Pe.attachmentContainer, testID: de },
                        b.a.createElement(
                          he.a,
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
                    : f && !r
                    ? b.a.createElement(be.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: Pe.cardPreviewContainer,
                        urls: f,
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
                  l = b.a.createElement(
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
                  ? l
                  : b.a.createElement(
                      ye.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      l,
                    )
              }),
              y()(p()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return b.a.createElement(ve.a, {
                  accessibilityLabel: Ie,
                  icon: e ? b.a.createElement(Ee, null) : b.a.createElement(we, null),
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
                    ? b.a.createElement(ve.a, {
                        accessibilityLabel: xe,
                        icon: b.a.createElement(Re.a, null),
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
                    M,
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
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        l = n('3XMw'),
        o = n.n(l),
        s = n('3rWK'),
        c = n('Irs7'),
        d = o.a.a4993fa1,
        u = r.a.createElement(s.a, null),
        p = o.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          l = e.gifSearchKeySource,
          o = e.history,
          s = e.onPress,
          g = e.style,
          f = e.testID,
          h = Object(c.b)(),
          v = r.a.useCallback(
            function () {
              s && s(),
                h.scribe({ element: 'found_media_button', action: 'click' }),
                o.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: l, dmConversationId: t } })
            },
            [t, h, l, o, s],
          )
        return r.a.createElement(i.a, {
          accessibilityLabel: d,
          behavioralEventContext: m,
          disabled: !a,
          hoverLabel: { label: p },
          icon: u,
          onPress: v,
          size: 'medium',
          style: g,
          testID: f,
          type: 'brandText',
        })
      }
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'b', function () {
          return h
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
        l = n.n(i),
        o =
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
        g = function (e) {
          var t,
            n = e.excludeReplyUser,
            a = e.inReplyToStatus,
            i = e.loggedInUserId,
            o = a.retweeted_status,
            s = o || a,
            c = s.entities,
            u = s.unmentioned_user_ids,
            g = s.user,
            h = o ? o.user : {},
            v = o ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            _ = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            b = f(o || a) || {},
            k = ((t = {}), l()(t, h.id_str, h), l()(t, v.id_str, v), l()(t, g.id_str, g), l()(t, b.id_str, b), t)
          y.forEach(function (e) {
            k[e.id_str] = e
          }),
            _.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                a = e.user_id
              k[a] = { id_str: a, name: t, screen_name: n }
            })
          var S = function (e) {
              var t = null == u ? void 0 : u.includes(e.id_str),
                n = e.id_str === g.id_str
              return !t || n ? [e.id_str] : []
            },
            C = Object(p.a)(
              Object(m.a)(
                [].concat(
                  r()(S(h)),
                  r()(S(v)),
                  [g.id_str],
                  r()(
                    y.flatMap(function (e) {
                      return S(e)
                    }),
                  ),
                  r()(
                    _.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            E = i && g.id_str === i ? [i].concat(r()(C)) : C
          return (
            n &&
              (E = E.filter(function (e) {
                return e !== g.id_str
              })),
            E.map(function (e) {
              return k[e]
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
        h = function (e) {
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
              l = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && l
          }
        },
        v = h({ maxNumberOfPhotos: 4 }),
        y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(c.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(o.e)(e, 'compose')
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
          return f
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
        f = function (e, t, n, a) {
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
