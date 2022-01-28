;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '0nhk': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = (n('7xRU'), n('ERkP')),
        o = n.n(i),
        c = n('3XMw'),
        s = n.n(c),
        l = n('dgjd'),
        u = n('/yvb'),
        d = n('rHpw'),
        p = n('fn9Y'),
        f = n('I6Uj')
      function m(e) {
        var t = e.audioSpaceId,
          n = e.type,
          r = Object(l.a)(t),
          a = r.space,
          i = r.utils,
          c = i.hashtags().join(' '),
          s = h
        'icon' === n ? (s = b) : 'icon-borderless' === n && (s = v)
        var u = i.is.replayable ? void 0 : w.dmText,
          d = Boolean(null == a ? void 0 : a.is_employee_only)
        return o.a.createElement(
          f.a.Custom,
          { ButtonComponent: s, isFixed: e.isFixed, pullRight: e.pullRight, scribeNamespace: g, url: y(t) },
          d ? null : o.a.createElement(f.a.Action, { scribeNamespace: S.tweet, shareText: c, type: 'tweet' }),
          o.a.createElement(f.a.Action, { scribeNamespace: S.dm, shareText: u, type: 'dm' }),
          o.a.createElement(f.a.Action, { scribeNamespace: S.copy, shareText: c, type: 'copy' }),
          o.a.createElement(f.a.Action, { scribeNamespace: S.via, shareText: c, type: 'via' }),
        )
      }
      function h(e) {
        return o.a.createElement(
          u.a,
          a()({}, e, { borderColor: 'transparent', style: O.shareButton, type: 'primaryOutlined' }),
          w.share,
        )
      }
      function b(e) {
        return o.a.createElement(u.a, a()({}, E, { type: 'primaryOutlined' }, e))
      }
      function v(e) {
        return o.a.createElement(u.a, a()({}, E, e))
      }
      var y = function (e) {
          return 'https://twitter.com/i/spaces/'.concat(e)
        },
        g = { page: 'audiospace', component: 'share_sheet' },
        S = {
          tweet: { element: 'send_tweet', action: 'click' },
          dm: { element: 'send_dm', action: 'click' },
          copy: { element: 'link', action: 'click' },
          via: { element: void 0, action: 'impression' },
        },
        O = d.a.create(function (e) {
          return { shareButton: { width: '100%' } }
        }),
        w = { share: s.a.ifea3114, dmText: s.a.c63dd2cb },
        E = {
          accessibilityLabel: w.share,
          borderColor: 'transparent',
          color: 'text',
          hoverLabel: { label: w.share },
          icon: o.a.createElement(p.a, null),
          size: 'medium',
        }
    },
    '2C8o': function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return y
      }),
        n.d(t, 'c', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return S
        }),
        n.d(t, 'a', function () {
          return T
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
        d = n.n(u),
        p = n('Chkh'),
        f = n('Xda3'),
        m = n('ssnq')
      function h(e, t) {
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
      var b = new m.a({ liveCaptions: [], pastCaptions: [], currentCaptionSequenceId: 0 }),
        v = b
      function y() {
        v.reset()
      }
      function g() {
        var e = l.o()
        return (
          d.a.useEffect(
            function () {
              if (e === l.c.On) {
                var t = p.a.subscribe(f.a.ChatCaption, E),
                  n = p.a.subscribe(f.a.ServerAudioTranscription, P)
                return function () {
                  t(), n()
                }
              }
            },
            [e],
          ),
          b.useSlice(function (e) {
            return [].concat(s()(e.pastCaptions), s()(e.liveCaptions))
          })
        )
      }
      function S() {
        return b.useSlice(function (e) {
          var t = e.liveCaptions,
            n = e.pastCaptions
          return 0 !== t.length || 0 !== n.length
        })
      }
      function O(e) {
        b.setState(function (t) {
          e.filter(R).forEach(function (e) {
            var n = e.body.body,
              r = e.data.sender.twitter_id,
              a = I(t, r)
            ;-1 === a
              ? k(t, e)
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
              ? j(t, e, a)
              : C(t, e, a)
          })
        })
      }
      function w(e) {
        b.setState(function (t) {
          e.filter(R).forEach(function (e) {
            var n = e.data.sender.twitter_id,
              r = I(t, n)
            e.body.final
              ? (function (e, t, n) {
                  var r,
                    a = t.data.sender.twitter_id
                  if (n > -1) {
                    var i = e.liveCaptions.splice(n, 1)
                    r = o()(i, 1)[0].sequenceId
                  } else (e.currentCaptionSequenceId += 1), (r = e.currentCaptionSequenceId)
                  var c = M(t, { final: !0, sequenceId: r })
                  ;(e.pastCaptions = [].concat(s()(e.pastCaptions), [c])), x(e, a, t.timestamp)
                })(t, e, r)
              : -1 === r
              ? k(t, e)
              : !(function (e, t, n) {
                  var r = !1,
                    a = e.liveCaptions[n].text,
                    i = t.body.body
                  if (!t.body.final && i.length > 0 && a.length > 0) {
                    r = i.length / a.length < 0.2
                  }
                  return r
                })(t, e, r)
              ? j(t, e, r)
              : C(t, e, r)
          })
        })
      }
      function E(e) {
        return O(e), { clearHeapForMessageType: !0 }
      }
      function P(e) {
        return w(e), { clearHeapForMessageType: !0 }
      }
      function k(e, t) {
        var n = t.data.sender.twitter_id
        e.currentCaptionSequenceId += 1
        var r = M(t, { sequenceId: e.currentCaptionSequenceId })
        return e.liveCaptions.push(r), x(e, n, t.timestamp), r
      }
      function j(e, t, n) {
        var r = e.liveCaptions.splice(n, 1),
          a = o()(r, 1)[0],
          i = M(t, { sequenceId: a.sequenceId, timestamp: a.timestamp })
        return e.liveCaptions.push(i), i
      }
      function x(e, t, n) {
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
      function C(e, t, n) {
        var r = t.data.sender.twitter_id,
          a = e.liveCaptions.splice(n, 1),
          i = o()(a, 1)[0]
        ;(i.final = !0), (e.pastCaptions = [].concat(s()(e.pastCaptions), [i]))
        var c = k(e, t)
        return x(e, r, t.timestamp), c
      }
      function I(e, t) {
        return e.liveCaptions.findIndex(function (e) {
          return e.speaker.id_str === t
        })
      }
      function R(e) {
        var t = e.body.body
        return !!t && t.length > 0
      }
      function T(e) {
        var t = e.body.body,
          n = e.type
        return f.a.Chat === n && t.startsWith('[cc]')
      }
      function M(e, t) {
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
                ? h(Object(n), !0).forEach(function (t) {
                    a()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : h(Object(n)).forEach(function (t) {
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
        return E
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('uFXj'), n('ERkP')),
        s = n.n(c),
        l = n('tM6R'),
        u = n('fs1G'),
        d = n('0nhk'),
        p = n('MWbm'),
        f = n('t62R'),
        m = n('Rumh'),
        h = n('/yvb'),
        b = n('efqG'),
        v = n('cm6r'),
        y = n('rHpw'),
        g = n('3XMw'),
        S = n.n(g),
        O = n('hOZg'),
        w = n('7Mjr')
      function E(e) {
        if (e.count < 1) return null
        var t = { count: e.count, labelType: 'otherListeners' }
        return s.a.createElement(
          p.a,
          { style: C.otherParticipantsWrapper },
          s.a.createElement(
            k,
            e,
            s.a.createElement(
              p.a,
              { style: C.otherParticipantsContainer },
              s.a.createElement(
                p.a,
                { style: C.otherParticipantsText },
                s.a.createElement(
                  f.b,
                  { size: x.fontSize, weight: 'bold' },
                  s.a.createElement(m.a.ParticipantsCount, t),
                ),
              ),
              s.a.createElement(j, e),
            ),
          ),
        )
      }
      function P(e) {
        var t = e.audioSpaceId,
          n = e.dismiss,
          r = e.type,
          a = o()(e, ['audioSpaceId', 'dismiss', 'type']),
          i = s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              p.a,
              { style: C.popoverSheetDescription },
              s.a.createElement(
                f.b,
                { color: 'gray700', size: 'body' },
                s.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'b9c4cfcb' },
                  s.a.createElement(f.b, { color: 'normal', link: l.a.help, withUnderline: !0 }, S.a.g646959f),
                ),
              ),
            ),
            s.a.createElement(f.b, { size: 'body', weight: 'bold' }, I.shareWithPeople),
            s.a.createElement(
              p.a,
              { style: C.popoverShareButtonContainer },
              s.a.createElement(d.a, { audioSpaceId: t }),
            ),
          )
        return 'popover' === r
          ? s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                p.a,
                { style: C.popoverTitle },
                s.a.createElement(
                  f.b,
                  { size: 'title4', weight: 'heavy' },
                  s.a.createElement(m.a.ParticipantsCount, a),
                ),
              ),
              i,
            )
          : s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                p.a,
                { style: C.popoverSheetTitleContainer },
                s.a.createElement(
                  p.a,
                  { style: C.popoverSheetTitle },
                  s.a.createElement(
                    f.b,
                    { size: 'headline2', weight: 'heavy' },
                    s.a.createElement(m.a.ParticipantsCount, a),
                  ),
                ),
                s.a.createElement(h.a, {
                  accessibilityLabel: I.close,
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: I.close },
                  icon: s.a.createElement(O.a, { style: C.popoverSheetClose }),
                  onPress: n,
                  size: 'medium',
                }),
              ),
              i,
            )
      }
      function k(e) {
        if (!e.interactive) return e.children
        var t = { count: e.count, labelType: 'otherListeners' }
        return s.a.createElement(
          b.a,
          {
            renderContent: function (n, r) {
              return s.a.createElement(P, a()({ audioSpaceId: e.audioSpaceId, dismiss: n, type: r }, t))
            },
            withArrow: !0,
            withDefaultContainer: !0,
          },
          s.a.createElement(
            v.a,
            { accessibilityLabel: m.a.ParticipantsCount.generateText(t), onPress: u.a },
            e.children,
          ),
        )
      }
      function j(e) {
        return e.interactive
          ? s.a.createElement(p.a, { style: C.otherParticipantsArrow }, s.a.createElement(w.a, null))
          : null
      }
      var x = { fontSize: 'body' },
        C = y.a.create(function (e) {
          var t = e.lineHeightsPx[x.fontSize],
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
        I = { close: S.a.ia5e7487, share: S.a.ifea3114, shareWithPeople: S.a.i7f853ea }
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
        o = n.n(i),
        c = n('Lsrn'),
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M9.008 15.205c-1.766 0-3.187-1.35-3.187-3.196v-.02c0-1.8 1.388-3.214 3.26-3.214 1.26 0 2.075.53 2.62 1.29L10.494 11c-.306-.42-.798-.695-1.357-.695-.93 0-1.684.754-1.684 1.684s.755 1.684 1.685 1.684c.578 0 1.087-.292 1.39-.735l1.22.87c-.583.802-1.368 1.394-2.737 1.394h-.002zm6.582 0c-1.764 0-3.185-1.35-3.185-3.196v-.02c0-1.8 1.386-3.214 3.258-3.214 1.262 0 2.075.53 2.622 1.29l-1.21.935c-.305-.42-.797-.694-1.356-.694-.93 0-1.685.754-1.685 1.684s.754 1.685 1.684 1.685c.577 0 1.086-.292 1.39-.735l1.22.87c-.584.803-1.37 1.395-2.738 1.395z',
            }),
            o.a.createElement('path', {
              d: 'M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
        return d
      }),
        n.d(t, 'c', function () {
          return p
        }),
        n.d(t, 'a', function () {
          return f
        }),
        n.d(t, 'd', function () {
          return m
        })
      n('M+/F'), n('7x/C'), n('ho0z'), n('hCOa'), n('87if'), n('1t7P'), n('jQ/y'), n('aLgo'), n('lTEL'), n('kYxP')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('v6aA'),
        o = n('Chkh'),
        c = n('Xda3')
      function s(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return l(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
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
      function l(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      var u = new (n('ssnq').a)({}),
        d = u
      function p(e) {
        return u.useSlice(function (t) {
          return e ? t[e] : null
        })
      }
      function f(e) {
        u.setState(function (t) {
          var n
          null === (n = t[e.participantId]) || void 0 === n || n.shift()
        })
      }
      function m() {
        var e = a.a.useContext(i.a).featureSwitches.isTrue('voice_rooms_expanded_dock_reactions')
        a.a.useEffect(
          function () {
            if (e) {
              var t = o.a.subscribe(c.a.Heart, h)
              return function () {
                t()
              }
            }
          },
          [e],
        )
      }
      function h(e) {
        return (
          u.setState(function (t) {
            var n,
              r = s(e)
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var a,
                  i = b(n.value),
                  o = i.reaction,
                  c = i.sender
                t[c.participantId] || (t[c.participantId] = []),
                  null === (a = t[c.participantId]) || void 0 === a || a.push(o)
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
      function b(e) {
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
        o = n.n(i),
        c = n('Lsrn'),
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.875 2.75v18.5c0 .55-.45 1-1 1s-1-.45-1-1v-7.14c-1.86-.78-3.77-.21-5.79.38-1.39.41-2.81.82-4.26.82-1.1 0-2.2-.23-3.33-.89-.23-.14-.37-.38-.37-.65V4c0-.27.14-.52.38-.65.23-.13.52-.13.75 0 2.05 1.21 4.17.59 6.41-.07 2.02-.59 4.09-1.2 6.21-.54.01-.55.45-.99 1-.99s1 .45 1 1z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    I6Uj: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r)
      function i(e) {
        return null
      }
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('FtHn')
      var o = n('97Jx'),
        c = n.n(o),
        s = n('KEM+'),
        l = n.n(s),
        u = (n('jwue'), n('+oxZ'), n('3XMw')),
        d = n.n(u),
        p = n('/yvb'),
        f = n('fn9Y'),
        m = d.a.c0530da5,
        h = d.a.ifea3114
      var b = function (e) {
          return a.a.createElement(p.a, {
            accessibilityLabel: m,
            hoverLabel: { label: h },
            icon: a.a.createElement(f.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        v = 'share-button',
        y = 'share-by-tweet',
        g = n('m3Bd'),
        S = n.n(g),
        O = n('1YZw'),
        w = n('CaKu'),
        E = n('y+lG'),
        P = n('SrIh'),
        k = n('RqPI'),
        j = n('Irs7'),
        x = n('uDfI'),
        C = n('Ty5D'),
        I = n('yUQf'),
        R = n('jwTb'),
        T = n('SOvA'),
        M = n('I/9y'),
        L = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: R.a,
            text: d.a.fcc684a9,
            testID: y,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: T.a,
            text: d.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return w.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: M.a,
            text: d.a.e05c00b4,
          },
          via: {
            isAvailable: function () {
              return 'function' == typeof window.navigator.share
            },
            scribeAction: 'share_via',
            Icon: f.a,
            text: d.a.if23a251,
          },
        }
      function D(e, t) {
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
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function A(e) {
        var t = Object(j.b)()
        return {
          getActionItem: (function (e, t) {
            var n = Object(x.c)(),
              r = Object(C.g)(),
              i = Object(I.a)(k.v)
            return a.a.useMemo(
              function () {
                return function (a) {
                  var o = L[a.type],
                    c = o.isAvailable,
                    s = o.scribeAction,
                    l = S()(o, ['isAvailable', 'scribeAction'])
                  if (!c()) return null
                  var u = _({}, l)
                  function d() {
                    var o = a.shareText || e.shareText,
                      c = e.url,
                      l = _(_({}, e.scribeNamespace), {}, { action: s }, a.scribeNamespace),
                      u = { text: o, url: c },
                      d = { analytics: t, dispatch: n, history: r, mergedScribeNamespace: l, sessionToken: i }
                    !(function (e, t, n) {
                      var r = function () {
                        return n.analytics.scribe(n.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return r(), void n.history.push(_(_({}, H(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            w.a.setString(Object(E.a)(t.url, n.sessionToken)),
                            r(),
                            void n.dispatch(Object(O.b)({ text: z.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            r(),
                            void n.history.push(
                              _(
                                _({ pathname: '/compose/tweet' }, H(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(E.a)(t.url, n.sessionToken) })
                            .then(r)
                            .catch(function () {
                              n.analytics.scribe(_(_({}, n.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(P.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(a.type, u, d)
                  }
                  return a.label && (u.text = a.label), _(_({}, u), {}, { onClick: d })
                }
              },
              [t, n, r, i, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var z = { copyLinkSuccessMessage: d.a.f88553c8, shareTextPrefixFormatter: d.a.gb5851d7 }
      function H(e) {
        var t = e.url,
          n = e.text
        return { query: { text: n ? z.shareTextPrefixFormatter({ prefix: n, url: t }) : t } }
      }
      var B = n('T0aG'),
        F = n.n(B),
        N = n('mN6z')
      var V = n('mjJ+'),
        U = n('rHpw')
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
                l()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var K = { element: 'share' }
      function X(e) {
        var t = (function (e) {
            var t = a.a.useRef({ previous: void 0 })
            if ('object' !== F()(e)) return e
            function n() {
              return (t.current.previous = e), e
            }
            var r = t.current.previous
            return r && (e === r || Object(N.a)(e, r)) ? r : n()
          })(q(q({}, K), e.scribeNamespace)),
          n = A(q(q({}, e), {}, { scribeNamespace: t })),
          r = n.analytics,
          i = n.getActionItem
        var o = e.ButtonComponent || G
        return a.a.createElement(o, {
          onPress: function () {
            var e = q(q({}, t), {}, { action: 'share_menu_click' })
            r.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var n = []
            return (
              e.children
                ? a.a.Children.forEach(e.children, function (e) {
                    if (a.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && n.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && n.push(t)
                  }),
              a.a.createElement(V.a, { isFixed: e.isFixed, items: n, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function G(e) {
        return a.a.createElement(b, c()({}, e, { style: J.button, testID: v }))
      }
      var J = U.a.create(function (e) {
        return { button: { marginRight: e.spaces.space4 } }
      })
      function Z(e) {
        var t = e.copyLinkShareLabel,
          n = e.dmShareLabel,
          r = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = S()(e, ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel'])
        return a.a.createElement(
          X,
          c,
          a.a.createElement(i, { label: o, type: 'tweet' }),
          a.a.createElement(i, { label: n, type: 'dm' }),
          a.a.createElement(i, { label: t, type: 'copy' }),
          a.a.createElement(i, { label: r, type: 'via' }),
        )
      }
      ;(Z.Action = i), (Z.Custom = X)
      t.a = Z
    },
    ISLN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('uFXj')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('cm6r'),
        o = n('Xyrk'),
        c = n('rHpw')
      function s(e) {
        var t = e.accessibilityLabel,
          n = e.children,
          r = e.onPress,
          c = e.style
        return a.a.createElement(
          i.a,
          { accessibilityLabel: t, onPress: r, style: [l.button, c] },
          a.a.createElement(o.a.Default, { style: l.gradient }, n),
        )
      }
      s.getHeightPx = function (e) {
        return e.spacesPx.space48
      }
      var l = c.a.create(function (e) {
        return {
          button: {
            overflow: 'hidden',
            width: '100%',
            boxShadow: e.boxShadows.small,
            height: s.getHeightPx(e),
            borderRadius: e.spacesPx.space48,
          },
          gradient: { height: '100%', justifyContent: 'center', paddingHorizontal: e.spaces.space24 },
        }
      })
    },
    LxAE: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return ue
      })
      var r = {}
      n.r(r),
        n.d(r, 'buildPlayerProps', function () {
          return Q
        }),
        n.d(r, 'buildDockConfig', function () {
          return $
        })
      var a = {}
      n.r(a),
        n.d(a, 'buildPlayerProps', function () {
          return ae
        }),
        n.d(a, 'buildDockConfig', function () {
          return ie
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
        f = n.n(p),
        m = n('QEWO'),
        h = n('v6aA'),
        b = n('nYBC'),
        v = n('Q/sS'),
        y = n('A7Vd'),
        g = n('VKFJ'),
        S = n('MWbm'),
        O = n('tno6'),
        w = n('rHpw'),
        E = n('t62R')
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
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : P(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function j(e) {
        var t = (function (e) {
          var t = f.a.useRef({ lastActive: { displayName: '', audioLevel: 0 } }),
            n = Object(g.b)(e).speakers,
            r = y.i(),
            a = { displayName: '', audioLevel: 0 }
          if (
            (n.forEach(function (e) {
              var t = g.b.isParticipantHost(e.kind) || !e.periscopeUserId ? 'host' : e.periscopeUserId,
                n = r[t]
              n &&
                n.audioLevel > a.audioLevel &&
                e.user.display_name &&
                ((a.displayName = e.user.display_name), (a.audioLevel = n.audioLevel))
            }),
            a.audioLevel > 0)
          )
            return (t.current.lastActive = a), t.current.lastActive
          if (t.current.lastActive.displayName) return k(k({}, t.current.lastActive), {}, { audioLevel: 0 })
          var i = s()(n, 1)[0]
          return k(k({}, a), {}, { displayName: i.user.display_name || '' })
        })(e.audioSpaceId)
        return f.a.createElement(x, t)
      }
      function x(e) {
        var t = [C.activeSpeakerIndicatorName, 0 === e.audioLevel && C.activeSpeakerIndicatorNameInactive]
        return f.a.createElement(
          S.a,
          { style: C.activeSpeakerIndicatorContainer },
          f.a.createElement(O.a, {
            audioLevel: e.audioLevel,
            size: w.a.theme.spacesPx.space16,
            withPersistZeroLevel: !0,
          }),
          f.a.createElement(E.b, { style: t }, e.displayName),
        )
      }
      var C = w.a.create(function (e) {
          return {
            activeSpeakerIndicatorContainer: { flexDirection: 'row', alignItems: 'center', width: '100%' },
            activeSpeakerIndicatorName: {
              color: e.colors.purple500,
              marginLeft: e.spacesPx.space4,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            activeSpeakerIndicatorNameInactive: { opacity: 0.6 },
          }
        }),
        I =
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
        R = n('Chkh'),
        T = n('3XMw'),
        M = n.n(T),
        L = n('Ty5D'),
        D = n('dgjd'),
        _ = n('xZGM'),
        A = n('uDfI')
      function z(e, t) {
        var n
        if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return
              if ('string' == typeof e) return H(e, t)
              var n = Object.prototype.toString.call(e).slice(8, -1)
              'Object' === n && e.constructor && (n = e.constructor.name)
              if ('Map' === n || 'Set' === n) return Array.from(e)
              if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
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
      function H(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function B(e) {
        var t,
          n,
          r,
          a = e.audioSpaceId,
          i = e.isSideNavLayout
        return (
          (function (e) {
            var t = Object(D.a)(e).utils,
              n = v.p()
            f.a.useEffect(
              function () {
                v.i.getState().isReplay || t.is.Running || n('exit')
              },
              [n, t.is.Running],
            )
          })(a),
          (function (e) {
            var t = Object(D.a)(e),
              n = t.space,
              r = t.utils,
              a = y.g(),
              i = y.m(),
              o = null == n ? void 0 : n.replay_start_time,
              c = (i || {}).scrubToFraction,
              s = v.m()
            f.a.useEffect(
              function () {
                return y.d.subscribe(
                  function (e) {
                    var t = e.state
                    return null == t ? void 0 : t.isPlaying
                  },
                  function (e) {
                    e ? R.a.start() : R.a.stop()
                  },
                )
              },
              [s],
            ),
              f.a.useEffect(
                function () {
                  r.is.replayable && r.is.joined && c && a && o && c((1e3 * o) / a)
                },
                [c, r.is.replayable, r.is.joined, o, a],
              )
          })(a),
          (function (e) {
            var t = v.q(),
              n = v.p(),
              r = Object(L.h)(),
              a = r.key,
              i = r.pathname,
              o = f.a.useRef({ key: a, pathname: i })
            f.a.useEffect(
              function () {
                if (!e) {
                  if (o.current.key !== a) N.spaceUrl.test(o.current.pathname) || 'collapse' === t || n('collapse')
                  ;(o.current.key = a), (o.current.pathname = i)
                }
              },
              [a, i, e, n, t],
            )
          })(i),
          (t = f.a.useContext(h.a).loggedInUserId),
          (n = v.p()),
          (r = Object(A.c)()),
          f.a.useEffect(
            function () {
              function e(e) {
                var a,
                  i = z(e)
                try {
                  for (i.s(); !(a = i.n()).done; ) {
                    var o = a.value
                    switch (o.body.guestBroadcastingEvent) {
                      case d.b.RemoveParticipant:
                        var c
                        ;((null === (c = o.body) || void 0 === c ? void 0 : c.twitter_participant_ids) || []).includes(
                          t,
                        ) && (n('exit'), r(Object(I.b)({ text: V.removedFromSpace })))
                    }
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
                return { clearHeapForMessageType: !0 }
              }
              if (t) return R.a.subscribe(d.a.HydraControlMessage, e)
            },
            [t, n, r],
          ),
          (function () {
            var e = Object(A.c)(),
              t = v.k().openSheet,
              n = v.q() === v.a.full,
              r = Object(A.d)(F)
            f.a.useEffect(
              function () {
                var a
                return (
                  n &&
                    r &&
                    (a = setTimeout(function () {
                      t(v.b.generalNux), e(Object(_.w)(_.t))
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
      var F = function (e) {
        return Object(_.z)(e, _.t)
      }
      var N = { spaceUrl: /i\/spaces\/.+/ },
        V = { removedFromSpace: M.a.jd859c9c },
        U = n('Rumh'),
        W = n('xVWt')
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
      function K(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? q(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : q(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function X(e) {
        var t = e.audioSpaceId,
          n = Object(D.a)(t),
          r = n.space,
          a = n.utils,
          i = a.title(),
          o = (null == r ? void 0 : r.participants.total) || 0
        return f.a.createElement(U.a, {
          activeSpeakers: f.a.createElement(j, { audioSpaceId: t }),
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
      function G(e) {
        var t = f.a.useContext(h.a).featureSwitches,
          n = f.a.useState(!1),
          r = s()(n, 2),
          a = r[0],
          i = r[1]
        var o = K(
            K({}, e),
            {},
            {
              onToggleCollapsed: function () {
                a || v.d(), i(J)
              },
            },
          ),
          c = t.isTrue('voice_rooms_expanded_dock') && !a
        return f.a.createElement(
          f.a.Fragment,
          null,
          f.a.createElement(X, o),
          c ? f.a.createElement(W.a, o) : null,
          f.a.createElement(B, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }),
        )
      }
      function J(e) {
        return !e
      }
      function Z(e, t) {
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
      function Y(e) {
        var t = s()(e.activeItem, 1)[0]
        return t ? { activeItem: t } : null
      }
      function Q(e) {
        e.commonApi
        var t = Y(e.context)
        if (!t) return { media: null }
        var n = t.activeItem
        return {
          broadcastId: n.id,
          disablePlaybackCoordination: !0,
          mediaKey: n.mediaKey,
          isLive: n.isLive,
          onPlayerApi: function (e) {
            y.b(n.id, e)
          },
          onPlayerState: function (e, t) {
            y.c(n.id, e, t)
          },
        }
      }
      function $(e) {
        var t = e.audioDockProps,
          n = e.commonApi,
          r = e.context,
          a = (e.history, Y(r))
        if (!a) return null
        var i = a.activeItem
        return f.a.createElement(
          G,
          (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
              t % 2
                ? Z(Object(n), !0).forEach(function (t) {
                    o()(e, t, n[t])
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : Z(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                  })
            }
            return e
          })(
            {
              key: i.id,
              audioSpaceId: i.id,
              onRequestClose: function () {
                n.clear(), b.store.reset(), v.i.reset()
              },
            },
            t,
          ),
        )
      }
      n('tVqn'), n('MvUL'), n('KqXw')
      var ee = n('zrc3'),
        te = n('qzrz'),
        ne = n('WRe9')
      function re(e) {
        var t,
          n = s()(e.activeItem, 1)[0],
          r = e.hydrateVoiceTweetTrack(n.conversationId),
          a = Object(ee.a)(r.tweets, function (e) {
            return e.id_str === n.id
          }),
          i = r.tweets[a]
        if (!i) return null
        var o = (null === (t = i.extended_entities) || void 0 === t ? void 0 : t.media) || [],
          c = s()(o, 1)[0],
          l = 'photo' !== (null == c ? void 0 : c.type) ? c : null
        return { activeItem: n, track: r, media: l, activeIndex: a, activeTweet: i }
      }
      function ae(e) {
        var t = e.commonApi,
          n = re(e.context)
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
      function ie(e) {
        var t = e.audioDockProps,
          n = e.commonApi,
          r = e.context,
          a = e.history,
          i = s()(r.playerApi, 1)[0],
          o = s()(r.playerState, 1)[0],
          c = n.currentTrack
        if (!o || !i || !c) return null
        var l = re(r)
        if (!l) return null
        var u = l.activeIndex,
          d = l.activeTweet,
          p = l.media,
          m = l.track,
          h = o.isMuted,
          b = o.isPlaying,
          v = o.isScrubbing,
          y = o.isSeeking,
          g = o.volume,
          S = 0,
          O = 0
        oe(m.tweets, function (e) {
          var t = e.endMs
          e.i === u - 1 && (O = t), (S = t)
        })
        var w = (p && p.id_str === c.contentId && c.currentTimeMs) || 0,
          E = O + w,
          P = null == p ? void 0 : p.url,
          k = d.full_text,
          j = P && k ? k.replace(P, '').trim() : k,
          x = d.user
        return f.a.createElement(te.a, {
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
            oe(m.tweets, function (t) {
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
      function oe(e, t) {
        for (var n = 0, r = 0; r < e.length; r++) {
          var a = e[r],
            i = ne.a.getVoiceTweetDuration(a),
            o = n + i
          if (t({ i: r, tweet: a, startMs: n, endMs: o, durationMs: i })) break
          n = o
        }
      }
      var ce = { default: { buildDockConfig: n('0zXz').a }, space: r, voiceTweet: a }
      function se(e, t) {
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
      function le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? se(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : se(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function ue() {
        var e = f.a.useRef({}),
          t = f.a.useContext(h.a).history,
          n = f.a.useContext(u.a),
          r = s()(n.activeItem, 2),
          a = r[0],
          i = r[1],
          o = s()(n.playerApi, 2),
          c = o[0],
          p = o[1],
          b = s()(n.playerState, 2),
          v = b[0],
          y = b[1],
          g = s()(n.guestsState, 2),
          S = g[0],
          O = g[1],
          w = de(v)
        ;(e.current.playerApi = c), (e.current.playerState = v)
        var E = f.a.useMemo(
            function () {
              return function () {
                d.c(), i(null)
              }
            },
            [i],
          ),
          P = f.a.useMemo(function () {
            return function () {
              var t = e.current,
                n = t.playerApi,
                r = t.playerState
              n && r && (r.isPlaying ? n.pause : n.play)()
            }
          }, []),
          k = f.a.useMemo(function () {
            return function () {
              var t = e.current,
                n = t.playerApi,
                r = t.playerState
              n && r && (r.isMuted ? n.unmute : n.mute)()
            }
          }, []),
          j = {
            space: function (e, t, n) {
              i({ type: m.a.space, id: e, mediaKey: t, isLive: n })
            },
            voiceTweet: function (e, t) {
              i({ type: m.a.voiceTweet, id: e.id_str, conversationId: l.a(e), startTimeMs: t })
            },
          },
          x = {
            load: j,
            clear: E,
            currentTrack: w,
            toggleMute: k,
            togglePlayback: P,
            setVolume: f.a.useMemo(function () {
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
              if (!a) return ce.default.buildDockConfig()
              switch (a.type) {
                case m.a.space:
                  return ce.space.buildDockConfig({ history: t, context: n, commonApi: x, audioDockProps: e })
                case m.a.voiceTweet:
                  return ce.voiceTweet.buildDockConfig({ history: t, context: n, commonApi: x, audioDockProps: e })
                default:
                  return ce.default.buildDockConfig()
              }
            },
            player: function () {
              var e,
                t = {
                  media: null,
                  onPlayerApi: function (e) {
                    p(e)
                  },
                  onPlayerState: function (e, t) {
                    y(e), t && O(t)
                  },
                }
              if (!a) return t
              switch (a.type) {
                case m.a.space:
                  e = ce.space.buildPlayerProps({ context: n, commonApi: x })
                  break
                case m.a.voiceTweet:
                  e = ce.voiceTweet.buildPlayerProps({ context: n, commonApi: x })
                  break
                default:
                  throw new Error('[AudioContext:Player] unhandled active item type ['.concat(a.type, ']'))
              }
              return le(le({}, t), e)
            },
          },
          audioSpaces: { cache: n.audioSpaceCache },
        }
      }
      var de = function (e) {
        return e && e.tracks[e.currentTrackId]
      }
    },
    O07O: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return H
      })
      var r = n('nYBC'),
        a = n('A7Vd'),
        i = n('ERkP'),
        o = n.n(i),
        c = n('tI3i'),
        s = n.n(c),
        l = n('fs1G'),
        u = n('/yvb'),
        d = n('rHpw')
      function p(e) {
        return (
          s()(e.accessibilityLabel, 'ControlButton must have an accessibilityLabel'),
          o.a.createElement(u.a, {
            accessibilityLabel: e.accessibilityLabel,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'text',
            disabled: e.disabled,
            hoverLabel: { label: e.accessibilityLabel },
            icon: e.icon,
            onPress: e.onPress || l.a,
            renderMenu: e.renderMenu,
            size: e.size || 'medium',
            style: f.button,
          })
        )
      }
      var f = d.a.create(function (e) {
          return { button: { height: '100%' } }
        }),
        m = n('3XMw'),
        h = n.n(m),
        b = (n('z84I'), n('akpX')),
        v = n('dgjd'),
        y = n('MWbm'),
        g = n('mjJ+'),
        S = n('t62R')
      function O(e) {
        var t = Object(v.a)(e.audioSpaceId).utils,
          n = a.l(),
          r = P.map(function (e) {
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
        return o.a.createElement(p, {
          accessibilityLabel: E.accessibility({ rate: ''.concat(n) }),
          icon: o.a.createElement(O.Icon, { playbackRate: n }),
          renderMenu: function (e) {
            return o.a.createElement(g.a, { isFixed: !0, items: r, onCloseRequested: e, shouldCloseOnClick: !0 })
          },
        })
      }
      O.Icon = function (e) {
        var t = e.playbackRate
        return o.a.createElement(
          y.a,
          { style: w.playbackRateIcon },
          o.a.createElement(S.b, { style: w.playbackRateIconText, weight: 'normal' }, t),
          o.a.createElement(b.a, { style: w.playbackRateIconSvg }),
        )
      }
      var w = d.a.create(function (e) {
          return {
            playbackRateIcon: { flexDirection: 'row', alignItems: 'center' },
            playbackRateIconText: { marginRight: e.spaces.space2 },
            playbackRateIconSvg: { height: e.spaces.space8 },
          }
        }),
        E = { accessibility: h.a.e07f6e7d },
        P = [
          { text: h.a.jd04fc65, rate: 0.5 },
          { text: h.a.f03848b8, rate: 1 },
          { text: h.a.j0e5c2cd, rate: 1.5 },
          { text: h.a.b3f2318d, rate: 2 },
        ],
        k = n('Pl95'),
        j = n('0nhk'),
        x = n('5Ixf'),
        C = n('AtEG'),
        I = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        R = n.n(I),
        T = n('Lsrn'),
        M = n('k/Ka')
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
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? L(Object(n), !0).forEach(function (t) {
                R()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : L(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var _ = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(M.a)(
          'svg',
          D(
            D({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [T.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M19.837 19.076C17.928 21.639 14.978 23 11.979 23c-2.009 0-4.029-.616-5.768-1.887-2.099-1.53-3.469-3.785-3.849-6.338-.39-2.553.25-5.096 1.79-7.172 1.79-2.404 4.589-3.824 7.548-3.914l-1.43-1.41c-.29-.298-.29-.765 0-1.063.29-.288.77-.288 1.06 0l2.779 2.762c.14.139.22.328.22.526 0 .199-.08.388-.22.527L11.54 7.574c-.14.149-.33.219-.53.219-.19 0-.38-.069-.53-.219-.29-.288-.29-.765 0-1.053l1.36-1.351C9.3 5.219 6.9 6.431 5.361 8.487c-1.31 1.758-1.849 3.914-1.52 6.069.33 2.155 1.48 4.063 3.259 5.354 3.659 2.682 8.828 1.907 11.527-1.719 1.869-2.503 2.139-5.781.72-8.553-.19-.368-.04-.825.33-1.003.37-.189.82-.04 1.01.328 1.679 3.279 1.349 7.153-.85 10.113z',
            }),
            o.a.createElement('path', {
              d: 'M15.928 14.368c0 .417-.09.794-.27 1.112-.17.328-.43.576-.76.755-.33.179-.71.268-1.15.268-.57 0-1.05-.129-1.43-.397-.38-.258-.62-.626-.71-1.083l-.02-.099 1.14-.228.02.099c.05.228.16.407.33.536.18.139.41.199.69.199.32 0 .56-.089.74-.288.18-.199.27-.477.27-.834 0-.368-.09-.676-.27-.884-.17-.209-.41-.308-.74-.308-.52 0-.84.239-.99.725l-.02.08-1.06-.099.36-3.447h3.579v.973h-2.689l-.14 1.262c.1-.099.22-.189.36-.259.24-.119.53-.179.85-.179.59 0 1.06.189 1.4.566.34.377.51.894.51 1.53zm-5.459-3.894v5.91H9.31v-4.162c-.08.05-.17.099-.28.129-.2.07-.4.099-.59.099h-.38v-1.053h.28c.28 0 .53-.08.73-.219.19-.139.33-.358.41-.636l.02-.069h.969zm4.311-2.681c-.192 0-.385-.073-.531-.219-.292-.292-.291-.763.001-1.054l2.037-2.018-2.249-2.228c-.293-.291-.294-.762-.001-1.054.292-.29.767-.292 1.061-.001l2.781 2.755c.141.14.22.33.22.528s-.079.388-.22.528L15.31 7.576c-.147.145-.338.217-.53.217z',
            }),
          ),
        )
      }
      _.metadata = { width: 24, height: 24 }
      var A = _,
        z = n('qzrz')
      function H(e) {
        return o.a.createElement(
          y.a,
          { style: N.controlsContainer },
          o.a.createElement(H.SeekSlider, null),
          o.a.createElement(
            y.a,
            { style: N.buttonsContainer },
            o.a.createElement(H.Captions, { audioSpaceId: e.audioSpaceId }),
            o.a.createElement(O, { audioSpaceId: e.audioSpaceId }),
            o.a.createElement(H.Play, null),
            o.a.createElement(H.SkipAhead, null),
            o.a.createElement(j.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon-borderless' }),
          ),
        )
      }
      function B() {
        var e = a.a()
        e && null != e && e.currentTimeMs && F(e.currentTimeMs + U)
      }
      function F(e) {
        var t = a.d.getState().api,
          n = a.a()
        if (null != n && n.durationMs && null != t && t.scrubToFraction) {
          r.seek(e)
          var i = e / n.durationMs
          t.scrubToFraction(i)
        }
      }
      ;(H.SeekSlider = function () {
        var e = H.useSeekSliderProps(),
          t = e.currentTimeMs,
          n = e.durationMs,
          r = e.externalSeeking,
          a = e.onSeek
        return o.a.createElement(z.a.SeekSlider, {
          durationMs: n,
          externalSeeking: r,
          onSeek: a,
          progressMs: t,
          withTimes: !0,
        })
      }),
        (H.useSeekSliderProps = function () {
          var e = a.k(),
            t = a.g()
          return { currentTimeMs: a.h() || 0, durationMs: t || 1, externalSeeking: e, onSeek: F }
        }),
        (H.Captions = function (e) {
          var t = e.audioSpaceId,
            n = k.a.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
            r = n.disabled,
            a = n.icon,
            i = n.label,
            c = n.onPress
          return o.a.createElement(p, { accessibilityLabel: i, disabled: r, icon: a, onPress: c })
        }),
        (H.Play = function () {
          var e = H.usePlayButtonProps(),
            t = e.isPlaying,
            n = e.togglePlayback
          return o.a.createElement(p, {
            accessibilityLabel: t ? V.pause : V.play,
            icon: t ? o.a.createElement(x.a, null) : o.a.createElement(C.a, null),
            onPress: n,
            size: 'xLarge',
          })
        }),
        (H.usePlayButtonProps = function () {
          var e = a.j(),
            t = a.m()
          return {
            isPlaying: e,
            togglePlayback: function () {
              t && t.play && t.pause && (e ? t.pause() : t.play())
            },
          }
        }),
        (H.SkipAhead = function () {
          return o.a.createElement(p, {
            accessibilityLabel: V.skipForward,
            icon: o.a.createElement(A, null),
            onPress: B,
          })
        })
      var N = d.a.create(function (e) {
          return {
            controlsContainer: { width: '100%', alignSelf: 'start', marginVertical: e.spaces.space8 },
            buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          }
        }),
        V = { skipForward: h.a.jf9f3e53, play: h.a.ic1e826e, pause: h.a.b89c5a5f },
        U = 15e3
    },
    PaZX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return v
      }),
        n.d(t, 'c', function () {
          return y
        })
      n('1t7P'), n('jQ/y'), n('z84I'), n('+KXO')
      var r = n('ERkP'),
        a = n.n(r),
        i = n('1YZw'),
        o = n('hUaP'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('uDfI'),
        u = n('Q/sS'),
        d = n('dgjd'),
        p = n('MWbm'),
        f = n('t62R'),
        m = n('CKsB'),
        h = n('/yvb'),
        b = n('rHpw')
      function v(e) {
        var t = Object(u.k)().requestSheetDismissal,
          n = v.useReportingItems({ audioSpaceId: e.audioSpaceId })
        return a.a.createElement(
          p.a,
          { style: g.container },
          a.a.createElement(
            p.a,
            { style: g.menu },
            a.a.createElement(
              f.b,
              { align: 'center', size: 'headline1', style: g.description, weight: 'bold' },
              y.reportThisSpace,
            ),
            a.a.createElement(f.b, { align: 'center', style: g.description }, y.describeTheIssue),
            null == n
              ? void 0
              : n.map(function (e) {
                  return a.a.createElement(m.a, {
                    actionText: e.label,
                    key: e.label,
                    onClick: function () {
                      e.onClick(), t()
                    },
                    textColor: 'red500',
                  })
                }),
          ),
          a.a.createElement(h.a, { onClick: t, type: 'primaryOutlined' }, y.cancel),
        )
      }
      v.useReportingItems = function (e) {
        var t = e.audioSpaceId,
          n = Object(l.c)(),
          r = Object(d.a)(t).handlers.report
        return a.a.useMemo(
          function () {
            return Object.keys(r).map(function (e) {
              return {
                label: y[e],
                onClick: function () {
                  r && r[e](), n(Object(i.b)({ text: y.spaceReported }))
                },
              }
            })
          },
          [r, n],
        )
      }
      var y = {
          reportThisSpace: s.a.b3481ffd,
          describeTheIssue: s.a.d0aebc27,
          SelfHarm: s.a.g971a4e8,
          Violence: s.a.b96e6682,
          SexualContent: s.a.e5bf9b39,
          ChildSafety: s.a.d2a34320,
          PrivateInformation: s.a.a9ba3e27,
          AbusiveBehavior: s.a.d5519f4a,
          cancel: s.a.cfd2f35d,
          spaceReported: s.a.eb55363b,
        },
        g = b.a.create(function (e) {
          var t = Object(o.b)(e)
          return {
            container: { display: 'flex', justifyContent: 'space-between', height: '100%', padding: e.spaces.space16 },
            menu: { marginBottom: e.spaces.space20 },
            description: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16, paddingHorizontal: t },
          }
        })
      t.b = v
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
                  return Object(E.m)(e)
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
                    a = Object.assign(L(), n.headers),
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
                      a = Object.assign(L(), n.headers),
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
        M = ((S = {}), s()(S, R, 'Twitter/m5'), s()(S, T, 1), S)
      function L() {
        var e,
          t = Date.now()
        return (
          (x = t <= x ? x + 1 : t),
          Object.assign({}, M, ((e = {}), s()(e, I, x), s()(e, 'content-type', 'application/json'), e))
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
        return m
      })
      var r = n('Q/sS'),
        a = n('ERkP'),
        i = n.n(a),
        o = n('3XMw'),
        c = n.n(o),
        s = n('dgjd'),
        l = n('/yvb'),
        u = n('rHpw'),
        d = n('pHub'),
        p = n('8A5z'),
        f = n('d5IS')
      function m(e) {
        var t = e.audioSpaceId,
          n = m.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
          r = n.disabled,
          a = n.icon,
          o = n.label,
          c = n.onPress
        return i.a.createElement(l.a, {
          accessibilityLabel: o,
          disabled: r,
          hoverLabel: { label: o },
          icon: a,
          onPress: c,
          size: 'medium',
          style: b.icon,
          type: 'primaryText',
        })
      }
      function h(e) {
        switch (e.captionsState) {
          case r.c.On:
            return i.a.createElement(d.a, { style: b.icon })
          case r.c.Off:
            return i.a.createElement(p.a, { style: b.icon })
          case r.c.Unavailable:
          default:
            return i.a.createElement(f.a, { style: b.icon })
        }
      }
      m.useSpaceCaptionsToggleProps = function (e) {
        var t = e.audioSpaceId,
          n = r.o(),
          a = i.a.createElement(h, { captionsState: n })
        return {
          disabled: !(n !== r.c.Unavailable),
          icon: a,
          label: (function (e) {
            switch (e) {
              case r.c.On:
                return v.hideCaptions
              case r.c.Off:
                return v.showCaptions
              case r.c.Unavailable:
              default:
                return v.captionsUnavailable
            }
          })(n),
          onPress: (function (e) {
            var t = e.audioSpaceId,
              n = Object(s.a)(t).utils
            return function () {
              r.j(), n.scribe(':audiospace::caret:view_transcriptions:click')
            }
          })({ audioSpaceId: t }),
        }
      }
      var b = u.a.create(function (e) {
          return { icon: { fill: e.colors.text } }
        }),
        v = { showCaptions: c.a.e674c120, hideCaptions: c.a.f45bace3, captionsUnavailable: c.a.ce96f1db }
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
        n.d(t, 'i', function () {
          return f
        }),
        n.d(t, 'd', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return h
        }),
        n.d(t, 'l', function () {
          return b
        }),
        n.d(t, 'p', function () {
          return v
        }),
        n.d(t, 'q', function () {
          return y
        }),
        n.d(t, 'h', function () {
          return g
        }),
        n.d(t, 'g', function () {
          return S
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'e', function () {
          return w
        }),
        n.d(t, 'm', function () {
          return E
        }),
        n.d(t, 'o', function () {
          return x
        }),
        n.d(t, 'j', function () {
          return C
        }),
        n.d(t, 'n', function () {
          return I
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
        s = Object.freeze({ generalNux: 'general-nux', recordingEducation: 'recording-education', report: 'report' }),
        l = n('ssnq')
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
      var p = {
          isReplay: !1,
          startTimeMs: -1,
          springTo: function () {
            return Promise.resolve()
          },
          springToState: null,
          sheet: { id: null, hasDismissRequest: !1 },
          captionsState: c.On,
        },
        f = new l.a(p)
      function m() {
        var e = f.getState().isReplay
        f.reset(),
          e &&
            f.setState(function (t) {
              t.isReplay = e
            })
      }
      function h() {
        return {
          sheetId: f.useSlice(function (e) {
            return e.sheet.id
          }),
          openSheet: P,
          requestSheetDismissal: j,
        }
      }
      function b() {
        var e = f.useSlice(function (e) {
            return e.sheet
          }),
          t = e.hasDismissRequest
        return { sheetId: e.id, hasDismissRequest: t, clearSheet: k }
      }
      function v() {
        return f.useSlice(function (e) {
          return e.springTo
        })
      }
      function y() {
        return f.useSlice(function (e) {
          return e.springToState
        })
      }
      function g(e) {
        f.setState(function (t) {
          return d(d({}, t), {}, { springToState: e })
        })
      }
      function S(e) {
        f.setState(function (t) {
          return d(d({}, t), {}, { springTo: e })
        })
      }
      function O(e) {
        f.setState(function (t) {
          ;(t.isReplay = !0), (t.startTimeMs = e)
        })
      }
      function w() {
        f.getState().isReplay &&
          f.setState(function (e) {
            ;(e.isReplay = p.isReplay), (e.startTimeMs = p.startTimeMs)
          })
      }
      function E() {
        return f.useSlice(function (e) {
          return e.isReplay
        })
      }
      function P(e) {
        f.getState().sheet.hasDismissRequest ||
          f.setState(function (t) {
            return d(d({}, t), {}, { sheet: { id: e, hasDismissRequest: !1 } })
          })
      }
      function k() {
        f.getState().sheet.id &&
          f.setState(function (e) {
            return d(d({}, e), {}, { sheet: { id: null, hasDismissRequest: !1 } })
          })
      }
      function j() {
        var e = f.getState().sheet
        e.id &&
          f.setState(function (t) {
            return d(d({}, t), {}, { sheet: d(d({}, e), {}, { hasDismissRequest: !0 }) })
          })
      }
      function x() {
        return f.useSlice(function (e) {
          return e.captionsState
        })
      }
      function C() {
        var e = f.getState().captionsState
        e === c.On
          ? f.setState(function (e) {
              return d(d({}, e), {}, { captionsState: c.Off })
            })
          : e === c.Off &&
            f.setState(function (e) {
              return d(d({}, e), {}, { captionsState: c.On })
            })
      }
      function I() {
        var e = i.d(),
          t = x()
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
        return p
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = (n('i4UL'), n('ERkP')),
        o = n.n(i),
        c = n('Xyrk'),
        s = n('rHpw'),
        l = n('k/Ka')
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
        return Object(l.a)(
          'svg',
          d(d({}, e), {}, { style: [f.root, e.style], viewBox: '0 0 24 24' }),
          o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(c.a.SVGLinearGradient, null),
            o.a.createElement(
              'g',
              { fill: c.a.SVGLinearGradient.fill },
              o.a.createElement('path', {
                d: 'M19.073 10.384c.9-.896 2.358-.896 3.258 0 .894.89.894 2.34-.006 3.237-.893.89-2.35.89-3.244 0-.9-.895-.9-2.347-.007-3.236zm-17.403.001c.9-.896 2.356-.896 3.256 0 .893.89.893 2.34-.007 3.236-.894.89-2.35.89-3.244 0-.9-.895-.9-2.346-.007-3.235zM11.058 2.4c.536-.534 1.41-.534 1.95.006.537.534.537 1.403 0 1.937-.535.534-1.414.54-1.95.005-.54-.54-.536-1.414 0-1.948zm-.064 17.254c.536-.533 1.41-.533 1.95.006.536.533.536 1.402 0 1.936-.54.54-1.414.54-1.95.006-.542-.54-.542-1.41 0-1.948zm4.07-13.294c.72-.718 1.886-.718 2.606 0 .714.71.714 1.87-.006 2.588-.714.71-1.88.71-2.595 0-.72-.717-.72-1.878-.006-2.59zm-8.736 8.697c.72-.717 1.886-.717 2.606 0 .714.71.714 1.872-.006 2.59-.714.71-1.88.71-2.594 0-.72-.718-.72-1.88-.006-2.59zm.034-8.665c.72-.717 1.886-.717 2.606 0 .714.71.714 1.872-.006 2.59-.714.71-1.88.71-2.594 0-.72-.718-.72-1.878-.006-2.59zm8.67 8.632c.72-.717 1.886-.717 2.606 0 .714.71.714 1.872-.006 2.59-.714.71-1.88.71-2.594 0-.72-.718-.72-1.878-.006-2.59zm-4.662-4.639c.9-.896 2.358-.896 3.258 0 .893.89.893 2.34-.007 3.236-.892.89-2.35.89-3.242 0-.9-.895-.9-2.346-.007-3.235z',
              }),
            ),
          ),
        )
      }
      p.metadata = { width: 24, height: 24 }
      var f = s.a.create(function (e) {
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
        return f
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('z84I'), n('i4UL'), n('2G9S'), n('uFXj'), n('yH/f'), n('ERkP')),
        s = n.n(c),
        l = n('rHpw'),
        u = n('MWbm')
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
                a()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function f(e) {
        var t,
          n = e.count,
          r = e.max,
          a = e.selectedIndex,
          i = 2 * b((t = l.a.theme)).px + t.borderWidthsPx.small,
          c = s.a.useRef({ left: 0, right: r - 1 }),
          d = s.a.useRef(0),
          p = s.a.useState(h(c.current, n, i)),
          f = o()(p, 2),
          y = f[0],
          g = f[1]
        s.a.useEffect(
          function () {
            for (
              ;
              (e = void 0),
                (t = void 0),
                (r = void 0),
                (o = void 0),
                (s = void 0),
                (l = void 0),
                (e = n - 1),
                (t = c.current),
                (r = t.left),
                (o = t.right),
                (l = a + 1 - r <= 2 && 0 !== r),
                ((s = o - a + 1 <= 2 && o !== e) || l) &&
                  (s
                    ? ((c.current.left = r + 1), (c.current.right = o + 1))
                    : l && ((c.current.left = r - 1), (c.current.right = o - 1)),
                  1);

            );
            var e, t, r, o, s, l
            g(h(c.current, n, i)), (d.current = a)
          },
          [a, n, r, i],
        )
        var S = new Array(n).fill(1).map(function (e, t) {
          var i = t === a
          if (n <= r) return s.a.createElement(m, { key: t, selected: i })
          var o = y[t]
          return s.a.createElement(m, { continuation: Boolean(o), continuationType: o, key: t, selected: i })
        })
        return s.a.createElement(
          u.a,
          {
            style: [
              v.indicatorWindowContainer,
              { width: 'calc('.concat(r, ' * ').concat(i, 'px)'), height: ''.concat(i, 'px') },
            ],
          },
          s.a.createElement(
            u.a,
            {
              style: [
                v.indicatorsContainer,
                { height: ''.concat(i, 'px'), width: 'calc('.concat(i, 'px * ').concat(n, ')') },
                y.style,
              ],
            },
            S,
          ),
        )
      }
      function m(e) {
        var t = v.indicator
        if (e.selected) t = v.indicatorSelected
        else if (e.continuation)
          switch (e.continuationType) {
            case y.small:
              t = v.indicatorContinuationSmall
              break
            case y.medium:
              t = v.indicatorContinuationMedium
          }
        return s.a.createElement(u.a, { style: t })
      }
      function h(e, t, n) {
        var r = e.left,
          a = e.right,
          i = { style: { transform: [{ translateX: -1 * n * r }] } }
        return (
          (i[r - 1] = y.small),
          (i[r] = y.small),
          (i[r + 1] = y.medium),
          (i[a - 1] = y.medium),
          (i[a] = y.small),
          (i[a + 1] = y.small),
          0 === r ? (delete i[0], delete i[1]) : a > t - 2 && (delete i[t - 1], delete i[t - 2]),
          i
        )
      }
      function b(e) {
        return { style: e.spaces.space8, px: e.spacesPx.space8 }
      }
      var v = l.a.create(function (e) {
          var t = b(e).style,
            n = { transition: 'transform 200ms' },
            r = p(
              p({}, n),
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
            a = p(p({}, r), {}, { backgroundColor: e.colors.gray300 })
          return {
            indicatorWindowContainer: { marginVertical: e.spaces.space12, overflow: 'hidden', margin: 'auto' },
            indicatorsContainer: p(
              p({}, n),
              {},
              { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            ),
            indicatorSelected: p(
              p({}, r),
              {},
              {
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.gray300,
                borderStyle: 'solid',
                backgroundColor: e.colors.white,
                transform: [{ scale: 1 }],
              },
            ),
            indicator: p(p({}, r), {}, { backgroundColor: e.colors.gray300 }),
            indicatorContinuationSmall: p(p({}, a), {}, { transform: [{ scale: 0.3 }] }),
            indicatorContinuationMedium: p(p({}, a), {}, { transform: [{ scale: 0.4 }] }),
          }
        }),
        y = Object.freeze({ small: 'small', medium: 'medium' })
    },
    VKFJ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return f
        })
      var r,
        a = n('KEM+'),
        i = n.n(a),
        o = n('RhWx'),
        c = n.n(o),
        s = (n('m9LP'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('2G9S'), n('yH/f'), n('A7Vd')),
        l = n('ERkP'),
        u = n.n(l),
        d = n('dgjd')
      function p(e) {
        var t = Object(d.a)(e),
          n = t.space,
          r = t.utils,
          a = s.e()
        return u.a.useMemo(
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
                p.canParticipantSpeak(n) ? t.push(c) : i.push(c)
              }
            }
            if (!n) return o()
            n.host && s(f.host, n.host, n.host.periscope_user_id)
            var l = [].concat(c()(n.cohosts), c()(n.participants.speakers))
            r.is.replayable || l.push.apply(l, c()(n.participants.listeners))
            for (var u = 0; u < l.length; u++) {
              var d = l[u],
                m = d.periscope_user_id
              if (m)
                a.get(m)
                  ? u < n.cohosts.length
                    ? s(f.cohost, d, m)
                    : s(f.speaker, d, m)
                  : r.is.replayable || s(f.listener, d, m)
            }
            return o()
          },
          [n, a, r.is.replayable],
        )
      }
      ;(p.canParticipantSpeak = function (e) {
        return Boolean(e && m[e])
      }),
        (p.isParticipantHost = function (e) {
          return e === f.host
        })
      var f = Object.freeze({ host: 'host', cohost: 'cohost', speaker: 'speaker', listener: 'listener' }),
        m = ((r = {}), i()(r, f.host, !0), i()(r, f.cohost, !0), i()(r, f.speaker, !0), r)
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
      function M(e) {
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
      var L = '/chatapi/v1/chatnow',
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
                      return M(M({}, t), {}, { chatmanClient: e })
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
                          return (e.session = n), O.i.getState().isReplay ? e.loadChatHistory() : e.openSocket(), t(e)
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
                    var e = this.session.endpoint.replace('https://', 'wss://') + L
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
        o = n.n(i),
        c = n('Lsrn'),
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
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(s.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          o.a.createElement(
            'g',
            null,
            o.a.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
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
        return M
      })
      var r = n('ddV6'),
        a = n.n(r),
        i = (n('tVqn'), n('z84I'), n('jwue'), n('+oxZ'), n('+KXO'), n('JtPf'), n('7x/C'), n('IAdD'), n('Q/sS')),
        o = n('A7Vd'),
        c = n('ERkP'),
        s = n.n(c),
        l = n('RqPI'),
        u = n('QEWO'),
        d = n('Pc/x'),
        p = (n('1t7P'), n('LW0h'), n('daRM'), n('FtHn'), n('VrFO')),
        f = n.n(p),
        m = n('Y9Ll'),
        h = n.n(m),
        b = n('KEM+'),
        v = n.n(b),
        y = (n('Ysgh'), n('KqXw'), n('KOtZ'), n('2G9S'), n('cnVF'))
      function g(e, t) {
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
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                v()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var O = new ((function () {
          function e() {
            f()(this, e), v()(this, 'events', [])
          }
          return (
            h()(e, [
              {
                key: 'createScribeFunction',
                value: function (e) {
                  var t = this
                  return function (n, r) {
                    var i = e.analytics.contextualScribeNamespace,
                      o = S(S({}, e.details), {}, { scribe_context_namespace: i }, r),
                      c = n.split(':'),
                      s = a()(c, 6),
                      l = { page: s[1], section: s[2], component: s[3], element: s[4], action: s[5] },
                      u = Object.keys(l).reduce(function (e, t) {
                        var n = l[t]
                        return '*' === n || (e[t] = n || void 0), e
                      }, {})
                    e.analytics.scribe(S(S({}, u), {}, { data: { audio_space_details: o } })),
                      t.events.push({ event_name: ''.concat(y.w).concat(n), ts: Date.now(), audio_space_details: o }),
                      t.timerId || t._scheduleNextPublish()
                  }
                },
              },
              {
                key: '_publish',
                value: function () {
                  var e = this
                  return d.a.proxsee.trackAudiospaceClientEvent(this.events).then(function () {
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
        w = n('nmVb'),
        E = n.n(w),
        P = n('kGix'),
        k = n('3XMw'),
        j = n.n(k),
        x = n('b2fv'),
        C = n('AooF'),
        I = n('Irs7'),
        R = n('LxAE'),
        T = n('yUQf')
      function M(e) {
        var t,
          n,
          r,
          c,
          p,
          f = Object(I.b)(),
          m = Object(T.a)(l.m),
          h = (function (e) {
            var t = (function () {
                var e = Object(R.a)(),
                  t = a()(e.audioSpaces.cache, 2),
                  n = t[0],
                  r = t[1]
                return {
                  getAudioSpace: i,
                  fetchAudioSpace: s,
                  subscribeToScheduledSpace: o,
                  unsubscribeFromScheduledSpace: c,
                  reportSpaceFor: d.a.proxsee.reportSpaceFor,
                  audioContext: e,
                }
                function i(e) {
                  var t = n[e]
                  return t || L(P.a.NONE)
                }
                function o(e) {
                  return d.a.subscribeToScheduledSpace(e).then(function () {
                    return s(e)
                  })
                }
                function c(e) {
                  return d.a.unsubscribeFromScheduledSpace(e).then(function () {
                    return s(e)
                  })
                }
                function s(e, t) {
                  var n,
                    a = i(e)
                  if ('number' == typeof t && a.status !== P.a.NONE && !((Date.now() - a.time) / 1e3 > t))
                    return Promise.resolve(a)
                  function o(t) {
                    var n = L(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                    r(function (t) {
                      var r = Object.assign({}, t[e], n)
                      return (t[e] = r), Object.assign({}, t)
                    })
                  }
                  return d.a.initialized()
                    ? (o(P.a.LOADING),
                      d.a
                        .audioSpace(e)
                        .catch(function (e) {
                          n = e
                        })
                        .then(function (e) {
                          e ? o(P.a.LOADED, { data: e, error: void 0 }) : n && o(P.a.FAILED, { error: n })
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
            function u(t) {
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
                      ;(i.ntp_timestamp = s), (i.timecode = Math.floor((Object(x.b)(s) - a) / 1e3))
                    }
                    return c[n](i)
                  }
                }),
                t
              )
            }
            return { fetch: u, get: p, subscribe: f, unsubscribe: m, audioContext: n, report: h() }
          })(e),
          b = h.audioContext,
          v = h.report,
          y = h.subscribe,
          g = h.unsubscribe,
          S = h.get(),
          w = S.data,
          k = null == w ? void 0 : w.state,
          j = {
            NotStarted: k === C.a.SpaceState.NotStarted,
            PrePublished: k === C.a.SpaceState.PrePublished,
            Running: k === C.a.SpaceState.Running,
            TimedOut: k === C.a.SpaceState.TimedOut,
            Ended: k === C.a.SpaceState.Ended,
            Canceled: k === C.a.SpaceState.Canceled,
            loaded: !!w || S.status === P.a.FAILED,
            loading: S.status === P.a.LOADING,
            error: S.status === P.a.FAILED && S.error,
            joined:
              (null === (t = b.activeItem) || void 0 === t ? void 0 : t.type) === u.a.space &&
              (null === (n = b.activeItem) || void 0 === n ? void 0 : n.id) === e,
            recording: !1,
            replayable: !1,
          }
        function M() {
          var e,
            t,
            n = null == w || null === (e = w.title) || void 0 === e ? void 0 : e.trim(),
            r = null == w || null === (t = w.host) || void 0 === t ? void 0 : t.display_name
          return n || (r ? _.title({ name: r }) : _.titleFallback)
        }
        null != w &&
          w.is_space_available_for_replay &&
          (j.Running ? (j.recording = !0) : j.Ended && (j.replayable = !0))
        var A = 'live_not_recording'
        null != w && w.is_space_available_for_replay && (A = j.Running ? 'live_recording' : 'replay')
        var z = O.createScribeFunction({
            analytics: f,
            details: {
              broadcast_id: e,
              host_id:
                null == w || null === (r = w.host) || void 0 === r || null === (c = r.user) || void 0 === c
                  ? void 0
                  : c.rest_id,
              host_periscope_id: null == w || null === (p = w.host) || void 0 === p ? void 0 : p.periscope_user_id,
              audio_space_start_type: null != w && w.scheduled_start ? 'scheduled' : 'adhoc',
              audio_space_recording_type: A,
              state: k,
              is_logged_in: m,
            },
          }),
          H = {
            is: j,
            title: M,
            hashtags: function () {
              return E()(M()).map(function (e) {
                return '#'.concat(e)
              })
            },
            scribe: z,
            state: function () {
              var e,
                t = C.a.StateEnum
              return (
                j.loaded && j.error
                  ? (e = t.unavailable)
                  : j.replayable
                  ? (e = t.replay)
                  : j.Ended || j.TimedOut
                  ? (e = t.ended)
                  : j.Running
                  ? (e = t.live)
                  : j.NotStarted || j.PrePublished
                  ? (e = t.scheduled)
                  : j.Canceled && (e = t.canceled),
                e
              )
            },
          },
          B = d.a.initialized(),
          F = s.a.useRef({})
        ;(F.current.utils = H),
          (F.current.audioSpaceMetadata = h),
          s.a.useEffect(
            function () {
              var e,
                t = D
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
            var n = w
            n &&
              d.a.proxsee.login().then(function () {
                var r = H.is.Running || H.is.replayable,
                  a = n.media_key
                a &&
                  r &&
                  (H.is.replayable
                    ? (i.f(n.started_at), H.scribe(':audiospace:replay:recording:play:click', { origin: t }))
                    : i.e(),
                  b.load.space(e, a, H.is.Running),
                  H.scribe(':audiospace:event:join:listener:success', { origin: t }))
              })
          },
        }
        return { space: w, audioContext: b, utils: H, handlers: N }
      }
      function L(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { status: e, time: Date.now() }
        return t.data && (n.data = t.data), t.error && (n.error = t.error), n
      }
      var D = 15,
        _ = { title: j.a.b6d3e0ee, titleFallback: j.a.ab4fc8bb }
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
        w = n.n(O),
        E = n('/yvb'),
        P = n('3XMw'),
        k = n.n(P),
        j = n('py1r'),
        x = n('oLZl'),
        C = n('9RkS'),
        I = n('rHpw'),
        R = n('A53h'),
        T = n('sTSP'),
        M = n('MWbm')
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
      var D = k.a.b3160a69,
        _ = (function (e) {
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
                  var i = ''.concat(n - a - I.a.theme.spacesPx.space20, 'px')
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
                return z['large' === t ? 'xLarge' : t]
              }),
              S()(p()(e), '_handleKeyDown', function (t) {
                var n = e.props,
                  r = n.onSliderChange,
                  a = n.volumePercent,
                  i = t.altKey,
                  o = t.ctrlKey,
                  c = t.metaKey
                if (!(i || o || c)) {
                  var s = t.key === x.a.ArrowUp || t.key === x.a.ArrowRight,
                    l = t.key === x.a.ArrowDown || t.key === x.a.ArrowLeft
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
                    y = c ? w.a.createElement(R.a, null) : w.a.createElement(T.a, null),
                    g = b ? A.sliderWithNavigationBackground : A.sliderWithDefaultBackground
                  return w.a.createElement(
                    j.a,
                    {
                      disabled: !d,
                      onFocusRingGained: d ? this._showSlider : void 0,
                      onFocusRingLost: d ? this._hideSlider : void 0,
                      onHoverIn: d ? this._showSlider : void 0,
                      onHoverOut: d ? this._hideSlider : void 0,
                    },
                    w.a.createElement(
                      M.a,
                      { onKeyDown: d ? this._handleKeyDown : void 0 },
                      w.a.createElement(
                        E.a,
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
                        w.a.createElement(j.a, { onFocusRingGained: u, onFocusRingLost: s }, function (t) {
                          var n = t.isFocusedWithin
                          return w.a.createElement(
                            M.a,
                            {
                              style: [
                                A.sliderBackground,
                                g,
                                e._getSliderMarginStyles(v.size),
                                n || e._shouldShowSlider(e.state) ? null : I.a.visuallyHidden,
                                i && { maxHeight: e.state.sliderMaxHeight },
                              ],
                            },
                            w.a.createElement(C.a, {
                              accessibilityLabel: r,
                              accessibilityLabelValueText: D({ volumePercent: m }),
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
        })(w.a.PureComponent)
      S()(_, 'defaultProps', { pullRight: !1 })
      var A = I.a.create(function (e) {
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
        z = I.a.create(function (e) {
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
      t.a = _
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
        var t = a.i.getState().startTimeMs
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
        s = n.n(c),
        l = (n('ho0z'), n('21zW')),
        u = n('rHpw'),
        d = n('MH+I'),
        p = n('jV+4'),
        f = n('MWbm')
      function m(e) {
        var t = e.speaker,
          n = e.speakerAvatarSize,
          r = void 0 === n ? 'small' : n,
          a = e.speakerNameSize,
          i = void 0 === a ? 'subtext2' : a,
          o = e.speakerScreenNameSize,
          c = void 0 === o ? 'subtext2' : o,
          l = e.timestamp,
          u = e.withSpeakerAvatar,
          d = void 0 === u || u,
          m = e.withSpeakerScreenName,
          v = void 0 === m || m,
          y = e.withTimestamp,
          g = void 0 !== y && y,
          S = Date.now() - l
        return s.a.createElement(
          f.a,
          { style: b.root },
          s.a.createElement(p.a, {
            avatarSize: r,
            name: t.name,
            nameSize: i,
            profileImageUrl: d ? t.profile_image_url_https : '',
            screenName: t.screen_name,
            screenNameSize: c,
            style: b.userName,
            withScreenName: v,
          }),
          g ? s.a.createElement(h, { size: i, timeMs: S }) : null,
        )
      }
      function h(e) {
        var t = e.size,
          n = void 0 === t ? 'small' : t,
          r = e.timeMs
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(l.a, { size: n }),
          s.a.createElement(d.a, { color: 'gray700', humanReadable: !0, size: n, timeMs: r }),
        )
      }
      var b = u.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1, marginTop: '0.25em' },
            userName: { marginBottom: e.spaces.space4, paddingRight: e.spaces.space4 },
          }
        }),
        v = n('t62R')
      function y(e) {
        var t = e.caption,
          n = e.captionTextSize,
          r = e.withSpeaker,
          i = void 0 === r || r,
          c = o()(e, ['caption', 'captionTextSize', 'withSpeaker']),
          l = t.speaker
        return s.a.createElement(
          f.a,
          { style: [g.root, !i && g.missingSpeakerSpacer] },
          i ? s.a.createElement(m, a()({}, c, { speaker: l, timestamp: t.timestamp })) : null,
          s.a.createElement(v.b, { lang: t.lang, size: n, style: g.captionText }, t.text),
        )
      }
      var g = u.a.create(function (e) {
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
        S = n('KEM+'),
        O = n.n(S),
        w =
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
                O()(e, t, n[t])
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
        var t = e.size,
          n = Math.floor(t / 4.5)
        return s.a.createElement(f.a, { style: [I.root, x(t)] }, s.a.createElement(j, { width: n }))
      }
      function j(e) {
        var t = e.width
        return s.a.createElement(
          s.a.Fragment,
          null,
          Array(3)
            .fill(0)
            .map(function (e, n) {
              return s.a.createElement(f.a, { key: n, style: [I.dot, C(n, t)] })
            }),
        )
      }
      function x(e) {
        return P({}, w(e))
      }
      function C(e, t) {
        return P({ animationDelay: ''.concat(0.5 * e, 's'), borderRadius: '100%' }, w(t))
      }
      var I = u.a.create(function (e) {
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
        R = n('sIe2')
      function T(e) {
        var t = e.headerHeight
        return s.a.createElement(f.a, { style: { height: t } })
      }
      function M(e) {
        var t = e.footerHeight,
          n = e.unintelligible
        return s.a.createElement(
          s.a.Fragment,
          null,
          n ? s.a.createElement(k, { size: 20 }) : null,
          s.a.createElement(f.a, { style: { height: t } }),
        )
      }
      var L = u.a.create(function (e) {
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
          c = void 0 === i ? 28 : i,
          l = e.scrollContainerStyle,
          u = e.unintelligible,
          d = void 0 !== u && u,
          p = e.withFrequentSpeakerAnnouncement,
          m = void 0 !== p && p,
          h = o()(e, [
            'captions',
            'footerHeight',
            'headerHeight',
            'scrollContainerStyle',
            'unintelligible',
            'withFrequentSpeakerAnnouncement',
          ]),
          b = s.a.useRef(null),
          v = s.a.useRef(null),
          g = s.a.useRef({ containerHeight: void 0, hasUserScrolledUp: !1 })
        function S() {
          var e, t
          ;(null !== (e = g.current) && void 0 !== e && e.hasUserScrolledUp) ||
            null === (t = v.current) ||
            void 0 === t ||
            t.scrollToEnd({ animated: !0 })
        }
        return (
          s.a.useEffect(function () {
            var e
            g.current.containerHeight =
              null == b || null === (e = b.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height
          }, []),
          s.a.useEffect(function () {
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
          s.a.createElement(
            f.a,
            { ref: b, style: L.root },
            s.a.createElement(R.a, {
              ListFooterComponent: s.a.createElement(M, { footerHeight: r, unintelligible: d }),
              ListHeaderComponent: s.a.createElement(T, { headerHeight: c }),
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
              ref: v,
              renderItem: function (e) {
                var n,
                  r,
                  i,
                  o = e.index,
                  c = e.item,
                  l = !0
                return (
                  m ||
                    ((r = c.speaker),
                    (i = null === (n = t[o - 1]) || void 0 === n ? void 0 : n.speaker),
                    (l = !(r && i && r.id_str && i.id_str
                      ? r.id_str === i.id_str
                      : r && i && r.screen_name && i.screen_name && r.screen_name === i.screen_name))),
                  s.a.createElement(y, a()({}, h, { caption: c, key: c.sequenceId, withSpeaker: l }))
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
        return P
      }),
        n.d(t, 'b', function () {
          return C
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
        c = n.n(o),
        s = n('G/+M'),
        l = n('v6aA'),
        u = n('3XMw'),
        d = n.n(u),
        p = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('zb92')),
        f = n('RuTB'),
        m = Object(p.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(15), n.e(222)]).then(n.bind(null, '4AX5'))
            })
          },
          renderPlaceholder: function (e, t) {
            return c.a.createElement(f.a, { hasError: e, onRetry: t })
          },
        }),
        h = n('MWbm'),
        b = n('TIdA'),
        v = n('jhWN'),
        y = n('t62R'),
        g = n('jV+4'),
        S = n('rHpw'),
        O = n('VKFJ')
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
      var E = b.a.createLayoutCache()
      function P(e) {
        var t = c.a.useContext(l.a).featureSwitches,
          n = e.children,
          r = e.hasNftAvatar,
          a = e.isVerified,
          i = e.kind,
          o = e.name,
          s = e.periscopeUserId,
          u = e.screenName,
          d = e.width,
          p = r && t.isTrue('responsive_web_nft_avatar'),
          f = i ? j[i] : null,
          m = e.profile_image_url_https || '',
          b =
            n ||
            c.a.createElement(v.a, {
              imageLayoutCache: E,
              screenName: u,
              shape: p ? 'hex' : 'circle',
              size: I,
              style: x.participantAvatarSize,
              uri: m,
              withHoverCard: !0,
              withLink: !0,
            })
        return c.a.createElement(
          h.a,
          { style: [{ width: d }, x.participantCell] },
          c.a.createElement(h.a, { style: x.participantAvatarSize }, b, c.a.createElement(k, { periscopeUserId: s })),
          c.a.createElement(
            y.b,
            { numberOfLines: 1, size: 'subtext2', style: x.participantCellUsername, weight: 'bold' },
            c.a.createElement(g.a, { isVerified: a, name: o }),
          ),
          c.a.createElement(
            h.a,
            { style: x.participantCellKindContainer },
            e.speakingIndicator,
            c.a.createElement(
              y.b,
              { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: x.participantCellKind },
              f || c.a.createElement('span', null, ' '),
            ),
          ),
        )
      }
      function k(e) {
        var t = e.periscopeUserId,
          n = R(S.a.theme).avatar.size,
          r = s.c(t)
        return c.a.createElement(
          c.a.Fragment,
          null,
          null == r
            ? void 0
            : r.map(function (e) {
                return c.a.createElement(m, { key: e.id, reaction: e, size: n })
              }),
        )
      }
      var j =
          ((r = {}),
          i()(r, O.a.host, d.a.cededf29),
          i()(r, O.a.cohost, d.a.f77997bf),
          i()(r, O.a.speaker, d.a.i48f4ed8),
          i()(r, O.a.listener, d.a.a77c8e02),
          r),
        x = S.a.create(function (e) {
          var t = R(e),
            n = { width: t.avatar.size, height: t.avatar.size }
          return {
            participantCell: (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                t % 2
                  ? w(Object(n), !0).forEach(function (t) {
                      i()(e, t, n[t])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : w(Object(n)).forEach(function (t) {
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
      function C(e) {
        var t = R(e)
        return {
          getWidth: function () {
            return t.participantCell.minWidth + 2 * t.participantCell.paddingHorizontal
          },
          getHeight: function () {
            return t.participantCell.height + t.participantCell.marginBottom
          },
        }
      }
      var I = 'xxLarge'
      function R(e) {
        var t = v.a.getSizeStyle('xxLarge').width || e.spacesPx.space48,
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
        return H
      })
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var r = n('KEM+'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = n('97Jx'),
        s = n.n(c),
        l = (n('ho0z'), n('2G9S'), n('ERkP')),
        u = n.n(l),
        d = n('t62R'),
        p = n('/yvb'),
        f = n('n4Eu'),
        m = n('3XMw'),
        h = n.n(m),
        b = n('cm6r'),
        v = n('/NU0'),
        y = n('wD1h'),
        g = n('Oe3h'),
        S = n('0FVZ'),
        O = n('pjBI'),
        w = n('FBXD'),
        E = n('9RkS'),
        P = n('rHpw'),
        k = n('MH+I'),
        j = n('jhWN'),
        x = n('jV+4'),
        C = n('MWbm'),
        I = n('kRXa'),
        R = n('5Ixf'),
        T = n('AtEG'),
        M = n('hOZg')
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
      function D(e) {
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
      function _(e) {
        var t = U(e.onDockPress),
          n = U(e.onUserPress),
          r = U(e.onRequestClose),
          a = U(e.onTogglePlayback)
        return u.a.createElement(
          u.a.Fragment,
          null,
          u.a.createElement(
            C.a,
            { style: N.sliderContainer },
            u.a.createElement(H.SeekSlider, {
              durationMs: e.durationMs,
              externalSeeking: e.isSeeking,
              onSeek: e.onSeek,
              onSliderActive: e.onSliderActive,
              progressMs: e.progressMs,
            }),
          ),
          u.a.createElement(
            C.a,
            { style: N.dockContentRow },
            u.a.createElement(j.a, {
              accessibilityHidden: !0,
              focusable: !1,
              onClick: n,
              screenName: e.user.screen_name,
              size: 'large',
              uri: e.user.profile_image_url_https,
              withLink: !0,
            }),
            u.a.createElement(
              C.a,
              { style: N.dockContentTitle },
              u.a.createElement(
                O.a,
                { size: 'subtext2' },
                u.a.createElement(x.a, {
                  isVerified: e.user.verified,
                  name: e.user.name,
                  nameSize: 'subtext2',
                  onLinkClick: n,
                  screenName: e.user.screen_name,
                  screenNameSize: 'subtext2',
                  weight: 'normal',
                  withLink: !0,
                }),
                u.a.createElement(k.a, { size: 'subtext2', timeMs: e.durationMs }),
              ),
              u.a.createElement(d.b, { numberOfLines: 1, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
            u.a.createElement(
              p.a,
              s()(
                {
                  accessibilityLabel: e.isPlaying ? B.pause : B.play,
                  icon: e.isPlaying ? u.a.createElement(R.a, null) : u.a.createElement(T.a, null),
                  onPress: a,
                  testID: 'togglePlayback',
                },
                F,
              ),
            ),
            u.a.createElement(C.a, { style: N.dockContentButtonSpacer }),
            u.a.createElement(
              p.a,
              s()({ accessibilityLabel: B.close, icon: u.a.createElement(M.a, null), onPress: r, testID: 'close' }, F),
            ),
          ),
        )
      }
      function A(e) {
        var t = U(e.onDockPress),
          n = U(e.onRequestClose),
          r = U(e.onTogglePlayback),
          a = U(e.onUserPress),
          i = u.a.useMemo(
            function () {
              var t,
                n = null === (t = e.user.profile_image_extensions_media_color) || void 0 === t ? void 0 : t.palette
              if (n) {
                var r = f.a.get(n)
                if (r) return W(r.rgb)
              }
              return P.a.theme.colors.primary
            },
            [e.user],
          ),
          o = e.isMuted ? B.unmute : B.mute
        return u.a.createElement(
          C.a,
          { style: [V.wideContainer, V.wideContainerBorderRadius] },
          u.a.createElement(
            C.a,
            { style: V.mainContentContainer },
            u.a.createElement(
              C.a,
              { style: [V.wideAvatarContainer, { backgroundColor: i }] },
              u.a.createElement(j.a, {
                accessibilityHidden: !0,
                focusable: !1,
                onClick: a,
                screenName: e.user.screen_name,
                size: 'xLarge',
                uri: e.user.profile_image_url_https,
                withLink: !0,
              }),
            ),
            u.a.createElement(
              C.a,
              { style: V.mainContent },
              u.a.createElement(x.a, {
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
              u.a.createElement(d.b, { numberOfLines: 2, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
          ),
          u.a.createElement(
            C.a,
            { style: V.belowMainContent },
            u.a.createElement(
              C.a,
              { style: V.slider },
              u.a.createElement(H.SeekSlider, {
                durationMs: e.durationMs,
                externalSeeking: e.isSeeking,
                onSeek: e.onSeek,
                onSliderActive: e.onSliderActive,
                progressMs: e.progressMs,
                withTimes: !0,
              }),
            ),
            u.a.createElement(
              C.a,
              { style: V.iconRow },
              u.a.createElement(
                I.a,
                s()(
                  {
                    accessibilityLabelIcon: o,
                    accessibilityLabelSlider: B.volumeSlider,
                    isMuted: e.isMuted,
                    onMuteToggle: e.onMuteToggle,
                    onSliderChange: e.onVolumeChange,
                    sliderColor: 'purple500',
                    type: void 0,
                    volumePercent: e.volume,
                    withGraySliderTrack: !0,
                    withNavigationSliderBackground: !0,
                  },
                  F,
                ),
              ),
              u.a.createElement(
                p.a,
                s()(
                  {
                    accessibilityLabel: e.isPlaying ? B.pause : B.play,
                    icon: e.isPlaying ? u.a.createElement(R.a, null) : u.a.createElement(T.a, null),
                    onPress: r,
                    testID: 'togglePlayback',
                  },
                  F,
                ),
              ),
            ),
          ),
          u.a.createElement(
            p.a,
            s()(
              {
                accessibilityLabel: B.close,
                icon: u.a.createElement(M.a, null),
                onPress: n,
                style: V.closeIcon,
                testID: 'close',
              },
              F,
            ),
          ),
        )
      }
      function z(e) {
        var t,
          n = u.a.useRef({}),
          r = u.a.useRef(null),
          i = e.isWide && V.wideContainerBorderRadius,
          o = U(function () {
            n.current.isSliderActive || e.onDockPress()
          }),
          c = u.a.useMemo(function () {
            return function () {
              r.current && r.current.focus()
            }
          }, [])
        u.a.useEffect(
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
          u.a.useEffect(function () {
            return function () {
              clearTimeout(n.current.onSliderActiveTimeout)
            }
          }, [])
        var s = e.title || B.untitled,
          l = D(
            D({}, e),
            {},
            {
              title: s,
              onSliderActive: function (e) {
                clearTimeout(n.current.onSliderActiveTimeout),
                  e
                    ? (n.current.isSliderActive = e)
                    : (n.current.onSliderActiveTimeout = setTimeout(function () {
                        n.current.isSliderActive = e
                      }, q))
              },
            },
          )
        return u.a.createElement(
          y.a,
          {
            enabled: !0,
            handlers:
              ((t = {}), a()(t, y.a.shortcuts.audio.dock, c), a()(t, y.a.shortcuts.audio.play, e.onTogglePlayback), t),
          },
          u.a.createElement(
            b.a,
            {
              accessibilityLabel: B.voiceDock,
              onPress: o,
              ref: function (e) {
                r.current = e
              },
              style: [N.container, i],
            },
            u.a.createElement(
              C.a,
              { style: [N.innerContainer, i] },
              e.isWide ? u.a.createElement(A, l) : u.a.createElement(_, l),
            ),
          ),
        )
      }
      function H(e) {
        var t = e.isWide ? S.a.DesktopVoiceTweetDock : S.a.MobileVoiceTweetDock,
          n = [e.isWide ? [V.root, { maxWidth: e.width }] : N.root]
        return u.a.createElement(
          t,
          null,
          u.a.createElement(g.a, { id: 'VoiceTweetDock' }, function (t, r) {
            return u.a.createElement(C.a, s()({ ref: t() }, r({ style: n })), u.a.createElement(z, e))
          }),
        )
      }
      H.SeekSlider = function (e) {
        var t = u.a.useRef({}),
          n = u.a.useState(!1),
          r = o()(n, 2),
          a = r[0],
          i = r[1],
          c = u.a.useState(e.progressMs),
          s = o()(c, 2),
          l = s[0],
          d = s[1],
          p = a || e.externalSeeking ? l : e.progressMs
        !e.externalSeeking || a || t.current.isSliderActive || (p = e.progressMs)
        var f = u.a.createElement(E.a, {
          accessibilityLabel: B.seekSlider,
          color: 'purple500',
          keepLTR: !0,
          keyboardStep: 5e3,
          max: e.durationMs,
          min: 0,
          onActive: function (n) {
            e.onSliderActive && e.onSliderActive(n),
              (t.current.isSliderActive = n),
              !0 === n ? d(e.progressMs) : e.onSeek(l),
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
        return u.a.createElement(
          C.a,
          null,
          u.a.createElement(C.a, { style: V.sliderRow }, u.a.createElement(C.a, { style: V.slider }, f)),
          u.a.createElement(
            C.a,
            { style: V.sliderTimes },
            u.a.createElement(k.a, { size: 'subtext2', timeMs: Object(v.a)(p) ? p : 0 }),
            u.a.createElement(k.a, {
              countdown: !0,
              size: 'subtext2',
              timeMs: Object(v.a)(m) ? m : 0,
              withCountdownSymbol: !0,
            }),
          ),
        )
      }
      var B = {
          untitled: h.a.gfaaead7,
          close: h.a.af8fa2ad,
          pause: h.a.fb236727,
          play: h.a.f17dfdb5,
          voiceDock: h.a.cfd13f46,
          unmute: h.a.b8b6344a,
          mute: h.a.ec8ab8b4,
          volumeSlider: h.a.c9a642f9,
          seekSlider: h.a.hea01797,
        },
        F = { borderColor: 'transparent', color: 'text', size: 'medium' },
        N = P.a.create(function (e) {
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
        V = P.a.create(function (e) {
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
      function U(e) {
        return Object(w.a)(function (t) {
          'function' == typeof e && e()
        })
      }
      var W = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          return 'rgba('.concat(e.red, ', ').concat(e.green, ', ').concat(e.blue, ', ').concat(t, ')')
        },
        q = 200
    },
    ssnq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
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
        s = n.n(c),
        l = (n('z84I'), n('FgXs'))
      function u(e) {
        return 'object' !== o()(e) || null === e
          ? e
          : Array.isArray(e)
          ? e.map(u)
          : Object(l.a)(e, function (e) {
              return u(e)
            })
      }
      var d = n('fs1G'),
        p = n('9EWH')
      function f(e) {
        var t = u(e || {}),
          n = u(t),
          r = new Set()
        function i(e) {
          return (
            r.add(e),
            function () {
              r.delete(e)
            }
          )
        }
        function c() {
          r.forEach(function (e) {
            e(n)
          })
        }
        function l(e) {
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
            ;(n = Object(p.a)(n, function (t) {
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
              c()
          },
          reset: function () {
            ;(n = u(t)), c()
          },
          useSlice: function (e, t) {
            var r = (null == t ? void 0 : t.equalityFn) || m.equality,
              o = d.a,
              c = s.a.useRef({ state: n, slice: e(n), selector: e, equality: r, onUpdate: o })
            ;(c.current.selector = e), (c.current.equality = r)
            var u = s.a.useState(function () {
                return c.current.slice
              }),
              p = a()(u, 2),
              f = p[0],
              h = p[1]
            return (
              s.a.useEffect(function () {
                var e = !0
                c.current.onUpdate = function (e) {
                  return h(function () {
                    return e
                  })
                }
                var t = l(c)
                function r(n) {
                  e && t(n)
                }
                r(n)
                var a = i(r)
                return function () {
                  ;(e = !1), a()
                }
              }, []),
              f
            )
          },
          subscribe: function (e, t, r) {
            var a = (null == r ? void 0 : r.equalityFn) || m.equality,
              o = { current: { state: n, slice: e(n), selector: e, equality: a, onUpdate: t } },
              c = i(l(o))
            return o.current.onUpdate(o.current.slice), c
          },
        }
      }
      Object(p.b)()
      var m = {
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
        return Wt
      }),
        n.d(t, 'b', function () {
          return Gt
        }),
        n.d(t, 'c', function () {
          return nn
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
        h = n.n(m),
        b = n('G/+M'),
        v = n('RhWx'),
        y = n.n(v),
        g = (n('wFPu'), n('vfdX'), n('ho0z'), n('KOtZ'), n('2G9S'), n('3XMw')),
        S = n.n(g),
        O = n('dgjd'),
        w = n('MWbm'),
        E = n('6iuV'),
        P = n('TCYy'),
        k = n('uCxL'),
        j = n('jV+4'),
        x = n('rHpw')
      function C(e) {
        var t = Object(O.a)(e.audioSpaceId).space
        if (!t) return null
        var n = t.sharings,
          r = y()(n)
            .reverse()
            .filter(function (e) {
              return e && e.tweet && e.user
            })
        return r.length ? h.a.createElement(I, { items: r }) : null
      }
      function I(e) {
        var t = e.items,
          n = t.reduce(function (e, t) {
            return t.tweet ? (e.length ? ''.concat(e, '.').concat(t.id) : t.id) : e
          }, ''),
          r = h.a.useState(),
          a = u()(r, 2),
          i = a[0],
          o = a[1],
          c = Math.max(
            0,
            t.findIndex(function (e) {
              return e.id === i
            }),
          )
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            E.a,
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
              return h.a.createElement(R, { item: e, key: e.id || t })
            }),
          ),
          h.a.createElement(P.a, { count: t.length, key: ''.concat(n, '-indicators'), max: T, selectedIndex: c }),
        )
      }
      function R(e) {
        if (!e.item) return null
        var t = e.item,
          n = t.tweet,
          r = t.user
        return h.a.createElement(
          w.a,
          { key: n.id_str, style: L.sharedContentContainer },
          h.a.createElement(k.a, { isCondensed: !0, tweet: n }),
          h.a.createElement(j.a, {
            avatarSize: 'small',
            name: M.sharedBy({ name: null == r ? void 0 : r.name }),
            nameSize: 'subtext2',
            profileImageUrl: null == r ? void 0 : r.profile_image_url_https,
            style: L.sharedContentBy,
            weight: 'normal',
          }),
        )
      }
      var T = 8,
        M = { sharedBy: S.a.bdfa93eb },
        L = x.a.create(function (e) {
          return {
            sharedContentContainer: { paddingHorizontal: nn(e).container.paddingHorizontal, width: '100%' },
            carouselChildrenStyles: { scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
            sharedContentBy: { marginTop: e.spaces.space8 },
          }
        }),
        D = n('2C8o'),
        _ = n('ndUM'),
        A = n('vbJ7')
      function z(e) {
        var t = e.audioSpaceId,
          n = e.height,
          r = D.c()
        return p.n()
          ? h.a.createElement(
              w.a,
              { style: [B.container, { height: n }] },
              h.a.createElement(w.a, { style: B.fadeIn }),
              h.a.createElement(H, { audioSpaceId: t, captions: r }),
              h.a.createElement(w.a, { style: B.fadeOut }),
            )
          : null
      }
      function H(e) {
        var t = e.audioSpaceId,
          n = e.captions,
          r = Object(O.a)(t).utils
        return (
          h.a.useEffect(function () {
            r.scribe(':audiospace:::transcription:impression')
          }, []),
          h.a.createElement(_.a, {
            captionTextSize: 'body',
            captions: n,
            footerHeight: 28,
            headerHeight: 28,
            scrollContainerStyle: B.scrollContainerStyle,
            withSpeakerAvatar: !0,
            withSpeakerScreenName: !0,
          })
        )
      }
      var B = x.a.create(function (e) {
          var t = A.a.hexToCss(e.colors.navigationBackground, 0),
            n = A.a.hexToCss(e.colors.navigationBackground, 0.8)
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
        F = n('tM6R'),
        N = n.p + 'bird_spaces_transparent.4a7e7195.png',
        V = (n('1Iuc'), n('cm6r')),
        U = n('Wms4'),
        W = n('+/1j')
      function q(e) {
        var t = Object(O.a)(e.audioSpaceId).utils,
          n = p.k().openSheet
        return h.a.createElement(
          V.a,
          {
            accessibilityLabel: G.recordingActive,
            onPress: function () {
              n(p.b.recordingEducation), t.scribe(':audiospace::recording:icon:click')
            },
            style: X.indicatorWrapper,
          },
          h.a.createElement(K, null),
        )
      }
      function K(e) {
        return h.a.createElement(
          U.a,
          { background: 'navigationBackground' },
          h.a.createElement(
            w.a,
            { style: X.indicatorContainer },
            h.a.createElement(w.a, { style: [X.indicatorDot, e.withoutPulse ? null : X.indicatorDotAnimation] }),
            h.a.createElement(
              W.a,
              { accessibilityRole: 'presentation', selectable: !1, style: X.recordingIndicatorText },
              G.REC,
            ),
          ),
        )
      }
      var X = x.a.create(function (e) {
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
        G = { REC: 'REC', recordingActive: S.a.b4f91a89 },
        J = n('TIdA'),
        Z = n('A91F'),
        Y = n('t62R'),
        Q = n('/yvb'),
        $ = n('Lsrn'),
        ee = n('k/Ka')
      function te(e, t) {
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
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? te(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : te(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var re = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ee.a)(
          'svg',
          ne(
            ne({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [$.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          h.a.createElement(
            'g',
            null,
            h.a.createElement('path', {
              d: 'M17.97 8.24c-.414 0-.75.336-.75.75v3.012c0 2.726-2.268 4.943-5.056 4.943h-.328c-2.788 0-5.056-2.217-5.056-4.943V8.99c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.012c0 3.363 2.636 6.128 5.984 6.414l-.01 2.334H8.268c-.415 0-.75.336-.75.75s.335.75.75.75h7.46c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.977l.01-2.335c3.335-.3 5.956-3.06 5.956-6.413V8.99c0-.415-.336-.75-.75-.75z',
            }),
            h.a.createElement('path', {
              d: 'M12 15.42c2.077 0 3.766-1.688 3.766-3.765v-6.14c0-2.076-1.69-3.765-3.766-3.765S8.234 3.44 8.234 5.516v6.14c0 2.075 1.69 3.765 3.766 3.765zM9.734 5.517c0-1.25 1.016-2.266 2.266-2.266s2.266 1.017 2.266 2.266v6.14c0 1.25-1.017 2.265-2.266 2.265s-2.266-1.016-2.266-2.265v-6.14z',
            }),
          ),
        )
      }
      re.metadata = { width: 24, height: 24 }
      var ae = re,
        ie = n('RUwF')
      function oe() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            w.a,
            { style: le.imageContainer },
            h.a.createElement(J.a, { accessibilityLabel: '', aspectMode: Z.a.COVER, image: N }),
          ),
          h.a.createElement(
            w.a,
            { style: le.contentContainer },
            h.a.createElement(K, { withoutPulse: !0 }),
            h.a.createElement(Y.b, { size: 'title3', style: le.title, weight: 'bold' }, se.title),
            h.a.createElement(Y.b, { color: 'gray700' }, se.subtitle),
            h.a.createElement(ce, {
              icon: h.a.createElement(ae, { style: le.icon }),
              subtitle: se.sections.onlySpeakersRecorded.subtitle,
              title: se.sections.onlySpeakersRecorded.title,
            }),
            h.a.createElement(ce, {
              icon: h.a.createElement(ie.a, { style: le.icon }),
              subtitle: se.sections.replayOrShare.subtitle,
              title: se.sections.replayOrShare.title,
              withOnlyMarginBottom: !0,
            }),
            h.a.createElement(
              Y.b,
              { color: 'gray700', size: 'body', style: le.disclaimer },
              h.a.createElement(
                S.a.I18NFormatMessage,
                { $i18n: 'aab35604' },
                h.a.createElement(Y.b, { color: 'normal', link: F.a.help, withUnderline: !0 }, S.a.ce0104de),
              ),
            ),
            h.a.createElement(Q.a, { onClick: e, type: 'primaryOutlined' }, se.gotIt),
          ),
        )
      }
      function ce(e) {
        return h.a.createElement(
          w.a,
          { style: [le.sectionContainer, e.withOnlyMarginBottom ? le.sectionMarginBottom : le.sectionMarginVertical] },
          e.icon,
          h.a.createElement(
            w.a,
            { style: le.sectionContent },
            h.a.createElement(Y.b, { weight: 'bold' }, e.title),
            h.a.createElement(Y.b, { color: 'gray700' }, e.subtitle),
          ),
        )
      }
      var se = {
          title: S.a.g1c6f16d,
          subtitle: S.a.e5609214,
          gotIt: S.a.j24c37b2,
          sections: {
            onlySpeakersRecorded: { title: S.a.g665514b, subtitle: S.a.ja196c59 },
            replayOrShare: { title: S.a.dd317ed6, subtitle: S.a.hd2dfb72 },
          },
        },
        le = x.a.create(function (e) {
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
        ue = n('PaZX'),
        de = n('lOQR'),
        pe = n('SQlS'),
        fe = n('ISLN'),
        me = n('sTSP'),
        he = n('Zg3A')
      function be(e, t) {
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
      function ve(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? be(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : be(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var ye = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ee.a)(
          'svg',
          ve(
            ve({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [$.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          h.a.createElement(
            'g',
            null,
            h.a.createElement('path', {
              d: 'M22.498 6.008c-.02-.718-.537-1.326-1.24-1.447-4.102-.626-8.048-3.065-8.468-3.328-.44-.293-1.074-.324-1.572 0-.04.02-4.19 2.672-8.497 3.33-.683.12-1.2.728-1.22 1.467 0 .495.03 12.174 9.933 16.85.195.08.39.12.566.12.243 0 .458-.07.595-.132 10.118-4.776 9.913-16.79 9.903-16.86zm-11.23 15.1C2.984 16.634 2.964 6.484 2.944 6.058c3.516-.535 6.876-2.286 8.32-3.106v18.156h.002zm1.464 0V2.952c1.465.84 4.815 2.58 8.302 3.117 0 .1.214 10.453-8.302 15.038z',
            }),
          ),
        )
      }
      ye.metadata = { width: 24, height: 24 }
      var ge = ye,
        Se = 'spaces-intro-nux',
        Oe = { ios: de.a.getiOSAppStoreLink(Se), android: de.a.getAndroidAppStoreLink(Se) }
      function we() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          w.a,
          { style: je.container },
          h.a.createElement(
            w.a,
            { style: je.headingContainer },
            h.a.createElement(
              w.a,
              { style: je.headingIconContainer },
              h.a.createElement(pe.a, { style: je.headingIcon }),
            ),
            h.a.createElement(
              w.a,
              null,
              h.a.createElement(Y.b, { align: 'center', size: 'title4', style: je.title, weight: 'bold' }, ke.title),
              h.a.createElement(Y.b, { align: 'center', color: 'gray700', size: 'body' }, ke.subtitle),
            ),
          ),
          h.a.createElement(
            w.a,
            { style: je.sectionsContainer },
            h.a.createElement(Ee, {
              icon: h.a.createElement(me.a, { style: je.sectionIcon }),
              subtitle: h.a.createElement(
                Pe,
                null,
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'fc9fe08e' },
                  h.a.createElement(Y.b, { link: Oe.ios }, S.a.fd1d03b8),
                  h.a.createElement(Y.b, { link: Oe.android }, S.a.eb4e17b4),
                ),
              ),
              title: ke.sections.listenLive.title,
            }),
            h.a.createElement(Ee, {
              icon: h.a.createElement(he.a, { style: je.sectionIcon }),
              subtitle: h.a.createElement(
                Pe,
                null,
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'a8170308' },
                  h.a.createElement(Y.b, { link: F.a.help }, S.a.c220921d),
                ),
              ),
              title: ke.sections.spacesArePublic.title,
            }),
            h.a.createElement(Ee, {
              icon: h.a.createElement(ge, { style: je.sectionIcon }),
              subtitle: h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(
                  Pe,
                  null,
                  h.a.createElement(
                    S.a.I18NFormatMessage,
                    { $i18n: 'ib602fd8' },
                    h.a.createElement(Y.b, { link: F.a.settings }, S.a.j5485ede),
                  ),
                ),
                h.a.createElement('br', null),
                h.a.createElement(Pe, null, ke.sections.manageExperience.blockAndReport),
              ),
              title: ke.sections.manageExperience.title,
              withMarginBottom: !1,
            }),
          ),
          h.a.createElement(
            w.a,
            { style: je.bottomItems },
            h.a.createElement(
              w.a,
              { style: je.finePrintContainer },
              h.a.createElement(
                Y.b,
                { align: 'center', color: 'gray700', size: 'subtext1', style: je.finePrint },
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'i6164a47' },
                  h.a.createElement(Y.b, { link: F.a.help }, S.a.cdffdeb1),
                ),
              ),
            ),
            h.a.createElement(
              w.a,
              { style: je.ctaContainer },
              h.a.createElement(
                fe.a,
                { accessibilityLabel: ke.gotIt, onPress: e },
                h.a.createElement(
                  Y.b,
                  { align: 'center', color: 'white', numberOfLines: 1, size: 'body', weight: 'bold' },
                  ke.gotIt,
                ),
              ),
            ),
          ),
        )
      }
      function Ee(e) {
        var t = e.icon,
          n = e.subtitle,
          r = e.title,
          a = e.withMarginBottom,
          i = void 0 === a || a
        return h.a.createElement(
          w.a,
          { style: [je.sectionContainer, i ? je.sectionMarginBottom : null] },
          h.a.createElement(w.a, { style: je.sectionIconContainer }, t),
          h.a.createElement(
            w.a,
            { style: je.sectionContent },
            h.a.createElement(Y.b, { size: 'body', weight: 'bold' }, r),
            n,
          ),
        )
      }
      function Pe(e) {
        return h.a.createElement(Y.b, { color: 'gray700', size: 'body' }, e.children)
      }
      var ke = {
          title: S.a.a3e6bb1b,
          subtitle: S.a.d82f214f,
          sections: {
            listenLive: { title: S.a.gf029868 },
            spacesArePublic: { title: S.a.icc1ba70 },
            manageExperience: { title: S.a.bcf241be, blockAndReport: S.a.b0bc833f },
          },
          gotIt: S.a.j24c37b2,
        },
        je = x.a.create(function (e) {
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
        xe = n('WrBE'),
        Ce = n('i4Oy'),
        Ie = n('hUaP')
      function Re(e) {
        var t = Object(p.k)().requestSheetDismissal
        return h.a.createElement(xe.a.View, {
          onClick: t,
          style: [
            Me.dockSheetOverlayBase,
            e.isSideNavLayout ? Le.dockSheetOverlay : Me.dockSheetOverlay,
            {
              opacity: e.animation.animatedPan.interpolate({
                inputRange: [e.animation.shellHeights.half, e.animation.shellHeights.full],
                outputRange: [1, 0],
              }),
            },
          ],
        })
      }
      function Te(e) {
        return h.a.createElement(
          w.a,
          { style: [e.style, e.hasDismissRequest && Me.pointerEventsNone] },
          h.a.createElement(
            xe.a.View,
            {
              style: [
                Me.contentAnimatedContainer,
                {
                  maxHeight: e.maxHeight,
                  transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }],
                },
              ],
            },
            h.a.createElement(
              w.a,
              { style: Me.contentWrapperContainer },
              h.a.createElement(w.a, { style: Me.contentWrapper }, e.children),
            ),
          ),
        )
      }
      var Me = x.a.create(function (e) {
          var t = Object(Ie.b)(e),
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
        Le = x.a.create(function (e) {
          var t = Object(Ie.b)(e)
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
        De = function (e) {
          var t = e.audioSpaceId,
            n = e.dockAnimation,
            r = e.isSideNavLayout,
            a = Object(p.l)(),
            i = a.clearSheet,
            o = a.hasDismissRequest,
            c = a.sheetId,
            s = (function (e) {
              var t = Ce.a.get('window'),
                n = Object(Ie.a)(t.height, e),
                r = h.a.useRef(new xe.a.Value(n.full)).current
              return {
                animatedPan: r,
                shellHeights: n,
                springToOpen: function (e) {
                  return xe.a.spring(r, { toValue: 0, bounciness: 2 }).start(e)
                },
                springToClose: function (e) {
                  return xe.a.spring(r, { toValue: n.full }).start(e)
                },
              }
            })(r),
            l = n.shellHeights.sheetMaxHeight,
            u = r ? Le.contentContainer : Me.contentContainer,
            d = h.a.useMemo(
              function () {
                switch (c) {
                  case p.b.report:
                    return h.a.createElement(ue.b, { audioSpaceId: t })
                  case p.b.recordingEducation:
                    return h.a.createElement(oe, null)
                  case p.b.generalNux:
                    return h.a.createElement(we, null)
                  default:
                    return null
                }
              },
              [c, t],
            )
          if (
            (h.a.useEffect(
              function () {
                d && s.springToOpen()
              },
              [d, s],
            ),
            h.a.useEffect(
              function () {
                o && s.springToClose(i)
              },
              [s, i, o],
            ),
            !d)
          )
            return null
          var f = r ? Le.dockSheetContainer : Me.dockSheetContainer
          return h.a.createElement(
            xe.a.View,
            {
              style: [
                f,
                o && Me.pointerEventsNone,
                {
                  height: n.shellHeights.full - n.animatedPan._value,
                  opacity: s.animatedPan.interpolate({ inputRange: [0, s.shellHeights.half], outputRange: [1, 0] }),
                },
              ],
            },
            h.a.createElement(Re, { animation: s, isSideNavLayout: r }),
            h.a.createElement(Te, { animation: s, hasDismissRequest: o, maxHeight: l, style: u }, d),
          )
        }
      function _e(e) {
        var t = e.children
        return p.m() ? null : t
      }
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
      function ze(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ae(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ae(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var He = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ee.a)(
          'svg',
          ze(
            ze({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [$.a.root, e.style], viewBox: '0 0 17 9.5' },
          ),
          h.a.createElement(
            'g',
            null,
            h.a.createElement('path', {
              d: 'M16.707.293c-.39-.39-1.023-.39-1.414 0L8.5 7.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414l7.5 7.5c.195.195.45.293.707.293s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.023 0-1.414z',
            }),
          ),
        )
      }
      He.metadata = { width: 17, height: 9.5 }
      var Be = He
      function Fe(e) {
        return h.a.createElement(
          Q.a,
          { onPress: e.onPress, pullRight: !0, size: 'medium', type: 'destructiveText' },
          h.a.createElement(Y.b, { size: 'body', weight: 'bold' }, e.isReplay ? Ne.close : Ne.leave),
        )
      }
      var Ne = { leave: S.a.bb1d57b6, close: S.a.ia5e7487 },
        Ve = n('4EYz'),
        Ue = n('MMRb'),
        We = n('Pl95'),
        qe = n('pjBI'),
        Ke = n('MH+I'),
        Xe = n('Rumh')
      function Ge(e) {
        var t = Object(O.a)(e.audioSpaceId).space || {},
          n = t.ended_at,
          r = t.total_live_listeners,
          a = t.total_replay_watched,
          i = Ye(r) + Ye(a)
        return h.a.createElement(
          qe.a,
          { color: et.color, style: Qe.container },
          h.a.createElement(Je, { ended_at: n }),
          h.a.createElement(Ze, { count: i }),
        )
      }
      function Je(e) {
        var t = e.ended_at
        if (!t) return null
        var n = null,
          r = Date.now() - t
        return (
          (n =
            r < nt
              ? h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'f0e84608' },
                  h.a.createElement(Ke.a, { short: !0, timeMs: r }),
                )
              : tt(new Date(t))),
          h.a.createElement(Y.b, et, n)
        )
      }
      function Ze(e) {
        var t = e.count
        return t ? h.a.createElement(Y.b, et, $e.tunedIn({ count: Xe.a.formatCountShort(t) })) : null
      }
      function Ye(e) {
        return null != e ? e : 0
      }
      var Qe = x.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 } }
        }),
        $e = { tunedIn: S.a.h140746e },
        et = { color: 'normal', size: 'subtext2' },
        tt = S.a.e18e399a,
        nt = 864e5
      function rt(e) {
        return h.a.createElement(
          w.a,
          { style: ot.titleLabelRow },
          h.a.createElement(rt.Replay, e),
          h.a.createElement(rt.EmployeeOnly, e),
        )
      }
      function at(e) {
        return h.a.createElement(w.a, { style: ot.titleLabelSpacer }, e.children)
      }
      ;(rt.EmployeeOnly = function (e) {
        var t = Object(O.a)(e.audioSpaceId).space
        return null != t && t.is_employee_only
          ? h.a.createElement(
              at,
              null,
              h.a.createElement(U.a, { background: 'navigationBackground', bold: !0 }, it.tweepsOnly),
            )
          : null
      }),
        (rt.Replay = function (e) {
          var t = Object(O.a)(e.audioSpaceId).utils
          return t.is.recording
            ? h.a.createElement(at, null, h.a.createElement(q, e))
            : t.is.replayable
            ? h.a.createElement(at, null, h.a.createElement(Ge, e))
            : null
        })
      var it = { tweepsOnly: S.a.a5bf5489 },
        ot = x.a.create(function (e) {
          return { titleLabelRow: { flexDirection: 'row' }, titleLabelSpacer: { paddingRight: e.spacesPx.space4 } }
        }),
        ct = n('VKFJ'),
        st = n('yUQf'),
        lt = n('sIe2'),
        ut = n('7ep7'),
        dt = n('0FVZ'),
        pt = n('Oe3h'),
        ft = n('cTG8'),
        mt = n('U7kY'),
        ht = n('tno6'),
        bt = n('v6aA'),
        vt = n('DlVf'),
        yt = n('RqPI'),
        gt = n('mjJ+'),
        St = n('FXw/'),
        Ot = n('GCOQ')
      function wt(e) {
        var t = (function (e) {
            var t = Object(O.a)(e).utils,
              n = Object(st.a)(yt.m),
              r = p.k().openSheet,
              a = []
            n &&
              a.push({
                Icon: Ot.a,
                text: Et.reportThisSpace,
                isEmphasized: !0,
                onClick: function () {
                  r(p.b.report), t.scribe(':audiospace::caret:report:click')
                },
              })
            return { items: a }
          })(e.audioSpaceId),
          n = h.a.useState(!1),
          r = u()(n, 2),
          a = r[0],
          i = r[1]
        if (t.items.length < 1) return null
        var o = a
          ? h.a.createElement(gt.a, {
              isFixed: !0,
              items: t.items,
              onCloseRequested: function () {
                return i(!1)
              },
              shouldCloseOnClick: !0,
            })
          : null
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(Q.a, {
            accessibilityLabel: Et.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: Et.more },
            icon: h.a.createElement(St.a, null),
            onPress: function () {
              return i(!0)
            },
            size: 'medium',
            type: 'primaryOutlined',
          }),
          o,
        )
      }
      var Et = { more: S.a.h63a5c3b, reportThisSpace: S.a.b3481ffd },
        Pt = n('O07O'),
        kt = (n('i4UL'), n('Xyrk'))
      function jt(e, t) {
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
      function xt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? jt(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : jt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Ct() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ee.a)(
          'svg',
          xt(xt({}, e), {}, { style: [It.root, e.style], viewBox: '0 0 24 24' }),
          h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(kt.a.SVGLinearGradient, null),
            h.a.createElement(
              'g',
              { fill: kt.a.SVGLinearGradient.fill },
              h.a.createElement('path', {
                d: 'M17.97 7.585c-.552 0-1 .448-1 1v3.417c0 2.588-2.156 4.693-4.806 4.693h-.328c-2.65 0-4.806-2.105-4.806-4.693V8.585c0-.552-.448-1-1-1s-1 .448-1 1v3.417c0 3.416 2.618 6.237 5.983 6.64l-.01 1.858H8.27c-.553 0-1 .448-1 1s.447 1 1 1h7.46c.552 0 1-.448 1-1s-.448-1-1-1h-2.726l.01-1.863c3.35-.413 5.955-3.228 5.955-6.635V8.585c0-.552-.448-1-1-1z',
              }),
              h.a.createElement('path', {
                d: 'M12 15.42c2.077 0 3.766-1.688 3.766-3.765v-6.14c0-2.076-1.69-3.765-3.766-3.765S8.234 3.44 8.234 5.516v6.14c0 2.075 1.69 3.765 3.766 3.765z',
              }),
            ),
          ),
        )
      }
      Ct.metadata = { width: 24, height: 24 }
      var It = x.a.create(function (e) {
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
        Rt = n('0nhk'),
        Tt = n('ssnq')
      function Mt(e) {
        var t = [At.footer, e.isSideNavLayout && At.footerWide]
        return h.a.createElement(
          w.a,
          {
            onLayout: function (e) {
              var t = e.nativeEvent.layout.height
              _t.setState(function (e) {
                e.height = t
              })
            },
            style: t,
          },
          h.a.createElement(Lt, e),
        )
      }
      function Lt(e) {
        return p.m()
          ? h.a.createElement(Pt.a, { audioSpaceId: e.audioSpaceId })
          : h.a.createElement(Dt, { audioSpaceId: e.audioSpaceId })
      }
      function Dt(e) {
        var t = h.a.useContext(bt.a).featureSwitches
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            w.a,
            { style: At.footerLeft },
            t.isTrue('voice_rooms_speaking_enabled') &&
              h.a.createElement(Q.a, {
                accessibilityLabel: 'Request to speak',
                borderColor: 'transparent',
                color: 'text',
                hoverLabel: { label: 'Request to speak' },
                icon: h.a.createElement(Ct, null),
                onPress: function () {},
                size: 'xLarge',
                type: 'primaryOutlined',
              }),
          ),
          h.a.createElement(
            w.a,
            { style: At.footerRight },
            h.a.createElement(wt, e),
            t.isTrue('voice_rooms_reactions_enabled') &&
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(w.a, { style: At.footerButtonSpacer }),
                h.a.createElement(Q.a, {
                  accessibilityLabel: 'Reactions',
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: 'Reactions' },
                  icon: h.a.createElement(vt.a, null),
                  onPress: function () {},
                  size: 'medium',
                  type: 'primaryOutlined',
                }),
              ),
            t.isTrue('voice_rooms_share_dock_enabled') &&
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(w.a, { style: At.footerButtonSpacer }),
                h.a.createElement(Rt.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon' }),
              ),
          ),
        )
      }
      var _t = new Tt.a({ height: 100 })
      var At = x.a.create(function (e) {
          var t = Object(Ie.b)(e),
            n = t.borderRadius,
            r = t.paddingHorizontal
          return {
            footerButtonSpacer: { width: e.spaces.space16 },
            footerLeft: { flexDirection: 'row' },
            footerRight: { flexDirection: 'row' },
            footer: {
              paddingHorizontal: r,
              width: '100%',
              height: 'calc('.concat(100, 'px + ').concat(x.a.iPhoneOffsetBottom, ')'),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0px -1px 0px '.concat(e.colors.gray50),
              backgroundColor: e.colors.navigationBackground,
            },
            footerWide: { borderBottomLeftRadius: n, borderBottomRightRadius: n, boxShadow: e.boxShadows.xSmall },
          }
        }),
        zt = n('yyPN'),
        Ht = n.n(zt),
        Bt = n('GiKA'),
        Ft = n.n(Bt),
        Nt = n('p3P5')
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
      function Ut(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Vt(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Vt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Wt(e) {
        var t = e.isSideNavLayout ? dt.a.WideExpandedSpaceDock : dt.a.NarrowExpandedSpaceDock
        return h.a.createElement(t, null, h.a.createElement(qt, e))
      }
      function qt(e) {
        var t = Object(st.a)(Ue.selectDrawerVisibility),
          n = Object(Ie.b)(x.a.theme),
          r = e.width + n.shadowOffset,
          a = e.isSideNavLayout ? [on.root, { width: r }] : null,
          i = h.a.useState(),
          o = u()(i, 2),
          c = o[0],
          l = o[1],
          p = h.a.useRef(null),
          f = Ce.a.get('window')
        function m() {
          var e,
            t = null === (e = p.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
          t && l(t)
        }
        return (
          h.a.useLayoutEffect(m, [f.height]),
          h.a.useLayoutEffect(
            function () {
              var e = setTimeout(m, d.a.durationMs + 250)
              return function () {
                return clearTimeout(e)
              }
            },
            [t],
          ),
          h.a.createElement(w.a, { ref: p, style: a }, h.a.createElement(Jt, s()({}, e, { layout: c })))
        )
      }
      function Kt(e) {
        var t = Object(Ie.b)(x.a.theme),
          n = e.animation.shellHeights.full - t.shadowOffset
        return h.a.createElement(
          xe.a.View,
          {
            style: [
              rn.expandedShell,
              { height: n, transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }] },
            ],
          },
          h.a.createElement(Xt, e),
        )
      }
      function Xt(e) {
        var t = p.n(),
          n = p.m(),
          r = _t.useSlice(function (e) {
            return e.height
          }),
          a = h.a.useRef(new xe.a.Value(r))
        function i() {
          e.animation.springTo('collapse')
        }
        function o() {
          e.animation.springTo('exit')
        }
        return (
          h.a.useEffect(
            function () {
              xe.a.spring(a.current, { toValue: t ? r + en : r }).start()
            },
            [t, r],
          ),
          h.a.createElement(pt.a, { id: 'SpaceDockExpanded' }, function (t, r) {
            return h.a.createElement(
              w.a,
              s()({ ref: t() }, r({ style: rn.expandedShellContent })),
              h.a.createElement(
                xe.a.View,
                s()({}, e.animation.panResponder.panHandlers, { style: rn.expandedShellHeader }),
                h.a.createElement(
                  w.a,
                  { style: rn.expandedShellHeaderGripContainer },
                  h.a.createElement(w.a, { style: rn.expandedShellHeaderGrip }),
                ),
                h.a.createElement(
                  w.a,
                  { style: rn.expandedShellHeaderButtons },
                  h.a.createElement(Q.a, {
                    accessibilityLabel: cn.collapse,
                    hoverLabel: { label: cn.collapse },
                    icon: h.a.createElement(Be, { style: rn.iconChevronDown }),
                    onPress: i,
                    pullLeft: !0,
                    size: 'medium',
                    type: 'primaryText',
                  }),
                  h.a.createElement(
                    w.a,
                    { style: rn.expandedShellHeaderRight },
                    h.a.createElement(_e, null, h.a.createElement(We.a, { audioSpaceId: e.audioSpaceId })),
                    h.a.createElement(Fe, { isReplay: n, onPress: o }),
                  ),
                ),
                h.a.createElement(
                  w.a,
                  { style: rn.expandedShellDescription },
                  h.a.createElement(Gt, { audioSpaceId: e.audioSpaceId }),
                ),
              ),
              h.a.createElement(
                xe.a.View,
                {
                  id: 'ParticipantsWrapper',
                  style: [rn.participantsContainer, { paddingBottom: xe.a.add(a.current, e.animation.animatedPan) }],
                },
                e.mounted ? h.a.createElement(Zt, e) : null,
              ),
            )
          })
        )
      }
      function Gt(e) {
        var t = Object(O.a)(e.audioSpaceId).utils.title(),
          n = {
            hashtags: Ht()(t).map(function (e) {
              return (e.text = e.hashtag), e
            }),
            user_mentions: Ft()(t),
          },
          r = [0, t.length]
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(rt, { audioSpaceId: e.audioSpaceId }),
          h.a.createElement(ft.a, {
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
      function Jt(e) {
        var t = h.a.useState(!1),
          n = u()(t, 2),
          r = n[0],
          a = n[1],
          i = (function (e, t, n) {
            var r = h.a.useRef({ state: p.a.full, animatedPanOffset: 0 }),
              a = Ce.a.get('window'),
              i = h.a.useMemo(
                function () {
                  return Object(Ie.a)(a.height, e.isSideNavLayout, n)
                },
                [a.height, e.isSideNavLayout, n],
              ),
              o = h.a.useMemo(
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
              c = h.a.useRef(new xe.a.Value(i.full)).current
            h.a.useEffect(function () {
              var e = o(r.current.state)
              xe.a.spring(c, { toValue: e }).start(t)
            }, [])
            var s = e.onRequestClose,
              l = e.onToggleCollapsed,
              u = h.a.useMemo(
                function () {
                  return function (e, t) {
                    ;(r.current.state = e), p.h(e)
                    var n = o(r.current.state),
                      a = null == t ? void 0 : t.vy
                    return new Promise(function (t) {
                      if (e === p.a.exit) return s(), t()
                      xe.a.spring(c, { velocity: a, toValue: n }).start(function () {
                        e === p.a.collapse && l(), t()
                      })
                    })
                  }
                },
                [c, o, l, s],
              )
            return (
              h.a.useEffect(
                function () {
                  p.g(u)
                },
                [u],
              ),
              {
                panResponder: h.a.useRef(
                  ut.a.create({
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
                        a = Math.abs(n) >= tn
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
              a(!0), p.h(p.a.full)
            },
            e.layout,
          ),
          o = h.a.useRef(new xe.a.Value(i.shellHeights.full)).current,
          c = Ut(Ut({}, e), {}, { mounted: r, animation: i })
        return (
          h.a.useEffect(
            function () {
              var e = i.shellHeights.full
              xe.a.spring(o, { toValue: e }).start()
            },
            [i.shellHeights.full],
          ),
          h.a.useMemo(
            function () {
              var t = e.isSideNavLayout ? on.container : rn.container,
                n = e.isSideNavLayout ? on.expandedShellContainer : rn.expandedShellContainer,
                r = e.isSideNavLayout ? on.footerContainer : rn.footerContainer,
                a = o,
                s = i.animatedPan.interpolate({
                  inputRange: [i.shellHeights.collapse, i.shellHeights.full],
                  outputRange: [1, 0],
                })
              return h.a.createElement(
                xe.a.View,
                { style: [t, rn.forceGPULayer, { height: a, opacity: s }] },
                h.a.createElement(w.a, { style: n }, h.a.createElement(Kt, c)),
                h.a.createElement(
                  w.a,
                  { style: r },
                  h.a.createElement(z, { audioSpaceId: e.audioSpaceId, height: en }),
                  h.a.createElement(Mt, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }),
                ),
                h.a.createElement(De, {
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
      function Zt(e) {
        var t = Object(ct.b)(e.audioSpaceId),
          n = t.all,
          r = t.otherParticipantsTotal
        b.d()
        var a = Ce.a.get('window'),
          i = (e.isSideNavLayout ? e.width : a.width) - 2 * nn(x.a.theme).container.paddingHorizontal,
          o = Object(Nt.b)(x.a.theme),
          c = o.getHeight(),
          l = o.getWidth(),
          u = Math.min(4, Math.floor(i / l)),
          d = i / u
        h.a.useEffect(
          function () {
            return (
              e.isSideNavLayout || mt.a.disable(),
              function () {
                mt.a.enable()
              }
            )
          },
          [e.isSideNavLayout],
        )
        var p = h.a.useMemo(
          function () {
            var e = d
            return n.map(function (t) {
              return Ut(Ut({}, t), {}, { width: e })
            })
          },
          [n, d],
        )
        return h.a.useMemo(
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
              renderItem: Yt,
              ListHeaderComponent: h.a.createElement(C, { audioSpaceId: e.audioSpaceId }),
              ListFooterComponent: h.a.createElement(
                _e,
                null,
                h.a.createElement(
                  w.a,
                  { style: rn.participantsFooterContainer },
                  h.a.createElement(Ve.a, { audioSpaceId: e.audioSpaceId, count: r, interactive: !0 }),
                ),
              ),
            }
            return h.a.createElement(lt.a, s()({ key: u }, t))
          },
          [p],
        )
      }
      function Yt(e) {
        var t = e.item
        return h.a.createElement(Qt, {
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
      function Qt(e) {
        var t = e.periscopeUserId,
          n = a()(e, ['periscopeUserId']),
          r = ct.b.isParticipantHost(n.kind),
          i = ct.b.canParticipantSpeak(n.kind) ? h.a.createElement($t, { isHost: r, periscopeUserId: t }) : null,
          o = Object.assign({}, { speakingIndicator: i, periscopeUserId: t }, n)
        return h.a.createElement(Nt.a, o)
      }
      function $t(e) {
        var t = e.isHost,
          n = e.periscopeUserId,
          r = f.f({ isHost: t, periscopeUserId: n })
        return h.a.createElement(
          w.a,
          { style: an.container },
          h.a.createElement(ht.a, { audioLevel: r || 0, size: x.a.theme.spacesPx.space16 }),
        )
      }
      var en = 100,
        tn = 0.5
      function nn(e) {
        return { container: { paddingHorizontal: e.spacesPx.space8 } }
      }
      var rn = x.a.create(function (e) {
        var t = Object(Ie.b)(e),
          n = t.paddingHorizontal,
          r = t.borderRadius,
          a = nn(e)
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
          participantsContainer: Ut(Ut({}, a.container), {}, { flex: 1 }),
          participantsFooterContainer: { paddingVertical: e.spaces.space16 },
          footerContainer: { position: 'absolute', bottom: 0, width: '100%' },
        }
      })
      var an = x.a.create(function (e) {
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
        on = x.a.create(function (e) {
          var t = Object(Ie.b)(e)
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
        cn = { collapse: S.a.d227d19e }
    },
  },
])
//# sourceMappingURL=WIPED
