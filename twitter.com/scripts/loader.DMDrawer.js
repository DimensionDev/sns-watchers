;(window.webpackJsonp = window.webpackJsonp || []).push([
  [173, 8],
  {
    '+0pD': function (e, t) {
      var n =
        '[object Arguments]' ==
        (function () {
          return Object.prototype.toString.call(arguments)
        })()
      function a(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function r(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = n ? a : r).supported = a), (t.unsupported = r)
    },
    '+Bsv': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('M2x3'),
        l = 'settingsAppBar',
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
            icon: r.a.createElement(s.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: h.button,
            testID: l,
            type: 'primaryText',
          })
        }),
        h = d.a.create(function (e) {
          return { button: { marginVertical: 'calc(-'.concat(e.spaces.space12, ')') } }
        })
      t.a = m
    },
    '06eB': function (e, t, n) {
      var a = Array.prototype.slice,
        r = n('kgfz'),
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
                    var c, d
                    if (s(e) || s(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (i(e)) return !!i(t) && ((e = a.call(e)), (t = a.call(t)), o(e, t, n))
                    if (l(e)) {
                      if (!l(t)) return !1
                      if (e.length !== t.length) return !1
                      for (c = 0; c < e.length; c++) if (e[c] !== t[c]) return !1
                      return !0
                    }
                    try {
                      var u = r(e),
                        p = r(t)
                    } catch (m) {
                      return !1
                    }
                    if (u.length != p.length) return !1
                    for (u.sort(), p.sort(), c = u.length - 1; c >= 0; c--) if (u[c] != p[c]) return !1
                    for (c = u.length - 1; c >= 0; c--) if (((d = u[c]), !o(e[d], t[d], n))) return !1
                    return typeof e == typeof t
                  })(e, t, n))
          )
        })
      function s(e) {
        return null == e
      }
      function l(e) {
        return (
          !(!e || 'object' != typeof e || 'number' != typeof e.length) &&
          'function' == typeof e.copy &&
          'function' == typeof e.slice &&
          !(e.length > 0 && 'number' != typeof e[0])
        )
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
    '180P': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('TJCb'), n('7x/C'), n('DZ+c'), n('KOtZ'), n('0zG9'), n('KqXw'), n('Ysgh'), n('tQbP'), n('7xRU')
      var a = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return r(n, 0).toString()
        },
        r = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), a = t, r = 0; r < n.length; r++) {
            ;(a = (a << 5) - a + n.charCodeAt(r)), (a &= a)
          }
          return a
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
        return s
      }),
        n.d(t, 'a', function () {
          return l
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
        s = function (e, t) {
          var n = o(t).find(function (t) {
            return t.endsWith(e)
          })
          if (n) return n.split(':')[0]
        },
        l = function (e) {
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
        return Mo
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        d = n.n(c),
        u = n('2VqO'),
        p = n.n(u),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ejT/')),
        v = n('ERkP'),
        g = n.n(v),
        y = n('yiKp'),
        b = n.n(y),
        _ = n('7n04'),
        E = n('Myq3'),
        S = n('VPAj'),
        C = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        I = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        w = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            a = function (e) {
              return Object(E.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return b()(
            b()({}, _.a),
            {},
            {
              initialScrollHeadroom: Object(S.a)(0),
              scrollHeadroom: Object(S.a)(0),
              offsetCorrection: function (e, r) {
                var i = a(e),
                  o = a(r),
                  s = o && (!i || i.id !== o.id),
                  l = o && t(o.data.data),
                  c = i && C(e, i.id)
                return (s && (l || c)) ||
                  (c &&
                    (function (e, t) {
                      var a = e.getForItem(n),
                        r = t.getForItem(n)
                      return !a || (r && r.getHeight() > a.getHeight())
                    })(e, r))
                  ? Math.max(0, I(r))
                  : _.a.offsetCorrection(e, r)
              },
            },
          )
        },
        x = (n('lTEL'), n('7x/C'), n('kYxP'), n('M+/F'), n('KOtZ'), n('gbD7')),
        k = n('X/yg'),
        R = (n('Blm6'), n('b9JY')),
        T = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(R.b)(e) && Object(R.b)(t)) {
            var n = e.message_data,
              a = n.sender_id,
              r = n.time,
              i = t.message_data,
              o = i.sender_id,
              s = i.time,
              l = parseInt(s, 10) - parseInt(r, 10)
            return a === o && l >= 0 && l <= 6e4
          }
          return !1
        },
        A = n('jat/'),
        O = n('MMRb'),
        M = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        F = n('XnpN'),
        D = n('LhSm'),
        L = n('I4+6'),
        P = n('rHpw'),
        N = n('PbQQ'),
        B = n('cm6r'),
        j = n('jV+4'),
        H = n('pBrB'),
        U = n('wCd/'),
        V = function (e, t) {
          var n = Object(F.a)(e, t).map(function (e) {
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
        z = P.a.create(function (e) {
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
        K = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            a = void 0 === n || n,
            r = g.a.useContext(M.a).loggedInUserId
          if (!t) return null
          var i = V(t, r || ''),
            o = i.userDescription,
            s = i.userEntities,
            l = i.userFollowerCount,
            c = i.userFriendsCount,
            d = i.userIdStr,
            u = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            h = i.userScreenName,
            f = i.userWithheldDescription,
            v = i.userWithheldEntities,
            y = !!(m && h && ((l && c) || p)),
            b = L.a.generate({
              color: P.a.theme.colors.text,
              backgroundColor: P.a.theme.colors.transparent,
              customFocusBackgroundColor: P.a.theme.colors.gray0,
              customHoverBackgroundColor: P.a.theme.colors.gray0,
              customPressedBackgroundColor: P.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(N.a.Consumer, null, function (e) {
            return g.a.createElement(
              B.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [z.root, a && y && z.borderBottom],
              },
              g.a.createElement(j.a, {
                isVerified: u,
                name: m,
                screenName: h,
                style: z.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && d
                ? g.a.createElement(H.a, {
                    description: o,
                    entities: s,
                    style: [z.profileInfoItemMargin, z.description],
                    userId: d,
                    withheldDescription: f,
                    withheldEntities: v,
                  })
                : null,
              l && c
                ? g.a.createElement(U.a, {
                    followersCount: l,
                    friendsCount: c,
                    screenName: h || '',
                    style: z.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? g.a.createElement(D.a, { joinDate: p }) : null,
            )
          })
        },
        W = n('V/6K'),
        q = n('cFyg'),
        G = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        Q = n('aA19'),
        Y = n('aWyx'),
        X = n('mN6z'),
        J = n('MWbm'),
        Z = n('t62R'),
        $ = n('jhWN'),
        ee = n('MAI/'),
        te = n('zQEV'),
        ne = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return g.a.createElement(Z.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        ae = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.entry,
                  r = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  s = Object(te.a)(a, r, i, o)
                switch (r) {
                  case Y.b.CONVERSATION_AVATAR_UPDATE:
                    var l = n.avatar_image_https === a.conversation_avatar_image_https
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && l
                        ? g.a.createElement(
                            J.a,
                            { style: re.conversationAvatarContainer },
                            g.a.createElement(Q.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      g.a.createElement(ne, null, s),
                    )
                  case Y.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(s),
                      d = e._getParticipantsFromEntry(),
                      u = g.a.createElement(
                        Z.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(d),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(d, u)
                    return g.a.createElement(g.a.Fragment, null, c, p)
                  default:
                    return g.a.createElement(ne, null, s)
                }
              }),
              h()(l()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return g.a.createElement(
                  B.a,
                  { interactiveStyles: null, link: o, style: re.userAddedYouContainer },
                  i
                    ? g.a.createElement($.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  g.a.createElement(ne, { link: o, style: re.userAddedYouText }, t),
                )
              }),
              h()(l()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  B.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: re.joinConversationDetails,
                  },
                  n,
                  g.a.createElement(ee.a, {
                    style: re.userAvatarFacepile,
                    userAvatarSize: 'xLarge',
                    userAvatarUrls: r,
                  }),
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
                  return g.a.createElement(J.a, { style: re.root }, this._renderContents())
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
                  return Object(te.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        re = P.a.create(function (e) {
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
        ie = Object(G.a)(ae),
        oe = n('ddV6'),
        se = n.n(oe),
        le = n('oQhu')
      var ce = Object(le.a)(function (e) {
          var t = P.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + P.a.theme.spacesPx.space12,
          }
        }),
        de = n('shC7'),
        ue = n('38/B'),
        pe = function (e) {
          return me(e, ue.a.reducedMotionEnabled)
        },
        me = Object(le.a)(function (e, t) {
          var n,
            a,
            r,
            i,
            o,
            s,
            l,
            c,
            d,
            u =
              ((n = ce(P.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ge[P.a.theme.scale]),
              (o = fe / i),
              (s = ve / a),
              (c = ve - (l = ve / 2)),
              (d = ve - l - r),
              {
                cssTransition: ue.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(be, ', opacity ').concat(be) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (de.a.getConstants().isRTL ? 1 : -1) * c }] },
                    received: { transform: [{ translateX: (de.a.getConstants().isRTL ? -1 : 1) * d }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (de.a.getConstants().isRTL ? 1 : -1) * ye[P.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (de.a.getConstants().isRTL ? -1 : 1) * (ye[P.a.theme.scale] + d) - l }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: fe } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: l / o,
                      transformOrigin: de.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: l / o,
                      transformOrigin: de.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: de.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: de.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: s }] },
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
      var he,
        fe = 60,
        ve = fe,
        ge = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        ye = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        be = '0.2s 0s ease-in-out',
        _e = n('+Kfv'),
        Ee = n('hqKg'),
        Se = n('oEGd'),
        Ce = n('zh9S'),
        Ie = n('Yatk'),
        we = n('G6rE'),
        xe = n('P1r1'),
        ke = { scribeAction: Ce.c },
        Re = Object(Ee.createSelector)(
          function (e, t) {
            return we.e.select(e, t.senderId)
          },
          xe.k,
          xe.q,
          function (e, t, n) {
            return { user: Object(Ie.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Te = Object(Se.f)(Re, ke),
        Ae = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Oe = n('rxPX'),
        Me = n('0KEI'),
        Fe = n('RqPI'),
        De = Object(Oe.a)()
          .propsFromState(function () {
            return { reporterCountry: Fe.y, reporterLanguage: Fe.o }
          })
          .propsFromActions(function () {
            return {
              addToast: Ae.b,
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: O.deleteEntry,
            }
          })
          .withAnalytics(),
        Le = n('k49u'),
        Pe = n('LVU8'),
        Ne = n('3XMw'),
        Be = n.n(Ne),
        je = Be.a.f58dff33,
        He = Be.a.ad5a8e8e,
        Ue =
          ((he = {}),
          h()(he, Le.a.MissingParameter, { toast: Object(Pe.a)(je) }),
          h()(he, Le.a.DirectMessageDestroyPermissionsError, { toast: { text: He } }),
          h()(he, 'showToast', !0),
          he),
        Ve = (n('jQ3i'), n('x4t0'), n('xCUF')),
        ze = n('uKEd'),
        Ke = [],
        We = Object(Ee.createSelector)(
          function (e) {
            return Object(ze.l)(e).entries
          },
          function (e, t) {
            return Object(ze.p)(e, t.entry.id) || Ke
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
        qe = {
          createReaction: ze.d,
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: Ve.d,
          removeReaction: ze.k,
        },
        Ge = Object(Se.f)(We, qe),
        Qe = n('RhWx'),
        Ye = n.n(Qe),
        Xe = n('33Kz'),
        Je = n('wTX1'),
        Ze = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            l = e.style,
            c = g.a.useContext(M.a).featureSwitches,
            d = Object(Xe.b)(r, c),
            u = t && d ? t({ emoji: d, count: n }) : void 0,
            p = L.a.generate({ backgroundColor: P.a.theme.colors.gray50, color: P.a.theme.colors.gray700 })
          return g.a.createElement(
            B.a,
            {
              accessibilityLabel: u,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: s,
              style: [$e.container].concat(Ye()(l || [])),
            },
            g.a.createElement(Z.b, { size: a, style: $e.unsetLineHeight }, d),
            n
              ? g.a.createElement(Je.a, { color: 'gray700', containerStyle: $e.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        $e = P.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        et = n('pHkl'),
        tt = n('Irs7'),
        nt = Be.a.ca7a2214,
        at = Be.a.fc0e94b7,
        rt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_handleReactionScribing', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.entry,
                  o = a.isGroupDM,
                  s = a.participantsCount,
                  l = n ? 'delete_reaction' : 'create_reaction',
                  c = Object(k.c)(i)
                r.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: l,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? et.i.GROUP : et.i.ONE_TO_ONE,
                    message_type: c,
                    reaction_emotion: t,
                  },
                })
              }),
              h()(l()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.createLocalApiErrorHandler,
                    i = a.createReaction,
                    o = a.dismiss,
                    s = a.entry,
                    l = a.fetchUpdatesIfNeeded,
                    c = a.perspective,
                    d = a.removeReaction,
                    u = { reaction_key: t, conversation_id: s.conversation_id, dm_id: s.id, perspective: c }
                  ;(n ? d : i)(u)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return l()
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
                    n = Object(Xe.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return g.a.createElement(Ze, {
                        accessibilityLabelFormatter: a ? nt : at,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, a),
                        style: [ot.reaction, a && ot.selectedReaction],
                      })
                    })
                  return g.a.createElement(J.a, { style: ot.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(rt, 'contextType', M.a)
      var it = Object(tt.a)(Ge(rt)),
        ot = P.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        st = n('OiMc'),
        lt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.isGroupDM,
                  i = n.participantsCount,
                  o = n.perspective
                return g.a.createElement(it, {
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
                    st.a,
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
      h()(lt, 'contextType', W.a)
      var ct = n('TnY3'),
        dt = n('mjJ+'),
        ut = n('Q0VY'),
        pt = n('eb3s'),
        mt = n('/yvb'),
        ht = n('ZToW'),
        ft = n('CaKu'),
        vt = n('i4Oy'),
        gt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        yt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            a = se()(n, 2),
            r = a[0],
            i = a[1]
          return !((0 === r || 1 === r) && e.length === i)
        },
        bt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var a = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (a) return yt(t.text, a.indices)
          if (n.card) {
            var r,
              i = ((null === (r = t.entities) || void 0 === r ? void 0 : r.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return yt(t.text, i && i.indices)
          }
          return !0
        },
        _t = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        Et = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        St = function (e, t, n) {
          var a = 1.25 * P.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        Ct = n('hiGS'),
        It = n('zIWA'),
        wt = n('Lsrn'),
        xt = n('k/Ka'),
        kt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(xt.a)(
            'svg',
            b()(
              b()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [wt.a.root, e.style],
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
      kt.metadata = { width: 24, height: 24 }
      var Rt = kt,
        Tt = n('DlVf'),
        At = n('ACHU'),
        Ot = n('UgB4'),
        Mt = n('fz3c'),
        Ft = Be.a.ba60339a,
        Dt = Be.a.j4bfee22,
        Lt = Be.a.d96cf7cd,
        Pt = Be.a.faddd3a2,
        Nt = Be.a.eb497e08,
        Bt = Be.a.b170974a,
        jt = Be.a.i202bd22,
        Ht = Be.a.f2e5491a,
        Ut = Be.a.f88553c8,
        Vt = Be.a.ifea3114,
        zt = Be.a.cac14829,
        Kt = Be.a.h63a5c3b,
        Wt = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  a = t.entry,
                  r = t.featureSwitches,
                  o = t.isSent,
                  s = t.reporterCountry,
                  l = t.reporterLanguage,
                  c = Mt.a.DMMessage,
                  d = n.contextualScribeNamespace,
                  u = [{ text: Ft, Icon: Ct.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!o)
                  if (Object(Mt.g)(r, c, s, l)) {
                    var p,
                      m = Object(Mt.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: c,
                        reportedConversationId: a.conversation_id,
                        reportedMessageId: a.id,
                        reportedUser: null === (p = a.message_data) || void 0 === p ? void 0 : p.sender_id,
                        scribeNamespace: n.contextualScribeNamespace,
                      })
                    u.push({
                      text: jt,
                      Icon: It.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(m) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    u.push({
                      text: jt,
                      Icon: It.a,
                      link: {
                        pathname: '/i/report/'.concat(c, '/').concat(a.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: a.conversation_id,
                          scribeNamespace: d,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    })
                return (
                  ft.a.isAvailable() && u.push({ text: Ht, Icon: Rt, onClick: i._handleCopyMessageText }),
                  g.a.createElement(dt.a, {
                    isFixed: i.context.isDrawer,
                    items: u,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              h()(l()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (ft.a.setString(n), t({ text: Ut })), e && e()
              }),
              h()(l()(i), '_handleForwardButton', function () {
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
                    state: { tweetAttachment: b()(b()({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              h()(l()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              h()(l()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  a = e.deleteEntry,
                  r = e.entry,
                  o = e.inboxType,
                  s = e.isGroupDM,
                  l = e.participantsCount,
                  c = Object(k.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: s ? et.i.GROUP : et.i.ONE_TO_ONE,
                    conversation_participant_count: l,
                    message_type: c,
                    inbox_type: Object(k.i)(o),
                  },
                }),
                  a({ conversationId: r.conversation_id, id: r.id }).catch(n(Ue))
              }),
              h()(l()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              h()(l()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              h()(l()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(k.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              h()(l()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              h()(l()(i), '_replaceMessageUrls', function () {
                var e = i.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  ut.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = _t(i.props.entry)),
              (i._isNarrow = vt.a.get('screen').width < P.a.theme.breakpoints.xSmall),
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
                    s = n.withVDLRefresh,
                    l = this._areActionsVisible()
                  return g.a.createElement(
                    J.a,
                    {
                      pointerEvents: l ? 'auto' : 'none',
                      style: [
                        Gt.messageActions,
                        r ? Gt.messageActionsLeft : Gt.messageActionsRight,
                        l ? Gt.visible : Gt.invisible,
                        s && Gt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? Gt.messageActionsMediaNarrow : Gt.messageActionsNarrow),
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
                    ? g.a.createElement(pt.a, {
                        confirmButtonLabel: Lt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Dt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: Pt,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return g.a.createElement(mt.a, {
                    accessibilityLabel: Vt,
                    hoverLabel: { label: Vt },
                    icon: Qt,
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
                    s = g.a.createElement(Tt.a, { style: i ? Gt.vdlActionIcon : Gt.actionIcon })
                  return g.a.createElement(
                    lt,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    g.a.createElement(mt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: Bt,
                      hoverLabel: { label: zt },
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
                    t = g.a.createElement(At.a, { style: e ? Gt.vdlActionIcon : Gt.actionIcon })
                  return g.a.createElement(mt.a, {
                    accessibilityLabel: Nt,
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
                    s = ((e = this.props.entry), !bt(e) && _t(e) && !ht.a.isEnabled)
                  return !i && (s || (n && !ht.a.isEnabled) || a || r || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Wt, 'contextType', W.a)
      var qt = Object(ct.a)(De(Wt)),
        Gt = P.a.create(function (e) {
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
        Qt = g.a.createElement(Ot.a, { style: Gt.vdlActionIcon }),
        Yt = n('97Jx'),
        Xt = n.n(Yt),
        Jt = (n('6U7i'), n('CDB5')),
        Zt = Object(Oe.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: O.removeEntry,
              sendMessage: Jt.m,
            }
          })
          .withAnalytics(),
        $t = '87.5%',
        en = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        tn = [],
        nn = function (e, t) {
          return Object(ze.p)(e, t.entryId) || tn
        },
        an = function (e) {
          return Object(ze.l)(e).entries
        },
        rn = {
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        on = Object(Se.e)(function () {
          return Object(Ee.createSelector)(an, nn, Fe.q, en.d, function (e, t, n, a) {
            var r,
              i = Object(Xe.a)(a, { includeInactive: !0 }),
              o = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, a) {
                var s = e[a] && e[a].data
                if (!s) return t
                if (!i.includes(s.reaction_key)) return t
                var l = (t.get(s.reaction_key) || 0) + 1
                return (
                  t.set(s.reaction_key, l),
                  (null == s ? void 0 : s.sender_id) === n && (r = s.reaction_key),
                  (o += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: r,
              totalReactionCount: o,
            }
          })
        }, rn),
        sn = (n('vfdX'), n('Ee2X'), []),
        ln = function (e, t) {
          return t.entryId
        },
        cn = function (e) {
          return Object(ze.l)(e).entries
        },
        dn = function (e, t) {
          return Object(ze.p)(e, ln(0, t)) || sn
        },
        un = function (e, t) {
          return we.e.selectMany(
            e,
            (function (e, t) {
              return Object(ze.q)(e, ln(0, t))
            })(e, t),
          )
        },
        pn = {
          removeReaction: ze.k,
          fetchUpdatesIfNeeded: Ve.d,
          createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        mn = Object(Se.e)(function () {
          return Object(Ee.createSelector)(cn, dn, Fe.q, un, en.d, function (e, t, n, a, r) {
            var i = Object(Xe.a)(r, { includeInactive: !0 }),
              o = []
            t.forEach(function (t) {
              var r = e[t] && e[t].data
              if (r && i.includes(r.reaction_key)) {
                var s = a.find(function (e) {
                    return e && e.id_str === r.sender_id
                  }),
                  l = s && {
                    avatarUri: s.profile_image_url_https,
                    userId: s.id_str,
                    reactionKey: r.reaction_key,
                    isLoggedInUser: s.id_str === n,
                    screenName: s.screen_name,
                    name: s.name,
                    isProtected: s.protected,
                    isVerified: s.verified,
                    time: r.time,
                  }
                l && o.push(l)
              }
            }),
              o.sort(function (e, t) {
                return t.time - e.time
              })
            var s = o.findIndex(function (e) {
              return e.userId === n
            })
            return s > -1 && o.push.apply(o, Ye()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, pn),
        hn = n('TIdA'),
        fn = n('htQn'),
        vn = Be.a.gf5e9ea6,
        gn = Be.a.a2d48778,
        yn = hn.a.createLayoutCache()
      var bn = P.a.create(function (e) {
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
          var t = g.a.useContext(M.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            o = r.avatarUri,
            s = r.isProtected,
            l = r.isVerified,
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
            p = g.a.createElement($.a, { imageLayoutCache: yn, screenName: d, size: 'xxLarge', uri: o }),
            m = g.a.createElement(Ze, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            h = g.a.createElement(j.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: l,
              name: c,
              screenName: d,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            fn.a,
            { link: { pathname: '/'.concat(d), anchorless: !0 }, style: [bn.root, i && bn.bottomBorder] },
            g.a.createElement(J.a, { style: bn.reactionColumn }, m),
            g.a.createElement(J.a, { style: bn.column }, p),
            g.a.createElement(J.a, { style: bn.bodyColumn }, g.a.createElement(J.a, { style: bn.body }, h)),
            a
              ? g.a.createElement(
                  J.a,
                  { style: bn.column },
                  g.a.createElement(
                    mt.a,
                    {
                      accessibilityLabel: gn({ emoji: Object(Xe.b)(r.reactionKey, t) }),
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
        Cn = Be.a.b772cd65,
        In = Be.a.c0098d49,
        wn = Be.a.j85999eb,
        xn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderContent', function (t, n) {
                return g.a.createElement(
                  J.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(l()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(En.a, { title: In })
                  : g.a.createElement(Z.b, { visuallyHidden: !0 }, In)
              }),
              h()(l()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  J.a,
                  { accessibilityLabel: wn, style: [kn.container, 'sheet' === n ? kn.sheet : kn.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(l()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    mt.a,
                    { key: 'button_done', onPress: e, style: kn.cancelButton, type: 'primaryOutlined' },
                    Cn,
                  )
                )
              }),
              h()(l()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return g.a.createElement(_n, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: a !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              h()(l()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var a = e.props,
                    r = a.conversationId,
                    i = a.createLocalApiErrorHandler,
                    o = a.entryId,
                    s = a.fetchUpdatesIfNeeded,
                    l = a.loggedInUserId,
                    c = a.removeReaction,
                    d = { reaction_key: t, conversation_id: r, dm_id: o, perspective: l }
                  n(), c(d).then(e._handleScribeRemoveReaction(t)).then(s).catch(i())
                }
              }),
              h()(l()(e), '_handleScribeRemoveReaction', function (t) {
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
      h()(xn, 'contextType', W.a)
      var kn = P.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Rn = Object(ct.a)(Object(tt.a)(mn(xn))),
        Tn = Be.a.h95f9e76,
        An = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(l()(a), '_handleScribeDMReactionSummary', function () {
                a.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              h()(l()(a), '_onSetReactionsNode', function (e) {
                a._measureWidths(e || void 0)
              }),
              h()(l()(a), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = a.props,
                  r = n.reactionsWithCounts,
                  i = n.selectedReactionKey,
                  o = a.state.emojiSize || 'headline1',
                  s = r.size - 1
                return Array.from(r, function (e, n) {
                  var a = se()(e, 2),
                    r = a[0],
                    l = a[1]
                  return g.a.createElement(Ze, {
                    count: l,
                    emojiSize: o,
                    emotion: r,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: r,
                    style: [
                      n === s && On.rightPadding,
                      On.elementPadding,
                      i === r ? On.selfSelect : null,
                      t && On.isHoveredDMReaction,
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
                  var s = L.a.generate({ backgroundColor: P.a.theme.colors.gray50, color: P.a.theme.colors.gray700 }),
                    l = Tn({ reactionCount: i })
                  return g.a.createElement(
                    J.a,
                    {
                      style: [
                        On.container,
                        a ? On.marginShort : On.marginLong,
                        r ? On.alignRight : On.alignLeft,
                        o ? On.visible : On.invisible,
                      ],
                    },
                    g.a.createElement(
                      Rn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        B.a,
                        {
                          accessibilityLabel: l,
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
                    var a = t.getBoundingClientRect().width,
                      r = (e ? e.getBoundingClientRect() : {}).width
                    ;(void 0 === r ? 0 : r) > a && (n.emojiSize = 'subtext2')
                  }
                  this.setState(b()({}, n))
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        On = P.a.create(function (e) {
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
            selfSelect: { borderColor: P.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        Mn = Object(tt.a)(on(An)),
        Fn = n('Xrkv'),
        Dn = Be.a.icd0bf34,
        Ln = Be.a.e8bd8fec,
        Pn = Be.a.b2d32fad,
        Nn = Be.a.a763d33e,
        Bn = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(l()(a), '_handlePress', function (e) {
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
                    J.a,
                    { style: jn.root },
                    g.a.createElement(
                      Z.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: jn.seenLabel },
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
                  return n ? (t ? Pn : Dn) : a.length ? Nn({ count: a.length }) : Ln
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
                        Be.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(Z.b, null, n),
                        g.a.createElement(
                          Z.b,
                          { color: 'link', onPress: e._handlePress },
                          Be.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Fn.a)(t, n)
                  return g.a.createElement(
                    Z.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: jn.namesList },
                    n ? g.a.createElement(r, { namesList: i, othersCount: a }) : g.a.createElement(Z.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        jn = P.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Hn = Bn,
        Un = n('t0aI'),
        Vn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user,
            r = zn({ entryId: t, participants: n, user: a })
          return { namesToDisplay: r, isSeenByEveryone: r.length === n.length - 1 }
        },
        zn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user
          return n.reduce(function (e, n) {
            var r = n.join_conversation_event_id,
              i = n.last_read_event_id,
              o = n.user.name,
              s = n.user_id !== a.id_str,
              l = i && 1 !== Object(Un.a)(t, i),
              c = !r || 1 !== Object(Un.a)(r, t)
            return s && l && c && e.push(o), e
          }, [])
        },
        Kn = n('IMYl'),
        Wn = n('21zW'),
        qn = n('gmpV'),
        Gn = Be.a.fad48ee9,
        Qn = Be.a.ba60339a,
        Yn = Be.a.d338f53e,
        Xn = Be.a.ae7d7a24,
        Jn = Be.a.d725a288,
        Zn = Be.a.bbe74f3f,
        $n = Be.a.h0e4cdf4,
        ea = Be.a.bfbc051c,
        ta = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  a = t.entryId
                ;(0, t.removeEntry)(n, null, { id: a })
              }),
              h()(l()(e), '_handleTryAgain', function () {
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
                    s = this._renderSentCheckmark(),
                    l = this._renderReactions(),
                    c = i || o || s,
                    d = a || r || l || c,
                    u =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    d &&
                    g.a.createElement(
                      J.a,
                      { style: [na.root, u && na.vdlRootMargin, t && na.sentMessage] },
                      a,
                      r,
                      l,
                      c
                        ? g.a.createElement(
                            B.a,
                            { interactiveStyles: null, onPress: n, style: t && na.sentContainer },
                            g.a.createElement(J.a, { style: t && na.groupedItems }, i, s),
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
                      J.a,
                      null,
                      g.a.createElement(Z.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Xn),
                      g.a.createElement(
                        J.a,
                        { style: na.groupedItems },
                        g.a.createElement(
                          Z.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Qn,
                        ),
                        g.a.createElement(Wn.a, null),
                        g.a.createElement(
                          Z.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Yn,
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
                    s = !r || a
                  return t
                    ? g.a.createElement(
                        J.a,
                        { style: o && na.footerPadderWithAvatar },
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
                    a = e.isDraft,
                    r = e.isError,
                    i = e.isGroupDM,
                    o = e.isSent,
                    s = e.participants,
                    l = e.user
                  return n && o && !a && !r
                    ? g.a.createElement(Hn, Xt()({ isGroupDM: i }, Vn({ entryId: t, participants: s, user: l })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement(Z.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Gn)
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
                    s = e.participants,
                    l = e.user,
                    c = Vn({ entryId: t, participants: s, user: l }).isSeenByEveryone
                  return !o || n || a || (i && !r)
                    ? null
                    : g.a.createElement(
                        Z.b,
                        { color: c ? 'primary' : 'gray700', style: na.checkmarkContainer },
                        g.a.createElement(Kn.a, { style: na.checkmark }),
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
                    s = e.isSent,
                    l = e.user.name,
                    c = e.withUserAvatar
                  if (n || a || (o && !i)) return null
                  var d,
                    u = new Date(Number(t))
                  d = Object(qn.c)(u) ? Jn(u) : Object(qn.d)(u) ? Zn({ time: Jn(u) }) : Object(qn.e)(u) ? $n(u) : ea(u)
                  var p = r && !s,
                    m = s ? 'right' : 'left'
                  return g.a.createElement(
                    J.a,
                    { style: [c && na.footerPadderWithAvatar, s && na.timestamp] },
                    g.a.createElement(
                      Z.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !ht.a.isEnabled },
                      p &&
                        g.a.createElement(
                          Be.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement(Z.b, null, l),
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
      h()(ta, 'contextType', M.a)
      var na = P.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: $t },
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
        aa = Zt(ta),
        ra = n('jtO7'),
        ia = P.a.create(function (e) {
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
        oa = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            a = e.isSent,
            r = e.label,
            i = e.onClick,
            o = e.outsideTopRounded,
            s = e.tcoUrl,
            l = [
              ia.root,
              n && ia.isLast,
              n && a && ia.sentLast,
              n && !a && ia.receivedLast,
              t && a && ia.insideTopRoundedSent,
              t && !a && ia.insideTopRoundedReceived,
              o && a && ia.outsideTopRoundedSent,
              o && !a && ia.outsideTopRoundedReceived,
            ]
          return g.a.createElement(
            J.a,
            { style: l },
            g.a.createElement(ra.a, { align: 'center', color: 'primary', label: r, link: s, onClick: i }),
          )
        },
        sa = n('fs1G'),
        la = (function (e) {
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
                      var s = 0 === o
                      return g.a.createElement(oa, {
                        insideTopRounded: s && (r || !i),
                        isLast: o === t.length - 1,
                        isSent: n,
                        key: o,
                        label: e.label,
                        onClick: a,
                        outsideTopRounded: s && r,
                        tcoUrl: e.tco_url,
                      })
                    })
                  return g.a.createElement(J.a, null, o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(la, 'defaultProps', { onCtaClick: sa.a, onImpression: sa.a })
      var ca = la,
        da = (n('1IsZ'), n('vjRr')),
        ua = n('EGrD'),
        pa = function (e, t) {
          return da.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        ma = Object(Oe.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: ua.c, card: pa }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Me.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: ua.a,
              loadAdFreeArticleDomainsFromPersistence: ua.b,
              popOutConversation: O.popOutConversation,
            }
          }),
        ha = P.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        fa = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            a = e.isVisible,
            r = void 0 === a || a,
            i = e.textContent
          return g.a.createElement(J.a, { style: [r ? ha.visible : ha.invisible, ha.root] }, n, t, i)
        },
        va = n('cTG8'),
        ga = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            a = void 0 !== n && n,
            r = e.isFailedDraft,
            i = e.isFirstRapidFire,
            o = void 0 !== i && i,
            s = e.isRapidFire,
            l = void 0 !== s && s,
            c = e.isSent,
            d = e.hasAssociatedAttachment,
            u = e.messageData,
            p = void 0 === u ? {} : u,
            m = e.rootStyle,
            h = e.tweetId,
            f = e.withCta,
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            b = g.a.useContext(M.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              m,
              y && ya.messageTextContainer,
              y && c && ya.sent,
              y && !c && ya.received,
              r && ya.failedDraft,
              l && !o && !c && ya.rapidFireReceived,
              l && !o && c && ya.rapidFireSent,
              d && c && ya.hasAssociatedAttachmentSent,
              d && !c && ya.hasAssociatedAttachmentReceived,
              y && _ && c && ya.vdlSent,
              y && a && c && ya.activeSent,
              y && _ && a && c && ya.vdlActiveSent,
              y && a && !c && !ht.a.isEnabled && ya.activeReceived,
              f && ya.withCta,
            ],
            S = [ya.tweetText, y && ya.textAlignLeft, !y && c && ya.textAlignRight],
            C = P.a.theme.colors,
            I = C.gray0,
            w = C.magenta500,
            x = C.primary,
            k = C.text,
            R = C.white,
            T = L.a.generate({ color: c ? R : k, backgroundColor: r ? w : c ? x : I }),
            A = (p.text && p.text.length) || 0
          return g.a.createElement(
            B.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? T : null, style: E },
            g.a.createElement(va.a, {
              color: P.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, A],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && c) || P.a.isDarkMode() ? 'whiteOnColor' : 'link',
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
        ya = P.a.create(function (e) {
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
      ga.defaultProps = { withMediaLinks: !1 }
      var ba = ga,
        _a = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            a = e.isFailedDraft,
            r = e.isFirstRapidFire,
            i = void 0 !== r && r,
            o = e.isRapidFire,
            s = void 0 !== o && o,
            l = e.isSent,
            c = e.messageData,
            d = e.withCta,
            u = e.withMessageBubble
          return g.a.createElement(ba, {
            isActive: n,
            isFailedDraft: a,
            isFirstRapidFire: i,
            isRapidFire: s,
            isSent: l,
            messageData: c,
            withCta: d,
            withMediaLinks: !0,
            withMessageBubble: u,
          })
        },
        Ea = n('LSr9'),
        Sa = n('aX4+'),
        Ca = n('/Ikv'),
        Ia = Ca.a.CardNames,
        wa = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e, a
            r()(this, n)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (a = t.call.apply(t, [this].concat(o))),
              h()(l()(a), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(
                l()(a),
                '_hasClaimsForAdFreeArticles',
                null === (e = a.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              h()(l()(a), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (a.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  a.setState(n)
                }
              }),
              h()(l()(a), '_handleOnClick', function (e) {
                var t = a.props,
                  n = t.card.binding_values,
                  r = t.conversationId,
                  i = t.popOutConversation
                if ((r && i(r), a._hasClaimsForAdFreeArticles)) {
                  var o = a.props,
                    s = o.adFreeArticleDomains,
                    l = o.createLocalApiErrorHandler,
                    c = o.fetchAdFreeToken,
                    d = new Ea.a(c, l()).getAdFreeArticlesClickHandler({
                      destinationUrl: Ca.a.getBindingValue(n, 'card_url'),
                      linkDomain: Ca.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    u = se()(d, 2),
                    p = u[0],
                    m = u[1]
                  p && m(e)
                }
              }),
              h()(l()(a), '_handleTextContentLayout', function (e) {
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
                    s = e.isSent,
                    l = e.messageData,
                    c = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    m = u.textContentWidth,
                    h = !!Object.values(Ia).includes(t.name),
                    f = St(n, p, m),
                    v = f.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    b = g.a.createElement(
                      J.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Sa.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: l.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withBorderShadow: y,
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    _ = n
                      ? g.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? xa.sentMessageWrapper : xa.receivedMessageWrapper,
                          },
                          g.a.createElement(ba, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: a,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: s,
                            messageData: l,
                            rootStyle: f.isTextSquared ? (s ? xa.textSentSquared : xa.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return h
                    ? g.a.createElement(fa, { attachmentContent: b, isVisible: f.compositeRendered, textContent: _ })
                    : g.a.createElement(_a, {
                        isActive: a,
                        isFailedDraft: r,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: s,
                        messageData: l,
                        withCta: c,
                        withMessageBubble: d,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(wa, 'defaultProps', { hasUserText: !1 }), h()(wa, 'contextType', M.a)
      var xa = P.a.create(function (e) {
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
        ka = ma(wa),
        Ra = Be.a.f720438f,
        Ta = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(l()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  a = 'left'
                return t ? (a = 'both') : n && (a = 'right'), Aa[a]
              }),
              h()(l()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              h()(l()(e), '_handleTextContentLayout', function (t) {
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
                    s = e.messageData,
                    l = e.withCta,
                    c = e.withMessageBubble,
                    d = this.state,
                    u = d.attachmentWidth,
                    p = d.textContentWidth
                  if (!s || !s.attachment || !s.attachment.fleet) return null
                  var m = St(t, u, p),
                    h = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    v = m.isTextSquared,
                    y = [
                      Oa.tombstoneWrapper,
                      o ? Oa.sentMessageWrapper : Oa.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    b = g.a.createElement(
                      J.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      g.a.createElement(Z.b, { color: 'gray700' }, Ra),
                    ),
                    _ = t
                      ? g.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Oa.sentMessageWrapper : Oa.receivedMessageWrapper,
                              !c && Oa.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(ba, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: a,
                            isFirstRapidFire: r,
                            isRapidFire: i,
                            isSent: o,
                            messageData: s,
                            rootStyle: v ? (o ? Oa.sentSquared : Oa.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: c,
                          }),
                        )
                      : null
                  return g.a.createElement(fa, { attachmentContent: b, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Aa = P.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Oa = P.a.create(function (e) {
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
        Ma = Ta,
        Fa = (n('849X'), n('TJCb'), n('prG5')),
        Da = n('RCZO'),
        La = n('A91F'),
        Pa = Be.a.b327c129,
        Na = function (e) {
          e.stopPropagation()
        },
        Ba = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            a = t.ext_alt_text || Pa,
            r = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            s = i.width,
            l = Object(Da.b)(t).rgb,
            c = g.a.createElement(Fa.a, {
              accessibilityLabel: a,
              aspectMode: La.a.withinRange(9 / 16, 10),
              backgroundColor: l,
              image: { url: r, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(B.a, { interactiveStyles: null, link: n, onPress: Na }, c) : c
        },
        ja = n('Modb'),
        Ha = n('lklz'),
        Ua = n('XrEN'),
        Va = n('ZvMt'),
        za = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && Ua.a.extractVideoProps(Ha.b.forDm(n), t)
          return a
            ? g.a.createElement(
                ja.a,
                Xt()({}, a, { aspectRatio: Va.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Ka = Object(Oe.a)().withAnalytics(),
        Wa = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width
                i.state.width !== t && i.setState({ width: t })
              }),
              h()(l()(i), '_getElement', function () {
                var e = i.props,
                  t = e.contentType,
                  n = e.isSensitive
                return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
              }),
              h()(l()(i), '_handleClick', function () {
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
                    s = i.width < P.a.theme.breakpoints.micro
                  return o
                    ? g.a.createElement(
                        J.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ga.root,
                            s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && qa[r],
                          ],
                        },
                        g.a.createElement(J.a, { style: Ga.description }, g.a.createElement(Z.b, null, a)),
                        g.a.createElement(
                          J.a,
                          { style: [Ga.button, s ? Ga.breakButtonWrapper : void 0] },
                          g.a.createElement(
                            mt.a,
                            { onClick: this._handleClick, size: 'small', style: Ga.buttonElement, type: 'brandText' },
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
      h()(Wa, 'defaultProps', { isSensitive: !1 })
      var qa = P.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ga = P.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: P.a.theme.spaces.space4,
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
        Qa = Object(tt.a)(Ka(Wa)),
        Ya = n('CoGJ'),
        Xa = g.a.createElement(Ya.a, null),
        Ja = Be.a.d9de7b57,
        Za = Be.a.f2879f4d,
        $a = Be.a.b518221e,
        er = Be.a.eeaa9f90,
        tr = Be.a.g2b43663,
        nr = Be.a.f277e949,
        ar = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(l()(e), '_renderAttachment', function () {
                var t,
                  n,
                  a = e.props,
                  r = a.entry,
                  i = a.hasUserText,
                  o = a.isFirstRapidFire,
                  s = a.isRapidFire,
                  l = a.isSent,
                  c = a.isTrusted,
                  d = a.messageData,
                  u = e.state,
                  p = u.attachmentWidth,
                  m = u.textContentWidth,
                  h = (d || {}).attachment,
                  f = r.is_draft,
                  v = St(i, p, m),
                  y = [
                    rr.mediaAttachment,
                    l && rr.isSent,
                    !l && rr.received,
                    l && v.isAttachmentSquared && rr.equalComponentDimensionsSent,
                    !l && v.isAttachmentSquared && rr.equalComponentDimensionsReceived,
                    s && !o && l && rr.rapidFireSent,
                    s && !o && !l && rr.rapidFireReceived,
                  ],
                  b = null
                if (
                  (!f && r.conversation_id && (b = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = g.a.createElement(Ba, { media: t, mediaUrl: b }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = g.a.createElement(za, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(k.l)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(za, { media: t, messageId: r.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : l ? 'right' : 'left',
                  E = t && n && (l ? n : e._getMediaContentWithGuard(t, c, n, _))
                return {
                  attachmentContent: g.a.createElement(J.a, { onLayout: e._handleAttachmentLayout, style: y }, E),
                  media: t,
                }
              }),
              h()(l()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var a = { attachmentWidth: n }
                  e.setState(a)
                }
              }),
              h()(l()(e), '_handleTextContentLayout', function (t) {
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
                    s = e.isSent,
                    l = e.messageData,
                    c = e.withCta,
                    d = e.withMessageBubble,
                    u = this.state,
                    p = u.attachmentWidth,
                    m = u.textContentWidth,
                    h = t.is_draft,
                    f = St(n, p, m),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    b = v.media,
                    _ = n
                      ? g.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? rr.sentMessageWrapper : rr.receivedMessageWrapper,
                          },
                          g.a.createElement(ba, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: h ? l : this._parseMessageData(l, b),
                            rootStyle: f.isTextSquared ? (s ? rr.sentSquared : rr.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: d,
                          }),
                        )
                      : null
                  return g.a.createElement(fa, { attachmentContent: y, isVisible: f.compositeRendered, textContent: _ })
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
                      var s = ('animated_gif' === e.type && tr) || ('video' === e.type && er) || $a
                      return g.a.createElement(
                        Qa,
                        {
                          contentType: e.type,
                          ctaText: s,
                          description: Za,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: a,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return g.a.createElement(
                      Qa,
                      {
                        contentType: e.type,
                        ctaText: nr,
                        description: Xa,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: a,
                      },
                      n,
                    )
                  return t
                    ? n
                    : g.a.createElement(
                        Qa,
                        { contentType: e.type, ctaText: nr, description: Ja, withSquareBottomBorderRadius: a },
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
                    ? b()(b()({}, e), {}, { entities: b()(b()({}, e.entities), {}, { urls: a, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(ar, 'contextType', M.a), h()(ar, 'defaultProps', { hasUserText: !1 })
      var rr = P.a.create(function (e) {
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
        ir = ar,
        or = Object(Oe.a)().propsFromActions(function () {
          return { markSpamStatus: O.markSpamStatus }
        }),
        sr = Be.a.fd07947f,
        lr = Be.a.c7a92dc9,
        cr = Be.a.f277e949,
        dr = Be.a.fb3ccb55,
        ur = or(
          (function (e) {
            d()(n, e)
            var t = p()(n)
            function n() {
              var e
              r()(this, n)
              for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                h()(l()(e), '_handlePress', function (t) {
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
                      Qa,
                      { contentType: 'dm', ctaText: cr, description: dr },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return g.a.createElement(
                      J.a,
                      { style: pr.buttons },
                      g.a.createElement(
                        mt.a,
                        { onPress: this._handlePress(!1), style: pr.leftButton, type: 'brandOutlined' },
                        lr,
                      ),
                      g.a.createElement(mt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, sr),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        pr = P.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        mr = n('U+bB'),
        hr = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        fr = P.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        vr = function (e) {
          var t = e.sticker
          return g.a.createElement(mr.a, { accessibilityLabel: t.display_name, source: hr(t), style: fr.stickerItem })
        },
        gr = n('XOJV'),
        yr = function (e, t) {
          var n,
            a = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (a && a.tweet) return a.tweet.status
        },
        br = Object(Oe.a)()
          .propsFromState(function () {
            return { tweet: gr.a.createHydratedTweetSelector(yr) }
          })
          .propsFromActions(function () {
            return { popOutConversation: O.popOutConversation }
          }),
        _r = n('b5s6'),
        Er = g.a.createElement(Z.b, { link: '/settings/safety' }),
        Sr = function (e) {
          return g.a.createElement(
            Be.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(Er, null, Be.a.adcf07b5),
          )
        },
        Cr = Be.a.e4df0ad7,
        Ir = Be.a.f277e949,
        wr = Be.a.b5b91d58,
        xr = Be.a.bb594d7b,
        kr = g.a.createElement(Sr, null)
      var Rr = P.a.create(function (e) {
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
        Tr = br(function (e) {
          var t = g.a.useContext(M.a).featureSwitches,
            n = e.conversationId,
            a = e.displaySensitiveMedia,
            r = e.hasUserText,
            i = void 0 !== r && r,
            o = e.isActive,
            s = void 0 !== o && o,
            l = e.isDmNsfwMediaFilterEnabled,
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
            C = se()(S, 2),
            I = C[0],
            w = C[1],
            x = g.a.useState(void 0),
            k = se()(x, 2),
            R = k[0],
            T = k[1],
            A = g.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            O = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  I !== t && w(t)
                }
              },
              [I],
            ),
            F = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  R !== t && T(t)
                }
              },
              [R],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var D = v.attachment.tweet,
            L = h ? 'sent' : 'received',
            P = St(i, I, R),
            N = g.a.createElement(_r.a, {
              onPress: A,
              style: [
                Rr[L],
                i && Rr.attachment,
                P.isAttachmentSquared ? (h ? Rr.sentAttachmentSquared : Rr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: D.status,
            }),
            B = P.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            j = (function () {
              if (!b) return null
              if (h) return N
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (l || void 0 === l)
                  return g.a.createElement(
                    Qa,
                    { contentType: 'photo', ctaText: xr, description: wr, withSquareBottomBorderRadius: B },
                    N,
                  )
              } else if (!a && b.possibly_sensitive)
                return g.a.createElement(
                  Qa,
                  { contentType: 'photo', ctaText: Ir, description: kr, withSquareBottomBorderRadius: B },
                  N,
                )
              return f
                ? N
                : g.a.createElement(
                    Qa,
                    { contentType: 'tweet', ctaText: Ir, description: Cr, withSquareBottomBorderRadius: B },
                    N,
                  )
            })(),
            H = g.a.createElement(J.a, { onLayout: O, style: Rr.attachment }, j),
            U = i
              ? g.a.createElement(
                  J.a,
                  { onLayout: F, style: h ? Rr.sentMessageWrapper : Rr.receivedMessageWrapper },
                  g.a.createElement(ba, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: c,
                    isFirstRapidFire: u,
                    isRapidFire: m,
                    isSent: h,
                    messageData: v,
                    rootStyle: P.isTextSquared ? (h ? Rr.sentSquared : Rr.receivedSquared) : void 0,
                    tweetId: D.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(fa, { attachmentContent: H, isVisible: P.compositeRendered, textContent: U })
        }),
        Ar = n('htvZ'),
        Or = n('MH+I'),
        Mr = n('5Ixf'),
        Fr = n('AtEG')
      function Dr(e) {
        var t,
          n,
          a = g.a.useContext(Ar.a),
          r = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var s = se()(a.activeVoiceMessage, 2),
          l = s[0],
          c = s[1],
          d = se()(a.playerApi, 1)[0],
          u = se()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = se()(l, 1)[0],
          h = e.messageId === m
        if (!p) return null
        var f = Pr(u),
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
          g.a.createElement(Lr, y)
        )
      }
      function Lr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          o = Pr(r),
          s = (null == o ? void 0 : o.currentTimeMs) || 0,
          l = (null == o ? void 0 : o.durationMs) || e.durationMs,
          c = Math.max(t ? l - s : l, 0)
        g.a.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          g.a.useEffect(
            function () {
              a && 0 === s && (a.play(), e.onPlay())
            },
            [a],
          )
        var d = P.a.isDarkMode() || n,
          u = { color: d ? 'whiteOnColor' : 'text' },
          p = [
            jr.voiceMessage,
            Hr({ isSent: n, squared: t }),
            n ? jr.voiceMessageSent : jr.voiceMessageReceived,
            pe(P.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? Mr.a : Fr.a
        return g.a.createElement(
          J.a,
          { style: [jr.container, pe(P.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            J.a,
            { style: p },
            g.a.createElement(J.a, { style: jr.startSpacer }),
            g.a.createElement(mt.a, {
              accessibilityLabel: i ? Br : Nr,
              icon: g.a.createElement(m, { style: d ? jr.iconColorDark : jr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(J.a, { style: jr.durationSpacer }),
            g.a.createElement(
              J.a,
              { style: n ? jr.durationOpacity : void 0 },
              g.a.createElement(
                Or.a,
                Xt()({ countdown: !0, timeMs: c }, u, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? jr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(J.a, { style: jr.endSpacer }),
          ),
        )
      }
      var Pr = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Nr = Be.a.c94b7d89,
        Br = Be.a.eb6f9582,
        jr = P.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: de.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function Hr(e) {
        var t = e.isSent,
          n = e.squared
        return [Ur.base, t ? Ur.sent : Ur.received, n ? (t ? Ur.sentSquared : Ur.receivedSquared) : void 0]
      }
      var Ur = P.a.create(function (e) {
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
        Vr = (function (e) {
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
                    s = o && o.attachment ? o.attachment : {},
                    l = n.marked_as_spam,
                    c = _t(n),
                    d = !!o && !!o.ctas,
                    u = bt(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (_t(e) && !Et(e)) return !1
                      if (!t.text) return !1
                      var n = Object(gt.parse)(t.text)
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
                    h = Et(n)
                  e = s.sticker ? g.a.createElement(vr, { sticker: s.sticker }) : this._renderDMMessage(u, d, m)
                  var f = l ? g.a.createElement(ur, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = c && !h && !Object(k.l)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    y = [
                      a ? zr.isSent : zr.isReceived,
                      d && zr.withCta,
                      v ? zr.mediaRoot : zr.flexShrink,
                      this.props.style,
                    ]
                  return g.a.createElement(
                    J.a,
                    { style: y },
                    f,
                    o && o.ctas
                      ? g.a.createElement(ca, {
                          callToActions: o.ctas,
                          isSent: a,
                          onCtaClick: r,
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
                  var a = this.props,
                    r = a.displaySensitiveMedia,
                    i = a.entry,
                    o = a.isActive,
                    s = a.isDmNsfwMediaFilterEnabled,
                    l = a.isFirstRapidFire,
                    c = a.isLowQuality,
                    d = a.isRapidFire,
                    u = a.isSent,
                    p = a.isTrusted,
                    m = i.error,
                    h = i.message_data,
                    f = h && b()(b()({}, h), {}, { entities: (h && h.entities) || void 0, error: m }),
                    v = null == f ? void 0 : f.attachment,
                    y = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: l,
                      isRapidFire: d,
                      isSent: u,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && v) {
                    if (v.tweet)
                      return g.a.createElement(
                        Tr,
                        Xt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: s,
                            isTrusted: p,
                            messageData: f,
                          },
                          y,
                        ),
                      )
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(k.l)(v, this.context.featureSwitches)
                        ? g.a.createElement(Dr, {
                            isLowQuality: c,
                            isSent: !!u,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : g.a.createElement(
                            ir,
                            Xt()(
                              {
                                displaySensitiveMedia: r,
                                entry: i,
                                hasUserText: e,
                                isDmNsfwMediaFilterEnabled: s,
                                isTrusted: p,
                                messageData: f,
                              },
                              y,
                            ),
                          )
                    if (v.card)
                      return g.a.createElement(
                        ka,
                        Xt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, y),
                      )
                    if (v.fleet) return g.a.createElement(Ma, Xt()({ entry: i, hasUserText: e, messageData: f }, y))
                  }
                  return g.a.createElement(_a, Xt()({}, y, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Vr, 'contextType', M.a)
      var zr = P.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Kr = Vr,
        Wr = P.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        qr = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? g.a.createElement($.a, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : g.a.createElement(J.a, { style: [Wr.avatar, $.a.getSizeStyle(a)] })
        },
        Gr = n('m3Bd'),
        Qr = n.n(Gr),
        Yr = n('B3eJ'),
        Xr = ['color', 'isActive', 'size']
      function Jr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Qr()(e, Xr),
          i = g.a.useContext(Ar.a),
          o = g.a.useState(0.5),
          s = se()(o, 2),
          l = s[0],
          c = s[1],
          d = se()(i.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && d && d.isPlaying && c(Math.random())
          },
          [n, d],
        )
        var u = n && (null == d ? void 0 : d.isPlaying),
          p = a + 2 * Zr,
          m = [$r.container, r.style, { width: a, height: a }]
        return g.a.createElement(
          J.a,
          { style: m },
          g.a.createElement(
            J.a,
            { style: [$r.container, $r.transitionOpacity, u ? $r.show : $r.hide] },
            ue.a.reducedMotionEnabled
              ? null
              : g.a.createElement(Yr.a, { audioLevel: l, color: t, paused: !u, size: a }),
          ),
          g.a.createElement(J.a, {
            style: [$r.border, { width: p, height: p }, $r.transitionOpacity, n ? $r.show : $r.hide],
          }),
        )
      }
      var Zr = parseInt(P.a.theme.spaces.space2, 10),
        $r = P.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Zr,
              left: -1 * Zr,
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
        ai = { viewType: 'message' },
        ri = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        ii = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { shouldFadeHighlight: !1 }),
              h()(
                l()(e),
                '_handleClick',
                Object(ei.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    a = n.error,
                    r = n.id,
                    i = n.is_draft,
                    o = t.isActive,
                    s = t.setActiveEntry
                  i || a || (s(o ? null : r), e._handleScribeMessageEntryClick())
                }),
              ),
              h()(l()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!ht.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(k.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              h()(l()(e), '_handleCtaImpression', function () {
                e._scribeAction(b()(b()({}, ni), {}, { action: 'show' }))
              }),
              h()(l()(e), '_handleCtaClick', function () {
                e._scribeAction(b()(b()({}, ni), {}, { action: 'click' }))
              }),
              h()(l()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(k.l)(
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
                    !Object(X.a)(this.props, e) || !Object(X.a)(this.state.shouldFadeHighlight, t.shouldFadeHighlight)
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
                    s = this._getRapidFireProps(),
                    l = !s.isRapidFire || s.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    d = [
                      si.root.base,
                      c && si.root.vdlPadding,
                      l && si.root.contentSpacing,
                      l && c && si.root.vdlContentSpacing,
                      r && si.root.highlightableEntry,
                      r && this.state.shouldFadeHighlight && si.root.remove,
                    ],
                    u = this._isDMVoiceMessage(),
                    p = c ? a && !i : !i || u
                  if (!o) return null
                  var m = !ht.a.isEnabled || i
                  return g.a.createElement(
                    _e.a,
                    { behavioralEventContext: ai },
                    g.a.createElement(
                      J.a,
                      { style: d },
                      g.a.createElement(
                        B.a,
                        {
                          accessibilityExpanded: !(!m || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: m ? this._handleClick : void 0,
                          style: i ? si.root.sent : si.root.received,
                          testID: ti,
                        },
                        function (t) {
                          var n = t.isFocused,
                            a = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: a,
                            rapidFireProps: s,
                            withVDLRefresh: c,
                            withUserAvatar: p,
                          })
                        },
                      ),
                      this._renderFooter(s, p),
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
                    s = o.displaySensitiveMedia,
                    l = o.entry,
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
                    I = a.isFirstRapidFire,
                    w = a.isRapidFire,
                    x = [
                      f ? si.messageContainer.sent : si.messageContainer.received,
                      b ? si.messageContainer.wide : si.messageContainer.narrow,
                      f && b && si.messageContainer.sentWide,
                      !f && b && si.messageContainer.receivedWide,
                    ],
                    k = v && !h,
                    R = this._isDMVoiceMessage(),
                    T = (null == _ ? void 0 : _.length) || 0
                  return g.a.createElement(
                    J.a,
                    { style: x },
                    l.error
                      ? null
                      : g.a.createElement(qt, {
                          containerIsActive: d,
                          containerIsFocused: t,
                          containerIsHovered: n,
                          entry: l,
                          featureSwitches: this.context.featureSwitches,
                          inboxType: c,
                          isDraft: !!l.is_draft,
                          isGroupDM: p,
                          isSent: f,
                          onReportMessage:
                            R && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: v })
                                }
                              : void 0,
                          participantsCount: T,
                          perspective: E,
                          setShouldFreezeUpdates: C,
                          shouldShowReactionButton: k,
                          style: R && pe(P.a.theme.scale).actionsContainer({ isSent: f, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    g.a.createElement(Kr, {
                      displaySensitiveMedia: s,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: u,
                      isFirstRapidFire: I,
                      isLowQuality: m,
                      isRapidFire: w,
                      isSent: f,
                      isTrusted: v,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: R && pe(P.a.theme.scale).messageContainer({ isSent: f, isVoiceMessageActive: y }),
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
                    s = o.entry,
                    l = o.isActive,
                    c = o.isGroupDM,
                    d = o.isSent,
                    u = o.participants,
                    p = o.user
                  return p
                    ? g.a.createElement(aa, {
                        conversationId: s.conversation_id,
                        entryId: s.id,
                        entryText: null === (n = s.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: s.time,
                        isActive: l,
                        isDraft: !!s.is_draft,
                        isError: !!s.error,
                        isGroupDM: c,
                        isLastRapidFire: r,
                        isRapidFire: i,
                        isSent: d,
                        localMediaId: null === (a = s.message_data) || void 0 === a ? void 0 : a.localMediaId,
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
                    s = r.user,
                    l = this._isDMVoiceMessage()
                  if (!s || (!t && !o)) return null
                  var c = ce(P.a.theme.scale),
                    d = c.DMUserAvatarSizePx,
                    u = { showAvatar: !!l || !a || !!n, size: c.DMUserAvatarSizeType, user: s },
                    p = [
                      si.userAvatar.base,
                      i ? si.userAvatar.sent : si.userAvatar.received,
                      l && pe(P.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return g.a.createElement(
                    J.a,
                    { style: si.userAvatar.container },
                    i ? null : g.a.createElement(J.a, { style: si.userAvatar.spacer }),
                    l
                      ? g.a.createElement(Jr, {
                          color: i ? P.a.theme.colors.primary : P.a.theme.colors.text,
                          isActive: !!o,
                          size: d,
                          style: p,
                        })
                      : null,
                    g.a.createElement(J.a, { style: p }, g.a.createElement(qr, u)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(b()({}, e))
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
      h()(ii, 'contextType', M.a), h()(ii, 'defaultProps', ri)
      var oi = Object(tt.a)(
          Te(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = g.a.useContext(Ar.a),
                  r = se()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  o = se()(r, 1)[0] === n.id,
                  s = b()(b()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return g.a.createElement(e, s)
              }
              return (t.defaultProps = ri), t
            })(ii),
          ),
        ),
        si = {
          root: P.a.create(function (e) {
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
          messageContainer: P.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: $t },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: P.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: ce(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        li = n('H4nC'),
        ci = function (e) {
          var t = e.conversation,
            n = e.entry,
            a = e.inboxType,
            r = e.isActive,
            i = e.isFirstRapidFire,
            o = e.isHighlightedMessageSearchEntry,
            s = e.isLastRapidFire,
            l = e.isRapidFire,
            c = e.isWide,
            d = e.perspective,
            u = e.scribeNamespace,
            p = e.setActiveEntry,
            m = e.setShouldFreezeUpdates
          if (Object(R.b)(n) || Object(R.e)(n)) {
            var h = t.conversation_id,
              f = t.low_quality,
              v = t.participants,
              y = t.read_only,
              b = t.trusted,
              _ = t.type,
              E = n.message_data,
              S = (E = void 0 === E ? {} : E).sender_id,
              C = void 0 === h || b
            return g.a.createElement(oi, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: _ === O.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: o,
              isLastRapidFire: s,
              isLowQuality: !!f,
              isRapidFire: l,
              isReadOnly: y,
              isSent: S === d,
              isTrusted: !!C,
              isWide: c,
              participants: v,
              perspective: d,
              scribeNamespace: u,
              senderId: S,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(R.a)(n)
            ? g.a.createElement(ie, { conversation: t, entry: n, entryType: n.type, perspective: d })
            : Object(R.d)(n)
            ? g.a.createElement(li.a, { entry: n, isCompact: !1 })
            : null
        },
        di = n('0JOx'),
        ui = Object(Ee.createSelector)(
          function (e, t) {
            var n = Object(ze.o)(e, t.conversationId),
              a = n && Object(A.a)(n)
            return a && Object(O.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        pi = Object(Se.c)(ui),
        mi = (n('Ef13'), n('uDfI')),
        hi = Object(Ee.createSelector)(
          function (e, t) {
            return we.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        fi = Object(mi.b)(hi),
        vi = n('Enqy'),
        gi = n('+/1j'),
        yi = 'overflow',
        bi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        _i = { stiffness: 1e3, damping: 70 },
        Ei = 140,
        Si = { scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(0, _i) },
        Ci = function (e, t) {
          return { key: e.id_str, data: e, style: Si }
        },
        Ii = Object(S.a)({ translateY: Ei, scale: 0 }),
        wi = Object(S.a)({ scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(Ei, _i) }),
        xi = [{ key: 'bubble', style: { scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(0, _i) } }],
        ki = Object(S.a)({ translateY: Ei, scale: 0 }),
        Ri = Object(S.a)({ scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(Ei, _i) }),
        Ti = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ai = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { isHidden: !0 }),
              h()(l()(e), '_afterLeave', function () {
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
                    n = t.sort(bi).slice(0, 5).map(Ci)
                  return (
                    t.length > 5 && n.push({ key: yi, style: Si }),
                    g.a.createElement(
                      J.a,
                      { style: [Oi.root, e && Oi.hidden] },
                      g.a.createElement(
                        J.a,
                        { style: Oi.avatarRow },
                        g.a.createElement(
                          vi.TransitionMotion,
                          { styles: n, willEnter: Ii, willLeave: wi },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Ti(e.style)
                                return e.key === yi
                                  ? g.a.createElement(
                                      J.a,
                                      {
                                        key: e.key,
                                        style: [Oi.avatar, Oi.avatarSpacer, Oi.overflowAvatar, { transform: a }],
                                      },
                                      g.a.createElement(gi.a, { style: Oi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      J.a,
                                      { key: e.key, style: [Oi.avatar, { transform: a }] },
                                      g.a.createElement($.a, {
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
                        vi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? xi : [], willEnter: ki, willLeave: Ri },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                J.a,
                                { key: e.key, style: [Oi.messageBubble, { transform: Ti(e.style) }] },
                                g.a.createElement(J.a, { style: Oi.dot }),
                                g.a.createElement(J.a, { style: [Oi.dot, Oi.dot1] }),
                                g.a.createElement(J.a, { style: [Oi.dot, Oi.dot2] }),
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
        Oi = P.a.create(function (e) {
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
        Mi = fi(Ai),
        Fi = n('tn7R'),
        Di = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_timers', {}),
              h()(l()(e), 'state', { forceHide: !1, userIds: [] }),
              h()(l()(e), '_handleLivePipelineUpdate', function (t) {
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
                        Ye()(
                          e.userIds.filter(function (e) {
                            return e !== n
                          }),
                        ),
                        [n],
                      ),
                    }
                  }))
              }),
              h()(l()(e), '_removeAvatar', function (t) {
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
                  return !t && g.a.createElement(Mi, { userIds: n })
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
                  Object(di.h)().then(function (n) {
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
      h()(Di, 'contextType', M.a)
      var Li = pi(Di),
        Pi = n('3AAD'),
        Ni = n('iBK2'),
        Bi = n('Fz18'),
        ji = n('RJrc'),
        Hi = n('yw4N'),
        Ui = (n('XygZ'), n('dPJJ')),
        Vi = n('zrc3'),
        zi = n('pQ3Z'),
        Ki = n.n(zi),
        Wi = n('VY6S'),
        qi = n('c/W/'),
        Gi = (function () {
          function e(t) {
            var n = this
            r()(this, e),
              h()(this, '_trackScroll', function () {
                n._programmaticScroll ? (n._programmaticScroll = !1) : (n._lastScrollTs = Date.now())
              }),
              h()(this, '_normalize', function () {
                n._wrapperNode &&
                  0 !== n._transform &&
                  n._viewport &&
                  ((n._wrapperNode.style.transform = ''), n._viewport.scrollBy(-1 * n._transform), (n._transform = 0))
              }),
              h()(this, '_normalizeIfNeeded', function () {
                if (n._wrapperNode && n._viewport && 0 !== n._transform) {
                  var e = n._viewport,
                    t = n._wrapperNode.getBoundingClientRect(),
                    a = t.height,
                    r = t.top,
                    i = new qi.a(r, a),
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
              (this._debouncedNormalize = Object(Wi.a)(this._normalize, 500)),
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
        Qi = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_updatesSuspended', !1),
              h()(l()(i), '_handleHeightsUpdate', function (e, t) {
                var n = i.props.anchoring
                i._scrollBy(n.offsetCorrection(e, t))
              }),
              h()(l()(i), '_receiveWrapperNode', function (e) {
                return i._offsetHandler.setWrapperNode(e)
              }),
              h()(l()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              h()(l()(i), '_handleEnterFullscreen', function () {
                ;(i._updatesSuspended = !0), i._ref && i._ref.freezeUpdates()
              }),
              h()(l()(i), '_handleExitFullscreen', function () {
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
                  var n = !Ki()(this.props, e) || !Ki()(this.state, t)
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
                        a = t.onPositionRestored
                      t.retryPositionRestoration &&
                        e._initialAnchor &&
                        !!n.find(function (t) {
                          var n = t.id
                          return e._initialAnchor && n === e._initialAnchor.id
                        }) &&
                        e._initialAnchor &&
                        e._scrollToAnchor(e._initialAnchor)
                      a(),
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
                    a = e.renderList,
                    r = this.state.scrollHeadroom
                  return g.a.createElement(
                    'div',
                    { ref: this._receiveWrapperNode, style: { paddingBottom: r } },
                    a({
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
                      var n = Object(Vi.a)(t, function (t) {
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
      h()(Qi, 'defaultProps', { anchoring: Pi.a })
      var Yi = n('AOWc'),
        Xi = n('180P'),
        Ji = n('Ey+e'),
        Zi = n('SrIh'),
        $i = n('E6XO'),
        eo = n('06eB'),
        to = n.n(eo),
        no = n('aITJ'),
        ao = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        ro = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_perfReported', !1),
              h()(l()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              h()(l()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.id,
                  a = t.onHeightChanged,
                  r = se()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  r &&
                  r.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = r.contentRect.height), a(n, r.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, ao() - i._perfStart), (i._perfReported = !0))
              }),
              h()(l()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  a = t.setAPI
                e ? ((i._element = e), a(n, l()(i)), i._observeElement(e)) : (a(n, void 0), (i._element = void 0))
              }),
              (i._isResizeObserverHeightUpdatesEnabled =
                i.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                no.b.isDesktopOS() &&
                no.b.isSafari()),
              (i._resizeObserver = new window.ResizeObserver(i._handleResize)),
              (i._perfStart = ao()),
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
                  return t.render !== e.render || !to()(n, e.data)
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
                    a = t.setAPI
                  e.id !== n && (a(e.id, void 0), a(n, this))
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
      h()(ro, 'contextType', M.a)
      var io = n('+d3d'),
        oo = n('iChn'),
        so = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_cells', new Map()),
              h()(l()(e), '_heightUpdates', {}),
              h()(l()(e), '_visibilityMeasurements', new Map()),
              h()(l()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              h()(l()(e), '_reportVisibilityMeasurements', function () {
                if (e._visibilityMeasurements.size) {
                  var t = 0
                  e._visibilityMeasurements.forEach(function (e) {
                    return (t += e)
                  })
                  var n = Math.round(t / e._visibilityMeasurements.size),
                    a = no.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  $i.c('scroller:ttfv:'.concat(a), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              h()(l()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              h()(
                l()(e),
                '_flushHeightUpdates',
                Object(io.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              h()(l()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              h()(l()(e), '_handleDivRefUpdate', function (t) {
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
                  return Object(oo.a)(
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
                    a = t.renderItem
                  return n.map(function (t) {
                    var n = t.data,
                      r = t.id
                    return g.a.createElement(ro, {
                      data: n,
                      id: r,
                      key: r,
                      onHeightChanged: e._handleCellHeightChanged,
                      onVisible: e._handleItemVisible,
                      render: a,
                      setAPI: e._setCellRef,
                    })
                  })
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        lo = n('oi7R'),
        co = n('aWzz'),
        uo = n('JD1h'),
        po = n('OeMK'),
        mo = n('0zXz'),
        ho = (n('+KXO'), n('IAdD'), n('jHwr')),
        fo = n('qdp+'),
        vo = (function () {
          function e(t) {
            var n = t.list,
              a = t.rectangles,
              i = t.sliceEnd,
              o = t.sliceStart,
              s = t.viewportRectangle
            r()(this, e),
              (this._viewportRectangle = s),
              (this._list = n),
              (this._rectangles = a),
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
                    a = e[e.length - 1].id,
                    r = t[n].getTop(),
                    i = t[a].getBottom() - r
                  return new qi.a(r, i)
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
                    a = Object(Vi.a)(this._list, function (e) {
                      var a = e.id
                      return n[a].doesIntersectWith(t)
                    })
                  if (a < 0) return []
                  var r = Object(Vi.a)(
                    this._list,
                    function (e) {
                      var a = e.id
                      return !n[a].doesIntersectWith(t)
                    },
                    a,
                  )
                  return (
                    -1 === r && (r = this._list.length),
                    this._list
                      .slice(a, r)
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
                  return Object(fo.a)(this.getRenderedItems(), function (t) {
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
        go = n('64vW'),
        yo = function (e, t, n) {
          if (t < 0 || t >= e.length) return -1
          if (n(e[t])) return t
          for (var a = 1; ; a++) {
            var r = t - a,
              i = t + a,
              o = r < 0,
              s = i >= e.length
            if (o && s) break
            if (!s && n(e[i])) return i
            if (!o && n(e[r])) return r
          }
          return -1
        },
        bo = function (e) {
          var t = e.list,
            n = e.nextList,
            a = e.sliceEnd,
            r = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = yo(t, r, function (e) {
              var t = e.id
              return !Object(po.a)(t) && i.hasOwnProperty(t) && i[t]
            })
          if (-1 === o) return null
          var s = Object(Vi.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Yi.a)(s >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(po.a)(t[o - 1].id) && s > 0 && Object(po.a)(n[s - 1].id) && (s -= 1),
            { sliceStart: s, sliceEnd: Math.min(n.length, s + a - r) }
          )
        },
        _o = { heightsReady: !0 },
        Eo = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_updatesSuspended', !1),
              h()(l()(i), 'freezeUpdates', function () {
                i._updatesSuspended = !0
              }),
              h()(l()(i), 'resumeUpdates', function () {
                ;(i._updatesSuspended = !1), i._scheduleUpdate()
              }),
              h()(l()(i), '_handleHeightsChange', function (e) {
                i._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              h()(l()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              h()(l()(i), '_setNecessarySlice', function (e, t) {
                var n = i.state,
                  a = n.sliceEnd,
                  r = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: a }, { start: e, end: t }),
                  o = r.end,
                  s = r.start
                i._setSlice(s, o)
              }),
              h()(l()(i), '_setSlice', function (e, t) {
                if (!i._updatesSuspended) {
                  var n = i.state,
                    a = n.sliceEnd
                  ;(e === n.sliceStart && t === a) || i.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var o = i.props,
              s = o.initialItemIndex,
              c = o.list
            ;(i._assumedItemHeight = e.assumedItemHeight),
              (i._getSlice = function () {
                var e = i.props.list,
                  t = i.state,
                  n = t.sliceEnd,
                  a = t.sliceStart
                return i._getMemoizedSlice(e, a, n)
              }),
              (i._getMemoizedSlice = Object(le.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (i._getRectangles = function (e) {
                var t = e || l()(i),
                  n = t._assumedItemHeight,
                  a = t._heights,
                  r = t.props.list
                return t._getMemoizedRectangles(r, a, n)
              }),
              (i._getMemoizedRectangles = Object(le.a)(function (e, t, n) {
                return So(e, t, n)
              })),
              (i._heights = {})
            var d = i.props,
              u = d.cacheKey,
              p = d.heightCache
            u && p.hasOwnProperty(u) && (i._heights = p[u]), (i.state = i._getDefaultSlice(c, s))
            var m = Object(ho.a)(function () {
              return i._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (i._scheduleUpdate = window.requestIdleCallback
                ? Object(ho.a)(function () {
                    return i._criticalUpdate()
                  }, window.requestIdleCallback)
                : m),
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
              (i._handleScroll = Object(io.a)(m, 100, { trailing: !0 })),
              (i._scheduleDebouncedUpdate = Object(Wi.a)(function () {
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
                    a = n.sliceEnd,
                    r = n.sliceStart,
                    i = e.list
                  if (i !== t) {
                    var o = bo({ list: t, nextList: i, sliceStart: r, sliceEnd: a }) || this._getDefaultSlice(i)
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
                  return new vo({
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
                    a = this._computeBlankSpace(),
                    r = a.blankSpaceAbove,
                    i = a.blankSpaceBelow
                  return g.a.createElement(
                    go.a.Provider,
                    { value: _o },
                    n({
                      ref: this._handleRefUpdate,
                      list: this._getSlice(),
                      blankSpaceAbove: r,
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
                    a = t.sliceStart,
                    r = this._getRectangles(),
                    i = 0 === e.length ? 0 : r[e[a].id].getTop() - r[e[0].id].getTop(),
                    o = Object(A.a)(e)
                  return {
                    blankSpaceAbove: i,
                    blankSpaceBelow: n >= e.length || !o ? 0 : r[o.id].getBottom() - r[e[n].id].getTop(),
                  }
                },
              },
              {
                key: '_postRenderProcessing',
                value: function (e) {
                  var t = e.hasListChanged,
                    n = e.newHeights
                  if (this._recordHeights(n).wasHeightChange || t) {
                    var a = this._prevPositioning
                    if (a) (0, this.props.onHeightsUpdate)(a, this.getPositioning())
                  }
                  var r = this.props,
                    i = r.minimumOffscreenToViewportRatio,
                    o = r.preferredOffscreenToViewportRatio
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
                    a = !1,
                    r = Object.keys(n).reduce(function (e, r) {
                      var i = t._heights.hasOwnProperty(r) ? t._heights[r] : t._assumedItemHeight,
                        o = n[r]
                      return (a = a || i !== o), e + (o - i)
                    }, 0)
                  return (
                    a && (this._heights = Object.assign(b()({}, this._heights), n)),
                    { wasHeightChange: a, heightDelta: r }
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
                  var a = this._getRelativeViewportRect(),
                    r = a.getHeight() * t,
                    i = a.getTop() - r,
                    o = a.getBottom() + r,
                    s = this._getRectangles(),
                    l = Object(Vi.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > i
                    }),
                    c = l >= 0 ? l : n.length - 1,
                    d = Object(Vi.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return s[t].getTop() >= o
                      },
                      c,
                    ),
                    u = d >= 0 ? d : n.length
                  return this._schedulePositioningNotification(), { sliceStart: c, sliceEnd: u }
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
                    a = n.getRect().getHeight(),
                    r = b()(
                      b()({}, this),
                      {},
                      {
                        props: b()(b()({}, this.props), {}, { list: e }),
                        state: b()({}, this.state),
                        context: b()({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(r),
                    o = e[t].id,
                    s = i[o].getBottom(),
                    l = Object(Vi.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return i[t].getTop() - s >= a
                      },
                      t,
                    ),
                    c = l >= 0 ? l : e.length
                  return { sliceStart: t, sliceEnd: Math.min(e.length, c) }
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      h()(Eo, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var So = function (e, t, n) {
          var a = {}
          return (
            e.reduce(function (e, r) {
              var i = r.id,
                o = t.hasOwnProperty(i) ? t[i] : n,
                s = new qi.a(e, o)
              return (a[i] = s), s.getBottom()
            }, 0),
            a
          )
        },
        Co = Eo,
        Io = function (e) {
          return (
            Object(Zi.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xi.a)(e)
          )
        },
        wo = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_onDemandRenderer', function (e) {
                var t = i.props,
                  n = t.assumedItemHeight,
                  a = t.minimumOffscreenToViewportRatio,
                  r = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return g.a.createElement(
                  Co,
                  Xt()({}, e, {
                    assumedItemHeight: o,
                    cacheKey: i.props.cacheKey,
                    minimumOffscreenToViewportRatio: a,
                    onPositioningUpdate: i._handlePositioningUpdate,
                    preferredOffscreenToViewportRatio: r,
                    renderList: i._viewRenderer,
                    viewport: i._viewport,
                  }),
                )
              }),
              h()(l()(i), '_viewRenderer', function (e) {
                return g.a.createElement(so, e)
              }),
              h()(l()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              h()(
                l()(i),
                '_getMemoizedItemRenderer',
                Object(le.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              h()(l()(i), '_handleAnchorRendererRefUpdate', function (e) {
                i._anchorRenderer = e
              }),
              h()(l()(i), '_handlePositionRestored', function () {
                ;(0, i.props.onPositionRestored)(), (i._edgeProximity = i._createEdgeProximity())
                var e = i._anchorRenderer && i._anchorRenderer.getPositioning()
                e && i._edgeProximity.handlePositioningUpdate(e)
              }),
              h()(l()(i), '_handlePositioningUpdate', function (e) {
                i._edgeProximity && i._edgeProximity.handlePositioningUpdate(e)
                var t = i.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              h()(l()(i), '_getList', function () {
                var e = i.props,
                  t = e.footer,
                  n = e.header,
                  a = e.identityFunction,
                  r = e.items
                return i._getMemoizedList(a, r, n, t)
              }),
              h()(
                l()(i),
                '_getMemoizedList',
                Object(le.a)(function (e, t, n, a) {
                  var r = {},
                    i = t.reduce(function (t, n) {
                      var a = e(n) || n.id || Io(n)
                      return (
                        Object(Yi.a)('number' == typeof a || 'string' == typeof a, 'Item id must not be falsy'),
                        r.hasOwnProperty(a)
                          ? Object(Zi.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: a } },
                            )
                          : (t.push({ data: { data: n }, id: a }), (r[a] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: po.c,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return n
                            },
                          },
                        }
                      : null,
                    s = a
                      ? {
                          id: po.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return a
                            },
                          },
                        }
                      : null
                  return i.length ? [].concat(Ye()(o ? [o] : []), Ye()(i), Ye()(s ? [s] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || a.viewport || lo.a.root()),
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
                    a = e.items,
                    r = e.noItemsRenderer
                  return a.length
                    ? g.a.createElement(Qi, {
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
                    : r()
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
                    a = t.nearStartProximityRatio
                  return new uo.b([
                    {
                      condition: uo.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: uo.a.nearTopRatio(a),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: uo.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: uo.a.nearBottom(5),
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
                    var a = this._customLocation.getSavedPosition()
                    a && a.length ? (this._initialAnchors = a) : (this._initialAnchors = n ? [n] : []),
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
      h()(wo, 'displayName', 'VirtualScroller'),
        h()(wo, 'contextTypes', { viewport: co.object, getCustomLocation: co.func }),
        h()(wo, 'defaultProps', {
          anchoring: Qi.defaultProps.anchoring,
          assumedItemHeight: Co.defaultProps.assumedItemHeight,
          identityFunction: Io,
          minimumOffscreenToViewportRatio: Co.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: mo.a,
          onPositionRestored: sa.a,
          onAtEnd: sa.a,
          onAtStart: sa.a,
          onNearEnd: sa.a,
          onNearStart: sa.a,
          onScrollEnd: sa.a,
          preferredOffscreenToViewportRatio: Co.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var xo = Object(Ji.a)(wo),
        ko = n('mw9i'),
        Ro = Be.a.i859a9d3,
        To = Be.a.i8ecae5b,
        Ao = function (e) {
          return e.entry.id
        },
        Oo = function (e) {
          return e.entry.type === Y.b.MESSAGE
        },
        Mo = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(
                l()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled') ||
                  (i.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                    i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1')),
              ),
              h()(l()(i), '_handleScrollEnd', function () {
                i.setState({ didRenderMessageSearchEntry: !0 })
              }),
              h()(l()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case Y.b.TYPING_INDICATOR:
                    return n ? g.a.createElement(Li, { conversationId: n }) : null
                  case Y.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          J.a,
                          { style: Fo.readOnly },
                          g.a.createElement(
                            Z.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            To,
                            ' ',
                            g.a.createElement(Z.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Ro),
                          ),
                        )
                      : null
                  case Y.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(K, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              h()(l()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              h()(l()(i), '_setShouldFreezeUpdates', function (e) {
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
                    s = t.onHistoryRequest,
                    l = t.shouldScrollToCenter,
                    c = t.style,
                    d = this.state.activeEntryId,
                    u = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        a = e.conversation,
                        r = e.footer,
                        i = e.messageSearchEntryId,
                        o = e.readOnlyEntry,
                        s = (a && a.entries) || [],
                        l = null == a ? void 0 : a.max_search_entry_id,
                        c = null == a ? void 0 : a.min_search_entry_id,
                        d = (null == a ? void 0 : a.status) === O.PAGINATION_STATUS.AT_END,
                        u = l ? Object(k.d)(s, l) : s.length - 1,
                        p = c ? Object(k.d)(s, c) : -1,
                        m = i && -1 === p ? Object(k.d)(s, i) : p,
                        h = s.slice(d ? 0 : m, u + 1),
                        f = (i ? h : s).reduce(function (e, r, o) {
                          n && 0 === o && e.push(x.b)
                          var l = Object(A.a)(e),
                            c = o === s.length - 1
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
                            l)
                          ) {
                            var d = T(l.entry, r),
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
                      footer: x.d,
                      readOnlyEntry: x.c,
                      canInjectConversationProfileInfoHeader: n.status === Y.c.AT_END && n.type === Y.a.ONE_TO_ONE,
                      activeEntryId: d,
                      messageSearchEntryId: i,
                    }),
                    p = n.conversation_id,
                    m = function (e) {
                      return e[e.length - 1]
                    },
                    h = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Oo(n)) return n
                      }
                      return m(e)
                    },
                    v = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    y =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== Y.c.AT_END
                  return g.a.createElement(W.a.Consumer, null, function (t) {
                    var d = t.isDrawer ? q.b.drawerHeaderRadius : Fo.scrollSpace
                    return g.a.createElement(
                      J.a,
                      { style: [Fo.scrollContainer, d] },
                      g.a.createElement(
                        Hi.a,
                        { style: [Fo.scrollContainer, r && Fo.conversationsPadding, d, c] },
                        a || null,
                        (n.status && n.status !== Y.c.AT_END && !i) || y ? g.a.createElement(ji.a, null) : null,
                        g.a.createElement(
                          ko.a,
                          { style: [Fo.content, Fo.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(Ni.b, {
                                anchoring: Pi.a,
                                assumedItemHeight: 50,
                                cacheKey: v,
                                canBeAnchorFunction: Oo,
                                centerInitialAnchor: i && l,
                                hasNewContentAtBottom: !0,
                                identityFunction: Ao,
                                initialAnchor: u.length > 0 ? f.a(i && l ? i : Ao(h(u))) : void 0,
                                items: u,
                                nearStartProximityRatio: 2,
                                onAtEnd: i && e.state.didRenderMessageSearchEntry ? o : void 0,
                                onAtStart: i && e.state.didRenderMessageSearchEntry ? s : void 0,
                                onNearStart: i ? void 0 : s,
                                onScrollEnd: i && !e.state.didRenderMessageSearchEntry ? e._handleScrollEnd : void 0,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : g.a.createElement(
                                Bi.a,
                                { identifier: v },
                                g.a.createElement(xo, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: v,
                                  centerInitialAnchor: !1,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Ao,
                                  initialAnchor: u.length > 0 ? f.a(Ao(m(u))) : void 0,
                                  items: u,
                                  nearStartProximityRatio: 2,
                                  onNearStart: s,
                                  renderer: e._renderItem,
                                  withoutHeadroom: !0,
                                }),
                              ),
                        ),
                        e.state.didRenderMessageSearchEntry &&
                          i &&
                          n.max_search_entry_id &&
                          n.search_status !== Y.c.AT_END
                          ? g.a.createElement(ji.a, null)
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
                    s = o.conversation,
                    l = o.inboxType,
                    c = o.isWide,
                    d = o.messageSearchEntryId,
                    u = o.perspective,
                    p = o.scribeNamespace,
                    m = t.id === d
                  return t && l
                    ? g.a.createElement(ci, {
                        conversation: s,
                        entry: t,
                        inboxType: l,
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
      h()(Mo, 'contextType', M.a)
      var Fo = P.a.create(function (e) {
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
    '64vW': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ heightsReady: !0 })
      t.a = r
    },
    '7myi': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
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
              h()(l()(e), '_genericWrapperRef', v.a.createRef()),
              h()(l()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(l()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  a = t.contextText,
                  r = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  s = t.source,
                  l = e.state,
                  c = l.canShowTypeahead,
                  d = l.queryContext,
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
                    source: s || E.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(l()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(b.a)(t, a.resultType),
                    i = e._replaceToken(r, a),
                    o = i.newCursor,
                    s = i.newTweetText
                  n({ target: { value: s } }), e._updateDOMTextArea(o, s)
                }
                e._setQueryContext(void 0)
              }),
              h()(l()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              h()(l()(e), '_handleInputChange', function (t) {
                if (Object(_.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  a = e.state.queryContext
                e._textAreaRef = n
                var r = a && a.word,
                  i = n.value,
                  o = g.c(n.selectionStart, i),
                  s = o.end,
                  l = o.start,
                  c = o.word,
                  d = g.e(c || '', 'compose')
                if ((null == d ? void 0 : d.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === l))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var u = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: u, resultType: p, fullText: n.value, startIndex: l, endIndex: s })
                  } else e._setQueryContext(void 0)
              }),
              h()(l()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(l()(e), '_handleDismiss', function () {
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
          return I
        }),
        n.d(t, 'b', function () {
          return w
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        s = n('3XMw'),
        l = n.n(s),
        c = n('fs1G'),
        d = l.a.c3752568,
        u = l.a.f78aa3e9,
        p = l.a.f9690dc0,
        m = l.a.i859a9d3,
        h = l.a.b1d35407,
        f = l.a.g539cca6,
        v = l.a.bbac0019,
        g = l.a.a1d2a68d,
        y = l.a.d4f2d9d8,
        b = l.a.hf383be4,
        _ = l.a.b25c5b2a,
        E = l.a.c4fdbd16,
        S = l.a.hf3e7e38,
        C = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        I = { defaultToast: { text: u }, showToast: !0 },
        w =
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
          return Promise.all([n.e(0), n.e(25), n.e(172)])
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
        s = r.useState,
        l = r.useEffect,
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
          f = s(!1),
          v = f[0],
          g = f[1],
          y = d(
            function (t) {
              p.current === n && m.current === e && (h.current.delete(t), r.current && g(h.current.size > 0))
            },
            [n, r, e],
          )
        l(
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
    AOWc: function (e, t, n) {
      'use strict'
      n('ho0z'), n('849X'), n('TJCb')
      function a(e) {
        ;(this.name = 'AssertionError'), (this.message = e), (this.stack = new Error().stack)
      }
      ;(a.prototype = Object.create(Error.prototype)), (a.prototype.constructor = a)
      t.a = function (e, t) {
        if (!e) throw new a(t ? 'Assertion failed: '.concat(t) : 'Assertion failed (also, no message was provided)')
      }
    },
    Avzu: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        return T
      }),
        n.d(t, 'l', function () {
          return O
        }),
        n.d(t, 'f', function () {
          return F
        }),
        n.d(t, 'd', function () {
          return L
        }),
        n.d(t, 'g', function () {
          return P
        }),
        n.d(t, 'e', function () {
          return B
        }),
        n.d(t, 'i', function () {
          return H
        }),
        n.d(t, 'j', function () {
          return U
        }),
        n.d(t, 'k', function () {
          return V
        }),
        n.d(t, 'h', function () {
          return z
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
        s = n('m3Bd'),
        l = n.n(s),
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
        I = n('/NU0'),
        w = [
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
        k = {}
      var R = function (e) {
          var t = e.conversation_id,
            n = e.id,
            a = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            l = void 0 === s ? {} : s,
            c = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: c,
            id: n,
            is_draft: !0,
            message_data: { attachment: l, localMediaId: a, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        T = function (e) {
          return function (t, n, a) {
            var i = a.api,
              s = e || {},
              c = s.senderId,
              d = s.cardUrl,
              u = s.conversationId,
              b = s.localMediaId,
              _ = s.recipients,
              x = void 0 === _ ? [] : _,
              k = s.requestId,
              T = void 0 === k ? E.a.v1() : k,
              A = s.tweetAttachment,
              O = s.quickReply,
              M = l()(s, w)
            t(Z(u))
            var F = n(),
              D = b || j(n(), u),
              P = m.k(F, D),
              N = o()(P, 1)[0] || {},
              B = N.mediaFile,
              H = N.mediaMetadata,
              U = x.length > 0 && x.join(','),
              V = {}
            B && B.isGif
              ? (V.extraInitParams = '&media_category=dm_gif')
              : B && B.isVideo && (V.extraInitParams = '&media_category=dm_video')
            var K = m.p(D, V),
              W = [t(K)],
              q = (z(F, u) || {}).found_media_origin
            return (
              B && B.isGif && W.push(Object(g.a)(B)),
              Promise.all(W).then(
                function (n) {
                  var a = o()(n, 2),
                    s = o()(a[0], 1)[0],
                    l = a[1],
                    g = (null == H ? void 0 : H.altText) || (null == H ? void 0 : H.defaultAltText),
                    b = !!g
                  return (
                    s && (q || b)
                      ? t(m.m(p()({ media_id: s.uploadId, found_media_origin: q }, !!b && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (A || {}).id_str,
                        a = {}
                      if (s) {
                        var o = s.mediaFile,
                          m = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (a.photo = p()(p()({}, g), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (a.animated_gif = p()(p()({}, g), {}, { media_url_https: l, type: 'animated_gif' }))
                          : m.isVideo && (a.video = p()(p()({}, g), {}, { media_url_https: m.url, type: 'video' }))
                      } else A && (a.tweet = { status: n })
                      var b = (s || {}).uploadId,
                        _ = R({
                          attachment: a,
                          conversation_id: u,
                          id: T,
                          recipient_ids: U,
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
                          { recipient_ids: U, request_id: T, tweet_id: n },
                        )
                      O &&
                        ((E['quick_reply_response[options][id]'] = O.id),
                        (E['quick_reply_response[options][selected_id]'] = O.selected_id))
                      var w = Object(C.a)([
                        ee(u),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(S.b)(u, T, _),
                      ])
                      return (
                        t(w),
                        i.DirectMessages.sendMessage(E).then(
                          function (n) {
                            var a = n.entities,
                              i = a.cards,
                              o = a.entries,
                              s = a.tweets,
                              l = a.users,
                              c = n.result.conversations
                            Object(I.a)(D) && t(X(u, D))
                            var d = Object(C.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: c, entries: o, users: l, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(S.j)(u, T, e), L(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var r = R({
                                attachment: a,
                                conversation_id: u,
                                error: !0,
                                id: T,
                                localMediaId: D,
                                recipient_ids: U,
                                sender_id: c,
                                text: e.text,
                              }),
                              i = Object(C.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(S.b)(u, T, r),
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
                  return t(Object(C.a)([Object(I.a)(D) && X(u, D), ne(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        A = function (e, t) {
          return e.dmComposer[t]
        },
        O = function (e, t) {
          var n = A(e, t)
          return n ? n.text : null
        },
        M = 'rweb/dmComposer/SAVE_TEXT',
        F = function (e, t) {
          return { type: M, conversationId: e, text: t }
        },
        D = 'rweb/dmComposer/REMOVE_TEXT',
        L = function (e) {
          return { type: D, conversationId: e }
        },
        P = function (e, t) {
          var n = A(e, t)
          return n ? n.cardUrl : null
        },
        N = 'rweb/dmComposer/SAVE_CARD_URL',
        B = function (e, t) {
          return { type: N, conversationId: e, cardUrl: t }
        },
        j = function (e, t) {
          var n = A(e, t)
          return n ? n.mediaId : null
        },
        H = function (e, t) {
          var n = m.k(e, j(e, t))
          return n.length > 0 ? n[0] : null
        },
        U = function (e, t) {
          var n = A(e, t)
          return !!n && n.isUploading
        },
        V = function (e, t) {
          return m.l(e, j(e, t))
        },
        z = function (e, t) {
          var n = A(e, t)
          return n ? n.gifMetadata : null
        },
        K = 'rweb/dmComposer/ADD_MEDIA',
        W = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: K, conversationId: e }
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
        d()({}, x, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case K:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), t.payload)))
            case J:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), {}, { isUploading: !0 })))
            case q:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Q:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case M:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { text: t.text })))
            case N:
              var l = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, l), {}, { cardUrl: t.cardUrl })))
            case D:
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
        s = r()(
          r()({}, o.a),
          {},
          { initialScrollHeadroom: Object(i.a)(0), scrollHeadroom: Object(i.a)(0), pinToNewestWhenAtNewest: !0 },
        )
      t.a = s
    },
    'Ey+e': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        c = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        d = n('6/RC'),
        u = n('E6XO'),
        p = n('sXY3'),
        m = n('tn7R'),
        h = n('+d3d'),
        f = n('oECP'),
        v = n('fs1G'),
        g = {},
        y = 0,
        b = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        _ = function () {
          Object(p.a)(g).forEach(function (e, t) {
            var n = l()(e, 2),
              a = n[0],
              r = n[1],
              i = Object(m.a)(r),
              o = i.length
            i.forEach(function (e) {
              Object(p.a)(b).map(function (t) {
                var n = l()(t, 2),
                  r = n[0],
                  i = l()(n[1], 2),
                  s = i[0],
                  c = i[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(o) &&
                  s in e &&
                  c in e &&
                  Object(u.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, r),
                    { duration_ms: e[s] - e[c] },
                  )
              })
            })
          }),
            Object(u.a)(),
            (g = {})
        },
        E = Object(h.a)(_, 2e4) || _,
        S = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(c.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((y += 1), (a = e.__lifecycleIdentifier = y)),
            (g[n] && g[n][a]) || (g[n] = o()(o()({}, g[n]), {}, r()({}, a, {}))),
            [n, a]
          )
        },
        C = function (e, t, n, a) {
          g[e][t][n] = a
        }
      t.a = d.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || v.a,
              componentDidMount: e.prototype.componentDidMount || v.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || v.a,
              componentDidUpdate: e.prototype.componentDidUpdate || v.a,
              componentWillUnmount: e.prototype.componentWillUnmount || v.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = S(this, !0), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.UNSAFE_componentWillMount.apply(this, o), C(a, r, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = S(this), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.componentDidMount.apply(this, o), C(a, r, 'didMount', Date.now()), E()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = S(this, !0), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.UNSAFE_componentWillUpdate.apply(this, o), C(a, r, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = S(this), n = l()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s]
                t.componentDidUpdate.apply(this, o), C(a, r, 'didUpdate', Date.now()), E()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                t.componentWillUnmount.apply(this, n), E()
              }),
              e
            )
          }
        : f.a
    },
    GSsg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = (n('yH/f'), n('B5iK')),
        l = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            r()(this, e)
            var a = n.interval,
              i = void 0 === a ? 6e4 : a,
              o = n.burstInterval,
              l = void 0 === o ? 3e3 : o,
              c = n.burstDuration,
              d = void 0 === c ? 3e5 : c
            ;(this.pollTimer = new s.b(i).interval(t)), (this.burstTimer = new s.a(this.pollTimer, l, d))
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
        s = n('MWbm'),
        l = n('rHpw'),
        c = n('t62R'),
        d = n('4n2h'),
        u = l.a.create(function (e) {
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
          l = void 0 !== o && o,
          h = 'follow' === t.reason ? p : m,
          f = Object(d.b)(l),
          v = Object(d.a)(l, i)
        return n
          ? r.a.createElement(c.b, { color: v, weight: f }, h)
          : r.a.createElement(
              s.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: v, size: 'subtext2', weight: f }, h),
            )
      }
    },
    'I2k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('k49u'),
        o = n('lRnM'),
        s = n('LVU8'),
        l = function (e) {
          return r()({}, i.a.ClientNotPermitted, {
            customAction: function () {
              return Object(s.d)('/messages/', { statusCode: 401 }), Object(o.v)(e)
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
    JD1h: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return u
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        l = {
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
              var a = n.getHeight() * e
              return n.getTop() - t.getTop() <= a
            }
          },
          nearBottomRatio: function (e) {
            return function (t, n) {
              var a = n.getHeight() * e
              return t.getBottom() - n.getBottom() <= a
            }
          },
        },
        c = Object.freeze({ INSIDE: 'inside', OUTSIDE: 'outside' }),
        d = function (e, t, n, a) {
          return (function (e, t) {
            return !e && t === c.INSIDE
          })(e, n)
            ? s.INITIAL_POSITION
            : (function (e, t) {
                return e === c.OUTSIDE && t === c.INSIDE
              })(e, n)
            ? s.MOVEMENT
            : (function (e, t) {
                return e === c.INSIDE && t === c.INSIDE
              })(e, n) && a !== t
            ? s.LIST_UPDATE
            : null
        },
        u = (function () {
          function e(t) {
            r()(this, e),
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
                      a = t.zone,
                      r = a.callback,
                      i = a.condition,
                      o = n.listLength,
                      s = n.proximity,
                      l = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? c.INSIDE : c.OUTSIDE
                      })(i, e),
                      u = e.getListLength(),
                      p = d(s, o, l, u)
                    ;(n.proximity = l), (n.listLength = u), p && r({ triggerCause: p })
                  })
                },
              },
            ]),
            e
          )
        })()
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
        s = n('Y9Ll'),
        l = n.n(s),
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
        I = n('1YZw'),
        w = n('hqKg'),
        x = n('kGix'),
        k = n('AQOc'),
        R = n('UhuB'),
        T = n('pNZL'),
        A = n('G6rE'),
        O = n('oEGd'),
        M = n('X/yg'),
        F = n('0KEI'),
        D = n('P1r1'),
        L = function (e, t) {
          return t.conversationId
        },
        P = Object(w.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, L(0, t))
          },
          function (e, t) {
            return e === x.a.LOADED ? t : e
          },
        ),
        N = Object(w.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, L(0, t))
          },
          C.q,
          function (e, t) {
            return t ? Object(M.e)(e, t) : void 0
          },
        ),
        B = Object(w.createSelector)(
          function (e, t) {
            return E.selectConversation(e, L(0, t))
          },
          E.selectEntries,
          M.m,
          C.q,
          M.n,
          M.o,
          A.e.selectAll,
          P,
          function (e, t) {
            return S.g(e, L(0, t))
          },
          function (e, t) {
            return S.j(e, L(0, t))
          },
          function (e, t) {
            return S.i(e, L(0, t))
          },
          function (e, t) {
            return S.k(e, L(0, t))
          },
          function (e, t) {
            return S.h(e, L(0, t))
          },
          function (e, t) {
            return S.l(e, L(0, t))
          },
          D.j,
          R.n,
          N,
          D.m,
          function (e, t) {
            var n = L(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, o, s, l, c, d, u, p, m, h, f, v, g, y) {
            var b = e && e.data
            return {
              conversation: (b && Object(k.a)(b, t, o)) || void 0,
              dataSaverMode: h,
              draftText: m,
              dtabBarInfo: g,
              fetchStatus: s,
              gifMetadata: p,
              inboxType: y,
              isDmReceiptSettingEnabled: f,
              cardUrl: l,
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
        j = Object(O.d)(B, function (e) {
          return {
            acceptConversation: E.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return S.a(t, e, n)
              }),
            saveText: S.f,
            addToast: I.b,
            addWelcomeMessageToConversation: E.addWelcomeMessageToConversation,
            cancelUpload: Object(M.a)(e.conversationId),
            createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationFuture: E.fetchConversationFuture,
            fetchConversationHistoricalSnapshot: E.fetchConversationHistoricalSnapshot,
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
        H = n('I2k/'),
        U = n('4AMG'),
        V = n('uB9N'),
        z = n('htvZ'),
        K = n('v//M'),
        W = n('3XMw'),
        q = n.n(W),
        G = n('UgB4'),
        Q = n('J2UM'),
        Y = n('07FG'),
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
        se = n.n(oe),
        le = (n('ho0z'), n('v6aA')),
        ce = n('EbOo'),
        de = n('rxPX'),
        ue = Object(de.a)().propsFromActions(function () {
          return {
            addToast: I.b,
            block: A.e.block,
            createLocalApiErrorHandler: Object(F.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: E.muteDMUser,
            unmuteDMUser: E.unmuteDMUser,
            unblock: A.e.unblock,
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
            s = y.a.createElement(ve.a, he()({}, i, { onPress: a }), ye),
            l = y.a.useCallback(
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
          return t ? s : y.a.createElement(ge.a, { renderContent: l }, o)
        },
        Ee = n('MWbm'),
        Se = n('cHvH'),
        Ce = n('rHpw'),
        Ie = function (e) {
          var t = y.a.useContext(le.a),
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
            s = function () {
              return e.onLeave()
            }
          return y.a.createElement(Se.a, null, function (t) {
            var l = t.windowWidth <= Ce.a.theme.breakpoints.small
            return y.a.createElement(
              Ee.a,
              { style: we.actionsContainer },
              n &&
                y.a.createElement(
                  ve.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [we.actionFullWidth, we.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              y.a.createElement(
                Ee.a,
                { style: l ? we.actionFullWidth : [we.actionHalfWidth, we.actionMarginRight] },
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
                  onPress: s,
                  size: 'medium',
                  style: l ? [we.actionFullWidth, we.actionMarginTop] : [we.actionHalfWidth, we.actionMarginLeft],
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
                    style: [we.actionFullWidth, we.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        we = Ce.a.create(function (e) {
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
        ke = n('t62R'),
        Re = n('eb3s'),
        Te = n('vMjK'),
        Ae = n('7JQg'),
        Oe = n('24HD'),
        Me = n('zCf4'),
        Fe = q.a.da878dcf,
        De = q.a.d96cf7cd,
        Le = (q.a.gde6b424, q.a.e308019b, q.a.gf5e9ea6, q.a.hc52446b),
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
        je = Object(Ae.a)({ element: 'untrusted_interstitial' })(
          ue(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = y.a.useContext(le.a),
              o = Object(Me.f)(),
              s = Object(Me.g)(),
              l = y.a.useState(!1),
              c = se()(l, 2),
              d = c[0],
              u = c[1],
              p = y.a.useState(!1),
              m = se()(p, 2),
              h = m[0],
              f = m[1],
              v = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.i.GROUP : Z.i.ONE_TO_ONE }],
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
              I = function () {
                u(!0), f(!1)
              },
              w = function () {
                u(!1)
              },
              x = function () {
                f(!1)
              },
              k = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  l = (null == t ? void 0 : t.participants.length) || 0,
                  c = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? Z.i.GROUP : Z.i.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: l,
                    position: c,
                    inbox_type: Object(M.i)(r),
                    entry_point: Z.c.REQUEST_ACTION_SHEET,
                  }
                u(!1), i({ conversationId: a }), g(o, d), R()
              },
              R = function () {
                var t = e.inboxType
                o.push(Object(M.f)(t))
              },
              T = function () {
                !(function () {
                  var n,
                    a = e.acceptConversation,
                    i = e.conversationId,
                    o = e.inboxType,
                    l = e.scribeAction,
                    c = e.scribeNamespace,
                    d = (null == t ? void 0 : t.participants.length) || 0,
                    u = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (a(i),
                    l(r()(r()({}, c), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.i.GROUP : Z.i.ONE_TO_ONE,
                      conversation_participant_count: d,
                      entry_point: Z.c.REQUEST_ACTION_SHEET,
                      inbox_type: Object(M.i)(o),
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
                      n({ action: { label: Te.c, onAction: O(t) }, text: Te.a })
                    }, r(ce.a)),
                    g('block')
                }
              },
              O = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(pe.a)), g('unblock')
                }
              },
              F = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                Ee.a,
                { style: Be.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    ke.b,
                    { style: Be.copy },
                    e ? Le : Pe({ senderName: Object(M.j)(t, n).name }),
                  )
                })(F),
                y.a.createElement(Ie, {
                  acceptButtonText: Fe,
                  conversation: t,
                  declineButtonText: De,
                  isGroup: F,
                  onAccept: T,
                  onBlock: function () {
                    u(!1), f(!0)
                  },
                  onLeave: I,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (g('report'), o.push(Object(M.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              xe.b.isKaiOS()
                ? y.a.createElement(ae.a, { leftText: De, onLeftClick: I, onRightClick: T, rightText: Fe })
                : null,
              d
                ? y.a.createElement(Re.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: w,
                    onConfirm: k,
                    text: Ne.text,
                  })
                : null,
              h
                ? ((b = i.loggedInUserId),
                  (_ = Object(M.j)(t, b)),
                  (S = _.idStr),
                  (C = _.screenName),
                  Object(Oe.j)({ confirmation: Object(Oe.f)(C), onClose: x, handleConfirm: A(S) }))
                : null,
            )
          }),
        ),
        He = n('yw4N'),
        Ue = n('rFBM'),
        Ve = n('mw9i'),
        ze = n('jTgF'),
        Ke = n('+d3d'),
        We = n('mN6z'),
        qe = y.a.createElement(G.a, null),
        Ge = q.a.badb01a0,
        Qe = q.a.e3275464,
        Ye = q.a.d6b11d9c,
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
              v()(d()(i), '_render', function () {
                var e,
                  t,
                  n,
                  a = i.props,
                  r = a.conversation,
                  o = a.conversationId,
                  s = a.drawerHeader,
                  l = a.inboxType,
                  c = a.isWide,
                  d = a.location,
                  u = a.perspective,
                  p = a.scribeNamespace,
                  m = i.state,
                  h = m.attachment,
                  f = m.composerHeight
                return y.a.createElement(
                  z.b,
                  { key: o },
                  y.a.createElement(
                    Ue.a,
                    { allowDragDrop: !Je(h), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    y.a.createElement(
                      He.a,
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
                        ? y.a.createElement(U.a, {
                            conversation: r,
                            drawerHeader: s,
                            inboxType: l,
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
                Object(Ke.a)(
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
                Object(Ke.a)(
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
                  s = o.addToast,
                  l = o.cardUrl,
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
                  I = null != c && c.participants ? c.participants.length : 0,
                  w = (null == c ? void 0 : c.type) === E.CONVERSATION_TYPE.GROUP,
                  x = 'unknown'
                if (
                  (e.quickReply ||
                    C ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  x = 'gif'
                else if (l) x = 'card'
                else if (_) x = 'tweet'
                else {
                  var k,
                    R = null == S || null === (k = S.media) || void 0 === k ? void 0 : k.mediaFile,
                    T = null != R && R.isVideo ? 'video' : null != R && R.isGif ? 'gif' : 'photo'
                  x = R ? T : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    g(r()(r()({}, y), {}, { element: x, action: 'send_dm' }), {
                      conversation_id: d,
                      conversation_participant_count: I,
                      conversation_type: w ? Z.i.GROUP : Z.i.ONE_TO_ONE,
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
                          { senderId: v, cardUrl: l, conversationId: d, text: t, tweetAttachment: _ },
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
                          if ((i.setState({ isSending: !1 }), !Object(ze.d)(e) || e.code !== X.b.CANCELED))
                            if (Object(ze.d)(e)) {
                              var t = Object(ze.b)(e, Ye)
                              t && s(t)
                            } else u($.b)(e)
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
                          conversation_type: Z.i.GROUP,
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
                composerHeight: Ce.a.theme.componentDimensions.appBarHeight,
                hasLoadedSnapshot: !1,
                isSending: !1,
                shouldScrollToCenter: !1,
              }),
              i
            )
          }
          return (
            l()(n, [
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
                    s = o.conversation,
                    l = o.conversationId,
                    c = o.fetchStatus,
                    d = o.isUploading,
                    u = o.location,
                    p = o.quickReplyOptions,
                    m = o.updateConversationReadState
                  ;((null == u || null === (n = u.state) || void 0 === n ? void 0 : n.entryPoint) !==
                    (null === (a = e.location) || void 0 === a || null === (r = a.state) || void 0 === r
                      ? void 0
                      : r.entryPoint) &&
                    l &&
                    this._fetchConversation(l),
                  l !== e.conversationId)
                    ? (l && this._fetchConversation(l),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == s ? void 0 : s.sort_event_id) !==
                        (null === (i = e.conversation) || void 0 === i ? void 0 : i.sort_event_id) && m(l),
                      d || !e.isUploading || p || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === x.a.LOADED && c !== x.a.LOADED && l && this._fetchConversation(l))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(We.a)(t, n) || this.setState({ attachment: Ze(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    Ve.a,
                    { style: [re.a.root, xe.b.isKaiOS() && re.a.kaiOSFix] },
                    y.a.createElement(K.a, {
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
                    s = e.dtabBarInfo,
                    l = e.history,
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
                    : y.a.createElement(V.a, {
                        attachment: g,
                        conversationId: r,
                        disabled: c,
                        dtabBarInfo: s,
                        history: l,
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
                    s = r.fetchConversationIfNeeded,
                    l = r.location,
                    c = r.updateConversationReadState
                  return null != l && null !== (t = l.state) && void 0 !== t && t.entryPoint
                    ? (this.setState({ hasLoadedSnapshot: !1 }),
                      o({
                        conversationId: e,
                        entryId: null == l || null === (n = l.state) || void 0 === n ? void 0 : n.entryPoint,
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
                    : s({ conversationId: e })
                        .then(function () {
                          return c(e)
                        })
                        .catch(i(Object(H.a)(e)))
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
                    s = o.query.text,
                    l = Array.isArray(o.query.welcome_message_id)
                      ? o.query.welcome_message_id[0]
                      : o.query.welcome_message_id,
                    c = !!this.state.attachment || !(!s || l),
                    d = !r || !r.type || r.type === E.CONVERSATION_TYPE.GROUP,
                    u = r && (null == r || null === (t = r.participants) || void 0 === t ? void 0 : t.length) <= 1
                  return c || d || u ? Promise.resolve() : a(e, l).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()($e, 'contextType', le.a), v()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Ae.a)()(j($e))
    },
    RJrc: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('3XMw'),
        o = n.n(i),
        s = n('MWbm'),
        l = n('Qwev'),
        c = n('rHpw'),
        d = o.a.ffde2fdb,
        u = c.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.a.createElement(s.a, { style: u.spinner }, r.a.createElement(l.a, { accessibilityLabel: d }))
      }
    },
    'ShJ/': function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        return O
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
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
        I = n('/Imo'),
        w = n('rHpw'),
        x = n('9HgX'),
        k = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        R = _.a.b9960f31,
        T = { viewType: 'media_picker' },
        A = y.a.createElement(E.a, null),
        O = function (e) {
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
            return l()(this, n), t.apply(this, arguments)
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
                    s = e.icon,
                    l = e.style,
                    c = e.withIcon,
                    d = o()(e, k),
                    u = O({ acceptGifs: t, acceptImages: n, acceptVideo: a }).concat(i).join(',')
                  return y.a.createElement(
                    I.a,
                    r()({}, d, {
                      accept: u,
                      behavioralEventContext: T,
                      icon: c ? s : void 0,
                      style: [F.root, l],
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
        accessibilityLabel: R,
        icon: A,
        size: 'medium',
        withIcon: !0,
      })
      var F = w.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = M
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'o', function () {
        return l
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
        s = n('pHkl'),
        l = function (e, t) {
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
            n = s.e.UNKNOWN,
            a = (t && t.attachment) || {}
          return (
            a.tweet
              ? (n = s.e.TWEET)
              : a.photo
              ? (n = s.e.PHOTO)
              : a.animated_gif
              ? (n = s.e.GIF)
              : a.video
              ? (n = a.video.audio_only ? s.e.VOICE : s.e.VIDEO)
              : a.card
              ? (n = s.e.CARD)
              : null != t && t.text && (n = s.e.TEXT),
            n
          )
        }
      function p(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function m(e) {
        return e === o.d.SECONDARY ? s.d.REQUESTS : e === o.d.TERTIARY ? s.d.LOW_QUALITY : s.d.PRIMARY
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
        s,
        l,
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
                          (s = {
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
                              s,
                              (l = {
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
                          s,
                          {
                            alias: null,
                            args: null,
                            concreteType: 'ConversationMetadata',
                            kind: 'LinkedField',
                            name: 'metadata',
                            plural: !1,
                            selections: [
                              s,
                              l,
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
    XygZ: function (e, t, n) {
      'use strict'
      var a = n('ax0f'),
        r = n('gIHd')
      a(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return r(this, 'a', 'name', e)
          },
        },
      )
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
          titleContainer: { flex: 1 },
          inlineNotificationsDisabledIcon: {
            paddingLeft: 'calc('.concat(e.spaces.space2, ' * 3)'),
            color: e.colors.gray700,
          },
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
          socialProofText: { marginLeft: 0, fontWeight: e.fontWeights.medium },
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
        s = n('ERkP'),
        l = n.n(s),
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
            s = (e.tweetId, o()(e, _)),
            d = l.a.useContext(c.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            m = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              m && Object(g.a)(t) && a(m).catch(n())
            },
            [t, m, n, a],
          )
          var h = u.isTrue('responsive_web_alt_text_badge_enabled'),
            f = i && Object(b.f)(i, p, t),
            v = f && Object(b.e)(f),
            E = u.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            y.a,
            r()({}, s, {
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
          return s
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
        s = function (e) {
          return e && e.type === a.b.REACTION_CREATE
        },
        l = [
          a.b.CONVERSATION_AVATAR_UPDATE,
          a.b.CONVERSATION_NAME_UPDATE,
          a.b.JOIN_CONVERSATION,
          a.b.PARTICIPANTS_JOIN,
          a.b.PARTICIPANTS_LEAVE,
        ],
        c = function (e) {
          return e && l.indexOf(e.type) > -1
        }
    },
    cIoY: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('1YZw'),
        o = n('rxPX'),
        s = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        l = n('VrFO'),
        c = n.n(l),
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
        I = n('t62R'),
        w = n('/yvb'),
        x = n('rHpw'),
        k = S.a.cfd2f35d,
        R = (function (e) {
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
                    s = Object(_.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: T.linkInput,
                      value: i,
                    })
                  return r.a.createElement(
                    C.a,
                    { onMaskClick: o, style: T.container, type: 'center', withMask: !0 },
                    a && r.a.createElement(I.b, { align: 'center', style: T.headerText, weight: 'bold' }, a),
                    n && r.a.createElement(I.b, { align: 'center', color: 'gray700', style: T.labelText }, n),
                    s,
                    r.a.createElement(w.a, { onPress: o, size: 'xLarge', style: T.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.Component)
      b()(R, 'defaultProps', { cancelButtonLabel: k })
      var T = x.a.create(function (e) {
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
        O = n('I/9y'),
        M = n('mjJ+'),
        F = n('cm6r'),
        D = n('CaKu'),
        L = n('U+bB'),
        P = S.a.e05c00b4,
        N = S.a.eabf2209,
        B = S.a.a613e72f,
        j = S.a.f88553c8,
        H = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        U = (function (e) {
          f()(n, e)
          var t = g()(n)
          function n(e) {
            var a
            return (
              c()(this, n),
              (a = t.call(this, e)),
              b()(m()(a), '_renderMenu', function (e) {
                return r.a.createElement(M.a, {
                  items: [{ text: B, Icon: O.a, onClick: a._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              b()(m()(a), '_handleCopyGifLinkButtonClick', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.gifUrl
                D.a.isAvailable() ? (D.a.setString(r), n({ text: j })) : a.setState({ showCopyLinkSheet: !0 }), e && e()
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
                    s = H[o]
                  return s
                    ? r.a.createElement(
                        r.a.Fragment,
                        null,
                        e
                          ? r.a.createElement(A, {
                              description: N({ providerName: i }),
                              headerText: P,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        r.a.createElement(
                          I.b,
                          { align: 'center', color: 'gray700', style: V.root },
                          r.a.createElement(
                            S.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, s),
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
                    F.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    r.a.createElement(
                      I.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      r.a.createElement(L.a, { source: { uri: t }, style: V.image }),
                      r.a.createElement(I.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(r.a.PureComponent),
        V = x.a.create(function (e) {
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
        z = U,
        K = s(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            a = e.provider
          return r.a.createElement(z, { addToast: t, gifUrl: n, provider: a })
        })
      t.a = K
    },
    dPJJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return c
        })
      n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var a = n('6/RC'),
        r = new Set(),
        i = new Set(),
        o = !1
      function s() {
        if (a.canUseDOM && !o) {
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
                  ? r.forEach(function (e) {
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
      var l = function (e) {
          return (
            o || s(),
            r.add(e),
            function () {
              return r.delete(e)
            }
          )
        },
        c = function (e) {
          return (
            o || s(),
            i.add(e),
            function () {
              return i.delete(e)
            }
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
        s = n('yiKp'),
        l = n.n(s),
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
            return l()({}, t)
          }),
        f = n('zQEV'),
        v = n('4n2h'),
        g = h(function (e) {
          var t = e.entry,
            n = e.entryType,
            a = e.isSelected,
            o = void 0 !== a && a,
            s = e.perspective,
            l = e.unread,
            c = void 0 !== l && l,
            d = e.users,
            u = Object(f.a)(t, n, s, d),
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
        I = n('3XMw'),
        w = n.n(I),
        x = function (e) {
          return r.a.createElement(w.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, r.a.createElement(i.b, null, e))
        },
        k = w.a.dedfd265
      var R = w.a.a876e58b,
        T = w.a.bf584cd1,
        A = w.a.a9cc8cfd,
        O = w.a.e20b65b0,
        M = w.a.e5bfe07d,
        F = w.a.b1a614fe,
        D = E(function (e) {
          var t = e.entry,
            n = e.perspective,
            a = e.isGroupDM,
            o = e.unread,
            s = void 0 !== o && o,
            l = e.user,
            c = void 0 === l ? {} : l,
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
            I = c.name,
            D = u.name,
            L = Object(v.b)(s),
            P = Object(v.a)(s, m),
            N = [
              E && r.a.createElement(i.b, { key: 'senderName' }, x(I), ' '),
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
                          ? r.a.createElement(i.b, null, w.a.d5b762c8)
                          : r.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, I)
                    : F)
                : g.fleet
                ? (N = (function (e, t, n) {
                    return e
                      ? r.a.createElement(
                          w.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          r.a.createElement(i.b, null, t),
                          r.a.createElement(i.b, null, n || ''),
                        )
                      : r.a.createElement(
                          w.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          r.a.createElement(i.b, null, n || ''),
                        )
                  })(_, D, f.text))
                : g.video
                ? (N = Object(S.l)(g, h)
                    ? E
                      ? (function (e, t) {
                          return e
                            ? r.a.createElement(i.b, null, w.a.h7033cac)
                            : r.a.createElement(
                                w.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                r.a.createElement(i.b, null, t),
                              )
                        })(_, I)
                      : k
                    : E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, w.a.j7d81019)
                          : r.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, I)
                    : R)
                : g.photo
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, w.a.f80629ba)
                          : r.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, I)
                    : T)
                : g.animated_gif
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, w.a.eb3d722e)
                          : r.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, I)
                    : A)
                : g.sticker
                ? (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, w.a.d30c2d4f)
                          : r.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, I)
                    : O)
                : g.card &&
                  (N = E
                    ? (function (e, t) {
                        return e
                          ? r.a.createElement(i.b, null, w.a.db53c017)
                          : r.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              r.a.createElement(i.b, null, t),
                            )
                      })(_, I)
                    : M)),
            r.a.createElement(i.b, { color: P, numberOfLines: 1, weight: L }, N)
          )
        }),
        L = n('uKEd'),
        P = function (e, t) {
          return t.senderId ? u.e.select(e, t.senderId) : void 0
        },
        N = function (e, t) {
          return Object(L.n)(e, t.reactionEntry.message_id)
        },
        B = function (e, t) {
          var n = N(e, t)
          return n && n.message_data && u.e.select(e, n.message_data.sender_id)
        },
        j = Object(b.e)(function () {
          return Object(c.createSelector)(P, N, B, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        H = n('33Kz'),
        U = j(function (e) {
          var t,
            n = e.isGroupDM,
            a = e.isSelected,
            o = void 0 !== a && a,
            s = e.messageUser,
            l = e.perspective,
            c = e.reactedMessageEntry,
            d = e.reactingUser,
            u = e.reactionEntry,
            p = e.unread,
            m = void 0 !== p && p,
            h = r.a.useContext(y.a).featureSwitches,
            f = c && c.message_data,
            g = f && f.attachment,
            b = f && f.text,
            _ = s && s.screen_name,
            E = l === (d && d.id_str),
            S = d && d.name,
            C = Object(H.b)(u.reaction_key || '', h),
            I = Object(v.b)(m),
            x = Object(v.a)(m, o)
          return (
            (t =
              g && g.tweet
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, C)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'ca684bf5' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, C)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'ab1cdfe2' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, C)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'jf27606a' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, C)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'b2da1bf8' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, _, C)
                  : (function (e, t, n) {
                      return e
                        ? r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'f9fb1cf6' },
                            r.a.createElement(i.b, null, n),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            r.a.createElement(i.b, null, a),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, o),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
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
                            w.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                        : r.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            r.a.createElement(i.b, null, t),
                            r.a.createElement(i.b, null, n),
                            r.a.createElement(i.b, null, a),
                          )
                    })(E, S, C, b)
                : (function (e, t, n) {
                    return e
                      ? r.a.createElement(w.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, r.a.createElement(i.b, null, n))
                      : r.a.createElement(
                          w.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          r.a.createElement(i.b, null, t),
                          r.a.createElement(i.b, null, n),
                        )
                  })(E, S, C)),
            r.a.createElement(i.b, { color: x, numberOfLines: 1, weight: I }, t)
          )
        }),
        V = n('H4nC'),
        z = n('b9JY'),
        K = w.a.fb3ccb55
      t.a = function (e) {
        var t = e.conversationType,
          n = e.entry,
          a = e.isSelected,
          s = void 0 !== a && a,
          l = e.perspective,
          c = e.unread
        if (n.marked_as_spam) {
          var d = Object(v.b)(c),
            u = Object(v.a)(c, s)
          return r.a.createElement(i.b, { color: u, numberOfLines: 1, weight: d }, K)
        }
        if (Object(z.b)(n)) {
          var p = n.message_data,
            m = (p = void 0 === p ? {} : p).recipient_id,
            h = p.sender_id
          return r.a.createElement(D, {
            entry: n,
            isGroupDM: t === o.CONVERSATION_TYPE.GROUP,
            isSelected: s,
            perspective: l,
            recipientId: m,
            senderId: h,
            unread: c,
          })
        }
        return Object(z.c)(n)
          ? r.a.createElement(U, {
              isGroupDM: t === o.CONVERSATION_TYPE.GROUP,
              isSelected: s,
              perspective: l,
              reactionEntry: n,
              senderId: n.sender_id,
              unread: c,
            })
          : Object(z.a)(n)
          ? r.a.createElement(g, { entry: n, entryType: n.type, isSelected: s, perspective: l, unread: c })
          : Object(z.d)(n)
          ? r.a.createElement(V.a, { entry: n, isCompact: !0, isSelected: s, unread: c })
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
        s = n('Y9Ll'),
        l = n.n(s),
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
        I = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              drawerExperimentEnabled: _.selectDrawerExperimentEnabled,
              perspective: E.q,
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
        w = n('V/6K'),
        x = (n('z84I'), n('yiKp')),
        k = n.n(x),
        R = (n('lTEL'), n('7x/C'), n('kYxP'), n('CDB5')),
        T = n('1YZw'),
        A = n('hqKg'),
        O = n('X/yg'),
        M = n('AQOc'),
        F = n('UhuB'),
        D = n('l0YN'),
        L = n('G6rE'),
        P = n('P1r1'),
        N = function (e, t) {
          return t.conversationId
        },
        B = Object(A.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, N(0, t))
          },
          E.q,
          function (e, t) {
            return t ? Object(O.e)(e, t) : void 0
          },
        ),
        j = function (e) {
          return function (t) {
            return R.c(e, t)
          }
        },
        H = function (e) {
          return function (t, n) {
            return R.a(e, t, n)
          }
        },
        U = {
          conversation: function (e, t) {
            return _.selectConversation(e, N(0, t))
          },
          entries: _.selectEntries,
          perspective: E.q,
          users: L.e.selectAll,
          dataSaverMode: P.j,
          dtabBarInfo: P.m,
          quickReplyOptions: B,
          visibility: _.selectDrawerVisibility,
          inboxUnreadCount: D.a,
          isUnread: function (e, t) {
            return !_.selectConversationIsRead(e, N(0, t))
          },
          isDmReceiptSettingEnabled: F.n,
        },
        V = {
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
        z = Object(S.a)()
          .propsFromState(function () {
            return k()(k()({}, U), V)
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = e.dataSaverMode,
              a = e.draftText,
              r = e.dtabBarInfo,
              i = e.entries,
              o = e.gifMetadata,
              s = e.inboxUnreadCount,
              l = e.isDmReceiptSettingEnabled,
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
              inboxUnreadCount: s,
              isDmReceiptSettingEnabled: l,
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
              addMedia: H(t),
              addToast: T.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
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
        K = n('aWyx'),
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
        Z = n('OrGc'),
        $ = n('hACr'),
        ee = n('fs1G'),
        te = n('MWbm'),
        ne = n('/yvb'),
        ae = n('Znyr'),
        re = n('t62R'),
        ie = n('xKuM'),
        oe = n('rHpw'),
        se = n('v6aA'),
        le = n('95Se'),
        ce = n('Avzu'),
        de = n('Lsrn'),
        ue = n('k/Ka'),
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ue.a)(
            'svg',
            k()(
              k()({}, e),
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
            k()(
              k()({}, e),
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
        Ie = (function (e) {
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
                    icon: y.a.createElement(le.a, null),
                    onPress: e._handleUnpopConvo,
                    type: e._getButtonType(),
                  }),
                  t && t > 0
                    ? y.a.createElement(ae.a, {
                        pip: !0,
                        style: we.newMessagePip,
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
                  { style: we.rightControls },
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
                  { style: we.titleContainer },
                  y.a.createElement(te.a, { style: [we.titleTextRoot, r && a ? we.titleTextHighlighted : null] }, i),
                  a
                    ? y.a.createElement(
                        te.a,
                        { style: we.newMessageDotContainer },
                        y.a.createElement(ve.a, {
                          accessibilityLabel: Se,
                          style: [we.newMessageDotRoot, r ? we.newMessageDotHighlighted : we.newMessageDotRegular],
                        }),
                      )
                    : null,
                )
              }),
              e
            )
          }
          return (
            l()(n, [
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
                    o = r ? (i ? [we.headerHighlighted] : [we.headerActive]) : [],
                    s = this._isExpanded()
                  return y.a.createElement(
                    $.a,
                    {
                      enabled: !0,
                      handlers:
                        ((e = {}),
                        v()(e, Z.e.goLists, ee.a),
                        v()(e, Z.e.toggleDMDrawer, this._handleToggleVisibilityKeyboard),
                        e),
                    },
                    y.a.createElement(
                      te.a,
                      {
                        ref: this._headerBar,
                        style: [we.headerRoot, !s && we.headerBorderClosed].concat(o, [we.cursor]),
                      },
                      y.a.createElement(ie.a, {
                        leftControl: a && this._isExpanded() ? this._renderLeftControl() : null,
                        onMiddleControlClick: this._handleToggleVisibility,
                        rightControl: this._renderRightControl(),
                        style: we.roundedAppBarCorners,
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
      v()(Ie, 'contextType', se.a)
      var we = oe.a.create(function (e) {
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
        xe = Q(Ie),
        ke = (n('JtPf'), n('87if'), n('zb92')),
        Re = Object(ke.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(20), n.e(236)]).then(n.bind(null, 'Rk1B'))
          },
        }),
        Te = n('aWzz'),
        Ae = n('XnpN'),
        Oe = n('GSsg'),
        Me = n('aITJ'),
        Fe = n('yrzJ'),
        De = (function (e) {
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
            l()(n, [
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
                    s = e.perspective,
                    l = e.triggerHeaderHighlight,
                    c = r ? 'white' : 'text',
                    d = r ? 'white' : 'gray700',
                    u =
                      t &&
                      t.type === K.a.ONE_TO_ONE &&
                      s &&
                      Object(Ae.a)(t, s).map(function (e) {
                        return e.user.screen_name
                      }),
                    p = u ? y.a.createElement(Fe.a, { color: d, screenName: u[0] }) : void 0
                  return y.a.createElement(
                    te.a,
                    { style: Le.headerRoot },
                    y.a.createElement(xe, {
                      conversationSubtitle: p,
                      conversationTitle: y.a.createElement(G.b, {
                        conversation: t,
                        perspective: s,
                        textColor: c,
                        withScreenName: !1,
                      }),
                      hasNewMessages: i,
                      history: n,
                      inboxUnreadCount: a,
                      isHighlighted: r,
                      onDrawerOpen: o,
                      triggerHighlight: l,
                    }),
                  )
                },
              },
              {
                key: '_updatePolling',
                value: function () {
                  this._pollingTimer && this._pollingTimer.stop(),
                    this.props.visibility === Y.b.COLLAPSED &&
                      ((this._pollingTimer = new Oe.a(this._fetchUpdatesIfNeeded, { interval: 3e3 })),
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
      v()(De, 'contextType', se.a), v()(De, 'childContextTypes', { getCustomLocation: Te.func })
      var Le = oe.a.create(function (e) {
          return { headerRoot: { position: 'sticky', top: 0, zIndex: e.componentZIndices.appBarZIndex } }
        }),
        Pe = z(De),
        Ne = (n('i4UL'), n('K1iM')),
        Be = n.n(Ne),
        je = (n('tQbP'), n('4q8G')),
        He = n('tn7R'),
        Ue = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              settings: P.g,
              unreadCount: D.a,
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
              s = e.visibility,
              l = [],
              c = Be()(Object(He.a)(n))
            try {
              for (c.s(); !(t = c.n()).done; ) {
                var d,
                  u = t.value
                !u.isDeleted && null !== (d = u.data) && void 0 !== d && d.trusted && l.push(u.data)
              }
            } catch (m) {
              c.e(m)
            } finally {
              c.f()
            }
            l.sort(je.a)
            var p = r > 0
            return {
              allowUntrustedInbox: 'all' === a.allow_dms_from || i > 0,
              conversationIds: l.map(function (e) {
                return e.conversation_id
              }),
              isUnread: p,
              untrustedUnreadCount: o,
              visibility: s,
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
        Ve = n('cFyg'),
        ze = n('pXKu'),
        Ke = n('nySH'),
        We = n('yw4N'),
        qe = n('FIs5'),
        Ge = n('csss'),
        Qe = 'dmDrawerInbox',
        Ye = J.a.a2f8105f,
        Xe = J.a.b8aa3744,
        Je = J.a.j06309e1,
        Ze = J.a.gee5150a,
        $e = J.a.cf2d1047,
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
                    { style: [at.viewportView, Ve.b.drawerHeaderRadius] },
                    y.a.createElement(
                      We.a,
                      { style: [at.viewportView, Ve.b.drawerHeaderRadius] },
                      e._renderHeader(),
                      y.a.createElement(ze.a, {
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
                    buttonText: Ze,
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
                        label: $e,
                        link: Object(Ke.a)(Y.d.SECONDARY),
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
            l()(n, [
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
      v()(nt, 'contextType', se.a)
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
            viewportView: k()(k()({}, oe.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        rt = Ue(nt),
        it = n('YeIG'),
        ot = n('A69o'),
        st = 'DMDrawer',
        lt = n('TnY3'),
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
            l()(n, [
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
                    s = t.width,
                    l = this.state,
                    c = l.isHeaderHighlighted,
                    d = l.unexpandedHeight,
                    u = this._isExpanded()
                  return this._showDMDrawer()
                    ? y.a.createElement(
                        ct.a.Drawer,
                        null,
                        y.a.createElement(dt.a, { id: 'DMDrawer' }, function (t, l) {
                          return y.a.createElement(
                            w.a.Provider,
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
                                r()({ ref: t() }, l({ style: [Ve.b.root, { width: s }], testID: st })),
                                y.a.createElement(
                                  te.a,
                                  {
                                    onLayout: d ? void 0 : e._handleLayout,
                                    style: [Ve.b.expandable, { height: d, maxHeight: d }, u && Ve.b.expanded],
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
      var ft = I(ht)
      t.default = Object(lt.a)(ft)
    },
    g54k: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return l
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
        s = n('oEGd'),
        l = function (e, t) {
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
          l,
        )
      t.a = Object(s.c)(c)
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
          return l
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
        s = r(a.b.TYPING_INDICATOR, o),
        l = r(a.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
    },
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return z
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
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
        I = n('rxPX'),
        w = n('0KEI'),
        x = function (e, t) {
          var n,
            a,
            r = t.urls,
            i = _()(r),
            o = y()(i.reverse())
          try {
            for (o.s(); !(a = o.n()).done; ) {
              var s = a.value
              if ((n = C.a.select(e, s))) break
            }
          } catch (l) {
            o.e(l)
          } finally {
            o.f()
          }
          return n
        },
        k = Object(I.a)()
          .propsFromState(function () {
            return { card: x }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: C.a.fetchCardPreviewIfNeeded,
              updateDMComposer: E.e,
              updateTweetComposer: S.w,
            }
          }),
        R = n('KqB4'),
        T = n.n(R),
        A = n('aX4+'),
        O = n('3XMw'),
        M = n.n(O),
        F = n('hOZg'),
        D = n('cnVF'),
        L = n('MWbm'),
        P = n('v6aA'),
        N = n('/yvb'),
        B = n('rHpw'),
        j = n('VY6S'),
        H = n('mN6z'),
        U = M.a.f6fec9f6,
        V = /^https?:\/\//i,
        z = function (e) {
          var t = T()(e)
          if (t.length)
            return t.map(function (e) {
              return (!V.test(e) && 'http://'.concat(e)) || e
            })
        },
        K = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              h()(l()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: D.B })
              }),
              h()(l()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  a = t.index,
                  r = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  s = (e || {}).cardUrl
                i._isDMComposer ? n && r(n, s) : o({ updates: { cardUrl: s }, index: a })
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
                  Object(H.a)(e.urls, t) || this._debouncedFetchCardPreview()
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
                        L.a,
                        { style: a },
                        v.a.createElement(A.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: r },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        v.a.createElement(N.a, {
                          accessibilityLabel: U,
                          icon: v.a.createElement(F.a, null),
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
      h()(K, 'contextType', P.a)
      var W = B.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        q = k(K)
      t.a = q
    },
    hiGS: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n.n(o),
        l = n('8W85')
      function c() {
        var e = r.a.useContext(S),
          t = s()(e.activeVoiceMessage, 2),
          n = t[0],
          a = t[1],
          i = s()(e.playerApi, 2)[1],
          o = s()(e.playerState, 2)[1]
        var c = {
          media: s()(n, 2)[1],
          onEnded: function () {
            a([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: o,
        }
        return r.a.createElement(l.a, c)
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
          s =
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
        return r.a.createElement(b.Provider, { value: s }, e.children)
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
    jtO7: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ERkP'),
        l = n.n(s),
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
          s = o()(e, h),
          v = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[a],
            insetFocusRing: !0,
          })
        return l.a.createElement(
          m.a,
          { style: f.container },
          l.a.createElement(
            u.a,
            r()({}, s, { interactiveStyles: v, style: f.root }),
            l.a.createElement(c.b, { align: n, color: a }, i),
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
        s = n('TIdA'),
        l = n('t62R'),
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
          I = e.withMask,
          w = void 0 === I || I,
          x = o.a.useState(!1),
          k = r()(x, 2),
          R = k[0],
          T = k[1],
          A = function (e) {
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
                withMask: w,
              },
              e,
            )
          },
          O = function () {
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
              F(),
              o.a.createElement(
                f.a,
                { style: g.container },
                D(),
                L(),
                P({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                P({ action: n, dismiss: e }),
              ),
            )
          },
          F = function () {
            var e = y && o.a.createElement(y, { style: b ? [g.icon, { color: h.a.theme.colors[b] }] : g.icon })
            return (
              _ &&
                !u.a.isEnabled &&
                (e = o.a.createElement(s.a, { accessibilityLabel: '', aspectMode: c.a.exact(2), image: _ })),
              e && o.a.createElement(f.a, { style: g.graphic }, e)
            )
          },
          D = function () {
            return o.a.createElement(l.b, { size: 'title3', weight: 'heavy' }, i)
          },
          L = function () {
            return o.a.createElement(l.b, { color: 'gray700', style: g.description }, C)
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
            E && E(), T(!0)
          }
        return S && !R ? (a ? A(a) : O()) : a || null
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
    krmn: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        l = n('RuTB'),
        c = n('3XMw'),
        d = n.n(c),
        u = Object(s.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(16), n.e(211)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(l.a, { hasError: e, onRetry: t })
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
        I = d.a.d4a4842d,
        w = o.a.createElement(_.a, null),
        x = d.a.fec16c1c,
        k = { viewType: 'emoji_picker' },
        R = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            a = e.onPress,
            i = e.size,
            s = e.style,
            l = e.textInputRef,
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
                  return l && l.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(b, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            o.a.createElement(C.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: I,
              behavioralEventContext: k,
              disabled: t,
              hoverLabel: { label: x },
              icon: w,
              onPress: function (e) {
                return a && a(e)
              },
              size: i,
              style: s,
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
        s = n('Lsrn'),
        l = n('k/Ka'),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
        s = n('jYSG'),
        l = n('AQ79'),
        c = n('+Bsv'),
        d = n('MWbm'),
        u = n('cHvH'),
        p = n('t62R'),
        m = n('rHpw'),
        h = function (e) {
          switch (e) {
            case l.d.SECONDARY:
              return '/messages/requests'
            case l.d.TERTIARY:
              return '/messages/requests/additional'
            case l.d.PRIMARY:
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
                  r.a.createElement(p.b, { style: g.stickyCopy }, s.a),
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
        s = n('Y9Ll'),
        l = n.n(s),
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
                return Object(E.C)(e, E.k)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: E.y }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        I = n('fs1G'),
        w = n('t62R'),
        x = n('feu+'),
        k = n('3XMw'),
        R = n.n(k),
        T = R.a.fd6150fc,
        A = y.a.createElement(
          R.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          y.a.createElement(w.b, { link: '/privacy' }, R.a.d42d239f),
        ),
        O = R.a.j24c37b2,
        M = C(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            a = e.shouldShowPrompt,
            r = y.a.useContext(_.a).featureSwitches
          if (!(a && r.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            y.a.createElement(x.a, {
              actionLabel: O,
              headline: T,
              onAction: function () {
                n.scribeAction('click'), t(E.k)
              },
              onClose: I.a,
              subtext: A,
              withCloseButton: !1,
            })
          )
        }),
        F = n('MMRb'),
        D = n('kGix'),
        L = n('0KEI'),
        P = Object(S.a)()
          .propsFromState(function () {
            return {
              hasConversations: F.selectHasConversations,
              fetchStatus: F.selectFetchStatus,
              isLoadingTop: F.selectIsLoadingTop,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.fetchStatus,
              n = e.hasConversations,
              a = e.isLoadingTop
            return { fetchStatus: n ? D.a.LOADED : t, isRefreshing: n && a }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: F.fetchInbox,
              fetchInboxIfNeeded: F.fetchInboxIfNeeded,
              fetchUpdates: F.fetchUpdatesIfNeeded,
            }
          }),
        N = n('ddV6'),
        B = n.n(N),
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
          n('HPNB')),
        H = n('EbOo'),
        U = n('tZH3'),
        V = n('1YZw'),
        z = n('hqKg'),
        K = n('AQOc'),
        W = n('G6rE'),
        q = n('oEGd'),
        G = n('RqPI'),
        Q = function (e, t) {
          return t.conversationId
        },
        Y = Object(z.createSelector)(
          Q,
          function (e, t) {
            return F.selectConversation(e, Q(0, t))
          },
          F.selectEntries,
          W.e.selectAll,
          function (e, t) {
            return !F.selectConversationIsRead(e, Q(0, t))
          },
          function (e, t) {
            var n = Q(0, t)
            return Object(F.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(E.C)(e, E.s)
          },
          G.y,
          G.o,
          function (e, t, n, a, r, i, o, s, l) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(K.a)(t.data, n, a),
              conversationId: e,
              unread: r,
              inboxType: i,
              shouldShowPinnedEducation: o,
              reporterCountry: s,
              reporterLanguage: l,
            }
          },
        ),
        X = {
          addFlag: E.y,
          addRecentSearch: F.addRecentSearches,
          addToast: V.b,
          block: W.e.block,
          createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: F.disableNotifications,
          enableNotifications: F.enableNotifications,
          leaveConversation: F.leaveConversation,
          muteDMUser: F.muteDMUser,
          unmuteDMUser: F.unmuteDMUser,
          unblock: W.e.unblock,
        },
        J = Object(q.f)(Y, X),
        Z = n('aA19'),
        $ = n('OhSZ'),
        ee = n('V/6K'),
        te = n('fQBn'),
        ne = n('Myq3'),
        ae = n('3wZR'),
        re = n('XnpN'),
        ie = n('aWyx'),
        oe = n('YemM'),
        se = 'conversation',
        le = n('u0B7'),
        ce = n('MWbm'),
        de = n('Irs7'),
        ue = n('eb3s'),
        pe = n('ZToW'),
        me = n('cHvH'),
        he = n('lHOd'),
        fe = n('kb9v'),
        ve = n('IG7M'),
        ge = n('mjJ+'),
        ye = n('Znyr'),
        be = n('0PHd'),
        _e = n('yrzJ'),
        Ee = n('Xrkv'),
        Se = n('efqG'),
        Ce = n('/yvb'),
        Ie = n('GBcw'),
        we = n('cm6r'),
        xe = n('htQn'),
        ke = n('5mJL'),
        Re = n('vMjK'),
        Te = n('AQ79'),
        Ae = n('pHkl'),
        Oe = n('X/yg'),
        Me = n('Lsrn'),
        Fe = n('k/Ka'),
        De = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Fe.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Me.a.root, e.style],
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
      De.metadata = { width: 24, height: 24 }
      var Le = De,
        Pe = n('ShJ/'),
        Ne = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Fe.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Me.a.root, e.style],
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
      Ne.metadata = { width: 32, height: 32 }
      var Be = Ne,
        je = n('zIWA'),
        He = n('5pef'),
        Ue = n('IpT4'),
        Ve = n('5oT/'),
        ze = n('fz3c'),
        Ke = R.a.d88d0790,
        We = R.a.ad63377d,
        qe = {
          confirmButtonLabel: R.a.bb1d57b6,
          actionTextLeave: R.a.g9074da4,
          header: R.a.gdf4b79f,
          text: R.a.h09b49f7,
        },
        Ge = R.a.e1c9ec9b,
        Qe = R.a.i6b19b07,
        Ye = R.a.e3cfff7c,
        Xe = R.a.f398722d,
        Je = R.a.a8ed0eca,
        Ze = R.a.jac4eb1e,
        $e = R.a.bdd91963,
        et = R.a.a30a206d,
        tt = R.a.ib4b1b85,
        nt = R.a.bd3ca2ee,
        at = function (e) {
          var t
          return Boolean(
            null == e || null === (t = e.labels) || void 0 === t
              ? void 0
              : t.find(function (e) {
                  return e.label_type === Te.a.PINNED
                }),
          )
        },
        rt = { component: 'low_quality_timeline' },
        it = function (e) {
          var t = e.children
          return y.a.createElement(ce.a, { style: oe.a.socialProofContainer }, t)
        },
        ot = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
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
                return y.a.createElement(ue.a, {
                  confirmButtonLabel: qe.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: qe.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: qe.text,
                })
              }),
              v()(d()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered,
                  i = e.state,
                  o = i.showActionMenu,
                  s = i.showPinnedAnnouncement,
                  l = e.props,
                  c = l.conversation,
                  d = l.position,
                  u = at(c),
                  p = function () {
                    e.setState({ showPinnedAnnouncement: !1 })
                  },
                  m = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  h = e._isPinnedEducationEnabled && s && 1 === d && !u,
                  f = !pe.a.isEnabled || n || a || r || o || h
                return y.a.createElement(ee.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return y.a.createElement(me.a, null, function (t) {
                    var a = t.windowWidth,
                      r = j.a.isTwoColumnLayout(a)
                    return y.a.createElement(he.a.Consumer, null, function (t) {
                      return y.a.createElement(
                        ce.a,
                        { style: oe.a.menuContainer },
                        y.a.createElement(
                          fe.a,
                          {
                            actionPrimary: { text: et, onClick: p },
                            headline: tt,
                            onDismiss: p,
                            shouldDisplay: h && !n,
                            text: nt({ count: e._count }),
                            withMask: !r,
                          },
                          r
                            ? y.a.createElement(ve.a, {
                                onClick: m,
                                renderActionMenu: e._renderActionMenu,
                                style: f ? oe.a.menu : oe.a.hiddenMenu,
                              })
                            : null,
                        ),
                        r
                          ? null
                          : y.a.createElement(ve.a, {
                              onClick: m,
                              renderActionMenu: e._renderActionMenu,
                              style: f ? oe.a.menu : oe.a.hiddenMenu,
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
                  o = at(a),
                  s = null == a ? void 0 : a.notifications_disabled,
                  l = []
                if (a) {
                  var c = {
                    Icon: o ? Le : Pe.a,
                    onClick: function () {
                      return e._handleTogglePinState(o)
                    },
                    text: o ? $e : Ge,
                    withBottomBorder: !0,
                  }
                  l.push(c)
                  var d = {
                      Icon: Be,
                      isEmphasized: !0,
                      onClick: e._handleDeleteMenuItemClick,
                      text: We,
                      withBottomBorder: !0,
                    },
                    u = {
                      Icon: je.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(i)()
                      },
                      text: Qe,
                      withBottomBorder: !0,
                    },
                    p = {
                      Icon: s ? He.a : Ue.a,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(r)
                      },
                      text: s ? Je : Ye,
                      withBottomBorder: !0,
                    }
                  l.push(u, p, d)
                }
                return y.a.createElement(ge.a, {
                  items: l,
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
                    ? y.a.createElement(ye.a, {
                        pip: !0,
                        style: oe.a.unreadMessagePip,
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
                var n = Object(ae.b)(t.icon)
                return y.a.createElement(
                  w.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? y.a.createElement(n, { style: oe.a.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              v()(d()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var a = n[0]
                switch (a.proof_type) {
                  case ie.d.MUTUAL_FRIENDS:
                    if (0 === a.total) return null
                    var r = a.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = a.users.map(function (e) {
                        return e.name
                      })
                    return y.a.createElement(
                      it,
                      null,
                      y.a.createElement(be.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: r,
                        knownFollowersCount: a.total,
                        knownFollowersNames: i,
                        textStyle: e._isVDLEnabled && oe.a.socialProofText,
                        withFacepile: !e._isVDLEnabled,
                      }),
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
                  i = n ? Object(re.a)(n, a) : [],
                  o = [],
                  s = function (e, t) {
                    return e.localeCompare(t)
                  },
                  l = i
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
                    .sort(s),
                  c = o.sort(s).concat(l)
                if (n) {
                  if (n.type === F.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var d = i.map(function (e) {
                        return e.user
                      }),
                      u = B()(d, 1)[0]
                    return y.a.createElement(_e.a, { color: 'gray700', screenName: u.screen_name })
                  }
                  var p = Object(Ee.a)(c, !0)
                  return y.a.createElement(w.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              v()(d()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = e.context.loggedInUserId,
                  i = Object(Oe.j)(n, r),
                  o = (null == n ? void 0 : n.type) === F.CONVERSATION_TYPE.GROUP
                return y.a.createElement(he.a.Consumer, null, function (t) {
                  return y.a.createElement(
                    Se.a,
                    {
                      renderContent: function (n, r) {
                        return y.a.createElement(U.a, {
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
                    y.a.createElement(Ce.a, {
                      accessibilityLabel: Ke,
                      icon: y.a.createElement(Ve.a, { style: e._isVDLEnabled ? oe.a.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? oe.a.vdlXButton : oe.a.xButton,
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
                    Object(re.a)(n, a).map(function (e) {
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
                    s = n.reporterCountry,
                    l = n.reporterLanguage,
                    c = ze.a.DMConversation,
                    d = e.context.featureSwitches,
                    u =
                      (null == r ? void 0 : r.type) === F.CONVERSATION_TYPE.GROUP ? '0' : e._getUserIdOfOneToOneConvo()
                  if (i)
                    if ((a.scribeAction('report'), Object(ze.g)(d, c, s, l))) {
                      var p = Object(ze.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: c,
                        reportedConversationId: i,
                        reportedUser: u,
                        scribeNamespace: a.contextualScribeNamespace,
                      })
                      t.push({
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(p) } },
                      })
                    } else {
                      var m = Object(Oe.g)(i, window.location.pathname, a.contextualScribeNamespace, o)
                      t.push(m)
                    }
                }
              }),
              v()(d()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  a = n.addToast,
                  r = n.analytics,
                  i = n.conversation,
                  o = n.disableNotifications,
                  s = n.enableNotifications
                if (null == i ? void 0 : i.notifications_disabled)
                  s({ conversationId: t }).then(a({ ariaOnly: !0, text: Ze }))
                else {
                  var l = (null == i ? void 0 : i.participants.length) || 0,
                    c = {
                      conversation_type:
                        (null == i ? void 0 : i.type) === F.CONVERSATION_TYPE.GROUP ? Ae.i.GROUP : Ae.i.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: l,
                      entry_point: Ae.c.THREE_DOT_MENU,
                    }
                  r.scribe({ element: 'thread', action: 'mute_dm_thread_forever', data: c }),
                    o({ conversationId: t }).then(a({ ariaOnly: !0, text: Xe }))
                }
              }),
              v()(d()(e), '_handleTogglePinState', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.conversation,
                  i = n.conversationId,
                  o = n.pinConversation,
                  s = n.position,
                  l = n.unpinConversation,
                  c = t ? 'unpin_dm_conversation' : 'pin_dm_conversation',
                  d = t ? l : o,
                  u = (null == r ? void 0 : r.participants.length) || 0,
                  p = {
                    conversation_type:
                      (null == r ? void 0 : r.type) === F.CONVERSATION_TYPE.GROUP ? Ae.i.GROUP : Ae.i.ONE_TO_ONE,
                    conversation_id: i,
                    conversation_participant_count: u,
                    position: s,
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
                  o = [i || r ? oe.a.inlineNotificationsDisabledIcon : oe.a.notificationsDisabledIcon],
                  s = Number(t && r ? (null == t ? void 0 : t.time) : null == a ? void 0 : a.sort_timestamp)
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  y.a.createElement(
                    ce.a,
                    { style: (i || r) && oe.a.inlineTimestamp },
                    a && s ? y.a.createElement(Ie.a, { timestamp: s }) : null,
                    null != a && a.notifications_disabled ? y.a.createElement(Ue.a, { style: o }) : null,
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
                    s = n.leaveConversation,
                    l = n.position,
                    c = e.context.history,
                    d = at(r),
                    u = (null == r ? void 0 : r.participants.length) || 0,
                    p = r && r.type === F.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    m = {
                      conversation_type:
                        (null == r ? void 0 : r.type) === F.CONVERSATION_TYPE.GROUP ? Ae.i.GROUP : Ae.i.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: l,
                      inbox_type: Object(Oe.i)(o),
                      entry_point: o === Ae.d.PRIMARY ? Ae.c.THREE_DOT_MENU : Ae.c.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    a.scribe({ element: 'thread', action: p, data: m }),
                    d && e._handleTogglePinState(d),
                    s({ conversationId: t }).catch(i({ showToast: !0 })),
                    c.replace(Object(Oe.f)(o))
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
                    a({ action: { label: Re.c, onAction: e._createUnblockUserHandler(t) }, text: Re.a })
                  }, o(H.a)),
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
                  s = n.onClick,
                  l = n.position,
                  c = n.searchQuery,
                  d = (null == i ? void 0 : i.participants.length) || 0,
                  u = (null == i ? void 0 : i.type) === F.CONVERSATION_TYPE.GROUP
                c &&
                  (r.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: o,
                      conversation_participant_count: d,
                      conversation_type: u ? Ae.i.GROUP : Ae.i.ONE_TO_ONE,
                      entry_point: Ae.c.ALL,
                      inbox_type: Ae.d.PRIMARY,
                      dm_search_result_type: Ae.a.CONVERSATION,
                      message_type: Ae.e.NOT_APPLICABLE,
                      position: l,
                    },
                  }),
                  r.scribe({ component: 'recent_search', action: 'add' }),
                  a(c)),
                  s(t, o, i, l)
              }),
              v()(d()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(r()(r()({}, rt), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag
                  e.shouldShowPinnedEducation && (this.setState({ showPinnedAnnouncement: !0 }), t(E.s))
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
                    s = null == n ? void 0 : n.max_entry_id,
                    l = null == n ? void 0 : n.convo_label,
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
                    I = C.showConfirmation,
                    w = C.showPinnedAnnouncement,
                    x = t.showConfirmation,
                    k = t.showPinnedAnnouncement
                  return (
                    a !== u ||
                    r !== p ||
                    i !== m ||
                    o !== h ||
                    s !== f ||
                    c !== g ||
                    _ !== S ||
                    I !== x ||
                    b !== E ||
                    l !== v ||
                    w !== k
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
                    s = t.messageId,
                    l = t.perspective,
                    c = t.position,
                    d = t.searchQuery,
                    u = t.unread,
                    p = this.state.showConfirmation,
                    m = (null == n ? void 0 : n.entries) || [],
                    h = i
                      ? m.find(function (e) {
                          return e.id === s
                        })
                      : Object(ne.a)(m, function (e) {
                          return !Ae.b.includes(e.type)
                        }),
                    f = [oe.a.root, u && !this._isVDLEnabled && oe.a.unread, a && this._isVDLEnabled && oe.a.active],
                    v = (null == n ? void 0 : n.type) === F.CONVERSATION_TYPE.GROUP,
                    g = this._isVDLEnabled && v
                  if (!n) return null
                  var b = !!n.convo_label,
                    _ = !n.trusted && !b,
                    E = this._renderConversationEndCell(h),
                    S = d && !i,
                    C = 'text',
                    I = 'bold'
                  return (
                    this._isVDLEnabled && !u && ((C = 'gray900'), (I = 'medium')),
                    this._isVDLEnabled && a && ((C = 'text'), (I = 'medium')),
                    !n || (!d && n.isSearchResultOnly)
                      ? null
                      : y.a.createElement(
                          y.a.Fragment,
                          null,
                          p ? this._renderConfirmationSheet() : null,
                          y.a.createElement(we.a, null, function (t) {
                            var s = t.isFocused,
                              p = t.isFocusedWithin,
                              m = t.isHovered
                            return y.a.createElement(
                              xe.a,
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
                                testID: se,
                              },
                              y.a.createElement(
                                ke.a,
                                {
                                  avatarCell: y.a.createElement(Z.a, { conversation: n, perspective: l, withBadge: g }),
                                  avatarSize: 'xxLarge',
                                },
                                y.a.createElement(
                                  ce.a,
                                  { style: oe.a.bodyColumn },
                                  y.a.createElement(
                                    ce.a,
                                    { style: oe.a.titleContainer },
                                    y.a.createElement($.b, {
                                      conversation: n,
                                      isConversationSearchTitle: !!S,
                                      isMessageSearchTitle: !!i,
                                      perspective: l,
                                      renderTimestamp: function () {
                                        return e._renderTimestamp(h)
                                      },
                                      textColor: C,
                                      titleWeight: I,
                                      withScreenName: !d && !i,
                                      withVDLRefresh: e._isVDLEnabled,
                                    }),
                                    y.a.createElement(
                                      ce.a,
                                      { style: [oe.a.snippet, !s && !p && !m && oe.a.snippetPadding] },
                                      h && !S
                                        ? y.a.createElement(te.a, {
                                            conversationType: n.type,
                                            entry: h,
                                            isMessageItem: i,
                                            isSelected: e._isVDLEnabled && a,
                                            perspective: l,
                                            unread: e._isVDLEnabled && u,
                                          })
                                        : S
                                        ? e._renderSearchConversationPreview()
                                        : null,
                                    ),
                                    b ? e._renderConversationLabel(n) : null,
                                    _ ? e._renderSocialProof(n) : null,
                                  ),
                                  E ? y.a.createElement(ce.a, { style: oe.a.endCell }, E) : null,
                                  e._renderConversationActions({ isFocused: s, isFocusedWithin: p, isHovered: m }),
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
      v()(ot, 'contextType', _.a),
        v()(ot, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var st = Object(de.a)(J(ot), { page: 'messages', section: 'inbox' }),
        lt =
          (n('jwue'),
          n('+oxZ'),
          n('JtPf'),
          n('87if'),
          Object(S.a)()
            .propsFromState(function () {
              return { pinnedConversationIds: F.selectPinnedConversationIds }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                  'DM_PINNED_INBOX_CONTEXT',
                ),
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox' })),
        ct = n('oUUt'),
        dt = (n('uFXj'), n('rHpw')),
        ut = R.a.b08821f3,
        pt = R.a.e047b8fa,
        mt = dt.a.create(function (e) {
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
        }),
        ht = function (e) {
          var t = Object(de.b)(),
            n = e.clearRecentSearches,
            a = e.headerText,
            r = e.icon,
            i = e.isInboxLabelHeader,
            o = e.withClearButton
          y.a.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var s,
            l = [mt.root, i && mt.labelHeader]
          return y.a.createElement(
            ce.a,
            { style: l },
            y.a.createElement(
              ce.a,
              { style: mt.iconContainer },
              (s = r) ? y.a.createElement(s, { style: mt.icon }) : null,
              y.a.createElement(
                w.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
                a,
              ),
            ),
            o
              ? y.a.createElement(
                  Ce.a,
                  { accessibilityLabel: ut, onPress: n, style: mt.backButton, type: 'onMediaWhiteFilled' },
                  pt,
                )
              : null,
          )
        },
        ft = n('h3MB'),
        vt =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        gt = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        yt = Object(S.a)()
          .propsFromState(function () {
            return { fetchStatus: gt, sliceItems: vt }
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
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'DM_SEARCH_ALL_CONTEXT',
              ),
              fetchSearchIfNeeded: t.fetchIfNeeded,
            }
          }),
        bt = n('MDbM'),
        _t = n('v//M'),
        Et = n('0yYu'),
        St = n('lBmi'),
        Ct = n('91AQ'),
        It = n('6ZHn'),
        wt = R.a.c94ac69d,
        xt = R.a.a2f8105f,
        kt = R.a.g2fd3205,
        Rt = R.a.ffd9cfe6,
        Tt = (function (e) {
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
                  s = e._groupBucketSize < n.length,
                  l = e._messagesBucketSize < a.length,
                  c = e._peopleBucketSize < r.length
                return (null == n ? void 0 : n.length) || r.length || a.length
                  ? y.a.createElement(
                      y.a.Fragment,
                      null,
                      r.length ? e._renderPeopleSection() : null,
                      o && !c ? y.a.createElement(Et.a, null) : null,
                      c ? e._renderDMSearchFooter(kt) : null,
                      n.length ? e._renderGroupsSection() : null,
                      s ? e._renderDMSearchFooter(wt) : null,
                      a.length ? e._renderMessagesSection() : null,
                      l ? e._renderDMSearchFooter(xt) : null,
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
                  ce.a,
                  { style: Ot.header },
                  y.a.createElement(w.b, { link: { pathname: n.pathname, state: { tab: t } } }, Rt),
                )
              }),
              v()(d()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return y.a.createElement(ht, { headerText: t, icon: n })
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
                  e._renderDMHeader({ icon: St.a, headerText: wt }),
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
                  e._renderDMHeader({ icon: Ct.a, headerText: xt }),
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
                  e._renderDMHeader({ icon: It.a, headerText: kt }),
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
            l()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    a = t.module
                  e.module !== a && n !== bt.a.FAILED && this._handleFetch()
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
                  return y.a.createElement(_t.a, {
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
      v()(Tt, 'contextType', _.a)
      var At,
        Ot = dt.a.create(function (e) {
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
        Mt = yt(Tt),
        Ft = n('wAC9'),
        Dt = (n('1IsZ'), n('IAdD'), n('xPna')),
        Lt = function (e) {
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
            Object(Dt.a)(a)
          )
        },
        Pt = function (e) {
          return Object(Ft.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(Ae.g, '-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Lt,
          })
        },
        Nt = function (e, t) {
          return t.query
        },
        Bt = Object(S.a)().propsFromState(function () {
          return {
            sliceModule: Object(z.createSelector)(Nt, function (e) {
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
            s = e.sliceModule,
            l = e.unpinConversation
          return s
            ? y.a.createElement(Mt, {
                loadingLabel: t,
                location: n,
                module: s,
                pinConversation: a,
                query: r,
                renderEmptyState: i,
                renderInboxItem: o,
                unpinConversation: l,
              })
            : i()
        }),
        jt = F.selectRecentSearches,
        Ht = function (e, t) {
          return t.query ? F.selectSearchConversations(e, t.query) : []
        },
        Ut = function (e, t) {
          return t.query ? F.selectSearchFetchStatus(e, t.query) : D.a.LOADED
        },
        Vt = function (e, t) {
          return t.conversationIds || []
        },
        zt = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        Kt = Object(S.a)()
          .propsFromState(function () {
            return { conversationIds: Vt, recentSearches: jt, searchFetchStatus: Ut, searchConversationIds: Ht }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              a = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: zt(a, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: F.addRecentSearches,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: F.searchConversations,
              clearRecentSearch: F.clearRecentSearch,
              clearRecentSearches: F.clearRecentSearches,
            }
          }),
        Wt = n('VY6S'),
        qt = n('s14A'),
        Gt = function (e) {
          return Object(Ft.a)({
            contextSuffix: 'DM_GROUP_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMGroupSearch
            },
            sliceKey: ''.concat(Ae.g, '-groups-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Lt,
          })
        },
        Qt = function (e) {
          return Object(Ft.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(Ae.g, '-people-').concat(e),
            getEndpointParams: function (t) {
              return r()(r()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Lt,
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
            sliceModule: Object(z.createSelector)(Xt, Yt, function (e, t) {
              var n = t && e === Ae.h.PEOPLE
              return t && e === Ae.h.GROUPS ? Gt(t) : n ? Qt(t) : void 0
            }),
          }
        }),
        Zt = n('FS1z'),
        $t = Jt(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            a = e.pinConversation,
            r = e.renderEmptyState,
            i = e.renderInboxItem,
            o = e.sliceModule,
            s = e.unpinConversation
          return o
            ? y.a.createElement(Zt.a, {
                footer: t,
                module: o,
                noItemsRenderer: r,
                onScrollEnd: n,
                renderer: i({ conversationIds: [], pinConversation: a, unpinConversation: s }),
                withoutHeadroom: !0,
              })
            : r()
        }),
        en = n('VPW4'),
        tn = (n('enFi'), n('mN6z')),
        nn = n('TEoO'),
        an = n('NjAB'),
        rn = n('Fr3L'),
        on = n('uDfI'),
        sn = n('DQzJ'),
        ln = void 0 !== At ? At : (At = n('y59G')),
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
            s = e.onScrollEnd,
            l = e.pinConversation,
            c = e.renderInboxItem,
            d = e.searchTerm,
            u = e.unpinConversation,
            p = Object(on.c)(),
            m = Object(sn.a)(ln, { query: d }),
            h = m.data,
            f = m.fetchNext,
            v = m.hasNext,
            g = y.a.useMemo(
              function () {
                var e,
                  t,
                  n,
                  a =
                    null == h ||
                    null === (e = h.dm_message_slice_result) ||
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
                  i = null == h || null === (n = h.dm_message_slice_result) || void 0 === n ? void 0 : n.items,
                  o = Object(an.b)(a, [ft.a]),
                  s = Object(an.b)(i, [ft.b])
                return {
                  normalizedConversations: o,
                  normalizedMessages: s,
                  entities: r()(r()({}, null == o ? void 0 : o.entities), null == s ? void 0 : s.entities),
                }
              },
              [null == h || null === (t = h.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            b = g.entities,
            _ = g.normalizedConversations,
            E = g.normalizedMessages,
            S =
              ((n = h),
              (a = y.a.useRef()),
              y.a.useEffect(function () {
                a.current = n
              }),
              a.current)
          return (
            y.a.useEffect(
              function () {
                Object(tn.a)(h, S) || p(Lt(b, !0))
              },
              [b, h, S, p],
            ),
            y.a.createElement(nn.a, {
              cacheKey: cn,
              footer: v ? null : i,
              identityFunction: un,
              items: null == E ? void 0 : E.result,
              noItemsRenderer: o,
              onNearEnd: f,
              onScrollEnd: s,
              renderer: c({
                conversationIds: null == _ ? void 0 : _.result,
                isMessageItem: !0,
                messageIds: null == E ? void 0 : E.result,
                pinConversation: l,
                unpinConversation: u,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        mn = dt.a.create(function (e) {
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
        vn = n('VwDm'),
        gn = n('hOZg'),
        yn = R.a.dbd5d40f,
        bn = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    a = e.recentSearch,
                    r = y.a.createElement(fn.a, { Icon: vn.a, color: 'neutral', size: 'xLarge', style: _n.searchIcon }),
                    i = [_n.listItemView, _n.bottomBorder]
                  return y.a.createElement(
                    xe.a,
                    { onPress: n, style: i },
                    y.a.createElement(
                      ce.a,
                      null,
                      y.a.createElement(
                        ke.a,
                        { avatarCell: r, avatarSize: 'xLarge', cellStyle: _n.avatarColumn },
                        y.a.createElement(
                          ce.a,
                          { style: _n.container },
                          y.a.createElement(w.b, { numberOfLines: 1 }, a),
                          y.a.createElement(Ce.a, {
                            accessibilityLabel: yn,
                            borderColor: 'transparent',
                            icon: y.a.createElement(gn.a, null),
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
        _n = dt.a.create(function (e) {
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
        Cn = n('IG4P'),
        In = n('RJrc'),
        wn = n('TnY3'),
        xn = n('FIs5'),
        kn = n('6OUF'),
        Rn = n('k/OQ'),
        Tn = n('95Se'),
        An = 'dmSearchInbox',
        On = function (e) {
          return e
        },
        Mn = R.a.b08821f3,
        Fn = R.a.a66ac766,
        Dn = R.a.fe61929d,
        Ln = R.a.a846382a,
        Pn = R.a.b9dae4f4,
        Nn = R.a.e7fb2027,
        Bn = R.a.b92a21d8,
        jn = R.a.jdc67c42,
        Hn = R.a.e8581ccd,
        Un = R.a.f08940ab,
        Vn = R.a.gaae1fd5,
        zn = R.a.f8321d82,
        Kn = R.a.c94ac69d,
        Wn = R.a.a2f8105f,
        qn = R.a.g2fd3205,
        Gn = R.a.fb3c8e74,
        Qn = (function (e) {
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
                    y.a.createElement(xn.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Un,
                      header: Bn({ query: r }),
                      message: e._messageSearchEnabled ? Hn : jn,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : y.a.createElement(
                      ce.a,
                      { style: ea.emptyState },
                      y.a.createElement(w.b, { align: 'center', color: 'gray700' }, Vn),
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
                      y.a.createElement(ht, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Gn,
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
              v()(d()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  a = t.pinConversation,
                  r = t.renderInboxItem,
                  i = t.unpinConversation,
                  o = e.state.debouncedQuery
                return o
                  ? y.a.createElement(Bt, {
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
                return y.a.createElement($t, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  pinConversation: a,
                  query: o,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: r,
                  tabType: t ? Ae.h.GROUPS : Ae.h.PEOPLE,
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
              v()(d()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case qn:
                    return e._renderConversationsTab(!1)
                  case Kn:
                    return e._renderConversationsTab(!0)
                  case Wn:
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
                  s = e.state.isRefreshing
                return y.a.createElement(
                  qt.a,
                  null,
                  y.a.createElement(
                    Cn.a,
                    { isRefreshing: s, onRefresh: e._handlePullToRefresh },
                    y.a.createElement(nn.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: Sn.a,
                      assumedItemHeight: 100,
                      cacheKey: An,
                      footer: e._renderFooter(),
                      identityFunction: On,
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
                  ? y.a.createElement(In.a, null)
                  : y.a.createElement(
                      ce.a,
                      { style: ea.footerContainer },
                      y.a.createElement(w.b, { align: 'center', size: 'body', weight: 'bold' }, Nn),
                      y.a.createElement(
                        we.a,
                        { interactiveStyles: null },
                        y.a.createElement(
                          w.b,
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
              v()(d()(e), '_handleSearchChangeDebounced', Object(Wt.a)(e._handleSearchChangeInner, 200)),
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
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
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
                    o = [ea.searchInput, i ? ea.searchInputBorder : void 0],
                    s = ((null == t ? void 0 : t.state) || {}).tab,
                    l = [zn, qn, Kn]
                  this._messageSearchEnabled && l.push(Wn)
                  var c = l.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return s === e || (!s && e === zn)
                      },
                      to: r()(r()({}, t), {}, { state: r()(r()({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    y.a.createElement(
                      ce.a,
                      { style: o },
                      y.a.createElement(Ce.a, {
                        accessibilityLabel: Mn,
                        icon: y.a.createElement(Tn.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      y.a.createElement(kn.a, {
                        Icon: vn.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? Ln : Dn,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || s === qn || s === Kn)
                      ? y.a.createElement(
                          y.a.Fragment,
                          null,
                          y.a.createElement(Rn.a, { links: c }),
                          this._renderTabContent(),
                        )
                      : y.a.createElement(_t.a, {
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
      v()(Qn, 'contextType', _.a), v()(Qn, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var Yn,
        Xn,
        Jn,
        Zn,
        $n,
        ea = dt.a.create(function (e) {
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
        ta = Object(wn.a)(Kt(Qn)),
        na = n('UIzd'),
        aa = n.n(na),
        ra = n('OIs+'),
        ia = R.a.cb367657,
        oa = R.a.ie9a7e48,
        sa = R.a.hd3927c6,
        la = R.a.f1ac0968,
        ca =
          ((Yn = {}),
          v()(Yn, ra.a.Offline, { toast: { text: oa } }),
          v()(Yn, 'defaultToast', { text: ia }),
          v()(Yn, 'showToast', !0),
          Yn),
        da =
          ((Xn = {}),
          v()(Xn, ra.a.Offline, { toast: { text: la } }),
          v()(Xn, 'defaultToast', { text: sa }),
          v()(Xn, 'showToast', !0),
          Xn),
        ua = n('9SqB'),
        pa = n.n(ua),
        ma = n('Ud88'),
        ha = n.n(ma),
        fa = R.a.e4b3f520,
        va = R.a.ae4d666a,
        ga = function (e) {
          return e
        },
        ya = R.a.a219e217,
        ba = R.a.d571e4f8,
        _a = R.a.a551bf7d,
        Ea = R.a.d98e066b,
        Sa = R.a.j302dba7,
        Ca = void 0 !== Jn ? Jn : (Jn = n('X8um')),
        Ia = { context: 'DM_PINNED_INBOX' },
        wa = function (e) {
          var t,
            a,
            i,
            o = Object(on.c)(),
            s = e.accessibilityTitle,
            l = e.analytics,
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
            C = ha()(),
            I = Object(sn.a)(Ca, { label: Te.a.PINNED }).data,
            w = (null == I || null === (t = I.labeled_conversation_slice) || void 0 === t ? void 0 : t.items) || [],
            x = Object(an.b)(w, [ft.a]).entities,
            k = y.a.useContext(_.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            R = y.a.useState(!1),
            T = B()(R, 2),
            A = T[0],
            O = T[1],
            M = y.a.useState(!1),
            D = B()(M, 2),
            L = D[0],
            P = D[1],
            N =
              ((a = I),
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
                        return -1 === w.indexOf(e.rest_id)
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
                  o(Lt({ conversations: v()({}, e.rest_id, r()(r()({}, e), {}, { labels: n })) }))
                }),
                o(Lt(x, !1))
            },
            [I],
          )
          var j = pa()(void 0 !== Zn ? Zn : (Zn = n('ZH9U'))),
            H = B()(j, 1)[0],
            U = pa()(void 0 !== $n ? $n : ($n = n('rQjK'))),
            z = B()(U, 1)[0],
            K = function (e, t) {
              H({
                variables: { conversation_id: e, label: Te.a.PINNED },
                onCompleted: function (n) {
                  var a
                  switch (null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename) {
                    case 'DMConversationLabelInfo':
                      var i = n.add_dm_conversation_label_v3,
                        s = i.label_type,
                        c = i.timestamp
                      o(
                        Lt({
                          conversations: v()({}, e, r()(r()({}, t), {}, { labels: [{ label_type: s, timestamp: c }] })),
                        }),
                      ),
                        o(Object(V.b)({ ariaOnly: !0, text: Ea }))
                      break
                    case 'DMConversationLabelUnavailable':
                      var d = n.add_dm_conversation_label_v3.failure_reason
                      l.scribe({
                        element: 'thread',
                        action: 'error_shown',
                        data: { error_type: Ae.f.MAX_PINS_REACHED },
                      }),
                        'ExceededMaxPinnedConversations' === d && P(!0)
                  }
                },
                onError: function (e) {
                  u(ca)(e)
                },
              })
            },
            W = function (e, t) {
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
                  o(Lt({ conversations: v()({}, e, r()(r()({}, t), {}, { labels: i })) })),
                    o(Object(V.b)({ ariaOnly: !0, text: Sa }))
                },
                updater: function (t) {
                  var n,
                    a,
                    r =
                      null ===
                        (n = w.find(function (t) {
                          return t.rest_id === e
                        })) || void 0 === n
                        ? void 0
                        : n.id,
                    i = null == I || null === (a = I.labeled_conversation_slice) || void 0 === a ? void 0 : a.__id
                  if (r && i) {
                    var o = t.get(r),
                      s = t.get(i)
                    s && o && (Object(ct.b)(s, r), t.delete(r))
                  }
                },
                onError: function (e) {
                  u(da)(e)
                },
              })
            },
            q =
              null == d
                ? void 0
                : d.filter(function (e) {
                    return -1 === f.indexOf(e)
                  }),
            G = f.length && q.length,
            Q = y.a.createElement(
              y.a.Fragment,
              null,
              m,
              null != f && f.length
                ? y.a.createElement(
                    y.a.Fragment,
                    null,
                    xa(fa),
                    f.map(function (e, t) {
                      return b({ conversationIds: f, pinConversation: K, unpinConversation: W })(e)
                    }),
                  )
                : null,
              G ? xa(va) : null,
            )
          return null != d && d.length
            ? y.a.createElement(
                y.a.Fragment,
                null,
                L
                  ? y.a.createElement(ue.a, {
                      confirmButtonLabel: ya,
                      headline: ba({ count: k }),
                      onConfirm: function () {
                        return P(!1)
                      },
                      text: _a,
                      withCancelButton: !1,
                    })
                  : null,
                E
                  ? y.a.createElement(ta, {
                      accessibilityTitle: s,
                      analytics: l,
                      conversationIds: d,
                      hideRecentSearches: e.hideRecentSearches,
                      onQueryChange: e.onQueryChange,
                      pinConversation: K,
                      query: e.query,
                      renderInboxItem: e.renderInboxItem,
                      unpinConversation: W,
                    })
                  : y.a.createElement(
                      Cn.a,
                      {
                        isRefreshing: A,
                        onRefresh: function () {
                          O(!0)
                          var e = aa()(C, Ca, { label: Te.a.PINNED }).toPromise()
                          Promise.all([
                            e,
                            function () {
                              return o(F.fetchInbox())
                            },
                          ])
                            .then(function () {
                              return O(!1)
                            })
                            .catch(function (e) {
                              u()(e), O(!1)
                            })
                        },
                      },
                      c && null != q && q.length
                        ? y.a.createElement(nn.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: s,
                            anchoring: Sn.a,
                            assumedItemHeight: 100,
                            cacheKey: c,
                            footer: p,
                            header: Q,
                            identityFunction: ga,
                            items: q,
                            onNearEnd: h,
                            renderer: b({ conversationIds: q, pinConversation: K, unpinConversation: W }),
                            withKeyboardShortcuts: S,
                            withoutHeadroom: !0,
                          })
                        : Q,
                    ),
              )
            : g()
        },
        xa = function (e) {
          return y.a.createElement(ce.a, null, y.a.createElement(ht, { headerText: e, isInboxLabelHeader: !0 }))
        }
      var ka = lt(function (e) {
          return y.a.createElement(rn.a, { errorConfig: Ia }, y.a.createElement(wa, e))
        }),
        Ra = n('dwig'),
        Ta = n('QB0K'),
        Aa = n('Avzu'),
        Oa = n('FRNI'),
        Ma = R.a.h845f281,
        Fa = R.a.f325afc3
      function Da() {
        return y.a.createElement(Ta.a, {
          accessibilityLabel: Ma,
          href: '/messages/compose',
          icon: y.a.createElement(Aa.a, null),
          label: Ma,
          scribeComponent: 'floating_dm_button',
          shortLabel: Fa,
          testID: Oa.a.message,
        })
      }
      var La = y.a.memo(Da),
        Pa = n('tI3i'),
        Na = n.n(Pa),
        Ba = n('sNn6'),
        ja = n('883S'),
        Ha = n('yoO3'),
        Ua = n('GSsg'),
        Va = n('2g+p'),
        za = n('mw9i'),
        Ka = n('BcsE'),
        Wa = n('+d3d'),
        qa = function (e) {
          return e
        },
        Ga = R.a.a66ac766,
        Qa = R.a.fe61929d,
        Ya = R.a.a846382a,
        Xa = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, a)),
              v()(d()(i), 'state', { showSearchView: !1, searchQuery: '' }),
              v()(
                d()(i),
                '_enablePinnedInbox',
                i.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                d()(i),
                '_messageSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                  i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              v()(
                d()(i),
                '_modularSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              v()(
                d()(i),
                '_isVDLEnabled',
                i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  i.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              v()(d()(i), '_render', function () {
                var e = i.props.withPinnedInbox
                return i._enablePinnedInbox && e ? i._renderPinnedInbox() : i._renderInbox()
              }),
              v()(d()(i), '_renderFocusedSearch', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  a = e.conversationIds,
                  r = i.state.searchQuery
                return y.a.createElement(ta, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: a,
                  hideRecentSearches: i._hideRecentSearches,
                  onQueryChange: i._handleQueryChange,
                  query: r,
                  renderInboxItem: i._renderInboxItem,
                })
              }),
              v()(d()(i), '_renderInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  a = e.footer,
                  r = e.isDrawer,
                  o = e.isRefreshing,
                  s = e.renderEmptyDMInbox,
                  l = e.virtualScrollerCacheKey
                return i.state.showSearchView
                  ? i._renderFocusedSearch()
                  : y.a.createElement(
                      Cn.a,
                      { isRefreshing: o, onRefresh: i._handlePullToRefresh },
                      l && n
                        ? y.a.createElement(nn.a, {
                            accessibilityRole: 'tablist',
                            accessibilityTitle: t,
                            anchoring: Sn.a,
                            assumedItemHeight: 100,
                            cacheKey: l,
                            footer: a,
                            header: i._renderHeader(),
                            identityFunction: qa,
                            items: n,
                            noItemsRenderer: s,
                            onNearEnd: i._handleNearEnd,
                            renderer: i._renderInboxItem({ conversationIds: n }),
                            withKeyboardShortcuts: !r,
                            withoutHeadroom: !0,
                          })
                        : null,
                    )
              }),
              v()(d()(i), '_handleNearEnd', function () {
                i._handleHistoryRequest()
              }),
              v()(d()(i), '_handleQueryChange', function (e) {
                i.setState({ searchQuery: e })
              }),
              v()(d()(i), '_handleSearchChange', function (e) {
                e.currentTarget.value
                i.state.showSearchView || i.setState({ showSearchView: !0 })
              }),
              v()(d()(i), '_handleSearchClick', function () {
                i.props.analytics.scribe({ component: 'search', action: 'click' }), i.setState({ showSearchView: !0 })
              }),
              v()(d()(i), '_hideRecentSearches', function () {
                i.setState({ showSearchView: !1, searchQuery: '' })
              }),
              v()(d()(i), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  a = void 0 !== n && n,
                  o = e.messageIds,
                  s = e.pinConversation,
                  l = e.unpinConversation
                return function (e, n) {
                  var c = i.context.loggedInUserId,
                    d = i.props.location,
                    u = i.state.searchQuery,
                    p = a ? (o || []).indexOf(e) : -1,
                    m = -1 !== p && null != t && t.length ? t[p] : null,
                    h = m ? e : '',
                    f = m || e,
                    v = {
                      pathname: '/messages/'.concat(f),
                      state: r()(r()({}, null == d ? void 0 : d.state), {}, { entryPoint: null }),
                    },
                    g = f && null != t && t.length ? t.indexOf(f) : null,
                    _ = Object(Ka.a)(g) ? g + 1 : 0
                  Na()(!!c, 'loggedInUserId must be defined'), n && n(!0)
                  var E = function (e) {
                    return y.a.createElement(st, {
                      conversationId: f,
                      inboxType: i.props.inboxType,
                      isActive: e,
                      isMessageItem: a,
                      key: f,
                      link: v,
                      messageId: h,
                      onClick: i._handleConversationClick,
                      perspective: c,
                      pinConversation: s,
                      position: _,
                      searchQuery: u,
                      unpinConversation: l,
                    })
                  }
                  return i._isVDLEnabled
                    ? y.a.createElement(Ba.a, { exact: !1, path: v.pathname }, E)
                    : y.a.createElement(b.a, { exact: !1, path: v.pathname }, E)
                }
              }),
              v()(d()(i), '_renderPinnedInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  a = e.footer,
                  r = e.isDrawer,
                  o = e.renderEmptyDMInbox,
                  s = e.virtualScrollerCacheKey,
                  l = i.state,
                  c = l.searchQuery,
                  d = l.showSearchView
                return n.length
                  ? y.a.createElement(ka, {
                      accessibilityTitle: t,
                      cacheKey: s,
                      conversationIds: n,
                      footer: a,
                      header: i._renderHeader(),
                      hideRecentSearches: i._hideRecentSearches,
                      onNearEnd: i._handleNearEnd,
                      onQueryChange: i._handleQueryChange,
                      query: c,
                      renderEmptyDMInbox: o,
                      renderInboxItem: i._renderInboxItem,
                      showSearchView: d,
                      withKeyboardShortcuts: !r,
                    })
                  : o()
              }),
              v()(d()(i), '_handleFetchInitialWrapper', function () {
                i._handleFetchInitial()
              }),
              v()(d()(i), '_handleFetchInitial', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchInboxIfNeeded,
                  a = e.fetchUpdates
                return n()
                  .then(i._updateLastSeenEventId, t())
                  .then(function () {
                    i._updatePolling.start()
                  })
                  .then(function () {
                    return a().catch(t())
                  })
              }),
              v()(d()(i), '_handleConversationClick', function (e, t, n, a) {
                var r = i.props,
                  o = r.analytics,
                  s = r.customCellClick,
                  l = (null == n ? void 0 : n.participants.length) || 0,
                  c = (null == n ? void 0 : n.type) === F.CONVERSATION_TYPE.GROUP
                o.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: i.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: l,
                    conversation_type: c ? Ae.i.GROUP : Ae.i.ONE_TO_ONE,
                    position: a,
                  },
                }),
                  s && s(e, t)
              }),
              v()(d()(i), '_handleEmptyDMInboxImpression', function () {
                i.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(d()(i), '_handlePullToRefresh', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(i._updateLastSeenEventId, t())
              }),
              v()(d()(i), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== Va.a.currentState) return i._updateLastSeenEventId()
              }),
              v()(d()(i), '_renderHeader', function () {
                var e = i.props,
                  t = e.renderStickyContent,
                  n = e.withDmSearch,
                  a = [Ja.searchInput, i._isVDLEnabled ? void 0 : Ja.searchInputBorder]
                return y.a.createElement(
                  y.a.Fragment,
                  null,
                  n
                    ? y.a.createElement(
                        ce.a,
                        { onClick: i._handleSearchClick, style: a },
                        y.a.createElement(kn.a, {
                          Icon: vn.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: i._handleSearchChange,
                          placeholder: i._messageSearchEnabled ? Ya : Qa,
                          withClearButton: !0,
                        }),
                      )
                    : null,
                  t ? t() : null,
                )
              }),
              v()(d()(i), '_updateLastSeenEventId', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (i._fab = y.a.createElement(La, null)),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.fetchInboxHistory,
                    r = t.fetchUpdates
                  return (
                    (this._updatePolling = new Ua.a(
                      function () {
                        r().then(e._updateLastSeenEventIdIfActive, n(ja.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(Wa.a)(function () {
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
                    Ha.a,
                    null,
                    y.a.createElement(M, null),
                    y.a.createElement(
                      Ra.a,
                      { component: za.a, fab: this._fab, style: Ja.root },
                      y.a.createElement(_t.a, {
                        accessibilityLabel: Ga,
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
      v()(Xa, 'contextType', _.a),
        v()(Xa, 'defaultProps', {
          conversationIds: [],
          inboxType: Te.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Ja = dt.a.create(function (e) {
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
      t.a = Object(wn.a)(P(Xa))
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        l = n.n(s),
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
        I = 'image',
        w = n('TIdA'),
        x = n('a6qo'),
        k = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        R = C.a.f93bb3ee,
        T = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  a = t.useMinimumData,
                  i = e.props,
                  s = i.accessibilityLabel,
                  l = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  c = o()(i, k)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    w.a,
                    r()({}, c, { accessibilityLabel: s, onVariantSelection: n, previewMode: a, testID: I }),
                  ),
                  l ? _.a.createElement(x.a, { align: 'left', altLabel: s }) : null,
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
        s = n('1Pcy'),
        l = n.n(s),
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
              h()(l()(e), '_dragEnterCount', 0),
              h()(l()(e), 'state', { active: !1 }),
              h()(l()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              h()(l()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              h()(l()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              h()(l()(e), '_handleDragOver', function (e) {
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
        s = n('MWbm'),
        l = n('CKsB'),
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
            w = e.showBlock,
            x = e.showCancel,
            k = e.showDelete,
            R = r.a.useCallback(
              function () {
                d && d(), t()
              },
              [t, d],
            ),
            T = r.a.useCallback(
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
            s.a,
            { accessibilityRole: 'dialog', style: n ? I.flatCorners : I.roundCorners },
            k
              ? r.a.createElement(l.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: a ? v : g,
                  onClick: A,
                  textColor: 'red500',
                })
              : null,
            w
              ? r.a.createElement(l.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: C }), onClick: T })
              : null,
            r.a.createElement(l.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: a ? b : _({ screenName: C }),
              onClick: R,
            }),
            x ? r.a.createElement(c.a, { onPress: t, style: I.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var I = d.a.create(function (e) {
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
        s = n('VrFO'),
        l = n.n(s),
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
        I = n('AspN'),
        w = n('rxPX'),
        x = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.j }
          })
          .propsFromActions(function () {
            return {
              addMedia: I.b,
              addToast: E.b,
              processMultipleMedia: I.g,
              removeMediaUpload: I.i,
              scribeAction: S.c,
              preUploadMedia: I.e,
            }
          }),
        k = n('wpu3'),
        R = n('cOB2'),
        T = n('MWbm'),
        A = n('0FVZ'),
        O = n('Oe3h'),
        M = n('rHpw')
      var F = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            a = e.children,
            r = e.onLayout,
            i = e.sideNavPresent,
            s = e.style,
            l = _.a.useContext(R.a)
          return i
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(T.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: s }, a),
              )
            : _.a.createElement(
                A.a.BottomComposer,
                null,
                _.a.createElement(O.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return _.a.createElement(
                    T.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: s })),
                    a,
                    _.a.createElement(T.a, { style: !1 === l.keyboardVisible && D.offsetBottom }),
                  )
                }),
              )
        },
        D = M.a.create(function () {
          return { offsetBottom: { paddingBottom: M.a.iPhoneOffsetBottom } }
        }),
        L = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        P = n('htQn'),
        N = n('t62R'),
        B = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
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
        j = M.a.create(function (e) {
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
        H = B,
        U = n('cHvH'),
        V = n('mw9i'),
        z = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
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
                  return _.a.createElement(U.a, null, function (a) {
                    var r = a.windowWidth,
                      i = L.a.isTwoColumnLayout(r),
                      o = [i && K.isWide, i && n && K.oneButtonOnly, !i && K.isNarrow]
                    return _.a.createElement(
                      V.a,
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
                  return _.a.createElement(H, {
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
        K = M.a.create(function (e) {
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
        W = z,
        q = n('krmn'),
        G = n('cIoY'),
        Q = n('w3n3'),
        Y = n('MLl7'),
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
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
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
      var se = _.a.memo(oe),
        le = n('Dtul'),
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
      var Ie = Ce,
        we = function () {
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
      we.metadata = { width: 24, height: 24 }
      var xe = we,
        ke = n('iySH'),
        Re = J.a.ee230734,
        Te = J.a.ca0ce0e4,
        Ae = J.a.cdcebd22,
        Oe = J.a.ic8c615d,
        Me = J.a.a04077c4,
        Fe = function (e) {
          return !(!e || !e.media)
        },
        De = Object(k.b)({ maxNumberOfPhotos: 1 }),
        Le = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e, a) {
            var i, s, c
            l()(this, n),
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
                return _.a.createElement(T.a, { style: Pe.composeBoxContainer }, c._renderMainContent())
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
                  i = he.b.isKaiOS() ? Ae : a || Te,
                  s = c.state,
                  l = s.editorState,
                  d = s.mediaButtonsCollapsible,
                  u = s.value,
                  p = !!r,
                  m = r ? { editorState: l, element: r.element } : void 0,
                  h = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: l, element: r.element },
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
                  s =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  l = s.height,
                  d = s.width,
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
                        T.a,
                        { style: Pe.attachmentContainer, testID: de },
                        _.a.createElement(
                          ve.a,
                          { ratio: d / l, style: Pe.aspectContainer },
                          _.a.createElement(
                            T.a,
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
                            T.a,
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
                  accessibilityLabel: Oe,
                  icon: e ? _.a.createElement(Ie, null) : _.a.createElement(xe, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Pe.actionButton,
                  type: 'brandText',
                })
              }),
              y()(p()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = Fe(e),
                  n = c._renderComposeBox(),
                  a = c._renderPrimaryActionButton(t),
                  r = c._renderSecondaryActionButton()
                return _.a.createElement(
                  T.a,
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
                  T.a,
                  { style: Pe.uploadButtons },
                  i
                    ? _.a.createElement(ge.a, {
                        accessibilityLabel: Re,
                        icon: _.a.createElement(ke.a, null),
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
                  s = t.processMultipleMedia,
                  l = t.removeMedia,
                  d = t.removeMediaUpload
                n(e, { location: te.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  c._validateMedia(e)
                    ? (i && i(t),
                      s(e, { onFailure: l }).then(function (e) {
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
                return !Fe(c.props.attachment) && De(e)
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
                  i = Fe(t),
                  o = c._hasMessageText() || n,
                  s = !(!t || !t.media) && (t.media.needsProcessing || r)
                return a || (!o && !i) || s || r
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
                    (i = null == u || null === (s = u.initEditorState) || void 0 === s ? void 0 : s.call(u, d)) &&
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
                  Object(Z.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = le.a.acquire())
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
                    s = i || Te,
                    l = Object(ce.a)(),
                    c = l && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    F,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: l,
                      style: [Pe.root, c && Pe.dtabOffset, o],
                    },
                    _.a.createElement(se, { isSending: n, isUploading: a, progress: n ? Math.max(r, 0.02) : 0 }),
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
      y()(Le, 'contextType', be.a),
        y()(Le, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
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
      t.a = x.forwardRef(Le)
    },
    w3n3: function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('/yvb'),
        o = n('3XMw'),
        s = n.n(o),
        l = n('3rWK'),
        c = n('Irs7'),
        d = s.a.a4993fa1,
        u = r.a.createElement(l.a, null),
        p = s.a.i0db46e6,
        m = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          a = void 0 === n || n,
          o = e.gifSearchKeySource,
          s = e.history,
          l = e.onPress,
          h = e.style,
          f = e.testID,
          v = Object(c.b)(),
          g = r.a.useCallback(
            function () {
              l && l(),
                v.scribe({ element: 'found_media_button', action: 'click' }),
                s.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, v, o, s, l],
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
        s =
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
        l = n('1auM'),
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
            s = a.retweeted_status,
            l = s || a,
            c = l.entities,
            u = l.unmentioned_user_ids,
            h = l.user,
            v = s ? s.user : {},
            g = s ? a.user : {},
            y = (null == c ? void 0 : c.user_mentions) || [],
            b = d.a.mergeTaggedUsers((null == c ? void 0 : c.media) || []),
            _ = f(s || a) || {},
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
            I = i && h.id_str === i ? [i].concat(r()(C)) : C
          return (
            n &&
              (I = I.filter(function (e) {
                return e !== h.id_str
              })),
            I.map(function (e) {
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
                return e.mediaFile && !(e.mediaFile instanceof l.a) && e.mediaFile.isVideo
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
              var t = Object(s.e)(e, 'compose')
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
        s,
        l,
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
        I,
        w,
        x,
        k,
        R,
        T,
        A,
        O,
        M,
        F,
        D,
        L,
        P,
        N,
        B,
        j = {
          fragment: {
            argumentDefinitions: (a = [
              { defaultValue: null, kind: 'LocalArgument', name: 'cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'query' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: 'dm_message_slice_result',
                args: [
                  (r = { kind: 'Variable', name: 'query', variableName: 'query' }),
                  (i = { kind: 'Literal', name: 's', value: 19 }),
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
                                  (o = {
                                    alias: null,
                                    args: null,
                                    kind: 'ScalarField',
                                    name: 'rest_id',
                                    storageKey: null,
                                  }),
                                  (s = { alias: null, args: null, kind: 'ScalarField', name: 'id', storageKey: null }),
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      (l = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'affects_sort',
                                        storageKey: null,
                                      }),
                                      (c = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'created_at_millis',
                                        storageKey: null,
                                      }),
                                      (d = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (u = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (p = {
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
                                          s,
                                          o,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              (m = {
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
                                                  m,
                                                  (h = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'conversation_type',
                                                    storageKey: null,
                                                  }),
                                                  (f = {
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
                                                    selections: (y = [
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
                                                              s,
                                                              o,
                                                              (g = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  f,
                                                                  (v = {
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
                                                  c,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: y,
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
                                                      s,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [
                                                          (b = {
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
                                                              s,
                                                              o,
                                                              (_ = {
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
                                                                  f,
                                                                  v,
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
                                                  (E = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'last_read_event_id',
                                                    storageKey: null,
                                                  }),
                                                  (S = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (C = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (I = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  E,
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
                                          (w = {
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
                                          (x = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (k = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (R = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (T = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          f,
                                          (A = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (O = {
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
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: y,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: y,
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
                                              (M = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              s,
                                              (F = {
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
                                                selections: y,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: y,
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
                      (D = {
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'DMMessageSearchTabQuery',
            selections: [
              {
                alias: null,
                args: (L = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, r, i]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  (P = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                          P,
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
                                  o,
                                  s,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      l,
                                      c,
                                      d,
                                      u,
                                      p,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
                                        plural: !1,
                                        selections: [
                                          s,
                                          o,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'ConversationInfo',
                                            kind: 'LinkedField',
                                            name: 'legacy',
                                            plural: !1,
                                            selections: [
                                              m,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'ConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'metadata',
                                                plural: !1,
                                                selections: [
                                                  m,
                                                  h,
                                                  f,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (B = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          P,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              s,
                                                              o,
                                                              g,
                                                              (N = {
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
                                                  c,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: B,
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
                                                      s,
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'media_info',
                                                        plural: !1,
                                                        selections: [P, b],
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
                                                          P,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [s, o, _, N],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  E,
                                                  S,
                                                  C,
                                                ],
                                                storageKey: null,
                                              },
                                              I,
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
                                          w,
                                          x,
                                          k,
                                          R,
                                          T,
                                          f,
                                          A,
                                          O,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: B,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: B,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: B,
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
                                              M,
                                              s,
                                              F,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: B,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: B,
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
                      D,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: L,
                filters: ['query', 's'],
                handle: 'slice',
                key: 'DMMessageSearchTabQuery_dm_message_slice_result',
                kind: 'LinkedHandle',
                name: 'dm_message_slice_result',
              },
            ],
          },
          params: {
            id: 'bbdRrkndYmyQHx463K9HSA',
            metadata: { sliceInfoPath: ['dm_message_slice_result', 'slice_info'] },
            name: 'DMMessageSearchTabQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(j.hash = 'f240afda618da0d5e047ef48ee76dd56'), (t.default = j)
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
        s = n('3XMw'),
        l = n.n(s),
        c = l.a.c1d4ac83,
        d = l.a.abc7b032,
        u = l.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return r.a.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        m = function (e, t) {
          return e >= 2
            ? r.a.createElement(
                l.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                r.a.createElement(p, { conversationId: t }, l.a.d1242bcc({ count: e })),
              )
            : r.a.createElement(l.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
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
          var s,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (s = e.by_user_id && a[e.by_user_id] && a[e.by_user_id].name)
                ? p
                  ? c
                  : (function (e) {
                      return r.a.createElement(
                        l.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        r.a.createElement(i.b, null, e),
                      )
                    })(s)
                : d
            case o.b.CONVERSATION_NAME_UPDATE:
              var m = r.a.createElement(i.b, null, e.conversation_name)
              return (s = e.by_user_id && a[e.by_user_id] && a[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return r.a.createElement(l.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(m)
                  : (function (e, t) {
                      return r.a.createElement(
                        l.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        r.a.createElement(i.b, null, e),
                        t,
                      )
                    })(s, m)
                : (function (e) {
                    return r.a.createElement(l.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(m)
            case o.b.JOIN_CONVERSATION:
              return (s = e.sender_id && a[e.sender_id] && a[e.sender_id].name)
                ? (function (e) {
                    return r.a.createElement(
                      l.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      r.a.createElement(i.b, null, e),
                    )
                  })(s)
                : u
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.a.createElement(l.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.a.createElement(h, { entry: e, users: a }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.a.createElement(l.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.a.createElement(i.b, null, e), t)
                  : r.a.createElement(l.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (s = e.sender_id && a[e.sender_id] && a[e.sender_id].name),
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
