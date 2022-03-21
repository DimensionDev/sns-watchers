;(window.webpackJsonp = window.webpackJsonp || []).push([
  [186, 174],
  {
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('VrFO'),
        a = n.n(o),
        i = n('Y9Ll'),
        r = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        d = n.n(s),
        u = n('2VqO'),
        m = n.n(u),
        v = n('KEM+'),
        h = n.n(v),
        p = (n('2G9S'), n('KOtZ'), n('7x/C'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        b = n.n(p),
        f = n('3XMw'),
        w = n.n(f),
        _ = n('oQhu'),
        y = n('mjJ+'),
        C = n('eb3s'),
        E = w.a.cfd2f35d,
        T = (function (e) {
          d()(n, e)
          var t = m()(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              h()(l()(e), 'state', { activeConfirmation: null }),
              h()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              h()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              h()(l()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            r()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : b.a.createElement(y.a, {
                        cancelButtonLabel: E,
                        items: this._getProcessedActionItems(),
                        onCloseRequested: e,
                      })
                },
              },
              {
                key: '_renderConfirmation',
                value: function (e) {
                  if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm)
                  var t = e || {},
                    n = t.confirmButtonType,
                    o = t.headline,
                    a = t.label,
                    i = t.text,
                    r = t.withCancelButton
                  return b.a.createElement(C.a, {
                    confirmButtonLabel: a,
                    confirmButtonType: n,
                    headline: o,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: i,
                    withCancelButton: r,
                  })
                },
              },
              {
                key: '_getProcessedActionItems',
                value: function () {
                  var e = this.props,
                    t = e.actionItems,
                    n = e.dividerIndices,
                    o = e.onClose
                  return g(t, n, o, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(b.a.Component),
        g = Object(_.a)(function (e, t, n, o) {
          return e.reduce(function (e, a, i) {
            var r = a.Icon,
              c = a.behavioralEventContext,
              l = a.confirmation,
              s = a.disabled,
              d = a.excludeFromActionMenu,
              u = a.isEmphasized,
              m = a.link,
              v = a.onClick,
              h = a.subText,
              p = a.testID,
              b = a.text
            a.withCancelButton
            if (!d) {
              var f = v
                ? function () {
                    l
                      ? l.render
                        ? o({ callback: v, render: l.render })
                        : o({
                            callback: v,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (v(), n())
                  }
                : n
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: r,
                isEmphasized: u,
                testID: p,
                subText: h,
                text: b,
                onClick: f,
                link: m,
                withBottomBorder: t && t.includes(i),
              })
            }
            return e
          }, [])
        })
      t.default = T
    },
    CwxE: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    MzK7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CONVERSATION_CONTROLS_ANALYTICS', function () {
          return Nn
        }),
        n.d(t, 'TweetCurationActionMenu', function () {
          return Pn
        })
      var o = n('RhWx'),
        a = n.n(o),
        i = n('yiKp'),
        r = n.n(i),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        m = n.n(u),
        v = n('5Yy7'),
        h = n.n(v),
        p = n('2VqO'),
        b = n.n(p),
        f = n('KEM+'),
        w = n.n(f),
        _ = (n('yH/f'), n('2G9S'), n('jwue'), n('7x/C'), n('LW0h'), n('ERkP')),
        y = n.n(_),
        C = n('d4kb'),
        E = function (e) {
          var t = e.scribeAction,
            n = e.user
          return Object(C.a)(n, function () {
            t({ element: 'add_to_list' })
          })
        },
        T = n('3XMw'),
        g = n.n(T),
        k = n('SNyS'),
        x = g.a.fb4ee11c,
        A = function (e) {
          var t = e.promotedContent
          if (t && t.impression_id) {
            var n = t.impression_id
            return {
              behavioralEventContext: { viewType: 'ad_info' },
              text: x,
              Icon: k.a,
              link: { pathname: '/i/about-this-ad/'.concat(n) },
            }
          }
        },
        I = n('xrkw'),
        R = g.a.g1fa869c,
        S = function (e) {
          var t = e.scribeAction,
            n = e.tweet
          return {
            text: R,
            onClick: function () {
              t({ element: 'analytics' })
            },
            link: '/'.concat(n.user.screen_name, '/status/').concat(n.id_str, '/analytics'),
            Icon: I.a,
          }
        },
        L = n('2qZs'),
        O = g.a.e2dc4393,
        M = function (e, t) {
          var n = t.scribeAction,
            o = t.tweetId
          return {
            text: e.isTrue('responsive_web_birdwatch_hcomp_user') ? 'Write a note [research]' : O,
            onClick: function () {
              n({ element: 'contribute_to_birdwatch' })
            },
            link: { pathname: '/i/birdwatch/contribute/'.concat(o) },
            Icon: L.a,
          }
        },
        H = n('EbOo'),
        z = n('xZGM'),
        D = n('dFWS'),
        B = g.a.bae0cbcf,
        F = g.a.f8393bda,
        j = function (e) {
          var t = e.onChangeConversationControls,
            n = !!e.tweet.exclusivity_info
          return { disabled: n, onClick: n ? void 0 : t, subText: n ? F : void 0, text: B, Icon: D.a }
        },
        U = { defaultToast: { text: g.a.ae0c5fbe }, showToast: !0 },
        N = (n('lTEL'), n('JtPf'), n('87if'), n('kYxP'), n('j7tW')),
        P = n('1YZw'),
        K = n('0pUJ'),
        V = n('eSoz'),
        W = n('XOJV'),
        q = n('G6rE'),
        J = n('rxPX'),
        G = n('ymux'),
        Y = n('0KEI'),
        Z = n('RqPI'),
        X = function (e, t) {
          return Object(z.C)(e, z.o)
        },
        Q = function (e, t) {
          return Object(z.C)(e, z.n)
        },
        $ = function (e) {
          return Object(z.C)(e, z.d)
        },
        ee = function (e, t) {
          return Object(V.h)(e, t.tweet)
        },
        te = function (e) {
          return function (t, n, o) {
            var a = o.featureSwitches
            return Promise.all([
              t(W.a.delete(e)),
              t(Object(G.a)({ focalTweetId: e, featureSwitches: a }).deleteTimeline()),
            ])
          }
        },
        ne = Object(J.a)()
          .propsFromState(function () {
            return {
              userCountry: Z.y,
              userLanguage: Z.o,
              shouldShowMuteEducationTip: X,
              shouldShowHideReplyTip: Q,
              shouldShowConversationControlsTip: $,
              disableRemoveFromCommunity: ee,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: z.y,
              addToast: P.b,
              block: q.e.block,
              changeConversationControls: W.a.changeConversationControls,
              createLocalApiErrorHandler: Object(Y.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CURATION_ACTION_SHEET_CONTAINER',
              ),
              deleteTweet: te,
              dismissUserFromConversation: G.b,
              follow: q.e.follow,
              hideReply: W.a.hideReply,
              unmentionUserFromConversation: W.a.unmentionUserFromConversation,
              mute: K.a,
              muteTweet: W.a.mute,
              pin: N.a,
              removeConversationControls: W.a.removeConversationControls,
              removeTag: W.a.removeTag,
              unblock: q.e.unblock,
              unfollow: q.e.unfollow,
              unhideReply: W.a.unhideReply,
              unmute: q.e.unmute,
              unmuteTweet: W.a.unmute,
              unpin: N.c,
            }
          })
          .withAnalytics(),
        oe = n('H7Rt'),
        ae = n('v6aA'),
        ie = function (e) {
          return Object(z.C)(e, z.d)
        },
        re = Object(J.a)()
          .propsFromState(function () {
            return { shouldShowConversationControlsTip: ie }
          })
          .propsFromActions(function () {
            return { addFlag: z.y }
          }),
        ce = n('ddV6'),
        le = n.n(ce),
        se = n('FGLp')
      var de = n('MWbm'),
        ue = n('4zmP'),
        me = n('rHpw'),
        ve = g.a.bae0cbcf,
        he = me.a.create(function (e) {
          return {
            inlineCallout: { position: 'absolute', right: e.spaces.space32, marginTop: e.spaces.space2, zIndex: 1 },
            textStyle: { whiteSpace: 'nowrap' },
          }
        }),
        pe = re(function (e) {
          var t = e.addFlag,
            n = e.shouldShowConversationControlsTip,
            o = y.a.useRef(),
            a = (function (e) {
              var t = y.a.useState(!1),
                n = le()(t, 2),
                o = n[0],
                a = n[1],
                i =
                  'IntersectionObserver' in window
                    ? new IntersectionObserver(function (e) {
                        var t = le()(e, 1)[0]
                        return a(t.isIntersecting)
                      })
                    : null
              return (
                Object(se.a)(function () {
                  if (null !== i)
                    return (
                      i.observe(e.current),
                      function () {
                        i.disconnect()
                      }
                    )
                }),
                o
              )
            })(o),
            i = y.a.useRef(!1),
            r = y.a.useContext(ae.a).featureSwitches.isTrue('conversation_controls_change_tooltip_enabled'),
            c = n && r
          return (
            y.a.useEffect(
              function () {
                a &&
                  ((i.current = !0),
                  setTimeout(function () {
                    t(z.d)
                  }, 5e3))
              },
              [a, t],
            ),
            y.a.useEffect(function () {
              return function () {
                i.current && t(z.d)
              }
            }, []),
            y.a.createElement(
              de.a,
              { ref: o, style: he.inlineCallout },
              a && c ? y.a.createElement(ue.a, { text: ve, textStyle: he.textStyle, withRightArrow: !0 }) : null,
            )
          )
        }),
        be = n('yZqq'),
        fe = n('hiGS'),
        we = g.a.d96cf7cd,
        _e = g.a.dd211107,
        ye = g.a.c55d72d0,
        Ce = g.a.a1aa840e,
        Ee = g.a.c189f2dd,
        Te = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.deleteTweet,
            i = e.onDeleteTweet,
            r = e.scribeAction,
            c = e.tweet
          return {
            confirmation: { label: we, headline: _e, text: ye, confirmButtonType: 'destructiveFilled' },
            isEmphasized: !0,
            text: we,
            onClick: function () {
              a(c.id_str).then(function () {
                t({ text: Ce, behavioralEventEntityToken: n })
              }, o({ defaultToast: { text: Ee }, showToast: !0 })),
                r({ element: 'delete' }),
                i && i(c.id_str)
            },
            Icon: fe.a,
          }
        },
        ge = n('CwxE'),
        ke = g.a.e6c84638,
        xe = function (e) {
          var t = e.permalink,
            n = e.scribeAction
          return {
            behavioralEventContext: { viewType: 'embed' },
            text: ke,
            onClick: function () {
              var e = 'https://publish.twitter.com/?url=https://twitter.com'.concat(t)
              window.open(e, '_blank'), n({ element: 'embed_tweet' })
            },
            Icon: ge.a,
          }
        },
        Ae = n('pwey'),
        Ie = n('PSpH'),
        Re = g.a.c66afdc2,
        Se = g.a.hbe4feb4,
        Le = g.a.e1618e48,
        Oe = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.follow,
            i = e.promotedContent,
            c = e.scribeAction,
            l = e.user
          return {
            behavioralEventContext: { viewType: 'follow', viewState: { type: 'toggleable', toggledTo: !0 } },
            text: Re({ screenName: l.screen_name }),
            onClick: function () {
              a(l.id_str, { promotedContent: i }).then(function () {
                c({ element: 'follow' }),
                  l.protected
                    ? t({ text: Se({ screenName: l.screen_name }), behavioralEventEntityToken: n })
                    : t({ text: Le({ screenName: l.screen_name }), behavioralEventEntityToken: n })
              }, o(r()(r()({}, Ie.a), {}, { showToast: !0 }))),
                c({ element: 'follow_attempt' })
            },
            Icon: Ae.a,
          }
        },
        Me = (n('5BYb'), Object.freeze({ all: g.a.baffe39a, community: g.a.af293dc2, by_invitation: g.a.cf7f7e39 })),
        He = g.a.bf994ab2,
        ze = function (e, t) {
          var n,
            o,
            a = Me[t]
          t === oe.a.by_invitation &&
            !(
              null !== (n = e.entities) &&
              void 0 !== n &&
              null !== (o = n.user_mentions) &&
              void 0 !== o &&
              o.some(function (t) {
                return t.id_str !== e.user.id_str
              })
            ) &&
            (a = He)
          return y.a.createElement(g.a.I18NFormatMessage, { $i18n: 'f8ea2809', selection: a })
        },
        De = n('feu+'),
        Be = n('eb3s'),
        Fe = n('lUZE'),
        je = n('5cUs'),
        Ue = g.a.ge5067bb,
        Ne = g.a.ea626ab3,
        Pe = g.a.fc716886,
        Ke = g.a.f2a2a06e,
        Ve = g.a.f82c0bbf,
        We = ''.concat(Ke, '\n\n').concat(Ve),
        qe = g.a.b2615c6d,
        Je = g.a.i62a03aa,
        Ge = g.a.cfd2f35d,
        Ye = g.a.a6450e83,
        Ze = g.a.hb279a11,
        Xe = function (e) {
          var t = e.addFlag,
            n = e.addToast,
            o = e.behavioralEventEntityToken,
            a = e.createLocalApiErrorHandler,
            i = e.hideReply,
            r = e.onBlock,
            c = e.onTweetDismiss,
            l = e.scribeAction,
            s = e.shouldShowHideReplyTip,
            d = e.tweet,
            u = function () {
              l({ element: 'moderated_replies_prompt', action: 'impression' })
            }
          return {
            confirmation: s
              ? {
                  render: function (e, t) {
                    return (function (e) {
                      var t = e.onConfirm,
                        n = e.onCancel,
                        o = e.onHideReplyImpression,
                        a = void 0 === o ? function () {} : o
                      return y.a.createElement(De.a, {
                        actionLabel: Ue,
                        graphic: Fe.a,
                        headline: Pe,
                        onAction: t,
                        onClose: n,
                        onImpression: a,
                        onTertiaryAction: n,
                        subtext: We,
                        supportUrl:
                          'https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply',
                        tertiaryActionLabel: Ge,
                      })
                    })({ onConfirm: e, onCancel: t, onHideReplyImpression: u })
                  },
                }
              : {
                  render: function (e, t) {
                    var n = d.user.screen_name
                    return y.a.createElement(Be.a, {
                      cancelButtonLabel: Je,
                      confirmButtonLabel: Ye,
                      confirmButtonType: 'destructiveFilled',
                      headline: qe({ screenName: n }),
                      onCancel: e,
                      onConfirm: function () {
                        r(), e()
                      },
                      text: Ze({ screenName: n }),
                    })
                  },
                },
            text: Ue,
            onClick: function () {
              t(z.n),
                i(d.id_str, { conversation_id: d.conversation_id_str }).then(function (e) {
                  c && c(), n({ text: Ne, behavioralEventEntityToken: o })
                }, a({ showToast: !0 })),
                l({ element: 'moderate_reply' })
            },
            Icon: je.a,
          }
        },
        Qe = n('n5fo'),
        $e = n('fz3c'),
        et = g.a.f20b040d,
        tt = function (e, t) {
          return {
            text: et,
            Icon: Qe.a,
            link: {
              pathname: '/i/report/'.concat($e.a.HideCommunityTweet, '/').concat(e),
              state: { scribeNamespace: t },
            },
          }
        },
        nt = n('jQy5'),
        ot = n('NTtI'),
        at = n('qz6Z'),
        it = n('w02m'),
        rt = g.a.e2d6c17e,
        ct = g.a.cd1942f4,
        lt = g.a.bbd8bed6,
        st = g.a.c13af432,
        dt = g.a.gf5e9ea6,
        ut = g.a.df744bd9,
        mt = g.a.j9552760,
        vt = g.a.cfd2f35d,
        ht = g.a.d751694c,
        pt = function (e) {
          var t = e.addFlag,
            n = e.addToast,
            o = e.behavioralEventEntityToken,
            a = e.createLocalApiErrorHandler,
            i = e.muteTweet,
            r = e.scribeAction,
            c = e.shouldShowMuteEducationTip,
            l = e.tweet,
            s = e.unmuteTweet,
            d = function () {
              t(z.o)
            },
            u = function () {
              s(l.id_str).then(
                function () {
                  n({ text: st, behavioralEventEntityToken: o })
                },
                function (e) {
                  a({ showToast: !0 })(e), r({ element: 'unmute_conversation_error' })
                },
              ),
                r({ element: 'unmute_conversation' })
            },
            m = {
              behavioralEventContext: {
                viewType: 'mute_conversation',
                viewState: { type: 'toggleable', toggledTo: !0 },
              },
              text: rt,
              onClick: function () {
                i(l.id_str).then(
                  function () {
                    n({
                      action: { label: dt, onAction: u, behavioralEventViewType: 'unmute_conversation' },
                      behavioralEventEntityToken: o,
                      text: lt,
                    })
                  },
                  function (e) {
                    a({ showToast: !0 })(e), r({ element: 'mute_conversation_error' })
                  },
                ),
                  r({ element: 'mute_conversation' })
              },
              confirmation: c
                ? {
                    render: function (e, t) {
                      return y.a.createElement(De.a, {
                        actionLabel: ut,
                        graphic: ot.a,
                        graphicDisplayMode: 'illustration',
                        headline: mt,
                        onAction: e,
                        onClose: t,
                        onImpression: d,
                        onTertiaryAction: t,
                        subtext: ht,
                        supportUrl: 'https://support.twitter.com/articles/20175032',
                        tertiaryActionLabel: vt,
                      })
                    },
                  }
                : void 0,
              Icon: at.a,
            },
            v = {
              behavioralEventContext: {
                viewType: 'mute_conversation',
                viewState: { type: 'toggleable', toggledTo: !1 },
              },
              text: ct,
              onClick: u,
              Icon: it.a,
            }
          return l.conversation_muted ? v : m
        },
        bt = n('ShJ/'),
        ft = 'block',
        wt = 'pin',
        _t = 'unpin',
        yt = 'report',
        Ct = g.a.ha35a1d2,
        Et = g.a.afac3b9d,
        Tt = g.a.e2d44ce9,
        gt = g.a.c5d23126,
        kt = g.a.aaef1b48,
        xt = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.pin,
            i = e.scribeAction,
            r = e.tweetId
          return {
            confirmation: { text: Tt, headline: Et, label: gt },
            testID: wt,
            text: Ct,
            onClick: function () {
              a(r).then(function () {
                t({ text: kt, behavioralEventEntityToken: n })
              }, o({ showToast: !0 })),
                i({ element: 'pin' })
            },
            Icon: bt.a,
          }
        },
        At = g.a.f5cdcc2b,
        It = function (e) {
          var t = e.onTweetDismiss
          return { text: At, onClick: t, Icon: k.a }
        },
        Rt = (n('KqXw'), n('WNMA'), n('24HD')),
        St = n('Bwid'),
        Lt = g.a.jcba15d2,
        Ot = function (e) {
          var t = e.history,
            n = e.removeAutoblockAction,
            o = e.user,
            a = Object(Rt.i)(o.screen_name)
          return {
            text: Lt,
            onClick: function () {
              n(a)
              t.location.pathname.match(/actioned_tweets\/\d+/) && t.goBack()
            },
            confirmation: a,
            Icon: St.a,
          }
        },
        Mt = n('5oT/'),
        Ht = g.a.b99364a5,
        zt = function (e, t, n) {
          return {
            text: Ht({ screenName: e.screen_name }),
            Icon: Mt.a,
            link: {
              pathname: '/i/report/'.concat($e.a.RemoveCommunityMember, '/').concat(t),
              state: { scribeNamespace: n },
            },
          }
        },
        Dt = n('Rp9C'),
        Bt = n('4bW+'),
        Ft = n('u0B7'),
        jt = n('SJ11'),
        Ut = n('tJZD'),
        Nt = g.a.ja66a2b4,
        Pt = g.a.c2423b7a,
        Kt = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.promotedContent,
            i = e.scribeAction,
            r = e.unfollow,
            c = e.user
          return {
            behavioralEventContext: { viewType: 'follow', viewState: { type: 'toggleable', toggledTo: !1 } },
            text: Nt({ screenName: c.screen_name }),
            onClick: function () {
              r(c.id_str, { promotedContent: a }).then(function (e) {
                t({ behavioralEventEntityToken: n, text: Pt({ screenName: c.screen_name }) })
              }, o(Ut.a)),
                i({ element: 'unfollow' })
            },
            Icon: jt.a,
          }
        },
        Vt = n('Lsrn'),
        Wt = n('k/Ka'),
        qt = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(Wt.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [Vt.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            y.a.createElement(
              'g',
              null,
              y.a.createElement('path', {
                d: 'M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z',
              }),
              y.a.createElement('path', {
                d: 'M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z',
              }),
            ),
          )
        }
      qt.metadata = { width: 24, height: 24 }
      var Jt = qt,
        Gt = g.a.i31dfa4c,
        Yt = g.a.j8e56ba1,
        Zt = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.scribeAction,
            i = e.tweet,
            r = e.unhideReply
          return {
            text: Gt,
            onClick: function () {
              r(i.id_str, { conversation_id: i.conversation_id_str }).then(function (e) {
                t({ ariaOnly: !0, text: Yt, behavioralEventEntityToken: n })
              }, o({ showToast: !0 })),
                a({ element: 'unmoderate_reply' })
            },
            Icon: Jt,
          }
        },
        Xt = g.a.ic030337,
        Qt = g.a.j1b8c867,
        $t = g.a.eb2d59f3,
        en = g.a.j44ec61f,
        tn = g.a.i0086d6b,
        nn = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.scribeAction,
            i = e.tweetId,
            r = e.unpin
          return {
            confirmation: { text: $t, headline: Qt, label: en },
            testID: _t,
            text: Xt,
            onClick: function () {
              r(i).then(function () {
                t({ text: tn, behavioralEventEntityToken: n })
              }, o({ showToast: !0 })),
                a({ element: 'unpin' })
            },
            Icon: bt.a,
          }
        },
        on = g.a.f9478972,
        an = function (e) {
          var t = e.permalink,
            n = e.scribeAction
          return {
            text: on,
            link: ''.concat(t, '/hidden'),
            onClick: function () {
              n({ element: 'view_moderated_replies' })
            },
            Icon: je.a,
          }
        },
        rn = n('TnY3'),
        cn = n('mqpi'),
        ln = n('4hQ9'),
        sn = n('ACNv'),
        dn =
          (n('jQ3i'),
          n('x4t0'),
          function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return Object(Wt.a)(
              'svg',
              r()(
                r()({}, e),
                {},
                {
                  accessibilityHidden: void 0 === e.accessibilityLabel,
                  style: [Vt.a.root, e.style],
                  viewBox: '0 0 24 24',
                },
              ),
              y.a.createElement(
                'g',
                null,
                y.a.createElement('path', {
                  d: 'M10.478 22.065c-.124 0-.248-.03-.36-.092-.24-.132-.39-.384-.39-.658v-4.562c0-.414.336-.75.75-.75s.75.336.75.75v3.187c1.912-1.238 5.64-3.684 6.772-4.644 1.57-1.33 2.51-3.265 2.512-5.175 0-1.075-.266-2.13-.767-3.05-.197-.364-.063-.82.3-1.018.367-.196.82-.062 1.02.3.617 1.138.945 2.437.947 3.76v.02c-.005 2.344-1.142 4.7-3.043 6.31-1.616 1.37-7.825 5.34-8.09 5.508-.12.078-.262.117-.402.117zM2.75 20.5c-.192 0-.384-.073-.53-.22-.293-.293-.293-.768 0-1.06L20.72.72c.293-.294.768-.294 1.06 0s.294.767 0 1.06l-18.5 18.5c-.146.147-.338.22-.53.22zm1.326-5.993c-.243 0-.48-.117-.625-.335-.777-1.17-1.188-2.57-1.188-4.056 0-4.374 3.427-7.8 7.8-7.8h4.34c.415 0 .75.335.75.75s-.335.75-.75.75h-4.34c-3.532 0-6.3 2.767-6.3 6.3 0 1.205.315 2.29.938 3.226.23.345.137.81-.21 1.04-.127.084-.27.125-.414.125z',
                }),
              ),
            )
          })
      dn.metadata = { width: 24, height: 24 }
      var un = dn,
        mn = n('zb92'),
        vn = Object(mn.a)({
          loader: function () {
            return n.e(219).then(n.bind(null, 'cM6C'))
          },
        }),
        hn = g.a.bb16cc75,
        pn = g.a.de21174c,
        bn = function (e, t) {
          return y.a.createElement(vn, { onCancel: t, onConfirm: e })
        },
        fn = function (e, t) {
          var n, o, a
          if (!e) return !1
          var i =
              null === (n = t.entities) || void 0 === n || null === (o = n.user_mentions) || void 0 === o
                ? void 0
                : o.some(function (t) {
                    return t.id_str === e
                  }),
            r = t.in_reply_to_user_id_str === e,
            c = i || r,
            l = null === (a = t.unmentioned_user_ids) || void 0 === a ? void 0 : a.includes(e)
          return c && !l
        },
        wn = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            a = e.scribeAction,
            i = e.tweet,
            r = e.unmentionUserFromConversation
          return {
            behavioralEventContext: { viewType: 'leave_conversation' },
            confirmation: { render: bn },
            text: hn,
            onClick: function () {
              r(i.id_str).then(function () {
                t({ behavioralEventEntityToken: n, text: pn })
              }, o({ showToast: !0 })),
                a({ element: 'leave_conversation' })
            },
            Icon: un,
          }
        },
        _n = (n('ho0z'), n('0zG9'), n('zIWA')),
        yn = n('6s7X'),
        Cn = g.a.f1824804,
        En = g.a.ff9bd692,
        Tn = g.a.e3fd237d,
        gn = g.a.d1e2161f,
        kn = function (e) {
          var t = e.analytics,
            n = e.featureSwitches,
            o = e.history,
            a = e.isAppealTweetWarning,
            i = void 0 !== a && a,
            r = e.promotedContent,
            c = e.reporterCountry,
            l = e.reporterLanguage,
            s = e.scribeAction,
            d = e.tweet,
            u = { element: 'report_tweet' },
            m = '/i/report/status',
            v = $e.a.Tweet,
            h = _n.a,
            p = r ? Tn : En
          i &&
            ((u = { element: 'appeal_tweet_warning' }),
            (m = '/i/report/appeal_tweet_warning'),
            (v = $e.a.AppealTweetWarning),
            (h = yn.a),
            (p = Cn))
          return {
            behavioralEventContext: { viewType: 'report' },
            Icon: h,
            onClick: function () {
              var e,
                a,
                h,
                p,
                b,
                f = t.contextualScribeData,
                w =
                  ((null == d ||
                  null === (e = d.extended_entities) ||
                  void 0 === e ||
                  null === (a = e.media) ||
                  void 0 === a
                    ? void 0
                    : a.length) || 0) > 0,
                _ =
                  f.items &&
                  f.items[0] &&
                  (null === (h = f.items[0].conversation_details) || void 0 === h ? void 0 : h.conversation_section)
              if (
                (s(u),
                !(
                  i ||
                  d.community_id_str ||
                  '745291183405076480:broadcast' === (null === (p = d.card) || void 0 === p ? void 0 : p.name) ||
                  '3691233323:periscope_broadcast' === (null === (b = d.card) || void 0 === b ? void 0 : b.name) ||
                  r
                ) && Object($e.g)(n, v, c, l))
              ) {
                var y = Object($e.d)({
                  clientReferer: window.location.pathname,
                  conversationSection: _,
                  isMedia: w,
                  isPromoted: void 0 !== r,
                  reportType: v,
                  reportedTweet: d,
                  reportedUser: d.user.id_str,
                  scribeNamespace: t.contextualScribeNamespace,
                })
                o.push({
                  pathname: '/i/safety/report_story_start',
                  state: { input: { requested_variant: JSON.stringify(y) } },
                })
              } else
                o.push({
                  pathname: ''.concat(m, '/').concat(d.id_str),
                  state: {
                    clientReferer: window.location.pathname,
                    conversationSection: _,
                    isMedia: w,
                    promotedContent: r,
                    scribeNamespace: t.contextualScribeNamespace,
                  },
                })
            },
            testID: yt,
            text: p,
          }
        },
        xn = function (e) {
          var t = e.promotedContent,
            n = e.scribeAction
          return {
            behavioralEventContext: { viewType: 'report' },
            Icon: _n.a,
            link: 'https://help.twitter.com/forms',
            onClick: function () {
              n({ element: 'report_tweet' })
            },
            testID: yt,
            text: t ? Tn : En,
          }
        },
        An = function (e) {
          return {
            Icon: _n.a,
            link: 'https://help.twitter.com/forms/netzwerkdurchsetzungsgesetz?tweet_id='.concat(e),
            text: gn,
          }
        },
        In = n('Z6aJ'),
        Rn = n('IG7M'),
        Sn = (n('7xRU'), n('z84I'), n('0wXR')),
        Ln = n('1wVr'),
        On = g.a.e68b09b4,
        Mn = g.a.g9425e3f,
        Hn = g.a.jfc76958,
        zn = function (e, t) {
          var n,
            o,
            a,
            i =
              (null === (n = t.extended_entities) || void 0 === n ? void 0 : n.media) &&
              t.extended_entities.media[0] &&
              (null === (o = t.extended_entities.media[0].features) ||
              void 0 === o ||
              null === (a = o.all) ||
              void 0 === a
                ? void 0
                : a.tags)
          return (
            !!i &&
            Object(Ln.a)(i, function (t) {
              return t.user_id === e
            })
          )
        },
        Dn = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.loggedInUserId,
            o = e.removeTag,
            a = e.tweet
          return {
            behavioralEventContext: { viewType: 'remove_tag' },
            confirmation: { label: On, headline: Mn },
            text: Hn,
            onClick: function () {
              var e,
                i,
                r =
                  null === (e = a.extended_entities) || void 0 === e || null === (i = e.media) || void 0 === i
                    ? void 0
                    : i
                        .map(function (e) {
                          return e.id_str
                        })
                        .join(',')
              o(a.id_str, { status_id: a.id_str, media_ids: r, tagged_user_ids: n }).catch(t({ showToast: !0 }))
            },
            Icon: Sn.a,
          }
        },
        Bn = g.a.e133be4e,
        Fn = g.a.a9fd20be,
        jn = [
          'hideTweet',
          'removeCommunityMember',
          'delete',
          'appealTweetWarning',
          'pinOrUnpin',
          'promotedTweetDismiss',
          'adInfo',
          'removeTag',
          'feedbackOptions',
          'followOrUnfollow',
          'addOrRemoveFromList',
          'muteOrUnmute',
          'muteOrUnmuteConversation',
          'leaveConversation',
          'changeConversationControls',
          'blockOrUnblock',
          'removeAutoblock',
          'hideReply',
          'unhideReply',
          'embed',
          'report',
          'reportNetzDG',
          'analytics',
          'viewHiddenReplies',
          'birdwatch',
        ],
        Un = function (e) {
          return 'DE' === e.toUpperCase()
        },
        Nn = Object.freeze({
          all: 'change_conversation_control_to_everyone',
          community: 'change_conversation_control_to_community',
          by_invitation: 'change_conversation_control_to_mentioned',
          followers: 'change_conversation_control_to_followers',
          community_members: 'community_members',
          community_hidden_tweet: 'community_hidden_tweet',
          super_followers_exclusive: 'super_followers_exclusive',
          community_tweet_member_removed: 'community_tweet_member_removed',
          trusted_friends_tweet: 'trusted_friends_tweet',
        }),
        Pn = (function (e) {
          h()(n, e)
          var t = b()(n)
          function n() {
            var e
            l()(this, n)
            for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              w()(m()(e), '_dividerIndices', []),
              w()(m()(e), 'state', { showModerationBlockConfirmation: !1 }),
              w()(m()(e), '_shouldDisable', cn.b.bind(null, e.context.featureSwitches)),
              w()(m()(e), '_birdwatchAction', M.bind(null, e.context.featureSwitches)),
              w()(
                m()(e),
                '_shouldRenderSectionDividers',
                e.context.featureSwitches.isTrue('responsive_web_menu_section_divider_enabled'),
              ),
              w()(
                m()(e),
                '_authorModeratedReplies',
                e.context.featureSwitches.isTrue('author_moderated_replies_urt_container_enabled'),
              ),
              w()(
                m()(e),
                '_birdwatchNoteWritingEnabled',
                e.context.featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled'),
              ),
              w()(
                m()(e),
                '_convoControlsEnabled',
                e.context.featureSwitches.isTrue('conversation_controls_change_enabled'),
              ),
              w()(m()(e), '_c9sModerationEnabled', e.context.featureSwitches.isTrue('c9s_moderation_enabled')),
              w()(m()(e), '_c9sRemoveMemberEnabled', e.context.featureSwitches.isTrue('c9s_remove_member_enabled')),
              w()(m()(e), '_onMenuClick', function () {
                var t = e.props,
                  n = t.addFlag,
                  o = t.onMenuClick,
                  a = t.shouldShowConversationControlsTip,
                  i = t.withChangeConversationControlsTooltip
                a && i && n(z.d), o && o()
              }),
              w()(m()(e), '_handleOnChangeConversationControls', function (t) {
                var n,
                  o = e.props,
                  a = o.addToast,
                  i = o.analytics,
                  r = o.behavioralEventEntityToken,
                  c = o.changeConversationControls,
                  l = o.createLocalApiErrorHandler,
                  s = o.removeConversationControls,
                  d = o.tweet,
                  u = ze(d, t)
                t === oe.a.all
                  ? s &&
                    s(d.id_str).then(function () {
                      a({ text: u, behavioralEventEntityToken: r }),
                        i.scribe({
                          element: Nn.all,
                          action: 'click',
                          data: { items: [Dt.a.getChangeConversationControlsItem(d, t)] },
                        })
                    }, l(U))
                  : c &&
                    c(d.id_str, {
                      policy: t,
                      screenName: null === (n = d.user) || void 0 === n ? void 0 : n.screen_name,
                    }).then(function () {
                      a({ text: u, behavioralEventEntityToken: r }),
                        i.scribe({
                          element: Nn[t],
                          action: 'click',
                          data: { items: [Dt.a.getChangeConversationControlsItem(d, t)] },
                        })
                    }, l(U))
              }),
              w()(m()(e), '_renderCurationActionMenu', function (t) {
                return function (n) {
                  var o = e._getActionItems(t)
                  return y.a.createElement(sn.default, {
                    actionItems: o,
                    dividerIndices: e._shouldRenderSectionDividers ? e._dividerIndices : void 0,
                    onClose: n,
                  })
                }
              }),
              w()(m()(e), '_getMuteOrUnmuteAction', function () {
                var t = e.props,
                  n = t.addToast,
                  o = t.behavioralEventEntityToken,
                  a = t.createLocalApiErrorHandler,
                  i = t.dismissUserFromConversation,
                  c = t.mute,
                  l = t.promotedContent,
                  s = t.tweet,
                  d = t.unmute,
                  u = s.user,
                  m = {
                    addToast: n,
                    behavioralEventEntityToken: o,
                    createLocalApiErrorHandler: a,
                    scribeAction: e._scribeAction,
                  }
                return Object(nt.a)(
                  r()(
                    r()({}, m),
                    {},
                    { mute: c, unmute: d, user: u, dismissUserFromConversation: i, promotedContent: l },
                  ),
                )
              }),
              w()(m()(e), '_getActionItems', function (t) {
                var n = e.props,
                  o = n.deleteTweet,
                  i = n.follow,
                  c = n.hideReply,
                  l = n.muteTweet,
                  s = n.pin,
                  d = n.removeTag,
                  u = n.unmentionUserFromConversation,
                  m = n.unmuteTweet,
                  v = n.unpin,
                  h = e.props,
                  p = h.addFlag,
                  b = h.addToast,
                  f = h.analytics,
                  w = h.behavioralEventEntityToken,
                  _ = h.createLocalApiErrorHandler,
                  y = h.disableRemoveFromCommunity,
                  C = h.feedbackItems,
                  T = h.history,
                  g = h.isPinned,
                  k = h.onDeleteTweet,
                  x = h.onTweetDismiss,
                  I = h.promotedContent,
                  R = h.shouldShowHideReplyTip,
                  L = h.shouldShowMuteEducationTip,
                  O = h.tweet,
                  M = h.userCountry,
                  H = h.userLanguage,
                  z = h.withChangeConversationControls,
                  D = h.withCommunityModerationAuthority,
                  B = h.withHideReply,
                  F = h.withMuteConversation,
                  U = h.withUnhideReply,
                  N = h.withViewHiddenReplies,
                  P = e.context,
                  K = P.featureSwitches,
                  V = P.loggedInUserId,
                  W = O.user,
                  q = [],
                  J = In.a.isPromoted(I),
                  G = {},
                  Y = [],
                  Z = e._scribeAction,
                  X = { addToast: b, behavioralEventEntityToken: w, createLocalApiErrorHandler: _, scribeAction: Z },
                  Q = e._c9sModerationEnabled && O.community_id_str && D
                if (
                  (J && (G.adInfo = A({ promotedContent: I })),
                  W.id_str !== V ||
                    e._shouldDisable(O, cn.a.Analytics) ||
                    (G.analytics = S({ tweet: O, scribeAction: Z })),
                  W.protected ||
                    e._shouldDisable(O, cn.a.Embed) ||
                    (G.embed = xe({ permalink: O.permalink, scribeAction: Z })),
                  N &&
                    O.conversation_id_str === O.id_str &&
                    !e._shouldDisable(O, cn.a.ViewHiddenReplies) &&
                    (G.viewHiddenReplies = an({ permalink: O.permalink, scribeAction: Z })),
                  zn(V, O) &&
                    (G.removeTag = Dn({ createLocalApiErrorHandler: _, loggedInUserId: V, removeTag: d, tweet: O })),
                  fn(V, O) &&
                    K.isTrue('dont_mention_me_enabled') &&
                    (G.leaveConversation = wn(r()(r()({}, X), {}, { unmentionUserFromConversation: u, tweet: O }))),
                  V)
                )
                  if (
                    (W.blocking ||
                      e._shouldDisable(O, cn.a.ListsAddRemove) ||
                      (G.addOrRemoveFromList = E({ user: W, scribeAction: Z })),
                    e._birdwatchNoteWritingEnabled &&
                      (G.birdwatch = e._birdwatchAction({ scribeAction: Z, tweetId: O.id_str })),
                    W.id_str !== V)
                  ) {
                    if (!y && Q) {
                      var $ = f.contextualScribeNamespace
                      e._shouldDisable(O, cn.a.HideCommunityTweet) ||
                        (G.hideTweet = tt(O.id_str, r()(r()({}, $), {}, { element: 'hide_tweet' }))),
                        e._c9sRemoveMemberEnabled &&
                          !e._shouldDisable(O, cn.a.RemoveCommunityMember) &&
                          (G.removeCommunityMember = zt(
                            W,
                            O.id_str,
                            r()(r()({}, $), {}, { element: 'remove_community_member' }),
                          ))
                    }
                    x && J && (G.promotedTweetDismiss = It({ onTweetDismiss: x })),
                      W.blocking ||
                        e._shouldDisable(O, cn.a.FollowAuthor) ||
                        ((G.followOrUnfollow = W.following
                          ? Kt(r()(r()({}, X), {}, { unfollow: e.props.unfollow, promotedContent: I, user: W }))
                          : Oe(r()(r()({}, X), {}, { follow: i, promotedContent: I, user: W }))),
                        (G.muteOrUnmute = e._getMuteOrUnmuteAction())),
                      F &&
                        (G.muteOrUnmuteConversation = pt(
                          r()(
                            r()({}, X),
                            {},
                            { addFlag: p, muteTweet: l, shouldShowMuteEducationTip: L, tweet: O, unmuteTweet: m },
                          ),
                        )),
                      B &&
                        !e._authorModeratedReplies &&
                        (G.hideReply = Xe(
                          r()(
                            r()({}, X),
                            {},
                            {
                              addFlag: p,
                              hideReply: c,
                              onBlock: e._handleBlock,
                              onTweetDismiss: x,
                              shouldShowHideReplyTip: R,
                              tweet: O,
                            },
                          ),
                        )),
                      U && (G.unhideReply = Zt(r()(r()({}, X), {}, { tweet: O, unhideReply: e.props.unhideReply })))
                    var ee = {
                      user: W,
                      source: Rt.k.TWEET_CARET,
                      testID: ft,
                      blockAction: e._handleBlock,
                      unblockAction: e._handleUnblock,
                    }
                    if (((G.blockOrUnblock = Object(Rt.g)(ee)), W.smart_blocking)) {
                      var te = { history: T, user: W, removeAutoblockAction: e._handleUnblock }
                      G.removeAutoblock = Ot(te)
                    }
                  } else
                    g
                      ? (G.pinOrUnpin = nn(r()(r()({}, X), {}, { tweetId: O.id_str, unpin: v })))
                      : e._shouldDisable(O, cn.a.PinToProfile) ||
                        (G.pinOrUnpin = xt(r()(r()({}, X), {}, { pin: s, tweetId: O.id_str }))),
                      e._shouldIncludeTweetAppealOption() &&
                        (G.appealTweetWarning = kn({
                          analytics: f,
                          history: T,
                          isAppealTweetWarning: !0,
                          promotedContent: I,
                          scribeAction: Z,
                          tweet: O,
                          featureSwitches: K,
                          reporterCountry: M,
                          reporterLanguage: H,
                        })),
                      F &&
                        !e._shouldDisable(O, cn.a.MuteConversation) &&
                        (G.muteOrUnmuteConversation = pt(
                          r()(
                            r()({}, X),
                            {},
                            { addFlag: p, muteTweet: l, shouldShowMuteEducationTip: L, tweet: O, unmuteTweet: m },
                          ),
                        )),
                      z &&
                        e._convoControlsEnabled &&
                        (G.changeConversationControls = j({ tweet: O, onChangeConversationControls: t })),
                      (G.delete = Te(r()(r()({}, X), {}, { deleteTweet: o, onDeleteTweet: k, tweet: O })))
                var ne = V && V !== W.id_str
                return (
                  ne
                    ? (G.report = kn({
                        analytics: f,
                        history: T,
                        promotedContent: I,
                        scribeAction: Z,
                        tweet: O,
                        featureSwitches: K,
                        reporterCountry: M,
                        reporterLanguage: H,
                      }))
                    : !V &&
                      M &&
                      Un(M) &&
                      ((G.report = xn({ promotedContent: I, scribeAction: Z })), (G.reportNetzDG = An(O.id_str))),
                  jn.forEach(function (e) {
                    if ('feedbackOptions' === e) {
                      var t = C
                        ? C.filter(function (e) {
                            return !e.excludeFromActionMenu
                          })
                        : []
                      q.push.apply(q, a()(t)), ne && q.length && Y.push(q.length - 1)
                    } else if (G[e]) {
                      ne && ('embed' === e || ('report' === e && !G.embed)) && Y.push(q.length - 1), q.push(G[e])
                    }
                  }),
                  (e._dividerIndices = Y),
                  q
                )
              }),
              w()(m()(e), '_handleBlock', function () {
                var t = e.props,
                  n = t.addToast,
                  o = t.behavioralEventEntityToken,
                  a = t.block,
                  i = t.createLocalApiErrorHandler,
                  r = t.dismissUserFromConversation,
                  c = t.promotedContent,
                  l = t.tweet
                a(l.user.id_str, { promotedContent: c }).then(function () {
                  r({ userId: l.user.id_str, feedbackKeys: ['UnfollowEntity'] }),
                    n({
                      action: { label: Bn, onAction: e._handleUnblock, behavioralEventViewType: 'unblock' },
                      text: Fn,
                      behavioralEventEntityToken: o,
                    })
                }, i(H.a)),
                  e._scribeAction({ element: 'block' })
              }),
              w()(m()(e), '_handleUnblock', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.promotedContent,
                  a = t.tweet
                ;(0, t.unblock)(a.user.id_str, { promotedContent: o }).catch(n(Ft.a)),
                  e._scribeAction({ element: 'unblock' })
              }),
              w()(m()(e), '_scribeAction', function (t) {
                var n = t.action,
                  o = t.additionalData,
                  a = t.element,
                  i = e.props,
                  c = i.analytics,
                  l = i.promotedContent,
                  s = i.tweet,
                  d = c.contextualScribeData,
                  u = null != d && d.items ? d : r()(r()({}, d || {}), {}, { items: [Dt.a.getTweetItem(s, l)] })
                return o && (u = r()(r()({}, u), o)), c.scribe({ element: a, action: n || 'click', data: u })
              }),
              e
            )
          }
          return (
            d()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    o = n.isDisabled,
                    a = n.tweet,
                    i = n.withChangeConversationControlsTooltip,
                    r = (null === (e = a.conversation_control) || void 0 === e ? void 0 : e.policy) || oe.a.all
                  return y.a.createElement(
                    de.a,
                    { style: Kn.overflowMenu },
                    i ? y.a.createElement(pe, null) : null,
                    y.a.createElement(
                      be.a,
                      {
                        controlled: !0,
                        midConversationTweet: a,
                        onChange: this._handleOnChangeConversationControls,
                        value: r,
                      },
                      function (e) {
                        var n = e.openPopover
                        return y.a.createElement(Rn.a, {
                          isDisabled: o,
                          onClick: t._onMenuClick,
                          renderActionMenu: t._renderCurationActionMenu(n),
                          testID: Bt.a.caret,
                        })
                      },
                    ),
                  )
                },
              },
              {
                key: '_shouldIncludeTweetAppealOption',
                value: function () {
                  var e = this.props,
                    t = e.forwardPivotDisplayType,
                    n = e.isNsfwUser,
                    o = e.tweet,
                    a = e.userCountry,
                    i = e.userLanguage,
                    r = this.context,
                    c = r.featureSwitches,
                    l = r.loggedInUserId
                  return (
                    Object(ln.b)({
                      loggedInUserId: l,
                      featureSwitches: c,
                      forwardPivotDisplayType: t,
                      tweet: o,
                      userCountry: a,
                      userLanguage: i,
                    }) ||
                    Object(ln.a)({
                      loggedInUserId: l,
                      featureSwitches: c,
                      isNsfwUser: n,
                      tweet: o,
                      userCountry: a,
                      userLanguage: i,
                    })
                  )
                },
              },
            ]),
            n
          )
        })(y.a.Component)
      w()(Pn, 'defaultProps', { withRemoveFromBookmarks: !1 }), w()(Pn, 'contextType', ae.a)
      t.default = Object(rn.a)(ne(Pn))
      var Kn = me.a.create(function (e) {
        return { overflowMenu: { display: 'flex', flexDirection: 'row', alignItems: 'center' } }
      })
    },
    NTtI: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            a()(
              a()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 200 200',
              },
            ),
            r.a.createElement(
              'g',
              null,
              r.a.createElement('circle', { cx: '100', cy: '100', fill: '#97E3FF', r: '100' }),
              r.a.createElement('path', {
                d: 'M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z',
                fill: '#005FD1',
              }),
              r.a.createElement('path', {
                d: 'M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z',
                fill: '#1DA1F2',
              }),
              r.a.createElement('ellipse', {
                cx: '123.283',
                cy: '100.225',
                fill: '#97E3FF',
                rx: '6.567',
                ry: '45.075',
              }),
              r.a.createElement('path', {
                d: 'M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z',
                fill: '#71C9F8',
              }),
              r.a.createElement('path', {
                d: 'M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267',
                fill: '#005FD1',
              }),
              r.a.createElement('path', {
                d: 'M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z',
                fill: '#1DA1F2',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 200, height: 200 }), (t.a = s)
    },
    SNyS: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
              }),
              r.a.createElement('path', {
                d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    'ShJ/': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    Zg3A: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    hiGS: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        a = n.n(o),
        i = n('ERkP'),
        r = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
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
            r.a.createElement(
              'g',
              null,
              r.a.createElement('path', {
                d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
              }),
              r.a.createElement('path', {
                d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    yZqq: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        a = n.n(o),
        i = n('m3Bd'),
        r = n.n(i),
        c = n('ddV6'),
        l = n.n(c),
        s = n('ERkP'),
        d = n.n(s),
        u = (n('5BYb'), n('7x/C'), n('uFXj'), n('H7Rt')),
        m = n('3XMw'),
        v = n.n(m),
        h = n('MWbm'),
        p = n('t62R'),
        b = n('CKsB'),
        f = n('/yvb'),
        w = n('rHpw'),
        _ = n('Zg3A'),
        y = n('yiKp'),
        C = n.n(y),
        E = n('Lsrn'),
        T = n('k/Ka'),
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(T.a)(
            'svg',
            C()(
              C()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [E.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            d.a.createElement(
              'g',
              null,
              d.a.createElement('path', {
                d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
              }),
              d.a.createElement('path', {
                d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
              }),
            ),
          )
        }
      g.metadata = { width: 24, height: 24 }
      var k = g,
        x = n('boUI'),
        A = n('EweD'),
        I = v.a.g6185a9e,
        R = v.a.g2d04222,
        S = v.a.baffe39a,
        L = v.a.af293dc2,
        O = v.a.h1053f7e,
        M = v.a.bf994ab2,
        H = v.a.cf7f7e39,
        z = v.a.cfd2f35d,
        D = w.a.create(function (e) {
          return {
            root: {
              flexDirection: 'column',
              paddingTop: e.spaces.space16,
              paddingBottom: e.spaces.space4,
              borderRadius: e.borderRadii.xLarge,
            },
            popover: { maxWidth: 5 * e.spacesPx.space64 },
            modal: { borderRadius: e.borderRadii.none },
            title: { flexDirection: 'column', paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 },
            menuRow: {
              flexDirection: 'row',
              paddingTop: e.spaces.space12,
              paddingBottom: e.spaces.space12,
              alignItems: 'center',
              borderRadius: e.borderRadii.small,
            },
            cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 },
          }
        }),
        B = function (e) {
          var t,
            n,
            o = e.dismiss,
            a = e.isModal,
            i = e.midConversationTweet,
            r = e.value,
            c = function (t) {
              return function () {
                e.onChange(t), e.dismiss()
              }
            },
            l = !!i,
            s =
              l &&
              !(
                null != i &&
                null !== (t = i.entities) &&
                void 0 !== t &&
                null !== (n = t.user_mentions) &&
                void 0 !== n &&
                n.some(function (e) {
                  return e.id_str !== i.user.id_str
                })
              ),
            m = O
          return (
            s ? (m = M) : l && (m = H),
            d.a.createElement(
              h.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [D.root, a ? D.modal : D.popover],
              },
              d.a.createElement(
                h.a,
                { style: D.title },
                d.a.createElement(p.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, I),
                d.a.createElement(
                  p.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  R,
                ),
              ),
              d.a.createElement(
                h.a,
                null,
                d.a.createElement(b.a, {
                  Icon: _.a,
                  actionText: S,
                  isSelected: u.a.all === r,
                  onClick: c(u.a.all),
                  selectable: !0,
                  style: D.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(b.a, {
                  Icon: k,
                  actionText: L,
                  isSelected: u.a.community === r,
                  onClick: c(u.a.community),
                  selectable: !0,
                  style: D.menuRow,
                  withIconAsThumbnail: !0,
                }),
                d.a.createElement(b.a, {
                  Icon: s ? x.a : A.a,
                  actionText: m,
                  isSelected: u.a.by_invitation === r,
                  onClick: c(u.a.by_invitation),
                  selectable: !0,
                  style: D.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? d.a.createElement(
                      f.a,
                      {
                        key: 'button_cancel',
                        onPress: o,
                        size: 'large',
                        style: D.cancelButton,
                        type: 'primaryOutlined',
                      },
                      z,
                    )
                  : null,
              ),
            )
          )
        },
        F = n('OiMc'),
        j = n('efqG'),
        U = ['children', 'controlled']
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          o = void 0 !== n && n,
          i = e.disabled,
          c = d.a.useState(!1),
          s = l()(c, 2),
          u = s[0],
          m = s[1],
          v = d.a.useCallback(function () {
            return m(!0)
          }, []),
          h = d.a.useCallback(function () {
            return m(!1)
          }, []),
          p = o ? (u ? F.a.VISIBILITY_BEHAVIOR.forceVisible : F.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          b = 'function' == typeof t ? t({ openPopover: v, closePopover: h }) : t
        return d.a.createElement(
          j.a,
          {
            disabled: i,
            onDismiss: h,
            renderContent: function (t, n) {
              e.children, e.controlled
              var o = r()(e, U)
              return d.a.createElement(B, a()({}, o, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: p,
          },
          b,
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
