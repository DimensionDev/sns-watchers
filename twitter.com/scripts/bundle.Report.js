;(window.webpackJsonp = window.webpackJsonp || []).push([
  [83],
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
          return B
        }),
        n.d(t, 'h', function () {
          return G
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
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
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
        g = n('Ssj5'),
        w = n('fEA7'),
        y = n.n(w),
        E = n('uKEd'),
        T = n('lnti'),
        C = n('/NU0'),
        A = [
          'senderId',
          'cardUrl',
          'conversationId',
          'localMediaId',
          'recipients',
          'requestId',
          'tweetAttachment',
          'quickReply',
        ],
        I = 'dmComposer',
        M = {}
      var U = function (e) {
          var t = e.conversation_id,
            n = e.id,
            r = e.localMediaId,
            a = e.recipient_ids,
            o = e.sender_id,
            i = e.text,
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
            message_data: { attachment: s, localMediaId: r, sender_id: o, text: i, time: d },
            type: 'message',
            time: d,
          }
        },
        k = function (e) {
          return function (t, n, r) {
            var o = r.api,
              c = e || {},
              u = c.senderId,
              d = c.cardUrl,
              l = c.conversationId,
              g = c.localMediaId,
              w = c.recipients,
              I = void 0 === w ? [] : w,
              M = c.requestId,
              k = void 0 === M ? y.a.v1() : M,
              R = c.tweetAttachment,
              D = c.quickReply,
              S = s()(c, A)
            t(Z(l))
            var O = n(),
              x = g || H(n(), l),
              L = m.k(O, x),
              N = i()(L, 1)[0] || {},
              P = N.mediaFile,
              F = N.mediaMetadata,
              q = I.length > 0 && I.join(','),
              B = {}
            P && P.isGif
              ? (B.extraInitParams = '&media_category=dm_gif')
              : P && P.isVideo && (B.extraInitParams = '&media_category=dm_video')
            var W = m.p(x, B),
              V = [t(W)],
              X = (G(O, l) || {}).found_media_origin
            return (
              P && P.isGif && V.push(Object(b.a)(P)),
              Promise.all(V).then(
                function (n) {
                  var r = i()(n, 2),
                    c = i()(r[0], 1)[0],
                    s = r[1],
                    b = (null == F ? void 0 : F.altText) || (null == F ? void 0 : F.defaultAltText),
                    g = !!b
                  return (
                    c && (X || g)
                      ? t(m.m(p()({ media_id: c.uploadId, found_media_origin: X }, !!g && { alt_text: { text: b } })))
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
                      var g = (c || {}).uploadId,
                        w = U({
                          attachment: r,
                          conversation_id: l,
                          id: k,
                          recipient_ids: q,
                          sender_id: u,
                          text: e.text,
                        }),
                        y = p()(
                          p()(
                            p()(p()({}, S), Object(h.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: l },
                            !n && { media_id: g },
                          ),
                          {},
                          { recipient_ids: q, request_id: k, tweet_id: n },
                        )
                      D &&
                        ((y['quick_reply_response[options][id]'] = D.id),
                        (y['quick_reply_response[options][selected_id]'] = D.selected_id))
                      var A = Object(T.a)([
                        ee(l),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        l && Object(E.b)(l, k, w),
                      ])
                      return (
                        t(A),
                        o.DirectMessages.sendMessage(y).then(
                          function (n) {
                            var r = n.entities,
                              o = r.cards,
                              i = r.entries,
                              c = r.tweets,
                              s = r.users,
                              u = n.result.conversations
                            Object(C.a)(x) && t(z(l, x))
                            var d = Object(T.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                a()(Object(f.a)({ conversations: u, entries: i, users: s, tweets: c, cards: o })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, l && Object(E.j)(l, k, e), j(l)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var a = U({
                                attachment: r,
                                conversation_id: l,
                                error: !0,
                                id: k,
                                localMediaId: x,
                                recipient_ids: q,
                                sender_id: u,
                                text: e.text,
                              }),
                              o = Object(T.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                l && Object(E.b)(l, k, a),
                              ])
                            return t(o), Object(_.e)(t, n, 'ACTION_SEND_DM')
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
        B = function (e, t) {
          return m.l(e, H(e, t))
        },
        G = function (e, t) {
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
      g.a.register(
        d()({}, I, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
            t = arguments.length > 1 ? arguments[1] : void 0,
            n = t.conversationId || 'new_group'
          switch (t.type) {
            case W:
              var r = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, r), t.payload)))
            case J:
              var a = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, a), {}, { isUploading: !0 })))
            case X:
              var o = e[n] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return p()(p()({}, e), {}, d()({}, n, p()(p()({}, o), {}, { isUploading: !1 })))
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
          return Ie
        })
      var r = n('yiKp'),
        a = n.n(r),
        o = n('VrFO'),
        i = n.n(o),
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
        g = n('EbOo'),
        w = (n('WNMA'), n('RqPI')),
        y = n('1YZw'),
        E = n('aWyx'),
        T = n('MMRb'),
        C = n('kHBp'),
        A = n('lPpt'),
        I = n('Fg8X'),
        M = n('0pUJ'),
        U = n('Fmkq'),
        k = n('QK5w'),
        R = n('V5Qi'),
        D = n('XOJV'),
        S = n('G6rE'),
        O = n('rxPX'),
        x = n('0KEI'),
        j = n('fz3c'),
        L = function (e, t) {
          return t.location && t.location.state && t.location.state.clientReferer
        },
        N = function (e, t) {
          return t.location && t.location.state && t.location.state.inboxType
        },
        P = function (e, t) {
          return t.location && t.location.state && t.location.state.scribeNamespace
        },
        H = function (e, t) {
          return !!(t.location && t.location.state && t.location.state.isMedia) || !1
        },
        F = function (e, t) {
          return t.location && t.location.state && t.location.state.promotedContent
        },
        q = function (e, t) {
          return t.location && t.location.state && t.location.state.conversationSection
        },
        B = function (e, t) {
          return Object(j.e)(G(e, t))
        },
        G = function (e, t) {
          return t.match.params.reportType
        },
        W = function (e, t) {
          return t.match.params.reportedId
        },
        V = function (e, t) {
          var n = G(e, t),
            r = W(0, t)
          switch (n) {
            case j.a.Tweet:
            case j.a.AppealTweetWarning:
            case j.a.HideCommunityTweet:
            case j.a.RemoveCommunityMember:
              return D.a.selectHydrated(e, r)
            default:
              return
          }
        },
        X = function (e, t) {
          var n = G(e, t) === j.a.User ? W(0, t) : void 0
          return n ? S.e.select(e, n) : void 0
        },
        Q = function (e, t) {
          var n,
            r = G(e, t)
          if (
            ((r !== j.a.DMConversation && r !== j.a.DMMessage) ||
              (n = r === j.a.DMConversation ? W(0, t) : t.location.state ? t.location.state.conversationId : void 0),
            n)
          ) {
            var a = Object(R.a)(e, n),
              o = (function (e, t) {
                return w.q(e)
              })(e)
            return K(a, o)
          }
        },
        K = function (e, t) {
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
        Y = function (e, t) {
          return G(e, t) === j.a.Moment ? I.a.select(e, W(0, t)) : void 0
        },
        z = function (e, t) {
          var n = G(e, t) === j.a.List ? W(0, t) : void 0
          return n ? C.a.select(e, n) : void 0
        },
        J = function (e, t) {
          var n = G(e, t) === j.a.Moment ? W(0, t) : void 0
          return n ? A.a.select(e, n) : void 0
        },
        Z = Object(O.a)()
          .propsFromState(function () {
            return {
              canGoBack: k.a,
              clientReferer: L,
              dmConversation: Q,
              reportedId: W,
              inboxType: N,
              isMedia: H,
              lang: w.o,
              liveEvent: J,
              moment: Y,
              list: z,
              promotedContent: F,
              conversationSection: q,
              reportType: G,
              reportSource: B,
              scribeNamespace: P,
              tweet: V,
              user: X,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: y.b,
              block: S.e.block,
              createLocalApiErrorHandler: Object(x.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              fetchUpdates: T.fetchUpdates,
              mute: M.a,
              markTweetAsReported: D.a.markAsReported,
              markTweetsAsRemovedFromCommunity: D.a.markTweetsAsRemovedFromCommunity,
              richScribeAction: U.richScribeAction,
              unblock: S.e.unblock,
              unfollow: S.e.unfollow,
              unmute: S.e.unmute,
            }
          }),
        $ = n('jHSc'),
        ee = n('qzfk'),
        te = n('X/yg'),
        ne = n('3XMw'),
        re = n.n(ne),
        ae = n('tn7R'),
        oe = n('SrIh'),
        ie =
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
        ce = n('Rp9C'),
        se = n('X04g'),
        ue = n('u0B7'),
        de = n('1bnC'),
        le = n('tJZD'),
        pe = n('fEA7'),
        me = n.n(pe),
        fe = n('v6aA'),
        _e = n('/yvb'),
        ve = n('bPFD'),
        be = n('rHpw'),
        he = n('P2xQ'),
        ge = re.a.f1824804,
        we = re.a.h030c24b,
        ye = re.a.c3e6226a,
        Ee = re.a.a9fd20be,
        Te = re.a.i2b9632d,
        Ce = re.a.b772cd65,
        Ae = 'https://twitter.com',
        Ie = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e, r) {
            var a
            return (
              i()(this, n),
              (a = t.call(this, e, r)),
              v()(d()(a), '_renderDoneButton', function () {
                return a.state.isDone
                  ? h.a.createElement(_e.a, { onPress: a._handleDone, size: 'xSmall', type: 'primaryFilled' }, Ce)
                  : void 0
              }),
              v()(d()(a), '_handleDone', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  n = e.fetchUpdates,
                  r = e.history,
                  o = e.inboxType,
                  i = e.reportType
                switch ((a._scribeAction('done'), i)) {
                  case j.a.DMConversation:
                  case j.a.DMMessage:
                    r.replace(Object(te.e)(o)), n().catch(t({}))
                    break
                  default:
                    a._goBack()
                }
              }),
              v()(d()(a), '_goBack', function () {
                var e = a.props.history,
                  t = Math.min(-1, a._initialHistoryLength - window.history.length - 1)
                e.go(t)
              }),
              v()(d()(a), '_handleBack', function () {
                a.props.history.goBack()
              }),
              v()(d()(a), '_handleCancel', function () {
                a._goBack()
              }),
              v()(d()(a), '_handleUndoBlock', function (e) {
                return function () {
                  var t = a.props,
                    n = t.addToast,
                    r = t.createLocalApiErrorHandler,
                    o = t.promotedContent
                  ;(0, t.unblock)(e, { promotedContent: o }).then(function () {
                    n({ text: Te })
                  }, r(ue.a))
                }
              }),
              v()(d()(a), '_handleUndoMute', function (e, t) {
                return function () {
                  var n = a.props,
                    r = n.addToast,
                    o = n.createLocalApiErrorHandler
                  ;(0, n.unmute)(e).then(function () {
                    r({ text: Object(he.d)(t) })
                  }, o({ showToast: !0 }))
                }
              }),
              v()(d()(a), '_getReportTitle', function () {
                switch (a.props.reportType) {
                  case j.a.AppealTweetWarning:
                    return ge
                  case j.a.RemoveCommunityMember:
                    return ye
                  default:
                    return we
                }
              }),
              v()(d()(a), '_getReportedTweetId', function () {
                var e = a.props,
                  t = e.liveEvent,
                  n = e.moment,
                  r = e.reportType,
                  o = e.tweet
                switch (r) {
                  case j.a.Moment:
                    var i = (t ? Object(ae.a)(t.slates) : []).find(function (e) {
                      return e.tweet_id
                    })
                    return i ? i.tweet_id : n && n.cover_media && n.cover_media.tweet_id
                  case j.a.AppealTweetWarning:
                  case j.a.HideCommunityTweet:
                  case j.a.RemoveCommunityMember:
                  case j.a.Tweet:
                    return o && o.id_str
                  default:
                    return
                }
              }),
              v()(d()(a), '_getReportedUserId', function (e) {
                var t = a.props,
                  n = t.dmConversation,
                  r = t.list,
                  o = t.liveEvent,
                  i = t.moment,
                  c = t.reportType,
                  s = t.tweet,
                  u = t.user
                switch (c) {
                  case j.a.DMConversation:
                  case j.a.DMMessage:
                    return e && e.data && n && '0' === n.reportedUserId
                      ? e.data.reported_user_id
                      : n && n.reportedUserId
                  case j.a.Moment:
                    return (o && o.liveEventDetails.attribution_user_id) || (i && i.author && i.author.id)
                  case j.a.User:
                    return u && u.id_str
                  case j.a.List:
                    return r && r.user
                  case j.a.AppealTweetWarning:
                  case j.a.HideCommunityTweet:
                  case j.a.RemoveCommunityMember:
                  case j.a.Tweet:
                    return s && s.user.id_str
                  default:
                    return void Object(oe.a)('Unknown report type '.concat(c))
                }
              }),
              v()(d()(a), '_getReportedUserScreenName', function (e) {
                var t = a.props,
                  n = t.liveEvent,
                  r = t.moment,
                  o = t.reportType,
                  i = t.tweet,
                  c = t.user
                switch (o) {
                  case j.a.Moment:
                    var s,
                      u = null == n ? void 0 : n.liveEventDetails.attribution_user_id,
                      d = u ? (null == n || null === (s = n.users) || void 0 === s ? void 0 : s[u]) : void 0
                    if (d) return null == d ? void 0 : d.screen_name
                    if (r && r.author) return r.author.screen_name
                    break
                  case j.a.Tweet:
                    return null == i ? void 0 : i.user.screen_name
                  case j.a.User:
                    return null == c ? void 0 : c.screen_name
                }
              }),
              v()(d()(a), '_getCommunityId', function () {
                var e = a.props,
                  t = e.reportType,
                  n = e.tweet
                switch (t) {
                  case j.a.RemoveCommunityMember:
                    return null == n ? void 0 : n.community_id_str
                }
              }),
              v()(d()(a), '_getReportUrl', function () {
                var e = a.props,
                  t = e.clientReferer,
                  n = e.conversationSection,
                  r = e.dmConversation,
                  o = e.isMedia,
                  i = e.lang,
                  c = e.list,
                  s = e.liveEvent,
                  u = e.moment,
                  d = e.promotedContent,
                  l = e.reportSource,
                  p = e.reportType,
                  m = e.reportedId,
                  f = e.scribeNamespace,
                  _ = p === j.a.DMConversation,
                  v = p === j.a.DMMessage,
                  b = p === j.a.Moment,
                  h = p === j.a.List,
                  g = a.context.featureSwitches.isTrue('responsive_web_add_impression_id_to_mute_engagement_enabled'),
                  w = {
                    client_location: [
                      null == f ? void 0 : f.page,
                      null == f ? void 0 : f.section,
                      null == f ? void 0 : f.component,
                    ].join(':'),
                    client_referer: t,
                    client_app_id: Object(ee.a)().clientAppId,
                    conversation_section: n,
                    source: l,
                    report_flow_id: a._reportFlowId,
                    reported_user_id: a._getReportedUserId(),
                    reported_tweet_id: a._getReportedTweetId(),
                    reported_direct_message_conversation_id: (v || _) && r && r.conversationId,
                    reported_direct_message_id: v && m,
                    reported_moment_id: b ? (s && s.liveEventDetails.id) || (u && u.id_str) : void 0,
                    reported_list_id: h ? c && c.id_str : void 0,
                    is_promoted: !!d,
                    impression_id: g ? (null == d ? void 0 : d.impression_id) : void 0,
                    is_media: o,
                    initiated_in_app: '1',
                    lang: i,
                    community_id: a._getCommunityId(),
                  },
                  y = Object.keys(w)
                    .filter(function (e) {
                      return !!w[e]
                    })
                    .map(function (e) {
                      return ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(w[e]))
                    })
                    .join('&')
                return ''.concat(Ae, '/i/safety/report_story?').concat(y)
              }),
              v()(d()(a), '_messageHandler', function (e) {
                var t = a.props,
                  n = t.addToast,
                  r = t.markTweetAsReported,
                  o = t.markTweetsAsRemovedFromCommunity,
                  i = t.reportSource
                if (e.origin === Ae && 'ReportAction' === e.data.type) {
                  var c = a.props,
                    s = c.block,
                    u = c.createLocalApiErrorHandler,
                    d = c.mute,
                    l = c.promotedContent,
                    p = c.unfollow,
                    m = a._getReportedUserId(e)
                  switch (e.data.action) {
                    case 'block':
                      m &&
                        s(m, { promotedContent: l }).then(function () {
                          n({ action: { label: de.a, onAction: a._handleUndoBlock(m) }, text: Ee })
                        }, u(g.a))
                      break
                    case 'unfollow':
                      m && p(m, { promotedContent: l }).catch(u(le.a))
                      break
                    case 'mute':
                      m &&
                        d(m).then(function () {
                          var t = a._getReportedUserScreenName(e)
                          n({ action: { label: de.a, onAction: a._handleUndoMute(m, t) }, text: Object(he.b)(t) })
                        }, u({ showToast: !0 }))
                      break
                    case 'complete':
                      a.setState({ isDone: !0 })
                      var f = a._getReportedTweetId()
                      f &&
                        (i === ie.Tweet && r(f, j.b.Tombstone),
                        i === ie.HideCommunityTweet && r(f, j.b.HiddenCommunityTweet),
                        i === ie.RemoveCommunityMember && o(f))
                      break
                    case 'error':
                      a.setState({ isDone: !0 })
                      break
                    case 'cancel':
                      a._handleCancel()
                  }
                }
              }),
              (a.state = { isDone: !1 }),
              (a._accessedDirectly = a._wasAccessedDirectly()),
              (a._reportFlowId = me.a.v4()),
              (a._reportUrl = a._accessedDirectly ? '' : a._getReportUrl()),
              (a._initialHistoryLength = window.history.length),
              a
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
                        $.b,
                        {
                          backButtonType: t ? 'close' : 'back',
                          history: e,
                          onBackClick: t ? this._handleDone : this._handleBack,
                          rightControl: this._renderDoneButton(),
                          title: this._getReportTitle(),
                        },
                        h.a.createElement(ve.a, { allowForms: !0, src: this._reportUrl, style: be.a.absoluteFill }),
                      )
                },
              },
              {
                key: '_wasAccessedDirectly',
                value: function () {
                  var e = this.props,
                    t = e.canGoBack,
                    n = e.dmConversation,
                    r = e.list,
                    a = e.liveEvent,
                    o = e.moment,
                    i = e.reportType,
                    c = e.reportedId,
                    s = e.scribeNamespace,
                    u = e.tweet,
                    d = e.user,
                    l = a && a.liveEventDetails.attribution_user_id
                  return (
                    !t ||
                    !s ||
                    (i === j.a.AppealTweetWarning && !u) ||
                    (i === j.a.HideCommunityTweet && !u) ||
                    (i === j.a.RemoveCommunityMember && !u) ||
                    (i === j.a.Tweet && !u) ||
                    (i === j.a.User && !d) ||
                    (i === j.a.DMConversation && !n) ||
                    (i === j.a.DMMessage && (!c || !n)) ||
                    (i === j.a.Moment && !o && !l) ||
                    (i === j.a.List && !r)
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
                    case j.a.AppealTweetWarning:
                      e = 'appeal_tweet_warning'
                      break
                    case j.a.DMConversation:
                      e = 'report_dm_conversation'
                      break
                    case j.a.Moment:
                      e = 'report_moment'
                      break
                    case j.a.Tweet:
                      e = 'report_tweet'
                      break
                    case j.a.User:
                      e = 'report_user'
                  }
                  return (this._scribeNamespace = a()(a()({}, r), {}, { element: e })), this._scribeNamespace
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
                    a = e.tweet,
                    o = e.user
                  if (n === j.a.Tweet || n === j.a.AppealTweetWarning)
                    this._scribeData = {
                      associations: v()({}, se.a.AssociationType.ASSOCIATED_TWEET, {
                        association_id: a && a.id_str,
                        association_namespace: { page: null == r ? void 0 : r.page },
                      }),
                      promoted: !!t,
                      items: a ? [ce.a.forTweet(a)] : [],
                    }
                  else if (n === j.a.User) {
                    var i = o ? [ce.a.forUser(o.id_str)] : []
                    this._scribeData = {
                      associations: v()({}, se.a.AssociationType.ASSOCIATED_USER, { association_id: o && o.id_str }),
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
                    n = a()(
                      a()({}, this._getScribeData()),
                      {},
                      { report_details: { report_flow_id: this._reportFlowId } },
                    )
                  t(a()(a()({}, this._getScribeNamespace()), {}, { action: e }), n)
                },
              },
            ]),
            n
          )
        })(h.a.Component)
      v()(Ie, 'defaultProps', {
        addMessageListener: function (e) {
          return window.addEventListener('message', e)
        },
        isMedia: !1,
        removeMessageListener: function (e) {
          return window.removeEventListener('message', e)
        },
      }),
        v()(Ie, 'contextType', fe.a)
      var Me = Z(Ie)
      t.default = Me
    },
    LqVV: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'ReportFlowComplete', function () {
          return k
        })
      var r = n('ERkP'),
        a = n.n(r),
        o = n('EbOo'),
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
        g = n.n(h),
        w = n('rHpw'),
        y = n('u0B7'),
        E = n('1bnC'),
        T = n('MWbm'),
        C = n('P2xQ'),
        A = n('fs1G'),
        I = n('0zXz'),
        M = g.a.a9fd20be,
        U = g.a.i2b9632d
      function k(e) {
        return (
          a.a.useEffect(function () {
            var t = e.action,
              n = e.addToast,
              r = e.block,
              a = e.canGoBack,
              i = e.createLocalApiErrorHandler,
              c = e.history,
              s = e.mute,
              u = e.reportedScreenName,
              d = e.reportedUserId
            a
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
                                a = e.createLocalApiErrorHandler
                              ;(0, e.unmute)(t).then(function () {
                                n({ text: Object(C.d)(r) })
                              }, a({ showToast: !0 }))
                            }),
                        },
                        text: Object(C.b)(u),
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
                                n({ text: U })
                              }, r(y.a))
                            }),
                        },
                        text: M,
                      })
                    }, i(o.a)),
                c.goBackThroughModals())
              : c.push('/')
          }, []),
          a.a.createElement(
            T.a,
            { style: R.root },
            a.a.createElement(b.a, { fetchStatus: v.a.LOADING, onRequestRetry: A.a, render: I.a, retryable: !1 }),
          )
        )
      }
      var R = w.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        }),
        D = _(k)
      t.default = D
    },
    V5Qi: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return a
      })
      var r = n('AQ79'),
        a = function (e, t) {
          return e[r.c] ? e[r.c].conversations[t] : null
        }
    },
    'X/yg': function (e, t, n) {
      'use strict'
      n.d(t, 'n', function () {
        return s
      }),
        n.d(t, 'm', function () {
          return u
        }),
        n.d(t, 'l', function () {
          return d
        }),
        n.d(t, 'c', function () {
          return l
        }),
        n.d(t, 'h', function () {
          return p
        }),
        n.d(t, 'j', function () {
          return m
        }),
        n.d(t, 'k', function () {
          return f
        }),
        n.d(t, 'f', function () {
          return _
        }),
        n.d(t, 'i', function () {
          return v
        }),
        n.d(t, 'g', function () {
          return b
        }),
        n.d(t, 'e', function () {
          return h
        }),
        n.d(t, 'a', function () {
          return g
        }),
        n.d(t, 'b', function () {
          return w
        }),
        n.d(t, 'd', function () {
          return y
        })
      n('z84I'), n('ho0z')
      var r = n('CDB5'),
        a = n('Myq3'),
        o = n('XnpN'),
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
            n = c.d.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = c.d.TWEET)
              : r.photo
              ? (n = c.d.PHOTO)
              : r.animated_gif
              ? (n = c.d.GIF)
              : r.video
              ? (n = r.video.audio_only ? c.d.VOICE : c.d.VIDEO)
              : r.card
              ? (n = c.d.CARD)
              : null != t && t.text && (n = c.d.TEXT),
            n
          )
        }
      function p(e) {
        return e === i.d.SECONDARY ? c.c.REQUESTS : e === i.d.TERTIARY ? c.c.LOW_QUALITY : c.c.PRIMARY
      }
      function m(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function f(e, t) {
        return !!(e && e.video && m(t)) && !!e.video.audio_only
      }
      function _(e, t, n, r) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: r, scribeNamespace: n },
        }
      }
      function v(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(o.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var b = function (e) {
          return e === i.d.TERTIARY
            ? 'low_quality_timeline'
            : e === i.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        h = function (e) {
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
        y = function (e, t) {
          var n = Object(a.a)(e, function (e) {
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
        a = n.n(r),
        o = n('ddV6'),
        i = n.n(o),
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
                  a = n.user
                switch (e) {
                  case r.id_str:
                    return -1
                  case a.id_str:
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
        m = n('tn7R'),
        f = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          o = e.type,
          s = Object(m.a)(r),
          u = Object(f.a)(s, function (e) {
            return e.user.id_str === t
          }),
          d = i()(u, 2),
          l = d[0],
          _ = d[1]
        return _.length ? (o === c.a.GROUP && 1 === _.length ? [].concat(a()(l), a()(_)) : n ? _.sort(p(n)) : _) : l
      }
    },
  },
])
//# sourceMappingURL=WIPED
