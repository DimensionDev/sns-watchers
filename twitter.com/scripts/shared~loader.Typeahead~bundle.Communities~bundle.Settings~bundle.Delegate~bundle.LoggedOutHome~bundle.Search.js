;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
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
      function f(e, t) {
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
            { entries: t.entryIdsByConversationId[a] || [], participants: m(i, n) },
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
              { entries: f(a, t), participants: m(i, n), social_proof: void 0 },
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
        return w
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        c = n('aWyx'),
        s = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('MWbm'),
        p = n('jV+4'),
        m = n('pjBI'),
        f = n('t62R'),
        h = n('rHpw'),
        v = n('p9G8'),
        y = u.a.cfd94063,
        g = u.a.b93ba92c,
        b = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        _ = h.a.create(function (e) {
          return { title: { maxWidth: '50%' }, dmGroup: { display: 'flex', flexDirection: 'column' } }
        }),
        w = function (e) {
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
            return Object(v.a)(t, a)
          }
          var o = b(n)
          return Object(v.b)(o, a)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          a = void 0 !== n && n,
          i = e.isMessageSearchTitle,
          l = void 0 !== i && i,
          u = e.newConversationParticipants,
          h = e.perspective,
          w = e.renderTimestamp,
          x = e.textColor,
          I = void 0 === x ? 'normal' : x,
          E = e.titleWeight,
          C = void 0 === E ? 'bold' : E,
          k = e.withParticipantsCount,
          S = void 0 !== k && k,
          T = e.withScreenName,
          O = void 0 === T || T,
          R = e.withVDLRefresh,
          D = void 0 !== R && R
        if (t) {
          var L = w ? w() : null
          if (t.type === c.a.ONE_TO_ONE) {
            var F = Object(s.a)(t, h).map(function (e) {
                return e.user
              }),
              M = r()(F, 1)[0],
              j = o.a.createElement(p.a, {
                color: I,
                isProtected: M.protected,
                isVerified: M.verified,
                name: M.name,
                screenName: M.screen_name,
                weight: C,
                withLink: !1,
                withScreenName: O,
              })
            return (D && !a) || l ? o.a.createElement(m.a, null, j, L) : j
          }
          var P = t.participants,
            N = D ? Object.keys(P).length - 1 : Object.keys(P).length
          if (a)
            return o.a.createElement(
              m.a,
              { color: I },
              o.a.createElement(f.b, { color: I, numberOfLines: 1, style: _.title, weight: C }, Object(v.a)(t, h, a)),
              D
                ? null
                : o.a.createElement(
                    f.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    y({ peopleCount: N }),
                  ),
            )
          var A = o.a.createElement(f.b, { color: I, numberOfLines: 1, weight: C }, Object(v.a)(t, h, a))
          return (D && !a) || l
            ? o.a.createElement(
                d.a,
                { style: _.dmGroup },
                o.a.createElement(m.a, null, A, L),
                S && o.a.createElement(f.b, { color: 'gray700', numberOfLines: 1 }, g({ peopleCount: N })),
              )
            : A
        }
        var U = b(u)
        return o.a.createElement(f.b, { color: I, numberOfLines: 1, weight: C }, Object(v.b)(U, h))
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
        m = n('tn7R'),
        f = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          a = e.participants,
          i = e.type,
          s = Object(m.a)(a),
          l = Object(f.a)(s, function (e) {
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
      n.d(t, 'b', function () {
        return ge
      }),
        n.d(t, 'a', function () {
          return we
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
        m = n('KEM+'),
        f = n.n(m),
        h = (n('ho0z'), n('ERkP')),
        v = n.n(h),
        y = n('+Kfv'),
        g = 'typeaheadResult',
        b = n('v6aA'),
        _ = n('AQOc'),
        w = n('V5Qi'),
        x = n('G6rE'),
        I = n('rxPX'),
        E = function (e, t) {
          return t.conversationId
        },
        C = function (e, t) {
          return Object(w.a)(e, E(0, t))
        },
        k = Object(I.a)()
          .propsFromState(function () {
            return { conversationId: E, conversation: C, users: x.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              a = { conversation: void 0 }
            return null != t && t.data && (a.conversation = Object(_.b)(t.data, void 0, n)), a
          }),
        S = n('aA19'),
        T = n('OhSZ'),
        O = n('5mJL'),
        R = n('rHpw'),
        D = R.a.create(function (e) {
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
        L = k(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            a = e.isSelected,
            r = e.perspective,
            i = v.a.useContext(b.a).featureSwitches,
            o = i.isTrue('dm_vdl_enabled') && i.isTrue('dm_vdl_inbox_p0_enabled')
          return t
            ? v.a.createElement(
                O.a,
                {
                  avatarCell: v.a.createElement(S.a, { conversation: t, perspective: r, size: 'xLarge' }),
                  avatarCellStyle: D.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: D.bodyColumn,
                  style: [D.root, !a && n && D.disabled],
                },
                v.a.createElement(T.b, {
                  conversation: t,
                  perspective: r,
                  withParticipantsCount: !0,
                  withVDLRefresh: o,
                }),
                we({ isSelected: a }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        M = n('LbZ7'),
        j = n('t62R'),
        P = n('9Xij'),
        N = n('TIdA'),
        A = n('A91F'),
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
                    { style: V.root },
                    v.a.createElement(
                      M.a,
                      { withGutter: !0 },
                      v.a.createElement(
                        F.a,
                        { style: V.bodyColumn },
                        a ? v.a.createElement(j.b, { color: 'gray700', size: 'subtext2' }, a) : null,
                        v.a.createElement(j.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? v.a.createElement(
                            F.a,
                            { style: V.coverContainer },
                            v.a.createElement(
                              P.a,
                              { ratio: 1 },
                              v.a.createElement(N.a, { accessibilityLabel: '', aspectMode: A.a.SQUARE, image: n }),
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
        z = '100px',
        V = R.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: z,
              maxWidth: z,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        W = U,
        G = n('5T6p'),
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
        B = n.n(H)
      var X = n('FiRh'),
        K = n('j7Bv'),
        Q = n('EHV7'),
        q = n('Gfoi')
      var Y = R.a.create(function (e) {
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
        Z = function (e) {
          var t = v.a.useContext(b.a).featureSwitches,
            n = e.isDisabled,
            a = e.query,
            r = e.resultContext,
            i = e.showIcon,
            o = e.style,
            c = (function (e, t) {
              var n,
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = B()(e),
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
                      m = l + e.length < o ? e.length : o - l,
                      f = d ? p - 1 : p,
                      h = d ? m - 1 : m
                    r = a
                      ? [f > 0 ? [0, f] : void 0, h !== e.length - 1 ? [h, e.length] : void 0].filter(Boolean)
                      : [[f, h]]
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
            })(e.topic, t.isTrue('responsive_web_typeahead_reverse_bolding_enabled') ? a : '', true),
            s = v.a.createElement(
              j.b,
              null,
              c.map(function (e, t) {
                return v.a.createElement(X.c, { key: ''.concat(e.text).concat(t), part: e })
              }),
            ),
            l = v.a.createElement(
              v.a.Fragment,
              null,
              s,
              r
                ? v.a.createElement(
                    F.a,
                    { style: Y.context },
                    r && r.types[0] && 'followable_topic' === r.types[0].type
                      ? v.a.createElement(Q.a, { style: Y.icon })
                      : null,
                    v.a.createElement(j.b, { color: 'gray700' }, r.display_string || ' '),
                  )
                : null,
            )
          return v.a.createElement(
            F.a,
            { style: [Y.root, n && Y.disabled, o] },
            i
              ? (function (e) {
                  var t = v.a.createElement(K.a, { Icon: q.a, color: 'neutral', size: 'xxxLarge', style: Y.searchIcon })
                  return v.a.createElement(
                    O.a,
                    {
                      avatarCell: t,
                      avatarCellStyle: Y.searchIconCell,
                      avatarSize: 'xxxLarge',
                      cellStyle: Y.wrapperCellStyle,
                    },
                    e,
                  )
                })(l)
              : l,
          )
        },
        J = (n('yH/f'), n('M0jS')),
        $ = function (e, t) {
          return Object(J.c)(e, t.userId)
        },
        ee = Object(I.a)().propsFromState(function () {
          return { userSpace: $ }
        }),
        te = n('3XMw'),
        ne = n.n(te),
        ae = n('tocL'),
        re = 'TypeaheadUser',
        ie = n('GZwR'),
        oe = n('IMA+'),
        ce = ne.a.ae2205d1,
        se = ne.a.d960b55b,
        le = ne.a.fd06b02f,
        ue = Object.freeze({
          num_of_followers: ae.a.Follow,
          bio: ae.a.TextOnly,
          location: ae.a.Location,
          num_tweets: ae.a.NewTweets,
          follow_relationship: ae.a.Follow,
          followers_follow: ae.a.Follow,
          social_proof: ae.a.SocialProof,
          follow_relationship_mutual_follow: ae.a.FollowMutual,
          follow_relationship_followed: ae.a.FollowFollowed,
          follow_relationship_following: ae.a.FollowFollowing,
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
              f()(s()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              f()(s()(e), '_handleClick', function () {
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
                    r = e.displayNameLabel,
                    i = e.isDisabled,
                    o = e.isProtected,
                    c = e.isVerified,
                    s = e.name,
                    l = e.screenName,
                    u = e.source,
                    d = e.userId,
                    p = e.userSpace,
                    m = e.withNewTypeaheadUI,
                    f = this.context.featureSwitches,
                    h = this._getSocialContext(),
                    y = this._getResultContext() || h,
                    g = u === ie.d.SearchBox,
                    b = p && f.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? p : void 0
                  return (
                    b && (b.accessibilityLabel = le({ screenName: l })),
                    v.a.createElement(oe.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: i ? a : void 0,
                      displayMode: m ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      displayNameLabel: r,
                      isDisabled: i,
                      isProtected: o,
                      isVerified: c,
                      name: s,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: g ? b : void 0,
                      screenName: l,
                      socialContext: y,
                      testID: re,
                      userId: d,
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
                    return { contextType: ae.a.Follow, text: t }
                  }
                },
              },
              {
                key: '_getResultContext',
                value: function () {
                  var e = this.props,
                    t = e.resultContext,
                    n = e.source
                  if (t && t.display_string && t.types && n === ie.d.SearchBox)
                    return {
                      contextType: (t.types.length ? ue[t.types[0].type] : void 0) || ae.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(v.a.PureComponent)
      f()(de, 'contextType', b.a), f()(de, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = ee.forwardRef(de),
        me = n('htQn'),
        fe = n('iySH'),
        he = n('IMYl'),
        ve = { viewType: 'typeahead_result' },
        ye = function (e) {
          return e.children
        }
      function ge(e) {
        return v.a.createElement(ye, { item: e.item }, v.a.createElement(be, e))
      }
      var be = (function (e) {
        u()(n, e)
        var t = p()(n)
        function n(e, a) {
          var i
          return (
            r()(this, n),
            (i = t.call(this, e, a)),
            f()(s()(i), '_onViewRef', function (e) {
              i._viewRef = e
              var t = i.props.onRef
              t && t(e)
            }),
            f()(s()(i), '_handleClick', function () {
              var e = i.props.item
              e.type !== ie.b.User && i.props.onClick && i.props.onClick(e, i.isDisabled)
            }),
            (i._withNewTypeaheadUI =
              i.context.featureSwitches.isTrue('responsive_web_account_search_readability_enabled') &&
              e.source === ie.d.SearchBox),
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
                  { behavioralEventContext: ve },
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
                      me.a,
                      {
                        accessibilityRole: r ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [a && _e.focused, _e.transitionStyles, this._loaded && _e.loaded, o],
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
                  n = e.getUserDisplayNameLabel,
                  a = e.isDisabled,
                  r = e.isSelected,
                  i = e.item,
                  o = e.onClick,
                  c = e.renderUserDecoration,
                  s = e.source
                switch (i.type) {
                  case ie.b.User:
                    var l = i.data,
                      u = c ? c({ userId: l.id_str, isSelected: r }) : void 0,
                      d = n ? n(i, l) : void 0
                    return v.a.createElement(pe, {
                      avatarUri: l.profile_image_url_https,
                      canDm: !!l.can_dm,
                      canMediaTag: !!l.can_media_tag,
                      decoration: u || void 0,
                      disabledMessage: t,
                      displayNameLabel: d,
                      isDisabled: a,
                      isProtected: !!l.protected,
                      isVerified: !!l.verified,
                      item: i,
                      name: l.name,
                      onItemClick: o,
                      resultContext: l.result_context,
                      screenName: l.screen_name,
                      socialContext: l.social_context,
                      source: s,
                      userId: l.id_str,
                      withNewTypeaheadUI: this._withNewTypeaheadUI,
                    })
                  case ie.b.Event:
                    var p = i.data
                    return this._withNewTypeaheadUI
                      ? v.a.createElement(G.a, {
                          image: p.primary_image && p.primary_image.original_info,
                          style: _e.itemPadding,
                          supportText: p.supporting_text,
                          title: p.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : v.a.createElement(W, {
                          event: p.topic,
                          image: p.primary_image && p.primary_image.original_info,
                          supportText: p.supporting_text,
                        })
                  case ie.b.Hashtag:
                  case ie.b.Topic:
                    var m = this.props.query,
                      f = i.data,
                      h = s === ie.d.SearchBox
                    return v.a.createElement(Z, {
                      isDisabled: a,
                      query: m || '',
                      resultContext: f.result_context,
                      showIcon: h,
                      style: h ? _e.itemPadding : void 0,
                      topic: f.topic,
                    })
                  case ie.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      v.a.createElement(L, {
                        conversationId: i.id,
                        isDisabled: a,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case ie.b.SettingGroup:
                    var y = i.data.text
                    return v.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      v.a.createElement(j.b, { style: _e.content, weight: 'bold' }, y),
                      v.a.createElement(fe.a, { style: _e.icon }),
                    )
                  case ie.b.Setting:
                    var g = i.data.text
                    return v.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      v.a.createElement(j.b, { style: _e.content }, g),
                      v.a.createElement(fe.a, { style: _e.icon }),
                    )
                  case ie.b.NoResult:
                    var b = i.data.text
                    return v.a.createElement(j.b, { style: _e.noResult }, b)
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
      f()(be, 'contextType', b.a)
      var _e = R.a.create(function (e) {
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
        we = function (e) {
          return e.isSelected ? v.a.createElement(he.a, { accessibilityHidden: !0, style: _e.checkIcon }) : null
        }
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
        l = n('aI6n'),
        u = n('rHpw'),
        d = n('TIdA'),
        p = n('A91F'),
        m = n('jhWN'),
        f = n('9Xij'),
        h = n('Znyr'),
        v = n('cm6r'),
        y = n('U+bB'),
        g = n('MWbm'),
        b = s.a.fd48249b,
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
        w = u.a.create(function (e) {
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
        x = u.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        I = function (e) {
          var t = e.left,
            n = e.right
          return r.a.createElement(
            g.a,
            { style: w.container },
            r.a.createElement(g.a, { style: w.left }, t),
            r.a.createElement(g.a, { style: w.right }, n),
          )
        },
        E = function (e) {
          var t = e.bottom,
            n = e.top
          return r.a.createElement(
            g.a,
            { style: x.container },
            r.a.createElement(g.a, { style: x.top }, n),
            r.a.createElement(g.a, { style: x.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size
            return r.a.createElement(
              g.a,
              { key: t.id_str, style: _.container },
              r.a.createElement(m.a, { size: n || 'xxLarge', uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.a.createElement(
                  g.a,
                  { key: e.id_str, style: _.container },
                  r.a.createElement(m.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.a.createElement(f.a, { ratio: 1 }, r.a.createElement(I, { left: n[1], right: n[0] }))
            var a = r.a.createElement(E, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.a.createElement(I, { left: a, right: i })
          },
          a = e.conversation,
          c = e.link,
          s = e.perspective,
          w = e.withBadge,
          x = a && a.avatar_image_https,
          C = a
            ? Object(o.a)(a, s).map(function (e) {
                return e.user
              })
            : [],
          k = C.slice(0, 3),
          S =
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
              return e ? r.a.createElement(y.a, { source: e }) : null
            })(x) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.a.createElement(g.a, { style: _.circle }, n(e))
            })(k),
          T =
            c ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(a, C),
          O = w && null != a && a.participants ? Object.keys(a.participants).length - 1 : 0
        return S
          ? r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(
                f.a,
                { ratio: 1 },
                T ? r.a.createElement(v.a, { interactiveStyles: null, link: T, testID: l.a.conversationAvatar }, S) : S,
              ),
              O
                ? (function (e) {
                    var t = e.badgeCount
                    return r.a.createElement(
                      g.a,
                      { style: _.itemAccessory },
                      r.a.createElement(h.a, {
                        count: t,
                        standalone: !0,
                        style: _.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: b,
                        withTruncatedCount: !1,
                      }),
                    )
                  })({ badgeCount: O })
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
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
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
          return m(l, t, a)
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
        return N
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
        m = n('KEM+'),
        f = n.n(m),
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
        T = E.a.f2b3fe06,
        O = S.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        R = function (e) {
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
            v.a.createElement(k.a, { ariaValueText: r ? T : '', indeterminate: r, style: !r && O.hidden })
          )
        },
        D = n('ZcYN'),
        L = n('MWbm'),
        F = n('oQhu'),
        M = n('w6IS'),
        j = n('MXDK'),
        P = { viewType: 'typeahead_dropdown' },
        N = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n(e, a) {
            var i
            return (
              r()(this, n),
              (i = t.call(this, e)),
              f()(s()(i), '_setFocusedItemRef', function (e) {
                i._shouldScrollToFocusedItem &&
                  e &&
                  (Object(j.c)(i._getScrollParent(), e), (i._shouldScrollToFocusedItem = !1))
              }),
              f()(s()(i), '_resetScroll', function () {
                var e = i._getScrollParent()
                e && (e.scrollTop = 0)
              }),
              f()(
                s()(i),
                '_getFlattenedItems',
                Object(F.a)(function (e) {
                  return Object(M.a)(e)
                }),
              ),
              f()(s()(i), '_handleItemClick', function (e, t) {
                var n = i.props,
                  a = n.items,
                  r = n.onItemClick,
                  o = i._getFlattenedItems(a).indexOf(e)
                e && !t && !i._shouldBlockInteractivity && r(e, o), i._resetFocus()
              }),
              f()(s()(i), '_getResultCount', function () {
                var e = i.props.items
                return i._getFlattenedItems(e).length
              }),
              f()(s()(i), '_setFocusIndex', function (e, t) {
                var n = i.props,
                  a = n.items,
                  r = n.onItemFocusChanged
                ;(i._shouldScrollToFocusedItem = t), i.setState({ focusIndex: e }), r && r(i._getFlattenedItems(a)[e])
              }),
              f()(s()(i), '_resetFocus', function () {
                i._setFocusIndex(i.props.withItemAlwaysSelected ? 0 : -1)
              }),
              f()(s()(i), 'focusNext', function () {
                var e = i.state.focusIndex,
                  t = i._getResultCount()
                if (0 !== t) {
                  var n = e + 1 >= t ? 0 : e + 1
                  i._setFocusIndex(n, !0)
                }
              }),
              f()(s()(i), 'focusPrevious', function () {
                var e = i.state.focusIndex,
                  t = i._getResultCount()
                if (0 !== t) {
                  var n = e - 1 < 0 ? t - 1 : e - 1
                  i._setFocusIndex(n, !0)
                }
              }),
              f()(s()(i), 'hasFocusedItem', function () {
                var e = i.state.focusIndex,
                  t = i._getResultCount()
                return e >= 0 && t > e
              }),
              f()(s()(i), 'selectFocusedItem', function () {
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
                        { behavioralEventContext: P },
                        v.a.createElement(
                          L.a,
                          { accessibilityMultiSelectable: p, accessibilityRole: 'listbox', nativeID: n, style: l },
                          i ? i() : null,
                          v.a.createElement(R, { isLoading: !!a }),
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
                    o = n.getUserDisplayNameLabel,
                    c = n.query,
                    s = n.renderUserDecoration,
                    l = n.selectedItems,
                    u = n.source,
                    d = this.state.focusIndex,
                    p = !(!l || !e.id) && l.indexOf(e.id) >= 0,
                    m = !!l,
                    f = d === t,
                    h = i && i(e, e.data),
                    y = r && r(e, e.data)
                  return v.a.createElement(D.b, {
                    disabledMessage: y,
                    domId: f ? a : void 0,
                    getUserDisplayNameLabel: o,
                    isDisabled: h,
                    isFocused: f,
                    isInMultiSelect: m,
                    isSelected: p,
                    item: e,
                    key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                    onClick: this._handleItemClick,
                    onRef: f ? this._setFocusedItemRef : void 0,
                    query: c,
                    renderUserDecoration: s,
                    source: u,
                  })
                },
              },
              {
                key: '_getScrollParent',
                value: function () {
                  if (!this._scrollParent) {
                    var e = Object(j.a)(_.a.findDOMNode(this))
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
