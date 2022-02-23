;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53, 177],
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
    '/FNr': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DmConversationTimelineQuery', function () {
          return k
        }),
        n.d(t, 'default', function () {
          return w
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('lTEL'), n('7x/C'), n('kYxP'), n('wFPu'), n('uFXj'), n('zh9S')),
        o = n('ERkP'),
        s = n.n(o),
        l = n('i4Oy'),
        c = n('mw9i'),
        u = n('4AMG'),
        d = n('sl05')
      function p(e) {
        var t = e.conversation,
          n = e.isWide,
          a = e.perspective
        return s.a.useCallback(
          function (e) {
            return t
              ? s.a.createElement(
                  c.a,
                  { style: d.a.root },
                  s.a.createElement(u.a, {
                    conversation: t,
                    inboxType: 'primary',
                    isWide: n,
                    onHistoryRequest: function () {},
                    perspective: a,
                    scribeNamespace: {},
                    style: d.a.activity,
                  }),
                )
              : null
          },
          [t, n, a],
        )(e)
      }
      var m,
        h = n('qBaR'),
        f = n('v//M'),
        v = (n('enFi'), n('NjAB')),
        g = n('z2Pn'),
        b = n('rHpw'),
        y = n('pNZL'),
        _ = n('n0Rl'),
        E = n('h3MB'),
        S = n('zCf4'),
        C = { page: 'messages', section: 'thread' },
        k = void 0 !== m ? m : (m = n('GjeS')),
        I = Object(_.b)(k, { errorConfig: { context: 'DM_CONVERSATION_TIMELINE' } })
      function w(e) {
        var t = e.richTextInputContext,
          n = e.typeaheadWrapper,
          a = Object(S.f)(),
          o = Object(S.g)(),
          c = Object(S.h)().conversationId
        s.a.useEffect(function () {
          i.d(C), i.a(C), Object(y.b)(C)
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
              c = e.retry,
              u = (function (e) {
                var t, n, a, i, o
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
                var l,
                  c =
                    null === (a = s[0]) ||
                    void 0 === a ||
                    null === (i = a.dm_event) ||
                    void 0 === i ||
                    null === (o = i.legacy) ||
                    void 0 === o
                      ? void 0
                      : o.conversation,
                  u = Object(v.b)(s, [E.b]).entities.entries,
                  d = Object(v.b)([c], [E.a]).entities.conversations
                for (var p in d) {
                  l = d[p]
                  break
                }
                var m = []
                for (var h in u) m.push(u[h])
                return m.reverse(), r()(r()({}, l), {}, { entries: m, social_proof: [] })
              })((null == e ? void 0 : e.data) || null),
              d = 'string' == typeof o.query.text ? o.query.text : void 0,
              m = l.a.get('window').width >= b.a.theme.breakpoints.small
            return s.a.createElement(f.a, {
              fetchStatus: i,
              onRequestRetry: c,
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
                        history: a,
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
          [a, o.query.text, t, n],
        )
        return c ? s.a.createElement(I, { fetchPolicy: 'store-and-network', render: u, variables: { id: c } }) : null
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
    '21nk': function (e, t, n) {
      'use strict'
      var a = n('I9iR'),
        r = n('3KVO'),
        i = n('yLYC'),
        o = n('Ud88'),
        s = (n('/2Cm'), n('aQQo').useTrackLoadQueryInRender),
        l = (n('ERkP').useDebugValue, n('K1lQ').__internal),
        c = l.fetchQueryDeduped,
        u = l.fetchQuery
      e.exports = function (e, t, n) {
        s()
        var l,
          d = o(),
          p = t.fetchKey,
          m = t.fetchPolicy,
          h = t.source,
          f = t.variables,
          v = t.networkCacheConfig,
          g = i(e, f, v)
        if ('PreloadedQuery_DEPRECATED' === t.kind)
          g.request.node.params.name !== t.name && a(!1),
            (l = {
              componentDisplayName: 'usePreloadedQuery()',
              fetchKey: p,
              fetchObservable: c(d, g.request.identifier, function () {
                return d === t.environment && null != h
                  ? d.executeWithSource({ operation: g, source: h })
                  : d.execute({ operation: g })
              }),
              fetchPolicy: m,
              query: g,
              renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
            })
        else {
          var b = u(d, g)
          l = {
            componentDisplayName: 'usePreloadedQuery()',
            fetchObservable: null != h && d === t.environment ? h.ifEmpty(b) : (t.environment, b),
            fetchKey: p,
            fetchPolicy: m,
            query: g,
            renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy,
          }
        }
        return r(l)
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
    '2Daw': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return O
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        s = n('5Yy7'),
        l = n.n(s),
        c = n('2VqO'),
        u = n.n(c),
        d = n('KEM+'),
        p = n.n(d),
        m = (n('uFXj'), n('ERkP')),
        h = n.n(m),
        f = n('LCtV'),
        v = n('3XMw'),
        g = n.n(v),
        b = n('VPdC'),
        y = n('pKoL'),
        _ = n('MWbm'),
        E = n('rFBM'),
        S = n('/yvb'),
        C = n('9Xij'),
        k = n('rHpw'),
        I = n('hOZg'),
        w = n('Mbn/'),
        x = n('T8pk'),
        R = g.a.b87ca51a,
        T = g.a.eebff22c,
        O = (function (e) {
          l()(n, e)
          var t = u()(n)
          function n() {
            return r()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.borderRadius,
                    n = e.maskStyle,
                    a = e.mediaItem,
                    r = e.onAddMediaFiles,
                    i = e.onCrop,
                    o = e.onRemove,
                    s = e.rootStyle,
                    l = e.withDragDrop,
                    c = a && !a.uploader,
                    u = h.a.createElement(
                      h.a.Fragment,
                      null,
                      this._renderPreview(),
                      c
                        ? null
                        : h.a.createElement(
                            h.a.Fragment,
                            null,
                            h.a.createElement(_.a, { style: [M.mask, n, A[t]] }),
                            h.a.createElement(
                              _.a,
                              { style: M.mediaPicker },
                              this._renderMediaEdit(),
                              i ? this._renderMediaCrop() : null,
                              o ? this._renderMediaRemove() : null,
                            ),
                          ),
                    )
                  return h.a.createElement(
                    _.a,
                    { style: [M.container, s, A[t]] },
                    l && r ? h.a.createElement(E.a, { onFilesAdded: r, style: [M.dragDropContainer, A[t]] }, u) : u,
                  )
                },
              },
              {
                key: '_renderMediaRemove',
                value: function () {
                  var e = this.props.onRemove
                  return h.a.createElement(S.a, {
                    accessibilityLabel: R,
                    hoverLabel: { label: R },
                    icon: h.a.createElement(I.a, null),
                    onPress: e,
                    size: 'large',
                    style: M.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaCrop',
                value: function () {
                  var e = this.props,
                    t = e.onCrop,
                    n = e.onRemove
                  return h.a.createElement(S.a, {
                    accessibilityLabel: T,
                    icon: h.a.createElement(w.a, null),
                    onPress: t,
                    size: 'large',
                    style: n ? M.middleButton : M.rightButton,
                    type: 'onMediaDominantColorFilled',
                  })
                },
              },
              {
                key: '_renderMediaEdit',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptVideo,
                    a = e.accessibilityLabel,
                    r = e.onAddMediaFiles,
                    i = e.onEdit,
                    o = h.a.createElement(x.a, null)
                  return r
                    ? h.a.createElement(b.a, {
                        acceptGifs: t,
                        acceptVideo: n,
                        accessibilityLabel: a,
                        icon: o,
                        onChange: r,
                        size: 'large',
                        type: 'onMediaDominantColorFilled',
                      })
                    : h.a.createElement(S.a, {
                        accessibilityLabel: a,
                        icon: o,
                        onPress: i,
                        size: 'large',
                        style: M.edit,
                        type: 'onMediaDominantColorFilled',
                      })
                },
              },
              {
                key: '_renderPreview',
                value: function () {
                  var e = this.props,
                    t = e.aspectRatio,
                    n = e.borderRadius,
                    a = e.currentContent,
                    r = e.mediaItem
                  return r
                    ? h.a.createElement(
                        C.a,
                        { ratio: t },
                        h.a.createElement(y.a, {
                          borderRadius: n,
                          enableGif: !1,
                          mediaItem: r,
                          style: M.mediaPreview,
                          withCloseButton: !1,
                        }),
                      )
                    : a
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      p()(O, 'defaultProps', { acceptGifs: !1, acceptVideo: !1, aspectRatio: 1, borderRadius: f.a.NONE })
      var A = k.a.create(function (e) {
          return {
            infinite: { borderRadius: e.borderRadii.infinite },
            medium: { borderRadius: e.borderRadii.small },
            none: { borderRadius: e.borderRadii.none },
          }
        }),
        M = k.a.create(function (e) {
          return {
            mediaPreview: { height: '100%' },
            mediaPicker: {
              alignItems: 'center',
              flexDirection: 'row',
              height: '100%',
              justifyContent: 'center',
              opacity: 0.75,
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            rightButton: { marginLeft: e.spaces.space32 },
            middleButton: { marginLeft: e.spaces.space32, marginRight: '-'.concat(e.spaces.space12) },
            mask: {
              backgroundColor: e.colors.translucentBlack30,
              height: '100%',
              position: 'absolute',
              top: 0,
              width: '100%',
            },
            container: { justifyContent: 'center', overflow: 'hidden' },
            dragDropContainer: {
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.transparent,
              borderStyle: 'solid',
            },
            edit: { margin: '-'.concat(e.spaces.space12) },
          }
        })
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
        k = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        I = function (e) {
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
                  ? Math.max(0, k(r))
                  : _.a.offsetCorrection(e, r)
              },
            },
          )
        },
        w = (n('lTEL'), n('7x/C'), n('kYxP'), n('KOtZ'), n('gbD7')),
        x = (n('Blm6'), n('b9JY')),
        R = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(x.b)(e) && Object(x.b)(t)) {
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
        O = (n('1t7P'), n('jQ/y'), n('z84I'), n('ho0z'), n('uFXj'), n('v6aA')),
        A = n('XnpN'),
        M = n('LhSm'),
        L = n('I4+6'),
        F = n('rHpw'),
        P = n('PbQQ'),
        D = n('cm6r'),
        N = n('jV+4'),
        B = n('pBrB'),
        j = n('wCd/'),
        U = function (e, t) {
          var n = Object(A.a)(e, t).map(function (e) {
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
        H = F.a.create(function (e) {
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
            r = g.a.useContext(O.a).loggedInUserId
          if (!t) return null
          var i = U(t, r || ''),
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
          return g.a.createElement(P.a.Consumer, null, function (e) {
            return g.a.createElement(
              D.a,
              {
                interactiveStyles: y,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [H.root, a && b && H.borderBottom],
              },
              g.a.createElement(N.a, {
                isVerified: d,
                name: m,
                screenName: h,
                style: H.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && u
                ? g.a.createElement(B.a, {
                    description: o,
                    entities: s,
                    style: [H.profileInfoItemMargin, H.description],
                    userId: u,
                    withheldDescription: f,
                    withheldEntities: v,
                  })
                : null,
              l && c
                ? g.a.createElement(j.a, {
                    followersCount: l,
                    friendsCount: c,
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
        W = n('MMRb'),
        G = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('LW0h'), n('g54k')),
        q = n('aA19'),
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
                            g.a.createElement(q.a, { conversation: n, perspective: i }),
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
                  D.a,
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
                  D.a,
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
        re = Object(G.a)(ne),
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
        ke = n('G6rE'),
        Ie = n('P1r1'),
        we = { scribeAction: Se.c },
        xe = Object(_e.createSelector)(
          function (e, t) {
            return ke.e.select(e, t.senderId)
          },
          Ie.l,
          Ie.r,
          function (e, t, n) {
            return { user: Ce(e), displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Re = Object(Ee.g)(xe, we),
        Te = (n('0zG9'), n('jwue'), n('+oxZ'), n('KqXw'), n('MvUL'), n('1YZw')),
        Oe = n('rxPX'),
        Ae = n('0KEI'),
        Me = n('RqPI'),
        Le = Object(Oe.a)()
          .propsFromState(function () {
            return { reporterCountry: Me.y, reporterLanguage: Me.o }
          })
          .propsFromActions(function () {
            return {
              addToast: Te.b,
              createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
              ),
              deleteEntry: W.deleteEntry,
            }
          })
          .withAnalytics(),
        Fe = n('k49u'),
        Pe = n('LVU8'),
        De = n('3XMw'),
        Ne = n.n(De),
        Be = Ne.a.f58dff33,
        je = Ne.a.ad5a8e8e,
        Ue =
          ((me = {}),
          h()(me, Fe.a.MissingParameter, { toast: Object(Pe.a)(Be) }),
          h()(me, Fe.a.DirectMessageDestroyPermissionsError, { toast: { text: je } }),
          h()(me, 'showToast', !0),
          me),
        He = (n('jQ3i'), n('x4t0'), n('xCUF')),
        Ke = n('uKEd'),
        Ve = [],
        ze = Object(_e.createSelector)(
          function (e) {
            return Object(Ke.l)(e).entries
          },
          function (e, t) {
            return Object(Ke.p)(e, t.entry.id) || Ve
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
          createReaction: Ke.d,
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: He.d,
          removeReaction: Ke.k,
        },
        Ge = Object(Ee.g)(ze, We),
        qe = n('X/yg'),
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
            c = g.a.useContext(O.a).featureSwitches,
            u = Object(Xe.b)(r, c),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = L.a.generate({ backgroundColor: F.a.theme.colors.gray50, color: F.a.theme.colors.gray700 })
          return g.a.createElement(
            D.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: i ? p : null,
              onPress: s,
              style: [$e.container].concat(Ye()(l || [])),
            },
            g.a.createElement(J.b, { size: a, style: $e.unsetLineHeight }, u),
            n
              ? g.a.createElement(Je.a, { color: 'gray700', containerStyle: $e.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        $e = F.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        et = n('pHkl'),
        tt = n('Irs7'),
        nt = Ne.a.ca7a2214,
        at = Ne.a.fc0e94b7,
        rt = (function (e) {
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
                  c = Object(qe.c)(i)
                r.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: l,
                  action: 'success',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? et.h.GROUP : et.h.ONE_TO_ONE,
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
                  return g.a.createElement(X.a, { style: ot.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(rt, 'contextType', O.a)
      var it = Object(tt.a)(Ge(rt)),
        ot = F.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        st = n('OiMc'),
        lt = (function (e) {
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
      h()(lt, 'contextType', V.a)
      var ct = n('TnY3'),
        ut = n('mjJ+'),
        dt = n('Q0VY'),
        pt = n('eb3s'),
        mt = n('/yvb'),
        ht = n('ZToW'),
        ft = n('CaKu'),
        vt = n('i4Oy'),
        gt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        bt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            a = oe()(n, 2),
            r = a[0],
            i = a[1]
          return !((0 === r || 1 === r) && e.length === i)
        },
        yt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var a = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (a) return bt(t.text, a.indices)
          if (n.card) {
            var r,
              i = ((null === (r = t.entities) || void 0 === r ? void 0 : r.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return bt(t.text, i && i.indices)
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
          var a = 1.25 * F.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - a),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a),
          }
        },
        Ct = n('hiGS'),
        kt = n('zIWA'),
        It = n('Lsrn'),
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
      xt.metadata = { width: 24, height: 24 }
      var Rt = xt,
        Tt = n('DlVf'),
        Ot = n('ACHU'),
        At = n('UgB4'),
        Mt = n('fz3c'),
        Lt = Ne.a.ba60339a,
        Ft = Ne.a.j4bfee22,
        Pt = Ne.a.d96cf7cd,
        Dt = Ne.a.faddd3a2,
        Nt = Ne.a.eb497e08,
        Bt = Ne.a.b170974a,
        jt = Ne.a.i202bd22,
        Ut = Ne.a.f2e5491a,
        Ht = Ne.a.f88553c8,
        Kt = Ne.a.ifea3114,
        Vt = Ne.a.cac14829,
        zt = Ne.a.h63a5c3b,
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
                  r = t.featureSwitches,
                  o = t.isSent,
                  s = t.reporterCountry,
                  l = t.reporterLanguage,
                  c = Mt.a.DMMessage,
                  u = n.contextualScribeNamespace,
                  d = [{ text: Lt, Icon: Ct.a, isEmphasized: !0, onClick: i._handleShowDeleteConfirmation(e) }]
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
                    d.push({
                      text: jt,
                      Icon: kt.a,
                      link: {
                        pathname: '/i/safety/report_story_start',
                        state: { input: { requested_variant: JSON.stringify(m) } },
                      },
                      onClick: i.props.onReportMessage,
                    })
                  } else
                    d.push({
                      text: jt,
                      Icon: kt.a,
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
                  ft.a.isAvailable() && d.push({ text: Ut, Icon: Rt, onClick: i._handleCopyMessageText }),
                  g.a.createElement(ut.a, {
                    isFixed: i.context.isDrawer,
                    items: d,
                    onCloseRequested: i._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              h()(l()(i), '_handleCopyMessageText', function (e) {
                var t = i.props.addToast,
                  n = i._replaceMessageUrls()
                n && (ft.a.setString(n), t({ text: Ht })), e && e()
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
                  c = Object(qe.c)(r)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: r.conversation_id,
                    conversation_type: s ? et.h.GROUP : et.h.ONE_TO_ONE,
                    conversation_participant_count: l,
                    message_type: c,
                    inbox_type: Object(qe.h)(o),
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
                t.scribe({ component: 'reaction_button', element: Object(qe.c)(n), action: 'click' }),
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
                  dt.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (i.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (i._hasMedia = _t(i.props.entry)),
              (i._isNarrow = vt.a.get('screen').width < F.a.theme.breakpoints.xSmall),
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
                        qt.messageActions,
                        r ? qt.messageActionsLeft : qt.messageActionsRight,
                        l ? qt.visible : qt.invisible,
                        s && qt.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? qt.messageActionsMediaNarrow : qt.messageActionsNarrow),
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
                        confirmButtonLabel: Pt,
                        confirmButtonType: 'destructiveFilled',
                        headline: Ft,
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
                    accessibilityLabel: Kt,
                    hoverLabel: { label: Kt },
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
                    s = g.a.createElement(Tt.a, { style: i ? qt.vdlActionIcon : qt.actionIcon })
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
                    t = g.a.createElement(Ot.a, { style: e ? qt.vdlActionIcon : qt.actionIcon })
                  return g.a.createElement(mt.a, {
                    accessibilityLabel: Nt,
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
                    a = t.containerIsFocused,
                    r = t.containerIsHovered,
                    i = t.isDraft,
                    o = this.state.actionsAreActive,
                    s = ((e = this.props.entry), !yt(e) && _t(e) && !ht.a.isEnabled)
                  return !i && (s || (n && !ht.a.isEnabled) || a || r || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Wt, 'contextType', V.a)
      var Gt = Object(ct.a)(Le(Wt)),
        qt = F.a.create(function (e) {
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
        Qt = g.a.createElement(At.a, { style: qt.vdlActionIcon }),
        Yt = n('97Jx'),
        Xt = n.n(Yt),
        Jt = (n('6U7i'), n('CDB5')),
        Zt = Object(Oe.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: W.removeEntry,
              sendMessage: Jt.m,
            }
          })
          .withAnalytics(),
        $t = '87.5%',
        en = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        tn = [],
        nn = function (e, t) {
          return Object(Ke.p)(e, t.entryId) || tn
        },
        an = function (e) {
          return Object(Ke.l)(e).entries
        },
        rn = {
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        on = Object(Ee.e)(function () {
          return Object(_e.createSelector)(an, nn, Me.q, en.d, function (e, t, n, a) {
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
          return Object(Ke.l)(e).entries
        },
        un = function (e, t) {
          return Object(Ke.p)(e, ln(0, t)) || sn
        },
        dn = function (e, t) {
          return ke.e.selectMany(
            e,
            (function (e, t) {
              return Object(Ke.q)(e, ln(0, t))
            })(e, t),
          )
        },
        pn = {
          removeReaction: Ke.k,
          fetchUpdatesIfNeeded: He.d,
          createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        mn = Object(Ee.e)(function () {
          return Object(_e.createSelector)(cn, un, Me.q, dn, en.d, function (e, t, n, a, r) {
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
        vn = Ne.a.gf5e9ea6,
        gn = Ne.a.a2d48778,
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
          var t = g.a.useContext(O.a).featureSwitches,
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
            m = g.a.createElement(Ze, { emojiSize: 'title4', emotion: r.reactionKey, focusable: !1 }),
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
                    mt.a,
                    {
                      accessibilityLabel: gn({ emoji: Object(Xe.b)(r.reactionKey, t) }),
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
        Cn = Ne.a.b772cd65,
        kn = Ne.a.c0098d49,
        In = Ne.a.j85999eb,
        wn = (function (e) {
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
                  ? g.a.createElement(En.a, { title: kn })
                  : g.a.createElement(J.b, { visuallyHidden: !0 }, kn)
              }),
              h()(l()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  X.a,
                  { accessibilityLabel: In, style: [xn.container, 'sheet' === n ? xn.sheet : xn.popover] },
                  e._renderUserCells(t),
                )
              }),
              h()(l()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    mt.a,
                    { key: 'button_done', onPress: e, style: xn.cancelButton, type: 'primaryOutlined' },
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
      h()(wn, 'contextType', V.a)
      var xn = F.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Rn = Object(ct.a)(Object(tt.a)(mn(wn))),
        Tn = Ne.a.h95f9e76,
        On = (function (e) {
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
                  return g.a.createElement(Ze, {
                    count: l,
                    emojiSize: o,
                    emotion: r,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: r,
                    style: [
                      n === s && An.rightPadding,
                      An.elementPadding,
                      i === r ? An.selfSelect : null,
                      t && An.isHoveredDMReaction,
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
                        An.container,
                        a ? An.marginShort : An.marginLong,
                        r ? An.alignRight : An.alignLeft,
                        o ? An.visible : An.invisible,
                      ],
                    },
                    g.a.createElement(
                      Rn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        D.a,
                        {
                          accessibilityLabel: l,
                          focusable: !0,
                          interactiveStyles: s,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: An.content,
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
        An = F.a.create(function (e) {
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
        Mn = Object(tt.a)(on(On)),
        Ln = n('Xrkv'),
        Fn = Ne.a.icd0bf34,
        Pn = Ne.a.e8bd8fec,
        Dn = Ne.a.b2d32fad,
        Nn = Ne.a.a763d33e,
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
                    { style: jn.root },
                    g.a.createElement(
                      J.b,
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
                  return n ? (t ? Dn : Fn) : a.length ? Nn({ count: a.length }) : Pn
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
                        Ne.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(J.b, null, n),
                        g.a.createElement(
                          J.b,
                          { color: 'link', onPress: e._handlePress },
                          Ne.a.d7a0722f({ othersCount: a }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var i = Object(Ln.a)(t, n)
                  return g.a.createElement(
                    J.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: jn.namesList },
                    n ? g.a.createElement(r, { namesList: i, othersCount: a }) : g.a.createElement(J.b, null, i),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        jn = F.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        Un = Bn,
        Hn = n('t0aI'),
        Kn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user,
            r = Object.keys(n),
            i = Vn({ entryId: t, participants: n, user: a })
          return { namesToDisplay: i, isSeenByEveryone: i.length === r.length - 1 }
        },
        Vn = function (e) {
          var t = e.entryId,
            n = e.participants,
            a = e.user
          return Object.keys(n).reduce(function (e, r) {
            var i = n[r],
              o = i.join_conversation_event_id,
              s = i.last_read_event_id,
              l = i.user.name,
              c = r !== a.id_str,
              u = s && 1 !== Object(Hn.a)(t, s),
              d = !o || 1 !== Object(Hn.a)(o, t)
            return c && u && d && e.push(l), e
          }, [])
        },
        zn = n('IMYl'),
        Wn = n('21zW'),
        Gn = n('gmpV'),
        qn = Ne.a.fad48ee9,
        Qn = Ne.a.ba60339a,
        Yn = Ne.a.d338f53e,
        Xn = Ne.a.ae7d7a24,
        Jn = Ne.a.d725a288,
        Zn = Ne.a.bbe74f3f,
        $n = Ne.a.h0e4cdf4,
        ea = Ne.a.bfbc051c,
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
                            D.a,
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
                        g.a.createElement(Wn.a, null),
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
                    ? g.a.createElement(Un, Xt()({ isGroupDM: i }, Kn({ entryId: t, participants: s, user: l })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement(J.b, { align: 'right', color: 'gray700', size: 'subtext2' }, qn)
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
                    c = Kn({ entryId: t, participants: s, user: l }).isSeenByEveryone
                  return !o || n || a || (i && !r)
                    ? null
                    : g.a.createElement(
                        J.b,
                        { color: c ? 'primary' : 'gray700', style: na.checkmarkContainer },
                        g.a.createElement(zn.a, { style: na.checkmark }),
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
                  u = Object(Gn.c)(d) ? Jn(d) : Object(Gn.d)(d) ? Zn({ time: Jn(d) }) : Object(Gn.e)(d) ? $n(d) : ea(d)
                  var p = r && !s,
                    m = s ? 'right' : 'left'
                  return g.a.createElement(
                    X.a,
                    { style: [c && na.footerPadderWithAvatar, s && na.timestamp] },
                    g.a.createElement(
                      J.b,
                      { align: m, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !ht.a.isEnabled },
                      p &&
                        g.a.createElement(
                          Ne.a.I18NFormatMessage,
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
      h()(ta, 'contextType', O.a)
      var na = F.a.create(function (e) {
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
        ma = Object(Oe.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: da.c, card: pa }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(Ae.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: da.a,
              loadAdFreeArticleDomainsFromPersistence: da.b,
              popOutConversation: W.popOutConversation,
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
            y = g.a.useContext(O.a).featureSwitches,
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
              b && a && !c && !ht.a.isEnabled && ba.activeReceived,
              f && ba.withCta,
            ],
            S = [ba.tweetText, b && ba.textAlignLeft, !b && c && ba.textAlignRight],
            C = F.a.theme.colors,
            k = C.gray0,
            I = C.magenta500,
            w = C.primary,
            x = C.text,
            R = C.white,
            T = L.a.generate({ color: c ? R : x, backgroundColor: r ? I : c ? w : k }),
            A = (p.text && p.text.length) || 0
          return g.a.createElement(
            D.a,
            { accessibilityRole: 'none', interactive: c, interactiveStyles: b ? T : null, style: E },
            g.a.createElement(va.a, {
              color: F.a.isDarkMode() || c ? 'whiteOnColor' : void 0,
              displayTextRange: [0, A],
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
        ka = Ca.a.CardNames,
        Ia = (function (e) {
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
                    h = !!Object.values(ka).includes(t.name),
                    f = St(n, p, m),
                    v = f.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    b =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    y = g.a.createElement(
                      X.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Sa.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: l.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withBorderShadow: b,
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    _ = n
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? wa.sentMessageWrapper : wa.receivedMessageWrapper,
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
                            rootStyle: f.isTextSquared ? (s ? wa.textSentSquared : wa.textReceivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? g.a.createElement(fa, { attachmentContent: y, isVisible: f.compositeRendered, textContent: _ })
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
      h()(Ia, 'defaultProps', { hasUserText: !1 }), h()(Ia, 'contextType', O.a)
      var wa = F.a.create(function (e) {
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
        xa = ma(Ia),
        Ra = Ne.a.f720438f,
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
                return t ? (a = 'both') : n && (a = 'right'), Oa[a]
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
                  var m = St(t, d, p),
                    h = m.compositeRendered,
                    f = m.isAttachmentSquared,
                    v = m.isTextSquared,
                    b = [
                      Aa.tombstoneWrapper,
                      o ? Aa.sentMessageWrapper : Aa.receivedMessageWrapper,
                      this._getSquareBottomStyles(f),
                    ],
                    y = g.a.createElement(
                      X.a,
                      { onLayout: this._handleAttachmentLayout, style: b },
                      g.a.createElement(J.b, { color: 'gray700' }, Ra),
                    ),
                    _ = t
                      ? g.a.createElement(
                          X.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? Aa.sentMessageWrapper : Aa.receivedMessageWrapper,
                              !c && Aa.fleetReactionSpacing,
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
                            rootStyle: v ? (o ? Aa.sentSquared : Aa.receivedSquared) : void 0,
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
        Oa = F.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Aa = F.a.create(function (e) {
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
        Pa = n('A91F'),
        Da = Ne.a.b327c129,
        Na = function (e) {
          e.stopPropagation()
        },
        Ba = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            a = t.ext_alt_text || Da,
            r = t.media_url_https,
            i = t.original_info || {},
            o = i.height,
            s = i.width,
            l = Object(Fa.b)(t).rgb,
            c = g.a.createElement(La.a, {
              accessibilityLabel: a,
              aspectMode: Pa.a.withinRange(9 / 16, 10),
              backgroundColor: l,
              image: { url: r, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(D.a, { interactiveStyles: null, link: n, onPress: Na }, c) : c
        },
        ja = n('Modb'),
        Ua = n('lklz'),
        Ha = n('XrEN'),
        Ka = n('ZvMt'),
        Va = function (e) {
          var t = e.media,
            n = e.messageId,
            a = t && Ha.a.extractVideoProps(Ua.b.forDm(n), t)
          return a
            ? g.a.createElement(
                ja.a,
                Xt()({}, a, { aspectRatio: Ka.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        za = Object(Oe.a)().withAnalytics(),
        Wa = (function (e) {
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
                            qa.root,
                            s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                            r && Ga[r],
                          ],
                        },
                        g.a.createElement(X.a, { style: qa.description }, g.a.createElement(J.b, null, a)),
                        g.a.createElement(
                          X.a,
                          { style: [qa.button, s ? qa.breakButtonWrapper : void 0] },
                          g.a.createElement(
                            mt.a,
                            { onClick: this._handleClick, size: 'small', style: qa.buttonElement, type: 'brandText' },
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
      var Ga = F.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        qa = F.a.create(function (e) {
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
        Qa = Object(tt.a)(za(Wa)),
        Ya = n('CoGJ'),
        Xa = g.a.createElement(Ya.a, null),
        Ja = Ne.a.d9de7b57,
        Za = Ne.a.f2879f4d,
        $a = Ne.a.b518221e,
        er = Ne.a.eeaa9f90,
        tr = Ne.a.g2b43663,
        nr = Ne.a.f277e949,
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
                  v = St(i, p, m),
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
                    (t = h.animated_gif), (n = g.a.createElement(Va, { media: t, messageId: r.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(qe.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(Va, { media: t, messageId: r.id })
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
                    f = St(n, p, m),
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
      h()(ar, 'contextType', O.a), h()(ar, 'defaultProps', { hasUserText: !1 })
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
        or = Object(Oe.a)().propsFromActions(function () {
          return { markSpamStatus: W.markSpamStatus }
        }),
        sr = Ne.a.fd07947f,
        lr = Ne.a.c7a92dc9,
        cr = Ne.a.f277e949,
        ur = Ne.a.fb3ccb55,
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
        yr = Object(Oe.a)()
          .propsFromState(function () {
            return { tweet: gr.a.createHydratedTweetSelector(br) }
          })
          .propsFromActions(function () {
            return { popOutConversation: W.popOutConversation }
          }),
        _r = n('b5s6'),
        Er = g.a.createElement(J.b, { link: '/settings/safety' }),
        Sr = function (e) {
          return g.a.createElement(
            Ne.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(Er, null, Ne.a.adcf07b5),
          )
        },
        Cr = Ne.a.e4df0ad7,
        kr = Ne.a.f277e949,
        Ir = Ne.a.b5b91d58,
        wr = Ne.a.bb594d7b,
        xr = g.a.createElement(Sr, null)
      var Rr = F.a.create(function (e) {
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
          var t = g.a.useContext(O.a).featureSwitches,
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
            k = C[0],
            I = C[1],
            w = g.a.useState(void 0),
            x = oe()(w, 2),
            R = x[0],
            T = x[1],
            A = g.a.useMemo(
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
                  k !== t && I(t)
                }
              },
              [k],
            ),
            L = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  R !== t && T(t)
                }
              },
              [R],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var F = v.attachment.tweet,
            P = h ? 'sent' : 'received',
            D = St(i, k, R),
            N = g.a.createElement(_r.a, {
              onPress: A,
              style: [
                Rr[P],
                i && Rr.attachment,
                D.isAttachmentSquared ? (h ? Rr.sentAttachmentSquared : Rr.receivedAttachmentSquared) : void 0,
              ],
              tweetId: F.status,
            }),
            B = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            j = (function () {
              if (!y) return null
              if (h) return N
              if (y.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (l || void 0 === l)
                  return g.a.createElement(
                    Qa,
                    { contentType: 'photo', ctaText: wr, description: Ir, withSquareBottomBorderRadius: B },
                    N,
                  )
              } else if (!a && y.possibly_sensitive)
                return g.a.createElement(
                  Qa,
                  { contentType: 'photo', ctaText: kr, description: xr, withSquareBottomBorderRadius: B },
                  N,
                )
              return f
                ? N
                : g.a.createElement(
                    Qa,
                    { contentType: 'tweet', ctaText: kr, description: Cr, withSquareBottomBorderRadius: B },
                    N,
                  )
            })(),
            U = g.a.createElement(X.a, { onLayout: M, style: Rr.attachment }, j),
            H = i
              ? g.a.createElement(
                  X.a,
                  { onLayout: L, style: h ? Rr.sentMessageWrapper : Rr.receivedMessageWrapper },
                  g.a.createElement(ya, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: c,
                    isFirstRapidFire: d,
                    isRapidFire: m,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? Rr.sentSquared : Rr.receivedSquared) : void 0,
                    tweetId: F.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: E,
                  }),
                )
              : null
          return g.a.createElement(fa, { attachmentContent: U, isVisible: D.compositeRendered, textContent: H })
        }),
        Or = n('htvZ'),
        Ar = n('MH+I'),
        Mr = n('5Ixf'),
        Lr = n('AtEG')
      function Fr(e) {
        var t,
          n,
          a = g.a.useContext(Or.a),
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
        var f = Dr(d),
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
          g.a.createElement(Pr, b)
        )
      }
      function Pr(e) {
        var t = e.isActive,
          n = e.isSent,
          a = e.playerApi,
          r = e.playerState,
          i = null == r ? void 0 : r.isPlaying,
          o = Dr(r),
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
            jr.voiceMessage,
            Ur({ isSent: n, squared: t }),
            n ? jr.voiceMessageSent : jr.voiceMessageReceived,
            de(F.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          m = i ? Mr.a : Lr.a
        return g.a.createElement(
          X.a,
          { style: [jr.container, de(F.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            X.a,
            { style: p },
            g.a.createElement(X.a, { style: jr.startSpacer }),
            g.a.createElement(mt.a, {
              accessibilityLabel: i ? Br : Nr,
              icon: g.a.createElement(m, { style: u ? jr.iconColorDark : jr.iconColorDefault }),
              onPress: function () {
                a ? (i ? (a.pause(), e.onPause()) : (a.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(X.a, { style: jr.durationSpacer }),
            g.a.createElement(
              X.a,
              { style: n ? jr.durationOpacity : void 0 },
              g.a.createElement(
                Ar.a,
                Xt()({ countdown: !0, timeMs: c }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? jr.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(X.a, { style: jr.endSpacer }),
          ),
        )
      }
      var Dr = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Nr = Ne.a.c94b7d89,
        Br = Ne.a.eb6f9582,
        jr = F.a.create(function (e) {
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
      function Ur(e) {
        var t = e.isSent,
          n = e.squared
        return [Hr.base, t ? Hr.sent : Hr.received, n ? (t ? Hr.sentSquared : Hr.receivedSquared) : void 0]
      }
      var Hr = F.a.create(function (e) {
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
                    c = _t(n),
                    u = !!o && !!o.ctas,
                    d = yt(n),
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
                    m = !(d && p),
                    h = Et(n)
                  e = s.sticker ? g.a.createElement(vr, { sticker: s.sticker }) : this._renderDMMessage(d, u, m)
                  var f = l ? g.a.createElement(dr, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                    v = c && !h && !Object(qe.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                    b = [
                      a ? Vr.isSent : Vr.isReceived,
                      u && Vr.withCta,
                      v ? Vr.mediaRoot : Vr.flexShrink,
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
                        Xt()(
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
                      return v.video && Object(qe.k)(v, this.context.featureSwitches)
                        ? g.a.createElement(Fr, {
                            isLowQuality: c,
                            isSent: !!d,
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
                              b,
                            ),
                          )
                    if (v.card)
                      return g.a.createElement(
                        xa,
                        Xt()({ cardUrl: v.card, conversationId: i.conversation_id, hasUserText: e, messageData: f }, b),
                      )
                    if (v.fleet) return g.a.createElement(Ma, Xt()({ entry: i, hasUserText: e, messageData: f }, b))
                  }
                  return g.a.createElement(_a, Xt()({}, b, { messageData: f }))
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      h()(Kr, 'contextType', O.a)
      var Vr = F.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        zr = Kr,
        Wr = F.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Gr = function (e) {
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
            : g.a.createElement(X.a, { style: [Wr.avatar, Z.a.getSizeStyle(a)] })
        },
        qr = n('m3Bd'),
        Qr = n.n(qr),
        Yr = n('B3eJ'),
        Xr = ['color', 'isActive', 'size']
      function Jr(e) {
        var t = e.color,
          n = e.isActive,
          a = e.size,
          r = Qr()(e, Xr),
          i = g.a.useContext(Or.a),
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
                if (!ht.a.isEnabled && !t) {
                  var n = e.props.entry,
                    a = { component: 'message', element: Object(qe.c)(n), action: 'click' }
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
                  var p = !ht.a.isEnabled || r
                  return g.a.createElement(
                    ye.a,
                    { behavioralEventContext: ai },
                    g.a.createElement(
                      X.a,
                      { style: c },
                      g.a.createElement(
                        D.a,
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
                    k = s.setShouldFreezeUpdates,
                    I = r.isFirstRapidFire,
                    w = r.isRapidFire,
                    x = [
                      v ? si.messageContainer.sent : si.messageContainer.received,
                      _ ? si.messageContainer.wide : si.messageContainer.narrow,
                      v && _ && si.messageContainer.sentWide,
                      !v && _ && si.messageContainer.receivedWide,
                    ],
                    R = b && !f,
                    T = this._isDMVoiceMessage(),
                    O = null === (t = Object.keys(E)) || void 0 === t ? void 0 : t.length
                  return g.a.createElement(
                    X.a,
                    { style: x },
                    c.error
                      ? null
                      : g.a.createElement(Gt, {
                          containerIsActive: d,
                          containerIsFocused: n,
                          containerIsHovered: a,
                          entry: c,
                          featureSwitches: this.context.featureSwitches,
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
                          participantsCount: O,
                          perspective: S,
                          setShouldFreezeUpdates: k,
                          shouldShowReactionButton: R,
                          style: T && de(F.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: y }),
                          withVDLRefresh: o,
                        }),
                    g.a.createElement(zr, {
                      displaySensitiveMedia: l,
                      entry: c,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: I,
                      isLowQuality: h,
                      isRapidFire: w,
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
                    g.a.createElement(X.a, { style: p }, g.a.createElement(Gr, d)),
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
      h()(ii, 'contextType', O.a), h()(ii, 'defaultProps', ri)
      var oi = Object(tt.a)(
          Re(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  a = g.a.useContext(Or.a),
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
              wide: { width: $t },
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
          if (Object(x.b)(n) || Object(x.e)(n)) {
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
              isGroupDM: y === W.CONVERSATION_TYPE.GROUP,
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
          return Object(x.a)(n)
            ? g.a.createElement(re, { conversation: t, entry: n, entryType: n.type, perspective: c })
            : Object(x.d)(n)
            ? g.a.createElement(li.a, { entry: n, isCompact: !1 })
            : null
        },
        ui = n('0JOx'),
        di = Object(_e.createSelector)(
          function (e, t) {
            var n = Object(Ke.o)(e, t.conversationId),
              a = n && Object(T.a)(n)
            return a && Object(W.selectEntry)(e, a)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        pi = Object(Ee.c)(di),
        mi = (n('Ef13'), n('uDfI')),
        hi = Object(_e.createSelector)(
          function (e, t) {
            return ke.e.selectMany(e, t.userIds || [])
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
        ki = Object(S.a)({ translateY: Ei, scale: 0 }),
        Ii = Object(S.a)({ scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(Ei, _i) }),
        wi = [{ key: 'bubble', style: { scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(0, _i) } }],
        xi = Object(S.a)({ translateY: Ei, scale: 0 }),
        Ri = Object(S.a)({ scale: Object(vi.spring)(1, _i), translateY: Object(vi.spring)(Ei, _i) }),
        Ti = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Oi = (function (e) {
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
                      { style: [Ai.root, e && Ai.hidden] },
                      g.a.createElement(
                        X.a,
                        { style: Ai.avatarRow },
                        g.a.createElement(
                          vi.TransitionMotion,
                          { styles: n, willEnter: ki, willLeave: Ii },
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
                                        style: [Ai.avatar, Ai.avatarSpacer, Ai.overflowAvatar, { transform: a }],
                                      },
                                      g.a.createElement(gi.a, { style: Ai.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      X.a,
                                      { key: e.key, style: [Ai.avatar, { transform: a }] },
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
                        { didLeave: this._afterLeave, styles: t.length > 0 ? wi : [], willEnter: xi, willLeave: Ri },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                X.a,
                                { key: e.key, style: [Ai.messageBubble, { transform: Ti(e.style) }] },
                                g.a.createElement(X.a, { style: Ai.dot }),
                                g.a.createElement(X.a, { style: [Ai.dot, Ai.dot1] }),
                                g.a.createElement(X.a, { style: [Ai.dot, Ai.dot2] }),
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
        Ai = F.a.create(function (e) {
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
        Mi = fi(Oi),
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
      h()(Fi, 'contextType', O.a)
      var Pi = pi(Fi),
        Di = n('3AAD'),
        Ni = n('iBK2'),
        Bi = n('Fz18'),
        ji = n('RJrc'),
        Ui = n('yw4N'),
        Hi = (n('XygZ'), n('dPJJ')),
        Ki = n('zrc3'),
        Vi = n('pQ3Z'),
        zi = n.n(Vi),
        Wi = n('VY6S'),
        Gi = n('c/W/'),
        qi = (function () {
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
                    i = new Gi.a(r, a),
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
              (i._offsetHandler = new qi(e.viewport)),
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
                      var n = Object(Ki.a)(t, function (t) {
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
      h()(ro, 'contextType', O.a)
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
                  if (0 === e.length) return new Gi.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    a = e[e.length - 1].id,
                    r = t[n].getTop(),
                    i = t[a].getBottom() - r
                  return new Gi.a(r, i)
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
                    a = Object(Ki.a)(this._list, function (e) {
                      var a = e.id
                      return n[a].doesIntersectWith(t)
                    })
                  if (a < 0) return []
                  var r = Object(Ki.a)(
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
          var s = Object(Ki.a)(n, function (e) {
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
                    l = Object(Ki.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > i
                    }),
                    c = l >= 0 ? l : n.length - 1,
                    u = Object(Ki.a)(
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
                  if (!this._ref) return new Gi.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new Gi.a(0, 0)
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
                    l = Object(Ki.a)(
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
                s = new Gi.a(e, o)
              return (a[i] = s), s.getBottom()
            }, 0),
            a
          )
        },
        Co = Eo,
        ko = function (e) {
          return (
            Object(Zi.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xi.a)(e)
          )
        },
        Io = (function (e) {
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
                      var a = e(n) || n.id || ko(n)
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
      h()(Io, 'displayName', 'VirtualScroller'),
        h()(Io, 'contextTypes', { viewport: co.object, getCustomLocation: co.func }),
        h()(Io, 'defaultProps', {
          anchoring: Qi.defaultProps.anchoring,
          assumedItemHeight: Co.defaultProps.assumedItemHeight,
          identityFunction: ko,
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
      var wo = Object(Ji.a)(Io),
        xo = n('mw9i'),
        Ro = Ne.a.i859a9d3,
        To = Ne.a.i8ecae5b,
        Oo = function (e) {
          return e.entry.id
        },
        Ao = function (e) {
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
                    return n ? g.a.createElement(Pi, { conversationId: n }) : null
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
                            g.a.createElement(J.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Ro),
                          ),
                        )
                      : null
                  case Q.b.CONVERSATION_PROFILE_INFO_HEADER:
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
              (i._anchoring = I({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === i.props.perspective || !1
                  )
                },
                typingIndicatorId: w.a,
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
                          n && 0 === i && e.push(w.b)
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
                            var c = R(s.entry, r),
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
                      footer: w.d,
                      readOnlyEntry: w.c,
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
                        if (n && Ao(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(c)
                  return g.a.createElement(V.a.Consumer, null, function (t) {
                    var s = t.isDrawer ? z.b.drawerHeaderRadius : Lo.scrollSpace
                    return g.a.createElement(
                      X.a,
                      { style: [Lo.scrollContainer, s] },
                      g.a.createElement(
                        Ui.a,
                        { style: [Lo.scrollContainer, r && Lo.conversationsPadding, s, o] },
                        a || null,
                        n.status && n.status !== Q.c.AT_END ? g.a.createElement(ji.a, null) : null,
                        g.a.createElement(
                          xo.a,
                          { style: [Lo.content, Lo.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(Ni.b, {
                                anchoring: Di.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Ao,
                                hasNewContentAtBottom: !0,
                                identityFunction: Oo,
                                initialAnchor: l.length > 0 ? f.a(Oo(d(l))) : void 0,
                                items: l,
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
                                  identityFunction: Oo,
                                  initialAnchor: l.length > 0 ? f.a(Oo(u(l))) : void 0,
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
      h()(Mo, 'contextType', O.a)
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
    '5emT': function (e, t, n) {
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
                d: 'M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z',
              }),
              o.a.createElement('path', {
                d: 'M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
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
          return k
        }),
        n.d(t, 'b', function () {
          return I
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
        k = { defaultToast: { text: d }, showToast: !0 },
        I =
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
    '88ay': function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return ee
      }),
        n.d(t, 'e', function () {
          return te
        }),
        n.d(t, 'f', function () {
          return ne
        }),
        n.d(t, 'd', function () {
          return ae
        }),
        n.d(t, 'a', function () {
          return oe
        })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('yiKp'),
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
        y = n('97Jx'),
        _ = n.n(y),
        E = (n('1t7P'), n('jQ/y'), n('ho0z'), n('2G9S'), n('hBpG'), n('7x/C'), n('ERkP')),
        S = n.n(E),
        C = n('6rlp'),
        k = n('zh9S'),
        I = n('G6rE'),
        w = n('rxPX'),
        x = n('0KEI'),
        R = function (e, t) {
          return I.e.select(e, t.userId)
        },
        T = function (e, t) {
          return t.promotedContent
        },
        O = Object(w.a)()
          .propsFromState(function () {
            return { promotedContent: T, user: R }
          })
          .adjustStateProps(function (e) {
            var t = e.promotedContent,
              n = e.user
            return { promotedContent: t || (n ? n.promoted_content : void 0), user: n }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('USER_CELL_CONTAINER'),
              log: C.a,
              scribeAction: k.c,
            }
          }),
        A = n('I57f'),
        M = n('vMjK'),
        L = n('MWbm'),
        F = n('IG7M'),
        P = n('rHpw'),
        D = function (e) {
          var t = e.children,
            n = e.promotedContent,
            a = e.user
          return S.a.createElement(
            L.a,
            { style: N.decorationWrapper },
            t,
            S.a.createElement(F.a, {
              renderActionMenu: function (e) {
                return S.a.createElement(M.b, { onClose: e, promotedContent: n, user: a, view: 'follower' })
              },
              style: N.actionMenu,
            }),
          )
        },
        N = P.a.create(function (e) {
          return { decorationWrapper: { flexDirection: 'row' }, actionMenu: { marginLeft: e.spaces.space12 } }
        }),
        B = n('uIZp'),
        j = n('mN6z'),
        U = n('caTy'),
        H = n('3IPs'),
        K = n('Rp9C'),
        V = n('X04g'),
        z = n('Re5t'),
        W = n('TnY3'),
        G = n('hxu0'),
        q = n('v6aA'),
        Q = n('7JQg'),
        Y = n('nBUg'),
        X = n('IMA+'),
        J = n('cFuS'),
        Z = [
          'avatarDecoration',
          'bottomControl',
          'cellClickable',
          'createLocalApiErrorHandler',
          'decoration',
          'followRequestReceived',
          'hideBlocked',
          'history',
          'isAutoblocking',
          'isBlockedBy',
          'isBlocking',
          'isDeviceFollowing',
          'isFollowing',
          'isInSidebar',
          'location',
          'log',
          'onClick',
          'promotedItemId',
          'saveAsRecentSearch',
          'scribeAction',
          'scribeData',
          'scribeNamespace',
          'shouldScribeImpression',
          'shouldScribeProfileClick',
          'shouldStoreTypeaheadItem',
          'socialContext',
          'user',
        ],
        $ = function (e) {
          var t = e.user
          return t && t.profile_image_url_https
            ? S.a.createElement(
                re,
                _()({}, e, {
                  avatarUri: t.profile_image_url_https,
                  description: t.description,
                  entities: t.entities,
                  followRequestReceived: t.follow_request_received,
                  highlightedLabel: t.highlightedLabel,
                  isAutoblocking: t.smart_blocking,
                  isBlockedBy: t.blocked_by,
                  isBlocking: t.blocking,
                  isDeviceFollowing: t.notifications,
                  isFollowedBy: t.followed_by,
                  isFollowing: t.following,
                  isProtected: t.protected,
                  isVerified: t.verified,
                  name: t.name,
                  screenName: t.screen_name,
                  translatorType: t.translator_type,
                  user: t,
                  withheldDescription: t.withheld_description,
                  withheldEntities: t.withheld_entities,
                }),
              )
            : null
        }
      $.defaultProps = {
        cellClickable: !0,
        decoration: null,
        displayMode: z.a.UserCompact,
        followRequestReceived: !1,
        hideBlocked: !1,
        promotedItemType: J.c.USER,
        shouldScribeProfileClick: !0,
        shouldScribeImpression: !1,
        withFollowsYou: !1,
      }
      var ee = function (e) {
          var t = e.isDeviceFollowing,
            n = e.userId
          return S.a.createElement(A.a, { isFollowing: t, style: ie.followButton, userId: n })
        },
        te = function (e) {
          var t = e.loggedInUserId,
            n = e.promotedContent,
            a = e.userId
          return t !== a
            ? S.a.createElement(B.a, { promotedContent: n, size: 'small', style: ie.followButton, userId: a })
            : null
        },
        ne = function (e) {
          return S.a.createElement(D, { promotedContent: e.promotedContent, user: e.user }, te(e))
        },
        ae = function (e) {
          return S.a.createElement(F.a, {
            renderActionMenu: function (t) {
              return S.a.createElement(M.b, {
                onClose: t,
                promotedContent: e.promotedContent,
                user: e.user,
                view: 'rito_flagged_accounts',
              })
            },
          })
        },
        re = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n() {
            var e
            l()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), '_handleAvatarClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ element: 'avatar', action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(J.b.PROFILE_IMAGE_CLICK)
              }),
              b()(p()(e), '_handleCellClick', function () {
                var t = e.props,
                  n = t.history,
                  a = t.onClick,
                  r = t.screenName,
                  i = t.user,
                  o = e._getPromotedTweetState()
                e._handleSaveAsRecentSearch(),
                  e._handleScreenNameClick(),
                  a ? a({ user: i, state: o }) : n.push({ pathname: '/'.concat(r), state: o || void 0 })
              }),
              b()(p()(e), '_handleScreenNameClick', function () {
                var t = e.props.shouldScribeProfileClick
                e._handleSaveAsRecentSearch(),
                  t && e._scribeAction({ action: 'profile_click' }),
                  e._handleAsyncPromotedEvent(J.b.SCREEN_NAME_CLICK)
              }),
              b()(p()(e), '_handleSaveAsRecentSearch', function () {
                var t = e.props,
                  n = t.saveAsRecentSearch,
                  a = t.shouldStoreTypeaheadItem,
                  r = t.userId
                n && a && a(V.a.ItemType.USER) && n({ user: { id: r, type: H.a.User } })
              }),
              b()(p()(e), '_scribeAction', function (t) {
                var n,
                  a = e.props,
                  r = a.promotedContent,
                  i = a.scribeAction,
                  s = a.scribeData,
                  l = a.scribeNamespace,
                  c = a.user,
                  u = a.userId,
                  d =
                    null == s || null === (n = s.items) || void 0 === n
                      ? void 0
                      : n.find(function (e) {
                          return e.item_type === V.a.ItemType.USER && e.id === u
                        }),
                  p = s.search_details,
                  m = { items: [o()(o()({}, d), K.a.getUserItem(c, r))], profile_id: u, search_details: p }
                i(o()(o()({}, l), t), m)
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._shouldRender() && this._handleImpression()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  return !Object(j.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.avatarDecoration,
                    a = (t.bottomControl, t.cellClickable),
                    i =
                      (t.createLocalApiErrorHandler,
                      t.decoration,
                      t.followRequestReceived,
                      t.hideBlocked,
                      t.history,
                      t.isAutoblocking,
                      t.isBlockedBy,
                      t.isBlocking,
                      t.isDeviceFollowing,
                      t.isFollowing,
                      t.isInSidebar),
                    o =
                      (t.location,
                      t.log,
                      t.onClick,
                      t.promotedItemId,
                      t.saveAsRecentSearch,
                      t.scribeAction,
                      t.scribeData,
                      t.scribeNamespace,
                      t.shouldScribeImpression,
                      t.shouldScribeProfileClick,
                      t.shouldStoreTypeaheadItem,
                      t.socialContext),
                    s = t.user,
                    l = r()(t, Z)
                  return this._shouldRender()
                    ? S.a.createElement(
                        Y.b.Provider,
                        {
                          value: {
                            socialContextRefreshEnabled: function () {
                              return e.context.featureSwitches.isTrue(
                                'social_context_and_topic_context_refresh_alignment_enabled',
                              )
                            },
                          },
                        },
                        S.a.createElement(
                          X.a,
                          _()({}, l, {
                            avatarDecoration: n,
                            bottomControl: this._renderBottomControl(),
                            decoration: this._renderDecoration(),
                            highlightedLabel: this._getHighlightedLabel(),
                            isBlocking: s.blocking,
                            onAvatarClick: this._handleAvatarClick,
                            onCellClick: a ? this._handleCellClick : void 0,
                            onScreenNameClick: this._handleScreenNameClick,
                            socialContext: o
                              ? {
                                  contextType: o.contextType,
                                  text: o.text,
                                  link: o.landingUrl ? Object(U.b)(o.landingUrl) : void 0,
                                }
                              : void 0,
                            withDarkerInteractiveBackground: i,
                          }),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderBottomControl',
                value: function () {
                  return this._renderControl(this.props.bottomControl || null)
                },
              },
              {
                key: '_renderDecoration',
                value: function () {
                  return this._renderControl(this.props.decoration)
                },
              },
              {
                key: '_renderControl',
                value: function (e) {
                  var t = this.context.loggedInUserId,
                    n = this.props,
                    a = n.displayMode,
                    r = n.followRequestReceived,
                    i = n.isAutoblocking,
                    o = n.isBlocking,
                    s = n.isDeviceFollowing,
                    l = n.isFollowing,
                    c = n.promotedContent,
                    u = n.screenName,
                    d = n.user,
                    p = n.userId
                  return 'function' == typeof e
                    ? e({
                        displayMode: a,
                        followRequestReceived: r,
                        isAutoblocking: i,
                        isBlocking: o,
                        isDeviceFollowing: !!s,
                        isFollowing: !!l,
                        loggedInUserId: t,
                        promotedContent: c,
                        screenName: u,
                        user: d,
                        userId: p,
                      })
                    : e
                },
              },
              {
                key: '_shouldRender',
                value: function () {
                  var e = this.props,
                    t = e.hideBlocked,
                    n = e.isBlockedBy,
                    a = e.isBlocking,
                    r = e.screenName
                  return e.userId && r && !(t && (n || a))
                },
              },
              {
                key: '_getHighlightedLabel',
                value: function () {
                  var e = this.props.user.highlightedLabel,
                    t = 'AutomatedLabel' === (null == e ? void 0 : e.userLabelType),
                    n = !!t && this.context.featureSwitches.isTrue('account_taxonomy_automated_label_enabled')
                  return !t || n ? e : void 0
                },
              },
              {
                key: '_getPromotedTweetState',
                value: function () {
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.promotedItemType
                  return t && n === J.c.TWEET ? { promotedTweetState: t } : null
                },
              },
              {
                key: '_handleAsyncPromotedEvent',
                value: function (e) {
                  var t = this.props,
                    n = t.createLocalApiErrorHandler,
                    a = t.log,
                    r = t.promotedContent,
                    i = t.promotedItemId,
                    o = t.promotedItemType,
                    s = t.userId
                  r &&
                    a({
                      disclosureType: r.disclosure_type,
                      itemId: i || s,
                      itemType: o,
                      params: { event: e, impression_id: r.impression_id },
                    }).catch(n())
                },
              },
              {
                key: '_handleImpression',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.log,
                    a = e.promotedContent,
                    r = e.promotedItemType,
                    i = e.shouldScribeImpression,
                    o = e.userId
                  if (a && r === J.c.USER) {
                    var s = a.disclosure_type,
                      l = a.impression_id
                    n({
                      disclosureType: s,
                      itemId: o,
                      itemType: J.c.USER,
                      params: { event: J.b.IMPRESSION, impression_id: l },
                    }).catch(t())
                  } else i && this._scribeAction({ action: 'impression' })
                },
              },
            ]),
            n
          )
        })(S.a.Component)
      b()(re, 'contextType', q.a), b()(re, 'defaultProps', $.defaultProps)
      var ie = P.a.create(function (e) {
          return { followButton: { marginLeft: e.spaces.space12 } }
        }),
        oe = Object(W.a)(Object(G.a)(O($)))
      t.b = Object(Q.a)({ element: 'user' })(oe)
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
          return Promise.all([n.e(0), n.e(24), n.e(170)])
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
    'A/tJ': function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMConversationCreator', function () {
          return _
        })
      n('7x/C'), n('JtPf'), n('KqXw'), n('MvUL')
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('WNMA'), n('RqPI')),
        o = n('3nOA'),
        s = n('rxPX'),
        l = n('0KEI'),
        c = n('G6rE'),
        u = function (e, t) {
          return t.match.params.screenName
        },
        d = function (e, t) {
          var n = i.q(e),
            a = (function (e, t) {
              var n = u(0, t)
              return n ? c.e.selectIdByScreenName(e, n) : null
            })(e, t)
          return n && a ? Object(o.a)(n, a) : null
        },
        p = Object(s.a)()
          .propsFromState(function () {
            return { screenName: u, conversationId: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)('CREATE_CONVERSATION'),
              fetchOneByScreenNameWithExtraFieldsIfNeeded: c.e.createFetchOneByScreenNameWithExtraFieldsIfNeeded([
                c.a,
                c.d,
              ]),
            }
          }),
        m = n('GOQE'),
        h = n('kGix'),
        f = n('v//M'),
        v = n('tI3i'),
        g = n.n(v),
        b = n('5FtR'),
        y = n('0zXz'),
        _ = function (e) {
          var t = e.conversationId,
            n = e.createLocalApiErrorHandler,
            a = e.fetchOneByScreenNameWithExtraFieldsIfNeeded,
            i = e.history,
            o = e.screenName
          return (
            r.a.useEffect(
              function () {
                Promise.resolve()
                  .then(function () {
                    return g()(!!o, 'screenName must be defined'), a(o)
                  })
                  .catch(function (e) {
                    n(m.a)(e), i.replace('/messages')
                  })
              },
              [o, a, n, i],
            ),
            r.a.createElement(
              r.a.Fragment,
              null,
              t && r.a.createElement(b.a, { to: '/messages/'.concat(t) }),
              r.a.createElement(f.a, { fetchStatus: h.a.LOADING, render: y.a }),
            )
          )
        },
        E = p(_)
      t.default = E
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
          return Array.isArray(e)
            ? e.reduce(function (e, n) {
                var a = n.user_id,
                  i = t[a] || { id_str: a }
                return (e[a] = r()(r()({}, n), {}, { user: i })), e
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
    CFcj: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationGroupInfoScreen', function () {
          return ee
        })
      var a = n('ddV6'),
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
        g = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('ERkP')),
        b = n.n(g),
        y = n('LCtV'),
        _ = (n('KqXw'), n('WNMA'), n('849X'), n('TJCb'), n('MMRb')),
        E = n('AspN'),
        S = n('RqPI'),
        C = n('hqKg'),
        k = n('p9G8'),
        I = n('AQOc'),
        w = n('/NU0'),
        x = n('G6rE'),
        R = n('0KEI'),
        T = n('oEGd'),
        O = function (e, t) {
          return t.match.params.conversationId
        },
        A = Object(C.createSelector)(
          function (e, t) {
            return _.selectConversation(e, O(0, t))
          },
          _.selectEntries,
          O,
          function (e, t) {
            return _.selectConversationFetchStatus(e, O(0, t))
          },
          S.q,
          x.e.selectAll,
          function (e, t) {
            var n = _.selectConversationAvatarMediaId(e, O(0, t)),
              a = Object(w.a)(n) ? E.k(e, n) : []
            return r()(a, 1)[0]
          },
          function (e, t) {
            return _.selectConversationAvatarMediaIsUploading(e, O(0, t))
          },
          function (e, t) {
            return _.selectConversationAvatarMediaUploadProgress(e, O(0, t))
          },
          function (e, t, n, a, r, i, o, s, l) {
            var c = e && e.data,
              u = c && Object(I.b)(c, t, i),
              d = u && Object(k.a)(u, r)
            if (!r) throw new Error('logged-in user not found')
            return {
              avatarMedia: o,
              conversation: u,
              conversationId: n,
              fetchStatus: a,
              isUploading: s,
              groupName: d,
              mediaUploadProgress: l,
              perspective: r,
            }
          },
        ),
        M = {
          addAvatarMedia: _.addAvatarMedia,
          createLocalApiErrorHandler: Object(R.createLocalApiErrorHandlerWithContextFactory)(
            'CONVERSATION_GROUP_INFO_SCREEN',
          ),
          fetchConversation: _.fetchConversation,
          fetchConversationIfNeeded: _.fetchConversationIfNeeded,
          removeAvatarMedia: _.removeAvatarMedia,
          removeMediaUpload: E.i,
          setConversationAvatar: _.setConversationAvatar,
          updateConversationName: _.updateConversationName,
        },
        L = Object(T.g)(A, M),
        F = n('I2k/'),
        P = n('aA19'),
        D = n('v//M'),
        N = n('jHSc'),
        B = n('3XMw'),
        j = n.n(B),
        U = n('mN6z'),
        H = n('P68U'),
        K = n('eyty'),
        V = n('MWbm'),
        z = n('mw9i'),
        W = n('/yvb'),
        G = n('JYMr'),
        q = n('p+r5'),
        Q = n('rHpw'),
        Y = n('7JQg'),
        X = j.a.abd845fd,
        J = j.a.d87bff5a,
        Z = j.a.i2209530,
        $ = j.a.cabb453d,
        ee = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, a)),
              v()(u()(i), '_renderContent', function () {
                return b.a.createElement(V.a, null, i._renderGroupAvatarPicker(), i._renderGroupNameEditor())
              }),
              v()(u()(i), '_handleFetch', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(F.a)(t)))
              }),
              v()(u()(i), '_handleGroupNameUpdated', function (e) {
                i.setState({ groupNameEdit: e.target.value })
              }),
              v()(u()(i), '_handleSavePress', function () {
                i._savePress()
              }),
              v()(u()(i), '_savePress', function () {
                var e = i.props,
                  t = e.avatarMedia,
                  n = e.conversationId,
                  a = e.createLocalApiErrorHandler,
                  r = e.fetchConversation,
                  o = e.groupName,
                  s = e.history,
                  l = e.setConversationAvatar,
                  c = e.updateConversationName,
                  u = i.state.groupNameEdit,
                  d = []
                return (
                  t && d.push(l(n).catch(a())),
                  u && o !== u && d.push(c({ conversationId: n, name: u }).catch(a({ showToast: !0 }))),
                  Promise.all(d).then(
                    function () {
                      r({ conversationId: n }).catch(a(Object(F.a)(n))),
                        s.goBack({ backLocation: '/messages/'.concat(n, '/info'), shouldReplaceOnFallback: !0 })
                    },
                    function () {
                      return t && i._clearAvatarMedia(t.id)
                    },
                  )
                )
              }),
              v()(u()(i), '_handleAvatarMediaChange', function (e) {
                var t = r()(e, 1)[0],
                  n = i.props,
                  a = n.addAvatarMedia,
                  o = n.avatarMedia,
                  s = n.conversationId
                o && i._clearAvatarMedia(o.id), a(s, t)
              }),
              v()(u()(i), '_handleMediaFailure', function (e) {
                i._clearAvatarMedia(e)
              }),
              (i.state = { groupNameEdit: e.groupName }),
              i
            )
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._handleFetch()
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    var e = this.props.avatarMedia
                    e && this._clearAvatarMedia(e.id)
                  },
                },
                {
                  key: 'shouldComponentUpdate',
                  value: function (e, t) {
                    return !Object(U.a)(e, this.props) || !Object(U.a)(t, this.state)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.conversationId,
                      n = e.fetchStatus,
                      a = e.history
                    return b.a.createElement(
                      N.b,
                      {
                        backLocation: '/messages/'.concat(t, '/info'),
                        history: a,
                        rightControl: this._renderRightControl(),
                        title: X,
                      },
                      b.a.createElement(
                        z.a,
                        { style: te.root },
                        b.a.createElement(D.a, {
                          accessibilityLabel: J,
                          fetchStatus: n,
                          onRequestRetry: this._handleFetch,
                          render: this._renderContent,
                        }),
                      ),
                    )
                  },
                },
                {
                  key: '_renderRightControl',
                  value: function () {
                    var e = this.props,
                      t = e.avatarMedia,
                      n = e.groupName,
                      a = e.isUploading,
                      r = this.state.groupNameEdit,
                      i = a || !((r && r !== n) || t)
                    return b.a.createElement(W.a, {
                      children: Z,
                      disabled: i,
                      onPress: this._handleSavePress,
                      size: 'small',
                      type: 'primaryFilled',
                    })
                  },
                },
                {
                  key: '_renderGroupAvatarPicker',
                  value: function () {
                    var e = this.props,
                      t = e.avatarMedia,
                      n = e.conversation,
                      a = e.mediaUploadProgress,
                      r = e.perspective,
                      i = b.a.createElement(P.a, { conversation: n, perspective: r })
                    return b.a.createElement(
                      V.a,
                      null,
                      b.a.createElement(G.a, { progress: a }),
                      b.a.createElement(
                        V.a,
                        { style: te.avatarContainerRoot },
                        b.a.createElement(H.default, {
                          borderRadius: y.a.INFINITE,
                          currentContent: i,
                          location: K.d.Avatar,
                          mediaItem: t || void 0,
                          onChange: this._handleAvatarMediaChange,
                          onFailure: this._handleMediaFailure,
                          rootStyle: te.avatarContainer,
                        }),
                      ),
                    )
                  },
                },
                {
                  key: '_renderGroupNameEditor',
                  value: function () {
                    return b.a.createElement(q.a, {
                      label: $,
                      maxLength: 50,
                      name: 'groupNameEdit',
                      onChange: this._handleGroupNameUpdated,
                      style: te.groupNameEditor,
                      value: this.state.groupNameEdit || '',
                    })
                  },
                },
                {
                  key: '_clearAvatarMedia',
                  value: function (e) {
                    var t = this.props,
                      n = t.avatarMedia,
                      a = t.conversationId,
                      r = t.removeAvatarMedia,
                      i = t.removeMediaUpload
                    ;(n && n.uploading) || i(e), r(a, e)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.groupName
                    return 'string' == typeof n && null === t.groupNameEdit ? { groupNameEdit: n } : null
                  },
                },
              ],
            ),
            n
          )
        })(b.a.Component),
        te = Q.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.gray0 },
            avatarContainerRoot: {
              alignItems: 'center',
              backgroundColor: e.colors.cellBackground,
              paddingVertical: e.spaces.space20,
            },
            groupNameEditor: { backgroundColor: e.colors.cellBackground },
            avatarContainer: {
              height: 'calc(5 * '.concat(e.spaces.space20, ')'),
              width: 'calc(5 * '.concat(e.spaces.space20, ')'),
            },
          }
        })
      t.default = Object(Y.a)({ page: 'messages', section: 'group_settings' })(L(ee))
    },
    EPsT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return y
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
        f = n('ERkP'),
        v = n.n(f),
        g = n('jtO7'),
        b = n('eb3s'),
        y = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e) {
            var a
            return (
              r()(this, n),
              (a = t.call(this, e)),
              h()(l()(a), '_handleClick', function (e) {
                a.setState({ showConfirmation: !0 })
              }),
              h()(l()(a), '_handleCancel', function () {
                a.setState({ showConfirmation: !1 })
              }),
              h()(l()(a), '_handleConfirm', function () {
                a.setState({ showConfirmation: !1 }), a.props.onConfirmationSheetConfirm()
              }),
              (a.state = { showConfirmation: !1 }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.align,
                    n = e.color,
                    a = e.confirmationSheetConfirmButtonLabel,
                    r = e.confirmationSheetConfirmButtonType,
                    i = e.confirmationSheetHeadline,
                    o = e.confirmationSheetText,
                    s = e.label
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(g.a, { align: t, color: n, label: s, onPress: this._handleClick }),
                    this.state.showConfirmation
                      ? v.a.createElement(b.a, {
                          confirmButtonLabel: a,
                          confirmButtonType: r,
                          headline: i,
                          onCancel: this._handleCancel,
                          onConfirm: this._handleConfirm,
                          text: o,
                        })
                      : null,
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(y, 'defaultProps', { color: 'red500', align: 'center' })
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
    GjeS: function (e, t, n) {
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
        k,
        I,
        w,
        x,
        R,
        T,
        O,
        A,
        M,
        L,
        F,
        P,
        D,
        N,
        B,
        j,
        U = {
          fragment: {
            argumentDefinitions: (a = [
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
                          (l = {
                            alias: null,
                            args: null,
                            kind: 'ScalarField',
                            name: 'conversation_type',
                            storageKey: null,
                          }),
                          (c = { alias: null, args: null, kind: 'ScalarField', name: 'name', storageKey: null }),
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
                                      (b = {
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
                                                                  c,
                                                                  (_ = {
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
                                                              (k = {
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
                                                                  _,
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
                                                  (I = {
                                                    alias: null,
                                                    args: null,
                                                    kind: 'ScalarField',
                                                    name: 'join_time_millis',
                                                    storageKey: null,
                                                  }),
                                                  (w = {
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
                                          (R = {
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
                                          (T = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (O = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_spam_hide',
                                            storageKey: null,
                                          }),
                                          (A = {
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
                                          c,
                                          (L = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (F = {
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
                                              (P = {
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
            argumentDefinitions: a,
            kind: 'Operation',
            name: 'evolutionDmConversationTimelineQuery',
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
                  m,
                  {
                    alias: null,
                    args: h,
                    concreteType: null,
                    kind: 'LinkedField',
                    name: 'legacy_conversation_slice',
                    plural: !1,
                    selections: [
                      (N = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                                      b,
                                      y,
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
                                                  l,
                                                  c,
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
                                                          N,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [
                                                              i,
                                                              o,
                                                              E,
                                                              (B = {
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
                                                        selections: [N, C],
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
                                                          N,
                                                          {
                                                            kind: 'InlineFragment',
                                                            selections: [i, o, k, B],
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
                                                  I,
                                                  w,
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
                                          R,
                                          T,
                                          O,
                                          A,
                                          M,
                                          c,
                                          L,
                                          F,
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
                                              P,
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
          a = e.unread,
          i = void 0 !== a && a,
          o = 'follow' === t.reason ? d : p,
          l = i ? 'medium' : 'normal',
          m = i ? 'text' : 'gray700'
        return n
          ? r.a.createElement(c.b, { color: m, weight: l }, o)
          : r.a.createElement(
              s.a,
              { style: u.root },
              r.a.createElement(c.b, { align: 'center', color: m, size: 'subtext2', weight: l }, o),
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
    Lz2T: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('m3Bd'),
        l = n.n(s),
        c = n('ERkP'),
        u = n.n(c),
        d = n('PnKw'),
        p = n('vYiB'),
        m = n('X3+4'),
        h = n('rcen'),
        f = n('k89r'),
        v = ['bodyRichText', 'bodyText', 'onImpression', 'primaryAction', 'titleRichText', 'titleText']
      function g(e) {
        var t = e.bodyRichText,
          n = e.bodyText,
          a = e.onImpression,
          i = e.primaryAction,
          s = e.titleRichText,
          c = e.titleText,
          g = l()(e, v),
          b = Object(f.a)(),
          y = function () {
            b.scribe({ action: 'click' })
          },
          _ = s
            ? u.a.createElement(h.a, { entities: s.entities, onEntityClick: y, text: s.text })
            : c && c.length
            ? c
            : null,
          E = t
            ? u.a.createElement(h.a, { entities: t.entities, onEntityClick: y, text: t.text })
            : n && n.length
            ? n
            : null,
          S = function (e) {
            return o()(
              o()({}, i),
              {},
              {
                onClick: function (t) {
                  ;(null == i ? void 0 : i.onClick) && i.onClick(t), e(t)
                },
              },
            )
          },
          C = u.a.createElement(m.a.Consumer, null, function (e) {
            var t = e.handleNextSlide
            return u.a.createElement(d.a, r()({}, g, { headline: _, primaryAction: i ? S(t) : void 0, subtext: E }))
          })
        return 'function' == typeof a ? u.a.createElement(p.a, { onImpression: a }, C) : C
      }
      ;(g.defaultProps = { shouldRenderBorder: !1 }), (t.a = g)
    },
    M2mT: function (e, t, n) {
      'use strict'
      var a = n('m3Bd'),
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
        g = (n('2G9S'), n('i4UL'), n('+/5o')),
        b = n('ERkP'),
        y = n.n(b),
        _ = n('HPNB'),
        E = n('VAZu'),
        S = n('wiP2'),
        C = n('Es6L'),
        k = n('yiKp'),
        I = n.n(k),
        w = n('rHpw'),
        x = w.a.create(function (e) {
          return {
            fill: { flex: 1, alignSelf: 'stretch' },
            viewportView: I()(I()({}, w.a.absoluteFillObject), {}, { overflowY: 'auto' }),
            appBarContainer: {
              position: 'sticky',
              top: 0,
              backfaceVisibility: 'hidden',
              zIndex: e.componentZIndices.appBarZIndex,
            },
          }
        }),
        R = n('MWbm'),
        T = n('yw4N'),
        O = n('TnY3'),
        A = n('cHvH'),
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
        F = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              v()(u()(e), '_renderChildren', function () {
                var t = e.props.children
                return e.context.rootDetailPerColumnScroll
                  ? y.a.createElement(
                      R.a,
                      { style: x.fill },
                      y.a.createElement(
                        T.a,
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
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this
                  return y.a.createElement(A.a, null, function (t) {
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
                      r()(e, L))
                  return y.a.createElement(
                    y.a.Fragment,
                    null,
                    Object(C.a)()
                      ? this._renderInlineNav({ isTwoColumnLayout: !1 })
                      : y.a.createElement(S.a.Configure, n),
                    t,
                  )
                },
              },
              {
                key: '_renderForTwoColumnLayout',
                value: function () {
                  var e = this.context.rootDetailPerColumnScroll
                  return y.a.createElement(
                    y.a.Fragment,
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
                    s = n.documentTitle,
                    l = n.headerless,
                    c = n.history,
                    u = n.leftControl,
                    d = n.middleControl,
                    p = n.onBackClick,
                    m = n.rightControl,
                    h = n.screenType,
                    f = n.searchBoxOptions,
                    v = n.secondaryBar,
                    b = n.showSubtitleOnRoot,
                    _ = n.showSubtitleOnWideDetail,
                    C = n.subtitle,
                    k = n.title,
                    I = n.titleIconCell,
                    w = n.titleIconCellSize,
                    T = n.withDetailOpen,
                    O = n.withSearchBox,
                    A = n.withTweetButton,
                    M = 'root' === h,
                    L = 'secondaryRoot' === h,
                    F = 'primaryDetail' === h,
                    P = (F && _) || (M && b),
                    D = M || (F && t),
                    N = M ? g.c : F ? g.a : void 0,
                    B = y.a.createElement(
                      R.a,
                      { style: x.appBarContainer },
                      y.a.createElement(E.a, {
                        backLocation: o,
                        fixed: !1,
                        hideBackButton: D,
                        history: c,
                        leftControl: u,
                        middleControl: d,
                        onBackClick: p,
                        rightControl: m,
                        secondaryBar: v,
                        subtitle: P ? C : void 0,
                        title: k,
                        titleDomId: N,
                        titleIconCell: I,
                        titleIconCellSize: w,
                      }),
                    ),
                    j =
                      M || (L && T)
                        ? null
                        : y.a.createElement(S.a.Configure, {
                            SideNavButton: a,
                            TabBar: r,
                            TeamsSwitcher: i,
                            backLocation: o,
                            documentTitle: s,
                            headerless: l,
                            middleControl: d,
                            onBackClick: p,
                            rightControl: m,
                            searchBoxOptions: f,
                            subtitle: C,
                            title: k,
                            withSearchBox: O,
                            withTweetButton: A,
                          })
                  return y.a.createElement(y.a.Fragment, null, j, B)
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      v()(F, 'contextType', M.a),
        v()(F, 'defaultProps', { screenType: 'secondaryDetail', showSubtitleOnWideDetail: !0 })
      t.a = Object(O.a)(F)
    },
    'Mbn/': function (e, t, n) {
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
                d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
              }),
              o.a.createElement('path', {
                d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        s = n('aWyx'),
        l = n('XnpN'),
        c = n('3XMw'),
        u = n.n(c),
        d = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        h = n('t62R'),
        f = n('rHpw'),
        v = n('p9G8'),
        g = u.a.cfd94063,
        b = u.a.b93ba92c,
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        _ = f.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        E = function (e) {
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
            return Object(v.a)(t, a)
          }
          var o = y(n)
          return Object(v.b)(o, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          c = void 0 !== i && i,
          u = e.newConversationParticipants,
          f = e.perspective,
          E = e.renderTimestamp,
          S = e.textColor,
          C = void 0 === S ? 'normal' : S,
          k = e.titleWeight,
          I = void 0 === k ? 'bold' : k,
          w = e.withParticipantsCount,
          x = void 0 !== w && w,
          R = e.withScreenName,
          T = void 0 === R || R,
          O = e.withVDLRefresh,
          A = void 0 !== O && O
        if (t) {
          var M = E ? E() : null
          if (t.type === s.a.ONE_TO_ONE) {
            var L = Object(l.a)(t, f).map(function (e) {
                return e.user
              }),
              F = r()(L, 1)[0],
              P = o.a.createElement(p.a, {
                color: C,
                isProtected: F.protected,
                isVerified: F.verified,
                name: F.name,
                screenName: F.screen_name,
                weight: I,
                withLink: !1,
                withScreenName: T,
              })
            return (A && !a) || c ? o.a.createElement(m.a, null, P, M) : P
          }
          var D = t.participants,
            N = A ? Object.keys(D).length - 1 : Object.keys(D).length
          if (a)
            return o.a.createElement(
              m.a,
              { color: C },
              o.a.createElement(h.b, { color: C, numberOfLines: 1, style: _.title, weight: I }, Object(v.a)(t, f, a)),
              A
                ? null
                : o.a.createElement(
                    h.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    g({ peopleCount: N }),
                  ),
            )
          var B = o.a.createElement(h.b, { color: C, numberOfLines: 1, weight: I }, Object(v.a)(t, f, a))
          return (A && !a) || c
            ? o.a.createElement(
                d.a,
                { style: _.dmGroup },
                o.a.createElement(m.a, null, B, M),
                x && o.a.createElement(h.b, { color: 'gray700', numberOfLines: 1 }, b({ peopleCount: N })),
              )
            : B
        }
        var j = y(u)
        return o.a.createElement(h.b, { color: C, numberOfLines: 1, weight: I }, Object(v.b)(j, f))
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
        k = n('1YZw'),
        I = n('hqKg'),
        w = n('kGix'),
        x = n('AQOc'),
        R = n('UhuB'),
        T = n('pNZL'),
        O = n('G6rE'),
        A = n('oEGd'),
        M = n('X/yg'),
        L = n('0KEI'),
        F = n('P1r1'),
        P = function (e, t) {
          return t.conversationId
        },
        D = Object(I.createSelector)(
          E.selectFetchStatus,
          function (e, t) {
            return E.selectConversationFetchStatus(e, P(0, t))
          },
          function (e, t) {
            return e === w.a.LOADED ? t : e
          },
        ),
        N = Object(I.createSelector)(
          function (e, t) {
            return E.selectEntriesForConversation(e, P(0, t))
          },
          C.q,
          function (e, t) {
            return t ? Object(M.d)(e, t) : void 0
          },
        ),
        B = Object(I.createSelector)(
          function (e, t) {
            return E.selectConversation(e, P(0, t))
          },
          E.selectEntries,
          M.l,
          C.q,
          M.m,
          M.n,
          O.e.selectAll,
          D,
          function (e, t) {
            return S.g(e, P(0, t))
          },
          function (e, t) {
            return S.j(e, P(0, t))
          },
          function (e, t) {
            return S.i(e, P(0, t))
          },
          function (e, t) {
            return S.k(e, P(0, t))
          },
          function (e, t) {
            return S.h(e, P(0, t))
          },
          function (e, t) {
            return S.l(e, P(0, t))
          },
          F.k,
          R.n,
          N,
          F.n,
          function (e, t) {
            var n = P(0, t)
            return E.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, a, r, i, o, s, l, c, u, d, p, m, h, f, v, g, b) {
            var y = e && e.data
            return {
              conversation: (y && Object(x.a)(y, t, o)) || void 0,
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
        j = Object(A.d)(B, function (e) {
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
        U = n('I2k/'),
        H = n('4AMG'),
        K = n('uB9N'),
        V = n('htvZ'),
        z = n('v//M'),
        W = n('3XMw'),
        G = n.n(W),
        q = n('UgB4'),
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
            addToast: k.b,
            block: O.e.block,
            createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: E.muteDMUser,
            unmuteDMUser: E.unmuteDMUser,
            unblock: O.e.unblock,
          }
        }),
        pe = (n('AQ79'), n('u0B7')),
        me = (n('uFXj'), n('97Jx')),
        he = n.n(me),
        fe = n('tZH3'),
        ve = n('/yvb'),
        ge = n('efqG'),
        be = G.a.ccf2f24e,
        ye = G.a.ib3fe8a9,
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
        ke = function (e) {
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
              { style: Ie.actionsContainer },
              n &&
                b.a.createElement(
                  ve.a,
                  {
                    onPress: r,
                    size: 'medium',
                    style: [Ie.actionFullWidth, Ie.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              b.a.createElement(
                Ee.a,
                { style: l ? Ie.actionFullWidth : [Ie.actionHalfWidth, Ie.actionMarginRight] },
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
                  style: l ? [Ie.actionFullWidth, Ie.actionMarginTop] : [Ie.actionHalfWidth, Ie.actionMarginLeft],
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
        we = n('aITJ'),
        xe = n('t62R'),
        Re = n('eb3s'),
        Te = n('vMjK'),
        Oe = n('7JQg'),
        Ae = n('24HD'),
        Me = n('zCf4'),
        Le = G.a.da878dcf,
        Fe = G.a.d96cf7cd,
        Pe = (G.a.gde6b424, G.a.e308019b, G.a.gf5e9ea6, G.a.hc52446b),
        De = G.a.f7e1ad65,
        Ne = { headline: G.a.gdf4b79f, text: G.a.bbf83d83, confirmButtonLabel: G.a.bb1d57b6 },
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
        je = Object(Oe.a)({ element: 'untrusted_interstitial' })(
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
              k = function () {
                d(!0), f(!1)
              },
              I = function () {
                d(!1)
              },
              w = function () {
                f(!1)
              },
              x = function () {
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
                d(!1), i({ conversationId: a }), g(o, u), R()
              },
              R = function () {
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
              O = function (t) {
                return function () {
                  var n = e.addToast,
                    a = e.block,
                    r = e.createLocalApiErrorHandler
                  f(!1),
                    a(t).then(function () {
                      n({ action: { label: Te.c, onAction: A(t) }, text: Te.a })
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
                    xe.b,
                    { style: Be.copy },
                    e ? Pe : De({ senderName: Object(M.i)(t, n).name }),
                  )
                })(L),
                b.a.createElement(ke, {
                  acceptButtonText: Le,
                  conversation: t,
                  declineButtonText: Fe,
                  isGroup: L,
                  onAccept: T,
                  onBlock: function () {
                    d(!1), f(!0)
                  },
                  onLeave: k,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (g('report'), o.push(Object(M.f)(t, window.location.pathname, a, n)))
                  },
                }),
              ),
              we.b.isKaiOS()
                ? b.a.createElement(ae.a, { leftText: Fe, onLeftClick: k, onRightClick: T, rightText: Le })
                : null,
              u
                ? b.a.createElement(Re.a, {
                    confirmButtonLabel: Ne.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: Ne.headline,
                    onCancel: I,
                    onConfirm: x,
                    text: Ne.text,
                  })
                : null,
              h
                ? ((y = i.loggedInUserId),
                  (_ = Object(M.i)(t, y)),
                  (S = _.idStr),
                  (C = _.screenName),
                  Object(Ae.j)({ confirmation: Object(Ae.f)(C), onClose: w, handleConfirm: O(S) }))
                : null,
            )
          }),
        ),
        Ue = n('yw4N'),
        He = n('rFBM'),
        Ke = n('mw9i'),
        Ve = n('jTgF'),
        ze = n('+d3d'),
        We = n('mN6z'),
        Ge = b.a.createElement(q.a, null),
        qe = G.a.badb01a0,
        Qe = G.a.e3275464,
        Ye = G.a.d6b11d9c,
        Xe = G.a.i7ca1446,
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
                    we.b.isMobileOS() && i._fetchConversation(e)
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
                      b.a.createElement(je, {
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
                      we.b.isKaiOS()
                        ? b.a.createElement(ae.a, {
                            leftText: Xe,
                            onLeftClick: i._handleInfoClick,
                            onRightClick: i._handleComposeClick,
                            rightText: qe,
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
                  V.b,
                  { key: n },
                  b.a.createElement(
                    He.a,
                    { allowDragDrop: !Je(u), onFilesAdded: i._handleDragDrop, style: re.a.dragDrop },
                    b.a.createElement(
                      Ue.a,
                      {
                        style: [
                          re.a.scrollView,
                          !Object(ne.a)() && !i._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      s && t
                        ? b.a.createElement(H.a, {
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
                  k = null != c && c.participants ? Object.keys(c.participants).length : 0,
                  I = (null == c ? void 0 : c.type) === E.CONVERSATION_TYPE.GROUP,
                  w = 'unknown'
                if (
                  (e.quickReply ||
                    C ||
                    (i._currentComposer && i._currentComposer.clear(),
                    i._currentComposer && i._currentComposer.focus()),
                  p)
                )
                  w = 'gif'
                else if (l) w = 'card'
                else if (_) w = 'tweet'
                else {
                  var x,
                    R = null == S || null === (x = S.media) || void 0 === x ? void 0 : x.mediaFile,
                    T = null != R && R.isVideo ? 'video' : null != R && R.isGif ? 'gif' : 'photo'
                  w = R ? T : t ? 'text' : 'unknown'
                }
                return (
                  u &&
                    g(r()(r()({}, b), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: u,
                      conversation_participant_count: k,
                      conversation_type: I ? Z.h.GROUP : Z.h.ONE_TO_ONE,
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
                          if ((i.setState({ isSending: !1 }), !Object(Ve.d)(e) || e.code !== X.b.CANCELED))
                            if (Object(Ve.d)(e)) {
                              var t = Object(Ve.b)(e, Ye)
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
                        g(r()(r()({}, b), {}, { element: w, action: 'send_dm' }), {
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
                      e.fetchStatus === w.a.LOADED && o !== w.a.LOADED && i && this._fetchConversation(i))
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
                  return b.a.createElement(
                    Ke.a,
                    { style: [re.a.root, we.b.isKaiOS() && re.a.kaiOSFix] },
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
                    : b.a.createElement(K.a, {
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
                        primaryActionIcon: Ge,
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
                    .catch(n(Object(U.a)(e)))
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
      t.a = Object(Oe.a)()(j($e))
    },
    P68U: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'MediaPickerWithPreview', function () {
          return S
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
        f = (n('2G9S'), n('hCOa'), n('87if'), n('hBpG'), n('7x/C'), n('jQ3i'), n('x4t0'), n('z84I'), n('ERkP')),
        v = n.n(f),
        g = n('AspN'),
        b = n('rxPX'),
        y = Object(b.a)().propsFromActions(function () {
          return { addMedia: g.b, processMultipleMedia: g.g }
        }),
        _ = n('2Daw'),
        E = n('VPdC'),
        S = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_handleAddMediaFiles', function (t) {
                var n = e.props,
                  a = n.addMedia,
                  r = n.location,
                  i = n.onChange,
                  o = n.onFailure,
                  s = n.processMultipleMedia,
                  l = e._getAcceptedFileInputs(),
                  c = Array.from(t).find(function (e) {
                    return l.includes(e.type)
                  })
                c &&
                  a([c], { location: r }).then(function (e) {
                    i &&
                      i(
                        e.map(function (e) {
                          return e.id
                        }),
                      ),
                      s(e, { onFailure: o })
                  })
              }),
              h()(l()(e), '_getAcceptedFileInputs', function () {
                var t = e.props,
                  n = t.acceptGifs,
                  a = t.acceptVideo
                return Object(E.b)({ acceptGifs: n, acceptVideo: a })
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
                    t = e.acceptGifs,
                    n = e.acceptVideo,
                    a = e.accessibilityLabel,
                    r = e.aspectRatio,
                    i = e.borderRadius,
                    o = e.currentContent,
                    s = e.maskStyle,
                    l = e.mediaItem,
                    c = e.onCrop,
                    u = e.onRemove,
                    d = e.rootStyle
                  return v.a.createElement(_.a, {
                    acceptGifs: t,
                    acceptVideo: n,
                    accessibilityLabel: a,
                    aspectRatio: r,
                    borderRadius: i,
                    currentContent: o,
                    maskStyle: s,
                    mediaItem: l,
                    onAddMediaFiles: this._handleAddMediaFiles,
                    onCrop: c,
                    onRemove: u,
                    rootStyle: d,
                    withDragDrop: !0,
                  })
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(S, 'defaultProps', { acceptGifs: !1, acceptVideo: !1 })
      var C = y(S)
      t.default = C
    },
    PnKw: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
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
        f = (n('2G9S'), n('hBvt'), n('uFXj'), n('ERkP')),
        v = n.n(f),
        g = n('TIdA'),
        b = n('t62R'),
        y = n('A91F'),
        _ = n('/yvb'),
        E = n('rHpw'),
        S = 'inlinePrompt',
        C = 'inlinePrompt-primaryAction',
        k = 'inlinePrompt-secondaryAction',
        I = 'inlinePrompt-centeredImageContainer',
        w = n('MWbm'),
        x = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), '_renderImage', function (e) {
                var t = v.a.createElement(g.a, {
                  accessibilityLabel: '',
                  aspectMode: y.a.exact(e.width / e.height),
                  backgroundColor: e.backgroundColor,
                  image: e,
                })
                return e.isCentered
                  ? v.a.createElement(
                      w.a,
                      { style: R.centeredImage, testID: I },
                      v.a.createElement(
                        w.a,
                        { style: { width: ''.concat(e.width, 'px'), height: ''.concat(e.height, 'px') } },
                        t,
                      ),
                    )
                  : t
              }),
              h()(l()(e), '_renderTitle', function () {
                var t = e.props.headline
                return t
                  ? v.a.createElement(
                      b.b,
                      {
                        accessibilityRole: 'heading',
                        align: 'left',
                        size: 'title4',
                        style: R.flexGrow,
                        weight: 'bold',
                        withHashflags: !0,
                      },
                      t,
                    )
                  : null
              }),
              h()(l()(e), '_renderBodyText', function () {
                var t = e.props.subtext
                return t
                  ? v.a.createElement(
                      b.b,
                      { align: 'left', color: 'gray700', style: e.styles.body, withHashflags: !0 },
                      t,
                    )
                  : null
              }),
              h()(l()(e), '_renderAction', function (t) {
                var n = t.action,
                  a = t.buttonSize,
                  r = t.buttonType,
                  i = t.style,
                  o = t.testID,
                  s = e.props.secondaryAction,
                  l = n.link,
                  c = n.onClick,
                  u = n.text
                return v.a.createElement(
                  w.a,
                  { style: [e.styles.actionContainer, i, { justifyContent: 'flex-start' }], testID: o },
                  v.a.createElement(
                    _.a,
                    { link: l, onPress: c, size: a, style: { width: s ? '100%' : 'auto' }, type: r },
                    u,
                  ),
                )
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
                    t = e.image,
                    n = e.primaryAction,
                    a = e.rightControl,
                    r = e.secondaryAction,
                    i = e.shouldRenderBorder
                  return v.a.createElement(
                    w.a,
                    { style: i ? [T.root, T.rootMargin] : R.root },
                    v.a.createElement(
                      v.a.Fragment,
                      null,
                      t ? this._renderImage(t) : null,
                      v.a.createElement(
                        w.a,
                        { style: this.styles.rootPadding, testID: S },
                        this._renderTitle(),
                        this._renderBodyText(),
                        n
                          ? this._renderAction({
                              action: n,
                              buttonType: 'primaryFilled',
                              style: this.styles.primaryAction,
                              buttonSize: 'large',
                              testID: C,
                            })
                          : null,
                        r
                          ? this._renderAction({
                              action: r,
                              buttonType: 'primaryOutlined',
                              style: this.styles.secondaryAction,
                              buttonSize: 'large',
                              testID: k,
                            })
                          : null,
                      ),
                    ),
                    a ? v.a.createElement(w.a, { style: R.rightControl }, a) : null,
                  )
                },
              },
              {
                key: 'styles',
                get: function () {
                  return this.props.isCompact ? A : O
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      h()(x, 'defaultProps', { shouldRenderBorder: !1 })
      var R = E.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground },
            flexGrow: { flexGrow: 1 },
            centeredImage: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
            rightControl: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              position: 'absolute',
              right: 0,
              top: 0,
            },
          }
        }),
        T = E.a.create(function (e) {
          return {
            root: {
              borderColor: e.colors.nestedBorderColor,
              borderWidth: e.borderWidths.small,
              borderRadius: e.borderRadii.xLarge,
              overflow: 'hidden',
            },
            rootMargin: { marginLeft: e.spaces.space16, marginRight: e.spaces.space16 },
          }
        }),
        O = E.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space32 },
            body: { marginTop: e.spaces.space8 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space28 },
            secondaryAction: { marginTop: e.spaces.space16 },
          }
        }),
        A = E.a.create(function (e) {
          return {
            rootPadding: { padding: e.spaces.space16 },
            body: { marginTop: e.spaces.space2 },
            actionContainer: { flexDirection: 'row' },
            primaryAction: { marginTop: e.spaces.space4 },
            secondaryAction: { marginTop: e.spaces.space2 },
          }
        })
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
    'S+H3': function (e, t, n) {
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
                d: 'M15.09 9.07c-.25-1.83-1.43-2.98-3.1-2.98-1.66 0-2.85 1.15-3.09 2.98-.18 1.32 0 2.26.55 2.89.66.76 1.66.86 2.54.86.89 0 1.88-.1 2.54-.86.56-.63.74-1.57.56-2.89zm-1.68 1.9c-.21.24-.65.35-1.42.35-.76 0-1.2-.11-1.41-.35-.24-.28-.31-.86-.2-1.7.1-.76.47-1.68 1.61-1.68.58 0 .95.23 1.2.56.24.32.36.74.41 1.12.12.84.05 1.42-.19 1.7zm2.67 4.09c-.99-.99-2.4-1.52-4.07-1.52h-.03c-1.62 0-3.06.55-4.06 1.55-.87.87-1.34 2.02-1.34 3.25 0 .79.64 1.44 1.44 1.44h7.95c.79 0 1.44-.65 1.44-1.44 0-1.26-.47-2.43-1.33-3.28zm-7.44 3.276c-.318.002-.562-.288-.502-.6.116-.595.406-1.14.842-1.576.72-.72 1.78-1.12 3.01-1.12H12c1.27 0 2.32.37 3.02 1.08.432.432.715.962.83 1.564.06.308-.178.598-.492.6l-6.72.052zM21.75 6.97c-.22-1.7-1.32-2.75-2.86-2.75-1.53 0-2.64 1.05-2.87 2.75-.16 1.2.02 2.07.52 2.65.62.71 1.53.81 2.35.81.81 0 1.73-.1 2.34-.8.39-.45.59-1.07.59-1.85 0-.22-.02-.47-.07-.81zm-4.22.2c.13-.95.59-1.43 1.36-1.43.43 0 .77.15 1 .46.23.29.32.69.35.97.03.22.05.43.05.61 0 .4-.07.69-.21.84-.16.2-.54.28-1.19.28-.66 0-1.04-.08-1.2-.28-.2-.22-.25-.73-.16-1.45zm6.3 8.37c0 .74-.62 1.34-1.37 1.34h-3.75c-.41 0-.76-.34-.76-.76 0-.43.34-.76.76-.76h3.24c.1 0 .2-.05.26-.13.07-.09.1-.2.07-.3-.12-.53-.37-.99-.74-1.36-.61-.62-1.53-.94-2.64-.94-.73 0-1.39.15-1.93.44l-.5.32c-.36.21-.83.1-1.04-.25-.23-.36-.12-.82.24-1.05l.54-.34c.78-.42 1.71-.64 2.66-.64h.03c1.52 0 2.81.47 3.72 1.38.79.8 1.22 1.88 1.21 3.05zM2.18 7.78c0 .78.2 1.4.59 1.85.61.7 1.53.8 2.34.8.82 0 1.73-.1 2.35-.81.5-.58.68-1.45.52-2.65-.23-1.7-1.34-2.75-2.87-2.75-1.54 0-2.64 1.05-2.86 2.75-.05.34-.07.59-.07.81zm4.13.84c-.16.2-.54.28-1.2.28-.65 0-1.03-.08-1.19-.28-.14-.15-.21-.44-.21-.84 0-.18.02-.39.05-.61.03-.28.12-.68.35-.97.23-.31.57-.46 1-.46.77 0 1.23.48 1.36 1.43.09.72.04 1.23-.16 1.45zM.17 15.54c0 .74.62 1.34 1.37 1.34h3.75c.41 0 .76-.34.76-.76 0-.43-.34-.76-.76-.76H2.05c-.1 0-.2-.05-.26-.13-.07-.09-.1-.2-.07-.3.12-.53.37-.99.74-1.36.61-.62 1.53-.94 2.64-.94.73 0 1.39.15 1.93.44l.5.32c.36.21.83.1 1.04-.25.23-.36.12-.82-.24-1.05l-.54-.34c-.78-.42-1.71-.64-2.66-.64H5.1c-1.52 0-2.81.47-3.72 1.38-.79.8-1.22 1.88-1.21 3.05z',
              }),
            ),
          )
        }
      ;(c.metadata = { width: 24, height: 24 }), (t.a = c)
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
    T8pk: function (e, t, n) {
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
                d: 'M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083h2.146C7.633 3.17 9.722 2 12 2c2.277 0 4.367 1.17 5.562 3.083h2.146C20.972 5.083 22 6.11 22 7.375v12.333C22 20.972 20.972 22 19.708 22zM4.292 6.583c-.437 0-.792.355-.792.792v12.333c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V7.375c0-.437-.355-.792-.792-.792h-2.45c-.317.05-.632-.095-.782-.382-.88-1.665-2.594-2.7-4.476-2.7-1.883 0-3.598 1.035-4.476 2.702-.16.302-.502.46-.833.38H4.293z',
              }),
              o.a.createElement('path', {
                d: 'M12 8.167c-2.68 0-4.86 2.18-4.86 4.86s2.18 4.86 4.86 4.86 4.86-2.18 4.86-4.86-2.18-4.86-4.86-4.86zm2 5.583h-1.25V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.25H10c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.25V11c0-.414.336-.75.75-.75s.75.336.75.75v1.25H14c.414 0 .75.336.75.75s-.336.75-.75.75z',
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
    'X3+4': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('ERkP'),
        r = n.n(a),
        i = n('fs1G'),
        o = r.a.createContext({ handleNextSlide: i.a })
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
                handleArgs: [{ kind: 'Literal', name: 'itemsFieldName', value: 'items_results' }],
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
    XG7v: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'Mode', function () {
          return Te
        }),
        n.d(t, 'DMComposeScreen', function () {
          return Oe
        })
      var a = n('K1iM'),
        r = n.n(a),
        i = n('yiKp'),
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
        y =
          (n('yH/f'),
          n('i4UL'),
          n('LW0h'),
          n('7x/C'),
          n('M+/F'),
          n('z84I'),
          n('hBpG'),
          n('2G9S'),
          n('ho0z'),
          n('DfhM'),
          n('7xRU'),
          n('JtPf'),
          n('849X'),
          n('TJCb'),
          n('KqXw'),
          n('MvUL'),
          n('jwue'),
          n('+oxZ'),
          n('lTEL'),
          n('87if'),
          n('kYxP'),
          n('uFXj'),
          n('ERkP')),
        _ = n.n(y),
        E = n('s14A'),
        S = n('uB9N'),
        C = n('3nOA'),
        k = n('jHSc'),
        I = n('wO1l'),
        w = n('p9G8'),
        x = n('AQOc'),
        R = n('3XMw'),
        T = n.n(R),
        O = n('oQhu'),
        A = 'nextButton',
        M = n('aITJ'),
        L = n('2dXj'),
        F = n('MWbm'),
        P = n('w9LO'),
        D = n('/yvb'),
        N = n('t62R'),
        B = n('htQn'),
        j = n('7N4s'),
        U = n('rHpw'),
        H = n('v6aA'),
        K = n('MMRb'),
        V = n('CDB5'),
        z = n('1YZw'),
        W = n('hqKg'),
        G = n('tn7R'),
        q = n('Hw0q'),
        Q = n('RqPI'),
        Y = n('X/yg'),
        X = n('G6rE'),
        J = n('rxPX'),
        Z = n('0KEI'),
        $ = { page: 'messages', section: 'compose', component: 'dm' },
        ee = 'text',
        te = 'recipient_id',
        ne = Object(q.b)(ee),
        ae =
          (Object(q.b)(te),
          function (e) {
            var t = Object(Q.q)(e)
            if (!t) throw new Error('logged-in user not found')
            return t
          }),
        re = Object(J.a)()
          .propsFromState(function () {
            return {
              conversations: Object(W.createSelector)(K.selectConversations, function (e) {
                var t,
                  n = [],
                  a = r()(Object(G.a)(e))
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var i = t.value
                    !i.isDeleted && i.data && n.push(i.data)
                  }
                } catch (o) {
                  a.e(o)
                } finally {
                  a.f()
                }
                return n
              }),
              initialMessage: ne,
              perspective: ae,
              tweetAttachment: Y.n,
              users: X.e.selectAll,
              recipientId: Object(q.b)(te),
            }
          })
          .propsFromActions(function () {
            return {
              addToast: z.b,
              createLocalApiErrorHandler: Object(Z.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_COMPOSE',
              ),
              fetchConversationFromParticipants: K.fetchConversationFromParticipants,
              fetchInboxIfNeeded: K.fetchInboxIfNeeded,
              popOutConversation: K.popOutConversation,
              sendMessage: V.m,
            }
          })
          .withAnalytics($),
        ie = n('UgB4'),
        oe = n('S+H3'),
        se = n('883S'),
        le = n('GZwR'),
        ce = T.a.de4669e2,
        ue = T.a.ff599111,
        de = T.a.c6026009,
        pe = T.a.f61c4bbf,
        me = T.a.cdcebd22,
        he = T.a.a7013cb6,
        fe = T.a.f277e949,
        ve = T.a.a2ccb2e7,
        ge = T.a.a6add339,
        be = T.a.aca6eb1b,
        ye = T.a.e3275464,
        _e = T.a.hbbc401c,
        Ee = T.a.c1df579e,
        Se = T.a.e1bde73e,
        Ce = T.a.f7289cd6,
        ke = T.a.e6cced4e,
        Ie = T.a.a893d601,
        we = _.a.createElement(ie.a, null),
        xe = Object.freeze({ BACK: 'back', CLOSE: 'close' }),
        Re = Object.freeze({
          COMPOSE_ROUTE: '/messages/compose',
          GROUP_COMPOSE_ROUTE: '/messages/compose/group',
          MESSAGES_ROUTE: '/messages',
        }),
        Te = Object.freeze({ COMPOSE_MESSAGE: 0, CREATE_GROUP: 1, SHARE_TWEET: 2, SHARE_TWEET_INDIVIDUALLY: 3 }),
        Oe = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e, a) {
            var i
            return (
              l()(this, n),
              (i = t.call(this, e, a)),
              b()(p()(i), '_composer', _.a.createRef()),
              b()(p()(i), '_determineMode', function (e) {
                var t,
                  n,
                  a = i.context.featureSwitches,
                  r = e.tweetAttachment || !!e.initialMessage
                return null !== (t = i.props.location) &&
                  void 0 !== t &&
                  null !== (n = t.state) &&
                  void 0 !== n &&
                  n.isNewGroup
                  ? Te.CREATE_GROUP
                  : r
                  ? a.isTrue('dm_share_sheet_send_individually_enabled') &&
                    a.isTrue('direct_messages_incremental_holdback_2022h1')
                    ? Te.SHARE_TWEET_INDIVIDUALLY
                    : Te.SHARE_TWEET
                  : Te.COMPOSE_MESSAGE
              }),
              b()(p()(i), '_isSharingMode', function (e) {
                return e === Te.SHARE_TWEET || e === Te.SHARE_TWEET_INDIVIDUALLY
              }),
              b()(p()(i), '_renderScreen', function (e) {
                var t,
                  n,
                  a = e.isModal,
                  r = i.props.history,
                  o = i.state,
                  s = o.mode,
                  l = o.participants
                switch (s) {
                  case Te.COMPOSE_MESSAGE:
                    t = me
                    break
                  case Te.CREATE_GROUP:
                    ;(t = ue), (n = de)
                    break
                  case Te.SHARE_TWEET:
                    t = pe
                    break
                  case Te.SHARE_TWEET_INDIVIDUALLY:
                    t = l.length > 1 ? he : pe
                    break
                  default:
                    t = ''
                }
                var c = i._isSharingMode(s)
                return _.a.createElement(
                  k.b,
                  {
                    backButtonType: s === Te.CREATE_GROUP ? xe.BACK : xe.CLOSE,
                    backLocation: s === Te.CREATE_GROUP ? Re.COMPOSE_ROUTE : Re.MESSAGES_ROUTE,
                    containerStyle: Me.fill,
                    documentTitle: t,
                    history: r,
                    onBackClick: s === Te.CREATE_GROUP ? i._handleBackClick : i._handleClose,
                    rightControl: c ? void 0 : i._renderAppBarRightControl(),
                    subtitle: n,
                    title: t,
                  },
                  _.a.createElement(P.a.Context.Consumer, null, i._setDisableFocusingPreviousActiveElement),
                  _.a.createElement(
                    E.a,
                    { style: Me.fill },
                    i._renderUserPicker(),
                    c && !a ? _.a.createElement(F.a, { style: Me.placeholder }) : null,
                    i._renderComposer(a),
                  ),
                )
              }),
              b()(p()(i), '_setDisableFocusingPreviousActiveElement', function (e) {
                var t = e.disableFocusingPreviousActiveElement
                i._disableFocusingPreviousActiveElement = t
              }),
              b()(p()(i), '_renderAppBarRightControl', function () {
                var e = i.props.tweetAttachment ? ye : Ee
                return _.a.createElement(
                  F.a,
                  { style: Me.rightColumn },
                  _.a.createElement(
                    D.a,
                    {
                      disabled: 0 === i.state.participants.length,
                      onPress: i._handleConversationRouting,
                      size: 'small',
                      style: Me.button,
                      testID: A,
                      type: 'primaryFilled',
                    },
                    e,
                  ),
                )
              }),
              b()(p()(i), '_renderComposer', function (e) {
                var t = i.props,
                  n = t.history,
                  a = t.initialMessage,
                  r = t.tweetAttachment,
                  o = i.state,
                  s = o.isSending,
                  l = o.mode,
                  c = o.participants,
                  u = i._isSharingMode(i.state.mode)
                return u
                  ? _.a.createElement(S.a, {
                      canSendEmptyMessage: !!r,
                      conversationId: 'DMComposeScreen',
                      disabled: 0 === c.length || s,
                      history: n,
                      isSending: s,
                      isShareViaDM: !!u,
                      isUploading: !1,
                      mediaUploadProgress: 0,
                      onPrimaryAction: i._handleShareTweet,
                      onSecondaryAction: i._handleShareTweetToGroup,
                      placeholderText: ce,
                      prefillText: a,
                      primaryActionIcon: l === Te.SHARE_TWEET_INDIVIDUALLY ? void 0 : we,
                      primaryActionLabel: ye,
                      ref: i._composer,
                      scribeNamespace: $,
                      secondaryActionDisabledPopoverRenderer: i._renderSendToGroupDisabledPopover,
                      secondaryActionLabel: l === Te.SHARE_TWEET_INDIVIDUALLY ? _e : void 0,
                      shouldEnableSecondaryActionFunc: i._shouldEnableSendToGroup,
                      shouldShowSecondaryActionFunc: i._shouldShowSendToGroup,
                      style: [Me.shadow, !e && Me.fixToBottom],
                      withEmojiPicker: !1,
                      withGifPicker: !1,
                      withMediaPicker: !1,
                    })
                  : null
              }),
              b()(p()(i), '_renderUserPicker', function () {
                var e = i.props,
                  t = e.conversations,
                  n = e.perspective,
                  a = i.state,
                  r = a.mode,
                  o = a.participants,
                  s = a.query
                return _.a.createElement(L.d, {
                  getItemDisabledMessage: i._getItemDisabledMessage,
                  getItemIsDisabled: i._getItemIsDisabled(i._separateShareLimit),
                  injections: i._getInjections(t, n, s),
                  onQueryChange: i._handleQueryChange,
                  onRemove: i._handleRemoveParticipant,
                  onSelect: i._getHandleSuggestionSelected(),
                  renderHeader: i._renderHeader(),
                  selectedUsers: o,
                  shouldAutoFocus: !i._isSharingMode(r) || !M.b.isIOS(),
                  source: le.d.ComposeMessage,
                  withCompactPills: !0,
                })
              }),
              b()(p()(i), '_handleBackClick', function () {
                i.props.history.goBack()
              }),
              b()(p()(i), '_handleClose', function () {
                i.props.history.goBackThroughModals()
              }),
              b()(p()(i), '_handleCreateGroup', function () {
                i.props.analytics.scribe({ element: 'create_group', action: 'click' }),
                  i.setState({ mode: Te.CREATE_GROUP })
              }),
              b()(p()(i), '_shouldShowSendToGroup', function () {
                return i.state.participants.length > 1
              }),
              b()(p()(i), '_shouldEnableSendToGroup', function () {
                return !i._hasAtLeastOneGroupSelected()
              }),
              b()(p()(i), '_renderSendToGroupDisabledPopover', function (e) {
                return _.a.createElement(
                  F.a,
                  { style: Me.popover },
                  _.a.createElement(N.b, { size: 'headline1', style: Me.popoverElement, weight: 'bold' }, Ce),
                  _.a.createElement(N.b, { style: Me.popoverElement }, ke),
                  _.a.createElement(
                    D.a,
                    { onPress: e, style: [Me.popoverElement, Me.popoverButton], type: 'primaryFilled' },
                    Ie,
                  ),
                )
              }),
              b()(p()(i), '_renderHeader', function () {
                return function () {
                  var e = i.state,
                    t = e.mode,
                    n = e.participants,
                    a = e.query,
                    r = i.props.tweetAttachment
                  return n.length || a || t !== Te.COMPOSE_MESSAGE
                    ? null
                    : _.a.createElement(
                        B.a,
                        {
                          link: {
                            pathname: Re.GROUP_COMPOSE_ROUTE,
                            state: o()(o()({}, i.state), {}, { isNewGroup: !0, participants: n, tweetAttachment: r }),
                            anchorless: !0,
                          },
                          onPress: i._handleCreateGroup,
                          style: Me.container,
                        },
                        _.a.createElement(D.a, {
                          accessibilityLabel: ue,
                          borderColor: 'blue500',
                          color: 'blue500',
                          hoverLabel: { label: 'Group' },
                          icon: _.a.createElement(oe.a, { style: Me.searchIcon }),
                          onPress: i._handleCreateGroup,
                          size: 'small',
                          style: Me.createGroupButton,
                          type: 'brandOutlined',
                        }),
                        _.a.createElement(N.b, { color: 'link', numberOfLines: 1, weight: 'bold' }, ue),
                      )
                }
              }),
              b()(p()(i), '_isShareLimitMet', function (e) {
                var t = i.state,
                  n = t.mode,
                  a = t.participants,
                  r = n === Te.SHARE_TWEET_INDIVIDUALLY && i._separateShareLimit && a.length >= i._separateShareLimit,
                  o = a.filter(function (t) {
                    return t.id === e.id
                  }).length
                return !(!r || o)
              }),
              b()(p()(i), '_isGroupOptionDisabled', function (e) {
                var t = i.state,
                  n = t.mode,
                  a = t.participants
                if (
                  !i._isSelectedGroup(e) &&
                  n !== Te.SHARE_TWEET_INDIVIDUALLY &&
                  (i._hasAtLeastOneGroupSelected() ||
                    (e.type === le.b.DMConversation && (a.length > 0 || n === Te.CREATE_GROUP)))
                )
                  return !0
              }),
              b()(p()(i), '_canDMUser', function (e) {
                if (e.type === le.b.User) return !(e.data.can_dm || e.data.is_dm_able)
              }),
              b()(p()(i), '_hasAtLeastOneGroupSelected', function () {
                var e,
                  t = r()(i.state.participants)
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    if (e.value.type === le.b.DMConversation) return !0
                  }
                } catch (n) {
                  t.e(n)
                } finally {
                  t.f()
                }
                return !1
              }),
              b()(p()(i), '_isSelectedGroup', function (e) {
                var t = i.state.participants
                if (i._hasAtLeastOneGroupSelected() && t[0].id === e.id) return !0
              }),
              b()(p()(i), '_getItemIsDisabled', function (e) {
                return function (e) {
                  var t = i._isShareLimitMet(e),
                    n = i._isGroupOptionDisabled(e),
                    a = i._canDMUser(e)
                  return n || t || a
                }
              }),
              b()(p()(i), '_getItemDisabledMessage', function (e) {
                return e.type === le.b.User ? Se({ screenName: e.data.screen_name }) : void 0
              }),
              b()(
                p()(i),
                '_getInjections',
                Object(O.a)(function (e, t, n) {
                  return Object(I.a)(
                    n,
                    e.map(function (e) {
                      return Object(x.b)(e, void 0, i.props.users)
                    }),
                    t,
                  ).slice(0, 12)
                }),
              ),
              b()(p()(i), '_handleQueryChange', function (e) {
                i.setState({ query: e })
              }),
              b()(p()(i), '_getHandleSuggestionSelected', function () {
                return function (e) {
                  var t = i.props.perspective,
                    n = i.state,
                    a = n.mode,
                    r = n.participants
                  if (e.type === le.b.User || e.type === le.b.DMConversation)
                    if (i._hasAtLeastOneGroupSelected() && a !== Te.SHARE_TWEET_INDIVIDUALLY)
                      e.id === r[0].id && i._handleRemoveParticipant(e)
                    else if (e.type === le.b.DMConversation)
                      if (a === Te.SHARE_TWEET || a === Te.SHARE_TWEET_INDIVIDUALLY)
                        i._createConversationObjectForSelectionPill(e, a === Te.SHARE_TWEET_INDIVIDUALLY)
                      else {
                        var o = Ae(e, t)
                        i._goToConversation(o)
                      }
                    else i._handleParticipantToggle(e)
                }
              }),
              b()(p()(i), '_createConversationObjectForSelectionPill', function (e, t) {
                var n = i.props,
                  a = n.conversations,
                  r = n.perspective,
                  s = n.users,
                  l = i.state.participants,
                  c = a.find(function (t) {
                    return e.id === t.conversation_id
                  })
                if (c) {
                  var u = Object(x.b)(c, void 0, s),
                    d = Object(w.a)(u, r)
                  ;(e.data = o()(o()({}, u), {}, { conversationId: e.data.conversationId, name: d || '' })),
                    t
                      ? l.find(function (t) {
                          return t.id === e.id
                        })
                        ? i._handleRemoveParticipant(e)
                        : i.setState({ participants: l.concat(e) })
                      : i.setState({ participants: [e] })
                }
              }),
              b()(p()(i), '_handleParticipantToggle', function (e) {
                var t = i.state.participants
                if (
                  t.find(function (t) {
                    return t.id === e.id
                  })
                )
                  i._handleRemoveParticipant(e)
                else {
                  var n = t.concat(e)
                  i.setState({ participants: n })
                }
              }),
              b()(p()(i), '_handleRemoveParticipant', function (e) {
                var t = i.state.participants.filter(function (t) {
                  return t.id !== e.id
                })
                i.setState({ participants: t })
              }),
              b()(p()(i), '_handleConversationRouting', function () {
                i.props.tweetAttachment ? i._handleShareTweet() : i._handleCreateConversation()
              }),
              b()(p()(i), '_getExistingGroupConversationFromCache', function (e) {
                return i.props.conversations.find(function (t) {
                  var n = t.participants.length - 1
                  return (
                    !t.name &&
                    n === e.length &&
                    e.every(function (e) {
                      return Boolean(
                        t.participants.find(function (t) {
                          return e.id === t.user_id
                        }),
                      )
                    })
                  )
                })
              }),
              b()(p()(i), '_getExistingGroupConversationFromApi', function (e) {
                var t = e
                  .map(function (e) {
                    return e.id
                  })
                  .join(',')
                return i.props.fetchConversationFromParticipants(t)
              }),
              b()(p()(i), '_getExistingGroupConversation', function (e) {
                if (e.length <= 1) return Promise.resolve()
                var t = i._getExistingGroupConversationFromCache(e)
                return t ? Promise.resolve(t) : i._getExistingGroupConversationFromApi(e)
              }),
              b()(p()(i), '_handleCreateConversation', function () {
                var e = i.props,
                  t = e.history,
                  n = e.initialMessage,
                  a = e.perspective,
                  r = e.tweetAttachment,
                  o = i.state.participants
                if (1 === o.length) {
                  var s = Ae(o[0], a)
                  i._goToConversation(s)
                } else {
                  var l = i._getExistingGroupConversation(o)
                  i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement(),
                    l
                      .then(function (e) {
                        if (!e) throw new Error('No conversation found')
                        i._goToConversation(e.conversation_id)
                      })
                      .catch(function () {
                        t.replace({
                          pathname: '/messages/group',
                          query: b()({}, ee, n),
                          state: { participants: o, tweetAttachment: r, isNewGroupConversation: !0 },
                        })
                      }),
                    i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement()
                }
              }),
              b()(p()(i), '_handleShareTweetToGroup', function (e, t) {
                return i.setState({ mode: Te.CREATE_GROUP, isSending: !0 }), i._handleShareTweet(e, t)
              }),
              b()(p()(i), '_handleShareTweet', function (e, t) {
                var n = i.props,
                  a = n.createLocalApiErrorHandler,
                  r = n.perspective,
                  o = n.tweetAttachment,
                  s = i.state.participants,
                  l = 1 === s.length
                i.setState({ isSending: !0 })
                var c = s
                l && (c = s[0])
                var u = { senderId: r, tweetAttachment: o, text: t },
                  d = Ae(c, r)
                return d
                  ? i._sendMessage(d, s, u)
                  : i
                      ._getExistingGroupConversation(s)
                      .catch(a(se.a))
                      .then(function (e) {
                        var t = e ? e.conversation_id : null
                        return i._sendMessage(t, s, u)
                      })
              }),
              b()(p()(i), '_sendMessage', function (e, t, n) {
                var a = i.props,
                  r = a.analytics,
                  s = a.createLocalApiErrorHandler,
                  l = a.history,
                  c = a.sendMessage,
                  u = i.state.mode,
                  d = o()({ conversationId: void 0, recipients: void 0 }, n)
                if (!e && Array.isArray(t)) {
                  var p = t
                    .map(function (e) {
                      if (e.type === le.b.User) return e.data.id_str
                    })
                    .filter(Boolean)
                  d.recipients = p
                } else d.conversationId = e
                var m = s(se.b),
                  h = s(se.c),
                  f = { action: 'send_tweet_dm' },
                  v = { action: 'share_error' }
                if (
                  (i._isSharingMode(u) &&
                    null != t &&
                    t.length &&
                    t.forEach(function () {
                      r.scribe(f)
                    }),
                  u === Te.SHARE_TWEET_INDIVIDUALLY && (null == t ? void 0 : t.length) > 1)
                ) {
                  var g =
                    null == t
                      ? void 0
                      : t.map(function (e) {
                          var t = Ae(e, i.props.perspective)
                          return o()(o()({}, d), {}, { conversationId: t, recipients: void 0 })
                        })
                  return Promise.all(
                    g.map(function (e) {
                      return c(e)
                    }),
                  )
                    .then(function () {
                      i._displayDMMessageSentSuccessToast(), i.setState({ isSending: !1 }), l.goBack()
                    })
                    .catch(function (e) {
                      r.scribe(v), i.setState({ isSending: !1 }), h(e)
                    })
                }
                return c(d).then(
                  function (e) {
                    i._displayDMMessageSentSuccessToast(e), i.setState({ isSending: !1 }), l.goBackThroughModals()
                  },
                  function (e) {
                    i._isSharingMode(u) && r.scribe(v), i.setState({ isSending: !1 }), m(e)
                  },
                )
              }),
              b()(p()(i), '_goToConversation', function (e) {
                var t,
                  n,
                  a = i.props,
                  r = a.history,
                  o = a.initialMessage,
                  s = a.popOutConversation,
                  l = a.tweetAttachment
                ;(i._disableFocusingPreviousActiveElement && i._disableFocusingPreviousActiveElement(), e) &&
                  ('drawer' ===
                  (null === (t = r.location) || void 0 === t || null === (n = t.state) || void 0 === n
                    ? void 0
                    : n.source)
                    ? (s(e), r.goBack())
                    : r.replace({
                        pathname: '/messages/'.concat(e),
                        query: b()({}, ee, o),
                        state: { tweetAttachment: l },
                      }))
              }),
              b()(p()(i), '_displayDMMessageSentSuccessToast', function (e) {
                ;(0,
                i.props
                  .addToast)({ text: e ? (i.state.mode === Te.CREATE_GROUP ? ge : ve) : be, action: { link: e ? '/messages/'.concat(e) : '/messages', label: fe } })
              }),
              (i._separateShareLimit = a.featureSwitches.getNumberValue('dm_share_sheet_send_individually_max_count')),
              (i.state = { mode: i._determineMode(i.props), participants: [], query: '', isSending: !1 }),
              i
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler,
                    n = e.history,
                    a = e.initialMessage,
                    r = e.location.query,
                    i = e.perspective,
                    s = e.recipientId
                  if (s) {
                    var l = Object(C.a)(s, i)
                    n.replace({ pathname: '/messages/'.concat(l), query: o()(o()({}, r), {}, b()({}, ee, a)) })
                  } else this.props.fetchInboxIfNeeded().catch(t())
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.state.participants
                  ;(this.state.mode === Te.SHARE_TWEET || this.state.mode === Te.SHARE_TWEET_INDIVIDUALLY) &&
                    t.participants.length < n.length &&
                    this._composer.current &&
                    this._composer.current.focus()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !this.state.isSending && !t.isSending
                },
              },
              {
                key: 'render',
                value: function () {
                  return this.props.recipientId ? null : _.a.createElement(j.b.Consumer, null, this._renderScreen)
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      b()(Oe, 'contextType', H.a)
      var Ae = function (e, t) {
          return Array.isArray(e) || e.type !== le.b.DMConversation
            ? Array.isArray(e) || e.type !== le.b.User
              ? null
              : Object(C.a)(e.data.id_str, t)
            : e.data.conversationId
        },
        Me = U.a.create(function (e) {
          return {
            fill: { flex: 1 },
            button: { marginLeft: e.spaces.space12 },
            container: {
              borderBottomColor: e.colors.borderColor,
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space16,
            },
            createGroupButton: { padding: e.spaces.space2, marginRight: e.spaces.space12 },
            popover: { padding: e.spaces.space24 },
            popoverButton: { paddingVertical: e.spaces.space12 },
            popoverElement: { marginVertical: e.spaces.space8 },
            searchIcon: { padding: e.spaces.space8 },
            topBorder: {
              borderTopColor: e.colors.gray200,
              borderTopStyle: 'solid',
              borderTopWidth: e.borderWidths.small,
            },
            rightColumn: { alignItems: 'center', flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end' },
            shadow: { boxShadow: '0 -1px 3px rgba(0,0,0,0.12)' },
            placeholder: { height: 46 },
            fixToBottom: {
              position: 'fixed',
              backfaceVisibility: 'hidden',
              bottom: 0,
              left: 0,
              right: 0,
              paddingBottom: U.a.iPhoneOffsetBottom,
            },
          }
        }),
        Le = re(Oe)
      t.default = Le
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
    XoqV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMParticipantsScreen', function () {
          return I
        })
      n('z84I'), n('2G9S')
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('MMRb')),
        o = n('rxPX'),
        s = n('RqPI'),
        l = n('0KEI'),
        c = function (e, t) {
          return t.match.params.conversationId
        },
        u = function (e, t) {
          return i.selectConversationFetchStatus(e, c(0, t))
        },
        d = function (e, t) {
          var n
          return null === (n = i.selectConversation(e, t.match.params.conversationId)) || void 0 === n ? void 0 : n.data
        },
        p = Object(o.a)()
          .propsFromState(function () {
            return { conversationId: c, fetchStatus: u, perspective: s.q, conversation: d }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: i.fetchConversationIfNeeded,
            }
          }),
        m = n('I2k/'),
        h = n('v//M'),
        f = n('3XMw'),
        v = n.n(f),
        g = n('M2mT'),
        b = n('Es6L'),
        y = n('rHpw'),
        _ = n('hqDb'),
        E = n('yw4N'),
        S = n('7JQg'),
        C = v.a.g2fd3205,
        k = v.a.d4986f85
      function I(e) {
        var t = e.conversation,
          n = e.conversationId,
          a = e.createLocalApiErrorHandler,
          i = e.fetchConversationIfNeeded,
          o = e.fetchStatus,
          s = r.a.useCallback(
            function () {
              i({ conversationId: n }).catch(a(Object(m.a)(n)))
            },
            [a, n, i],
          ),
          l = r.a.useCallback(
            function () {
              var e = ((null == t ? void 0 : t.participants) || []).map(function (e) {
                return e.user_id
              })
              return r.a.createElement(_.a, { userIds: e, withItemBorder: !0 })
            },
            [t],
          )
        return (
          r.a.useEffect(
            function () {
              s()
            },
            [s],
          ),
          r.a.createElement(
            g.a,
            {
              backLocation: '/messages/'.concat(n, '/info'),
              documentTitle: k,
              screenType: 'secondaryDetail',
              title: C,
            },
            r.a.createElement(
              E.a,
              { style: [w.root, !Object(b.a)() && w.bottomOffset] },
              r.a.createElement(h.a, { fetchStatus: o, onRequestRetry: s, render: l }),
            ),
          )
        )
      }
      var w = y.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground },
          bottomOffset: {
            paddingBottom: 'calc('
              .concat(y.a.theme.componentDimensions.appBarHeight, ' + ')
              .concat(y.a.iPhoneOffsetBottom, ')'),
          },
        }
      })
      t.default = Object(S.a)({ page: 'messages', section: 'view_participants' })(p(I))
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
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('aWyx'),
        o = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        c = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        m = n('jhWN'),
        h = n('9Xij'),
        f = n('Znyr'),
        v = n('cm6r'),
        g = n('U+bB'),
        b = n('MWbm'),
        y = l.a.fd48249b,
        _ = u.a.create(function (e) {
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
          return r.a.createElement(
            b.a,
            { style: E.container },
            r.a.createElement(b.a, { style: E.left }, t),
            r.a.createElement(b.a, { style: E.right }, n),
          )
        },
        k = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            b.a,
            { style: S.container },
            r.a.createElement(b.a, { style: S.top }, n),
            r.a.createElement(b.a, { style: S.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return r.a.createElement(
              b.a,
              { key: t.id_str, style: _.container },
              r.a.createElement(m.a, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  b.a,
                  { key: e.id_str, style: _.container },
                  r.a.createElement(m.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(h.a, { ratio: 1 }, r.a.createElement(C, { left: n[1], right: n[0] }))
            var a = r.a.createElement(k, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(C, { left: a, right: i })
          },
          a = e.conversation,
          s = e.link,
          l = e.perspective,
          E = e.withBadge,
          S = a && a.avatar_image_https,
          I = a
            ? Object(o.a)(a, l).map(function (e) {
                return e.user
              })
            : [],
          w = I.slice(0, 3),
          x =
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
              return e ? r.a.createElement(g.a, { source: e }) : null
            })(S) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(b.a, { style: _.circle }, n(e))
            })(w),
          R =
            s ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, I),
          T = E && null != a && a.participants ? Object.keys(a.participants).length - 1 : 0
        return x
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                h.a,
                { ratio: 1 },
                R ? r.a.createElement(v.a, { interactiveStyles: null, link: R, testID: c.a.conversationAvatar }, x) : x,
              ),
              T
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      b.a,
                      { style: _.itemAccessory },
                      r.a.createElement(f.a, {
                        count: t,
                        standalone: !0,
                        style: _.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: y,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: T })
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
    bCEw: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')(n('K1iM')),
        r = n('23An'),
        i = n('Ud88'),
        o = n('aQQo'),
        s = o.loadQuery,
        l = o.useTrackLoadQueryInRender,
        c = n('ERkP'),
        u = c.useCallback,
        d = c.useEffect,
        p = c.useRef,
        m = c.useState,
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
        l()
        var c = r(),
          h = p(new Set([n])),
          g = m(function () {
            return n
          }),
          b = g[0],
          y = g[1],
          _ = m(function () {
            return n
          }),
          E = _[0],
          S = _[1]
        n !== E && (h.current.add(n), S(n), y(n))
        var C = u(
            function () {
              c.current && (h.current.add(f), y(f))
            },
            [c],
          ),
          k = u(
            function (t, n) {
              var a =
                null != n && n.hasOwnProperty('__environment')
                  ? {
                      fetchPolicy: n.fetchPolicy,
                      networkCacheConfig: n.networkCacheConfig,
                      __nameForWarning: n.__nameForWarning,
                    }
                  : n
              if (c.current) {
                var r,
                  i = s(null !== (r = null == n ? void 0 : n.__environment) && void 0 !== r ? r : o, e, t, a)
                h.current.add(i), y(i)
              }
            },
            [o, e, y, c],
          ),
          I = p(!1)
        return (
          d(function () {
            return function () {
              I.current = !0
            }
          }, []),
          d(
            function () {
              if (!0 === I.current)
                return (
                  (I.current = !1),
                  void (
                    'NullQueryReference' !== b.kind &&
                    k(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig })
                  )
                )
              var t = h.current
              if (c.current) {
                var n,
                  r = (0, a.default)(t)
                try {
                  for (r.s(); !(n = r.n()).done; ) {
                    var i = n.value
                    if (i === b) break
                    t.delete(i),
                      'NullQueryReference' !== i.kind &&
                        (v(e) ? i.dispose && i.dispose() : i.releaseQuery && i.releaseQuery())
                  }
                } catch (o) {
                  r.e(o)
                } finally {
                  r.f()
                }
              }
            },
            [b, c, k, e],
          ),
          d(
            function () {
              return function () {
                var t,
                  n = (0, a.default)(h.current)
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value
                    'NullQueryReference' !== r.kind &&
                      (v(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery())
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
          ['NullQueryReference' === b.kind ? null : b, k, C]
        )
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
        s = n('1Pcy'),
        l = n.n(s),
        c = n('5Yy7'),
        u = n.n(c),
        d = n('2VqO'),
        p = n.n(d),
        m = n('KEM+'),
        h = n.n(m),
        f = (n('KqXw'), n('MvUL'), n('uFXj'), n('ERkP')),
        v = n.n(f),
        g = n('v6aA'),
        b = (n('WNMA'), n('zh9S')),
        y = n('MMRb'),
        _ = n('CDB5'),
        E = n('RqPI'),
        S = n('hqKg'),
        C = n('AQOc'),
        k = n('z2Pn'),
        I = n('pNZL'),
        w = n('G6rE'),
        x = n('oEGd'),
        R = n('X/yg'),
        T = function (e, t) {
          return t.match.params.conversationId
        },
        O = Object(S.createSelector)(
          function (e, t) {
            return y.selectConversation(e, T(0, t))
          },
          y.selectEntries,
          T,
          R.l,
          E.q,
          R.m,
          R.n,
          w.e.selectAll,
          function (e, t) {
            return _.j(e, T(0, t))
          },
          function (e, t) {
            return _.i(e, T(0, t))
          },
          function (e, t, n, a, r, i, o, s, l, c) {
            var u = e && e.data
            return {
              conversation: (u && Object(C.a)(u, t, s)) || void 0,
              conversationId: n,
              isNewGroupConversation: a,
              isUploading: l,
              media: c,
              newConversationParticipants: i,
              perspective: r,
            }
          },
        ),
        A = Object(x.d)(O, function (e) {
          return {
            cancelUpload: Object(R.a)(e.match.params.conversationId),
            googleAnalyticsPageView: b.a,
            removeMedia: Object(R.b)(e.match.params.conversationId),
            scribePageImpression: b.d,
            setLastViewedDmInboxPath: k.h,
            updateTweetDetailNav: I.b,
          }
        }),
        M = n('i4Oy'),
        L = n('Oi4X'),
        F = n('qBaR'),
        P = n('7myi'),
        D = n('rHpw'),
        N = n('7JQg'),
        B = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            r()(this, n),
              (i = t.call(this, e, a)),
              h()(l()(i), '_composer', v.a.createRef()),
              h()(l()(i), '_handleInfoClick', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              h()(l()(i), '_updateLastViewDmInboxPath', function () {
                var e = i.props,
                  t = e.location
                ;(0, e.setLastViewedDmInboxPath)(t.pathname)
              })
            var o = e.conversationId,
              s = e.history,
              c = e.isNewGroupConversation,
              u = e.location
            return o || c || u.pathname !== window.location.pathname || s.replace({ pathname: '/messages' }), i
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
                    s = e.richTextInputContext,
                    l = e.typeaheadWrapper,
                    c = 'string' == typeof r.query.text ? r.query.text : void 0,
                    u = M.a.get('window').width >= D.a.theme.breakpoints.small
                  return v.a.createElement(
                    F.a,
                    { conversation: t, conversationId: n, newConversationParticipants: i, perspective: o },
                    v.a.createElement(L.a, {
                      conversationId: n,
                      history: a,
                      isWide: u,
                      location: r,
                      prefillText: c,
                      richTextInputContext: s,
                      typeaheadWrapper: l,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      h()(B, 'contextType', g.a), h()(B, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: P.a })
      t.default = Object(N.a)({ page: 'messages', section: 'thread' })(A(B))
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
    f42t: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
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
        g =
          (n('2G9S'),
          n('+KXO'),
          n('lTEL'),
          n('7x/C'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('z84I'),
          n('KOtZ'),
          n('ERkP')),
        b = n.n(g),
        y = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), v()(u()(e), 'state', { isLoaded: !1 }), e
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  return (this._isMounted = !0), this.load()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  return this.props.modules === e.modules ? null : this.load()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._isMounted = !1
                },
              },
              {
                key: 'load',
                value: function () {
                  var e = this
                  this.setState({ isLoaded: !1 })
                  var t = this.props.modules,
                    n = Object.keys(t)
                  return Promise.all(
                    n.map(function (e) {
                      return t[e]()
                    }),
                  )
                    .then(function (e) {
                      return n.reduce(function (t, n, a) {
                        return (t[n] = e[a]), t
                      }, {})
                    })
                    .then(function (t) {
                      if (!e._isMounted) return null
                      e.setState({ modules: t, isLoaded: !0 })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isLoaded ? this.state.modules : {}
                  return b.a.Children.only(this.props.children(e || {}))
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        _ = function (e, t) {
          return function (n) {
            return b.a.createElement(y, { modules: t }, function (t) {
              return b.a.createElement(e, r()({}, t, n))
            })
          }
        }
    },
    fzwJ: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMAddParticipantsScreen', function () {
          return J
        }),
        n.d(t, 'getItemIsDisabled', function () {
          return Z
        })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        s = n('ddV6'),
        l = n.n(s),
        c = (n('hBpG'), n('7x/C'), n('2G9S'), n('LW0h'), n('z84I'), n('M+/F'), n('i4UL'), n('ERkP')),
        u = n.n(c),
        d = n('k49u'),
        p = n('VAZu'),
        m = (n('KqXw'), n('WNMA'), n('+KXO'), n('849X'), n('TJCb'), n('MMRb')),
        h = n('1YZw'),
        f = n('lnti'),
        v = n('hqKg'),
        g = n('RqPI'),
        b = n('G6rE'),
        y = n('rxPX'),
        _ = n('0KEI'),
        E = function (e, t) {
          return t.match.params.conversationId
        },
        S = function (e, t) {
          var n = m.selectConversation(e, E(0, t)),
            a = null == n ? void 0 : n.data
          return null == a ? void 0 : a.participants
        },
        C = function (e, t) {
          return m.selectConversationFetchStatus(e, E(0, t))
        },
        k = Object(v.createSelector)(m.selectConversations, function (e) {
          return Object(f.a)(
            Object.keys(e).map(function (t) {
              var n = e[t]
              if (!n.isDeleted) return n.data
            }),
          )
        }),
        I = Object(y.a)()
          .propsFromState(function () {
            return {
              conversationId: E,
              conversations: k,
              existingParticipants: S,
              fetchStatus: C,
              perspective: g.q,
              users: b.e.selectAll,
            }
          })
          .adjustStateProps(function (e) {
            var t = e.conversationId,
              n = e.conversations,
              a = e.existingParticipants,
              r = e.fetchStatus,
              i = e.perspective,
              o = e.users
            if (!i) throw new Error('logged-in user not found')
            return {
              conversationId: t,
              conversations: n,
              existingParticipants: a,
              fetchStatus: r,
              perspective: i,
              users: o,
            }
          })
          .propsFromActions(function () {
            return {
              addParticipants: m.addParticipants,
              addToast: h.b,
              createLocalApiErrorHandler: Object(_.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_ADD_PARTICIPANTS',
              ),
              fetchConversationIfNeeded: m.fetchConversationIfNeeded,
            }
          })
          .withAnalytics({ page: 'messages', section: 'add_participants' }),
        w = n('I2k/'),
        x = n('s14A'),
        R = n('kGix'),
        T = n('jHSc'),
        O = n('wO1l'),
        A = n('AQOc'),
        M = n('3XMw'),
        L = n.n(M),
        F = n('oQhu'),
        P = 'addPeopleButtonText',
        D = n('2dXj'),
        N = n('MWbm'),
        B = n('/yvb'),
        j = n('rHpw'),
        U = n('GZwR'),
        H = L.a.c6026009,
        K = L.a.d4986f85,
        V = L.a.af40a8ef,
        z = L.a.e1bde73e,
        W = L.a.e62d3c10,
        G = L.a.f17f716a,
        q = L.a.e3fc3547,
        Q = L.a.c55f5c9a,
        Y = L.a.h8403fb5,
        X = L.a.ja522ed3
      function J(e) {
        var t = u.a.useRef(null),
          n = u.a.useState([]),
          a = l()(n, 2),
          i = a[0],
          s = a[1],
          c = u.a.useState(''),
          m = l()(c, 2),
          h = m[0],
          f = m[1],
          v = e.createLocalApiErrorHandler,
          g = e.conversationId,
          b = e.fetchConversationIfNeeded,
          y = e.history,
          _ = e.addParticipants,
          E = e.fetchStatus,
          S = e.conversations,
          C = e.existingParticipants,
          k = void 0 === C ? [] : C,
          I = e.perspective,
          M = e.users
        u.a.useEffect(
          function () {
            b({ conversationId: g }).catch(v(Object(w.a)(g)))
          },
          [b, g, v],
        )
        var L = function () {
            return u.a.createElement(
              N.a,
              { style: $.rightColumn },
              u.a.createElement(
                B.a,
                {
                  disabled: 0 === i.length || E !== R.a.LOADED,
                  onPress: J,
                  size: 'small',
                  testID: P,
                  type: 'primaryFilled',
                },
                V,
              ),
            )
          },
          j = function (e) {
            s(
              i.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          J = function () {
            var e,
              n = i.map(function (e) {
                return e.id
              })
            _(g, n).then(function (e) {
              t.current && t.current.goBack()
            }, v(
              ((e = { defaultToast: { text: X } }),
              r()(e, d.a.DirectMessageCannotDmOtherUser, { toast: { text: Q } }),
              r()(e, d.a.DirectMessageGenericUserCouldNotBeAdded, { toast: { text: Y } }),
              r()(e, d.a.DirectMessageOtherUserNotFollowing, { toast: { text: G } }),
              r()(e, d.a.TargetUserNotFound, { toast: { text: W } }),
              r()(e, d.a.TieredActionTweetSpammer, { toast: { text: q } }),
              r()(e, 'showToast', !0),
              e),
            ))
          },
          ee = Object(F.a)(function (e, t, n, a) {
            return Object(O.b)(
              n,
              e.map(function (e) {
                return Object(A.b)(e, void 0, a)
              }),
              t,
            ).slice(0, 12)
          }),
          te = k.map(function (e) {
            return e.user_id
          })
        return u.a.createElement(
          T.b,
          {
            containerStyle: $.fill,
            documentTitle: K,
            renderHeader: function () {
              return u.a.createElement(p.a, {
                backButtonType: 'close',
                backLocation: '/messages/'.concat(g),
                history: y,
                ref: t,
                rightControl: L(),
                title: H,
              })
            },
          },
          u.a.createElement(
            x.a,
            { style: $.fill },
            u.a.createElement(D.d, {
              getItemDisabledMessage: function (e) {
                return e.type === U.b.User ? z({ screenName: e.data.screen_name }) : void 0
              },
              getItemIsDisabled: Z,
              injections: ee(S, I, h, M),
              onQueryChange: function (e) {
                f(e)
              },
              onRemove: j,
              onSelect: function (e) {
                e.type === U.b.User &&
                  (i.find(function (t) {
                    return t.id === e.id
                  })
                    ? j(e)
                    : s([].concat(o()(i), [e])))
              },
              preselectedUsers: te,
              selectedUsers: i,
              source: U.d.ComposeMessage,
              withCompactPills: !0,
            }),
          ),
        )
      }
      var Z = function (e) {
          return e.type === U.b.User && !(e.data.can_dm || e.data.is_dm_able)
        },
        $ = j.a.create(function (e) {
          return {
            fill: { flex: 1 },
            rightColumn: { flexDirection: 'row', flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center' },
          }
        })
      t.default = I(J)
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
    hqDb: function (e, t, n) {
      'use strict'
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
        E = n('k49u'),
        S = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        C = n('kGix'),
        k = n('G6rE'),
        I = n('rxPX'),
        w = n('0KEI'),
        x = function (e, t) {
          return t.userIds
        },
        R = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!k.e.select(e, t)
          })
        },
        T = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = k.e.selectFetchStatus(e, n)
            return (t[n] = a === C.a.NONE ? C.a.LOADING : a), t
          }, {})
        },
        O = Object(I.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(S.a)(R, function (e) {
                return e
              }),
              fetchStatus: Object(S.a)(R, T, x, function (e, t, n) {
                for (var a = C.a.LOADED, r = 0; r < n.length; r++) {
                  var i = n[r]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || C.a.LOADING
                    a = a === C.a.LOADED ? o : a
                  }
                  if (a === C.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(w.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: k.e.fetchManyIfNeeded,
            }
          }),
        A = n('v//M'),
        M = n('3XMw'),
        L = n.n(M),
        F = n('pQ3Z'),
        P = n.n(F),
        D = (n('z84I'), n('cFuS')),
        N = n('Re5t'),
        B = n('MWbm'),
        j = n('88ay'),
        U = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return _.a.createElement(
            B.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : _.a.createElement(j.b, {
                    decoration: j.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: D.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      U.defaultProps = { displayMode: N.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var H = U,
        K = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        V = L.a.f5b426c2,
        z = { viewType: 'user_list' },
        W = O(
          (function (e) {
            h()(n, e)
            var t = v()(n)
            function n() {
              var e
              l()(this, n)
              for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                b()(p()(e), 'state', { allUsersUnavailable: !1 }),
                b()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, o()(t, K))
                  return _.a.createElement(H, r()({}, a, { userIds: n }))
                }),
                b()(p()(e), '_handleFetch', function () {
                  e._fetchUsersIfNeeded()
                }),
                e
              )
            }
            return (
              u()(n, [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    P()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return _.a.createElement(A.a, {
                      accessibilityLabel: V,
                      behavioralEventContext: z,
                      fetchStatus: this.state.allUsersUnavailable ? C.a.LOADED : this.props.fetchStatus,
                      onRequestRetry: this._handleFetch,
                      render: this._renderContent,
                      retryable: !1,
                    })
                  },
                },
                {
                  key: '_fetchUsersIfNeeded',
                  value: function () {
                    var e,
                      t = this,
                      n = this.props,
                      a = n.availableUserIds,
                      r = n.createLocalApiErrorHandler
                    ;(0, n.fetchUsersIfNeeded)(n.userIds).then(
                      function () {
                        t.setState({ allUsersUnavailable: !1 })
                      },
                      r(
                        ((e = {}),
                        b()(e, E.a.AddressBookLookupNotFound, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        b()(e, E.a.OtherUserSuspended, {
                          customAction: function () {
                            0 === a.length && t.setState({ allUsersUnavailable: !0 })
                          },
                        }),
                        e),
                      ),
                    )
                  },
                },
              ]),
              n
            )
          })(_.a.Component),
        )
      t.a = W
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
    hxu0: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('vqbU')
      t.a = function (e) {
        return function (t) {
          return o.a.createElement(s.a.Consumer, null, function (n) {
            return o.a.createElement(e, r()({}, t, { isInSidebar: n }))
          })
        }
      }
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
          k = e.withMask,
          I = void 0 === k || k,
          w = o.a.useState(!1),
          x = r()(w, 2),
          R = x[0],
          T = x[1],
          O = function (e) {
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
              L(),
              o.a.createElement(
                f.a,
                { style: g.container },
                F(),
                P(),
                D({ action: t, dismiss: e, type: n && 'primaryFilled' }),
                D({ action: n, dismiss: e }),
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
          P = function () {
            return o.a.createElement(l.b, { color: 'gray700', style: g.description }, C)
          },
          D = function (e) {
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
        return S && !R ? (a ? O(a) : A()) : a || null
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
    lAtx: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        s = n('v6aA'),
        l = n('Y6L+'),
        c = n('zCf4'),
        u = n('MMRb'),
        d = n('rxPX'),
        p = function (e, t) {
          var n = Object(c.e)(t.location.pathname, { path: '/messages/'.concat(l.j, '(/.*)?'), exact: !0, strict: !1 })
          return null == n ? void 0 : n.params.conversationId
        },
        m = function (e, t) {
          var n = p(0, t)
          return Object(u.selectInboxTypeByConversation)(e, n)
        },
        h = Object(d.a)().propsFromState(function () {
          return { conversationId: p, inboxType: m }
        }),
        f = n('VrFO'),
        v = n.n(f),
        g = n('Y9Ll'),
        b = n.n(g),
        y = n('1Pcy'),
        _ = n.n(y),
        E = n('5Yy7'),
        S = n.n(E),
        C = n('2VqO'),
        k = n.n(C),
        I = n('KEM+'),
        w = n.n(I),
        x = (n('2G9S'), n('uFXj'), n('7x/C'), n('JtPf'), n('P1r1')),
        R = n('qdEw'),
        T = n('6xIQ'),
        O = n('X/yg'),
        A = n('AQ79'),
        M = n('z2Pn'),
        L = n('0KEI'),
        F = function (e) {
          return e === A.d.PRIMARY
            ? u.fetchTrustedInboxHistory
            : e === A.d.SECONDARY
            ? u.fetchUntrustedInboxHistory
            : u.fetchUntrustedLowQualityInboxHistory
        },
        P = function (e) {
          return e === A.d.PRIMARY
            ? u.updateTrustedLastSeenEventId
            : e === A.d.SECONDARY
            ? u.updateUntrustedLastSeenEventId
            : function () {
                return function () {
                  return Promise.resolve()
                }
              }
        },
        D = function (e) {
          var t = e.inbox
          return Object(d.a)()
            .propsFromState(function () {
              return {
                conversationIds: Object(T.a)(
                  function (e) {
                    return u.selectConversationIdsByInbox(e, t)
                  },
                  function (e) {
                    return e
                  },
                ),
                dmNsfwMediaFilter: x.m,
                isLoadingTop: u.selectIsLoadingTop,
                isDmNsfwMediaFilterEnabled: x.r,
                isDmsOpenForAll: x.t,
                hasConversations: u.selectHasConversations,
                untrustedUnreadCount: u.selectUntrustedUnreadCount,
                untrustedCursor: u.selectUntrustedCursor,
                untrustedConversationCount: u.selectUntrustedConversationCount,
                untrustedLowQualityConversationCount: u.selectUntrustedLowQualityConversationCount,
                untrustedLowQualityCursor: u.selectUntrustedLowQualityCursor,
              }
            })
            .adjustStateProps(function (e) {
              var t = e.conversationIds,
                n = e.dmNsfwMediaFilter,
                a = (e.hasConversations, e.isDmNsfwMediaFilterEnabled),
                r = e.isDmsOpenForAll,
                i = (e.isLoadingTop, e.untrustedConversationCount),
                o = e.untrustedCursor,
                s = e.untrustedLowQualityConversationCount
              e.untrustedLowQualityCursor
              return {
                dmNsfwMediaFilter: n,
                isDmNsfwMediaFilterEnabled: a,
                conversationIds: t,
                untrustedUnreadCount: e.untrustedUnreadCount,
                allowUntrustedInbox: r && i > 0,
                allowLowQualityUntrustedInbox: r && s > 0,
                isAtEndOfUntrustedInbox: o && 'AT_END' === o.status,
              }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                  'DIRECT_MESSAGES_INBOX',
                ),
                clearSearchCache: u.clearSearchCache,
                clearSearchSlicesCache: R.b,
                fetchInboxHistory: F(t),
                setLastViewedDmInboxPath: M.h,
                updateLastSeenEventId: P(t),
                updateDmNsfwMediaFilter: x.M,
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox', component: Object(O.g)(t) })
        },
        N = n('/yvb'),
        B = n('3XMw'),
        j = n.n(B),
        U = n('Avzu'),
        H = j.a.f325afc3,
        K = j.a.cdcebd22,
        V = function (e) {
          var t = e.testID
          return o.a.createElement(N.a, {
            accessibilityLabel: H,
            hoverLabel: { label: K },
            icon: o.a.createElement(U.a, null),
            link: '/messages/compose',
            pullRight: !0,
            testID: t,
            type: 'primaryText',
          })
        },
        z = n('qz2E'),
        W = n('pXKu'),
        G = n('ddV6'),
        q = n.n(G),
        Q = n('MWbm'),
        Y = n('OiMc'),
        X = n('t62R'),
        J = n('CK8+'),
        Z = n('rHpw'),
        $ = n('hX3w'),
        ee = function () {
          var e = o.a.useContext(s.a).featureSwitches
          if (!e.isTrue('dm_evolution_responsive_web_early_bird_only_switch')) return null
          var t,
            n,
            a = Object($.a)(e),
            r = o.a.useState(
              e.isTrue('dm_evolution_enabled') &&
                (e.isTrue('dm_evolution_conversation_timeline_enabled') ||
                  e.isTrue('dm_evolution_inbox_initial_state_enabled')),
            ),
            i = q()(r, 2),
            l = i[0],
            c = i[1],
            u =
              ((t = l),
              (n = o.a.useRef()),
              o.a.useEffect(function () {
                n.current = t
              }),
              n.current)
          o.a.useEffect(
            function () {
              void 0 !== u && u !== l && window.location.reload()
            },
            [l, u],
          )
          return o.a.createElement(
            Y.a,
            {
              enableHover: !0,
              renderContent: function () {
                return o.a.createElement(
                  X.b,
                  { style: te.popoverContent },
                  'Whether to use GraphQL (bleeding edge) or REST (old and stable) to get data',
                )
              },
            },
            o.a.createElement(
              Q.a,
              { style: te.switchContainer },
              o.a.createElement(
                Q.a,
                { style: l ? te.icon : [te.icon, te.grayScale] },
                o.a.createElement(
                  'svg',
                  { viewBox: '0 0 400 400', xmlns: 'http://www.w3.org/2000/svg' },
                  o.a.createElement('path', {
                    d: 'M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z',
                    fill: '#E535AB',
                  }),
                  o.a.createElement('path', { d: 'M39.8 272.2h320.3v16.6H39.8z', fill: '#E535AB' }),
                  o.a.createElement('path', {
                    d: 'M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zm139.174-241.079l-160.21-92.5 8.3-14.376 160.21 92.5z',
                    fill: '#E535AB',
                  }),
                  o.a.createElement('path', {
                    d: 'M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z',
                    fill: '#E535AB',
                  }),
                  o.a.createElement('path', {
                    d: 'M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5z',
                    fill: '#E535AB',
                  }),
                  o.a.createElement('path', { d: 'M330.9 107.5h16.6v185h-16.6z', fill: '#E535AB' }),
                  o.a.createElement('path', {
                    d: 'M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z',
                    fill: '#E535AB',
                  }),
                  o.a.createElement('path', {
                    d: 'M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9',
                    fill: '#E535AB',
                  }),
                ),
              ),
              o.a.createElement(J.a, {
                onValueChange: function (e) {
                  var t = !l
                  a.set('dm_evolution_enabled', t),
                    a.set('dm_evolution_conversation_timeline_enabled', t),
                    a.set('dm_evolution_inbox_initial_state_enabled', t),
                    c(t)
                },
                style: te.switch,
                value: l,
              }),
            ),
          )
        },
        te = Z.a.create(function (e) {
          return {
            grayScale: { filter: 'grayscale(100%)' },
            icon: {
              height: e.spaces.space24,
              marginRight: e.spaces.space8,
              marginTop: 'calc(-'.concat(e.spaces.space2, ')'),
              width: e.spaces.space24,
            },
            popoverContent: { padding: e.spaces.space24 },
            switchContainer: { display: 'flex', flexDirection: 'row' },
            switch: { marginRight: e.spaces.space12 },
          }
        }),
        ne = n('SOvA'),
        ae = n('f42t'),
        re = n('pHkl'),
        ie = n('M2mT'),
        oe = n('Es6L'),
        se = n('aI6n'),
        le = n('pxuL'),
        ce = n('csss'),
        ue = n('j7Bv'),
        de = n('Znyr'),
        pe = n('FIs5'),
        me = n('nySH'),
        he = j.a.a2f8105f,
        fe = j.a.cf2d1047,
        ve = j.a.b8aa3744,
        ge = j.a.j06309e1,
        be = j.a.gee5150a,
        ye = j.a.da2f9224,
        _e = j.a.a74e7c76,
        Ee = j.a.h6beb5fa,
        Se = (function (e) {
          S()(n, e)
          var t = k()(n)
          function n() {
            var e
            v()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(_()(e), '_renderPivot', function () {
                var t = e.props,
                  n = t.allowUntrustedInbox,
                  a = t.untrustedUnreadCount,
                  r =
                    e.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                    e.context.featureSwitches.isTrue('dm_vdl_inbox_p0_enabled'),
                  i = [Ce.requestPivotContainer, r ? void 0 : Ce.requestPivotContainerBorder],
                  s = r && a > 0
                return n
                  ? o.a.createElement(
                      Q.a,
                      { style: i },
                      o.a.createElement(ce.a, {
                        description: s ? _e({ count: a }) : void 0,
                        label: fe,
                        link: Object(me.a)(A.d.SECONDARY),
                        onPress: e._handleRequestsPivotClick,
                        renderRightContent: r ? void 0 : e._renderPivotBadge,
                        thumbnail: r
                          ? o.a.createElement(
                              Q.a,
                              { testID: se.a.untrustedThumbnail },
                              o.a.createElement(ue.a, { Icon: ne.a, color: 'neutral' }),
                              s
                                ? o.a.createElement(de.a, {
                                    count: a,
                                    pip: !0,
                                    standalone: !0,
                                    style: Ce.inboxPip,
                                    truncatedCountFormatter: Ee,
                                    unreadCountLabel: ye,
                                  })
                                : null,
                            )
                          : null,
                      }),
                    )
                  : null
              }),
              w()(_()(e), '_renderPivotBadge', function () {
                var t = e.props.untrustedUnreadCount
                return t > 0
                  ? o.a.createElement(de.a, {
                      count: t,
                      standalone: !0,
                      truncatedCountFormatter: Ee,
                      unreadCountLabel: ye,
                    })
                  : null
              }),
              w()(_()(e), '_renderEmptyDMInbox', function () {
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  e._renderPivot(),
                  o.a.createElement(pe.a, {
                    buttonLink: '/messages/compose',
                    buttonText: be,
                    header: ve,
                    message: ge,
                    onImpression: e._handleEmptyDMInboxImpression,
                  }),
                )
              }),
              w()(_()(e), '_handleEmptyDMInboxImpression', function () {
                e.props.analytics.scribe({ component: 'empty_message', action: 'impression' })
              }),
              w()(_()(e), '_handleRequestsPivotClick', function () {
                e.props.analytics.scribe({ element: 'requests_pivot', action: 'click' })
              }),
              e
            )
          }
          return (
            b()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.allowUntrustedInbox,
                    n = e.analytics,
                    a = e.location
                  ;(0, e.setLastViewedDmInboxPath)(a.pathname),
                    t && n.scribe({ element: 'requests_pivot', action: 'impression' }),
                    this.context.incrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.context.featureSwitches.isTrue('dm_inbox_search_modular_results_enabled') &&
                    this.props.clearSearchSlicesCache(re.f),
                    this.props.clearSearchCache(),
                    this.context.decrementDmDrawerInhibitorCount()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = Object(oe.a)()
                      ? o.a.createElement(
                          Q.a,
                          { style: Ce.appBarButtons },
                          o.a.createElement(ee, null),
                          Object(me.b)('/messages/settings', !1),
                          o.a.createElement(V, { testID: se.a.newDM }),
                        )
                      : Object(me.b)('/messages/settings', !0),
                    t = this.props,
                    n = t.analytics,
                    a = t.conversationIds,
                    r = t.fetchInboxHistory,
                    i = t.updateLastSeenEventId
                  return o.a.createElement(
                    ie.a,
                    { rightControl: e, screenType: 'root', title: o.a.createElement(X.b, { size: 'headline2' }, he) },
                    o.a.createElement(W.a, {
                      accessibilityTitle: he,
                      analytics: n,
                      conversationIds: a,
                      fetchInboxHistory: r,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: this._renderPivot,
                      updateLastSeenEventId: i,
                      virtualScrollerCacheKey: 'dmInbox',
                      withDmSearch: !0,
                      withPinnedInbox: !0,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(o.a.Component)
      w()(Se, 'contextType', le.a), w()(Se, 'defaultProps', { conversationIds: [], untrustedUnreadCount: 0 })
      var Ce = Z.a.create(function (e) {
          return {
            appBarButtons: { flexDirection: 'row', alignItems: 'center' },
            inboxPip: {
              backgroundColor: e.colors.blue500,
              borderWidth: e.borderWidths.medium,
              borderColor: e.colors.cellBackground,
              borderStyle: 'solid',
              position: 'absolute',
              height: e.baseFontSize - 4,
              width: e.baseFontSize - 4,
              top: e.spacesPx.space8 + e.spacesPx.space2,
              right: e.spacesPx.space8 + e.spacesPx.space2,
            },
            requestPivotContainer: { backgroundColor: e.colors.cellBackground, zIndex: 2 },
            requestPivotContainerBorder: {
              borderBottomStyle: 'solid',
              borderBottomWidth: e.borderWidths.small,
              borderBottomColor: e.colors.borderColor,
            },
          }
        }),
        ke = Object(ae.a)(D({ inbox: A.d.PRIMARY })(Se), { directMessages: z.a }),
        Ie = (n('KqXw'), n('WNMA'), n('jYSG')),
        we = n('5FtR'),
        xe = n('Lz2T'),
        Re = n('0yYu'),
        Te = n('cm6r'),
        Oe = j.a.cf2d1047,
        Ae = j.a.bef0039f,
        Me = j.a.eb7de4a9,
        Le = j.a.a0e81a2e,
        Fe = j.a.f5dc353c,
        Pe = j.a.fe1eaa95,
        De = j.a.j24c37b2,
        Ne = j.a.daeda053,
        Be = (function (e) {
          S()(n, e)
          var t = k()(n)
          function n() {
            var e
            v()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(_()(e), '_nsfwBannerWasShown', !1),
              w()(_()(e), 'componentDidMount', function () {
                var t = e.props.analytics
                e._shouldRenderTombstone() && t.scribe({ element: 'low_quality_pivot', action: 'impression' }),
                  e.context.incrementDmDrawerInhibitorCount()
              }),
              w()(_()(e), 'componentDidUpdate', function (t) {
                var n = e.props.analytics
                !e._shouldRenderTombstone() ||
                  (t.allowLowQualityUntrustedInbox && t.isAtEndOfUntrustedInbox) ||
                  n.scribe({ element: 'low_quality_pivot', action: 'impression' })
              }),
              w()(_()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount(), e._nsfwBannerWasShown && e._hideNsfwTimelineMessage()
              }),
              w()(_()(e), '_renderNsfwSettingBanner', function (t) {
                var n = t.featureSwitches,
                  a = e.props.dmNsfwMediaFilter
                return n.isTrue('dm_conversations_nsfw_media_filter_enabled') && void 0 === a
                  ? ((e._nsfwBannerWasShown = !0),
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(xe.a, {
                        bodyText: Pe,
                        primaryAction: { onClick: e._handleNsfwTimelineMessagePrimaryClick, text: De },
                        secondaryAction: {
                          link: '/settings/direct_messages',
                          onClick: e._handleNsfwTimelineMessageSecondaryClick,
                          text: Ne,
                        },
                        titleText: Fe,
                      }),
                      o.a.createElement(Re.a, null),
                    ))
                  : null
              }),
              w()(_()(e), '_shouldRenderTombstone', function () {
                var t = e.props,
                  n = t.allowLowQualityUntrustedInbox,
                  a = t.isAtEndOfUntrustedInbox
                return n && a
              }),
              w()(_()(e), '_renderTombstone', function () {
                var t = e.props.conversationIds
                return e._shouldRenderTombstone()
                  ? o.a.createElement(
                      Q.a,
                      null,
                      t.length > 0 && o.a.createElement(Re.a, null),
                      o.a.createElement(
                        Q.a,
                        { style: je.tombstoneDescription },
                        o.a.createElement(X.b, { color: 'gray700', size: 'subtext2' }, Me),
                      ),
                      o.a.createElement(
                        Te.a,
                        {
                          link: Object(me.a)(A.d.TERTIARY),
                          onPress: e._handleTombstoneClick,
                          style: je.tombstoneContainer,
                        },
                        o.a.createElement(X.b, { align: 'center', color: 'primary', size: 'body' }, Le),
                      ),
                    )
                  : null
              }),
              w()(_()(e), '_renderEmptyDMInbox', function () {
                var t = e._renderTombstone()
                return o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(pe.a, { header: t ? '' : Ae, message: Ie.a, style: je.emptyMessage }),
                  t,
                )
              }),
              w()(_()(e), '_handleNsfwTimelineMessagePrimaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'primary_action', action: 'click' }),
                  e._hideNsfwTimelineMessage()
              }),
              w()(_()(e), '_handleNsfwTimelineMessageSecondaryClick', function () {
                e.props.analytics.scribe({ component: 'dm_nsfw_prompt', element: 'secondary_action', action: 'click' })
              }),
              w()(_()(e), '_hideNsfwTimelineMessage', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.updateDmNsfwMediaFilter)(!0).catch(n())
              }),
              w()(_()(e), '_handleBackClick', function () {
                e.props.history.push(Object(me.a)(A.d.PRIMARY))
              }),
              w()(_()(e), '_handleTombstoneClick', function () {
                e.props.analytics.scribe({ element: 'low_quality_pivot', action: 'click' })
              }),
              w()(_()(e), '_hasConversationOpen', function () {
                return !e.props.match.isExact
              }),
              e
            )
          }
          return (
            b()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.allowUntrustedInbox,
                    a = t.analytics,
                    r = t.conversationIds,
                    i = t.fetchInboxHistory,
                    l = t.updateLastSeenEventId
                  return n
                    ? o.a.createElement(
                        ie.a,
                        {
                          backLocation: '/messages',
                          onBackClick: this._handleBackClick,
                          rightControl: Object(me.b)('/settings/direct_messages', !0),
                          screenType: 'secondaryRoot',
                          title: o.a.createElement(X.b, { size: 'headline2' }, Oe),
                          withDetailOpen: this._hasConversationOpen(),
                        },
                        o.a.createElement(s.a.Consumer, null, this._renderNsfwSettingBanner),
                        o.a.createElement(W.a, {
                          accessibilityTitle: Oe,
                          analytics: a,
                          conversationIds: r,
                          fetchInboxHistory: i,
                          footer: this._renderTombstone(),
                          inboxType: A.d.SECONDARY,
                          renderEmptyDMInbox: this._renderEmptyDMInbox,
                          renderStickyContent: function () {
                            return Object(me.c)(e.props.conversationIds)
                          },
                          updateLastSeenEventId: l,
                          virtualScrollerCacheKey: 'dmUntrustedInbox',
                        }),
                      )
                    : o.a.createElement(we.a, { to: '/messages' })
                },
              },
            ]),
            n
          )
        })(o.a.Component)
      w()(Be, 'contextType', le.a), w()(Be, 'defaultProps', { conversationIds: [] })
      var je = Z.a.create(function (e) {
          return {
            emptyMessage: {
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingVertical: e.spaces.space16,
            },
            tombstoneContainer: {
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
              borderTopWidth: e.borderWidths.small,
              borderBottomStyle: 'solid',
              borderBottomColor: e.colors.borderColor,
              borderBottomWidth: e.borderWidths.small,
              paddingVertical: e.spaces.space12,
            },
            tombstoneDescription: { paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space16 },
          }
        }),
        Ue = Object(ae.a)(D({ inbox: A.d.SECONDARY })(Be), { directMessages: z.a }),
        He = j.a.e7172d70,
        Ke = j.a.bef0039f,
        Ve = (function (e) {
          S()(n, e)
          var t = k()(n)
          function n() {
            var e
            v()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              w()(_()(e), 'componentDidMount', function () {
                e.context.incrementDmDrawerInhibitorCount()
              }),
              w()(_()(e), 'componentWillUnmount', function () {
                e.context.decrementDmDrawerInhibitorCount()
              }),
              w()(_()(e), '_renderEmptyDMInbox', function () {
                return o.a.createElement(pe.a, { header: Ke, message: Ie.a })
              }),
              w()(_()(e), '_handleBackClick', function () {
                e.props.history.push(Object(me.a)(A.d.SECONDARY))
              }),
              w()(_()(e), '_hasDetailOpen', function () {
                return !e.props.match.isExact
              }),
              e
            )
          }
          return (
            b()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.analytics,
                    a = t.conversationIds,
                    r = t.fetchInboxHistory,
                    i = t.updateLastSeenEventId
                  return o.a.createElement(
                    ie.a,
                    {
                      backLocation: Object(me.a)(A.d.SECONDARY),
                      onBackClick: this._handleBackClick,
                      rightControl: Object(me.b)('/settings/direct_messages', !0),
                      screenType: 'secondaryRoot',
                      title: He,
                      withDetailOpen: this._hasDetailOpen(),
                    },
                    o.a.createElement(W.a, {
                      accessibilityTitle: He,
                      analytics: n,
                      conversationIds: a,
                      fetchInboxHistory: r,
                      inboxType: A.d.TERTIARY,
                      renderEmptyDMInbox: this._renderEmptyDMInbox,
                      renderStickyContent: function () {
                        return Object(me.c)(e.props.conversationIds)
                      },
                      updateLastSeenEventId: i,
                      virtualScrollerCacheKey: 'dmLowQualityUntrustedInbox',
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(o.a.Component)
      w()(Ve, 'contextType', le.a)
      var ze = Object(ae.a)(D({ inbox: A.d.TERTIARY })(Ve), { directMessages: z.a }),
        We = ['conversationId', 'inboxType']
      function Ge(e) {
        e.conversationId
        var t = e.inboxType,
          n = r()(e, We),
          a = e.location
        return t === A.d.TERTIARY || '/messages/requests/additional' === a.pathname
          ? o.a.createElement(ze, n)
          : t === A.d.SECONDARY || '/messages/requests' === a.pathname
          ? o.a.createElement(Ue, n)
          : o.a.createElement(ke, n)
      }
      var qe = ['conversationId', 'inboxType'],
        Qe = h(function (e) {
          e.conversationId
          var t = e.inboxType,
            n = r()(e, qe),
            a = e.location,
            i = o.a.useContext(s.a).featureSwitches
          return i.isTrue('dm_evolution_enabled') && i.isTrue('dm_evolution_inbox_initial_state_enabled')
            ? o.a.createElement(Ge, e)
            : t === A.d.TERTIARY || '/messages/requests/additional' === a.pathname
            ? o.a.createElement(ze, n)
            : t === A.d.SECONDARY || '/messages/requests' === a.pathname
            ? o.a.createElement(Ue, n)
            : o.a.createElement(ke, n)
        })
      t.default = Qe
    },
    lL5k: function (e, t, n) {
      'use strict'
      var a = /[|\\{}()[\]^$+*?.]/g
      e.exports = function (e) {
        if ('string' != typeof e) throw new TypeError('Expected a string')
        return e.replace(a, '\\$&')
      }
    },
    n0Rl: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return N
      })
      var a = n('ddV6'),
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
        g = (n('2G9S'), n('lTEL'), n('7x/C'), n('87if'), n('ZUdG'), n('kYxP'), n('ERkP')),
        b = n.n(g),
        y = n('pXBW'),
        _ = n('6/RC'),
        E = n('UIzd'),
        S = n.n(E),
        C = n('kGix')
      n.d(t, 'a', function () {
        return C.a
      })
      var k = n('fs1G'),
        I = n('0KEI'),
        w = n('lU4h'),
        x = n.n(w),
        R = n('21nk'),
        T = n.n(R),
        O = n('bCEw'),
        A = n.n(O),
        M = n('Ud88'),
        L = n.n(M),
        F = function (e) {
          return (0, e.render)({ fetchStatus: C.a.LOADING, data: null, error: null, retry: k.a })
        },
        P = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n() {
            var e
            o()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (e = t.call.apply(t, [this].concat(r))), v()(u()(e), 'state', { error: null }), e
          }
          return (
            l()(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    if (!(e instanceof y.a)) throw e
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
        })(b.a.Component),
        D = function (e) {
          var t = e.query,
            n = e.queryRef,
            a = e.render,
            r = T()(t, n)
          return a({ fetchStatus: C.a.LOADED, data: r, error: null, retry: k.a })
        },
        N = function (e, t) {
          if (_.canUseDOM)
            return function (n) {
              var a = n.fetchPolicy,
                i = void 0 === a ? 'store-or-network' : a,
                o = n.render,
                s = n.variables,
                l = A()(e),
                c = r()(l, 2),
                u = c[0],
                d = c[1],
                p = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
                m = x()(s),
                h = r()(m, 1)[0],
                f = b.a.useCallback(
                  function () {
                    d(h, { fetchPolicy: 'network-only' })
                  },
                  [d, h],
                )
              return (
                b.a.useLayoutEffect(
                  function () {
                    d(h, { fetchPolicy: i })
                  },
                  [i, d, h],
                ),
                u
                  ? b.a.createElement(
                      b.a.Suspense,
                      { fallback: b.a.createElement(F, { render: o }) },
                      b.a.createElement(
                        P,
                        { errorHandler: p(t.errorConfig.options || {}), key: u.fetchKey, retry: f },
                        function (t, n) {
                          return t
                            ? o({ fetchStatus: C.a.FAILED, error: t, data: null, retry: n })
                            : b.a.createElement(D, { query: e, queryRef: u, render: o })
                        },
                      ),
                    )
                  : null
              )
            }
          var n = new WeakMap()
          return function (a) {
            a.fetchPolicy
            var i = a.render,
              o = a.variables,
              s = L()(),
              l = Object(I.useCreateLocalApiErrorHandler)(t.errorConfig.context),
              c = x()(o),
              u = r()(c, 1)[0],
              d = n.get(s)
            if (d) return d
            var p = b.a.lazy(function () {
              return S()(s, e, u)
                .toPromise()
                .then(
                  function (e) {
                    return i({ fetchStatus: C.a.LOADED, data: e, error: null, retry: k.a })
                  },
                  function (e) {
                    return e instanceof y.a
                      ? (l(t.errorConfig.options || {})(e),
                        i({ fetchStatus: C.a.FAILED, data: null, error: e, retry: k.a }))
                      : b.a.createElement(function () {
                          throw e
                        })
                  },
                )
                .then(function (e) {
                  return { default: n.set(s, e).get.bind(n, s) }
                })
            })
            return b.a.createElement(b.a.Suspense, null, b.a.createElement(p, null))
          }
        }
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
    'p+r5': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      n('yiKp')
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
        E = n('38/B'),
        S = n('t62R'),
        C = n('/yvb'),
        k = n('piX5'),
        I = n('3XMw'),
        w = n.n(I),
        x = n('tI3i'),
        R = n.n(x),
        T = n('oQhu'),
        O = n('rHpw'),
        A = n('aITJ'),
        M = n('MWbm'),
        L = n('n5fo'),
        F = n('5emT'),
        P = n('Oib4'),
        D = n('WtWS'),
        N = n('ioan'),
        B = [
          'Icon',
          'accessibilityLabel',
          'calculateLength',
          'editable',
          'errorText',
          'helperText',
          'invalid',
          'label',
          'maxLength',
          'onBlur',
          'onChange',
          'onFocus',
          'onKeyDown',
          'onKeyPress',
          'onKeyUp',
          'onSubmitEditing',
          'showPasswordVisibilityIcon',
          'showValidationIcon',
          'style',
          'type',
          'validLength',
        ],
        j = function (e) {
          return e.length
        },
        U = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : j
          return t(e)
        },
        H = w.a.de540c32,
        K = w.a.b4abfdb3,
        V = (function (e) {
          h()(n, e)
          var t = v()(n)
          function n(e) {
            var a
            l()(this, n),
              (a = t.call(this, e)),
              b()(p()(a), '_blurOnBackspaceKeyUpForKaiOS', !1),
              b()(p()(a), '_isLabelLarge', function () {
                var e = a.state,
                  t = e.actualCount,
                  n = e.isFocused
                return !t && !n
              }),
              b()(
                p()(a),
                '_getTextInputStyle',
                Object(T.a)(function (e) {
                  return [z.root, !e && z.disabled]
                }),
              ),
              b()(p()(a), '_getTextInputType', function () {
                var e = a.props,
                  t = e.showPasswordVisibilityIcon,
                  n = e.type,
                  r = a.state.isPasswordRevealed
                return 'password' === n && t ? (r ? 'text' : 'password') : n
              }),
              b()(p()(a), '_calculateLength', function (e) {
                return U(e, a.props.calculateLength)
              }),
              b()(p()(a), '_shouldRenderDisplayCount', function () {
                var e = a.state.isFocused,
                  t = a._isFormInvalid()
                return Boolean((e || t) && a._getMaxDisplayCount())
              }),
              b()(p()(a), '_isInvalidNumber', function () {
                var e,
                  t,
                  n,
                  r,
                  i,
                  o = a.props.type,
                  s =
                    null === (e = a._textInput) || void 0 === e || null === (t = e.textInputNode) || void 0 === t
                      ? void 0
                      : t.value,
                  l =
                    null === (n = a._textInput) ||
                    void 0 === n ||
                    null === (r = n.textInputNode) ||
                    void 0 === r ||
                    null === (i = r.validity) ||
                    void 0 === i
                      ? void 0
                      : i.badInput
                return 'number' === o && '' === s && !0 === l
              }),
              b()(p()(a), '_getActualCount', function (e) {
                var t = e.length
                return a._isInvalidNumber() && (t = 1), t
              }),
              b()(p()(a), '_handleBlur', function (e) {
                var t = a.props.onBlur,
                  n = e.currentTarget.value,
                  r = a._calculateLength(n),
                  i = a._getActualCount(n)
                a.setState({ isFocused: !1, displayCount: r, actualCount: i }), t && t(e)
              }),
              b()(p()(a), '_handleChange', function (e) {
                var t = a.props.onChange,
                  n = a.state.previousValue,
                  r = e.currentTarget.value,
                  i = a._calculateLength(r),
                  o = a._getActualCount(r),
                  s = a._getAdjustedMaxLength()
                void 0 !== s && r.length > s && n.length < r.length
                  ? (e.currentTarget.value = n)
                  : (a.setState({
                      isFocused: !0,
                      displayCount: i,
                      actualCount: o,
                      previousValue: e.currentTarget.value,
                    }),
                    t && t(e))
              }),
              b()(p()(a), '_handleFocus', function (e) {
                var t = a.props.onFocus
                a.setState({ isFocused: !0 }), t && t(e)
              }),
              b()(p()(a), '_handleKeyPress', function (e) {
                var t = a.props,
                  n = t.multiline,
                  r = t.onKeyPress,
                  i = t.onSubmitEditing
                r && r(e),
                  e.isDefaultPrevented() || 'Enter' !== e.key || e.shiftKey || n || !i || (e.preventDefault(), i(e))
              }),
              b()(p()(a), '_handleKeyDown', function (e) {
                var t = a.props.onKeyDown,
                  n = 0 === a.state.displayCount
                A.b.isKaiOS() && 'Backspace' === e.key && n ? (a._blurOnBackspaceKeyUpForKaiOS = n) : t && t(e)
              }),
              b()(p()(a), '_handleKeyUp', function (e) {
                var t = a.props.onKeyUp
                A.b.isKaiOS() &&
                  'Backspace' === e.key &&
                  a._blurOnBackspaceKeyUpForKaiOS &&
                  (e.preventDefault(), a.blur()),
                  t && t(e)
              }),
              b()(p()(a), '_handlePasswordVisibilityClick', function (e) {
                a.setState(function (e) {
                  return { isPasswordRevealed: !e.isPasswordRevealed }
                })
              }),
              b()(p()(a), '_setTextInputRef', function (e) {
                a._textInput = e
              }),
              b()(p()(a), '_checkComponentPropsUsageCorrectness', function (e) {
                var t = e.defaultValue,
                  n = e.maxLength,
                  a = e.onChange,
                  r = e.validLength,
                  i = !!a,
                  o = 'string' == typeof e.value,
                  s = 'string' == typeof t
                R()(
                  !(!s && o && !i),
                  'A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined.',
                ),
                  R()(!(n && r && r > n), 'Max length should be equal or greater than valid length.'),
                  R()(
                    !((void 0 !== n && n <= 0) || (void 0 !== r && r <= 0)),
                    'Set editable to false instead of limiting the valid character count to 0.',
                  )
              }),
              b()(p()(a), '_exceedsValidLength', function (e) {
                var t = a._getMaxDisplayCount()
                return !!t && e > t
              }),
              b()(p()(a), '_getMaxDisplayCount', function () {
                return a.props.validLength || a.props.maxLength
              }),
              b()(p()(a), '_getAdjustedMaxLength', function () {
                var e = a.props.maxLength,
                  t = a.getValue(),
                  n = a._calculateLength(t)
                return e ? e + t.length - n : void 0
              }),
              a._checkComponentPropsUsageCorrectness(e)
            var r = e.defaultValue,
              i = e.value || r || ''
            return (
              (a.state = {
                displayCount: a._calculateLength(i),
                actualCount: j(i),
                isFocused: !1,
                isPasswordRevealed: !1,
                previousValue: i,
              }),
              a
            )
          }
          return (
            u()(
              n,
              [
                {
                  key: 'componentDidUpdate',
                  value: function (e) {
                    var t = this.props,
                      n = t.maxLength,
                      a = t.onChange,
                      r = t.validLength,
                      i = t.value,
                      o = e.maxLength,
                      s = e.onChange,
                      l = e.validLength,
                      c = e.value
                    ;(l === r && n === o && !!a === !!s && ('string' == typeof i) === ('string' == typeof c)) ||
                      this._checkComponentPropsUsageCorrectness(this.props)
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.accessibilityLabel,
                      n = e.editable,
                      a = e.errorText,
                      r = e.helperText,
                      i = e.style,
                      o = this.state.isFocused,
                      s = this._isFormInvalid()
                    return _.a.createElement(
                      M.a,
                      { style: [W.root, i] },
                      _.a.createElement(
                        M.a,
                        {
                          accessibilityLabel: t,
                          accessibilityRole: 'label',
                          style: [
                            k.a.border,
                            W.textInputFormStyle,
                            s && k.a.invalidBorderColor,
                            o && s && k.a.focusedBorderInvalid,
                            o && !s && k.a.focusedBorderValid,
                            !n && k.a.disabled,
                          ],
                        },
                        _.a.createElement(
                          M.a,
                          { style: W.textInputFormWrapper },
                          _.a.createElement(
                            M.a,
                            { style: W.textInputHeader },
                            this._renderLabel(),
                            this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null,
                          ),
                          this._renderTextInput(),
                        ),
                      ),
                      _.a.createElement(
                        M.a,
                        { style: [W.sidePadding, W.underTextInputForm] },
                        _.a.createElement(
                          M.a,
                          { style: W.subtextWrapper },
                          r ? this._renderHelperText() : null,
                          s && a ? this._renderErrorText() : null,
                        ),
                      ),
                    )
                  },
                },
                {
                  key: '_renderLabel',
                  value: function () {
                    var e = this.props.label,
                      t = this.state.isFocused ? 'primary' : 'gray700',
                      n = this._isFormInvalid() ? 'red500' : t,
                      a = this._isLabelLarge()
                    return _.a.createElement(
                      S.b,
                      {
                        color: a ? 'gray700' : n,
                        numberOfLines: 1,
                        size: a ? 'headline1' : 'subtext2',
                        style: [
                          W.textInputHeaderItem,
                          a && W.placeholderText,
                          !E.a.reducedMotionEnabled && W.transition,
                        ],
                      },
                      e,
                    )
                  },
                },
                {
                  key: '_renderTextInput',
                  value: function () {
                    var e = this.props,
                      t = e.Icon,
                      n = (e.accessibilityLabel, e.calculateLength, e.editable),
                      a =
                        (e.errorText,
                        e.helperText,
                        e.invalid,
                        e.label,
                        e.maxLength,
                        e.onBlur,
                        e.onChange,
                        e.onFocus,
                        e.onKeyDown,
                        e.onKeyPress,
                        e.onKeyUp,
                        e.onSubmitEditing,
                        e.showPasswordVisibilityIcon,
                        e.showValidationIcon),
                      i = (e.style, e.type, e.validLength, o()(e, B))
                    return _.a.createElement(
                      M.a,
                      { style: z.container },
                      t && !this._isLabelLarge() ? this._renderIcon() : null,
                      _.a.createElement(
                        S.b,
                        { size: 'headline1', style: z.wrapper },
                        _.a.createElement(
                          N.a,
                          r()({}, i, {
                            editable: n,
                            maxLength: this._getAdjustedMaxLength(),
                            onBlur: this._handleBlur,
                            onChange: this._handleChange,
                            onFocus: this._handleFocus,
                            onKeyDown: this._handleKeyDown,
                            onKeyPress: this._handleKeyPress,
                            onKeyUp: this._handleKeyUp,
                            ref: this._setTextInputRef,
                            style: this._getTextInputStyle(n),
                            type: this._getTextInputType(),
                          }),
                        ),
                      ),
                      a && !this._isLabelLarge() ? this._renderValidationIcon() : null,
                      this._renderPasswordVisibilityIcon(),
                    )
                  },
                },
                {
                  key: '_renderPasswordVisibilityIcon',
                  value: function () {
                    var e = this.props,
                      t = e.showPasswordVisibilityIcon,
                      n = e.type,
                      a = this.state.isPasswordRevealed
                    return 'password' === n && t
                      ? _.a.createElement(
                          M.a,
                          { style: W.passwordVisibilityIconContainer },
                          _.a.createElement(C.a, {
                            accessibilityLabel: a ? K : H,
                            focusable: !0,
                            hoverLabel: { label: a ? K : H },
                            icon: a ? _.a.createElement(L.a, null) : _.a.createElement(F.a, null),
                            onPress: this._handlePasswordVisibilityClick,
                            size: 'smallCompact',
                            type: 'primaryText',
                          }),
                        )
                      : null
                  },
                },
                {
                  key: '_renderHelperText',
                  value: function () {
                    return _.a.createElement(
                      M.a,
                      { accessibilityLiveRegion: 'polite' },
                      _.a.createElement(
                        S.b,
                        { color: 'gray700', size: 'subtext2', style: W.subtext },
                        this.props.helperText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderErrorText',
                  value: function () {
                    return _.a.createElement(
                      M.a,
                      { accessibilityLiveRegion: 'assertive' },
                      _.a.createElement(
                        S.b,
                        { color: 'red500', size: 'subtext2', style: W.subtext },
                        this.props.errorText,
                      ),
                    )
                  },
                },
                {
                  key: '_renderDisplayCount',
                  value: function () {
                    var e = this.state.displayCount,
                      t = this._getMaxDisplayCount(),
                      n = this._exceedsValidLength(e),
                      a = t && w.a.ia24dc8c(t),
                      r = w.a.ia24dc8c(e)
                    return _.a.createElement(
                      M.a,
                      { accessibilityLiveRegion: 'polite', style: [W.textInputHeaderItem, W.displayCount] },
                      _.a.createElement(
                        S.b,
                        { color: n ? 'red500' : 'gray700', size: 'subtext2' },
                        a ? ''.concat(r, ' / ').concat(a) : '',
                      ),
                    )
                  },
                },
                {
                  key: '_renderIcon',
                  value: function () {
                    var e = this.props.Icon,
                      t = this.state.isFocused,
                      n = [W.icon, t && W.focusedIcon]
                    return e && _.a.createElement(e, { style: n })
                  },
                },
                {
                  key: '_renderValidationIcon',
                  value: function () {
                    return this._isFormInvalid()
                      ? _.a.createElement(P.a, { style: [W.validationIcon, k.a.invalidColor] })
                      : _.a.createElement(D.a, { style: [W.validationIcon, k.a.validColor] })
                  },
                },
                {
                  key: '_isFormInvalid',
                  value: function () {
                    var e = this.state.displayCount
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                  },
                },
                {
                  key: 'blur',
                  value: function () {
                    this._textInput && this._textInput.blur()
                  },
                },
                {
                  key: 'getValue',
                  value: function () {
                    return (this._textInput && this._textInput.getValue()) || ''
                  },
                },
                {
                  key: 'focus',
                  value: function () {
                    this._textInput && this._textInput.focus()
                  },
                },
                {
                  key: 'isValidLength',
                  value: function () {
                    var e = this.getValue(),
                      t = this._calculateLength(e)
                    return !this._exceedsValidLength(t)
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.calculateLength,
                      a = e.value,
                      r = 'string' == typeof a ? U(a, n) : 0
                    return 'string' == typeof a && r !== t.displayCount
                      ? { displayCount: r, actualCount: a.length }
                      : null
                  },
                },
              ],
            ),
            n
          )
        })(_.a.Component)
      b()(V, 'defaultProps', { autoComplete: 'on', autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 }),
        (V.propTypes = {})
      var z = O.a.create(function (e) {
          return {
            container: {
              flexDirection: 'row',
              flexGrow: 1,
              flexShrink: 1,
              overflow: 'hidden',
              paddingBottom: e.spaces.space8,
              paddingHorizontal: e.spaces.space8,
              paddingTop: e.spaces.space12,
              marginTop: e.spaces.space16,
            },
            root: {
              backgroundColor: 'transparent',
              borderRadius: e.borderRadii.none,
              borderWidth: e.borderWidths.none,
              boxSizing: 'border-box',
              color: 'inherit',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              textAlign: 'inherit',
              outlineStyle: 'none',
              padding: 0,
            },
            wrapper: { alignItems: 'center', display: 'flex', fontSize: e.fontSizes.headline2, width: '100%' },
            disabled: { color: e.colors.gray700 },
          }
        }),
        W = O.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            textInputFormStyle: { flexDirection: 'row' },
            textInputFormWrapper: { flexGrow: 1, flexShrink: 1 },
            textInputHeader: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              height: '100%',
              width: '100%',
            },
            textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: 'small' },
            placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: 'none' },
            displayCount: { flexGrow: 1, alignItems: 'flex-end' },
            sidePadding: { paddingHorizontal: e.spaces.space8 },
            underTextInputForm: { flexDirection: 'row' },
            subtextWrapper: {
              flexDirection: 'column',
              flex: 1,
              paddingRight: e.spaces.space20,
              paddingTop: e.spaces.space2,
            },
            subtext: { alignSelf: 'flex-start' },
            focusedIcon: { color: e.colors.primary },
            icon: { alignSelf: 'center', color: e.colors.gray700, paddingRight: e.spaces.space4 },
            validationIcon: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            transition: {
              transition:
                'transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
            passwordVisibilityIconContainer: { alignSelf: 'center', paddingLeft: e.spaces.space4 },
            passwordVisibilityIcon: { color: e.colors.gray700 },
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
                return Object(y.A)(e, y.j)
              },
            }
          })
          .propsFromActions(function () {
            return { addFlag: y.w }
          })
          .withAnalytics({ component: 'dm_education_flags_prompt' }),
        S = n('fs1G'),
        C = n('t62R'),
        k = n('feu+'),
        I = n('3XMw'),
        w = n.n(I),
        x = w.a.fd6150fc,
        R = v.a.createElement(
          w.a.I18NFormatMessage,
          { $i18n: 'iac7f92a' },
          v.a.createElement(C.b, { link: '/privacy' }, w.a.d42d239f),
        ),
        T = w.a.j24c37b2,
        O = E(function (e) {
          var t = e.addFlag,
            n = e.analytics,
            a = e.shouldShowPrompt,
            r = v.a.useContext(b.a).featureSwitches
          if (!(a && r.isTrue('dm_education_flags_prompt'))) return !1
          return (
            n.scribeAction('impression'),
            v.a.createElement(k.a, {
              actionLabel: T,
              headline: x,
              onAction: function () {
                n.scribeAction('click'), t(y.j)
              },
              onClose: S.a,
              subtext: R,
              withCloseButton: !1,
            })
          )
        }),
        A = n('MMRb'),
        M = n('kGix'),
        L = n('0KEI'),
        F = Object(_.a)()
          .propsFromState(function () {
            return {
              hasConversations: A.selectHasConversations,
              fetchStatus: A.selectFetchStatus,
              isLoadingTop: A.selectIsLoadingTop,
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
              fetchInbox: A.fetchInbox,
              fetchInboxIfNeeded: A.fetchInboxIfNeeded,
              fetchUpdates: A.fetchUpdatesIfNeeded,
            }
          }),
        P = n('yiKp'),
        D = n.n(P),
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
          n('6U7i'),
          n('KqXw'),
          n('MvUL'),
          n('hBvt'),
          n('lTEL'),
          n('kYxP'),
          n('HPNB')),
        U = n('EbOo'),
        H = n('tZH3'),
        K = n('1YZw'),
        V = n('hqKg'),
        z = n('AQOc'),
        W = n('G6rE'),
        G = n('oEGd'),
        q = function (e, t) {
          return t.conversationId
        },
        Q = Object(V.createSelector)(
          q,
          function (e, t) {
            return A.selectConversation(e, q(0, t))
          },
          A.selectEntries,
          W.e.selectAll,
          function (e, t) {
            return !A.selectConversationIsRead(e, q(0, t))
          },
          function (e, t) {
            var n = q(0, t)
            return Object(A.selectInboxTypeByConversation)(e, n)
          },
          function (e, t) {
            return Object(y.A)(e, y.r)
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
          addFlag: y.w,
          addRecentSearch: A.addRecentSearches,
          addToast: K.b,
          block: W.e.block,
          createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_INBOX_ITEM',
          ),
          disableNotifications: A.disableNotifications,
          enableNotifications: A.enableNotifications,
          leaveConversation: A.leaveConversation,
          muteDMUser: A.muteDMUser,
          unmuteDMUser: A.unmuteDMUser,
          unblock: W.e.unblock,
        },
        X = Object(G.g)(Q, Y),
        J = n('aA19'),
        Z = n('OhSZ'),
        $ = n('V/6K'),
        ee = n('g54k'),
        te = function (e, t) {
          return t.entry
        },
        ne = Object(_.a)()
          .propsFromState(function () {
            return { users: Object(V.createSelector)(W.e.selectAll, te, ee.b) }
          })
          .adjustStateProps(function (e) {
            var t = e.users
            return D()({}, t)
          }),
        ae = n('zQEV'),
        re = ne(function (e) {
          var t = e.entry,
            n = e.entryType,
            a = e.perspective,
            r = e.unread,
            i = void 0 !== r && r,
            o = e.users,
            s = Object(ae.a)(t, n, a, o),
            l = i ? 'medium' : 'normal',
            c = i ? 'text' : 'gray700'
          return v.a.createElement(C.b, { color: c, weight: l }, s)
        }),
        ie = Object(V.createSelector)(
          function (e, t) {
            return W.e.select(e, t.senderId)
          },
          function (e, t) {
            return t.recipientId ? W.e.select(e, t.recipientId) : void 0
          },
          function (e, t) {
            return { user: e, recipient: t }
          },
        ),
        oe = Object(G.c)(ie),
        se = n('X/yg'),
        le = n('cTG8'),
        ce = function (e) {
          return v.a.createElement(w.a.I18NFormatMessage, { $i18n: 'b3a2b11c' }, v.a.createElement(C.b, null, e))
        },
        ue = w.a.dedfd265
      var de = w.a.a876e58b,
        pe = w.a.bf584cd1,
        me = w.a.a9cc8cfd,
        he = w.a.e20b65b0,
        fe = w.a.e5bfe07d,
        ve = w.a.b1a614fe,
        ge = oe(function (e) {
          var t = e.entry,
            n = e.perspective,
            a = e.isGroupDM,
            r = e.unread,
            i = void 0 !== r && r,
            o = e.user,
            s = void 0 === o ? {} : o,
            l = e.recipient,
            c = void 0 === l ? {} : l,
            u = v.a.useContext(b.a).featureSwitches,
            d = t && t.message_data
          if (!d) return null
          var p = d.attachment,
            m = p && !!(p.video || p.photo || p.animated_gif || p.tweet || p.fleet || p.sticker || p.card),
            h = n === s.id_str,
            f = !(!m || !h) || !(!a || h),
            g = s.name,
            y = c.name,
            _ = i ? 'medium' : 'normal',
            E = i ? 'text' : 'gray700',
            S = [
              f && v.a.createElement(C.b, { key: 'senderName' }, ce(g), ' '),
              d &&
                d.text &&
                v.a.createElement(le.a, {
                  displayTextRange: [0, d.text.length],
                  entities: d.entities,
                  key: 'message',
                  text: d.text,
                  withMediaLinks: !0,
                }),
            ]
          return (
            p &&
              (p.tweet
                ? (S = f
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, w.a.d5b762c8)
                          : v.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'dfd2b3b9' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(h, g)
                    : ve)
                : p.fleet
                ? (S = (function (e, t, n) {
                    return e
                      ? v.a.createElement(
                          w.a.I18NFormatMessage,
                          { $i18n: 'i005f1fd' },
                          v.a.createElement(C.b, null, t),
                          v.a.createElement(C.b, null, n || ''),
                        )
                      : v.a.createElement(
                          w.a.I18NFormatMessage,
                          { $i18n: 'b35cee40' },
                          v.a.createElement(C.b, null, n || ''),
                        )
                  })(h, y, d.text))
                : p.video
                ? (S = Object(se.k)(p, u)
                    ? f
                      ? (function (e, t) {
                          return e
                            ? v.a.createElement(C.b, null, w.a.h7033cac)
                            : v.a.createElement(
                                w.a.I18NFormatMessage,
                                { $i18n: 'be5a9616' },
                                v.a.createElement(C.b, null, t),
                              )
                        })(h, g)
                      : ue
                    : f
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, w.a.j7d81019)
                          : v.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'eee2f120' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(h, g)
                    : de)
                : p.photo
                ? (S = f
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, w.a.f80629ba)
                          : v.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'c1e1f848' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(h, g)
                    : pe)
                : p.animated_gif
                ? (S = f
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, w.a.eb3d722e)
                          : v.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'dc4b75a1' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(h, g)
                    : me)
                : p.sticker
                ? (S = f
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, w.a.d30c2d4f)
                          : v.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'c7e2464e' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(h, g)
                    : he)
                : p.card &&
                  (S = f
                    ? (function (e, t) {
                        return e
                          ? v.a.createElement(C.b, null, w.a.db53c017)
                          : v.a.createElement(
                              w.a.I18NFormatMessage,
                              { $i18n: 'hcbbbb34' },
                              v.a.createElement(C.b, null, t),
                            )
                      })(h, g)
                    : fe)),
            v.a.createElement(C.b, { color: E, numberOfLines: 1, weight: _ }, S)
          )
        }),
        be = n('uKEd'),
        ye = function (e, t) {
          return t.senderId ? W.e.select(e, t.senderId) : void 0
        },
        _e = function (e, t) {
          return Object(be.n)(e, t.reactionEntry.message_id)
        },
        Ee = function (e, t) {
          var n = _e(e, t)
          return n && n.message_data && W.e.select(e, n.message_data.sender_id)
        },
        Se = Object(G.e)(function () {
          return Object(V.createSelector)(ye, _e, Ee, function (e, t, n) {
            return { reactedMessageEntry: t, reactingUser: e, messageUser: n }
          })
        }, {}),
        Ce = n('33Kz'),
        ke = Se(function (e) {
          var t,
            n = e.isGroupDM,
            a = e.messageUser,
            r = e.perspective,
            i = e.reactedMessageEntry,
            o = e.reactingUser,
            s = e.reactionEntry,
            l = e.unread,
            c = void 0 !== l && l,
            u = v.a.useContext(b.a).featureSwitches,
            d = i && i.message_data,
            p = d && d.attachment,
            m = d && d.text,
            h = a && a.screen_name,
            f = r === (o && o.id_str),
            g = o && o.name,
            y = Object(Ce.b)(s.reaction_key || '', u),
            _ = c ? 'medium' : 'normal',
            E = c ? 'text' : 'gray700'
          return (
            (t =
              p && p.tweet
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'c4202784' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'b493a890' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(f, g, h, y)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'ca684bf5' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'h5797be5' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(f, g, y)
                : p && p.video
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'd1f8bdd9' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'd764af97' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(f, g, h, y)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'ab1cdfe2' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'f0cf1699' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(f, g, y)
                : p && p.photo
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'hec0fd4d' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'j55320de' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(f, g, h, y)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'jf27606a' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'cd110359' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(f, g, y)
                : p && p.animated_gif
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'e70dcc35' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'g1bf440b' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(f, g, h, y)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'b2da1bf8' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'g84c0421' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(f, g, y)
                : p && p.card
                ? n
                  ? (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'cd2e7c18' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'aee9e7fa' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(f, g, h, y)
                  : (function (e, t, n) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'f9fb1cf6' },
                            v.a.createElement(C.b, null, n),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'f2bf910e' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                          )
                    })(f, g, y)
                : m
                ? n
                  ? (function (e, t, n, a, r) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'i6cec545' },
                            v.a.createElement(C.b, null, a),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, r),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'd6998baa' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, a),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, r),
                          )
                    })(f, g, y, h, m)
                  : (function (e, t, n, a) {
                      return e
                        ? v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'cec676f3' },
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                        : v.a.createElement(
                            w.a.I18NFormatMessage,
                            { $i18n: 'a2706f9a' },
                            v.a.createElement(C.b, null, t),
                            v.a.createElement(C.b, null, n),
                            v.a.createElement(C.b, null, a),
                          )
                    })(f, g, y, m)
                : (function (e, t, n) {
                    return e
                      ? v.a.createElement(w.a.I18NFormatMessage, { $i18n: 'd6b15bbf' }, v.a.createElement(C.b, null, n))
                      : v.a.createElement(
                          w.a.I18NFormatMessage,
                          { $i18n: 'ac0d4bc7' },
                          v.a.createElement(C.b, null, t),
                          v.a.createElement(C.b, null, n),
                        )
                  })(f, g, y)),
            v.a.createElement(C.b, { color: E, numberOfLines: 1, weight: _ }, t)
          )
        }),
        Ie = n('H4nC'),
        we = n('b9JY'),
        xe = w.a.fb3ccb55,
        Re = function (e) {
          var t = e.conversationType,
            n = e.entry,
            a = e.perspective,
            r = e.unread,
            i = void 0 !== r && r
          if (n.marked_as_spam) {
            var o = i ? 'medium' : 'normal',
              s = i ? 'text' : 'gray700'
            return v.a.createElement(C.b, { color: s, numberOfLines: 1, weight: o }, xe)
          }
          if (Object(we.b)(n)) {
            var l = n.message_data,
              c = (l = void 0 === l ? {} : l).recipient_id,
              u = l.sender_id
            return v.a.createElement(ge, {
              entry: n,
              isGroupDM: t === A.CONVERSATION_TYPE.GROUP,
              perspective: a,
              recipientId: c,
              senderId: u,
              unread: i,
            })
          }
          return Object(we.c)(n)
            ? v.a.createElement(ke, {
                isGroupDM: t === A.CONVERSATION_TYPE.GROUP,
                perspective: a,
                reactionEntry: n,
                senderId: n.sender_id,
                unread: i,
              })
            : Object(we.a)(n)
            ? v.a.createElement(re, { entry: n, entryType: n.type, perspective: a, unread: i })
            : Object(we.d)(n)
            ? v.a.createElement(Ie.a, { entry: n, isCompact: !0, unread: i })
            : null
        },
        Te = n('Myq3'),
        Oe = n('3wZR'),
        Ae = n('XnpN'),
        Me = 'conversation',
        Le = n('u0B7'),
        Fe = n('MWbm'),
        Pe = n('Irs7'),
        De = n('eb3s'),
        Ne = n('ZToW'),
        Be = n('cHvH'),
        je = n('lHOd'),
        Ue = n('kb9v'),
        He = n('IG7M'),
        Ke = n('mjJ+'),
        Ve = n('Znyr'),
        ze = n('0PHd'),
        We = n('yrzJ'),
        Ge = n('Xrkv'),
        qe = n('efqG'),
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
            D()(
              D()({}, e),
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
            D()(
              D()({}, e),
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
        mt = n('IpT4'),
        ht = n('5oT/'),
        ft = w.a.d88d0790,
        vt = w.a.ad63377d,
        gt = {
          confirmButtonLabel: w.a.bb1d57b6,
          actionTextLeave: w.a.g9074da4,
          header: w.a.gdf4b79f,
          text: w.a.h09b49f7,
        },
        bt = w.a.e1c9ec9b,
        yt = w.a.i6b19b07,
        _t = w.a.e3cfff7c,
        Et = w.a.f398722d,
        St = w.a.a8ed0eca,
        Ct = w.a.jac4eb1e,
        kt = w.a.bdd91963,
        It = w.a.a30a206d,
        wt = w.a.ib4b1b85,
        xt = w.a.bd3ca2ee,
        Rt = function (e) {
          var t
          return Boolean(
            null == e || null === (t = e.labels) || void 0 === t
              ? void 0
              : t.find(function (e) {
                  return e.label_type === tt.a.PINNED
                }),
          )
        },
        Tt = { component: 'low_quality_timeline' },
        Ot = function (e) {
          var t = e.children
          return v.a.createElement(Fe.a, { style: Nt.socialProofContainer }, t)
        },
        At = (function (e) {
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
                return v.a.createElement(De.a, {
                  confirmButtonLabel: gt.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: gt.header,
                  onCancel: e._handleHideConfirmation,
                  onConfirm: e._deleteConversation(t),
                  text: gt.text,
                })
              }),
              h()(l()(e), '_renderMenu', function (t) {
                var n = t.isFocused,
                  a = t.isFocusedWithin,
                  r = t.isHovered,
                  i = e.state,
                  o = i.showActionMenu,
                  s = i.showPinnedAnnouncement,
                  l = e.props,
                  c = l.conversation,
                  u = l.position,
                  d = Rt(c),
                  p = function () {
                    e.setState({ showPinnedAnnouncement: !1 })
                  },
                  m = function () {
                    e.setState({ showActionMenu: !0 })
                  },
                  h = e._isPinnedEducationEnabled && s && 1 === u && !d,
                  f = !Ne.a.isEnabled || n || a || r || o || h
                return v.a.createElement($.a.Consumer, null, function (t) {
                  var n = t.isDrawer
                  return v.a.createElement(Be.a, null, function (t) {
                    var a = t.windowWidth,
                      r = j.a.isTwoColumnLayout(a)
                    return v.a.createElement(je.a.Consumer, null, function (t) {
                      return v.a.createElement(
                        Fe.a,
                        { style: Nt.menuContainer },
                        v.a.createElement(
                          Ue.a,
                          {
                            actionPrimary: { text: It, onClick: p },
                            headline: wt,
                            onDismiss: p,
                            shouldDisplay: h && !n,
                            text: xt({ count: e._count }),
                            withMask: !r,
                          },
                          r
                            ? v.a.createElement(He.a, {
                                onClick: m,
                                renderActionMenu: e._renderActionMenu,
                                style: f ? Nt.menu : Nt.hiddenMenu,
                              })
                            : null,
                        ),
                        r
                          ? null
                          : v.a.createElement(He.a, {
                              onClick: m,
                              renderActionMenu: e._renderActionMenu,
                              style: f ? Nt.menu : Nt.hiddenMenu,
                            }),
                      )
                    })
                  })
                })
              }),
              h()(l()(e), '_renderActionMenu', function (t) {
                var n = e.props,
                  a = n.conversation,
                  r = n.conversationId,
                  i = e.context.history,
                  o = Rt(a),
                  s = null == a ? void 0 : a.notifications_disabled,
                  l = []
                if (a) {
                  var c = {
                    Icon: o ? st : lt.a,
                    onClick: function () {
                      return e._handleTogglePinState(o)
                    },
                    text: o ? kt : bt,
                    withBottomBorder: !0,
                  }
                  l.push(c)
                  var u = {
                      Icon: ut,
                      isEmphasized: !0,
                      onClick: e._handleDeleteMenuItemClick,
                      text: vt,
                      withBottomBorder: !0,
                    },
                    d = {
                      Icon: dt.a,
                      onClick: function () {
                        return e._handleReportMenuItemClick(i)()
                      },
                      text: yt,
                      withBottomBorder: !0,
                    },
                    p = {
                      Icon: s ? pt.a : mt.a,
                      onClick: function () {
                        return e._handleSnoozeMenuItemClick(r)
                      },
                      text: s ? St : _t,
                      withBottomBorder: !0,
                    }
                  l.push(d, p, u)
                }
                return v.a.createElement(Ke.a, {
                  items: l,
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
                    ? v.a.createElement(Ve.a, {
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
                var n = Object(Oe.b)(t.icon)
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
                      })
                    return v.a.createElement(
                      Ot,
                      null,
                      v.a.createElement(ze.a, {
                        displayFacepileInline: !0,
                        knownFollowersAvatarUrls: r,
                        knownFollowersCount: a.total,
                        knownFollowersNames: i,
                        textStyle: e._isVDLEnabled && Nt.socialProofText,
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
                  i = n ? Object(Ae.a)(n, a) : [],
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
                  if (n.type === A.CONVERSATION_TYPE.ONE_TO_ONE) {
                    var u = i.map(function (e) {
                        return e.user
                      }),
                      d = B()(u, 1)[0]
                    return v.a.createElement(We.a, { color: 'gray700', screenName: d.screen_name })
                  }
                  var p = Object(Ge.a)(c, !0)
                  return v.a.createElement(C.b, { color: 'gray700', numberOfLines: 2 }, p)
                }
              }),
              h()(l()(e), '_renderX', function () {
                var t = e.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = e.context.loggedInUserId,
                  i = Object(se.i)(n, r),
                  o = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP
                return v.a.createElement(je.a.Consumer, null, function (t) {
                  return v.a.createElement(
                    qe.a,
                    {
                      renderContent: function (n, r) {
                        return v.a.createElement(H.a, {
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
                      accessibilityLabel: ft,
                      icon: v.a.createElement(ht.a, { style: e._isVDLEnabled ? Nt.xIcon : void 0 }),
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
                  s({ conversationId: t }).then(a({ ariaOnly: !0, text: Ct }))
                else {
                  var l = null != i && i.participants ? Object.keys(i.participants).length : 0,
                    c = {
                      conversation_type:
                        (null == i ? void 0 : i.type) === A.CONVERSATION_TYPE.GROUP ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: l,
                      entry_point: nt.b.THREE_DOT_MENU,
                    }
                  r.scribe({ element: 'thread', action: 'mute_dm_thread_forever', data: c }),
                    o({ conversationId: t }).then(a({ ariaOnly: !0, text: Et }))
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
                      (null == r ? void 0 : r.type) === A.CONVERSATION_TYPE.GROUP ? nt.h.GROUP : nt.h.ONE_TO_ONE,
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
                    null != a && a.notifications_disabled ? v.a.createElement(mt.a, { style: o }) : null,
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
                    u = Rt(r),
                    d = null != r && r.participants ? Object.keys(r.participants).length : 0,
                    p = r && r.type === A.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                    m = {
                      conversation_type:
                        (null == r ? void 0 : r.type) === A.CONVERSATION_TYPE.GROUP ? nt.h.GROUP : nt.h.ONE_TO_ONE,
                      conversation_id: t,
                      conversation_participant_count: d,
                      position: l,
                      inbox_type: Object(se.h)(o),
                      entry_point: o === nt.c.PRIMARY ? nt.b.THREE_DOT_MENU : nt.b.CELL_X_BUTTON,
                    }
                  e._handleHideConfirmation(),
                    a.scribe({ element: 'thread', action: p, data: m }),
                    u && e._handleTogglePinState(u),
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
                  }, o(U.a)),
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
                  d = (null == i ? void 0 : i.type) === A.CONVERSATION_TYPE.GROUP
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
                  n.scribe(D()(D()({}, Tt), {}, { element: 'accessory_trashcan', action: 'click' })),
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
                    k = C.showConfirmation,
                    I = C.showPinnedAnnouncement,
                    w = t.showConfirmation,
                    x = t.showPinnedAnnouncement
                  return (
                    a !== d ||
                    r !== p ||
                    i !== m ||
                    o !== h ||
                    s !== f ||
                    c !== g ||
                    _ !== S ||
                    k !== w ||
                    y !== E ||
                    l !== v ||
                    I !== x
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
                    f = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP,
                    g = this._isVDLEnabled && f
                  if (!n) return null
                  var b = !!n.convo_label,
                    y = !n.trusted && !b,
                    _ = this._renderConversationEndCell(m),
                    E = c && !r,
                    S = 'normal',
                    C = 'bold'
                  return (
                    this._isVDLEnabled && !u && ((S = 'gray900'), (C = 'medium')),
                    !n || (!c && n.isSearchResultOnly)
                      ? null
                      : v.a.createElement(
                          v.a.Fragment,
                          null,
                          d ? this._renderConfirmationSheet() : null,
                          v.a.createElement(Xe.a, null, function (t) {
                            var o = t.isFocused,
                              d = t.isFocusedWithin,
                              p = t.isHovered
                            return v.a.createElement(
                              Je.a,
                              {
                                accessibilityRole: 'none',
                                accessibilityState: { selected: a },
                                link: {
                                  pathname: null == i ? void 0 : i.pathname,
                                  anchorless: !0,
                                  state: D()(D()({}, null == i ? void 0 : i.state), {}, { position: l }),
                                },
                                onPress: e._handleOnClick,
                                style: h,
                                testID: Me,
                              },
                              v.a.createElement(
                                Ze.a,
                                {
                                  avatarCell: v.a.createElement(J.a, { conversation: n, perspective: s, withBadge: g }),
                                  avatarSize: 'xxLarge',
                                },
                                v.a.createElement(
                                  Fe.a,
                                  { style: Nt.bodyColumn },
                                  v.a.createElement(
                                    Fe.a,
                                    { style: Nt.titleContainer },
                                    v.a.createElement(Z.b, {
                                      conversation: n,
                                      isConversationSearchTitle: !!E,
                                      isMessageSearchTitle: !!r,
                                      perspective: s,
                                      renderTimestamp: function () {
                                        return e._renderTimestamp(m)
                                      },
                                      textColor: S,
                                      titleWeight: C,
                                      withScreenName: !c && !r,
                                      withVDLRefresh: e._isVDLEnabled,
                                    }),
                                    v.a.createElement(
                                      Fe.a,
                                      { style: [Nt.snippet, !o && !d && !p && Nt.snippetPadding] },
                                      m && !E
                                        ? v.a.createElement(Re, {
                                            conversationType: n.type,
                                            entry: m,
                                            isMessageItem: r,
                                            perspective: s,
                                            unread: e._isVDLEnabled && u,
                                          })
                                        : E
                                        ? e._renderSearchConversationPreview()
                                        : null,
                                    ),
                                    b ? e._renderConversationLabel(n) : null,
                                    y ? e._renderSocialProof(n) : null,
                                  ),
                                  _ ? v.a.createElement(Fe.a, { style: Nt.endCell }, _) : null,
                                  e._renderConversationActions({ isFocused: o, isFocusedWithin: d, isHovered: p }),
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
        })(v.a.Component)
      h()(At, 'contextType', b.a),
        h()(At, 'defaultProps', {
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
        Pt,
        Dt,
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
            snippetPadding: {
              paddingRight: 'calc('.concat(e.spaces.space28, ' + ').concat(e.spaces.space1, ' * 0.75)'),
            },
            unread: { backgroundColor: e.colors.unreadCellBackground },
            socialProofContainer: { marginTop: e.spaces.space4 },
            socialProofText: { marginLeft: 0, fontWeight: e.fontWeights.medium },
            convoLabelIcon: { marginRight: e.spaces.space4 },
            endCell: { marginLeft: e.spaces.space16 },
          }
        }),
        Bt = Object(Pe.a)(X(At), { page: 'messages', section: 'inbox' }),
        jt =
          (n('jwue'),
          n('+oxZ'),
          n('JtPf'),
          n('87if'),
          Object(_.a)()
            .propsFromState(function () {
              return { pinnedConversationIds: A.selectPinnedConversationIds }
            })
            .propsFromActions(function () {
              return {
                createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                  'DM_PINNED_INBOX_CONTEXT',
                ),
              }
            })
            .withAnalytics({ page: 'messages', section: 'inbox' })),
        Ut = n('oUUt'),
        Ht = (n('uFXj'), w.a.b08821f3),
        Kt = w.a.e047b8fa,
        Vt = $e.a.create(function (e) {
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
        zt = function (e) {
          var t = Object(Pe.b)(),
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
            l = [Vt.root, i && Vt.labelHeader]
          return v.a.createElement(
            Fe.a,
            { style: l },
            v.a.createElement(
              Fe.a,
              { style: Vt.iconContainer },
              (s = r) ? v.a.createElement(s, { style: Vt.icon }) : null,
              v.a.createElement(
                C.b,
                { accessibilityLevel: 2, accessibilityRole: 'heading', size: 'headline1', weight: 'heavy' },
                a,
              ),
            ),
            o
              ? v.a.createElement(
                  Qe.a,
                  { accessibilityLabel: Ht, onPress: n, style: Vt.backButton, type: 'onMediaWhiteFilled' },
                  Kt,
                )
              : null,
          )
        },
        Wt = n('h3MB'),
        Gt = (n('enFi'), n('1IsZ'), n('IAdD'), n('xPna')),
        qt = function (e) {
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
            null != e && e.entries && (a = D()(D()({}, a), {}, { entries: null == e ? void 0 : e.entries })),
            Object(Gt.a)(a)
          )
        },
        Qt = n('VPAj'),
        Yt = n('7n04'),
        Xt = D()(
          D()({}, Yt.a),
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
        sn = w.a.cb367657,
        ln = w.a.ie9a7e48,
        cn = w.a.hd3927c6,
        un = w.a.f1ac0968,
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
        gn = w.a.e4b3f520,
        bn = w.a.ae4d666a,
        yn = function (e) {
          return e
        },
        _n = w.a.a219e217,
        En = w.a.d571e4f8,
        Sn = w.a.a551bf7d,
        Cn = w.a.d98e066b,
        kn = w.a.j302dba7,
        In = void 0 !== Ft ? Ft : (Ft = n('X8um')),
        wn = { context: 'DM_PINNED_INBOX' },
        xn = function (e) {
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
            S = Object(nn.a)(In, { label: tt.a.PINNED }).data,
            C = (null == S || null === (t = S.labeled_conversation_slice) || void 0 === t ? void 0 : t.items) || [],
            k = Object(Zt.b)(C, [Wt.a]).entities,
            I = v.a.useContext(b.a).featureSwitches.getValue('dm_conversation_labels_max_pinned_count'),
            w = v.a.useState(!1),
            x = B()(w, 2),
            R = x[0],
            T = x[1],
            O = v.a.useState(!1),
            M = B()(O, 2),
            L = M[0],
            F = M[1],
            P =
              ((a = S),
              (r = v.a.useRef()),
              v.a.useEffect(function () {
                r.current = a
              }),
              r.current)
          v.a.useEffect(
            function () {
              var e,
                t = (null == P || null === (e = P.labeled_conversation_slice) || void 0 === e ? void 0 : e.items) || [],
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
                  i(qt({ conversations: h()({}, e.rest_id, D()(D()({}, e), {}, { labels: n })) }))
                }),
                i(qt(k))
            },
            [S],
          )
          var N = hn()(void 0 !== Pt ? Pt : (Pt = n('ZH9U'))),
            j = B()(N, 1)[0],
            U = hn()(void 0 !== Dt ? Dt : (Dt = n('rQjK'))),
            H = B()(U, 1)[0],
            V = function (e, t) {
              H({
                variables: { conversation_id: e, label_type: tt.a.PINNED },
                onCompleted: function (n) {
                  var a,
                    r = Object(Ae.a)(t),
                    o = t
                      ? null == t || null === (a = t.labels) || void 0 === a
                        ? void 0
                        : a.filter(function (e) {
                            return e.label_type !== tt.a.PINNED
                          })
                      : []
                  i(qt({ conversations: h()({}, e, D()(D()({}, t), {}, { participants: r, labels: o })) })),
                    i(Object(K.b)({ ariaOnly: !0, text: kn }))
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
                    s && o && (Object(Ut.b)(s, r), t.delete(r))
                  }
                },
                onError: function (e) {
                  u(pn)(e)
                },
              })
            },
            z =
              null == c
                ? void 0
                : c.filter(function (e) {
                    return -1 === f.indexOf(e)
                  }),
            W = f.length && z.length,
            G = v.a.createElement(
              v.a.Fragment,
              null,
              p,
              null != f && f.length
                ? v.a.createElement(
                    v.a.Fragment,
                    null,
                    Rn(gn),
                    f.map(function (e, t) {
                      return y({ conversationIds: f, togglePinState: V })(e)
                    }),
                  )
                : null,
              W ? Rn(bn) : null,
            )
          return null != c && c.length
            ? v.a.createElement(
                v.a.Fragment,
                null,
                L
                  ? v.a.createElement(De.a, {
                      confirmButtonLabel: _n,
                      headline: En({ count: I }),
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
                    isRefreshing: R,
                    onRefresh: function () {
                      T(!0)
                      var e = rn()(E, In, { label: tt.a.PINNED }).toPromise()
                      Promise.all([
                        e,
                        function () {
                          return i(A.fetchInbox())
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
                  l && null != z && z.length
                    ? v.a.createElement(Jt.a, {
                        accessibilityRole: 'tablist',
                        accessibilityTitle: o,
                        anchoring: Xt,
                        assumedItemHeight: 100,
                        cacheKey: l,
                        footer: d,
                        header: G,
                        identityFunction: yn,
                        items: z,
                        onNearEnd: m,
                        renderer: y({
                          conversationIds: z,
                          togglePinState: function (e, t) {
                            j({
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
                                      c = Object(Ae.a)(t)
                                    i(
                                      qt({
                                        conversations: h()(
                                          {},
                                          e,
                                          D()(
                                            D()({}, t),
                                            {},
                                            { participants: c, labels: [{ label_type: o, timestamp: l }] },
                                          ),
                                        ),
                                      }),
                                    ),
                                      i(Object(K.b)({ ariaOnly: !0, text: Cn }))
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
                    : G,
                ),
              )
            : g()
        },
        Rn = function (e) {
          return v.a.createElement(Fe.a, null, v.a.createElement(zt, { headerText: e, isInboxLabelHeader: !0 }))
        }
      var Tn = jt(function (e) {
          return v.a.createElement(en.a, { errorConfig: wn }, v.a.createElement(xn, e))
        }),
        On =
          (n('LJOr'),
          n('tVqn'),
          n('Qavd'),
          n('M+/F'),
          function (e, t) {
            return t.module.selectItems(e)
          }),
        An = function (e, t) {
          return t.module.selectFetchStatus(e)
        },
        Mn = Object(_.a)()
          .propsFromState(function () {
            return { fetchStatus: An, sliceItems: On }
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
        Pn = n('0yYu'),
        Dn = n('lBmi'),
        Nn = n('91AQ'),
        Bn = n('6ZHn'),
        jn = w.a.c94ac69d,
        Un = w.a.a2f8105f,
        Hn = w.a.g2fd3205,
        Kn = w.a.ffd9cfe6,
        Vn = (function (e) {
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
                      o && !c ? v.a.createElement(Pn.a, null) : null,
                      c ? e._renderDMSearchFooter(Hn) : null,
                      n.length ? e._renderGroupsSection() : null,
                      s ? e._renderDMSearchFooter(jn) : null,
                      a.length ? e._renderMessagesSection() : null,
                      l ? e._renderDMSearchFooter(Un) : null,
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
                  { style: Wn.header },
                  v.a.createElement(C.b, { link: { pathname: n.pathname, state: { tab: t } } }, Kn),
                )
              }),
              h()(l()(e), '_renderDMHeader', function (e) {
                var t = e.headerText,
                  n = e.icon
                return v.a.createElement(zt, { headerText: t, icon: n })
              }),
              h()(l()(e), '_renderGroupsSection', function () {
                var t = e.props,
                  n = t.groupConversationIds,
                  a = t.renderInboxItem
                return v.a.createElement(
                  v.a.Fragment,
                  null,
                  e._renderDMHeader({ icon: Dn.a, headerText: jn }),
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
                  e._renderDMHeader({ icon: Nn.a, headerText: Un }),
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
                  e._renderDMHeader({ icon: Bn.a, headerText: Hn }),
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
      h()(Vn, 'contextType', b.a)
      var zn,
        Wn = $e.a.create(function (e) {
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
        Gn = Mn(Vn),
        qn = n('wAC9'),
        Qn = function (e) {
          return Object(qn.a)({
            contextSuffix: 'DM_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMAllSearch
            },
            sliceKey: ''.concat(nt.f, '-').concat(e),
            getEndpointParams: function (t) {
              return D()(D()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: qt,
          })
        },
        Yn = function (e, t) {
          return t.query
        },
        Xn = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(Yn, function (e) {
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
            ? v.a.createElement(Gn, {
                loadingLabel: t,
                location: n,
                module: o,
                query: a,
                renderEmptyState: r,
                renderInboxItem: i,
              })
            : r()
        }),
        Jn = A.selectRecentSearches,
        Zn = function (e, t) {
          return t.query ? A.selectSearchConversations(e, t.query) : []
        },
        $n = function (e, t) {
          return t.query ? A.selectSearchFetchStatus(e, t.query) : M.a.LOADED
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
              addRecentSearch: A.addRecentSearches,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_SEARCH',
              ),
              search: A.searchConversations,
              clearRecentSearch: A.clearRecentSearch,
              clearRecentSearches: A.clearRecentSearches,
            }
          }),
        aa = n('VY6S'),
        ra = n('s14A'),
        ia = n('VPW4'),
        oa = n('mN6z'),
        sa = void 0 !== zn ? zn : (zn = n('y59G')),
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
                  i = Object(Zt.b)(a, [Wt.a]),
                  o = Object(Zt.b)(r, [Wt.b])
                return {
                  normalizedConversations: i,
                  normalizedMessages: o,
                  entities: D()(D()({}, null == i ? void 0 : i.entities), null == o ? void 0 : o.entities),
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
                Object(oa.a)(d, y) || c(qt(f, !0))
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
        ga = w.a.dbd5d40f,
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
          return Object(qn.a)({
            contextSuffix: 'DM_GROUP_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMGroupSearch
            },
            sliceKey: ''.concat(nt.f, '-groups-').concat(e),
            getEndpointParams: function (t) {
              return D()(D()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: qt,
          })
        },
        Sa = function (e) {
          return Object(qn.a)({
            contextSuffix: 'DM_PEOPLE_SEARCH_SLICE',
            getFetchApiEndpoint: function (e) {
              return e.DirectMessagesGraphQL.fetchDMPeopleSearch
            },
            sliceKey: ''.concat(nt.f, '-people-').concat(e),
            getEndpointParams: function (t) {
              return D()(D()({}, t), {}, { query: e })
            },
            mapEntitiesToActions: qt,
          })
        },
        Ca = function (e, t) {
          return t.query
        },
        ka = function (e, t) {
          return t.tabType
        },
        Ia = Object(_.a)().propsFromState(function () {
          return {
            sliceModule: Object(V.createSelector)(ka, Ca, function (e, t) {
              var n = t && e === nt.g.PEOPLE
              return t && e === nt.g.GROUPS ? Ea(t) : n ? Sa(t) : void 0
            }),
          }
        }),
        wa = n('FS1z'),
        xa = Ia(function (e) {
          var t = e.footer,
            n = e.onScrollEnd,
            a = e.renderEmptyState,
            r = e.renderInboxItem,
            i = e.sliceModule
          return i
            ? v.a.createElement(wa.a, {
                footer: t,
                module: i,
                noItemsRenderer: a,
                onScrollEnd: n,
                renderer: r({ conversationIds: [] }),
                withoutHeadroom: !0,
              })
            : a()
        }),
        Ra = n('RJrc'),
        Ta = n('TnY3'),
        Oa = n('FIs5'),
        Aa = n('6OUF'),
        Ma = n('k/OQ'),
        La = n('95Se'),
        Fa = 'dmSearchInbox',
        Pa = function (e) {
          return e
        },
        Da = w.a.b08821f3,
        Na = w.a.a66ac766,
        Ba = w.a.fe61929d,
        ja = w.a.a846382a,
        Ua = w.a.b9dae4f4,
        Ha = w.a.e7fb2027,
        Ka = w.a.b92a21d8,
        Va = w.a.jdc67c42,
        za = w.a.e8581ccd,
        Wa = w.a.f08940ab,
        Ga = w.a.gaae1fd5,
        qa = w.a.f8321d82,
        Qa = w.a.c94ac69d,
        Ya = w.a.a2f8105f,
        Xa = w.a.g2fd3205,
        Ja = w.a.fb3c8e74,
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
                    v.a.createElement(Oa.a, {
                      buttonLink: '/messages/compose',
                      buttonText: Wa,
                      header: Ka({ query: r }),
                      message: e._messageSearchEnabled ? za : Va,
                      onButtonPress: e._handleComposeButtonPress,
                    }))
                  : v.a.createElement(
                      Fe.a,
                      { style: $a.emptyState },
                      v.a.createElement(C.b, { align: 'center', color: 'gray700' }, Ga),
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
                      v.a.createElement(zt, {
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
                return v.a.createElement(xa, {
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
                      identityFunction: Pa,
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
                  ? v.a.createElement(Ra.a, null)
                  : v.a.createElement(
                      Fe.a,
                      { style: $a.footerContainer },
                      v.a.createElement(C.b, { align: 'center', size: 'body', weight: 'bold' }, Ha),
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
                          Ua,
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
                    s = [qa, Xa, Qa]
                  this._messageSearchEnabled && s.push(Ya)
                  var l = s.map(function (e) {
                    return {
                      key: e,
                      label: e,
                      isActive: function () {
                        return o === e || (!o && e === qa)
                      },
                      to: D()(D()({}, t), {}, { state: D()(D()({}, t.state), {}, { tab: e }) }),
                    }
                  })
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(
                      Fe.a,
                      { style: i },
                      v.a.createElement(Qe.a, {
                        accessibilityLabel: Da,
                        icon: v.a.createElement(La.a, null),
                        onPress: this._handleHideRecentSearches,
                        pullLeft: !0,
                        type: 'primaryText',
                      }),
                      v.a.createElement(Aa.a, {
                        Icon: fa.a,
                        autoComplete: 'off',
                        onChange: this._handleSearchChange,
                        onClear: this._handleSearchClear,
                        onSubmitEditing: this._handleAddRecentSearch,
                        placeholder: this._messageSearchEnabled ? ja : Ba,
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
        ir = w.a.h845f281,
        or = w.a.f325afc3,
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
        br = w.a.a66ac766,
        yr = w.a.fe61929d,
        _r = w.a.a846382a,
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
                  c = (null == n ? void 0 : n.type) === A.CONVERSATION_TYPE.GROUP
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
                        v.a.createElement(Aa.a, {
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
                    v.a.createElement(O, null),
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
    piX5: function (e, t, n) {
      'use strict'
      n('uFXj'), n('2G9S')
      var a = n('rHpw').a.create(function (e) {
        return {
          border: {
            borderRadius: e.borderRadii.small,
            borderWidth: e.borderWidths.small,
            borderColor: e.colors.gray200,
          },
          focusedBorderValid: {
            boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.primary),
            borderColor: e.colors.primary,
          },
          focusedBorderInvalid: { boxShadow: '0 0 0 '.concat(e.borderWidths.small, ' ').concat(e.colors.red500) },
          invalidBorderColor: { borderColor: e.colors.red500 },
          invalidColor: { color: e.colors.red500 },
          validColor: { color: e.colors.primary },
          disabled: { cursor: 'default', opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 },
        }
      })
      t.a = a
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
        k = 'image',
        I = n('TIdA'),
        w = n('a6qo'),
        x = ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'],
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
              b()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  a = t.useMinimumData,
                  i = e.props,
                  s = i.accessibilityLabel,
                  l = (i.hideAcceptOverlay, i.shouldShowAltLabel),
                  c = o()(i, x)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  _.a.createElement(
                    I.a,
                    r()({}, c, { accessibilityLabel: s, onVariantSelection: n, previewMode: a, testID: k }),
                  ),
                  l ? _.a.createElement(w.a, { align: 'left', altLabel: s }) : null,
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
    qBaR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      n('+KXO'), n('z84I')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('v6aA'),
        o = n('+Kfv'),
        s = n('MMRb'),
        l = n('aA19'),
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
        v = n('M2mT'),
        g = n('rHpw'),
        b = n('aITJ'),
        y = n('MWbm'),
        _ = n('OhSZ'),
        E = n('zCf4'),
        S = { viewType: 'messages' },
        C = d.a.d4986f85,
        k = d.a.e3e58b6d,
        I = d.a.a9ddbb94
      function w(e) {
        var t,
          n,
          a,
          u,
          d,
          p,
          m = r.a.useContext(i.a),
          h = Object(E.f)(),
          g = Object(E.g)(),
          w = m.featureSwitches.isTrue('dm_vdl_enabled') && m.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
          R = e.conversation,
          T = e.conversationId,
          O = e.newConversationParticipants,
          A = e.perspective,
          M = function (e) {
            null != R && R.trusted ? h.push('/messages') : e()
          },
          L = function () {
            var e,
              t = (null == R ? void 0 : R.type) === s.CONVERSATION_TYPE.GROUP,
              n = (null == g || null === (e = g.state) || void 0 === e ? void 0 : e.position) || 0
            return T
              ? r.a.createElement(
                  y.a,
                  { style: x.rightControlStyles },
                  r.a.createElement(f, {
                    accessibilityLabel: t ? I : k,
                    conversationId: T,
                    link: { pathname: '/messages/'.concat(T, '/info'), state: { position: n } },
                    style: x.infoButton,
                  }),
                )
              : void 0
          }
        return r.a.createElement(
          v.a,
          ((t =
            R && Object.keys(R.participants).length
              ? Object(_.a)({ conversation: R, perspective: A })
              : O
              ? Object(_.a)({ newConversationParticipants: O, perspective: A })
              : C),
          (n =
            R && Object.keys(R.participants).length
              ? r.a.createElement(_.b, { conversation: R, perspective: A, withScreenName: !1 })
              : O
              ? r.a.createElement(_.b, { newConversationParticipants: O, perspective: A, withScreenName: !1 })
              : C),
          (a = w ? 'large' : 'medium'),
          (u = A ? r.a.createElement(l.a, { conversation: R, perspective: A, size: a }) : void 0),
          (d =
            R &&
            R.type === s.CONVERSATION_TYPE.ONE_TO_ONE &&
            A &&
            Object(c.a)(R, A).map(function (e) {
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
            titleIconCellSize: a,
            subtitle: p,
            screenType: 'primaryDetail',
            withBottomTabBar: !1,
            headerless: b.b.isKaiOS(),
          }),
          r.a.createElement(o.a, { behavioralEventContext: S }, e.children),
        )
      }
      var x = g.a.create(function (e) {
        return { infoButton: { marginRight: e.spaces.space4 }, rightControlStyles: { flexDirection: 'row' } }
      })
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
            I = e.showBlock,
            w = e.showCancel,
            x = e.showDelete,
            R = r.a.useCallback(
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
            O = r.a.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            )
          return r.a.createElement(
            s.a,
            { accessibilityRole: 'dialog', style: n ? k.flatCorners : k.roundCorners },
            x
              ? r.a.createElement(l.a, {
                  Icon: d.a,
                  actionSubText: b,
                  actionText: a ? v : g,
                  onClick: O,
                  textColor: 'red500',
                })
              : null,
            I
              ? r.a.createElement(l.a, { Icon: p.a, actionSubText: f, actionText: h({ screenName: C }), onClick: T })
              : null,
            r.a.createElement(l.a, {
              Icon: m.a,
              actionSubText: E,
              actionText: a ? y : _({ screenName: C }),
              onClick: R,
            }),
            w ? r.a.createElement(c.a, { onPress: t, style: k.cancelButton, type: 'primaryOutlined' }, S) : null,
          )
        }
      C.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var k = u.a.create(function (e) {
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
        k = n('AspN'),
        I = n('rxPX'),
        w = Object(I.a)()
          .propsFromState(function () {
            return { dataSaverMode: C.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: k.b,
              addToast: E.b,
              processMultipleMedia: k.g,
              removeMediaUpload: k.i,
              scribeAction: S.c,
              preUploadMedia: k.e,
            }
          }),
        x = n('wpu3'),
        R = n('cOB2'),
        T = n('MWbm'),
        O = n('0FVZ'),
        A = n('Oe3h'),
        M = n('rHpw')
      var L = function (e) {
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
                O.a.BottomComposer,
                null,
                _.a.createElement(A.a, { id: 'DMComposerWrapper' }, function (e, i) {
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
        P = (n('2G9S'), n('1t7P'), n('jQ/y'), n('HPNB')),
        D = n('htQn'),
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
                    D.a,
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
        U = B,
        H = n('cHvH'),
        K = n('mw9i'),
        V = (function (e) {
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
                  return _.a.createElement(H.a, null, function (a) {
                    var r = a.windowWidth,
                      i = P.a.isTwoColumnLayout(r),
                      o = [i && z.isWide, i && n && z.oneButtonOnly, !i && z.isNarrow]
                    return _.a.createElement(
                      K.a,
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
        W = V,
        G = n('krmn'),
        q = n('cIoY'),
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
        ke = function () {
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
      ke.metadata = { width: 24, height: 24 }
      var Ie = ke,
        we = n('iySH'),
        xe = J.a.ee230734,
        Re = J.a.ca0ce0e4,
        Te = J.a.cdcebd22,
        Oe = J.a.ic8c615d,
        Ae = J.a.a04077c4,
        Me = function (e) {
          return !(!e || !e.media)
        },
        Le = Object(x.b)({ maxNumberOfPhotos: 1 }),
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
                  ? _.a.createElement(W, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              b()(p()(c), '_renderComposeBox', function () {
                return _.a.createElement(T.a, { style: Pe.composeBoxContainer }, c._renderMainContent())
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
                  i = me.b.isKaiOS() ? Te : a || Re,
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
                      style: Pe.composeInput,
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
                        { style: Pe.attachmentContainer, testID: ce },
                        _.a.createElement(
                          fe.a,
                          { ratio: u / l, style: Pe.aspectContainer },
                          _.a.createElement(
                            T.a,
                            { style: Pe.mediaPreviewContainer },
                            _.a.createElement(ee.a, {
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
                          _.a.createElement(
                            T.a,
                            { style: Pe.gifAttribution },
                            _.a.createElement(q.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : f && !r
                    ? _.a.createElement(ye.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: a,
                        style: Pe.cardPreviewContainer,
                        urls: f,
                      })
                    : null,
                )
              }),
              b()(p()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && me.b.isDesktopOS()
                  ? _.a.createElement(G.a, {
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
                        style: Pe.actionButton,
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
                      style: Pe.actionButton,
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
                  accessibilityLabel: Oe,
                  icon: e ? _.a.createElement(Ce, null) : _.a.createElement(Ie, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: Pe.actionButton,
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
                  { style: [Pe.composer, t && Pe.composerWithAttachment] },
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
                  { style: Pe.uploadButtons },
                  i
                    ? _.a.createElement(ve.a, {
                        accessibilityLabel: xe,
                        icon: _.a.createElement(we.a, null),
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
                    : (a({ text: Ae }), u(t))
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
                    s = i || Re,
                    l = Object(le.a)(),
                    c = l && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    L,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: l,
                      style: [Pe.root, c && Pe.dtabOffset, o],
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
      b()(Fe, 'contextType', be.a),
        b()(Fe, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
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
      t.a = w.forwardRef(Fe)
    },
    uHIe: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'DMMediaScreen', function () {
          return _
        })
      n('KqXw'), n('MvUL')
      var a = n('ERkP'),
        r = n.n(a),
        i = (n('WNMA'), n('MMRb')),
        o = n('hqKg'),
        s = n('zh9S'),
        l = n('H9MA'),
        c = n('oEGd'),
        u = function (e, t) {
          return t.match.params.entryId
        },
        d = Object(o.createSelector)(
          u,
          function (e, t) {
            return i.selectEntry(e, u(0, t))
          },
          function (e, t) {
            return t.match.params.conversationId
          },
          l.c,
          function (e, t, n, a) {
            var r,
              i = null == t || null === (r = t.message_data) || void 0 === r ? void 0 : r.attachment
            return {
              conversationId: n,
              mediaItem:
                (null == i ? void 0 : i.photo) ||
                (null == i ? void 0 : i.animated_gif) ||
                (null == i ? void 0 : i.video) ||
                void 0,
              messageId: e,
              dataSaver: a,
            }
          },
        ),
        p = { scribeAction: s.c },
        m = Object(c.g)(d, p),
        h = n('2doW'),
        f = n('UPvq'),
        v = n('wiP2'),
        g = n('lklz'),
        b = n('7JQg'),
        y = n('RCZO'),
        _ = function (e) {
          var t = e.conversationId,
            n = e.dataSaver,
            a = e.history,
            i = e.mediaItem,
            o = e.messageId,
            s = Object(y.b)(i),
            l = Object(y.h)(),
            c = l.handleMediaDetailZoomed,
            u = l.handleMediaItemTapped,
            d = l.hideButtons,
            p = function () {
              var e = t ? '/messages/'.concat(t) : '/messages'
              a.goBack({ backLocation: e })
            }
          return (
            r.a.useEffect(
              function () {
                i || a.replace(t ? '/messages/'.concat(t) : '/messages')
              },
              [a, t, i],
            ),
            i
              ? r.a.createElement(
                  v.a.Configure,
                  { headerless: !0 },
                  r.a.createElement(
                    f.a,
                    { backgroundColor: s, hideButtons: d, mediaItem: i, onCloseButtonPress: p },
                    r.a.createElement(h.a, {
                      dataSaver: n,
                      mediaItems: [i],
                      onDismiss: p,
                      onMediaDetailZoomed: c,
                      onTap: u,
                      videoId: g.b.forDm(o),
                    }),
                  ),
                )
              : null
          )
        }
      t.default = Object(b.a)({ page: 'messages', section: 'media' })(m(_))
    },
    wO1l: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return S
      }),
        n.d(t, 'a', function () {
          return C
        })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        s = n('m3Bd'),
        l = n.n(s),
        c =
          (n('z84I'),
          n('ho0z'),
          n('iKE+'),
          n('1LXv'),
          n('KqXw'),
          n('e/gN'),
          n('DZ+c'),
          n('LW0h'),
          n('7x/C'),
          n('tQbP'),
          n('3uku'),
          n('5BYb'),
          n('2G9S'),
          n('aWyx')),
        u = n('4q8G'),
        d = n('lL5k'),
        p = n.n(d),
        m = n('XnpN'),
        h = n('w6IS'),
        f = n('s1N3'),
        v = n('VIKJ'),
        g = n('vy4g'),
        b = n('GZwR'),
        y = ['rounded_score', 'src', 'tokens'],
        _ = function (e, t) {
          return Object(h.a)(
            e.map(function (e) {
              return Object(m.a)(e, t).map(function (e) {
                return e.user
              })
            }),
          )
        }
      var E = function (e) {
          var t = e.id_str,
            n = Object(g.a)(Object(g.b)(e), b.c.DMInjected),
            a = n.rounded_score,
            r = n.src,
            i = n.tokens,
            s = l()(n, y)
          return {
            data: o()(o()({}, s), {}, { can_dm: !0 }),
            rounded_score: a,
            tokens: i,
            src: r,
            id: t,
            type: b.b.User,
          }
        },
        S = function (e, t, n) {
          var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = e && new RegExp('(^|.*\\s)'.concat(p()(e), '.*'), 'i'),
            i = _(t.sort(u.a), n)
              .filter(function (e) {
                return (!r || r.test(e.screen_name) || r.test(e.name)) && (e.followed_by || a)
              })
              .map(function (e) {
                return E(e)
              })
          return Object(f.a)(i, function (e) {
            return e.id
          })
        }
      function C(e, t, n) {
        var a,
          i = e && new RegExp('(^|.*\\s)'.concat(p()(e), '.*'), 'i'),
          o = t
            .filter(function (e) {
              return e.trusted
            })
            .filter(function (t) {
              if (!e) return !0
              var a = i && t.name && i.test(t.name),
                r = Object(m.a)(t, n).map(function (e) {
                  return e.user
                }),
                o =
                  i &&
                  r.some(function (e) {
                    return i.test(e.screen_name) || i.test(e.name)
                  })
              return a || o
            })
            .sort(u.a),
          s = o
        if (e) {
          var l = Object(v.a)(o, function (e) {
              return e.type === c.a.ONE_TO_ONE
            }),
            d = r()(l, 2),
            g = d[0],
            y = d[1]
          s = g.concat(y)
        }
        return (
          (a = Object(h.a)(
            s.map(function (t) {
              var a = t.type === c.a.GROUP,
                r = []
              return (
                a &&
                  r.push(
                    (function (e) {
                      return {
                        data: { name: e.name || '', conversationId: e.conversation_id },
                        id: e.conversation_id,
                        type: b.b.DMConversation,
                      }
                    })(t),
                  ),
                (!e && a) || (r = r.concat(S(a ? e : null, [t], n, !a))),
                r
              )
            }),
          )),
          Object(f.a)(a, function (e) {
            var t = e.id
            return e.type === b.b.DMConversation ? 'c_'.concat(t) : 'u_'.concat(t)
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
        k,
        I,
        w,
        x,
        R,
        T,
        O,
        A,
        M,
        L,
        F,
        P,
        D,
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
                                              (k = {
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
                                          (I = {
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
                                          (w = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'is_new_one_to_one_convo',
                                            storageKey: null,
                                          }),
                                          (x = {
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
                                          (O = {
                                            alias: null,
                                            args: null,
                                            kind: 'ScalarField',
                                            name: 'possibly_spam',
                                            storageKey: null,
                                          }),
                                          (A = {
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
                args: (P = [{ kind: 'Variable', name: 'cursor', variableName: 'cursor' }, r, i]),
                concreteType: null,
                kind: 'LinkedField',
                name: 'dm_message_slice_result',
                plural: !1,
                selections: [
                  (D = { alias: null, args: null, kind: 'ScalarField', name: '__typename', storageKey: null }),
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
                          D,
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
                                                          D,
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
                                                        selections: [D, y],
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
                                                          D,
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
                                              k,
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
                                          I,
                                          w,
                                          x,
                                          R,
                                          T,
                                          f,
                                          O,
                                          A,
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
                args: P,
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
    yV8l: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ConversationInfoScreen', function () {
          return Be
        }),
        n.d(t, 'styles', function () {
          return je
        })
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
        g = (n('ho0z'), n('z84I'), n('+KXO'), n('0zG9'), n('ERkP')),
        b = n.n(g),
        y = n('EbOo'),
        _ = n('EPsT'),
        E = (n('KqXw'), n('WNMA'), n('6U7i'), n('LW0h'), n('7x/C'), n('M+/F'), n('849X'), n('TJCb'), n('MMRb')),
        S = n('RqPI'),
        C = n('1YZw'),
        k = n('hqKg'),
        I = n('p9G8'),
        w = n('X/yg'),
        x = n('AQOc'),
        R = n('zh9S'),
        T = n('G6rE'),
        O = n('0KEI'),
        A = n('oEGd'),
        M = function (e, t) {
          return t.match.params.conversationId
        },
        L = function (e, t) {
          var n = M(0, t)
          return E.selectInboxTypeByConversation(e, n)
        },
        F = Object(k.createSelector)(
          function (e, t) {
            return E.selectConversation(e, M(0, t))
          },
          E.selectEntries,
          M,
          function (e, t) {
            return E.selectConversationFetchStatus(e, M(0, t))
          },
          S.o,
          S.q,
          T.e.selectAll,
          function (e, t) {
            var n = L(e, t)
            return Object(w.g)(n)
          },
          L,
          S.y,
          function (e, t, n, a, r, i, o, s, l, c, u) {
            var d = e && e.data,
              p = d && Object(x.b)(d, t, o),
              m = p && Object(I.a)(p, i),
              h = !(!d || !d.notifications_disabled),
              f = !(!d || !d.mention_notifications_disabled),
              v = d && d.mute_expiration_time && Number(d.mute_expiration_time),
              g = p ? Object.keys(p.participants) : [],
              b = g && 1 === g.length && g[0] === i,
              y =
                g &&
                g.filter(function (e) {
                  return e !== i
                }),
              _ = b ? g : y.slice(0, 5),
              E = _.length < y.length
            if (!i) throw new Error('logged-in user not found')
            return {
              conversation: p,
              conversationId: n,
              fetchStatus: a,
              groupName: m,
              inboxType: l,
              mentionNotificationsDisabled: f,
              language: r,
              muteExpirationTime: v,
              notificationsDisabled: h,
              perspective: i,
              scribeComponent: s,
              showViewPeople: E,
              visibleParticipants: _,
              isSelfConversation: b,
              reporterCountry: c,
            }
          },
        ),
        P = {
          addToast: C.b,
          block: T.e.block,
          createLocalApiErrorHandler: Object(O.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_CONVERSATION_INFO',
          ),
          disableMentionNotifications: E.disableMentionNotifications,
          disableNotifications: E.disableNotifications,
          enableMentionNotifications: E.enableMentionNotifications,
          enableNotifications: E.enableNotifications,
          fetchConversationIfNeeded: E.fetchConversationIfNeeded,
          leaveConversation: E.leaveConversation,
          muteDMUser: E.muteDMUser,
          scribeAction: R.c,
          unblock: T.e.unblock,
          unmuteDMUser: E.unmuteDMUser,
          updateConversationName: E.updateConversationName,
        },
        D = Object(A.g)(F, P),
        N = n('aWyx'),
        B = n('I2k/'),
        j = n('aA19'),
        U = n('v//M'),
        H = n('Gpeq'),
        K = n('XnpN'),
        V = n('3XMw'),
        z = n.n(V),
        W = n('tuLS'),
        G = n('M2mT'),
        q = n('u0B7'),
        Q = n('Re5t'),
        Y = n('hqDb'),
        X = n('MWbm'),
        J = n('mjJ+'),
        Z = n('mw9i'),
        $ = n('5mJL'),
        ee = n('t62R'),
        te = n('0yYu'),
        ne = n('6vad'),
        ae = n('jtO7'),
        re = n('CK8+'),
        ie = n('rHpw'),
        oe = n('v6aA'),
        se = n('7JQg'),
        le = n('pHkl'),
        ce = n('mN6z'),
        ue = n('fs1G'),
        de = n('fz3c'),
        pe = z.a.e3e58b6d,
        me = z.a.a9ddbb94,
        he = z.a.abd845fd,
        fe = z.a.g2fd3205,
        ve = z.a.eb1bb5a1,
        ge = z.a.c6026009,
        be = z.a.eb75875d,
        ye = z.a.a7f20222,
        _e = z.a.g2f04a6a,
        Ee = z.a.i453fedf,
        Se = z.a.b3dfd519,
        Ce = z.a.cc7c8ce6,
        ke = z.a.hab58673,
        Ie = z.a.e3c6e080,
        we = {
          confirmButtonLabel: z.a.bb1d57b6,
          actionTextDelete: z.a.ad63377d,
          actionTextLeave: z.a.g9074da4,
          header: z.a.gdf4b79f,
          text: z.a.h09b49f7,
        },
        xe = z.a.i6b19b07,
        Re = z.a.j7bb1a42,
        Te = z.a.fcd4d489,
        Oe = z.a.a30e1677,
        Ae = z.a.a9fd20be,
        Me = z.a.e133be4e,
        Le = z.a.c9623eeb,
        Fe = z.a.cceeaf2b,
        Pe = z.a.d87bff5a,
        De = [
          { duration: 1, displayText: z.a.j37c4674, toast: z.a.je7e1fec, toastOld: z.a.hf94a2d5 },
          { duration: 2, displayText: z.a.fb7a43c5, toast: z.a.e95c8f8a, toastOld: z.a.bd54fad1 },
          { duration: 3, displayText: z.a.cb5bf56e, toast: z.a.gb7a130b, toastOld: z.a.f6fce0fd },
          { duration: 0, displayText: z.a.cabeb6c1, toast: z.a.i78153dd, toastOld: z.a.hfc86556 },
        ],
        Ne = { page: 'messages', section: 'conversation_settings' },
        Be = (function (e) {
          p()(n, e)
          var t = h()(n)
          function n(e, a) {
            var i
            return (
              o()(this, n),
              (i = t.call(this, e, a)),
              v()(u()(i), '_getNameOfGroupOrOneToOneConvo', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.groupName
                return (null == t ? void 0 : t.type) === N.a.GROUP ? n || '' : i._getNameOfOneToOneConvo()
              }),
              v()(u()(i), '_getScreenNameOfOneToOneConvo', function () {
                var e = i._getSenderOfOneToOneConvo()
                return e ? e.screen_name : ''
              }),
              v()(u()(i), '_getNameOfOneToOneConvo', function () {
                var e = i._getSenderOfOneToOneConvo()
                return e ? e.name : ''
              }),
              v()(u()(i), '_getBlockedOfOneToOneConvo', function () {
                var e = i._getSenderOfOneToOneConvo()
                return e ? e.blocking : null
              }),
              v()(u()(i), '_getUserIdOfOneToOneConvo', function () {
                var e = i._getSenderOfOneToOneConvo()
                return e ? e.id_str : ''
              }),
              v()(u()(i), '_getSenderOfOneToOneConvo', function () {
                var e = i.props,
                  t = e.conversation,
                  n = e.perspective,
                  a =
                    t &&
                    Object(K.a)(t, n).map(function (e) {
                      return e.user
                    })
                return (a && a[0]) || null
              }),
              v()(u()(i), '_renderContent', function () {
                var e = i.props.conversation,
                  t = !(null != e && e.trusted)
                return b.a.createElement(oe.a.Consumer, null, function (e) {
                  e.featureSwitches
                  return b.a.createElement(
                    X.a,
                    null,
                    i._renderGroupSection(),
                    i._renderParticipantsSection(),
                    t ? null : i._renderNotificationsSection(),
                    i._renderConversationActions(),
                  )
                })
              }),
              v()(u()(i), '_getItems', function () {
                return De.map(function (e) {
                  return {
                    text: e.displayText,
                    onClick: function () {
                      return i._handleNotificationsDisabled(e)
                    },
                  }
                })
              }),
              v()(u()(i), '_renderActionMenu', function () {
                return function (e) {
                  return b.a.createElement(J.a, { items: i._getItems(), onCloseRequested: e })
                }
              }),
              v()(u()(i), '_handleViewPeople', function () {
                i._scribeAction('view_participants')
              }),
              v()(u()(i), '_handleMuteDMUser', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.muteDMUser,
                  r = i._getSenderOfOneToOneConvo()
                r && (a(r.id_str, t).catch(n()), i._scribeAction('mute_user'))
              }),
              v()(u()(i), '_handleUnmuteDMUser', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  a = e.unmuteDMUser,
                  r = i._getSenderOfOneToOneConvo()
                r && (a(r.id_str, t).catch(n()), i._scribeAction('unmute_user'))
              }),
              v()(u()(i), '_handleBlockUser', function () {
                var e = i.props,
                  t = e.addToast,
                  n = e.block,
                  a = e.createLocalApiErrorHandler,
                  r = i._getSenderOfOneToOneConvo(),
                  o = r ? r.id_str : ''
                '' !== o &&
                  (n(o).then(function () {
                    t({ action: { label: Me, onAction: i._handleUnblockUser }, text: Ae })
                  }, a(y.a)),
                  i._scribeAction('block'))
              }),
              v()(u()(i), '_handleUnblockUser', function () {
                var e = i._getSenderOfOneToOneConvo(),
                  t = e ? e.id_str : '',
                  n = i.props,
                  a = n.createLocalApiErrorHandler
                ;(0, n.unblock)(t).catch(a(q.a)), i._scribeAction('unblock')
              }),
              v()(u()(i), '_handleReportConversation', function () {
                i._scribeAction('report')
              }),
              v()(u()(i), '_handleFetch', function () {
                var e = i.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationIfNeeded)({ conversationId: t }).catch(n(Object(B.a)(t)))
              }),
              v()(u()(i), '_handleLeaveConversation', function () {
                var e,
                  t = i.props,
                  n = t.conversation,
                  a = t.conversationId,
                  r = t.createLocalApiErrorHandler,
                  o = t.inboxType,
                  s = t.leaveConversation,
                  l = t.location
                s({ conversationId: a }).catch(r({ showToast: !0 }))
                var c = (null == n ? void 0 : n.type) === N.a.GROUP ? 'leave_group' : 'delete_thread',
                  u = (null == l || null === (e = l.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  p = {
                    conversation_type: (null == n ? void 0 : n.type) === N.a.GROUP ? le.h.GROUP : le.h.ONE_TO_ONE,
                    conversation_id: a,
                    conversation_participant_count: d,
                    position: u,
                    inbox_type: Object(w.h)(o),
                    entry_point: le.b.CONVERSATION_INFO,
                  }
                i._scribeAction(c, p), i._handleConversationClose()
              }),
              v()(u()(i), '_handleNotificationsDisabled', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.conversationId,
                  r = t.disableNotifications,
                  o = i._getNameOfGroupOrOneToOneConvo()
                r({ conversationId: a, duration: e.duration }), n({ text: e.toast({ name: o }) })
              }),
              v()(u()(i), '_handleNotificationsEnabled', function () {
                return function () {
                  var e = i.props,
                    t = e.addToast,
                    n = e.conversationId,
                    a = e.createLocalApiErrorHandler,
                    r = e.enableNotifications,
                    o = i._getNameOfGroupOrOneToOneConvo(),
                    s = _e({ name: o })
                  r({ conversationId: n }).then(function () {
                    t({ text: s })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(u()(i), '_handleMentionSwitchChanged', function (e) {
                var t = i.props,
                  n = t.addToast,
                  a = t.conversationId,
                  o = t.createLocalApiErrorHandler,
                  s = t.disableMentionNotifications,
                  l = t.enableMentionNotifications,
                  c = t.scribeAction,
                  u = t.scribeNamespace
                c(
                  r()(
                    r()({}, u),
                    {},
                    {
                      component: 'dm_existing_conversation_dialog',
                      action: e ? 'disable_mentions' : 'enable_mentions',
                    },
                  ),
                ),
                  e
                    ? s({ conversationId: a }).then(function () {
                        n({ text: ke })
                      }, o({ showToast: !0 }))
                    : l({ conversationId: a }).then(function () {
                        n({ text: Ie })
                      }, o({ showToast: !0 }))
              }),
              v()(u()(i), '_handleConversationClose', function () {
                i._returnToInbox()
              }),
              v()(u()(i), '_returnToInbox', function () {
                var e = i.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(w.e)(n))
              }),
              v()(u()(i), '_scribeAction', function (e, t) {
                var n = i.props,
                  a = n.scribeAction,
                  o = n.scribeComponent,
                  s = n.scribeNamespace
                a(r()(r()({}, s), {}, { component: o, action: e }), t || i._getScribeData())
              }),
              v()(u()(i), '_getScribeData', function () {
                var e = i.props.conversation
                return {
                  items: [
                    { conversation_type: (null == e ? void 0 : e.type) === N.a.GROUP ? le.h.GROUP : le.h.ONE_TO_ONE },
                  ],
                }
              }),
              (i.state = { notificationsDisabled: e.notificationsDisabled, muteExpirationTime: e.muteExpirationTime }),
              i
            )
          }
          return (
            l()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._handleFetch()
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function (e, t) {
                  return !Object(ce.a)(e, this.props) || !Object(ce.a)(t, this.state)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    a = e.fetchStatus,
                    r = (null == t ? void 0 : t.type) === N.a.GROUP
                  return b.a.createElement(
                    G.a,
                    {
                      backLocation: '/messages/'.concat(n),
                      screenType: 'secondaryDetail',
                      title: r ? me : pe,
                      withBottomTabBar: !1,
                    },
                    b.a.createElement(
                      Z.a,
                      { style: je.root },
                      b.a.createElement(U.a, {
                        accessibilityLabel: Pe,
                        fetchStatus: a,
                        onRequestRetry: this._handleFetch,
                        render: this._renderContent,
                      }),
                    ),
                  )
                },
              },
              {
                key: '_renderGroupSection',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    a = e.groupName,
                    r = e.perspective,
                    i = (null == t ? void 0 : t.type) === N.a.GROUP,
                    o = null == t ? void 0 : t.trusted
                  return i
                    ? b.a.createElement(
                        $.a,
                        {
                          avatarCell: b.a.createElement(j.a, { conversation: t, perspective: r }),
                          cellStyle: je.groupSectionRight,
                          style: je.groupSection,
                        },
                        b.a.createElement(ee.b, { numberOfLines: 1, weight: 'bold' }, a),
                        o
                          ? b.a.createElement(ee.b, { link: '/messages/'.concat(n, '/group-info'), style: je.edit }, he)
                          : null,
                      )
                    : null
                },
              },
              {
                key: '_renderParticipantsSection',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    a = e.showViewPeople,
                    r = e.visibleParticipants,
                    i = (null == t ? void 0 : t.type) === N.a.GROUP,
                    o = null == t ? void 0 : t.trusted
                  return b.a.createElement(
                    X.a,
                    null,
                    i
                      ? b.a.createElement(
                          b.a.Fragment,
                          null,
                          b.a.createElement(te.a, null),
                          b.a.createElement(ne.b, { text: fe }),
                        )
                      : null,
                    b.a.createElement(Y.a, {
                      displayMode: Q.a.UserCompact,
                      userIds: r,
                      withFinalItemBorder: i,
                      withItemBorder: !0,
                    }),
                    a
                      ? b.a.createElement(ae.a, {
                          color: 'primary',
                          label: ve,
                          link: '/messages/'.concat(n, '/participants'),
                          onClick: this._handleViewPeople,
                        })
                      : null,
                    i && o
                      ? b.a.createElement(ae.a, { color: 'primary', label: ge, link: '/messages/'.concat(n, '/add') })
                      : null,
                  )
                },
              },
              {
                key: '_renderSnoozeConversationSwitch',
                value: function () {
                  var e = this.props,
                    t = e.muteExpirationTime,
                    n = e.notificationsDisabled,
                    a = this._getNameOfGroupOrOneToOneConvo(),
                    r = ye({ name: a })
                  return n
                    ? b.a.createElement(
                        X.a,
                        { accessibilityRole: 'label' },
                        b.a.createElement(
                          X.a,
                          { style: je.notificationsToggleContainer },
                          b.a.createElement(ee.b, { color: 'normal' }, r),
                          b.a.createElement(re.a, { onValueChange: this._handleNotificationsEnabled(), value: n }),
                        ),
                        t
                          ? b.a.createElement(
                              ee.b,
                              { color: 'gray700', size: 'subtext2', style: je.notificationsDescription },
                              this._displayExpirationTime(),
                            )
                          : null,
                      )
                    : b.a.createElement(
                        X.a,
                        { style: je.notificationsToggleContainer },
                        b.a.createElement(ee.b, { color: 'normal' }, r),
                        b.a.createElement(
                          W.a,
                          { accessibilityLabel: r, renderMenu: this._renderActionMenu() },
                          b.a.createElement(re.a, { onValueChange: ue.a, value: n }),
                        ),
                      )
                },
              },
              {
                key: '_renderSnoozeMentionsSwitch',
                value: function () {
                  var e = this.props.mentionNotificationsDisabled
                  return b.a.createElement(
                    X.a,
                    null,
                    b.a.createElement(
                      X.a,
                      { accessibilityRole: 'label', style: je.notificationsToggleContainer },
                      b.a.createElement(ee.b, { color: 'normal' }, Se),
                      b.a.createElement(re.a, { onValueChange: this._handleMentionSwitchChanged, value: e }),
                    ),
                    b.a.createElement(
                      ee.b,
                      { color: 'gray700', size: 'subtext2', style: je.notificationsDescription },
                      Ce,
                    ),
                  )
                },
              },
              {
                key: '_renderNotificationsSection',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.isSelfConversation,
                    a = (null == t ? void 0 : t.type) === N.a.GROUP
                  return n
                    ? null
                    : b.a.createElement(
                        X.a,
                        null,
                        b.a.createElement(te.a, null),
                        b.a.createElement(ne.b, { text: be }),
                        b.a.createElement(X.a, null, this._renderSnoozeConversationSwitch()),
                        a ? this._renderSnoozeMentionsSwitch() : null,
                      )
                },
              },
              {
                key: '_displayExpirationTime',
                value: function () {
                  var e = this.props,
                    t = e.language,
                    n = e.muteExpirationTime
                  if (!n) return null
                  var a = n - new Date().getTime() < 864e5,
                    r = new Date(n).toLocaleString(
                      Object(H.a)(t || 'en'),
                      a ? { hour: '2-digit', minute: '2-digit' } : { weekday: 'long', month: 'short', day: '2-digit' },
                    )
                  return Ee({ expiration: r })
                },
              },
              {
                key: '_renderConversationActions',
                value: function () {
                  var e = this.props.conversation,
                    t = (null == e ? void 0 : e.type) !== N.a.GROUP,
                    n = !(null != e && e.trusted)
                  return b.a.createElement(
                    X.a,
                    null,
                    b.a.createElement(te.a, null),
                    t ? this._renderBlockUserButton() : null,
                    this._renderReportConversationButton(),
                    b.a.createElement(_.a, {
                      confirmationSheetConfirmButtonLabel: we.confirmButtonLabel,
                      confirmationSheetConfirmButtonType: 'destructiveFilled',
                      confirmationSheetHeadline: we.header,
                      confirmationSheetText: we.text,
                      label: n ? we.actionTextDelete : we.actionTextLeave,
                      onConfirmationSheetConfirm: this._handleLeaveConversation,
                      withBottomBorder: !1,
                    }),
                  )
                },
              },
              {
                key: '_renderBlockUserButton',
                value: function () {
                  var e = this.props.isSelfConversation,
                    t = this._getScreenNameOfOneToOneConvo(),
                    n = this._getBlockedOfOneToOneConvo(),
                    a = n ? Fe({ screenName: t }) : Oe({ screenName: t }),
                    r = n ? Le({ screenName: t }) : Te({ screenName: t })
                  return e
                    ? null
                    : b.a.createElement(_.a, {
                        color: 'primary',
                        confirmationSheetText: a,
                        label: r,
                        onConfirmationSheetConfirm: n ? this._handleUnblockUser : this._handleBlockUser,
                      })
                },
              },
              {
                key: '_renderReportConversationButton',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    a = e.inboxType,
                    r = e.isSelfConversation,
                    i = e.language,
                    o = e.reporterCountry,
                    s =
                      (null == t ? void 0 : t.type) !== N.a.GROUP
                        ? Re({ screenName: this._getScreenNameOfOneToOneConvo() })
                        : xe,
                    l = de.a.DMConversation,
                    c = this.context.featureSwitches,
                    u = (null == t ? void 0 : t.type) === N.a.GROUP ? '0' : this._getUserIdOfOneToOneConvo(),
                    d = Object(de.g)(c, l, o, i)
                      ? {
                          pathname: '/i/safety/report_story_start',
                          state: {
                            input: {
                              requested_variant: JSON.stringify(
                                Object(de.d)({
                                  clientReferer: window.location.pathname,
                                  isMedia: !1,
                                  isPromoted: !1,
                                  reportType: l,
                                  reportedConversationId: n,
                                  reportedUser: u,
                                  scribeNamespace: Ne,
                                }),
                              ),
                            },
                          },
                        }
                      : {
                          pathname: '/i/report/dm_conversation/'.concat(n),
                          state: { clientReferer: window.location.pathname, scribeNamespace: Ne, inboxType: a },
                        }
                  return r
                    ? null
                    : b.a.createElement(ae.a, {
                        color: 'primary',
                        label: s,
                        link: d,
                        onPress: this._handleReportConversation,
                      })
                },
              },
            ]),
            n
          )
        })(b.a.Component)
      v()(Be, 'contextType', oe.a)
      var je = ie.a.create(function (e) {
        return {
          root: { backgroundColor: e.colors.cellBackground },
          edit: { flexShrink: 0 },
          groupSection: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          groupSectionRight: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          notificationsToggleContainer: {
            alignItems: 'center',
            flexDirection: 'row',
            flexGrow: 1,
            justifyContent: 'space-between',
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingVertical: e.componentDimensions.gutterVertical,
          },
          notificationsDescription: {
            paddingHorizontal: e.componentDimensions.gutterHorizontal,
            paddingBottom: e.componentDimensions.gutterVertical,
            paddingTop: 0,
          },
        }
      })
      t.default = Object(se.a)(Ne)(D(Be))
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
