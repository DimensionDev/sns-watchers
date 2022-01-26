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
        i = r.createContext({ heightsReady: !0 })
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
          return Promise.all([n.e(22), n.e(163)])
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
        i = n('3XMw'),
        a = n.n(i),
        o = n('MWbm'),
        s = n('rHpw'),
        c = n('t62R'),
        l = s.a.create(function (e) {
          return { root: { paddingBottom: e.spaces.space20 } }
        }),
        u = a.a.d84b485d,
        d = a.a.be0c83d7
      t.a = function (e) {
        var t = e.entry,
          n = e.isCompact,
          i = 'follow' === t.reason ? u : d
        return n
          ? r.createElement(c.b, { color: 'gray700' }, i)
          : r.createElement(
              o.a,
              { style: l.root },
              r.createElement(c.b, { align: 'center', color: 'gray700', size: 'subtext2' }, i),
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
        return g
      })
      var r = n('ddV6'),
        i = n.n(r),
        a = (n('z84I'), n('ho0z'), n('+KXO'), n('ERkP')),
        o = n('aWyx'),
        s = n('XnpN'),
        c = n('3XMw'),
        l = n.n(c),
        u = n('jV+4'),
        d = n('pjBI'),
        p = n('t62R'),
        f = n('rHpw'),
        h = n('p9G8'),
        m = l.a.cfd94063,
        v = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return e.map(function (e) {
            return e.data
          })
        },
        y = f.a.create(function (e) {
          return { title: { maxWidth: '50%' } }
        }),
        g = function (e) {
          var t = e.conversation,
            n = e.newConversationParticipants,
            r = e.perspective
          if (t) {
            if (t.type === o.a.ONE_TO_ONE) {
              var a = Object(s.a)(t, r).map(function (e) {
                return e.user
              })
              return i()(a, 1)[0].name
            }
            return Object(h.a)(t, r)
          }
          var c = v(n)
          return Object(h.b)(c, r)
        }
      t.b = function (e) {
        var t = e.conversation,
          n = e.isConversationSearchTitle,
          r = void 0 !== n && n,
          c = e.isMessageSearchTitle,
          l = void 0 !== c && c,
          f = e.newConversationParticipants,
          g = e.perspective,
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
          if (t.type === o.a.ONE_TO_ONE) {
            var k = Object(s.a)(t, g).map(function (e) {
                return e.user
              }),
              T = i()(k, 1)[0],
              I = a.createElement(u.a, {
                color: R,
                isProtected: T.protected,
                isVerified: T.verified,
                name: T.name,
                screenName: T.screen_name,
                weight: E,
                withLink: !1,
                withScreenName: w,
              })
            return (x && !r) || l ? a.createElement(d.a, null, I, A) : I
          }
          var P = t.participants,
            j = Object.keys(P).length
          if (r)
            return a.createElement(
              d.a,
              { color: R },
              a.createElement(p.b, { color: R, numberOfLines: 1, style: y.title, weight: E }, Object(h.a)(t, g, r)),
              x
                ? null
                : a.createElement(p.b, { color: 'gray700', numberOfLines: 1, weight: 'normal' }, m({ peopleCount: j })),
            )
          var M = a.createElement(p.b, { color: R, numberOfLines: 1, weight: E }, Object(h.a)(t, g, r))
          return (x && !r) || l ? a.createElement(d.a, null, M, A) : M
        }
        var D = v(f)
        return a.createElement(p.b, { color: R, numberOfLines: 1, weight: E }, Object(h.b)(D, g))
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
        g = n('0JOx'),
        b = n('zh9S'),
        _ = n('MMRb'),
        R = n('CDB5'),
        O = n('RqPI'),
        E = n('1YZw'),
        S = n('hqKg'),
        w = n('kGix'),
        C = n('AQOc'),
        x = n('UhuB'),
        A = n('pNZL'),
        k = n('G6rE'),
        T = n('oEGd'),
        I = n('X/yg'),
        P = n('0KEI'),
        j = n('P1r1'),
        M = function (e, t) {
          return t.conversationId
        },
        D = Object(S.createSelector)(
          _.selectFetchStatus,
          function (e, t) {
            return _.selectConversationFetchStatus(e, M(0, t))
          },
          function (e, t) {
            return e === w.a.LOADED ? t : e
          },
        ),
        L = Object(S.createSelector)(
          function (e, t) {
            return _.selectEntriesForConversation(e, M(0, t))
          },
          O.q,
          function (e, t) {
            return t ? Object(I.d)(e, t) : void 0
          },
        ),
        B = Object(S.createSelector)(
          function (e, t) {
            return _.selectConversation(e, M(0, t))
          },
          _.selectEntries,
          I.l,
          O.q,
          I.m,
          I.n,
          k.e.selectAll,
          D,
          function (e, t) {
            return R.g(e, M(0, t))
          },
          function (e, t) {
            return R.j(e, M(0, t))
          },
          function (e, t) {
            return R.i(e, M(0, t))
          },
          function (e, t) {
            return R.k(e, M(0, t))
          },
          function (e, t) {
            return R.h(e, M(0, t))
          },
          function (e, t) {
            return R.l(e, M(0, t))
          },
          j.k,
          x.n,
          L,
          j.n,
          function (e, t) {
            var n = M(0, t)
            return _.selectInboxTypeByConversation(e, n)
          },
          function (e, t, n, r, i, a, o, s, c, l, u, d, p, f, h, m, v, y, g) {
            var b = e && e.data
            return {
              conversation: (b && Object(C.a)(b, t, o)) || void 0,
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
        F = Object(T.d)(B, function (e) {
          return {
            acceptConversation: _.acceptConversation,
            addMedia:
              ((t = e.conversationId),
              function (e, n) {
                return R.a(t, e, n)
              }),
            saveText: R.f,
            addToast: E.b,
            addWelcomeMessageToConversation: _.addWelcomeMessageToConversation,
            cancelUpload: Object(I.a)(e.conversationId),
            createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
              'DIRECT_MESSAGES_CONVERSATION',
            ),
            fetchConversationHistory: _.fetchConversationHistory,
            fetchConversationIfNeeded: _.fetchConversationIfNeeded,
            fetchInboxIfNeeded: _.fetchInboxIfNeeded,
            fetchUpdatesIfNeeded: _.fetchUpdatesIfNeeded,
            googleAnalyticsPageView: b.a,
            leaveConversation: _.leaveConversation,
            removeMedia: Object(I.b)(e.conversationId),
            removeText: R.d,
            scribeAction: b.c,
            scribePageImpression: b.d,
            sendMessage: R.m,
            updateConversationReadState: _.updateConversationReadState,
            updateTweetDetailNav: A.b,
            updateTyping: _.updateTyping,
            removeConversation: _.removeConversation,
            popOutConversation: _.popOutConversation,
          }
          var t
        }),
        N = n('I2k/'),
        U = n('ejT/'),
        H = n('7n04'),
        W = n('Myq3'),
        V = n('VPAj')
      function z(e, t) {
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
      function q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? z(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : z(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var G = function (e, t) {
          return e.getForItem(t).doesIntersectWith(e.getForViewport())
        },
        K = function (e) {
          return e.getForList().getBottom() - e.getForViewport().getBottom()
        },
        Y = function (e) {
          var t = e.isOwnMessage,
            n = e.typingIndicatorId,
            r = function (e) {
              return Object(W.a)(e.getList(), function (e) {
                return e.id !== n
              })
            }
          return q(
            q({}, H.a),
            {},
            {
              initialScrollHeadroom: Object(V.a)(0),
              scrollHeadroom: Object(V.a)(0),
              offsetCorrection: function (e, i) {
                var a = r(e),
                  o = r(i),
                  s = o && (!a || a.id !== o.id),
                  c = o && t(o.data.data),
                  l = a && G(e, a.id)
                return (s && (c || l)) ||
                  (l &&
                    (function (e, t) {
                      var r = e.getForItem(n),
                        i = t.getForItem(n)
                      return !r || (i && i.getHeight() > r.getHeight())
                    })(e, i))
                  ? Math.max(0, K(i))
                  : H.a.offsetCorrection(e, i)
              },
            },
          )
        },
        Q = (n('KOtZ'), n('gbD7')),
        X = (n('Blm6'), n('b9JY')),
        J = function (e, t) {
          if (e && e.message_data && t && t.message_data && Object(X.b)(e) && Object(X.b)(t)) {
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
        Z = n('jat/'),
        $ = (n('jQ/y'), n('ho0z'), n('uFXj'), n('v6aA')),
        ee = n('XnpN'),
        te = n('LhSm'),
        ne = n('I4+6'),
        re = n('rHpw'),
        ie = n('PbQQ'),
        ae = n('cm6r'),
        oe = n('jV+4'),
        se = n('pBrB'),
        ce = n('wCd/'),
        le = function (e, t) {
          var n = Object(ee.a)(e, t).map(function (e) {
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
        ue = re.a.create(function (e) {
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
        de = function (e) {
          var t = e.conversation,
            n = e.withBottomBorder,
            r = void 0 === n || n,
            i = y.useContext($.a).loggedInUserId
          if (!t) return null
          var a = le(t, i || ''),
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
            g = !!(f && h && ((c && l) || p)),
            b = ne.a.generate({
              color: re.a.theme.colors.text,
              backgroundColor: re.a.theme.colors.transparent,
              customFocusBackgroundColor: re.a.theme.colors.gray0,
              customHoverBackgroundColor: re.a.theme.colors.gray0,
              customPressedBackgroundColor: re.a.theme.colors.activeFaintGray,
            })
          return y.createElement(ie.a.Consumer, null, function (e) {
            return y.createElement(
              ae.a,
              {
                interactiveStyles: b,
                link: e.withAnchorless('https://twitter.com/'.concat(h || '')),
                style: [ue.root, r && g && ue.borderBottom],
              },
              y.createElement(oe.a, {
                isVerified: d,
                name: f,
                screenName: h,
                style: ue.profileInfoItemMargin,
                weight: 'bold',
                withHoverCard: !0,
                withLink: !0,
              }),
              o && s && u
                ? y.createElement(se.a, {
                    description: o,
                    entities: s,
                    style: [ue.profileInfoItemMargin, ue.description],
                    userId: u,
                    withheldDescription: m,
                    withheldEntities: v,
                  })
                : null,
              c && l
                ? y.createElement(ce.a, {
                    followersCount: c,
                    friendsCount: l,
                    screenName: h || '',
                    style: ue.profileInfoItemMargin,
                    withLink: !1,
                  })
                : null,
              p ? y.createElement(te.a, { joinDate: p }) : null,
            )
          })
        },
        pe = n('V/6K'),
        fe = n('cFyg'),
        he = (n('hBvt'), n('2G9S'), n('M+/F'), n('vrRf'), n('g54k')),
        me = n('aA19'),
        ve = n('aWyx'),
        ye = n('mN6z'),
        ge = n('MWbm'),
        be = n('t62R'),
        _e = n('jhWN'),
        Re = n('MAI/'),
        Oe = n('zQEV')
      function Ee(e) {
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
      var Se = function (e) {
          var t = e.children,
            n = e.link,
            r = e.style
          return y.createElement(be.b, { align: 'center', color: 'gray700', link: n, size: 'subtext2', style: r }, t)
        },
        we = (function (e) {
          u()(n, e)
          var t = Ee(n)
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
                  s = Object(Oe.a)(r, i, a, o)
                switch (i) {
                  case ve.b.CONVERSATION_AVATAR_UPDATE:
                    var c = n.avatar_image_https === r.conversation_avatar_image_https
                    return y.createElement(
                      y.Fragment,
                      null,
                      e._isValidImageSource(n.avatar_image_https) && c
                        ? y.createElement(
                            ge.a,
                            { style: Ce.conversationAvatarContainer },
                            y.createElement(me.a, { conversation: n, perspective: a }),
                          )
                        : null,
                      y.createElement(Se, null, s),
                    )
                  case ve.b.JOIN_CONVERSATION:
                    var l = e._getAddedYouMessageWithProfileInfo(s),
                      u = e._getParticipantsFromEntry(),
                      d = y.createElement(
                        be.b,
                        { align: 'center', color: 'gray700', size: 'subtext2' },
                        e._getParticipantsFromEntryText(u),
                      ),
                      p = e._getJoinConversationDetailsWithFacepile(u, d)
                    return y.createElement(y.Fragment, null, l, p)
                  default:
                    return y.createElement(Se, null, s)
                }
              }),
              v()(c()(e), '_getAddedYouMessageWithProfileInfo', function (t) {
                var n = e.props,
                  r = n.entry,
                  i = n.users,
                  a = r.sender_id ? i[r.sender_id] : void 0,
                  o = a ? { pathname: 'https://twitter.com/'.concat(a.screen_name) } : void 0
                return y.createElement(
                  ae.a,
                  { interactiveStyles: null, link: o, style: Ce.userAddedYouContainer },
                  a
                    ? y.createElement(_e.a, {
                        accessibilityLabel: a.screen_name,
                        screenName: a.screen_name,
                        size: 'medium',
                        uri: a.profile_image_url_https,
                        withHoverCard: !0,
                        withLink: !0,
                      })
                    : null,
                  y.createElement(Se, { link: o, style: Ce.userAddedYouText }, t),
                )
              }),
              v()(c()(e), '_getJoinConversationDetailsWithFacepile', function (t, n) {
                var r = e.props.conversation,
                  i = t.slice(0, 20).map(function (e) {
                    return e.profile_image_url_https
                  })
                return y.createElement(
                  ae.a,
                  {
                    interactiveStyles: null,
                    link: { pathname: '/messages/'.concat(r.conversation_id, '/participants') },
                    style: Ce.joinConversationDetails,
                  },
                  n,
                  y.createElement(Re.a, { style: Ce.userAvatarFacepile, userAvatarSize: 'xLarge', userAvatarUrls: i }),
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
                  return !Object(ye.a)(this.props, e)
                },
              },
              {
                key: 'render',
                value: function () {
                  return y.createElement(ge.a, { style: Ce.root }, this._renderContents())
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
                  return Object(Oe.b)(e.length, t)
                },
              },
            ]),
            n
          )
        })(y.Component),
        Ce = re.a.create(function (e) {
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
        xe = Object(he.a)(we),
        Ae = n('ddV6'),
        ke = n.n(Ae),
        Te = n('oQhu')
      var Ie = Object(Te.a)(function (e) {
          var t = re.a.theme.spacesPx.space40
          return {
            DMUserAvatarSizeType: 'xLarge',
            DMUserAvatarSizePx: t,
            DMUserAvatarSpacerPx: t + re.a.theme.spacesPx.space12,
          }
        }),
        Pe = n('shC7'),
        je = n('38/B'),
        Me = function (e) {
          return De(e, je.a.reducedMotionEnabled)
        },
        De = Object(Te.a)(function (e, t) {
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
              ((n = Ie(re.a.theme.scale)),
              (r = n.DMUserAvatarSizePx),
              (i = n.DMUserAvatarSpacerPx),
              (a = Ne[re.a.theme.scale]),
              (o = Be / a),
              (s = Fe / r),
              (l = Fe - (c = Fe / 2)),
              (u = Fe - c - i),
              {
                cssTransition: je.a.reducedMotionEnabled
                  ? {}
                  : { transition: 'transform '.concat(He, ', opacity ').concat(He) },
                messageContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (Pe.a.getConstants().isRTL ? 1 : -1) * l }] },
                    received: { transform: [{ translateX: (Pe.a.getConstants().isRTL ? -1 : 1) * u }] },
                  },
                },
                actionsContainer: {
                  base: { transform: [{ translateX: 0 }] },
                  active: {
                    sent: { transform: [{ translateX: (Pe.a.getConstants().isRTL ? 1 : -1) * Ue[re.a.theme.scale] }] },
                    received: {
                      transform: [
                        { translateX: (Pe.a.getConstants().isRTL ? -1 : 1) * (Ue[re.a.theme.scale] + u) - c },
                      ],
                    },
                  },
                },
                voiceMessage: {
                  container: { base: { height: a }, active: { height: Be } },
                  base: { height: a, transform: [{ scale: 1 }] },
                  active: {
                    base: { transform: [{ scale: o }] },
                    sent: {
                      paddingRight: c / o,
                      transformOrigin: Pe.a.getConstants().isRTL ? 'bottom left' : 'bottom right',
                    },
                    received: {
                      paddingLeft: c / o,
                      transformOrigin: Pe.a.getConstants().isRTL ? 'bottom right' : 'bottom left',
                    },
                  },
                },
                userAvatar: {
                  base: { transform: [{ scale: 1 }] },
                  sent: { transformOrigin: Pe.a.getConstants().isRTL ? 'bottom left' : 'bottom right' },
                  received: { transformOrigin: Pe.a.getConstants().isRTL ? 'bottom right' : 'bottom left' },
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
      var Le,
        Be = 60,
        Fe = Be,
        Ne = { xSmall: 42, small: 42, normal: 47, large: 47, xLarge: 47 },
        Ue = {
          xSmall: 72.26,
          small: 165.61 - 89.3,
          normal: 158.22 - 94.4,
          large: 166.64 - 100.58,
          xLarge: 181.55 - 111.81,
        },
        He = '0.2s 0s ease-in-out',
        We = n('+Kfv'),
        Ve = { scribeAction: b.c },
        ze = Object(S.createSelector)(
          function (e, t) {
            return k.e.select(e, t.senderId)
          },
          j.l,
          j.r,
          function (e, t, n) {
            return { user: e, displaySensitiveMedia: t, isDmNsfwMediaFilterEnabled: n }
          },
        ),
        qe = Object(T.g)(ze, Ve),
        Ge = {
          addToast: E.b,
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_OVERFLOW_ACTIONS',
          ),
          deleteEntry: _.deleteEntry,
        },
        Ke = Object(T.b)(Ge),
        Ye = n('k49u'),
        Qe = n('LVU8'),
        Xe = n('3XMw'),
        Je = n.n(Xe),
        Ze = Je.a.f58dff33,
        $e = Je.a.ad5a8e8e,
        et =
          ((Le = {}),
          v()(Le, Ye.a.MissingParameter, { toast: Object(Qe.a)(Ze) }),
          v()(Le, Ye.a.DirectMessageDestroyPermissionsError, { toast: { text: $e } }),
          v()(Le, 'showToast', !0),
          Le),
        tt = (n('jQ3i'), n('x4t0'), n('xCUF')),
        nt = n('uKEd'),
        rt = [],
        it = Object(S.createSelector)(
          function (e) {
            return Object(nt.l)(e).entries
          },
          function (e, t) {
            return Object(nt.p)(e, t.entry.id) || rt
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
        at = {
          createReaction: nt.d,
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS_POPOVER',
          ),
          fetchUpdatesIfNeeded: tt.d,
          removeReaction: nt.k,
        },
        ot = Object(T.g)(it, at),
        st = n('RhWx'),
        ct = n.n(st),
        lt = n('33Kz'),
        ut = n('wTX1'),
        dt = function (e) {
          var t = e.accessibilityLabelFormatter,
            n = e.count,
            r = e.emojiSize,
            i = e.emotion,
            a = e.enableHoverStyle,
            o = e.focusable,
            s = e.onPress,
            c = e.style,
            l = y.useContext($.a).featureSwitches,
            u = Object(lt.b)(i, l),
            d = t && u ? t({ emoji: u, count: n }) : void 0,
            p = ne.a.generate({ backgroundColor: re.a.theme.colors.gray50, color: re.a.theme.colors.gray700 })
          return y.createElement(
            ae.a,
            {
              accessibilityLabel: d,
              focusable: o,
              interactiveStyles: a ? p : null,
              onPress: s,
              style: [pt.container].concat(ct()(c || [])),
            },
            y.createElement(be.b, { size: r, style: pt.unsetLineHeight }, u),
            n
              ? y.createElement(ut.a, { color: 'gray700', containerStyle: pt.count, count: n, size: 'subtext3' }, n)
              : null,
          )
        },
        pt = re.a.create(function (e) {
          return {
            container: { flexDirection: 'row' },
            count: { alignSelf: 'center', minWidth: e.spaces.space16, paddingLeft: e.spaces.space2 },
            unsetLineHeight: { lineHeight: 'unset' },
          }
        }),
        ft = n('pHkl'),
        ht = n('Irs7')
      function mt(e) {
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
      var vt = Je.a.ca7a2214,
        yt = Je.a.fc0e94b7,
        gt = (function (e) {
          u()(n, e)
          var t = mt(n)
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
                    conversation_type: o ? ft.g.GROUP : ft.g.ONE_TO_ONE,
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
                    n = Object(lt.a)(this.context.featureSwitches).map(function (n) {
                      var r = t.includes(n)
                      return y.createElement(dt, {
                        accessibilityLabelFormatter: r ? vt : yt,
                        emojiSize: 'title4',
                        emotion: n,
                        enableHoverStyle: !0,
                        focusable: !0,
                        key: n,
                        onPress: e._reactionClickHandler(n, r),
                        style: [_t.reaction, r && _t.selectedReaction],
                      })
                    })
                  return y.createElement(ge.a, { style: _t.reactions }, n)
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(gt, 'contextType', $.a)
      var bt = Object(ht.a)(ot(gt)),
        _t = re.a.create(function (e) {
          return {
            reactions: { cursor: 'pointer', flexDirection: 'row', padding: e.spaces.space12 },
            reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 },
            selectedReaction: { backgroundColor: e.colors.gray50 },
          }
        }),
        Rt = n('OiMc')
      function Ot(e) {
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
      var Et = (function (e) {
        u()(n, e)
        var t = Ot(n)
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
              return y.createElement(bt, { dismiss: t, entry: r, isGroupDM: i, participantsCount: a, perspective: o })
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
                return y.createElement(
                  Rt.a,
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
      })(y.Component)
      v()(Et, 'contextType', pe.a)
      var St = n('fz3c'),
        wt = n('TnY3'),
        Ct = n('mjJ+'),
        xt = n('Q0VY'),
        At = n('eb3s'),
        kt = n('/yvb'),
        Tt = n('ZToW'),
        It = n('CaKu'),
        Pt = n('i4Oy'),
        jt = (n('hBpG'), n('tVqn'), n('tQbP'), n('4w6w')),
        Mt = function (e, t) {
          if (null == e) return !1
          var n = t || [0, 0],
            r = ke()(n, 2),
            i = r[0],
            a = r[1]
          return !((0 === i || 1 === i) && e.length === a)
        },
        Dt = function (e) {
          var t = e.message_data
          if (!t) return !1
          var n = t.attachment
          if (!n) return !0
          if (n.sticker) return !1
          var r = n.tweet || n.photo || n.animated_gif || n.video || void 0
          if (r) return Mt(t.text, r.indices)
          if (n.card) {
            var i,
              a = ((null === (i = t.entities) || void 0 === i ? void 0 : i.urls) || []).find(function (e) {
                return e.url === n.card
              })
            return Mt(t.text, a && a.indices)
          }
          return !0
        },
        Lt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !(n.card || n.tweet || n.photo || n.animated_gif || n.video))
        },
        Bt = function (e) {
          var t,
            n = null == e || null === (t = e.message_data) || void 0 === t ? void 0 : t.attachment
          return !(!n || !n.fleet)
        },
        Ft = function (e, t, n) {
          var r = 1.25 * re.a.theme.fontSizesPx.body
          return {
            compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t,
            isTextSquared: void 0 !== t && void 0 !== n && (n === t || n <= t - r),
            isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - r),
          }
        },
        Nt = n('hiGS'),
        Ut = n('zIWA'),
        Ht = n('Lsrn'),
        Wt = n('k/Ka')
      function Vt(e, t) {
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
      function zt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Vt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Vt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var qt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Wt.a)(
          'svg',
          zt(
            zt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Ht.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          y.createElement(
            'g',
            null,
            y.createElement('path', {
              d: 'M16.925 9.5H14.5V7.075c0-.414-.336-.75-.75-.75s-.75.336-.75.75V9.5h-2.425c-.414 0-.75.336-.75.75s.336.75.75.75H13v2.425c0 .414.336.75.75.75s.75-.336.75-.75V11h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-.3 11H4.25c-.413 0-.75-.337-.75-.75V8.402c0-.414-.336-.75-.75-.75s-.75.336-.75.75V19.75C2 20.99 3.01 22 4.25 22h12.375c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z',
            }),
            y.createElement('path', {
              d: 'M19.75 2h-12C6.51 2 5.5 3.01 5.5 4.25v12c0 1.24 1.01 2.25 2.25 2.25h12c1.24 0 2.25-1.01 2.25-2.25v-12C22 3.01 20.99 2 19.75 2zm.75 14.25c0 .413-.337.75-.75.75h-12c-.413 0-.75-.337-.75-.75v-12c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v12z',
            }),
          ),
        )
      }
      qt.metadata = { width: 24, height: 24 }
      var Gt = qt,
        Kt = n('DlVf'),
        Yt = n('ACHU'),
        Qt = n('UgB4')
      function Xt(e, t) {
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
      function Jt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xt(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Zt(e) {
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
      var $t = Je.a.ba60339a,
        en = Je.a.j4bfee22,
        tn = Je.a.d96cf7cd,
        nn = Je.a.faddd3a2,
        rn = Je.a.eb497e08,
        an = Je.a.b170974a,
        on = Je.a.i202bd22,
        sn = Je.a.f2e5491a,
        cn = Je.a.f88553c8,
        ln = Je.a.ifea3114,
        un = Je.a.cac14829,
        dn = Je.a.h63a5c3b,
        pn = (function (e) {
          u()(n, e)
          var t = Zt(n)
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
                  s = [{ text: $t, Icon: Nt.a, isEmphasized: !0, onClick: a._handleShowDeleteConfirmation(e) }]
                return (
                  i ||
                    s.push({
                      text: on,
                      Icon: Ut.a,
                      link: {
                        pathname: '/i/report/'.concat(St.a.DMMessage, '/').concat(r.id),
                        state: {
                          clientReferer: window.location.pathname,
                          conversationId: r.conversation_id,
                          scribeNamespace: o,
                        },
                      },
                      onClick: a.props.onReportMessage,
                    }),
                  It.a.isAvailable() && s.push({ text: sn, Icon: Gt, onClick: a._handleCopyMessageText }),
                  y.createElement(Ct.a, {
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
                n && (It.a.setString(n), t({ text: cn })), e && e()
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
                    state: { tweetAttachment: Jt(Jt({}, o), {}, { id_str: o.status }) },
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
                  r({ conversationId: i.conversation_id, id: i.id }).catch(n(et))
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
                  xt.a.tweetTextParts(n, [0, n.length], t).forEach(function (e) {
                    'url' === e.entityType && (n = n.replace(e.url, e.expandedUrl))
                  }),
                  n
                )
              }),
              (a.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
              (a._hasMedia = Lt(a.props.entry)),
              (a._isNarrow = Pt.a.get('screen').width < re.a.theme.breakpoints.xSmall),
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
                  return y.createElement(
                    ge.a,
                    {
                      pointerEvents: c ? 'auto' : 'none',
                      style: [
                        hn.messageActions,
                        i ? hn.messageActionsLeft : hn.messageActionsRight,
                        c ? hn.visible : hn.invisible,
                        s && hn.vdlMessageActions,
                        this._isNarrow && (this._hasMedia ? hn.messageActionsMediaNarrow : hn.messageActionsNarrow),
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
                    ? y.createElement(At.a, {
                        confirmButtonLabel: tn,
                        confirmButtonType: 'destructiveFilled',
                        headline: en,
                        onCancel: this._handleHideDeleteConfirmation,
                        onConfirm: this._handleDelete,
                        text: nn,
                      })
                    : null
                },
              },
              {
                key: '_renderForwardButton',
                value: function () {
                  return y.createElement(kt.a, {
                    accessibilityLabel: ln,
                    hoverLabel: { label: ln },
                    icon: mn,
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
                    s = y.createElement(Kt.a, { style: a ? hn.vdlActionIcon : hn.actionIcon })
                  return y.createElement(
                    Et,
                    {
                      entry: t,
                      isGroupDM: n,
                      onDismiss: this._handleHideActionsAndMenus(),
                      participantsCount: r,
                      perspective: i,
                    },
                    y.createElement(kt.a, {
                      accessibilityExpanded: !!o,
                      accessibilityHasPopup: 'menu',
                      accessibilityLabel: an,
                      hoverLabel: { label: un },
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
                    t = y.createElement(Yt.a, { style: e ? hn.vdlActionIcon : hn.actionIcon })
                  return y.createElement(kt.a, {
                    accessibilityLabel: rn,
                    hoverLabel: { label: dn },
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
                    s = ((e = this.props.entry), !Dt(e) && Lt(e) && !Tt.a.isEnabled)
                  return !a && (s || (n && !Tt.a.isEnabled) || r || i || o)
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(pn, 'contextType', pe.a)
      var fn = Object(wt.a)(Object(ht.a)(Ke(pn))),
        hn = re.a.create(function (e) {
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
        mn = y.createElement(Qt.a, { style: hn.vdlActionIcon }),
        vn = n('97Jx'),
        yn = n.n(vn),
        gn = (n('6U7i'), n('rxPX')),
        bn = Object(gn.a)()
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
                'DIRECT_MESSAGES_CONVERSATION',
              ),
              removeEntry: _.removeEntry,
              sendMessage: R.m,
            }
          })
          .withAnalytics(),
        _n = '87.5%',
        Rn = (n('hCOa'), n('87if'), n('dlmX'), n('m9LP'), n('wrlS')),
        On = [],
        En = function (e, t) {
          return Object(nt.p)(e, t.entryId) || On
        },
        Sn = function (e) {
          return Object(nt.l)(e).entries
        },
        wn = {
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTIONS',
          ),
        },
        Cn = Object(T.e)(function () {
          return Object(S.createSelector)(Sn, En, O.q, Rn.d, function (e, t, n, r) {
            var i,
              a = Object(lt.a)(r, { includeInactive: !0 }),
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
        }, wn),
        xn = (n('vfdX'), n('Ee2X'), []),
        An = function (e, t) {
          return t.entryId
        },
        kn = function (e) {
          return Object(nt.l)(e).entries
        },
        Tn = function (e, t) {
          return Object(nt.p)(e, An(0, t)) || xn
        },
        In = function (e, t) {
          return k.e.selectMany(
            e,
            (function (e, t) {
              return Object(nt.q)(e, An(0, t))
            })(e, t),
          )
        },
        Pn = {
          removeReaction: nt.k,
          fetchUpdatesIfNeeded: tt.d,
          createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
            'DIRECT_MESSAGES_REACTION_SUMMARY_CONTEXT',
          ),
        },
        jn = Object(T.e)(function () {
          return Object(S.createSelector)(kn, Tn, O.q, In, Rn.d, function (e, t, n, r, i) {
            var a = Object(lt.a)(i, { includeInactive: !0 }),
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
            return s > -1 && o.push.apply(o, ct()(o.splice(0, s))), { loggedInUserId: n, usersWithReactions: o }
          })
        }, Pn),
        Mn = n('TIdA'),
        Dn = n('htQn'),
        Ln = Je.a.gf5e9ea6,
        Bn = Je.a.a2d48778,
        Fn = Mn.a.createLayoutCache()
      var Nn = re.a.create(function (e) {
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
        Un = function (e) {
          var t = y.useContext($.a).featureSwitches,
            n = e.onUndoPress,
            r = e.renderUndo,
            i = e.user,
            a = e.withBottomBorder,
            o = i.avatarUri,
            s = i.isProtected,
            c = i.isVerified,
            l = i.name,
            u = i.screenName,
            d = y.useMemo(
              function () {
                return function (e) {
                  e.stopPropagation(), n()
                }
              },
              [n],
            ),
            p = y.createElement(_e.a, { imageLayoutCache: Fn, screenName: u, size: 'xxLarge', uri: o }),
            f = y.createElement(dt, { emojiSize: 'title4', emotion: i.reactionKey, focusable: !1 }),
            h = y.createElement(oe.a, {
              badgeContext: 'content',
              isProtected: s,
              isVerified: c,
              name: l,
              screenName: u,
              withHoverCard: !0,
              withStackedLayout: !0,
            })
          return y.createElement(
            Dn.a,
            { link: { pathname: '/'.concat(u), anchorless: !0 }, style: [Nn.root, a && Nn.bottomBorder] },
            y.createElement(ge.a, { style: Nn.reactionColumn }, f),
            y.createElement(ge.a, { style: Nn.column }, p),
            y.createElement(ge.a, { style: Nn.bodyColumn }, y.createElement(ge.a, { style: Nn.body }, h)),
            r
              ? y.createElement(
                  ge.a,
                  { style: Nn.column },
                  y.createElement(
                    kt.a,
                    {
                      accessibilityLabel: Bn({ emoji: Object(lt.b)(i.reactionKey, t) }),
                      onClick: d,
                      size: 'small',
                      type: 'brandText',
                    },
                    Ln,
                  ),
                )
              : null,
          )
        },
        Hn = n('xKuM'),
        Wn = n('efqG')
      function Vn(e) {
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
      var zn = Je.a.b772cd65,
        qn = Je.a.c0098d49,
        Gn = Je.a.j85999eb,
        Kn = (function (e) {
          u()(n, e)
          var t = Vn(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(c()(e), '_renderContent', function (t, n) {
                return y.createElement(
                  ge.a,
                  null,
                  e._renderHeader(t, n),
                  e._renderUsers(t, n),
                  e._renderDoneButton(t, n),
                )
              }),
              v()(c()(e), '_renderHeader', function (e, t) {
                return 'sheet' === t
                  ? y.createElement(Hn.a, { title: qn, withBottomBorder: !0 })
                  : y.createElement(be.b, { visuallyHidden: !0 }, qn)
              }),
              v()(c()(e), '_renderUsers', function (t, n) {
                return y.createElement(
                  ge.a,
                  { accessibilityLabel: Gn, style: [Yn.container, 'sheet' === n ? Yn.sheet : Yn.popover] },
                  e._renderUserCells(t),
                )
              }),
              v()(c()(e), '_renderDoneButton', function (e, t) {
                return (
                  'sheet' === t &&
                  y.createElement(
                    kt.a,
                    { key: 'button_done', onPress: e, style: Yn.cancelButton, type: 'primaryOutlined' },
                    zn,
                  )
                )
              }),
              v()(c()(e), '_renderUserCells', function (t) {
                return e.props.usersWithReactions.filter(Boolean).map(function (n, r) {
                  return y.createElement(Un, {
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
                  return y.createElement(
                    Wn.a,
                    { renderContent: this._renderContent, withFixedPosition: this.context.isDrawer },
                    e,
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(Kn, 'contextType', pe.a)
      var Yn = re.a.create(function (e) {
          return {
            cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 },
            container: { overflowY: 'auto', paddingVertical: e.spaces.space12 },
            popover: { maxHeight: '35vh', minWidth: '320px' },
            sheet: { maxHeight: '65vh' },
          }
        }),
        Qn = Object(wt.a)(Object(ht.a)(jn(Kn)))
      function Xn(e, t) {
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
      function Jn(e) {
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
      var Zn = Je.a.h95f9e76,
        $n = (function (e) {
          u()(n, e)
          var t = Jn(n)
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
                  var r = ke()(e, 2),
                    i = r[0],
                    c = r[1]
                  return y.createElement(dt, {
                    count: c,
                    emojiSize: o,
                    emotion: i,
                    enableHoverStyle: !1,
                    focusable: !0,
                    key: i,
                    style: [
                      n === s && er.rightPadding,
                      er.elementPadding,
                      a === i ? er.selfSelect : null,
                      t && er.isHoveredDMReaction,
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
                  var s = ne.a.generate({
                      backgroundColor: re.a.theme.colors.gray50,
                      color: re.a.theme.colors.gray700,
                    }),
                    c = Zn({ reactionCount: a })
                  return y.createElement(
                    ge.a,
                    {
                      style: [
                        er.container,
                        r ? er.marginShort : er.marginLong,
                        i ? er.alignRight : er.alignLeft,
                        o ? er.visible : er.invisible,
                      ],
                    },
                    y.createElement(
                      Qn,
                      { conversationId: t, entryId: n },
                      y.createElement(
                        ae.a,
                        {
                          accessibilityLabel: c,
                          focusable: !0,
                          interactiveStyles: s,
                          onPress: this._handleScribeDMReactionSummary,
                          ref: this._onSetReactionsNode,
                          style: er.content,
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
                          ? Xn(Object(n), !0).forEach(function (t) {
                              v()(e, t, n[t])
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                          : Xn(Object(n)).forEach(function (t) {
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
        })(y.PureComponent),
        er = re.a.create(function (e) {
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
            selfSelect: { borderColor: re.a.theme.colors.gray50, borderRadius: e.borderRadii.infinite },
            alignLeft: { alignSelf: 'flex-start' },
            alignRight: { alignSelf: 'flex-end' },
            invisible: { opacity: 0 },
            visible: { opacity: 1 },
            marginShort: { marginBottom: e.spaces.space4 },
            marginLong: { marginBottom: e.spaces.space12 },
            isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: 'pointer' },
          }
        }),
        tr = Object(ht.a)(Cn($n)),
        nr = n('Xrkv')
      function rr(e) {
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
      var ir = Je.a.icd0bf34,
        ar = Je.a.e8bd8fec,
        or = Je.a.b2d32fad,
        sr = Je.a.a763d33e,
        cr = (function (e) {
          u()(n, e)
          var t = rr(n)
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
                  return y.createElement(
                    ge.a,
                    { style: lr.root },
                    y.createElement(
                      be.b,
                      { align: 'right', color: 'gray700', size: 'subtext2', style: lr.seenLabel },
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
                  return n ? (t ? or : ir) : r.length ? sr({ count: r.length }) : ar
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
                      return y.createElement(
                        Je.a.I18NFormatMessage,
                        { $i18n: 'f6464106' },
                        y.createElement(be.b, null, n),
                        y.createElement(
                          be.b,
                          { color: 'link', onPress: e._handlePress },
                          Je.a.d7a0722f({ othersCount: r }),
                        ),
                      )
                    }
                  n && (t = t.slice(0, 10))
                  var a = Object(nr.a)(t, n)
                  return y.createElement(
                    be.b,
                    { align: 'right', color: 'gray700', size: 'subtext2', style: lr.namesList },
                    n ? y.createElement(i, { namesList: a, othersCount: r }) : y.createElement(be.b, null, a),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent),
        lr = re.a.create(function (e) {
          return {
            root: { alignItems: 'flex-end', width: 'calc(100% - '.concat(e.spaces.space2, ')') },
            seenLabel: { cursor: 'pointer' },
            namesList: { marginBottom: e.spaces.space2, whiteSpace: 'pre-line' },
          }
        }),
        ur = cr,
        dr = n('t0aI'),
        pr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user,
            i = Object.keys(n),
            a = fr({ entryId: t, participants: n, user: r })
          return { namesToDisplay: a, isSeenByEveryone: a.length === i.length - 1 }
        },
        fr = function (e) {
          var t = e.entryId,
            n = e.participants,
            r = e.user
          return Object.keys(n).reduce(function (e, i) {
            var a = n[i],
              o = a.join_conversation_event_id,
              s = a.last_read_event_id,
              c = a.user.name,
              l = i !== r.id_str,
              u = s && 1 !== Object(dr.a)(t, s),
              d = !o || 1 !== Object(dr.a)(o, t)
            return l && u && d && e.push(c), e
          }, [])
        },
        hr = n('IMYl'),
        mr = n('21zW'),
        vr = n('gmpV')
      function yr(e) {
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
      var gr = Je.a.fad48ee9,
        br = Je.a.ba60339a,
        _r = Je.a.d338f53e,
        Rr = Je.a.ae7d7a24,
        Or = Je.a.d725a288,
        Er = Je.a.bbe74f3f,
        Sr = Je.a.h0e4cdf4,
        wr = Je.a.bfbc051c,
        Cr = (function (e) {
          u()(n, e)
          var t = yr(n)
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
                    y.createElement(
                      ge.a,
                      { style: [xr.root, d && xr.vdlRootMargin, t && xr.sentMessage] },
                      r,
                      i,
                      c,
                      l
                        ? y.createElement(
                            ae.a,
                            { interactiveStyles: null, onPress: n, style: t && xr.sentContainer },
                            y.createElement(ge.a, { style: t && xr.groupedItems }, a, s),
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
                    y.createElement(
                      ge.a,
                      null,
                      y.createElement(be.b, { align: 'right', color: 'gray700', size: 'subtext2' }, Rr),
                      y.createElement(
                        ge.a,
                        { style: xr.groupedItems },
                        y.createElement(
                          be.b,
                          {
                            accessibilityRole: 'button',
                            color: 'magenta500',
                            onPress: this._handleRemove,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          br,
                        ),
                        y.createElement(mr.a, null),
                        y.createElement(
                          be.b,
                          {
                            accessibilityRole: 'button',
                            color: 'primary',
                            onPress: this._handleTryAgain,
                            size: 'subtext2',
                            withInteractiveStyling: !0,
                          },
                          _r,
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
                    ? y.createElement(
                        ge.a,
                        { style: o && xr.footerPadderWithAvatar },
                        y.createElement(tr, { conversationId: t, entryId: n, isEndOfDM: s, isSent: a }),
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
                    ? y.createElement(ur, yn()({ isGroupDM: a }, pr({ entryId: t, participants: s, user: c })))
                    : null
                },
              },
              {
                key: '_renderSending',
                value: function () {
                  var e = this.props,
                    t = e.isDraft,
                    n = e.isError
                  return t && !n && y.createElement(be.b, { align: 'right', color: 'gray700', size: 'subtext2' }, gr)
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
                    l = pr({ entryId: t, participants: s, user: c }).isSeenByEveryone
                  return !o || n || r || (a && !i)
                    ? null
                    : y.createElement(
                        be.b,
                        { color: l ? 'primary' : 'gray700', style: xr.checkmarkContainer },
                        y.createElement(hr.a, { style: xr.checkmark }),
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
                  u = Object(vr.c)(d) ? Or(d) : Object(vr.d)(d) ? Er({ time: Or(d) }) : Object(vr.e)(d) ? Sr(d) : wr(d)
                  var p = i && !s,
                    f = s ? 'right' : 'left'
                  return y.createElement(
                    ge.a,
                    { style: [l && xr.footerPadderWithAvatar, s && xr.timestamp] },
                    y.createElement(
                      be.b,
                      { align: f, color: 'gray700', size: 'subtext2', withInteractiveStyling: s || !Tt.a.isEnabled },
                      p &&
                        y.createElement(Je.a.I18NFormatMessage, { $i18n: 'c8b914d4' }, y.createElement(be.b, null, c)),
                      p && ' ',
                      u,
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(Cr, 'contextType', $.a)
      var xr = re.a.create(function (e) {
          return {
            root: { marginTop: e.spaces.space2, overflow: 'hidden', width: _n },
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
        Ar = bn(Cr),
        kr = n('jtO7'),
        Tr = re.a.create(function (e) {
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
              Tr.root,
              n && Tr.isLast,
              n && r && Tr.sentLast,
              n && !r && Tr.receivedLast,
              t && r && Tr.insideTopRoundedSent,
              t && !r && Tr.insideTopRoundedReceived,
              o && r && Tr.outsideTopRoundedSent,
              o && !r && Tr.outsideTopRoundedReceived,
            ]
          return y.createElement(
            ge.a,
            { style: c },
            y.createElement(kr.a, { align: 'center', color: 'primary', label: i, link: s, onClick: a }),
          )
        },
        Pr = n('fs1G')
      function jr(e) {
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
      var Mr = (function (e) {
        u()(n, e)
        var t = jr(n)
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
                    return y.createElement(Ir, {
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
                return y.createElement(ge.a, null, o)
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(Mr, 'defaultProps', { onCtaClick: Pr.a, onImpression: Pr.a })
      var Dr = Mr,
        Lr = (n('1IsZ'), n('vjRr')),
        Br = n('EGrD'),
        Fr = function (e, t) {
          return Lr.a.createManyHydratedSelector([t.cardUrl])(e)[0]
        },
        Nr = Object(gn.a)()
          .propsFromState(function () {
            return { adFreeArticleDomains: Br.c, card: Fr }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)('DM_CARD_MESSAGE'),
              fetchAdFreeToken: Br.a,
              loadAdFreeArticleDomainsFromPersistence: Br.b,
              popOutConversation: _.popOutConversation,
            }
          }),
        Ur = re.a.create(function (e) {
          return { root: { width: '100%' }, invisible: { opacity: 0 }, visible: { opacity: 1 } }
        }),
        Hr = function (e) {
          var t = e.attachmentContent,
            n = e.attachmentHeader,
            r = e.isVisible,
            i = void 0 === r || r,
            a = e.textContent
          return y.createElement(ge.a, { style: [i ? Ur.visible : Ur.invisible, Ur.root] }, n, t, a)
        },
        Wr = n('cTG8'),
        Vr = function (e) {
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
            g = e.withMessageBubble,
            b = y.useContext($.a).featureSwitches,
            _ = b.isTrue('dm_vdl_enabled') && b.isTrue('dm_vdl_chat_p0_enabled'),
            R = [
              f,
              g && zr.messageTextContainer,
              g && l && zr.sent,
              g && !l && zr.received,
              i && zr.failedDraft,
              c && !o && !l && zr.rapidFireReceived,
              c && !o && l && zr.rapidFireSent,
              u && l && zr.hasAssociatedAttachmentSent,
              u && !l && zr.hasAssociatedAttachmentReceived,
              g && _ && l && zr.vdlSent,
              g && r && l && zr.activeSent,
              g && _ && r && l && zr.vdlActiveSent,
              g && r && !l && !Tt.a.isEnabled && zr.activeReceived,
              m && zr.withCta,
            ],
            O = [zr.tweetText, g && zr.textAlignLeft, !g && l && zr.textAlignRight],
            E = re.a.theme.colors,
            S = E.gray0,
            w = E.magenta500,
            C = E.primary,
            x = E.text,
            A = E.white,
            k = ne.a.generate({ color: l ? A : x, backgroundColor: i ? w : l ? C : S }),
            T = (p.text && p.text.length) || 0
          return y.createElement(
            ae.a,
            { accessibilityRole: 'none', interactive: l, interactiveStyles: g ? k : null, style: R },
            y.createElement(Wr.a, {
              color: re.a.isDarkMode() || l ? 'whiteOnColor' : void 0,
              displayTextRange: [0, T],
              entities: p.entities,
              excludeCardUrl: t,
              linkColor: (g && l) || re.a.isDarkMode() ? 'whiteOnColor' : 'link',
              linkify: !0,
              quotedTweetId: h,
              size: g ? void 0 : 'title2',
              style: O,
              text: p.text || '',
              underlineLinks: !0,
              withMediaLinks: v,
            }),
          )
        },
        zr = re.a.create(function (e) {
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
      Vr.defaultProps = { withMediaLinks: !1 }
      var qr = Vr,
        Gr = function (e) {
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
          return y.createElement(qr, {
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
        Kr = n('LSr9'),
        Yr = n('aX4+'),
        Qr = n('/Ikv')
      function Xr(e) {
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
      var Jr = Qr.a.CardNames,
        Zr = (function (e) {
          u()(n, e)
          var t = Xr(n)
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
                    u = new Kr.a(l, c()).getAdFreeArticlesClickHandler({
                      destinationUrl: Qr.a.getBindingValue(n, 'card_url'),
                      linkDomain: Qr.a.getBindingValue(n, 'domain'),
                      adFreeArticleDomains: s,
                    }),
                    d = ke()(u, 2),
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
                    h = !!Object.values(Jr).includes(t.name),
                    m = Ft(n, p, f),
                    v = m.isAttachmentSquared ? 'both' : s ? 'right' : 'left',
                    g = y.createElement(
                      ge.a,
                      { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout },
                      y.createElement(Yr.a, {
                        card: { name: t.name, url: t.url, binding_values: t.binding_values, users: t.users },
                        cardContext: { tweetUserId: c.sender_id },
                        dmSentOrReceived: s ? 'sent' : 'received',
                        withSquareBottomBorderRadius: v,
                      }),
                    ),
                    b = n
                      ? y.createElement(
                          ge.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? $r.sentMessageWrapper : $r.receivedMessageWrapper,
                          },
                          y.createElement(qr, {
                            excludeCardUrl: t.url,
                            hasAssociatedAttachment: !0,
                            isActive: r,
                            isFailedDraft: i,
                            isFirstRapidFire: a,
                            isRapidFire: o,
                            isSent: s,
                            messageData: c,
                            rootStyle: m.isTextSquared ? (s ? $r.textSentSquared : $r.textReceivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return h
                    ? y.createElement(Hr, { attachmentContent: g, isVisible: m.compositeRendered, textContent: b })
                    : y.createElement(Gr, {
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
        })(y.Component)
      v()(Zr, 'defaultProps', { hasUserText: !1 }), v()(Zr, 'contextType', $.a)
      var $r = re.a.create(function (e) {
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
        ei = Nr(Zr)
      function ti(e) {
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
      var ni = Je.a.f720438f,
        ri = (function (e) {
          u()(n, e)
          var t = ti(n)
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
                return t ? (r = 'both') : n && (r = 'right'), ii[r]
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
                  var f = Ft(t, d, p),
                    h = f.compositeRendered,
                    m = f.isAttachmentSquared,
                    v = f.isTextSquared,
                    g = [
                      ai.tombstoneWrapper,
                      o ? ai.sentMessageWrapper : ai.receivedMessageWrapper,
                      this._getSquareBottomStyles(m),
                    ],
                    b = y.createElement(
                      ge.a,
                      { onLayout: this._handleAttachmentLayout, style: g },
                      y.createElement(be.b, { color: 'gray700' }, ni),
                    ),
                    _ = t
                      ? y.createElement(
                          ge.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: [
                              o ? ai.sentMessageWrapper : ai.receivedMessageWrapper,
                              !l && ai.fleetReactionSpacing,
                            ],
                          },
                          y.createElement(qr, {
                            hasAssociatedAttachment: !0,
                            isActive: n,
                            isFailedDraft: r,
                            isFirstRapidFire: i,
                            isRapidFire: a,
                            isSent: o,
                            messageData: s,
                            rootStyle: v ? (o ? ai.sentSquared : ai.receivedSquared) : void 0,
                            withCta: c,
                            withMessageBubble: l,
                          }),
                        )
                      : null
                  return y.createElement(Hr, { attachmentContent: b, isVisible: h, textContent: _ })
                },
              },
            ]),
            n
          )
        })(y.Component),
        ii = re.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        ai = re.a.create(function (e) {
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
        oi = ri,
        si = n('prG5'),
        ci = n('RCZO'),
        li = n('A91F'),
        ui = Je.a.b327c129,
        di = function (e) {
          e.stopPropagation()
        },
        pi = function (e) {
          var t = e.media,
            n = e.mediaUrl,
            r = t.ext_alt_text || ui,
            i = t.media_url_https,
            a = t.original_info || {},
            o = a.height,
            s = a.width,
            c = Object(ci.b)(t).rgb,
            l = y.createElement(si.a, {
              accessibilityLabel: r,
              aspectMode: li.a.withinRange(9 / 16, 10),
              backgroundColor: c,
              image: { url: i, width: s, height: o },
              shouldShowAltLabel: !!t.ext_alt_text,
            })
          return n ? y.createElement(ae.a, { interactiveStyles: null, link: n, onPress: di }, l) : l
        },
        fi = n('Modb'),
        hi = n('lklz'),
        mi = n('XrEN'),
        vi = n('ZvMt'),
        yi = function (e) {
          var t = e.media,
            n = e.messageId,
            r = t && mi.a.extractVideoProps(hi.b.forDm(n), t)
          return r
            ? y.createElement(
                fi.a,
                yn()({}, r, { aspectRatio: vi.a.getAspectRatio(t.video_info), withPostPlayback: !0 }),
              )
            : null
        },
        gi = Object(gn.a)().withAnalytics()
      function bi(e) {
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
      var _i = (function (e) {
        u()(n, e)
        var t = bi(n)
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
                  s = a.width < re.a.theme.breakpoints.micro
                return o
                  ? y.createElement(
                      ge.a,
                      {
                        focusable: !0,
                        onLayout: this._handleLayout,
                        style: [
                          Oi.root,
                          s ? { flexDirection: 'column' } : { flexDirection: 'row', alignItems: 'center' },
                          i && Ri[i],
                        ],
                      },
                      y.createElement(ge.a, { style: Oi.description }, y.createElement(be.b, null, r)),
                      y.createElement(
                        ge.a,
                        { style: [Oi.button, s ? Oi.breakButtonWrapper : void 0] },
                        y.createElement(
                          kt.a,
                          { onClick: this._handleClick, size: 'small', style: Oi.buttonElement, type: 'brandText' },
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
      })(y.PureComponent)
      v()(_i, 'defaultProps', { isSensitive: !1 })
      var Ri = re.a.create(function (e) {
          return {
            both: { borderBottomRightRadius: e.borderRadii.none, borderBottomLeftRadius: e.borderRadii.none },
            left: { borderBottomLeftRadius: e.borderRadii.none },
            right: { borderBottomRightRadius: e.borderRadii.none },
          }
        }),
        Oi = re.a.create(function (e) {
          return {
            breakButtonWrapper: {
              marginTop: re.a.theme.spaces.space4,
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
        Ei = Object(ht.a)(gi(_i)),
        Si = n('CoGJ')
      function wi(e, t) {
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
      function Ci(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wi(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : wi(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function xi(e) {
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
      var Ai = y.createElement(Si.a, null),
        ki = Je.a.d9de7b57,
        Ti = Je.a.f2879f4d,
        Ii = Je.a.b518221e,
        Pi = Je.a.eeaa9f90,
        ji = Je.a.g2b43663,
        Mi = Je.a.f277e949,
        Di = (function (e) {
          u()(n, e)
          var t = xi(n)
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
                  v = Ft(a, p, f),
                  g = [
                    Li.mediaAttachment,
                    c && Li.isSent,
                    !c && Li.received,
                    c && v.isAttachmentSquared && Li.equalComponentDimensionsSent,
                    !c && v.isAttachmentSquared && Li.equalComponentDimensionsReceived,
                    s && !o && c && Li.rapidFireSent,
                    s && !o && !c && Li.rapidFireReceived,
                  ],
                  b = null
                if (
                  (!m && i.conversation_id && (b = '/messages/'.concat(i.conversation_id, '/media/').concat(i.id)), h)
                )
                  if (h.photo) (t = h.photo), (n = y.createElement(pi, { media: t, mediaUrl: b }))
                  else if (h.animated_gif)
                    (t = h.animated_gif), (n = y.createElement(yi, { media: t, messageId: i.id }))
                  else if (h.video) {
                    if (((t = h.video), Object(I.k)(h, e.context.featureSwitches)))
                      throw new Error('DMMediaMessage should not be used to render voice messages')
                    n = y.createElement(yi, { media: t, messageId: i.id })
                  }
                var _ = v.isAttachmentSquared ? 'both' : c ? 'right' : 'left',
                  R = t && n && (c ? n : e._getMediaContentWithGuard(t, l, n, _))
                return {
                  attachmentContent: y.createElement(ge.a, { onLayout: e._handleAttachmentLayout, style: g }, R),
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
                    m = Ft(n, p, f),
                    v = this._renderAttachment(),
                    g = v.attachmentContent,
                    b = v.media,
                    _ = n
                      ? y.createElement(
                          ge.a,
                          {
                            onLayout: this._handleTextContentLayout,
                            style: s ? Li.sentMessageWrapper : Li.receivedMessageWrapper,
                          },
                          y.createElement(qr, {
                            hasAssociatedAttachment: !0,
                            isActive: !!r,
                            isFailedDraft: i,
                            isFirstRapidFire: !!a,
                            isRapidFire: !!o,
                            isSent: s,
                            messageData: h ? c : this._parseMessageData(c, b),
                            rootStyle: m.isTextSquared ? (s ? Li.sentSquared : Li.receivedSquared) : void 0,
                            withCta: l,
                            withMessageBubble: u,
                          }),
                        )
                      : null
                  return y.createElement(Hr, { attachmentContent: g, isVisible: m.compositeRendered, textContent: _ })
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
                      var s = ('animated_gif' === e.type && ji) || ('video' === e.type && Pi) || Ii
                      return y.createElement(
                        Ei,
                        {
                          contentType: e.type,
                          ctaText: s,
                          description: Ti,
                          isSensitive: !0,
                          withSquareBottomBorderRadius: r,
                        },
                        n,
                      )
                    }
                  } else if (!a && e.possibly_sensitive)
                    return y.createElement(
                      Ei,
                      {
                        contentType: e.type,
                        ctaText: Mi,
                        description: Ai,
                        isSensitive: !0,
                        withSquareBottomBorderRadius: r,
                      },
                      n,
                    )
                  return t
                    ? n
                    : y.createElement(
                        Ei,
                        { contentType: e.type, ctaText: Mi, description: ki, withSquareBottomBorderRadius: r },
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
                    ? Ci(Ci({}, e), {}, { entities: Ci(Ci({}, e.entities), {}, { urls: r, media: t ? [t] : [] }) })
                    : void 0
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(Di, 'contextType', $.a), v()(Di, 'defaultProps', { hasUserText: !1 })
      var Li = re.a.create(function (e) {
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
        Bi = Di,
        Fi = Object(gn.a)().propsFromActions(function () {
          return { markSpamStatus: _.markSpamStatus }
        })
      function Ni(e) {
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
      var Ui = Je.a.fd07947f,
        Hi = Je.a.c7a92dc9,
        Wi = Je.a.f277e949,
        Vi = Je.a.fb3ccb55,
        zi = Fi(
          (function (e) {
            u()(n, e)
            var t = Ni(n)
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
                    return y.createElement(
                      Ei,
                      { contentType: 'dm', ctaText: Wi, description: Vi },
                      e,
                      this._renderButtons(),
                    )
                  },
                },
                {
                  key: '_renderButtons',
                  value: function () {
                    return y.createElement(
                      ge.a,
                      { style: qi.buttons },
                      y.createElement(
                        kt.a,
                        { onPress: this._handlePress(!1), style: qi.leftButton, type: 'brandOutlined' },
                        Hi,
                      ),
                      y.createElement(kt.a, { onPress: this._handlePress(!0), type: 'brandOutlined' }, Ui),
                    )
                  },
                },
              ]),
              n
            )
          })(y.PureComponent),
        ),
        qi = re.a.create(function (e) {
          return {
            buttons: { flexDirection: 'row', paddingTop: e.spaces.space4 },
            leftButton: { marginRight: e.spaces.space12 },
          }
        }),
        Gi = n('U+bB'),
        Ki = function (e) {
          var t = e.images,
            n = t.svg || t.size_1x
          if (n) return n.url
        },
        Yi = re.a.create(function (e) {
          return {
            stickerItem: {
              height: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
              width: 'calc(3 * '.concat(e.fontSizes.title2, ')'),
            },
          }
        }),
        Qi = function (e) {
          var t = e.sticker
          return y.createElement(Gi.a, { accessibilityLabel: t.display_name, source: Ki(t), style: Yi.stickerItem })
        },
        Xi = n('XOJV'),
        Ji = function (e, t) {
          var n,
            r = null === (n = t.messageData) || void 0 === n ? void 0 : n.attachment
          if (r && r.tweet) return r.tweet.status
        },
        Zi = Object(gn.a)()
          .propsFromState(function () {
            return { tweet: Xi.a.createHydratedTweetSelector(Ji) }
          })
          .propsFromActions(function () {
            return { popOutConversation: _.popOutConversation }
          }),
        $i = n('b5s6'),
        ea = y.createElement(be.b, { link: '/settings/safety' }),
        ta = function (e) {
          return y.createElement(Je.a.I18NFormatMessage, { $i18n: 'j3c7dd33' }, y.cloneElement(ea, null, Je.a.adcf07b5))
        },
        na = Je.a.e4df0ad7,
        ra = Je.a.f277e949,
        ia = Je.a.b5b91d58,
        aa = Je.a.bb594d7b,
        oa = y.createElement(ta, null)
      var sa = re.a.create(function (e) {
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
        ca = Zi(function (e) {
          var t = y.useContext($.a).featureSwitches,
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
            g = e.popOutConversation,
            b = e.tweet,
            _ = e.withCta,
            R = e.withMessageBubble,
            O = y.useState(void 0),
            E = ke()(O, 2),
            S = E[0],
            w = E[1],
            C = y.useState(void 0),
            x = ke()(C, 2),
            A = x[0],
            k = x[1],
            T = y.useMemo(
              function () {
                return function () {
                  n && g(n)
                }
              },
              [n, g],
            ),
            I = y.useMemo(
              function () {
                return function (e) {
                  var t = e.nativeEvent.layout.width
                  S !== t && w(t)
                }
              },
              [S],
            ),
            P = y.useMemo(
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
            D = Ft(a, S, A),
            L = y.createElement($i.a, {
              onPress: T,
              style: [
                sa[M],
                a && sa.attachment,
                D.isAttachmentSquared ? (h ? sa.sentAttachmentSquared : sa.receivedAttachmentSquared) : void 0,
              ],
              tweetId: j.status,
            }),
            B = D.isAttachmentSquared ? 'both' : h ? 'right' : 'left',
            F = (function () {
              if (!b) return null
              if (h) return L
              if (b.possibly_sensitive && t.isTrue('dm_conversations_nsfw_media_filter_enabled')) {
                if (c || void 0 === c)
                  return y.createElement(
                    Ei,
                    { contentType: 'photo', ctaText: aa, description: ia, withSquareBottomBorderRadius: B },
                    L,
                  )
              } else if (!r && b.possibly_sensitive)
                return y.createElement(
                  Ei,
                  { contentType: 'photo', ctaText: ra, description: oa, withSquareBottomBorderRadius: B },
                  L,
                )
              return m
                ? L
                : y.createElement(
                    Ei,
                    { contentType: 'tweet', ctaText: ra, description: na, withSquareBottomBorderRadius: B },
                    L,
                  )
            })(),
            N = y.createElement(ge.a, { onLayout: I, style: sa.attachment }, F),
            U = a
              ? y.createElement(
                  ge.a,
                  { onLayout: P, style: h ? sa.sentMessageWrapper : sa.receivedMessageWrapper },
                  y.createElement(qr, {
                    hasAssociatedAttachment: !0,
                    isActive: s,
                    isFailedDraft: l,
                    isFirstRapidFire: d,
                    isRapidFire: f,
                    isSent: h,
                    messageData: v,
                    rootStyle: D.isTextSquared ? (h ? sa.sentSquared : sa.receivedSquared) : void 0,
                    tweetId: j.status,
                    withCta: _,
                    withMediaLinks: !0,
                    withMessageBubble: R,
                  }),
                )
              : null
          return y.createElement(Hr, { attachmentContent: N, isVisible: D.compositeRendered, textContent: U })
        }),
        la = n('8W85')
      function ua() {
        var e = y.useContext(Oa),
          t = ke()(e.activeVoiceMessage, 2),
          n = t[0],
          r = t[1],
          i = ke()(e.playerApi, 2)[1],
          a = ke()(e.playerState, 2)[1]
        var o = {
          media: ke()(n, 2)[1],
          onEnded: function () {
            r([null, null]), e.scribeAction && e.scribeAction.complete()
          },
          onPlayerApi: i,
          onPlayerState: a,
        }
        return y.createElement(la.a, o)
      }
      var da = n('89tF'),
        pa = n('k89r')
      function fa(e, t) {
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
      function ha(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? fa(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : fa(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ma(e) {
        var t,
          n,
          r,
          i,
          a,
          o =
            ((t = y.useState(ga.activeVoiceMessage)),
            (n = y.useState(ga.playerApi)),
            (r = y.useState(ga.playerState)),
            (a = Object(pa.a)()),
            (i = y.useMemo(
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
                      ? a.scribe(ha(ha({}, t({ action: e })), {}, { data: n.data }))
                      : a.scribe(ha({}, t({ action: e, component: ya(n) })))
                    : a.scribe(ha({}, t({ action: e })))
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
        return y.createElement(ba.Provider, { value: o }, e.children)
      }
      var va = {
        Timelines: Object(da.a)({ message: !0, inbox_timeline: !0, low_quality_timeline: !0, requests_timeline: !0 }),
      }
      function ya(e) {
        var t = e.isLowQuality
        return e.isTrusted
          ? va.Timelines.inbox_timeline
          : t
          ? va.Timelines.low_quality_timeline
          : va.Timelines.requests_timeline
      }
      var ga = { activeVoiceMessage: [null, null], playerApi: null, playerState: null, scribeAction: null },
        ba = y.createContext({
          activeVoiceMessage: [ga.activeVoiceMessage, _a],
          playerApi: [ga.playerApi, _a],
          playerState: [ga.playerState, _a],
          scribeAction: null,
        })
      function _a() {
        throw new Error('DMVoiceContext is not initialized')
      }
      function Ra(e) {
        var t = y.useContext($.a).featureSwitches
        return Object(I.j)(t) ? y.createElement(ma, null, e.children, y.createElement(ua, null)) : e.children
      }
      var Oa = ba,
        Ea = n('MH+I'),
        Sa = n('5Ixf'),
        wa = n('AtEG')
      function Ca(e) {
        var t,
          n,
          r = y.useContext(Oa),
          i = e.isLowQuality,
          a = e.isSent,
          o = e.isTrusted
        if (null === (t = e.media) || void 0 === t || !t.video_info) return null
        var s = ke()(r.activeVoiceMessage, 2),
          c = s[0],
          l = s[1],
          u = ke()(r.playerApi, 1)[0],
          d = ke()(r.playerState, 1)[0],
          p = r.scribeAction,
          f = ke()(c, 1)[0],
          h = e.messageId === f
        if (!p) return null
        var m = Aa(d),
          v = (null === (n = e.media) || void 0 === n ? void 0 : n.video_info.duration_millis) || 0,
          g = {
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
            ((g.playerApi = u),
            (g.playerState = d),
            null != m && m.durationMs && (g.durationMs = null == m ? void 0 : m.durationMs)),
          y.createElement(xa, g)
        )
      }
      function xa(e) {
        var t = e.isActive,
          n = e.isSent,
          r = e.playerApi,
          i = e.playerState,
          a = null == i ? void 0 : i.isPlaying,
          o = Aa(i),
          s = (null == o ? void 0 : o.currentTimeMs) || 0,
          c = (null == o ? void 0 : o.durationMs) || e.durationMs,
          l = Math.max(t ? c - s : c, 0)
        y.useLayoutEffect(function () {
          e.onImpression()
        }, []),
          y.useEffect(
            function () {
              r && 0 === s && (r.play(), e.onPlay())
            },
            [r],
          )
        var u = re.a.isDarkMode() || n,
          d = { color: u ? 'whiteOnColor' : 'normal' },
          p = [
            Ia.voiceMessage,
            Pa({ isSent: n, squared: t }),
            n ? Ia.voiceMessageSent : Ia.voiceMessageReceived,
            Me(re.a.theme.scale).voiceMessage({ isVoiceMessageActive: t, isSent: n }),
          ],
          f = a ? Sa.a : wa.a
        return y.createElement(
          ge.a,
          { style: [Ia.container, Me(re.a.theme.scale).voiceMessageContainer({ isVoiceMessageActive: t, isSent: n })] },
          y.createElement(
            ge.a,
            { style: p },
            y.createElement(ge.a, { style: Ia.startSpacer }),
            y.createElement(kt.a, {
              accessibilityLabel: a ? Ta : ka,
              icon: y.createElement(f, { style: u ? Ia.iconColorDark : Ia.iconColorDefault }),
              onPress: function () {
                r ? (a ? (r.pause(), e.onPause()) : (r.play(), e.onPlay())) : e.onPlayRequest()
              },
              type: 'onMediaText',
            }),
            y.createElement(ge.a, { style: Ia.durationSpacer }),
            y.createElement(
              ge.a,
              { style: n ? Ia.durationOpacity : void 0 },
              y.createElement(
                Ea.a,
                yn()({ countdown: !0, timeMs: l }, d, {
                  color: 'gray700',
                  size: 'subtext2',
                  style: n ? Ia.durationDark : void 0,
                  weight: 'bold',
                  withCountdownSymbol: t,
                }),
              ),
            ),
            y.createElement(ge.a, { style: Ia.endSpacer }),
          ),
        )
      }
      var Aa = function (e) {
          return e ? e.tracks[e.currentTrackId] : null
        },
        ka = Je.a.c94b7d89,
        Ta = Je.a.eb6f9582,
        Ia = re.a.create(function (e) {
          return {
            displayNone: { display: 'none' },
            container: { flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', justifyContent: 'center' },
            voiceMessage: {
              alignSelf: 'flex-end',
              flexDirection: Pe.a.getConstants().isRTL ? 'row-reverse' : 'row',
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
      function Pa(e) {
        var t = e.isSent,
          n = e.squared
        return [ja.base, t ? ja.sent : ja.received, n ? (t ? ja.sentSquared : ja.receivedSquared) : void 0]
      }
      var ja = re.a.create(function (e) {
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
      function Ma(e, t) {
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
      function Da(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ma(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ma(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function La(e) {
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
      var Ba = (function (e) {
        u()(n, e)
        var t = La(n)
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
                  l = Lt(n),
                  u = !!o && !!o.ctas,
                  d = Dt(n),
                  p = (function (e) {
                    var t = e.message_data
                    if (!t) return !1
                    if (Lt(e) && !Bt(e)) return !1
                    if (!t.text) return !1
                    var n = Object(jt.parse)(t.text)
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
                  h = Bt(n)
                e = s.sticker ? y.createElement(Qi, { sticker: s.sticker }) : this._renderDMMessage(d, u, f)
                var m = c ? y.createElement(zi, { conversationId: n.conversation_id, dmId: n.id }, e) : e,
                  v = l && !h && !Object(I.k)(null == o ? void 0 : o.attachment, this.context.featureSwitches),
                  g = [
                    r ? Fa.isSent : Fa.isReceived,
                    u && Fa.withCta,
                    v ? Fa.mediaRoot : Fa.flexShrink,
                    this.props.style,
                  ]
                return y.createElement(
                  ge.a,
                  { style: g },
                  m,
                  o && o.ctas
                    ? y.createElement(Dr, {
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
                  m = h && Da(Da({}, h), {}, { entities: (h && h.entities) || void 0, error: f }),
                  v = null == m ? void 0 : m.attachment,
                  g = {
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
                    return y.createElement(
                      ca,
                      yn()(
                        {
                          conversationId: a.conversation_id,
                          displaySensitiveMedia: i,
                          hasUserText: e,
                          isDmNsfwMediaFilterEnabled: s,
                          isTrusted: p,
                          messageData: m,
                        },
                        g,
                      ),
                    )
                  if (v.photo || v.animated_gif || v.video)
                    return v.video && Object(I.k)(v, this.context.featureSwitches)
                      ? y.createElement(Ca, {
                          isLowQuality: l,
                          isSent: !!d,
                          isTrusted: p,
                          media: v.video,
                          messageId: a.id,
                        })
                      : y.createElement(
                          Bi,
                          yn()(
                            {
                              displaySensitiveMedia: i,
                              entry: a,
                              hasUserText: e,
                              isDmNsfwMediaFilterEnabled: s,
                              isTrusted: p,
                              messageData: m,
                            },
                            g,
                          ),
                        )
                  if (v.card)
                    return y.createElement(
                      ei,
                      yn()({ cardUrl: v.card, conversationId: a.conversation_id, hasUserText: e, messageData: m }, g),
                    )
                  if (v.fleet) return y.createElement(oi, yn()({ entry: a, hasUserText: e, messageData: m }, g))
                }
                return y.createElement(Gr, yn()({}, g, { messageData: m }))
              },
            },
          ]),
          n
        )
      })(y.Component)
      v()(Ba, 'contextType', $.a)
      var Fa = re.a.create(function (e) {
          return {
            flexShrink: { flexShrink: 1 },
            mediaRoot: { flex: 1 },
            isSent: { alignItems: 'flex-end' },
            isReceived: { alignItems: 'flex-start' },
            withCta: { alignItems: 'stretch' },
          }
        }),
        Na = Ba,
        Ua = re.a.create(function (e) {
          return { avatar: { borderRadius: e.borderRadii.infinite } }
        }),
        Ha = function (e) {
          var t = e.showAvatar,
            n = e.size,
            r = void 0 === n ? 'xLarge' : n,
            i = e.user
          return t
            ? y.createElement(_e.a, {
                accessibilityLabel: i.name,
                link: { pathname: '/'.concat(i.screen_name) },
                size: r,
                uri: i.profile_image_url_https,
              })
            : y.createElement(ge.a, { style: [Ua.avatar, _e.a.getSizeStyle(r)] })
        },
        Wa = n('m3Bd'),
        Va = n.n(Wa),
        za = n('B3eJ')
      function qa(e) {
        var t = e.color,
          n = e.isActive,
          r = e.size,
          i = Va()(e, ['color', 'isActive', 'size']),
          a = y.useContext(Oa),
          o = y.useState(0.5),
          s = ke()(o, 2),
          c = s[0],
          l = s[1],
          u = ke()(a.playerState, 1)[0]
        y.useEffect(
          function () {
            n && u && u.isPlaying && l(Math.random())
          },
          [n, u],
        )
        var d = n && (null == u ? void 0 : u.isPlaying),
          p = r + 2 * Ga,
          f = [Ka.container, i.style, { width: r, height: r }]
        return y.createElement(
          ge.a,
          { style: f },
          y.createElement(
            ge.a,
            { style: [Ka.container, Ka.transitionOpacity, d ? Ka.show : Ka.hide] },
            je.a.reducedMotionEnabled ? null : y.createElement(za.a, { audioLevel: c, color: t, paused: !d, size: r }),
          ),
          y.createElement(ge.a, {
            style: [Ka.border, { width: p, height: p }, Ka.transitionOpacity, n ? Ka.show : Ka.hide],
          }),
        )
      }
      var Ga = parseInt(re.a.theme.spaces.space2, 10),
        Ka = re.a.create(function (e) {
          return {
            container: { alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' },
            border: {
              position: 'absolute',
              top: -1 * Ga,
              left: -1 * Ga,
              backgroundColor: e.colors.navigationBackground,
              borderRadius: e.borderRadii.infinite,
            },
            transitionOpacity: { transition: 'opacity 0.2s 0s ease-in-out' },
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }
        }),
        Ya = n('uArA'),
        Qa = 'messageEntry'
      function Xa(e, t) {
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
      function Ja(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Xa(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Xa(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Za(e) {
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
      var $a = { element: 'cta_dm' },
        eo = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 },
        to = (function (e) {
          u()(n, e)
          var t = Za(n)
          function n() {
            var e
            i()(this, n)
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              v()(
                c()(e),
                '_handleClick',
                Object(Ya.a)(function () {
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
                if (!Tt.a.isEnabled && !t) {
                  var n = e.props.entry,
                    r = { component: 'message', element: Object(I.c)(n), action: 'click' }
                  e._scribeAction(r)
                }
              }),
              v()(c()(e), '_handleCtaImpression', function () {
                e._scribeAction(Ja(Ja({}, $a), {}, { action: 'show' }))
              }),
              v()(c()(e), '_handleCtaClick', function () {
                e._scribeAction(Ja(Ja({}, $a), {}, { action: 'click' }))
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
                  return !Object(ye.a)(this.props, e)
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
                      ro.root.base,
                      c && ro.root.vdlPadding,
                      s && ro.root.contentSpacing,
                      s && c && ro.root.vdlContentSpacing,
                    ],
                    u = this._isDMVoiceMessage(),
                    d = c ? r && !i : !i || u
                  if (!a) return null
                  var p = !Tt.a.isEnabled || i
                  return y.createElement(
                    We.a,
                    { viewType: 'message' },
                    y.createElement(
                      ge.a,
                      { style: l },
                      y.createElement(
                        ae.a,
                        {
                          accessibilityExpanded: !(!p || !n),
                          focusable: !0,
                          interactiveStyles: null,
                          onPress: p ? this._handleClick : void 0,
                          style: i ? ro.root.sent : ro.root.received,
                          testID: Qa,
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
                    g = s.isTrusted,
                    b = s.isVoiceMessageActive,
                    _ = s.isWide,
                    R = s.participants,
                    O = s.perspective,
                    E = s.scribeVoiceMessage,
                    S = s.setShouldFreezeUpdates,
                    w = i.isFirstRapidFire,
                    C = i.isRapidFire,
                    x = [
                      v ? ro.messageContainer.sent : ro.messageContainer.received,
                      _ ? ro.messageContainer.wide : ro.messageContainer.narrow,
                      v && _ && ro.messageContainer.sentWide,
                      !v && _ && ro.messageContainer.receivedWide,
                    ],
                    A = g && !m,
                    k = this._isDMVoiceMessage(),
                    T = null === (t = Object.keys(R)) || void 0 === t ? void 0 : t.length
                  return y.createElement(
                    ge.a,
                    { style: x },
                    l.error
                      ? null
                      : y.createElement(fn, {
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
                                  return E.report({ isLowQuality: h, isTrusted: g })
                                }
                              : void 0,
                          participantsCount: T,
                          perspective: O,
                          setShouldFreezeUpdates: S,
                          shouldShowReactionButton: A,
                          style: k && Me(re.a.theme.scale).actionsContainer({ isSent: v, isVoiceMessageActive: b }),
                          withVDLRefresh: o,
                        }),
                    y.createElement(Na, {
                      displaySensitiveMedia: c,
                      entry: l,
                      isActive: d,
                      isDmNsfwMediaFilterEnabled: p,
                      isFirstRapidFire: w,
                      isLowQuality: h,
                      isRapidFire: C,
                      isSent: v,
                      isTrusted: g,
                      key: l.id,
                      onCtaClick: this._handleClick,
                      onCtaImpression: this._handleCtaImpression,
                      style: k && Me(re.a.theme.scale).messageContainer({ isSent: v, isVoiceMessageActive: b }),
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
                    ? y.createElement(Ar, {
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
                  var l = Ie(re.a.theme.scale),
                    u = l.DMUserAvatarSizePx,
                    d = { showAvatar: !!c || !r || !!n, size: l.DMUserAvatarSizeType, user: s },
                    p = [
                      ro.userAvatar.base,
                      a ? ro.userAvatar.sent : ro.userAvatar.received,
                      c && Me(re.a.theme.scale).userAvatar({ isVoiceMessageActive: o, isSent: a }),
                    ]
                  return y.createElement(
                    ge.a,
                    { style: ro.userAvatar.container },
                    a ? null : y.createElement(ge.a, { style: ro.userAvatar.spacer }),
                    c
                      ? y.createElement(qa, {
                          color: a ? re.a.theme.colors.primary : re.a.theme.colors.text,
                          isActive: !!o,
                          size: u,
                          style: p,
                        })
                      : null,
                    y.createElement(ge.a, { style: p }, y.createElement(Ha, d)),
                  )
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  this.props.analytics.scribe(Ja({}, e))
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
        })(y.Component)
      v()(to, 'contextType', $.a), v()(to, 'defaultProps', eo)
      var no = Object(ht.a)(
          qe(
            (function (e) {
              function t(t) {
                var n = t.entry,
                  r = y.useContext(Oa),
                  i = ke()(r.activeVoiceMessage, 1)[0],
                  a = r.scribeAction,
                  o = ke()(i, 1)[0] === n.id,
                  s = Ja(Ja({}, t), {}, { isVoiceMessageActive: o, scribeVoiceMessage: a })
                return y.createElement(e, s)
              }
              return (t.defaultProps = eo), t
            })(to),
          ),
        ),
        ro = {
          root: re.a.create(function (e) {
            return {
              base: { flexDirection: 'column', paddingBottom: e.spaces.space2 },
              vdlPadding: { paddingBottom: '0px' },
              received: { cursor: 'default', alignItems: 'flex-start' },
              sent: { cursor: 'pointer', alignItems: 'flex-end' },
              contentSpacing: { paddingBottom: e.spaces.space20 },
              vdlContentSpacing: { paddingBottom: e.spaces.space24 },
            }
          }),
          messageContainer: re.a.create(function (e) {
            return {
              sent: { flexDirection: 'row', justifyContent: 'flex-end' },
              received: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
              narrow: { width: '100%' },
              wide: { width: _n },
              receivedWide: { paddingRight: e.spaces.space12 },
              sentWide: { paddingLeft: e.spaces.space12 },
            }
          }),
          userAvatar: re.a.create(function (e) {
            return {
              container: { flexDirection: 'row', alignItems: 'flex-end' },
              base: { position: 'absolute' },
              sent: { right: 0 },
              received: { left: 0 },
              spacer: { width: Ie(e.scale).DMUserAvatarSpacerPx },
            }
          }),
        },
        io = n('H4nC'),
        ao = function (e) {
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
          if (Object(X.b)(n) || Object(X.e)(n)) {
            var f = t.conversation_id,
              h = t.low_quality,
              m = t.participants,
              v = t.read_only,
              g = t.trusted,
              b = t.type,
              R = n.message_data,
              O = (R = void 0 === R ? {} : R).sender_id,
              E = void 0 === f || g
            return y.createElement(no, {
              entry: n,
              inboxType: r,
              isActive: i,
              isFirstRapidFire: a,
              isGroupDM: b === _.CONVERSATION_TYPE.GROUP,
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
          return Object(X.a)(n)
            ? y.createElement(xe, { conversation: t, entry: n, entryType: n.type, perspective: l })
            : Object(X.d)(n)
            ? y.createElement(io.a, { entry: n, isCompact: !1 })
            : null
        },
        oo = Object(S.createSelector)(
          function (e, t) {
            var n = Object(nt.o)(e, t.conversationId),
              r = n && Object(Z.a)(n)
            return r && Object(_.selectEntry)(e, r)
          },
          function (e) {
            return { lastEntry: e }
          },
        ),
        so = Object(T.c)(oo),
        co = (n('Ef13'), n('uDfI')),
        lo = Object(S.createSelector)(
          function (e, t) {
            return k.e.selectMany(e, t.userIds || [])
          },
          function (e) {
            return { users: e }
          },
        ),
        uo = Object(co.b)(lo),
        po = n('Enqy'),
        fo = n('+/1j')
      function ho(e) {
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
      var mo = 'overflow',
        vo = function (e, t) {
          return e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0
        },
        yo = { stiffness: 1e3, damping: 70 },
        go = 140,
        bo = { scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(0, yo) },
        _o = function (e, t) {
          return { key: e.id_str, data: e, style: bo }
        },
        Ro = Object(V.a)({ translateY: go, scale: 0 }),
        Oo = Object(V.a)({ scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(go, yo) }),
        Eo = [{ key: 'bubble', style: { scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(0, yo) } }],
        So = Object(V.a)({ translateY: go, scale: 0 }),
        wo = Object(V.a)({ scale: Object(po.spring)(1, yo), translateY: Object(po.spring)(go, yo) }),
        Co = function (e) {
          return [
            isFinite(e.scale) && { scale: e.scale.toFixed(3) },
            isFinite(e.translateY) && { translateY: ''.concat(Math.round(e.translateY), '%') },
          ].filter(Boolean)
        },
        xo = (function (e) {
          u()(n, e)
          var t = ho(n)
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
                  return !Object(ye.a)(this.props, e) || !Object(ye.a)(this.state, t)
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.isHidden,
                    t = this.props.users,
                    n = t.sort(vo).slice(0, 5).map(_o)
                  return (
                    t.length > 5 && n.push({ key: mo, style: bo }),
                    y.createElement(
                      ge.a,
                      { style: [Ao.root, e && Ao.hidden] },
                      y.createElement(
                        ge.a,
                        { style: Ao.avatarRow },
                        y.createElement(po.TransitionMotion, { styles: n, willEnter: Ro, willLeave: Oo }, function (e) {
                          return y.createElement(
                            y.Fragment,
                            null,
                            e.map(function (e, n) {
                              if (e.style.scale <= 0.05) return null
                              var r = Co(e.style)
                              return e.key === mo
                                ? y.createElement(
                                    ge.a,
                                    {
                                      key: e.key,
                                      style: [Ao.avatar, Ao.avatarSpacer, Ao.overflowAvatar, { transform: r }],
                                    },
                                    y.createElement(fo.a, { style: Ao.overflowAvatarText }, '+', t.length - 5),
                                  )
                                : y.createElement(
                                    ge.a,
                                    { key: e.key, style: [Ao.avatar, { transform: r }] },
                                    y.createElement(_e.a, {
                                      accessibilityLabel: e.data && e.data.name,
                                      size: 'xLarge',
                                      uri: e.data && e.data.profile_image_url_https,
                                    }),
                                  )
                            }),
                          )
                        }),
                      ),
                      y.createElement(
                        po.TransitionMotion,
                        { didLeave: this._afterLeave, styles: t.length > 0 ? Eo : [], willEnter: So, willLeave: wo },
                        function (e) {
                          return y.createElement(
                            y.Fragment,
                            null,
                            e.map(function (e) {
                              return y.createElement(
                                ge.a,
                                { key: e.key, style: [Ao.messageBubble, { transform: Co(e.style) }] },
                                y.createElement(ge.a, { style: Ao.dot }),
                                y.createElement(ge.a, { style: [Ao.dot, Ao.dot1] }),
                                y.createElement(ge.a, { style: [Ao.dot, Ao.dot2] }),
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
        })(y.Component),
        Ao = re.a.create(function (e) {
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
        ko = uo(xo),
        To = n('tn7R')
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
      var Po = (function (e) {
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
                      ct()(
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
                return !t && y.createElement(ko, { userIds: n })
              },
            },
            {
              key: '_teardownLivePipeline',
              value: function () {
                Object(To.a)(this._timers).forEach(function (e) {
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
                Object(g.h)().then(function (n) {
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
      })(y.PureComponent)
      v()(Po, 'contextType', $.a)
      var jo = so(Po),
        Mo = n('3AAD'),
        Do = n('iBK2'),
        Lo = n('Fz18'),
        Bo = n('RJrc'),
        Fo = n('yw4N'),
        No = (n('XygZ'), n('dPJJ')),
        Uo = n('zrc3'),
        Ho = n('pQ3Z'),
        Wo = n.n(Ho),
        Vo = n('VY6S'),
        zo = n('Resy'),
        qo = (function () {
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
                    a = new zo.a(i, r),
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
              (this._debouncedNormalize = Object(Vo.a)(this._normalize, 500)),
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
      function Go(e) {
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
      var Ko = (function (e) {
        u()(n, e)
        var t = Go(n)
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
            (a._offsetHandler = new qo(e.viewport)),
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
                var n = !Wo()(this.props, e) || !Wo()(this.state, t)
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
                  (this._unlistenFullscreenEnter = No.a(this._handleEnterFullscreen)),
                  (this._unlistenFullscreenExit = No.b(this._handleExitFullscreen))
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
                return y.createElement(
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
                    var n = Object(Uo.a)(t, function (t) {
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
      })(y.Component)
      v()(Ko, 'defaultProps', { anchoring: Mo.a })
      var Yo = n('AOWc'),
        Qo = n('180P'),
        Xo = n('Ey+e'),
        Jo = n('SrIh'),
        Zo = n('E6XO'),
        $o = n('06eB'),
        es = n.n($o),
        ts = n('aITJ')
      function ns(e) {
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
      var rs = function () {
          return window.performance ? window.performance.now() : Date.now()
        },
        is = (function (e) {
          u()(n, e)
          var t = ns(n)
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
                  i = ke()(e, 1)[0]
                a._isResizeObserverHeightUpdatesEnabled &&
                  i &&
                  i.contentRect.height !== a._currentHeight &&
                  ((a._currentHeight = i.contentRect.height), r(n, i.contentRect.height)),
                  a._perfReported || (a.props.onVisible(n, rs() - a._perfStart), (a._perfReported = !0))
              }),
              v()(c()(a), '_setRef', function (e) {
                var t = a.props,
                  n = t.id,
                  r = t.setAPI
                e ? ((a._element = e), r(n, c()(a)), a._observeElement(e)) : (r(n, void 0), (a._element = void 0))
              }),
              (a._isResizeObserverHeightUpdatesEnabled =
                a.context.featureSwitches.isTrue('responsive_web_vs_config_resize_observer_enabled') &&
                ts.b.isDesktopOS() &&
                ts.b.isSafari()),
              (a._resizeObserver = new window.ResizeObserver(a._handleResize)),
              (a._perfStart = rs()),
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
                  return t.render !== e.render || !es()(n, e.data)
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
                  return y.createElement('div', { ref: this._setRef }, n(t))
                },
              },
            ]),
            n
          )
        })(y.Component)
      v()(is, 'contextType', $.a)
      var as = n('+d3d'),
        os = n('iChn')
      function ss(e) {
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
      var cs = (function (e) {
          u()(n, e)
          var t = ss(n)
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
                    r = ts.b.isDesktopOS() ? 'scroller_legacy' : 'scroller_legacy_mobile'
                  Zo.c('scroller:ttfv:'.concat(r), { duration_ms: n }), e._visibilityMeasurements.clear()
                }
              }),
              v()(c()(e), '_handleCellHeightChanged', function (t, n) {
                ;(e._heightUpdates[t] = n), e._flushHeightUpdates()
              }),
              v()(
                c()(e),
                '_flushHeightUpdates',
                Object(as.a)(
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
                  return Object(os.a)(
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
                  return y.createElement(
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
                    return y.createElement(is, {
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
        })(y.PureComponent),
        ls = n('oi7R'),
        us = n('aWzz'),
        ds = n('JD1h'),
        ps = n('OeMK'),
        fs = (n('IAdD'), n('jHwr')),
        hs = n('qdp+'),
        ms = (function () {
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
                  if (0 === e.length) return new zo.a(0, 0)
                  var t = this._rectangles,
                    n = e[0].id,
                    r = e[e.length - 1].id,
                    i = t[n].getTop(),
                    a = t[r].getBottom() - i
                  return new zo.a(i, a)
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
                    r = Object(Uo.a)(this._list, function (e) {
                      var r = e.id
                      return n[r].doesIntersectWith(t)
                    })
                  if (r < 0) return []
                  var i = Object(Uo.a)(
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
                  return Object(hs.a)(this.getRenderedItems(), function (t) {
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
        vs = n('64vW'),
        ys = function (e, t, n) {
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
        gs = function (e) {
          var t = e.list,
            n = e.nextList,
            r = e.sliceEnd,
            i = e.sliceStart,
            a = n.reduce(function (e, t) {
              return (e[t.id] = !0), e
            }, {}),
            o = ys(t, i, function (e) {
              var t = e.id
              return !Object(ps.a)(t) && a.hasOwnProperty(t) && a[t]
            })
          if (-1 === o) return null
          var s = Object(Uo.a)(n, function (e) {
            var n = e.id
            return t[o].id === n
          })
          return (
            Object(Yo.a)(s >= 0, 'newSliceStart should be defined if we found a common item'),
            o > 0 && Object(ps.a)(t[o - 1].id) && s > 0 && Object(ps.a)(n[s - 1].id) && (s -= 1),
            { sliceStart: s, sliceEnd: Math.min(n.length, s + r - i) }
          )
        }
      function bs(e, t) {
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
      function _s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? bs(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : bs(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Rs(e) {
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
      var Os = { heightsReady: !0 },
        Es = (function (e) {
          u()(n, e)
          var t = Rs(n)
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
              (a._getMemoizedSlice = Object(Te.a)(function (e, t, n) {
                return e.slice(t, n)
              })),
              (a._getRectangles = function (e) {
                var t = e || c()(a),
                  n = t._assumedItemHeight,
                  r = t._heights,
                  i = t.props.list
                return t._getMemoizedRectangles(i, r, n)
              }),
              (a._getMemoizedRectangles = Object(Te.a)(function (e, t, n) {
                return Ss(e, t, n)
              })),
              (a._heights = {})
            var u = a.props,
              d = u.cacheKey,
              p = u.heightCache
            d && p.hasOwnProperty(d) && (a._heights = p[d]), (a.state = a._getDefaultSlice(l, s))
            var f = Object(fs.a)(function () {
              return a._criticalUpdate()
            }, window.requestAnimationFrame)
            return (
              (a._scheduleUpdate = window.requestIdleCallback
                ? Object(fs.a)(function () {
                    return a._criticalUpdate()
                  }, window.requestIdleCallback)
                : f),
              (a._schedulePositioningNotification = Object(fs.a)(
                function () {
                  return a._notifyPositioning()
                },
                window.requestIdleCallback
                  ? function (e) {
                      return window.requestIdleCallback(e, { timeout: 500 })
                    }
                  : window.requestAnimationFrame,
              )),
              (a._handleScroll = Object(as.a)(f, 100, { trailing: !0 })),
              (a._scheduleDebouncedUpdate = Object(Vo.a)(function () {
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
                    var o = gs({ list: t, nextList: a, sliceStart: i, sliceEnd: r }) || this._getDefaultSlice(a)
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
                  return new ms({
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
                  return y.createElement(
                    vs.a.Provider,
                    { value: Os },
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
                    o = Object(Z.a)(e)
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
                    r && (this._heights = Object.assign(_s({}, this._heights), n)),
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
                    c = Object(Uo.a)(n, function (e) {
                      var t = e.id
                      return s[t].getBottom() > a
                    }),
                    l = c >= 0 ? c : n.length - 1,
                    u = Object(Uo.a)(
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
                  if (!this._ref) return new zo.a(0, 0)
                  var e = this._ref.getWrapperNode()
                  if (!e) return new zo.a(0, 0)
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
                    i = _s(
                      _s({}, this),
                      {},
                      {
                        props: _s(_s({}, this.props), {}, { list: e }),
                        state: _s({}, this.state),
                        context: _s({}, this.context),
                        refs: null,
                      },
                    ),
                    a = this._getRectangles(i),
                    o = e[t].id,
                    s = a[o].getBottom(),
                    c = Object(Uo.a)(
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
        })(y.PureComponent)
      v()(Es, 'defaultProps', {
        assumedItemHeight: 400,
        heightCache: {},
        initialItemIndex: 0,
        minimumOffscreenToViewportRatio: 0.5,
        preferredOffscreenToViewportRatio: 2.5,
      })
      var Ss = function (e, t, n) {
          var r = {}
          return (
            e.reduce(function (e, i) {
              var a = i.id,
                o = t.hasOwnProperty(a) ? t[a] : n,
                s = new zo.a(e, o)
              return (r[a] = s), s.getBottom()
            }, 0),
            r
          )
        },
        ws = Es
      function Cs(e) {
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
      var xs = function (e) {
          return (
            Object(Jo.a)('Fallback to slow hashing in VirtualScroller (type = '.concat(e ? e.type : '', ')')),
            Object(Qo.a)(e)
          )
        },
        As = (function (e) {
          u()(n, e)
          var t = Cs(n)
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
                return y.createElement(
                  ws,
                  yn()({}, e, {
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
                return y.createElement(cs, e)
              }),
              v()(c()(a), '_getItemRenderer', function () {
                return a._getMemoizedItemRenderer(a.props.renderer)
              }),
              v()(
                c()(a),
                '_getMemoizedItemRenderer',
                Object(Te.a)(function (e) {
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
                Object(Te.a)(function (e, t, n, r) {
                  var i = {},
                    a = t.reduce(function (t, n) {
                      var r = e(n) || n.id || xs(n)
                      return (
                        Object(Yo.a)('number' == typeof r || 'string' == typeof r, 'Item id must not be falsy'),
                        i.hasOwnProperty(r)
                          ? Object(Jo.a)(
                              'Duplicate item id generated in VirtualScroller. Latter item will be discarded',
                              { extra: { id: r } },
                            )
                          : (t.push({ data: { data: n }, id: r }), (i[r] = !0)),
                        t
                      )
                    }, []),
                    o = n
                      ? {
                          id: ps.c,
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
                          id: ps.b,
                          data: {
                            presentational: !0,
                            renderNode: function () {
                              return r
                            },
                          },
                        }
                      : null
                  return a.length ? [].concat(ct()(o ? [o] : []), ct()(a), ct()(s ? [s] : [])) : []
                }),
              ),
              (a._viewport = e.viewport || r.viewport || ls.a.root()),
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
                    ? y.createElement(Ko, {
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
                  return new ds.b([
                    {
                      condition: ds.a.nearTop(5),
                      callback: function (t) {
                        return e.props.onAtStart(t)
                      },
                    },
                    {
                      condition: ds.a.nearTopRatio(r),
                      callback: function (t) {
                        return e.props.onNearStart(t)
                      },
                    },
                    {
                      condition: ds.a.nearBottomRatio(n),
                      callback: function (t) {
                        return e.props.onNearEnd(t)
                      },
                    },
                    {
                      condition: ds.a.nearBottom(5),
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
        })(y.Component)
      v()(As, 'displayName', 'VirtualScroller'),
        v()(As, 'contextTypes', { viewport: us.object, getCustomLocation: us.func }),
        v()(As, 'defaultProps', {
          anchoring: Ko.defaultProps.anchoring,
          assumedItemHeight: ws.defaultProps.assumedItemHeight,
          identityFunction: xs,
          minimumOffscreenToViewportRatio: ws.defaultProps.minimumOffscreenToViewportRatio,
          nearEndProximityRatio: 1.75,
          nearStartProximityRatio: 0.25,
          noItemsRenderer: function () {
            return null
          },
          onPositionRestored: Pr.a,
          onAtEnd: Pr.a,
          onAtStart: Pr.a,
          onNearEnd: Pr.a,
          onNearStart: Pr.a,
          onScrollEnd: Pr.a,
          preferredOffscreenToViewportRatio: ws.defaultProps.preferredOffscreenToViewportRatio,
          withKeyboardShortcuts: !1,
        })
      var ks = Object(Xo.a)(As),
        Ts = n('mw9i')
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
      var Ps = Je.a.i859a9d3,
        js = Je.a.i8ecae5b,
        Ms = function (e) {
          return e.entry.id
        },
        Ds = function (e) {
          return e.entry.type === ve.b.MESSAGE
        },
        Ls = (function (e) {
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
                  case ve.b.TYPING_INDICATOR:
                    return n ? y.createElement(jo, { conversationId: n }) : null
                  case ve.b.READ_ONLY_INDICATOR:
                    return n
                      ? y.createElement(
                          ge.a,
                          { style: Bs.readOnly },
                          y.createElement(
                            be.b,
                            { align: 'center', color: 'gray700', size: 'subtext2' },
                            js,
                            ' ',
                            y.createElement(be.b, { link: 'https://support.twitter.com/articles/14606#faq' }, Ps),
                          ),
                        )
                      : null
                  case ve.b.CONVERSATION_PROFILE_INFO_HEADER:
                    return y.createElement(de, { conversation: t })
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
              (a._anchoring = Y({
                isOwnMessage: function (e) {
                  var t, n
                  return (
                    (null === (t = e.entry) || void 0 === t || null === (n = t.message_data) || void 0 === n
                      ? void 0
                      : n.sender_id) === a.props.perspective || !1
                  )
                },
                typingIndicatorId: Q.a,
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
                          n && 0 === a && e.push(Q.b)
                          var s = Object(Z.a)(e),
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
                            var l = J(s.entry, i),
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
                      footer: Q.d,
                      readOnlyEntry: Q.c,
                      canInjectConversationProfileInfoHeader: n.status === ve.c.AT_END && n.type === ve.a.ONE_TO_ONE,
                      activeEntryId: s,
                    }),
                    l = n.conversation_id,
                    u = function (e) {
                      return e[e.length - 1]
                    },
                    d = function (e) {
                      for (var t = e.length - 1; t >= 0; t--) {
                        var n = e[t]
                        if (n && Ds(n)) return n
                      }
                      return u(e)
                    },
                    p = 'dm-activity-'.concat(l)
                  return y.createElement(pe.a.Consumer, null, function (t) {
                    var s = t.isDrawer,
                      l = e._appBarScrollEnabled ? (s ? fe.b.drawerHeaderRadius : Bs.scrollSpace) : null
                    return y.createElement(
                      ge.a,
                      { style: [Bs.scrollContainer, l] },
                      y.createElement(
                        Fo.a,
                        { style: [Bs.scrollContainer, i && Bs.conversationsPadding, l, o] },
                        r || null,
                        n.status && n.status !== ve.c.AT_END ? y.createElement(Bo.a, null) : null,
                        y.createElement(
                          Ts.a,
                          { style: [Bs.content, Bs.alignTop], withGutter: !0 },
                          e._shouldUseNewScroller
                            ? y.createElement(Do.b, {
                                anchoring: Mo.a,
                                assumedItemHeight: 50,
                                cacheKey: p,
                                canBeAnchorFunction: Ds,
                                hasNewContentAtBottom: !0,
                                identityFunction: Ms,
                                initialAnchor: c.length > 0 ? U.a(Ms(d(c))) : void 0,
                                items: c,
                                nearStartProximityRatio: 2,
                                onNearStart: a,
                                renderer: e._renderItem,
                                withoutHeadroom: !1,
                              })
                            : y.createElement(
                                Lo.a,
                                { identifier: p },
                                y.createElement(ks, {
                                  anchoring: e._anchoring,
                                  assumedItemHeight: 50,
                                  cacheKey: p,
                                  hasNewContentAtBottom: !1,
                                  identityFunction: Ms,
                                  initialAnchor: c.length > 0 ? U.a(Ms(u(c))) : void 0,
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
                    ? y.createElement(ao, {
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
        })(y.Component)
      v()(Ls, 'contextType', $.a)
      var Bs = re.a.create(function (e) {
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
        Fs = n('uB9N'),
        Ns = n('v//M'),
        Us = n('J2UM'),
        Hs = n('07FG'),
        Ws = n('I8M8'),
        Vs = n('7myi'),
        zs = n('883S'),
        qs = n('z0MJ'),
        Gs = n.n(qs),
        Ks = n('Es6L'),
        Ys = n('LsPn'),
        Qs = n('GSsg'),
        Xs = n('EbOo'),
        Js = n('tZH3'),
        Zs = Je.a.ccf2f24e,
        $s = Je.a.ib3fe8a9,
        ec = function (e) {
          var t = e.isGroup,
            n = e.onBlockClick,
            r = e.onReportClick,
            i = e.requestorScreenName,
            a = { type: 'destructiveOutlined' },
            o = y.createElement(kt.a, yn()({}, a, { accessibilityRole: 'button' }), $s),
            s = y.createElement(kt.a, yn()({}, a, { onPress: r }), Zs),
            c = y.useCallback(
              function (e, t) {
                return y.createElement(Js.a, {
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
          return t ? s : y.createElement(Wn.a, { renderContent: c }, o)
        },
        tc = Object(gn.a)().propsFromActions(function () {
          return {
            addToast: E.b,
            block: k.e.block,
            createLocalApiErrorHandler: Object(P.createLocalApiErrorHandlerWithContextFactory)(
              'UNTRUSTED_CONVERSATION_ACTIONS',
            ),
            muteDMUser: _.muteDMUser,
            unmuteDMUser: _.unmuteDMUser,
            unblock: k.e.unblock,
          }
        }),
        nc = n('AQ79'),
        rc = n('u0B7'),
        ic = n('cHvH'),
        ac = n('lHOd'),
        oc = n('vMjK'),
        sc = n('7JQg'),
        cc = n('24HD')
      function lc(e, t) {
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
      function uc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? lc(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : lc(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function dc(e) {
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
      var pc = Je.a.da878dcf,
        fc = Je.a.d96cf7cd,
        hc = Je.a.gde6b424,
        mc = Je.a.e308019b,
        vc = Je.a.gf5e9ea6,
        yc = Je.a.hc52446b,
        gc = Je.a.f7e1ad65,
        bc = { headline: Je.a.gdf4b79f, text: Je.a.bbf83d83, confirmButtonLabel: Je.a.bb1d57b6 },
        _c = (function (e) {
          u()(n, e)
          var t = dc(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(
                c()(a),
                '_isVDLEnabled',
                a.context.featureSwitches.isTrue('dm_vdl_enabled') &&
                  a.context.featureSwitches.isTrue('dm_vdl_chat_p0_enabled'),
              ),
              v()(c()(a), '_renderCopy', function (e) {
                var t = a.props.conversation,
                  n = a.context.loggedInUserId
                return y.createElement(be.b, { style: Rc.copy }, e ? yc : gc({ senderName: Object(I.i)(t, n).name }))
              }),
              v()(c()(a), '_renderActionButtons', function (e) {
                var t = a.props.conversation,
                  n = a.context.loggedInUserId
                return y.createElement(ic.a, null, function (r) {
                  var i = r.windowWidth <= re.a.theme.breakpoints.small
                  return y.createElement(
                    ge.a,
                    { style: Rc.actionsContainer },
                    a._isVDLEnabled &&
                      y.createElement(
                        kt.a,
                        {
                          onPress: a._handleAcceptConversation,
                          size: 'medium',
                          style: [Rc.actionFullWidth, Rc.actionMarginBottom],
                          type: 'primaryOutlined',
                        },
                        pc,
                      ),
                    y.createElement(
                      ge.a,
                      { style: i ? Rc.actionFullWidth : [Rc.actionHalfWidth, Rc.actionMarginRight] },
                      y.createElement(ac.a.Consumer, null, function (r) {
                        return y.createElement(ec, {
                          isGroup: e,
                          onBlockClick: a._handleBlockClick,
                          onReportClick: a._handleReportMenuItemClick,
                          requestorScreenName: Object(I.i)(t, n).screenName,
                        })
                      }),
                    ),
                    y.createElement(
                      kt.a,
                      {
                        onPress: a._handleLeaveConversationClick,
                        size: 'medium',
                        style: i ? [Rc.actionFullWidth, Rc.actionMarginTop] : [Rc.actionHalfWidth, Rc.actionMarginLeft],
                        type: 'destructiveOutlined',
                      },
                      fc,
                    ),
                    !a._isVDLEnabled &&
                      y.createElement(
                        kt.a,
                        {
                          onPress: a._handleAcceptConversation,
                          size: 'medium',
                          style: [Rc.actionFullWidth, Rc.actionMarginTop],
                          type: 'primaryOutlined',
                        },
                        pc,
                      ),
                  )
                })
              }),
              v()(c()(a), '_renderLeaveConfirmationSheet', function () {
                return y.createElement(At.a, {
                  confirmButtonLabel: bc.confirmButtonLabel,
                  confirmButtonType: 'destructiveFilled',
                  headline: bc.headline,
                  onCancel: a._handleCancelLeave,
                  onConfirm: a._handleConfirmLeave,
                  text: bc.text,
                })
              }),
              v()(c()(a), '_renderBlockConfirmationSheet', function () {
                var e = a.props.conversation,
                  t = a.context.loggedInUserId,
                  n = Object(I.i)(e, t),
                  r = n.idStr,
                  i = n.screenName
                return Object(cc.j)({
                  confirmation: Object(cc.f)(i),
                  onClose: a._handleBlockLeave,
                  handleConfirm: a._createBlockUserHandler(r),
                })
              }),
              v()(c()(a), '_scribeAction', function (e, t) {
                var n = a.props
                ;(0, n.scribeAction)(uc(uc({}, n.scribeNamespace), {}, { action: e }), t || a._getScribeData())
              }),
              v()(c()(a), '_getScribeData', function () {
                return {
                  items: [{ conversation_type: a.props.conversation.type === _.CONVERSATION_TYPE.GROUP ? 1 : 0 }],
                }
              }),
              v()(c()(a), '_handleReportTextClick', function () {
                a._scribeAction('report')
              }),
              v()(c()(a), '_handleReportMenuItemClick', function () {
                var e = a.props,
                  t = e.conversationId,
                  n = e.history,
                  r = e.inboxType,
                  i = e.scribeNamespace
                t && (a._scribeAction('report'), n.push(Object(I.f)(t, window.location.pathname, i, r)))
              }),
              v()(c()(a), '_handleLeaveConversationClick', function () {
                a.setState({ showLeaveConfirmation: !0, showBlockConfirmation: !1 })
              }),
              v()(c()(a), '_handleMuteDMUserClick', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addToast,
                    r = t.conversation,
                    i = t.conversationId,
                    o = t.createLocalApiErrorHandler,
                    s = t.inboxType,
                    c = t.muteDMUser,
                    l = a.context.loggedInUserId,
                    u = Object(I.i)(r, l),
                    d = u.idStr,
                    p = u.name
                  c(d, i).then(function () {
                    n({ action: { label: vc, onAction: a._handleUnmuteDMUserClick(e) }, text: hc({ name: p }) }),
                      s !== nc.d.TERTIARY && e.replace('/messages/requests')
                  }, o()),
                    a._scribeAction('mute_user')
                }
              }),
              v()(c()(a), '_handleUnmuteDMUserClick', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addToast,
                    r = t.conversation,
                    i = t.conversationId,
                    o = t.createLocalApiErrorHandler,
                    s = t.unmuteDMUser,
                    c = a.context.loggedInUserId,
                    l = Object(I.i)(r, c),
                    u = l.idStr,
                    d = l.name
                  i &&
                    (s(u, i).then(function () {
                      n({ action: { label: vc, onAction: a._handleMuteDMUserClick(e) }, text: mc({ name: d }) })
                    }, o()),
                    a._scribeAction('unmute_user'))
                }
              }),
              v()(c()(a), '_handleBlockClick', function () {
                a.setState({ showBlockConfirmation: !0, showLeaveConfirmation: !1 })
              }),
              v()(c()(a), '_handleCancelLeave', function () {
                a.setState({ showLeaveConfirmation: !1 })
              }),
              v()(c()(a), '_handleBlockLeave', function () {
                a.setState({ showBlockConfirmation: !1 })
              }),
              v()(c()(a), '_handleConfirmLeave', function () {
                var e,
                  t = a.props,
                  n = t.conversation,
                  r = t.conversationId,
                  i = t.inboxType,
                  o = t.leaveConversation,
                  s = t.location,
                  c = n.type === _.CONVERSATION_TYPE.GROUP ? 'leave_group' : 'delete_thread',
                  l = null != n && n.participants ? Object.keys(n.participants).length : 0,
                  u = (null == s || null === (e = s.state) || void 0 === e ? void 0 : e.position) || 0,
                  d = {
                    conversation_type: (null == n ? void 0 : n.type) === _.CONVERSATION_TYPE.GROUP ? 1 : 0,
                    conversation_id: r,
                    conversation_participant_count: l,
                    position: u,
                    inbox_type: Object(I.h)(i),
                    entry_point: ft.b.REQUEST_ACTION_SHEET,
                  }
                a.setState({ showLeaveConfirmation: !1 }),
                  o({ conversationId: r }),
                  a._scribeAction(c, d),
                  a._returnToInbox()
              }),
              v()(c()(a), '_returnToInbox', function () {
                var e = a.props,
                  t = e.history,
                  n = e.inboxType
                t.push(Object(I.e)(n))
              }),
              v()(c()(a), '_handleConfirmAccept', function () {
                var e,
                  t = a.props,
                  n = t.acceptConversation,
                  r = t.conversation,
                  i = t.conversationId,
                  o = t.inboxType,
                  s = t.location,
                  c = t.scribeAction,
                  l = t.scribeNamespace,
                  u = r.type === _.CONVERSATION_TYPE.GROUP,
                  d = null != r && r.participants ? Object.keys(r.participants).length : 0,
                  p = (null == s || null === (e = s.state) || void 0 === e ? void 0 : e.position) || 0
                i &&
                  (n(i),
                  c(uc(uc({}, l), {}, { action: 'accept' }), {
                    conversation_id: i,
                    conversation_type: u ? 1 : 0,
                    conversation_participant_count: d,
                    entry_point: ft.b.REQUEST_ACTION_SHEET,
                    inbox_type: Object(I.h)(o),
                    position: p,
                  }))
              }),
              v()(c()(a), '_handleAcceptConversation', function () {
                a._handleConfirmAccept()
              }),
              v()(c()(a), '_createBlockUserHandler', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addToast,
                    r = t.block,
                    i = t.createLocalApiErrorHandler
                  a.setState({ showBlockConfirmation: !1 }),
                    r(e).then(function () {
                      n({ action: { label: oc.c, onAction: a._createUnblockUserHandler(e) }, text: oc.a })
                    }, i(Xs.a)),
                    a._scribeAction('block')
                }
              }),
              v()(c()(a), '_createUnblockUserHandler', function (e) {
                return function () {
                  var t = a.props,
                    n = t.createLocalApiErrorHandler
                  ;(0, t.unblock)(e).catch(n(rc.a)), a._scribeAction('unblock')
                }
              }),
              (a.state = { showLeaveConfirmation: !1, showBlockConfirmation: !1 }),
              a
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._scribeAction('impression')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.conversation,
                    t = this.state,
                    n = t.showBlockConfirmation,
                    r = t.showLeaveConfirmation,
                    i = (e && e.type) === _.CONVERSATION_TYPE.GROUP
                  return y.createElement(
                    y.Fragment,
                    null,
                    y.createElement(ge.a, { style: Rc.root }, this._renderCopy(i), this._renderActionButtons(i)),
                    ts.b.isKaiOS()
                      ? y.createElement(Ys.a, {
                          leftText: fc,
                          onLeftClick: this._handleLeaveConversationClick,
                          onRightClick: this._handleAcceptConversation,
                          rightText: pc,
                        })
                      : null,
                    r ? this._renderLeaveConfirmationSheet() : null,
                    n ? this._renderBlockConfirmationSheet() : null,
                  )
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(_c, 'contextType', $.a)
      var Rc = re.a.create(function (e) {
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
            reportlink: { marginLeft: e.spaces.space4 },
            actionsContainer: { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' },
            actionFullWidth: { width: '100%' },
            actionHalfWidth: { width: 'calc(50% - '.concat(e.spaces.space4, ')') },
            actionMarginRight: { marginRight: e.spaces.space4 },
            actionMarginLeft: { marginLeft: e.spaces.space4 },
            actionMarginTop: { marginTop: e.spaces.space12 },
            actionMarginBottom: { marginBottom: e.spaces.space12 },
          }
        }),
        Oc = Object(sc.c)({ element: 'untrusted_interstitial' })(tc(_c)),
        Ec = n('rFBM'),
        Sc = n('jTgF')
      function wc(e, t) {
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
      function Cc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? wc(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : wc(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function xc(e) {
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
      var Ac = y.createElement(Qt.a, null),
        kc = Je.a.badb01a0,
        Tc = Je.a.e3275464,
        Ic = Je.a.d6b11d9c,
        Pc = Je.a.i7ca1446,
        jc = function (e) {
          return e && (e.tweet || e.media)
        },
        Mc = function (e) {
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
        Dc = (function (e) {
          u()(n, e)
          var t = xc(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(c()(a), '_composer', y.createRef()),
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
                    ts.b.isMobileOS() && a._fetchConversation(e)
                  })
                  .catch(r({ showToast: !0 }))
              }),
              v()(c()(a), '_renderActions', function () {
                var e = a.props,
                  t = e.conversation,
                  n = e.conversationId,
                  r = e.history,
                  i = e.inboxType,
                  o = e.location,
                  s = e.scribeAction
                return t && a._isUntrustedConversation(t)
                  ? t.read_only
                    ? null
                    : n &&
                      y.createElement(Oc, {
                        acceptConversation: a._acceptConversation,
                        conversation: t,
                        conversationId: n,
                        history: r,
                        inboxType: i,
                        leaveConversation: a._leaveConversation,
                        location: o,
                        scribeAction: s,
                      })
                  : y.createElement(
                      y.Fragment,
                      null,
                      a._renderComposerBar(),
                      ts.b.isKaiOS()
                        ? y.createElement(Ys.a, {
                            leftText: Pc,
                            onLeftClick: a._handleInfoClick,
                            onRightClick: a._handleComposeClick,
                            rightText: kc,
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
                return y.createElement(
                  Ra,
                  { key: n },
                  y.createElement(
                    Ec.a,
                    { allowDragDrop: !jc(u), onFilesAdded: a._handleDragDrop, style: Lc.dragDrop },
                    y.createElement(
                      Fo.a,
                      {
                        style: [
                          Lc.scrollView,
                          !Object(Ks.a)() && !a._isUntrustedConversation(t) && { paddingBottom: d },
                        ],
                      },
                      s && t
                        ? y.createElement(Ls, {
                            conversation: t,
                            drawerHeader: r,
                            inboxType: i,
                            isWide: o,
                            onHistoryRequest: a._handleHistoryRequest,
                            perspective: s,
                            scribeNamespace: c,
                            style: Lc.activity,
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
                Object(as.a)(
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
                Object(as.a)(
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
                  R = a.state.attachment,
                  O = R && R.media,
                  E = null != c && c.participants ? Object.keys(c.participants).length : 0,
                  S = (null == c ? void 0 : c.type) === _.CONVERSATION_TYPE.GROUP,
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
                    x = null == R || null === (C = R.media) || void 0 === C ? void 0 : C.mediaFile,
                    A = null != x && x.isVideo ? 'video' : null != x && x.isGif ? 'gif' : 'photo'
                  w = x ? A : t ? 'text' : 'unknown'
                }
                return (
                  l &&
                    v(Cc(Cc({}, y), {}, { element: w, action: 'send_dm' }), {
                      conversation_id: l,
                      conversation_participant_count: E,
                      conversation_type: S ? ft.g.GROUP : ft.g.ONE_TO_ONE,
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
                        Cc(
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
                          if ((a.setState({ isSending: !1 }), !Object(Sc.d)(e) || e.code !== Ws.b.CANCELED))
                            if (Object(Sc.d)(e)) {
                              var t = Object(Sc.b)(e, Ic)
                              t && o(t)
                            } else u(zs.b)(e)
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
                        v(Cc(Cc({}, y), {}, { element: w, action: 'send_dm' }), {
                          conversation_id: e,
                          conversation_participant_count: h ? h.length + 1 : 0,
                          conversation_type: ft.g.GROUP,
                        }),
                          a.setState({ attachment: null, isSending: !1 }),
                          p.replace('/messages/'.concat(e))
                      }, u(zs.b)),
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
                attachment: Mc(e),
                composerHeight: re.a.theme.componentDimensions.appBarHeight,
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
                  Gs()(function () {
                    return Object(Us.a)().then(function (t) {
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
                  Object(g.h)().then(function (n) {
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
                    (this._updatePolling = new Qs.a(this._fetchUpdatesIfNeeded, { interval: t }))
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
                      e.fetchStatus === w.a.LOADED && o !== w.a.LOADED && a && this._fetchConversation(a))
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t = this.props.media,
                    n = e.media
                  Object(ye.a)(t, n) || this.setState({ attachment: Mc(e) })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.fetchStatus
                  return y.createElement(
                    Ts.a,
                    { style: [Lc.root, ts.b.isKaiOS() && Lc.kaiOSFix] },
                    y.createElement(Ns.a, {
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
                    g = v.attachment,
                    b = v.isSending,
                    _ = this.props.prefillText || o
                  return null != r && r.read_only
                    ? null
                    : y.createElement(Fs.a, {
                        attachment: g,
                        conversationId: i,
                        disabled: l,
                        dtabBarInfo: s,
                        history: c,
                        isCardPreviewTombstoned: Object(Hs.a)(n),
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
                        primaryActionIcon: Ac,
                        primaryActionLabel: Tc,
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
                    .catch(n(Object(N.a)(e)))
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
                    l = !r || !r.type || r.type === _.CONVERSATION_TYPE.GROUP,
                    u = r && r.participants && Object.keys(r.participants).length <= 1
                  return c || l || u ? Promise.resolve() : n(e, s).catch(i({ showToast: !1 }))
                },
              },
            ]),
            n
          )
        })(y.PureComponent)
      v()(Dc, 'contextType', $.a), v()(Dc, 'defaultProps', { isNewGroupConversation: !1, typeaheadWrapper: Vs.a })
      var Lc = re.a.create(function (e) {
        return {
          root: { flexGrow: 1 },
          activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: '100%' },
          kaiOSFix: { paddingBottom: e.spaces.space20 },
          dragDrop: { flexGrow: 1 },
          scrollView: { flexGrow: 1 },
        }
      })
      t.a = Object(sc.c)()(F(Dc))
    },
    RJrc: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n('3XMw'),
        a = n.n(i),
        o = n('MWbm'),
        s = n('Qwev'),
        c = n('rHpw'),
        l = a.a.ffde2fdb,
        u = c.a.create(function (e) {
          return { spinner: { alignItems: 'center', marginVertical: '30px' } }
        })
      t.a = function () {
        return r.createElement(o.a, { style: u.spinner }, r.createElement(s.a, { accessibilityLabel: l }))
      }
    },
    'V/6K': function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = r.createContext({ isDrawer: !1 })
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
        i = n('aWyx'),
        a = n('XnpN'),
        o = n('3XMw'),
        s = n.n(o),
        c = n('rHpw'),
        l = n('TIdA'),
        u = n('A91F'),
        d = n('jhWN'),
        p = n('9Xij'),
        f = n('Znyr'),
        h = n('cm6r'),
        m = n('U+bB'),
        v = n('MWbm'),
        y = s.a.fd48249b,
        g = c.a.create(function (e) {
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
        b = c.a.create(function (e) {
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
        _ = c.a.create(function (e) {
          return {
            container: { flexDirection: 'column' },
            top: { flex: 1, marginBottom: e.borderWidths.small },
            bottom: { flex: 1 },
          }
        }),
        R = function (e) {
          var t = e.left,
            n = e.right
          return r.createElement(
            v.a,
            { style: b.container },
            r.createElement(v.a, { style: b.left }, t),
            r.createElement(v.a, { style: b.right }, n),
          )
        },
        O = function (e) {
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
              i = e.withVDLRefresh ? 'xxxLarge' : 'xxLarge'
            return r.createElement(
              v.a,
              { key: t.id_str, style: g.container },
              r.createElement(d.a, { size: n || i, uri: t.profile_image_url_https }),
            )
          },
          n = function (e) {
            var t = e.length,
              n = e.map(function (e, n) {
                var i = 2 === t || (3 === t && 0 === n) ? 0.5 : 1
                return r.createElement(
                  v.a,
                  { key: e.id_str, style: g.container },
                  r.createElement(d.a, {
                    aspectRatio: i,
                    shape: 'none',
                    size: 'custom',
                    uri: e.profile_image_url_https,
                  }),
                )
              })
            if (2 === t) return r.createElement(p.a, { ratio: 1 }, r.createElement(R, { left: n[1], right: n[0] }))
            var i = r.createElement(O, { bottom: n[2], top: n[1] }),
              a = n[0]
            return r.createElement(R, { left: i, right: a })
          },
          o = e.conversation,
          s = e.link,
          b = e.perspective,
          _ = e.withBadge,
          E = o && o.avatar_image_https,
          S = o
            ? Object(a.a)(o, b).map(function (e) {
                return e.user
              })
            : [],
          w = S.slice(0, 3),
          C =
            (function (e) {
              var t = e && e.avatar && e.avatar.image && e.avatar.image.original_info
              return t
                ? r.createElement(l.a, {
                    accessibilityLabel: '',
                    aspectMode: u.a.SQUARE,
                    backgroundColor: c.a.theme.colors.gray50,
                    image: t,
                    rounded: !0,
                  })
                : null
            })(o) ||
            (function (e) {
              return e ? r.createElement(m.a, { source: e }) : null
            })(E) ||
            (function (e) {
              var i = e.length
              return 0 === i ? null : 1 === i ? t(e[0]) : r.createElement(v.a, { style: g.circle }, n(e))
            })(w),
          x =
            s ||
            (function (e, t) {
              if (e)
                return e.type === i.a.GROUP
                  ? '/messages/'.concat(e.conversation_id, '/participants')
                  : e.type === i.a.ONE_TO_ONE
                  ? '/'.concat(t[0].screen_name)
                  : void 0
            })(o, S),
          A = _ && null != o && o.participants ? Object.keys(o.participants).length - 1 : 0
        return C
          ? r.createElement(
              r.Fragment,
              null,
              r.createElement(p.a, { ratio: 1 }, x ? r.createElement(h.a, { interactiveStyles: null, link: x }, C) : C),
              A
                ? (function (e) {
                    var t = e.badgeCount
                    return r.createElement(
                      v.a,
                      { style: g.itemAccessory },
                      r.createElement(f.a, {
                        count: t,
                        standalone: !0,
                        style: g.userDecoration,
                        textColor: 'normal',
                        truncatedCountFormatter: function () {
                          return ''
                        },
                        unreadCountLabel: y,
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
        return T
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
        O = n('nT9l'),
        E = n('3XMw'),
        S = n.n(E),
        w = 'image',
        C = n('TIdA'),
        x = n('a6qo')
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
            r = g()(e)
          if (t) {
            var i = g()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return v()(this, n)
        }
      }
      var k = S.a.f93bb3ee,
        T = (function (e) {
          h()(n, e)
          var t = A(n)
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
                return R.createElement(
                  R.Fragment,
                  null,
                  R.createElement(
                    C.a,
                    i()({}, l, { accessibilityLabel: s, onVariantSelection: n, previewMode: r, testID: w }),
                  ),
                  c ? R.createElement(x.a, { align: 'left', altLabel: s }) : null,
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
                  return R.createElement(O.a, {
                    acceptLabel: k,
                    hideAcceptOverlay: t,
                    renderContent: this._renderContent,
                    resourceId: 'string' == typeof n ? n : n.url,
                  })
                },
              },
            ]),
            n
          )
        })(R.Component)
    },
    tZH3: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        i = n('3XMw'),
        a = n.n(i),
        o = n('MWbm'),
        s = n('CKsB'),
        c = n('/yvb'),
        l = n('rHpw'),
        u = n('hiGS'),
        d = n('pu5c'),
        p = n('zIWA'),
        f = a.a.fcd4d489,
        h = a.a.gbed8594,
        m = a.a.g9074da4,
        v = a.a.ad63377d,
        y = a.a.h09b49f7,
        g = a.a.i6b19b07,
        b = a.a.j7bb1a42,
        _ = a.a.ea200ba6,
        R = a.a.cfd2f35d,
        O = function (e) {
          var t = e.dismiss,
            n = e.flatBorders,
            i = e.isGroup,
            a = e.onBlockClick,
            l = e.onDeleteClick,
            O = e.onReportClick,
            S = e.requestorScreenName,
            w = e.showBlock,
            C = e.showCancel,
            x = e.showDelete,
            A = r.useCallback(
              function () {
                O && O(), t()
              },
              [t, O],
            ),
            k = r.useCallback(
              function () {
                a && a(), t()
              },
              [t, a],
            ),
            T = r.useCallback(
              function () {
                l && l(), t()
              },
              [t, l],
            )
          return r.createElement(
            o.a,
            { accessibilityRole: 'dialog', style: n ? E.flatCorners : E.roundCorners },
            x
              ? r.createElement(s.a, {
                  Icon: u.a,
                  actionSubText: y,
                  actionText: i ? m : v,
                  onClick: T,
                  textColor: 'red500',
                })
              : null,
            w
              ? r.createElement(s.a, { Icon: d.a, actionSubText: h, actionText: f({ screenName: S }), onClick: k })
              : null,
            r.createElement(s.a, { Icon: p.a, actionSubText: _, actionText: i ? g : b({ screenName: S }), onClick: A }),
            C ? r.createElement(c.a, { onPress: t, style: E.cancelButton, type: 'primaryOutlined' }, R) : null,
          )
        }
      O.defaultProps = { isGroup: !1, flatBorders: !1, showBlock: !1, showCancel: !1, showDelete: !1 }
      var E = l.a.create(function (e) {
        return {
          roundCorners: { borderRadius: e.borderRadii.xLarge },
          flatCorners: { borderRadius: e.borderRadii.none },
          cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
        }
      })
      t.a = O
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
        _ = n('1YZw'),
        R = n('zh9S'),
        O = n('P1r1'),
        E = n('AspN'),
        S = n('rxPX'),
        w = Object(S.a)()
          .propsFromState(function () {
            return { dataSaverMode: O.k }
          })
          .propsFromActions(function () {
            return {
              addMedia: E.b,
              addToast: _.b,
              processMultipleMedia: E.g,
              removeMediaUpload: E.i,
              scribeAction: R.c,
              preUploadMedia: E.e,
            }
          }),
        C = n('wpu3'),
        x = n('cOB2'),
        A = n('MWbm'),
        k = n('0FVZ'),
        T = n('Oe3h'),
        I = n('rHpw')
      var P = function (e) {
          var t = e.accessibilityLabel,
            n = e.accessibilityRole,
            r = e.children,
            a = e.onLayout,
            o = e.sideNavPresent,
            s = e.style,
            c = b.useContext(x.a)
          return o
            ? b.createElement(
                b.Fragment,
                null,
                b.createElement(A.a, { accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s }, r),
              )
            : b.createElement(
                k.a.BottomComposer,
                null,
                b.createElement(T.a, { id: 'DMComposerWrapper' }, function (e, o) {
                  return b.createElement(
                    A.a,
                    i()({ ref: e() }, o({ accessibilityLabel: t, accessibilityRole: n, onLayout: a, style: s })),
                    r,
                    b.createElement(A.a, { style: !1 === c.keyboardVisible && j.offsetBottom }),
                  )
                }),
              )
        },
        j = I.a.create(function () {
          return { offsetBottom: { paddingBottom: I.a.iPhoneOffsetBottom } }
        }),
        M = (n('2G9S'), n('jQ/y'), n('HPNB')),
        D = n('htQn'),
        L = n('t62R')
      function B(e) {
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
      var F = (function (e) {
          p()(n, e)
          var t = B(n)
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
                  return b.createElement(
                    D.a,
                    {
                      accessibilityRole: 'button',
                      onClick: this._handleClick,
                      style: [N.root, n && N.isWide, !n && N.isNarrow],
                    },
                    b.createElement(L.b, { weight: 'bold' }, r),
                    b.createElement(L.b, { color: 'gray700', size: 'subtext2' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(b.Component),
        N = I.a.create(function (e) {
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
        U = F,
        H = n('cHvH'),
        W = n('mw9i')
      function V(e) {
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
      var z = (function (e) {
          p()(n, e)
          var t = V(n)
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
                  return b.createElement(H.a, null, function (r) {
                    var i = r.windowWidth,
                      a = M.a.isTwoColumnLayout(i),
                      o = [a && q.isWide, a && n && q.oneButtonOnly, !a && q.isNarrow]
                    return b.createElement(
                      W.a,
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
                  return b.createElement(U, {
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
        })(b.Component),
        q = I.a.create(function (e) {
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
        G = z,
        K = n('krmn'),
        Y = n('cIoY'),
        Q = n('w3n3'),
        X = n('MLl7'),
        J = n('3XMw'),
        Z = n.n(J),
        $ = n('J2UM'),
        ee = n('VPdC'),
        te = n('pKoL'),
        ne = n('eyty'),
        re = n('oQhu'),
        ie = n('JYMr')
      function ae(e) {
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
      var oe = [
          { waitMs: 1e3, progress: 0.1 },
          { waitMs: 1400, progress: 0.3 },
          { waitMs: 1800, progress: 0.5 },
          { waitMs: 2400, progress: 0.6 },
          { waitMs: 3e3, progress: 0.9 },
        ],
        se = (function (e) {
          p()(n, e)
          var t = ae(n)
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
                    t = e >= 0 && e < oe.length ? oe[e].progress : 0
                  return b.createElement(ie.a, { progress: t })
                },
              },
              {
                key: '_scheduleNextStep',
                value: function (e) {
                  var t = this
                  e < oe.length &&
                    (this._currentTimeoutId = setTimeout(function () {
                      ;(t._currentTimeoutId = void 0), t.setState({ currentStepIndex: e }), t._scheduleNextStep(e + 1)
                    }, oe[e].waitMs))
                },
              },
            ]),
            n
          )
        })(b.Component)
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
            r = v()(e)
          if (t) {
            var i = v()(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return h()(this, n)
        }
      }
      var le = (function (e) {
          p()(n, e)
          var t = ce(n)
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
                    ? b.createElement(se, null)
                    : b.createElement(ie.a, { progress: t ? Math.max(r, 0.02) : 0 })
                },
              },
            ]),
            n
          )
        })(b.PureComponent),
        ue = n('Dtul'),
        de = n('Es6L'),
        pe = 'dmComposerAttachments',
        fe = 'dmComposerTextInput',
        he = 'dmComposerSendButton',
        me = n('GZwR'),
        ve = n('aITJ'),
        ye = n('6OUF'),
        ge = n('9Xij'),
        be = n('/yvb'),
        _e = n('v6aA'),
        Re = n('gpVt'),
        Oe = n('Lsrn'),
        Ee = n('k/Ka')
      function Se(e, t) {
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
      function we(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Se(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Ce = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ee.a)(
          'svg',
          we(
            we({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Oe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M19 13.5H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0 6H5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zm0-12H5c-.828 0-1.5-.672-1.5-1.5S4.172 4.5 5 4.5h14c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z',
            }),
          ),
        )
      }
      Ce.metadata = { width: 24, height: 24 }
      var xe = Ce
      function Ae(e, t) {
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
      function ke(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ae(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Te = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Ee.a)(
          'svg',
          ke(
            ke({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Oe.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          b.createElement(
            'g',
            null,
            b.createElement('path', {
              d: 'M19 13H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0 6H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1zm0-12H5c-.553 0-1-.447-1-1s.447-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z',
            }),
          ),
        )
      }
      Te.metadata = { width: 24, height: 24 }
      var Ie = Te,
        Pe = n('iySH')
      function je(e, t) {
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
      function Me(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? je(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : je(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function De(e) {
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
      var Le = Z.a.ee230734,
        Be = Z.a.ca0ce0e4,
        Fe = Z.a.cdcebd22,
        Ne = Z.a.ic8c615d,
        Ue = Z.a.a04077c4,
        He = function (e) {
          return !(!e || !e.media)
        },
        We = Object(C.b)({ maxNumberOfPhotos: 1 }),
        Ve = (function (e) {
          p()(n, e)
          var t = De(n)
          function n(e, r) {
            var a, s, c
            o()(this, n),
              (c = t.call(this, e, r)),
              g()(u()(c), '_handleLayout', function (e) {
                var t = c.props.onHeightChange,
                  n = c.state.mediaButtonsCollapsible,
                  r = e.nativeEvent.layout
                r &&
                  (Object(de.a)() || (t && t(r.height)),
                  r.width <= I.a.theme.breakpoints.small && !n
                    ? c.setState({ mediaButtonsCollapsible: !0 })
                    : r.width > I.a.theme.breakpoints.small && n && c.setState({ mediaButtonsCollapsible: !1 }))
              }),
              g()(u()(c), '_renderQuickReplyPicker', function () {
                var e = c.props.quickReplyOptions,
                  t = c.state.isQuickReplyOpen
                return e && t
                  ? b.createElement(G, { onOptionChoose: c._handleQROptionSelection, quickReplyOptions: e })
                  : null
              }),
              g()(u()(c), '_renderComposeBox', function () {
                return b.createElement(A.a, { style: ze.composeBoxContainer }, c._renderMainContent())
              }),
              g()(u()(c), '_renderMainContent', function () {
                var e = c.props,
                  t = e.richTextInputContext,
                  n = e.typeaheadWrapper,
                  r = c.state.value,
                  i = n
                return i
                  ? b.createElement(
                      i,
                      {
                        contextText: r,
                        isInline: !0,
                        onTextUpdated: t ? c._handleRichTextChange : c._handlePlainTextChange,
                        onTypeaheadStateChange: c._handleTypeaheadStateChange,
                        source: me.d.ComposeMessage,
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
                  o = ve.b.isKaiOS() ? Fe : r || Be,
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
                return b.createElement(
                  ye.a,
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
                      style: ze.composeInput,
                      testID: fe,
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
                Object(re.a)(function (e) {
                  return function (t) {
                    null == e || e(t), c._handleRichTextChange(t)
                  }
                }),
              ),
              g()(
                u()(c),
                '_getHandlePlainTextChange',
                Object(re.a)(function (e) {
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
                  m = Object(Re.b)(o)
                return b.createElement(
                  b.Fragment,
                  null,
                  d
                    ? b.createElement(
                        A.a,
                        { style: ze.attachmentContainer, testID: pe },
                        b.createElement(
                          ge.a,
                          { ratio: u / l, style: ze.aspectContainer },
                          b.createElement(
                            A.a,
                            { style: ze.mediaPreviewContainer },
                            b.createElement(te.a, {
                              accessibilityLabel: f || h,
                              mediaItem: d,
                              onClick: c._canEditImage ? c._handleClickMediaDetail : void 0,
                              onEdit: c._canEditImage || c._canEditVideo ? c._handleClickMediaDetail : void 0,
                              onRemove: c._handleRemoveMedia(d.id),
                              resizeIfNeeded: 'width',
                              style: ze.mediaPreview,
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
                          b.createElement(
                            A.a,
                            { style: ze.gifAttribution },
                            b.createElement(Y.a, { gifUrl: t.gifUrl, provider: t.provider }),
                          ),
                      )
                    : m && !i
                    ? b.createElement(Re.a, {
                        conversationId: n,
                        isCardPreviewTombstoned: r,
                        style: ze.cardPreviewContainer,
                        urls: m,
                      })
                    : null,
                )
              }),
              g()(u()(c), '_renderEmojiPicker', function () {
                return c.props.withEmojiPicker && ve.b.isDesktopOS()
                  ? b.createElement(K.a, {
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
                  ? b.createElement(
                      be.a,
                      {
                        accessibilityLabel: r,
                        disabled: c._isSendDisabled(),
                        hoverLabel: { label: r },
                        icon: n || void 0,
                        onPress: c._handlePrimaryAction,
                        size: 'medium',
                        style: ze.actionButton,
                        testID: he,
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
                return b.createElement(
                  be.a,
                  {
                    accessibilityLabel: t,
                    disabled: !i,
                    onPress: c._handleSecondaryAction,
                    style: ze.actionButton,
                    type: 'primaryOutlined',
                  },
                  c.props.secondaryActionLabel,
                )
              }),
              g()(u()(c), '_renderQRToggleButton', function () {
                var e = c.state.isQuickReplyOpen
                return b.createElement(be.a, {
                  accessibilityLabel: Ne,
                  icon: e ? b.createElement(xe, null) : b.createElement(Ie, null),
                  onPress: c._handleQuickReplyPickerToggle,
                  size: 'medium',
                  style: ze.actionButton,
                  type: 'brandText',
                })
              }),
              g()(u()(c), '_renderComposer', function () {
                var e = c.props.attachment,
                  t = He(e),
                  n = c._renderComposeBox(),
                  r = c._renderPrimaryActionButton(t),
                  i = c._renderSecondaryActionButton()
                return b.createElement(
                  A.a,
                  { style: [ze.composer, t && ze.composerWithAttachment] },
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
                return b.createElement(
                  A.a,
                  { style: ze.uploadButtons },
                  a
                    ? b.createElement(be.a, {
                        accessibilityLabel: Le,
                        icon: b.createElement(Pe.a, null),
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
                  t(Me(Me({}, n), {}, { component: 'dm_composer', element: 'toggle', action: 'expand' }))
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
                n(e, { location: ne.d.Dm }).then(function (e) {
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
                    : (r({ text: Ue }), u(t))
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
                return !He(c.props.attachment) && We(e)
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
                  a = He(t),
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
                  Object($.a)().then(this._detectKeyboardOrMouse), (this._unlockReload = ue.a.acquire())
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
                    s = a || Be,
                    c = Object(de.a)(),
                    l = c && t && (t.dtabAll || t.ttsToken) && !t.hide
                  return b.createElement(
                    P,
                    {
                      accessibilityLabel: s,
                      accessibilityRole: 'complementary',
                      onLayout: this._handleLayout,
                      sideNavPresent: c,
                      style: [ze.root, l && ze.dtabOffset, o],
                    },
                    b.createElement(le, { isSending: n, isUploading: r, progress: n ? Math.max(i, 0.02) : 0 }),
                    this._renderComposer(),
                    this._renderQuickReplyPicker(),
                  )
                },
              },
              {
                key: '_renderMediaPicker',
                value: function () {
                  return b.createElement(ee.a, {
                    onChange: this._handleAddMediaFiles,
                    style: ze.mediaPicker,
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
                  return b.createElement(Q.a, {
                    dmConversationId: t,
                    enabled: !0,
                    gifSearchKeySource: X.a.DMComposition,
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
        })(b.Component)
      g()(Ve, 'contextType', _e.a),
        g()(Ve, 'defaultProps', { prefillText: '', withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0 })
      var ze = I.a.create(function (e) {
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
      t.a = w.forwardRef(Ve)
    },
    zQEV: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return h
        })
      n('z84I'), n('ho0z')
      var r = n('ERkP'),
        i = n('t62R'),
        a = n('aWyx'),
        o = n('3XMw'),
        s = n.n(o),
        c = s.a.c1d4ac83,
        l = s.a.abc7b032,
        u = s.a.i263b293,
        d = function (e) {
          var t = e.children,
            n = e.conversationId
          return r.createElement(i.b, { link: '/messages/'.concat(n, '/participants') }, t)
        },
        p = function (e, t) {
          return e >= 2
            ? r.createElement(
                s.a.I18NFormatMessage,
                { $i18n: 'e3534476' },
                r.createElement(d, { conversationId: t }, s.a.d1242bcc({ count: e })),
              )
            : r.createElement(s.a.I18NFormatMessage, { $i18n: 'b6656850', count: e })
        },
        f = function (e) {
          var t = e.entry,
            n = e.users
          return t.participants
            ? r.createElement(
                'span',
                null,
                t.participants.map(function (e, t) {
                  var a = e.user_id,
                    o = n[a]
                  return o
                    ? r.createElement('span', { key: t }, t > 0 ? ', ' : null, r.createElement(i.b, null, o.name))
                    : null
                }),
              )
            : null
        },
        h = function (e, t, n, o) {
          var d,
            p = n === e.by_user_id
          switch (t) {
            case a.b.CONVERSATION_AVATAR_UPDATE:
              return (d = e.by_user_id && o[e.by_user_id] && o[e.by_user_id].name)
                ? p
                  ? c
                  : (function (e) {
                      return r.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'bff29c94' },
                        r.createElement(i.b, null, e),
                      )
                    })(d)
                : l
            case a.b.CONVERSATION_NAME_UPDATE:
              var h = r.createElement(i.b, null, e.conversation_name)
              return (d = e.by_user_id && o[e.by_user_id] && o[e.by_user_id].name)
                ? p
                  ? (function (e) {
                      return r.createElement(s.a.I18NFormatMessage, { $i18n: 'b16e4d45' }, e)
                    })(h)
                  : (function (e, t) {
                      return r.createElement(
                        s.a.I18NFormatMessage,
                        { $i18n: 'c5760698' },
                        r.createElement(i.b, null, e),
                        t,
                      )
                    })(d, h)
                : (function (e) {
                    return r.createElement(s.a.I18NFormatMessage, { $i18n: 'a72730a0' }, e)
                  })(h)
            case a.b.JOIN_CONVERSATION:
              return (d = e.sender_id && o[e.sender_id] && o[e.sender_id].name)
                ? (function (e) {
                    return r.createElement(s.a.I18NFormatMessage, { $i18n: 'fa95b019' }, r.createElement(i.b, null, e))
                  })(d)
                : u
            case a.b.PARTICIPANTS_LEAVE:
              return (function (e) {
                return r.createElement(s.a.I18NFormatMessage, { $i18n: 'fc10875e' }, e)
              })(r.createElement(f, { entry: e, users: o }))
            case a.b.PARTICIPANTS_JOIN:
              return (function (e, t) {
                return e
                  ? r.createElement(s.a.I18NFormatMessage, { $i18n: 'a4bc88c2' }, r.createElement(i.b, null, e), t)
                  : r.createElement(s.a.I18NFormatMessage, { $i18n: 'bfdff0c3' }, t)
              })((d = e.sender_id && o[e.sender_id] && o[e.sender_id].name), r.createElement(f, { entry: e, users: o }))
            default:
              return ''
          }
        }
    },
  },
])
//# sourceMappingURL=WIPED
