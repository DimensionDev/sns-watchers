;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '0nhk': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      })
      var n = a('97Jx'),
        r = a.n(n),
        i = (a('7xRU'), a('ERkP')),
        o = a.n(i),
        c = a('3XMw'),
        s = a.n(c),
        l = a('dgjd'),
        u = a('/yvb'),
        d = a('rHpw'),
        p = a('fn9Y'),
        f = a('I6Uj')
      function m(e) {
        var t = e.audioSpaceId,
          a = e.type,
          n = Object(l.a)(t),
          r = n.space,
          i = n.utils,
          c = i.hashtags().join(' '),
          s = h
        'icon' === a ? (s = v) : 'icon-borderless' === a && (s = b)
        var u = i.is.replayable ? void 0 : k.dmText,
          d = Boolean(null == r ? void 0 : r.is_employee_only)
        return o.a.createElement(
          f.a.Custom,
          { ButtonComponent: s, isFixed: e.isFixed, pullRight: e.pullRight, scribeNamespace: y, url: g(t) },
          d ? null : o.a.createElement(f.a.Action, { scribeNamespace: S.tweet, shareText: c, type: 'tweet' }),
          o.a.createElement(f.a.Action, { scribeNamespace: S.dm, shareText: u, type: 'dm' }),
          o.a.createElement(f.a.Action, { scribeNamespace: S.copy, shareText: c, type: 'copy' }),
          o.a.createElement(f.a.Action, { scribeNamespace: S.via, shareText: c, type: 'via' }),
        )
      }
      function h(e) {
        return o.a.createElement(
          u.a,
          r()({}, e, { borderColor: 'transparent', style: E.shareButton, type: 'primaryOutlined' }),
          k.share,
        )
      }
      function v(e) {
        return o.a.createElement(u.a, r()({}, w, { type: 'primaryOutlined' }, e))
      }
      function b(e) {
        return o.a.createElement(u.a, r()({}, w, e))
      }
      var g = function (e) {
          return 'https://twitter.com/i/spaces/'.concat(e)
        },
        y = { page: 'audiospace', component: 'share_sheet' },
        S = {
          tweet: { element: 'send_tweet', action: 'click' },
          dm: { element: 'send_dm', action: 'click' },
          copy: { element: 'link', action: 'click' },
          via: { element: void 0, action: 'impression' },
        },
        E = d.a.create(function (e) {
          return { shareButton: { width: '100%' } }
        }),
        k = { share: s.a.ifea3114, dmText: s.a.c63dd2cb },
        w = {
          accessibilityLabel: k.share,
          borderColor: 'transparent',
          color: 'text',
          hoverLabel: { label: k.share },
          icon: o.a.createElement(p.a, null),
          size: 'medium',
        }
    },
    '2C8o': function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return b
      }),
        a.d(t, 'c', function () {
          return g
        }),
        a.d(t, 'd', function () {
          return y
        }),
        a.d(t, 'a', function () {
          return O
        })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        c = a('RhWx'),
        s = a.n(c),
        l =
          (a('2G9S'),
          a('jwue'),
          a('7x/C'),
          a('+oxZ'),
          a('LW0h'),
          a('Ee2X'),
          a('vfdX'),
          a('lZm3'),
          a('z84I'),
          a('i4UL'),
          a('3voH'),
          a('KqXw'),
          a('MvUL'),
          a('Q/sS')),
        u = a('ERkP'),
        d = a.n(u),
        p = a('Chkh'),
        f = a('Xda3'),
        m = a('ssnq'),
        h = new m.a({ liveCaptions: [], pastCaptions: [], currentCaptionSequenceId: 0 }),
        v = h
      function b() {
        v.reset()
      }
      function g() {
        var e = l.o()
        return (
          d.a.useEffect(
            function () {
              if (e === l.c.On) {
                var t = p.a.subscribe(f.a.ChatCaption, k),
                  a = p.a.subscribe(f.a.ServerAudioTranscription, w)
                return function () {
                  t(), a()
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
      function y() {
        return h.useSlice(function (e) {
          var t = e.liveCaptions,
            a = e.pastCaptions
          return 0 !== t.length || 0 !== a.length
        })
      }
      function S(e) {
        h.setState(function (t) {
          e.filter(R).forEach(function (e) {
            var a = e.body.body,
              n = e.data.sender.twitter_id,
              r = T(t, n)
            ;-1 === r
              ? C(t, e)
              : (function (e, t) {
                  var a = e.length < t.length ? { longer: t, shorter: e } : { longer: e, shorter: t },
                    n = a.longer,
                    r = a.shorter
                  if (0 === n.length) return 1
                  return (
                    (n.length -
                      (function () {
                        for (
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                            a = Array(t.length + 1)
                              .fill(null)
                              .map(function () {
                                return Array(e.length + 1).fill(null)
                              }),
                            n = 0;
                          n <= e.length;
                          n += 1
                        )
                          a[0][n] = n
                        for (var r = 0; r <= t.length; r += 1) a[r][0] = r
                        for (var i = 1; i <= t.length; i += 1)
                          for (var o = 1; o <= e.length; o += 1) {
                            var c = e[o - 1] === t[i - 1] ? 0 : 1
                            a[i][o] = Math.min(a[i][o - 1] + 1, a[i - 1][o] + 1, a[i - 1][o - 1] + c)
                          }
                        return a[t.length][e.length]
                      })(n, r)) /
                    parseFloat(n.length)
                  )
                })(a, t.liveCaptions[r].text) > 0.1
              ? x(t, e, r)
              : P(t, e, r)
          })
        })
      }
      function E(e) {
        h.setState(function (t) {
          e.filter(R).forEach(function (e) {
            var a = e.data.sender.twitter_id,
              n = T(t, a)
            e.body.final
              ? (function (e, t, a) {
                  var n,
                    r = t.data.sender.twitter_id
                  if (a > -1) {
                    var i = e.liveCaptions.splice(a, 1)
                    n = o()(i, 1)[0].sequenceId
                  } else (e.currentCaptionSequenceId += 1), (n = e.currentCaptionSequenceId)
                  var c = L(t, { final: !0, sequenceId: n })
                  ;(e.pastCaptions = [].concat(s()(e.pastCaptions), [c])), I(e, r, t.timestamp)
                })(t, e, n)
              : -1 === n
              ? C(t, e)
              : !(function (e, t, a) {
                  var n = !1,
                    r = e.liveCaptions[a].text,
                    i = t.body.body
                  if (!t.body.final && i.length > 0 && r.length > 0) {
                    n = i.length / r.length < 0.2
                  }
                  return n
                })(t, e, n)
              ? x(t, e, n)
              : P(t, e, n)
          })
        })
      }
      function k(e) {
        return S(e), { clearHeapForMessageType: !0 }
      }
      function w(e) {
        return E(e), { clearHeapForMessageType: !0 }
      }
      function C(e, t) {
        var a = t.data.sender.twitter_id
        e.currentCaptionSequenceId += 1
        var n = L(t, { sequenceId: e.currentCaptionSequenceId })
        return e.liveCaptions.push(n), I(e, a, t.timestamp), n
      }
      function x(e, t, a) {
        var n = e.liveCaptions.splice(a, 1),
          r = o()(n, 1)[0],
          i = L(t, { sequenceId: r.sequenceId, timestamp: r.timestamp })
        return e.liveCaptions.push(i), i
      }
      function I(e, t, a) {
        e.liveCaptions
          .filter(function (e) {
            return !(e.speaker.id_str === t) && a - e.timestamp > 250
          })
          .forEach(function (t) {
            var a = e.liveCaptions.findIndex(function (e) {
                return e.sequenceId === t.sequenceId
              }),
              n = e.liveCaptions.splice(a, 1),
              r = o()(n, 1)[0]
            e.pastCaptions.push(r)
          })
      }
      function P(e, t, a) {
        var n = t.data.sender.twitter_id,
          r = e.liveCaptions.splice(a, 1),
          i = o()(r, 1)[0]
        ;(i.final = !0), (e.pastCaptions = [].concat(s()(e.pastCaptions), [i]))
        var c = C(e, t)
        return I(e, n, t.timestamp), c
      }
      function T(e, t) {
        return e.liveCaptions.findIndex(function (e) {
          return e.speaker.id_str === t
        })
      }
      function R(e) {
        var t = e.body.body
        return !!t && t.length > 0
      }
      function O(e) {
        var t = e.body.body,
          a = e.type
        return f.a.Chat === a && t.startsWith('[cc]')
      }
      function L(e, t) {
        var a = e.body.final,
          n = e.data,
          i = n.sender,
          o = n.sender.twitter_id,
          c = e.timestamp,
          s = e.body.body,
          l = t.sequenceId
        return (
          (s = s.replace(/^\[cc\]\s?/, '')),
          r()(
            {
              final: a,
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
    '4EYz': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return C
      })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        c = (a('uFXj'), a('ERkP')),
        s = a.n(c),
        l = a('tM6R'),
        u = a('fs1G'),
        d = a('0nhk'),
        p = a('MWbm'),
        f = a('t62R'),
        m = a('fzjU'),
        h = a('/yvb'),
        v = a('efqG'),
        b = a('cm6r'),
        g = a('rHpw'),
        y = a('3XMw'),
        S = a.n(y),
        E = a('hOZg'),
        k = a('7Mjr'),
        w = ['audioSpaceId', 'dismiss', 'type']
      function C(e) {
        if (e.count < 1) return null
        var t = { count: e.count, labelType: 'otherListeners' }
        return s.a.createElement(
          p.a,
          { style: R.otherParticipantsWrapper },
          s.a.createElement(
            I,
            e,
            s.a.createElement(
              p.a,
              { style: R.otherParticipantsContainer },
              s.a.createElement(
                p.a,
                { style: R.otherParticipantsText },
                s.a.createElement(
                  f.b,
                  { size: T.fontSize, weight: 'bold' },
                  s.a.createElement(m.a.ParticipantsCount, t),
                ),
              ),
              s.a.createElement(P, e),
            ),
          ),
        )
      }
      function x(e) {
        var t = e.audioSpaceId,
          a = e.dismiss,
          n = e.type,
          r = o()(e, w),
          i = s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              p.a,
              { style: R.popoverSheetDescription },
              s.a.createElement(
                f.b,
                { color: 'gray700', size: 'body' },
                s.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'b9c4cfcb' },
                  s.a.createElement(f.b, { color: 'text', link: l.a.help, withUnderline: !0 }, S.a.g646959f),
                ),
              ),
            ),
            s.a.createElement(f.b, { size: 'body', weight: 'bold' }, O.shareWithPeople),
            s.a.createElement(
              p.a,
              { style: R.popoverShareButtonContainer },
              s.a.createElement(d.a, { audioSpaceId: t }),
            ),
          )
        return 'popover' === n
          ? s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                p.a,
                { style: R.popoverTitle },
                s.a.createElement(
                  f.b,
                  { size: 'title4', weight: 'heavy' },
                  s.a.createElement(m.a.ParticipantsCount, r),
                ),
              ),
              i,
            )
          : s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                p.a,
                { style: R.popoverSheetTitleContainer },
                s.a.createElement(
                  p.a,
                  { style: R.popoverSheetTitle },
                  s.a.createElement(
                    f.b,
                    { size: 'headline2', weight: 'heavy' },
                    s.a.createElement(m.a.ParticipantsCount, r),
                  ),
                ),
                s.a.createElement(h.a, {
                  accessibilityLabel: O.close,
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: O.close },
                  icon: s.a.createElement(E.a, { style: R.popoverSheetClose }),
                  onPress: a,
                  size: 'medium',
                }),
              ),
              i,
            )
      }
      function I(e) {
        if (!e.interactive) return e.children
        var t = { count: e.count, labelType: 'otherListeners' }
        return s.a.createElement(
          v.a,
          {
            renderContent: function (a, n) {
              return s.a.createElement(x, r()({ audioSpaceId: e.audioSpaceId, dismiss: a, type: n }, t))
            },
            withArrow: !0,
            withDefaultContainer: !0,
          },
          s.a.createElement(
            b.a,
            { accessibilityLabel: m.a.ParticipantsCount.generateText(t), onPress: u.a },
            e.children,
          ),
        )
      }
      function P(e) {
        return e.interactive
          ? s.a.createElement(p.a, { style: R.otherParticipantsArrow }, s.a.createElement(k.a, null))
          : null
      }
      var T = { fontSize: 'body' },
        R = g.a.create(function (e) {
          var t = e.lineHeightsPx[T.fontSize],
            a = {
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
            n = { width: t, height: t, color: e.colors.text },
            r = { marginVertical: e.spacesPx.space12 },
            i = { color: e.colors.gray300, width: e.spacesPx.space24, height: e.spacesPx.space24 }
          return {
            otherParticipantsWrapper: { width: '100%' },
            otherParticipantsContainer: a,
            otherParticipantsText: { flex: 1 },
            otherParticipantsArrow: n,
            popoverTitle: r,
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
        O = { close: S.a.ia5e7487, share: S.a.ifea3114, shareWithPeople: S.a.i7f853ea }
    },
    '8A5z': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                viewBox: '0 0 24 24',
              },
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    A7Vd: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return o
      }),
        a.d(t, 'c', function () {
          return c
        }),
        a.d(t, 'b', function () {
          return s
        }),
        a.d(t, 'f', function () {
          return l
        }),
        a.d(t, 'j', function () {
          return u
        }),
        a.d(t, 'e', function () {
          return d
        }),
        a.d(t, 'a', function () {
          return p
        }),
        a.d(t, 'g', function () {
          return f
        }),
        a.d(t, 'l', function () {
          return m
        }),
        a.d(t, 'm', function () {
          return h
        }),
        a.d(t, 'k', function () {
          return v
        }),
        a.d(t, 'n', function () {
          return b
        }),
        a.d(t, 'h', function () {
          return g
        }),
        a.d(t, 'i', function () {
          return y
        })
      var n = a('yiKp'),
        r = a.n(n),
        i =
          (a('+KXO'),
          new (a('ssnq').a)({
            id: null,
            api: null,
            state: null,
            guests: { lookup: {}, signature: '' },
            chatToken: null,
          })),
        o = i
      function c(e, t, a) {
        var n,
          o = 'SPEAKERS',
          c = { host: { audioLevel: 0 } }
        if (a) {
          c.host.audioLevel = S(a.audioLevels.host)
          for (var s = Object.keys(a.guests), l = 0; l < s.length; l++) {
            var u = s[l],
              d = a.guests[u],
              p = d.UserId,
              f = S(a.audioLevels.guests[u])
            ;(c[p] = { guest: d, audioLevel: f }), (o += '-'.concat(p))
          }
        }
        var m = { signature: o, lookup: c },
          h = (null === (n = t.tracks[t.currentTrackId]) || void 0 === n ? void 0 : n.chatToken) || null
        i.setState(function (a) {
          return r()(r()({}, a), {}, { id: e, state: t, guests: m, chatToken: h })
        })
      }
      function s(e, t) {
        i.setState(function (a) {
          return r()(r()({}, a), {}, { id: e, api: t })
        })
      }
      function l(e) {
        return i.useSlice(function (t) {
          var a = e.isHost ? 'host' : e.periscopeUserId
          if (!a) return 0
          var n = t.guests.lookup[a],
            r = null == n ? void 0 : n.audioLevel
          return 'number' == typeof r ? r : 0
        })
      }
      function u() {
        return i.useSlice(function (e) {
          return e.guests.lookup
        })
      }
      function d() {
        var e = i.useSlice(
          function (e) {
            return e.guests.lookup
          },
          {
            equalityFn: function (e, t, a, n) {
              return a.guests.signature === n.guests.signature
            },
          },
        )
        return {
          get: function (t) {
            return e[t]
          },
        }
      }
      function p(e) {
        var t,
          a = e
        return a || (a = i.getState().state), null === (t = a) || void 0 === t ? void 0 : t.tracks[a.currentTrackId]
      }
      function f() {
        return o.useSlice(function (e) {
          var t = e.state
          return null == t ? void 0 : t.tracks[null == t ? void 0 : t.currentTrackId]
        })
      }
      function m() {
        return o.useSlice(function (e) {
          var t = e.state
          return Boolean(null == t ? void 0 : t.isSeeking)
        })
      }
      function h() {
        return o.useSlice(function (e) {
          var t = e.state
          return (null == t ? void 0 : t.playbackRate) || 1
        })
      }
      function v() {
        return o.useSlice(function (e) {
          var t = e.state
          return Boolean(null == t ? void 0 : t.isPlaying)
        })
      }
      function b() {
        return o.useSlice(function (e) {
          return e.api
        })
      }
      function g() {
        return o.useSlice(function (e) {
          var t
          return null === (t = p(e.state)) || void 0 === t ? void 0 : t.durationMs
        })
      }
      function y() {
        return o.useSlice(function (e) {
          var t
          return null === (t = p(e.state)) || void 0 === t ? void 0 : t.currentTimeMs
        })
      }
      function S(e) {
        return e / 100
      }
    },
    AMlz: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return c
      })
      var n = a('Q/sS'),
        r = a('ERkP'),
        i = a.n(r),
        o = a('v6aA')
      function c() {
        var e = n.m(),
          t = i.a.useContext(o.a).featureSwitches,
          a = t.getNumberValue('voice_rooms_clip_duration')
        return { isCreationEnabled: e && t.isTrue('voice_rooms_clipping_enabled'), durationMs: 1e3 * a }
      }
    },
    Chkh: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return f
      })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('RhWx'),
        o = a.n(i),
        c = a('yiKp'),
        s = a.n(c),
        l =
          (a('Ee2X'),
          a('jwue'),
          a('7x/C'),
          a('+oxZ'),
          a('2G9S'),
          a('z84I'),
          a('LW0h'),
          a('+KXO'),
          a('6U7i'),
          a('A7Vd')),
        u = a('2C8o'),
        d = a('Xda3'),
        p = a('ssnq')
      function f(e, t) {
        var a,
          n = 0,
          r = e.length - 1,
          i = -1,
          o = -1
        if (n > r) return -1
        for (; n <= r; ) {
          if (((o = t(e[(i = Math.floor((n + r) / 2))])), void 0 !== a && 0 !== o)) return a
          o >= 0 ? (n = i + 1) : (r = i - 1), 0 === o && (a = i)
        }
        return void 0 !== a || o > 0 ? i : i - 1
      }
      t.a = new (function () {
        var e,
          t = !1,
          a = 0,
          n = 0,
          i = 0,
          c = 0,
          m = {},
          h = new p.a({})
        function v() {
          ;(t = !1), clearTimeout(e)
        }
        function b(e, t) {
          if (Array.isArray(m[e])) {
            var a = f(m[e], function (e) {
              return t.ntpTimeInSeconds - e.ntpTimeInSeconds
            })
            m[e].splice(a + 1, 0, t)
          } else m[e] = [t]
        }
        function g() {
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
              var l = s()({}, t)
              return (
                n === a ? (i = a + (100 * (c += 1)) / 1e3) : ((c = 0), (i = n = a)),
                e().forEach(function (e) {
                  var a = m[e]
                  if (a && 0 !== a.length) {
                    var n = t[e] || [],
                      c = f(a, function (e) {
                        return i - e.ntpTimeInSeconds
                      })
                    if (!(c < 0)) {
                      var u = a.splice(0, c + 1)
                      l = s()(s()({}, l), {}, r()({}, e, [].concat(o()(n), o()(u))))
                    }
                  }
                }),
                l
              )
            })
          })(),
            t && (e = setTimeout(g, 100))
        }
        return (
          l.d.subscribe(
            function (e) {
              var t,
                a = e.state
              return null == a || null === (t = a.tracks[a.currentTrackId]) || void 0 === t ? void 0 : t.id3NtpTime
            },
            function (e) {
              e && (a = e)
            },
          ),
          {
            publish: function (e) {
              setTimeout(function () {
                !(function (e) {
                  switch (e.type) {
                    case d.a.Chat:
                      Object(u.a)(e) && b(d.a.ChatCaption, e)
                      break
                    case d.a.ServerAudioTranscription:
                    case d.a.Heart:
                    case d.a.HydraControlMessage:
                      b(e.type, e)
                  }
                })(e)
              })
            },
            reset: function () {
              for (var e in (v(), m)) delete m[e]
              ;(a = 0), (n = 0), (i = 0), (c = 0), h.reset()
            },
            setCurrentNtpTimeSeconds: function (e) {
              a = e
            },
            stacks: m,
            start: function () {
              ;(t = !0), g()
            },
            stop: v,
            store: h,
            subscribe: function (e, t) {
              return h.subscribe(
                function (t) {
                  return t[e] || []
                },
                function (a) {
                  var n
                  a &&
                    a.length > 0 &&
                    t(a).clearHeapForMessageType &&
                    ((n = e),
                    h.setState(function (e) {
                      return s()(s()({}, e), {}, r()({}, n, []))
                    }))
                },
              )
            },
          }
        )
      })()
    },
    'G/+M': function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return d
      }),
        a.d(t, 'c', function () {
          return p
        }),
        a.d(t, 'a', function () {
          return f
        }),
        a.d(t, 'd', function () {
          return m
        })
      var n = a('K1iM'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('v6aA'),
        s = a('Chkh'),
        l = a('Xda3'),
        u = new (a('ssnq').a)({}),
        d = u
      function p(e) {
        return u.useSlice(function (t) {
          return e ? t[e] : null
        })
      }
      function f(e) {
        u.setState(function (t) {
          var a
          null === (a = t[e.participantId]) || void 0 === a || a.shift()
        })
      }
      function m() {
        var e = o.a.useContext(c.a).featureSwitches.isTrue('voice_rooms_expanded_dock_reactions')
        o.a.useEffect(
          function () {
            if (e) {
              var t = s.a.subscribe(l.a.Heart, h)
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
            var a,
              n = r()(e)
            try {
              for (n.s(); !(a = n.n()).done; ) {
                var i,
                  o = v(a.value),
                  c = o.reaction,
                  s = o.sender
                t[s.participantId] || (t[s.participantId] = []),
                  null === (i = t[s.participantId]) || void 0 === i || i.push(c)
              }
            } catch (l) {
              n.e(l)
            } finally {
              n.f()
            }
          }),
          { clearHeapForMessageType: !0 }
        )
      }
      function v(e) {
        var t = e.data.sender.user_id
        return {
          reaction: { emoji: e.body.body, type: e.body.type, id: e.body.uuid, participantId: t },
          sender: { participantId: t, twitterId: e.data.sender.twitter_id },
        }
      }
    },
    HmZq: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'reset', function () {
          return d
        }),
        a.d(t, 'insert', function () {
          return p
        }),
        a.d(t, 'onCompleteHistory', function () {
          return f
        }),
        a.d(t, 'seek', function () {
          return m
        }),
        a.d(t, 'publishToQueue', function () {
          return h
        })
      a('jwue'), a('7x/C'), a('+oxZ'), a('Ee2X'), a('M+/F')
      var n = a('2C8o'),
        r = a('Q/sS'),
        i = a('A7Vd'),
        o = a('G/+M'),
        c = a('b2fv'),
        s = a('VY6S'),
        l = a('Chkh'),
        u = []
      function d() {
        u = []
      }
      function p() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a]
        t.forEach(function (e) {
          var t = Object(l.b)(u, function (t) {
            return e.ntpTimeInSeconds - t.ntpTimeInSeconds
          })
          u.splice(t + 1, 0, e)
        })
      }
      function f() {
        var e,
          t = null === (e = i.a()) || void 0 === e ? void 0 : e.id3NtpTime
        t && h(t)
      }
      var m = Object(s.a)(function (e) {
        var t = r.i.getState().startTimeMs
        if (t) {
          var a = t + e
          h(Object(c.a)(a))
        }
      }, 100)
      function h(e) {
        l.a.reset(), n.b(), o.b.reset()
        var t = Object(l.b)(u, function (t) {
          return e - t.ntpTimeInSeconds
        })
        u.slice(t).forEach(function (e) {
          return l.a.publish(e)
        }),
          l.a.start()
      }
    },
    I6Uj: function (e, t, a) {
      'use strict'
      var n = a('ERkP'),
        r = a.n(n)
      function i(e) {
        return null
      }
      var o = a('97Jx'),
        c = a.n(o),
        s = a('yiKp'),
        l = a.n(s),
        u = (a('jwue'), a('7x/C'), a('+oxZ'), a('3XMw')),
        d = a.n(u),
        p = a('/yvb'),
        f = a('fn9Y'),
        m = d.a.c0530da5,
        h = d.a.ifea3114
      var v = function (e) {
          return r.a.createElement(p.a, {
            accessibilityLabel: m,
            hoverLabel: { label: h },
            icon: r.a.createElement(f.a, null),
            onPress: e.onPress,
            pullRight: !0,
            renderMenu: e.renderMenu,
            style: e.style,
            testID: e.testID,
            type: 'primaryText',
          })
        },
        b = 'share-button',
        g = 'share-by-tweet',
        y = a('m3Bd'),
        S = a.n(y),
        E = a('1YZw'),
        k = a('CaKu'),
        w = a('y+lG'),
        C = a('SrIh'),
        x = a('Irs7'),
        I = a('uDfI'),
        P = a('zCf4'),
        T = a('jwTb'),
        R = a('SOvA'),
        O = a('I/9y'),
        L = {
          tweet: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_tweet',
            Icon: T.a,
            text: d.a.fcc684a9,
            testID: g,
          },
          dm: {
            isAvailable: function () {
              return !0
            },
            scribeAction: 'share_via_dm',
            Icon: R.a,
            text: d.a.f61c4bbf,
          },
          copy: {
            isAvailable: function () {
              return k.a.isAvailable()
            },
            scribeAction: 'copy_link',
            Icon: O.a,
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
        },
        M = ['isAvailable', 'scribeAction']
      function _(e) {
        var t = Object(x.b)()
        return {
          getActionItem: (function (e, t) {
            var a = Object(I.c)(),
              n = Object(P.f)()
            return r.a.useMemo(
              function () {
                return function (r) {
                  var i = L[r.type],
                    o = i.isAvailable,
                    c = i.scribeAction,
                    s = S()(i, M)
                  if (!o()) return null
                  var u = l()({}, s)
                  function d() {
                    var i = r.shareText || e.shareText,
                      o = e.url,
                      s = l()(l()({}, e.scribeNamespace), {}, { action: c }, r.scribeNamespace),
                      u = { text: i, url: o },
                      d = { analytics: t, dispatch: a, history: n, mergedScribeNamespace: s }
                    !(function (e, t, a) {
                      var n = function () {
                        return a.analytics.scribe(a.mergedScribeNamespace)
                      }
                      switch (e) {
                        case 'dm':
                          return n(), void a.history.push(l()(l()({}, A(t)), {}, { pathname: '/messages/compose' }))
                        case 'copy':
                          return (
                            k.a.setString(Object(w.a)(t.url)),
                            n(),
                            void a.dispatch(Object(E.b)({ text: z.copyLinkSuccessMessage }))
                          )
                        case 'tweet':
                          return (
                            n(),
                            void a.history.push(
                              l()(
                                l()({ pathname: '/compose/tweet' }, A(t)),
                                {},
                                { state: { positionCursorAtBeginning: !0 } },
                              ),
                            )
                          )
                        case 'via':
                          return void window.navigator
                            .share({ text: t.text, url: Object(w.a)(t.url) })
                            .then(n)
                            .catch(function () {
                              a.analytics.scribe(l()(l()({}, a.mergedScribeNamespace), {}, { action: 'share_error' }))
                            })
                        default:
                          Object(C.a)('[ShareButton] Unexpected share type ['.concat(e, ']'))
                      }
                    })(r.type, u, d)
                  }
                  return r.label && (u.text = r.label), l()(l()({}, u), {}, { onClick: d })
                }
              },
              [t, a, n, e.scribeNamespace, e.shareText, e.url],
            )
          })(e, t),
          analytics: t,
        }
      }
      var z = { copyLinkSuccessMessage: d.a.f88553c8, shareTextPrefixFormatter: d.a.gb5851d7 }
      function A(e) {
        var t = e.url,
          a = e.text
        return { query: { text: a ? z.shareTextPrefixFormatter({ prefix: a, url: t }) : t } }
      }
      var j = a('mN6z')
      var H = a('mjJ+'),
        D = a('rHpw'),
        N = { element: 'share' }
      function B(e) {
        var t = (function (e) {
            var t = r.a.useRef({ previous: void 0 })
            function a(e) {
              return (t.current.previous = e), e
            }
            var n = t.current.previous
            return n && (e === n || Object(j.a)(e, n)) ? n : a(e)
          })(l()(l()({}, N), e.scribeNamespace)),
          a = _(l()(l()({}, e), {}, { scribeNamespace: t })),
          n = a.analytics,
          i = a.getActionItem
        var o = e.ButtonComponent || V
        return r.a.createElement(o, {
          onPress: function () {
            var e = l()(l()({}, t), {}, { action: 'share_menu_click' })
            n.scribe(e)
          },
          pullRight: e.pullRight,
          renderMenu: function (t) {
            var a = []
            return (
              e.children
                ? r.a.Children.forEach(e.children, function (e) {
                    if (r.a.isValidElement(e)) {
                      var t = i(e.props)
                      t && a.push(t)
                    }
                  })
                : ['tweet', 'dm', 'copy', 'via'].forEach(function (e) {
                    var t = i({ type: e })
                    t && a.push(t)
                  }),
              r.a.createElement(H.a, { isFixed: e.isFixed, items: a, onCloseRequested: t, shouldCloseOnClick: !0 })
            )
          },
        })
      }
      function V(e) {
        return r.a.createElement(v, c()({}, e, { style: F.button, testID: b }))
      }
      var F = D.a.create(function (e) {
          return { button: { marginRight: e.spaces.space4 } }
        }),
        U = ['copyLinkShareLabel', 'dmShareLabel', 'externalShareLabel', 'tweetShareLabel']
      function q(e) {
        var t = e.copyLinkShareLabel,
          a = e.dmShareLabel,
          n = e.externalShareLabel,
          o = e.tweetShareLabel,
          c = S()(e, U)
        return r.a.createElement(
          B,
          c,
          r.a.createElement(i, { label: o, type: 'tweet' }),
          r.a.createElement(i, { label: a, type: 'dm' }),
          r.a.createElement(i, { label: t, type: 'copy' }),
          r.a.createElement(i, { label: n, type: 'via' }),
        )
      }
      ;(q.Action = i), (q.Custom = B)
      t.a = q
    },
    ISLN: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      a('uFXj')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('cm6r'),
        o = a('CDzS'),
        c = a('rHpw')
      function s(e) {
        var t = e.accessibilityLabel,
          a = e.children,
          n = e.onPress,
          c = e.style
        return r.a.createElement(
          i.a,
          { accessibilityLabel: t, onPress: n, style: [l.button, c] },
          r.a.createElement(o.a.Default, { style: l.gradient }, a),
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
    LxAE: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return ne
      })
      var n = {}
      a.r(n),
        a.d(n, 'buildPlayerProps', function () {
          return G
        }),
        a.d(n, 'buildDockConfig', function () {
          return X
        })
      var r = {}
      a.r(r),
        a.d(r, 'buildPlayerProps', function () {
          return $
        }),
        a.d(r, 'buildDockConfig', function () {
          return ee
        })
      var i = a('yiKp'),
        o = a.n(i),
        c = a('ddV6'),
        s = a.n(c),
        l = (a('849X'), a('TJCb'), a('Nsgw')),
        u = a('OoQt'),
        d = a('Xda3'),
        p = a('ERkP'),
        f = a.n(p),
        m = a('QEWO'),
        h = a('v6aA'),
        v = a('HmZq'),
        b = a('Q/sS'),
        g = a('A7Vd'),
        y = (a('jwue'), a('7x/C'), a('+oxZ'), a('VKFJ')),
        S = a('MWbm'),
        E = a('n7AW'),
        k = a('rHpw'),
        w = a('t62R')
      function C(e) {
        var t = (function (e) {
          var t = f.a.useRef({ lastActive: { displayName: '', audioLevel: 0 } }),
            a = Object(y.b)(e).speakers,
            n = g.j(),
            r = { displayName: '', audioLevel: 0 }
          if (
            (a.forEach(function (e) {
              var t = y.b.isParticipantHost(e.kind) || !e.periscopeUserId ? 'host' : e.periscopeUserId,
                a = n[t]
              a &&
                a.audioLevel > r.audioLevel &&
                e.user.display_name &&
                ((r.displayName = e.user.display_name), (r.audioLevel = a.audioLevel))
            }),
            r.audioLevel > 0)
          )
            return (t.current.lastActive = r), t.current.lastActive
          if (t.current.lastActive.displayName) return o()(o()({}, t.current.lastActive), {}, { audioLevel: 0 })
          var i = s()(a, 1)[0]
          return o()(o()({}, r), {}, { displayName: i.user.display_name || '' })
        })(e.audioSpaceId)
        return f.a.createElement(x, t)
      }
      function x(e) {
        var t = [I.activeSpeakerIndicatorName, 0 === e.audioLevel && I.activeSpeakerIndicatorNameInactive]
        return f.a.createElement(
          S.a,
          { style: I.activeSpeakerIndicatorContainer },
          f.a.createElement(E.a, {
            audioLevel: e.audioLevel,
            size: k.a.theme.spacesPx.space16,
            withPersistZeroLevel: !0,
          }),
          f.a.createElement(w.b, { style: t }, e.displayName),
        )
      }
      var I = k.a.create(function (e) {
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
        P = a('K1iM'),
        T = a.n(P),
        R = (a('KqXw'), a('3uku'), a('jQ3i'), a('x4t0'), a('1YZw')),
        O = a('Chkh'),
        L = a('3XMw'),
        M = a.n(L),
        _ = a('zCf4'),
        z = a('dgjd'),
        A = a('xZGM'),
        j = a('uDfI')
      function H(e) {
        var t,
          a,
          n,
          r = e.audioSpaceId,
          i = e.isSideNavLayout
        return (
          (function (e) {
            var t = Object(z.a)(e).utils,
              a = b.p()
            f.a.useEffect(
              function () {
                b.i.getState().isReplay || t.is.Running || a('exit')
              },
              [a, t.is.Running],
            )
          })(r),
          (function (e) {
            var t = Object(z.a)(e),
              a = t.space,
              n = t.utils,
              r = g.h(),
              i = g.n(),
              o = null == a ? void 0 : a.replay_start_time,
              c = (i || {}).scrubToFraction,
              s = b.m()
            f.a.useEffect(
              function () {
                return g.d.subscribe(
                  function (e) {
                    var t = e.state
                    return null == t ? void 0 : t.isPlaying
                  },
                  function (e) {
                    e ? O.a.start() : O.a.stop()
                  },
                )
              },
              [s],
            ),
              f.a.useEffect(
                function () {
                  n.is.replayable && n.is.joined && c && r && o && c((1e3 * o) / r)
                },
                [c, n.is.replayable, n.is.joined, o, r],
              )
          })(r),
          (function (e) {
            var t = b.q(),
              a = b.p(),
              n = Object(_.g)(),
              r = n.key,
              i = n.pathname,
              o = f.a.useRef({ key: r, pathname: i })
            f.a.useEffect(
              function () {
                if (!e) {
                  if (o.current.key !== r) N.spaceUrl.test(o.current.pathname) || 'collapse' === t || a('collapse')
                  ;(o.current.key = r), (o.current.pathname = i)
                }
              },
              [r, i, e, a, t],
            )
          })(i),
          (t = f.a.useContext(h.a).loggedInUserId),
          (a = b.p()),
          (n = Object(j.c)()),
          f.a.useEffect(
            function () {
              function e(e) {
                var r,
                  i = T()(e)
                try {
                  for (i.s(); !(r = i.n()).done; ) {
                    var o = r.value
                    switch (o.body.guestBroadcastingEvent) {
                      case d.b.RemoveParticipant:
                        var c
                        ;((null === (c = o.body) || void 0 === c ? void 0 : c.twitter_participant_ids) || []).includes(
                          t,
                        ) && (a('exit'), n(Object(R.b)({ text: B.removedFromSpace })))
                    }
                  }
                } catch (s) {
                  i.e(s)
                } finally {
                  i.f()
                }
                return { clearHeapForMessageType: !0 }
              }
              if (t) return O.a.subscribe(d.a.HydraControlMessage, e)
            },
            [t, a, n],
          ),
          (function () {
            var e = Object(j.c)(),
              t = b.k().openSheet,
              a = b.q() === b.a.full,
              n = Object(j.d)(D)
            f.a.useEffect(
              function () {
                var r
                return (
                  a &&
                    n &&
                    (r = setTimeout(function () {
                      t(b.b.generalNux), e(Object(A.y)(A.u))
                    }, 2e3)),
                  function () {
                    return clearTimeout(r)
                  }
                )
              },
              [a, n],
            )
          })(),
          null
        )
      }
      var D = function (e) {
        return Object(A.C)(e, A.u)
      }
      var N = { spaceUrl: /i\/spaces\/.+/ },
        B = { removedFromSpace: M.a.jd859c9c },
        V = a('fzjU'),
        F = a('xVWt')
      function U(e) {
        var t = e.audioSpaceId,
          a = Object(z.a)(t),
          n = a.space,
          r = a.utils,
          i = r.title(),
          o = (null == n ? void 0 : n.participants.total) || 0
        return f.a.createElement(V.a, {
          activeSpeakers: f.a.createElement(C, { audioSpaceId: t }),
          isWide: e.isSideNavLayout,
          onDockPress: function () {
            e.onToggleCollapsed(), r.scribe(':audiospace::dock::click')
          },
          onRequestClose: function () {
            e.onRequestClose(), r.scribe(':audiospace::dock:close:click')
          },
          title: i,
          totalParticipants: o,
          wideDockMaxWidth: e.width,
        })
      }
      function q(e) {
        var t = f.a.useContext(h.a).featureSwitches,
          a = f.a.useState(!1),
          n = s()(a, 2),
          r = n[0],
          i = n[1]
        var c = o()(
            o()({}, e),
            {},
            {
              onToggleCollapsed: function () {
                r || b.d(), i(W)
              },
            },
          ),
          l = t.isTrue('voice_rooms_expanded_dock') && !r
        return f.a.createElement(
          f.a.Fragment,
          null,
          f.a.createElement(U, c),
          l ? f.a.createElement(F.a, c) : null,
          f.a.createElement(H, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }),
        )
      }
      function W(e) {
        return !e
      }
      function K(e) {
        var t = s()(e.activeItem, 1)[0]
        return t ? { activeItem: t } : null
      }
      function G(e) {
        e.commonApi
        var t = K(e.context)
        if (!t) return { media: null }
        var a = t.activeItem
        return {
          broadcastId: a.id,
          disablePlaybackCoordination: !0,
          mediaKey: a.mediaKey,
          isLive: a.isLive,
          onPlayerApi: function (e) {
            g.b(a.id, e)
          },
          onPlayerState: function (e, t) {
            g.c(a.id, e, t)
          },
        }
      }
      function X(e) {
        var t = e.audioDockProps,
          a = e.commonApi,
          n = e.context,
          r = (e.history, K(n))
        if (!r) return null
        var i = r.activeItem
        return f.a.createElement(
          q,
          o()(
            {
              key: i.id,
              audioSpaceId: i.id,
              onRequestClose: function () {
                a.clear(), v.reset(), b.i.reset()
              },
            },
            t,
          ),
        )
      }
      a('tVqn'), a('MvUL')
      var J = a('zrc3'),
        Z = a('abiO'),
        Y = a('pupE')
      function Q(e) {
        var t,
          a = s()(e.activeItem, 1)[0],
          n = e.hydrateVoiceTweetTrack(a.conversationId),
          r = Object(J.a)(n.tweets, function (e) {
            return e.id_str === a.id
          }),
          i = n.tweets[r]
        if (!i) return null
        var o = (null === (t = i.extended_entities) || void 0 === t ? void 0 : t.media) || [],
          c = s()(o, 1)[0],
          l = 'photo' !== (null == c ? void 0 : c.type) ? c : null
        return { activeItem: a, track: n, media: l, activeIndex: r, activeTweet: i }
      }
      function $(e) {
        var t = e.commonApi,
          a = Q(e.context)
        if (!a) return { media: null }
        var n = a.activeIndex,
          r = a.activeItem,
          i = a.media,
          o = a.track.tweets[n + 1]
        return {
          media: i,
          requestedTimecode: r.startTimeMs,
          onEnded: function () {
            o && t.load.voiceTweet(o)
          },
        }
      }
      function ee(e) {
        var t = e.audioDockProps,
          a = e.commonApi,
          n = e.context,
          r = e.history,
          i = s()(n.playerApi, 1)[0],
          o = s()(n.playerState, 1)[0],
          c = a.currentTrack
        if (!o || !i || !c) return null
        var l = Q(n)
        if (!l) return null
        var u = l.activeIndex,
          d = l.activeTweet,
          p = l.media,
          m = l.track,
          h = o.isMuted,
          v = o.isPlaying,
          b = o.isSeeking,
          g = o.volume,
          y = 0,
          S = 0
        te(m.tweets, function (e) {
          var t = e.endMs
          e.i === u - 1 && (S = t), (y = t)
        })
        var E = (p && p.id_str === c.contentId && c.currentTimeMs) || 0,
          k = S + E,
          w = null == p ? void 0 : p.url,
          C = d.full_text,
          x = w && C ? C.replace(w, '').trim() : C,
          I = d.user
        return f.a.createElement(Z.a, {
          isWide: t.isSideNavLayout,
          width: t.width,
          isMuted: h,
          isPlaying: v,
          isSeeking: b,
          progressMs: k,
          durationMs: y,
          volume: 100 * g,
          title: x,
          user: I,
          onRequestClose: a.clear,
          onTogglePlayback: a.togglePlayback,
          onDockPress: function () {
            return r.push(d.permalink)
          },
          onMuteToggle: a.toggleMute,
          onVolumeChange: a.setVolume,
          onSeek: function (e) {
            te(m.tweets, function (t) {
              var n = t.durationMs,
                r = t.endMs,
                o = t.i,
                c = t.startMs,
                s = t.tweet
              if (e >= c && e <= r) {
                var l = e - c
                if (o === u) {
                  var d = l / n
                  i.scrubToFraction(d)
                } else a.load.voiceTweet(s, l)
                return !0
              }
            })
          },
        })
      }
      function te(e, t) {
        for (var a = 0, n = 0; n < e.length; n++) {
          var r = e[n],
            i = Y.a.getVoiceTweetDuration(r),
            o = a + i
          if (t({ i: n, tweet: r, startMs: a, endMs: o, durationMs: i })) break
          a = o
        }
      }
      var ae = { default: { buildDockConfig: a('0zXz').a }, space: n, voiceTweet: r }
      function ne() {
        var e = f.a.useRef({}),
          t = f.a.useContext(h.a).history,
          a = f.a.useContext(u.a),
          n = s()(a.activeItem, 2),
          r = n[0],
          i = n[1],
          c = s()(a.playerApi, 2),
          p = c[0],
          v = c[1],
          b = s()(a.playerState, 2),
          g = b[0],
          y = b[1],
          S = s()(a.guestsState, 2),
          E = S[0],
          k = S[1],
          w = re(g)
        ;(e.current.playerApi = p), (e.current.playerState = g)
        var C = f.a.useMemo(
            function () {
              return function () {
                d.c(), i(null)
              }
            },
            [i],
          ),
          x = f.a.useMemo(function () {
            return function () {
              var t = e.current,
                a = t.playerApi,
                n = t.playerState
              a && n && (n.isPlaying ? a.pause : a.play)()
            }
          }, []),
          I = f.a.useMemo(function () {
            return function () {
              var t = e.current,
                a = t.playerApi,
                n = t.playerState
              a && n && (n.isMuted ? a.unmute : a.mute)()
            }
          }, []),
          P = {
            space: function (e, t, a) {
              i({ type: m.a.space, id: e, mediaKey: t, isLive: a })
            },
            voiceTweet: function (e, t) {
              i({ type: m.a.voiceTweet, id: e.id_str, conversationId: l.a(e), startTimeMs: t })
            },
          },
          T = {
            load: P,
            clear: C,
            currentTrack: w,
            toggleMute: I,
            togglePlayback: x,
            setVolume: f.a.useMemo(function () {
              return function (t) {
                var a = e.current.playerApi
                a && a.setVolume(t / 100)
              }
            }, []),
          }
        return {
          activeItem: r,
          load: P,
          clear: C,
          player: { api: p, state: g, guests: E, currentTrack: w, toggleMute: I, togglePlayback: x },
          config: {
            dock: function (e) {
              if (!r) return ae.default.buildDockConfig()
              switch (r.type) {
                case m.a.space:
                  return ae.space.buildDockConfig({ history: t, context: a, commonApi: T, audioDockProps: e })
                case m.a.voiceTweet:
                  return ae.voiceTweet.buildDockConfig({ history: t, context: a, commonApi: T, audioDockProps: e })
                default:
                  return ae.default.buildDockConfig()
              }
            },
            player: function () {
              var e,
                t = {
                  media: null,
                  onPlayerApi: function (e) {
                    v(e)
                  },
                  onPlayerState: function (e, t) {
                    y(e), t && k(t)
                  },
                }
              if (!r) return t
              switch (r.type) {
                case m.a.space:
                  e = ae.space.buildPlayerProps({ context: a, commonApi: T })
                  break
                case m.a.voiceTweet:
                  e = ae.voiceTweet.buildPlayerProps({ context: a, commonApi: T })
                  break
                default:
                  throw new Error('[AudioContext:Player] unhandled active item type ['.concat(r.type, ']'))
              }
              return o()(o()({}, t), e)
            },
          },
          audioSpaces: { cache: a.audioSpaceCache },
        }
      }
      var re = function (e) {
        return e && e.tracks[e.currentTrackId]
      }
    },
    O07O: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return B
      })
      var n = a('HmZq'),
        r = a('Q/sS'),
        i = a('A7Vd'),
        o = a('ERkP'),
        c = a.n(o),
        s = a('tI3i'),
        l = a.n(s),
        u = a('fs1G'),
        d = a('/yvb'),
        p = a('rHpw')
      function f(e) {
        return (
          l()(e.accessibilityLabel, 'ControlButton must have an accessibilityLabel'),
          c.a.createElement(d.a, {
            accessibilityLabel: e.accessibilityLabel,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            color: 'text',
            disabled: e.disabled,
            hoverLabel: { label: e.accessibilityLabel },
            icon: e.icon,
            onPress: e.onPress || u.a,
            renderMenu: e.renderMenu,
            size: e.size || 'medium',
            style: m.button,
          })
        )
      }
      var m = p.a.create(function (e) {
          return { button: { height: '100%' } }
        }),
        h = a('3XMw'),
        v = a.n(h),
        b = (a('z84I'), a('akpX')),
        g = a('dgjd'),
        y = a('MWbm'),
        S = a('mjJ+'),
        E = a('t62R')
      function k(e) {
        var t = Object(g.a)(e.audioSpaceId).utils,
          a = i.m(),
          n = x.map(function (e) {
            var n = e.rate
            return {
              text: e.text,
              disabled: a === n,
              onClick: function () {
                t.scribe(':audiospace:replay:recording:speed:click')
                var e = i.d.getState().api
                e && e.setPlaybackRate(n)
              },
            }
          })
        return c.a.createElement(f, {
          accessibilityLabel: C.accessibility({ rate: ''.concat(a) }),
          icon: c.a.createElement(k.Icon, { playbackRate: a }),
          renderMenu: function (e) {
            return c.a.createElement(S.a, { isFixed: !0, items: n, onCloseRequested: e, shouldCloseOnClick: !0 })
          },
        })
      }
      k.Icon = function (e) {
        var t = e.playbackRate
        return c.a.createElement(
          y.a,
          { style: w.playbackRateIcon },
          c.a.createElement(E.b, { style: w.playbackRateIconText, weight: 'normal' }, t),
          c.a.createElement(b.a, { style: w.playbackRateIconSvg }),
        )
      }
      var w = p.a.create(function (e) {
          return {
            playbackRateIcon: { flexDirection: 'row', alignItems: 'center' },
            playbackRateIconText: { marginRight: e.spaces.space2 },
            playbackRateIconSvg: { height: e.spaces.space8 },
          }
        }),
        C = { accessibility: v.a.e07f6e7d },
        x = [
          { text: v.a.jd04fc65, rate: 0.5 },
          { text: v.a.f03848b8, rate: 1 },
          { text: v.a.j0e5c2cd, rate: 1.5 },
          { text: v.a.b3f2318d, rate: 2 },
        ],
        I = a('Pl95'),
        P = a('0nhk'),
        T = a('AMlz'),
        R = a('5Ixf'),
        O = a('AtEG'),
        L = a('yiKp'),
        M = a.n(L),
        _ = a('Lsrn'),
        z = a('k/Ka'),
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M19.837 19.076C17.928 21.639 14.978 23 11.979 23c-2.009 0-4.029-.616-5.768-1.887-2.099-1.53-3.469-3.785-3.849-6.338-.39-2.553.25-5.096 1.79-7.172 1.79-2.404 4.589-3.824 7.548-3.914l-1.43-1.41c-.29-.298-.29-.765 0-1.063.29-.288.77-.288 1.06 0l2.779 2.762c.14.139.22.328.22.526 0 .199-.08.388-.22.527L11.54 7.574c-.14.149-.33.219-.53.219-.19 0-.38-.069-.53-.219-.29-.288-.29-.765 0-1.053l1.36-1.351C9.3 5.219 6.9 6.431 5.361 8.487c-1.31 1.758-1.849 3.914-1.52 6.069.33 2.155 1.48 4.063 3.259 5.354 3.659 2.682 8.828 1.907 11.527-1.719 1.869-2.503 2.139-5.781.72-8.553-.19-.368-.04-.825.33-1.003.37-.189.82-.04 1.01.328 1.679 3.279 1.349 7.153-.85 10.113z',
              }),
              c.a.createElement('path', {
                d: 'M15.928 14.368c0 .417-.09.794-.27 1.112-.17.328-.43.576-.76.755-.33.179-.71.268-1.15.268-.57 0-1.05-.129-1.43-.397-.38-.258-.62-.626-.71-1.083l-.02-.099 1.14-.228.02.099c.05.228.16.407.33.536.18.139.41.199.69.199.32 0 .56-.089.74-.288.18-.199.27-.477.27-.834 0-.368-.09-.676-.27-.884-.17-.209-.41-.308-.74-.308-.52 0-.84.239-.99.725l-.02.08-1.06-.099.36-3.447h3.579v.973h-2.689l-.14 1.262c.1-.099.22-.189.36-.259.24-.119.53-.179.85-.179.59 0 1.06.189 1.4.566.34.377.51.894.51 1.53zm-5.459-3.894v5.91H9.31v-4.162c-.08.05-.17.099-.28.129-.2.07-.4.099-.59.099h-.38v-1.053h.28c.28 0 .53-.08.73-.219.19-.139.33-.358.41-.636l.02-.069h.969zm4.311-2.681c-.192 0-.385-.073-.531-.219-.292-.292-.291-.763.001-1.054l2.037-2.018-2.249-2.228c-.293-.291-.294-.762-.001-1.054.292-.29.767-.292 1.061-.001l2.781 2.755c.141.14.22.33.22.528s-.079.388-.22.528L15.31 7.576c-.147.145-.338.217-.53.217z',
              }),
            ),
          )
        }
      A.metadata = { width: 24, height: 24 }
      var j = A,
        H = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            M()(
              M()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [_.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            c.a.createElement(
              'g',
              null,
              c.a.createElement('path', {
                d: 'M23.284 16.22c-.062-.063-.134-.114-.213-.15l-9.183-4.32 9.182-4.32c.374-.176.535-.622.36-.997-.037-.08-.088-.15-.15-.213l-.9-.9c-1.107-1.1-2.777-1.403-4.2-.764l-6.565 2.98c-.943.43-1.564 1.353-1.607 2.39l-2.133-1c1.475-1.45 1.494-3.822.044-5.297-1.45-1.476-3.822-1.495-5.297-.045-1.475 1.45-1.494 3.82-.044 5.296.703.717 1.666 1.12 2.67 1.12.354-.005.704-.06 1.042-.166L10 11.58v.34l-3.708 1.746c-.338-.105-.688-.16-1.042-.166-2.078-.007-3.767 1.672-3.774 3.75-.007 2.078 1.672 3.767 3.75 3.774 2.078.007 3.767-1.672 3.774-3.75.003-1.013-.402-1.985-1.125-2.695l2.133-1c.043 1.035.664 1.96 1.607 2.39l6.568 2.976c.484.22 1.01.333 1.54.332.997 0 1.953-.396 2.66-1.1l.9-.9c.292-.292.293-.766 0-1.06zM5.25 8.5C4.007 8.5 3 7.493 3 6.25 3.002 5.008 4.008 4.002 5.25 4 6.493 4 7.5 5.007 7.5 6.25S6.493 8.5 5.25 8.5zm0 11C4.007 19.5 3 18.493 3 17.25S4.007 15 5.25 15c1.242.002 2.248 1.008 2.25 2.25 0 1.243-1.007 2.25-2.25 2.25zm6.25-9.46c0-.49.287-.937.734-1.14L18.8 5.924c.29-.132.605-.2.924-.2.6-.002 1.175.234 1.6.657l.144.145-9.968 4.69V10.04zm9.82 7.077c-.663.658-1.664.84-2.518.458L12.234 14.6c-.447-.203-.734-.65-.734-1.14v-.587l.625-.294 9.34 4.394-.144.143z',
              }),
            ),
          )
        }
      H.metadata = { width: 24, height: 24 }
      var D = H,
        N = a('abiO')
      function B(e) {
        var t = Object(T.a)()
        return c.a.createElement(
          y.a,
          { style: U.controlsContainer },
          c.a.createElement(B.SeekSlider, null),
          c.a.createElement(
            y.a,
            { style: U.buttonsContainer },
            c.a.createElement(B.Captions, { audioSpaceId: e.audioSpaceId }),
            c.a.createElement(k, { audioSpaceId: e.audioSpaceId }),
            c.a.createElement(B.Play, null),
            c.a.createElement(B.SkipAhead, null),
            t.isCreationEnabled
              ? c.a.createElement(B.Clip, { audioSpaceId: e.audioSpaceId })
              : c.a.createElement(P.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon-borderless' }),
          ),
        )
      }
      function V() {
        var e = i.a()
        e && null != e && e.currentTimeMs && F(e.currentTimeMs + W)
      }
      function F(e) {
        var t = i.d.getState().api,
          a = i.a()
        if (null != a && a.durationMs && null != t && t.scrubToFraction) {
          n.seek(e)
          var r = e / a.durationMs
          t.scrubToFraction(r)
        }
      }
      ;(B.SeekSlider = function () {
        var e = B.useSeekSliderProps(),
          t = e.currentTimeMs,
          a = e.durationMs,
          n = e.externalSeeking,
          r = e.onSeek
        return c.a.createElement(N.a.SeekSlider, {
          durationMs: a,
          externalSeeking: n,
          onSeek: r,
          progressMs: t,
          withTimes: !0,
        })
      }),
        (B.useSeekSliderProps = function () {
          var e = i.l(),
            t = i.h()
          return { currentTimeMs: i.i() || 0, durationMs: t || 1, externalSeeking: e, onSeek: F }
        }),
        (B.Captions = function (e) {
          var t = e.audioSpaceId,
            a = I.a.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
            n = a.disabled,
            r = a.icon,
            i = a.label,
            o = a.onPress
          return c.a.createElement(f, { accessibilityLabel: i, disabled: n, icon: r, onPress: o })
        }),
        (B.Play = function () {
          var e = B.usePlayButtonProps(),
            t = e.isPlaying,
            a = e.togglePlayback
          return c.a.createElement(f, {
            accessibilityLabel: t ? q.pause : q.play,
            icon: t ? c.a.createElement(R.a, null) : c.a.createElement(O.a, null),
            onPress: a,
            size: 'xLarge',
          })
        }),
        (B.usePlayButtonProps = function () {
          var e = i.k(),
            t = i.n()
          return {
            isPlaying: e,
            togglePlayback: function () {
              t && t.play && t.pause && (e ? t.pause() : t.play())
            },
          }
        }),
        (B.SkipAhead = function () {
          return c.a.createElement(f, {
            accessibilityLabel: q.skipForward,
            icon: c.a.createElement(j, null),
            onPress: V,
          })
        }),
        (B.Clip = function (e) {
          e.audioSpaceId
          var t = r.k().openSheet,
            a = i.g(),
            n = Object(T.a)(),
            o = a && a.currentTimeMs < n.durationMs
          return c.a.createElement(f, {
            accessibilityLabel: q.createClip,
            disabled: o,
            icon: c.a.createElement(D, null),
            onPress: function () {
              t(r.b.clippingEducation)
            },
          })
        })
      var U = p.a.create(function (e) {
          return {
            controlsContainer: { width: '100%', alignSelf: 'start', marginVertical: e.spaces.space8 },
            buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          }
        }),
        q = { skipForward: v.a.jf9f3e53, play: v.a.ic1e826e, pause: v.a.b89c5a5f, createClip: v.a.f91f00b9 },
        W = 15e3
    },
    PaZX: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return b
      }),
        a.d(t, 'c', function () {
          return g
        })
      a('1t7P'), a('jQ/y'), a('z84I'), a('+KXO')
      var n = a('ERkP'),
        r = a.n(n),
        i = a('1YZw'),
        o = a('hUaP'),
        c = a('3XMw'),
        s = a.n(c),
        l = a('uDfI'),
        u = a('Q/sS'),
        d = a('dgjd'),
        p = a('MWbm'),
        f = a('t62R'),
        m = a('CKsB'),
        h = a('/yvb'),
        v = a('rHpw')
      function b(e) {
        var t = Object(u.k)().requestSheetDismissal,
          a = b.useReportingItems({ audioSpaceId: e.audioSpaceId })
        return r.a.createElement(
          p.a,
          { style: y.container },
          r.a.createElement(
            p.a,
            { style: y.menu },
            r.a.createElement(
              f.b,
              { align: 'center', size: 'headline1', style: y.description, weight: 'bold' },
              g.reportThisSpace,
            ),
            r.a.createElement(f.b, { align: 'center', style: y.description }, g.describeTheIssue),
            null == a
              ? void 0
              : a.map(function (e) {
                  return r.a.createElement(m.a, {
                    actionText: e.label,
                    key: e.label,
                    onClick: function () {
                      e.onClick(), t()
                    },
                    textColor: 'red500',
                  })
                }),
          ),
          r.a.createElement(h.a, { onClick: t, type: 'primaryOutlined' }, g.cancel),
        )
      }
      b.useReportingItems = function (e) {
        var t = e.audioSpaceId,
          a = Object(l.c)(),
          n = Object(d.a)(t).handlers.report
        return r.a.useMemo(
          function () {
            return Object.keys(n).map(function (e) {
              return {
                label: g[e],
                onClick: function () {
                  n && n[e](), a(Object(i.b)({ text: g.spaceReported }))
                },
              }
            })
          },
          [n, a],
        )
      }
      var g = {
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
        y = v.a.create(function (e) {
          var t = Object(o.b)(e)
          return {
            container: { display: 'flex', justifyContent: 'space-between', height: '100%', padding: e.spaces.space16 },
            menu: { marginBottom: e.spaces.space20 },
            description: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16, paddingHorizontal: t },
          }
        })
      t.b = b
    },
    'Pc/x': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return N
      })
      var n = a('VrFO'),
        r = a.n(n),
        i = a('Y9Ll'),
        o = a.n(i),
        c = (a('849X'), a('TJCb'), a('7x/C'), a('JtPf'), a('KqXw'), a('LJOr'), a('yiKp')),
        s = a.n(c),
        l = a('KEM+'),
        u = a.n(l),
        d = (a('IAdD'), a('0zG9'), a('yH/f'), a('5Yy7')),
        p = a.n(d),
        f = a('2VqO'),
        m = a.n(f),
        h = a('mAxt'),
        v = a.n(h),
        b = (a('2G9S'), a('CEs6')),
        g = (function (e) {
          p()(a, e)
          var t = m()(a)
          function a(e, n, i) {
            var o
            return (
              r()(this, a),
              ((o = t.call(
                this,
                ''.concat(a.displayName, ': ').concat(e, ' HTTP-').concat(n, ' message: ').concat(i),
              )).url = e),
              (o.status = n),
              o
            )
          }
          return o()(a)
        })(v()(Error))
      u()(g, 'displayName', 'ProxseeApiError')
      var y,
        S,
        E = a('epkG'),
        k = a('SrIh'),
        w = a('RqPI'),
        C = 0,
        x = (function () {
          function e() {
            var t = this,
              a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M
            r()(this, e),
              u()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(s()({ abuse_type: A.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(s()({ abuse_type: A.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(s()({ abuse_type: A.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(s()({ abuse_type: A.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(s()({ abuse_type: A.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(s()({ abuse_type: A.AbusiveBehavior }, e))
                },
              })
            var n = a.httpConfig
            ;(this.client = new E.a(s()(s()({}, _), n))), (this._authToken = void 0), (this._authPromise = null)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  S = e
                },
              },
              {
                key: 'initialized',
                value: function () {
                  return !!S
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
                  var e = S.store.getState()
                  return Object(w.m)(e)
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
                    ? this.client.dispatch(e).then(b.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = a.params,
                    r = Object.assign(O(), a.headers),
                    i = JSON.stringify(s()(s()({}, t), {}, { cookie: this._authToken })),
                    o = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(o), headers: r, params: n, data: i })
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
                        : ((this._authPromise = S.api.Auth.authenticatePeriscope()
                            .then(function (t) {
                              return e.loginTwitterToken(t.token)
                            })
                            .then(function (t) {
                              if (!t) throw new Error('[ProxseeApi] invalid loginTwitterToken response')
                              ;(e._authToken = t.cookie), (e._authUserType = t.type)
                            })
                            .catch(function (e) {
                              var t = { err: e }
                              Object(k.a)('[ProxseeApi] failed to login', { extra: t })
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
                  var t = { jwt: e, vendor_id: L, create_user: !1, direct: !0 }
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
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return this.login().then(function () {
                    var n = a.params,
                      r = Object.assign(O(), a.headers),
                      i = JSON.stringify({
                        access_token: e.access_token,
                        cursor: e.cursor,
                        limit: 1e3,
                        since: null,
                        quick_get: !0,
                      })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: r, params: n, data: i })
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
                            Object(k.a)('[ProxseeApi] failed to scribe events', { extra: { err: e } })
                          })
                      })
                    : Promise.resolve()
                },
              },
              {
                key: 'createClip',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('createClip', e).catch(function (e) {
                      Object(k.a)('[ProxseeApi] failed to create clip', { extra: { err: e } })
                    })
                  })
                },
              },
              {
                key: '_reportSpace',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('markAbuse', e).catch(function (e) {
                      Object(k.a)('[ProxseeApi] failed to report space', { extra: { err: e } })
                    })
                  })
                },
              },
            ]),
            e
          )
        })(),
        I = 'X-Idempotence',
        P = 'X-Periscope-User-Agent',
        T = 'X-Attempt',
        R = ((y = {}), u()(y, P, 'Twitter/m5'), u()(y, T, 1), y)
      function O() {
        var e,
          t = Date.now()
        return (
          (C = t <= C ? C + 1 : t),
          Object.assign({}, R, ((e = {}), u()(e, I, C), u()(e, 'content-type', 'application/json'), e))
        )
      }
      var L = 'm5-proxsee-login-a2011357b73e',
        M = {},
        _ = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((a = t.status) < 200 || a > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var a = e.uri,
                        n = t.status,
                        r = Object(b.a)(t)
                      return new g(a, n, r.msg)
                    })(e, t),
                  )
                : t
              var a
            })
          },
        }
      var z,
        A = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        j = new x(),
        H = a('G6rE'),
        D = new Error('[AudioModule] config not initialized'),
        N = new ((function () {
          function e() {
            r()(this, e), (this.proxsee = j)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(z = e), j.init(z)
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
                    return H.e.selectLoggedInUser(e)
                  }
                },
              },
              {
                key: 'audioSpace',
                value: function (e) {
                  return z ? z.api.AudioSpaces.byId(e) : Promise.reject(D)
                },
              },
              {
                key: 'subscribeToScheduledSpace',
                value: function (e) {
                  return z ? z.api.AudioSpaces.subscribeToScheduledSpaceById(e) : Promise.reject(D)
                },
              },
              {
                key: 'unsubscribeFromScheduledSpace',
                value: function (e) {
                  return z ? z.api.AudioSpaces.unsubscribeFromScheduledSpaceById(e) : Promise.reject(D)
                },
              },
              {
                key: 'searchAudioSpace',
                value: function (e, t) {
                  return z ? z.api.AudioSpaces.search(e, t) : Promise.reject(D)
                },
              },
            ]),
            e
          )
        })())()
    },
    Pl95: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return m
      })
      var n = a('Q/sS'),
        r = a('ERkP'),
        i = a.n(r),
        o = a('3XMw'),
        c = a.n(o),
        s = a('dgjd'),
        l = a('/yvb'),
        u = a('rHpw'),
        d = a('pHub'),
        p = a('8A5z'),
        f = a('d5IS')
      function m(e) {
        var t = e.audioSpaceId,
          a = m.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
          n = a.disabled,
          r = a.icon,
          o = a.label,
          c = a.onPress
        return i.a.createElement(l.a, {
          accessibilityLabel: o,
          disabled: n,
          hoverLabel: { label: o },
          icon: r,
          onPress: c,
          size: 'medium',
          style: v.icon,
          type: 'primaryText',
        })
      }
      function h(e) {
        switch (e.captionsState) {
          case n.c.On:
            return i.a.createElement(d.a, { style: v.icon })
          case n.c.Off:
            return i.a.createElement(p.a, { style: v.icon })
          case n.c.Unavailable:
          default:
            return i.a.createElement(f.a, { style: v.icon })
        }
      }
      m.useSpaceCaptionsToggleProps = function (e) {
        var t = e.audioSpaceId,
          a = n.o(),
          r = i.a.createElement(h, { captionsState: a })
        return {
          disabled: !(a !== n.c.Unavailable),
          icon: r,
          label: (function (e) {
            switch (e) {
              case n.c.On:
                return b.hideCaptions
              case n.c.Off:
                return b.showCaptions
              case n.c.Unavailable:
              default:
                return b.captionsUnavailable
            }
          })(a),
          onPress: (function (e) {
            var t = e.audioSpaceId,
              a = Object(s.a)(t).utils
            return function () {
              n.j(), a.scribe(':audiospace::caret:view_transcriptions:click')
            }
          })({ audioSpaceId: t }),
        }
      }
      var v = u.a.create(function (e) {
          return { icon: { fill: e.colors.text } }
        }),
        b = { showCaptions: c.a.e674c120, hideCaptions: c.a.f45bace3, captionsUnavailable: c.a.ce96f1db }
    },
    'Q/sS': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return o
      }),
        a.d(t, 'c', function () {
          return c
        }),
        a.d(t, 'b', function () {
          return s
        }),
        a.d(t, 'i', function () {
          return d
        }),
        a.d(t, 'd', function () {
          return p
        }),
        a.d(t, 'k', function () {
          return f
        }),
        a.d(t, 'l', function () {
          return m
        }),
        a.d(t, 'p', function () {
          return h
        }),
        a.d(t, 'q', function () {
          return v
        }),
        a.d(t, 'h', function () {
          return b
        }),
        a.d(t, 'g', function () {
          return g
        }),
        a.d(t, 'f', function () {
          return y
        }),
        a.d(t, 'e', function () {
          return S
        }),
        a.d(t, 'm', function () {
          return E
        }),
        a.d(t, 'o', function () {
          return x
        }),
        a.d(t, 'j', function () {
          return I
        }),
        a.d(t, 'n', function () {
          return P
        })
      var n = a('yiKp'),
        r = a.n(n),
        i = (a('7x/C'), a('JtPf'), a('2C8o')),
        o = (a('yH/f'), Object.freeze({ full: 'full', collapse: 'collapse', exit: 'exit' })),
        c = Object.freeze({ On: 'on', Off: 'off', Unavailable: 'unavailable' }),
        s = Object.freeze({
          generalNux: 'general-nux',
          clippingEducation: 'clipping-education',
          recordingEducation: 'recording-education',
          report: 'report',
        }),
        l = a('ssnq'),
        u = {
          isReplay: !1,
          startTimeMs: -1,
          springTo: function () {
            return Promise.resolve()
          },
          springToState: null,
          sheet: { id: null, hasDismissRequest: !1 },
          captionsState: c.On,
        },
        d = new l.a(u)
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
          openSheet: k,
          requestSheetDismissal: C,
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
      function v() {
        return d.useSlice(function (e) {
          return e.springToState
        })
      }
      function b(e) {
        d.setState(function (t) {
          return r()(r()({}, t), {}, { springToState: e })
        })
      }
      function g(e) {
        d.setState(function (t) {
          return r()(r()({}, t), {}, { springTo: e })
        })
      }
      function y(e) {
        d.setState(function (t) {
          ;(t.isReplay = !0), (t.startTimeMs = e)
        })
      }
      function S() {
        d.getState().isReplay &&
          d.setState(function (e) {
            ;(e.isReplay = u.isReplay), (e.startTimeMs = u.startTimeMs)
          })
      }
      function E() {
        return d.useSlice(function (e) {
          return e.isReplay
        })
      }
      function k(e) {
        d.getState().sheet.hasDismissRequest ||
          d.setState(function (t) {
            return r()(r()({}, t), {}, { sheet: { id: e, hasDismissRequest: !1 } })
          })
      }
      function w() {
        d.getState().sheet.id &&
          d.setState(function (e) {
            return r()(r()({}, e), {}, { sheet: { id: null, hasDismissRequest: !1 } })
          })
      }
      function C() {
        var e = d.getState().sheet
        e.id &&
          d.setState(function (t) {
            return r()(r()({}, t), {}, { sheet: r()(r()({}, e), {}, { hasDismissRequest: !0 }) })
          })
      }
      function x() {
        return d.useSlice(function (e) {
          return e.captionsState
        })
      }
      function I() {
        var e = d.getState().captionsState
        e === c.On
          ? d.setState(function (e) {
              return r()(r()({}, e), {}, { captionsState: c.Off })
            })
          : e === c.Off &&
            d.setState(function (e) {
              return r()(r()({}, e), {}, { captionsState: c.On })
            })
      }
      function P() {
        var e = i.d(),
          t = x()
        return e && t === c.On
      }
    },
    QEWO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      a('ERkP')
      var n = a('89tF'),
        r = Object(n.a)({ space: !0, voiceTweet: !0, voiceMessage: !0 })
    },
    'S+H3': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    SNyS: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              o.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    SQlS: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return u
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = (a('i4UL'), a('ERkP')),
        o = a.n(i),
        c = a('CDzS'),
        s = a('rHpw'),
        l = a('k/Ka')
      function u(e) {
        return Object(l.a)(
          'svg',
          r()(r()({}, e), {}, { style: [d.root, e.style], viewBox: '0 0 24 24' }),
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
      u.metadata = { width: 24, height: 24 }
      var d = s.a.create(function (e) {
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
    TCYy: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      })
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        c = (a('z84I'), a('i4UL'), a('2G9S'), a('uFXj'), a('yH/f'), a('ERkP')),
        s = a.n(c),
        l = a('rHpw'),
        u = a('MWbm')
      function d(e) {
        var t,
          a = e.count,
          n = e.max,
          r = e.selectedIndex,
          i = 2 * m((t = l.a.theme)).px + t.borderWidthsPx.small,
          c = s.a.useRef({ left: 0, right: n - 1 }),
          d = s.a.useRef(0),
          v = s.a.useState(f(c.current, a, i)),
          b = o()(v, 2),
          g = b[0],
          y = b[1]
        s.a.useEffect(
          function () {
            for (
              ;
              (e = void 0),
                (t = void 0),
                (n = void 0),
                (o = void 0),
                (s = void 0),
                (l = void 0),
                (e = a - 1),
                (t = c.current),
                (n = t.left),
                (o = t.right),
                (l = r + 1 - n <= 2 && 0 !== n),
                ((s = o - r + 1 <= 2 && o !== e) || l) &&
                  (s
                    ? ((c.current.left = n + 1), (c.current.right = o + 1))
                    : l && ((c.current.left = n - 1), (c.current.right = o - 1)),
                  1);

            );
            var e, t, n, o, s, l
            y(f(c.current, a, i)), (d.current = r)
          },
          [r, a, n, i],
        )
        var S = new Array(a).fill(1).map(function (e, t) {
          var i = t === r
          if (a <= n) return s.a.createElement(p, { key: t, selected: i })
          var o = g[t]
          return s.a.createElement(p, { continuation: Boolean(o), continuationType: o, key: t, selected: i })
        })
        return s.a.createElement(
          u.a,
          {
            style: [
              h.indicatorWindowContainer,
              { width: 'calc('.concat(n, ' * ').concat(i, 'px)'), height: ''.concat(i, 'px') },
            ],
          },
          s.a.createElement(
            u.a,
            {
              style: [
                h.indicatorsContainer,
                { height: ''.concat(i, 'px'), width: 'calc('.concat(i, 'px * ').concat(a, ')') },
                g.style,
              ],
            },
            S,
          ),
        )
      }
      function p(e) {
        var t = h.indicator
        if (e.selected) t = h.indicatorSelected
        else if (e.continuation)
          switch (e.continuationType) {
            case v.small:
              t = h.indicatorContinuationSmall
              break
            case v.medium:
              t = h.indicatorContinuationMedium
          }
        return s.a.createElement(u.a, { style: t })
      }
      function f(e, t, a) {
        var n = e.left,
          r = e.right,
          i = { style: { transform: [{ translateX: -1 * a * n }] } }
        return (
          (i[n - 1] = v.small),
          (i[n] = v.small),
          (i[n + 1] = v.medium),
          (i[r - 1] = v.medium),
          (i[r] = v.small),
          (i[r + 1] = v.small),
          0 === n ? (delete i[0], delete i[1]) : r > t - 2 && (delete i[t - 1], delete i[t - 2]),
          i
        )
      }
      function m(e) {
        return { style: e.spaces.space8, px: e.spacesPx.space8 }
      }
      var h = l.a.create(function (e) {
          var t = m(e).style,
            a = { transition: 'transform 200ms' },
            n = r()(
              r()({}, a),
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
            i = r()(r()({}, n), {}, { backgroundColor: e.colors.gray300 })
          return {
            indicatorWindowContainer: { marginVertical: e.spaces.space12, overflow: 'hidden', margin: 'auto' },
            indicatorsContainer: r()(
              r()({}, a),
              {},
              { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            ),
            indicatorSelected: r()(
              r()({}, n),
              {},
              {
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.gray300,
                borderStyle: 'solid',
                backgroundColor: e.colors.white,
                transform: [{ scale: 1 }],
              },
            ),
            indicator: r()(r()({}, n), {}, { backgroundColor: e.colors.gray300 }),
            indicatorContinuationSmall: r()(r()({}, i), {}, { transform: [{ scale: 0.3 }] }),
            indicatorContinuationMedium: r()(r()({}, i), {}, { transform: [{ scale: 0.4 }] }),
          }
        }),
        v = Object.freeze({ small: 'small', medium: 'medium' })
    },
    VKFJ: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return p
      }),
        a.d(t, 'a', function () {
          return f
        })
      var n,
        r = a('KEM+'),
        i = a.n(r),
        o = a('RhWx'),
        c = a.n(o),
        s = (a('lTEL'), a('m9LP'), a('7x/C'), a('87if'), a('kYxP'), a('2G9S'), a('yH/f'), a('A7Vd')),
        l = a('ERkP'),
        u = a.n(l),
        d = a('dgjd')
      function p(e) {
        var t = Object(d.a)(e),
          a = t.space,
          n = t.utils,
          r = s.e()
        return u.a.useMemo(
          function () {
            var e = new Map(),
              t = [],
              i = []
            function o() {
              var e = [].concat(t, i),
                n = (null == a ? void 0 : a.participants.total) || 0,
                r = Math.max(0, n - e.length)
              return { all: e, speakers: t, listeners: i, otherParticipantsTotal: r }
            }
            function s(a, n, r) {
              var o = n.twitter_screen_name
              if (o && !e.has(o)) {
                e.set(o, !0)
                var c = { key: o, user: n, kind: a, periscopeUserId: r }
                p.canParticipantSpeak(a) ? t.push(c) : i.push(c)
              }
            }
            if (!a) return o()
            a.host && s(f.host, a.host, a.host.periscope_user_id)
            var l = [].concat(c()(a.cohosts), c()(a.participants.speakers))
            n.is.replayable || l.push.apply(l, c()(a.participants.listeners))
            for (var u = 0; u < l.length; u++) {
              var d = l[u],
                m = d.periscope_user_id
              if (m)
                r.get(m)
                  ? u < a.cohosts.length
                    ? s(f.cohost, d, m)
                    : s(f.speaker, d, m)
                  : n.is.replayable || s(f.listener, d, m)
            }
            return o()
          },
          [a, r, n.is.replayable],
        )
      }
      ;(p.canParticipantSpeak = function (e) {
        return Boolean(e && m[e])
      }),
        (p.isParticipantHost = function (e) {
          return e === f.host
        })
      var f = Object.freeze({ host: 'host', cohost: 'cohost', speaker: 'speaker', listener: 'listener' }),
        m = ((n = {}), i()(n, f.host, !0), i()(n, f.cohost, !0), i()(n, f.speaker, !0), n)
    },
    Xda3: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return O
      }),
        a.d(t, 'a', function () {
          return N
        }),
        a.d(t, 'b', function () {
          return B
        })
      var n = a('1Pcy'),
        r = a.n(n),
        i = a('5Yy7'),
        o = a.n(i),
        c = a('2VqO'),
        s = a.n(c),
        l = a('RhWx'),
        u = a.n(l),
        d = a('VrFO'),
        p = a.n(d),
        f = a('Y9Ll'),
        m = a.n(f),
        h = a('KEM+'),
        v = a.n(h),
        b =
          (a('7x/C'),
          a('JtPf'),
          a('TJCb'),
          a('DZ+c'),
          a('jwue'),
          a('+oxZ'),
          a('0zG9'),
          a('lZm3'),
          a('yH/f'),
          a('KqXw'),
          a('MvUL'),
          a('2C8o')),
        g = a('HmZq'),
        y = a('Q/sS'),
        S = a('A7Vd'),
        E = a('Pc/x'),
        k = a('Chkh'),
        w = a('b2fv'),
        C = a('SrIh'),
        x = a('fEA7'),
        I = a.n(x),
        P = '/chatapi/v1/chatnow',
        T = '/chatapi/v1/history',
        R = null
      function O() {
        var e
        null === (e = R) || void 0 === e || e.disconnect(), (R = null), k.a.reset(), b.b()
      }
      S.d.subscribe(
        function (e) {
          return e.chatToken
        },
        function (e) {
          e &&
            (function (e) {
              O(),
                new L(e).connect().then(function (e) {
                  k.a.start(), (R = e)
                })
            })(e)
        },
      )
      var L = (function () {
          function e(t) {
            var a = this
            p()(this, e),
              v()(this, 'session', null),
              v()(this, 'socket', null),
              v()(this, 'socketState', j.Uninitialized),
              v()(this, 'handleOnOpen', function () {
                a.authAndJoinRoom(), (a.socketState = j.Connected)
              }),
              v()(this, 'handleOnMessage', function (e) {
                if ('string' == typeof e.data) {
                  var t = JSON.parse(e.data)
                  if (t.kind === H.Chat) {
                    var a = t.payload,
                      n = t.signature,
                      r = new A(a, { signature: n })
                    k.a.publish(r)
                  }
                }
              }),
              (this.chatToken = t)
          }
          return (
            m()(e, [
              {
                key: 'connect',
                value: function () {
                  var e = this
                  return new Promise(function (t, a) {
                    E.a.proxsee
                      .accessChat(e.chatToken)
                      .then(
                        function (a) {
                          return (e.session = a), y.i.getState().isReplay ? e.loadChatHistory() : e.openSocket(), t(e)
                        },
                        function (e) {
                          return a(e)
                        },
                      )
                      .catch(function (e) {
                        Object(C.a)(e)
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
                    var e = this.session.endpoint.replace('https://', 'wss://') + P
                    this.closeSocket()
                    try {
                      ;(this.socketState = j.Opening),
                        (this.socket = new WebSocket(e)),
                        (this.socket.onopen = this.handleOnOpen),
                        (this.socket.onmessage = this.handleOnMessage)
                    } catch (t) {
                      Object(C.a)(t), (this.socketState = j.Error)
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
                    (this.socketState = j.Closed)
                },
              },
              {
                key: 'authAndJoinRoom',
                value: function () {
                  if (this.session) {
                    var e,
                      t,
                      a = this.session,
                      n = a.access_token,
                      r = a.room_id
                    null === (e = this.socket) || void 0 === e || e.send(z.build(n).toString()),
                      null === (t = this.socket) || void 0 === t || t.send(_.buildJoin(r).toString())
                  }
                },
              },
              {
                key: 'loadChatHistory',
                value: function () {
                  var e = this,
                    t = this.session || {},
                    a = t.access_token,
                    n = t.endpoint
                  if (!a || !n) return Promise.resolve([])
                  try {
                    return new Promise(function (t, r) {
                      var i = [],
                        o = ''
                      !(function r(c) {
                        if (c) {
                          var s = c.cursor,
                            l = c.messages
                          if (!s) return g.onCompleteHistory(), t(i)
                          ;(o = s), e.handleHistoryMessages(l), i.push.apply(i, u()(l))
                        }
                        E.a.proxsee.getChatHistory({ access_token: a, host: n, path: T, cursor: o }).then(r)
                      })()
                    })
                  } catch (r) {
                    Object(C.a)(r)
                  }
                },
              },
              {
                key: 'handleHistoryMessages',
                value: function (e) {
                  var t = []
                  e.forEach(function (e) {
                    if (e.kind === H.Chat) {
                      var a = e.payload,
                        n = e.signature
                      t.push(new A(a, { signature: n }))
                    }
                  }),
                    g.insert.apply(g, t)
                },
              },
            ]),
            e
          )
        })(),
        M = (function () {
          function e(t, a) {
            p()(this, e), (this.payload = t), (this.kind = a)
          }
          return (
            m()(e, [
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
        _ = (function (e) {
          o()(a, e)
          var t = s()(a)
          function a(e) {
            var n
            return p()(this, a), (n = t.call(this, e, H.Control)), v()(r()(n), 'data', {}), (n.data = JSON.parse(e)), n
          }
          return (
            m()(a, null, [
              {
                key: 'buildJoin',
                value: function (e) {
                  return new a(JSON.stringify({ body: JSON.stringify({ room: e }), kind: D.Join }))
                },
              },
            ]),
            a
          )
        })(M),
        z = (function (e) {
          o()(a, e)
          var t = s()(a)
          function a(e) {
            return p()(this, a), t.call(this, e, H.Auth)
          }
          return (
            m()(a, null, [
              {
                key: 'build',
                value: function (e) {
                  return new a(JSON.stringify({ access_token: e }))
                },
              },
            ]),
            a
          )
        })(M),
        A = (function (e) {
          o()(a, e)
          var t = s()(a)
          function a(e) {
            var n,
              i,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            p()(this, a), (i = t.call(this, e, H.Chat)), v()(r()(i), 'data', {}), v()(r()(i), 'body', {})
            var c = o.currentNtpTimeInSeconds,
              s = o.isReplay,
              l = o.signature
            return (
              (i.data = JSON.parse(e)),
              (i.body = ((null === (n = i.data) || void 0 === n ? void 0 : n.body) && JSON.parse(i.data.body)) || {}),
              i.setUuid(l),
              i.setTime(c, s),
              (i.type = i.body.type),
              (i.ntpTimeInSeconds = i.body.ntpTimeInSeconds),
              (i.timestamp = i.body.timestamp),
              i
            )
          }
          return (
            m()(a, [
              {
                key: 'setUuid',
                value: function (e) {
                  this.body.uuid = e || this.body.uuid || I.a.v4()
                },
              },
              {
                key: 'setTime',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = t && !!this.body.ntpForBroadcasterFrame,
                    n = a ? this.body.ntpForBroadcasterFrame : this.body.ntpForLiveFrame || e,
                    r = parseFloat(n / 4294967296)
                  ;(this.body.ntpTimeInSeconds = r), (this.body.timestamp = Object(w.b)(r).getTime())
                },
              },
              {
                key: 'isEqual',
                value: function (e) {
                  return !(!this.body.uuid || !e.body.uuid) && this.body.uuid === e.body.uuid
                },
              },
            ]),
            a
          )
        })(M),
        j = Object.freeze({
          Uninitialized: 'UNINITIALIZED',
          Opening: 'OPENING',
          Connected: 'CONNECTED',
          Error: 'ERROR',
          Closed: 'CLOSED',
        }),
        H = Object.freeze({ Chat: 1, Control: 2, Auth: 3 }),
        D = Object.freeze({ Join: 1, Leave: 2, Roster: 3, Presence: 4, Ban: 8 }),
        N = Object.freeze({
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
        B = Object.freeze({ RemoveParticipant: 15 })
    },
    Zg3A: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        c = a('Lsrn'),
        s = a('k/Ka'),
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
                viewBox: '0 0 24 24',
              },
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
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    abiO: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return D
      })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        c = a('ddV6'),
        s = a.n(c),
        l = a('97Jx'),
        u = a.n(l),
        d = (a('ho0z'), a('2G9S'), a('ERkP')),
        p = a.n(d),
        f = a('t62R'),
        m = a('/yvb'),
        h = a('n4Eu'),
        v = a('3XMw'),
        b = a.n(v),
        g = a('cm6r'),
        y = a('/NU0'),
        S = a('wD1h'),
        E = a('Oe3h'),
        k = a('0FVZ'),
        w = a('pjBI'),
        C = a('FBXD'),
        x = a('9RkS'),
        I = a('rHpw'),
        P = a('MH+I'),
        T = a('jhWN'),
        R = a('jV+4'),
        O = a('MWbm'),
        L = a('kRXa'),
        M = a('5Ixf'),
        _ = a('AtEG'),
        z = a('hOZg')
      function A(e) {
        var t = U(e.onDockPress),
          a = U(e.onUserPress),
          n = U(e.onRequestClose),
          r = U(e.onTogglePlayback)
        return p.a.createElement(
          p.a.Fragment,
          null,
          p.a.createElement(
            O.a,
            { style: V.sliderContainer },
            p.a.createElement(D.SeekSlider, {
              durationMs: e.durationMs,
              externalSeeking: e.isSeeking,
              onSeek: e.onSeek,
              onSliderActive: e.onSliderActive,
              progressMs: e.progressMs,
            }),
          ),
          p.a.createElement(
            O.a,
            { style: V.dockContentRow },
            p.a.createElement(T.a, {
              accessibilityHidden: !0,
              focusable: !1,
              onClick: a,
              screenName: e.user.screen_name,
              size: 'large',
              uri: e.user.profile_image_url_https,
              withLink: !0,
            }),
            p.a.createElement(
              O.a,
              { style: V.dockContentTitle },
              p.a.createElement(
                w.a,
                { size: 'subtext2' },
                p.a.createElement(R.a, {
                  isVerified: e.user.verified,
                  name: e.user.name,
                  nameSize: 'subtext2',
                  onLinkClick: a,
                  screenName: e.user.screen_name,
                  screenNameSize: 'subtext2',
                  weight: 'normal',
                  withLink: !0,
                }),
                p.a.createElement(P.a, { size: 'subtext2', timeMs: e.durationMs }),
              ),
              p.a.createElement(f.b, { numberOfLines: 1, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
            p.a.createElement(
              m.a,
              u()(
                {
                  accessibilityLabel: e.isPlaying ? N.pause : N.play,
                  icon: e.isPlaying ? p.a.createElement(M.a, null) : p.a.createElement(_.a, null),
                  onPress: r,
                  testID: 'togglePlayback',
                },
                B,
              ),
            ),
            p.a.createElement(O.a, { style: V.dockContentButtonSpacer }),
            p.a.createElement(
              m.a,
              u()({ accessibilityLabel: N.close, icon: p.a.createElement(z.a, null), onPress: n, testID: 'close' }, B),
            ),
          ),
        )
      }
      function j(e) {
        var t = U(e.onDockPress),
          a = U(e.onRequestClose),
          n = U(e.onTogglePlayback),
          r = U(e.onUserPress),
          i = p.a.useMemo(
            function () {
              var t,
                a = null === (t = e.user.profile_image_extensions_media_color) || void 0 === t ? void 0 : t.palette
              if (a) {
                var n = h.a.get(a)
                if (n) return q(n.rgb)
              }
              return I.a.theme.colors.primary
            },
            [e.user],
          ),
          o = e.isMuted ? N.unmute : N.mute
        return p.a.createElement(
          O.a,
          { style: [F.wideContainer, F.wideContainerBorderRadius] },
          p.a.createElement(
            O.a,
            { style: F.mainContentContainer },
            p.a.createElement(
              O.a,
              { style: [F.wideAvatarContainer, { backgroundColor: i }] },
              p.a.createElement(T.a, {
                accessibilityHidden: !0,
                focusable: !1,
                onClick: r,
                screenName: e.user.screen_name,
                size: 'xLarge',
                uri: e.user.profile_image_url_https,
                withLink: !0,
              }),
            ),
            p.a.createElement(
              O.a,
              { style: F.mainContent },
              p.a.createElement(R.a, {
                isVerified: e.user.verified,
                name: e.user.name,
                nameSize: 'subtext2',
                onLinkClick: r,
                screenName: e.user.screen_name,
                screenNameSize: 'subtext2',
                weight: 'normal',
                withLink: !0,
                withScreenName: !0,
              }),
              p.a.createElement(f.b, { numberOfLines: 2, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
          ),
          p.a.createElement(
            O.a,
            { style: F.belowMainContent },
            p.a.createElement(
              O.a,
              { style: F.slider },
              p.a.createElement(D.SeekSlider, {
                durationMs: e.durationMs,
                externalSeeking: e.isSeeking,
                onSeek: e.onSeek,
                onSliderActive: e.onSliderActive,
                progressMs: e.progressMs,
                withTimes: !0,
              }),
            ),
            p.a.createElement(
              O.a,
              { style: F.iconRow },
              p.a.createElement(
                L.a,
                u()(
                  {
                    accessibilityLabelIcon: o,
                    accessibilityLabelSlider: N.volumeSlider,
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
              p.a.createElement(
                m.a,
                u()(
                  {
                    accessibilityLabel: e.isPlaying ? N.pause : N.play,
                    icon: e.isPlaying ? p.a.createElement(M.a, null) : p.a.createElement(_.a, null),
                    onPress: n,
                    testID: 'togglePlayback',
                  },
                  B,
                ),
              ),
            ),
          ),
          p.a.createElement(
            m.a,
            u()(
              {
                accessibilityLabel: N.close,
                icon: p.a.createElement(z.a, null),
                onPress: a,
                style: F.closeIcon,
                testID: 'close',
              },
              B,
            ),
          ),
        )
      }
      function H(e) {
        var t,
          a = p.a.useRef({}),
          n = p.a.useRef(null),
          i = e.isWide && F.wideContainerBorderRadius,
          c = U(function () {
            a.current.isSliderActive || e.onDockPress()
          }),
          s = p.a.useMemo(function () {
            return function () {
              n.current && n.current.focus()
            }
          }, [])
        p.a.useEffect(
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
              n.current && n.current.addEventListener('keydown', t),
              function () {
                n.current && n.current.removeEventListener('keydown', t)
              }
            )
          },
          [n.current, e.onTogglePlayback],
        ),
          p.a.useEffect(function () {
            return function () {
              clearTimeout(a.current.onSliderActiveTimeout)
            }
          }, [])
        var l = e.title || N.untitled,
          u = o()(
            o()({}, e),
            {},
            {
              title: l,
              onSliderActive: function (e) {
                clearTimeout(a.current.onSliderActiveTimeout),
                  e
                    ? (a.current.isSliderActive = e)
                    : (a.current.onSliderActiveTimeout = setTimeout(function () {
                        a.current.isSliderActive = e
                      }, W))
              },
            },
          )
        return p.a.createElement(
          S.a,
          {
            enabled: !0,
            handlers:
              ((t = {}), r()(t, S.a.shortcuts.audio.dock, s), r()(t, S.a.shortcuts.audio.play, e.onTogglePlayback), t),
          },
          p.a.createElement(
            g.a,
            {
              accessibilityLabel: N.voiceDock,
              onPress: c,
              ref: function (e) {
                n.current = e
              },
              style: [V.container, i],
            },
            p.a.createElement(
              O.a,
              { style: [V.innerContainer, i] },
              e.isWide ? p.a.createElement(j, u) : p.a.createElement(A, u),
            ),
          ),
        )
      }
      function D(e) {
        var t = e.isWide ? k.a.DesktopVoiceTweetDock : k.a.MobileVoiceTweetDock,
          a = [e.isWide ? [F.root, { maxWidth: e.width }] : V.root]
        return p.a.createElement(
          t,
          null,
          p.a.createElement(E.a, { id: 'VoiceTweetDock' }, function (t, n) {
            return p.a.createElement(O.a, u()({ ref: t() }, n({ style: a })), p.a.createElement(H, e))
          }),
        )
      }
      D.SeekSlider = function (e) {
        var t,
          a = p.a.useRef({ isSliderActive: !1, lastSeekMs: -1 }),
          n = p.a.useState(!1),
          r = s()(n, 2),
          i = r[0],
          o = r[1],
          c = p.a.useState(e.progressMs),
          l = s()(c, 2),
          u = l[0],
          d = l[1]
        function f(e) {
          ;(a.current.lastSeekMs = e), d(e)
        }
        p.a.useEffect(
          function () {
            e.externalSeeking || (a.current.lastSeekMs = -1)
          },
          [e.externalSeeking],
        ),
          (t =
            e.externalSeeking && u !== a.current.lastSeekMs ? e.progressMs : e.externalSeeking || i ? u : e.progressMs)
        var m = p.a.createElement(x.a, {
          accessibilityLabel: N.seekSlider,
          color: 'purple500',
          keepLTR: !0,
          keyboardStep: 5e3,
          max: e.durationMs,
          min: 0,
          onActive: function (t) {
            e.onSliderActive && e.onSliderActive(t),
              (a.current.isSliderActive = t),
              t ? f(e.progressMs) : e.onSeek(u),
              o(t)
          },
          onChange: function (t) {
            a.current.isSliderActive ? f(t) : e.onSeek(t)
          },
          step: 'any',
          value: t,
          withGrayBackground: !0,
          withHidingThumb: !0,
        })
        if (!e.withTimes) return m
        var h = e.durationMs - t
        return p.a.createElement(
          O.a,
          null,
          p.a.createElement(O.a, { style: F.sliderRow }, p.a.createElement(O.a, { style: F.slider }, m)),
          p.a.createElement(
            O.a,
            { style: F.sliderTimes },
            p.a.createElement(P.a, { size: 'subtext2', timeMs: Object(y.a)(t) ? t : 0 }),
            p.a.createElement(P.a, {
              countdown: !0,
              size: 'subtext2',
              timeMs: Object(y.a)(h) ? h : 0,
              withCountdownSymbol: !0,
            }),
          ),
        )
      }
      var N = {
          untitled: b.a.gfaaead7,
          close: b.a.af8fa2ad,
          pause: b.a.fb236727,
          play: b.a.f17dfdb5,
          voiceDock: b.a.cfd13f46,
          unmute: b.a.b8b6344a,
          mute: b.a.ec8ab8b4,
          volumeSlider: b.a.c9a642f9,
          seekSlider: b.a.hea01797,
        },
        B = { borderColor: 'transparent', color: 'text', size: 'medium' },
        V = I.a.create(function (e) {
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
        F = I.a.create(function (e) {
          var t = e.spaces.space16,
            a = e.borderRadii.xLarge,
            n = e.spaces.space4
          return {
            root: {
              alignSelf: 'flex-end',
              width: '100%',
              marginVertical: e.spaces.space20,
              marginRight: e.spaces.space20,
            },
            wideContainerBorderRadius: { borderRadius: a },
            wideContainer: { padding: t, paddingRight: n },
            wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 },
            mainContentContainer: { flexDirection: 'row' },
            mainContent: {
              marginLeft: e.spaces.space12,
              marginRight: e.spaces.space40,
              flex: 1,
              flexDirection: 'column',
            },
            username: { color: e.colors.gray700 },
            closeIcon: { position: 'absolute', top: n, right: n },
            belowMainContent: { marginTop: e.spaces.space12, flexDirection: 'row' },
            sliderRow: { flexDirection: 'row' },
            slider: { flex: 1 },
            sliderTimes: { flexDirection: 'row', justifyContent: 'space-between' },
            iconRow: { marginLeft: e.spaces.space12, flexDirection: 'row', justifyContent: 'center' },
          }
        })
      function U(e) {
        return Object(C.a)(function (t) {
          'function' == typeof e && e()
        })
      }
      var q = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          return 'rgba('.concat(e.red, ', ').concat(e.green, ', ').concat(e.blue, ', ').concat(t, ')')
        },
        W = 200
    },
    b2fv: function (e, t, a) {
      'use strict'
      a.d(t, 'b', function () {
        return i
      }),
        a.d(t, 'a', function () {
          return o
        })
      var n = new Date('Jan 01 1900 GMT').getTime(),
        r = new Date('Jan 01 1970 GMT').getTime() - n,
        i = function (e) {
          return new Date(1e3 * e - r)
        },
        o = function (e) {
          return (e + r) / 1e3
        }
    },
    dgjd: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return M
      })
      var n = a('ddV6'),
        r = a.n(n),
        i =
          (a('tVqn'),
          a('z84I'),
          a('jwue'),
          a('7x/C'),
          a('+oxZ'),
          a('+KXO'),
          a('JtPf'),
          a('IAdD'),
          a('849X'),
          a('TJCb'),
          a('Q/sS')),
        o = a('A7Vd'),
        c = a('ERkP'),
        s = a.n(c),
        l = a('RqPI'),
        u = a('QEWO'),
        d = a('Pc/x'),
        p = a('yiKp'),
        f = a.n(p),
        m = a('VrFO'),
        h = a.n(m),
        v = a('Y9Ll'),
        b = a.n(v),
        g = a('KEM+'),
        y = a.n(g),
        S = (a('KqXw'), a('Ysgh'), a('KOtZ'), a('2G9S'), a('cnVF')),
        E = new ((function () {
          function e() {
            h()(this, e), y()(this, 'events', [])
          }
          return (
            b()(e, [
              {
                key: 'createScribeFunction',
                value: function (e) {
                  var t = this
                  return function (a, n) {
                    var i = e.analytics.contextualScribeNamespace,
                      o = f()(f()({}, e.details), {}, { scribe_context_namespace: i }, n),
                      c = a.split(':'),
                      s = r()(c, 6),
                      l = { page: s[1], section: s[2], component: s[3], element: s[4], action: s[5] },
                      u = Object.keys(l).reduce(function (e, t) {
                        var a = l[t]
                        return '*' === a || (e[t] = a || void 0), e
                      }, {})
                    e.analytics.scribe(f()(f()({}, u), {}, { data: { audio_space_details: o } })),
                      t.events.push({ event_name: ''.concat(S.w).concat(a), ts: Date.now(), audio_space_details: o }),
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
        k = a('nmVb'),
        w = a.n(k),
        C = a('kGix'),
        x = a('3XMw'),
        I = a.n(x),
        P = a('b2fv'),
        T = a('Tg44'),
        R = a('Irs7'),
        O = a('LxAE'),
        L = a('yUQf')
      function M(e) {
        var t,
          a,
          n,
          c,
          p,
          f = Object(R.b)(),
          m = Object(L.a)(l.m),
          h = (function (e) {
            var t = (function () {
                var e = Object(O.a)(),
                  t = r()(e.audioSpaces.cache, 2),
                  a = t[0],
                  n = t[1]
                return {
                  getAudioSpace: i,
                  fetchAudioSpace: s,
                  subscribeToScheduledSpace: o,
                  unsubscribeFromScheduledSpace: c,
                  reportSpaceFor: d.a.proxsee.reportSpaceFor,
                  audioContext: e,
                }
                function i(e) {
                  var t = a[e]
                  return t || _(C.a.NONE)
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
                  var a,
                    r = i(e)
                  if ('number' == typeof t && r.status !== C.a.NONE && !((Date.now() - r.time) / 1e3 > t))
                    return Promise.resolve(r)
                  function o(t) {
                    var a = _(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                    n(function (t) {
                      var n = Object.assign({}, t[e], a)
                      return (t[e] = n), Object.assign({}, t)
                    })
                  }
                  return d.a.initialized()
                    ? (o(C.a.LOADING),
                      d.a
                        .audioSpace(e)
                        .catch(function (e) {
                          a = e
                        })
                        .then(function (e) {
                          e ? o(C.a.LOADED, { data: e, error: void 0 }) : a && o(C.a.FAILED, { error: a })
                        }))
                    : Promise.reject(new Error('[useAudioSpaceMetadata] AudioModule not initialized'))
                }
              })(),
              a = t.audioContext,
              n = t.fetchAudioSpace,
              i = t.getAudioSpace,
              c = t.reportSpaceFor,
              s = t.subscribeToScheduledSpace,
              l = t.unsubscribeFromScheduledSpace
            function u(t) {
              return n(e, t)
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
                Object.keys(c).forEach(function (a) {
                  t[a] = function () {
                    var t,
                      n = o.a(),
                      r = null === (t = p().data) || void 0 === t ? void 0 : t.started_at,
                      i = { broadcast_id: e, ntp_timestamp: void 0, timecode: void 0 }
                    if (n && n.id3NtpTime && r) {
                      var s = Math.floor(n.id3NtpTime)
                      ;(i.ntp_timestamp = s), (i.timecode = Math.floor((Object(P.b)(s) - r) / 1e3))
                    }
                    return c[a](i)
                  }
                }),
                t
              )
            }
            return { fetch: u, get: p, subscribe: f, unsubscribe: m, audioContext: a, report: h() }
          })(e),
          v = h.audioContext,
          b = h.report,
          g = h.subscribe,
          y = h.unsubscribe,
          S = h.get(),
          k = S.data,
          x = null == k ? void 0 : k.state,
          I = {
            NotStarted: x === T.a.SpaceState.NotStarted,
            PrePublished: x === T.a.SpaceState.PrePublished,
            Running: x === T.a.SpaceState.Running,
            TimedOut: x === T.a.SpaceState.TimedOut,
            Ended: x === T.a.SpaceState.Ended,
            Canceled: x === T.a.SpaceState.Canceled,
            loaded: !!k || S.status === C.a.FAILED,
            loading: S.status === C.a.LOADING,
            error: S.status === C.a.FAILED && S.error,
            joined:
              (null === (t = v.activeItem) || void 0 === t ? void 0 : t.type) === u.a.space &&
              (null === (a = v.activeItem) || void 0 === a ? void 0 : a.id) === e,
            recording: !1,
            replayable: !1,
          }
        function M() {
          var e,
            t,
            a = null == k || null === (e = k.title) || void 0 === e ? void 0 : e.trim(),
            n = null == k || null === (t = k.host) || void 0 === t ? void 0 : t.display_name
          return a || (n ? A.title({ name: n }) : A.titleFallback)
        }
        null != k &&
          k.is_space_available_for_replay &&
          (I.Running ? (I.recording = !0) : (I.Ended || I.TimedOut) && (I.replayable = !0))
        var j = 'live_not_recording'
        null != k && k.is_space_available_for_replay && (j = I.Running ? 'live_recording' : 'replay')
        var H = E.createScribeFunction({
          analytics: f,
          details: {
            broadcast_id: e,
            host_id:
              null == k || null === (n = k.host) || void 0 === n || null === (c = n.user) || void 0 === c
                ? void 0
                : c.rest_id,
            host_periscope_id: null == k || null === (p = k.host) || void 0 === p ? void 0 : p.periscope_user_id,
            audio_space_start_type: null != k && k.scheduled_start ? 'scheduled' : 'adhoc',
            audio_space_recording_type: j,
            state: x,
            is_logged_in: m,
          },
        })
        var D = {
            is: I,
            title: M,
            hashtags: function () {
              return w()(M()).map(function (e) {
                return '#'.concat(e)
              })
            },
            scribe: H,
            state: function () {
              var e,
                t = T.a.StateEnum
              return (
                I.loaded && I.error
                  ? (e = t.unavailable)
                  : I.replayable
                  ? (e = t.replay)
                  : I.Ended || I.TimedOut
                  ? (e = t.ended)
                  : I.Running
                  ? (e = t.live)
                  : I.NotStarted || I.PrePublished
                  ? (e = t.scheduled)
                  : I.Canceled && (e = t.canceled),
                e
              )
            },
            getTunedInCount: function () {
              var e = k || {},
                t = e.total_live_listeners,
                a = e.total_replay_watched
              return (null != t ? t : 0) + (null != a ? a : 0)
            },
          },
          N = d.a.initialized(),
          B = s.a.useRef({})
        ;(B.current.utils = D),
          (B.current.audioSpaceMetadata = h),
          s.a.useEffect(
            function () {
              var e,
                t = z
              return (
                N &&
                  (function a() {
                    var n = B.current.utils.is.loaded,
                      r = B.current.utils.is.Running
                    ;(n && !r) || (B.current.audioSpaceMetadata.fetch(t), (e = setTimeout(a, 1e3 * t)))
                  })(),
                function () {
                  clearTimeout(e)
                }
              )
            },
            [N, e, x],
          )
        var V = {
          subscribe: g,
          unsubscribe: y,
          report: b,
          join: function (t) {
            var a = k
            a &&
              d.a.proxsee.login().then(function () {
                var n = D.is.Running || D.is.replayable,
                  r = a.media_key
                r &&
                  n &&
                  (D.is.replayable
                    ? (i.f(a.started_at), D.scribe(':audiospace:replay:recording:play:click', { origin: t }))
                    : i.e(),
                  v.load.space(e, r, D.is.Running),
                  D.scribe(':audiospace:event:join:listener:success', { origin: t }))
              })
          },
        }
        return { space: k, audioContext: v, utils: D, handlers: V }
      }
      function _(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = { status: e, time: Date.now() }
        return t.data && (a.data = t.data), t.error && (a.error = t.error), a
      }
      var z = 15,
        A = { title: I.a.b6d3e0ee, titleFallback: I.a.ab4fc8bb }
    },
    hUaP: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      }),
        a.d(t, 'b', function () {
          return u
        })
      var n = a('rHpw'),
        r = 0.85,
        i = 0.7635,
        o = 0.5,
        c = 812,
        s = 300
      function l(e, t, a) {
        var l = e
        if (t) {
          l = Math.min(c, e)
          var d = a || {},
            p = d.height,
            f = d.top + p
          if (f - l < 0) {
            var m = f - u(n.a.theme).marginVerticalPx
            m > s && (l = m)
          }
        }
        return { collapse: l * o, half: l * i, sheetMaxHeight: l * r, full: l }
      }
      function u(e) {
        var t = e.borderRadiiPx.large,
          a = e.spaces.space16,
          n = e.spacesPx.space8
        return {
          borderRadius: t,
          paddingHorizontal: a,
          marginVertical: e.spaces.space20,
          marginVerticalPx: e.spacesPx.space20,
          shadowOffset: n,
        }
      }
    },
    hhqq: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        c = a('ERkP'),
        s = a.n(c),
        l = (a('ho0z'), a('21zW')),
        u = a('rHpw'),
        d = a('MH+I'),
        p = a('jV+4'),
        f = a('MWbm')
      function m(e) {
        var t = e.speaker,
          a = e.speakerAvatarSize,
          n = void 0 === a ? 'small' : a,
          r = e.speakerNameSize,
          i = void 0 === r ? 'subtext2' : r,
          o = e.speakerScreenNameSize,
          c = void 0 === o ? 'subtext2' : o,
          l = e.timestamp,
          u = e.withSpeakerAvatar,
          d = void 0 === u || u,
          m = e.withSpeakerScreenName,
          b = void 0 === m || m,
          g = e.withTimestamp,
          y = void 0 !== g && g,
          S = Date.now() - l
        return s.a.createElement(
          f.a,
          { style: v.root },
          s.a.createElement(p.a, {
            avatarSize: n,
            name: t.name,
            nameSize: i,
            profileImageUrl: d ? t.profile_image_url_https : '',
            screenName: t.screen_name,
            screenNameSize: c,
            style: v.userName,
            withScreenName: b,
          }),
          y ? s.a.createElement(h, { size: i, timeMs: S }) : null,
        )
      }
      function h(e) {
        var t = e.size,
          a = void 0 === t ? 'small' : t,
          n = e.timeMs
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(l.a, { size: a }),
          s.a.createElement(d.a, { color: 'gray700', humanReadable: !0, size: a, timeMs: n }),
        )
      }
      var v = u.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1, marginTop: '0.25em' },
            userName: { marginBottom: e.spaces.space4, paddingRight: e.spaces.space4 },
          }
        }),
        b = a('t62R'),
        g = ['caption', 'captionTextSize', 'withSpeaker']
      function y(e) {
        var t = e.caption,
          a = e.captionTextSize,
          n = e.withSpeaker,
          i = void 0 === n || n,
          c = o()(e, g),
          l = t.speaker
        return s.a.createElement(
          f.a,
          { style: [S.root, !i && S.missingSpeakerSpacer] },
          i ? s.a.createElement(m, r()({}, c, { speaker: l, timestamp: t.timestamp })) : null,
          s.a.createElement(b.b, { lang: t.lang, size: a, style: S.captionText }, t.text),
        )
      }
      var S = u.a.create(function (e) {
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
        E = a('yiKp'),
        k = a.n(E),
        w =
          (a('z84I'),
          a('i4UL'),
          function (e) {
            return { width: e, height: e }
          })
      function C(e) {
        var t = e.size,
          a = Math.floor(t / 4.5)
        return s.a.createElement(f.a, { style: [T.root, I(t)] }, s.a.createElement(x, { width: a }))
      }
      function x(e) {
        var t = e.width
        return s.a.createElement(
          s.a.Fragment,
          null,
          Array(3)
            .fill(0)
            .map(function (e, a) {
              return s.a.createElement(f.a, { key: a, style: [T.dot, P(a, t)] })
            }),
        )
      }
      function I(e) {
        return k()({}, w(e))
      }
      function P(e, t) {
        return k()({ animationDelay: ''.concat(0.5 * e, 's'), borderRadius: '100%' }, w(t))
      }
      var T = u.a.create(function (e) {
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
        R = a('sIe2'),
        O = [
          'captions',
          'footerHeight',
          'headerHeight',
          'scrollContainerStyle',
          'unintelligible',
          'withFrequentSpeakerAnnouncement',
        ]
      function L(e) {
        var t = e.headerHeight
        return s.a.createElement(f.a, { style: { height: t } })
      }
      function M(e) {
        var t = e.footerHeight,
          a = e.unintelligible
        return s.a.createElement(
          s.a.Fragment,
          null,
          a ? s.a.createElement(C, { size: 20 }) : null,
          s.a.createElement(f.a, { style: { height: t } }),
        )
      }
      var _ = u.a.create(function (e) {
        return {
          root: { height: '100%', width: '100%', flex: 1 },
          captionsContainer: { maxHeight: '100%', height: '100%' },
        }
      })
      t.a = function (e) {
        var t = e.captions,
          a = e.footerHeight,
          n = void 0 === a ? 28 : a,
          i = e.headerHeight,
          c = void 0 === i ? 28 : i,
          l = e.scrollContainerStyle,
          u = e.unintelligible,
          d = void 0 !== u && u,
          p = e.withFrequentSpeakerAnnouncement,
          m = void 0 !== p && p,
          h = o()(e, O),
          v = s.a.useRef(null),
          b = s.a.useRef(null),
          g = s.a.useRef({ containerHeight: void 0, hasUserScrolledUp: !1 })
        function S() {
          var e, t
          ;(null !== (e = g.current) && void 0 !== e && e.hasUserScrolledUp) ||
            null === (t = b.current) ||
            void 0 === t ||
            t.scrollToEnd({ animated: !0 })
        }
        return (
          s.a.useEffect(function () {
            var e
            g.current.containerHeight =
              null == v || null === (e = v.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height
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
            { ref: v, style: _.root },
            s.a.createElement(R.a, {
              ListFooterComponent: s.a.createElement(M, { footerHeight: n, unintelligible: d }),
              ListHeaderComponent: s.a.createElement(L, { headerHeight: c }),
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
                  a = t.contentOffset,
                  r = t.contentSize,
                  i = t.layoutMeasurement,
                  o = 2 * (g.current.containerHeight || 0) + n,
                  c = r.height - i.height - a.y - o > 0
                g.current.hasUserScrolledUp = c
              },
              ref: b,
              renderItem: function (e) {
                var a,
                  n,
                  i,
                  o = e.index,
                  c = e.item,
                  l = !0
                return (
                  m ||
                    ((n = c.speaker),
                    (i = null === (a = t[o - 1]) || void 0 === a ? void 0 : a.speaker),
                    (l = !(n && i && n.id_str && i.id_str
                      ? n.id_str === i.id_str
                      : n && i && n.screen_name && i.screen_name && n.screen_name === i.screen_name))),
                  s.a.createElement(y, r()({}, h, { caption: c, key: c.sequenceId, withSpeaker: l }))
                )
              },
              scrollEventThrottle: 100,
              style: [_.captionsContainer, l],
            }),
          )
        )
      }
    },
    kRXa: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        c = a('VrFO'),
        s = a.n(c),
        l = a('Y9Ll'),
        u = a.n(l),
        d = a('1Pcy'),
        p = a.n(d),
        f = a('5Yy7'),
        m = a.n(f),
        h = a('2VqO'),
        v = a.n(h),
        b = a('KEM+'),
        g = a.n(b),
        y = (a('2G9S'), a('ERkP')),
        S = a.n(y),
        E = a('/yvb'),
        k = a('3XMw'),
        w = a.n(k),
        C = a('py1r'),
        x = a('oLZl'),
        I = a('9RkS'),
        P = a('rHpw'),
        T = a('A53h'),
        R = a('sTSP'),
        O = a('MWbm'),
        L = [
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
        ],
        M = w.a.b3160a69,
        _ = (function (e) {
          m()(a, e)
          var t = v()(a)
          function a() {
            var e
            s()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              g()(p()(e), 'state', { showSlider: !1, isSliderActive: !1 }),
              g()(p()(e), '_handleButtonLayoutChange', function (t) {
                var a = e.props.containerHeight,
                  n = e.state.sliderMaxHeight,
                  r = t.nativeEvent.layout.height
                if (a) {
                  var i = ''.concat(a - r - P.a.theme.spacesPx.space20, 'px')
                  i !== n && e.setState({ sliderMaxHeight: i })
                }
              }),
              g()(p()(e), '_handleSliderActive', function (t) {
                return e.setState({ isSliderActive: t })
              }),
              g()(p()(e), '_showSlider', function () {
                return e.setState({ showSlider: !0 })
              }),
              g()(p()(e), '_hideSlider', function () {
                return e.setState({ showSlider: !1 })
              }),
              g()(p()(e), '_shouldShowSlider', function (e) {
                return e.showSlider || e.isSliderActive
              }),
              g()(p()(e), '_normalizeValue', function (e) {
                return Math.max(0, Math.min(e, 100))
              }),
              g()(p()(e), '_getSliderMarginStyles', function (e) {
                var t = null != e ? e : 'medium'
                return A['large' === t ? 'xLarge' : t]
              }),
              g()(p()(e), '_handleKeyDown', function (t) {
                var a = e.props,
                  n = a.onSliderChange,
                  r = a.volumePercent,
                  i = t.altKey,
                  o = t.ctrlKey,
                  c = t.metaKey
                if (!(i || o || c)) {
                  var s = t.key === x.a.ArrowUp || t.key === x.a.ArrowRight,
                    l = t.key === x.a.ArrowDown || t.key === x.a.ArrowLeft
                  if (s || l) {
                    var u = e._normalizeValue(r + 10 * (s ? 1 : -1))
                    n && n(u), t.preventDefault()
                  }
                }
              }),
              e
            )
          }
          return (
            u()(a, [
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var a = this.props,
                    n = a.onHideSlider,
                    r = a.onShowSlider
                  if (a.onSliderChange) {
                    var i = this._shouldShowSlider(t),
                      o = this._shouldShowSlider(this.state)
                    !i && o && r && r(), i && !o && n && n()
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.accessibilityLabelIcon,
                    n = t.accessibilityLabelSlider,
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
                    v = t.withNavigationSliderBackground,
                    b = o()(t, L),
                    g = c ? S.a.createElement(T.a, null) : S.a.createElement(R.a, null),
                    y = v ? z.sliderWithNavigationBackground : z.sliderWithDefaultBackground
                  return S.a.createElement(
                    C.a,
                    {
                      disabled: !d,
                      onFocusRingGained: d ? this._showSlider : void 0,
                      onFocusRingLost: d ? this._hideSlider : void 0,
                      onHoverIn: d ? this._showSlider : void 0,
                      onHoverOut: d ? this._hideSlider : void 0,
                    },
                    S.a.createElement(
                      O.a,
                      { onKeyDown: d ? this._handleKeyDown : void 0 },
                      S.a.createElement(
                        E.a,
                        r()(
                          {
                            accessibilityLabel: a,
                            icon: g,
                            onLayout: this._handleButtonLayoutChange,
                            onPress: l,
                            pullRight: p,
                            type: 'onMediaText',
                          },
                          b,
                        ),
                      ),
                      d &&
                        S.a.createElement(C.a, { onFocusRingGained: u, onFocusRingLost: s }, function (t) {
                          var a = t.isFocusedWithin
                          return S.a.createElement(
                            O.a,
                            {
                              style: [
                                z.sliderBackground,
                                y,
                                e._getSliderMarginStyles(b.size),
                                a || e._shouldShowSlider(e.state) ? null : P.a.visuallyHidden,
                                i && { maxHeight: e.state.sliderMaxHeight },
                              ],
                            },
                            S.a.createElement(I.a, {
                              accessibilityLabel: n,
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
            a
          )
        })(S.a.PureComponent)
      g()(_, 'defaultProps', { pullRight: !1 })
      var z = P.a.create(function (e) {
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
        A = P.a.create(function (e) {
          var t = e.spaces,
            a = e.spacesPx,
            n = ''.concat(a.space16 + a.space4 + a.space2, 'px'),
            r = ''.concat(a.space20 + a.space24, 'px'),
            i = ''.concat(a.space12 + a.space40, 'px')
          return {
            xSmall: { marginBottom: t.space24 },
            small: { marginBottom: t.space32 },
            medium: { marginBottom: t.space36 },
            large: { marginBottom: r },
            xLarge: { marginBotom: i },
            smallCompact: { marginBottom: n },
            DEPRECATED_normalCompact: { marginBottom: t.space32 },
            DEPRECATED_normal: { marginBottom: t.space40 },
          }
        })
      t.a = _
    },
    lOQR: function (e, t, a) {
      'use strict'
      a('hBpG'), a('7x/C')
      var n = a('6/RC'),
        r = a.n(n),
        i = a('aITJ'),
        o = {
          setLocation: function (e) {
            document.location = e
          },
          getAppStoreURLs: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              t = c(e),
              a = [t.android, t.ios, t.windows],
              n = a.find(function (e) {
                return e.matches()
              })
            return n ? [n] : a
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
            r.a.canUseDOM && o.setLocation(e)
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
    nmVb: function (e, t, a) {
      'use strict'
      var n = a('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], a = (0, r.default)(e), n = 0; n < a.length; n++) t.push(a[n].hashtag)
          return t
        })
      var r = n(a('yyPN'))
      e.exports = t.default
    },
    p3P5: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return x
      }),
        a.d(t, 'b', function () {
          return R
        })
      var n,
        r = a('yiKp'),
        i = a.n(r),
        o = a('KEM+'),
        c = a.n(o),
        s = (a('ho0z'), a('z84I'), a('ERkP')),
        l = a.n(s),
        u = a('G/+M'),
        d = a('v6aA'),
        p = a('3XMw'),
        f = a.n(p),
        m = (a('lTEL'), a('7x/C'), a('JtPf'), a('87if'), a('kYxP'), a('zb92')),
        h = a('RuTB'),
        v = Object(m.a)({
          loader: function () {
            return f.a.emoji.then(function () {
              return Promise.all([a.e(16), a.e(229)]).then(a.bind(null, '4AX5'))
            })
          },
          renderPlaceholder: function (e, t) {
            return l.a.createElement(h.a, { hasError: e, onRetry: t })
          },
        }),
        b = a('MWbm'),
        g = a('TIdA'),
        y = a('jhWN'),
        S = a('t62R'),
        E = a('jV+4'),
        k = a('rHpw'),
        w = a('VKFJ'),
        C = g.a.createLayoutCache()
      function x(e) {
        var t = l.a.useContext(d.a).featureSwitches,
          a = e.children,
          n = e.hasNftAvatar,
          r = e.isVerified,
          i = e.kind,
          o = e.name,
          c = e.periscopeUserId,
          s = e.screenName,
          u = e.width,
          p = n && t.isTrue('responsive_web_nft_avatar'),
          f = i ? P[i] : null,
          m = e.profile_image_url_https || '',
          h =
            a ||
            l.a.createElement(y.a, {
              imageLayoutCache: C,
              screenName: s,
              shape: p ? 'hex' : 'circle',
              size: O,
              style: T.participantAvatarSize,
              uri: m,
              withHoverCard: !0,
              withLink: !0,
            })
        return l.a.createElement(
          b.a,
          { style: [{ width: u }, T.participantCell] },
          l.a.createElement(b.a, { style: T.participantAvatarSize }, h, l.a.createElement(I, { periscopeUserId: c })),
          l.a.createElement(
            S.b,
            { numberOfLines: 1, size: 'subtext2', style: T.participantCellUsername, weight: 'bold' },
            l.a.createElement(E.a, { isVerified: r, name: o }),
          ),
          l.a.createElement(
            b.a,
            { style: T.participantCellKindContainer },
            e.speakingIndicator,
            l.a.createElement(
              S.b,
              { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: T.participantCellKind },
              f || l.a.createElement('span', null, ' '),
            ),
          ),
        )
      }
      function I(e) {
        var t = e.periscopeUserId,
          a = L(k.a.theme).avatar.size,
          n = u.c(t)
        return l.a.createElement(
          l.a.Fragment,
          null,
          null == n
            ? void 0
            : n.map(function (e) {
                return l.a.createElement(v, { key: e.id, reaction: e, size: a })
              }),
        )
      }
      var P =
          ((n = {}),
          c()(n, w.a.host, f.a.cededf29),
          c()(n, w.a.cohost, f.a.f77997bf),
          c()(n, w.a.speaker, f.a.i48f4ed8),
          c()(n, w.a.listener, f.a.a77c8e02),
          n),
        T = k.a.create(function (e) {
          var t = L(e),
            a = { width: t.avatar.size, height: t.avatar.size }
          return {
            participantCell: i()({ justifyContent: 'center', alignItems: 'center' }, t.participantCell),
            participantCellUsername: t.participantCellUsername,
            participantCellKindContainer: { position: 'relative', justifyContent: 'center' },
            participantCellKind: { lineHeight: t.kind.lineHeight },
            participantAvatarSize: a,
          }
        })
      function R(e) {
        var t = L(e)
        return {
          getWidth: function () {
            return t.participantCell.minWidth + 2 * t.participantCell.paddingHorizontal
          },
          getHeight: function () {
            return t.participantCell.height + t.participantCell.marginBottom
          },
        }
      }
      var O = 'xxLarge'
      function L(e) {
        var t = y.a.getSizeStyle('xxLarge').width || e.spacesPx.space48,
          a = e.spacesPx.space20,
          n = e.spacesPx.space8,
          r = e.spacesPx.space80 + 2 * n,
          i = e.spacesPx.space4,
          o = e.lineHeightsPx.headline2,
          c = e.lineHeightsPx.headline2
        return {
          participantCell: { marginBottom: a, paddingHorizontal: n, minWidth: r, height: t + i + o + c + a },
          avatar: { size: t },
          participantCellUsername: { lineHeight: o, paddingTop: i },
          kind: { lineHeight: c },
        }
      }
    },
    ssnq: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return f
      })
      var n = a('ddV6'),
        r = a.n(n),
        i = a('T0aG'),
        o = a.n(i),
        c =
          (a('lTEL'),
          a('7x/C'),
          a('LqLs'),
          a('87if'),
          a('kYxP'),
          a('jwue'),
          a('+oxZ'),
          a('M+/F'),
          a('+KXO'),
          a('ERkP')),
        s = a.n(c),
        l = (a('z84I'), a('FgXs'))
      function u(e) {
        return 'object' !== o()(e) || null === e
          ? e
          : Array.isArray(e)
          ? e.map(u)
          : Object(l.a)(e, function (e) {
              return u(e)
            })
      }
      var d = a('fs1G'),
        p = a('9EWH')
      function f(e) {
        var t = u(e || {}),
          a = u(t),
          n = new Set()
        function i(e) {
          return (
            n.add(e),
            function () {
              n.delete(e)
            }
          )
        }
        function c() {
          n.forEach(function (e) {
            e(a)
          })
        }
        function l(e) {
          return function (t) {
            var a = e.current.slice,
              n = e.current.state,
              r = e.current.selector(t)
            e.current.equality(r, a, t, n) ||
              ((e.current.slice = r), (e.current.state = t), e.current.onUpdate(e.current.slice))
          }
        }
        return {
          getState: function () {
            return a
          },
          setState: function (e) {
            ;(a = Object(p.a)(a, function (t) {
              var a,
                n,
                r,
                i = e(t)
              i &&
                'object' === o()(i) &&
                ((a = t),
                (n = i),
                (r = {}),
                Object.keys(n).forEach(function (e) {
                  ;(r[e] = !0), (a[e] = n[e])
                }),
                Object.keys(a).forEach(function (e) {
                  r[e] || delete a[e]
                }))
            })),
              c()
          },
          reset: function () {
            ;(a = u(t)), c()
          },
          useSlice: function (e, t) {
            var n = (null == t ? void 0 : t.equalityFn) || m.equality,
              o = d.a,
              c = s.a.useRef({ state: a, slice: e(a), selector: e, equality: n, onUpdate: o })
            ;(c.current.selector = e), (c.current.equality = n)
            var u = s.a.useState(function () {
                return c.current.slice
              }),
              p = r()(u, 2),
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
                function n(a) {
                  e && t(a)
                }
                n(a)
                var r = i(n)
                return function () {
                  ;(e = !1), r()
                }
              }, []),
              f
            )
          },
          subscribe: function (e, t, n) {
            var r = (null == n ? void 0 : n.equalityFn) || m.equality,
              o = { current: { state: a, slice: e(a), selector: e, equality: r, onUpdate: t } },
              c = i(l(o))
            return o.current.onUpdate(o.current.slice), c
          },
        }
      }
      Object(p.b)()
      var m = {
        equality: function (e, t, a, n) {
          return e === t
        },
      }
    },
    tM6R: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      })
      var n = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    xVWt: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return Ut
      }),
        a.d(t, 'b', function () {
          return Gt
        }),
        a.d(t, 'c', function () {
          return ta
        })
      var n = a('m3Bd'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        c = a('97Jx'),
        s = a.n(c),
        l = a('ddV6'),
        u = a.n(l),
        d = (a('7x/C'), a('JtPf'), a('z84I'), a('IAdD'), a('cFyg')),
        p = a('Q/sS'),
        f = a('A7Vd'),
        m = a('ERkP'),
        h = a.n(m),
        v = a('G/+M'),
        b = a('RhWx'),
        g = a.n(b),
        y = (a('LW0h'), a('wFPu'), a('vfdX'), a('ho0z'), a('KOtZ'), a('2G9S'), a('3XMw')),
        S = a.n(y),
        E = a('dgjd'),
        k = a('MWbm'),
        w = a('6iuV'),
        C = a('TCYy'),
        x = a('uCxL'),
        I = a('jV+4'),
        P = a('rHpw')
      function T(e) {
        var t = Object(E.a)(e.audioSpaceId).space
        if (!t) return null
        var a = t.sharings,
          n = g()(a)
            .reverse()
            .filter(function (e) {
              return e && e.tweet && e.user
            })
        return n.length ? h.a.createElement(R, { items: n }) : null
      }
      function R(e) {
        var t = e.items,
          a = t.reduce(function (e, t) {
            return t.tweet ? (e.length ? ''.concat(e, '.').concat(t.id) : t.id) : e
          }, ''),
          n = h.a.useState(),
          r = u()(n, 2),
          i = r[0],
          o = r[1],
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
            w.a,
            {
              childrenStyle: _.carouselChildrenStyles,
              key: a,
              onVisibleRangeChange: function (e) {
                var a = e.index
                1 === e.intersectionRatio && o(t[a].id)
              },
              updateObserverWithChildren: !0,
              visibleItemIndex: c,
            },
            t.map(function (e, t) {
              return h.a.createElement(O, { item: e, key: e.id || t })
            }),
          ),
          h.a.createElement(C.a, { count: t.length, key: ''.concat(a, '-indicators'), max: L, selectedIndex: c }),
        )
      }
      function O(e) {
        if (!e.item) return null
        var t = e.item,
          a = t.tweet,
          n = t.user
        return h.a.createElement(
          k.a,
          { key: a.id_str, style: _.sharedContentContainer },
          h.a.createElement(x.a, { isCondensed: !0, tweet: a }),
          h.a.createElement(I.a, {
            avatarSize: 'small',
            name: M.sharedBy({ name: null == n ? void 0 : n.name }),
            nameSize: 'subtext2',
            profileImageUrl: null == n ? void 0 : n.profile_image_url_https,
            style: _.sharedContentBy,
            weight: 'normal',
          }),
        )
      }
      var L = 8,
        M = { sharedBy: S.a.bdfa93eb },
        _ = P.a.create(function (e) {
          return {
            sharedContentContainer: { paddingHorizontal: ta(e).container.paddingHorizontal, width: '100%' },
            carouselChildrenStyles: { scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
            sharedContentBy: { marginTop: e.spaces.space8 },
          }
        }),
        z = a('2C8o'),
        A = a('FGLp'),
        j = a('hhqq'),
        H = a('vbJ7')
      function D(e) {
        var t = e.audioSpaceId,
          a = e.height,
          n = z.c()
        return p.n()
          ? h.a.createElement(
              k.a,
              { style: [B.container, { height: a }] },
              h.a.createElement(k.a, { style: B.fadeIn }),
              h.a.createElement(N, { audioSpaceId: t, captions: n }),
              h.a.createElement(k.a, { style: B.fadeOut }),
            )
          : null
      }
      function N(e) {
        var t = e.audioSpaceId,
          a = e.captions,
          n = Object(E.a)(t).utils
        return (
          Object(A.a)(function () {
            n.scribe(':audiospace:::transcription:impression')
          }),
          h.a.createElement(j.a, {
            captionTextSize: 'body',
            captions: a,
            footerHeight: 28,
            headerHeight: 28,
            scrollContainerStyle: B.scrollContainerStyle,
            withSpeakerAvatar: !0,
            withSpeakerScreenName: !0,
          })
        )
      }
      var B = P.a.create(function (e) {
          var t = H.a.hexToCss(e.colors.navigationBackground, 0),
            a = H.a.hexToCss(e.colors.navigationBackground, 0.8)
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
                : 'linear-gradient(to top, '.concat(t, ', ').concat(a, ')'),
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
                : 'linear-gradient(to bottom, '.concat(t, ', ').concat(a, ')'),
              pointerEvents: 'none',
              zIndex: 1,
            },
          }
        }),
        V = a.p + 'spaces_clipping_banner.1bf85ac5.png',
        F = a('tM6R'),
        U = a.p + 'bird_spaces_transparent.4a7e7195.png',
        q = (a('1Iuc'), a('cm6r')),
        W = a('Wms4'),
        K = a('+/1j')
      function G(e) {
        return e.withEducationOnClick && e.audioSpaceId
          ? h.a.createElement(X, { audioSpaceId: e.audioSpaceId })
          : h.a.createElement(J, e)
      }
      function X(e) {
        var t = Object(E.a)(e.audioSpaceId).utils,
          a = p.k().openSheet
        return h.a.createElement(
          q.a,
          {
            accessibilityLabel: Y.recordingActive,
            onPress: function () {
              a(p.b.recordingEducation), t.scribe(':audiospace::recording:icon:click')
            },
          },
          h.a.createElement(J, { audioSpaceId: e.audioSpaceId }),
        )
      }
      function J(e) {
        return h.a.createElement(
          k.a,
          { style: Z.indicatorWrapper },
          h.a.createElement(
            W.a,
            { background: 'navigationBackground' },
            h.a.createElement(
              k.a,
              { style: Z.indicatorContainer },
              h.a.createElement(k.a, { style: [Z.indicatorDot, e.withoutPulse ? null : Z.indicatorDotAnimation] }),
              h.a.createElement(
                K.a,
                { accessibilityRole: 'presentation', selectable: !1, style: Z.recordingIndicatorText },
                Y.REC,
              ),
            ),
          ),
        )
      }
      var Z = P.a.create(function (e) {
          return {
            indicatorWrapper: { width: 'fit-content' },
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
        Y = { REC: 'REC', recordingActive: S.a.b4f91a89 },
        Q = a('TIdA'),
        $ = a('A91F'),
        ee = a('t62R'),
        te = a('/yvb'),
        ae = a('Lsrn'),
        ne = a('k/Ka'),
        re = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ne.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ae.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      var ie = re,
        oe = a('RUwF')
      function ce() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            k.a,
            { style: ue.imageContainer },
            h.a.createElement(Q.a, { accessibilityLabel: '', aspectMode: $.a.COVER, image: U }),
          ),
          h.a.createElement(
            k.a,
            { style: ue.contentContainer },
            h.a.createElement(G, { withoutPulse: !0 }),
            h.a.createElement(ee.b, { size: 'title3', style: ue.title, weight: 'bold' }, le.title),
            h.a.createElement(ee.b, { color: 'gray700' }, le.subtitle),
            h.a.createElement(se, {
              icon: h.a.createElement(ie, { style: ue.icon }),
              subtitle: le.sections.onlySpeakersRecorded.subtitle,
              title: le.sections.onlySpeakersRecorded.title,
            }),
            h.a.createElement(se, {
              icon: h.a.createElement(oe.a, { style: ue.icon }),
              subtitle: le.sections.replayOrShare.subtitle,
              title: le.sections.replayOrShare.title,
              withOnlyMarginBottom: !0,
            }),
            h.a.createElement(
              ee.b,
              { color: 'gray700', size: 'body', style: ue.disclaimer },
              h.a.createElement(
                S.a.I18NFormatMessage,
                { $i18n: 'aab35604' },
                h.a.createElement(ee.b, { color: 'text', link: F.a.help, withUnderline: !0 }, S.a.ce0104de),
              ),
            ),
            h.a.createElement(te.a, { onClick: e, type: 'primaryOutlined' }, le.gotIt),
          ),
        )
      }
      function se(e) {
        return h.a.createElement(
          k.a,
          { style: [ue.sectionContainer, e.withOnlyMarginBottom ? ue.sectionMarginBottom : ue.sectionMarginVertical] },
          e.icon,
          h.a.createElement(
            k.a,
            { style: ue.sectionContent },
            h.a.createElement(ee.b, { weight: 'bold' }, e.title),
            h.a.createElement(ee.b, { color: 'gray700' }, e.subtitle),
          ),
        )
      }
      var le = {
          title: S.a.g1c6f16d,
          subtitle: S.a.e5609214,
          gotIt: S.a.j24c37b2,
          sections: {
            onlySpeakersRecorded: { title: S.a.g665514b, subtitle: S.a.ja196c59 },
            replayOrShare: { title: S.a.dd317ed6, subtitle: S.a.hd2dfb72 },
          },
        },
        ue = P.a.create(function (e) {
          return {
            imageContainer: { height: '128px', width: '100%' },
            contentContainer: { padding: e.spaces.space32 },
            title: { marginTop: e.spaces.space4, marginBottom: e.spaces.space8 },
            disclaimer: { marginVertical: e.spaces.space16 },
            icon: { marginRight: e.spaces.space12, fill: e.colors.purple500, fontSize: e.fontSizes.title3 },
            sectionContent: { flexShrink: 1 },
            sectionContainer: { flexFlow: 'row nowrap' },
            sectionMarginVertical: { marginVertical: e.spaces.space12 },
            sectionMarginBottom: { marginBottom: e.spaces.space12 },
          }
        }),
        de = a('SNyS'),
        pe = a('S+H3')
      function fe() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            k.a,
            { style: me.imageContainer },
            h.a.createElement(Q.a, { accessibilityLabel: '', aspectMode: $.a.COVER, image: V }),
          ),
          h.a.createElement(
            k.a,
            { style: me.contentContainer },
            h.a.createElement(ee.b, { size: 'title3', style: me.title, weight: 'bold' }, ve.title),
            h.a.createElement(ee.b, { color: 'gray700' }, ve.subtitle),
            he.map(function (e, t) {
              return h.a.createElement(se, s()({ key: t }, e))
            }),
            h.a.createElement(te.a, { onClick: e, style: me.button, type: 'primaryOutlined' }, ve.gotIt),
          ),
        )
      }
      var me = P.a.create(function (e) {
          return {
            imageContainer: { height: '180px', width: '100%', marginTop: e.spaces.space12 },
            button: { marginTop: e.spaces.space24 },
            contentContainer: { padding: e.spaces.space32 },
            title: { marginBottom: e.spaces.space8 },
            icon: { marginRight: e.spaces.space12, fill: e.colors.purple500, fontSize: e.fontSizes.title2 },
          }
        }),
        he = [
          { icon: h.a.createElement(de.a, { style: me.icon }), title: S.a.f7c8617a, subtitle: S.a.ecc7d2eb },
          { icon: h.a.createElement(pe.a, { style: me.icon }), title: S.a.d575ee02, subtitle: S.a.bb1e43e3 },
          { icon: h.a.createElement(ie, { style: me.icon }), title: S.a.ed1d1ccf, subtitle: S.a.e5d193c7 },
        ],
        ve = { title: S.a.e1547ec0, subtitle: S.a.i154245e, gotIt: S.a.j24c37b2 },
        be = a('PaZX'),
        ge = a('lOQR'),
        ye = a('SQlS'),
        Se = a('ISLN'),
        Ee = a('sTSP'),
        ke = a('Zg3A'),
        we = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ne.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ae.a.root, e.style],
                viewBox: '0 0 24 24',
              },
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
      we.metadata = { width: 24, height: 24 }
      var Ce = we,
        xe = 'spaces-intro-nux',
        Ie = { ios: ge.a.getiOSAppStoreLink(xe), android: ge.a.getAndroidAppStoreLink(xe) }
      function Pe() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          k.a,
          { style: Le.container },
          h.a.createElement(
            k.a,
            { style: Le.headingContainer },
            h.a.createElement(
              k.a,
              { style: Le.headingIconContainer },
              h.a.createElement(ye.a, { style: Le.headingIcon }),
            ),
            h.a.createElement(
              k.a,
              null,
              h.a.createElement(ee.b, { align: 'center', size: 'title4', style: Le.title, weight: 'bold' }, Oe.title),
              h.a.createElement(ee.b, { align: 'center', color: 'gray700', size: 'body' }, Oe.subtitle),
            ),
          ),
          h.a.createElement(
            k.a,
            { style: Le.sectionsContainer },
            h.a.createElement(Te, {
              icon: h.a.createElement(Ee.a, { style: Le.sectionIcon }),
              subtitle: h.a.createElement(
                Re,
                null,
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'fc9fe08e' },
                  h.a.createElement(ee.b, { link: Ie.ios }, S.a.fd1d03b8),
                  h.a.createElement(ee.b, { link: Ie.android }, S.a.eb4e17b4),
                ),
              ),
              title: Oe.sections.listenLive.title,
            }),
            h.a.createElement(Te, {
              icon: h.a.createElement(ke.a, { style: Le.sectionIcon }),
              subtitle: h.a.createElement(
                Re,
                null,
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'a8170308' },
                  h.a.createElement(ee.b, { link: F.a.help }, S.a.c220921d),
                ),
              ),
              title: Oe.sections.spacesArePublic.title,
            }),
            h.a.createElement(Te, {
              icon: h.a.createElement(Ce, { style: Le.sectionIcon }),
              subtitle: h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(
                  Re,
                  null,
                  h.a.createElement(
                    S.a.I18NFormatMessage,
                    { $i18n: 'ib602fd8' },
                    h.a.createElement(ee.b, { link: F.a.settings }, S.a.j5485ede),
                  ),
                ),
                h.a.createElement('br', null),
                h.a.createElement(Re, null, Oe.sections.manageExperience.blockAndReport),
              ),
              title: Oe.sections.manageExperience.title,
              withMarginBottom: !1,
            }),
          ),
          h.a.createElement(
            k.a,
            { style: Le.bottomItems },
            h.a.createElement(
              k.a,
              { style: Le.finePrintContainer },
              h.a.createElement(
                ee.b,
                { align: 'center', color: 'gray700', size: 'subtext1', style: Le.finePrint },
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'i6164a47' },
                  h.a.createElement(ee.b, { link: F.a.help }, S.a.cdffdeb1),
                ),
              ),
            ),
            h.a.createElement(
              k.a,
              { style: Le.ctaContainer },
              h.a.createElement(
                Se.a,
                { accessibilityLabel: Oe.gotIt, onPress: e },
                h.a.createElement(
                  ee.b,
                  { align: 'center', color: 'white', numberOfLines: 1, size: 'body', weight: 'bold' },
                  Oe.gotIt,
                ),
              ),
            ),
          ),
        )
      }
      function Te(e) {
        var t = e.icon,
          a = e.subtitle,
          n = e.title,
          r = e.withMarginBottom,
          i = void 0 === r || r
        return h.a.createElement(
          k.a,
          { style: [Le.sectionContainer, i ? Le.sectionMarginBottom : null] },
          h.a.createElement(k.a, { style: Le.sectionIconContainer }, t),
          h.a.createElement(
            k.a,
            { style: Le.sectionContent },
            h.a.createElement(ee.b, { size: 'body', weight: 'bold' }, n),
            a,
          ),
        )
      }
      function Re(e) {
        return h.a.createElement(ee.b, { color: 'gray700', size: 'body' }, e.children)
      }
      var Oe = {
          title: S.a.a3e6bb1b,
          subtitle: S.a.d82f214f,
          sections: {
            listenLive: { title: S.a.gf029868 },
            spacesArePublic: { title: S.a.icc1ba70 },
            manageExperience: { title: S.a.bcf241be, blockAndReport: S.a.b0bc833f },
          },
          gotIt: S.a.j24c37b2,
        },
        Le = P.a.create(function (e) {
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
        Me = a('WrBE'),
        _e = a('i4Oy'),
        ze = a('hUaP')
      function Ae(e) {
        var t = Object(p.k)().requestSheetDismissal
        return h.a.createElement(Me.a.View, {
          onClick: t,
          style: [
            He.dockSheetOverlayBase,
            e.isSideNavLayout ? De.dockSheetOverlay : He.dockSheetOverlay,
            {
              opacity: e.animation.animatedPan.interpolate({
                inputRange: [e.animation.shellHeights.half, e.animation.shellHeights.full],
                outputRange: [1, 0],
              }),
            },
          ],
        })
      }
      function je(e) {
        return h.a.createElement(
          k.a,
          { style: [e.style, e.hasDismissRequest && He.pointerEventsNone] },
          h.a.createElement(
            Me.a.View,
            {
              style: [
                He.contentAnimatedContainer,
                {
                  maxHeight: e.maxHeight,
                  transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }],
                },
              ],
            },
            h.a.createElement(
              k.a,
              { style: He.contentWrapperContainer },
              h.a.createElement(k.a, { style: He.contentWrapper }, e.children),
            ),
          ),
        )
      }
      var He = P.a.create(function (e) {
          var t = Object(ze.b)(e),
            a = t.borderRadius
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
              borderTopRightRadius: a,
              borderTopLeftRadius: a,
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
        De = P.a.create(function (e) {
          var t = Object(ze.b)(e)
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
        Ne = function (e) {
          var t = e.audioSpaceId,
            a = e.dockAnimation,
            n = e.isSideNavLayout,
            r = Object(p.l)(),
            i = r.clearSheet,
            o = r.hasDismissRequest,
            c = r.sheetId,
            s = (function (e) {
              var t = _e.a.get('window'),
                a = Object(ze.a)(t.height, e),
                n = h.a.useRef(new Me.a.Value(a.full)).current
              return {
                animatedPan: n,
                shellHeights: a,
                springToOpen: function (e) {
                  return Me.a.spring(n, { toValue: 0, bounciness: 2 }).start(e)
                },
                springToClose: function (e) {
                  return Me.a.spring(n, { toValue: a.full }).start(e)
                },
              }
            })(n),
            l = a.shellHeights.sheetMaxHeight,
            u = n ? De.contentContainer : He.contentContainer,
            d = h.a.useMemo(
              function () {
                switch (c) {
                  case p.b.report:
                    return h.a.createElement(be.b, { audioSpaceId: t })
                  case p.b.recordingEducation:
                    return h.a.createElement(ce, null)
                  case p.b.generalNux:
                    return h.a.createElement(Pe, null)
                  case p.b.clippingEducation:
                    return h.a.createElement(fe, null)
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
          var f = n ? De.dockSheetContainer : He.dockSheetContainer
          return h.a.createElement(
            Me.a.View,
            {
              style: [
                f,
                o && He.pointerEventsNone,
                {
                  height: a.shellHeights.full - a.animatedPan._value,
                  opacity: s.animatedPan.interpolate({ inputRange: [0, s.shellHeights.half], outputRange: [1, 0] }),
                },
              ],
            },
            h.a.createElement(Ae, { animation: s, isSideNavLayout: n }),
            h.a.createElement(je, { animation: s, hasDismissRequest: o, maxHeight: l, style: u }, d),
          )
        }
      function Be(e) {
        var t = e.children
        return p.m() ? null : t
      }
      var Ve = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ne.a)(
          'svg',
          o()(
            o()({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [ae.a.root, e.style],
              viewBox: '0 0 17 9.5',
            },
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
      Ve.metadata = { width: 17, height: 9.5 }
      var Fe = Ve
      function Ue(e) {
        var t = p.m()
        return h.a.createElement(
          te.a,
          { onPress: e.onPress, pullRight: !0, size: 'medium', type: 'destructiveText' },
          h.a.createElement(ee.b, { size: 'body', weight: 'bold' }, t ? qe.close : qe.leave),
        )
      }
      var qe = { leave: S.a.bb1d57b6, close: S.a.ia5e7487 },
        We = a('4EYz'),
        Ke = a('MMRb'),
        Ge = a('Pl95'),
        Xe = a('0nhk'),
        Je = a('pjBI'),
        Ze = a('MH+I'),
        Ye = a('fzjU')
      function Qe(e) {
        var t = Object(E.a)(e.audioSpaceId),
          a = t.space,
          n = t.utils,
          r = (a || {}).ended_at,
          i = n.getTunedInCount()
        return h.a.createElement(
          Je.a,
          { color: nt.color, style: tt.container },
          h.a.createElement($e, { ended_at: r }),
          h.a.createElement(et, { count: i }),
        )
      }
      function $e(e) {
        var t = e.ended_at
        if (!t) return null
        var a = null,
          n = Date.now() - t
        return (
          (a =
            n < it
              ? h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'f0e84608' },
                  h.a.createElement(Ze.a, { short: !0, timeMs: n }),
                )
              : rt(new Date(t))),
          h.a.createElement(ee.b, nt, a)
        )
      }
      function et(e) {
        var t = e.count
        return t ? h.a.createElement(ee.b, nt, at.tunedIn({ count: Ye.a.formatCountShort(t) })) : null
      }
      var tt = P.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 } }
        }),
        at = { tunedIn: S.a.h140746e },
        nt = { color: 'text', size: 'subtext2' },
        rt = S.a.e18e399a,
        it = 864e5
      function ot(e) {
        return h.a.createElement(
          k.a,
          { style: lt.titleLabelRow },
          h.a.createElement(ot.Replay, e),
          h.a.createElement(ot.EmployeeOnly, e),
        )
      }
      function ct(e) {
        return h.a.createElement(k.a, { style: lt.titleLabelSpacer }, e.children)
      }
      ;(ot.EmployeeOnly = function (e) {
        var t = Object(E.a)(e.audioSpaceId).space
        return null != t && t.is_employee_only
          ? h.a.createElement(
              ct,
              null,
              h.a.createElement(W.a, { background: 'navigationBackground', bold: !0 }, st.tweepsOnly),
            )
          : null
      }),
        (ot.Replay = function (e) {
          var t = Object(E.a)(e.audioSpaceId).utils
          return t.is.recording
            ? h.a.createElement(
                ct,
                null,
                h.a.createElement(G, { audioSpaceId: e.audioSpaceId, withEducationOnClick: !e.isOutsideDock }),
              )
            : t.is.replayable
            ? h.a.createElement(ct, null, h.a.createElement(Qe, { audioSpaceId: e.audioSpaceId }))
            : null
        })
      var st = { tweepsOnly: S.a.a5bf5489 },
        lt = P.a.create(function (e) {
          return {
            titleLabelRow: { flexDirection: 'row', marginBottom: e.spaces.space4 },
            titleLabelSpacer: { paddingRight: e.spacesPx.space4 },
          }
        }),
        ut = a('AMlz'),
        dt = a('VKFJ'),
        pt = a('yUQf'),
        ft = a('sIe2'),
        mt = a('7ep7'),
        ht = a('v6aA'),
        vt = a('DlVf'),
        bt = a('RqPI'),
        gt = a('mjJ+'),
        yt = a('FXw/'),
        St = a('GCOQ')
      function Et(e) {
        var t = (function (e) {
            var t = Object(E.a)(e).utils,
              a = Object(pt.a)(bt.m),
              n = p.k().openSheet,
              r = []
            a &&
              r.push({
                Icon: St.a,
                text: kt.reportThisSpace,
                isEmphasized: !0,
                onClick: function () {
                  n(p.b.report), t.scribe(':audiospace::caret:report:click')
                },
              })
            return { items: r }
          })(e.audioSpaceId),
          a = h.a.useState(!1),
          n = u()(a, 2),
          r = n[0],
          i = n[1]
        if (t.items.length < 1) return null
        var o = r
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
          h.a.createElement(te.a, {
            accessibilityLabel: kt.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: kt.more },
            icon: h.a.createElement(yt.a, null),
            onPress: function () {
              return i(!0)
            },
            size: 'medium',
            type: 'primaryOutlined',
          }),
          o,
        )
      }
      var kt = { more: S.a.h63a5c3b, reportThisSpace: S.a.b3481ffd },
        wt = a('O07O'),
        Ct = (a('i4UL'), a('CDzS'))
      function xt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ne.a)(
          'svg',
          o()(o()({}, e), {}, { style: [It.root, e.style], viewBox: '0 0 24 24' }),
          h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(Ct.a.SVGLinearGradient, null),
            h.a.createElement(
              'g',
              { fill: Ct.a.SVGLinearGradient.fill },
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
      xt.metadata = { width: 24, height: 24 }
      var It = P.a.create(function (e) {
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
        Pt = ['isSideNavLayout', 'onLayout']
      function Tt(e) {
        var t = e.isSideNavLayout,
          a = e.onLayout,
          n = r()(e, Pt),
          i = [Lt.footer, t && Lt.footerWide]
        return h.a.createElement(k.a, { onLayout: a, style: i }, h.a.createElement(Rt, n))
      }
      function Rt(e) {
        return p.m()
          ? h.a.createElement(wt.a, { audioSpaceId: e.audioSpaceId })
          : h.a.createElement(Ot, { audioSpaceId: e.audioSpaceId })
      }
      function Ot(e) {
        var t = h.a.useContext(ht.a).featureSwitches
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            k.a,
            { style: Lt.footerLeft },
            t.isTrue('voice_rooms_speaking_enabled') &&
              h.a.createElement(te.a, {
                accessibilityLabel: 'Request to speak',
                borderColor: 'transparent',
                color: 'text',
                hoverLabel: { label: 'Request to speak' },
                icon: h.a.createElement(xt, null),
                onPress: function () {},
                size: 'xLarge',
                type: 'primaryOutlined',
              }),
          ),
          h.a.createElement(
            k.a,
            { style: Lt.footerRight },
            h.a.createElement(Et, e),
            t.isTrue('voice_rooms_reactions_enabled') &&
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(k.a, { style: Lt.footerButtonSpacer }),
                h.a.createElement(te.a, {
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
                h.a.createElement(k.a, { style: Lt.footerButtonSpacer }),
                h.a.createElement(Xe.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon' }),
              ),
          ),
        )
      }
      var Lt = P.a.create(function (e) {
          var t = Object(ze.b)(e),
            a = t.borderRadius,
            n = t.paddingHorizontal
          return {
            footerButtonSpacer: { width: e.spaces.space16 },
            footerLeft: { flexDirection: 'row' },
            footerRight: { flexDirection: 'row' },
            footer: {
              paddingHorizontal: n,
              width: '100%',
              height: 'calc('.concat(100, 'px + ').concat(P.a.iPhoneOffsetBottom, ')'),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0px -1px 0px '.concat(e.colors.gray50),
              backgroundColor: e.colors.navigationBackground,
            },
            footerWide: { borderBottomLeftRadius: a, borderBottomRightRadius: a, boxShadow: e.boxShadows.xSmall },
          }
        }),
        Mt = a('0FVZ'),
        _t = a('Oe3h'),
        zt = a('cTG8'),
        At = a('U7kY'),
        jt = a('n7AW'),
        Ht = a('yyPN'),
        Dt = a.n(Ht),
        Nt = a('GiKA'),
        Bt = a.n(Nt),
        Vt = a('p3P5'),
        Ft = ['periscopeUserId']
      function Ut(e) {
        var t = e.isSideNavLayout ? Mt.a.WideExpandedSpaceDock : Mt.a.NarrowExpandedSpaceDock
        return h.a.createElement(t, null, h.a.createElement(qt, e))
      }
      function qt(e) {
        var t = Object(pt.a)(Ke.selectDrawerVisibility),
          a = Object(ze.b)(P.a.theme),
          n = e.width + a.shadowOffset,
          r = e.isSideNavLayout ? [ra.root, { width: n }] : null,
          i = h.a.useState(),
          o = u()(i, 2),
          c = o[0],
          l = o[1],
          p = h.a.useRef(null),
          f = _e.a.get('window')
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
          h.a.createElement(k.a, { ref: p, style: r }, h.a.createElement(Xt, s()({}, e, { layout: c })))
        )
      }
      function Wt(e) {
        var t = Object(ze.b)(P.a.theme),
          a = e.animation.shellHeights.full - t.shadowOffset
        return h.a.createElement(
          Me.a.View,
          {
            style: [
              aa.expandedShell,
              { height: a, transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }] },
            ],
          },
          h.a.createElement(Kt, e),
        )
      }
      function Kt(e) {
        var t = p.n(),
          a = Object(ut.a)(),
          n = e.footerHeight,
          r = h.a.useRef(new Me.a.Value(n))
        function i() {
          e.animation.springTo('collapse')
        }
        function o() {
          e.animation.springTo('exit')
        }
        return (
          h.a.useEffect(
            function () {
              Me.a.spring(r.current, { toValue: t ? n + $t : n }).start()
            },
            [t, n],
          ),
          h.a.createElement(_t.a, { id: 'SpaceDockExpanded' }, function (t, n) {
            return h.a.createElement(
              k.a,
              s()({ ref: t() }, n({ style: aa.expandedShellContent })),
              h.a.createElement(
                Me.a.View,
                s()({}, e.animation.panResponder.panHandlers, { style: aa.expandedShellHeader }),
                h.a.createElement(
                  k.a,
                  { style: aa.expandedShellHeaderGripContainer },
                  h.a.createElement(k.a, { style: aa.expandedShellHeaderGrip }),
                ),
                h.a.createElement(
                  k.a,
                  { style: aa.expandedShellHeaderButtons },
                  h.a.createElement(te.a, {
                    accessibilityLabel: ia.collapse,
                    hoverLabel: { label: ia.collapse },
                    icon: h.a.createElement(Fe, { style: aa.iconChevronDown }),
                    onPress: i,
                    pullLeft: !0,
                    size: 'medium',
                    type: 'primaryText',
                  }),
                  h.a.createElement(
                    k.a,
                    { style: aa.expandedShellHeaderRight },
                    h.a.createElement(Be, null, h.a.createElement(Ge.a, { audioSpaceId: e.audioSpaceId })),
                    a.isCreationEnabled
                      ? h.a.createElement(Xe.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon-borderless' })
                      : null,
                    h.a.createElement(Ue, { onPress: o }),
                  ),
                ),
                h.a.createElement(
                  k.a,
                  { style: aa.expandedShellDescription },
                  h.a.createElement(Gt, { audioSpaceId: e.audioSpaceId }),
                ),
              ),
              h.a.createElement(
                Me.a.View,
                {
                  id: 'ParticipantsWrapper',
                  style: [aa.participantsContainer, { paddingBottom: Me.a.add(r.current, e.animation.animatedPan) }],
                },
                e.mounted ? h.a.createElement(Jt, e) : null,
              ),
            )
          })
        )
      }
      function Gt(e) {
        var t = Object(E.a)(e.audioSpaceId).utils.title(),
          a = {
            hashtags: Dt()(t).map(function (e) {
              return (e.text = e.hashtag), e
            }),
            user_mentions: Bt()(t),
          },
          n = [0, t.length]
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(ot, { audioSpaceId: e.audioSpaceId, isOutsideDock: e.isOutsideDock }),
          h.a.createElement(zt.a, {
            displayTextRange: n,
            entities: a,
            linkify: !0,
            numberOfLines: 3,
            size: 'headline1',
            text: t,
            weight: 'heavy',
          }),
        )
      }
      function Xt(e) {
        var t = h.a.useState(!1),
          a = u()(t, 2),
          n = a[0],
          r = a[1],
          i = (function (e, t, a) {
            var n = h.a.useRef({ state: p.a.full, animatedPanOffset: 0 }),
              r = _e.a.get('window'),
              i = h.a.useMemo(
                function () {
                  return Object(ze.a)(r.height, e.isSideNavLayout, a)
                },
                [r.height, e.isSideNavLayout, a],
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
              c = h.a.useRef(new Me.a.Value(i.full)).current
            Object(A.a)(function () {
              var e = o(n.current.state)
              Me.a.spring(c, { toValue: e }).start(t)
            })
            var s = e.onRequestClose,
              l = e.onToggleCollapsed,
              u = h.a.useMemo(
                function () {
                  return function (e, t) {
                    ;(n.current.state = e), p.h(e)
                    var a = o(n.current.state),
                      r = null == t ? void 0 : t.vy
                    return new Promise(function (t) {
                      if (e === p.a.exit) return s(), t()
                      Me.a.spring(c, { velocity: r, toValue: a }).start(function () {
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
                  mt.a.create({
                    onMoveShouldSetPanResponder: function (e, t) {
                      return Math.abs(t.dy) > 5
                    },
                    onPanResponderGrant: function (e, t) {
                      n.current.animatedPanOffset = c._value
                    },
                    onPanResponderMove: function (e, t) {
                      var a = n.current.animatedPanOffset + t.dy
                      a >= 0 && c.setValue(a)
                    },
                    onPanResponderRelease: function (e, t) {
                      var a = (null == t ? void 0 : t.vy) || 0,
                        r = Math.abs(a) >= ea
                      c._value > i.collapse || (r && t.dy > 0) ? u(p.a.collapse, t) : u(n.current.state, t)
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
              r(!0), p.h(p.a.full)
            },
            e.layout,
          ),
          c = h.a.useRef(new Me.a.Value(i.shellHeights.full)).current,
          l = o()(o()({}, e), {}, { mounted: n, animation: i })
        h.a.useEffect(
          function () {
            var e = i.shellHeights.full
            Me.a.spring(c, { toValue: e }).start()
          },
          [i.shellHeights.full],
        )
        var d = h.a.useState(100),
          f = u()(d, 2),
          m = f[0],
          v = f[1],
          b = h.a.useCallback(
            function (e) {
              var t = e.nativeEvent.layout.height
              v(t)
            },
            [v],
          )
        return h.a.useMemo(
          function () {
            var t = e.isSideNavLayout ? ra.container : aa.container,
              a = e.isSideNavLayout ? ra.expandedShellContainer : aa.expandedShellContainer,
              n = e.isSideNavLayout ? ra.footerContainer : aa.footerContainer,
              r = c,
              o = i.animatedPan.interpolate({
                inputRange: [i.shellHeights.collapse, i.shellHeights.full],
                outputRange: [1, 0],
              })
            return h.a.createElement(
              Me.a.View,
              { style: [t, aa.forceGPULayer, { height: r, opacity: o }] },
              h.a.createElement(k.a, { style: a }, h.a.createElement(Wt, s()({}, l, { footerHeight: m }))),
              h.a.createElement(
                k.a,
                { style: n },
                h.a.createElement(D, { audioSpaceId: e.audioSpaceId, height: $t }),
                h.a.createElement(Tt, {
                  audioSpaceId: e.audioSpaceId,
                  isSideNavLayout: e.isSideNavLayout,
                  onLayout: b,
                }),
              ),
              h.a.createElement(Ne, {
                audioSpaceId: e.audioSpaceId,
                dockAnimation: i,
                isSideNavLayout: e.isSideNavLayout,
              }),
            )
          },
          [e.audioSpaceId, e.isSideNavLayout, n, e.layout],
        )
      }
      function Jt(e) {
        var t = Object(dt.b)(e.audioSpaceId),
          a = t.all,
          n = t.otherParticipantsTotal
        v.d()
        var r = _e.a.get('window'),
          i = (e.isSideNavLayout ? e.width : r.width) - 2 * ta(P.a.theme).container.paddingHorizontal,
          c = Object(Vt.b)(P.a.theme),
          l = c.getHeight(),
          u = c.getWidth(),
          d = Math.min(4, Math.floor(i / u)),
          p = i / d
        h.a.useEffect(
          function () {
            return (
              e.isSideNavLayout || At.a.disable(),
              function () {
                At.a.enable()
              }
            )
          },
          [e.isSideNavLayout],
        )
        var f = h.a.useMemo(
          function () {
            var e = p
            return a.map(function (t) {
              return o()(o()({}, t), {}, { width: e })
            })
          },
          [a, p],
        )
        return h.a.useMemo(
          function () {
            var t = {
              data: f,
              numColumns: d,
              keyExtractor: function (e) {
                return e.key
              },
              getItemLayout: function (e, t) {
                return { length: l, offset: l * t, index: t }
              },
              renderItem: Zt,
              ListHeaderComponent: h.a.createElement(T, { audioSpaceId: e.audioSpaceId }),
              ListFooterComponent: h.a.createElement(
                Be,
                null,
                h.a.createElement(
                  k.a,
                  { style: aa.participantsFooterContainer },
                  h.a.createElement(We.a, { audioSpaceId: e.audioSpaceId, count: n, interactive: !0 }),
                ),
              ),
            }
            return h.a.createElement(ft.a, s()({ key: d }, t))
          },
          [f],
        )
      }
      function Zt(e) {
        var t = e.item
        return h.a.createElement(Yt, {
          hasNftAvatar: t.user.has_nft_avatar,
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
          a = r()(e, Ft),
          n = dt.b.isParticipantHost(a.kind),
          i = dt.b.canParticipantSpeak(a.kind) ? h.a.createElement(Qt, { isHost: n, periscopeUserId: t }) : null,
          o = Object.assign({}, { speakingIndicator: i, periscopeUserId: t }, a)
        return h.a.createElement(Vt.a, o)
      }
      function Qt(e) {
        var t = e.isHost,
          a = e.periscopeUserId,
          n = f.f({ isHost: t, periscopeUserId: a })
        return h.a.createElement(
          k.a,
          { style: na.container },
          h.a.createElement(jt.a, { audioLevel: n || 0, size: P.a.theme.spacesPx.space16 }),
        )
      }
      var $t = 100,
        ea = 0.5
      function ta(e) {
        return { container: { paddingHorizontal: e.spacesPx.space8 } }
      }
      var aa = P.a.create(function (e) {
        var t = Object(ze.b)(e),
          a = t.paddingHorizontal,
          n = t.borderRadius,
          r = ta(e)
        return {
          forceGPULayer: { transform: [{ translate3d: '0, 0, 0' }] },
          container: { position: 'fixed', bottom: 0, width: '100%', backgroundColor: e.colors.maskColor },
          expandedShellContainer: { width: '100%', borderRadius: n },
          expandedShell: { boxShadow: e.boxShadows.xSmall, width: '100%', height: '100%', borderRadius: 'inherit' },
          expandedShellHeader: { userSelect: 'none', borderRadius: 'inherit' },
          expandedShellHeaderGripContainer: { paddingVertical: 5, justifyContent: 'center', alignItems: 'center' },
          expandedShellHeaderGrip: {
            height: 5,
            width: e.spaces.space36,
            backgroundColor: e.colors.gray200,
            borderRadius: e.borderRadiiPx.xLarge,
          },
          expandedShellHeaderButtons: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: a },
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
            paddingHorizontal: a,
          },
          participantsContainer: o()(o()({}, r.container), {}, { flex: 1 }),
          participantsFooterContainer: { paddingVertical: e.spaces.space16 },
          footerContainer: { position: 'absolute', bottom: 0, width: '100%' },
        }
      })
      var na = P.a.create(function (e) {
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
        ra = P.a.create(function (e) {
          var t = Object(ze.b)(e)
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
        ia = { collapse: S.a.d227d19e }
    },
  },
])
//# sourceMappingURL=WIPED
