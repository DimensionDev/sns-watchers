;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    '3EFP': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return a
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
      var r = 'ArrowDown',
        a = 'ArrowUp',
        i = 'Enter',
        o = 'Escape',
        c = 'ESC',
        s = 'Tab'
    },
    '5T6p': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
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
          r = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return a.a.createElement(
          i.a,
          { style: [l.root, n] },
          a.a.createElement(
            i.a,
            { style: [l.coverContainer, d ? l.largeCellThumbnail : l.cellThumbnail] },
            t ? a.a.createElement(o.a, { accessibilityLabel: '', aspectMode: c.a.SQUARE, image: t }) : null,
          ),
          a.a.createElement(
            i.a,
            { style: l.bodyColumn },
            r ? a.a.createElement(s.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, r) : null,
            a.a.createElement(s.b, { numberOfLines: 2, weight: 'bold' }, u),
          ),
        )
      }
    },
    AQOc: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        s = n('aWyx')
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
        f = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var r = n.user_id,
              a = t[r] || { id_str: r }
            return (e[r] = u(u({}, n), {}, { user: a })), e
          }, {})
        }
      function p(e, t) {
        var n = t.entries
        return (t.entryIdsByConversationId[e] || [])
          .map(function (e) {
            return n[e] && n[e].data
          })
          .filter(Boolean)
      }
      var m = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.conversation_id,
            a = e.participants,
            i = o()(e, ['conversation_id', 'participants'])
          return u(
            u({ conversation_id: r }, i),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: f(a, n) },
          )
        },
        h = function (e, t, n) {
          var r = e.conversation_id,
            a = e.participants,
            i = e.social_proof,
            l = u(
              u({ conversation_id: r }, o()(e, ['conversation_id', 'participants', 'social_proof'])),
              {},
              { entries: p(r, t), participants: f(a, n), social_proof: void 0 },
            )
          return (
            i &&
              (l.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === s.d.MUTUAL_FRIENDS) {
                    var n = t.users
                    return u(
                      u({}, o()(t, ['users'])),
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
              })(i, n)),
            l
          )
        }
    },
    OhSZ: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(i),
        c = n('aWyx'),
        s = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('jV+4'),
        f = n('pjBI'),
        p = n('t62R'),
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
            r = e.perspective
          if (t) {
            if (t.type === c.a.ONE_TO_ONE) {
              var i = Object(s.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(i, 1)[0].name
            }
            return Object(h.a)(t, r)
          }
          var o = y(n)
          return Object(h.b)(o, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
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
          O = void 0 === E || E,
          R = e.withVDLRefresh,
          C = void 0 !== R && R
        if (t) {
          var k = b ? b() : null
          if (t.type === c.a.ONE_TO_ONE) {
            var S = Object(s.a)(t, m).map(function (e) {
                return e.user
              }),
              T = a()(S, 1)[0],
              j = o.a.createElement(d.a, {
                color: w,
                isProtected: T.protected,
                isVerified: T.verified,
                name: T.name,
                screenName: T.screen_name,
                weight: I,
                withLink: !1,
                withScreenName: O,
              })
            return (C && !r) || l ? o.a.createElement(f.a, null, j, k) : j
          }
          var D = t.participants,
            P = Object.keys(D).length
          if (r)
            return o.a.createElement(
              f.a,
              { color: w },
              o.a.createElement(p.b, { color: w, numberOfLines: 1, style: g.title, weight: I }, Object(h.a)(t, m, r)),
              C
                ? null
                : o.a.createElement(
                    p.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: P }),
                  ),
            )
          var F = o.a.createElement(p.b, { color: w, numberOfLines: 1, weight: I }, Object(h.a)(t, m, r))
          return (C && !r) || l ? o.a.createElement(f.a, null, F, k) : F
        }
        var L = y(u)
        return o.a.createElement(p.b, { color: w, numberOfLines: 1, weight: I }, Object(h.b)(L, m))
      }
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('AQ79'),
        a = function (e, t) {
          return e[r.c] ? e[r.c].conversations[t] : null
        }
    },
    XnpN: function (e, t, n) {
      'use strict'
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('2G9S'), n('tQbP'), n('aWyx')),
        s = (n('6U7i'), n('LW0h'), n('z84I'), n('t0aI')),
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
          return Object(s.a)(n.id_str, r.id_str)
        },
        f = function (e) {
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
        p = n('tn7R'),
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          i = e.type,
          s = Object(p.a)(r),
          l = Object(m.a)(s, function (e) {
            return e.user.id_str === t
          }),
          u = o()(l, 2),
          d = u[0],
          h = u[1]
        return h.length ? (i === c.a.GROUP && 1 === h.length ? [].concat(a()(d), a()(h)) : n ? h.sort(f(n)) : h) : d
      }
    },
    ZcYN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return we
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('ho0z'), n('ERkP')),
        g = n.n(y),
        b = n('+Kfv'),
        _ = 'typeaheadResult',
        w = n('AQOc'),
        x = n('V5Qi'),
        I = n('G6rE'),
        E = n('rxPX'),
        O = function (e, t) {
          return t.conversationId
        },
        R = function (e, t) {
          return Object(x.a)(e, O(0, t))
        },
        C = Object(E.a)()
          .propsFromState(function () {
            return { conversationId: O, conversation: R, users: I.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              r = { conversation: void 0 }
            return null != t && t.data && (r.conversation = Object(w.b)(t.data, void 0, n)), r
          }),
        k = n('aA19'),
        S = n('OhSZ'),
        T = n('5mJL'),
        j = n('rHpw'),
        D = j.a.create(function (e) {
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
        P = C(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            r = e.isSelected,
            a = e.perspective
          return t
            ? g.a.createElement(
                T.a,
                {
                  avatarCell: g.a.createElement(k.a, { conversation: t, perspective: a, size: 'xLarge' }),
                  avatarCellStyle: D.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: D.bodyColumn,
                  style: [D.root, !r && n && D.disabled],
                },
                g.a.createElement(S.b, { conversation: t, perspective: a }),
                we({ isSelected: r }),
              )
            : null
        }),
        F = (n('uFXj'), n('MWbm')),
        L = n('LbZ7'),
        M = n('t62R'),
        A = n('9Xij'),
        N = n('TIdA'),
        U = n('A91F')
      function z(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var H = (function (e) {
          u()(n, e)
          var t = z(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.event,
                    n = e.image,
                    r = e.supportText
                  return g.a.createElement(
                    F.a,
                    { style: V.root },
                    g.a.createElement(
                      L.a,
                      { withGutter: !0 },
                      g.a.createElement(
                        F.a,
                        { style: V.bodyColumn },
                        r ? g.a.createElement(M.b, { color: 'gray700', size: 'subtext2' }, r) : null,
                        g.a.createElement(M.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? g.a.createElement(
                            F.a,
                            { style: V.coverContainer },
                            g.a.createElement(
                              A.a,
                              { ratio: 1 },
                              g.a.createElement(N.a, { accessibilityLabel: '', aspectMode: U.a.SQUARE, image: n }),
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
        })(g.a.PureComponent),
        B = '100px',
        V = j.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 },
            bodyColumn: { flexGrow: 7, justifyContent: 'center' },
            coverContainer: {
              backgroundColor: e.colors.gray200,
              borderRadius: e.borderRadii.small,
              flexGrow: 1,
              justifyContent: 'flex-end',
              maxHeight: B,
              maxWidth: B,
              overflow: 'hidden',
              width: '25%',
            },
          }
        }),
        W = H,
        G = n('5T6p'),
        X =
          (n('z84I'),
          n('2G9S'),
          n('vrRf'),
          n('LW0h'),
          n('kFen'),
          n('qd3W'),
          n('M+/F'),
          n('jQ3i'),
          n('x4t0'),
          n('MvUL'),
          n('KqXw'),
          n('yyPN')),
        K = n.n(X)
      var Q = n('EHV7'),
        Z = n('FiRh')
      var Y = j.a.create(function (e) {
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
          }
        }),
        q = function (e) {
          var t = e.isDisabled,
            n = e.query,
            r = e.resultContext,
            a = (function (e, t) {
              var n,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = K()(e),
                i = e.toLowerCase().indexOf(t.toLowerCase()),
                o = i + t.length
              if (0 === a.length) {
                var c = r ? [i > 0 ? [0, i] : void 0, [o, e.length]].filter(Boolean) : [[i, o]]
                n = [{ highlights: -1 !== i ? c : void 0, text: e, entityType: 'text', prefix: '' }]
              } else {
                var s = a.flatMap(function (t, n, r) {
                    var a = t.indices,
                      i = 0 === n ? 0 : r[n - 1].indices[1],
                      o = n === r.length - 1,
                      c = []
                    return (
                      i !== a[0] && c.push(e.slice(i, a[0])),
                      c.push(e.substring(a[0], a[1])),
                      o && e.length !== a[1] && c.push(e.slice(a[1])),
                      c
                    )
                  }),
                  l = 0,
                  u = s.map(function (e, t, n) {
                    l += t > 0 ? n[t - 1].length : 0
                    var r = e.length
                    return { runningTotal: l, containsQuery: -1 !== i && l + r >= i && l < o }
                  })
                n = s.map(function (e, t) {
                  var n,
                    a,
                    c = u[t],
                    s = c.containsQuery,
                    l = c.runningTotal,
                    d = e.includes('#')
                  if (r && !s) a = [[0, e.length]]
                  else if (s) {
                    var f = l < i ? i - l : 0,
                      p = l + e.length < o ? e.length : o - l,
                      m = d ? f - 1 : f,
                      h = d ? p - 1 : p
                    a = r
                      ? [m > 0 ? [0, m] : void 0, h !== e.length - 1 ? [h, e.length] : void 0].filter(Boolean)
                      : [[m, h]]
                  }
                  var v = d ? ''.concat(null == e ? void 0 : e.replace('#', '')) : e
                  return {
                    highlights: null !== (n = a) && void 0 !== n && n.length ? a : void 0,
                    text: v,
                    entityType: d ? 'hashtag' : 'text',
                    prefix: d ? '#' : '',
                  }
                })
              }
              return n
            })(e.topic, n, true),
            i = g.a.createElement(
              M.b,
              null,
              a.map(function (e, t) {
                return g.a.createElement(Z.b, { key: ''.concat(e.text).concat(t), part: e })
              }),
            )
          return g.a.createElement(
            F.a,
            { style: [Y.root, t && Y.disabled] },
            i,
            r
              ? g.a.createElement(
                  F.a,
                  { style: Y.context },
                  r && r.types[0] && 'followable_topic' === r.types[0].type
                    ? g.a.createElement(Q.a, { style: Y.icon })
                    : null,
                  g.a.createElement(M.b, { color: 'gray700' }, r.display_string),
                )
              : null,
          )
        },
        J = (n('yH/f'), n('M0jS')),
        $ = function (e, t) {
          return Object(J.c)(e, t.userId)
        },
        ee = Object(E.a)().propsFromState(function () {
          return { userSpace: $ }
        }),
        te = n('3XMw'),
        ne = n.n(te),
        re = n('tocL'),
        ae = 'TypeaheadUser',
        ie = n('GZwR'),
        oe = n('IMA+'),
        ce = n('v6aA')
      function se(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var le = ne.a.ae2205d1,
        ue = ne.a.d960b55b,
        de = ne.a.fd06b02f,
        fe = Object.freeze({
          num_of_followers: re.a.Follow,
          bio: re.a.TextOnly,
          location: re.a.Location,
          num_tweets: re.a.NewTweets,
          follow_relationship: re.a.Follow,
          followers_follow: re.a.Follow,
          social_proof: re.a.SocialProof,
          follow_relationship_mutual_follow: re.a.FollowMutual,
          follow_relationship_followed: re.a.FollowFollowed,
          follow_relationship_following: re.a.FollowFollowing,
        }),
        pe = (function (e) {
          u()(n, e)
          var t = se(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(s()(e), '_handleAvatarClick', function () {
                e.props.userSpace || e._handleClick()
              }),
              v()(s()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.isDisabled,
                  r = t.item,
                  a = t.onItemClick
                a && a(r, !!n)
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
                    r = e.disabledMessage,
                    a = e.isDisabled,
                    i = e.isProtected,
                    o = e.isVerified,
                    c = e.name,
                    s = e.screenName,
                    l = e.source,
                    u = e.userId,
                    d = e.userSpace,
                    f = e.withNewTypeaheadUI,
                    p = this.context.featureSwitches,
                    m = this._getSocialContext(),
                    h = this._getResultContext() || m,
                    v = l === ie.d.SearchBox,
                    y = d && p.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? d : void 0
                  return (
                    y && (y.accessibilityLabel = de({ screenName: s })),
                    g.a.createElement(oe.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: a ? r : void 0,
                      displayMode: f ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      isDisabled: a,
                      isProtected: i,
                      isVerified: o,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: v ? y : void 0,
                      screenName: s,
                      socialContext: h,
                      testID: ae,
                      userId: u,
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
                    var t = e.followed_by ? le : ue
                    return { contextType: re.a.Follow, text: t }
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
                      contextType: (t.types.length ? fe[t.types[0].type] : void 0) || re.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(pe, 'contextType', ce.a), v()(pe, 'defaultProps', { withNewTypeaheadUI: !1 })
      var me = ee.forwardRef(pe),
        he = n('htQn'),
        ve = n('iySH'),
        ye = n('IMYl')
      function ge(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var be = (function (e) {
        u()(n, e)
        var t = ge(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e, r)),
            v()(s()(i), '_onViewRef', function (e) {
              i._viewRef = e
              var t = i.props.onRef
              t && t(e)
            }),
            v()(s()(i), '_handleClick', function () {
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
                  r = e.isFocused,
                  a = e.isInMultiSelect,
                  i = e.isSelected,
                  o = e.style
                return g.a.createElement(
                  b.a,
                  { viewType: 'typeahead_result' },
                  g.a.createElement(
                    F.a,
                    {
                      accessibilityRole: 'option',
                      accessibilityState: {
                        checked: !(!a || !i) || void 0,
                        selected: n ? void 0 : (a && i) || (!a && !!r),
                      },
                      nativeID: t,
                      testID: _,
                    },
                    g.a.createElement(
                      he.a,
                      {
                        accessibilityRole: a ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [r && _e.focused, _e.transitionStyles, o],
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
                  r = e.isSelected,
                  a = e.item,
                  i = e.onClick,
                  o = e.renderUserDecoration,
                  c = e.source
                switch (a.type) {
                  case ie.b.User:
                    var s = a.data,
                      l = o ? o({ userId: s.id_str, isSelected: r }) : void 0
                    return g.a.createElement(me, {
                      avatarUri: s.profile_image_url_https,
                      canDm: !!s.can_dm,
                      canMediaTag: !!s.can_media_tag,
                      decoration: l || void 0,
                      disabledMessage: t,
                      isDisabled: n,
                      isProtected: !!s.protected,
                      isVerified: !!s.verified,
                      item: a,
                      name: s.name,
                      onItemClick: i,
                      resultContext: s.result_context,
                      screenName: s.screen_name,
                      socialContext: s.social_context,
                      source: c,
                      userId: s.id_str,
                      withNewTypeaheadUI: this._withNewTypeaheadUI,
                    })
                  case ie.b.Event:
                    var u = a.data
                    return this._withNewTypeaheadUI
                      ? g.a.createElement(G.a, {
                          image: u.primary_image && u.primary_image.original_info,
                          style: _e.itemPadding,
                          supportText: u.supporting_text,
                          title: u.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : g.a.createElement(W, {
                          event: u.topic,
                          image: u.primary_image && u.primary_image.original_info,
                          supportText: u.supporting_text,
                        })
                  case ie.b.Hashtag:
                  case ie.b.Topic:
                    var d = this.props.query,
                      f = a.data
                    return g.a.createElement(q, {
                      isDisabled: n,
                      query: d || '',
                      resultContext: f.result_context,
                      topic: f.topic,
                    })
                  case ie.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      g.a.createElement(P, {
                        conversationId: a.id,
                        isDisabled: n,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case ie.b.Setting:
                    var p = a.data.text
                    return g.a.createElement(
                      F.a,
                      { style: _e.navigationLink },
                      g.a.createElement(M.b, { style: _e.content }, p),
                      g.a.createElement(ve.a, { style: _e.icon }),
                    )
                  case ie.b.NoResult:
                    var m = a.data.text
                    return g.a.createElement(M.b, { style: _e.noResult }, m)
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
      })(g.a.Component)
      v()(be, 'contextType', ce.a)
      var _e = j.a.create(function (e) {
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
            focused: { backgroundColor: e.colors.gray0 },
            transitionStyles: { transitionProperty: 'opacity', transitionDuration: '250ms', opacity: 0 },
          }
        }),
        we = function (e) {
          return e.isSelected ? g.a.createElement(ye.a, { accessibilityHidden: !0, style: _e.checkIcon }) : null
        }
      t.b = be
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('aWyx'),
        o = n('XnpN'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('rHpw'),
        u = n('TIdA'),
        d = n('A91F'),
        f = n('jhWN'),
        p = n('9Xij'),
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
          return a.a.createElement(
            y.a,
            { style: _.container },
            a.a.createElement(y.a, { style: _.left }, t),
            a.a.createElement(y.a, { style: _.right }, n),
          )
        },
        I = function (e) {
          var t = e.bottom,
            n = e.top
          return a.a.createElement(
            y.a,
            { style: w.container },
            a.a.createElement(y.a, { style: w.top }, n),
            a.a.createElement(y.a, { style: w.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              r = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return a.a.createElement(
              y.a,
              { key: t.id_str, style: b.container },
              a.a.createElement(f.a, { size: n || r, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var r = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return a.a.createElement(
                  y.a,
                  { key: e.id_str, style: b.container },
                  a.a.createElement(f.a, {
                    aspectRatio: r,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return a.a.createElement(p.a, { ratio: 1 }, a.a.createElement(x, { left: n[1], right: n[0] }))
            var r = a.a.createElement(I, { bottom: n[2], top: n[1] }),
              i = n[0]
            return a.a.createElement(x, { left: r, right: i })
          },
          r = e.conversation,
          c = e.link,
          s = e.perspective,
          _ = e.withBadge,
          w = r && r.avatar_image_https,
          E = r
            ? Object(o.a)(r, s).map(function (e) {
                return e.user
              })
            : [],
          O = E.slice(0, 3),
          R =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? a.a.createElement(u.a, {
                    accessibilityLabel: '',
                    aspectMode: d.a.SQUARE,
                    backgroundColor: l.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(r) ||
            (function (e) {
              return e ? a.a.createElement(v.a, { source: e }) : null
            })(w) ||
            (function (e) {
              var r = e.length
              return 0 === r ? null : 1 === r ? t(e[0]) : a.a.createElement(y.a, { style: b.circle }, n(e))
            })(O),
          C =
            c ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, E),
          k = _ && null != r && r.participants ? Object.keys(r.participants).length - 1 : 0
        return R
          ? a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                p.a,
                { ratio: 1 },
                C ? a.a.createElement(h.a, { interactiveStyles: null, link: C }, R) : R,
              ),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return a.a.createElement(
                      y.a,
                      { style: b.itemAccessory },
                      a.a.createElement(m.a, {
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
                  })({ badgeCount: k })
                : null,
            )
          : null
      }
    },
    p9G8: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('Xrkv')),
        o = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        f = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          a = e.name,
          i = e.participants,
          s = void 0 === i ? {} : i
        if (r === o.a.GROUP && a) return a
        if (Object.keys(s).length) {
          if (r === o.a.GROUP && n) return u
          var l = Object(c.a)(e, t).map(function (e) {
            return e.user
          })
          return p(l, t, r)
        }
      }
      var p = function () {
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
            var c = a()(r, 1),
              s = c[0]
            return n === o.a.GROUP ? f({ name: s }) : s
          default:
            var l = !0
            return Object(i.a)(r, l)
        }
      }
    },
    tAeL: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return U
      })
      n('OZaJ')
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        f = n.n(d),
        p = n('AuHH'),
        m = n.n(p),
        h = n('KEM+'),
        v = n.n(h),
        y = (n('vrRf'), n('z84I'), n('2G9S'), n('ERkP')),
        g = n.n(y),
        b = n('+Kfv'),
        _ = n('0yYu'),
        w = n('7nmT'),
        x = n.n(w),
        I = n('ddV6'),
        E = n.n(I),
        O = n('3XMw'),
        R = n.n(O),
        C = n('kIAd'),
        k = n('JYMr'),
        S = n('rHpw'),
        T = R.a.f2b3fe06,
        j = S.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        D = function (e) {
          var t = e.isLoading,
            n = g.a.useState(!1),
            r = E()(n, 2),
            a = r[0],
            i = r[1]
          return (
            g.a.useEffect(
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
            g.a.createElement(k.a, { ariaValueText: a ? T : '', indeterminate: a, style: !a && j.hidden })
          )
        },
        P = n('ZcYN'),
        F = n('MWbm'),
        L = n('oQhu'),
        M = n('w6IS'),
        A = n('MXDK')
      function N(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' == typeof Proxy) return !0
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = m()(e)
          if (t) {
            var a = m()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return f()(this, n)
        }
      }
      var U = (function (e) {
        u()(n, e)
        var t = N(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e)),
            v()(s()(i), '_setFocusedItemRef', function (e) {
              i._shouldScrollToFocusedItem &&
                e &&
                (Object(A.c)(i._getScrollParent(), e), (i._shouldScrollToFocusedItem = !1))
            }),
            v()(s()(i), '_resetScroll', function () {
              var e = i._getScrollParent()
              e && (e.scrollTop = 0)
            }),
            v()(
              s()(i),
              '_getFlattenedItems',
              Object(L.a)(function (e) {
                return Object(M.a)(e)
              }),
            ),
            v()(s()(i), '_handleItemClick', function (e, t) {
              var n = i.props,
                r = n.items,
                a = n.onItemClick,
                o = i._getFlattenedItems(r).indexOf(e)
              e && !t && !i._shouldBlockInteractivity && a(e, o), i._resetFocus()
            }),
            v()(s()(i), '_getResultCount', function () {
              var e = i.props.items
              return i._getFlattenedItems(e).length
            }),
            v()(s()(i), '_setFocusIndex', function (e, t) {
              var n = i.props,
                r = n.items,
                a = n.onItemFocusChanged
              ;(i._shouldScrollToFocusedItem = t), i.setState({ focusIndex: e }), a && a(i._getFlattenedItems(r)[e])
            }),
            v()(s()(i), '_resetFocus', function () {
              i._setFocusIndex(i.props.withItemAlwaysSelected ? 0 : -1)
            }),
            v()(s()(i), 'focusNext', function () {
              var e = i.state.focusIndex,
                t = i._getResultCount()
              if (0 !== t) {
                var n = e + 1 >= t ? 0 : e + 1
                i._setFocusIndex(n, !0)
              }
            }),
            v()(s()(i), 'focusPrevious', function () {
              var e = i.state.focusIndex,
                t = i._getResultCount()
              if (0 !== t) {
                var n = e - 1 < 0 ? t - 1 : e - 1
                i._setFocusIndex(n, !0)
              }
            }),
            v()(s()(i), 'hasFocusedItem', function () {
              var e = i.state.focusIndex,
                t = i._getResultCount()
              return e >= 0 && t > e
            }),
            v()(s()(i), 'selectFocusedItem', function () {
              var e = i.state.focusIndex,
                t = i.props,
                n = t.getItemIsDisabled,
                r = t.items
              if (i.hasFocusedItem()) {
                var a = i._getFlattenedItems(r)[e],
                  o = !!n && n(a, a.data)
                i._handleItemClick(a, o)
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
                  r = t.isLoading,
                  a = t.items,
                  i = t.renderCallout,
                  o = t.renderHeader,
                  c = t.renderNoResultsState,
                  s = t.selectedItems,
                  l = t.style,
                  u = r || a.length,
                  d = 0,
                  f = !!s
                return u
                  ? g.a.createElement(
                      b.a,
                      { viewType: 'typeahead_dropdown' },
                      g.a.createElement(
                        F.a,
                        { accessibilityMultiSelectable: f, accessibilityRole: 'listbox', nativeID: n, style: l },
                        i ? i() : null,
                        g.a.createElement(D, { isLoading: !!r }),
                        o ? o() : null,
                        a.length
                          ? a.map(function (t, n) {
                              var r = !Array.isArray(a[n - 1]) && n > 0,
                                i = n < a.length - 1,
                                o = Array.isArray(t)
                                  ? e._renderTypeaheadGroup(t, d, r, i)
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
              value: function (e, t, n, r) {
                var a = this,
                  i = this.props.withSectionDivider
                return g.a.createElement(
                  g.a.Fragment,
                  { key: 'typeaheadGroup-'.concat(t) },
                  i && n ? g.a.createElement(_.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                  e.map(function (e, n) {
                    return a._renderTypeaheadItem(e, t + n)
                  }),
                  i && r ? g.a.createElement(_.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
                )
              },
            },
            {
              key: '_renderTypeaheadItem',
              value: function (e, t) {
                var n = this.props,
                  r = n.ariaDescendantId,
                  a = n.getItemDisabledMessage,
                  i = n.getItemIsDisabled,
                  o = n.query,
                  c = n.renderUserDecoration,
                  s = n.selectedItems,
                  l = n.source,
                  u = this.state.focusIndex,
                  d = !(!s || !e.id) && s.indexOf(e.id) >= 0,
                  f = !!s,
                  p = u === t,
                  m = i && i(e, e.data),
                  h = a && a(e, e.data)
                return g.a.createElement(P.b, {
                  disabledMessage: h,
                  domId: p ? r : void 0,
                  isDisabled: m,
                  isFocused: p,
                  isInMultiSelect: f,
                  isSelected: d,
                  item: e,
                  key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                  onClick: this._handleItemClick,
                  onRef: p ? this._setFocusedItemRef : void 0,
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
                  var e = Object(A.a)(x.a.findDOMNode(this))
                  this._scrollParent = e === window ? null : e
                }
                return this._scrollParent
              },
            },
          ]),
          n
        )
      })(g.a.Component)
    },
    woHV: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
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
        })
      function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      t.a = function (e) {
        var t = e.style,
          n = o()(e, ['style'])
        return Object(c.a)('form', u(u({}, n), {}, { action: '#', style: [s.initial, t] }))
      }
    },
  },
])
//# sourceMappingURL=WIPED
