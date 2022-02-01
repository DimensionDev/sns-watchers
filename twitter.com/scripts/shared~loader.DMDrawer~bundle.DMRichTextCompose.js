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
      function i(e) {
        return (
          (e &&
            'object' == typeof e &&
            'number' == typeof e.length &&
            Object.prototype.hasOwnProperty.call(e, 'callee') &&
            !Object.prototype.propertyIsEnumerable.call(e, 'callee')) ||
          !1
        )
      }
      ;((t = e.exports = n ? r : i).supported = r), (t.unsupported = i)
    },
    '06eB': function (e, t, n) {
      var r = Array.prototype.slice,
        i = n('kgfz'),
        a = n('+0pD'),
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
                    if (a(e)) return !!a(t) && ((e = r.call(e)), (t = r.call(t)), o(e, t, n))
                    if (c(e)) {
                      if (!c(t)) return !1
                      if (e.length !== t.length) return !1
                      for (l = 0; l < e.length; l++) if (e[l] !== t[l]) return !1
                      return !0
                    }
                    try {
                      var d = i(e),
                        p = i(t)
                    } catch (f) {
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
      n('7x/C'), n('DZ+c'), n('KOtZ'), n('Ysgh'), n('KqXw'), n('tQbP'), n('7xRU')
      var r = function (e) {
          var t = (JSON.stringify(e) || '').split('')
          t.sort()
          var n = t.join('')
          return i(n, 0).toString()
        },
        i = function (e, t) {
          for (var n = 'string' == typeof e ? e : String(e), r = t, i = 0; i < n.length; i++) {
            ;(r = (r << 5) - r + n.charCodeAt(i)), (r &= r)
          }
          return r
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
        i = n.n(r),
        a =
          (n('2G9S'),
          n('hBpG'),
          n('mlET'),
          n('Ysgh'),
          n('KqXw'),
          n('z84I'),
          function (e) {
            return e.getArrayValue('dm_reactions_config_active_reactions')
          }),
        o = function (e) {
          var t = e.getArrayValue('dm_reactions_config_inactive_reactions'),
            n = a(e)
          return [].concat(i()(n), i()(t))
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
            : a(e).map(function (e) {
                return e.split(':')[1]
              })
        }
    },
    '3AAD': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r)
      function a(e, t) {
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
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                i()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var s = o(o({}, n('7n04').a), {}, { pinToNewestWhenAtNewest: !0 })
      t.a = s
    },
    '64vW': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n.n(r).a.createContext({ heightsReady: !0 })
      t.a = i
    },
    '883S': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      }),
        n.d(t, 'c', function () {
          return S
        }),
        n.d(t, 'b', function () {
          return w
        })
      var r,
        i = n('KEM+'),
        a = n.n(i),
        o = n('k49u'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('fs1G'),
        u = c.a.c3752568,
        d = c.a.f78aa3e9,
        p = c.a.f9690dc0,
        f = c.a.i859a9d3,
        h = c.a.b1d35407,
        m = c.a.g539cca6,
        v = c.a.bbac0019,
        y = c.a.a1d2a68d,
        g = c.a.d4f2d9d8,
        b = c.a.hf383be4,
        _ = c.a.b25c5b2a,
        R = c.a.c4fdbd16,
        O = c.a.hf3e7e38,
        E = a()({}, o.a.DirectMessageConversationNotFound, {
          customAction: function () {
            return !1
          },
        }),
        S = { defaultToast: { text: d }, showToast: !0 },
        w =
          ((r = { defaultToast: { text: u } }),
          a()(r, o.a.CurrentUserSuspended, {
            toast: { text: m, action: { label: f, link: 'https://support.twitter.com/articles/15790' } },
          }),
          a()(r, o.a.DirectMessageCannotDmOtherUser, { toast: { text: p } }),
          a()(r, o.a.DirectMessageDuplicate, { toast: { text: _ } }),
          a()(r, o.a.DirectMessageOtherUserNotFollowing, {
            toast: { text: y, action: { label: f, link: 'https://support.twitter.com/articles/14606' } },
          }),
          a()(r, o.a.DirectMessagesSenderBlocksRecipient, { toast: { text: R } }),
          a()(r, o.a.DirectMessageTooLongError, { toast: { text: v } }),
          a()(r, o.a.DirectMessageTweetNotFound, { toast: { text: g } }),
          a()(r, o.a.GenericBadRequest, { customAction: l.a }),
          a()(r, o.a.MessageSendError, { toast: { text: O } }),
          a()(r, o.a.OverStatusUpdateLimit, {
            toast: { action: { label: f, link: 'https://support.twitter.com/articles/15364' }, text: h },
          }),
          a()(r, o.a.TargetUserNotFound, { toast: { text: b } }),
          a()(r, 'showToast', !0),
          r)
    },
    '89tF': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('jwue'), n('+oxZ'), n('+KXO'), n('yH/f')
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
      n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('ERkP')
      var r = n('zb92')
      t.a = Object(r.a)({
        loader: function () {
          return Promise.all([n.e(22), n.e(165)])
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
        return h
      }),
        n.d(t, 'a', function () {
          return m
        })
      n('+KXO'), n('1t7P'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        i = n.n(r),
        a = n('m3Bd'),
        o = n.n(a),
        s = (n('z84I'), n('KOtZ'), n('7x/C'), n('lTEL'), n('kYxP'), n('LW0h'), n('lnti')),
        c = n('aWyx')
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
                i()(e, t, n[t])
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
        p = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
          return e.reduce(function (e, n) {
            var r = n.user_id,
              i = t[r] || { id_str: r }
            return (e[r] = u(u({}, n), {}, { user: i })), e
          }, {})
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
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = e.conversation_id,
            i = e.participants,
            a = o()(e, ['conversation_id', 'participants'])
          return u(
            u({ conversation_id: r }, a),
            {},
            { entries: t.entryIdsByConversationId[r] || [], participants: p(i, n) },
          )
        },
        m = function (e, t, n) {
          var r = e.conversation_id,
            i = e.participants,
            a = e.social_proof,
            l = u(
              u({ conversation_id: r }, o()(e, ['conversation_id', 'participants', 'social_proof'])),
              {},
              { entries: f(r, t), participants: p(i, n), social_proof: void 0 },
            )
          return (
            a &&
              (l.social_proof = (function () {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map(function (t) {
                  if (t.proof_type === c.d.MUTUAL_FRIENDS) {
                    var n = t.users
                    return u(
                      u({}, o()(t, ['users'])),
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
              })(a, n)),
            l
          )
        }
    },
    GSsg: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = (n('yH/f'), n('B5iK')),
        c = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({})
            i()(this, e)
            var r = n.interval,
              a = void 0 === r ? 6e4 : r,
              o = n.burstInterval,
              c = void 0 === o ? 3e3 : o,
              l = n.burstDuration,
              u = void 0 === l ? 3e5 : l
            ;(this.pollTimer = new s.b(a).interval(t)), (this.burstTimer = new s.a(this.pollTimer, c, u))
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
        i = n.n(r),
        a = n('3XMw'),
        o = n.n(a),
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
          r = 'follow' === t.reason ? d : p
        return n
          ? i.a.createElement(l.b, { color: 'gray700' }, r)
          : i.a.createElement(
              s.a,
              { style: u.root },
              i.a.createElement(l.b, { align: 'center', color: 'gray700', size: 'subtext2' }, r),
            )
      }
    },
    'I2k/': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var r = n('KEM+'),
        i = n.n(r),
        a = n('k49u'),
        o = n('lRnM'),
        s = n('LVU8'),
        c = function (e) {
          return i()({}, a.a.ClientNotPermitted, {
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
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s =
          (n('yH/f'),
          n('z84I'),
          n('jwue'),
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
            i()(this, e),
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
                      i = r.callback,
                      a = r.condition,
                      o = n.listLength,
                      s = n.proximity,
                      c = (function (e, t) {
                        return e(t.getForList(), t.getForViewport()) ? l.INSIDE : l.OUTSIDE
                      })(a, e),
                      d = e.getListLength(),
                      p = u(s, o, c, d)
                    ;(n.proximity = c), (n.listLength = d), p && i({ triggerCause: p })
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
        return b
      })
      var r = n('ddV6'),
        i = n.n(r),
        a = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n.n(a),
        s = n('aWyx'),
        c = n('XnpN'),
        l = n('3XMw'),
        u = n.n(l),
        d = n('jV+4'),
        p = n('pjBI'),
        f = n('t62R'),
        h = n('rHpw'),
        m = n('p9G8'),
        v = u.a.cfd94063,
        y = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        g = h.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        b = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === s.a.ONE_TO_ONE) {
              var a = Object(c.a)(t, r).map(function (e) {
                return e.user
              })
              return i()(a, 1)[0].name
            }
            return Object(m.a)(t, r)
          }
          var o = y(n)
          return Object(m.b)(o, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          a = e.isMessageSearchTitle,
          l = void 0 !== a && a,
          u = e.newConversationParticipants,
          h = e.perspective,
          b = e.renderTimestamp,
          _ = e.textColor,
          R = void 0 === _ ? 'normal' : _,
          O = e.titleWeight,
          E = void 0 === O ? 'bold' : O,
          S = e.withScreenName,
          w = void 0 === S || S,
          C = e.withVDLRefresh,
          x = void 0 !== C && C
        if (t) {
          var A = b ? b() : null
          if (t.type === s.a.ONE_TO_ONE) {
            var k = Object(c.a)(t, h).map(function (e) {
                return e.user
              }),
              T = i()(k, 1)[0],
              P = o.a.createElement(d.a, {
                color: R,
                isProtected: T.protected,
                isVerified: T.verified,
                name: T.name,
                screenName: T.screen_name,
                weight: E,
                withLink: !1,
                withScreenName: w,
              })
            return (x && !r) || l ? o.a.createElement(p.a, null, P, A) : P
          }
          var I = t.participants,
            j = Object.keys(I).length
          if (r)
            return o.a.createElement(
              p.a,
              { color: R },
              o.a.createElement(f.b, { color: R, numberOfLines: 1, style: g.title, weight: E }, Object(m.a)(t, h, r)),
              x
                ? null
                : o.a.createElement(
                    f.b,
                    { color: 'gray700', numberOfLines: 1, weight: 'normal' },
                    v({ peopleCount: j }),
                  ),
            )
          var M = o.a.createElement(f.b, { color: R, numberOfLines: 1, weight: E }, Object(m.a)(t, h, r))
          return (x && !r) || l ? o.a.createElement(p.a, null, M, A) : M
        }
        var D = y(u)
        return o.a.createElement(f.b, { color: R, numberOfLines: 1, weight: E }, Object(m.b)(D, h))
      }
    },
    Oi4X: function (e, t, n) {
      'use strict'
      n('OZaJ'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('VrFO'),
        i = n.n(r),
        a = n('Y9Ll'),
        o = n.n(a),
        s = n('1Pcy'),
        c = n.n(s),
        l = n('5Yy7'),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        h = n.n(f),
        m = n('KEM+'),
        v = n.n(m),
        y =
          (n('Qavd'),
          n('JtPf'),
          n('7x/C'),
          n('+KXO'),
          n('z84I'),
          n('MvUL'),
          n('KqXw'),
          n('lTEL'),
          n('kYxP'),
          n('ERkP')),
        g = n.n(y),
        b = n('0JOx'),
        _ = n('zh9S'),
        R = n('MMRb'),
        O = n('CDB5'),
        E = n('RqPI'),
        S = n('1YZw'),
        w = n('hqKg'),
        C = n('kGix'),
        x = n('AQOc'),
        A = n('UhuB'),
        k = n('pNZL'),
        T = n('G6rE'),
        P = n('oEGd'),
        I = n('X/yg'),
        j = n('0KEI'),
        M = n('P1r1'),
        D = function (e, t) {
          return t.conversationId
        },
        L = Object(w.createSelector)(
          R.selectFetchStatus,
          function (e, t) {
            return R.selectConversationFetchStatus(e, D(0, t))
          },
          function (e, t) {
            return e === C.a.LOADED ? t : e
          },
        ),
        B = Object(w.createSelector)(
          function (e, t) {
            return R.selectEntriesForConversation(e, D(0, t))
          },
          E.q,
          function (e, t) {
            return t ? Object(I.d)(e, t) : void 0
          },
        ),
        F = Object(w.createSelector)(
          function (e, t) {
            return R.selectConversation(e, D(0, t))
          },
          R.selectEntries,
          I.l,
          E.q,
          I.m,
          I.n,
          T.e.selectAll,
          L,
          function (e, t) {
            return O.g(e, D(0, t))
          },
          function (e, t) {
            return O.j(e, D(0, t))
          },
          function (e, t) {
            return O.i(e, D(0, t))
          },
          function (e, t) {
            return O.k(e, D(0, t))
          },
          function (e, t) {
            return O.h(e, D(0, t))
          },
          function (e, t) {
            return O.l(e, D(0, t))
          },
          M.k,
          A.n,
          B,
          M.n,
          function (e, t) {
            var n = D(0, t)
            return R.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, i, a, o, s, c, l, u, d, p, f, h, m, v, y, g) {
            var b = e && e.data
            return {
              conversation: (b && Object(x.a)(b, t, o)) || void 0,
              dataSaverMode: h,
              draftText: f,
              dtabBarInfo: y,
              fetchStatus: s,
              gifMetadata: p,
              inboxType: g,
              isDmReceiptSettingEnabled: m,
              cardUrl: c,
              isNewGroupConversation: n,
              isUploading: l,
              media: u,
              mediaUploadProgress: d,
              newConversationParticipants: i,
              perspective: r,
              quickReplyOptions: v,
              tweetAttachment: a,
            }
          },
        ),
        N = Object(P.d)(F, function (e) {
          return {
            acceptConversation: R.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return O.a(t, e, n)
              }),
            saveText: O.f,
            addToast: S.b,
            addWelcomeMessageToConversation: R.addWelcomeMessageToConversation,
            cancelUpload: Object(I.a)(e.conversationId),
            createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationHistory: R.fetchConversationHistory,
            fetchConversationIfNeeded: R.fetchConversationIfNeeded,
            fetchInboxIfNeeded: R.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: R.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: _.a,
            leaveConversation: R.leaveConversation,
            removeMedia: Object(I.b)(e.conversationId),
            removeText: O.d,
            scribeAction: _.c,
            scribePageImpression: _.d,
            sendMessage: O.m,
            updateConversationReadState: R.updateConversationReadState,
            updateTweetDetailNav: k.b,
            updateTyping: R.updateTyping,
            removeConversation: R.removeConversation,
            popOutConversation: R.popOutConversation,
          }
          var t
        }),
        U = n('I2k/'),
        H = n('ejT/'),
        W = n('7n04'),
        V = n('Myq3'),
        z = n('VPAj')
      function q(e, t) {
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
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        Y = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        Q = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(V.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return G(
            G({}, W.a),
            {},
            {
              initialScrollHeadroom: Object(z.a)(0),
              scrollHeadroom: Object(z.a)(0),
              offsetCorrection: function (e, i) {
                var a = r(e),
                  o = r(i),
                  s = o && (!a || a.id !== o.id),
                  c = o && t(o.data.data),
                  l = a && K(e, a.id)
                return (s && (c || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        i = t.getForItem(n)
                      return !r || (i && i.getHeight() > r.getHeight())
                    })(e, i))
                  ? Math.max(0, Y(i))
                  : W.a.offsetCorrection(e, i)
              },
            },
          )
        },
        X = (n('KOtZ'), n('gbD7')),
        J = (n('Blm6'), n('b9JY')),
        Z = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(J.b)(e) && Object(J.b)(t)) {
            var n = e.message_data,
              r = n.sender_id,
              i = n.time,
              a = t.message_data,
              o = a.sender_id,
              s = a.time,
              c = parseInt(s, 10) - parseInt(i, 10)
            return r === o && c >= 0 && c <= 6e4
          }
          return !1
        },
        $ = n('jat/'),
        ee = (n('jQ/y'), n('ho0z'), n('uFXj'), n('v6aA')),
        te = n('XnpN'),
        ne = n('LhSm'),
        re = n('I4+6'),
        ie = n('rHpw'),
        ae = n('PbQQ'),
        oe = n('cm6r'),
        se = n('jV+4'),
        ce = n('pBrB'),
        le = n('wCd/'),
        ue = function (e, t) {
          var n = Object(te.a)(e, t).map(function (e) {
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
        de = ie.a.create(function (e) {
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
        pe = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            r = void 0 === n || n,
            i = g.a.useContext(ee.a).loggedInUserId
          if (!t) return null
          var a = ue(t, i || ''),
            o = a.userDescription,
            s = a.userEntities,
            c = a.userFollowerCount,
            l = a.userFriendsCount,
            u = a.userIdStr,
            d = a.userIsVerified,
            p = a.userJoinDate,
            f = a.userName,
            h = a.userScreenName,
            m = a.userWithheldDescription,
            v = a.userWithheldEntities,
            y = !!(f && h && ((c && l) || p)),
            b = re.a.generate({
              color: ie.a.theme.colors.text,
              backgroundColor: ie.a.theme.colors.transparent,
              customFocusBackgroundColor: ie.a.theme.colors.gray0,
              customHoverBackgroundColor: ie.a.theme.colors.gray0,
              customPressedBackgroundColor: ie.a.theme.colors.activeFaintGray,
            })
          return g.a.createElement(ae.a.Consumer, null, function (e) {
            return g.a.createElement(
              oe.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [de.root, r && y && de.borderBottom],
              },
              g.a.createElement(se.a, {
                isVerified: d,
                name: f,
                screenName: h,
                style: de.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && u
                ? g.a.createElement(ce.a, {
                    description: o,
                    entities: s,
                    style: [de.profileInfoItemMargin, de.description],
                    userId: u,
                    withheldDescription: m,
                    withheldEntities: v,
                  })
                : null,
              c && l
                ? g.a.createElement(le.a, {
                    followersCount: c,
                    friendsCount: l,
                    screenName: h || '',
                    style: de.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? g.a.createElement(ne.a, { joinDate: p }) : null,
            )
          })
        },
        fe = n('V/6K'),
        he = n('cFyg'),
        me = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('g54k')),
        ve = n('aA19'),
        ye = n('aWyx'),
        ge = n('mN6z'),
        be = n('MWbm'),
        _e = n('t62R'),
        Re = n('jhWN'),
        Oe = n('MAI/'),
        Ee = n('zQEV')
      function Se(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var we = function (e) {
          var t = e.children,
            n = e.link,
            r = e.style
          return g.a.createElement(_e.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        Ce = (function (e) {
          u()(n, e)
          var t = Se(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_renderContents', function () {
                var t = e.props,
                  n = t.conversation,
                  r = t.entry,
                  i = t.entryType,
                  a = t.perspective,
                  o = t.users,
                  s = Object(Ee.a)(r, i, a, o)
                switch (i) {
                  case ye.b.CONVERSATION_AVATAR_UPDATE:
                    var c = n.avatar_image_https === r.conversation_avatar_image_https
                    return g.a.createElement(
                      g.a.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && c
                        ? g.a.createElement(
                            be.a,
                            { style: xe.conversationAvatarContainer },
                            g.a.createElement(ve.a, { conversation: n, perspective: a }),
                          )
                        : null,
                      g.a.createElement(we, null, s),
                    )
                  case ye.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(s),
                      u = e._getParticipantsFromEntry(),
                      d = g.a.createElement(
                        _e.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return g.a.createElement(g.a.Fragment, null, l, p)
                  default:
                    return g.a.createElement(we, null, s)
                }
              }),
              v()(c()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  i = n.users,
                  a = r.sender_id ? i[r.sender_id] : void 0,
                  o = a ? { pathname: 'https://twitter.com/'.concat(a.screen_name) } : void 0
                return g.a.createElement(
                  oe.a,
                  { interactiveStyles: null, link: o, style: xe.userAddedYouContainer },
                  a
                    ? g.a.createElement(Re.a, {
                        accessibilityLabel: a.screen_name,
                        screenName: a.screen_name,
                        size: 'medium',
                        uri: a.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  g.a.createElement(we, { link: o, style: xe.userAddedYouText }, t),
                )
              }),
              v()(c()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  i = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return g.a.createElement(
                  oe.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: xe.joinConversationDetails,
                  },
                  n,
                  g.a.createElement(Oe.a, {
                    style: xe.userAvatarFacepile,
                    userAvatarSize: 'xLarge',
                    userAvatarUrls: i,
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
                  return !Object(ge.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return g.a.createElement(be.a, { style: xe.root }, this._renderContents())
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
                  return Object(Ee.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        xe = ie.a.create(function (e) {
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
        Ae = Object(me.a)(Ce),
        ke = n('ddV6'),
        Te = n.n(ke),
        Pe = n('oQhu')
      var Ie = Object(Pe.a)(function (e) {
          var t = ie.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + ie.a.theme.spacesPx.space12,
          }
        }),
        je = n('shC7'),
        Me = n('38/B'),
        De = function (e) {
          return Le(e, Me.a.reducedMotionEnabled)
        },
        Le = Object(Pe.a)(function (e, t) {
          var n,
            r,
            i,
            a,
            o,
            s,
            c,
            l,
            u,
            d =
              ((n = Ie(ie.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (i = n.DMUserAvatarSpacerPx),
              (a = Ue[ie.a.theme.scale]),
              (o = Fe / a),
              (s = Ne / r),
              (l = Ne - (c = Ne / 2)),
              (u = Ne - c - i),
              {
                cssTransition: Me.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(We, ', opacity ').concat(We) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (je.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (je.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (je.a.getConstants().isRTL ? 1 : -1) * He[ie.a.theme.scale] }] },
                    received: {
                      transform: [
                        { translateX: (je.a.getConstants().isRTL ? -1 : 1) * (He[ie.a.theme.scale] + u) - c },
                      ],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: a }, active: { height: Fe } },
                  base: { height: a, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: c / o,
                      transformOrigin: je.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: c / o,
                      transformOrigin: je.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: je.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: je.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
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
      var Be,
        Fe = 60,
        Ne = Fe,
        Ue = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        He = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        We = '0.2s 0s ease-in-out',
        Ve = n('+Kfv'),
        ze = { scribeAction: _.c },
        qe = Object(w.createSelector)(
          function (e, t) {
            return T.e.select(e, t.senderId)
          },
          M.l,
          M.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        Ge = Object(P.g)(qe, ze),
        Ke = {
          addToast: S.b,
          createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: R.deleteEntry,
        },
        Ye = Object(P.b)(Ke),
        Qe = n('k49u'),
        Xe = n('LVU8'),
        Je = n('3XMw'),
        Ze = n.n(Je),
        $e = Ze.a.f58dff33,
        et = Ze.a.ad5a8e8e,
        tt =
          ((Be = {}),
          v()(Be, Qe.a.MissingParameter, { toast: Object(Xe.a)($e) }),
          v()(Be, Qe.a.DirectMessageDestroyPermissionsError, { toast: { text: et } }),
          v()(Be, 'showToast', !0),
          Be),
        nt = (n('jQ3i'), n('x4t0'), n('xCUF')),
        rt = n('uKEd'),
        it = [],
        at = Object(w.createSelector)(
          function (e) {
            return Object(rt.l)(e).entries
          },
          function (e, t) {
            return Object(rt.p)(e, t.entry.id) || it
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
        ot = {
          createReaction: rt.d,
          createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: nt.d,
          removeReaction: rt.k,
        },
        st = Object(P.g)(at, ot),
        ct = n('RhWx'),
        lt = n.n(ct),
        ut = n('33Kz'),
        dt = n('wTX1'),
        pt = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            i = e.emotion,
            a = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            c = e.style,
            l = g.a.useContext(ee.a).featureSwitches,
            u = Object(ut.b)(i, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = re.a.generate({ backgroundColor: ie.a.theme.colors.gray50, color: ie.a.theme.colors.gray700 })
          return g.a.createElement(
            oe.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: a ? p : null,
              onPress: s,
              style: [ft.container].concat(lt()(c || [])),
            },
            g.a.createElement(_e.b, { size: r, style: ft.unsetLineHeight }, u),
            n
              ? g.a.createElement(dt.a, { color: 'gray700', containerStyle: ft.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        ft = ie.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        ht = n('pHkl'),
        mt = n('Irs7')
      function vt(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var yt = Ze.a.ca7a2214,
        gt = Ze.a.fc0e94b7,
        bt = (function (e) {
          u()(n, e)
          var t = vt(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_handleReactionScribing', function (t, n) {
                var r = e.props,
                  i = r.analytics,
                  a = r.entry,
                  o = r.isGroupDM,
                  s = r.participantsCount,
                  c = n ? 'delete_reaction' : 'create_reaction',
                  l = Object(I.c)(a)
                i.scribe({
                  section: 'twitter_service',
                  component: 'direct_messages',
                  element: c,
                  action: 'success',
                  data: {
                    conversation_id: a.conversation_id,
                    conversation_participant_count: s,
                    conversation_type: o ? ht.g.GROUP : ht.g.ONE_TO_ONE,
                    message_type: l,
                    reaction_emotion: t,
                  },
                })
              }),
              v()(c()(e), '_reactionClickHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    i = r.createLocalApiErrorHandler,
                    a = r.createReaction,
                    o = r.dismiss,
                    s = r.entry,
                    c = r.fetchUpdatesIfNeeded,
                    l = r.perspective,
                    u = r.removeReaction,
                    d = { reaction_key: t, conversation_id: s.conversation_id, dm_id: s.id, perspective: l }
                  ;(n ? u : a)(d)
                    .then(e._handleReactionScribing(t, n))
                    .then(function () {
                      return c()
                    })
                    .catch(i()),
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
                    n = Object(ut.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return g.a.createElement(pt, {
                        accessibilityLabelFormatter: r ? yt : gt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [Rt.reaction, r && Rt.selectedReaction],
                      })
                    })
                  return g.a.createElement(be.a, { style: Rt.reactions }, n)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(bt, 'contextType', ee.a)
      var _t = Object(mt.a)(st(bt)),
        Rt = ie.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        Ot = n('OiMc')
      function Et(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var St = (function (e) {
        u()(n, e)
        var t = Et(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(c()(e), '_renderDMReactionPickerContent', function (t) {
              var n = e.props,
                r = n.entry,
                i = n.isGroupDM,
                a = n.participantsCount,
                o = n.perspective
              return g.a.createElement(_t, { dismiss: t, entry: r, isGroupDM: i, participantsCount: a, perspective: o })
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
                  Ot.a,
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
      v()(St, 'contextType', fe.a)
      var wt = n('fz3c'),
        Ct = n('TnY3'),
        xt = n('mjJ+'),
        At = n('Q0VY'),
        kt = n('eb3s'),
        Tt = n('/yvb'),
        Pt = n('ZToW'),
        It = n('CaKu'),
        jt = n('i4Oy'),
        Mt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        Dt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = Te()(n, 2),
            i = r[0],
            a = r[1]
          return !((0 === i || 1 === i) && e.length === a)
        },
        Lt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return Dt(t.text, r.indices)
          if (n.card) {
            var i,
              a = ((null === (i = t.entities) || void 0 === i ? void 0 : i.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return Dt(t.text, a && a.indices)
          }
          return !0
        },
        Bt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        Ft = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        Nt = function (e, t, n) {
          var r = 1.25 * ie.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        Ut = n('hiGS'),
        Ht = n('zIWA'),
        Wt = n('Lsrn'),
        Vt = n('k/Ka')
      function zt(e, t) {
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
      function qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? zt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : zt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Gt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Vt.a)(
          'svg',
          qt(
            qt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Wt.a.root, e.style], viewBox: '0 0 24 24' },
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
      Gt.metadata = { width: 24, height: 24 }
      var Kt = Gt,
        Yt = n('DlVf'),
        Qt = n('ACHU'),
        Xt = n('UgB4')
      function Jt(e, t) {
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
      function Zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $t(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var en = Ze.a.ba60339a,
        tn = Ze.a.j4bfee22,
        nn = Ze.a.d96cf7cd,
        rn = Ze.a.faddd3a2,
        an = Ze.a.eb497e08,
        on = Ze.a.b170974a,
        sn = Ze.a.i202bd22,
        cn = Ze.a.f2e5491a,
        ln = Ze.a.f88553c8,
        un = Ze.a.ifea3114,
        dn = Ze.a.cac14829,
        pn = Ze.a.h63a5c3b,
        fn = (function (e) {
          u()(n, e)
          var t = $t(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(c()(a), '_renderOverflowMenu', function (e) {
                var t = a.props,
                  n = t.analytics,
                  r = t.entry,
                  i = t.isSent,
                  o = n.contextualScribeNamespace,
                  s = [{ text: en, Icon: Ut.a, isEmphasized: !0, onClick: a._handleShowDeleteConfirmation(e) }]
                return (
                  i ||
                    s.push({
                      text: sn,
                      Icon: Ht.a,
                      link: {
                        pathname: '/i/report/'.concat(wt.a.DMMessage, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: a.props.onReportMessage,
                    }),
                  It.a.isAvailable() && s.push({ text: cn, Icon: Kt, onClick: a._handleCopyMessageText }),
                  g.a.createElement(xt.a, {
                    isFixed: a.context.isDrawer,
                    items: s,
                    onCloseRequested: a._handleHideActionsAndMenus(e),
                    preferredHorizontalOrientation: 'right',
                  })
                )
              }),
              v()(c()(a), '_handleCopyMessageText', function (e) {
                var t = a.props.addToast,
                  n = a._replaceMessageUrls()
                n && (It.a.setString(n), t({ text: ln })), e && e()
              }),
              v()(c()(a), '_handleForwardButton', function () {
                var e,
                  t,
                  n = a.props,
                  r = n.entry,
                  i = n.history
                if (
                  null != r &&
                  null !== (e = r.message_data) &&
                  void 0 !== e &&
                  null !== (t = e.attachment) &&
                  void 0 !== t &&
                  t.tweet
                ) {
                  var o = r.message_data.attachment.tweet
                  i.push({
                    pathname: '/messages/compose',
                    state: { tweetAttachment: Zt(Zt({}, o), {}, { id_str: o.status }) },
                  })
                }
              }),
              v()(c()(a), '_handleSetActionsActive', function () {
                var e = a.props.setShouldFreezeUpdates
                a.setState({ actionsAreActive: !0 }), e(!0)
              }),
              v()(c()(a), '_handleDelete', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.createLocalApiErrorHandler,
                  r = e.deleteEntry,
                  i = e.entry,
                  o = e.inboxType,
                  s = e.isGroupDM,
                  c = e.participantsCount,
                  l = Object(I.c)(i)
                t.scribe({
                  action: 'delete',
                  data: {
                    conversation_id: i.conversation_id,
                    conversation_type: s ? 1 : 0,
                    conversation_participant_count: c,
                    message_type: l,
                    inbox_type: Object(I.h)(o),
                  },
                }),
                  r({ conversationId: i.conversation_id, id: i.id }).catch(n(tt))
              }),
              v()(c()(a), '_handleHideDeleteConfirmation', function () {
                a.setState({ showDeleteConfirmation: !1 })
              }),
              v()(c()(a), '_handleHideActionsAndMenus', function (e) {
                return function () {
                  var t = a.props.setShouldFreezeUpdates
                  e && e(), a.setState({ actionsAreActive: !1 }), t(!1)
                }
              }),
              v()(c()(a), '_handlePressReactionPickerButton', function () {
                var e = a.props,
                  t = e.analytics,
                  n = e.entry
                t.scribe({ component: 'reaction_button', element: Object(I.c)(n), action: 'click' }),
                  a._handleSetActionsActive()
              }),
              v()(c()(a), '_handleShowDeleteConfirmation', function (e) {
                return function () {
                  var t = a.props.setShouldFreezeUpdates
                  e(), a.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1)
                }
              }),
              v()(c()(a), '_replaceMessageUrls', function () {
                var e = a.props.entry,
                  t = e && e.message_data && e.message_data.entities,
                  n = (e && e.message_data && e.message_data.text) || ''
                return (
                  At.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (a.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (a._hasMedia = Bt(a.props.entry)),
              (a._isNarrow = jt.a.get('screen').width < ie.a.theme.breakpoints.xSmall),
              a
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
                    i = n.isSent,
                    a = n.shouldShowReactionButton,
                    o = n.style,
                    s = n.withVDLRefresh,
                    c = this._areActionsVisible()
                  return g.a.createElement(
                    be.a,
                    {
                      pointerEvents: c ? 'auto' : 'none',
                      style: [
                        mn.messageActions,
                        i ? mn.messageActionsLeft : mn.messageActionsRight,
                        c ? mn.visible : mn.invisible,
                        s && mn.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? mn.messageActionsMediaNarrow : mn.messageActionsNarrow),
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
                    a && this._renderReactionButton(),
                    this._renderOverflowButton(),
                    this._renderDeleteConfirmation(),
                  )
                },
              },
              {
                key: '_renderDeleteConfirmation',
                value: function () {
                  return this.state.showDeleteConfirmation
                    ? g.a.createElement(kt.a, {
                        confirmButtonLabel: nn,
                        confirmButtonType: 'destructiveFilled',
                        headline: tn,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: rn,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return g.a.createElement(Tt.a, {
                    accessibilityLabel: un,
                    hoverLabel: { label: un },
                    icon: vn,
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
                    i = e.perspective,
                    a = e.withVDLRefresh,
                    o = this.state.actionsAreActive,
                    s = g.a.createElement(Yt.a, { style: a ? mn.vdlActionIcon : mn.actionIcon })
                  return g.a.createElement(
                    St,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: i,
                    },
                    g.a.createElement(Tt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: on,
                      hoverLabel: { label: dn },
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
                    t = g.a.createElement(Qt.a, { style: e ? mn.vdlActionIcon : mn.actionIcon })
                  return g.a.createElement(Tt.a, {
                    accessibilityLabel: an,
                    hoverLabel: { label: pn },
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
                    i = t.containerIsHovered,
                    a = t.isDraft,
                    o = this.state.actionsAreActive,
                    s = ((e = this.props.entry), !Lt(e) && Bt(e) && !Pt.a.isEnabled)
                  return !a && (s || (n && !Pt.a.isEnabled) || r || i || o)
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(fn, 'contextType', fe.a)
      var hn = Object(Ct.a)(Object(mt.a)(Ye(fn))),
        mn = ie.a.create(function (e) {
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
        vn = g.a.createElement(Xt.a, { style: mn.vdlActionIcon }),
        yn = n('97Jx'),
        gn = n.n(yn),
        bn = (n('6U7i'), n('rxPX')),
        _n = Object(bn.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: R.removeEntry,
              sendMessage: O.m,
            }
          })
          .withAnalytics(),
        Rn = '87.5%',
        On = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        En = [],
        Sn = function (e, t) {
          return Object(rt.p)(e, t.entryId) || En
        },
        wn = function (e) {
          return Object(rt.l)(e).entries
        },
        Cn = {
          createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        xn = Object(P.e)(function () {
          return Object(w.createSelector)(wn, Sn, E.q, On.d, function (e, t, n, r) {
            var i,
              a = Object(ut.a)(r, { includeInactive: !0 }),
              o = 0
            return {
              reactionsWithCounts: t.reduceRight(function (t, r) {
                var s = e[r] && e[r].data
                if (!s) return t
                if (!a.includes(s.reaction_key)) return t
                var c = (t.get(s.reaction_key) || 0) + 1
                return (
                  t.set(s.reaction_key, c),
                  (null == s ? void 0 : s.sender_id) === n && (i = s.reaction_key),
                  (o += 1),
                  t
                )
              }, new Map()),
              selectedReactionKey: i,
              totalReactionCount: o,
            }
          })
        }, Cn),
        An = (n('vfdX'), n('Ee2X'), []),
        kn = function (e, t) {
          return t.entryId
        },
        Tn = function (e) {
          return Object(rt.l)(e).entries
        },
        Pn = function (e, t) {
          return Object(rt.p)(e, kn(0, t)) || An
        },
        In = function (e, t) {
          return T.e.selectMany(
            e,
            (function (e, t) {
              return Object(rt.q)(e, kn(0, t))
            })(e, t),
          )
        },
        jn = {
          removeReaction: rt.k,
          fetchUpdatesIfNeeded: nt.d,
          createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        Mn = Object(P.e)(function () {
          return Object(w.createSelector)(Tn, Pn, E.q, In, On.d, function (e, t, n, r, i) {
            var a = Object(ut.a)(i, { includeInactive: !0 }),
              o = []
            t.forEach(function (t) {
              var i = e[t] && e[t].data
              if (i && a.includes(i.reaction_key)) {
                var s = r.find(function (e) {
                    return e && e.id_str === i.sender_id
                  }),
                  c = s && {
                    avatarUri: s.profile_image_url_https,
                    userId: s.id_str,
                    reactionKey: i.reaction_key,
                    isLoggedInUser: s.id_str === n,
                    screenName: s.screen_name,
                    name: s.name,
                    isProtected: s.protected,
                    isVerified: s.verified,
                    time: i.time,
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
            return s > -1 && o.push.apply(o, lt()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, jn),
        Dn = n('TIdA'),
        Ln = n('htQn'),
        Bn = Ze.a.gf5e9ea6,
        Fn = Ze.a.a2d48778,
        Nn = Dn.a.createLayoutCache()
      var Un = ie.a.create(function (e) {
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
        Hn = function (e) {
          var t = g.a.useContext(ee.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            i = e.user,
            a = e.withBottomBorder,
            o = i.avatarUri,
            s = i.isProtected,
            c = i.isVerified,
            l = i.name,
            u = i.screenName,
            d = g.a.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = g.a.createElement(Re.a, { imageLayoutCache: Nn, screenName: u, size: 'xxLarge', uri: o }),
            f = g.a.createElement(pt, { emojiSize: 'title4', emotion: i.reactionKey, focusable: !1 }),
            h = g.a.createElement(se.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: c,
              name: l,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return g.a.createElement(
            Ln.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [Un.root, a && Un.bottomBorder] },
            g.a.createElement(be.a, { style: Un.reactionColumn }, f),
            g.a.createElement(be.a, { style: Un.column }, p),
            g.a.createElement(be.a, { style: Un.bodyColumn }, g.a.createElement(be.a, { style: Un.body }, h)),
            r
              ? g.a.createElement(
                  be.a,
                  { style: Un.column },
                  g.a.createElement(
                    Tt.a,
                    {
                      accessibilityLabel: Fn({ emoji: Object(ut.b)(i.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    Bn,
                  ),
                )
              : null,
          )
        },
        Wn = n('xKuM'),
        Vn = n('efqG')
      function zn(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var qn = Ze.a.b772cd65,
        Gn = Ze.a.c0098d49,
        Kn = Ze.a.j85999eb,
        Yn = (function (e) {
          u()(n, e)
          var t = zn(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_renderContent', function (t, n) {
                return g.a.createElement(
                  be.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              v()(c()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? g.a.createElement(Wn.a, { title: Gn, withBottomBorder: !0 })
                  : g.a.createElement(_e.b, { visuallyHidden: !0 }, Gn)
              }),
              v()(c()(e), '_renderUsers', function (t, n) {
                return g.a.createElement(
                  be.a,
                  { accessibilityLabel: Kn, style: [Qn.container, 'sheet' === n ? Qn.sheet : Qn.popover] },
                  e._renderUserCells(t),
                )
              }),
              v()(c()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  g.a.createElement(
                    Tt.a,
                    { key: 'button_done', onPress: e, style: Qn.cancelButton, type: 'primaryOutlined' },
                    qn,
                  )
                )
              }),
              v()(c()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return g.a.createElement(Hn, {
                    history: e.props.history,
                    key: n.userId,
                    onUndoPress: e._reactionUndoHandler(n.reactionKey, t),
                    renderUndo: n.isLoggedInUser,
                    user: n,
                    withBottomBorder: r !== e.props.usersWithReactions.length - 1,
                  })
                })
              }),
              v()(c()(e), '_reactionUndoHandler', function (t, n) {
                return function () {
                  var r = e.props,
                    i = r.conversationId,
                    a = r.createLocalApiErrorHandler,
                    o = r.entryId,
                    s = r.fetchUpdatesIfNeeded,
                    c = r.loggedInUserId,
                    l = r.removeReaction,
                    u = { reaction_key: t, conversation_id: i, dm_id: o, perspective: c }
                  n(), l(u).then(e._handleScribeRemoveReaction(t)).then(s).catch(a())
                }
              }),
              v()(c()(e), '_handleScribeRemoveReaction', function (t) {
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
                    Vn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(Yn, 'contextType', fe.a)
      var Qn = ie.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Xn = Object(Ct.a)(Object(mt.a)(Mn(Yn)))
      function Jn(e, t) {
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
      function Zn(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var $n = Ze.a.h95f9e76,
        er = (function (e) {
          u()(n, e)
          var t = Zn(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              v()(c()(r), '_handleScribeDMReactionSummary', function () {
                r.props.analytics.scribe({ component: 'dm_reaction_summary', action: 'show' })
              }),
              v()(c()(r), '_onSetReactionsNode', function (e) {
                r._measureWidths(e || void 0)
              }),
              v()(c()(r), '_renderReactions', function (e) {
                var t = e.isHovered,
                  n = r.props,
                  i = n.reactionsWithCounts,
                  a = n.selectedReactionKey,
                  o = r.state.emojiSize || 'headline1',
                  s = i.size - 1
                return Array.from(i, function (e, n) {
                  var r = Te()(e, 2),
                    i = r[0],
                    c = r[1]
                  return g.a.createElement(pt, {
                    count: c,
                    emojiSize: o,
                    emotion: i,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: i,
                    style: [
                      n === s && tr.rightPadding,
                      tr.elementPadding,
                      a === i ? tr.selfSelect : null,
                      t && tr.isHoveredDMReaction,
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
                    i = e.isSent,
                    a = e.totalReactionCount,
                    o = this.state.emojiSize
                  if (0 === a) return null
                  var s = re.a.generate({
                      backgroundColor: ie.a.theme.colors.gray50,
                      color: ie.a.theme.colors.gray700,
                    }),
                    c = $n({ reactionCount: a })
                  return g.a.createElement(
                    be.a,
                    {
                      style: [
                        tr.container,
                        r ? tr.marginShort : tr.marginLong,
                        i ? tr.alignRight : tr.alignLeft,
                        o ? tr.visible : tr.invisible,
                      ],
                    },
                    g.a.createElement(
                      Xn,
                      { conversationId: t, entryId: n },
                      g.a.createElement(
                        oe.a,
                        {
                          accessibilityLabel: c,
                          focusable: !0,
                          interactiveStyles: s,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: tr.content,
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
                      i = (e ? e.getBoundingClientRect() : {}).width
                    ;(void 0 === i ? 0 : i) > r && (n.emojiSize = 'subtext2')
                  }
                  this.setState(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                        t % 2
                          ? Jn(Object(n), !0).forEach(function (t) {
                              v()(e, t, n[t])
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : Jn(Object(n)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                      }
                      return e
                    })({}, n),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        tr = ie.a.create(function (e) {
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
            selfSelect: { borderColor: ie.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        nr = Object(mt.a)(xn(er)),
        rr = n('Xrkv')
      function ir(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ar = Ze.a.icd0bf34,
        or = Ze.a.e8bd8fec,
        sr = Ze.a.b2d32fad,
        cr = Ze.a.a763d33e,
        lr = (function (e) {
          u()(n, e)
          var t = ir(n)
          function n(e) {
            var r
            return (
              i()(this, n),
              (r = t.call(this, e)),
              v()(c()(r), '_handlePress', function (e) {
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
                    be.a,
                    { style: ur.root },
                    g.a.createElement(
                      _e.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: ur.seenLabel },
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
                  return n ? (t ? sr : ar) : r.length ? cr({ count: r.length }) : or
                },
              },
              {
                key: '_renderNameList',
                value: function () {
                  var e = this,
                    t = this.props.namesToDisplay,
                    n = !this.state.showFullList && t.length > 10,
                    r = t.length - 10,
                    i = function (t) {
                      var n = t.namesList,
                        r = t.othersCount
                      return g.a.createElement(
                        Ze.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        g.a.createElement(_e.b, null, n),
                        g.a.createElement(
                          _e.b,
                          { color: 'link', onPress: e._handlePress },
                          Ze.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var a = Object(rr.a)(t, n)
                  return g.a.createElement(
                    _e.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: ur.namesList },
                    n ? g.a.createElement(i, { namesList: a, othersCount: r }) : g.a.createElement(_e.b, null, a),
                  )
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent),
        ur = ie.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        dr = lr,
        pr = n('t0aI'),
        fr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user,
            i = Object.keys(n),
            a = hr({ entryId: t, participants: n, user: r })
          return { namesToDisplay: a, isSeenByEveryone: a.length === i.length - 1 }
        },
        hr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, i) {
            var a = n[i],
              o = a.join_conversation_event_id,
              s = a.last_read_event_id,
              c = a.user.name,
              l = i !== r.id_str,
              u = s && 1 !== Object(pr.a)(t, s),
              d = !o || 1 !== Object(pr.a)(o, t)
            return l && u && d && e.push(c), e
          }, [])
        },
        mr = n('IMYl'),
        vr = n('21zW'),
        yr = n('gmpV')
      function gr(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var br = Ze.a.fad48ee9,
        _r = Ze.a.ba60339a,
        Rr = Ze.a.d338f53e,
        Or = Ze.a.ae7d7a24,
        Er = Ze.a.d725a288,
        Sr = Ze.a.bbe74f3f,
        wr = Ze.a.h0e4cdf4,
        Cr = Ze.a.bfbc051c,
        xr = (function (e) {
          u()(n, e)
          var t = gr(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_handleRemove', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryId
                ;(0, t.removeEntry)(n, null, { id: r })
              }),
              v()(c()(e), '_handleTryAgain', function () {
                var t = e.props,
                  n = t.conversationId,
                  r = t.entryText,
                  i = t.localMediaId
                ;(0, t.sendMessage)({
                  tweetAttachment: void 0,
                  senderId: t.user.id_str,
                  conversationId: n,
                  text: r,
                  localMediaId: i,
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
                    i = this._renderError(),
                    a = this._renderTimestamp(),
                    o = this._renderReadReceipt(),
                    s = this._renderSentCheckmark(),
                    c = this._renderReactions(),
                    l = a || o || s,
                    u = r || i || c || l,
                    d =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled')
                  return (
                    u &&
                    g.a.createElement(
                      be.a,
                      { style: [Ar.root, d && Ar.vdlRootMargin, t && Ar.sentMessage] },
                      r,
                      i,
                      c,
                      l
                        ? g.a.createElement(
                            oe.a,
                            { interactiveStyles: null, onPress: n, style: t && Ar.sentContainer },
                            g.a.createElement(be.a, { style: t && Ar.groupedItems }, a, s),
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
                      be.a,
                      null,
                      g.a.createElement(_e.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Or),
                      g.a.createElement(
                        be.a,
                        { style: Ar.groupedItems },
                        g.a.createElement(
                          _e.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          _r,
                        ),
                        g.a.createElement(vr.a, null),
                        g.a.createElement(
                          _e.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          Rr,
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
                    i = e.isRapidFire,
                    a = e.isSent,
                    o = e.withUserAvatar,
                    s = !i || r
                  return t
                    ? g.a.createElement(
                        be.a,
                        { style: o && Ar.footerPadderWithAvatar },
                        g.a.createElement(nr, { conversationId: t, entryId: n, isEndOfDM: s, isSent: a }),
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
                    i = e.isError,
                    a = e.isGroupDM,
                    o = e.isSent,
                    s = e.participants,
                    c = e.user
                  return n && o && !r && !i
                    ? g.a.createElement(dr, gn()({ isGroupDM: a }, fr({ entryId: t, participants: s, user: c })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && g.a.createElement(_e.b, { align: 'right', color: 'gray700', size: 'subtext2' }, br)
                },
              },
              {
                key: '_renderSentCheckmark',
                value: function () {
                  var e = this.props,
                    t = e.entryId,
                    n = e.isDraft,
                    r = e.isError,
                    i = e.isLastRapidFire,
                    a = e.isRapidFire,
                    o = e.isSent,
                    s = e.participants,
                    c = e.user,
                    l = fr({ entryId: t, participants: s, user: c }).isSeenByEveryone
                  return !o || n || r || (a && !i)
                    ? null
                    : g.a.createElement(
                        _e.b,
                        { color: l ? 'primary' : 'gray700', style: Ar.checkmarkContainer },
                        g.a.createElement(mr.a, { style: Ar.checkmark }),
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
                    i = e.isGroupDM,
                    a = e.isLastRapidFire,
                    o = e.isRapidFire,
                    s = e.isSent,
                    c = e.user.name,
                    l = e.withUserAvatar
                  if (n || r || (o && !a)) return null
                  var u,
                    d = new Date(Number(t))
                  u = Object(yr.c)(d) ? Er(d) : Object(yr.d)(d) ? Sr({ time: Er(d) }) : Object(yr.e)(d) ? wr(d) : Cr(d)
                  var p = i && !s,
                    f = s ? 'right' : 'left'
                  return g.a.createElement(
                    be.a,
                    { style: [l && Ar.footerPadderWithAvatar, s && Ar.timestamp] },
                    g.a.createElement(
                      _e.b,
                      { align: f, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !Pt.a.isEnabled },
                      p &&
                        g.a.createElement(
                          Ze.a.I18NFormatMessage,
                          { $i18n: 'c8b914d4' },
                          g.a.createElement(_e.b, null, c),
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
      v()(xr, 'contextType', ee.a)
      var Ar = ie.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: Rn },
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
        kr = _n(xr),
        Tr = n('jtO7'),
        Pr = ie.a.create(function (e) {
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
        Ir = function (e) {
          var t = e.insideTopRounded,
            n = e.isLast,
            r = e.isSent,
            i = e.label,
            a = e.onClick,
            o = e.outsideTopRounded,
            s = e.tcoUrl,
            c = [
              Pr.root,
              n && Pr.isLast,
              n && r && Pr.sentLast,
              n && !r && Pr.receivedLast,
              t && r && Pr.insideTopRoundedSent,
              t && !r && Pr.insideTopRoundedReceived,
              o && r && Pr.outsideTopRoundedSent,
              o && !r && Pr.outsideTopRoundedReceived,
            ]
          return g.a.createElement(
            be.a,
            { style: c },
            g.a.createElement(Tr.a, { align: 'center', color: 'primary', label: i, link: s, onClick: a }),
          )
        },
        jr = n('fs1G')
      function Mr(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Dr = (function (e) {
        u()(n, e)
        var t = Mr(n)
        function n() {
          return i()(this, n), t.apply(this, arguments)
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
                  i = e.withSticker,
                  a = e.withUserText,
                  o = t.map(function (e, o) {
                    var s = 0 === o
                    return g.a.createElement(Ir, {
                      insideTopRounded: s && (i || !a),
                      isLast: o === t.length - 1,
                      isSent: n,
                      key: o,
                      label: e.label,
                      onClick: r,
                      outsideTopRounded: s && i,
                      tcoUrl: e.tco_url,
                    })
                  })
                return g.a.createElement(be.a, null, o)
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      v()(Dr, 'defaultProps', { onCtaClick: jr.a, onImpression: jr.a })
      var Lr = Dr,
        Br = (n('1IsZ'), n('vjRr')),
        Fr = n('EGrD'),
        Nr = function (e, t) {
          return Br.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        Ur = Object(bn.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: Fr.c, card: Nr }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: Fr.a,
              loadAdFreeArticleDomainsFromPersistence: Fr.b,
              popOutConversation: R.popOutConversation,
            }
          }),
        Hr = ie.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        Wr = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            i = void 0 === r || r,
            a = e.textContent
          return g.a.createElement(be.a, { style: [i ? Hr.visible : Hr.invisible, Hr.root] }, n, t, a)
        },
        Vr = n('cTG8'),
        zr = function (e) {
          var t = e.excludeCardUrl,
            n = e.isActive,
            r = void 0 !== n && n,
            i = e.isFailedDraft,
            a = e.isFirstRapidFire,
            o = void 0 !== a && a,
            s = e.isRapidFire,
            c = void 0 !== s && s,
            l = e.isSent,
            u = e.hasAssociatedAttachment,
            d = e.messageData,
            p = void 0 === d ? {} : d,
            f = e.rootStyle,
            h = e.tweetId,
            m = e.withCta,
            v = e.withMediaLinks,
            y = e.withMessageBubble,
            b = g.a.useContext(ee.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            R = [
              f,
              y && qr.messageTextContainer,
              y && l && qr.sent,
              y && !l && qr.received,
              i && qr.failedDraft,
              c && !o && !l && qr.rapidFireReceived,
              c && !o && l && qr.rapidFireSent,
              u && l && qr.hasAssociatedAttachmentSent,
              u && !l && qr.hasAssociatedAttachmentReceived,
              y && _ && l && qr.vdlSent,
              y && r && l && qr.activeSent,
              y && _ && r && l && qr.vdlActiveSent,
              y && r && !l && !Pt.a.isEnabled && qr.activeReceived,
              m && qr.withCta,
            ],
            O = [qr.tweetText, y && qr.textAlignLeft, !y && l && qr.textAlignRight],
            E = ie.a.theme.colors,
            S = E.gray0,
            w = E.magenta500,
            C = E.primary,
            x = E.text,
            A = E.white,
            k = re.a.generate({ color: l ? A : x, backgroundColor: i ? w : l ? C : S }),
            T = (p.text && p.text.length) || 0
          return g.a.createElement(
            oe.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: y ? k : null, style: R },
            g.a.createElement(Vr.a, {
              color: ie.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, T],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (y && l) || ie.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: y ? void 0 : 'title2',
              style: O,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        qr = ie.a.create(function (e) {
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
      zr.defaultProps = { withMediaLinks: !1 }
      var Gr = zr,
        Kr = function (e) {
          var t = e.isActive,
            n = void 0 !== t && t,
            r = e.isFailedDraft,
            i = e.isFirstRapidFire,
            a = void 0 !== i && i,
            o = e.isRapidFire,
            s = void 0 !== o && o,
            c = e.isSent,
            l = e.messageData,
            u = e.withCta,
            d = e.withMessageBubble
          return g.a.createElement(Gr, {
            isActive: n,
            isFailedDraft: r,
            isFirstRapidFire: a,
            isRapidFire: s,
            isSent: c,
            messageData: l,
            withCta: u,
            withMediaLinks: !0,
            withMessageBubble: d,
          })
        },
        Yr = n('LSr9'),
        Qr = n('aX4+'),
        Xr = n('/Ikv')
      function Jr(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Zr = Xr.a.CardNames,
        $r = (function (e) {
          u()(n, e)
          var t = Jr(n)
          function n() {
            var e, r
            i()(this, n)
            for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s]
            return (
              (r = t.call.apply(t, [this].concat(o))),
              v()(c()(r), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(
                c()(r),
                '_hasClaimsForAdFreeArticles',
                null === (e = r.context.userClaims) || void 0 === e
                  ? void 0
                  : e.isTrueAndEnabled('subscriptions_feature_1006'),
              ),
              v()(c()(r), '_handleAttachmentLayout', function (e) {
                var t = e.nativeEvent.layout.width
                if (r.state.attachmentWidth !== t) {
                  var n = { attachmentWidth: t }
                  r.setState(n)
                }
              }),
              v()(c()(r), '_handleOnClick', function (e) {
                var t = r.props,
                  n = t.card.binding_values,
                  i = t.conversationId,
                  a = t.popOutConversation
                if ((i && a(i), r._hasClaimsForAdFreeArticles)) {
                  var o = r.props,
                    s = o.adFreeArticleDomains,
                    c = o.createLocalApiErrorHandler,
                    l = o.fetchAdFreeToken,
                    u = new Yr.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Xr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Xr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    d = Te()(u, 2),
                    p = d[0],
                    f = d[1]
                  p && f(e)
                }
              }),
              v()(c()(r), '_handleTextContentLayout', function (e) {
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
                    i = e.isFailedDraft,
                    a = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    s = e.isSent,
                    c = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    h = !!Object.values(Zr).includes(t.name),
                    m = Nt(n, p, f),
                    v = m.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    y = g.a.createElement(
                      be.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      g.a.createElement(Qr.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: c.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    b = n
                      ? g.a.createElement(
                          be.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? ei.sentMessageWrapper : ei.receivedMessageWrapper,
                          },
                          g.a.createElement(Gr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: i,
                            isFirstRapidFire: a,
                            isRapidFire: o,
                            isSent: s,
                            messageData: c,
                            rootStyle: m.isTextSquared ? (s ? ei.textSentSquared : ei.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? g.a.createElement(Wr, { attachmentContent: y, isVisible: m.compositeRendered, textContent: b })
                    : g.a.createElement(Kr, {
                        isActive: r,
                        isFailedDraft: i,
                        isFirstRapidFire: a,
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
      v()($r, 'defaultProps', { hasUserText: !1 }), v()($r, 'contextType', ee.a)
      var ei = ie.a.create(function (e) {
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
        ti = Ur($r)
      function ni(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ri = Ze.a.f720438f,
        ii = (function (e) {
          u()(n, e)
          var t = ni(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(c()(e), '_getSquareBottomStyles', function (t) {
                var n = e.props.isSent,
                  r = 'left'
                return t ? (r = 'both') : n && (r = 'right'), ai[r]
              }),
              v()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                e.state.attachmentWidth !== n && e.setState({ attachmentWidth: n })
              }),
              v()(c()(e), '_handleTextContentLayout', function (t) {
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
                    i = e.isFirstRapidFire,
                    a = e.isRapidFire,
                    o = e.isSent,
                    s = e.messageData,
                    c = e.withCta,
                    l = e.withMessageBubble,
                    u = this.state,
                    d = u.attachmentWidth,
                    p = u.textContentWidth
                  if (!s || !s.attachment || !s.attachment.fleet) return null
                  var f = Nt(t, d, p),
                    h = f.compositeRendered,
                    m = f.isAttachmentSquared,
                    v = f.isTextSquared,
                    y = [
                      oi.tombstoneWrapper,
                      o ? oi.sentMessageWrapper : oi.receivedMessageWrapper,
                      this._getSquareBottomStyles(m),
                    ],
                    b = g.a.createElement(
                      be.a,
                      { onLayout: this._handleAttachmentLayout, style: y },
                      g.a.createElement(_e.b, { color: 'gray700' }, ri),
                    ),
                    _ = t
                      ? g.a.createElement(
                          be.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? oi.sentMessageWrapper : oi.receivedMessageWrapper,
                              !l && oi.fleetReactionSpacing,
                            ],
                          },
                          g.a.createElement(Gr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: a,
                            isSent: o,
                            messageData: s,
                            rootStyle: v ? (o ? oi.sentSquared : oi.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: l,
                          }),
                        )
                      : null
                  return g.a.createElement(Wr, { attachmentContent: b, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(g.a.Component),
        ai = ie.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        oi = ie.a.create(function (e) {
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
        si = ii,
        ci = n('prG5'),
        li = n('RCZO'),
        ui = n('A91F'),
        di = Ze.a.b327c129,
        pi = function (e) {
          e.stopPropagation()
        },
        fi = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || di,
            i = t.media_url_https,
            a = t.original_info || {},
            o = a.height,
            s = a.width,
            c = Object(li.b)(t).rgb,
            l = g.a.createElement(ci.a, {
              accessibilityLabel: r,
              aspectMode: ui.a.withinRange(9 / 16, 10),
              backgroundColor: c,
              image: { url: i, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? g.a.createElement(oe.a, { interactiveStyles: null, link: n, onPress: pi }, l) : l
        },
        hi = n('Modb'),
        mi = n('lklz'),
        vi = n('XrEN'),
        yi = n('ZvMt'),
        gi = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && vi.a.extractVideoProps(mi.b.forDm(n), t)
          return r
            ? g.a.createElement(
                hi.a,
                gn()({}, r, { aspectRatio: yi.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        bi = Object(bn.a)().withAnalytics()
      function _i(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Ri = (function (e) {
        u()(n, e)
        var t = _i(n)
        function n(e, r) {
          var a
          return (
            i()(this, n),
            (a = t.call(this, e, r)),
            v()(c()(a), '_handleLayout', function (e) {
              var t = e.nativeEvent.layout.width
              a.state.width !== t && a.setState({ width: t })
            }),
            v()(c()(a), '_getElement', function () {
              var e = a.props,
                t = e.contentType,
                n = e.isSensitive
              return ''.concat(n ? 'sensitive' : 'untrusted', '_').concat(t, '_interstitial')
            }),
            v()(c()(a), '_handleClick', function () {
              var e = a.props.analytics
              a.setState({ hide: !1 }), e.scribe({ element: a._getElement(), action: 'reveal' })
            }),
            (a.state = { hide: !0, width: 0 }),
            a
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
                  i = e.withSquareBottomBorderRadius,
                  a = this.state,
                  o = a.hide,
                  s = a.width < ie.a.theme.breakpoints.micro
                return o
                  ? g.a.createElement(
                      be.a,
                      {
                        focusable: !0,
                        onLayout: this._handleLayout,
                        style: [
                          Ei.root,
                          s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                          i && Oi[i],
                        ],
                      },
                      g.a.createElement(be.a, { style: Ei.description }, g.a.createElement(_e.b, null, r)),
                      g.a.createElement(
                        be.a,
                        { style: [Ei.button, s ? Ei.breakButtonWrapper : void 0] },
                        g.a.createElement(
                          Tt.a,
                          { onClick: this._handleClick, size: 'small', style: Ei.buttonElement, type: 'brandText' },
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
      v()(Ri, 'defaultProps', { isSensitive: !1 })
      var Oi = ie.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Ei = ie.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: ie.a.theme.spaces.space4,
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
        Si = Object(mt.a)(bi(Ri)),
        wi = n('CoGJ')
      function Ci(e, t) {
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
      function xi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ci(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ci(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ai(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ki = g.a.createElement(wi.a, null),
        Ti = Ze.a.d9de7b57,
        Pi = Ze.a.f2879f4d,
        Ii = Ze.a.b518221e,
        ji = Ze.a.eeaa9f90,
        Mi = Ze.a.g2b43663,
        Di = Ze.a.f277e949,
        Li = (function (e) {
          u()(n, e)
          var t = Ai(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), 'state', { attachmentWidth: void 0, textContentWidth: void 0 }),
              v()(c()(e), '_renderAttachment', function () {
                var t,
                  n,
                  r = e.props,
                  i = r.entry,
                  a = r.hasUserText,
                  o = r.isFirstRapidFire,
                  s = r.isRapidFire,
                  c = r.isSent,
                  l = r.isTrusted,
                  u = r.messageData,
                  d = e.state,
                  p = d.attachmentWidth,
                  f = d.textContentWidth,
                  h = (u || {}).attachment,
                  m = i.is_draft,
                  v = Nt(a, p, f),
                  y = [
                    Bi.mediaAttachment,
                    c && Bi.isSent,
                    !c && Bi.received,
                    c && v.isAttachmentSquared && Bi.equalComponentDimensionsSent,
                    !c && v.isAttachmentSquared && Bi.equalComponentDimensionsReceived,
                    s && !o && c && Bi.rapidFireSent,
                    s && !o && !c && Bi.rapidFireReceived,
                  ],
                  b = null
                if (
                  (!m && i.conversation_id && (b = '/messages/'.concat(i.conversation_id, '/media/').concat(i.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = g.a.createElement(fi, { media: t, mediaUrl: b }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = g.a.createElement(gi, { media: t, messageId: i.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(I.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = g.a.createElement(gi, { media: t, messageId: i.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                  R = t && n && (c ? n : e._getMediaContentWithGuard(t, l, n, _))
                return {
                  attachmentContent: g.a.createElement(be.a, { onLayout: e._handleAttachmentLayout, style: y }, R),
                  media: t,
                }
              }),
              v()(c()(e), '_handleAttachmentLayout', function (t) {
                var n = t.nativeEvent.layout.width
                if (e.state.attachmentWidth !== n) {
                  var r = { attachmentWidth: n }
                  e.setState(r)
                }
              }),
              v()(c()(e), '_handleTextContentLayout', function (t) {
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
                    i = e.isFailedDraft,
                    a = e.isFirstRapidFire,
                    o = e.isRapidFire,
                    s = e.isSent,
                    c = e.messageData,
                    l = e.withCta,
                    u = e.withMessageBubble,
                    d = this.state,
                    p = d.attachmentWidth,
                    f = d.textContentWidth,
                    h = t.is_draft,
                    m = Nt(n, p, f),
                    v = this._renderAttachment(),
                    y = v.attachmentContent,
                    b = v.media,
                    _ = n
                      ? g.a.createElement(
                          be.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? Bi.sentMessageWrapper : Bi.receivedMessageWrapper,
                          },
                          g.a.createElement(Gr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: i,
                            isFirstRapidFire: !!a,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: h ? c : this._parseMessageData(c, b),
                            rootStyle: m.isTextSquared ? (s ? Bi.sentSquared : Bi.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return g.a.createElement(Wr, { attachmentContent: y, isVisible: m.compositeRendered, textContent: _ })
                },
              },
              {
                key: '_getMediaContentWithGuard',
                value: function (e, t, n, r) {
                  var i = this.props,
                    a = i.displaySensitiveMedia,
                    o = i.isDmNsfwMediaFilterEnabled
                  if (
                    e.possibly_sensitive &&
                    this.context.featureSwitches.isTrue('dm_conversations_nsfw_media_filter_enabled')
                  ) {
                    if (o) {
                      var s = ('animated_gif' === e.type && Mi) || ('video' === e.type && ji) || Ii
                      return g.a.createElement(
                        Si,
                        {
                          contentType: e.type,
                          ctaText: s,
                          description: Pi,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!a && e.possibly_sensitive)
                    return g.a.createElement(
                      Si,
                      {
                        contentType: e.type,
                        ctaText: Di,
                        description: ki,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : g.a.createElement(
                        Si,
                        { contentType: e.type, ctaText: Di, description: Ti, withSquareBottomBorderRadius: r },
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
                    ? xi(xi({}, e), {}, { entities: xi(xi({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(g.a.Component)
      v()(Li, 'contextType', ee.a), v()(Li, 'defaultProps', { hasUserText: !1 })
      var Bi = ie.a.create(function (e) {
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
        Fi = Li,
        Ni = Object(bn.a)().propsFromActions(function () {
          return { markSpamStatus: R.markSpamStatus }
        })
      function Ui(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Hi = Ze.a.fd07947f,
        Wi = Ze.a.c7a92dc9,
        Vi = Ze.a.f277e949,
        zi = Ze.a.fb3ccb55,
        qi = Ni(
          (function (e) {
            u()(n, e)
            var t = Ui(n)
            function n() {
              var e
              i()(this, n)
              for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
              return (
                (e = t.call.apply(t, [this].concat(a))),
                v()(c()(e), '_handlePress', function (t) {
                  return function () {
                    var n = e.props,
                      r = n.conversationId,
                      i = n.dmId
                    ;(0, n.markSpamStatus)({ conversationId: r, dmId: i, markSpam: t })
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
                      Si,
                      { contentType: 'dm', ctaText: Vi, description: zi },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return g.a.createElement(
                      be.a,
                      { style: Gi.buttons },
                      g.a.createElement(
                        Tt.a,
                        { onPress: this._handlePress(!1), style: Gi.leftButton, type: 'brandOutlined' },
                        Wi,
                      ),
                      g.a.createElement(Tt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, Hi),
                    )
                  },
                },
              ]),
              n
            )
          })(g.a.PureComponent),
        ),
        Gi = ie.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        Ki = n('U+bB'),
        Yi = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        Qi = ie.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        Xi = function (e) {
          var t = e.sticker
          return g.a.createElement(Ki.a, { accessibilityLabel: t.display_name, source: Yi(t), style: Qi.stickerItem })
        },
        Ji = n('XOJV'),
        Zi = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        $i = Object(bn.a)()
          .propsFromState(function () {
            return { tweet: Ji.a.createHydratedTweetSelector(Zi) }
          })
          .propsFromActions(function () {
            return { popOutConversation: R.popOutConversation }
          }),
        ea = n('b5s6'),
        ta = g.a.createElement(_e.b, { link: '/settings/safety' }),
        na = function (e) {
          return g.a.createElement(
            Ze.a.I18NFormatMessage,
            { $i18n: 'j3c7dd33' },
            g.a.cloneElement(ta, null, Ze.a.adcf07b5),
          )
        },
        ra = Ze.a.e4df0ad7,
        ia = Ze.a.f277e949,
        aa = Ze.a.b5b91d58,
        oa = Ze.a.bb594d7b,
        sa = g.a.createElement(na, null)
      var ca = ie.a.create(function (e) {
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
        la = $i(function (e) {
          var t = g.a.useContext(ee.a).featureSwitches,
            n = e.conversationId,
            r = e.displaySensitiveMedia,
            i = e.hasUserText,
            a = void 0 !== i && i,
            o = e.isActive,
            s = void 0 !== o && o,
            c = e.isDmNsfwMediaFilterEnabled,
            l = e.isFailedDraft,
            u = e.isFirstRapidFire,
            d = void 0 !== u && u,
            p = e.isRapidFire,
            f = void 0 !== p && p,
            h = e.isSent,
            m = e.isTrusted,
            v = e.messageData,
            y = e.popOutConversation,
            b = e.tweet,
            _ = e.withCta,
            R = e.withMessageBubble,
            O = g.a.useState(void 0),
            E = Te()(O, 2),
            S = E[0],
            w = E[1],
            C = g.a.useState(void 0),
            x = Te()(C, 2),
            A = x[0],
            k = x[1],
            T = g.a.useMemo(
              function () {
                return function () {
                  n && y(n)
                }
              },
              [n, y],
            ),
            P = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  S !== t && w(t)
                }
              },
              [S],
            ),
            I = g.a.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  A !== t && k(t)
                }
              },
              [A],
            )
          if (!v || !v.attachment || !v.attachment.tweet) return null
          var j = v.attachment.tweet,
            M = h ? 'sent' : 'received',
            D = Nt(a, S, A),
            L = g.a.createElement(ea.a, {
              onPress: T,
              style: [
                ca[M],
                a && ca.attachment,
                D.isAttachmentSquared ? (h ? ca.sentAttachmentSquared : ca.receivedAttachmentSquared) : void 0,
              ],
              tweetId: j.status,
            }),
            B = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            F = (function () {
              if (!b) return null
              if (h) return L
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (c || void 0 === c)
                  return g.a.createElement(
                    Si,
                    { contentType: 'photo', ctaText: oa, description: aa, withSquareBottomBorderRadius: B },
                    L,
                  )
              } else if (!r && b.possibly_sensitive)
                return g.a.createElement(
                  Si,
                  { contentType: 'photo', ctaText: ia, description: sa, withSquareBottomBorderRadius: B },
                  L,
                )
              return m
                ? L
                : g.a.createElement(
                    Si,
                    { contentType: 'tweet', ctaText: ia, description: ra, withSquareBottomBorderRadius: B },
                    L,
                  )
            })(),
            N = g.a.createElement(be.a, { onLayout: P, style: ca.attachment }, F),
            U = a
              ? g.a.createElement(
                  be.a,
                  { onLayout: I, style: h ? ca.sentMessageWrapper : ca.receivedMessageWrapper },
                  g.a.createElement(Gr, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: f,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? ca.sentSquared : ca.receivedSquared) : void 0,
                    tweetId: j.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: R,
                  }),
                )
              : null
          return g.a.createElement(Wr, { attachmentContent: N, isVisible: D.compositeRendered, textContent: U })
        }),
        ua = n('8W85')
      function da() {
        var e = g.a.useContext(Ea),
          t = Te()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          i = Te()(e.playerApi, 2)[1],
          a = Te()(e.playerState, 2)[1]
        var o = {
          media: Te()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: a,
        }
        return g.a.createElement(ua.a, o)
      }
      var pa = n('89tF'),
        fa = n('k89r')
      function ha(e, t) {
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
      function ma(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ha(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ha(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function va(e) {
        var t,
          n,
          r,
          i,
          a,
          o =
            ((t = g.a.useState(ba.activeVoiceMessage)),
            (n = g.a.useState(ba.playerApi)),
            (r = g.a.useState(ba.playerState)),
            (a = Object(fa.a)()),
            (i = g.a.useMemo(
              function () {
                var e = { page: 'messages', section: 'thread', component: 'message', element: 'voice' }
                function t(t) {
                  var n = t.action,
                    r = t.component,
                    i = void 0 === r ? e.component : r,
                    a = e.element
                  return { page: e.page, section: e.section, component: i, element: a, action: n }
                }
                var n = function (e, n) {
                  return n
                    ? n.data
                      ? a.scribe(ma(ma({}, t({ action: e })), {}, { data: n.data }))
                      : a.scribe(ma({}, t({ action: e, component: ga(n) })))
                    : a.scribe(ma({}, t({ action: e })))
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
              [a],
            )),
            { activeVoiceMessage: t, playerApi: n, playerState: r, scribeAction: i })
        return g.a.createElement(_a.Provider, { value: o }, e.children)
      }
      var ya = {
        Timelines: Object(pa.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function ga(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? ya.Timelines.inbox_timeline
          : t
          ? ya.Timelines.low_quality_timeline
          : ya.Timelines.requests_timeline
      }
      var ba = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        _a = g.a.createContext({
          activeVoiceMessage: [ba.activeVoiceMessage, Ra],
          playerApi: [ba.playerApi, Ra],
          playerState: [ba.playerState, Ra],
          scribeAction: null,
        })
      function Ra() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function Oa(e) {
        var t = g.a.useContext(ee.a).featureSwitches
        return Object(I.j)(t) ? g.a.createElement(va, null, e.children, g.a.createElement(da, null)) : e.children
      }
      var Ea = _a,
        Sa = n('MH+I'),
        wa = n('5Ixf'),
        Ca = n('AtEG')
      function xa(e) {
        var t,
          n,
          r = g.a.useContext(Ea),
          i = e.isLowQuality,
          a = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var s = Te()(r.activeVoiceMessage, 2),
          c = s[0],
          l = s[1],
          u = Te()(r.playerApi, 1)[0],
          d = Te()(r.playerState, 1)[0],
          p = r.scribeAction,
          f = Te()(c, 1)[0],
          h = e.messageId === f
        if (!p) return null
        var m = ka(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          y = {
            durationMs: v,
            isActive: h,
            isSent: a,
            playerApi: null,
            playerState: null,
            onImpression: function () {
              return p.impression({ isLowQuality: i, isTrusted: o })
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
            m &&
            m.contentId === e.media.id_str &&
            ((y.playerApi = u),
            (y.playerState = d),
            null != m && m.durationMs && (y.durationMs = null == m ? void 0 : m.durationMs)),
          g.a.createElement(Aa, y)
        )
      }
      function Aa(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          i = e.playerState,
          a = null == i ? void 0 : i.isPlaying,
          o = ka(i),
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
        var u = ie.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            Ia.voiceMessage,
            ja({ isSent: n, squared: t }),
            n ? Ia.voiceMessageSent : Ia.voiceMessageReceived,
            De(ie.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          f = a ? wa.a : Ca.a
        return g.a.createElement(
          be.a,
          { style: [Ia.container, De(ie.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          g.a.createElement(
            be.a,
            { style: p },
            g.a.createElement(be.a, { style: Ia.startSpacer }),
            g.a.createElement(Tt.a, {
              accessibilityLabel: a ? Pa : Ta,
              icon: g.a.createElement(f, { style: u ? Ia.iconColorDark : Ia.iconColorDefault }),
              onPress: function () {
                r ? (a ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            g.a.createElement(be.a, { style: Ia.durationSpacer }),
            g.a.createElement(
              be.a,
              { style: n ? Ia.durationOpacity : void 0 },
              g.a.createElement(
                Sa.a,
                gn()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Ia.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            g.a.createElement(be.a, { style: Ia.endSpacer }),
          ),
        )
      }
      var ka = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        Ta = Ze.a.c94b7d89,
        Pa = Ze.a.eb6f9582,
        Ia = ie.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: je.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function ja(e) {
        var t = e.isSent,
          n = e.squared
        return [Ma.base, t ? Ma.sent : Ma.received, n ? (t ? Ma.sentSquared : Ma.receivedSquared) : void 0]
      }
      var Ma = ie.a.create(function (e) {
        return {
          base: {
            borderRadius: e.borderRadii.xLarge,
            WebkitMaskImage: 'url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)',
          },
          sent: { borderBottomRightRadius: e.borderRadii.none },
          sentSquared: { borderTopRightRadius: e.borderRadii.none },
          received: { borderBottomLeftRadius: e.borderRadii.none },
          receivedSquared: { borderTopLeftRadius: e.borderRadii.none },
        }
      })
      function Da(e, t) {
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
      function La(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Da(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Da(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ba(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Fa = (function (e) {
        u()(n, e)
        var t = Ba(n)
        function n() {
          return i()(this, n), t.apply(this, arguments)
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
                  i = t.onCtaClick,
                  a = t.onCtaImpression,
                  o = n.message_data,
                  s = o && o.attachment ? o.attachment : {},
                  c = n.marked_as_spam,
                  l = Bt(n),
                  u = !!o && !!o.ctas,
                  d = Lt(n),
                  p = (function (e) {
                    var t = e.message_data
                    if (!t) return !1
                    if (Bt(e) && !Ft(e)) return !1
                    if (!t.text) return !1
                    var n = Object(Mt.parse)(t.text)
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
                  f = !(d && p),
                  h = Ft(n)
                e = s.sticker ? g.a.createElement(Xi, { sticker: s.sticker }) : this._renderDMMessage(d, u, f)
                var m = c ? g.a.createElement(qi, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                  v = l && !h && !Object(I.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                  y = [
                    r ? Na.isSent : Na.isReceived,
                    u && Na.withCta,
                    v ? Na.mediaRoot : Na.flexShrink,
                    this.props.style,
                  ]
                return g.a.createElement(
                  be.a,
                  { style: y },
                  m,
                  o && o.ctas
                    ? g.a.createElement(Lr, {
                        callToActions: o.ctas,
                        isSent: r,
                        onCtaClick: i,
                        onImpression: a,
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
                  i = r.displaySensitiveMedia,
                  a = r.entry,
                  o = r.isActive,
                  s = r.isDmNsfwMediaFilterEnabled,
                  c = r.isFirstRapidFire,
                  l = r.isLowQuality,
                  u = r.isRapidFire,
                  d = r.isSent,
                  p = r.isTrusted,
                  f = a.error,
                  h = a.message_data,
                  m = h && La(La({}, h), {}, { entities: (h && h.entities) || void 0, error: f }),
                  v = null == m ? void 0 : m.attachment,
                  y = {
                    isActive: o,
                    isFailedDraft: !!f,
                    isFirstRapidFire: c,
                    isRapidFire: u,
                    isSent: d,
                    withCta: t,
                    withMessageBubble: n,
                  }
                if (m && v) {
                  if (v.tweet)
                    return g.a.createElement(
                      la,
                      gn()(
                        {
                          conversationId: a.conversation_id,
                          displaySensitiveMedia: i,
                          hasUserText: e,
                          isDmNsfwMediaFilterEnabled: s,
                          isTrusted: p,
                          messageData: m,
                        },
                        y,
                      ),
                    )
                  if (v.photo || v.animated_gif || v.video)
                    return v.video && Object(I.k)(v, this.context.featureSwitches)
                      ? g.a.createElement(xa, {
                          isLowQuality: l,
                          isSent: !!d,
                          isTrusted: p,
                          media: v.video,
                          messageId: a.id,
                        })
                      : g.a.createElement(
                          Fi,
                          gn()(
                            {
                              displaySensitiveMedia: i,
                              entry: a,
                              hasUserText: e,
                              isDmNsfwMediaFilterEnabled: s,
                              isTrusted: p,
                              messageData: m,
                            },
                            y,
                          ),
                        )
                  if (v.card)
                    return g.a.createElement(
                      ti,
                      gn()({ cardUrl: v.card, conversationId: a.conversation_id, hasUserText: e, messageData: m }, y),
                    )
                  if (v.fleet) return g.a.createElement(si, gn()({ entry: a, hasUserText: e, messageData: m }, y))
                }
                return g.a.createElement(Kr, gn()({}, y, { messageData: m }))
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      v()(Fa, 'contextType', ee.a)
      var Na = ie.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Ua = Fa,
        Ha = ie.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Wa = function (e) {
          var t = e.showAvatar,
            n = e.size,
            r = void 0 === n ? 'xLarge' : n,
            i = e.user
          return t
            ? g.a.createElement(Re.a, {
                accessibilityLabel: i.name,
                link: { pathname: '/'.concat(i.screen_name) },
                size: r,
                uri: i.profile_image_url_https,
              })
            : g.a.createElement(be.a, { style: [Ha.avatar, Re.a.getSizeStyle(r)] })
        },
        Va = n('m3Bd'),
        za = n.n(Va),
        qa = n('B3eJ')
      function Ga(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          i = za()(e, ['color', 'isActive', 'size']),
          a = g.a.useContext(Ea),
          o = g.a.useState(0.5),
          s = Te()(o, 2),
          c = s[0],
          l = s[1],
          u = Te()(a.playerState, 1)[0]
        g.a.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * Ka,
          f = [Ya.container, i.style, { width: r, height: r }]
        return g.a.createElement(
          be.a,
          { style: f },
          g.a.createElement(
            be.a,
            { style: [Ya.container, Ya.transitionOpacity, d ? Ya.show : Ya.hide] },
            Me.a.reducedMotionEnabled
              ? null
              : g.a.createElement(qa.a, { audioLevel: c, color: t, paused: !d, size: r }),
          ),
          g.a.createElement(be.a, {
            style: [Ya.border, { width: p, height: p }, Ya.transitionOpacity, n ? Ya.show : Ya.hide],
          }),
        )
      }
      var Ka = parseInt(ie.a.theme.spaces.space2, 10),
        Ya = ie.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Ka,
              left: -1 * Ka,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Qa = n('uArA'),
        Xa = 'messageEntry'
      function Ja(e, t) {
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
      function Za(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ja(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ja(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function $a(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var eo = { element: 'cta_dm' },
        to = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        no = (function (e) {
          u()(n, e)
          var t = $a(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(
                c()(e),
                '_handleClick',
                Object(Qa.a)(function () {
                  var t = e.props,
                    n = t.entry,
                    r = n.error,
                    i = n.id,
                    a = n.is_draft,
                    o = t.isActive,
                    s = t.setActiveEntry
                  a || r || (s(o ? null : i), e._handleScribeMessageEntryClick())
                }),
              ),
              v()(c()(e), '_handleScribeMessageEntryClick', function () {
                var t = e.props.isActive
                if (!Pt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(I.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              v()(c()(e), '_handleCtaImpression', function () {
                e._scribeAction(Za(Za({}, eo), {}, { action: 'show' }))
              }),
              v()(c()(e), '_handleCtaClick', function () {
                e._scribeAction(Za(Za({}, eo), {}, { action: 'click' }))
              }),
              v()(c()(e), '_isDMVoiceMessage', function () {
                var t
                return Object(I.k)(
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
                  return !Object(ge.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.isActive,
                    r = t.isGroupDM,
                    i = t.isSent,
                    a = t.user,
                    o = this._getRapidFireProps(),
                    s = !o.isRapidFire || o.isLastRapidFire,
                    c =
                      this.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                      this.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
                    l = [
                      io.root.base,
                      c && io.root.vdlPadding,
                      s && io.root.contentSpacing,
                      s && c && io.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = c ? r && !i : !i || u
                  if (!a) return null
                  var p = !Pt.a.isEnabled || i
                  return g.a.createElement(
                    Ve.a,
                    { viewType: 'message' },
                    g.a.createElement(
                      be.a,
                      { style: l },
                      g.a.createElement(
                        oe.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: i ? io.root.sent : io.root.received,
                          testID: Xa,
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
                    i = e.rapidFireProps,
                    a = e.withUserAvatar,
                    o = e.withVDLRefresh,
                    s = this.props,
                    c = s.displaySensitiveMedia,
                    l = s.entry,
                    u = s.inboxType,
                    d = s.isActive,
                    p = s.isDmNsfwMediaFilterEnabled,
                    f = s.isGroupDM,
                    h = s.isLowQuality,
                    m = s.isReadOnly,
                    v = s.isSent,
                    y = s.isTrusted,
                    b = s.isVoiceMessageActive,
                    _ = s.isWide,
                    R = s.participants,
                    O = s.perspective,
                    E = s.scribeVoiceMessage,
                    S = s.setShouldFreezeUpdates,
                    w = i.isFirstRapidFire,
                    C = i.isRapidFire,
                    x = [
                      v ? io.messageContainer.sent : io.messageContainer.received,
                      _ ? io.messageContainer.wide : io.messageContainer.narrow,
                      v && _ && io.messageContainer.sentWide,
                      !v && _ && io.messageContainer.receivedWide,
                    ],
                    A = y && !m,
                    k = this._isDMVoiceMessage(),
                    T = null === (t = Object.keys(R)) || void 0 === t ? void 0 : t.length
                  return g.a.createElement(
                    be.a,
                    { style: x },
                    l.error
                      ? null
                      : g.a.createElement(hn, {
                          containerIsActive: d,
                          containerIsFocused: n,
                          containerIsHovered: r,
                          entry: l,
                          inboxType: u,
                          isDraft: !!l.is_draft,
                          isGroupDM: f,
                          isSent: v,
                          onReportMessage:
                            k && E
                              ? function () {
                                  return E.report({ isLowQuality: h, isTrusted: y })
                                }
                              : void 0,
                          participantsCount: T,
                          perspective: O,
                          setShouldFreezeUpdates: S,
                          shouldShowReactionButton: A,
                          style: k && De(ie.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: b }),
                          withVDLRefresh: o,
                        }),
                    g.a.createElement(Ua, {
                      displaySensitiveMedia: c,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: h,
                      isRapidFire: C,
                      isSent: v,
                      isTrusted: y,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: k && De(ie.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: b }),
                    }),
                    this._possiblyRenderUserAvatar(i, a),
                  )
                },
              },
              {
                key: '_renderFooter',
                value: function (e, t) {
                  var n,
                    r,
                    i = e.isLastRapidFire,
                    a = e.isRapidFire,
                    o = this.props,
                    s = o.entry,
                    c = o.isActive,
                    l = o.isGroupDM,
                    u = o.isSent,
                    d = o.participants,
                    p = o.user
                  return p
                    ? g.a.createElement(kr, {
                        conversationId: s.conversation_id,
                        entryId: s.id,
                        entryText: null === (n = s.message_data) || void 0 === n ? void 0 : n.text,
                        entryTime: s.time,
                        isActive: c,
                        isDraft: !!s.is_draft,
                        isError: !!s.error,
                        isGroupDM: l,
                        isLastRapidFire: i,
                        isRapidFire: a,
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
                    i = this.props,
                    a = i.isSent,
                    o = i.isVoiceMessageActive,
                    s = i.user,
                    c = this._isDMVoiceMessage()
                  if (!s || (!t && !o)) return null
                  var l = Ie(ie.a.theme.scale),
                    u = l.DMUserAvatarSizePx,
                    d = { showAvatar: !!c || !r || !!n, size: l.DMUserAvatarSizeType, user: s },
                    p = [
                      io.userAvatar.base,
                      a ? io.userAvatar.sent : io.userAvatar.received,
                      c && De(ie.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: a }),
                    ]
                  return g.a.createElement(
                    be.a,
                    { style: io.userAvatar.container },
                    a ? null : g.a.createElement(be.a, { style: io.userAvatar.spacer }),
                    c
                      ? g.a.createElement(Ga, {
                          color: a ? ie.a.theme.colors.primary : ie.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    g.a.createElement(be.a, { style: p }, g.a.createElement(Wa, d)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(Za({}, e))
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
      v()(no, 'contextType', ee.a), v()(no, 'defaultProps', to)
      var ro = Object(mt.a)(
          Ge(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = g.a.useContext(Ea),
                  i = Te()(r.activeVoiceMessage, 1)[0],
                  a = r.scribeAction,
                  o = Te()(i, 1)[0] === n.id,
                  s = Za(Za({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: a })
                return g.a.createElement(e, s)
              }
              return (t.defaultProps = to), t
            })(no),
          ),
        ),
        io = {
          root: ie.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: ie.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: Rn },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: ie.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: Ie(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        ao = n('H4nC'),
        oo = function (e) {
          var t = e.conversation,
            n = e.entry,
            r = e.inboxType,
            i = e.isActive,
            a = e.isFirstRapidFire,
            o = e.isLastRapidFire,
            s = e.isRapidFire,
            c = e.isWide,
            l = e.perspective,
            u = e.scribeNamespace,
            d = e.setActiveEntry,
            p = e.setShouldFreezeUpdates
          if (Object(J.b)(n) || Object(J.e)(n)) {
            var f = t.conversation_id,
              h = t.low_quality,
              m = t.participants,
              v = t.read_only,
              y = t.trusted,
              b = t.type,
              _ = n.message_data,
              O = (_ = void 0 === _ ? {} : _).sender_id,
              E = void 0 === f || y
            return g.a.createElement(ro, {
              entry: n,
              inboxType: r,
              isActive: i,
              isFirstRapidFire: a,
              isGroupDM: b === R.CONVERSATION_TYPE.GROUP,
              isLastRapidFire: o,
              isLowQuality: !!h,
              isRapidFire: s,
              isReadOnly: v,
              isSent: O === l,
              isTrusted: !!E,
              isWide: c,
              participants: m,
              perspective: l,
              scribeNamespace: u,
              senderId: O,
              setActiveEntry: d,
              setShouldFreezeUpdates: p,
            })
          }
          return Object(J.a)(n)
            ? g.a.createElement(Ae, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(J.d)(n)
            ? g.a.createElement(ao.a, { entry: n, isCompact: !1 })
            : null
        },
        so = Object(w.createSelector)(
          function (e, t) {
            var n = Object(rt.o)(e, t.conversationId),
              r = n && Object($.a)(n)
            return r && Object(R.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        co = Object(P.c)(so),
        lo = (n('Ef13'), n('uDfI')),
        uo = Object(w.createSelector)(
          function (e, t) {
            return T.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        po = Object(lo.b)(uo),
        fo = n('Enqy'),
        ho = n('+/1j')
      function mo(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var vo = 'overflow',
        yo = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        go = { stiffness: 1e3, damping: 70 },
        bo = 140,
        _o = { scale: Object(fo.spring)(1, go), translateY: Object(fo.spring)(0, go) },
        Ro = function (e, t) {
          return { key: e.id_str, data: e, style: _o }
        },
        Oo = Object(z.a)({ translateY: bo, scale: 0 }),
        Eo = Object(z.a)({ scale: Object(fo.spring)(1, go), translateY: Object(fo.spring)(bo, go) }),
        So = [{ key: 'bubble', style: { scale: Object(fo.spring)(1, go), translateY: Object(fo.spring)(0, go) } }],
        wo = Object(z.a)({ translateY: bo, scale: 0 }),
        Co = Object(z.a)({ scale: Object(fo.spring)(1, go), translateY: Object(fo.spring)(bo, go) }),
        xo = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        Ao = (function (e) {
          u()(n, e)
          var t = mo(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), 'state', { isHidden: !0 }),
              v()(c()(e), '_afterLeave', function () {
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
                  return !Object(ge.a)(this.props, e) || !Object(ge.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(yo).slice(0, 5).map(Ro)
                  return (
                    t.length > 5 && n.push({ key: vo, style: _o }),
                    g.a.createElement(
                      be.a,
                      { style: [ko.root, e && ko.hidden] },
                      g.a.createElement(
                        be.a,
                        { style: ko.avatarRow },
                        g.a.createElement(
                          fo.TransitionMotion,
                          { styles: n, willEnter: Oo, willLeave: Eo },
                          function (e) {
                            return g.a.createElement(
                              g.a.Fragment,
                              null,
                              e.map(function (e, n) {
                                if (e.style.scale <= 0.05) return null
                                var r = xo(e.style)
                                return e.key === vo
                                  ? g.a.createElement(
                                      be.a,
                                      {
                                        key: e.key,
                                        style: [ko.avatar, ko.avatarSpacer, ko.overflowAvatar, { transform: r }],
                                      },
                                      g.a.createElement(ho.a, { style: ko.overflowAvatarText }, '+', t.length - 5),
                                    )
                                  : g.a.createElement(
                                      be.a,
                                      { key: e.key, style: [ko.avatar, { transform: r }] },
                                      g.a.createElement(Re.a, {
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
                        fo.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? So : [], willEnter: wo, willLeave: Co },
                        function (e) {
                          return g.a.createElement(
                            g.a.Fragment,
                            null,
                            e.map(function (e) {
                              return g.a.createElement(
                                be.a,
                                { key: e.key, style: [ko.messageBubble, { transform: xo(e.style) }] },
                                g.a.createElement(be.a, { style: ko.dot }),
                                g.a.createElement(be.a, { style: [ko.dot, ko.dot1] }),
                                g.a.createElement(be.a, { style: [ko.dot, ko.dot2] }),
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
        ko = ie.a.create(function (e) {
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
        To = po(Ao),
        Po = n('tn7R')
      function Io(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var jo = (function (e) {
        u()(n, e)
        var t = Io(n)
        function n() {
          var e
          i()(this, n)
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
          return (
            (e = t.call.apply(t, [this].concat(a))),
            v()(c()(e), '_timers', {}),
            v()(c()(e), 'state', { forceHide: !1, userIds: [] }),
            v()(c()(e), '_handleLivePipelineUpdate', function (t) {
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
                      lt()(
                        e.userIds.filter(function (e) {
                          return e !== n
                        }),
                      ),
                      [n],
                    ),
                  }
                }))
            }),
            v()(c()(e), '_removeAvatar', function (t) {
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
                    i = this.props.lastEntry
                  r && r.id !== i.id && i.message_data && this._removeAvatar(i.message_data.sender_id, !0)
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
                return !t && g.a.createElement(To, { userIds: n })
              },
            },
            {
              key: '_teardownLivePipeline',
              value: function () {
                Object(Po.a)(this._timers).forEach(function (e) {
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
                Object(b.h)().then(function (n) {
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
      v()(jo, 'contextType', ee.a)
      var Mo = co(jo),
        Do = n('3AAD'),
        Lo = n('iBK2'),
        Bo = n('Fz18'),
        Fo = n('RJrc'),
        No = n('yw4N'),
        Uo = (n('XygZ'), n('dPJJ')),
        Ho = n('zrc3'),
        Wo = n('pQ3Z'),
        Vo = n.n(Wo),
        zo = n('VY6S'),
        qo = n('Resy'),
        Go = (function () {
          function e(t) {
            var n = this
            i()(this, e),
              v()(this, '_trackScroll', function () {
                n._programmaticScroll ? (n._programmaticScroll = !1) : (n._lastScrollTs = Date.now())
              }),
              v()(this, '_normalize', function () {
                n._wrapperNode &&
                  0 !== n._transform &&
                  n._viewport &&
                  ((n._wrapperNode.style.transform = ''), n._viewport.scrollBy(-1 * n._transform), (n._transform = 0))
              }),
              v()(this, '_normalizeIfNeeded', function () {
                if (n._wrapperNode && n._viewport && 0 !== n._transform) {
                  var e = n._viewport,
                    t = n._wrapperNode.getBoundingClientRect(),
                    r = t.height,
                    i = t.top,
                    a = new qo.a(i, r),
                    o = a.translateBy(-1 * n._transform),
                    s = e.getRect()
                  s.contains(o.getTop()) ||
                  s.contains(o.getBottom()) ||
                  s.contains(a.getTop()) ||
                  s.contains(a.getBottom())
                    ? n._normalize()
                    : n._debouncedNormalize()
                }
              }),
              (this._transform = 0),
              (this._viewport = t),
              (this._lastScrollTs = 0),
              (this._debouncedNormalize = Object(zo.a)(this._normalize, 500)),
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
        })()
      function Ko(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Yo = (function (e) {
        u()(n, e)
        var t = Ko(n)
        function n(e, r) {
          var a
          i()(this, n),
            (a = t.call(this, e, r)),
            v()(c()(a), '_updatesSuspended', !1),
            v()(c()(a), '_handleHeightsUpdate', function (e, t) {
              var n = a.props.anchoring
              a._scrollBy(n.offsetCorrection(e, t))
            }),
            v()(c()(a), '_receiveWrapperNode', function (e) {
              return a._offsetHandler.setWrapperNode(e)
            }),
            v()(c()(a), '_handleRefUpdate', function (e) {
              a._ref = e
            }),
            v()(c()(a), '_handleEnterFullscreen', function () {
              ;(a._updatesSuspended = !0), a._ref && a._ref.freezeUpdates()
            }),
            v()(c()(a), '_handleExitFullscreen', function () {
              ;(a._updatesSuspended = !1), a.forceUpdate(), a._ref && a._ref.resumeUpdates()
            })
          var o = a._findInitialAnchor(e.initialAnchors || [])
          return (
            (a._initialItemIndex = o ? o.anchorIndex : 0),
            (a._initialAnchor = o && o.anchor),
            (a._offsetHandler = new Go(e.viewport)),
            a
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
                var n = !Vo()(this.props, e) || !Vo()(this.state, t)
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
                  (this._unlistenFullscreenEnter = Uo.a(this._handleEnterFullscreen)),
                  (this._unlistenFullscreenExit = Uo.b(this._handleExitFullscreen))
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
                  i = this.state.scrollHeadroom
                return g.a.createElement(
                  'div',
                  { ref: this._receiveWrapperNode, style: { paddingBottom: i } },
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
                    var n = Object(Ho.a)(t, function (t) {
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
      v()(Yo, 'defaultProps', { anchoring: Do.a })
      var Qo = n('AOWc'),
        Xo = n('180P'),
        Jo = n('Ey+e'),
        Zo = n('SrIh'),
        $o = n('E6XO'),
        es = n('06eB'),
        ts = n.n(es),
        ns = n('aITJ')
      function rs(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var is = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        as = (function (e) {
          u()(n, e)
          var t = rs(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(c()(a), '_perfReported', !1),
              v()(c()(a), '_observeElement', function (e) {
                var t = a._resizeObserver
                t && (t.disconnect(), t.observe(e))
              }),
              v()(c()(a), '_handleResize', function (e) {
                var t = a.props,
                  n = t.id,
                  r = t.onHeightChanged,
                  i = Te()(e, 1)[0]
                a._isResizeObserverHeightUpdatesEnabled &&
                  i &&
                  i.contentRect.height !== a._currentHeight &&
                  ((a._currentHeight = i.contentRect.height), r(n, i.contentRect.height)),
                  a._perfReported || (a.props.onVisible(n, is() - a._perfStart), (a._perfReported = !0))
              }),
              v()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((a._element = e), r(n, c()(a)), a._observeElement(e)) : (r(n, void 0), (a._element = void 0))
              }),
              (a._isResizeObserverHeightUpdatesEnabled =
                a.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                ns.b.isDesktopOS() &&
                ns.b.isSafari()),
              (a._resizeObserver = new window.ResizeObserver(a._handleResize)),
              (a._perfStart = is()),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'shouldComponentUpdate',
                value: function (e) {
                  var t = this.props,
                    n = t.data
                  return t.render !== e.render || !ts()(n, e.data)
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
      v()(as, 'contextType', ee.a)
      var os = n('+d3d'),
        ss = n('iChn')
      function cs(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var ls = (function (e) {
          u()(n, e)
          var t = cs(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_cells', new Map()),
              v()(c()(e), '_heightUpdates', {}),
              v()(c()(e), '_visibilityMeasurements', new Map()),
              v()(c()(e), '_handleItemVisible', function (t, n) {
                e._visibilityMeasurements.has(t) || e._visibilityMeasurements.set(t, n)
              }),
              v()(c()(e), '_reportVisibilityMeasurements', function () {
                if (e._visibilityMeasurements.size) {
                  var t = 0
                  e._visibilityMeasurements.forEach(function (e) {
                    return (t += e)
                  })
                  var n = Math.round(t / e._visibilityMeasurements.size),
                    r = ns.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  $o.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              v()(c()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              v()(
                c()(e),
                '_flushHeightUpdates',
                Object(os.a)(
                  function () {
                    ;(0, e.props.onHeightsChange)(e._heightUpdates), (e._heightUpdates = {})
                  },
                  100,
                  { trailing: !0 },
                ),
              ),
              v()(c()(e), '_setCellRef', function (t, n) {
                n ? e._cells.set(t, n) : e._cells.delete(t)
              }),
              v()(c()(e), '_handleDivRefUpdate', function (t) {
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
                  return Object(ss.a)(
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
                      i = t.id
                    return g.a.createElement(as, {
                      data: n,
                      id: i,
                      key: i,
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
        us = n('oi7R'),
        ds = n('aWzz'),
        ps = n('JD1h'),
        fs = n('OeMK'),
        hs = (n('IAdD'), n('jHwr')),
        ms = n('qdp+'),
        vs = (function () {
          function e(t) {
            var n = t.list,
              r = t.rectangles,
              a = t.sliceEnd,
              o = t.sliceStart,
              s = t.viewportRectangle
            i()(this, e),
              (this._viewportRectangle = s),
              (this._list = n),
              (this._rectangles = r),
              (this._sliceStart = o),
              (this._sliceEnd = a)
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
                  if (0 === e.length) return new qo.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    i = t[n].getTop(),
                    a = t[r].getBottom() - i
                  return new qo.a(i, a)
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
                    r = Object(Ho.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var i = Object(Ho.a)(
                    this._list,
                    function (e) {
                      var r = e.id
                      return !n[r].doesIntersectWith(t)
                    },
                    r,
                  )
                  return (
                    -1 === i && (i = this._list.length),
                    this._list
                      .slice(r, i)
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
                  return Object(ms.a)(this.getRenderedItems(), function (t) {
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
        ys = n('64vW'),
        gs = function (e, t, n) {
          if (t < 0 || t >= e.length) return -1
          if (n(e[t])) return t
          for (var r = 1; ; r++) {
            var i = t - r,
              a = t + r,
              o = i < 0,
              s = a >= e.length
            if (o && s) break
            if (!s && n(e[a])) return a
            if (!o && n(e[i])) return i
          }
          return -1
        },
        bs = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            i = e.sliceStart,
            a = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = gs(t, i, function (e) {
              var t = e.id
              return !Object(fs.a)(t) && a.hasOwnProperty(t) && a[t]
            })
          if (-1 === o) return null
          var s = Object(Ho.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Qo.a)(s >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(fs.a)(t[o - 1].id) && s > 0 && Object(fs.a)(n[s - 1].id) && (s -= 1),
            { sliceStart: s, sliceEnd: Math.min(n.length, s + r - i) }
          )
        }
      function _s(e, t) {
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
      function Rs(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _s(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Os(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Es = { heightsReady: !0 },
        Ss = (function (e) {
          u()(n, e)
          var t = Os(n)
          function n(e, r) {
            var a
            i()(this, n),
              (a = t.call(this, e, r)),
              v()(c()(a), '_updatesSuspended', !1),
              v()(c()(a), 'freezeUpdates', function () {
                a._updatesSuspended = !0
              }),
              v()(c()(a), 'resumeUpdates', function () {
                ;(a._updatesSuspended = !1), a._scheduleUpdate()
              }),
              v()(c()(a), '_handleHeightsChange', function (e) {
                a._postRenderProcessing({ hasListChanged: !1, newHeights: e })
              }),
              v()(c()(a), '_handleRefUpdate', function (e) {
                a._ref = e
              }),
              v()(c()(a), '_setNecessarySlice', function (e, t) {
                var n = a.state,
                  r = n.sliceEnd,
                  i = (function (e, t) {
                    if (t.start >= e.start && t.end <= e.end) return e
                    if (t.start >= e.end || t.end <= e.start) return t
                    var n = Math.max(e.start - t.start, t.end - e.end)
                    return { start: Math.min(e.start + n, t.start), end: Math.max(e.end - n, t.end) }
                  })({ start: n.sliceStart, end: r }, { start: e, end: t }),
                  o = i.end,
                  s = i.start
                a._setSlice(s, o)
              }),
              v()(c()(a), '_setSlice', function (e, t) {
                if (!a._updatesSuspended) {
                  var n = a.state,
                    r = n.sliceEnd
                  ;(e === n.sliceStart && t === r) || a.setState({ sliceStart: e, sliceEnd: t })
                }
              })
            var o = a.props,
              s = o.initialItemIndex,
              l = o.list
            ;(a._assumedItemHeight = e.assumedItemHeight),
              (a._getSlice = function () {
                var e = a.props.list,
                  t = a.state,
                  n = t.sliceEnd,
                  r = t.sliceStart
                return a._getMemoizedSlice(e, r, n)
              }),
              (a._getMemoizedSlice = Object(Pe.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (a._getRectangles = function (e) {
                var t = e || c()(a),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  i = t.props.list
                return t._getMemoizedRectangles(i, r, n)
              }),
              (a._getMemoizedRectangles = Object(Pe.a)(function (e, t, n) {
                return ws(e, t, n)
              })),
              (a._heights = {})
            var u = a.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (a._heights = p[d]), (a.state = a._getDefaultSlice(l, s))
            var f = Object(hs.a)(function () {
              return a._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (a._scheduleUpdate = window.requestIdleCallback
                ? Object(hs.a)(function () {
                    return a._criticalUpdate()
                  }, window.requestIdleCallback)
                : f),
              (a._schedulePositioningNotification = Object(hs.a)(
                function () {
                  return a._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (a._handleScroll = Object(os.a)(f, 100, { trailing: !0 })),
              (a._scheduleDebouncedUpdate = Object(zo.a)(function () {
                window.requestAnimationFrame(function () {
                  a._debouncedUpdate()
                })
              }, 500)),
              (a._removeDebouncedListener = e.viewport.addScrollListener(a._scheduleDebouncedUpdate)),
              a
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
                    i = n.sliceStart,
                    a = e.list
                  if (a !== t) {
                    var o = bs({ list: t, nextList: a, sliceStart: i, sliceEnd: r }) || this._getDefaultSlice(a)
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
                  return new vs({
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
                    i = r.blankSpaceAbove,
                    a = r.blankSpaceBelow
                  return g.a.createElement(
                    ys.a.Provider,
                    { value: Es },
                    n({
                      ref: this._handleRefUpdate,
                      list: this._getSlice(),
                      blankSpaceAbove: i,
                      blankSpaceBelow: a,
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
                    i = this._getRectangles(),
                    a = 0 === e.length ? 0 : i[e[r].id].getTop() - i[e[0].id].getTop(),
                    o = Object($.a)(e)
                  return {
                    blankSpaceAbove: a,
                    blankSpaceBelow: n >= e.length || !o ? 0 : i[o.id].getBottom() - i[e[n].id].getTop(),
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
                  var i = this.props,
                    a = i.minimumOffscreenToViewportRatio,
                    o = i.preferredOffscreenToViewportRatio
                  t || !this._sliceIncludesScaledViewport(a)
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
                    i = Object.keys(n).reduce(function (e, i) {
                      var a = t._heights.hasOwnProperty(i) ? t._heights[i] : t._assumedItemHeight,
                        o = n[i]
                      return (r = r || a !== o), e + (o - a)
                    }, 0)
                  return (
                    r && (this._heights = Object.assign(Rs({}, this._heights), n)),
                    { wasHeightChange: r, heightDelta: i }
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
                    i = r.getHeight() * t,
                    a = r.getTop() - i,
                    o = r.getBottom() + i,
                    s = this._getRectangles(),
                    c = Object(Ho.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > a
                    }),
                    l = c >= 0 ? c : n.length - 1,
                    u = Object(Ho.a)(
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
                  if (!this._ref) return new qo.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new qo.a(0, 0)
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
                    i = Rs(
                      Rs({}, this),
                      {},
                      {
                        props: Rs(Rs({}, this.props), {}, { list: e }),
                        state: Rs({}, this.state),
                        context: Rs({}, this.context),
                        refs: null,
                      },
                    ),
                    a = this._getRectangles(i),
                    o = e[t].id,
                    s = a[o].getBottom(),
                    c = Object(Ho.a)(
                      e,
                      function (e) {
                        var t = e.id
                        return a[t].getTop() - s >= r
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
      v()(Ss, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var ws = function (e, t, n) {
          var r = {}
          return (
            e.reduce(function (e, i) {
              var a = i.id,
                o = t.hasOwnProperty(a) ? t[a] : n,
                s = new qo.a(e, o)
              return (r[a] = s), s.getBottom()
            }, 0),
            r
          )
        },
        Cs = Ss
      function xs(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var As = function (e) {
          return (
            Object(Zo.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Xo.a)(e)
          )
        },
        ks = (function (e) {
          u()(n, e)
          var t = xs(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(c()(a), '_onDemandRenderer', function (e) {
                var t = a.props,
                  n = t.assumedItemHeight,
                  r = t.minimumOffscreenToViewportRatio,
                  i = t.preferredOffscreenToViewportRatio,
                  o = 'function' == typeof n ? n('') : n
                return g.a.createElement(
                  Cs,
                  gn()({}, e, {
                    assumedItemHeight: o,
                    cacheKey: a.props.cacheKey,
                    minimumOffscreenToViewportRatio: r,
                    onPositioningUpdate: a._handlePositioningUpdate,
                    preferredOffscreenToViewportRatio: i,
                    renderList: a._viewRenderer,
                    viewport: a._viewport,
                  }),
                )
              }),
              v()(c()(a), '_viewRenderer', function (e) {
                return g.a.createElement(ls, e)
              }),
              v()(c()(a), '_getItemRenderer', function () {
                return a._getMemoizedItemRenderer(a.props.renderer)
              }),
              v()(
                c()(a),
                '_getMemoizedItemRenderer',
                Object(Pe.a)(function (e) {
                  return function (t) {
                    return t ? (t.presentational ? t.renderNode() : e(t.data)) : null
                  }
                }),
              ),
              v()(c()(a), '_handleAnchorRendererRefUpdate', function (e) {
                a._anchorRenderer = e
              }),
              v()(c()(a), '_handlePositionRestored', function () {
                ;(0, a.props.onPositionRestored)(), (a._edgeProximity = a._createEdgeProximity())
                var e = a._anchorRenderer && a._anchorRenderer.getPositioning()
                e && a._edgeProximity.handlePositioningUpdate(e)
              }),
              v()(c()(a), '_handlePositioningUpdate', function (e) {
                a._edgeProximity && a._edgeProximity.handlePositioningUpdate(e)
                var t = a.props.onItemsRendered
                t && t({ positions: e.getRenderedItems(), viewport: e.getForViewport() })
              }),
              v()(c()(a), '_getList', function () {
                var e = a.props,
                  t = e.footer,
                  n = e.header,
                  r = e.identityFunction,
                  i = e.items
                return a._getMemoizedList(r, i, n, t)
              }),
              v()(
                c()(a),
                '_getMemoizedList',
                Object(Pe.a)(function (e, t, n, r) {
                  var i = {},
                    a = t.reduce(function (t, n) {
                      var r = e(n) || n.id || As(n)
                      return (
                        Object(Qo.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        i.hasOwnProperty(r)
                          ? Object(Zo.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (i[r] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: fs.c,
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
                          id: fs.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return a.length ? [].concat(lt()(o ? [o] : []), lt()(a), lt()(s ? [s] : [])) : []
                }),
              ),
              (a._viewport = e.viewport || r.viewport || us.a.root()),
              a
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
                    i = e.noItemsRenderer
                  return r.length
                    ? g.a.createElement(Yo, {
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
                    : i()
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
                  return new ps.b([
                    {
                      condition: ps.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: ps.a.nearTopRatio(r),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: ps.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: ps.a.nearBottom(5),
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
      v()(ks, 'displayName', 'VirtualScroller'),
        v()(ks, 'contextTypes', { viewport: ds.object, getCustomLocation: ds.func }),
        v()(ks, 'defaultProps', {
          anchoring: Yo.defaultProps.anchoring,
          assumedItemHeight: Cs.defaultProps.assumedItemHeight,
          identityFunction: As,
          minimumOffscreenToViewportRatio: Cs.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: function () {
            return null
          },
          onPositionRestored: jr.a,
          onAtEnd: jr.a,
          onAtStart: jr.a,
          onNearEnd: jr.a,
          onNearStart: jr.a,
          onScrollEnd: jr.a,
          preferredOffscreenToViewportRatio: Cs.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var Ts = Object(Jo.a)(ks),
        Ps = n('mw9i')
      function Is(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var js = Ze.a.i859a9d3,
        Ms = Ze.a.i8ecae5b,
        Ds = function (e) {
          return e.entry.id
        },
        Ls = function (e) {
          return e.entry.type === ye.b.MESSAGE
        },
        Bs = (function (e) {
          u()(n, e)
          var t = Is(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(
                c()(a),
                '_appBarScrollEnabled',
                a.context.featureSwitches.isTrue('responsive_web_app_bar_scroll_enabled'),
              ),
              v()(
                c()(a),
                '_shouldUseNewScroller',
                a.context.featureSwitches.isTrue('responsive_web_dm_new_scroller_enabled'),
              ),
              v()(c()(a), '_renderItem', function (e) {
                var t = a.props.conversation,
                  n = t.conversation_id
                switch (e.type) {
                  case ye.b.TYPING_INDICATOR:
                    return n ? g.a.createElement(Mo, { conversationId: n }) : null
                  case ye.b.READ_ONLY_INDICATOR:
                    return n
                      ? g.a.createElement(
                          be.a,
                          { style: Fs.readOnly },
                          g.a.createElement(
                            _e.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            Ms,
                            ' ',
                            g.a.createElement(_e.b, { link: 'https://support.twitter.com/articles/14606#faq' }, js),
                          ),
                        )
                      : null
                  case ye.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return g.a.createElement(pe, { conversation: t })
                  default:
                    return a._renderDMEntry(e)
                }
              }),
              v()(c()(a), '_setActiveEntry', function (e) {
                a.setState({ activeEntryId: e })
              }),
              v()(c()(a), '_setShouldFreezeUpdates', function (e) {
                a.setState({ shouldFreezeUpdates: e })
              }),
              (a._anchoring = Q({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === a.props.perspective || !1
                  )
                },
                typingIndicatorId: X.a,
              })),
              (a.state = { activeEntryId: null, shouldFreezeUpdates: !1 }),
              a
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
                    i = t.isWide,
                    a = t.onHistoryRequest,
                    o = t.style,
                    s = this.state.activeEntryId,
                    c = (function (e) {
                      var t = e.activeEntryId,
                        n = e.canInjectConversationProfileInfoHeader,
                        r = e.conversation,
                        i = e.footer,
                        a = e.readOnlyEntry,
                        o = (r && r.entries) || [],
                        s = o.reduce(function (e, i, a) {
                          n && 0 === a && e.push(X.b)
                          var s = Object($.a)(e),
                            c = a === o.length - 1
                          if (
                            (e.push({
                              isRapidFire: !1,
                              isFirstRapidFire: !1,
                              isLastRapidFire: !1,
                              entry: i,
                              isActive: t === i.id,
                              isTrusted: !(null == r || !r.trusted),
                            }),
                            s)
                          ) {
                            var l = Z(s.entry, i),
                              u = e[e.length - 2]
                            l
                              ? ((e[e.length - 1].isRapidFire = !0),
                                u.isRapidFire || ((u.isFirstRapidFire = !0), (u.isRapidFire = !0)),
                                c && (e[e.length - 1].isLastRapidFire = !0))
                              : u.isRapidFire && (u.isLastRapidFire = !0)
                          }
                          return e
                        }, [])
                      return i && s.push(i), r.read_only && a && s.push(a), s
                    })({
                      conversation: n,
                      footer: X.d,
                      readOnlyEntry: X.c,
                      canInjectConversationProfileInfoHeader: n.status === ye.c.AT_END && n.type === ye.a.ONE_TO_ONE,
                      activeEntryId: s,
                    }),
                    l = n.conversation_id,
                    u = function (e) {
                      return e[e.length - 1]
                    },
                    d = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Ls(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(l)
                  return g.a.createElement(fe.a.Consumer, null, function (t) {
                    var s = t.isDrawer,
                      l = e._appBarScrollEnabled ? (s ? he.b.drawerHeaderRadius : Fs.scrollSpace) : null
                    return g.a.createElement(
                      be.a,
                      { style: [Fs.scrollContainer, l] },
                      g.a.createElement(
                        No.a,
                        { style: [Fs.scrollContainer, i && Fs.conversationsPadding, l, o] },
                        r || null,
                        n.status && n.status !== ye.c.AT_END ? g.a.createElement(Fo.a, null) : null,
                        g.a.createElement(
                          Ps.a,
                          { style: [Fs.content, Fs.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? g.a.createElement(Lo.b, {
                                anchoring: Do.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Ls,
                                hasNewContentAtBottom: !0,
                                identityFunction: Ds,
                                initialAnchor: c.length > 0 ? H.a(Ds(d(c))) : void 0,
                                items: c,
                                nearStartProximityRatio: 2,
                                onNearStart: a,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : g.a.createElement(
                                Bo.a,
                                { identifier: p },
                                g.a.createElement(Ts, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Ds,
                                  initialAnchor: c.length > 0 ? H.a(Ds(u(c))) : void 0,
                                  items: c,
                                  nearStartProximityRatio: 2,
                                  onNearStart: a,
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
                    i = e.isLastRapidFire,
                    a = e.isRapidFire,
                    o = this.props,
                    s = o.conversation,
                    c = o.inboxType,
                    l = o.isWide,
                    u = o.perspective,
                    d = o.scribeNamespace
                  return t && c
                    ? g.a.createElement(oo, {
                        conversation: s,
                        entry: t,
                        inboxType: c,
                        isActive: n,
                        isFirstRapidFire: r,
                        isLastRapidFire: i,
                        isRapidFire: a,
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
      v()(Bs, 'contextType', ee.a)
      var Fs = ie.a.create(function (e) {
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
        }),
        Ns = n('uB9N'),
        Us = n('v//M'),
        Hs = n('J2UM'),
        Ws = n('07FG'),
        Vs = n('I8M8'),
        zs = n('7myi'),
        qs = n('883S'),
        Gs = n('z0MJ'),
        Ks = n.n(Gs),
        Ys = n('Es6L'),
        Qs = n('LsPn'),
        Xs = ie.a.create(function (e) {
          return {
            root: { flexGrow: 1 },
            activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
            kaiOSFix: { paddingBottom: e.spaces.space20 },
            dragDrop: { flexGrow: 1 },
            scrollView: { flexGrow: 1 },
          }
        }),
        Js = n('GSsg'),
        Zs = n('EbOo'),
        $s = Object(bn.a)().propsFromActions(function () {
          return {
            addToast: S.b,
            block: T.e.block,
            createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: R.muteDMUser,
            unmuteDMUser: R.unmuteDMUser,
            unblock: T.e.unblock,
          }
        }),
        ec = (n('AQ79'), n('u0B7')),
        tc = n('tZH3'),
        nc = Ze.a.ccf2f24e,
        rc = Ze.a.ib3fe8a9,
        ic = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            i = e.requestorScreenName,
            a = { type: 'destructiveOutlined' },
            o = g.a.createElement(Tt.a, gn()({}, a, { accessibilityRole: 'button' }), rc),
            s = g.a.createElement(Tt.a, gn()({}, a, { onPress: r }), nc),
            c = g.a.useCallback(
              function (e, t) {
                return g.a.createElement(tc.a, {
                  dismiss: e,
                  flatBorders: 'sheet' === t,
                  onBlockClick: n,
                  onReportClick: r,
                  requestorScreenName: i,
                  showBlock: !0,
                  showCancel: 'sheet' === t,
                })
              },
              [n, r, i],
            )
          return t ? s : g.a.createElement(Vn.a, { renderContent: c }, o)
        },
        ac = n('cHvH'),
        oc = function (e) {
          var t = g.a.useContext(ee.a),
            n = t.featureSwitches.isTrue('dm_vdl_enabled') && t.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
            r = t.loggedInUserId,
            i = function () {
              return e.onAccept()
            },
            a = function () {
              return e.onBlock()
            },
            o = function () {
              return e.onReport()
            },
            s = function () {
              return e.onLeave()
            }
          return g.a.createElement(ac.a, null, function (t) {
            var c = t.windowWidth <= ie.a.theme.breakpoints.small
            return g.a.createElement(
              be.a,
              { style: sc.actionsContainer },
              n &&
                g.a.createElement(
                  Tt.a,
                  {
                    onPress: i,
                    size: 'medium',
                    style: [sc.actionFullWidth, sc.actionMarginBottom],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
              g.a.createElement(
                be.a,
                { style: c ? sc.actionFullWidth : [sc.actionHalfWidth, sc.actionMarginRight] },
                g.a.createElement(ic, {
                  isGroup: e.isGroup,
                  onBlockClick: a,
                  onReportClick: o,
                  requestorScreenName: Object(I.i)(e.conversation, r).screenName,
                }),
              ),
              g.a.createElement(
                Tt.a,
                {
                  onPress: s,
                  size: 'medium',
                  style: c ? [sc.actionFullWidth, sc.actionMarginTop] : [sc.actionHalfWidth, sc.actionMarginLeft],
                  type: 'destructiveOutlined',
                },
                e.declineButtonText,
              ),
              !n &&
                g.a.createElement(
                  Tt.a,
                  {
                    onPress: i,
                    size: 'medium',
                    style: [sc.actionFullWidth, sc.actionMarginTop],
                    type: 'primaryOutlined',
                  },
                  e.acceptButtonText,
                ),
            )
          })
        },
        sc = ie.a.create(function (e) {
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
        cc = n('vMjK'),
        lc = n('7JQg'),
        uc = n('24HD'),
        dc = n('Ty5D')
      function pc(e, t) {
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
      function fc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? pc(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pc(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var hc = Ze.a.da878dcf,
        mc = Ze.a.d96cf7cd,
        vc = (Ze.a.gde6b424, Ze.a.e308019b, Ze.a.gf5e9ea6, Ze.a.hc52446b),
        yc = Ze.a.f7e1ad65,
        gc = { headline: Ze.a.gdf4b79f, text: Ze.a.bbf83d83, confirmButtonLabel: Ze.a.bb1d57b6 },
        bc = ie.a.create(function (e) {
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
        _c = Object(lc.c)({ element: 'untrusted_interstitial' })(
          $s(function (e) {
            var t = e.conversation,
              n = e.scribeAction,
              r = e.scribeNamespace,
              i = g.a.useContext(ee.a),
              a = Object(dc.g)(),
              o = Object(dc.h)(),
              s = g.a.useState(!1),
              c = Te()(s, 2),
              l = c[0],
              u = c[1],
              d = g.a.useState(!1),
              p = Te()(d, 2),
              f = p[0],
              h = p[1],
              m = g.a.useCallback(
                function () {
                  return { items: [{ conversation_type: t.type === R.CONVERSATION_TYPE.GROUP ? 1 : 0 }] }
                },
                [t.type],
              ),
              v = g.a.useCallback(
                function (e, t) {
                  n(fc(fc({}, r), {}, { action: e }), t || m())
                },
                [m, n, r],
              )
            g.a.useEffect(
              function () {
                v('impression')
              },
              [v],
            )
            var y,
              b,
              _,
              O,
              E = function () {
                u(!0), h(!1)
              },
              S = function () {
                u(!1)
              },
              w = function () {
                h(!1)
              },
              C = function () {
                var n,
                  r = e.conversationId,
                  i = e.inboxType,
                  a = e.leaveConversation,
                  s = t.type === R.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  c = null != t && t.participants ? Object.keys(t.participants).length : 0,
                  l = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0,
                  d = {
                    conversation_type: (null == t ? void 0 : t.type) === R.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: c,
                    position: l,
                    inbox_type: Object(I.h)(i),
                    entry_point: ht.b.REQUEST_ACTION_SHEET,
                  }
                u(!1), a({ conversationId: r }), v(s, d), x()
              },
              x = function () {
                var t = e.inboxType
                a.push(Object(I.e)(t))
              },
              A = function () {
                !(function () {
                  var n,
                    r = e.acceptConversation,
                    i = e.conversationId,
                    a = e.inboxType,
                    s = e.scribeAction,
                    c = e.scribeNamespace,
                    l = null != t && t.participants ? Object.keys(t.participants).length : 0,
                    u = (null == o || null === (n = o.state) || void 0 === n ? void 0 : n.position) || 0
                  i &&
                    (r(i),
                    s(fc(fc({}, c), {}, { action: 'accept' }), {
                      conversation_id: i,
                      conversation_type: t.type === R.CONVERSATION_TYPE.GROUP ? ht.g.GROUP : ht.g.ONE_TO_ONE,
                      conversation_participant_count: l,
                      entry_point: ht.b.REQUEST_ACTION_SHEET,
                      inbox_type: Object(I.h)(a),
                      position: u,
                    }))
                })()
              },
              k = function (t) {
                return function () {
                  var n = e.addToast,
                    r = e.block,
                    i = e.createLocalApiErrorHandler
                  h(!1),
                    r(t).then(function () {
                      n({ action: { label: cc.c, onAction: T(t) }, text: cc.a })
                    }, i(Zs.a)),
                    v('block')
                }
              },
              T = function (t) {
                return function () {
                  var n = e.createLocalApiErrorHandler
                  ;(0, e.unblock)(t).catch(n(ec.a)), v('unblock')
                }
              },
              P = (t && t.type) === R.CONVERSATION_TYPE.GROUP
            return g.a.createElement(
              g.a.Fragment,
              null,
              g.a.createElement(
                be.a,
                { style: bc.root },
                (function (e) {
                  var n = i.loggedInUserId
                  return g.a.createElement(
                    _e.b,
                    { style: bc.copy },
                    e ? vc : yc({ senderName: Object(I.i)(t, n).name }),
                  )
                })(P),
                g.a.createElement(oc, {
                  acceptButtonText: hc,
                  conversation: t,
                  declineButtonText: mc,
                  isGroup: P,
                  onAccept: A,
                  onBlock: function () {
                    u(!1), h(!0)
                  },
                  onLeave: E,
                  onReport: function () {
                    var t = e.conversationId,
                      n = e.inboxType
                    t && (v('report'), a.push(Object(I.f)(t, window.location.pathname, r, n)))
                  },
                }),
              ),
              ns.b.isKaiOS()
                ? g.a.createElement(Qs.a, { leftText: mc, onLeftClick: E, onRightClick: A, rightText: hc })
                : null,
              l
                ? g.a.createElement(kt.a, {
                    confirmButtonLabel: gc.confirmButtonLabel,
                    confirmButtonType: 'destructiveFilled',
                    headline: gc.headline,
                    onCancel: S,
                    onConfirm: C,
                    text: gc.text,
                  })
                : null,
              f
                ? ((y = i.loggedInUserId),
                  (b = Object(I.i)(t, y)),
                  (_ = b.idStr),
                  (O = b.screenName),
                  Object(uc.j)({ confirmation: Object(uc.f)(O), onClose: w, handleConfirm: k(_) }))
                : null,
            )
          }),
        ),
        Rc = n('rFBM'),
        Oc = n('jTgF')
      function Ec(e, t) {
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
      function Sc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ec(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ec(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function wc(e) {
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
            r = h()(e)
          if (t) {
            var i = h()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return p()(this, n)
        }
      }
      var Cc = g.a.createElement(Xt.a, null),
        xc = Ze.a.badb01a0,
        Ac = Ze.a.e3275464,
        kc = Ze.a.d6b11d9c,
        Tc = Ze.a.i7ca1446,
        Pc = function (e) {
          return e && (e.tweet || e.media)
        },
        Ic = function (e) {
          var t,
            n = e.gifMetadata,
            r = void 0 === n ? {} : n,
            i = e.tweetAttachment,
            a = e.media
          return (
            i
              ? (t = { tweet: i })
              : a
              ? a.mediaFile
                ? (t = { media: a })
                : a.externalMediaDetails && (t = { media: a, provider: r.provider, gifUrl: r.url })
              : (t = null),
            t
          )
        },
        jc = (function (e) {
          u()(n, e)
          var t = wc(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(c()(a), '_composer', g.a.createRef()),
              v()(c()(a), '_handleLivePipelineUpdate', function () {
                a._fetchUpdatesIfNeeded(), a._updatePolling && a._updatePolling.restart()
              }),
              v()(c()(a), '_fetchUpdatesIfNeeded', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchUpdatesIfNeeded)(
                  e.isDmReceiptSettingEnabled ? { active_conversation_id: t, dm_users: !0 } : {},
                ).catch(n())
              }),
              v()(c()(a), '_handleInitialFetch', function () {
                a._initialFetch()
              }),
              v()(c()(a), '_initialFetch', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler,
                  r = e.fetchInboxIfNeeded,
                  i = e.fetchUpdatesIfNeeded
                return r()
                  .then(function () {
                    if (t)
                      return a._fetchConversation(t).then(function () {
                        return a._requestWelcomeMessage(t)
                      })
                  })
                  .then(function () {
                    return i()
                  })
                  .catch(n())
                  .finally(function () {
                    a._updatePolling && a._updatePolling.start()
                  })
              }),
              v()(c()(a), '_isUntrustedConversation', function (e) {
                var t = a.props.isNewGroupConversation
                return !((null != e && e.trusted) || t)
              }),
              v()(c()(a), '_leaveConversation', function (e) {
                var t = a.props,
                  n = t.createLocalApiErrorHandler
                ;(0, t.leaveConversation)(e).catch(n({ showToast: !0 }))
              }),
              v()(c()(a), '_acceptConversation', function (e) {
                var t = a.props,
                  n = t.acceptConversation,
                  r = t.createLocalApiErrorHandler
                n(e)
                  .then(function () {
                    ns.b.isMobileOS() && a._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(c()(a), '_renderActions', function () {
                var e = a.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.inboxType,
                  i = e.scribeAction
                return t && a._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      g.a.createElement(_c, {
                        acceptConversation: a._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        inboxType: r,
                        leaveConversation: a._leaveConversation,
                        scribeAction: i,
                      })
                  : g.a.createElement(
                      g.a.Fragment,
                      null,
                      a._renderComposerBar(),
                      ns.b.isKaiOS()
                        ? g.a.createElement(Qs.a, {
                            leftText: Tc,
                            onLeftClick: a._handleInfoClick,
                            onRightClick: a._handleComposeClick,
                            rightText: xc,
                          })
                        : null,
                    )
              }),
              v()(c()(a), '_render', function () {
                var e = a.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.drawerHeader,
                  i = e.inboxType,
                  o = e.isWide,
                  s = e.perspective,
                  c = e.scribeNamespace,
                  l = a.state,
                  u = l.attachment,
                  d = l.composerHeight
                return g.a.createElement(
                  Oa,
                  { key: n },
                  g.a.createElement(
                    Rc.a,
                    { allowDragDrop: !Pc(u), onFilesAdded: a._handleDragDrop, style: Xs.dragDrop },
                    g.a.createElement(
                      No.a,
                      {
                        style: [
                          Xs.scrollView,
                          !Object(Ys.a)() && !a._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      s && t
                        ? g.a.createElement(Bs, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: i,
                            isWide: o,
                            onHistoryRequest: a._handleHistoryRequest,
                            perspective: s,
                            scribeNamespace: c,
                            style: Xs.activity,
                          })
                        : null,
                    ),
                    a._renderActions(),
                  ),
                )
              }),
              v()(c()(a), '_handleNavHeightChange', function (e) {
                a.setState({ composerHeight: ''.concat(e, 'px') })
              }),
              v()(c()(a), '_handleTyping', function () {
                a._throttleSaveDraftText(), a._throttleUpdateTyping()
              }),
              v()(
                c()(a),
                '_throttleUpdateTyping',
                Object(os.a)(
                  function () {
                    var e = a.props,
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
                c()(a),
                '_throttleSaveDraftText',
                Object(os.a)(
                  function () {
                    a.props.conversationId && a._handleSaveDraftText()
                  },
                  1e3,
                  { leading: !1 },
                ),
              ),
              v()(c()(a), '_handleDragDrop', function (e) {
                a._currentComposer && a._currentComposer.handleAddMediaFiles(e)
              }),
              v()(c()(a), '_handleHistoryRequest', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.createLocalApiErrorHandler
                ;(0, e.fetchConversationHistory)({ conversationId: t }).catch(n())
              }),
              v()(c()(a), '_handleSendMessage', function (e, t) {
                var n,
                  r,
                  i = a.props,
                  o = i.addToast,
                  s = i.cardUrl,
                  c = i.conversation,
                  l = i.conversationId,
                  u = i.createLocalApiErrorHandler,
                  d = i.gifMetadata,
                  p = i.history,
                  f = i.location,
                  h = i.newConversationParticipants,
                  m = i.perspective,
                  v = i.scribeAction,
                  y = i.scribeNamespace,
                  g = i.sendMessage,
                  b = i.tweetAttachment,
                  _ = a.state.attachment,
                  O = _ && _.media,
                  E = null != c && c.participants ? Object.keys(c.participants).length : 0,
                  S = (null == c ? void 0 : c.type) === R.CONVERSATION_TYPE.GROUP,
                  w = 'unknown'
                if (
                  (e.quickReply ||
                    O ||
                    (a._currentComposer && a._currentComposer.clear(),
                    a._currentComposer && a._currentComposer.focus()),
                  d)
                )
                  w = 'gif'
                else if (s) w = 'card'
                else if (b) w = 'tweet'
                else {
                  var C,
                    x = null == _ || null === (C = _.media) || void 0 === C ? void 0 : C.mediaFile,
                    A = null != x && x.isVideo ? 'video' : null != x && x.isGif ? 'gif' : 'photo'
                  w = x ? A : t ? 'text' : 'unknown'
                }
                return (
                  l &&
                    v(Sc(Sc({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: l,
                      conversation_participant_count: E,
                      conversation_type: S ? ht.g.GROUP : ht.g.ONE_TO_ONE,
                    }),
                  a.setState({ isSending: !0 }),
                  l
                    ? (!a.state.attachment ||
                        (null !== (n = a.state.attachment) &&
                          void 0 !== n &&
                          null !== (r = n.media) &&
                          void 0 !== r &&
                          r.uploading) ||
                        (a.setState({ attachment: null }), p.replace(f.pathname)),
                      g(
                        Sc(
                          { senderId: m, cardUrl: s, conversationId: l, text: t, tweetAttachment: b },
                          e && e.quickReply && { quickReply: e.quickReply },
                        ),
                      )
                        .then(function () {
                          !e.quickReply &&
                            O &&
                            (a._currentComposer && a._currentComposer.clear(),
                            a._currentComposer && a._currentComposer.focus()),
                            a.setState({ isSending: !1 })
                        })
                        .catch(function (e) {
                          if ((a.setState({ isSending: !1 }), !Object(Oc.d)(e) || e.code !== Vs.b.CANCELED))
                            if (Object(Oc.d)(e)) {
                              var t = Object(Oc.b)(e, kc)
                              t && o(t)
                            } else u(qs.b)(e)
                        }))
                    : (g({
                        senderId: m,
                        recipients:
                          h &&
                          h.map(function (e) {
                            return e.data.id_str
                          }),
                        text: t,
                        tweetAttachment: b,
                      }).then(function (e) {
                        v(Sc(Sc({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: ht.g.GROUP,
                        }),
                          a.setState({ attachment: null, isSending: !1 }),
                          p.replace('/messages/'.concat(e))
                      }, u(qs.b)),
                      Promise.resolve())
                )
              }),
              v()(c()(a), '_handlePopOutConvo', function () {
                var e = a.props,
                  t = e.conversationId
                ;(0, e.popOutConversation)(t)
              }),
              v()(c()(a), '_handleInfoClick', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.history
                t && n.push('/messages/'.concat(t, '/info'))
              }),
              v()(c()(a), '_handleComposeClick', function () {
                a._currentComposer && a._currentComposer.focus()
              }),
              v()(c()(a), '_handleSaveDraftText', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.saveText
                t && a._currentComposer && n(t, a._currentComposer.value())
              }),
              (a.state = {
                attachment: Ic(e),
                composerHeight: ie.a.theme.componentDimensions.appBarHeight,
                isSending: !1,
              }),
              a
            )
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
                    i = e.updateTweetDetailNav
                  return (
                    r(n),
                    i(n),
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
                  Ks()(function () {
                    return Object(Hs.a)().then(function (t) {
                      var n = t.KEYBOARD,
                        r = t.MOUSE,
                        i = t.detectedType,
                        a = e.props.quickReplyOptions
                      ;(i(n) || i(r)) && !a && e._currentComposer && e._currentComposer.focus()
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
                    (this._updatePolling = new Js.a(this._fetchUpdatesIfNeeded, { interval: t }))
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.props,
                    t = e.conversation,
                    n = e.conversationId,
                    r = e.removeConversation,
                    i = (null == t ? void 0 : t.entries) || []
                  this._updatePolling && this._updatePolling.stop(),
                    (this._updatePolling = void 0),
                    this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                    0 === i.length && r(n),
                    1 === i.length && 'welcome_message_create' === i[0].type && r(n)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n,
                    r = this.props,
                    i = r.conversation,
                    a = r.conversationId,
                    o = r.fetchStatus,
                    s = r.isUploading,
                    c = r.quickReplyOptions,
                    l = r.updateConversationReadState
                  a !== e.conversationId
                    ? (a && this._fetchConversation(a),
                      this._focusComposerIfNeeded(),
                      this._livePipelineSubscription && this._livePipelineSubscription.teardown(),
                      this._initializeLivePipeline())
                    : ((null == i ? void 0 : i.sort_event_id) !==
                        (null === (n = e.conversation) || void 0 === n ? void 0 : n.sort_event_id) && l(a),
                      s || !e.isUploading || c || (this._currentComposer && this._currentComposer.focus()),
                      e.fetchStatus === C.a.LOADED && o !== C.a.LOADED && a && this._fetchConversation(a))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(ge.a)(t, n) || this.setState({ attachment: Ic(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return g.a.createElement(
                    Ps.a,
                    { style: [Xs.root, ns.b.isKaiOS() && Xs.kaiOSFix] },
                    g.a.createElement(Us.a, {
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
                    i = e.conversationId,
                    a = e.dataSaverMode,
                    o = e.draftText,
                    s = e.dtabBarInfo,
                    c = e.history,
                    l = e.isUploading,
                    u = e.mediaUploadProgress,
                    d = e.quickReplyOptions,
                    p = e.removeMedia,
                    f = e.richTextInputContext,
                    h = e.scribeNamespace,
                    m = e.typeaheadWrapper,
                    v = this.state,
                    y = v.attachment,
                    b = v.isSending,
                    _ = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : g.a.createElement(Ns.a, {
                        attachment: y,
                        conversationId: i,
                        disabled: l,
                        dtabBarInfo: s,
                        history: c,
                        isCardPreviewTombstoned: Object(Ws.a)(n),
                        isSending: b,
                        isUploading: l,
                        key: i,
                        mediaUploadProgress: u,
                        onAddMedia: t,
                        onBlur: this._handleSaveDraftText,
                        onHeightChange: this._handleNavHeightChange,
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: a ? this._throttleSaveDraftText : this._handleTyping,
                        prefillText: 'string' == typeof _ ? _ : void 0,
                        primaryActionIcon: Cc,
                        primaryActionLabel: Ac,
                        quickReplyOptions: d,
                        ref: this._composer,
                        removeMedia: p,
                        richTextInputContext: f,
                        scribeNamespace: h,
                        typeaheadWrapper: m,
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
                    i = t.updateConversationReadState
                  return r({ conversationId: e })
                    .then(function () {
                      return i(e)
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
                    i = t.createLocalApiErrorHandler,
                    a = t.location,
                    o = a.query.text,
                    s = Array.isArray(a.query.welcome_message_id)
                      ? a.query.welcome_message_id[0]
                      : a.query.welcome_message_id,
                    c = !!this.state.attachment || !(!o || s),
                    l = !r || !r.type || r.type === R.CONVERSATION_TYPE.GROUP,
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return c || l || u ? Promise.resolve() : n(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(g.a.PureComponent)
      v()(jc, 'contextType', ee.a), v()(jc, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: zs.a })
      t.a = Object(lc.c)()(N(jc))
    },
    RJrc: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n.n(r),
        a = n('3XMw'),
        o = n.n(a),
        s = n('MWbm'),
        c = n('Qwev'),
        l = n('rHpw'),
        u = o.a.ffde2fdb,
        d = l.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return i.a.createElement(s.a, { style: d.spinner }, i.a.createElement(c.a, { accessibilityLabel: u }))
      }
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n.n(r).a.createContext({ isDrawer: !1 })
      t.a = i
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
          return f
        }),
        n.d(t, 'k', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return m
        }),
        n.d(t, 'i', function () {
          return v
        }),
        n.d(t, 'g', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return b
        }),
        n.d(t, 'b', function () {
          return _
        }),
        n.d(t, 'd', function () {
          return R
        })
      n('z84I'), n('ho0z')
      var r = n('CDB5'),
        i = n('Myq3'),
        a = n('XnpN'),
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
      function f(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && f(t)) && !!e.video.audio_only
      }
      function m(e, t, n, r) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: r, scribeNamespace: n },
        }
      }
      function v(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(a.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var y = function (e) {
          return e === o.d.TERTIARY
            ? 'low_quality_timeline'
            : e === o.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        g = function (e) {
          return e === o.d.TERTIARY
            ? '/messages/requests/additional'
            : e === o.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        b = function (e) {
          return function () {
            return r.b(e)
          }
        },
        _ = function (e) {
          return function (t) {
            return r.c(e, t)
          }
        },
        R = function (e, t) {
          var n = Object(i.a)(e, function (e) {
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
        i = n.n(r),
        a = n('ddV6'),
        o = n.n(a),
        s = (n('2G9S'), n('tQbP'), n('aWyx')),
        c = (n('6U7i'), n('LW0h'), n('z84I'), n('t0aI')),
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
                  i = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case i.id_str:
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
        h = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          a = e.type,
          c = Object(f.a)(r),
          l = Object(h.a)(c, function (e) {
            return e.user.id_str === t
          }),
          u = o()(l, 2),
          d = u[0],
          m = u[1]
        return m.length ? (a === s.a.GROUP && 1 === m.length ? [].concat(i()(d), i()(m)) : n ? m.sort(p(n)) : m) : d
      }
    },
    XygZ: function (e, t, n) {
      'use strict'
      var r = n('ax0f'),
        i = n('gIHd')
      r(
        { target: 'String', proto: !0, forced: n('sHxg')('anchor') },
        {
          anchor: function (e) {
            return i(this, 'a', 'name', e)
          },
        },
      )
    },
    aA19: function (e, t, n) {
      'use strict'
      n('uFXj'), n('z84I'), n('hBvt'), n('M+/F'), n('+KXO')
      var r = n('ERkP'),
        i = n.n(r),
        a = n('aWyx'),
        o = n('XnpN'),
        s = n('3XMw'),
        c = n.n(s),
        l = n('rHpw'),
        u = n('TIdA'),
        d = n('A91F'),
        p = n('jhWN'),
        f = n('9Xij'),
        h = n('Znyr'),
        m = n('cm6r'),
        v = n('U+bB'),
        y = n('MWbm'),
        g = c.a.fd48249b,
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
        R = l.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        O = function (e) {
          var t = e.left,
            n = e.right
          return i.a.createElement(
            y.a,
            { style: _.container },
            i.a.createElement(y.a, { style: _.left }, t),
            i.a.createElement(y.a, { style: _.right }, n),
          )
        },
        E = function (e) {
          var t = e.bottom,
            n = e.top
          return i.a.createElement(
            y.a,
            { style: R.container },
            i.a.createElement(y.a, { style: R.top }, n),
            i.a.createElement(y.a, { style: R.bottom }, t),
          )
        }
      t.a = function (e) {
        var t = function (t) {
            var n = e.size,
              r = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return i.a.createElement(
              y.a,
              { key: t.id_str, style: b.container },
              i.a.createElement(p.a, { size: n || r, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var r = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return i.a.createElement(
                  y.a,
                  { key: e.id_str, style: b.container },
                  i.a.createElement(p.a, {
                    aspectRatio: r,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return i.a.createElement(f.a, { ratio: 1 }, i.a.createElement(O, { left: n[1], right: n[0] }))
            var r = i.a.createElement(E, { bottom: n[2], top: n[1] }),
              a = n[0]
            return i.a.createElement(O, { left: r, right: a })
          },
          r = e.conversation,
          s = e.link,
          c = e.perspective,
          _ = e.withBadge,
          R = r && r.avatar_image_https,
          S = r
            ? Object(o.a)(r, c).map(function (e) {
                return e.user
              })
            : [],
          w = S.slice(0, 3),
          C =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? i.a.createElement(u.a, {
                    accessibilityLabel: '',
                    aspectMode: d.a.SQUARE,
                    backgroundColor: l.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(r) ||
            (function (e) {
              return e ? i.a.createElement(v.a, { source: e }) : null
            })(R) ||
            (function (e) {
              var r = e.length
              return 0 === r ? null : 1 === r ? t(e[0]) : i.a.createElement(y.a, { style: b.circle }, n(e))
            })(w),
          x =
            s ||
            (function (e, t) {
              if (e)
                return e.type === a.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === a.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(r, S),
          A = _ && null != r && r.participants ? Object.keys(r.participants).length - 1 : 0
        return C
          ? i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(
                f.a,
                { ratio: 1 },
                x ? i.a.createElement(m.a, { interactiveStyles: null, link: x }, C) : C,
              ),
              A
                ? (function (e) {
                    var t = e.badgeCount
                    return i.a.createElement(
                      y.a,
                      { style: b.itemAccessory },
                      i.a.createElement(h.a, {
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
                  })({ badgeCount: A })
                : null,
            )
          : null
      }
    },
    b9JY: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'e', function () {
          return a
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
        i = function (e) {
          return e && e.type === r.b.MESSAGE
        },
        a = function (e) {
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
        return a
      })
      var r = n('ZUOq'),
        i = n('rHpw'),
        a = { durationMs: 300 },
        o = i.a.create(function (e) {
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
            expandable: { transition: 'all '.concat(a.durationMs, 'ms ease') },
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
      n('LqLs'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('jwue'), n('LW0h'), n('z84I'), n('+oxZ')
      var r = n('6/RC'),
        i = new Set(),
        a = new Set(),
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
                  ? i.forEach(function (e) {
                      return e(t)
                    })
                  : a.forEach(function (e) {
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
            i.add(e),
            function () {
              return i.delete(e)
            }
          )
        },
        l = function (e) {
          return (
            o || s(),
            a.add(e),
            function () {
              return a.delete(e)
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
          return i
        })
      var r = function (e) {
          return { id: e, distanceToViewportTop: 0 }
        },
        i = function (e) {
          return { id: e, distanceToViewportBottom: 0 }
        }
    },
    g54k: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return c
      })
      n('KOtZ')
      var r = n('hqKg'),
        i = (n('LW0h'), n('2G9S'), n('z84I'), n('s1N3')),
        a = function (e) {
          var t = e.sender_id,
            n = e.by_user_id,
            r = e.participants,
            a = void 0 === r ? [] : r
          return Object(i.a)(
            a
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
            users: a(t).reduce(function (t, n) {
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
        return a
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
        i = function (e, t) {
          return {
            entry: { id: t, time: '', type: e },
            isActive: !1,
            isRapidFire: !1,
            isFirstRapidFire: !1,
            isLastRapidFire: !1,
            type: e,
          }
        },
        a = i(r.b.CONVERSATION_PROFILE_INFO_HEADER, 'conversationProfileInfoHeader'),
        o = 'typingIndicator',
        s = i(r.b.TYPING_INDICATOR, o),
        c = i(r.b.READ_ONLY_INDICATOR, 'readOnlyIndicator')
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
        return f
      })
      var r = n('ddV6'),
        i = n.n(r),
        a = (n('ho0z'), n('+KXO'), n('z84I'), n('LW0h'), n('Xrkv')),
        o = n('aWyx'),
        s = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        u = l.a.b5b7fb93,
        d = l.a.g755fcde,
        p = l.a.f6b1ff81
      t.a = function (e, t, n) {
        var r = e.type,
          i = e.name,
          a = e.participants,
          c = void 0 === a ? {} : a
        if (r === o.a.GROUP && i) return i
        if (Object.keys(c).length) {
          if (r === o.a.GROUP && n) return u
          var l = Object(s.a)(e, t).map(function (e) {
            return e.user
          })
          return f(l, t, r)
        }
      }
      var f = function () {
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
            var s = i()(r, 1),
              c = s[0]
            return n === o.a.GROUP ? p({ name: c }) : c
          default:
            var l = !0
            return Object(a.a)(r, l)
        }
      }
    },
    prG5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return P
      })
      n('OZaJ')
      var r = n('97Jx'),
        i = n.n(r),
        a = n('m3Bd'),
        o = n.n(a),
        s = n('VrFO'),
        c = n.n(s),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        h = n.n(f),
        m = n('N+ot'),
        v = n.n(m),
        y = n('AuHH'),
        g = n.n(y),
        b = n('KEM+'),
        _ = n.n(b),
        R = (n('2G9S'), n('ERkP')),
        O = n.n(R),
        E = n('nT9l'),
        S = n('3XMw'),
        w = n.n(S),
        C = 'image',
        x = n('TIdA'),
        A = n('a6qo')
      function k(e) {
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
            r = g()(e)
          if (t) {
            var i = g()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var T = w.a.f93bb3ee,
        P = (function (e) {
          h()(n, e)
          var t = k(n)
          function n() {
            var e
            c()(this, n)
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              _()(p()(e), '_renderContent', function (t) {
                var n = t.resourceSelectionHandler,
                  r = t.useMinimumData,
                  a = e.props,
                  s = a.accessibilityLabel,
                  c = (a.hideAcceptOverlay, a.shouldShowAltLabel),
                  l = o()(a, ['accessibilityLabel', 'hideAcceptOverlay', 'shouldShowAltLabel'])
                return O.a.createElement(
                  O.a.Fragment,
                  null,
                  O.a.createElement(
                    x.a,
                    i()({}, l, { accessibilityLabel: s, onVariantSelection: n, previewMode: r, testID: C }),
                  ),
                  c ? O.a.createElement(A.a, { align: 'left', altLabel: s }) : null,
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
                  return O.a.createElement(E.a, {
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
        })(O.a.Component)
    },
    tZH3: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n.n(r),
        a = n('3XMw'),
        o = n.n(a),
        s = n('MWbm'),
        c = n('CKsB'),
        l = n('/yvb'),
        u = n('rHpw'),
        d = n('hiGS'),
        p = n('pu5c'),
        f = n('zIWA'),
        h = o.a.fcd4d489,
        m = o.a.gbed8594,
        v = o.a.g9074da4,
        y = o.a.ad63377d,
        g = o.a.h09b49f7,
        b = o.a.i6b19b07,
        _ = o.a.j7bb1a42,
        R = o.a.ea200ba6,
        O = o.a.cfd2f35d,
        E = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            r = e.isGroup,
            a = e.onBlockClick,
            o = e.onDeleteClick,
            u = e.onReportClick,
            E = e.requestorScreenName,
            w = e.showBlock,
            C = e.showCancel,
            x = e.showDelete,
            A = i.a.useCallback(
              function () {
                u && u(), t()
              },
              [t, u],
            ),
            k = i.a.useCallback(
              function () {
                a && a(), t()
              },
              [t, a],
            ),
            T = i.a.useCallback(
              function () {
                o && o(), t()
              },
              [t, o],
            )
          return i.a.createElement(
            s.a,
            { accessibilityRole: 'dialog', style: n ? S.flatCorners : S.roundCorners },
            x
              ? i.a.createElement(c.a, {
                  Icon: d.a,
                  actionSubText: g,
                  actionText: r ? v : y,
                  onClick: T,
                  textColor: 'red500',
                })
              : null,
            w
              ? i.a.createElement(c.a, { Icon: p.a, actionSubText: m, actionText: h({ screenName: E }), onClick: k })
              : null,
            i.a.createElement(c.a, {
              Icon: f.a,
              actionSubText: R,
              actionText: r ? b : _({ screenName: E }),
              onClick: A,
            }),
            C ? i.a.createElement(l.a, { onPress: t, style: S.cancelButton, type: 'primaryOutlined' }, O) : null,
          )
        }
      E.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var S = u.a.create(function (e) {
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
      n('OZaJ'), n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('97Jx'),
        i = n.n(r),
        a = n('VrFO'),
        o = n.n(a),
        s = n('Y9Ll'),
        c = n.n(s),
        l = n('1Pcy'),
        u = n.n(l),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        h = n.n(f),
        m = n('AuHH'),
        v = n.n(m),
        y = n('KEM+'),
        g = n.n(y),
        b = (n('uFXj'), n('z84I'), n('tVqn'), n('ERkP')),
        _ = n.n(b),
        R = n('1YZw'),
        O = n('zh9S'),
        E = n('P1r1'),
        S = n('AspN'),
        w = n('rxPX'),
        C = Object(w.a)()
          .propsFromState(function () {
            return { dataSaverMode: E.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: S.b,
              addToast: R.b,
              processMultipleMedia: S.g,
              removeMediaUpload: S.i,
              scribeAction: O.c,
              preUploadMedia: S.e,
            }
          }),
        x = n('wpu3'),
        A = n('cOB2'),
        k = n('MWbm'),
        T = n('0FVZ'),
        P = n('Oe3h'),
        I = n('rHpw')
      var j = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            a = e.onLayout,
            o = e.sideNavPresent,
            s = e.style,
            c = _.a.useContext(A.a)
          return o
            ? _.a.createElement(
                _.a.Fragment,
                null,
                _.a.createElement(k.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s }, r),
              )
            : _.a.createElement(
                T.a.BottomComposer,
                null,
                _.a.createElement(P.a, { id: 'DMComposerWrapper' }, function (e, o) {
                  return _.a.createElement(
                    k.a,
                    i()({ ref: e() }, o({ accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s })),
                    r,
                    _.a.createElement(k.a, { style: !1 === c.keyboardVisible && M.offsetBottom }),
                  )
                }),
              )
        },
        M = I.a.create(function () {
          return { offsetBottom: { paddingBottom: I.a.iPhoneOffsetBottom } }
        }),
        D = (n('2G9S'), n('jQ/y'), n('HPNB')),
        L = n('htQn'),
        B = n('t62R')
      function F(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var N = (function (e) {
          p()(n, e)
          var t = F(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(u()(e), '_handleClick', function () {
                var t = e.props,
                  n = t.id,
                  r = t.label
                ;(0, t.onClick)({ id: n, label: r })
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.description,
                    n = e.isWide,
                    r = e.label
                  return _.a.createElement(
                    L.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [U.root, n && U.isWide, !n && U.isNarrow],
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
        U = I.a.create(function (e) {
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
        H = N,
        W = n('cHvH'),
        V = n('mw9i')
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var q = (function (e) {
          p()(n, e)
          var t = z(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              g()(u()(e), '_handleOptionChoose', function (t) {
                var n = e.props
                return (0, n.onOptionChoose)(n.quickReplyOptions.id, t)
              }),
              e
            )
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.quickReplyOptions.options,
                    n = 1 === t.length
                  return _.a.createElement(W.a, null, function (r) {
                    var i = r.windowWidth,
                      a = D.a.isTwoColumnLayout(i),
                      o = [a && G.isWide, a && n && G.oneButtonOnly, !a && G.isNarrow]
                    return _.a.createElement(
                      V.a,
                      { style: o, withGutter: a },
                      t.map(function (t) {
                        return e.renderOption(t, a)
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
        G = I.a.create(function (e) {
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
        K = q,
        Y = n('krmn'),
        Q = n('cIoY'),
        X = n('w3n3'),
        J = n('MLl7'),
        Z = n('3XMw'),
        $ = n.n(Z),
        ee = n('J2UM'),
        te = n('VPdC'),
        ne = n('pKoL'),
        re = n('eyty'),
        ie = n('oQhu'),
        ae = n('JYMr')
      function oe(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var se = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        ce = (function (e) {
          p()(n, e)
          var t = oe(n)
          function n() {
            var e
            o()(this, n)
            for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a]
            return (e = t.call.apply(t, [this].concat(i))), g()(u()(e), 'state', { currentStepIndex: -1 }), e
          }
          return (
            c()(n, [
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
                    t = e >= 0 && e < se.length ? se[e].progress : 0
                  return _.a.createElement(ae.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < se.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, se[e].waitMs))
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      function le(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var ue = (function (e) {
          p()(n, e)
          var t = le(n)
          function n() {
            return o()(this, n), t.apply(this, arguments)
          }
          return (
            c()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.isSending,
                    n = e.isUploading,
                    r = e.progress
                  return t && !n
                    ? _.a.createElement(ce, null)
                    : _.a.createElement(ae.a, { progress: t ? Math.max(r, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(_.a.PureComponent),
        de = n('Dtul'),
        pe = n('Es6L'),
        fe = 'dmComposerAttachments',
        he = 'dmComposerTextInput',
        me = 'dmComposerSendButton',
        ve = n('GZwR'),
        ye = n('aITJ'),
        ge = n('6OUF'),
        be = n('9Xij'),
        _e = n('/yvb'),
        Re = n('v6aA'),
        Oe = n('gpVt'),
        Ee = n('Lsrn'),
        Se = n('k/Ka')
      function we(e, t) {
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
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? we(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : we(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var xe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Se.a)(
          'svg',
          Ce(
            Ce({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ee.a.root, e.style], viewBox: '0 0 24 24' },
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
      xe.metadata = { width: 24, height: 24 }
      var Ae = xe
      function ke(e, t) {
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
      function Te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ke(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ke(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Pe = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Se.a)(
          'svg',
          Te(
            Te({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ee.a.root, e.style], viewBox: '0 0 24 24' },
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
      Pe.metadata = { width: 24, height: 24 }
      var Ie = Pe,
        je = n('iySH')
      function Me(e, t) {
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
      function De(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Me(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Me(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Le(e) {
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var Be = $.a.ee230734,
        Fe = $.a.ca0ce0e4,
        Ne = $.a.cdcebd22,
        Ue = $.a.ic8c615d,
        He = $.a.a04077c4,
        We = function (e) {
          return !(!e || !e.media)
        },
        Ve = Object(x.b)({ maxNumberOfPhotos: 1 }),
        ze = (function (e) {
          p()(n, e)
          var t = Le(n)
          function n(e, r) {
            var a, s, c
            o()(this, n),
              (c = t.call(this, e, r)),
              g()(u()(c), '_handleLayout', function (e) {
                var t = c.props.onHeightChange,
                  n = c.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(pe.a)() || (t && t(r.height)),
                  r.width <= I.a.theme.breakpoints.small && !n
                    ? c.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > I.a.theme.breakpoints.small && n && c.setState({ mediaButtonsCollapsible: !1 }))
              }),
              g()(u()(c), '_renderQuickReplyPicker', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state.isQuickReplyOpen
                return e && t
                  ? _.a.createElement(K, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              g()(u()(c), '_renderComposeBox', function () {
                return _.a.createElement(k.a, { style: qe.composeBoxContainer }, c._renderMainContent())
              }),
              g()(u()(c), '_renderMainContent', function () {
                var e = c.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = c.state.value,
                  i = n
                return i
                  ? _.a.createElement(
                      i,
                      {
                        contextText: r,
                        isInline: !0,
                        onTextUpdated: t ? c._handleRichTextChange : c._handlePlainTextChange,
                        onTypeaheadStateChange: c._handleTypeaheadStateChange,
                        source: ve.d.ComposeMessage,
                      },
                      c._renderFieldTextInput,
                    )
                  : c._renderFieldTextInput()
              }),
              g()(u()(c), '_renderFieldTextInput', function (e) {
                var t = c.props,
                  n = t.disabled,
                  r = t.placeholderText,
                  a = t.richTextInputContext,
                  o = ye.b.isKaiOS() ? Ne : r || Fe,
                  s = c.state,
                  l = s.editorState,
                  u = s.mediaButtonsCollapsible,
                  d = s.value,
                  p = !!a,
                  f = a ? { editorState: l, element: a.element } : void 0,
                  h = a
                    ? {
                        onChange: c._getHandleRichTextChange(e),
                        richTextInputContext: { editorState: l, element: a.element },
                      }
                    : { onChange: c._getHandlePlainTextChange(e), richTextInputContext: void 0 }
                return _.a.createElement(
                  ge.a,
                  i()(
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
                      placeholder: o,
                      ref: c._setTextInputRef,
                      richTextInputContext: n ? void 0 : f,
                      style: qe.composeInput,
                      testID: he,
                      useCacheForDOMMeasurements: !c._isSendDisabled() && !u,
                      value: d,
                    },
                    h,
                  ),
                )
              }),
              g()(
                u()(c),
                '_getHandleRichTextChange',
                Object(ie.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handleRichTextChange(t)
                  }
                }),
              ),
              g()(
                u()(c),
                '_getHandlePlainTextChange',
                Object(ie.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handlePlainTextChange(t)
                  }
                }),
              ),
              g()(u()(c), '_handleTypeaheadStateChange', function (e) {
                c.setState({ isTypeaheadActive: e })
              }),
              g()(u()(c), '_renderAttachments', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.isCardPreviewTombstoned,
                  i = e.isShareViaDM,
                  a = e.isUploading,
                  o = c.state.value,
                  s =
                    (t &&
                      ((t.media && t.media.mediaFile) || (t.provider && t.media && t.media.externalMediaDetails))) ||
                    {},
                  l = s.height,
                  u = s.width,
                  d = null == t ? void 0 : t.media,
                  p = null == d ? void 0 : d.mediaMetadata,
                  f = null == p ? void 0 : p.altText,
                  h = null == p ? void 0 : p.defaultAltText,
                  m = Object(Oe.b)(o)
                return _.a.createElement(
                  _.a.Fragment,
                  null,
                  d
                    ? _.a.createElement(
                        k.a,
                        { style: qe.attachmentContainer, testID: fe },
                        _.a.createElement(
                          be.a,
                          { ratio: u / l, style: qe.aspectContainer },
                          _.a.createElement(
                            k.a,
                            { style: qe.mediaPreviewContainer },
                            _.a.createElement(ne.a, {
                              accessibilityLabel: f || h,
                              mediaItem: d,
                              onClick: c._canEditImage ? c._handleClickMediaDetail : void 0,
                              onEdit: c._canEditImage || c._canEditVideo ? c._handleClickMediaDetail : void 0,
                              onRemove: c._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: qe.mediaPreview,
                              withAltTextLabel: !!f,
                              withCloseButton: !a,
                              withEditButton: (c._canEditImage || c._canEditVideo) && !a,
                              withEditIcon: !0,
                            }),
                          ),
                        ),
                        t &&
                          t.provider &&
                          t.gifUrl &&
                          _.a.createElement(
                            k.a,
                            { style: qe.gifAttribution },
                            _.a.createElement(Q.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : m && !i
                    ? _.a.createElement(Oe.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: qe.cardPreviewContainer,
                        urls: m,
                      })
                    : null,
                )
              }),
              g()(u()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && ye.b.isDesktopOS()
                  ? _.a.createElement(Y.a, {
                      disabled: c.props.disabled,
                      onEmojiSelect: c._handleEmojiSelect,
                      onPress: c._handleTextInputFocus,
                      size: 'small',
                      textInputRef: c._textInput || void 0,
                    })
                  : null
              }),
              g()(u()(c), '_renderPrimaryActionButton', function (e) {
                var t = c.props,
                  n = t.primaryActionIcon,
                  r = t.primaryActionLabel,
                  i = t.quickReplyOptions,
                  a = c._hasMessageText()
                return !i || a || e
                  ? _.a.createElement(
                      _e.a,
                      {
                        accessibilityLabel: r,
                        disabled: c._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: c._handlePrimaryAction,
                        size: 'medium',
                        style: qe.actionButton,
                        testID: me,
                        type: n ? 'brandText' : 'brandFilled',
                      },
                      n ? null : r,
                    )
                  : c._renderQRToggleButton()
              }),
              g()(u()(c), '_renderSecondaryActionButton', function () {
                var e = c.props,
                  t = e.secondaryActionLabel,
                  n = e.shouldEnableSecondaryActionFunc,
                  r = e.shouldShowSecondaryActionFunc
                if ((r && !r()) || !t) return null
                var i = !n || n()
                return _.a.createElement(
                  _e.a,
                  {
                    accessibilityLabel: t,
                    disabled: !i,
                    onPress: c._handleSecondaryAction,
                    style: qe.actionButton,
                    type: 'primaryOutlined',
                  },
                  c.props.secondaryActionLabel,
                )
              }),
              g()(u()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return _.a.createElement(_e.a, {
                  accessibilityLabel: Ue,
                  icon: e ? _.a.createElement(Ae, null) : _.a.createElement(Ie, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: qe.actionButton,
                  type: 'brandText',
                })
              }),
              g()(u()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = We(e),
                  n = c._renderComposeBox(),
                  r = c._renderPrimaryActionButton(t),
                  i = c._renderSecondaryActionButton()
                return _.a.createElement(
                  k.a,
                  { style: [qe.composer, t && qe.composerWithAttachment] },
                  t ? null : c._renderMediaButtons(),
                  n,
                  i,
                  r,
                )
              }),
              g()(u()(c), '_renderMediaButtons', function () {
                var e = c.props,
                  t = e.withGifPicker,
                  n = e.withMediaPicker,
                  r = c.state,
                  i = r.mediaButtonsCollapsed,
                  a = r.mediaButtonsCollapsible && i
                return _.a.createElement(
                  k.a,
                  { style: qe.uploadButtons },
                  a
                    ? _.a.createElement(_e.a, {
                        accessibilityLabel: Be,
                        icon: _.a.createElement(je.a, null),
                        onMouseDown: c._handleShowMediaControlsMouseDown,
                        type: 'brandText',
                      })
                    : null,
                  n && !a ? c._renderMediaPicker() : null,
                  t && !a ? c._renderGifButton() : null,
                )
              }),
              g()(u()(c), '_handleShowMediaControlsMouseDown', function () {
                var e = c.props,
                  t = e.scribeAction,
                  n = e.scribeNamespace
                c.setState({ mediaButtonsCollapsed: !1 }),
                  t(De(De({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
              }),
              g()(u()(c), '_handleReturn', function (e) {
                var t = e.nativeEvent,
                  n = t.ctrlKey,
                  r = t.key,
                  i = t.metaKey,
                  a = t.shiftKey,
                  o = 'Enter' === r
                return !c.state.isTypeaheadActive && o && c._keyboardOrMouseDetected && !(a || i || n)
                  ? (e.preventDefault(), c._handlePrimaryAction(e), 'handled')
                  : 'not-handled'
              }),
              g()(u()(c), '_handleClickMediaDetail', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.conversationId,
                  r = e.history
                if (c._canEditImage || c._canEditVideo) {
                  var i = t && t.media ? t.media.id : 0,
                    a = c._canEditVideo ? 'trimmer' : 'crop'
                  r.push('/messages/compose/media', { mediaId: i, conversationId: n, tab: a })
                }
              }),
              g()(u()(c), '_handleAddMediaFiles', function (e) {
                var t = c.props,
                  n = t.addMedia,
                  r = t.addToast,
                  i = t.dataSaverMode,
                  a = t.onAddMedia,
                  o = t.preUploadMedia,
                  s = t.processMultipleMedia,
                  l = t.removeMedia,
                  u = t.removeMediaUpload
                n(e, { location: re.d.Dm }).then(function (e) {
                  var t = e.map(function (e) {
                    return e.id
                  })
                  c._validateMedia(e)
                    ? (a && a(t),
                      s(e, { onFailure: l }).then(function (e) {
                        i ||
                          o(
                            e.map(function (e) {
                              return e.id
                            }),
                          )
                      }))
                    : (r({ text: He }), u(t))
                })
              }),
              g()(u()(c), '_handleEmojiSelect', function (e) {
                var t = c.state.editorState,
                  n = c.props.richTextInputContext
                if (n && t) {
                  var r = n.insertTextAtCursor(t, e.text)
                  c._handleRichTextChange(r)
                }
              }),
              g()(u()(c), '_handleRemoveMedia', function (e) {
                return function () {
                  c.props.removeMedia && c.props.removeMedia(e)
                }
              }),
              g()(u()(c), '_handlePrimaryAction', function (e) {
                if (!c._isSendDisabled()) {
                  var t = c.props.onPrimaryAction
                  c._textInput &&
                    c._textInput.applyFinalValue(function (e) {
                      t({ type: 'richText' }, e)
                    }),
                    c._closeQuickReplyPicker()
                }
              }),
              g()(u()(c), '_handleSecondaryAction', function (e) {
                var t = c.props.onSecondaryAction
                c._textInput &&
                  c._textInput.applyFinalValue(function (e) {
                    t && t({ type: 'richText' }, e)
                  })
              }),
              g()(u()(c), '_handleRichTextChange', function (e) {
                var t = c.props,
                  n = t.onTyping,
                  r = t.richTextInputContext,
                  i = c.state.value,
                  a = e.getCurrentContent().getPlainText(),
                  o = r ? r.convertEmojiToEntities(e) : null
                c.setState({ editorState: o, value: a }), i !== a && (null == n || n())
              }),
              g()(u()(c), '_handlePlainTextChange', function (e) {
                var t = c.props.onTyping,
                  n = c.state.value,
                  r = e.target.value
                c.setState({ value: r }), n !== r && (null == t || t())
              }),
              g()(u()(c), '_handleOnBlur', function () {
                var e = c.props.onBlur,
                  t = c.state.mediaButtonsCollapsible
                e && e(), t && c.setState({ mediaButtonsCollapsed: !1 })
              }),
              g()(u()(c), '_handleTextInputFocus', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state,
                  n = t.isQuickReplyOpen,
                  r = t.mediaButtonsCollapsible
                e && n && c._closeQuickReplyPicker(), r && c.setState({ mediaButtonsCollapsed: !0 })
              }),
              g()(u()(c), '_handleQROptionSelection', function (e, t) {
                var n = c.props,
                  r = n.disabled,
                  i = n.onPrimaryAction
                r || (i({ quickReply: { id: e, selected_id: t.id } }, t.label), c._closeQuickReplyPicker())
              }),
              g()(u()(c), '_handleQuickReplyPickerToggle', function () {
                c.setState({ isQuickReplyOpen: !c.state.isQuickReplyOpen })
              }),
              g()(u()(c), '_validateMedia', function (e) {
                return !We(c.props.attachment) && Ve(e)
              }),
              g()(u()(c), '_detectKeyboardOrMouse', function (e) {
                var t = e.KEYBOARD,
                  n = e.MOUSE
                ;(0, e.registerSome)(
                  function () {
                    c._keyboardOrMouseDetected = !0
                  },
                  [t, n],
                )
              }),
              g()(u()(c), '_isSendDisabled', function () {
                var e = c.props,
                  t = e.attachment,
                  n = e.canSendEmptyMessage,
                  r = e.disabled,
                  i = e.isUploading,
                  a = We(t),
                  o = c._hasMessageText() || n,
                  s = !(!t || !t.media) && (t.media.needsProcessing || i)
                return r || (!o && !a) || s || i
              }),
              g()(u()(c), '_hasMessageText', function () {
                return !!(c.state.value || '').trim()
              }),
              g()(u()(c), '_closeQuickReplyPicker', function () {
                c.setState({ isQuickReplyOpen: !1 })
              }),
              g()(u()(c), 'handleAddMediaFiles', function (e) {
                return c._handleAddMediaFiles(e)
              }),
              g()(u()(c), '_setTextInputRef', function (e) {
                c._textInput = e
              })
            var l = e.prefillText,
              d = e.richTextInputContext
            return (
              (c.state = {
                isQuickReplyOpen: !0,
                value: l,
                editorState:
                  null !==
                    (a = null == d || null === (s = d.initEditorState) || void 0 === s ? void 0 : s.call(d, l)) &&
                  void 0 !== a
                    ? a
                    : null,
                isTypeaheadActive: !1,
                mediaButtonsCollapsed: !1,
                mediaButtonsCollapsible: !1,
              }),
              c
            )
          }
          return (
            c()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  Object(ee.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = de.a.acquire())
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
                    i = e.mediaUploadProgress,
                    a = e.placeholderText,
                    o = e.style,
                    s = a || Fe,
                    c = Object(pe.a)(),
                    l = c && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return _.a.createElement(
                    j,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: c,
                      style: [qe.root, l && qe.dtabOffset, o],
                    },
                    _.a.createElement(ue, { isSending: n, isUploading: r, progress: n ? Math.max(i, 0.02) : 0 }),
                    this._renderComposer(),
                    this._renderQuickReplyPicker(),
                  )
                },
              },
              {
                key: '_renderMediaPicker',
                value: function () {
                  return _.a.createElement(te.a, {
                    onChange: this._handleAddMediaFiles,
                    style: qe.mediaPicker,
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
                  return _.a.createElement(X.a, {
                    dmConversationId: t,
                    enabled: !0,
                    gifSearchKeySource: J.a.DMComposition,
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
      g()(ze, 'contextType', Re.a),
        g()(ze, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var qe = I.a.create(function (e) {
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
      t.a = C.forwardRef(ze)
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      }),
        n.d(t, 'a', function () {
          return m
        })
      n('z84I'), n('ho0z')
      var r = n('ERkP'),
        i = n.n(r),
        a = n('t62R'),
        o = n('aWyx'),
        s = n('3XMw'),
        c = n.n(s),
        l = c.a.c1d4ac83,
        u = c.a.abc7b032,
        d = c.a.i263b293,
        p = function (e) {
          var t = e.children,
            n = e.conversationId
          return i.a.createElement(a.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        f = function (e, t) {
          return e >= 2
            ? i.a.createElement(
                c.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                i.a.createElement(p, { conversationId: t }, c.a.d1242bcc({ count: e })),
              )
            : i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        h = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? i.a.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var r = e.user_id,
                    o = n[r]
                  return o
                    ? i.a.createElement('span', { key: t }, t > 0 ? ', ' : null, i.a.createElement(a.b, null, o.name))
                    : null
                }),
              )
            : null
        },
        m = function (e, t, n, r) {
          var s,
            p = n === e.by_user_id
          switch (t) {
            case o.b.CONVERSATION_AVATAR_UPDATE:
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? l
                  : (function (e) {
                      return i.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        i.a.createElement(a.b, null, e),
                      )
                    })(s)
                : u
            case o.b.CONVERSATION_NAME_UPDATE:
              var f = i.a.createElement(a.b, null, e.conversation_name)
              return (s = e.by_user_id && r[e.by_user_id] && r[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(f)
                  : (function (e, t) {
                      return i.a.createElement(
                        c.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        i.a.createElement(a.b, null, e),
                        t,
                      )
                    })(s, f)
                : (function (e) {
                    return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(f)
            case o.b.JOIN_CONVERSATION:
              return (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name)
                ? (function (e) {
                    return i.a.createElement(
                      c.a.I18NFormatMessage,
                      { $i18n: 'fa95b019' },
                      i.a.createElement(a.b, null, e),
                    )
                  })(s)
                : d
            case o.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(i.a.createElement(h, { entry: e, users: r }))
            case o.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, i.a.createElement(a.b, null, e), t)
                  : i.a.createElement(c.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })(
                (s = e.sender_id && r[e.sender_id] && r[e.sender_id].name),
                i.a.createElement(h, { entry: e, users: r }),
              )
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
