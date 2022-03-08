;(window.webpackJsonp = window.webpackJsonp || []).push([
  [360],
  {
    '+Sp1': function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        r = n.n(o).a.createContext({ draggingTweetId: void 0 })
      t.a = r
    },
    '0ULw': function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Lsrn'),
        l = n('k/Ka'),
        s = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return Object(l.a)(
            'svg',
            r()(
              r()({}, e),
              {},
              {
                accessibilityHidden: void 0 === e.accessibilityLabel,
                style: [c.a.root, e.style],
                viewBox: '0 0 24 24',
              },
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement('path', {
                d: 'M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z',
              }),
            ),
          )
        }
      ;(s.metadata = { width: 24, height: 24 }), (t.a = s)
    },
    A6fF: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('ezF+'),
        r = n('VPAj'),
        i = n('ERkP'),
        a = n.n(i),
        c = n('Fg8X'),
        l = n('XOJV'),
        s = n('E0cF'),
        d = n('rxPX'),
        u = n('TXsO'),
        p = function (e, t) {
          return c.a.select(e, t.momentId)
        },
        h = function (e, t) {
          return l.a.selectHydrated(e, t.tweetId)
        },
        v = Object(d.a)()
          .propsFromState(function () {
            return { moment: p, tweet: h }
          })
          .adjustStateProps(function (e, t) {
            var n = e.moment,
              o = e.tweet,
              r = t.tweetId,
              i = (o && s.a.getOriginalTweet(o)) || o
            return {
              disabledMessage: i
                ? (function (e) {
                    var t
                    return null !== (t = e.user) && void 0 !== t && t.protected
                      ? u.l
                      : s.a.isQuotedTweetUnavailable(e)
                      ? u.k
                      : void 0
                  })(i)
                : void 0,
              hasMaxPages: (function (e) {
                var t,
                  n = null == e || null === (t = e.pages) || void 0 === t ? void 0 : t.length
                return !!n && n >= u.e
              })(n),
              originalTweetId: (null == i ? void 0 : i.id_str) || r,
            }
          }),
        m = n('+Sp1'),
        f = n('cm6r'),
        w = n('UcEn'),
        _ = n('9Jxp'),
        b = n('CUXw'),
        y = v(function (e) {
          var t = a.a.useContext(m.a),
            n = a.a.useContext(w.a),
            o = a.a.useRef(),
            r = e.disabledMessage,
            i = e.hasMaxPages,
            c = e.index,
            l = e.onClick,
            s = e.originalTweetId,
            d = e.tweetId,
            u = t.draggingTweetId === s,
            p = !!r || i,
            h = n.selectedTweets.has(s),
            v = null !== t.draggingTweetId && h
          return null != c
            ? a.a.createElement(
                f.a,
                {
                  onClick: p
                    ? void 0
                    : function () {
                        var e
                        null === (e = o.current) || void 0 === e || e._handleOnClick()
                      },
                },
                a.a.createElement(
                  _.a,
                  { draggableId: s, fromVirtualList: !0, index: c, isBeingDragged: u, isDragDisabled: p },
                  a.a.createElement(b.a, {
                    disabledMessage: r,
                    isPartOfDraggedSelection: v,
                    isSelected: h,
                    onClick: l,
                    ref: function (e) {
                      o.current = e
                    },
                    tweetId: d,
                  }),
                ),
              )
            : null
        })
      t.default = function (e) {
        var t = e.momentId,
          n = e.onClick
        return o.g({
          component: y,
          createProps: function (e) {
            var o = e.entry
            return { index: o.index, tweetId: o.content.id, momentId: t, onClick: n }
          },
          isClickable: Object(r.a)(!0),
          isFocusable: Object(r.a)(!0),
          shouldDisplayBorder: Object(r.a)(!0),
        })
      }
    },
    CUXw: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        i = n('yiKp'),
        a = n.n(i),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        v = n.n(h),
        m = n('2VqO'),
        f = n.n(m),
        w = n('KEM+'),
        _ = n.n(w),
        b = (n('2G9S'), n('ERkP')),
        y = n.n(b),
        C = n('XOJV'),
        g = n('E0cF'),
        k = n('rxPX'),
        I = n('0KEI'),
        E = function (e, t) {
          return t.tweetId
        },
        T = Object(k.a)()
          .propsFromState(function () {
            return { tweet: C.a.createHydratedTweetSelector(E) }
          })
          .adjustStateProps(function (e) {
            var t = e.tweet
            return { originalTweet: (t && g.a.getOriginalTweet(t)) || t, tweet: t }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(I.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_SELECT_CONTEXT',
              ),
            }
          }),
        A = n('3XMw'),
        S = n.n(A),
        x = n('x5Pi'),
        P = n('fs1G'),
        O = n('kXdP'),
        F = n('BLtI'),
        D = n('MWbm'),
        R = n('htQn'),
        M = n('Znyr'),
        U = n('kY28'),
        j = n('rHpw'),
        N = n('v6aA'),
        L = n('6Rrp'),
        B = n('0ULw'),
        H = n('pu5c'),
        K = S.a.h6beb5fa,
        q = function (e) {
          return e && e.preventDefault()
        },
        V = (function (e) {
          v()(n, e)
          var t = f()(n)
          function n() {
            var e
            l()(this, n)
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++) r[i] = arguments[i]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              _()(p()(e), '_renderDisabledTweet', function (t) {
                return y.a.createElement(
                  D.a,
                  { style: W.root },
                  e._renderContent(),
                  y.a.createElement(D.a, { style: W.disabledTweetMask }),
                  y.a.createElement(
                    D.a,
                    { style: [W.disabledIconWrapper, W.iconMargins] },
                    y.a.createElement(O.a, { hoverText: t }, X, y.a.createElement(D.a, { style: W.disabledTweetMask })),
                  ),
                )
              }),
              _()(p()(e), '_renderContent', function () {
                var t = e.props,
                  n = t.replyContext,
                  o = t.tweet,
                  r = t.withActions
                if (o) {
                  var i,
                    a = Object(x.f)(o, e.context.loggedInUserId)
                  return y.a.createElement(
                    D.a,
                    { style: W.tweet },
                    y.a.createElement(F.b, {
                      excludeCardUrl: null === (i = o.card) || void 0 === i ? void 0 : i.url,
                      linkableQuotedTweet: !0,
                      onAnalyticsClick: P.a,
                      onAvatarClick: P.a,
                      onEntityClick: P.a,
                      onMediaClick: q,
                      onReplyContextClick: P.a,
                      preventVideoPlayback: !0,
                      replyContext: n,
                      socialContext: a,
                      tweet: o,
                      withActions: r,
                      withActionsDisabled: !0,
                      withSocialContext: !0,
                    }),
                  )
                }
                return null
              }),
              _()(p()(e), '_renderSelectIcon', function (e) {
                return e
                  ? y.a.createElement(L.a, { style: [W.icon, W.iconMargins, W.iconCheckmark] })
                  : y.a.createElement(B.a, { style: [W.icon, W.iconMargins] })
              }),
              _()(p()(e), '_handleOnClick', function () {
                var t = e.props,
                  n = t.onClick,
                  o = t.originalTweet,
                  r = t.tweetId
                n && n((null == o ? void 0 : o.id_str) || r)
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
                    t = e.disabledMessage,
                    n = e.isPartOfDraggedSelection,
                    o = e.isSelected,
                    r = e.showDragCount,
                    i = e.tweet
                  return t
                    ? this._renderDisabledTweet(t)
                    : i
                    ? y.a.createElement(
                        R.a,
                        { onPress: this._handleOnClick, style: W.root },
                        this._renderDragCount(r),
                        this._renderContent(),
                        this._renderSelectIcon(o),
                        n && y.a.createElement(D.a, { style: W.disabledTweetMask }),
                      )
                    : null
                },
              },
              {
                key: '_renderDragCount',
                value: function (e) {
                  return e < 2
                    ? null
                    : y.a.createElement(
                        D.a,
                        { style: W.countBadgeContainer },
                        y.a.createElement(M.a, {
                          count: e,
                          standalone: !0,
                          style: W.countBadge,
                          truncatedCountFormatter: K,
                          unreadCountLabel: function () {
                            return ''
                          },
                          withBorder: !1,
                        }),
                      )
                },
              },
            ]),
            n
          )
        })(y.a.PureComponent)
      _()(V, 'contextType', N.a),
        _()(V, 'defaultProps', {
          replyContext: U.a.ReplyContextTypes.Isolated,
          withActions: !0,
          showDragCount: 0,
          isPartOfDraggedSelection: !1,
          isSelected: !1,
        })
      var W = j.a.create(function (e) {
          return {
            root: { backgroundColor: e.colors.cellBackground, flexDirection: 'row' },
            tweet: { flex: 1 },
            disabledTweetMask: a()(
              a()({}, j.a.absoluteFillObject),
              {},
              { backgroundColor: e.colors.navigationBackground, opacity: '50%' },
            ),
            disabledIconWrapper: { height: '100%' },
            icon: { color: e.colors.gray700 },
            iconMargins: { marginTop: e.spaces.space12, marginRight: e.spaces.space12 },
            iconCheckmark: { color: e.colors.green500 },
            countBadge: { height: e.spaces.space32, width: e.spaces.space32 },
            countBadgeContainer: {
              height: e.spaces.space32,
              width: e.spaces.space32,
              position: 'absolute',
              right: '-'.concat(e.spaces.space16),
              top: '-'.concat(e.spaces.space16),
            },
          }
        }),
        X = y.a.createElement(H.a, { style: W.icon }),
        z = y.a.forwardRef(function (e, t) {
          return y.a.createElement(V, r()({}, e, { ref: t }))
        }),
        J = T.forwardRef(z)
      t.a = J
    },
    'Fcw+': function (e, t, n) {
      'use strict'
      n.r(t)
      n('jQ3i'), n('x4t0')
      var o = n('ezF+'),
        r = n('VPAj'),
        i = n('kY28'),
        a = n('CUXw')
      t.default = function (e) {
        var t = e.onClick,
          n = e.selectedTweetIds
        return o.g({
          component: a.a,
          createProps: function (e) {
            var o = e.entry
            return {
              index: o.index,
              tweetId: o.content.id,
              onClick: t,
              replyContext: i.a.ReplyContextTypes.None,
              withActions: !1,
              isSelected: n.includes(o.content.id),
            }
          },
          isClickable: Object(r.a)(!0),
          isFocusable: Object(r.a)(!0),
          shouldDisplayBorder: Object(r.a)(!0),
        })
      }
    },
    KQRq: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        r = n.n(o),
        i = (n('ERkP'), n('P1oR')),
        a = n('meql')
      t.default = function (e) {
        return Object(a.a)(r()(r()({}, e), {}, { component: i.a }))
      }
    },
    P1oR: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return tt
      })
      var o = n('97Jx'),
        r = n.n(o),
        i = n('ddV6'),
        a = n.n(i),
        c = n('VrFO'),
        l = n.n(c),
        s = n('Y9Ll'),
        d = n.n(s),
        u = n('1Pcy'),
        p = n.n(u),
        h = n('5Yy7'),
        v = n.n(h),
        m = n('2VqO'),
        f = n.n(m),
        w = n('KEM+'),
        _ = n.n(w),
        b = n('yiKp'),
        y = n.n(b),
        C =
          (n('2G9S'),
          n('lTEL'),
          n('7x/C'),
          n('87if'),
          n('kYxP'),
          n('Cm4o'),
          n('KrtT'),
          n('vrRf'),
          n('jQ3i'),
          n('x4t0'),
          n('ERkP')),
        g = n.n(C),
        k = n('TZwD'),
        I = n('6rlp'),
        E = n('RqPI'),
        T = n('1YZw'),
        A = n('Ig1G'),
        S = n('eSoz'),
        x = n('0pUJ'),
        P = n('Z6aJ'),
        O = n('SrIh'),
        F = n('Fmkq'),
        D = n('j7tW'),
        R = n('Zejx'),
        M = n('XOJV'),
        U = n('G6rE'),
        j = n('xZGM'),
        N = n('jL08'),
        L = n('rxPX'),
        B = n('0KEI'),
        H = n('EGrD'),
        K = n('x5Pi'),
        q = n('P1r1'),
        V = function (e, t) {
          return Object(D.b)(e, t.tweetId)
        },
        W = function (e, t) {
          return t.tweetId
        },
        X = function (e, t) {
          return t.contextTweetId
        },
        z = function (e, t) {
          var n = t.promotedContent,
            o = t.tweetId
          if (n && n.advertiser) return U.e.select(e, n.advertiser.id_str)
          if (n && P.a.isPromoted(n)) {
            var r = n.advertiser_name
            Object(O.a)('No advertiser info for non-URT promoted tweet', { extra: { advertiser_name: r, tweetId: o } })
          }
        },
        J = function (e, t) {
          return t.socialContext
        },
        G = function (e, t) {
          var n = t.socialContext,
            o = n && n.topicContext
          return o ? R.a.select(e, o.topicId) : void 0
        },
        Y = function (e, t) {
          var n = M.a.createHydratedTweetSelector(W)(e, t)
          return null != n && n.community_id_str ? S.c.select(e, null == n ? void 0 : n.community_id_str) : void 0
        },
        Q = function (e, t) {
          var n = M.a.createHydratedTweetSelector(W)(e, t),
            o = null == n ? void 0 : n.quoted_status,
            r = null == o ? void 0 : o.community_id_str
          return r ? S.c.select(e, r) : void 0
        },
        Z = function (e, t) {
          return 'PUSH' === t.history.action
        },
        $ = function (e, t) {
          return Object(j.A)(e, j.k)
        },
        ee = function (e, t) {
          return Object(j.y)(e, j.k)
        },
        te = Object(L.a)()
          .propsFromState(function () {
            return {
              adFreeArticleDomains: H.c,
              articleDomains: N.b,
              community: Y,
              contextTweet: M.a.createHydratedTweetSelector(X),
              daysSinceDownvoteEducation: ee,
              displaySensitiveMedia: q.l,
              explicitSocialContext: J,
              isForwardNavigation: Z,
              isNsfwUser: q.u,
              isPinned: V,
              loggedInUser: U.e.selectLoggedInUser,
              promotedContentAdvertiser: z,
              quoteTweetCommunity: Q,
              shouldShowDownvoteFullscreenEducation: $,
              topic: G,
              tweet: M.a.createHydratedTweetSelector(W),
              userCountry: E.y,
              userLanguage: E.o,
            }
          })
          .adjustStateProps(function (e) {
            var t,
              n,
              o,
              r = e.adFreeArticleDomains,
              i = e.articleDomains,
              a = e.community,
              c = e.contextTweet,
              l = e.daysSinceDownvoteEducation,
              s = e.displaySensitiveMedia,
              d = e.explicitSocialContext,
              u = e.isForwardNavigation,
              p = e.isNsfwUser,
              h = e.isPinned,
              v = e.loggedInUser,
              m = e.promotedContentAdvertiser,
              f = e.quoteTweetCommunity,
              w = e.shouldShowDownvoteFullscreenEducation,
              _ = e.topic,
              b = e.tweet,
              y = e.userCountry,
              C = e.userLanguage,
              g = c
                ? Object(K.f)(c, null == v ? void 0 : v.id_str, a)
                : b
                ? Object(K.f)(b, null == v ? void 0 : v.id_str, a)
                : void 0,
              k =
                null == b ||
                null === (t = b.card) ||
                void 0 === t ||
                null === (n = t.binding_values) ||
                void 0 === n ||
                null === (o = n.domain) ||
                void 0 === o
                  ? void 0
                  : o.string_value,
              I = Object(N.a)(i, k),
              E = null == b ? void 0 : b.quoted_status,
              T = E ? Object(K.f)(E, null == v ? void 0 : v.id_str, f) : void 0
            return {
              adFreeArticleDomains: r,
              community: a,
              contextTweet: c,
              daysSinceDownvoteEducation: l,
              displaySensitiveMedia: s,
              isCardArticle: I,
              isForwardNavigation: u,
              isNsfwUser: p,
              isPinned: h,
              loggedInUser: v,
              promotedContentAdvertiser: m,
              quoteTweetSocialContextProps: T && Object(K.e)(T),
              shouldShowDownvoteFullscreenEducation: w,
              socialContext: d || g,
              topic: _,
              tweet: b,
              userCountry: y,
              userLanguage: C,
              withCommunityModerationAuthority: Object(A.c)(null == a ? void 0 : a.role),
            }
          })
          .propsFromActions(function () {
            return {
              addFlag: j.w,
              addToast: T.b,
              block: U.e.block,
              createLocalApiErrorHandler: Object(B.createLocalApiErrorHandlerWithContextFactory)(
                'TWEET_DETAIL_CONTAINER',
              ),
              fetchAdFreeToken: H.a,
              fetchCommunityIfNeeded: S.c.fetchOneIfNeeded,
              fetchTopicIfNeeded: R.a.fetchOneIfNeeded,
              loadAdFreeArticleDomainsFromPersistence: H.b,
              log: I.a,
              mute: x.a,
              updateHeadsUp: M.a.updateHeadsUp,
              richScribeAction: F.richScribeAction,
              setArticlesVisited: N.e,
              unblock: U.e.unblock,
              undoTopicNotInterested: R.a.undoNotInterested,
              unmute: U.e.unmute,
            }
          }),
        ne = (n('JtPf'), n('zb92')),
        oe = Object(ne.a)({
          loader: function () {
            return n.e(208).then(n.bind(null, '5Yok'))
          },
        }),
        re = (n('uFXj'), n('IqLm')),
        ie = n('Irs7'),
        ae = n('MWbm'),
        ce = n('3XMw'),
        le = n.n(ce),
        se = n('4zmP'),
        de = n('rHpw'),
        ue = le.a.ac2844f1,
        pe = le.a.b4e042b9,
        he = le.a.i859a9d3,
        ve = de.a.create(function (e) {
          return {
            root: { borderTopWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: 'solid' },
            callout: { margin: e.spaces.space8, width: 'auto' },
          }
        }),
        me = function (e) {
          var t = e.onAction,
            n = e.onClose,
            o = Object(ie.b)()
          g.a.useEffect(
            function () {
              o.scribe({ section: 'reply_voting_nux', element: 'pre_downvote', action: 'impression' })
            },
            [o],
          )
          var r = g.a.createElement(
            le.a.I18NFormatMessage,
            { $i18n: 'id9ba4fb' },
            g.a.createElement(re.a, { accessibilityLabel: pe }),
          )
          return g.a.createElement(
            ae.a,
            { style: ve.root },
            g.a.createElement(se.a, {
              action: { label: he, link: '' },
              headline: ue,
              onAction: t,
              onClose: n,
              style: ve.callout,
              text: r,
              withCloseButton: !0,
            }),
          )
        },
        fe = n('6bZg'),
        we = n('LSr9'),
        _e = n('RuTB'),
        be = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(5), n.e(6), n.e(12), n.e(81)]).then(n.bind(null, 'x8Sc'))
          },
          renderPlaceholder: function (e, t) {
            return g.a.createElement(_e.a, { hasError: e, onRetry: t })
          },
        }),
        ye = Object(ne.a)({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(4), n.e(5), n.e(87)]).then(n.bind(null, 'RrO2'))
          },
          renderPlaceholder: function (e, t) {
            return g.a.createElement(_e.a, { hasError: e, onRetry: t })
          },
        }),
        Ce = n('iFPY'),
        ge = n('hACr'),
        ke = n('Nh1N'),
        Ie = le.a.de21174c,
        Ee = le.a.haebcf51,
        Te = le.a.i859a9d3,
        Ae = de.a.create(function (e) {
          return { callout: { marginVertical: e.spaces.space8, marginHorizontal: e.spaces.space16 } }
        }),
        Se = function () {
          return g.a.createElement(
            ae.a,
            { style: Ae.callout },
            g.a.createElement(se.a, {
              Icon: ke.a,
              action: {
                label: Te,
                link: 'https://help.twitter.com/using-twitter/mentions-and-replies#mention-control',
              },
              headline: Ie,
              text: Ee,
              type: 'primary',
            }),
          )
        },
        xe = n('jQy5'),
        Pe = n('vMOa'),
        Oe = n('Rp9C'),
        Fe = n('xM7j'),
        De = n('BLtI'),
        Re = n('3zeG'),
        Me = n('aITJ'),
        Ue = n('TnY3'),
        je = n('mqpi'),
        Ne = n('v6aA'),
        Le = n('E0cF'),
        Be = n('OIC0'),
        He = n('+pKb'),
        Ke = n('/Ikv'),
        qe = n('7JQg'),
        Ve = n('cFuS'),
        We = n('24HD'),
        Xe = n('fz3c'),
        ze = n('4hQ9'),
        Je = n('oQhu'),
        Ge = n('mN6z'),
        Ye = n('ONCy'),
        Qe = n('Cqiq'),
        Ze = le.a.f277e949
      function $e(e, t, n) {
        var o = Oe.a.addTweetToItems(n ? n.items : [], e, t)
        return y()(y()({}, n || {}), {}, { items: o })
      }
      var et = (function (e) {
        v()(n, e)
        var t = f()(n)
        function n() {
          var e, o, r
          l()(this, n)
          for (var i = arguments.length, c = new Array(i), s = 0; s < i; s++) c[s] = arguments[s]
          return (
            (r = t.call.apply(t, [this].concat(c))),
            _()(p()(r), 'state', {
              displayReported: !1,
              enableKeyboardShortcuts: !1,
              showDownvoteFullscreenFromInline: !1,
              replyPressToggle: !1,
              showBlockOrUnblockConfirmation: !1,
            }),
            _()(p()(r), '_shouldDisable', je.b.bind(null, r.context.featureSwitches)),
            _()(p()(r), '_downvoteEnabled', r.context.featureSwitches.isTrue('rweb_reply_downvote_enabled')),
            _()(
              p()(r),
              '_isArticleNudgeEnabled',
              r.context.featureSwitches.isTrue('responsive_web_article_nudge_enabled'),
            ),
            _()(p()(r), '_isCommunitiesEnabled', r.context.featureSwitches.isTrue('c9s_enabled')),
            _()(
              p()(r),
              '_hasClaimsForAdFreeArticles',
              null === (e = r.context.userClaims) || void 0 === e
                ? void 0
                : e.isTrueAndEnabled('subscriptions_feature_1006'),
            ),
            _()(
              p()(r),
              '_conversationHeadsUpFSValue',
              null === (o = r.context.featureSwitches) || void 0 === o
                ? void 0
                : o.getStringValue('conversational_safety_heads_up_treatment_A_enabled'),
            ),
            _()(
              p()(r),
              '_downvoteNuxDays',
              r.context.featureSwitches.getNumberValue('rweb_reply_downvote_nux_inline_days'),
            ),
            _()(
              p()(r),
              '_getScribeData',
              Object(Je.a)(function (e, t, n) {
                var o = $e(e, t, n)
                return (
                  (r._cachedScribeData && Object(Ge.a)(o, r._cachedScribeData)) || (r._cachedScribeData = o),
                  r._cachedScribeData
                )
              }),
            ),
            _()(p()(r), '_renderConversationControlsTooltip', function () {
              var e = r.context.loggedInUserId,
                t = r.props.tweet
              if (!t) return !1
              var n = Le.a.getOriginalTweet(t),
                o = !!n.community_id_str,
                i = n.user.id_str === e,
                a = n.reply_count > 0
              return i && a && !n.in_reply_to_status_id_str && !o
            }),
            _()(p()(r), '_renderBlockOrUnblockConfirmationSheet', function () {
              var e = r.props.tweet
              if (!e) return null
              var t = e.user
              return Object(We.j)({
                confirmation: Object(We.h)(t),
                onClose: r._handleBlockOrUnblockConfirmClose,
                handleConfirm: r._handleBlockOrUnblockUserConfirm,
              })
            }),
            _()(p()(r), '_shouldShowDownvoteInlineEducation', function () {
              var e = r.props.daysSinceDownvoteEducation
              return r._allowDownvoteEducations() && null !== e && e >= r._downvoteNuxDays
            }),
            _()(p()(r), '_shouldShowDownvoteFullscreenEducation', function () {
              var e = r.props,
                t = e.isForwardNavigation,
                n = e.shouldShowDownvoteFullscreenEducation
              return t && r._allowDownvoteEducations() && n
            }),
            _()(p()(r), '_allowDownvoteEducations', function () {
              var e = r.props,
                t = e.loggedInUser,
                n = e.tweet,
                o = new Date()
              o.setDate(o.getDate() - 14)
              var i = t && new Date(null == t ? void 0 : t.created_at) < o
              return (
                r._downvoteEnabled &&
                t &&
                i &&
                n &&
                n.reply_count >= 10 &&
                !n.self_thread &&
                !n.softIntervention &&
                !n.tombstoneInfo
              )
            }),
            _()(p()(r), '_getInlineCalloutInfo', function () {
              var e = r.props,
                t = e.displaySensitiveMedia,
                n = e.isNsfwUser,
                o = e.scribeNamespace,
                i = e.tweet,
                a = e.userCountry,
                c = e.userLanguage,
                l = r.context,
                s = l.featureSwitches,
                d = l.loggedInUserId
              if (
                i &&
                Object(ze.e)({
                  displaySensitiveMedia: t,
                  featureSwitches: s,
                  isNsfwUser: n,
                  loggedInUserId: d,
                  tweet: i,
                  userCountry: a,
                  userLanguage: c,
                })
              )
                return Object(ze.d)(i, o)
            }),
            _()(p()(r), '_handleReplyPress', function () {
              r.setState({ replyPressToggle: !r.state.replyPressToggle })
            }),
            _()(p()(r), '_handleModeratedIconClick', function () {
              return r._scribeAction({ element: 'moderated_replies_icon', action: 'click' })
            }),
            _()(p()(r), '_handleModeratedIconShown', function () {
              return r._scribeAction({ element: 'moderated_replies_icon', action: 'impression' })
            }),
            _()(p()(r), '_handleBirdwatchNotesIconClick', function () {
              return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'click' })
            }),
            _()(p()(r), '_handleBirdwatchNotesIconShown', function () {
              return r._scribeAction({ element: 'birdwatch_notes_icon', action: 'impression' })
            }),
            _()(p()(r), '_handleFocus', function () {
              r.setState({ enableKeyboardShortcuts: !0 })
            }),
            _()(p()(r), '_handleBlur', function () {
              r.setState({ enableKeyboardShortcuts: !1 })
            }),
            _()(p()(r), '_handleShowReportedTweet', function () {
              r.setState({ displayReported: !0 })
            }),
            _()(p()(r), '_getShortcutKeyHandlers', function () {
              var e = r._getMuteOrUnmuteAction(),
                t = e.onClick,
                n = e.shortcutKey,
                o = r._getBlockOrUnblockAction().shortcutKey,
                i = r.context.loggedInUserId,
                a = r.props.tweet
              if (!a) return {}
              var c = a.user.id_str === i
              return y()(y()({}, n && _()({}, n, t)), o && !c && _()({}, o, r._handleBlockOrUnblockConfirmOpen))
            }),
            _()(p()(r), '_handleBlockOrUnblockConfirmOpen', function () {
              r.setState({ showBlockOrUnblockConfirmation: !0 })
            }),
            _()(p()(r), '_handleBlockOrUnblockConfirmClose', function () {
              r.setState({ showBlockOrUnblockConfirmation: !1 })
            }),
            _()(p()(r), '_handleBlockOrUnblockUserConfirm', function () {
              var e = r._getBlockOrUnblockAction().onClick
              r._handleBlockOrUnblockConfirmClose(), e && e()
            }),
            _()(p()(r), '_getBlockOrUnblockAction', function () {
              var e = r.props,
                t = e.addToast,
                n = e.block,
                o = e.contextualBehavioralEventInfo,
                i = e.createLocalApiErrorHandler,
                a = e.promotedContent,
                c = e.tweet,
                l = e.unblock
              if (!c) return {}
              var s = c.user,
                d = {
                  addToast: t,
                  behavioralEventEntityToken: null == o ? void 0 : o.entityToken,
                  createLocalApiErrorHandler: i,
                  scribeAction: function (e) {
                    var t = e.element
                    r._scribeAction({ element: t, action: 'click' })
                  },
                }
              return Object(k.a)(y()(y()({}, d), {}, { block: n, unblock: l, user: s, promotedContent: a }))
            }),
            _()(p()(r), '_getMuteOrUnmuteAction', function () {
              var e = r.props,
                t = e.addToast,
                n = e.contextualBehavioralEventInfo,
                o = e.createLocalApiErrorHandler,
                i = e.mute,
                a = e.promotedContent,
                c = e.tweet,
                l = e.unmute
              if (!c) return {}
              var s = c.user,
                d = {
                  addToast: t,
                  behavioralEventEntityToken: null == n ? void 0 : n.entityToken,
                  createLocalApiErrorHandler: o,
                  scribeAction: function (e) {
                    var t = e.element
                    r._scribeAction({ element: t, action: 'click' })
                  },
                }
              return Object(xe.a)(y()(y()({}, d), {}, { mute: i, unmute: l, user: s, promotedContent: a }))
            }),
            _()(
              p()(r),
              '_getRenderCurationActionMenu',
              Object(Je.a)(function (e, t, n, o, r, i, a, c, l, s, d, u, p, h, v, m) {
                return function () {
                  return (
                    !!l &&
                    g.a.createElement(Re.a, {
                      behavioralEventEntityToken: h,
                      forwardPivotDisplayType: e,
                      isNsfwUser: n,
                      isPinned: o,
                      onDeleteTweet: function () {
                        var e = r.state || {},
                          n = e.fromApp,
                          o = e.usedFallback
                        n && !o ? t.goBack() : t.push('/')
                      },
                      onMenuClick: i,
                      onTweetDismiss: a,
                      promotedContent: c,
                      tweet: l,
                      userCountry: v,
                      userLanguage: m,
                      withChangeConversationControls: s,
                      withChangeConversationControlsTooltip: d,
                      withCommunityModerationAuthority: p,
                      withHideReply: u,
                      withMuteConversation: !0,
                      withViewHiddenReplies: !0,
                    })
                  )
                }
              }),
            ),
            _()(p()(r), '_scribeAction', function (e, t, n, o) {
              var i = r.props,
                a = i.promotedContent,
                c = i.richScribeAction,
                l = i.scribeNamespace,
                s = i.tweet,
                d = s ? Oe.a.forTweet(s, a) : void 0,
                u = o ? y()(y()({}, d), {}, { article_details: { is_ad_free: o } }) : d,
                p = y()(y()({ items: u ? [u] : [] }, Object(Ye.a)(n ? { click_tracking_embed_details: n } : null)), t)
              c(y()(y()({}, l), e), p)
            }),
            _()(p()(r), '_handleReplyContextClick', function (e, t) {
              r._scribeAction({ element: 'reply_context', action: 'click' }, { event_value: t })
            }),
            _()(p()(r), '_handlePromotedIndicatorClick', function () {
              r._handleAsyncPromotedEvent(Ve.b.FOOTER_PROFILE)
            }),
            _()(p()(r), '_handleMediaClick', function () {
              r._scribeAction({ element: 'platform_photo_card', action: 'click' }),
                r._handleAsyncPromotedEvent(Ve.b.EMBEDDED_MEDIA)
            }),
            _()(p()(r), '_handleEntityClick', function (e, t, n) {
              var o = r.props,
                i = o.adFreeArticleDomains,
                c = o.createLocalApiErrorHandler,
                l = o.fetchAdFreeToken,
                s = o.tweet,
                d = Ve.a[t],
                u = fe.a[t],
                p = Oe.a.getClickTrackingEmbedDetails(r.props.promotedContent, n)
              if (d) {
                var h =
                  d === Ve.b.URL_CLICK && e.currentTarget instanceof window.HTMLElement
                    ? { url: e.currentTarget.href }
                    : void 0
                r._handleAsyncPromotedEvent(d, h)
              }
              t === Be.a.URL && p && r._scribeAction({ action: He.b.CLICK_ID_EMBED }, void 0, p)
              var v = !1
              if (r._hasClaimsForAdFreeArticles && null != n && n.expandedUrl) {
                var m = new URL(n.expandedUrl).hostname,
                  f = new we.a(l, c()).getAdFreeArticlesClickHandler({
                    destinationUrl: n.embeddedUrl,
                    linkDomain: m,
                    adFreeArticleDomains: i,
                    tweetAuthorUserId: null == s ? void 0 : s.user.id_str,
                  }),
                  w = a()(f, 2),
                  _ = w[0],
                  b = w[1]
                _ && (b(e), (v = !0))
              }
              if (t === Be.a.INTERACTIVE_HIGHLIGHT && void 0 !== (null == n ? void 0 : n.id))
                return r._scribeAction(
                  { element: 'interactive_text', action: u },
                  { interactive_text_details: { id: n.id } },
                  void 0,
                  v,
                )
              u && r._scribeAction({ action: u }, void 0, void 0, v)
            }),
            _()(p()(r), '_handlePromotedDisclaimerLearnMoreClick', function (e) {
              return function () {
                r._scribeAction({ component: e, element: 'learn_more', action: 'click' })
              }
            }),
            _()(p()(r), '_handlePoliticalSponsorWebsiteClick', function () {
              r._scribeAction({ component: 'political_ad', element: 'organization_website', action: 'click' })
            }),
            _()(p()(r), '_handleAnalyticsClick', function () {
              r._scribeAction({ element: 'analytics', action: 'click' })
            }),
            _()(p()(r), '_handlePromoteButtonClick', function () {
              r._scribeAction({ element: 'promote', action: 'click' })
            }),
            _()(p()(r), '_handlePromoteAgainButtonClick', function () {
              r._scribeAction({ element: 'promote_again', action: 'click' })
            }),
            _()(p()(r), '_handleAvatarClick', function () {
              var e = r.props.tweet
              r._scribeAction(
                { element: 'avatar', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                r._handleAsyncPromotedEvent(Ve.b.PROFILE_IMAGE_CLICK)
            }),
            _()(p()(r), '_handleScreenNameClick', function () {
              var e = r.props.tweet
              r._scribeAction(
                { element: 'user', action: 'profile_click' },
                { profile_id: ''.concat(e ? e.user.id : '') },
              ),
                r._handleAsyncPromotedEvent(Ve.b.SCREEN_NAME_CLICK)
            }),
            _()(p()(r), '_handleCaretClick', function () {
              r._scribeAction({ element: 'caret', action: 'click' })
            }),
            _()(p()(r), '_handleCommunityFetch', function () {
              var e = r.props,
                t = e.createLocalApiErrorHandler,
                n = e.fetchCommunityIfNeeded,
                o = e.tweet
              if (o && r._isCommunitiesEnabled) {
                var i,
                  a = o.community_id_str,
                  c = null === (i = o.quoted_status) || void 0 === i ? void 0 : i.community_id_str
                a && n(a).catch(t()), c && n(c).catch(t())
              }
            }),
            _()(p()(r), '_handleHeadsUpRender', function () {
              var e = r.props,
                t = e.conversationAnnotation,
                n = e.tweet,
                o = e.updateHeadsUp
              if (!n) return null
              var i = Le.a.getOriginalTweet(n),
                a = (null == i ? void 0 : i.reply_count) > 20
              if (!('Political' === (null == t ? void 0 : t.conversation_annotation_type) && a)) return null
              o(i.id_str)
            }),
            _()(p()(r), '_handleTopicFetch', function () {
              var e,
                t = r.props,
                n = t.createLocalApiErrorHandler,
                o = t.fetchTopicIfNeeded,
                i = t.socialContext,
                a = null == i || null === (e = i.topicContext) || void 0 === e ? void 0 : e.topicId
              a && o(a).catch(n())
            }),
            _()(p()(r), '_handleUndoTopicNotInterested', function () {
              var e = r.props,
                t = e.createLocalApiErrorHandler,
                n = e.topic,
                o = e.undoTopicNotInterested
              r._scribeAction({ element: 'topic', action: 'un_not_interested' }), n && o(n.id).catch(t())
            }),
            _()(p()(r), '_handleCardLinkClick', function (e) {
              var t,
                n = r.props,
                o = n.adFreeArticleDomains,
                i = n.createLocalApiErrorHandler,
                c = n.fetchAdFreeToken,
                l = n.isCardArticle,
                s = n.setArticlesVisited,
                d = n.tweet
              if (r._isArticleNudgeEnabled && l) {
                var u,
                  p,
                  h = null == d || null === (u = d.card) || void 0 === u ? void 0 : u.url
                if (h)
                  s(h),
                    r._scribeAction(
                      { component: 'article_nudge', element: 'read_article', action: 'click' },
                      {
                        items: [
                          {
                            token: null == d || null === (p = d.card) || void 0 === p ? void 0 : p.url,
                            in_reply_to_tweet_id: null == d ? void 0 : d.id_str,
                          },
                        ],
                      },
                    )
              }
              var v = null == d || null === (t = d.card) || void 0 === t ? void 0 : t.binding_values
              if (r._hasClaimsForAdFreeArticles && v) {
                var m = new we.a(c, i()).getAdFreeArticlesClickHandler({
                    destinationUrl: Ke.a.getBindingValue(v, 'card_url'),
                    linkDomain: Ke.a.getBindingValue(v, 'domain'),
                    adFreeArticleDomains: o,
                  }),
                  f = a()(m, 2),
                  w = f[0],
                  _ = f[1]
                w && _(e)
              }
            }),
            _()(p()(r), '_handleMediaHashtagHighlightClick', function () {
              r._handleAsyncPromotedEvent(Ve.b.HASHTAG_CLICK)
            }),
            r
          )
        }
        return (
          d()(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this._handleTopicFetch(),
                  this._handleCommunityFetch(),
                  this._handleHeadsUpRender(),
                  this._hasClaimsForAdFreeArticles && this.props.loadAdFreeArticleDomainsFromPersistence()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                this.props.tweet &&
                  e.tweet &&
                  !e.tweet.user.blocking &&
                  this.props.tweet.user.blocking &&
                  this.props.history.goBack({ backLocation: '/' })
                this.props.conversationAnnotation !== e.conversationAnnotation && this._handleHeadsUpRender()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                var e = this.props.addFlag
                this._shouldShowDownvoteInlineEducation() && e(j.k, { updateTimestamp: !0 })
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.context.loggedInUserId,
                  t = this.props.tweet
                if (!t) return null
                var n = t.user.id_str === e,
                  o = Object(Qe.b)(t.withheld_scope),
                  r = Object(Xe.h)(t) && !this.state.displayReported
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  o
                    ? g.a.createElement(
                        ae.a,
                        null,
                        this._renderWithheldTweet(),
                        n ? this._renderTweetComponent() : null,
                      )
                    : r
                    ? this._renderReportedTombstone()
                    : this._renderTweetComponent(),
                  this._renderIntentPrompt(),
                  this.state.showBlockOrUnblockConfirmation && !n
                    ? this._renderBlockOrUnblockConfirmationSheet()
                    : null,
                )
              },
            },
            {
              key: '_renderIntentPrompt',
              value: function () {
                var e = this.props,
                  t = e.forwardPivotInfo,
                  n = e.history,
                  o = e.tweet
                if (o && n.location.pathname.indexOf('/intent/') > -1)
                  return g.a.createElement(Ce.a, {
                    forwardPivotInfo: t,
                    history: n,
                    location: n.location,
                    tweetId: o.id_str,
                  })
              },
            },
            {
              key: '_renderTweetComponent',
              value: function () {
                var e,
                  t = this.props,
                  n = t.allowDownvote,
                  o = t.changeDropdownState,
                  i = t.contextTweet,
                  a = t.contextualBehavioralEventInfo,
                  c = t.conversationAnnotation,
                  l = t.forwardPivotInfo,
                  s = t.hasModeratedReplies,
                  d = t.history,
                  u = t.innerForwardPivotInfo,
                  p = t.isNsfwUser,
                  h = t.isPinned,
                  v = t.location,
                  m = t.loggedInUser,
                  f = t.onTweetDismiss,
                  w = t.promotedContent,
                  _ = t.promotedContentAdvertiser,
                  b = t.quoteTweetSocialContextProps,
                  y = t.quotedTweetTombstoneInfo,
                  C = t.readerModeAvailable,
                  k = t.replyDropdownSelection,
                  I = t.scribeData,
                  E = t.scribeNamespace,
                  T = t.socialContext,
                  A = t.topic,
                  S = t.topicFollowPrompt,
                  x = t.tweet,
                  P = t.userCountry,
                  O = t.userLanguage,
                  F = t.withActions,
                  D = t.withCommunityModerationAuthority,
                  R = t.withHideReply,
                  M = t.withInlineMedia,
                  U = t.withSocialContext,
                  j = this.context.loggedInUserId,
                  N = {
                    allowDownvote: n,
                    contextTweet: i,
                    forwardPivotInfo: l,
                    hasModeratedReplies: s,
                    innerForwardPivotInfo: u,
                    promotedContent: w,
                    promotedContentAdvertiser: _,
                    quotedTweetTombstoneInfo: y,
                    quoteTweetSocialContextProps: b,
                    readerModeAvailable: C,
                    socialContext: T,
                    topic: A,
                    topicFollowPrompt: S,
                    tweet: x,
                    withActions: F,
                    withInlineMedia: M,
                    withSocialContext: U,
                  },
                  L = this.state.enableKeyboardShortcuts
                if (!x) return null
                var B = Object(Ge.a)(this._cachedScribeNamespace, E)
                    ? this._cachedScribeNamespace
                    : (this._cachedScribeNamespace = E),
                  H = x && x.card && !x.is_quote_status ? x.card.url : void 0,
                  K = Le.a.getOriginalTweet(x),
                  q = K.user.id_str === j,
                  V = !K.in_reply_to_status_id_str && q && !K.community_id_str,
                  W = this._renderConversationControlsTooltip(),
                  X = !!K.in_reply_to_status_id_str,
                  z = (null == K ? void 0 : K.reply_count) > 20,
                  J =
                    'Political' === (null == c ? void 0 : c.conversation_annotation_type) &&
                    (null === (e = x.headsUp) || void 0 === e ? void 0 : e.showBanner) &&
                    !X &&
                    z,
                  G =
                    this.context.featureSwitches.isTrue(
                      'responsive_web_deamplification_replies_dropdown_selector_enabled',
                    ) && x.reply_count > 0
                return g.a.createElement(
                  qe.c,
                  { data: this._getScribeData(x.retweeted_status || x, w, I), namespace: B },
                  g.a.createElement(
                    ge.a,
                    { enabled: !!L, handlers: this._getShortcutKeyHandlers() },
                    this._renderLeftConversationBanner(),
                    g.a.createElement(
                      De.b,
                      r()({}, N, {
                        enableKeyboardShortcuts: L,
                        excludeCardUrl: H,
                        inlineCalloutInfo: this._getInlineCalloutInfo(),
                        isFocal: !0,
                        loggedInUser: m,
                        onAnalyticsClick: this._handleAnalyticsClick,
                        onAvatarClick: this._handleAvatarClick,
                        onBirdwatchNotesIconClick: this._handleBirdwatchNotesIconClick,
                        onBirdwatchNotesIconShown: this._handleBirdwatchNotesIconShown,
                        onBlur: this._handleBlur,
                        onCardLinkClick: this._handleCardLinkClick,
                        onEntityClick: this._handleEntityClick,
                        onFocus: this._handleFocus,
                        onMediaClick: this._handleMediaClick,
                        onMediaHashtagHighlightClick: this._handleMediaHashtagHighlightClick,
                        onModeratedIconClick: this._handleModeratedIconClick,
                        onModeratedIconShown: this._handleModeratedIconShown,
                        onPoliticalSponsorWebsiteClick: this._handlePoliticalSponsorWebsiteClick,
                        onPromoteAgainButtonClick: this._handlePromoteAgainButtonClick,
                        onPromoteButtonClick: this._handlePromoteButtonClick,
                        onPromotedDisclaimerLearnMoreClick: this._handlePromotedDisclaimerLearnMoreClick,
                        onPromotedIndicatorClick: this._handlePromotedIndicatorClick,
                        onReplyContextClick: this._handleReplyContextClick,
                        onReplyPress: this._handleReplyPress,
                        onScreenNameClick: this._handleScreenNameClick,
                        onUndoTopicNotInterestedClick: this._handleUndoTopicNotInterested,
                        renderCurationActionMenu: this._getRenderCurationActionMenu(
                          null == l ? void 0 : l.displayType,
                          d,
                          p,
                          h,
                          v,
                          this._handleCaretClick,
                          f,
                          w,
                          Le.a.getOriginalTweet(x),
                          V,
                          W,
                          R,
                          D,
                          null == a ? void 0 : a.entityToken,
                          P,
                          O,
                        ),
                        showConversationHeadsUp: J,
                        tweet: x,
                      }),
                    ),
                    G ? g.a.createElement(Pe.a, { changeDropdownState: o, replyDropdownSelection: k }) : null,
                    this._renderInlineReply(),
                    this._renderDownvoteEducation(),
                  ),
                )
              },
            },
            {
              key: '_renderLeftConversationBanner',
              value: function () {
                var e,
                  t = this.props.tweet,
                  n = this.context.loggedInUserId
                return (null == t || null === (e = t.unmentioned_user_ids) || void 0 === e ? void 0 : e.includes(n))
                  ? g.a.createElement(Se, null)
                  : null
              },
            },
            {
              key: '_renderDownvoteEducation',
              value: function () {
                var e = this,
                  t = this.props.addFlag,
                  n = this.state.showDownvoteFullscreenFromInline
                return g.a.createElement(
                  g.a.Fragment,
                  null,
                  n || this._shouldShowDownvoteFullscreenEducation()
                    ? g.a.createElement(oe, {
                        onDismiss: function () {
                          n ? e.setState({ showDownvoteFullscreenFromInline: !1 }) : t(j.k)
                        },
                      })
                    : null,
                  this._shouldShowDownvoteInlineEducation()
                    ? g.a.createElement(me, {
                        onAction: function () {
                          e.setState({ showDownvoteFullscreenFromInline: !0 })
                        },
                        onClose: function () {
                          t(j.k, { updateTimestamp: !0 })
                        },
                      })
                    : null,
                )
              },
            },
            {
              key: '_renderInlineReply',
              value: function () {
                var e = this.props,
                  t = e.history,
                  n = e.location,
                  o = e.tweet,
                  r = e.tweetId,
                  i = this.state.replyPressToggle,
                  a = this.context.loggedInUserId
                if (!o) return null
                var c = a && !this._shouldDisable(o, je.a.Reply),
                  l = Me.b.isMobileOS() ? be : ye
                return c
                  ? g.a.createElement(l, { history: t, location: n, parentTweetId: r, replyPressToggle: i })
                  : null
              },
            },
            {
              key: '_renderWithheldTweet',
              value: function () {
                var e = this.props.tweet
                return (
                  !!e &&
                  g.a.createElement(Qe.a, {
                    displayTextRange: e.display_text_range,
                    entities: e.withheld_entities || e.entities,
                    lang: e.lang,
                    text: e.withheld_text || e.text,
                  })
                )
              },
            },
            {
              key: '_renderReportedTombstone',
              value: function () {
                var e = this.props.tweet
                if (e) {
                  var t = Le.a.getOriginalTweet(e),
                    n = Object(Xe.c)(t.reportingVisibility)
                  return g.a.createElement(
                    Fe.a,
                    { actionText: Ze, lang: e.lang, onClick: this._handleShowReportedTweet },
                    n,
                  )
                }
              },
            },
            {
              key: '_handleAsyncPromotedEvent',
              value: function (e, t) {
                var n = this.props,
                  o = n.createLocalApiErrorHandler,
                  r = n.log,
                  i = n.promotedContent,
                  a = n.tweet
                if (a && i) {
                  var c = i.disclosure_type,
                    l = i.impression_id
                  r({
                    disclosureType: c,
                    itemId: a.id_str,
                    itemType: 'tweet',
                    params: y()({ event: e, impression_id: l }, t),
                  }).catch(o())
                }
              },
            },
          ]),
          n
        )
      })(g.a.Component)
      _()(et, 'contextType', Ne.a)
      var tt = Object(Ue.a)(te(et))
      t.b = Object(qe.a)({ component: 'tweet' })(tt)
    },
    ReVx: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        r = n.n(o),
        i = (n('ERkP'), n('xZXe')),
        a = n('meql')
      t.default = function (e) {
        return Object(a.a)(r()(r()({}, e), {}, { component: i.a }))
      }
    },
    b5s6: function (e, t, n) {
      'use strict'
      var o = n('97Jx'),
        r = n.n(o),
        i = n('m3Bd'),
        a = n.n(i),
        c = n('ERkP'),
        l = n.n(c),
        s = n('v6aA'),
        d = n('XOJV'),
        u = n('eSoz'),
        p = n('rxPX'),
        h = n('0KEI'),
        v = function (e, t) {
          return t.tweetId
        },
        m = function (e, t) {
          var n = t.tweetId,
            o = n && d.a.select(e, n)
          return o ? Object(u.g)(e, o) : void 0
        },
        f = Object(p.a)()
          .propsFromState(function () {
            return { community: m, hydratedTweet: d.a.createHydratedTweetSelector(v) }
          })
          .propsFromActions(function () {
            return {
              createLocalApiErrorHandler: Object(h.createLocalApiErrorHandlerWithContextFactory)(
                'QUOTE_TWEET_CONTAINER',
              ),
              fetchCommunityIfNeeded: u.c.fetchOneIfNeeded,
            }
          }),
        w = n('YeIG'),
        _ = n('uCxL'),
        b = n('x5Pi'),
        y = ['community', 'createLocalApiErrorHandler', 'fetchCommunityIfNeeded', 'hydratedTweet', 'tweetId'],
        C = f(function (e) {
          var t = e.community,
            n = e.createLocalApiErrorHandler,
            o = e.fetchCommunityIfNeeded,
            i = e.hydratedTweet,
            c = (e.tweetId, a()(e, y)),
            d = l.a.useContext(s.a),
            u = d.featureSwitches,
            p = d.loggedInUserId,
            h = null == i ? void 0 : i.community_id_str
          l.a.useEffect(
            function () {
              h && Object(w.a)(t) && o(h).catch(n())
            },
            [t, h, n, o],
          )
          var v = u.isTrue('responsive_web_alt_text_badge_enabled'),
            m = i && Object(b.f)(i, p, t),
            f = m && Object(b.e)(m),
            C = u.isTrue('responsive_web_reactions_enabled')
          return l.a.createElement(
            _.a,
            r()({}, c, {
              loggedInUserId: p,
              shouldShowAltLabelAlways: v,
              socialContextProps: f,
              tweet: i,
              withReactions: C,
            }),
          )
        })
      t.a = C
    },
    i8De: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        r = n.n(o),
        i = n('ERkP'),
        a = n.n(i),
        c = n('meql'),
        l = n('xZXe'),
        s = n('3XMw'),
        d = n.n(s),
        u = n('6vad'),
        p = n('MWbm'),
        h = d.a.e25a0c3a,
        v = function (e) {
          return a.a.createElement(p.a, null, a.a.createElement(u.b, { text: h }), a.a.createElement(l.a, e))
        }
      t.default = function (e) {
        return Object(c.a)(r()(r()({}, e), {}, { component: v }))
      }
    },
    kXdP: function (e, t, n) {
      'use strict'
      var o = n('ERkP'),
        r = n.n(o),
        i = n('t62R'),
        a = n('OiMc'),
        c = n('rHpw').a.create(function (e) {
          return {
            hoverText: {
              marginHorizontal: e.componentDimensions.gutterHorizontal,
              marginVertical: e.componentDimensions.gutterVertical,
            },
            popover: { maxWidth: 'calc('.concat(e.spaces.space64, ' * 4)'), minWidth: e.spaces.space64 },
          }
        })
      t.a = function (e) {
        var t = e.children,
          n = e.hoverText
        return r.a.createElement(
          a.a,
          {
            contentStyle: c.popover,
            enableHover: !0,
            renderContent: function () {
              return r.a.createElement(i.b, { style: c.hoverText }, n)
            },
            withArrow: !0,
          },
          t,
        )
      }
    },
    meql: function (e, t, n) {
      'use strict'
      var o = n('yiKp'),
        r = n.n(o),
        i = (n('hBpG'), n('7x/C'), n('LW0h'), n('Fmkq')),
        a = n('ezF+'),
        c = n('euJ+'),
        l = (n('ERkP'), n('wtjx')),
        s = n('VPAj'),
        d = n('Df4Q'),
        u = n('x5Pi'),
        p = n('Rp9C'),
        h = n('Zejx'),
        v = n('pbku'),
        m = n('kY28'),
        f = { component: 'tweet' },
        w = { component: 'thread' },
        _ = { type: 'serversideContextKey', serversideContextType: 'tweet' },
        b = function (e) {
          var t = e.applyFeedbackAction,
            n = e.entry,
            o = e.scribe,
            i = e.scribeData,
            a = e.scribeNamespace
          return function () {
            t({ entry: n, feedbackKeys: [c.b] }), o(r()(r()({}, a), {}, { element: c.g(c.a, n), action: 'click' }), i)
          }
        }
      t.a = function (e) {
        var t = e.allowDownvote,
          n = void 0 !== t && t,
          o = e.component,
          c = e.displayBlocked,
          y = e.dismissable,
          C = void 0 !== y && y,
          g = e.createAdditionalProps,
          k = void 0 === g ? Object(s.a)({}) : g,
          I = e.divider,
          E = e.hideConversationControlsEducationText,
          T = void 0 !== E && E,
          A = e.hideExclusivityInfoEducationTextInReplies,
          S = void 0 !== A && A,
          x = e.hideTrustedFriendsEducationTextInReplies,
          P = void 0 !== x && x,
          O = e.isReaderMode,
          F = void 0 !== O && O,
          D = e.selectData,
          R = e.shouldSelfThreadIncludeAvatar,
          M = void 0 !== R && R,
          U = e.showWithheldBannerOnMyTweets,
          j = void 0 === U || U,
          N = e.shouldStoreTypeaheadItem,
          L = e.tweetTextSize,
          B = e.withActionsDisabled,
          H = void 0 !== B && B,
          K = e.withRemoveFromBookmarks,
          q = void 0 !== K && K,
          V = e.withSelfThread,
          W = void 0 === V || V,
          X = e.withMuteConversation,
          z = void 0 !== X && X,
          J = e.withUserPresence,
          G = void 0 !== J && J,
          Y = e.bookmarkFolderId,
          Q = void 0 === Y ? void 0 : Y
        return a.g({
          component: o,
          bindActions: function (e) {
            var t = e.module
            return {
              saveAsRecentSearch: l.a,
              scribe: i.richScribeAction,
              applyFeedbackAction: t.applyFeedbackAction,
              applyReactionInstructions: t.applyReactionInstructions,
            }
          },
          getBehavioralEventContextOverride: function (e) {
            var t,
              n,
              o,
              i = null !== (t = e.content.retweetedStatusId) && void 0 !== t ? t : e.content.id,
              a = r()(r()({}, _), {}, { serversideContextId: i })
            return {
              viewType: e.type,
              token:
                null === (n = e.itemMetadata) || void 0 === n || null === (o = n.clientEventInfo) || void 0 === o
                  ? void 0
                  : o.entityToken,
              clientEntity: a,
            }
          },
          createProps: function (e) {
            var t,
              o = e.actions,
              i = e.data,
              a = e.entry,
              l = e.feedbackItems,
              s = (e.module, e.scribeData),
              p = e.scribeNamespace,
              h = o.applyFeedbackAction,
              f = o.applyReactionInstructions,
              w = o.saveAsRecentSearch,
              _ = o.scribe,
              y = a.content,
              g = y.conversation_annotation,
              I = y.forwardPivot,
              E = y.hasModeratedReplies,
              A = y.id,
              x = y.innerForwardPivot,
              O = y.promotedMetadata,
              D = y.ruxContext,
              R = y.topicFollowPrompt,
              U = a.conversationPosition,
              B = a.conversationTreeMetadata,
              K = a.referringContext,
              V = !!a.conversationPosition && !a.conversationPosition.isStart,
              X = Object(u.d)({ socialContext: a.content.socialContext, topic: i.topic })
            U
              ? (t = U.showReplyContext && !F ? m.a.ReplyContextTypes.Isolated : m.a.ReplyContextTypes.None)
              : F && (t = m.a.ReplyContextTypes.None)
            var J = a.content.innerTombstoneInfo,
              Y = null == K ? void 0 : K.contextualClientEventInfo,
              Z = l.length > 0,
              $ = C && !Z
            return r()(
              {
                allowDownvote: n,
                contextTweetId: null == K ? void 0 : K.contextTweetId,
                contextualClientEventInfo: a.itemMetadata.clientEventInfo,
                conversationPosition: U,
                conversationTreeMetadata: B,
                conversationAnnotation: g,
                displayBlocked: c,
                displayPromotedContent: !0,
                feedbackItems: l,
                focalTweetId: null == K ? void 0 : K.focalTweetId,
                forwardPivotInfo: I,
                shouldStoreTypeaheadItem: N,
                hasModeratedReplies: E,
                hideConversationControlsEducationText: T || V,
                hideExclusivityInfoEducationTextInReplies: S,
                hideTrustedFriendsEducationTextInReplies: P,
                hitHighlights: a.content.highlights && a.content.highlights.textHighlights,
                injectedFeedbackItem:
                  l && !F
                    ? {
                        markNotInterestedTopic: l.find(function (e) {
                          return e.feedbackKey === Object(d.b)(a.entryId)
                        }),
                      }
                    : void 0,
                innerForwardPivotInfo: x,
                isReaderMode: F,
                onTweetDismiss: $
                  ? b({ entry: a, scribe: _, applyFeedbackAction: h, scribeData: s, scribeNamespace: p })
                  : void 0,
                onLike: function () {
                  return f({ entry: a, triggerName: v.a.ON_LIKE })
                },
                promotedContent: null == K ? void 0 : K.promotedContent,
                quotedTweetTombstoneInfo: J,
                readerModeAvailable: i.readerModeAvailable,
                replyContext: t,
                ruxContext: D,
                saveAsRecentSearch: w,
                scribeData: s,
                scribeNamespace: r()(
                  r()({}, p),
                  {},
                  {
                    section:
                      'descendant' === (null == U ? void 0 : U.position)
                        ? 'conversation_descendants'
                        : 'ancestor' === (null == U ? void 0 : U.position)
                        ? 'conversation_ancestors'
                        : p.section,
                    component: (null == Y ? void 0 : Y.component) || p.component,
                    action: (null == Y ? void 0 : Y.action) || p.action,
                    element: (null == Y ? void 0 : Y.element) || p.element,
                  },
                ),
                shouldSelfThreadIncludeAvatar: M,
                showWithheldBannerOnMyTweets: j,
                socialContext: X || (null == K ? void 0 : K.socialContext),
                topicFollowPrompt: R || (null == K ? void 0 : K.topicFollowPrompt),
                tweetId: A,
                tweetTextSize: L,
                urtPromotedContent: O,
                withActions: !0,
                withActionsDisabled: H,
                withInlineMedia: !(null != K && K.hideMedia) || F,
                withMuteConversation: z,
                withRemoveFromBookmarks: q,
                withSelfThread: W,
                withSocialContext: !0,
                withUserPresence: G,
                bookmarkFolderId: Q,
              },
              k(a, i, o),
            )
          },
          divider: I || {},
          defaultScribeNamespace: F ? w : f,
          selectData: function (e) {
            var t = e.entry,
              n = e.module,
              o = D ? D({ entry: t, module: n }) : {}
            return r()(
              r()({}, o),
              {},
              {
                topic: function (e) {
                  return t.content.socialContext && t.content.socialContext.topicContext
                    ? h.a.select(e, t.content.socialContext.topicContext.topicId)
                    : void 0
                },
                readerModeAvailable: function (e) {
                  var t,
                    o = n.selectMetadata(e)
                  return (
                    (null == o || null === (t = o.reader_mode_config) || void 0 === t
                      ? void 0
                      : t.is_reader_mode_available) || !1
                  )
                },
              },
            )
          },
          shouldDisplayBorder: function (e) {
            var t = e.conversationPosition,
              n = e.conversationTreeMetadata
            return !(
              F ||
              (t &&
                !t.isEnd &&
                (!n ||
                  !1 !== n.descendantConnector ||
                  0 !==
                    n.indents.filter(function (e) {
                      return 'line' === e.displayType
                    }).length))
            )
          },
          getScribeDataItem: function (e) {
            return p.a.getTweetURTEntryItem(e)
          },
          isFocusable: Object(s.a)(!0),
        })
      }
    },
    pbku: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      n('yH/f')
      var o = Object.freeze({
        ON_LINGER: 'onLinger',
        ON_IS_RELEVANT: 'onIsRelevant',
        ON_SHOW_MORE: 'onShowMore',
        ON_LIKE: 'onLike',
      })
    },
    tvEI: function (e, t, n) {
      'use strict'
      n.r(t)
      var o = n('yiKp'),
        r = n.n(o),
        i = (n('ERkP'), n('meql')),
        a = n('b5s6')
      t.default = function (e) {
        return Object(i.a)(r()(r()({}, e), {}, { component: a.a }))
      }
    },
    wtjx: function (e, t, n) {
      'use strict'
      n.d(t, 'g', function () {
        return v
      }),
        n.d(t, 'f', function () {
          return m
        }),
        n.d(t, 'e', function () {
          return f
        }),
        n.d(t, 'd', function () {
          return y
        }),
        n.d(t, 'b', function () {
          return g
        }),
        n.d(t, 'a', function () {
          return I
        }),
        n.d(t, 'c', function () {
          return E
        })
      var o = n('KEM+'),
        r = n.n(o),
        i = n('yiKp'),
        a = n.n(i),
        c = (n('7x/C'), n('JtPf'), n('LW0h'), n('Ee2X'), n('Ssj5')),
        l = n('RqPI'),
        s = 'recentSearches',
        d = 'rweb.recentSearches',
        u = function (e) {
          return function (t, n, o) {
            return o.userPersistence.set(d, { recentSearches: e }).catch(function () {
              Promise.resolve()
            })
          }
        },
        p = function (e, t) {
          var n = []
          if (e && e.user) {
            var o = e.user
            n = t.filter(function (e) {
              return e.keyword || e.topic || e.event || (e.user && e.user.id !== o.id)
            })
          } else if (e && e.topic) {
            var r = e.topic
            n = t.filter(function (e) {
              return e.keyword || e.user || e.event || (e.topic && e.topic.id !== r.id)
            })
          } else if (e && e.event) {
            var i = e.event
            n = t.filter(function (e) {
              return e.keyword || e.user || e.topic || (e.event && e.event.id !== i.id)
            })
          } else if (e && e.keyword) {
            var a = e.keyword
            n = t.filter(function (e) {
              return (e.keyword && e.keyword.query !== a.query) || e.user || e.topic || e.event
            })
          }
          return n
        },
        h = { fetched: !1, recentSearches: [] }
      var v = function (e) {
          return e.recentSearches.recentSearches
        },
        m = function (e) {
          return v(e)[0] || null
        },
        f = function (e) {
          return e.recentSearches.fetched
        },
        w = 'rweb/recentSearches/INIT_FROM_CACHE',
        _ = function (e) {
          return { type: w, payload: e }
        },
        b = 'rweb/recentSearches/REMOVE_QUERY',
        y = function (e) {
          return function (t, n, o) {
            o.userPersistence
            t({ payload: e, type: b })
            var r = n().recentSearches
            return Object(l.m)(n()) ? t(u(r.recentSearches)) : Promise.resolve()
          }
        },
        C = 'rweb/recentSearches/CLEAR_ALL',
        g = function () {
          return function (e, t, n) {
            n.userPersistence
            e({ type: C })
            var o = t().recentSearches
            return Object(l.m)(t()) ? e(u(o.recentSearches)) : Promise.resolve()
          }
        },
        k = 'rweb/recentSearches/ADD_QUERY',
        I = function (e) {
          return function (t, n, o) {
            o.userPersistence
            t({ payload: e, type: k })
            var r = n().recentSearches
            return Object(l.m)(n()) ? t(u(r.recentSearches)) : Promise.resolve()
          }
        },
        E = function () {
          return function (e, t, n) {
            n.userPersistence
            return t().recentSearches.fetched
              ? Promise.resolve()
              : e(function (e, t, n) {
                  var o = n.userPersistence,
                    r = t()
                  return Object(l.m)(r)
                    ? o
                        .get(d)
                        .then(function (t) {
                          e(_(t))
                        })
                        .catch(function () {
                          e(_())
                        })
                    : (e(_()), Promise.resolve())
                })
          }
        }
      c.a.register(
        r()({}, s, function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case k:
              var n = t.payload,
                o = n ? p(n, e.recentSearches) : []
              return o.length > 49 && o.splice(49, 1), n && o.unshift(n), a()(a()({}, e), {}, { recentSearches: o })
            case b:
              var r = t.payload,
                i = r ? p(r, e.recentSearches) : []
              return a()(a()({}, e), {}, { recentSearches: i })
            case C:
              return { fetched: !0, recentSearches: [] }
            case w:
              return a()(a()(a()({}, e), t.payload), {}, { fetched: !0 })
            default:
              return e
          }
        }),
      )
    },
  },
])
//# sourceMappingURL=WIPED
