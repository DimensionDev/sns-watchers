;(window.webpackJsonp = window.webpackJsonp || []).push([
  [85],
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
              I = void 0 === g ? [] : g,
              M = c.requestId,
              k = void 0 === M ? w.a.v1() : M,
              R = c.tweetAttachment,
              D = c.quickReply,
              S = s()(c, A)
            t(Z(l))
            var O = n(),
              x = y || H(n(), l),
              L = m.k(O, x),
              N = i()(L, 1)[0] || {},
              P = N.mediaFile,
              F = N.mediaMetadata,
              q = I.length > 0 && I.join(','),
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
                        g = U({
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
                      var A = Object(T.a)([
                        ee(l),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        l && Object(E.b)(l, k, g),
                      ])
                      return (
                        t(A),
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
                            var o = U({
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
        d()({}, I, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : M,
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
          return Ie
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
        G = function (e, t) {
          return Object(j.e)(B(e, t))
        },
        B = function (e, t) {
          return t.match.params.reportType
        },
        W = function (e, t) {
          return t.match.params.reportedId
        },
        V = function (e, t) {
          var n = B(e, t),
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
          var n = B(e, t) === j.a.User ? W(0, t) : void 0
          return n ? S.e.select(e, n) : void 0
        },
        Q = function (e, t) {
          var n,
            r = B(e, t)
          if (
            ((r !== j.a.DMConversation && r !== j.a.DMMessage) ||
              (n = r === j.a.DMConversation ? W(0, t) : t.location.state ? t.location.state.conversationId : void 0),
            n)
          ) {
            var o = Object(R.a)(e, n),
              a = (function (e, t) {
                return g.q(e)
              })(e)
            return K(o, a)
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
          return B(e, t) === j.a.Moment ? I.a.select(e, W(0, t)) : void 0
        },
        z = function (e, t) {
          var n = B(e, t) === j.a.List ? W(0, t) : void 0
          return n ? C.a.select(e, n) : void 0
        },
        J = function (e, t) {
          var n = B(e, t) === j.a.Moment ? W(0, t) : void 0
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
              lang: g.o,
              liveEvent: J,
              moment: Y,
              list: z,
              promotedContent: F,
              conversationSection: q,
              reportType: B,
              reportSource: G,
              scribeNamespace: P,
              tweet: V,
              user: X,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: w.b,
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
        oe = n('tn7R'),
        ae = n('SrIh'),
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
        ye = re.a.f1824804,
        ge = re.a.h030c24b,
        we = re.a.c3e6226a,
        Ee = re.a.a9fd20be,
        Te = re.a.i2b9632d,
        Ce = re.a.b772cd65,
        Ae = 'https://twitter.com',
        Ie = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e, r) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              v()(d()(o), '_renderDoneButton', function () {
                return o.state.isDone
                  ? h.a.createElement(_e.a, { onPress: o._handleDone, size: 'xSmall', type: 'primaryFilled' }, Ce)
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
                  case j.a.DMConversation:
                  case j.a.DMMessage:
                    r.replace(Object(te.f)(a)), n().catch(t({}))
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
                    n({ text: Te })
                  }, r(ue.a))
                }
              }),
              v()(d()(o), '_handleUndoMute', function (e, t) {
                return function () {
                  var n = o.props,
                    r = n.addToast,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unmute)(e).then(function () {
                    r({ text: Object(he.d)(t) })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(d()(o), '_getReportTitle', function () {
                switch (o.props.reportType) {
                  case j.a.AppealTweetWarning:
                    return ye
                  case j.a.RemoveCommunityMember:
                    return we
                  default:
                    return ge
                }
              }),
              v()(d()(o), '_getReportedTweetId', function () {
                var e = o.props,
                  t = e.liveEvent,
                  n = e.moment,
                  r = e.reportType,
                  a = e.tweet
                switch (r) {
                  case j.a.Moment:
                    var i = (t ? Object(oe.a)(t.slates) : []).find(function (e) {
                      return e.tweet_id
                    })
                    return i ? i.tweet_id : n && n.cover_media && n.cover_media.tweet_id
                  case j.a.AppealTweetWarning:
                  case j.a.HideCommunityTweet:
                  case j.a.RemoveCommunityMember:
                  case j.a.Tweet:
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
                  s = t.tweet,
                  u = t.user
                switch (c) {
                  case j.a.DMConversation:
                  case j.a.DMMessage:
                    return e && e.data && n && '0' === n.reportedUserId
                      ? e.data.reported_user_id
                      : n && n.reportedUserId
                  case j.a.Moment:
                    return (a && a.liveEventDetails.attribution_user_id) || (i && i.author && i.author.id)
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
                    return void Object(ae.a)('Unknown report type '.concat(c))
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
              v()(d()(o), '_getCommunityId', function () {
                var e = o.props,
                  t = e.reportType,
                  n = e.tweet
                switch (t) {
                  case j.a.RemoveCommunityMember:
                    return null == n ? void 0 : n.community_id_str
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
                  _ = p === j.a.DMConversation,
                  v = p === j.a.DMMessage,
                  b = p === j.a.Moment,
                  h = p === j.a.List,
                  y = {
                    client_location: [
                      null == f ? void 0 : f.page,
                      null == f ? void 0 : f.section,
                      null == f ? void 0 : f.component,
                    ].join(':'),
                    client_referer: t,
                    client_app_id: Object(ee.a)().clientAppId,
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
                return ''.concat(Ae, '/i/safety/report_story?').concat(g)
              }),
              v()(d()(o), '_messageHandler', function (e) {
                var t = o.props,
                  n = t.addToast,
                  r = t.markTweetAsReported,
                  a = t.markTweetsAsRemovedFromCommunity,
                  i = t.reportSource
                if (e.origin === Ae && 'ReportAction' === e.data.type) {
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
                          n({ action: { label: de.a, onAction: o._handleUndoBlock(m) }, text: Ee })
                        }, u(y.a))
                      break
                    case 'unfollow':
                      m && p(m, { promotedContent: l }).catch(u(le.a))
                      break
                    case 'mute':
                      m &&
                        d(m).then(function () {
                          var t = o._getReportedUserScreenName(e)
                          n({ action: { label: de.a, onAction: o._handleUndoMute(m, t) }, text: Object(he.b)(t) })
                        }, u({ showToast: !0 }))
                      break
                    case 'complete':
                      o.setState({ isDone: !0 })
                      var f = o._getReportedTweetId()
                      f &&
                        (i === ie.Tweet && r(f, j.b.Tombstone),
                        i === ie.HideCommunityTweet && r(f, j.b.HiddenCommunityTweet),
                        i === ie.RemoveCommunityMember && a(f))
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
              (o._reportFlowId = me.a.v4()),
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
                    o = e.liveEvent,
                    a = e.moment,
                    i = e.reportType,
                    c = e.reportedId,
                    s = e.scribeNamespace,
                    u = e.tweet,
                    d = e.user,
                    l = o && o.liveEventDetails.attribution_user_id
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
                    (i === j.a.Moment && !a && !l) ||
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
                  if (n === j.a.Tweet || n === j.a.AppealTweetWarning)
                    this._scribeData = {
                      associations: v()({}, se.a.AssociationType.ASSOCIATED_TWEET, {
                        association_id: o && o.id_str,
                        association_namespace: { page: null == r ? void 0 : r.page },
                      }),
                      promoted: !!t,
                      items: o ? [ce.a.forTweet(o)] : [],
                    }
                  else if (n === j.a.User) {
                    var i = a ? [ce.a.forUser(a.id_str)] : []
                    this._scribeData = {
                      associations: v()({}, se.a.AssociationType.ASSOCIATED_USER, { association_id: a && a.id_str }),
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
        A = n('P2xQ'),
        I = n('fs1G'),
        M = n('0zXz'),
        U = y.a.a9fd20be,
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
                                n({ text: Object(A.d)(r) })
                              }, o({ showToast: !0 }))
                            }),
                        },
                        text: Object(A.b)(u),
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
                        text: U,
                      })
                    }, i(a.a)),
                c.goBackThroughModals())
              : c.push('/')
          }),
          o.a.createElement(
            C.a,
            { style: D.root },
            o.a.createElement(b.a, { fetchStatus: v.a.LOADING, onRequestRetry: I.a, render: M.a, retryable: !1 }),
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
            n = c.e.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = c.e.TWEET)
              : r.photo
              ? (n = c.e.PHOTO)
              : r.animated_gif
              ? (n = c.e.GIF)
              : r.video
              ? (n = r.video.audio_only ? c.e.VOICE : c.e.VIDEO)
              : r.card
              ? (n = c.e.CARD)
              : null != t && t.text && (n = c.e.TEXT),
            n
          )
        }
      function p(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function m(e) {
        return e === i.d.SECONDARY ? c.d.REQUESTS : e === i.d.TERTIARY ? c.d.LOW_QUALITY : c.d.PRIMARY
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
        m = n('tn7R'),
        f = n('VIKJ')
      t.a = function (e, t) {
        var n = e.created_by_user_id,
          r = e.participants,
          a = e.type,
          s = Object(m.a)(r),
          u = Object(f.a)(s, function (e) {
            return e.user.id_str === t
          }),
          d = i()(u, 2),
          l = d[0],
          _ = d[1]
        return _.length ? (a === c.a.GROUP && 1 === _.length ? [].concat(o()(l), o()(_)) : n ? _.sort(p(n)) : _) : l
      }
    },
  },
])
//# sourceMappingURL=WIPED
