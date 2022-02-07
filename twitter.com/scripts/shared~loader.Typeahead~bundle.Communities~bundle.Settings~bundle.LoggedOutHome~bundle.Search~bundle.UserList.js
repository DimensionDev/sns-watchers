;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return r
        }),
        n.d(t, 'c', function () {
          return i
        }),
        n.d(t, 'd', function () {
          return o
        }),
        n.d(t, 'e', function () {
          return c
        }),
        n.d(t, 'f', function () {
          return s
        })
      var a = 'ArrowDown',
        r = 'ArrowUp',
        i = 'Enter',
        o = 'Escape',
        c = 'ESC',
        s = 'Tab'
    },
    '5T6p': function (e, t, n) {
      'use strict'
      var a = n('ERkP'),
        r = n.n(a),
        i = n('MWbm'),
        o = n('TIdA'),
        c = n('A91F'),
        s = n('t62R')
      var l = n('rHpw').a.create(function (e) {
        return {
          root: { flexDirection: 'row', flexShrink: 1, flexGrow: 1 },
          bodyColumn: {
            justifyContent: 'center',
            flexDirection: 'column',
            marginRight: e.spaces.space4,
            marginLeft: e.spaces.space12,
            flexShrink: 1,
          },
          coverContainer: { borderRadius: e.borderRadii.large, overflow: 'hidden' },
          cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 },
          largeCellThumbnail: { height: e.spaces.space56, width: e.spaces.space56 },
        }
      })
      t.a = function (e) {
        var t = e.image,
          n = e.style,
          a = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return r.a.createElement(
          i.a,
          { style: [l.root, n] },
          r.a.createElement(
            i.a,
            { style: [l.coverContainer, d ? l.largeCellThumbnail : l.cellThumbnail] },
            t ? r.a.createElement(o.a, { accessibilityLabel: '', aspectMode: c.a.SQUARE, image: t }) : null,
          ),
          r.a.createElement(
            i.a,
            { style: l.bodyColumn },
            a ? r.a.createElement(s.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, a) : null,
            r.a.createElement(s.b, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
      }
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return h
      }),
        n.d(t, 'a', function () {
          return v
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        s = n('aWyx'),
        l = ['users'],
        u = ['conversation_id', 'participants'],
        d = ['conversation_id', 'participants', 'social_proof'],
        p = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var a = n.user_id,
              i = t[a] || { id_str: a }
            return (e[a] = r()(r()({}, n), {}, { user: i })), e
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
      var h = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = e.conversation_id,
            i = e.participants,
            c = o()(e, u)
          return r()(
            r()({ conversation_id: a }, c),
            {},
            { entries: t.entryIdsByConversationId[a] || [], participants: f(i, n) },
          )
        },
        v = function (e, t, n) {
          var a = e.conversation_id,
            i = e.participants,
            u = e.social_proof,
            p = o()(e, d),
            h = r()(
              r()({ conversation_id: a }, p),
              {},
              { entries: m(a, t), participants: f(i, n), social_proof: void 0 },
            )
          return (
            u &&
              (h.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === s.d.MUTUAL_FRIENDS) {
                    var n = t.users,
                      a = o()(t, l)
                    return r()(
                      r()({}, a),
                      {},
                      {
                        users: Object(c.a)(
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
            h
          )
        }
    },
    Gfoi: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 20.5 20.5',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.03 18.72l-3.66-3.66c1.325-1.57 2.13-3.596 2.13-5.81 0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM2 9.25c0-4.135 3.365-7.5 7.5-7.5S17 5.115 17 9.25s-3.365 7.5-7.5 7.5S2 13.385 2 9.25z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 20.5, height: 20.5 }), (t.a = l)
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        c = n('aWyx'),
        s = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('jV+4'),
        p = n('pjBI'),
        f = n('t62R'),
        m = n('rHpw'),
        h = n('p9G8'),
        v = u.a.cfd94063,
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        g = m.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        b = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            a = e.perspective
          if (t) {
            if (t.type === c.a.ONE_TO_ONE) {
              var i = Object(s.a)(t, a).map(function (e) {
                return e.user
              })
              return r()(i, 1)[0].name
            }
            return Object(h.a)(t, a)
          }
          var o = y(n)
          return Object(h.b)(o, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          l = void 0 !== i && i,
          u = e.newConversationParticipants,
          m = e.perspective,
          b = e.renderTimestamp,
          _ = e.textColor,
          w = void 0 === _ ? 'normal' : _,
          x = e.titleWeight,
          I = void 0 === x ? 'bold' : x,
          E = e.withScreenName,
          C = void 0 === E || E,
          k = e.withVDLRefresh,
          S = void 0 !== k && k
        if (t) {
          var R = b ? b() : null
          if (t.type === c.a.ONE_TO_ONE) {
            var T = Object(s.a)(t, m).map(function (e) {
                return e.user
              }),
              O = r()(T, 1)[0],
              D = o.a.createElement(d.a, {
                color: w,
                isProtected: O.protected,
                isVerified: O.verified,
                name: O.name,
                screenName: O.screen_name,
                weight: I,
                withLink: !1,
                withScreenName: C,
              })
            return (S && !a) || l ? o.a.createElement(p.a, null, D, R) : D
          }
          var F = t.participants,
            L = Object.keys(F).length
          if (a)
            return o.a.createElement(
              p.a,
              { color: w },
              o.a.createElement(f.b, { color: w, numberOfLines: 1, style: g.title, weight: I }, Object(h.a)(t, m, a)),
              S
                ? null
                : o.a.createElement(
                    f.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: L }),
                  ),
            )
          var j = o.a.createElement(f.b, { color: w, numberOfLines: 1, weight: I }, Object(h.a)(t, m, a))
          return (S && !a) || l ? o.a.createElement(p.a, null, j, R) : j
        }
        var P = y(u)
        return o.a.createElement(f.b, { color: w, numberOfLines: 1, weight: I }, Object(h.b)(P, m))
      }
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('AQ79'),
        r = function (e, t) {
          return e[a.c] ? e[a.c].conversations[t] : null
        }
    },
    XnpN: function (e, t, n) {
      'use strict'
      var a = n('RhWx'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('2G9S'), n('tQbP'), n('aWyx')),
        s = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        u = function (e, t) {
          return l(e.join_time) - l(t.join_time)
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
        f = n('tn7R'),
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          a = e.participants,
          i = e.type,
          s = Object(f.a)(a),
          l = Object(m.a)(s, function (e) {
            return e.user.id_str === t
          }),
          u = o()(l, 2),
          d = u[0],
          h = u[1]
        return h.length ? (i === c.a.GROUP && 1 === h.length ? [].concat(r()(d), r()(h)) : n ? h.sort(p(n)) : h) : d
      }
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ge
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('ho0z'), n('ERkP')),
        v = n.n(h),
        y = n('+Kfv'),
        g = 'typeaheadResult',
        b = n('AQOc'),
        _ = n('V5Qi'),
        w = n('G6rE'),
        x = n('rxPX'),
        I = function (e, t) {
          return t.conversationId
        },
        E = function (e, t) {
          return Object(_.a)(e, I(0, t))
        },
        C = Object(x.a)()
          .propsFromState(function () {
            return { conversationId: I, conversation: E, users: w.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(b.b)(t.data, void 0, n)), a
          }),
        k = n('aA19'),
        S = n('OhSZ'),
        R = n('5mJL'),
        T = n('rHpw'),
        O = T.a.create(function (e) {
          return {
            root: {
              cursor: 'pointer',
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              width: '100%',
            },
            avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: '32px' },
            bodyColumn: { flexGrow: 7, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 },
          }
        }),
        D = C(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective
          return t
            ? v.a.createElement(
                R.a,
                {
                  avatarCell: v.a.createElement(k.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: O.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: O.bodyColumn,
                  style: [O.root, !a && n && O.disabled],
                },
                v.a.createElement(S.b, { conversation: t, perspective: r }),
                ge({ isSelected: a }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        L = n('LbZ7'),
        j = n('t62R'),
        P = n('9Xij'),
        M = n('TIdA'),
        z = n('A91F'),
        U = (function (e) {
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
                    t = e.event,
                    n = e.image,
                    a = e.supportText
                  return v.a.createElement(
                    F.a,
                    { style: N.root },
                    v.a.createElement(
                      L.a,
                      { withGutter: !0 },
                      v.a.createElement(
                        F.a,
                        { style: N.bodyColumn },
                        a ? v.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        v.a.createElement(j.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? v.a.createElement(
                            F.a,
                            { style: N.coverContainer },
                            v.a.createElement(
                              P.a,
                              { ratio: 1 },
                              v.a.createElement(M.a, { accessibilityLabel: '', aspectMode: z.a.SQUARE, image: n }),
                            ),
                          )
                        : null,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent),
        A = '100px',
        N = T.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: A,
              maxWidth: A,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        V = U,
        W = n('5T6p'),
        H =
          (n('z84I'),
          n('2G9S'),
          n('vrRf'),
          n('LW0h'),
          n('7x/C'),
          n('kFen'),
          n('qd3W'),
          n('M+/F'),
          n('jQ3i'),
          n('x4t0'),
          n('KqXw'),
          n('MvUL'),
          n('yyPN')),
        G = n.n(H)
      var B = n('FiRh'),
        X = n('j7Bv'),
        K = n('EHV7'),
        Q = n('Gfoi')
      var q = T.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            context: { alignItems: 'center', flexDirection: 'row' },
            icon: {
              color: e.colors.primary,
              height: e.fontSizes.subtext2,
              paddingRight: e.spaces.space4,
              width: e.fontSizes.subtext2,
            },
            disabled: { backgroundColor: e.colors.gray0 },
            searchIcon: { marginRight: e.spaces.space12, borderWidth: 0, backgroundColor: 'none' },
            searchIconCell: { flexDirection: 'row', alignItems: 'center' },
            wrapperCellStyle: { justifyContent: 'center' },
          }
        }),
        Y = function (e) {
          var t = e.isDisabled,
            n = e.query,
            a = e.resultContext,
            r = e.showIcon,
            i = e.style,
            o = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = G()(e),
                i = e.toLowerCase().indexOf(t.toLowerCase()),
                o = i + t.length
              if (0 === r.length) {
                var c = a ? [i > 0 ? [0, i] : void 0, [o, e.length]].filter(Boolean) : [[i, o]]
                n = [{ highlights: -1 !== i ? c : void 0, text: e, entityType: 'text', prefix: '' }]
              } else {
                var s = r.flatMap(function (t, n, a) {
                    var r = t.indices,
                      i = 0 === n ? 0 : a[n - 1].indices[1],
                      o = n === a.length - 1,
                      c = []
                    return (
                      i !== r[0] && c.push(e.slice(i, r[0])),
                      c.push(e.substring(r[0], r[1])),
                      o && e.length !== r[1] && c.push(e.slice(r[1])),
                      c
                    )
                  }),
                  l = 0,
                  u = s.map(function (e, t, n) {
                    l += t > 0 ? n[t - 1].length : 0
                    var a = e.length
                    return { runningTotal: l, containsQuery: -1 !== i && l + a >= i && l < o }
                  })
                n = s.map(function (e, t) {
                  var n,
                    r,
                    c = u[t],
                    s = c.containsQuery,
                    l = c.runningTotal,
                    d = e.includes('#')
                  if (a && !s) r = [[0, e.length]]
                  else if (s) {
                    var p = l < i ? i - l : 0,
                      f = l + e.length < o ? e.length : o - l,
                      m = d ? p - 1 : p,
                      h = d ? f - 1 : f
                    r = a
                      ? [m > 0 ? [0, m] : void 0, h !== e.length - 1 ? [h, e.length] : void 0].filter(Boolean)
                      : [[m, h]]
                  }
                  var v = d ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = r) && void 0 !== n && n.length ? r : void 0,
                    text: v,
                    entityType: d ? 'hashtag' : 'text',
                    prefix: d ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, n, true),
            c = v.a.createElement(
              j.b,
              null,
              o.map(function (e, t) {
                return v.a.createElement(B.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            s = v.a.createElement(
              v.a.Fragment,
              null,
              c,
              a
                ? v.a.createElement(
                    F.a,
                    { style: q.context },
                    a && a.types[0] && 'followable_topic' === a.types[0].type
                      ? v.a.createElement(K.a, { style: q.icon })
                      : null,
                    v.a.createElement(j.b, { color: 'gray700' }, a.display_string || ' '),
                  )
                : null,
            )
          return v.a.createElement(
            F.a,
            { style: [q.root, t && q.disabled, i] },
            r
              ? (function (e) {
                  var t = v.a.createElement(X.a, { Icon: Q.a, color: 'neutral', size: 'xxxLarge', style: q.searchIcon })
                  return v.a.createElement(
                    R.a,
                    {
                      avatarCell: t,
                      avatarCellStyle: q.searchIconCell,
                      avatarSize: 'xxxLarge',
                      cellStyle: q.wrapperCellStyle,
                    },
                    e,
                  )
                })(s)
              : s,
          )
        },
        Z = (n('yH/f'), n('M0jS')),
        J = function (e, t) {
          return Object(Z.c)(e, t.userId)
        },
        $ = Object(x.a)().propsFromState(function () {
          return { userSpace: J }
        }),
        ee = n('3XMw'),
        te = n.n(ee),
        ne = n('tocL'),
        ae = 'TypeaheadUser',
        re = n('GZwR'),
        ie = n('IMA+'),
        oe = n('v6aA'),
        ce = te.a.ae2205d1,
        se = te.a.d960b55b,
        le = te.a.fd06b02f,
        ue = Object.freeze({
          num_of_followers: ne.a.Follow,
          bio: ne.a.TextOnly,
          location: ne.a.Location,
          num_tweets: ne.a.NewTweets,
          follow_relationship: ne.a.Follow,
          followers_follow: ne.a.Follow,
          social_proof: ne.a.SocialProof,
          follow_relationship_mutual_follow: ne.a.FollowMutual,
          follow_relationship_followed: ne.a.FollowFollowed,
          follow_relationship_following: ne.a.FollowFollowing,
        }),
        de = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              m()(s()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.isDisabled,
                  a = t.item,
                  r = t.onItemClick
                r && r(a, !!n)
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
                    t = e.avatarUri,
                    n = e.decoration,
                    a = e.disabledMessage,
                    r = e.isDisabled,
                    i = e.isProtected,
                    o = e.isVerified,
                    c = e.name,
                    s = e.screenName,
                    l = e.source,
                    u = e.userId,
                    d = e.userSpace,
                    p = e.withNewTypeaheadUI,
                    f = this.context.featureSwitches,
                    m = this._getSocialContext(),
                    h = this._getResultContext() || m,
                    y = l === re.d.SearchBox,
                    g = d && f.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? d : void 0
                  return (
                    g && (g.accessibilityLabel = le({ screenName: s })),
                    v.a.createElement(ie.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: r ? a : void 0,
                      displayMode: p ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      isDisabled: r,
                      isProtected: i,
                      isVerified: o,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: y ? g : void 0,
                      screenName: s,
                      socialContext: h,
                      testID: ae,
                      userId: u,
                      withInteractiveStyling: !1,
                      withLink: !1,
                    })
                  )
                },
              },
              {
                key: '_getSocialContext',
                value: function () {
                  var e = this.props.socialContext
                  if (e && e.following) {
                    var t = e.followed_by ? ce : se
                    return { contextType: ne.a.Follow, text: t }
                  }
                },
              },
              {
                key: '_getResultContext',
                value: function () {
                  var e = this.props,
                    t = e.resultContext,
                    n = e.source
                  if (t && t.display_string && t.types && n === re.d.SearchBox)
                    return {
                      contextType: (t.types.length ? ue[t.types[0].type] : void 0) || ne.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      m()(de, 'contextType', oe.a), m()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = $.forwardRef(de),
        fe = n('htQn'),
        me = n('iySH'),
        he = n('IMYl'),
        ve = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e, a)),
              m()(s()(i), '_onViewRef', function (e) {
                i._viewRef = e
                var t = i.props.onRef
                t && t(e)
              }),
              m()(s()(i), '_handleClick', function () {
                var e = i.props.item
                e.type !== re.b.User && i.props.onClick && i.props.onClick(e, i.isDisabled)
              }),
              (i._withNewTypeaheadUI =
                i.context.featureSwitches.isTrue('responsive_web_account_search_readability_enabled') &&
                e.source === re.d.SearchBox),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  ;(this._loaded = !0),
                    this._viewRef &&
                      (this._rafId = window.requestAnimationFrame(function () {
                        e._viewRef && e._viewRef.setNativeProps({ style: { opacity: 1 } })
                      }))
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.onRef
                  t && t !== e.onRef && this._viewRef && t(this._viewRef)
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._rafId && window.cancelAnimationFrame(this._rafId)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.domId,
                    n = e.isDisabled,
                    a = e.isFocused,
                    r = e.isInMultiSelect,
                    i = e.isSelected,
                    o = e.style
                  return v.a.createElement(
                    y.a,
                    { viewType: 'typeahead_result' },
                    v.a.createElement(
                      F.a,
                      {
                        accessibilityRole: 'option',
                        accessibilityState: {
                          checked: !(!r || !i) || void 0,
                          selected: n ? void 0 : (r && i) || (!r && !!a),
                        },
                        nativeID: t,
                        testID: g,
                      },
                      v.a.createElement(
                        fe.a,
                        {
                          accessibilityRole: r ? 'checkbox' : 'button',
                          disabled: n,
                          focusable: !0,
                          onPress: this._handleClick,
                          style: [a && ye.focused, ye.transitionStyles, this._loaded && ye.loaded, o],
                          viewRef: this._onViewRef,
                        },
                        this._renderResult(),
                      ),
                    ),
                  )
                },
              },
              {
                key: '_renderResult',
                value: function () {
                  var e = this.props,
                    t = e.disabledMessage,
                    n = e.isDisabled,
                    a = e.isSelected,
                    r = e.item,
                    i = e.onClick,
                    o = e.renderUserDecoration,
                    c = e.source
                  switch (r.type) {
                    case re.b.User:
                      var s = r.data,
                        l = o ? o({ userId: s.id_str, isSelected: a }) : void 0
                      return v.a.createElement(pe, {
                        avatarUri: s.profile_image_url_https,
                        canDm: !!s.can_dm,
                        canMediaTag: !!s.can_media_tag,
                        decoration: l || void 0,
                        disabledMessage: t,
                        isDisabled: n,
                        isProtected: !!s.protected,
                        isVerified: !!s.verified,
                        item: r,
                        name: s.name,
                        onItemClick: i,
                        resultContext: s.result_context,
                        screenName: s.screen_name,
                        socialContext: s.social_context,
                        source: c,
                        userId: s.id_str,
                        withNewTypeaheadUI: this._withNewTypeaheadUI,
                      })
                    case re.b.Event:
                      var u = r.data
                      return this._withNewTypeaheadUI
                        ? v.a.createElement(W.a, {
                            image: u.primary_image && u.primary_image.original_info,
                            style: ye.itemPadding,
                            supportText: u.supporting_text,
                            title: u.topic,
                            withNewTypeaheadUI: !0,
                          })
                        : v.a.createElement(V, {
                            event: u.topic,
                            image: u.primary_image && u.primary_image.original_info,
                            supportText: u.supporting_text,
                          })
                    case re.b.Hashtag:
                    case re.b.Topic:
                      var d = this.props.query,
                        p = r.data,
                        f = c === re.d.SearchBox
                      return v.a.createElement(Y, {
                        isDisabled: n,
                        query: d || '',
                        resultContext: p.result_context,
                        showIcon: f,
                        style: f ? ye.itemPadding : void 0,
                        topic: p.topic,
                      })
                    case re.b.DMConversation:
                      return (
                        !!this.context.loggedInUserId &&
                        v.a.createElement(D, {
                          conversationId: r.id,
                          isDisabled: n,
                          isSelected: a,
                          perspective: this.context.loggedInUserId,
                        })
                      )
                    case re.b.SettingGroup:
                      var m = r.data.text
                      return v.a.createElement(
                        F.a,
                        { style: ye.navigationLink },
                        v.a.createElement(j.b, { style: ye.content, weight: 'bold' }, m),
                        v.a.createElement(me.a, { style: ye.icon }),
                      )
                    case re.b.Setting:
                      var h = r.data.text
                      return v.a.createElement(
                        F.a,
                        { style: ye.navigationLink },
                        v.a.createElement(j.b, { style: ye.content }, h),
                        v.a.createElement(me.a, { style: ye.icon }),
                      )
                    case re.b.NoResult:
                      var y = r.data.text
                      return v.a.createElement(j.b, { style: ye.noResult }, y)
                    default:
                      return null
                  }
                },
              },
              {
                key: 'isDisabled',
                get: function () {
                  return !!this.props.isDisabled
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      m()(ve, 'contextType', oe.a)
      var ye = T.a.create(function (e) {
          return {
            checkIcon: { color: e.colors.primary },
            navigationLink: {
              alignItems: 'center',
              flexDirection: 'row',
              flexGrow: 1,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
            content: { flexGrow: 1, flexShrink: 1 },
            icon: { color: e.colors.gray700, paddingLeft: e.spaces.space12, flexShrink: 0 },
            noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            itemPadding: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
            },
            loaded: { opacity: 1 },
            focused: { backgroundColor: e.colors.gray0 },
            transitionStyles: { transitionProperty: 'opacity', transitionDuration: '250ms', opacity: 0 },
          }
        }),
        ge = function (e) {
          return e.isSelected ? v.a.createElement(he.a, { accessibilityHidden: !0, style: ye.checkIcon }) : null
        }
      t.b = ve
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('aWyx'),
        o = n('XnpN'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('rHpw'),
        u = n('TIdA'),
        d = n('A91F'),
        p = n('jhWN'),
        f = n('9Xij'),
        m = n('Znyr'),
        h = n('cm6r'),
        v = n('U+bB'),
        y = n('MWbm'),
        g = s.a.fd48249b,
        b = l.a.create(function (e) {
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
        w = l.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        x = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            y.a,
            { style: _.container },
            r.a.createElement(y.a, { style: _.left }, t),
            r.a.createElement(y.a, { style: _.right }, n),
          )
        },
        I = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            y.a,
            { style: w.container },
            r.a.createElement(y.a, { style: w.top }, n),
            r.a.createElement(y.a, { style: w.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              a = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return r.a.createElement(
              y.a,
              { key: t.id_str, style: b.container },
              r.a.createElement(p.a, { size: n || a, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  y.a,
                  { key: e.id_str, style: b.container },
                  r.a.createElement(p.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(f.a, { ratio: 1 }, r.a.createElement(x, { left: n[1], right: n[0] }))
            var a = r.a.createElement(I, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(x, { left: a, right: i })
          },
          a = e.conversation,
          c = e.link,
          s = e.perspective,
          _ = e.withBadge,
          w = a && a.avatar_image_https,
          E = a
            ? Object(o.a)(a, s).map(function (e) {
                return e.user
              })
            : [],
          C = E.slice(0, 3),
          k =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.a.createElement(u.a, {
                    accessibilityLabel: '',
                    aspectMode: d.a.SQUARE,
                    backgroundColor: l.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(a) ||
            (function (e) {
              return e ? r.a.createElement(v.a, { source: e }) : null
            })(w) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(y.a, { style: b.circle }, n(e))
            })(C),
          S =
            c ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, E),
          R = _ && null != a && a.participants ? Object.keys(a.participants).length - 1 : 0
        return k
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                f.a,
                { ratio: 1 },
                S ? r.a.createElement(h.a, { interactiveStyles: null, link: S }, k) : k,
              ),
              R
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      y.a,
                      { style: b.itemAccessory },
                      r.a.createElement(m.a, {
                        count: t,
                        standalone: !0,
                        style: b.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: g,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: R })
                : null,
            )
          : null
      }
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('7x/C'), n('Xrkv')),
        o = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var a = e.type,
          r = e.name,
          i = e.participants,
          s = void 0 === i ? {} : i
        if (a === o.a.GROUP && r) return r
        if (Object.keys(s).length) {
          if (a === o.a.GROUP && n) return u
          var l = Object(c.a)(e, t).map(function (e) {
            return e.user
          })
          return f(l, t, a)
        }
      }
      var f = function () {
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
            var c = r()(a, 1),
              s = c[0]
            return n === o.a.GROUP ? p({ name: s }) : s
          default:
            var l = !0
            return Object(i.a)(a, l)
        }
      }
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        h = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        v = n.n(h),
        y = n('+Kfv'),
        g = n('0yYu'),
        b = n('7nmT'),
        _ = n.n(b),
        w = n('ddV6'),
        x = n.n(w),
        I = n('3XMw'),
        E = n.n(I),
        C = n('kIAd'),
        k = n('JYMr'),
        S = n('rHpw'),
        R = E.a.f2b3fe06,
        T = S.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        O = function (e) {
          var t = e.isLoading,
            n = v.a.useState(!1),
            a = x()(n, 2),
            r = a[0],
            i = a[1]
          return (
            v.a.useEffect(
              function () {
                var e
                return (
                  t
                    ? (e = setTimeout(function () {
                        return i(!0)
                      }, C.a))
                    : i(!1),
                  function () {
                    return clearTimeout(e)
                  }
                )
              },
              [t],
            ),
            v.a.createElement(k.a, { ariaValueText: r ? R : '', indeterminate: r, style: !r && T.hidden })
          )
        },
        D = n('ZcYN'),
        F = n('MWbm'),
        L = n('oQhu'),
        j = n('w6IS'),
        P = n('MXDK'),
        M = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e)),
              m()(s()(i), '_setFocusedItemRef', function (e) {
                i._shouldScrollToFocusedItem &&
                  e &&
                  (Object(P.c)(i._getScrollParent(), e), (i._shouldScrollToFocusedItem = !1))
              }),
              m()(s()(i), '_resetScroll', function () {
                var e = i._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              m()(
                s()(i),
                '_getFlattenedItems',
                Object(L.a)(function (e) {
                  return Object(j.a)(e)
                }),
              ),
              m()(s()(i), '_handleItemClick', function (e, t) {
                var n = i.props,
                  a = n.items,
                  r = n.onItemClick,
                  o = i._getFlattenedItems(a).indexOf(e)
                e && !t && !i._shouldBlockInteractivity && r(e, o), i._resetFocus()
              }),
              m()(s()(i), '_getResultCount', function () {
                var e = i.props.items
                return i._getFlattenedItems(e).length
              }),
              m()(s()(i), '_setFocusIndex', function (e, t) {
                var n = i.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(i._shouldScrollToFocusedItem = t), i.setState({ focusIndex: e }), r && r(i._getFlattenedItems(a)[e])
              }),
              m()(s()(i), '_resetFocus', function () {
                i._setFocusIndex(i.props.withItemAlwaysSelected ? 0 : -1)
              }),
              m()(s()(i), 'focusNext', function () {
                var e = i.state.focusIndex,
                  t = i._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  i._setFocusIndex(n, !0)
                }
              }),
              m()(s()(i), 'focusPrevious', function () {
                var e = i.state.focusIndex,
                  t = i._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  i._setFocusIndex(n, !0)
                }
              }),
              m()(s()(i), 'hasFocusedItem', function () {
                var e = i.state.focusIndex,
                  t = i._getResultCount()
                return e >= 0 && t > e
              }),
              m()(s()(i), 'selectFocusedItem', function () {
                var e = i.state.focusIndex,
                  t = i.props,
                  n = t.getItemIsDisabled,
                  a = t.items
                if (i.hasFocusedItem()) {
                  var r = i._getFlattenedItems(a)[e],
                    o = !!n && n(r, r.data)
                  i._handleItemClick(r, o)
                }
              }),
              (i.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 }),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._resetFocus()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  clearTimeout(this._interactivityTimeout)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this
                  e.items !== this.props.items &&
                    (this._resetFocus(),
                    this._resetScroll(),
                    this._interactivityTimeout && clearTimeout(this._interactivityTimeout),
                    (this._shouldBlockInteractivity = !0),
                    (this._interactivityTimeout = setTimeout(function () {
                      t._shouldBlockInteractivity = !1
                    }, 500)))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.domId,
                    a = t.isLoading,
                    r = t.items,
                    i = t.renderCallout,
                    o = t.renderHeader,
                    c = t.renderNoResultsState,
                    s = t.selectedItems,
                    l = t.style,
                    u = a || r.length,
                    d = 0,
                    p = !!s
                  return u
                    ? v.a.createElement(
                        y.a,
                        { viewType: 'typeahead_dropdown' },
                        v.a.createElement(
                          F.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: l },
                          i ? i() : null,
                          v.a.createElement(O, { isLoading: !!a }),
                          o ? o() : null,
                          r.length
                            ? r.map(function (t, n) {
                                var a = !Array.isArray(r[n - 1]) && n > 0,
                                  i = n < r.length - 1,
                                  o = Array.isArray(t)
                                    ? e._renderTypeaheadGroup(t, d, a, i)
                                    : e._renderTypeaheadItem(t, d)
                                return (d += Array.isArray(t) ? t.length : 1), o
                              })
                            : null,
                        ),
                      )
                    : c
                    ? c()
                    : null
                },
              },
              {
                key: '_renderTypeaheadGroup',
                value: function (e, t, n, a) {
                  var r = this,
                    i = this.props.withSectionDivider
                  return v.a.createElement(
                    v.a.Fragment,
                    { key: 'typeaheadGroup-'.concat(t) },
                    i && n ? v.a.createElement(g.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                    e.map(function (e, n) {
                      return r._renderTypeaheadItem(e, t + n)
                    }),
                    i && a ? v.a.createElement(g.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                  )
                },
              },
              {
                key: '_renderTypeaheadItem',
                value: function (e, t) {
                  var n = this.props,
                    a = n.ariaDescendantId,
                    r = n.getItemDisabledMessage,
                    i = n.getItemIsDisabled,
                    o = n.query,
                    c = n.renderUserDecoration,
                    s = n.selectedItems,
                    l = n.source,
                    u = this.state.focusIndex,
                    d = !(!s || !e.id) && s.indexOf(e.id) >= 0,
                    p = !!s,
                    f = u === t,
                    m = i && i(e, e.data),
                    h = r && r(e, e.data)
                  return v.a.createElement(D.b, {
                    disabledMessage: h,
                    domId: f ? a : void 0,
                    isDisabled: m,
                    isFocused: f,
                    isInMultiSelect: p,
                    isSelected: d,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: f ? this._setFocusedItemRef : void 0,
                    query: o,
                    renderUserDecoration: c,
                    source: l,
                  })
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(P.a)(_.a.findDOMNode(this))
                    this._scrollParent = e === window ? null : e
                  }
                  return this._scrollParent
                },
              },
            ]),
            n
          )
        })(v.a.Component)
    },
    woHV: function (e, t, n) {
      'use strict'
      var a = n('yiKp'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('ERkP'), n('k/Ka')),
        s = n('rHpw').a.create({
          initial: {
            alignItems: 'stretch',
            borderWidth: 0,
            borderStyle: 'solid',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            padding: 0,
            position: 'relative',
            zIndex: 0,
            minHeight: 0,
            minWidth: 0,
          },
        }),
        l = ['style']
      t.a = function (e) {
        var t = e.style,
          n = o()(e, l)
        return Object(c.a)('form', r()(r()({}, n), {}, { action: '#', style: [s.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
