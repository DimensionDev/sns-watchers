;(window.webpackJsonp = window.webpackJsonp || []).push([
  [46],
  {
    '07FG': function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a('cnVF'),
        r = function (e) {
          return e === n.B
        }
    },
    '2prg': function (e, t, a) {
      var n = a('ZORK')
      e.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)
    },
    '8A5z': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        c = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
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
    CDB5: function (e, t, a) {
      'use strict'
      a.d(t, 'm', function () {
        return k
      }),
        a.d(t, 'l', function () {
          return R
        }),
        a.d(t, 'f', function () {
          return D
        }),
        a.d(t, 'd', function () {
          return O
        }),
        a.d(t, 'g', function () {
          return j
        }),
        a.d(t, 'e', function () {
          return F
        }),
        a.d(t, 'i', function () {
          return B
        }),
        a.d(t, 'j', function () {
          return V
        }),
        a.d(t, 'k', function () {
          return z
        }),
        a.d(t, 'h', function () {
          return G
        }),
        a.d(t, 'a', function () {
          return H
        }),
        a.d(t, 'b', function () {
          return q
        }),
        a.d(t, 'c', function () {
          return J
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        s = a('m3Bd'),
        c = a.n(s),
        l = a('KEM+'),
        d = a.n(l),
        u = a('yiKp'),
        m = a.n(u),
        p =
          (a('TJCb'),
          a('7x/C'),
          a('DZ+c'),
          a('7xRU'),
          a('lTEL'),
          a('JtPf'),
          a('87if'),
          a('kYxP'),
          a('2G9S'),
          a('1IsZ'),
          a('AspN')),
        h = a('xPna'),
        v = a('oEOe'),
        f = a('xCUF'),
        g = a('ude7'),
        b = a('07FG'),
        y = a('Ssj5'),
        _ = a('fEA7'),
        E = a.n(_),
        T = a('uKEd'),
        C = a('lnti'),
        M = a('/NU0'),
        S = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        w = 'dmComposer',
        I = {}
      var x = function (e) {
          var t = e.conversation_id,
            a = e.id,
            n = e.localMediaId,
            r = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            s = e.attachment,
            c = void 0 === s ? {} : s,
            l = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: r,
            error: l,
            id: a,
            is_draft: !0,
            message_data: { attachment: c, localMediaId: n, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        k = function (e) {
          return function (t, a, n) {
            var i = n.api,
              s = e || {},
              l = s.senderId,
              d = s.cardUrl,
              u = s.conversationId,
              y = s.localMediaId,
              _ = s.recipients,
              w = void 0 === _ ? [] : _,
              I = s.requestId,
              k = void 0 === I ? E.a.v1() : I,
              A = s.tweetAttachment,
              R = s.quickReply,
              P = c()(s, S)
            t(Y(u))
            var D = a(),
              L = y || W(a(), u),
              j = p.k(D, L),
              U = o()(j, 1)[0] || {},
              F = U.mediaFile,
              B = U.mediaMetadata,
              V = w.length > 0 && w.join(','),
              z = {}
            F && F.isGif
              ? (z.extraInitParams = '&media_category=dm_gif')
              : F && F.isVideo && (z.extraInitParams = '&media_category=dm_video')
            var K = p.p(L, z),
              H = [t(K)],
              N = (G(D, u) || {}).found_media_origin
            return (
              F && F.isGif && H.push(Object(g.a)(F)),
              Promise.all(H).then(
                function (a) {
                  var n = o()(a, 2),
                    s = o()(n[0], 1)[0],
                    c = n[1],
                    g = (null == B ? void 0 : B.altText) || (null == B ? void 0 : B.defaultAltText),
                    y = !!g
                  return (
                    s && (N || y)
                      ? t(p.m(m()({ media_id: s.uploadId, found_media_origin: N }, !!y && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var a = (A || {}).id_str,
                        n = {}
                      if (s) {
                        var o = s.mediaFile,
                          p = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: p.width, height: p.height },
                            sizes: [{ h: p.height, w: p.width, resize: 'fit' }],
                          }
                        p.isImage
                          ? (n.photo = m()(m()({}, g), {}, { media_url_https: p.url }))
                          : p.isGif
                          ? (n.animated_gif = m()(m()({}, g), {}, { media_url_https: c, type: 'animated_gif' }))
                          : p.isVideo && (n.video = m()(m()({}, g), {}, { media_url_https: p.url, type: 'video' }))
                      } else A && (n.tweet = { status: a })
                      var y = (s || {}).uploadId,
                        _ = x({
                          attachment: n,
                          conversation_id: u,
                          id: k,
                          recipient_ids: V,
                          sender_id: l,
                          text: e.text,
                        }),
                        E = m()(
                          m()(
                            m()(m()({}, P), Object(b.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: u },
                            !a && { media_id: y },
                          ),
                          {},
                          { recipient_ids: V, request_id: k, tweet_id: a },
                        )
                      R &&
                        ((E['quick_reply_response[options][id]'] = R.id),
                        (E['quick_reply_response[options][selected_id]'] = R.selected_id))
                      var S = Object(C.a)([
                        ee(u),
                        { type: f.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        u && Object(T.b)(u, k, _),
                      ])
                      return (
                        t(S),
                        i.DirectMessages.sendMessage(E).then(
                          function (a) {
                            var n = a.entities,
                              i = n.cards,
                              o = n.entries,
                              s = n.tweets,
                              c = n.users,
                              l = a.result.conversations
                            Object(M.a)(L) && t(J(u, L))
                            var d = Object(C.a)(
                              [{ type: f.c.SUCCESS }].concat(
                                r()(Object(h.a)({ conversations: l, entries: o, users: c, tweets: s, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, u && Object(T.j)(u, k, e), O(u)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(a.entities.entries)[0].conversation_id)
                          },
                          function (a) {
                            var r = x({
                                attachment: n,
                                conversation_id: u,
                                error: !0,
                                id: k,
                                localMediaId: L,
                                recipient_ids: V,
                                sender_id: l,
                                text: e.text,
                              }),
                              i = Object(C.a)([
                                { type: f.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                u && Object(T.b)(u, k, r),
                              ])
                            return t(i), Object(v.e)(t, a, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ae(u)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(C.a)([Object(M.a)(L) && J(u, L), ae(u)])), Promise.reject(e)
                },
              )
            )
          }
        },
        A = function (e, t) {
          return e.dmComposer[t]
        },
        R = function (e, t) {
          var a = A(e, t)
          return a ? a.text : null
        },
        P = 'rweb/dmComposer/SAVE_TEXT',
        D = function (e, t) {
          return { type: P, conversationId: e, text: t }
        },
        L = 'rweb/dmComposer/REMOVE_TEXT',
        O = function (e) {
          return { type: L, conversationId: e }
        },
        j = function (e, t) {
          var a = A(e, t)
          return a ? a.cardUrl : null
        },
        U = 'rweb/dmComposer/SAVE_CARD_URL',
        F = function (e, t) {
          return { type: U, conversationId: e, cardUrl: t }
        },
        W = function (e, t) {
          var a = A(e, t)
          return a ? a.mediaId : null
        },
        B = function (e, t) {
          var a = p.k(e, W(e, t))
          return a.length > 0 ? a[0] : null
        },
        V = function (e, t) {
          var a = A(e, t)
          return !!a && a.isUploading
        },
        z = function (e, t) {
          return p.l(e, W(e, t))
        },
        G = function (e, t) {
          var a = A(e, t)
          return a ? a.gifMetadata : null
        },
        K = 'rweb/dmComposer/ADD_MEDIA',
        H = function (e, t, a) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: a }, type: K, conversationId: e }
        },
        N = 'rweb/dmComposer/CANCEL_UPLOAD',
        q = function (e) {
          return { type: N, conversationId: e }
        },
        Q = 'rweb/dmComposer/REMOVE_MEDIA',
        X = function (e) {
          return { type: Q, conversationId: e }
        },
        J = function (e, t) {
          return function (a) {
            a(p.i(t)), a([q(e), X(e)])
          }
        },
        Z = 'rweb/dmComposer/UPLOAD_REQUEST',
        Y = function (e) {
          return { type: Z, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ae = function (e) {
          return { type: te, conversationId: e }
        }
      y.a.register(
        d()({}, w, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.conversationId || 'new_group'
          switch (t.type) {
            case K:
              var n = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, n), t.payload)))
            case Z:
              var r = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, r), {}, { isUploading: !0 })))
            case N:
              var i = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Q:
              var o = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(
                m()({}, e),
                {},
                d()({}, a, m()(m()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case P:
              var s = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, s), {}, { text: t.text })))
            case U:
              var c = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, c), {}, { cardUrl: t.cardUrl })))
            case L:
              var l = e[a] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return m()(m()({}, e), {}, d()({}, a, m()(m()({}, l), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    FDFL: function (e, t, a) {
      'use strict'
      a.d(t, 'c', function () {
        return g
      }),
        a.d(t, 'b', function () {
          return b
        }),
        a.d(t, 'a', function () {
          return y
        })
      var n = a('KEM+'),
        r = a.n(n),
        i = a('yiKp'),
        o = a.n(i),
        s = (a('ho0z'), a('tQbP'), a('hBpG'), a('7x/C'), a('JtPf'), a('oEOe')),
        c = a('kGix'),
        l = a('ikiw'),
        d = a('Ssj5'),
        u = a('RqPI'),
        m = 'availableLanguages',
        p = 'rweb/'.concat(m),
        h = s.a(p, 'FETCH_AVAILABLE_LANGUAGES'),
        v = { fetchStatus: c.a.NONE, languages: [] }
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = t.meta && t.meta.lang ? t.meta.lang : 'en',
          n = 'undefined' != typeof Intl && Intl.Collator && new Intl.Collator(a),
          r = n
            ? function (e, t) {
                return n.compare(e.name, t.name)
              }
            : void 0
        switch (t.type) {
          case h.REQUEST:
            return o()(o()({}, e), {}, { fetchStatus: c.a.LOADING })
          case h.FAILURE:
            return o()(o()({}, e), {}, { error: t.payload, fetchStatus: c.a.FAILED })
          case h.SUCCESS:
            return o()(o()({}, e), {}, { languages: t.payload.sort(r), fetchStatus: c.a.LOADED })
          default:
            return e
        }
      }
      d.a.register(r()({}, m, f))
      var g = function (e) {
          return e[m].languages
        },
        b = function (e, t) {
          var a = Object(l.c)(t).toLowerCase(),
            n = e[m].languages.find(function (e) {
              return e.code === a
            })
          return n ? n.name : null
        },
        y = function () {
          return function (e, t) {
            return t()[m].fetchStatus === c.a.LOADED ? Promise.resolve() : e(_())
          }
        },
        _ = function (e) {
          return function (t, a, n) {
            var r = n.api
            return s.b(t, { params: e, meta: { lang: Object(u.o)(a()) }, request: r.FeatureSwitch.fetchLanguages })({
              actionTypes: h,
              context: 'FETCH_AVAILABLE_LANGUAGES',
            })
          }
        }
    },
    Jhhs: function (e, t, a) {
      'use strict'
      var n = a('ax0f'),
        r = a('uqX5').start
      n(
        { target: 'String', proto: !0, forced: a('2prg') },
        {
          padStart: function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
          },
        },
      )
    },
    K3W9: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TabbedMediaEditScreen', function () {
          return R
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        c = a.n(s),
        l = a('N+ot'),
        d = a.n(l),
        u = a('5Yy7'),
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        v = a('KEM+'),
        f = a.n(v),
        g = (a('KqXw'), a('MvUL'), a('ERkP')),
        b = a.n(g),
        y = (a('KOtZ'), a('7x/C'), a('2G9S'), a('xVN5')),
        _ = a('rxPX'),
        E = a('AspN'),
        T = function (e, t) {
          var a, n
          return (
            null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
              ? void 0
              : n.showAllMedia
          )
            ? C(e)
            : M(e)
        },
        C = function (e) {
          var t = y.k(e).reduce(function (e, t) {
            return e.concat(t.mediaIds)
          }, [])
          return Object(E.k)(e, t)
        },
        M = function (e) {
          var t = y.i(e),
            a = y.k(e)[t]
          return Object(E.k)(e, a.mediaIds)
        },
        S = function (e, t) {
          var a, n
          return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
            ? void 0
            : n.mediaId
        },
        w = function (e, t) {
          var a, n
          return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
            ? void 0
            : n.altTextTabEnabled
        },
        I = function (e, t) {
          var a, n
          return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
            ? void 0
            : n.cropTabEnabled
        },
        x = Object(_.a)()
          .propsFromState(function () {
            return { altTextTabEnabled: w, cropTabEnabled: I, initialMediaId: S, media: T }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: E.n, processMedia: E.f, updateMediaUpload: E.o }
          })
          .withAnalytics({ page: 'tabbed_media' }),
        k = a('jFmo'),
        A = a('v6aA'),
        R = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a(e, n) {
            var r
            o()(this, a), (r = t.call(this, e, n))
            var i = e.history,
              s = e.initialMediaId
            return e.media.length <= 0 || !s ? (i.replace('/'), d()(r)) : r
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.context.featureSwitches.isTrue('sensitive_tweet_warnings_enabled')
                  return b.a.createElement(k.a, r()({}, this.props, { sensitiveMediaTabEnabled: e }))
                },
              },
            ]),
            a
          )
        })(b.a.Component)
      f()(R, 'contextType', A.a)
      t.default = x(R)
    },
    'Mbn/': function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        c = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M3.5 5.25H2c-.414 0-.75.336-.75.75s.336.75.75.75h1.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm18.5 12H7.5c-.414 0-.75-.337-.75-.75V2c0-.414-.336-.75-.75-.75s-.75.336-.75.75v14.5c0 1.24 1.01 2.25 2.25 2.25H22c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-4 2.5c-.414 0-.75.336-.75.75V22c0 .414.336.75.75.75s.75-.336.75-.75v-1.5c0-.414-.336-.75-.75-.75z',
              }),
              o.a.createElement('path', {
                d: 'M8.5 6.75h8c.414 0 .75.337.75.75v8c0 .414.336.75.75.75s.75-.336.75-.75v-8c0-1.24-1.01-2.25-2.25-2.25h-8c-.414 0-.75.336-.75.75s.336.75.75.75z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
    R5K7: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        c = a.n(s),
        l = a('1Pcy'),
        d = a.n(l),
        u = a('5Yy7'),
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        v = a('KEM+'),
        f = a.n(v),
        g = (a('2G9S'), a('ERkP')),
        b = a.n(g),
        y = a('9Xij'),
        _ = a('Zl35'),
        E = a('epkG'),
        T = a('I4+6'),
        C = a('cm6r'),
        M = a('ZvMt'),
        S = a('rHpw'),
        w = a('97Jx'),
        I = a.n(w),
        x = a('CHgo')
      a('6U7i'), a('Ef13'), a('Jhhs'), a('z84I')
      function k(e) {
        var t = Math.round(e / 1e3)
        if (t < 10) return '0:0'.concat(t)
        if (t < 60) return '0:'.concat(t)
        var a = Math.floor(t / 60),
          n = ''.concat(t - 60 * a).padStart(2, '0')
        return ''.concat(a, ':').concat(n)
      }
      var A = function (e, t) {
          return e.map(function (e) {
            return (function (e, t) {
              if ('tenths' === t) {
                var a = Math.round(e / 100),
                  n = a % 10,
                  r = ''.concat((a - n) / 10).padStart(2, '0')
                return '0:'.concat(r, '.').concat(n)
              }
              return k(e)
            })(e, t)
          })
        },
        R = function (e, t) {
          var a = (function (e, t) {
              var a,
                n,
                r,
                i = t / e
              i >= 0.25
                ? ((a = 200), (n = 'tenths'), (r = 4))
                : i >= 0.1
                ? ((a = 500), (n = 'tenths'), (r = 5))
                : i >= 0.05
                ? ((a = 1e3), (n = 'seconds'), (r = 5))
                : i >= 0.025
                ? ((a = 2e3), (n = 'seconds'), (r = 4))
                : i >= 0.01
                ? ((a = 5e3), (n = 'seconds'), (r = 5))
                : i >= 0.005
                ? ((a = 1e4), (n = 'seconds'), (r = 5))
                : i >= 0.0025
                ? ((a = 2e4), (n = 'seconds'), (r = 4))
                : i >= 0.001
                ? ((a = 5e4), (n = 'seconds'), (r = 4))
                : ((a = 1e5), (n = 'seconds'), (r = 4))
              for (var o = [], s = 0; s < e; ) o.push(s), (s += a)
              return { intervalsMs: o, precision: n, numSubintervals: r, numIntervals: Number((e / a).toFixed(1)) }
            })(e, t),
            n = a.intervalsMs,
            r = a.numIntervals,
            i = a.numSubintervals,
            o = a.precision
          return { intervalStrings: A(n, o), numSubintervals: i, numIntervals: r }
        },
        P = a('3XMw'),
        D = a.n(P),
        L = (a('hCOa'), a('87if'), a('t62R')),
        O = a('shC7'),
        j = a('MWbm')
      var U = S.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              width: '100%',
              position: 'absolute',
              height: '65%',
              bottom: 0,
              overflow: 'hidden',
            },
            intervalRow: { flexDirection: 'row' },
            intervalRowStrings: { paddingBottom: e.spaces.space2, userSelect: 'none' },
            intervalRowTicks: { flexGrow: 1, overflow: 'hidden' },
            borderLeft: { borderLeftColor: e.colors.gray700, borderLeftWidth: 1 },
            borderRight: { borderRightColor: e.colors.gray700, borderRightWidth: 1 },
            bigTicks: { flexDirection: 'row', alignItems: 'flex-end' },
            smallTicks: { flexGrow: 1, height: '50%' },
            intervalStrings: { display: 'flex', justifyContent: 'center' },
          }
        }),
        F = function (e) {
          var t = e.duration,
            a = e.trimmerWidth,
            n = R(t, a),
            r = n.intervalStrings,
            i = n.numIntervals,
            o = n.numSubintervals,
            s = O.a.getConstants().isRTL ? U.borderRight : U.borderLeft,
            c = (100 * Math.ceil(i)) / i
          return b.a.createElement(
            j.a,
            { style: U.root },
            b.a.createElement(
              j.a,
              { style: [U.intervalRow, U.intervalRowStrings, { width: ''.concat(c, '%') }] },
              r.map(function (e, t) {
                return b.a.createElement(
                  L.b,
                  {
                    color: 'gray700',
                    key: t,
                    size: 'subtext3',
                    style: [{ width: ''.concat(0 === t ? a / i / 2 : a / i, 'px') }, U.intervalStrings],
                  },
                  0 !== t ? e : null,
                )
              }),
            ),
            b.a.createElement(
              j.a,
              { style: [U.intervalRow, U.intervalRowTicks] },
              r.map(function (e, t) {
                return b.a.createElement(
                  j.a,
                  { key: t, style: [{ width: ''.concat(100 / i, '%') }, U.bigTicks, 0 !== t && s] },
                  Array.from({ length: o }, function (e, t) {
                    return b.a.createElement(j.a, { key: t, style: [U.smallTicks, 0 !== t && s] })
                  }),
                )
              }),
            ),
          )
        },
        W = a('Wms4'),
        B = (a('jQ3i'), a('x4t0'), a('uFXj'), a('oLZl')),
        V = 'decrease',
        z = 'increase',
        G = 'left',
        K = 'right',
        H = a('7ep7'),
        N = D.a.a394f904,
        q = D.a.f42c0c8f,
        Q = D.a.i667afe8,
        X = D.a.c0bdd345,
        J = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(
                d()(e),
                '_panResponders',
                H.a.create({
                  onStartShouldSetPanResponder: function () {
                    return !0
                  },
                  onMoveShouldSetPanResponder: function () {
                    return !0
                  },
                  onPanResponderGrant: function () {
                    return e.props.onMoveStart(e.props.side)
                  },
                  onPanResponderMove: function (t, a) {
                    var n = a.dx
                    return e.props.onMoveChange(n, e.props.side)
                  },
                  onPanResponderRelease: function (t, a) {
                    var n = a.dx
                    return e.props.onMoveEnd(n, e.props.side)
                  },
                  onPanResponderTerminate: function (t, a) {
                    var n = a.dx
                    return e.props.onMoveEnd(n, e.props.side)
                  },
                  onPanResponderTerminationRequest: function () {
                    return !0
                  },
                }),
              ),
              f()(d()(e), '_handleOnKeyDown', function (t, a) {
                var n = e.props.onKeyDown,
                  r = t.key,
                  i = r === B.a.ArrowUp || r === B.a.ArrowRight,
                  o = r === B.a.ArrowDown || r === B.a.ArrowLeft
                ;(i || o) && (t.preventDefault(), n(i ? z : V, a))
              }),
              f()(d()(e), '_handleOnKeyUp', function (t) {
                var a = e.props.onKeyUp,
                  n = t.key
                ;[B.a.ArrowDown, B.a.ArrowLeft, B.a.ArrowRight, B.a.ArrowUp].includes(n) && a()
              }),
              f()(d()(e), '_generateBorderStyles', function () {
                var t = e.props.side,
                  a = O.a.getConstants().isRTL
                return t === G
                  ? a
                    ? Z.rightScrubberRadius
                    : Z.leftScrubberRadius
                  : t === K
                  ? a
                    ? Z.leftScrubberRadius
                    : Z.rightScrubberRadius
                  : void 0
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.currentValue,
                    n = t.maxValue,
                    r = t.minValue,
                    i = t.side,
                    o = t.style
                  return b.a.createElement(
                    C.a,
                    I()(
                      {
                        accessibilityLabel: i === G ? Q : q,
                        accessibilityRole: 'adjustable',
                        accessibilityValue: {
                          max: X(n / 1e3),
                          min: X(r / 1e3),
                          now: X(a / 1e3),
                          text: N({ seconds: X(a / 1e3) }),
                        },
                        focusable: !0,
                        interactiveStyles: T.a.generate({
                          backgroundColor: S.a.theme.colors.primary,
                          color: S.a.theme.colors.primary,
                          customFocusBackgroundColor: S.a.theme.colors.primary,
                          customHoverBackgroundColor: S.a.theme.colors.primary,
                          customPressedBackgroundColor: S.a.theme.colors.primary,
                          insetFocusRing: !0,
                        }),
                        onKeyDown: function (t) {
                          return e._handleOnKeyDown(t, i)
                        },
                        onKeyUp: function (t) {
                          return e._handleOnKeyUp(t)
                        },
                        style: [Z.root, this._generateBorderStyles(), o],
                      },
                      this._panResponders.panHandlers,
                    ),
                    function (e) {
                      var t = e.isFocused,
                        a = e.isHovered,
                        n = e.isPressed
                      return b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(j.a, {
                          style: [Z.trimmerScrubberGrips, (t || a || n) && Z.trimmerScrubberGripsOpacity],
                        }),
                        b.a.createElement(j.a, {
                          style: [Z.trimmerScrubberGrips, (t || a || n) && Z.trimmerScrubberGripsOpacity],
                        }),
                      )
                    },
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        Z = S.a.create(function (e) {
          return {
            root: {
              backgroundColor: e.colors.primary,
              cursor: 'grab',
              flexDirection: 'row',
              height: e.spaces.space48,
              justifyContent: 'space-between',
              paddingHorizontal: e.spaces.space4,
              paddingVertical: e.spaces.space12,
              width: 'calc('.concat(e.spaces.space4, ' * 2 + ').concat(e.spaces.space2, ' * 3)'),
            },
            leftScrubberRadius: {
              borderBottomLeftRadius: e.borderRadii.small,
              borderTopLeftRadius: e.borderRadii.small,
            },
            rightScrubberRadius: {
              borderBottomRightRadius: e.borderRadii.small,
              borderTopRightRadius: e.borderRadii.small,
            },
            trimmerScrubberGrips: {
              backgroundColor: e.colors.cellBackground,
              borderRadius: e.borderRadii.infinite,
              height: '100%',
              width: e.spaces.space2,
            },
            trimmerScrubberGripsOpacity: { opacity: 0.8 },
          }
        }),
        Y = J,
        $ = D.a.af2a65d8,
        ee = D.a.d46781ae,
        te = D.a.e8733ed8,
        ae = D.a.j3d49e93,
        ne = function (e, t) {
          return ''.concat((e / t) * 100, '%')
        },
        re = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a() {
            var e
            o()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              f()(d()(e), '_keyPressAccumulatedDistance', 0),
              f()(d()(e), '_keyPressValueDelta', 1),
              f()(
                d()(e),
                '_panResponderTermination',
                H.a.create({
                  onMoveShouldSetPanResponderCapture: function (t, a) {
                    var n = a.dx
                    return e._shouldTerminateChildrenPanResponders(n)
                  },
                }),
              ),
              f()(d()(e), 'state', { isActive: !1, trimmerWidth: 0 }),
              f()(d()(e), '_generateTimestampLabelString', function () {
                var t = e.props,
                  a = t.endTime - t.startTime
                if (a >= 6e4) {
                  var n = k(a)
                  return ae({ timestamp: n })
                }
                return a < 4e3 ? ee(Math.floor((10 * a) / 1e3) / 10) : te(Math.floor(a / 1e3))
              }),
              f()(d()(e), '_getTrimmerScrubberWidth', function () {
                return 2 * S.a.theme.spacesPx.space4 + 3 * S.a.theme.spacesPx.space2
              }),
              f()(d()(e), '_handleKeyDown', function (t, a) {
                var n = e.state.trimmerWidth
                1 === e._keyPressValueDelta && e._handlePanResponderGrant(a),
                  (e._keyPressAccumulatedDistance += e._keyPressValueDelta * (t === z ? 1 : -1)),
                  e._handlePanResponderChange(e._keyPressAccumulatedDistance, a)
                var r = 0.05 * n
                e._keyPressValueDelta = Math.min(1.4 * e._keyPressValueDelta, r)
              }),
              f()(d()(e), '_handleKeyUp', function () {
                ;(e._keyPressValueDelta = 1), (e._keyPressAccumulatedDistance = 0), e.setState({ isActive: !1 })
              }),
              f()(d()(e), '_handleLayout', function (t) {
                e.setState({ trimmerWidth: t.nativeEvent.layout.width })
              }),
              f()(d()(e), '_handlePanResponderChange', function (t, a) {
                e._triggerChange(t, a)
              }),
              f()(d()(e), '_handlePanResponderEnd', function (t, a) {
                e._handlePanResponderChange(t, a), e.setState({ isActive: !1 })
              }),
              f()(d()(e), '_handlePanResponderGrant', function (t) {
                var a = e.props,
                  n = a.endTime,
                  r = a.startTime
                ;(e._baseTime = t === G ? r : n), e.setState({ isActive: !0 })
              }),
              f()(d()(e), '_renderTimestampLabel', function () {
                var t,
                  a = e.state.isActive,
                  n = e.props,
                  r = n.duration,
                  i = n.endTime,
                  o = n.startTime,
                  s = O.a.getConstants().isRTL,
                  c = s ? 'marginRight' : 'marginLeft',
                  l = s ? 'marginLeft' : 'marginRight'
                return b.a.createElement(
                  j.a,
                  {
                    style: [
                      ie.labelWrapper,
                      ((t = {}), f()(t, c, ne(o, r)), f()(t, l, ne(r - i, r)), f()(t, 'width', ne(i - o, r)), t),
                    ],
                  },
                  b.a.createElement(
                    W.a,
                    { background: 'maskColor', style: [ie.label, !a && ie.visibilityHidden] },
                    $({ timestamp: e._generateTimestampLabelString() }),
                  ),
                )
              }),
              f()(d()(e), '_setRootRef', function (t) {
                t && (e._removeTouchMoveToScrollListener = Object(x.a)(t, e._handleTouchMoveToScroll, !1))
              }),
              f()(d()(e), '_handleTouchMoveToScroll', function (e) {
                return e.preventDefault()
              }),
              f()(d()(e), '_scaleDistanceByTrimmerWidth', function (t) {
                var a = e.props.duration
                return (t / e.state.trimmerWidth) * a
              }),
              f()(d()(e), '_shouldTerminateChildrenPanResponders', function (t) {
                var a = e.props.duration,
                  n = e._baseTime + e._scaleDistanceByTrimmerWidth(t)
                return n < 0 || n > a
              }),
              f()(d()(e), '_triggerChange', function (t, a) {
                var n = e.props,
                  r = n.duration,
                  i = n.endTime,
                  o = n.onScrub,
                  s = n.startTime,
                  c = e._baseTime + e._scaleDistanceByTrimmerWidth(t),
                  l = 1e3
                if (a === G) {
                  var d = c
                  c <= 0 ? (d = 0) : i - l <= c && (d = i - l), o(G, d)
                }
                if (a === K) {
                  var u = c
                  c >= r ? (u = r) : c - s <= l && (u = s + l), o(K, u)
                }
              }),
              e
            )
          }
          return (
            c()(a, [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._removeTouchMoveToScrollListener()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.duration,
                    a = e.endTime,
                    n = e.playTime,
                    r = e.startTime,
                    i = this.state,
                    o = i.isActive,
                    s = i.trimmerWidth,
                    c = this._getTrimmerScrubberWidth(),
                    l = O.a.getConstants().isRTL,
                    d = l ? 'marginRight' : 'marginLeft',
                    u = l ? 'marginLeft' : 'marginRight'
                  return b.a.createElement(
                    j.a,
                    I()(
                      { ref: this._setRootRef, style: [ie.root, o && ie.cursorGrab] },
                      this._panResponderTermination.panHandlers,
                    ),
                    this._renderTimestampLabel(),
                    b.a.createElement(
                      j.a,
                      { onLayout: this._handleLayout, style: ie.trimmerWrapper },
                      b.a.createElement(
                        j.a,
                        { style: ie.intervalsContainer },
                        b.a.createElement(F, { duration: t, trimmerWidth: s }),
                      ),
                      b.a.createElement(
                        b.a.Fragment,
                        null,
                        b.a.createElement(j.a, { style: [ie.discardArea, ie.transition, { width: ne(r, t) }] }),
                        b.a.createElement(
                          j.a,
                          { style: ie.keepArea },
                          b.a.createElement(Y, {
                            currentValue: r,
                            maxValue: a,
                            minValue: 0,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: G,
                            style: [ie.trimmerScrubber, f()({}, d, '-'.concat(c, 'px'))],
                          }),
                          b.a.createElement(
                            j.a,
                            { style: ie.keepAreaCenter },
                            o
                              ? null
                              : b.a.createElement(j.a, {
                                  style: [ie.playBarArea, ie.transition, { width: ne(n, a - r) }],
                                }),
                          ),
                          b.a.createElement(Y, {
                            currentValue: a,
                            maxValue: t,
                            minValue: r,
                            onKeyDown: this._handleKeyDown,
                            onKeyUp: this._handleKeyUp,
                            onMoveChange: this._handlePanResponderChange,
                            onMoveEnd: this._handlePanResponderEnd,
                            onMoveStart: this._handlePanResponderGrant,
                            side: K,
                            style: [ie.trimmerScrubber, f()({}, u, '-'.concat(c, 'px'))],
                          }),
                        ),
                        b.a.createElement(j.a, {
                          style: [ie.discardArea, ie.transition, { width: 'calc(100% - '.concat(ne(a, t), ')') }],
                        }),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        ie = S.a.create(function (e) {
          return {
            root: { paddingHorizontal: e.spaces.space40, width: '100%' },
            cursorGrab: { cursor: 'grab' },
            trimmerWrapper: {
              alignItems: 'center',
              writingDirection: 'ltr',
              flexGrow: 1,
              flexDirection: 'row',
              height: e.spaces.space48,
              position: 'relative',
            },
            discardArea: {
              backgroundColor: e.colors.maskColor,
              height: 'calc(100% - ('.concat(e.spaces.space4, ' * 2))'),
            },
            keepArea: { flexDirection: 'row', flexGrow: 1, height: '100%', zIndex: 1 },
            keepAreaCenter: {
              borderColor: e.colors.primary,
              borderStyle: 'solid',
              borderBottomWidth: e.spaces.space4,
              borderTopWidth: e.spaces.space4,
              height: '100%',
              position: 'relative',
              width: '100%',
            },
            intervalsContainer: {
              backgroundColor: e.colors.gray50,
              height: 'calc('.concat(e.spaces.space48, ' - ').concat(e.spaces.space4, ' * 2)'),
              position: 'absolute',
              left: 0,
              right: 0,
            },
            label: { userSelect: 'none' },
            labelWrapper: {
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: e.spaces.space8,
              paddingTop: e.spaces.space8,
            },
            playBarArea: { backgroundColor: e.colors.primary, height: '100%', opacity: 0.5 },
            trimmerScrubber: { zIndex: 1 },
            transition: { transitionDuration: '0.01s', transitionProperty: 'width' },
            visibilityHidden: { visibility: 'hidden' },
          }
        }),
        oe = re,
        se = a('mXq/'),
        ce = a('/run'),
        le = a('KwSe'),
        de = new E.a({}),
        ue = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a() {
            var e, n, i
            o()(this, a)
            for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++) c[l] = arguments[l]
            return (
              (i = t.call.apply(t, [this].concat(c))),
              f()(d()(i), '_isScrubbed', !1),
              f()(d()(i), 'state', {
                endTime:
                  (null === (e = i.props.defaultTrimData) || void 0 === e ? void 0 : e.endTime) ||
                  i.props.video.duration,
                isPlaying: !1,
                startTime: (null === (n = i.props.defaultTrimData) || void 0 === n ? void 0 : n.startTime) || 0,
                playTime: 0,
              }),
              f()(d()(i), '_handleScrub', function (e) {
                return function (t, a) {
                  var n = i.state,
                    o = n.endTime,
                    s = n.startTime,
                    c = i.props.video.duration,
                    l = t === G
                  if (e) {
                    var d = l ? a : s,
                      u = l ? o : a
                    e.pause(),
                      e.scrubToFraction(a / c),
                      e.setPlaybackTimeRange({ startTimeS: d / 1e3, endTimeS: u / 1e3 })
                  }
                  i._isScrubbed = !0
                  var m = l ? { startTime: a } : { endTime: a }
                  i.setState(r()({ playTime: 0 }, m))
                }
              }),
              f()(d()(i), '_handleOnVideoContainerLayout', function (e) {
                var t = e.nativeEvent.layout,
                  a = t.height,
                  n = t.width,
                  r = i.props.video,
                  o = r.height,
                  s = r.width / o,
                  c = M.a.getContainDimensions({ height: a, width: n }, s),
                  l = c.height,
                  d = c.width
                ;(l === i.state.adjustedVideoHeight && d === i.state.adjustedVideoWidth) ||
                  i.setState({ adjustedVideoHeight: l, adjustedVideoWidth: d })
              }),
              f()(d()(i), '_handleVideoClick', function (e) {
                return function () {
                  var t = i.state,
                    a = t.endTime,
                    n = t.isPlaying,
                    r = t.startTime,
                    o = i.props.video.duration
                  e &&
                    (i._isScrubbed
                      ? (e.scrubToFraction(r / o), (i._isScrubbed = !1))
                      : i._isScrubbed ||
                        (!r && a === o) ||
                        (e.scrubToFraction(r / o), e.setPlaybackTimeRange({ startTimeS: r / 1e3, endTimeS: a / 1e3 })),
                    n ? e.pause() : e.play())
                }
              }),
              f()(d()(i), '_handlePlayerStateUpdate', function (e) {
                var t = i.state.startTime,
                  a = e.tracks[e.currentTrackId]
                if (a) {
                  var n = a.currentTimeMs - t
                  i.setState(r()({ isPlaying: e.isPlaying }, e.isPlaying ? { playTime: n } : {}))
                }
              }),
              i
            )
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props.video,
                    a = this.state,
                    n = a.adjustedVideoHeight,
                    r = a.adjustedVideoWidth,
                    i = a.endTime,
                    o = a.isPlaying,
                    s = a.playTime,
                    c = a.startTime
                  return b.a.createElement(
                    j.a,
                    { style: me.root },
                    b.a.createElement(
                      le.a,
                      null,
                      b.a.createElement(
                        j.a,
                        { style: me.videoContainer },
                        b.a.createElement(
                          j.a,
                          { onLayout: this._handleOnVideoContainerLayout, style: me.video },
                          b.a.createElement(
                            y.a,
                            { ratio: t.width / t.height, style: n && r && { height: n, width: r } },
                            b.a.createElement(
                              _.b,
                              {
                                aspectRatio: t.width / t.height,
                                basePlayerClass: ce.a,
                                configType: 'static',
                                contentId: '',
                                contentType: 'media_entity',
                                httpClient: de,
                                onStateUpdate: this._handlePlayerStateUpdate,
                                playerId: 'trimmer',
                                size: 'fill',
                                variants: t.variants,
                              },
                              function (t) {
                                var a = t.playerApi
                                return b.a.createElement(
                                  C.a,
                                  {
                                    focusable: !0,
                                    interactiveStyles: T.a.generate({
                                      backgroundColor: S.a.theme.colors.transparent,
                                      color: S.a.theme.colors.primary,
                                      customFocusBackgroundColor: S.a.theme.colors.transparent,
                                      customHoverBackgroundColor: S.a.theme.colors.transparent,
                                      customPressedBackgroundColor: S.a.theme.colors.transparent,
                                      insetFocusRing: !0,
                                    }),
                                    onClick: e._handleVideoClick(a),
                                    style: me.overlay,
                                  },
                                  o ? null : b.a.createElement(se.a, null),
                                )
                              },
                            ),
                          ),
                        ),
                      ),
                      b.a.createElement(le.a.MetadataSubscriber, { playerId: 'trimmer' }, function (a) {
                        var n = a.playerApi
                        return b.a.createElement(oe, {
                          duration: t.duration,
                          endTime: i,
                          onScrub: e._handleScrub(n),
                          playTime: s,
                          startTime: c,
                        })
                      }),
                    ),
                  )
                },
              },
              {
                key: 'getTrimData',
                value: function () {
                  var e = this.state,
                    t = e.endTime
                  return { startTime: e.startTime, endTime: t }
                },
              },
            ]),
            a
          )
        })(b.a.Component),
        me = S.a.create(function (e) {
          return {
            root: { flex: 1 },
            overlay: r()(r()({}, S.a.absoluteFillObject), {}, { alignItems: 'center', justifyContent: 'center' }),
            video: { alignItems: 'center', flex: 1, justifyContent: 'center', width: '100%' },
            videoContainer: {
              alignItems: 'center',
              backgroundColor: e.colors.gray0,
              flex: 1,
              padding: e.spaces.space20,
              width: '100%',
            },
          }
        })
      t.a = ue
    },
    eIif: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'PhotoTagsScreen', function () {
          return L
        })
      var n = a('RhWx'),
        r = a.n(n),
        i = a('ddV6'),
        o = a.n(i),
        s = (a('hBpG'), a('7x/C'), a('2G9S'), a('LW0h'), a('tQbP'), a('z84I'), a('ERkP')),
        c = a.n(s),
        l = a('VAZu'),
        d = (a('M+/F'), a('xVN5')),
        u = a('hqKg'),
        m = a('tn7R'),
        p = a('GZwR'),
        h = a('UQTn'),
        v = a('oEGd'),
        f = Object(u.createSelector)(
          function (e) {
            var t = d.i(e)
            return d.k(e)[t].mediaTags
          },
          function (e) {
            return (function (e) {
              var t = Object(h.e)(e),
                a = (t && Object(m.a)(t)) || []
              return Object(p.i)(a)
            })(e)
              .filter(function (e) {
                return e && e.rounded_score
              })
              .sort(function (e, t) {
                return (t.rounded_score || 0) - (e.rounded_score || 0)
              })
              .slice(0, 12)
          },
          function (e, t) {
            return { existingTags: e, injections: t }
          },
        ),
        g = { updateSingleComposer: d.w },
        b = Object(v.g)(f, g),
        y = a('jHSc'),
        _ = a('3XMw'),
        E = a.n(_),
        T = a('Oib4'),
        C = a('mN6z'),
        M = a('2dXj'),
        S = a('MWbm'),
        w = a('4zmP'),
        I = a('/yvb'),
        x = a('rHpw'),
        k = a('7JQg'),
        A = E.a.b772cd65,
        R = E.a.c20dc653,
        P = E.a.d1175c78,
        D = E.a.ae0831ab
      function L(e) {
        var t = e.history,
          a = e.injections,
          n = e.existingTags,
          i = void 0 === n ? [] : n,
          s = e.updateSingleComposer,
          d = c.a.useState(i),
          u = o()(d, 2),
          m = u[0],
          h = u[1],
          v = c.a.useState(''),
          f = o()(v, 2),
          g = f[0],
          b = f[1],
          _ = function (e) {
            h(
              m.filter(function (t) {
                return t.id !== e.id
              }),
            )
          },
          E = function () {
            var e = m
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              t = i
                .map(function (e) {
                  return e.data.id_str
                })
                .sort(),
              a = e.length === t.length && Object(C.a)(e, t)
            return c.a.createElement(
              S.a,
              { style: O.rightColumn },
              c.a.createElement(I.a, { disabled: a, onPress: k, size: 'small', type: 'primaryFilled' }, A),
            )
          },
          x = function () {
            t.goBack()
          },
          k = function () {
            s({ updates: { mediaTags: m } }), t.goBack()
          }
        return c.a.createElement(
          y.b,
          {
            documentTitle: P,
            history: t,
            renderHeader: function () {
              return c.a.createElement(l.a, {
                backButtonType: 'close',
                history: t,
                onBackClick: x,
                rightControl: E(),
                title: P,
              })
            },
          },
          c.a.createElement(M.d, {
            getItemDisabledMessage: function (e) {
              var t
              return e.type !== p.b.User || e.data.can_media_tag || (t = D({ screenName: e.data.screen_name })), t
            },
            getItemIsDisabled: function (e) {
              var t = m.length >= 10
              return e.type === p.b.User && (!e.data.can_media_tag || !!t)
            },
            injections: g ? void 0 : a,
            onQueryChange: function (e) {
              b(e)
            },
            onRemove: _,
            onSelect: function (e) {
              e.type === p.b.User &&
                (m.find(function (t) {
                  return t.id === e.id
                })
                  ? _(e)
                  : m.length < 10 && h([].concat(r()(m), [e])))
            },
            renderCallout: function () {
              return m.length >= 10
                ? c.a.createElement(
                    S.a,
                    { style: O.inlineCallout },
                    c.a.createElement(w.a, { Icon: T.a, headline: R, type: 'warning' }),
                  )
                : null
            },
            selectedUsers: m,
            source: p.d.ComposeMediaTagging,
            withCompactPills: !0,
          }),
        )
      }
      var O = x.a.create(function (e) {
        return {
          rightColumn: { flexDirection: 'row', flexGrow: 1, alignItems: 'center' },
          inlineCallout: {
            paddingHorizontal: e.spaces.space16,
            paddingBottom: e.spaces.space4,
            paddingTop: e.spaces.space8,
          },
        }
      })
      t.default = Object(k.a)({ page: 'media_tag', component: 'media_tagger' })(b(L))
    },
    i8hi: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'TabbedMediaEditScreen', function () {
          return M
        })
      var n = a('97Jx'),
        r = a.n(n),
        i = a('VrFO'),
        o = a.n(i),
        s = a('Y9Ll'),
        c = a.n(s),
        l = a('N+ot'),
        d = a.n(l),
        u = a('5Yy7'),
        m = a.n(u),
        p = a('2VqO'),
        h = a.n(p),
        v = (a('KqXw'), a('MvUL'), a('ERkP')),
        f = a.n(v),
        g = a('CDB5'),
        b = a('rxPX'),
        y = a('AspN'),
        _ = function (e, t) {
          return t.location && t.location.state && t.location.state.mediaId
        },
        E = function (e, t) {
          var a = (function (e, t) {
            var a, n
            return null === (a = t.location) || void 0 === a || null === (n = a.state) || void 0 === n
              ? void 0
              : n.conversationId
          })(0, t)
          return Object(g.i)(e, a)
        },
        T = Object(b.a)()
          .propsFromState(function () {
            return { media: E, initialMediaId: _ }
          })
          .adjustStateProps(function (e) {
            var t = e.initialMediaId,
              a = e.media
            return { media: a ? [a] : [], initialMediaId: t }
          })
          .propsFromActions(function () {
            return { setMediaMetadata: y.n, processMedia: y.f, updateMediaUpload: y.o }
          })
          .withAnalytics({ page: 'tabbed_media_dm' }),
        C = a('jFmo'),
        M = (function (e) {
          m()(a, e)
          var t = h()(a)
          function a(e) {
            var n
            o()(this, a), (n = t.call(this, e))
            var r = e.history,
              i = e.initialMediaId
            return e.media.length <= 0 || !i ? (r.replace('/'), d()(n)) : n
          }
          return (
            c()(a, [
              {
                key: 'render',
                value: function () {
                  return f.a.createElement(C.a, r()({}, this.props, { sensitiveMediaTabEnabled: !1 }))
                },
              },
            ]),
            a
          )
        })(f.a.Component)
      t.default = T(M)
    },
    jFmo: function (e, t, a) {
      'use strict'
      var n = a('97Jx'),
        r = a.n(n),
        i = a('m3Bd'),
        o = a.n(i),
        s = (a('KqXw'), a('MvUL'), a('ERkP')),
        c = a.n(s),
        l = a('v6aA'),
        d = a('yiKp'),
        u = a.n(d),
        m = a('RhWx'),
        p = a.n(m),
        h = a('VrFO'),
        v = a.n(h),
        f = a('Y9Ll'),
        g = a.n(f),
        b = a('1Pcy'),
        y = a.n(b),
        _ = a('5Yy7'),
        E = a.n(_),
        T = a('2VqO'),
        C = a.n(T),
        M = a('KEM+'),
        S = a.n(M),
        w =
          (a('hBpG'),
          a('7x/C'),
          a('vrRf'),
          a('jwue'),
          a('+oxZ'),
          a('2G9S'),
          a('z84I'),
          a('JtPf'),
          a('lTEL'),
          a('87if'),
          a('kYxP'),
          a('LqLs'),
          a('m9LP'),
          a('TJCb'),
          a('DZ+c'),
          a('xZGM')),
        I = a('3XMw'),
        x = a.n(I),
        k = a('pKoL'),
        A = a('Qwev'),
        R = a('rHpw'),
        P = a('U+bB'),
        D = a('MWbm'),
        L = x.a.gff1f69e
      var O = R.a.create(function (e) {
          return {
            activityIndicator: { height: '100%', width: '100%' },
            image: { width: '100%', flexGrow: 1 },
            mediaContainer: { overflow: 'hidden', flexGrow: 1, flexBasis: 0, width: '100%' },
            mediaPreviewWrapper: {
              flexDirection: 'column',
              flexGrow: 1,
              alignItems: 'center',
              width: '100%',
              paddingVertical: 25,
              paddingHorizontal: 25,
              backgroundColor: e.colors.gray0,
            },
          }
        }),
        j = function (e) {
          var t = e.mediaItem,
            a = e.orientedImage
          return c.a.createElement(
            D.a,
            { style: O.mediaPreviewWrapper },
            void 0 === a && t
              ? c.a.createElement(k.a, {
                  imageResizeMode: 'contain',
                  mediaItem: t,
                  style: O.mediaContainer,
                  withCloseButton: !1,
                })
              : a
              ? c.a.createElement(P.a, { resizeMode: 'contain', source: a.url, style: O.image })
              : c.a.createElement(A.a, { accessibilityLabel: L, style: O.activityIndicator }),
          )
        },
        U = R.a.create(function (e) {
          return {
            formTextInput: {
              width: '100%',
              backgroundColor: e.colors.navigationBackground,
              paddingHorizontal: e.spaces.space12,
              paddingBottom: 0,
              borderTopWidth: e.spaces.space1,
              borderTopStyle: 'solid',
              borderTopColor: e.colors.borderColor,
            },
            attachmentContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        F = 'altTextInput',
        W = 'endEditingButton',
        B = 'altTextEducationSheetPrimaryAction',
        V = a('t62R'),
        z = a('p+r5'),
        G = x.a.feabf2a0,
        K = x.a.e36287c6,
        H = x.a.cf565d08,
        N = (function (e) {
          E()(a, e)
          var t = C()(a)
          function a() {
            var e
            v()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(y()(e), '_renderInputHelperText', function () {
                var t = e.props.onShowEducation
                return t ? c.a.createElement(V.b, { color: 'link', onPress: t, withInteractiveStyling: !0 }, H) : null
              }),
              S()(y()(e), '_handleChange', function (t) {
                var a = e.props,
                  n = a.currentMediaId,
                  r = a.mediaItem,
                  i = a.onChange,
                  o = t.target.value
                r ? i(o, r.id.toString()) : n && i(o, n)
              }),
              e
            )
          }
          return (
            g()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.autofocus,
                    a = e.maxLength,
                    n = e.mediaItem,
                    r = e.orientedImage,
                    i = e.value
                  return c.a.createElement(
                    D.a,
                    { style: U.root },
                    c.a.createElement(
                      D.a,
                      { style: U.attachmentContainer },
                      c.a.createElement(j, { mediaItem: n, orientedImage: r }),
                      c.a.createElement(z.a, {
                        accessibilityLabel: G,
                        autoFocus: t,
                        helperText: this._renderInputHelperText(),
                        label: K,
                        maxLength: a,
                        maxNumberOfLines: 6,
                        multiline: !0,
                        name: 'altTextInput',
                        numberOfLines: 2,
                        onChange: this._handleChange,
                        style: U.formTextInput,
                        testID: F,
                        value: i,
                      }),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(c.a.Component),
        q = a('rxPX'),
        Q = function (e, t) {
          return Object(w.A)(e, w.a)
        },
        X = Object(q.a)()
          .propsFromState(function () {
            return { showEducationOnMount: Q }
          })
          .propsFromActions(function () {
            return { addFlag: w.w }
          })
          .withAnalytics(),
        J = a('feu+'),
        Z = x.a.ffe9ec3a,
        Y = x.a.j063b261,
        $ = x.a.e57144f0,
        ee = x.a.f9f9210c,
        te = (function (e) {
          E()(a, e)
          var t = C()(a)
          function a() {
            var e
            v()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(y()(e), 'state', { showAltTextEducationSheet: !1 }),
              S()(y()(e), '_handleOpenEducationPrompt', function () {
                var t = e.props.analytics
                e.setState({ showAltTextEducationSheet: !0 }), t.scribe({ component: 'education', action: 'click' })
              }),
              S()(y()(e), '_handleCloseEducationPrompt', function () {
                e.setState({ showAltTextEducationSheet: !1 })
              }),
              S()(y()(e), '_handleEducationPromptPrimaryAction', function () {
                var t = e.props.analytics
                e._handleCloseEducationPrompt(),
                  t.scribe({ component: 'education', element: 'alt_text_button', action: 'click' })
              }),
              S()(y()(e), '_handleEducationPromptSecondaryAction', function () {
                e.props.history.goBack()
              }),
              e
            )
          }
          return (
            g()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addFlag,
                    a = e.analytics
                  e.showEducationOnMount &&
                    (this.setState({ showAltTextEducationSheet: !0 }),
                    a.scribe({ component: 'education', action: 'open' }),
                    t(w.a))
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.mediaItem,
                    a = e.onAltTextChange,
                    n = e.orientedImage,
                    r = e.value,
                    i = this.state.showAltTextEducationSheet,
                    o = t && t.id.toString()
                  return c.a.createElement(
                    D.a,
                    { style: ae.root },
                    i
                      ? c.a.createElement(J.a, {
                          actionLabel: $,
                          headline: Z,
                          onAction: this._handleEducationPromptPrimaryAction,
                          onClose: this._handleCloseEducationPrompt,
                          onSecondaryAction: this._handleEducationPromptSecondaryAction,
                          primaryButtonTestID: B,
                          secondaryActionLabel: ee,
                          subtext: Y,
                        })
                      : null,
                    c.a.createElement(N, {
                      autofocus: !0,
                      currentMediaId: o,
                      maxLength: 1e3,
                      mediaItem: t,
                      onChange: a,
                      onShowEducation: this._handleOpenEducationPrompt,
                      orientedImage: n,
                      value: r,
                    }),
                  )
                },
              },
            ]),
            a
          )
        })(c.a.Component),
        ae = R.a.create(function (e) {
          return { root: { flexGrow: 1 } }
        }),
        ne = X(te),
        re = a('jHSc'),
        ie = a('EeFI'),
        oe = a('7JQg'),
        se = a('PbQQ'),
        ce = a('6vad'),
        le = a('e0ey'),
        de = a('ZkMC'),
        ue = x.a.j9cf595f,
        me = x.a.d69a782e,
        pe = x.a.faf745f9,
        he = x.a.b96e6682,
        ve = x.a.h2437f25
      function fe(e) {
        var t = e.currentWarnings,
          a = e.mediaItem,
          n = e.onWarningChange,
          r = e.orientedImage,
          i = [
            { label: pe, value: 'adult_content' },
            { label: he, value: 'graphic_violence' },
            { label: ve, value: 'other' },
          ],
          o = se.b.useOpaqueIdentifier(),
          s = c.a.createElement(j, { mediaItem: a, orientedImage: r })
        return c.a.createElement(
          D.a,
          { style: ge.root },
          c.a.createElement(
            D.a,
            { style: ge.modalContainer },
            null != t && t.size
              ? c.a.createElement(
                  de.a,
                  { revealableTombstoneConfig: de.c, sensitiveMediaWarnings: t, withRoundedCorners: !1 },
                  s,
                )
              : s,
            c.a.createElement(ce.b, { nativeID: o, subtext: me, text: ue }),
            c.a.createElement(
              D.a,
              { accessibilityLabelledBy: o, accessibilityRole: 'group' },
              i.map(function (e) {
                var a = e.label,
                  r = e.value
                return c.a.createElement(le.a, { checked: t && t.has(r), key: r, label: a, name: r, onChange: n })
              }),
            ),
          ),
        )
      }
      var ge = R.a.create(function (e) {
          return {
            modalContainer: { width: '100%', height: '100%', flexGrow: 1 },
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '100%', flexGrow: 1 },
          }
        }),
        be = R.a.create(function (e) {
          return {
            root: { flexGrow: 1, flexShrink: 1, paddingBottom: e.spaces.space12 },
            rightControl: { display: 'flex', flexDirection: 'row' },
            prevButton: { marginEnd: e.spaces.space2 },
            saveButton: { marginStart: e.spaces.space12 },
            segmentedControlChildren: { flexGrow: 1 },
            leftRightButtons: { alignItems: 'center' },
            videoTrimmerWrapper: { flexGrow: 1, flexShrink: 1, marginBottom: e.spaces.space20 },
          }
        }),
        ye = a('k/OQ'),
        _e = a('/yvb'),
        Ee = a('oQhu'),
        Te = a('ddV6'),
        Ce = a.n(Te),
        Me = function (e) {
          var t = new Map()
          return (
            e.forEach(function (e) {
              var a = Ce()(e, 2),
                n = a[0],
                r = a[1]
              t.set(n, r)
            }),
            t
          )
        },
        Se = a('mN6z'),
        we = a('95Se'),
        Ie = a('7Mjr'),
        xe = a('Mbn/'),
        ke = a('zIWA'),
        Ae = a('1auM'),
        Re = a('eYns'),
        Pe = { section: 'alt_text' },
        De = { section: 'crop' },
        Le = { section: 'sensitive_media' },
        Oe = x.a.e070024a,
        je = x.a.i2209530,
        Ue = x.a.i7d24b36,
        Fe = x.a.f96a38a2,
        We = x.a.hac7c548,
        Be = x.a.e3dbfba3,
        Ve = x.a.dd4a83a5,
        ze = 'crop',
        Ge = 'alt_text',
        Ke = 'sensitive_media',
        He = (function (e) {
          E()(a, e)
          var t = C()(a)
          function a(e) {
            var n
            v()(this, a),
              (n = t.call(this, e)),
              S()(y()(n), '_cropper', c.a.createRef()),
              S()(
                y()(n),
                '_getMemoizedCurrentTabMetadata',
                Object(Ee.a)(function (e, t) {
                  switch (e) {
                    case Ge:
                      return { namespace: Pe, title: Be, renderer: n._renderAltTextTab }
                    case Ke:
                      if (t) return { namespace: Le, title: Ve, renderer: n._renderSensitiveMediaTab }
                    default:
                      return { namespace: De, title: We, renderer: n._renderCropTab }
                  }
                }),
              ),
              S()(y()(n), '_renderSegmentedControl', function () {
                var e = n.props.sensitiveMediaTabEnabled,
                  t = n._getSegmentedControlLinks(),
                  a = n._getCurrentTab(),
                  r = n._getMemoizedCurrentTabMetadata(a, e)
                return c.a.createElement(
                  c.a.Fragment,
                  null,
                  t.length > 1 ? c.a.createElement(ye.a, { accessibilityLabel: Oe, links: t }) : null,
                  c.a.createElement(D.a, { style: be.segmentedControlChildren }, r.renderer()),
                )
              }),
              S()(y()(n), '_renderAltTextTab', function () {
                var e = n.props.history,
                  t = n.state,
                  a = t.currentMediaId,
                  r = t.mediaMetadata,
                  i = t.orientedImage,
                  o = n._getCurrentMediaItem(),
                  s = r[a] && r[a].altText
                return c.a.createElement(ne, {
                  history: e,
                  key: a,
                  mediaItem: o,
                  onAltTextChange: n._handleAltTextChange,
                  orientedImage: i.get(a),
                  value: s,
                })
              }),
              S()(y()(n), '_renderCropTab', function () {
                var e = n.state,
                  t = e.cropData,
                  a = e.currentMediaId,
                  r = n._getCurrentMediaItem()
                return c.a.createElement(ie.a, {
                  defaultCropData: t.get(a),
                  key: a,
                  media: r,
                  ref: n._cropper,
                  withAspectRatioOptions: !0,
                })
              }),
              S()(y()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state,
                  t = e.currentMediaId,
                  a = e.mediaMetadata,
                  r = e.orientedImage,
                  i = n._getCurrentMediaItem(),
                  o = a[t] && a[t].sensitiveMediaWarning
                return c.a.createElement(fe, {
                  currentWarnings: o,
                  key: t,
                  mediaItem: i,
                  onWarningChange: n._handleSensitiveWarningChange,
                  orientedImage: r.get(t),
                })
              }),
              S()(y()(n), '_renderAppBarRightControl', function () {
                var e = n.state.isProcessing,
                  t = n._getNextMediaIndex(1),
                  a = n._getNextMediaIndex(-1)
                return c.a.createElement(
                  D.a,
                  { style: be.rightControl },
                  n._hasMediaAtIndex(a) || n._hasMediaAtIndex(t)
                    ? c.a.createElement(
                        D.a,
                        { style: [be.rightControl, be.leftRightButtons] },
                        c.a.createElement(_e.a, {
                          accessibilityLabel: Fe,
                          disabled: !n._hasMediaAtIndex(a),
                          icon: c.a.createElement(we.a, null),
                          onPress: n._handleClickToMediaAtIndex(a),
                          size: 'small',
                          style: be.prevButton,
                          type: 'primaryOutlined',
                        }),
                        c.a.createElement(_e.a, {
                          accessibilityLabel: Ue,
                          disabled: !n._hasMediaAtIndex(t),
                          icon: c.a.createElement(Ie.a, null),
                          onPress: n._handleClickToMediaAtIndex(t),
                          size: 'small',
                          type: 'primaryOutlined',
                        }),
                      )
                    : null,
                  c.a.createElement(
                    _e.a,
                    {
                      disabled: e,
                      onPress: n._handleEndEditingClick,
                      size: 'small',
                      style: be.saveButton,
                      testID: W,
                      type: 'primaryFilled',
                    },
                    je,
                  ),
                )
              }),
              S()(y()(n), '_handleCancelEditingClick', function (e) {
                n._scribeWithNamespace({ action: 'cancel' }), e()
              }),
              S()(y()(n), '_handleClickTab', function (e) {
                var t = n.props.analytics
                n._handleSaveCropData(),
                  n._scribeWithNamespace({ element: e, action: 'click' }),
                  t.scribePageImpression()
              }),
              S()(y()(n), '_getCurrentMediaItem', function () {
                var e = n.props.media,
                  t = n.state.currentMediaId
                return e.find(function (e) {
                  return e.id === t
                })
              }),
              S()(y()(n), '_getNextMediaIndex', function (e) {
                var t = n.props.media,
                  a = n._getCurrentMediaItem()
                return t.indexOf(a) + e
              }),
              S()(y()(n), '_hasMediaAtIndex', function (e) {
                var t = n.props.media
                return e >= 0 && e < t.length
              }),
              S()(y()(n), '_handleClickToMediaAtIndex', function (e) {
                return function () {
                  var t = n.props.media
                  if (n._hasMediaAtIndex(e)) {
                    n._handleSaveCropData()
                    var a = t[e].id
                    n.setState({ currentMediaId: a })
                  }
                }
              }),
              S()(y()(n), '_saveMediaMetadata', function () {
                var e = n.props,
                  t = e.media,
                  a = e.setMediaMetadata,
                  r = n.state.mediaMetadata
                t.forEach(function (e) {
                  a(e.id, r[e.id])
                })
              }),
              S()(y()(n), '_handleEndEditingClick', function () {
                var e = n.props.history,
                  t = n._cropper && n._cropper.current,
                  a = n.state.cropData
                if (t || a.size) {
                  var r = n.props,
                    i = r.media,
                    o = r.processMedia,
                    s = r.updateMediaUpload,
                    c = n.state.currentMediaId
                  n.setState({ isProcessing: !0 })
                  var l = t ? Me([].concat(p()(a), [[c, t.getCropData()]])) : a,
                    d = i.map(function (e) {
                      return l.get(e.id) ? (s({ id: e.id, cropData: l.get(e.id) }), o(e.id)) : Promise.resolve()
                    })
                  Promise.all(d).then(function () {
                    n._scribeWithNamespace({ action: 'done' })
                  })
                }
                n._saveMediaMetadata(), e.goBack()
              }),
              S()(y()(n), '_handleAltTextChange', function (e) {
                n.setState(function (t) {
                  return {
                    mediaMetadata: u()(
                      u()({}, t.mediaMetadata),
                      {},
                      S()({}, t.currentMediaId, u()(u()({}, t.mediaMetadata[t.currentMediaId]), {}, { altText: e })),
                    ),
                  }
                })
              }),
              S()(y()(n), '_handleSensitiveWarningChange', function (e, t) {
                n.setState(function (a) {
                  var n =
                    (a.mediaMetadata[a.currentMediaId] && a.mediaMetadata[a.currentMediaId].sensitiveMediaWarning) ||
                    new Set()
                  return (
                    t ? n.add(e) : n.delete(e),
                    {
                      mediaMetadata: u()(
                        u()({}, a.mediaMetadata),
                        {},
                        S()(
                          {},
                          a.currentMediaId,
                          u()(u()({}, a.mediaMetadata[a.currentMediaId]), {}, { sensitiveMediaWarning: n }),
                        ),
                      ),
                    }
                  )
                })
              }),
              S()(y()(n), '_handleSaveCropData', function () {
                var e = n._cropper && n._cropper.current
                if (e) {
                  var t = n.state.currentMediaId,
                    a = e.getCropData(),
                    r = n._getCurrentMediaItem()
                  if (
                    r &&
                    !Object(Se.a)(a, n.state.cropData.get(t)) &&
                    (n.setState(function (e) {
                      return { orientedImage: Me([].concat(p()(e.orientedImage), [[t, null]])) }
                    }),
                    r.originalMediaFile && r.originalMediaFile instanceof Ae.a)
                  ) {
                    var i = r.cropData
                    Object(Re.b)(r.originalMediaFile, { cropData: a || i })
                      .then(function (e) {
                        return new Ae.a(e).withDimensionsAndOrientation().then(function (e) {
                          n.setState(function (n) {
                            return {
                              orientedImage: Me([].concat(p()(n.orientedImage), [[t, e]])),
                              cropData: Me([].concat(p()(n.cropData), [[t, a]])),
                            }
                          })
                        })
                      })
                      .catch(function () {
                        n.setState(function (e) {
                          return { orientedImage: Me([].concat(p()(e.orientedImage), [[t, void 0]])) }
                        })
                      })
                  }
                  n.setState(function (e) {
                    return { cropData: Me([].concat(p()(e.cropData), [[t, a]])) }
                  })
                }
              }),
              S()(y()(n), '_scribeWithNamespace', function (e) {
                var t = n.props,
                  a = t.analytics,
                  r = t.sensitiveMediaTabEnabled,
                  i = n._getCurrentTab(),
                  o = n._getMemoizedCurrentTabMetadata(i, r)
                a.scribe(u()(u()({}, o.namespace), e))
              }),
              S()(y()(n), '_getMediaMetadata', function (e) {
                var t = {}
                return (
                  e.forEach(function (e) {
                    return (t[e.id] = e.mediaMetadata)
                  }),
                  t
                )
              })
            var r = e.initialMediaId,
              i = e.media,
              o = n._getMediaMetadata(i)
            return (
              (n.state = {
                cropData: new Map(),
                isProcessing: !1,
                mediaMetadata: o,
                currentMediaId: r || -1,
                orientedImage: new Map(),
              }),
              n
            )
          }
          return (
            g()(a, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.altTextTabEnabled,
                    a = e.cropTabEnabled,
                    n = e.history,
                    r = e.sensitiveMediaTabEnabled,
                    i = t ? a || r : a && r,
                    o = this._getCurrentTab(),
                    s = this._getMemoizedCurrentTabMetadata(o, r)
                  return c.a.createElement(
                    oe.c,
                    { namespace: s.namespace },
                    c.a.createElement(
                      re.b,
                      {
                        backButtonType: 'back',
                        containerStyle: be.root,
                        documentTitle: s.title,
                        history: n,
                        onBackClick: this._handleCancelEditingClick,
                        rightControl: this._renderAppBarRightControl(),
                        title: s.title,
                      },
                      i ? this._renderSegmentedControl() : s.renderer(),
                    ),
                  )
                },
              },
              {
                key: '_getCurrentTab',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.altTextTabEnabled,
                    r = a.cropTabEnabled
                  return null !== (e = this.props.location.state) && void 0 !== e && e.tab
                    ? null === (t = this.props.location.state) || void 0 === t
                      ? void 0
                      : t.tab
                    : r
                    ? ze
                    : n && Ge
                },
              },
              {
                key: '_getSegmentedControlLinks',
                value: function () {
                  var e = this,
                    t = this.props,
                    a = t.analytics,
                    n = t.location,
                    r = t.sensitiveMediaTabEnabled,
                    i = this._getCurrentMediaItem(),
                    o = []
                  return (
                    i &&
                      i.originalMediaFile &&
                      i.originalMediaFile.isImage &&
                      o.push({
                        to: u()(u()({}, n), {}, { state: u()(u()({}, n.state), {}, { tab: ze }) }),
                        label: c.a.createElement(xe.a, null),
                        key: ze,
                        accessibilityLabel: We,
                        isActive: function () {
                          var e
                          return (null === (e = n.state) || void 0 === e ? void 0 : e.tab) === ze
                        },
                        onClick: function () {
                          return a.scribePageImpression()
                        },
                      }),
                    o.push({
                      to: u()(u()({}, n), {}, { state: u()(u()({}, n.state), {}, { tab: Ge }) }),
                      label: c.a.createElement(V.b, { weight: 'bold' }, 'ALT'),
                      key: Ge,
                      accessibilityLabel: Be,
                      isActive: function () {
                        var e
                        return (null === (e = n.state) || void 0 === e ? void 0 : e.tab) === Ge
                      },
                      onClick: function () {
                        return e._handleClickTab('alt_text_button')
                      },
                    }),
                    r &&
                      o.push({
                        to: u()(u()({}, n), {}, { state: u()(u()({}, n.state), {}, { tab: Ke }) }),
                        label: c.a.createElement(ke.a, null),
                        key: Ke,
                        accessibilityLabel: Ve,
                        isActive: function () {
                          var e
                          return (null === (e = n.state) || void 0 === e ? void 0 : e.tab) === Ke
                        },
                        onClick: function () {
                          return e._handleClickTab('sensitive_media_tab')
                        },
                      }),
                    o
                  )
                },
              },
            ]),
            a
          )
        })(c.a.Component)
      S()(He, 'defaultProps', { altTextTabEnabled: !0, cropTabEnabled: !0 })
      var Ne = He,
        qe = a('sjK1'),
        Qe = a('RqPI'),
        Xe = a('AspN'),
        Je = a('0KEI'),
        Ze = a('FDFL'),
        Ye = function (e) {
          var t = Object(Qe.o)(e)
          return t && Object(Ze.b)(e, t)
        },
        $e = Object(q.a)()
          .propsFromState(function () {
            return { language: Qe.o, languageName: Ye }
          })
          .propsFromActions(function () {
            return {
              addMedia: Xe.b,
              createLocalApiErrorHandler: Object(Je.createLocalApiErrorHandlerWithContextFactory)(
                'VIDEO_SUBTITLES_UPLOAD',
              ),
              fetchAvailableLanguagesIfNeeded: Ze.a,
              removeMediaUpload: Xe.i,
            }
          })
          .withAnalytics(),
        et = a('eyty'),
        tt = (a('7xRU'), a('pHub')),
        at = a('62wY'),
        nt = 'fileInput',
        rt = a('/Imo'),
        it = ['icon', 'style', 'withIcon'],
        ot = c.a.createElement(tt.a, null),
        st = x.a.icbec4ae,
        ct = function (e) {
          var t = e.icon,
            a = e.style,
            n = e.withIcon,
            i = o()(e, it),
            s = at.a.join(',')
          return c.a.createElement(
            D.a,
            null,
            c.a.createElement(
              rt.a,
              r()({}, i, { accept: s, icon: n ? t : void 0, style: [lt.button, a], testID: nt, type: 'primaryFilled' }),
              st,
            ),
          )
        }
      ct.defaultProps = { icon: ot, size: 'medium', withIcon: !0 }
      var lt = R.a.create(function (e) {
          return { button: { alignSelf: 'start' } }
        }),
        dt = ct,
        ut = x.a.bf4e9d79,
        mt = x.a.j435467e,
        pt = x.a.a6b267f9,
        ht = (function (e) {
          E()(a, e)
          var t = C()(a)
          function a() {
            var e
            v()(this, a)
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              S()(y()(e), '_renderSubtitlesPickerButton', function () {
                return c.a.createElement(dt, { onChange: e._handleAddMediaFiles, type: 'brandText' })
              }),
              S()(y()(e), '_renderSubtitlesRemovalButton', function () {
                return c.a.createElement(_e.a, { onPress: e._handleRemoveSubtitles, type: 'destructiveOutlined' }, pt)
              }),
              S()(y()(e), '_handleRemoveSubtitles', function () {
                ;(0, e.props.onRemove)()
              }),
              S()(y()(e), '_handleAddMediaFiles', function (t) {
                var a = e.props,
                  n = a.addMedia,
                  r = a.analytics,
                  i = a.language,
                  o = a.languageName,
                  s = a.onChange
                r.scribe({ element: 'subtitles_upload', action: 'click' }),
                  n(t, { location: et.d.Tweet }).then(function (e) {
                    s(e[0], i, o)
                  })
              }),
              e
            )
          }
          return (
            g()(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.createLocalApiErrorHandler
                  ;(0, e.fetchAvailableLanguagesIfNeeded)().catch(t())
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.subtitles
                  return c.a.createElement(
                    D.a,
                    { style: vt.root },
                    c.a.createElement(
                      D.a,
                      { style: vt.attachmentContainer },
                      c.a.createElement(V.b, { size: 'title3', style: vt.header, weight: 'heavy' }, ut),
                      c.a.createElement(V.b, { size: 'body', style: vt.body }, mt),
                      c.a.createElement(
                        D.a,
                        { style: vt.buttonWrapper },
                        e ? this._renderSubtitlesRemovalButton() : this._renderSubtitlesPickerButton(),
                      ),
                    ),
                  )
                },
              },
            ]),
            a
          )
        })(c.a.Component),
        vt = R.a.create(function (e) {
          return {
            root: { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', flex: 1 },
            attachmentContainer: { flex: 1, margin: e.spaces.space16, maxHeight: '100%' },
            body: { marginBottom: e.spaces.space28 },
            buttonWrapper: { flexDirection: 'row', alignItems: 'center' },
            header: { marginTop: e.spaces.space16, marginBottom: e.spaces.space8 },
          }
        }),
        ft = $e(ht),
        gt = a('R5K7'),
        bt = a('nV1z'),
        yt = a('8A5z'),
        _t = { section: 'subtitles' },
        Et = { section: 'trimmer' },
        Tt = { section: 'sensitive_media' },
        Ct = x.a.c91f83ae,
        Mt = x.a.icbec4ae,
        St = x.a.e0342f98,
        wt = x.a.i2209530,
        It = x.a.b772cd65,
        xt = x.a.e0342f98,
        kt = x.a.e7048e73,
        At = x.a.dd4a83a5,
        Rt = 'subtitles',
        Pt = 'trimmer',
        Dt = 'sensitive_media',
        Lt = (function (e) {
          E()(a, e)
          var t = C()(a)
          function a(e) {
            var n
            v()(this, a),
              (n = t.call(this, e)),
              S()(y()(n), '_videoTrimmerRef', c.a.createRef()),
              S()(
                y()(n),
                '_getMemoizedCurrentTabMetadata',
                Object(Ee.a)(function (e, t, a) {
                  switch (e) {
                    case Pt:
                      if (t) return { namespace: Et, title: Ct, renderer: n._renderTrimmerTab }
                    case Dt:
                      if (a) return { namespace: Tt, title: At, renderer: n._renderSensitiveMediaTab }
                    default:
                      return { namespace: _t, title: Mt, renderer: n._renderSubtitlesTab }
                  }
                }),
              ),
              S()(y()(n), '_renderSegmentedControl', function () {
                var e,
                  t = n.props,
                  a = t.isVideoTrimmerEnabled,
                  r = t.location,
                  i = t.sensitiveMediaTabEnabled,
                  o = n._getSegmentedControlLinks(),
                  s = n._getMemoizedCurrentTabMetadata(null === (e = r.state) || void 0 === e ? void 0 : e.tab, a, i)
                return c.a.createElement(
                  c.a.Fragment,
                  null,
                  o.length > 1 ? c.a.createElement(ye.a, { accessibilityLabel: Ct, links: o }) : null,
                  c.a.createElement(D.a, { style: be.segmentedControlChildren }, s.renderer()),
                )
              }),
              S()(y()(n), '_renderTrimmerTab', function () {
                var e = n._getCurrentMediaItem(),
                  t = n.state.trimData
                if (null != e && e.mediaFile && e.mediaFile instanceof qe.c) {
                  var a = e.mediaFile,
                    r = {
                      duration: 1e3 * a.duration,
                      height: a.height,
                      variants: [{ src: a.url, type: a.type }],
                      width: a.width,
                    }
                  return c.a.createElement(
                    D.a,
                    { style: be.videoTrimmerWrapper },
                    c.a.createElement(gt.a, { defaultTrimData: t, ref: n._videoTrimmerRef, video: r }),
                  )
                }
              }),
              S()(y()(n), '_addTrimDataToState', function () {
                var e,
                  t = null === (e = n._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()
                null != t &&
                  t.endTime &&
                  null != t &&
                  t.startTime &&
                  n.setState({ trimData: { endTime: t.endTime, startTime: t.startTime } })
              }),
              S()(y()(n), '_saveTrimData', function () {
                var e,
                  t = n.props,
                  a = t.processMedia,
                  r = t.updateMediaUpload,
                  i = n._getCurrentMediaItem(),
                  o =
                    (null === (e = n._videoTrimmerRef.current) || void 0 === e ? void 0 : e.getTrimData()) ||
                    n.state.trimData
                o &&
                  i &&
                  (r(u()(u()({}, i), {}, { trimData: { endTime: o.endTime / 1e3, startTime: o.startTime / 1e3 } })),
                  a(i.id))
              }),
              S()(y()(n), '_renderSubtitlesTab', function () {
                var e = n.props,
                  t = e.history,
                  a = e.initialMediaId,
                  r = n._getCurrentMediaItem(),
                  i = (null == r ? void 0 : r.mediaMetadata) || { subtitles: void 0 },
                  o = null == i ? void 0 : i.subtitles
                return c.a.createElement(ft, {
                  history: t,
                  key: a,
                  mediaItem: r,
                  onChange: n._handleSubtitlesChange,
                  onRemove: n._handleSubtitlesRemove,
                  subtitles: o,
                })
              }),
              S()(y()(n), '_renderSensitiveMediaTab', function () {
                var e = n.state.sensitiveMediaWarning,
                  t = n._getCurrentMediaItem()
                return c.a.createElement(fe, {
                  currentWarnings: e,
                  mediaItem: t,
                  onWarningChange: n._handleSensitiveWarningChange,
                })
              }),
              S()(y()(n), '_renderAppBarRightControl', function () {
                var e = n.props.isVideoTrimmerEnabled
                return c.a.createElement(
                  D.a,
                  { style: be.rightControl },
                  c.a.createElement(
                    _e.a,
                    { onPress: n._handleEndEditingClick, size: 'small', style: be.saveButton, type: 'primaryFilled' },
                    e ? wt : It,
                  ),
                )
              }),
              S()(y()(n), '_getCurrentMediaItem', function () {
                var e = n.props,
                  t = e.initialMediaId
                return e.media.find(function (e) {
                  return e.id === t
                })
              }),
              S()(y()(n), '_handleEndEditingClick', function () {
                var e = n.props,
                  t = e.history,
                  a = e.isVideoTrimmerEnabled,
                  r = e.sensitiveMediaTabEnabled
                a && n._saveTrimData(), r && n._saveSensitiveMediaWarning(), t.goBack()
              }),
              S()(y()(n), '_saveSubtitles', function (e) {
                var t = n.props,
                  a = t.media,
                  r = t.setMediaMetadata,
                  i = n._getCurrentMediaItem(),
                  o = (null == i ? void 0 : i.mediaMetadata) || { subtitles: void 0 }
                a.forEach(function (t) {
                  r(t.id, u()(u()({}, o), {}, { subtitles: e }))
                })
              }),
              S()(y()(n), '_handleSubtitlesChange', function (e, t, a) {
                n.props.analytics.scribe({ element: 'subtitles_upload', action: 'add' }),
                  n._saveSubtitles({ lang: t, upload: e, displayName: a || xt })
              }),
              S()(y()(n), '_handleSubtitlesRemove', function () {
                n.props.analytics.scribe({ element: 'subtitles_upload', action: 'remove' }), n._saveSubtitles(void 0)
              }),
              S()(y()(n), '_saveSensitiveMediaWarning', function () {
                var e = n.props.setMediaMetadata,
                  t = n.state.sensitiveMediaWarning,
                  a = n._getCurrentMediaItem()
                a && e(a.id, u()(u()({}, a.mediaMetadata), {}, { sensitiveMediaWarning: t }))
              }),
              S()(y()(n), '_handleSensitiveWarningChange', function (e, t) {
                n.setState(function (a) {
                  var n = a.sensitiveMediaWarning
                  return t ? n.add(e) : n.delete(e), { sensitiveMediaWarning: n }
                })
              }),
              S()(y()(n), '_handleClickSensitiveMediaTab', function () {
                var e = n.props.analytics
                n._addTrimDataToState(), e.scribePageImpression()
              })
            var r = n._getCurrentMediaItem()
            if (null != r && r.mediaFile && r.mediaFile instanceof qe.c) {
              var i = r.mediaFile,
                o = r.mediaMetadata,
                s = r.trimData,
                l = {
                  endTime: null != s && s.endTime ? 1e3 * s.endTime : 1e3 * i.duration,
                  startTime: null != s && s.startTime ? 1e3 * s.startTime : 0,
                }
              n.state = {
                trimData: l,
                sensitiveMediaWarning: (null == o ? void 0 : o.sensitiveMediaWarning) || new Set(),
              }
            } else n.props.history.replace('/')
            return n
          }
          return (
            g()(a, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    a = t.history,
                    n = t.isVideoTrimmerEnabled,
                    r = t.location,
                    i = t.sensitiveMediaTabEnabled,
                    o = this._getMemoizedCurrentTabMetadata(
                      null === (e = r.state) || void 0 === e ? void 0 : e.tab,
                      n,
                      i,
                    )
                  return c.a.createElement(
                    oe.c,
                    { namespace: o.namespace },
                    c.a.createElement(
                      re.b,
                      {
                        backButtonType: 'back',
                        containerStyle: be.root,
                        documentTitle: o.title,
                        history: a,
                        rightControl: this._renderAppBarRightControl(),
                        title: o.title,
                      },
                      this._renderSegmentedControl(),
                    ),
                  )
                },
              },
              {
                key: '_getSegmentedControlLinks',
                value: function () {
                  var e,
                    t,
                    a = this.props,
                    n = a.isVideoTrimmerEnabled,
                    r = a.location,
                    i = a.sensitiveMediaTabEnabled,
                    o = this._getCurrentMediaItem(),
                    s = []
                  return (
                    n &&
                      (null == o || null === (e = o.originalMediaFile) || void 0 === e ? void 0 : e.isVideo) &&
                      s.push({
                        to: u()(u()({}, r), {}, { state: u()(u()({}, r.state), {}, { tab: Pt }) }),
                        label: c.a.createElement(bt.a, null),
                        key: Pt,
                        accessibilityLabel: kt,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Pt
                        },
                      }),
                    (null == o || null === (t = o.originalMediaFile) || void 0 === t ? void 0 : t.isVideo) &&
                      s.push({
                        to: u()(u()({}, r), {}, { state: u()(u()({}, r.state), {}, { tab: Rt }) }),
                        label: c.a.createElement(yt.a, null),
                        key: Rt,
                        accessibilityLabel: St,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Rt
                        },
                        onClick: this._addTrimDataToState,
                      }),
                    i &&
                      s.push({
                        to: u()(u()({}, r), {}, { state: u()(u()({}, r.state), {}, { tab: Dt }) }),
                        label: c.a.createElement(ke.a, null),
                        key: Dt,
                        accessibilityLabel: At,
                        isActive: function () {
                          var e
                          return (null === (e = r.state) || void 0 === e ? void 0 : e.tab) === Dt
                        },
                        onClick: this._handleClickSensitiveMediaTab,
                      }),
                    s
                  )
                },
              },
            ]),
            a
          )
        })(c.a.Component),
        Ot = ['altTextTabEnabled', 'cropTabEnabled']
      t.a = function (e) {
        var t,
          a,
          n = e.altTextTabEnabled,
          i = e.cropTabEnabled,
          s = o()(e, Ot),
          d = s.history,
          u = s.initialMediaId,
          m = s.media,
          p = c.a.useContext(l.a).featureSwitches,
          h =
            null === (t = s.media[0]) || void 0 === t || null === (a = t.mediaFile) || void 0 === a ? void 0 : a.isVideo
        if (m.length <= 0 || !u) return d.replace('/'), null
        if (h) {
          var v = p.isTrue('responsive_web_video_trimmer_enabled')
          return c.a.createElement(Lt, r()({}, s, { isVideoTrimmerEnabled: v }))
        }
        return c.a.createElement(Ne, r()({}, s, { altTextTabEnabled: n, cropTabEnabled: i }))
      }
    },
    nV1z: function (e, t, a) {
      'use strict'
      var n = a('yiKp'),
        r = a.n(n),
        i = a('ERkP'),
        o = a.n(i),
        s = a('Lsrn'),
        c = a('k/Ka'),
        l = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(c.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [s.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            o.a.createElement(
              'g',
              null,
              o.a.createElement('path', {
                d: 'M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM5.25 20.033h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zM17 20.5H7v-7.75h10v7.75zm0-9.25H7V3.5h10v7.75zm3.25 8.783h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5zm0-4.55h-1.5v-2.5h1.5v2.5z',
              }),
            ),
          )
        }
      ;(l.metadata = { width: 24, height: 24 }), (t.a = l)
    },
  },
])
//# sourceMappingURL=WIPED
