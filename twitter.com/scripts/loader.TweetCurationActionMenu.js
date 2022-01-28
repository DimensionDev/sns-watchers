;(window.webpackJsonp = window.webpackJsonp || []).push([
  [181, 169],
  {
    ACNv: function (e, t, n) {
      'use strict'
      n.r(t)
      n('OZaJ')
      var o = n('VrFO'),
        r = n.n(o),
        i = n('Y9Ll'),
        a = n.n(i),
        c = n('1Pcy'),
        l = n.n(c),
        s = n('5Yy7'),
        u = n.n(s),
        d = n('N+ot'),
        p = n.n(d),
        f = n('AuHH'),
        m = n.n(f),
        b = n('KEM+'),
        v = n.n(b),
        h = (n('2G9S'), n('KOtZ'), n('hBvt'), n('jQ3i'), n('x4t0'), n('ERkP')),
        w = n.n(h),
        y = n('3XMw'),
        _ = n.n(y),
        g = n('oQhu'),
        O = n('mjJ+'),
        E = n('eb3s')
      function C(e) {
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
          var n,
            o = m()(e)
          if (t) {
            var r = m()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return p()(this, n)
        }
      }
      var T = _.a.cfd2f35d,
        j = (function (e) {
          u()(n, e)
          var t = C(n)
          function n() {
            var e
            r()(this, n)
            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              v()(l()(e), 'state', { activeConfirmation: null }),
              v()(l()(e), '_handleConfirm', function (t) {
                e.setState({ activeConfirmation: t })
              }),
              v()(l()(e), '_handleConfirmed', function () {
                e.state.activeConfirmation && e.state.activeConfirmation.callback(),
                  e.setState({ activeConfirmation: null }),
                  e.props.onClose()
              }),
              v()(l()(e), '_handleCancelConfirm', function () {
                e.setState({ activeConfirmation: null })
              }),
              e
            )
          }
          return (
            a()(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.onClose,
                    t = this.state.activeConfirmation
                  return t
                    ? this._renderConfirmation(t)
                    : w.a.createElement(O.a, {
                        cancelButtonLabel: T,
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
                    r = t.label,
                    i = t.text,
                    a = t.withCancelButton
                  return w.a.createElement(E.a, {
                    confirmButtonLabel: r,
                    confirmButtonType: n,
                    headline: o,
                    onCancel: this._handleCancelConfirm,
                    onConfirm: this._handleConfirmed,
                    text: i,
                    withCancelButton: a,
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
                  return k(t, n, o, this._handleConfirm)
                },
              },
            ]),
            n
          )
        })(w.a.Component),
        k = Object(g.a)(function (e, t, n, o) {
          return e.reduce(function (e, r, i) {
            var a = r.Icon,
              c = r.behavioralEventContext,
              l = r.confirmation,
              s = r.disabled,
              u = r.excludeFromActionMenu,
              d = r.isEmphasized,
              p = r.link,
              f = r.onClick,
              m = r.subText,
              b = r.testID,
              v = r.text
            r.withCancelButton
            if (!u) {
              var h = f
                ? function () {
                    l
                      ? l.render
                        ? o({ callback: f, render: l.render })
                        : o({
                            callback: f,
                            text: l.text,
                            headline: l.headline,
                            label: l.label,
                            confirmButtonType: l.confirmButtonType,
                            withCancelButton: l.withCancelButton,
                          })
                      : (f(), n())
                  }
                : n
              e.push({
                behavioralEventContext: c,
                disabled: s,
                Icon: a,
                isEmphasized: d,
                testID: b,
                subText: m,
                text: v,
                onClick: h,
                link: p,
                withBottomBorder: t && t.includes(i),
              })
            }
            return e
          }, [])
        })
      t.default = j
    },
    MzK7: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'CONVERSATION_CONTROLS_ANALYTICS', function () {
          return Bn
        }),
        n.d(t, 'TweetCurationActionMenu', function () {
          return Fn
        })
      n('OZaJ'), n('+KXO'), n('1t7P'), n('daRM'), n('+oxZ'), n('FtHn')
      var o = n('RhWx'),
        r = n.n(o),
        i = n('VrFO'),
        a = n.n(i),
        c = n('Y9Ll'),
        l = n.n(c),
        s = n('1Pcy'),
        u = n.n(s),
        d = n('5Yy7'),
        p = n.n(d),
        f = n('N+ot'),
        m = n.n(f),
        b = n('AuHH'),
        v = n.n(b),
        h = n('KEM+'),
        w = n.n(h),
        y = (n('yH/f'), n('2G9S'), n('jwue'), n('LW0h'), n('ERkP')),
        _ = n.n(y),
        g = n('d4kb'),
        O = function (e) {
          var t = e.scribeAction,
            n = e.user
          return Object(g.a)(n, function () {
            t({ element: 'add_to_list' })
          })
        },
        E = n('3XMw'),
        C = n.n(E),
        T = n('SNyS'),
        j = C.a.fb4ee11c,
        k = function (e) {
          var t = e.promotedContent
          if (t && t.impression_id) {
            var n = t.impression_id
            return {
              behavioralEventContext: { viewType: 'ad_info' },
              text: j,
              Icon: T.a,
              link: { pathname: '/i/about-this-ad/'.concat(n) },
            }
          }
        },
        x = n('xrkw'),
        P = C.a.g1fa869c,
        A = function (e) {
          var t = e.scribeAction,
            n = e.tweet
          return {
            text: P,
            onClick: function () {
              t({ element: 'analytics' })
            },
            link: '/'.concat(n.user.screen_name, '/status/').concat(n.id_str, '/analytics'),
            Icon: x.a,
          }
        },
        I = n('2qZs'),
        S = C.a.h3ab37c7,
        D = function (e, t) {
          var n = t.scribeAction,
            o = t.tweetId
          return {
            text: e.isTrue('responsive_web_birdwatch_hcomp_user') ? 'Write a note [research]' : S,
            onClick: function () {
              n({ element: 'contribute_to_birdwatch' })
            },
            link: { pathname: '/i/birdwatch/contribute/'.concat(o) },
            Icon: I.a,
          }
        },
        R = n('EbOo'),
        M = n('xZGM'),
        L = n('dFWS'),
        H = C.a.bae0cbcf,
        z = C.a.f8393bda,
        B = function (e) {
          var t = e.onChangeConversationControls,
            n = !!e.tweet.exclusivity_info
          return { disabled: n, onClick: n ? void 0 : t, subText: n ? z : void 0, text: H, Icon: L.a }
        },
        F = { defaultToast: { text: C.a.ae0c5fbe }, showToast: !0 },
        U = (n('JtPf'), n('7x/C'), n('87if'), n('lTEL'), n('kYxP'), n('j7tW')),
        N = n('1YZw'),
        K = n('0pUJ'),
        W = n('XOJV'),
        V = n('G6rE'),
        Z = n('rxPX'),
        X = n('ymux'),
        J = n('0KEI'),
        q = n('RqPI'),
        Y = function (e, t) {
          return Object(M.z)(e, M.n)
        },
        G = function (e, t) {
          return Object(M.z)(e, M.m)
        },
        Q = function (e) {
          return Object(M.z)(e, M.d)
        },
        $ = function (e) {
          return function (t, n, o) {
            var r = o.featureSwitches
            return Promise.all([
              t(W.a.delete(e)),
              t(Object(X.a)({ focalTweetId: e, featureSwitches: r }).deleteTimeline()),
            ])
          }
        },
        ee = Object(Z.a)()
          .propsFromState(function () {
            return {
              userCountry: q.y,
              userLanguage: q.o,
              shouldShowMuteEducationTip: Y,
              shouldShowHideReplyTip: G,
              shouldShowConversationControlsTip: Q,
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: M.w,
              addToast: N.b,
              block: V.e.block,
              changeConversationControls: W.a.changeConversationControls,
              createLocalApiErrorHandler: Object(J.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_CURATION_ACTION_SHEET_CONTAINER',
              ),
              deleteTweet: $,
              dismissUserFromConversation: X.b,
              follow: V.e.follow,
              hideReply: W.a.hideReply,
              mute: K.a,
              muteTweet: W.a.mute,
              pin: U.a,
              removeConversationControls: W.a.removeConversationControls,
              removeTag: W.a.removeTag,
              unblock: V.e.unblock,
              unfollow: V.e.unfollow,
              unhideReply: W.a.unhideReply,
              unmute: V.e.unmute,
              unmuteTweet: W.a.unmute,
              unpin: U.c,
            }
          })
          .withAnalytics(),
        te = n('H7Rt'),
        ne = n('v6aA'),
        oe = function (e) {
          return Object(M.z)(e, M.d)
        },
        re = Object(Z.a)()
          .propsFromState(function () {
            return { shouldShowConversationControlsTip: oe }
          })
          .propsFromActions(function () {
            return { addFlag: M.w }
          }),
        ie = n('ddV6'),
        ae = n.n(ie)
      var ce = n('MWbm'),
        le = n('4zmP'),
        se = n('rHpw'),
        ue = C.a.bae0cbcf,
        de = se.a.create(function (e) {
          return {
            inlineCallout: { position: 'absolute', right: e.spaces.space32, marginTop: e.spaces.space2, zIndex: 1 },
            textStyle: { whiteSpace: 'nowrap' },
          }
        }),
        pe = re(function (e) {
          var t = e.addFlag,
            n = e.shouldShowConversationControlsTip,
            o = _.a.useRef(),
            r = (function (e) {
              var t = _.a.useState(!1),
                n = ae()(t, 2),
                o = n[0],
                r = n[1],
                i =
                  'IntersectionObserver' in window
                    ? new IntersectionObserver(function (e) {
                        var t = ae()(e, 1)[0]
                        return r(t.isIntersecting)
                      })
                    : null
              return (
                _.a.useEffect(function () {
                  if (null !== i)
                    return (
                      i.observe(e.current),
                      function () {
                        i.disconnect()
                      }
                    )
                }, []),
                o
              )
            })(o),
            i = _.a.useRef(!1),
            a = _.a.useContext(ne.a).featureSwitches.isTrue('conversation_controls_change_tooltip_enabled'),
            c = n && a
          return (
            _.a.useEffect(
              function () {
                r &&
                  ((i.current = !0),
                  setTimeout(function () {
                    t(M.d)
                  }, 5e3))
              },
              [r, t],
            ),
            _.a.useEffect(function () {
              return function () {
                i.current && t(M.d)
              }
            }, []),
            _.a.createElement(
              ce.a,
              { ref: o, style: de.inlineCallout },
              r && c ? _.a.createElement(le.a, { text: ue, textStyle: de.textStyle, withRightArrow: !0 }) : null,
            )
          )
        }),
        fe = n('yZqq'),
        me = n('hiGS'),
        be = C.a.d96cf7cd,
        ve = C.a.dd211107,
        he = C.a.c55d72d0,
        we = C.a.a1aa840e,
        ye = C.a.c189f2dd,
        _e = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            r = e.deleteTweet,
            i = e.onDeleteTweet,
            a = e.scribeAction,
            c = e.tweet
          return {
            confirmation: { label: be, headline: ve, text: he, confirmButtonType: 'destructiveFilled' },
            isEmphasized: !0,
            text: be,
            onClick: function () {
              r(c.id_str).then(function () {
                t({ text: we, behavioralEventEntityToken: n })
              }, o({ defaultToast: { text: ye }, showToast: !0 })),
                a({ element: 'delete' }),
                i && i(c.id_str)
            },
            Icon: me.a,
          }
        },
        ge = n('Lsrn'),
        Oe = n('k/Ka')
      function Ee(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function Ce(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ee(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ee(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Te = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Oe.a)(
          'svg',
          Ce(
            Ce({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ge.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.a.createElement(
            'g',
            null,
            _.a.createElement('path', {
              d: 'M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z',
            }),
          ),
        )
      }
      Te.metadata = { width: 24, height: 24 }
      var je = Te,
        ke = C.a.e6c84638,
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
            Icon: je,
          }
        },
        Pe = n('pwey'),
        Ae = n('PSpH')
      function Ie(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function Se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Ie(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ie(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var De = C.a.c66afdc2,
        Re = C.a.hbe4feb4,
        Me = C.a.e1618e48,
        Le = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            r = e.follow,
            i = e.promotedContent,
            a = e.scribeAction,
            c = e.user
          return {
            behavioralEventContext: { viewType: 'follow', viewState: { type: 'toggleable', toggledTo: !0 } },
            text: De({ screenName: c.screen_name }),
            onClick: function () {
              r(c.id_str, { promotedContent: i }).then(function (e) {
                a({ element: 'follow' }),
                  e && e.protected
                    ? t({ text: Re({ screenName: c.screen_name }), behavioralEventEntityToken: n })
                    : t({ text: Me({ screenName: c.screen_name }), behavioralEventEntityToken: n })
              }, o(Se(Se({}, Ae.a), {}, { showToast: !0 }))),
                a({ element: 'follow_attempt' })
            },
            Icon: Pe.a,
          }
        },
        He = (n('5BYb'), Object.freeze({ all: C.a.baffe39a, community: C.a.af293dc2, by_invitation: C.a.cf7f7e39 })),
        ze = C.a.bf994ab2,
        Be = function (e, t) {
          var n,
            o,
            r = He[t]
          t === te.a.by_invitation &&
            !(
              null !== (n = e.entities) &&
              void 0 !== n &&
              null !== (o = n.user_mentions) &&
              void 0 !== o &&
              o.some(function (t) {
                return t.id_str !== e.user.id_str
              })
            ) &&
            (r = ze)
          return _.a.createElement(C.a.I18NFormatMessage, { $i18n: 'f8ea2809', selection: r })
        },
        Fe = n('feu+'),
        Ue = n('eb3s'),
        Ne = n('lUZE'),
        Ke = n('5cUs'),
        We = C.a.ge5067bb,
        Ve = C.a.ea626ab3,
        Ze = C.a.fc716886,
        Xe = C.a.f2a2a06e,
        Je = C.a.f82c0bbf,
        qe = ''.concat(Xe, '\n\n').concat(Je),
        Ye = C.a.b2615c6d,
        Ge = C.a.i62a03aa,
        Qe = C.a.cfd2f35d,
        $e = C.a.a6450e83,
        et = C.a.hb279a11,
        tt = function (e) {
          var t = e.addFlag,
            n = e.addToast,
            o = e.behavioralEventEntityToken,
            r = e.createLocalApiErrorHandler,
            i = e.hideReply,
            a = e.onBlock,
            c = e.onTweetDismiss,
            l = e.scribeAction,
            s = e.shouldShowHideReplyTip,
            u = e.tweet,
            d = function () {
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
                        r = void 0 === o ? function () {} : o
                      return _.a.createElement(Fe.a, {
                        actionLabel: We,
                        graphic: Ne.a,
                        headline: Ze,
                        onAction: t,
                        onClose: n,
                        onImpression: r,
                        onTertiaryAction: n,
                        subtext: qe,
                        supportUrl:
                          'https://help.twitter.com/en/using-twitter/mentions-and-replies?lang=browser#hidden-reply',
                        tertiaryActionLabel: Qe,
                      })
                    })({ onConfirm: e, onCancel: t, onHideReplyImpression: d })
                  },
                }
              : {
                  render: function (e, t) {
                    var n = u.user.screen_name
                    return _.a.createElement(Ue.a, {
                      cancelButtonLabel: Ge,
                      confirmButtonLabel: $e,
                      confirmButtonType: 'destructiveFilled',
                      headline: Ye({ screenName: n }),
                      onCancel: e,
                      onConfirm: function () {
                        a(), e()
                      },
                      text: et({ screenName: n }),
                    })
                  },
                },
            text: We,
            onClick: function () {
              t(M.m),
                i(u.id_str, { conversation_id: u.conversation_id_str }).then(function (e) {
                  c && c(), n({ text: Ve, behavioralEventEntityToken: o })
                }, r({ showToast: !0 })),
                l({ element: 'moderate_reply' })
            },
            Icon: Ke.a,
          }
        },
        nt = n('n5fo'),
        ot = n('fz3c'),
        rt = C.a.f20b040d,
        it = function (e, t) {
          return {
            text: rt,
            Icon: nt.a,
            link: {
              pathname: '/i/report/'.concat(ot.a.HideCommunityTweet, '/').concat(e),
              state: { scribeNamespace: t },
            },
          }
        },
        at = n('jQy5'),
        ct = n('NTtI'),
        lt = n('qz6Z'),
        st = n('w02m'),
        ut = C.a.e2d6c17e,
        dt = C.a.cd1942f4,
        pt = C.a.bbd8bed6,
        ft = C.a.c13af432,
        mt = C.a.gf5e9ea6,
        bt = C.a.df744bd9,
        vt = C.a.j9552760,
        ht = C.a.cfd2f35d,
        wt = C.a.d751694c,
        yt = function (e) {
          var t = e.addFlag,
            n = e.addToast,
            o = e.behavioralEventEntityToken,
            r = e.createLocalApiErrorHandler,
            i = e.muteTweet,
            a = e.scribeAction,
            c = e.shouldShowMuteEducationTip,
            l = e.tweet,
            s = e.unmuteTweet,
            u = function () {
              t(M.n)
            },
            d = function () {
              s(l.id_str).then(
                function () {
                  n({ text: ft, behavioralEventEntityToken: o })
                },
                function (e) {
                  r({ showToast: !0 })(e), a({ element: 'unmute_conversation_error' })
                },
              ),
                a({ element: 'unmute_conversation' })
            },
            p = {
              behavioralEventContext: {
                viewType: 'mute_conversation',
                viewState: { type: 'toggleable', toggledTo: !0 },
              },
              text: ut,
              onClick: function () {
                i(l.id_str).then(
                  function () {
                    n({
                      action: { label: mt, onAction: d, behavioralEventViewType: 'unmute_conversation' },
                      behavioralEventEntityToken: o,
                      text: pt,
                    })
                  },
                  function (e) {
                    r({ showToast: !0 })(e), a({ element: 'mute_conversation_error' })
                  },
                ),
                  a({ element: 'mute_conversation' })
              },
              confirmation: c
                ? {
                    render: function (e, t) {
                      return _.a.createElement(Fe.a, {
                        actionLabel: bt,
                        graphic: ct.a,
                        graphicDisplayMode: 'illustration',
                        headline: vt,
                        onAction: e,
                        onClose: t,
                        onImpression: u,
                        onTertiaryAction: t,
                        subtext: wt,
                        supportUrl: 'https://support.twitter.com/articles/20175032',
                        tertiaryActionLabel: ht,
                      })
                    },
                  }
                : void 0,
              Icon: lt.a,
            },
            f = {
              behavioralEventContext: {
                viewType: 'mute_conversation',
                viewState: { type: 'toggleable', toggledTo: !1 },
              },
              text: dt,
              onClick: d,
              Icon: st.a,
            }
          return l.conversation_muted ? f : p
        },
        _t = n('ShJ/'),
        gt = 'block',
        Ot = 'pin',
        Et = 'unpin',
        Ct = 'report',
        Tt = C.a.ha35a1d2,
        jt = C.a.afac3b9d,
        kt = C.a.e2d44ce9,
        xt = C.a.c5d23126,
        Pt = C.a.aaef1b48,
        At = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            r = e.pin,
            i = e.scribeAction,
            a = e.tweetId
          return {
            confirmation: { text: kt, headline: jt, label: xt },
            testID: Ot,
            text: Tt,
            onClick: function () {
              r(a).then(function () {
                t({ text: Pt, behavioralEventEntityToken: n })
              }, o({ showToast: !0 })),
                i({ element: 'pin' })
            },
            Icon: _t.a,
          }
        },
        It = C.a.f5cdcc2b,
        St = function (e) {
          var t = e.onTweetDismiss
          return { text: It, onClick: t, Icon: T.a }
        },
        Dt = (n('WNMA'), n('KqXw'), n('24HD')),
        Rt = n('Bwid'),
        Mt = C.a.jcba15d2,
        Lt = function (e) {
          var t = e.history,
            n = e.removeAutoblockAction,
            o = e.user,
            r = Object(Dt.i)(o.screen_name)
          return {
            text: Mt,
            onClick: function () {
              n(r)
              t.location.pathname.match(/actioned_tweets\/\d+/) && t.goBack()
            },
            confirmation: r,
            Icon: Rt.a,
          }
        },
        Ht = n('5oT/'),
        zt = C.a.b99364a5,
        Bt = function (e, t, n) {
          return {
            text: zt({ screenName: e.screen_name }),
            Icon: Ht.a,
            link: {
              pathname: '/i/report/'.concat(ot.a.RemoveCommunityMember, '/').concat(t),
              state: { scribeNamespace: n },
            },
          }
        },
        Ft = n('Rp9C'),
        Ut = n('4bW+'),
        Nt = n('u0B7'),
        Kt = n('SJ11'),
        Wt = n('tJZD'),
        Vt = C.a.ja66a2b4,
        Zt = C.a.c2423b7a,
        Xt = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            r = e.promotedContent,
            i = e.scribeAction,
            a = e.unfollow,
            c = e.user
          return {
            behavioralEventContext: { viewType: 'follow', viewState: { type: 'toggleable', toggledTo: !1 } },
            text: Vt({ screenName: c.screen_name }),
            onClick: function () {
              a(c.id_str, { promotedContent: r }).then(function (e) {
                t({ behavioralEventEntityToken: n, text: Zt({ screenName: c.screen_name }) })
              }, o(Wt.a)),
                i({ element: 'unfollow' })
            },
            Icon: Kt.a,
          }
        }
      function Jt(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function qt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Jt(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Jt(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var Yt = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(Oe.a)(
          'svg',
          qt(
            qt({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [ge.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          _.a.createElement(
            'g',
            null,
            _.a.createElement('path', {
              d: 'M18.64.94c-2.2 0-4.05 1.53-4.54 3.59H2.96c-1.15 0-2.08.94-2.08 2.08v14.34c0 1.15.93 2.08 2.08 2.08H17.3c1.15 0 2.08-.93 2.08-2.08V10.22c2.23-.35 3.94-2.28 3.94-4.6 0-2.58-2.1-4.68-4.68-4.68zm-.65 20.01c0 .39-.31.7-.69.7H2.96c-.38 0-.69-.31-.69-.7V6.62c0-.39.31-.7.69-.7h11.02c.14 2.22 1.83 4.02 4.01 4.32v10.71zm.65-12.16c-1.75 0-3.17-1.42-3.17-3.17s1.42-3.18 3.17-3.18 3.17 1.43 3.17 3.18-1.42 3.17-3.17 3.17z',
            }),
            _.a.createElement('path', {
              d: 'M13.25 10.71H5.493c-.414 0-.75-.336-.75-.75s.336-.752.75-.752h7.754c.415 0 .752.337.752.75s-.34.752-.75.752zm1.47 3.793H5.493c-.414 0-.75-.336-.75-.75 0-.415.335-.752.75-.752h9.225c.413 0 .75.338.75.75 0 .418-.335.754-.75.754h.002zm-4.613 3.793H5.494c-.414 0-.75-.336-.75-.75 0-.416.335-.752.75-.752h4.613c.414 0 .75.336.75.75 0 .416-.336.752-.75.752zM20.72 5.62c0 .38-.31.69-.69.69h-.7V7c0 .38-.31.69-.69.69s-.69-.31-.69-.69v-.69h-.69c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.69v-.7c0-.38.31-.69.69-.69s.69.31.69.69v.7h.7c.38 0 .69.3.69.69z',
            }),
          ),
        )
      }
      Yt.metadata = { width: 24, height: 24 }
      var Gt = Yt,
        Qt = C.a.i31dfa4c,
        $t = C.a.j8e56ba1,
        en = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            r = e.scribeAction,
            i = e.tweet,
            a = e.unhideReply
          return {
            text: Qt,
            onClick: function () {
              a(i.id_str, { conversation_id: i.conversation_id_str }).then(function (e) {
                t({ ariaOnly: !0, text: $t, behavioralEventEntityToken: n })
              }, o({ showToast: !0 })),
                r({ element: 'unmoderate_reply' })
            },
            Icon: Gt,
          }
        },
        tn = C.a.ic030337,
        nn = C.a.j1b8c867,
        on = C.a.eb2d59f3,
        rn = C.a.j44ec61f,
        an = C.a.i0086d6b,
        cn = function (e) {
          var t = e.addToast,
            n = e.behavioralEventEntityToken,
            o = e.createLocalApiErrorHandler,
            r = e.scribeAction,
            i = e.tweetId,
            a = e.unpin
          return {
            confirmation: { text: on, headline: nn, label: rn },
            testID: Et,
            text: tn,
            onClick: function () {
              a(i).then(function () {
                t({ text: an, behavioralEventEntityToken: n })
              }, o({ showToast: !0 })),
                r({ element: 'unpin' })
            },
            Icon: _t.a,
          }
        },
        ln = C.a.f9478972,
        sn = function (e) {
          var t = e.permalink,
            n = e.scribeAction
          return {
            text: ln,
            link: ''.concat(t, '/hidden'),
            onClick: function () {
              n({ element: 'view_moderated_replies' })
            },
            Icon: Ke.a,
          }
        },
        un = n('TnY3'),
        dn = n('mqpi'),
        pn = n('4hQ9'),
        fn = n('ACNv'),
        mn = (n('ho0z'), n('zIWA')),
        bn = n('6s7X'),
        vn = C.a.f1824804,
        hn = C.a.ff9bd692,
        wn = C.a.e3fd237d,
        yn = C.a.d1e2161f,
        _n = function (e) {
          var t = e.analytics,
            n = e.featureSwitches,
            o = e.history,
            r = e.isAppealTweetWarning,
            i = void 0 !== r && r,
            a = e.promotedContent,
            c = e.reporterCountry,
            l = e.reporterLanguage,
            s = e.scribeAction,
            u = e.tweet,
            d = { element: 'report_tweet' },
            p = '/i/report/status',
            f = ot.a.Tweet,
            m = mn.a,
            b = a ? wn : hn
          i &&
            ((d = { element: 'appeal_tweet_warning' }),
            (p = '/i/report/appeal_tweet_warning'),
            (f = ot.a.AppealTweetWarning),
            (m = bn.a),
            (b = vn))
          return {
            behavioralEventContext: { viewType: 'report' },
            Icon: m,
            onClick: function () {
              var e,
                r,
                m,
                b,
                v,
                h = t.contextualScribeData,
                w =
                  ((null == u ||
                  null === (e = u.extended_entities) ||
                  void 0 === e ||
                  null === (r = e.media) ||
                  void 0 === r
                    ? void 0
                    : r.length) || 0) > 0,
                y =
                  h.items &&
                  h.items[0] &&
                  (null === (m = h.items[0].conversation_details) || void 0 === m ? void 0 : m.conversation_section)
              if (
                (s(d),
                !(
                  i ||
                  u.community_id_str ||
                  '745291183405076480:broadcast' === (null === (b = u.card) || void 0 === b ? void 0 : b.name) ||
                  '3691233323:periscope_broadcast' === (null === (v = u.card) || void 0 === v ? void 0 : v.name) ||
                  a
                ) && Object(ot.g)(n, f, c, l))
              ) {
                var _ = Object(ot.d)({
                  clientReferer: window.location.pathname,
                  conversationSection: y,
                  isMedia: w,
                  isPromoted: void 0 !== a,
                  reportType: f,
                  reportedTweet: u,
                  reportedUser: u.user.id_str,
                  scribeNamespace: t.contextualScribeNamespace,
                })
                o.push({
                  pathname: '/i/safety/report_story_start',
                  state: { input: { requested_variant: JSON.stringify(_) } },
                })
              } else
                o.push({
                  pathname: ''.concat(p, '/').concat(u.id_str),
                  state: {
                    clientReferer: window.location.pathname,
                    conversationSection: y,
                    isMedia: w,
                    promotedContent: a,
                    scribeNamespace: t.contextualScribeNamespace,
                  },
                })
            },
            testID: Ct,
            text: b,
          }
        },
        gn = function (e) {
          var t = e.promotedContent,
            n = e.scribeAction
          return {
            behavioralEventContext: { viewType: 'report' },
            Icon: mn.a,
            link: 'https://help.twitter.com/forms',
            onClick: function () {
              n({ element: 'report_tweet' })
            },
            testID: Ct,
            text: t ? wn : hn,
          }
        },
        On = function (e) {
          return {
            Icon: mn.a,
            link: 'https://help.twitter.com/forms/netzwerkdurchsetzungsgesetz?tweet_id='.concat(e),
            text: yn,
          }
        },
        En = n('Z6aJ'),
        Cn = n('IG7M'),
        Tn = (n('7xRU'), n('z84I'), n('0wXR')),
        jn = n('1wVr'),
        kn = C.a.e68b09b4,
        xn = C.a.g9425e3f,
        Pn = C.a.jfc76958,
        An = function (e, t) {
          var n,
            o,
            r,
            i =
              (null === (n = t.extended_entities) || void 0 === n ? void 0 : n.media) &&
              t.extended_entities.media[0] &&
              (null === (o = t.extended_entities.media[0].features) ||
              void 0 === o ||
              null === (r = o.all) ||
              void 0 === r
                ? void 0
                : r.tags)
          return (
            !!i &&
            Object(jn.a)(i, function (t) {
              return t.user_id === e
            })
          )
        },
        In = function (e) {
          var t = e.createLocalApiErrorHandler,
            n = e.loggedInUserId,
            o = e.removeTag,
            r = e.tweet
          return {
            behavioralEventContext: { viewType: 'remove_tag' },
            confirmation: { label: kn, headline: xn },
            text: Pn,
            onClick: function () {
              var e,
                i,
                a =
                  null === (e = r.extended_entities) || void 0 === e || null === (i = e.media) || void 0 === i
                    ? void 0
                    : i
                        .map(function (e) {
                          return e.id_str
                        })
                        .join(',')
              o(r.id_str, { status_id: r.id_str, media_ids: a, tagged_user_ids: n }).catch(t({ showToast: !0 }))
            },
            Icon: Tn.a,
          }
        }
      function Sn(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function Dn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? Sn(Object(n), !0).forEach(function (t) {
                w()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Sn(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function Rn(e) {
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
          var n,
            o = v()(e)
          if (t) {
            var r = v()(this).constructor
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments)
          return m()(this, n)
        }
      }
      var Mn = C.a.e133be4e,
        Ln = C.a.a9fd20be,
        Hn = [
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
        zn = function (e) {
          return 'DE' === e.toUpperCase()
        },
        Bn = Object.freeze({
          all: 'change_conversation_control_to_everyone',
          community: 'change_conversation_control_to_community',
          by_invitation: 'change_conversation_control_to_mentioned',
          followers: 'change_conversation_control_to_followers',
          community_members: 'community_members',
          community_hidden_tweet: 'community_hidden_tweet',
          super_followers_exclusive: 'super_followers_exclusive',
          community_tweet_member_removed: 'community_tweet_member_removed',
        }),
        Fn = (function (e) {
          p()(n, e)
          var t = Rn(n)
          function n() {
            var e
            a()(this, n)
            for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c]
            return (
              (e = t.call.apply(t, [this].concat(i))),
              w()(u()(e), '_dividerIndices', []),
              w()(u()(e), 'state', { showModerationBlockConfirmation: !1 }),
              w()(u()(e), '_shouldDisable', dn.b.bind(null, e.context.featureSwitches)),
              w()(u()(e), '_birdwatchAction', D.bind(null, e.context.featureSwitches)),
              w()(
                u()(e),
                '_shouldRenderSectionDividers',
                e.context.featureSwitches.isTrue('responsive_web_menu_section_divider_enabled'),
              ),
              w()(
                u()(e),
                '_authorModeratedReplies',
                e.context.featureSwitches.isTrue('author_moderated_replies_urt_container_enabled'),
              ),
              w()(
                u()(e),
                '_birdwatchNoteWritingEnabled',
                e.context.featureSwitches.isTrue('responsive_web_birdwatch_note_writing_enabled'),
              ),
              w()(
                u()(e),
                '_convoControlsEnabled',
                e.context.featureSwitches.isTrue('conversation_controls_change_enabled'),
              ),
              w()(u()(e), '_c9sModerationEnabled', e.context.featureSwitches.isTrue('c9s_moderation_enabled')),
              w()(u()(e), '_c9sRemoveMemberEnabled', e.context.featureSwitches.isTrue('c9s_remove_member_enabled')),
              w()(u()(e), '_onMenuClick', function () {
                var t = e.props,
                  n = t.addFlag,
                  o = t.onMenuClick,
                  r = t.shouldShowConversationControlsTip,
                  i = t.withChangeConversationControlsTooltip
                r && i && n(M.d), o && o()
              }),
              w()(u()(e), '_handleOnChangeConversationControls', function (t) {
                var n,
                  o = e.props,
                  r = o.addToast,
                  i = o.analytics,
                  a = o.behavioralEventEntityToken,
                  c = o.changeConversationControls,
                  l = o.createLocalApiErrorHandler,
                  s = o.removeConversationControls,
                  u = o.tweet,
                  d = Be(u, t)
                t === te.a.all
                  ? s &&
                    s(u.id_str).then(function () {
                      r({ text: d, behavioralEventEntityToken: a }),
                        i.scribe({
                          element: Bn.all,
                          action: 'click',
                          data: { items: [Ft.a.getChangeConversationControlsItem(u, t)] },
                        })
                    }, l(F))
                  : c &&
                    c(u.id_str, {
                      policy: t,
                      screenName: null === (n = u.user) || void 0 === n ? void 0 : n.screen_name,
                    }).then(function () {
                      r({ text: d, behavioralEventEntityToken: a }),
                        i.scribe({
                          element: Bn[t],
                          action: 'click',
                          data: { items: [Ft.a.getChangeConversationControlsItem(u, t)] },
                        })
                    }, l(F))
              }),
              w()(u()(e), '_renderCurationActionMenu', function (t) {
                return function (n) {
                  var o = e._getActionItems(t)
                  return _.a.createElement(fn.default, {
                    actionItems: o,
                    dividerIndices: e._shouldRenderSectionDividers ? e._dividerIndices : void 0,
                    onClose: n,
                  })
                }
              }),
              w()(u()(e), '_getMuteOrUnmuteAction', function () {
                var t = e.props,
                  n = t.addToast,
                  o = t.behavioralEventEntityToken,
                  r = t.createLocalApiErrorHandler,
                  i = t.dismissUserFromConversation,
                  a = t.mute,
                  c = t.promotedContent,
                  l = t.tweet,
                  s = t.unmute,
                  u = l.user,
                  d = {
                    addToast: n,
                    behavioralEventEntityToken: o,
                    createLocalApiErrorHandler: r,
                    scribeAction: e._scribeAction,
                  },
                  p = {
                    promotedContent: e.context.featureSwitches.isTrue(
                      'responsive_web_add_impression_id_to_mute_engagement_enabled',
                    )
                      ? c
                      : void 0,
                  }
                return Object(at.a)(
                  Dn(Dn({}, d), {}, { mute: a, unmute: s, user: u, dismissUserFromConversation: i }, p),
                )
              }),
              w()(u()(e), '_getActionItems', function (t) {
                var n = e.props,
                  o = n.deleteTweet,
                  i = n.follow,
                  a = n.hideReply,
                  c = n.muteTweet,
                  l = n.pin,
                  s = n.removeTag,
                  u = n.unmuteTweet,
                  d = n.unpin,
                  p = e.props,
                  f = p.addFlag,
                  m = p.addToast,
                  b = p.analytics,
                  v = p.behavioralEventEntityToken,
                  h = p.createLocalApiErrorHandler,
                  w = p.feedbackItems,
                  y = p.history,
                  _ = p.isPinned,
                  g = p.onDeleteTweet,
                  E = p.onTweetDismiss,
                  C = p.promotedContent,
                  T = p.shouldShowHideReplyTip,
                  j = p.shouldShowMuteEducationTip,
                  x = p.tweet,
                  P = p.userCountry,
                  I = p.userLanguage,
                  S = p.withChangeConversationControls,
                  D = p.withCommunityModerationAuthority,
                  R = p.withHideReply,
                  M = p.withMuteConversation,
                  L = p.withUnhideReply,
                  H = p.withViewHiddenReplies,
                  z = e.context,
                  F = z.featureSwitches,
                  U = z.loggedInUserId,
                  N = x.user,
                  K = [],
                  W = En.a.isPromoted(C),
                  V = {},
                  Z = [],
                  X = e._scribeAction,
                  J = { addToast: m, behavioralEventEntityToken: v, createLocalApiErrorHandler: h, scribeAction: X },
                  q = e._c9sModerationEnabled && x.community_id_str && D
                if (
                  (W && (V.adInfo = k({ promotedContent: C })),
                  N.id_str !== U ||
                    e._shouldDisable(x, dn.a.Analytics) ||
                    (V.analytics = A({ tweet: x, scribeAction: X })),
                  N.protected ||
                    e._shouldDisable(x, dn.a.Embed) ||
                    (V.embed = xe({ permalink: x.permalink, scribeAction: X })),
                  H &&
                    x.conversation_id_str === x.id_str &&
                    !e._shouldDisable(x, dn.a.ViewHiddenReplies) &&
                    (V.viewHiddenReplies = sn({ permalink: x.permalink, scribeAction: X })),
                  An(U, x) &&
                    (V.removeTag = In({ createLocalApiErrorHandler: h, loggedInUserId: U, removeTag: s, tweet: x })),
                  U)
                )
                  if (
                    (N.blocking ||
                      e._shouldDisable(x, dn.a.ListsAddRemove) ||
                      (V.addOrRemoveFromList = O({ user: N, scribeAction: X })),
                    e._birdwatchNoteWritingEnabled &&
                      (V.birdwatch = e._birdwatchAction({ scribeAction: X, tweetId: x.id_str })),
                    N.id_str !== U)
                  ) {
                    if (q) {
                      var Y = b.contextualScribeNamespace
                      e._shouldDisable(x, dn.a.HideCommunityTweet) ||
                        (V.hideTweet = it(x.id_str, Dn(Dn({}, Y), {}, { element: 'hide_tweet' }))),
                        e._c9sRemoveMemberEnabled &&
                          !e._shouldDisable(x, dn.a.RemoveCommunityMember) &&
                          (V.removeCommunityMember = Bt(
                            N,
                            x.id_str,
                            Dn(Dn({}, Y), {}, { element: 'remove_community_member' }),
                          ))
                    }
                    E && W && (V.promotedTweetDismiss = St({ onTweetDismiss: E })),
                      N.blocking ||
                        e._shouldDisable(x, dn.a.FollowAuthor) ||
                        ((V.followOrUnfollow = N.following
                          ? Xt(Dn(Dn({}, J), {}, { unfollow: e.props.unfollow, promotedContent: C, user: N }))
                          : Le(Dn(Dn({}, J), {}, { follow: i, promotedContent: C, user: N }))),
                        (V.muteOrUnmute = e._getMuteOrUnmuteAction())),
                      M &&
                        (V.muteOrUnmuteConversation = yt(
                          Dn(
                            Dn({}, J),
                            {},
                            { addFlag: f, muteTweet: c, shouldShowMuteEducationTip: j, tweet: x, unmuteTweet: u },
                          ),
                        )),
                      R &&
                        !e._authorModeratedReplies &&
                        (V.hideReply = tt(
                          Dn(
                            Dn({}, J),
                            {},
                            {
                              addFlag: f,
                              hideReply: a,
                              onBlock: e._handleBlock,
                              onTweetDismiss: E,
                              shouldShowHideReplyTip: T,
                              tweet: x,
                            },
                          ),
                        )),
                      L && (V.unhideReply = en(Dn(Dn({}, J), {}, { tweet: x, unhideReply: e.props.unhideReply })))
                    var G = {
                      user: N,
                      source: Dt.k.TWEET_CARET,
                      testID: gt,
                      blockAction: e._handleBlock,
                      unblockAction: e._handleUnblock,
                    }
                    if (((V.blockOrUnblock = Object(Dt.g)(G)), N.smart_blocking)) {
                      var Q = { history: y, user: N, removeAutoblockAction: e._handleUnblock }
                      V.removeAutoblock = Lt(Q)
                    }
                  } else
                    _
                      ? (V.pinOrUnpin = cn(Dn(Dn({}, J), {}, { tweetId: x.id_str, unpin: d })))
                      : e._shouldDisable(x, dn.a.PinToProfile) ||
                        (V.pinOrUnpin = At(Dn(Dn({}, J), {}, { pin: l, tweetId: x.id_str }))),
                      e._shouldIncludeTweetAppealOption() &&
                        (V.appealTweetWarning = _n({
                          analytics: b,
                          history: y,
                          isAppealTweetWarning: !0,
                          promotedContent: C,
                          scribeAction: X,
                          tweet: x,
                          featureSwitches: F,
                          reporterCountry: P,
                          reporterLanguage: I,
                        })),
                      M &&
                        !e._shouldDisable(x, dn.a.MuteConversation) &&
                        (V.muteOrUnmuteConversation = yt(
                          Dn(
                            Dn({}, J),
                            {},
                            { addFlag: f, muteTweet: c, shouldShowMuteEducationTip: j, tweet: x, unmuteTweet: u },
                          ),
                        )),
                      S &&
                        e._convoControlsEnabled &&
                        (V.changeConversationControls = B({ tweet: x, onChangeConversationControls: t })),
                      (V.delete = _e(Dn(Dn({}, J), {}, { deleteTweet: o, onDeleteTweet: g, tweet: x })))
                var $ = U && U !== N.id_str
                return (
                  $
                    ? (V.report = _n({
                        analytics: b,
                        history: y,
                        promotedContent: C,
                        scribeAction: X,
                        tweet: x,
                        featureSwitches: F,
                        reporterCountry: P,
                        reporterLanguage: I,
                      }))
                    : !U &&
                      P &&
                      zn(P) &&
                      ((V.report = gn({ promotedContent: C, scribeAction: X })), (V.reportNetzDG = On(x.id_str))),
                  Hn.forEach(function (e) {
                    if ('feedbackOptions' === e) {
                      var t = w
                        ? w.filter(function (e) {
                            return !e.excludeFromActionMenu
                          })
                        : []
                      K.push.apply(K, r()(t)), $ && K.length && Z.push(K.length - 1)
                    } else if (V[e]) {
                      $ && ('embed' === e || ('report' === e && !V.embed)) && Z.push(K.length - 1), K.push(V[e])
                    }
                  }),
                  (e._dividerIndices = Z),
                  K
                )
              }),
              w()(u()(e), '_handleBlock', function () {
                var t = e.props,
                  n = t.addToast,
                  o = t.behavioralEventEntityToken,
                  r = t.block,
                  i = t.createLocalApiErrorHandler,
                  a = t.dismissUserFromConversation,
                  c = t.promotedContent,
                  l = t.tweet
                r(l.user.id_str, { promotedContent: c }).then(function () {
                  a({ userId: l.user.id_str, feedbackKeys: ['UnfollowEntity'] }),
                    n({
                      action: { label: Mn, onAction: e._handleUnblock, behavioralEventViewType: 'unblock' },
                      text: Ln,
                      behavioralEventEntityToken: o,
                    })
                }, i(R.a)),
                  e._scribeAction({ element: 'block' })
              }),
              w()(u()(e), '_handleUnblock', function () {
                var t = e.props,
                  n = t.createLocalApiErrorHandler,
                  o = t.promotedContent,
                  r = t.tweet
                ;(0, t.unblock)(r.user.id_str, { promotedContent: o }).catch(n(Nt.a)),
                  e._scribeAction({ element: 'unblock' })
              }),
              w()(u()(e), '_scribeAction', function (t) {
                var n = t.action,
                  o = t.additionalData,
                  r = t.element,
                  i = e.props,
                  a = i.analytics,
                  c = i.promotedContent,
                  l = i.tweet,
                  s = a.contextualScribeData,
                  u = null != s && s.items ? s : Dn(Dn({}, s || {}), {}, { items: [Ft.a.getTweetItem(l, c)] })
                return o && (u = Dn(Dn({}, u), o)), a.scribe({ element: r, action: n || 'click', data: u })
              }),
              e
            )
          }
          return (
            l()(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    o = n.isDisabled,
                    r = n.tweet,
                    i = n.withChangeConversationControlsTooltip,
                    a = (null === (e = r.conversation_control) || void 0 === e ? void 0 : e.policy) || te.a.all
                  return _.a.createElement(
                    ce.a,
                    { style: Un.overflowMenu },
                    i ? _.a.createElement(pe, null) : null,
                    _.a.createElement(
                      fe.a,
                      {
                        controlled: !0,
                        midConversationTweet: r,
                        onChange: this._handleOnChangeConversationControls,
                        value: a,
                      },
                      function (e) {
                        var n = e.openPopover
                        return _.a.createElement(Cn.a, {
                          isDisabled: o,
                          onClick: t._onMenuClick,
                          renderActionMenu: t._renderCurationActionMenu(n),
                          testID: Ut.a.caret,
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
                    r = e.userCountry,
                    i = e.userLanguage,
                    a = this.context,
                    c = a.featureSwitches,
                    l = a.loggedInUserId
                  return (
                    Object(pn.b)({
                      loggedInUserId: l,
                      featureSwitches: c,
                      forwardPivotDisplayType: t,
                      tweet: o,
                      userCountry: r,
                      userLanguage: i,
                    }) ||
                    Object(pn.a)({
                      loggedInUserId: l,
                      featureSwitches: c,
                      isNsfwUser: n,
                      tweet: o,
                      userCountry: r,
                      userLanguage: i,
                    })
                  )
                },
              },
            ]),
            n
          )
        })(_.a.Component)
      w()(Fn, 'defaultProps', { withRemoveFromBookmarks: !1 }), w()(Fn, 'contextType', ne.a)
      t.default = Object(un.a)(ee(Fn))
      var Un = se.a.create(function (e) {
        return { overflowMenu: { display: 'flex', flexDirection: 'row', alignItems: 'center' } }
      })
    },
    NTtI: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            {
              accessibilityHidden: void 0 === e.accessibilityLabel,
              style: [c.a.root, e.style],
              viewBox: '0 0 200 200',
            },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('circle', { cx: '100', cy: '100', fill: '#97E3FF', r: '100' }),
            a.a.createElement('path', {
              d: 'M57.575 121.5h29.408l25.142 28.858h16.367s6.425-12.867 6.425-50.133H52.042c0 15.817 5.533 21.275 5.533 21.275z',
              fill: '#005FD1',
            }),
            a.a.createElement('path', {
              d: 'M112.125 50.092L86.983 78.95H57.575s-5.533 5.458-5.533 21.275h82.875c0-37.267-6.425-50.133-6.425-50.133h-16.367z',
              fill: '#1DA1F2',
            }),
            a.a.createElement('ellipse', { cx: '123.283', cy: '100.225', fill: '#97E3FF', rx: '6.567', ry: '45.075' }),
            a.a.createElement('path', {
              d: 'M147.408 146.8L48.225 59.867c-2.425-2.125-2.667-5.817-.542-8.242 2.125-2.425 5.817-2.667 8.242-.542l99.183 86.925c2.425 2.125 2.667 5.817.542 8.242-2.125 2.425-5.817 2.675-8.242.55z',
              fill: '#71C9F8',
            }),
            a.a.createElement('path', {
              d: 'M94.275 100.225h-7.058l30.808 27c-.233-2.108-.433-4.35-.608-6.717l-23.142-20.283zm33.942 29.75c-.25 1.983-.533 3.808-.833 5.458l4.325 3.792c.324-1.592.65-3.375.957-5.35l-4.45-3.9zm-33.942-29.75L70 78.958h-7.058l24.275 21.267',
              fill: '#005FD1',
            }),
            a.a.createElement('path', {
              d: 'M118.025 127.225l9.358 8.208c.3-1.65.575-3.475.833-5.458l-10.8-9.467c.176 2.367.376 4.617.61 6.717z',
              fill: '#1DA1F2',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 200, height: 200 }), (t.a = d)
    },
    SNyS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z',
            }),
            a.a.createElement('path', {
              d: 'M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    'ShJ/': function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M20.472 14.738c-.388-1.808-2.24-3.517-3.908-4.246l-.474-4.307 1.344-2.016c.258-.387.28-.88.062-1.286-.218-.406-.64-.66-1.102-.66H7.54c-.46 0-.884.254-1.1.66-.22.407-.197.9.06 1.284l1.35 2.025-.42 4.3c-1.667.732-3.515 2.44-3.896 4.222-.066.267-.043.672.222 1.01.14.178.46.474 1.06.474h3.858l2.638 6.1c.12.273.39.45.688.45s.57-.177.688-.45l2.638-6.1h3.86c.6 0 .92-.297 1.058-.474.265-.34.288-.745.228-.988zM12 20.11l-1.692-3.912h3.384L12 20.11zm-6.896-5.413c.456-1.166 1.904-2.506 3.265-2.96l.46-.153.566-5.777-1.39-2.082h7.922l-1.39 2.08.637 5.78.456.153c1.355.45 2.796 1.78 3.264 2.96H5.104z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    Zg3A: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm8.472 9.442c-.242.19-.472.368-.63.486-.68-1.265-1.002-1.78-1.256-2.007-.163-.145-.37-.223-.78-.375-.367-.136-1.482-.55-1.65-.85-.087-.153.136-.602.23-.793.088-.177.164-.33.196-.497.123-.646-.33-1.146-.728-1.59-.066-.072-.153-.17-.23-.26.335-.12.862-.26 1.42-.384 1.95 1.448 3.26 3.704 3.428 6.272zm-9.788-7.83c.076.25.145.5.182.678-.255.15-.663.363-.96.52-.262.136-.522.273-.738.392-.247.137-.442.234-.6.313-.347.174-.598.3-.833.553-.068.073-.26.278-1.02 1.886l-1.79-.656c1.293-1.94 3.362-3.31 5.76-3.685zM12 20.5c-4.687 0-8.5-3.813-8.5-8.5 0-1.197.25-2.335.7-3.37.47.182 1.713.66 2.75 1.035-.107.336-.245.854-.26 1.333-.03.855.502 1.7.562 1.792.053.08.12.15.2.207.303.21.687.5.827.616.063.343.166 1.26.23 1.833.144 1.266.175 1.48.24 1.65.005.012.514 1.188 1.315 1.188.576-.003.673-.206 1.855-2.688.244-.512.45-.95.513-1.058.1-.144.597-.61.87-.83.55-.442.76-1.82.413-2.682-.335-.83-1.92-2.08-2.5-2.195-.17-.033-.43-.04-.953-.053-.497-.01-1.25-.028-1.536-.09-.098-.024-.314-.094-.605-.196.32-.668.627-1.28.71-1.4.05-.052.168-.112.408-.234.17-.086.383-.192.653-.34.208-.116.458-.247.71-.38 1.168-.612 1.484-.8 1.658-1.082.11-.177.263-.44-.04-1.544 1.042.027 2.038.24 2.955.61-.89.32-1.024.595-1.106.77-.367.784.256 1.475.667 1.93.096.107.24.268.32.38l-.017.036c-.234.472-.67 1.35-.196 2.194.406.72 1.384 1.13 2.437 1.52.134.05.25.092.33.126.16.208.496.79 1 1.735l.154.285c.078.14.33.505.842.505.167 0 .363-.04.59-.137.032-.013.083-.035.18-.094C19.72 17.405 16.22 20.5 12 20.5zm-3.812-9.45c.01-.285.102-.646.184-.907l.027.006c.397.09 1.037.11 1.83.13.32.006.59.008.615 0 .326.143 1.355 1 1.483 1.31.113.28.05.812-.034 1.01-.233.197-.845.735-1.085 1.078-.093.13-.212.373-.64 1.274-.133.276-.313.654-.488 1.013-.026-.225-.054-.472-.08-.686-.225-2.003-.273-2.22-.42-2.445-.05-.078-.202-.31-1.135-.973-.117-.213-.268-.564-.26-.813z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    hiGS: function (e, t, n) {
      'use strict'
      n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn')
      var o = n('KEM+'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka')
      function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? s(Object(n), !0).forEach(function (t) {
                r()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : s(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var d = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(l.a)(
          'svg',
          u(
            u({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [c.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          a.a.createElement(
            'g',
            null,
            a.a.createElement('path', {
              d: 'M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z',
            }),
            a.a.createElement('path', {
              d: 'M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z',
            }),
          ),
        )
      }
      ;(d.metadata = { width: 24, height: 24 }), (t.a = d)
    },
    yZqq: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        i = n('m3Bd'),
        a = n.n(i),
        c = n('ddV6'),
        l = n.n(c),
        s = n('ERkP'),
        u = n.n(s),
        d = (n('5BYb'), n('uFXj'), n('H7Rt')),
        p = n('3XMw'),
        f = n.n(p),
        m = n('MWbm'),
        b = n('t62R'),
        v = n('CKsB'),
        h = n('/yvb'),
        w = n('rHpw'),
        y = n('Zg3A'),
        _ = (n('+KXO'), n('1t7P'), n('LW0h'), n('daRM'), n('jwue'), n('+oxZ'), n('FtHn'), n('KEM+')),
        g = n.n(_),
        O = n('Lsrn'),
        E = n('k/Ka')
      function C(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                g()(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      var j = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
        return Object(E.a)(
          'svg',
          T(
            T({}, e),
            {},
            { accessibilityHidden: void 0 === e.accessibilityLabel, style: [O.a.root, e.style], viewBox: '0 0 24 24' },
          ),
          u.a.createElement(
            'g',
            null,
            u.a.createElement('path', {
              d: 'M10.43 12.24c-1.37 0-2.89-.15-3.87-1.26-.82-.95-1.09-2.39-.81-4.43C6.13 3.7 7.88 2 10.43 2s4.3 1.7 4.68 4.55c.27 2.04.01 3.49-.81 4.42-.98 1.12-2.51 1.27-3.87 1.27zm0-8.73c-2.39 0-3.03 2.03-3.19 3.24-.21 1.56-.06 2.65.45 3.23.46.53 1.28.75 2.73.75 1.46 0 2.28-.22 2.74-.75.51-.58.66-1.67.45-3.23-.16-1.21-.79-3.24-3.18-3.24zm2.01 18.99H4.22c-.7 0-1.33-.3-1.75-.83-.43-.54-.57-1.26-.4-1.95.88-3.55 4.31-6.03 8.34-6.03.42 0 .75.34.75.75 0 .42-.34.75-.75.75-3.34 0-6.17 2.01-6.88 4.89-.06.25-.02.49.12.66.13.16.32.25.56.25h8.22c.42 0 .75.34.75.75.01.42-.32.76-.74.76zm9.15-10.87l-4.2 8.46c-.01.03-.02.05-.04.07-.02.06-.06.11-.1.15-.05.05-.1.09-.15.13h-.01c-.06.04-.12.06-.19.08-.07.02-.13.03-.2.03-.05 0-.11 0-.17-.02-.06-.01-.11-.03-.16-.06-.06-.03-.12-.07-.18-.12-.01-.01-.03-.02-.04-.03l-3.08-3.27c-.28-.3-.27-.78.04-1.06.3-.29.77-.27 1.06.03l2.34 2.48 3.74-7.53c.18-.37.63-.52 1-.34.37.17.52.63.34 1z',
            }),
            u.a.createElement('path', {
              d: 'M17.1 20.44c.05-.04.1-.08.15-.13 0 .01-.02.03-.03.04-.04.04-.08.06-.12.09z',
            }),
          ),
        )
      }
      j.metadata = { width: 24, height: 24 }
      var k = j,
        x = n('boUI'),
        P = n('EweD'),
        A = f.a.g6185a9e,
        I = f.a.g2d04222,
        S = f.a.baffe39a,
        D = f.a.af293dc2,
        R = f.a.h1053f7e,
        M = f.a.bf994ab2,
        L = f.a.cf7f7e39,
        H = f.a.cfd2f35d,
        z = w.a.create(function (e) {
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
            r = e.isModal,
            i = e.midConversationTweet,
            a = e.value,
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
            p = R
          return (
            s ? (p = M) : l && (p = L),
            u.a.createElement(
              m.a,
              {
                accessibilityDescribedBy: 'conversation-controls-details',
                accessibilityLabelledBy: 'conversation-controls-title',
                accessibilityRole: 'dialog',
                style: [z.root, r ? z.modal : z.popover],
              },
              u.a.createElement(
                m.a,
                { style: z.title },
                u.a.createElement(b.b, { nativeID: 'conversation-controls-title', weight: 'bold' }, A),
                u.a.createElement(
                  b.b,
                  { color: 'gray700', nativeID: 'conversation-controls-details', size: 'body' },
                  I,
                ),
              ),
              u.a.createElement(
                m.a,
                null,
                u.a.createElement(v.a, {
                  Icon: y.a,
                  actionText: S,
                  isSelected: d.a.all === a,
                  onClick: c(d.a.all),
                  selectable: !0,
                  style: z.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(v.a, {
                  Icon: k,
                  actionText: D,
                  isSelected: d.a.community === a,
                  onClick: c(d.a.community),
                  selectable: !0,
                  style: z.menuRow,
                  withIconAsThumbnail: !0,
                }),
                u.a.createElement(v.a, {
                  Icon: s ? x.a : P.a,
                  actionText: p,
                  isSelected: d.a.by_invitation === a,
                  onClick: c(d.a.by_invitation),
                  selectable: !0,
                  style: z.menuRow,
                  withIconAsThumbnail: !0,
                }),
                e.isModal
                  ? u.a.createElement(
                      h.a,
                      {
                        key: 'button_cancel',
                        onPress: o,
                        size: 'large',
                        style: z.cancelButton,
                        type: 'primaryOutlined',
                      },
                      H,
                    )
                  : null,
              ),
            )
          )
        },
        F = n('OiMc'),
        U = n('efqG')
      t.a = function (e) {
        var t = e.children,
          n = e.controlled,
          o = void 0 !== n && n,
          i = e.disabled,
          c = u.a.useState(!1),
          s = l()(c, 2),
          d = s[0],
          p = s[1],
          f = u.a.useCallback(function () {
            return p(!0)
          }, []),
          m = u.a.useCallback(function () {
            return p(!1)
          }, []),
          b = o ? (d ? F.a.VISIBILITY_BEHAVIOR.forceVisible : F.a.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
          v = 'function' == typeof t ? t({ openPopover: f, closePopover: m }) : t
        return u.a.createElement(
          U.a,
          {
            disabled: i,
            onDismiss: m,
            renderContent: function (t, n) {
              e.children, e.controlled
              var o = a()(e, ['children', 'controlled'])
              return u.a.createElement(B, r()({}, o, { dismiss: t, isModal: 'sheet' === n }))
            },
            visibilityBehavior: b,
          },
          v,
        )
      }
    },
  },
])
//# sourceMappingURL=WIPED
