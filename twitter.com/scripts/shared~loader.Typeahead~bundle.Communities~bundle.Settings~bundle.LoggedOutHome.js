;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
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
        a = n('MWbm'),
        i = n('TIdA'),
        o = n('A91F'),
        c = n('t62R')
      var s = n('rHpw').a.create(function (e) {
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
          l = e.supportText,
          u = e.title,
          d = e.withNewTypeaheadUI
        return r.createElement(
          a.a,
          { style: [s.root, n] },
          r.createElement(
            a.a,
            { style: [s.coverContainer, d ? s.largeCellThumbnail : s.cellThumbnail] },
            t ? r.createElement(i.a, { accessibilityLabel: '', aspectMode: o.a.SQUARE, image: t }) : null,
          ),
          r.createElement(
            a.a,
            { style: s.bodyColumn },
            l ? r.createElement(c.b, { color: 'gray700', numberOfLines: 1, size: 'subtext2' }, l) : null,
            r.createElement(c.b, { numberOfLines: 2, weight: 'bold' }, u),
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
        o = n('aWyx'),
        c = n('XnpN'),
        s = n('3XMw'),
        l = n.n(s),
        u = n('jV+4'),
        d = n('pjBI'),
        f = n('t62R'),
        p = n('rHpw'),
        m = n('p9G8'),
        h = l.a.cfd94063,
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        y = p.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        b = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === o.a.ONE_TO_ONE) {
              var i = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return a()(i, 1)[0].name
            }
            return Object(m.a)(t, r)
          }
          var s = v(n)
          return Object(m.b)(s, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isSearchTitle,
          r = void 0 !== n && n,
          s = e.newConversationParticipants,
          l = e.perspective,
          p = e.renderTimestamp,
          b = e.textColor,
          g = void 0 === b ? 'normal' : b,
          _ = e.titleWeight,
          w = void 0 === _ ? 'bold' : _,
          x = e.withScreenName,
          I = void 0 === x || x,
          O = e.withVDLRefresh,
          E = void 0 !== O && O
        if (t) {
          var R = p ? p() : null
          if (t.type === o.a.ONE_TO_ONE) {
            var C = Object(c.a)(t, l).map(function (e) {
                return e.user
              }),
              k = a()(C, 1)[0],
              S = i.createElement(u.a, {
                color: g,
                isProtected: k.protected,
                isVerified: k.verified,
                name: k.name,
                screenName: k.screen_name,
                weight: w,
                withLink: !1,
                withScreenName: I,
              })
            return E && !r ? i.createElement(d.a, null, S, R) : S
          }
          var j = t.participants,
            P = Object.keys(j).length
          if (r)
            return i.createElement(
              d.a,
              { color: g },
              i.createElement(f.b, { color: g, numberOfLines: 1, style: y.title, weight: w }, Object(m.a)(t, l, r)),
              E
                ? null
                : i.createElement(f.b, { color: 'gray700', numberOfLines: 1, weight: 'normal' }, h({ peopleCount: P })),
              E && !r ? R : null,
            )
          var D = i.createElement(f.b, { color: g, numberOfLines: 1, weight: w }, Object(m.a)(t, l, r))
          return E && !r ? i.createElement(d.a, null, D, R) : D
        }
        var T = v(s)
        return i.createElement(f.b, { color: g, numberOfLines: 1, weight: w }, Object(m.b)(T, l))
      }
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('AQ79'),
        a = function (e, t) {
          return e[r.b] ? e[r.b].conversations[t] : null
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
        return be
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
        b = n('+Kfv'),
        g = n('IMYl'),
        _ = 'typeaheadResult',
        w = n('AQOc'),
        x = n('V5Qi'),
        I = n('G6rE'),
        O = n('rxPX'),
        E = function (e, t) {
          return t.conversationId
        },
        R = function (e, t) {
          return Object(x.a)(e, E(0, t))
        },
        C = Object(O.a)()
          .propsFromState(function () {
            return { conversationId: E, conversation: R, users: I.e.selectAll }
          })
          .adjustStateProps(function (e) {
            var t = e.conversation,
              n = (e.conversationId, e.users),
              r = { conversation: void 0 }
            return null != t && t.data && (r.conversation = Object(w.b)(t.data, void 0, n)), r
          }),
        k = n('aA19'),
        S = n('OhSZ'),
        j = n('5mJL'),
        P = n('rHpw'),
        D = P.a.create(function (e) {
          return {
            root: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.componentDimensions.gutterVertical,
              width: '100%',
            },
            avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: '32px' },
            bodyColumn: { flexGrow: 7, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' },
            disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 },
          }
        }),
        T = C(function (e) {
          var t = e.conversation,
            n = e.isDisabled,
            r = e.isSelected,
            a = e.perspective
          return t
            ? y.createElement(
                j.a,
                {
                  avatarCell: y.createElement(k.a, { conversation: t, perspective: a, size: 'xLarge' }),
                  avatarCellStyle: D.avatarColumn,
                  avatarSize: 'xLarge',
                  cellStyle: D.bodyColumn,
                  style: [D.root, !r && n && D.disabled],
                },
                y.createElement(S.b, { conversation: t, perspective: a }),
                be({ isSelected: r }),
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
                  return y.createElement(
                    F.a,
                    { style: V.root },
                    y.createElement(
                      L.a,
                      { withGutter: !0 },
                      y.createElement(
                        F.a,
                        { style: V.bodyColumn },
                        r ? y.createElement(M.b, { color: 'gray700', size: 'subtext2' }, r) : null,
                        y.createElement(M.b, { numberOfLines: 1 }, t),
                      ),
                      n
                        ? y.createElement(
                            F.a,
                            { style: V.coverContainer },
                            y.createElement(
                              A.a,
                              { ratio: 1 },
                              y.createElement(N.a, { accessibilityLabel: '', aspectMode: U.a.SQUARE, image: n }),
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
        })(y.PureComponent),
        B = '100px',
        V = P.a.create(function (e) {
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
        X = n('EHV7')
      function K(e) {
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
      var Z = (function (e) {
          u()(n, e)
          var t = K(n)
          function n() {
            return a()(this, n), t.apply(this, arguments)
          }
          return (
            o()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isDisabled,
                    n = e.resultContext,
                    r = e.topic
                  return y.createElement(
                    F.a,
                    { style: [Q.root, t && Q.disabled] },
                    y.createElement(M.b, { weight: 'bold', withHashflags: !0 }, r),
                    n
                      ? y.createElement(
                          F.a,
                          { style: Q.context },
                          this._renderIcon(),
                          y.createElement(M.b, { color: 'gray700' }, n.display_string),
                        )
                      : null,
                  )
                },
              },
              {
                key: '_renderIcon',
                value: function () {
                  var e = this.props.resultContext
                  return e && e.types[0] && 'followable_topic' === e.types[0].type
                    ? y.createElement(X.a, { style: Q.icon })
                    : null
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        Q = P.a.create(function (e) {
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
        Y = Z,
        J = (n('yH/f'), n('2G9S'), n('M0jS')),
        q = function (e, t) {
          return Object(J.d)(e, t.userId)
        },
        $ = Object(O.a)().propsFromState(function () {
          return { userSpace: q }
        }),
        ee = n('3XMw'),
        te = n.n(ee),
        ne = n('tocL'),
        re = 'TypeaheadUser',
        ae = n('GZwR'),
        ie = n('IMA+'),
        oe = n('v6aA')
      function ce(e) {
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
      var se = te.a.ae2205d1,
        le = te.a.d960b55b,
        ue = te.a.fd06b02f,
        de = Object.freeze({
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
        fe = (function (e) {
          u()(n, e)
          var t = ce(n)
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
                    v = l === ae.d.SearchBox,
                    b = d && p.isTrue('voice_rooms_typeahead_audiospace_ring_enabled') ? d : void 0
                  return (
                    b && (b.accessibilityLabel = ue({ screenName: s })),
                    y.createElement(ie.a, {
                      avatarSize: 'xLarge',
                      avatarUri: t,
                      decoration: n,
                      disabledMessage: a ? r : void 0,
                      displayMode: f ? 'ExperimentalUserTypeahead' : 'UserCompact',
                      isProtected: i,
                      isVerified: o,
                      name: c,
                      onAvatarClick: this._handleAvatarClick,
                      onCellClick: this._handleClick,
                      onScreenNameClick: this._handleClick,
                      presenceIndicator: v ? b : void 0,
                      screenName: s,
                      socialContext: h,
                      testID: re,
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
                    var t = e.followed_by ? se : le
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
                  if (t && t.display_string && t.types && n === ae.d.SearchBox)
                    return {
                      contextType: (t.types.length ? de[t.types[0].type] : void 0) || ne.a.TextOnly,
                      text: t.display_string,
                    }
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(fe, 'contextType', oe.a), v()(fe, 'defaultProps', { withNewTypeaheadUI: !1 })
      var pe = $.forwardRef(fe),
        me = n('htQn')
      function he(e) {
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
      var ve = (function (e) {
        u()(n, e)
        var t = he(n)
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
              e.type !== ae.b.User && i.props.onClick && i.props.onClick(e, i.isDisabled)
            }),
            (i._withNewTypeaheadUI =
              i.context.featureSwitches.isTrue('responsive_web_account_search_readability_enabled') &&
              e.source === ae.d.SearchBox),
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
                return y.createElement(
                  b.a,
                  { viewType: 'typeahead_result' },
                  y.createElement(
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
                    y.createElement(
                      me.a,
                      {
                        accessibilityRole: a ? 'checkbox' : 'button',
                        disabled: n,
                        focusable: !0,
                        onPress: this._handleClick,
                        style: [r && ye.focused, ye.transitionStyles, this._loaded && ye.loaded, o],
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
                  case ae.b.User:
                    var s = a.data,
                      l = o ? o({ userId: s.id_str, isSelected: r }) : void 0
                    return y.createElement(pe, {
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
                  case ae.b.Event:
                    var u = a.data
                    return this._withNewTypeaheadUI
                      ? y.createElement(G.a, {
                          image: u.primary_image && u.primary_image.original_info,
                          style: ye.itemPadding,
                          supportText: u.supporting_text,
                          title: u.topic,
                          withNewTypeaheadUI: !0,
                        })
                      : y.createElement(W, {
                          event: u.topic,
                          image: u.primary_image && u.primary_image.original_info,
                          supportText: u.supporting_text,
                        })
                  case ae.b.Hashtag:
                  case ae.b.Topic:
                    var d = a.data
                    return y.createElement(Y, { isDisabled: n, resultContext: d.result_context, topic: d.topic })
                  case ae.b.DMConversation:
                    return (
                      !!this.context.loggedInUserId &&
                      y.createElement(T, {
                        conversationId: a.id,
                        isDisabled: n,
                        isSelected: r,
                        perspective: this.context.loggedInUserId,
                      })
                    )
                  case ae.b.NavigationLink:
                    var f = a.data.text
                    return y.createElement(M.b, { style: ye.navigationLink }, f)
                  case ae.b.NoResult:
                    var p = a.data.text
                    return y.createElement(M.b, { style: ye.noResult }, p)
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
      })(y.Component)
      v()(ve, 'contextType', oe.a)
      var ye = P.a.create(function (e) {
          return {
            checkIcon: { color: e.colors.primary },
            navigationLink: {
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
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
        be = function (e) {
          return e.isSelected ? y.createElement(g.a, { accessibilityHidden: !0, style: ye.checkIcon }) : null
        }
      t.b = ve
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        a = n('aWyx'),
        i = n('XnpN'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('rHpw'),
        l = n('TIdA'),
        u = n('A91F'),
        d = n('jhWN'),
        f = n('9Xij'),
        p = n('Znyr'),
        m = n('cm6r'),
        h = n('U+bB'),
        v = n('MWbm'),
        y = c.a.fd48249b,
        b = s.a.create(function (e) {
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
        g = s.a.create(function (e) {
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
        _ = s.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        w = function (e) {
          var t = e.left,
            n = e.right
          return r.createElement(
            v.a,
            { style: g.container },
            r.createElement(v.a, { style: g.left }, t),
            r.createElement(v.a, { style: g.right }, n),
          )
        },
        x = function (e) {
          var t = e.bottom,
            n = e.top
          return r.createElement(
            v.a,
            { style: _.container },
            r.createElement(v.a, { style: _.top }, n),
            r.createElement(v.a, { style: _.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              a = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return r.createElement(
              v.a,
              { key: t.id_str, style: b.container },
              r.createElement(d.a, { size: n || a, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var a = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.createElement(
                  v.a,
                  { key: e.id_str, style: b.container },
                  r.createElement(d.a, {
                    aspectRatio: a,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.createElement(f.a, { ratio: 1 }, r.createElement(w, { left: n[1], right: n[0] }))
            var a = r.createElement(x, { bottom: n[2], top: n[1] }),
              i = n[0]
            return r.createElement(w, { left: a, right: i })
          },
          o = e.conversation,
          c = e.link,
          g = e.perspective,
          _ = e.withBadge,
          I = o && o.avatar_image_https,
          O = o
            ? Object(i.a)(o, g).map(function (e) {
                return e.user
              })
            : [],
          E = O.slice(0, 3),
          R =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.createElement(l.a, {
                    accessibilityLabel: '',
                    aspectMode: u.a.SQUARE,
                    backgroundColor: s.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(o) ||
            (function (e) {
              return e ? r.createElement(h.a, { source: e }) : null
            })(I) ||
            (function (e) {
              var a = e.length
              return 0 === a ? null : 1 === a ? t(e[0]) : r.createElement(v.a, { style: b.circle }, n(e))
            })(E),
          C =
            c ||
            (function (e, t) {
              if (e)
                return e.type === a.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === a.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(o, O),
          k = _ && null != o && o.participants ? Object.keys(o.participants).length - 1 : 0
        return R
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(f.a, { ratio: 1 }, C ? r.createElement(m.a, { interactiveStyles: null, link: C }, R) : R),
              k
                ? (function (e) {
                    var t = e.badgeCount
                    return r.createElement(
                      v.a,
                      { style: b.itemAccessory },
                      r.createElement(p.a, {
                        count: t,
                        standalone: !0,
                        style: b.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: y,
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
        return N
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
        b = n('+Kfv'),
        g = n('0yYu'),
        _ = n('7nmT'),
        w = n.n(_),
        x = n('ddV6'),
        I = n.n(x),
        O = n('3XMw'),
        E = n.n(O),
        R = n('kIAd'),
        C = n('JYMr'),
        k = n('rHpw'),
        S = E.a.f2b3fe06,
        j = k.a.create(function (e) {
          return { hidden: { visibility: 'hidden' } }
        }),
        P = function (e) {
          var t = e.isLoading,
            n = y.useState(!1),
            r = I()(n, 2),
            a = r[0],
            i = r[1]
          return (
            y.useEffect(
              function () {
                var e
                return (
                  t
                    ? (e = setTimeout(function () {
                        return i(!0)
                      }, R.a))
                    : i(!1),
                  function () {
                    return clearTimeout(e)
                  }
                )
              },
              [t],
            ),
            y.createElement(C.a, { ariaValueText: a ? S : '', indeterminate: a, style: !a && j.hidden })
          )
        },
        D = n('ZcYN'),
        T = n('MWbm'),
        F = n('oQhu'),
        L = n('w6IS'),
        M = n('MXDK')
      function A(e) {
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
      var N = (function (e) {
        u()(n, e)
        var t = A(n)
        function n(e, r) {
          var i
          return (
            a()(this, n),
            (i = t.call(this, e)),
            v()(s()(i), '_setFocusedItemRef', function (e) {
              i._shouldScrollToFocusedItem &&
                e &&
                (Object(M.c)(i._getScrollParent(), e), (i._shouldScrollToFocusedItem = !1))
            }),
            v()(s()(i), '_resetScroll', function () {
              var e = i._getScrollParent()
              e && (e.scrollTop = 0)
            }),
            v()(
              s()(i),
              '_getFlattenedItems',
              Object(F.a)(function (e) {
                return Object(L.a)(e)
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
                  i = t.renderHeader,
                  o = t.renderNoResultsState,
                  c = t.selectedItems,
                  s = t.style,
                  l = r || a.length,
                  u = 0,
                  d = !!c
                return l
                  ? y.createElement(
                      b.a,
                      { viewType: 'typeahead_dropdown' },
                      y.createElement(
                        T.a,
                        { accessibilityMultiSelectable: d, accessibilityRole: 'listbox', nativeID: n, style: s },
                        y.createElement(P, { isLoading: !!r }),
                        i ? i() : null,
                        a.length
                          ? a.map(function (t, n) {
                              var r = !Array.isArray(a[n - 1]) && n > 0,
                                i = n < a.length - 1,
                                o = Array.isArray(t)
                                  ? e._renderTypeaheadGroup(t, u, r, i)
                                  : e._renderTypeaheadItem(t, u)
                              return (u += Array.isArray(t) ? t.length : 1), o
                            })
                          : null,
                      ),
                    )
                  : o
                  ? o()
                  : null
              },
            },
            {
              key: '_renderTypeaheadGroup',
              value: function (e, t, n, r) {
                var a = this,
                  i = this.props.withSectionDivider
                return y.createElement(
                  y.Fragment,
                  { key: 'typeaheadGroup-'.concat(t) },
                  i && n ? y.createElement(g.a, { key: 'typeaheadDividerTop-'.concat(t) }) : null,
                  e.map(function (e, n) {
                    return a._renderTypeaheadItem(e, t + n)
                  }),
                  i && r ? y.createElement(g.a, { key: 'typeaheadDividerBottom-'.concat(t) }) : null,
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
                  o = n.renderUserDecoration,
                  c = n.selectedItems,
                  s = n.source,
                  l = this.state.focusIndex,
                  u = !(!c || !e.id) && c.indexOf(e.id) >= 0,
                  d = !!c,
                  f = l === t,
                  p = i && i(e, e.data),
                  m = a && a(e, e.data)
                return y.createElement(D.b, {
                  disabledMessage: m,
                  domId: f ? r : void 0,
                  isDisabled: p,
                  isFocused: f,
                  isInMultiSelect: d,
                  isSelected: u,
                  item: e,
                  key: 'typeaheadItem-'.concat(t, '-').concat(e.id || ''),
                  onClick: this._handleItemClick,
                  onRef: f ? this._setFocusedItemRef : void 0,
                  renderUserDecoration: o,
                  source: s,
                })
              },
            },
            {
              key: '_getScrollParent',
              value: function () {
                if (!this._scrollParent) {
                  var e = Object(M.a)(w.a.findDOMNode(this))
                  this._scrollParent = e === window ? null : e
                }
                return this._scrollParent
              },
            },
          ]),
          n
        )
      })(y.Component)
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
