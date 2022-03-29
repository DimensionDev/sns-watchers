;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50, 234],
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
        h = n('Fr3L'),
        f = n('sl05'),
        g = n('s8G+'),
        v = n('DQzJ'),
        y = void 0 !== a ? a : (a = n('GjeS')),
        _ = { context: 'DM_CONVERSATION_METADATA' }
      function b(e) {
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
                  { style: f.a.root },
                  o.a.createElement(d.a, {
                    conversation: l,
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
          [l, n, a],
        )(e)
      }
      function k(e) {
        return o.a.createElement(h.a, { errorConfig: _ }, o.a.createElement(b, e))
      }
      var S,
        E = n('qBaR'),
        C = n('RqPI'),
        w = n('z2Pn'),
        T = n('rHpw'),
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
        o.a.useEffect(function () {
          r.d(I), r.a(I), Object(R.b)(I)
        }, []),
          o.a.useEffect(
            function () {
              Object(w.h)(i.pathname)
            },
            [i.pathname],
          )
        var u = 'string' == typeof i.query.text ? i.query.text : void 0,
          d = l.a.get('window').width >= T.a.theme.breakpoints.small,
          h = Object(F.d)(C.r) || '',
          f = (function (e) {
            if (!e) return null
            var t = Object(m.b)([e.dm_conversation_by_rest_id], [p.a]).entities.conversations
            for (var n in t) return t[n]
            return null
          })(c)
        return f && f.conversation_id
          ? o.a.createElement(
              E.a,
              { conversation: f, conversationId: f.conversation_id, newConversationParticipants: [], perspective: h },
              o.a.createElement(k, {
                conversation: f,
                history: a,
                isWide: d,
                perspective: h,
                prefillText: u,
                richTextInputContext: t,
                typeaheadWrapper: n,
              }),
            )
          : null
      }
      function D(e) {
        return o.a.createElement(h.a, { errorConfig: M }, o.a.createElement(L, e))
      }
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
                    if (l(e) || l(t)) return !1
                    if (e.prototype !== t.prototype) return !1
                    if (i(e)) return !!i(t) && ((e = a.call(e)), (t = a.call(t)), o(e, t, n))
                    if (s(e)) {
                      if (!s(t)) return !1
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
      function l(e) {
        return null == e
      }
      function s(e) {
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
        return Oo
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
        h = n.n(m),
        f = (n('2G9S'), n('ejT/')),
        g = n('ERkP'),
        v = n.n(g),
        y = n('yiKp'),
        _ = n.n(y),
        b = n('7n04'),
        k = n('Myq3'),
        S = n('VPAj'),
        E = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        C = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        w = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            a = function (e) {
              return Object(k.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return _()(
            _()({}, b.a),
            {},
            {
              initialScrollHeadroom: Object(S.a)(0),
              scrollHeadroom: Object(S.a)(0),
              offsetCorrection: function (e, r) {
                var i = a(e),
                  o = a(r),
                  l = o && (!i || i.id !== o.id),
                  s = o && t(o.data.data),
                  c = i && E(e, i.id)
                return (l && (s || c)) ||
                  (c &&
                    (function (e, t) {
                      var a = e.getForItem(n),
                        r = t.getForItem(n)
                      return !a || (r && r.getHeight() > a.getHeight())
                    })(e, r))
                  ? Math.max(0, C(r))
                  : b.a.offsetCorrection(e, r)
              },
            },
          )
        },
        T = (n('lTEL'), n('7x/C'), n('kYxP'), n('M+/F'), n('KOtZ'), n('gbD7')),
        R = n('X/yg'),
        x = (n('Blm6'), n('b9JY')),
        F = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(x.b)(e) && Object(x.b)(t)) {
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
        A = n('jat/'),
        I = n('MMRb'),
        O = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        M = n('XnpN'),
        L = n('LhSm'),
        D = n('I4+6'),
        P = n('rHpw'),
        K = n('PbQQ'),
        B = n('cm6r'),
        U = n('jV+4'),
        N = n('pBrB'),
        j = n('wCd/'),
        H = function (e, t) {
          var n = Object(M.a)(e, t).map(function (e) {
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
        W = P.a.create(function (e) {
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
            r = v.a.useContext(O.a).loggedInUserId
          if (!t) return null
          var i = H(t, r || ''),
            o = i.userDescription,
            l = i.userEntities,
            s = i.userFollowerCount,
            c = i.userFriendsCount,
            u = i.userIdStr,
            d = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            h = i.userScreenName,
            f = i.userWithheldDescription,
            g = i.userWithheldEntities,
            y = !!(m && h && ((s && c) || p)),
            _ = D.a.generate({
              color: P.a.theme.colors.text,
              backgroundColor: P.a.theme.colors.transparent,
              customFocusBackgroundColor: P.a.theme.colors.gray0,
              customHoverBackgroundColor: P.a.theme.colors.gray0,
              customPressedBackgroundColor: P.a.theme.colors.activeFaintGray,
            })
          return v.a.createElement(K.a.Consumer, null, function (e) {
            return v.a.createElement(
              B.a,
              {
                interactiveStyles: _,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [W.root, a && y && W.borderBottom],
              },
              v.a.createElement(U.a, {
                isVerified: d,
                name: m,
                screenName: h,
                style: W.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && l && u
                ? v.a.createElement(N.a, {
                    description: o,
                    entities: l,
                    style: [W.profileInfoItemMargin, W.description],
                    userId: u,
                    withheldDescription: f,
                    withheldEntities: g,
                  })
                : null,
              s && c
                ? v.a.createElement(j.a, {
                    followersCount: s,
                    friendsCount: c,
                    screenName: h || '',
                    style: W.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? v.a.createElement(L.a, { joinDate: p }) : null,
            )
          })
        },
        z = n('V/6K'),
        q = n('cFyg'),
        G = (n('hBvt'), n('vrRf'), n('LW0h'), n('g54k')),
        Y = n('aA19'),
        Q = n('aWyx'),
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
          return v.a.createElement(Z.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: a }, t)
        },
        ae = (function (e) {
          u()(n, e)
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
                  l = Object(te.a)(a, r, i, o)
                switch (r) {
                  case Q.b.CONVERSATION_AVATAR_UPDATE:
                    var s = n.avatar_image_https === a.conversation_avatar_image_https
                    return v.a.createElement(
                      v.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && s
                        ? v.a.createElement(
                            J.a,
                            { style: re.conversationAvatarContainer },
                            v.a.createElement(Y.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      v.a.createElement(ne, null, l),
                    )
                  case Q.b.JOIN_CONVERSATION:
                    var c = e._getAddedYouMessageWithProfileInfo(l),
                      u = e._getParticipantsFromEntry(),
                      d = v.a.createElement(
                        Z.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return v.a.createElement(v.a.Fragment, null, c, p)
                  default:
                    return v.a.createElement(ne, null, l)
                }
              }),
              h()(s()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  a = n.entry,
                  r = n.users,
                  i = a.sender_id ? r[a.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return v.a.createElement(
                  B.a,
                  { interactiveStyles: null, link: o, style: re.userAddedYouContainer },
                  i
                    ? v.a.createElement($.a, {
                        accessibilityLabel: i.screen_name,
                        screenName: i.screen_name,
                        size: 'medium',
                        uri: i.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  v.a.createElement(ne, { link: o, style: re.userAddedYouText }, t),
                )
              }),
              h()(s()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var a = e.props.conversation,
                  r = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return v.a.createElement(
                  B.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(a.conversation_id, '/participants') },
                    style: re.joinConversationDetails,
                  },
                  n,
                  v.a.createElement(ee.a, {
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
                  return v.a.createElement(J.a, { style: re.root }, this._renderContents())
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
        })(v.a.Component),
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
        le = n.n(oe),
        se = n('oQhu')
      var ce = Object(se.a)(function (e) {
          var t = P.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + P.a.theme.spacesPx.space12,
          }
        }),
        ue = n('shC7'),
        de = n('38/B'),
        pe = function (e) {
          return me(e, de.a.reducedMotionEnabled)
        },
        me = Object(se.a)(function (e, t) {
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
              ((n = ce(P.a.theme.scale)),
              (a = n.DMUserAvatarSizePx),
              (r = n.DMUserAvatarSpacerPx),
              (i = ve[P.a.theme.scale]),
              (o = fe / i),
              (l = ge / a),
              (c = ge - (s = ge / 2)),
              (u = ge - s - r),
              {
                cssTransition: de.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(_e, ', opacity ').concat(_e) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (ue.a.getConstants().isRTL ? 1 : -1) * c }] },
                    received: { transform: [{ translateX: (ue.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (ue.a.getConstants().isRTL ? 1 : -1) * ye[P.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (ue.a.getConstants().isRTL ? -1 : 1) * (ye[P.a.theme.scale] + u) - s }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: fe } },
                  base: { height: i, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: s / o,
                      transformOrigin: ue.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: s / o,
                      transformOrigin: ue.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: ue.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: ue.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
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
      var he,
        fe = 60,
        ge = fe,
        ve = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        ye = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        _e = '0.2s 0s ease-in-out',
        be = n('+Kfv'),
        ke = n('hqKg'),
        Se = n('oEGd'),
        Ee = n('zh9S'),
        Ce = n('Yatk'),
        we = n('G6rE'),
        Te = n('P1r1'),
        Re = { scribeAction: Ee.c },
        xe = Object(ke.createSelector)(
          function (e, t) {
            return we.e.select(e, t.senderId)
          },
          Te.k,
          Te.q,
          function (e, t, n) {
            return { user: Object(Ce.a)(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Fe = Object(Se.f)(xe, Re),
        Ae = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Ie = n('rxPX'),
        Oe = n('0KEI'),
        Me = n('RqPI'),
        Le = Object(Ie.a)()
          .propsFromState(function () {
            return { reporterCountry: Me.z, reporterLanguage: Me.p }
          })
          .propsFromActions(function () {
            return {
              addToast: Ae.b,
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: I.deleteEntry,
            }
          })
          .withAnalytics(),
        De = n('k49u'),
        Pe = n('LVU8'),
        Ke = n('3XMw'),
        Be = n.n(Ke),
        Ue = Be.a.f58dff33,
        Ne = Be.a.ad5a8e8e,
        je =
          ((he = {}),
          h()(he, De.a.MissingParameter, { toast: Object(Pe.a)(Ue) }),
          h()(he, De.a.DirectMessageDestroyPermissionsError, { toast: { text: Ne } }),
          h()(he, 'showToast', !0),
          he),
        He = (n('jQ3i'), n('x4t0'), n('xCUF')),
        We = n('uKEd'),
        Ve = [],
        ze = Object(ke.createSelector)(
          function (e) {
            return Object(We.l)(e).entries
          },
          function (e, t) {
            return Object(We.p)(e, t.entry.id) || Ve
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
          createReaction: We.d,
          createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: He.d,
          removeReaction: We.k,
        },
        Ge = Object(Se.f)(ze, qe),
        Ye = n('RhWx'),
        Qe = n.n(Ye),
        Xe = n('33Kz'),
        Je = n('wTX1'),
        Ze = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            a = e.emojiSize,
            r = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            l = e.onPress,
            s = e.style,
            c = v.a.useContext(O.a).featureSwitches,
            u = Object(Xe.b)(r, c),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = D.a.generate({ backgroundColor: P.a.theme.colors.gray50, color: P.a.theme.colors.gray700 })
          return v.a.createElement(
            B.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: l,
              style: [$e.container].concat(Qe()(s || [])),
            },
            v.a.createElement(Z.b, { size: a, style: $e.unsetLineHeight }, u),
            n
              ? v.a.createElement(Je.a, { color: 'gray700', containerStyle: $e.count, count: n, size: 'subtext3' }, n)
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
          u()(n, e)
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
                  c = Object(R.c)(i)
                r.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: s,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: l,
                    conversation_type: o ? et.i.GROUP : et.i.ONE_TO_ONE,
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
                    n = Object(Xe.a)(this.context.featureSwitches).map(function (n) {
                      var a = t.includes(n)
                      return v.a.createElement(Ze, {
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
                  return v.a.createElement(J.a, { style: ot.reactions }, n)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(rt, 'contextType', O.a)
      var it = Object(tt.a)(Ge(rt)),
        ot = P.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        lt = n('OiMc'),
        st = (function (e) {
          u()(n, e)
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
                return v.a.createElement(it, {
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
                    lt.a,
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
      h()(st, 'contextType', z.a)
      var ct = n('TnY3'),
        ut = n('mjJ+'),
        dt = n('Q0VY'),
        pt = n('eb3s'),
        mt = n('/yvb'),
        ht = n('ZToW'),
        ft = n('CaKu'),
        gt = n('i4Oy'),
        vt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        yt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            a = le()(n, 2),
            r = a[0],
            i = a[1]
          return !((0 === r || 1 === r) && e.length === i)
        },
        _t = function (e) {
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
        bt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        kt = function (e) {
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
        Et = n('hiGS'),
        Ct = n('zIWA'),
        wt = n('Lsrn'),
        Tt = n('k/Ka'),
        Rt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Tt.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [wt.a.root, e.style],
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
      Rt.metadata = { width: 24, height: 24 }
      var xt = Rt,
        Ft = n('DlVf'),
        At = n('ACHU'),
        It = n('UgB4'),
        Ot = n('fz3c'),
        Mt = Be.a.ba60339a,
        Lt = Be.a.j4bfee22,
        Dt = Be.a.d96cf7cd,
        Pt = Be.a.faddd3a2,
        Kt = Be.a.eb497e08,
        Bt = Be.a.b170974a,
        Ut = Be.a.i202bd22,
        Nt = Be.a.f2e5491a,
        jt = Be.a.f88553c8,
        Ht = Be.a.ifea3114,
        Wt = Be.a.cac14829,
        Vt = Be.a.h63a5c3b,
        zt = (function (e) {
          u()(n, e)
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
                  l = t.reporterCountry,
                  s = t.reporterLanguage,
                  c = Ot.a.DMMessage,
                  u = n.contextualScribeNamespace,
                  d = [{ text: Mt, Icon: Et.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!o)
                  if (Object(Ot.g)(r, c, l, s)) {
                    var p,
                      m = Object(Ot.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: c,
                        reportedConversationId: a.conversation_id,
                        reportedMessageId: a.id,
                        reportedUser: null === (p = a.message_data) || void 0 === p ? void 0 : p.sender_id,
                        scribeNamespace: n.contextualScribeNamespace,
                      })
                    d.push({
                      text: Ut,
                      Icon: Ct.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(m) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    d.push({
                      text: Ut,
                      Icon: Ct.a,
                      link: {
                        pathname: '/i/report/'.concat(c, '/').concat(a.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: a.conversation_id,
                          scribeNamespace: u,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    })
                return (
                  ft.a.isAvailable() && d.push({ text: Nt, Icon: xt, onClick: i._handleCopyMessageText }),
                  v.a.createElement(ut.a, {
                    isFixed: i.context.isDrawer,
                    items: d,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              h()(s()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (ft.a.setString(n), t({ text: jt })), e && e()
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
                    state: { tweetAttachment: _()(_()({}, o), {}, { id_str: o.status }) },
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
                  c = Object(R.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: l ? et.i.GROUP : et.i.ONE_TO_ONE,
                    conversation_participant_count: s,
                    message_type: c,
                    inbox_type: Object(R.i)(o),
                  },
                }),
                  a({ conversationId: r.conversation_id, id: r.id }).catch(n(je))
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
                t.scribe({ component: 'reaction_button', element: Object(R.c)(n), action: 'click' }),
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
                  dt.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = bt(i.props.entry)),
              (i._isNarrow = gt.a.get('screen').width < P.a.theme.breakpoints.xSmall),
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
                    J.a,
                    {
                      pointerEvents: s ? 'auto' : 'none',
                      style: [
                        Gt.messageActions,
                        r ? Gt.messageActionsLeft : Gt.messageActionsRight,
                        s ? Gt.visible : Gt.invisible,
                        l && Gt.vdlMessageActions,
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
                    ? v.a.createElement(pt.a, {
                        confirmButtonLabel: Dt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Lt,
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
                  return v.a.createElement(mt.a, {
                    accessibilityLabel: Ht,
                    hoverLabel: { label: Ht },
                    icon: Yt,
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
                    l = v.a.createElement(Ft.a, { style: i ? Gt.vdlActionIcon : Gt.actionIcon })
                  return v.a.createElement(
                    st,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: a,
                      perspective: r,
                    },
                    v.a.createElement(mt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: Bt,
                      hoverLabel: { label: Wt },
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
                    t = v.a.createElement(At.a, { style: e ? Gt.vdlActionIcon : Gt.actionIcon })
                  return v.a.createElement(mt.a, {
                    accessibilityLabel: Kt,
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
                    l = ((e = this.props.entry), !_t(e) && bt(e) && !ht.a.isEnabled)
                  return !i && (l || (n && !ht.a.isEnabled) || a || r || o)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(zt, 'contextType', z.a)
      var qt = Object(ct.a)(Le(zt)),
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
        Yt = v.a.createElement(It.a, { style: Gt.vdlActionIcon }),
        Qt = n('97Jx'),
        Xt = n.n(Qt),
        Jt = (n('6U7i'), n('CDB5')),
        Zt = Object(Ie.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: I.removeEntry,
              sendMessage: Jt.m,
            }
          })
          .withAnalytics(),
        $t = '87.5%',
        en = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        tn = [],
        nn = function (e, t) {
          return Object(We.p)(e, t.entryId) || tn
        },
        an = function (e) {
          return Object(We.l)(e).entries
        },
        rn = {
          createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        on = Object(Se.e)(function () {
          return Object(ke.createSelector)(an, nn, Me.r, en.d, function (e, t, n, a) {
            var r,
              i = Object(Xe.a)(a, { includeInactive: !0 }),
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
        }, rn),
        ln = (n('vfdX'), n('Ee2X'), []),
        sn = function (e, t) {
          return t.entryId
        },
        cn = function (e) {
          return Object(We.l)(e).entries
        },
        un = function (e, t) {
          return Object(We.p)(e, sn(0, t)) || ln
        },
        dn = function (e, t) {
          return we.e.selectMany(
            e,
            (function (e, t) {
              return Object(We.q)(e, sn(0, t))
            })(e, t),
          )
        },
        pn = {
          removeReaction: We.k,
          fetchUpdatesIfNeeded: He.d,
          createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        mn = Object(Se.e)(function () {
          return Object(ke.createSelector)(cn, un, Me.r, dn, en.d, function (e, t, n, a, r) {
            var i = Object(Xe.a)(r, { includeInactive: !0 }),
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
            return l > -1 && o.push.apply(o, Qe()(o.splice(0, l))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, pn),
        hn = n('TIdA'),
        fn = n('htQn'),
        gn = Be.a.gf5e9ea6,
        vn = Be.a.a2d48778,
        yn = hn.a.createLayoutCache()
      var _n = P.a.create(function (e) {
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
        bn = function (e) {
          var t = v.a.useContext(O.a).featureSwitches,
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
            p = v.a.createElement($.a, { imageLayoutCache: yn, screenName: u, size: 'xxLarge', uri: o }),
            m = v.a.createElement(Ze, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
            h = v.a.createElement(U.a, {
              badgeContext: 'content',
              isProtected: l,
              isVerified: s,
              name: c,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return v.a.createElement(
            fn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [_n.root, i && _n.bottomBorder] },
            v.a.createElement(J.a, { style: _n.reactionColumn }, m),
            v.a.createElement(J.a, { style: _n.column }, p),
            v.a.createElement(J.a, { style: _n.bodyColumn }, v.a.createElement(J.a, { style: _n.body }, h)),
            a
              ? v.a.createElement(
                  J.a,
                  { style: _n.column },
                  v.a.createElement(
                    mt.a,
                    {
                      accessibilityLabel: vn({ emoji: Object(Xe.b)(r.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    gn,
                  ),
                )
              : null,
          )
        },
        kn = n('xKuM'),
        Sn = n('efqG'),
        En = Be.a.b772cd65,
        Cn = Be.a.c0098d49,
        wn = Be.a.j85999eb,
        Tn = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_renderContent', function (t, n) {
                return v.a.createElement(
                  J.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(s()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? v.a.createElement(kn.a, { title: Cn })
                  : v.a.createElement(Z.b, { visuallyHidden: !0 }, Cn)
              }),
              h()(s()(e), '_renderUsers', function (t, n) {
                return v.a.createElement(
                  J.a,
                  { accessibilityLabel: wn, style: [Rn.container, 'sheet' === n ? Rn.sheet : Rn.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(s()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  v.a.createElement(
                    mt.a,
                    { key: 'button_done', onPress: e, style: Rn.cancelButton, type: 'primaryOutlined' },
                    En,
                  )
                )
              }),
              h()(s()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, a) {
                  return v.a.createElement(bn, {
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
                    u = { reaction_key: t, conversation_id: r, dm_id: o, perspective: s }
                  n(), c(u).then(e._handleScribeRemoveReaction(t)).then(l).catch(i())
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
                    Sn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(Tn, 'contextType', z.a)
      var Rn = P.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        xn = Object(ct.a)(Object(tt.a)(mn(Tn))),
        Fn = Be.a.h95f9e76,
        An = (function (e) {
          u()(n, e)
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
                  var a = le()(e, 2),
                    r = a[0],
                    s = a[1]
                  return v.a.createElement(Ze, {
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
                  var l = D.a.generate({ backgroundColor: P.a.theme.colors.gray50, color: P.a.theme.colors.gray700 }),
                    s = Fn({ reactionCount: i })
                  return v.a.createElement(
                    J.a,
                    {
                      style: [
                        In.container,
                        a ? In.marginShort : In.marginLong,
                        r ? In.alignRight : In.alignLeft,
                        o ? In.visible : In.invisible,
                      ],
                    },
                    v.a.createElement(
                      xn,
                      { conversationId: t, entryId: n },
                      v.a.createElement(
                        B.a,
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
                  this.setState(_()({}, n))
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        In = P.a.create(function (e) {
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
        On = Object(tt.a)(on(An)),
        Mn = n('Xrkv'),
        Ln = Be.a.icd0bf34,
        Dn = Be.a.e8bd8fec,
        Pn = Be.a.b2d32fad,
        Kn = Be.a.a763d33e,
        Bn = (function (e) {
          u()(n, e)
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
                    J.a,
                    { style: Un.root },
                    v.a.createElement(
                      Z.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: Un.seenLabel },
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
                  return n ? (t ? Pn : Ln) : a.length ? Kn({ count: a.length }) : Dn
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
                        Be.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        v.a.createElement(Z.b, null, n),
                        v.a.createElement(
                          Z.b,
                          { color: 'link', onPress: e._handlePress },
                          Be.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Mn.a)(t, n)
                  return v.a.createElement(
                    Z.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: Un.namesList },
                    n ? v.a.createElement(r, { namesList: i, othersCount: a }) : v.a.createElement(Z.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        Un = P.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Nn = Bn,
        jn = n('t0aI'),
        Hn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user,
            r = Wn({ entryId: t, participants: n, user: a })
          return { namesToDisplay: r, isSeenByEveryone: r.length === n.length - 1 }
        },
        Wn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user
          return n.reduce(function (e, n) {
            var r = n.join_conversation_event_id,
              i = n.last_read_event_id,
              o = n.user.name,
              l = n.user_id !== a.id_str,
              s = i && 1 !== Object(jn.a)(t, i),
              c = !r || 1 !== Object(jn.a)(r, t)
            return l && s && c && e.push(o), e
          }, [])
        },
        Vn = n('IMYl'),
        zn = n('21zW'),
        qn = n('gmpV'),
        Gn = Be.a.fad48ee9,
        Yn = Be.a.ba60339a,
        Qn = Be.a.d338f53e,
        Xn = Be.a.ae7d7a24,
        Jn = Be.a.d725a288,
        Zn = Be.a.bbe74f3f,
        $n = Be.a.h0e4cdf4,
        ea = Be.a.bfbc051c,
        ta = (function (e) {
          u()(n, e)
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
                    u = a || r || s || c,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    v.a.createElement(
                      J.a,
                      { style: [na.root, d && na.vdlRootMargin, t && na.sentMessage] },
                      a,
                      r,
                      s,
                      c
                        ? v.a.createElement(
                            B.a,
                            { interactiveStyles: null, onPress: n, style: t && na.sentContainer },
                            v.a.createElement(J.a, { style: t && na.groupedItems }, i, l),
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
                      J.a,
                      null,
                      v.a.createElement(Z.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Xn),
                      v.a.createElement(
                        J.a,
                        { style: na.groupedItems },
                        v.a.createElement(
                          Z.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Yn,
                        ),
                        v.a.createElement(zn.a, null),
                        v.a.createElement(
                          Z.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Qn,
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
                        J.a,
                        { style: o && na.footerPadderWithAvatar },
                        v.a.createElement(On, { conversationId: t, entryId: n, isEndOfDM: l, isSent: i }),
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
                    ? v.a.createElement(Nn, Xt()({ isGroupDM: i }, Hn({ entryId: t, participants: l, user: s })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && v.a.createElement(Z.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Gn)
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
                    c = Hn({ entryId: t, participants: l, user: s }).isSeenByEveryone
                  return !o || n || a || (i && !r)
                    ? null
                    : v.a.createElement(
                        Z.b,
                        { color: c ? 'primary' : 'gray700', style: na.checkmarkContainer },
                        v.a.createElement(Vn.a, { style: na.checkmark }),
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
                  u = Object(qn.c)(d) ? Jn(d) : Object(qn.d)(d) ? Zn({ time: Jn(d) }) : Object(qn.e)(d) ? $n(d) : ea(d)
                  var p = r && !l,
                    m = l ? 'right' : 'left'
                  return v.a.createElement(
                    J.a,
                    { style: [c && na.footerPadderWithAvatar, l && na.timestamp] },
                    v.a.createElement(
                      Z.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: l || !ht.a.isEnabled },
                      p &&
                        v.a.createElement(
                          Be.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          v.a.createElement(Z.b, null, s),
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
      h()(ta, 'contextType', O.a)
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
            l = e.tcoUrl,
            s = [
              ia.root,
              n && ia.isLast,
              n && a && ia.sentLast,
              n && !a && ia.receivedLast,
              t && a && ia.insideTopRoundedSent,
              t && !a && ia.insideTopRoundedReceived,
              o && a && ia.outsideTopRoundedSent,
              o && !a && ia.outsideTopRoundedReceived,
            ]
          return v.a.createElement(
            J.a,
            { style: s },
            v.a.createElement(ra.a, { align: 'center', color: 'primary', label: r, link: l, onClick: i }),
          )
        },
        la = n('fs1G'),
        sa = (function (e) {
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
                      return v.a.createElement(oa, {
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
                  return v.a.createElement(J.a, null, o)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(sa, 'defaultProps', { onCtaClick: la.a, onImpression: la.a })
      var ca = sa,
        ua = (n('1IsZ'), n('vjRr')),
        da = n('EGrD'),
        pa = function (e, t) {
          return t.cardUrl
        },
        ma = Object(Ie.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: da.c, card: ua.a.createSingleHydratedSelector(pa) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: da.a,
              loadAdFreeArticleDomainsFromPersistence: da.b,
              popOutConversation: I.popOutConversation,
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
          return v.a.createElement(J.a, { style: [r ? ha.visible : ha.invisible, ha.root] }, n, t, i)
        },
        ga = n('cTG8'),
        va = function (e) {
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
            h = e.tweetId,
            f = e.withCta,
            g = e.withMediaLinks,
            y = e.withMessageBubble,
            _ = v.a.useContext(O.a).featureSwitches,
            b = _.isTrue('dm_vdl_enabled') && _.isTrue('dm_vdl_chat_p0_enabled'),
            k = [
              m,
              y && ya.messageTextContainer,
              y && c && ya.sent,
              y && !c && ya.received,
              r && ya.failedDraft,
              s && !o && !c && ya.rapidFireReceived,
              s && !o && c && ya.rapidFireSent,
              u && c && ya.hasAssociatedAttachmentSent,
              u && !c && ya.hasAssociatedAttachmentReceived,
              y && b && c && ya.vdlSent,
              y && a && c && ya.activeSent,
              y && b && a && c && ya.vdlActiveSent,
              y && a && !c && !ht.a.isEnabled && ya.activeReceived,
              f && ya.withCta,
            ],
            S = [ya.tweetText, y && ya.textAlignLeft, !y && c && ya.textAlignRight],
            E = P.a.theme.colors,
            C = E.gray0,
            w = E.magenta500,
            T = E.primary,
            R = E.text,
            x = E.white,
            F = D.a.generate({ color: c ? x : R, backgroundColor: r ? w : c ? T : C }),
            A = (p.text && p.text.length) || 0
          return v.a.createElement(
            B.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: y ? F : null, style: k },
            v.a.createElement(ga.a, {
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
              withMediaLinks: g,
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
      va.defaultProps = { withMediaLinks: !1 }
      var _a = va,
        ba = function (e) {
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
          return v.a.createElement(_a, {
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
        ka = n('LSr9'),
        Sa = n('aX4+'),
        Ea = n('/Ikv'),
        Ca = Ea.a.CardNames,
        wa = (function (e) {
          u()(n, e)
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
                    u = l.fetchAdFreeToken,
                    d = new ka.a(u, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Ea.a.getBindingValue(r, 'card_url'),
                      linkDomain: Ea.a.getBindingValue(r, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    p = le()(d, 2),
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    h = !!Object.values(Ca).includes(null == t ? void 0 : t.name),
                    f = St(n, p, m),
                    g = f.isAttachmentSquared ? 'both' : l ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    _ = t
                      ? v.a.createElement(
                          J.a,
                          { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                          v.a.createElement(Sa.a, {
                            card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                            cardContext: { tweetUserId: s.sender_id },
                            dmSentOrReceived: l ? 'sent' : 'received',
                            withBorderShadow: y,
                            withSquareBottomBorderRadius: g,
                          }),
                        )
                      : null,
                    b = n
                      ? v.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper,
                          },
                          v.a.createElement(_a, {
                            excludeCardUrl: null == t ? void 0 : t.url,
                            hasAssociatedAttachment: !0,
                            isActive: a,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: l,
                            messageData: s,
                            rootStyle: f.isTextSquared ? (l ? Ta.textSentSquared : Ta.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? v.a.createElement(fa, { attachmentContent: _, isVisible: f.compositeRendered, textContent: b })
                    : v.a.createElement(ba, {
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
      h()(wa, 'defaultProps', { hasUserText: !1 }), h()(wa, 'contextType', O.a)
      var Ta = P.a.create(function (e) {
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
        Ra = ma(wa),
        xa = Be.a.f720438f,
        Fa = (function (e) {
          u()(n, e)
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
                return t ? (a = 'both') : n && (a = 'right'), Aa[a]
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
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!l || !l.attachment || !l.attachment.fleet) return null
                  var m = St(t, d, p),
                    h = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    g = m.isTextSquared,
                    y = [
                      Ia.tombstoneWrapper,
                      o ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    _ = v.a.createElement(
                      J.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      v.a.createElement(Z.b, { color: 'gray700' }, xa),
                    ),
                    b = t
                      ? v.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Ia.sentMessageWrapper : Ia.receivedMessageWrapper,
                              !c && Ia.fleetReactionSpacing,
                            ],
                          },
                          v.a.createElement(_a, {
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
                  return v.a.createElement(fa, { attachmentContent: _, isVisible: h, textContent: b })
                },
              },
            ]),
            n
          )
        })(v.a.Component),
        Aa = P.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ia = P.a.create(function (e) {
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
        Oa = Fa,
        Ma = (n('849X'), n('TJCb'), n('prG5')),
        La = n('RCZO'),
        Da = n('A91F'),
        Pa = Be.a.b327c129,
        Ka = function (e) {
          e.stopPropagation()
        },
        Ba = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            a = t.ext_alt_text || Pa,
            r = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            l = i.width,
            s = Object(La.b)(t).rgb,
            c = v.a.createElement(Ma.a, {
              accessibilityLabel: a,
              aspectMode: Da.a.withinRange(9 / 16, 10),
              backgroundColor: s,
              image: { url: r, width: l, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? v.a.createElement(B.a, { interactiveStyles: null, link: n, onPress: Ka }, c) : c
        },
        Ua = n('Modb'),
        Na = n('lklz'),
        ja = n('XrEN'),
        Ha = n('ZvMt'),
        Wa = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && ja.a.extractVideoProps(Na.b.forDm(n), t)
          return a
            ? v.a.createElement(
                Ua.a,
                Xt()({}, a, { aspectRatio: Ha.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        Va = Object(Ie.a)().withAnalytics(),
        za = (function (e) {
          u()(n, e)
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
                    l = i.width < P.a.theme.breakpoints.micro
                  return o
                    ? v.a.createElement(
                        J.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Ga.root,
                            l ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && qa[r],
                          ],
                        },
                        v.a.createElement(J.a, { style: Ga.description }, v.a.createElement(Z.b, null, a)),
                        v.a.createElement(
                          J.a,
                          { style: [Ga.button, l ? Ga.breakButtonWrapper : void 0] },
                          v.a.createElement(
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
        })(v.a.PureComponent)
      h()(za, 'defaultProps', { isSensitive: !1 })
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
        Ya = Object(tt.a)(Va(za)),
        Qa = n('CoGJ'),
        Xa = v.a.createElement(Qa.a, null),
        Ja = Be.a.d9de7b57,
        Za = Be.a.f2879f4d,
        $a = Be.a.b518221e,
        er = Be.a.eeaa9f90,
        tr = Be.a.g2b43663,
        nr = Be.a.f277e949,
        ar = (function (e) {
          u()(n, e)
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
                  u = a.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  m = d.textContentWidth,
                  h = (u || {}).attachment,
                  f = r.is_draft,
                  g = St(i, p, m),
                  y = [
                    rr.mediaAttachment,
                    s && rr.isSent,
                    !s && rr.received,
                    s && g.isAttachmentSquared && rr.equalComponentDimensionsSent,
                    !s && g.isAttachmentSquared && rr.equalComponentDimensionsReceived,
                    l && !o && s && rr.rapidFireSent,
                    l && !o && !s && rr.rapidFireReceived,
                  ],
                  _ = null
                if (
                  (!f && r.conversation_id && (_ = '/messages/'.concat(r.conversation_id, '/media/').concat(r.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = v.a.createElement(Ba, { media: t, mediaUrl: _ }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = v.a.createElement(Wa, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(R.l)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = v.a.createElement(Wa, { media: t, messageId: r.id })
                  }
                var b = g.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                  k = t && n && (s ? n : e._getMediaContentWithGuard(t, c, n, b))
                return {
                  attachmentContent: v.a.createElement(J.a, { onLayout: e._handleAttachmentLayout, style: y }, k),
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    h = t.is_draft,
                    f = St(n, p, m),
                    g = this._renderAttachment(),
                    y = g.attachmentContent,
                    _ = g.media,
                    b = n
                      ? v.a.createElement(
                          J.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: l ? rr.sentMessageWrapper : rr.receivedMessageWrapper,
                          },
                          v.a.createElement(_a, {
                            hasAssociatedAttachment: !0,
                            isActive: !!a,
                            isFailedDraft: r,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: l,
                            messageData: h ? s : this._parseMessageData(s, _),
                            rootStyle: f.isTextSquared ? (l ? rr.sentSquared : rr.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return v.a.createElement(fa, { attachmentContent: y, isVisible: f.compositeRendered, textContent: b })
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
                      var l = ('animated_gif' === e.type && tr) || ('video' === e.type && er) || $a
                      return v.a.createElement(
                        Ya,
                        {
                          contentType: e.type,
                          ctaText: l,
                          description: Za,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: a,
                        },
                        n,
                      )
                    }
                  } else if (!i && e.possibly_sensitive)
                    return v.a.createElement(
                      Ya,
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
                    : v.a.createElement(
                        Ya,
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
                    ? _()(_()({}, e), {}, { entities: _()(_()({}, e.entities), {}, { urls: a, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(ar, 'contextType', O.a), h()(ar, 'defaultProps', { hasUserText: !1 })
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
        or = Object(Ie.a)().propsFromActions(function () {
          return { markSpamStatus: I.markSpamStatus }
        }),
        lr = Be.a.fd07947f,
        sr = Be.a.c7a92dc9,
        cr = Be.a.f277e949,
        ur = Be.a.fb3ccb55,
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
                      Ya,
                      { contentType: 'dm', ctaText: cr, description: ur },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return v.a.createElement(
                      J.a,
                      { style: pr.buttons },
                      v.a.createElement(
                        mt.a,
                        { onPress: this._handlePress(!1), style: pr.leftButton, type: 'brandOutlined' },
                        sr,
                      ),
                      v.a.createElement(mt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, lr),
                    )
                  },
                },
              ]),
              n
            )
          })(v.a.PureComponent),
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
        gr = function (e) {
          var t = e.sticker
          return v.a.createElement(mr.a, { accessibilityLabel: t.display_name, source: hr(t), style: fr.stickerItem })
        },
        vr = n('XOJV'),
        yr = function (e, t) {
          var n,
            a = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (a && a.tweet) return a.tweet.status
        },
        _r = Object(Ie.a)()
          .propsFromState(function () {
            return { tweet: vr.a.createHydratedTweetSelector(yr) }
          })
          .propsFromActions(function () {
            return { popOutConversation: I.popOutConversation }
          }),
        br = n('b5s6'),
        kr = v.a.createElement(Z.b, { link: '/settings/safety' }),
        Sr = function (e) {
          return v.a.createElement(
            Be.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            v.a.cloneElement(kr, null, Be.a.adcf07b5),
          )
        },
        Er = Be.a.e4df0ad7,
        Cr = Be.a.f277e949,
        wr = Be.a.b5b91d58,
        Tr = Be.a.bb594d7b,
        Rr = v.a.createElement(Sr, null)
      var xr = P.a.create(function (e) {
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
        Fr = _r(function (e) {
          var t = v.a.useContext(O.a).featureSwitches,
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
            h = e.isSent,
            f = e.isTrusted,
            g = e.messageData,
            y = e.popOutConversation,
            _ = e.tweet,
            b = e.withCta,
            k = e.withMessageBubble,
            S = v.a.useState(void 0),
            E = le()(S, 2),
            C = E[0],
            w = E[1],
            T = v.a.useState(void 0),
            R = le()(T, 2),
            x = R[0],
            F = R[1],
            A = v.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            I = v.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  C !== t && w(t)
                }
              },
              [C],
            ),
            M = v.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  x !== t && F(t)
                }
              },
              [x],
            )
          if (!g || !g.attachment || !g.attachment.tweet) return null
          var L = g.attachment.tweet,
            D = h ? 'sent' : 'received',
            P = St(i, C, x),
            K = v.a.createElement(br.a, {
              onPress: A,
              style: [
                xr[D],
                i && xr.attachment,
                P.isAttachmentSquared ? (h ? xr.sentAttachmentSquared : xr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: L.status,
            }),
            B = P.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            U = (function () {
              if (!_) return null
              if (h) return K
              if (_.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (s || void 0 === s)
                  return v.a.createElement(
                    Ya,
                    { contentType: 'photo', ctaText: Tr, description: wr, withSquareBottomBorderRadius: B },
                    K,
                  )
              } else if (!a && _.possibly_sensitive)
                return v.a.createElement(
                  Ya,
                  { contentType: 'photo', ctaText: Cr, description: Rr, withSquareBottomBorderRadius: B },
                  K,
                )
              return f
                ? K
                : v.a.createElement(
                    Ya,
                    { contentType: 'tweet', ctaText: Cr, description: Er, withSquareBottomBorderRadius: B },
                    K,
                  )
            })(),
            N = v.a.createElement(J.a, { onLayout: I, style: xr.attachment }, U),
            j = i
              ? v.a.createElement(
                  J.a,
                  { onLayout: M, style: h ? xr.sentMessageWrapper : xr.receivedMessageWrapper },
                  v.a.createElement(_a, {
                    hasAssociatedAttachment: !0,
                    isActive: l,
                    isFailedDraft: c,
                    isFirstRapidFire: d,
                    isRapidFire: m,
                    isSent: h,
                    messageData: g,
                    rootStyle: P.isTextSquared ? (h ? xr.sentSquared : xr.receivedSquared) : void 0,
                    tweetId: L.status,
                    withCta: b,
                    withMediaLinks: !0,
                    withMessageBubble: k,
                  }),
                )
              : null
          return v.a.createElement(fa, { attachmentContent: N, isVisible: P.compositeRendered, textContent: j })
        }),
        Ar = n('htvZ'),
        Ir = n('MH+I'),
        Or = n('5Ixf'),
        Mr = n('AtEG')
      function Lr(e) {
        var t,
          n,
          a = v.a.useContext(Ar.a),
          r = e.isLowQuality,
          i = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var l = le()(a.activeVoiceMessage, 2),
          s = l[0],
          c = l[1],
          u = le()(a.playerApi, 1)[0],
          d = le()(a.playerState, 1)[0],
          p = a.scribeAction,
          m = le()(s, 1)[0],
          h = e.messageId === m
        if (!p) return null
        var f = Pr(d),
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
            ((y.playerApi = u),
            (y.playerState = d),
            null != f && f.durationMs && (y.durationMs = null == f ? void 0 : f.durationMs)),
          v.a.createElement(Dr, y)
        )
      }
      function Dr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          o = Pr(r),
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
        var u = P.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'text' },
          p = [
            Ur.voiceMessage,
            Nr({ isSent: n, squared: t }),
            n ? Ur.voiceMessageSent : Ur.voiceMessageReceived,
            pe(P.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? Or.a : Mr.a
        return v.a.createElement(
          J.a,
          { style: [Ur.container, pe(P.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          v.a.createElement(
            J.a,
            { style: p },
            v.a.createElement(J.a, { style: Ur.startSpacer }),
            v.a.createElement(mt.a, {
              accessibilityLabel: i ? Br : Kr,
              icon: v.a.createElement(m, { style: u ? Ur.iconColorDark : Ur.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            v.a.createElement(J.a, { style: Ur.durationSpacer }),
            v.a.createElement(
              J.a,
              { style: n ? Ur.durationOpacity : void 0 },
              v.a.createElement(
                Ir.a,
                Xt()({ countdown: !0, timeMs: c }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Ur.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            v.a.createElement(J.a, { style: Ur.endSpacer }),
          ),
        )
      }
      var Pr = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Kr = Be.a.c94b7d89,
        Br = Be.a.eb6f9582,
        Ur = P.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: ue.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function Nr(e) {
        var t = e.isSent,
          n = e.squared
        return [jr.base, t ? jr.sent : jr.received, n ? (t ? jr.sentSquared : jr.receivedSquared) : void 0]
      }
      var jr = P.a.create(function (e) {
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
        Hr = (function (e) {
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
                    c = bt(n),
                    u = !!o && !!o.ctas,
                    d = _t(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (bt(e) && !kt(e)) return !1
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
                    h = kt(n)
                  e = l.sticker ? v.a.createElement(gr, { sticker: l.sticker }) : this._renderDMMessage(d, u, m)
                  var f = s ? v.a.createElement(dr, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    g = c && !h && !Object(R.l)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    y = [
                      a ? Wr.isSent : Wr.isReceived,
                      u && Wr.withCta,
                      g ? Wr.mediaRoot : Wr.flexShrink,
                      this.props.style,
                    ]
                  return v.a.createElement(
                    J.a,
                    { style: y },
                    f,
                    o && o.ctas
                      ? v.a.createElement(ca, {
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
                    h = i.message_data,
                    f = h && _()(_()({}, h), {}, { entities: (h && h.entities) || void 0, error: m }),
                    g = null == f ? void 0 : f.attachment,
                    y = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: s,
                      isRapidFire: u,
                      isSent: d,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && g) {
                    if (g.tweet)
                      return v.a.createElement(
                        Fr,
                        Xt()(
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
                      return g.video && Object(R.l)(g, this.context.featureSwitches)
                        ? v.a.createElement(Lr, {
                            isLowQuality: c,
                            isSent: !!d,
                            isTrusted: p,
                            media: g.video,
                            messageId: i.id,
                          })
                        : v.a.createElement(
                            ir,
                            Xt()(
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
                        Ra,
                        Xt()({ cardUrl: g.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, y),
                      )
                    if (g.fleet) return v.a.createElement(Oa, Xt()({ entry: i, hasUserText: e, messageData: f }, y))
                  }
                  return v.a.createElement(ba, Xt()({}, y, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(Hr, 'contextType', O.a)
      var Wr = P.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Vr = Hr,
        zr = P.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        qr = function (e) {
          var t = e.showAvatar,
            n = e.size,
            a = void 0 === n ? 'xLarge' : n,
            r = e.user
          return t
            ? v.a.createElement($.a, {
                accessibilityLabel: r.name,
                link: { pathname: '/'.concat(r.screen_name) },
                size: a,
                uri: r.profile_image_url_https,
              })
            : v.a.createElement(J.a, { style: [zr.avatar, $.a.getSizeStyle(a)] })
        },
        Gr = n('m3Bd'),
        Yr = n.n(Gr),
        Qr = n('B3eJ'),
        Xr = ['color', 'isActive', 'size']
      function Jr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Yr()(e, Xr),
          i = v.a.useContext(Ar.a),
          o = v.a.useState(0.5),
          l = le()(o, 2),
          s = l[0],
          c = l[1],
          u = le()(i.playerState, 1)[0]
        v.a.useEffect(
          function () {
            n && u && u.isPlaying && c(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = a + 2 * Zr,
          m = [$r.container, r.style, { width: a, height: a }]
        return v.a.createElement(
          J.a,
          { style: m },
          v.a.createElement(
            J.a,
            { style: [$r.container, $r.transitionOpacity, d ? $r.show : $r.hide] },
            de.a.reducedMotionEnabled
              ? null
              : v.a.createElement(Qr.a, { audioLevel: s, color: t, paused: !d, size: a }),
          ),
          v.a.createElement(J.a, {
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
          u()(n, e)
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
                Object(ei.a)(function () {
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
                if (!ht.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(R.c)(n), action: 'click' }
                  e._scribeAction(a)
                }
              }),
              h()(s()(e), '_handleCtaImpression', function () {
                e._scribeAction(_()(_()({}, ni), {}, { action: 'show' }))
              }),
              h()(s()(e), '_handleCtaClick', function () {
                e._scribeAction(_()(_()({}, ni), {}, { action: 'click' }))
              }),
              h()(s()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(R.l)(
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
                    l = this._getRapidFireProps(),
                    s = !l.isRapidFire || l.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    u = [
                      li.root.base,
                      c && li.root.vdlPadding,
                      s && li.root.contentSpacing,
                      s && c && li.root.vdlContentSpacing,
                      r && li.root.highlightableEntry,
                      r && this.state.shouldFadeHighlight && li.root.remove,
                    ],
                    d = this._isDMVoiceMessage(),
                    p = c ? a && !i : !i || d
                  if (!o) return null
                  var m = !ht.a.isEnabled || i
                  return v.a.createElement(
                    be.a,
                    { behavioralEventContext: ai },
                    v.a.createElement(
                      J.a,
                      { style: u },
                      v.a.createElement(
                        B.a,
                        {
                          accessibilityExpanded: !(!m || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: m ? this._handleClick : void 0,
                          style: i ? li.root.sent : li.root.received,
                          testID: ti,
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
                    h = o.isReadOnly,
                    f = o.isSent,
                    g = o.isTrusted,
                    y = o.isVoiceMessageActive,
                    _ = o.isWide,
                    b = o.participants,
                    k = o.perspective,
                    S = o.scribeVoiceMessage,
                    E = o.setShouldFreezeUpdates,
                    C = a.isFirstRapidFire,
                    w = a.isRapidFire,
                    T = [
                      f ? li.messageContainer.sent : li.messageContainer.received,
                      _ ? li.messageContainer.wide : li.messageContainer.narrow,
                      f && _ && li.messageContainer.sentWide,
                      !f && _ && li.messageContainer.receivedWide,
                    ],
                    R = g && !h,
                    x = this._isDMVoiceMessage(),
                    F = (null == b ? void 0 : b.length) || 0
                  return v.a.createElement(
                    J.a,
                    { style: T },
                    s.error
                      ? null
                      : v.a.createElement(qt, {
                          containerIsActive: u,
                          containerIsFocused: t,
                          containerIsHovered: n,
                          entry: s,
                          featureSwitches: this.context.featureSwitches,
                          inboxType: c,
                          isDraft: !!s.is_draft,
                          isGroupDM: p,
                          isSent: f,
                          onReportMessage:
                            x && S
                              ? function () {
                                  return S.report({ isLowQuality: m, isTrusted: g })
                                }
                              : void 0,
                          participantsCount: F,
                          perspective: k,
                          setShouldFreezeUpdates: E,
                          shouldShowReactionButton: R,
                          style: x && pe(P.a.theme.scale).actionsContainer({ isSent: f, isVoiceMessageActive: y }),
                          withVDLRefresh: i,
                        }),
                    v.a.createElement(Vr, {
                      displaySensitiveMedia: l,
                      entry: s,
                      isActive: u,
                      isDmNsfwMediaFilterEnabled: d,
                      isFirstRapidFire: C,
                      isLowQuality: m,
                      isRapidFire: w,
                      isSent: f,
                      isTrusted: g,
                      key: s.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: x && pe(P.a.theme.scale).messageContainer({ isSent: f, isVoiceMessageActive: y }),
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
                    ? v.a.createElement(aa, {
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
                  var c = ce(P.a.theme.scale),
                    u = c.DMUserAvatarSizePx,
                    d = { showAvatar: !!s || !a || !!n, size: c.DMUserAvatarSizeType, user: l },
                    p = [
                      li.userAvatar.base,
                      i ? li.userAvatar.sent : li.userAvatar.received,
                      s && pe(P.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return v.a.createElement(
                    J.a,
                    { style: li.userAvatar.container },
                    i ? null : v.a.createElement(J.a, { style: li.userAvatar.spacer }),
                    s
                      ? v.a.createElement(Jr, {
                          color: i ? P.a.theme.colors.primary : P.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    v.a.createElement(J.a, { style: p }, v.a.createElement(qr, d)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(_()({}, e))
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
      h()(ii, 'contextType', O.a), h()(ii, 'defaultProps', ri)
      var oi = Object(tt.a)(
          Fe(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = v.a.useContext(Ar.a),
                  r = le()(a.activeVoiceMessage, 1)[0],
                  i = a.scribeAction,
                  o = le()(r, 1)[0] === n.id,
                  l = _()(_()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return v.a.createElement(e, l)
              }
              return (t.defaultProps = ri), t
            })(ii),
          ),
        ),
        li = {
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
        si = n('H4nC'),
        ci = function (e) {
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
          if (Object(x.b)(n) || Object(x.e)(n)) {
            var h = t.conversation_id,
              f = t.low_quality,
              g = t.participants,
              y = t.read_only,
              _ = t.trusted,
              b = t.type,
              k = n.message_data,
              S = (k = void 0 === k ? {} : k).sender_id,
              E = void 0 === h || _
            return v.a.createElement(oi, {
              entry: n,
              inboxType: a,
              isActive: r,
              isFirstRapidFire: i,
              isGroupDM: b === I.CONVERSATION_TYPE.GROUP,
              isHighlightedMessageSearchEntry: o,
              isLastRapidFire: l,
              isLowQuality: !!f,
              isRapidFire: s,
              isReadOnly: y,
              isSent: S === u,
              isTrusted: !!E,
              isWide: c,
              participants: g,
              perspective: u,
              scribeNamespace: d,
              senderId: S,
              setActiveEntry: p,
              setShouldFreezeUpdates: m,
            })
          }
          return Object(x.a)(n)
            ? v.a.createElement(ie, { conversation: t, entry: n, entryType: n.type, perspective: u })
            : Object(x.d)(n)
            ? v.a.createElement(si.a, { entry: n, isCompact: !1 })
            : null
        },
        ui = n('0JOx'),
        di = Object(ke.createSelector)(
          function (e, t) {
            var n = Object(We.o)(e, t.conversationId),
              a = n && Object(A.a)(n)
            return a && Object(I.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        pi = Object(Se.c)(di),
        mi = (n('Ef13'), n('uDfI')),
        hi = Object(ke.createSelector)(
          function (e, t) {
            return we.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        fi = Object(mi.b)(hi),
        gi = n('Enqy'),
        vi = n('+/1j'),
        yi = 'overflow',
        _i = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        bi = { stiffness: 1e3, damping: 70 },
        ki = 140,
        Si = { scale: Object(gi.spring)(1, bi), translateY: Object(gi.spring)(0, bi) },
        Ei = function (e, t) {
          return { key: e.id_str, data: e, style: Si }
        },
        Ci = Object(S.a)({ translateY: ki, scale: 0 }),
        wi = Object(S.a)({ scale: Object(gi.spring)(1, bi), translateY: Object(gi.spring)(ki, bi) }),
        Ti = [{ key: 'bubble', style: { scale: Object(gi.spring)(1, bi), translateY: Object(gi.spring)(0, bi) } }],
        Ri = Object(S.a)({ translateY: ki, scale: 0 }),
        xi = Object(S.a)({ scale: Object(gi.spring)(1, bi), translateY: Object(gi.spring)(ki, bi) }),
        Fi = function (e) {
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
                  return !Object(X.a)(this.props, e) || !Object(X.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(_i).slice(0, 5).map(Ei)
                  return (
                    t.length > 5 && n.push({ key: yi, style: Si }),
                    v.a.createElement(
                      J.a,
                      { style: [Ii.root, e && Ii.hidden] },
                      v.a.createElement(
                        J.a,
                        { style: Ii.avatarRow },
                        v.a.createElement(
                          gi.TransitionMotion,
                          { styles: n, willEnter: Ci, willLeave: wi },
                          function (e) {
                            return v.a.createElement(
                              v.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var a = Fi(e.style)
                                return e.key === yi
                                  ? v.a.createElement(
                                      J.a,
                                      {
                                        key: e.key,
                                        style: [Ii.avatar, Ii.avatarSpacer, Ii.overflowAvatar, { transform: a }],
                                      },
                                      v.a.createElement(vi.a, { style: Ii.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : v.a.createElement(
                                      J.a,
                                      { key: e.key, style: [Ii.avatar, { transform: a }] },
                                      v.a.createElement($.a, {
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
                        gi.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Ti : [], willEnter: Ri, willLeave: xi },
                        function (e) {
                          return v.a.createElement(
                            v.a.Fragment,
                            null,
                            e.map(function (e) {
                              return v.a.createElement(
                                J.a,
                                { key: e.key, style: [Ii.messageBubble, { transform: Fi(e.style) }] },
                                v.a.createElement(J.a, { style: Ii.dot }),
                                v.a.createElement(J.a, { style: [Ii.dot, Ii.dot1] }),
                                v.a.createElement(J.a, { style: [Ii.dot, Ii.dot2] }),
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
        Ii = P.a.create(function (e) {
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
        Oi = fi(Ai),
        Mi = n('tn7R'),
        Li = (function (e) {
          u()(n, e)
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
                        Qe()(
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
                  return !t && v.a.createElement(Oi, { userIds: n })
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
        })(v.a.PureComponent)
      h()(Li, 'contextType', O.a)
      var Di = pi(Li),
        Pi = n('3AAD'),
        Ki = n('iBK2'),
        Bi = n('Fz18'),
        Ui = n('RJrc'),
        Ni = n('yw4N'),
        ji = (n('XygZ'), n('dPJJ')),
        Hi = n('zrc3'),
        Wi = n('pQ3Z'),
        Vi = n.n(Wi),
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
                    l = e.getRect()
                  l.contains(o.getTop()) ||
                  l.contains(o.getBottom()) ||
                  l.contains(i.getTop()) ||
                  l.contains(i.getBottom())
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
        Yi = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_updatesSuspended', !1),
              h()(s()(i), '_handleHeightsUpdate', function (e, t) {
                var n = i.props.anchoring
                i._scrollBy(n.offsetCorrection(e, t))
              }),
              h()(s()(i), '_receiveWrapperNode', function (e) {
                return i._offsetHandler.setWrapperNode(e)
              }),
              h()(s()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              h()(s()(i), '_handleEnterFullscreen', function () {
                ;(i._updatesSuspended = !0), i._ref && i._ref.freezeUpdates()
              }),
              h()(s()(i), '_handleExitFullscreen', function () {
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
                    (this._unlistenFullscreenEnter = ji.a(this._handleEnterFullscreen)),
                    (this._unlistenFullscreenExit = ji.b(this._handleExitFullscreen))
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
                  return v.a.createElement(
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
        })(v.a.Component)
      h()(Yi, 'defaultProps', { anchoring: Pi.a })
      var Qi = n('AOWc'),
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
              h()(s()(i), '_perfReported', !1),
              h()(s()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              h()(s()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.id,
                  a = t.onHeightChanged,
                  r = le()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  r &&
                  r.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = r.contentRect.height), a(n, r.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, ao() - i._perfStart), (i._perfReported = !0))
              }),
              h()(s()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  a = t.setAPI
                e ? ((i._element = e), a(n, s()(i)), i._observeElement(e)) : (a(n, void 0), (i._element = void 0))
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
                  return v.a.createElement('div', { ref: this._setRef }, n(t))
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(ro, 'contextType', O.a)
      var io = n('+d3d'),
        oo = n('iChn'),
        lo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), '_cells', new Map()),
              h()(s()(e), '_heightUpdates', {}),
              h()(s()(e), '_visibilityMeasurements', new Map()),
              h()(s()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              h()(s()(e), '_reportVisibilityMeasurements', function () {
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
              h()(s()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              h()(
                s()(e),
                '_flushHeightUpdates',
                Object(io.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              h()(s()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              h()(s()(e), '_handleDivRefUpdate', function (t) {
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
                  return v.a.createElement(
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
                    return v.a.createElement(ro, {
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
        })(v.a.PureComponent),
        so = n('oi7R'),
        co = n('aWzz'),
        uo = n('JD1h'),
        po = n('OeMK'),
        mo = n('0zXz'),
        ho = (n('+KXO'), n('IAdD'), n('jHwr')),
        fo = n('qdp+'),
        go = (function () {
          function e(t) {
            var n = t.list,
              a = t.rectangles,
              i = t.sliceEnd,
              o = t.sliceStart,
              l = t.viewportRectangle
            r()(this, e),
              (this._viewportRectangle = l),
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
                    a = Object(Hi.a)(this._list, function (e) {
                      var a = e.id
                      return n[a].doesIntersectWith(t)
                    })
                  if (a < 0) return []
                  var r = Object(Hi.a)(
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
        vo = n('64vW'),
        yo = function (e, t, n) {
          if (t < 0 || t >= e.length) return -1
          if (n(e[t])) return t
          for (var a = 1; ; a++) {
            var r = t - a,
              i = t + a,
              o = r < 0,
              l = i >= e.length
            if (o && l) break
            if (!l && n(e[i])) return i
            if (!o && n(e[r])) return r
          }
          return -1
        },
        _o = function (e) {
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
          var l = Object(Hi.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Qi.a)(l >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(po.a)(t[o - 1].id) && l > 0 && Object(po.a)(n[l - 1].id) && (l -= 1),
            { sliceStart: l, sliceEnd: Math.min(n.length, l + a - r) }
          )
        },
        bo = { heightsReady: !0 },
        ko = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_updatesSuspended', !1),
              h()(s()(i), 'freezeUpdates', function () {
                i._updatesSuspended = !0
              }),
              h()(s()(i), 'resumeUpdates', function () {
                ;(i._updatesSuspended = !1), i._scheduleUpdate()
              }),
              h()(s()(i), '_handleHeightsChange', function (e) {
                i._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              h()(s()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              h()(s()(i), '_setNecessarySlice', function (e, t) {
                var n = i.state,
                  a = n.sliceEnd,
                  r = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: a }, { start: e, end: t }),
                  o = r.end,
                  l = r.start
                i._setSlice(l, o)
              }),
              h()(s()(i), '_setSlice', function (e, t) {
                if (!i._updatesSuspended) {
                  var n = i.state,
                    a = n.sliceEnd
                  ;(e === n.sliceStart && t === a) || i.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var o = i.props,
              l = o.initialItemIndex,
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
                var t = e || s()(i),
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
            d && p.hasOwnProperty(d) && (i._heights = p[d]), (i.state = i._getDefaultSlice(c, l))
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
                    var o = _o({ list: t, nextList: i, sliceStart: r, sliceEnd: a }) || this._getDefaultSlice(i)
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
                  return new go({
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
                  return v.a.createElement(
                    vo.a.Provider,
                    { value: bo },
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
                    a && (this._heights = Object.assign(_()({}, this._heights), n)),
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
                    l = this._getRectangles(),
                    s = Object(Hi.a)(n, function (e) {
                      var t = e.id
                      return l[t].getBottom() > i
                    }),
                    c = s >= 0 ? s : n.length - 1,
                    u = Object(Hi.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return l[t].getTop() >= o
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
                    r = _()(
                      _()({}, this),
                      {},
                      {
                        props: _()(_()({}, this.props), {}, { list: e }),
                        state: _()({}, this.state),
                        context: _()({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(r),
                    o = e[t].id,
                    l = i[o].getBottom(),
                    s = Object(Hi.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return i[t].getTop() - l >= a
                      },
                      t,
                    ),
                    c = s >= 0 ? s : e.length
                  return { sliceStart: t, sliceEnd: Math.min(e.length, c) }
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(ko, 'defaultProps', {
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
                l = new qi.a(e, o)
              return (a[i] = l), l.getBottom()
            }, 0),
            a
          )
        },
        Eo = ko,
        Co = function (e) {
          return (
            Object(Zi.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xi.a)(e)
          )
        },
        wo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(s()(i), '_onDemandRenderer', function (e) {
                var t = i.props,
                  n = t.assumedItemHeight,
                  a = t.minimumOffscreenToViewportRatio,
                  r = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return v.a.createElement(
                  Eo,
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
              h()(s()(i), '_viewRenderer', function (e) {
                return v.a.createElement(lo, e)
              }),
              h()(s()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              h()(
                s()(i),
                '_getMemoizedItemRenderer',
                Object(se.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              h()(s()(i), '_handleAnchorRendererRefUpdate', function (e) {
                i._anchorRenderer = e
              }),
              h()(s()(i), '_handlePositionRestored', function () {
                ;(0, i.props.onPositionRestored)(), (i._edgeProximity = i._createEdgeProximity())
                var e = i._anchorRenderer && i._anchorRenderer.getPositioning()
                e && i._edgeProximity.handlePositioningUpdate(e)
              }),
              h()(s()(i), '_handlePositioningUpdate', function (e) {
                i._edgeProximity && i._edgeProximity.handlePositioningUpdate(e)
                var t = i.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              h()(s()(i), '_getList', function () {
                var e = i.props,
                  t = e.footer,
                  n = e.header,
                  a = e.identityFunction,
                  r = e.items
                return i._getMemoizedList(a, r, n, t)
              }),
              h()(
                s()(i),
                '_getMemoizedList',
                Object(se.a)(function (e, t, n, a) {
                  var r = {},
                    i = t.reduce(function (t, n) {
                      var a = e(n) || n.id || Co(n)
                      return (
                        Object(Qi.a)('number' == typeof a || 'string' == typeof a, 'Item id must not be falsy'),
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
                    l = a
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
                  return i.length ? [].concat(Qe()(o ? [o] : []), Qe()(i), Qe()(l ? [l] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || a.viewport || so.a.root()),
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
                    ? v.a.createElement(Yi, {
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
        })(v.a.Component)
      h()(wo, 'displayName', 'VirtualScroller'),
        h()(wo, 'contextTypes', { viewport: co.object, getCustomLocation: co.func }),
        h()(wo, 'defaultProps', {
          anchoring: Yi.defaultProps.anchoring,
          assumedItemHeight: Eo.defaultProps.assumedItemHeight,
          identityFunction: Co,
          minimumOffscreenToViewportRatio: Eo.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: mo.a,
          onPositionRestored: la.a,
          onAtEnd: la.a,
          onAtStart: la.a,
          onNearEnd: la.a,
          onNearStart: la.a,
          onScrollEnd: la.a,
          preferredOffscreenToViewportRatio: Eo.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var To = Object(Ji.a)(wo),
        Ro = n('mw9i'),
        xo = Be.a.i859a9d3,
        Fo = Be.a.i8ecae5b,
        Ao = function (e) {
          return e.entry.id
        },
        Io = function (e) {
          return e.entry.type === Q.b.MESSAGE
        },
        Oo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              h()(
                s()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled') ||
                  (i.context.featureSwitches.isTrue('dm_inbox_search_message_results_enabled') &&
                    i.context.featureSwitches.isTrue('direct_messages_incremental_holdback_2022h1')),
              ),
              h()(s()(i), '_handleScrollEnd', function () {
                i.setState({ didRenderMessageSearchEntry: !0 })
              }),
              h()(s()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case Q.b.TYPING_INDICATOR:
                    return n ? v.a.createElement(Di, { conversationId: n }) : null
                  case Q.b.READ_ONLY_INDICATOR:
                    return n
                      ? v.a.createElement(
                          J.a,
                          { style: Mo.readOnly },
                          v.a.createElement(
                            Z.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Fo,
                            ' ',
                            v.a.createElement(Z.b, { link: 'https://support.twitter.com/articles/14606#faq' }, xo),
                          ),
                        )
                      : null
                  case Q.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return v.a.createElement(V, { conversation: t })
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
              (i._anchoring = w({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: T.a,
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
                        u = (null == a ? void 0 : a.status) === I.PAGINATION_STATUS.AT_END,
                        d = s ? Object(R.d)(l, s) : l.length - 1,
                        p = c ? Object(R.d)(l, c) : -1,
                        m = i && -1 === p ? Object(R.d)(l, i) : p,
                        h = l.slice(u ? 0 : m, d + 1),
                        f = (i ? h : l).reduce(function (e, r, o) {
                          n && 0 === o && e.push(T.b)
                          var s = Object(A.a)(e),
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
                            var u = F(s.entry, r),
                              d = e[e.length - 2]
                            u
                              ? ((e[e.length - 1].isRapidFire = !0),
                                d.isRapidFire || ((d.isFirstRapidFire = !0), (d.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : d.isRapidFire && (d.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return r && !i && f.push(r), a.read_only && o && !i && f.push(o), f
                    })({
                      conversation: n,
                      footer: T.d,
                      readOnlyEntry: T.c,
                      canInjectConversationProfileInfoHeader: n.status === Q.c.AT_END && n.type === Q.a.ONE_TO_ONE,
                      activeEntryId: u,
                      messageSearchEntryId: i,
                    }),
                    p = n.conversation_id,
                    m = function (e) {
                      return e[e.length - 1]
                    },
                    h = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Io(n)) return n
                      }
                      return m(e)
                    },
                    g = i ? 'dm-activity-'.concat(p, '-').concat(i) : 'dm-activity-'.concat(p),
                    y =
                      this.state.didRenderMessageSearchEntry &&
                      (null == n ? void 0 : n.min_search_entry_id) &&
                      n.status !== Q.c.AT_END
                  return v.a.createElement(z.a.Consumer, null, function (t) {
                    var u = t.isDrawer ? q.b.drawerHeaderRadius : Mo.scrollSpace
                    return v.a.createElement(
                      J.a,
                      { style: [Mo.scrollContainer, u] },
                      v.a.createElement(
                        Ni.a,
                        { style: [Mo.scrollContainer, r && Mo.conversationsPadding, u, c] },
                        a || null,
                        (n.status && n.status !== Q.c.AT_END && !i) || y ? v.a.createElement(Ui.a, null) : null,
                        v.a.createElement(
                          Ro.a,
                          { style: [Mo.content, Mo.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? v.a.createElement(Ki.b, {
                                anchoring: Pi.a,
                                assumedItemHeight: 50,
                                cacheKey: g,
                                canBeAnchorFunction: Io,
                                centerInitialAnchor: i && s,
                                hasNewContentAtBottom: !0,
                                identityFunction: Ao,
                                initialAnchor: d.length > 0 ? f.a(i && s ? i : Ao(h(d))) : void 0,
                                items: d,
                                nearStartProximityRatio: 2,
                                onAtEnd: i && e.state.didRenderMessageSearchEntry ? o : void 0,
                                onAtStart: i && e.state.didRenderMessageSearchEntry ? l : void 0,
                                onNearStart: i ? void 0 : l,
                                onScrollEnd: i && !e.state.didRenderMessageSearchEntry ? e._handleScrollEnd : void 0,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : v.a.createElement(
                                Bi.a,
                                { identifier: g },
                                v.a.createElement(To, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: g,
                                  centerInitialAnchor: !1,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Ao,
                                  initialAnchor: d.length > 0 ? f.a(Ao(m(d))) : void 0,
                                  items: d,
                                  nearStartProximityRatio: 2,
                                  onNearStart: l,
                                  renderer: e._renderItem,
                                  withoutHeadroom: !0,
                                }),
                              ),
                        ),
                        e.state.didRenderMessageSearchEntry &&
                          i &&
                          n.max_search_entry_id &&
                          n.search_status !== Q.c.AT_END
                          ? v.a.createElement(Ui.a, null)
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
                    ? v.a.createElement(ci, {
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
      h()(Oo, 'contextType', O.a)
      var Mo = P.a.create(function (e) {
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
    '64vW': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a).a.createContext({ heightsReady: !0 })
      t.a = r
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
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      }),
        n.d(t, 'c', function () {
          return C
        }),
        n.d(t, 'b', function () {
          return w
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
        h = s.a.b1d35407,
        f = s.a.g539cca6,
        g = s.a.bbac0019,
        v = s.a.a1d2a68d,
        y = s.a.d4f2d9d8,
        _ = s.a.hf383be4,
        b = s.a.b25c5b2a,
        k = s.a.c4fdbd16,
        S = s.a.hf3e7e38,
        E = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        C = { defaultToast: { text: d }, showToast: !0 },
        w =
          ((a = { defaultToast: { text: u } }),
          i()(a, o.a.CurrentUserSuspended, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(a, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(a, o.a.DirectMessageDuplicate, { toast: { text: b } }),
          i()(a, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: v, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(a, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: k } }),
          i()(a, o.a.DirectMessageTooLongError, { toast: { text: g } }),
          i()(a, o.a.DirectMessageTweetNotFound, { toast: { text: y } }),
          i()(a, o.a.GenericBadRequest, { customAction: c.a }),
          i()(a, o.a.MessageSendError, { toast: { text: S } }),
          i()(a, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          i()(a, o.a.TargetUserNotFound, { toast: { text: _ } }),
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
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return g
      }),
        n.d(t, 'a', function () {
          return v
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        l = (n('z84I'), n('Blm6'), n('lTEL'), n('7x/C'), n('kYxP'), n('LW0h'), n('lnti')),
        s = n('aWyx'),
        c = n('Yatk'),
        u = ['users'],
        d = ['conversation_id', 'participants'],
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
      function f(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var g = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = e.conversation_id,
            i = e.participants,
            l = o()(e, d)
          return r()(
            r()({ conversation_id: a }, l),
            {},
            { entries: t.entryIdsByConversationId[a] || [], participants: h(i, n) },
          )
        },
        v = function (e, t, n) {
          var a = e.conversation_id,
            i = e.participants,
            d = e.social_proof,
            m = o()(e, p),
            g = r()(
              r()({ conversation_id: a }, m),
              {},
              { entries: f(a, t), participants: h(i, n), social_proof: void 0 },
            )
          return (
            d &&
              (g.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === s.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      a = o()(t, u)
                    return r()(
                      r()({}, a),
                      {},
                      {
                        users: Object(l.a)(
                          n.map(function (t) {
                            return Object(c.a)(e[t])
                          }),
                        ),
                      },
                    )
                  }
                  return t
                })
              })(d, n)),
            g
          )
        }
    },
    'Ey+e': function (e, t, n) {
      'use strict'
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        l = n('ddV6'),
        s = n.n(l),
        c = (n('2G9S'), n('jwue'), n('7x/C'), n('+oxZ'), n('z84I'), n('ho0z'), n('ERkP'), n('AOWc')),
        u = n('6/RC'),
        d = n('E6XO'),
        p = n('sXY3'),
        m = n('tn7R'),
        h = n('+d3d'),
        f = n('oECP'),
        g = n('fs1G'),
        v = {},
        y = 0,
        _ = { mount: ['didMount', 'willMount'], update: ['didUpdate', 'willUpdate'] },
        b = function () {
          Object(p.a)(v).forEach(function (e, t) {
            var n = s()(e, 2),
              a = n[0],
              r = n[1],
              i = Object(m.a)(r),
              o = i.length
            i.forEach(function (e) {
              Object(p.a)(_).map(function (t) {
                var n = s()(t, 2),
                  r = n[0],
                  i = s()(n[1], 2),
                  l = i[0],
                  c = i[1]
                ;(function (e) {
                  return 1 === e || Math.random() <= 0.01
                })(o) &&
                  l in e &&
                  c in e &&
                  Object(d.c)(
                    (function (e, t) {
                      return 'lifecycle:'.concat(e.toLowerCase(), ':').concat(t)
                    })(a, r),
                    { duration_ms: e[l] - e[c] },
                  )
              })
            })
          }),
            Object(d.a)(),
            (v = {})
        },
        k = Object(h.a)(b, 2e4) || b,
        S = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.constructor.displayName
          Object(c.a)(n, ''.concat(e.constructor.name, ' component has "displayName" set.'))
          var a = e.__lifecycleIdentifier
          return (
            !a && t && ((y += 1), (a = e.__lifecycleIdentifier = y)),
            (v[n] && v[n][a]) || (v[n] = o()(o()({}, v[n]), {}, r()({}, a, {}))),
            [n, a]
          )
        },
        E = function (e, t, n, a) {
          v[e][t][n] = a
        }
      t.a = u.canUseDOM
        ? function (e) {
            var t = {
              UNSAFE_componentWillMount: e.prototype.UNSAFE_componentWillMount || g.a,
              componentDidMount: e.prototype.componentDidMount || g.a,
              UNSAFE_componentWillUpdate: e.prototype.UNSAFE_componentWillUpdate || g.a,
              componentDidUpdate: e.prototype.componentDidUpdate || g.a,
              componentWillUnmount: e.prototype.componentWillUnmount || g.a,
            }
            return (
              (e.prototype.UNSAFE_componentWillMount = function () {
                for (
                  var e = S(this, !0), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.UNSAFE_componentWillMount.apply(this, o), E(a, r, 'willMount', Date.now())
              }),
              (e.prototype.componentDidMount = function () {
                for (
                  var e = S(this), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.componentDidMount.apply(this, o), E(a, r, 'didMount', Date.now()), k()
              }),
              (e.prototype.UNSAFE_componentWillUpdate = function () {
                for (
                  var e = S(this, !0), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.UNSAFE_componentWillUpdate.apply(this, o), E(a, r, 'willUpdate', Date.now())
              }),
              (e.prototype.componentDidUpdate = function () {
                for (
                  var e = S(this), n = s()(e, 2), a = n[0], r = n[1], i = arguments.length, o = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  o[l] = arguments[l]
                t.componentDidUpdate.apply(this, o), E(a, r, 'didUpdate', Date.now()), k()
              }),
              (e.prototype.componentWillUnmount = function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a]
                t.componentWillUnmount.apply(this, n), k()
              }),
              e
            )
          }
        : f.a
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
        h,
        f,
        g,
        v,
        y,
        _,
        b,
        k,
        S,
        E,
        C,
        w,
        T,
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
        U,
        N,
        j,
        H,
        W,
        V,
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
        he,
        fe,
        ge,
        ve,
        ye,
        _e,
        be,
        ke,
        Se,
        Ee,
        Ce,
        we,
        Te,
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
        Ue = {
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
                                      (h = {
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
                                                              m,
                                                              p,
                                                              (E = {
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
                                                  f,
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
                                                      m,
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
                                                              (w = {
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
                                          (U = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (N = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          k,
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
                                              (W = {
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
                                                                      R,
                                                                      T,
                                                                      w,
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
                                                                                      (me = {
                                                                                        alias: 'fromIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'from_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (he = {
                                                                                        alias: 'toIndex',
                                                                                        args: null,
                                                                                        kind: 'ScalarField',
                                                                                        name: 'to_index',
                                                                                        storageKey: null,
                                                                                      }),
                                                                                      (fe = {
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
                                                                                            selections: (ve = [V]),
                                                                                            type: 'TimelineRichTextCashtag',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (_e = {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [m, ee],
                                                                                            type: 'TimelineRichTextList',
                                                                                            abstractKey: null,
                                                                                          }),
                                                                                          (be = {
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
                                                                                              (Ce = {
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
                                                                                              }),
                                                                                            ],
                                                                                            type: 'TimelineRichTextUser',
                                                                                            abstractKey: null,
                                                                                          },
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [S, Ce],
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
                                                                              (we = {
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
                                                                      (Te = {
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
                                                                            selections: (xe = [
                                                                              {
                                                                                alias: null,
                                                                                args: null,
                                                                                concreteType: 'EntitySet',
                                                                                kind: 'LinkedField',
                                                                                name: 'description',
                                                                                plural: !1,
                                                                                selections: (Re = [
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
                                                                                selections: Re,
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
                                                                            selections: xe,
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
                                      h,
                                      f,
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
                                                              E,
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
                                                  f,
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
                                                        selections: [z, x],
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
                                          U,
                                          N,
                                          k,
                                          j,
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
                                              W,
                                              m,
                                              V,
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
                                                                                      me,
                                                                                      he,
                                                                                      fe,
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
                                                                                          _e,
                                                                                          be,
                                                                                          ke,
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [
                                                                                              (Be = {
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
                                                                                                      Ee,
                                                                                                    ],
                                                                                                    storageKey: null,
                                                                                                  },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                              }),
                                                                                            ],
                                                                                            type: 'TimelineRichTextUser',
                                                                                            abstractKey: null,
                                                                                          },
                                                                                          {
                                                                                            kind: 'InlineFragment',
                                                                                            selections: [S, Be],
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
                                                                              we,
                                                                            ],
                                                                            storageKey: null,
                                                                          },
                                                                        ],
                                                                        storageKey: null,
                                                                      },
                                                                      Te,
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
            id: 'lKPg7qWQ_AfuBuSx6L_SGA',
            metadata: { sliceInfoPath: ['dm_conversation_by_rest_id', 'legacy_conversation_slice', 'slice_info'] },
            name: 'evolutionDmConversationTimelineQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(Ue.hash = 'd07206d5b39d9e3de615f7f59f505da7'), (t.default = Ue)
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
          h = 'follow' === t.reason ? p : m,
          f = Object(u.b)(s),
          g = Object(u.a)(s, i)
        return n
          ? r.a.createElement(c.b, { color: g, weight: f }, h)
          : r.a.createElement(
              l.a,
              { style: d.root },
              r.a.createElement(c.b, { align: 'center', color: g, size: 'subtext2', weight: f }, h),
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
    JD1h: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'b', function () {
          return d
        })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        l =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          Object.freeze({ MOVEMENT: 'movement', LIST_UPDATE: 'list_update', INITIAL_POSITION: 'initial_position' })),
        s = {
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
            ? l.INITIAL_POSITION
            : (function (e, t) {
                return e === c.OUTSIDE && t === c.INSIDE
              })(e, n)
            ? l.MOVEMENT
            : (function (e, t) {
                return e === c.INSIDE && t === c.INSIDE
              })(e, n) && a !== t
            ? l.LIST_UPDATE
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
                      l = n.proximity,
                      s = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? c.INSIDE : c.OUTSIDE
                      })(i, e),
                      d = e.getListLength(),
                      p = u(l, o, s, d)
                    ;(n.proximity = s), (n.listLength = d), p && r({ triggerCause: p })
                  })
                },
              },
            ]),
            e
          )
        })()
    },
    LQrL: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return h
      }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'e', function () {
          return v
        }),
        n.d(t, 'a', function () {
          return y
        })
      n('hBvt'), n('KqXw'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('t62R'),
        o = n('dWxr'),
        l = n.n(o),
        s = n('hHEM'),
        c = n('rHpw'),
        u = n('aITJ'),
        d = n('IZ3v'),
        p = function (e, t) {
          for (var n = l()(e.getText()), a = 0; a < n.length; a++)
            n[a].indices && 2 === n[a].indices.length && t(n[a].indices[0], n[a].indices[1])
        },
        m = { clipPath: 'circle(0% at center)' },
        h = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t ? n.getEntity(t) : null
              return !!a && 'LINK' === a.getType()
            }, t)
          },
          component: function (e) {
            return e.entityKey
              ? r.a.createElement(i.b, { link: e.contentState.getEntity(e.entityKey).getData().url }, e.children)
              : null
          },
        },
        f = {
          strategy: p,
          component: function (e) {
            var t = l()(e.decoratedText)[0]
            if (!t) return null
            var n = Object(d.b)(t)
            return n ? r.a.createElement(i.b, { link: Object(d.c)(n, e.decoratedText) }, e.children) : null
          },
        },
        g = {
          strategy: p,
          component: function (e) {
            return r.a.createElement('span', { style: { color: c.a.theme.colors.link } }, e.children)
          },
        },
        v = {
          strategy: function (e, t, n) {
            e.findEntityRanges(function (e) {
              var t = e.getEntity(),
                a = t && n.getEntity(t)
              return !(!a || a.type !== s.a.TWEMOJI_ENTITY_TYPE)
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
                      return r.a.createElement('span', { style: m }, e)
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
        y = {
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
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        _ = n.n(y),
        b = n('HPNB'),
        k = n('VAZu'),
        S = n('wiP2'),
        E = n('Es6L'),
        C = n('yiKp'),
        w = n.n(C),
        T = n('rHpw'),
        R = T.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: w()(w()({}, T.a.absoluteFillObject), {}, { overflowY: 'auto' }),
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
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(u()(e), '_renderChildren', function () {
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
                    t = e.children,
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
                    o = n.backLocation,
                    l = n.documentTitle,
                    s = n.headerless,
                    c = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    m = n.rightControl,
                    h = n.screenType,
                    f = n.searchBoxOptions,
                    g = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    b = n.showSubtitleOnWideDetail,
                    E = n.subtitle,
                    C = n.title,
                    w = n.titleIconCell,
                    T = n.titleIconCellSize,
                    F = n.withDetailOpen,
                    A = n.withSearchBox,
                    I = n.withTweetButton,
                    O = 'root' === h,
                    M = 'secondaryRoot' === h,
                    L = 'primaryDetail' === h,
                    D = (L && b) || (O && y),
                    P = O || (L && t),
                    K = O ? v.c : L ? v.a : void 0,
                    B = _.a.createElement(
                      x.a,
                      { style: R.appBarContainer },
                      _.a.createElement(k.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: P,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: g,
                        subtitle: D ? E : void 0,
                        title: C,
                        titleDomId: K,
                        titleIconCell: w,
                        titleIconCellSize: T,
                      }),
                    ),
                    U =
                      O || (M && F)
                        ? null
                        : _.a.createElement(S.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: l,
                            headerless: s,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: f,
                            subtitle: E,
                            title: C,
                            withSearchBox: A,
                            withTweetButton: I,
                          })
                  return _.a.createElement(_.a.Fragment, null, U, B)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      g()(L, 'contextType', O.a),
        g()(L, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(A.a)(L)
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('ho0z'), n('ERkP')),
        o = n.n(i),
        l = n('aWyx'),
        s = n('XnpN'),
        c = n('3XMw'),
        u = n.n(c),
        d = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        h = n('t62R'),
        f = n('rHpw'),
        g = n('p9G8'),
        v = u.a.cfd94063,
        y = u.a.b93ba92c,
        _ = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        b = f.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        k = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            a = e.perspective
          if (t) {
            if (t.type === l.a.ONE_TO_ONE) {
              var i = Object(s.a)(t, a).map(function (e) {
                return e.user
              })
              return r()(i, 1)[0].name
            }
            return Object(g.a)(t, a)
          }
          var o = _(n)
          return Object(g.b)(o, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          c = void 0 !== i && i,
          u = e.newConversationParticipants,
          f = e.perspective,
          k = e.renderTimestamp,
          S = e.textColor,
          E = void 0 === S ? 'text' : S,
          C = e.titleWeight,
          w = void 0 === C ? 'bold' : C,
          T = e.withParticipantsCount,
          R = void 0 !== T && T,
          x = e.withScreenName,
          F = void 0 === x || x,
          A = e.withVDLRefresh,
          I = void 0 !== A && A
        if (t) {
          var O = k ? k() : null
          if (t.type === l.a.ONE_TO_ONE) {
            var M = Object(s.a)(t, f).map(function (e) {
                return e.user
              }),
              L = r()(M, 1)[0],
              D = o.a.createElement(p.a, {
                color: E,
                isProtected: L.protected,
                isVerified: L.verified,
                name: L.name,
                screenName: L.screen_name,
                weight: w,
                withLink: !1,
                withScreenName: F,
              })
            return (I && !a) || c ? o.a.createElement(m.a, null, D, O) : D
          }
          var P = t.participants.length + (I ? -1 : 0)
          if (a)
            return o.a.createElement(
              m.a,
              { color: E },
              o.a.createElement(h.b, { color: E, numberOfLines: 1, style: b.title, weight: w }, Object(g.a)(t, f, a)),
              I
                ? null
                : o.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: P }),
                  ),
            )
          var K = o.a.createElement(h.b, { color: E, numberOfLines: 1, weight: w }, Object(g.a)(t, f, a))
          return (I && !a) || c
            ? o.a.createElement(
                d.a,
                { style: b.dmGroup },
                o.a.createElement(m.a, null, K, O),
                R && o.a.createElement(h.b, { color: 'gray700', numberOfLines: 1 }, y({ peopleCount: P })),
              )
            : K
        }
        var B = _(u)
        return o.a.createElement(h.b, { color: E, numberOfLines: 1, weight: w }, Object(g.b)(B, f))
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
        h = n.n(m),
        f = n('KEM+'),
        g = n.n(f),
        v = (n('7x/C'), n('JtPf'), n('Qavd'), n('z84I'), n('KqXw'), n('MvUL'), n('lTEL'), n('kYxP'), n('ERkP')),
        y = n.n(v),
        _ = n('0JOx'),
        b = n('MMRb'),
        k = n('CDB5'),
        S = n('RqPI'),
        E = n('1YZw'),
        C = n('hqKg'),
        w = n('kGix'),
        T = n('AQOc'),
        R = n('UhuB'),
        x = n('pNZL'),
        F = n('G6rE'),
        A = n('rxPX'),
        I = n('X/yg'),
        O = n('0KEI'),
        M = n('P1r1'),
        L = function (e, t) {
          return t.conversationId
        },
        D = function (e, t) {
          return b.selectConversation(e, L(0, t))
        },
        P = Object(C.createSelector)(
          b.selectFetchStatus,
          function (e, t) {
            return b.selectConversationFetchStatus(e, L(0, t))
          },
          function (e, t) {
            return e === w.a.LOADED ? t : e
          },
        ),
        K = Object(C.createSelector)(
          function (e, t) {
            return b.selectEntriesForConversation(e, L(0, t))
          },
          S.r,
          function (e, t) {
            return t ? Object(I.e)(e, t) : void 0
          },
        ),
        B = function (e, t) {
          return k.j(e, L(0, t))
        },
        U = function (e, t) {
          return k.i(e, L(0, t))
        },
        N = function (e, t) {
          return k.k(e, L(0, t))
        },
        j = function (e, t) {
          return k.h(e, L(0, t))
        },
        H = function (e, t) {
          return k.l(e, L(0, t))
        },
        W = function (e, t) {
          return k.g(e, L(0, t))
        },
        V = function (e, t) {
          var n = L(0, t)
          return b.selectInboxTypeByConversation(e, n)
        },
        z = function (e) {
          return function (t, n) {
            return k.a(e, t, n)
          }
        },
        q = Object(A.a)()
          .propsFromState(function () {
            return {
              cardUrl: W,
              conversation: D,
              dataSaverMode: M.j,
              draftText: H,
              dtabBarInfo: M.m,
              entries: b.selectEntries,
              fetchStatus: P,
              gifMetadata: j,
              inboxType: V,
              isDmReceiptSettingEnabled: R.n,
              isNewGroupConversation: I.m,
              isUploading: B,
              media: U,
              mediaUploadProgress: N,
              newConversationParticipants: I.n,
              perspective: S.r,
              quickReplyOptions: K,
              tweetAttachment: I.o,
              users: F.e.selectAll,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.cardUrl,
              n = e.conversation,
              a = e.dataSaverMode,
              r = e.draftText,
              i = e.dtabBarInfo,
              o = e.entries,
              l = e.fetchStatus,
              s = e.gifMetadata,
              c = e.inboxType,
              u = e.isDmReceiptSettingEnabled,
              d = e.isNewGroupConversation,
              p = e.isUploading,
              m = e.media,
              h = e.mediaUploadProgress,
              f = e.newConversationParticipants,
              g = e.perspective,
              v = e.quickReplyOptions,
              y = e.tweetAttachment,
              _ = e.users,
              b = null == n ? void 0 : n.data
            return {
              conversation: (b && Object(T.a)(b, o, _)) || void 0,
              dataSaverMode: a,
              draftText: r,
              dtabBarInfo: i,
              entries: o,
              fetchStatus: l,
              gifMetadata: s,
              inboxType: c,
              isDmReceiptSettingEnabled: u,
              cardUrl: t,
              isNewGroupConversation: d,
              isUploading: p,
              media: m,
              mediaUploadProgress: h,
              newConversationParticipants: f,
              perspective: g,
              quickReplyOptions: v,
              tweetAttachment: y,
            }
          })
          .propsFromActions(function (e) {
            var t = e.conversationId
            return {
              acceptConversation: b.acceptConversation,
              addMedia: z(t),
              saveText: k.f,
              addToast: E.b,
              addWelcomeMessageToConversation: b.addWelcomeMessageToConversation,
              cancelUpload: Object(I.a)(t),
              createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              fetchConversationFuture: b.fetchConversationFuture,
              fetchConversationHistoricalSnapshot: b.fetchConversationHistoricalSnapshot,
              fetchConversationHistory: b.fetchConversationHistory,
              fetchConversationIfNeeded: b.fetchConversationIfNeeded,
              fetchInboxIfNeeded: b.fetchInboxIfNeeded,
              fetchUpdatesIfNeeded: b.fetchUpdatesIfNeeded,
              leaveConversation: b.leaveConversation,
              removeMedia: Object(I.b)(t),
              removeText: k.d,
              sendMessage: k.m,
              updateConversationReadState: b.updateConversationReadState,
              updateTweetDetailNav: x.b,
              updateTyping: b.updateTyping,
              removeConversation: b.removeConversation,
              popOutConversation: b.popOutConversation,
            }
          })
          .withAnalytics(),
        G = n('I2k/'),
        Y = n('4AMG'),
        Q = n('uB9N'),
        X = n('htvZ'),
        J = n('v//M'),
        Z = n('3XMw'),
        $ = n.n(Z),
        ee = n('UgB4'),
        te = n('J2UM'),
        ne = n('07FG'),
        ae = n('I8M8'),
        re = n('yoO3'),
        ie = n('7myi'),
        oe = n('pHkl'),
        le = n('883S'),
        se = n('z0MJ'),
        ce = n.n(se),
        ue = n('Es6L'),
        de = n('LsPn'),
        pe = n('sl05'),
        me = n('GSsg'),
        he = n('ddV6'),
        fe = n.n(he),
        ge = (n('ho0z'), n('v6aA')),
        ve = n('EbOo'),
        ye = Object(A.a)().propsFromActions(function () {
          return {
            addToast: E.b,
            block: F.e.block,
            createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: b.muteDMUser,
            unmuteDMUser: b.unmuteDMUser,
            unblock: F.e.unblock,
          }
        }),
        _e = (n('AQ79'), n('u0B7')),
        be = (n('uFXj'), n('97Jx')),
        ke = n.n(be),
        Se = n('tZH3'),
        Ee = n('/yvb'),
        Ce = n('efqG'),
        we = $.a.ccf2f24e,
        Te = $.a.ib3fe8a9,
        Re = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            a = e.onReportClick,
            r = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = y.a.createElement(Ee.a, ke()({}, i, { accessibilityRole: 'button' }), Te),
            l = y.a.createElement(Ee.a, ke()({}, i, { onPress: a }), we),
            s = y.a.useCallback(
              function (e, t) {
                return y.a.createElement(Se.a, {
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
          return t ? l : y.a.createElement(Ce.a, { renderContent: s }, o)
        },
        xe = n('MWbm'),
        Fe = n('cHvH'),
        Ae = n('rHpw'),
        Ie = function (e) {
          var t = y.a.useContext(ge.a),
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
          return y.a.createElement(Fe.a, null, function (t) {
            var s = t.windowWidth <= Ae.a.theme.breakpoints.small
            return y.a.createElement(
              xe.a,
              { style: Oe.actionsContainer },
              n &&
                y.a.createElement(
                  Ee.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Oe.actionFullWidth, Oe.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              y.a.createElement(
                xe.a,
                { style: s ? Oe.actionFullWidth : [Oe.actionHalfWidth, Oe.actionMarginRight] },
                y.a.createElement(Re, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(I.j)(e.conversation, a).screenName,
                }),
              ),
              y.a.createElement(
                Ee.a,
                {
                  onPress: l,
                  size: 'medium',
                  style: s ? [Oe.actionFullWidth, Oe.actionMarginTop] : [Oe.actionHalfWidth, Oe.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                y.a.createElement(
                  Ee.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Oe.actionFullWidth, Oe.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        Oe = Ae.a.create(function (e) {
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
        Me = n('aITJ'),
        Le = n('t62R'),
        De = n('eb3s'),
        Pe = n('vMjK'),
        Ke = n('7JQg'),
        Be = n('24HD'),
        Ue = n('zCf4'),
        Ne = $.a.da878dcf,
        je = $.a.d96cf7cd,
        He = ($.a.gde6b424, $.a.e308019b, $.a.gf5e9ea6, $.a.hc52446b),
        We = $.a.f7e1ad65,
        Ve = { headline: $.a.gdf4b79f, text: $.a.bbf83d83, confirmButtonLabel: $.a.bb1d57b6 },
        ze = Ae.a.create(function (e) {
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
        qe = Object(Ke.a)({ element: 'untrusted_interstitial' })(
          ye(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              a = e.scribeNamespace,
              i = y.a.useContext(ge.a),
              o = Object(Ue.f)(),
              l = Object(Ue.g)(),
              s = y.a.useState(!1),
              c = fe()(s, 2),
              u = c[0],
              d = c[1],
              p = y.a.useState(!1),
              m = fe()(p, 2),
              h = m[0],
              f = m[1],
              g = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === b.CONVERSATION_TYPE.GROUP ? oe.i.GROUP : oe.i.ONE_TO_ONE }],
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
            var _,
              k,
              S,
              E,
              C = function () {
                d(!0), f(!1)
              },
              w = function () {
                d(!1)
              },
              T = function () {
                f(!1)
              },
              R = function () {
                var n,
                  a = e.conversationId,
                  r = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === b.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  s = (null == t ? void 0 : t.participants.length) || 0,
                  c = (null == l || null === (n = l.state) || void 0 === n ? void 0 : n.position) || 0,
                  u = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === b.CONVERSATION_TYPE.GROUP ? oe.i.GROUP : oe.i.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: s,
                    position: c,
                    inbox_type: Object(I.i)(r),
                    entry_point: oe.c.REQUEST_ACTION_SHEET,
                  }
                d(!1), i({ conversationId: a }), v(o, u), x()
              },
              x = function () {
                var t = e.inboxType
                o.push(Object(I.f)(t))
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
                      conversation_type: t.type === b.CONVERSATION_TYPE.GROUP ? oe.i.GROUP : oe.i.ONE_TO_ONE,
                      conversation_participant_count: u,
                      entry_point: oe.c.REQUEST_ACTION_SHEET,
                      inbox_type: Object(I.i)(o),
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
                      n({ action: { label: Pe.c, onAction: O(t) }, text: Pe.a })
                    }, r(ve.a)),
                    v('block')
                }
              },
              O = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(_e.a)), v('unblock')
                }
              },
              M = (t && t.type) === b.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                xe.a,
                { style: ze.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    Le.b,
                    { style: ze.copy },
                    e ? He : We({ senderName: Object(I.j)(t, n).name }),
                  )
                })(M),
                y.a.createElement(Ie, {
                  acceptButtonText: Ne,
                  conversation: t,
                  declineButtonText: je,
                  isGroup: M,
                  onAccept: F,
                  onBlock: function () {
                    d(!1), f(!0)
                  },
                  onLeave: C,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), o.push(Object(I.g)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              Me.b.isKaiOS()
                ? y.a.createElement(de.a, { leftText: je, onLeftClick: C, onRightClick: F, rightText: Ne })
                : null,
              u
                ? y.a.createElement(De.a, {
                    confirmButtonLabel: Ve.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ve.headline,
                    onCancel: w,
                    onConfirm: R,
                    text: Ve.text,
                  })
                : null,
              h
                ? ((_ = i.loggedInUserId),
                  (k = Object(I.j)(t, _)),
                  (S = k.idStr),
                  (E = k.screenName),
                  Object(Be.j)({ confirmation: Object(Be.f)(E), onClose: T, handleConfirm: A(S) }))
                : null,
            )
          }),
        ),
        Ge = n('yw4N'),
        Ye = n('rFBM'),
        Qe = n('mw9i'),
        Xe = n('jTgF'),
        Je = n('+d3d'),
        Ze = n('mN6z'),
        $e = y.a.createElement(ee.a, null),
        et = $.a.badb01a0,
        tt = $.a.e3275464,
        nt = $.a.d6b11d9c,
        at = $.a.i7ca1446,
        rt = function (e) {
          return e && (e.tweet || e.media)
        },
        it = function (e) {
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
        ot = (function (e) {
          p()(n, e)
          var t = h()(n)
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
                    Me.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(a({ showToast: !0 }))
              }),
              g()(u()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.conversation,
                  a = e.conversationId,
                  r = e.inboxType
                return n && i._isUntrustedConversation(n)
                  ? n.read_only
                    ? null
                    : a &&
                      y.a.createElement(qe, {
                        acceptConversation: i._acceptConversation,
                        conversation: n,
                        conversationId: a,
                        inboxType: r,
                        leaveConversation: i._leaveConversation,
                        scribeAction: t.scribeAction,
                      })
                  : y.a.createElement(
                      y.a.Fragment,
                      null,
                      i._renderComposerBar(),
                      Me.b.isKaiOS()
                        ? y.a.createElement(de.a, {
                            leftText: at,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: et,
                          })
                        : null,
                    )
              }),
              g()(u()(i), '_render', function () {
                var e,
                  t,
                  n,
                  a = i.props,
                  r = a.analytics,
                  o = a.conversation,
                  l = a.conversationId,
                  s = a.drawerHeader,
                  c = a.inboxType,
                  u = a.isWide,
                  d = a.location,
                  p = a.perspective,
                  m = i.state,
                  h = m.attachment,
                  f = m.composerHeight
                return y.a.createElement(
                  X.b,
                  { key: l },
                  y.a.createElement(
                    Ye.a,
                    { allowDragDrop: !rt(h), onFilesAdded: i._handleDragDrop, style: pe.a.dragDrop },
                    y.a.createElement(
                      Ge.a,
                      {
                        style: [
                          pe.a.scrollView,
                          !Object(ue.a)() && !i._isUntrustedConversation(o) && { paddingBottom: f },
                        ],
                      },
                      p &&
                        o &&
                        (null == d ||
                          null === (e = d.state) ||
                          void 0 === e ||
                          !e.entryPoint ||
                          i.state.hasLoadedSnapshot)
                        ? y.a.createElement(Y.a, {
                            conversation: o,
                            drawerHeader: s,
                            inboxType: c,
                            isWide: u,
                            messageSearchEntryId:
                              null == d || null === (t = d.state) || void 0 === t ? void 0 : t.entryPoint,
                            onForwardRequest: i._handleForwardRequest,
                            onHistoryRequest:
                              null != d && null !== (n = d.state) && void 0 !== n && n.entryPoint
                                ? i._handleRelativeHistoryRequest
                                : i._handleHistoryRequest,
                            perspective: p,
                            scribeNamespace: r.contextualScribeNamespace,
                            shouldScrollToCenter: i.state.shouldScrollToCenter,
                            style: pe.a.activity,
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
                Object(Je.a)(
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
                Object(Je.a)(
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
                  s = o.analytics,
                  c = o.cardUrl,
                  u = o.conversation,
                  d = o.conversationId,
                  p = o.createLocalApiErrorHandler,
                  m = o.gifMetadata,
                  h = o.history,
                  f = o.location,
                  g = o.newConversationParticipants,
                  v = o.perspective,
                  y = o.sendMessage,
                  _ = o.tweetAttachment,
                  k = i.state.attachment,
                  S = k && k.media,
                  E = null != u && u.participants ? u.participants.length : 0,
                  C = (null == u ? void 0 : u.type) === b.CONVERSATION_TYPE.GROUP,
                  w = 'unknown'
                if (
                  (e.quickReply ||
                    S ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  m)
                )
                  w = 'gif'
                else if (c) w = 'card'
                else if (_) w = 'tweet'
                else {
                  var T,
                    R = null == k || null === (T = k.media) || void 0 === T ? void 0 : T.mediaFile,
                    x = null != R && R.isVideo ? 'video' : null != R && R.isGif ? 'gif' : 'photo'
                  w = R ? x : t ? 'text' : 'unknown'
                }
                return (
                  d &&
                    s.scribe(
                      r()(
                        r()({}, s.contextualScribeNamespace),
                        {},
                        {
                          element: w,
                          action: 'send_dm',
                          data: {
                            conversation_id: d,
                            conversation_participant_count: E,
                            conversation_type: C ? oe.i.GROUP : oe.i.ONE_TO_ONE,
                          },
                        },
                      ),
                    ),
                  i.setState({ isSending: !0 }),
                  d
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (a = n.media) &&
                          void 0 !== a &&
                          a.uploading) ||
                        (i.setState({ attachment: null }), h.replace(f.pathname)),
                      y(
                        r()(
                          { senderId: v, cardUrl: c, conversationId: d, text: t, tweetAttachment: _ },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            S &&
                            (i._currentComposer && i._currentComposer.clear(),
                            i._currentComposer && i._currentComposer.focus()),
                            i.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((i.setState({ isSending: !1 }), !Object(Xe.d)(e) || e.code !== ae.b.CANCELED))
                            if (Object(Xe.d)(e)) {
                              var t = Object(Xe.b)(e, nt)
                              t && l(t)
                            } else p(le.b)(e)
                        }))
                    : (y({
                        senderId: v,
                        recipients:
                          g &&
                          g.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: _,
                      }).then(function (e) {
                        s.scribe(
                          r()(
                            r()({}, s.contextualScribeNamespace),
                            {},
                            {
                              element: w,
                              action: 'send_dm',
                              data: {
                                conversation_id: e,
                                conversation_participant_count: g ? g.length + 1 : 0,
                                conversation_type: oe.i.GROUP,
                              },
                            },
                          ),
                        ),
                          i.setState({ attachment: null, isSending: !1 }),
                          h.replace('/messages/'.concat(e))
                      }, p(le.b)),
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
                attachment: it(e),
                composerHeight: Ae.a.theme.componentDimensions.appBarHeight,
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
                    a = n.analytics
                  return (
                    (0, n.updateTweetDetailNav)(a.contextualScribeNamespace),
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
                  ce()(function () {
                    return Object(te.a)().then(function (t) {
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
                    (this._updatePolling = new me.a(this._fetchUpdatesIfNeeded, { interval: t }))
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
                  Object(Ze.a)(t, n) || this.setState({ attachment: it(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    re.a,
                    null,
                    y.a.createElement(
                      Qe.a,
                      { style: [pe.a.root, Me.b.isKaiOS() && pe.a.kaiOSFix] },
                      y.a.createElement(J.a, {
                        fetchStatus: e,
                        onRequestRetry: this._handleInitialFetch,
                        render: this._render,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderComposerBar',
                value: function () {
                  var e = this.props,
                    t = e.addMedia,
                    n = e.analytics,
                    a = e.cardUrl,
                    r = e.conversation,
                    i = e.conversationId,
                    o = e.dataSaverMode,
                    l = e.draftText,
                    s = e.dtabBarInfo,
                    c = e.history,
                    u = e.isUploading,
                    d = e.mediaUploadProgress,
                    p = e.quickReplyOptions,
                    m = e.removeMedia,
                    h = e.richTextInputContext,
                    f = e.typeaheadWrapper,
                    g = this.state,
                    v = g.attachment,
                    _ = g.isSending,
                    b = this.props.prefillText || l
                  return null != r && r.read_only
                    ? null
                    : y.a.createElement(Q.a, {
                        attachment: v,
                        conversationId: i,
                        disabled: u,
                        dtabBarInfo: s,
                        history: c,
                        isCardPreviewTombstoned: Object(ne.a)(a),
                        isSending: _,
                        isUploading: u,
                        key: i,
                        mediaUploadProgress: d,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: o ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof b ? b : void 0,
                        primaryActionIcon: $e,
                        primaryActionLabel: tt,
                        quickReplyOptions: p,
                        ref: this._composer,
                        removeMedia: m,
                        richTextInputContext: h,
                        scribeNamespace: n.contextualScribeNamespace,
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
                            : n.status) === b.PAGINATION_STATUS.AT_END && (r = !1),
                            a.setState({ hasLoadedSnapshot: !0, shouldScrollToCenter: r })
                        })
                        .catch(function (e) {
                          return a.setState({ hasLoadedSnapshot: !0 }), i(e)
                        }))
                    : l({ conversationId: e })
                        .then(function () {
                          return c(e)
                        })
                        .catch(i(Object(G.a)(e)))
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
                    u = !r || !r.type || r.type === b.CONVERSATION_TYPE.GROUP,
                    d = r && (null == r || null === (t = r.participants) || void 0 === t ? void 0 : t.length) <= 1
                  return c || u || d ? Promise.resolve() : a(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      g()(ot, 'contextType', ge.a), g()(ot, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: ie.a })
      var lt = q(ot)
      t.a = lt
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
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        g = n.n(f),
        v = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        k = n('GZwR'),
        S = n('zpdM'),
        E = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(s()(e), '_genericWrapperRef', g.a.createRef()),
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
              h()(s()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(s()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  a = e.state.queryContext
                if (a) {
                  var r = Object(_.a)(t, a.resultType)
                  n(e._replaceToken(r, a))
                }
                e._setQueryContext(void 0)
              }),
              h()(s()(e), '_handleInputChange', function (t) {
                if (!Object(b.a)(t))
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
      t.a = E
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
            n = l.e.UNKNOWN,
            a = (t && t.attachment) || {}
          return (
            a.tweet
              ? (n = l.e.TWEET)
              : a.photo
              ? (n = l.e.PHOTO)
              : a.animated_gif
              ? (n = l.e.GIF)
              : a.video
              ? (n = a.video.audio_only ? l.e.VOICE : l.e.VIDEO)
              : a.card
              ? (n = l.e.CARD)
              : null != t && t.text && (n = l.e.TEXT),
            n
          )
        }
      function p(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function m(e) {
        return e === o.d.SECONDARY ? l.d.REQUESTS : e === o.d.TERTIARY ? l.d.LOW_QUALITY : l.d.PRIMARY
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
        _ = function (e) {
          return e === o.d.TERTIARY
            ? '/messages/requests/additional'
            : e === o.d.SECONDARY
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
        o = n.n(i),
        l = (n('2G9S'), n('tQbP'), n('aWyx')),
        s = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
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
            u,
            d,
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
          c = o()(s, 2),
          u = c[0],
          d = c[1]
        return d.length ? (i === l.a.GROUP && 1 === d.length ? [].concat(r()(u), r()(d)) : n ? d.sort(p(n)) : d) : u
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
        o = n('XnpN'),
        l = n('3XMw'),
        s = n.n(l),
        c = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        m = n('jhWN'),
        h = n('9Xij'),
        f = n('Znyr'),
        g = n('cm6r'),
        v = n('U+bB'),
        y = n('MWbm'),
        _ = s.a.fd48249b,
        b = u.a.create(function (e) {
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
        k = u.a.create(function (e) {
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
        S = u.a.create(function (e) {
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
              r.a.createElement(m.a, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  y.a,
                  { key: e.id_str, style: b.container },
                  r.a.createElement(m.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(h.a, { ratio: 1 }, r.a.createElement(E, { left: n[1], right: n[0] }))
            var a = r.a.createElement(C, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(E, { left: a, right: i })
          },
          a = e.conversation,
          l = e.link,
          s = e.perspective,
          k = e.withBadge,
          S = a && a.avatar_image_https,
          w = a
            ? Object(o.a)(a, s).map(function (e) {
                return e.user
              })
            : [],
          T = w.slice(0, 3),
          R =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.a.createElement(d.a, {
                    accessibilityLabel: '',
                    aspectMode: p.a.SQUARE,
                    backgroundColor: u.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(a) ||
            (function (e) {
              return e ? r.a.createElement(v.a, { source: e }) : null
            })(S) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(y.a, { style: b.circle }, n(e))
            })(T),
          x =
            l ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, w),
          F = k && null != a && a.participants ? a.participants.length - 1 : 0
        return R
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                h.a,
                { ratio: 1 },
                x ? r.a.createElement(g.a, { interactiveStyles: null, link: x, testID: c.a.conversationAvatar }, R) : R,
              ),
              F
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      y.a,
                      { style: b.itemAccessory },
                      r.a.createElement(f.a, {
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
        h = n.n(m),
        f = (n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        g = n.n(f),
        v = n('v6aA'),
        y = (n('WNMA'), n('zh9S')),
        _ = n('MMRb'),
        b = n('CDB5'),
        k = n('RqPI'),
        S = n('hqKg'),
        E = n('AQOc'),
        C = n('z2Pn'),
        w = n('pNZL'),
        T = n('G6rE'),
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
          T.e.selectAll,
          function (e, t) {
            return b.j(e, F(0, t))
          },
          function (e, t) {
            return b.i(e, F(0, t))
          },
          function (e, t, n, a, r, i, o, l, s, c) {
            var u = e && e.data
            return {
              conversation: (u && Object(E.a)(u, t, l)) || void 0,
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
            googleAnalyticsPageView: y.a,
            removeMedia: Object(x.b)(e.match.params.conversationId),
            scribePageImpression: y.d,
            setLastViewedDmInboxPath: C.h,
            updateTweetDetailNav: w.b,
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
              h()(s()(i), '_composer', g.a.createRef()),
              h()(s()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              h()(s()(i), '_updateLastViewDmInboxPath', function () {
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
      h()(B, 'contextType', v.a), h()(B, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: D.a })
      t.default = Object(K.a)({ page: 'messages', section: 'thread' })(I(B))
    },
    dPJJ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      }),
        n.d(t, 'b', function () {
          return c
        })
      n('lTEL'), n('7x/C'), n('LqLs'), n('87if'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var a = n('6/RC'),
        r = new Set(),
        i = new Set(),
        o = !1
      function l() {
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
      var s = function (e) {
          return (
            o || l(),
            r.add(e),
            function () {
              return r.delete(e)
            }
          )
        },
        c = function (e) {
          return (
            o || l(),
            i.add(e),
            function () {
              return i.delete(e)
            }
          )
        }
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
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { decorators: [r.b, r.e, r.a] },
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
            h = 'number' == typeof t && t > -1,
            f = h ? o(m, t) : Object.freeze({})
          if ((a && ((c = l(c, f)), (n = !0)), h && ((c = s(c, f)), (n = !0)), n)) {
            var g = (c = i.EditorState.forceSelection(c, r)).getCurrentContent()
            ;(g = (g = g.set('selectionBefore', u)).set('selectionAfter', d)),
              (c = i.EditorState.set(e, { allowUndo: !0, currentContent: g }))
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
        return r.a.createElement(_.Provider, { value: l }, e.children)
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
        return Object(u.k)(t) ? r.a.createElement(f, null, e.children, r.a.createElement(c, null)) : e.children
      }
      var S = _
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
        h = n.n(m),
        f = n('97Jx'),
        g = n.n(f),
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
        E = n('k/Ka'),
        C = n('PxJJ'),
        w = n('w9LO'),
        T = n('fs1G'),
        R = n('zpdM'),
        x = function (e) {
          return Object(E.a)('div', e)
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
                h()(s()(e), '_setSelectionToStart', function () {
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
                h()(s()(e), '_setFocusToStart', function () {
                  var t = e._setSelectionToStart()
                  return R.EditorState.forceSelection(t, t.getSelection())
                }),
                h()(s()(e), '_setFocusToEnd', function () {
                  var t = e.props,
                    n = t.autoFocus,
                    a = t.editorState,
                    r = t.onChange
                  n
                    ? null == r || r(R.EditorState.moveFocusToEnd(a))
                    : null == r || r(R.EditorState.moveSelectionToEnd(a))
                }),
                h()(s()(e), '_setDraftJsStyle', function () {
                  var t = e.props.placeholderTextColor,
                    n = document.createElement('style')
                  n.innerHTML = b({ placeholderTextColor: t })
                  var a = document.head
                  a && a.insertBefore(n, a.firstChild)
                }),
                h()(s()(e), 'focus', function () {
                  e._editor && e._editor.focus()
                }),
                h()(s()(e), 'blur', function () {
                  e._editor && e._editor.blur()
                }),
                h()(s()(e), 'getValue', function () {
                  return e.props.editorState.getCurrentContent().getPlainText()
                }),
                h()(s()(e), 'getOffsetHeight', function () {
                  var t = (e._editor || {}).editor
                  return (t && t.offsetHeight) || 0
                }),
                h()(s()(e), 'clear', function () {}),
                h()(s()(e), '_setEditorRef', function (t) {
                  e._editor = t
                }),
                h()(s()(e), '_handleViewClick', function () {
                  return e.focus()
                }),
                h()(s()(e), '_onPastedFiles', function (t) {
                  var n = e.props.onFilesAdded,
                    a = []
                  return (
                    t.forEach(function (e) {
                      e instanceof File && a.push(e)
                    }),
                    a.length && (null == n ? void 0 : n(a)) ? 'handled' : 'not-handled'
                  )
                }),
                h()(s()(e), '_removeNewLines', function (e, t) {
                  return R.EditorState.push(
                    t,
                    R.Modifier.replaceText(t.getCurrentContent(), t.getSelection(), e.replace(/[\r\n]+/g, ' ')),
                    'insert-characters',
                  )
                }),
                h()(s()(e), '_removeInvalidStylesFromContentBlock', function (t) {
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
                h()(s()(e), '_removeInvalidStyles', function (t, n) {
                  var a = e.props.blockRenderMap,
                    r = t ? Object(R.convertFromHTML)(t, void 0, a) : void 0
                  if (r) {
                    var i,
                      o =
                        null == r || null === (i = r.contentBlocks) || void 0 === i
                          ? void 0
                          : i.map(e._removeInvalidStylesFromContentBlock)
                    if (o) {
                      var l = R.ContentState.createFromBlockArray(o, null == r ? void 0 : r.entityMap)
                      return R.EditorState.push(
                        n,
                        R.Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), l.getBlockMap()),
                        'insert-fragment',
                      )
                    }
                  }
                  return null
                }),
                h()(s()(e), '_onPastedText', function (t, n, a) {
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
                h()(s()(e), '_myKeyBindingFn', function (t) {
                  var n = e.props,
                    a = n.dismissComposerCommandName,
                    r = n.sendTweetCommandName,
                    i = R.KeyBindingUtil.hasCommandModifier
                  return 13 === t.keyCode && i(t) ? r : 27 === t.keyCode ? a : Object(R.getDefaultKeyBinding)(t)
                }),
                h()(s()(e), '_onKeyCommand', function (t) {
                  var n = e.props.keyCommandHandlers,
                    a = n && n[t]
                  return a ? (a(), 'handled') : 'not-handled'
                }),
                h()(s()(e), '_onSingleLineReturn', function (t, n) {
                  var a = e.props.handleReturn
                  return null == a || a(t, n), 'handled'
                }),
                h()(s()(e), '_getContainerStyle', function () {
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
                        o = t.blockRenderMap,
                        l = t.blockRendererFn,
                        s = t.editorState,
                        c = t.handleReturn,
                        u = t.multiline,
                        d = t.onChange,
                        p = t.onFocus,
                        m = t.onKeyDown,
                        f = t.onKeyPress,
                        g = t.onKeyUp,
                        v = t.pastedStylesAllowlist,
                        b = t.placeholder,
                        k = t.spellCheck,
                        E = t.style,
                        C = t.testID
                      return S.a.createElement(
                        x,
                        {
                          className: u ? void 0 : _,
                          onClick: this._handleViewClick,
                          style: [this._getContainerStyle(), E],
                        },
                        S.a.createElement(R.Editor, {
                          ariaActiveDescendantID: n,
                          ariaAutoComplete: a,
                          ariaControls: r,
                          ariaLabel: i,
                          ariaMultiline: u,
                          blockRenderMap: o,
                          blockRendererFn: l,
                          customAttrs:
                            ((e = {}),
                            h()(e, w.a.NO_REFOCUS_ATTRIBUTE, 'true'),
                            h()(e, 'onKeyPress', f),
                            h()(e, 'onKeyUp', g),
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
                          placeholder: b,
                          ref: this._setEditorRef,
                          spellCheck: 'false' !== k,
                          stripPastedStyles: !(u && null != v && v.length),
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
      h()(A, 'defaultProps', {
        appTextSize: 'body',
        autoFocus: !1,
        keyCommandHandlers: {},
        maxNumberOfLines: 30,
        multiline: !0,
        numberOfLines: 6,
        onFocus: T.a,
        positionCursorAtEnd: !1,
        spellCheck: 'true',
      }),
        (A.propTypes = {})
      var I = function (e) {
        return { overflow: { backgroundColor: e.colors.red200 } }
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
        return m
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('ho0z'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        o = n('aWyx'),
        l = n('XnpN'),
        s = n('3XMw'),
        c = n.n(s),
        u = c.a.b5b7fb93,
        d = c.a.g755fcde,
        p = c.a.f6b1ff81
      t.a = function (e, t, n) {
        var a = e.type,
          r = e.name,
          i = e.participants,
          s = void 0 === i ? {} : i
        if (a === o.a.GROUP && r) return r
        if (s.length) {
          if (a === o.a.GROUP && n) return u
          var c = Object(l.a)(e, t).map(function (e) {
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
            var l = r()(a, 1),
              s = l[0]
            return n === o.a.GROUP ? p({ name: s }) : s
          default:
            var c = !0
            return Object(i.a)(a, c)
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
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        k = n('nT9l'),
        S = n('3XMw'),
        E = n.n(S),
        C = 'image',
        w = n('TIdA'),
        T = n('a6qo'),
        R = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        x = E.a.f93bb3ee,
        F = (function (e) {
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
                  c = o()(i, R)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(
                    w.a,
                    r()({}, c, { accessibilityLabel: l, onVariantSelection: n, previewMode: a, testID: C }),
                  ),
                  s ? b.a.createElement(T.a, { align: 'left', altLabel: l }) : null,
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
        h,
        f,
        g,
        v,
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
                                  (h = {
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
                                      (f = {
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
                      (_ = {
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
                                  (b = {
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
                                selections: [b, h],
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
                                  b,
                                  { kind: 'InlineFragment', selections: [i, o, f, k], type: 'User', abstractKey: null },
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
                      _,
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
      ;(E.hash = '05c5ace285646279f5426d235fdf2b26'), (t.default = E)
    },
    qBaR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
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
        h = d.a.h810143c,
        f = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            a = e.link,
            i = e.style,
            o = r.a.createElement(m.a, null)
          return r.a.createElement(p.a, {
            accessibilityLabel: t || h,
            hoverLabel: { label: h },
            icon: o,
            key: n,
            link: a,
            pullRight: !0,
            style: i,
            type: 'primaryText',
          })
        },
        g = n('M2mT'),
        v = n('rHpw'),
        y = n('aITJ'),
        _ = n('MWbm'),
        b = n('OhSZ'),
        k = n('zCf4'),
        S = { viewType: 'messages' },
        E = d.a.d4986f85,
        C = d.a.e3e58b6d,
        w = d.a.a9ddbb94
      function T(e) {
        var t,
          n,
          a,
          u,
          d,
          p,
          m = r.a.useContext(i.a),
          h = Object(k.f)(),
          v = Object(k.g)(),
          T = m.featureSwitches.isTrue('dm_vdl_enabled') && m.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
          x = e.conversation,
          F = e.conversationId,
          A = e.newConversationParticipants,
          I = e.perspective,
          O = function (e) {
            null != x && x.trusted ? h.push({ pathname: '/messages', state: v.state }) : e()
          },
          M = function () {
            var e,
              t = (null == x ? void 0 : x.type) === l.CONVERSATION_TYPE.GROUP,
              n = (null == v || null === (e = v.state) || void 0 === e ? void 0 : e.position) || 0
            return F
              ? r.a.createElement(
                  _.a,
                  { style: R.rightControlStyles },
                  r.a.createElement(f, {
                    accessibilityLabel: t ? w : C,
                    conversationId: F,
                    link: { pathname: '/messages/'.concat(F, '/info'), state: { position: n } },
                    style: R.infoButton,
                  }),
                )
              : void 0
          }
        return r.a.createElement(
          g.a,
          ((t =
            x && x.participants.length
              ? Object(b.a)({ conversation: x, perspective: I })
              : A
              ? Object(b.a)({ newConversationParticipants: A, perspective: I })
              : E),
          (n =
            x && x.participants.length
              ? r.a.createElement(b.b, { conversation: x, perspective: I, withScreenName: !1 })
              : A
              ? r.a.createElement(b.b, { newConversationParticipants: A, perspective: I, withScreenName: !1 })
              : E),
          (a = T ? 'large' : 'medium'),
          (u = I ? r.a.createElement(s.a, { conversation: x, perspective: I, size: a }) : void 0),
          (d =
            x &&
            x.type === l.CONVERSATION_TYPE.ONE_TO_ONE &&
            I &&
            Object(c.a)(x, I).map(function (e) {
              return e.user.screen_name
            })),
          (p = d ? '@'.concat(d[0]) : void 0),
          {
            backLocation: '/messages',
            onBackClick: O,
            documentTitle: t,
            rightControl: M(),
            title: n,
            titleIconCell: u,
            titleIconCellSize: a,
            subtitle: p,
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: y.b.isKaiOS(),
          }),
          r.a.createElement(o.a, { behavioralEventContext: S }, e.children),
        )
      }
      var R = v.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
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
        o = n.n(i),
        l = n('MWbm'),
        s = n('CKsB'),
        c = n('/yvb'),
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        h = o.a.fcd4d489,
        f = o.a.gbed8594,
        g = o.a.g9074da4,
        v = o.a.ad63377d,
        y = o.a.h09b49f7,
        _ = o.a.i6b19b07,
        b = o.a.j7bb1a42,
        k = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        E = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            a = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            u = e.onReportClick,
            E = e.requestorScreenName,
            w = e.showBlock,
            T = e.showCancel,
            R = e.showDelete,
            x = r.a.useCallback(
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
            { accessibilityRole: 'dialog', style: n ? C.flatCorners : C.roundCorners },
            R
              ? r.a.createElement(s.a, {
                  Icon: d.a,
                  actionSubText: y,
                  actionText: a ? g : v,
                  onClick: A,
                  textColor: 'red500',
                })
              : null,
            w
              ? r.a.createElement(s.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: E }), onClick: F })
              : null,
            r.a.createElement(s.a, {
              Icon: m.a,
              actionSubText: k,
              actionText: a ? _ : b({ screenName: E }),
              onClick: x,
            }),
            T ? r.a.createElement(c.a, { onPress: t, style: C.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      E.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var C = u.a.create(function (e) {
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
        o = n.n(i),
        l = n('VrFO'),
        s = n.n(l),
        c = n('Y9Ll'),
        u = n.n(c),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        g = n.n(f),
        v = n('KEM+'),
        y = n.n(v),
        _ = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        b = n.n(_),
        k = n('1YZw'),
        S = n('zh9S'),
        E = n('P1r1'),
        C = n('AspN'),
        w = n('rxPX'),
        T = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: E.j }
          })
          .propsFromActions(function () {
            return {
              addMedia: C.b,
              addToast: k.b,
              processMultipleMedia: C.g,
              removeMediaUpload: C.i,
              scribeAction: S.c,
              preUploadMedia: C.e,
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
            l = e.style,
            s = b.a.useContext(x.a)
          return i
            ? b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(F.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l }, a),
              )
            : b.a.createElement(
                A.a.BottomComposer,
                null,
                b.a.createElement(I.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return b.a.createElement(
                    F.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: r, style: l })),
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
            u()(n, [
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
                      style: [U.root, n && U.isWide, !n && U.isNarrow],
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
        U = O.a.create(function (e) {
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
        j = n('cHvH'),
        H = n('mw9i'),
        W = (function (e) {
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
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.quickReplyOptions.options,
                    n = 1 === t.length
                  return b.a.createElement(j.a, null, function (a) {
                    var r = a.windowWidth,
                      i = D.a.isTwoColumnLayout(r),
                      o = [i && V.isWide, i && n && V.oneButtonOnly, !i && V.isNarrow]
                    return b.a.createElement(
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
        z = W,
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
          h()(n, e)
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
      function oe(e) {
        var t = e.isSending,
          n = e.isUploading,
          a = e.progress
        return t && !n ? b.a.createElement(ie, null) : b.a.createElement(ae.a, { progress: t ? Math.max(a, 0.02) : 0 })
      }
      var le = b.a.memo(oe),
        se = n('Dtul'),
        ce = n('Es6L'),
        ue = 'dmComposerAttachments',
        de = 'dmComposerTextInput',
        pe = 'dmComposerSendButton',
        me = n('GZwR'),
        he = n('aITJ'),
        fe = n('6OUF'),
        ge = n('9Xij'),
        ve = n('/yvb'),
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
        we = function () {
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
      we.metadata = { width: 24, height: 24 }
      var Te = we,
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
                  ? b.a.createElement(z, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
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
                  i = he.b.isKaiOS() ? Ae : a || Fe,
                  l = c.state,
                  s = l.editorState,
                  u = l.mediaButtonsCollapsible,
                  d = l.value,
                  p = !!r,
                  m = r ? { editorState: s, element: r.element } : void 0,
                  h = r
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: s, element: r.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return b.a.createElement(
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
                      testID: de,
                      useCacheForDOMMeasurements: !c._isSendDisabled() && !u,
                      value: d,
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
                  u = l.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  m = null == p ? void 0 : p.altText,
                  h = null == p ? void 0 : p.defaultAltText,
                  f = Object(be.b)(o)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  d
                    ? b.a.createElement(
                        F.a,
                        { style: Pe.attachmentContainer, testID: ue },
                        b.a.createElement(
                          ge.a,
                          { ratio: u / s, style: Pe.aspectContainer },
                          b.a.createElement(
                            F.a,
                            { style: Pe.mediaPreviewContainer },
                            b.a.createElement(ee.a, {
                              accessibilityLabel: m || h,
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
                return c.props.withEmojiPicker && he.b.isDesktopOS()
                  ? b.a.createElement(q.a, {
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
                  o = b.a.createElement(
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
                  : b.a.createElement(
                      ye.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              y()(p()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return b.a.createElement(ve.a, {
                  accessibilityLabel: Ie,
                  icon: e ? b.a.createElement(Ce, null) : b.a.createElement(Te, null),
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
                  return b.a.createElement(
                    M,
                    {
                      accessibilityLabel: l,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: s,
                      style: [Pe.root, c && Pe.dtabOffset, o],
                    },
                    b.a.createElement(le, { isSending: n, isUploading: a, progress: n ? Math.max(r, 0.02) : 0 }),
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
      t.a = T.forwardRef(De)
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
