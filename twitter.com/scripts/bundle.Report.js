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
        return M
      }),
        n.d(t, 'l', function () {
          return D
        }),
        n.d(t, 'f', function () {
          return x
        }),
        n.d(t, 'd', function () {
          return j
        }),
        n.d(t, 'g', function () {
          return L
        }),
        n.d(t, 'e', function () {
          return F
        }),
        n.d(t, 'i', function () {
          return P
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
        C = n('uKEd'),
        T = n('lnti'),
        E = n('/NU0'),
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
      var k = function (e) {
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
        M = function (e) {
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
              M = void 0 === U ? w.a.v1() : U,
              R = c.tweetAttachment,
              D = c.quickReply,
              S = s()(c, I)
            t(Z(l))
            var x = n(),
              O = y || H(n(), l),
              L = m.k(x, O),
              N = i()(L, 1)[0] || {},
              F = N.mediaFile,
              P = N.mediaMetadata,
              q = A.length > 0 && A.join(','),
              G = {}
            F && F.isGif
              ? (G.extraInitParams = '&media_category=dm_gif')
              : F && F.isVideo && (G.extraInitParams = '&media_category=dm_video')
            var W = m.p(O, G),
              V = [t(W)],
              X = (B(x, l) || {}).found_media_origin
            return (
              F && F.isGif && V.push(Object(b.a)(F)),
              Promise.all(V).then(
                function (n) {
                  var r = i()(n, 2),
                    c = i()(r[0], 1)[0],
                    s = r[1],
                    b = (null == P ? void 0 : P.altText) || (null == P ? void 0 : P.defaultAltText),
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
                        g = k({
                          attachment: r,
                          conversation_id: l,
                          id: M,
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
                          { recipient_ids: q, request_id: M, tweet_id: n },
                        )
                      D &&
                        ((w['quick_reply_response[options][id]'] = D.id),
                        (w['quick_reply_response[options][selected_id]'] = D.selected_id))
                      var I = Object(T.a)([
                        ee(l),
                        { type: v.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        l && Object(C.b)(l, M, g),
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
                            Object(E.a)(O) && t(z(l, O))
                            var d = Object(T.a)(
                              [{ type: v.c.SUCCESS }].concat(
                                o()(Object(f.a)({ conversations: u, entries: i, users: s, tweets: c, cards: a })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, l && Object(C.j)(l, M, e), j(l)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(n.entities.entries)[0].conversation_id)
                          },
                          function (n) {
                            var o = k({
                                attachment: r,
                                conversation_id: l,
                                error: !0,
                                id: M,
                                localMediaId: O,
                                recipient_ids: q,
                                sender_id: u,
                                text: e.text,
                              }),
                              a = Object(T.a)([
                                { type: v.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                l && Object(C.b)(l, M, o),
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
                  return t(Object(T.a)([Object(E.a)(O) && z(l, O), ne(l)])), Promise.reject(e)
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
        x = function (e, t) {
          return { type: S, conversationId: e, text: t }
        },
        O = 'rweb/dmComposer/REMOVE_TEXT',
        j = function (e) {
          return { type: O, conversationId: e }
        },
        L = function (e, t) {
          var n = R(e, t)
          return n ? n.cardUrl : null
        },
        N = 'rweb/dmComposer/SAVE_CARD_URL',
        F = function (e, t) {
          return { type: N, conversationId: e, cardUrl: t }
        },
        H = function (e, t) {
          var n = R(e, t)
          return n ? n.mediaId : null
        },
        P = function (e, t) {
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
        Y = 'rweb/dmComposer/REMOVE_MEDIA',
        K = function (e) {
          return { type: Y, conversationId: e }
        },
        z = function (e, t) {
          return function (n) {
            n(m.i(t)), n([Q(e), K(e)])
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
            case Y:
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
            case O:
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
          return Re
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
        C = n('aWyx'),
        T = n('Hw0q'),
        E = n('MMRb'),
        I = n('kHBp'),
        A = n('lPpt'),
        U = n('Fg8X'),
        k = n('0pUJ'),
        M = n('Fmkq'),
        R = n('QK5w'),
        D = n('V5Qi'),
        S = n('XOJV'),
        x = n('CxAY'),
        O = n('G6rE'),
        j = n('rxPX'),
        L = n('0KEI'),
        N = n('fz3c'),
        F = function (e, t) {
          return t.location && t.location.state && t.location.state.clientReferer
        },
        H = function (e, t) {
          return t.location && t.location.state && t.location.state.inboxType
        },
        P = function (e, t) {
          return t.location && t.location.state && t.location.state.scribeNamespace
        },
        q = function (e, t) {
          return !!(t.location && t.location.state && t.location.state.isMedia) || !1
        },
        G = function (e, t) {
          return t.location && t.location.state && t.location.state.promotedContent
        },
        B = function (e, t) {
          return t.location && t.location.state && t.location.state.conversationSection
        },
        W = function (e, t) {
          return t.location && t.location.query && Object(T.a)(t.location.query.community_id)
        },
        V = function (e, t) {
          return Object(N.e)(X(e, t))
        },
        X = function (e, t) {
          return t.match.params.reportType
        },
        Q = function (e, t) {
          return t.match.params.reportedId
        },
        Y = function (e, t) {
          var n = X(e, t),
            r = Q(0, t)
          switch (n) {
            case N.a.Tweet:
            case N.a.AppealTweetWarning:
            case N.a.HideCommunityTweet:
              return S.a.selectHydrated(e, r)
            default:
              return
          }
        },
        K = function (e, t) {
          var n = X(e, t) === N.a.User ? Q(0, t) : void 0
          return n ? O.e.select(e, n) : void 0
        },
        z = function (e, t) {
          var n,
            r = X(e, t)
          if (
            ((r !== N.a.DMConversation && r !== N.a.DMMessage) ||
              (n = r === N.a.DMConversation ? Q(0, t) : t.location.state ? t.location.state.conversationId : void 0),
            n)
          ) {
            var o = Object(D.a)(e, n),
              a = (function (e, t) {
                return g.r(e)
              })(e)
            return J(o, a)
          }
        },
        J = function (e, t) {
          var n
          if (e && e.data)
            return (
              (n =
                e.data.type === C.a.GROUP
                  ? '0'
                  : e.data.participants.filter(function (e) {
                      return e.user_id !== t
                    })[0].user_id),
              { conversationId: e.data.conversation_id, reportedUserId: n }
            )
        },
        Z = function (e, t) {
          return X(e, t) === N.a.Moment ? U.a.select(e, Q(0, t)) : void 0
        },
        $ = function (e, t) {
          var n = X(e, t) === N.a.List ? Q(0, t) : void 0
          return n ? I.a.select(e, n) : void 0
        },
        ee = function (e, t) {
          var n = X(e, t) === N.a.Moment ? Q(0, t) : void 0
          return n ? A.a.select(e, n) : void 0
        },
        te = Object(j.a)()
          .propsFromState(function () {
            return {
              canGoBack: R.a,
              clientReferer: F,
              communityId: W,
              dmConversation: z,
              reportedId: Q,
              inboxType: H,
              isMedia: q,
              lang: g.p,
              liveEvent: ee,
              moment: Z,
              list: $,
              promotedContent: G,
              conversationSection: B,
              reportType: X,
              reportSource: V,
              scribeNamespace: P,
              tweet: Y,
              user: K,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: w.b,
              block: O.e.block,
              createLocalApiErrorHandler: Object(L.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              fetchUpdates: E.fetchUpdates,
              mute: k.a,
              markTweetAsReported: S.a.markAsReported,
              markTweetsAsRemovedFromCommunity: S.a.markTweetsAsRemovedFromCommunity,
              markUserAsRemovedFromCommunity: x.b.markUserAsRemovedFromCommunity,
              richScribeAction: M.richScribeAction,
              unblock: O.e.unblock,
              unfollow: O.e.unfollow,
              unmute: O.e.unmute,
            }
          }),
        ne = n('jHSc'),
        re = n('qzfk'),
        oe = n('X/yg'),
        ae = n('3XMw'),
        ie = n.n(ae),
        ce = n('tn7R'),
        se = n('SrIh'),
        ue =
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
        de = n('Rp9C'),
        le = n('X04g'),
        pe = n('u0B7'),
        me = n('1bnC'),
        fe = n('tJZD'),
        _e = n('fEA7'),
        ve = n.n(_e),
        be = n('v6aA'),
        he = n('/yvb'),
        ye = n('bPFD'),
        ge = n('rHpw'),
        we = n('P2xQ'),
        Ce = ie.a.f1824804,
        Te = ie.a.h030c24b,
        Ee = ie.a.c3e6226a,
        Ie = ie.a.f20b040d,
        Ae = ie.a.a9fd20be,
        Ue = ie.a.i2b9632d,
        ke = ie.a.b772cd65,
        Me = 'https://twitter.com',
        Re = (function (e) {
          p()(n, e)
          var t = f()(n)
          function n(e, r) {
            var o
            return (
              i()(this, n),
              (o = t.call(this, e, r)),
              v()(d()(o), '_renderDoneButton', function () {
                return o.state.isDone
                  ? h.a.createElement(he.a, { onPress: o._handleDone, size: 'xSmall', type: 'primaryFilled' }, ke)
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
                  case N.a.DMConversation:
                  case N.a.DMMessage:
                    r.replace(Object(oe.f)(a)), n().catch(t({}))
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
                    n({ text: Ue })
                  }, r(pe.a))
                }
              }),
              v()(d()(o), '_handleUndoMute', function (e, t) {
                return function () {
                  var n = o.props,
                    r = n.addToast,
                    a = n.createLocalApiErrorHandler
                  ;(0, n.unmute)(e).then(function () {
                    r({ text: Object(we.d)(t) })
                  }, a({ showToast: !0 }))
                }
              }),
              v()(d()(o), '_getReportTitle', function () {
                switch (o.props.reportType) {
                  case N.a.AppealTweetWarning:
                    return Ce
                  case N.a.RemoveCommunityMember:
                    return Ee
                  case N.a.HideCommunityTweet:
                    return Ie
                  default:
                    return Te
                }
              }),
              v()(d()(o), '_getReportedTweetId', function () {
                var e = o.props,
                  t = e.liveEvent,
                  n = e.moment,
                  r = e.reportType,
                  a = e.tweet
                switch (r) {
                  case N.a.Moment:
                    var i = (t ? Object(ce.a)(t.slates) : []).find(function (e) {
                      return e.tweet_id
                    })
                    return i ? i.tweet_id : n && n.cover_media && n.cover_media.tweet_id
                  case N.a.AppealTweetWarning:
                  case N.a.HideCommunityTweet:
                  case N.a.Tweet:
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
                  case N.a.DMConversation:
                  case N.a.DMMessage:
                    return e && e.data && n && '0' === n.reportedUserId
                      ? e.data.reported_user_id
                      : n && n.reportedUserId
                  case N.a.Moment:
                    return (a && a.liveEventDetails.attribution_user_id) || (i && i.author && i.author.id)
                  case N.a.User:
                    return d && d.id_str
                  case N.a.List:
                    return r && r.user
                  case N.a.AppealTweetWarning:
                  case N.a.HideCommunityTweet:
                  case N.a.Tweet:
                    return u && u.user.id_str
                  case N.a.RemoveCommunityMember:
                    return s
                  default:
                    return void Object(se.a)('Unknown report type '.concat(c))
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
                  case N.a.Moment:
                    var s,
                      u = null == n ? void 0 : n.liveEventDetails.attribution_user_id,
                      d = u ? (null == n || null === (s = n.users) || void 0 === s ? void 0 : s[u]) : void 0
                    if (d) return null == d ? void 0 : d.screen_name
                    if (r && r.author) return r.author.screen_name
                    break
                  case N.a.Tweet:
                    return null == i ? void 0 : i.user.screen_name
                  case N.a.User:
                    return null == c ? void 0 : c.screen_name
                }
              }),
              v()(d()(o), '_getCommunityId', function () {
                var e = o.props,
                  t = e.communityId
                switch (e.reportType) {
                  case N.a.RemoveCommunityMember:
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
                  _ = p === N.a.DMConversation,
                  v = p === N.a.DMMessage,
                  b = p === N.a.Moment,
                  h = p === N.a.List,
                  y = {
                    client_location: [
                      null == f ? void 0 : f.page,
                      null == f ? void 0 : f.section,
                      null == f ? void 0 : f.component,
                    ].join(':'),
                    client_referer: t,
                    client_app_id: Object(re.a)().clientAppId,
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
                return ''.concat(Me, '/i/safety/report_story?').concat(g)
              }),
              v()(d()(o), '_messageHandler', function (e) {
                var t = o.props,
                  n = t.addToast,
                  r = t.markTweetAsReported,
                  a = t.markTweetsAsRemovedFromCommunity,
                  i = t.markUserAsRemovedFromCommunity,
                  c = t.reportSource
                if (e.origin === Me && 'ReportAction' === e.data.type) {
                  var s = o.props,
                    u = s.block,
                    d = s.createLocalApiErrorHandler,
                    l = s.mute,
                    p = s.promotedContent,
                    m = s.unfollow,
                    f = o._getReportedUserId(e)
                  switch (e.data.action) {
                    case 'block':
                      f &&
                        u(f, { promotedContent: p }).then(function () {
                          n({ action: { label: me.a, onAction: o._handleUndoBlock(f) }, text: Ae })
                        }, d(y.a))
                      break
                    case 'unfollow':
                      f && m(f, { promotedContent: p }).catch(d(fe.a))
                      break
                    case 'mute':
                      f &&
                        l(f).then(function () {
                          var t = o._getReportedUserScreenName(e)
                          n({ action: { label: me.a, onAction: o._handleUndoMute(f, t) }, text: Object(we.b)(t) })
                        }, d({ showToast: !0 }))
                      break
                    case 'complete':
                      o.setState({ isDone: !0 })
                      var _ = o._getReportedTweetId()
                      if (
                        (_ &&
                          (c === ue.Tweet && r(_, N.b.Tombstone),
                          c === ue.HideCommunityTweet && r(_, N.b.HiddenCommunityTweet)),
                        c === ue.RemoveCommunityMember)
                      ) {
                        var v = o._getReportedUserId(),
                          b = o._getCommunityId()
                        v && b && (a(v, b), i(''.concat(b, '_').concat(v)))
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
              (o._reportFlowId = ve.a.v4()),
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
                        ne.b,
                        {
                          backButtonType: t ? 'close' : 'back',
                          history: e,
                          onBackClick: t ? this._handleDone : this._handleBack,
                          rightControl: this._renderDoneButton(),
                          title: this._getReportTitle(),
                        },
                        h.a.createElement(ye.a, { allowForms: !0, src: this._reportUrl, style: ge.a.absoluteFill }),
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
                    (c === N.a.AppealTweetWarning && !d) ||
                    (c === N.a.HideCommunityTweet && !d) ||
                    (c === N.a.RemoveCommunityMember && !n && !s) ||
                    (c === N.a.Tweet && !d) ||
                    (c === N.a.User && !l) ||
                    (c === N.a.DMConversation && !r) ||
                    (c === N.a.DMMessage && (!s || !r)) ||
                    (c === N.a.Moment && !i && !p) ||
                    (c === N.a.List && !o)
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
                    case N.a.AppealTweetWarning:
                      e = 'appeal_tweet_warning'
                      break
                    case N.a.DMConversation:
                      e = 'report_dm_conversation'
                      break
                    case N.a.Moment:
                      e = 'report_moment'
                      break
                    case N.a.Tweet:
                      e = 'report_tweet'
                      break
                    case N.a.User:
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
                  if (n === N.a.Tweet || n === N.a.AppealTweetWarning)
                    this._scribeData = {
                      associations: v()({}, le.a.AssociationType.ASSOCIATED_TWEET, {
                        association_id: o && o.id_str,
                        association_namespace: { page: null == r ? void 0 : r.page },
                      }),
                      promoted: !!t,
                      items: o ? [de.a.forTweet(o)] : [],
                    }
                  else if (n === N.a.User) {
                    var i = a ? [de.a.forUser(a.id_str)] : []
                    this._scribeData = {
                      associations: v()({}, le.a.AssociationType.ASSOCIATED_USER, { association_id: a && a.id_str }),
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
      v()(Re, 'defaultProps', {
        addMessageListener: function (e) {
          return window.addEventListener('message', e)
        },
        isMedia: !1,
        removeMessageListener: function (e) {
          return window.removeEventListener('message', e)
        },
      }),
        v()(Re, 'contextType', be.a)
      var De = te(Re)
      t.default = De
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
        C = n('1bnC'),
        T = n('FGLp'),
        E = n('MWbm'),
        I = n('P2xQ'),
        A = n('fs1G'),
        U = n('0zXz'),
        k = y.a.a9fd20be,
        M = y.a.i2b9632d
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
                          label: C.a,
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
                          label: C.a,
                          onAction:
                            ((t = d),
                            function () {
                              var n = e.addToast,
                                r = e.createLocalApiErrorHandler
                              ;(0, e.unblock)(t).then(function () {
                                n({ text: M })
                              }, r(w.a))
                            }),
                        },
                        text: k,
                      })
                    }, i(a.a)),
                c.goBackThroughModals())
              : c.push('/')
          }),
          o.a.createElement(
            E.a,
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
      n.d(t, 'p', function () {
        return d
      }),
        n.d(t, 'o', function () {
          return l
        }),
        n.d(t, 'n', function () {
          return p
        }),
        n.d(t, 'g', function () {
          return m
        }),
        n.d(t, 'c', function () {
          return f
        }),
        n.d(t, 'd', function () {
          return _
        }),
        n.d(t, 'j', function () {
          return v
        }),
        n.d(t, 'l', function () {
          return b
        }),
        n.d(t, 'm', function () {
          return h
        }),
        n.d(t, 'h', function () {
          return y
        }),
        n.d(t, 'k', function () {
          return g
        }),
        n.d(t, 'i', function () {
          return w
        }),
        n.d(t, 'f', function () {
          return C
        }),
        n.d(t, 'a', function () {
          return T
        }),
        n.d(t, 'b', function () {
          return E
        }),
        n.d(t, 'e', function () {
          return I
        })
      n('vrRf'), n('vfdX'), n('z84I'), n('ho0z')
      var r = n('CDB5'),
        o = n('Myq3'),
        a = n('XnpN'),
        i = n('gaV8'),
        c = n.n(i),
        s = n('AQ79'),
        u = n('pHkl'),
        d = function (e, t) {
          return t.location && t.location.state && t.location.state.tweetAttachment
        },
        l = function (e, t) {
          return t.location && t.location.state && t.location.state.participants
        },
        p = function (e, t) {
          return t.location && t.location.state && t.location.state.isNewGroupConversation
        },
        m = function (e, t) {
          if (e && t) {
            var n = c()(e),
              r = t.toLowerCase().indexOf(e.toLowerCase())
            return { startIndex: r, endIndex: r + n }
          }
          return { startIndex: -1, endIndex: -1 }
        },
        f = function (e) {
          var t = e.message_data,
            n = u.f.UNKNOWN,
            r = (t && t.attachment) || {}
          return (
            r.tweet
              ? (n = u.f.TWEET)
              : r.photo
              ? (n = u.f.PHOTO)
              : r.animated_gif
              ? (n = u.f.GIF)
              : r.video
              ? (n = r.video.audio_only ? u.f.VOICE : u.f.VIDEO)
              : r.card
              ? (n = u.f.CARD)
              : null != t && t.text && (n = u.f.TEXT),
            n
          )
        }
      function _(e, t) {
        return e.findIndex(function (e) {
          return e.id === t
        })
      }
      function v(e) {
        return e === s.d.SECONDARY ? u.e.REQUEST : e === s.d.TERTIARY ? u.e.LOW_QUALITY : u.e.PRIMARY
      }
      function b(e) {
        return e.isTrue('dm_voice_rendering_enabled')
      }
      function h(e, t) {
        return !!(e && e.video && b(t)) && !!e.video.audio_only
      }
      function y(e, t, n, r) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: r, scribeNamespace: n },
        }
      }
      function g(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var n = Object(a.a)(e, t).map(function (e) {
            return e.user
          }),
          r = n && n[0]
        return { name: (r && r.name) || '', screenName: (r && r.screen_name) || '', idStr: (r && r.id_str) || '' }
      }
      var w = function (e) {
          return e === s.d.TERTIARY
            ? 'low_quality_timeline'
            : e === s.d.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        C = function (e) {
          return e === s.d.TERTIARY
            ? '/messages/requests/additional'
            : e === s.d.SECONDARY
            ? '/messages/requests'
            : '/messages'
        },
        T = function (e) {
          return function () {
            return r.b(e)
          }
        },
        E = function (e) {
          return function (t) {
            return r.c(e, t)
          }
        },
        I = function (e, t) {
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
