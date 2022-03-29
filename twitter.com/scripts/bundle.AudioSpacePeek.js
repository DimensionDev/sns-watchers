;(window.webpackJsonp = window.webpackJsonp || []).push([
  [36, 8],
  {
    '0nhk': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('7xRU'), n('ERkP')),
        o = n.n(i),
        c = n('3XMw'),
        s = n.n(c),
        l = n('dgjd'),
        u = n('/yvb'),
        d = n('rHpw'),
        p = n('fn9Y'),
        m = n('I6Uj')
      function f(e) {
        var t = e.audioSpaceId,
          n = e.type,
          a = Object(l.a)(t),
          r = a.space,
          i = a.utils,
          c = i.hashtags().join(' '),
          s = h
        'icon' === n ? (s = v) : 'icon-borderless' === n && (s = g)
        var u = i.is.replayable ? void 0 : w.dmText,
          d = Boolean(null == r ? void 0 : r.is_employee_only)
        return o.a.createElement(
          m.a.Custom,
          { ButtonComponent: s, isFixed: e.isFixed, pullRight: e.pullRight, scribeNamespace: y, url: b(t) },
          d ? null : o.a.createElement(m.a.Action, { scribeNamespace: S.tweet, shareText: c, type: 'tweet' }),
          o.a.createElement(m.a.Action, { scribeNamespace: S.dm, shareText: u, type: 'dm' }),
          o.a.createElement(m.a.Action, { scribeNamespace: S.copy, shareText: c, type: 'copy' }),
          o.a.createElement(m.a.Action, { scribeNamespace: S.via, shareText: c, type: 'via' }),
        )
      }
      function h(e) {
        return o.a.createElement(
          u.a,
          r()({}, e, { borderColor: 'transparent', style: E.shareButton, type: 'primaryOutlined' }),
          w.share,
        )
      }
      function v(e) {
        return o.a.createElement(u.a, r()({}, k, { type: 'primaryOutlined' }, e))
      }
      function g(e) {
        return o.a.createElement(u.a, r()({}, k, e))
      }
      var b = function (e) {
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
        w = { share: s.a.ifea3114, dmText: s.a.c63dd2cb },
        k = {
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
        return g
      }),
        n.d(t, 'd', function () {
          return b
        }),
        n.d(t, 'e', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return R
        }),
        n.d(t, 'c', function () {
          return L
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        c = n('RhWx'),
        s = n.n(c),
        l =
          (n('2G9S'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('LW0h'),
          n('Ee2X'),
          n('vfdX'),
          n('lZm3'),
          n('z84I'),
          n('i4UL'),
          n('3voH'),
          n('KqXw'),
          n('MvUL'),
          n('Q/sS')),
        u = n('ERkP'),
        d = n.n(u),
        p = n('Chkh'),
        m = n('Xda3'),
        f = n('ssnq'),
        h = new f.a({ liveCaptions: [], pastCaptions: [], currentCaptionSequenceId: 0 }),
        v = h
      function g() {
        v.reset()
      }
      function b() {
        var e = l.o()
        return (
          d.a.useEffect(
            function () {
              if (e === l.c.On) {
                var t = p.a.subscribe(m.a.ChatCaption, w),
                  n = p.a.subscribe(m.a.ServerAudioTranscription, k)
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
      function y() {
        return h.useSlice(function (e) {
          var t = e.liveCaptions,
            n = e.pastCaptions
          return 0 !== t.length || 0 !== n.length
        })
      }
      function S(e) {
        h.setState(function (t) {
          e.filter(O).forEach(function (e) {
            var n = e.body.body,
              a = e.data.sender.twitter_id,
              r = T(t, a)
            ;-1 === r
              ? C(t, e)
              : (function (e, t) {
                  var n = e.length < t.length ? { longer: t, shorter: e } : { longer: e, shorter: t },
                    a = n.longer,
                    r = n.shorter
                  if (0 === a.length) return 1
                  return (
                    (a.length -
                      (function () {
                        for (
                          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                            n = Array(t.length + 1)
                              .fill(null)
                              .map(function () {
                                return Array(e.length + 1).fill(null)
                              }),
                            a = 0;
                          a <= e.length;
                          a += 1
                        )
                          n[0][a] = a
                        for (var r = 0; r <= t.length; r += 1) n[r][0] = r
                        for (var i = 1; i <= t.length; i += 1)
                          for (var o = 1; o <= e.length; o += 1) {
                            var c = e[o - 1] === t[i - 1] ? 0 : 1
                            n[i][o] = Math.min(n[i][o - 1] + 1, n[i - 1][o] + 1, n[i - 1][o - 1] + c)
                          }
                        return n[t.length][e.length]
                      })(a, r)) /
                    parseFloat(a.length)
                  )
                })(n, t.liveCaptions[r].text) > 0.1
              ? x(t, e, r)
              : P(t, e, r)
          })
        })
      }
      function E(e) {
        h.setState(function (t) {
          e.filter(O).forEach(function (e) {
            var n = e.data.sender.twitter_id,
              a = T(t, n)
            e.body.final
              ? (function (e, t, n) {
                  var a,
                    r = t.data.sender.twitter_id
                  if (n > -1) {
                    var i = e.liveCaptions.splice(n, 1)
                    a = o()(i, 1)[0].sequenceId
                  } else (e.currentCaptionSequenceId += 1), (a = e.currentCaptionSequenceId)
                  var c = L(t, { final: !0, sequenceId: a })
                  ;(e.pastCaptions = [].concat(s()(e.pastCaptions), [c])), I(e, r, t.timestamp)
                })(t, e, a)
              : -1 === a
              ? C(t, e)
              : !(function (e, t, n) {
                  var a = !1,
                    r = e.liveCaptions[n].text,
                    i = t.body.body
                  if (!t.body.final && i.length > 0 && r.length > 0) {
                    a = i.length / r.length < 0.2
                  }
                  return a
                })(t, e, a)
              ? x(t, e, a)
              : P(t, e, a)
          })
        })
      }
      function w(e) {
        return S(e), { clearHeapForMessageType: !0 }
      }
      function k(e) {
        return E(e), { clearHeapForMessageType: !0 }
      }
      function C(e, t) {
        var n = t.data.sender.twitter_id
        e.currentCaptionSequenceId += 1
        var a = L(t, { sequenceId: e.currentCaptionSequenceId })
        return e.liveCaptions.push(a), I(e, n, t.timestamp), a
      }
      function x(e, t, n) {
        var a = e.liveCaptions.splice(n, 1),
          r = o()(a, 1)[0],
          i = L(t, { sequenceId: r.sequenceId, timestamp: r.timestamp })
        return e.liveCaptions.push(i), i
      }
      function I(e, t, n) {
        e.liveCaptions
          .filter(function (e) {
            return !(e.speaker.id_str === t) && n - e.timestamp > 250
          })
          .forEach(function (t) {
            var n = e.liveCaptions.findIndex(function (e) {
                return e.sequenceId === t.sequenceId
              }),
              a = e.liveCaptions.splice(n, 1),
              r = o()(a, 1)[0]
            e.pastCaptions.push(r)
          })
      }
      function P(e, t, n) {
        var a = t.data.sender.twitter_id,
          r = e.liveCaptions.splice(n, 1),
          i = o()(r, 1)[0]
        ;(i.final = !0), (e.pastCaptions = [].concat(s()(e.pastCaptions), [i]))
        var c = C(e, t)
        return I(e, a, t.timestamp), c
      }
      function T(e, t) {
        return e.liveCaptions.findIndex(function (e) {
          return e.speaker.id_str === t
        })
      }
      function O(e) {
        var t = e.body.body
        return !!t && t.length > 0
      }
      function R(e) {
        var t = e.body.body,
          n = e.type
        return m.a.Chat === n && t.startsWith('[cc]')
      }
      function L(e, t) {
        var n = e.body.final,
          a = e.data,
          i = a.sender,
          o = a.sender.twitter_id,
          c = e.timestamp,
          s = e.body.body,
          l = t.sequenceId
        return (
          (s = s.replace(/^\[cc\]\s?/, '')),
          r()(
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
        return C
      })
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = (n('uFXj'), n('ERkP')),
        s = n.n(c),
        l = n('tM6R'),
        u = n('fs1G'),
        d = n('0nhk'),
        p = n('MWbm'),
        m = n('t62R'),
        f = n('fzjU'),
        h = n('/yvb'),
        v = n('efqG'),
        g = n('cm6r'),
        b = n('rHpw'),
        y = n('3XMw'),
        S = n.n(y),
        E = n('hOZg'),
        w = n('7Mjr'),
        k = ['audioSpaceId', 'dismiss', 'type']
      function C(e) {
        if (e.count < 1) return null
        var t = { count: e.count, labelType: 'otherListeners' }
        return s.a.createElement(
          p.a,
          { style: O.otherParticipantsWrapper },
          s.a.createElement(
            I,
            e,
            s.a.createElement(
              p.a,
              { style: O.otherParticipantsContainer },
              s.a.createElement(
                p.a,
                { style: O.otherParticipantsText },
                s.a.createElement(
                  m.b,
                  { size: T.fontSize, weight: 'bold' },
                  s.a.createElement(f.a.ParticipantsCount, t),
                ),
              ),
              s.a.createElement(P, e),
            ),
          ),
        )
      }
      function x(e) {
        var t = e.audioSpaceId,
          n = e.dismiss,
          a = e.type,
          r = o()(e, k),
          i = s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              p.a,
              { style: O.popoverSheetDescription },
              s.a.createElement(
                m.b,
                { color: 'gray700', size: 'body' },
                s.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'b9c4cfcb' },
                  s.a.createElement(m.b, { color: 'text', link: l.a.help, withUnderline: !0 }, S.a.g646959f),
                ),
              ),
            ),
            s.a.createElement(m.b, { size: 'body', weight: 'bold' }, R.shareWithPeople),
            s.a.createElement(
              p.a,
              { style: O.popoverShareButtonContainer },
              s.a.createElement(d.a, { audioSpaceId: t }),
            ),
          )
        return 'popover' === a
          ? s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                p.a,
                { style: O.popoverTitle },
                s.a.createElement(
                  m.b,
                  { size: 'title4', weight: 'heavy' },
                  s.a.createElement(f.a.ParticipantsCount, r),
                ),
              ),
              i,
            )
          : s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                p.a,
                { style: O.popoverSheetTitleContainer },
                s.a.createElement(
                  p.a,
                  { style: O.popoverSheetTitle },
                  s.a.createElement(
                    m.b,
                    { size: 'headline2', weight: 'heavy' },
                    s.a.createElement(f.a.ParticipantsCount, r),
                  ),
                ),
                s.a.createElement(h.a, {
                  accessibilityLabel: R.close,
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: R.close },
                  icon: s.a.createElement(E.a, { style: O.popoverSheetClose }),
                  onPress: n,
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
            renderContent: function (n, a) {
              return s.a.createElement(x, r()({ audioSpaceId: e.audioSpaceId, dismiss: n, type: a }, t))
            },
            withArrow: !0,
            withDefaultContainer: !0,
          },
          s.a.createElement(
            g.a,
            { accessibilityLabel: f.a.ParticipantsCount.generateText(t), onPress: u.a },
            e.children,
          ),
        )
      }
      function P(e) {
        return e.interactive
          ? s.a.createElement(p.a, { style: O.otherParticipantsArrow }, s.a.createElement(w.a, null))
          : null
      }
      var T = { fontSize: 'body' },
        O = b.a.create(function (e) {
          var t = e.lineHeightsPx[T.fontSize],
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
            a = { width: t, height: t, color: e.colors.text },
            r = { marginVertical: e.spacesPx.space12 },
            i = { color: e.colors.gray300, width: e.spacesPx.space24, height: e.spacesPx.space24 }
          return {
            otherParticipantsWrapper: { width: '100%' },
            otherParticipantsContainer: n,
            otherParticipantsText: { flex: 1 },
            otherParticipantsArrow: a,
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
        R = { close: S.a.ia5e7487, share: S.a.ifea3114, shareWithPeople: S.a.i7f853ea }
    },
    '8A5z': function (e, t, n) {
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
    A7Vd: function (e, t, n) {
      'use strict'
      n.d(t, 'd', function () {
        return o
      }),
        n.d(t, 'c', function () {
          return c
        }),
        n.d(t, 'b', function () {
          return s
        }),
        n.d(t, 'f', function () {
          return l
        }),
        n.d(t, 'j', function () {
          return u
        }),
        n.d(t, 'e', function () {
          return d
        }),
        n.d(t, 'a', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'l', function () {
          return f
        }),
        n.d(t, 'm', function () {
          return h
        }),
        n.d(t, 'k', function () {
          return v
        }),
        n.d(t, 'n', function () {
          return g
        }),
        n.d(t, 'h', function () {
          return b
        }),
        n.d(t, 'i', function () {
          return y
        })
      var a = n('yiKp'),
        r = n.n(a),
        i =
          (n('+KXO'),
          new (n('ssnq').a)({
            id: null,
            api: null,
            state: null,
            guests: { lookup: {}, signature: '' },
            chatToken: null,
          })),
        o = i
      function c(e, t, n) {
        var a,
          o = 'SPEAKERS',
          c = { host: { audioLevel: 0 } }
        if (n) {
          c.host.audioLevel = S(n.audioLevels.host)
          for (var s = Object.keys(n.guests), l = 0; l < s.length; l++) {
            var u = s[l],
              d = n.guests[u],
              p = d.UserId,
              m = S(n.audioLevels.guests[u])
            ;(c[p] = { guest: d, audioLevel: m }), (o += '-'.concat(p))
          }
        }
        var f = { signature: o, lookup: c },
          h = (null === (a = t.tracks[t.currentTrackId]) || void 0 === a ? void 0 : a.chatToken) || null
        i.setState(function (n) {
          return r()(r()({}, n), {}, { id: e, state: t, guests: f, chatToken: h })
        })
      }
      function s(e, t) {
        i.setState(function (n) {
          return r()(r()({}, n), {}, { id: e, api: t })
        })
      }
      function l(e) {
        return i.useSlice(function (t) {
          var n = e.isHost ? 'host' : e.periscopeUserId
          if (!n) return 0
          var a = t.guests.lookup[n],
            r = null == a ? void 0 : a.audioLevel
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
            equalityFn: function (e, t, n, a) {
              return n.guests.signature === a.guests.signature
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
          n = e
        return n || (n = i.getState().state), null === (t = n) || void 0 === t ? void 0 : t.tracks[n.currentTrackId]
      }
      function m() {
        return o.useSlice(function (e) {
          var t = e.state
          return null == t ? void 0 : t.tracks[null == t ? void 0 : t.currentTrackId]
        })
      }
      function f() {
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
      function g() {
        return o.useSlice(function (e) {
          return e.api
        })
      }
      function b() {
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
    AMlz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return c
      })
      var a = n('Q/sS'),
        r = n('ERkP'),
        i = n.n(r),
        o = n('v6aA')
      function c() {
        var e = a.m(),
          t = i.a.useContext(o.a).featureSwitches,
          n = t.getNumberValue('voice_rooms_clip_duration')
        return {
          isCreationEnabled: e && t.isTrue('voice_rooms_clipping_enabled'),
          durationMs: 1e3 * n,
          durationSeconds: n,
        }
      }
    },
    BXJq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = (n('7x/C'), n('JtPf'), n('Qavd'), n('ERkP')),
        o = n.n(i),
        c = n('dgjd')
      function s(e) {
        var t = Object(c.a)(e),
          n = t.handlers,
          a = t.space,
          i = o.a.useState(!1),
          s = r()(i, 2),
          l = s[0],
          u = s[1],
          d = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 }
        return (
          (function (e) {
            return e && e.host && e.scheduled_start && ('NotStarted' === e.state || 'PrePublished' === e.state)
          })(a) &&
            ((d.hasReminderSet = Boolean(null == a ? void 0 : a.is_subscribed)),
            (d.onClick = function () {
              var e = function () {
                return u(!1)
              }
              u(!0), d.hasReminderSet ? n.unsubscribe().finally(e) : n.subscribe().finally(e)
            }),
            (d.scheduledStart = null == a ? void 0 : a.scheduled_start)),
          { props: d, isSubscribing: l }
        )
      }
    },
    Chkh: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return m
      })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('RhWx'),
        o = n.n(i),
        c = n('yiKp'),
        s = n.n(c),
        l =
          (n('Ee2X'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('2G9S'),
          n('z84I'),
          n('LW0h'),
          n('+KXO'),
          n('6U7i'),
          n('A7Vd')),
        u = n('2C8o'),
        d = n('Xda3'),
        p = n('ssnq')
      function m(e, t) {
        var n,
          a = 0,
          r = e.length - 1,
          i = -1,
          o = -1
        if (a > r) return -1
        for (; a <= r; ) {
          if (((o = t(e[(i = Math.floor((a + r) / 2))])), void 0 !== n && 0 !== o)) return n
          o >= 0 ? (a = i + 1) : (r = i - 1), 0 === o && (n = i)
        }
        return void 0 !== n || o > 0 ? i : i - 1
      }
      t.a = new (function () {
        var e,
          t = !1,
          n = 0,
          a = 0,
          i = 0,
          c = 0,
          f = {},
          h = new p.a({})
        function v() {
          ;(t = !1), clearTimeout(e)
        }
        function g(e, t) {
          if (Array.isArray(f[e])) {
            var n = m(f[e], function (e) {
              return t.ntpTimeInSeconds - e.ntpTimeInSeconds
            })
            f[e].splice(n + 1, 0, t)
          } else f[e] = [t]
        }
        function b() {
          !(function () {
            function e() {
              return Object.keys(f)
                .filter(function (e) {
                  return f[e] && f[e].length > 0
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
                a === n ? (i = n + (100 * (c += 1)) / 1e3) : ((c = 0), (i = a = n)),
                e().forEach(function (e) {
                  var n = f[e]
                  if (n && 0 !== n.length) {
                    var a = t[e] || [],
                      c = m(n, function (e) {
                        return i - e.ntpTimeInSeconds
                      })
                    if (!(c < 0)) {
                      var u = n.splice(0, c + 1)
                      l = s()(s()({}, l), {}, r()({}, e, [].concat(o()(a), o()(u))))
                    }
                  }
                }),
                l
              )
            })
          })(),
            t && (e = setTimeout(b, 100))
        }
        return (
          l.d.subscribe(
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
                    case d.a.Chat:
                      Object(u.a)(e) && g(d.a.ChatCaption, e)
                      break
                    case d.a.ServerAudioTranscription:
                    case d.a.Heart:
                    case d.a.HydraControlMessage:
                      g(e.type, e)
                  }
                })(e)
              })
            },
            reset: function () {
              for (var e in (v(), f)) delete f[e]
              ;(n = 0), (a = 0), (i = 0), (c = 0), h.reset()
            },
            setCurrentNtpTimeSeconds: function (e) {
              n = e
            },
            stacks: f,
            start: function () {
              ;(t = !0), b()
            },
            stop: v,
            store: h,
            subscribe: function (e, t) {
              return h.subscribe(
                function (t) {
                  return t[e] || []
                },
                function (n) {
                  var a
                  n &&
                    n.length > 0 &&
                    t(n).clearHeapForMessageType &&
                    ((a = e),
                    h.setState(function (e) {
                      return s()(s()({}, e), {}, r()({}, a, []))
                    }))
                },
              )
            },
          }
        )
      })()
    },
    'Fg/a': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return j
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
        h = (n('2G9S'), n('849X'), n('TJCb'), n('ERkP')),
        v = n.n(h),
        g = n('Pc/x'),
        b = n('6/RC'),
        y = (n('KqXw'), n('WNMA'), n('Z5jE')),
        S = n('rxPX'),
        E = function (e, t) {
          return Object(y.a)(t.match)
        },
        w = function (e) {
          return function (t, n, a) {
            return a.api.AudioSpaces.byId(e, { isMetatagsQuery: !0 })
          }
        },
        k = Object(S.a)()
          .propsFromState(function () {
            return { broadcastId: E }
          })
          .propsFromActions(function () {
            return { fetchAudioSpace: w }
          }),
        C = (n('1t7P'), n('jQ/y'), n('3XMw')),
        x = n.n(C),
        I = n('rJoH'),
        P = n('fzjU'),
        T = n('Tg44')
      function O(e) {
        var t = e.space
        if (!t) return null
        var n = (function (e) {
          var t = (function (e) {
              var t,
                n,
                a,
                r,
                i = null == e || null === (t = e.host) || void 0 === t ? void 0 : t.display_name,
                o = i ? R.hostSpace({ name: i }) : R.hostSpaceFallback,
                c = e.title || o,
                s = R.descriptionGeneric,
                l = (null == e ? void 0 : e.participants.total) || 0,
                u = P.a.formatCountShort(l),
                d = R.descriptionListening({ count: u })
              if (e.state === T.a.SpaceState.Running)
                (n = R.titleRunning({ spaceTitle: c })),
                  (a = R.descriptionFormatRunning({ hostSpace: o, descriptionListening: d, descriptionGeneric: s })),
                  (r = L.ttl.Frequent)
              else if (e.state === T.a.SpaceState.NotStarted || e.state === T.a.SpaceState.PrePublished) {
                var p = R.scheduledSpaceGeneric
                ;(n = R.titleScheduled({ date: p, spaceTitle: c })),
                  (a = R.descriptionFormatScheduled({ hostSpace: o, descriptionGeneric: s })),
                  (r = L.ttl.Frequent)
              } else
                (n = R.titleEnded({ spaceTitle: c })),
                  (a = R.descriptionFormatEnded({ hostSpace: o, descriptionGeneric: s })),
                  (r = L.ttl.LongLivedCache)
              var m = 'https://twitter.com/i/spaces/'.concat(e.rest_id)
              return { title: n, canonical: m, description: a, ttl: r }
            })(e),
            n = t.canonical,
            a = t.description,
            r = t.title,
            i = t.ttl
          return {
            type: 'website',
            canonical: n,
            title: r,
            description: a,
            image: L.image.url,
            imageType: L.image.type,
            imageW: L.image.width,
            imageH: L.image.height,
            imageAlt: L.image.alt,
            ttl: i,
          }
        })(t)
        return v.a.createElement(I.a, n)
      }
      var R = {
          twitterSpaces: x.a.gaa01f2c,
          hostSpace: x.a.b6d3e0ee,
          hostSpaceFallback: x.a.ab4fc8bb,
          descriptionGeneric: x.a.fec3c1ef,
          descriptionListeners: x.a.ce447fcb,
          descriptionListening: x.a.ef7da97e,
          scheduledSpaceGeneric: x.a.f8464691,
          titleRunning: x.a.a065e7e7,
          titleScheduled: x.a.hd5e7b20,
          titleEnded: x.a.f826f7ee,
          descriptionFormatRunning: x.a.b2a94e92,
          descriptionFormatScheduled: x.a.f6432ce5,
          descriptionFormatEnded: x.a.f6432ce5,
        },
        L = {
          ttl: { Frequent: 300, LongLivedCache: 86400 },
          image: {
            type: 'image/jpeg',
            url: 'https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.2.jpg',
            width: 1200,
            height: 630,
            alt: R.twitterSpaces,
          },
        },
        _ = n('G8HL'),
        M = (function (e) {
          u()(n, e)
          var t = p()(n)
          function n() {
            var e
            r()(this, n)
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) i[o] = arguments[o]
            return (e = t.call.apply(t, [this].concat(i))), f()(s()(e), 'state', { space: null }), e
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  this.props
                    .fetchAudioSpace(this.props.broadcastId)
                    .catch(function () {
                      return null
                    })
                    .then(function (t) {
                      !t || t instanceof Error || e.setState({ space: t })
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.a.createElement(
                    v.a.Fragment,
                    null,
                    v.a.createElement(z, this.props),
                    v.a.createElement(O, { space: this.state.space }),
                  )
                },
              },
            ]),
            n
          )
        })(v.a.Component)
      function z(e) {
        return (
          v.a.useEffect(function () {
            b.canUseDOM && g.a.proxsee.login()
          }, []),
          e.children
        )
      }
      var j = k(Object(_.a)(M))
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
          return m
        }),
        n.d(t, 'd', function () {
          return f
        })
      var a = n('K1iM'),
        r = n.n(a),
        i = n('ERkP'),
        o = n.n(i),
        c = n('v6aA'),
        s = n('Chkh'),
        l = n('Xda3'),
        u = new (n('ssnq').a)({}),
        d = u
      function p(e) {
        return u.useSlice(function (t) {
          return e ? t[e] : null
        })
      }
      function m(e) {
        u.setState(function (t) {
          var n
          null === (n = t[e.participantId]) || void 0 === n || n.shift()
        })
      }
      function f() {
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
            var n,
              a = r()(e)
            try {
              for (a.s(); !(n = a.n()).done; ) {
                var i,
                  o = v(n.value),
                  c = o.reaction,
                  s = o.sender
                t[s.participantId] || (t[s.participantId] = []),
                  null === (i = t[s.participantId]) || void 0 === i || i.push(c)
              }
            } catch (l) {
              a.e(l)
            } finally {
              a.f()
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
    HmZq: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'reset', function () {
          return p
        }),
        n.d(t, 'getTranscript', function () {
          return m
        }),
        n.d(t, 'insert', function () {
          return f
        }),
        n.d(t, 'onCompleteHistory', function () {
          return h
        }),
        n.d(t, 'seek', function () {
          return v
        }),
        n.d(t, 'publishToQueue', function () {
          return g
        })
      n('z84I'), n('LW0h'), n('7x/C'), n('jwue'), n('+oxZ'), n('Ee2X'), n('M+/F')
      var a = n('2C8o'),
        r = n('Q/sS'),
        i = n('A7Vd'),
        o = n('G/+M'),
        c = n('b2fv'),
        s = n('VY6S'),
        l = n('Chkh'),
        u = n('Xda3'),
        d = []
      function p() {
        d = []
      }
      function m(e, t) {
        return d
          .filter(function (n) {
            return (
              n.type === u.a.ServerAudioTranscription &&
              n.body.final &&
              n.body.ntpTimeInSeconds >= e &&
              n.body.ntpTimeInSeconds <= t &&
              Boolean(n.body.body)
            )
          })
          .map(function (e) {
            return a.c(e, {})
          })
      }
      function f() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        t.forEach(function (e) {
          var t = Object(l.b)(d, function (t) {
            return e.ntpTimeInSeconds - t.ntpTimeInSeconds
          })
          d.splice(t + 1, 0, e)
        })
      }
      function h() {
        var e,
          t = null === (e = i.a()) || void 0 === e ? void 0 : e.id3NtpTime
        t && g(t)
      }
      var v = Object(s.a)(function (e) {
        var t = r.i.getState().startTimeMs
        if (t) {
          var n = t + e
          g(Object(c.a)(n))
        }
      }, 100)
      function g(e) {
        l.a.reset(), a.b(), o.b.reset()
        var t = Object(l.b)(d, function (t) {
          return e - t.ntpTimeInSeconds
        })
        d.slice(t).forEach(function (e) {
          return l.a.publish(e)
        }),
          l.a.start()
      }
    },
    ISLN: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      n('uFXj')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('cm6r'),
        o = n('CDzS'),
        c = n('rHpw')
      function s(e) {
        var t = e.accessibilityLabel,
          n = e.children,
          a = e.onPress,
          c = e.style
        return r.a.createElement(
          i.a,
          { accessibilityLabel: t, onPress: a, style: [l.button, c] },
          r.a.createElement(o.a.Default, { style: l.gradient }, n),
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
        return ae
      })
      var a = {}
      n.r(a),
        n.d(a, 'buildPlayerProps', function () {
          return G
        }),
        n.d(a, 'buildDockConfig', function () {
          return J
        })
      var r = {}
      n.r(r),
        n.d(r, 'buildPlayerProps', function () {
          return $
        }),
        n.d(r, 'buildDockConfig', function () {
          return ee
        })
      var i = n('yiKp'),
        o = n.n(i),
        c = n('ddV6'),
        s = n.n(c),
        l = (n('849X'), n('TJCb'), n('Nsgw')),
        u = n('OoQt'),
        d = n('Xda3'),
        p = n('ERkP'),
        m = n.n(p),
        f = n('QEWO'),
        h = n('v6aA'),
        v = n('HmZq'),
        g = n('Q/sS'),
        b = n('A7Vd'),
        y = (n('jwue'), n('7x/C'), n('+oxZ'), n('VKFJ')),
        S = n('MWbm'),
        E = n('n7AW'),
        w = n('rHpw'),
        k = n('t62R')
      function C(e) {
        var t = (function (e) {
          var t = m.a.useRef({ lastActive: { displayName: '', audioLevel: 0 } }),
            n = Object(y.b)(e).speakers,
            a = b.j(),
            r = { displayName: '', audioLevel: 0 }
          if (
            (n.forEach(function (e) {
              var t = y.b.isParticipantHost(e.kind) || !e.periscopeUserId ? 'host' : e.periscopeUserId,
                n = a[t]
              n &&
                n.audioLevel > r.audioLevel &&
                e.user.display_name &&
                ((r.displayName = e.user.display_name), (r.audioLevel = n.audioLevel))
            }),
            r.audioLevel > 0)
          )
            return (t.current.lastActive = r), t.current.lastActive
          if (t.current.lastActive.displayName) return o()(o()({}, t.current.lastActive), {}, { audioLevel: 0 })
          var i = s()(n, 1)[0]
          return o()(o()({}, r), {}, { displayName: i.user.display_name || '' })
        })(e.audioSpaceId)
        return m.a.createElement(x, t)
      }
      function x(e) {
        var t = [I.activeSpeakerIndicatorName, 0 === e.audioLevel && I.activeSpeakerIndicatorNameInactive]
        return m.a.createElement(
          S.a,
          { style: I.activeSpeakerIndicatorContainer },
          m.a.createElement(E.a, {
            audioLevel: e.audioLevel,
            size: w.a.theme.spacesPx.space16,
            withPersistZeroLevel: !0,
          }),
          m.a.createElement(k.b, { style: t }, e.displayName),
        )
      }
      var I = w.a.create(function (e) {
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
        P = n('K1iM'),
        T = n.n(P),
        O = (n('KqXw'), n('3uku'), n('jQ3i'), n('x4t0'), n('1YZw')),
        R = n('Chkh'),
        L = n('3XMw'),
        _ = n.n(L),
        M = n('zCf4'),
        z = n('dgjd'),
        j = n('xZGM'),
        H = n('uDfI')
      function A(e) {
        var t,
          n,
          a,
          r = e.audioSpaceId,
          i = e.isSideNavLayout
        return (
          (function (e) {
            var t = Object(z.a)(e).utils,
              n = g.p()
            m.a.useEffect(
              function () {
                g.i.getState().isReplay || t.is.Running || n('exit')
              },
              [n, t.is.Running],
            )
          })(r),
          (function (e) {
            var t = Object(z.a)(e),
              n = t.space,
              a = t.utils,
              r = b.h(),
              i = b.n(),
              o = null == n ? void 0 : n.replay_start_time,
              c = (i || {}).scrubToFraction,
              s = g.m()
            m.a.useEffect(
              function () {
                return b.d.subscribe(
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
              m.a.useEffect(
                function () {
                  a.is.replayable && a.is.joined && c && r && o && c((1e3 * o) / r)
                },
                [c, a.is.replayable, a.is.joined, o, r],
              )
          })(r),
          (function (e) {
            var t = g.q(),
              n = g.p(),
              a = Object(M.g)(),
              r = a.key,
              i = a.pathname,
              o = m.a.useRef({ key: r, pathname: i })
            m.a.useEffect(
              function () {
                if (!e) {
                  if (o.current.key !== r) B.spaceUrl.test(o.current.pathname) || 'collapse' === t || n('collapse')
                  ;(o.current.key = r), (o.current.pathname = i)
                }
              },
              [r, i, e, n, t],
            )
          })(i),
          (t = m.a.useContext(h.a).loggedInUserId),
          (n = g.p()),
          (a = Object(H.c)()),
          m.a.useEffect(
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
                        ) && (n('exit'), a(Object(O.b)({ text: N.removedFromSpace })))
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
            [t, n, a],
          ),
          (function () {
            var e = Object(H.c)(),
              t = g.k().openSheet,
              n = g.q() === g.a.full,
              a = Object(H.d)(D)
            m.a.useEffect(
              function () {
                var r
                return (
                  n &&
                    a &&
                    (r = setTimeout(function () {
                      t(g.b.generalNux), e(Object(j.z)(j.v))
                    }, 2e3)),
                  function () {
                    return clearTimeout(r)
                  }
                )
              },
              [n, a],
            )
          })(),
          null
        )
      }
      var D = function (e) {
        return Object(j.D)(e, j.v)
      }
      var B = { spaceUrl: /i\/spaces\/.+/ },
        N = { removedFromSpace: _.a.jd859c9c },
        F = n('fzjU'),
        V = n('xVWt')
      function U(e) {
        var t = e.audioSpaceId,
          n = Object(z.a)(t),
          a = n.space,
          r = n.utils,
          i = r.title(),
          o = (null == a ? void 0 : a.participants.total) || 0
        return m.a.createElement(F.a, {
          activeSpeakers: m.a.createElement(C, { audioSpaceId: t }),
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
      function W(e) {
        var t = m.a.useContext(h.a).featureSwitches,
          n = m.a.useState(!1),
          a = s()(n, 2),
          r = a[0],
          i = a[1]
        var c = o()(
            o()({}, e),
            {},
            {
              onToggleCollapsed: function () {
                r || g.d(), i(q)
              },
            },
          ),
          l = t.isTrue('voice_rooms_expanded_dock') && !r
        return m.a.createElement(
          m.a.Fragment,
          null,
          m.a.createElement(U, c),
          l ? m.a.createElement(V.a, c) : null,
          m.a.createElement(A, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }),
        )
      }
      function q(e) {
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
        var n = t.activeItem
        return {
          broadcastId: n.id,
          disablePlaybackCoordination: !0,
          mediaKey: n.mediaKey,
          isLive: n.isLive,
          onPlayerApi: function (e) {
            b.b(n.id, e)
          },
          onPlayerState: function (e, t) {
            b.c(n.id, e, t)
          },
        }
      }
      function J(e) {
        var t = e.audioDockProps,
          n = e.commonApi,
          a = e.context,
          r = (e.history, K(a))
        if (!r) return null
        var i = r.activeItem
        return m.a.createElement(
          W,
          o()(
            {
              key: i.id,
              audioSpaceId: i.id,
              onRequestClose: function () {
                n.clear(), v.reset(), g.i.reset()
              },
            },
            t,
          ),
        )
      }
      n('tVqn'), n('MvUL')
      var X = n('zrc3'),
        Z = n('abiO'),
        Y = n('pupE')
      function Q(e) {
        var t,
          n = s()(e.activeItem, 1)[0],
          a = e.hydrateVoiceTweetTrack(n.conversationId),
          r = Object(X.a)(a.tweets, function (e) {
            return e.id_str === n.id
          }),
          i = a.tweets[r]
        if (!i) return null
        var o = (null === (t = i.extended_entities) || void 0 === t ? void 0 : t.media) || [],
          c = s()(o, 1)[0],
          l = 'photo' !== (null == c ? void 0 : c.type) ? c : null
        return { activeItem: n, track: a, media: l, activeIndex: r, activeTweet: i }
      }
      function $(e) {
        var t = e.commonApi,
          n = Q(e.context)
        if (!n) return { media: null }
        var a = n.activeIndex,
          r = n.activeItem,
          i = n.media,
          o = n.track.tweets[a + 1]
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
          n = e.commonApi,
          a = e.context,
          r = e.history,
          i = s()(a.playerApi, 1)[0],
          o = s()(a.playerState, 1)[0],
          c = n.currentTrack
        if (!o || !i || !c) return null
        var l = Q(a)
        if (!l) return null
        var u = l.activeIndex,
          d = l.activeTweet,
          p = l.media,
          f = l.track,
          h = o.isMuted,
          v = o.isPlaying,
          g = o.isSeeking,
          b = o.volume,
          y = 0,
          S = 0
        te(f.tweets, function (e) {
          var t = e.endMs
          e.i === u - 1 && (S = t), (y = t)
        })
        var E = (p && p.id_str === c.contentId && c.currentTimeMs) || 0,
          w = S + E,
          k = null == p ? void 0 : p.url,
          C = d.full_text,
          x = k && C ? C.replace(k, '').trim() : C,
          I = d.user
        return m.a.createElement(Z.a, {
          isWide: t.isSideNavLayout,
          width: t.width,
          isMuted: h,
          isPlaying: v,
          isSeeking: g,
          progressMs: w,
          durationMs: y,
          volume: 100 * b,
          title: x,
          user: I,
          onRequestClose: n.clear,
          onTogglePlayback: n.togglePlayback,
          onDockPress: function () {
            return r.push(d.permalink)
          },
          onMuteToggle: n.toggleMute,
          onVolumeChange: n.setVolume,
          onSeek: function (e) {
            te(f.tweets, function (t) {
              var a = t.durationMs,
                r = t.endMs,
                o = t.i,
                c = t.startMs,
                s = t.tweet
              if (e >= c && e <= r) {
                var l = e - c
                if (o === u) {
                  var d = l / a
                  i.scrubToFraction(d)
                } else n.load.voiceTweet(s, l)
                return !0
              }
            })
          },
        })
      }
      function te(e, t) {
        for (var n = 0, a = 0; a < e.length; a++) {
          var r = e[a],
            i = Y.a.getVoiceTweetDuration(r),
            o = n + i
          if (t({ i: a, tweet: r, startMs: n, endMs: o, durationMs: i })) break
          n = o
        }
      }
      var ne = { default: { buildDockConfig: n('0zXz').a }, space: a, voiceTweet: r }
      function ae() {
        var e = m.a.useRef({}),
          t = m.a.useContext(h.a).history,
          n = m.a.useContext(u.a),
          a = s()(n.activeItem, 2),
          r = a[0],
          i = a[1],
          c = s()(n.playerApi, 2),
          p = c[0],
          v = c[1],
          g = s()(n.playerState, 2),
          b = g[0],
          y = g[1],
          S = s()(n.guestsState, 2),
          E = S[0],
          w = S[1],
          k = re(b)
        ;(e.current.playerApi = p), (e.current.playerState = b)
        var C = m.a.useMemo(
            function () {
              return function () {
                d.c(), i(null)
              }
            },
            [i],
          ),
          x = m.a.useMemo(function () {
            return function () {
              var t = e.current,
                n = t.playerApi,
                a = t.playerState
              n && a && (a.isPlaying ? n.pause : n.play)()
            }
          }, []),
          I = m.a.useMemo(function () {
            return function () {
              var t = e.current,
                n = t.playerApi,
                a = t.playerState
              n && a && (a.isMuted ? n.unmute : n.mute)()
            }
          }, []),
          P = {
            space: function (e, t, n) {
              i({ type: f.a.space, id: e, mediaKey: t, isLive: n })
            },
            voiceTweet: function (e, t) {
              i({ type: f.a.voiceTweet, id: e.id_str, conversationId: l.a(e), startTimeMs: t })
            },
          },
          T = {
            load: P,
            clear: C,
            currentTrack: k,
            toggleMute: I,
            togglePlayback: x,
            setVolume: m.a.useMemo(function () {
              return function (t) {
                var n = e.current.playerApi
                n && n.setVolume(t / 100)
              }
            }, []),
          }
        return {
          activeItem: r,
          load: P,
          clear: C,
          player: { api: p, state: b, guests: E, currentTrack: k, toggleMute: I, togglePlayback: x },
          config: {
            dock: function (e) {
              if (!r) return ne.default.buildDockConfig()
              switch (r.type) {
                case f.a.space:
                  return ne.space.buildDockConfig({ history: t, context: n, commonApi: T, audioDockProps: e })
                case f.a.voiceTweet:
                  return ne.voiceTweet.buildDockConfig({ history: t, context: n, commonApi: T, audioDockProps: e })
                default:
                  return ne.default.buildDockConfig()
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
                    y(e), t && w(t)
                  },
                }
              if (!r) return t
              switch (r.type) {
                case f.a.space:
                  e = ne.space.buildPlayerProps({ context: n, commonApi: T })
                  break
                case f.a.voiceTweet:
                  e = ne.voiceTweet.buildPlayerProps({ context: n, commonApi: T })
                  break
                default:
                  throw new Error('[AudioContext:Player] unhandled active item type ['.concat(r.type, ']'))
              }
              return o()(o()({}, t), e)
            },
          },
          audioSpaces: { cache: n.audioSpaceCache },
        }
      }
      var re = function (e) {
        return e && e.tracks[e.currentTrackId]
      }
    },
    O07O: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return N
      })
      var a = n('HmZq'),
        r = n('Q/sS'),
        i = n('A7Vd'),
        o = n('ERkP'),
        c = n.n(o),
        s = n('tI3i'),
        l = n.n(s),
        u = n('fs1G'),
        d = n('/yvb'),
        p = n('rHpw')
      function m(e) {
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
            style: f.button,
          })
        )
      }
      var f = p.a.create(function (e) {
          return { button: { height: '100%' } }
        }),
        h = n('3XMw'),
        v = n.n(h),
        g = (n('z84I'), n('akpX')),
        b = n('dgjd'),
        y = n('MWbm'),
        S = n('mjJ+'),
        E = n('t62R')
      function w(e) {
        var t = Object(b.a)(e.audioSpaceId).utils,
          n = i.m(),
          a = x.map(function (e) {
            var a = e.rate
            return {
              text: e.text,
              disabled: n === a,
              onClick: function () {
                t.scribe(':audiospace:replay:recording:speed:click')
                var e = i.d.getState().api
                e && e.setPlaybackRate(a)
              },
            }
          })
        return c.a.createElement(m, {
          accessibilityLabel: C.accessibility({ rate: ''.concat(n) }),
          icon: c.a.createElement(w.Icon, { playbackRate: n }),
          renderMenu: function (e) {
            return c.a.createElement(S.a, { isFixed: !0, items: a, onCloseRequested: e, shouldCloseOnClick: !0 })
          },
        })
      }
      w.Icon = function (e) {
        var t = e.playbackRate
        return c.a.createElement(
          y.a,
          { style: k.playbackRateIcon },
          c.a.createElement(E.b, { style: k.playbackRateIconText, weight: 'normal' }, t),
          c.a.createElement(g.a, { style: k.playbackRateIconSvg }),
        )
      }
      var k = p.a.create(function (e) {
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
        I = n('Pl95'),
        P = n('0nhk'),
        T = n('AMlz'),
        O = n('5Ixf'),
        R = n('AtEG'),
        L = n('yiKp'),
        _ = n.n(L),
        M = n('Lsrn'),
        z = n('k/Ka'),
        j = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      j.metadata = { width: 24, height: 24 }
      var H = j,
        A = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(z.a)(
            'svg',
            _()(
              _()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [M.a.root, e.style],
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
      A.metadata = { width: 24, height: 24 }
      var D = A,
        B = n('abiO')
      function N(e) {
        var t = Object(T.a)()
        return c.a.createElement(
          y.a,
          { style: U.controlsContainer },
          c.a.createElement(N.SeekSlider, null),
          c.a.createElement(
            y.a,
            { style: U.buttonsContainer },
            c.a.createElement(N.Captions, { audioSpaceId: e.audioSpaceId }),
            c.a.createElement(w, { audioSpaceId: e.audioSpaceId }),
            c.a.createElement(N.Play, null),
            c.a.createElement(N.SkipAhead, null),
            t.isCreationEnabled
              ? c.a.createElement(N.Clip, { audioSpaceId: e.audioSpaceId })
              : c.a.createElement(P.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon-borderless' }),
          ),
        )
      }
      function F() {
        var e = i.a()
        e && null != e && e.currentTimeMs && V(e.currentTimeMs + q)
      }
      function V(e) {
        var t = i.d.getState().api,
          n = i.a()
        if (null != n && n.durationMs && null != t && t.scrubToFraction) {
          a.seek(e)
          var r = e / n.durationMs
          t.scrubToFraction(r)
        }
      }
      ;(N.SeekSlider = function () {
        var e = N.useSeekSliderProps(),
          t = e.currentTimeMs,
          n = e.durationMs,
          a = e.externalSeeking,
          r = e.onSeek
        return c.a.createElement(B.a.SeekSlider, {
          durationMs: n,
          externalSeeking: a,
          onSeek: r,
          progressMs: t,
          withTimes: !0,
        })
      }),
        (N.useSeekSliderProps = function () {
          var e = i.l(),
            t = i.h()
          return { currentTimeMs: i.i() || 0, durationMs: t || 1, externalSeeking: e, onSeek: V }
        }),
        (N.Captions = function (e) {
          var t = e.audioSpaceId,
            n = I.a.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
            a = n.disabled,
            r = n.icon,
            i = n.label,
            o = n.onPress
          return c.a.createElement(m, { accessibilityLabel: i, disabled: a, icon: r, onPress: o })
        }),
        (N.Play = function () {
          var e = N.usePlayButtonProps(),
            t = e.isPlaying,
            n = e.togglePlayback
          return c.a.createElement(m, {
            accessibilityLabel: t ? W.pause : W.play,
            icon: t ? c.a.createElement(O.a, null) : c.a.createElement(R.a, null),
            onPress: n,
            size: 'xLarge',
          })
        }),
        (N.usePlayButtonProps = function () {
          var e = i.k(),
            t = i.n()
          return {
            isPlaying: e,
            togglePlayback: function () {
              t && t.play && t.pause && (e ? t.pause() : t.play())
            },
          }
        }),
        (N.SkipAhead = function () {
          return c.a.createElement(m, {
            accessibilityLabel: W.skipForward,
            icon: c.a.createElement(H, null),
            onPress: F,
          })
        }),
        (N.Clip = function (e) {
          e.audioSpaceId
          var t = r.k().openSheet,
            n = i.g(),
            a = Object(T.a)(),
            o = n && n.currentTimeMs < a.durationMs
          return c.a.createElement(m, {
            accessibilityLabel: W.createClip,
            disabled: o,
            icon: c.a.createElement(D, null),
            onPress: function () {
              t(r.b.createClip)
            },
          })
        })
      var U = p.a.create(function (e) {
          return {
            controlsContainer: { width: '100%', alignSelf: 'start', marginVertical: e.spaces.space8 },
            buttonsContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
          }
        }),
        W = { skipForward: v.a.jf9f3e53, play: v.a.ic1e826e, pause: v.a.b89c5a5f, createClip: v.a.f91f00b9 },
        q = 15e3
    },
    PaZX: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return g
      }),
        n.d(t, 'c', function () {
          return b
        })
      n('1t7P'), n('jQ/y'), n('z84I'), n('+KXO')
      var a = n('ERkP'),
        r = n.n(a),
        i = n('1YZw'),
        o = n('hUaP'),
        c = n('3XMw'),
        s = n.n(c),
        l = n('uDfI'),
        u = n('Q/sS'),
        d = n('dgjd'),
        p = n('MWbm'),
        m = n('t62R'),
        f = n('CKsB'),
        h = n('/yvb'),
        v = n('rHpw')
      function g(e) {
        var t = Object(u.k)().requestSheetDismissal,
          n = g.useReportingItems({ audioSpaceId: e.audioSpaceId })
        return r.a.createElement(
          p.a,
          { style: y.container },
          r.a.createElement(
            p.a,
            { style: y.menu },
            r.a.createElement(
              m.b,
              { align: 'center', size: 'headline1', style: y.description, weight: 'bold' },
              b.reportThisSpace,
            ),
            r.a.createElement(m.b, { align: 'center', style: y.description }, b.describeTheIssue),
            null == n
              ? void 0
              : n.map(function (e) {
                  return r.a.createElement(f.a, {
                    actionText: e.label,
                    key: e.label,
                    onClick: function () {
                      e.onClick(), t()
                    },
                    textColor: 'red500',
                  })
                }),
          ),
          r.a.createElement(h.a, { onClick: t, type: 'primaryOutlined' }, b.cancel),
        )
      }
      g.useReportingItems = function (e) {
        var t = e.audioSpaceId,
          n = Object(l.c)(),
          a = Object(d.a)(t).handlers.report
        return r.a.useMemo(
          function () {
            return Object.keys(a).map(function (e) {
              return {
                label: b[e],
                onClick: function () {
                  a && a[e](), n(Object(i.b)({ text: b.spaceReported }))
                },
              }
            })
          },
          [a, n],
        )
      }
      var b = {
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
      t.b = g
    },
    'Pc/x': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return B
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = (n('849X'), n('TJCb'), n('7x/C'), n('JtPf'), n('KqXw'), n('LJOr'), n('yiKp')),
        s = n.n(c),
        l = n('KEM+'),
        u = n.n(l),
        d = (n('IAdD'), n('0zG9'), n('yH/f'), n('5Yy7')),
        p = n.n(d),
        m = n('2VqO'),
        f = n.n(m),
        h = n('mAxt'),
        v = n.n(h),
        g = (n('2G9S'), n('CEs6')),
        b = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e, a, i) {
            var o
            return (
              r()(this, n),
              ((o = t.call(
                this,
                ''.concat(n.displayName, ': ').concat(e, ' HTTP-').concat(a, ' message: ').concat(i),
              )).url = e),
              (o.status = a),
              o
            )
          }
          return o()(n)
        })(v()(Error))
      u()(b, 'displayName', 'ProxseeApiError')
      var y,
        S,
        E = n('epkG'),
        w = n('SrIh'),
        k = n('RqPI'),
        C = 0,
        x = (function () {
          function e() {
            var t = this,
              n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _
            r()(this, e),
              u()(this, 'reportSpaceFor', {
                SelfHarm: function (e) {
                  return t._reportSpace(s()({ abuse_type: j.SelfHarm }, e))
                },
                Violence: function (e) {
                  return t._reportSpace(s()({ abuse_type: j.Violence }, e))
                },
                SexualContent: function (e) {
                  return t._reportSpace(s()({ abuse_type: j.SexualContent }, e))
                },
                ChildSafety: function (e) {
                  return t._reportSpace(s()({ abuse_type: j.ChildSafety }, e))
                },
                PrivateInformation: function (e) {
                  return t._reportSpace(s()({ abuse_type: j.PrivateInformation }, e))
                },
                AbusiveBehavior: function (e) {
                  return t._reportSpace(s()({ abuse_type: j.AbusiveBehavior }, e))
                },
              })
            var a = n.httpConfig
            ;(this.client = new E.a(s()(s()({}, M), a))), (this._authToken = void 0), (this._authPromise = null)
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
                  return Object(k.n)(e)
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
                    ? this.client.dispatch(e).then(g.a)
                    : Promise.reject(new Error('[ProxseeApi] config not initialized'))
                },
              },
              {
                key: 'post',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = n.params,
                    r = Object.assign(R(), n.headers),
                    i = JSON.stringify(s()(s()({}, t), {}, { cookie: this._authToken })),
                    o = 'Twitter' === this._authUserType ? 'twitter/'.concat(e) : e
                  return this.dispatch({ method: 'POST', path: '/api/v2/'.concat(o), headers: r, params: a, data: i })
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
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return this.login().then(function () {
                    var a = n.params,
                      r = Object.assign(R(), n.headers),
                      i = JSON.stringify({
                        access_token: e.access_token,
                        cursor: e.cursor,
                        limit: 1e3,
                        since: null,
                        quick_get: !0,
                      })
                    return t.dispatch({ method: 'POST', host: e.host, path: e.path, headers: r, params: a, data: i })
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
                key: 'createClip',
                value: function (e) {
                  var t = this
                  return this.login().then(function () {
                    return t.post('createClip', e).catch(function (e) {
                      Object(w.a)('[ProxseeApi] failed to create clip', { extra: { err: e } })
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
        P = 'X-Periscope-User-Agent',
        T = 'X-Attempt',
        O = ((y = {}), u()(y, P, 'Twitter/m5'), u()(y, T, 1), y)
      function R() {
        var e,
          t = Date.now()
        return (
          (C = t <= C ? C + 1 : t),
          Object.assign({}, O, ((e = {}), u()(e, I, C), u()(e, 'content-type', 'application/json'), e))
        )
      }
      var L = 'm5-proxsee-login-a2011357b73e',
        _ = {},
        M = {
          host: 'https://proxsee.pscp.tv',
          errorFilter: function (e, t) {
            return t(e).then(function (t) {
              return t.status && ((n = t.status) < 200 || n > 399)
                ? Promise.reject(
                    (function (e, t) {
                      var n = e.uri,
                        a = t.status,
                        r = Object(g.a)(t)
                      return new b(n, a, r.msg)
                    })(e, t),
                  )
                : t
              var n
            })
          },
        }
      var z,
        j = Object.freeze({
          SelfHarm: 'SELF_HARM',
          Violence: 'VIOLENCE',
          SexualContent: 'SEXUAL_CONTENT',
          ChildSafety: 'CSE',
          PrivateInformation: 'PRIVATE_INFO',
          AbusiveBehavior: 'HARASSMENT',
        }),
        H = new x(),
        A = n('G6rE'),
        D = new Error('[AudioModule] config not initialized'),
        B = new ((function () {
          function e() {
            r()(this, e), (this.proxsee = H)
          }
          return (
            o()(e, [
              {
                key: 'init',
                value: function (e) {
                  ;(z = e), H.init(z)
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
                    return A.e.selectLoggedInUser(e)
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
    Pl95: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a = n('Q/sS'),
        r = n('ERkP'),
        i = n.n(r),
        o = n('3XMw'),
        c = n.n(o),
        s = n('dgjd'),
        l = n('/yvb'),
        u = n('rHpw'),
        d = n('pHub'),
        p = n('8A5z'),
        m = n('d5IS')
      function f(e) {
        var t = e.audioSpaceId,
          n = f.useSpaceCaptionsToggleProps({ audioSpaceId: t }),
          a = n.disabled,
          r = n.icon,
          o = n.label,
          c = n.onPress
        return i.a.createElement(l.a, {
          accessibilityLabel: o,
          disabled: a,
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
          case a.c.On:
            return i.a.createElement(d.a, { style: v.icon })
          case a.c.Off:
            return i.a.createElement(p.a, { style: v.icon })
          case a.c.Unavailable:
          default:
            return i.a.createElement(m.a, { style: v.icon })
        }
      }
      f.useSpaceCaptionsToggleProps = function (e) {
        var t = e.audioSpaceId,
          n = a.o(),
          r = i.a.createElement(h, { captionsState: n })
        return {
          disabled: !(n !== a.c.Unavailable),
          icon: r,
          label: (function (e) {
            switch (e) {
              case a.c.On:
                return g.hideCaptions
              case a.c.Off:
                return g.showCaptions
              case a.c.Unavailable:
              default:
                return g.captionsUnavailable
            }
          })(n),
          onPress: (function (e) {
            var t = e.audioSpaceId,
              n = Object(s.a)(t).utils
            return function () {
              a.j(), n.scribe(':audiospace::caret:view_transcriptions:click')
            }
          })({ audioSpaceId: t }),
        }
      }
      var v = u.a.create(function (e) {
          return { icon: { fill: e.colors.text } }
        }),
        g = { showCaptions: c.a.e674c120, hideCaptions: c.a.f45bace3, captionsUnavailable: c.a.ce96f1db }
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
          return d
        }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'k', function () {
          return m
        }),
        n.d(t, 'l', function () {
          return f
        }),
        n.d(t, 'p', function () {
          return h
        }),
        n.d(t, 'q', function () {
          return v
        }),
        n.d(t, 'h', function () {
          return g
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'e', function () {
          return S
        }),
        n.d(t, 'm', function () {
          return E
        }),
        n.d(t, 'o', function () {
          return x
        }),
        n.d(t, 'j', function () {
          return I
        }),
        n.d(t, 'n', function () {
          return P
        })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('7x/C'), n('JtPf'), n('2C8o')),
        o = (n('yH/f'), Object.freeze({ full: 'full', collapse: 'collapse', exit: 'exit' })),
        c = Object.freeze({ On: 'on', Off: 'off', Unavailable: 'unavailable' }),
        s = Object.freeze({
          generalNux: 'general-nux',
          clippingEducation: 'clipping-education',
          recordingEducation: 'recording-education',
          report: 'report',
          createClip: 'create-clip',
        }),
        l = n('ssnq'),
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
      function m() {
        return {
          sheetId: d.useSlice(function (e) {
            return e.sheet.id
          }),
          openSheet: w,
          requestSheetDismissal: C,
        }
      }
      function f() {
        var e = d.useSlice(function (e) {
            return e.sheet
          }),
          t = e.hasDismissRequest
        return { sheetId: e.id, hasDismissRequest: t, clearSheet: k }
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
      function g(e) {
        d.setState(function (t) {
          return r()(r()({}, t), {}, { springToState: e })
        })
      }
      function b(e) {
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
      function w(e) {
        d.getState().sheet.hasDismissRequest ||
          d.setState(function (t) {
            return r()(r()({}, t), {}, { sheet: { id: e, hasDismissRequest: !1 } })
          })
      }
      function k() {
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
        var e = i.e(),
          t = x()
        return e && t === c.On
      }
    },
    QEWO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ERkP')
      var a = n('89tF'),
        r = Object(a.a)({ space: !0, voiceTweet: !0, voiceMessage: !0 })
    },
    'S+H3': function (e, t, n) {
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
    SNyS: function (e, t, n) {
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
    SQlS: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return u
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = (n('i4UL'), n('ERkP')),
        o = n.n(i),
        c = n('CDzS'),
        s = n('rHpw'),
        l = n('k/Ka')
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
    TCYy: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n('yiKp'),
        r = n.n(a),
        i = n('ddV6'),
        o = n.n(i),
        c = (n('z84I'), n('i4UL'), n('2G9S'), n('uFXj'), n('yH/f'), n('ERkP')),
        s = n.n(c),
        l = n('rHpw'),
        u = n('MWbm')
      function d(e) {
        var t,
          n = e.count,
          a = e.max,
          r = e.selectedIndex,
          i = 2 * f((t = l.a.theme)).px + t.borderWidthsPx.small,
          c = s.a.useRef({ left: 0, right: a - 1 }),
          d = s.a.useRef(0),
          v = s.a.useState(m(c.current, n, i)),
          g = o()(v, 2),
          b = g[0],
          y = g[1]
        s.a.useEffect(
          function () {
            for (
              ;
              (e = void 0),
                (t = void 0),
                (a = void 0),
                (o = void 0),
                (s = void 0),
                (l = void 0),
                (e = n - 1),
                (t = c.current),
                (a = t.left),
                (o = t.right),
                (l = r + 1 - a <= 2 && 0 !== a),
                ((s = o - r + 1 <= 2 && o !== e) || l) &&
                  (s
                    ? ((c.current.left = a + 1), (c.current.right = o + 1))
                    : l && ((c.current.left = a - 1), (c.current.right = o - 1)),
                  1);

            );
            var e, t, a, o, s, l
            y(m(c.current, n, i)), (d.current = r)
          },
          [r, n, a, i],
        )
        var S = new Array(n).fill(1).map(function (e, t) {
          var i = t === r
          if (n <= a) return s.a.createElement(p, { key: t, selected: i })
          var o = b[t]
          return s.a.createElement(p, { continuation: Boolean(o), continuationType: o, key: t, selected: i })
        })
        return s.a.createElement(
          u.a,
          {
            style: [
              h.indicatorWindowContainer,
              { width: 'calc('.concat(a, ' * ').concat(i, 'px)'), height: ''.concat(i, 'px') },
            ],
          },
          s.a.createElement(
            u.a,
            {
              style: [
                h.indicatorsContainer,
                { height: ''.concat(i, 'px'), width: 'calc('.concat(i, 'px * ').concat(n, ')') },
                b.style,
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
      function m(e, t, n) {
        var a = e.left,
          r = e.right,
          i = { style: { transform: [{ translateX: -1 * n * a }] } }
        return (
          (i[a - 1] = v.small),
          (i[a] = v.small),
          (i[a + 1] = v.medium),
          (i[r - 1] = v.medium),
          (i[r] = v.small),
          (i[r + 1] = v.small),
          0 === a ? (delete i[0], delete i[1]) : r > t - 2 && (delete i[t - 1], delete i[t - 2]),
          i
        )
      }
      function f(e) {
        return { style: e.spaces.space8, px: e.spacesPx.space8 }
      }
      var h = l.a.create(function (e) {
          var t = f(e).style,
            n = { transition: 'transform 200ms' },
            a = r()(
              r()({}, n),
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
            i = r()(r()({}, a), {}, { backgroundColor: e.colors.gray300 })
          return {
            indicatorWindowContainer: { marginVertical: e.spaces.space12, overflow: 'hidden', margin: 'auto' },
            indicatorsContainer: r()(
              r()({}, n),
              {},
              { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 'auto' },
            ),
            indicatorSelected: r()(
              r()({}, a),
              {},
              {
                borderWidth: e.borderWidths.small,
                borderColor: e.colors.gray300,
                borderStyle: 'solid',
                backgroundColor: e.colors.white,
                transform: [{ scale: 1 }],
              },
            ),
            indicator: r()(r()({}, a), {}, { backgroundColor: e.colors.gray300 }),
            indicatorContinuationSmall: r()(r()({}, i), {}, { transform: [{ scale: 0.3 }] }),
            indicatorContinuationMedium: r()(r()({}, i), {}, { transform: [{ scale: 0.4 }] }),
          }
        }),
        v = Object.freeze({ small: 'small', medium: 'medium' })
    },
    UUFr: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Fe
        })
      var a = n('97Jx'),
        r = n.n(a),
        i = (n('KqXw'), n('WNMA'), n('ERkP')),
        o = n.n(i),
        c = n('Fg/a'),
        s = n('Z5jE'),
        l = n('yiKp'),
        u = n.n(l),
        d = (n('7xRU'), n('3XMw')),
        p = n.n(d),
        m = n('t62R'),
        f = n('rHpw')
      function h(e) {
        return o.a.createElement(
          m.b,
          { numberOfLines: 1, size: 'headline1', style: g.container, weight: 'bold' },
          v.connecting,
        )
      }
      var v = { connecting: p.a.e4e811fb },
        g = f.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        b = n('Pc/x'),
        y = (n('z84I'), n('p3P5')),
        S = n('m3Bd'),
        E = n.n(S),
        w = n('ddV6'),
        k = n.n(w),
        C = n('hOZg'),
        x = n('RqPI')
      var I = n('zCf4'),
        P = n('uDfI'),
        T = n('dgjd'),
        O = n('mjJ+'),
        R = n('/yvb'),
        L = n('FXw/'),
        _ = n('GCOQ')
      function M(e) {
        var t = (function (e) {
            var t = Object(I.f)(),
              n = Object(T.a)(e).utils,
              a = Object(P.d)(x.n),
              r = [],
              i = {
                Icon: _.a,
                isEmphasized: !0,
                onClick: function () {
                  n.scribe(':audiospace::caret:report:click'),
                    t.push(
                      (function (e) {
                        return '/i/spaces/'.concat(e, '/peek/report')
                      })(e),
                    )
                },
                text: z.reportThisSpace,
              }
            a && r.push(i)
            return { items: r }
          })(e.audioSpaceId),
          n = o.a.useState(!1),
          a = k()(n, 2),
          r = a[0],
          i = a[1]
        if (t.items.length < 1) return null
        var c = r
          ? o.a.createElement(O.a, {
              isFixed: !0,
              items: t.items,
              onCloseRequested: function () {
                return i(!1)
              },
              shouldCloseOnClick: !0,
            })
          : null
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(R.a, {
            accessibilityLabel: z.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: z.more },
            icon: o.a.createElement(L.a, null),
            onPress: function () {
              return i(!0)
            },
            pullRight: e.pullRight,
            size: 'medium',
          }),
          c,
        )
      }
      var z = { more: p.a.h63a5c3b, reportThisSpace: p.a.b3481ffd },
        j = n('0nhk'),
        H = n('xVWt')
      var A = n('MWbm'),
        D = n('sgih'),
        B = ['Content', 'CustomHeader', 'withoutDescription', 'withoutPadding'],
        N = ['Content', 'CustomHeader', 'shellLayout', 'withoutDescription', 'withoutPadding']
      function F(e) {
        var t,
          n,
          a,
          i,
          c,
          s = {
            type: 'bottom',
            accessibilityRole: 'menu',
            onMaskClick: e.onClose,
            allowBackNavigation: !0,
            withKeyboardNavigation: !0,
            withMask: !0,
          },
          l =
            ((t = o.a.useState(null)),
            (n = k()(t, 2)),
            (a = n[0]),
            (i = n[1]),
            (c = o.a.useMemo(
              function () {
                if (!a)
                  return function (e) {
                    var t = e.nativeEvent.layout
                    t && i(t)
                  }
              },
              [a],
            )),
            [a, c]),
          u = k()(l, 2),
          d = u[0],
          p = u[1],
          m = [K.sheetContainer, e.withoutPadding && K.withoutPadding]
        return o.a.createElement(
          D.a,
          s,
          o.a.createElement(
            A.a,
            { onLayout: p, style: m },
            o.a.createElement(A.a, { style: K.sheetSpacerTop }),
            o.a.createElement(V, e),
            o.a.createElement(U, e),
            o.a.createElement(W, r()({}, e, { shellLayout: d })),
          ),
        )
      }
      function V(e) {
        e.Content, e.CustomHeader, e.withoutDescription, e.withoutPadding
        var t = E()(e, B),
          n = o.a.createElement(
            R.a,
            r()(
              {
                accessibilityLabel: J.close,
                icon: o.a.createElement(C.a, { style: K.closeIcon }),
                onPress: e.onClose,
                pullLeft: !0,
              },
              G,
            ),
          )
        if (e.CustomHeader) return o.a.createElement(e.CustomHeader, r()({}, t, { closeButton: n }))
        var a = e.space.rest_id
        return o.a.createElement(
          A.a,
          { style: K.header },
          o.a.createElement(A.a, { style: K.headerLeft }, n),
          o.a.createElement(
            A.a,
            { style: K.headerRight },
            o.a.createElement(
              A.a,
              { style: K.headerRightItem },
              o.a.createElement(j.a, { audioSpaceId: a, type: 'icon-borderless' }),
            ),
            o.a.createElement(
              A.a,
              { style: K.headerRightItem },
              o.a.createElement(M, { audioSpaceId: a, pullRight: !0 }),
            ),
          ),
        )
      }
      function U(e) {
        return e.withoutDescription
          ? null
          : o.a.createElement(
              A.a,
              { style: K.descriptionContainer },
              o.a.createElement(H.b, { audioSpaceId: e.space.rest_id, isOutsideDock: !0 }),
            )
      }
      function W(e) {
        if (!e.Content) return null
        e.Content, e.CustomHeader
        var t = e.shellLayout,
          n = (e.withoutDescription, e.withoutPadding, E()(e, N))
        return o.a.createElement(
          A.a,
          { style: [K.content, e.withoutPadding && K.withoutPadding] },
          o.a.createElement(e.Content, r()({}, n, { onClose: e.onClose, shellLayout: t })),
        )
      }
      function q(e) {
        return { sheetContainer: { paddingHorizontal: e.spacesPx.space16 } }
      }
      var K = f.a.create(function (e) {
          var t = q(e),
            n = { height: e.spacesPx.space24 },
            a = u()({ flex: 1 }, t.sheetContainer),
            r = { flex: 1, paddingVertical: e.spacesPx.space20 },
            i = { marginLeft: e.spaces.space8 },
            o = { paddingVertical: e.spacesPx.space16 },
            c = e.spacesPx.space24
          return {
            sheetSpacerTop: n,
            sheetContainer: a,
            withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 },
            content: r,
            header: { flexDirection: 'row' },
            headerLeft: { flex: 1, alignItems: 'flex-start' },
            headerRight: { flexDirection: 'row' },
            headerRightItem: i,
            descriptionContainer: o,
            closeIcon: { width: c, height: c },
          }
        }),
        G = { borderColor: 'transparent', color: 'text', size: 'medium' },
        J = { close: p.a.ia5e7487 }
      function X(e, t) {
        var n,
          a,
          r = t.width,
          i = t.height,
          o =
            ((n = f.a.theme),
            (a = q(n)),
            {
              getHorizontal: function (e) {
                return e - 2 * a.sheetContainer.paddingHorizontal
              },
            }),
          c = Object(y.b)(f.a.theme),
          s = f.a.theme.spacesPx.space40,
          l = i * Q - s - e.height,
          u = r > f.a.theme.breakpoints.medium ? Math.min(Z, r * Y) : r,
          d = o.getHorizontal(u),
          p = c.getHeight(),
          m = c.getWidth(),
          h = Math.min(4, Math.floor(l / p)),
          v = 4 === h ? 3 : 4,
          g = Math.min(v, Math.floor(d / m))
        return { maxDisplayParticipantCount: g * h, dynamicParticipantWidth: d / g }
      }
      var Z = 600,
        Y = 0.8,
        Q = 1,
        $ = n('4EYz'),
        ee = n('s1N3'),
        te = n('i4Oy'),
        ne = n('VKFJ')
      function ae(e) {
        var t = e.shellLayout
        if (!t) return null
        var n = ie(te.a.get('window')),
          a = X(ie(t), n),
          r = e.cohosts,
          i = e.host,
          c = e.participants,
          s = []
        i && s.push({ user: i, kind: ne.a.host })
        for (
          var l = Object(ee.a)(r, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ne.a.cohost }
            }),
            u = 0;
          u < l.length && !(s.length >= a.maxDisplayParticipantCount);
          u++
        )
          s.push(l[u])
        for (
          var d = Object(ee.a)(c.speakers, function (e) {
              return e.twitter_screen_name
            }).map(function (e) {
              return { user: e, kind: ne.a.speaker }
            }),
            p = 0;
          p < d.length && !(s.length >= a.maxDisplayParticipantCount);
          p++
        )
          s.push(d[p])
        for (var m = 0; m < c.listeners.length && !(s.length >= a.maxDisplayParticipantCount); m++) {
          var f = c.listeners[m]
          f && e._temp_omitByScreenName !== f.twitter_screen_name && s.push({ user: f, kind: ne.a.listener })
        }
        var h = c.total || l.length + d.length,
          v = Math.max(0, h - s.length)
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(
            A.a,
            { style: re.participantsGridContainer },
            o.a.createElement(
              A.a,
              { style: re.participantsGridContent },
              s.map(function (e, t) {
                return o.a.createElement(y.a, {
                  hasNftAvatar: e.user.has_nft_avatar,
                  isVerified: e.user.is_verified,
                  key: e.user.twitter_screen_name,
                  kind: e.kind,
                  name: e.user.display_name,
                  profile_image_url_https: e.user.avatar_url,
                  screenName: e.user.twitter_screen_name,
                  width: a.dynamicParticipantWidth,
                })
              }),
            ),
          ),
          o.a.createElement($.a, { audioSpaceId: e.audioSpaceId, count: v, interactive: !1 }),
        )
      }
      var re = f.a.create(function (e) {
        return {
          participantsGridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
          participantsGridContent: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
        }
      })
      function ie(e) {
        var t = e.height
        return { width: e.width, height: t }
      }
      var oe = n('ISLN')
      function ce(e) {
        var t = e.space
        if (!t) return null
        var n = b.a.loggedInUser(),
          a = n && n.screen_name
        return o.a.createElement(
          o.a.Fragment,
          null,
          o.a.createElement(ae, {
            _temp_omitByScreenName: a,
            audioSpaceId: t.rest_id,
            cohosts: t.cohosts,
            host: t.host,
            participants: t.participants,
            shellLayout: e.shellLayout,
          }),
          o.a.createElement(
            A.a,
            { style: le.joinSubtitleContainer },
            o.a.createElement(
              m.b,
              { align: 'center', numberOfLines: 1, size: 'subtext2', style: le.joinSubtitle },
              se.spaceJoinSubtitle,
            ),
          ),
          o.a.createElement(
            A.a,
            { style: le.joinButtonContainer },
            o.a.createElement(
              oe.a,
              {
                accessibilityLabel: se.spaceJoin,
                onPress: function () {
                  e.onJoin(), e.onClose()
                },
              },
              o.a.createElement(
                m.b,
                { align: 'center', color: 'white', numberOfLines: 1, size: 'headline1', weight: 'bold' },
                se.spaceJoin,
              ),
            ),
          ),
        )
      }
      var se = { spaceJoin: p.a.cc8f82bb, spaceJoinSubtitle: p.a.e51df2e6 },
        le = f.a.create(function (e) {
          return {
            joinSubtitleContainer: { width: '100%', marginTop: e.spacesPx.space20 },
            joinSubtitle: { lineHeight: e.lineHeightsPx.subtext2 },
            joinButtonContainer: {
              width: '100%',
              paddingHorizontal: e.spaces.space20,
              paddingVertical: e.spacesPx.space16,
            },
          }
        }),
        ue = n('BXJq'),
        de = n('VRZ4'),
        pe = n('CDzS'),
        me = n('Tg44')
      function fe(e) {
        var t = Object(ue.a)(e.broadcastId)
        return o.a.createElement(
          A.a,
          { style: he.container },
          o.a.createElement(
            A.a,
            { style: he.cardContainer },
            o.a.createElement(de.a, { audioSpaceId: e.broadcastId, withoutButton: !0 }),
          ),
          o.a.createElement(
            pe.a.Default,
            { style: he.ctaButton },
            o.a.createElement(me.a.Button, {
              disablePassiveBackgroundColor: !0,
              hasReminderSet: t.props.hasReminderSet,
              isJoined: !1,
              isSmall: !1,
              onClick: t.props.onClick,
              scheduledStart: t.props.scheduledStart,
              state: 'NotStarted',
            }),
          ),
          o.a.createElement(
            A.a,
            { style: he.shareButtonContainer },
            o.a.createElement(j.a, { audioSpaceId: e.broadcastId }),
          ),
        )
      }
      var he = f.a.create(function (e) {
        var t = { width: '100%', paddingHorizontal: e.spaces.space8, paddingBottom: e.spaces.space48 }
        return {
          cardContainer: { paddingBottom: e.spaces.space32 },
          container: t,
          ctaButton: { width: '100%', marginTop: e.spaces.space32, borderRadius: e.borderRadii.infinite },
          shareButtonContainer: { marginTop: e.spaces.space8 },
        }
      })
      function ve(e) {
        return o.a.createElement(m.b, { size: 'headline1', style: be.container, weight: 'bold' }, ge.message)
      }
      var ge = { message: p.a.h87bdd64 },
        be = f.a.create(function (e) {
          return { container: { paddingBottom: e.spaces.space48 } }
        }),
        ye = (n('LW0h'), n('7x/C'), n('cFuS'))
      function Se(e) {
        return o.a.createElement(
          A.a,
          { style: we.endedContainer },
          o.a.createElement(
            m.b,
            { align: 'center', style: we.endedTitle },
            o.a.createElement('span', { role: 'img' }, '🙉'),
          ),
          o.a.createElement(m.b, { align: 'center', numberOfLines: 1, size: 'title4', weight: 'bold' }, Ee.spaceEnded),
          o.a.createElement(
            m.b,
            {
              align: 'center',
              color: 'gray700',
              numberOfLines: 1,
              size: 'body',
              style: we.endedSubtitle,
              weight: 'bold',
            },
            Ee.spaceEndedSubtitle,
          ),
        )
      }
      var Ee = { spaceEnded: p.a.cc5ab041, spaceEndedSubtitle: p.a.eadd5677 },
        we = f.a.create(function (e) {
          return {
            endedContainer: { paddingBottom: e.spaces.space48 },
            endedTitle: {
              paddingBottom: e.spaces.space32,
              fontSize: e.spaces.space64,
              lineHeight: ''.concat(f.a.theme.spacesPx.space64 + f.a.theme.spacesPx.space20, 'px'),
            },
            endedSubtitle: { paddingTop: e.spaces.space12 },
          }
        }),
        ke = n('hqDb'),
        Ce = n('cHvH'),
        xe = n('88ay'),
        Ie = ['windowWidth']
      function Pe(e, t) {
        return o.a.createElement(xe.b, {
          decoration: xe.e,
          displayMode: 'UserCompact',
          key: t,
          promotedItemType: ye.c.USER,
          style: e ? ze.userCellWide : ze.userCell,
          userId: t,
          withFollowsYou: !0,
        })
      }
      function Te(e) {
        return Pe(!1, e)
      }
      function Oe(e) {
        return Pe(!0, e)
      }
      function Re(e) {
        var t = e.isWide,
          n = e.label,
          a = e.style,
          r = e.users
        return 0 === r.length
          ? null
          : o.a.createElement(
              A.a,
              { style: a },
              o.a.createElement(
                m.b,
                {
                  numberOfLines: 1,
                  size: 'headline2',
                  style: t ? ze.endedSubtitleWide : ze.endedSubtitle,
                  weight: 'bold',
                },
                n,
              ),
              o.a.createElement(ke.a, { displayMode: 'UserCompact', renderUserCell: t ? Oe : Te, userIds: r }),
            )
      }
      function Le(e) {
        var t,
          n,
          a = e.windowWidth,
          r = E()(e, Ie),
          i = r.space
        if (!i) return o.a.createElement(Se, r)
        var c = function (e) {
            return Object(ee.a)(
              (null == e
                ? void 0
                : e
                    .map(function (e) {
                      var t
                      return null === (t = e.user) || void 0 === t ? void 0 : t.rest_id
                    })
                    .filter(Boolean)) || [],
            )
          },
          s = null === (t = i.host) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.rest_id,
          l = c(i.cohosts),
          u = c(i.participants.speakers),
          d = a > f.a.theme.breakpoints.medium
        return o.a.createElement(
          A.a,
          { style: d ? ze.endedContainerWide : ze.endedContainer },
          o.a.createElement(
            A.a,
            { style: ze.overflow },
            o.a.createElement(Re, { isWide: d, label: Me.host, users: s ? [s] : [] }),
            o.a.createElement(Re, {
              isWide: d,
              label: Me.cohosts({ hostCount: l.length }),
              style: ze.userSectionPadding,
              users: l,
            }),
            o.a.createElement(Re, {
              isWide: d,
              label: Me.speakers({ speakerCount: u.length }),
              style: ze.userSectionPadding,
              users: u,
            }),
          ),
        )
      }
      function _e(e) {
        return o.a.createElement(Ce.a, null, function (t) {
          var n = t.windowWidth
          return o.a.createElement(Le, r()({ windowWidth: n }, e))
        })
      }
      var Me = { spaceEnded: p.a.ba55e824, host: p.a.cededf29, cohosts: p.a.aadbc746, speakers: p.a.hbd6035f },
        ze = f.a.create(function (e) {
          var t = { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 },
            n = { width: '100%', maxHeight: 550, overflow: 'auto' }
          return {
            endedContainer: n,
            endedContainerWide: u()(u()({}, n), {}, { paddingBottom: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitle: u()(u()({}, t), {}, { paddingHorizontal: e.componentDimensions.gutterHorizontalPx }),
            endedSubtitleWide: u()(u()({}, t), {}, { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx }),
            userCell: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            userCellWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            overflow: { overflow: 'visible' },
            userSectionPadding: { paddingTop: e.spacesPx.space16 },
          }
        }),
        je = n('21zW'),
        He = n('MH+I')
      function Ae(e) {
        var t,
          n,
          a = null === (t = e.space) || void 0 === t ? void 0 : t.ended_at,
          r = null === (n = e.space) || void 0 === n ? void 0 : n.started_at,
          i = 0
        return (
          null != a && null != r && (i = a - r),
          o.a.createElement(Ce.a, null, function (t) {
            var n,
              a = t.windowWidth
            return o.a.createElement(
              A.a,
              { style: a > f.a.theme.breakpoints.medium ? Be.endedHeaderWide : Be.endedHeader },
              o.a.createElement(
                A.a,
                null,
                o.a.createElement(A.a, { style: Be.closeButton }, e.closeButton),
                o.a.createElement(
                  A.a,
                  { style: Be.row },
                  o.a.createElement(
                    m.b,
                    { color: 'gray700', size: 'subtext1', style: [Be.endedLabel, Be.upper], weight: 'bold' },
                    De.ended,
                    ' ',
                    o.a.createElement(je.a, null),
                  ),
                  o.a.createElement(He.a, {
                    color: 'gray700',
                    short: !0,
                    size: 'subtext1',
                    style: Be.endedLabel,
                    timeMs: i,
                  }),
                ),
              ),
              o.a.createElement(
                m.b,
                { size: 'title2', weight: 'bold' },
                null === (n = e.space) || void 0 === n ? void 0 : n.title,
              ),
            )
          })
        )
      }
      var De = { ended: p.a.ba55e824 },
        Be = f.a.create(function (e) {
          return {
            endedHeader: { paddingHorizontal: e.componentDimensions.gutterHorizontalPx },
            endedHeaderWide: { paddingHorizontal: 2 * e.componentDimensions.gutterHorizontalPx },
            endedLabel: { lineHeight: 38 },
            row: { flexDirection: 'row' },
            spaceBetween: { justifyContent: 'space-between' },
            upper: { textTransform: 'uppercase' },
            closeButton: { alignItems: 'flex-start' },
          }
        })
      function Ne(e) {
        var t,
          n,
          a = null === (t = e.location.state) || void 0 === t ? void 0 : t.origin,
          i = Object(T.a)(e.broadcastId || '')
        o.a.useEffect(function () {
          var e
          return (
            i.utils.is.joined && (e = setTimeout(s, 1e3)),
            i.utils.scribe(':audiospace:preview:::impression', { origin: a }),
            function () {
              clearTimeout(e)
            }
          )
        }, [])
        var c = i.space
        if (!c) return null
        function s() {
          e.history.goBackThroughModals()
        }
        var l = u()(
          u()({}, e),
          {},
          {
            space: c,
            onClose: s,
            onJoin: function () {
              return i.handlers.join(a)
            },
          },
        )
        return null !== (n = i.space) && void 0 !== n && n.ticket_group_id
          ? o.a.createElement(F, r()({}, l, { Content: ve }))
          : i.utils.is.joined
          ? o.a.createElement(F, r()({}, l, { Content: h }))
          : i.utils.is.Running
          ? o.a.createElement(F, r()({}, l, { Content: ce }))
          : i.utils.is.NotStarted || i.utils.is.PrePublished
          ? o.a.createElement(F, r()({}, l, { Content: fe, withoutDescription: !0 }))
          : i.utils.is.loaded
          ? o.a.createElement(
              F,
              r()({}, l, { Content: _e, CustomHeader: Ae, withoutDescription: !0, withoutPadding: !0 }),
            )
          : o.a.createElement(F, r()({}, l, { Content: h }))
      }
      function Fe(e) {
        return o.a.createElement(c.a, e, o.a.createElement(Ve, e))
      }
      function Ve(e) {
        var t = Object(s.a)(e.match)
        return o.a.createElement(Ne, r()({}, e, { broadcastId: t }))
      }
    },
    VKFJ: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return p
      }),
        n.d(t, 'a', function () {
          return m
        })
      var a,
        r = n('KEM+'),
        i = n.n(r),
        o = n('RhWx'),
        c = n.n(o),
        s = (n('lTEL'), n('m9LP'), n('7x/C'), n('87if'), n('kYxP'), n('2G9S'), n('yH/f'), n('A7Vd')),
        l = n('ERkP'),
        u = n.n(l),
        d = n('dgjd')
      function p(e) {
        var t = Object(d.a)(e),
          n = t.space,
          a = t.utils,
          r = s.e()
        return u.a.useMemo(
          function () {
            var e = new Map(),
              t = [],
              i = []
            function o() {
              var e = [].concat(t, i),
                a = (null == n ? void 0 : n.participants.total) || 0,
                r = Math.max(0, a - e.length)
              return { all: e, speakers: t, listeners: i, otherParticipantsTotal: r }
            }
            function s(n, a, r) {
              var o = a.twitter_screen_name
              if (o && !e.has(o)) {
                e.set(o, !0)
                var c = { key: o, user: a, kind: n, periscopeUserId: r }
                p.canParticipantSpeak(n) ? t.push(c) : i.push(c)
              }
            }
            if (!n) return o()
            n.host && s(m.host, n.host, n.host.periscope_user_id)
            var l = [].concat(c()(n.cohosts), c()(n.participants.speakers))
            a.is.replayable || l.push.apply(l, c()(n.participants.listeners))
            for (var u = 0; u < l.length; u++) {
              var d = l[u],
                f = d.periscope_user_id
              if (f)
                r.get(f)
                  ? u < n.cohosts.length
                    ? s(m.cohost, d, f)
                    : s(m.speaker, d, f)
                  : a.is.replayable || s(m.listener, d, f)
            }
            return o()
          },
          [n, r, a.is.replayable],
        )
      }
      ;(p.canParticipantSpeak = function (e) {
        return Boolean(e && f[e])
      }),
        (p.isParticipantHost = function (e) {
          return e === m.host
        })
      var m = Object.freeze({ host: 'host', cohost: 'cohost', speaker: 'speaker', listener: 'listener' }),
        f = ((a = {}), i()(a, m.host, !0), i()(a, m.cohost, !0), i()(a, m.speaker, !0), a)
    },
    Xda3: function (e, t, n) {
      'use strict'
      n.d(t, 'c', function () {
        return R
      }),
        n.d(t, 'a', function () {
          return B
        }),
        n.d(t, 'b', function () {
          return N
        })
      var a = n('1Pcy'),
        r = n.n(a),
        i = n('5Yy7'),
        o = n.n(i),
        c = n('2VqO'),
        s = n.n(c),
        l = n('RhWx'),
        u = n.n(l),
        d = n('VrFO'),
        p = n.n(d),
        m = n('Y9Ll'),
        f = n.n(m),
        h = n('KEM+'),
        v = n.n(h),
        g =
          (n('7x/C'),
          n('JtPf'),
          n('TJCb'),
          n('DZ+c'),
          n('jwue'),
          n('+oxZ'),
          n('0zG9'),
          n('lZm3'),
          n('yH/f'),
          n('KqXw'),
          n('MvUL'),
          n('2C8o')),
        b = n('HmZq'),
        y = n('Q/sS'),
        S = n('A7Vd'),
        E = n('Pc/x'),
        w = n('Chkh'),
        k = n('b2fv'),
        C = n('SrIh'),
        x = n('fEA7'),
        I = n.n(x),
        P = '/chatapi/v1/chatnow',
        T = '/chatapi/v1/history',
        O = null
      function R() {
        var e
        null === (e = O) || void 0 === e || e.disconnect(), (O = null), w.a.reset(), g.b()
      }
      S.d.subscribe(
        function (e) {
          return e.chatToken
        },
        function (e) {
          e &&
            (function (e) {
              R(),
                new L(e).connect().then(function (e) {
                  w.a.start(), (O = e)
                })
            })(e)
        },
      )
      var L = (function () {
          function e(t) {
            var n = this
            p()(this, e),
              v()(this, 'session', null),
              v()(this, 'socket', null),
              v()(this, 'socketState', H.Uninitialized),
              v()(this, 'handleOnOpen', function () {
                n.authAndJoinRoom(), (n.socketState = H.Connected)
              }),
              v()(this, 'handleOnMessage', function (e) {
                if ('string' == typeof e.data) {
                  var t = JSON.parse(e.data)
                  if (t.kind === A.Chat) {
                    var n = t.payload,
                      a = t.signature,
                      r = new j(n, { signature: a })
                    w.a.publish(r)
                  }
                }
              }),
              (this.chatToken = t)
          }
          return (
            f()(e, [
              {
                key: 'connect',
                value: function () {
                  var e = this
                  return new Promise(function (t, n) {
                    E.a.proxsee
                      .accessChat(e.chatToken)
                      .then(
                        function (n) {
                          return (e.session = n), y.i.getState().isReplay ? e.loadChatHistory() : e.openSocket(), t(e)
                        },
                        function (e) {
                          return n(e)
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
                      ;(this.socketState = H.Opening),
                        (this.socket = new WebSocket(e)),
                        (this.socket.onopen = this.handleOnOpen),
                        (this.socket.onmessage = this.handleOnMessage)
                    } catch (t) {
                      Object(C.a)(t), (this.socketState = H.Error)
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
                    (this.socketState = H.Closed)
                },
              },
              {
                key: 'authAndJoinRoom',
                value: function () {
                  if (this.session) {
                    var e,
                      t,
                      n = this.session,
                      a = n.access_token,
                      r = n.room_id
                    null === (e = this.socket) || void 0 === e || e.send(z.build(a).toString()),
                      null === (t = this.socket) || void 0 === t || t.send(M.buildJoin(r).toString())
                  }
                },
              },
              {
                key: 'loadChatHistory',
                value: function () {
                  var e = this,
                    t = this.session || {},
                    n = t.access_token,
                    a = t.endpoint
                  if (!n || !a) return Promise.resolve([])
                  try {
                    return new Promise(function (t, r) {
                      var i = [],
                        o = ''
                      !(function r(c) {
                        if (c) {
                          var s = c.cursor,
                            l = c.messages
                          if (!s) return b.onCompleteHistory(), t(i)
                          ;(o = s), e.handleHistoryMessages(l), i.push.apply(i, u()(l))
                        }
                        E.a.proxsee.getChatHistory({ access_token: n, host: a, path: T, cursor: o }).then(r)
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
                    if (e.kind === A.Chat) {
                      var n = e.payload,
                        a = e.signature
                      t.push(new j(n, { signature: a }))
                    }
                  }),
                    b.insert.apply(b, t)
                },
              },
            ]),
            e
          )
        })(),
        _ = (function () {
          function e(t, n) {
            p()(this, e), (this.payload = t), (this.kind = n)
          }
          return (
            f()(e, [
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
        M = (function (e) {
          o()(n, e)
          var t = s()(n)
          function n(e) {
            var a
            return p()(this, n), (a = t.call(this, e, A.Control)), v()(r()(a), 'data', {}), (a.data = JSON.parse(e)), a
          }
          return (
            f()(n, null, [
              {
                key: 'buildJoin',
                value: function (e) {
                  return new n(JSON.stringify({ body: JSON.stringify({ room: e }), kind: D.Join }))
                },
              },
            ]),
            n
          )
        })(_),
        z = (function (e) {
          o()(n, e)
          var t = s()(n)
          function n(e) {
            return p()(this, n), t.call(this, e, A.Auth)
          }
          return (
            f()(n, null, [
              {
                key: 'build',
                value: function (e) {
                  return new n(JSON.stringify({ access_token: e }))
                },
              },
            ]),
            n
          )
        })(_),
        j = (function (e) {
          o()(n, e)
          var t = s()(n)
          function n(e) {
            var a,
              i,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            p()(this, n), (i = t.call(this, e, A.Chat)), v()(r()(i), 'data', {}), v()(r()(i), 'body', {})
            var c = o.currentNtpTimeInSeconds,
              s = o.isReplay,
              l = o.signature
            return (
              (i.data = JSON.parse(e)),
              (i.body = ((null === (a = i.data) || void 0 === a ? void 0 : a.body) && JSON.parse(i.data.body)) || {}),
              i.setUuid(l),
              i.setTime(c, s),
              (i.type = i.body.type),
              (i.ntpTimeInSeconds = i.body.ntpTimeInSeconds),
              (i.timestamp = i.body.timestamp),
              i
            )
          }
          return (
            f()(n, [
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
                    n = t && !!this.body.ntpForBroadcasterFrame,
                    a = n ? this.body.ntpForBroadcasterFrame : this.body.ntpForLiveFrame || e,
                    r = parseFloat(a / 4294967296)
                  ;(this.body.ntpTimeInSeconds = r), (this.body.timestamp = Object(k.b)(r).getTime())
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
        })(_),
        H = Object.freeze({
          Uninitialized: 'UNINITIALIZED',
          Opening: 'OPENING',
          Connected: 'CONNECTED',
          Error: 'ERROR',
          Closed: 'CLOSED',
        }),
        A = Object.freeze({ Chat: 1, Control: 2, Auth: 3 }),
        D = Object.freeze({ Join: 1, Leave: 2, Roster: 3, Presence: 4, Ban: 8 }),
        B = Object.freeze({
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
        N = Object.freeze({ RemoveParticipant: 15 })
    },
    Z5jE: function (e, t, n) {
      'use strict'
      function a(e) {
        return e.params.broadcastId || ''
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    Zg3A: function (e, t, n) {
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
    abiO: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return D
      })
      var a = n('KEM+'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        c = n('ddV6'),
        s = n.n(c),
        l = n('97Jx'),
        u = n.n(l),
        d = (n('ho0z'), n('2G9S'), n('ERkP')),
        p = n.n(d),
        m = n('t62R'),
        f = n('/yvb'),
        h = n('n4Eu'),
        v = n('3XMw'),
        g = n.n(v),
        b = n('cm6r'),
        y = n('/NU0'),
        S = n('wD1h'),
        E = n('Oe3h'),
        w = n('0FVZ'),
        k = n('pjBI'),
        C = n('FBXD'),
        x = n('9RkS'),
        I = n('rHpw'),
        P = n('MH+I'),
        T = n('jhWN'),
        O = n('jV+4'),
        R = n('MWbm'),
        L = n('kRXa'),
        _ = n('5Ixf'),
        M = n('AtEG'),
        z = n('hOZg')
      function j(e) {
        var t = U(e.onDockPress),
          n = U(e.onUserPress),
          a = U(e.onRequestClose),
          r = U(e.onTogglePlayback)
        return p.a.createElement(
          p.a.Fragment,
          null,
          p.a.createElement(
            R.a,
            { style: F.sliderContainer },
            p.a.createElement(D.SeekSlider, {
              durationMs: e.durationMs,
              externalSeeking: e.isSeeking,
              onSeek: e.onSeek,
              onSliderActive: e.onSliderActive,
              progressMs: e.progressMs,
            }),
          ),
          p.a.createElement(
            R.a,
            { style: F.dockContentRow },
            p.a.createElement(T.a, {
              accessibilityHidden: !0,
              focusable: !1,
              onClick: n,
              screenName: e.user.screen_name,
              size: 'large',
              uri: e.user.profile_image_url_https,
              withLink: !0,
            }),
            p.a.createElement(
              R.a,
              { style: F.dockContentTitle },
              p.a.createElement(
                k.a,
                { size: 'subtext2' },
                p.a.createElement(O.a, {
                  isVerified: e.user.verified,
                  name: e.user.name,
                  nameSize: 'subtext2',
                  onLinkClick: n,
                  screenName: e.user.screen_name,
                  screenNameSize: 'subtext2',
                  weight: 'normal',
                  withLink: !0,
                }),
                p.a.createElement(P.a, { size: 'subtext2', timeMs: e.durationMs }),
              ),
              p.a.createElement(m.b, { numberOfLines: 1, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
            p.a.createElement(
              f.a,
              u()(
                {
                  accessibilityLabel: e.isPlaying ? B.pause : B.play,
                  icon: e.isPlaying ? p.a.createElement(_.a, null) : p.a.createElement(M.a, null),
                  onPress: r,
                  testID: 'togglePlayback',
                },
                N,
              ),
            ),
            p.a.createElement(R.a, { style: F.dockContentButtonSpacer }),
            p.a.createElement(
              f.a,
              u()({ accessibilityLabel: B.close, icon: p.a.createElement(z.a, null), onPress: a, testID: 'close' }, N),
            ),
          ),
        )
      }
      function H(e) {
        var t = U(e.onDockPress),
          n = U(e.onRequestClose),
          a = U(e.onTogglePlayback),
          r = U(e.onUserPress),
          i = p.a.useMemo(
            function () {
              var t,
                n = null === (t = e.user.profile_image_extensions_media_color) || void 0 === t ? void 0 : t.palette
              if (n) {
                var a = h.a.get(n)
                if (a) return W(a.rgb)
              }
              return I.a.theme.colors.primary
            },
            [e.user],
          ),
          o = e.isMuted ? B.unmute : B.mute
        return p.a.createElement(
          R.a,
          { style: [V.wideContainer, V.wideContainerBorderRadius] },
          p.a.createElement(
            R.a,
            { style: V.mainContentContainer },
            p.a.createElement(
              R.a,
              { style: [V.wideAvatarContainer, { backgroundColor: i }] },
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
              R.a,
              { style: V.mainContent },
              p.a.createElement(O.a, {
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
              p.a.createElement(m.b, { numberOfLines: 2, onPress: t, size: 'subtext2', weight: 'bold' }, e.title),
            ),
          ),
          p.a.createElement(
            R.a,
            { style: V.belowMainContent },
            p.a.createElement(
              R.a,
              { style: V.slider },
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
              R.a,
              { style: V.iconRow },
              p.a.createElement(
                L.a,
                u()(
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
                  N,
                ),
              ),
              p.a.createElement(
                f.a,
                u()(
                  {
                    accessibilityLabel: e.isPlaying ? B.pause : B.play,
                    icon: e.isPlaying ? p.a.createElement(_.a, null) : p.a.createElement(M.a, null),
                    onPress: a,
                    testID: 'togglePlayback',
                  },
                  N,
                ),
              ),
            ),
          ),
          p.a.createElement(
            f.a,
            u()(
              {
                accessibilityLabel: B.close,
                icon: p.a.createElement(z.a, null),
                onPress: n,
                style: V.closeIcon,
                testID: 'close',
              },
              N,
            ),
          ),
        )
      }
      function A(e) {
        var t,
          n = p.a.useRef({}),
          a = p.a.useRef(null),
          i = e.isWide && V.wideContainerBorderRadius,
          c = U(function () {
            n.current.isSliderActive || e.onDockPress()
          }),
          s = p.a.useMemo(function () {
            return function () {
              a.current && a.current.focus()
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
              a.current && a.current.addEventListener('keydown', t),
              function () {
                a.current && a.current.removeEventListener('keydown', t)
              }
            )
          },
          [a.current, e.onTogglePlayback],
        ),
          p.a.useEffect(function () {
            return function () {
              clearTimeout(n.current.onSliderActiveTimeout)
            }
          }, [])
        var l = e.title || B.untitled,
          u = o()(
            o()({}, e),
            {},
            {
              title: l,
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
        return p.a.createElement(
          S.a,
          {
            enabled: !0,
            handlers:
              ((t = {}), r()(t, S.a.shortcuts.audio.dock, s), r()(t, S.a.shortcuts.audio.play, e.onTogglePlayback), t),
          },
          p.a.createElement(
            b.a,
            {
              accessibilityLabel: B.voiceDock,
              onPress: c,
              ref: function (e) {
                a.current = e
              },
              style: [F.container, i],
            },
            p.a.createElement(
              R.a,
              { style: [F.innerContainer, i] },
              e.isWide ? p.a.createElement(H, u) : p.a.createElement(j, u),
            ),
          ),
        )
      }
      function D(e) {
        var t = e.isWide ? w.a.DesktopVoiceTweetDock : w.a.MobileVoiceTweetDock,
          n = [e.isWide ? [V.root, { maxWidth: e.width }] : F.root]
        return p.a.createElement(
          t,
          null,
          p.a.createElement(E.a, { id: 'VoiceTweetDock' }, function (t, a) {
            return p.a.createElement(R.a, u()({ ref: t() }, a({ style: n })), p.a.createElement(A, e))
          }),
        )
      }
      D.SeekSlider = function (e) {
        var t,
          n = p.a.useRef({ isSliderActive: !1, lastSeekMs: -1 }),
          a = p.a.useState(!1),
          r = s()(a, 2),
          i = r[0],
          o = r[1],
          c = p.a.useState(e.progressMs),
          l = s()(c, 2),
          u = l[0],
          d = l[1]
        function m(e) {
          ;(n.current.lastSeekMs = e), d(e)
        }
        p.a.useEffect(
          function () {
            e.externalSeeking || (n.current.lastSeekMs = -1)
          },
          [e.externalSeeking],
        ),
          (t =
            e.externalSeeking && u !== n.current.lastSeekMs ? e.progressMs : e.externalSeeking || i ? u : e.progressMs)
        var f = p.a.createElement(x.a, {
          accessibilityLabel: B.seekSlider,
          color: 'purple500',
          keepLTR: !0,
          keyboardStep: 5e3,
          max: e.durationMs,
          min: 0,
          onActive: function (t) {
            e.onSliderActive && e.onSliderActive(t),
              (n.current.isSliderActive = t),
              t ? m(e.progressMs) : e.onSeek(u),
              o(t)
          },
          onChange: function (t) {
            n.current.isSliderActive ? m(t) : e.onSeek(t)
          },
          step: 'any',
          value: t,
          withGrayBackground: !0,
          withHidingThumb: !0,
        })
        if (!e.withTimes) return f
        var h = e.durationMs - t
        return p.a.createElement(
          R.a,
          null,
          p.a.createElement(R.a, { style: V.sliderRow }, p.a.createElement(R.a, { style: V.slider }, f)),
          p.a.createElement(
            R.a,
            { style: V.sliderTimes },
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
      var B = {
          untitled: g.a.gfaaead7,
          close: g.a.af8fa2ad,
          pause: g.a.fb236727,
          play: g.a.f17dfdb5,
          voiceDock: g.a.cfd13f46,
          unmute: g.a.b8b6344a,
          mute: g.a.ec8ab8b4,
          volumeSlider: g.a.c9a642f9,
          seekSlider: g.a.hea01797,
        },
        N = { borderColor: 'transparent', color: 'text', size: 'medium' },
        F = I.a.create(function (e) {
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
        V = I.a.create(function (e) {
          var t = e.spaces.space16,
            n = e.borderRadii.xLarge,
            a = e.spaces.space4
          return {
            root: {
              alignSelf: 'flex-end',
              width: '100%',
              marginVertical: e.spaces.space20,
              marginRight: e.spaces.space20,
            },
            wideContainerBorderRadius: { borderRadius: n },
            wideContainer: { padding: t, paddingRight: a },
            wideAvatarContainer: { borderRadius: e.borderRadii.medium, padding: e.spaces.space12 },
            mainContentContainer: { flexDirection: 'row' },
            mainContent: {
              marginLeft: e.spaces.space12,
              marginRight: e.spaces.space40,
              flex: 1,
              flexDirection: 'column',
            },
            username: { color: e.colors.gray700 },
            closeIcon: { position: 'absolute', top: a, right: a },
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
      var W = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
          return 'rgba('.concat(e.red, ', ').concat(e.green, ', ').concat(e.blue, ', ').concat(t, ')')
        },
        q = 200
    },
    b2fv: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return i
      }),
        n.d(t, 'a', function () {
          return o
        })
      var a = new Date('Jan 01 1900 GMT').getTime(),
        r = new Date('Jan 01 1970 GMT').getTime() - a,
        i = function (e) {
          return new Date(1e3 * e - r)
        },
        o = function (e) {
          return (e + r) / 1e3
        }
    },
    dgjd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return _
      })
      var a = n('ddV6'),
        r = n.n(a),
        i =
          (n('tVqn'),
          n('z84I'),
          n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('+KXO'),
          n('JtPf'),
          n('IAdD'),
          n('849X'),
          n('TJCb'),
          n('Q/sS')),
        o = n('A7Vd'),
        c = n('ERkP'),
        s = n.n(c),
        l = n('RqPI'),
        u = n('QEWO'),
        d = n('Pc/x'),
        p = n('yiKp'),
        m = n.n(p),
        f = n('VrFO'),
        h = n.n(f),
        v = n('Y9Ll'),
        g = n.n(v),
        b = n('KEM+'),
        y = n.n(b),
        S = (n('KqXw'), n('Ysgh'), n('KOtZ'), n('2G9S'), n('cnVF')),
        E = new ((function () {
          function e() {
            h()(this, e), y()(this, 'events', [])
          }
          return (
            g()(e, [
              {
                key: 'createScribeFunction',
                value: function (e) {
                  var t = this
                  return function (n, a) {
                    var i = e.analytics.contextualScribeNamespace,
                      o = m()(m()({}, e.details), {}, { scribe_context_namespace: i }, a),
                      c = n.split(':'),
                      s = r()(c, 6),
                      l = { page: s[1], section: s[2], component: s[3], element: s[4], action: s[5] },
                      u = Object.keys(l).reduce(function (e, t) {
                        var n = l[t]
                        return '*' === n || (e[t] = n || void 0), e
                      }, {})
                    e.analytics.scribe(m()(m()({}, u), {}, { data: { audio_space_details: o } })),
                      t.events.push({ event_name: ''.concat(S.w).concat(n), ts: Date.now(), audio_space_details: o }),
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
        k = n.n(w),
        C = n('kGix'),
        x = n('3XMw'),
        I = n.n(x),
        P = n('b2fv'),
        T = n('Tg44'),
        O = n('Irs7'),
        R = n('LxAE'),
        L = n('yUQf')
      function _(e) {
        var t,
          n,
          a,
          c,
          p,
          m = Object(O.b)(),
          f = Object(L.a)(l.n),
          h = (function (e) {
            var t = (function () {
                var e = Object(R.a)(),
                  t = r()(e.audioSpaces.cache, 2),
                  n = t[0],
                  a = t[1]
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
                  return t || M(C.a.NONE)
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
                    r = i(e)
                  if ('number' == typeof t && r.status !== C.a.NONE && !((Date.now() - r.time) / 1e3 > t))
                    return Promise.resolve(r)
                  function o(t) {
                    var n = M(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {})
                    a(function (t) {
                      var a = Object.assign({}, t[e], n)
                      return (t[e] = a), Object.assign({}, t)
                    })
                  }
                  return d.a.initialized()
                    ? (o(C.a.LOADING),
                      d.a
                        .audioSpace(e)
                        .catch(function (e) {
                          n = e
                        })
                        .then(function (e) {
                          e ? o(C.a.LOADED, { data: e, error: void 0 }) : n && o(C.a.FAILED, { error: n })
                        }))
                    : Promise.reject(new Error('[useAudioSpaceMetadata] AudioModule not initialized'))
                }
              })(),
              n = t.audioContext,
              a = t.fetchAudioSpace,
              i = t.getAudioSpace,
              c = t.reportSpaceFor,
              s = t.subscribeToScheduledSpace,
              l = t.unsubscribeFromScheduledSpace
            function u(t) {
              return a(e, t)
            }
            function p() {
              return i(e)
            }
            function m() {
              return s(e)
            }
            function f() {
              return l(e)
            }
            function h() {
              var t = {}
              return (
                Object.keys(c).forEach(function (n) {
                  t[n] = function () {
                    var t,
                      a = o.a(),
                      r = null === (t = p().data) || void 0 === t ? void 0 : t.started_at,
                      i = { broadcast_id: e, ntp_timestamp: void 0, timecode: void 0 }
                    if (a && a.id3NtpTime && r) {
                      var s = Math.floor(a.id3NtpTime)
                      ;(i.ntp_timestamp = s), (i.timecode = Math.floor((Object(P.b)(s) - r) / 1e3))
                    }
                    return c[n](i)
                  }
                }),
                t
              )
            }
            return { fetch: u, get: p, subscribe: m, unsubscribe: f, audioContext: n, report: h() }
          })(e),
          v = h.audioContext,
          g = h.report,
          b = h.subscribe,
          y = h.unsubscribe,
          S = h.get(),
          w = S.data,
          x = null == w ? void 0 : w.state,
          I = {
            NotStarted: x === T.a.SpaceState.NotStarted,
            PrePublished: x === T.a.SpaceState.PrePublished,
            Running: x === T.a.SpaceState.Running,
            TimedOut: x === T.a.SpaceState.TimedOut,
            Ended: x === T.a.SpaceState.Ended,
            Canceled: x === T.a.SpaceState.Canceled,
            loaded: !!w || S.status === C.a.FAILED,
            loading: S.status === C.a.LOADING,
            error: S.status === C.a.FAILED && S.error,
            joined:
              (null === (t = v.activeItem) || void 0 === t ? void 0 : t.type) === u.a.space &&
              (null === (n = v.activeItem) || void 0 === n ? void 0 : n.id) === e,
            recording: !1,
            replayable: !1,
          }
        function _() {
          var e,
            t,
            n = null == w || null === (e = w.title) || void 0 === e ? void 0 : e.trim(),
            a = null == w || null === (t = w.host) || void 0 === t ? void 0 : t.display_name
          return n || (a ? j.title({ name: a }) : j.titleFallback)
        }
        null != w &&
          w.is_space_available_for_replay &&
          (I.Running ? (I.recording = !0) : (I.Ended || I.TimedOut) && (I.replayable = !0))
        var H = 'live_not_recording'
        null != w && w.is_space_available_for_replay && (H = I.Running ? 'live_recording' : 'replay')
        var A = E.createScribeFunction({
          analytics: m,
          details: {
            broadcast_id: e,
            host_id:
              null == w || null === (a = w.host) || void 0 === a || null === (c = a.user) || void 0 === c
                ? void 0
                : c.rest_id,
            host_periscope_id: null == w || null === (p = w.host) || void 0 === p ? void 0 : p.periscope_user_id,
            audio_space_start_type: null != w && w.scheduled_start ? 'scheduled' : 'adhoc',
            audio_space_recording_type: H,
            state: x,
            is_logged_in: f,
          },
        })
        var D = {
            is: I,
            title: _,
            hashtags: function () {
              return k()(_()).map(function (e) {
                return '#'.concat(e)
              })
            },
            scribe: A,
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
              var e = w || {},
                t = e.total_live_listeners,
                n = e.total_replay_watched
              return (null != t ? t : 0) + (null != n ? n : 0)
            },
          },
          B = d.a.initialized(),
          N = s.a.useRef({})
        ;(N.current.utils = D),
          (N.current.audioSpaceMetadata = h),
          s.a.useEffect(
            function () {
              var e,
                t = z
              return (
                B &&
                  (function n() {
                    var a = N.current.utils.is.loaded,
                      r = N.current.utils.is.Running
                    ;(a && !r) || (N.current.audioSpaceMetadata.fetch(t), (e = setTimeout(n, 1e3 * t)))
                  })(),
                function () {
                  clearTimeout(e)
                }
              )
            },
            [B, e, x],
          )
        var F = {
          subscribe: b,
          unsubscribe: y,
          report: g,
          join: function (t) {
            var n = w
            n &&
              d.a.proxsee.login().then(function () {
                var a = D.is.Running || D.is.replayable,
                  r = n.media_key
                r &&
                  a &&
                  (D.is.replayable
                    ? (i.f(n.started_at), D.scribe(':audiospace:replay:recording:play:click', { origin: t }))
                    : i.e(),
                  v.load.space(e, r, D.is.Running),
                  D.scribe(':audiospace:event:join:listener:success', { origin: t }))
              })
          },
        }
        return { space: w, audioContext: v, utils: D, handlers: F }
      }
      function M(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = { status: e, time: Date.now() }
        return t.data && (n.data = t.data), t.error && (n.error = t.error), n
      }
      var z = 15,
        j = { title: I.a.b6d3e0ee, titleFallback: I.a.ab4fc8bb }
    },
    e5HP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return M
      })
      var a = n('VrFO'),
        r = n.n(a),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('5Yy7'),
        s = n.n(c),
        l = n('2VqO'),
        u = n.n(l),
        d = n('KEM+'),
        p = n.n(d),
        m = n('ERkP'),
        f = n.n(m),
        h = n('t62R'),
        v = n('3XMw'),
        g = n.n(v),
        b = n('rHpw'),
        y = n('MWbm'),
        S = n('yiKp'),
        E = n.n(S),
        w = n('Lsrn'),
        k = n('k/Ka'),
        C = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(k.a)(
            'svg',
            E()(
              E()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [w.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            f.a.createElement(
              'g',
              null,
              f.a.createElement('path', {
                d: 'M12 1C5.92 1 1 5.92 1 12s4.92 11 11 11 11-4.92 11-11S18.08 1 12 1zm5.05 12.48c0 .48-.39.87-.88.87-.477 0-.87-.393-.87-.87V9.94l-6.85 6.85c-.163.166-.387.26-.62.26-.233 0-.457-.094-.62-.26-.338-.341-.338-.899 0-1.24l6.85-6.85h-3.54c-.477 0-.87-.393-.87-.87 0-.49.39-.88.87-.88h5.65c.11 0 .23.03.33.07.11.04.2.1.29.19.09.09.15.18.19.29.04.1.07.22.07.33v5.65z',
              }),
            ),
          )
        }
      C.metadata = { width: 24, height: 24 }
      var x = C,
        I = n('uFYP'),
        P = g.a.f1a1b790,
        T = g.a.if2bf8b3,
        O = g.a.f3624b5c,
        R = g.a.b4b3b113,
        L = g.a.be22205f,
        _ = g.a.hcbbe447,
        M = (function (e) {
          s()(n, e)
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
                    t = e.color,
                    n = e.nativeID,
                    a = e.style,
                    r = e.withCircleIcon ? x : I.a
                  return f.a.createElement(
                    y.a,
                    { style: [z.root, a] },
                    f.a.createElement(r, { style: [z.icon, t && z[t]] }),
                    f.a.createElement(h.b, { color: t, nativeID: n, size: 'subtext2' }, this._getPromotedLabel()),
                  )
                },
              },
              {
                key: '_getPromotedLabel',
                value: function () {
                  var e = this.props,
                    t = e.contentAuthorId,
                    n = e.label,
                    a = e.promotedContent,
                    r = a.adMetadataContainer,
                    i = a.advertiser,
                    o = a.advertiser_name,
                    c = a.disclosure_type,
                    s = t && i && t === i.id_str,
                    l = 'string' == typeof c && 'political' === c.toLowerCase(),
                    u = 'string' == typeof c && 'issue' === c.toLowerCase(),
                    d = !(!r || 'POLITICAL' !== r.disclaimerType) || l,
                    p = !(!r || 'ISSUE' !== r.disclaimerType) || u,
                    m = (r || {}).removePromotedAttributionForPreroll
                  return (
                    n ||
                    (!o || s || m
                      ? d
                        ? O
                        : p
                        ? L
                        : T
                      : d
                      ? R({ fullName: o })
                      : p
                      ? _({ fullName: o })
                      : P({ fullName: o }))
                  )
                },
              },
            ]),
            n
          )
        })(f.a.Component)
      p()(M, 'defaultProps', { color: 'gray700', withCircleIcon: !1 })
      var z = b.a.create(function (e) {
        return {
          root: { alignItems: 'center', flexDirection: 'row' },
          icon: { color: e.colors.gray700, height: '1em', marginRight: e.spaces.space4, flexShrink: 0 },
          gray700: { color: e.colors.gray700 },
          white: { color: e.colors.white },
        }
      })
    },
    hUaP: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return l
      }),
        n.d(t, 'b', function () {
          return u
        })
      var a = n('rHpw'),
        r = 0.85,
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
            m = d.top + p
          if (m - l < 0) {
            var f = m - u(a.a.theme).marginVerticalPx
            f > s && (l = f)
          }
        }
        return { collapse: l * o, half: l * i, sheetMaxHeight: l * r, full: l }
      }
      function u(e) {
        var t = e.borderRadiiPx.large,
          n = e.spaces.space16,
          a = e.spacesPx.space8
        return {
          borderRadius: t,
          paddingHorizontal: n,
          marginVertical: e.spaces.space20,
          marginVerticalPx: e.spacesPx.space20,
          shadowOffset: a,
        }
      }
    },
    hhqq: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        l = (n('ho0z'), n('21zW')),
        u = n('rHpw'),
        d = n('MH+I'),
        p = n('jV+4'),
        m = n('MWbm')
      function f(e) {
        var t = e.speaker,
          n = e.speakerAvatarSize,
          a = void 0 === n ? 'small' : n,
          r = e.speakerNameSize,
          i = void 0 === r ? 'subtext2' : r,
          o = e.speakerScreenNameSize,
          c = void 0 === o ? 'subtext2' : o,
          l = e.timestamp,
          u = e.withSpeakerAvatar,
          d = void 0 === u || u,
          f = e.withSpeakerScreenName,
          h = void 0 === f || f,
          b = e.withTimestamp,
          y = void 0 !== b && b,
          S = Date.now() - l
        return s.a.createElement(
          m.a,
          { style: g.root },
          s.a.createElement(p.a, {
            avatarSize: a,
            name: t.name,
            nameSize: i,
            profileImageUrl: d ? t.profile_image_url_https : '',
            screenName: t.screen_name,
            screenNameSize: c,
            style: g.userName,
            withScreenName: h,
          }),
          y ? s.a.createElement(v, { size: i, timeMs: S }) : null,
        )
      }
      function h(e, t) {
        return e && t && e.id_str && t.id_str
          ? e.id_str === t.id_str
          : !!(e && t && e.screen_name && t.screen_name) && e.screen_name === t.screen_name
      }
      function v(e) {
        var t = e.size,
          n = void 0 === t ? 'small' : t,
          a = e.timeMs
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(l.a, { size: n }),
          s.a.createElement(d.a, { color: 'gray700', humanReadable: !0, size: n, timeMs: a }),
        )
      }
      var g = u.a.create(function (e) {
          return {
            root: { flexDirection: 'row', flexShrink: 1, marginTop: '0.25em' },
            userName: { marginBottom: e.spaces.space4, paddingRight: e.spaces.space4 },
          }
        }),
        b = n('t62R'),
        y = ['caption', 'captionTextSize', 'withSpeaker']
      function S(e) {
        var t = e.caption,
          n = e.captionTextSize,
          a = e.withSpeaker,
          i = void 0 === a || a,
          c = o()(e, y),
          l = t.speaker
        return s.a.createElement(
          m.a,
          { style: [E.root, !i && E.missingSpeakerSpacer] },
          i ? s.a.createElement(f, r()({}, c, { speaker: l, timestamp: t.timestamp })) : null,
          s.a.createElement(b.b, { lang: t.lang, size: n, style: E.captionText }, t.text),
        )
      }
      var E = u.a.create(function (e) {
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
        w = n('yiKp'),
        k = n.n(w),
        C =
          (n('z84I'),
          n('i4UL'),
          function (e) {
            return { width: e, height: e }
          })
      function x(e) {
        var t = e.size,
          n = Math.floor(t / 4.5)
        return s.a.createElement(m.a, { style: [O.root, P(t)] }, s.a.createElement(I, { width: n }))
      }
      function I(e) {
        var t = e.width
        return s.a.createElement(
          s.a.Fragment,
          null,
          Array(3)
            .fill(0)
            .map(function (e, n) {
              return s.a.createElement(m.a, { key: n, style: [O.dot, T(n, t)] })
            }),
        )
      }
      function P(e) {
        return k()({}, C(e))
      }
      function T(e, t) {
        return k()({ animationDelay: ''.concat(0.5 * e, 's'), borderRadius: '100%' }, C(t))
      }
      var O = u.a.create(function (e) {
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
        R = n('sIe2'),
        L = [
          'captions',
          'footerHeight',
          'headerHeight',
          'scrollContainerStyle',
          'unintelligible',
          'withFrequentSpeakerAnnouncement',
        ]
      function _(e) {
        var t = e.captions,
          n = e.footerHeight,
          a = void 0 === n ? 28 : n,
          i = e.headerHeight,
          c = void 0 === i ? 28 : i,
          l = e.scrollContainerStyle,
          u = e.unintelligible,
          d = void 0 !== u && u,
          p = e.withFrequentSpeakerAnnouncement,
          f = void 0 !== p && p,
          v = o()(e, L),
          g = s.a.useRef(null),
          b = s.a.useRef(null),
          y = s.a.useRef({ containerHeight: void 0, hasUserScrolledUp: !1 })
        function E() {
          var e, t
          ;(null !== (e = y.current) && void 0 !== e && e.hasUserScrolledUp) ||
            null === (t = b.current) ||
            void 0 === t ||
            t.scrollToEnd({ animated: !0 })
        }
        return (
          s.a.useEffect(function () {
            var e
            y.current.containerHeight =
              null == g || null === (e = g.current) || void 0 === e ? void 0 : e.getBoundingClientRect().height
          }, []),
          s.a.useEffect(function () {
            var e = null
            return (
              (function t() {
                E(), (e = setTimeout(t, 1500))
              })(),
              function () {
                clearTimeout(e)
              }
            )
          }, []),
          s.a.createElement(
            m.a,
            { ref: g, style: j.root },
            s.a.createElement(R.a, {
              ListFooterComponent: s.a.createElement(z, { footerHeight: a, unintelligible: d }),
              ListHeaderComponent: s.a.createElement(M, { headerHeight: c }),
              accessibilityRole: 'listbox',
              contentContainerStyle: { marginBottom: 0 },
              data: t,
              keyExtractor: function (e) {
                return e.sequenceId
              },
              maintainVisibleContentPosition: { minIndexForVisible: 0 },
              onEndReached: function () {
                E()
              },
              onScroll: function (e) {
                var t = e.nativeEvent,
                  n = t.contentOffset,
                  r = t.contentSize,
                  i = t.layoutMeasurement,
                  o = 2 * (y.current.containerHeight || 0) + a,
                  c = r.height - i.height - n.y - o > 0
                y.current.hasUserScrolledUp = c
              },
              ref: b,
              renderItem: function (e) {
                var n,
                  a = e.index,
                  i = e.item,
                  o = !0
                return (
                  f || (o = !h(i.speaker, null === (n = t[a - 1]) || void 0 === n ? void 0 : n.speaker)),
                  s.a.createElement(S, r()({}, v, { caption: i, key: i.sequenceId, withSpeaker: o }))
                )
              },
              scrollEventThrottle: 100,
              style: [j.captionsContainer, l],
            }),
          )
        )
      }
      function M(e) {
        var t = e.headerHeight
        return s.a.createElement(m.a, { style: { height: t } })
      }
      function z(e) {
        var t = e.footerHeight,
          n = e.unintelligible
        return s.a.createElement(
          s.a.Fragment,
          null,
          n ? s.a.createElement(x, { size: 20 }) : null,
          s.a.createElement(m.a, { style: { height: t } }),
        )
      }
      var j = u.a.create(function (e) {
        return {
          root: { height: '100%', width: '100%', flex: 1 },
          captionsContainer: { maxHeight: '100%', height: '100%' },
        }
      })
      ;(_.Caption = S), (_.areSpeakersIdentical = h)
      t.a = _
    },
    hqDb: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        f = n.n(m),
        h = n('2VqO'),
        v = n.n(h),
        g = n('KEM+'),
        b = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        S = n.n(y),
        E = n('k49u'),
        w = (n('LW0h'), n('7x/C'), n('KOtZ'), n('vrRf'), n('6xIQ')),
        k = n('kGix'),
        C = n('G6rE'),
        x = n('rxPX'),
        I = n('0KEI'),
        P = function (e, t) {
          return t.userIds
        },
        T = function (e, t) {
          return t.userIds.filter(function (t) {
            return !!C.e.select(e, t)
          })
        },
        O = function (e, t) {
          return t.userIds.reduce(function (t, n) {
            var a = C.e.selectFetchStatus(e, n)
            return (t[n] = a === k.a.NONE ? k.a.LOADING : a), t
          }, {})
        },
        R = Object(x.a)()
          .propsFromState(function () {
            return {
              availableUserIds: Object(w.a)(T, function (e) {
                return e
              }),
              fetchStatus: Object(w.a)(T, O, P, function (e, t, n) {
                for (var a = k.a.LOADED, r = 0; r < n.length; r++) {
                  var i = n[r]
                  if (-1 === e.indexOf(i)) {
                    var o = t[i] || k.a.LOADING
                    a = a === k.a.LOADED ? o : a
                  }
                  if (a === k.a.LOADED) break
                }
                return a
              }),
            }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'USERS_LIST_CONTAINER',
              ),
              fetchUsersIfNeeded: C.e.fetchManyIfNeeded,
            }
          }),
        L = n('v//M'),
        _ = n('3XMw'),
        M = n.n(_),
        z = n('pQ3Z'),
        j = n.n(z),
        H = (n('z84I'), n('cFuS')),
        A = n('Re5t'),
        D = n('MWbm'),
        B = n('88ay'),
        N = function (e) {
          var t = e.displayMode,
            n = e.renderUserCell,
            a = e.userIds
          e.withFinalItemBorder, e.withItemBorder
          return S.a.createElement(
            D.a,
            null,
            a.map(function (e, a) {
              return n
                ? n(e)
                : S.a.createElement(B.b, {
                    decoration: B.e,
                    displayMode: t,
                    key: e,
                    promotedItemType: H.c.USER,
                    userId: e,
                    withFollowsYou: !0,
                  })
            }),
          )
        }
      N.defaultProps = { displayMode: A.a.UserDetailed, withFinalItemBorder: !0, withItemBorder: !1 }
      var F = N,
        V = ['availableUserIds', 'createLocalApiErrorHandler', 'fetchStatus', 'fetchUsersIfNeeded', 'userIds'],
        U = M.a.f5b426c2,
        W = { viewType: 'user_list' },
        q = R(
          (function (e) {
            f()(n, e)
            var t = v()(n)
            function n() {
              var e
              s()(this, n)
              for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c]
              return (
                (e = t.call.apply(t, [this].concat(i))),
                b()(p()(e), 'state', { allUsersUnavailable: !1 }),
                b()(p()(e), '_renderContent', function () {
                  var t = e.props,
                    n = t.availableUserIds,
                    a = (t.createLocalApiErrorHandler, t.fetchStatus, t.fetchUsersIfNeeded, t.userIds, o()(t, V))
                  return S.a.createElement(F, r()({}, a, { userIds: n }))
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
                    j()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded()
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return S.a.createElement(L.a, {
                      accessibilityLabel: U,
                      behavioralEventContext: W,
                      fetchStatus: this.state.allUsersUnavailable ? k.a.LOADED : this.props.fetchStatus,
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
          })(S.a.Component),
        )
      t.a = q
    },
    kRXa: function (e, t, n) {
      'use strict'
      var a = n('97Jx'),
        r = n.n(a),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        l = n('Y9Ll'),
        u = n.n(l),
        d = n('1Pcy'),
        p = n.n(d),
        m = n('5Yy7'),
        f = n.n(m),
        h = n('2VqO'),
        v = n.n(h),
        g = n('KEM+'),
        b = n.n(g),
        y = (n('2G9S'), n('ERkP')),
        S = n.n(y),
        E = n('/yvb'),
        w = n('3XMw'),
        k = n.n(w),
        C = n('py1r'),
        x = n('oLZl'),
        I = n('9RkS'),
        P = n('rHpw'),
        T = n('A53h'),
        O = n('sTSP'),
        R = n('MWbm'),
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
        _ = k.a.b3160a69,
        M = (function (e) {
          f()(n, e)
          var t = v()(n)
          function n() {
            var e
            s()(this, n)
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              b()(p()(e), 'state', { showSlider: !1, isSliderActive: !1 }),
              b()(p()(e), '_handleButtonLayoutChange', function (t) {
                var n = e.props.containerHeight,
                  a = e.state.sliderMaxHeight,
                  r = t.nativeEvent.layout.height
                if (n) {
                  var i = ''.concat(n - r - P.a.theme.spacesPx.space20, 'px')
                  i !== a && e.setState({ sliderMaxHeight: i })
                }
              }),
              b()(p()(e), '_handleSliderActive', function (t) {
                return e.setState({ isSliderActive: t })
              }),
              b()(p()(e), '_showSlider', function () {
                return e.setState({ showSlider: !0 })
              }),
              b()(p()(e), '_hideSlider', function () {
                return e.setState({ showSlider: !1 })
              }),
              b()(p()(e), '_shouldShowSlider', function (e) {
                return e.showSlider || e.isSliderActive
              }),
              b()(p()(e), '_normalizeValue', function (e) {
                return Math.max(0, Math.min(e, 100))
              }),
              b()(p()(e), '_getSliderMarginStyles', function (e) {
                var t = null != e ? e : 'medium'
                return j['large' === t ? 'xLarge' : t]
              }),
              b()(p()(e), '_handleKeyDown', function (t) {
                var n = e.props,
                  a = n.onSliderChange,
                  r = n.volumePercent,
                  i = t.altKey,
                  o = t.ctrlKey,
                  c = t.metaKey
                if (!(i || o || c)) {
                  var s = t.key === x.a.ArrowUp || t.key === x.a.ArrowRight,
                    l = t.key === x.a.ArrowDown || t.key === x.a.ArrowLeft
                  if (s || l) {
                    var u = e._normalizeValue(r + 10 * (s ? 1 : -1))
                    a && a(u), t.preventDefault()
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
                    a = n.onHideSlider,
                    r = n.onShowSlider
                  if (n.onSliderChange) {
                    var i = this._shouldShowSlider(t),
                      o = this._shouldShowSlider(this.state)
                    !i && o && r && r(), i && !o && a && a()
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.accessibilityLabelIcon,
                    a = t.accessibilityLabelSlider,
                    i = t.containerHeight,
                    c = t.isMuted,
                    s = t.onHideSlider,
                    l = t.onMuteToggle,
                    u = t.onShowSlider,
                    d = t.onSliderChange,
                    p = t.pullRight,
                    m = t.sliderColor,
                    f = t.volumePercent,
                    h = t.withGraySliderTrack,
                    v = t.withNavigationSliderBackground,
                    g = o()(t, L),
                    b = c ? S.a.createElement(T.a, null) : S.a.createElement(O.a, null),
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
                      R.a,
                      { onKeyDown: d ? this._handleKeyDown : void 0 },
                      S.a.createElement(
                        E.a,
                        r()(
                          {
                            accessibilityLabel: n,
                            icon: b,
                            onLayout: this._handleButtonLayoutChange,
                            onPress: l,
                            pullRight: p,
                            type: 'onMediaText',
                          },
                          g,
                        ),
                      ),
                      d &&
                        S.a.createElement(C.a, { onFocusRingGained: u, onFocusRingLost: s }, function (t) {
                          var n = t.isFocusedWithin
                          return S.a.createElement(
                            R.a,
                            {
                              style: [
                                z.sliderBackground,
                                y,
                                e._getSliderMarginStyles(g.size),
                                n || e._shouldShowSlider(e.state) ? null : P.a.visuallyHidden,
                                i && { maxHeight: e.state.sliderMaxHeight },
                              ],
                            },
                            S.a.createElement(I.a, {
                              accessibilityLabel: a,
                              accessibilityLabelValueText: _({ volumePercent: f }),
                              color: m || 'white',
                              isVertical: !0,
                              keyboardStep: 10,
                              max: 100,
                              min: 0,
                              onActive: e._handleSliderActive,
                              onChange: d,
                              step: 1,
                              value: c ? 0 : f || 0,
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
        })(S.a.PureComponent)
      b()(M, 'defaultProps', { pullRight: !1 })
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
        j = P.a.create(function (e) {
          var t = e.spaces,
            n = e.spacesPx,
            a = ''.concat(n.space16 + n.space4 + n.space2, 'px'),
            r = ''.concat(n.space20 + n.space24, 'px'),
            i = ''.concat(n.space12 + n.space40, 'px')
          return {
            xSmall: { marginBottom: t.space24 },
            small: { marginBottom: t.space32 },
            medium: { marginBottom: t.space36 },
            large: { marginBottom: r },
            xLarge: { marginBotom: i },
            smallCompact: { marginBottom: a },
            DEPRECATED_normalCompact: { marginBottom: t.space32 },
            DEPRECATED_normal: { marginBottom: t.space40 },
          }
        })
      t.a = M
    },
    lOQR: function (e, t, n) {
      'use strict'
      n('hBpG'), n('7x/C')
      var a = n('6/RC'),
        r = n.n(a),
        i = n('aITJ'),
        o = {
          setLocation: function (e) {
            document.location = e
          },
          getAppStoreURLs: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'rwoiah',
              t = c(e),
              n = [t.android, t.ios, t.windows],
              a = n.find(function (e) {
                return e.matches()
              })
            return a ? [a] : n
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
    nmVb: function (e, t, n) {
      'use strict'
      var a = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          for (var t = [], n = (0, r.default)(e), a = 0; a < n.length; a++) t.push(n[a].hashtag)
          return t
        })
      var r = a(n('yyPN'))
      e.exports = t.default
    },
    p3P5: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return x
      }),
        n.d(t, 'b', function () {
          return O
        })
      var a,
        r = n('yiKp'),
        i = n.n(r),
        o = n('KEM+'),
        c = n.n(o),
        s = (n('ho0z'), n('z84I'), n('ERkP')),
        l = n.n(s),
        u = n('G/+M'),
        d = n('v6aA'),
        p = n('3XMw'),
        m = n.n(p),
        f = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        h = n('RuTB'),
        v = Object(f.a)({
          loader: function () {
            return m.a.emoji.then(function () {
              return Promise.all([n.e(17), n.e(230)]).then(n.bind(null, '4AX5'))
            })
          },
          renderPlaceholder: function (e, t) {
            return l.a.createElement(h.a, { hasError: e, onRetry: t })
          },
        }),
        g = n('MWbm'),
        b = n('TIdA'),
        y = n('jhWN'),
        S = n('t62R'),
        E = n('jV+4'),
        w = n('rHpw'),
        k = n('VKFJ'),
        C = b.a.createLayoutCache()
      function x(e) {
        var t = l.a.useContext(d.a).featureSwitches,
          n = e.children,
          a = e.hasNftAvatar,
          r = e.isVerified,
          i = e.kind,
          o = e.name,
          c = e.periscopeUserId,
          s = e.screenName,
          u = e.width,
          p = a && t.isTrue('responsive_web_nft_avatar'),
          m = i ? P[i] : null,
          f = e.profile_image_url_https || '',
          h =
            n ||
            l.a.createElement(y.a, {
              imageLayoutCache: C,
              screenName: s,
              shape: p ? 'hex' : 'circle',
              size: R,
              style: T.participantAvatarSize,
              uri: f,
              withHoverCard: !0,
              withLink: !0,
            })
        return l.a.createElement(
          g.a,
          { style: [{ width: u }, T.participantCell] },
          l.a.createElement(g.a, { style: T.participantAvatarSize }, h, l.a.createElement(I, { periscopeUserId: c })),
          l.a.createElement(
            S.b,
            { numberOfLines: 1, size: 'subtext2', style: T.participantCellUsername, weight: 'bold' },
            l.a.createElement(E.a, { isVerified: r, name: o }),
          ),
          l.a.createElement(
            g.a,
            { style: T.participantCellKindContainer },
            e.speakingIndicator,
            l.a.createElement(
              S.b,
              { color: 'gray700', numberOfLines: 1, size: 'subtext2', style: T.participantCellKind },
              m || l.a.createElement('span', null, ' '),
            ),
          ),
        )
      }
      function I(e) {
        var t = e.periscopeUserId,
          n = L(w.a.theme).avatar.size,
          a = u.c(t)
        return l.a.createElement(
          l.a.Fragment,
          null,
          null == a
            ? void 0
            : a.map(function (e) {
                return l.a.createElement(v, { key: e.id, reaction: e, size: n })
              }),
        )
      }
      var P =
          ((a = {}),
          c()(a, k.a.host, m.a.cededf29),
          c()(a, k.a.cohost, m.a.f77997bf),
          c()(a, k.a.speaker, m.a.i48f4ed8),
          c()(a, k.a.listener, m.a.a77c8e02),
          a),
        T = w.a.create(function (e) {
          var t = L(e),
            n = { width: t.avatar.size, height: t.avatar.size }
          return {
            participantCell: i()({ justifyContent: 'center', alignItems: 'center' }, t.participantCell),
            participantCellUsername: t.participantCellUsername,
            participantCellKindContainer: { position: 'relative', justifyContent: 'center' },
            participantCellKind: { lineHeight: t.kind.lineHeight },
            participantAvatarSize: n,
          }
        })
      function O(e) {
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
      var R = 'xxLarge'
      function L(e) {
        var t = y.a.getSizeStyle('xxLarge').width || e.spacesPx.space48,
          n = e.spacesPx.space20,
          a = e.spacesPx.space8,
          r = e.spacesPx.space80 + 2 * a,
          i = e.spacesPx.space4,
          o = e.lineHeightsPx.headline2,
          c = e.lineHeightsPx.headline2
        return {
          participantCell: { marginBottom: n, paddingHorizontal: a, minWidth: r, height: t + i + o + c + n },
          avatar: { size: t },
          participantCellUsername: { lineHeight: o, paddingTop: i },
          kind: { lineHeight: c },
        }
      }
    },
    ssnq: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      })
      var a = n('ddV6'),
        r = n.n(a),
        i = n('T0aG'),
        o = n.n(i),
        c =
          (n('lTEL'),
          n('7x/C'),
          n('LqLs'),
          n('87if'),
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
      function m(e) {
        var t = u(e || {}),
          n = u(t),
          a = new Set()
        function i(e) {
          return (
            a.add(e),
            function () {
              a.delete(e)
            }
          )
        }
        function c() {
          a.forEach(function (e) {
            e(n)
          })
        }
        function l(e) {
          return function (t) {
            var n = e.current.slice,
              a = e.current.state,
              r = e.current.selector(t)
            e.current.equality(r, n, t, a) ||
              ((e.current.slice = r), (e.current.state = t), e.current.onUpdate(e.current.slice))
          }
        }
        return {
          getState: function () {
            return n
          },
          setState: function (e) {
            ;(n = Object(p.a)(n, function (t) {
              var n,
                a,
                r,
                i = e(t)
              i &&
                'object' === o()(i) &&
                ((n = t),
                (a = i),
                (r = {}),
                Object.keys(a).forEach(function (e) {
                  ;(r[e] = !0), (n[e] = a[e])
                }),
                Object.keys(n).forEach(function (e) {
                  r[e] || delete n[e]
                }))
            })),
              c()
          },
          reset: function () {
            ;(n = u(t)), c()
          },
          useSlice: function (e, t) {
            var a = (null == t ? void 0 : t.equalityFn) || f.equality,
              o = d.a,
              c = s.a.useRef({ state: n, slice: e(n), selector: e, equality: a, onUpdate: o })
            ;(c.current.selector = e), (c.current.equality = a)
            var u = s.a.useState(function () {
                return c.current.slice
              }),
              p = r()(u, 2),
              m = p[0],
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
                function a(n) {
                  e && t(n)
                }
                a(n)
                var r = i(a)
                return function () {
                  ;(e = !1), r()
                }
              }, []),
              m
            )
          },
          subscribe: function (e, t, a) {
            var r = (null == a ? void 0 : a.equalityFn) || f.equality,
              o = { current: { state: n, slice: e(n), selector: e, equality: r, onUpdate: t } },
              c = i(l(o))
            return o.current.onUpdate(o.current.slice), c
          },
        }
      }
      Object(p.b)()
      var f = {
        equality: function (e, t, n, a) {
          return e === t
        },
      }
    },
    tM6R: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var a = { help: 'https://help.twitter.com/using-twitter/spaces', settings: 'https://twitter.com/settings/spaces' }
    },
    uFYP: function (e, t, n) {
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
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    xVWt: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return nn
      }),
        n.d(t, 'b', function () {
          return cn
        }),
        n.d(t, 'c', function () {
          return hn
        })
      var a = n('m3Bd'),
        r = n.n(a),
        i = n('yiKp'),
        o = n.n(i),
        c = n('97Jx'),
        s = n.n(c),
        l = n('ddV6'),
        u = n.n(l),
        d = (n('7x/C'), n('JtPf'), n('z84I'), n('IAdD'), n('cFyg')),
        p = n('Q/sS'),
        m = n('A7Vd'),
        f = n('ERkP'),
        h = n.n(f),
        v = n('G/+M'),
        g = n('RhWx'),
        b = n.n(g),
        y = (n('LW0h'), n('wFPu'), n('vfdX'), n('ho0z'), n('KOtZ'), n('2G9S'), n('3XMw')),
        S = n.n(y),
        E = n('dgjd'),
        w = n('MWbm'),
        k = n('6iuV'),
        C = n('TCYy'),
        x = n('uCxL'),
        I = n('jV+4'),
        P = n('rHpw')
      function T(e) {
        var t = Object(E.a)(e.audioSpaceId).space
        if (!t) return null
        var n = t.sharings,
          a = b()(n)
            .reverse()
            .filter(function (e) {
              return e && e.tweet && e.user
            })
        return a.length ? h.a.createElement(O, { items: a }) : null
      }
      function O(e) {
        var t = e.items,
          n = t.reduce(function (e, t) {
            return t.tweet ? (e.length ? ''.concat(e, '.').concat(t.id) : t.id) : e
          }, ''),
          a = h.a.useState(),
          r = u()(a, 2),
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
            k.a,
            {
              childrenStyle: M.carouselChildrenStyles,
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
          h.a.createElement(C.a, { count: t.length, key: ''.concat(n, '-indicators'), max: L, selectedIndex: c }),
        )
      }
      function R(e) {
        if (!e.item) return null
        var t = e.item,
          n = t.tweet,
          a = t.user
        return h.a.createElement(
          w.a,
          { key: n.id_str, style: M.sharedContentContainer },
          h.a.createElement(x.a, { isCondensed: !0, tweet: n }),
          h.a.createElement(I.a, {
            avatarSize: 'small',
            name: _.sharedBy({ name: null == a ? void 0 : a.name }),
            nameSize: 'subtext2',
            profileImageUrl: null == a ? void 0 : a.profile_image_url_https,
            style: M.sharedContentBy,
            weight: 'normal',
          }),
        )
      }
      var L = 8,
        _ = { sharedBy: S.a.bdfa93eb },
        M = P.a.create(function (e) {
          return {
            sharedContentContainer: { paddingHorizontal: hn(e).container.paddingHorizontal, width: '100%' },
            carouselChildrenStyles: { scrollSnapAlign: 'center', scrollSnapStop: 'always', width: '100%' },
            sharedContentBy: { marginTop: e.spaces.space8 },
          }
        }),
        z = n('2C8o'),
        j = n('FGLp'),
        H = n('hhqq'),
        A = n('vbJ7')
      function D(e) {
        var t = e.audioSpaceId,
          n = e.height,
          a = z.d()
        return p.n()
          ? h.a.createElement(
              w.a,
              { style: [N.container, { height: n }] },
              h.a.createElement(w.a, { style: N.fadeIn }),
              h.a.createElement(B, { audioSpaceId: t, captions: a }),
              h.a.createElement(w.a, { style: N.fadeOut }),
            )
          : null
      }
      function B(e) {
        var t = e.audioSpaceId,
          n = e.captions,
          a = Object(E.a)(t).utils
        return (
          Object(j.a)(function () {
            a.scribe(':audiospace:::transcription:impression')
          }),
          h.a.createElement(H.a, {
            captionTextSize: 'body',
            captions: n,
            footerHeight: 28,
            headerHeight: 28,
            scrollContainerStyle: N.scrollContainerStyle,
            withSpeakerAvatar: !0,
            withSpeakerScreenName: !0,
          })
        )
      }
      var N = P.a.create(function (e) {
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
        F = n.p + 'spaces_clipping_banner.1bf85ac5.png',
        V = n('tM6R'),
        U = n.p + 'bird_spaces_transparent.4a7e7195.png',
        W = (n('1Iuc'), n('cm6r')),
        q = n('Wms4'),
        K = n('+/1j')
      function G(e) {
        return e.withEducationOnClick && e.audioSpaceId
          ? h.a.createElement(J, { audioSpaceId: e.audioSpaceId })
          : h.a.createElement(X, e)
      }
      function J(e) {
        var t = Object(E.a)(e.audioSpaceId).utils,
          n = p.k().openSheet
        return h.a.createElement(
          W.a,
          {
            accessibilityLabel: Y.recordingActive,
            onPress: function () {
              n(p.b.recordingEducation), t.scribe(':audiospace::recording:icon:click')
            },
          },
          h.a.createElement(X, { audioSpaceId: e.audioSpaceId }),
        )
      }
      function X(e) {
        return h.a.createElement(
          w.a,
          { style: Z.indicatorWrapper },
          h.a.createElement(
            q.a,
            { background: 'navigationBackground' },
            h.a.createElement(
              w.a,
              { style: Z.indicatorContainer },
              h.a.createElement(w.a, { style: [Z.indicatorDot, e.withoutPulse ? null : Z.indicatorDotAnimation] }),
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
        Q = n('TIdA'),
        $ = n('A91F'),
        ee = n('t62R'),
        te = n('/yvb'),
        ne = n('Lsrn'),
        ae = n('k/Ka'),
        re = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
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
        oe = n('RUwF')
      function ce() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            w.a,
            { style: ue.imageContainer },
            h.a.createElement(Q.a, { accessibilityLabel: '', aspectMode: $.a.COVER, image: U }),
          ),
          h.a.createElement(
            w.a,
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
                h.a.createElement(ee.b, { color: 'text', link: V.a.help, withUnderline: !0 }, S.a.ce0104de),
              ),
            ),
            h.a.createElement(te.a, { onClick: e, type: 'primaryOutlined' }, le.gotIt),
          ),
        )
      }
      function se(e) {
        return h.a.createElement(
          w.a,
          { style: [ue.sectionContainer, e.withOnlyMarginBottom ? ue.sectionMarginBottom : ue.sectionMarginVertical] },
          e.icon,
          h.a.createElement(
            w.a,
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
        de = n('SNyS'),
        pe = n('S+H3')
      function me() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            w.a,
            { style: fe.imageContainer },
            h.a.createElement(Q.a, { accessibilityLabel: '', aspectMode: $.a.COVER, image: F }),
          ),
          h.a.createElement(
            w.a,
            { style: fe.contentContainer },
            h.a.createElement(ee.b, { size: 'title3', style: fe.title, weight: 'bold' }, ve.title),
            h.a.createElement(ee.b, { color: 'gray700' }, ve.subtitle),
            he.map(function (e, t) {
              return h.a.createElement(se, s()({ key: t }, e))
            }),
            h.a.createElement(te.a, { onClick: e, style: fe.button, type: 'primaryOutlined' }, ve.gotIt),
          ),
        )
      }
      var fe = P.a.create(function (e) {
          return {
            imageContainer: { height: '180px', width: '100%', marginTop: e.spaces.space12 },
            button: { marginTop: e.spaces.space24 },
            contentContainer: { padding: e.spaces.space32 },
            title: { marginBottom: e.spaces.space8 },
            icon: { marginRight: e.spaces.space12, fill: e.colors.purple500, fontSize: e.fontSizes.title2 },
          }
        }),
        he = [
          { icon: h.a.createElement(de.a, { style: fe.icon }), title: S.a.f7c8617a, subtitle: S.a.ecc7d2eb },
          { icon: h.a.createElement(pe.a, { style: fe.icon }), title: S.a.d575ee02, subtitle: S.a.bb1e43e3 },
          { icon: h.a.createElement(ie, { style: fe.icon }), title: S.a.ed1d1ccf, subtitle: S.a.e5d193c7 },
        ],
        ve = { title: S.a.e1547ec0, subtitle: S.a.i154245e, gotIt: S.a.j24c37b2 },
        ge = n('KEM+'),
        be = n.n(ge),
        ye = (n('lTEL'), n('87if'), n('kYxP'), n('KrtT'), n('TJCb'), n('DZ+c'), n('yH/f'), n('HmZq')),
        Se = n('Pc/x'),
        Ee = n('hUaP'),
        we = n('fs1G'),
        ke = n('AMlz'),
        Ce = n('zCf4'),
        xe = n('sIe2')
      function Ie(e) {
        var t = e.id3NtpTime,
          n = Object(ke.a)(),
          a = t && Math.floor(t - n.durationSeconds),
          r = []
        return (
          a && t && (r = ye.getTranscript(a, t)),
          h.a.createElement(
            w.a,
            null,
            h.a.createElement(xe.a, {
              accessibilityRole: 'listbox',
              contentContainerStyle: Le.clipContent,
              data: r,
              keyExtractor: function (e) {
                return e.sequenceId
              },
              renderItem: function (e) {
                var t,
                  n = e.index,
                  a = e.item,
                  i = null === (t = r[n - 1]) || void 0 === t ? void 0 : t.speaker,
                  o = !H.a.areSpeakersIdentical(a.speaker, i)
                return h.a.createElement(H.a.Caption, { caption: a, key: a.sequenceId, withSpeaker: o })
              },
              scrollEventThrottle: 100,
            }),
          )
        )
      }
      function Pe(e) {
        var t = Object(Ce.f)(),
          n = Object(p.k)().requestSheetDismissal,
          a = Object(E.a)(e.audioSpaceId).space,
          r = Object(ke.a)(),
          i = h.a.useCallback(
            function () {
              if (a) {
                var i = e.currentTimeMs
                if (!i || i < r.durationMs) return
                Se.a.proxsee
                  .createClip({
                    broadcast_id: a.rest_id,
                    start_timecode_millis: Math.floor(i - r.durationMs),
                    end_timecode_millis: Math.floor(i),
                  })
                  .then(function (e) {
                    if (null != e && e.clip) {
                      n()
                      var a = new URLSearchParams(be()({}, Te.clipId, e.clip.clip_id))
                      t.push({
                        pathname: '/compose/tweet',
                        query: { text: Oe(e.clip.broadcast_id, a.toString()) },
                        state: { positionCursorAtBeginning: !0 },
                      })
                    }
                  })
              }
            },
            [a, r.durationMs, n, t, e.currentTimeMs],
          )
        return h.a.createElement(te.a, { onClick: i, type: 'primaryFilled' }, Re.next)
      }
      var Te = Object.freeze({ clipId: 'clipID' }),
        Oe = function (e, t) {
          return 'https://twitter.com/i/spaces/'.concat(e, '?').concat(t)
        },
        Re = { heading: S.a.cc724cb0, cancel: S.a.cfd2f35d, next: S.a.c1df579e },
        Le = P.a.create(function (e) {
          var t = Object(Ee.b)(e)
          return {
            container: { display: 'flex', justifyContent: 'space-between', height: '100%', padding: e.spaces.space16 },
            headingContainer: {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: e.spaces.space4,
              marginBottom: e.spaces.space20,
              paddingHorizontal: t,
            },
            clipContent: { marginBottom: e.spaces.space8 },
            helpCircle: { position: 'absolute', right: 0 },
            cancelButton: { position: 'absolute', left: 0 },
          }
        }),
        _e = function (e) {
          var t = Object(p.k)().requestSheetDismissal,
            n = h.a.useRef(m.a()).current
          return h.a.createElement(
            w.a,
            { style: Le.container },
            h.a.createElement(
              w.a,
              { style: Le.headingContainer },
              h.a.createElement(
                te.a,
                {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: 'text',
                  onClick: t,
                  size: 'xSmall',
                  style: Le.cancelButton,
                },
                Re.cancel,
              ),
              h.a.createElement(ee.b, { align: 'center', size: 'headline1', weight: 'bold' }, Re.heading),
              h.a.createElement(te.a, {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                color: 'text',
                icon: h.a.createElement(de.a, null),
                onClick: we.a,
                size: 'xSmall',
                style: Le.helpCircle,
              }),
            ),
            h.a.createElement(Ie, s()({}, e, { id3NtpTime: null == n ? void 0 : n.id3NtpTime })),
            h.a.createElement(Pe, s()({}, e, { currentTimeMs: null == n ? void 0 : n.currentTimeMs })),
          )
        },
        Me = n('PaZX'),
        ze = n('lOQR'),
        je = n('SQlS'),
        He = n('ISLN'),
        Ae = n('sTSP'),
        De = n('Zg3A'),
        Be = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(ae.a)(
            'svg',
            o()(
              o()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [ne.a.root, e.style],
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
      Be.metadata = { width: 24, height: 24 }
      var Ne = Be,
        Fe = 'spaces-intro-nux',
        Ve = { ios: ze.a.getiOSAppStoreLink(Fe), android: ze.a.getAndroidAppStoreLink(Fe) }
      function Ue() {
        var e = p.k().requestSheetDismissal
        return h.a.createElement(
          w.a,
          { style: Ge.container },
          h.a.createElement(
            w.a,
            { style: Ge.headingContainer },
            h.a.createElement(
              w.a,
              { style: Ge.headingIconContainer },
              h.a.createElement(je.a, { style: Ge.headingIcon }),
            ),
            h.a.createElement(
              w.a,
              null,
              h.a.createElement(ee.b, { align: 'center', size: 'title4', style: Ge.title, weight: 'bold' }, Ke.title),
              h.a.createElement(ee.b, { align: 'center', color: 'gray700', size: 'body' }, Ke.subtitle),
            ),
          ),
          h.a.createElement(
            w.a,
            { style: Ge.sectionsContainer },
            h.a.createElement(We, {
              icon: h.a.createElement(Ae.a, { style: Ge.sectionIcon }),
              subtitle: h.a.createElement(
                qe,
                null,
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'fc9fe08e' },
                  h.a.createElement(ee.b, { link: Ve.ios }, S.a.fd1d03b8),
                  h.a.createElement(ee.b, { link: Ve.android }, S.a.eb4e17b4),
                ),
              ),
              title: Ke.sections.listenLive.title,
            }),
            h.a.createElement(We, {
              icon: h.a.createElement(De.a, { style: Ge.sectionIcon }),
              subtitle: h.a.createElement(
                qe,
                null,
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'a8170308' },
                  h.a.createElement(ee.b, { link: V.a.help }, S.a.c220921d),
                ),
              ),
              title: Ke.sections.spacesArePublic.title,
            }),
            h.a.createElement(We, {
              icon: h.a.createElement(Ne, { style: Ge.sectionIcon }),
              subtitle: h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(
                  qe,
                  null,
                  h.a.createElement(
                    S.a.I18NFormatMessage,
                    { $i18n: 'ib602fd8' },
                    h.a.createElement(ee.b, { link: V.a.settings }, S.a.j5485ede),
                  ),
                ),
                h.a.createElement('br', null),
                h.a.createElement(qe, null, Ke.sections.manageExperience.blockAndReport),
              ),
              title: Ke.sections.manageExperience.title,
              withMarginBottom: !1,
            }),
          ),
          h.a.createElement(
            w.a,
            { style: Ge.bottomItems },
            h.a.createElement(
              w.a,
              { style: Ge.finePrintContainer },
              h.a.createElement(
                ee.b,
                { align: 'center', color: 'gray700', size: 'subtext1', style: Ge.finePrint },
                h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'i6164a47' },
                  h.a.createElement(ee.b, { link: V.a.help }, S.a.cdffdeb1),
                ),
              ),
            ),
            h.a.createElement(
              w.a,
              { style: Ge.ctaContainer },
              h.a.createElement(
                He.a,
                { accessibilityLabel: Ke.gotIt, onPress: e },
                h.a.createElement(
                  ee.b,
                  { align: 'center', color: 'white', numberOfLines: 1, size: 'body', weight: 'bold' },
                  Ke.gotIt,
                ),
              ),
            ),
          ),
        )
      }
      function We(e) {
        var t = e.icon,
          n = e.subtitle,
          a = e.title,
          r = e.withMarginBottom,
          i = void 0 === r || r
        return h.a.createElement(
          w.a,
          { style: [Ge.sectionContainer, i ? Ge.sectionMarginBottom : null] },
          h.a.createElement(w.a, { style: Ge.sectionIconContainer }, t),
          h.a.createElement(
            w.a,
            { style: Ge.sectionContent },
            h.a.createElement(ee.b, { size: 'body', weight: 'bold' }, a),
            n,
          ),
        )
      }
      function qe(e) {
        return h.a.createElement(ee.b, { color: 'gray700', size: 'body' }, e.children)
      }
      var Ke = {
          title: S.a.a3e6bb1b,
          subtitle: S.a.d82f214f,
          sections: {
            listenLive: { title: S.a.gf029868 },
            spacesArePublic: { title: S.a.icc1ba70 },
            manageExperience: { title: S.a.bcf241be, blockAndReport: S.a.b0bc833f },
          },
          gotIt: S.a.j24c37b2,
        },
        Ge = P.a.create(function (e) {
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
        Je = n('WrBE'),
        Xe = n('i4Oy')
      function Ze(e) {
        var t = Object(p.k)().requestSheetDismissal
        return h.a.createElement(Je.a.View, {
          onClick: t,
          style: [
            Qe.dockSheetOverlayBase,
            e.isSideNavLayout ? $e.dockSheetOverlay : Qe.dockSheetOverlay,
            {
              opacity: e.animation.animatedPan.interpolate({
                inputRange: [e.animation.shellHeights.half, e.animation.shellHeights.full],
                outputRange: [1, 0],
              }),
            },
          ],
        })
      }
      function Ye(e) {
        return h.a.createElement(
          w.a,
          { style: [e.style, e.hasDismissRequest && Qe.pointerEventsNone] },
          h.a.createElement(
            Je.a.View,
            {
              style: [
                Qe.contentAnimatedContainer,
                {
                  maxHeight: e.maxHeight,
                  transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }],
                },
              ],
            },
            h.a.createElement(
              w.a,
              { style: Qe.contentWrapperContainer },
              h.a.createElement(w.a, { style: Qe.contentWrapper }, e.children),
            ),
          ),
        )
      }
      var Qe = P.a.create(function (e) {
          var t = Object(Ee.b)(e),
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
        $e = P.a.create(function (e) {
          var t = Object(Ee.b)(e)
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
        et = function (e) {
          var t = e.audioSpaceId,
            n = e.dockAnimation,
            a = e.isSideNavLayout,
            r = Object(p.l)(),
            i = r.clearSheet,
            o = r.hasDismissRequest,
            c = r.sheetId,
            s = (function (e) {
              var t = Xe.a.get('window'),
                n = Object(Ee.a)(t.height, e),
                a = h.a.useRef(new Je.a.Value(n.full)).current
              return {
                animatedPan: a,
                shellHeights: n,
                springToOpen: function (e) {
                  return Je.a.spring(a, { toValue: 0, bounciness: 2 }).start(e)
                },
                springToClose: function (e) {
                  return Je.a.spring(a, { toValue: n.full }).start(e)
                },
              }
            })(a),
            l = n.shellHeights.sheetMaxHeight,
            u = a ? $e.contentContainer : Qe.contentContainer,
            d = h.a.useMemo(
              function () {
                switch (c) {
                  case p.b.report:
                    return h.a.createElement(Me.b, { audioSpaceId: t })
                  case p.b.recordingEducation:
                    return h.a.createElement(ce, null)
                  case p.b.generalNux:
                    return h.a.createElement(Ue, null)
                  case p.b.clippingEducation:
                    return h.a.createElement(me, null)
                  case p.b.createClip:
                    return h.a.createElement(_e, { audioSpaceId: t })
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
          var m = a ? $e.dockSheetContainer : Qe.dockSheetContainer
          return h.a.createElement(
            Je.a.View,
            {
              style: [
                m,
                o && Qe.pointerEventsNone,
                {
                  height: n.shellHeights.full - n.animatedPan._value,
                  opacity: s.animatedPan.interpolate({ inputRange: [0, s.shellHeights.half], outputRange: [1, 0] }),
                },
              ],
            },
            h.a.createElement(Ze, { animation: s, isSideNavLayout: a }),
            h.a.createElement(Ye, { animation: s, hasDismissRequest: o, maxHeight: l, style: u }, d),
          )
        }
      function tt(e) {
        var t = e.children
        return p.m() ? null : t
      }
      var nt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ae.a)(
          'svg',
          o()(
            o()({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [ne.a.root, e.style],
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
      nt.metadata = { width: 17, height: 9.5 }
      var at = nt
      function rt(e) {
        var t = p.m()
        return h.a.createElement(
          te.a,
          { onPress: e.onPress, pullRight: !0, size: 'medium', type: 'destructiveText' },
          h.a.createElement(ee.b, { size: 'body', weight: 'bold' }, t ? it.close : it.leave),
        )
      }
      var it = { leave: S.a.bb1d57b6, close: S.a.ia5e7487 },
        ot = n('4EYz'),
        ct = n('MMRb'),
        st = n('Pl95'),
        lt = n('0nhk'),
        ut = n('pjBI'),
        dt = n('MH+I'),
        pt = n('fzjU')
      function mt(e) {
        var t = Object(E.a)(e.audioSpaceId),
          n = t.space,
          a = t.utils,
          r = (n || {}).ended_at,
          i = a.getTunedInCount()
        return h.a.createElement(
          ut.a,
          { color: bt.color, style: vt.container },
          h.a.createElement(ft, { ended_at: r }),
          h.a.createElement(ht, { count: i }),
        )
      }
      function ft(e) {
        var t = e.ended_at
        if (!t) return null
        var n = null,
          a = Date.now() - t
        return (
          (n =
            a < St
              ? h.a.createElement(
                  S.a.I18NFormatMessage,
                  { $i18n: 'f0e84608' },
                  h.a.createElement(dt.a, { short: !0, timeMs: a }),
                )
              : yt(new Date(t))),
          h.a.createElement(ee.b, bt, n)
        )
      }
      function ht(e) {
        var t = e.count
        return t ? h.a.createElement(ee.b, bt, gt.tunedIn({ count: pt.a.formatCountShort(t) })) : null
      }
      var vt = P.a.create(function (e) {
          return { container: { marginBottom: e.spaces.space4 } }
        }),
        gt = { tunedIn: S.a.h140746e },
        bt = { color: 'text', size: 'subtext2' },
        yt = S.a.e18e399a,
        St = 864e5
      function Et(e) {
        return h.a.createElement(
          w.a,
          { style: Ct.titleLabelRow },
          h.a.createElement(Et.Replay, e),
          h.a.createElement(Et.EmployeeOnly, e),
        )
      }
      function wt(e) {
        return h.a.createElement(w.a, { style: Ct.titleLabelSpacer }, e.children)
      }
      ;(Et.EmployeeOnly = function (e) {
        var t = Object(E.a)(e.audioSpaceId).space
        return null != t && t.is_employee_only
          ? h.a.createElement(
              wt,
              null,
              h.a.createElement(q.a, { background: 'navigationBackground', bold: !0 }, kt.tweepsOnly),
            )
          : null
      }),
        (Et.Replay = function (e) {
          var t = Object(E.a)(e.audioSpaceId).utils
          return t.is.recording
            ? h.a.createElement(
                wt,
                null,
                h.a.createElement(G, { audioSpaceId: e.audioSpaceId, withEducationOnClick: !e.isOutsideDock }),
              )
            : t.is.replayable
            ? h.a.createElement(wt, null, h.a.createElement(mt, { audioSpaceId: e.audioSpaceId }))
            : null
        })
      var kt = { tweepsOnly: S.a.a5bf5489 },
        Ct = P.a.create(function (e) {
          return {
            titleLabelRow: { flexDirection: 'row', marginBottom: e.spaces.space4 },
            titleLabelSpacer: { paddingRight: e.spacesPx.space4 },
          }
        }),
        xt = n('VKFJ'),
        It = n('yUQf'),
        Pt = n('7ep7'),
        Tt = n('v6aA'),
        Ot = n('DlVf'),
        Rt = n('RqPI'),
        Lt = n('mjJ+'),
        _t = n('FXw/'),
        Mt = n('GCOQ')
      function zt(e) {
        var t = (function (e) {
            var t = Object(E.a)(e).utils,
              n = Object(It.a)(Rt.n),
              a = p.k().openSheet,
              r = []
            n &&
              r.push({
                Icon: Mt.a,
                text: jt.reportThisSpace,
                isEmphasized: !0,
                onClick: function () {
                  a(p.b.report), t.scribe(':audiospace::caret:report:click')
                },
              })
            return { items: r }
          })(e.audioSpaceId),
          n = h.a.useState(!1),
          a = u()(n, 2),
          r = a[0],
          i = a[1]
        if (t.items.length < 1) return null
        var o = r
          ? h.a.createElement(Lt.a, {
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
            accessibilityLabel: jt.more,
            borderColor: 'transparent',
            color: 'text',
            hoverLabel: { label: jt.more },
            icon: h.a.createElement(_t.a, null),
            onPress: function () {
              return i(!0)
            },
            size: 'medium',
            type: 'primaryOutlined',
          }),
          o,
        )
      }
      var jt = { more: S.a.h63a5c3b, reportThisSpace: S.a.b3481ffd },
        Ht = n('O07O'),
        At = (n('i4UL'), n('CDzS'))
      function Dt() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(ae.a)(
          'svg',
          o()(o()({}, e), {}, { style: [Bt.root, e.style], viewBox: '0 0 24 24' }),
          h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(At.a.SVGLinearGradient, null),
            h.a.createElement(
              'g',
              { fill: At.a.SVGLinearGradient.fill },
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
      Dt.metadata = { width: 24, height: 24 }
      var Bt = P.a.create(function (e) {
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
        Nt = ['isSideNavLayout', 'onLayout']
      function Ft(e) {
        var t = e.isSideNavLayout,
          n = e.onLayout,
          a = r()(e, Nt),
          i = [Wt.footer, t && Wt.footerWide]
        return h.a.createElement(w.a, { onLayout: n, style: i }, h.a.createElement(Vt, a))
      }
      function Vt(e) {
        return p.m()
          ? h.a.createElement(Ht.a, { audioSpaceId: e.audioSpaceId })
          : h.a.createElement(Ut, { audioSpaceId: e.audioSpaceId })
      }
      function Ut(e) {
        var t = h.a.useContext(Tt.a).featureSwitches
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(
            w.a,
            { style: Wt.footerLeft },
            t.isTrue('voice_rooms_speaking_enabled') &&
              h.a.createElement(te.a, {
                accessibilityLabel: 'Request to speak',
                borderColor: 'transparent',
                color: 'text',
                hoverLabel: { label: 'Request to speak' },
                icon: h.a.createElement(Dt, null),
                onPress: function () {},
                size: 'xLarge',
                type: 'primaryOutlined',
              }),
          ),
          h.a.createElement(
            w.a,
            { style: Wt.footerRight },
            h.a.createElement(zt, e),
            t.isTrue('voice_rooms_reactions_enabled') &&
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(w.a, { style: Wt.footerButtonSpacer }),
                h.a.createElement(te.a, {
                  accessibilityLabel: 'Reactions',
                  borderColor: 'transparent',
                  color: 'text',
                  hoverLabel: { label: 'Reactions' },
                  icon: h.a.createElement(Ot.a, null),
                  onPress: function () {},
                  size: 'medium',
                  type: 'primaryOutlined',
                }),
              ),
            t.isTrue('voice_rooms_share_dock_enabled') &&
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(w.a, { style: Wt.footerButtonSpacer }),
                h.a.createElement(lt.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon' }),
              ),
          ),
        )
      }
      var Wt = P.a.create(function (e) {
          var t = Object(Ee.b)(e),
            n = t.borderRadius,
            a = t.paddingHorizontal
          return {
            footerButtonSpacer: { width: e.spaces.space16 },
            footerLeft: { flexDirection: 'row' },
            footerRight: { flexDirection: 'row' },
            footer: {
              paddingHorizontal: a,
              width: '100%',
              height: 'calc('.concat(100, 'px + ').concat(P.a.iPhoneOffsetBottom, ')'),
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0px -1px 0px '.concat(e.colors.gray50),
              backgroundColor: e.colors.navigationBackground,
            },
            footerWide: { borderBottomLeftRadius: n, borderBottomRightRadius: n, boxShadow: e.boxShadows.xSmall },
          }
        }),
        qt = n('0FVZ'),
        Kt = n('Oe3h'),
        Gt = n('cTG8'),
        Jt = n('U7kY'),
        Xt = n('n7AW'),
        Zt = n('yyPN'),
        Yt = n.n(Zt),
        Qt = n('GiKA'),
        $t = n.n(Qt),
        en = n('p3P5'),
        tn = ['periscopeUserId']
      function nn(e) {
        var t = e.isSideNavLayout ? qt.a.WideExpandedSpaceDock : qt.a.NarrowExpandedSpaceDock
        return h.a.createElement(t, null, h.a.createElement(an, e))
      }
      function an(e) {
        var t = Object(It.a)(ct.selectDrawerVisibility),
          n = Object(Ee.b)(P.a.theme),
          a = e.width + n.shadowOffset,
          r = e.isSideNavLayout ? [bn.root, { width: a }] : null,
          i = h.a.useState(),
          o = u()(i, 2),
          c = o[0],
          l = o[1],
          p = h.a.useRef(null),
          m = Xe.a.get('window')
        function f() {
          var e,
            t = null === (e = p.current) || void 0 === e ? void 0 : e.getBoundingClientRect()
          t && l(t)
        }
        return (
          h.a.useLayoutEffect(f, [m.height]),
          h.a.useLayoutEffect(
            function () {
              var e = setTimeout(f, d.a.durationMs + 250)
              return function () {
                return clearTimeout(e)
              }
            },
            [t],
          ),
          h.a.createElement(w.a, { ref: p, style: r }, h.a.createElement(sn, s()({}, e, { layout: c })))
        )
      }
      function rn(e) {
        var t = Object(Ee.b)(P.a.theme),
          n = e.animation.shellHeights.full - t.shadowOffset
        return h.a.createElement(
          Je.a.View,
          {
            style: [
              vn.expandedShell,
              { height: n, transform: [{ translate3d: '0, 0, 0' }, { translateY: e.animation.animatedPan }] },
            ],
          },
          h.a.createElement(on, e),
        )
      }
      function on(e) {
        var t = p.n(),
          n = Object(ke.a)(),
          a = e.footerHeight,
          r = h.a.useRef(new Je.a.Value(a))
        function i() {
          e.animation.springTo('collapse')
        }
        function o() {
          e.animation.springTo('exit')
        }
        return (
          h.a.useEffect(
            function () {
              Je.a.spring(r.current, { toValue: t ? a + mn : a }).start()
            },
            [t, a],
          ),
          h.a.createElement(Kt.a, { id: 'SpaceDockExpanded' }, function (t, a) {
            return h.a.createElement(
              w.a,
              s()({ ref: t() }, a({ style: vn.expandedShellContent })),
              h.a.createElement(
                Je.a.View,
                s()({}, e.animation.panResponder.panHandlers, { style: vn.expandedShellHeader }),
                h.a.createElement(
                  w.a,
                  { style: vn.expandedShellHeaderGripContainer },
                  h.a.createElement(w.a, { style: vn.expandedShellHeaderGrip }),
                ),
                h.a.createElement(
                  w.a,
                  { style: vn.expandedShellHeaderButtons },
                  h.a.createElement(te.a, {
                    accessibilityLabel: yn.collapse,
                    hoverLabel: { label: yn.collapse },
                    icon: h.a.createElement(at, { style: vn.iconChevronDown }),
                    onPress: i,
                    pullLeft: !0,
                    size: 'medium',
                    type: 'primaryText',
                  }),
                  h.a.createElement(
                    w.a,
                    { style: vn.expandedShellHeaderRight },
                    h.a.createElement(tt, null, h.a.createElement(st.a, { audioSpaceId: e.audioSpaceId })),
                    n.isCreationEnabled
                      ? h.a.createElement(lt.a, { audioSpaceId: e.audioSpaceId, isFixed: !0, type: 'icon-borderless' })
                      : null,
                    h.a.createElement(rt, { onPress: o }),
                  ),
                ),
                h.a.createElement(
                  w.a,
                  { style: vn.expandedShellDescription },
                  h.a.createElement(cn, { audioSpaceId: e.audioSpaceId }),
                ),
              ),
              h.a.createElement(
                Je.a.View,
                {
                  id: 'ParticipantsWrapper',
                  style: [vn.participantsContainer, { paddingBottom: Je.a.add(r.current, e.animation.animatedPan) }],
                },
                e.mounted ? h.a.createElement(ln, e) : null,
              ),
            )
          })
        )
      }
      function cn(e) {
        var t = Object(E.a)(e.audioSpaceId).utils.title(),
          n = {
            hashtags: Yt()(t).map(function (e) {
              return (e.text = e.hashtag), e
            }),
            user_mentions: $t()(t),
          },
          a = [0, t.length]
        return h.a.createElement(
          h.a.Fragment,
          null,
          h.a.createElement(Et, { audioSpaceId: e.audioSpaceId, isOutsideDock: e.isOutsideDock }),
          h.a.createElement(Gt.a, {
            displayTextRange: a,
            entities: n,
            linkify: !0,
            numberOfLines: 3,
            size: 'headline1',
            text: t,
            weight: 'heavy',
          }),
        )
      }
      function sn(e) {
        var t = h.a.useState(!1),
          n = u()(t, 2),
          a = n[0],
          r = n[1],
          i = (function (e, t, n) {
            var a = h.a.useRef({ state: p.a.full, animatedPanOffset: 0 }),
              r = Xe.a.get('window'),
              i = h.a.useMemo(
                function () {
                  return Object(Ee.a)(r.height, e.isSideNavLayout, n)
                },
                [r.height, e.isSideNavLayout, n],
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
              c = h.a.useRef(new Je.a.Value(i.full)).current
            Object(j.a)(function () {
              var e = o(a.current.state)
              Je.a.spring(c, { toValue: e }).start(t)
            })
            var s = e.onRequestClose,
              l = e.onToggleCollapsed,
              u = h.a.useMemo(
                function () {
                  return function (e, t) {
                    ;(a.current.state = e), p.h(e)
                    var n = o(a.current.state),
                      r = null == t ? void 0 : t.vy
                    return new Promise(function (t) {
                      if (e === p.a.exit) return s(), t()
                      Je.a.spring(c, { velocity: r, toValue: n }).start(function () {
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
                  Pt.a.create({
                    onMoveShouldSetPanResponder: function (e, t) {
                      return Math.abs(t.dy) > 5
                    },
                    onPanResponderGrant: function (e, t) {
                      a.current.animatedPanOffset = c._value
                    },
                    onPanResponderMove: function (e, t) {
                      var n = a.current.animatedPanOffset + t.dy
                      n >= 0 && c.setValue(n)
                    },
                    onPanResponderRelease: function (e, t) {
                      var n = (null == t ? void 0 : t.vy) || 0,
                        r = Math.abs(n) >= fn
                      c._value > i.collapse || (r && t.dy > 0) ? u(p.a.collapse, t) : u(a.current.state, t)
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
          c = h.a.useRef(new Je.a.Value(i.shellHeights.full)).current,
          l = o()(o()({}, e), {}, { mounted: a, animation: i })
        h.a.useEffect(
          function () {
            var e = i.shellHeights.full
            Je.a.spring(c, { toValue: e }).start()
          },
          [i.shellHeights.full],
        )
        var d = h.a.useState(100),
          m = u()(d, 2),
          f = m[0],
          v = m[1],
          g = h.a.useCallback(
            function (e) {
              var t = e.nativeEvent.layout.height
              v(t)
            },
            [v],
          )
        return h.a.useMemo(
          function () {
            var t = e.isSideNavLayout ? bn.container : vn.container,
              n = e.isSideNavLayout ? bn.expandedShellContainer : vn.expandedShellContainer,
              a = e.isSideNavLayout ? bn.footerContainer : vn.footerContainer,
              r = c,
              o = i.animatedPan.interpolate({
                inputRange: [i.shellHeights.collapse, i.shellHeights.full],
                outputRange: [1, 0],
              })
            return h.a.createElement(
              Je.a.View,
              { style: [t, vn.forceGPULayer, { height: r, opacity: o }] },
              h.a.createElement(w.a, { style: n }, h.a.createElement(rn, s()({}, l, { footerHeight: f }))),
              h.a.createElement(
                w.a,
                { style: a },
                h.a.createElement(D, { audioSpaceId: e.audioSpaceId, height: mn }),
                h.a.createElement(Ft, {
                  audioSpaceId: e.audioSpaceId,
                  isSideNavLayout: e.isSideNavLayout,
                  onLayout: g,
                }),
              ),
              h.a.createElement(et, {
                audioSpaceId: e.audioSpaceId,
                dockAnimation: i,
                isSideNavLayout: e.isSideNavLayout,
              }),
            )
          },
          [e.audioSpaceId, e.isSideNavLayout, a, e.layout],
        )
      }
      function ln(e) {
        var t = Object(xt.b)(e.audioSpaceId),
          n = t.all,
          a = t.otherParticipantsTotal
        v.d()
        var r = Xe.a.get('window'),
          i = (e.isSideNavLayout ? e.width : r.width) - 2 * hn(P.a.theme).container.paddingHorizontal,
          c = Object(en.b)(P.a.theme),
          l = c.getHeight(),
          u = c.getWidth(),
          d = Math.min(4, Math.floor(i / u)),
          p = i / d
        h.a.useEffect(
          function () {
            return (
              e.isSideNavLayout || Jt.a.disable(),
              function () {
                Jt.a.enable()
              }
            )
          },
          [e.isSideNavLayout],
        )
        var m = h.a.useMemo(
          function () {
            var e = p
            return n.map(function (t) {
              return o()(o()({}, t), {}, { width: e })
            })
          },
          [n, p],
        )
        return h.a.useMemo(
          function () {
            var t = {
              data: m,
              numColumns: d,
              keyExtractor: function (e) {
                return e.key
              },
              getItemLayout: function (e, t) {
                return { length: l, offset: l * t, index: t }
              },
              renderItem: un,
              ListHeaderComponent: h.a.createElement(T, { audioSpaceId: e.audioSpaceId }),
              ListFooterComponent: h.a.createElement(
                tt,
                null,
                h.a.createElement(
                  w.a,
                  { style: vn.participantsFooterContainer },
                  h.a.createElement(ot.a, { audioSpaceId: e.audioSpaceId, count: a, interactive: !0 }),
                ),
              ),
            }
            return h.a.createElement(xe.a, s()({ key: d }, t))
          },
          [m],
        )
      }
      function un(e) {
        var t = e.item
        return h.a.createElement(dn, {
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
      function dn(e) {
        var t = e.periscopeUserId,
          n = r()(e, tn),
          a = xt.b.isParticipantHost(n.kind),
          i = xt.b.canParticipantSpeak(n.kind) ? h.a.createElement(pn, { isHost: a, periscopeUserId: t }) : null,
          o = Object.assign({}, { speakingIndicator: i, periscopeUserId: t }, n)
        return h.a.createElement(en.a, o)
      }
      function pn(e) {
        var t = e.isHost,
          n = e.periscopeUserId,
          a = m.f({ isHost: t, periscopeUserId: n })
        return h.a.createElement(
          w.a,
          { style: gn.container },
          h.a.createElement(Xt.a, { audioLevel: a || 0, size: P.a.theme.spacesPx.space16 }),
        )
      }
      var mn = 100,
        fn = 0.5
      function hn(e) {
        return { container: { paddingHorizontal: e.spacesPx.space8 } }
      }
      var vn = P.a.create(function (e) {
        var t = Object(Ee.b)(e),
          n = t.paddingHorizontal,
          a = t.borderRadius,
          r = hn(e)
        return {
          forceGPULayer: { transform: [{ translate3d: '0, 0, 0' }] },
          container: { position: 'fixed', bottom: 0, width: '100%', backgroundColor: e.colors.maskColor },
          expandedShellContainer: { width: '100%', borderRadius: a },
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
          participantsContainer: o()(o()({}, r.container), {}, { flex: 1 }),
          participantsFooterContainer: { paddingVertical: e.spaces.space16 },
          footerContainer: { position: 'absolute', bottom: 0, width: '100%' },
        }
      })
      var gn = P.a.create(function (e) {
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
        bn = P.a.create(function (e) {
          var t = Object(Ee.b)(e)
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
        yn = { collapse: S.a.d227d19e }
    },
  },
])
//# sourceMappingURL=WIPED
