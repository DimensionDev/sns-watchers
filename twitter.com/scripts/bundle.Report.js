;(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    '07FG': function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('cnVF'),
        o = function (e) {
          return e === r.B
        }
    },
    CDB5: function (e, t, n) {
      'use strict'
      n.d(t, 'm', function () {
        return k
      }),
        n.d(t, 'l', function () {
          return D
        }),
        n.d(t, 'f', function () {
          return O
        }),
        n.d(t, 'd', function () {
          return j
        }),
        n.d(t, 'g', function () {
          return L
        }),
        n.d(t, 'e', function () {
          return P
        }),
        n.d(t, 'i', function () {
          return F
        }),
        n.d(t, 'j', function () {
          return q
        }),
        n.d(t, 'k', function () {
          return G
        }),
        n.d(t, 'h', function () {
          return B
        }),
        n.d(t, 'a', function () {
          return V
        }),
        n.d(t, 'b', function () {
          return Q
        }),
        n.d(t, 'c', function () {
          return z
        })
      var r = n('RhWx'),
        o = n.n(r),
        a = n('ddV6'),
        i = n.n(a),
        c = n('m3Bd'),
        s = n.n(c),
        u = n('KEM+'),
        d = n.n(u),
        l = n('yiKp'),
        p = n.n(l),
        m =
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
        f = n('xPna'),
        _ = n('oEOe'),
        v = n('xCUF'),
        b = n('ude7'),
        h = n('07FG'),
        y = n('Ssj5'),
        g = n('fEA7'),
        w = n.n(g),
        E = n('uKEd'),
        T = n('lnti'),
        C = n('/NU0'),
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
        A = 'dmComposer',
        U = {}
      var M = function (e) {
          var t = e.conversation_id,
            n = e.id,
            r = e.localMediaId,
            o = e.recipient_ids,
            a = e.sender_id,
            i = e.text,
            c = e.attachment,
            s = void 0 === c ? {} : c,
            u = e.error,
            d = Date.now().toString()
          return {
            conversation_id: t,
            recipient_ids: o,
            error: u,
            id: n,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: r, sender_id: a, text: i, time: d },
            type: 'message',
            time: d,
          }
        },
        k = function (e) {
          return function (t, n, r) {
            var a = r.api,
              c = e || {},
              u = c.senderId,
              d = c.cardUrl,
              l = c.conversationId,
              y = c.localMediaId,
              g = c.recipients,
              A = void 0 === g ? [] : g,
              U = c.requestId,
              k = void 0 === U ? w.a.v1() : U,
              R = c.tweetAttachment,
              D = c.quickReply,
              S = s()(c, I)
            t(Z(l))
            var O = n(),
              x = y || H(n(), l),
              L = m.k(O, x),
              N = i()(L, 1)[0] || {},
              P = N.mediaFile,
              F = N.mediaMetadata,
              q = A.length > 0 && A.join(','),
              G = {}
            P && P.isGif
              ? (G.extraInitParams = '&media_category=dm_gif')
              : P && P.isVideo && (G.extraInitParams = '&media_category=dm_video')
            var W = m.p(x, G),
              V = [t(W)],
              X = (B(O, l) || {}).found_media_origin
            return (
              P && P.isGif && V.push(Object(b.a)(P)),
              Promise.all(V).then(
                function (n) {
                  var r = i()(n, 2),
                    c = i()(r[0], 1)[0],
                    s = r[1],
                    b = (null == F ? void 0 : F.altText) || (null == F ? void 0 : F.defaultAltText),
                    y = !!b
                  return (
                    c && (X || y)
                      ? t(m.m(p()({ media_id: c.uploadId, found_media_origin: X }, !!y && { alt_text: { text: b } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var n = (R || {}).id_str,
                        r = {}
                      if (c) {
                        var i = c.mediaFile,
                          m = void 0 === i ? {} : i,
                          b = {
                            original_info: { width: m.width, height: m.height },
                            sizes: [{ h: m.height, w: m.width, resize: 'fit' }],
                          }
                        m.isImage
                          ? (r.photo = p()(p()({}, b), {}, { media_url_https: m.url }))
                          : m.isGif
                          ? (r.animated_gif = p()(p()({}, b), {}, { media_url_https: s, type: 'animated_gif' }))
                          : m.isVideo && (r.video = p()(p()({}, b), {}, { media_url_https: m.url, type: 'video' }))
                      } else R && (r.tweet = { status: n })
                      var y = (c || {}).uploadId,
                        g = M({
                          attachment: r,
                          conversation_id: l,
                          id: k,
                          recipient_ids: q,
                          sender_id: u,
                          text: e.text,
                        }),
                        w = p()(
                          p()(
                            p()(p()({}, S), Object(h.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: l },
                            !n && { media_id: y },
                          ),
                          {},
                          { recipient_ids: q, request_id: k, tweet_id: n },
                        )
                      D &&
                        ((w['quick_reply_response[options][id]'] = D.id),
                        (w['quick_reply_response[options][selected_id]'] = D.selected_id))
                      var I = Object(T.a)([
                        ee(l),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        l && Object(E.b)(l, k, g),
                      ])
                      return (
                        t(I),
                        a.DirectMessages.sendMessage(w).then(
                          function (n) {
                            var r = n.entities,
                              a = r.cards,
                              i = r.entries,
                              c = r.tweets,
                              s = r.users,
                              u = n.result.conversations
                            Object(C.a)(x) && t(z(l, x))
                            var d = Object(T.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                o()(Object(f.a)({ conversations: u, entries: i, users: s, tweets: c, cards: a })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, l && Object(E.j)(l, k, e), j(l)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var o = M({
                                attachment: r,
                                conversation_id: l,
                                error: !0,
                                id: k,
                                localMediaId: x,
                                recipient_ids: q,
                                sender_id: u,
                                text: e.text,
                              }),
                              a = Object(T.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                l && Object(E.b)(l, k, o),
                              ])
                            return t(a), Object(_.e)(t, n, 'ACTION_SEND_DM')
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
                  return t(Object(T.a)([Object(C.a)(x) && z(l, x), ne(l)])), Promise.reject(e)
                },
              )
            )
          }
        },
        R = function (e, t) {
          return e.dmComposer[t]
        },
        D = function (e, t) {
          var n = R(e, t)
          return n ? n.text : null
        },
        S = 'rweb/dmComposer/SAVE_TEXT',
        O = function (e, t) {
          return { type: S, conversationId: e, text: t }
        },
        x = 'rweb/dmComposer/REMOVE_TEXT',
        j = function (e) {
          return { type: x, conversationId: e }
        },
        L = function (e, t) {
          var n = R(e, t)
          return n ? n.cardUrl : null
        },
        N = 'rweb/dmComposer/SAVE_CARD_URL',
        P = function (e, t) {
          return { type: N, conversationId: e, cardUrl: t }
        },
        H = function (e, t) {
          var n = R(e, t)
          return n ? n.mediaId : null
        },
        F = function (e, t) {
          var n = m.k(e, H(e, t))
          return n.length > 0 ? n[0] : null
        },
        q = function (e, t) {
          var n = R(e, t)
          return !!n && n.isUploading
        },
        G = function (e, t) {
          return m.l(e, H(e, t))
        },
        B = function (e, t) {
          var n = R(e, t)
          return n ? n.gifMetadata : null
        },
        W = 'rweb/dmComposer/ADD_MEDIA',
        V = function (e, t, n) {
          return { payload: { isUploading: !1, mediaId: i()(t, 1)[0], gifMetadata: n }, type: W, conversationId: e }
        },
        X = 'rweb/dmComposer/CANCEL_UPLOAD',
        Q = function (e) {
          return { type: X, conversationId: e }
        },
        K = 'rweb/dmComposer/REMOVE_MEDIA',
        Y = function (e) {
          return { type: K, conversationId: e }
        },
        z = function (e, t) {
          return function (n) {
            n(m.i(t)), n([Q(e), Y(e)])
          }
        },
        J = 'rweb/dmComposer/UPLOAD_REQUEST',
        Z = function (e) {
          return { type: J, conversationId: e }
        },
        $ = 'rweb/dmComposer/UPLOAD_SUCCESS',
        ee = function (e) {
          return { type: $, conversationId: e }
        },
        te = 'rweb/dmComposer/UPLOAD_FAILURE',
        ne = function (e) {
          return { type: te, conversationId: e }
        }
      y.a.register(
        d()({}, A, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), t.payload)))
            case J:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, o), {}, { isUploading: !0 })))
            case X:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), {}, { isUploading: !1 })))
            case te:
            case $:
            case K:
              var i = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(
                p()({}, e),
                {},
                d()({}, n, p()(p()({}, i), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case S:
              var c = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, c), {}, { text: t.text })))
            case N:
              var s = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, s), {}, { cardUrl: t.cardUrl })))
            case x:
              var u = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, u), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    EkRu: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ReportScreen', function () {
          return Me
        })
      var r = n('yiKp'),
        o = n.n(r),
        a = n('VrFO'),
        i = n.n(a),
        c = n('Y9Ll'),
        s = n.n(c),
        u = n('1Pcy'),
        d = n.n(u),
        l = n('5Yy7'),
        p = n.n(l),
        m = n('2VqO'),
        f = n.n(m),
        _ = n('KEM+'),
        v = n.n(_),
        b =
          (n('KqXw'),
          n('MvUL'),
          n('hBpG'),
          n('7x/C'),
          n('7xRU'),
          n('z84I'),
          n('LW0h'),
          n('+KXO'),
          n('2G9S'),
          n('ERkP')),
        h = n.n(b),
        y = n('EbOo'),
        g = (n('WNMA'), n('RqPI')),
        w = n('1YZw'),
        E = n('aWyx'),
        T = n('Hw0q'),
        C = n('MMRb'),
        I = n('kHBp'),
        A = n('lPpt'),
        U = n('Fg8X'),
        M = n('0pUJ'),
        k = n('Fmkq'),
        R = n('QK5w'),
        D = n('V5Qi'),
        S = n('XOJV'),
        O = n('G6rE'),
        x = n('rxPX'),
        j = n('0KEI'),
        L = n('fz3c'),
        N = function (e, t) {
          return t.location && t.location.state && t.location.state.clientReferer
        },
        P = function (e, t) {
          return t.location && t.location.state && t.location.state.inboxType
        },
        H = function (e, t) {
          return t.location && t.location.state && t.location.state.scribeNamespace
        },
        F = function (e, t) {
          return !!(t.location && t.location.state && t.location.state.isMedia) || !1
        },
        q = function (e, t) {
          return t.location && t.location.state && t.location.state.promotedContent
        },
        G = function (e, t) {
          return t.location && t.location.state && t.location.state.conversationSection
        },
        B = function (e, t) {
          return t.location && t.location.query && Object(T.a)(t.location.query.community_id)
        },
        W = function (e, t) {
          return Object(L.e)(V(e, t))
        },
        V = function (e, t) {
          return t.match.params.reportType
        },
        X = function (e, t) {
          return t.match.params.reportedId
        },
        Q = function (e, t) {
          var n = V(e, t),
            r = X(0, t)
          switch (n) {
            case L.a.Tweet:
            case L.a.AppealTweetWarning:
            case L.a.HideCommunityTweet:
              return S.a.selectHydrated(e, r)
            default:
              return
          }
        },
        K = function (e, t) {
          var n = V(e, t) === L.a.User ? X(0, t) : void 0
          return n ? O.e.select(e, n) : void 0
        },
        Y = function (e, t) {
          var n,
            r = V(e, t)
          if (
            ((r !== L.a.DMConversation && r !== L.a.DMMessage) ||
              (n = r === L.a.DMConversation ? X(0, t) : t.location.state ? t.location.state.conversationId : void 0),
            n)
          ) {
            var o = Object(D.a)(e, n),
              a = (function (e, t) {
                return g.r(e)
              })(e)
            return z(o, a)
          }
        },
        z = function (e, t) {
          var n
          if (e && e.data)
            return (
              (n =
                e.data.type === E.a.GROUP
                  ? '0'
                  : e.data.participants.filter(function (e) {
                      return e.user_id !== t
                    })[0].user_id),
              { conversationId: e.data.conversation_id, reportedUserId: n }
            )
        },
        J = function (e, t) {
          return V(e, t) === L.a.Moment ? U.a.select(e, X(0, t)) : void 0
        },
        Z = function (e, t) {
          var n = V(e, t) === L.a.List ? X(0, t) : void 0
          return n ? I.a.select(e, n) : void 0
        },
        $ = function (e, t) {
          var n = V(e, t) === L.a.Moment ? X(0, t) : void 0
          return n ? A.a.select(e, n) : void 0
        },
        ee = Object(x.a)()
          .propsFromState(function () {
            return {
              canGoBack: R.a,
              clientReferer: N,
              communityId: B,
              dmConversation: Y,
              reportedId: X,
              inboxType: P,
              isMedia: F,
              lang: g.p,
              liveEvent: $,
              moment: J,
              list: Z,
              promotedContent: q,
              conversationSection: G,
              reportType: V,
              reportSource: W,
              scribeNamespace: H,
              tweet: Q,
              user: K,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: w.b,
              block: O.e.block,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              fetchUpdates: C.fetchUpdates,
              mute: M.a,
              markTweetAsReported: S.a.markAsReported,
              markTweetsAsRemovedFromCommunity: S.a.markTweetsAsRemovedFromCommunity,
              richScribeAction: k.richScribeAction,
              unblock: O.e.unblock,
              unfollow: O.e.unfollow,
              unmute: O.e.unmute,
            }
          }),
        te = n('jHSc'),
        ne = n('qzfk'),
        re = n('X/yg'),
        oe = n('3XMw'),
        ae = n.n(oe),
        ie = n('tn7R'),
        ce = n('SrIh'),
        se =
          (n('yH/f'),
          Object.freeze({
            AppealTweetWarning: 'appealtweet',
            DMConversation: 'reportdmconversation',
            DMMessage: 'reportdmconversation',
            HideCommunityTweet: 'hidetweet',
            Moment: 'reportmoment',
            RemoveCommunityMember: 'removecommunitymember',
            Tweet: 'reporttweet',
            List: 'reportlist',
            User: 'reportprofile',
          })),
        ue = n('Rp9C'),
        de = n('X04g'),
        le = n('u0B7'),
        pe = n('1bnC'),
        me = n('tJZD'),
        fe = n('fEA7'),
        _e = n.n(fe),
        ve = n('v6aA'),
        be = n('/yvb'),
        he = n('bPFD'),
        ye = n('rHpw'),
        ge = n('P2xQ'),
        we = ae.a.f1824804,
        Ee = ae.a.h030c24b,
        Te = ae.a.c3e6226a,
        Ce = ae.a.a9fd20be,
        Ie = ae.a.i2b9632d,
        Ae = ae.a.b772cd65,
        Ue = 'https://twitter.com',
        Me = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e, r) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              v()(d()(o), '_renderDoneButton', function () {
                return o.state.isDone
                  ? h.a.createElement(be.a, { onPress: o._handleDone, size: 'xSmall', type: 'primaryFilled' }, Ae)
                  : void 0
              }),
              v()(d()(o), '_handleDone', function () {
                var e = o.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUpdates,
                  r = e.history,
                  a = e.inboxType,
                  i = e.reportType
                switch ((o._scribeAction('done'), i)) {
                  case L.a.DMConversation:
                  case L.a.DMMessage:
                    r.replace(Object(re.f)(a)), n().catch(t({}))
                    break
                  default:
                    o._goBack()
                }
              }),
              v()(d()(o), '_goBack', function () {
                var e = o.props.history,
                  t = Math.min(-1, o._initialHistoryLength - window.history.length - 1)
                e.go(t)
              }),
              v()(d()(o), '_handleBack', function () {
                o.props.history.goBack()
              }),
              v()(d()(o), '_handleCancel', function () {
                o._goBack()
              }),
              v()(d()(o), '_handleUndoBlock', function (e) {
                return function () {
                  var t = o.props,
                    n = t.addToast,
                    r = t.createLocalApiErrorHandler,
                    a = t.promotedContent
                  ;(0, t.unblock)(e, { promotedContent: a }).then(function () {
                    n({ text: Ie })
                  }, r(le.a))
                }
              }),
              v()(d()(o), '_handleUndoMute', function (e, t) {
                return function () {
                  var n = o.props,
                    r = n.addToast,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unmute)(e).then(function () {
                    r({ text: Object(ge.d)(t) })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(d()(o), '_getReportTitle', function () {
                switch (o.props.reportType) {
                  case L.a.AppealTweetWarning:
                    return we
                  case L.a.RemoveCommunityMember:
                    return Te
                  default:
                    return Ee
                }
              }),
              v()(d()(o), '_getReportedTweetId', function () {
                var e = o.props,
                  t = e.liveEvent,
                  n = e.moment,
                  r = e.reportType,
                  a = e.tweet
                switch (r) {
                  case L.a.Moment:
                    var i = (t ? Object(ie.a)(t.slates) : []).find(function (e) {
                      return e.tweet_id
                    })
                    return i ? i.tweet_id : n && n.cover_media && n.cover_media.tweet_id
                  case L.a.AppealTweetWarning:
                  case L.a.HideCommunityTweet:
                  case L.a.Tweet:
                    return a && a.id_str
                  default:
                    return
                }
              }),
              v()(d()(o), '_getReportedUserId', function (e) {
                var t = o.props,
                  n = t.dmConversation,
                  r = t.list,
                  a = t.liveEvent,
                  i = t.moment,
                  c = t.reportType,
                  s = t.reportedId,
                  u = t.tweet,
                  d = t.user
                switch (c) {
                  case L.a.DMConversation:
                  case L.a.DMMessage:
                    return e && e.data && n && '0' === n.reportedUserId
                      ? e.data.reported_user_id
                      : n && n.reportedUserId
                  case L.a.Moment:
                    return (a && a.liveEventDetails.attribution_user_id) || (i && i.author && i.author.id)
                  case L.a.User:
                    return d && d.id_str
                  case L.a.List:
                    return r && r.user
                  case L.a.AppealTweetWarning:
                  case L.a.HideCommunityTweet:
                  case L.a.Tweet:
                    return u && u.user.id_str
                  case L.a.RemoveCommunityMember:
                    return s
                  default:
                    return void Object(ce.a)('Unknown report type '.concat(c))
                }
              }),
              v()(d()(o), '_getReportedUserScreenName', function (e) {
                var t = o.props,
                  n = t.liveEvent,
                  r = t.moment,
                  a = t.reportType,
                  i = t.tweet,
                  c = t.user
                switch (a) {
                  case L.a.Moment:
                    var s,
                      u = null == n ? void 0 : n.liveEventDetails.attribution_user_id,
                      d = u ? (null == n || null === (s = n.users) || void 0 === s ? void 0 : s[u]) : void 0
                    if (d) return null == d ? void 0 : d.screen_name
                    if (r && r.author) return r.author.screen_name
                    break
                  case L.a.Tweet:
                    return null == i ? void 0 : i.user.screen_name
                  case L.a.User:
                    return null == c ? void 0 : c.screen_name
                }
              }),
              v()(d()(o), '_getCommunityId', function () {
                var e = o.props,
                  t = e.communityId
                switch (e.reportType) {
                  case L.a.RemoveCommunityMember:
                    return t
                }
              }),
              v()(d()(o), '_getReportUrl', function () {
                var e = o.props,
                  t = e.clientReferer,
                  n = e.conversationSection,
                  r = e.dmConversation,
                  a = e.isMedia,
                  i = e.lang,
                  c = e.list,
                  s = e.liveEvent,
                  u = e.moment,
                  d = e.promotedContent,
                  l = e.reportSource,
                  p = e.reportType,
                  m = e.reportedId,
                  f = e.scribeNamespace,
                  _ = p === L.a.DMConversation,
                  v = p === L.a.DMMessage,
                  b = p === L.a.Moment,
                  h = p === L.a.List,
                  y = {
                    client_location: [
                      null == f ? void 0 : f.page,
                      null == f ? void 0 : f.section,
                      null == f ? void 0 : f.component,
                    ].join(':'),
                    client_referer: t,
                    client_app_id: Object(ne.a)().clientAppId,
                    conversation_section: n,
                    source: l,
                    report_flow_id: o._reportFlowId,
                    reported_user_id: o._getReportedUserId(),
                    reported_tweet_id: o._getReportedTweetId(),
                    reported_direct_message_conversation_id: (v || _) && r && r.conversationId,
                    reported_direct_message_id: v && m,
                    reported_moment_id: b ? (s && s.liveEventDetails.id) || (u && u.id_str) : void 0,
                    reported_list_id: h ? c && c.id_str : void 0,
                    is_promoted: !!d,
                    impression_id: null == d ? void 0 : d.impression_id,
                    is_media: a,
                    initiated_in_app: '1',
                    lang: i,
                    community_id: o._getCommunityId(),
                  },
                  g = Object.keys(y)
                    .filter(function (e) {
                      return !!y[e]
                    })
                    .map(function (e) {
                      return ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(y[e]))
                    })
                    .join('&')
                return ''.concat(Ue, '/i/safety/report_story?').concat(g)
              }),
              v()(d()(o), '_messageHandler', function (e) {
                var t = o.props,
                  n = t.addToast,
                  r = t.markTweetAsReported,
                  a = t.markTweetsAsRemovedFromCommunity,
                  i = t.reportSource
                if (e.origin === Ue && 'ReportAction' === e.data.type) {
                  var c = o.props,
                    s = c.block,
                    u = c.createLocalApiErrorHandler,
                    d = c.mute,
                    l = c.promotedContent,
                    p = c.unfollow,
                    m = o._getReportedUserId(e)
                  switch (e.data.action) {
                    case 'block':
                      m &&
                        s(m, { promotedContent: l }).then(function () {
                          n({ action: { label: pe.a, onAction: o._handleUndoBlock(m) }, text: Ce })
                        }, u(y.a))
                      break
                    case 'unfollow':
                      m && p(m, { promotedContent: l }).catch(u(me.a))
                      break
                    case 'mute':
                      m &&
                        d(m).then(function () {
                          var t = o._getReportedUserScreenName(e)
                          n({ action: { label: pe.a, onAction: o._handleUndoMute(m, t) }, text: Object(ge.b)(t) })
                        }, u({ showToast: !0 }))
                      break
                    case 'complete':
                      o.setState({ isDone: !0 })
                      var f = o._getReportedTweetId()
                      if (
                        (f &&
                          (i === se.Tweet && r(f, L.b.Tombstone),
                          i === se.HideCommunityTweet && r(f, L.b.HiddenCommunityTweet)),
                        i === se.RemoveCommunityMember)
                      ) {
                        var _ = o._getReportedUserId(),
                          v = o._getCommunityId()
                        _ && v && a(_, v)
                      }
                      break
                    case 'error':
                      o.setState({ isDone: !0 })
                      break
                    case 'cancel':
                      o._handleCancel()
                  }
                }
              }),
              (o.state = { isDone: !1 }),
              (o._accessedDirectly = o._wasAccessedDirectly()),
              (o._reportFlowId = _e.a.v4()),
              (o._reportUrl = o._accessedDirectly ? '' : o._getReportUrl()),
              (o._initialHistoryLength = window.history.length),
              o
            )
          }
          return (
            s()(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addMessageListener,
                    n = e.history
                  t(this._messageHandler), this._wasAccessedDirectly() ? n.push('/') : this._scribeAction('impression')
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.state.isDone
                  this.props.removeMessageListener(this._messageHandler),
                    e || this._wasAccessedDirectly() || this._scribeAction('cancel')
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.history,
                    t = this.state.isDone
                  return this._accessedDirectly
                    ? null
                    : h.a.createElement(
                        te.b,
                        {
                          backButtonType: t ? 'close' : 'back',
                          history: e,
                          onBackClick: t ? this._handleDone : this._handleBack,
                          rightControl: this._renderDoneButton(),
                          title: this._getReportTitle(),
                        },
                        h.a.createElement(he.a, { allowForms: !0, src: this._reportUrl, style: ye.a.absoluteFill }),
                      )
                },
              },
              {
                key: '_wasAccessedDirectly',
                value: function () {
                  var e = this.props,
                    t = e.canGoBack,
                    n = e.communityId,
                    r = e.dmConversation,
                    o = e.list,
                    a = e.liveEvent,
                    i = e.moment,
                    c = e.reportType,
                    s = e.reportedId,
                    u = e.scribeNamespace,
                    d = e.tweet,
                    l = e.user,
                    p = a && a.liveEventDetails.attribution_user_id
                  return (
                    !t ||
                    !u ||
                    (c === L.a.AppealTweetWarning && !d) ||
                    (c === L.a.HideCommunityTweet && !d) ||
                    (c === L.a.RemoveCommunityMember && !n && !s) ||
                    (c === L.a.Tweet && !d) ||
                    (c === L.a.User && !l) ||
                    (c === L.a.DMConversation && !r) ||
                    (c === L.a.DMMessage && (!s || !r)) ||
                    (c === L.a.Moment && !i && !p) ||
                    (c === L.a.List && !o)
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function () {
                  if (this._scribeNamespace) return this._scribeNamespace
                  var e,
                    t = this.props,
                    n = t.reportType,
                    r = t.scribeNamespace
                  switch (n) {
                    case L.a.AppealTweetWarning:
                      e = 'appeal_tweet_warning'
                      break
                    case L.a.DMConversation:
                      e = 'report_dm_conversation'
                      break
                    case L.a.Moment:
                      e = 'report_moment'
                      break
                    case L.a.Tweet:
                      e = 'report_tweet'
                      break
                    case L.a.User:
                      e = 'report_user'
                  }
                  return (this._scribeNamespace = o()(o()({}, r), {}, { element: e })), this._scribeNamespace
                },
              },
              {
                key: '_getScribeData',
                value: function () {
                  if (this._scribeData) return this._scribeData
                  var e = this.props,
                    t = e.promotedContent,
                    n = e.reportType,
                    r = e.scribeNamespace,
                    o = e.tweet,
                    a = e.user
                  if (n === L.a.Tweet || n === L.a.AppealTweetWarning)
                    this._scribeData = {
                      associations: v()({}, de.a.AssociationType.ASSOCIATED_TWEET, {
                        association_id: o && o.id_str,
                        association_namespace: { page: null == r ? void 0 : r.page },
                      }),
                      promoted: !!t,
                      items: o ? [ue.a.forTweet(o)] : [],
                    }
                  else if (n === L.a.User) {
                    var i = a ? [ue.a.forUser(a.id_str)] : []
                    this._scribeData = {
                      associations: v()({}, de.a.AssociationType.ASSOCIATED_USER, { association_id: a && a.id_str }),
                      items: i,
                      targets: i,
                    }
                  }
                  return this._scribeData
                },
              },
              {
                key: '_scribeAction',
                value: function (e) {
                  var t = this.props.richScribeAction,
                    n = o()(
                      o()({}, this._getScribeData()),
                      {},
                      { report_details: { report_flow_id: this._reportFlowId } },
                    )
                  t(o()(o()({}, this._getScribeNamespace()), {}, { action: e }), n)
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      v()(Me, 'defaultProps', {
        addMessageListener: function (e) {
          return window.addEventListener('message', e)
        },
        isMedia: !1,
        removeMessageListener: function (e) {
          return window.removeEventListener('message', e)
        },
      }),
        v()(Me, 'contextType', ve.a)
      var ke = ee(Me)
      t.default = ke
    },
    LqVV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ReportFlowComplete', function () {
          return R
        })
      var r = n('ERkP'),
        o = n.n(r),
        a = n('EbOo'),
        i = n('1YZw'),
        c = n('0pUJ'),
        s = n('QK5w'),
        u = n('G6rE'),
        d = n('rxPX'),
        l = n('0KEI'),
        p = function (e, t) {
          var n = t.location.query.action
          if ('string' == typeof n) return n
        },
        m = function (e, t) {
          var n = t.location.query.reported_user_id
          if ('string' == typeof n) return n
        },
        f = function (e, t) {
          var n = t.location.query.reported_screen_name
          if ('string' == typeof n) return n
        },
        _ = Object(d.a)()
          .propsFromState(function () {
            return { action: p, canGoBack: s.a, reportedUserId: m, reportedScreenName: f }
          })
          .propsFromActions(function () {
            return {
              addToast: i.b,
              block: u.e.block,
              createLocalApiErrorHandler: Object(l.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              mute: c.a,
              unblock: u.e.unblock,
              unfollow: u.e.unfollow,
              unmute: u.e.unmute,
            }
          }),
        v = n('kGix'),
        b = n('v//M'),
        h = n('3XMw'),
        y = n.n(h),
        g = n('rHpw'),
        w = n('u0B7'),
        E = n('1bnC'),
        T = n('FGLp'),
        C = n('MWbm'),
        I = n('P2xQ'),
        A = n('fs1G'),
        U = n('0zXz'),
        M = y.a.a9fd20be,
        k = y.a.i2b9632d
      function R(e) {
        return (
          Object(T.a)(function () {
            var t = e.action,
              n = e.addToast,
              r = e.block,
              o = e.canGoBack,
              i = e.createLocalApiErrorHandler,
              c = e.history,
              s = e.mute,
              u = e.reportedScreenName,
              d = e.reportedUserId
            o
              ? (d && 'mute' === t
                  ? s(d).then(function () {
                      var t, r
                      n({
                        action: {
                          label: E.a,
                          onAction:
                            ((t = d),
                            (r = u),
                            function () {
                              var n = e.addToast,
                                o = e.createLocalApiErrorHandler
                              ;(0, e.unmute)(t).then(function () {
                                n({ text: Object(I.d)(r) })
                              }, o({ showToast: !0 }))
                            }),
                        },
                        text: Object(I.b)(u),
                      })
                    }, i({ showToast: !0 }))
                  : d &&
                    'block' === t &&
                    r(d).then(function () {
                      var t
                      n({
                        action: {
                          label: E.a,
                          onAction:
                            ((t = d),
                            function () {
                              var n = e.addToast,
                                r = e.createLocalApiErrorHandler
                              ;(0, e.unblock)(t).then(function () {
                                n({ text: k })
                              }, r(w.a))
                            }),
                        },
                        text: M,
                      })
                    }, i(a.a)),
                c.goBackThroughModals())
              : c.push('/')
          }),
          o.a.createElement(
            C.a,
            { style: D.root },
            o.a.createElement(b.a, { fetchStatus: v.a.LOADING, onRequestRetry: A.a, render: U.a, retryable: !1 }),
          )
        )
      }
      var D = g.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        }),
        S = _(R)
      t.default = S
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var r = n('AQ79'),
        o = function (e, t) {
          return e[r.c] ? e[r.c].conversations[t] : null
        }
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'o', function () {
        return s
      }),
        n.d(t, 'n', function () {
          return u
        }),
        n.d(t, 'm', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return l
        }),
        n.d(t, 'd', function () {
          return p
        }),
        n.d(t, 'i', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return f
        }),
        n.d(t, 'l', function () {
          return _
        }),
        n.d(t, 'g', function () {
          return v
        }),
        n.d(t, 'j', function () {
          return b
        }),
        n.d(t, 'h', function () {
          return h
        }),
        n.d(t, 'f', function () {
          return y
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return w
        }),
        n.d(t, 'e', function () {
          return E
        })
      n('vfdX'), n('z84I'), n('ho0z')
      var r = n('CDB5'),
        o = n('Myq3'),
        a = n('XnpN'),
        i = n('AQ79'),
        c = n('pHkl'),
        s = function (e, t) {
          return t.location && t.location.state && t.location.state.tweetAttachment
        },
        u = function (e, t) {
          return t.location && t.location.state && t.location.state.participants
        },
        d = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        l = function (e) {
          var t = e.message_data,
            n = c.f.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = c.f.TWEET)
              : r.photo
              ? (n = c.f.PHOTO)
              : r.animated_gif
              ? (n = c.f.GIF)
              : r.video
              ? (n = r.video.audio_only ? c.f.VOICE : c.f.VIDEO)
              : r.card
              ? (n = c.f.CARD)
              : null != t && t.text && (n = c.f.TEXT),
            n
          )
        }
      function p(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function m(e) {
        return e === i.d.SECONDARY ? c.e.REQUESTS : e === i.d.TERTIARY ? c.e.LOW_QUALITY : c.e.PRIMARY
      }
      function f(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function _(e, t) {
        return !!(e && e.video && f(t)) && !!e.video.audio_only
      }
      function v(e, t, n, r) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: r, scribeNamespace: n },
        }
      }
      function b(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(a.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var h = function (e) {
          return e === i.d.TERTIARY
            ? 'low_quality_timeline'
            : e === i.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        y = function (e) {
          return e === i.d.TERTIARY
            ? '/messages/requests/additional'
            : e === i.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        g = function (e) {
          return function () {
            return r.b(e)
          }
        },
        w = function (e) {
          return function (t) {
            return r.c(e, t)
          }
        },
        E = function (e, t) {
          var n = Object(o.a)(e, function (e) {
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
        o = n.n(r),
        a = n('ddV6'),
        i = n.n(a),
        c = (n('2G9S'), n('tQbP'), n('aWyx')),
        s = (n('6U7i'), n('LW0h'), n('7x/C'), n('z84I'), n('t0aI')),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        d = function (e, t) {
          return u(e.join_time) - u(t.join_time)
        },
        l = function (e, t) {
          var n = e.user,
            r = t.user
          return Object(s.a)(n.id_str, r.id_str)
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
                  o = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case o.id_str:
                    return 1
                  default:
                    return 0
                }
              }
            })(e),
            d,
            l,
          )
        },
        m = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          a = e.type,
          s = Object(m.a)(r, function (e) {
            return e.user.id_str === t
          }),
          u = i()(s, 2),
          d = u[0],
          l = u[1]
        return l.length ? (a === c.a.GROUP && 1 === l.length ? [].concat(o()(d), o()(l)) : n ? l.sort(p(n)) : l) : d
      }
    },
  },
])
//# sourceMappingURL=WIPED
