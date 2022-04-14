;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '07FG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('cnVF'),
        a = function (e) {
          return e === r.B
        }
    },
    '4bHO': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      n('ho0z')
      var r = function (e, t) {
        switch (e.type) {
          case 'user':
            return '@'.concat('users' === t ? e.data.screen_name : e.data.name, ' ')
          case 'hashtag':
          case 'topic':
          case 'event':
            return ''.concat(e.data.topic, ' ')
          case 'dm_conversation':
            return ''.concat(e.data.name, ' ')
          case 'no_result':
            return ''.concat(e.data.text, ' ')
          default:
            return ''
        }
      }
    },
    '7myi': function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        d = n.n(u),
        l = n('2VqO'),
        p = n.n(l),
        f = n('KEM+'),
        m = n.n(f),
        v = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        h = n.n(v),
        g = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        w = n('GZwR'),
        C = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_genericWrapperRef', h.a.createRef()),
              m()(s()(e), 'state', { queryContext: void 0, canShowTypeahead: !1 }),
              m()(s()(e), 'render', function () {
                var t = e.props,
                  n = t.children,
                  r = t.contextText,
                  a = t.isInline,
                  i = t.isInlineReply,
                  o = t.onTypeaheadStateChange,
                  c = t.source,
                  s = e.state,
                  u = s.canShowTypeahead,
                  d = s.queryContext,
                  l = u && d ? { word: d.word, resultType: d.resultType } : void 0
                return h.a.createElement(
                  y.a,
                  {
                    contextText: r,
                    isInline: a,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: l,
                    ref: e._genericWrapperRef,
                    source: c || w.d.Compose,
                  },
                  n(e._handleInputChange),
                )
              }),
              m()(s()(e), '_handleSelectItem', function (t) {
                var n = e.props.onTextUpdated,
                  r = e.state.queryContext
                if (r) {
                  var a = Object(_.a)(t, r.resultType),
                    i = e._replaceToken(a, r),
                    o = i.newCursor,
                    c = i.newTweetText
                  n({ target: { value: c } }), e._updateDOMTextArea(o, c)
                }
                e._setQueryContext(void 0)
              }),
              m()(s()(e), '_updateDOMTextArea', function (t, n) {
                e._textAreaRef &&
                  ((e._textAreaRef.value = n),
                  (e._textAreaRef.selectionStart = t),
                  (e._textAreaRef.selectionEnd = t),
                  e._textAreaRef.focus())
              }),
              m()(s()(e), '_handleInputChange', function (t) {
                if (Object(b.a)(t))
                  throw new Error('PlainTextTypeaheadComposeWrapper cannot handle rich text input changes')
                var n = t && (t.currentTarget || t.target),
                  r = e.state.queryContext
                e._textAreaRef = n
                var a = r && r.word,
                  i = n.value,
                  o = g.c(n.selectionStart, i),
                  c = o.end,
                  s = o.start,
                  u = o.word,
                  d = g.e(u || '', 'compose')
                if ((null == d ? void 0 : d.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (d) {
                    var l = d.q,
                      p = d.result_type
                    e._setQueryContext({ word: l, resultType: p, fullText: n.value, startIndex: s, endIndex: c })
                  } else e._setQueryContext(void 0)
              }),
              m()(s()(e), '_setQueryContext', function (t) {
                return e.setState({ queryContext: t, canShowTypeahead: !!t })
              }),
              m()(s()(e), '_handleDismiss', function () {
                return e.setState({ canShowTypeahead: !1 })
              }),
              e
            )
          }
          return (
            o()(n, [
              {
                key: '_replaceToken',
                value: function (e, t) {
                  var n = t.endIndex,
                    r = t.fullText,
                    a = t.startIndex,
                    i = r.slice(0, a)
                  return { newTweetText: i + e + r.slice(n), newCursor: i.length + e.length }
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      t.a = C
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return T
      }),
        n.d(t, 'l', function () {
          return P
        }),
        n.d(t, 'f', function () {
          return U
        }),
        n.d(t, 'd', function () {
          return j
        }),
        n.d(t, 'g', function () {
          return A
        }),
        n.d(t, 'e', function () {
          return F
        }),
        n.d(t, 'i', function () {
          return V
        }),
        n.d(t, 'j', function () {
          return z
        }),
        n.d(t, 'k', function () {
          return K
        }),
        n.d(t, 'h', function () {
          return q
        }),
        n.d(t, 'a', function () {
          return G
        }),
        n.d(t, 'b', function () {
          return N
        }),
        n.d(t, 'c', function () {
          return J
        })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('ddV6'),
        o = n.n(i),
        c = n('m3Bd'),
        s = n.n(c),
        u = n('KEM+'),
        d = n.n(u),
        l = n('yiKp'),
        p = n.n(l),
        f =
          (n('TJCb'),
          n('7x/C'),
          n('DZ+c'),
          n('7xRU'),
          n('lTEL'),
          n('JtPf'),
          n('87if'),
          n('kYxP'),
          n('2G9S'),
          n('1IsZ'),
          n('AspN')),
        m = n('xPna'),
        v = n('oEOe'),
        h = n('xCUF'),
        g = n('ude7'),
        y = n('07FG'),
        _ = n('Ssj5'),
        b = n('fEA7'),
        w = n.n(b),
        C = n('uKEd'),
        E = n('lnti'),
        x = n('/NU0'),
        I = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        S = 'dmComposer',
        O = {}
      var k = function (e) {
          var t = e.conversation_id,
            n = e.id,
            r = e.localMediaId,
            a = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            c = e.attachment,
            s = void 0 === c ? {} : c,
            u = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: a,
            error: u,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: r, sender_id: i, text: o, time: d },
            type: 'message',
            time: d,
          }
        },
        T = function (e) {
          return function (t, n, r) {
            var i = r.api,
              c = e || {},
              u = c.senderId,
              d = c.cardUrl,
              l = c.conversationId,
              _ = c.localMediaId,
              b = c.recipients,
              S = void 0 === b ? [] : b,
              O = c.requestId,
              T = void 0 === O ? w.a.v1() : O,
              M = c.tweetAttachment,
              P = c.quickReply,
              D = s()(c, I)
            t(Z(l))
            var U = n(),
              R = _ || B(n(), l),
              A = f.k(U, R),
              L = o()(A, 1)[0] || {},
              F = L.mediaFile,
              V = L.mediaMetadata,
              z = S.length > 0 && S.join(','),
              K = {}
            F && F.isGif
              ? (K.extraInitParams = '&media_category=dm_gif')
              : F && F.isVideo && (K.extraInitParams = '&media_category=dm_video')
            var H = f.p(R, K),
              G = [t(H)],
              W = (q(U, l) || {}).found_media_origin
            return (
              F && F.isGif && G.push(Object(g.a)(F)),
              Promise.all(G).then(
                function (n) {
                  var r = o()(n, 2),
                    c = o()(r[0], 1)[0],
                    s = r[1],
                    g = (null == V ? void 0 : V.altText) || (null == V ? void 0 : V.defaultAltText),
                    _ = !!g
                  return (
                    c && (W || _)
                      ? t(f.m(p()({ media_id: c.uploadId, found_media_origin: W }, !!_ && { alt_text: { text: g } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (M || {}).id_str,
                        r = {}
                      if (c) {
                        var o = c.mediaFile,
                          f = void 0 === o ? {} : o,
                          g = {
                            original_info: { width: f.width, height: f.height },
                            sizes: [{ h: f.height, w: f.width, resize: 'fit' }],
                          }
                        f.isImage
                          ? (r.photo = p()(p()({}, g), {}, { media_url_https: f.url }))
                          : f.isGif
                          ? (r.animated_gif = p()(p()({}, g), {}, { media_url_https: s, type: 'animated_gif' }))
                          : f.isVideo && (r.video = p()(p()({}, g), {}, { media_url_https: f.url, type: 'video' }))
                      } else M && (r.tweet = { status: n })
                      var _ = (c || {}).uploadId,
                        b = k({
                          attachment: r,
                          conversation_id: l,
                          id: T,
                          recipient_ids: z,
                          sender_id: u,
                          text: e.text,
                        }),
                        w = p()(
                          p()(
                            p()(p()({}, D), Object(y.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: l },
                            !n && { media_id: _ },
                          ),
                          {},
                          { recipient_ids: z, request_id: T, tweet_id: n },
                        )
                      P &&
                        ((w['quick_reply_response[options][id]'] = P.id),
                        (w['quick_reply_response[options][selected_id]'] = P.selected_id))
                      var I = Object(E.a)([
                        ee(l),
                        { type: h.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        l && Object(C.b)(l, T, b),
                      ])
                      return (
                        t(I),
                        i.DirectMessages.sendMessage(w).then(
                          function (n) {
                            var r = n.entities,
                              i = r.cards,
                              o = r.entries,
                              c = r.tweets,
                              s = r.users,
                              u = n.result.conversations
                            Object(x.a)(R) && t(J(l, R))
                            var d = Object(E.a)(
                              [{ type: h.c.SUCCESS }].concat(
                                a()(Object(m.a)({ conversations: u, entries: o, users: s, tweets: c, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, l && Object(C.j)(l, T, e), j(l)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var a = k({
                                attachment: r,
                                conversation_id: l,
                                error: !0,
                                id: T,
                                localMediaId: R,
                                recipient_ids: z,
                                sender_id: u,
                                text: e.text,
                              }),
                              i = Object(E.a)([
                                { type: h.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                l && Object(C.b)(l, T, a),
                              ])
                            return t(i), Object(v.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(l)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(E.a)([Object(x.a)(R) && J(l, R), ne(l)])), Promise.reject(e)
                },
              )
            )
          }
        },
        M = function (e, t) {
          return e.dmComposer[t]
        },
        P = function (e, t) {
          var n = M(e, t)
          return n ? n.text : null
        },
        D = 'rweb/dmComposer/SAVE_TEXT',
        U = function (e, t) {
          return { type: D, conversationId: e, text: t }
        },
        R = 'rweb/dmComposer/REMOVE_TEXT',
        j = function (e) {
          return { type: R, conversationId: e }
        },
        A = function (e, t) {
          var n = M(e, t)
          return n ? n.cardUrl : null
        },
        L = 'rweb/dmComposer/SAVE_CARD_URL',
        F = function (e, t) {
          return { type: L, conversationId: e, cardUrl: t }
        },
        B = function (e, t) {
          var n = M(e, t)
          return n ? n.mediaId : null
        },
        V = function (e, t) {
          var n = f.k(e, B(e, t))
          return n.length > 0 ? n[0] : null
        },
        z = function (e, t) {
          var n = M(e, t)
          return !!n && n.isUploading
        },
        K = function (e, t) {
          return f.l(e, B(e, t))
        },
        q = function (e, t) {
          var n = M(e, t)
          return n ? n.gifMetadata : null
        },
        H = 'rweb/dmComposer/ADD_MEDIA',
        G = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: H, conversationId: e }
        },
        W = 'rweb/dmComposer/CANCEL_UPLOAD',
        N = function (e) {
          return { type: W, conversationId: e }
        },
        X = 'rweb/dmComposer/REMOVE_MEDIA',
        Y = function (e) {
          return { type: X, conversationId: e }
        },
        J = function (e, t) {
          return function (n) {
            n(f.i(t)), n([N(e), Y(e)])
          }
        },
        Q = 'rweb/dmComposer/UPLOAD_REQUEST',
        Z = function (e) {
          return { type: Q, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ne = function (e) {
          return { type: te, conversationId: e }
        }
      _.a.register(
        d()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case H:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), t.payload)))
            case Q:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), {}, { isUploading: !0 })))
            case W:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case X:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case D:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, c), {}, { text: t.text })))
            case L:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case R:
              var u = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, u), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    KqB4: function (e, t, n) {
      'use strict'
      var r = n('IGGJ')
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          for (var n = [], r = (0, a.default)(e, t), i = 0; i < r.length; i++) n.push(r[i].url)
          return n
        })
      var a = r(n('vwfs'))
      e.exports = t.default
    },
    MLl7: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      }),
        n.d(t, 'b', function () {
          return a
        }),
        n.d(t, 'c', function () {
          return i
        })
      n('yH/f'), n('vrRf'), n('1IsZ')
      var r = Object.freeze({ Composition: 'composition', DMComposition: 'dm_composition' }),
        a = function (e) {
          return Object.values(r).indexOf(e) >= 0
        },
        i = function (e, t) {
          return 'boolean' == typeof e ? e : t
        }
    },
    UgB4: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
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
                d: 'M21.13 11.358L3.614 2.108c-.29-.152-.64-.102-.873.126-.23.226-.293.577-.15.868l4.362 8.92-4.362 8.92c-.143.292-.08.643.15.868.145.14.333.212.523.212.12 0 .24-.028.35-.087l17.517-9.25c.245-.13.4-.386.4-.664s-.155-.532-.4-.662zM4.948 4.51l12.804 6.762H8.255l-3.307-6.76zm3.307 8.26h9.498L4.948 19.535l3.307-6.763z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    VPdC: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return P
      })
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('VrFO'),
        s = n.n(c),
        u = n('Y9Ll'),
        d = n.n(u),
        l = n('5Yy7'),
        p = n.n(l),
        f = n('2VqO'),
        m = n.n(f),
        v = n('KEM+'),
        h = n.n(v),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        _ = n('3XMw'),
        b = n.n(_),
        w = n('cjZk'),
        C = 'fileInput',
        E = n('sjK1'),
        x = n('/Imo'),
        I = n('rHpw'),
        S = n('9HgX'),
        O = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        k = b.a.b9960f31,
        T = { viewType: 'media_picker' },
        M = y.a.createElement(w.a, null),
        P = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            r = void 0 === n || n,
            a = e.acceptVideo
          return (r ? S.b : []).concat(t ? [S.a] : []).concat(a ? E.a : [])
        },
        D = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.acceptGifs,
                    n = e.acceptImages,
                    r = e.acceptVideo,
                    i = e.customMimeTypes,
                    c = e.icon,
                    s = e.style,
                    u = e.withIcon,
                    d = o()(e, O),
                    l = P({ acceptGifs: t, acceptImages: n, acceptVideo: r }).concat(i).join(',')
                  return y.a.createElement(
                    x.a,
                    a()({}, d, {
                      accept: l,
                      behavioralEventContext: T,
                      icon: u ? c : void 0,
                      style: [U.root, s],
                      testID: C,
                    }),
                  )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      h()(D, 'defaultProps', {
        acceptGifs: !0,
        acceptImages: !0,
        acceptVideo: !0,
        customMimeTypes: [],
        accessibilityLabel: k,
        icon: M,
        size: 'medium',
        withIcon: !0,
      })
      var U = I.a.create(function (e) {
        return { root: { margin: '-'.concat(e.spaces.space12) } }
      })
      t.a = D
    },
    b5s6: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        u = n('v6aA'),
        d = n('XOJV'),
        l = n('eSoz'),
        p = n('rxPX'),
        f = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        v = function (e, t) {
          var n = t.tweetId,
            r = n && d.a.select(e, n)
          return r ? Object(l.g)(e, r) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: v, hydratedTweet: d.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: l.c.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        y = n('uCxL'),
        _ = n('x5Pi'),
        b = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        w = h(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            c = (e.tweetId, o()(e, b)),
            d = s.a.useContext(u.a),
            l = d.featureSwitches,
            p = d.loggedInUserId,
            f = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              f && Object(g.a)(t) && r(f).catch(n())
            },
            [t, f, n, r],
          )
          var m = l.isTrue('responsive_web_alt_text_badge_enabled'),
            v = i && Object(_.f)(i, p, t),
            h = v && Object(_.e)(v),
            w = l.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            a()({}, c, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: m,
              socialContextProps: h,
              tweet: i,
              withReactions: w,
            }),
          )
        })
      t.a = w
    },
    cIoY: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('1YZw'),
        o = n('rxPX'),
        c = Object(o.a)().propsFromActions(function () {
          return { addToast: i.b }
        }),
        s = n('VrFO'),
        u = n.n(s),
        d = n('Y9Ll'),
        l = n.n(d),
        p = n('1Pcy'),
        f = n.n(p),
        m = n('5Yy7'),
        v = n.n(m),
        h = n('2VqO'),
        g = n.n(h),
        y = n('KEM+'),
        _ = n.n(y),
        b = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        w = n('3XMw'),
        C = n.n(w),
        E = n('sgih'),
        x = n('t62R'),
        I = n('/yvb'),
        S = n('rHpw'),
        O = C.a.cfd2f35d,
        k = (function (e) {
          v()(n, e)
          var t = g()(n)
          function n() {
            var e
            u()(this, n)
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) a[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(a))),
              _()(f()(e), '_handleOnFocus', function (e) {
                e.currentTarget.select()
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.cancelButtonLabel,
                    n = e.description,
                    r = e.headerText,
                    i = e.link,
                    o = e.onCancel,
                    c = Object(b.a)('input', {
                      autoFocus: !0,
                      onFocus: this._handleOnFocus,
                      readOnly: !0,
                      style: T.linkInput,
                      value: i,
                    })
                  return a.a.createElement(
                    E.a,
                    { onMaskClick: o, style: T.container, type: 'center', withMask: !0 },
                    r && a.a.createElement(x.b, { align: 'center', style: T.headerText, weight: 'bold' }, r),
                    n && a.a.createElement(x.b, { align: 'center', color: 'gray700', style: T.labelText }, n),
                    c,
                    a.a.createElement(I.a, { onPress: o, size: 'xLarge', style: T.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.Component)
      _()(k, 'defaultProps', { cancelButtonLabel: O })
      var T = S.a.create(function (e) {
          return {
            container: {
              alignItems: 'center',
              paddingVertical: e.spaces.space32,
              paddingHorizontal: e.spaces.space12,
              position: 'relative',
            },
            headerText: { marginBottom: e.spaces.space16 },
            labelText: { marginBottom: e.spaces.space16, width: '100%' },
            linkInput: {
              backgroundColor: e.colors.gray0,
              borderColor: 'transparent',
              color: e.colors.gray700,
              fontSize: e.fontSizes.body,
              marginBottom: e.spaces.space12,
              paddingVertical: e.spaces.space12,
              paddingHorizontal: e.spaces.space20,
            },
            cancelButton: { width: '100%' },
          }
        }),
        M = k,
        P = n('I/9y'),
        D = n('mjJ+'),
        U = n('cm6r'),
        R = n('CaKu'),
        j = n('U+bB'),
        A = C.a.e05c00b4,
        L = C.a.eabf2209,
        F = C.a.a613e72f,
        B = C.a.f88553c8,
        V = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        z = (function (e) {
          v()(n, e)
          var t = g()(n)
          function n(e) {
            var r
            return (
              u()(this, n),
              (r = t.call(this, e)),
              _()(f()(r), '_renderMenu', function (e) {
                return a.a.createElement(D.a, {
                  items: [{ text: F, Icon: P.a, onClick: r._handleCopyGifLinkButtonClick }],
                  onCloseRequested: e,
                })
              }),
              _()(f()(r), '_handleCopyGifLinkButtonClick', function (e) {
                var t = r.props,
                  n = t.addToast,
                  a = t.gifUrl
                R.a.isAvailable() ? (R.a.setString(a), n({ text: B })) : r.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              _()(f()(r), '_handleCopyLinkSheetCancel', function () {
                r.setState({ showCopyLinkSheet: !1 })
              }),
              (r.state = { showCopyLinkSheet: !1 }),
              r
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showCopyLinkSheet,
                    t = this.props,
                    n = t.gifUrl,
                    r = t.provider,
                    i = r.display_name,
                    o = r.name,
                    c = V[o]
                  return c
                    ? a.a.createElement(
                        a.a.Fragment,
                        null,
                        e
                          ? a.a.createElement(M, {
                              description: L({ providerName: i }),
                              headerText: A,
                              link: n,
                              onCancel: this._handleCopyLinkSheetCancel,
                            })
                          : null,
                        a.a.createElement(
                          x.b,
                          { align: 'center', color: 'gray700', style: K.root },
                          a.a.createElement(
                            C.a.I18NFormatMessage,
                            { $i18n: 'e2e6ea0d' },
                            this._renderAttribution(i, c),
                          ),
                        ),
                      )
                    : null
                },
              },
              {
                key: '_renderAttribution',
                value: function (e, t) {
                  return a.a.createElement(
                    U.a,
                    { interactiveStyles: null, renderMenu: this._renderMenu },
                    a.a.createElement(
                      x.b,
                      { weight: 'bold', withInteractiveStyling: !0 },
                      a.a.createElement(j.a, { source: { uri: t }, style: K.image }),
                      a.a.createElement(x.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.PureComponent),
        K = S.a.create(function (e) {
          return {
            button: { marginLeft: e.spaces.space12 },
            image: {
              display: 'inline-block',
              height: e.spaces.space16,
              marginHorizontal: e.spaces.space4,
              width: e.spaces.space16,
            },
            root: { marginHorizontal: e.spaces.space12 },
          }
        }),
        q = z,
        H = c(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            r = e.provider
          return a.a.createElement(q, { addToast: t, gifUrl: n, provider: r })
        })
      t.a = H
    },
    dzqK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      n('ERkP')
      var r = n('zpdM')
      function a(e) {
        return e instanceof r.EditorState
      }
    },
    gpVt: function (e, t, n) {
      'use strict'
      n.d(t, 'b', function () {
        return q
      })
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        d = n.n(u),
        l = n('2VqO'),
        p = n.n(l),
        f = n('KEM+'),
        m = n.n(f),
        v = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        h = n.n(v),
        g = n('K1iM'),
        y = n.n(g),
        _ = n('RhWx'),
        b = n.n(_),
        w = (n('wFPu'), n('CDB5')),
        C = n('xVN5'),
        E = n('vjRr'),
        x = n('rxPX'),
        I = n('0KEI'),
        S = function (e, t) {
          var n,
            r,
            a = t.urls,
            i = b()(a),
            o = y()(i.reverse())
          try {
            for (o.s(); !(r = o.n()).done; ) {
              var c = r.value
              if ((n = E.a.select(e, c))) break
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return n
        },
        O = Object(x.a)()
          .propsFromState(function () {
            return { card: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: E.a.fetchCardPreviewIfNeeded,
              updateDMComposer: w.e,
              updateTweetComposer: C.w,
            }
          }),
        k = n('KqB4'),
        T = n.n(k),
        M = n('aX4+'),
        P = n('3XMw'),
        D = n.n(P),
        U = n('hOZg'),
        R = n('cnVF'),
        j = n('MWbm'),
        A = n('v6aA'),
        L = n('/yvb'),
        F = n('rHpw'),
        B = n('VY6S'),
        V = n('mN6z'),
        z = D.a.f6fec9f6,
        K = /^https?:\/\//i,
        q = function (e) {
          var t = T()(e)
          if (t.length)
            return t.map(function (e) {
              return (!K.test(e) && 'http://'.concat(e)) || e
            })
        },
        H = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n(e, r) {
            var i
            return (
              a()(this, n),
              (i = t.call(this, e, r)),
              m()(s()(i), '_fetchCardPreviewIfNeeded', function () {
                var e = i.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchCardPreviewIfNeeded
                e.urls.forEach(function (e) {
                  n(e).catch(t())
                })
              }),
              m()(s()(i), '_handleCardPreviewDismissal', function (e) {
                return i._updateSingleComposer({ cardUrl: R.B })
              }),
              m()(s()(i), '_updateSingleComposer', function (e) {
                var t = i.props,
                  n = t.conversationId,
                  r = t.index,
                  a = t.updateDMComposer,
                  o = t.updateTweetComposer,
                  c = (e || {}).cardUrl
                i._isDMComposer ? n && a(n, c) : o({ updates: { cardUrl: c }, index: r })
              }),
              (i._debouncedFetchCardPreview = Object(B.a)(i._fetchCardPreviewIfNeeded, 1e3)),
              (i._isDMComposer = !!e.conversationId),
              i
            )
          }
          return (
            o()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  var t = this.props.urls
                  Object(V.a)(e.urls, t) || this._debouncedFetchCardPreview()
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._updateSingleComposer()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.card,
                    n = e.isCardPreviewTombstoned,
                    r = e.style,
                    a = this.context.loggedInUserId
                  return t && !n && a
                    ? h.a.createElement(
                        j.a,
                        { style: r },
                        h.a.createElement(M.a, {
                          card: { name: t.name, url: t.url, binding_values: t.binding_values },
                          cardContext: { tweetUserId: a },
                          isInteractive: !1,
                          preventVideoPlayback: !0,
                        }),
                        h.a.createElement(L.a, {
                          accessibilityLabel: z,
                          icon: h.a.createElement(U.a, null),
                          onPress: this._handleCardPreviewDismissal,
                          size: 'xSmall',
                          style: G.closeButton,
                          type: 'onMediaDominantColorFilled',
                        }),
                      )
                    : null
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      m()(H, 'contextType', A.a)
      var G = F.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        W = O(H)
      t.a = W
    },
    hiGS: function (e, t, n) {
      'use strict'
      var r = n('yiKp'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = n('Lsrn'),
        s = n('k/Ka'),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(s.a)(
            'svg',
            a()(
              a()({}, e),
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
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              o.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(u.metadata = { width: 24, height: 24 }), (t.a = u)
    },
    jtO7: function (e, t, n) {
      'use strict'
      var r = n('97Jx'),
        a = n.n(r),
        i = n('m3Bd'),
        o = n.n(i),
        c = n('ERkP'),
        s = n.n(c),
        u = n('t62R'),
        d = n('I4+6'),
        l = n('cm6r'),
        p = n('rHpw'),
        f = n('MWbm'),
        m = ['align', 'color', 'label'],
        v = p.a.create(function (e) {
          return {
            container: { backgroundColor: e.colors.cellBackground },
            root: {
              justifyContent: 'center',
              minHeight: e.spaces.space48,
              paddingHorizontal: e.componentDimensions.gutterHorizontal,
              paddingVertical: e.spaces.space16,
            },
          }
        })
      t.a = function (e) {
        var t = e.align,
          n = void 0 === t ? 'center' : t,
          r = e.color,
          i = e.label,
          c = o()(e, m),
          h = d.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          f.a,
          { style: v.container },
          s.a.createElement(
            l.a,
            a()({}, c, { interactiveStyles: h, style: v.root }),
            s.a.createElement(u.b, { align: n, color: r }, i),
          ),
        )
      }
    },
    kIAd: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      }),
        n.d(t, 'b', function () {
          return i
        })
      var r = n('0vv5'),
        a = 500,
        i = {
          scoper: [
            {
              type: 'dmUserSearch',
              regexp: /^[@＠]?(.*)|^$/,
              srcInputs: ['compose_message'],
              scope: { result_type: 'users', count: 20 },
            },
            {
              type: 'username',
              regexp: /^[@＠](\w{1,20})/,
              srcInputs: ['compose'],
              scope: { result_type: 'users', count: 20 },
            },
            { type: 'hashtag', regexp: n.n(r).a, srcInputs: ['compose'], scope: { result_type: 'topics', count: 20 } },
            { type: 'topic', regexp: /(.+)/, srcInputs: ['search_box'], scope: { result_type: 'all' } },
            {
              type: 'ttt',
              regexp: /(.+)/,
              srcInputs: ['welcome_flow'],
              scope: { count: 10, result_type: 'topics,ttt' },
            },
          ],
          WordBoundary: /[!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]|$/,
          WordEnd: /[^!'%&'()*+,\\\-./:;<=>?[\]^{|}~\s]+$/,
        }
    },
    krmn: function (e, t, n) {
      'use strict'
      var r = n('ddV6'),
        a = n.n(r),
        i = n('ERkP'),
        o = n.n(i),
        c = (n('lTEL'), n('7x/C'), n('JtPf'), n('87if'), n('kYxP'), n('zb92')),
        s = n('RuTB'),
        u = n('3XMw'),
        d = n.n(u),
        l = Object(c.a)({
          loader: function () {
            return d.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(16), n.e(208)]).then(n.bind(null, '5RdJ'))
            })
          },
          renderPlaceholder: function (e, t) {
            return o.a.createElement(s.a, { hasError: e, onRetry: t })
          },
        }),
        p = n.p + 'twemoji_sprite.6d90d9d5.png',
        f = n.p + 'twemoji_sprite_high_res.0b0faef5.png',
        m = n('rHpw'),
        v = n('U+bB'),
        h = n('kLqS'),
        g = n('MWbm'),
        y = m.a.create(function (e) {
          return {
            content: { backgroundColor: e.colors.cellBackground },
            dimensions: {
              height: '400px',
              borderRadius: e.borderRadii.xLarge,
              width: 10 * e.spacesPx.space32,
              overflow: 'hidden',
            },
            hidden: { display: 'none' },
          }
        }),
        _ = function (e) {
          var t = e.onSelect,
            n = e.partialRender,
            r = h.a.get() > 1 ? f : p
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              g.a,
              { style: [y.content, y.dimensions] },
              o.a.createElement(l, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: r }),
            ),
            o.a.createElement(v.a, { source: r, style: y.hidden }),
          )
        },
        b = n('pNJr'),
        w = n('2ZFc'),
        C = n('OiMc'),
        E = n('/yvb'),
        x = d.a.d4a4842d,
        I = o.a.createElement(b.a, null),
        S = d.a.fec16c1c,
        O = { viewType: 'emoji_picker' },
        k = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            r = e.onPress,
            i = e.size,
            c = e.style,
            s = e.textInputRef,
            u = o.a.useState(!0),
            d = a()(u, 2),
            p = d[0],
            f = d[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              l.preload(), w.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            C.a,
            {
              enableEnterKeyToggle: !0,
              onAnimateComplete: function () {
                return f(!1)
              },
              onDismiss: function () {
                return f(!0)
              },
              onHoverCardUnmount: function () {
                window.requestAnimationFrame(function () {
                  return s && s.focus()
                })
              },
              renderContent: function () {
                return o.a.createElement(_, { onSelect: n, partialRender: p })
              },
              withArrow: !0,
            },
            o.a.createElement(E.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: x,
              behavioralEventContext: O,
              disabled: t,
              hoverLabel: { label: S },
              icon: I,
              onPress: function (e) {
                return r && r(e)
              },
              size: i,
              style: c,
              type: 'brandText',
            }),
          )
        }
      k.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = k
    },
    oEoC: function (e, t, n) {
      'use strict'
      n.d(t, 'e', function () {
        return d
      }),
        n.d(t, 'c', function () {
          return l
        }),
        n.d(t, 'b', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return f
        }),
        n.d(t, 'a', function () {
          return m
        }),
        n.d(t, 'd', function () {
          return v
        }),
        n.d(t, 'f', function () {
          return g
        })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('yiKp'),
        o = n.n(i),
        c =
          (n('hBpG'),
          n('7x/C'),
          n('vrRf'),
          n('KqXw'),
          n('WNMA'),
          n('M+/F'),
          n('LJOr'),
          n('tVqn'),
          n('jwue'),
          n('+oxZ'),
          n('z84I'),
          n('LW0h'),
          n('2G9S'),
          n('oQhu')),
        s = n('kIAd'),
        u = n('rHpw')
      function d(e, t) {
        var n,
          r = s.b.scoper.find(function (r) {
            if (-1 !== r.srcInputs.indexOf(t)) return (n = e.match(r.regexp))
          }),
          a = ''
        return n && (a = n && (1 === n.length ? n[0] : n[1])), r ? o()(o()({}, r.scope), {}, { src: t, q: a }) : null
      }
      function l(e, t) {
        var n = t.slice(0, e),
          r = t.slice(e, t.length),
          a = n.search(s.b.WordEnd),
          i = a >= 0 ? n.slice(a) : '',
          o = r.search(s.b.WordBoundary),
          c = i + r.slice(0, o)
        return c.trim() ? { start: a, end: e + o, word: c } : { start: -1, end: -1, word: '' }
      }
      function p() {
        return 'typeaheadFocus-'.concat(Math.random())
      }
      function f(e) {
        var t = e.altKey,
          n = e.ctrlKey,
          r = e.metaKey
        return !(t || n || r)
      }
      function m(e, t) {
        var n = []
        e.forEach(function (e) {
          var r = t.find(function (t) {
            return t.id === e.id
          })
          r && r.data && r.data.result_context ? n.push(r) : n.push(e)
        })
        var r = n.map(function (e) {
            return e.id
          }),
          i = t.filter(function (e) {
            return r.indexOf(e.id) < 0
          })
        return [].concat(n, a()(i))
      }
      var v = Object(c.a)(function (e) {
          return {
            bottom: 0,
            paddingBottom: 'calc(2.5 * '.concat(u.a.theme.spaces.space64, ')'),
            position: 'fixed',
            top: ''.concat(e, 'px'),
            transform: [{ translate3d: '0,0,0' }],
          }
        }),
        h = 0,
        g = function () {
          return 'typeaheadDropdown-'.concat((h += 1))
        }
    },
    rFBM: function (e, t, n) {
      'use strict'
      var r = n('VrFO'),
        a = n.n(r),
        i = n('Y9Ll'),
        o = n.n(i),
        c = n('1Pcy'),
        s = n.n(c),
        u = n('5Yy7'),
        d = n.n(u),
        l = n('2VqO'),
        p = n.n(l),
        f = n('KEM+'),
        m = n.n(f),
        v = (n('2G9S'), n('hCOa'), n('87if'), n('ERkP')),
        h = n.n(v),
        g = n('rHpw'),
        y = n('k/Ka'),
        _ = n('MWbm'),
        b = function (e) {
          return Object(y.a)('div', e)
        },
        w = (function (e) {
          d()(n, e)
          var t = p()(n)
          function n() {
            var e
            a()(this, n)
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              m()(s()(e), '_dragEnterCount', 0),
              m()(s()(e), 'state', { active: !1 }),
              m()(s()(e), '_handleDragDrop', function (t) {
                var n = e.props.onFilesAdded
                t.preventDefault(), n(Array.from(t && t.dataTransfer.files)), e._updateDragCount(0)
              }),
              m()(s()(e), '_handleDragEnter', function (t) {
                var n = e.props.onDragEnter
                t.preventDefault(), n && n(), e._updateDragCount(e._dragEnterCount + 1)
              }),
              m()(s()(e), '_handleDragLeave', function (t) {
                t.preventDefault(), e._updateDragCount(e._dragEnterCount - 1)
              }),
              m()(s()(e), '_handleDragOver', function (e) {
                e.preventDefault()
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
                    t = e.allowDragDrop,
                    n = e.children,
                    r = e.style,
                    a = this.state.active,
                    i = t ? C.dragBorderValid : C.dragBorderInvalid
                  return h.a.createElement(
                    b,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [C.root, r, a && i],
                    },
                    h.a.createElement(_.a, { style: C.inner }, 'function' == typeof n ? n(a) : n),
                  )
                },
              },
              {
                key: '_updateDragCount',
                value: function (e) {
                  ;(this._dragEnterCount = e),
                    0 === this._dragEnterCount
                      ? this.setState({ active: !1 })
                      : this._dragEnterCount > 0 && this.setState({ active: !0 })
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      m()(w, 'defaultProps', { allowDragDrop: !0 })
      var C = g.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = w
    },
    w3n3: function (e, t, n) {
      'use strict'
      var r = n('ERkP'),
        a = n.n(r),
        i = n('/yvb'),
        o = n('3XMw'),
        c = n.n(o),
        s = n('3rWK'),
        u = n('Irs7'),
        d = c.a.a4993fa1,
        l = a.a.createElement(s.a, null),
        p = c.a.i0db46e6,
        f = { viewType: 'gif_search' }
      t.a = function (e) {
        var t = e.dmConversationId,
          n = e.enabled,
          r = void 0 === n || n,
          o = e.gifSearchKeySource,
          c = e.history,
          s = e.onPress,
          m = e.style,
          v = e.testID,
          h = Object(u.b)(),
          g = a.a.useCallback(
            function () {
              s && s(),
                h.scribe({ element: 'found_media_button', action: 'click' }),
                c.push({ pathname: '/i/foundmedia/search', state: { gifSearchKeySource: o, dmConversationId: t } })
            },
            [t, h, o, c, s],
          )
        return a.a.createElement(i.a, {
          accessibilityLabel: d,
          behavioralEventContext: f,
          disabled: !r,
          hoverLabel: { label: p },
          icon: l,
          onPress: g,
          size: 'medium',
          style: m,
          testID: v,
          type: 'brandText',
        })
      }
    },
    wpu3: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return m
      }),
        n.d(t, 'b', function () {
          return h
        }),
        n.d(t, 'c', function () {
          return g
        }),
        n.d(t, 'd', function () {
          return y
        })
      var r = n('RhWx'),
        a = n.n(r),
        i = n('KEM+'),
        o = n.n(i),
        c =
          (n('jwue'),
          n('7x/C'),
          n('+oxZ'),
          n('ho0z'),
          n('jQ3i'),
          n('x4t0'),
          n('LW0h'),
          n('2G9S'),
          n('kFen'),
          n('qd3W'),
          n('z84I'),
          n('5BYb'),
          n('DfhM'),
          n('KqXw'),
          n('Ysgh'),
          n('hBpG'),
          n('oEoC')),
        s = n('1auM'),
        u = n('kIAd'),
        d = n('VAyw'),
        l = n('/Ikv'),
        p = n('s1N3'),
        f = n('lnti'),
        m = function (e) {
          var t,
            n = e.excludeReplyUser,
            r = e.inReplyToStatus,
            i = e.loggedInUserId,
            c = r.retweeted_status,
            s = c || r,
            u = s.entities,
            l = s.unmentioned_user_ids,
            m = s.user,
            h = c ? c.user : {},
            g = c ? r.user : {},
            y = (null == u ? void 0 : u.user_mentions) || [],
            _ = d.a.mergeTaggedUsers((null == u ? void 0 : u.media) || []),
            b = v(c || r) || {},
            w = ((t = {}), o()(t, h.id_str, h), o()(t, g.id_str, g), o()(t, m.id_str, m), o()(t, b.id_str, b), t)
          y.forEach(function (e) {
            w[e.id_str] = e
          }),
            _.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                r = e.user_id
              w[r] = { id_str: r, name: t, screen_name: n }
            })
          var C = function (e) {
              var t = null == l ? void 0 : l.includes(e.id_str),
                n = e.id_str === m.id_str
              return !t || n ? [e.id_str] : []
            },
            E = Object(p.a)(
              Object(f.a)(
                [].concat(
                  a()(C(h)),
                  a()(C(g)),
                  [m.id_str],
                  a()(
                    y.flatMap(function (e) {
                      return C(e)
                    }),
                  ),
                  a()(
                    _.map(function (e) {
                      return e.user_id
                    }),
                  ),
                ),
              ),
            ).filter(function (e) {
              return e !== i
            }),
            x = i && m.id_str === i ? [i].concat(a()(E)) : E
          return (
            n &&
              (x = x.filter(function (e) {
                return e !== m.id_str
              })),
            x.map(function (e) {
              return w[e]
            })
          )
        },
        v = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var r = l.a.getBindingValue(t.binding_values, 'site')
            r && t.users && (n = t.users[r.id_str])
          }
          return n
        },
        h = function (e) {
          var t = e.maxNumberOfPhotos
          return function (e) {
            if (0 === e.length) return !0
            var n = e.some(function (e) {
                return !!e.externalMediaDetails
              }),
              r =
                !n &&
                e.some(function (e) {
                  return e.mediaFile && e.mediaFile.isGif
                }),
              a = e.some(function (e) {
                return e.mediaFile && !(e.mediaFile instanceof s.a) && e.mediaFile.isVideo
              })
            if (r || n || a) return 1 === e.length
            var i = e.length <= t,
              o = e.every(function (e) {
                return e.mediaFile && e.mediaFile.isImage
              })
            return i && o
          }
        },
        g = h({ maxNumberOfPhotos: 4 }),
        y = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.split(u.b.WordBoundary)
          return (
            t && n.pop(),
            !!n.find(function (e) {
              var t = Object(c.e)(e, 'compose')
              return t && 'users' === t.result_type
            })
          )
        }
    },
  },
])
//# sourceMappingURL=WIPED
