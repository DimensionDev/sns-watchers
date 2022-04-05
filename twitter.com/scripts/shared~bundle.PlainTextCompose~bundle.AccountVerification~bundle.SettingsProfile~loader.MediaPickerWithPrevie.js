;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
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
        l = n.n(u),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        v = (n('2G9S'), n('849X'), n('TJCb'), n('M+/F'), n('ERkP')),
        h = n.n(v),
        g = n('oEoC'),
        y = n('2dXj'),
        _ = n('4bHO'),
        b = n('dzqK'),
        C = n('GZwR'),
        E = (function (e) {
          l()(n, e)
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
                  l = s.queryContext,
                  d = u && l ? { word: l.word, resultType: l.resultType } : void 0
                return h.a.createElement(
                  y.a,
                  {
                    contextText: r,
                    isInline: a,
                    isInlineReply: i,
                    onDismiss: e._handleDismiss,
                    onSelectItem: e._handleSelectItem,
                    onTypeaheadStateChange: o,
                    query: d,
                    ref: e._genericWrapperRef,
                    source: c || C.d.Compose,
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
                  l = g.e(u || '', 'compose')
                if ((null == l ? void 0 : l.q) !== a)
                  if ((e._genericWrapperRef.current && e._genericWrapperRef.current.resetSelectedItem(), -1 === s))
                    e._setQueryContext(void 0)
                  else if (l) {
                    var d = l.q,
                      p = l.result_type
                    e._setQueryContext({ word: d, resultType: p, fullText: n.value, startIndex: s, endIndex: c })
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
      t.a = E
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return k
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
          return z
        }),
        n.d(t, 'j', function () {
          return B
        }),
        n.d(t, 'k', function () {
          return H
        }),
        n.d(t, 'h', function () {
          return q
        }),
        n.d(t, 'a', function () {
          return G
        }),
        n.d(t, 'b', function () {
          return W
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
        l = n.n(u),
        d = n('yiKp'),
        p = n.n(d),
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
        C = n.n(b),
        E = n('uKEd'),
        w = n('lnti'),
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
        T = {}
      var O = function (e) {
          var t = e.conversation_id,
            n = e.id,
            r = e.localMediaId,
            a = e.recipient_ids,
            i = e.sender_id,
            o = e.text,
            c = e.attachment,
            s = void 0 === c ? {} : c,
            u = e.error,
            l = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: a,
            error: u,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: r, sender_id: i, text: o, time: l },
            type: 'message',
            time: l,
          }
        },
        k = function (e) {
          return function (t, n, r) {
            var i = r.api,
              c = e || {},
              u = c.senderId,
              l = c.cardUrl,
              d = c.conversationId,
              _ = c.localMediaId,
              b = c.recipients,
              S = void 0 === b ? [] : b,
              T = c.requestId,
              k = void 0 === T ? C.a.v1() : T,
              M = c.tweetAttachment,
              P = c.quickReply,
              D = s()(c, I)
            t(Z(d))
            var U = n(),
              R = _ || V(n(), d),
              A = f.k(U, R),
              L = o()(A, 1)[0] || {},
              F = L.mediaFile,
              z = L.mediaMetadata,
              B = S.length > 0 && S.join(','),
              H = {}
            F && F.isGif
              ? (H.extraInitParams = '&media_category=dm_gif')
              : F && F.isVideo && (H.extraInitParams = '&media_category=dm_video')
            var K = f.p(R, H),
              G = [t(K)],
              N = (q(U, d) || {}).found_media_origin
            return (
              F && F.isGif && G.push(Object(g.a)(F)),
              Promise.all(G).then(
                function (n) {
                  var r = o()(n, 2),
                    c = o()(r[0], 1)[0],
                    s = r[1],
                    g = (null == z ? void 0 : z.altText) || (null == z ? void 0 : z.defaultAltText),
                    _ = !!g
                  return (
                    c && (N || _)
                      ? t(f.m(p()({ media_id: c.uploadId, found_media_origin: N }, !!_ && { alt_text: { text: g } })))
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
                        b = O({
                          attachment: r,
                          conversation_id: d,
                          id: k,
                          recipient_ids: B,
                          sender_id: u,
                          text: e.text,
                        }),
                        C = p()(
                          p()(
                            p()(p()({}, D), Object(y.a)(l) && { card_uri: l }),
                            {},
                            { conversation_id: d },
                            !n && { media_id: _ },
                          ),
                          {},
                          { recipient_ids: B, request_id: k, tweet_id: n },
                        )
                      P &&
                        ((C['quick_reply_response[options][id]'] = P.id),
                        (C['quick_reply_response[options][selected_id]'] = P.selected_id))
                      var I = Object(w.a)([
                        ee(d),
                        { type: h.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        d && Object(E.b)(d, k, b),
                      ])
                      return (
                        t(I),
                        i.DirectMessages.sendMessage(C).then(
                          function (n) {
                            var r = n.entities,
                              i = r.cards,
                              o = r.entries,
                              c = r.tweets,
                              s = r.users,
                              u = n.result.conversations
                            Object(x.a)(R) && t(J(d, R))
                            var l = Object(w.a)(
                              [{ type: h.c.SUCCESS }].concat(
                                a()(Object(m.a)({ conversations: u, entries: o, users: s, tweets: c, cards: i })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, d && Object(E.j)(d, k, e), j(d)],
                              ),
                            )
                            return t(l), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var a = O({
                                attachment: r,
                                conversation_id: d,
                                error: !0,
                                id: k,
                                localMediaId: R,
                                recipient_ids: B,
                                sender_id: u,
                                text: e.text,
                              }),
                              i = Object(w.a)([
                                { type: h.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                d && Object(E.b)(d, k, a),
                              ])
                            return t(i), Object(v.e)(t, n, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(ne(d)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(w.a)([Object(x.a)(R) && J(d, R), ne(d)])), Promise.reject(e)
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
        V = function (e, t) {
          var n = M(e, t)
          return n ? n.mediaId : null
        },
        z = function (e, t) {
          var n = f.k(e, V(e, t))
          return n.length > 0 ? n[0] : null
        },
        B = function (e, t) {
          var n = M(e, t)
          return !!n && n.isUploading
        },
        H = function (e, t) {
          return f.l(e, V(e, t))
        },
        q = function (e, t) {
          var n = M(e, t)
          return n ? n.gifMetadata : null
        },
        K = 'rweb/dmComposer/ADD_MEDIA',
        G = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: o()(t, 1)[0], gifMetadata: n }, type: K, conversationId: e }
        },
        N = 'rweb/dmComposer/CANCEL_UPLOAD',
        W = function (e) {
          return { type: N, conversationId: e }
        },
        Y = 'rweb/dmComposer/REMOVE_MEDIA',
        X = function (e) {
          return { type: Y, conversationId: e }
        },
        J = function (e, t) {
          return function (n) {
            n(f.i(t)), n([W(e), X(e)])
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
        l()({}, S, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case K:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, l()({}, n, p()(p()({}, r), t.payload)))
            case Q:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, l()({}, n, p()(p()({}, a), {}, { isUploading: !0 })))
            case N:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, l()({}, n, p()(p()({}, i), {}, { isUploading: !1 })))
            case te:
            case $:
            case Y:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                l()({}, n, p()(p()({}, o), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case D:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, l()({}, n, p()(p()({}, c), {}, { text: t.text })))
            case L:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, l()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case R:
              var u = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, l()({}, n, p()(p()({}, u), {}, { text: null })))
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
        l = n.n(u),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('2VqO'),
        m = n.n(f),
        v = n('KEM+'),
        h = n.n(v),
        g = (n('2G9S'), n('7xRU'), n('ERkP')),
        y = n.n(g),
        _ = n('3XMw'),
        b = n.n(_),
        C = n('cjZk'),
        E = 'fileInput',
        w = n('sjK1'),
        x = n('/Imo'),
        I = n('rHpw'),
        S = n('9HgX'),
        T = ['acceptGifs', 'acceptImages', 'acceptVideo', 'customMimeTypes', 'icon', 'style', 'withIcon'],
        O = b.a.b9960f31,
        k = { viewType: 'media_picker' },
        M = y.a.createElement(C.a, null),
        P = function (e) {
          var t = e.acceptGifs,
            n = e.acceptImages,
            r = void 0 === n || n,
            a = e.acceptVideo
          return (r ? S.b : []).concat(t ? [S.a] : []).concat(a ? w.a : [])
        },
        D = (function (e) {
          p()(n, e)
          var t = m()(n)
          function n() {
            return s()(this, n), t.apply(this, arguments)
          }
          return (
            l()(n, [
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
                    l = o()(e, T),
                    d = P({ acceptGifs: t, acceptImages: n, acceptVideo: r }).concat(i).join(',')
                  return y.a.createElement(
                    x.a,
                    a()({}, l, {
                      accept: d,
                      behavioralEventContext: k,
                      icon: u ? c : void 0,
                      style: [U.root, s],
                      testID: E,
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
        accessibilityLabel: O,
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
        l = n('XOJV'),
        d = n('eSoz'),
        p = n('rxPX'),
        f = n('0KEI'),
        m = function (e, t) {
          return t.tweetId
        },
        v = function (e, t) {
          var n = t.tweetId,
            r = n && l.a.select(e, n)
          return r ? Object(d.g)(e, r) : void 0
        },
        h = Object(p.a)()
          .propsFromState(function () {
            return { community: v, hydratedTweet: l.a.createHydratedTweetSelector(m) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(f.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: d.c.fetchOneIfNeeded,
            }
          }),
        g = n('YeIG'),
        y = n('uCxL'),
        _ = n('x5Pi'),
        b = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        C = h(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            r = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            c = (e.tweetId, o()(e, b)),
            l = s.a.useContext(u.a),
            d = l.featureSwitches,
            p = l.loggedInUserId,
            f = null == i ? void 0 : i.community_id_str
          s.a.useEffect(
            function () {
              f && Object(g.a)(t) && r(f).catch(n())
            },
            [t, f, n, r],
          )
          var m = d.isTrue('responsive_web_alt_text_badge_enabled'),
            v = i && Object(_.f)(i, p, t),
            h = v && Object(_.e)(v),
            C = d.isTrue('responsive_web_reactions_enabled')
          return s.a.createElement(
            y.a,
            a()({}, c, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: m,
              socialContextProps: h,
              tweet: i,
              withReactions: C,
            }),
          )
        })
      t.a = C
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
        l = n('Y9Ll'),
        d = n.n(l),
        p = n('1Pcy'),
        f = n.n(p),
        m = n('5Yy7'),
        v = n.n(m),
        h = n('2VqO'),
        g = n.n(h),
        y = n('KEM+'),
        _ = n.n(y),
        b = (n('ho0z'), n('2G9S'), n('1t7P'), n('jQ/y'), n('hBvt'), n('k/Ka')),
        C = n('3XMw'),
        E = n.n(C),
        w = n('sgih'),
        x = n('t62R'),
        I = n('/yvb'),
        S = n('rHpw'),
        T = E.a.cfd2f35d,
        O = (function (e) {
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
            d()(n, [
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
                      style: k.linkInput,
                      value: i,
                    })
                  return a.a.createElement(
                    w.a,
                    { onMaskClick: o, style: k.container, type: 'center', withMask: !0 },
                    r && a.a.createElement(x.b, { align: 'center', style: k.headerText, weight: 'bold' }, r),
                    n && a.a.createElement(x.b, { align: 'center', color: 'gray700', style: k.labelText }, n),
                    c,
                    a.a.createElement(I.a, { onPress: o, size: 'xLarge', style: k.cancelButton, type: 'brandText' }, t),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.Component)
      _()(O, 'defaultProps', { cancelButtonLabel: T })
      var k = S.a.create(function (e) {
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
        M = O,
        P = n('I/9y'),
        D = n('mjJ+'),
        U = n('cm6r'),
        R = n('CaKu'),
        j = n('U+bB'),
        A = E.a.e05c00b4,
        L = E.a.eabf2209,
        F = E.a.a613e72f,
        V = E.a.f88553c8,
        z = {
          riffsy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_riffsy.png',
          giphy: 'https://abs.twimg.com/a/1501527574/img/t1/icon_giphy.png',
        },
        B = (function (e) {
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
                R.a.isAvailable() ? (R.a.setString(a), n({ text: V })) : r.setState({ showCopyLinkSheet: !0 }), e && e()
              }),
              _()(f()(r), '_handleCopyLinkSheetCancel', function () {
                r.setState({ showCopyLinkSheet: !1 })
              }),
              (r.state = { showCopyLinkSheet: !1 }),
              r
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state.showCopyLinkSheet,
                    t = this.props,
                    n = t.gifUrl,
                    r = t.provider,
                    i = r.display_name,
                    o = r.name,
                    c = z[o]
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
                          { align: 'center', color: 'gray700', style: H.root },
                          a.a.createElement(
                            E.a.I18NFormatMessage,
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
                      a.a.createElement(j.a, { source: { uri: t }, style: H.image }),
                      a.a.createElement(x.b, null, e.toUpperCase()),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(a.a.PureComponent),
        H = S.a.create(function (e) {
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
        q = B,
        K = c(function (e) {
          var t = e.addToast,
            n = e.gifUrl,
            r = e.provider
          return a.a.createElement(q, { addToast: t, gifUrl: n, provider: r })
        })
      t.a = K
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
        l = n.n(u),
        d = n('2VqO'),
        p = n.n(d),
        f = n('KEM+'),
        m = n.n(f),
        v = (n('z84I'), n('KqXw'), n('3uku'), n('jwue'), n('7x/C'), n('+oxZ'), n('ho0z'), n('ERkP')),
        h = n.n(v),
        g = n('K1iM'),
        y = n.n(g),
        _ = n('RhWx'),
        b = n.n(_),
        C = (n('wFPu'), n('CDB5')),
        E = n('xVN5'),
        w = n('vjRr'),
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
              if ((n = w.a.select(e, c))) break
            }
          } catch (s) {
            o.e(s)
          } finally {
            o.f()
          }
          return n
        },
        T = Object(x.a)()
          .propsFromState(function () {
            return { card: S }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'COMPOSER_CARD_PREVIEW',
              ),
              fetchCardPreviewIfNeeded: w.a.fetchCardPreviewIfNeeded,
              updateDMComposer: C.e,
              updateTweetComposer: E.w,
            }
          }),
        O = n('KqB4'),
        k = n.n(O),
        M = n('aX4+'),
        P = n('3XMw'),
        D = n.n(P),
        U = n('hOZg'),
        R = n('cnVF'),
        j = n('MWbm'),
        A = n('v6aA'),
        L = n('/yvb'),
        F = n('rHpw'),
        V = n('VY6S'),
        z = n('mN6z'),
        B = D.a.f6fec9f6,
        H = /^https?:\/\//i,
        q = function (e) {
          var t = k()(e)
          if (t.length)
            return t.map(function (e) {
              return (!H.test(e) && 'http://'.concat(e)) || e
            })
        },
        K = (function (e) {
          l()(n, e)
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
              (i._debouncedFetchCardPreview = Object(V.a)(i._fetchCardPreviewIfNeeded, 1e3)),
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
                  Object(z.a)(e.urls, t) || this._debouncedFetchCardPreview()
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
                          accessibilityLabel: B,
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
      m()(K, 'contextType', A.a)
      var G = F.a.create(function (e) {
          return { closeButton: { position: 'absolute', top: e.spaces.space4, left: e.spaces.space4 } }
        }),
        N = T(K)
      t.a = N
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
        l = n('I4+6'),
        d = n('cm6r'),
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
          h = l.a.generate({
            backgroundColor: p.a.theme.colors.transparent,
            color: p.a.theme.colors[r],
            insetFocusRing: !0,
          })
        return s.a.createElement(
          f.a,
          { style: v.container },
          s.a.createElement(
            d.a,
            a()({}, c, { interactiveStyles: h, style: v.root }),
            s.a.createElement(u.b, { align: n, color: r }, i),
          ),
        )
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
        l = n.n(u),
        d = Object(c.a)({
          loader: function () {
            return l.a.emoji.then(function () {
              return Promise.all([n.e(0), n.e(17), n.e(208)]).then(n.bind(null, '5RdJ'))
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
              o.a.createElement(d, { onSelect: t, partialRender: n, rowSize: 9, spriteUrl: r }),
            ),
            o.a.createElement(v.a, { source: r, style: y.hidden }),
          )
        },
        b = n('pNJr'),
        C = n('2ZFc'),
        E = n('OiMc'),
        w = n('/yvb'),
        x = l.a.d4a4842d,
        I = o.a.createElement(b.a, null),
        S = l.a.fec16c1c,
        T = { viewType: 'emoji_picker' },
        O = function (e) {
          var t = e.disabled,
            n = e.onEmojiSelect,
            r = e.onPress,
            i = e.size,
            c = e.style,
            s = e.textInputRef,
            u = o.a.useState(!0),
            l = a()(u, 2),
            p = l[0],
            f = l[1]
          o.a.useEffect(function () {
            var e = setTimeout(function () {
              d.preload(), C.a.get('emojiPicker2')
            }, 5e3)
            return function () {
              clearTimeout(e)
            }
          }, [])
          return o.a.createElement(
            E.a,
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
            o.a.createElement(w.a, {
              accessibilityHasPopup: 'menu',
              accessibilityLabel: x,
              behavioralEventContext: T,
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
      O.defaultProps = { disabled: !1, size: 'xSmall' }
      t.a = O
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
        l = n.n(u),
        d = n('2VqO'),
        p = n.n(d),
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
        C = (function (e) {
          l()(n, e)
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
                    i = t ? E.dragBorderValid : E.dragBorderInvalid
                  return h.a.createElement(
                    b,
                    {
                      onDragEnter: this._handleDragEnter,
                      onDragLeave: this._handleDragLeave,
                      onDragOver: this._handleDragOver,
                      onDrop: this._handleDragDrop,
                      style: [E.root, r, a && i],
                    },
                    h.a.createElement(_.a, { style: E.inner }, 'function' == typeof n ? n(a) : n),
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
      m()(C, 'defaultProps', { allowDragDrop: !0 })
      var E = g.a.create(function (e) {
        return {
          root: { display: 'flex', flexDirection: 'column' },
          dragBorderValid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.primary },
          dragBorderInvalid: { borderStyle: 'dashed', borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 },
          inner: { flexGrow: 1 },
        }
      })
      t.a = C
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
        l = c.a.a4993fa1,
        d = a.a.createElement(s.a, null),
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
          accessibilityLabel: l,
          behavioralEventContext: f,
          disabled: !r,
          hoverLabel: { label: p },
          icon: d,
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
        l = n('VAyw'),
        d = n('/Ikv'),
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
            d = s.unmentioned_user_ids,
            m = s.user,
            h = c ? c.user : {},
            g = c ? r.user : {},
            y = (null == u ? void 0 : u.user_mentions) || [],
            _ = l.a.mergeTaggedUsers((null == u ? void 0 : u.media) || []),
            b = v(c || r) || {},
            C = ((t = {}), o()(t, h.id_str, h), o()(t, g.id_str, g), o()(t, m.id_str, m), o()(t, b.id_str, b), t)
          y.forEach(function (e) {
            C[e.id_str] = e
          }),
            _.forEach(function (e) {
              var t = e.name,
                n = e.screen_name,
                r = e.user_id
              C[r] = { id_str: r, name: t, screen_name: n }
            })
          var E = function (e) {
              var t = null == d ? void 0 : d.includes(e.id_str),
                n = e.id_str === m.id_str
              return !t || n ? [e.id_str] : []
            },
            w = Object(p.a)(
              Object(f.a)(
                [].concat(
                  a()(E(h)),
                  a()(E(g)),
                  [m.id_str],
                  a()(
                    y.flatMap(function (e) {
                      return E(e)
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
            x = i && m.id_str === i ? [i].concat(a()(w)) : w
          return (
            n &&
              (x = x.filter(function (e) {
                return e !== m.id_str
              })),
            x.map(function (e) {
              return C[e]
            })
          )
        },
        v = function (e) {
          var t = e.card,
            n = null
          if (t) {
            var r = d.a.getBindingValue(t.binding_values, 'site')
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
