;(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    '07FG': function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return o
      })
      var n = r('cnVF'),
        o = function (e) {
          return e === n.B
        }
    },
    CDB5: function (e, t, r) {
      'use strict'
      r.d(t, 'm', function () {
        return R
      }),
        r.d(t, 'l', function () {
          return U
        }),
        r.d(t, 'f', function () {
          return D
        }),
        r.d(t, 'd', function () {
          return j
        }),
        r.d(t, 'g', function () {
          return x
        }),
        r.d(t, 'e', function () {
          return L
        }),
        r.d(t, 'i', function () {
          return H
        }),
        r.d(t, 'j', function () {
          return F
        }),
        r.d(t, 'k', function () {
          return B
        }),
        r.d(t, 'h', function () {
          return q
        }),
        r.d(t, 'a', function () {
          return W
        }),
        r.d(t, 'b', function () {
          return X
        }),
        r.d(t, 'c', function () {
          return K
        })
      r('+KXO'), r('1t7P'), r('LW0h'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('RhWx'),
        o = r.n(n),
        a = r('ddV6'),
        i = r.n(a),
        c = r('m3Bd'),
        s = r.n(c),
        u = r('KEM+'),
        d = r.n(u),
        l =
          (r('7x/C'),
          r('DZ+c'),
          r('7xRU'),
          r('JtPf'),
          r('87if'),
          r('lTEL'),
          r('kYxP'),
          r('2G9S'),
          r('1IsZ'),
          r('AspN')),
        p = r('xPna'),
        m = r('oEOe'),
        f = r('xCUF'),
        _ = r('ude7'),
        v = r('07FG'),
        b = r('Ssj5'),
        h = r('fEA7'),
        y = r.n(h),
        g = r('uKEd'),
        w = r('lnti'),
        E = r('/NU0')
      function O(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? O(Object(r), !0).forEach(function (t) {
                d()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : O(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      var C = 'dmComposer',
        A = {}
      var M = function (e) {
          var t = e.conversation_id,
            r = e.id,
            n = e.localMediaId,
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
            id: r,
            is_draft: !0,
            message_data: { attachment: s, localMediaId: n, sender_id: a, text: i, time: d },
            type: 'message',
            time: d,
          }
        },
        R = function (e) {
          return function (t, r, n) {
            var a = n.api,
              c = e || {},
              u = c.senderId,
              d = c.cardUrl,
              b = c.conversationId,
              h = c.localMediaId,
              O = c.recipients,
              C = void 0 === O ? [] : O,
              A = c.requestId,
              R = void 0 === A ? y.a.v1() : A,
              I = c.tweetAttachment,
              U = c.quickReply,
              k = s()(c, [
                'senderId',
                'cardUrl',
                'conversationId',
                'localMediaId',
                'recipients',
                'requestId',
                'tweetAttachment',
                'quickReply',
              ])
            t(J(b))
            var D = r(),
              S = h || N(r(), b),
              x = l.k(D, S),
              P = i()(x, 1)[0] || {},
              L = P.mediaFile,
              H = P.mediaMetadata,
              F = C.length > 0 && C.join(','),
              B = {}
            L && L.isGif
              ? (B.extraInitParams = '&media_category=dm_gif')
              : L && L.isVideo && (B.extraInitParams = '&media_category=dm_video')
            var G = l.p(S, B),
              W = [t(G)],
              V = (q(D, b) || {}).found_media_origin
            return (
              L && L.isGif && W.push(Object(_.a)(L)),
              Promise.all(W).then(
                function (r) {
                  var n = i()(r, 2),
                    c = i()(n[0], 1)[0],
                    s = n[1],
                    _ = (null == H ? void 0 : H.altText) || (null == H ? void 0 : H.defaultAltText),
                    h = !!_
                  return (
                    c && (V || h)
                      ? t(l.m(T({ media_id: c.uploadId, found_media_origin: V }, !!h && { alt_text: { text: _ } })))
                      : Promise.resolve()
                  ).then(
                    function () {
                      var r = (I || {}).id_str,
                        n = {}
                      if (c) {
                        var i = c.mediaFile,
                          l = void 0 === i ? {} : i,
                          _ = {
                            original_info: { width: l.width, height: l.height },
                            sizes: [{ h: l.height, w: l.width, resize: 'fit' }],
                          }
                        l.isImage
                          ? (n.photo = T(T({}, _), {}, { media_url_https: l.url }))
                          : l.isGif
                          ? (n.animated_gif = T(T({}, _), {}, { media_url_https: s, type: 'animated_gif' }))
                          : l.isVideo && (n.video = T(T({}, _), {}, { media_url_https: l.url, type: 'video' }))
                      } else I && (n.tweet = { status: r })
                      var h = (c || {}).uploadId,
                        y = M({
                          attachment: n,
                          conversation_id: b,
                          id: R,
                          recipient_ids: F,
                          sender_id: u,
                          text: e.text,
                        }),
                        O = T(
                          T(
                            T(T({}, k), Object(v.a)(d) && { card_uri: d }),
                            {},
                            { conversation_id: b },
                            !r && { media_id: h },
                          ),
                          {},
                          { recipient_ids: F, request_id: R, tweet_id: r },
                        )
                      U &&
                        ((O['quick_reply_response[options][id]'] = U.id),
                        (O['quick_reply_response[options][selected_id]'] = U.selected_id))
                      var C = Object(w.a)([
                        $(b),
                        { type: f.c.REQUEST },
                        { type: 'rweb/dmComposer/SEND_MESSAGE_REQUEST' },
                        b && Object(g.b)(b, R, y),
                      ])
                      return (
                        t(C),
                        a.DirectMessages.sendMessage(O).then(
                          function (r) {
                            var n = r.entities,
                              a = n.cards,
                              i = n.entries,
                              c = n.tweets,
                              s = n.users,
                              u = r.result.conversations
                            Object(E.a)(S) && t(K(b, S))
                            var d = Object(w.a)(
                              [{ type: f.c.SUCCESS }].concat(
                                o()(Object(p.a)({ conversations: u, entries: i, users: s, tweets: c, cards: a })),
                                [{ type: 'rweb/dmComposer/SEND_MESSAGE_SUCCESS' }, b && Object(g.j)(b, R, e), j(b)],
                              ),
                            )
                            return t(d), Promise.resolve(Object.values(r.entities.entries)[0].conversation_id)
                          },
                          function (r) {
                            var o = M({
                                attachment: n,
                                conversation_id: b,
                                error: !0,
                                id: R,
                                localMediaId: S,
                                recipient_ids: F,
                                sender_id: u,
                                text: e.text,
                              }),
                              a = Object(w.a)([
                                { type: f.c.SUCCESS },
                                { type: 'rweb/dmComposer/SEND_MESSAGE_FAILURE' },
                                b && Object(g.b)(b, R, o),
                              ])
                            return t(a), Object(m.e)(t, r, 'ACTION_SEND_DM')
                          },
                        )
                      )
                    },
                    function (e) {
                      return t(te(b)), (e.type = 'metadata'), Promise.reject(e)
                    },
                  )
                },
                function (e) {
                  return t(Object(w.a)([Object(E.a)(S) && K(b, S), te(b)])), Promise.reject(e)
                },
              )
            )
          }
        },
        I = function (e, t) {
          return e.dmComposer[t]
        },
        U = function (e, t) {
          var r = I(e, t)
          return r ? r.text : null
        },
        k = 'rweb/dmComposer/SAVE_TEXT',
        D = function (e, t) {
          return { type: k, conversationId: e, text: t }
        },
        S = 'rweb/dmComposer/REMOVE_TEXT',
        j = function (e) {
          return { type: S, conversationId: e }
        },
        x = function (e, t) {
          var r = I(e, t)
          return r ? r.cardUrl : null
        },
        P = 'rweb/dmComposer/SAVE_CARD_URL',
        L = function (e, t) {
          return { type: P, conversationId: e, cardUrl: t }
        },
        N = function (e, t) {
          var r = I(e, t)
          return r ? r.mediaId : null
        },
        H = function (e, t) {
          var r = l.k(e, N(e, t))
          return r.length > 0 ? r[0] : null
        },
        F = function (e, t) {
          var r = I(e, t)
          return !!r && r.isUploading
        },
        B = function (e, t) {
          return l.l(e, N(e, t))
        },
        q = function (e, t) {
          var r = I(e, t)
          return r ? r.gifMetadata : null
        },
        G = 'rweb/dmComposer/ADD_MEDIA',
        W = function (e, t, r) {
          return { payload: { isUploading: !1, mediaId: i()(t, 1)[0], gifMetadata: r }, type: G, conversationId: e }
        },
        V = 'rweb/dmComposer/CANCEL_UPLOAD',
        X = function (e) {
          return { type: V, conversationId: e }
        },
        Q = 'rweb/dmComposer/REMOVE_MEDIA',
        Y = function (e) {
          return { type: Q, conversationId: e }
        },
        K = function (e, t) {
          return function (r) {
            r(l.i(t)), r([X(e), Y(e)])
          }
        },
        z = 'rweb/dmComposer/UPLOAD_REQUEST',
        J = function (e) {
          return { type: z, conversationId: e }
        },
        Z = 'rweb/dmComposer/UPLOAD_SUCCESS',
        $ = function (e) {
          return { type: Z, conversationId: e }
        },
        ee = 'rweb/dmComposer/UPLOAD_FAILURE',
        te = function (e) {
          return { type: ee, conversationId: e }
        }
      b.a.register(
        d()({}, C, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
            t = arguments.length > 1 ? arguments[1] : void 0,
            r = t.conversationId || 'new_group'
          switch (t.type) {
            case G:
              var n = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(T({}, e), {}, d()({}, r, T(T({}, n), t.payload)))
            case z:
              var o = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(T({}, e), {}, d()({}, r, T(T({}, o), {}, { isUploading: !0 })))
            case V:
              var a = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(T({}, e), {}, d()({}, r, T(T({}, a), {}, { isUploading: !1 })))
            case ee:
            case Z:
            case Q:
              var i = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(
                T({}, e),
                {},
                d()({}, r, T(T({}, i), {}, { isUploading: !1, mediaId: null, gifMetadata: void 0 })),
              )
            case k:
              var c = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(T({}, e), {}, d()({}, r, T(T({}, c), {}, { text: t.text })))
            case P:
              var s = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(T({}, e), {}, d()({}, r, T(T({}, s), {}, { cardUrl: t.cardUrl })))
            case S:
              var u = e[r] || { cardUrl: null, gifMetadata: null, isUploading: !1, mediaId: null, text: null }
              return T(T({}, e), {}, d()({}, r, T(T({}, u), {}, { text: null })))
            default:
              return e
          }
        }),
      )
    },
    EkRu: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ReportScreen', function () {
          return Ie
        })
      r('OZaJ'), r('1t7P'), r('daRM'), r('jwue'), r('+oxZ'), r('FtHn')
      var n = r('VrFO'),
        o = r.n(n),
        a = r('Y9Ll'),
        i = r.n(a),
        c = r('1Pcy'),
        s = r.n(c),
        u = r('5Yy7'),
        d = r.n(u),
        l = r('N+ot'),
        p = r.n(l),
        m = r('AuHH'),
        f = r.n(m),
        _ = r('KEM+'),
        v = r.n(_),
        b = (r('MvUL'), r('KqXw'), r('hBpG'), r('7xRU'), r('z84I'), r('LW0h'), r('+KXO'), r('2G9S'), r('ERkP')),
        h = r.n(b),
        y = r('EbOo'),
        g = (r('WNMA'), r('RqPI')),
        w = r('1YZw'),
        E = r('aWyx'),
        O = r('MMRb'),
        T = r('kHBp'),
        C = r('lPpt'),
        A = r('Fg8X'),
        M = r('0pUJ'),
        R = r('Fmkq'),
        I = r('QK5w'),
        U = r('V5Qi'),
        k = r('XOJV'),
        D = r('G6rE'),
        S = r('rxPX'),
        j = r('0KEI'),
        x = r('fz3c'),
        P = function (e, t) {
          return t.location && t.location.state && t.location.state.clientReferer
        },
        L = function (e, t) {
          return t.location && t.location.state && t.location.state.inboxType
        },
        N = function (e, t) {
          return t.location && t.location.state && t.location.state.scribeNamespace
        },
        H = function (e, t) {
          return !!(t.location && t.location.state && t.location.state.isMedia) || !1
        },
        F = function (e, t) {
          return t.location && t.location.state && t.location.state.promotedContent
        },
        B = function (e, t) {
          return t.location && t.location.state && t.location.state.conversationSection
        },
        q = function (e, t) {
          return Object(x.e)(G(e, t))
        },
        G = function (e, t) {
          return t.match.params.reportType
        },
        W = function (e, t) {
          return t.match.params.reportedId
        },
        V = function (e, t) {
          var r = G(e, t),
            n = W(0, t)
          switch (r) {
            case x.a.Tweet:
            case x.a.AppealTweetWarning:
            case x.a.HideCommunityTweet:
            case x.a.RemoveCommunityMember:
              return k.a.selectHydrated(e, n)
            default:
              return
          }
        },
        X = function (e, t) {
          var r = G(e, t) === x.a.User ? W(0, t) : void 0
          return r ? D.e.select(e, r) : void 0
        },
        Q = function (e, t) {
          var r,
            n = G(e, t)
          if (
            ((n !== x.a.DMConversation && n !== x.a.DMMessage) ||
              (r = n === x.a.DMConversation ? W(0, t) : t.location.state ? t.location.state.conversationId : void 0),
            r)
          ) {
            var o = Object(U.a)(e, r),
              a = (function (e, t) {
                return g.q(e)
              })(e)
            return Y(o, a)
          }
        },
        Y = function (e, t) {
          var r
          if (e && e.data)
            return (
              (r =
                e.data.type === E.a.GROUP
                  ? '0'
                  : e.data.participants.filter(function (e) {
                      return e.user_id !== t
                    })[0].user_id),
              { conversationId: e.data.conversation_id, reportedUserId: r }
            )
        },
        K = function (e, t) {
          return G(e, t) === x.a.Moment ? A.a.select(e, W(0, t)) : void 0
        },
        z = function (e, t) {
          var r = G(e, t) === x.a.List ? W(0, t) : void 0
          return r ? T.a.select(e, r) : void 0
        },
        J = function (e, t) {
          var r = G(e, t) === x.a.Moment ? W(0, t) : void 0
          return r ? C.a.select(e, r) : void 0
        },
        Z = Object(S.a)()
          .propsFromState(function () {
            return {
              canGoBack: I.a,
              clientReferer: P,
              dmConversation: Q,
              reportedId: W,
              inboxType: L,
              isMedia: H,
              lang: g.o,
              liveEvent: J,
              moment: K,
              list: z,
              promotedContent: F,
              conversationSection: B,
              reportType: G,
              reportSource: q,
              scribeNamespace: N,
              tweet: V,
              user: X,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: w.b,
              block: D.e.block,
              createLocalApiErrorHandler: Object(j.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              fetchUpdates: O.fetchUpdates,
              mute: M.a,
              markTweetAsReported: k.a.markAsReported,
              markTweetsAsRemovedFromCommunity: k.a.markTweetsAsRemovedFromCommunity,
              richScribeAction: R.richScribeAction,
              unblock: D.e.unblock,
              unfollow: D.e.unfollow,
              unmute: D.e.unmute,
            }
          }),
        $ = r('jHSc'),
        ee = r('qzfk'),
        te = r('X/yg'),
        re = r('3XMw'),
        ne = r.n(re),
        oe = r('tn7R'),
        ae = r('SrIh'),
        ie =
          (r('yH/f'),
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
        ce = r('Rp9C'),
        se = r('X04g'),
        ue = r('u0B7'),
        de = r('1bnC'),
        le = r('tJZD'),
        pe = r('fEA7'),
        me = r.n(pe),
        fe = r('v6aA'),
        _e = r('/yvb'),
        ve = r('bPFD'),
        be = r('rHpw'),
        he = r('P2xQ')
      function ye(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? ye(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ye(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function we(e) {
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
          var r,
            n = f()(e)
          if (t) {
            var o = f()(this).constructor
            r = Reflect.construct(n, arguments, o)
          } else r = n.apply(this, arguments)
          return p()(this, r)
        }
      }
      var Ee = ne.a.f1824804,
        Oe = ne.a.h030c24b,
        Te = ne.a.c3e6226a,
        Ce = ne.a.a9fd20be,
        Ae = ne.a.i2b9632d,
        Me = ne.a.b772cd65,
        Re = 'https://twitter.com',
        Ie = (function (e) {
          d()(r, e)
          var t = we(r)
          function r(e, n) {
            var a
            return (
              o()(this, r),
              (a = t.call(this, e, n)),
              v()(s()(a), '_renderDoneButton', function () {
                return a.state.isDone
                  ? h.a.createElement(_e.a, { onPress: a._handleDone, size: 'xSmall', type: 'primaryFilled' }, Me)
                  : void 0
              }),
              v()(s()(a), '_handleDone', function () {
                var e = a.props,
                  t = e.createLocalApiErrorHandler,
                  r = e.fetchUpdates,
                  n = e.history,
                  o = e.inboxType,
                  i = e.reportType
                switch ((a._scribeAction('done'), i)) {
                  case x.a.DMConversation:
                  case x.a.DMMessage:
                    n.replace(Object(te.e)(o)), r().catch(t({}))
                    break
                  default:
                    a._goBack()
                }
              }),
              v()(s()(a), '_goBack', function () {
                var e = a.props.history,
                  t = Math.min(-1, a._initialHistoryLength - window.history.length - 1)
                e.go(t)
              }),
              v()(s()(a), '_handleBack', function () {
                a.props.history.goBack()
              }),
              v()(s()(a), '_handleCancel', function () {
                a._goBack()
              }),
              v()(s()(a), '_handleUndoBlock', function (e) {
                return function () {
                  var t = a.props,
                    r = t.addToast,
                    n = t.createLocalApiErrorHandler,
                    o = t.promotedContent
                  ;(0, t.unblock)(e, { promotedContent: o }).then(function () {
                    r({ text: Ae })
                  }, n(ue.a))
                }
              }),
              v()(s()(a), '_handleUndoMute', function (e, t) {
                return function () {
                  var r = a.props,
                    n = r.addToast,
                    o = r.createLocalApiErrorHandler
                  ;(0, r.unmute)(e).then(function () {
                    n({ text: Object(he.d)(t) })
                  }, o({ showToast: !0 }))
                }
              }),
              v()(s()(a), '_getReportTitle', function () {
                switch (a.props.reportType) {
                  case x.a.AppealTweetWarning:
                    return Ee
                  case x.a.RemoveCommunityMember:
                    return Te
                  default:
                    return Oe
                }
              }),
              v()(s()(a), '_getReportedTweetId', function () {
                var e = a.props,
                  t = e.liveEvent,
                  r = e.moment,
                  n = e.reportType,
                  o = e.tweet
                switch (n) {
                  case x.a.Moment:
                    var i = (t ? Object(oe.a)(t.slates) : []).find(function (e) {
                      return e.tweet_id
                    })
                    return i ? i.tweet_id : r && r.cover_media && r.cover_media.tweet_id
                  case x.a.AppealTweetWarning:
                  case x.a.HideCommunityTweet:
                  case x.a.RemoveCommunityMember:
                  case x.a.Tweet:
                    return o && o.id_str
                  default:
                    return
                }
              }),
              v()(s()(a), '_getReportedUserId', function (e) {
                var t = a.props,
                  r = t.dmConversation,
                  n = t.list,
                  o = t.liveEvent,
                  i = t.moment,
                  c = t.reportType,
                  s = t.tweet,
                  u = t.user
                switch (c) {
                  case x.a.DMConversation:
                  case x.a.DMMessage:
                    return e && e.data && r && '0' === r.reportedUserId
                      ? e.data.reported_user_id
                      : r && r.reportedUserId
                  case x.a.Moment:
                    return (o && o.liveEventDetails.attribution_user_id) || (i && i.author && i.author.id)
                  case x.a.User:
                    return u && u.id_str
                  case x.a.List:
                    return n && n.user
                  case x.a.AppealTweetWarning:
                  case x.a.HideCommunityTweet:
                  case x.a.RemoveCommunityMember:
                  case x.a.Tweet:
                    return s && s.user.id_str
                  default:
                    return void Object(ae.a)('Unknown report type '.concat(c))
                }
              }),
              v()(s()(a), '_getReportedUserScreenName', function (e) {
                var t = a.props,
                  r = t.liveEvent,
                  n = t.moment,
                  o = t.reportType,
                  i = t.tweet,
                  c = t.user
                switch (o) {
                  case x.a.Moment:
                    var s,
                      u = null == r ? void 0 : r.liveEventDetails.attribution_user_id,
                      d = u ? (null == r || null === (s = r.users) || void 0 === s ? void 0 : s[u]) : void 0
                    if (d) return null == d ? void 0 : d.screen_name
                    if (n && n.author) return n.author.screen_name
                    break
                  case x.a.Tweet:
                    return null == i ? void 0 : i.user.screen_name
                  case x.a.User:
                    return null == c ? void 0 : c.screen_name
                }
              }),
              v()(s()(a), '_getCommunityId', function () {
                var e = a.props,
                  t = e.reportType,
                  r = e.tweet
                switch (t) {
                  case x.a.RemoveCommunityMember:
                    return null == r ? void 0 : r.community_id_str
                }
              }),
              v()(s()(a), '_getReportUrl', function () {
                var e = a.props,
                  t = e.clientReferer,
                  r = e.conversationSection,
                  n = e.dmConversation,
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
                  _ = p === x.a.DMConversation,
                  v = p === x.a.DMMessage,
                  b = p === x.a.Moment,
                  h = p === x.a.List,
                  y = a.context.featureSwitches.isTrue('responsive_web_add_impression_id_to_mute_engagement_enabled'),
                  g = {
                    client_location: [
                      null == f ? void 0 : f.page,
                      null == f ? void 0 : f.section,
                      null == f ? void 0 : f.component,
                    ].join(':'),
                    client_referer: t,
                    client_app_id: Object(ee.a)().clientAppId,
                    conversation_section: r,
                    source: l,
                    report_flow_id: a._reportFlowId,
                    reported_user_id: a._getReportedUserId(),
                    reported_tweet_id: a._getReportedTweetId(),
                    reported_direct_message_conversation_id: (v || _) && n && n.conversationId,
                    reported_direct_message_id: v && m,
                    reported_moment_id: b ? (s && s.liveEventDetails.id) || (u && u.id_str) : void 0,
                    reported_list_id: h ? c && c.id_str : void 0,
                    is_promoted: !!d,
                    impression_id: y ? (null == d ? void 0 : d.impression_id) : void 0,
                    is_media: o,
                    initiated_in_app: '1',
                    lang: i,
                    community_id: a._getCommunityId(),
                  },
                  w = Object.keys(g)
                    .filter(function (e) {
                      return !!g[e]
                    })
                    .map(function (e) {
                      return ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(g[e]))
                    })
                    .join('&')
                return ''.concat(Re, '/i/safety/report_story?').concat(w)
              }),
              v()(s()(a), '_messageHandler', function (e) {
                var t = a.props,
                  r = t.addToast,
                  n = t.markTweetAsReported,
                  o = t.markTweetsAsRemovedFromCommunity,
                  i = t.reportSource
                if (e.origin === Re && 'ReportAction' === e.data.type) {
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
                          r({ action: { label: de.a, onAction: a._handleUndoBlock(m) }, text: Ce })
                        }, u(y.a))
                      break
                    case 'unfollow':
                      m && p(m, { promotedContent: l }).catch(u(le.a))
                      break
                    case 'mute':
                      m &&
                        d(m).then(function () {
                          var t = a._getReportedUserScreenName(e)
                          r({ action: { label: de.a, onAction: a._handleUndoMute(m, t) }, text: Object(he.b)(t) })
                        }, u({ showToast: !0 }))
                      break
                    case 'complete':
                      a.setState({ isDone: !0 })
                      var f = a._getReportedTweetId()
                      f &&
                        (i === ie.Tweet && n(f, x.b.Tombstone),
                        i === ie.HideCommunityTweet && n(f, x.b.HiddenCommunityTweet),
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
            i()(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props,
                    t = e.addMessageListener,
                    r = e.history
                  t(this._messageHandler), this._wasAccessedDirectly() ? r.push('/') : this._scribeAction('impression')
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
                    r = e.dmConversation,
                    n = e.list,
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
                    (i === x.a.AppealTweetWarning && !u) ||
                    (i === x.a.HideCommunityTweet && !u) ||
                    (i === x.a.RemoveCommunityMember && !u) ||
                    (i === x.a.Tweet && !u) ||
                    (i === x.a.User && !d) ||
                    (i === x.a.DMConversation && !r) ||
                    (i === x.a.DMMessage && (!c || !r)) ||
                    (i === x.a.Moment && !a && !l) ||
                    (i === x.a.List && !n)
                  )
                },
              },
              {
                key: '_getScribeNamespace',
                value: function () {
                  if (this._scribeNamespace) return this._scribeNamespace
                  var e,
                    t = this.props,
                    r = t.reportType,
                    n = t.scribeNamespace
                  switch (r) {
                    case x.a.AppealTweetWarning:
                      e = 'appeal_tweet_warning'
                      break
                    case x.a.DMConversation:
                      e = 'report_dm_conversation'
                      break
                    case x.a.Moment:
                      e = 'report_moment'
                      break
                    case x.a.Tweet:
                      e = 'report_tweet'
                      break
                    case x.a.User:
                      e = 'report_user'
                  }
                  return (this._scribeNamespace = ge(ge({}, n), {}, { element: e })), this._scribeNamespace
                },
              },
              {
                key: '_getScribeData',
                value: function () {
                  if (this._scribeData) return this._scribeData
                  var e = this.props,
                    t = e.promotedContent,
                    r = e.reportType,
                    n = e.scribeNamespace,
                    o = e.tweet,
                    a = e.user
                  if (r === x.a.Tweet || r === x.a.AppealTweetWarning)
                    this._scribeData = {
                      associations: v()({}, se.a.AssociationType.ASSOCIATED_TWEET, {
                        association_id: o && o.id_str,
                        association_namespace: { page: null == n ? void 0 : n.page },
                      }),
                      promoted: !!t,
                      items: o ? [ce.a.forTweet(o)] : [],
                    }
                  else if (r === x.a.User) {
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
                    r = ge(
                      ge({}, this._getScribeData()),
                      {},
                      { report_details: { report_flow_id: this._reportFlowId } },
                    )
                  t(ge(ge({}, this._getScribeNamespace()), {}, { action: e }), r)
                },
              },
            ]),
            r
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
      var Ue = Z(Ie)
      t.default = Ue
    },
    LqVV: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ReportFlowComplete', function () {
          return I
        })
      var n = r('ERkP'),
        o = r.n(n),
        a = r('EbOo'),
        i = r('1YZw'),
        c = r('0pUJ'),
        s = r('QK5w'),
        u = r('G6rE'),
        d = r('rxPX'),
        l = r('0KEI'),
        p = function (e, t) {
          var r = t.location.query.action
          if ('string' == typeof r) return r
        },
        m = function (e, t) {
          var r = t.location.query.reported_user_id
          if ('string' == typeof r) return r
        },
        f = function (e, t) {
          var r = t.location.query.reported_screen_name
          if ('string' == typeof r) return r
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
        v = r('kGix'),
        b = r('v//M'),
        h = r('3XMw'),
        y = r.n(h),
        g = r('fs1G'),
        w = r('rHpw'),
        E = r('u0B7'),
        O = r('1bnC'),
        T = r('MWbm'),
        C = r('P2xQ'),
        A = function () {
          return null
        },
        M = y.a.a9fd20be,
        R = y.a.i2b9632d
      function I(e) {
        return (
          o.a.useEffect(function () {
            var t = e.action,
              r = e.addToast,
              n = e.block,
              o = e.canGoBack,
              i = e.createLocalApiErrorHandler,
              c = e.history,
              s = e.mute,
              u = e.reportedScreenName,
              d = e.reportedUserId
            o
              ? (d && 'mute' === t
                  ? s(d).then(function () {
                      var t, n
                      r({
                        action: {
                          label: O.a,
                          onAction:
                            ((t = d),
                            (n = u),
                            function () {
                              var r = e.addToast,
                                o = e.createLocalApiErrorHandler
                              ;(0, e.unmute)(t).then(function () {
                                r({ text: Object(C.d)(n) })
                              }, o({ showToast: !0 }))
                            }),
                        },
                        text: Object(C.b)(u),
                      })
                    }, i({ showToast: !0 }))
                  : d &&
                    'block' === t &&
                    n(d).then(function () {
                      var t
                      r({
                        action: {
                          label: O.a,
                          onAction:
                            ((t = d),
                            function () {
                              var r = e.addToast,
                                n = e.createLocalApiErrorHandler
                              ;(0, e.unblock)(t).then(function () {
                                r({ text: R })
                              }, n(E.a))
                            }),
                        },
                        text: M,
                      })
                    }, i(a.a)),
                c.goBackThroughModals())
              : c.push('/')
          }, []),
          o.a.createElement(
            T.a,
            { style: U.root },
            o.a.createElement(b.a, { fetchStatus: v.a.LOADING, onRequestRetry: g.a, render: A, retryable: !1 }),
          )
        )
      }
      var U = w.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        }),
        k = _(I)
      t.default = k
    },
    V5Qi: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return o
      })
      var n = r('AQ79'),
        o = function (e, t) {
          return e[n.c] ? e[n.c].conversations[t] : null
        }
    },
    'X/yg': function (e, t, r) {
      'use strict'
      r.d(t, 'n', function () {
        return s
      }),
        r.d(t, 'm', function () {
          return u
        }),
        r.d(t, 'l', function () {
          return d
        }),
        r.d(t, 'c', function () {
          return l
        }),
        r.d(t, 'h', function () {
          return p
        }),
        r.d(t, 'j', function () {
          return m
        }),
        r.d(t, 'k', function () {
          return f
        }),
        r.d(t, 'f', function () {
          return _
        }),
        r.d(t, 'i', function () {
          return v
        }),
        r.d(t, 'g', function () {
          return b
        }),
        r.d(t, 'e', function () {
          return h
        }),
        r.d(t, 'a', function () {
          return y
        }),
        r.d(t, 'b', function () {
          return g
        }),
        r.d(t, 'd', function () {
          return w
        })
      r('z84I'), r('ho0z')
      var n = r('CDB5'),
        o = r('Myq3'),
        a = r('XnpN'),
        i = r('AQ79'),
        c = r('pHkl'),
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
            r = c.d.UNKNOWN,
            n = (t && t.attachment) || {}
          return (
            n.tweet
              ? (r = c.d.TWEET)
              : n.photo
              ? (r = c.d.PHOTO)
              : n.animated_gif
              ? (r = c.d.GIF)
              : n.video
              ? (r = n.video.audio_only ? c.d.VOICE : c.d.VIDEO)
              : n.card
              ? (r = c.d.CARD)
              : null != t && t.text && (r = c.d.TEXT),
            r
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
      function _(e, t, r, n) {
        return {
          pathname: '/i/report/dm_conversation/'.concat(e),
          state: { clientReferer: t, inboxType: n, scribeNamespace: r },
        }
      }
      function v(e, t) {
        if (!e) return { name: '', screenName: '', idStr: '' }
        var r = Object(a.a)(e, t).map(function (e) {
            return e.user
          }),
          n = r && r[0]
        return { name: (n && n.name) || '', screenName: (n && n.screen_name) || '', idStr: (n && n.id_str) || '' }
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
        y = function (e) {
          return function () {
            return n.b(e)
          }
        },
        g = function (e) {
          return function (t) {
            return n.c(e, t)
          }
        },
        w = function (e, t) {
          var r = Object(o.a)(e, function (e) {
            return !!e.message_data && e.message_data && e.message_data.recipient_id === t
          })
          return r &&
            r.message_data &&
            r.message_data.quick_reply &&
            r.message_data.quick_reply &&
            'options' === r.message_data.quick_reply.type
            ? r.message_data.quick_reply
            : void 0
        }
    },
    XnpN: function (e, t, r) {
      'use strict'
      var n = r('RhWx'),
        o = r.n(n),
        a = r('ddV6'),
        i = r.n(a),
        c = (r('2G9S'), r('tQbP'), r('aWyx')),
        s = (r('6U7i'), r('LW0h'), r('z84I'), r('t0aI')),
        u = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          return new Date(Number(e))
        },
        d = function (e, t) {
          return u(e.join_time) - u(t.join_time)
        },
        l = function (e, t) {
          var r = e.user,
            n = t.user
          return Object(s.a)(r.id_str, n.id_str)
        },
        p = function (e) {
          return (function () {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
            return function (e, r) {
              return (
                t
                  .map(function (t) {
                    return t(e, r)
                  })
                  .filter(function (e) {
                    return !!e
                  })[0] || 0
              )
            }
          })(
            (function (e) {
              return function (t, r) {
                var n = t.user,
                  o = r.user
                switch (e) {
                  case n.id_str:
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
        m = r('tn7R'),
        f = r('VIKJ')
      t.a = function (e, t) {
        var r = e.created_by_user_id,
          n = e.participants,
          a = e.type,
          s = Object(m.a)(n),
          u = Object(f.a)(s, function (e) {
            return e.user.id_str === t
          }),
          d = i()(u, 2),
          l = d[0],
          _ = d[1]
        return _.length ? (a === c.a.GROUP && 1 === _.length ? [].concat(o()(l), o()(_)) : r ? _.sort(p(r)) : _) : l
      }
    },
  },
])
//# sourceMappingURL=WIPED
