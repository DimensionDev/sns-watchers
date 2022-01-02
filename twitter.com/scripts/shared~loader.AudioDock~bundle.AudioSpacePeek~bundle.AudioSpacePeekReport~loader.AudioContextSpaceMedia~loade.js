;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '0nhk': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = (n('7xRU'), n('ERkP')),
        o = n('3XMw'),
        c = n.n(o),
        s = n('dgjd'),
        l = n('/yvb'),
        u = n('rHpw'),
        d = n('fn9Y'),
        p = n('I6Uj')
      function f(e) {
        var t = e.audioSpaceId,
          n = e.type,
          r = Object(s.a)(t),
          a = r.space,
          o = r.utils,
          c = o.hashtags().join(' '),
          l = m
        'icon' === n ? (l = h) : 'icon-borderless' === n && (l = b)
        var u = o.is.replayable ? void 0 : O.dmText,
          d = Boolean(null == a ? void 0 : a.is_employee_only)
        return i.createElement(
          p.a.Custom,
          { ButtonComponent: l, isFixed: e.isFixed, pullRight: e.pullRight, scribeNamespace: y, url: v(t) },
          d ? null : i.createElement(p.a.Action, { scribeNamespace: g.tweet, shareText: c, type: 'tweet' }),
          i.createElement(p.a.Action, { scribeNamespace: g.dm, shareText: u, type: 'dm' }),
          i.createElement(p.a.Action, { scribeNamespace: g.copy, shareText: c, type: 'copy' }),
          i.createElement(p.a.Action, { scribeNamespace: g.via, shareText: c, type: 'via' }),
        )
      }
      function m(e) {
        return i.createElement(
          l.a,
          a()({}, e, { borderColor: 'transparent', style: S.shareButton, type: 'primaryOutlined' }),
          O.share,
        )
      }
      function h(e) {
        return i.createElement(l.a, a()({}, w, { type: 'primaryOutlined' }, e))
      }
      function b(e) {
        return i.createElement(l.a, a()({}, w, e))
      }
      var v = function (e) {
          return 'https://twitter.com/i/spaces/'.concat(e)
        },
        y = { page: 'audiospace', component: 'share_sheet' },
        g = {
          tweet: { element: 'send_tweet', action: 'click' },
          dm: { element: 'send_dm', action: 'click' },
          copy: { element: 'link', action: 'click' },
          via: { element: void 0, action: 'impression' },
        },
        S = u.a.create(function (e) {
          return { shareButton: { width: '100%' } }
        }),
        O = { share: c.a.ifea3114, dmText: c.a.c63dd2cb },
        w = {
          accessibilityLabel: O.share,
          borderColor: 'transparent',
          color: 'text',
          hoverLabel: { label: O.share },
          icon: i.createElement(d.a, null),
          size: 'medium',
        }
    },
    '2C8o': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return v
      }),
        n.d(t, 'c', function () {
          return y
        }),
        n.d(t, 'd', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return R
        })
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = n('RhWx'),
        s = n.n(c),
        l =
          (n('2G9S'),
          n('jwue'),
          n('+oxZ'),
          n('LW0h'),
          n('Ee2X'),
          n('vfdX'),
          n('lZm3'),
          n('z84I'),
          n('i4UL'),
          n('3voH'),
          n('MvUL'),
          n('KqXw'),
          n('+KXO'),
          n('1t7P'),
          n('daRM'),
          n('FtHn'),
          n('Q/sS')),
        u = n('ERkP'),
        d = n('Chkh'),
        p = n('Xda3'),
        f = n('ssnq')
      function m(e, t) {
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
      var h = new f.a({ liveCaptions: [], pastCaptions: [], currentCaptionSequenceId: 0 }),
        b = h
      function v() {
        b.reset()
      }
      function y() {
        var e = l.n()
        return (
          u.useEffect(
            function () {
              if (e === l.c.On) {
                var t = d.a.subscribe(p.a.ChatCaption, w),
                  n = d.a.subscribe(p.a.ServerAudioTranscription, E)
                return function () {
                  t(), n()
                }
              }
            },
            [e],
          ),
          h.useSlice(function (e) {
            return [].concat(s()(e.pastCaptions), s()(e.liveCaptions))
          })
        )
      }
      function g() {
        return h.useSlice(function (e) {
          var t = e.liveCaptions,
            n = e.pastCaptions
          return 0 !== t.length || 0 !== n.length
        })
      }
      function S(e) {
        h.setState(function (t) {
          e.filter(I).forEach(function (e) {
            var n = e.body.body,
              r = e.data.sender.twitter_id,
              a = C(t, r)
            ;-1 === a
              ? P(t, e)
              : (function (e, t) {
                  var n = e.length < t.length ? { longer: t, shorter: e } : { longer: e, shorter: t },
                    r = n.longer,
                    a = n.shorter
                  if (0 === r.length) return 1
                  return (
                    (r.length -
                      (function () {
                        for (
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                            n = Array(t.length + 1)
                              .fill(null)
                              .map(function () {
                                return Array(e.length + 1).fill(null)
                              }),
                            r = 0;
                          r <= e.length;
                          r += 1
                        )
                          n[0][r] = r
                        for (var a = 0; a <= t.length; a += 1) n[a][0] = a
                        for (var i = 1; i <= t.length; i += 1)
                          for (var o = 1; o <= e.length; o += 1) {
                            var c = e[o - 1] === t[i - 1] ? 0 : 1
                            n[i][o] = Math.min(n[i][o - 1] + 1, n[i - 1][o] + 1, n[i - 1][o - 1] + c)
                          }
                        return n[t.length][e.length]
                      })(r, a)) /
                    parseFloat(r.length)
                  )
                })(n, t.liveCaptions[a].text) > 0.1
              ? k(t, e, a)
              : x(t, e, a)
          })
        })
      }
      function O(e) {
        h.setState(function (t) {
          e.filter(I).forEach(function (e) {
            var n = e.data.sender.twitter_id,
              r = C(t, n)
            e.body.final
              ? (function (e, t, n) {
                  var r,
                    a = t.data.sender.twitter_id
                  if (n > -1) {
                    var i = e.liveCaptions.splice(n, 1)
                    r = o()(i, 1)[0].sequenceId
                  } else (e.currentCaptionSequenceId += 1), (r = e.currentCaptionSequenceId)
                  var c = T(t, { final: !0, sequenceId: r })
                  ;(e.pastCaptions = [].concat(s()(e.pastCaptions), [c])), j(e, a, t.timestamp)
                })(t, e, r)
              : -1 === r
              ? P(t, e)
              : !(function (e, t, n) {
                  var r = !1,
                    a = e.liveCaptions[n].text,
                    i = t.body.body
                  if (!t.body.final && i.length > 0 && a.length > 0) {
                    r = i.length / a.length < 0.2
                  }
                  return r
                })(t, e, r)
              ? k(t, e, r)
              : x(t, e, r)
          })
        })
      }
      function w(e) {
        return S(e), { clearHeapForMessageType: !0 }
      }
      function E(e) {
        return O(e), { clearHeapForMessageType: !0 }
      }
      function P(e, t) {
        var n = t.data.sender.twitter_id
        e.currentCaptionSequenceId += 1
        var r = T(t, { sequenceId: e.currentCaptionSequenceId })
        return e.liveCaptions.push(r), j(e, n, t.timestamp), r
      }
      function k(e, t, n) {
        var r = e.liveCaptions.splice(n, 1),
          a = o()(r, 1)[0],
          i = T(t, { sequenceId: a.sequenceId, timestamp: a.timestamp })
        return e.liveCaptions.push(i), i
      }
      function j(e, t, n) {
        e.liveCaptions
          .filter(function (e) {
            return !(e.speaker.id_str === t) && n - e.timestamp > 250
          })
          .forEach(function (t) {
            var n = e.liveCaptions.findIndex(function (e) {
                return e.sequenceId === t.sequenceId
              }),
              r = e.liveCaptions.splice(n, 1),
              a = o()(r, 1)[0]
            e.pastCaptions.push(a)
          })
      }
      function x(e, t, n) {
        var r = t.data.sender.twitter_id,
          a = e.liveCaptions.splice(n, 1),
          i = o()(a, 1)[0]
        ;(i.final = !0), (e.pastCaptions = [].concat(s()(e.pastCaptions), [i]))
        var c = P(e, t)
        return j(e, r, t.timestamp), c
      }
      function C(e, t) {
        return e.liveCaptions.findIndex(function (e) {
          return e.speaker.id_str === t
        })
      }
      function I(e) {
        var t = e.body.body
        return !!t && t.length > 0
      }
      function R(e) {
        var t = e.body.body,
          n = e.type
        return p.a.Chat === n && t.startsWith('[cc]')
      }
      function T(e, t) {
        var n = e.body.final,
          r = e.data,
          i = r.sender,
          o = r.sender.twitter_id,
          c = e.timestamp,
          s = e.body.body,
          l = t.sequenceId
        return (
          (s = s.replace(/^\[cc\]\s?/, '')),
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? m(Object(n), !0).forEach(function (t) {
                    a()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : m(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })(
            {
              final: n,
              sequenceId: l || c,
              speaker: {
                id_str: o,
                name: i.display_name,
                profile_image_url_https: i.profile_image_url,
                screen_name: i.username,
              },
              text: s,
              timestamp: c,
            },
            t,
          )
        )
      }
    },
    '4EYz': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return w
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('uFXj'), n('ERkP')),
        s = n('tM6R'),
        l = n('fs1G'),
        u = n('0nhk'),
        d = n('MWbm'),
        p = n('t62R'),
        f = n('Rumh'),
        m = n('/yvb'),
        h = n('efqG'),
        b = n('cm6r'),
        v = n('rHpw'),
        y = n('3XMw'),
        g = n.n(y),
        S = n('hOZg'),
        O = n('7Mjr')
      function w(e) {
        if (e.count < 1) return null
        var t = { count: e.count, labelType: 'otherListeners' }
        return c.createElement(
          d.a,
          { style: x.otherParticipantsWrapper },
          c.createElement(
            P,
            e,
            c.createElement(
              d.a,
              { style: x.otherParticipantsContainer },
              c.createElement(
                d.a,
                { style: x.otherParticipantsText },
                c.createElement(p.b, { size: j.fontSize, weight: 'bold' }, c.createElement(f.a.ParticipantsCount, t)),
              ),
              c.createElement(k, e),
            ),
          ),
        )
      }
      function E(e) {
        var t = e.audioSpaceId,
          n = e.dismiss,
          r = e.type,
          a = o()(e, ['audioSpaceId', 'dismiss', 'type']),
          i = c.createElement(
            c.Fragment,
            null,
            c.createElement(
              d.a,
              { style: x.popoverSheetDescription },
              c.createElement(
                p.b,
                { color: 'gray700', size: 'body' },
                c.createElement(
                  g.a.I18NFormatMessage,
                  { $i18n: 'b9c4cfcb' },
                  c.createElement(p.b, { color: 'normal', link: s.a.help, withUnderline: !0 }, g.a.g646959f),
                ),
              ),
            ),
            c.createElement(p.b, { size: 'body', weight: 'bold' }, C.shareWithPeople),
            c.createElement(d.a, { style: x.popoverShareButtonContainer }, c.createElement(u.a, { audioSpaceId: t })),
          )
        return 'popover' === r
          ? c.createElement(
              c.Fragment,
              null,
              c.createElement(
                d.a,
                { style: x.popoverTitle },
                c.createElement(p.b, { size: 'title4', weight: 'heavy' }, c.createElement(f.a.ParticipantsCount, a)),
              ),
              i,
            )
          : c.createElement(
              c.Fragment,
              null,
              c.createElement(
                d.a,
                { style: x.popoverSheetTitleContainer },
                c.createElement(
                  d.a,
                  { style: x.popoverSheetTitle },
                  c.createElement(
                    p.b,
                    { size: 'headline2', weight: 'heavy' },
                    c.createElement(f.a.ParticipantsCount, a),
                  ),
                ),
                c.createElement(m.a, {
                  accessibilityLabel: C.close,
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: C.close },
                  icon: c.createElement(S.a, { style: x.popoverSheetClose }),
                  onPress: n,
                  size: 'medium',
                }),
              ),
              i,
            )
      }
      function P(e) {
        if (!e.interactive) return e.children
        var t = { count: e.count, labelType: 'otherListeners' }
        return c.createElement(
          h.a,
          {
            renderContent: function (n, r) {
              return c.createElement(E, a()({ audioSpaceId: e.audioSpaceId, dismiss: n, type: r }, t))
            },
            withArrow: !0,
            withDefaultContainer: !0,
          },
          c.createElement(b.a, { accessibilityLabel: f.a.ParticipantsCount.generateText(t), onPress: l.a }, e.children),
        )
      }
      function k(e) {
        return e.interactive
          ? c.createElement(d.a, { style: x.otherParticipantsArrow }, c.createElement(O.a, null))
          : null
      }
      var j = { fontSize: 'body' },
        x = v.a.create(function (e) {
          var t = e.lineHeightsPx[j.fontSize],
            n = {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              paddingVertical: e.spacesPx.space12,
              paddingLeft: e.spacesPx.space24,
              paddingRight: e.spacesPx.space16,
              borderWidth: e.borderWidthsPx.small,
              borderRadius: e.borderRadiiPx.medium,
              borderColor: e.colors.gray50,
            },
            r = { width: t, height: t, color: e.colors.text },
            a = { marginVertical: e.spacesPx.space12 },
            i = { color: e.colors.gray300, width: e.spacesPx.space24, height: e.spacesPx.space24 }
          return {
            otherParticipantsWrapper: { width: '100%' },
            otherParticipantsContainer: n,
            otherParticipantsText: { flex: 1 },
            otherParticipantsArrow: r,
            popoverTitle: a,
            popoverSheetTitleContainer: {
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: e.spacesPx.space12,
            },
            popoverSheetTitle: { flex: 1 },
            popoverSheetClose: i,
            popoverSheetDescription: { marginTop: e.spacesPx.space16, marginBottom: e.spacesPx.space12 },
            popoverShareButtonContainer: { marginVertical: e.spacesPx.space16 },
          }
        }),
        C = { close: g.a.ia5e7487, share: g.a.ifea3114, shareWithPeople: g.a.i7f853ea }
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
    '8A5z': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
            }),
            i.createElement('path', {
              d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    A7Vd: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return s
      }),
        n.d(t, 'c', function () {
          return l
        }),
        n.d(t, 'b', function () {
          return u
        }),
        n.d(t, 'f', function () {
          return d
        }),
        n.d(t, 'i', function () {
          return p
        }),
        n.d(t, 'e', function () {
          return f
        }),
        n.d(t, 'a', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return h
        }),
        n.d(t, 'l', function () {
          return b
        }),
        n.d(t, 'j', function () {
          return v
        }),
        n.d(t, 'm', function () {
          return y
        }),
        n.d(t, 'g', function () {
          return g
        }),
        n.d(t, 'h', function () {
          return S
        })
      n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r)
      n('+KXO')
      function i(e, t) {
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
            ? i(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var c = new (n('ssnq').a)({
          id: null,
          api: null,
          state: null,
          guests: { lookup: {}, signature: '' },
          chatToken: null,
        }),
        s = c
      function l(e, t, n) {
        var r,
          a = 'SPEAKERS',
          i = { host: { audioLevel: 0 } }
        if (n) {
          i.host.audioLevel = O(n.audioLevels.host)
          for (var s = Object.keys(n.guests), l = 0; l < s.length; l++) {
            var u = s[l],
              d = n.guests[u],
              p = d.UserId,
              f = O(n.audioLevels.guests[u])
            ;(i[p] = { guest: d, audioLevel: f }), (a += '-'.concat(p))
          }
        }
        var m = { signature: a, lookup: i },
          h = (null === (r = t.tracks[t.currentTrackId]) || void 0 === r ? void 0 : r.chatToken) || null
        c.setState(function (n) {
          return o(o({}, n), {}, { id: e, state: t, guests: m, chatToken: h })
        })
      }
      function u(e, t) {
        c.setState(function (n) {
          return o(o({}, n), {}, { id: e, api: t })
        })
      }
      function d(e) {
        return c.useSlice(function (t) {
          var n = e.isHost ? 'host' : e.periscopeUserId
          if (!n) return 0
          var r = t.guests.lookup[n],
            a = null == r ? void 0 : r.audioLevel
          return 'number' == typeof a ? a : 0
        })
      }
      function p() {
        return c.useSlice(function (e) {
          return e.guests.lookup
        })
      }
      function f() {
        var e = c.useSlice(
          function (e) {
            return e.guests.lookup
          },
          {
            equalityFn: function (e, t, n, r) {
              return n.guests.signature === r.guests.signature
            },
          },
        )
        return {
          get: function (t) {
            return e[t]
          },
        }
      }
      function m(e) {
        var t,
          n = e
        return n || (n = c.getState().state), null === (t = n) || void 0 === t ? void 0 : t.tracks[n.currentTrackId]
      }
      function h() {
        return s.useSlice(function (e) {
          var t = e.state
          return Boolean(null == t ? void 0 : t.isSeeking)
        })
      }
      function b() {
        return s.useSlice(function (e) {
          var t = e.state
          return (null == t ? void 0 : t.playbackRate) || 1
        })
      }
      function v() {
        return s.useSlice(function (e) {
          var t = e.state
          return Boolean(null == t ? void 0 : t.isPlaying)
        })
      }
      function y() {
        return s.useSlice(function (e) {
          return e.api
        })
      }
      function g() {
        return s.useSlice(function (e) {
          var t
          return null === (t = m(e.state)) || void 0 === t ? void 0 : t.durationMs
        })
      }
      function S() {
        return s.useSlice(function (e) {
          var t
          return null === (t = m(e.state)) || void 0 === t ? void 0 : t.currentTimeMs
        })
      }
      function O(e) {
        return e / 100
      }
    },
    Chkh: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return f
      })
      n('1t7P'), n('daRM'), n('FtHn')
      var r = n('RhWx'),
        a = n.n(r),
        i = n('KEM+'),
        o = n.n(i),
        c = (n('Ee2X'), n('jwue'), n('+oxZ'), n('2G9S'), n('z84I'), n('LW0h'), n('+KXO'), n('6U7i'), n('A7Vd')),
        s = n('2C8o'),
        l = n('Xda3'),
        u = n('ssnq')
      function d(e, t) {
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
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function f(e, t) {
        var n,
          r = 0,
          a = e.length - 1,
          i = -1,
          o = -1
        if (r > a) return -1
        for (; r <= a; ) {
          if (((o = t(e[(i = Math.floor((r + a) / 2))])), void 0 !== n && 0 !== o)) return n
          o >= 0 ? (r = i + 1) : (a = i - 1), 0 === o && (n = i)
        }
        return void 0 !== n || o > 0 ? i : i - 1
      }
      t.a = new (function () {
        var e,
          t = !1,
          n = 0,
          r = 0,
          i = 0,
          d = 0,
          m = {},
          h = new u.a({})
        function b() {
          ;(t = !1), clearTimeout(e)
        }
        function v(e, t) {
          if (Array.isArray(m[e])) {
            var n = f(m[e], function (e) {
              return t.ntpTimeInSeconds - e.ntpTimeInSeconds
            })
            m[e].splice(n + 1, 0, t)
          } else m[e] = [t]
        }
        function y() {
          !(function () {
            function e() {
              return Object.keys(m)
                .filter(function (e) {
                  return m[e] && m[e].length > 0
                })
                .map(function (e) {
                  return Number(e)
                })
                .map(function (e) {
                  return e
                })
            }
            h.setState(function (t) {
              var c = p({}, t)
              return (
                r === n ? (i = n + (100 * (d += 1)) / 1e3) : ((d = 0), (i = r = n)),
                e().forEach(function (e) {
                  var n = m[e]
                  if (n && 0 !== n.length) {
                    var r = t[e] || [],
                      s = f(n, function (e) {
                        return i - e.ntpTimeInSeconds
                      })
                    if (!(s < 0)) {
                      var l = n.splice(0, s + 1)
                      c = p(p({}, c), {}, o()({}, e, [].concat(a()(r), a()(l))))
                    }
                  }
                }),
                c
              )
            })
          })(),
            t && (e = setTimeout(y, 100))
        }
        return (
          c.d.subscribe(
            function (e) {
              var t,
                n = e.state
              return null == n || null === (t = n.tracks[n.currentTrackId]) || void 0 === t ? void 0 : t.id3NtpTime
            },
            function (e) {
              e && (n = e)
            },
          ),
          {
            publish: function (e) {
              setTimeout(function () {
                !(function (e) {
                  switch (e.type) {
                    case l.a.Chat:
                      Object(s.a)(e) && v(l.a.ChatCaption, e)
                      break
                    case l.a.ServerAudioTranscription:
                    case l.a.Heart:
                    case l.a.HydraControlMessage:
                      v(e.type, e)
                  }
                })(e)
              })
            },
            reset: function () {
              for (var e in (b(), m)) delete m[e]
              ;(n = 0), (r = 0), (i = 0), (d = 0), h.reset()
            },
            setCurrentNtpTimeSeconds: function (e) {
              n = e
            },
            stacks: m,
            start: function () {
              ;(t = !0), y()
            },
            stop: b,
            store: h,
            subscribe: function (e, t) {
              return h.subscribe(
                function (t) {
                  return t[e] || []
                },
                function (n) {
                  var r
                  n &&
                    n.length > 0 &&
                    t(n).clearHeapForMessageType &&
                    ((r = e),
                    h.setState(function (e) {
                      return p(p({}, e), {}, o()({}, r, []))
                    }))
                },
              )
            },
          }
        )
      })()
    },
    'G/+M': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return u
      }),
        n.d(t, 'c', function () {
          return d
        }),
        n.d(t, 'a', function () {
          return p
        }),
        n.d(t, 'd', function () {
          return f
        })
      n('M+/F'), n('7x/C'), n('ho0z'), n('hCOa'), n('87if'), n('1t7P'), n('jQ/y'), n('aLgo'), n('lTEL'), n('kYxP')
      var r = n('ERkP'),
        a = n('v6aA'),
        i = n('Chkh'),
        o = n('Xda3')
      function c(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return s(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var i,
          o = !0,
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(c = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw i
            }
          },
        }
      }
      function s(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var l = new (n('ssnq').a)({}),
        u = l
      function d(e) {
        return l.useSlice(function (t) {
          return e ? t[e] : null
        })
      }
      function p(e) {
        l.setState(function (t) {
          var n
          null === (n = t[e.participantId]) || void 0 === n || n.shift()
        })
      }
      function f() {
        var e = r.useContext(a.a).featureSwitches.isTrue('voice_rooms_expanded_dock_reactions')
        r.useEffect(
          function () {
            if (e) {
              var t = i.a.subscribe(o.a.Heart, m)
              return function () {
                t()
              }
            }
          },
          [e],
        )
      }
      function m(e) {
        return (
          l.setState(function (t) {
            var n,
              r = c(e)
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var a,
                  i = h(n.value),
                  o = i.reaction,
                  s = i.sender
                t[s.participantId] || (t[s.participantId] = []),
                  null === (a = t[s.participantId]) || void 0 === a || a.push(o)
              }
            } catch (l) {
              r.e(l)
            } finally {
              r.f()
            }
          }),
          { clearHeapForMessageType: !0 }
        )
      }
      function h(e) {
        var t = e.data.sender.user_id
        return {
          reaction: { emoji: e.body.body, type: e.body.type, id: e.body.uuid, participantId: t },
          sender: { participantId: t, twitterId: e.data.sender.twitter_id },
        }
      }
    },
    GCOQ: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M19.875 2.75v18.5c0 .55-.45 1-1 1s-1-.45-1-1v-7.14c-1.86-.78-3.77-.21-5.79.38-1.39.41-2.81.82-4.26.82-1.1 0-2.2-.23-3.33-.89-.23-.14-.37-.38-.37-.65V4c0-.27.14-.52.38-.65.23-.13.52-.13.75 0 2.05 1.21 4.17.59 6.41-.07 2.02-.59 4.09-1.2 6.21-.54.01-.55.45-.99 1-.99s1 .45 1 1z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var r = n('ERkP')
      function a(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var i = n('97Jx'),
        o = n.n(i),
        c = n('KEM+'),
        s = n.n(c),
        l = (n('jwue'), n('+oxZ'), n('3XMw')),
        u = n.n(l),
        d = n('/yvb'),
        p = n('fn9Y'),
        f = u.a.c0530da5,
        m = u.a.ifea3114
      var h = function (e) {
          return r.createElement(d.a, {
            accessibilityLabel: f,
            hoverLabel: { label: m },
            icon: r.createElement(p.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        b = 'share-button',
        v = 'share-by-tweet',
        y = n('m3Bd'),
        g = n.n(y),
        S = n('1YZw'),
        O = n('CaKu')
      n('Cm4o'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP')
      function w(e) {
        var t = new URL(e, 'https://twitter.com')
        return t.searchParams.has('s') || t.searchParams.set('s', '20'), t.href
      }
      var E = n('SrIh'),
        P = n('Irs7'),
        k = n('uDfI'),
        j = n('zCf4'),
        x = n('jwTb'),
        C = n('SOvA'),
        I = n('I/9y'),
        R = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: x.a,
            text: u.a.fcc684a9,
            testID: v,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: C.a,
            text: u.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return O.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: I.a,
            text: u.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: p.a,
            text: u.a.if23a251,
          },
        }
      function T(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function M(e) {
        var t = Object(P.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(k.c)(),
              a = Object(j.g)()
            return r.useMemo(
              function () {
                return function (r) {
                  var i = R[r.type],
                    o = i.isAvailable,
                    c = i.scribeAction,
                    s = g()(i, ['isAvailable', 'scribeAction'])
                  if (!o()) return null
                  var l = L({}, s)
                  function u() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      s = L(L({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      l = { text: i, url: o },
                      u = { analytics: t, dispatch: n, history: a, mergedScribeNamespace: s }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(L(L({}, _(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            O.a.setString(w(t.url)),
                            r(),
                            void n.dispatch(Object(S.b)({ text: D.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              L(
                                L({ pathname: '/compose/tweet' }, _(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: w(t.url) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(L(L({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(E.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, l, u)
                  }
                  return r.label && (l.text = r.label), L(L({}, l), {}, { onClick: u })
                }
              },
              [t, n, a, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var D = { copyLinkSuccessMessage: u.a.f88553c8, shareTextPrefixFormatter: u.a.gb5851d7 }
      function _(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? D.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var A = n('T0aG'),
        z = n.n(A),
        H = n('mN6z')
      var B = n('mjJ+'),
        F = n('rHpw')
      function N(e, t) {
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
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? N(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : N(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var U = { element: 'share' }
      function W(e) {
        var t = (function (e) {
            var t = r.useRef({ previous: void 0 })
            if ('object' !== z()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var a = t.current.previous
            return a && (e === a || Object(H.a)(e, a)) ? a : n()
          })(V(V({}, U), e.scribeNamespace)),
          n = M(V(V({}, e), {}, { scribeNamespace: t })),
          a = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || q
        return r.createElement(o, {
          onPress: function () {
            var e = V(V({}, t), {}, { action: 'share_menu_click' })
            a.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? r.Children.forEach(e.children, function (e) {
                    if (r.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              r.createElement(B.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function q(e) {
        return r.createElement(h, o()({}, e, { style: K.button, testID: b }))
      }
      var K = F.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function X(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          i = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = g()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return r.createElement(
          W,
          c,
          r.createElement(a, { label: o, type: 'tweet' }),
          r.createElement(a, { label: n, type: 'dm' }),
          r.createElement(a, { label: t, type: 'copy' }),
          r.createElement(a, { label: i, type: 'via' }),
        )
      }
      ;(X.Action = a), (X.Custom = W)
      t.a = X
    },
    ISLN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      n('uFXj')
      var r = n('ERkP'),
        a = n('cm6r'),
        i = n('Xyrk'),
        o = n('rHpw')
      function c(e) {
        var t = e.accessibilityLabel,
          n = e.children,
          o = e.onPress,
          c = e.style
        return r.createElement(
          a.a,
          { accessibilityLabel: t, onPress: o, style: [s.button, c] },
          r.createElement(i.a.Default, { style: s.gradient }, n),
        )
      }
      c.getHeightPx = function (e) {
        return e.spacesPx.space48
      }
      var s = o.a.create(function (e) {
        return {
          button: {
            overflow: 'hidden',
            width: '100%',
            boxShadow: e.boxShadows.small,
            height: c.getHeightPx(e),
            borderRadius: e.spacesPx.space48,
          },
          gradient: { height: '100%', justifyContent: 'center', paddingHorizontal: e.spaces.space24 },
        }
      })
    },
    LxAE: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return le
      })
      var r = {}
      n.r(r),
        n.d(r, 'buildPlayerProps', function () {
          return Y
        }),
        n.d(r, 'buildDockConfig', function () {
          return Q
        })
      var a = {}
      n.r(a),
        n.d(a, 'buildPlayerProps', function () {
          return re
        }),
        n.d(a, 'buildDockConfig', function () {
          return ae
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var i = n('KEM+'),
        o = n.n(i),
        c = n('ddV6'),
        s = n.n(c),
        l = n('Nsgw'),
        u = n('OoQt'),
        d = n('Xda3'),
        p = n('ERkP'),
        f = n('QEWO'),
        m = n('v6aA'),
        h = n('nYBC'),
        b = n('Q/sS'),
        v = n('A7Vd'),
        y = n('VKFJ'),
        g = n('MWbm'),
        S = n('tno6'),
        O = n('rHpw'),
        w = n('t62R')
      function E(e, t) {
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
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function k(e) {
        var t = (function (e) {
          var t = p.useRef({ lastActive: { displayName: '', audioLevel: 0 } }),
            n = Object(y.b)(e).speakers,
            r = v.i(),
            a = { displayName: '', audioLevel: 0 }
          if (
            (n.forEach(function (e) {
              var t = y.b.isParticipantHost(e.kind) || !e.periscopeUserId ? 'host' : e.periscopeUserId,
                n = r[t]
              n &&
                n.audioLevel > a.audioLevel &&
                e.user.display_name &&
                ((a.displayName = e.user.display_name), (a.audioLevel = n.audioLevel))
            }),
            a.audioLevel > 0)
          )
            return (t.current.lastActive = a), t.current.lastActive
          if (t.current.lastActive.displayName) return P(P({}, t.current.lastActive), {}, { audioLevel: 0 })
          var i = s()(n, 1)[0]
          return P(P({}, a), {}, { displayName: i.user.display_name || '' })
        })(e.audioSpaceId)
        return p.createElement(j, t)
      }
      function j(e) {
        var t = [x.activeSpeakerIndicatorName, 0 === e.audioLevel && x.activeSpeakerIndicatorNameInactive]
        return p.createElement(
          g.a,
          { style: x.activeSpeakerIndicatorContainer },
          p.createElement(S.a, {
            audioLevel: e.audioLevel,
            size: O.a.theme.spacesPx.space16,
            withPersistZeroLevel: !0,
          }),
          p.createElement(w.b, { style: t }, e.displayName),
        )
      }
      var x = O.a.create(function (e) {
          return {
            activeSpeakerIndicatorContainer: { flexDirection: 'row', alignItems: 'center' },
            activeSpeakerIndicatorName: { color: e.colors.purple500, marginLeft: e.spacesPx.space4 },
            activeSpeakerIndicatorNameInactive: { opacity: 0.6 },
          }
        }),
        C =
          (n('jQ3i'),
          n('x4t0'),
          n('M+/F'),
          n('7x/C'),
          n('ho0z'),
          n('hCOa'),
          n('87if'),
          n('jQ/y'),
          n('aLgo'),
          n('lTEL'),
          n('kYxP'),
          n('1YZw')),
        I = n('Chkh'),
        R = n('3XMw'),
        T = n.n(R),
        L = n('zCf4'),
        M = n('dgjd'),
        D = n('xZGM'),
        _ = n('uDfI')
      function A(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return z(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              a = function () {}
            return {
              s: a,
              n: function () {
                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: a,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var i,
          o = !0,
          c = !1
        return {
          s: function () {
            n = e[Symbol.iterator]()
          },
          n: function () {
            var e = n.next()
            return (o = e.done), e
          },
          e: function (e) {
            ;(c = !0), (i = e)
          },
          f: function () {
            try {
              o || null == n.return || n.return()
            } finally {
              if (c) throw i
            }
          },
        }
      }
      function z(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function H(e) {
        var t,
          n,
          r,
          a = e.audioSpaceId,
          i = e.isSideNavLayout
        return (
          (function (e) {
            var t = Object(M.a)(e).utils,
              n = b.o()
            p.useEffect(
              function () {
                b.h.getState().isReplay || t.is.Running || n('exit')
              },
              [n, t.is.Running],
            )
          })(a),
          (function (e) {
            var t = Object(M.a)(e),
              n = t.space,
              r = t.utils,
              a = v.g(),
              i = v.m(),
              o = null == n ? void 0 : n.replay_start_time,
              c = (i || {}).scrubToFraction,
              s = b.l()
            p.useEffect(
              function () {
                return v.d.subscribe(
                  function (e) {
                    var t = e.state
                    return null == t ? void 0 : t.isPlaying
                  },
                  function (e) {
                    e ? I.a.start() : I.a.stop()
                  },
                )
              },
              [s],
            ),
              p.useEffect(
                function () {
                  r.is.replayable && r.is.joined && c && a && o && c((1e3 * o) / a)
                },
                [c, r.is.replayable, r.is.joined, o, a],
              )
          })(a),
          (function (e) {
            var t = b.p(),
              n = b.o(),
              r = Object(L.h)(),
              a = r.key,
              i = r.pathname,
              o = p.useRef({ key: a, pathname: i })
            p.useEffect(
              function () {
                if (!e) {
                  if (o.current.key !== a) F.spaceUrl.test(o.current.pathname) || 'collapse' === t || n('collapse')
                  ;(o.current.key = a), (o.current.pathname = i)
                }
              },
              [a, i, e, n, t],
            )
          })(i),
          (t = p.useContext(m.a).loggedInUserId),
          (n = b.o()),
          (r = Object(_.c)()),
          p.useEffect(
            function () {
              function e(e) {
                var a,
                  i = A(e)
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var o = a.value
                    switch (o.body.guestBroadcastingEvent) {
                      case d.b.RemoveParticipant:
                        var c
                        ;((null === (c = o.body) || void 0 === c ? void 0 : c.twitter_participant_ids) || []).includes(
                          t,
                        ) && (n('exit'), r(Object(C.b)({ text: N.removedFromSpace })))
                    }
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
                return { clearHeapForMessageType: !0 }
              }
              if (t) return I.a.subscribe(d.a.HydraControlMessage, e)
            },
            [t, n, r],
          ),
          (function () {
            var e = Object(_.c)(),
              t = b.j().openSheet,
              n = b.p() === b.a.full,
              r = Object(_.d)(B)
            p.useEffect(
              function () {
                var a
                return (
                  n &&
                    r &&
                    (a = setTimeout(function () {
                      t(b.b.generalNux), e(Object(D.v)(D.s))
                    }, 2e3)),
                  function () {
                    return clearTimeout(a)
                  }
                )
              },
              [n, r],
            )
          })(),
          null
        )
      }
      var B = function (e) {
        return Object(D.y)(e, D.s)
      }
      var F = { spaceUrl: /i\/spaces\/.+/ },
        N = { removedFromSpace: T.a.jd859c9c },
        V = n('Rumh'),
        U = n('xVWt')
      function W(e, t) {
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
            ? W(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function K(e) {
        var t = e.audioSpaceId,
          n = Object(M.a)(t),
          r = n.space,
          a = n.utils,
          i = a.title(),
          o = (null == r ? void 0 : r.participants.total) || 0
        return p.createElement(V.a, {
          activeSpeakers: p.createElement(k, { audioSpaceId: t }),
          isWide: e.isSideNavLayout,
          onDockPress: function () {
            e.onToggleCollapsed(), a.scribe(':audiospace::dock::click')
          },
          onRequestClose: function () {
            e.onRequestClose(), a.scribe(':audiospace::dock:close:click')
          },
          title: i,
          totalParticipants: o,
          wideDockMaxWidth: e.width,
        })
      }
      function X(e) {
        var t = p.useContext(m.a).featureSwitches,
          n = p.useState(!1),
          r = s()(n, 2),
          a = r[0],
          i = r[1]
        var o = q(
            q({}, e),
            {},
            {
              onToggleCollapsed: function () {
                a || b.d(), i(G)
              },
            },
          ),
          c = t.isTrue('voice_rooms_expanded_dock') && !a
        return p.createElement(
          p.Fragment,
          null,
          p.createElement(K, o),
          c ? p.createElement(U.a, o) : null,
          p.createElement(H, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }),
        )
      }
      function G(e) {
        return !e
      }
      function J(e, t) {
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
      function Z(e) {
        var t = s()(e.activeItem, 1)[0]
        return t ? { activeItem: t } : null
      }
      function Y(e) {
        e.commonApi
        var t = Z(e.context)
        if (!t) return { media: null }
        var n = t.activeItem
        return {
          broadcastId: n.id,
          disablePlaybackCoordination: !0,
          mediaKey: n.mediaKey,
          isLive: n.isLive,
          onPlayerApi: function (e) {
            v.b(n.id, e)
          },
          onPlayerState: function (e, t) {
            v.c(n.id, e, t)
          },
        }
      }
      function Q(e) {
        var t = e.audioDockProps,
          n = e.commonApi,
          r = e.context,
          a = (e.history, Z(r))
        if (!a) return null
        var i = a.activeItem
        return p.createElement(
          X,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? J(Object(n), !0).forEach(function (t) {
                    o()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : J(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })(
            {
              key: i.id,
              audioSpaceId: i.id,
              onRequestClose: function () {
                n.clear(), h.store.reset(), b.h.reset()
              },
            },
            t,
          ),
        )
      }
      n('tVqn'), n('MvUL'), n('KqXw')
      var $ = n('zrc3'),
        ee = n('qzrz'),
        te = n('WRe9')
      function ne(e) {
        var t,
          n = s()(e.activeItem, 1)[0],
          r = e.hydrateVoiceTweetTrack(n.conversationId),
          a = Object($.a)(r.tweets, function (e) {
            return e.id_str === n.id
          }),
          i = r.tweets[a]
        if (!i) return null
        var o = (null === (t = i.extended_entities) || void 0 === t ? void 0 : t.media) || [],
          c = s()(o, 1)[0],
          l = 'photo' !== (null == c ? void 0 : c.type) ? c : null
        return { activeItem: n, track: r, media: l, activeIndex: a, activeTweet: i }
      }
      function re(e) {
        var t = e.commonApi,
          n = ne(e.context)
        if (!n) return { media: null }
        var r = n.activeIndex,
          a = n.activeItem,
          i = n.media,
          o = n.track.tweets[r + 1]
        return {
          media: i,
          requestedTimecode: a.startTimeMs,
          onEnded: function () {
            o && t.load.voiceTweet(o)
          },
        }
      }
      function ae(e) {
        var t = e.audioDockProps,
          n = e.commonApi,
          r = e.context,
          a = e.history,
          i = s()(r.playerApi, 1)[0],
          o = s()(r.playerState, 1)[0],
          c = n.currentTrack
        if (!o || !i || !c) return null
        var l = ne(r)
        if (!l) return null
        var u = l.activeIndex,
          d = l.activeTweet,
          f = l.media,
          m = l.track,
          h = o.isMuted,
          b = o.isPlaying,
          v = o.isScrubbing,
          y = o.isSeeking,
          g = o.volume,
          S = 0,
          O = 0
        ie(m.tweets, function (e) {
          var t = e.endMs
          e.i === u - 1 && (O = t), (S = t)
        })
        var w = (f && f.id_str === c.contentId && c.currentTimeMs) || 0,
          E = O + w,
          P = null == f ? void 0 : f.url,
          k = d.full_text,
          j = P && k ? k.replace(P, '').trim() : k,
          x = d.user
        return p.createElement(ee.a, {
          isWide: t.isSideNavLayout,
          width: t.width,
          isMuted: h,
          isPlaying: b,
          isScrubbing: v,
          isSeeking: y,
          progressMs: E,
          durationMs: S,
          volume: 100 * g,
          title: j,
          user: x,
          onRequestClose: n.clear,
          onTogglePlayback: n.togglePlayback,
          onDockPress: function () {
            return a.push(d.permalink)
          },
          onMuteToggle: n.toggleMute,
          onVolumeChange: n.setVolume,
          onSeek: function (e) {
            ie(m.tweets, function (t) {
              var r = t.durationMs,
                a = t.endMs,
                o = t.i,
                c = t.startMs,
                s = t.tweet
              if (e >= c && e <= a) {
                var l = e - c
                if (o === u) {
                  var d = l / r
                  i.scrubToFraction(d)
                } else n.load.voiceTweet(s, l)
                return !0
              }
            })
          },
        })
      }
      function ie(e, t) {
        for (var n = 0, r = 0; r < e.length; r++) {
          var a = e[r],
            i = te.a.getVoiceTweetDuration(a),
            o = n + i
          if (t({ i: r, tweet: a, startMs: n, endMs: o, durationMs: i })) break
          n = o
        }
      }
      var oe = {
        default: {
          buildDockConfig: function () {
            return null
          },
        },
        space: r,
        voiceTweet: a,
      }
      function ce(e, t) {
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
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function le() {
        var e = p.useRef({}),
          t = p.useContext(m.a).history,
          n = p.useContext(u.a),
          r = s()(n.activeItem, 2),
          a = r[0],
          i = r[1],
          o = s()(n.playerApi, 2),
          c = o[0],
          h = o[1],
          b = s()(n.playerState, 2),
          v = b[0],
          y = b[1],
          g = s()(n.guestsState, 2),
          S = g[0],
          O = g[1],
          w = ue(v)
        ;(e.current.playerApi = c), (e.current.playerState = v)
        var E = p.useMemo(
            function () {
              return function () {
                d.c(), i(null)
              }
            },
            [i],
          ),
          P = p.useMemo(function () {
            return function () {
              var t = e.current,
                n = t.playerApi,
                r = t.playerState
              n && r && (r.isPlaying ? n.pause : n.play)()
            }
          }, []),
          k = p.useMemo(function () {
            return function () {
              var t = e.current,
                n = t.playerApi,
                r = t.playerState
              n && r && (r.isMuted ? n.unmute : n.mute)()
            }
          }, []),
          j = {
            space: function (e, t, n) {
              i({ type: f.a.space, id: e, mediaKey: t, isLive: n })
            },
            voiceTweet: function (e, t) {
              i({ type: f.a.voiceTweet, id: e.id_str, conversationId: l.a(e), startTimeMs: t })
            },
          },
          x = {
            load: j,
            clear: E,
            currentTrack: w,
            toggleMute: k,
            togglePlayback: P,
            setVolume: p.useMemo(function () {
              return function (t) {
                var n = e.current.playerApi
                n && n.setVolume(t / 100)
              }
            }, []),
          }
        return {
          activeItem: a,
          load: j,
          clear: E,
          player: { api: c, state: v, guests: S, currentTrack: w, toggleMute: k, togglePlayback: P },
          config: {
            dock: function (e) {
              if (!a) return oe.default.buildDockConfig()
              switch (a.type) {
                case f.a.space:
                  return oe.space.buildDockConfig({ history: t, context: n, commonApi: x, audioDockProps: e })
                case f.a.voiceTweet:
                  return oe.voiceTweet.buildDockConfig({ history: t, context: n, commonApi: x, audioDockProps: e })
                default:
                  return oe.default.buildDockConfig()
              }
            },
            player: function () {
              var e,
                t = {
                  media: null,
                  onPlayerApi: function (e) {
                    h(e)
                  },
                  onPlayerState: function (e, t) {
                    y(e), t && O(t)
                  },
                }
              if (!a) return t
              switch (a.type) {
                case f.a.space:
                  e = oe.space.buildPlayerProps({ context: n, commonApi: x })
                  break
                case f.a.voiceTweet:
                  e = oe.voiceTweet.buildPlayerProps({ context: n, commonApi: x })
                  break
                default:
                  throw new Error('[AudioContext:Player] unhandled active item type ['.concat(a.type, ']'))
              }
              return se(se({}, t), e)
            },
          },
          audioSpaces: { cache: n.audioSpaceCache },
        }
      }
      var ue = function (e) {
        return e && e.tracks[e.currentTrackId]
      }
    },
    O07O: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return z
      })
      var r = n('nYBC'),
        a = n('A7Vd'),
        i = n('ERkP'),
        o = n('tI3i'),
        c = n.n(o),
        s = n('fs1G'),
        l = n('/yvb'),
        u = n('rHpw')
      function d(e) {
        return (
          c()(e.accessibilityLabel, 'ControlButton must have an accessibilityLabel'),
          i.createElement(l.a, {
            accessibilityLabel: e.accessibilityLabel,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'text',
            disabled: e.disabled,
            hoverLabel: { label: e.accessibilityLabel },
            icon: e.icon,
            onPress: e.onPress || s.a,
            renderMenu: e.renderMenu,
            size: e.size || 'medium',
            style: p.button,
          })
        )
      }
      var p = u.a.create(function (e) {
          return { button: { height: '100%' } }
        }),
        f = n('3XMw'),
        m = n.n(f),
        h = (n('z84I'), n('akpX')),
        b = n('dgjd'),
        v = n('MWbm'),
        y = n('mjJ+'),
        g = n('t62R')
      function S(e) {
        var t = Object(b.a)(e.audioSpaceId).utils,
          n = a.l(),
          r = E.map(function (e) {
            var r = e.rate
            return {
              text: e.text,
              disabled: n === r,
              onClick: function () {
                t.scribe(':audiospace:replay:recording:speed:click')
                var e = a.d.getState().api
                e && e.setPlaybackRate(r)
              },
            }
          })
        return i.createElement(d, {
          accessibilityLabel: w.accessibility({ rate: ''.concat(n) }),
          icon: i.createElement(S.Icon, { playbackRate: n }),
          renderMenu: function (e) {
            return i.createElement(y.a, { isFixed: !0, items: r, onCloseRequested: e, shouldCloseOnClick: !0 })
          },
        })
      }
      S.Icon = function (e) {
        var t = e.playbackRate
        return i.createElement(
          v.a,
          { style: O.playbackRateIcon },
          i.createElement(g.b, { style: O.playbackRateIconText, weight: 'normal' }, t),
          i.createElement(h.a, { style: O.playbackRateIconSvg }),
        )
      }
      var O = u.a.create(function (e) {
          return {
            playbackRateIcon: { flexDirection: 'row', alignItems: 'center' },
            playbackRateIconText: { marginRight: e.spaces.space2 },
            playbackRateIconSvg: { height: e.spaces.space8 },
          }
        }),
        w = { accessibility: m.a.e07f6e7d },
        E = [
          { text: m.a.jd04fc65, rate: 0.5 },
          { text: m.a.f03848b8, rate: 1 },
          { text: m.a.j0e5c2cd, rate: 1.5 },
          { text: m.a.b3f2318d, rate: 2 },
        ],
        P = n('Pl95'),
        k = n('0nhk'),
        j = n('5Ixf'),
        x = n('AtEG'),
        C = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        I = n.n(C),
        R = n('Lsrn'),
        T = n('k/Ka')
      function L(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                I()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var D = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(T.a)(
          'svg',
          M(
            M({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [R.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M19.837 19.076C17.928 21.639 14.978 23 11.979 23c-2.009 0-4.029-.616-5.768-1.887-2.099-1.53-3.469-3.785-3.849-6.338-.39-2.553.25-5.096 1.79-7.172 1.79-2.404 4.589-3.824 7.548-3.914l-1.43-1.41c-.29-.298-.29-.765 0-1.063.29-.288.77-.288 1.06 0l2.779 2.762c.14.139.22.328.22.526 0 .199-.08.388-.22.527L11.54 7.574c-.14.149-.33.219-.53.219-.19 0-.38-.069-.53-.219-.29-.288-.29-.765 0-1.053l1.36-1.351C9.3 5.219 6.9 6.431 5.361 8.487c-1.31 1.758-1.849 3.914-1.52 6.069.33 2.155 1.48 4.063 3.259 5.354 3.659 2.682 8.828 1.907 11.527-1.719 1.869-2.503 2.139-5.781.72-8.553-.19-.368-.04-.825.33-1.003.37-.189.82-.04 1.01.328 1.679 3.279 1.349 7.153-.85 10.113z',
            }),
            i.createElement('path', {
              d: 'M15.928 14.368c0 .417-.09.794-.27 1.112-.17.328-.43.576-.76.755-.33.179-.71.268-1.15.268-.57 0-1.05-.129-1.43-.397-.38-.258-.62-.626-.71-1.083l-.02-.099 1.14-.228.02.099c.05.228.16.407.33.536.18.139.41.199.69.199.32 0 .56-.089.74-.288.18-.199.27-.477.27-.834 0-.368-.09-.676-.27-.884-.17-.209-.41-.308-.74-.308-.52 0-.84.239-.99.725l-.02.08-1.06-.099.36-3.447h3.579v.973h-2.689l-.14 1.262c.1-.099.22-.189.36-.259.24-.119.53-.179.85-.179.59 0 1.06.189 1.4.566.34.377.51.894.51 1.53zm-5.459-3.894v5.91H9.31v-4.162c-.08.05-.17.099-.28.129-.2.07-.4.099-.59.099h-.38v-1.053h.28c.28 0 .53-.08.73-.219.19-.139.33-.358.41-.636l.02-.069h.969zm4.311-2.681c-.192 0-.385-.073-.531-.219-.292-.292-.291-.763.001-1.054l2.037-2.018-2.249-2.228c-.293-.291-.294-.762-.001-1.054.292-.29.767-.292 1.061-.001l2.781 2.755c.141.14.22.33.22.528s-.079.388-.22.528L15.31 7.576c-.147.145-.338.217-.53.217z',
            }),
          ),
        )
      }
      D.metadata = { width: 24, height: 24 }
      var _ = D,
        A = n('qzrz')
      function z(e) {
        return i.createElement(
          v.a,
          { style: F.controlsContainer },
          i.createElement(z.SeekSlider, null),
          i.createElement(
            v.a,
            { style: F.buttonsContainer },
            i.createElement(z.Captions, { audioSpaceId: e.audioSpaceId }),
            i.createElement(S, { audioSpaceId: e.audioSpaceId }),
            i.createElement(z.Play, null),
            i.createElement(z.SkipAhead, null),
            i.createElement(k.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon-borderless' }),
          ),
        )
      }
      function H() {
        var e = a.a()
        e && null != e && e.currentTimeMs && B(e.currentTimeMs + V)
      }
      function B(e) {
        var t = a.d.getState().api,
          n = a.a()
        if (null != n && n.durationMs && null != t && t.scrubToFraction) {
          r.seek(e)
          var i = e / n.durationMs
          t.scrubToFraction(i)
        }
      }
      ;(z.SeekSlider = function () {
        var e = z.useSeekSliderProps(),
          t = e.currentTimeMs,
          n = e.durationMs,
          r = e.externalSeeking,
          a = e.onSeek
        return i.createElement(A.a.SeekSlider, {
          durationMs: n,
          externalSeeking: r,
          onSeek: a,
          progressMs: t,
          withTimes: !0,
        })
      }),
        (z.useSeekSliderProps = function () {
          var e = a.k(),
            t = a.g()
          return { currentTimeMs: a.h() || 0, durationMs: t || 1, externalSeeking: e, onSeek: B }
        }),
        (z.Captions = function (e) {
          var t = e.audioSpaceId,
            n = P.a.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
            r = n.disabled,
            a = n.icon,
            o = n.label,
            c = n.onPress
          return i.createElement(d, { accessibilityLabel: o, disabled: r, icon: a, onPress: c })
        }),
        (z.Play = function () {
          var e = z.usePlayButtonProps(),
            t = e.isPlaying,
            n = e.togglePlayback
          return i.createElement(d, {
            accessibilityLabel: t ? N.pause : N.play,
            icon: t ? i.createElement(j.a, null) : i.createElement(x.a, null),
            onPress: n,
            size: 'xLarge',
          })
        }),
        (z.usePlayButtonProps = function () {
          var e = a.j(),
            t = a.m()
          return {
            isPlaying: e,
            togglePlayback: function () {
              t && t.play && t.pause && (e ? t.pause() : t.play())
            },
          }
        }),
        (z.SkipAhead = function () {
          return i.createElement(d, { accessibilityLabel: N.skipForward, icon: i.createElement(_, null), onPress: H })
        })
      var F = u.a.create(function (e) {
          return {
            controlsContainer: { width: '100%', alignSelf: 'start', marginVertical: e.spaces.space8 },
            buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          }
        }),
        N = { skipForward: m.a.jf9f3e53, play: m.a.ic1e826e, pause: m.a.b89c5a5f },
        V = 15e3
    },
    PaZX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return b
      }),
        n.d(t, 'c', function () {
          return v
        })
      n('1t7P'), n('jQ/y'), n('z84I'), n('+KXO')
      var r = n('ERkP'),
        a = n('1YZw'),
        i = n('hUaP'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('uDfI'),
        l = n('Q/sS'),
        u = n('dgjd'),
        d = n('MWbm'),
        p = n('t62R'),
        f = n('CKsB'),
        m = n('/yvb'),
        h = n('rHpw')
      function b(e) {
        var t = Object(l.j)().requestSheetDismissal,
          n = b.useReportingItems({ audioSpaceId: e.audioSpaceId })
        return r.createElement(
          d.a,
          { style: y.container },
          r.createElement(
            d.a,
            { style: y.menu },
            r.createElement(
              p.b,
              { align: 'center', size: 'headline1', style: y.description, weight: 'bold' },
              v.reportThisSpace,
            ),
            r.createElement(p.b, { align: 'center', style: y.description }, v.describeTheIssue),
            null == n
              ? void 0
              : n.map(function (e) {
                  return r.createElement(f.a, {
                    actionText: e.label,
                    key: e.label,
                    onClick: function () {
                      e.onClick(), t()
                    },
                    textColor: 'red500',
                  })
                }),
          ),
          r.createElement(m.a, { onClick: t, type: 'primaryOutlined' }, v.cancel),
        )
      }
      b.useReportingItems = function (e) {
        var t = e.audioSpaceId,
          n = Object(s.c)(),
          i = Object(u.a)(t).handlers.report
        return r.useMemo(
          function () {
            return Object.keys(i).map(function (e) {
              return {
                label: v[e],
                onClick: function () {
                  i && i[e](), n(Object(a.b)({ text: v.spaceReported }))
                },
              }
            })
          },
          [i, n],
        )
      }
      var v = {
          reportThisSpace: c.a.b3481ffd,
          describeTheIssue: c.a.d0aebc27,
          SelfHarm: c.a.g971a4e8,
          Violence: c.a.b96e6682,
          SexualContent: c.a.e5bf9b39,
          ChildSafety: c.a.d2a34320,
          PrivateInformation: c.a.a9ba3e27,
          AbusiveBehavior: c.a.d5519f4a,
          cancel: c.a.cfd2f35d,
          spaceReported: c.a.eb55363b,
        },
        y = h.a.create(function (e) {
          var t = Object(i.b)(e)
          return {
            container: { display: 'flex', justifyContent: 'space-between', height: '100%', padding: e.spaces.space16 },
            menu: { marginBottom: e.spaces.space20 },
            description: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16, paddingHorizontal: t },
          }
        })
      t.b = b
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return V
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c =
          (n('JtPf'),
          n('7x/C'),
          n('LJOr'),
          n('KqXw'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('KEM+')),
        s = n.n(c),
        l = (n('IAdD'), n('yH/f'), n('OZaJ'), n('5Yy7')),
        u = n.n(l),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        h = n('mAxt'),
        b = n.n(h),
        v = (n('2G9S'), n('CEs6'))
      function y(e) {
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
          return p()(this, n)
        }
      }
      var g = (function (e) {
        u()(n, e)
        var t = y(n)
        function n(e, r, i) {
          var o
          return (
            a()(this, n),
            ((o = t.call(
              this,
              ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(r, ' message: ').concat(i),
            )).url = e),
            (o.status = r),
            o
          )
        }
        return n
      })(b()(Error))
      s()(g, 'displayName', 'ProxseeApiError')
      var S,
        O = n('epkG'),
        w = n('SrIh'),
        E = n('RqPI')
      function P(e, t) {
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
      function k(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? P(Object(n), !0).forEach(function (t) {
                s()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j,
        x = 0,
        C = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _
            a()(this, e),
              s()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(k({ abuse_type: H.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(k({ abuse_type: H.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(k({ abuse_type: H.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(k({ abuse_type: H.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(k({ abuse_type: H.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(k({ abuse_type: H.AbusiveBehavior }, e))
                },
              })
            var r = n.httpConfig
            ;(this.client = new O.a(k(k({}, A), r))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  j = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!j
                },
              },
              {
                key: 'isLoggedIn',
                value: function () {
                  return !!this._authToken
                },
              },
              {
                key: 'isTwitterAuthenticated',
                value: function () {
                  if (!this.initialized()) return !1
                  var e = j.store.getState()
                  return Object(E.l)(e)
                },
              },
              {
                key: 'authToken',
                value: function () {
                  return this._authToken
                },
              },
              {
                key: 'dispatch',
                value: function (e) {
                  return this.initialized()
                    ? this.client.dispatch(e).then(v.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = n.params,
                    a = Object.assign(M(), n.headers),
                    i = JSON.stringify(k(k({}, t), {}, { cookie: this._authToken })),
                    o = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(o), headers: a, params: r, data: i })
                },
              },
              {
                key: 'login',
                value: function () {
                  var e = this
                  return this._authPromise
                    ? this._authPromise
                    : this.initialized()
                    ? this.isTwitterAuthenticated()
                      ? this.isLoggedIn()
                        ? Promise.resolve()
                        : ((this._authPromise = j.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(w.a)('[ProxseeApi] failed to login', { extra: t })
                            })
                            .then(function () {
                              e._authPromise = null
                            })),
                          this._authPromise)
                      : Promise.resolve()
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'loginTwitterToken',
                value: function (e) {
                  var t = { jwt: e, vendor_id: D, create_user: !1, direct: !0 }
                  return this.post('loginTwitterToken', t)
                },
              },
              {
                key: 'publicPath',
                value: function (e) {
                  return this.isLoggedIn() ? e : ''.concat(e, 'Public')
                },
              },
              {
                key: 'accessChat',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post(t.publicPath('accessChat'), { chat_token: e })
                  })
                },
              },
              {
                key: 'getChatHistory',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return this.login().then(function () {
                    var r = n.params,
                      a = Object.assign(M(), n.headers),
                      i = JSON.stringify({ access_token: e.access_token, cursor: e.cursor, limit: 1e3, since: null })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: a, params: r, data: i })
                  })
                },
              },
              {
                key: 'trackAudiospaceClientEvent',
                value: function (e) {
                  var t = this
                  return e.length
                    ? this.login().then(function () {
                        return t
                          .post(t.publicPath('trackAudiospaceClientEvent'), { time: Date.now(), log: e })
                          .catch(function (e) {
                            Object(w.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
                          })
                      })
                    : Promise.resolve()
                },
              },
              {
                key: '_reportSpace',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('markAbuse', e).catch(function (e) {
                      Object(w.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        I = 'X-Idempotence',
        R = 'X-Periscope-User-Agent',
        T = 'X-Attempt',
        L = ((S = {}), s()(S, R, 'Twitter/m5'), s()(S, T, 1), S)
      function M() {
        var e,
          t = Date.now()
        return (
          (x = t <= x ? x + 1 : t),
          Object.assign({}, L, ((e = {}), s()(e, I, x), s()(e, 'content-type', 'application/json'), e))
        )
      }
      var D = 'm5-proxsee-login-a2011357b73e',
        _ = {},
        A = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        r = t.status,
                        a = Object(v.a)(t)
                      return new g(n, r, a.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var z,
        H = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        B = new C(),
        F = n('G6rE'),
        N = new Error('[AudioModule] config not initialized'),
        V = new ((function () {
          function e() {
            a()(this, e), (this.proxsee = B)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(z = e), B.init(z)
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!z
                },
              },
              {
                key: 'loggedInUser',
                value: function () {
                  if (this.initialized()) {
                    var e = z.store.getState()
                    return F.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return z ? z.api.AudioSpaces.byId(e) : Promise.reject(N)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return z ? z.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(N)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return z ? z.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(N)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return z ? z.api.AudioSpaces.search(e, t) : Promise.reject(N)
                },
              },
            ]),
            e
          )
        })())()
    },
    Pl95: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var r = n('Q/sS'),
        a = n('ERkP'),
        i = n('3XMw'),
        o = n.n(i),
        c = n('dgjd'),
        s = n('/yvb'),
        l = n('rHpw'),
        u = n('pHub'),
        d = n('8A5z'),
        p = n('d5IS')
      function f(e) {
        var t = e.audioSpaceId,
          n = f.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
          r = n.disabled,
          i = n.icon,
          o = n.label,
          c = n.onPress
        return a.createElement(s.a, {
          accessibilityLabel: o,
          disabled: r,
          hoverLabel: { label: o },
          icon: i,
          onPress: c,
          size: 'medium',
          style: h.icon,
          type: 'primaryText',
        })
      }
      function m(e) {
        switch (e.captionsState) {
          case r.c.On:
            return a.createElement(u.a, { style: h.icon })
          case r.c.Off:
            return a.createElement(d.a, { style: h.icon })
          case r.c.Unavailable:
          default:
            return a.createElement(p.a, { style: h.icon })
        }
      }
      f.useSpaceCaptionsToggleProps = function (e) {
        var t = e.audioSpaceId,
          n = r.n(),
          i = a.createElement(m, { captionsState: n })
        return {
          disabled: !(n !== r.c.Unavailable),
          icon: i,
          label: (function (e) {
            switch (e) {
              case r.c.On:
                return b.hideCaptions
              case r.c.Off:
                return b.showCaptions
              case r.c.Unavailable:
              default:
                return b.captionsUnavailable
            }
          })(n),
          onPress: (function (e) {
            var t = e.audioSpaceId,
              n = Object(c.a)(t).utils
            return function () {
              r.i(), n.scribe(':audiospace::caret:view_transcriptions:click')
            }
          })({ audioSpaceId: t }),
        }
      }
      var h = l.a.create(function (e) {
          return { icon: { fill: e.colors.text } }
        }),
        b = { showCaptions: o.a.e674c120, hideCaptions: o.a.f45bace3, captionsUnavailable: o.a.ce96f1db }
    },
    'Q/sS': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'h', function () {
          return d
        }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'j', function () {
          return f
        }),
        n.d(t, 'k', function () {
          return m
        }),
        n.d(t, 'o', function () {
          return h
        }),
        n.d(t, 'p', function () {
          return b
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return g
        }),
        n.d(t, 'l', function () {
          return S
        }),
        n.d(t, 'n', function () {
          return P
        }),
        n.d(t, 'i', function () {
          return k
        }),
        n.d(t, 'm', function () {
          return j
        })
      var r = n('KEM+'),
        a = n.n(r),
        i =
          (n('JtPf'),
          n('7x/C'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('2C8o')),
        o = (n('yH/f'), Object.freeze({ full: 'full', collapse: 'collapse', exit: 'exit' })),
        c = Object.freeze({ On: 'on', Off: 'off', Unavailable: 'unavailable' }),
        s = Object.freeze({ generalNux: 'general-nux', recordingEducation: 'recording-education', report: 'report' })
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
      var d = new (n('ssnq').a)({
        isReplay: !1,
        startTimeMs: -1,
        springTo: function () {
          return Promise.resolve()
        },
        springToState: null,
        sheet: { id: null, hasDismissRequest: !1 },
        captionsState: c.On,
      })
      function p() {
        var e = d.getState().isReplay
        d.reset(),
          e &&
            d.setState(function (t) {
              t.isReplay = e
            })
      }
      function f() {
        return {
          sheetId: d.useSlice(function (e) {
            return e.sheet.id
          }),
          openSheet: O,
          requestSheetDismissal: E,
        }
      }
      function m() {
        var e = d.useSlice(function (e) {
            return e.sheet
          }),
          t = e.hasDismissRequest
        return { sheetId: e.id, hasDismissRequest: t, clearSheet: w }
      }
      function h() {
        return d.useSlice(function (e) {
          return e.springTo
        })
      }
      function b() {
        return d.useSlice(function (e) {
          return e.springToState
        })
      }
      function v(e) {
        d.setState(function (t) {
          return u(u({}, t), {}, { springToState: e })
        })
      }
      function y(e) {
        d.setState(function (t) {
          return u(u({}, t), {}, { springTo: e })
        })
      }
      function g(e) {
        d.setState(function (t) {
          ;(t.isReplay = !0), (t.startTimeMs = e)
        })
      }
      function S() {
        return d.useSlice(function (e) {
          return e.isReplay
        })
      }
      function O(e) {
        d.getState().sheet.hasDismissRequest ||
          d.setState(function (t) {
            return u(u({}, t), {}, { sheet: { id: e, hasDismissRequest: !1 } })
          })
      }
      function w() {
        d.getState().sheet.id &&
          d.setState(function (e) {
            return u(u({}, e), {}, { sheet: { id: null, hasDismissRequest: !1 } })
          })
      }
      function E() {
        var e = d.getState().sheet
        e.id &&
          d.setState(function (t) {
            return u(u({}, t), {}, { sheet: u(u({}, e), {}, { hasDismissRequest: !0 }) })
          })
      }
      function P() {
        return d.useSlice(function (e) {
          return e.captionsState
        })
      }
      function k() {
        var e = d.getState().captionsState
        e === c.On
          ? d.setState(function (e) {
              return u(u({}, e), {}, { captionsState: c.Off })
            })
          : e === c.Off &&
            d.setState(function (e) {
              return u(u({}, e), {}, { captionsState: c.On })
            })
      }
      function j() {
        var e = i.d(),
          t = P()
        return e && t === c.On
      }
    },
    QEWO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ERkP')
      var r = n('89tF'),
        a = Object(r.a)({ space: !0, voiceTweet: !0, voiceMessage: !0 })
    },
    SQlS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = (n('i4UL'), n('ERkP')),
        o = n('Xyrk'),
        c = n('rHpw'),
        s = n('k/Ka')
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
      function d(e) {
        return Object(s.a)(
          'svg',
          u(u({}, e), {}, { style: [p.root, e.style], viewBox: '0 0 24 24' }),
          i.createElement(
            i.Fragment,
            null,
            i.createElement(o.a.SVGLinearGradient, null),
            i.createElement(
              'g',
              { fill: o.a.SVGLinearGradient.fill },
              i.createElement('path', {
                d: 'M19.073 10.384c.9-.896 2.358-.896 3.258 0 .894.89.894 2.34-.006 3.237-.893.89-2.35.89-3.244 0-.9-.895-.9-2.347-.007-3.236zm-17.403.001c.9-.896 2.356-.896 3.256 0 .893.89.893 2.34-.007 3.236-.894.89-2.35.89-3.244 0-.9-.895-.9-2.346-.007-3.235zM11.058 2.4c.536-.534 1.41-.534 1.95.006.537.534.537 1.403 0 1.937-.535.534-1.414.54-1.95.005-.54-.54-.536-1.414 0-1.948zm-.064 17.254c.536-.533 1.41-.533 1.95.006.536.533.536 1.402 0 1.936-.54.54-1.414.54-1.95.006-.542-.54-.542-1.41 0-1.948zm4.07-13.294c.72-.718 1.886-.718 2.606 0 .714.71.714 1.87-.006 2.588-.714.71-1.88.71-2.595 0-.72-.717-.72-1.878-.006-2.59zm-8.736 8.697c.72-.717 1.886-.717 2.606 0 .714.71.714 1.872-.006 2.59-.714.71-1.88.71-2.594 0-.72-.718-.72-1.88-.006-2.59zm.034-8.665c.72-.717 1.886-.717 2.606 0 .714.71.714 1.872-.006 2.59-.714.71-1.88.71-2.594 0-.72-.718-.72-1.878-.006-2.59zm8.67 8.632c.72-.717 1.886-.717 2.606 0 .714.71.714 1.872-.006 2.59-.714.71-1.88.71-2.594 0-.72-.718-.72-1.878-.006-2.59zm-4.662-4.639c.9-.896 2.358-.896 3.258 0 .893.89.893 2.34-.007 3.236-.892.89-2.35.89-3.242 0-.9-.895-.9-2.346-.007-3.235z',
              }),
            ),
          ),
        )
      }
      d.metadata = { width: 24, height: 24 }
      var p = c.a.create(function (e) {
        return {
          root: {
            display: 'inline-block',
            fill: 'currentcolor',
            height: '1.25em',
            maxWidth: '100%',
            position: 'relative',
            userSelect: 'none',
            textAlignVertical: 'text-bottom',
          },
        }
      })
    },
    TCYy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('z84I'), n('i4UL'), n('2G9S'), n('uFXj'), n('yH/f'), n('ERkP')),
        s = n('rHpw'),
        l = n('MWbm')
      function u(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function p(e) {
        var t,
          n = e.count,
          r = e.max,
          a = e.selectedIndex,
          i = 2 * h((t = s.a.theme)).px + t.borderWidthsPx.small,
          u = c.useRef({ left: 0, right: r - 1 }),
          d = c.useRef(0),
          p = c.useState(m(u.current, n, i)),
          v = o()(p, 2),
          y = v[0],
          g = v[1]
        c.useEffect(
          function () {
            for (
              ;
              (e = void 0),
                (t = void 0),
                (r = void 0),
                (o = void 0),
                (c = void 0),
                (s = void 0),
                (e = n - 1),
                (t = u.current),
                (r = t.left),
                (o = t.right),
                (s = a + 1 - r <= 2 && 0 !== r),
                ((c = o - a + 1 <= 2 && o !== e) || s) &&
                  (c
                    ? ((u.current.left = r + 1), (u.current.right = o + 1))
                    : s && ((u.current.left = r - 1), (u.current.right = o - 1)),
                  1);

            );
            var e, t, r, o, c, s
            g(m(u.current, n, i)), (d.current = a)
          },
          [a, n, r, i],
        )
        var S = new Array(n).fill(1).map(function (e, t) {
          var i = t === a
          if (n <= r) return c.createElement(f, { key: t, selected: i })
          var o = y[t]
          return c.createElement(f, { continuation: Boolean(o), continuationType: o, key: t, selected: i })
        })
        return c.createElement(
          l.a,
          {
            style: [
              b.indicatorWindowContainer,
              { width: 'calc('.concat(r, ' * ').concat(i, 'px)'), height: ''.concat(i, 'px') },
            ],
          },
          c.createElement(
            l.a,
            {
              style: [
                b.indicatorsContainer,
                { height: ''.concat(i, 'px'), width: 'calc('.concat(i, 'px * ').concat(n, ')') },
                y.style,
              ],
            },
            S,
          ),
        )
      }
      function f(e) {
        var t = b.indicator
        if (e.selected) t = b.indicatorSelected
        else if (e.continuation)
          switch (e.continuationType) {
            case v.small:
              t = b.indicatorContinuationSmall
              break
            case v.medium:
              t = b.indicatorContinuationMedium
          }
        return c.createElement(l.a, { style: t })
      }
      function m(e, t, n) {
        var r = e.left,
          a = e.right,
          i = { style: { transform: [{ translateX: -1 * n * r }] } }
        return (
          (i[r - 1] = v.small),
          (i[r] = v.small),
          (i[r + 1] = v.medium),
          (i[a - 1] = v.medium),
          (i[a] = v.small),
          (i[a + 1] = v.small),
          0 === r ? (delete i[0], delete i[1]) : a > t - 2 && (delete i[t - 1], delete i[t - 2]),
          i
        )
      }
      function h(e) {
        return { style: e.spaces.space8, px: e.spacesPx.space8 }
      }
      var b = s.a.create(function (e) {
          var t = h(e).style,
            n = { transition: 'transform 200ms' },
            r = d(
              d({}, n),
              {},
              {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: e.borderRadii.infinite,
                marginHorizontal: e.spaces.space4,
                width: t,
                height: t,
                transform: [{ scale: 0.5 }],
              },
            ),
            a = d(d({}, r), {}, { backgroundColor: e.colors.gray300 })
          return {
            indicatorWindowContainer: { marginVertical: e.spaces.space12, overflow: 'hidden', margin: 'auto' },
            indicatorsContainer: d(
              d({}, n),
              {},
              { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            ),
            indicatorSelected: d(
              d({}, r),
              {},
              {
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.gray300,
                borderStyle: 'solid',
                backgroundColor: e.colors.white,
                transform: [{ scale: 1 }],
              },
            ),
            indicator: d(d({}, r), {}, { backgroundColor: e.colors.gray300 }),
            indicatorContinuationSmall: d(d({}, a), {}, { transform: [{ scale: 0.3 }] }),
            indicatorContinuationMedium: d(d({}, a), {}, { transform: [{ scale: 0.4 }] }),
          }
        }),
        v = Object.freeze({ small: 'small', medium: 'medium' })
    },
    VKFJ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return d
      }),
        n.d(t, 'a', function () {
          return p
        })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = n('RhWx'),
        c = n.n(o),
        s = (n('m9LP'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2G9S'), n('yH/f'), n('A7Vd')),
        l = n('ERkP'),
        u = n('dgjd')
      function d(e) {
        var t = Object(u.a)(e),
          n = t.space,
          r = t.utils,
          a = s.e()
        return l.useMemo(
          function () {
            var e = new Map(),
              t = [],
              i = []
            function o() {
              var e = [].concat(t, i),
                r = (null == n ? void 0 : n.participants.total) || 0,
                a = Math.max(0, r - e.length)
              return { all: e, speakers: t, listeners: i, otherParticipantsTotal: a }
            }
            function s(n, r, a) {
              var o = r.twitter_screen_name
              if (o && !e.has(o)) {
                e.set(o, !0)
                var c = { key: o, user: r, kind: n, periscopeUserId: a }
                d.canParticipantSpeak(n) ? t.push(c) : i.push(c)
              }
            }
            if (!n) return o()
            n.host && s(p.host, n.host, n.host.periscope_user_id)
            var l = [].concat(c()(n.cohosts), c()(n.participants.speakers))
            r.is.replayable || l.push.apply(l, c()(n.participants.listeners))
            for (var u = 0; u < l.length; u++) {
              var f = l[u],
                m = f.periscope_user_id
              if (m)
                a.get(m)
                  ? u < n.cohosts.length
                    ? s(p.cohost, f, m)
                    : s(p.speaker, f, m)
                  : r.is.replayable || s(p.listener, f, m)
            }
            return o()
          },
          [n, a, r.is.replayable],
        )
      }
      ;(d.canParticipantSpeak = function (e) {
        return Boolean(e && f[e])
      }),
        (d.isParticipantHost = function (e) {
          return e === p.host
        })
      var p = Object.freeze({ host: 'host', cohost: 'cohost', speaker: 'speaker', listener: 'listener' }),
        f = ((r = {}), i()(r, p.host, !0), i()(r, p.cohost, !0), i()(r, p.speaker, !0), r)
    },
    Xda3: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return A
      }),
        n.d(t, 'a', function () {
          return q
        }),
        n.d(t, 'b', function () {
          return K
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('OZaJ')
      var r = n('1Pcy'),
        a = n.n(r),
        i = n('5Yy7'),
        o = n.n(i),
        c = n('N+ot'),
        s = n.n(c),
        l = n('AuHH'),
        u = n.n(l),
        d = n('RhWx'),
        p = n.n(d),
        f = n('VrFO'),
        m = n.n(f),
        h = n('Y9Ll'),
        b = n.n(h),
        v = n('KEM+'),
        y = n.n(v),
        g =
          (n('JtPf'),
          n('7x/C'),
          n('DZ+c'),
          n('jwue'),
          n('+oxZ'),
          n('lZm3'),
          n('yH/f'),
          n('MvUL'),
          n('KqXw'),
          n('2C8o')),
        S = n('nYBC'),
        O = n('Q/sS'),
        w = n('A7Vd'),
        E = n('Pc/x'),
        P = n('Chkh'),
        k = n('b2fv'),
        j = n('SrIh'),
        x = n('fEA7'),
        C = n.n(x),
        I = n('ssnq')
      function R(e) {
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
            r = u()(e)
          if (t) {
            var a = u()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return s()(this, n)
        }
      }
      function T(e, t) {
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
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T(Object(n), !0).forEach(function (t) {
                y()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : T(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var M = '/chatapi/v1/chatnow',
        D = '/chatapi/v1/history',
        _ = new I.a({ chatmanClient: null })
      function A() {
        var e = _.getState().chatmanClient
        e && e.disconnect(), P.a.reset(), g.b(), _.reset()
      }
      w.d.subscribe(
        function (e) {
          return e.chatToken
        },
        function (e) {
          e &&
            (function (e) {
              A(),
                new z(e).connect().then(function (e) {
                  P.a.start(),
                    _.setState(function (t) {
                      return L(L({}, t), {}, { chatmanClient: e })
                    })
                })
            })(e)
        },
      )
      var z = (function () {
          function e(t) {
            var n = this
            m()(this, e),
              y()(this, 'session', null),
              y()(this, 'socket', null),
              y()(this, 'socketState', V.Uninitialized),
              y()(this, 'handleOnOpen', function () {
                n.authAndJoinRoom(), (n.socketState = V.Connected)
              }),
              y()(this, 'handleOnMessage', function (e) {
                if ('string' == typeof e.data) {
                  var t = JSON.parse(e.data)
                  if (t.kind === U.Chat) {
                    var n = t.payload,
                      r = t.signature,
                      a = new N(n, { signature: r })
                    P.a.publish(a)
                  }
                }
              }),
              (this.chatToken = t)
          }
          return (
            b()(e, [
              {
                key: 'connect',
                value: function () {
                  var e = this
                  return new Promise(function (t, n) {
                    E.a.proxsee
                      .accessChat(e.chatToken)
                      .then(
                        function (n) {
                          return (e.session = n), O.h.getState().isReplay ? e.loadChatHistory() : e.openSocket(), t(e)
                        },
                        function (e) {
                          return n(e)
                        },
                      )
                      .catch(function (e) {
                        Object(j.a)(e)
                      })
                  })
                },
              },
              {
                key: 'disconnect',
                value: function () {
                  this.closeSocket(), (this.session = null)
                },
              },
              {
                key: 'openSocket',
                value: function () {
                  if (this.session) {
                    var e = this.session.endpoint.replace('https://', 'wss://') + M
                    this.closeSocket()
                    try {
                      ;(this.socketState = V.Opening),
                        (this.socket = new WebSocket(e)),
                        (this.socket.onopen = this.handleOnOpen),
                        (this.socket.onmessage = this.handleOnMessage)
                    } catch (t) {
                      Object(j.a)(t), (this.socketState = V.Error)
                    }
                  }
                },
              },
              {
                key: 'closeSocket',
                value: function () {
                  this.socket &&
                    ((this.socket.onopen = function () {}),
                    (this.socket.onmessage = function () {}),
                    (this.socket.onclose = function () {}),
                    this.socket.close()),
                    (this.socket = null),
                    (this.socketState = V.Closed)
                },
              },
              {
                key: 'authAndJoinRoom',
                value: function () {
                  if (this.session) {
                    var e,
                      t,
                      n = this.session,
                      r = n.access_token,
                      a = n.room_id
                    null === (e = this.socket) || void 0 === e || e.send(F.build(r).toString()),
                      null === (t = this.socket) || void 0 === t || t.send(B.buildJoin(a).toString())
                  }
                },
              },
              {
                key: 'loadChatHistory',
                value: function () {
                  var e = this,
                    t = this.session || {},
                    n = t.access_token,
                    r = t.endpoint
                  if (!n || !r) return Promise.resolve([])
                  try {
                    return new Promise(function (t, a) {
                      var i = [],
                        o = ''
                      !(function a(c) {
                        if (c) {
                          var s = c.cursor,
                            l = c.messages
                          if (!s) return S.onCompleteHistory(), t(i)
                          ;(o = s), e.handleHistoryMessages(l), i.push.apply(i, p()(l))
                        }
                        E.a.proxsee.getChatHistory({ access_token: n, host: r, path: D, cursor: o }).then(a)
                      })()
                    })
                  } catch (a) {
                    Object(j.a)(a)
                  }
                },
              },
              {
                key: 'handleHistoryMessages',
                value: function (e) {
                  var t = []
                  e.forEach(function (e) {
                    if (e.kind === U.Chat) {
                      var n = e.payload,
                        r = e.signature
                      t.push(new N(n, { signature: r }))
                    }
                  }),
                    S.insert.apply(S, t)
                },
              },
            ]),
            e
          )
        })(),
        H = (function () {
          function e(t, n) {
            m()(this, e), (this.payload = t), (this.kind = n)
          }
          return (
            b()(e, [
              {
                key: 'toString',
                value: function () {
                  var e = this.payload,
                    t = this.kind
                  return JSON.stringify({ payload: e, kind: t })
                },
              },
            ]),
            e
          )
        })(),
        B = (function (e) {
          o()(n, e)
          var t = R(n)
          function n(e) {
            var r
            return m()(this, n), (r = t.call(this, e, U.Control)), y()(a()(r), 'data', {}), (r.data = JSON.parse(e)), r
          }
          return (
            b()(n, null, [
              {
                key: 'buildJoin',
                value: function (e) {
                  return new n(JSON.stringify({ body: JSON.stringify({ room: e }), kind: W.Join }))
                },
              },
            ]),
            n
          )
        })(H),
        F = (function (e) {
          o()(n, e)
          var t = R(n)
          function n(e) {
            return m()(this, n), t.call(this, e, U.Auth)
          }
          return (
            b()(n, null, [
              {
                key: 'build',
                value: function (e) {
                  return new n(JSON.stringify({ access_token: e }))
                },
              },
            ]),
            n
          )
        })(H),
        N = (function (e) {
          o()(n, e)
          var t = R(n)
          function n(e) {
            var r,
              i,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            m()(this, n), (i = t.call(this, e, U.Chat)), y()(a()(i), 'data', {}), y()(a()(i), 'body', {})
            var c = o.currentNtpTimeInSeconds,
              s = o.isReplay,
              l = o.signature
            return (
              (i.data = JSON.parse(e)),
              (i.body = ((null === (r = i.data) || void 0 === r ? void 0 : r.body) && JSON.parse(i.data.body)) || {}),
              i.setUuid(l),
              i.setTime(c, s),
              (i.type = i.body.type),
              (i.ntpTimeInSeconds = i.body.ntpTimeInSeconds),
              (i.timestamp = i.body.timestamp),
              i
            )
          }
          return (
            b()(n, [
              {
                key: 'setUuid',
                value: function (e) {
                  this.body.uuid = e || this.body.uuid || C.a.v4()
                },
              },
              {
                key: 'setTime',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = t && !!this.body.ntpForBroadcasterFrame,
                    r = n ? this.body.ntpForBroadcasterFrame : this.body.ntpForLiveFrame || e,
                    a = parseFloat(r / 4294967296)
                  ;(this.body.ntpTimeInSeconds = a), (this.body.timestamp = Object(k.b)(a).getTime())
                },
              },
              {
                key: 'isEqual',
                value: function (e) {
                  return !(!this.body.uuid || !e.body.uuid) && this.body.uuid === e.body.uuid
                },
              },
            ]),
            n
          )
        })(H),
        V = Object.freeze({
          Uninitialized: 'UNINITIALIZED',
          Opening: 'OPENING',
          Connected: 'CONNECTED',
          Error: 'ERROR',
          Closed: 'CLOSED',
        }),
        U = Object.freeze({ Chat: 1, Control: 2, Auth: 3 }),
        W = Object.freeze({ Join: 1, Leave: 2, Roster: 3, Presence: 4, Ban: 8 }),
        q = Object.freeze({
          Unknown: 0,
          Chat: 1,
          Heart: 2,
          Join: 3,
          Location: 4,
          BroadcastEnded: 5,
          InviteFollowers: 6,
          BroadcastStartedLocally: 7,
          BroadcasterUploadedReplay: 8,
          Timestamp: 9,
          LocalPromptToFollowBroadcaster: 10,
          LocalPromptToShareBroadcast: 11,
          BroadcasterBlockedViewer: 12,
          SubscriberSharedOnTwitter: 13,
          SubscriberBlockedViewer: 14,
          SubscriberSharedOnFacebook: 15,
          Screenshot: 16,
          Sentence: 29,
          Sparkle: 36,
          FirstSparkle: 37,
          CommentMuted: 39,
          HydraControlMessage: 40,
          CommentMutedByModerator: 41,
          CommentUnmutedByModerator: 42,
          LocalShouldReportGuestUser: 43,
          UserIsTyping: 44,
          ServerAudioTranscription: 45,
          ChatCaption: 201,
        }),
        K = Object.freeze({ RemoveParticipant: 15 })
    },
    Zg3A: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ERkP'),
        o = n('Lsrn'),
        c = n('k/Ka')
      function s(e, t) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var u = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(c.a)(
          'svg',
          l(
            l({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [o.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          i.createElement(
            'g',
            null,
            i.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
            }),
          ),
        )
      }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    b2fv: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return o
        })
      var r = new Date('Jan 01 1900 GMT').getTime(),
        a = new Date('Jan 01 1970 GMT').getTime() - r,
        i = function (e) {
          return new Date(1e3 * e - a)
        },
        o = function (e) {
          return (e + a) / 1e3
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
    dgjd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return T
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('tVqn'), n('z84I'), n('jwue'), n('+oxZ'), n('+KXO'), n('JtPf'), n('7x/C'), n('IAdD'), n('Q/sS')),
        o = n('A7Vd'),
        c = n('ERkP'),
        s = n('RqPI'),
        l = n('QEWO'),
        u = n('Pc/x'),
        d = (n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('VrFO')),
        p = n.n(d),
        f = n('Y9Ll'),
        m = n.n(f),
        h = n('KEM+'),
        b = n.n(h),
        v = (n('Ysgh'), n('KqXw'), n('KOtZ'), n('2G9S'), n('cnVF'))
      function y(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                b()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var S = new ((function () {
          function e() {
            p()(this, e), b()(this, 'events', [])
          }
          return (
            m()(e, [
              {
                key: 'createScribeFunction',
                value: function (e) {
                  var t = this
                  return function (n, r) {
                    var i = e.analytics.contextualScribeNamespace,
                      o = g(g({}, e.details), {}, { scribe_context_namespace: i }, r),
                      c = n.split(':'),
                      s = a()(c, 6),
                      l = { page: s[1], section: s[2], component: s[3], element: s[4], action: s[5] },
                      u = Object.keys(l).reduce(function (e, t) {
                        var n = l[t]
                        return '*' === n || (e[t] = n || void 0), e
                      }, {})
                    e.analytics.scribe(g(g({}, u), {}, { data: { audio_space_details: o } })),
                      t.events.push({ event_name: ''.concat(v.w).concat(n), ts: Date.now(), audio_space_details: o }),
                      t.timerId || t._scheduleNextPublish()
                  }
                },
              },
              {
                key: '_publish',
                value: function () {
                  var e = this
                  return u.a.proxsee.trackAudiospaceClientEvent(this.events).then(function () {
                    ;(e.events = []), e._scheduleNextPublish()
                  })
                },
              },
              {
                key: '_scheduleNextPublish',
                value: function () {
                  var e = this
                  clearTimeout(this.timerId),
                    (this.timerId = setTimeout(function () {
                      return e._publish()
                    }, 5e3))
                },
              },
            ]),
            e
          )
        })())(),
        O = n('nmVb'),
        w = n.n(O),
        E = n('kGix'),
        P = n('3XMw'),
        k = n.n(P),
        j = n('b2fv'),
        x = n('AooF'),
        C = n('Irs7'),
        I = n('LxAE'),
        R = n('yUQf')
      function T(e) {
        var t,
          n,
          r,
          d,
          p,
          f = Object(C.b)(),
          m = Object(R.a)(s.l),
          h = (function (e) {
            var t = (function () {
                var e = Object(I.a)(),
                  t = a()(e.audioSpaces.cache, 2),
                  n = t[0],
                  r = t[1]
                return {
                  getAudioSpace: i,
                  fetchAudioSpace: s,
                  subscribeToScheduledSpace: o,
                  unsubscribeFromScheduledSpace: c,
                  reportSpaceFor: u.a.proxsee.reportSpaceFor,
                  audioContext: e,
                }
                function i(e) {
                  var t = n[e]
                  return t || L(E.a.NONE)
                }
                function o(e) {
                  return u.a.subscribeToScheduledSpace(e).then(function () {
                    return s(e)
                  })
                }
                function c(e) {
                  return u.a.unsubscribeFromScheduledSpace(e).then(function () {
                    return s(e)
                  })
                }
                function s(e, t) {
                  var n,
                    a = i(e)
                  if ('number' == typeof t && a.status !== E.a.NONE && !((Date.now() - a.time) / 1e3 > t))
                    return Promise.resolve(a)
                  function o(t) {
                    var n = L(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                    r(function (t) {
                      var r = Object.assign({}, t[e], n)
                      return (t[e] = r), Object.assign({}, t)
                    })
                  }
                  return u.a.initialized()
                    ? (o(E.a.LOADING),
                      u.a
                        .audioSpace(e)
                        .catch(function (e) {
                          n = e
                        })
                        .then(function (e) {
                          e ? o(E.a.LOADED, { data: e, error: void 0 }) : n && o(E.a.FAILED, { error: n })
                        }))
                    : Promise.reject(new Error('[useAudioSpaceMetadata] AudioModule not initialized'))
                }
              })(),
              n = t.audioContext,
              r = t.fetchAudioSpace,
              i = t.getAudioSpace,
              c = t.reportSpaceFor,
              s = t.subscribeToScheduledSpace,
              l = t.unsubscribeFromScheduledSpace
            function d(t) {
              return r(e, t)
            }
            function p() {
              return i(e)
            }
            function f() {
              return s(e)
            }
            function m() {
              return l(e)
            }
            function h() {
              var t = {}
              return (
                Object.keys(c).forEach(function (n) {
                  t[n] = function () {
                    var t,
                      r = o.a(),
                      a = null === (t = p().data) || void 0 === t ? void 0 : t.started_at,
                      i = { broadcast_id: e, ntp_timestamp: void 0, timecode: void 0 }
                    if (r && r.id3NtpTime && a) {
                      var s = Math.floor(r.id3NtpTime)
                      ;(i.ntp_timestamp = s), (i.timecode = Math.floor((Object(j.b)(s) - a) / 1e3))
                    }
                    return c[n](i)
                  }
                }),
                t
              )
            }
            return { fetch: d, get: p, subscribe: f, unsubscribe: m, audioContext: n, report: h() }
          })(e),
          b = h.audioContext,
          v = h.report,
          y = h.subscribe,
          g = h.unsubscribe,
          O = h.get(),
          P = O.data,
          k = null == P ? void 0 : P.state,
          T = {
            NotStarted: k === x.a.SpaceState.NotStarted,
            PrePublished: k === x.a.SpaceState.PrePublished,
            Running: k === x.a.SpaceState.Running,
            TimedOut: k === x.a.SpaceState.TimedOut,
            Ended: k === x.a.SpaceState.Ended,
            Canceled: k === x.a.SpaceState.Canceled,
            loaded: !!P || O.status === E.a.FAILED,
            loading: O.status === E.a.LOADING,
            error: O.status === E.a.FAILED && O.error,
            joined:
              (null === (t = b.activeItem) || void 0 === t ? void 0 : t.type) === l.a.space &&
              (null === (n = b.activeItem) || void 0 === n ? void 0 : n.id) === e,
            recording: !1,
            replayable: !1,
          }
        function _() {
          var e,
            t,
            n = null == P || null === (e = P.title) || void 0 === e ? void 0 : e.trim(),
            r = null == P || null === (t = P.host) || void 0 === t ? void 0 : t.display_name
          return n || (r ? D.title({ name: r }) : D.titleFallback)
        }
        null != P &&
          P.is_space_available_for_replay &&
          (T.Running ? (T.recording = !0) : T.Ended && (T.replayable = !0))
        var A = 'live_not_recording'
        null != P && P.is_space_available_for_replay && (A = T.Running ? 'live_recording' : 'replay')
        var z = S.createScribeFunction({
            analytics: f,
            details: {
              broadcast_id: e,
              host_id:
                null == P || null === (r = P.host) || void 0 === r || null === (d = r.user) || void 0 === d
                  ? void 0
                  : d.rest_id,
              host_periscope_id: null == P || null === (p = P.host) || void 0 === p ? void 0 : p.periscope_user_id,
              audio_space_start_type: null != P && P.scheduled_start ? 'scheduled' : 'adhoc',
              audio_space_recording_type: A,
              state: k,
              is_logged_in: m,
            },
          }),
          H = {
            is: T,
            title: _,
            hashtags: function () {
              return w()(_()).map(function (e) {
                return '#'.concat(e)
              })
            },
            scribe: z,
            state: function () {
              var e,
                t = x.a.SpaceMediaStateEnum
              return (
                T.loaded && T.error
                  ? (e = t.unavailable)
                  : T.replayable
                  ? (e = t.replay)
                  : T.Ended || T.TimedOut
                  ? (e = t.ended)
                  : T.Running
                  ? (e = t.live)
                  : T.NotStarted || T.PrePublished
                  ? (e = t.scheduled)
                  : T.Canceled && (e = t.canceled),
                e
              )
            },
          },
          B = u.a.initialized(),
          F = c.useRef({})
        ;(F.current.utils = H),
          (F.current.audioSpaceMetadata = h),
          c.useEffect(
            function () {
              var e,
                t = M
              return (
                B &&
                  (function n() {
                    var r = F.current.utils.is.loaded,
                      a = F.current.utils.is.Running
                    ;(r && !a) || (F.current.audioSpaceMetadata.fetch(t), (e = setTimeout(n, 1e3 * t)))
                  })(),
                function () {
                  clearTimeout(e)
                }
              )
            },
            [B, e, k],
          )
        var N = {
          subscribe: y,
          unsubscribe: g,
          report: v,
          join: function (t) {
            var n = P
            n &&
              u.a.proxsee.login().then(function () {
                var r = H.is.Running || H.is.replayable,
                  a = n.media_key
                a &&
                  r &&
                  (H.is.replayable &&
                    (i.e(n.started_at), H.scribe(':audiospace:replay:recording:play:click', { origin: t })),
                  b.load.space(e, a, H.is.Running),
                  H.scribe(':audiospace:event:join:listener:success', { origin: t }))
              })
          },
        }
        return { space: P, audioContext: b, utils: H, handlers: N }
      }
      function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { status: e, time: Date.now() }
        return t.data && (n.data = t.data), t.error && (n.error = t.error), n
      }
      var M = 15,
        D = { title: k.a.b6d3e0ee, titleFallback: k.a.ab4fc8bb }
    },
    hUaP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return u
        })
      var r = n('rHpw'),
        a = 0.85,
        i = 0.7635,
        o = 0.5,
        c = 812,
        s = 300
      function l(e, t, n) {
        var l = e
        if (t) {
          l = Math.min(c, e)
          var d = n || {},
            p = d.height,
            f = d.top + p
          if (f - l < 0) {
            var m = f - u(r.a.theme).marginVerticalPx
            m > s && (l = m)
          }
        }
        return { collapse: l * o, half: l * i, sheetMaxHeight: l * a, full: l }
      }
      function u(e) {
        var t = e.borderRadiiPx.large,
          n = e.spaces.space16,
          r = e.spacesPx.space8
        return {
          borderRadius: t,
          paddingHorizontal: n,
          marginVertical: e.spaces.space20,
          marginVerticalPx: e.spacesPx.space20,
          shadowOffset: r,
        }
      }
    },
    kRXa: function (e, t, n) {
      'use strict'
      n('OZaJ')
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        f = n('5Yy7'),
        m = n.n(f),
        h = n('N+ot'),
        b = n.n(h),
        v = n('AuHH'),
        y = n.n(v),
        g = n('KEM+'),
        S = n.n(g),
        O = (n('2G9S'), n('ERkP')),
        w = n('/yvb'),
        E = n('3XMw'),
        P = n.n(E),
        k = n('py1r'),
        j = n('oLZl'),
        x = n('9RkS'),
        C = n('rHpw'),
        I = n('A53h'),
        R = n('sTSP'),
        T = n('MWbm')
      function L(e) {
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
            r = y()(e)
          if (t) {
            var a = y()(this).constructor
            n = Reflect.construct(r, arguments, a)
          } else n = r.apply(this, arguments)
          return b()(this, n)
        }
      }
      var M = P.a.b3160a69,
        D = (function (e) {
          m()(n, e)
          var t = L(n)
          function n() {
            var e
            s()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              S()(p()(e), 'state', { showSlider: !1, isSliderActive: !1 }),
              S()(p()(e), '_handleButtonLayoutChange', function (t) {
                var n = e.props.containerHeight,
                  r = e.state.sliderMaxHeight,
                  a = t.nativeEvent.layout.height
                if (n) {
                  var i = ''.concat(n - a - C.a.theme.spacesPx.space20, 'px')
                  i !== r && e.setState({ sliderMaxHeight: i })
                }
              }),
              S()(p()(e), '_handleSliderActive', function (t) {
                return e.setState({ isSliderActive: t })
              }),
              S()(p()(e), '_showSlider', function () {
                return e.setState({ showSlider: !0 })
              }),
              S()(p()(e), '_hideSlider', function () {
                return e.setState({ showSlider: !1 })
              }),
              S()(p()(e), '_shouldShowSlider', function (e) {
                return e.showSlider || e.isSliderActive
              }),
              S()(p()(e), '_normalizeValue', function (e) {
                return Math.max(0, Math.min(e, 100))
              }),
              S()(p()(e), '_getSliderMarginStyles', function (e) {
                var t = null != e ? e : 'medium'
                return A['large' === t ? 'xLarge' : t]
              }),
              S()(p()(e), '_handleKeyDown', function (t) {
                var n = e.props,
                  r = n.onSliderChange,
                  a = n.volumePercent,
                  i = t.altKey,
                  o = t.ctrlKey,
                  c = t.metaKey
                if (!(i || o || c)) {
                  var s = t.key === j.a.ArrowUp || t.key === j.a.ArrowRight,
                    l = t.key === j.a.ArrowDown || t.key === j.a.ArrowLeft
                  if (s || l) {
                    var u = e._normalizeValue(a + 10 * (s ? 1 : -1))
                    r && r(u), t.preventDefault()
                  }
                }
              }),
              e
            )
          }
          return (
            u()(n, [
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    r = n.onHideSlider,
                    a = n.onShowSlider
                  if (n.onSliderChange) {
                    var i = this._shouldShowSlider(t),
                      o = this._shouldShowSlider(this.state)
                    !i && o && a && a(), i && !o && r && r()
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabelIcon,
                    r = t.accessibilityLabelSlider,
                    i = t.containerHeight,
                    c = t.isMuted,
                    s = t.onHideSlider,
                    l = t.onMuteToggle,
                    u = t.onShowSlider,
                    d = t.onSliderChange,
                    p = t.pullRight,
                    f = t.sliderColor,
                    m = t.volumePercent,
                    h = t.withGraySliderTrack,
                    b = t.withNavigationSliderBackground,
                    v = o()(t, [
                      'accessibilityLabelIcon',
                      'accessibilityLabelSlider',
                      'containerHeight',
                      'isMuted',
                      'onHideSlider',
                      'onMuteToggle',
                      'onShowSlider',
                      'onSliderChange',
                      'pullRight',
                      'sliderColor',
                      'volumePercent',
                      'withGraySliderTrack',
                      'withNavigationSliderBackground',
                    ]),
                    y = c ? O.createElement(I.a, null) : O.createElement(R.a, null),
                    g = b ? _.sliderWithNavigationBackground : _.sliderWithDefaultBackground
                  return O.createElement(
                    k.a,
                    {
                      disabled: !d,
                      onFocusRingGained: d ? this._showSlider : void 0,
                      onFocusRingLost: d ? this._hideSlider : void 0,
                      onHoverIn: d ? this._showSlider : void 0,
                      onHoverOut: d ? this._hideSlider : void 0,
                    },
                    O.createElement(
                      T.a,
                      { onKeyDown: d ? this._handleKeyDown : void 0 },
                      O.createElement(
                        w.a,
                        a()(
                          {
                            accessibilityLabel: n,
                            icon: y,
                            onLayout: this._handleButtonLayoutChange,
                            onPress: l,
                            pullRight: p,
                            type: 'onMediaText',
                          },
                          v,
                        ),
                      ),
                      d &&
                        O.createElement(k.a, { onFocusRingGained: u, onFocusRingLost: s }, function (t) {
                          var n = t.isFocusedWithin
                          return O.createElement(
                            T.a,
                            {
                              style: [
                                _.sliderBackground,
                                g,
                                e._getSliderMarginStyles(v.size),
                                n || e._shouldShowSlider(e.state) ? null : C.a.visuallyHidden,
                                i && { maxHeight: e.state.sliderMaxHeight },
                              ],
                            },
                            O.createElement(x.a, {
                              accessibilityLabel: r,
                              accessibilityLabelValueText: M({ volumePercent: m }),
                              color: f || 'white',
                              isVertical: !0,
                              keyboardStep: 10,
                              max: 100,
                              min: 0,
                              onActive: e._handleSliderActive,
                              onChange: d,
                              step: 1,
                              value: c ? 0 : m || 0,
                              withGrayBackground: h,
                            }),
                          )
                        }),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(O.PureComponent)
      S()(D, 'defaultProps', { pullRight: !1 })
      var _ = C.a.create(function (e) {
          return {
            sliderBackground: {
              bottom: 0,
              borderRadius: e.borderRadii.xLarge,
              height: 'calc('.concat(e.spaces.space64, '*2)'),
              left: e.spaces.space4,
              position: 'absolute',
              padding: e.spaces.space12,
              paddingVertical: e.spaces.space16,
              right: e.spaces.space4,
            },
            sliderWithDefaultBackground: { backgroundColor: e.colors.translucentBlack30 },
            sliderWithNavigationBackground: {
              backgroundColor: e.colors.navigationBackground,
              boxShadow: e.boxShadows.xSmall,
            },
          }
        }),
        A = C.a.create(function (e) {
          var t = e.spaces,
            n = e.spacesPx,
            r = ''.concat(n.space16 + n.space4 + n.space2, 'px'),
            a = ''.concat(n.space20 + n.space24, 'px'),
            i = ''.concat(n.space12 + n.space40, 'px')
          return {
            xSmall: { marginBottom: t.space24 },
            small: { marginBottom: t.space32 },
            medium: { marginBottom: t.space36 },
            large: { marginBottom: a },
            xLarge: { marginBotom: i },
            smallCompact: { marginBottom: r },
            DEPRECATED_normalCompact: { marginBottom: t.space32 },
            DEPRECATED_normal: { marginBottom: t.space40 },
          }
        })
      t.a = D
    },
    lOQR: function (e, t, n) {
      'use strict'
      n('hBpG')
      var r = n('6/RC'),
        a = n.n(r),
        i = n('aITJ'),
        o = {
          setLocation: function (e) {
            document.location = e
          },
          getAppStoreURLs: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              t = c(e),
              n = [t.android, t.ios, t.windows],
              r = n.find(function (e) {
                return e.matches()
              })
            return r ? [r] : n
          },
          getiOSAppStoreLink: function (e) {
            var t = c(e)
            return t.ios.matches() ? t.ios.url : t.ios.webUrl
          },
          getAndroidAppStoreLink: function (e) {
            var t = c(e)
            return t.android.matches() ? t.android.url : t.android.webUrl
          },
          goToAppStore: function () {
            var e = this.getAppStoreURLs()
            e[0] && o.setLocation(e[0].url)
          },
          openApp: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'twitter://timeline'
            a.a.canUseDOM && o.setLocation(e)
          },
        },
        c = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah'
          return {
            android: {
              platform: 'android',
              matches: function () {
                return i.b.isAndroid()
              },
              url: 'market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D'.concat(e),
              webUrl:
                'https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D'.concat(
                  e,
                ),
            },
            ios: {
              platform: 'ios',
              matches: function () {
                return i.b.isIOS()
              },
              url: 'itmss://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
              webUrl: 'https://itunes.apple.com/us/app/twitter/id333903271?mt=8&uo='.concat(e),
            },
            windows: {
              platform: 'windows',
              matches: function () {
                return i.b.isWindowsPhone()
              },
              url: 'ms-windows-store://pdp/?ProductId=9wzdncrfj140',
              webUrl: 'https://www.microsoft.com/p/twitter/9wzdncrfj140',
            },
          }
        }
      t.a = o
    },
    nYBC: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'store', function () {
          return u
        }),
        n.d(t, 'insert', function () {
          return d
        }),
        n.d(t, 'onCompleteHistory', function () {
          return p
        }),
        n.d(t, 'seek', function () {
          return f
        }),
        n.d(t, 'publishToQueue', function () {
          return m
        })
      n('jwue'), n('+oxZ'), n('Ee2X'), n('M+/F')
      var r = n('2C8o'),
        a = n('Q/sS'),
        i = n('A7Vd'),
        o = n('G/+M'),
        c = n('b2fv'),
        s = n('VY6S'),
        l = n('Chkh'),
        u = new (n('ssnq').a)({ history: [] })
      function d() {
        for (var e = u.getState(), t = e.history, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a]
        r.forEach(function (e) {
          var n = Object(l.b)(t, function (t) {
            return e.ntpTimeInSeconds - t.ntpTimeInSeconds
          })
          t.splice(n + 1, 0, e)
        })
      }
      function p() {
        var e,
          t = null === (e = i.a()) || void 0 === e ? void 0 : e.id3NtpTime
        t && m(t)
      }
      var f = Object(s.a)(function (e) {
        var t = a.h.getState().startTimeMs
        if (t) {
          var n = t + e
          m(Object(c.a)(n))
        }
      }, 100)
      function m(e) {
        l.a.reset(), r.b(), o.b.reset()
        var t = u.getState().history,
          n = Object(l.b)(t, function (t) {
            return e - t.ntpTimeInSeconds
          })
        t.slice(n).forEach(function (e) {
          return l.a.publish(e)
        }),
          l.a.start()
      }
    },
    ndUM: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = (n('ho0z'), n('21zW')),
        l = n('rHpw'),
        u = n('MH+I'),
        d = n('jV+4'),
        p = n('MWbm')
      function f(e) {
        var t = e.speaker,
          n = e.speakerAvatarSize,
          r = void 0 === n ? 'small' : n,
          a = e.speakerNameSize,
          i = void 0 === a ? 'subtext2' : a,
          o = e.speakerScreenNameSize,
          s = void 0 === o ? 'subtext2' : o,
          l = e.timestamp,
          u = e.withSpeakerAvatar,
          f = void 0 === u || u,
          b = e.withSpeakerScreenName,
          v = void 0 === b || b,
          y = e.withTimestamp,
          g = void 0 !== y && y,
          S = Date.now() - l
        return c.createElement(
          p.a,
          { style: h.root },
          c.createElement(d.a, {
            avatarSize: r,
            name: t.name,
            nameSize: i,
            profileImageUrl: f ? t.profile_image_url_https : '',
            screenName: t.screen_name,
            screenNameSize: s,
            style: h.userName,
            withScreenName: v,
          }),
          g ? c.createElement(m, { size: i, timeMs: S }) : null,
        )
      }
      function m(e) {
        var t = e.size,
          n = void 0 === t ? 'small' : t,
          r = e.timeMs
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(s.a, { size: n }),
          c.createElement(u.a, { color: 'gray700', humanReadable: !0, size: n, timeMs: r }),
        )
      }
      var h = l.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1, marginTop: '0.25em' },
            userName: { marginBottom: e.spaces.space4, paddingRight: e.spaces.space4 },
          }
        }),
        b = n('t62R')
      function v(e) {
        var t = e.caption,
          n = e.captionTextSize,
          r = e.withSpeaker,
          i = void 0 === r || r,
          s = o()(e, ['caption', 'captionTextSize', 'withSpeaker']),
          l = t.speaker
        return c.createElement(
          p.a,
          { style: [y.root, !i && y.missingSpeakerSpacer] },
          i ? c.createElement(f, a()({}, s, { speaker: l, timestamp: t.timestamp })) : null,
          c.createElement(b.b, { lang: t.lang, size: n, style: y.captionText }, t.text),
        )
      }
      var y = l.a.create(function (e) {
          return {
            root: { paddingBottom: '0.25em', flex: 1 },
            missingSpeakerSpacer: { paddingTop: '0.1em' },
            captionText: {
              lineHeight: '1.5em',
              paddingVertical: '0.1em',
              fontWeight: e.highContrastEnabled ? e.fontWeights.heavy : e.fontWeights.regular,
            },
          }
        }),
        g = n('KEM+'),
        S = n.n(g),
        O =
          (n('z84I'),
          n('i4UL'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          function (e) {
            return { width: e, height: e }
          })
      function w(e, t) {
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
      function E(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? w(Object(n), !0).forEach(function (t) {
                S()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function P(e) {
        var t = e.size,
          n = Math.floor(t / 4.5)
        return c.createElement(p.a, { style: [C.root, j(t)] }, c.createElement(k, { width: n }))
      }
      function k(e) {
        var t = e.width
        return c.createElement(
          c.Fragment,
          null,
          Array(3)
            .fill(0)
            .map(function (e, n) {
              return c.createElement(p.a, { key: n, style: [C.dot, x(n, t)] })
            }),
        )
      }
      function j(e) {
        return E({}, O(e))
      }
      function x(e, t) {
        return E({ animationDelay: ''.concat(0.5 * e, 's'), borderRadius: '100%' }, O(t))
      }
      var C = l.a.create(function (e) {
          return {
            root: { alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'center' },
            dot: {
              position: 'relative',
              backgroundColor: e.colors.purple500,
              display: 'inline-block',
              margin: 'auto',
              pointerEvents: 'none',
              willChange: 'transform',
              animationKeyframes: [
                {
                  '0%': { backgroundColor: e.colors.purple500 },
                  '50%': { backgroundColor: e.colors.purple200 },
                  '100%': { backgroundColor: e.colors.purple200 },
                },
              ],
              animationDirection: 'alternate',
              animationDuration: '1s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
            },
          }
        }),
        I = n('sIe2')
      function R(e) {
        var t = e.headerHeight
        return c.createElement(p.a, { style: { height: t } })
      }
      function T(e) {
        var t = e.footerHeight,
          n = e.unintelligible
        return c.createElement(
          c.Fragment,
          null,
          n ? c.createElement(P, { size: 20 }) : null,
          c.createElement(p.a, { style: { height: t } }),
        )
      }
      var L = l.a.create(function (e) {
        return {
          root: { height: '100%', width: '100%', flex: 1 },
          captionsContainer: { maxHeight: '100%', height: '100%' },
        }
      })
      t.a = function (e) {
        var t = e.captions,
          n = e.footerHeight,
          r = void 0 === n ? 28 : n,
          i = e.headerHeight,
          s = void 0 === i ? 28 : i,
          l = e.scrollContainerStyle,
          u = e.unintelligible,
          d = void 0 !== u && u,
          f = e.withFrequentSpeakerAnnouncement,
          m = void 0 !== f && f,
          h = o()(e, [
            'captions',
            'footerHeight',
            'headerHeight',
            'scrollContainerStyle',
            'unintelligible',
            'withFrequentSpeakerAnnouncement',
          ]),
          b = c.useRef(null),
          y = c.useRef(null),
          g = c.useRef({ containerHeight: void 0, hasUserScrolledUp: !1 })
        function S() {
          var e, t
          ;(null !== (e = g.current) && void 0 !== e && e.hasUserScrolledUp) ||
            null === (t = y.current) ||
            void 0 === t ||
            t.scrollToEnd({ animated: !0 })
        }
        return (
          c.useEffect(function () {
            var e
            g.current.containerHeight =
              null == b || null === (e = b.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height
          }, []),
          c.useEffect(function () {
            var e = null
            return (
              (function t() {
                S(), (e = setTimeout(t, 1500))
              })(),
              function () {
                clearTimeout(e)
              }
            )
          }, []),
          c.createElement(
            p.a,
            { ref: b, style: L.root },
            c.createElement(I.a, {
              ListFooterComponent: c.createElement(T, { footerHeight: r, unintelligible: d }),
              ListHeaderComponent: c.createElement(R, { headerHeight: s }),
              accessibilityRole: 'listbox',
              contentContainerStyle: { marginBottom: 0 },
              data: t,
              keyExtractor: function (e) {
                return e.sequenceId
              },
              maintainVisibleContentPosition: { minIndexForVisible: 0 },
              onEndReached: function () {
                S()
              },
              onScroll: function (e) {
                var t = e.nativeEvent,
                  n = t.contentOffset,
                  a = t.contentSize,
                  i = t.layoutMeasurement,
                  o = 2 * (g.current.containerHeight || 0) + r,
                  c = a.height - i.height - n.y - o > 0
                g.current.hasUserScrolledUp = c
              },
              ref: y,
              renderItem: function (e) {
                var n,
                  r,
                  i,
                  o = e.index,
                  s = e.item,
                  l = !0
                return (
                  m ||
                    ((r = s.speaker),
                    (i = null === (n = t[o - 1]) || void 0 === n ? void 0 : n.speaker),
                    (l = !(r && i && r.id_str && i.id_str
                      ? r.id_str === i.id_str
                      : r && i && r.screen_name && i.screen_name && r.screen_name === i.screen_name))),
                  c.createElement(v, a()({}, h, { caption: s, key: s.sequenceId, withSpeaker: l }))
                )
              },
              scrollEventThrottle: 100,
              style: [L.captionsContainer, l],
            }),
          )
        )
      }
    },
    nmVb: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, a.default)(e), r = 0; r < n.length; r++) t.push(n[r].hashtag)
          return t
        })
      var a = r(n('yyPN'))
      e.exports = t.default
    },
    p3P5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return E
      }),
        n.d(t, 'b', function () {
          return x
        })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o =
          (n('ho0z'),
          n('z84I'),
          n('+KXO'),
          n('1t7P'),
          n('LW0h'),
          n('daRM'),
          n('jwue'),
          n('+oxZ'),
          n('FtHn'),
          n('ERkP')),
        c = n('G/+M'),
        s = n('v6aA'),
        l = n('3XMw'),
        u = n.n(l),
        d = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        p = n('RuTB'),
        f = Object(d.a)({
          loader: function () {
            return u.a.emoji.then(function () {
              return Promise.all([n.e(15), n.e(214)]).then(n.bind(null, '4AX5'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.createElement(p.a, { hasError: e, onRetry: t })
          },
        }),
        m = n('MWbm'),
        h = n('TIdA'),
        b = n('jhWN'),
        v = n('t62R'),
        y = n('jV+4'),
        g = n('rHpw'),
        S = n('VKFJ')
      function O(e, t) {
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
      var w = h.a.createLayoutCache()
      function E(e) {
        var t = o.useContext(s.a).featureSwitches,
          n = e.children,
          r = e.hasNftAvatar,
          a = e.isVerified,
          i = e.kind,
          c = e.name,
          l = e.periscopeUserId,
          u = e.screenName,
          d = e.width,
          p = r && t.isTrue('responsive_web_nft_avatar'),
          f = i ? k[i] : null,
          h = e.profile_image_url_https || '',
          g =
            n ||
            o.createElement(b.a, {
              imageLayoutCache: w,
              screenName: u,
              shape: p ? 'hex' : 'circle',
              size: C,
              style: j.participantAvatarSize,
              uri: h,
              withHoverCard: !0,
              withLink: !0,
            })
        return o.createElement(
          m.a,
          { style: [{ width: d }, j.participantCell] },
          o.createElement(m.a, { style: j.participantAvatarSize }, g, o.createElement(P, { periscopeUserId: l })),
          o.createElement(
            v.b,
            { numberOfLines: 1, size: 'subtext2', style: j.participantCellUsername, weight: 'bold' },
            o.createElement(y.a, { isVerified: a, name: c }),
          ),
          o.createElement(
            m.a,
            { style: j.participantCellKindContainer },
            e.speakingIndicator,
            o.createElement(
              v.b,
              { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: j.participantCellKind },
              f || o.createElement('span', null, ' '),
            ),
          ),
        )
      }
      function P(e) {
        var t = e.periscopeUserId,
          n = I(g.a.theme).avatar.size,
          r = c.c(t)
        return o.createElement(
          o.Fragment,
          null,
          null == r
            ? void 0
            : r.map(function (e) {
                return o.createElement(f, { key: e.id, reaction: e, size: n })
              }),
        )
      }
      var k =
          ((r = {}),
          i()(r, S.a.host, u.a.cededf29),
          i()(r, S.a.cohost, u.a.f77997bf),
          i()(r, S.a.speaker, u.a.i48f4ed8),
          i()(r, S.a.listener, u.a.a77c8e02),
          r),
        j = g.a.create(function (e) {
          var t = I(e),
            n = { width: t.avatar.size, height: t.avatar.size }
          return {
            participantCell: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? O(Object(n), !0).forEach(function (t) {
                      i()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : O(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
              }
              return e
            })({ justifyContent: 'center', alignItems: 'center' }, t.participantCell),
            participantCellUsername: t.participantCellUsername,
            participantCellKindContainer: { position: 'relative', justifyContent: 'center' },
            participantCellKind: { lineHeight: t.kind.lineHeight },
            participantAvatarSize: n,
          }
        })
      function x(e) {
        var t = I(e)
        return {
          getWidth: function () {
            return t.participantCell.minWidth + 2 * t.participantCell.paddingHorizontal
          },
          getHeight: function () {
            return t.participantCell.height + t.participantCell.marginBottom
          },
        }
      }
      var C = 'xxLarge'
      function I(e) {
        var t = b.a.getSizeStyle('xxLarge').width || e.spacesPx.space48,
          n = e.spacesPx.space20,
          r = e.spacesPx.space8,
          a = e.spacesPx.space80 + 2 * r,
          i = e.spacesPx.space4,
          o = e.lineHeightsPx.headline2,
          c = e.lineHeightsPx.headline2
        return {
          participantCell: { marginBottom: n, paddingHorizontal: r, minWidth: a, height: t + i + o + c + n },
          avatar: { size: t },
          participantCellUsername: { lineHeight: o, paddingTop: i },
          kind: { lineHeight: c },
        }
      }
    },
    qzrz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return z
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = n('97Jx'),
        s = n.n(c),
        l = (n('ho0z'), n('2G9S'), n('ERkP')),
        u = n('t62R'),
        d = n('/yvb'),
        p = n('n4Eu'),
        f = n('3XMw'),
        m = n.n(f),
        h = n('cm6r'),
        b = n('/NU0'),
        v = n('wD1h'),
        y = n('Oe3h'),
        g = n('0FVZ'),
        S = n('pjBI'),
        O = n('FBXD'),
        w = n('9RkS'),
        E = n('rHpw'),
        P = n('MH+I'),
        k = n('jhWN'),
        j = n('jV+4'),
        x = n('MWbm'),
        C = n('kRXa'),
        I = n('5Ixf'),
        R = n('AtEG'),
        T = n('hOZg')
      function L(e, t) {
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
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function D(e) {
        var t = V(e.onDockPress),
          n = V(e.onUserPress),
          r = V(e.onRequestClose),
          a = V(e.onTogglePlayback)
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            x.a,
            { style: F.sliderContainer },
            l.createElement(z.SeekSlider, {
              durationMs: e.durationMs,
              externalSeeking: e.isSeeking,
              onSeek: e.onSeek,
              onSliderActive: e.onSliderActive,
              progressMs: e.progressMs,
            }),
          ),
          l.createElement(
            x.a,
            { style: F.dockContentRow },
            l.createElement(k.a, {
              accessibilityHidden: !0,
              focusable: !1,
              onClick: n,
              screenName: e.user.screen_name,
              size: 'large',
              uri: e.user.profile_image_url_https,
              withLink: !0,
            }),
            l.createElement(
              x.a,
              { style: F.dockContentTitle },
              l.createElement(
                S.a,
                { size: 'subtext2' },
                l.createElement(j.a, {
                  isVerified: e.user.verified,
                  name: e.user.name,
                  nameSize: 'subtext2',
                  onLinkClick: n,
                  screenName: e.user.screen_name,
                  screenNameSize: 'subtext2',
                  weight: 'normal',
                  withLink: !0,
                }),
                l.createElement(P.a, { size: 'subtext2', timeMs: e.durationMs }),
              ),
              l.createElement(u.b, { numberOfLines: 1, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
            l.createElement(
              d.a,
              s()(
                {
                  accessibilityLabel: e.isPlaying ? H.pause : H.play,
                  icon: e.isPlaying ? l.createElement(I.a, null) : l.createElement(R.a, null),
                  onPress: a,
                  testID: 'togglePlayback',
                },
                B,
              ),
            ),
            l.createElement(x.a, { style: F.dockContentButtonSpacer }),
            l.createElement(
              d.a,
              s()({ accessibilityLabel: H.close, icon: l.createElement(T.a, null), onPress: r, testID: 'close' }, B),
            ),
          ),
        )
      }
      function _(e) {
        var t = V(e.onDockPress),
          n = V(e.onRequestClose),
          r = V(e.onTogglePlayback),
          a = V(e.onUserPress),
          i = l.useMemo(
            function () {
              var t,
                n = null === (t = e.user.profile_image_extensions_media_color) || void 0 === t ? void 0 : t.palette
              if (n) {
                var r = p.a.get(n)
                if (r) return U(r.rgb)
              }
              return E.a.theme.colors.primary
            },
            [e.user],
          ),
          o = e.isMuted ? H.unmute : H.mute
        return l.createElement(
          x.a,
          { style: [N.wideContainer, N.wideContainerBorderRadius] },
          l.createElement(
            x.a,
            { style: N.mainContentContainer },
            l.createElement(
              x.a,
              { style: [N.wideAvatarContainer, { backgroundColor: i }] },
              l.createElement(k.a, {
                accessibilityHidden: !0,
                focusable: !1,
                onClick: a,
                screenName: e.user.screen_name,
                size: 'xLarge',
                uri: e.user.profile_image_url_https,
                withLink: !0,
              }),
            ),
            l.createElement(
              x.a,
              { style: N.mainContent },
              l.createElement(j.a, {
                isVerified: e.user.verified,
                name: e.user.name,
                nameSize: 'subtext2',
                onLinkClick: a,
                screenName: e.user.screen_name,
                screenNameSize: 'subtext2',
                weight: 'normal',
                withLink: !0,
                withScreenName: !0,
              }),
              l.createElement(u.b, { numberOfLines: 2, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
          ),
          l.createElement(
            x.a,
            { style: N.belowMainContent },
            l.createElement(
              x.a,
              { style: N.slider },
              l.createElement(z.SeekSlider, {
                durationMs: e.durationMs,
                externalSeeking: e.isSeeking,
                onSeek: e.onSeek,
                onSliderActive: e.onSliderActive,
                progressMs: e.progressMs,
                withTimes: !0,
              }),
            ),
            l.createElement(
              x.a,
              { style: N.iconRow },
              l.createElement(
                C.a,
                s()(
                  {
                    accessibilityLabelIcon: o,
                    accessibilityLabelSlider: H.volumeSlider,
                    isMuted: e.isMuted,
                    onMuteToggle: e.onMuteToggle,
                    onSliderChange: e.onVolumeChange,
                    sliderColor: 'purple500',
                    type: void 0,
                    volumePercent: e.volume,
                    withGraySliderTrack: !0,
                    withNavigationSliderBackground: !0,
                  },
                  B,
                ),
              ),
              l.createElement(
                d.a,
                s()(
                  {
                    accessibilityLabel: e.isPlaying ? H.pause : H.play,
                    icon: e.isPlaying ? l.createElement(I.a, null) : l.createElement(R.a, null),
                    onPress: r,
                    testID: 'togglePlayback',
                  },
                  B,
                ),
              ),
            ),
          ),
          l.createElement(
            d.a,
            s()(
              {
                accessibilityLabel: H.close,
                icon: l.createElement(T.a, null),
                onPress: n,
                style: N.closeIcon,
                testID: 'close',
              },
              B,
            ),
          ),
        )
      }
      function A(e) {
        var t,
          n = l.useRef({}),
          r = l.useRef(null),
          i = e.isWide && N.wideContainerBorderRadius,
          o = V(function () {
            n.current.isSliderActive || e.onDockPress()
          }),
          c = l.useMemo(function () {
            return function () {
              r.current && r.current.focus()
            }
          }, [])
        l.useEffect(
          function () {
            var t = (function (e) {
              return function (t) {
                switch (t.code) {
                  case 'Space':
                    return (
                      (function (e) {
                        e.preventDefault(), e.stopPropagation()
                      })(t),
                      e.onTogglePlayback()
                    )
                }
              }
            })(e)
            return (
              r.current && r.current.addEventListener('keydown', t),
              function () {
                r.current && r.current.removeEventListener('keydown', t)
              }
            )
          },
          [r.current, e.onTogglePlayback],
        ),
          l.useEffect(function () {
            return function () {
              clearTimeout(n.current.onSliderActiveTimeout)
            }
          }, [])
        var s = e.title || H.untitled,
          u = M(
            M({}, e),
            {},
            {
              title: s,
              onSliderActive: function (e) {
                clearTimeout(n.current.onSliderActiveTimeout),
                  e
                    ? (n.current.isSliderActive = e)
                    : (n.current.onSliderActiveTimeout = setTimeout(function () {
                        n.current.isSliderActive = e
                      }, W))
              },
            },
          )
        return l.createElement(
          v.a,
          {
            enabled: !0,
            handlers:
              ((t = {}), a()(t, v.a.shortcuts.audio.dock, c), a()(t, v.a.shortcuts.audio.play, e.onTogglePlayback), t),
          },
          l.createElement(
            h.a,
            {
              accessibilityLabel: H.voiceDock,
              onPress: o,
              ref: function (e) {
                r.current = e
              },
              style: [F.container, i],
            },
            l.createElement(
              x.a,
              { style: [F.innerContainer, i] },
              e.isWide ? l.createElement(_, u) : l.createElement(D, u),
            ),
          ),
        )
      }
      function z(e) {
        var t = e.isWide ? g.a.DesktopVoiceTweetDock : g.a.MobileVoiceTweetDock,
          n = [e.isWide ? [N.root, { maxWidth: e.width }] : F.root]
        return l.createElement(
          t,
          null,
          l.createElement(y.a, { id: 'VoiceTweetDock' }, function (t, r) {
            return l.createElement(x.a, s()({ ref: t() }, r({ style: n })), l.createElement(A, e))
          }),
        )
      }
      z.SeekSlider = function (e) {
        var t = l.useRef({}),
          n = l.useState(!1),
          r = o()(n, 2),
          a = r[0],
          i = r[1],
          c = l.useState(e.progressMs),
          s = o()(c, 2),
          u = s[0],
          d = s[1],
          p = a || e.externalSeeking ? u : e.progressMs
        !e.externalSeeking || a || t.current.isSliderActive || (p = e.progressMs)
        var f = l.createElement(w.a, {
          accessibilityLabel: H.seekSlider,
          color: 'purple500',
          keepLTR: !0,
          keyboardStep: 5e3,
          max: e.durationMs,
          min: 0,
          onActive: function (n) {
            e.onSliderActive && e.onSliderActive(n),
              (t.current.isSliderActive = n),
              !0 === n ? d(e.progressMs) : e.onSeek(u),
              i(n)
          },
          onChange: function (n) {
            t.current.isSliderActive ? d(n) : e.onSeek(n)
          },
          step: 'any',
          value: p,
          withGrayBackground: !0,
          withHidingThumb: !0,
        })
        if (!e.withTimes) return f
        var m = e.durationMs - p
        return l.createElement(
          x.a,
          null,
          l.createElement(x.a, { style: N.sliderRow }, l.createElement(x.a, { style: N.slider }, f)),
          l.createElement(
            x.a,
            { style: N.sliderTimes },
            l.createElement(P.a, { size: 'subtext2', timeMs: Object(b.a)(p) ? p : 0 }),
            l.createElement(P.a, {
              countdown: !0,
              size: 'subtext2',
              timeMs: Object(b.a)(m) ? m : 0,
              withCountdownSymbol: !0,
            }),
          ),
        )
      }
      var H = {
          untitled: m.a.gfaaead7,
          close: m.a.af8fa2ad,
          pause: m.a.fb236727,
          play: m.a.f17dfdb5,
          voiceDock: m.a.cfd13f46,
          unmute: m.a.b8b6344a,
          mute: m.a.ec8ab8b4,
          volumeSlider: m.a.c9a642f9,
          seekSlider: m.a.hea01797,
        },
        B = { borderColor: 'transparent', color: 'text', size: 'medium' },
        F = E.a.create(function (e) {
          return {
            root: {},
            container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall },
            innerContainer: { backgroundColor: e.colors.navigationBackground },
            sliderContainer: {
              position: 'absolute',
              zIndex: 1,
              top: 0,
              left: 0,
              right: 0,
              marginTop: -1 * e.spacesPx.space20,
              transform: [{ translateY: e.spacesPx.space20 / 2 }],
            },
            dockContentRow: {
              padding: e.spaces.space4,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
            dockContentTitle: {
              marginHorizontal: e.spaces.space12,
              marginVertical: e.spaces.space4,
              flexDirection: 'column',
              flex: 1,
            },
            dockContentButtonSpacer: { width: e.spaces.space12 },
          }
        }),
        N = E.a.create(function (e) {
          var t = e.spaces.space16,
            n = e.borderRadii.xLarge,
            r = e.spaces.space4
          return {
            root: {
              alignSelf: 'flex-end',
              width: '100%',
              marginVertical: e.spaces.space20,
              marginRight: e.spaces.space20,
            },
            wideContainerBorderRadius: { borderRadius: n },
            wideContainer: { padding: t, paddingRight: r },
            wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 },
            mainContentContainer: { flexDirection: 'row' },
            mainContent: {
              marginLeft: e.spaces.space12,
              marginRight: e.spaces.space40,
              flex: 1,
              flexDirection: 'column',
            },
            username: { color: e.colors.gray700 },
            closeIcon: { position: 'absolute', top: r, right: r },
            belowMainContent: { marginTop: e.spaces.space12, flexDirection: 'row' },
            sliderRow: { flexDirection: 'row' },
            slider: { flex: 1 },
            sliderTimes: { flexDirection: 'row', justifyContent: 'space-between' },
            iconRow: { marginLeft: e.spaces.space12, flexDirection: 'row', justifyContent: 'center' },
          }
        })
      function V(e) {
        return Object(O.a)(function (t) {
          'function' == typeof e && e()
        })
      }
      var U = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          return 'rgba('.concat(e.red, ', ').concat(e.green, ', ').concat(e.blue, ', ').concat(t, ')')
        },
        W = 200
    },
    ssnq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = n('T0aG'),
        o = n.n(i),
        c =
          (n('LqLs'),
          n('7x/C'),
          n('87if'),
          n('lTEL'),
          n('kYxP'),
          n('jwue'),
          n('+oxZ'),
          n('M+/F'),
          n('+KXO'),
          n('ERkP')),
        s = (n('z84I'), n('FgXs'))
      function l(e) {
        return 'object' !== o()(e) || null === e
          ? e
          : Array.isArray(e)
          ? e.map(l)
          : Object(s.a)(e, function (e) {
              return l(e)
            })
      }
      var u = n('fs1G'),
        d = n('9EWH')
      function p(e) {
        var t = l(e || {}),
          n = l(t),
          r = new Set()
        function i(e) {
          return (
            r.add(e),
            function () {
              r.delete(e)
            }
          )
        }
        function s() {
          r.forEach(function (e) {
            e(n)
          })
        }
        function p(e) {
          return function (t) {
            var n = e.current.slice,
              r = e.current.state,
              a = e.current.selector(t)
            e.current.equality(a, n, t, r) ||
              ((e.current.slice = a), (e.current.state = t), e.current.onUpdate(e.current.slice))
          }
        }
        return {
          getState: function () {
            return n
          },
          setState: function (e) {
            ;(n = Object(d.a)(n, function (t) {
              var n,
                r,
                a,
                i = e(t)
              i &&
                'object' === o()(i) &&
                ((n = t),
                (r = i),
                (a = {}),
                Object.keys(r).forEach(function (e) {
                  ;(a[e] = !0), (n[e] = r[e])
                }),
                Object.keys(n).forEach(function (e) {
                  a[e] || delete n[e]
                }))
            })),
              s()
          },
          reset: function () {
            ;(n = l(t)), s()
          },
          useSlice: function (e, t) {
            var r = (null == t ? void 0 : t.equalityFn) || f.equality,
              o = u.a,
              s = c.useRef({ state: n, slice: e(n), selector: e, equality: r, onUpdate: o })
            ;(s.current.selector = e), (s.current.equality = r)
            var l = c.useState(function () {
                return s.current.slice
              }),
              d = a()(l, 2),
              m = d[0],
              h = d[1]
            return (
              c.useEffect(function () {
                var e = !0
                s.current.onUpdate = function (e) {
                  return h(function () {
                    return e
                  })
                }
                var t = p(s)
                function r(n) {
                  e && t(n)
                }
                r(n)
                var a = i(r)
                return function () {
                  ;(e = !1), a()
                }
              }, []),
              m
            )
          },
          subscribe: function (e, t, r) {
            var a = (null == r ? void 0 : r.equalityFn) || f.equality,
              o = { current: { state: n, slice: e(n), selector: e, equality: a, onUpdate: t } },
              c = i(p(o))
            return o.current.onUpdate(o.current.slice), c
          },
        }
      }
      Object(d.b)()
      var f = {
        equality: function (e, t, n, r) {
          return e === t
        },
      }
    },
    tM6R: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var r = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    xVWt: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return Ut
      }),
        n.d(t, 'b', function () {
          return Xt
        }),
        n.d(t, 'c', function () {
          return tn
        })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('m3Bd'),
        a = n.n(r),
        i = n('KEM+'),
        o = n.n(i),
        c = n('97Jx'),
        s = n.n(c),
        l = n('ddV6'),
        u = n.n(l),
        d = (n('JtPf'), n('7x/C'), n('z84I'), n('IAdD'), n('cFyg')),
        p = n('Q/sS'),
        f = n('A7Vd'),
        m = n('ERkP'),
        h = n('G/+M'),
        b = n('RhWx'),
        v = n.n(b),
        y = (n('wFPu'), n('vfdX'), n('ho0z'), n('KOtZ'), n('2G9S'), n('3XMw')),
        g = n.n(y),
        S = n('dgjd'),
        O = n('MWbm'),
        w = n('6iuV'),
        E = n('TCYy'),
        P = n('uCxL'),
        k = n('jV+4'),
        j = n('rHpw')
      function x(e) {
        var t = Object(S.a)(e.audioSpaceId).space
        if (!t) return null
        var n = t.sharings,
          r = v()(n)
            .reverse()
            .filter(function (e) {
              return e && e.tweet && e.user
            })
        return r.length ? m.createElement(C, { items: r }) : null
      }
      function C(e) {
        var t = e.items,
          n = t.reduce(function (e, t) {
            return t.tweet ? (e.length ? ''.concat(e, '.').concat(t.id) : t.id) : e
          }, ''),
          r = m.useState(),
          a = u()(r, 2),
          i = a[0],
          o = a[1],
          c = Math.max(
            0,
            t.findIndex(function (e) {
              return e.id === i
            }),
          )
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            w.a,
            {
              childrenStyle: L.carouselChildrenStyles,
              key: n,
              onVisibleRangeChange: function (e) {
                var n = e.index
                1 === e.intersectionRatio && o(t[n].id)
              },
              updateObserverWithChildren: !0,
              visibleItemIndex: c,
            },
            t.map(function (e, t) {
              return m.createElement(I, { item: e, key: e.id || t })
            }),
          ),
          m.createElement(E.a, { count: t.length, key: ''.concat(n, '-indicators'), max: R, selectedIndex: c }),
        )
      }
      function I(e) {
        if (!e.item) return null
        var t = e.item,
          n = t.tweet,
          r = t.user
        return m.createElement(
          O.a,
          { key: n.id_str, style: L.sharedContentContainer },
          m.createElement(P.a, { isCondensed: !0, tweet: n }),
          m.createElement(k.a, {
            avatarSize: 'small',
            name: T.sharedBy({ name: null == r ? void 0 : r.name }),
            nameSize: 'subtext2',
            profileImageUrl: null == r ? void 0 : r.profile_image_url_https,
            style: L.sharedContentBy,
            weight: 'normal',
          }),
        )
      }
      var R = 8,
        T = { sharedBy: g.a.bdfa93eb },
        L = j.a.create(function (e) {
          return {
            sharedContentContainer: { paddingHorizontal: tn(e).container.paddingHorizontal, width: '100%' },
            carouselChildrenStyles: { scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
            sharedContentBy: { marginTop: e.spaces.space8 },
          }
        }),
        M = n('2C8o'),
        D = n('ndUM'),
        _ = n('vbJ7')
      function A(e) {
        var t = e.audioSpaceId,
          n = e.height,
          r = M.c()
        return p.m()
          ? m.createElement(
              O.a,
              { style: [H.container, { height: n }] },
              m.createElement(O.a, { style: H.fadeIn }),
              m.createElement(z, { audioSpaceId: t, captions: r }),
              m.createElement(O.a, { style: H.fadeOut }),
            )
          : null
      }
      function z(e) {
        var t = e.audioSpaceId,
          n = e.captions,
          r = Object(S.a)(t).utils
        return (
          m.useEffect(function () {
            r.scribe(':audiospace:::transcription:impression')
          }, []),
          m.createElement(D.a, {
            captionTextSize: 'body',
            captions: n,
            footerHeight: 28,
            headerHeight: 28,
            scrollContainerStyle: H.scrollContainerStyle,
            withSpeakerAvatar: !0,
            withSpeakerScreenName: !0,
          })
        )
      }
      var H = j.a.create(function (e) {
          var t = _.a.hexToCss(e.colors.navigationBackground, 0),
            n = _.a.hexToCss(e.colors.navigationBackground, 0.8)
          return {
            container: {
              width: '100%',
              paddingTop: e.spaces.space2,
              paddingHorizontal: e.spaces.space8,
              backgroundColor: e.colors.navigationBackground,
              boxShadow: '0 0 '.concat(e.spacesPx.space4, 'px 0 ').concat(e.colors.gray50),
              position: 'relative',
            },
            scrollContainerStyle: { paddingHorizontal: e.spaces.space8 },
            fadeIn: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: e.spaces.space16,
              backgroundImage: e.highContrastEnabled
                ? void 0
                : 'linear-gradient(to top, '.concat(t, ', ').concat(n, ')'),
              pointerEvents: 'none',
              zIndex: 1,
            },
            fadeOut: {
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: e.spaces.space8,
              backgroundImage: e.highContrastEnabled
                ? void 0
                : 'linear-gradient(to bottom, '.concat(t, ', ').concat(n, ')'),
              pointerEvents: 'none',
              zIndex: 1,
            },
          }
        }),
        B = n('tM6R'),
        F = n.p + 'bird_spaces_transparent.4a7e7195.png',
        N = (n('1Iuc'), n('cm6r')),
        V = n('Wms4'),
        U = n('+/1j')
      function W(e) {
        var t = Object(S.a)(e.audioSpaceId).utils,
          n = p.j().openSheet
        return m.createElement(
          N.a,
          {
            accessibilityLabel: X.recordingActive,
            onPress: function () {
              n(p.b.recordingEducation), t.scribe(':audiospace::recording:icon:click')
            },
            style: K.indicatorWrapper,
          },
          m.createElement(q, null),
        )
      }
      function q(e) {
        return m.createElement(
          V.a,
          { background: 'navigationBackground' },
          m.createElement(
            O.a,
            { style: K.indicatorContainer },
            m.createElement(O.a, { style: [K.indicatorDot, e.withoutPulse ? null : K.indicatorDotAnimation] }),
            m.createElement(
              U.a,
              { accessibilityRole: 'presentation', selectable: !1, style: K.recordingIndicatorText },
              X.REC,
            ),
          ),
        )
      }
      var K = j.a.create(function (e) {
          return {
            indicatorWrapper: { marginBottom: e.spaces.space4, width: 'fit-content' },
            recordingIndicatorText: { color: e.colors.text, fontWeight: e.fontWeights.bold },
            indicatorContainer: { flexDirection: 'row', alignItems: 'center' },
            indicatorDot: {
              width: e.spaces.space8,
              height: e.spaces.space8,
              borderRadius: e.borderRadii.infinite,
              marginRight: e.spaces.space4,
              backgroundColor: '#E0245E',
            },
            indicatorDotAnimation: {
              opacity: 0.2,
              animationDuration: '1s',
              animationKeyframes: [{ '0%': { opacity: 0.2 }, '50%': { opacity: 1 }, '100%': { opacity: 0.2 } }],
              animationTimingFunction: 'cubic-bezier(0.44, 0.01, 0.48, 0.96)',
              animationIterationCount: 'infinite',
            },
          }
        }),
        X = { REC: 'REC', recordingActive: g.a.b4f91a89 },
        G = n('TIdA'),
        J = n('A91F'),
        Z = n('t62R'),
        Y = n('/yvb'),
        Q = n('Lsrn'),
        $ = n('k/Ka')
      function ee(e, t) {
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
      function te(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ee(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ne = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object($.a)(
          'svg',
          te(
            te({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Q.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          m.createElement(
            'g',
            null,
            m.createElement('path', {
              d: 'M17.97 8.24c-.414 0-.75.336-.75.75v3.012c0 2.726-2.268 4.943-5.056 4.943h-.328c-2.788 0-5.056-2.217-5.056-4.943V8.99c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.012c0 3.363 2.636 6.128 5.984 6.414l-.01 2.334H8.268c-.415 0-.75.336-.75.75s.335.75.75.75h7.46c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.977l.01-2.335c3.335-.3 5.956-3.06 5.956-6.413V8.99c0-.415-.336-.75-.75-.75z',
            }),
            m.createElement('path', {
              d: 'M12 15.42c2.077 0 3.766-1.688 3.766-3.765v-6.14c0-2.076-1.69-3.765-3.766-3.765S8.234 3.44 8.234 5.516v6.14c0 2.075 1.69 3.765 3.766 3.765zM9.734 5.517c0-1.25 1.016-2.266 2.266-2.266s2.266 1.017 2.266 2.266v6.14c0 1.25-1.017 2.265-2.266 2.265s-2.266-1.016-2.266-2.265v-6.14z',
            }),
          ),
        )
      }
      ne.metadata = { width: 24, height: 24 }
      var re = ne,
        ae = n('RUwF')
      function ie() {
        var e = p.j().requestSheetDismissal
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            O.a,
            { style: se.imageContainer },
            m.createElement(G.a, { accessibilityLabel: '', aspectMode: J.a.COVER, image: F }),
          ),
          m.createElement(
            O.a,
            { style: se.contentContainer },
            m.createElement(q, { withoutPulse: !0 }),
            m.createElement(Z.b, { size: 'title3', style: se.title, weight: 'bold' }, ce.title),
            m.createElement(Z.b, { color: 'gray700' }, ce.subtitle),
            m.createElement(oe, {
              icon: m.createElement(re, { style: se.icon }),
              subtitle: ce.sections.onlySpeakersRecorded.subtitle,
              title: ce.sections.onlySpeakersRecorded.title,
            }),
            m.createElement(oe, {
              icon: m.createElement(ae.a, { style: se.icon }),
              subtitle: ce.sections.replayOrShare.subtitle,
              title: ce.sections.replayOrShare.title,
              withOnlyMarginBottom: !0,
            }),
            m.createElement(
              Z.b,
              { color: 'gray700', size: 'body', style: se.disclaimer },
              m.createElement(
                g.a.I18NFormatMessage,
                { $i18n: 'aab35604' },
                m.createElement(Z.b, { color: 'normal', link: B.a.help, withUnderline: !0 }, g.a.ce0104de),
              ),
            ),
            m.createElement(Y.a, { onClick: e, type: 'primaryOutlined' }, ce.gotIt),
          ),
        )
      }
      function oe(e) {
        return m.createElement(
          O.a,
          { style: [se.sectionContainer, e.withOnlyMarginBottom ? se.sectionMarginBottom : se.sectionMarginVertical] },
          e.icon,
          m.createElement(
            O.a,
            { style: se.sectionContent },
            m.createElement(Z.b, { weight: 'bold' }, e.title),
            m.createElement(Z.b, { color: 'gray700' }, e.subtitle),
          ),
        )
      }
      var ce = {
          title: g.a.g1c6f16d,
          subtitle: g.a.e5609214,
          gotIt: g.a.j24c37b2,
          sections: {
            onlySpeakersRecorded: { title: g.a.g665514b, subtitle: g.a.ja196c59 },
            replayOrShare: { title: g.a.dd317ed6, subtitle: g.a.hd2dfb72 },
          },
        },
        se = j.a.create(function (e) {
          return {
            imageContainer: { height: '128px', width: '100%' },
            contentContainer: { padding: e.spaces.space32 },
            title: { marginBottom: e.spaces.space8 },
            disclaimer: { marginBottom: e.spaces.space16 },
            icon: { marginRight: e.spaces.space12, fill: e.colors.purple500, fontSize: e.fontSizes.title3 },
            sectionContent: { flexShrink: 1 },
            sectionContainer: { flexFlow: 'row nowrap' },
            sectionMarginVertical: { marginVertical: e.spaces.space24 },
            sectionMarginBottom: { marginBottom: e.spaces.space24 },
          }
        }),
        le = n('PaZX'),
        ue = n('lOQR'),
        de = n('SQlS'),
        pe = n('ISLN'),
        fe = n('sTSP'),
        me = n('Zg3A')
      function he(e, t) {
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
      function be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : he(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object($.a)(
          'svg',
          be(
            be({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Q.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          m.createElement(
            'g',
            null,
            m.createElement('path', {
              d: 'M22.498 6.008c-.02-.718-.537-1.326-1.24-1.447-4.102-.626-8.048-3.065-8.468-3.328-.44-.293-1.074-.324-1.572 0-.04.02-4.19 2.672-8.497 3.33-.683.12-1.2.728-1.22 1.467 0 .495.03 12.174 9.933 16.85.195.08.39.12.566.12.243 0 .458-.07.595-.132 10.118-4.776 9.913-16.79 9.903-16.86zm-11.23 15.1C2.984 16.634 2.964 6.484 2.944 6.058c3.516-.535 6.876-2.286 8.32-3.106v18.156h.002zm1.464 0V2.952c1.465.84 4.815 2.58 8.302 3.117 0 .1.214 10.453-8.302 15.038z',
            }),
          ),
        )
      }
      ve.metadata = { width: 24, height: 24 }
      var ye = ve,
        ge = 'spaces-intro-nux',
        Se = { ios: ue.a.getiOSAppStoreLink(ge), android: ue.a.getAndroidAppStoreLink(ge) }
      function Oe() {
        var e = p.j().requestSheetDismissal
        return m.createElement(
          O.a,
          { style: ke.container },
          m.createElement(
            O.a,
            { style: ke.headingContainer },
            m.createElement(O.a, { style: ke.headingIconContainer }, m.createElement(de.a, { style: ke.headingIcon })),
            m.createElement(
              O.a,
              null,
              m.createElement(Z.b, { align: 'center', size: 'title4', style: ke.title, weight: 'bold' }, Pe.title),
              m.createElement(Z.b, { align: 'center', color: 'gray700', size: 'body' }, Pe.subtitle),
            ),
          ),
          m.createElement(
            O.a,
            { style: ke.sectionsContainer },
            m.createElement(we, {
              icon: m.createElement(fe.a, { style: ke.sectionIcon }),
              subtitle: m.createElement(
                Ee,
                null,
                m.createElement(
                  g.a.I18NFormatMessage,
                  { $i18n: 'fc9fe08e' },
                  m.createElement(Z.b, { link: Se.ios }, g.a.fd1d03b8),
                  m.createElement(Z.b, { link: Se.android }, g.a.eb4e17b4),
                ),
              ),
              title: Pe.sections.listenLive.title,
            }),
            m.createElement(we, {
              icon: m.createElement(me.a, { style: ke.sectionIcon }),
              subtitle: m.createElement(
                Ee,
                null,
                m.createElement(
                  g.a.I18NFormatMessage,
                  { $i18n: 'a8170308' },
                  m.createElement(Z.b, { link: B.a.help }, g.a.c220921d),
                ),
              ),
              title: Pe.sections.spacesArePublic.title,
            }),
            m.createElement(we, {
              icon: m.createElement(ye, { style: ke.sectionIcon }),
              subtitle: m.createElement(
                m.Fragment,
                null,
                m.createElement(
                  Ee,
                  null,
                  m.createElement(
                    g.a.I18NFormatMessage,
                    { $i18n: 'ib602fd8' },
                    m.createElement(Z.b, { link: B.a.settings }, g.a.j5485ede),
                  ),
                ),
                m.createElement('br', null),
                m.createElement(Ee, null, Pe.sections.manageExperience.blockAndReport),
              ),
              title: Pe.sections.manageExperience.title,
              withMarginBottom: !1,
            }),
          ),
          m.createElement(
            O.a,
            { style: ke.bottomItems },
            m.createElement(
              O.a,
              { style: ke.finePrintContainer },
              m.createElement(
                Z.b,
                { align: 'center', color: 'gray700', size: 'subtext1', style: ke.finePrint },
                m.createElement(
                  g.a.I18NFormatMessage,
                  { $i18n: 'i6164a47' },
                  m.createElement(Z.b, { link: B.a.help }, g.a.cdffdeb1),
                ),
              ),
            ),
            m.createElement(
              O.a,
              { style: ke.ctaContainer },
              m.createElement(
                pe.a,
                { accessibilityLabel: Pe.gotIt, onPress: e },
                m.createElement(
                  Z.b,
                  { align: 'center', color: 'white', numberOfLines: 1, size: 'body', weight: 'bold' },
                  Pe.gotIt,
                ),
              ),
            ),
          ),
        )
      }
      function we(e) {
        var t = e.icon,
          n = e.subtitle,
          r = e.title,
          a = e.withMarginBottom,
          i = void 0 === a || a
        return m.createElement(
          O.a,
          { style: [ke.sectionContainer, i ? ke.sectionMarginBottom : null] },
          m.createElement(O.a, { style: ke.sectionIconContainer }, t),
          m.createElement(
            O.a,
            { style: ke.sectionContent },
            m.createElement(Z.b, { size: 'body', weight: 'bold' }, r),
            n,
          ),
        )
      }
      function Ee(e) {
        return m.createElement(Z.b, { color: 'gray700', size: 'body' }, e.children)
      }
      var Pe = {
          title: g.a.a3e6bb1b,
          subtitle: g.a.d82f214f,
          sections: {
            listenLive: { title: g.a.gf029868 },
            spacesArePublic: { title: g.a.icc1ba70 },
            manageExperience: { title: g.a.bcf241be, blockAndReport: g.a.b0bc833f },
          },
          gotIt: g.a.j24c37b2,
        },
        ke = j.a.create(function (e) {
          return {
            container: { display: 'flex', justifyContent: 'space-between', height: '100%', padding: e.spaces.space16 },
            headingContainer: { marginBottom: e.spaces.space32 },
            headingIconContainer: { paddingVertical: e.spaces.space28 },
            headingIcon: { height: e.spaces.space40 },
            title: { marginBottom: e.spaces.space1 },
            sectionsContainer: { marginBottom: e.spaces.space48 },
            sectionContainer: {
              flexDirection: 'row',
              flexWrap: 'nowrap',
              width: '100%',
              paddingHorizontal: e.spaces.space12,
            },
            sectionContent: { flexShrink: 1 },
            sectionMarginBottom: { marginBottom: e.spaces.space24 },
            sectionIconContainer: {
              width: e.fontSizes.title3,
              height: e.fontSizes.title3,
              marginRight: e.spaces.space16,
            },
            sectionIcon: { fill: e.colors.purple500, width: '100%', height: '100%' },
            bottomItems: { paddingBottom: e.spaces.space16 },
            finePrintContainer: { paddingHorizontal: e.spaces.space4 },
            finePrint: { marginBottom: e.spaces.space16 },
            ctaContainer: { paddingHorizontal: e.spaces.space16 },
          }
        }),
        je = n('WrBE'),
        xe = n('i4Oy'),
        Ce = n('hUaP')
      function Ie(e) {
        var t = Object(p.j)().requestSheetDismissal
        return m.createElement(je.a.View, {
          onClick: t,
          style: [
            Te.dockSheetOverlayBase,
            e.isSideNavLayout ? Le.dockSheetOverlay : Te.dockSheetOverlay,
            {
              opacity: e.animation.animatedPan.interpolate({
                inputRange: [e.animation.shellHeights.half, e.animation.shellHeights.full],
                outputRange: [1, 0],
              }),
            },
          ],
        })
      }
      function Re(e) {
        return m.createElement(
          O.a,
          { style: [e.style, e.hasDismissRequest && Te.pointerEventsNone] },
          m.createElement(
            je.a.View,
            {
              style: [
                Te.contentAnimatedContainer,
                {
                  maxHeight: e.maxHeight,
                  transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }],
                },
              ],
            },
            m.createElement(
              O.a,
              { style: Te.contentWrapperContainer },
              m.createElement(O.a, { style: Te.contentWrapper }, e.children),
            ),
          ),
        )
      }
      var Te = j.a.create(function (e) {
          var t = Object(Ce.b)(e),
            n = t.borderRadius
          return {
            dockSheetContainer: {
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderRadius: t.borderRadius,
            },
            contentAnimatedContainer: { overflowY: 'auto', width: '100%', height: '100%', borderRadius: 'inherit' },
            contentContainer: {
              position: 'fixed',
              width: '100%',
              bottom: '0',
              margin: 0,
              padding: 0,
              borderTopRightRadius: n,
              borderTopLeftRadius: n,
            },
            contentWrapperContainer: {
              height: '100%',
              width: '100%',
              borderRadius: 'inherit',
              backgroundColor: e.colors.navigationBackground,
            },
            contentWrapper: { height: '100%' },
            dockSheetOverlayBase: { backgroundColor: e.colors.maskColor, width: '100%' },
            dockSheetOverlay: { height: '100vh', position: 'fixed', top: '0' },
            pointerEventsNone: { pointerEvents: 'none' },
          }
        }),
        Le = j.a.create(function (e) {
          var t = Object(Ce.b)(e)
          return {
            dockSheetContainer: {
              position: 'absolute',
              left: t.shadowOffset,
              bottom: (-1 * t.shadowOffset) / 2,
              width: 'calc(100% - '.concat(t.shadowOffset, 'px)'),
              borderRadius: t.borderRadius,
            },
            dockSheetOverlay: { borderRadius: 'inherit', height: '100%', position: 'absolute', left: '0' },
            contentContainer: {
              boxShadow: e.boxShadows.xSmall,
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderRadius: t.borderRadius,
              overflow: 'hidden',
            },
          }
        }),
        Me = function (e) {
          var t = e.audioSpaceId,
            n = e.dockAnimation,
            r = e.isSideNavLayout,
            a = Object(p.k)(),
            i = a.clearSheet,
            o = a.hasDismissRequest,
            c = a.sheetId,
            s = (function (e) {
              var t = xe.a.get('window'),
                n = Object(Ce.a)(t.height, e),
                r = m.useRef(new je.a.Value(n.full)).current
              return {
                animatedPan: r,
                shellHeights: n,
                springToOpen: function (e) {
                  return je.a.spring(r, { toValue: 0, bounciness: 2 }).start(e)
                },
                springToClose: function (e) {
                  return je.a.spring(r, { toValue: n.full }).start(e)
                },
              }
            })(r),
            l = n.shellHeights.sheetMaxHeight,
            u = r ? Le.contentContainer : Te.contentContainer,
            d = m.useMemo(
              function () {
                switch (c) {
                  case p.b.report:
                    return m.createElement(le.b, { audioSpaceId: t })
                  case p.b.recordingEducation:
                    return m.createElement(ie, null)
                  case p.b.generalNux:
                    return m.createElement(Oe, null)
                  default:
                    return null
                }
              },
              [c, t],
            )
          if (
            (m.useEffect(
              function () {
                d && s.springToOpen()
              },
              [d, s],
            ),
            m.useEffect(
              function () {
                o && s.springToClose(i)
              },
              [s, i, o],
            ),
            !d)
          )
            return null
          var f = r ? Le.dockSheetContainer : Te.dockSheetContainer
          return m.createElement(
            je.a.View,
            {
              style: [
                f,
                o && Te.pointerEventsNone,
                {
                  height: n.shellHeights.full - n.animatedPan._value,
                  opacity: s.animatedPan.interpolate({ inputRange: [0, s.shellHeights.half], outputRange: [1, 0] }),
                },
              ],
            },
            m.createElement(Ie, { animation: s, isSideNavLayout: r }),
            m.createElement(Re, { animation: s, hasDismissRequest: o, maxHeight: l, style: u }, d),
          )
        }
      function De(e) {
        var t = e.children
        return p.l() ? null : t
      }
      function _e(e, t) {
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
      function Ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _e(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : _e(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ze = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object($.a)(
          'svg',
          Ae(
            Ae({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [Q.a.root, e.style], viewBox: '0 0 17 9.5' },
          ),
          m.createElement(
            'g',
            null,
            m.createElement('path', {
              d: 'M16.707.293c-.39-.39-1.023-.39-1.414 0L8.5 7.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l7.5 7.5c.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      ze.metadata = { width: 17, height: 9.5 }
      var He = ze
      function Be(e) {
        return m.createElement(
          Y.a,
          { onPress: e.onPress, pullRight: !0, size: 'medium', type: 'destructiveText' },
          m.createElement(Z.b, { size: 'body', weight: 'bold' }, e.isReplay ? Fe.close : Fe.leave),
        )
      }
      var Fe = { leave: g.a.bb1d57b6, close: g.a.ia5e7487 },
        Ne = n('4EYz'),
        Ve = n('MMRb'),
        Ue = n('Pl95'),
        We = n('pjBI'),
        qe = n('MH+I'),
        Ke = n('Rumh')
      function Xe(e) {
        var t = Object(S.a)(e.audioSpaceId).space || {},
          n = t.ended_at,
          r = t.total_participated,
          a = t.total_replay_watched,
          i = Ze(r) + Ze(a)
        return m.createElement(
          We.a,
          { color: $e.color, style: Ye.container },
          m.createElement(Ge, { ended_at: n }),
          m.createElement(Je, { count: i }),
        )
      }
      function Ge(e) {
        var t = e.ended_at
        if (!t) return null
        var n = null,
          r = Date.now() - t
        return (
          (n =
            r < tt
              ? m.createElement(
                  g.a.I18NFormatMessage,
                  { $i18n: 'f0e84608' },
                  m.createElement(qe.a, { short: !0, timeMs: r }),
                )
              : et(new Date(t))),
          m.createElement(Z.b, $e, n)
        )
      }
      function Je(e) {
        var t = e.count
        return t ? m.createElement(Z.b, $e, Qe.tunedIn({ count: Ke.a.formatCountShort(t) })) : null
      }
      function Ze(e) {
        return null != e ? e : 0
      }
      var Ye = j.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 } }
        }),
        Qe = { tunedIn: g.a.h140746e },
        $e = { color: 'normal', size: 'subtext2' },
        et = g.a.e18e399a,
        tt = 864e5
      function nt(e) {
        return m.createElement(
          O.a,
          { style: it.titleLabelRow },
          m.createElement(nt.Replay, e),
          m.createElement(nt.EmployeeOnly, e),
        )
      }
      function rt(e) {
        return m.createElement(O.a, { style: it.titleLabelSpacer }, e.children)
      }
      ;(nt.EmployeeOnly = function (e) {
        var t = Object(S.a)(e.audioSpaceId).space
        return null != t && t.is_employee_only
          ? m.createElement(
              rt,
              null,
              m.createElement(V.a, { background: 'navigationBackground', bold: !0 }, at.tweepsOnly),
            )
          : null
      }),
        (nt.Replay = function (e) {
          var t = Object(S.a)(e.audioSpaceId).utils
          return t.is.recording
            ? m.createElement(rt, null, m.createElement(W, e))
            : t.is.replayable
            ? m.createElement(rt, null, m.createElement(Xe, e))
            : null
        })
      var at = { tweepsOnly: g.a.a5bf5489 },
        it = j.a.create(function (e) {
          return { titleLabelRow: { flexDirection: 'row' }, titleLabelSpacer: { paddingRight: e.spacesPx.space4 } }
        }),
        ot = n('VKFJ'),
        ct = n('yUQf'),
        st = n('sIe2'),
        lt = n('7ep7'),
        ut = n('0FVZ'),
        dt = n('Oe3h'),
        pt = n('cTG8'),
        ft = n('U7kY'),
        mt = n('tno6'),
        ht = n('v6aA'),
        bt = n('DlVf'),
        vt = n('RqPI'),
        yt = n('mjJ+'),
        gt = n('FXw/'),
        St = n('GCOQ')
      function Ot(e) {
        var t = (function (e) {
            var t = Object(S.a)(e).utils,
              n = Object(ct.a)(vt.l),
              r = p.j().openSheet,
              a = []
            n &&
              a.push({
                Icon: St.a,
                text: wt.reportThisSpace,
                isEmphasized: !0,
                onClick: function () {
                  r(p.b.report), t.scribe(':audiospace::caret:report:click')
                },
              })
            return { items: a }
          })(e.audioSpaceId),
          n = m.useState(!1),
          r = u()(n, 2),
          a = r[0],
          i = r[1]
        if (t.items.length < 1) return null
        var o = a
          ? m.createElement(yt.a, {
              isFixed: !0,
              items: t.items,
              onCloseRequested: function () {
                return i(!1)
              },
              shouldCloseOnClick: !0,
            })
          : null
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(Y.a, {
            accessibilityLabel: wt.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: wt.more },
            icon: m.createElement(gt.a, null),
            onPress: function () {
              return i(!0)
            },
            size: 'medium',
            type: 'primaryOutlined',
          }),
          o,
        )
      }
      var wt = { more: g.a.h63a5c3b, reportThisSpace: g.a.b3481ffd },
        Et = n('O07O'),
        Pt = (n('i4UL'), n('Xyrk'))
      function kt(e, t) {
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
      function jt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? kt(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : kt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function xt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object($.a)(
          'svg',
          jt(jt({}, e), {}, { style: [Ct.root, e.style], viewBox: '0 0 24 24' }),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(Pt.a.SVGLinearGradient, null),
            m.createElement(
              'g',
              { fill: Pt.a.SVGLinearGradient.fill },
              m.createElement('path', {
                d: 'M17.97 7.585c-.552 0-1 .448-1 1v3.417c0 2.588-2.156 4.693-4.806 4.693h-.328c-2.65 0-4.806-2.105-4.806-4.693V8.585c0-.552-.448-1-1-1s-1 .448-1 1v3.417c0 3.416 2.618 6.237 5.983 6.64l-.01 1.858H8.27c-.553 0-1 .448-1 1s.447 1 1 1h7.46c.552 0 1-.448 1-1s-.448-1-1-1h-2.726l.01-1.863c3.35-.413 5.955-3.228 5.955-6.635V8.585c0-.552-.448-1-1-1z',
              }),
              m.createElement('path', {
                d: 'M12 15.42c2.077 0 3.766-1.688 3.766-3.765v-6.14c0-2.076-1.69-3.765-3.766-3.765S8.234 3.44 8.234 5.516v6.14c0 2.075 1.69 3.765 3.766 3.765z',
              }),
            ),
          ),
        )
      }
      xt.metadata = { width: 24, height: 24 }
      var Ct = j.a.create(function (e) {
          return {
            root: {
              display: 'inline-block',
              fill: 'currentcolor',
              height: '1.25em',
              maxWidth: '100%',
              position: 'relative',
              userSelect: 'none',
              textAlignVertical: 'text-bottom',
            },
          }
        }),
        It = n('0nhk'),
        Rt = n('ssnq')
      function Tt(e) {
        var t = [_t.footer, e.isSideNavLayout && _t.footerWide]
        return m.createElement(
          O.a,
          {
            onLayout: function (e) {
              var t = e.nativeEvent.layout.height
              Dt.setState(function (e) {
                e.height = t
              })
            },
            style: t,
          },
          m.createElement(Lt, e),
        )
      }
      function Lt(e) {
        return p.l()
          ? m.createElement(Et.a, { audioSpaceId: e.audioSpaceId })
          : m.createElement(Mt, { audioSpaceId: e.audioSpaceId })
      }
      function Mt(e) {
        var t = m.useContext(ht.a).featureSwitches
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(
            O.a,
            { style: _t.footerLeft },
            t.isTrue('voice_rooms_speaking_enabled') &&
              m.createElement(Y.a, {
                accessibilityLabel: 'Request to speak',
                borderColor: 'transparent',
                color: 'text',
                hoverLabel: { label: 'Request to speak' },
                icon: m.createElement(xt, null),
                onPress: function () {},
                size: 'xLarge',
                type: 'primaryOutlined',
              }),
          ),
          m.createElement(
            O.a,
            { style: _t.footerRight },
            m.createElement(Ot, e),
            t.isTrue('voice_rooms_reactions_enabled') &&
              m.createElement(
                m.Fragment,
                null,
                m.createElement(O.a, { style: _t.footerButtonSpacer }),
                m.createElement(Y.a, {
                  accessibilityLabel: 'Reactions',
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: 'Reactions' },
                  icon: m.createElement(bt.a, null),
                  onPress: function () {},
                  size: 'medium',
                  type: 'primaryOutlined',
                }),
              ),
            t.isTrue('voice_rooms_share_dock_enabled') &&
              m.createElement(
                m.Fragment,
                null,
                m.createElement(O.a, { style: _t.footerButtonSpacer }),
                m.createElement(It.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon' }),
              ),
          ),
        )
      }
      var Dt = new Rt.a({ height: 100 })
      var _t = j.a.create(function (e) {
          var t = Object(Ce.b)(e),
            n = t.borderRadius,
            r = t.paddingHorizontal
          return {
            footerButtonSpacer: { width: e.spaces.space16 },
            footerLeft: { flexDirection: 'row' },
            footerRight: { flexDirection: 'row' },
            footer: {
              paddingHorizontal: r,
              width: '100%',
              height: 'calc('.concat(100, 'px + ').concat(j.a.iPhoneOffsetBottom, ')'),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0px -1px 0px '.concat(e.colors.gray50),
              backgroundColor: e.colors.navigationBackground,
            },
            footerWide: { borderBottomLeftRadius: n, borderBottomRightRadius: n, boxShadow: e.boxShadows.xSmall },
          }
        }),
        At = n('yyPN'),
        zt = n.n(At),
        Ht = n('GiKA'),
        Bt = n.n(Ht),
        Ft = n('p3P5')
      function Nt(e, t) {
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
      function Vt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Nt(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Nt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ut(e) {
        var t = e.isSideNavLayout ? ut.a.WideExpandedSpaceDock : ut.a.NarrowExpandedSpaceDock
        return m.createElement(t, null, m.createElement(Wt, e))
      }
      function Wt(e) {
        var t = Object(ct.a)(Ve.selectDrawerVisibility),
          n = Object(Ce.b)(j.a.theme),
          r = e.width + n.shadowOffset,
          a = e.isSideNavLayout ? [an.root, { width: r }] : null,
          i = m.useState(),
          o = u()(i, 2),
          c = o[0],
          l = o[1],
          p = m.useRef(null),
          f = xe.a.get('window')
        function h() {
          var e,
            t = null === (e = p.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
          t && l(t)
        }
        return (
          m.useLayoutEffect(h, [f.height]),
          m.useLayoutEffect(
            function () {
              var e = setTimeout(h, d.a.durationMs + 250)
              return function () {
                return clearTimeout(e)
              }
            },
            [t],
          ),
          m.createElement(O.a, { ref: p, style: a }, m.createElement(Gt, s()({}, e, { layout: c })))
        )
      }
      function qt(e) {
        var t = Object(Ce.b)(j.a.theme),
          n = e.animation.shellHeights.full - t.shadowOffset
        return m.createElement(
          je.a.View,
          {
            style: [
              nn.expandedShell,
              { height: n, transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }] },
            ],
          },
          m.createElement(Kt, e),
        )
      }
      function Kt(e) {
        var t = p.m(),
          n = p.l(),
          r = Dt.useSlice(function (e) {
            return e.height
          }),
          a = m.useRef(new je.a.Value(r))
        function i() {
          e.animation.springTo('collapse')
        }
        function o() {
          e.animation.springTo('exit')
        }
        return (
          m.useEffect(
            function () {
              je.a.spring(a.current, { toValue: t ? r + $t : r }).start()
            },
            [t, r],
          ),
          m.createElement(dt.a, { id: 'SpaceDockExpanded' }, function (t, r) {
            return m.createElement(
              O.a,
              s()({ ref: t() }, r({ style: nn.expandedShellContent })),
              m.createElement(
                je.a.View,
                s()({}, e.animation.panResponder.panHandlers, { style: nn.expandedShellHeader }),
                m.createElement(
                  O.a,
                  { style: nn.expandedShellHeaderGripContainer },
                  m.createElement(O.a, { style: nn.expandedShellHeaderGrip }),
                ),
                m.createElement(
                  O.a,
                  { style: nn.expandedShellHeaderButtons },
                  m.createElement(Y.a, {
                    accessibilityLabel: on.collapse,
                    hoverLabel: { label: on.collapse },
                    icon: m.createElement(He, { style: nn.iconChevronDown }),
                    onPress: i,
                    pullLeft: !0,
                    size: 'medium',
                    type: 'primaryText',
                  }),
                  m.createElement(
                    O.a,
                    { style: nn.expandedShellHeaderRight },
                    m.createElement(De, null, m.createElement(Ue.a, { audioSpaceId: e.audioSpaceId })),
                    m.createElement(Be, { isReplay: n, onPress: o }),
                  ),
                ),
                m.createElement(
                  O.a,
                  { style: nn.expandedShellDescription },
                  m.createElement(Xt, { audioSpaceId: e.audioSpaceId }),
                ),
              ),
              m.createElement(
                je.a.View,
                {
                  id: 'ParticipantsWrapper',
                  style: [nn.participantsContainer, { paddingBottom: je.a.add(a.current, e.animation.animatedPan) }],
                },
                e.mounted ? m.createElement(Jt, e) : null,
              ),
            )
          })
        )
      }
      function Xt(e) {
        var t = Object(S.a)(e.audioSpaceId).utils.title(),
          n = {
            hashtags: zt()(t).map(function (e) {
              return (e.text = e.hashtag), e
            }),
            user_mentions: Bt()(t),
          },
          r = [0, t.length]
        return m.createElement(
          m.Fragment,
          null,
          m.createElement(nt, { audioSpaceId: e.audioSpaceId }),
          m.createElement(pt.a, {
            displayTextRange: r,
            entities: n,
            linkify: !0,
            numberOfLines: 3,
            size: 'headline1',
            text: t,
            weight: 'heavy',
          }),
        )
      }
      function Gt(e) {
        var t = m.useState(!1),
          n = u()(t, 2),
          r = n[0],
          a = n[1],
          i = (function (e, t, n) {
            var r = m.useRef({ state: p.a.full, animatedPanOffset: 0 }),
              a = xe.a.get('window'),
              i = m.useMemo(
                function () {
                  return Object(Ce.a)(a.height, e.isSideNavLayout, n)
                },
                [a.height, e.isSideNavLayout, n],
              ),
              o = m.useMemo(
                function () {
                  return function (e) {
                    var t
                    switch (e) {
                      case p.a.exit:
                      case p.a.collapse:
                        t = 0
                        break
                      case p.a.full:
                      default:
                        t = i.full
                    }
                    return i.full - t
                  }
                },
                [i],
              ),
              c = m.useRef(new je.a.Value(i.full)).current
            m.useEffect(function () {
              var e = o(r.current.state)
              je.a.spring(c, { toValue: e }).start(t)
            }, [])
            var s = e.onRequestClose,
              l = e.onToggleCollapsed,
              u = m.useMemo(
                function () {
                  return function (e, t) {
                    ;(r.current.state = e), p.g(e)
                    var n = o(r.current.state),
                      a = null == t ? void 0 : t.vy
                    return new Promise(function (t) {
                      je.a.spring(c, { velocity: a, toValue: n }).start(function () {
                        e === p.a.collapse ? l() : e === p.a.exit && s(), t()
                      })
                    })
                  }
                },
                [c, o, l, s],
              )
            return (
              m.useEffect(
                function () {
                  p.f(u)
                },
                [u],
              ),
              {
                panResponder: m.useRef(
                  lt.a.create({
                    onMoveShouldSetPanResponder: function () {
                      return !0
                    },
                    onPanResponderGrant: function () {
                      r.current.animatedPanOffset = c._value
                    },
                    onPanResponderMove: function (e, t) {
                      var n = r.current.animatedPanOffset + t.dy
                      n >= 0 && c.setValue(n)
                    },
                    onPanResponderRelease: function (e, t) {
                      var n = (null == t ? void 0 : t.vy) || 0,
                        a = Math.abs(n) >= en
                      c._value > i.collapse || (a && t.dy > 0) ? u(p.a.collapse, t) : u(r.current.state, t)
                    },
                  }),
                ).current,
                animatedPan: c,
                shellHeights: i,
                springTo: u,
              }
            )
          })(
            e,
            function () {
              a(!0), p.g(p.a.full)
            },
            e.layout,
          ),
          o = m.useRef(new je.a.Value(i.shellHeights.full)).current,
          c = Vt(Vt({}, e), {}, { mounted: r, animation: i })
        return (
          m.useEffect(
            function () {
              var e = i.shellHeights.full
              je.a.spring(o, { toValue: e }).start()
            },
            [i.shellHeights.full],
          ),
          m.useMemo(
            function () {
              var t = e.isSideNavLayout ? an.container : nn.container,
                n = e.isSideNavLayout ? an.expandedShellContainer : nn.expandedShellContainer,
                r = e.isSideNavLayout ? an.footerContainer : nn.footerContainer,
                a = o,
                s = i.animatedPan.interpolate({
                  inputRange: [i.shellHeights.collapse, i.shellHeights.full],
                  outputRange: [1, 0],
                })
              return m.createElement(
                je.a.View,
                { style: [t, nn.forceGPULayer, { height: a, opacity: s }] },
                m.createElement(O.a, { style: n }, m.createElement(qt, c)),
                m.createElement(
                  O.a,
                  { style: r },
                  m.createElement(A, { audioSpaceId: e.audioSpaceId, height: $t }),
                  m.createElement(Tt, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }),
                ),
                m.createElement(Me, {
                  audioSpaceId: e.audioSpaceId,
                  dockAnimation: i,
                  isSideNavLayout: e.isSideNavLayout,
                }),
              )
            },
            [e.audioSpaceId, e.isSideNavLayout, r, e.layout],
          )
        )
      }
      function Jt(e) {
        var t = Object(ot.b)(e.audioSpaceId),
          n = t.all,
          r = t.otherParticipantsTotal
        h.d()
        var a = xe.a.get('window'),
          i = (e.isSideNavLayout ? e.width : a.width) - 2 * tn(j.a.theme).container.paddingHorizontal,
          o = Object(Ft.b)(j.a.theme),
          c = o.getHeight(),
          l = o.getWidth(),
          u = Math.min(4, Math.floor(i / l)),
          d = i / u
        m.useEffect(
          function () {
            return (
              e.isSideNavLayout || ft.a.disable(),
              function () {
                ft.a.enable()
              }
            )
          },
          [e.isSideNavLayout],
        )
        var p = m.useMemo(
          function () {
            var e = d
            return n.map(function (t) {
              return Vt(Vt({}, t), {}, { width: e })
            })
          },
          [n, d],
        )
        return m.useMemo(
          function () {
            var t = {
              data: p,
              numColumns: u,
              keyExtractor: function (e) {
                return e.key
              },
              getItemLayout: function (e, t) {
                return { length: c, offset: c * t, index: t }
              },
              renderItem: Zt,
              ListHeaderComponent: m.createElement(x, { audioSpaceId: e.audioSpaceId }),
              ListFooterComponent: m.createElement(
                De,
                null,
                m.createElement(
                  O.a,
                  { style: nn.participantsFooterContainer },
                  m.createElement(Ne.a, { audioSpaceId: e.audioSpaceId, count: r, interactive: !0 }),
                ),
              ),
            }
            return m.createElement(st.a, s()({ key: u }, t))
          },
          [p],
        )
      }
      function Zt(e) {
        var t = e.item
        return m.createElement(Yt, {
          hasVerifiedAvatar: t.user.has_nft_avatar,
          isVerified: t.user.is_verified,
          key: t.key,
          kind: t.kind,
          name: t.user.display_name,
          periscopeUserId: t.periscopeUserId,
          profile_image_url_https: t.user.avatar_url,
          screenName: t.user.twitter_screen_name,
          width: t.width,
        })
      }
      function Yt(e) {
        var t = e.periscopeUserId,
          n = a()(e, ['periscopeUserId']),
          r = ot.b.isParticipantHost(n.kind),
          i = ot.b.canParticipantSpeak(n.kind) ? m.createElement(Qt, { isHost: r, periscopeUserId: t }) : null,
          o = Object.assign({}, { speakingIndicator: i, periscopeUserId: t }, n)
        return m.createElement(Ft.a, o)
      }
      function Qt(e) {
        var t = e.isHost,
          n = e.periscopeUserId,
          r = f.f({ isHost: t, periscopeUserId: n })
        return m.createElement(
          O.a,
          { style: rn.container },
          m.createElement(mt.a, { audioLevel: r || 0, size: j.a.theme.spacesPx.space16 }),
        )
      }
      var $t = 100,
        en = 0.5
      function tn(e) {
        return { container: { paddingHorizontal: e.spacesPx.space8 } }
      }
      var nn = j.a.create(function (e) {
        var t = Object(Ce.b)(e),
          n = t.paddingHorizontal,
          r = t.borderRadius,
          a = tn(e)
        return {
          forceGPULayer: { transform: [{ translate3d: '0, 0, 0' }] },
          container: { position: 'fixed', bottom: 0, width: '100%', backgroundColor: e.colors.maskColor },
          expandedShellContainer: { width: '100%', borderRadius: r },
          expandedShell: { boxShadow: e.boxShadows.xSmall, width: '100%', height: '100%', borderRadius: 'inherit' },
          expandedShellHeader: { userSelect: 'none', borderRadius: 'inherit' },
          expandedShellHeaderGripContainer: { paddingVertical: 5, justifyContent: 'center', alignItems: 'center' },
          expandedShellHeaderGrip: {
            height: 5,
            width: e.spaces.space36,
            backgroundColor: e.colors.gray200,
            borderRadius: e.borderRadiiPx.xLarge,
          },
          expandedShellHeaderButtons: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: n },
          iconChevronDown: { color: e.colors.text, width: e.spaces.space16 },
          expandedShellHeaderRight: { flexDirection: 'row' },
          expandedShellContent: {
            borderRadius: 'inherit',
            height: '100%',
            backgroundColor: e.colors.navigationBackground,
          },
          expandedShellDescription: {
            marginTop: e.spaces.space4,
            marginBottom: e.spaces.space16,
            paddingHorizontal: n,
          },
          participantsContainer: Vt(Vt({}, a.container), {}, { flex: 1 }),
          participantsFooterContainer: { paddingVertical: e.spaces.space16 },
          footerContainer: { position: 'absolute', bottom: 0, width: '100%' },
        }
      })
      var rn = j.a.create(function (e) {
          return {
            container: {
              position: 'absolute',
              left:
                -1 *
                ((function (e) {
                  return { size: e.spacesPx.space16 }
                })(e).size +
                  e.spacesPx.space4),
            },
          }
        }),
        an = j.a.create(function (e) {
          var t = Object(Ce.b)(e)
          return {
            root: {
              alignItems: 'center',
              alignSelf: 'flex-end',
              width: '100%',
              marginVertical: t.marginVertical,
              marginRight: e.spacesPx.space20,
            },
            container: { width: '100%' },
            expandedShellContainer: {
              width: '100%',
              borderRadius: t.borderRadius,
              overflow: 'hidden',
              paddingTop: t.shadowOffset / 2,
              paddingHorizontal: t.shadowOffset / 2,
              marginLeft: t.shadowOffset / 2,
            },
            footerContainer: {
              position: 'absolute',
              bottom: 0,
              left: t.shadowOffset / 2,
              paddingHorizontal: t.shadowOffset / 2,
              width: '100%',
            },
          }
        }),
        on = { collapse: g.a.d227d19e }
    },
  },
])
//# sourceMappingURL=WIPED
