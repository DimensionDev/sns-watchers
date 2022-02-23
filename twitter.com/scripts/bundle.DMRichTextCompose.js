;(window.webpackJsonp = window.webpackJsonp || []).push([
  [51, 232],
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
    '/FNr': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DmConversationTimelineQuery', function () {
          return R
        }),
        n.d(t, 'default', function () {
          return k
        })
      var r = n('yiKp'),
        a = n.n(r),
        i = (n('lTEL'), n('7x/C'), n('kYxP'), n('wFPu'), n('uFXj'), n('zh9S')),
        o = n('ERkP'),
        s = n.n(o),
        c = n('i4Oy'),
        l = n('mw9i'),
        u = n('4AMG'),
        d = n('sl05')
      function p(e) {
        var t = e.conversation,
          n = e.isWide,
          r = e.perspective
        return s.a.useCallback(
          function (e) {
            return t
              ? s.a.createElement(
                  l.a,
                  { style: d.a.root },
                  s.a.createElement(u.a, {
                    conversation: t,
                    inboxType: 'primary',
                    isWide: n,
                    onHistoryRequest: function () {},
                    perspective: r,
                    scribeNamespace: {},
                    style: d.a.activity,
                  }),
                )
              : null
          },
          [t, n, r],
        )(e)
      }
      var m,
        h = n('qBaR'),
        f = n('v//M'),
        v = (n('enFi'), n('NjAB')),
        g = n('z2Pn'),
        y = n('rHpw'),
        _ = n('pNZL'),
        b = n('n0Rl'),
        E = n('h3MB'),
        S = n('zCf4'),
        C = { page: 'messages', section: 'thread' },
        R = void 0 !== m ? m : (m = n('GjeS')),
        w = Object(b.b)(R, { errorConfig: { context: 'DM_CONVERSATION_TIMELINE' } })
      function k(e) {
        var t = e.richTextInputContext,
          n = e.typeaheadWrapper,
          r = Object(S.f)(),
          o = Object(S.g)(),
          l = Object(S.h)().conversationId
        s.a.useEffect(function () {
          i.d(C), i.a(C), Object(_.b)(C)
        }, []),
          s.a.useEffect(
            function () {
              Object(g.h)(o.pathname)
            },
            [o.pathname],
          )
        var u = s.a.useCallback(
          function (e) {
            var i = e.fetchStatus,
              l = e.retry,
              u = (function (e) {
                var t, n, r, i, o
                if (!e) return null
                var s =
                  null == e ||
                  null === (t = e.dm_conversation_by_rest_id) ||
                  void 0 === t ||
                  null === (n = t.legacy_conversation_slice) ||
                  void 0 === n
                    ? void 0
                    : n.items
                if (!s || !s.length) return null
                var c,
                  l =
                    null === (r = s[0]) ||
                    void 0 === r ||
                    null === (i = r.dm_event) ||
                    void 0 === i ||
                    null === (o = i.legacy) ||
                    void 0 === o
                      ? void 0
                      : o.conversation,
                  u = Object(v.b)(s, [E.b]).entities.entries,
                  d = Object(v.b)([l], [E.a]).entities.conversations
                for (var p in d) {
                  c = d[p]
                  break
                }
                var m = []
                for (var h in u) m.push(u[h])
                return m.reverse(), a()(a()({}, c), {}, { entries: m, social_proof: [] })
              })((null == e ? void 0 : e.data) || null),
              d = 'string' == typeof o.query.text ? o.query.text : void 0,
              m = c.a.get('window').width >= y.a.theme.breakpoints.small
            return s.a.createElement(f.a, {
              fetchStatus: i,
              onRequestRetry: l,
              render: function () {
                return u
                  ? s.a.createElement(
                      h.a,
                      {
                        conversation: u,
                        conversationId: u.conversation_id,
                        newConversationParticipants: [],
                        perspective: '',
                      },
                      s.a.createElement(p, {
                        conversation: u,
                        history: r,
                        isWide: m,
                        perspective: '',
                        prefillText: d,
                        richTextInputContext: t,
                        typeaheadWrapper: n,
                      }),
                    )
                  : null
              },
            })
          },
          [r, o.query.text, t, n],
        )
        return l ? s.a.createElement(w, { fetchPolicy: 'store-and-network', render: u, variables: { id: l } }) : null
      }
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
                    var l, u
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
                      var d = a(e),
                        p = a(t)
                    } catch (m) {
                      return !1
                    }
                    if (d.length != p.length) return !1
                    for (d.sort(), p.sort(), l = d.length - 1; l >= 0; l--) if (d[l] != p[l]) return !1
                    for (l = d.length - 1; l >= 0; l--) if (((u = d[l]), !o(e[u], t[u], n))) return !1
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
    '21nk': function (e, t, n) {
      'use strict'
      var r = n('I9iR'),
        a = n('3KVO'),
        i = n('yLYC'),
        o = n('Ud88'),
        s = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        c = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        l = c.fetchQueryDeduped,
        u = c.fetchQuery
      e.exports = function (e, t, n) {
        s()
        var c,
          d = o(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          h = t.source,
          f = t.variables,
          v = t.networkCacheConfig,
          g = i(e, f, v)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          g.request.node.params.name !== t.name && r(!1),
            (c = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: l(d, g.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: g, source: h })
                  : d.execute({ operation: g })
              }),
              fetchPolicy: m,
              query: g,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var y = u(d, g)
          c = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(y) : (t.environment, y),
            fetchKey: p,
            fetchPolicy: m,
            query: g,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return a(c)
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
        return Mo
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = n('ejT/'),
        v = n('ERkP'),
        g = n.n(v),
        y = n('yiKp'),
        _ = n.n(y),
        b = n('7n04'),
        E = n('Myq3'),
        S = n('VPAj'),
        C = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        R = function (e) {
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
          return _()(
            _()({}, b.a),
            {},
            {
              initialScrollHeadroom: Object(S.a)(0),
              scrollHeadroom: Object(S.a)(0),
              offsetCorrection: function (e, a) {
                var i = r(e),
                  o = r(a),
                  s = o && (!i || i.id !== o.id),
                  c = o && t(o.data.data),
                  l = i && C(e, i.id)
                return (s && (c || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        a = t.getForItem(n)
                      return !r || (a && a.getHeight() > r.getHeight())
                    })(e, a))
                  ? Math.max(0, R(a))
                  : b.a.offsetCorrection(e, a)
              },
            },
          )
        },
        k = (n('lTEL'), n('7x/C'), n('kYxP'), n('KOtZ'), n('gbD7')),
        x = (n('Blm6'), n('b9JY')),
        T = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(x.b)(e) && Object(x.b)(t)) {
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
        A = n('jat/'),
        I = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        O = n('XnpN'),
        M = n('LhSm'),
        L = n('I4+6'),
        P = n('rHpw'),
        F = n('PbQQ'),
        D = n('cm6r'),
        B = n('jV+4'),
        N = n('pBrB'),
        j = n('wCd/'),
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
        H = P.a.create(function (e) {
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
            u = i.userIdStr,
            d = i.userIsVerified,
            p = i.userJoinDate,
            m = i.userName,
            h = i.userScreenName,
            f = i.userWithheldDescription,
            v = i.userWithheldEntities,
            y = !!(m && h && ((c && l) || p)),
            _ = L.a.generate({
              color: P.a.theme.colors.text,
              backgroundColor: P.a.theme.colors.transparent,
              customFocusBackgroundColor: P.a.theme.colors.gray0,
              customHoverBackgroundColor: P.a.theme.colors.gray0,
              customPressedBackgroundColor: P.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(F.a.Consumer, null, function (e) {
            return g.a.createElement(
              D.a,
              {
                interactiveStyles: _,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [H.root, r && y && H.borderBottom],
              },
              g.a.createElement(B.a, {
                isVerified: d,
                name: m,
                screenName: h,
                style: H.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && u
                ? g.a.createElement(N.a, {
                    description: o,
                    entities: s,
                    style: [H.profileInfoItemMargin, H.description],
                    userId: u,
                    withheldDescription: f,
                    withheldEntities: v,
                  })
                : null,
              c && l
                ? g.a.createElement(j.a, {
                    followersCount: c,
                    friendsCount: l,
                    screenName: h || '',
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
        K = n('MMRb'),
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
            r = e.style
          return g.a.createElement(J.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        ne = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.entry,
                  a = t.entryType,
                  i = t.perspective,
                  o = t.users,
                  s = Object(ee.a)(r, a, i, o)
                switch (a) {
                  case Q.b.CONVERSATION_AVATAR_UPDATE:
                    var c = n.avatar_image_https === r.conversation_avatar_image_https
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && c
                        ? g.a.createElement(
                            X.a,
                            { style: re.conversationAvatarContainer },
                            g.a.createElement(G.a, { conversation: n, perspective: i }),
                          )
                        : null,
                      g.a.createElement(te, null, s),
                    )
                  case Q.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(s),
                      u = e._getParticipantsFromEntry(),
                      d = g.a.createElement(
                        J.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return g.a.createElement(g.a.Fragment, null, l, p)
                  default:
                    return g.a.createElement(te, null, s)
                }
              }),
              h()(c()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.users,
                  i = r.sender_id ? a[r.sender_id] : void 0,
                  o = i ? { pathname: 'https://twitter.com/'.concat(i.screen_name) } : void 0
                return g.a.createElement(
                  D.a,
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
              h()(c()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  a = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  D.a,
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
                  return !Object(Y.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(X.a, { style: re.root }, this._renderContents())
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
        ae = Object(q.a)(ne),
        ie = n('ddV6'),
        oe = n.n(ie),
        se = (n('+KXO'), n('oQhu'))
      var ce = Object(se.a)(function (e) {
          var t = P.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + P.a.theme.spacesPx.space12,
          }
        }),
        le = n('shC7'),
        ue = n('38/B'),
        de = function (e) {
          return pe(e, ue.a.reducedMotionEnabled)
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
            u,
            d =
              ((n = ce(P.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (a = n.DMUserAvatarSpacerPx),
              (i = ve[P.a.theme.scale]),
              (o = he / i),
              (s = fe / r),
              (l = fe - (c = fe / 2)),
              (u = fe - c - a),
              {
                cssTransition: ue.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(ye, ', opacity ').concat(ye) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (le.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (le.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (le.a.getConstants().isRTL ? 1 : -1) * ge[P.a.theme.scale] }] },
                    received: {
                      transform: [{ translateX: (le.a.getConstants().isRTL ? -1 : 1) * (ge[P.a.theme.scale] + u) - c }],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: i }, active: { height: he } },
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
                r = [d.cssTransition, d.actionsContainer.base]
              return n && r.push(t ? d.actionsContainer.active.sent : d.actionsContainer.active.received), r
            },
            messageContainer: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [d.cssTransition, d.messageContainer.base]
              return n && r.push(t ? d.messageContainer.active.sent : d.messageContainer.active.received), r
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
                r = [d.cssTransition, d.voiceMessage.base]
              return (
                n &&
                  (r.push(d.voiceMessage.active.base),
                  r.push(t ? d.voiceMessage.active.sent : d.voiceMessage.active.received)),
                r
              )
            },
            userAvatar: function (e) {
              var t = e.isSent,
                n = e.isVoiceMessageActive,
                r = [d.cssTransition, d.userAvatar.base, t ? d.userAvatar.sent : d.userAvatar.received]
              return n ? r.push(d.userAvatar.active) : t && r.push(d.userAvatar.visuallyHidden), r
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
        ye = '0.2s 0s ease-in-out',
        _e = n('+Kfv'),
        be = n('hqKg'),
        Ee = n('oEGd'),
        Se = n('zh9S'),
        Ce = function (e) {
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
        },
        Re = n('G6rE'),
        we = n('P1r1'),
        ke = { scribeAction: Se.c },
        xe = Object(be.createSelector)(
          function (e, t) {
            return Re.e.select(e, t.senderId)
          },
          we.l,
          we.r,
          function (e, t, n) {
            return { user: Ce(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Te = Object(Ee.g)(xe, ke),
        Ae = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Ie = n('rxPX'),
        Oe = n('0KEI'),
        Me = n('RqPI'),
        Le = Object(Ie.a)()
          .propsFromState(function () {
            return { reporterCountry: Me.y, reporterLanguage: Me.o }
          })
          .propsFromActions(function () {
            return {
              addToast: Ae.b,
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: K.deleteEntry,
            }
          })
          .withAnalytics(),
        Pe = n('k49u'),
        Fe = n('LVU8'),
        De = n('3XMw'),
        Be = n.n(De),
        Ne = Be.a.f58dff33,
        je = Be.a.ad5a8e8e,
        Ue =
          ((me = {}),
          h()(me, Pe.a.MissingParameter, { toast: Object(Fe.a)(Ne) }),
          h()(me, Pe.a.DirectMessageDestroyPermissionsError, { toast: { text: je } }),
          h()(me, 'showToast', !0),
          me),
        He = (n('jQ3i'), n('x4t0'), n('xCUF')),
        We = n('uKEd'),
        Ve = [],
        ze = Object(be.createSelector)(
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
                  var r = e[t] && e[t].data
                  return r && r.sender_id === n
                })
                .map(function (t) {
                  return e[t].data.reaction_key
                }),
            }
          },
        ),
        Ke = {
          createReaction: We.d,
          createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: He.d,
          removeReaction: We.k,
        },
        qe = Object(Ee.g)(ze, Ke),
        Ge = n('X/yg'),
        Qe = n('RhWx'),
        Ye = n.n(Qe),
        Xe = n('33Kz'),
        Je = n('wTX1'),
        Ze = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            a = e.emotion,
            i = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            c = e.style,
            l = g.a.useContext(I.a).featureSwitches,
            u = Object(Xe.b)(a, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = L.a.generate({ backgroundColor: P.a.theme.colors.gray50, color: P.a.theme.colors.gray700 })
          return g.a.createElement(
            D.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: s,
              style: [$e.container].concat(Ye()(c || [])),
            },
            g.a.createElement(J.b, { size: r, style: $e.unsetLineHeight }, u),
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
        rt = Be.a.fc0e94b7,
        at = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_handleReactionScribing', function (t, n) {
                var r = e.props,
                  a = r.analytics,
                  i = r.entry,
                  o = r.isGroupDM,
                  s = r.participantsCount,
                  c = n ? 'delete_reaction' : 'create_reaction',
                  l = Object(Ge.c)(i)
                a.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: c,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? et.h.GROUP : et.h.ONE_TO_ONE,
                    message_type: l,
                    reaction_emotion: t,
                  },
                })
              }),
              h()(c()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.createLocalApiErrorHandler,
                    i = r.createReaction,
                    o = r.dismiss,
                    s = r.entry,
                    c = r.fetchUpdatesIfNeeded,
                    l = r.perspective,
                    u = r.removeReaction,
                    d = { reaction_key: t, conversation_id: s.conversation_id, dm_id: s.id, perspective: l }
                  ;(n ? u : i)(d)
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
                    n = Object(Xe.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return g.a.createElement(Ze, {
                        accessibilityLabelFormatter: r ? nt : rt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [ot.reaction, r && ot.selectedReaction],
                      })
                    })
                  return g.a.createElement(X.a, { style: ot.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(at, 'contextType', I.a)
      var it = Object(tt.a)(qe(at)),
        ot = P.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        st = n('OiMc'),
        ct = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_renderDMReactionPickerContent', function (t) {
                var n = e.props,
                  r = n.entry,
                  a = n.isGroupDM,
                  i = n.participantsCount,
                  o = n.perspective
                return g.a.createElement(it, {
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
      h()(ct, 'contextType', V.a)
      var lt = n('TnY3'),
        ut = n('mjJ+'),
        dt = n('Q0VY'),
        pt = n('eb3s'),
        mt = n('/yvb'),
        ht = n('ZToW'),
        ft = n('CaKu'),
        vt = n('i4Oy'),
        gt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        yt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = oe()(n, 2),
            a = r[0],
            i = r[1]
          return !((0 === a || 1 === a) && e.length === i)
        },
        _t = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return yt(t.text, r.indices)
          if (n.card) {
            var a,
              i = ((null === (a = t.entities) || void 0 === a ? void 0 : a.urls) || []).find(function (e) {
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
        Et = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        St = function (e, t, n) {
          var r = 1.25 * P.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        Ct = n('hiGS'),
        Rt = n('zIWA'),
        wt = n('Lsrn'),
        kt = n('k/Ka'),
        xt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(kt.a)(
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
      var Tt = xt,
        At = n('DlVf'),
        It = n('ACHU'),
        Ot = n('UgB4'),
        Mt = n('fz3c'),
        Lt = Be.a.ba60339a,
        Pt = Be.a.j4bfee22,
        Ft = Be.a.d96cf7cd,
        Dt = Be.a.faddd3a2,
        Bt = Be.a.eb497e08,
        Nt = Be.a.b170974a,
        jt = Be.a.i202bd22,
        Ut = Be.a.f2e5491a,
        Ht = Be.a.f88553c8,
        Wt = Be.a.ifea3114,
        Vt = Be.a.cac14829,
        zt = Be.a.h63a5c3b,
        Kt = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_renderOverflowMenu', function (e) {
                var t = i.props,
                  n = t.analytics,
                  r = t.entry,
                  a = t.featureSwitches,
                  o = t.isSent,
                  s = t.reporterCountry,
                  c = t.reporterLanguage,
                  l = Mt.a.DMMessage,
                  u = n.contextualScribeNamespace,
                  d = [{ text: Lt, Icon: Ct.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
                if (!o)
                  if (Object(Mt.g)(a, l, s, c)) {
                    var p,
                      m = Object(Mt.d)({
                        clientReferer: window.location.pathname,
                        isMedia: !1,
                        isPromoted: !1,
                        reportType: l,
                        reportedConversationId: r.conversation_id,
                        reportedMessageId: r.id,
                        reportedUser: null === (p = r.message_data) || void 0 === p ? void 0 : p.sender_id,
                        scribeNamespace: n.contextualScribeNamespace,
                      })
                    d.push({
                      text: jt,
                      Icon: Rt.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(m) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    d.push({
                      text: jt,
                      Icon: Rt.a,
                      link: {
                        pathname: '/i/report/'.concat(l, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: u,
                        },
                      },
                      onClick: i.props.onReportMessage,
                    })
                return (
                  ft.a.isAvailable() && d.push({ text: Ut, Icon: Tt, onClick: i._handleCopyMessageText }),
                  g.a.createElement(ut.a, {
                    isFixed: i.context.isDrawer,
                    items: d,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              h()(c()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (ft.a.setString(n), t({ text: Ht })), e && e()
              }),
              h()(c()(i), '_handleForwardButton', function () {
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
                    state: { tweetAttachment: _()(_()({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              h()(c()(i), '_handleSetActionsActive', function () {
                var e = i.props.setShouldFreezeUpdates
                i.setState({ actionsAreActive: !0 }), e(!0)
              }),
              h()(c()(i), '_handleDelete', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  r = e.deleteEntry,
                  a = e.entry,
                  o = e.inboxType,
                  s = e.isGroupDM,
                  c = e.participantsCount,
                  l = Object(Ge.c)(a)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: a.conversation_id,
                    conversation_type: s ? et.h.GROUP : et.h.ONE_TO_ONE,
                    conversation_participant_count: c,
                    message_type: l,
                    inbox_type: Object(Ge.h)(o),
                  },
                }),
                  r({ conversationId: a.conversation_id, id: a.id }).catch(n(Ue))
              }),
              h()(c()(i), '_handleHideDeleteConfirmation', function () {
                i.setState({ showDeleteConfirmation: !1 })
              }),
              h()(c()(i), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e && e(), i.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              h()(c()(i), '_handlePressReactionPickerButton', function () {
                var e = i.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(Ge.c)(n), action: 'click' }),
                  i._handleSetActionsActive()
              }),
              h()(c()(i), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = i.props.setShouldFreezeUpdates
                  e(), i.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              h()(c()(i), '_replaceMessageUrls', function () {
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
                    r = n.entry,
                    a = n.isSent,
                    i = n.shouldShowReactionButton,
                    o = n.style,
                    s = n.withVDLRefresh,
                    c = this._areActionsVisible()
                  return g.a.createElement(
                    X.a,
                    {
                      pointerEvents: c ? 'auto' : 'none',
                      style: [
                        Gt.messageActions,
                        a ? Gt.messageActionsLeft : Gt.messageActionsRight,
                        c ? Gt.visible : Gt.invisible,
                        s && Gt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? Gt.messageActionsMediaNarrow : Gt.messageActionsNarrow),
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
                    ? g.a.createElement(pt.a, {
                        confirmButtonLabel: Ft,
                        confirmButtonType: 'destructiveFilled',
                        headline: Pt,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: Dt,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return g.a.createElement(mt.a, {
                    accessibilityLabel: Wt,
                    hoverLabel: { label: Wt },
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
                    r = e.participantsCount,
                    a = e.perspective,
                    i = e.withVDLRefresh,
                    o = this.state.actionsAreActive,
                    s = g.a.createElement(At.a, { style: i ? Gt.vdlActionIcon : Gt.actionIcon })
                  return g.a.createElement(
                    ct,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: a,
                    },
                    g.a.createElement(mt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: Nt,
                      hoverLabel: { label: Vt },
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
                    t = g.a.createElement(It.a, { style: e ? Gt.vdlActionIcon : Gt.actionIcon })
                  return g.a.createElement(mt.a, {
                    accessibilityLabel: Bt,
                    hoverLabel: { label: zt },
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
                    s = ((e = this.props.entry), !_t(e) && bt(e) && !ht.a.isEnabled)
                  return !i && (s || (n && !ht.a.isEnabled) || r || a || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Kt, 'contextType', V.a)
      var qt = Object(lt.a)(Le(Kt)),
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
        Zt = Object(Ie.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: K.removeEntry,
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
        rn = function (e) {
          return Object(We.l)(e).entries
        },
        an = {
          createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        on = Object(Ee.e)(function () {
          return Object(be.createSelector)(rn, nn, Me.q, en.d, function (e, t, n, r) {
            var a,
              i = Object(Xe.a)(r, { includeInactive: !0 }),
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
          return Object(We.l)(e).entries
        },
        un = function (e, t) {
          return Object(We.p)(e, cn(0, t)) || sn
        },
        dn = function (e, t) {
          return Re.e.selectMany(
            e,
            (function (e, t) {
              return Object(We.q)(e, cn(0, t))
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
        mn = Object(Ee.e)(function () {
          return Object(be.createSelector)(ln, un, Me.q, dn, en.d, function (e, t, n, r, a) {
            var i = Object(Xe.a)(a, { includeInactive: !0 }),
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
            return s > -1 && o.push.apply(o, Ye()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, pn),
        hn = n('TIdA'),
        fn = n('htQn'),
        vn = Be.a.gf5e9ea6,
        gn = Be.a.a2d48778,
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
          var t = g.a.useContext(I.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            a = e.user,
            i = e.withBottomBorder,
            o = a.avatarUri,
            s = a.isProtected,
            c = a.isVerified,
            l = a.name,
            u = a.screenName,
            d = g.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = g.a.createElement(Z.a, { imageLayoutCache: yn, screenName: u, size: 'xxLarge', uri: o }),
            m = g.a.createElement(Ze, { emojiSize: 'title4', emotion: a.reactionKey, focusable: !1 }),
            h = g.a.createElement(B.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: c,
              name: l,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            fn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [_n.root, i && _n.bottomBorder] },
            g.a.createElement(X.a, { style: _n.reactionColumn }, m),
            g.a.createElement(X.a, { style: _n.column }, p),
            g.a.createElement(X.a, { style: _n.bodyColumn }, g.a.createElement(X.a, { style: _n.body }, h)),
            r
              ? g.a.createElement(
                  X.a,
                  { style: _n.column },
                  g.a.createElement(
                    mt.a,
                    {
                      accessibilityLabel: gn({ emoji: Object(Xe.b)(a.reactionKey, t) }),
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
        Cn = Be.a.b772cd65,
        Rn = Be.a.c0098d49,
        wn = Be.a.j85999eb,
        kn = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_renderContent', function (t, n) {
                return g.a.createElement(
                  X.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              h()(c()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(En.a, { title: Rn })
                  : g.a.createElement(J.b, { visuallyHidden: !0 }, Rn)
              }),
              h()(c()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  X.a,
                  { accessibilityLabel: wn, style: [xn.container, 'sheet' === n ? xn.sheet : xn.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(c()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    mt.a,
                    { key: 'button_done', onPress: e, style: xn.cancelButton, type: 'primaryOutlined' },
                    Cn,
                  )
                )
              }),
              h()(c()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return g.a.createElement(bn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: r !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              h()(c()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    a = r.conversationId,
                    i = r.createLocalApiErrorHandler,
                    o = r.entryId,
                    s = r.fetchUpdatesIfNeeded,
                    c = r.loggedInUserId,
                    l = r.removeReaction,
                    u = { reaction_key: t, conversation_id: a, dm_id: o, perspective: c }
                  n(), l(u).then(e._handleScribeRemoveReaction(t)).then(s).catch(i())
                }
              }),
              h()(c()(e), '_handleScribeRemoveReaction', function (t) {
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
      h()(kn, 'contextType', V.a)
      var xn = P.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Tn = Object(lt.a)(Object(tt.a)(mn(kn))),
        An = Be.a.h95f9e76,
        In = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(c()(r), '_handleScribeDMReactionSummary', function () {
                r.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              h()(c()(r), '_onSetReactionsNode', function (e) {
                r._measureWidths(e || void 0)
              }),
              h()(c()(r), '_renderReactions', function (e) {
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
                  return g.a.createElement(Ze, {
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
                  var s = L.a.generate({ backgroundColor: P.a.theme.colors.gray50, color: P.a.theme.colors.gray700 }),
                    c = An({ reactionCount: i })
                  return g.a.createElement(
                    X.a,
                    {
                      style: [
                        On.container,
                        r ? On.marginShort : On.marginLong,
                        a ? On.alignRight : On.alignLeft,
                        o ? On.visible : On.invisible,
                      ],
                    },
                    g.a.createElement(
                      Tn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        D.a,
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
                  this.setState(_()({}, n))
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
        Mn = Object(tt.a)(on(In)),
        Ln = n('Xrkv'),
        Pn = Be.a.icd0bf34,
        Fn = Be.a.e8bd8fec,
        Dn = Be.a.b2d32fad,
        Bn = Be.a.a763d33e,
        Nn = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var r
            return (
              a()(this, n),
              (r = t.call(this, e)),
              h()(c()(r), '_handlePress', function (e) {
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
                    X.a,
                    { style: jn.root },
                    g.a.createElement(
                      J.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: jn.seenLabel },
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
                  return n ? (t ? Dn : Pn) : r.length ? Bn({ count: r.length }) : Fn
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
                        Be.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(J.b, null, n),
                        g.a.createElement(
                          J.b,
                          { color: 'link', onPress: e._handlePress },
                          Be.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Ln.a)(t, n)
                  return g.a.createElement(
                    J.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: jn.namesList },
                    n ? g.a.createElement(a, { namesList: i, othersCount: r }) : g.a.createElement(J.b, null, i),
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
        Un = Nn,
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
              u = s && 1 !== Object(Hn.a)(t, s),
              d = !o || 1 !== Object(Hn.a)(o, t)
            return l && u && d && e.push(c), e
          }, [])
        },
        zn = n('IMYl'),
        Kn = n('21zW'),
        qn = n('gmpV'),
        Gn = Be.a.fad48ee9,
        Qn = Be.a.ba60339a,
        Yn = Be.a.d338f53e,
        Xn = Be.a.ae7d7a24,
        Jn = Be.a.d725a288,
        Zn = Be.a.bbe74f3f,
        $n = Be.a.h0e4cdf4,
        er = Be.a.bfbc051c,
        tr = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryId
                ;(0, t.removeEntry)(n, null, { id: r })
              }),
              h()(c()(e), '_handleTryAgain', function () {
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
                    u = r || a || c || l,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    g.a.createElement(
                      X.a,
                      { style: [nr.root, d && nr.vdlRootMargin, t && nr.sentMessage] },
                      r,
                      a,
                      c,
                      l
                        ? g.a.createElement(
                            D.a,
                            { interactiveStyles: null, onPress: n, style: t && nr.sentContainer },
                            g.a.createElement(X.a, { style: t && nr.groupedItems }, i, s),
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
                          Qn,
                        ),
                        g.a.createElement(Kn.a, null),
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
                    r = e.isLastRapidFire,
                    a = e.isRapidFire,
                    i = e.isSent,
                    o = e.withUserAvatar,
                    s = !a || r
                  return t
                    ? g.a.createElement(
                        X.a,
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
                    ? g.a.createElement(Un, Xt()({ isGroupDM: i }, Wn({ entryId: t, participants: s, user: c })))
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
                  var u,
                    d = new Date(Number(t))
                  u = Object(qn.c)(d) ? Jn(d) : Object(qn.d)(d) ? Zn({ time: Jn(d) }) : Object(qn.e)(d) ? $n(d) : er(d)
                  var p = a && !s,
                    m = s ? 'right' : 'left'
                  return g.a.createElement(
                    X.a,
                    { style: [l && nr.footerPadderWithAvatar, s && nr.timestamp] },
                    g.a.createElement(
                      J.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !ht.a.isEnabled },
                      p &&
                        g.a.createElement(
                          Be.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement(J.b, null, c),
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
      h()(tr, 'contextType', I.a)
      var nr = P.a.create(function (e) {
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
        rr = Zt(tr),
        ar = n('jtO7'),
        ir = P.a.create(function (e) {
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
            X.a,
            { style: c },
            g.a.createElement(ar.a, { align: 'center', color: 'primary', label: a, link: s, onClick: i }),
          )
        },
        sr = n('fs1G'),
        cr = (function (e) {
          u()(n, e)
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
                  return g.a.createElement(X.a, null, o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(cr, 'defaultProps', { onCtaClick: sr.a, onImpression: sr.a })
      var lr = cr,
        ur = (n('1IsZ'), n('vjRr')),
        dr = n('EGrD'),
        pr = function (e, t) {
          return ur.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        mr = Object(Ie.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: dr.c, card: pr }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Oe.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: dr.a,
              loadAdFreeArticleDomainsFromPersistence: dr.b,
              popOutConversation: K.popOutConversation,
            }
          }),
        hr = P.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        fr = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            a = void 0 === r || r,
            i = e.textContent
          return g.a.createElement(X.a, { style: [a ? hr.visible : hr.invisible, hr.root] }, n, t, i)
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
            u = e.hasAssociatedAttachment,
            d = e.messageData,
            p = void 0 === d ? {} : d,
            m = e.rootStyle,
            h = e.tweetId,
            f = e.withCta,
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            _ = g.a.useContext(I.a).featureSwitches,
            b = _.isTrue('dm_vdl_enabled') && _.isTrue('dm_vdl_chat_p0_enabled'),
            E = [
              m,
              y && yr.messageTextContainer,
              y && l && yr.sent,
              y && !l && yr.received,
              a && yr.failedDraft,
              c && !o && !l && yr.rapidFireReceived,
              c && !o && l && yr.rapidFireSent,
              u && l && yr.hasAssociatedAttachmentSent,
              u && !l && yr.hasAssociatedAttachmentReceived,
              y && b && l && yr.vdlSent,
              y && r && l && yr.activeSent,
              y && b && r && l && yr.vdlActiveSent,
              y && r && !l && !ht.a.isEnabled && yr.activeReceived,
              f && yr.withCta,
            ],
            S = [yr.tweetText, y && yr.textAlignLeft, !y && l && yr.textAlignRight],
            C = P.a.theme.colors,
            R = C.gray0,
            w = C.magenta500,
            k = C.primary,
            x = C.text,
            T = C.white,
            A = L.a.generate({ color: l ? T : x, backgroundColor: a ? w : l ? k : R }),
            O = (p.text && p.text.length) || 0
          return g.a.createElement(
            D.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: y ? A : null, style: E },
            g.a.createElement(vr.a, {
              color: P.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, O],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && l) || P.a.isDarkMode() ? 'whiteOnColor' : 'link',
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
        yr = P.a.create(function (e) {
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
      var _r = gr,
        br = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            r = e.isFailedDraft,
            a = e.isFirstRapidFire,
            i = void 0 !== a && a,
            o = e.isRapidFire,
            s = void 0 !== o && o,
            c = e.isSent,
            l = e.messageData,
            u = e.withCta,
            d = e.withMessageBubble
          return g.a.createElement(_r, {
            isActive: n,
            isFailedDraft: r,
            isFirstRapidFire: i,
            isRapidFire: s,
            isSent: c,
            messageData: l,
            withCta: u,
            withMediaLinks: !0,
            withMessageBubble: d,
          })
        },
        Er = n('LSr9'),
        Sr = n('aX4+'),
        Cr = n('/Ikv'),
        Rr = Cr.a.CardNames,
        wr = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e, r
            a()(this, n)
            for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              h()(c()(r), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(
                c()(r),
                '_hasClaimsForAdFreeArticles',
                null === (e = r.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              h()(c()(r), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  r.setState(n)
                }
              }),
              h()(c()(r), '_handleOnClick', function (e) {
                var t = r.props,
                  n = t.card.binding_values,
                  a = t.conversationId,
                  i = t.popOutConversation
                if ((a && i(a), r._hasClaimsForAdFreeArticles)) {
                  var o = r.props,
                    s = o.adFreeArticleDomains,
                    c = o.createLocalApiErrorHandler,
                    l = o.fetchAdFreeToken,
                    u = new Er.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Cr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Cr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    d = oe()(u, 2),
                    p = d[0],
                    m = d[1]
                  p && m(e)
                }
              }),
              h()(c()(r), '_handleTextContentLayout', function (e) {
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    h = !!Object.values(Rr).includes(t.name),
                    f = St(n, p, m),
                    v = f.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    y =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    _ = g.a.createElement(
                      X.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Sr.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: c.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withBorderShadow: y,
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    b = n
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? kr.sentMessageWrapper : kr.receivedMessageWrapper,
                          },
                          g.a.createElement(_r, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: a,
                            isFirstRapidFire: i,
                            isRapidFire: o,
                            isSent: s,
                            messageData: c,
                            rootStyle: f.isTextSquared ? (s ? kr.textSentSquared : kr.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? g.a.createElement(fr, { attachmentContent: _, isVisible: f.compositeRendered, textContent: b })
                    : g.a.createElement(br, {
                        isActive: r,
                        isFailedDraft: a,
                        isFirstRapidFire: i,
                        isRapidFire: o,
                        isSent: s,
                        messageData: c,
                        withCta: l,
                        withMessageBubble: u,
                      })
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(wr, 'defaultProps', { hasUserText: !1 }), h()(wr, 'contextType', I.a)
      var kr = P.a.create(function (e) {
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
        xr = mr(wr),
        Tr = Be.a.f720438f,
        Ar = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(c()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  r = 'left'
                return t ? (r = 'both') : n && (r = 'right'), Ir[r]
              }),
              h()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              h()(c()(e), '_handleTextContentLayout', function (t) {
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
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!s || !s.attachment || !s.attachment.fleet) return null
                  var m = St(t, d, p),
                    h = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    v = m.isTextSquared,
                    y = [
                      Or.tombstoneWrapper,
                      o ? Or.sentMessageWrapper : Or.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    _ = g.a.createElement(
                      X.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      g.a.createElement(J.b, { color: 'gray700' }, Tr),
                    ),
                    b = t
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Or.sentMessageWrapper : Or.receivedMessageWrapper,
                              !l && Or.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(_r, {
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
                  return g.a.createElement(fr, { attachmentContent: _, isVisible: h, textContent: b })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        Ir = P.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Or = P.a.create(function (e) {
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
        Mr = Ar,
        Lr = (n('849X'), n('TJCb'), n('prG5')),
        Pr = n('RCZO'),
        Fr = n('A91F'),
        Dr = Be.a.b327c129,
        Br = function (e) {
          e.stopPropagation()
        },
        Nr = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || Dr,
            a = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            s = i.width,
            c = Object(Pr.b)(t).rgb,
            l = g.a.createElement(Lr.a, {
              accessibilityLabel: r,
              aspectMode: Fr.a.withinRange(9 / 16, 10),
              backgroundColor: c,
              image: { url: a, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(D.a, { interactiveStyles: null, link: n, onPress: Br }, l) : l
        },
        jr = n('Modb'),
        Ur = n('lklz'),
        Hr = n('XrEN'),
        Wr = n('ZvMt'),
        Vr = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && Hr.a.extractVideoProps(Ur.b.forDm(n), t)
          return r
            ? g.a.createElement(
                jr.a,
                Xt()({}, r, { aspectRatio: Wr.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        zr = Object(Ie.a)().withAnalytics(),
        Kr = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_handleLayout', function (e) {
                var t = e.nativeEvent.layout.width
                i.state.width !== t && i.setState({ width: t })
              }),
              h()(c()(i), '_getElement', function () {
                var e = i.props,
                  t = e.contentType,
                  n = e.isSensitive
                return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
              }),
              h()(c()(i), '_handleClick', function () {
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
                    s = i.width < P.a.theme.breakpoints.micro
                  return o
                    ? g.a.createElement(
                        X.a,
                        {
                          focusable: !0,
                          onLayout: this._handleLayout,
                          style: [
                            Gr.root,
                            s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            a && qr[a],
                          ],
                        },
                        g.a.createElement(X.a, { style: Gr.description }, g.a.createElement(J.b, null, r)),
                        g.a.createElement(
                          X.a,
                          { style: [Gr.button, s ? Gr.breakButtonWrapper : void 0] },
                          g.a.createElement(
                            mt.a,
                            { onClick: this._handleClick, size: 'small', style: Gr.buttonElement, type: 'brandText' },
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
      h()(Kr, 'defaultProps', { isSensitive: !1 })
      var qr = P.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Gr = P.a.create(function (e) {
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
        Qr = Object(tt.a)(zr(Kr)),
        Yr = n('CoGJ'),
        Xr = g.a.createElement(Yr.a, null),
        Jr = Be.a.d9de7b57,
        Zr = Be.a.f2879f4d,
        $r = Be.a.b518221e,
        ea = Be.a.eeaa9f90,
        ta = Be.a.g2b43663,
        na = Be.a.f277e949,
        ra = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              h()(c()(e), '_renderAttachment', function () {
                var t,
                  n,
                  r = e.props,
                  a = r.entry,
                  i = r.hasUserText,
                  o = r.isFirstRapidFire,
                  s = r.isRapidFire,
                  c = r.isSent,
                  l = r.isTrusted,
                  u = r.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  m = d.textContentWidth,
                  h = (u || {}).attachment,
                  f = a.is_draft,
                  v = St(i, p, m),
                  y = [
                    aa.mediaAttachment,
                    c && aa.isSent,
                    !c && aa.received,
                    c && v.isAttachmentSquared && aa.equalComponentDimensionsSent,
                    !c && v.isAttachmentSquared && aa.equalComponentDimensionsReceived,
                    s && !o && c && aa.rapidFireSent,
                    s && !o && !c && aa.rapidFireReceived,
                  ],
                  _ = null
                if (
                  (!f && a.conversation_id && (_ = '/messages/'.concat(a.conversation_id, '/media/').concat(a.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = g.a.createElement(Nr, { media: t, mediaUrl: _ }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = g.a.createElement(Vr, { media: t, messageId: a.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(Ge.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(Vr, { media: t, messageId: a.id })
                  }
                var b = v.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                  E = t && n && (c ? n : e._getMediaContentWithGuard(t, l, n, b))
                return {
                  attachmentContent: g.a.createElement(X.a, { onLayout: e._handleAttachmentLayout, style: y }, E),
                  media: t,
                }
              }),
              h()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var r = { attachmentWidth: n }
                  e.setState(r)
                }
              }),
              h()(c()(e), '_handleTextContentLayout', function (t) {
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
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    m = d.textContentWidth,
                    h = t.is_draft,
                    f = St(n, p, m),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    _ = v.media,
                    b = n
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? aa.sentMessageWrapper : aa.receivedMessageWrapper,
                          },
                          g.a.createElement(_r, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: a,
                            isFirstRapidFire: !!i,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: h ? c : this._parseMessageData(c, _),
                            rootStyle: f.isTextSquared ? (s ? aa.sentSquared : aa.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return g.a.createElement(fr, { attachmentContent: y, isVisible: f.compositeRendered, textContent: b })
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
                        Qr,
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
                      Qr,
                      {
                        contentType: e.type,
                        ctaText: na,
                        description: Xr,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : g.a.createElement(
                        Qr,
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
                    ? _()(_()({}, e), {}, { entities: _()(_()({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(ra, 'contextType', I.a), h()(ra, 'defaultProps', { hasUserText: !1 })
      var aa = P.a.create(function (e) {
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
        oa = Object(Ie.a)().propsFromActions(function () {
          return { markSpamStatus: K.markSpamStatus }
        }),
        sa = Be.a.fd07947f,
        ca = Be.a.c7a92dc9,
        la = Be.a.f277e949,
        ua = Be.a.fb3ccb55,
        da = oa(
          (function (e) {
            u()(n, e)
            var t = p()(n)
            function n() {
              var e
              a()(this, n)
              for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                h()(c()(e), '_handlePress', function (t) {
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
                      Qr,
                      { contentType: 'dm', ctaText: la, description: ua },
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
                      { style: pa.buttons },
                      g.a.createElement(
                        mt.a,
                        { onPress: this._handlePress(!1), style: pa.leftButton, type: 'brandOutlined' },
                        ca,
                      ),
                      g.a.createElement(mt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, sa),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        pa = P.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        ma = n('U+bB'),
        ha = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        fa = P.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        va = function (e) {
          var t = e.sticker
          return g.a.createElement(ma.a, { accessibilityLabel: t.display_name, source: ha(t), style: fa.stickerItem })
        },
        ga = n('XOJV'),
        ya = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        _a = Object(Ie.a)()
          .propsFromState(function () {
            return { tweet: ga.a.createHydratedTweetSelector(ya) }
          })
          .propsFromActions(function () {
            return { popOutConversation: K.popOutConversation }
          }),
        ba = n('b5s6'),
        Ea = g.a.createElement(J.b, { link: '/settings/safety' }),
        Sa = function (e) {
          return g.a.createElement(
            Be.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(Ea, null, Be.a.adcf07b5),
          )
        },
        Ca = Be.a.e4df0ad7,
        Ra = Be.a.f277e949,
        wa = Be.a.b5b91d58,
        ka = Be.a.bb594d7b,
        xa = g.a.createElement(Sa, null)
      var Ta = P.a.create(function (e) {
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
        Aa = _a(function (e) {
          var t = g.a.useContext(I.a).featureSwitches,
            n = e.conversationId,
            r = e.displaySensitiveMedia,
            a = e.hasUserText,
            i = void 0 !== a && a,
            o = e.isActive,
            s = void 0 !== o && o,
            c = e.isDmNsfwMediaFilterEnabled,
            l = e.isFailedDraft,
            u = e.isFirstRapidFire,
            d = void 0 !== u && u,
            p = e.isRapidFire,
            m = void 0 !== p && p,
            h = e.isSent,
            f = e.isTrusted,
            v = e.messageData,
            y = e.popOutConversation,
            _ = e.tweet,
            b = e.withCta,
            E = e.withMessageBubble,
            S = g.a.useState(void 0),
            C = oe()(S, 2),
            R = C[0],
            w = C[1],
            k = g.a.useState(void 0),
            x = oe()(k, 2),
            T = x[0],
            A = x[1],
            O = g.a.useMemo(
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
                  R !== t && w(t)
                }
              },
              [R],
            ),
            L = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  T !== t && A(t)
                }
              },
              [T],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var P = v.attachment.tweet,
            F = h ? 'sent' : 'received',
            D = St(i, R, T),
            B = g.a.createElement(ba.a, {
              onPress: O,
              style: [
                Ta[F],
                i && Ta.attachment,
                D.isAttachmentSquared ? (h ? Ta.sentAttachmentSquared : Ta.receivedAttachmentSquared) : void 0,
              ],
              tweetId: P.status,
            }),
            N = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            j = (function () {
              if (!_) return null
              if (h) return B
              if (_.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (c || void 0 === c)
                  return g.a.createElement(
                    Qr,
                    { contentType: 'photo', ctaText: ka, description: wa, withSquareBottomBorderRadius: N },
                    B,
                  )
              } else if (!r && _.possibly_sensitive)
                return g.a.createElement(
                  Qr,
                  { contentType: 'photo', ctaText: Ra, description: xa, withSquareBottomBorderRadius: N },
                  B,
                )
              return f
                ? B
                : g.a.createElement(
                    Qr,
                    { contentType: 'tweet', ctaText: Ra, description: Ca, withSquareBottomBorderRadius: N },
                    B,
                  )
            })(),
            U = g.a.createElement(X.a, { onLayout: M, style: Ta.attachment }, j),
            H = i
              ? g.a.createElement(
                  X.a,
                  { onLayout: L, style: h ? Ta.sentMessageWrapper : Ta.receivedMessageWrapper },
                  g.a.createElement(_r, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: m,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? Ta.sentSquared : Ta.receivedSquared) : void 0,
                    tweetId: P.status,
                    withCta: b,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(fr, { attachmentContent: U, isVisible: D.compositeRendered, textContent: H })
        }),
        Ia = n('htvZ'),
        Oa = n('MH+I'),
        Ma = n('5Ixf'),
        La = n('AtEG')
      function Pa(e) {
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
          u = oe()(r.playerApi, 1)[0],
          d = oe()(r.playerState, 1)[0],
          p = r.scribeAction,
          m = oe()(c, 1)[0],
          h = e.messageId === m
        if (!p) return null
        var f = Da(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: v,
            isActive: h,
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
          h &&
            f &&
            f.contentId === e.media.id_str &&
            ((y.playerApi = u),
            (y.playerState = d),
            null != f && f.durationMs && (y.durationMs = null == f ? void 0 : f.durationMs)),
          g.a.createElement(Fa, y)
        )
      }
      function Fa(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          a = e.playerState,
          i = null == a ? void 0 : a.isPlaying,
          o = Da(a),
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
        var u = P.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            ja.voiceMessage,
            Ua({ isSent: n, squared: t }),
            n ? ja.voiceMessageSent : ja.voiceMessageReceived,
            de(P.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? Ma.a : La.a
        return g.a.createElement(
          X.a,
          { style: [ja.container, de(P.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            X.a,
            { style: p },
            g.a.createElement(X.a, { style: ja.startSpacer }),
            g.a.createElement(mt.a, {
              accessibilityLabel: i ? Na : Ba,
              icon: g.a.createElement(m, { style: u ? ja.iconColorDark : ja.iconColorDefault }),
              onPress: function () {
                r ? (i ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(X.a, { style: ja.durationSpacer }),
            g.a.createElement(
              X.a,
              { style: n ? ja.durationOpacity : void 0 },
              g.a.createElement(
                Oa.a,
                Xt()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? ja.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(X.a, { style: ja.endSpacer }),
          ),
        )
      }
      var Da = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ba = Be.a.c94b7d89,
        Na = Be.a.eb6f9582,
        ja = P.a.create(function (e) {
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
      var Ha = P.a.create(function (e) {
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
          u()(n, e)
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
                    l = bt(n),
                    u = !!o && !!o.ctas,
                    d = _t(n),
                    p = (function (e) {
                      var t = e.message_data
                      if (!t) return !1
                      if (bt(e) && !Et(e)) return !1
                      if (!t.text) return !1
                      var n = Object(gt.parse)(t.text)
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
                    m = !(d && p),
                    h = Et(n)
                  e = s.sticker ? g.a.createElement(va, { sticker: s.sticker }) : this._renderDMMessage(d, u, m)
                  var f = c ? g.a.createElement(da, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = l && !h && !Object(Ge.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    y = [
                      r ? Va.isSent : Va.isReceived,
                      u && Va.withCta,
                      v ? Va.mediaRoot : Va.flexShrink,
                      this.props.style,
                    ]
                  return g.a.createElement(
                    X.a,
                    { style: y },
                    f,
                    o && o.ctas
                      ? g.a.createElement(lr, {
                          callToActions: o.ctas,
                          isSent: r,
                          onCtaClick: a,
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
                  var r = this.props,
                    a = r.displaySensitiveMedia,
                    i = r.entry,
                    o = r.isActive,
                    s = r.isDmNsfwMediaFilterEnabled,
                    c = r.isFirstRapidFire,
                    l = r.isLowQuality,
                    u = r.isRapidFire,
                    d = r.isSent,
                    p = r.isTrusted,
                    m = i.error,
                    h = i.message_data,
                    f = h && _()(_()({}, h), {}, { entities: (h && h.entities) || void 0, error: m }),
                    v = null == f ? void 0 : f.attachment,
                    y = {
                      isActive: o,
                      isFailedDraft: !!m,
                      isFirstRapidFire: c,
                      isRapidFire: u,
                      isSent: d,
                      withCta: t,
                      withMessageBubble: n,
                    }
                  if (f && v) {
                    if (v.tweet)
                      return g.a.createElement(
                        Aa,
                        Xt()(
                          {
                            conversationId: i.conversation_id,
                            displaySensitiveMedia: a,
                            hasUserText: e,
                            isDmNsfwMediaFilterEnabled: s,
                            isTrusted: p,
                            messageData: f,
                          },
                          y,
                        ),
                      )
                    if (v.photo || v.animated_gif || v.video)
                      return v.video && Object(Ge.k)(v, this.context.featureSwitches)
                        ? g.a.createElement(Pa, {
                            isLowQuality: l,
                            isSent: !!d,
                            isTrusted: p,
                            media: v.video,
                            messageId: i.id,
                          })
                        : g.a.createElement(
                            ia,
                            Xt()(
                              {
                                displaySensitiveMedia: a,
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
                        xr,
                        Xt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, y),
                      )
                    if (v.fleet) return g.a.createElement(Mr, Xt()({ entry: i, hasUserText: e, messageData: f }, y))
                  }
                  return g.a.createElement(br, Xt()({}, y, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Wa, 'contextType', I.a)
      var Va = P.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        za = Wa,
        Ka = P.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        qa = function (e) {
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
            : g.a.createElement(X.a, { style: [Ka.avatar, Z.a.getSizeStyle(r)] })
        },
        Ga = n('m3Bd'),
        Qa = n.n(Ga),
        Ya = n('B3eJ'),
        Xa = ['color', 'isActive', 'size']
      function Ja(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          a = Qa()(e, Xa),
          i = g.a.useContext(Ia.a),
          o = g.a.useState(0.5),
          s = oe()(o, 2),
          c = s[0],
          l = s[1],
          u = oe()(i.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * Za,
          m = [$a.container, a.style, { width: r, height: r }]
        return g.a.createElement(
          X.a,
          { style: m },
          g.a.createElement(
            X.a,
            { style: [$a.container, $a.transitionOpacity, d ? $a.show : $a.hide] },
            ue.a.reducedMotionEnabled
              ? null
              : g.a.createElement(Ya.a, { audioLevel: c, color: t, paused: !d, size: r }),
          ),
          g.a.createElement(X.a, {
            style: [$a.border, { width: p, height: p }, $a.transitionOpacity, n ? $a.show : $a.hide],
          }),
        )
      }
      var Za = parseInt(P.a.theme.spaces.space2, 10),
        $a = P.a.create(function (e) {
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
        ri = { viewType: 'message' },
        ai = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        ii = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(
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
              h()(c()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!ht.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(Ge.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              h()(c()(e), '_handleCtaImpression', function () {
                e._scribeAction(_()(_()({}, ni), {}, { action: 'show' }))
              }),
              h()(c()(e), '_handleCtaClick', function () {
                e._scribeAction(_()(_()({}, ni), {}, { action: 'click' }))
              }),
              h()(c()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(Ge.k)(
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
                    r = t.isGroupDM,
                    a = t.isSent,
                    i = t.user,
                    o = this._getRapidFireProps(),
                    s = !o.isRapidFire || o.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    l = [
                      si.root.base,
                      c && si.root.vdlPadding,
                      s && si.root.contentSpacing,
                      s && c && si.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = c ? r && !a : !a || u
                  if (!i) return null
                  var p = !ht.a.isEnabled || a
                  return g.a.createElement(
                    _e.a,
                    { behavioralEventContext: ri },
                    g.a.createElement(
                      X.a,
                      { style: l },
                      g.a.createElement(
                        D.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: a ? si.root.sent : si.root.received,
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
                    r = e.isHovered,
                    a = e.rapidFireProps,
                    i = e.withUserAvatar,
                    o = e.withVDLRefresh,
                    s = this.props,
                    c = s.displaySensitiveMedia,
                    l = s.entry,
                    u = s.inboxType,
                    d = s.isActive,
                    p = s.isDmNsfwMediaFilterEnabled,
                    m = s.isGroupDM,
                    h = s.isLowQuality,
                    f = s.isReadOnly,
                    v = s.isSent,
                    y = s.isTrusted,
                    _ = s.isVoiceMessageActive,
                    b = s.isWide,
                    E = s.participants,
                    S = s.perspective,
                    C = s.scribeVoiceMessage,
                    R = s.setShouldFreezeUpdates,
                    w = a.isFirstRapidFire,
                    k = a.isRapidFire,
                    x = [
                      v ? si.messageContainer.sent : si.messageContainer.received,
                      b ? si.messageContainer.wide : si.messageContainer.narrow,
                      v && b && si.messageContainer.sentWide,
                      !v && b && si.messageContainer.receivedWide,
                    ],
                    T = y && !f,
                    A = this._isDMVoiceMessage(),
                    I = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return g.a.createElement(
                    X.a,
                    { style: x },
                    l.error
                      ? null
                      : g.a.createElement(qt, {
                          containerIsActive: d,
                          containerIsFocused: n,
                          containerIsHovered: r,
                          entry: l,
                          featureSwitches: this.context.featureSwitches,
                          inboxType: u,
                          isDraft: !!l.is_draft,
                          isGroupDM: m,
                          isSent: v,
                          onReportMessage:
                            A && C
                              ? function () {
                                  return C.report({ isLowQuality: h, isTrusted: y })
                                }
                              : void 0,
                          participantsCount: I,
                          perspective: S,
                          setShouldFreezeUpdates: R,
                          shouldShowReactionButton: T,
                          style: A && de(P.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: _ }),
                          withVDLRefresh: o,
                        }),
                    g.a.createElement(za, {
                      displaySensitiveMedia: c,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: h,
                      isRapidFire: k,
                      isSent: v,
                      isTrusted: y,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: A && de(P.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: _ }),
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
                    u = o.isSent,
                    d = o.participants,
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
                        isSent: u,
                        localMediaId: null === (r = s.message_data) || void 0 === r ? void 0 : r.localMediaId,
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
                    r = e.isRapidFire,
                    a = this.props,
                    i = a.isSent,
                    o = a.isVoiceMessageActive,
                    s = a.user,
                    c = this._isDMVoiceMessage()
                  if (!s || (!t && !o)) return null
                  var l = ce(P.a.theme.scale),
                    u = l.DMUserAvatarSizePx,
                    d = { showAvatar: !!c || !r || !!n, size: l.DMUserAvatarSizeType, user: s },
                    p = [
                      si.userAvatar.base,
                      i ? si.userAvatar.sent : si.userAvatar.received,
                      c && de(P.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: i }),
                    ]
                  return g.a.createElement(
                    X.a,
                    { style: si.userAvatar.container },
                    i ? null : g.a.createElement(X.a, { style: si.userAvatar.spacer }),
                    c
                      ? g.a.createElement(Ja, {
                          color: i ? P.a.theme.colors.primary : P.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    g.a.createElement(X.a, { style: p }, g.a.createElement(qa, d)),
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
        })(g.a.Component)
      h()(ii, 'contextType', I.a), h()(ii, 'defaultProps', ai)
      var oi = Object(tt.a)(
          Te(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = g.a.useContext(Ia.a),
                  a = oe()(r.activeVoiceMessage, 1)[0],
                  i = r.scribeAction,
                  o = oe()(a, 1)[0] === n.id,
                  s = _()(_()({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: i })
                return g.a.createElement(e, s)
              }
              return (t.defaultProps = ai), t
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
        ci = n('H4nC'),
        li = function (e) {
          var t = e.conversation,
            n = e.entry,
            r = e.inboxType,
            a = e.isActive,
            i = e.isFirstRapidFire,
            o = e.isLastRapidFire,
            s = e.isRapidFire,
            c = e.isWide,
            l = e.perspective,
            u = e.scribeNamespace,
            d = e.setActiveEntry,
            p = e.setShouldFreezeUpdates
          if (Object(x.b)(n) || Object(x.e)(n)) {
            var m = t.conversation_id,
              h = t.low_quality,
              f = t.participants,
              v = t.read_only,
              y = t.trusted,
              _ = t.type,
              b = n.message_data,
              E = (b = void 0 === b ? {} : b).sender_id,
              S = void 0 === m || y
            return g.a.createElement(oi, {
              entry: n,
              inboxType: r,
              isActive: a,
              isFirstRapidFire: i,
              isGroupDM: _ === K.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: o,
              isLowQuality: !!h,
              isRapidFire: s,
              isReadOnly: v,
              isSent: E === l,
              isTrusted: !!S,
              isWide: c,
              participants: f,
              perspective: l,
              scribeNamespace: u,
              senderId: E,
              setActiveEntry: d,
              setShouldFreezeUpdates: p,
            })
          }
          return Object(x.a)(n)
            ? g.a.createElement(ae, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(x.d)(n)
            ? g.a.createElement(ci.a, { entry: n, isCompact: !1 })
            : null
        },
        ui = n('0JOx'),
        di = Object(be.createSelector)(
          function (e, t) {
            var n = Object(We.o)(e, t.conversationId),
              r = n && Object(A.a)(n)
            return r && Object(K.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        pi = Object(Ee.c)(di),
        mi = (n('Ef13'), n('uDfI')),
        hi = Object(be.createSelector)(
          function (e, t) {
            return Re.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        fi = Object(mi.b)(hi),
        vi = n('Enqy'),
        gi = n('+/1j'),
        yi = 'overflow',
        _i = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        bi = { stiffness: 1e3, damping: 70 },
        Ei = 140,
        Si = { scale: Object(vi.spring)(1, bi), translateY: Object(vi.spring)(0, bi) },
        Ci = function (e, t) {
          return { key: e.id_str, data: e, style: Si }
        },
        Ri = Object(S.a)({ translateY: Ei, scale: 0 }),
        wi = Object(S.a)({ scale: Object(vi.spring)(1, bi), translateY: Object(vi.spring)(Ei, bi) }),
        ki = [{ key: 'bubble', style: { scale: Object(vi.spring)(1, bi), translateY: Object(vi.spring)(0, bi) } }],
        xi = Object(S.a)({ translateY: Ei, scale: 0 }),
        Ti = Object(S.a)({ scale: Object(vi.spring)(1, bi), translateY: Object(vi.spring)(Ei, bi) }),
        Ai = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ii = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { isHidden: !0 }),
              h()(c()(e), '_afterLeave', function () {
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
                    n = t.sort(_i).slice(0, 5).map(Ci)
                  return (
                    t.length > 5 && n.push({ key: yi, style: Si }),
                    g.a.createElement(
                      X.a,
                      { style: [Oi.root, e && Oi.hidden] },
                      g.a.createElement(
                        X.a,
                        { style: Oi.avatarRow },
                        g.a.createElement(
                          vi.TransitionMotion,
                          { styles: n, willEnter: Ri, willLeave: wi },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var r = Ai(e.style)
                                return e.key === yi
                                  ? g.a.createElement(
                                      X.a,
                                      {
                                        key: e.key,
                                        style: [Oi.avatar, Oi.avatarSpacer, Oi.overflowAvatar, { transform: r }],
                                      },
                                      g.a.createElement(gi.a, { style: Oi.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      X.a,
                                      { key: e.key, style: [Oi.avatar, { transform: r }] },
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
                        { didLeave: this._afterLeave, styles: t.length > 0 ? ki : [], willEnter: xi, willLeave: Ti },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                X.a,
                                { key: e.key, style: [Oi.messageBubble, { transform: Ai(e.style) }] },
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
        Mi = fi(Ii),
        Li = n('tn7R'),
        Pi = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_timers', {}),
              h()(c()(e), 'state', { forceHide: !1, userIds: [] }),
              h()(c()(e), '_handleLivePipelineUpdate', function (t) {
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
              h()(c()(e), '_removeAvatar', function (t) {
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
      h()(Pi, 'contextType', I.a)
      var Fi = pi(Pi),
        Di = n('3AAD'),
        Bi = n('iBK2'),
        Ni = n('Fz18'),
        ji = n('RJrc'),
        Ui = n('yw4N'),
        Hi = (n('XygZ'), n('dPJJ')),
        Wi = n('zrc3'),
        Vi = n('pQ3Z'),
        zi = n.n(Vi),
        Ki = n('VY6S'),
        qi = n('c/W/'),
        Gi = (function () {
          function e(t) {
            var n = this
            a()(this, e),
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
              (this._debouncedNormalize = Object(Ki.a)(this._normalize, 500)),
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
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_updatesSuspended', !1),
              h()(c()(i), '_handleHeightsUpdate', function (e, t) {
                var n = i.props.anchoring
                i._scrollBy(n.offsetCorrection(e, t))
              }),
              h()(c()(i), '_receiveWrapperNode', function (e) {
                return i._offsetHandler.setWrapperNode(e)
              }),
              h()(c()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              h()(c()(i), '_handleEnterFullscreen', function () {
                ;(i._updatesSuspended = !0), i._ref && i._ref.freezeUpdates()
              }),
              h()(c()(i), '_handleExitFullscreen', function () {
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
                  var n = !zi()(this.props, e) || !zi()(this.state, t)
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
                    (this._unlistenFullscreenEnter = Hi.a(this._handleEnterFullscreen)),
                    (this._unlistenFullscreenExit = Hi.b(this._handleExitFullscreen))
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
                      var n = Object(Wi.a)(t, function (t) {
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
      h()(Qi, 'defaultProps', { anchoring: Di.a })
      var Yi = n('AOWc'),
        Xi = n('180P'),
        Ji = n('Ey+e'),
        Zi = n('SrIh'),
        $i = n('E6XO'),
        eo = n('06eB'),
        to = n.n(eo),
        no = n('aITJ'),
        ro = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        ao = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_perfReported', !1),
              h()(c()(i), '_observeElement', function (e) {
                var t = i._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              h()(c()(i), '_handleResize', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.onHeightChanged,
                  a = oe()(e, 1)[0]
                i._isResizeObserverHeightUpdatesEnabled &&
                  a &&
                  a.contentRect.height !== i._currentHeight &&
                  ((i._currentHeight = a.contentRect.height), r(n, a.contentRect.height)),
                  i._perfReported || (i.props.onVisible(n, ro() - i._perfStart), (i._perfReported = !0))
              }),
              h()(c()(i), '_setRef', function (e) {
                var t = i.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((i._element = e), r(n, c()(i)), i._observeElement(e)) : (r(n, void 0), (i._element = void 0))
              }),
              (i._isResizeObserverHeightUpdatesEnabled =
                i.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                no.b.isDesktopOS() &&
                no.b.isSafari()),
              (i._resizeObserver = new window.ResizeObserver(i._handleResize)),
              (i._perfStart = ro()),
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
      h()(ao, 'contextType', I.a)
      var io = n('+d3d'),
        oo = n('iChn'),
        so = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), '_cells', new Map()),
              h()(c()(e), '_heightUpdates', {}),
              h()(c()(e), '_visibilityMeasurements', new Map()),
              h()(c()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              h()(c()(e), '_reportVisibilityMeasurements', function () {
                if (e._visibilityMeasurements.size) {
                  var t = 0
                  e._visibilityMeasurements.forEach(function (e) {
                    return (t += e)
                  })
                  var n = Math.round(t / e._visibilityMeasurements.size),
                    r = no.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  $i.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              h()(c()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              h()(
                c()(e),
                '_flushHeightUpdates',
                Object(io.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              h()(c()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              h()(c()(e), '_handleDivRefUpdate', function (t) {
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
                    r = t.renderItem
                  return n.map(function (t) {
                    var n = t.data,
                      a = t.id
                    return g.a.createElement(ao, {
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
        co = n('oi7R'),
        lo = n('aWzz'),
        uo = n('JD1h'),
        po = n('OeMK'),
        mo = n('0zXz'),
        ho = (n('IAdD'), n('jHwr')),
        fo = n('qdp+'),
        vo = (function () {
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
                    r = Object(Wi.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var a = Object(Wi.a)(
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
        _o = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            a = e.sliceStart,
            i = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = yo(t, a, function (e) {
              var t = e.id
              return !Object(po.a)(t) && i.hasOwnProperty(t) && i[t]
            })
          if (-1 === o) return null
          var s = Object(Wi.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Yi.a)(s >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(po.a)(t[o - 1].id) && s > 0 && Object(po.a)(n[s - 1].id) && (s -= 1),
            { sliceStart: s, sliceEnd: Math.min(n.length, s + r - a) }
          )
        },
        bo = { heightsReady: !0 },
        Eo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_updatesSuspended', !1),
              h()(c()(i), 'freezeUpdates', function () {
                i._updatesSuspended = !0
              }),
              h()(c()(i), 'resumeUpdates', function () {
                ;(i._updatesSuspended = !1), i._scheduleUpdate()
              }),
              h()(c()(i), '_handleHeightsChange', function (e) {
                i._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              h()(c()(i), '_handleRefUpdate', function (e) {
                i._ref = e
              }),
              h()(c()(i), '_setNecessarySlice', function (e, t) {
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
              h()(c()(i), '_setSlice', function (e, t) {
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
                return So(e, t, n)
              })),
              (i._heights = {})
            var u = i.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (i._heights = p[d]), (i.state = i._getDefaultSlice(l, s))
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
              (i._scheduleDebouncedUpdate = Object(Ki.a)(function () {
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
                    var o = _o({ list: t, nextList: i, sliceStart: a, sliceEnd: r }) || this._getDefaultSlice(i)
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
                    r = this._computeBlankSpace(),
                    a = r.blankSpaceAbove,
                    i = r.blankSpaceBelow
                  return g.a.createElement(
                    go.a.Provider,
                    { value: bo },
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
                    o = Object(A.a)(e)
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
                    r && (this._heights = Object.assign(_()({}, this._heights), n)),
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
                    c = Object(Wi.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > i
                    }),
                    l = c >= 0 ? c : n.length - 1,
                    u = Object(Wi.a)(
                      n,
                      function (e) {
                        var t = e.id
                        return s[t].getTop() >= o
                      },
                      l,
                    ),
                    d = u >= 0 ? u : n.length
                  return this._schedulePositioningNotification(), { sliceStart: l, sliceEnd: d }
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
                    a = _()(
                      _()({}, this),
                      {},
                      {
                        props: _()(_()({}, this.props), {}, { list: e }),
                        state: _()({}, this.state),
                        context: _()({}, this.context),
                        refs: null,
                      },
                    ),
                    i = this._getRectangles(a),
                    o = e[t].id,
                    s = i[o].getBottom(),
                    c = Object(Wi.a)(
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
      h()(Eo, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var So = function (e, t, n) {
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
        Co = Eo,
        Ro = function (e) {
          return (
            Object(Zi.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xi.a)(e)
          )
        },
        wo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_onDemandRenderer', function (e) {
                var t = i.props,
                  n = t.assumedItemHeight,
                  r = t.minimumOffscreenToViewportRatio,
                  a = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return g.a.createElement(
                  Co,
                  Xt()({}, e, {
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
              h()(c()(i), '_viewRenderer', function (e) {
                return g.a.createElement(so, e)
              }),
              h()(c()(i), '_getItemRenderer', function () {
                return i._getMemoizedItemRenderer(i.props.renderer)
              }),
              h()(
                c()(i),
                '_getMemoizedItemRenderer',
                Object(se.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              h()(c()(i), '_handleAnchorRendererRefUpdate', function (e) {
                i._anchorRenderer = e
              }),
              h()(c()(i), '_handlePositionRestored', function () {
                ;(0, i.props.onPositionRestored)(), (i._edgeProximity = i._createEdgeProximity())
                var e = i._anchorRenderer && i._anchorRenderer.getPositioning()
                e && i._edgeProximity.handlePositioningUpdate(e)
              }),
              h()(c()(i), '_handlePositioningUpdate', function (e) {
                i._edgeProximity && i._edgeProximity.handlePositioningUpdate(e)
                var t = i.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              h()(c()(i), '_getList', function () {
                var e = i.props,
                  t = e.footer,
                  n = e.header,
                  r = e.identityFunction,
                  a = e.items
                return i._getMemoizedList(r, a, n, t)
              }),
              h()(
                c()(i),
                '_getMemoizedList',
                Object(se.a)(function (e, t, n, r) {
                  var a = {},
                    i = t.reduce(function (t, n) {
                      var r = e(n) || n.id || Ro(n)
                      return (
                        Object(Yi.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        a.hasOwnProperty(r)
                          ? Object(Zi.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (a[r] = !0)),
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
                    s = r
                      ? {
                          id: po.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return i.length ? [].concat(Ye()(o ? [o] : []), Ye()(i), Ye()(s ? [s] : [])) : []
                }),
              ),
              (i._viewport = e.viewport || r.viewport || co.a.root()),
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
                  return new uo.b([
                    {
                      condition: uo.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: uo.a.nearTopRatio(r),
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
      h()(wo, 'displayName', 'VirtualScroller'),
        h()(wo, 'contextTypes', { viewport: lo.object, getCustomLocation: lo.func }),
        h()(wo, 'defaultProps', {
          anchoring: Qi.defaultProps.anchoring,
          assumedItemHeight: Co.defaultProps.assumedItemHeight,
          identityFunction: Ro,
          minimumOffscreenToViewportRatio: Co.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: mo.a,
          onPositionRestored: sr.a,
          onAtEnd: sr.a,
          onAtStart: sr.a,
          onNearEnd: sr.a,
          onNearStart: sr.a,
          onScrollEnd: sr.a,
          preferredOffscreenToViewportRatio: Co.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var ko = Object(Ji.a)(wo),
        xo = n('mw9i'),
        To = Be.a.i859a9d3,
        Ao = Be.a.i8ecae5b,
        Io = function (e) {
          return e.entry.id
        },
        Oo = function (e) {
          return e.entry.type === Q.b.MESSAGE
        },
        Mo = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              h()(
                c()(i),
                '_shouldUseNewScroller',
                i.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              h()(c()(i), '_renderItem', function (e) {
                var t = i.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case Q.b.TYPING_INDICATOR:
                    return n ? g.a.createElement(Fi, { conversationId: n }) : null
                  case Q.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          X.a,
                          { style: Lo.readOnly },
                          g.a.createElement(
                            J.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Ao,
                            ' ',
                            g.a.createElement(J.b, { link: 'https://support.twitter.com/articles/14606#faq' }, To),
                          ),
                        )
                      : null
                  case Q.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(W, { conversation: t })
                  default:
                    return i._renderDMEntry(e)
                }
              }),
              h()(c()(i), '_setActiveEntry', function (e) {
                i.setState({ activeEntryId: e })
              }),
              h()(c()(i), '_setShouldFreezeUpdates', function (e) {
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
                typingIndicatorId: k.a,
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
                          n && 0 === i && e.push(k.b)
                          var s = Object(A.a)(e),
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
                            var l = T(s.entry, a),
                              u = e[e.length - 2]
                            l
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return a && s.push(a), r.read_only && i && s.push(i), s
                    })({
                      conversation: n,
                      footer: k.d,
                      readOnlyEntry: k.c,
                      canInjectConversationProfileInfoHeader: n.status === Q.c.AT_END && n.type === Q.a.ONE_TO_ONE,
                      activeEntryId: s,
                    }),
                    l = n.conversation_id,
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
                    p = 'dm-activity-'.concat(l)
                  return g.a.createElement(V.a.Consumer, null, function (t) {
                    var s = t.isDrawer ? z.b.drawerHeaderRadius : Lo.scrollSpace
                    return g.a.createElement(
                      X.a,
                      { style: [Lo.scrollContainer, s] },
                      g.a.createElement(
                        Ui.a,
                        { style: [Lo.scrollContainer, a && Lo.conversationsPadding, s, o] },
                        r || null,
                        n.status && n.status !== Q.c.AT_END ? g.a.createElement(ji.a, null) : null,
                        g.a.createElement(
                          xo.a,
                          { style: [Lo.content, Lo.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(Bi.b, {
                                anchoring: Di.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Oo,
                                hasNewContentAtBottom: !0,
                                identityFunction: Io,
                                initialAnchor: c.length > 0 ? f.a(Io(d(c))) : void 0,
                                items: c,
                                nearStartProximityRatio: 2,
                                onNearStart: i,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : g.a.createElement(
                                Ni.a,
                                { identifier: p },
                                g.a.createElement(ko, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Io,
                                  initialAnchor: c.length > 0 ? f.a(Io(u(c))) : void 0,
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
                    u = o.perspective,
                    d = o.scribeNamespace
                  return t && c
                    ? g.a.createElement(li, {
                        conversation: s,
                        entry: t,
                        inboxType: c,
                        isActive: n,
                        isFirstRapidFire: r,
                        isLastRapidFire: a,
                        isRapidFire: i,
                        isWide: l,
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
      h()(Mo, 'contextType', I.a)
      var Lo = P.a.create(function (e) {
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
        return C
      }),
        n.d(t, 'c', function () {
          return R
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
        u = c.a.c3752568,
        d = c.a.f78aa3e9,
        p = c.a.f9690dc0,
        m = c.a.i859a9d3,
        h = c.a.b1d35407,
        f = c.a.g539cca6,
        v = c.a.bbac0019,
        g = c.a.a1d2a68d,
        y = c.a.d4f2d9d8,
        _ = c.a.hf383be4,
        b = c.a.b25c5b2a,
        E = c.a.c4fdbd16,
        S = c.a.hf3e7e38,
        C = i()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        R = { defaultToast: { text: d }, showToast: !0 },
        w =
          ((r = { defaultToast: { text: u } }),
          i()(r, o.a.CurrentUserSuspended, {
            toast: { text: f, action: { label: m, link: 'https://support.twitter.com/articles/15790' } },
          }),
          i()(r, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          i()(r, o.a.DirectMessageDuplicate, { toast: { text: b } }),
          i()(r, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: g, action: { label: m, link: 'https://support.twitter.com/articles/14606' } },
          }),
          i()(r, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: E } }),
          i()(r, o.a.DirectMessageTooLongError, { toast: { text: v } }),
          i()(r, o.a.DirectMessageTweetNotFound, { toast: { text: y } }),
          i()(r, o.a.GenericBadRequest, { customAction: l.a }),
          i()(r, o.a.MessageSendError, { toast: { text: S } }),
          i()(r, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: m, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          i()(r, o.a.TargetUserNotFound, { toast: { text: _ } }),
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
      var r = n('97Jx'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        s = n('cOtO'),
        c = n('Rk1B'),
        l = n('RH6X'),
        u = function (e) {
          return o.a.createElement(c.default, null, function (t) {
            var n = t.richTextInputContext
            t.typeaheadWrapper
            return o.a.createElement(s.default, a()({}, e, { richTextInputContext: n, typeaheadWrapper: l.a }))
          })
        }
      t.default = u
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
        u = ['conversation_id', 'participants'],
        d = ['conversation_id', 'participants', 'social_proof'],
        p = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        m = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return Array.isArray(e)
            ? e.reduce(function (e, n) {
                var r = n.user_id,
                  i = t[r] || { id_str: r }
                return (e[r] = a()(a()({}, n), {}, { user: i })), e
              }, {})
            : e
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
            r = e.conversation_id,
            i = e.participants,
            s = o()(e, u)
          return a()(
            a()({ conversation_id: r }, s),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: m(i, n) },
          )
        },
        v = function (e, t, n) {
          var r = e.conversation_id,
            i = e.participants,
            u = e.social_proof,
            p = o()(e, d),
            f = a()(
              a()({ conversation_id: r }, p),
              {},
              { entries: h(r, t), participants: m(i, n), social_proof: void 0 },
            )
          return (
            u &&
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
              })(u, n)),
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
              u = void 0 === l ? 3e5 : l
            ;(this.pollTimer = new s.b(i).interval(t)), (this.burstTimer = new s.a(this.pollTimer, c, u))
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
      var r,
        a,
        i,
        o,
        s,
        c,
        l,
        u,
        d,
        p,
        m,
        h,
        f,
        v,
        g,
        y,
        _,
        b,
        E,
        S,
        C,
        R,
        w,
        k,
        x,
        T,
        A,
        I,
        O,
        M,
        L,
        P,
        F,
        D,
        B,
        N,
        j,
        U = {
          fragment: {
            argumentDefinitions: (r = [
              { defaultValue: null, kind: 'LocalArgument', name: 'id' },
              { defaultValue: null, kind: 'LocalArgument', name: 'next_cursor' },
              { defaultValue: null, kind: 'LocalArgument', name: 'previous_cursor' },
            ]),
            kind: 'Fragment',
            metadata: null,
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: (a = [
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
                  (m = {
                    alias: null,
                    args: null,
                    concreteType: 'ConversationInfo',
                    kind: 'LinkedField',
                    name: 'legacy',
                    plural: !1,
                    selections: [
                      (s = { alias: null, args: null, kind: 'ScalarField', name: 'conversation_id', storageKey: null }),
                      {
                        alias: null,
                        args: null,
                        concreteType: 'ConversationMetadata',
                        kind: 'LinkedField',
                        name: 'metadata',
                        plural: !1,
                        selections: [
                          (c = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'conversation_type',
                            storageKey: null,
                          }),
                          (l = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: 'PerspectivalConversationMetadata',
                        kind: 'LinkedField',
                        name: 'perspectival_conversation_metadata',
                        plural: !1,
                        selections: [
                          (u = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'last_read_event_id',
                            storageKey: null,
                          }),
                          (d = { alias: null, args: null, kind: 'ScalarField', name: 'low_quality', storageKey: null }),
                          (p = { alias: null, args: null, kind: 'ScalarField', name: 'trusted', storageKey: null }),
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  }),
                  {
                    alias: null,
                    args: (h = [
                      { kind: 'Variable', name: 'next_cursor', variableName: 'next_cursor' },
                      { kind: 'Variable', name: 'previous_cursor', variableName: 'previous_cursor' },
                    ]),
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
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
                                  o,
                                  i,
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
                                      (v = {
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
                                      (y = {
                                        alias: null,
                                        args: null,
                                        kind: 'ScalarField',
                                        name: 'event_id',
                                        storageKey: null,
                                      }),
                                      (_ = {
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
                                                  c,
                                                  l,
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
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              i,
                                                              o,
                                                              (E = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: 'ApiUser',
                                                                kind: 'LinkedField',
                                                                name: 'legacy',
                                                                plural: !1,
                                                                selections: [
                                                                  l,
                                                                  (b = {
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
                                                  v,
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
                                                        selections: [
                                                          (C = {
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
                                                              (R = {
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
                                                                  l,
                                                                  b,
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
                                                  u,
                                                  (w = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (k = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_conversation_event_id',
                                                    storageKey: null,
                                                  }),
                                                ],
                                                storageKey: null,
                                              },
                                              (x = {
                                                alias: null,
                                                args: null,
                                                concreteType: 'PerspectivalConversationMetadata',
                                                kind: 'LinkedField',
                                                name: 'perspectival_conversation_metadata',
                                                plural: !1,
                                                selections: [
                                                  u,
                                                  d,
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
                                                  p,
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
                                          (T = {
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
                                          (A = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (I = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (O = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'marked_as_abuse',
                                            storageKey: null,
                                          }),
                                          (M = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'message_id',
                                            storageKey: null,
                                          }),
                                          l,
                                          (L = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (P = {
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
                                            selections: S,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: S,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: S,
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
                                              (F = {
                                                alias: null,
                                                args: null,
                                                kind: 'ScalarField',
                                                name: 'created_at_sec',
                                                storageKey: null,
                                              }),
                                              i,
                                              (D = {
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
                                                selections: S,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: S,
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
            argumentDefinitions: r,
            kind: 'Operation',
            name: 'evolutionDmConversationTimelineQuery',
            selections: [
              {
                alias: null,
                args: a,
                concreteType: 'DMConversation',
                kind: 'LinkedField',
                name: 'dm_conversation_by_rest_id',
                plural: !1,
                selections: [
                  i,
                  o,
                  m,
                  {
                    alias: null,
                    args: h,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      (B = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                  o,
                                  i,
                                  {
                                    alias: null,
                                    args: null,
                                    concreteType: 'DMEventMetadata',
                                    kind: 'LinkedField',
                                    name: 'legacy',
                                    plural: !1,
                                    selections: [
                                      f,
                                      v,
                                      g,
                                      y,
                                      _,
                                      {
                                        alias: null,
                                        args: null,
                                        concreteType: 'DMConversation',
                                        kind: 'LinkedField',
                                        name: 'conversation',
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
                                                  c,
                                                  l,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'created_by_user_results',
                                                    plural: !1,
                                                    selections: (j = [
                                                      {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: 'LinkedField',
                                                        name: 'result',
                                                        plural: !1,
                                                        selections: [
                                                          B,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              i,
                                                              o,
                                                              E,
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
                                                  v,
                                                  {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: 'UserResults',
                                                    kind: 'LinkedField',
                                                    name: 'admin_user_results',
                                                    plural: !1,
                                                    selections: j,
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
                                                        selections: [B, C],
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
                                                          B,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [i, o, R, N],
                                                            type: 'User',
                                                            abstractKey: null,
                                                          },
                                                        ],
                                                        storageKey: null,
                                                      },
                                                    ],
                                                    storageKey: null,
                                                  },
                                                  u,
                                                  w,
                                                  k,
                                                ],
                                                storageKey: null,
                                              },
                                              x,
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
                                          T,
                                          A,
                                          I,
                                          O,
                                          M,
                                          l,
                                          L,
                                          P,
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'users_results',
                                            plural: !0,
                                            selections: j,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'participants_snapshot_results',
                                            plural: !0,
                                            selections: j,
                                            storageKey: null,
                                          },
                                          {
                                            alias: null,
                                            args: null,
                                            concreteType: 'UserResults',
                                            kind: 'LinkedField',
                                            name: 'initiating_user_results',
                                            plural: !1,
                                            selections: j,
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
                                              F,
                                              i,
                                              D,
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'recipient_results',
                                                plural: !1,
                                                selections: j,
                                                storageKey: null,
                                              },
                                              {
                                                alias: null,
                                                args: null,
                                                concreteType: 'UserResults',
                                                kind: 'LinkedField',
                                                name: 'sender_results',
                                                plural: !1,
                                                selections: j,
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
          },
          params: {
            id: '-Uh--djo528J1lVvN90ehw',
            metadata: {},
            name: 'evolutionDmConversationTimelineQuery',
            operationKind: 'query',
            text: null,
          },
        }
      ;(U.hash = 'd10dca8514788699003806db1db0d5f0'), (t.default = U)
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
        u = c.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        d = o.a.d84b485d,
        p = o.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          r = e.unread,
          i = void 0 !== r && r,
          o = 'follow' === t.reason ? d : p,
          c = i ? 'medium' : 'normal',
          m = i ? 'text' : 'gray700'
        return n
          ? a.a.createElement(l.b, { color: m, weight: c }, o)
          : a.a.createElement(
              s.a,
              { style: u.root },
              a.a.createElement(l.b, { align: 'center', color: m, size: 'subtext2', weight: c }, o),
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
          return d
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
        u = function (e, t, n, r) {
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
        d = (function () {
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
                      d = e.getListLength(),
                      p = u(s, o, c, d)
                    ;(n.proximity = c), (n.listLength = d), p && a({ triggerCause: p })
                  })
                },
              },
            ]),
            e
          )
        })()
    },
    M2mT: function (e, t, n) {
      'use strict'
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        y = n('ERkP'),
        _ = n.n(y),
        b = n('HPNB'),
        E = n('VAZu'),
        S = n('wiP2'),
        C = n('Es6L'),
        R = n('yiKp'),
        w = n.n(R),
        k = n('rHpw'),
        x = k.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: w()(w()({}, k.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        T = n('MWbm'),
        A = n('yw4N'),
        I = n('TnY3'),
        O = n('cHvH'),
        M = n('3xLC'),
        L = [
          'children',
          'leftControl',
          'screenType',
          'showSubtitleOnRoot',
          'showSubtitleOnWideDetail',
          'withBottomBorder',
          'withDetailOpen',
        ],
        P = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? _.a.createElement(
                      T.a,
                      { style: x.fill },
                      _.a.createElement(
                        A.a,
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
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return _.a.createElement(O.a, null, function (t) {
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
                      a()(e, L))
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
                    r = n.SideNavButton,
                    a = n.TabBar,
                    i = n.TeamsSwitcher,
                    o = n.backLocation,
                    s = n.documentTitle,
                    c = n.headerless,
                    l = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    m = n.rightControl,
                    h = n.screenType,
                    f = n.searchBoxOptions,
                    v = n.secondaryBar,
                    y = n.showSubtitleOnRoot,
                    b = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    R = n.title,
                    w = n.titleIconCell,
                    k = n.titleIconCellSize,
                    A = n.withDetailOpen,
                    I = n.withSearchBox,
                    O = n.withTweetButton,
                    M = 'root' === h,
                    L = 'secondaryRoot' === h,
                    P = 'primaryDetail' === h,
                    F = (P && b) || (M && y),
                    D = M || (P && t),
                    B = M ? g.c : P ? g.a : void 0,
                    N = _.a.createElement(
                      T.a,
                      { style: x.appBarContainer },
                      _.a.createElement(E.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: D,
                        history: l,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: v,
                        subtitle: F ? C : void 0,
                        title: R,
                        titleDomId: B,
                        titleIconCell: w,
                        titleIconCellSize: k,
                      }),
                    ),
                    j =
                      M || (L && A)
                        ? null
                        : _.a.createElement(S.a.Configure, {
                            SideNavButton: r,
                            TabBar: a,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: s,
                            headerless: c,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: f,
                            subtitle: C,
                            title: R,
                            withSearchBox: I,
                            withTweetButton: O,
                          })
                  return _.a.createElement(_.a.Fragment, null, j, N)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      v()(P, 'contextType', M.a),
        v()(P, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(I.a)(P)
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        s = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        h = n('t62R'),
        f = n('rHpw'),
        v = n('p9G8'),
        g = u.a.cfd94063,
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
        E = function (e) {
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
            return Object(v.a)(t, r)
          }
          var o = _(n)
          return Object(v.b)(o, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          l = void 0 !== i && i,
          u = e.newConversationParticipants,
          f = e.perspective,
          E = e.renderTimestamp,
          S = e.textColor,
          C = void 0 === S ? 'normal' : S,
          R = e.titleWeight,
          w = void 0 === R ? 'bold' : R,
          k = e.withParticipantsCount,
          x = void 0 !== k && k,
          T = e.withScreenName,
          A = void 0 === T || T,
          I = e.withVDLRefresh,
          O = void 0 !== I && I
        if (t) {
          var M = E ? E() : null
          if (t.type === s.a.ONE_TO_ONE) {
            var L = Object(c.a)(t, f).map(function (e) {
                return e.user
              }),
              P = a()(L, 1)[0],
              F = o.a.createElement(p.a, {
                color: C,
                isProtected: P.protected,
                isVerified: P.verified,
                name: P.name,
                screenName: P.screen_name,
                weight: w,
                withLink: !1,
                withScreenName: A,
              })
            return (O && !r) || l ? o.a.createElement(m.a, null, F, M) : F
          }
          var D = t.participants,
            B = O ? Object.keys(D).length - 1 : Object.keys(D).length
          if (r)
            return o.a.createElement(
              m.a,
              { color: C },
              o.a.createElement(h.b, { color: C, numberOfLines: 1, style: b.title, weight: w }, Object(v.a)(t, f, r)),
              O
                ? null
                : o.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    g({ peopleCount: B }),
                  ),
            )
          var N = o.a.createElement(h.b, { color: C, numberOfLines: 1, weight: w }, Object(v.a)(t, f, r))
          return (O && !r) || l
            ? o.a.createElement(
                d.a,
                { style: b.dmGroup },
                o.a.createElement(m.a, null, N, M),
                x && o.a.createElement(h.b, { color: 'gray700', numberOfLines: 1 }, y({ peopleCount: B })),
              )
            : N
        }
        var j = _(u)
        return o.a.createElement(h.b, { color: C, numberOfLines: 1, weight: w }, Object(v.b)(j, f))
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
        u = n.n(l),
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
        y = n.n(g),
        _ = n('0JOx'),
        b = n('zh9S'),
        E = n('MMRb'),
        S = n('CDB5'),
        C = n('RqPI'),
        R = n('1YZw'),
        w = n('hqKg'),
        k = n('kGix'),
        x = n('AQOc'),
        T = n('UhuB'),
        A = n('pNZL'),
        I = n('G6rE'),
        O = n('oEGd'),
        M = n('X/yg'),
        L = n('0KEI'),
        P = n('P1r1'),
        F = function (e, t) {
          return t.conversationId
        },
        D = Object(w.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, F(0, t))
          },
          function (e, t) {
            return e === k.a.LOADED ? t : e
          },
        ),
        B = Object(w.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, F(0, t))
          },
          C.q,
          function (e, t) {
            return t ? Object(M.d)(e, t) : void 0
          },
        ),
        N = Object(w.createSelector)(
          function (e, t) {
            return E.selectConversation(e, F(0, t))
          },
          E.selectEntries,
          M.l,
          C.q,
          M.m,
          M.n,
          I.e.selectAll,
          D,
          function (e, t) {
            return S.g(e, F(0, t))
          },
          function (e, t) {
            return S.j(e, F(0, t))
          },
          function (e, t) {
            return S.i(e, F(0, t))
          },
          function (e, t) {
            return S.k(e, F(0, t))
          },
          function (e, t) {
            return S.h(e, F(0, t))
          },
          function (e, t) {
            return S.l(e, F(0, t))
          },
          P.k,
          T.n,
          B,
          P.n,
          function (e, t) {
            var n = F(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, a, i, o, s, c, l, u, d, p, m, h, f, v, g, y) {
            var _ = e && e.data
            return {
              conversation: (_ && Object(x.a)(_, t, o)) || void 0,
              dataSaverMode: h,
              draftText: m,
              dtabBarInfo: g,
              fetchStatus: s,
              gifMetadata: p,
              inboxType: y,
              isDmReceiptSettingEnabled: f,
              cardUrl: c,
              isNewGroupConversation: n,
              isUploading: l,
              media: u,
              mediaUploadProgress: d,
              newConversationParticipants: a,
              perspective: r,
              quickReplyOptions: v,
              tweetAttachment: i,
            }
          },
        ),
        j = Object(O.d)(N, function (e) {
          return {
            acceptConversation: E.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return S.a(t, e, n)
              }),
            saveText: S.f,
            addToast: R.b,
            addWelcomeMessageToConversation: E.addWelcomeMessageToConversation,
            cancelUpload: Object(M.a)(e.conversationId),
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationHistory: E.fetchConversationHistory,
            fetchConversationIfNeeded: E.fetchConversationIfNeeded,
            fetchInboxIfNeeded: E.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: E.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: b.a,
            leaveConversation: E.leaveConversation,
            removeMedia: Object(M.b)(e.conversationId),
            removeText: S.d,
            scribeAction: b.c,
            scribePageImpression: b.d,
            sendMessage: S.m,
            updateConversationReadState: E.updateConversationReadState,
            updateTweetDetailNav: A.b,
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
        K = n('3XMw'),
        q = n.n(K),
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
        re = n('LsPn'),
        ae = n('sl05'),
        ie = n('GSsg'),
        oe = n('ddV6'),
        se = n.n(oe),
        ce = (n('ho0z'), n('v6aA')),
        le = n('EbOo'),
        ue = n('rxPX'),
        de = Object(ue.a)().propsFromActions(function () {
          return {
            addToast: R.b,
            block: I.e.block,
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: E.muteDMUser,
            unmuteDMUser: E.unmuteDMUser,
            unblock: I.e.unblock,
          }
        }),
        pe = (n('AQ79'), n('u0B7')),
        me = (n('uFXj'), n('97Jx')),
        he = n.n(me),
        fe = n('tZH3'),
        ve = n('/yvb'),
        ge = n('efqG'),
        ye = q.a.ccf2f24e,
        _e = q.a.ib3fe8a9,
        be = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            a = e.requestorScreenName,
            i = { type: 'destructiveOutlined' },
            o = y.a.createElement(ve.a, he()({}, i, { accessibilityRole: 'button' }), _e),
            s = y.a.createElement(ve.a, he()({}, i, { onPress: r }), ye),
            c = y.a.useCallback(
              function (e, t) {
                return y.a.createElement(fe.a, {
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
          return t ? s : y.a.createElement(ge.a, { renderContent: c }, o)
        },
        Ee = n('MWbm'),
        Se = n('cHvH'),
        Ce = n('rHpw'),
        Re = function (e) {
          var t = y.a.useContext(ce.a),
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
          return y.a.createElement(Se.a, null, function (t) {
            var c = t.windowWidth <= Ce.a.theme.breakpoints.small
            return y.a.createElement(
              Ee.a,
              { style: we.actionsContainer },
              n &&
                y.a.createElement(
                  ve.a,
                  {
                    onPress: a,
                    size: 'medium',
                    style: [we.actionFullWidth, we.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              y.a.createElement(
                Ee.a,
                { style: c ? we.actionFullWidth : [we.actionHalfWidth, we.actionMarginRight] },
                y.a.createElement(be, {
                  isGroup: e.isGroup,
                  onBlockClick: i,
                  onReportClick: o,
                  requestorScreenName: Object(M.i)(e.conversation, r).screenName,
                }),
              ),
              y.a.createElement(
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
                y.a.createElement(
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
        ke = n('aITJ'),
        xe = n('t62R'),
        Te = n('eb3s'),
        Ae = n('vMjK'),
        Ie = n('7JQg'),
        Oe = n('24HD'),
        Me = n('zCf4'),
        Le = q.a.da878dcf,
        Pe = q.a.d96cf7cd,
        Fe = (q.a.gde6b424, q.a.e308019b, q.a.gf5e9ea6, q.a.hc52446b),
        De = q.a.f7e1ad65,
        Be = { headline: q.a.gdf4b79f, text: q.a.bbf83d83, confirmButtonLabel: q.a.bb1d57b6 },
        Ne = Ce.a.create(function (e) {
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
        je = Object(Ie.a)({ element: 'untrusted_interstitial' })(
          de(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              r = e.scribeNamespace,
              i = y.a.useContext(ce.a),
              o = Object(Me.f)(),
              s = Object(Me.g)(),
              c = y.a.useState(!1),
              l = se()(c, 2),
              u = l[0],
              d = l[1],
              p = y.a.useState(!1),
              m = se()(p, 2),
              h = m[0],
              f = m[1],
              v = y.a.useCallback(
                function () {
                  return {
                    items: [{ conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE }],
                  }
                },
                [t.type],
              ),
              g = y.a.useCallback(
                function (e, t) {
                  n(a()(a()({}, r), {}, { action: e }), t || v())
                },
                [v, n, r],
              )
            y.a.useEffect(
              function () {
                g('impression')
              },
              [g],
            )
            var _,
              b,
              S,
              C,
              R = function () {
                d(!0), f(!1)
              },
              w = function () {
                d(!1)
              },
              k = function () {
                f(!1)
              },
              x = function () {
                var n,
                  r = e.conversationId,
                  a = e.inboxType,
                  i = e.leaveConversation,
                  o = t.type === E.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  c = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  l = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0,
                  u = {
                    conversation_type:
                      (null == t ? void 0 : t.type) === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                    conversation_id: r,
                    conversation_participant_count: c,
                    position: l,
                    inbox_type: Object(M.h)(a),
                    entry_point: Z.b.REQUEST_ACTION_SHEET,
                  }
                d(!1), i({ conversationId: r }), g(o, u), T()
              },
              T = function () {
                var t = e.inboxType
                o.push(Object(M.e)(t))
              },
              A = function () {
                !(function () {
                  var n,
                    r = e.acceptConversation,
                    i = e.conversationId,
                    o = e.inboxType,
                    c = e.scribeAction,
                    l = e.scribeNamespace,
                    u = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    d = (null == s || null === (n = s.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (r(i),
                    c(a()(a()({}, l), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === E.CONVERSATION_TYPE.GROUP ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                      conversation_participant_count: u,
                      entry_point: Z.b.REQUEST_ACTION_SHEET,
                      inbox_type: Object(M.h)(o),
                      position: d,
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
                      n({ action: { label: Ae.c, onAction: O(t) }, text: Ae.a })
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
              L = (t && t.type) === E.CONVERSATION_TYPE.GROUP
            return y.a.createElement(
              y.a.Fragment,
              null,
              y.a.createElement(
                Ee.a,
                { style: Ne.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return y.a.createElement(
                    xe.b,
                    { style: Ne.copy },
                    e ? Fe : De({ senderName: Object(M.i)(t, n).name }),
                  )
                })(L),
                y.a.createElement(Re, {
                  acceptButtonText: Le,
                  conversation: t,
                  declineButtonText: Pe,
                  isGroup: L,
                  onAccept: A,
                  onBlock: function () {
                    d(!1), f(!0)
                  },
                  onLeave: R,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (g('report'), o.push(Object(M.f)(t, window.location.pathname, r, n)))
                  },
                }),
              ),
              ke.b.isKaiOS()
                ? y.a.createElement(re.a, { leftText: Pe, onLeftClick: R, onRightClick: A, rightText: Le })
                : null,
              u
                ? y.a.createElement(Te.a, {
                    confirmButtonLabel: Be.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Be.headline,
                    onCancel: w,
                    onConfirm: x,
                    text: Be.text,
                  })
                : null,
              h
                ? ((_ = i.loggedInUserId),
                  (b = Object(M.i)(t, _)),
                  (S = b.idStr),
                  (C = b.screenName),
                  Object(Oe.j)({ confirmation: Object(Oe.f)(C), onClose: k, handleConfirm: I(S) }))
                : null,
            )
          }),
        ),
        Ue = n('yw4N'),
        He = n('rFBM'),
        We = n('mw9i'),
        Ve = n('jTgF'),
        ze = n('+d3d'),
        Ke = n('mN6z'),
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
          var t = h()(n)
          function n(e, r) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, r)),
              v()(u()(i), '_composer', y.a.createRef()),
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
                  r = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    ke.b.isMobileOS() && i._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(u()(i), '_renderActions', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.inboxType,
                  a = e.scribeAction
                return t && i._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      y.a.createElement(je, {
                        acceptConversation: i._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: r,
                        leaveConversation: i._leaveConversation,
                        scribeAction: a,
                      })
                  : y.a.createElement(
                      y.a.Fragment,
                      null,
                      i._renderComposerBar(),
                      ke.b.isKaiOS()
                        ? y.a.createElement(re.a, {
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
                  r = e.drawerHeader,
                  a = e.inboxType,
                  o = e.isWide,
                  s = e.perspective,
                  c = e.scribeNamespace,
                  l = i.state,
                  u = l.attachment,
                  d = l.composerHeight
                return y.a.createElement(
                  V.b,
                  { key: n },
                  y.a.createElement(
                    He.a,
                    { allowDragDrop: !Je(u), onFilesAdded: i._handleDragDrop, style: ae.a.dragDrop },
                    y.a.createElement(
                      Ue.a,
                      {
                        style: [
                          ae.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      s && t
                        ? y.a.createElement(H.a, {
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
              v()(u()(i), '_handleNavHeightChange', function (e) {
                i.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(u()(i), '_handleTyping', function () {
                i._throttleSaveDraftText(), i._throttleUpdateTyping()
              }),
              v()(
                u()(i),
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
                u()(i),
                '_throttleSaveDraftText',
                Object(ze.a)(
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
                  r,
                  o = i.props,
                  s = o.addToast,
                  c = o.cardUrl,
                  l = o.conversation,
                  u = o.conversationId,
                  d = o.createLocalApiErrorHandler,
                  p = o.gifMetadata,
                  m = o.history,
                  h = o.location,
                  f = o.newConversationParticipants,
                  v = o.perspective,
                  g = o.scribeAction,
                  y = o.scribeNamespace,
                  _ = o.sendMessage,
                  b = o.tweetAttachment,
                  S = i.state.attachment,
                  C = S && S.media,
                  R = null != l && l.participants ? Object.keys(l.participants).length : 0,
                  w = (null == l ? void 0 : l.type) === E.CONVERSATION_TYPE.GROUP,
                  k = 'unknown'
                if (
                  (e.quickReply ||
                    C ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  k = 'gif'
                else if (c) k = 'card'
                else if (b) k = 'tweet'
                else {
                  var x,
                    T = null == S || null === (x = S.media) || void 0 === x ? void 0 : x.mediaFile,
                    A = null != T && T.isVideo ? 'video' : null != T && T.isGif ? 'gif' : 'photo'
                  k = T ? A : t ? 'text' : 'unknown'
                }
                return (
                  u &&
                    g(a()(a()({}, y), {}, { element: k, action: 'send_dm' }), {
                      conversation_id: u,
                      conversation_participant_count: R,
                      conversation_type: w ? Z.h.GROUP : Z.h.ONE_TO_ONE,
                    }),
                  i.setState({ isSending: !0 }),
                  u
                    ? (!i.state.attachment ||
                        (null !== (n = i.state.attachment) &&
                          void 0 !== n &&
                          null !== (r = n.media) &&
                          void 0 !== r &&
                          r.uploading) ||
                        (i.setState({ attachment: null }), m.replace(h.pathname)),
                      _(
                        a()(
                          { senderId: v, cardUrl: c, conversationId: u, text: t, tweetAttachment: b },
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
                              t && s(t)
                            } else d($.b)(e)
                        }))
                    : (_({
                        senderId: v,
                        recipients:
                          f &&
                          f.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: b,
                      }).then(function (e) {
                        g(a()(a()({}, y), {}, { element: k, action: 'send_dm' }), {
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
                    return Object(Q.a)().then(function (t) {
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
                  Object(_.h)().then(function (n) {
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
                      e.fetchStatus === k.a.LOADED && o !== k.a.LOADED && i && this._fetchConversation(i))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(Ke.a)(t, n) || this.setState({ attachment: Ze(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.a.createElement(
                    We.a,
                    { style: [ae.a.root, ke.b.isKaiOS() && ae.a.kaiOSFix] },
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
                    r = e.conversation,
                    a = e.conversationId,
                    i = e.dataSaverMode,
                    o = e.draftText,
                    s = e.dtabBarInfo,
                    c = e.history,
                    l = e.isUploading,
                    u = e.mediaUploadProgress,
                    d = e.quickReplyOptions,
                    p = e.removeMedia,
                    m = e.richTextInputContext,
                    h = e.scribeNamespace,
                    f = e.typeaheadWrapper,
                    v = this.state,
                    g = v.attachment,
                    _ = v.isSending,
                    b = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : y.a.createElement(W.a, {
                        attachment: g,
                        conversationId: a,
                        disabled: l,
                        dtabBarInfo: s,
                        history: c,
                        isCardPreviewTombstoned: Object(Y.a)(n),
                        isSending: _,
                        isUploading: l,
                        key: a,
                        mediaUploadProgress: u,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: i ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof b ? b : void 0,
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
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return c || l || u ? Promise.resolve() : n(e, s).catch(a({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      v()($e, 'contextType', ce.a), v()($e, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: J.a })
      t.a = Object(Ie.a)()(j($e))
    },
    RH6X: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(f),
        g = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        E = n('GZwR'),
        S = n('zpdM'),
        C = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(c()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              h()(c()(e), '_genericWrapperRef', v.a.createRef()),
              h()(c()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contextText,
                  a = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  s = t.source,
                  c = e.state,
                  l = c.canShowTypeahead,
                  u = c.queryContext,
                  d = l && u ? { word: u.word, resultType: u.resultType } : void 0
                return v.a.createElement(
                  y.a,
                  {
                    contextText: r,
                    isInline: a,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: s || E.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              h()(c()(e), '_getCaret', function (e) {
                return e.getSelection().getStartOffset()
              }),
              h()(c()(e), '_getPlaintextFromCurrentBlock', function (e) {
                var t = e.getSelection().anchorKey
                return e.getCurrentContent().getBlockForKey(t).getText()
              }),
              h()(c()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  r = e.state.queryContext
                if (r) {
                  var a = Object(_.a)(t, r.resultType)
                  n(e._replaceToken(a, r))
                }
                e._setQueryContext(void 0)
              }),
              h()(c()(e), '_handleInputChange', function (t) {
                if (!Object(b.a)(t))
                  throw new Error('RichTextTypeaheadComposeWrapper cannot handle plain text input changes')
                var n = e.state.queryContext,
                  r = n && n.word,
                  a = e._getPlaintextFromCurrentBlock(t),
                  i = g.c(e._getCaret(t), a),
                  o = i.end,
                  s = i.start,
                  c = i.word,
                  l = g.e(c || '', 'compose')
                if ((null == l ? void 0 : l.q) !== r)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (l) {
                    var u = l.q,
                      d = l.result_type
                    e._setQueryContext({ word: u, resultType: d, editorState: t, startIndex: s, endIndex: o })
                  } else e._setQueryContext(void 0)
              }),
              h()(c()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              h()(c()(e), '_handleDismiss', function () {
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
                    r = t.endIndex,
                    a = t.startIndex,
                    i = n
                      .getSelection()
                      .merge({ anchorKey: n.getSelection().getFocusKey(), anchorOffset: a, focusOffset: r }),
                    o = S.Modifier.replaceText(n.getCurrentContent(), i, e),
                    s = S.EditorState.push(n, o, 'insert-characters'),
                    c = a + e.length,
                    l = s.getSelection().merge({ anchorOffset: c, focusOffset: c })
                  return S.EditorState.forceSelection(s, l)
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      t.a = C
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
        u = o.a.ffde2fdb,
        d = l.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return a.a.createElement(s.a, { style: d.spinner }, a.a.createElement(c.a, { accessibilityLabel: u }))
      }
    },
    Rk1B: function (e, t, n) {
      'use strict'
      n.r(t)
      n('ERkP')
      var r = n('RH6X'),
        a = n('hHEM'),
        i = n('keCP')
      t.default = function (e) {
        return (0, e.children)({
          richTextInputContext: {
            convertEmojiToEntities: a.a.convertEmojiToEntities,
            element: i.a,
            initEditorState: a.a.initEditorState,
            insertTextAtCursor: a.a.insertTextAtCursor,
          },
          typeaheadWrapper: r.a,
        })
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
          return y
        }),
        n.d(t, 'a', function () {
          return _
        }),
        n.d(t, 'b', function () {
          return b
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
        u = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        d = function (e) {
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
      function m(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && m(t)) && !!e.video.audio_only
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
        y = function (e) {
          return e === o.d.TERTIARY
            ? '/messages/requests/additional'
            : e === o.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        _ = function (e) {
          return function () {
            return r.b(e)
          }
        },
        b = function (e) {
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
        u = function (e, t) {
          return l(e.join_time) - l(t.join_time)
        },
        d = function (e, t) {
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
            u,
            d,
          )
        },
        m = n('tn7R'),
        h = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          i = e.type,
          c = Object(m.a)(r),
          l = Object(h.a)(c, function (e) {
            return e.user.id_str === t
          }),
          u = o()(l, 2),
          d = u[0],
          f = u[1]
        return f.length ? (i === s.a.GROUP && 1 === f.length ? [].concat(a()(d), a()(f)) : n ? f.sort(p(n)) : f) : d
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
        l = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        m = n('jhWN'),
        h = n('9Xij'),
        f = n('Znyr'),
        v = n('cm6r'),
        g = n('U+bB'),
        y = n('MWbm'),
        _ = c.a.fd48249b,
        b = u.a.create(function (e) {
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
        E = u.a.create(function (e) {
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
        C = function (e) {
          var t = e.left,
            n = e.right
          return a.a.createElement(
            y.a,
            { style: E.container },
            a.a.createElement(y.a, { style: E.left }, t),
            a.a.createElement(y.a, { style: E.right }, n),
          )
        },
        R = function (e) {
          var t = e.bottom,
            n = e.top
          return a.a.createElement(
            y.a,
            { style: S.container },
            a.a.createElement(y.a, { style: S.top }, n),
            a.a.createElement(y.a, { style: S.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return a.a.createElement(
              y.a,
              { key: t.id_str, style: b.container },
              a.a.createElement(m.a, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var r = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return a.a.createElement(
                  y.a,
                  { key: e.id_str, style: b.container },
                  a.a.createElement(m.a, {
                    aspectRatio: r,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return a.a.createElement(h.a, { ratio: 1 }, a.a.createElement(C, { left: n[1], right: n[0] }))
            var r = a.a.createElement(R, { bottom: n[2], top: n[1] }),
              i = n[0]
            return a.a.createElement(C, { left: r, right: i })
          },
          r = e.conversation,
          s = e.link,
          c = e.perspective,
          E = e.withBadge,
          S = r && r.avatar_image_https,
          w = r
            ? Object(o.a)(r, c).map(function (e) {
                return e.user
              })
            : [],
          k = w.slice(0, 3),
          x =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? a.a.createElement(d.a, {
                    accessibilityLabel: '',
                    aspectMode: p.a.SQUARE,
                    backgroundColor: u.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(r) ||
            (function (e) {
              return e ? a.a.createElement(g.a, { source: e }) : null
            })(S) ||
            (function (e) {
              var r = e.length
              return 0 === r ? null : 1 === r ? t(e[0]) : a.a.createElement(y.a, { style: b.circle }, n(e))
            })(k),
          T =
            s ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, w),
          A = E && null != r && r.participants ? Object.keys(r.participants).length - 1 : 0
        return x
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                h.a,
                { ratio: 1 },
                T ? a.a.createElement(v.a, { interactiveStyles: null, link: T, testID: l.a.conversationAvatar }, x) : x,
              ),
              A
                ? (function (e) {
                    var t = e.badgeCount
                    return a.a.createElement(
                      y.a,
                      { style: b.itemAccessory },
                      a.a.createElement(f.a, {
                        count: t,
                        standalone: !0,
                        style: b.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: _,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: A })
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
    bCEw: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')(n('K1iM')),
        a = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        s = o.loadQuery,
        c = o.useTrackLoadQueryInRender,
        l = n('ERkP'),
        u = l.useCallback,
        d = l.useEffect,
        p = l.useRef,
        m = l.useState,
        h = n('K1lQ').getRequest,
        f = { kind: 'NullQueryReference' }
      function v(e) {
        return 'PreloadableConcreteRequest' === e.kind
          ? void 0 !== e.params.metadata.live
          : void 0 !== h(e).params.metadata.live
      }
      e.exports = function (e, t) {
        var n = null != t ? t : f,
          o = i()
        c()
        var l = a(),
          h = p(new Set([n])),
          g = m(function () {
            return n
          }),
          y = g[0],
          _ = g[1],
          b = m(function () {
            return n
          }),
          E = b[0],
          S = b[1]
        n !== E && (h.current.add(n), S(n), _(n))
        var C = u(
            function () {
              l.current && (h.current.add(f), _(f))
            },
            [l],
          ),
          R = u(
            function (t, n) {
              var r =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (l.current) {
                var a,
                  i = s(null !== (a = null == n ? void 0 : n.__environment) && void 0 !== a ? a : o, e, t, r)
                h.current.add(i), _(i)
              }
            },
            [o, e, _, l],
          ),
          w = p(!1)
        return (
          d(function () {
            return function () {
              w.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === w.current)
                return (
                  (w.current = !1),
                  void (
                    'NullQueryReference' !== y.kind &&
                    R(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig })
                  )
                )
              var t = h.current
              if (l.current) {
                var n,
                  a = (0, r.default)(t)
                try {
                  for (a.s(); !(n = a.n()).done; ) {
                    var i = n.value
                    if (i === y) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (v(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
              }
            },
            [y, l, R, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, r.default)(h.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value
                    'NullQueryReference' !== a.kind &&
                      (v(e) ? a.dispose && a.dispose() : a.releaseQuery && a.releaseQuery())
                  }
                } catch (i) {
                  n.e(i)
                } finally {
                  n.f()
                }
              }
            },
            [e],
          ),
          ['NullQueryReference' === y.kind ? null : y, R, C]
        )
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
    cOtO: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationScreen', function () {
          return N
        })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        v = n.n(f),
        g = n('v6aA'),
        y = (n('WNMA'), n('zh9S')),
        _ = n('MMRb'),
        b = n('CDB5'),
        E = n('RqPI'),
        S = n('hqKg'),
        C = n('AQOc'),
        R = n('z2Pn'),
        w = n('pNZL'),
        k = n('G6rE'),
        x = n('oEGd'),
        T = n('X/yg'),
        A = function (e, t) {
          return t.match.params.conversationId
        },
        I = Object(S.createSelector)(
          function (e, t) {
            return _.selectConversation(e, A(0, t))
          },
          _.selectEntries,
          A,
          T.l,
          E.q,
          T.m,
          T.n,
          k.e.selectAll,
          function (e, t) {
            return b.j(e, A(0, t))
          },
          function (e, t) {
            return b.i(e, A(0, t))
          },
          function (e, t, n, r, a, i, o, s, c, l) {
            var u = e && e.data
            return {
              conversation: (u && Object(C.a)(u, t, s)) || void 0,
              conversationId: n,
              isNewGroupConversation: r,
              isUploading: c,
              media: l,
              newConversationParticipants: i,
              perspective: a,
            }
          },
        ),
        O = Object(x.d)(I, function (e) {
          return {
            cancelUpload: Object(T.a)(e.match.params.conversationId),
            googleAnalyticsPageView: y.a,
            removeMedia: Object(T.b)(e.match.params.conversationId),
            scribePageImpression: y.d,
            setLastViewedDmInboxPath: R.h,
            updateTweetDetailNav: w.b,
          }
        }),
        M = n('i4Oy'),
        L = n('Oi4X'),
        P = n('qBaR'),
        F = n('7myi'),
        D = n('rHpw'),
        B = n('7JQg'),
        N = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            a()(this, n),
              (i = t.call(this, e, r)),
              h()(c()(i), '_composer', v.a.createRef()),
              h()(c()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              h()(c()(i), '_updateLastViewDmInboxPath', function () {
                var e = i.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var o = e.conversationId,
              s = e.history,
              l = e.isNewGroupConversation,
              u = e.location
            return o || l || u.pathname !== window.location.pathname || s.replace({ pathname: '/messages' }), i
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.googleAnalyticsPageView,
                    n = e.scribeNamespace,
                    r = e.scribePageImpression,
                    a = e.updateTweetDetailNav
                  r(n), a(n), t(n), this._updateLastViewDmInboxPath()
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
                    r = e.history,
                    a = e.location,
                    i = e.newConversationParticipants,
                    o = e.perspective,
                    s = e.richTextInputContext,
                    c = e.typeaheadWrapper,
                    l = 'string' == typeof a.query.text ? a.query.text : void 0,
                    u = M.a.get('window').width >= D.a.theme.breakpoints.small
                  return v.a.createElement(
                    P.a,
                    { conversation: t, conversationId: n, newConversationParticipants: i, perspective: o },
                    v.a.createElement(L.a, {
                      conversationId: n,
                      history: r,
                      isWide: u,
                      location: a,
                      prefillText: l,
                      richTextInputContext: s,
                      typeaheadWrapper: c,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(N, 'contextType', g.a), h()(N, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: F.a })
      t.default = Object(B.a)({ page: 'messages', section: 'thread' })(O(N))
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
      var u = n('X/yg'),
        d = n('yiKp'),
        p = n.n(d),
        m = (n('849X'), n('TJCb'), n('89tF')),
        h = n('k89r')
      function f(e) {
        var t,
          n,
          r,
          i,
          o,
          s =
            ((t = a.a.useState(y.activeVoiceMessage)),
            (n = a.a.useState(y.playerApi)),
            (r = a.a.useState(y.playerState)),
            (o = Object(h.a)()),
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
        return a.a.createElement(_.Provider, { value: s }, e.children)
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
        _ = a.a.createContext({
          activeVoiceMessage: [y.activeVoiceMessage, b],
          playerApi: [y.playerApi, b],
          playerState: [y.playerState, b],
          scribeAction: null,
        })
      function b() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function E(e) {
        var t = a.a.useContext(i.a).featureSwitches
        return Object(u.j)(t) ? a.a.createElement(f, null, e.children, a.a.createElement(l, null)) : e.children
      }
      var S = _
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
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return B
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = n('VrFO'),
        o = n.n(i),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        m = n('2VqO'),
        h = n.n(m),
        f = n('KEM+'),
        v = n.n(f),
        g = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        y = n.n(g),
        _ = n('pXBW'),
        b = n('6/RC'),
        E = n('UIzd'),
        S = n.n(E),
        C = n('kGix')
      n.d(t, 'a', function () {
        return C.a
      })
      var R = n('fs1G'),
        w = n('0KEI'),
        k = n('lU4h'),
        x = n.n(k),
        T = n('21nk'),
        A = n.n(T),
        I = n('bCEw'),
        O = n.n(I),
        M = n('Ud88'),
        L = n.n(M),
        P = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: R.a })
        },
        F = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), v()(u()(e), 'state', { error: null }), e
          }
          return (
            c()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof _.a)) throw e
                    this.props.errorHandler(e)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.props.children(this.state.error, this.props.retry)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e }
                  },
                },
              ],
            ),
            n
          )
        })(y.a.Component),
        D = function (e) {
          var t = e.query,
            n = e.queryRef,
            r = e.render,
            a = A()(t, n)
          return r({ fetchStatus: C.a.LOADED, data: a, error: null, retry: R.a })
        },
        B = function (e, t) {
          if (b.canUseDOM)
            return function (n) {
              var r = n.fetchPolicy,
                i = void 0 === r ? 'store-or-network' : r,
                o = n.render,
                s = n.variables,
                c = O()(e),
                l = a()(c, 2),
                u = l[0],
                d = l[1],
                p = Object(w.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = x()(s),
                h = a()(m, 1)[0],
                f = y.a.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                y.a.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: i })
                  },
                  [i, d, h],
                ),
                u
                  ? y.a.createElement(
                      y.a.Suspense,
                      { fallback: y.a.createElement(P, { render: o }) },
                      y.a.createElement(
                        F,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: C.a.FAILED, error: t, data: null, retry: n })
                            : y.a.createElement(D, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (r) {
            r.fetchPolicy
            var i = r.render,
              o = r.variables,
              s = L()(),
              c = Object(w.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              l = x()(o),
              u = a()(l, 1)[0],
              d = n.get(s)
            if (d) return d
            var p = y.a.lazy(function () {
              return S()(s, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: C.a.LOADED, data: e, error: null, retry: R.a })
                  },
                  function (e) {
                    return e instanceof _.a
                      ? (c(t.errorConfig.options || {})(e),
                        i({ fetchStatus: C.a.FAILED, data: null, error: e, retry: R.a }))
                      : y.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return y.a.createElement(y.a.Suspense, null, y.a.createElement(p, null))
          }
        }
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        o = n('aWyx'),
        s = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          i = e.participants,
          c = void 0 === i ? {} : i
        if (r === o.a.GROUP && a) return a
        if (Object.keys(c).length) {
          if (r === o.a.GROUP && n) return u
          var l = Object(s.a)(e, t).map(function (e) {
            return e.user
          })
          return m(l, t, r)
        }
      }
      var m = function () {
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
            return d
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
        return A
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        _ = (n('2G9S'), n('ERkP')),
        b = n.n(_),
        E = n('nT9l'),
        S = n('3XMw'),
        C = n.n(S),
        R = 'image',
        w = n('TIdA'),
        k = n('a6qo'),
        x = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
        T = C.a.f93bb3ee,
        A = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              y()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  i = e.props,
                  s = i.accessibilityLabel,
                  c = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  l = o()(i, x)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  b.a.createElement(
                    w.a,
                    a()({}, l, { accessibilityLabel: s, onVariantSelection: n, previewMode: r, testID: R }),
                  ),
                  c ? b.a.createElement(k.a, { align: 'left', altLabel: s }) : null,
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
                  return b.a.createElement(E.a, {
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
        })(b.a.Component)
    },
    qBaR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return k
      })
      n('+KXO'), n('z84I')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('v6aA'),
        o = n('+Kfv'),
        s = n('MMRb'),
        c = n('aA19'),
        l = n('XnpN'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('hBvt'), n('/yvb')),
        m = n('6s7X'),
        h = d.a.h810143c,
        f = function (e) {
          var t = e.accessibilityLabel,
            n = e.conversationId,
            r = e.link,
            i = e.style,
            o = a.a.createElement(m.a, null)
          return a.a.createElement(p.a, {
            accessibilityLabel: t || h,
            hoverLabel: { label: h },
            icon: o,
            key: n,
            link: r,
            pullRight: !0,
            style: i,
            type: 'primaryText',
          })
        },
        v = n('M2mT'),
        g = n('rHpw'),
        y = n('aITJ'),
        _ = n('MWbm'),
        b = n('OhSZ'),
        E = n('zCf4'),
        S = { viewType: 'messages' },
        C = d.a.d4986f85,
        R = d.a.e3e58b6d,
        w = d.a.a9ddbb94
      function k(e) {
        var t,
          n,
          r,
          u,
          d,
          p,
          m = a.a.useContext(i.a),
          h = Object(E.f)(),
          g = Object(E.g)(),
          k = m.featureSwitches.isTrue('dm_vdl_enabled') && m.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
          T = e.conversation,
          A = e.conversationId,
          I = e.newConversationParticipants,
          O = e.perspective,
          M = function (e) {
            null != T && T.trusted ? h.push('/messages') : e()
          },
          L = function () {
            var e,
              t = (null == T ? void 0 : T.type) === s.CONVERSATION_TYPE.GROUP,
              n = (null == g || null === (e = g.state) || void 0 === e ? void 0 : e.position) || 0
            return A
              ? a.a.createElement(
                  _.a,
                  { style: x.rightControlStyles },
                  a.a.createElement(f, {
                    accessibilityLabel: t ? w : R,
                    conversationId: A,
                    link: { pathname: '/messages/'.concat(A, '/info'), state: { position: n } },
                    style: x.infoButton,
                  }),
                )
              : void 0
          }
        return a.a.createElement(
          v.a,
          ((t =
            T && Object.keys(T.participants).length
              ? Object(b.a)({ conversation: T, perspective: O })
              : I
              ? Object(b.a)({ newConversationParticipants: I, perspective: O })
              : C),
          (n =
            T && Object.keys(T.participants).length
              ? a.a.createElement(b.b, { conversation: T, perspective: O, withScreenName: !1 })
              : I
              ? a.a.createElement(b.b, { newConversationParticipants: I, perspective: O, withScreenName: !1 })
              : C),
          (r = k ? 'large' : 'medium'),
          (u = O ? a.a.createElement(c.a, { conversation: T, perspective: O, size: r }) : void 0),
          (d =
            T &&
            T.type === s.CONVERSATION_TYPE.ONE_TO_ONE &&
            O &&
            Object(l.a)(T, O).map(function (e) {
              return e.user.screen_name
            })),
          (p = d ? '@'.concat(d[0]) : void 0),
          {
            backLocation: '/messages',
            onBackClick: M,
            documentTitle: t,
            rightControl: L(),
            title: n,
            titleIconCell: u,
            titleIconCellSize: r,
            subtitle: p,
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: y.b.isKaiOS(),
          }),
          a.a.createElement(o.a, { behavioralEventContext: S }, e.children),
        )
      }
      var x = g.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
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
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        m = n('zIWA'),
        h = o.a.fcd4d489,
        f = o.a.gbed8594,
        v = o.a.g9074da4,
        g = o.a.ad63377d,
        y = o.a.h09b49f7,
        _ = o.a.i6b19b07,
        b = o.a.j7bb1a42,
        E = o.a.ea200ba6,
        S = o.a.cfd2f35d,
        C = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            r = e.isGroup,
            i = e.onBlockClick,
            o = e.onDeleteClick,
            u = e.onReportClick,
            C = e.requestorScreenName,
            w = e.showBlock,
            k = e.showCancel,
            x = e.showDelete,
            T = a.a.useCallback(
              function () {
                u && u(), t()
              },
              [t, u],
            ),
            A = a.a.useCallback(
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
            { accessibilityRole: 'dialog', style: n ? R.flatCorners : R.roundCorners },
            x
              ? a.a.createElement(c.a, {
                  Icon: d.a,
                  actionSubText: y,
                  actionText: r ? v : g,
                  onClick: I,
                  textColor: 'red500',
                })
              : null,
            w
              ? a.a.createElement(c.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: C }), onClick: A })
              : null,
            a.a.createElement(c.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: r ? _ : b({ screenName: C }),
              onClick: T,
            }),
            k ? a.a.createElement(l.a, { onPress: t, style: R.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var R = u.a.create(function (e) {
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
      var r = n('yiKp'),
        a = n.n(r),
        i = n('97Jx'),
        o = n.n(i),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        h = n.n(m),
        f = n('2VqO'),
        v = n.n(f),
        g = n('KEM+'),
        y = n.n(g),
        _ = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        b = n.n(_),
        E = n('1YZw'),
        S = n('zh9S'),
        C = n('P1r1'),
        R = n('AspN'),
        w = n('rxPX'),
        k = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: R.b,
              addToast: E.b,
              processMultipleMedia: R.g,
              removeMediaUpload: R.i,
              scribeAction: S.c,
              preUploadMedia: R.e,
            }
          }),
        x = n('wpu3'),
        T = n('cOB2'),
        A = n('MWbm'),
        I = n('0FVZ'),
        O = n('Oe3h'),
        M = n('rHpw')
      var L = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            a = e.onLayout,
            i = e.sideNavPresent,
            s = e.style,
            c = b.a.useContext(T.a)
          return i
            ? b.a.createElement(
                b.a.Fragment,
                null,
                b.a.createElement(A.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s }, r),
              )
            : b.a.createElement(
                I.a.BottomComposer,
                null,
                b.a.createElement(O.a, { id: 'DMComposerWrapper' }, function (e, i) {
                  return b.a.createElement(
                    A.a,
                    o()({ ref: e() }, i({ accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s })),
                    r,
                    b.a.createElement(A.a, { style: !1 === c.keyboardVisible && P.offsetBottom }),
                  )
                }),
              )
        },
        P = M.a.create(function () {
          return { offsetBottom: { paddingBottom: M.a.iPhoneOffsetBottom } }
        }),
        F = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        D = n('htQn'),
        B = n('t62R'),
        N = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              y()(p()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.id,
                  r = t.label
                ;(0, t.onClick)({ id: n, label: r })
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
                    r = e.label
                  return b.a.createElement(
                    D.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [j.root, n && j.isWide, !n && j.isNarrow],
                    },
                    b.a.createElement(B.b, { weight: 'bold' }, r),
                    b.a.createElement(B.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(b.a.Component),
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
        U = N,
        H = n('cHvH'),
        W = n('mw9i'),
        V = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
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
                  return b.a.createElement(H.a, null, function (r) {
                    var a = r.windowWidth,
                      i = F.a.isTwoColumnLayout(a),
                      o = [i && z.isWide, i && n && z.oneButtonOnly, !i && z.isNarrow]
                    return b.a.createElement(
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
        K = V,
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
        re = n('JYMr'),
        ae = [
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
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(a))), y()(p()(e), 'state', { currentStepIndex: -1 }), e
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
                    t = e >= 0 && e < ae.length ? ae[e].progress : 0
                  return b.a.createElement(re.a, { progress: t })
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
        })(b.a.Component),
        oe = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            return c()(this, n), t.apply(this, arguments)
          }
          return (
            u()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSending,
                    n = e.isUploading,
                    r = e.progress
                  return t && !n
                    ? b.a.createElement(ie, null)
                    : b.a.createElement(re.a, { progress: t ? Math.max(r, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(b.a.PureComponent),
        se = n('Dtul'),
        ce = n('Es6L'),
        le = 'dmComposerAttachments',
        ue = 'dmComposerTextInput',
        de = 'dmComposerSendButton',
        pe = n('GZwR'),
        me = n('aITJ'),
        he = n('6OUF'),
        fe = n('9Xij'),
        ve = n('/yvb'),
        ge = n('OiMc'),
        ye = n('v6aA'),
        _e = n('gpVt'),
        be = n('Lsrn'),
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
                style: [be.a.root, e.style],
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
      Se.metadata = { width: 24, height: 24 }
      var Ce = Se,
        Re = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Ee.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [be.a.root, e.style],
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
      Re.metadata = { width: 24, height: 24 }
      var we = Re,
        ke = n('iySH'),
        xe = J.a.ee230734,
        Te = J.a.ca0ce0e4,
        Ae = J.a.cdcebd22,
        Ie = J.a.ic8c615d,
        Oe = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(x.b)({ maxNumberOfPhotos: 1 }),
        Pe = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e, r) {
            var i, s, l
            c()(this, n),
              (l = t.call(this, e, r)),
              y()(p()(l), '_handleLayout', function (e) {
                var t = l.props.onHeightChange,
                  n = l.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(ce.a)() || (t && t(r.height)),
                  r.width <= M.a.theme.breakpoints.small && !n
                    ? l.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > M.a.theme.breakpoints.small && n && l.setState({ mediaButtonsCollapsible: !1 }))
              }),
              y()(p()(l), '_renderQuickReplyPicker', function () {
                var e = l.props.quickReplyOptions,
                  t = l.state.isQuickReplyOpen
                return e && t
                  ? b.a.createElement(K, { onOptionChoose: l._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              y()(p()(l), '_renderComposeBox', function () {
                return b.a.createElement(A.a, { style: Fe.composeBoxContainer }, l._renderMainContent())
              }),
              y()(p()(l), '_renderMainContent', function () {
                var e = l.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = l.state.value,
                  a = n
                return a
                  ? b.a.createElement(
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
              y()(p()(l), '_renderFieldTextInput', function (e) {
                var t = l.props,
                  n = t.disabled,
                  r = t.placeholderText,
                  a = t.richTextInputContext,
                  i = me.b.isKaiOS() ? Ae : r || Te,
                  s = l.state,
                  c = s.editorState,
                  u = s.mediaButtonsCollapsible,
                  d = s.value,
                  p = !!a,
                  m = a ? { editorState: c, element: a.element } : void 0,
                  h = a
                    ? {
                        onChange: l._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: c, element: a.element },
                      }
                    : { onChange: l._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return b.a.createElement(
                  he.a,
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
                      richTextInputContext: n ? void 0 : m,
                      style: Fe.composeInput,
                      testID: ue,
                      useCacheForDOMMeasurements: !l._isSendDisabled() && !u,
                      value: d,
                    },
                    h,
                  ),
                )
              }),
              y()(
                p()(l),
                '_getHandleRichTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), l._handleRichTextChange(t)
                  }
                }),
              ),
              y()(
                p()(l),
                '_getHandlePlainTextChange',
                Object(ne.a)(function (e) {
                  return function (t) {
                    null == e || e(t), l._handlePlainTextChange(t)
                  }
                }),
              ),
              y()(p()(l), '_handleTypeaheadStateChange', function (e) {
                l.setState({ isTypeaheadActive: e })
              }),
              y()(p()(l), '_renderAttachments', function () {
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
                  u = s.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  m = null == p ? void 0 : p.altText,
                  h = null == p ? void 0 : p.defaultAltText,
                  f = Object(_e.b)(o)
                return b.a.createElement(
                  b.a.Fragment,
                  null,
                  d
                    ? b.a.createElement(
                        A.a,
                        { style: Fe.attachmentContainer, testID: le },
                        b.a.createElement(
                          fe.a,
                          { ratio: u / c, style: Fe.aspectContainer },
                          b.a.createElement(
                            A.a,
                            { style: Fe.mediaPreviewContainer },
                            b.a.createElement(ee.a, {
                              accessibilityLabel: m || h,
                              mediaItem: d,
                              onClick: l._canEditImage ? l._handleClickMediaDetail : void 0,
                              onEdit: l._canEditImage || l._canEditVideo ? l._handleClickMediaDetail : void 0,
                              onRemove: l._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: Fe.mediaPreview,
                              withAltTextLabel: !!m,
                              withCloseButton: !i,
                              withEditButton: (l._canEditImage || l._canEditVideo) && !i,
                              withEditIcon: !0,
                            }),
                          ),
                        ),
                        t &&
                          t.provider &&
                          t.gifUrl &&
                          b.a.createElement(
                            A.a,
                            { style: Fe.gifAttribution },
                            b.a.createElement(G.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : f && !a
                    ? b.a.createElement(_e.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: Fe.cardPreviewContainer,
                        urls: f,
                      })
                    : null,
                )
              }),
              y()(p()(l), '_renderEmojiPicker', function () {
                return l.props.withEmojiPicker && me.b.isDesktopOS()
                  ? b.a.createElement(q.a, {
                      disabled: l.props.disabled,
                      onEmojiSelect: l._handleEmojiSelect,
                      onPress: l._handleTextInputFocus,
                      size: 'small',
                      textInputRef: l._textInput || void 0,
                    })
                  : null
              }),
              y()(p()(l), '_renderPrimaryActionButton', function (e) {
                var t = l.props,
                  n = t.primaryActionIcon,
                  r = t.primaryActionLabel,
                  a = t.quickReplyOptions,
                  i = l._hasMessageText()
                return !a || i || e
                  ? b.a.createElement(
                      ve.a,
                      {
                        accessibilityLabel: r,
                        disabled: l._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: l._handlePrimaryAction,
                        size: 'medium',
                        style: Fe.actionButton,
                        testID: de,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : l._renderQRToggleButton()
              }),
              y()(p()(l), '_renderSecondaryActionButton', function () {
                var e = l.props,
                  t = e.secondaryActionDisabledPopoverRenderer,
                  n = e.secondaryActionLabel,
                  r = e.shouldEnableSecondaryActionFunc,
                  a = e.shouldShowSecondaryActionFunc
                if ((a && !a()) || !n) return null
                var i = !r || r(),
                  o = b.a.createElement(
                    ve.a,
                    {
                      accessibilityLabel: n,
                      disabled: !i,
                      onPress: l._handleSecondaryAction,
                      style: Fe.actionButton,
                      type: 'primaryOutlined',
                    },
                    l.props.secondaryActionLabel,
                  )
                return i || !t
                  ? o
                  : b.a.createElement(
                      ge.a,
                      { enableHover: !0, preferredVerticalOrientation: 'up', renderContent: t, withArrow: !0 },
                      o,
                    )
              }),
              y()(p()(l), '_renderQRToggleButton', function () {
                var e = l.state.isQuickReplyOpen
                return b.a.createElement(ve.a, {
                  accessibilityLabel: Ie,
                  icon: e ? b.a.createElement(Ce, null) : b.a.createElement(we, null),
                  onPress: l._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Fe.actionButton,
                  type: 'brandText',
                })
              }),
              y()(p()(l), '_renderComposer', function () {
                var e = l.props.attachment,
                  t = Me(e),
                  n = l._renderComposeBox(),
                  r = l._renderPrimaryActionButton(t),
                  a = l._renderSecondaryActionButton()
                return b.a.createElement(
                  A.a,
                  { style: [Fe.composer, t && Fe.composerWithAttachment] },
                  t ? null : l._renderMediaButtons(),
                  n,
                  a,
                  r,
                )
              }),
              y()(p()(l), '_renderMediaButtons', function () {
                var e = l.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  r = l.state,
                  a = r.mediaButtonsCollapsed,
                  i = r.mediaButtonsCollapsible && a
                return b.a.createElement(
                  A.a,
                  { style: Fe.uploadButtons },
                  i
                    ? b.a.createElement(ve.a, {
                        accessibilityLabel: xe,
                        icon: b.a.createElement(ke.a, null),
                        onMouseDown: l._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !i ? l._renderMediaPicker() : null,
                  t && !i ? l._renderGifButton() : null,
                )
              }),
              y()(p()(l), '_handleShowMediaControlsMouseDown', function () {
                var e = l.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                l.setState({ mediaButtonsCollapsed: !1 }),
                  t(a()(a()({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              y()(p()(l), '_handleReturn', function (e) {
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
              y()(p()(l), '_handleClickMediaDetail', function () {
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
              y()(p()(l), '_handleAddMediaFiles', function (e) {
                var t = l.props,
                  n = t.addMedia,
                  r = t.addToast,
                  a = t.dataSaverMode,
                  i = t.onAddMedia,
                  o = t.preUploadMedia,
                  s = t.processMultipleMedia,
                  c = t.removeMedia,
                  u = t.removeMediaUpload
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
                    : (r({ text: Oe }), u(t))
                })
              }),
              y()(p()(l), '_handleEmojiSelect', function (e) {
                var t = l.state.editorState,
                  n = l.props.richTextInputContext
                if (n && t) {
                  var r = n.insertTextAtCursor(t, e.text)
                  l._handleRichTextChange(r)
                }
              }),
              y()(p()(l), '_handleRemoveMedia', function (e) {
                return function () {
                  l.props.removeMedia && l.props.removeMedia(e)
                }
              }),
              y()(p()(l), '_handlePrimaryAction', function (e) {
                if (!l._isSendDisabled()) {
                  var t = l.props.onPrimaryAction
                  l._textInput &&
                    l._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    l._closeQuickReplyPicker()
                }
              }),
              y()(p()(l), '_handleSecondaryAction', function (e) {
                var t = l.props.onSecondaryAction
                l._textInput &&
                  l._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              y()(p()(l), '_handleRichTextChange', function (e) {
                var t = l.props,
                  n = t.onTyping,
                  r = t.richTextInputContext,
                  a = l.state.value,
                  i = e.getCurrentContent().getPlainText(),
                  o = r ? r.convertEmojiToEntities(e) : null
                l.setState({ editorState: o, value: i }), a !== i && (null == n || n())
              }),
              y()(p()(l), '_handlePlainTextChange', function (e) {
                var t = l.props.onTyping,
                  n = l.state.value,
                  r = e.target.value
                l.setState({ value: r }), n !== r && (null == t || t())
              }),
              y()(p()(l), '_handleOnBlur', function () {
                var e = l.props.onBlur,
                  t = l.state.mediaButtonsCollapsible
                e && e(), t && l.setState({ mediaButtonsCollapsed: !1 })
              }),
              y()(p()(l), '_handleTextInputFocus', function () {
                var e = l.props.quickReplyOptions,
                  t = l.state,
                  n = t.isQuickReplyOpen,
                  r = t.mediaButtonsCollapsible
                e && n && l._closeQuickReplyPicker(), r && l.setState({ mediaButtonsCollapsed: !0 })
              }),
              y()(p()(l), '_handleQROptionSelection', function (e, t) {
                var n = l.props,
                  r = n.disabled,
                  a = n.onPrimaryAction
                r || (a({ quickReply: { id: e, selected_id: t.id } }, t.label), l._closeQuickReplyPicker())
              }),
              y()(p()(l), '_handleQuickReplyPickerToggle', function () {
                l.setState({ isQuickReplyOpen: !l.state.isQuickReplyOpen })
              }),
              y()(p()(l), '_validateMedia', function (e) {
                return !Me(l.props.attachment) && Le(e)
              }),
              y()(p()(l), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    l._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              y()(p()(l), '_isSendDisabled', function () {
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
              y()(p()(l), '_hasMessageText', function () {
                return !!(l.state.value || '').trim()
              }),
              y()(p()(l), '_closeQuickReplyPicker', function () {
                l.setState({ isQuickReplyOpen: !1 })
              }),
              y()(p()(l), 'handleAddMediaFiles', function (e) {
                return l._handleAddMediaFiles(e)
              }),
              y()(p()(l), '_setTextInputRef', function (e) {
                l._textInput = e
              })
            var u = e.prefillText,
              d = e.richTextInputContext
            return (
              (l.state = {
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
              l
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
                    r = e.isUploading,
                    a = e.mediaUploadProgress,
                    i = e.placeholderText,
                    o = e.style,
                    s = i || Te,
                    c = Object(ce.a)(),
                    l = c && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return b.a.createElement(
                    L,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: c,
                      style: [Fe.root, l && Fe.dtabOffset, o],
                    },
                    b.a.createElement(oe, { isSending: n, isUploading: r, progress: n ? Math.max(a, 0.02) : 0 }),
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
                    style: Fe.mediaPicker,
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
                  return b.a.createElement(Q.a, {
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
        })(b.a.Component)
      y()(Pe, 'contextType', ye.a),
        y()(Pe, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var Fe = M.a.create(function (e) {
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
      t.a = k.forwardRef(Pe)
    },
    uwR9: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return c
        })
      var r = n('ERkP'),
        a = n.n(r),
        i = n('/FNr'),
        o = n('Rk1B'),
        s = n('RH6X')
      function c() {
        return a.a.createElement(o.default, null, function (e) {
          var t = e.richTextInputContext
          e.typeaheadWrapper
          return a.a.createElement(i.default, { richTextInputContext: t, typeaheadWrapper: s.a })
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
      var r = n('ERkP'),
        a = n.n(r),
        i = n('t62R'),
        o = n('aWyx'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.c1d4ac83,
        u = c.a.abc7b032,
        d = c.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return a.a.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        m = function (e, t) {
          return e >= 2
            ? a.a.createElement(
                c.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                a.a.createElement(p, { conversationId: t }, c.a.d1242bcc({ count: e })),
              )
            : a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        h = function (e) {
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
                : u
            case o.b.CONVERSATION_NAME_UPDATE:
              var m = a.a.createElement(i.b, null, e.conversation_name)
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(m)
                  : (function (e, t) {
                      return a.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        a.a.createElement(i.b, null, e),
                        t,
                      )
                    })(s, m)
                : (function (e) {
                    return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(m)
            case o.b.JOIN_CONVERSATION:
              return (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name)
                ? (function (e) {
                    return a.a.createElement(
                      c.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      a.a.createElement(i.b, null, e),
                    )
                  })(s)
                : d
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(a.a.createElement(h, { entry: e, users: r }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, a.a.createElement(i.b, null, e), t)
                  : a.a.createElement(c.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name),
                a.a.createElement(h, { entry: e, users: r }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
