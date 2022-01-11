;(window.webpackJsonp = window.webpackJsonp || []).push([
  [79],
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
          return G
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
            var q = l.p(S, B),
              W = [t(q)],
              V = (G(D, b) || {}).found_media_origin
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
        G = function (e, t) {
          var r = I(e, t)
          return r ? r.gifMetadata : null
        },
        q = 'rweb/dmComposer/ADD_MEDIA',
        W = function (e, t, r) {
          return { payload: { isUploading: !1, mediaId: i()(t, 1)[0], gifMetadata: r }, type: q, conversationId: e }
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
            case q:
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
          return Re
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
        h = r('EbOo'),
        y = (r('WNMA'), r('RqPI')),
        g = r('1YZw'),
        w = r('aWyx'),
        E = r('MMRb'),
        O = r('kHBp'),
        T = r('lPpt'),
        C = r('Fg8X'),
        A = r('0pUJ'),
        M = r('Fmkq'),
        R = r('QK5w'),
        I = r('V5Qi'),
        U = r('XOJV'),
        k = r('G6rE'),
        D = r('rxPX'),
        S = r('0KEI'),
        j = r('fz3c'),
        x = function (e, t) {
          return t.location && t.location.state && t.location.state.clientReferer
        },
        P = function (e, t) {
          return t.location && t.location.state && t.location.state.inboxType
        },
        L = function (e, t) {
          return t.location && t.location.state && t.location.state.scribeNamespace
        },
        N = function (e, t) {
          return !!(t.location && t.location.state && t.location.state.isMedia) || !1
        },
        H = function (e, t) {
          return t.location && t.location.state && t.location.state.promotedContent
        },
        F = function (e, t) {
          return t.location && t.location.state && t.location.state.conversationSection
        },
        B = function (e, t) {
          return Object(j.e)(G(e, t))
        },
        G = function (e, t) {
          return t.match.params.reportType
        },
        q = function (e, t) {
          return t.match.params.reportedId
        },
        W = function (e, t) {
          var r = G(e, t),
            n = q(0, t)
          switch (r) {
            case j.a.Tweet:
            case j.a.AppealTweetWarning:
            case j.a.HideCommunityTweet:
            case j.a.RemoveCommunityMember:
              return U.a.selectHydrated(e, n)
            default:
              return
          }
        },
        V = function (e, t) {
          var r = G(e, t) === j.a.User ? q(0, t) : void 0
          return r ? k.e.select(e, r) : void 0
        },
        X = function (e, t) {
          var r,
            n = G(e, t)
          if (
            ((n !== j.a.DMConversation && n !== j.a.DMMessage) ||
              (r = n === j.a.DMConversation ? q(0, t) : t.location.state ? t.location.state.conversationId : void 0),
            r)
          ) {
            var o = Object(I.a)(e, r),
              a = (function (e, t) {
                return y.p(e)
              })(e)
            return Q(o, a)
          }
        },
        Q = function (e, t) {
          var r
          if (e && e.data)
            return (
              (r =
                e.data.type === w.a.GROUP
                  ? '0'
                  : e.data.participants.filter(function (e) {
                      return e.user_id !== t
                    })[0].user_id),
              { conversationId: e.data.conversation_id, reportedUserId: r }
            )
        },
        Y = function (e, t) {
          return G(e, t) === j.a.Moment ? C.a.select(e, q(0, t)) : void 0
        },
        K = function (e, t) {
          var r = G(e, t) === j.a.List ? q(0, t) : void 0
          return r ? O.a.select(e, r) : void 0
        },
        z = function (e, t) {
          var r = G(e, t) === j.a.Moment ? q(0, t) : void 0
          return r ? T.a.select(e, r) : void 0
        },
        J = Object(D.a)()
          .propsFromState(function () {
            return {
              canGoBack: R.a,
              clientReferer: x,
              dmConversation: X,
              reportedId: q,
              inboxType: P,
              isMedia: N,
              lang: y.n,
              liveEvent: z,
              moment: Y,
              list: K,
              promotedContent: H,
              conversationSection: F,
              reportType: G,
              reportSource: B,
              scribeNamespace: L,
              tweet: W,
              user: V,
            }
          })
          .propsFromActions(function () {
            return {
              addToast: g.b,
              block: k.e.block,
              createLocalApiErrorHandler: Object(S.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              fetchUpdates: E.fetchUpdates,
              mute: A.a,
              markTweetAsReported: U.a.markAsReported,
              markTweetsAsRemovedFromCommunity: U.a.markTweetsAsRemovedFromCommunity,
              richScribeAction: M.richScribeAction,
              unblock: k.e.unblock,
              unfollow: k.e.unfollow,
              unmute: k.e.unmute,
            }
          }),
        Z = r('jHSc'),
        $ = r('qzfk'),
        ee = r('X/yg'),
        te = r('3XMw'),
        re = r.n(te),
        ne = r('tn7R'),
        oe = r('SrIh'),
        ae =
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
        ie = r('Rp9C'),
        ce = r('X04g'),
        se = r('u0B7'),
        ue = r('1bnC'),
        de = r('tJZD'),
        le = r('fEA7'),
        pe = r.n(le),
        me = r('v6aA'),
        fe = r('/yvb'),
        _e = r('bPFD'),
        ve = r('rHpw'),
        be = r('P2xQ')
      function he(e, t) {
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
      function ye(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? he(Object(r), !0).forEach(function (t) {
                v()(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : he(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              })
        }
        return e
      }
      function ge(e) {
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
      var we = re.a.f1824804,
        Ee = re.a.h030c24b,
        Oe = re.a.c3e6226a,
        Te = re.a.a9fd20be,
        Ce = re.a.i2b9632d,
        Ae = re.a.b772cd65,
        Me = 'https://twitter.com',
        Re = (function (e) {
          d()(r, e)
          var t = ge(r)
          function r(e, n) {
            var a
            return (
              o()(this, r),
              (a = t.call(this, e, n)),
              v()(s()(a), '_renderDoneButton', function () {
                return a.state.isDone
                  ? b.createElement(fe.a, { onPress: a._handleDone, size: 'xSmall', type: 'primaryFilled' }, Ae)
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
                  case j.a.DMConversation:
                  case j.a.DMMessage:
                    n.replace(Object(ee.e)(o)), r().catch(t({}))
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
                    r({ text: Ce })
                  }, n(se.a))
                }
              }),
              v()(s()(a), '_handleUndoMute', function (e, t) {
                return function () {
                  var r = a.props,
                    n = r.addToast,
                    o = r.createLocalApiErrorHandler
                  ;(0, r.unmute)(e).then(function () {
                    n({ text: Object(be.d)(t) })
                  }, o({ showToast: !0 }))
                }
              }),
              v()(s()(a), '_getReportTitle', function () {
                switch (a.props.reportType) {
                  case j.a.AppealTweetWarning:
                    return we
                  case j.a.RemoveCommunityMember:
                    return Oe
                  default:
                    return Ee
                }
              }),
              v()(s()(a), '_getReportedTweetId', function () {
                var e = a.props,
                  t = e.liveEvent,
                  r = e.moment,
                  n = e.reportType,
                  o = e.tweet
                switch (n) {
                  case j.a.Moment:
                    var i = (t ? Object(ne.a)(t.slates) : []).find(function (e) {
                      return e.tweet_id
                    })
                    return i ? i.tweet_id : r && r.cover_media && r.cover_media.tweet_id
                  case j.a.AppealTweetWarning:
                  case j.a.HideCommunityTweet:
                  case j.a.RemoveCommunityMember:
                  case j.a.Tweet:
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
                  case j.a.DMConversation:
                  case j.a.DMMessage:
                    return e && e.data && r && '0' === r.reportedUserId
                      ? e.data.reported_user_id
                      : r && r.reportedUserId
                  case j.a.Moment:
                    return (o && o.liveEventDetails.attribution_user_id) || (i && i.author && i.author.id)
                  case j.a.User:
                    return u && u.id_str
                  case j.a.List:
                    return n && n.user
                  case j.a.AppealTweetWarning:
                  case j.a.HideCommunityTweet:
                  case j.a.RemoveCommunityMember:
                  case j.a.Tweet:
                    return s && s.user.id_str
                  default:
                    return void Object(oe.a)('Unknown report type '.concat(c))
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
                  case j.a.Moment:
                    var s,
                      u = null == r ? void 0 : r.liveEventDetails.attribution_user_id,
                      d = u ? (null == r || null === (s = r.users) || void 0 === s ? void 0 : s[u]) : void 0
                    if (d) return null == d ? void 0 : d.screen_name
                    if (n && n.author) return n.author.screen_name
                    break
                  case j.a.Tweet:
                    return null == i ? void 0 : i.user.screen_name
                  case j.a.User:
                    return null == c ? void 0 : c.screen_name
                }
              }),
              v()(s()(a), '_getCommunityId', function () {
                var e = a.props,
                  t = e.reportType,
                  r = e.tweet
                switch (t) {
                  case j.a.RemoveCommunityMember:
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
                  _ = p === j.a.DMConversation,
                  v = p === j.a.DMMessage,
                  b = p === j.a.Moment,
                  h = p === j.a.List,
                  y = a.context.featureSwitches.isTrue('responsive_web_add_impression_id_to_mute_engagement_enabled'),
                  g = {
                    client_location: [
                      null == f ? void 0 : f.page,
                      null == f ? void 0 : f.section,
                      null == f ? void 0 : f.component,
                    ].join(':'),
                    client_referer: t,
                    client_app_id: Object($.a)().clientAppId,
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
                return ''.concat(Me, '/i/safety/report_story?').concat(w)
              }),
              v()(s()(a), '_messageHandler', function (e) {
                var t = a.props,
                  r = t.addToast,
                  n = t.markTweetAsReported,
                  o = t.markTweetsAsRemovedFromCommunity,
                  i = t.reportSource
                if (e.origin === Me && 'ReportAction' === e.data.type) {
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
                          r({ action: { label: ue.a, onAction: a._handleUndoBlock(m) }, text: Te })
                        }, u(h.a))
                      break
                    case 'unfollow':
                      m && p(m, { promotedContent: l }).catch(u(de.a))
                      break
                    case 'mute':
                      m &&
                        d(m).then(function () {
                          var t = a._getReportedUserScreenName(e)
                          r({ action: { label: ue.a, onAction: a._handleUndoMute(m, t) }, text: Object(be.b)(t) })
                        }, u({ showToast: !0 }))
                      break
                    case 'complete':
                      a.setState({ isDone: !0 })
                      var f = a._getReportedTweetId()
                      f &&
                        (i === ae.Tweet && n(f, j.b.Tombstone),
                        i === ae.HideCommunityTweet && n(f, j.b.HiddenCommunityTweet),
                        i === ae.RemoveCommunityMember && o(f))
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
              (a._reportFlowId = pe.a.v4()),
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
                    : b.createElement(
                        Z.b,
                        {
                          backButtonType: t ? 'close' : 'back',
                          history: e,
                          onBackClick: t ? this._handleDone : this._handleBack,
                          rightControl: this._renderDoneButton(),
                          title: this._getReportTitle(),
                        },
                        b.createElement(_e.a, { allowForms: !0, src: this._reportUrl, style: ve.a.absoluteFill }),
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
                    (i === j.a.AppealTweetWarning && !u) ||
                    (i === j.a.HideCommunityTweet && !u) ||
                    (i === j.a.RemoveCommunityMember && !u) ||
                    (i === j.a.Tweet && !u) ||
                    (i === j.a.User && !d) ||
                    (i === j.a.DMConversation && !r) ||
                    (i === j.a.DMMessage && (!c || !r)) ||
                    (i === j.a.Moment && !a && !l) ||
                    (i === j.a.List && !n)
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
                  return (this._scribeNamespace = ye(ye({}, n), {}, { element: e })), this._scribeNamespace
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
                  if (r === j.a.Tweet || r === j.a.AppealTweetWarning)
                    this._scribeData = {
                      associations: v()({}, ce.a.AssociationType.ASSOCIATED_TWEET, {
                        association_id: o && o.id_str,
                        association_namespace: { page: null == n ? void 0 : n.page },
                      }),
                      promoted: !!t,
                      items: o ? [ie.a.forTweet(o)] : [],
                    }
                  else if (r === j.a.User) {
                    var i = a ? [ie.a.forUser(a.id_str)] : []
                    this._scribeData = {
                      associations: v()({}, ce.a.AssociationType.ASSOCIATED_USER, { association_id: a && a.id_str }),
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
                    r = ye(
                      ye({}, this._getScribeData()),
                      {},
                      { report_details: { report_flow_id: this._reportFlowId } },
                    )
                  t(ye(ye({}, this._getScribeNamespace()), {}, { action: e }), r)
                },
              },
            ]),
            r
          )
        })(b.Component)
      v()(Re, 'defaultProps', {
        addMessageListener: function (e) {
          return window.addEventListener('message', e)
        },
        isMedia: !1,
        removeMessageListener: function (e) {
          return window.removeEventListener('message', e)
        },
      }),
        v()(Re, 'contextType', me.a)
      var Ie = J(Re)
      t.default = Ie
    },
    LqVV: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, 'ReportFlowComplete', function () {
          return R
        })
      var n = r('ERkP'),
        o = r('EbOo'),
        a = r('1YZw'),
        i = r('0pUJ'),
        c = r('QK5w'),
        s = r('G6rE'),
        u = r('rxPX'),
        d = r('0KEI'),
        l = function (e, t) {
          var r = t.location.query.action
          if ('string' == typeof r) return r
        },
        p = function (e, t) {
          var r = t.location.query.reported_user_id
          if ('string' == typeof r) return r
        },
        m = function (e, t) {
          var r = t.location.query.reported_screen_name
          if ('string' == typeof r) return r
        },
        f = Object(u.a)()
          .propsFromState(function () {
            return { action: l, canGoBack: c.a, reportedUserId: p, reportedScreenName: m }
          })
          .propsFromActions(function () {
            return {
              addToast: a.b,
              block: s.e.block,
              createLocalApiErrorHandler: Object(d.createLocalApiErrorHandlerWithContextFactory)('REPORT_SCREEN'),
              mute: i.a,
              unblock: s.e.unblock,
              unfollow: s.e.unfollow,
              unmute: s.e.unmute,
            }
          }),
        _ = r('kGix'),
        v = r('v//M'),
        b = r('3XMw'),
        h = r.n(b),
        y = r('fs1G'),
        g = r('rHpw'),
        w = r('u0B7'),
        E = r('1bnC'),
        O = r('MWbm'),
        T = r('P2xQ'),
        C = function () {
          return null
        },
        A = h.a.a9fd20be,
        M = h.a.i2b9632d
      function R(e) {
        return (
          n.useEffect(function () {
            var t = e.action,
              r = e.addToast,
              n = e.block,
              a = e.canGoBack,
              i = e.createLocalApiErrorHandler,
              c = e.history,
              s = e.mute,
              u = e.reportedScreenName,
              d = e.reportedUserId
            a
              ? (d && 'mute' === t
                  ? s(d).then(function () {
                      var t, n
                      r({
                        action: {
                          label: E.a,
                          onAction:
                            ((t = d),
                            (n = u),
                            function () {
                              var r = e.addToast,
                                o = e.createLocalApiErrorHandler
                              ;(0, e.unmute)(t).then(function () {
                                r({ text: Object(T.d)(n) })
                              }, o({ showToast: !0 }))
                            }),
                        },
                        text: Object(T.b)(u),
                      })
                    }, i({ showToast: !0 }))
                  : d &&
                    'block' === t &&
                    n(d).then(function () {
                      var t
                      r({
                        action: {
                          label: E.a,
                          onAction:
                            ((t = d),
                            function () {
                              var r = e.addToast,
                                n = e.createLocalApiErrorHandler
                              ;(0, e.unblock)(t).then(function () {
                                r({ text: M })
                              }, n(w.a))
                            }),
                        },
                        text: A,
                      })
                    }, i(o.a)),
                c.goBackThroughModals())
              : c.push('/')
          }, []),
          n.createElement(
            O.a,
            { style: I.root },
            n.createElement(v.a, { fetchStatus: _.a.LOADING, onRequestRetry: y.a, render: C, retryable: !1 }),
          )
        )
      }
      var I = g.a.create(function (e) {
          return { root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } }
        }),
        U = f(R)
      t.default = U
    },
    V5Qi: function (e, t, r) {
      'use strict'
      r.d(t, 'a', function () {
        return o
      })
      var n = r('AQ79'),
        o = function (e, t) {
          return e[n.b] ? e[n.b].conversations[t] : null
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
        return e === i.c.SECONDARY ? c.c.REQUESTS : e === i.c.TERTIARY ? c.c.LOW_QUALITY : c.c.PRIMARY
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
          return e === i.c.TERTIARY
            ? 'low_quality_timeline'
            : e === i.c.SECONDARY
            ? 'requests_timeline'
            : 'inbox_timeline'
        },
        h = function (e) {
          return e === i.c.TERTIARY
            ? '/messages/requests/additional'
            : e === i.c.SECONDARY
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
