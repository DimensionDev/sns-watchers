;(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    '+0pD': function (e, t) {
      var n =
        '[object Arguments]' ==
        (function () {
          return Object.prototype.toString.call(arguments)
        })()
      function r(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function a(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = n ? r : a).supported = r), (t.unsupported = a)
    },
    '06eB': function (e, t, n) {
      var r = Array.prototype.slice,
        a = n('kgfz'),
        i = n('+0pD'),
        o = (e.exports = function (e, t, n) {
          return (
            n || (n = {}),
            e === t ||
              (e instanceof Date && t instanceof Date
                ? e.getTime() === t.getTime()
                : !e || !t || ('object' != typeof e && 'object' != typeof t)
                ? n.strict
                  ? e === t
                  : e == t
                : (function (e, t, n) {
                    var l, d
                    if (s(e) || s(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (i(e)) return !!i(t) && ((e = r.call(e)), (t = r.call(t)), o(e, t, n))
                    if (c(e)) {
                      if (!c(t)) return !1
                      if (e.length !== t.length) return !1
                      for (l = 0; l < e.length; l++) if (e[l] !== t[l]) return !1
                      return !0
                    }
                    try {
                      var u = a(e),
                        p = a(t)
                    } catch (h) {
                      return !1
                    }
                    if (u.length != p.length) return !1
                    for (u.sort(), p.sort(), l = u.length - 1; l >= 0; l--) if (u[l] != p[l]) return !1
                    for (l = u.length - 1; l >= 0; l--) if (((d = u[l]), !o(e[d], t[d], n))) return !1
                    return typeof e == typeof t
                  })(e, t, n))
          )
        })
      function s(e) {
        return null == e
      }
      function c(e) {
        return (
          !(!e || 'object' != typeof e || 'number' != typeof e.length) &&
          'function' == typeof e.copy &&
          'function' == typeof e.slice &&
          !(e.length > 0 && 'number' != typeof e[0])
        )
      }
    },
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
      var r = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return a(n, 0).toString()
        },
        a = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, a = 0; a < n.length; a++) {
            ;(r = (r << 5) - r + n.charCodeAt(a)), (r &= r)
          }
          return r
        }
    },
    '23An': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = r.useEffect,
        i = r.useRef
      e.exports = function () {
        var e = i(!0)
        return (
          a(function () {
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
        return s
      }),
        n.d(t, 'a', function () {
          return c
        })
      var r = n('RhWx'),
        a = n.n(r),
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
          return [].concat(a()(n), a()(t))
        },
        s = function (e, t) {
          var n = o(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        c = function (e) {
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
      var r = n('yiKp'),
        a = n.n(r),
        i = n('7n04'),
        o = a()(a()({}, i.a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = o
    },
    '4AMG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Oo
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        d = n.n(l),
        u = n('2VqO'),
        p = n.n(u),
        h = n('KEM+'),
        m = n.n(h),
        f = n('ejT/'),
        v = n('ERkP'),
        g = n.n(v),
        b = n('yiKp'),
        y = n.n(b),
        _ = n('7n04'),
        E = n('Myq3'),
        S = n('VPAj'),
        R = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        C = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        w = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(E.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return y()(
            y()({}, _.a),
            {},
            {
              initialScrollHeadroom: Object(S.a)(0),
              scrollHeadroom: Object(S.a)(0),
              offsetCorrection: function (e, a) {
                var i = r(e),
                  o = r(a),
                  s = o && (!i || i.id !== o.id),
                  c = o && t(o.data.data),
                  l = i && R(e, i.id)
                return (s && (c || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        a = t.getForItem(n)
                      return !r || (a && a.getHeight() > r.getHeight())
                    })(e, a))
                  ? Math.max(0, C(a))
                  : _.a.offsetCorrection(e, a)
              },
            },
          )
        },
        x = (n('lTEL'), n('7x/C'), n('kYxP'), n('KOtZ'), n('gbD7')),
        A = (n('Blm6'), n('b9JY')),
        k = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(A.b)(e) && Object(A.b)(t)) {
            var n = e.message_data,
              r = n.sender_id,
              a = n.time,
              i = t.message_data,
              o = i.sender_id,
              s = i.time,
              c = parseInt(s, 10) - parseInt(a, 10)
            return r === o && c >= 0 && c <= 6e4
          }
          return !1
        },
        T = n('jat/'),
        I = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        O = n('XnpN'),
        M = n('LhSm'),
        P = n('I4+6'),
        L = n('rHpw'),
        D = n('PbQQ'),
        F = n('cm6r'),
        B = n('jV+4'),
        j = n('pBrB'),
        N = n('wCd/'),
        U = function (e, t) {
          var n = Object(O.a)(e, t).map(function (e) {
              return e.user
            }),
            r = n && n[0]
          return {
            userDescription: r.description,
            userEntities: r.entities,
            userWithheldDescription: r.withheld_description,
            userWithheldEntities: r.withheld_entities,
            userFollowerCount: r && r.followers_count,
            userFriendsCount: r && r.friends_count,
            userIdStr: r && r.id_str,
            userJoinDate: r && r.created_at,
            userName: r && r.name,
            userScreenName: r && r.screen_name,
            userIsVerified: r && r.verified,
          }
        },
        H = L.a.create(function (e) {
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
        W = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            r = void 0 === n || n,
            a = g.a.useContext(I.a).loggedInUserId
          if (!t) return null
          var i = U(t, a || ''),
            o = i.userDescription,
            s = i.userEntities,
            c = i.userFollowerCount,
            l = i.userFriendsCount,
            d = i.userIdStr,
            u = i.userIsVerified,
            p = i.userJoinDate,
            h = i.userName,
            m = i.userScreenName,
            f = i.userWithheldDescription,
            v = i.userWithheldEntities,
            b = !!(h && m && ((c && l) || p)),
            y = P.a.generate({
              color: L.a.theme.colors.text,
              backgroundColor: L.a.theme.colors.transparent,
              customFocusBackgroundColor: L.a.theme.colors.gray0,
              customHoverBackgroundColor: L.a.theme.colors.gray0,
              customPressedBackgroundColor: L.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(D.a.Consumer, null, function (e) {
            return g.a.createElement(
              F.a,
              {
                interactiveStyles: y,
                link: e.withAnchorless('https://twitter.com/'.concat(m || '')),
                style: [H.root, r && b && H.borderBottom],
              },
              g.a.createElement(B.a, {
                isVerified: u,
                name: h,
                screenName: m,
                style: H.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && d
                ? g.a.createElement(j.a, {
                    description: o,
                    entities: s,
                    style: [H.profileInfoItemMargin, H.description],
                    userId: d,
                    withheldDescription: f,
                    withheldEntities: v,
                  })
                : null,
              c && l
                ? g.a.createElement(N.a, {
                    followersCount: c,
                    friendsCount: l,
                    screenName: m || '',
                    style: H.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? g.a.createElement(M.a, { joinDate: p }) : null,
            )
          })
        },
        V = n('V/6K'),
        z = n('cFyg'),
        q = n('MMRb'),
        G = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('LW0h'), n('g54k')),
        K = n('aA19'),
        Y = n('aWyx'),
        X = n('mN6z'),
        Q = n('MWbm'),
        J = n('t62R'),
        Z = n('jhWN'),
        $ = n('MAI/'),
        ee = n('zQEV'),
        te = function (e) {
          var t = e.children,
            n = e.link,
            r = e.style
          return g.a.createElement(J.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        ne = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.entry,
                  a = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  s = Object(ee.a)(r, a, i, o)
                switch (a) {
                  case Y.b.CONVERSATION_AVATAR_UPDATE:
                    var c = n.avatar_image_https === r.conversation_avatar_image_https
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && c
                        ? g.a.createElement(
                            Q.a,
                            { style: re.conversationAvatarContainer },
                            g.a.createElement(K.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      g.a.createElement(te, null, s),
                    )
                  case Y.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(s),
                      d = e._getParticipantsFromEntry(),
                      u = g.a.createElement(
                        J.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return g.a.createElement(g.a.Fragment, null, l, p)
                  default:
                    return g.a.createElement(te, null, s)
                }
              }),
              m()(c()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.users,
                  i = r.sender_id ? a[r.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return g.a.createElement(
                  F.a,
                  { interactiveStyles: null, link: o, style: re.userAddedYouContainer },
                  i
                    ? g.a.createElement(Z.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  g.a.createElement(te, { link: o, style: re.userAddedYouText }, t),
                )
              }),
              m()(c()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  a = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  F.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: re.joinConversationDetails,
                  },
                  n,
                  g.a.createElement($.a, { style: re.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: a }),
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
                  return !Object(X.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(Q.a, { style: re.root }, this._renderContents())
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
                    r = e.users
                  return t.participants
                    ? t.participants
                        .filter(function (e) {
                          var t = e.user_id
                          return n !== t
                        })
                        .map(function (e) {
                          var t = e.user_id
                          return r[t]
                        })
                        .filter(Boolean)
                    : []
                },
              },
              {
                key: '_getParticipantsFromEntryText',
                value: function (e) {
                  var t = this.props.conversation.conversation_id
                  return Object(ee.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        re = L.a.create(function (e) {
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
        ae = Object(G.a)(ne),
        ie = n('ddV6'),
        oe = n.n(ie),
        se = (n('+KXO'), n('oQhu'))
      var ce = Object(se.a)(function (e) {
          var t = L.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + L.a.theme.spacesPx.space12,
          }
        }),
        le = n('shC7'),
        de = n('38/B'),
        ue = function (e) {
          return pe(e, de.a.reducedMotionEnabled)
        },
        pe = Object(se.a)(function (e, t) {
          var n,
            r,
            a,
            i,
            o,
            s,
            c,
            l,
            d,
            u =
              ((n = ce(L.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (a = n.DMUserAvatarSpacerPx),
              (i = ve[L.a.theme.scale]),
              (o = me / i),
              (s = fe / r),
              (l = fe - (c = fe / 2)),
              (d = fe - c - a),
              {
                cssTransition: de.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(be, ', opacity ').concat(be) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (le.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (le.a.getConstants().isRTL ? -1 : 1) * d }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (le.a.getConstants().isRTL ? 1 : -1) * ge[L.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (le.a.getConstants().isRTL ? -1 : 1) * (ge[L.a.theme.scale] + d) - c }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: me } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: c / o,
                      transformOrigin: le.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: c / o,
                      transformOrigin: le.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: le.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: le.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: s }] },
                  visuallyHidden: { opacity: 0, pointerEvents: 'none' },
                },
              })
          return {
            actionsContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [u.cssTransition, u.actionsContainer.base]
              return n && r.push(t ? u.actionsContainer.active.sent : u.actionsContainer.active.received), r
            },
            messageContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [u.cssTransition, u.messageContainer.base]
              return n && r.push(t ? u.messageContainer.active.sent : u.messageContainer.active.received), r
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
                r = [u.cssTransition, u.voiceMessage.base]
              return (
                n &&
                  (r.push(u.voiceMessage.active.base),
                  r.push(t ? u.voiceMessage.active.sent : u.voiceMessage.active.received)),
                r
              )
            },
            userAvatar: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [u.cssTransition, u.userAvatar.base, t ? u.userAvatar.sent : u.userAvatar.received]
              return n ? r.push(u.userAvatar.active) : t && r.push(u.userAvatar.visuallyHidden), r
            },
          }
        })
      var he,
        me = 60,
        fe = me,
        ve = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        ge = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        be = '0.2s 0s ease-in-out',
        ye = n('+Kfv'),
        _e = n('hqKg'),
        Ee = n('oEGd'),
        Se = n('zh9S'),
        Re = n('G6rE'),
        Ce = n('P1r1'),
        we = { scribeAction: Se.c },
        xe = Object(_e.createSelector)(
          function (e, t) {
            return Re.e.select(e, t.senderId)
          },
          Ce.l,
          Ce.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ae = Object(Ee.g)(xe, we),
        ke = (n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Te = n('0KEI'),
        Ie = {
          addToast: ke.b,
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: q.deleteEntry,
        },
        Oe = Object(Ee.b)(Ie),
        Me = n('k49u'),
        Pe = n('LVU8'),
        Le = n('3XMw'),
        De = n.n(Le),
        Fe = De.a.f58dff33,
        Be = De.a.ad5a8e8e,
        je =
          ((he = {}),
          m()(he, Me.a.MissingParameter, { toast: Object(Pe.a)(Fe) }),
          m()(he, Me.a.DirectMessageDestroyPermissionsError, { toast: { text: Be } }),
          m()(he, 'showToast', !0),
          he),
        Ne = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Ue = n('uKEd'),
        He = [],
        We = Object(_e.createSelector)(
          function (e) {
            return Object(Ue.l)(e).entries
          },
          function (e, t) {
            return Object(Ue.p)(e, t.entry.id) || He
          },
          function (e, t) {
            return t.perspective
          },
          function (e, t, n) {
            return {
              selectedReactions: t
                .filter(function (t) {
                  var r = e[t] && e[t].data
                  return r && r.sender_id === n
                })
                .map(function (t) {
                  return e[t].data.reaction_key
                }),
            }
          },
        ),
        Ve = {
          createReaction: Ue.d,
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: Ne.d,
          removeReaction: Ue.k,
        },
        ze = Object(Ee.g)(We, Ve),
        qe = n('X/yg'),
        Ge = n('RhWx'),
        Ke = n.n(Ge),
        Ye = n('33Kz'),
        Xe = n('wTX1'),
        Qe = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            a = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            c = e.style,
            l = g.a.useContext(I.a).featureSwitches,
            d = Object(Ye.b)(a, l),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = P.a.generate({ backgroundColor: L.a.theme.colors.gray50, color: L.a.theme.colors.gray700 })
          return g.a.createElement(
            F.a,
            {
              accessibilityLabel: u,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: s,
              style: [Je.container].concat(Ke()(c || [])),
            },
            g.a.createElement(J.b, { size: r, style: Je.unsetLineHeight }, d),
            n
              ? g.a.createElement(Xe.a, { color: 'gray700', containerStyle: Je.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        Je = L.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        Ze = n('pHkl'),
        $e = n('Irs7'),
        et = De.a.ca7a2214,
        tt = De.a.fc0e94b7,
        nt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_handleReactionScribing', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  i = r.entry,
                  o = r.isGroupDM,
                  s = r.participantsCount,
                  c = n ? 'delete_reaction' : 'create_reaction',
                  l = Object(qe.c)(i)
                a.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: c,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? Ze.h.GROUP : Ze.h.ONE_TO_ONE,
                    message_type: l,
                    reaction_emotion: t,
                  },
                })
              }),
              m()(c()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.createLocalApiErrorHandler,
                    i = r.createReaction,
                    o = r.dismiss,
                    s = r.entry,
                    c = r.fetchUpdatesIfNeeded,
                    l = r.perspective,
                    d = r.removeReaction,
                    u = { reaction_key: t, conversation_id: s.conversation_id, dm_id: s.id, perspective: l }
                  ;(n ? d : i)(u)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return c()
                    })
                    .catch(a()),
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
                    n = Object(Ye.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return g.a.createElement(Qe, {
                        accessibilityLabelFormatter: r ? et : tt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [at.reaction, r && at.selectedReaction],
                      })
                    })
                  return g.a.createElement(Q.a, { style: at.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(nt, 'contextType', I.a)
      var rt = Object($e.a)(ze(nt)),
        at = L.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        it = n('OiMc'),
        ot = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.isGroupDM,
                  i = n.participantsCount,
                  o = n.perspective
                return g.a.createElement(rt, {
                  dismiss: t,
                  entry: r,
                  isGroupDM: a,
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
                    it.a,
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
      m()(ot, 'contextType', V.a)
      var st = n('fz3c'),
        ct = n('TnY3'),
        lt = n('mjJ+'),
        dt = n('Q0VY'),
        ut = n('eb3s'),
        pt = n('/yvb'),
        ht = n('ZToW'),
        mt = n('CaKu'),
        ft = n('i4Oy'),
        vt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        gt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = oe()(n, 2),
            a = r[0],
            i = r[1]
          return !((0 === a || 1 === a) && e.length === i)
        },
        bt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return gt(t.text, r.indices)
          if (n.card) {
            var a,
              i = ((null === (a = t.entities) || void 0 === a ? void 0 : a.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return gt(t.text, i && i.indices)
          }
          return !0
        },
        yt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        _t = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        Et = function (e, t, n) {
          var r = 1.25 * L.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        St = n('hiGS'),
        Rt = n('zIWA'),
        Ct = n('Lsrn'),
        wt = n('k/Ka'),
        xt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(wt.a)(
            'svg',
            y()(
              y()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Ct.a.root, e.style],
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
      xt.metadata = { width: 24, height: 24 }
      var At = xt,
        kt = n('DlVf'),
        Tt = n('ACHU'),
        It = n('UgB4'),
        Ot = De.a.ba60339a,
        Mt = De.a.j4bfee22,
        Pt = De.a.d96cf7cd,
        Lt = De.a.faddd3a2,
        Dt = De.a.eb497e08,
        Ft = De.a.b170974a,
        Bt = De.a.i202bd22,
        jt = De.a.f2e5491a,
        Nt = De.a.f88553c8,
        Ut = De.a.ifea3114,
        Ht = De.a.cac14829,
        Wt = De.a.h63a5c3b,
        Vt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              m()(c()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  r = t.entry,
                  a = t.isSent,
                  o = n.contextualScribeNamespace,
                  s = [{ text: Ot, Icon: St.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                return (
                  a ||
                    s.push({
                      text: Bt,
                      Icon: Rt.a,
                      link: {
                        pathname: '/i/report/'.concat(st.a.DMMessage, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    }),
                  mt.a.isAvailable() && s.push({ text: jt, Icon: At, onClick: i._handleCopyMessageText }),
                  g.a.createElement(lt.a, {
                    isFixed: i.context.isDrawer,
                    items: s,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              m()(c()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (mt.a.setString(n), t({ text: Nt })), e && e()
              }),
              m()(c()(i), '_handleForwardButton', function () {
                var e,
                  t,
                  n = i.props,
                  r = n.entry,
                  a = n.history
                if (
                  null != r &&
                  null !== (e = r.message_data) &&
                  void 0 !== e &&
                  null !== (t = e.attachment) &&
                  void 0 !== t &&
                  t.tweet
                ) {
                  var o = r.message_data.attachment.tweet
                  a.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: y()(y()({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              m()(c()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              m()(c()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  r = e.deleteEntry,
                  a = e.entry,
                  o = e.inboxType,
                  s = e.isGroupDM,
                  c = e.participantsCount,
                  l = Object(qe.c)(a)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: a.conversation_id,
                    conversation_type: s ? 1 : 0,
                    conversation_participant_count: c,
                    message_type: l,
                    inbox_type: Object(qe.h)(o),
                  },
                }),
                  r({ conversationId: a.conversation_id, id: a.id }).catch(n(je))
              }),
              m()(c()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              m()(c()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              m()(c()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(qe.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              m()(c()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              m()(c()(i), '_replaceMessageUrls', function () {
                var e = i.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  dt.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = yt(i.props.entry)),
              (i._isNarrow = ft.a.get('screen').width < L.a.theme.breakpoints.xSmall),
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
                    r = n.entry,
                    a = n.isSent,
                    i = n.shouldShowReactionButton,
                    o = n.style,
                    s = n.withVDLRefresh,
                    c = this._areActionsVisible()
                  return g.a.createElement(
                    Q.a,
                    {
                      pointerEvents: c ? 'auto' : 'none',
                      style: [
                        qt.messageActions,
                        a ? qt.messageActionsLeft : qt.messageActionsRight,
                        c ? qt.visible : qt.invisible,
                        s && qt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? qt.messageActionsMediaNarrow : qt.messageActionsNarrow),
                        o,
                      ],
                    },
                    (null == r ||
                    null === (e = r.message_data) ||
                    void 0 === e ||
                    null === (t = e.attachment) ||
                    void 0 === t
                      ? void 0
                      : t.tweet) &&
                      s &&
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
                    ? g.a.createElement(ut.a, {
                        confirmButtonLabel: Pt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Mt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: Lt,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return g.a.createElement(pt.a, {
                    accessibilityLabel: Ut,
                    hoverLabel: { label: Ut },
                    icon: Gt,
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
                    r = e.participantsCount,
                    a = e.perspective,
                    i = e.withVDLRefresh,
                    o = this.state.actionsAreActive,
                    s = g.a.createElement(kt.a, { style: i ? qt.vdlActionIcon : qt.actionIcon })
                  return g.a.createElement(
                    ot,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: a,
                    },
                    g.a.createElement(pt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: Ft,
                      hoverLabel: { label: Ht },
                      icon: s,
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
                    t = g.a.createElement(Tt.a, { style: e ? qt.vdlActionIcon : qt.actionIcon })
                  return g.a.createElement(pt.a, {
                    accessibilityLabel: Dt,
                    hoverLabel: { label: Wt },
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
                    r = t.containerIsFocused,
                    a = t.containerIsHovered,
                    i = t.isDraft,
                    o = this.state.actionsAreActive,
                    s = ((e = this.props.entry), !bt(e) && yt(e) && !ht.a.isEnabled)
                  return !i && (s || (n && !ht.a.isEnabled) || r || a || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(Vt, 'contextType', V.a)
      var zt = Object(ct.a)(Object($e.a)(Oe(Vt))),
        qt = L.a.create(function (e) {
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
        Gt = g.a.createElement(It.a, { style: qt.vdlActionIcon }),
        Kt = n('97Jx'),
        Yt = n.n(Kt),
        Xt = (n('6U7i'), n('CDB5')),
        Qt = n('rxPX'),
        Jt = Object(Qt.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: q.removeEntry,
              sendMessage: Xt.m,
            }
          })
          .withAnalytics(),
        Zt = '87.5%',
        $t = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        en = n('RqPI'),
        tn = [],
        nn = function (e, t) {
          return Object(Ue.p)(e, t.entryId) || tn
        },
        rn = function (e) {
          return Object(Ue.l)(e).entries
        },
        an = {
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        on = Object(Ee.e)(function () {
          return Object(_e.createSelector)(rn, nn, en.q, $t.d, function (e, t, n, r) {
            var a,
              i = Object(Ye.a)(r, { includeInactive: !0 }),
              o = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, r) {
                var s = e[r] && e[r].data
                if (!s) return t
                if (!i.includes(s.reaction_key)) return t
                var c = (t.get(s.reaction_key) || 0) + 1
                return (
                  t.set(s.reaction_key, c),
                  (null == s ? void 0 : s.sender_id) === n && (a = s.reaction_key),
                  (o += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: a,
              totalReactionCount: o,
            }
          })
        }, an),
        sn = (n('vfdX'), n('Ee2X'), []),
        cn = function (e, t) {
          return t.entryId
        },
        ln = function (e) {
          return Object(Ue.l)(e).entries
        },
        dn = function (e, t) {
          return Object(Ue.p)(e, cn(0, t)) || sn
        },
        un = function (e, t) {
          return Re.e.selectMany(
            e,
            (function (e, t) {
              return Object(Ue.q)(e, cn(0, t))
            })(e, t),
          )
        },
        pn = {
          removeReaction: Ue.k,
          fetchUpdatesIfNeeded: Ne.d,
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        hn = Object(Ee.e)(function () {
          return Object(_e.createSelector)(ln, dn, en.q, un, $t.d, function (e, t, n, r, a) {
            var i = Object(Ye.a)(a, { includeInactive: !0 }),
              o = []
            t.forEach(function (t) {
              var a = e[t] && e[t].data
              if (a && i.includes(a.reaction_key)) {
                var s = r.find(function (e) {
                    return e && e.id_str === a.sender_id
                  }),
                  c = s && {
                    avatarUri: s.profile_image_url_https,
                    userId: s.id_str,
                    reactionKey: a.reaction_key,
                    isLoggedInUser: s.id_str === n,
                    screenName: s.screen_name,
                    name: s.name,
                    isProtected: s.protected,
                    isVerified: s.verified,
                    time: a.time,
                  }
                c && o.push(c)
              }
            }),
              o.sort(function (e, t) {
                return t.time - e.time
              })
            var s = o.findIndex(function (e) {
              return e.userId === n
            })
            return s > -1 && o.push.apply(o, Ke()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, pn),
        mn = n('TIdA'),
        fn = n('htQn'),
        vn = De.a.gf5e9ea6,
        gn = De.a.a2d48778,
        bn = mn.a.createLayoutCache()
      var yn = L.a.create(function (e) {
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
        _n = function (e) {
          var t = g.a.useContext(I.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            a = e.user,
            i = e.withBottomBorder,
            o = a.avatarUri,
            s = a.isProtected,
            c = a.isVerified,
            l = a.name,
            d = a.screenName,
            u = g.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = g.a.createElement(Z.a, { imageLayoutCache: bn, screenName: d, size: 'xxLarge', uri: o }),
            h = g.a.createElement(Qe, { emojiSize: 'title4', emotion: a.reactionKey, focusable: !1 }),
            m = g.a.createElement(B.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: c,
              name: l,
              screenName: d,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            fn.a,
            { link: { pathname: '/'.concat(d), anchorless: !0 }, style: [yn.root, i && yn.bottomBorder] },
            g.a.createElement(Q.a, { style: yn.reactionColumn }, h),
            g.a.createElement(Q.a, { style: yn.column }, p),
            g.a.createElement(Q.a, { style: yn.bodyColumn }, g.a.createElement(Q.a, { style: yn.body }, m)),
            r
              ? g.a.createElement(
                  Q.a,
                  { style: yn.column },
                  g.a.createElement(
                    pt.a,
                    {
                      accessibilityLabel: gn({ emoji: Object(Ye.b)(a.reactionKey, t) }),
                      onClick: u,
                      size: 'small',
                      type: 'brandText',
                    },
                    vn,
                  ),
                )
              : null,
          )
        },
        En = n('xKuM'),
        Sn = n('efqG'),
        Rn = De.a.b772cd65,
        Cn = De.a.c0098d49,
        wn = De.a.j85999eb,
        xn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_renderContent', function (t, n) {
                return g.a.createElement(
                  Q.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              m()(c()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(En.a, { title: Cn, withBottomBorder: !0 })
                  : g.a.createElement(J.b, { visuallyHidden: !0 }, Cn)
              }),
              m()(c()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  Q.a,
                  { accessibilityLabel: wn, style: [An.container, 'sheet' === n ? An.sheet : An.popover] },
                  e._renderUserCells(t),
                )
              }),
              m()(c()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    pt.a,
                    { key: 'button_done', onPress: e, style: An.cancelButton, type: 'primaryOutlined' },
                    Rn,
                  )
                )
              }),
              m()(c()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return g.a.createElement(_n, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: r !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              m()(c()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.conversationId,
                    i = r.createLocalApiErrorHandler,
                    o = r.entryId,
                    s = r.fetchUpdatesIfNeeded,
                    c = r.loggedInUserId,
                    l = r.removeReaction,
                    d = { reaction_key: t, conversation_id: a, dm_id: o, perspective: c }
                  n(), l(d).then(e._handleScribeRemoveReaction(t)).then(s).catch(i())
                }
              }),
              m()(c()(e), '_handleScribeRemoveReaction', function (t) {
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
                    Sn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      m()(xn, 'contextType', V.a)
      var An = L.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        kn = Object(ct.a)(Object($e.a)(hn(xn))),
        Tn = De.a.h95f9e76,
        In = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              m()(c()(r), '_handleScribeDMReactionSummary', function () {
                r.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              m()(c()(r), '_onSetReactionsNode', function (e) {
                r._measureWidths(e || void 0)
              }),
              m()(c()(r), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = r.props,
                  a = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  o = r.state.emojiSize || 'headline1',
                  s = a.size - 1
                return Array.from(a, function (e, n) {
                  var r = oe()(e, 2),
                    a = r[0],
                    c = r[1]
                  return g.a.createElement(Qe, {
                    count: c,
                    emojiSize: o,
                    emotion: a,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: a,
                    style: [
                      n === s && On.rightPadding,
                      On.elementPadding,
                      i === a ? On.selfSelect : null,
                      t && On.isHoveredDMReaction,
                    ],
                  })
                })
              }),
              (r.state = { emojiSize: void 0 }),
              r
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
                    r = e.isEndOfDM,
                    a = e.isSent,
                    i = e.totalReactionCount,
                    o = this.state.emojiSize
                  if (0 === i) return null
                  var s = P.a.generate({ backgroundColor: L.a.theme.colors.gray50, color: L.a.theme.colors.gray700 }),
                    c = Tn({ reactionCount: i })
                  return g.a.createElement(
                    Q.a,
                    {
                      style: [
                        On.container,
                        r ? On.marginShort : On.marginLong,
                        a ? On.alignRight : On.alignLeft,
                        o ? On.visible : On.invisible,
                      ],
                    },
                    g.a.createElement(
                      kn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        F.a,
                        {
                          accessibilityLabel: c,
                          focusable: !0,
                          interactiveStyles: s,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: On.content,
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
                    var r = t.getBoundingClientRect().width,
                      a = (e ? e.getBoundingClientRect() : {}).width
                    ;(void 0 === a ? 0 : a) > r && (n.emojiSize = 'subtext2')
                  }
                  this.setState(y()({}, n))
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        On = L.a.create(function (e) {
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
            selfSelect: { borderColor: L.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        Mn = Object($e.a)(on(In)),
        Pn = n('Xrkv'),
        Ln = De.a.icd0bf34,
        Dn = De.a.e8bd8fec,
        Fn = De.a.b2d32fad,
        Bn = De.a.a763d33e,
        jn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              m()(c()(r), '_handlePress', function (e) {
                e.stopPropagation(), r.setState({ showFullList: !0 })
              }),
              (r.state = { showFullList: !1 }),
              r
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
                    r = e.namesToDisplay
                  return g.a.createElement(
                    Q.a,
                    { style: Nn.root },
                    g.a.createElement(
                      J.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: Nn.seenLabel },
                      this._renderSeenLabel(),
                    ),
                    !n && t && r.length ? this._renderNameList() : null,
                  )
                },
              },
              {
                key: '_renderSeenLabel',
                value: function () {
                  var e = this.props,
                    t = e.isGroupDM,
                    n = e.isSeenByEveryone,
                    r = e.namesToDisplay
                  return n ? (t ? Fn : Ln) : r.length ? Bn({ count: r.length }) : Dn
                },
              },
              {
                key: '_renderNameList',
                value: function () {
                  var e = this,
                    t = this.props.namesToDisplay,
                    n = !this.state.showFullList && t.length > 10,
                    r = t.length - 10,
                    a = function (t) {
                      var n = t.namesList,
                        r = t.othersCount
                      return g.a.createElement(
                        De.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(J.b, null, n),
                        g.a.createElement(
                          J.b,
                          { color: 'link', onPress: e._handlePress },
                          De.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Pn.a)(t, n)
                  return g.a.createElement(
                    J.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Nn.namesList },
                    n ? g.a.createElement(a, { namesList: i, othersCount: r }) : g.a.createElement(J.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        Nn = L.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Un = jn,
        Hn = n('t0aI'),
        Wn = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user,
            a = Object.keys(n),
            i = Vn({ entryId: t, participants: n, user: r })
          return { namesToDisplay: i, isSeenByEveryone: i.length === a.length - 1 }
        },
        Vn = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, a) {
            var i = n[a],
              o = i.join_conversation_event_id,
              s = i.last_read_event_id,
              c = i.user.name,
              l = a !== r.id_str,
              d = s && 1 !== Object(Hn.a)(t, s),
              u = !o || 1 !== Object(Hn.a)(o, t)
            return l && d && u && e.push(c), e
          }, [])
        },
        zn = n('IMYl'),
        qn = n('21zW'),
        Gn = n('gmpV'),
        Kn = De.a.fad48ee9,
        Yn = De.a.ba60339a,
        Xn = De.a.d338f53e,
        Qn = De.a.ae7d7a24,
        Jn = De.a.d725a288,
        Zn = De.a.bbe74f3f,
        $n = De.a.h0e4cdf4,
        er = De.a.bfbc051c,
        tr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryId
                ;(0, t.removeEntry)(n, null, { id: r })
              }),
              m()(c()(e), '_handleTryAgain', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryText,
                  a = t.localMediaId
                ;(0, t.sendMessage)({
                  tweetAttachment: void 0,
                  senderId: t.user.id_str,
                  conversationId: n,
                  text: r,
                  localMediaId: a,
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
                    r = this._renderSending(),
                    a = this._renderError(),
                    i = this._renderTimestamp(),
                    o = this._renderReadReceipt(),
                    s = this._renderSentCheckmark(),
                    c = this._renderReactions(),
                    l = i || o || s,
                    d = r || a || c || l,
                    u =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    d &&
                    g.a.createElement(
                      Q.a,
                      { style: [nr.root, u && nr.vdlRootMargin, t && nr.sentMessage] },
                      r,
                      a,
                      c,
                      l
                        ? g.a.createElement(
                            F.a,
                            { interactiveStyles: null, onPress: n, style: t && nr.sentContainer },
                            g.a.createElement(Q.a, { style: t && nr.groupedItems }, i, s),
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
                      Q.a,
                      null,
                      g.a.createElement(J.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Qn),
                      g.a.createElement(
                        Q.a,
                        { style: nr.groupedItems },
                        g.a.createElement(
                          J.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Yn,
                        ),
                        g.a.createElement(qn.a, null),
                        g.a.createElement(
                          J.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Xn,
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
                    r = e.isLastRapidFire,
                    a = e.isRapidFire,
                    i = e.isSent,
                    o = e.withUserAvatar,
                    s = !a || r
                  return t
                    ? g.a.createElement(
                        Q.a,
                        { style: o && nr.footerPadderWithAvatar },
                        g.a.createElement(Mn, { conversationId: t, entryId: n, isEndOfDM: s, isSent: i }),
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
                    r = e.isDraft,
                    a = e.isError,
                    i = e.isGroupDM,
                    o = e.isSent,
                    s = e.participants,
                    c = e.user
                  return n && o && !r && !a
                    ? g.a.createElement(Un, Yt()({ isGroupDM: i }, Wn({ entryId: t, participants: s, user: c })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement(J.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Kn)
                },
              },
              {
                key: '_renderSentCheckmark',
                value: function () {
                  var e = this.props,
                    t = e.entryId,
                    n = e.isDraft,
                    r = e.isError,
                    a = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = e.isSent,
                    s = e.participants,
                    c = e.user,
                    l = Wn({ entryId: t, participants: s, user: c }).isSeenByEveryone
                  return !o || n || r || (i && !a)
                    ? null
                    : g.a.createElement(
                        J.b,
                        { color: l ? 'primary' : 'gray700', style: nr.checkmarkContainer },
                        g.a.createElement(zn.a, { style: nr.checkmark }),
                      )
                },
              },
              {
                key: '_renderTimestamp',
                value: function () {
                  var e = this.props,
                    t = e.entryTime,
                    n = e.isDraft,
                    r = e.isError,
                    a = e.isGroupDM,
                    i = e.isLastRapidFire,
                    o = e.isRapidFire,
                    s = e.isSent,
                    c = e.user.name,
                    l = e.withUserAvatar
                  if (n || r || (o && !i)) return null
                  var d,
                    u = new Date(Number(t))
                  d = Object(Gn.c)(u) ? Jn(u) : Object(Gn.d)(u) ? Zn({ time: Jn(u) }) : Object(Gn.e)(u) ? $n(u) : er(u)
                  var p = a && !s,
                    h = s ? 'right' : 'left'
                  return g.a.createElement(
                    Q.a,
                    { style: [l && nr.footerPadderWithAvatar, s && nr.timestamp] },
                    g.a.createElement(
                      J.b,
                      { align: h, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !ht.a.isEnabled },
                      p &&
                        g.a.createElement(
                          De.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement(J.b, null, c),
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
      m()(tr, 'contextType', I.a)
      var nr = L.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: Zt },
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
        rr = Jt(tr),
        ar = n('jtO7'),
        ir = L.a.create(function (e) {
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
        or = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            r = e.isSent,
            a = e.label,
            i = e.onClick,
            o = e.outsideTopRounded,
            s = e.tcoUrl,
            c = [
              ir.root,
              n && ir.isLast,
              n && r && ir.sentLast,
              n && !r && ir.receivedLast,
              t && r && ir.insideTopRoundedSent,
              t && !r && ir.insideTopRoundedReceived,
              o && r && ir.outsideTopRoundedSent,
              o && !r && ir.outsideTopRoundedReceived,
            ]
          return g.a.createElement(
            Q.a,
            { style: c },
            g.a.createElement(ar.a, { align: 'center', color: 'primary', label: a, link: s, onClick: i }),
          )
        },
        sr = n('fs1G'),
        cr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
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
                    r = e.onCtaClick,
                    a = e.withSticker,
                    i = e.withUserText,
                    o = t.map(function (e, o) {
                      var s = 0 === o
                      return g.a.createElement(or, {
                        insideTopRounded: s && (a || !i),
                        isLast: o === t.length - 1,
                        isSent: n,
                        key: o,
                        label: e.label,
                        onClick: r,
                        outsideTopRounded: s && a,
                        tcoUrl: e.tco_url,
                      })
                    })
                  return g.a.createElement(Q.a, null, o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(cr, 'defaultProps', { onCtaClick: sr.a, onImpression: sr.a })
      var lr = cr,
        dr = (n('1IsZ'), n('vjRr')),
        ur = n('EGrD'),
        pr = function (e, t) {
          return dr.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        hr = Object(Qt.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: ur.c, card: pr }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ur.a,
              loadAdFreeArticleDomainsFromPersistence: ur.b,
              popOutConversation: q.popOutConversation,
            }
          }),
        mr = L.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        fr = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            a = void 0 === r || r,
            i = e.textContent
          return g.a.createElement(Q.a, { style: [a ? mr.visible : mr.invisible, mr.root] }, n, t, i)
        },
        vr = n('cTG8'),
        gr = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            r = void 0 !== n && n,
            a = e.isFailedDraft,
            i = e.isFirstRapidFire,
            o = void 0 !== i && i,
            s = e.isRapidFire,
            c = void 0 !== s && s,
            l = e.isSent,
            d = e.hasAssociatedAttachment,
            u = e.messageData,
            p = void 0 === u ? {} : u,
            h = e.rootStyle,
            m = e.tweetId,
            f = e.withCta,
            v = e.withMediaLinks,
            b = e.withMessageBubble,
            y = g.a.useContext(I.a).featureSwitches,
            _ = y.isTrue('dm_vdl_enabled') && y.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              h,
              b && br.messageTextContainer,
              b && l && br.sent,
              b && !l && br.received,
              a && br.failedDraft,
              c && !o && !l && br.rapidFireReceived,
              c && !o && l && br.rapidFireSent,
              d && l && br.hasAssociatedAttachmentSent,
              d && !l && br.hasAssociatedAttachmentReceived,
              b && _ && l && br.vdlSent,
              b && r && l && br.activeSent,
              b && _ && r && l && br.vdlActiveSent,
              b && r && !l && !ht.a.isEnabled && br.activeReceived,
              f && br.withCta,
            ],
            S = [br.tweetText, b && br.textAlignLeft, !b && l && br.textAlignRight],
            R = L.a.theme.colors,
            C = R.gray0,
            w = R.magenta500,
            x = R.primary,
            A = R.text,
            k = R.white,
            T = P.a.generate({ color: l ? k : A, backgroundColor: a ? w : l ? x : C }),
            O = (p.text && p.text.length) || 0
          return g.a.createElement(
            F.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: b ? T : null, style: E },
            g.a.createElement(vr.a, {
              color: L.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, O],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (b && l) || L.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: m,
              size: b ? void 0 : 'title2',
              style: S,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        br = L.a.create(function (e) {
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
      gr.defaultProps = { withMediaLinks: !1 }
      var yr = gr,
        _r = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            r = e.isFailedDraft,
            a = e.isFirstRapidFire,
            i = void 0 !== a && a,
            o = e.isRapidFire,
            s = void 0 !== o && o,
            c = e.isSent,
            l = e.messageData,
            d = e.withCta,
            u = e.withMessageBubble
          return g.a.createElement(yr, {
            isActive: n,
            isFailedDraft: r,
            isFirstRapidFire: i,
            isRapidFire: s,
            isSent: c,
            messageData: l,
            withCta: d,
            withMediaLinks: !0,
            withMessageBubble: u,
          })
        },
        Er = n('LSr9'),
        Sr = n('aX4+'),
        Rr = n('/Ikv'),
        Cr = Rr.a.CardNames,
        wr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e, r
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              m()(c()(r), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              m()(
                c()(r),
                '_hasClaimsForAdFreeArticles',
                null === (e = r.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              m()(c()(r), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  r.setState(n)
                }
              }),
              m()(c()(r), '_handleOnClick', function (e) {
                var t = r.props,
                  n = t.card.binding_values,
                  a = t.conversationId,
                  i = t.popOutConversation
                if ((a && i(a), r._hasClaimsForAdFreeArticles)) {
                  var o = r.props,
                    s = o.adFreeArticleDomains,
                    c = o.createLocalApiErrorHandler,
                    l = o.fetchAdFreeToken,
                    d = new Er.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Rr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Rr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    u = oe()(d, 2),
                    p = u[0],
                    h = u[1]
                  p && h(e)
                }
              }),
              m()(c()(r), '_handleTextContentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.textContentWidth !== t) {
                  var n = { textContentWidth: t }
                  r.setState(n)
                }
              }),
              r
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
                    r = e.isActive,
                    a = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    s = e.isSent,
                    c = e.messageData,
                    l = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    h = u.textContentWidth,
                    m = !!Object.values(Cr).includes(t.name),
                    f = Et(n, p, h),
                    v = f.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    b = g.a.createElement(
                      Q.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Sr.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: c.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    y = n
                      ? g.a.createElement(
                          Q.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? xr.sentMessageWrapper : xr.receivedMessageWrapper,
                          },
                          g.a.createElement(yr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: a,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: s,
                            messageData: c,
                            rootStyle: f.isTextSquared ? (s ? xr.textSentSquared : xr.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return m
                    ? g.a.createElement(fr, { attachmentContent: b, isVisible: f.compositeRendered, textContent: y })
                    : g.a.createElement(_r, {
                        isActive: r,
                        isFailedDraft: a,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: s,
                        messageData: c,
                        withCta: l,
                        withMessageBubble: d,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(wr, 'defaultProps', { hasUserText: !1 }), m()(wr, 'contextType', I.a)
      var xr = L.a.create(function (e) {
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
        Ar = hr(wr),
        kr = De.a.f720438f,
        Tr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              m()(c()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  r = 'left'
                return t ? (r = 'both') : n && (r = 'right'), Ir[r]
              }),
              m()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              m()(c()(e), '_handleTextContentLayout', function (t) {
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
                    r = e.isFailedDraft,
                    a = e.isFirstRapidFire,
                    i = e.isRapidFire,
                    o = e.isSent,
                    s = e.messageData,
                    c = e.withCta,
                    l = e.withMessageBubble,
                    d = this.state,
                    u = d.attachmentWidth,
                    p = d.textContentWidth
                  if (!s || !s.attachment || !s.attachment.fleet) return null
                  var h = Et(t, u, p),
                    m = h.compositeRendered,
                    f = h.isAttachmentSquared,
                    v = h.isTextSquared,
                    b = [
                      Or.tombstoneWrapper,
                      o ? Or.sentMessageWrapper : Or.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    y = g.a.createElement(
                      Q.a,
                      { onLayout: this._handleAttachmentLayout, style: b },
                      g.a.createElement(J.b, { color: 'gray700' }, kr),
                    ),
                    _ = t
                      ? g.a.createElement(
                          Q.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Or.sentMessageWrapper : Or.receivedMessageWrapper,
                              !l && Or.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(yr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: a,
                            isRapidFire: i,
                            isSent: o,
                            messageData: s,
                            rootStyle: v ? (o ? Or.sentSquared : Or.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: l,
                          }),
                        )
                      : null
                  return g.a.createElement(fr, { attachmentContent: y, isVisible: m, textContent: _ })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ir = L.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Or = L.a.create(function (e) {
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
        Mr = Tr,
        Pr = (n('849X'), n('TJCb'), n('prG5')),
        Lr = n('RCZO'),
        Dr = n('A91F'),
        Fr = De.a.b327c129,
        Br = function (e) {
          e.stopPropagation()
        },
        jr = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || Fr,
            a = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            s = i.width,
            c = Object(Lr.b)(t).rgb,
            l = g.a.createElement(Pr.a, {
              accessibilityLabel: r,
              aspectMode: Dr.a.withinRange(9 / 16, 10),
              backgroundColor: c,
              image: { url: a, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(F.a, { interactiveStyles: null, link: n, onPress: Br }, l) : l
        },
        Nr = n('Modb'),
        Ur = n('lklz'),
        Hr = n('XrEN'),
        Wr = n('ZvMt'),
        Vr = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && Hr.a.extractVideoProps(Ur.b.forDm(n), t)
          return r
            ? g.a.createElement(
                Nr.a,
                Yt()({}, r, { aspectRatio: Wr.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        zr = Object(Qt.a)().withAnalytics(),
        qr = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              m()(c()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width
                i.state.width !== t && i.setState({ width: t })
              }),
              m()(c()(i), '_getElement', function () {
                var e = i.props,
                  t = e.contentType,
                  n = e.isSensitive
                return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
              }),
              m()(c()(i), '_handleClick', function () {
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
                    r = e.description,
                    a = e.withSquareBottomBorderRadius,
                    i = this.state,
                    o = i.hide,
                    s = i.width < L.a.theme.breakpoints.micro
                  return o
                    ? g.a.createElement(
                        Q.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Kr.root,
                            s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            a && Gr[a],
                          ],
                        },
                        g.a.createElement(Q.a, { style: Kr.description }, g.a.createElement(J.b, null, r)),
                        g.a.createElement(
                          Q.a,
                          { style: [Kr.button, s ? Kr.breakButtonWrapper : void 0] },
                          g.a.createElement(
                            pt.a,
                            { onClick: this._handleClick, size: 'small', style: Kr.buttonElement, type: 'brandText' },
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
      m()(qr, 'defaultProps', { isSensitive: !1 })
      var Gr = L.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Kr = L.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: L.a.theme.spaces.space4,
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
        Yr = Object($e.a)(zr(qr)),
        Xr = n('CoGJ'),
        Qr = g.a.createElement(Xr.a, null),
        Jr = De.a.d9de7b57,
        Zr = De.a.f2879f4d,
        $r = De.a.b518221e,
        ea = De.a.eeaa9f90,
        ta = De.a.g2b43663,
        na = De.a.f277e949,
        ra = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              m()(c()(e), '_renderAttachment', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.entry,
                  i = r.hasUserText,
                  o = r.isFirstRapidFire,
                  s = r.isRapidFire,
                  c = r.isSent,
                  l = r.isTrusted,
                  d = r.messageData,
                  u = e.state,
                  p = u.attachmentWidth,
                  h = u.textContentWidth,
                  m = (d || {}).attachment,
                  f = a.is_draft,
                  v = Et(i, p, h),
                  b = [
                    aa.mediaAttachment,
                    c && aa.isSent,
                    !c && aa.received,
                    c && v.isAttachmentSquared && aa.equalComponentDimensionsSent,
                    !c && v.isAttachmentSquared && aa.equalComponentDimensionsReceived,
                    s && !o && c && aa.rapidFireSent,
                    s && !o && !c && aa.rapidFireReceived,
                  ],
                  y = null
                if (
                  (!f && a.conversation_id && (y = '/messages/'.concat(a.conversation_id, '/media/').concat(a.id)), m)
                )
                  if (m.photo) (t = m.photo), (n = g.a.createElement(jr, { media: t, mediaUrl: y }))
                  else if (m.animated_gif)
                    (t = m.animated_gif), (n = g.a.createElement(Vr, { media: t, messageId: a.id }))
                  else if (m.video) {
                    if (((t = m.video), Object(qe.k)(m, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(Vr, { media: t, messageId: a.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                  E = t && n && (c ? n : e._getMediaContentWithGuard(t, l, n, _))
                return {
                  attachmentContent: g.a.createElement(Q.a, { onLayout: e._handleAttachmentLayout, style: b }, E),
                  media: t,
                }
              }),
              m()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var r = { attachmentWidth: n }
                  e.setState(r)
                }
              }),
              m()(c()(e), '_handleTextContentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.textContentWidth !== n) {
                  var r = { textContentWidth: n }
                  e.setState(r)
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
                    r = e.isActive,
                    a = e.isFailedDraft,
                    i = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    s = e.isSent,
                    c = e.messageData,
                    l = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    h = u.textContentWidth,
                    m = t.is_draft,
                    f = Et(n, p, h),
                    v = this._renderAttachment(),
                    b = v.attachmentContent,
                    y = v.media,
                    _ = n
                      ? g.a.createElement(
                          Q.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? aa.sentMessageWrapper : aa.receivedMessageWrapper,
                          },
                          g.a.createElement(yr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: a,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: m ? c : this._parseMessageData(c, y),
                            rootStyle: f.isTextSquared ? (s ? aa.sentSquared : aa.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return g.a.createElement(fr, { attachmentContent: b, isVisible: f.compositeRendered, textContent: _ })
                },
              },
              {
                key: '_getMediaContentWithGuard',
                value: function (e, t, n, r) {
                  var a = this.props,
                    i = a.displaySensitiveMedia,
                    o = a.isDmNsfwMediaFilterEnabled
                  if (
                    e.possibly_sensitive &&
                    this.context.featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
                  ) {
                    if (o) {
                      var s = ('animated_gif' === e.type && ta) || ('video' === e.type && ea) || $r
                      return g.a.createElement(
                        Yr,
                        {
                          contentType: e.type,
                          ctaText: s,
                          description: Zr,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return g.a.createElement(
                      Yr,
                      {
                        contentType: e.type,
                        ctaText: na,
                        description: Qr,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : g.a.createElement(
                        Yr,
                        { contentType: e.type, ctaText: na, description: Jr, withSquareBottomBorderRadius: r },
                        n,
                      )
                },
              },
              {
                key: '_parseMessageData',
                value: function (e, t) {
                  var n,
                    r =
                      null != e && null !== (n = e.entities) && void 0 !== n && n.urls && t
                        ? e.entities.urls.filter(function (e) {
                            return e.display_url !== t.display_url
                          })
                        : null
                  return e && r
                    ? y()(y()({}, e), {}, { entities: y()(y()({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(ra, 'contextType', I.a), m()(ra, 'defaultProps', { hasUserText: !1 })
      var aa = L.a.create(function (e) {
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
        ia = ra,
        oa = Object(Qt.a)().propsFromActions(function () {
          return { markSpamStatus: q.markSpamStatus }
        }),
        sa = De.a.fd07947f,
        ca = De.a.c7a92dc9,
        la = De.a.f277e949,
        da = De.a.fb3ccb55,
        ua = oa(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                m()(c()(e), '_handlePress', function (t) {
                  return function () {
                    var n = e.props,
                      r = n.conversationId,
                      a = n.dmId
                    ;(0, n.markSpamStatus)({ conversationId: r, dmId: a, markSpam: t })
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
                      Yr,
                      { contentType: 'dm', ctaText: la, description: da },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return g.a.createElement(
                      Q.a,
                      { style: pa.buttons },
                      g.a.createElement(
                        pt.a,
                        { onPress: this._handlePress(!1), style: pa.leftButton, type: 'brandOutlined' },
                        ca,
                      ),
                      g.a.createElement(pt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, sa),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        pa = L.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        ha = n('U+bB'),
        ma = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        fa = L.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        va = function (e) {
          var t = e.sticker
          return g.a.createElement(ha.a, { accessibilityLabel: t.display_name, source: ma(t), style: fa.stickerItem })
        },
        ga = n('XOJV'),
        ba = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        ya = Object(Qt.a)()
          .propsFromState(function () {
            return { tweet: ga.a.createHydratedTweetSelector(ba) }
          })
          .propsFromActions(function () {
            return { popOutConversation: q.popOutConversation }
          }),
        _a = n('b5s6'),
        Ea = g.a.createElement(J.b, { link: '/settings/safety' }),
        Sa = function (e) {
          return g.a.createElement(
            De.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(Ea, null, De.a.adcf07b5),
          )
        },
        Ra = De.a.e4df0ad7,
        Ca = De.a.f277e949,
        wa = De.a.b5b91d58,
        xa = De.a.bb594d7b,
        Aa = g.a.createElement(Sa, null)
      var ka = L.a.create(function (e) {
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
        Ta = ya(function (e) {
          var t = g.a.useContext(I.a).featureSwitches,
            n = e.conversationId,
            r = e.displaySensitiveMedia,
            a = e.hasUserText,
            i = void 0 !== a && a,
            o = e.isActive,
            s = void 0 !== o && o,
            c = e.isDmNsfwMediaFilterEnabled,
            l = e.isFailedDraft,
            d = e.isFirstRapidFire,
            u = void 0 !== d && d,
            p = e.isRapidFire,
            h = void 0 !== p && p,
            m = e.isSent,
            f = e.isTrusted,
            v = e.messageData,
            b = e.popOutConversation,
            y = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            S = g.a.useState(void 0),
            R = oe()(S, 2),
            C = R[0],
            w = R[1],
            x = g.a.useState(void 0),
            A = oe()(x, 2),
            k = A[0],
            T = A[1],
            O = g.a.useMemo(
              function () {
                return function () {
                  n && b(n)
                }
              },
              [n, b],
            ),
            M = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  C !== t && w(t)
                }
              },
              [C],
            ),
            P = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  k !== t && T(t)
                }
              },
              [k],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var L = v.attachment.tweet,
            D = m ? 'sent' : 'received',
            F = Et(i, C, k),
            B = g.a.createElement(_a.a, {
              onPress: O,
              style: [
                ka[D],
                i && ka.attachment,
                F.isAttachmentSquared ? (m ? ka.sentAttachmentSquared : ka.receivedAttachmentSquared) : void 0,
              ],
              tweetId: L.status,
            }),
            j = F.isAttachmentSquared ? 'both' : m ? 'right' : 'left',
            N = (function () {
              if (!y) return null
              if (m) return B
              if (y.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (c || void 0 === c)
                  return g.a.createElement(
                    Yr,
                    { contentType: 'photo', ctaText: xa, description: wa, withSquareBottomBorderRadius: j },
                    B,
                  )
              } else if (!r && y.possibly_sensitive)
                return g.a.createElement(
                  Yr,
                  { contentType: 'photo', ctaText: Ca, description: Aa, withSquareBottomBorderRadius: j },
                  B,
                )
              return f
                ? B
                : g.a.createElement(
                    Yr,
                    { contentType: 'tweet', ctaText: Ca, description: Ra, withSquareBottomBorderRadius: j },
                    B,
                  )
            })(),
            U = g.a.createElement(Q.a, { onLayout: M, style: ka.attachment }, N),
            H = i
              ? g.a.createElement(
                  Q.a,
                  { onLayout: P, style: m ? ka.sentMessageWrapper : ka.receivedMessageWrapper },
                  g.a.createElement(yr, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: l,
                    isFirstRapidFire: u,
                    isRapidFire: h,
                    isSent: m,
                    messageData: v,
                    rootStyle: F.isTextSquared ? (m ? ka.sentSquared : ka.receivedSquared) : void 0,
                    tweetId: L.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(fr, { attachmentContent: U, isVisible: F.compositeRendered, textContent: H })
        }),
        Ia = n('htvZ'),
        Oa = n('MH+I'),
        Ma = n('5Ixf'),
        Pa = n('AtEG')
      function La(e) {
        var t,
          n,
          r = g.a.useContext(Ia.a),
          a = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var s = oe()(r.activeVoiceMessage, 2),
          c = s[0],
          l = s[1],
          d = oe()(r.playerApi, 1)[0],
          u = oe()(r.playerState, 1)[0],
          p = r.scribeAction,
          h = oe()(c, 1)[0],
          m = e.messageId === h
        if (!p) return null
        var f = Fa(u),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          b = {
            durationMs: v,
            isActive: m,
            isSent: i,
            playerApi: null,
            playerState: null,
            onImpression: function () {
              return p.impression({ isLowQuality: a, isTrusted: o })
            },
            onPlayRequest: function () {
              return l([e.messageId, e.media])
            },
            onPlay: function () {
              return p.play({ data: { duration_ms: v } })
            },
            onPause: function () {
              return p.pause()
            },
          }
        return (
          m &&
            f &&
            f.contentId === e.media.id_str &&
            ((b.playerApi = d),
            (b.playerState = u),
            null != f && f.durationMs && (b.durationMs = null == f ? void 0 : f.durationMs)),
          g.a.createElement(Da, b)
        )
      }
      function Da(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          a = e.playerState,
          i = null == a ? void 0 : a.isPlaying,
          o = Fa(a),
          s = (null == o ? void 0 : o.currentTimeMs) || 0,
          c = (null == o ? void 0 : o.durationMs) || e.durationMs,
          l = Math.max(t ? c - s : c, 0)
        g.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          g.a.useEffect(
            function () {
              r && 0 === s && (r.play(), e.onPlay())
            },
            [r],
          )
        var d = L.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'normal' },
          p = [
            Na.voiceMessage,
            Ua({ isSent: n, squared: t }),
            n ? Na.voiceMessageSent : Na.voiceMessageReceived,
            ue(L.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          h = i ? Ma.a : Pa.a
        return g.a.createElement(
          Q.a,
          { style: [Na.container, ue(L.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            Q.a,
            { style: p },
            g.a.createElement(Q.a, { style: Na.startSpacer }),
            g.a.createElement(pt.a, {
              accessibilityLabel: i ? ja : Ba,
              icon: g.a.createElement(h, { style: d ? Na.iconColorDark : Na.iconColorDefault }),
              onPress: function () {
                r ? (i ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(Q.a, { style: Na.durationSpacer }),
            g.a.createElement(
              Q.a,
              { style: n ? Na.durationOpacity : void 0 },
              g.a.createElement(
                Oa.a,
                Yt()({ countdown: !0, timeMs: l }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Na.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(Q.a, { style: Na.endSpacer }),
          ),
        )
      }
      var Fa = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ba = De.a.c94b7d89,
        ja = De.a.eb6f9582,
        Na = L.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: le.a.getConstants().isRTL ? 'row-reverse' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            voiceMessageSent: { backgroundColor: e.colors.primary },
            voiceMessageReceived: { backgroundColor: e.colors.dmReceivedBubbleBackground },
            durationSpacer: { width: e.spaces.space4 },
            durationOpacity: { opacity: 0.75 },
            durationDark: { color: e.colors.whiteOnColor },
            iconColorDark: { color: e.colors.whiteOnColor },
            iconColorDefault: { color: e.colors.gray1100 },
            startSpacer: { width: e.spaces.space4 },
            endSpacer: { width: e.spaces.space16 },
          }
        })
      function Ua(e) {
        var t = e.isSent,
          n = e.squared
        return [Ha.base, t ? Ha.sent : Ha.received, n ? (t ? Ha.sentSquared : Ha.receivedSquared) : void 0]
      }
      var Ha = L.a.create(function (e) {
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
        Wa = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.entry,
                    r = t.isSent,
                    a = t.onCtaClick,
                    i = t.onCtaImpression,
                    o = n.message_data,
                    s = o && o.attachment ? o.attachment : {},
                    c = n.marked_as_spam,
                    l = yt(n),
                    d = !!o && !!o.ctas,
                    u = bt(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (yt(e) && !_t(e)) return !1
                      if (!t.text) return !1
                      var n = Object(vt.parse)(t.text)
                      if (!n || 0 === n.length) return !1
                      var r = n
                        .sort(function (e, t) {
                          return t.indices[1] - e.indices[1]
                        })
                        .reduce(function (e, t) {
                          return ''.concat(e.slice(0, t.indices[0])).concat(e.slice(t.indices[1]))
                        }, t.text)
                        .trim()
                      return n.length <= 10 && 0 === r.length
                    })(n),
                    h = !(u && p),
                    m = _t(n)
                  e = s.sticker ? g.a.createElement(va, { sticker: s.sticker }) : this._renderDMMessage(u, d, h)
                  var f = c ? g.a.createElement(ua, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = l && !m && !Object(qe.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    b = [
                      r ? Va.isSent : Va.isReceived,
                      d && Va.withCta,
                      v ? Va.mediaRoot : Va.flexShrink,
                      this.props.style,
                    ]
                  return g.a.createElement(
                    Q.a,
                    { style: b },
                    f,
                    o && o.ctas
                      ? g.a.createElement(lr, {
                          callToActions: o.ctas,
                          isSent: r,
                          onCtaClick: a,
                          onImpression: i,
                          withSticker: !!s.sticker || p,
                          withUserText: u,
                        })
                      : null,
                  )
                },
              },
              {
                key: '_renderDMMessage',
                value: function (e, t, n) {
                  var r = this.props,
                    a = r.displaySensitiveMedia,
                    i = r.entry,
                    o = r.isActive,
                    s = r.isDmNsfwMediaFilterEnabled,
                    c = r.isFirstRapidFire,
                    l = r.isLowQuality,
                    d = r.isRapidFire,
                    u = r.isSent,
                    p = r.isTrusted,
                    h = i.error,
                    m = i.message_data,
                    f = m && y()(y()({}, m), {}, { entities: (m && m.entities) || void 0, error: h }),
                    v = null == f ? void 0 : f.attachment,
                    b = {
                      isActive: o,
                      isFailedDraft: !!h,
                      isFirstRapidFire: c,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && v) {
                    if (v.tweet)
                      return g.a.createElement(
                        Ta,
                        Yt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: a,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: s,
                            isTrusted: p,
                            messageData: f,
                          },
                          b,
                        ),
                      )
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(qe.k)(v, this.context.featureSwitches)
                        ? g.a.createElement(La, {
                            isLowQuality: l,
                            isSent: !!u,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : g.a.createElement(
                            ia,
                            Yt()(
                              {
                                displaySensitiveMedia: a,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: s,
                                isTrusted: p,
                                messageData: f,
                              },
                              b,
                            ),
                          )
                    if (v.card)
                      return g.a.createElement(
                        Ar,
                        Yt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, b),
                      )
                    if (v.fleet) return g.a.createElement(Mr, Yt()({ entry: i, hasUserText: e, messageData: f }, b))
                  }
                  return g.a.createElement(_r, Yt()({}, b, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(Wa, 'contextType', I.a)
      var Va = L.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        za = Wa,
        qa = L.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Ga = function (e) {
          var t = e.showAvatar,
            n = e.size,
            r = void 0 === n ? 'xLarge' : n,
            a = e.user
          return t
            ? g.a.createElement(Z.a, {
                accessibilityLabel: a.name,
                link: { pathname: '/'.concat(a.screen_name) },
                size: r,
                uri: a.profile_image_url_https,
              })
            : g.a.createElement(Q.a, { style: [qa.avatar, Z.a.getSizeStyle(r)] })
        },
        Ka = n('m3Bd'),
        Ya = n.n(Ka),
        Xa = n('B3eJ'),
        Qa = ['color', 'isActive', 'size']
      function Ja(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          a = Ya()(e, Qa),
          i = g.a.useContext(Ia.a),
          o = g.a.useState(0.5),
          s = oe()(o, 2),
          c = s[0],
          l = s[1],
          d = oe()(i.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && d && d.isPlaying && l(Math.random())
          },
          [n, d],
        )
        var u = n && (null == d ? void 0 : d.isPlaying),
          p = r + 2 * Za,
          h = [$a.container, a.style, { width: r, height: r }]
        return g.a.createElement(
          Q.a,
          { style: h },
          g.a.createElement(
            Q.a,
            { style: [$a.container, $a.transitionOpacity, u ? $a.show : $a.hide] },
            de.a.reducedMotionEnabled
              ? null
              : g.a.createElement(Xa.a, { audioLevel: c, color: t, paused: !u, size: r }),
          ),
          g.a.createElement(Q.a, {
            style: [$a.border, { width: p, height: p }, $a.transitionOpacity, n ? $a.show : $a.hide],
          }),
        )
      }
      var Za = parseInt(L.a.theme.spaces.space2, 10),
        $a = L.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Za,
              left: -1 * Za,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        ei = n('uArA'),
        ti = 'messageEntry',
        ni = { element: 'cta_dm' },
        ri = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        ai = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(
                c()(e),
                '_handleClick',
                Object(ei.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    r = n.error,
                    a = n.id,
                    i = n.is_draft,
                    o = t.isActive,
                    s = t.setActiveEntry
                  i || r || (s(o ? null : a), e._handleScribeMessageEntryClick())
                }),
              ),
              m()(c()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!ht.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(qe.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              m()(c()(e), '_handleCtaImpression', function () {
                e._scribeAction(y()(y()({}, ni), {}, { action: 'show' }))
              }),
              m()(c()(e), '_handleCtaClick', function () {
                e._scribeAction(y()(y()({}, ni), {}, { action: 'click' }))
              }),
              m()(c()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(qe.k)(
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
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(X.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.isActive,
                    r = t.isGroupDM,
                    a = t.isSent,
                    i = t.user,
                    o = this._getRapidFireProps(),
                    s = !o.isRapidFire || o.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    l = [
                      oi.root.base,
                      c && oi.root.vdlPadding,
                      s && oi.root.contentSpacing,
                      s && c && oi.root.vdlContentSpacing,
                    ],
                    d = this._isDMVoiceMessage(),
                    u = c ? r && !a : !a || d
                  if (!i) return null
                  var p = !ht.a.isEnabled || a
                  return g.a.createElement(
                    ye.a,
                    { viewType: 'message' },
                    g.a.createElement(
                      Q.a,
                      { style: l },
                      g.a.createElement(
                        F.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: a ? oi.root.sent : oi.root.received,
                          testID: ti,
                        },
                        function (t) {
                          var n = t.isFocused,
                            r = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: r,
                            rapidFireProps: o,
                            withVDLRefresh: c,
                            withUserAvatar: u,
                          })
                        },
                      ),
                      this._renderFooter(o, u),
                    ),
                  )
                },
              },
              {
                key: '_renderMessage',
                value: function (e) {
                  var t,
                    n = e.isFocused,
                    r = e.isHovered,
                    a = e.rapidFireProps,
                    i = e.withUserAvatar,
                    o = e.withVDLRefresh,
                    s = this.props,
                    c = s.displaySensitiveMedia,
                    l = s.entry,
                    d = s.inboxType,
                    u = s.isActive,
                    p = s.isDmNsfwMediaFilterEnabled,
                    h = s.isGroupDM,
                    m = s.isLowQuality,
                    f = s.isReadOnly,
                    v = s.isSent,
                    b = s.isTrusted,
                    y = s.isVoiceMessageActive,
                    _ = s.isWide,
                    E = s.participants,
                    S = s.perspective,
                    R = s.scribeVoiceMessage,
                    C = s.setShouldFreezeUpdates,
                    w = a.isFirstRapidFire,
                    x = a.isRapidFire,
                    A = [
                      v ? oi.messageContainer.sent : oi.messageContainer.received,
                      _ ? oi.messageContainer.wide : oi.messageContainer.narrow,
                      v && _ && oi.messageContainer.sentWide,
                      !v && _ && oi.messageContainer.receivedWide,
                    ],
                    k = b && !f,
                    T = this._isDMVoiceMessage(),
                    I = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return g.a.createElement(
                    Q.a,
                    { style: A },
                    l.error
                      ? null
                      : g.a.createElement(zt, {
                          containerIsActive: u,
                          containerIsFocused: n,
                          containerIsHovered: r,
                          entry: l,
                          inboxType: d,
                          isDraft: !!l.is_draft,
                          isGroupDM: h,
                          isSent: v,
                          onReportMessage:
                            T && R
                              ? function () {
                                  return R.report({ isLowQuality: m, isTrusted: b })
                                }
                              : void 0,
                          participantsCount: I,
                          perspective: S,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: k,
                          style: T && ue(L.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: y }),
                          withVDLRefresh: o,
                        }),
                    g.a.createElement(za, {
                      displaySensitiveMedia: c,
                      entry: l,
                      isActive: u,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: m,
                      isRapidFire: x,
                      isSent: v,
                      isTrusted: b,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: T && ue(L.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: y }),
                    }),
                    this._possiblyRenderUserAvatar(a, i),
                  )
                },
              },
              {
                key: '_renderFooter',
                value: function (e, t) {
                  var n,
                    r,
                    a = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = this.props,
                    s = o.entry,
                    c = o.isActive,
                    l = o.isGroupDM,
                    d = o.isSent,
                    u = o.participants,
                    p = o.user
                  return p
                    ? g.a.createElement(rr, {
                        conversationId: s.conversation_id,
                        entryId: s.id,
                        entryText: null === (n = s.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: s.time,
                        isActive: c,
                        isDraft: !!s.is_draft,
                        isError: !!s.error,
                        isGroupDM: l,
                        isLastRapidFire: a,
                        isRapidFire: i,
                        isSent: d,
                        localMediaId: null === (r = s.message_data) || void 0 === r ? void 0 : r.localMediaId,
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
                    r = e.isRapidFire,
                    a = this.props,
                    i = a.isSent,
                    o = a.isVoiceMessageActive,
                    s = a.user,
                    c = this._isDMVoiceMessage()
                  if (!s || (!t && !o)) return null
                  var l = ce(L.a.theme.scale),
                    d = l.DMUserAvatarSizePx,
                    u = { showAvatar: !!c || !r || !!n, size: l.DMUserAvatarSizeType, user: s },
                    p = [
                      oi.userAvatar.base,
                      i ? oi.userAvatar.sent : oi.userAvatar.received,
                      c && ue(L.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return g.a.createElement(
                    Q.a,
                    { style: oi.userAvatar.container },
                    i ? null : g.a.createElement(Q.a, { style: oi.userAvatar.spacer }),
                    c
                      ? g.a.createElement(Ja, {
                          color: i ? L.a.theme.colors.primary : L.a.theme.colors.text,
                          isActive: !!o,
                          size: d,
                          style: p,
                        })
                      : null,
                    g.a.createElement(Q.a, { style: p }, g.a.createElement(Ga, u)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(y()({}, e))
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
      m()(ai, 'contextType', I.a), m()(ai, 'defaultProps', ri)
      var ii = Object($e.a)(
          Ae(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = g.a.useContext(Ia.a),
                  a = oe()(r.activeVoiceMessage, 1)[0],
                  i = r.scribeAction,
                  o = oe()(a, 1)[0] === n.id,
                  s = y()(y()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return g.a.createElement(e, s)
              }
              return (t.defaultProps = ri), t
            })(ai),
          ),
        ),
        oi = {
          root: L.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: L.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: Zt },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: L.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: ce(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        si = n('H4nC'),
        ci = function (e) {
          var t = e.conversation,
            n = e.entry,
            r = e.inboxType,
            a = e.isActive,
            i = e.isFirstRapidFire,
            o = e.isLastRapidFire,
            s = e.isRapidFire,
            c = e.isWide,
            l = e.perspective,
            d = e.scribeNamespace,
            u = e.setActiveEntry,
            p = e.setShouldFreezeUpdates
          if (Object(A.b)(n) || Object(A.e)(n)) {
            var h = t.conversation_id,
              m = t.low_quality,
              f = t.participants,
              v = t.read_only,
              b = t.trusted,
              y = t.type,
              _ = n.message_data,
              E = (_ = void 0 === _ ? {} : _).sender_id,
              S = void 0 === h || b
            return g.a.createElement(ii, {
              entry: n,
              inboxType: r,
              isActive: a,
              isFirstRapidFire: i,
              isGroupDM: y === q.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: o,
              isLowQuality: !!m,
              isRapidFire: s,
              isReadOnly: v,
              isSent: E === l,
              isTrusted: !!S,
              isWide: c,
              participants: f,
              perspective: l,
              scribeNamespace: d,
              senderId: E,
              setActiveEntry: u,
              setShouldFreezeUpdates: p,
            })
          }
          return Object(A.a)(n)
            ? g.a.createElement(ae, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(A.d)(n)
            ? g.a.createElement(si.a, { entry: n, isCompact: !1 })
            : null
        },
        li = n('0JOx'),
        di = Object(_e.createSelector)(
          function (e, t) {
            var n = Object(Ue.o)(e, t.conversationId),
              r = n && Object(T.a)(n)
            return r && Object(q.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        ui = Object(Ee.c)(di),
        pi = (n('Ef13'), n('uDfI')),
        hi = Object(_e.createSelector)(
          function (e, t) {
            return Re.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        mi = Object(pi.b)(hi),
        fi = n('Enqy'),
        vi = n('+/1j'),
        gi = 'overflow',
        bi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        yi = { stiffness: 1e3, damping: 70 },
        _i = 140,
        Ei = { scale: Object(fi.spring)(1, yi), translateY: Object(fi.spring)(0, yi) },
        Si = function (e, t) {
          return { key: e.id_str, data: e, style: Ei }
        },
        Ri = Object(S.a)({ translateY: _i, scale: 0 }),
        Ci = Object(S.a)({ scale: Object(fi.spring)(1, yi), translateY: Object(fi.spring)(_i, yi) }),
        wi = [{ key: 'bubble', style: { scale: Object(fi.spring)(1, yi), translateY: Object(fi.spring)(0, yi) } }],
        xi = Object(S.a)({ translateY: _i, scale: 0 }),
        Ai = Object(S.a)({ scale: Object(fi.spring)(1, yi), translateY: Object(fi.spring)(_i, yi) }),
        ki = function (e) {
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
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), 'state', { isHidden: !0 }),
              m()(c()(e), '_afterLeave', function () {
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
                  return !Object(X.a)(this.props, e) || !Object(X.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(bi).slice(0, 5).map(Si)
                  return (
                    t.length > 5 && n.push({ key: gi, style: Ei }),
                    g.a.createElement(
                      Q.a,
                      { style: [Ii.root, e && Ii.hidden] },
                      g.a.createElement(
                        Q.a,
                        { style: Ii.avatarRow },
                        g.a.createElement(
                          fi.TransitionMotion,
                          { styles: n, willEnter: Ri, willLeave: Ci },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var r = ki(e.style)
                                return e.key === gi
                                  ? g.a.createElement(
                                      Q.a,
                                      {
                                        key: e.key,
                                        style: [Ii.avatar, Ii.avatarSpacer, Ii.overflowAvatar, { transform: r }],
                                      },
                                      g.a.createElement(vi.a, { style: Ii.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      Q.a,
                                      { key: e.key, style: [Ii.avatar, { transform: r }] },
                                      g.a.createElement(Z.a, {
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
                        fi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? wi : [], willEnter: xi, willLeave: Ai },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                Q.a,
                                { key: e.key, style: [Ii.messageBubble, { transform: ki(e.style) }] },
                                g.a.createElement(Q.a, { style: Ii.dot }),
                                g.a.createElement(Q.a, { style: [Ii.dot, Ii.dot1] }),
                                g.a.createElement(Q.a, { style: [Ii.dot, Ii.dot2] }),
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
        Ii = L.a.create(function (e) {
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
        Oi = mi(Ti),
        Mi = n('tn7R'),
        Pi = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_timers', {}),
              m()(c()(e), 'state', { forceHide: !1, userIds: [] }),
              m()(c()(e), '_handleLivePipelineUpdate', function (t) {
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
                        Ke()(
                          e.userIds.filter(function (e) {
                            return e !== n
                          }),
                        ),
                        [n],
                      ),
                    }
                  }))
              }),
              m()(c()(e), '_removeAvatar', function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                e.setState(function (e) {
                  var r = e.userIds.filter(function (e) {
                    return e !== t
                  })
                  return { forceHide: n && 0 === r.length, userIds: r }
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
                      r = void 0 === n ? {} : n,
                      a = this.props.lastEntry
                    r && r.id !== a.id && a.message_data && this._removeAvatar(a.message_data.sender_id, !0)
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
                  return !t && g.a.createElement(Oi, { userIds: n })
                },
              },
              {
                key: '_teardownLivePipeline',
                value: function () {
                  Object(Mi.a)(this._timers).forEach(function (e) {
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
                    var r = n.LivePipeline
                    r.isSupportedAndReady(e.context.featureSwitches) &&
                      e.context.featureSwitches.isTrue('livepipeline_dm_features_enabled') &&
                      !e._livePipelineSubscription &&
                      (e._livePipelineSubscription = r
                        .get()
                        .subscribeTopic('/dm_typing/'.concat(t), e._handleLivePipelineUpdate))
                  })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      m()(Pi, 'contextType', I.a)
      var Li = ui(Pi),
        Di = n('3AAD'),
        Fi = n('iBK2'),
        Bi = n('Fz18'),
        ji = n('RJrc'),
        Ni = n('yw4N'),
        Ui = (n('XygZ'), n('dPJJ')),
        Hi = n('zrc3'),
        Wi = n('pQ3Z'),
        Vi = n.n(Wi),
        zi = n('VY6S'),
        qi = n('Resy'),
        Gi = (function () {
          function e(t) {
            var n = this
            a()(this, e),
              m()(this, '_trackScroll', function () {
                n._programmaticScroll ? (n._programmaticScroll = !1) : (n._lastScrollTs = Date.now())
              }),
              m()(this, '_normalize', function () {
                n._wrapperNode &&
                  0 !== n._transform &&
                  n._viewport &&
                  ((n._wrapperNode.style.transform = ''), n._viewport.scrollBy(-1 * n._transform), (n._transform = 0))
              }),
              m()(this, '_normalizeIfNeeded', function () {
                if (n._wrapperNode && n._viewport && 0 !== n._transform) {
                  var e = n._viewport,
                    t = n._wrapperNode.getBoundingClientRect(),
                    r = t.height,
                    a = t.top,
                    i = new qi.a(a, r),
                    o = i.translateBy(-1 * n._transform),
                    s = e.getRect()
                  s.contains(o.getTop()) ||
                  s.contains(o.getBottom()) ||
                  s.contains(i.getTop()) ||
                  s.contains(i.getBottom())
                    ? n._normalize()
                    : n._debouncedNormalize()
                }
              }),
              (this._transform = 0),
              (this._viewport = t),
              (this._lastScrollTs = 0),
              (this._debouncedNormalize = Object(zi.a)(this._normalize, 500)),
              (this._removeScrollListener = t.addScrollListener(this._normalizeIfNeeded)),
              (this._removeScrollTracker = t.addScrollListener(this._trackScroll))
          }
          return (
            o()(e, [
              {
                key: 'setWrapperNode',
                value: function (e) {
                  this._wrapperNode = e
                },
              },
              {
                key: 'teardown',
                value: function () {
                  this._removeScrollListener(), this._removeScrollTracker(), delete this._viewport
                },
              },
              {
                key: 'offsetBy',
                value: function (e) {
                  if (!(Math.abs(e) <= 0.5)) {
                    var t = this._wrapperNode,
                      n = Date.now() - this._lastScrollTs
                    !t || n >= 500
                      ? ((this._programmaticScroll = !0), this._viewport && this._viewport.scrollBy(e))
                      : ((this._transform = this._transform - e),
                        (t.style.transform = 'translateY('.concat(this._transform, 'px)')),
                        this._normalizeIfNeeded())
                  }
                },
              },
            ]),
            e
          )
        })(),
        Ki = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              m()(c()(i), '_updatesSuspended', !1),
              m()(c()(i), '_handleHeightsUpdate', function (e, t) {
                var n = i.props.anchoring
                i._scrollBy(n.offsetCorrection(e, t))
              }),
              m()(c()(i), '_receiveWrapperNode', function (e) {
                return i._offsetHandler.setWrapperNode(e)
              }),
              m()(c()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              m()(c()(i), '_handleEnterFullscreen', function () {
                ;(i._updatesSuspended = !0), i._ref && i._ref.freezeUpdates()
              }),
              m()(c()(i), '_handleExitFullscreen', function () {
                ;(i._updatesSuspended = !1), i.forceUpdate(), i._ref && i._ref.resumeUpdates()
              })
            var o = i._findInitialAnchor(e.initialAnchors || [])
            return (
              (i._initialItemIndex = o ? o.anchorIndex : 0),
              (i._initialAnchor = o && o.anchor),
              (i._offsetHandler = new Gi(e.viewport)),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  var e = this.props,
                    t = e.anchoring,
                    n = e.viewport
                  this.setState({ scrollHeadroom: t.initialScrollHeadroom(n) })
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  var n = !Vi()(this.props, e) || !Vi()(this.state, t)
                  return !this._updatesSuspended && n
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this._initialAnchor && this._scrollToAnchor(this._initialAnchor),
                    this._requestAnimationFrame(function () {
                      var t = e.props,
                        n = t.list,
                        r = t.onPositionRestored
                      t.retryPositionRestoration &&
                        e._initialAnchor &&
                        !!n.find(function (t) {
                          var n = t.id
                          return e._initialAnchor && n === e._initialAnchor.id
                        }) &&
                        e._initialAnchor &&
                        e._scrollToAnchor(e._initialAnchor)
                      r(),
                        e._requestAnimationFrame(function () {
                          e._relaxScrollHeadroom()
                        })
                    }),
                    (this._unlistenFullscreenEnter = Ui.a(this._handleEnterFullscreen)),
                    (this._unlistenFullscreenExit = Ui.b(this._handleExitFullscreen))
                },
              },
              {
                key: 'getAnchors',
                value: function (e) {
                  var t = e || (this._ref && this._ref.getPositioning())
                  return t ? this.props.anchoring.anchorCandidates(t) : []
                },
              },
              {
                key: 'getPositioning',
                value: function () {
                  return this._ref && this._ref.getPositioning()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._unmounted = !0),
                    this._offsetHandler.teardown(),
                    this._unlistenFullscreenEnter && this._unlistenFullscreenEnter(),
                    this._unlistenFullscreenExit && this._unlistenFullscreenExit()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.list,
                    n = e.renderItem,
                    r = e.renderList,
                    a = this.state.scrollHeadroom
                  return g.a.createElement(
                    'div',
                    { ref: this._receiveWrapperNode, style: { paddingBottom: a } },
                    r({
                      initialItemIndex: this._initialItemIndex,
                      list: t,
                      renderItem: n,
                      ref: this._handleRefUpdate,
                      onHeightsUpdate: this._handleHeightsUpdate,
                    }),
                  )
                },
              },
              {
                key: '_scrollToAnchor',
                value: function (e) {
                  var t = this.props.anchoring,
                    n = this._ref && this._ref.getPositioning()
                  n && this._scrollBy(t.offsetToAnchor(n, e))
                },
              },
              {
                key: '_findInitialAnchor',
                value: function (e) {
                  var t = this.props.list
                  return e
                    .map(function (e) {
                      var n = Object(Hi.a)(t, function (t) {
                        return t.id === e.id
                      })
                      return n >= 0 ? { anchorIndex: n, anchor: e } : null
                    })
                    .find(function (e) {
                      return e
                    })
                },
              },
              {
                key: '_relaxScrollHeadroom',
                value: function () {
                  var e = this._ref && this._ref.getPositioning()
                  if (e) {
                    var t = this.props.anchoring.scrollHeadroom(e)
                    t < this.state.scrollHeadroom && this.setState({ scrollHeadroom: t })
                  }
                },
              },
              {
                key: '_scrollBy',
                value: function (e) {
                  this._offsetHandler.offsetBy(e)
                },
              },
              {
                key: '_requestAnimationFrame',
                value: function (e) {
                  var t = this
                  return window.requestAnimationFrame(function () {
                    t._unmounted || e()
                  })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(Ki, 'defaultProps', { anchoring: Di.a })
      var Yi = n('AOWc'),
        Xi = n('180P'),
        Qi = n('Ey+e'),
        Ji = n('SrIh'),
        Zi = n('E6XO'),
        $i = n('06eB'),
        eo = n.n($i),
        to = n('aITJ'),
        no = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        ro = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              m()(c()(i), '_perfReported', !1),
              m()(c()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              m()(c()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.onHeightChanged,
                  a = oe()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  a &&
                  a.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = a.contentRect.height), r(n, a.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, no() - i._perfStart), (i._perfReported = !0))
              }),
              m()(c()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((i._element = e), r(n, c()(i)), i._observeElement(e)) : (r(n, void 0), (i._element = void 0))
              }),
              (i._isResizeObserverHeightUpdatesEnabled =
                i.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                to.b.isDesktopOS() &&
                to.b.isSafari()),
              (i._resizeObserver = new window.ResizeObserver(i._handleResize)),
              (i._perfStart = no()),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.data
                  return t.render !== e.render || !eo()(n, e.data)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._resizeObserver && this._resizeObserver.disconnect()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.id,
                    r = t.setAPI
                  e.id !== n && (r(e.id, void 0), r(n, this))
                },
              },
              {
                key: 'measureHeight',
                value: function () {
                  return (
                    (this._currentHeight = this._element ? this._element.getBoundingClientRect().height : 0),
                    this._currentHeight
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.data,
                    n = e.render
                  return g.a.createElement('div', { ref: this._setRef }, n(t))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(ro, 'contextType', I.a)
      var ao = n('+d3d'),
        io = n('iChn'),
        oo = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(c()(e), '_cells', new Map()),
              m()(c()(e), '_heightUpdates', {}),
              m()(c()(e), '_visibilityMeasurements', new Map()),
              m()(c()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              m()(c()(e), '_reportVisibilityMeasurements', function () {
                if (e._visibilityMeasurements.size) {
                  var t = 0
                  e._visibilityMeasurements.forEach(function (e) {
                    return (t += e)
                  })
                  var n = Math.round(t / e._visibilityMeasurements.size),
                    r = to.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  Zi.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              m()(c()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              m()(
                c()(e),
                '_flushHeightUpdates',
                Object(ao.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              m()(c()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              m()(c()(e), '_handleDivRefUpdate', function (t) {
                e._div = t
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'getWrapperNode',
                value: function () {
                  return this._div
                },
              },
              {
                key: 'getItemHeights',
                value: function () {
                  var e = this,
                    t = this.props.list
                  return Object(io.a)(
                    t,
                    function (e) {
                      return e.id
                    },
                    function (t) {
                      var n = e._cells.get(t.id)
                      return n ? n.measureHeight() : 0
                    },
                  )
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._reportVisibilityMeasurements()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.blankSpaceAbove,
                    n = e.blankSpaceBelow
                  return g.a.createElement(
                    'div',
                    { ref: this._handleDivRefUpdate, style: { paddingTop: t, paddingBottom: n } },
                    this._renderContent(),
                  )
                },
              },
              {
                key: '_renderContent',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.list,
                    r = t.renderItem
                  return n.map(function (t) {
                    var n = t.data,
                      a = t.id
                    return g.a.createElement(ro, {
                      data: n,
                      id: a,
                      key: a,
                      onHeightChanged: e._handleCellHeightChanged,
                      onVisible: e._handleItemVisible,
                      render: r,
                      setAPI: e._setCellRef,
                    })
                  })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        so = n('oi7R'),
        co = n('aWzz'),
        lo = n('JD1h'),
        uo = n('OeMK'),
        po = n('0zXz'),
        ho = (n('IAdD'), n('jHwr')),
        mo = n('qdp+'),
        fo = (function () {
          function e(t) {
            var n = t.list,
              r = t.rectangles,
              i = t.sliceEnd,
              o = t.sliceStart,
              s = t.viewportRectangle
            a()(this, e),
              (this._viewportRectangle = s),
              (this._list = n),
              (this._rectangles = r),
              (this._sliceStart = o),
              (this._sliceEnd = i)
          }
          return (
            o()(e, [
              {
                key: 'getForViewport',
                value: function () {
                  return this._viewportRectangle
                },
              },
              {
                key: 'getForList',
                value: function () {
                  var e = this._list
                  if (0 === e.length) return new qi.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    a = t[n].getTop(),
                    i = t[r].getBottom() - a
                  return new qi.a(a, i)
                },
              },
              {
                key: 'getForAllItems',
                value: function () {
                  var e = this
                  return this._list.map(function (t) {
                    var n = t.id
                    return { id: n, rectangle: e._rectangles[n] }
                  })
                },
              },
              {
                key: 'getList',
                value: function () {
                  return this._list
                },
              },
              {
                key: 'getListLength',
                value: function () {
                  return this._list.length
                },
              },
              {
                key: 'getForItem',
                value: function (e) {
                  return this._rectangles[e]
                },
              },
              {
                key: 'findVisibleItems',
                value: function () {
                  var e = this,
                    t = this._viewportRectangle,
                    n = this._rectangles,
                    r = Object(Hi.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var a = Object(Hi.a)(
                    this._list,
                    function (e) {
                      var r = e.id
                      return !n[r].doesIntersectWith(t)
                    },
                    r,
                  )
                  return (
                    -1 === a && (a = this._list.length),
                    this._list
                      .slice(r, a)
                      .filter(function (t) {
                        var n = t.id
                        return e.isRendered(n)
                      })
                      .map(function (e) {
                        var t = e.id
                        return { id: t, rectangle: n[t] }
                      })
                  )
                },
              },
              {
                key: 'getRenderedItems',
                value: function () {
                  var e = this._rectangles
                  return this._list.slice(this._sliceStart, this._sliceEnd).map(function (t) {
                    var n = t.id
                    return { id: n, rectangle: e[n] }
                  })
                },
              },
              {
                key: 'findTopmostVisibleId',
                value: function () {
                  var e = this
                  return Object(mo.a)(this.getRenderedItems(), function (t) {
                    return t.rectangle.getTop() >= e._viewportRectangle.getTop() ? t.id : void 0
                  })
                },
              },
              {
                key: 'isRendered',
                value: function (e) {
                  return this._getRenderedIdSet().hasOwnProperty(e)
                },
              },
              {
                key: '_getRenderedIdSet',
                value: function () {
                  if (!this._renderedIdSet) {
                    for (var e = {}, t = this._sliceStart; t < this._sliceEnd; t++) e[this._list[t].id] = !0
                    this._renderedIdSet = e
                  }
                  return this._renderedIdSet
                },
              },
            ]),
            e
          )
        })(),
        vo = n('64vW'),
        go = function (e, t, n) {
          if (t < 0 || t >= e.length) return -1
          if (n(e[t])) return t
          for (var r = 1; ; r++) {
            var a = t - r,
              i = t + r,
              o = a < 0,
              s = i >= e.length
            if (o && s) break
            if (!s && n(e[i])) return i
            if (!o && n(e[a])) return a
          }
          return -1
        },
        bo = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            a = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = go(t, a, function (e) {
              var t = e.id
              return !Object(uo.a)(t) && i.hasOwnProperty(t) && i[t]
            })
          if (-1 === o) return null
          var s = Object(Hi.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Yi.a)(s >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(uo.a)(t[o - 1].id) && s > 0 && Object(uo.a)(n[s - 1].id) && (s -= 1),
            { sliceStart: s, sliceEnd: Math.min(n.length, s + r - a) }
          )
        },
        yo = { heightsReady: !0 },
        _o = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              m()(c()(i), '_updatesSuspended', !1),
              m()(c()(i), 'freezeUpdates', function () {
                i._updatesSuspended = !0
              }),
              m()(c()(i), 'resumeUpdates', function () {
                ;(i._updatesSuspended = !1), i._scheduleUpdate()
              }),
              m()(c()(i), '_handleHeightsChange', function (e) {
                i._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              m()(c()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              m()(c()(i), '_setNecessarySlice', function (e, t) {
                var n = i.state,
                  r = n.sliceEnd,
                  a = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: r }, { start: e, end: t }),
                  o = a.end,
                  s = a.start
                i._setSlice(s, o)
              }),
              m()(c()(i), '_setSlice', function (e, t) {
                if (!i._updatesSuspended) {
                  var n = i.state,
                    r = n.sliceEnd
                  ;(e === n.sliceStart && t === r) || i.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var o = i.props,
              s = o.initialItemIndex,
              l = o.list
            ;(i._assumedItemHeight = e.assumedItemHeight),
              (i._getSlice = function () {
                var e = i.props.list,
                  t = i.state,
                  n = t.sliceEnd,
                  r = t.sliceStart
                return i._getMemoizedSlice(e, r, n)
              }),
              (i._getMemoizedSlice = Object(se.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (i._getRectangles = function (e) {
                var t = e || c()(i),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  a = t.props.list
                return t._getMemoizedRectangles(a, r, n)
              }),
              (i._getMemoizedRectangles = Object(se.a)(function (e, t, n) {
                return Eo(e, t, n)
              })),
              (i._heights = {})
            var d = i.props,
              u = d.cacheKey,
              p = d.heightCache
            u && p.hasOwnProperty(u) && (i._heights = p[u]), (i.state = i._getDefaultSlice(l, s))
            var h = Object(ho.a)(function () {
              return i._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (i._scheduleUpdate = window.requestIdleCallback
                ? Object(ho.a)(function () {
                    return i._criticalUpdate()
                  }, window.requestIdleCallback)
                : h),
              (i._schedulePositioningNotification = Object(ho.a)(
                function () {
                  return i._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (i._handleScroll = Object(ao.a)(h, 100, { trailing: !0 })),
              (i._scheduleDebouncedUpdate = Object(zi.a)(function () {
                window.requestAnimationFrame(function () {
                  i._debouncedUpdate()
                })
              }, 500)),
              (i._removeDebouncedListener = e.viewport.addScrollListener(i._scheduleDebouncedUpdate)),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  ;(this._unlistenScroll = this.props.viewport.addScrollListener(this._handleScroll)),
                    this._postRenderProcessing({ hasListChanged: !0 })
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._unmounted = !0),
                    this._unlistenScroll && this._unlistenScroll(),
                    this._removeDebouncedListener()
                  var e = this.props,
                    t = e.cacheKey,
                    n = e.heightCache
                  t && (n[t] = this._heights)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this._postRenderProcessing({ hasListChanged: e.list !== this.props.list })
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.list,
                    n = this.state,
                    r = n.sliceEnd,
                    a = n.sliceStart,
                    i = e.list
                  if (i !== t) {
                    var o = bo({ list: t, nextList: i, sliceStart: a, sliceEnd: r }) || this._getDefaultSlice(i)
                    this._setSlice(o.sliceStart, o.sliceEnd)
                  }
                },
              },
              {
                key: 'UNSAFE_componentWillUpdate',
                value: function () {
                  this._prevPositioning = this.getPositioning()
                },
              },
              {
                key: 'getPositioning',
                value: function () {
                  var e = this.state,
                    t = e.sliceEnd,
                    n = e.sliceStart
                  return new fo({
                    viewportRectangle: this._getRelativeViewportRect(),
                    list: this.props.list,
                    rectangles: this._getRectangles(),
                    sliceStart: n,
                    sliceEnd: t,
                  })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.renderItem,
                    n = e.renderList,
                    r = this._computeBlankSpace(),
                    a = r.blankSpaceAbove,
                    i = r.blankSpaceBelow
                  return g.a.createElement(
                    vo.a.Provider,
                    { value: yo },
                    n({
                      ref: this._handleRefUpdate,
                      list: this._getSlice(),
                      blankSpaceAbove: a,
                      blankSpaceBelow: i,
                      renderItem: t,
                      onHeightsChange: this._handleHeightsChange,
                    }),
                  )
                },
              },
              {
                key: '_computeBlankSpace',
                value: function () {
                  var e = this.props.list,
                    t = this.state,
                    n = t.sliceEnd,
                    r = t.sliceStart,
                    a = this._getRectangles(),
                    i = 0 === e.length ? 0 : a[e[r].id].getTop() - a[e[0].id].getTop(),
                    o = Object(T.a)(e)
                  return {
                    blankSpaceAbove: i,
                    blankSpaceBelow: n >= e.length || !o ? 0 : a[o.id].getBottom() - a[e[n].id].getTop(),
                  }
                },
              },
              {
                key: '_postRenderProcessing',
                value: function (e) {
                  var t = e.hasListChanged,
                    n = e.newHeights
                  if (this._recordHeights(n).wasHeightChange || t) {
                    var r = this._prevPositioning
                    if (r) (0, this.props.onHeightsUpdate)(r, this.getPositioning())
                  }
                  var a = this.props,
                    i = a.minimumOffscreenToViewportRatio,
                    o = a.preferredOffscreenToViewportRatio
                  t || !this._sliceIncludesScaledViewport(i)
                    ? this._scheduleUpdate()
                    : this._sliceIncludesScaledViewport(o) || this._scheduleDebouncedUpdate(),
                    this._schedulePositioningNotification()
                },
              },
              {
                key: '_sliceIncludesScaledViewport',
                value: function (e) {
                  var t = this._computeSlice({ offscreenToViewportRatio: e }),
                    n = t.sliceEnd
                  return t.sliceStart >= this.state.sliceStart && n <= this.state.sliceEnd
                },
              },
              {
                key: '_recordHeights',
                value: function (e) {
                  var t = this
                  if (!this._ref) return { heightDelta: 0, wasHeightChange: !1 }
                  var n = e || this._ref.getItemHeights(),
                    r = !1,
                    a = Object.keys(n).reduce(function (e, a) {
                      var i = t._heights.hasOwnProperty(a) ? t._heights[a] : t._assumedItemHeight,
                        o = n[a]
                      return (r = r || i !== o), e + (o - i)
                    }, 0)
                  return (
                    r && (this._heights = Object.assign(y()({}, this._heights), n)),
                    { wasHeightChange: r, heightDelta: a }
                  )
                },
              },
              {
                key: '_criticalUpdate',
                value: function () {
                  var e = this._computeSlice({ offscreenToViewportRatio: this.props.minimumOffscreenToViewportRatio }),
                    t = e.sliceEnd,
                    n = e.sliceStart
                  'number' == typeof n && 'number' == typeof t && this._setNecessarySlice(n, t)
                },
              },
              {
                key: '_debouncedUpdate',
                value: function () {
                  var e = this._computeSlice({
                      offscreenToViewportRatio: this.props.preferredOffscreenToViewportRatio,
                    }),
                    t = e.sliceEnd,
                    n = e.sliceStart
                  'number' == typeof n && 'number' == typeof t && this._setSlice(n, t)
                },
              },
              {
                key: '_computeSlice',
                value: function (e) {
                  var t = e.offscreenToViewportRatio,
                    n = this.props.list
                  if (this._unmounted || 0 === n.length) return {}
                  var r = this._getRelativeViewportRect(),
                    a = r.getHeight() * t,
                    i = r.getTop() - a,
                    o = r.getBottom() + a,
                    s = this._getRectangles(),
                    c = Object(Hi.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > i
                    }),
                    l = c >= 0 ? c : n.length - 1,
                    d = Object(Hi.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return s[t].getTop() >= o
                      },
                      l,
                    ),
                    u = d >= 0 ? d : n.length
                  return this._schedulePositioningNotification(), { sliceStart: l, sliceEnd: u }
                },
              },
              {
                key: '_notifyPositioning',
                value: function () {
                  this._unmounted || (0, this.props.onPositioningUpdate)(this.getPositioning())
                },
              },
              {
                key: '_getRelativeViewportRect',
                value: function () {
                  if (!this._ref) return new qi.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new qi.a(0, 0)
                  var t = Math.ceil(e.getBoundingClientRect().top)
                  return this.props.viewport.getRect().translateBy(-t)
                },
              },
              {
                key: '_getDefaultSlice',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = this.props.viewport,
                    r = n.getRect().getHeight(),
                    a = y()(
                      y()({}, this),
                      {},
                      {
                        props: y()(y()({}, this.props), {}, { list: e }),
                        state: y()({}, this.state),
                        context: y()({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(a),
                    o = e[t].id,
                    s = i[o].getBottom(),
                    c = Object(Hi.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return i[t].getTop() - s >= r
                      },
                      t,
                    ),
                    l = c >= 0 ? c : e.length
                  return { sliceStart: t, sliceEnd: Math.min(e.length, l) }
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      m()(_o, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var Eo = function (e, t, n) {
          var r = {}
          return (
            e.reduce(function (e, a) {
              var i = a.id,
                o = t.hasOwnProperty(i) ? t[i] : n,
                s = new qi.a(e, o)
              return (r[i] = s), s.getBottom()
            }, 0),
            r
          )
        },
        So = _o,
        Ro = function (e) {
          return (
            Object(Ji.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xi.a)(e)
          )
        },
        Co = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              m()(c()(i), '_onDemandRenderer', function (e) {
                var t = i.props,
                  n = t.assumedItemHeight,
                  r = t.minimumOffscreenToViewportRatio,
                  a = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return g.a.createElement(
                  So,
                  Yt()({}, e, {
                    assumedItemHeight: o,
                    cacheKey: i.props.cacheKey,
                    minimumOffscreenToViewportRatio: r,
                    onPositioningUpdate: i._handlePositioningUpdate,
                    preferredOffscreenToViewportRatio: a,
                    renderList: i._viewRenderer,
                    viewport: i._viewport,
                  }),
                )
              }),
              m()(c()(i), '_viewRenderer', function (e) {
                return g.a.createElement(oo, e)
              }),
              m()(c()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              m()(
                c()(i),
                '_getMemoizedItemRenderer',
                Object(se.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              m()(c()(i), '_handleAnchorRendererRefUpdate', function (e) {
                i._anchorRenderer = e
              }),
              m()(c()(i), '_handlePositionRestored', function () {
                ;(0, i.props.onPositionRestored)(), (i._edgeProximity = i._createEdgeProximity())
                var e = i._anchorRenderer && i._anchorRenderer.getPositioning()
                e && i._edgeProximity.handlePositioningUpdate(e)
              }),
              m()(c()(i), '_handlePositioningUpdate', function (e) {
                i._edgeProximity && i._edgeProximity.handlePositioningUpdate(e)
                var t = i.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              m()(c()(i), '_getList', function () {
                var e = i.props,
                  t = e.footer,
                  n = e.header,
                  r = e.identityFunction,
                  a = e.items
                return i._getMemoizedList(r, a, n, t)
              }),
              m()(
                c()(i),
                '_getMemoizedList',
                Object(se.a)(function (e, t, n, r) {
                  var a = {},
                    i = t.reduce(function (t, n) {
                      var r = e(n) || n.id || Ro(n)
                      return (
                        Object(Yi.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        a.hasOwnProperty(r)
                          ? Object(Ji.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (a[r] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: uo.c,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return n
                            },
                          },
                        }
                      : null,
                    s = r
                      ? {
                          id: uo.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return i.length ? [].concat(Ke()(o ? [o] : []), Ke()(i), Ke()(s ? [s] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || r.viewport || so.a.root()),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'scrollToNewest',
                value: function (e) {
                  this._viewport.scrollToTop()
                },
              },
              {
                key: 'isAtNewest',
                value: function () {
                  var e = this._anchorRenderer && this._anchorRenderer.getPositioning()
                  return ((e && e.getForViewport().getTop()) || 0) < 50
                },
              },
              { key: 'adjustFocusBy', value: function (e) {} },
              {
                key: 'UNSAFE_componentWillMount',
                value: function () {
                  ;(this._isManualScrollRestoration = window.history && 'manual' === window.history.scrollRestoration),
                    this._loadStoredPosition(this.props)
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  this.props.cacheKey !== e.cacheKey &&
                    (this._preservePosition(this._customLocation), this._loadStoredPosition(e))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._preservePosition(this._customLocation)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.anchoring,
                    n = e.cacheKey,
                    r = e.items,
                    a = e.noItemsRenderer
                  return r.length
                    ? g.a.createElement(Ki, {
                        anchoring: t,
                        initialAnchors: this._initialAnchors || [],
                        key: n,
                        list: this._getList(),
                        onPositionRestored: this._handlePositionRestored,
                        ref: this._handleAnchorRendererRefUpdate,
                        renderItem: this._getItemRenderer(),
                        renderList: this._onDemandRenderer,
                        retryPositionRestoration: !this._isManualScrollRestoration,
                        viewport: this._viewport,
                      })
                    : a()
                },
              },
              {
                key: '_preservePosition',
                value: function (e) {
                  if (this._anchorRenderer && e) {
                    var t = this._anchorRenderer.getAnchors()
                    e.savePosition(t)
                  }
                },
              },
              {
                key: '_createEdgeProximity',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.nearEndProximityRatio,
                    r = t.nearStartProximityRatio
                  return new lo.b([
                    {
                      condition: lo.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: lo.a.nearTopRatio(r),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: lo.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: lo.a.nearBottom(5),
                      callback: function (t) {
                        return e.props.onAtEnd(t)
                      },
                    },
                  ])
                },
              },
              {
                key: '_loadStoredPosition',
                value: function (e) {
                  var t = this.context.getCustomLocation,
                    n = e.initialAnchor
                  if (
                    ((this._customLocation = t && t()), (this._initialAnchors = n ? [n] : []), this._customLocation)
                  ) {
                    var r = this._customLocation.getSavedPosition()
                    r && r.length ? (this._initialAnchors = r) : (this._initialAnchors = n ? [n] : []),
                      this._initialAnchors.length > 0 &&
                        this._customLocation &&
                        this._customLocation.claimScrollRestoration()
                  }
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      m()(Co, 'displayName', 'VirtualScroller'),
        m()(Co, 'contextTypes', { viewport: co.object, getCustomLocation: co.func }),
        m()(Co, 'defaultProps', {
          anchoring: Ki.defaultProps.anchoring,
          assumedItemHeight: So.defaultProps.assumedItemHeight,
          identityFunction: Ro,
          minimumOffscreenToViewportRatio: So.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: po.a,
          onPositionRestored: sr.a,
          onAtEnd: sr.a,
          onAtStart: sr.a,
          onNearEnd: sr.a,
          onNearStart: sr.a,
          onScrollEnd: sr.a,
          preferredOffscreenToViewportRatio: So.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var wo = Object(Qi.a)(Co),
        xo = n('mw9i'),
        Ao = De.a.i859a9d3,
        ko = De.a.i8ecae5b,
        To = function (e) {
          return e.entry.id
        },
        Io = function (e) {
          return e.entry.type === Y.b.MESSAGE
        },
        Oo = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              m()(
                c()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              m()(c()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case Y.b.TYPING_INDICATOR:
                    return n ? g.a.createElement(Li, { conversationId: n }) : null
                  case Y.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          Q.a,
                          { style: Mo.readOnly },
                          g.a.createElement(
                            J.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            ko,
                            ' ',
                            g.a.createElement(J.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Ao),
                          ),
                        )
                      : null
                  case Y.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(W, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              m()(c()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              m()(c()(i), '_setShouldFreezeUpdates', function (e) {
                i.setState({ shouldFreezeUpdates: e })
              }),
              (i._anchoring = w({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: x.a,
              })),
              (i.state = { activeEntryId: null, shouldFreezeUpdates: !1 }),
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
                    r = t.drawerHeader,
                    a = t.isWide,
                    i = t.onHistoryRequest,
                    o = t.style,
                    s = this.state.activeEntryId,
                    c = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        r = e.conversation,
                        a = e.footer,
                        i = e.readOnlyEntry,
                        o = (r && r.entries) || [],
                        s = o.reduce(function (e, a, i) {
                          n && 0 === i && e.push(x.b)
                          var s = Object(T.a)(e),
                            c = i === o.length - 1
                          if (
                            (e.push({
                              isRapidFire: !1,
                              isFirstRapidFire: !1,
                              isLastRapidFire: !1,
                              entry: a,
                              isActive: t === a.id,
                              isTrusted: !(null == r || !r.trusted),
                            }),
                            s)
                          ) {
                            var l = k(s.entry, a),
                              d = e[e.length - 2]
                            l
                              ? ((e[e.length - 1].isRapidFire = !0),
                                d.isRapidFire || ((d.isFirstRapidFire = !0), (d.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : d.isRapidFire && (d.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return a && s.push(a), r.read_only && i && s.push(i), s
                    })({
                      conversation: n,
                      footer: x.d,
                      readOnlyEntry: x.c,
                      canInjectConversationProfileInfoHeader: n.status === Y.c.AT_END && n.type === Y.a.ONE_TO_ONE,
                      activeEntryId: s,
                    }),
                    l = n.conversation_id,
                    d = function (e) {
                      return e[e.length - 1]
                    },
                    u = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Io(n)) return n
                      }
                      return d(e)
                    },
                    p = 'dm-activity-'.concat(l)
                  return g.a.createElement(V.a.Consumer, null, function (t) {
                    var s = t.isDrawer ? z.b.drawerHeaderRadius : Mo.scrollSpace
                    return g.a.createElement(
                      Q.a,
                      { style: [Mo.scrollContainer, s] },
                      g.a.createElement(
                        Ni.a,
                        { style: [Mo.scrollContainer, a && Mo.conversationsPadding, s, o] },
                        r || null,
                        n.status && n.status !== Y.c.AT_END ? g.a.createElement(ji.a, null) : null,
                        g.a.createElement(
                          xo.a,
                          { style: [Mo.content, Mo.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(Fi.b, {
                                anchoring: Di.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Io,
                                hasNewContentAtBottom: !0,
                                identityFunction: To,
                                initialAnchor: c.length > 0 ? f.a(To(u(c))) : void 0,
                                items: c,
                                nearStartProximityRatio: 2,
                                onNearStart: i,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : g.a.createElement(
                                Bi.a,
                                { identifier: p },
                                g.a.createElement(wo, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: To,
                                  initialAnchor: c.length > 0 ? f.a(To(d(c))) : void 0,
                                  items: c,
                                  nearStartProximityRatio: 2,
                                  onNearStart: i,
                                  renderer: e._renderItem,
                                  withoutHeadroom: !0,
                                }),
                              ),
                        ),
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
                    r = e.isFirstRapidFire,
                    a = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = this.props,
                    s = o.conversation,
                    c = o.inboxType,
                    l = o.isWide,
                    d = o.perspective,
                    u = o.scribeNamespace
                  return t && c
                    ? g.a.createElement(ci, {
                        conversation: s,
                        entry: t,
                        inboxType: c,
                        isActive: n,
                        isFirstRapidFire: r,
                        isLastRapidFire: a,
                        isRapidFire: i,
                        isWide: l,
                        key: t.id,
                        perspective: d,
                        scribeNamespace: u,
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
      m()(Oo, 'contextType', I.a)
      var Mo = L.a.create(function (e) {
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
    '64vW': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r).a.createContext({ heightsReady: !0 })
      t.a = a
    },
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return R
      }),
        n.d(t, 'c', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return w
        })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('fs1G'),
        d = c.a.c3752568,
        u = c.a.f78aa3e9,
        p = c.a.f9690dc0,
        h = c.a.i859a9d3,
        m = c.a.b1d35407,
        f = c.a.g539cca6,
        v = c.a.bbac0019,
        g = c.a.a1d2a68d,
        b = c.a.d4f2d9d8,
        y = c.a.hf383be4,
        _ = c.a.b25c5b2a,
        E = c.a.c4fdbd16,
        S = c.a.hf3e7e38,
        R = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: u }, showToast: !0 },
        w =
          ((r = { defaultToast: { text: d } }),
          i()(r, o.a.CurrentUserSuspended, {
            toast: { text: f, action: { label: h, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(r, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(r, o.a.DirectMessageDuplicate, { toast: { text: _ } }),
          i()(r, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: g, action: { label: h, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(r, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          i()(r, o.a.DirectMessageTooLongError, { toast: { text: v } }),
          i()(r, o.a.DirectMessageTweetNotFound, { toast: { text: b } }),
          i()(r, o.a.GenericBadRequest, { customAction: l.a }),
          i()(r, o.a.MessageSendError, { toast: { text: S } }),
          i()(r, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: h, link: 'https://support.twitter.com/articles/15364' }, text: m },
          }),
          i()(r, o.a.TargetUserNotFound, { toast: { text: y } }),
          i()(r, 'showToast', !0),
          r)
    },
    '89tF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('yH/f')
      function r(e) {
        var t = {}
        return (
          Object.keys(e).forEach(function (e) {
            t[e] = e
          }),
          Object.freeze(t)
        )
      }
    },
    '8W85': function (e, t, n) {
      'use strict'
      n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')
      var r = n('zb92')
      t.a = Object(r.a)({
        loader: function () {
          return Promise.all([n.e(0), n.e(23), n.e(167)])
            .then(n.bind(null, 'u2Vg'))
            .then(function (e) {
              return { default: e.__DANGEROUS_IMPORT__ }
            })
        },
      })
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return v
        })
      var r = n('yiKp'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        s = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        c = n('aWyx'),
        l = ['users'],
        d = ['conversation_id', 'participants'],
        u = ['conversation_id', 'participants', 'social_proof'],
        p = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        h = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var r = n.user_id,
              i = t[r] || { id_str: r }
            return (e[r] = a()(a()({}, n), {}, { user: i })), e
          }, {})
        }
      function m(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var f = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.conversation_id,
            i = e.participants,
            s = o()(e, d)
          return a()(
            a()({ conversation_id: r }, s),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: h(i, n) },
          )
        },
        v = function (e, t, n) {
          var r = e.conversation_id,
            i = e.participants,
            d = e.social_proof,
            p = o()(e, u),
            f = a()(
              a()({ conversation_id: r }, p),
              {},
              { entries: m(r, t), participants: h(i, n), social_proof: void 0 },
            )
          return (
            d &&
              (f.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === c.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      r = o()(t, l)
                    return a()(
                      a()({}, r),
                      {},
                      {
                        users: Object(s.a)(
                          n.map(function (t) {
                            return e[t]
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(d, n)),
            f
          )
        }
    },
    GSsg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = (n('yH/f'), n('B5iK')),
        c = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            a()(this, e)
            var r = n.interval,
              i = void 0 === r ? 6e4 : r,
              o = n.burstInterval,
              c = void 0 === o ? 3e3 : o,
              l = n.burstDuration,
              d = void 0 === l ? 3e5 : l
            ;(this.pollTimer = new s.b(i).interval(t)), (this.burstTimer = new s.a(this.pollTimer, c, d))
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
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        s = n('MWbm'),
        c = n('rHpw'),
        l = n('t62R'),
        d = c.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        u = o.a.d84b485d,
        p = o.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          r = 'follow' === t.reason ? u : p
        return n
          ? a.a.createElement(l.b, { color: 'gray700' }, r)
          : a.a.createElement(
              s.a,
              { style: d.root },
              a.a.createElement(l.b, { align: 'center', color: 'gray700', size: 'subtext2' }, r),
            )
      }
    },
    'I2k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('k49u'),
        o = n('lRnM'),
        s = n('LVU8'),
        c = function (e) {
          return a()({}, i.a.ClientNotPermitted, {
            customAction: function () {
              return Object(s.d)('/messages/', { statusCode: 401 }), Object(o.t)(e)
            },
          })
        }
    },
    J2UM: function (e, t, n) {
      'use strict'
      var r = n('0JOx')
      t.a = function () {
        return Object(r.h)().then(function (e) {
          return e.inputDetect
        })
      }
    },
    JD1h: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return u
        })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        c = {
          nearTop: function (e) {
            return function (t, n) {
              return n.getTop() - t.getTop() <= e
            }
          },
          nearBottom: function (e) {
            return function (t, n) {
              return t.getBottom() - n.getBottom() <= e
            }
          },
          nearTopRatio: function (e) {
            return function (t, n) {
              var r = n.getHeight() * e
              return n.getTop() - t.getTop() <= r
            }
          },
          nearBottomRatio: function (e) {
            return function (t, n) {
              var r = n.getHeight() * e
              return t.getBottom() - n.getBottom() <= r
            }
          },
        },
        l = Object.freeze({ INSIDE: 'inside', OUTSIDE: 'outside' }),
        d = function (e, t, n, r) {
          return (function (e, t) {
            return !e && t === l.INSIDE
          })(e, n)
            ? s.INITIAL_POSITION
            : (function (e, t) {
                return e === l.OUTSIDE && t === l.INSIDE
              })(e, n)
            ? s.MOVEMENT
            : (function (e, t) {
                return e === l.INSIDE && t === l.INSIDE
              })(e, n) && r !== t
            ? s.LIST_UPDATE
            : null
        },
        u = (function () {
          function e(t) {
            a()(this, e),
              (this._handlers = t.map(function (e) {
                return { zone: e, state: {} }
              }))
          }
          return (
            o()(e, [
              {
                key: 'handlePositioningUpdate',
                value: function (e) {
                  this._handlers.forEach(function (t) {
                    var n = t.state,
                      r = t.zone,
                      a = r.callback,
                      i = r.condition,
                      o = n.listLength,
                      s = n.proximity,
                      c = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? l.INSIDE : l.OUTSIDE
                      })(i, e),
                      u = e.getListLength(),
                      p = d(s, o, c, u)
                    ;(n.proximity = c), (n.listLength = u), p && a({ triggerCause: p })
                  })
                },
              },
            ]),
            e
          )
        })()
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        s = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        d = n.n(l),
        u = n('jV+4'),
        p = n('pjBI'),
        h = n('t62R'),
        m = n('rHpw'),
        f = n('p9G8'),
        v = d.a.cfd94063,
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        b = m.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        y = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === s.a.ONE_TO_ONE) {
              var i = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(i, 1)[0].name
            }
            return Object(f.a)(t, r)
          }
          var o = g(n)
          return Object(f.b)(o, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          l = void 0 !== i && i,
          d = e.newConversationParticipants,
          m = e.perspective,
          y = e.renderTimestamp,
          _ = e.textColor,
          E = void 0 === _ ? 'normal' : _,
          S = e.titleWeight,
          R = void 0 === S ? 'bold' : S,
          C = e.withScreenName,
          w = void 0 === C || C,
          x = e.withVDLRefresh,
          A = void 0 !== x && x
        if (t) {
          var k = y ? y() : null
          if (t.type === s.a.ONE_TO_ONE) {
            var T = Object(c.a)(t, m).map(function (e) {
                return e.user
              }),
              I = a()(T, 1)[0],
              O = o.a.createElement(u.a, {
                color: E,
                isProtected: I.protected,
                isVerified: I.verified,
                name: I.name,
                screenName: I.screen_name,
                weight: R,
                withLink: !1,
                withScreenName: w,
              })
            return (A && !r) || l ? o.a.createElement(p.a, null, O, k) : O
          }
          var M = t.participants,
            P = Object.keys(M).length
          if (r)
            return o.a.createElement(
              p.a,
              { color: E },
              o.a.createElement(h.b, { color: E, numberOfLines: 1, style: b.title, weight: R }, Object(f.a)(t, m, r)),
              A
                ? null
                : o.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: P }),
                  ),
            )
          var L = o.a.createElement(h.b, { color: E, numberOfLines: 1, weight: R }, Object(f.a)(t, m, r))
          return (A && !r) || l ? o.a.createElement(p.a, null, L, k) : L
        }
        var D = g(d)
        return o.a.createElement(h.b, { color: E, numberOfLines: 1, weight: R }, Object(f.b)(D, m))
      }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        d = n.n(l),
        u = n('5Yy7'),
        p = n.n(u),
        h = n('2VqO'),
        m = n.n(h),
        f = n('KEM+'),
        v = n.n(f),
        g =
          (n('7x/C'),
          n('JtPf'),
          n('Qavd'),
          n('+KXO'),
          n('z84I'),
          n('KqXw'),
          n('MvUL'),
          n('lTEL'),
          n('kYxP'),
          n('ERkP')),
        b = n.n(g),
        y = n('0JOx'),
        _ = n('zh9S'),
        E = n('MMRb'),
        S = n('CDB5'),
        R = n('RqPI'),
        C = n('1YZw'),
        w = n('hqKg'),
        x = n('kGix'),
        A = n('AQOc'),
        k = n('UhuB'),
        T = n('pNZL'),
        I = n('G6rE'),
        O = n('oEGd'),
        M = n('X/yg'),
        P = n('0KEI'),
        L = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        F = Object(w.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === x.a.LOADED ? t : e
          },
        ),
        B = Object(w.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, D(0, t))
          },
          R.q,
          function (e, t) {
            return t ? Object(M.d)(e, t) : void 0
          },
        ),
        j = Object(w.createSelector)(
          function (e, t) {
            return E.selectConversation(e, D(0, t))
          },
          E.selectEntries,
          M.l,
          R.q,
          M.m,
          M.n,
          I.e.selectAll,
          F,
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
          L.k,
          k.n,
          B,
          L.n,
          function (e, t) {
            var n = D(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, a, i, o, s, c, l, d, u, p, h, m, f, v, g, b) {
            var y = e && e.data
            return {
              conversation: (y && Object(A.a)(y, t, o)) || void 0,
              dataSaverMode: m,
              draftText: h,
              dtabBarInfo: g,
              fetchStatus: s,
              gifMetadata: p,
              inboxType: b,
              isDmReceiptSettingEnabled: f,
              cardUrl: c,
              isNewGroupConversation: n,
              isUploading: l,
              media: d,
              mediaUploadProgress: u,
              newConversationParticipants: a,
              perspective: r,
              quickReplyOptions: v,
              tweetAttachment: i,
            }
          },
        ),
        N = Object(O.d)(j, function (e) {
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
            cancelUpload: Object(M.a)(e.conversationId),
            createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationHistory: E.fetchConversationHistory,
            fetchConversationIfNeeded: E.fetchConversationIfNeeded,
            fetchInboxIfNeeded: E.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: E.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: _.a,
            leaveConversation: E.leaveConversation,
            removeMedia: Object(M.b)(e.conversationId),
            removeText: S.d,
            scribeAction: _.c,
            scribePageImpression: _.d,
            sendMessage: S.m,
            updateConversationReadState: E.updateConversationReadState,
            updateTweetDetailNav: T.b,
            updateTyping: E.updateTyping,
            removeConversation: E.removeConversation,
            popOutConversation: E.popOutConversation,
          }
          var t
        }),
        U = n('I2k/'),
        H = n('4AMG'),
        W = n('uB9N'),
        V = n('htvZ'),
        z = n('v//M'),
        q = n('3XMw'),
        G = n.n(q),
        K = n('UgB4'),
        Y = n('J2UM'),
        X = n('07FG'),
        Q = n('I8M8'),
        J = n('7myi'),
        Z = n('pHkl'),
        $ = n('883S'),
        ee = n('z0MJ'),
        te = n.n(ee),
        ne = n('Es6L'),
        re = n('LsPn'),
        ae = n('sl05'),
        ie = n('GSsg'),
        oe = n('ddV6'),
        se = n.n(oe),
        ce = (n('ho0z'), n('v6aA')),
        le = n('EbOo'),
        de = n('rxPX'),
        ue = Object(de.a)().propsFromActions(function () {
          return {
            addToast: C.b,
            block: I.e.block,
            createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: E.muteDMUser,
            unmuteDMUser: E.unmuteDMUser,
            unblock: I.e.unblock,
          }
        }),
        pe = (n('AQ79'), n('u0B7')),
        he = (n('uFXj'), n('97Jx')),
        me = n.n(he),
        fe = n('tZH3'),
        ve = n('/yvb'),
        ge = n('efqG'),
        be = G.a.ccf2f24e,
        ye = G.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            a = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = b.a.createElement(ve.a, me()({}, i, { accessibilityRole: 'button' }), ye),
            s = b.a.createElement(ve.a, me()({}, i, { onPress: r }), be),
            c = b.a.useCallback(
              function (e, t) {
                return b.a.createElement(fe.a, {
                  dismiss: e,
                  flatBorders: 'sheet' === t,
                  onBlockClick: n,
                  onReportClick: r,
                  requestorScreenName: a,
                  showBlock: !0,
                  showCancel: 'sheet' === t,
                })
              },
              [n, r, a],
            )
          return t ? s : b.a.createElement(ge.a, { renderContent: c }, o)
        },
        Ee = n('MWbm'),
        Se = n('cHvH'),
        Re = n('rHpw'),
        Ce = function (e) {
          var t = b.a.useContext(ce.a),
            n = t.featureSwitches.isTrue('dm_vdl_enabled') && t.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
            r = t.loggedInUserId,
            a = function () {
              return e.onAccept()
            },
            i = function () {
              return e.onBlock()
            },
            o = function () {
              return e.onReport()
            },
            s = function () {
              return e.onLeave()
            }
          return b.a.createElement(Se.a, null, function (t) {
            var c = t.windowWidth <= Re.a.theme.breakpoints.small
            return b.a.createElement(
              Ee.a,
              { style: we.actionsContainer },
              n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [we.actionFullWidth, we.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              b.a.createElement(
                Ee.a,
                { style: c ? we.actionFullWidth : [we.actionHalfWidth, we.actionMarginRight] },
                b.a.createElement(_e, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(M.i)(e.conversation, r).screenName,
                }),
              ),
              b.a.createElement(
                ve.a,
                {
                  onPress: s,
                  size: 'medium',
                  style: c ? [we.actionFullWidth, we.actionMarginTop] : [we.actionHalfWidth, we.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [we.actionFullWidth, we.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        we = Re.a.create(function (e) {
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
        Ae = n('t62R'),
        ke = n('eb3s'),
        Te = n('vMjK'),
        Ie = n('7JQg'),
        Oe = n('24HD'),
        Me = n('zCf4'),
        Pe = G.a.da878dcf,
        Le = G.a.d96cf7cd,
        De = (G.a.gde6b424, G.a.e308019b, G.a.gf5e9ea6, G.a.hc52446b),
        Fe = G.a.f7e1ad65,
        Be = { headline: G.a.gdf4b79f, text: G.a.bbf83d83, confirmButtonLabel: G.a.bb1d57b6 },
        je = Re.a.create(function (e) {
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
        Ne = Object(Ie.c)({ element: 'untrusted_interstitial' })(
          ue(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              r = e.scribeNamespace,
              i = b.a.useContext(ce.a),
              o = Object(Me.f)(),
              s = Object(Me.g)(),
              c = b.a.useState(!1),
              l = se()(c, 2),
              d = l[0],
              u = l[1],
              p = b.a.useState(!1),
              h = se()(p, 2),
              m = h[0],
              f = h[1],
              v = b.a.useCallback(
                function () {
                  return { items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? 1 : 0 }] }
                },
                [t.type],
              ),
              g = b.a.useCallback(
                function (e, t) {
                  n(a()(a()({}, r), {}, { action: e }), t || v())
                },
                [v, n, r],
              )
            b.a.useEffect(
              function () {
                g('impression')
              },
              [g],
            )
            var y,
              _,
              S,
              R,
              C = function () {
                u(!0), f(!1)
              },
              w = function () {
                u(!1)
              },
              x = function () {
                f(!1)
              },
              A = function () {
                var n,
                  r = e.conversationId,
                  a = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  c = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  l = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type: (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: c,
                    position: l,
                    inbox_type: Object(M.h)(a),
                    entry_point: Z.b.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: r }), g(o, d), k()
              },
              k = function () {
                var t = e.inboxType
                o.push(Object(M.e)(t))
              },
              T = function () {
                !(function () {
                  var n,
                    r = e.acceptConversation,
                    i = e.conversationId,
                    o = e.inboxType,
                    c = e.scribeAction,
                    l = e.scribeNamespace,
                    d = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    u = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (r(i),
                    c(a()(a()({}, l), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                      conversation_participant_count: d,
                      entry_point: Z.b.REQUEST_ACTION_SHEET,
                      inbox_type: Object(M.h)(o),
                      position: u,
                    }))
                })()
              },
              I = function (t) {
                return function () {
                  var n = e.addToast,
                    r = e.block,
                    a = e.createLocalApiErrorHandler
                  f(!1),
                    r(t).then(function () {
                      n({ action: { label: Te.c, onAction: O(t) }, text: Te.a })
                    }, a(le.a)),
                    g('block')
                }
              },
              O = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), g('unblock')
                }
              },
              P = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return b.a.createElement(
              b.a.Fragment,
              null,
              b.a.createElement(
                Ee.a,
                { style: je.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return b.a.createElement(
                    Ae.b,
                    { style: je.copy },
                    e ? De : Fe({ senderName: Object(M.i)(t, n).name }),
                  )
                })(P),
                b.a.createElement(Ce, {
                  acceptButtonText: Pe,
                  conversation: t,
                  declineButtonText: Le,
                  isGroup: P,
                  onAccept: T,
                  onBlock: function () {
                    u(!1), f(!0)
                  },
                  onLeave: C,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (g('report'), o.push(Object(M.f)(t, window.location.pathname, r, n)))
                  },
                }),
              ),
              xe.b.isKaiOS()
                ? b.a.createElement(re.a, { leftText: Le, onLeftClick: C, onRightClick: T, rightText: Pe })
                : null,
              d
                ? b.a.createElement(ke.a, {
                    confirmButtonLabel: Be.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Be.headline,
                    onCancel: w,
                    onConfirm: A,
                    text: Be.text,
                  })
                : null,
              m
                ? ((y = i.loggedInUserId),
                  (_ = Object(M.i)(t, y)),
                  (S = _.idStr),
                  (R = _.screenName),
                  Object(Oe.j)({ confirmation: Object(Oe.f)(R), onClose: x, handleConfirm: I(S) }))
                : null,
            )
          }),
        ),
        Ue = n('yw4N'),
        He = n('rFBM'),
        We = n('mw9i'),
        Ve = n('jTgF'),
        ze = n('+d3d'),
        qe = n('mN6z'),
        Ge = b.a.createElement(K.a, null),
        Ke = G.a.badb01a0,
        Ye = G.a.e3275464,
        Xe = G.a.d6b11d9c,
        Qe = G.a.i7ca1446,
        Je = function (e) {
          return e && (e.tweet || e.media)
        },
        Ze = function (e) {
          var t,
            n = e.gifMetadata,
            r = void 0 === n ? {} : n,
            a = e.tweetAttachment,
            i = e.media
          return (
            a
              ? (t = { tweet: a })
              : i
              ? i.mediaFile
                ? (t = { media: i })
                : i.externalMediaDetails && (t = { media: i, provider: r.provider, gifUrl: r.url })
              : (t = null),
            t
          )
        },
        $e = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              v()(d()(i), '_composer', b.a.createRef()),
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
                  r = e.fetchInboxIfNeeded,
                  a = e.fetchUpdatesIfNeeded
                return r()
                  .then(function () {
                    if (t)
                      return i._fetchConversation(t).then(function () {
                        return i._requestWelcomeMessage(t)
                      })
                  })
                  .then(function () {
                    return a()
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
                  r = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    xe.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(d()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.inboxType,
                  a = e.scribeAction
                return t && i._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      b.a.createElement(Ne, {
                        acceptConversation: i._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: r,
                        leaveConversation: i._leaveConversation,
                        scribeAction: a,
                      })
                  : b.a.createElement(
                      b.a.Fragment,
                      null,
                      i._renderComposerBar(),
                      xe.b.isKaiOS()
                        ? b.a.createElement(re.a, {
                            leftText: Qe,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Ke,
                          })
                        : null,
                    )
              }),
              v()(d()(i), '_render', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.drawerHeader,
                  a = e.inboxType,
                  o = e.isWide,
                  s = e.perspective,
                  c = e.scribeNamespace,
                  l = i.state,
                  d = l.attachment,
                  u = l.composerHeight
                return b.a.createElement(
                  V.b,
                  { key: n },
                  b.a.createElement(
                    He.a,
                    { allowDragDrop: !Je(d), onFilesAdded: i._handleDragDrop, style: ae.a.dragDrop },
                    b.a.createElement(
                      Ue.a,
                      {
                        style: [
                          ae.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(t) && { paddingBottom: u },
                        ],
                      },
                      s && t
                        ? b.a.createElement(H.a, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: a,
                            isWide: o,
                            onHistoryRequest: i._handleHistoryRequest,
                            perspective: s,
                            scribeNamespace: c,
                            style: ae.a.activity,
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
                      r = e.updateTyping
                    t && r({ conversationId: t }).catch(n())
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
              v()(d()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(d()(i), '_handleSendMessage', function (e, t) {
                var n,
                  r,
                  o = i.props,
                  s = o.addToast,
                  c = o.cardUrl,
                  l = o.conversation,
                  d = o.conversationId,
                  u = o.createLocalApiErrorHandler,
                  p = o.gifMetadata,
                  h = o.history,
                  m = o.location,
                  f = o.newConversationParticipants,
                  v = o.perspective,
                  g = o.scribeAction,
                  b = o.scribeNamespace,
                  y = o.sendMessage,
                  _ = o.tweetAttachment,
                  S = i.state.attachment,
                  R = S && S.media,
                  C = null != l && l.participants ? Object.keys(l.participants).length : 0,
                  w = (null == l ? void 0 : l.type) === E.CONVERSATION_TYPE.GROUP,
                  x = 'unknown'
                if (
                  (e.quickReply ||
                    R ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  x = 'gif'
                else if (c) x = 'card'
                else if (_) x = 'tweet'
                else {
                  var A,
                    k = null == S || null === (A = S.media) || void 0 === A ? void 0 : A.mediaFile,
                    T = null != k && k.isVideo ? 'video' : null != k && k.isGif ? 'gif' : 'photo'
                  x = k ? T : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    g(a()(a()({}, b), {}, { element: x, action: 'send_dm' }), {
                      conversation_id: d,
                      conversation_participant_count: C,
                      conversation_type: w ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  d
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (r = n.media) &&
                          void 0 !== r &&
                          r.uploading) ||
                        (i.setState({ attachment: null }), h.replace(m.pathname)),
                      y(
                        a()(
                          { senderId: v, cardUrl: c, conversationId: d, text: t, tweetAttachment: _ },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            R &&
                            (i._currentComposer && i._currentComposer.clear(),
                            i._currentComposer && i._currentComposer.focus()),
                            i.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((i.setState({ isSending: !1 }), !Object(Ve.d)(e) || e.code !== Q.b.CANCELED))
                            if (Object(Ve.d)(e)) {
                              var t = Object(Ve.b)(e, Xe)
                              t && s(t)
                            } else u($.b)(e)
                        }))
                    : (y({
                        senderId: v,
                        recipients:
                          f &&
                          f.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: _,
                      }).then(function (e) {
                        g(a()(a()({}, b), {}, { element: x, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: f ? f.length + 1 : 0,
                          conversation_type: Z.h.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          h.replace('/messages/'.concat(e))
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
                composerHeight: Re.a.theme.componentDimensions.appBarHeight,
                isSending: !1,
              }),
              i
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.scribeNamespace,
                    r = e.scribePageImpression,
                    a = e.updateTweetDetailNav
                  return (
                    r(n),
                    a(n),
                    t(n),
                    this._initializePolling({ interval: 3e3 }),
                    this._initializeLivePipeline(),
                    this._focusComposerIfNeeded(),
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
                        r = t.MOUSE,
                        a = t.detectedType,
                        i = e.props.quickReplyOptions
                      ;(a(n) || a(r)) && !i && e._currentComposer && e._currentComposer.focus()
                    })
                  })
                },
              },
              {
                key: '_initializeLivePipeline',
                value: function () {
                  var e = this,
                    t = this.props.conversationId
                  Object(y.h)().then(function (n) {
                    var r = n.LivePipeline
                    t &&
                      r.isSupportedAndReady(e.context.featureSwitches) &&
                      e.context.featureSwitches.isTrue('livepipeline_dm_features_enabled') &&
                      !e._livePipelineSubscription &&
                      ((e._livePipelineSubscription = r
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
                    r = e.removeConversation,
                    a = (null == t ? void 0 : t.entries) || []
                  this._updatePolling && this._updatePolling.stop(),
                    (this._updatePolling = void 0),
                    this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                    0 === a.length && r(n),
                    1 === a.length && 'welcome_message_create' === a[0].type && r(n)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n,
                    r = this.props,
                    a = r.conversation,
                    i = r.conversationId,
                    o = r.fetchStatus,
                    s = r.isUploading,
                    c = r.quickReplyOptions,
                    l = r.updateConversationReadState
                  i !== e.conversationId
                    ? (i && this._fetchConversation(i),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == a ? void 0 : a.sort_event_id) !==
                        (null === (n = e.conversation) || void 0 === n ? void 0 : n.sort_event_id) && l(i),
                      s || !e.isUploading || c || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === x.a.LOADED && o !== x.a.LOADED && i && this._fetchConversation(i))
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
                  return b.a.createElement(
                    We.a,
                    { style: [ae.a.root, xe.b.isKaiOS() && ae.a.kaiOSFix] },
                    b.a.createElement(z.a, {
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
                    r = e.conversation,
                    a = e.conversationId,
                    i = e.dataSaverMode,
                    o = e.draftText,
                    s = e.dtabBarInfo,
                    c = e.history,
                    l = e.isUploading,
                    d = e.mediaUploadProgress,
                    u = e.quickReplyOptions,
                    p = e.removeMedia,
                    h = e.richTextInputContext,
                    m = e.scribeNamespace,
                    f = e.typeaheadWrapper,
                    v = this.state,
                    g = v.attachment,
                    y = v.isSending,
                    _ = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : b.a.createElement(W.a, {
                        attachment: g,
                        conversationId: a,
                        disabled: l,
                        dtabBarInfo: s,
                        history: c,
                        isCardPreviewTombstoned: Object(X.a)(n),
                        isSending: y,
                        isUploading: l,
                        key: a,
                        mediaUploadProgress: d,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: i ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof _ ? _ : void 0,
                        primaryActionIcon: Ge,
                        primaryActionLabel: Ye,
                        quickReplyOptions: u,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: h,
                        scribeNamespace: m,
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
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    r = t.fetchConversationIfNeeded,
                    a = t.updateConversationReadState
                  return r({ conversationId: e })
                    .then(function () {
                      return a(e)
                    })
                    .catch(n(Object(U.a)(e)))
                },
              },
              {
                key: '_requestWelcomeMessage',
                value: function (e) {
                  var t = this.props,
                    n = t.addWelcomeMessageToConversation,
                    r = t.conversation,
                    a = t.createLocalApiErrorHandler,
                    i = t.location,
                    o = i.query.text,
                    s = Array.isArray(i.query.welcome_message_id)
                      ? i.query.welcome_message_id[0]
                      : i.query.welcome_message_id,
                    c = !!this.state.attachment || !(!o || s),
                    l = !r || !r.type || r.type === E.CONVERSATION_TYPE.GROUP,
                    d = r && r.participants && Object.keys(r.participants).length <= 1
                  return c || l || d ? Promise.resolve() : n(e, s).catch(a({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()($e, 'contextType', ce.a), v()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Ie.c)()(N($e))
    },
    RJrc: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        s = n('MWbm'),
        c = n('Qwev'),
        l = n('rHpw'),
        d = o.a.ffde2fdb,
        u = l.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return a.a.createElement(s.a, { style: u.spinner }, a.a.createElement(c.a, { accessibilityLabel: d }))
      }
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r).a.createContext({ isDrawer: !1 })
      t.a = a
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'n', function () {
        return c
      }),
        n.d(t, 'm', function () {
          return l
        }),
        n.d(t, 'l', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return u
        }),
        n.d(t, 'h', function () {
          return p
        }),
        n.d(t, 'j', function () {
          return h
        }),
        n.d(t, 'k', function () {
          return m
        }),
        n.d(t, 'f', function () {
          return f
        }),
        n.d(t, 'i', function () {
          return v
        }),
        n.d(t, 'g', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return b
        }),
        n.d(t, 'a', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return E
        })
      n('z84I'), n('ho0z')
      var r = n('CDB5'),
        a = n('Myq3'),
        i = n('XnpN'),
        o = n('AQ79'),
        s = n('pHkl'),
        c = function (e, t) {
          return t.location && t.location.state && t.location.state.tweetAttachment
        },
        l = function (e, t) {
          return t.location && t.location.state && t.location.state.participants
        },
        d = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        u = function (e) {
          var t = e.message_data,
            n = s.d.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = s.d.TWEET)
              : r.photo
              ? (n = s.d.PHOTO)
              : r.animated_gif
              ? (n = s.d.GIF)
              : r.video
              ? (n = r.video.audio_only ? s.d.VOICE : s.d.VIDEO)
              : r.card
              ? (n = s.d.CARD)
              : null != t && t.text && (n = s.d.TEXT),
            n
          )
        }
      function p(e) {
        return e === o.d.SECONDARY ? s.c.REQUESTS : e === o.d.TERTIARY ? s.c.LOW_QUALITY : s.c.PRIMARY
      }
      function h(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function m(e, t) {
        return !!(e && e.video && h(t)) && !!e.video.audio_only
      }
      function f(e, t, n, r) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: r, scribeNamespace: n },
        }
      }
      function v(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(i.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var g = function (e) {
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
        y = function (e) {
          return function () {
            return r.b(e)
          }
        },
        _ = function (e) {
          return function (t) {
            return r.c(e, t)
          }
        },
        E = function (e, t) {
          var n = Object(a.a)(e, function (e) {
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
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        s = (n('2G9S'), n('tQbP'), n('aWyx')),
        c = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        d = function (e, t) {
          return l(e.join_time) - l(t.join_time)
        },
        u = function (e, t) {
          var n = e.user,
            r = t.user
          return Object(c.a)(n.id_str, r.id_str)
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
                var r = t.user,
                  a = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case a.id_str:
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
        h = n('tn7R'),
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          i = e.type,
          c = Object(h.a)(r),
          l = Object(m.a)(c, function (e) {
            return e.user.id_str === t
          }),
          d = o()(l, 2),
          u = d[0],
          f = d[1]
        return f.length ? (i === s.a.GROUP && 1 === f.length ? [].concat(a()(u), a()(f)) : n ? f.sort(p(n)) : f) : u
      }
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        a = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return a(this, 'a', 'name', e)
          },
        },
      )
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('aWyx'),
        o = n('XnpN'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('rHpw'),
        d = n('TIdA'),
        u = n('A91F'),
        p = n('jhWN'),
        h = n('9Xij'),
        m = n('Znyr'),
        f = n('cm6r'),
        v = n('U+bB'),
        g = n('MWbm'),
        b = c.a.fd48249b,
        y = l.a.create(function (e) {
          return {
            circle: { borderRadius: e.borderRadii.infinite, overflow: 'hidden' },
            container: { height: 'auto', width: '100%' },
            itemAccessory: { top: -e.spacesPx.space24, right: -e.spacesPx.space24 },
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
        _ = l.a.create(function (e) {
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
        E = l.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        S = function (e) {
          var t = e.left,
            n = e.right
          return a.a.createElement(
            g.a,
            { style: _.container },
            a.a.createElement(g.a, { style: _.left }, t),
            a.a.createElement(g.a, { style: _.right }, n),
          )
        },
        R = function (e) {
          var t = e.bottom,
            n = e.top
          return a.a.createElement(
            g.a,
            { style: E.container },
            a.a.createElement(g.a, { style: E.top }, n),
            a.a.createElement(g.a, { style: E.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              r = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return a.a.createElement(
              g.a,
              { key: t.id_str, style: y.container },
              a.a.createElement(p.a, { size: n || r, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var r = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return a.a.createElement(
                  g.a,
                  { key: e.id_str, style: y.container },
                  a.a.createElement(p.a, {
                    aspectRatio: r,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return a.a.createElement(h.a, { ratio: 1 }, a.a.createElement(S, { left: n[1], right: n[0] }))
            var r = a.a.createElement(R, { bottom: n[2], top: n[1] }),
              i = n[0]
            return a.a.createElement(S, { left: r, right: i })
          },
          r = e.conversation,
          s = e.link,
          c = e.perspective,
          _ = e.withBadge,
          E = r && r.avatar_image_https,
          C = r
            ? Object(o.a)(r, c).map(function (e) {
                return e.user
              })
            : [],
          w = C.slice(0, 3),
          x =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? a.a.createElement(d.a, {
                    accessibilityLabel: '',
                    aspectMode: u.a.SQUARE,
                    backgroundColor: l.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(r) ||
            (function (e) {
              return e ? a.a.createElement(v.a, { source: e }) : null
            })(E) ||
            (function (e) {
              var r = e.length
              return 0 === r ? null : 1 === r ? t(e[0]) : a.a.createElement(g.a, { style: y.circle }, n(e))
            })(w),
          A =
            s ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, C),
          k = _ && null != r && r.participants ? Object.keys(r.participants).length - 1 : 0
        return x
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                h.a,
                { ratio: 1 },
                A ? a.a.createElement(f.a, { interactiveStyles: null, link: A }, x) : x,
              ),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return a.a.createElement(
                      g.a,
                      { style: y.itemAccessory },
                      a.a.createElement(m.a, {
                        count: t,
                        standalone: !0,
                        style: y.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: b,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: k })
                : null,
            )
          : null
      }
    },
    b9JY: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return a
      }),
        n.d(t, 'e', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return o
        }),
        n.d(t, 'c', function () {
          return s
        }),
        n.d(t, 'a', function () {
          return l
        })
      n('vrRf')
      var r = n('aWyx'),
        a = function (e) {
          return e && e.type === r.b.MESSAGE
        },
        i = function (e) {
          return e && e.type === r.b.WELCOME_MESSAGE
        },
        o = function (e) {
          return e && e.type === r.b.TRUST_CONVERSATION
        },
        s = function (e) {
          return e && e.type === r.b.REACTION_CREATE
        },
        c = [
          r.b.CONVERSATION_AVATAR_UPDATE,
          r.b.CONVERSATION_NAME_UPDATE,
          r.b.JOIN_CONVERSATION,
          r.b.PARTICIPANTS_JOIN,
          r.b.PARTICIPANTS_LEAVE,
        ],
        l = function (e) {
          return e && c.indexOf(e.type) > -1
        }
    },
    cFyg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var r = n('ZUOq'),
        a = n('rHpw'),
        i = { durationMs: 300 },
        o = a.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginRight: e.spaces.space20,
              minWidth: r.a.dmDrawerWidth.min,
              maxWidth: r.a.dmDrawerWidth.max,
            },
            expandable: { transition: 'all '.concat(i.durationMs, 'ms ease') },
            expanded: { maxHeight: r.a.dmDrawerHeight.expanded, height: '80vh' },
            drawerHeaderRadius: {
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
            },
          }
        })
      t.b = o
    },
    dPJJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      }),
        n.d(t, 'b', function () {
          return l
        })
      n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var r = n('6/RC'),
        a = new Set(),
        i = new Set(),
        o = !1
      function s() {
        if (r.canUseDOM && !o) {
          var e = [
            'fullscreenElement',
            'webkitFullscreenElement',
            'webkitCurrentFullScreenElement',
            'mozFullScreenElement',
            'msFullscreenElement',
          ]
          ;['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'msfullscreenchange'].forEach(
            function (t) {
              document.addEventListener(t, function () {
                var t = e
                  .map(function (e) {
                    return document[e]
                  })
                  .filter(Boolean)[0]
                t
                  ? a.forEach(function (e) {
                      return e(t)
                    })
                  : i.forEach(function (e) {
                      return e()
                    })
              })
            },
          )
        }
        o = !0
      }
      var c = function (e) {
          return (
            o || s(),
            a.add(e),
            function () {
              return a.delete(e)
            }
          )
        },
        l = function (e) {
          return (
            o || s(),
            i.add(e),
            function () {
              return i.delete(e)
            }
          )
        }
    },
    'ejT/': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return r
      }),
        n.d(t, 'a', function () {
          return a
        })
      var r = function (e) {
          return { id: e, distanceToViewportTop: 0 }
        },
        a = function (e) {
          return { id: e, distanceToViewportBottom: 0 }
        }
    },
    g54k: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      })
      n('KOtZ'), n('7x/C')
      var r = n('hqKg'),
        a = (n('LW0h'), n('2G9S'), n('z84I'), n('s1N3')),
        i = function (e) {
          var t = e.sender_id,
            n = e.by_user_id,
            r = e.participants,
            i = void 0 === r ? [] : r
          return Object(a.a)(
            i
              .map(function (e) {
                return e.user_id
              })
              .concat([t, n])
              .filter(Boolean),
          )
        },
        o = n('G6rE'),
        s = n('oEGd'),
        c = function (e, t) {
          return {
            users: i(t).reduce(function (t, n) {
              return (t[n] = e[n]), t
            }, {}),
          }
        },
        l = Object(r.createSelector)(
          o.e.selectAll,
          function (e, t) {
            return t.entry
          },
          c,
        )
      t.a = Object(s.c)(l)
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
          return s
        }),
        n.d(t, 'c', function () {
          return c
        })
      n('ERkP')
      var r = n('aWyx'),
        a = function (e, t) {
          return {
            entry: { id: t, time: '', type: e },
            isActive: !1,
            isRapidFire: !1,
            isFirstRapidFire: !1,
            isLastRapidFire: !1,
            type: e,
          }
        },
        i = a(r.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        o = 'typingIndicator',
        s = a(r.b.TYPING_INDICATOR, o),
        c = a(r.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    htvZ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return E
      }),
        n.d(t, 'a', function () {
          return S
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('v6aA'),
        o = n('ddV6'),
        s = n.n(o),
        c = n('8W85')
      function l() {
        var e = a.a.useContext(S),
          t = s()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          i = s()(e.playerApi, 2)[1],
          o = s()(e.playerState, 2)[1]
        var l = {
          media: s()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: o,
        }
        return a.a.createElement(c.a, l)
      }
      var d = n('X/yg'),
        u = n('yiKp'),
        p = n.n(u),
        h = (n('849X'), n('TJCb'), n('89tF')),
        m = n('k89r')
      function f(e) {
        var t,
          n,
          r,
          i,
          o,
          s =
            ((t = a.a.useState(b.activeVoiceMessage)),
            (n = a.a.useState(b.playerApi)),
            (r = a.a.useState(b.playerState)),
            (o = Object(m.a)()),
            (i = a.a.useMemo(
              function () {
                var e = { page: 'messages', section: 'thread', component: 'message', element: 'voice' }
                function t(t) {
                  var n = t.action,
                    r = t.component,
                    a = void 0 === r ? e.component : r,
                    i = e.element
                  return { page: e.page, section: e.section, component: a, element: i, action: n }
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
            { activeVoiceMessage: t, playerApi: n, playerState: r, scribeAction: i })
        return a.a.createElement(y.Provider, { value: s }, e.children)
      }
      var v = {
        Timelines: Object(h.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function g(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? v.Timelines.inbox_timeline
          : t
          ? v.Timelines.low_quality_timeline
          : v.Timelines.requests_timeline
      }
      var b = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        y = a.a.createContext({
          activeVoiceMessage: [b.activeVoiceMessage, _],
          playerApi: [b.playerApi, _],
          playerState: [b.playerState, _],
          scribeAction: null,
        })
      function _() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function E(e) {
        var t = a.a.useContext(i.a).featureSwitches
        return Object(d.j)(t) ? a.a.createElement(f, null, e.children, a.a.createElement(l, null)) : e.children
      }
      var S = y
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
    kgfz: function (e, t) {
      function n(e) {
        var t = []
        for (var n in e) t.push(n)
        return t
      }
      ;(e.exports = 'function' == typeof Object.keys ? Object.keys : n).shim = n
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return h
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        o = n('aWyx'),
        s = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        d = l.a.b5b7fb93,
        u = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          i = e.participants,
          c = void 0 === i ? {} : i
        if (r === o.a.GROUP && a) return a
        if (Object.keys(c).length) {
          if (r === o.a.GROUP && n) return d
          var l = Object(s.a)(e, t).map(function (e) {
            return e.user
          })
          return h(l, t, r)
        }
      }
      var h = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.a.GROUP,
          r = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (r.length) {
          case 0:
            return u
          case 1:
            var s = a()(r, 1),
              c = s[0]
            return n === o.a.GROUP ? p({ name: c }) : c
          default:
            var l = !0
            return Object(i.a)(r, l)
        }
      }
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        d = n.n(l),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        _ = n.n(y),
        E = n('nT9l'),
        S = n('3XMw'),
        R = n.n(S),
        C = 'image',
        w = n('TIdA'),
        x = n('a6qo'),
        A = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        k = R.a.f93bb3ee,
        T = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  i = e.props,
                  s = i.accessibilityLabel,
                  c = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  l = o()(i, A)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    w.a,
                    a()({}, l, { accessibilityLabel: s, onVariantSelection: n, previewMode: r, testID: C }),
                  ),
                  c ? _.a.createElement(x.a, { align: 'left', altLabel: s }) : null,
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
                    acceptLabel: k,
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
    sl05: function (e, t, n) {
      'use strict'
      var r = n('rHpw')
      t.a = r.a.create(function (e) {
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
      var r = n('ERkP'),
        a = n.n(r),
        i = n('3XMw'),
        o = n.n(i),
        s = n('MWbm'),
        c = n('CKsB'),
        l = n('/yvb'),
        d = n('rHpw'),
        u = n('hiGS'),
        p = n('pu5c'),
        h = n('zIWA'),
        m = o.a.fcd4d489,
        f = o.a.gbed8594,
        v = o.a.g9074da4,
        g = o.a.ad63377d,
        b = o.a.h09b49f7,
        y = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        E = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        R = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            r = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            d = e.onReportClick,
            R = e.requestorScreenName,
            w = e.showBlock,
            x = e.showCancel,
            A = e.showDelete,
            k = a.a.useCallback(
              function () {
                d && d(), t()
              },
              [t, d],
            ),
            T = a.a.useCallback(
              function () {
                i && i(), t()
              },
              [t, i],
            ),
            I = a.a.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            )
          return a.a.createElement(
            s.a,
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            A
              ? a.a.createElement(c.a, {
                  Icon: u.a,
                  actionSubText: b,
                  actionText: r ? v : g,
                  onClick: I,
                  textColor: 'red500',
                })
              : null,
            w
              ? a.a.createElement(c.a, { Icon: p.a, actionSubText: f, actionText: m({ screenName: R }), onClick: T })
              : null,
            a.a.createElement(c.a, {
              Icon: h.a,
              actionSubText: E,
              actionText: r ? y : _({ screenName: R }),
              onClick: k,
            }),
            x ? a.a.createElement(l.a, { onPress: t, style: C.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      R.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var C = d.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = R
    },
    uB9N: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('97Jx'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        d = n.n(l),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        m = n.n(h),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        y = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(y),
        E = n('1YZw'),
        S = n('zh9S'),
        R = n('P1r1'),
        C = n('AspN'),
        w = n('rxPX'),
        x = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: R.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: C.b,
              addToast: E.b,
              processMultipleMedia: C.g,
              removeMediaUpload: C.i,
              scribeAction: S.c,
              preUploadMedia: C.e,
            }
          }),
        A = n('wpu3'),
        k = n('cOB2'),
        T = n('MWbm'),
        I = n('0FVZ'),
        O = n('Oe3h'),
        M = n('rHpw')
      var P = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            a = e.onLayout,
            i = e.sideNavPresent,
            s = e.style,
            c = _.a.useContext(k.a)
          return i
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(T.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s }, r),
              )
            : _.a.createElement(
                I.a.BottomComposer,
                null,
                _.a.createElement(O.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return _.a.createElement(
                    T.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s })),
                    r,
                    _.a.createElement(T.a, { style: !1 === c.keyboardVisible && L.offsetBottom }),
                  )
                }),
              )
        },
        L = M.a.create(function () {
          return { offsetBottom: { paddingBottom: M.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        F = n('htQn'),
        B = n('t62R'),
        j = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.id,
                  r = t.label
                ;(0, t.onClick)({ id: n, label: r })
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
                    r = e.label
                  return _.a.createElement(
                    F.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [N.root, n && N.isWide, !n && N.isNarrow],
                    },
                    _.a.createElement(B.b, { weight: 'bold' }, r),
                    _.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        N = M.a.create(function (e) {
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
        U = j,
        H = n('cHvH'),
        W = n('mw9i'),
        V = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              b()(p()(e), '_handleOptionChoose', function (t) {
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
                  return _.a.createElement(H.a, null, function (r) {
                    var a = r.windowWidth,
                      i = D.a.isTwoColumnLayout(a),
                      o = [i && z.isWide, i && n && z.oneButtonOnly, !i && z.isNarrow]
                    return _.a.createElement(
                      W.a,
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
        q = V,
        G = n('krmn'),
        K = n('cIoY'),
        Y = n('w3n3'),
        X = n('MLl7'),
        Q = n('3XMw'),
        J = n.n(Q),
        Z = n('J2UM'),
        $ = n('VPdC'),
        ee = n('pKoL'),
        te = n('eyty'),
        ne = n('oQhu'),
        re = n('JYMr'),
        ae = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        ie = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), b()(p()(e), 'state', { currentStepIndex: -1 }), e
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
                    t = e >= 0 && e < ae.length ? ae[e].progress : 0
                  return _.a.createElement(re.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < ae.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, ae[e].waitMs))
                },
              },
            ]),
            n
          )
        })(_.a.Component),
        oe = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSending,
                    n = e.isUploading,
                    r = e.progress
                  return t && !n
                    ? _.a.createElement(ie, null)
                    : _.a.createElement(re.a, { progress: t ? Math.max(r, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        se = n('Dtul'),
        ce = n('Es6L'),
        le = 'dmComposerAttachments',
        de = 'dmComposerTextInput',
        ue = 'dmComposerSendButton',
        pe = n('GZwR'),
        he = n('aITJ'),
        me = n('6OUF'),
        fe = n('9Xij'),
        ve = n('/yvb'),
        ge = n('OiMc'),
        be = n('v6aA'),
        ye = n('gpVt'),
        _e = n('Lsrn'),
        Ee = n('k/Ka'),
        Se = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ee.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_e.a.root, e.style],
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
      Se.metadata = { width: 24, height: 24 }
      var Re = Se,
        Ce = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ee.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_e.a.root, e.style],
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
      Ce.metadata = { width: 24, height: 24 }
      var we = Ce,
        xe = n('iySH'),
        Ae = J.a.ee230734,
        ke = J.a.ca0ce0e4,
        Te = J.a.cdcebd22,
        Ie = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Pe = Object(A.b)({ maxNumberOfPhotos: 1 }),
        Le = (function (e) {
          m()(n, e)
          var t = v()(n)
          function n(e, r) {
            var i, s, l
            c()(this, n),
              (l = t.call(this, e, r)),
              b()(p()(l), '_handleLayout', function (e) {
                var t = l.props.onHeightChange,
                  n = l.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(ce.a)() || (t && t(r.height)),
                  r.width <= M.a.theme.breakpoints.small && !n
                    ? l.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > M.a.theme.breakpoints.small && n && l.setState({ mediaButtonsCollapsible: !1 }))
              }),
              b()(p()(l), '_renderQuickReplyPicker', function () {
                var e = l.props.quickReplyOptions,
                  t = l.state.isQuickReplyOpen
                return e && t
                  ? _.a.createElement(q, { onOptionChoose: l._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              b()(p()(l), '_renderComposeBox', function () {
                return _.a.createElement(T.a, { style: De.composeBoxContainer }, l._renderMainContent())
              }),
              b()(p()(l), '_renderMainContent', function () {
                var e = l.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = l.state.value,
                  a = n
                return a
                  ? _.a.createElement(
                      a,
                      {
                        contextText: r,
                        isInline: !0,
                        onTextUpdated: t ? l._handleRichTextChange : l._handlePlainTextChange,
                        onTypeaheadStateChange: l._handleTypeaheadStateChange,
                        source: pe.d.ComposeMessage,
                      },
                      l._renderFieldTextInput,
                    )
                  : l._renderFieldTextInput()
              }),
              b()(p()(l), '_renderFieldTextInput', function (e) {
                var t = l.props,
                  n = t.disabled,
                  r = t.placeholderText,
                  a = t.richTextInputContext,
                  i = he.b.isKaiOS() ? Te : r || ke,
                  s = l.state,
                  c = s.editorState,
                  d = s.mediaButtonsCollapsible,
                  u = s.value,
                  p = !!a,
                  h = a ? { editorState: c, element: a.element } : void 0,
                  m = a
                    ? {
                        onChange: l._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: c, element: a.element },
                      }
                    : { onChange: l._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return _.a.createElement(
                  me.a,
                  o()(
                    {
                      contentAbove: l._renderAttachments(),
                      editable: !n,
                      emojiPickerButton: l._renderEmojiPicker(),
                      handleReturn: p ? l._handleReturn : void 0,
                      isCompact: !0,
                      leftAligned: !0,
                      maxNumberOfLines: p ? 8 : 4,
                      multiline: !0,
                      numberOfLines: 1,
                      onBlur: l._handleOnBlur,
                      onFilesAdded: l._handleAddMediaFiles,
                      onFocus: l._handleTextInputFocus,
                      onKeyPress: p ? void 0 : l._handleReturn,
                      placeholder: i,
                      ref: l._setTextInputRef,
                      richTextInputContext: n ? void 0 : h,
                      style: De.composeInput,
                      testID: de,
                      useCacheForDOMMeasurements: !l._isSendDisabled() && !d,
                      value: u,
                    },
                    m,
                  ),
                )
              }),
              b()(
                p()(l),
                '_getHandleRichTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), l._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                p()(l),
                '_getHandlePlainTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), l._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(p()(l), '_handleTypeaheadStateChange', function (e) {
                l.setState({ isTypeaheadActive: e })
              }),
              b()(p()(l), '_renderAttachments', function () {
                var e = l.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.isCardPreviewTombstoned,
                  a = e.isShareViaDM,
                  i = e.isUploading,
                  o = l.state.value,
                  s =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  c = s.height,
                  d = s.width,
                  u = null == t ? void 0 : t.media,
                  p = null == u ? void 0 : u.mediaMetadata,
                  h = null == p ? void 0 : p.altText,
                  m = null == p ? void 0 : p.defaultAltText,
                  f = Object(ye.b)(o)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  u
                    ? _.a.createElement(
                        T.a,
                        { style: De.attachmentContainer, testID: le },
                        _.a.createElement(
                          fe.a,
                          { ratio: d / c, style: De.aspectContainer },
                          _.a.createElement(
                            T.a,
                            { style: De.mediaPreviewContainer },
                            _.a.createElement(ee.a, {
                              accessibilityLabel: h || m,
                              mediaItem: u,
                              onClick: l._canEditImage ? l._handleClickMediaDetail : void 0,
                              onEdit: l._canEditImage || l._canEditVideo ? l._handleClickMediaDetail : void 0,
                              onRemove: l._handleRemoveMedia(u.id),
                              resizeIfNeeded: 'width',
                              style: De.mediaPreview,
                              withAltTextLabel: !!h,
                              withCloseButton: !i,
                              withEditButton: (l._canEditImage || l._canEditVideo) && !i,
                              withEditIcon: !0,
                            }),
                          ),
                        ),
                        t &&
                          t.provider &&
                          t.gifUrl &&
                          _.a.createElement(
                            T.a,
                            { style: De.gifAttribution },
                            _.a.createElement(K.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : f && !a
                    ? _.a.createElement(ye.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: De.cardPreviewContainer,
                        urls: f,
                      })
                    : null,
                )
              }),
              b()(p()(l), '_renderEmojiPicker', function () {
                return l.props.withEmojiPicker && he.b.isDesktopOS()
                  ? _.a.createElement(G.a, {
                      disabled: l.props.disabled,
                      onEmojiSelect: l._handleEmojiSelect,
                      onPress: l._handleTextInputFocus,
                      size: 'small',
                      textInputRef: l._textInput || void 0,
                    })
                  : null
              }),
              b()(p()(l), '_renderPrimaryActionButton', function (e) {
                var t = l.props,
                  n = t.primaryActionIcon,
                  r = t.primaryActionLabel,
                  a = t.quickReplyOptions,
                  i = l._hasMessageText()
                return !a || i || e
                  ? _.a.createElement(
                      ve.a,
                      {
                        accessibilityLabel: r,
                        disabled: l._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: l._handlePrimaryAction,
                        size: 'medium',
                        style: De.actionButton,
                        testID: ue,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : l._renderQRToggleButton()
              }),
              b()(p()(l), '_renderSecondaryActionButton', function () {
                var e = l.props,
                  t = e.secondaryActionDisabledPopoverRenderer,
                  n = e.secondaryActionLabel,
                  r = e.shouldEnableSecondaryActionFunc,
                  a = e.shouldShowSecondaryActionFunc
                if ((a && !a()) || !n) return null
                var i = !r || r(),
                  o = _.a.createElement(
                    ve.a,
                    {
                      accessibilityLabel: n,
                      disabled: !i,
                      onPress: l._handleSecondaryAction,
                      style: De.actionButton,
                      type: 'primaryOutlined',
                    },
                    l.props.secondaryActionLabel,
                  )
                return i || !t
                  ? o
                  : _.a.createElement(
                      ge.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              b()(p()(l), '_renderQRToggleButton', function () {
                var e = l.state.isQuickReplyOpen
                return _.a.createElement(ve.a, {
                  accessibilityLabel: Ie,
                  icon: e ? _.a.createElement(Re, null) : _.a.createElement(we, null),
                  onPress: l._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: De.actionButton,
                  type: 'brandText',
                })
              }),
              b()(p()(l), '_renderComposer', function () {
                var e = l.props.attachment,
                  t = Me(e),
                  n = l._renderComposeBox(),
                  r = l._renderPrimaryActionButton(t),
                  a = l._renderSecondaryActionButton()
                return _.a.createElement(
                  T.a,
                  { style: [De.composer, t && De.composerWithAttachment] },
                  t ? null : l._renderMediaButtons(),
                  n,
                  a,
                  r,
                )
              }),
              b()(p()(l), '_renderMediaButtons', function () {
                var e = l.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  r = l.state,
                  a = r.mediaButtonsCollapsed,
                  i = r.mediaButtonsCollapsible && a
                return _.a.createElement(
                  T.a,
                  { style: De.uploadButtons },
                  i
                    ? _.a.createElement(ve.a, {
                        accessibilityLabel: Ae,
                        icon: _.a.createElement(xe.a, null),
                        onMouseDown: l._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !i ? l._renderMediaPicker() : null,
                  t && !i ? l._renderGifButton() : null,
                )
              }),
              b()(p()(l), '_handleShowMediaControlsMouseDown', function () {
                var e = l.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                l.setState({ mediaButtonsCollapsed: !1 }),
                  t(a()(a()({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              b()(p()(l), '_handleReturn', function (e) {
                var t = e.nativeEvent,
                  n = t.ctrlKey,
                  r = t.key,
                  a = t.metaKey,
                  i = t.shiftKey,
                  o = 'Enter' === r
                return !l.state.isTypeaheadActive && o && l._keyboardOrMouseDetected && !(i || a || n)
                  ? (e.preventDefault(), l._handlePrimaryAction(e), 'handled')
                  : 'not-handled'
              }),
              b()(p()(l), '_handleClickMediaDetail', function () {
                var e = l.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.history
                if (l._canEditImage || l._canEditVideo) {
                  var a = t && t.media ? t.media.id : 0,
                    i = l._canEditVideo ? 'trimmer' : 'crop'
                  r.push('/messages/compose/media', { mediaId: a, conversationId: n, tab: i })
                }
              }),
              b()(p()(l), '_handleAddMediaFiles', function (e) {
                var t = l.props,
                  n = t.addMedia,
                  r = t.addToast,
                  a = t.dataSaverMode,
                  i = t.onAddMedia,
                  o = t.preUploadMedia,
                  s = t.processMultipleMedia,
                  c = t.removeMedia,
                  d = t.removeMediaUpload
                n(e, { location: te.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  l._validateMedia(e)
                    ? (i && i(t),
                      s(e, { onFailure: c }).then(function (e) {
                        a ||
                          o(
                            e.map(function (e) {
                              return e.id
                            }),
                          )
                      }))
                    : (r({ text: Oe }), d(t))
                })
              }),
              b()(p()(l), '_handleEmojiSelect', function (e) {
                var t = l.state.editorState,
                  n = l.props.richTextInputContext
                if (n && t) {
                  var r = n.insertTextAtCursor(t, e.text)
                  l._handleRichTextChange(r)
                }
              }),
              b()(p()(l), '_handleRemoveMedia', function (e) {
                return function () {
                  l.props.removeMedia && l.props.removeMedia(e)
                }
              }),
              b()(p()(l), '_handlePrimaryAction', function (e) {
                if (!l._isSendDisabled()) {
                  var t = l.props.onPrimaryAction
                  l._textInput &&
                    l._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    l._closeQuickReplyPicker()
                }
              }),
              b()(p()(l), '_handleSecondaryAction', function (e) {
                var t = l.props.onSecondaryAction
                l._textInput &&
                  l._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              b()(p()(l), '_handleRichTextChange', function (e) {
                var t = l.props,
                  n = t.onTyping,
                  r = t.richTextInputContext,
                  a = l.state.value,
                  i = e.getCurrentContent().getPlainText(),
                  o = r ? r.convertEmojiToEntities(e) : null
                l.setState({ editorState: o, value: i }), a !== i && (null == n || n())
              }),
              b()(p()(l), '_handlePlainTextChange', function (e) {
                var t = l.props.onTyping,
                  n = l.state.value,
                  r = e.target.value
                l.setState({ value: r }), n !== r && (null == t || t())
              }),
              b()(p()(l), '_handleOnBlur', function () {
                var e = l.props.onBlur,
                  t = l.state.mediaButtonsCollapsible
                e && e(), t && l.setState({ mediaButtonsCollapsed: !1 })
              }),
              b()(p()(l), '_handleTextInputFocus', function () {
                var e = l.props.quickReplyOptions,
                  t = l.state,
                  n = t.isQuickReplyOpen,
                  r = t.mediaButtonsCollapsible
                e && n && l._closeQuickReplyPicker(), r && l.setState({ mediaButtonsCollapsed: !0 })
              }),
              b()(p()(l), '_handleQROptionSelection', function (e, t) {
                var n = l.props,
                  r = n.disabled,
                  a = n.onPrimaryAction
                r || (a({ quickReply: { id: e, selected_id: t.id } }, t.label), l._closeQuickReplyPicker())
              }),
              b()(p()(l), '_handleQuickReplyPickerToggle', function () {
                l.setState({ isQuickReplyOpen: !l.state.isQuickReplyOpen })
              }),
              b()(p()(l), '_validateMedia', function (e) {
                return !Me(l.props.attachment) && Pe(e)
              }),
              b()(p()(l), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    l._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              b()(p()(l), '_isSendDisabled', function () {
                var e = l.props,
                  t = e.attachment,
                  n = e.canSendEmptyMessage,
                  r = e.disabled,
                  a = e.isUploading,
                  i = Me(t),
                  o = l._hasMessageText() || n,
                  s = !(!t || !t.media) && (t.media.needsProcessing || a)
                return r || (!o && !i) || s || a
              }),
              b()(p()(l), '_hasMessageText', function () {
                return !!(l.state.value || '').trim()
              }),
              b()(p()(l), '_closeQuickReplyPicker', function () {
                l.setState({ isQuickReplyOpen: !1 })
              }),
              b()(p()(l), 'handleAddMediaFiles', function (e) {
                return l._handleAddMediaFiles(e)
              }),
              b()(p()(l), '_setTextInputRef', function (e) {
                l._textInput = e
              })
            var d = e.prefillText,
              u = e.richTextInputContext
            return (
              (l.state = {
                isQuickReplyOpen: !0,
                value: d,
                editorState:
                  null !==
                    (i = null == u || null === (s = u.initEditorState) || void 0 === s ? void 0 : s.call(u, d)) &&
                  void 0 !== i
                    ? i
                    : null,
                isTypeaheadActive: !1,
                mediaButtonsCollapsed: !1,
                mediaButtonsCollapsible: !1,
              }),
              l
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
                  this._unlockReload()
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
                    r = e.isUploading,
                    a = e.mediaUploadProgress,
                    i = e.placeholderText,
                    o = e.style,
                    s = i || ke,
                    c = Object(ce.a)(),
                    l = c && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    P,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: c,
                      style: [De.root, l && De.dtabOffset, o],
                    },
                    _.a.createElement(oe, { isSending: n, isUploading: r, progress: n ? Math.max(a, 0.02) : 0 }),
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
                    style: De.mediaPicker,
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
                    gifSearchKeySource: X.a.DMComposition,
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
                    r =
                      null == n || null === (e = n.media) || void 0 === e || null === (t = e.mediaFile) || void 0 === t
                        ? void 0
                        : t.isVideo
                  return (
                    r &&
                      ((this._videoTrimmerEnabled = this.context.featureSwitches.isTrue(
                        'responsive_web_video_trimmer_enabled',
                      )),
                      (r = this._videoTrimmerEnabled)),
                    !!r
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
      b()(Le, 'contextType', be.a),
        b()(Le, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var De = M.a.create(function (e) {
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
      t.a = x.forwardRef(Le)
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return h
      }),
        n.d(t, 'a', function () {
          return f
        })
      n('z84I'), n('ho0z')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('aWyx'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.c1d4ac83,
        d = c.a.abc7b032,
        u = c.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return a.a.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        h = function (e, t) {
          return e >= 2
            ? a.a.createElement(
                c.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                a.a.createElement(p, { conversationId: t }, c.a.d1242bcc({ count: e })),
              )
            : a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        m = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? a.a.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var r = e.user_id,
                    o = n[r]
                  return o
                    ? a.a.createElement('span', { key: t }, t > 0 ? ', ' : null, a.a.createElement(i.b, null, o.name))
                    : null
                }),
              )
            : null
        },
        f = function (e, t, n, r) {
          var s,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? l
                  : (function (e) {
                      return a.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        a.a.createElement(i.b, null, e),
                      )
                    })(s)
                : d
            case o.b.CONVERSATION_NAME_UPDATE:
              var h = a.a.createElement(i.b, null, e.conversation_name)
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(h)
                  : (function (e, t) {
                      return a.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        a.a.createElement(i.b, null, e),
                        t,
                      )
                    })(s, h)
                : (function (e) {
                    return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(h)
            case o.b.JOIN_CONVERSATION:
              return (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name)
                ? (function (e) {
                    return a.a.createElement(
                      c.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      a.a.createElement(i.b, null, e),
                    )
                  })(s)
                : u
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(a.a.createElement(m, { entry: e, users: r }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, a.a.createElement(i.b, null, e), t)
                  : a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name),
                a.a.createElement(m, { entry: e, users: r }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
