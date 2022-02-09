;(window.webpackJsonp = window.webpackJsonp || []).push([
  [170],
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
        u = n('rHpw'),
        d = o.a.bb081ea1,
        p = { viewType: 'settings_button' },
        m = r.a.memo(function (e) {
          var t = e.onPress,
            n = e.pullRight,
            a = e.to
          return r.a.createElement(c.a, {
            accessibilityLabel: d,
            behavioralEventContext: p,
            hoverLabel: { label: d },
            icon: r.a.createElement(s.a, null),
            link: a,
            onPress: t,
            pullRight: n,
            style: h.button,
            testID: l,
            type: 'primaryText',
          })
        }),
        h = u.a.create(function (e) {
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
                    var c, u
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
                      var d = r(e),
                        p = r(t)
                    } catch (m) {
                      return !1
                    }
                    if (d.length != p.length) return !1
                    for (d.sort(), p.sort(), c = d.length - 1; c >= 0; c--) if (d[c] != p[c]) return !1
                    for (c = d.length - 1; c >= 0; c--) if (((u = d[c]), !o(e[u], t[u], n))) return !1
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
    '3GUV': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('ERkP'),
        p = n.n(d),
        m = n('rHpw'),
        h = n('MWbm'),
        f = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function () {
                  return !1
                },
              },
              {
                key: 'render',
                value: function () {
                  return p.a.createElement(h.a, { style: v.root })
                },
              },
            ]),
            n
          )
        })(p.a.Component),
        v = m.a.create(function (e) {
          return { root: { height: 5 * e.lineHeightsPx.body } }
        })
      t.a = f
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
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = n('ejT/'),
        v = n('ERkP'),
        g = n.n(v),
        b = n('yiKp'),
        y = n.n(b),
        _ = n('7n04'),
        E = n('Myq3'),
        S = n('VPAj'),
        C = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        I = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        k = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            a = function (e) {
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
        R = (n('lTEL'), n('7x/C'), n('kYxP'), n('KOtZ'), n('gbD7')),
        w = (n('Blm6'), n('b9JY')),
        x = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(w.b)(e) && Object(w.b)(t)) {
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
        T = n('jat/'),
        A = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        O = n('XnpN'),
        M = n('LhSm'),
        L = n('I4+6'),
        F = n('rHpw'),
        D = n('PbQQ'),
        P = n('cm6r'),
        N = n('jV+4'),
        B = n('pBrB'),
        H = n('wCd/'),
        j = function (e, t) {
          var n = Object(O.a)(e, t).map(function (e) {
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
        U = F.a.create(function (e) {
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
        V = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            a = void 0 === n || n,
            r = g.a.useContext(A.a).loggedInUserId
          if (!t) return null
          var i = j(t, r || ''),
            o = i.userDescription,
            s = i.userEntities,
            l = i.userFollowerCount,
            c = i.userFriendsCount,
            u = i.userIdStr,
            d = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            h = i.userScreenName,
            f = i.userWithheldDescription,
            v = i.userWithheldEntities,
            b = !!(m && h && ((l && c) || p)),
            y = L.a.generate({
              color: F.a.theme.colors.text,
              backgroundColor: F.a.theme.colors.transparent,
              customFocusBackgroundColor: F.a.theme.colors.gray0,
              customHoverBackgroundColor: F.a.theme.colors.gray0,
              customPressedBackgroundColor: F.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(D.a.Consumer, null, function (e) {
            return g.a.createElement(
              P.a,
              {
                interactiveStyles: y,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [U.root, a && b && U.borderBottom],
              },
              g.a.createElement(N.a, {
                isVerified: d,
                name: m,
                screenName: h,
                style: U.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && u
                ? g.a.createElement(B.a, {
                    description: o,
                    entities: s,
                    style: [U.profileInfoItemMargin, U.description],
                    userId: u,
                    withheldDescription: f,
                    withheldEntities: v,
                  })
                : null,
              l && c
                ? g.a.createElement(H.a, {
                    followersCount: l,
                    friendsCount: c,
                    screenName: h || '',
                    style: U.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? g.a.createElement(M.a, { joinDate: p }) : null,
            )
          })
        },
        W = n('V/6K'),
        K = n('cFyg'),
        z = n('MMRb'),
        q = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('LW0h'), n('g54k')),
        G = n('aA19'),
        Q = n('aWyx'),
        Y = n('mN6z'),
        X = n('MWbm'),
        J = n('t62R'),
        Z = n('jhWN'),
        $ = n('MAI/'),
        ee = n('zQEV'),
        te = function (e) {
          var t = e.children,
            n = e.link,
            a = e.style
          return g.a.createElement(J.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        ne = (function (e) {
          u()(n, e)
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
                  s = Object(ee.a)(a, r, i, o)
                switch (r) {
                  case Q.b.CONVERSATION_AVATAR_UPDATE:
                    var l = n.avatar_image_https === a.conversation_avatar_image_https
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && l
                        ? g.a.createElement(
                            X.a,
                            { style: ae.conversationAvatarContainer },
                            g.a.createElement(G.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      g.a.createElement(te, null, s),
                    )
                  case Q.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(s),
                      u = e._getParticipantsFromEntry(),
                      d = g.a.createElement(
                        J.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return g.a.createElement(g.a.Fragment, null, c, p)
                  default:
                    return g.a.createElement(te, null, s)
                }
              }),
              h()(l()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return g.a.createElement(
                  P.a,
                  { interactiveStyles: null, link: o, style: ae.userAddedYouContainer },
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
                  g.a.createElement(te, { link: o, style: ae.userAddedYouText }, t),
                )
              }),
              h()(l()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  P.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: ae.joinConversationDetails,
                  },
                  n,
                  g.a.createElement($.a, { style: ae.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: r }),
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
                  return !Object(Y.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(X.a, { style: ae.root }, this._renderContents())
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
                  return Object(ee.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ae = F.a.create(function (e) {
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
        re = Object(q.a)(ne),
        ie = n('ddV6'),
        oe = n.n(ie),
        se = (n('+KXO'), n('oQhu'))
      var le = Object(se.a)(function (e) {
          var t = F.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + F.a.theme.spacesPx.space12,
          }
        }),
        ce = n('shC7'),
        ue = n('38/B'),
        de = function (e) {
          return pe(e, ue.a.reducedMotionEnabled)
        },
        pe = Object(se.a)(function (e, t) {
          var n,
            a,
            r,
            i,
            o,
            s,
            l,
            c,
            u,
            d =
              ((n = le(F.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ve[F.a.theme.scale]),
              (o = he / i),
              (s = fe / a),
              (c = fe - (l = fe / 2)),
              (u = fe - l - r),
              {
                cssTransition: ue.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(be, ', opacity ').concat(be) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (ce.a.getConstants().isRTL ? 1 : -1) * c }] },
                    received: { transform: [{ translateX: (ce.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (ce.a.getConstants().isRTL ? 1 : -1) * ge[F.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (ce.a.getConstants().isRTL ? -1 : 1) * (ge[F.a.theme.scale] + u) - l }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: he } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: l / o,
                      transformOrigin: ce.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: l / o,
                      transformOrigin: ce.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: ce.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: ce.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
                  active: { opacity: 1, pointerEvents: 'all', transform: [{ scale: s }] },
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
      var me,
        he = 60,
        fe = he,
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
        Ce = n('G6rE'),
        Ie = n('P1r1'),
        ke = { scribeAction: Se.c },
        Re = Object(_e.createSelector)(
          function (e, t) {
            return Ce.e.select(e, t.senderId)
          },
          Ie.l,
          Ie.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        we = Object(Ee.g)(Re, ke),
        xe = (n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Te = n('0KEI'),
        Ae = {
          addToast: xe.b,
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: z.deleteEntry,
        },
        Oe = Object(Ee.b)(Ae),
        Me = n('k49u'),
        Le = n('LVU8'),
        Fe = n('3XMw'),
        De = n.n(Fe),
        Pe = De.a.f58dff33,
        Ne = De.a.ad5a8e8e,
        Be =
          ((me = {}),
          h()(me, Me.a.MissingParameter, { toast: Object(Le.a)(Pe) }),
          h()(me, Me.a.DirectMessageDestroyPermissionsError, { toast: { text: Ne } }),
          h()(me, 'showToast', !0),
          me),
        He = (n('jQ3i'), n('x4t0'), n('xCUF')),
        je = n('uKEd'),
        Ue = [],
        Ve = Object(_e.createSelector)(
          function (e) {
            return Object(je.l)(e).entries
          },
          function (e, t) {
            return Object(je.p)(e, t.entry.id) || Ue
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
        We = {
          createReaction: je.d,
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: He.d,
          removeReaction: je.k,
        },
        Ke = Object(Ee.g)(Ve, We),
        ze = n('X/yg'),
        qe = n('RhWx'),
        Ge = n.n(qe),
        Qe = n('33Kz'),
        Ye = n('wTX1'),
        Xe = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            l = e.style,
            c = g.a.useContext(A.a).featureSwitches,
            u = Object(Qe.b)(r, c),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = L.a.generate({ backgroundColor: F.a.theme.colors.gray50, color: F.a.theme.colors.gray700 })
          return g.a.createElement(
            P.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: s,
              style: [Je.container].concat(Ge()(l || [])),
            },
            g.a.createElement(J.b, { size: a, style: Je.unsetLineHeight }, u),
            n
              ? g.a.createElement(Ye.a, { color: 'gray700', containerStyle: Je.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        Je = F.a.create(function (e) {
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
          u()(n, e)
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
                  c = Object(ze.c)(i)
                r.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: l,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? Ze.h.GROUP : Ze.h.ONE_TO_ONE,
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
                    u = a.removeReaction,
                    d = { reaction_key: t, conversation_id: s.conversation_id, dm_id: s.id, perspective: c }
                  ;(n ? u : i)(d)
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
                    n = Object(Qe.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return g.a.createElement(Xe, {
                        accessibilityLabelFormatter: a ? et : tt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, a),
                        style: [rt.reaction, a && rt.selectedReaction],
                      })
                    })
                  return g.a.createElement(X.a, { style: rt.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(nt, 'contextType', A.a)
      var at = Object($e.a)(Ke(nt)),
        rt = F.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        it = n('OiMc'),
        ot = (function (e) {
          u()(n, e)
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
                return g.a.createElement(at, {
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
      h()(ot, 'contextType', W.a)
      var st = n('fz3c'),
        lt = n('TnY3'),
        ct = n('mjJ+'),
        ut = n('Q0VY'),
        dt = n('eb3s'),
        pt = n('/yvb'),
        mt = n('ZToW'),
        ht = n('CaKu'),
        ft = n('i4Oy'),
        vt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        gt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            a = oe()(n, 2),
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
          if (a) return gt(t.text, a.indices)
          if (n.card) {
            var r,
              i = ((null === (r = t.entities) || void 0 === r ? void 0 : r.urls) || []).find(function (e) {
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
          var a = 1.25 * F.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        St = n('hiGS'),
        Ct = n('zIWA'),
        It = n('Lsrn'),
        kt = n('k/Ka'),
        Rt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(kt.a)(
            'svg',
            y()(
              y()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [It.a.root, e.style],
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
      Rt.metadata = { width: 24, height: 24 }
      var wt = Rt,
        xt = n('DlVf'),
        Tt = n('ACHU'),
        At = n('UgB4'),
        Ot = De.a.ba60339a,
        Mt = De.a.j4bfee22,
        Lt = De.a.d96cf7cd,
        Ft = De.a.faddd3a2,
        Dt = De.a.eb497e08,
        Pt = De.a.b170974a,
        Nt = De.a.i202bd22,
        Bt = De.a.f2e5491a,
        Ht = De.a.f88553c8,
        jt = De.a.ifea3114,
        Ut = De.a.cac14829,
        Vt = De.a.h63a5c3b,
        Wt = (function (e) {
          u()(n, e)
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
                  r = t.isSent,
                  o = n.contextualScribeNamespace,
                  s = [{ text: Ot, Icon: St.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                return (
                  r ||
                    s.push({
                      text: Nt,
                      Icon: Ct.a,
                      link: {
                        pathname: '/i/report/'.concat(st.a.DMMessage, '/').concat(a.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: a.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    }),
                  ht.a.isAvailable() && s.push({ text: Bt, Icon: wt, onClick: i._handleCopyMessageText }),
                  g.a.createElement(ct.a, {
                    isFixed: i.context.isDrawer,
                    items: s,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              h()(l()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (ht.a.setString(n), t({ text: Ht })), e && e()
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
                    state: { tweetAttachment: y()(y()({}, o), {}, { id_str: o.status }) },
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
                  c = Object(ze.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: s ? Ze.h.GROUP : Ze.h.ONE_TO_ONE,
                    conversation_participant_count: l,
                    message_type: c,
                    inbox_type: Object(ze.h)(o),
                  },
                }),
                  a({ conversationId: r.conversation_id, id: r.id }).catch(n(Be))
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
                t.scribe({ component: 'reaction_button', element: Object(ze.c)(n), action: 'click' }),
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
              (i._hasMedia = yt(i.props.entry)),
              (i._isNarrow = ft.a.get('screen').width < F.a.theme.breakpoints.xSmall),
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
                    X.a,
                    {
                      pointerEvents: l ? 'auto' : 'none',
                      style: [
                        zt.messageActions,
                        r ? zt.messageActionsLeft : zt.messageActionsRight,
                        l ? zt.visible : zt.invisible,
                        s && zt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? zt.messageActionsMediaNarrow : zt.messageActionsNarrow),
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
                    ? g.a.createElement(dt.a, {
                        confirmButtonLabel: Lt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Mt,
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
                  return g.a.createElement(pt.a, {
                    accessibilityLabel: jt,
                    hoverLabel: { label: jt },
                    icon: qt,
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
                    s = g.a.createElement(xt.a, { style: i ? zt.vdlActionIcon : zt.actionIcon })
                  return g.a.createElement(
                    ot,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    g.a.createElement(pt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: Pt,
                      hoverLabel: { label: Ut },
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
                    t = g.a.createElement(Tt.a, { style: e ? zt.vdlActionIcon : zt.actionIcon })
                  return g.a.createElement(pt.a, {
                    accessibilityLabel: Dt,
                    hoverLabel: { label: Vt },
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
                    s = ((e = this.props.entry), !bt(e) && yt(e) && !mt.a.isEnabled)
                  return !i && (s || (n && !mt.a.isEnabled) || a || r || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Wt, 'contextType', W.a)
      var Kt = Object(lt.a)(Object($e.a)(Oe(Wt))),
        zt = F.a.create(function (e) {
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
        qt = g.a.createElement(At.a, { style: zt.vdlActionIcon }),
        Gt = n('97Jx'),
        Qt = n.n(Gt),
        Yt = (n('6U7i'), n('CDB5')),
        Xt = n('rxPX'),
        Jt = Object(Xt.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: z.removeEntry,
              sendMessage: Yt.m,
            }
          })
          .withAnalytics(),
        Zt = '87.5%',
        $t = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        en = n('RqPI'),
        tn = [],
        nn = function (e, t) {
          return Object(je.p)(e, t.entryId) || tn
        },
        an = function (e) {
          return Object(je.l)(e).entries
        },
        rn = {
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        on = Object(Ee.e)(function () {
          return Object(_e.createSelector)(an, nn, en.q, $t.d, function (e, t, n, a) {
            var r,
              i = Object(Qe.a)(a, { includeInactive: !0 }),
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
          return Object(je.l)(e).entries
        },
        un = function (e, t) {
          return Object(je.p)(e, ln(0, t)) || sn
        },
        dn = function (e, t) {
          return Ce.e.selectMany(
            e,
            (function (e, t) {
              return Object(je.q)(e, ln(0, t))
            })(e, t),
          )
        },
        pn = {
          removeReaction: je.k,
          fetchUpdatesIfNeeded: He.d,
          createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        mn = Object(Ee.e)(function () {
          return Object(_e.createSelector)(cn, un, en.q, dn, $t.d, function (e, t, n, a, r) {
            var i = Object(Qe.a)(r, { includeInactive: !0 }),
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
            return s > -1 && o.push.apply(o, Ge()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, pn),
        hn = n('TIdA'),
        fn = n('htQn'),
        vn = De.a.gf5e9ea6,
        gn = De.a.a2d48778,
        bn = hn.a.createLayoutCache()
      var yn = F.a.create(function (e) {
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
          var t = g.a.useContext(A.a).featureSwitches,
            n = e.onUndoPress,
            a = e.renderUndo,
            r = e.user,
            i = e.withBottomBorder,
            o = r.avatarUri,
            s = r.isProtected,
            l = r.isVerified,
            c = r.name,
            u = r.screenName,
            d = g.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = g.a.createElement(Z.a, { imageLayoutCache: bn, screenName: u, size: 'xxLarge', uri: o }),
            m = g.a.createElement(Xe, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            h = g.a.createElement(N.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: l,
              name: c,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            fn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [yn.root, i && yn.bottomBorder] },
            g.a.createElement(X.a, { style: yn.reactionColumn }, m),
            g.a.createElement(X.a, { style: yn.column }, p),
            g.a.createElement(X.a, { style: yn.bodyColumn }, g.a.createElement(X.a, { style: yn.body }, h)),
            a
              ? g.a.createElement(
                  X.a,
                  { style: yn.column },
                  g.a.createElement(
                    pt.a,
                    {
                      accessibilityLabel: gn({ emoji: Object(Qe.b)(r.reactionKey, t) }),
                      onClick: d,
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
        Cn = De.a.b772cd65,
        In = De.a.c0098d49,
        kn = De.a.j85999eb,
        Rn = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderContent', function (t, n) {
                return g.a.createElement(
                  X.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(l()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(En.a, { title: In })
                  : g.a.createElement(J.b, { visuallyHidden: !0 }, In)
              }),
              h()(l()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  X.a,
                  { accessibilityLabel: kn, style: [wn.container, 'sheet' === n ? wn.sheet : wn.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(l()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    pt.a,
                    { key: 'button_done', onPress: e, style: wn.cancelButton, type: 'primaryOutlined' },
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
                    u = { reaction_key: t, conversation_id: r, dm_id: o, perspective: l }
                  n(), c(u).then(e._handleScribeRemoveReaction(t)).then(s).catch(i())
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
      h()(Rn, 'contextType', W.a)
      var wn = F.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        xn = Object(lt.a)(Object($e.a)(mn(Rn))),
        Tn = De.a.h95f9e76,
        An = (function (e) {
          u()(n, e)
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
                  var a = oe()(e, 2),
                    r = a[0],
                    l = a[1]
                  return g.a.createElement(Xe, {
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
                  var s = L.a.generate({ backgroundColor: F.a.theme.colors.gray50, color: F.a.theme.colors.gray700 }),
                    l = Tn({ reactionCount: i })
                  return g.a.createElement(
                    X.a,
                    {
                      style: [
                        On.container,
                        a ? On.marginShort : On.marginLong,
                        r ? On.alignRight : On.alignLeft,
                        o ? On.visible : On.invisible,
                      ],
                    },
                    g.a.createElement(
                      xn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        P.a,
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
                  this.setState(y()({}, n))
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        On = F.a.create(function (e) {
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
            selfSelect: { borderColor: F.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        Mn = Object($e.a)(on(An)),
        Ln = n('Xrkv'),
        Fn = De.a.icd0bf34,
        Dn = De.a.e8bd8fec,
        Pn = De.a.b2d32fad,
        Nn = De.a.a763d33e,
        Bn = (function (e) {
          u()(n, e)
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
                    X.a,
                    { style: Hn.root },
                    g.a.createElement(
                      J.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: Hn.seenLabel },
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
                  return n ? (t ? Pn : Fn) : a.length ? Nn({ count: a.length }) : Dn
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
                        De.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(J.b, null, n),
                        g.a.createElement(
                          J.b,
                          { color: 'link', onPress: e._handlePress },
                          De.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Ln.a)(t, n)
                  return g.a.createElement(
                    J.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Hn.namesList },
                    n ? g.a.createElement(r, { namesList: i, othersCount: a }) : g.a.createElement(J.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        Hn = F.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        jn = Bn,
        Un = n('t0aI'),
        Vn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user,
            r = Object.keys(n),
            i = Wn({ entryId: t, participants: n, user: a })
          return { namesToDisplay: i, isSeenByEveryone: i.length === r.length - 1 }
        },
        Wn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user
          return Object.keys(n).reduce(function (e, r) {
            var i = n[r],
              o = i.join_conversation_event_id,
              s = i.last_read_event_id,
              l = i.user.name,
              c = r !== a.id_str,
              u = s && 1 !== Object(Un.a)(t, s),
              d = !o || 1 !== Object(Un.a)(o, t)
            return c && u && d && e.push(l), e
          }, [])
        },
        Kn = n('IMYl'),
        zn = n('21zW'),
        qn = n('gmpV'),
        Gn = De.a.fad48ee9,
        Qn = De.a.ba60339a,
        Yn = De.a.d338f53e,
        Xn = De.a.ae7d7a24,
        Jn = De.a.d725a288,
        Zn = De.a.bbe74f3f,
        $n = De.a.h0e4cdf4,
        ea = De.a.bfbc051c,
        ta = (function (e) {
          u()(n, e)
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
                    u = a || r || l || c,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    g.a.createElement(
                      X.a,
                      { style: [na.root, d && na.vdlRootMargin, t && na.sentMessage] },
                      a,
                      r,
                      l,
                      c
                        ? g.a.createElement(
                            P.a,
                            { interactiveStyles: null, onPress: n, style: t && na.sentContainer },
                            g.a.createElement(X.a, { style: t && na.groupedItems }, i, s),
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
                      X.a,
                      null,
                      g.a.createElement(J.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Xn),
                      g.a.createElement(
                        X.a,
                        { style: na.groupedItems },
                        g.a.createElement(
                          J.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Qn,
                        ),
                        g.a.createElement(zn.a, null),
                        g.a.createElement(
                          J.b,
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
                        X.a,
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
                    ? g.a.createElement(jn, Qt()({ isGroupDM: i }, Vn({ entryId: t, participants: s, user: l })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement(J.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Gn)
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
                        J.b,
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
                  var u,
                    d = new Date(Number(t))
                  u = Object(qn.c)(d) ? Jn(d) : Object(qn.d)(d) ? Zn({ time: Jn(d) }) : Object(qn.e)(d) ? $n(d) : ea(d)
                  var p = r && !s,
                    m = s ? 'right' : 'left'
                  return g.a.createElement(
                    X.a,
                    { style: [c && na.footerPadderWithAvatar, s && na.timestamp] },
                    g.a.createElement(
                      J.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !mt.a.isEnabled },
                      p &&
                        g.a.createElement(
                          De.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement(J.b, null, l),
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
        })(g.a.PureComponent)
      h()(ta, 'contextType', A.a)
      var na = F.a.create(function (e) {
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
        aa = Jt(ta),
        ra = n('jtO7'),
        ia = F.a.create(function (e) {
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
            X.a,
            { style: l },
            g.a.createElement(ra.a, { align: 'center', color: 'primary', label: r, link: s, onClick: i }),
          )
        },
        sa = n('fs1G'),
        la = (function (e) {
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
                  return g.a.createElement(X.a, null, o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(la, 'defaultProps', { onCtaClick: sa.a, onImpression: sa.a })
      var ca = la,
        ua = (n('1IsZ'), n('vjRr')),
        da = n('EGrD'),
        pa = function (e, t) {
          return ua.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        ma = Object(Xt.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: da.c, card: pa }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Te.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: da.a,
              loadAdFreeArticleDomainsFromPersistence: da.b,
              popOutConversation: z.popOutConversation,
            }
          }),
        ha = F.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        fa = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            a = e.isVisible,
            r = void 0 === a || a,
            i = e.textContent
          return g.a.createElement(X.a, { style: [r ? ha.visible : ha.invisible, ha.root] }, n, t, i)
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
            u = e.hasAssociatedAttachment,
            d = e.messageData,
            p = void 0 === d ? {} : d,
            m = e.rootStyle,
            h = e.tweetId,
            f = e.withCta,
            v = e.withMediaLinks,
            b = e.withMessageBubble,
            y = g.a.useContext(A.a).featureSwitches,
            _ = y.isTrue('dm_vdl_enabled') && y.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              m,
              b && ba.messageTextContainer,
              b && c && ba.sent,
              b && !c && ba.received,
              r && ba.failedDraft,
              l && !o && !c && ba.rapidFireReceived,
              l && !o && c && ba.rapidFireSent,
              u && c && ba.hasAssociatedAttachmentSent,
              u && !c && ba.hasAssociatedAttachmentReceived,
              b && _ && c && ba.vdlSent,
              b && a && c && ba.activeSent,
              b && _ && a && c && ba.vdlActiveSent,
              b && a && !c && !mt.a.isEnabled && ba.activeReceived,
              f && ba.withCta,
            ],
            S = [ba.tweetText, b && ba.textAlignLeft, !b && c && ba.textAlignRight],
            C = F.a.theme.colors,
            I = C.gray0,
            k = C.magenta500,
            R = C.primary,
            w = C.text,
            x = C.white,
            T = L.a.generate({ color: c ? x : w, backgroundColor: r ? k : c ? R : I }),
            O = (p.text && p.text.length) || 0
          return g.a.createElement(
            P.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: b ? T : null, style: E },
            g.a.createElement(va.a, {
              color: F.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, O],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (b && c) || F.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: b ? void 0 : 'title2',
              style: S,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        ba = F.a.create(function (e) {
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
      var ya = ga,
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
            u = e.withCta,
            d = e.withMessageBubble
          return g.a.createElement(ya, {
            isActive: n,
            isFailedDraft: a,
            isFirstRapidFire: i,
            isRapidFire: s,
            isSent: l,
            messageData: c,
            withCta: u,
            withMediaLinks: !0,
            withMessageBubble: d,
          })
        },
        Ea = n('LSr9'),
        Sa = n('aX4+'),
        Ca = n('/Ikv'),
        Ia = Ca.a.CardNames,
        ka = (function (e) {
          u()(n, e)
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
                    u = new Ea.a(c, l()).getAdFreeArticlesClickHandler({
                      destinationUrl: Ca.a.getBindingValue(n, 'card_url'),
                      linkDomain: Ca.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    d = oe()(u, 2),
                    p = d[0],
                    m = d[1]
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    h = !!Object.values(Ia).includes(t.name),
                    f = Et(n, p, m),
                    v = f.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    b = g.a.createElement(
                      X.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Sa.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: l.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    y = n
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? Ra.sentMessageWrapper : Ra.receivedMessageWrapper,
                          },
                          g.a.createElement(ya, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: a,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: s,
                            messageData: l,
                            rootStyle: f.isTextSquared ? (s ? Ra.textSentSquared : Ra.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? g.a.createElement(fa, { attachmentContent: b, isVisible: f.compositeRendered, textContent: y })
                    : g.a.createElement(_a, {
                        isActive: a,
                        isFailedDraft: r,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: s,
                        messageData: l,
                        withCta: c,
                        withMessageBubble: u,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(ka, 'defaultProps', { hasUserText: !1 }), h()(ka, 'contextType', A.a)
      var Ra = F.a.create(function (e) {
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
        wa = ma(ka),
        xa = De.a.f720438f,
        Ta = (function (e) {
          u()(n, e)
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
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!s || !s.attachment || !s.attachment.fleet) return null
                  var m = Et(t, d, p),
                    h = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    v = m.isTextSquared,
                    b = [
                      Oa.tombstoneWrapper,
                      o ? Oa.sentMessageWrapper : Oa.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    y = g.a.createElement(
                      X.a,
                      { onLayout: this._handleAttachmentLayout, style: b },
                      g.a.createElement(J.b, { color: 'gray700' }, xa),
                    ),
                    _ = t
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Oa.sentMessageWrapper : Oa.receivedMessageWrapper,
                              !c && Oa.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(ya, {
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
                  return g.a.createElement(fa, { attachmentContent: y, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Aa = F.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Oa = F.a.create(function (e) {
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
        La = (n('849X'), n('TJCb'), n('prG5')),
        Fa = n('RCZO'),
        Da = n('A91F'),
        Pa = De.a.b327c129,
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
            l = Object(Fa.b)(t).rgb,
            c = g.a.createElement(La.a, {
              accessibilityLabel: a,
              aspectMode: Da.a.withinRange(9 / 16, 10),
              backgroundColor: l,
              image: { url: r, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(P.a, { interactiveStyles: null, link: n, onPress: Na }, c) : c
        },
        Ha = n('Modb'),
        ja = n('lklz'),
        Ua = n('XrEN'),
        Va = n('ZvMt'),
        Wa = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && Ua.a.extractVideoProps(ja.b.forDm(n), t)
          return a
            ? g.a.createElement(
                Ha.a,
                Qt()({}, a, { aspectRatio: Va.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Ka = Object(Xt.a)().withAnalytics(),
        za = (function (e) {
          u()(n, e)
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
                    s = i.width < F.a.theme.breakpoints.micro
                  return o
                    ? g.a.createElement(
                        X.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ga.root,
                            s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && qa[r],
                          ],
                        },
                        g.a.createElement(X.a, { style: Ga.description }, g.a.createElement(J.b, null, a)),
                        g.a.createElement(
                          X.a,
                          { style: [Ga.button, s ? Ga.breakButtonWrapper : void 0] },
                          g.a.createElement(
                            pt.a,
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
      h()(za, 'defaultProps', { isSensitive: !1 })
      var qa = F.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ga = F.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: F.a.theme.spaces.space4,
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
        Qa = Object($e.a)(Ka(za)),
        Ya = n('CoGJ'),
        Xa = g.a.createElement(Ya.a, null),
        Ja = De.a.d9de7b57,
        Za = De.a.f2879f4d,
        $a = De.a.b518221e,
        er = De.a.eeaa9f90,
        tr = De.a.g2b43663,
        nr = De.a.f277e949,
        ar = (function (e) {
          u()(n, e)
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
                  u = a.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  m = d.textContentWidth,
                  h = (u || {}).attachment,
                  f = r.is_draft,
                  v = Et(i, p, m),
                  b = [
                    rr.mediaAttachment,
                    l && rr.isSent,
                    !l && rr.received,
                    l && v.isAttachmentSquared && rr.equalComponentDimensionsSent,
                    !l && v.isAttachmentSquared && rr.equalComponentDimensionsReceived,
                    s && !o && l && rr.rapidFireSent,
                    s && !o && !l && rr.rapidFireReceived,
                  ],
                  y = null
                if (
                  (!f && r.conversation_id && (y = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = g.a.createElement(Ba, { media: t, mediaUrl: y }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = g.a.createElement(Wa, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(ze.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(Wa, { media: t, messageId: r.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : l ? 'right' : 'left',
                  E = t && n && (l ? n : e._getMediaContentWithGuard(t, c, n, _))
                return {
                  attachmentContent: g.a.createElement(X.a, { onLayout: e._handleAttachmentLayout, style: b }, E),
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    h = t.is_draft,
                    f = Et(n, p, m),
                    v = this._renderAttachment(),
                    b = v.attachmentContent,
                    y = v.media,
                    _ = n
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? rr.sentMessageWrapper : rr.receivedMessageWrapper,
                          },
                          g.a.createElement(ya, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: h ? l : this._parseMessageData(l, y),
                            rootStyle: f.isTextSquared ? (s ? rr.sentSquared : rr.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return g.a.createElement(fa, { attachmentContent: b, isVisible: f.compositeRendered, textContent: _ })
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
                    ? y()(y()({}, e), {}, { entities: y()(y()({}, e.entities), {}, { urls: a, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(ar, 'contextType', A.a), h()(ar, 'defaultProps', { hasUserText: !1 })
      var rr = F.a.create(function (e) {
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
        or = Object(Xt.a)().propsFromActions(function () {
          return { markSpamStatus: z.markSpamStatus }
        }),
        sr = De.a.fd07947f,
        lr = De.a.c7a92dc9,
        cr = De.a.f277e949,
        ur = De.a.fb3ccb55,
        dr = or(
          (function (e) {
            u()(n, e)
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
                      { contentType: 'dm', ctaText: cr, description: ur },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return g.a.createElement(
                      X.a,
                      { style: pr.buttons },
                      g.a.createElement(
                        pt.a,
                        { onPress: this._handlePress(!1), style: pr.leftButton, type: 'brandOutlined' },
                        lr,
                      ),
                      g.a.createElement(pt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, sr),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        pr = F.a.create(function (e) {
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
        fr = F.a.create(function (e) {
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
        br = function (e, t) {
          var n,
            a = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (a && a.tweet) return a.tweet.status
        },
        yr = Object(Xt.a)()
          .propsFromState(function () {
            return { tweet: gr.a.createHydratedTweetSelector(br) }
          })
          .propsFromActions(function () {
            return { popOutConversation: z.popOutConversation }
          }),
        _r = n('b5s6'),
        Er = g.a.createElement(J.b, { link: '/settings/safety' }),
        Sr = function (e) {
          return g.a.createElement(
            De.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(Er, null, De.a.adcf07b5),
          )
        },
        Cr = De.a.e4df0ad7,
        Ir = De.a.f277e949,
        kr = De.a.b5b91d58,
        Rr = De.a.bb594d7b,
        wr = g.a.createElement(Sr, null)
      var xr = F.a.create(function (e) {
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
        Tr = yr(function (e) {
          var t = g.a.useContext(A.a).featureSwitches,
            n = e.conversationId,
            a = e.displaySensitiveMedia,
            r = e.hasUserText,
            i = void 0 !== r && r,
            o = e.isActive,
            s = void 0 !== o && o,
            l = e.isDmNsfwMediaFilterEnabled,
            c = e.isFailedDraft,
            u = e.isFirstRapidFire,
            d = void 0 !== u && u,
            p = e.isRapidFire,
            m = void 0 !== p && p,
            h = e.isSent,
            f = e.isTrusted,
            v = e.messageData,
            b = e.popOutConversation,
            y = e.tweet,
            _ = e.withCta,
            E = e.withMessageBubble,
            S = g.a.useState(void 0),
            C = oe()(S, 2),
            I = C[0],
            k = C[1],
            R = g.a.useState(void 0),
            w = oe()(R, 2),
            x = w[0],
            T = w[1],
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
                  I !== t && k(t)
                }
              },
              [I],
            ),
            L = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  x !== t && T(t)
                }
              },
              [x],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var F = v.attachment.tweet,
            D = h ? 'sent' : 'received',
            P = Et(i, I, x),
            N = g.a.createElement(_r.a, {
              onPress: O,
              style: [
                xr[D],
                i && xr.attachment,
                P.isAttachmentSquared ? (h ? xr.sentAttachmentSquared : xr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: F.status,
            }),
            B = P.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            H = (function () {
              if (!y) return null
              if (h) return N
              if (y.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (l || void 0 === l)
                  return g.a.createElement(
                    Qa,
                    { contentType: 'photo', ctaText: Rr, description: kr, withSquareBottomBorderRadius: B },
                    N,
                  )
              } else if (!a && y.possibly_sensitive)
                return g.a.createElement(
                  Qa,
                  { contentType: 'photo', ctaText: Ir, description: wr, withSquareBottomBorderRadius: B },
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
            j = g.a.createElement(X.a, { onLayout: M, style: xr.attachment }, H),
            U = i
              ? g.a.createElement(
                  X.a,
                  { onLayout: L, style: h ? xr.sentMessageWrapper : xr.receivedMessageWrapper },
                  g.a.createElement(ya, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: c,
                    isFirstRapidFire: d,
                    isRapidFire: m,
                    isSent: h,
                    messageData: v,
                    rootStyle: P.isTextSquared ? (h ? xr.sentSquared : xr.receivedSquared) : void 0,
                    tweetId: F.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(fa, { attachmentContent: j, isVisible: P.compositeRendered, textContent: U })
        }),
        Ar = n('htvZ'),
        Or = n('MH+I'),
        Mr = n('5Ixf'),
        Lr = n('AtEG')
      function Fr(e) {
        var t,
          n,
          a = g.a.useContext(Ar.a),
          r = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var s = oe()(a.activeVoiceMessage, 2),
          l = s[0],
          c = s[1],
          u = oe()(a.playerApi, 1)[0],
          d = oe()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = oe()(l, 1)[0],
          h = e.messageId === m
        if (!p) return null
        var f = Pr(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          b = {
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
            ((b.playerApi = u),
            (b.playerState = d),
            null != f && f.durationMs && (b.durationMs = null == f ? void 0 : f.durationMs)),
          g.a.createElement(Dr, b)
        )
      }
      function Dr(e) {
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
        var u = F.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            Hr.voiceMessage,
            jr({ isSent: n, squared: t }),
            n ? Hr.voiceMessageSent : Hr.voiceMessageReceived,
            de(F.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? Mr.a : Lr.a
        return g.a.createElement(
          X.a,
          { style: [Hr.container, de(F.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            X.a,
            { style: p },
            g.a.createElement(X.a, { style: Hr.startSpacer }),
            g.a.createElement(pt.a, {
              accessibilityLabel: i ? Br : Nr,
              icon: g.a.createElement(m, { style: u ? Hr.iconColorDark : Hr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(X.a, { style: Hr.durationSpacer }),
            g.a.createElement(
              X.a,
              { style: n ? Hr.durationOpacity : void 0 },
              g.a.createElement(
                Or.a,
                Qt()({ countdown: !0, timeMs: c }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Hr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(X.a, { style: Hr.endSpacer }),
          ),
        )
      }
      var Pr = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Nr = De.a.c94b7d89,
        Br = De.a.eb6f9582,
        Hr = F.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: ce.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function jr(e) {
        var t = e.isSent,
          n = e.squared
        return [Ur.base, t ? Ur.sent : Ur.received, n ? (t ? Ur.sentSquared : Ur.receivedSquared) : void 0]
      }
      var Ur = F.a.create(function (e) {
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
                    s = o && o.attachment ? o.attachment : {},
                    l = n.marked_as_spam,
                    c = yt(n),
                    u = !!o && !!o.ctas,
                    d = bt(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (yt(e) && !_t(e)) return !1
                      if (!t.text) return !1
                      var n = Object(vt.parse)(t.text)
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
                    h = _t(n)
                  e = s.sticker ? g.a.createElement(vr, { sticker: s.sticker }) : this._renderDMMessage(d, u, m)
                  var f = l ? g.a.createElement(dr, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = c && !h && !Object(ze.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    b = [
                      a ? Wr.isSent : Wr.isReceived,
                      u && Wr.withCta,
                      v ? Wr.mediaRoot : Wr.flexShrink,
                      this.props.style,
                    ]
                  return g.a.createElement(
                    X.a,
                    { style: b },
                    f,
                    o && o.ctas
                      ? g.a.createElement(ca, {
                          callToActions: o.ctas,
                          isSent: a,
                          onCtaClick: r,
                          onImpression: i,
                          withSticker: !!s.sticker || p,
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
                    s = a.isDmNsfwMediaFilterEnabled,
                    l = a.isFirstRapidFire,
                    c = a.isLowQuality,
                    u = a.isRapidFire,
                    d = a.isSent,
                    p = a.isTrusted,
                    m = i.error,
                    h = i.message_data,
                    f = h && y()(y()({}, h), {}, { entities: (h && h.entities) || void 0, error: m }),
                    v = null == f ? void 0 : f.attachment,
                    b = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: l,
                      isRapidFire: u,
                      isSent: d,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && v) {
                    if (v.tweet)
                      return g.a.createElement(
                        Tr,
                        Qt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: r,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: s,
                            isTrusted: p,
                            messageData: f,
                          },
                          b,
                        ),
                      )
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(ze.k)(v, this.context.featureSwitches)
                        ? g.a.createElement(Fr, {
                            isLowQuality: c,
                            isSent: !!d,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : g.a.createElement(
                            ir,
                            Qt()(
                              {
                                displaySensitiveMedia: r,
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
                        wa,
                        Qt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, b),
                      )
                    if (v.fleet) return g.a.createElement(Ma, Qt()({ entry: i, hasUserText: e, messageData: f }, b))
                  }
                  return g.a.createElement(_a, Qt()({}, b, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Vr, 'contextType', A.a)
      var Wr = F.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Kr = Vr,
        zr = F.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        qr = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? g.a.createElement(Z.a, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : g.a.createElement(X.a, { style: [zr.avatar, Z.a.getSizeStyle(a)] })
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
          s = oe()(o, 2),
          l = s[0],
          c = s[1],
          u = oe()(i.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && u && u.isPlaying && c(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = a + 2 * Zr,
          m = [$r.container, r.style, { width: a, height: a }]
        return g.a.createElement(
          X.a,
          { style: m },
          g.a.createElement(
            X.a,
            { style: [$r.container, $r.transitionOpacity, d ? $r.show : $r.hide] },
            ue.a.reducedMotionEnabled
              ? null
              : g.a.createElement(Yr.a, { audioLevel: l, color: t, paused: !d, size: a }),
          ),
          g.a.createElement(X.a, {
            style: [$r.border, { width: p, height: p }, $r.transitionOpacity, n ? $r.show : $r.hide],
          }),
        )
      }
      var Zr = parseInt(F.a.theme.spaces.space2, 10),
        $r = F.a.create(function (e) {
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
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
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
                if (!mt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(ze.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              h()(l()(e), '_handleCtaImpression', function () {
                e._scribeAction(y()(y()({}, ni), {}, { action: 'show' }))
              }),
              h()(l()(e), '_handleCtaClick', function () {
                e._scribeAction(y()(y()({}, ni), {}, { action: 'click' }))
              }),
              h()(l()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(ze.k)(
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
                  return !Object(Y.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.isActive,
                    a = t.isGroupDM,
                    r = t.isSent,
                    i = t.user,
                    o = this._getRapidFireProps(),
                    s = !o.isRapidFire || o.isLastRapidFire,
                    l =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    c = [
                      si.root.base,
                      l && si.root.vdlPadding,
                      s && si.root.contentSpacing,
                      s && l && si.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = l ? a && !r : !r || u
                  if (!i) return null
                  var p = !mt.a.isEnabled || r
                  return g.a.createElement(
                    ye.a,
                    { behavioralEventContext: ai },
                    g.a.createElement(
                      X.a,
                      { style: c },
                      g.a.createElement(
                        P.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: r ? si.root.sent : si.root.received,
                          testID: ti,
                        },
                        function (t) {
                          var n = t.isFocused,
                            a = t.isHovered
                          return e._renderMessage({
                            isFocused: n,
                            isHovered: a,
                            rapidFireProps: o,
                            withVDLRefresh: l,
                            withUserAvatar: d,
                          })
                        },
                      ),
                      this._renderFooter(o, d),
                    ),
                  )
                },
              },
              {
                key: '_renderMessage',
                value: function (e) {
                  var t,
                    n = e.isFocused,
                    a = e.isHovered,
                    r = e.rapidFireProps,
                    i = e.withUserAvatar,
                    o = e.withVDLRefresh,
                    s = this.props,
                    l = s.displaySensitiveMedia,
                    c = s.entry,
                    u = s.inboxType,
                    d = s.isActive,
                    p = s.isDmNsfwMediaFilterEnabled,
                    m = s.isGroupDM,
                    h = s.isLowQuality,
                    f = s.isReadOnly,
                    v = s.isSent,
                    b = s.isTrusted,
                    y = s.isVoiceMessageActive,
                    _ = s.isWide,
                    E = s.participants,
                    S = s.perspective,
                    C = s.scribeVoiceMessage,
                    I = s.setShouldFreezeUpdates,
                    k = r.isFirstRapidFire,
                    R = r.isRapidFire,
                    w = [
                      v ? si.messageContainer.sent : si.messageContainer.received,
                      _ ? si.messageContainer.wide : si.messageContainer.narrow,
                      v && _ && si.messageContainer.sentWide,
                      !v && _ && si.messageContainer.receivedWide,
                    ],
                    x = b && !f,
                    T = this._isDMVoiceMessage(),
                    A = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return g.a.createElement(
                    X.a,
                    { style: w },
                    c.error
                      ? null
                      : g.a.createElement(Kt, {
                          containerIsActive: d,
                          containerIsFocused: n,
                          containerIsHovered: a,
                          entry: c,
                          inboxType: u,
                          isDraft: !!c.is_draft,
                          isGroupDM: m,
                          isSent: v,
                          onReportMessage:
                            T && C
                              ? function () {
                                  return C.report({ isLowQuality: h, isTrusted: b })
                                }
                              : void 0,
                          participantsCount: A,
                          perspective: S,
                          setShouldFreezeUpdates: I,
                          shouldShowReactionButton: x,
                          style: T && de(F.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: y }),
                          withVDLRefresh: o,
                        }),
                    g.a.createElement(Kr, {
                      displaySensitiveMedia: l,
                      entry: c,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: k,
                      isLowQuality: h,
                      isRapidFire: R,
                      isSent: v,
                      isTrusted: b,
                      key: c.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: T && de(F.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: y }),
                    }),
                    this._possiblyRenderUserAvatar(r, i),
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
                    u = o.isSent,
                    d = o.participants,
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
                        isSent: u,
                        localMediaId: null === (a = s.message_data) || void 0 === a ? void 0 : a.localMediaId,
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
                    s = r.user,
                    l = this._isDMVoiceMessage()
                  if (!s || (!t && !o)) return null
                  var c = le(F.a.theme.scale),
                    u = c.DMUserAvatarSizePx,
                    d = { showAvatar: !!l || !a || !!n, size: c.DMUserAvatarSizeType, user: s },
                    p = [
                      si.userAvatar.base,
                      i ? si.userAvatar.sent : si.userAvatar.received,
                      l && de(F.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return g.a.createElement(
                    X.a,
                    { style: si.userAvatar.container },
                    i ? null : g.a.createElement(X.a, { style: si.userAvatar.spacer }),
                    l
                      ? g.a.createElement(Jr, {
                          color: i ? F.a.theme.colors.primary : F.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    g.a.createElement(X.a, { style: p }, g.a.createElement(qr, d)),
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
      h()(ii, 'contextType', A.a), h()(ii, 'defaultProps', ri)
      var oi = Object($e.a)(
          we(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = g.a.useContext(Ar.a),
                  r = oe()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  o = oe()(r, 1)[0] === n.id,
                  s = y()(y()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return g.a.createElement(e, s)
              }
              return (t.defaultProps = ri), t
            })(ii),
          ),
        ),
        si = {
          root: F.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: F.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: Zt },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: F.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: le(e.scale).DMUserAvatarSpacerPx },
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
            o = e.isLastRapidFire,
            s = e.isRapidFire,
            l = e.isWide,
            c = e.perspective,
            u = e.scribeNamespace,
            d = e.setActiveEntry,
            p = e.setShouldFreezeUpdates
          if (Object(w.b)(n) || Object(w.e)(n)) {
            var m = t.conversation_id,
              h = t.low_quality,
              f = t.participants,
              v = t.read_only,
              b = t.trusted,
              y = t.type,
              _ = n.message_data,
              E = (_ = void 0 === _ ? {} : _).sender_id,
              S = void 0 === m || b
            return g.a.createElement(oi, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: y === z.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: o,
              isLowQuality: !!h,
              isRapidFire: s,
              isReadOnly: v,
              isSent: E === c,
              isTrusted: !!S,
              isWide: l,
              participants: f,
              perspective: c,
              scribeNamespace: u,
              senderId: E,
              setActiveEntry: d,
              setShouldFreezeUpdates: p,
            })
          }
          return Object(w.a)(n)
            ? g.a.createElement(re, { conversation: t, entry: n, entryType: n.type, perspective: c })
            : Object(w.d)(n)
            ? g.a.createElement(li.a, { entry: n, isCompact: !1 })
            : null
        },
        ui = n('0JOx'),
        di = Object(_e.createSelector)(
          function (e, t) {
            var n = Object(je.o)(e, t.conversationId),
              a = n && Object(T.a)(n)
            return a && Object(z.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        pi = Object(Ee.c)(di),
        mi = (n('Ef13'), n('uDfI')),
        hi = Object(_e.createSelector)(
          function (e, t) {
            return Ce.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        fi = Object(mi.b)(hi),
        vi = n('Enqy'),
        gi = n('+/1j'),
        bi = 'overflow',
        yi = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        _i = { stiffness: 1e3, damping: 70 },
        Ei = 140,
        Si = { scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(0, _i) },
        Ci = function (e, t) {
          return { key: e.id_str, data: e, style: Si }
        },
        Ii = Object(S.a)({ translateY: Ei, scale: 0 }),
        ki = Object(S.a)({ scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(Ei, _i) }),
        Ri = [{ key: 'bubble', style: { scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(0, _i) } }],
        wi = Object(S.a)({ translateY: Ei, scale: 0 }),
        xi = Object(S.a)({ scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(Ei, _i) }),
        Ti = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ai = (function (e) {
          u()(n, e)
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
                  return !Object(Y.a)(this.props, e) || !Object(Y.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(yi).slice(0, 5).map(Ci)
                  return (
                    t.length > 5 && n.push({ key: bi, style: Si }),
                    g.a.createElement(
                      X.a,
                      { style: [Oi.root, e && Oi.hidden] },
                      g.a.createElement(
                        X.a,
                        { style: Oi.avatarRow },
                        g.a.createElement(
                          vi.TransitionMotion,
                          { styles: n, willEnter: Ii, willLeave: ki },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Ti(e.style)
                                return e.key === bi
                                  ? g.a.createElement(
                                      X.a,
                                      {
                                        key: e.key,
                                        style: [Oi.avatar, Oi.avatarSpacer, Oi.overflowAvatar, { transform: a }],
                                      },
                                      g.a.createElement(gi.a, { style: Oi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      X.a,
                                      { key: e.key, style: [Oi.avatar, { transform: a }] },
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
                        vi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Ri : [], willEnter: wi, willLeave: xi },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                X.a,
                                { key: e.key, style: [Oi.messageBubble, { transform: Ti(e.style) }] },
                                g.a.createElement(X.a, { style: Oi.dot }),
                                g.a.createElement(X.a, { style: [Oi.dot, Oi.dot1] }),
                                g.a.createElement(X.a, { style: [Oi.dot, Oi.dot2] }),
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
        Oi = F.a.create(function (e) {
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
        Li = n('tn7R'),
        Fi = (function (e) {
          u()(n, e)
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
                        Ge()(
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
                  Object(Li.a)(this._timers).forEach(function (e) {
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
                  Object(ui.h)().then(function (n) {
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
      h()(Fi, 'contextType', A.a)
      var Di = pi(Fi),
        Pi = n('3AAD'),
        Ni = n('iBK2'),
        Bi = n('Fz18'),
        Hi = n('RJrc'),
        ji = n('yw4N'),
        Ui = (n('XygZ'), n('dPJJ')),
        Vi = n('zrc3'),
        Wi = n('pQ3Z'),
        Ki = n.n(Wi),
        zi = n('VY6S'),
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
        Qi = (function (e) {
          u()(n, e)
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
          u()(n, e)
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
                  r = oe()(e, 1)[0]
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
      h()(ro, 'contextType', A.a)
      var io = n('+d3d'),
        oo = n('iChn'),
        so = (function (e) {
          u()(n, e)
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
        ho = (n('IAdD'), n('jHwr')),
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
        bo = function (e, t, n) {
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
        yo = function (e) {
          var t = e.list,
            n = e.nextList,
            a = e.sliceEnd,
            r = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = bo(t, r, function (e) {
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
          u()(n, e)
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
              (i._getMemoizedSlice = Object(se.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (i._getRectangles = function (e) {
                var t = e || l()(i),
                  n = t._assumedItemHeight,
                  a = t._heights,
                  r = t.props.list
                return t._getMemoizedRectangles(r, a, n)
              }),
              (i._getMemoizedRectangles = Object(se.a)(function (e, t, n) {
                return So(e, t, n)
              })),
              (i._heights = {})
            var u = i.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (i._heights = p[d]), (i.state = i._getDefaultSlice(c, s))
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
                    a = n.sliceEnd,
                    r = n.sliceStart,
                    i = e.list
                  if (i !== t) {
                    var o = yo({ list: t, nextList: i, sliceStart: r, sliceEnd: a }) || this._getDefaultSlice(i)
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
                    o = Object(T.a)(e)
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
                    a && (this._heights = Object.assign(y()({}, this._heights), n)),
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
                    u = Object(Vi.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return s[t].getTop() >= o
                      },
                      c,
                    ),
                    d = u >= 0 ? u : n.length
                  return this._schedulePositioningNotification(), { sliceStart: c, sliceEnd: d }
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
                    r = y()(
                      y()({}, this),
                      {},
                      {
                        props: y()(y()({}, this.props), {}, { list: e }),
                        state: y()({}, this.state),
                        context: y()({}, this.context),
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
        ko = (function (e) {
          u()(n, e)
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
                  Qt()({}, e, {
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
                Object(se.a)(function (e) {
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
                Object(se.a)(function (e, t, n, a) {
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
                  return i.length ? [].concat(Ge()(o ? [o] : []), Ge()(i), Ge()(s ? [s] : [])) : []
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
      h()(ko, 'displayName', 'VirtualScroller'),
        h()(ko, 'contextTypes', { viewport: co.object, getCustomLocation: co.func }),
        h()(ko, 'defaultProps', {
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
      var Ro = Object(Ji.a)(ko),
        wo = n('mw9i'),
        xo = De.a.i859a9d3,
        To = De.a.i8ecae5b,
        Ao = function (e) {
          return e.entry.id
        },
        Oo = function (e) {
          return e.entry.type === Q.b.MESSAGE
        },
        Mo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(
                l()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              h()(l()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case Q.b.TYPING_INDICATOR:
                    return n ? g.a.createElement(Di, { conversationId: n }) : null
                  case Q.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          X.a,
                          { style: Lo.readOnly },
                          g.a.createElement(
                            J.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            To,
                            ' ',
                            g.a.createElement(J.b, { link: 'https://support.twitter.com/articles/14606#faq' }, xo),
                          ),
                        )
                      : null
                  case Q.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(V, { conversation: t })
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
              (i._anchoring = k({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: R.a,
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
                    a = t.drawerHeader,
                    r = t.isWide,
                    i = t.onHistoryRequest,
                    o = t.style,
                    s = this.state.activeEntryId,
                    l = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        a = e.conversation,
                        r = e.footer,
                        i = e.readOnlyEntry,
                        o = (a && a.entries) || [],
                        s = o.reduce(function (e, r, i) {
                          n && 0 === i && e.push(R.b)
                          var s = Object(T.a)(e),
                            l = i === o.length - 1
                          if (
                            (e.push({
                              isRapidFire: !1,
                              isFirstRapidFire: !1,
                              isLastRapidFire: !1,
                              entry: r,
                              isActive: t === r.id,
                              isTrusted: !(null == a || !a.trusted),
                            }),
                            s)
                          ) {
                            var c = x(s.entry, r),
                              u = e[e.length - 2]
                            c
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                l && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return r && s.push(r), a.read_only && i && s.push(i), s
                    })({
                      conversation: n,
                      footer: R.d,
                      readOnlyEntry: R.c,
                      canInjectConversationProfileInfoHeader: n.status === Q.c.AT_END && n.type === Q.a.ONE_TO_ONE,
                      activeEntryId: s,
                    }),
                    c = n.conversation_id,
                    u = function (e) {
                      return e[e.length - 1]
                    },
                    d = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Oo(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(c)
                  return g.a.createElement(W.a.Consumer, null, function (t) {
                    var s = t.isDrawer ? K.b.drawerHeaderRadius : Lo.scrollSpace
                    return g.a.createElement(
                      X.a,
                      { style: [Lo.scrollContainer, s] },
                      g.a.createElement(
                        ji.a,
                        { style: [Lo.scrollContainer, r && Lo.conversationsPadding, s, o] },
                        a || null,
                        n.status && n.status !== Q.c.AT_END ? g.a.createElement(Hi.a, null) : null,
                        g.a.createElement(
                          wo.a,
                          { style: [Lo.content, Lo.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(Ni.b, {
                                anchoring: Pi.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Oo,
                                hasNewContentAtBottom: !0,
                                identityFunction: Ao,
                                initialAnchor: l.length > 0 ? f.a(Ao(d(l))) : void 0,
                                items: l,
                                nearStartProximityRatio: 2,
                                onNearStart: i,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : g.a.createElement(
                                Bi.a,
                                { identifier: p },
                                g.a.createElement(Ro, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Ao,
                                  initialAnchor: l.length > 0 ? f.a(Ao(u(l))) : void 0,
                                  items: l,
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
                    a = e.isFirstRapidFire,
                    r = e.isLastRapidFire,
                    i = e.isRapidFire,
                    o = this.props,
                    s = o.conversation,
                    l = o.inboxType,
                    c = o.isWide,
                    u = o.perspective,
                    d = o.scribeNamespace
                  return t && l
                    ? g.a.createElement(ci, {
                        conversation: s,
                        entry: t,
                        inboxType: l,
                        isActive: n,
                        isFirstRapidFire: a,
                        isLastRapidFire: r,
                        isRapidFire: i,
                        isWide: c,
                        key: t.id,
                        perspective: u,
                        scribeNamespace: d,
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
      h()(Mo, 'contextType', A.a)
      var Lo = F.a.create(function (e) {
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
    '5UID': function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('ERkP'),
        p = n.n(d),
        m = n('3XMw'),
        h = n.n(m),
        f = n('rHpw'),
        v = n('+/1j'),
        g = n('MWbm'),
        b = h.a.e5b0063d,
        y = 0,
        _ = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            var e
            return r()(this, n), ((e = t.call(this))._listDomId = 'accessible-list-'.concat(y)), (y += 1), e
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.title,
                    a = b({ title: n })
                  return p.a.createElement(
                    g.a,
                    { accessibilityLabelledBy: this._listDomId, accessibilityRole: 'region' },
                    p.a.createElement(
                      v.a,
                      {
                        accessibilityLevel: 1,
                        accessibilityRole: 'heading',
                        nativeID: this._listDomId,
                        style: f.a.visuallyHidden,
                      },
                      n,
                    ),
                    p.a.createElement(g.a, { accessibilityLabel: a }, t),
                  )
                },
              },
            ]),
            n
          )
        })(p.a.Component)
      t.a = _
    },
    '64vW': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ heightsReady: !0 })
      t.a = r
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
          return k
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('k49u'),
        s = n('3XMw'),
        l = n.n(s),
        c = n('fs1G'),
        u = l.a.c3752568,
        d = l.a.f78aa3e9,
        p = l.a.f9690dc0,
        m = l.a.i859a9d3,
        h = l.a.b1d35407,
        f = l.a.g539cca6,
        v = l.a.bbac0019,
        g = l.a.a1d2a68d,
        b = l.a.d4f2d9d8,
        y = l.a.hf383be4,
        _ = l.a.b25c5b2a,
        E = l.a.c4fdbd16,
        S = l.a.hf3e7e38,
        C = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        I = { defaultToast: { text: d }, showToast: !0 },
        k =
          ((a = { defaultToast: { text: u } }),
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
          i()(a, o.a.DirectMessageTweetNotFound, { toast: { text: b } }),
          i()(a, o.a.GenericBadRequest, { customAction: c.a }),
          i()(a, o.a.MessageSendError, { toast: { text: S } }),
          i()(a, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          i()(a, o.a.TargetUserNotFound, { toast: { text: y } }),
          i()(a, 'showToast', !0),
          a)
    },
    '89tF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('jwue'), n('7x/C'), n('+oxZ'), n('+KXO'), n('yH/f')
      function a(e) {
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
      var a = n('zb92')
      t.a = Object(a.a)({
        loader: function () {
          return Promise.all([n.e(0), n.e(24), n.e(169)])
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
        u = r.useCallback,
        d = n('23An')
      e.exports = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = i(),
          r = d(),
          p = c(n),
          m = c(e),
          h = c(new Set()),
          f = s(!1),
          v = f[0],
          g = f[1],
          b = u(
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
        var y = u(
          function (i) {
            var o = t(
              n,
              (0, a.default)(
                (0, a.default)({}, i),
                {},
                {
                  mutation: e,
                  onCompleted: function (e, t) {
                    b(o), i.onCompleted && i.onCompleted(e, t)
                  },
                  onError: function (e) {
                    b(o), i.onError && i.onError(e)
                  },
                  onUnsubscribe: function () {
                    b(o), i.onUnsubscribe && i.onUnsubscribe()
                  },
                },
              ),
            )
            return h.current.add(o), r.current && g(!0), o
          },
          [b, t, n, r, e],
        )
        return [y, v]
      }
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return v
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        l = n('aWyx'),
        c = ['users'],
        u = ['conversation_id', 'participants'],
        d = ['conversation_id', 'participants', 'social_proof'],
        p = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var a = n.user_id,
              i = t[a] || { id_str: a }
            return (e[a] = r()(r()({}, n), {}, { user: i })), e
          }, {})
        }
      function h(e, t) {
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
            a = e.conversation_id,
            i = e.participants,
            s = o()(e, u)
          return r()(
            r()({ conversation_id: a }, s),
            {},
            { entries: t.entryIdsByConversationId[a] || [], participants: m(i, n) },
          )
        },
        v = function (e, t, n) {
          var a = e.conversation_id,
            i = e.participants,
            u = e.social_proof,
            p = o()(e, d),
            f = r()(
              r()({ conversation_id: a }, p),
              {},
              { entries: h(a, t), participants: m(i, n), social_proof: void 0 },
            )
          return (
            u &&
              (f.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === l.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      a = o()(t, c)
                    return r()(
                      r()({}, a),
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
              })(u, n)),
            f
          )
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
    BUB3: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('ERkP'),
        l = n.n(s),
        c = n('sNn6'),
        u = n('rHpw'),
        d = n('MWbm'),
        p = ['children'],
        m = u.a.create(function (e) {
          return {
            activeRoot: { backgroundColor: e.colors.gray0 },
            overlay: r()(
              r()({}, u.a.absoluteFillObject),
              {},
              {
                borderRightStyle: 'solid',
                borderRightWidth: e.borderWidths.medium,
                borderRightColor: e.colors.primary,
                zIndex: 1,
              },
            ),
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = o()(e, p)
        return l.a.createElement(c.a, n, function (e) {
          return l.a.createElement(
            d.a,
            { style: e && m.activeRoot },
            'function' == typeof t ? t(e) : t,
            e ? l.a.createElement(d.a, { pointerEvents: 'none', style: m.overlay }) : null,
          )
        })
      }
    },
    FS1z: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('ERkP')),
        v = n.n(f),
        g = n('rxPX'),
        b = n('0KEI'),
        y = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        _ = function (e, t) {
          return t.module.selectItems(e)
        },
        E = Object(g.a)()
          .propsFromState(function (e) {
            return { fetchStatus: y, items: _ }
          })
          .propsFromActions(function (e) {
            var t = e.module
            return {
              createLocalApiErrorHandler: Object(b.createLocalApiErrorHandlerWithContextFactory)('SLICES_TIMELINE'),
              fetch: t.fetch,
              fetchIfNeeded: t.fetchIfNeeded,
              fetchBottom: t.fetchBottom,
            }
          }),
        S = n('v//M'),
        C = n('sIe2'),
        I = n('3XMw'),
        k = n.n(I),
        R = n('TEoO'),
        w = k.a.i9028824,
        x = 'sliceTimeline',
        T = function (e) {
          return e
        },
        A = { viewType: 'timeline' },
        O = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_render', function () {
                var t = e.props,
                  n = t.footer,
                  a = t.items,
                  r = t.noItemsRenderer,
                  i = t.numColumns,
                  o = t.onScrollEnd,
                  s = t.renderer,
                  l = t.withoutHeadroom
                return !a || i < 1
                  ? null
                  : 1 === i
                  ? v.a.createElement(R.a, {
                      cacheKey: x,
                      footer: n,
                      identityFunction: T,
                      items: a,
                      noItemsRenderer: r,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: o,
                      renderer: s,
                      withoutHeadroom: l,
                    })
                  : v.a.createElement(C.a, {
                      ListEmptyComponent: r,
                      data: a,
                      keyExtractor: T,
                      numColumns: i,
                      renderItem: s,
                    })
              }),
              h()(l()(e), '_handleNearEnd', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchBottom)().catch(n())
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.alwaysFetch,
                  a = t.createLocalApiErrorHandler,
                  r = t.fetch,
                  i = t.fetchIfNeeded
                ;(n ? r : i)().catch(a())
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.module
                  e.module !== t && this._handleFetch()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.fetchStatus,
                    n = e.module,
                    a = e.retryMessage
                  return n
                    ? v.a.createElement(S.a, {
                        accessibilityLabel: w,
                        behavioralEventContext: A,
                        fetchStatus: t,
                        onRequestRetry: this._handleFetch,
                        render: this._render,
                        retryMessage: a,
                        retryable: !0,
                      })
                    : null
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(O, 'defaultProps', { numColumns: 1, alwaysFetch: !1 })
      var M = E(O)
      t.a = M
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
              u = void 0 === c ? 3e5 : c
            ;(this.pollTimer = new s.b(i).interval(t)), (this.burstTimer = new s.a(this.pollTimer, l, u))
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
        u = l.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        d = o.a.d84b485d,
        p = o.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          a = 'follow' === t.reason ? d : p
        return n
          ? r.a.createElement(c.b, { color: 'gray700' }, a)
          : r.a.createElement(
              s.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: 'gray700', size: 'subtext2' }, a),
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
              return Object(s.d)('/messages/', { statusCode: 401 }), Object(o.t)(e)
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
    JD1h: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return d
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
        u = function (e, t, n, a) {
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
        d = (function () {
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
                      d = e.getListLength(),
                      p = u(s, o, l, d)
                    ;(n.proximity = l), (n.listLength = d), p && r({ triggerCause: p })
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
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        s = n('aWyx'),
        l = n('XnpN'),
        c = n('3XMw'),
        u = n.n(c),
        d = n('jV+4'),
        p = n('pjBI'),
        m = n('t62R'),
        h = n('rHpw'),
        f = n('p9G8'),
        v = u.a.cfd94063,
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        b = h.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        y = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            a = e.perspective
          if (t) {
            if (t.type === s.a.ONE_TO_ONE) {
              var i = Object(l.a)(t, a).map(function (e) {
                return e.user
              })
              return r()(i, 1)[0].name
            }
            return Object(f.a)(t, a)
          }
          var o = g(n)
          return Object(f.b)(o, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          c = void 0 !== i && i,
          u = e.newConversationParticipants,
          h = e.perspective,
          y = e.renderTimestamp,
          _ = e.textColor,
          E = void 0 === _ ? 'normal' : _,
          S = e.titleWeight,
          C = void 0 === S ? 'bold' : S,
          I = e.withScreenName,
          k = void 0 === I || I,
          R = e.withVDLRefresh,
          w = void 0 !== R && R
        if (t) {
          var x = y ? y() : null
          if (t.type === s.a.ONE_TO_ONE) {
            var T = Object(l.a)(t, h).map(function (e) {
                return e.user
              }),
              A = r()(T, 1)[0],
              O = o.a.createElement(d.a, {
                color: E,
                isProtected: A.protected,
                isVerified: A.verified,
                name: A.name,
                screenName: A.screen_name,
                weight: C,
                withLink: !1,
                withScreenName: k,
              })
            return (w && !a) || c ? o.a.createElement(p.a, null, O, x) : O
          }
          var M = t.participants,
            L = Object.keys(M).length
          if (a)
            return o.a.createElement(
              p.a,
              { color: E },
              o.a.createElement(m.b, { color: E, numberOfLines: 1, style: b.title, weight: C }, Object(f.a)(t, h, a)),
              w
                ? null
                : o.a.createElement(
                    m.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: L }),
                  ),
            )
          var F = o.a.createElement(m.b, { color: E, numberOfLines: 1, weight: C }, Object(f.a)(t, h, a))
          return (w && !a) || c ? o.a.createElement(p.a, null, F, x) : F
        }
        var D = g(u)
        return o.a.createElement(m.b, { color: E, numberOfLines: 1, weight: C }, Object(f.b)(D, h))
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
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
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
        C = n('RqPI'),
        I = n('1YZw'),
        k = n('hqKg'),
        R = n('kGix'),
        w = n('AQOc'),
        x = n('UhuB'),
        T = n('pNZL'),
        A = n('G6rE'),
        O = n('oEGd'),
        M = n('X/yg'),
        L = n('0KEI'),
        F = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        P = Object(k.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === R.a.LOADED ? t : e
          },
        ),
        N = Object(k.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, D(0, t))
          },
          C.q,
          function (e, t) {
            return t ? Object(M.d)(e, t) : void 0
          },
        ),
        B = Object(k.createSelector)(
          function (e, t) {
            return E.selectConversation(e, D(0, t))
          },
          E.selectEntries,
          M.l,
          C.q,
          M.m,
          M.n,
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
          F.k,
          x.n,
          N,
          F.n,
          function (e, t) {
            var n = D(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, o, s, l, c, u, d, p, m, h, f, v, g, b) {
            var y = e && e.data
            return {
              conversation: (y && Object(w.a)(y, t, o)) || void 0,
              dataSaverMode: h,
              draftText: m,
              dtabBarInfo: g,
              fetchStatus: s,
              gifMetadata: p,
              inboxType: b,
              isDmReceiptSettingEnabled: f,
              cardUrl: l,
              isNewGroupConversation: n,
              isUploading: c,
              media: u,
              mediaUploadProgress: d,
              newConversationParticipants: r,
              perspective: a,
              quickReplyOptions: v,
              tweetAttachment: i,
            }
          },
        ),
        H = Object(O.d)(B, function (e) {
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
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
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
        j = n('I2k/'),
        U = n('4AMG'),
        V = n('uB9N'),
        W = n('htvZ'),
        K = n('v//M'),
        z = n('3XMw'),
        q = n.n(z),
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
        ue = n('rxPX'),
        de = Object(ue.a)().propsFromActions(function () {
          return {
            addToast: I.b,
            block: A.e.block,
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
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
        be = q.a.ccf2f24e,
        ye = q.a.ib3fe8a9,
        _e = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = b.a.createElement(ve.a, he()({}, i, { accessibilityRole: 'button' }), ye),
            s = b.a.createElement(ve.a, he()({}, i, { onPress: a }), be),
            l = b.a.useCallback(
              function (e, t) {
                return b.a.createElement(fe.a, {
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
          return t ? s : b.a.createElement(ge.a, { renderContent: l }, o)
        },
        Ee = n('MWbm'),
        Se = n('cHvH'),
        Ce = n('rHpw'),
        Ie = function (e) {
          var t = b.a.useContext(le.a),
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
          return b.a.createElement(Se.a, null, function (t) {
            var l = t.windowWidth <= Ce.a.theme.breakpoints.small
            return b.a.createElement(
              Ee.a,
              { style: ke.actionsContainer },
              n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [ke.actionFullWidth, ke.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              b.a.createElement(
                Ee.a,
                { style: l ? ke.actionFullWidth : [ke.actionHalfWidth, ke.actionMarginRight] },
                b.a.createElement(_e, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(M.i)(e.conversation, a).screenName,
                }),
              ),
              b.a.createElement(
                ve.a,
                {
                  onPress: s,
                  size: 'medium',
                  style: l ? [ke.actionFullWidth, ke.actionMarginTop] : [ke.actionHalfWidth, ke.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [ke.actionFullWidth, ke.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        ke = Ce.a.create(function (e) {
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
        Te = n('vMjK'),
        Ae = n('7JQg'),
        Oe = n('24HD'),
        Me = n('zCf4'),
        Le = q.a.da878dcf,
        Fe = q.a.d96cf7cd,
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
        He = Object(Ae.c)({ element: 'untrusted_interstitial' })(
          de(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = b.a.useContext(le.a),
              o = Object(Me.f)(),
              s = Object(Me.g)(),
              l = b.a.useState(!1),
              c = se()(l, 2),
              u = c[0],
              d = c[1],
              p = b.a.useState(!1),
              m = se()(p, 2),
              h = m[0],
              f = m[1],
              v = b.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE }],
                  }
                },
                [t.type],
              ),
              g = b.a.useCallback(
                function (e, t) {
                  n(r()(r()({}, a), {}, { action: e }), t || v())
                },
                [v, n, a],
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
              C,
              I = function () {
                d(!0), f(!1)
              },
              k = function () {
                d(!1)
              },
              R = function () {
                f(!1)
              },
              w = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  l = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  c = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0,
                  u = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: l,
                    position: c,
                    inbox_type: Object(M.h)(r),
                    entry_point: Z.b.REQUEST_ACTION_SHEET,
                  }
                d(!1), i({ conversationId: a }), g(o, u), x()
              },
              x = function () {
                var t = e.inboxType
                o.push(Object(M.e)(t))
              },
              T = function () {
                !(function () {
                  var n,
                    a = e.acceptConversation,
                    i = e.conversationId,
                    o = e.inboxType,
                    l = e.scribeAction,
                    c = e.scribeNamespace,
                    u = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    d = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (a(i),
                    l(r()(r()({}, c), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                      conversation_participant_count: u,
                      entry_point: Z.b.REQUEST_ACTION_SHEET,
                      inbox_type: Object(M.h)(o),
                      position: d,
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
              L = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return b.a.createElement(
              b.a.Fragment,
              null,
              b.a.createElement(
                Ee.a,
                { style: Be.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return b.a.createElement(
                    we.b,
                    { style: Be.copy },
                    e ? De : Pe({ senderName: Object(M.i)(t, n).name }),
                  )
                })(L),
                b.a.createElement(Ie, {
                  acceptButtonText: Le,
                  conversation: t,
                  declineButtonText: Fe,
                  isGroup: L,
                  onAccept: T,
                  onBlock: function () {
                    d(!1), f(!0)
                  },
                  onLeave: I,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (g('report'), o.push(Object(M.f)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              Re.b.isKaiOS()
                ? b.a.createElement(ae.a, { leftText: Fe, onLeftClick: I, onRightClick: T, rightText: Le })
                : null,
              u
                ? b.a.createElement(xe.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: k,
                    onConfirm: w,
                    text: Ne.text,
                  })
                : null,
              h
                ? ((y = i.loggedInUserId),
                  (_ = Object(M.i)(t, y)),
                  (S = _.idStr),
                  (C = _.screenName),
                  Object(Oe.j)({ confirmation: Object(Oe.f)(C), onClose: R, handleConfirm: A(S) }))
                : null,
            )
          }),
        ),
        je = n('yw4N'),
        Ue = n('rFBM'),
        Ve = n('mw9i'),
        We = n('jTgF'),
        Ke = n('+d3d'),
        ze = n('mN6z'),
        qe = b.a.createElement(G.a, null),
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
              v()(u()(i), '_composer', b.a.createRef()),
              v()(u()(i), '_handleLivePipelineUpdate', function () {
                i._fetchUpdatesIfNeeded(), i._updatePolling && i._updatePolling.restart()
              }),
              v()(u()(i), '_fetchUpdatesIfNeeded', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              v()(u()(i), '_handleInitialFetch', function () {
                i._initialFetch()
              }),
              v()(u()(i), '_initialFetch', function () {
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
              v()(u()(i), '_isUntrustedConversation', function (e) {
                var t = i.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              v()(u()(i), '_leaveConversation', function (e) {
                var t = i.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
              }),
              v()(u()(i), '_acceptConversation', function (e) {
                var t = i.props,
                  n = t.acceptConversation,
                  a = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    Re.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(a({ showToast: !0 }))
              }),
              v()(u()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.inboxType,
                  r = e.scribeAction
                return t && i._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      b.a.createElement(He, {
                        acceptConversation: i._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: a,
                        leaveConversation: i._leaveConversation,
                        scribeAction: r,
                      })
                  : b.a.createElement(
                      b.a.Fragment,
                      null,
                      i._renderComposerBar(),
                      Re.b.isKaiOS()
                        ? b.a.createElement(ae.a, {
                            leftText: Xe,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: Ge,
                          })
                        : null,
                    )
              }),
              v()(u()(i), '_render', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  a = e.drawerHeader,
                  r = e.inboxType,
                  o = e.isWide,
                  s = e.perspective,
                  l = e.scribeNamespace,
                  c = i.state,
                  u = c.attachment,
                  d = c.composerHeight
                return b.a.createElement(
                  W.b,
                  { key: n },
                  b.a.createElement(
                    Ue.a,
                    { allowDragDrop: !Je(u), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    b.a.createElement(
                      je.a,
                      {
                        style: [
                          re.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      s && t
                        ? b.a.createElement(U.a, {
                            conversation: t,
                            drawerHeader: a,
                            inboxType: r,
                            isWide: o,
                            onHistoryRequest: i._handleHistoryRequest,
                            perspective: s,
                            scribeNamespace: l,
                            style: re.a.activity,
                          })
                        : null,
                    ),
                    i._renderActions(),
                  ),
                )
              }),
              v()(u()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(u()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              v()(
                u()(i),
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
                u()(i),
                '_throttleSaveDraftText',
                Object(Ke.a)(
                  function () {
                    i.props.conversationId && i._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              v()(u()(i), '_handleDragDrop', function (e) {
                i._currentComposer && i._currentComposer.handleAddMediaFiles(e)
              }),
              v()(u()(i), '_handleHistoryRequest', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(u()(i), '_handleSendMessage', function (e, t) {
                var n,
                  a,
                  o = i.props,
                  s = o.addToast,
                  l = o.cardUrl,
                  c = o.conversation,
                  u = o.conversationId,
                  d = o.createLocalApiErrorHandler,
                  p = o.gifMetadata,
                  m = o.history,
                  h = o.location,
                  f = o.newConversationParticipants,
                  v = o.perspective,
                  g = o.scribeAction,
                  b = o.scribeNamespace,
                  y = o.sendMessage,
                  _ = o.tweetAttachment,
                  S = i.state.attachment,
                  C = S && S.media,
                  I = null != c && c.participants ? Object.keys(c.participants).length : 0,
                  k = (null == c ? void 0 : c.type) === E.CONVERSATION_TYPE.GROUP,
                  R = 'unknown'
                if (
                  (e.quickReply ||
                    C ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  R = 'gif'
                else if (l) R = 'card'
                else if (_) R = 'tweet'
                else {
                  var w,
                    x = null == S || null === (w = S.media) || void 0 === w ? void 0 : w.mediaFile,
                    T = null != x && x.isVideo ? 'video' : null != x && x.isGif ? 'gif' : 'photo'
                  R = x ? T : t ? 'text' : 'unknown'
                }
                return (
                  u &&
                    g(r()(r()({}, b), {}, { element: R, action: 'send_dm' }), {
                      conversation_id: u,
                      conversation_participant_count: I,
                      conversation_type: k ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  u
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (a = n.media) &&
                          void 0 !== a &&
                          a.uploading) ||
                        (i.setState({ attachment: null }), m.replace(h.pathname)),
                      y(
                        r()(
                          { senderId: v, cardUrl: l, conversationId: u, text: t, tweetAttachment: _ },
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
                              var t = Object(We.b)(e, Ye)
                              t && s(t)
                            } else d($.b)(e)
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
                        g(r()(r()({}, b), {}, { element: R, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: f ? f.length + 1 : 0,
                          conversation_type: Z.h.GROUP,
                        }),
                          i.setState({ attachment: null, isSending: !1 }),
                          m.replace('/messages/'.concat(e))
                      }, d($.b)),
                      Promise.resolve())
                )
              }),
              v()(u()(i), '_handlePopOutConvo', function () {
                var e = i.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              v()(u()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(u()(i), '_handleComposeClick', function () {
                i._currentComposer && i._currentComposer.focus()
              }),
              v()(u()(i), '_handleSaveDraftText', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.saveText
                t && i._currentComposer && n(t, i._currentComposer.value())
              }),
              (i.state = {
                attachment: Ze(e),
                composerHeight: Ce.a.theme.componentDimensions.appBarHeight,
                isSending: !1,
              }),
              i
            )
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
                  return (
                    a(n),
                    r(n),
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
                  Object(y.h)().then(function (n) {
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
                    a = this.props,
                    r = a.conversation,
                    i = a.conversationId,
                    o = a.fetchStatus,
                    s = a.isUploading,
                    l = a.quickReplyOptions,
                    c = a.updateConversationReadState
                  i !== e.conversationId
                    ? (i && this._fetchConversation(i),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == r ? void 0 : r.sort_event_id) !==
                        (null === (n = e.conversation) || void 0 === n ? void 0 : n.sort_event_id) && c(i),
                      s || !e.isUploading || l || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === R.a.LOADED && o !== R.a.LOADED && i && this._fetchConversation(i))
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
                  return b.a.createElement(
                    Ve.a,
                    { style: [re.a.root, Re.b.isKaiOS() && re.a.kaiOSFix] },
                    b.a.createElement(K.a, {
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
                    u = e.mediaUploadProgress,
                    d = e.quickReplyOptions,
                    p = e.removeMedia,
                    m = e.richTextInputContext,
                    h = e.scribeNamespace,
                    f = e.typeaheadWrapper,
                    v = this.state,
                    g = v.attachment,
                    y = v.isSending,
                    _ = this.props.prefillText || o
                  return null != a && a.read_only
                    ? null
                    : b.a.createElement(V.a, {
                        attachment: g,
                        conversationId: r,
                        disabled: c,
                        dtabBarInfo: s,
                        history: l,
                        isCardPreviewTombstoned: Object(Y.a)(n),
                        isSending: y,
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
                        primaryActionLabel: Qe,
                        quickReplyOptions: d,
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
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.fetchConversationIfNeeded,
                    r = t.updateConversationReadState
                  return a({ conversationId: e })
                    .then(function () {
                      return r(e)
                    })
                    .catch(n(Object(j.a)(e)))
                },
              },
              {
                key: '_requestWelcomeMessage',
                value: function (e) {
                  var t = this.props,
                    n = t.addWelcomeMessageToConversation,
                    a = t.conversation,
                    r = t.createLocalApiErrorHandler,
                    i = t.location,
                    o = i.query.text,
                    s = Array.isArray(i.query.welcome_message_id)
                      ? i.query.welcome_message_id[0]
                      : i.query.welcome_message_id,
                    l = !!this.state.attachment || !(!o || s),
                    c = !a || !a.type || a.type === E.CONVERSATION_TYPE.GROUP,
                    u = a && a.participants && Object.keys(a.participants).length <= 1
                  return l || c || u ? Promise.resolve() : n(e, s).catch(r({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent)
      v()($e, 'contextType', le.a), v()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Ae.c)()(H($e))
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
        u = o.a.ffde2fdb,
        d = c.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.a.createElement(s.a, { style: d.spinner }, r.a.createElement(l.a, { accessibilityLabel: u }))
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
    TEoO: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('5UID'),
        l = n('3GUV'),
        c = n('iBK2'),
        u = ['accessibilityTitle'],
        d = o.a.createElement(l.a, null),
        p = function (e) {
          var t = e.accessibilityTitle,
            n = r()(e, u),
            a = o.a.createElement(c.b, n)
          return t ? o.a.createElement(s.a, { title: t }, a) : a
        }
      ;(p.defaultProps = { footer: d }), (t.a = p)
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ isDrawer: !1 })
      t.a = r
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'n', function () {
        return l
      }),
        n.d(t, 'm', function () {
          return c
        }),
        n.d(t, 'l', function () {
          return u
        }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'h', function () {
          return p
        }),
        n.d(t, 'j', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return h
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
        u = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        d = function (e) {
          var t = e.message_data,
            n = s.d.UNKNOWN,
            a = (t && t.attachment) || {}
          return (
            a.tweet
              ? (n = s.d.TWEET)
              : a.photo
              ? (n = s.d.PHOTO)
              : a.animated_gif
              ? (n = s.d.GIF)
              : a.video
              ? (n = a.video.audio_only ? s.d.VOICE : s.d.VIDEO)
              : a.card
              ? (n = s.d.CARD)
              : null != t && t.text && (n = s.d.TEXT),
            n
          )
        }
      function p(e) {
        return e === o.d.SECONDARY ? s.c.REQUESTS : e === o.d.TERTIARY ? s.c.LOW_QUALITY : s.c.PRIMARY
      }
      function m(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && m(t)) && !!e.video.audio_only
      }
      function f(e, t, n, a) {
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
            return a.b(e)
          }
        },
        _ = function (e) {
          return function (t) {
            return a.c(e, t)
          }
        },
        E = function (e, t) {
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
        u,
        d,
        p,
        m,
        h,
        f,
        v,
        g = {
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
                  { kind: 'Literal', name: 's', value: 17 },
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
                              (u = {
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
                                      (d = {
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
                        ],
                        storageKey: null,
                      },
                      (m = {
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
                  (h = {
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
                  (f = {
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
                              u,
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
                                      d,
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
                  f,
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
              },
            ],
          },
          params: {
            id: 'xXzMbv-FpjF7-cHYcr05gw',
            metadata: { sliceInfoPath: ['labeled_conversation_slice', 'slice_info'] },
            name: 'DMPinnedInboxQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(g.hash = 'a75c1dda87cc485eccb5aa8efb5739a4'), (t.default = g)
    },
    XnpN: function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        s = (n('2G9S'), n('tQbP'), n('aWyx')),
        l = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        u = function (e, t) {
          return c(e.join_time) - c(t.join_time)
        },
        d = function (e, t) {
          var n = e.user,
            a = t.user
          return Object(l.a)(n.id_str, a.id_str)
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
            u,
            d,
          )
        },
        m = n('tn7R'),
        h = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          a = e.participants,
          i = e.type,
          l = Object(m.a)(a),
          c = Object(h.a)(l, function (e) {
            return e.user.id_str === t
          }),
          u = o()(c, 2),
          d = u[0],
          f = u[1]
        return f.length ? (i === s.a.GROUP && 1 === f.length ? [].concat(r()(d), r()(f)) : n ? f.sort(p(n)) : f) : d
      }
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
                  { kind: 'Literal', name: 's', value: 17 },
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
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('aWyx'),
        o = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        c = n('rHpw'),
        u = n('TIdA'),
        d = n('A91F'),
        p = n('jhWN'),
        m = n('9Xij'),
        h = n('Znyr'),
        f = n('cm6r'),
        v = n('U+bB'),
        g = n('MWbm'),
        b = l.a.fd48249b,
        y = c.a.create(function (e) {
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
        _ = c.a.create(function (e) {
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
        E = c.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        S = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            g.a,
            { style: _.container },
            r.a.createElement(g.a, { style: _.left }, t),
            r.a.createElement(g.a, { style: _.right }, n),
          )
        },
        C = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            g.a,
            { style: E.container },
            r.a.createElement(g.a, { style: E.top }, n),
            r.a.createElement(g.a, { style: E.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              a = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return r.a.createElement(
              g.a,
              { key: t.id_str, style: y.container },
              r.a.createElement(p.a, { size: n || a, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  g.a,
                  { key: e.id_str, style: y.container },
                  r.a.createElement(p.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(m.a, { ratio: 1 }, r.a.createElement(S, { left: n[1], right: n[0] }))
            var a = r.a.createElement(C, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(S, { left: a, right: i })
          },
          a = e.conversation,
          s = e.link,
          l = e.perspective,
          _ = e.withBadge,
          E = a && a.avatar_image_https,
          I = a
            ? Object(o.a)(a, l).map(function (e) {
                return e.user
              })
            : [],
          k = I.slice(0, 3),
          R =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.a.createElement(u.a, {
                    accessibilityLabel: '',
                    aspectMode: d.a.SQUARE,
                    backgroundColor: c.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(a) ||
            (function (e) {
              return e ? r.a.createElement(v.a, { source: e }) : null
            })(E) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(g.a, { style: y.circle }, n(e))
            })(k),
          w =
            s ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, I),
          x = _ && null != a && a.participants ? Object.keys(a.participants).length - 1 : 0
        return R
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                m.a,
                { ratio: 1 },
                w ? r.a.createElement(f.a, { interactiveStyles: null, link: w }, R) : R,
              ),
              x
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      g.a,
                      { style: y.itemAccessory },
                      r.a.createElement(h.a, {
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
                  })({ badgeCount: x })
                : null,
            )
          : null
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
    cFyg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return i
      })
      var a = n('ZUOq'),
        r = n('rHpw'),
        i = { durationMs: 300 },
        o = r.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderTopLeftRadius: e.borderRadii.xLarge,
              borderTopRightRadius: e.borderRadii.xLarge,
              boxShadow: e.boxShadows.medium,
              marginRight: e.spaces.space20,
              minWidth: a.a.dmDrawerWidth.min,
              maxWidth: a.a.dmDrawerWidth.max,
            },
            expandable: { transition: 'all '.concat(i.durationMs, 'ms ease') },
            expanded: { maxHeight: a.a.dmDrawerHeight.expanded, height: '80vh' },
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
        u = n.n(c),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('3voH'), n('ERkP')),
        b = n.n(g),
        y = n('ZUOq'),
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
        k = n('V/6K'),
        R = (n('z84I'), n('yiKp')),
        w = n.n(R),
        x = (n('lTEL'), n('7x/C'), n('kYxP'), n('CDB5')),
        T = n('1YZw'),
        A = n('hqKg'),
        O = n('X/yg'),
        M = n('AQOc'),
        L = n('UhuB'),
        F = n('l0YN'),
        D = n('G6rE'),
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
            return t ? Object(O.d)(e, t) : void 0
          },
        ),
        H = function (e) {
          return function (t) {
            return x.c(e, t)
          }
        },
        j = function (e) {
          return function (t, n) {
            return x.a(e, t, n)
          }
        },
        U = {
          conversation: function (e, t) {
            return _.selectConversation(e, N(0, t))
          },
          entries: _.selectEntries,
          perspective: E.q,
          users: D.e.selectAll,
          dataSaverMode: P.k,
          dtabBarInfo: P.n,
          quickReplyOptions: B,
          visibility: _.selectDrawerVisibility,
          inboxUnreadCount: F.a,
          isUnread: function (e, t) {
            return !_.selectConversationIsRead(e, N(0, t))
          },
          isDmReceiptSettingEnabled: L.n,
        },
        V = {
          draftText: function (e, t) {
            return x.l(e, N(0, t))
          },
          gifMetadata: function (e, t) {
            return x.h(e, N(0, t))
          },
          isUploading: function (e, t) {
            return x.j(e, N(0, t))
          },
          media: function (e, t) {
            return x.i(e, N(0, t))
          },
          mediaUploadProgress: function (e, t) {
            return x.k(e, N(0, t))
          },
        },
        W = Object(S.a)()
          .propsFromState(function () {
            return w()(w()({}, U), V)
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
              u = e.isUploading,
              d = e.media,
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
              isUploading: u,
              isUnread: c,
              media: d,
              mediaUploadProgress: p,
              quickReplyOptions: h,
              visibility: v,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              addMedia: j(t),
              addToast: T.b,
              createLocalApiErrorHandler: Object(C.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationHistory: _.fetchConversationHistory,
              removeMedia: H(t),
              saveText: x.f,
              sendMessage: x.m,
              updateConversationReadState: _.updateConversationReadState,
              updateTyping: _.updateTyping,
              fetchUpdatesIfNeeded: _.fetchUpdatesIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'thread_drawer' }),
        K = n('aWyx'),
        z = n('qz2E'),
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
        ue = n('Lsrn'),
        de = n('k/Ka'),
        pe = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(de.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ue.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M12 19.344l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 19.344z',
              }),
              b.a.createElement('path', {
                d: 'M12 11.535l-8.72-8.72c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l9.25 9.25c.292.294.767.294 1.06 0l9.25-9.25c.146-.145.22-.337.22-.53s-.073-.383-.22-.53c-.293-.292-.768-.292-1.06 0L12 11.535z',
              }),
            ),
          )
        }
      pe.metadata = { width: 24, height: 24 }
      var me = pe,
        he = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(de.a)(
            'svg',
            w()(
              w()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ue.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            b.a.createElement(
              'g',
              null,
              b.a.createElement('path', {
                d: 'M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z',
              }),
              b.a.createElement('path', {
                d: 'M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z',
              }),
            ),
          )
        }
      he.metadata = { width: 24, height: 24 }
      var fe = he,
        ve = n('x0mb'),
        ge = J.a.a2f8105f,
        be = J.a.d227d19e,
        ye = J.a.c64c1883,
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
              v()(u()(e), '_headerBar', b.a.createRef()),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              v()(u()(e), '_renderLeftControl', function () {
                var t = e.props.inboxUnreadCount
                return b.a.createElement(
                  te.a,
                  null,
                  b.a.createElement(ne.a, {
                    accessibilityLabel: Ee,
                    icon: b.a.createElement(le.a, null),
                    onPress: e._handleUnpopConvo,
                    type: e._getButtonType(),
                  }),
                  t && t > 0
                    ? b.a.createElement(ae.a, {
                        pip: !0,
                        style: ke.newMessagePip,
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
              v()(u()(e), '_getButtonType', function () {
                var t = e.props,
                  n = t.hasNewMessages
                return t.isHighlighted && n ? 'onMediaText' : 'primaryText'
              }),
              v()(u()(e), '_renderRightControl', function () {
                var t = e.props.conversationTitle,
                  n = e._isExpanded(),
                  a = e._getButtonType()
                return b.a.createElement(
                  te.a,
                  { style: ke.rightControls },
                  t
                    ? null
                    : b.a.createElement(ne.a, {
                        accessibilityLabel: ye,
                        hoverLabel: { label: Ce },
                        icon: b.a.createElement(ce.a, null),
                        onPress: e._handleNewMessage,
                        type: a,
                      }),
                  n
                    ? b.a.createElement(ne.a, {
                        accessibilityLabel: be,
                        hoverLabel: { label: be },
                        icon: b.a.createElement(me, null),
                        onPress: e._handleToggleVisibility,
                        type: a,
                      })
                    : b.a.createElement(ne.a, {
                        accessibilityLabel: _e,
                        hoverLabel: { label: _e },
                        icon: b.a.createElement(fe, null),
                        onPress: e._handleToggleVisibility,
                        type: a,
                      }),
                )
              }),
              v()(u()(e), '_handleUnpopConvo', function () {
                ;(0, e.props.popOutConversation)(null)
              }),
              v()(u()(e), '_handleToggleVisibility', function () {
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
              v()(u()(e), '_handleToggleVisibilityKeyboard', function () {
                e._handleToggleVisibility(), e._headerBar && e._headerBar.current && e._headerBar.current.focus()
              }),
              v()(u()(e), '_handleNewMessage', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.history
                n.scribe({ section: 'compose_drawer', component: 'dm', action: 'show' }),
                  a.push({ pathname: '/messages/compose', state: { source: 'drawer' } })
              }),
              v()(u()(e), '_renderTitle', function () {
                var t = e.props,
                  n = t.conversationTitle,
                  a = t.hasNewMessages,
                  r = t.isHighlighted,
                  i = n || b.a.createElement(re.b, null, ge)
                return b.a.createElement(
                  te.a,
                  { style: ke.titleContainer },
                  b.a.createElement(te.a, { style: [ke.titleTextRoot, r && a ? ke.titleTextHighlighted : null] }, i),
                  a
                    ? b.a.createElement(
                        te.a,
                        { style: ke.newMessageDotContainer },
                        b.a.createElement(ve.a, {
                          accessibilityLabel: Se,
                          style: [ke.newMessageDotRoot, r ? ke.newMessageDotHighlighted : ke.newMessageDotRegular],
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
                    o = r ? (i ? [ke.headerHighlighted] : [ke.headerActive]) : [],
                    s = this._isExpanded()
                  return b.a.createElement(
                    $.a,
                    {
                      enabled: !0,
                      handlers:
                        ((e = {}),
                        v()(e, Z.e.goLists, ee.a),
                        v()(e, Z.e.toggleDMDrawer, this._handleToggleVisibilityKeyboard),
                        e),
                    },
                    b.a.createElement(
                      te.a,
                      {
                        ref: this._headerBar,
                        style: [ke.headerRoot, !s && ke.headerBorderClosed].concat(o, [ke.cursor]),
                      },
                      b.a.createElement(ie.a, {
                        leftControl: a && this._isExpanded() ? this._renderLeftControl() : null,
                        onMiddleControlClick: this._handleToggleVisibility,
                        rightControl: this._renderRightControl(),
                        style: ke.roundedAppBarCorners,
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
        })(b.a.Component)
      v()(Ie, 'contextType', se.a)
      var ke = oe.a.create(function (e) {
          return {
            root: {
              alignSelf: 'flex-end',
              backgroundColor: e.colors.navigationBackground,
              borderColor: e.colors.borderColor,
              borderWidth: e.borderWidths.small,
              marginRight: e.spaces.space20,
              width: y.a.columnWidths.secondary.normal,
            },
            cursor: { cursor: 'pointer' },
            expanded: { height: y.a.columnWidths.secondary.normal },
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
        Re = Q(Ie),
        we = (n('JtPf'), n('87if'), n('zb92')),
        xe = Object(we.a)({
          loader: function () {
            return Promise.all([n.e(13), n.e(231)]).then(n.bind(null, 'Rk1B'))
          },
        }),
        Te = n('aWzz'),
        Ae = n('XnpN'),
        Oe = n('GSsg'),
        Me = n('aITJ'),
        Le = n('yrzJ'),
        Fe = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var r
            return (
              o()(this, n),
              (r = t.call(this, e, a)),
              v()(u()(r), '_composer', b.a.createRef()),
              v()(u()(r), '_renderConversation', function (e, t) {
                var n = r.props,
                  a = n.conversationId,
                  i = n.history,
                  o = n.location
                return b.a.createElement(q.a, {
                  conversationId: a,
                  drawerHeader: r._renderHeader(),
                  history: i,
                  isWide: !1,
                  location: o,
                  richTextInputContext: e,
                  typeaheadWrapper: t,
                })
              }),
              v()(u()(r), '_isExpanded', function () {
                return r.props.visibility === Y.b.EXPANDED
              }),
              v()(u()(r), '_fetchUpdatesIfNeeded', function () {
                var e = r.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              Object(z.a)(),
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
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    !t && this._renderHeader(),
                    t
                      ? Me.b.isDesktopOS()
                        ? b.a.createElement(xe, null, function (t) {
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
                    c = r ? 'white' : 'normal',
                    u = r ? 'white' : 'gray700',
                    d =
                      t &&
                      t.type === K.a.ONE_TO_ONE &&
                      s &&
                      Object(Ae.a)(t, s).map(function (e) {
                        return e.user.screen_name
                      }),
                    p = d ? b.a.createElement(Le.a, { color: u, screenName: d[0] }) : void 0
                  return b.a.createElement(
                    te.a,
                    { style: De.headerRoot },
                    b.a.createElement(Re, {
                      conversationSubtitle: p,
                      conversationTitle: b.a.createElement(G.b, {
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
        })(b.a.Component)
      v()(Fe, 'contextType', se.a), v()(Fe, 'childContextTypes', { getCustomLocation: Te.func })
      var De = oe.a.create(function (e) {
          return { headerRoot: { position: 'sticky', top: 0, zIndex: e.componentZIndices.appBarZIndex } }
        }),
        Pe = W(Fe),
        Ne = (n('i4UL'), n('K1iM')),
        Be = n.n(Ne),
        He = (n('tQbP'), n('4q8G')),
        je = n('tn7R'),
        Ue = Object(S.a)()
          .propsFromState(function () {
            return {
              conversations: _.selectConversations,
              settings: P.g,
              unreadCount: F.a,
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
              c = Be()(Object(je.a)(n))
            try {
              for (c.s(); !(t = c.n()).done; ) {
                var u,
                  d = t.value
                !d.isDeleted && null !== (u = d.data) && void 0 !== u && u.trusted && l.push(d.data)
              }
            } catch (m) {
              c.e(m)
            } finally {
              c.f()
            }
            l.sort(He.a)
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
        We = n('pXKu'),
        Ke = n('nySH'),
        ze = n('yw4N'),
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
              v()(u()(e), '_renderHeader', function () {
                var t = e.props,
                  n = t.history,
                  a = t.isHeaderHighlighted,
                  r = t.isUnread,
                  i = t.onDrawerOpen,
                  o = t.triggerHeaderHighlight
                return b.a.createElement(
                  te.a,
                  { style: at.headerRoot },
                  b.a.createElement(Re, {
                    hasNewMessages: r,
                    history: n,
                    isHighlighted: a,
                    onDrawerOpen: i,
                    triggerHighlight: o,
                  }),
                )
              }),
              v()(u()(e), '_renderExpandedInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.conversationIds,
                  r = t.fetchInboxHistory,
                  i = t.updateLastSeenEventId
                return b.a.createElement(
                  te.a,
                  { style: at.fill },
                  b.a.createElement(
                    te.a,
                    { style: [at.viewportView, Ve.b.drawerHeaderRadius] },
                    b.a.createElement(
                      ze.a,
                      { style: [at.viewportView, Ve.b.drawerHeaderRadius] },
                      e._renderHeader(),
                      b.a.createElement(We.a, {
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
              v()(u()(e), '_renderEmptyDMInbox', function () {
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  e._renderPivot(),
                  b.a.createElement(qe.a, {
                    buttonLink: '/messages/compose',
                    buttonText: Ze,
                    header: Xe,
                    message: Je,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              v()(u()(e), '_dmDrawerOnClick', function (t, n) {
                ;(0, e.props.popOutConversation)(n), t.preventDefault()
              }),
              v()(u()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              v()(u()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              v()(u()(e), '_renderPivot', function () {
                return e.props.allowUntrustedInbox
                  ? b.a.createElement(
                      te.a,
                      { style: at.requestPivotContainer },
                      b.a.createElement(Ge.a, {
                        label: $e,
                        link: Object(Ke.a)(Y.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: e._renderPivotBadge,
                      }),
                    )
                  : null
              }),
              v()(u()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? b.a.createElement(ae.a, {
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
                  this._isExpanded() && Object(z.a)()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this._isExpanded()
                  return b.a.createElement(
                    b.a.Fragment,
                    null,
                    !e && this._renderHeader(),
                    e && this._renderExpandedInbox(),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component)
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
            viewportView: w()(w()({}, oe.a.absoluteFillObject), {}, { overflowY: 'auto' }),
          }
        }),
        rt = Ue(nt),
        it = n('YeIG'),
        ot = n('A69o'),
        st = 'DMDrawer',
        lt = n('TnY3'),
        ct = n('0FVZ'),
        ut = n('Oe3h'),
        dt = n('nBUg'),
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
              v()(u()(e), 'state', { isHeaderHighlighted: !1, hasStartedInitialFetch: !1, unexpandedHeight: void 0 }),
              v()(u()(e), '_handleLayout', function (t) {
                var n = t.nativeEvent.layout.height,
                  a = e.state.unexpandedHeight
                e._isExpanded() || void 0 !== a || e.setState({ unexpandedHeight: n })
              }),
              v()(u()(e), '_showDMDrawer', function () {
                var t = e.props,
                  n = t.conversations,
                  a = t.visibility === Y.b.CLOSED
                return !e._isHideDMDrawerPath() && !Object(it.a)(n) && !a
              }),
              v()(u()(e), '_isExpanded', function () {
                return e.props.visibility === Y.b.EXPANDED
              }),
              v()(u()(e), '_triggerHeaderHighlight', function () {
                var t = e.state.isHeaderHighlighted
                e._isExpanded() ||
                  t ||
                  e._headerHighlightTimeoutId ||
                  (e.setState({ isHeaderHighlighted: !0 }),
                  (e._headerHighlightTimeoutId = setTimeout(function () {
                    e.setState({ isHeaderHighlighted: !1 }), (e._headerHighlightTimeoutId = void 0)
                  }, 3e3)))
              }),
              v()(u()(e), '_handleDrawerOpen', function () {
                e.state.isHeaderHighlighted &&
                  (e.setState({ isHeaderHighlighted: !1 }),
                  clearTimeout(e._headerHighlightTimeoutId),
                  (e._headerHighlightTimeoutId = void 0))
              }),
              v()(u()(e), '_isOnOcfFlow', function () {
                return e.props.location.pathname.startsWith('/i/flow')
              }),
              v()(u()(e), '_isOnBirdwatchPage', function () {
                return e.props.location.pathname.startsWith('/i/birdwatch')
              }),
              v()(u()(e), '_isHideDMDrawerPath', function () {
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
                    u = l.unexpandedHeight,
                    d = this._isExpanded()
                  return this._showDMDrawer()
                    ? b.a.createElement(
                        ct.a.Drawer,
                        null,
                        b.a.createElement(ut.a, { id: 'DMDrawer' }, function (t, l) {
                          return b.a.createElement(
                            k.a.Provider,
                            { value: { isDrawer: !0 } },
                            b.a.createElement(
                              dt.b.Provider,
                              {
                                value: {
                                  isDMDrawer: function () {
                                    return !0
                                  },
                                },
                              },
                              b.a.createElement(
                                te.a,
                                r()({ ref: t() }, l({ style: [Ve.b.root, { width: s }], testID: st })),
                                b.a.createElement(
                                  te.a,
                                  {
                                    onLayout: u ? void 0 : e._handleLayout,
                                    style: [Ve.b.expandable, { height: u, maxHeight: u }, d && Ve.b.expanded],
                                  },
                                  o
                                    ? b.a.createElement(
                                        ot.a.Provider,
                                        { value: mt },
                                        b.a.createElement(Pe, {
                                          conversationId: o,
                                          history: n,
                                          isHeaderHighlighted: c,
                                          location: a,
                                          onDrawerOpen: e._handleDrawerOpen,
                                          perspective: i,
                                          triggerHeaderHighlight: e._triggerHeaderHighlight,
                                        }),
                                      )
                                    : b.a.createElement(
                                        ot.a.Provider,
                                        { value: pt },
                                        b.a.createElement(rt, {
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
        })(b.a.PureComponent)
      v()(ht, 'defaultProps', { width: y.a.dmDrawerWidth.max })
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
      var u = n('X/yg'),
        d = n('yiKp'),
        p = n.n(d),
        m = (n('849X'), n('TJCb'), n('89tF')),
        h = n('k89r')
      function f(e) {
        var t,
          n,
          a,
          i,
          o,
          s =
            ((t = r.a.useState(b.activeVoiceMessage)),
            (n = r.a.useState(b.playerApi)),
            (a = r.a.useState(b.playerState)),
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
        return r.a.createElement(y.Provider, { value: s }, e.children)
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
      var b = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        y = r.a.createContext({
          activeVoiceMessage: [b.activeVoiceMessage, _],
          playerApi: [b.playerApi, _],
          playerState: [b.playerState, _],
          scribeAction: null,
        })
      function _() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function E(e) {
        var t = r.a.useContext(i.a).featureSwitches
        return Object(u.j)(t) ? r.a.createElement(f, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = y
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
    kb9v: function (e, t, n) {
      'use strict'
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('1t7P'), n('jQ/y'), n('hBvt'), n('ERkP')),
        o = n.n(i),
        s = n('TIdA'),
        l = n('t62R'),
        c = n('A91F'),
        u = n('/yvb'),
        d = n('Eqye'),
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
          b = e.icon,
          y = e.iconColor,
          _ = e.imageUrl,
          E = e.onDismiss,
          S = e.shouldDisplay,
          C = e.text,
          I = e.withMask,
          k = void 0 === I || I,
          R = o.a.useState(!1),
          w = r()(R, 2),
          x = w[0],
          T = w[1],
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
                withMask: k,
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
              L(),
              o.a.createElement(
                f.a,
                { style: g.container },
                F(),
                D(),
                P({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                P({ action: n, dismiss: e }),
              ),
            )
          },
          L = function () {
            var e = b && o.a.createElement(b, { style: y ? [g.icon, { color: h.a.theme.colors[y] }] : g.icon })
            return (
              _ &&
                !d.a.isEnabled &&
                (e = o.a.createElement(s.a, { accessibilityLabel: '', aspectMode: c.a.exact(2), image: _ })),
              e && o.a.createElement(f.a, { style: g.graphic }, e)
            )
          },
          F = function () {
            return o.a.createElement(l.b, { size: 'title3', weight: 'heavy' }, i)
          },
          D = function () {
            return o.a.createElement(l.b, { color: 'gray700', style: g.description }, C)
          },
          P = function (e) {
            var t = e.action,
              n = e.dismiss,
              a = e.type
            return (
              t &&
              o.a.createElement(
                u.a,
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
        return S && !x ? (a ? A(a) : O()) : a || null
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
        u = n('MWbm'),
        d = n('cHvH'),
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
          return r.a.createElement(d.a, null, function (t) {
            var n = t.windowWidth,
              a = i.a.isTwoColumnLayout(n),
              o = 0 === e.length
            return a || o
              ? null
              : r.a.createElement(
                  u.a,
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
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        o = n('aWyx'),
        s = n('XnpN'),
        l = n('3XMw'),
        c = n.n(l),
        u = c.a.b5b7fb93,
        d = c.a.g755fcde,
        p = c.a.f6b1ff81
      t.a = function (e, t, n) {
        var a = e.type,
          r = e.name,
          i = e.participants,
          l = void 0 === i ? {} : i
        if (a === o.a.GROUP && r) return r
        if (Object.keys(l).length) {
          if (a === o.a.GROUP && n) return u
          var c = Object(s.a)(e, t).map(function (e) {
            return e.user
          })
          return m(c, t, a)
        }
      }
      var m = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.a.GROUP,
          a = e
            .filter(function (e) {
              return e.id_str !== t
            })
            .map(function (e) {
              return e.name
            })
        switch (a.length) {
          case 0:
            return d
          case 1:
            var s = r()(a, 1),
              l = s[0]
            return n === o.a.GROUP ? p({ name: l }) : l
          default:
            var c = !0
            return Object(i.a)(a, c)
        }
      }
    },
    pXKu: function (e, t, n) {
      'use strict'
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('vrRf'), n('+KXO'), n('ERkP')),
        v = n.n(f),
        g = n('BUB3'),
        b = n('v6aA'),
        y = n('xZGM'),
        _ = n('rxPX'),
        E = Object(_.a)()
          .propsFromState(function () {
            return {
              shouldShowPrompt: function (e, t) {
                return Object(y.z)(e, y.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: y.w }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        S = n('fs1G'),
        C = n('t62R'),
        I = n('feu+'),
        k = n('3XMw'),
        R = n.n(k),
        w = R.a.fd6150fc,
        x = v.a.createElement(
          R.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          v.a.createElement(C.b, { link: '/privacy' }, R.a.d42d239f),
        ),
        T = R.a.j24c37b2,
        A = E(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            a = e.shouldShowPrompt,
            r = v.a.useContext(b.a).featureSwitches
          if (!(a && r.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            v.a.createElement(I.a, {
              actionLabel: T,
              headline: w,
              onAction: function () {
                n.scribeAction('click'), t(y.j)
              },
              onClose: S.a,
              subtext: x,
              withCloseButton: !1,
            })
          )
        }),
        O = n('MMRb'),
        M = n('kGix'),
        L = n('0KEI'),
        F = Object(_.a)()
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
            return { fetchStatus: n ? M.a.LOADED : t, isRefreshing: n && a }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_INBOX',
              ),
              fetchInbox: O.fetchInbox,
              fetchInboxIfNeeded: O.fetchInboxIfNeeded,
              fetchUpdates: O.fetchUpdatesIfNeeded,
            }
          }),
        D = n('yiKp'),
        P = n.n(D),
        N = n('ddV6'),
        B = n.n(N),
        H =
          (n('2G9S'),
          n('hBpG'),
          n('7x/C'),
          n('z84I'),
          n('ho0z'),
          n('tQbP'),
          n('LW0h'),
          n('jQ3i'),
          n('x4t0'),
          n('6U7i'),
          n('KqXw'),
          n('MvUL'),
          n('hBvt'),
          n('lTEL'),
          n('kYxP'),
          n('HPNB')),
        j = n('EbOo'),
        U = n('tZH3'),
        V = n('1YZw'),
        W = n('hqKg'),
        K = n('AQOc'),
        z = n('G6rE'),
        q = n('oEGd'),
        G = function (e, t) {
          return t.conversationId
        },
        Q = Object(W.createSelector)(
          G,
          function (e, t) {
            return O.selectConversation(e, G(0, t))
          },
          O.selectEntries,
          z.e.selectAll,
          function (e, t) {
            return !O.selectConversationIsRead(e, G(0, t))
          },
          function (e, t) {
            var n = G(0, t)
            return Object(O.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(y.z)(e, y.r)
          },
          function (e, t, n, a, r, i, o) {
            return {
              conversation: (null == t ? void 0 : t.data) && Object(K.a)(t.data, n, a),
              conversationId: e,
              unread: r,
              inboxType: i,
              shouldShowPinnedEducation: o,
            }
          },
        ),
        Y = {
          addFlag: y.w,
          addRecentSearch: O.addRecentSearches,
          addToast: V.b,
          block: z.e.block,
          createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: O.disableNotifications,
          enableNotifications: O.enableNotifications,
          leaveConversation: O.leaveConversation,
          muteDMUser: O.muteDMUser,
          unmuteDMUser: O.unmuteDMUser,
          unblock: z.e.unblock,
        },
        X = Object(q.g)(Q, Y),
        J = n('aA19'),
        Z = n('OhSZ'),
        $ = n('V/6K'),
        ee = n('g54k'),
        te = function (e, t) {
          return t.entry
        },
        ne = Object(_.a)()
          .propsFromState(function () {
            return { users: Object(W.createSelector)(z.e.selectAll, te, ee.b) }
          })
          .adjustStateProps(function (e) {
            var t = e.users
            return P()({}, t)
          }),
        ae = n('zQEV'),
        re = ne(function (e) {
          var t = e.entry,
            n = e.entryType,
            a = e.perspective,
            r = e.users,
            i = Object(ae.a)(t, n, a, r)
          return v.a.createElement(C.b, { color: 'gray700' }, i)
        }),
        ie = Object(W.createSelector)(
          function (e, t) {
            return z.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? z.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        oe = Object(q.c)(ie),
        se = n('X/yg'),
        le = n('cTG8'),
        ce = function (e) {
          return v.a.createElement(R.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, v.a.createElement(C.b, null, e))
        },
        ue = R.a.dedfd265
      var de = R.a.a876e58b,
        pe = R.a.bf584cd1,
        me = R.a.a9cc8cfd,
        he = R.a.e20b65b0,
        fe = R.a.e5bfe07d,
        ve = R.a.b1a614fe,
        ge = oe(function (e) {
          var t = e.entry,
            n = e.perspective,
            a = e.isGroupDM,
            r = e.user,
            i = void 0 === r ? {} : r,
            o = e.recipient,
            s = void 0 === o ? {} : o,
            l = v.a.useContext(b.a).featureSwitches,
            c = t && t.message_data
          if (!c) return null
          var u = c.attachment,
            d = u && !!(u.video || u.photo || u.animated_gif || u.tweet || u.fleet || u.sticker || u.card),
            p = n === i.id_str,
            m = !(!d || !p) || !(!a || p),
            h = i.name,
            f = s.name,
            g = [
              m && v.a.createElement(C.b, { key: 'senderName' }, ce(h), ' '),
              c &&
                c.text &&
                v.a.createElement(le.a, {
                  displayTextRange: [0, c.text.length],
                  entities: c.entities,
                  key: 'message',
                  text: c.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            u &&
              (u.tweet
                ? (g = m
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, R.a.d5b762c8)
                          : v.a.createElement(
                              R.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(p, h)
                    : ve)
                : u.fleet
                ? (g = (function (e, t, n) {
                    return e
                      ? v.a.createElement(
                          R.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          v.a.createElement(C.b, null, t),
                          v.a.createElement(C.b, null, n || ''),
                        )
                      : v.a.createElement(
                          R.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          v.a.createElement(C.b, null, n || ''),
                        )
                  })(p, f, c.text))
                : u.video
                ? (g = Object(se.k)(u, l)
                    ? m
                      ? (function (e, t) {
                          return e
                            ? v.a.createElement(C.b, null, R.a.h7033cac)
                            : v.a.createElement(
                                R.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                v.a.createElement(C.b, null, t),
                              )
                        })(p, h)
                      : ue
                    : m
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, R.a.j7d81019)
                          : v.a.createElement(
                              R.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(p, h)
                    : de)
                : u.photo
                ? (g = m
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, R.a.f80629ba)
                          : v.a.createElement(
                              R.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(p, h)
                    : pe)
                : u.animated_gif
                ? (g = m
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, R.a.eb3d722e)
                          : v.a.createElement(
                              R.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(p, h)
                    : me)
                : u.sticker
                ? (g = m
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, R.a.d30c2d4f)
                          : v.a.createElement(
                              R.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(p, h)
                    : he)
                : u.card &&
                  (g = m
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, R.a.db53c017)
                          : v.a.createElement(
                              R.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(p, h)
                    : fe)),
            v.a.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, g)
          )
        }),
        be = n('uKEd'),
        ye = function (e, t) {
          return t.senderId ? z.e.select(e, t.senderId) : void 0
        },
        _e = function (e, t) {
          return Object(be.n)(e, t.reactionEntry.message_id)
        },
        Ee = function (e, t) {
          var n = _e(e, t)
          return n && n.message_data && z.e.select(e, n.message_data.sender_id)
        },
        Se = Object(q.e)(function () {
          return Object(W.createSelector)(ye, _e, Ee, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        Ce = n('33Kz'),
        Ie = Se(function (e) {
          var t,
            n = e.isGroupDM,
            a = e.messageUser,
            r = e.perspective,
            i = e.reactedMessageEntry,
            o = e.reactingUser,
            s = e.reactionEntry,
            l = v.a.useContext(b.a).featureSwitches,
            c = i && i.message_data,
            u = c && c.attachment,
            d = c && c.text,
            p = a && a.screen_name,
            m = r === (o && o.id_str),
            h = o && o.name,
            f = Object(Ce.b)(s.reaction_key || '', l)
          return (
            (t =
              u && u.tweet
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(m, h, p, f)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'ca684bf5' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(m, h, f)
                : u && u.video
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(m, h, p, f)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'ab1cdfe2' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(m, h, f)
                : u && u.photo
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(m, h, p, f)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'jf27606a' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(m, h, f)
                : u && u.animated_gif
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(m, h, p, f)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'b2da1bf8' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(m, h, f)
                : u && u.card
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(m, h, p, f)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'f9fb1cf6' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(m, h, f)
                : d
                ? n
                  ? (function (e, t, n, a, r) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            v.a.createElement(C.b, null, a),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, r),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, a),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, r),
                          )
                    })(m, h, f, p, d)
                  : (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            R.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(m, h, f, d)
                : (function (e, t, n) {
                    return e
                      ? v.a.createElement(R.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, v.a.createElement(C.b, null, n))
                      : v.a.createElement(
                          R.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          v.a.createElement(C.b, null, t),
                          v.a.createElement(C.b, null, n),
                        )
                  })(m, h, f)),
            v.a.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, t)
          )
        }),
        ke = n('H4nC'),
        Re = n('b9JY'),
        we = R.a.fb3ccb55,
        xe = function (e) {
          var t = e.conversationType,
            n = e.entry,
            a = e.perspective
          if (n.marked_as_spam) return v.a.createElement(C.b, { color: 'gray700', numberOfLines: 1 }, we)
          if (Object(Re.b)(n)) {
            var r = n.message_data,
              i = (r = void 0 === r ? {} : r).recipient_id,
              o = r.sender_id
            return v.a.createElement(ge, {
              entry: n,
              isGroupDM: t === O.CONVERSATION_TYPE.GROUP,
              perspective: a,
              recipientId: i,
              senderId: o,
            })
          }
          return Object(Re.c)(n)
            ? v.a.createElement(Ie, {
                isGroupDM: t === O.CONVERSATION_TYPE.GROUP,
                perspective: a,
                reactionEntry: n,
                senderId: n.sender_id,
              })
            : Object(Re.a)(n)
            ? v.a.createElement(re, { entry: n, entryType: n.type, perspective: a })
            : Object(Re.d)(n)
            ? v.a.createElement(ke.a, { entry: n, isCompact: !0 })
            : null
        },
        Te = n('Myq3'),
        Ae = n('3wZR'),
        Oe = n('XnpN'),
        Me = 'conversation',
        Le = n('u0B7'),
        Fe = n('MWbm'),
        De = n('Irs7'),
        Pe = n('eb3s'),
        Ne = n('ZToW'),
        Be = n('cHvH'),
        He = n('lHOd'),
        je = n('kb9v'),
        Ue = n('IG7M'),
        Ve = n('mjJ+'),
        We = n('Znyr'),
        Ke = n('0PHd'),
        ze = n('yrzJ'),
        qe = n('Xrkv'),
        Ge = n('efqG'),
        Qe = n('/yvb'),
        Ye = n('GBcw'),
        Xe = n('cm6r'),
        Je = n('htQn'),
        Ze = n('5mJL'),
        $e = n('rHpw'),
        et = n('vMjK'),
        tt = n('AQ79'),
        nt = n('pHkl'),
        at = n('aWyx'),
        rt = n('Lsrn'),
        it = n('k/Ka'),
        ot = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(it.a)(
            'svg',
            P()(
              P()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [rt.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M17.931 2.508c0 .42-.34.75-.75.75h-8.39l1.38 2.08-.56 5.78-.47.16c-1.5.49-3.1 2.07-3.37 3.31-.07.35-.39.59-.73.59-.05 0-.11 0-.16-.01-.4-.09-.66-.49-.58-.89.39-1.81 2.24-3.52 3.91-4.25l.42-4.3-1.35-2.02c-.26-.38-.29-.87-.07-1.29.24-.41.66-.66 1.11-.66h8.86c.41 0 .75.34.75.75zm3.09 12.76c-.14.17-.46.46-1.05.46h-3.86l-2.64 6.1c-.12.28-.39.45-.69.45s-.57-.17-.69-.45l-1.96-4.53c-.16-.38.01-.82.39-.98.38-.17.82.01.99.39l1.27 2.93 1.69-3.91h-1.61c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h6.81c-.41-1.06-1.64-2.26-2.91-2.82-.09-.04-.16-.09-.22-.16-.22-.21-.3-.54-.17-.83.17-.38.61-.55.99-.39 1.59.7 3.5 2.43 3.89 4.25.06.25.03.66-.23.99zm.839-12.259L3.2 21.659c-.15.15-.34.22-.53.22s-.39-.07-.53-.22c-.29-.29-.29-.76 0-1.06L20.8 1.939c.29-.29.76-.29 1.06 0 .29.3.29.77 0 1.07z',
              }),
            ),
          )
        }
      ot.metadata = { width: 24, height: 24 }
      var st = ot,
        lt = n('ShJ/'),
        ct = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(it.a)(
            'svg',
            P()(
              P()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [rt.a.root, e.style],
                viewBox: '0 0 32 32',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M28.05 6.52h-5.42V4.887c0-1.548-1.26-2.808-2.81-2.808h-7.54c-1.548 0-2.807 1.26-2.807 2.808v1.63H4.05c-.414 0-.75.337-.75.75s.336.75.75.75h.753L7 26.435c.27 1.504 1.657 2.554 3.37 2.554h11.36c1.713 0 3.1-1.05 3.376-2.598l2.19-18.37h.753c.413 0 .75-.337.75-.75s-.336-.75-.75-.75zM10.972 4.887c0-.72.586-1.308 1.307-1.308h7.542c.72 0 1.308.587 1.308 1.308v1.63H10.972V4.89zm12.65 21.28c-.163.91-1.068 1.32-1.893 1.32H10.37c-.824 0-1.73-.41-1.887-1.276L6.313 8.02h19.472l-2.162 18.148z',
              }),
              v.a.createElement('path', {
                d: 'M13.312 23.123c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75zm5.486 0c.414 0 .75-.336.75-.75v-9.6c0-.414-.336-.75-.75-.75s-.75.336-.75.75v9.6c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ct.metadata = { width: 32, height: 32 }
      var ut = ct,
        dt = n('zIWA'),
        pt = n('5pef'),
        mt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(it.a)(
            'svg',
            P()(
              P()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [rt.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            v.a.createElement(
              'g',
              null,
              v.a.createElement('path', {
                d: 'M22.238 2.257c-.293-.293-.768-.293-1.06 0L2.52 20.917c-.293.292-.293.767 0 1.06.146.146.338.22.53.22s.384-.073.53-.22l18.658-18.66c.293-.293.293-.767 0-1.06zM2.986 17.82c.155 0 .312-.048.446-.148.112-.083 2.752-2.104 2.708-7.248-.02-2.16.643-3.98 1.913-5.266 1.093-1.107 2.577-1.72 4.18-1.727 1.325.006 2.562.42 3.578 1.195.137.104.297.153.455.153.227 0 .45-.102.598-.295.25-.33.188-.8-.142-1.052-1.278-.975-2.828-1.493-4.483-1.5h-.003c-2.008.008-3.87.78-5.248 2.173-1.536 1.551-2.368 3.8-2.348 6.332.037 4.33-2.02 5.967-2.103 6.03-.332.247-.4.718-.154 1.05.147.2.374.303.603.303zm16.844-7.382c.002-.246-.003-.487-.017-.723-.024-.414-.387-.74-.792-.706-.413.023-.728.378-.705.79.012.205.017.413.015.624-.024 2.868.785 4.765 1.526 5.896h-8.314c-.414 0-.75.336-.75.75s.336.75.75.75h3.522c-.1 1.48-1.323 2.66-2.828 2.66-1.003 0-1.913-.514-2.436-1.372-.214-.354-.675-.467-1.03-.25-.354.214-.467.675-.25 1.03.795 1.31 2.185 2.09 3.716 2.09 2.332 0 4.227-1.85 4.328-4.158h4.922c.32 0 .604-.206.707-.51.104-.305 0-.643-.255-.84-.087-.066-2.145-1.7-2.108-6.032z',
              }),
            ),
          )
        }
      mt.metadata = { width: 24, height: 24 }
      var ht = mt,
        ft = n('5oT/'),
        vt = R.a.d88d0790,
        gt = R.a.ad63377d,
        bt = {
          confirmButtonLabel: R.a.bb1d57b6,
          actionTextLeave: R.a.g9074da4,
          header: R.a.gdf4b79f,
          text: R.a.h09b49f7,
        },
        yt = R.a.e1c9ec9b,
        _t = R.a.i6b19b07,
        Et = R.a.e3cfff7c,
        St = R.a.f398722d,
        Ct = R.a.a8ed0eca,
        It = R.a.jac4eb1e,
        kt = R.a.bdd91963,
        Rt = R.a.a30a206d,
        wt = R.a.ib4b1b85,
        xt = R.a.bd3ca2ee,
        Tt = { component: 'low_quality_timeline' },
        At = function (e) {
          var t = e.children
          return v.a.createElement(Fe.a, { style: Nt.socialProofContainer }, t)
        },
        Ot = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_count', e.context.featureSwitches.getValue('dm_conversation_labels_max_pinned_count')),
              h()(
                l()(e),
                '_isPinnedEducationEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_education_enabled'),
              ),
              h()(
                l()(e),
                '_isPinnedInboxEnabled',
                e.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  e.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              h()(
                l()(e),
                '_isVDLEnabled',
                e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
              ),
              h()(l()(e), 'state', { showActionMenu: !1, showConfirmation: !1, showPinnedAnnouncement: !1 }),
              h()(l()(e), '_renderConfirmationSheet', function () {
                var t = e.props.conversationId
                return v.a.createElement(Pe.a, {
                  confirmButtonLabel: bt.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: bt.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: bt.text,
                })
              }),
              h()(l()(e), '_renderMenu', function (t) {
                var n,
                  a = t.isFocused,
                  r = t.isFocusedWithin,
                  i = t.isHovered,
                  o = e.state,
                  s = o.showActionMenu,
                  l = o.showPinnedAnnouncement,
                  c = e.props,
                  u = c.conversation,
                  d = c.position,
                  p =
                    u &&
                    (null == u || null === (n = u.labels) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.label_type === tt.a.PINNED
                        })),
                  m = function () {
                    e.setState({ showPinnedAnnouncement: !1 })
                  },
                  h = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  f = e._isPinnedEducationEnabled && l && 1 === d && !p,
                  g = !Ne.a.isEnabled || a || r || i || s || f
                return v.a.createElement($.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return v.a.createElement(Be.a, null, function (t) {
                    var a = t.windowWidth,
                      r = H.a.isTwoColumnLayout(a)
                    return v.a.createElement(He.a.Consumer, null, function (t) {
                      return v.a.createElement(
                        Fe.a,
                        { style: Nt.menuContainer },
                        v.a.createElement(
                          je.a,
                          {
                            actionPrimary: { text: Rt, onClick: m },
                            headline: wt,
                            onDismiss: m,
                            shouldDisplay: f && !n,
                            text: xt({ count: e._count }),
                            withMask: !r,
                          },
                          r
                            ? v.a.createElement(Ue.a, {
                                onClick: h,
                                renderActionMenu: e._renderActionMenu,
                                style: g ? Nt.menu : Nt.hiddenMenu,
                              })
                            : null,
                        ),
                        r
                          ? null
                          : v.a.createElement(Ue.a, {
                              onClick: h,
                              renderActionMenu: e._renderActionMenu,
                              style: g ? Nt.menu : Nt.hiddenMenu,
                            }),
                      )
                    })
                  })
                })
              }),
              h()(l()(e), '_renderActionMenu', function (t) {
                var n,
                  a = e.props,
                  r = a.conversation,
                  i = a.conversationId,
                  o = e.context.history,
                  s = Boolean(
                    r &&
                      (null == r || null === (n = r.labels) || void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            return e.label_type === tt.a.PINNED
                          })),
                  ),
                  l = null == r ? void 0 : r.notifications_disabled,
                  c = []
                if (r) {
                  var u = {
                    Icon: s ? st : lt.a,
                    onClick: function () {
                      return e._handleTogglePinState(s)
                    },
                    text: s ? kt : yt,
                    withBottomBorder: !0,
                  }
                  c.push(u)
                  var d = {
                      Icon: ut,
                      isEmphasized: !0,
                      onClick: e._handleDeleteMenuItemClick,
                      text: gt,
                      withBottomBorder: !0,
                    },
                    p = {
                      Icon: dt.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(o)()
                      },
                      text: _t,
                      withBottomBorder: !0,
                    },
                    m = {
                      Icon: l ? pt.a : ht,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(i)
                      },
                      text: l ? Ct : Et,
                      withBottomBorder: !0,
                    }
                  c.push(p, m, d)
                }
                return v.a.createElement(Ve.a, {
                  items: c,
                  onCloseRequested: e._handleHideMenu(t),
                  shouldCloseOnClick: !0,
                })
              }),
              h()(l()(e), '_renderConversationActions', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered
                switch (e.props.inboxType) {
                  case tt.d.PRIMARY:
                    return e._isPinnedInboxEnabled
                      ? e._renderMenu({ isFocused: n, isFocusedWithin: a, isHovered: r })
                      : null
                  case tt.d.SECONDARY:
                  case tt.d.TERTIARY:
                    return e._renderX()
                  default:
                    return null
                }
              }),
              h()(l()(e), '_renderConversationEndCell', function (t) {
                var n = e.props,
                  a = n.inboxType,
                  r = n.searchQuery,
                  i = n.unread
                    ? v.a.createElement(We.a, {
                        pip: !0,
                        style: Nt.unreadMessagePip,
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: function () {
                          return ''
                        },
                      })
                    : null
                switch (a) {
                  case tt.d.PRIMARY:
                    return e._isVDLEnabled ? i : r ? null : e._renderTimestamp(t)
                  case tt.d.SECONDARY:
                    return e._isVDLEnabled ? i : null
                  default:
                    return null
                }
              }),
              h()(l()(e), '_renderConversationLabel', function (e) {
                var t = e.convo_label
                if (null == t || !t.text) return null
                var n = Object(Ae.b)(t.icon)
                return v.a.createElement(
                  C.b,
                  { color: 'gray700', size: 'subtext2' },
                  n ? v.a.createElement(n, { style: Nt.convoLabelIcon }) : null,
                  t.text,
                )
              }),
              h()(l()(e), '_renderSocialProof', function (t) {
                var n = t.social_proof
                if (!n || 0 === n.length) return null
                var a = n[0]
                switch (a.proof_type) {
                  case at.d.MUTUAL_FRIENDS:
                    if (0 === a.total) return null
                    var r = a.users.map(function (e) {
                        return e.profile_image_url_https
                      }),
                      i = a.users.map(function (e) {
                        return e.name
                      }),
                      o = e._isVDLEnabled ? { marginLeft: 0 } : null
                    return v.a.createElement(
                      At,
                      null,
                      v.a.createElement(Ke.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: r,
                        knownFollowersCount: a.total,
                        knownFollowersNames: i,
                        textStyle: o,
                        withFacepile: !e._isVDLEnabled,
                      }),
                    )
                  default:
                    return null
                }
              }),
              h()(l()(e), '_renderSearchConversationPreview', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.perspective,
                  r = t.searchQuery,
                  i = n ? Object(Oe.a)(n, a) : [],
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
                  if (n.type === O.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = i.map(function (e) {
                        return e.user
                      }),
                      d = B()(u, 1)[0]
                    return v.a.createElement(ze.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(qe.a)(c, !0)
                  return v.a.createElement(C.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              h()(l()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = e.context.loggedInUserId,
                  i = Object(se.i)(n, r),
                  o = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP
                return v.a.createElement(He.a.Consumer, null, function (t) {
                  return v.a.createElement(
                    Ge.a,
                    {
                      renderContent: function (n, r) {
                        return v.a.createElement(U.a, {
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
                    v.a.createElement(Qe.a, {
                      accessibilityLabel: vt,
                      icon: v.a.createElement(ft.a, { style: e._isVDLEnabled ? Nt.xIcon : void 0 }),
                      onPress: e._handleXPress,
                      style: e._isVDLEnabled ? Nt.vdlXButton : Nt.xButton,
                      type: e._isVDLEnabled ? void 0 : 'destructiveText',
                    }),
                  )
                })
              }),
              h()(l()(e), '_handleDeleteMenuItemClick', function () {
                e.setState({ showConfirmation: !0 })
              }),
              h()(l()(e), '_handleHideMenu', function (t) {
                return function () {
                  t && t(), e.setState({ showActionMenu: !1 })
                }
              }),
              h()(l()(e), '_handleReportMenuItemClick', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.conversationId,
                    i = n.inboxType
                  if (r) {
                    a.scribeAction('report')
                    var o = Object(se.f)(r, window.location.pathname, a.contextualScribeNamespace, i)
                    t.push(o)
                  }
                }
              }),
              h()(l()(e), '_handleSnoozeMenuItemClick', function (t) {
                var n = e.props,
                  a = n.addToast,
                  r = n.analytics,
                  i = n.conversation,
                  o = n.disableNotifications,
                  s = n.enableNotifications
                if (null == i ? void 0 : i.notifications_disabled)
                  s({ conversationId: t }).then(a({ ariaOnly: !0, text: It }))
                else {
                  var l = null != i && i.participants ? Object.keys(i.participants).length : 0,
                    c = {
                      conversation_type:
                        (null == i ? void 0 : i.type) === O.CONVERSATION_TYPE.GROUP ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: l,
                      entry_point: nt.b.THREE_DOT_MENU,
                    }
                  r.scribe({ element: 'thread', action: 'mute_dm_thread_forever', data: c }),
                    o({ conversationId: t }).then(a({ ariaOnly: !0, text: St }))
                }
              }),
              h()(l()(e), '_handleTogglePinState', function (t) {
                var n = e.props,
                  a = n.analytics,
                  r = n.conversation,
                  i = n.conversationId,
                  o = n.position,
                  s = n.togglePinState,
                  l = t ? 'unpin_dm_conversation' : 'pin_dm_conversation',
                  c = null != r && r.participants ? Object.keys(r.participants).length : 0,
                  u = {
                    conversation_type:
                      (null == r ? void 0 : r.type) === O.CONVERSATION_TYPE.GROUP ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                    conversation_id: i,
                    conversation_participant_count: c,
                    position: o,
                  }
                a.scribe({ element: 'thread', action: l, data: u }), r && s && s(i, r)
              }),
              h()(l()(e), '_handleXPress', function (e) {
                e.preventDefault()
              }),
              h()(l()(e), '_renderTimestamp', function (t) {
                var n = e.props,
                  a = n.conversation,
                  r = n.isMessageItem,
                  i =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  o = [i || r ? Nt.inlineNotificationsDisabledIcon : Nt.notificationsDisabledIcon],
                  s = Number(t && r ? (null == t ? void 0 : t.time) : null == a ? void 0 : a.sort_timestamp)
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  v.a.createElement(
                    Fe.a,
                    { style: (i || r) && Nt.inlineTimestamp },
                    a && s ? v.a.createElement(Ye.a, { timestamp: s }) : null,
                    null != a && a.notifications_disabled ? v.a.createElement(ht, { style: o }) : null,
                  ),
                )
              }),
              h()(l()(e), '_deleteConversation', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.conversation,
                    i = n.createLocalApiErrorHandler,
                    o = n.inboxType,
                    s = n.leaveConversation,
                    l = n.position,
                    c = e.context.history,
                    u = null != r && r.participants ? Object.keys(r.participants).length : 0,
                    d = r && r.type === O.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    p = {
                      conversation_type:
                        (null == r ? void 0 : r.type) === O.CONVERSATION_TYPE.GROUP ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: u,
                      position: l,
                      inbox_type: Object(se.h)(o),
                      entry_point: o === nt.c.PRIMARY ? nt.b.THREE_DOT_MENU : nt.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    a.scribe({ element: 'thread', action: d, data: p }),
                    s({ conversationId: t }).catch(i({ showToast: !0 })),
                    c.replace(Object(se.e)(o))
                }
              }),
              h()(l()(e), '_blockUser', function (t) {
                return function () {
                  var n = e.props,
                    a = n.addToast,
                    r = n.analytics,
                    i = n.block,
                    o = n.createLocalApiErrorHandler
                  i(t).then(function () {
                    a({ action: { label: et.c, onAction: e._createUnblockUserHandler(t) }, text: et.a })
                  }, o(j.a)),
                    r.scribeAction('block')
                }
              }),
              h()(l()(e), '_createUnblockUserHandler', function (t) {
                return function () {
                  var n = e.props,
                    a = n.analytics,
                    r = n.createLocalApiErrorHandler
                  ;(0, n.unblock)(t).catch(r(Le.a)), a.scribeAction('unblock')
                }
              }),
              h()(l()(e), '_handleHideConfirmation', function () {
                e.setState({ showConfirmation: !1 })
              }),
              h()(l()(e), '_handleOnClick', function (t) {
                var n = e.props,
                  a = n.addRecentSearch,
                  r = n.analytics,
                  i = n.conversation,
                  o = n.conversationId,
                  s = n.onClick,
                  l = n.position,
                  c = n.searchQuery,
                  u = null != i && i.participants ? Object.keys(i.participants).length : 0,
                  d = (null == i ? void 0 : i.type) === O.CONVERSATION_TYPE.GROUP
                c &&
                  (r.scribe({
                    component: 'search',
                    element: 'conversation',
                    action: 'click',
                    data: {
                      conversation_id: o,
                      conversation_participant_count: u,
                      conversation_type: d ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                      entry_point: nt.b.ALL,
                      inbox_type: nt.c.PRIMARY,
                      dm_search_result_type: nt.a.CONVERSATION,
                      message_type: nt.d.NOT_APPLICABLE,
                      position: l,
                    },
                  }),
                  r.scribe({ component: 'recent_search', action: 'add' }),
                  a(c)),
                  s(t, o, i, l)
              }),
              h()(l()(e), '_handleShowConfirmation', function (t) {
                var n = e.props.analytics
                t.stopPropagation(),
                  n.scribe(P()(P()({}, Tt), {}, { element: 'accessory_trashcan', action: 'click' })),
                  e.setState({ showConfirmation: !0 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag
                  e.shouldShowPinnedEducation && (this.setState({ showPinnedAnnouncement: !0 }), t(y.r))
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
                    u = e.conversation,
                    d = null == u ? void 0 : u.conversation_id,
                    p = null == u ? void 0 : u.notifications_disabled,
                    m = null == u ? void 0 : u.last_read_event_id,
                    h = null == u ? void 0 : u.sort_event_id,
                    f = null == u ? void 0 : u.max_entry_id,
                    v = null == u ? void 0 : u.convo_label,
                    g = e.messageId,
                    b = this.props,
                    y = b.filter,
                    _ = b.isActive,
                    E = e.filter,
                    S = e.isActive,
                    C = this.state,
                    I = C.showConfirmation,
                    k = C.showPinnedAnnouncement,
                    R = t.showConfirmation,
                    w = t.showPinnedAnnouncement
                  return (
                    a !== d ||
                    r !== p ||
                    i !== m ||
                    o !== h ||
                    s !== f ||
                    c !== g ||
                    _ !== S ||
                    I !== R ||
                    y !== E ||
                    l !== v ||
                    k !== w
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
                    r = t.isMessageItem,
                    i = t.link,
                    o = t.messageId,
                    s = t.perspective,
                    l = t.position,
                    c = t.searchQuery,
                    u = t.unread,
                    d = this.state.showConfirmation,
                    p = (null == n ? void 0 : n.entries) || [],
                    m = r
                      ? p.find(function (e) {
                          return e.id === o
                        })
                      : Object(Te.a)(p, function (e) {
                          return ![
                            at.b.MESSAGE_DELETE,
                            at.b.REACTION_DELETE,
                            at.b.MESSAGE_MARK_AS_SPAM,
                            at.b.MESSAGE_MARK_AS_NOT_SPAM,
                            at.b.CONVO_METADATA_UPDATE,
                            at.b.DISABLE_NOTIFICATIONS,
                            at.b.ENABLE_NOTIFICATIONS,
                          ].includes(e.type)
                        }),
                    h = [Nt.root, u && !this._isVDLEnabled && Nt.unread],
                    f = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP,
                    g = this._isVDLEnabled && f
                  if (!n) return null
                  var b = !!n.convo_label,
                    y = !n.trusted && !b,
                    _ = this._isVDLEnabled ? 'xxxLarge' : 'xxLarge',
                    E = this._renderConversationEndCell(m),
                    S = c && !r
                  return !n || (!c && n.isSearchResultOnly)
                    ? null
                    : v.a.createElement(
                        v.a.Fragment,
                        null,
                        d ? this._renderConfirmationSheet() : null,
                        v.a.createElement(Xe.a, null, function (t) {
                          var o = t.isFocused,
                            u = t.isFocusedWithin,
                            d = t.isHovered
                          return v.a.createElement(
                            Je.a,
                            {
                              accessibilityRole: 'none',
                              accessibilityState: { selected: a },
                              link: {
                                pathname: null == i ? void 0 : i.pathname,
                                anchorless: !0,
                                state: P()(P()({}, null == i ? void 0 : i.state), {}, { position: l }),
                              },
                              onPress: e._handleOnClick,
                              style: h,
                              testID: Me,
                            },
                            v.a.createElement(
                              Ze.a,
                              {
                                avatarCell: v.a.createElement(J.a, {
                                  conversation: n,
                                  perspective: s,
                                  withBadge: g,
                                  withVDLRefresh: e._isVDLEnabled,
                                }),
                                avatarSize: _,
                              },
                              v.a.createElement(
                                Fe.a,
                                { style: Nt.bodyColumn },
                                v.a.createElement(
                                  Fe.a,
                                  { style: Nt.titleContainer },
                                  v.a.createElement(Z.b, {
                                    conversation: n,
                                    isConversationSearchTitle: !!S,
                                    isMessageSearchTitle: !!r,
                                    perspective: s,
                                    renderTimestamp: function () {
                                      return e._renderTimestamp(m)
                                    },
                                    withScreenName: !c && !r,
                                    withVDLRefresh: e._isVDLEnabled,
                                  }),
                                  v.a.createElement(
                                    Fe.a,
                                    { style: [Nt.snippet, !o && !u && !d && Nt.snippetPadding] },
                                    m && !S
                                      ? v.a.createElement(xe, {
                                          conversationType: n.type,
                                          entry: m,
                                          isMessageItem: r,
                                          perspective: s,
                                        })
                                      : S
                                      ? e._renderSearchConversationPreview()
                                      : null,
                                  ),
                                  b ? e._renderConversationLabel(n) : null,
                                  y ? e._renderSocialProof(n) : null,
                                ),
                                E ? v.a.createElement(Fe.a, { style: Nt.endCell }, E) : null,
                                e._renderConversationActions({ isFocused: o, isFocusedWithin: u, isHovered: d }),
                              ),
                            ),
                          )
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(Ot, 'contextType', b.a),
        h()(Ot, 'defaultProps', {
          searchQuery: '',
          inboxType: 'primary',
          isActive: !1,
          filter: function (e) {
            return !0
          },
        })
      var Mt,
        Lt,
        Ft,
        Dt,
        Pt,
        Nt = $e.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.cellBackground,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
              width: '100%',
            },
            bodyColumn: { flexDirection: 'row' },
            inlineTimestamp: { flexDirection: 'row' },
            titleContainer: { flex: 1 },
            inlineNotificationsDisabledIcon: {
              paddingLeft: 'calc('.concat(e.spaces.space2, ' * 3)'),
              color: e.colors.gray700,
            },
            hiddenMenu: { opacity: 0, overflow: 'hidden', width: 0 },
            menu: { alignSelf: 'flex-start' },
            menuContainer: {
              height: 0,
              marginLeft: 'calc('.concat(e.spaces.space8, ' + ').concat(e.spaces.space2, ')'),
            },
            notificationsDisabledIcon: { alignSelf: 'flex-end', color: e.colors.gray700, paddingTop: e.spaces.space4 },
            unreadMessagePip: {
              backgroundColor: e.colors.blue500,
              marginTop: 'calc('.concat(e.spaces.space8, ' - ').concat(e.spaces.space1, ')'),
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
            snippetPadding: {
              paddingRight: 'calc('.concat(e.spaces.space28, ' + ').concat(e.spaces.space1, ' * 0.75)'),
            },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            socialProofContainer: { marginTop: e.spaces.space4 },
            convoLabelIcon: { marginRight: e.spaces.space4 },
            endCell: { marginLeft: e.spaces.space16 },
          }
        }),
        Bt = Object(De.a)(X(Ot), { page: 'messages', section: 'inbox' }),
        Ht =
          (n('jwue'),
          n('+oxZ'),
          n('JtPf'),
          n('87if'),
          Object(_.a)()
            .propsFromState(function () {
              return { pinnedConversationIds: O.selectPinnedConversationIds }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                  'DM_PINNED_INBOX_CONTEXT',
                ),
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox' })),
        jt = n('oUUt'),
        Ut = (n('uFXj'), R.a.b08821f3),
        Vt = R.a.e047b8fa,
        Wt = $e.a.create(function (e) {
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
        Kt = function (e) {
          var t = Object(De.b)(),
            n = e.clearRecentSearches,
            a = e.headerText,
            r = e.icon,
            i = e.isInboxLabelHeader,
            o = e.withClearButton
          v.a.useEffect(
            function () {
              t.scribe({ component: 'recent_search', action: 'impression' })
            },
            [t],
          )
          var s,
            l = [Wt.root, i && Wt.labelHeader]
          return v.a.createElement(
            Fe.a,
            { style: l },
            v.a.createElement(
              Fe.a,
              { style: Wt.iconContainer },
              (s = r) ? v.a.createElement(s, { style: Wt.icon }) : null,
              v.a.createElement(
                C.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
                a,
              ),
            ),
            o
              ? v.a.createElement(
                  Qe.a,
                  { accessibilityLabel: Ut, onPress: n, style: Wt.backButton, type: 'onMediaWhiteFilled' },
                  Vt,
                )
              : null,
          )
        },
        zt = n('h3MB'),
        qt = (n('enFi'), n('1IsZ'), n('IAdD'), n('xPna')),
        Gt = function (e) {
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
            null != e && e.entries && (a = P()(P()({}, a), {}, { entries: null == e ? void 0 : e.entries })),
            Object(qt.a)(a)
          )
        },
        Qt = n('VPAj'),
        Yt = n('7n04'),
        Xt = P()(
          P()({}, Yt.a),
          {},
          { initialScrollHeadroom: Object(Qt.a)(0), scrollHeadroom: Object(Qt.a)(0), pinToNewestWhenAtNewest: !0 },
        ),
        Jt = n('TEoO'),
        Zt = n('NjAB'),
        $t = n('IG4P'),
        en = n('Fr3L'),
        tn = n('uDfI'),
        nn = n('DQzJ'),
        an = n('UIzd'),
        rn = n.n(an),
        on = n('OIs+'),
        sn = R.a.cb367657,
        ln = R.a.ie9a7e48,
        cn = R.a.hd3927c6,
        un = R.a.f1ac0968,
        dn =
          ((Mt = {}),
          h()(Mt, on.a.Offline, { toast: { text: ln } }),
          h()(Mt, 'defaultToast', { text: sn }),
          h()(Mt, 'showToast', !0),
          Mt),
        pn =
          ((Lt = {}),
          h()(Lt, on.a.Offline, { toast: { text: un } }),
          h()(Lt, 'defaultToast', { text: cn }),
          h()(Lt, 'showToast', !0),
          Lt),
        mn = n('9SqB'),
        hn = n.n(mn),
        fn = n('Ud88'),
        vn = n.n(fn),
        gn = R.a.e4b3f520,
        bn = R.a.ae4d666a,
        yn = function (e) {
          return e
        },
        _n = R.a.a219e217,
        En = R.a.d571e4f8,
        Sn = R.a.a551bf7d,
        Cn = R.a.d98e066b,
        In = R.a.j302dba7,
        kn = void 0 !== Ft ? Ft : (Ft = n('X8um')),
        Rn = { context: 'DM_PINNED_INBOX' },
        wn = function (e) {
          var t,
            a,
            r,
            i = Object(tn.c)(),
            o = e.accessibilityTitle,
            s = e.analytics,
            l = e.cacheKey,
            c = e.conversationIds,
            u = e.createLocalApiErrorHandler,
            d = e.footer,
            p = e.header,
            m = e.onNearEnd,
            f = e.pinnedConversationIds,
            g = e.renderEmptyDMInbox,
            y = e.renderInboxItem,
            _ = e.withKeyboardShortcuts,
            E = vn()(),
            S = Object(nn.a)(kn, { label: tt.a.PINNED }).data,
            C = (null == S || null === (t = S.labeled_conversation_slice) || void 0 === t ? void 0 : t.items) || [],
            I = Object(Zt.b)(C, [zt.a]).entities,
            k = v.a.useContext(b.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            R = v.a.useState(!1),
            w = B()(R, 2),
            x = w[0],
            T = w[1],
            A = v.a.useState(!1),
            M = B()(A, 2),
            L = M[0],
            F = M[1],
            D =
              ((a = S),
              (r = v.a.useRef()),
              v.a.useEffect(function () {
                r.current = a
              }),
              r.current)
          v.a.useEffect(
            function () {
              var e,
                t = (null == D || null === (e = D.labeled_conversation_slice) || void 0 === e ? void 0 : e.items) || [],
                n =
                  null == t
                    ? void 0
                    : t.filter(function (e) {
                        return -1 === C.indexOf(e.rest_id)
                      })
              n.length &&
                n.forEach(function (e) {
                  var t,
                    n =
                      null === (t = e.labels) || void 0 === t
                        ? void 0
                        : t.filter(function (e) {
                            return e.label_type !== tt.a.PINNED
                          })
                  i(Gt({ conversations: h()({}, e.rest_id, P()(P()({}, e), {}, { labels: n })) }))
                }),
                i(Gt(I))
            },
            [S],
          )
          var N = hn()(void 0 !== Dt ? Dt : (Dt = n('ZH9U'))),
            H = B()(N, 1)[0],
            j = hn()(void 0 !== Pt ? Pt : (Pt = n('rQjK'))),
            U = B()(j, 1)[0],
            W = function (e, t) {
              U({
                variables: { conversation_id: e, label_type: tt.a.PINNED },
                onCompleted: function (n) {
                  var a,
                    r = Object(Oe.a)(t),
                    o = t
                      ? null == t || null === (a = t.labels) || void 0 === a
                        ? void 0
                        : a.filter(function (e) {
                            return e.label_type !== tt.a.PINNED
                          })
                      : []
                  i(Gt({ conversations: h()({}, e, P()(P()({}, t), {}, { participants: r, labels: o })) })),
                    i(Object(V.b)({ ariaOnly: !0, text: In }))
                },
                updater: function (t) {
                  var n,
                    a,
                    r =
                      null ===
                        (n = C.find(function (t) {
                          return t.rest_id === e
                        })) || void 0 === n
                        ? void 0
                        : n.id,
                    i = null == S || null === (a = S.labeled_conversation_slice) || void 0 === a ? void 0 : a.__id
                  if (r && i) {
                    var o = t.get(r),
                      s = t.get(i)
                    s && o && (Object(jt.b)(s, r), t.delete(r))
                  }
                },
                onError: function (e) {
                  u(pn)(e)
                },
              })
            },
            K =
              null == c
                ? void 0
                : c.filter(function (e) {
                    return -1 === f.indexOf(e)
                  }),
            z = f.length && K.length,
            q = v.a.createElement(
              v.a.Fragment,
              null,
              p,
              null != f && f.length
                ? v.a.createElement(
                    v.a.Fragment,
                    null,
                    xn(gn),
                    f.map(function (e, t) {
                      return y({ conversationIds: f, togglePinState: W })(e)
                    }),
                  )
                : null,
              z ? xn(bn) : null,
            )
          return null != c && c.length
            ? v.a.createElement(
                v.a.Fragment,
                null,
                L
                  ? v.a.createElement(Pe.a, {
                      confirmButtonLabel: _n,
                      headline: En({ count: k }),
                      onConfirm: function () {
                        return F(!1)
                      },
                      text: Sn,
                      withCancelButton: !1,
                    })
                  : null,
                v.a.createElement(
                  $t.a,
                  {
                    isRefreshing: x,
                    onRefresh: function () {
                      T(!0)
                      var e = rn()(E, kn, { label: tt.a.PINNED }).toPromise()
                      Promise.all([
                        e,
                        function () {
                          return i(O.fetchInbox())
                        },
                      ])
                        .then(function () {
                          return T(!1)
                        })
                        .catch(function (e) {
                          u()(e), T(!1)
                        })
                    },
                  },
                  l && null != K && K.length
                    ? v.a.createElement(Jt.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: o,
                        anchoring: Xt,
                        assumedItemHeight: 100,
                        cacheKey: l,
                        footer: d,
                        header: q,
                        identityFunction: yn,
                        items: K,
                        onNearEnd: m,
                        renderer: y({
                          conversationIds: K,
                          togglePinState: function (e, t) {
                            H({
                              variables: { conversation_id: e, label: tt.a.PINNED },
                              onCompleted: function (n) {
                                var a
                                switch (
                                  null === (a = n.add_dm_conversation_label_v3) || void 0 === a ? void 0 : a.__typename
                                ) {
                                  case 'DMConversationLabelInfo':
                                    var r = n.add_dm_conversation_label_v3,
                                      o = r.label_type,
                                      l = r.timestamp,
                                      c = Object(Oe.a)(t)
                                    i(
                                      Gt({
                                        conversations: h()(
                                          {},
                                          e,
                                          P()(
                                            P()({}, t),
                                            {},
                                            { participants: c, labels: [{ label_type: o, timestamp: l }] },
                                          ),
                                        ),
                                      }),
                                    ),
                                      i(Object(V.b)({ ariaOnly: !0, text: Cn }))
                                    break
                                  case 'DMConversationLabelUnavailable':
                                    var u = n.add_dm_conversation_label_v3.failure_reason
                                    s.scribe({
                                      element: 'thread',
                                      action: 'error_shown',
                                      data: { error_type: nt.e.MAX_PINS_REACHED },
                                    }),
                                      'ExceededMaxPinnedConversations' === u && F(!0)
                                }
                              },
                              onError: function (e) {
                                u(dn)(e)
                              },
                            })
                          },
                        }),
                        withKeyboardShortcuts: _,
                        withoutHeadroom: !0,
                      })
                    : q,
                ),
              )
            : g()
        },
        xn = function (e) {
          return v.a.createElement(Fe.a, null, v.a.createElement(Kt, { headerText: e, isInboxLabelHeader: !0 }))
        }
      var Tn = Ht(function (e) {
          return v.a.createElement(en.a, { errorConfig: Rn }, v.a.createElement(wn, e))
        }),
        An =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        On = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        Mn = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: On, sliceItems: An }
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
        Ln = n('MDbM'),
        Fn = n('v//M'),
        Dn = n('0yYu'),
        Pn = n('lBmi'),
        Nn = n('91AQ'),
        Bn = n('6ZHn'),
        Hn = R.a.c94ac69d,
        jn = R.a.a2f8105f,
        Un = R.a.g2fd3205,
        Vn = R.a.ffd9cfe6,
        Wn = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(
                l()(e),
                '_groupBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_groups_bucket_size'),
              ),
              h()(
                l()(e),
                '_messagesBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_messages_bucket_size'),
              ),
              h()(
                l()(e),
                '_peopleBucketSize',
                e.context.featureSwitches.getNumberValue('dm_inbox_search_people_bucket_size'),
              ),
              h()(l()(e), '_renderSearchResults', function () {
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
                  ? v.a.createElement(
                      v.a.Fragment,
                      null,
                      r.length ? e._renderPeopleSection() : null,
                      o && !c ? v.a.createElement(Dn.a, null) : null,
                      c ? e._renderDMSearchFooter(Un) : null,
                      n.length ? e._renderGroupsSection() : null,
                      s ? e._renderDMSearchFooter(Hn) : null,
                      a.length ? e._renderMessagesSection() : null,
                      l ? e._renderDMSearchFooter(jn) : null,
                    )
                  : i()
              }),
              h()(l()(e), '_handleFetch', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.fetchSearchIfNeeded)().catch(n())
              }),
              h()(l()(e), '_renderDMSearchFooter', function (t) {
                var n = e.props.location
                return v.a.createElement(
                  Fe.a,
                  { style: zn.header },
                  v.a.createElement(C.b, { link: { pathname: n.pathname, state: { tab: t } } }, Vn),
                )
              }),
              h()(l()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return v.a.createElement(Kt, { headerText: t, icon: n })
              }),
              h()(l()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  a = t.renderInboxItem
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Pn.a, headerText: Hn }),
                  n
                    .map(function (e) {
                      return e ? a({ conversationIds: n })(e) : null
                    })
                    .slice(0, e._groupBucketSize),
                )
              }),
              h()(l()(e), '_renderMessagesSection', function () {
                var t = e.props,
                  n = t.entryIds,
                  a = t.messageConversationIds,
                  r = t.renderInboxItem
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Nn.a, headerText: jn }),
                  n
                    .map(function (e) {
                      return e
                        ? (function (e) {
                            return r({ conversationIds: a, isMessageItem: !0, messageIds: n })(e)
                          })(e)
                        : null
                    })
                    .slice(0, e._messagesBucketSize),
                )
              }),
              h()(l()(e), '_renderPeopleSection', function () {
                var t = e.props,
                  n = t.peopleSearchConversationIds,
                  a = t.renderInboxItem
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Bn.a, headerText: Un }),
                  n
                    .map(function (e) {
                      return e ? a({ conversationIds: n })(e) : null
                    })
                    .slice(0, e._peopleBucketSize),
                )
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.fetchStatus,
                    a = t.module
                  e.module !== a && n !== Ln.a.FAILED && this._handleFetch()
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
                  return v.a.createElement(Fn.a, {
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
        })(v.a.Component)
      h()(Wn, 'contextType', b.a)
      var Kn,
        zn = $e.a.create(function (e) {
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
        qn = Mn(Wn),
        Gn = n('wAC9'),
        Qn = function (e) {
          return Object(Gn.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(nt.f, '-').concat(e),
            getEndpointParams: function (t) {
              return P()(P()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Gt,
          })
        },
        Yn = function (e, t) {
          return t.query
        },
        Xn = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(W.createSelector)(Yn, function (e) {
              return e ? Qn(e) : void 0
            }),
          }
        })(function (e) {
          var t = e.loadingLabel,
            n = e.location,
            a = e.query,
            r = e.renderEmptyState,
            i = e.renderInboxItem,
            o = e.sliceModule
          return o
            ? v.a.createElement(qn, {
                loadingLabel: t,
                location: n,
                module: o,
                query: a,
                renderEmptyState: r,
                renderInboxItem: i,
              })
            : r()
        }),
        Jn = O.selectRecentSearches,
        Zn = function (e, t) {
          return t.query ? O.selectSearchConversations(e, t.query) : []
        },
        $n = function (e, t) {
          return t.query ? O.selectSearchFetchStatus(e, t.query) : M.a.LOADED
        },
        ea = function (e, t) {
          return t.conversationIds || []
        },
        ta = function (e, t) {
          return null != e && e.length
            ? t.filter(function (t) {
                return e.indexOf(t) > -1
              })
            : e
        },
        na = Object(_.a)()
          .propsFromState(function () {
            return { conversationIds: ea, recentSearches: Jn, searchFetchStatus: $n, searchConversationIds: Zn }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationIds,
              n = e.recentSearches,
              a = e.searchConversationIds
            return {
              conversationIds: t,
              recentSearches: n,
              searchFetchStatus: e.searchFetchStatus,
              searchConversationIds: ta(a, t),
            }
          })
          .propsFromActions(function () {
            return {
              addRecentSearch: O.addRecentSearches,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: O.searchConversations,
              clearRecentSearch: O.clearRecentSearch,
              clearRecentSearches: O.clearRecentSearches,
            }
          }),
        aa = n('VY6S'),
        ra = n('s14A'),
        ia = n('VPW4'),
        oa = n('mN6z'),
        sa = void 0 !== Kn ? Kn : (Kn = n('y59G')),
        la = 'DM_MESSAGE_SEARCH',
        ca = { context: la },
        ua = function (e) {
          return e
        },
        da = function (e) {
          var t,
            n,
            a,
            r = e.footer,
            i = e.noItemsRenderer,
            o = e.onScrollEnd,
            s = e.renderInboxItem,
            l = e.searchTerm,
            c = Object(tn.c)(),
            u = Object(nn.a)(sa, { query: l }),
            d = u.data,
            p = u.fetchNext,
            m = u.hasNext,
            h = v.a.useMemo(
              function () {
                var e,
                  t,
                  n,
                  a =
                    null == d ||
                    null === (e = d.dm_message_slice_result) ||
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
                  r = null == d || null === (n = d.dm_message_slice_result) || void 0 === n ? void 0 : n.items,
                  i = Object(Zt.b)(a, [zt.a]),
                  o = Object(Zt.b)(r, [zt.b])
                return {
                  normalizedConversations: i,
                  normalizedMessages: o,
                  entities: P()(P()({}, null == i ? void 0 : i.entities), null == o ? void 0 : o.entities),
                }
              },
              [null == d || null === (t = d.dm_message_slice_result) || void 0 === t ? void 0 : t.items],
            ),
            f = h.entities,
            g = h.normalizedConversations,
            b = h.normalizedMessages,
            y =
              ((n = d),
              (a = v.a.useRef()),
              v.a.useEffect(function () {
                a.current = n
              }),
              a.current)
          return (
            v.a.useEffect(
              function () {
                Object(oa.a)(d, y) || c(Gt(f, !0))
              },
              [f, d, y, c],
            ),
            v.a.createElement(Jt.a, {
              cacheKey: la,
              footer: m ? null : r,
              identityFunction: ua,
              items: null == b ? void 0 : b.result,
              noItemsRenderer: i,
              onNearEnd: p,
              onScrollEnd: o,
              renderer: s({
                conversationIds: null == g ? void 0 : g.result,
                isMessageItem: !0,
                messageIds: null == b ? void 0 : b.result,
              }),
              withoutHeadroom: !0,
            })
          )
        },
        pa = $e.a.create(function (e) {
          return { activityIndicatior: { paddingVertical: 250 } }
        })
      function ma(e) {
        return v.a.createElement(
          en.a,
          { errorConfig: ca },
          v.a.createElement(
            v.a.Suspense,
            { fallback: v.a.createElement(ia.a, { style: pa.activityIndicatior }) },
            v.a.createElement(da, e),
          ),
        )
      }
      var ha = n('j7Bv'),
        fa = n('VwDm'),
        va = n('hOZg'),
        ga = R.a.dbd5d40f,
        ba = (function (e) {
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
                  var e = this.props,
                    t = e.clearRecentSearch,
                    n = e.handleRecentSearchClick,
                    a = e.recentSearch,
                    r = v.a.createElement(ha.a, { Icon: fa.a, color: 'neutral', size: 'xLarge', style: ya.searchIcon }),
                    i = [ya.listItemView, ya.bottomBorder]
                  return v.a.createElement(
                    Je.a,
                    { onPress: n, style: i },
                    v.a.createElement(
                      Fe.a,
                      null,
                      v.a.createElement(
                        Ze.a,
                        { avatarCell: r, avatarSize: 'xLarge', cellStyle: ya.avatarColumn },
                        v.a.createElement(
                          Fe.a,
                          { style: ya.container },
                          v.a.createElement(C.b, { numberOfLines: 1 }, a),
                          v.a.createElement(Qe.a, {
                            accessibilityLabel: ga,
                            borderColor: 'transparent',
                            icon: v.a.createElement(va.a, null),
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
        })(v.a.PureComponent),
        ya = $e.a.create(function (e) {
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
        _a = ba,
        Ea = function (e) {
          return Object(Gn.a)({
            contextSuffix: 'DM_GROUP_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMGroupSearch
            },
            sliceKey: ''.concat(nt.f, '-groups-').concat(e),
            getEndpointParams: function (t) {
              return P()(P()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Gt,
          })
        },
        Sa = function (e) {
          return Object(Gn.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(nt.f, '-people-').concat(e),
            getEndpointParams: function (t) {
              return P()(P()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: Gt,
          })
        },
        Ca = function (e, t) {
          return t.query
        },
        Ia = function (e, t) {
          return t.tabType
        },
        ka = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(W.createSelector)(Ia, Ca, function (e, t) {
              var n = t && e === nt.g.PEOPLE
              return t && e === nt.g.GROUPS ? Ea(t) : n ? Sa(t) : void 0
            }),
          }
        }),
        Ra = n('FS1z'),
        wa = ka(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            a = e.renderEmptyState,
            r = e.renderInboxItem,
            i = e.sliceModule
          return i
            ? v.a.createElement(Ra.a, {
                footer: t,
                module: i,
                noItemsRenderer: a,
                onScrollEnd: n,
                renderer: r({ conversationIds: [] }),
                withoutHeadroom: !0,
              })
            : a()
        }),
        xa = n('RJrc'),
        Ta = n('TnY3'),
        Aa = n('FIs5'),
        Oa = n('6OUF'),
        Ma = n('k/OQ'),
        La = n('95Se'),
        Fa = 'dmSearchInbox',
        Da = function (e) {
          return e
        },
        Pa = R.a.b08821f3,
        Na = R.a.a66ac766,
        Ba = R.a.fe61929d,
        Ha = R.a.a846382a,
        ja = R.a.b9dae4f4,
        Ua = R.a.e7fb2027,
        Va = R.a.b92a21d8,
        Wa = R.a.jdc67c42,
        Ka = R.a.e8581ccd,
        za = R.a.f08940ab,
        qa = R.a.gaae1fd5,
        Ga = R.a.f8321d82,
        Qa = R.a.c94ac69d,
        Ya = R.a.a2f8105f,
        Xa = R.a.g2fd3205,
        Ja = R.a.fb3c8e74,
        Za = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { debouncedQuery: '', isLoadingMore: !1, isRefreshing: !1 }),
              h()(
                l()(e),
                '_messageSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              h()(
                l()(e),
                '_modularSearchEnabled',
                e.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              h()(l()(e), '_setInputRef', function (t) {
                e._textInputRef = t
              }),
              h()(l()(e), '_renderEmptyDMSearchInbox', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = e.state.debouncedQuery
                return r && a
                  ? (n.scribe({ component: 'search', element: 'results', action: 'empty' }),
                    v.a.createElement(Aa.a, {
                      buttonLink: '/messages/compose',
                      buttonText: za,
                      header: Va({ query: r }),
                      message: e._messageSearchEnabled ? Ka : Wa,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : v.a.createElement(
                      Fe.a,
                      { style: $a.emptyState },
                      v.a.createElement(C.b, { align: 'center', color: 'gray700' }, qa),
                    )
              }),
              h()(l()(e), '_renderRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.query,
                  r = t.recentSearches
                return r.length && !a
                  ? v.a.createElement(
                      v.a.Fragment,
                      null,
                      v.a.createElement(Kt, {
                        analytics: n,
                        clearRecentSearches: e._clearRecentSearches,
                        headerText: Ja,
                        withClearButton: !0,
                      }),
                      r.map(function (t) {
                        return v.a.createElement(_a, {
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
              h()(l()(e), '_renderAllDMSearchResultsTab', function () {
                var t = e.props,
                  n = t.location,
                  a = t.renderInboxItem,
                  r = e.state.debouncedQuery
                return r
                  ? v.a.createElement(Xn, {
                      loadingLabel: Na,
                      location: n,
                      query: r,
                      renderEmptyState: e._renderEmptyDMSearchInbox,
                      renderInboxItem: a,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              h()(l()(e), '_renderConversationsTab', function (t) {
                var n = e.props.renderInboxItem,
                  a = e.state.debouncedQuery
                return v.a.createElement(wa, {
                  footer: e._renderFooter(),
                  onScrollEnd: e._handleScrollEnd,
                  query: a,
                  renderEmptyState: e._renderEmptyDMSearchInbox,
                  renderInboxItem: n,
                  tabType: t ? nt.g.GROUPS : nt.g.PEOPLE,
                })
              }),
              h()(l()(e), '_renderMessagesTab', function () {
                var t = e.props.renderInboxItem,
                  n = e.state.debouncedQuery
                return n
                  ? v.a.createElement(ma, {
                      footer: e._renderFooter(),
                      noItemsRenderer: e._renderEmptyDMSearchInbox,
                      onScrollEnd: e._handleScrollEnd,
                      renderInboxItem: t,
                      searchTerm: n,
                    })
                  : e._renderEmptyDMSearchInbox()
              }),
              h()(l()(e), '_renderTabContent', function () {
                var t = e.props.location
                switch (((null == t ? void 0 : t.state) || {}).tab) {
                  case Xa:
                    return e._renderConversationsTab(!1)
                  case Qa:
                    return e._renderConversationsTab(!0)
                  case Ya:
                    return e._renderMessagesTab()
                  default:
                    return e._renderAllDMSearchResultsTab()
                }
              }),
              h()(l()(e), '_renderSearchResults', function () {
                var t = e.props,
                  n = t.accessibilityTitle,
                  a = t.renderInboxItem,
                  r = t.searchConversationIds,
                  i = e.state.isRefreshing
                return v.a.createElement(
                  ra.a,
                  null,
                  v.a.createElement(
                    $t.a,
                    { isRefreshing: i, onRefresh: e._handlePullToRefresh },
                    v.a.createElement(Jt.a, {
                      accessibilityRole: 'tablist',
                      accessibilityTitle: n,
                      anchoring: Xt,
                      assumedItemHeight: 100,
                      cacheKey: Fa,
                      footer: e._renderFooter(),
                      identityFunction: Da,
                      items: r,
                      noItemsRenderer: e._renderRecentSearches,
                      onNearEnd: e._handleNearEnd,
                      onScrollEnd: e._handleScrollEnd,
                      renderer: a({ conversationIds: r }),
                      withoutHeadroom: !0,
                    }),
                  ),
                )
              }),
              h()(l()(e), '_renderFooter', function () {
                return e.state.isLoadingMore
                  ? v.a.createElement(xa.a, null)
                  : v.a.createElement(
                      Fe.a,
                      { style: $a.footerContainer },
                      v.a.createElement(C.b, { align: 'center', size: 'body', weight: 'bold' }, Ua),
                      v.a.createElement(
                        Xe.a,
                        { interactiveStyles: null },
                        v.a.createElement(
                          C.b,
                          {
                            align: 'center',
                            color: 'primary',
                            onPress: e._handleFooterClick,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          ja,
                        ),
                      ),
                    )
              }),
              h()(l()(e), '_clearRecentSearches', function () {
                var t = e.props,
                  n = t.analytics,
                  a = t.clearRecentSearches
                n.scribe({ component: 'recent_search', action: 'clear' }), a()
              }),
              h()(l()(e), '_handleComposeButtonPress', function () {
                e.props.analytics.scribe({ component: 'search', element: 'empty_results', action: 'compose' })
              }),
              h()(l()(e), '_handleFooterClick', function () {
                var t, n, a
                e._textInputRef && e._textInputRef.focus(),
                  null === (t = e._textInputRef) ||
                    void 0 === t ||
                    null === (n = t.textInput) ||
                    void 0 === n ||
                    null === (a = n.textInputNode) ||
                    void 0 === a ||
                    a.select()
              }),
              h()(l()(e), '_handleRefetchSearch', function () {
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
              h()(l()(e), '_handlePullToRefresh', function () {
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
              h()(l()(e), '_handleSearchChangeInner', function (t) {
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
              h()(l()(e), '_handleSearchChangeDebounced', Object(aa.a)(e._handleSearchChangeInner, 200)),
              h()(l()(e), '_handleSearchChange', function (t) {
                var n = t.currentTarget.value,
                  a = e.props.onQueryChange
                ;((n && n.trim()) || !n) && (a(n), e._handleSearchChangeDebounced(n))
              }),
              h()(l()(e), '_handleNearEnd', function () {
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
              h()(l()(e), '_handleScrollEnd', function () {
                var t = e.props,
                  n = t.addRecentSearch,
                  a = t.analytics,
                  r = t.query
                e.state.debouncedQuery && r && (n(r), a.scribe({ component: 'recent_search', action: 'add' }))
              }),
              h()(l()(e), '_handleSearchClear', function () {
                return e._handleSearchChangeInner('')
              }),
              h()(l()(e), '_handleHideRecentSearches', function () {
                ;(0, e.props.hideRecentSearches)()
              }),
              h()(l()(e), '_handleAddRecentSearch', function (t) {
                var n = t.currentTarget.value,
                  a = e.props,
                  r = a.addRecentSearch,
                  i = a.analytics
                n &&
                  (r(n),
                  i.scribe({ component: 'recent_search', action: 'add' }),
                  e._textInputRef && e._textInputRef.blur())
              }),
              h()(l()(e), '_handleRecentSearchClick', function (t) {
                var n = e.props,
                  a = n.analytics
                ;(0, n.onQueryChange)(t),
                  a.scribe({ component: 'recent_search', action: 'click' }),
                  e._handleSearchChangeInner(t)
              }),
              h()(l()(e), '_handleClearRecentSearch', function (t, n) {
                var a = e.props,
                  r = a.analytics,
                  i = a.clearRecentSearch
                t.stopPropagation(), t.preventDefault(), r.scribe({ component: 'recent_search', action: 'clear' }), i(n)
              }),
              e
            )
          }
          return (
            o()(n, [
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
                    r = !(
                      (this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                        this.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled')) ||
                      (this._modularSearchEnabled && n)
                    ),
                    i = [$a.searchInput, r ? $a.searchInputBorder : void 0],
                    o = ((null == t ? void 0 : t.state) || {}).tab,
                    s = [Ga, Xa, Qa]
                  this._messageSearchEnabled && s.push(Ya)
                  var l = s.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return o === e || (!o && e === Ga)
                      },
                      to: P()(P()({}, t), {}, { state: P()(P()({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(
                      Fe.a,
                      { style: i },
                      v.a.createElement(Qe.a, {
                        accessibilityLabel: Pa,
                        icon: v.a.createElement(La.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      v.a.createElement(Oa.a, {
                        Icon: fa.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? Ha : Ba,
                        ref: this._setInputRef,
                        value: n,
                        withClearButton: !0,
                      }),
                    ),
                    this._modularSearchEnabled && (n || o === Xa || o === Qa)
                      ? v.a.createElement(
                          v.a.Fragment,
                          null,
                          v.a.createElement(Ma.a, { links: l }),
                          this._renderTabContent(),
                        )
                      : v.a.createElement(Fn.a, {
                          accessibilityLabel: Na,
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
        })(v.a.Component)
      h()(Za, 'contextType', b.a), h()(Za, 'defaultProps', { recentSearches: [], searchConversationIds: [], query: '' })
      var $a = $e.a.create(function (e) {
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
        er = Object(Ta.a)(na(Za)),
        tr = n('dwig'),
        nr = n('QB0K'),
        ar = n('Avzu'),
        rr = n('FRNI'),
        ir = R.a.h845f281,
        or = R.a.f325afc3,
        sr = (function (e) {
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
                  return v.a.createElement(nr.a, {
                    accessibilityLabel: ir,
                    href: '/messages/compose',
                    icon: v.a.createElement(ar.a, null),
                    label: ir,
                    scribeComponent: 'floating_dm_button',
                    shortLabel: or,
                    testID: rr.a.message,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        lr = n('tI3i'),
        cr = n.n(lr),
        ur = n('883S'),
        dr = n('yoO3'),
        pr = n('GSsg'),
        mr = n('2g+p'),
        hr = n('mw9i'),
        fr = n('BcsE'),
        vr = n('+d3d'),
        gr = function (e) {
          return e
        },
        br = R.a.a66ac766,
        yr = R.a.fe61929d,
        _r = R.a.a846382a,
        Er = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), 'state', { showSearchView: !1, searchQuery: '' }),
              h()(
                l()(i),
                '_enablePinnedInbox',
                i.context.featureSwitches.isTrue('dm_conversation_labels_pinned_enabled') &&
                  i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1'),
              ),
              h()(
                l()(i),
                '_messageSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled'),
              ),
              h()(
                l()(i),
                '_modularSearchEnabled',
                i.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled'),
              ),
              h()(l()(i), '_render', function () {
                var e = i.props.withPinnedInbox,
                  t = i.state.showSearchView,
                  n = i._enablePinnedInbox && e ? i._renderPinnedInbox : i._renderInbox
                return t ? i._renderFocusedSearch() : n()
              }),
              h()(l()(i), '_renderFocusedSearch', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.analytics,
                  a = e.conversationIds,
                  r = i.state.searchQuery
                return v.a.createElement(er, {
                  accessibilityTitle: t,
                  analytics: n,
                  conversationIds: a,
                  hideRecentSearches: i._hideRecentSearches,
                  onQueryChange: i._handleQueryChange,
                  query: r,
                  renderInboxItem: i._renderInboxItem,
                })
              }),
              h()(l()(i), '_renderInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  a = e.footer,
                  r = e.isDrawer,
                  o = e.isRefreshing,
                  s = e.renderEmptyDMInbox,
                  l = e.virtualScrollerCacheKey
                return v.a.createElement(
                  $t.a,
                  { isRefreshing: o, onRefresh: i._handlePullToRefresh },
                  l && n
                    ? v.a.createElement(Jt.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: t,
                        anchoring: Xt,
                        assumedItemHeight: 100,
                        cacheKey: l,
                        footer: a,
                        header: i._renderHeader(),
                        identityFunction: gr,
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
              h()(l()(i), '_handleNearEnd', function () {
                i._handleHistoryRequest()
              }),
              h()(l()(i), '_handleQueryChange', function (e) {
                i.setState({ searchQuery: e })
              }),
              h()(l()(i), '_handleSearchChange', function (e) {
                e.currentTarget.value
                i.state.showSearchView || i.setState({ showSearchView: !0 })
              }),
              h()(l()(i), '_handleSearchClick', function () {
                i.props.analytics.scribe({ component: 'search', action: 'click' }), i.setState({ showSearchView: !0 })
              }),
              h()(l()(i), '_hideRecentSearches', function () {
                i.setState({ showSearchView: !1, searchQuery: '' })
              }),
              h()(l()(i), '_renderInboxItem', function (e) {
                var t = e.conversationIds,
                  n = e.isMessageItem,
                  a = void 0 !== n && n,
                  r = e.messageIds,
                  o = e.togglePinState
                return function (e, n) {
                  var s = i.context.loggedInUserId,
                    l = i.props.location,
                    c = i.state.searchQuery,
                    u = a ? (r || []).indexOf(e) : -1,
                    d = -1 !== u && null != t && t.length ? t[u] : null,
                    p = d ? e : '',
                    m = d || e,
                    h = { pathname: '/messages/'.concat(m), state: null == l ? void 0 : l.state },
                    f = m && null != t && t.length ? t.indexOf(m) : null,
                    b = Object(fr.a)(f) ? f + 1 : 0
                  return (
                    cr()(!!s, 'loggedInUserId must be defined'),
                    n && n(!0),
                    v.a.createElement(g.a, { exact: !1, path: h.pathname }, function (e) {
                      return v.a.createElement(Bt, {
                        conversationId: m,
                        inboxType: i.props.inboxType,
                        isActive: e,
                        isMessageItem: a,
                        key: m,
                        link: h,
                        messageId: p,
                        onClick: i._handleConversationClick,
                        perspective: s,
                        position: b,
                        searchQuery: c,
                        togglePinState: o,
                      })
                    })
                  )
                }
              }),
              h()(l()(i), '_renderPinnedInbox', function () {
                var e = i.props,
                  t = e.accessibilityTitle,
                  n = e.conversationIds,
                  a = e.footer,
                  r = e.isDrawer,
                  o = e.renderEmptyDMInbox,
                  s = e.virtualScrollerCacheKey
                return n.length
                  ? v.a.createElement(Tn, {
                      accessibilityTitle: t,
                      cacheKey: s,
                      conversationIds: n,
                      footer: a,
                      header: i._renderHeader(),
                      onNearEnd: i._handleNearEnd,
                      renderEmptyDMInbox: o,
                      renderInboxItem: i._renderInboxItem,
                      withKeyboardShortcuts: !r,
                    })
                  : o()
              }),
              h()(l()(i), '_handleFetchInitialWrapper', function () {
                i._handleFetchInitial()
              }),
              h()(l()(i), '_handleFetchInitial', function () {
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
              h()(l()(i), '_handleConversationClick', function (e, t, n, a) {
                var r = i.props,
                  o = r.analytics,
                  s = r.customCellClick,
                  l = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  c = (null == n ? void 0 : n.type) === O.CONVERSATION_TYPE.GROUP
                o.scribe({
                  element: 'thread',
                  action: 'click',
                  data: {
                    event_value: i.state.searchQuery.length,
                    conversation_id: t,
                    conversation_participant_count: l,
                    conversation_type: c ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                    position: a,
                  },
                }),
                  s && s(e, t)
              }),
              h()(l()(i), '_handleEmptyDMInboxImpression', function () {
                i.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              h()(l()(i), '_handlePullToRefresh', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                ;(0, e.fetchInbox)().then(i._updateLastSeenEventId, t())
              }),
              h()(l()(i), '_updateLastSeenEventIdIfActive', function () {
                if ('background' !== mr.a.currentState) return i._updateLastSeenEventId()
              }),
              h()(l()(i), '_renderHeader', function () {
                var e =
                    i.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    i.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  t = i.props,
                  n = t.renderStickyContent,
                  a = t.withDmSearch,
                  r = [Sr.searchInput, e ? void 0 : Sr.searchInputBorder]
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  a
                    ? v.a.createElement(
                        Fe.a,
                        { onClick: i._handleSearchClick, style: r },
                        v.a.createElement(Oa.a, {
                          Icon: fa.a,
                          autoComplete: 'off',
                          isCompact: !0,
                          onChange: i._handleSearchChange,
                          placeholder: i._messageSearchEnabled ? _r : yr,
                          withClearButton: !0,
                        }),
                      )
                    : null,
                  n ? n() : null,
                )
              }),
              h()(l()(i), '_updateLastSeenEventId', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler
                return (0, e.updateLastSeenEventId)().catch(t())
              }),
              (i._fab = v.a.createElement(sr, null)),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.fetchInboxHistory,
                    r = t.fetchUpdates
                  return (
                    (this._updatePolling = new pr.a(
                      function () {
                        r().then(e._updateLastSeenEventIdIfActive, n(ur.a))
                      },
                      { interval: 8e3 },
                    )),
                    (this._handleHistoryRequest = Object(vr.a)(function () {
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
                  return v.a.createElement(
                    dr.a,
                    null,
                    v.a.createElement(A, null),
                    v.a.createElement(
                      tr.a,
                      { component: hr.a, fab: this._fab, style: Sr.root },
                      v.a.createElement(Fn.a, {
                        accessibilityLabel: br,
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
        })(v.a.Component)
      h()(Er, 'contextType', b.a),
        h()(Er, 'defaultProps', {
          conversationIds: [],
          inboxType: tt.d.PRIMARY,
          isDrawer: !1,
          withDmSearch: !1,
          withPinnedInbox: !1,
        })
      var Sr = $e.a.create(function (e) {
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
      t.a = Object(Ta.a)(F(Er))
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
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        _ = n.n(y),
        E = n('nT9l'),
        S = n('3XMw'),
        C = n.n(S),
        I = 'image',
        k = n('TIdA'),
        R = n('a6qo'),
        w = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        x = C.a.f93bb3ee,
        T = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              b()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  a = t.useMinimumData,
                  i = e.props,
                  s = i.accessibilityLabel,
                  l = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  c = o()(i, w)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    k.a,
                    r()({}, c, { accessibilityLabel: s, onVariantSelection: n, previewMode: a, testID: I }),
                  ),
                  l ? _.a.createElement(R.a, { align: 'left', altLabel: s }) : null,
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
                  return _.a.createElement(E.a, {
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
        })(_.a.Component)
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
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        h = o.a.fcd4d489,
        f = o.a.gbed8594,
        v = o.a.g9074da4,
        g = o.a.ad63377d,
        b = o.a.h09b49f7,
        y = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        E = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        C = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            u = e.onReportClick,
            C = e.requestorScreenName,
            k = e.showBlock,
            R = e.showCancel,
            w = e.showDelete,
            x = r.a.useCallback(
              function () {
                u && u(), t()
              },
              [t, u],
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
            w
              ? r.a.createElement(l.a, {
                  Icon: d.a,
                  actionSubText: b,
                  actionText: a ? v : g,
                  onClick: A,
                  textColor: 'red500',
                })
              : null,
            k
              ? r.a.createElement(l.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: C }), onClick: T })
              : null,
            r.a.createElement(l.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: a ? y : _({ screenName: C }),
              onClick: x,
            }),
            R ? r.a.createElement(c.a, { onPress: t, style: I.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var I = u.a.create(function (e) {
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
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        b = n.n(g),
        y = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(y),
        E = n('1YZw'),
        S = n('zh9S'),
        C = n('P1r1'),
        I = n('AspN'),
        k = n('rxPX'),
        R = Object(k.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.k }
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
        w = n('wpu3'),
        x = n('cOB2'),
        T = n('MWbm'),
        A = n('0FVZ'),
        O = n('Oe3h'),
        M = n('rHpw')
      var L = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            a = e.children,
            r = e.onLayout,
            i = e.sideNavPresent,
            s = e.style,
            l = _.a.useContext(x.a)
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
                    _.a.createElement(T.a, { style: !1 === l.keyboardVisible && F.offsetBottom }),
                  )
                }),
              )
        },
        F = M.a.create(function () {
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
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleClick', function () {
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
                      style: [H.root, n && H.isWide, !n && H.isNarrow],
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
        H = M.a.create(function (e) {
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
        U = n('cHvH'),
        V = n('mw9i'),
        W = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleOptionChoose', function (t) {
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
                  return _.a.createElement(U.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
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
        z = W,
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
            return (e = t.call.apply(t, [this].concat(r))), b()(p()(e), 'state', { currentStepIndex: -1 }), e
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
        })(_.a.Component),
        oe = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            return l()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSending,
                    n = e.isUploading,
                    a = e.progress
                  return t && !n
                    ? _.a.createElement(ie, null)
                    : _.a.createElement(ae.a, { progress: t ? Math.max(a, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        se = n('Dtul'),
        le = n('Es6L'),
        ce = 'dmComposerAttachments',
        ue = 'dmComposerTextInput',
        de = 'dmComposerSendButton',
        pe = n('GZwR'),
        me = n('aITJ'),
        he = n('6OUF'),
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
            r()(
              r()({}, e),
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
      var Ce = Se,
        Ie = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ee.a)(
            'svg',
            r()(
              r()({}, e),
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
      Ie.metadata = { width: 24, height: 24 }
      var ke = Ie,
        Re = n('iySH'),
        we = J.a.ee230734,
        xe = J.a.ca0ce0e4,
        Te = J.a.cdcebd22,
        Ae = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(w.b)({ maxNumberOfPhotos: 1 }),
        Fe = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e, a) {
            var i, s, c
            l()(this, n),
              (c = t.call(this, e, a)),
              b()(p()(c), '_handleLayout', function (e) {
                var t = c.props.onHeightChange,
                  n = c.state.mediaButtonsCollapsible,
                  a = e.nativeEvent.layout
                a &&
                  (Object(le.a)() || (t && t(a.height)),
                  a.width <= M.a.theme.breakpoints.small && !n
                    ? c.setState({ mediaButtonsCollapsible: !0 })
                    : a.width > M.a.theme.breakpoints.small && n && c.setState({ mediaButtonsCollapsible: !1 }))
              }),
              b()(p()(c), '_renderQuickReplyPicker', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state.isQuickReplyOpen
                return e && t
                  ? _.a.createElement(z, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              b()(p()(c), '_renderComposeBox', function () {
                return _.a.createElement(T.a, { style: De.composeBoxContainer }, c._renderMainContent())
              }),
              b()(p()(c), '_renderMainContent', function () {
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
                        source: pe.d.ComposeMessage,
                      },
                      c._renderFieldTextInput,
                    )
                  : c._renderFieldTextInput()
              }),
              b()(p()(c), '_renderFieldTextInput', function (e) {
                var t = c.props,
                  n = t.disabled,
                  a = t.placeholderText,
                  r = t.richTextInputContext,
                  i = me.b.isKaiOS() ? Te : a || xe,
                  s = c.state,
                  l = s.editorState,
                  u = s.mediaButtonsCollapsible,
                  d = s.value,
                  p = !!r,
                  m = r ? { editorState: l, element: r.element } : void 0,
                  h = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: l, element: r.element },
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
                      style: De.composeInput,
                      testID: ue,
                      useCacheForDOMMeasurements: !c._isSendDisabled() && !u,
                      value: d,
                    },
                    h,
                  ),
                )
              }),
              b()(
                p()(c),
                '_getHandleRichTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handleRichTextChange(t)
                  }
                }),
              ),
              b()(
                p()(c),
                '_getHandlePlainTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handlePlainTextChange(t)
                  }
                }),
              ),
              b()(p()(c), '_handleTypeaheadStateChange', function (e) {
                c.setState({ isTypeaheadActive: e })
              }),
              b()(p()(c), '_renderAttachments', function () {
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
                  u = s.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  m = null == p ? void 0 : p.altText,
                  h = null == p ? void 0 : p.defaultAltText,
                  f = Object(ye.b)(o)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  d
                    ? _.a.createElement(
                        T.a,
                        { style: De.attachmentContainer, testID: ce },
                        _.a.createElement(
                          fe.a,
                          { ratio: u / l, style: De.aspectContainer },
                          _.a.createElement(
                            T.a,
                            { style: De.mediaPreviewContainer },
                            _.a.createElement(ee.a, {
                              accessibilityLabel: m || h,
                              mediaItem: d,
                              onClick: c._canEditImage ? c._handleClickMediaDetail : void 0,
                              onEdit: c._canEditImage || c._canEditVideo ? c._handleClickMediaDetail : void 0,
                              onRemove: c._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: De.mediaPreview,
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
                            { style: De.gifAttribution },
                            _.a.createElement(G.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : f && !r
                    ? _.a.createElement(ye.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: De.cardPreviewContainer,
                        urls: f,
                      })
                    : null,
                )
              }),
              b()(p()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && me.b.isDesktopOS()
                  ? _.a.createElement(q.a, {
                      disabled: c.props.disabled,
                      onEmojiSelect: c._handleEmojiSelect,
                      onPress: c._handleTextInputFocus,
                      size: 'small',
                      textInputRef: c._textInput || void 0,
                    })
                  : null
              }),
              b()(p()(c), '_renderPrimaryActionButton', function (e) {
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
                        style: De.actionButton,
                        testID: de,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : a,
                    )
                  : c._renderQRToggleButton()
              }),
              b()(p()(c), '_renderSecondaryActionButton', function () {
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
                      style: De.actionButton,
                      type: 'primaryOutlined',
                    },
                    c.props.secondaryActionLabel,
                  )
                return i || !t
                  ? o
                  : _.a.createElement(
                      ge.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              b()(p()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return _.a.createElement(ve.a, {
                  accessibilityLabel: Ae,
                  icon: e ? _.a.createElement(Ce, null) : _.a.createElement(ke, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: De.actionButton,
                  type: 'brandText',
                })
              }),
              b()(p()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = Me(e),
                  n = c._renderComposeBox(),
                  a = c._renderPrimaryActionButton(t),
                  r = c._renderSecondaryActionButton()
                return _.a.createElement(
                  T.a,
                  { style: [De.composer, t && De.composerWithAttachment] },
                  t ? null : c._renderMediaButtons(),
                  n,
                  r,
                  a,
                )
              }),
              b()(p()(c), '_renderMediaButtons', function () {
                var e = c.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  a = c.state,
                  r = a.mediaButtonsCollapsed,
                  i = a.mediaButtonsCollapsible && r
                return _.a.createElement(
                  T.a,
                  { style: De.uploadButtons },
                  i
                    ? _.a.createElement(ve.a, {
                        accessibilityLabel: we,
                        icon: _.a.createElement(Re.a, null),
                        onMouseDown: c._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !i ? c._renderMediaPicker() : null,
                  t && !i ? c._renderGifButton() : null,
                )
              }),
              b()(p()(c), '_handleShowMediaControlsMouseDown', function () {
                var e = c.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                c.setState({ mediaButtonsCollapsed: !1 }),
                  t(r()(r()({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              b()(p()(c), '_handleReturn', function (e) {
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
              b()(p()(c), '_handleClickMediaDetail', function () {
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
              b()(p()(c), '_handleAddMediaFiles', function (e) {
                var t = c.props,
                  n = t.addMedia,
                  a = t.addToast,
                  r = t.dataSaverMode,
                  i = t.onAddMedia,
                  o = t.preUploadMedia,
                  s = t.processMultipleMedia,
                  l = t.removeMedia,
                  u = t.removeMediaUpload
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
                    : (a({ text: Oe }), u(t))
                })
              }),
              b()(p()(c), '_handleEmojiSelect', function (e) {
                var t = c.state.editorState,
                  n = c.props.richTextInputContext
                if (n && t) {
                  var a = n.insertTextAtCursor(t, e.text)
                  c._handleRichTextChange(a)
                }
              }),
              b()(p()(c), '_handleRemoveMedia', function (e) {
                return function () {
                  c.props.removeMedia && c.props.removeMedia(e)
                }
              }),
              b()(p()(c), '_handlePrimaryAction', function (e) {
                if (!c._isSendDisabled()) {
                  var t = c.props.onPrimaryAction
                  c._textInput &&
                    c._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    c._closeQuickReplyPicker()
                }
              }),
              b()(p()(c), '_handleSecondaryAction', function (e) {
                var t = c.props.onSecondaryAction
                c._textInput &&
                  c._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              b()(p()(c), '_handleRichTextChange', function (e) {
                var t = c.props,
                  n = t.onTyping,
                  a = t.richTextInputContext,
                  r = c.state.value,
                  i = e.getCurrentContent().getPlainText(),
                  o = a ? a.convertEmojiToEntities(e) : null
                c.setState({ editorState: o, value: i }), r !== i && (null == n || n())
              }),
              b()(p()(c), '_handlePlainTextChange', function (e) {
                var t = c.props.onTyping,
                  n = c.state.value,
                  a = e.target.value
                c.setState({ value: a }), n !== a && (null == t || t())
              }),
              b()(p()(c), '_handleOnBlur', function () {
                var e = c.props.onBlur,
                  t = c.state.mediaButtonsCollapsible
                e && e(), t && c.setState({ mediaButtonsCollapsed: !1 })
              }),
              b()(p()(c), '_handleTextInputFocus', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state,
                  n = t.isQuickReplyOpen,
                  a = t.mediaButtonsCollapsible
                e && n && c._closeQuickReplyPicker(), a && c.setState({ mediaButtonsCollapsed: !0 })
              }),
              b()(p()(c), '_handleQROptionSelection', function (e, t) {
                var n = c.props,
                  a = n.disabled,
                  r = n.onPrimaryAction
                a || (r({ quickReply: { id: e, selected_id: t.id } }, t.label), c._closeQuickReplyPicker())
              }),
              b()(p()(c), '_handleQuickReplyPickerToggle', function () {
                c.setState({ isQuickReplyOpen: !c.state.isQuickReplyOpen })
              }),
              b()(p()(c), '_validateMedia', function (e) {
                return !Me(c.props.attachment) && Le(e)
              }),
              b()(p()(c), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    c._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              b()(p()(c), '_isSendDisabled', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.canSendEmptyMessage,
                  a = e.disabled,
                  r = e.isUploading,
                  i = Me(t),
                  o = c._hasMessageText() || n,
                  s = !(!t || !t.media) && (t.media.needsProcessing || r)
                return a || (!o && !i) || s || r
              }),
              b()(p()(c), '_hasMessageText', function () {
                return !!(c.state.value || '').trim()
              }),
              b()(p()(c), '_closeQuickReplyPicker', function () {
                c.setState({ isQuickReplyOpen: !1 })
              }),
              b()(p()(c), 'handleAddMediaFiles', function (e) {
                return c._handleAddMediaFiles(e)
              }),
              b()(p()(c), '_setTextInputRef', function (e) {
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
                    (i = null == d || null === (s = d.initEditorState) || void 0 === s ? void 0 : s.call(d, u)) &&
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
                    a = e.isUploading,
                    r = e.mediaUploadProgress,
                    i = e.placeholderText,
                    o = e.style,
                    s = i || xe,
                    l = Object(le.a)(),
                    c = l && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    L,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: l,
                      style: [De.root, c && De.dtabOffset, o],
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
      b()(Fe, 'contextType', be.a),
        b()(Fe, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
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
      t.a = R.forwardRef(Fe)
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
        u,
        d,
        p,
        m,
        h,
        f,
        v,
        g,
        b,
        y,
        _,
        E,
        S,
        C,
        I,
        k,
        R,
        w,
        x,
        T,
        A,
        O,
        M,
        L,
        F,
        D,
        P,
        N,
        B,
        H = {
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
                  (i = { kind: 'Literal', name: 's', value: 18 }),
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
                                      (u = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'request_id',
                                        storageKey: null,
                                      }),
                                      (d = {
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
                                                    selections: (b = [
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
                                                    selections: b,
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
                                                          (y = {
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
                                          (k = {
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
                                          (R = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (w = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (x = {
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
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: b,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: b,
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
                                              (L = {
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
                                                selections: b,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: b,
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
                      (F = {
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
                args: (D = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, r, i]),
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
                                      u,
                                      d,
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
                                                        selections: [P, y],
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
                                          k,
                                          R,
                                          w,
                                          x,
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
                                              L,
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
                      F,
                    ],
                    type: 'DMMessageSlice',
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: D,
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
      ;(H.hash = 'f240afda618da0d5e047ef48ee76dd56'), (t.default = H)
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
        u = l.a.abc7b032,
        d = l.a.i263b293,
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
                : u
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
                : d
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
